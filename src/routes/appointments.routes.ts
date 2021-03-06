import { Router } from 'express';
import { getCustomRepository } from 'typeorm'
import { parseISO } from 'date-fns';
//parse iso converte string para date para utilizar no JS
// A rota tem que estar separada em partes para diiminuir o trabalho contido nela
// ela so deve: Receber a requisicao, chamar outro arquivo e devolver a resposta.
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'
// Start of hour pega a data e colocar no comeco da hora
import ensureAuthenticated from '../middlewares/ensureAuthenticated'


const appointmentsRouter = Router();



//http://localhost/3333/appointments
// ao entrar nessa rota ela ja ira entender que se trata
// de uma adicao ou exclusao enviando para o appointmentsRo

// O doispontos e Appointment serve para idenfiticar um array de appointment.
// salvar em memoria dentro do array


appointmentsRouter.use(ensureAuthenticated);
appointmentsRouter.get('/', async(request, response) => {
const appointmentsRepository = getCustomRepository(AppointmentsRepository)
const appointments = await appointmentsRepository.find();

return response.json(appointments);
})

appointmentsRouter.post('/', async (request, response) =>{

const { provider_id, date } = request.body;

const parsedDate = parseISO(date);

const createAppointment = new CreateAppointmentService();

const appointment = await createAppointment.execute({
  date:parsedDate, 
  provider_id,
});

return response.json(appointment);

});

export default appointmentsRouter;
