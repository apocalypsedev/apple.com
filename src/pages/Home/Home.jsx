import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/Main/Main'
import Macos from '../../components/Macos/Macos'
import Homemap from '../../components/Homemap/Homemap'
import Homeswiper from '../../components/Homeswiper/Homeswiper'

function Home() {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Macos/>
        <Homemap/>
        <Homeswiper/>
    </div>
  )
}

export default Home