import { EntityRepository, Repository} from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UsersResositories extends Repository<User>{

}

export { UsersResositories}