import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { Sector, SectorDocument } from './entities/sector.entity';

@Injectable()
export class SectorService {
    constructor(@InjectModel(Sector.name) private sector: Model<SectorDocument>) {}
    async create(createSectorDto: CreateSectorDto):Promise<Sector> {
        try {
          const sector = new Sector();
          sector.sectorName= createSectorDto.sectorName;
          return new this.sector(sector).save();
        } catch (error) {
          throw new Error(`Error create sector ${error}`);
        }
    }
    async getAllSector():Promise<any>{
      return this.sector.find({});
    }
    async remove(id:string):Promise<any>{
      let rs =await this.sector.findByIdAndDelete({_id:id});
      if(rs){
        return rs;
      }else return "Sector is not found";
    }
    async update(id: string, updateSectorDto: UpdateSectorDto):Promise<any>{
      let s =await this.sector.findOne({_id:id});
      if(s){
        let rs = await this.sector.findByIdAndUpdate({_id:id},{sectorName:updateSectorDto.sectorName},{new:true})
        console.log(rs);
        if(rs){
          return rs;
        }else return "can not ipdate sector"
      }else return "sector is not found"
    }
}
