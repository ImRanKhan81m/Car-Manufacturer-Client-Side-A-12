import React from 'react';
import img from '../../assets/editBanner/master-collectsgs5654.jpg'
import Footer from '../Shared/Footer';

const Contact = () => {
    return (
        <div>
            <div class="hero h-[80vh] ">
                <div class="hero-content grid grid-cols-2 gap-10">
                    <div class="text-center lg:text-left">

                        <img src={img} alt="" />
                    </div>
                    <div class="card flex-shrink-0 w-full shadow-2xl border">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="name" class="input input-bordered focus:outline-none" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="email" class="input input-bordered focus:outline-none" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Address</span>
                                </label>
                                <input type="text" placeholder="address" class="input input-bordered focus:outline-none" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Message</span>
                                </label>
                                <textarea className=' h-[80px] focus:outline-none p-3 textarea textarea-bordered' name="details" cols="30" rows="10"></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send Message</button>
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