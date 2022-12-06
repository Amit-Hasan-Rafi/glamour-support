import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

function Ragister() {
  const [error, setError] = useState('')
  const { CreatUser, UpdateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  const submitHandel = (event) => {
    event.preventDefault()
    const form = event.target;
    const displayName = form.displayName.value
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    CreatUser(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        form.reset()
        setError('')
        alert('Ragister Successfully !!')
        handelUserProfile(displayName, photoURL)
        navigate('/login')
      })
      .catch(error => {
        setError(error.message)
        console.error(error)
        alert(error.message)
      })
  }
  const handelUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL
    }
    UpdateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error))
  }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold  text-purple-500">Ragister first!</h1>
        </div>
        <form onSubmit={submitHandel} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Displayname</span>
              </label>
              <input type="displayname" name='displayName' placeholder="displayname" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input name="photoURL" type="text" placeholder="Phot URL" className="input input-bordered" />
              {/* <input type="file" className="file-input w-full max-w-xs" /> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <p className='text-red-600' >{error}</p>
            <p className=" mt-8 text-xs">If you ragister before? Please <Link to='/login' className='link link-hover text-blue-700'>Login</Link></p>
            <div className="form-control mt-6">
              <button className="btn bg-purple-600">Ragister</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Ragister