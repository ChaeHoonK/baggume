import supabase from "../../services/supabase/client";


class Coupon {
    storeUid?: number ;
    expiration?:number;
    value?:number;
    remainValue?:number;
    comment?:string;
    storeId?:string;
    provider?:string;
    consumer?:string;
    owner?:string;

    constructor(storeUid?: number ,
        expiration?:number,
        value?:number,
        remainValue?:number,
        comment?:string,
        storeId?:string,
        provider?:string,
        consumer?:string,
        owner?:string) {
            this.storeUid=storeUid
            this.expiration=expiration
            this.value=value
            this.remainValue=remainValue
             this.comment= comment
            this.storeId=storeId
            this.provider=provider
            this.consumer=consumer
            this.owner=owner
    }
}

export class CouponClient {
    coupon?: Coupon;

    constructor(coupon?: Coupon) {
        this.coupon= coupon;
    }

    static async create(expiration:number, value:number, comment:string, store:string, provider:string, consumer:string): Promise<Coupon | undefined> {
        try {
           const {data, error} = await supabase.from('coupons').insert({expiration, value, remain_value:value, comment, store, provider, consumer, owner:consumer}).select()
            //console.log(data)
            if (error)
                throw error.message

            console.log(data)
            return new Coupon(...data[0]);
        } catch (e) {
            console.error({e});
        }
    }

    static async insert(expiration:number, value:number, comment:string, store:string, provider:string, consumer:string) {
        try {
           const {error} = await supabase.from('coupons').insert({expiration, value, remain_value:value, comment, store, provider, consumer, owner:consumer})
            //console.log(data)
            if (error)
                throw error.message
            
        } catch (e) {
            console.error({e});
        }
    }
}



