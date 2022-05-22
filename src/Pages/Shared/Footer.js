import React from 'react';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };


    return (
        <div className='lg:pt-20 md:pt-10 sm:pt-5 pt-5 bg-secondary'>
            <div className=' mid-content grid lg:grid-cols-2 md:grid-cols-2 gap-5'>
                <div>
                    <h1 className='font-bold text-2xl mb-5'>CONTACT US</h1>
                    <p> <b>Location :</b> 5611 Wellington Road, Suite 115, Gainesville, VA 20155.</p>
                    <p><b>Phone:</b> 01309091104 - 01868032281</p>
                    <p><b>Email :</b> hossenimran564@gmail.com</p>
                    <p><b>Working Time :</b> 7 Days a week from 10-00 am to 8.00 pm </p>
                </div>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2' >
                    <div>
                        <h1 className='font-bold text-2xl mb-5'>My Account</h1>
                        <p>Brands</p>
                        <p>Gift Certificates</p>
                        <p>Affiliates</p>
                        <p>Specials</p>
                        <p>FAQs</p>
                        <p>Custom Link</p>
                    </div>

                    <div className='mt-5 lg:mt-0 md:mt-0 sm:mt-0'>
                        <h1 className='font-bold text-2xl mb-5'>INFORMATION</h1>
                        <p>Brands</p>
                        <p>Gift Certificates</p>
                        <p>Affiliates</p>
                        <p>Specials</p>
                        <p>FAQs</p>
                        <p>Custom Link</p>
                    </div>
                </div>
            </div>
            <div className='copyright text-center lg:py-10 md:py-5 sm:py-5 pb-3 mt-5'>
                <p>Copyright &copy; {getCurrentYear()}-{getCurrentYear() + 2}.  All Rights Reserved by <span className='text-primary'>CarTools Manufacturer</span> </p>
            </div>
        </div>
    );
};

export default Footer;

