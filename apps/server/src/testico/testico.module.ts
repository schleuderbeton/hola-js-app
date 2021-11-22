import { Module } from '@nestjs/common';
import { TesticoController } from './testico.controller';
import { TesticoService } from './testico.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Hunit, HunitSchema} from "./schemas/hunit.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Hunit.name, schema: HunitSchema},
    ])
  ],
  controllers: [TesticoController],
  providers: [TesticoService]
})
export class TesticoModule {}
