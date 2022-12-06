import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import './Header.css'

function Header() {
  const { logOut, user } = useContext(AuthContext)
  const logOutHnadler = () => {
    logOut()
  }
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link id='logo' to='/addService'>Add Service</Link></li>
              <li><Link id='logo' to='/blogs' >Blogs</Link></li>
              <li><Link id='logo' to='/myReviews' >My reviews</Link></li>
            </ul>
          </div >
          <Link id='logo' className="btn btn-ghost normal-case text-5xl text-pink-500" to='/'>Glamour<span className='text-5xl text-purple-500'>Support</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link id='logo' to='/addService'>Add Service</Link></li>
            <li><Link id='logo' to='/blogs' >Blogs</Link></li>
            <li><Link id='logo' to='/myReviews' >My reviews</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ?
            <div className='flex' >
              <div className='flex'>
                <div className='mr-7 justify-center align-middle'>
                </div>
                {user.photoURL ?
                  <abbr title={user.displayName} ><img className='w-14 rounded-full mx-2' src={user?.photoURL}></img></abbr>
                  :
                  <></>
                }
                <p className='mt-3 text-black text-lg font-semibold' >{user?.displayName}</p>
              </div>
              <div className='mx-2' >
                <Link onClick={logOutHnadler} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-purple-600">Log out</Link>
              </div>
            </div>
            :
            <div className='flex' >
              <div className='mr-7 justify-center align-middle'>
              </div>
              <>
                <Link className='btn mr-2 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-pink-600' to='/login'>Log in</Link>
                <Link className='btn mr-2 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-purple-600' to='/ragister'>Ragister</Link>
              </>
            </div>
          }
        </div>
      </div>
    </header>
  )
}

export default Header