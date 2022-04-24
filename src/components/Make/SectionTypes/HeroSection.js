import React, { useContext } from 'react'
import { Link } from 'react-router-dom' 
import produce from 'immer';
import { motion } from 'framer-motion';

import { MyContext } from '../../../pages/Make/MakePageV2'
import TitleDesc from './components/TitleDesc'
import AutosizeInput from 'react-input-autosize';
import ImageOrSlide from './components/ImageOrSlide'
import ReturnButton from './components/ReturnButton'
import AnimationDiv from './components/AnimationDiv'
import appstorebutton from '../../../tools/img/appstorebutton.png'
import playstorebutton from '../../../tools/img/playstorebutton.png'

import './DetailSection.css'
import './Default.css'
import './HeroSection.css'

function HeroSection({content, setting, Editor}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.
<<<<<<< HEAD

    const returnLayout = {
        flexDirection:`${
            state.isPhone ? 
            content.mobile.layout === 3 ? 'column' : 'column-reverse'
            :
            content.layout === 1 ? 'row' : content.layout === 2 ? 'row-reverse' : content.layout === 3 ? 'column' : 'column-reverse'
        }`,
=======
    const imgRef = useRef(null)
    const [imageShow, setImageShow] = useState(null);
    const [videoShow, setVideoShow] = useState(null);
    const [align, setAlign] = useState('center');
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // 제목
    const changeText = ( data ) => {
        action.setContents(produce(state.contents, draft => {
        draft[state.secNum].title.text= data}))
    }
    
    // 본문
    const changeDesc = ( data ) => {
        action.setContents(produce(state.contents, draft => {
        draft[state.secNum].desc.text= data}))
    }

    // 템플릿 1 텍스트의 경우
    const changeButtonText = ( data ) => {
        let newContents = state.contents.map((item, index) => index === state.secNum ? {...item, button: {...item.button, title : data}} : item)
        action.setContents(newContents);
    }

    // 템플릿 2 이미지의 경우에는
    const onChangeImage = e => {
        let newContents = JSON.parse(JSON.stringify(state.contents))
        const {target:{files},} = e;
        const oneFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => { // 로딩이 끝날 때 실행한다는 뜻.
            const {currentTarget:{result}} = finishedEvent;
            // newContents = state.contents.map((item, index) => index === state.secNum ? {...item, image: {...item.image, attachment : result}} : item)
            newContents[state.secNum].image.attachment = result;
        }
        reader.readAsDataURL(oneFile);
        action.setContents(newContents);
    }

    const ImageOrSlide = () => {
        if(content.video.youtube && !content.video.use && !content.image.slide && !content.image.oneImg)
        return(
            <iframe src={`${content.video.link}`} width='500px' height={`${content.image.size}px`} frameborder="0" allow='autoplay'/>
        )
        if(!content.video.youtube && content.video.use && !content.image.slide && !content.image.oneImg)
        return(
            <div>
                <video 
                className="video"
                src={`${content.video.file}`} 
                type="video/mp4" 
                autoPlay
                muted
                loop
                style={{borderRadius:`${content.image.border}%`, width:`${content.image.size}px`}}
                >
                </video>
            </div>
        )
        if(!content.video.youtube && !content.video.use && content.image.slide && !content.image.oneImg)
        return(
            <div className="slide-box">
                <ImageCarousel content={content}/>
            </div>
        )
        if(!content.video.youtube && !content.video.use && !content.image.slide && content.image.oneImg)
        return (
            <div >
            {/* <Popover
                id={Boolean(imageShow) ? 'simple-popover' : undefined} // 수정
                open={Boolean(imageShow)} // 수정
                anchorEl={imageShow} // 수정
                onClose={() => setImageShow(null)} // 수정
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}>
                <div className="pop-balloon" style={{width:'100px'}}>
                    <span className="balloon-item">
                        <ImageAdd color="black" width={30} />
                        { imgRef.current && 
                            <input className="image-input" type="file" accept="image/*" id="file"
                                onChange={ e => onChangeImage(e) } style={{width:'20px', height:'20px'}}/> }
                    </span>
                    <span className="balloon-item" onClick={() => {}}>
                        동영상
                    </span>
                </div>
            </Popover> */}
            {content.image.attachment === '' ?  
                <img ref={imgRef} src={playstorebutton} className="image" onClick={(e) =>{ setImageShow(e.currentTarget)}} style={{borderRadius:`${content.image.border}%`, width:`${content.image.size}px`}} />
                : 
                <img 
                ref={imgRef} 
                src={`${content.image.attachment}`} 
                className="image" 
                onClick={(e) => setImageShow(e.currentTarget)} 
                style={{borderRadius:`${content.image.border}%`, width:`${content.image.size}px`, boxShadow: `${content.image.shadowValue}`}}
                />
            }
            </div>
    )
    }

    const returnButton = () => {
        return(
            <>            
            <div className="button__container" style={{border:`${ anchorEl !== null ? '1px dashed rgba(0,0,0,0.4)' : '' }`}}>
                {
                    content.button.first && 
                        <>         
                        {content.button.link.includes("play.google.com/store") ? <img src={playstorebutton} />
                        : 
                        content.button.link.includes("apps.apple.com/") ? <img src={appstorebutton} />
                        : 
                        <button className="action-button" style={{backgroundColor:`${content.button.backgroundColor}`, margin:`${content.button.align}`}}>
                            버튼
                        </button>
                        }
                        </>
                }
            </div>
            </>
        )
>>>>>>> d40f1f954 (Test second..)
    }

    return (
        <motion.div 
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0" data-aos={content.animation} aos-duration="4000"
        style={{ width:'100%', height:'100%'}}>
            <AnimationDiv setting={setting} content={content} returnLayout={returnLayout}>
                <div className="text__container" style={{marginTop:`${ !state.isPhone && content.layout === 4 ? '20px'  : state.isPhone && content.mobile.layout === 4 ? '10px' : '0px'}` }}>
                    <TitleDesc content={content} titlePlaceholder="서비스 한 줄 소개를 적어보세요." descPlaceholder="여기를 클릭하여 서비스 및 상품에 대한 핵심 설명을 적어보세요." />
                    <ReturnButton content={content} />
                </div>
                <div className="image__container">
                    <ImageOrSlide content={content} />
                </div>
            </AnimationDiv>
        </motion.div>
    )
}

export default HeroSection
