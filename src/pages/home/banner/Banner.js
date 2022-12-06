import React from 'react'
import { Link } from 'react-router-dom'
import './banner.css'
function Banner() {
    return (
        <div className="hero min-h-screen mb-20" style={{ backgroundImage: `url("https://i.ibb.co/zmBVcPn/itl-cat-cosmetic-wallpaper-895032-2.jpg")` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg absolute inset-y-80 lg:left-32 md:left-28 sm:16">
                    <h1 className="banner-text-font mb-5 text-8xl font-bold text-pink-500">Hello Ladies</h1>
                    <p className="banner-text-font mb-5 text-4xl font-bold text-purple-500">To make your self more attractive,  By our masterclass Beauty instruction</p>
                    <Link to='/ServiceCenter' ><button className="btn btn-wide bg-pink-600 ">BUY NOW</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner