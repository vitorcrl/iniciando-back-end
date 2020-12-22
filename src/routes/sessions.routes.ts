import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const sessionsRouter = Router();


sessionsRouter.post('/', async (request, response) =>{
try{ 
  const {email, password} =request.body;
  return response.json({ok:true});
}
catch (err){
  return response.status(400).json({
    err:err.message
  });
}
});

export default sessionsRouter;
