import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Document } from 'mongoose';
export type StudentDocument = Student & Document;

@Schema()
@ApiTags('students')
export class Student {
  @Prop()
  @ApiProperty()
  name: string;

  @Prop()
  @ApiProperty()
  age: number;

  @Prop()
  @ApiProperty()
  classroom: string;

  @Prop()
  @ApiProperty()
  student_code: number;

  @Prop()
  @ApiProperty()
  email: string;

  @Prop()
  @ApiProperty()
  password: string;

  @Prop()
  @ApiProperty()
  total_credits: number;
}

export const UserSchema = SchemaFactory.createForClass(Student);
