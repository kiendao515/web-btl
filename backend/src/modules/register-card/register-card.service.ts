import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher, TeacherDocument } from '../teacher/entities/teacher.entity';
import { CreateRegisterCardDto } from './dto/create-register-card.dto';
import { UpdateRegisterCardDto } from './dto/update-register-card.dto';
import { RegisterCard } from './entities/register-card.entity';

@Injectable()
export class RegisterCardService {
  constructor(
    @InjectModel(Teacher.name) private teacher: Model<TeacherDocument>,
    @InjectModel(RegisterCard.name) private registerCard: Model<RegisterCard>,
    private jwtService: JwtService,
  ) { }
  async create(token:any,createRegisterCardDto: CreateRegisterCardDto) {
    try {
      const payload = this.jwtService.verify(token);
      if (payload.role == 2) {
        let teacher = await this.teacher.findOne({ email: payload.email })
        if (teacher) {
          let c = new RegisterCard();
          c.birthCertificateImage = createRegisterCardDto.birthCertificateImage;
          c.identityImage = createRegisterCardDto.identityImage;
          c.teacherImage= createRegisterCardDto.teacherImage;
          c.teacher = teacher
          return new this.registerCard(c).save();
        }
      } else throw new HttpException({ message: 'user is not a teacher' }, HttpStatus.FORBIDDEN);
    } catch (error) {
      throw new HttpException({ message: error.message }, HttpStatus.FORBIDDEN);
    }
  }

  async findAll():Promise<any> {
    return await this.registerCard.find({check:"pending"});
  }

  findOne(id: number) {
    return `This action returns a #${id} registerCard`;
  }

  async updateStatus(update: UpdateRegisterCardDto):Promise<any> {
    if (update.status == "true" || update.status == "false") {
      let c = await this.registerCard.findOneAndUpdate({ _id: update.registerCardId }, { check: update.status }, { new: true });
      if (c) {
        return c;
      } else throw new HttpException({ message: "Registration register card form is not found" }, HttpStatus.NOT_FOUND);
    } else {
      throw new HttpException({ message: "status is can only true or false" }, HttpStatus.NOT_FOUND);
    }
  }

  async teacherCheckOwnRequest(token: any): Promise<any> {
    try {
      const payload = this.jwtService.verify(token);
      if (payload.role == 2) {
        let teacher = await this.teacher.findOne({ email: payload.email })
        if (teacher) {
          return await this.registerCard.findOne({ teacher: teacher._id }).populate('teacher')
        } else return null;
      }
    } catch (error) {
      throw new HttpException({ message: error.message }, HttpStatus.FORBIDDEN);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} registerCard`;
  }
}
