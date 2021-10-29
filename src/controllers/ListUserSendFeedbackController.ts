import { Request, Response } from 'express';
import { ListUserSendFeedbackService } from '../database/services/ListUserSendFeedbackService';

class ListUserSendFeedbackController{
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listUserSendFeedbackService = new ListUserSendFeedbackService();
        const feedback = await listUserSendFeedbackService.execute(user_id);
        return response.json(feedback);
    }

    async searchById(request: Request, response: Response) {
        const id = request.params.id;
        const listUserSendFeedbackService = new ListUserSendFeedbackService();
        const result = await listUserSendFeedbackService.searchById(id);
        return response.json(result);
    }

}

export { ListUserSendFeedbackController }