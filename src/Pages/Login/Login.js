import React from 'react';

const Login = () => {
    return (
            <div className='flex bg-secondary justify-center items-center h-[70vh] px-5'>
                <div class="card flex-shrink-0 w-full lg:max-w-lg md:max-w-lg sm:max-w-lg max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <h1 className='text-3xl text-center font-bold'>Login</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <div class="divider">OR</div>
                        <button class="btn btn-outline">Continue with google</button>
                    </div>
                </div>
            </div>
    );
};

export default Login;