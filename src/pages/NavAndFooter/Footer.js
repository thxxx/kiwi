import React from 'react'
import {Instagram} from '@styled-icons/boxicons-logos'
import {TelephoneFill} from '@styled-icons/bootstrap'
import {Mail} from '@styled-icons/entypo'
import {isMobile} from 'react-device-detect'
import './Footer.css'
 
function Footer() {
    return (
        <div className="footer">
            <div className="footer-more">
              <div className="footer-half" style={{flexDirection:'column'}}>
                <div className="footer-el">
                  <a href='https://tally.so/r/wMZ4Yn' target="_blank" className="insta" style={{fontSize:'30px', fontWeight:'700', color:'rgb(30,30,30)'}}>Surfee</a>
                </div>
                <div className="footer-el">
                  <TelephoneFill size="16" />&nbsp;&nbsp;&nbsp; 010-4690-5086
                </div>
                <div className="footer-el">
                  <Mail size="20" />&nbsp;&nbsp; surfee.business@gmail.com 
                </div>
              </div>
              <div className="footer-half" style={{justifyContent:`${isMobile ? 'start' : 'flex-end'}`}}>
                <div className="footer-el">
                  <a href='https://tally.so/r/wMZ4Yn' target="_blank" className="insta">문의하기</a>
                </div>
                <div className="footer-el">
                  <div className="insta" style={{cursor:'pointer'}} onClick={() => {
                    window.open(
                      'https://www.instagram.com/surfee.official/'
                    )
                  }}>인스타그램</div>
                </div>
              </div>
            </div>
            <div className="footer-bottom" style={{borderTop:'1px solid rgb(180,180,180)'}}>
              <div className="footer-half">
                <div className="footer-el">
                  © {new Date().getFullYear()} Surfee, All Rights Reserved
                </div>
              </div>
              <div className="footer-half" style={{justifyContent:`${isMobile ? 'start' : 'flex-end'}`}}>
                <div className="footer-el">
                  <a href="https://striped-cabin-4bf.notion.site/Surfee-be94494cf8c248e7b03a84e4c3966e1e" target="_blank" className="footer-text-click">
                    서비스 이용약관
                  </a>
                </div>
                <div className="footer-el">
                  <a href="https://striped-cabin-4bf.notion.site/Surfee-be94494cf8c248e7b03a84e4c3966e1e" target="_blank" className="footer-text-click">
                    개인정보 처리방침
                  </a>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Footer
