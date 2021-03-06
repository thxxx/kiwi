import React, {useContext, useState, useRef} from 'react'
import { motion } from 'framer-motion';
import TitleDesc from './components/TitleDesc'
import TextAuto from './components/TextAuto'
import {Upload} from '@styled-icons/bootstrap';
import { isMobile } from 'react-device-detect'
import FeatureCard from './components/FeatureCard'

function GallerySection({content,setting}) {

    const returnElementsCards = content.elements.map((item, index) => {
       if(index < content.numOfElements){
           return(
               <>
               <FeatureCard section="gallery" content={content} index={index}>
                       {content.element.use && 
                       <div style={{width:'100%', position:'relative', cursor:'default'}}>
                           { item.attachment ? 
                            <img 
                                src={item.attachment} 
                                style={{
                                    width:'100%',
                                    objectFit:'cover',
                                    height:`${isMobile ? content.mobile.cardSize : content.element.size}px`, 
                                    borderRadius:`${content.card.borderRadius}px ${content.card.borderRadius}px 0px 0px`
                                }}/> 
                               :
                            <div className="feature-upload-button uphover" 
                                style={{ 
                                    height:`${content.element.size}px`, 
                                    backgroundColor:`${content.element.backgroundColor}`, 
                                    borderRadius:`${content.card.borderRadius}px ${content.card.borderRadius}px 0px 0px`
                                }}>
                                <Upload size="25" />
                            </div>
                           }
                       </div> 
                       }
                       {
                           content.card.use && 
                           <div className="df-margin-big feature-title" style={{
                               width:'100%', 
                               height:'100%', 
                               alignItems:'start', 
                               display: 'flex', 
                               margin:'0px', 
                               padding:`${isMobile ? '5px' : '8px'}`}}>
                                <div 
                                    className="text-no-input" 
                                    dangerouslySetInnerHTML={{__html:item.text}}
                                    style={{
                                        color:`${content.text.color}`,
                                        textAlign:`${isMobile ? content.mobile.align : content.align}`,
                                        fontSize:'0.9em',
                                        fontFamily:`${setting.smallFont}`,
                                    }}
                                >

                                </div>
                                {/* <TextAuto 
                                    small
                                    className="text-no-input" 
                                    placeholder="????????? ???????????? ???????????? ?????? ????????? ???????????????."
                                    value={item.text} 
                                    size={0.9}
                                    color = {content.text.color} 
                                    align = {isMobile ? content.mobile.align : content.align}
                                    disabled
                                /> */}
                           </div>
                       }
                   </FeatureCard>
               </>
           )
       }
    })

    return (
        <motion.div className="template"data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
            data-aos={content.animation.type} aos-duration="4000">

            <TitleDesc content={content} />

            <div className="features__container" style={{flexWrap : `${isMobile ? 'wrap' : ''}`}}>
                {returnElementsCards}
            </div>

        </motion.div>
    )
}

export default GallerySection
