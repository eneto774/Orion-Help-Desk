import { Router } from 'express';
import CreateUser from '../services/CreateUser';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createUser = new CreateUser();

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.send(user);
});

export default usersRouter;
