import React, {useState,useContext} from 'react'
import DetailSection from './SectionTypes/DetailSection'
import HeroSection from './SectionTypes/HeroSection'
import ReviewSection from './SectionTypes/ReviewSection'
import FeaturesSection from './SectionTypes/FeaturesSection'
import CtaSection from './SectionTypes/CtaSection'
import ApplySection from './SectionTypes/ApplySection'
import AppDownloadSection from './SectionTypes/AppDownloadSection'
import QnaSection from './SectionTypes/QnaSection'
import GallerySection from './SectionTypes/GallerySection'
import TextSection from './SectionTypes/TextSection'
import MockupSection from './SectionTypes/MockupSection'
import VideoSection from './SectionTypes/VideoSection'

import {animations} from './tools/animations'
import './NewSection.css'
import { MyContext } from '../../pages/Make/MakePageV2'
import { motion } from 'framer-motion'
import {Delete, Options} from '@styled-icons/fluentui-system-filled'
import produce from 'immer'

import styled from "styled-components";

const CustomCtaButton = styled.button`
padding:8px 15px;
`;

const CustomGhostButton = styled.button`        
`;


// border-radius:${state.setting.cta.borderRadius}px;
// background-color:${state.setting.cta.backgroundColor};
// color:${state.setting.cta.color};
// box-shadow:${state.setting.cta.shadow ? '2px 2px 5px rgba(0,0,0,0.3)' : 'none'};
// border:${state.setting.cta.border ? `1px solid ${state.setting.cta.borderColor}` : 'none'};

// border-radius:${state.setting.ghost.borderRadius}px;
// background-color:${state.setting.ghost.backgroundColor};
// color:${state.setting.ghost.color};
// box-shadow:${state.setting.cta.shadow ? '2px 2px 5px rgba(0,0,0,0.3)' : 'none'};
// border:${state.setting.ghost.border ? `1px solid ${state.setting.ghost.borderColor}` : 'none'};

function NewSection({setting, content, index, contents, setContents, full}) {
    const [isHover, setIsHover] = useState('none');
    const {state, action} = useContext(MyContext)

    const setThisSection = () => {
        action.setSecNum(index);
        if(index !== state.secNum){
            action.setCategory(0);
        }
    }

    const returnType = () => {
        switch(content.sectionTypeName){
            case 'DetailSection':
                return (
                    <DetailSection content={content} CustomCtaButton={CustomCtaButton} CustomGhostButton={CustomGhostButton} setting={setting}/>
                )

            case 'HeroSection':
                return (
                    <HeroSection content={content} setting={setting}/>
                )

            case 'ReviewSection':
                return (
                    <ReviewSection content={content} setting={setting}/>
                )

            case 'FeaturesSection':
                return (
                    <FeaturesSection content={content}  setting={setting}/>
                )

            case 'CtaSection':
                return (
                    <CtaSection content={content} type="cta" setting={setting}/>
                )

            case 'ApplySection' :
                return(
                    <CtaSection content={content} type="apply" setting={setting}/>
                )

            case 'AppDownloadSection' :
                return(
                    <CtaSection content={content} type="appDownload" setting={setting}/>
                )

            case 'QnaSection' :
                return(
                    <QnaSection content={content} setting={setting}/>
                )

            case 'GallerySection' :
                return(
                    <GallerySection content={content} setting={setting}/>
                )

            case 'TextSection' :
                return(
                    <TextSection content={content} setting={setting}/>
                )

            case 'MockupSection' :
                return(
                    <MockupSection Section content={content} setting={setting}/>
                )

            case 'VideoSection' :
                return(
                    <VideoSection content={content} setting={setting}/>
                )

            default:
                return (
                    <div>
                        기본
                    </div>
                )
        }
    }

    return(
        <div style={{fontSize:'28px'}} className="new-section" onMouseEnter={() => setIsHover('flex')} onMouseLeave={() => setIsHover('none')}>
            {!full && <div className="for-section-hover" style={{backgroundColor: `${isHover === 'flex' ? '#6C63FF' : 'rgba(0,0,0,0)'}`}}>

            </div>}
            <div className="section__container" 
                style={{backgroundImage:`${ content.backgroundType === 'image' ? `url(${content.backgroundImage.attachment})` : ''}`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} 
                    onClick={() => setThisSection()}>
                {
                    content.backgroundType === 'color' ?
                    <div style={{backgroundColor:`${content.backgroundColor}`, width:'100%', height:'100%', zIndex:2, position:'absolute'}}>
                    </div>
                    :
                    (content.backgroundImage.overlay && content.backgroundType === 'image') &&
                    <div style={{backgroundColor:`${content.backgroundColor}`, width:'100%', height:'100%', zIndex:2, position:'absolute'}}>
                    </div>
                }
                {
                    content.box.use && 
                    <div className="section__box" style={{padding:`0px ${full ? 'calc(11vw)' : '0px'}`}}>
                        <div style={{backgroundColor:`${content.box.backgroundColor}`, borderRadius:`${content.box.borderRadius}px`, width:'100%', height:'100%'}}>
                        </div>
                    </div>
                }
                <div className="section__container-inner"
                    style={{padding:`${content.padding.top}vh ${full ? 'calc(14vw + 30px)' : '30px'} ${content.padding.bottom}vh ${full ? 'calc(14vw + 30px)' : '30px'} `}} >
                    {/* 실제 섹션이 보여지는건 여기밖에 없음,, */}
                    {returnType()}
                </div>
            </div>
        </div>
    )
}

{/* 
    <div className="section-selection-container" style={{display:`${isHover}`}}>
{ state.contents.length > 0 && 
    <span className="section-option" onClick={() => deleteThisSection()}>
        <Delete size="20" />
    </span> }
<span className="section-option" onClick={() => { action.setSecNum(index); action.setAddingSectionAt(1000); }}>
    <Options size="20" />
</span>
{ index !== 0 && 
    <span className="section-option" onClick={() => moveUp()}>
        <ArrowUpShort size="20" />
    </span> }
{ index !== state.contents.length-1 && 
    <span className="section-option" onClick={() => moveDown()}>
        <ArrowDownShort size="20" />
    </span> }
</div> 
*/}

export default NewSection
