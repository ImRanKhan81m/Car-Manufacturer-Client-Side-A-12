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
    const { manageId } = useParams();
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/order/${manageId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [manageId]);

    
    let currentPrice
    console.log(currentPrice);
    const handleDecrease = () => {
        var quantityValue = parseInt(document.getElementById('quantity').value, 10);
        quantityValue = isNaN(quantityValue) ? 1 : quantityValue;
        if (quantityValue < 2) {
            quantityValue = 2
        }
        quantityValue--;
        document.getElementById('quantity').value = quantityValue;
        let price = parseFloat(product.price);
        currentPrice = quantityValue*price
        
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
        const value = parseInt(document.getElementById('quantity').value);
        if (value >= 10 && value <= stockProduct) {
            // console.log(product);
        } 
        else if(value < 10 ){
            toast.error('Sorry! You have to order at least 10 products.')
        }else if(value > stockProduct){
            toast.error('Sorry! You cannot order more than the stock product.')
        }
    }

    return (
        <div className='mt-10'>
            <div class=" lg:w-5/12 lg:w-7/12  mx-auto ">
                <div className=' card lg:card-side shadow-xl border'>
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h1 className='font-bold text-2xl'>Your Address :</h1>

                                <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full my-2 focus:outline-none" />

                                <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full my-2 focus:outline-none" />
                            </div>

                            <div className='mt-20 '>
                                <h1 className='font-bold text-2xl mb-5'>Confirm Purchase :</h1>

                                <div className='grid grid-cols-2 mb-5 border p-5'>
                                    <div className='flex justify-start items-center'>
                                        <img className='w-[50%]' src={product.img} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-xl mb-3'>{product.toolName}</h1>
                                        <p className='mb-3'>
                                            {product.description}
                                        </p>
                                        <p className='mb-3'><span className='font-bold'>In Stock : </span>
                                            {product.quantity} Pcs
                                        </p>
                                        <p className='mb-3'><span className='font-bold'>Minimum Order: </span>
                                            10 Pcs
                                        </p>
                                        <p><span className='font-bold'>Price:</span> $ {currentPrice}</p>

                                        <div className='mt-3 select-none'>
                                            <span className='font-bold mr-3'>Quantity:</span>
                                            <FontAwesomeIcon onClick={() => handleDecrease()} icon={faMinusCircle} />
                                            <input defaultValue = "10" id='quantity' name='number' type="number" className='border mx-2 px-2 w-[100px]' />
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