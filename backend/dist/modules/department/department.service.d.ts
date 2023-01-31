import { Model } from 'mongoose';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department, DepartmentDocument } from './entities/department.entity';
import { LoginDto } from './dto/login.dto';
export declare class DepartmentService {
    private department;
    constructor(department: Model<DepartmentDocument>);
    checkDepartmentLogin(loginDto: LoginDto): Promise<Department>;
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    findAll(): Promise<Department[]>;
    update(id: number, updateDepartmentDto: UpdateDepartmentDto): string;
    remove(id: number): string;
}
