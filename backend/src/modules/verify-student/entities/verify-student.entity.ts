import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Student } from "src/modules/student/entities/student.entity";

export type VerifyStudentDocument = HydratedDocument<VerifyStudent>;
@Schema()
export class VerifyStudent {
    @Prop({   
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student' 
    })
    student: Student;

    @Prop()
    identityImage: string;
  
    @Prop()
    studentIdentityImage: string;
  
    @Prop()
    birthCertificateImage: string;

    @Prop({
        type:String,
        default:"pending",
        required:true
    })
    check:String

}
export const VerifyStudentSchema = SchemaFactory.createForClass(VerifyStudent);
