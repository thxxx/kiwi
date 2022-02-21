import React, {useState, useRef} from 'react'
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
import { motion } from 'framer-motion'
import {Delete, Options} from '@styled-icons/fluentui-system-filled'
import produce from 'immer'

import styled from "styled-components";

function NewSection({setting, content, index, secNum, setSecNum, isPhone, setCategory, full}) {
    const [isHover, setIsHover] = useState('none');

    const setThisSection = () => {
        setSecNum(index);
        if(index !== secNum){
            setCategory(0);
        }
    }

    const returnType = () => {
        switch(content.sectionTypeName){
            case 'DetailSection':
                return (
                    <DetailSection content={content} setting={setting}/>
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
                    <ApplySection content={content} type="apply" setting={setting}/>
                )

            case 'AppDownloadSection' :
                return(
                    <AppDownloadSection content={content} type="appDownload" setting={setting}/>
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
        <div>
        <div style={{fontSize:`${isPhone ? '22px' : '28px'}`}} className="new-section" onMouseEnter={() => setIsHover('flex')} onMouseLeave={() => setIsHover('none')}>
            {!full && <div className="for-section-hover" style={{backgroundColor: `${isHover === 'flex' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0)'}`}}>

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
                    <div className="section__box" style={{padding:`${content.box.height}vh ${full ? 'calc(11vw)' : '0vh'}`}}>
                        <div style={{backgroundColor:`${content.box.backgroundColor}`, borderRadius:`${content.box.borderRadius}px`, width:'100%', height: '100%'}}>
                        </div>
                    </div>
                }
                <div className="section__container-inner"
                    style={{padding:`${
                        isPhone ? content.padding.top/2.5 : content.padding.top}vh 
                        ${full ? 'calc(14vw + 30px)' : `${isPhone ? '15px' : '30px'}`} 
                        ${isPhone ? content.padding.top/2.5 : content.padding.bottom}vh 
                        ${full ? 'calc(14vw + 30px)' : `${isPhone ? '15px' : '30px'}`} `}} >
                    {/* 실제 섹션이 보여지는건 여기밖에 없음,, */}
                    {returnType()}
                </div>
            </div>
        </div>
        </div>
    )
}

export default NewSection
