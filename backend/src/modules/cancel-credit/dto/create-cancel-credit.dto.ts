import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Course } from "src/modules/course/entities/course.entity";
import { Subject } from "src/modules/subjects/entities/subjects.entity";

export class CreateCancelCreditDto {
    @ApiProperty({ type: Subject, required: true,example:'63bfd31db7fa1716a9ab5ba0'})
    subject: Subject;

    @ApiProperty({type: Course,required:true,example:'63c2f036519beb6869bcee95'})
    course:Course;

    @ApiProperty({type:String,required:true,example:'Do khối lượng môn học quá lớn nên e muốn xin rút học phần'})
    reason:string;

}
