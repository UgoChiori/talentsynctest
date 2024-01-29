import React from 'react'
import LayoutOne from './components/LayoutOne'
import LayoutTwo from './components/LayoutTwo'
import LayoutThree from './components/LayoutThree'
import LayoutFour from './components/LayoutFour'
import LayoutFive from './components/LayoutFive'
import Footer from './components/Footer'



const HomePage:React.FC = () => {
  return (
   <main>
    <LayoutOne />
    <LayoutTwo />
    <LayoutThree />
    <LayoutFour />
    <LayoutFive />
    <Footer />
   </main>
  )
}

export default HomePage