import Appointment from '../models/appointment'
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
private appointmentsRepository: AppointmentsRepository;
constructor(appointmentsRepository:AppointmentsRepository) {
this.appointmentsRepository = appointmentsRepository;
}


 public execute({date, provider}: RequestDTO): Appointment {// execute esta criando a a classe appointment
  const appointmentDate = startOfHour(date);

  const findAppointmentInSameDate =
  this.appointmentsRepository.findByDate(appointmentDate,);

    if(findAppointmentInSameDate){
      throw Error('This appointment is alread booked')
    }
  const appointment =  this.appointmentsRepository
  .create({provider, date:appointmentDate, });

  return appointment;
};
}
export default CreateAppointmetService;
