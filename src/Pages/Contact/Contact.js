import React from 'react';
import img from '../../assets/editBanner/master-collectsgs5654.jpg'
import Footer from '../Shared/Footer';

const Contact = () => {
    return (
        <div>
            <div className="hero h-[80vh] ">
                <div className="hero-content grid grid-cols-2 gap-10">
                    <div className="text-center lg:text-left">

                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl border">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Address</span>
                                </label>
                                <input type="text" placeholder="address" className="input input-bordered focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea className=' h-[80px] focus:outline-none p-3 textarea textarea-bordered' name="details" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;