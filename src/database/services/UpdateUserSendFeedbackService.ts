import { getCustomRepository } from "typeorm";
import { FeedbackRepositories } from "../repositories/FeedbackRepositories";

interface IFeedbackRequestPut{
    id: string;
    points_improve: string,
    points_keep: string, 
    final_feedback: string
}

class UpdateUserSendFeedbackService {
    async execute({ id, points_improve, points_keep,  final_feedback }: IFeedbackRequestPut) {
        const feedbackRepositories = getCustomRepository(FeedbackRepositories);
        const feedback = await feedbackRepositories.findOne(id);

        if (feedback) {
            feedback.final_feedback = final_feedback;
            feedback.points_improve = points_improve;
            feedback.points_keep = points_keep;
            const result = await feedbackRepositories.save(feedback);
            return result;
        } else {

            return [{ message: "Não existe registro para os critério selecionados!" }];
        }
    }
}

export { UpdateUserSendFeedbackService }