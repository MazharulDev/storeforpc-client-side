import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L2rYBBa8YQutSyvJWES9011rNLD7yBYm4aGCHVIEjRL3CLVogitHW9bMioeoE77VY76XPwBz5EIysRWNlaIc9YI00XsEPOtIf');

const Payment = () => {
    const { id } = useParams();
    const { data: paymentProcess, isLoading } = useQuery(['purchase', id], () => fetch(`${process.env.REACT_APP_SERVER_LINK}/purchase/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    const { UserName, name, address, quantity, price } = paymentProcess;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="card-title mb-8">Hey, <span className='text-primary'>{UserName}</span></h2>
                    <p className='text-lg font-bold'>Your Product is {name}</p>
                    <p>You buying <span className='text-secondary font-bold'>{quantity}</span> pis product.</p>
                    <h3 className='text-xl'>Total price : ${price}</h3>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm paymentProcess={paymentProcess} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default Payment;