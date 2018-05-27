import { Activity } from './activity';
import { User } from './user';

export class Session {

    constructor() {
    }

    public id;
    public user: User;
    public dateTime;
    public activities: Activity[];
}