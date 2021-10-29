import { Request, Response } from 'express';
import { CreateFeedbackService } from '../database/services/CreateFeedbackService';

class CreateFeedbackController{
    
    async handle(request: Request, response: Response){
        const { user_receiver, feedback_date, points_improve, points_keep, final_feedback} = request.body
        const { user_id } = request;
        const createFeedbackService = new CreateFeedbackService();
        const feedback = await createFeedbackService.execute({
            user_sender: user_id,
            user_receiver,
            feedback_date,
            points_improve,
            points_keep,
            final_feedback
        })

        return response.json(feedback); 

    }
}

export { CreateFeedbackController }