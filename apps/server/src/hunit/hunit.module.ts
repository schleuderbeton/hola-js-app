import { Module } from '@nestjs/common';
import { HunitController } from './hunit.controller';
import { HunitService } from './hunit.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Hunit, HunitSchema} from "./schemas/hunit.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Hunit.name, schema: HunitSchema},
    ])
  ],
  controllers: [HunitController],
  providers: [HunitService]
})
export class HunitModule {}
