import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type DepartmentDocument = HydratedDocument<Department>;
@Schema()
export class Department {
    @Prop()
    name: string;
  
    @Prop()
    email: string;
  
    @Prop()
    password: string;

    @Prop()
    departmentIdentity:string;

    @Prop()
    identification:string;

    @Prop()
    userImage : string;
}
export const DepartmentSchema = SchemaFactory.createForClass(Department);
