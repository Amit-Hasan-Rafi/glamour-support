import React, { useState } from 'react'

function AddService() {

    const [service , setService] = useState({})
    const HandelAddService = event => {
        event.preventDefault()
        console.log(service)

        fetch('https://glamour-support.vercel.app/services',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(service)
        })
    }
    const handelOnBluer = event =>{
        const field = event.target.name;
        const value = event.target.value
        const newService = {...service}
        newService[field] = value
        setService(newService)
    }
    return (
        <form onSubmit={HandelAddService} className=' p-32'>
            <h1 id='logo' className='text-5xl font-extrabold'>Add Service Datas:</h1>
            <div className='grid grid-cols-2'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Add Service Title</span>
                    </label>
                    <input onBlur={handelOnBluer} name='name' type="text" placeholder="Service Title" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Img-1</span>
                    </label>
                    <input onBlur={handelOnBluer} name='img1' type="text" placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Img-2</span>
                    </label>
                    <input onBlur={handelOnBluer} name='img2' type="text" placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Img-3</span>
                    </label>
                    <input onBlur={handelOnBluer} name='img3' type="text" placeholder="Photo URL" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input onBlur={handelOnBluer} name='price' type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea onBlur={handelOnBluer} name='about' className="textarea textarea-bordered  h-24" placeholder="Description"></textarea>
                    <label className="label">
                    </label>
                </div>
            </div>
            <button className="btn btn-active btn-primary">ADD SERVICE</button>
        </form>
    )
}

export default AddService