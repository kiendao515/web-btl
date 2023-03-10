import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
@ApiTags('Course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('create')
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.student,RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'),RolesGuard)
  @Get('all')
  findAll() {
    return this.courseService.findAll();
  }

  @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        let rs=  await this.courseService.remove(id);
        console.log(rs);
        return {
            status:"deleted",
            data:rs
        }
        
    }

    @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        let rs=  await this.courseService.update(id,updateCourseDto);
        console.log(rs);
        return {
            data:rs
        }; 
    }
}
