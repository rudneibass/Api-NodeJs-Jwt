import { getCustomRepository } from "typeorm"
import { FeedbackRepositories } from "../repositories/FeedbackRepositories"
import { UsersResositories } from "../repositories/UserRepositories";

interface IFeedbackRequest {
    user_sender: string;
    user_receiver: string;
    feedback_date: Date;
    points_improve: string;
    points_keep: string;
    final_feedback: string;
}

class CreateFeedbackService {
    async execute({ user_sender, user_receiver, feedback_date, points_improve, points_keep, final_feedback }: IFeedbackRequest) {
        const feedbackRepositories = getCustomRepository(FeedbackRepositories);
        const usersRepositories = getCustomRepository(UsersResositories);

        if (user_sender === user_receiver) {
            throw new Error("Não é possivel enviar um feedback para você mesmo!")
        }

        const userReciverExists = await usersRepositories.findOne(user_receiver);

        if (!userReciverExists) {
            throw new Error("O usuário para o qual você está tentando enviar um feedback não existe!")
        }

        const feedback = feedbackRepositories.create({
            user_sender,
            user_receiver,
            feedback_date,
            points_improve,
            points_keep,
            final_feedback,
        });

        await feedbackRepositories.save(feedback);

        return feedback;
    }

}

export { CreateFeedbackService }