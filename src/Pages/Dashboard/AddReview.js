import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imgStorageKey = 'a7ae0492c3659f35e2c0af7203e883ca'


    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        description: data.description,
                        rating: data.rating,
                        img: img
                    }
                    fetch('https://sheltered-taiga-12711.herokuapp.com/add-review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Thanks for your feedback.')
                                reset()
                            } else {
                                toast.error('Failed to the add review')
                            }
                        })
                }
            })
    }

    return (
        <div className='py-10 '>
            <h1 className='text-center font-bold text-3xl'>Add a Review </h1>
            <form className='w-3/4 mx-auto' onSubmit={handleSubmit(onSubmit)} >

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Product Name"
                        className="input input-bordered focus:outline-none"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Add a short description</span>
                    </label>
                    <textarea name='address' className="textarea textarea-bordered w-full" type="text"
                        placeholder="Enter a description"
                        className="input input-bordered focus:outline-none"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        })}>
                    </textarea>

                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input
                        type="Number"
                        min="1"
                        max='5'
                        placeholder="Enter Product Price"
                        className="input input-bordered focus:outline-none"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Rating is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label htmlFor='img' className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        id='img'
                        type="file"
                        className="input focus:outline-none pl-1 w-52"
                        {...register("img", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                    </label>
                </div>

                {/* {signInError} */}
                <input className='btn btn-primary w-full text-white ' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;