import React, {useContext, useState} from 'react'
import { motion } from 'framer-motion';
import TitleDesc from './components/TitleDesc'
import ImageOrSlide from './components/ImageOrSlide'
import TextAuto from './components/TextAuto'
import AnimationDiv from './components/AnimationDiv'

function VideoSection({content, setting}) {
    const returnLayout = {
        flexDirection:`${'column'}`,
        // paddingLeft:`${content.layout === 1 ? '30px' : content.layout === 2 ? '0px' : '30px'}`,
        // paddingRight:`${content.layout === 1 ? '0px' : content.layout === 2 ? '30px' : '30px'}`,
    }
    
    return (
        <motion.div 
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0" data-aos={content.animation} aos-duration="4000"
        style={{ width:'100%', height:'100%'}}>
            <AnimationDiv content={content} returnLayout={returnLayout} setting={setting}>
                <div className="text__container">
                    <TitleDesc content={content} titlePlaceholder="제목을 적어보세요." descPlaceholder="여기를 클릭하여 내용을 적어보세요." />
                </div>
                <div className="image__container" style={{marginTop:'12px'}}>
                    <ImageOrSlide content={content} />
                </div>
                {
                content.explanation.use &&
                <div style={{width:'100%'}}>
                    <TextAuto small  className="text-input" 
                        placeholder="여기를 클릭하여 동영상에 대한 추가 설명을 적어보세요."
                        value={content.explanation.text} 
                        color={content.explanation.color}
                        align={content.explanation.align}
                        size={content.explanation.size/20}
                        
                    />
                </div>
                }
            </AnimationDiv>
        </motion.div>
    )
}

export default VideoSection
