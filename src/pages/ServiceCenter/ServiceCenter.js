import React, { useEffect, useState } from 'react'
import AllServices from './AllServices'

function ServiceCenter() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://glamour-support.vercel.app/services')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='p-20' >
            <div className='text-center text-6xl mb-16' >
                <h1 id='logo' >All Services collection</h1>
            </div>
            <div className='grid grid-cols-3 gap-16'>
                {
                    items.map(item => <AllServices
                        key={item._id}
                        item={item}
                    ></AllServices>)
                }
            </div>
        </div>
    )
}

export default ServiceCenter