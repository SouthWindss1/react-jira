const LoginPage =()=>{ 
    const apiUrl = process.env.REACT_APP_API_URL
    const login =(param:{usernam:string,password:string})=>{
        fetch('',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(param)
        }).then(
            async (res)=>{
                if(res.ok){}
            }
        )

    }
const handleSubmit = (event:FormEvent<Element>)=>{
    event.preventDefault()
  const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
  const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
}

 return(<>
 <form submit={handleSubmit}>
    <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'}/>
    </div>
    <div>
        <label htmlFor="password">密码</label>
        <input type="password"  id={'password'}/>
    </div>
    <button type='submit'>登陆</button>
 </form>
 </>)
}
export default LoginPage;