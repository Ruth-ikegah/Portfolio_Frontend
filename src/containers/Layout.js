import React from 'react'
import Footer from '../components/Footer'

const Layout = ({children}) => {
    return (
      <>
      {children}
      <Footer/>
      </>
    )
}

export default Layout
