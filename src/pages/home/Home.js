import React from 'react'
import AboutArtist from '../AboutArtist/AboutArtist'
import Artical from '../Artical/Artical'
import HomePageServices from '../HomePageServices/HomePageServices'
import Banner from './banner/Banner'

function Home() {
  return (
    <div >
      <Banner></Banner>
      <HomePageServices></HomePageServices>
      <AboutArtist></AboutArtist>
      <Artical></Artical>
    </div>
  )
}

export default Home