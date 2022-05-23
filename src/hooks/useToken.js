import {useEffect, useState} from 'react';
const useToken=user=>{
    const [userToken,setUserToken]=useState('');
    useEffect(()=>{
        const email=user?.user?.email
        const currentUser={email:email}
        if(email){
            fetch(`http://localhost:5000/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
                
            })
            .then(res=>res.json())
            .then(data=>{
                const accessToken=data.accessToken;
                localStorage.setItem('accessToken',accessToken)
                setUserToken(accessToken)
            })
        }
    },[user])
    return [userToken]
}
export default useToken;