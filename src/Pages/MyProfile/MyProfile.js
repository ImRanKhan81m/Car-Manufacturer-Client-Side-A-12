import React from 'react';
import img from '../../assets/Imran2 suit2-01.jpeg'

const MyProfile = () => {
    return (
        <div className='mid-content'>
            <h1 className='font-bold text-center text-5xl mt-5'>About Me</h1>
            <div className='mt-20 grid grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <div>
                        <div class="avatar flex justify-center mb-3">
                            <img className='rounded-2xl' src={img} alt="" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <p>Hi There...</p>
                        <h2 className='font-bold text-4xl mb-3'>My name is Imran Hossen</h2>
                        <p>I'm A Front End Web Developer Who Is Passionate About Making Error-Free Websites With 100% Client Satisfaction. I Have A Passion For Learning And Sharing My Knowledge With Others As Publicly As Possible. I Love To Solve Real-World Problems.I Enjoy Working With Include ReactJS And JavaScript.</p>
                        <button className='btn btn-success mt-5'>About Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;