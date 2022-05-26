import { useEffect, useState } from 'react';
const useToken = user => {
    const [userToken, setUserToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email
        const currentUser = { email: email }
        if (email) {
            fetch(`https://storeforpc.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                },
                body: JSON.stringify(currentUser)

            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.accessToken;
                    localStorage.setItem('accessToken', accessToken)
                    setUserToken(accessToken)
                })
        }
    }, [user])
    return [userToken]
}
export default useToken;