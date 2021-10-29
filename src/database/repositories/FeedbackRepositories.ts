import { Repository, EntityRepository, Entity } from 'typeorm';
import { Feedback } from '../entities/Feedback';

@EntityRepository(Feedback)
class FeedbackRepositories extends Repository<Feedback> {

}

export { FeedbackRepositories }