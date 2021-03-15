import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/usuario/model/usuario.model';


import { UserService } from 'src/usuario/services/user/user.service';


@Controller('user')
export class UserController {

    constructor(private userService: UserService) {

    }
    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.getAll();
    }
    @Post()
    async create(@Body() usuario: User): Promise<User> {
        return this.userService.create(usuario);
    }
    @Get(':id')
    async getById(@Param('id') id: string): Promise<User> {
        return this.userService.getById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() usuario: User): Promise<User> {
        return this.userService.update(id, usuario);
    }

    @Delete(':id')
    async remover(@Param('id') id: string): Promise<User> {
        return this.userService.remover(id);
    }

}
