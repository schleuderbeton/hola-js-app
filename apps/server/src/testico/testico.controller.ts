import {Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import {TesticoService} from "./testico.service";
import {TesticoHunitDto} from "./dto/testico.hunit.dto";

@Controller('testico')
export class TesticoController {
    constructor(private readonly service: TesticoService) {}

    @Get()
    async index() {
        return await this.service.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
        return await this.service.findOne(id);
    }

    @Post()
    async create(@Body() createDto: TesticoHunitDto) {
        return await this.service.create(createDto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateDto: TesticoHunitDto) {
        return await this.service.update(id, updateDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }
}
