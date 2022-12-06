import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { FcGoogle } from 'react-icons/fc';

function Login() {
    const { LogInWithEmailAndPassword, loginWithGoogle } = useContext(AuthContext)
    const [error, setError] = useState('')

    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const submitHandel = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        LogInWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                alert('Congratulation you are login now!!')
                navigate(from , {replace:true})
            })
            .catch(error => {
                setError(error.message)
                alert(error.message)
                console.error(error)
            })
    }
    const handelGoogleLogIn = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res)
                alert('Congratulation you are login now!!')
            })
            .catch(err => {
                console.error(err)
                alert(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-pink-500">Login now!</h1>
                    <p className="py-6"><span className='font-extrabold text-2xl'>Dear client,</span><br /> for having our services you must have to Log in into our webside. You can logIn with your Google account</p>
                    <div className="flex flex-col w-full">
                        <div onClick={handelGoogleLogIn} className="grid h-20 card bg-base-300 rounded-box place-items-center"><FcGoogle className='text-5xl'></FcGoogle><div>Google</div></div>
                    </div>
                </div>
                <form onSubmit={submitHandel} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
                    <div className="card-body">
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
                        <p className=" mt-8 text-xs">Are you ragistered? Please <Link to='/ragister' className='link link-hover text-blue-700'>Ragister</Link></p>
                        <div className="form-control mt-6">
                            <button className="btn bg-pink-600">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
