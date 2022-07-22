import {useStatae} from 'react';
import *  as auth from '../auth-provider'
type AuthForm ={
    username:string,
    password:string
}
const AuthContext = React.creatContext(undefined)

export const AuthProvider =()=>{
    const [user,setUser]=useState(null)
    const login=(from:AuthForm)=>auth.login(form).then(setUser)
}