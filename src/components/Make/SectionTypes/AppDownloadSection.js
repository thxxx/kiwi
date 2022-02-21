import React, {useContext, useState} from 'react'
import { motion } from 'framer-motion';
import { MyContext } from '../../../pages/Make/MakePageV2'
import {produce} from 'immer'
import TitleDesc from './components/TitleDesc'
import ReturnButton from './components/ReturnButton'
import AnimationDiv from './components/AnimationDiv'
import TextAuto from './components/TextAuto'

function AppDownloadSection({content}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    const returnLayout = {
        flexDirection:`${
            state.isPhone ? 
                content.mobile.layout === 3 ? 'column' : 'column-reverse'
            :
                content.layout === 1 ? 'row' : content.layout === 2 ? 'row-reverse' : 'column'
        }`
    }
    
    return (
        <>
            <div style={{ width:'100%', height:'100%'}}>
                <AnimationDiv content={content} returnLayout={returnLayout}>
                    <div className="text__container">
                        <TitleDesc content={content} />
                    </div>
                        <div style={{display:'flex', flexDirection:'column', width:'100%', justifyContent:'center', height:'100%'}}>
                            {content.appButton.use && 
                                <ReturnButton onlyapp={true} content={content} />
                            }
                            {content.caution.use && 
                                <div className="df-margin-big feature-desc" style={{width:'100%'}}>
                                    <TextAuto className="text-input"  
                                        value={content.caution.text} 
                                        color = {content.caution.color} 
                                        align = {content.caution.align}
                                        size = {content.caution.size}
                                        onChange={e => action.setContents(produce(state.contents, draft => {
                                            draft[state.secNum].caution.text = e.currentTarget.value;
                                        }))}  
                                    />
                                </div>
                            }     
                        </div>
                </AnimationDiv>
            </div>
        </>
    )
}

export default AppDownloadSection