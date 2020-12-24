import { Request, Response, NextFunction } from 'express' 
import { verify } from "jsonwebtoken"

import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request, 
  response: Response, 
  next: NextFunction
  ): void {
    //Valitacao do token jwt

const authHeader = request.headers.authorization;
if (!authHeader) {
  throw new Error('JWT token is missing')
}
// vem "bearrrer: dasdsdadsdsa"
// a virgula ja indica a segunda variavel sem o type
const [, token] = authHeader.split(' ');
try{
const decoded = verify(token, authConfig.jwt.secret );

const { sub, } = decoded as TokenPayload;
request.user = {
  id:sub,
}

return next();
}
catch(err) {
throw new Error('invalid JWT token');
}
}