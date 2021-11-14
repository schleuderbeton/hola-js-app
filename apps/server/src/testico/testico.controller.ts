import {Controller, Get} from '@nestjs/common';

@Controller('testico')
export class TesticoController {

    @Get()
    getHola(): string {
        return "HOLA from TesticoController!";
    }
}
