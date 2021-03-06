import React, {useContext, useState} from 'react'
import { motion } from 'framer-motion';
import { MyContext } from '../../../pages/Make/MakePageV2'
import {produce} from 'immer'
import TitleDesc from './components/TitleDesc'
import ReturnButton from './components/ReturnButton'
import AnimationDiv from './components/AnimationDiv'
import TextAuto from './components/TextAuto'

function AppDownloadSection({content, setting}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    const returnLayout = {
        flexDirection:`${
            state.isPhone ? 
                content.mobile.layout === 3 ? 'column' : 'column-reverse'
            :
                content.layout === 2 ? 'row' : content.layout === 3 ? 'row-reverse' : 'column'
        }`
    }
    
    return (
        <>
            <motion.div 
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0" data-aos={content.animation} aos-duration="4000"
            style={{ width:'100%', height:'100%'}}>
                <AnimationDiv content={content} setting={setting} returnLayout={returnLayout}>
                    <div className="text__container">
                        <TitleDesc content={content} titlePlaceholder="잠재 유저의 앱 다운로드를 유도할 말을 적어보세요." descPlaceholder="여기를 클릭하여 잠재 유저의 앱 다운로드를 유도할 수 있는 문구를 적어보세요." />
                    </div>
                    <div style={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'center', height:'100%'}}>
                        {content.appButton.use && 
                            <ReturnButton onlyapp={true} content={content} />
                        }
                        {content.caution.use && 
                            <div className="df-margin-big feature-desc" style={{width:'100%'}}
                            onClick={() => {action.setFocus('caution'); action.setCategory(0)}}>
                                <TextAuto className="text-input"  
                                    small
                                    value={content.caution.text} 
                                    color = {content.caution.color} 
                                    align = {content.caution.align}
                                    size = {content.caution.size/20}
                                    onChange={e => action.setContents(produce(state.contents, draft => {
                                        draft[state.secNum].caution.text = e.currentTarget.value;
                                    }))}  
                                />
                            </div>
                        }     
                    </div>
                </AnimationDiv>
            </motion.div>
        </>
    )
}

export default AppDownloadSection
