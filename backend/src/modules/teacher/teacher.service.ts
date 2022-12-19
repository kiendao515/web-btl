import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { Teacher, TeacherDocument } from './entities/teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class TeacherService {
  constructor(@InjectModel(Teacher.name) private teacher: Model<TeacherDocument>) {}
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

  async findAll() {
    const teachers= await this.teacher.find({});
    return teachers;
  }

  // đăng kí nghỉ dạy 
  async registerOffClass(){
    
  }

}
