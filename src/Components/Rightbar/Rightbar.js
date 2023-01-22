import React from 'react'
import './Rightbar.css'
import {Users} from "../../dummydata"
import Online from '../Online/Online'

export default function Rightbar({profile}) {
  const Homerightbar = () => {
    return(
      <>
        <div className="birthdayContainer">
          <img className="giftImage" src="assert/gift.png" alt="gift" />
          <span className="giftText">
            <b>person1 </b> and <b> 4 other friend</b> have birthday today..
          </span>
        </div>
        <img src="assert/ad.png" alt="Ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbar-onlinefriend-list">
          {/* <li className="rightbarfriendlist">
            <div className="imageContainer">
              <img className="Onlinefirend-Image" src="https://64.media.tumblr.com/b8a7f7b77cdfe0dd9d5471fbcc563cc2/tumblr_p1l48di2gy1vy2tgqo7_400.jpg" alt="onlineFriend" />
              <span className="rightbarOnline"></span>
              <span className="friendUsername">john cena</span>
            </div>
          </li> */}
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const Profilerightbar = () => {
    return(
      <>
        <h1 className='rightbarTitle'>User Information</h1>
        <div className="rightbarinfo">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City: </span>
            <span className="rightbar-info-Value">Delhi</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Working: </span>
            <span className="rightbar-info-Value">Student</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relation: </span>
            <span className="rightbar-info-Value">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">
          <div className="rightbar-followings">
            <div className="rightbar-following">
              <img src="assert/post/1.jpeg" alt="" className="followings-img"/>
              <span className="username">Following-1</span>
            </div>
            <div className="rightbar-following">
              <img src="assert/post/2.jpeg" alt="" className="followings-img"/>
              <span className="username">Following-2</span>
            </div>
            <div className="rightbar-following">
              <img src="assert/post/3.jpeg" alt="" className="followings-img"/>
              <span className="username">Following-3</span>
            </div>
            <div className="rightbar-following">
              <img src="assert/post/4.jpeg" alt="" className="followings-img"/>
              <span className="username">Following-4</span>
            </div>
            <div className="rightbar-following">
              <img src="assert/post/5.jpeg" alt="" className="followings-img"/>
              <span className="username">Following-5</span>
            </div>
            <div className="rightbar-following">
              <img src="assert/post/6.jpeg" alt="" className="followings-img"/>
              <span className="username">Following-6</span>
            </div>
          </div>
        </h4>
      </>
    )
            
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <Profilerightbar/> : <Homerightbar/>}
      </div>        
    </div>
  )
}
