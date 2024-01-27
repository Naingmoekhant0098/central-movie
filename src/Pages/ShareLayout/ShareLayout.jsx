import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const ShareLayout = () => {
  return (
    <div className=''>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default ShareLayout