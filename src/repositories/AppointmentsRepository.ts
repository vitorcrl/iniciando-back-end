import Appointment from '../models/appointment';
import { EntityRepository, Repository } from 'typeorm';
// responsavel por fazer as alteracoes no Banco de dados



@EntityRepository(Appointment)// extende o repositorio e passa o parametros 

class AppoinmentsRepository extends Repository<Appointment>{
public async findByDate(date: Date,): Promise<Appointment | null>{

const findAppointment = await this.findOne({
  where: { date }, 
  });


    return findAppointment ||null;
  }
}
export default AppoinmentsRepository;
