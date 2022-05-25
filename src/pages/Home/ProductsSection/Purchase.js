import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../../shared/Loading/Loading';
import { toast } from 'react-toastify';
import Footer from '../../../shared/Footer/Footer';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { name, img, price, available, minOrder } = product;
    const [availableCount, setAvailableCount] = useState(available);

    useEffect(() => {
        setAvailableCount(available)
    }, [available])

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    if (loading) {
        return <Loading />
    }
    const handleSubmit = e => {
        e.preventDefault();
        const UserName = user.displayName;
        const email = user.email;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const quantity = e.target.quantity.value;
        if (quantity < minOrder || quantity > available) {
            return toast.error(`Not less then ${minOrder} and Not More then ${available}`)
        }

        let count = parseInt(availableCount) - parseInt(quantity);
        setAvailableCount(parseInt(availableCount) - parseInt(quantity))
        const update = { count };

        const url = `http://localhost:5000/product/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {



            })

        const totalPrice = price * quantity;
        const purchase = {
            UserName: UserName,
            name,
            email: email,
            address: address,
            phone: phone,
            quantity: parseInt(quantity),
            price: totalPrice
        }
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Purchase successfully`)
                    e.target.address.value = '';
                    e.target.phone.value = '';
                    e.target.quantity.value = ''
                }

            })
    }
    return (
        <>
            <div className='md:grid grid-flow-col px-12 my-10'>
                <div className='flex items-center gap-5 col-span-2 mx-auto'>
                    <div className='flex items-center'>
                        <img width={100} src={img} alt="" />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>{name}</h2>
                        <div className='flex justify-between gap-4'>
                            <h3>Order quantity: {minOrder}</h3>
                            <h3>Price : ${price}</h3>
                        </div>
                        <h2>Available Quantity: {availableCount}</h2>
                    </div>
                </div>
                <div className='grid-span-1 mx-auto'>
                    <h2 className='text-3xl'>Process purchase</h2>
                    <form onSubmit={handleSubmit}>
                        <input className='border rounded-md p-2 mt-5' disabled type="name" name="name" value={user?.displayName} /> <br />
                        <input className='border rounded-md p-2 mt-5' disabled type="email" name="email" value={user?.email} /> <br />
                        <textarea className='border rounded-md mt-5 px-6 py-4' type="text-area" name="address" placeholder='Type your address' required /><br />
                        <input className='border rounded-md mt-5 p-2' type="number" name="phone" placeholder='Type your phone number' required /><br />
                        <input className='mt-5 p-2 w-28 border mr-4 rounded-md' type="number" name="quantity" placeholder='Quantity' required />
                        <input className='btn btn-primary btn-block mt-5' type='submit' value="purchase" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Purchase;