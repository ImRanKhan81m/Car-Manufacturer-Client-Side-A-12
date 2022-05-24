import React, { useEffect, useState } from 'react';
import ToolsProduct from './ToolsProduct';

const ManufacturerProducts = () => {
    const [tools, setTools] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/tools')
        .then(res=>res.json())
        .then(data=>setTools(data.slice(0, 6)))
    },[])


    return (
        <div className='py-10'>
            <p className='text-center text-primary font-bold'>TOP SALE IN THE WEEK</p>
            <h1 className='text-center font-bold text-3xl mb-10'>BEST SELLER TOOLS</h1>

            <div className='mid-content grid grid-cols-3 gap-5 '>
                {
                    tools.map(tool=> <ToolsProduct
                    key={tool._id}
                    tool={tool}
                    ></ToolsProduct>)
                }
            </div>
        </div>
    );
};

export default ManufacturerProducts;