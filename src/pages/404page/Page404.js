import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
      <Link to='/'><button className="btn btn-active btn-ghost absolute left-3/4 top-1/4">Go Back Home</button></Link>
      <img className='w-full' src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png" alt="" />
    </div>
  )
}

export default Page404