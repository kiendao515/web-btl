import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from '../teacher/entities/teacher.entity';
import { CreateRegisterOffClassDto } from './dto/create-register-off-class.dto';
import { UpdateRegisterOffClassDto } from './dto/update-register-off-class.dto';
import { RegisterOffClass } from './entities/register-off-class.entity';

@Injectable()
export class RegisterOffClassService {
  constructor(
    @InjectModel(Teacher.name) private teacher: Model<TeacherDocument>,
    @InjectModel(RegisterOffClass.name) private registerOffClass: Model<RegisterOffClass>,
    private jwtService: JwtService,
  ) { }
  async create(token:any,createRegisterOffClassDto: CreateRegisterOffClassDto) {
    try {
      const payload = this.jwtService.verify(token);
      if (payload.role == 2) {
        let teacher = await this.teacher.findOne({ email: payload.email })
        if (teacher) {
          let c = new RegisterOffClass();
          c.startDate = createRegisterOffClassDto.startDate;
          c.endDate = createRegisterOffClassDto.endDate;
          c.reason= createRegisterOffClassDto.reason;
          c.teacher = teacher;
          return new this.registerOffClass(c).save();
        }
      } else throw new HttpException({ message: 'user is not a teacher' }, HttpStatus.FORBIDDEN);
    } catch (error) {
      throw new HttpException({ message: error.message }, HttpStatus.FORBIDDEN);
    }
  }

  async findAll() {
    return await this.registerOffClass.find({check:"pending"})
  }

  findOne(id: number) {
    return `This action returns a #${id} registerOffClass`;
  }

  async updateStatus(update: UpdateRegisterOffClassDto):Promise<any> {
    try {
      if (update.status == "true" || update.status == "false") {
        let c = await this.registerOffClass.findOneAndUpdate({ _id: update.registerOffClassId }, { check: update.status }, { new: true });
        if (c) {
          return c;
        } else throw new HttpException({ message: "Đơn đăng kí nghỉ phép k tồn tại" }, HttpStatus.NOT_FOUND);
      } else {
        throw new HttpException({ message: "status is can only true or false" }, HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      throw new HttpException({ message: error.message}, HttpStatus.NOT_FOUND);
    }
  }
  async teacherCheckOwnRequest(token:any):Promise<any>{
    try {
      const payload = this.jwtService.verify(token);
      if (payload.role == 2) {
        let teacher = await this.teacher.findOne({ email: payload.email })
        if (teacher) {
          return await this.registerOffClass.findOne({ teacher: teacher._id }).populate('teacher')
        } else return null;
      }
    } catch (error) {
      throw new HttpException({ message: error.message }, HttpStatus.FORBIDDEN);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} registerOffClass`;
  }
}
