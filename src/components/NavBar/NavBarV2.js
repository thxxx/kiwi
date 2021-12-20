import React, {useState, useEffect} from 'react'
import './utils/NavBar.css'
import './utils/NavBarV2.css'
import {Link} from 'react-router-dom';


function NavBarV2({history, scrollPosition}) {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width:'100%'}}>
            <div className="nav-bar-container-v2">
                <div className="nav-bar-left-v2">
                    <Link to="/v2" className="nav-bar-title-v2" style={{cursor:'pointer', color:'#6a63f7'}}>
                        Surfee
                    </Link>
                    {/* <Link to="/info" className="nav-left-text" style={{marginLeft:'4vw'}}>
                        제품소개
                    </Link> */}
                    <Link to="/questions" className="nav-left-text">
                        문의하기
                    </Link>
                </div>
                <div className="nav-on-v2">
                    <button className="nav-button-round-v2" onClick={() => window.scrollTo(0,document.body.scrollHeight)}>무료로 체험하기</button>
                </div>
            </div>
            <div style={{borderBottom: '2px solid black', width:`${(scrollPosition/window.innerHeight)*63}%`, position:'fixed', top:'58px', zIndex:'12'}}></div>
        </div>
    )
}

export default NavBarV2
