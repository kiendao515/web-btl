import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../roles/roles.decorator';
import { RoleEnum } from '../roles/roles.enum';
import { RolesGuard } from '../roles/roles.guard';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { SectorService } from './sector.service';

@ApiTags('Sector')
@Controller('sector')
export class SectorController {
    constructor(private readonly sectorService: SectorService) { }
    @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Post('create')
    create(@Body() createSectorDto: CreateSectorDto) {
        return this.sectorService.create(createSectorDto);
    }

    @ApiBearerAuth()
    @Roles(RoleEnum.admin, RoleEnum.student)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Get('all')
    getAllSector() {
        return this.sectorService.getAllSector();
    }

    @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        let rs=  await this.sectorService.remove(id);
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
    async update(@Param('id') id: string, @Body() updateSectorDto: UpdateSectorDto) {
        let rs=  await this.sectorService.update(id,updateSectorDto);
        console.log(rs);
        return {
            data:rs
        }; 
    }
}
