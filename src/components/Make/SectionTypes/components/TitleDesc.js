import React, {useContext, useEffect, useState, useRef} from 'react'
import { MyContext } from '../../../../pages/Make/MakePageV2'
import {produce} from 'immer'
import './TitleDesc.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Editor from '../../tools/Editor'

function TitleDesc({content, titlePlaceholder, descPlaceholder}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    return (
        <div className="title-desc__container">
            {
                content.title.use &&
                <div style={{width:'100%'}}>
                    <div 
                        className={state.isPhone ? content.mobile.align === 'start' ? 'alignLeft' : 'alignCenter' : content.title.align === 'start' ? 'alignLeft' : 'alignCenter'}
                        style={{
                            fontFamily:`${state.setting.font}`, 
                            color:`${content.title.color}`, 
                            fontSize:`${content.title.size/19}em`, 
                        }}
                        onClick={() => {
                            action.setCategory(0);
                            action.setFocus('title');
                        }}>
                        <Editor 
                            placeholder={titlePlaceholder}
                            data={content.title.text}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                action.setContents(produce(state.contents, draft => {
                                    if(draft[state.secNum]){
                                        draft[state.secNum].title.text = data;
                                    }
                                }))
                            }}
                        />
                    </div>
                    {/* <TextareaAutosize 
                        onClick={() => {
                            action.setCategory(0);
                            action.setFocus('title');
                        }}
                        placeholder={titlePlaceholder}
                        className="text-input" 
                        value={content.title.text} 
                        onChange={e => action.setContents(produce(state.contents, draft => {
                            draft[state.secNum].title.text = e.currentTarget.value;
                        }))}
                        style={{
                            fontFamily:`${state.setting.font}`, 
                            color:`${content.title.color}`, 
                            fontSize:`${content.title.size/19}em`, 
                            textAlign:`${state.isPhone ? content.mobile.align : content.title.align}`,
                            resize:'none'
                        }}
                        spellCheck="false"
                    /> */}
                </div>
            }
            {
                content.desc.use &&
                <div style={{width:'100%', marginTop:'10px'}}>
                    <div 
                        className={state.isPhone ? content.mobile.align === 'start' ? 'alignLeft' : 'alignCenter' : content.title.align === 'start' ? 'alignLeft' : 'alignCenter'}
                        style={{
                            fontFamily:`${state.setting.smallFont}`, 
                            color:`${content.desc.color}`, 
                            fontSize:`${content.desc.size/19}em`, 
                        }}
                        onClick={() => {
                            action.setCategory(0);
                            action.setFocus('desc');
                        }}>
                        <Editor 
                            placeholder={descPlaceholder}
                            className="text-input"
                            data={content.desc.text}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                action.setContents(produce(state.contents, draft => {
                                    if(draft[state.secNum]){
                                        draft[state.secNum].desc.text = data;
                                    }
                                }))
                            }}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default TitleDesc
