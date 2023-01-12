import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Sector, SectorSchema } from './entities/sector.entity';
import { SectorController } from './sector.controller';
import { SectorService } from './sector.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sector.name, schema: SectorSchema }])
  ],
  controllers: [SectorController],
  providers: [SectorService]
})
export class SectorModule {}
