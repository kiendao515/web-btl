import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TeacherDocument = HydratedDocument<Teacher>;
@Schema()
export class Teacher {
    @Prop()
    name: string;
  
    @Prop()
    email: string;
  
    @Prop()
    password: string;

    @Prop()
    teacherIdentity:string;

    @Prop()
    identification:string;

    @Prop()
    userImage : string;
}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
