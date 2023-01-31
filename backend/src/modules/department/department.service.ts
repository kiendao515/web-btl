import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department, DepartmentDocument } from './entities/department.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name) private department: Model<DepartmentDocument>,
    private jwtService: JwtService
  ) {}
  async checkDepartmentLogin(@Body() loginDto: LoginDto): Promise<Department> {
    try {
      const department = await this.department.findOne({ email: loginDto.email });
      if (department) {
        const isMatch = await bcrypt.compare(loginDto.password, department.password);
        if (isMatch) {
          return department;
        } else {
          throw new Error(`Password is incorrect`);
        }
      }else{
        throw new Error(`Email is not found`);
      }
    } catch (err) {
      throw new Error(`${err.message}`);
    }
  }
  async create(createDepartmentDto: CreateDepartmentDto):Promise<Department> {
    try {
      const department = new Department();
      const hashPassword = await bcrypt.hash(createDepartmentDto.password, 10);
      department.email = createDepartmentDto.email;
      department.identification = createDepartmentDto.identification;
      department.name = createDepartmentDto.name;
      department.departmentIdentity = createDepartmentDto.departmentID;
      department.userImage = createDepartmentDto.userImage;
      department.password = hashPassword;
      return new this.department(department).save();
    } catch (error) {
      throw new Error(`Error create department ${error}`);
    }
  }

  async findAll(): Promise<Department[]> {
    const departments = await this.department.find().exec();
    console.log(departments);
  
    return departments;
  }
  async getDepartmentInfo(token:any):Promise<any>{
    const payload = this.jwtService.verify(token);
    if (payload.role == 4) {
      let d = await this.department.findOne({ email: payload.email })
      if (d) {
        return {
          ...d.toObject(),
          role:'department'
        }
      } else return null;
    }
  }
  async remove(id:string):Promise<any>{
    let rs =await this.department.findByIdAndDelete({_id:id});
    if(rs){
      return rs;
    }else throw new HttpException({ message: 'department not found' }, HttpStatus.NOT_FOUND);
  }
  async update(id: string, update: UpdateDepartmentDto):Promise<any>{
    let s =await this.department.findOne({_id:id});
    if(s){
      const hashPassword = await bcrypt.hash(update.password, 10);
      let rs = await this.department.findByIdAndUpdate({_id:id},{
        email:update.email,
        password:hashPassword,
        name:update.name,
        departmentIdentity:update.departmentID,
        identification:update.identification,
        userImage:update.userImage},{new:true})
      console.log(rs);
      if(rs){
        return rs;
      }else throw new HttpException({ message: 'can not update department' }, HttpStatus.ACCEPTED);
    }else throw new HttpException({ message: 'department is not found' }, HttpStatus.ACCEPTED);
  }
}
