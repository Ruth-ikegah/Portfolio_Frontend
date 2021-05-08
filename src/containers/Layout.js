import React from 'react'
import Footer from '../components/Footer'
import Talk from '../components/Talk'

const Layout = ({children}) => {
    return (
      <>
      {children}
      <Talk/>
      <Footer/>

      </>
    )
}

export default Layout
