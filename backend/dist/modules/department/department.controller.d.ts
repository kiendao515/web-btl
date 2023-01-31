import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<import("./entities/department.entity").Department>;
    findAll(): Promise<import("./entities/department.entity").Department[]>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): string;
    remove(id: string): string;
}
