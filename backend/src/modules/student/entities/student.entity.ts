import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Sector } from "src/modules/sector/entities/sector.entity";
export type StudentDocument = HydratedDocument<Student>;
@Schema()
export class Student {
    @Prop()
    email:string;

    @Prop()
    password:string;

    @Prop()
    name:string;

    @Prop()
    studentCode:string;

    @Prop()
    identification:string;

    @Prop()
    userImage:string;

    @Prop()
    age:Number;

    @Prop({ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Sector' 
    })
    sector: Sector;

    @Prop()
    totalOfCredit:Number;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
