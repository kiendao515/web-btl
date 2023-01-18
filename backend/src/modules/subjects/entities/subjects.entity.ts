import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Sector } from "src/modules/sector/entities/sector.entity";
export type SubjectDocument = HydratedDocument<Subject>;
@Schema()
export class Subject {
    @Prop()
    courseName: string;

    @Prop()
    courseId:string;

    @Prop()
    numberOfCredit:number;

    @Prop({ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Sector' 
    })
    sector: Sector;
}
export const SubjectSchema = SchemaFactory.createForClass(Subject);
