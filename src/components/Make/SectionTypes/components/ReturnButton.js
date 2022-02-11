import React, { useContext, useState, useRef } from 'react'
import { MyContext } from '../../../../pages/Make/MakePageV2'
import AutosizeInput from 'react-input-autosize';
import appstorebutton from '../../../../tools/img/appstorebutton.png'
import playstorebutton from '../../../../tools/img/playstorebutton.png'
import produce from 'immer';

function ReturnButton({content}){
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    const CustomCtaButton = () => {return (<div className="cta-button-made" style={{
        marginTop:`${content.ctaApplyInputs.length > 1 ? '8px' : '0px'}`,
        borderRadius:`${state.setting.cta.borderRadius}px`,
        backgroundColor:`${state.setting.cta.backgroundColor}`,
        color:`${state.setting.cta.color}`,
        boxShadow:`${state.setting.cta.shadow ? '1px 2px 4px rgba(0,0,0,0.2)' : 'none'}`,
        border:`${state.setting.cta.border ? `1px solid ${state.setting.cta.borderColor}` : 'none'}`
    }}>
        <AutosizeInput className="text-input-flex ti" value={ content.button.ctaText} onChange={(e) => action.setContents(produce(state.contents, draft => {
            draft[state.secNum].button.ctaText = e.currentTarget.value;
        }))} inputStyle={{fontFamily:`${state.setting.smallFont}`, borderRadius:`${state.setting.cta.borderRadius}px`, backgroundColor:`${state.setting.cta.backgroundColor}`,}}/>
    </div>)}

    const CustomGhostButton = () => {return (<div className="cta-button-made" style={{
        marginTop:`${content.ctaApplyInputs.length > 1 ? '8px' : '0px'}`,
        marginLeft:`${ content.button.ctaUse ? '5px' : '0px'}`,
        borderRadius:`${state.setting.ghost.borderRadius}px`,
        backgroundColor:`${state.setting.ghost.backgroundColor}`,
        color:`${state.setting.ghost.color}`,
        boxShadow:`${state.setting.ghost.shadow ? '1px 2px 4px rgba(0,0,0,0.2)' : 'none'}`,
        border:`${state.setting.ghost.border ? `1px solid ${state.setting.ghost.borderColor}` : 'none'}`
    }} onClick={() => {}}>
        <AutosizeInput className="text-input-flex ti" value={ content.button.ghostText } onChange={(e) => action.setContents(produce(state.contents, draft => {
            draft[state.secNum].button.ghostText = e.currentTarget.value;
        }))} inputStyle={{fontFamily:`${state.setting.smallFont}`, borderRadius:`${state.setting.ghost.borderRadius}px`,  backgroundColor:`${state.setting.ghost.backgroundColor}`}}/>
    </div>)}

    const returnCtaInputs = () => {
        return(
            <div className="centera" style={{flexDirection:`${content.ctaApplyInputs.length > 1 ? 'column' : 'row'}`}}>
                {content.ctaApplyInputs.map((item, index) => {
                    return(
                        <input className="input-placeholder" placeholder={item} key={index} style={{marginTop:`${content.ctaApplyInputs.length > 1 ? '8px' : '0px'}`}}/>
                    )
                })}
                {CustomCtaButton()}
            </div>
        )
    }

    const returnGhostInputs = () => {
        return(
            <div className="centera" style={{flexDirection:`${content.ghostApplyInputs.length > 1 ? 'column' : 'row'}`}}>
                {content.ghostApplyInputs.map((item, index) => {
                    return(
                        <input className="input-placeholder" placeholder={item} key={index} style={{marginTop:`${content.ghostApplyInputs.length > 1 ? '8px' : '0px'}`}}/>
                    )
                })}
                {CustomGhostButton()}
            </div>
        )
    }

    if(content.button.use){
        // ctaOption === 'link' => 버튼 클릭 시 링크 이동
        // ctaOption === 'apply' => 신청

        {/* <CustomCtaButton className="action-button" onClick={() => {window.open(`${content.button.ctaLink}`)}}> */}
        return(
            <div style={{width:'100%'}}>
                <div className="button__container" style={{justifyContent:`${content.button.align}`}}>
                    {
                        content.button.ctaUse && 
                            ( content.button.ctaOption === 'link' ? CustomCtaButton() : returnCtaInputs() )
                    }
                    {/* onClick={() => {window.open(`${content.button.ghostLink}`)}} */}
                    {
                        content.button.ghostUse && 
                            ( content.button.ghostOption === 'link' ? CustomGhostButton() : returnGhostInputs() )
                    }
                </div>
                {
                    content.appButton.use && 
                    <div className="button__container" style={{justifyContent:`${content.button.align}`}}>
                        {
                            content.appButton.google.length > 0 && 
                                <img src={playstorebutton} className="store-button" />
                        }
                        {/* onClick={() => {window.open(`${content.button.ghostLink}`)}} */}
                        {
                            content.appButton.apple.length > 0 && 
                                <img src={appstorebutton} className="store-button" />
                        }
                    </div>
                }
            </div>
        )
    }else{
        return(<></>)
    }
}

export default ReturnButton