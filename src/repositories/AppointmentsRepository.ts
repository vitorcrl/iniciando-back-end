import Appointment from '../models/appointment';
import { isEqual } from 'date-fns';
// responsavel por fazer as alteracoes no Banco de dados
interface CreateAppointmentDTO{
  provider:string,
  date: Date;
}

class AppoinmentsRepository {
 private appointments: Appointment[];

 constructor() {// inicializar a variavel appointments
   this.appointments = []
 }
public findByDate(date: Date): Appointment | null{
  const findAppointment = this.appointments.find(appointment =>
    isEqual(date, appointment.date),
    );
    return findAppointment ||null;
}
 public all(): Appointment[]{
   return this.appointments;
 }
// desestruturado com uma interface para que as variaveis sejam definidas acima

 public create({ provider, date }:CreateAppointmentDTO): Appointment {
  const appointment = new Appointment(
    { provider, date });

    this.appointments.push(appointment);

    return appointment;
 }
}
export default AppoinmentsRepository;
