import Appointment from '../models/appointment'
import { getCustomRepository } from 'typeorm'
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';

import AppError from '../errors/AppError';
/* Resolucao de problemas:
*Recebimento de informacoes {Feito}
*Tratativa de erros/exessoes {Feito}
*Acesso ao repositorio {}
*/
interface RequestDTO {
  date:Date;
  provider_id:string;
}

// Dependency inversion (SOLID)
//
class CreateAppointmetService {

 public async execute({date, provider_id}: RequestDTO): Promise<Appointment> {
   const appointmentsRepository =  getCustomRepository(AppointmentsRepository);
   //acima criado para tirar o find tornando o appointmentsRepository um repositorio

  const appointmentDate = startOfHour(date);

  const findAppointmentInSameDate = await
 appointmentsRepository.findByDate(appointmentDate,);

    if(findAppointmentInSameDate){
      throw new AppError('This appointment is alread booked')
    }
  const appointment =  appointmentsRepository.create({
    provider_id, date:appointmentDate, 
  });
await appointmentsRepository.save(appointment);
  return appointment;
};
}
export default CreateAppointmetService;
