import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type CourseDocument = HydratedDocument<Course>;
@Schema()
export class Course {
    @Prop()
    semester: string;
  
    @Prop()
    startDate:string;

    @Prop()
    closeDate : string;
}
export const CourseSchema = SchemaFactory.createForClass(Course);

