import { Controller, Get, Post, Body, Patch, Param, Delete, Request, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { RegisterOffClassService } from './register-off-class.service';
import { CreateRegisterOffClassDto } from './dto/create-register-off-class.dto';
import { UpdateRegisterOffClassDto } from './dto/update-register-off-class.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../roles/roles.guard';
@ApiTags('Register-off-class')
@Controller('register-off-class')
export class RegisterOffClassController {
  constructor(private readonly registerOffClassService: RegisterOffClassService) {}

  @ApiBearerAuth()
  @Post('/create')
  async create(@Request() req,@Body() createRegisterOffClassDto: CreateRegisterOffClassDto) {
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
      throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      let rs = await this.registerOffClassService.create(token,createRegisterOffClassDto);
      return {
        data:rs
      }
    }
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.department)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/all')
 async findAll() {
    return await this.registerOffClassService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerOffClassService.findOne(+id);
  }

  @ApiBearerAuth()
  @Roles(RoleEnum.department)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('/check')
  async updateStatus(@Body() updateRegisterOffClassDto: UpdateRegisterOffClassDto) {
    let c= await this.registerOffClassService.updateStatus(updateRegisterOffClassDto);
    if(c!=null){
      return {
        data:c,
        "message":"Update successfully!"
      };
    }
  }

  @ApiBearerAuth()
  @Get('/my-form')
  async checkMyOwnRegistration(@Request() req){
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
      throw new HttpException({ message: 'Access Forbidden' }, HttpStatus.FORBIDDEN);
    }else{
      let rs = await this.registerOffClassService.teacherCheckOwnRequest(token);
      return {
        data:rs
      }
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerOffClassService.remove(+id);
  }
}
