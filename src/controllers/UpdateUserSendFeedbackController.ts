import { Request, Response } from 'express';
import { UpdateUserSendFeedbackService } from '../database/services/UpdateUserSendFeedbackService';

class UpdateUserSendFeedbackController{
    async handle(request: Request, response: Response) {
        const id = request.params.id;
        const { points_improve, points_keep, final_feedback } = request.body;
        const updateUserSendFeedbackService = new UpdateUserSendFeedbackService();
        const result = await updateUserSendFeedbackService.execute({ id, points_improve, points_keep, final_feedback});

        if (result) {
            return response.json(result);
        } else {
            return response.json({ message: "Usiario não localizado!" });
        }
    }

}

export { UpdateUserSendFeedbackController }