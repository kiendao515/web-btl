import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Course } from "src/modules/course/entities/course.entity";
import { Student } from "src/modules/student/entities/student.entity";
import { Subject } from "src/modules/subjects/entities/subjects.entity";
export type CancelCreditDocument = HydratedDocument<CancelCredit>;
@Schema()
export class CancelCredit {
    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Subject' 
    })
    subject:Subject;

    @Prop({   
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student' 
    })
    student: Student;

    @Prop({ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Course' 
    })
    course: Course;

    @Prop({
        type:String,
        required:true
    })
    reason: string

    @Prop({
        type:Boolean,
        required:true,
        default:false
    })
    check:boolean
}
export const CancelCreditSchema = SchemaFactory.createForClass(CancelCredit);
