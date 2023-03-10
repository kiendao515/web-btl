import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher, TeacherDocument } from './entities/teacher.entity';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private teacher: Model<TeacherDocument>,
    private jwtService: JwtService
  ) {}
  async create(createTeacherDto: CreateTeacherDto) :Promise<Teacher> {
    try {
      const teacher = new Teacher();
      const hashPassword = await bcrypt.hash(createTeacherDto.password, 10);
      teacher.email = createTeacherDto.email;
      teacher.name = createTeacherDto.name;
      teacher.password = hashPassword;
      teacher.teacherIdentity = createTeacherDto.teacherID;
      teacher.userImage= createTeacherDto.userImage;
      teacher.identification= createTeacherDto.identification;
      return new this.teacher(teacher).save();
    } catch (err) {
      throw new Error(`Error creating ${err} user ${err.message}`);
    }
  }
  async findOne(email: string, password: string): Promise<Teacher | undefined> {
    try {
      const user = await this.teacher.findOne({
        where: { email },
      });
      const isMatch = await bcrypt.compare(password, user.password);
      if (user && isMatch) {
        return user;
      } else {
        throw new Error(`User not found`);
      }
    } catch (err) {
      throw new Error(`Error finding ${err} user ${err.message}`);
    }
  }
  async checkTeacherLogin(@Body() loginDto: LoginDto): Promise<any> {
    try {
      const t = await this.teacher.findOne({ email: loginDto.email });
      if (t) {
        const isMatch = await bcrypt.compare(loginDto.password, t.password);
        if (isMatch) {
          return t;
        } else {
          throw new Error(`Password is incorrect`);
        }
      }else{
        throw new HttpException({ message: 'Email not found' }, HttpStatus.UNAUTHORIZED);
      }
    } catch (err) {
      throw new Error(`${err.message}`);
    }
  }

  async findAll() {
    const teachers= await this.teacher.find({});
    return teachers;
  }

  async getTeacherInfo(token:any):Promise<any>{
    const payload = this.jwtService.verify(token);
    if (payload.role == 2) {
      let teacher = await this.teacher.findOne({ email: payload.email })
      if (teacher) {
        return {
          ...teacher.toObject(),
          role:'teacher',
        }
      } else return null;
    }
  }

  async remove(id:string):Promise<any>{
    let rs =await this.teacher.findByIdAndDelete({_id:id});
    if(rs){
      return rs;
    }else throw new HttpException({ message: 'teacher not found' }, HttpStatus.NOT_FOUND);
  }
  async update(id: string, update: UpdateTeacherDto):Promise<any>{
    let s =await this.teacher.findOne({_id:id});
    if(s){
      const hashPassword = await bcrypt.hash(update.password, 10);
      let rs = await this.teacher.findByIdAndUpdate({_id:id},{
        email:update.email,
        password:hashPassword,
        name:update.name,
        teacherIdentity:update.teacherID,
        identification:update.identification,
        userImage:update.userImage},{new:true})
      console.log(rs);
      if(rs){
        return rs;
      }else throw new HttpException({ message: 'can not update student' }, HttpStatus.ACCEPTED);
    }else throw new HttpException({ message: 'teacher not found' }, HttpStatus.NOT_FOUND);
  }

}
