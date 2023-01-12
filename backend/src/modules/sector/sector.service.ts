import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSectorDto } from './dto/create-sector.dto';
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
}
