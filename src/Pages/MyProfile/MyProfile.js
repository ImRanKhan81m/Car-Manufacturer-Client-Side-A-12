import React from 'react';
import img from '../../assets/Imran2 suit2-01.jpeg'
import img1 from '../../assets/portfolio/nike-shoes.png'
import img2 from '../../assets/portfolio/Screenshot 2022-05-26 204112.png'
import img3 from '../../assets/portfolio/fixpro owner.png'
import img4 from '../../assets/portfolio/Screenshot 2022-05-26 203938.png'
import Footer from '../Shared/Footer';


const MyProfile = () => {
    return (
        <div className=' bg-[#fef6eecc]'>
            <div className='mid-content '>
                <div className='lg:py-20 md:py-20 sm:py-10 py-5 grid gap-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
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
                    <div className='grid lg:grid-cols-2 gap-5'>
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

                <div className='pb-20'>
                    <h1 className='font-bold text-center text-5xl my-16'>My Portfolio</h1>
                    <div>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10'>
                            <div class="card card-compact w-full bg-base-100 shadow-xl">
                                <figure><img src={img2} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">Portfolio Website <div class="badge badge-primary">React</div></h2>
                                    <p>Frontend Developer with high level of experience in web designing and development, producting the Quality work.</p>
                                    <div class="card-actions justify-start my-3">
                                        <a target='blank' href="https://react-portfolio-imran.netlify.app/"><button class="btn btn-success">View Live</button></a>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-compact  bg-base-100 shadow-xl">
                                <figure><img src={img3} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">FixPro Owner Website <div class="badge badge-primary">React</div></h2>
                                    <p>Free Repair Evaluation. Free Warranties On All US Sales And Repairs. Buy A Refurbished Unit Today Or Get Your Unit Repaired Fast By House Tech Staff.</p>
                                    <div class="card-actions justify-start my-3">
                                        <a target='blank' href="https://fix-pro-service.web.app/"><button class="btn btn-success">View Live</button></a>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={img4} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">Food Review Website <div class="badge badge-primary">React</div> <div class="badge badge-primary">NodeJs</div></h2>
                                    <p>Fried chicken, also known as Southern fried chicken, is a dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried.</p>
                                    <div class="card-actions justify-start my-3">
                                        <a target='blank' href="https://food-review-website.netlify.app/"><button class="btn btn-success">View Live</button></a>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={img1} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">Shoes Warehouse Website <div class="badge badge-primary">React</div> <div class="badge badge-primary">NodeJs</div> <div class="badge badge-primary">MongoDb</div></h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div class="card-actions justify-start my-3">
                                        <a target='blank' href="https://nike-shoes-warehouse-f66ef.web.app/"><button class="btn btn-success">View Live</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MyProfile;