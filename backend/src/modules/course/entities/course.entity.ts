import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, HydratedDocument } from "mongoose";
export type CourseDocument = HydratedDocument<Course>;
@Schema()
export class Course {
    @Prop()
    semester: string;
  
    @Prop()
    startDate:Date

    @Prop()
    closeDate : Date;
}
export const CourseSchema = SchemaFactory.createForClass(Course);

