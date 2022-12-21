import React from 'react'
import { Link } from 'react-router-dom'

function HomePageServicesCard({ Service }) {

    const { img1, name, price, about, _id } = Service
    return (
        <div className="card w-fit bg-base-100 shadow-xl">
            <figure><img className='w-3/4' src={img1} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <br />
                <p>{about?.slice(0, 100) + '.....'}<Link to={`/ServiceCenter/${_id}`} className='link link-hover text-blue-600 text-xs' >Read more</Link></p>
                <div className=' flex justify-between'>
                    <div>
                        <div>
                            <h2 className='lg:text-4xl mg:text-4xl text-2xl font-extrabold'>${price}</h2>
                        </div>
                        <div className="rating">
                            <input type="radio" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                    <div className="card-actions mt-5">
                        <Link to={`/ServiceCenter/${_id}`}><button className="btn btn-outline btn-secondary ">Read Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageServicesCard