import { Request, Response } from 'express';
import { ListUserReceiveFeedbackService } from '../database/services/ListUserReceiveFeedbackService';

class ListUserReceiveFeedbackController{
    async handle(request: Request, response: Response){
        const { user_id } = request;
        const listUserReceiveFeedbackService = new ListUserReceiveFeedbackService();
        const feedback = await listUserReceiveFeedbackService.execute(user_id);
        return response.json(feedback);
    }

    async searchById(request: Request, response: Response) {
        const id = request.params.id;
        const listUserReceiveFeedbackService = new ListUserReceiveFeedbackService();
        const result = await listUserReceiveFeedbackService.searchById(id);
        return response.json(result);
    }
}

export { ListUserReceiveFeedbackController }