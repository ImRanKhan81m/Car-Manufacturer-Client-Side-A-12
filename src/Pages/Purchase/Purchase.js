import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './Purchase.css'

const Purchase = () => {
    const [product, setProduct] = useState({});
    const { price, toolName, _id, description, img, quantity } = product
    const { manageId } = useParams();
    const [user] = useAuthState(auth);
    const [isReload, setIsReload] = useState(false);



    useEffect(() => {
        fetch(`http://localhost:5000/order/${manageId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [manageId, isReload]);


    const handleDecrease = () => {
        var quantityValue = parseInt(document.getElementById('quantity').value, 10);
        quantityValue = isNaN(quantityValue) ? 1 : quantityValue;
        if (quantityValue < 2) {
            quantityValue = 2
        }
        quantityValue--;
        document.getElementById('quantity').value = quantityValue;
    }

    const Increase = () => {
        var quantityValue = parseInt(document.getElementById('quantity').value, 10);
        quantityValue = isNaN(quantityValue) ? 0 : quantityValue;
        quantityValue++;
        document.getElementById('quantity').value = quantityValue;
    }
    var stockProduct = product.quantity;





    const handleSubmit = event => {
        event.preventDefault();
        const value = parseInt(event.target.quantity.value);
        let currentPrice = parseInt(document.getElementById('quantity')?.value) * price;

        const orderProduct = {
            customer: user.email,
            customerName: user.displayName,
            customerAddress: event.target.address.value,
            orderId: _id,
            product: toolName,
            img: img,
            quantity: event.target.quantity.value,
            totalPrice: currentPrice
        }

        if (value >= 10 && value <= stockProduct) {
            fetch('http://localhost:5000/order', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderProduct)
            })
                .then(res => res.json())
                .then(data => {
                    toast('Your Order is Confirmed.')
                })
        }

        else if (value < 10) {
            toast.error('Sorry! You have to order at least 10 products.')
        } else if (value > stockProduct) {
            toast.error('Sorry! You cannot order more than the stock product.')
        }
    }

    return (
        <div className='mt-10'>
            <div className=" lg:w-5/12 lg:w-7/12  mx-auto ">
                <div className=' card lg:card-side shadow-xl border'>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h1 className='font-bold text-2xl'>Your Address :</h1>

                                <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full my-2 focus:outline-none" />

                                <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full my-2 focus:outline-none" />

                                <textarea name='address' className="textarea textarea-bordered w-full" placeholder="Your Address"></textarea>
                            </div>

                            <div className='mt-10 '>
                                <h1 className='font-bold text-2xl mb-5'>Confirm Purchase :</h1>

                                <div className='grid grid-cols-2 mb-5 border p-5'>
                                    <div className='flex justify-start items-center'>
                                        <img className='w-[50%]' src={img} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-xl mb-3'>{product.toolName}</h1>
                                        <p className='mb-3'>
                                            {description}
                                        </p>
                                        <p className='mb-3'><span className='font-bold'>In Stock : </span>
                                            {quantity} Pcs
                                        </p>
                                        <p className='mb-3'><span className='font-bold'>Minimum Order: </span>
                                            10 Pcs
                                        </p>
                                        <p><span className='font-bold'>Price:</span> $ {price}</p>

                                        <div className='mt-3 select-none'>
                                            <span className='font-bold mr-3'>Quantity:</span>
                                            <FontAwesomeIcon onClick={() => handleDecrease()} icon={faMinusCircle} />
                                            <input defaultValue="10" id='quantity' name='quantity' type="number" className='border mx-2 px-2 w-[100px]' />
                                            <FontAwesomeIcon onClick={() => Increase()} icon={faPlusCircle} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <input type="submit" value="Confirm Order" className="btn btn-primary bg-primary w-full my-5 " />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;