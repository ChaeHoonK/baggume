import supabase from "../../services/supabase/client";


class Store {
    storeUid?: number ;
    phone?: number;
    name?: string;
    address?: string;
    url?: string;

    constructor(phone?: number, name?: string, address?: string, 
                 url?: string,  
                storeUid?: number) {
        this.storeUid = storeUid;
        this.phone = phone;
        this.name = name;
        this.address = address;
        this.url = url;
    }
}

export class StoreClient {
    store?: Store;

    constructor(store?: Store) {
        this. store= store;
    }

    static async create(name: string, address:string, phone:string, url:string): Promise<Store | undefined> {
        try {
           const {data, error} = await supabase.from('User').insert({name, address, phone, url}).select()
            //console.log(data)
            if (error)
                throw error.message

            console.log(data)
            return new Store(...data[0]);
        } catch (e) {
            console.error({e});
        }
    }

    static async insert(name: string, address:string, phone:string, url:string) {
        try {
           const {error} = await supabase.from('stores').insert({name, address, phone, url})
            if (error)
                throw error.message

            console.log('Successfully Inserted New Store')
        } catch (e) {
            console.error({e});
        }
    }
}



