import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subect.dto';
import { Subject, SubjectDocument } from './entities/subjects.entity';

@Injectable()
export class SubjectsService {
    constructor(@InjectModel(Subject.name) private subject: Model<SubjectDocument>) {}
    async create(createSectorDto: CreateSubjectDto):Promise<Subject> {
        try {
          const subject = new Subject();
          subject.courseId= createSectorDto.courseId;
          subject.courseName= createSectorDto.courseName;
          subject.numberOfCredit= createSectorDto.numberOfCredit;
          subject.sector = createSectorDto.sector;
          return new this.subject(subject).save();
        } catch (error) {
          throw new Error(`Error create sector ${error}`);
        }
    }
    async getAllSubjects():Promise<any>{
      return this.subject.find({}).populate('sector');
    }
    async remove(id:string):Promise<any>{
      let rs =await this.subject.findByIdAndDelete({_id:id});
      if(rs){
        return rs;
      }else return "Subject is not found";
    }
    async update(id: string, updateSubjectDto: UpdateSubjectDto):Promise<any>{
      let s =await this.subject.findOne({_id:id});
      if(s){
        let rs = await this.subject.findByIdAndUpdate({_id:id},{
          courseName:updateSubjectDto.courseName,
          numberOfCredit:updateSubjectDto.numberOfCredit,
          sector:updateSubjectDto.sector},{new:true})
        console.log(rs);
        if(rs){
          return rs;
        }else return "can not update subject"
      }else return "subject is not found"
    }
}
