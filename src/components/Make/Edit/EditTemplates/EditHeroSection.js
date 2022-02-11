import React, {useState, useContext} from 'react'
import { MyContext } from '../../../../pages/Make/MakePageV2'
import EditDesign from './tools/EditDesign'
import RadioCustom from '../tools/Custom/RadioCustom'
import ElementsTable from './tools/ElementsTable'
import produce from 'immer';
import {CustomSwitch} from '../tools/Custom/OnOffCustom'
import OpenCloseCustom from '../tools/Custom/OpenCloseCustom'
import CheckBoxContainer from '../tools/Custom/CheckBoxCustom'
import InputCustom from '../tools/Custom/InputCustom'
import ApplyInputCustom from '../tools/Custom/ApplyInputCustom'

import Layout from './tools/Layout'
import Contents from './tools/Contents'
import AddGhostButton from './tools/AddGhostButton'
import AddCtaButton from './tools/AddCtaButton'
import AddAppButton from './tools/AddAppButton'

const alignOptions = [
    {label:'왼쪽', value: '0'},
    {label:'중앙', value: '0 auto'}
]

const buttonAlignOptions = [
    {label:'왼쪽', value: 'start'},
    {label:'중앙', value: 'center'}
]

const buttonOptions = [
    {label: '링크 연결', value: 'link'},
    {label: '신청', value: 'apply'},
]

const layoutOptions = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
]

function EditHeroSection({content, category}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    const elements = [
        {
            title: '제목',
            use:content.title.use,
            func:() => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].title.use = !content.title.use;
            }))
        },
        {
            title: '본문',
            use:content.desc.use,
            func:() => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].desc.use = !content.desc.use;
            }))
        },
        {
            title: '콘텐츠',
            use:content.contents.use,
            func:() => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].contents.use = !content.contents.use;
            }))
        },
        {
            title: '버튼',
            use:content.button.ctaUse || content.button.ghostUse,
            func:() => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].button.ctaUse = !content.button.ctaUse;
                draft[state.secNum].button.ghostUse = !content.button.ghostUse;
            }))
        },
        {
            title: '앱 다운로드 버튼',
            use:content.appButton.use,
            func:() => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].appButton.use = !content.appButton.use;
            }))
        },
    ]
    const changeAlignOption = e => {
        action.setContents(produce(state.contents, draft => {
            if (draft[state.secNum].button.align == '0')
                draft[state.secNum].button.align = '0 auto'
            else
                draft[state.secNum].button.align = '0'
        }))
    }

    const changeButtonAlignOption = e => {
        action.setContents(produce(state.contents, draft => {
            draft[state.secNum].button.align = e
        }))
    }

    const changeLayoutOption = e => {
        action.setContents(produce(state.contents, draft => {
            draft[state.secNum].layout = e
        }))
    }

    // 버튼 관련
    const ctaOpen = () => {
        action.setContents(produce(state.contents, draft => {
            draft[state.secNum].button.ctaUse = !content.button.ctaUse}))     
    }

    const changeCtaOption = () => {
        action.setContents(produce(state.contents, draft => {
            if (draft[state.secNum].button.ctaOption == 'link')
                draft[state.secNum].button.ctaOption = 'apply'
            else
                draft[state.secNum].button.ctaOption = 'link'
        }))
    }


    const returnCtaOptions = () => {
        switch(content.button.ctaOption){
            case 'link':
                return(
                    <>
                    <InputCustom placeholder="연결하고 싶은 URL을 선택해주세요" value={content.button.ctaLink} func = {(e) => action.setContents(produce(state.contents, draft => {
                        draft[state.secNum].button.ctaLink = e
                    }))} />
                    <div className="mid-command">입력 후 엔터를 누르세요.</div>
                    </>
                )
            case 'apply':
                return(
                    <>
                    {
                        content.ctaApplyInputs.length >= 1 ?  
                        <ApplyInputCustom disabled /> 
                        :
                        <ApplyInputCustom func={e => action.setContents(produce(state.contents, draft => {
                            draft[state.secNum].ctaApplyInputs.push(e)
                        }))} /> 
                    }
                    
                    { content.ctaApplyInputs.length > 0 && 
                    <>
                        { content.ctaApplyInputs.map((item, index) => {
                                return(
                                    <div key={index}>
                                        <ApplyInputCustom made value={item} func={e => action.setContents(produce(state.contents, draft => {
                                            if(index === 0 ){
                                                draft[state.secNum].ctaApplyInputs.shift()
                                            }else{
                                                draft[state.secNum].ctaApplyInputs.splice(index, index)
                                            }
                                        }))} />
                                    </div>
                                )
                            })
                        } 
                    </> }
                    <div className="mid-command-light"> 최대 5개의 신청 박스만 생성 가능합니다. 
                    </div>
                    </>
                )
            default:
                return(
                    <> </>
                )
        }
    }

    
    const returnTable = () => {
        switch(category){
            case 0:
                // case 0은 디자인 수정
                return(
                    <>
                    <ElementsTable elements={elements} />
                    <Layout content={content} version='main' />
                    <Contents content={content} />
                    <OpenCloseCustom title="버튼">
                        <RadioCustom options={buttonAlignOptions} value={content.button.align} func={e => changeButtonAlignOption(e)} />
                        <AddCtaButton content={content} num={1} />
                        <AddGhostButton content={content} num={1} />
                    </OpenCloseCustom>
                    <AddAppButton content={content} />
                    {/* <div className="left">
                        <div className="content__name">
                                    애니메이션
                        </div>
                        <div style={{paddingLeft:'7%'}}>
                            <CustomSwitch value={content.animation.use} 
                                onChange={ e => action.setContents(produce(state.contents, draft => {
                                    draft[state.secNum].animation.use = !content.animation.use
                                }))}/>
                        </div>
                    </div> */}
                    </>
                )

            case 1:
                // case 1은 템플릿 변경
                return(
                    <>
                        <EditDesign content={content} />
                    </>
                )

            default:
                <></>
        }
    }

    return(
        <>
            {returnTable()}
        </>
    )
}

export default EditHeroSection
