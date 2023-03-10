import { Controller, Get, Post, Body, Patch, Param, Delete ,UseGuards, Request} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';
@ApiTags('Teacher')
@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('create')
  createTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('all')
  findAll() {
    return this.teacherService.findAll();
  }

  @ApiBearerAuth()
  @Get('profile')
  async getProfile(@Request() req) {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
      return {
        error: 403,
        message:'token required'
      }
    }else{
      return await this.teacherService.getTeacherInfo(token);
    }
  }
  @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        let rs=  await this.teacherService.remove(id);
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
    async update(@Param('id') id: string, @Body() updateSectorDto: UpdateTeacherDto) {
        let rs=  await this.teacherService.update(id,updateSectorDto);
        console.log(rs);
        return {
            data:rs
        }; 
    }

}
