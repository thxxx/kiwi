import React, {useContext, useState} from 'react'
import { motion } from 'framer-motion';
import TitleDesc from './components/TitleDesc'
import QnaOpenClose from './components/QnaOpenClose'
import TextAuto from './components/TextAuto'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { isMobile } from 'react-device-detect'

function QnaSection({content, setting}) {

    const returnQnaCards = content.qnas.map((item, index) => {
        return(
            <QnaOpenClose setting={setting} key={index} title={item.question} open={content.qna.shape === 'open'} color={content.qna.question} content={content} type={content.layout} index={index}>
                <div className="edit-element" style={{alignItems:'start'}}>
                    <div style={{display:'flex', alignItems: 'start', height:'100%'}}>
                        <span className="qna__word" style={{ color: `${content.qna.answer}`}}>A. <></></span>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{__html:item.answer}}
                        style={{
                            marginTop:'4px', 
                            width:'100%',
                            color:`${content.qna.answer}`, 
                            textAlign:`start`,
                            resize:'none',
                            fontSize: `${0.9}em`,
                            fontFamily:`${setting.smallFont}`,
                        }}>
                        {/* <TextAuto
                            disabled
                            small
                            size={0.9}
                            value={item.answer} 
                            color={content.qna.answer} align="start" /> */}
                    </div>
                </div>
            </QnaOpenClose>
        )
    })

    return (
        <motion.div 
            className="template"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0" data-aos={content.animation.type} aos-duration="4000">

            {/* ???????????? ????????? ?????????????????? ???????????? ????????? ?????? ????????? */}
            <div style={{width : `${isMobile ? '100%' : '95%'}` }}>  
                <TitleDesc content={content} />
            </div>

            <div className="features__container" style={{flexDirection: 'column', marginTop:'20px'}}>
                {returnQnaCards}
            </div>

        </motion.div>
    )
}

export default QnaSection