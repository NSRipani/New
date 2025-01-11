export default class UsersReqDto{
    constructor(user){
        this.email = user.email;
        this.role = user.role
    }
}