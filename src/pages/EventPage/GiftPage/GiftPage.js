import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import './GiftPage.css'
import gift from '../../../tools/img/gift/gift.png'
import back from '../../../tools/img/gift/back.jpg'
import {Link} from 'react-router-dom'

const OUT = styled('div')`
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: MapoFlowerIsland;
`

function GiftPage() {
    
    return (
        <OUT>
            <div className="gift__container">
                <div className="gift__landing" style={{backgroundImage:`url(${back})`, height:'100vh'}}>
                    <div style={{
                        backgroundColor: '#95DAC1',
                        width:'100%',
                        height:'100%',
                        opacity:'0.3',
                        position:'absolute',
                        zIndex:'1'
                    }}>
                    </div>
                    <div className="center-column" style={{zIndex:'2'}}>
                        {/* <div>
                            <img src={gift} style={{width:'300px'}} />
                        </div> */}
                        <div className="centera" style={{position:'relative', height:'40vh'}}>
                            <iframe src="https://embed.lottiefiles.com/animation/102034" style={{border:'none', position:'absolute', width:'100%', height:'100%', zIndex:'2'}}></iframe>
                            <div style={{fontSize:'2.4em', fontFamily:'SDSamliphopangche_Outline', zIndex:'3'}}>
                                마음을 담아<br/>선물하기
                            </div>
                        </div>
                        <div className="gift-main__desc" style={{margin:'50px 0px'}}>
                            선물과 함께 <br/>진심이 담긴 마음을 전달해보세요.<br/><br/>
                            직접 만나서 주지는 못하더라도 <br/>정성스레 포장한다면 <br/>그 마음이 전해질거에요.
                        </div>
                    </div>
                </div>
                <Link to='/giftmake' className="gift__fab">
                    선물 포장하기
                </Link>
            </div>
        </OUT>
    )
}

export default GiftPage
