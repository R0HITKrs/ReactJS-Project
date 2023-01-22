import React from 'react';
import './Topbar.css';
import { BsSearch } from "react-icons/bs";
import { BsHouseFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";


export default function Topbar() {
  return (
    <div className="navbartop">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
            <a className="navbar-brand" href="/"><h4>FACEBOOK</h4></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="searchtop">
            <form className="searchbar d-flex" role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
              <button className="Searchbutton btn btn-outline" type="submit"><BsSearch/></button>
            </form>
            </div>
          <div className="right">  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/"><BsHouseFill size={26}/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><AiOutlineMessage size={26}/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><BsFillPersonPlusFill size={26}/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                <img src="https://pbs.twimg.com/profile_images/1587924192883793921/RRqNB_5H_400x400.jpg" id='profile' height={35} width={40} alt="Profile" />
                </a>
              </li>
            </ul>
            </div>
          </div>
    </div>
  </nav>
  </div>
  )
}
