import Appointment from '../models/appointment'
import { getCustomRepository } from 'typeorm'
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';
/* Resolucao de problemas:
*Recebimento de informacoes {Feito}
*Tratativa de erros/exessoes {Feito}
*Acesso ao repositorio {}
*/
interface RequestDTO {
  date:Date;
  provider:string;
}

// Dependency inversion (SOLID)
//
class CreateAppointmetService {

 public async execute({date, provider}: RequestDTO): Promise<Appointment> {
   const appointmentsRepository =  getCustomRepository(AppointmentsRepository);
   //acima criado para tirar o find tornando o appointmentsRepository um repositorio

  const appointmentDate = startOfHour(date);

  const findAppointmentInSameDate = await
 appointmentsRepository.findByDate(appointmentDate,);

    if(findAppointmentInSameDate){
      throw Error('This appointment is alread booked')
    }
  const appointment =  appointmentsRepository.create({
    provider, date:appointmentDate, 
  });
await appointmentsRepository.save(appointment);
  return appointment;
};
}
export default CreateAppointmetService;
