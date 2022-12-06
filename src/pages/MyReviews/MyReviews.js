import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import ReviewCard from './ReviewCard'

function MyReviews() {
    const [reviews, setReview] = useState([])
    const { user } = useContext(AuthContext)


    useEffect(() => {
        fetch(`https://glamour-support.vercel.app/serviceReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReview(data)
            })
    }, [user?.email])

    const handelDelete = (id) =>{
        const procced = window.confirm('Are you sure to Delete?')
        if(procced){
            fetch(`https://glamour-support.vercel.app/serviceReview/${id}`,{
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Review delete successfully')
                    const remaining = reviews.filter(rev => rev._id !== id)
                    setReview(remaining)
                }
            })
        }   
    }
    return (
        <div className='m-10 p-10'>
            <h1 id='logo' className='text-5xl font-extrabold'>My all reviews </h1>
            <div className='mt-10 lg:grid lg:grid-cols-2 md:flex md:flex-col sm:flex sm:flex-col gap-10'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        RD={review}
                        handelDelete={handelDelete}
                    ></ReviewCard>)
                }
            </div>
        </div>
    )
}

export default MyReviews