import React, {useState} from 'react'
import './ResponseNavBar.css'
import {Link} from 'react-router-dom'
import {QuestionCircle} from '@styled-icons/bootstrap'
import ResponseTutorialModal from '../../tools/ResponseTutorialModal'
import Profile from '../NavAndFooter/Profile'

function ResponseNavBar() {
    const [tutorialOpen, setTutorialOpen] = useState(false)

    return (
        <div className="response-nav__container">
            <div className="response-nav-triple-start">
                <div style={{fontWeight: '600', fontSize:'0.8em'}}>관리 페이지</div>
                <span className="make-nav-button" onClick={e => {
                    setTutorialOpen(true);
                }} style={{boxShadow:'none', color:'#6c63ff', width:'110px', fontSize:'0.8em', border:'none', marginLeft:'30px', color:'black', fontWeight: '500'}}>
                    사용 방법
                </span>
            </div>
            <Link to="/" className="response-nav-triple">Surfee</Link>
            <div className="response-nav-triple-end">
                <Profile />
            </div>
            <ResponseTutorialModal open={tutorialOpen} setOpen={setTutorialOpen} />
        </div>
    )
}

export default ResponseNavBar
