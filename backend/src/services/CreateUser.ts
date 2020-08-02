import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import * as Yup from 'yup';
import AppError from '../errors/AppError';

import User from '../models/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUser {
  public async execute({ name, email, password }: IRequest) : Promise<User> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    const isValide = await schema.isValid({
      name,
      email,
      password,
    });

    if(!isValide) {
      throw new AppError('Validation failed.', 400);
    }

    const userRepository = getRepository(User);

    const userExists = await userRepository.findOne({ where:{ email }});

    if(userExists) {
      throw new AppError('User already exists.', 400);
    }


    const hashedPassword = await hash(password, 8);

    const user = await userRepository.create({
      name,
      email,
      password: hashedPassword
    });

    await userRepository.save(user);


    return user;
  }

}

export default CreateUser;
