import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/usuario/model/usuario.model';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private usuarioModel: Model<User>) {

    }

    async getAll(): Promise<User[]> {
        return this.usuarioModel.find().exec();
    }
    async create(usuario: User): Promise<User> {
        const usuarioCreated = new this.usuarioModel(usuario);
        return usuarioCreated.save();
    }

    async getById(id: string): Promise<User> {
        return this.usuarioModel.findById(id).exec();
    }

    async update(id: string, usuario: User): Promise<User> {
        return this.usuarioModel.findByIdAndUpdate(id, usuario).exec();
    }

    async remover(id: string) {
        const usuarioDeleted = this.usuarioModel.findOneAndDelete({ _id: id }).exec();
        return (await usuarioDeleted).remove();
    }
}
