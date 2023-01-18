import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Registration, RegistrationDocument } from '../registration/entities/registration.entity';
import { Student, StudentDocument } from '../student/entities/student.entity';
import { CreateAddCreditDto } from './dto/create-add-credit.dto';
import { UpdateAddCreditDto } from './dto/update-add-credit.dto';
import { AddCredit, AddCreditDocument } from './entities/add-credit.entity';

@Injectable()
export class AddCreditService {
  constructor(
    @InjectModel(Student.name) private student: Model<StudentDocument>,
    @InjectModel(AddCredit.name) private addCredit: Model<AddCreditDocument>,
    @InjectModel(Registration.name) private registration: Model<RegistrationDocument>,
    private jwtService: JwtService,
  ){}
  async create(token:any,createAddCreditDto: CreateAddCreditDto) {
    const payload = this.jwtService.verify(token);
    if (payload.role == 3) {
      let student = await this.student.findOne({ email: payload.email })
      if(student){
        let c= new AddCredit();
        c.subject= createAddCreditDto.subject;
        c.course= createAddCreditDto.course;
        c.student = student;
        c.reason = createAddCreditDto.reason;
        return new this.addCredit(c).save();
      }
    }
  }

  async findAll() {
    return await this.addCredit.find({check:false});
  }

  async acceptRegisterMoreCredit(addCredit:UpdateAddCreditDto):Promise<AddCredit>{
    let c= await this.addCredit.findOneAndUpdate({_id:addCredit.addCreditId},{check:true},{new:true});
    if(c){
      await this.registration.findOneAndUpdate({student:c.student,course:c.course},{subject:c.subject},{new:true})
      return c;
    }else return null;
  }

  findOne(id: number) {
    return `This action returns a #${id} addCredit`;
  }
}
