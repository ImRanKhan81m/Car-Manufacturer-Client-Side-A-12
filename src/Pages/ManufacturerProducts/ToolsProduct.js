import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsProduct = ({ tool }) => {
    const {img, toolName,description, price, quantity } = tool;
    const navigate = useNavigate();
    console.log(price);

    const handleOrderProduct = id =>{
        navigate(`/order/${id}`)
    }
    

    return (
        <div class="card bg-base-100 shadow-xl border">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title font-bold mx-auto">{toolName}</h2>
                <p>{description}</p>
                <p><b>Quantity:</b> {quantity}</p>
                <p><b>Price:</b> {price}</p>
                <div class="card-actions justify-end">
                    <button onClick={()=>handleOrderProduct(tool._id)} class="btn btn-primary w-full">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsProduct;