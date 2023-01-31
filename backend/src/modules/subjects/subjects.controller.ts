import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subect.dto';
import { SubjectsService } from './subjects.service';
@ApiTags('Subject')
@Controller('subjects')
export class SubjectsController {
    constructor(private readonly subjectService: SubjectsService) {}
    @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Post('create')
    create(@Body() createSubjectDto: CreateSubjectDto) {
        return this.subjectService.create(createSubjectDto);
    }

    @ApiBearerAuth()
    @Roles(RoleEnum.student,RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Get('all')
    getAllSector(){
        return this.subjectService.getAllSubjects();
    }

    @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        let rs=  await this.subjectService.remove(id);
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
    async update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
        let rs=  await this.subjectService.update(id,updateSubjectDto);
        console.log(rs);
        return {
            data:rs
        }; 
    }
}
