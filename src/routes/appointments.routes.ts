import { Router } from 'express';
import { parseISO } from 'date-fns';//parse iso converte string para date para utilizar no JS
// A rota tem que estar separada em partes para diiminuir o trabalho contido nela
// ela so deve: Receber a requisicao, chamar outro arquivo e devolver a resposta.
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'
// Start of hour pega a data e colocar no comeco da hora
const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();
//http://localhost/3333/appointments
// ao entrar nessa rota ela ja ira entender que se trata
// de uma adicao ou exclusao enviando para o appointmentsRo

// O doispontos e Appointment serve para idenfiticar um array de appointment.
// salvar em memoria dentro do array
appointmentsRouter.get('/', (request, response) => {
const appointments = appointmentsRepository.all();

return response.json(appointments);
})

appointmentsRouter.post('/', (request, response) =>{
try{ const { provider, date } = request.body;

const parsedDate = parseISO(date);

const createAppointment = new CreateAppointmentService(appointmentsRepository);

const appointment = createAppointment.execute({date:parsedDate, provider});

return response.json(appointment);
}
catch (err){
  return response.status(400).json({err:err.message});
}
});

export default appointmentsRouter;
