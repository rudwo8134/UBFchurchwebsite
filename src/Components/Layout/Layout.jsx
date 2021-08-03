import React from 'react'
import Navbar from './Navbar'

const Layout = (props) => {

  return (
    <>
    <Navbar/>
    {props.chidren}
    </>
  )
}

export default Layout
