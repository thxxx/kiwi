import React, {useState, useEffect} from 'react'
import KaKaoTalkButton from './KaKaoTalkButton'
import {useLocation} from 'react-router-dom'


function GiftEnd() {
    const location = useLocation()
    
    useEffect(() => {
        console.log(location.state.id)

        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true

        document.body.appendChild(script)

        return () => {
        document.body.removeChild(script)
        }
    }, [])


    return (
        <div>
            <KaKaoTalkButton title={location.state.title} url={'https://surfee.co.kr/giftbox/' + location.state.id} imgUrl="https://firebasestorage.googleapis.com/v0/b/kiwi-d5dd3.appspot.com/o/JTRUACJIbSW3wucwfOoKitn0lvF2%2F11722f27-c8f0-437e-8bab-0aa451c39f5a?alt=media&token=f32ab77d-815c-4f2d-99e7-830ef8283f81" />
        </div>
    )
}

export default GiftEnd
