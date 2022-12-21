import React from 'react'

function ReviewsData({ RD }) {
    const { email, username, photo, review } = RD
    return (
        <div className="stat border-solid border-2 border-gray-500 mb-3">
            <div className="stat-figure text-secondary">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photo} />
                    </div>
                </div>
            </div>
            <div className="stat-value lg:text-5xl md:text-4xl text-xl">{username}</div>
            <div className="stat-desc text-secondary">{email}</div>
            <div className="stat-title ">Review:</div>
            <div className="lg:text-3xl md:text-2xl text-sm">{review}</div>
        </div>
    )
}

export default ReviewsData