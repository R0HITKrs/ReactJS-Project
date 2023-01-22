import React from 'react'
import './Profile.css'

import Topbar from '../../Tools/Topbar'
import Leftbar from '../../Leftbar/Leftbar'
import Rightbar from '../../Rightbar/Rightbar'
import Feed from '../../Feed/Feed'

export default function Profile() {
  return (
    <>
      <Topbar/>
        <div className="profile">
          <Leftbar/>
          <div className="profile-right">
            <div className="profile-rightbar-top">
              <div className="profilecover">
                
                <img className="coverimg" src="https://media.istockphoto.com/photos/cement-floor-and-black-wall-backgrounds-empty-room-interior-use-for-picture-id1226232663?b=1&k=20&m=1226232663&s=612x612&w=0&h=M5NYr0Nht80t08bY1OYo7jKP-2vJIuj2iSsw5-uvRRw=" alt="coverpage" />

                <img className="profileimg" src="https://pbs.twimg.com/profile_images/1587924192883793921/RRqNB_5H_400x400.jpg" alt="profileimg" />
              
              </div>
              <div className="profileinfo">
                <h4 className="profilename">Rohit Kumar</h4>
                <span className="profileDesc">Hey nice to meet you</span>
              </div>
            </div>
            <div className="profile-rightbar-bottom">
              <Feed/>
              <Rightbar  profile/>
            </div>
          </div>
        </div>
      </>
  )
}
