import React from 'react'
import "../Share_Post/Share.css"
import { BsBook } from 'react-icons/bs'
import { RiVideoAddFill } from 'react-icons/ri'
import { CgClapperBoard } from 'react-icons/cg'

export default function share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src='https://pbs.twimg.com/profile_images/1587924192883793921/RRqNB_5H_400x400.jpg' alt="shareProfile"  className="shareProfile" />
                <input placeholder="what's in your mind..." className="shareInput" />
            </div>
            <hr className="shareSaparator" />
            <div className="shareBottom">
              <div className="shareOptions">
                <div className="shareOption-list">
                  <BsBook htmlColor = "grey" className="shareOption-icon" size={26} />
                  <span className="shareOption-text">Stories</span>
                </div>
                <div className="shareOption-list">
                  <CgClapperBoard htmlColor = "grey" className="shareOption-icon" size={26} />
                  <span className="shareOption-text">Reels</span>
                </div>
                <div className="shareOption-list">
                  <RiVideoAddFill htmlColor = "grey" className="shareOption-icon" size={26} />
                  <span className="shareOption-text">Rooms</span>
                </div>
                <div className="shareOption-list sharebutton" type="button">Share</div>
              </div>
            </div>
        </div>
    </div>
  )
}
