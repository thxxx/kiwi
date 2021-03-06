import React, {useContext, useEffect, useState, useRef} from 'react'
import './FeaturesSection.css'
import { motion } from 'framer-motion';
import TitleDesc from './components/TitleDesc'
import TextAuto from './components/TextAuto'
import Element from './components/Element'
import { MyContext } from '../../../pages/Make/MakePageV2'
import produce from 'immer'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FeatureCard from './components/FeatureCard'
import Editor from '../tools/Editor'

function FeaturesSection({content, setting}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    const returnFeatureCards = content.elements.map((item, index) => {
        if (index < content.numOfElements){
        return(
            <FeatureCard section="feature" align={state.isPhone ? content.mobile.align : content.elementText.align} content={content} index={index}>
                {
                    content.element.use && 
                        <Element content={content} item={item} index={index} key={index}/>
                }
                {
                    content.elementText.use && 
                    <div onClick={() => {action.setFocus('elementText'); action.setCategory(0)}} style={{width:'100%', marginTop:`${content.element.use ? '10px' : '0px'}`}}>
                    {
                        content.elementText.titleUse && 
                            <div className="df-margin-big feature-title" style={{width:'100%'}}>
                                <div 
                                    className={state.isPhone ? content.mobile.align === 'start' ? 'alignLeft' : 'alignCenter' : content.elementText.align === 'start' ? 'alignLeft' : 'alignCenter'}
                                    style={{
                                        width:'100%', 
                                        color:`${content.elementText.titleColor}`, 
                                        fontFamily:`${setting.font}`,
                                        fontSize:`${content.elementText.titleSize/20}em`}}>
                                    <Editor 
                                        data={item.title}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            action.setContents(produce(state.contents, draft => {
                                                draft[state.secNum].elements[index].title = data;
                                            }))
                                        }}
                                    />
                                    {/* <TextAuto className="text-input" 
                                        value={item.title} 
                                        color = {content.elementText.titleColor} 
                                        align = {state.isPhone ? content.mobile.align : content.elementText.align}
                                        onChange={e => action.setContents(produce(state.contents, draft => {
                                            draft[state.secNum].elements[index].title = e.currentTarget.value;
                                        }))} 
                                        size={content.elementText.titleSize/20} 
                                        placeholder="특징"
                                    /> */}
                                </div>
                            </div>
                    }
                    {
                        content.elementText.descUse && 
                            <div className="df-margin-small feature-desc">
                                <div 
                                    className={state.isPhone ? content.mobile.align === 'start' ? 'alignLeft' : 'alignCenter' : content.elementText.align === 'start' ? 'alignLeft' : 'alignCenter'}
                                    style={{width:'100%', color:`${content.elementText.descColor}`, 
                                        fontFamily:`${state.setting.smallFont}`, 
                                        fontSize:`${content.elementText.descSize/20}em`}}>
                                    <Editor 
                                        data={item.desc}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            action.setContents(produce(state.contents, draft => {
                                                draft[state.secNum].elements[index].desc = data;
                                            }))
                                        }}
                                    />
                                </div>
                                {/* <TextareaAutosize 
                                    className="text-input"  
                                    value={item.desc} 
                                    color = {content.elementText.descColor}
                                    onChange={e => action.setContents(produce(state.contents, draft => {
                                        draft[state.secNum].elements[index].desc = e.currentTarget.value;
                                    }))}  
                                    style={{
                                        fontFamily:`${state.setting.smallFont}`, 
                                        color:`${content.elementText.descColor}`, 
                                        fontSize:`${content.elementText.descSize/20}em`, 
                                        // boxSizing:`border-box`, 
                                        textAlign:`${state.isPhone ? content.mobile.align : content.elementText.align}`,
                                        resize:'none'
                                    }}
                                    placeholder="여기를 클릭하여 서비스 및 제품의 특징을 적어보세요."
                                    spellCheck="false"
                                /> */}
                            </div>
                    }
                    </div>
                }
            </FeatureCard>
        )}
        else{
        }
    })

    return (
        <>
            <motion.div className="template" data-aos={content.animation} data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0" aos-duration="4000" >
                <TitleDesc content={content} titlePlaceholder="특징들의 제목을 적어보세요." descPlaceholder="여기를 클릭하여 서비스 및 제품의 특징을 간단히 적어보세요." />
                <div className="features__container" style={{flexWrap : `${state.isPhone ? 'wrap' : ''}`}}>
                    {returnFeatureCards}
                </div>

            </motion.div>
        </>
    )
}

export default FeaturesSection
