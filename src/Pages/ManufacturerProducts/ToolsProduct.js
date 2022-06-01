import React from 'react';
import { useNavigate } from 'react-router-dom';

const ToolsProduct = ({ tool }) => {
    const { img, toolName, description, price, quantity } = tool;
    const navigate = useNavigate();

    const handleOrderProduct = id => {
        navigate(`/order/${id}`)
    }


    return (
        <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="card bg-base-100 shadow-xl border">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold mx-auto">{toolName}</h2>
                <p>{description}</p>
                <p><b>Quantity:</b> {quantity}</p>
                <p><b>Price:</b> {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleOrderProduct(tool._id)} className="btn btn-primary w-full">BUY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsProduct;