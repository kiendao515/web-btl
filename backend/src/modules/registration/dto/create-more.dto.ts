import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Course } from "src/modules/course/entities/course.entity";
import { Subject } from "src/modules/subjects/entities/subjects.entity";

export class CreateMoreDto {
    @ApiProperty({ type: Subject, isArray: true, required: true,example:['63bfd31db7fa1716a9ab5ba0','63bfd60c9f015b2c3d39abf1'] })
    subject: Subject[];

    @ApiProperty({type: Course,required:true,example:'63c2f036519beb6869bcee95'})
    course:Course;

    @ApiProperty({type:String,required:true,example:'vi em can dang ky de ra truong som'})
    reason:string;

}
