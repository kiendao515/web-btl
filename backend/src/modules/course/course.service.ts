import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course, CourseDocument } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private course: Model<CourseDocument>) {}
  async create(createCourseDto: CreateCourseDto) {
    let c = new Course();
    c.semester= createCourseDto.semester;
    c.startDate = createCourseDto.startDate;
    c.closeDate = createCourseDto.closeDate;
    return new this.course(c).save();
  }

  async findAll() {
    return await this.course.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }
  async remove(id:string):Promise<any>{
    let rs =await this.course.findByIdAndDelete({_id:id});
    if(rs){
      return rs;
    }else return "Sector is not found";
  }
  async update(id: string, updateCourseDto: UpdateCourseDto):Promise<any>{
    let s =await this.course.findOne({_id:id});
    if(s){
      let rs = await this.course.findByIdAndUpdate({_id:id},{semester:updateCourseDto.semester,startDate:updateCourseDto.startDate,
      closeDate:updateCourseDto.closeDate},{new:true})
      console.log(rs);
      if(rs){
        return rs;
      }else return "can not update course"
    }else return "course is not found"
  }
}
