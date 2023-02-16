import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { BsPersonCircle } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
import Loading from '../../shared/Loading/Loading';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';



const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { data: userInfo, isLoading, refetch } = useQuery('userInfo', () => fetch(`${process.env.REACT_APP_SERVER_LINK}/userProfile?email=${user.email}`, {
        method: 'GET',
    })
        .then(res => res.json()))
    if (loading || isLoading) {
        return <Loading />
    }
    const photo = user.reloadUserInfo.photoUrl;
    return (
        <div>
            <div className='flex justify-center'>
                <h2 className='text-center text-4xl py-5 inline-block border-b-4 border-blue-400 font-bold mb-5'>Profile</h2>
            </div>
            {/* {user.displayName.substring(0, 1)} */}
            <div className="avatar flex justify-center mb-5">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    {photo ? <img src={photo} alt='' /> : <div className='text-6xl h-full text-white bg-primary flex justify-center items-center'>{user.displayName.substring(0, 1)}</div>}
                </div>
            </div>


            <div className='flex items-center gap-3'>
                <BsPersonCircle className='text-lg'></BsPersonCircle>
                <h2 className='text-lg text-center'>{user.displayName}</h2>
            </div>
            <div className='flex items-center gap-3'>
                <MdOutlineMailOutline className='text-lg'></MdOutlineMailOutline>
                <h2>{user.email}</h2>
            </div>
            {
                userInfo.map(userIn =>
                    <div key={userIn._id}>
                        <div>
                            <h2>Address: {userIn.location}</h2>
                        </div>
                        <div>
                            <h2>Gender: {userIn.gender}</h2>
                        </div>
                        <div >
                            <h2>Phone Number: {userIn.phone}</h2>
                        </div>
                        <div>
                            <h2>LinkedIn Profile: {userIn.linkedIn}</h2>
                        </div>
                    </div>
                )
            }
            <div className='flex justify-center'>
                <Link to={`/updateProfile/${user.email}`} className='btn btn-outline btn-primary mt-5 mx-auto'>Update Profile</Link>
            </div>
        </div>
    );
};

export default MyProfile;