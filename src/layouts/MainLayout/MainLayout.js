import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../pages/Footer/Footer'
import Header from '../../pages/Header/Header'

function MainLayout() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout