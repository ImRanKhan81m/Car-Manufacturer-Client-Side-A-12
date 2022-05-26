import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const stripePromise = loadStripe('pk_test_51L0elPLUYp0aaPHI5RRQSarla1S2UkJylhSfcNpIzmMQwXCZ5uusomgskNT8DtJrIEI3yCuZnVj2geF4WzgLJDX400ydllK777');


const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/orderProduct/${id}`

    const { data: product, isLoading } = useQuery(['order', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='w-4/5 mx-auto pt-10 '>
            <div className="card bg-base-100 shadow-xl my-5">
                <div className="card-body ">
                    <p className="text-success font-bold text-2xl">Hello, {product?.customerName}</p>
                    <h2 className="card-title text-xl">Pay For {product?.product}</h2>
                    <p className='text-xl'>Please pay: ${product?.totalPrice}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 max-w-lg shadow-2xl bg-base-100 mx-auto py-10">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
            <div className='flex justify-center mt-5'>
                <Link to={'/dashboard/orders'}><button className='btn '> <FontAwesomeIcon className='mr-2' icon={faArrowLeft} />  Back</button></Link>
            </div>
        </div>
    );
};

export default Payment;