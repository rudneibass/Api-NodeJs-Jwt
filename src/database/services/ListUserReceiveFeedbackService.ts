import { getCustomRepository } from "typeorm";
import { FeedbackRepositories } from "../repositories/FeedbackRepositories";

class ListUserReceiveFeedbackService{
    async execute(user_id: string){
        const feedbackRepositories = getCustomRepository(FeedbackRepositories);
        const feedback = await feedbackRepositories.find({
            where: {
                user_receiver: user_id
            },
            relations:["userSender", "userReceiver"]
        })

        return feedback;
    }

    async searchById(id: string) {
        const feedbackRepositories = getCustomRepository(FeedbackRepositories);
        const result = await feedbackRepositories.findOne(id);
        return result;
    }
}

export { ListUserReceiveFeedbackService }