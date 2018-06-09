import { Activity } from './activity';
import { User } from './user';

export class Session {
    public id;
    public user: User;
    public dateTime;
    public activities: Activity[];
}