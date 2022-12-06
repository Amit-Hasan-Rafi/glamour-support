import React, { useEffect } from 'react'

function ReviewCard({ RD , handelDelete}) {
    const { review, services ,_id } = RD
    console.log(RD)

    useEffect(()=>{
            fetch(`https://glamour-support.vercel.app/services/${services._id}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
    },[services._id])

    
    return (
        <div className="card card-side bg-base-100 shadow-xl w-fit">
            <figure><img src={services.img1} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{services.name}</h2>
                <p>Review:</p>
                <p className='text-lg font-bold' >{review}</p>
                <div className="card-actions justify-end">
                    <button onClick={ () => handelDelete (_id) } className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard