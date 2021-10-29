import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateFeedbackController } from './controllers/CreateFeedbackController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListUserController } from './controllers/ListUserController';
import { ListUserReceiveFeedbackController } from './controllers/ListUserReceiveFeedbackController';
import { ListUserSendFeedbackController } from './controllers/ListUserSendFeedbackController';
import { UpdateUserSendFeedbackController } from './controllers/UpdateUserSendFeedbackController';
import { ensureAuthenticated } from './database/middlewares/ensureAuthenticated';

const routes = Router();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createFeedbackController = new CreateFeedbackController();
const listUserSendFeedbackController = new ListUserSendFeedbackController();
const listUserReceiveFeedbackController = new ListUserReceiveFeedbackController();
const listUserController = new ListUserController();
const updateUserSendFeedbackController = new UpdateUserSendFeedbackController();


routes.post('/login', authenticateUserController.handle);
routes.post('/users', ensureAuthenticated, createUserController.hendle);
routes.post('/feedback', ensureAuthenticated, createFeedbackController.handle);

routes.get('/users/feedback/send',  ensureAuthenticated, listUserSendFeedbackController.handle);
routes.get('/users/feedback/send/:id', ensureAuthenticated, listUserSendFeedbackController.searchById);
routes.put('/users/feedback/send/:id', ensureAuthenticated, updateUserSendFeedbackController.handle);

routes.get('/users/feedback/receive',  ensureAuthenticated, listUserReceiveFeedbackController.handle);
routes.get('/users/feedback/receive/:id',ensureAuthenticated, listUserReceiveFeedbackController.searchById );

routes.get('/users',  ensureAuthenticated, listUserController.handle);



export  default routes;