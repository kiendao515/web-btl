import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department, DepartmentDocument } from './entities/department.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
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
          throw new Error(`password is incorrect`);
        }
      }else{
        return null;
      }
    } catch (err) {
      throw new Error(`Error finding ${err} user ${err.message}`);
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
}
