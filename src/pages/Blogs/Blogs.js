import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <div className=' hero flex flex-col p-20' >
      <div className="card w-fit bg-base-100 shadow-xl  mb-10">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-3xl font-bold">#Difference between SQL and NoSQL</h2>
          <div className="divider"></div> 
          <div className='grid grid-cols-2 gap-10'>
            <div>
              <p className='text-2xl font-bold'>(SQL)</p>
              <li>SQL(Structure Qurery Language) is a Structure type database</li>
              <li>Its a relational database</li>
            </div>
             
            <div>
              <p className='text-2xl font-bold'>(NoSQL)</p>
              <li>NoSQL is a no-tabular DataBase . It's store data like an Object</li>
              <li>Its a non-relational database</li>
            </div>

          </div>
        </div>
      </div>
      <div className="card w-fit bg-base-100 shadow-xl  mb-10">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">#What is the difference between javascript and Node JS?</h2>
          <li><span className='font-bold'>Javascript</span> is a simple programming language, What can we use in any Browser</li>
          <li><span className='font-bold'>Node.JS</span>  is an interpreter or execution environment for the JavaScript programming language</li>
        </div>
      </div>
      <div className="card w-fit bg-base-100 shadow-xl  mb-10">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">#What is JWT</h2>
          <p> JWT(JSON Web Token) is an authorisation security purpose feature.After use JWT when we authorize ourself by log in , client side send the info to the server side and then Server send back a token to the client side. The tokens are stored in many places on the client side(localStoreg , cookies, etc). And after that if you send any request to get something from the server , the server will query your authorisation or the powers your's that you can access that data. Then the server will provide you that info from their database.if you don't hace that power to access that data, server will not return you that</p>
        </div>
      </div>
      <div className="card w-fit bg-base-100 shadow-xl  mb-10">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">#How does NodeJS handle multiple requests at the same time</h2>
          <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
      </div>
      <Link to='/' className='btn'>Go Home</Link>
    </div>
  )
}

export default Blogs