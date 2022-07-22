const localStorageKey = '__auth_provider_token__'
export const getToken = ()=>{
  return  window.localStorage.getItem(localStorageKey)
}

export const handleUserResponce =({user})=>{
window.localStorage.setItem(localStorageKey,user.token || '')
return user
}

export const login =(data:{username:string,password:string})=>{
return fetch("",{
  method:'POST',
  headers:{
    'Content-Type':'application/json',
  },
  body:JSON.stringify(data),
}).then(async(res)=>{
  if(res.ok){
    return handleUserResponce(await res.json())
  }
})
}