import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const [product, setProduct] = useState({});
    const { manageId } = useParams();
    const [user] = useAuthState(auth);
    console.log(product);

    useEffect(() => {
        const url = `http://localhost:5000/order/${manageId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [manageId]);

    const handleSubmit= event =>{
        event.preventDefault()
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
                                        <p><span className='font-bold'>Price:</span> $ {product.price}</p>
                                        <div className='mt-3'> <span className='font-bold mr-3'>Quantity:</span>
                                        <button><FontAwesomeIcon icon={faMinusCircle} /></button><input maxLength="50" type="number" className='border mx-2 px-2 w-[100px]'/><button><FontAwesomeIcon icon={faPlusCircle} /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <input type="submit" value="Submit" className="btn btn-primary bg-primary w-full my-5 " />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;