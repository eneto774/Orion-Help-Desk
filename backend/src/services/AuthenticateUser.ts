import { compare } from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import AuthConfig from '../config/Auth';
import AppError from '../errors/AppError';
import User from '../models/User';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUser {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new AppError('User not exists', 400);
    }
    if (!(await compare(password, user.password))) {
      throw new AppError('Username or Password does not Match', 401);
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      AuthConfig.secretHash,
      { expiresIn: AuthConfig.expiresIn }
    );

    return { user, token };
  }
}

export default AuthenticateUser;
