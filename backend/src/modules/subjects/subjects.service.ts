import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSubjectDto } from './dto/create-subject.dto';
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
}
