import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Hunit, HunitDocument } from './schemas/hunit.schema';
import {Todo} from "../todo/schemas/todo.schema";
import {HunitDto} from "./dto/hunitDto";

@Injectable()
export class HunitService {
    constructor(@InjectModel(Hunit.name) private model: Model<HunitDocument>) {}

    async findAll(): Promise<Hunit[]> {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<Hunit> {
        return await this.model.findById(id).exec();
    }

    async create(createHunitDto: HunitDto): Promise<Hunit> {
        return await new this.model({
            ...createHunitDto,
            createdAt: new Date(),
        }).save();
    }

    async update(id: string, updateHunitDto: HunitDto): Promise<Hunit> {
        return await this.model.findByIdAndUpdate(id, updateHunitDto).exec();
    }

    async delete(id: string): Promise<Hunit> {
        return await this.model.findByIdAndDelete(id).exec();
    }

}
