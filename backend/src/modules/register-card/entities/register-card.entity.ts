import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Teacher } from "src/modules/teacher/entities/teacher.entity";
export type RegisterCardDocument = HydratedDocument<RegisterCard>;
@Schema()
export class RegisterCard {
    @Prop({   
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Teacher' 
    })
    teacher: Teacher;

    @Prop()
    identityImage: string;
  
    @Prop()
    teacherImage: string;
  
    @Prop()
    birthCertificateImage: string;

    @Prop({
        type:String,
        default:"pending",
        required:true
    })
    check:String
}
export const RegisterCardSchema = SchemaFactory.createForClass(RegisterCard);
