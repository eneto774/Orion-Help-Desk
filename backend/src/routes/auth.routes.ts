import { Router } from 'express';
import AuthenticateUser from '../services/AuthenticateUser';

const authRouter = Router();

authRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUser();

  const authData = await authenticateUser.execute({
    email,
    password,
  });

  delete authData.user.password;

  return response.send(authData);
});

export default authRouter;
