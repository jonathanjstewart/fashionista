export class userModel 
{
    _id?: string;
    name: string;
    pw?: string;
    role: string;

    constructor(usermodel: { _id?:string; name:string; pw?:string; role:string; })
    {
        this._id = usermodel._id ? usermodel._id : null;
        this.name = usermodel.name;
        this.role = usermodel.role;
        this.pw = usermodel.pw ? usermodel.pw : null;
        }

}