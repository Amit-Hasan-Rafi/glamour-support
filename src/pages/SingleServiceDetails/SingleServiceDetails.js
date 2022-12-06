import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../context/AuthProvider'
import ReviewsData from './ReviewsData';

function SingleServiceDetails() {
    const [reviewsData, setReviewsData] = useState([])
    const services = useLoaderData()
    const { about, img1, img2, img3, price, name, _id } = services

    const { user } = useContext(AuthContext)
    const HandelAddReview = event => {
        event.preventDefault()
        const email = user.email || 'No email found'
        const username = user.displayName || 'No name Found'
        const photo = user.photoURL || 'Null'
        const textarea = event.target
        const review = textarea.review.value;
        const setReview = {
            email,
            username,
            services,
            photo,
            review, price
        }
        fetch(`https://glamour-support.vercel.app/serviceReview`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(setReview)
        })
            .then(res => res.json())
            .then (data => {
                console.log(data)
                const newReview = [...reviewsData , data]
                setReviewsData(newReview)
                textarea.reset()
                alert('review added')
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        fetch(`https://glamour-support.vercel.app/serviceReview`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviewsData(data)
            })
    }, [])
    return (
        <div>
            <div className='text-center lg:text-6xl md:text-5xl sm:text-5xl mt-10' >
                <h1 id='logo' >Service Details</h1>
            </div>
            <div className='grid grid-cols-3 gap-10 lg:p-20 md:p-10 p-10'>
                <PhotoProvider>
                    <PhotoView src={img2}>
                        <img className='w-fit rounded-lg' src={img2} />
                    </PhotoView>
                    <PhotoView src={img1}>
                        <img className='w-fit rounded-lg' src={img1} />
                    </PhotoView>
                    <PhotoView src={img3}>
                        <img className='w-fit rounded-lg' src={img3} />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className='pr-20 pl-20 mb-16'>
                <li id='logo' className='text-5xl font-extrabold'>{name}</li>
                <p>{about}</p>
            </div>
            <div className='pr-20 pl-20 mb-16'>
                <li id='logo' className='text-5xl font-extrabold'>Review Section</li>
            </div>
            <div className='mr-20 ml-20 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:flex sm:flex-col gap-10 mb-10'>
                <form onSubmit={HandelAddReview} className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-extrabold">Post Review:</span>
                    </label>
                    <textarea name='review' className="textarea textarea-bordered h-36" placeholder="Add your Review"></textarea>
                    {
                        user?.uid ?

                            <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-3">Post</button>
                            :
                            <div className='flex flex-col text-center mt-3'>
                                <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg" disabled>Post</button>
                                <p className='text-red-600'>You must have to LogIn for post any rerview</p>
                            </div>
                    }
                </form>
                <div>
                    <h1 className='text-2xl font-extrabold mb-4'>All Reviews:</h1>
                    {
                        reviewsData.map(RD => <ReviewsData
                            key={RD._id}
                            RD={RD}
                        ></ReviewsData>)
                    }
                </div>
            </div>
        </div>
    )
}
export default SingleServiceDetails