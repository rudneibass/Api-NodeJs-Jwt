import { getCustomRepository } from "typeorm";
import { Feedback } from "../entities/Feedback";
import { FeedbackRepositories } from "../repositories/FeedbackRepositories";

interface IFeedbackRequestPut{
    id: string;
    points_improve: string,
    points_keep: string, 
    final_feedback: string
}

class ListUserSendFeedbackService {
    async execute(user_id: string) {
        const feedbackRepositories = getCustomRepository(FeedbackRepositories);
        const feedback = await feedbackRepositories.find({
            where: {
                user_sender: user_id
            }
            ,relations:["userSender", "userReceiver"]
        })

        return feedback;
    }

    async searchById(id: string) {
        const feedbackRepositories = getCustomRepository(FeedbackRepositories);
        const result = await feedbackRepositories.findOne(id);
        return result;
    }

}

export { ListUserSendFeedbackService }