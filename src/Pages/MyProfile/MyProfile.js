import React from 'react';
import img from '../../assets/Imran2 suit2-01.jpeg'

const MyProfile = () => {
    return (
        <div className=' bg-[#fef6eecc]'>
            <div className='mid-content '>
                <div className='py-20 grid grid-cols-2'>
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

                <div>
                    <h1 className='font-bold text-center text-5xl mb-16'>About Me</h1>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className=' p-10 shadow-lg bg-white rounded-3xl'>
                            <h2 className='font-bold text-3xl mb-3'>About Me</h2>
                            <p>I'm A Front End Web Developer Who Is Passionate About Making Error-Free Websites With 100% Client Satisfaction. I Have A Passion For Learning And Sharing My Knowledge With Others As Publicly As Possible. I Love To Solve Real-World Problems.I Enjoy Working With Include ReactJS And JavaScript.</p>
                            <div className='mt-10 grid grid-cols-2'>
                                <div>
                                    <h2><span className='text-warning'>Age:</span> 21</h2>
                                    <h2><span className='text-warning'>Gender:</span> Male</h2>
                                    <h2><span className='text-warning'>Language:</span> Bengali, English</h2>
                                    <h2><span className='text-warning'>Work:</span> Front-End Developer</h2>
                                </div>
                                <div>
                                    <h2><span className='text-warning'>Freelance:</span> Available</h2>
                                    <h2><span className='text-warning'>Phone:</span> 01309-091104</h2>
                                    <h2><span className='text-warning'>Email:</span> imru8198@gmail.com</h2>
                                    <h2><span className='text-warning'>Country:</span> Bangladesh</h2>
                                </div>
                            </div>
                            <button className='btn btn-success mt-5'>Download CV</button>
                        </div>
                        <div className=' p-10 shadow-xl bg-white rounded-3xl'>
                            <h2 className='font-bold text-3xl mb-10'>My Skill</h2>
                            <div>
                                <h2 className='font-bold'>HTML</h2>
                                <progress class="progress progress-success w-full" value="100" max="100"></progress>
                                <h2 className='font-bold'>CSS</h2>
                                <progress class="progress progress-success w-full" value="80" max="100"></progress>
                                <h2 className='font-bold'>BOOTSTRAP</h2>
                                <progress class="progress progress-success w-full" value="90" max="100"></progress>
                                <h2 className='font-bold'>Tailwind CSS</h2>
                                <progress class="progress progress-success w-full" value="60" max="100"></progress>
                                <h2 className='font-bold'>JavaScript</h2>
                                <progress class="progress progress-success w-full" value="80" max="100"></progress>
                                <h2 className='font-bold'>ReactJs</h2>
                                <progress class="progress progress-success w-full" value="85" max="100"></progress>
                                <h2 className='font-bold'>MongoDb Database</h2>
                                <progress class="progress progress-success w-full" value="60" max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                <h1 className='font-bold text-center text-5xl my-16'>My Portfolio</h1>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;