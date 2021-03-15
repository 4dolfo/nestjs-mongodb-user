import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user/user.controller';
import { UserSchema } from './model/usuario.model';
import { UserService } from './services/user/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: "User",
                schema: UserSchema
            }

        ])
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UsuarioModule { }
