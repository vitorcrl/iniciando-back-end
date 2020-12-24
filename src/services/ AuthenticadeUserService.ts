import { getRepository} from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';



interface RequestDTO{
  email: string,
  password:string,
}
interface Response {
  user: User,
  token: string,
}

class AuthenticateUserService{
  public async execute({ email, password }:RequestDTO): Promise<Response>{
    const usersRepository = getRepository(User)

   const user = await usersRepository.findOne({ where:{ email }});
   
   if (!user) {
  //user.password Senha Criptografada
  //password senha nao criptografada 
  throw new Error('Incorrect email/password Combination');
}
const passwordMatched =  await compare(password, user.password); 
if (!passwordMatched) {
  throw new Error('Incorrect email/password Combination');
}
// Usuario authenticado

const token = sign({},'d98617f8918ec7169cecd4a046905fac',{
  subject: user.id,
  expiresIn: '1d'
})

return { 
  user,
  token
}
  }
}
export default AuthenticateUserService;