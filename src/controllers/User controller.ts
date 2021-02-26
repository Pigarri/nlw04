import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;
        // console.log(body);
        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExixts = await usersRepository.findOne({
            email
        });

        if(userAlreadyExixts){
            return response.status(400).json({
                error: "User already exists!",
            });
        }
        
        const user = usersRepository.create({
                name, email
            });

            await usersRepository.save(user);
        

        return response.json(user);

    }
}

export { UserController };
