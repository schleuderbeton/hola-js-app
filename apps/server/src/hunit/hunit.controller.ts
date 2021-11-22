import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import {HunitService} from "./hunit.service";
import {HunitDto} from "./dto/hunitDto";

@Controller('hunit')
export class HunitController {
    constructor(private readonly service: HunitService) {}

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createDto: HunitDto) {
        return await this.service.create(createDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDto: HunitDto) {
        return await this.service.update(id, updateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
