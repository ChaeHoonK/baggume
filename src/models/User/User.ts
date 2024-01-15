import supabase from "../../services/supabase/client";

export class User {
    id?: string;
    name?: string;
    email?: string;
    securityPW?: string;
    phone?:string
    image?:string

    constructor(id?: string, name?:string, securityPW?: string, email?: string, phone?: string, image?:string) {
        this.id = id;
        this.name = name
        this.email = email;
        this.phone = phone
        this.securityPW = securityPW;
        this.image = image
    }   

    needMoreInfo():boolean{
        if (!this.id || !this.name || !this.image)
            return true

        if (!this.email || !this.phone)
            return true

        if (!this.securityPW)
            return true

        return false
    }
}

export class UserClient {
    user?: User;

    constructor(user?: User) {
        this.user = user;
    }

    static async selectUser(id:string) {
        try {
            const {data, error}:any = await supabase.from('users').select().eq('id',id)

            console.log('selectUser::','data:' , data)
            if (error)
                throw error.message
            const user = new User(data[0].id, data[0].name, data[0].security_pw, data[0].email, data[0].phone, data[0].image)
            //console.log(user)
            return user

        } catch(e) {
            console.error({e})
        }
    }

    static async update(id:number, name: string): Promise<User | undefined> {
        try {
           const {data, error} = await supabase.from('users').insert({id, name}).select()
            //console.log(data)
            if (error)
                throw error.message

            console.log(data)
            return new User(...data[0]);
        } catch (e) {
            console.error({e});
        }
    }
}
