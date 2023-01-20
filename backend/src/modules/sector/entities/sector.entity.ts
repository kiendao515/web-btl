import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type SectorDocument = HydratedDocument<Sector>;
@Schema()
export class Sector {
    @Prop()
    sectorName: string;

}
export const SectorSchema = SchemaFactory.createForClass(Sector);
