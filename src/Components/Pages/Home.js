import React from 'react'
import './Home.css'
import Topbar from '../../Components/Tools/Topbar'
import Leftbar from '../../Components/Leftbar/Leftbar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/Rightbar/Rightbar'

export default function Home() {
  return (
    <div>
      <>
        <Topbar/>
        <div className="feedcontainer">
          <Leftbar/>
          <Feed/>
          <Rightbar/>
        </div>
      </>
    </div>
  )
}
