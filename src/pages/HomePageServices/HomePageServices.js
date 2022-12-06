import HomePageServicesCard from './HomePageServicesCard'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePageServices() {
    const [Services, setServices] = useState([])
    
    useEffect(() => {
      fetch('https://glamour-support.vercel.app/services')
        .then(res => res.json())
        .then(data => {
          setServices(data)
        })
    }, [])
    return (
      <div className='p-16' >
        <div className='text-center text-6xl mb-16' >
          <h1 id='logo' >Here is Our Services</h1>
          <p className='text-lg'>Make your self a professionnel makeup artist of yours by our instruction</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-10 '>
          {
            Services?.slice(0, 3).map(Service => <HomePageServicesCard
              key={Service._id}
              Service={Service}
            ></HomePageServicesCard>)
          }
        </div>
        <Link to='/ServiceCenter'><button className="btn btn-wide bg-purple-700 relative left-3/4 mt-20 ">All Services</button></Link>
      </div>
    )
  }

export default HomePageServices