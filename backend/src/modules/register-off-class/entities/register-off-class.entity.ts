import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Teacher } from "src/modules/teacher/entities/teacher.entity";
export type RegisterOffClassDocument= HydratedDocument<RegisterOffClass>;
@Schema()
export class RegisterOffClass {
    @Prop({   
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Teacher' 
    })
    teacher: Teacher;

    @Prop()
    startDate: string;
  
    @Prop()
    endDate: string;
  
    @Prop()
    reason: string;

    @Prop({
        type:String,
        default:"pending",
        required:true
    })
    check:String
}
export const RegisterOffClassSchema = SchemaFactory.createForClass(RegisterOffClass);
