import React from 'react'
import './Leftbar.css'
import { CgClapperBoard } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TbLayoutGridAdd } from "react-icons/tb";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageSquareAdd, BiJoystickAlt } from "react-icons/bi";

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="leftbar-wrapper">
        <ul className='leftbar-list'>
          <li className="leftbar-list-item">
            <CgClapperBoard className="Leftbar-list-item-icon" size={30}/>
            <span className="leftbar-list-item-text">Reels</span>
          </li>
          <li className="leftbar-list-item">
            <MdOutlineExplore className="Leftbar-list-item-icon" size={30} />
            <span className="leftbar-list-item-text">Explore</span>
          </li>
          <li className="leftbar-list-item">
            <TiGroupOutline className="Leftbar-list-item-icon" size={30} />
            <span className="leftbar-list-item-text">Groups</span>
          </li>
          <li className="leftbar-list-item">
            <FaRegHeart className="Leftbar-list-item-icon" size={30} />
            <span className="leftbar-list-item-text">Notifications</span>
          </li>
          <li className="leftbar-list-item">
            <BiMessageSquareAdd className="Leftbar-list-item-icon" size={30} />
            <span className="leftbar-list-item-text">Create</span>
          </li>
          <li className="leftbar-list-item">
            <BiJoystickAlt className="Leftbar-list-item-icon" size={30} />
            <span className="leftbar-list-item-text">Gaming</span>
          </li>
          <li className="leftbar-list-item">
            <TbLayoutGridAdd className="Leftbar-list-item-icon" size={30} />
            <span className="leftbar-list-item-text">Show More</span>
          </li>
        </ul>
        <hr className='leftbarhr'/>
        <ul className="friendlist">
          <li className="friend">
            <img src="https://a10.gaanacdn.com/gn_img/song/oAJbDlbnL8/JbDNmP1X3n/size_l_1612299163.jpg" alt="friendprofile" className="profile" height={56} width={56} />
            <span className="friendname">Person</span>
          </li>
          <li className="friend">
            <img src="https://pbs.twimg.com/profile_images/1299844050208555008/7wMQaJRA_400x400.jpg" alt="friendprofile" className="profile" height={56} width={56} />
            <span className="friendname">Person</span>
          </li>
          <li className="friend">
            <img src="https://media.vogue.in/wp-content/uploads/2022/11/Kiara-Advani-in-maroon-Arpita-Mehta-gharara-blouse-dupatta-400x400.jpg" alt="friendprofile" className="profile" height={56} width={56} />
            <span className="friendname">Person</span>
          </li>
          <li className="friend">
            <img src="https://qph.cf2.quoracdn.net/main-qimg-bb98246613899c7596c8047fd2dd7846-lq" alt="friendprofile" className="profile" height={56} width={56} />
            <span className="friendname">Person</span>
          </li>
          <li className="friend">
            <img src="https://64.media.tumblr.com/b8a7f7b77cdfe0dd9d5471fbcc563cc2/tumblr_p1l48di2gy1vy2tgqo7_400.jpg" alt="friendprofile" className="profile" height={56} width={56} />
            <span className="friendname">Person</span>
          </li>
        </ul>
      </div>
    </div>
  )
}