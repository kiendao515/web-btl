import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.model';

@Injectable()
export class StudentService {
    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}
    createStudent(student: Student) : Promise<Student>{   
        return this.studentModel.create(student);
    }
    getAllStudent(){
        return this.studentModel.find({});
    }
}
