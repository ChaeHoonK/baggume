import {atom} from 'recoil'
import {User} from '@/models/User/User'


export const userState = atom<User|undefined|null>({
    key:'userState',
    default:undefined
})

