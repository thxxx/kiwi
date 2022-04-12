import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'
import bottom from '../../../tools/img/gift/bottom.webp'
import letter1 from '../../../tools/img/gift/letter1.webp'
import letter2 from '../../../tools/img/gift/letter2.webp'
import box from '../../../tools/img/gift/box.png'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {dbService, stService} from '../../../tools/fbase'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OUT = styled('div')`
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:MapoGoldenPier;
    position:relative;
`
const ASK = styled('div')`
    width:20%;
    text-align:left;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-top:5px;
    height:100%;
`

const PCOLOR = '#FD6F96'
const NCOLOR = '#FD6F9655'

const GiftOptions = [
    {
        name:<span>카카오톡 코드로 선물하기</span>,
        type:1,
    },
    {
        name:<span>기프티콘 이미지로 선물하기</span>,
        type:2,
    },
]

const LetterBackOptions = [
    {
        src:letter1,
        type:1,
    },
    {
        src:letter2,
        type:2,
    },
]

const KakaoImageOptions = [
    {
        src:letter1,
        type:1,
    },
    {
        src:letter2,
        type:2,
    },
]

const Emotions = [
    '사랑', '축하', '응원', '감사', '격려', '신뢰', '기쁨', '행복', '존경', '그리움', '설렘'
]

const colorList = [
    '#FF8C32',
    '#4D77FF',
    '#5EE6EB',
    '#65C18C',
    '#FFF89A',
    '#6A5495',
    '#FF6363',
    '#D9D7F1',
]


function GiftMake() {
    const [giftType, setGiftType] = useState(0);
    const [emotions, setEmotions] = useState([]);
    const [letter, setLetter] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [letterType, setLetterType] = useState(1);
    const [shareType, setShareType] = useState(1);
    const [giftycon, setGiftycon] = useState('');
    const [giftCode, setGiftCode] = useState('');
    const [randomId, setRandomId] = useState('');
    const photoInput = useRef();
    const inputClick = () => {
        photoInput.current.click();
    };

    useEffect(() => {
        console.log(Math.random().toString(36).substr(2,11))
        setRandomId(Math.random().toString(36).substr(2,11));
    },[])
    
    const onClickEmotion = item => {
        if(emotions.includes(item)){
            setEmotions(emotions.filter(doc => doc !== item))
        }else{
            setEmotions(emotions.concat([item]))
        }
    }

    const seeAdvance = async () => {

        const fds = await dbService
            .collection('gift')
            .where('id', '==', randomId)
            .get();
        let fd = fds.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });

        let attachmentURL
    
        if(giftType === 2){
            const attachmentRef = stService.ref().child(`gift`)
            const response = await attachmentRef.putString(giftycon, "data_url");
            attachmentURL = await response.ref.getDownloadURL();
        }else{
            attachmentURL=''
        }

        const body = {
            from,
            to,
            letterType,
            giftycon:attachmentURL,
            emotions,
            letter,
            giftCode,
            id:randomId,
        }

        if(fd.length === 0){
            await dbService.collection('gift').add(body).then(() => {
                window.open(
                    `http://localhost:3000/giftbox/${randomId}`,
                    '_blank'
                )
            })
        }else{
            await dbService.collection(`gift/${fd[0].id}`).update(body).then(() => {
                window.open(
                    `http://localhost:3000/giftbox/${randomId}`,
                    '_blank'
                )
            })
        }
    }

    return (
        <OUT>
        <div className="gift__container">
            <div className="gift__landing" style={{backgroundColor:'#fff3c6'}}>
                <div style={{textAlign:'left', width:'90%', margin:'30px 0px', lineHeight:'1.3rem'}}>
                    <br/>
                    <span className="gift-font-gradient">
                        선물하기
                    </span>
                    <br/>
                    <br/>
                    우리, 온라인으로 선물을 준다고 해서<br/>
                    상대방을 생각하는 마음이 덜한건 아니잖아요?<br/>
                    내가 너를 얼마나 <strong>특별하게 생각</strong>하는지,<br/>
                    선물 <strong>포장을 통해서 표현</strong>해봐요.
                </div>
                <div className="gift__one-question">
                    <ASK>
                        From.
                    </ASK>
                    <input value={from} onChange={e => setFrom(e.currentTarget.value)} className="gift__input" placeholder="보내시는 분의 이름을 적어주세요." />
                    <span style={{padding:'5px', fontSize:'0.8em'}}>님</span>
                </div>
                <div className="gift__one-question">
                    <ASK>
                        To.
                    </ASK>
                    <input value={to} onChange={e => setTo(e.currentTarget.value)} className="gift__input" placeholder="받으실 분의 이름을 적어주세요." />
                    <span style={{padding:'5px', fontSize:'0.8em'}}>님</span>
                </div>
                <div className="gift__one-question" style={{flexDirection:'column'}}>
                    <div className="gift__q">
                        🎁 전달할 선물
                    </div>
                    <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                        {
                            GiftOptions.map((item, index) => {
                                let picked = giftType === item.type

                                return(
                                    <button className="gift__radio" onClick={() => {setGiftType(item.type)}} 
                                        style={{color:`${picked ? 'white' : 'white'}`, width:'50%', backgroundColor:`${picked ? '#b6910c' : '#ffcd17'}`}}>
                                        {item.name}
                                    </button>
                                )
                            })
                        }
                    </div>
                    <div style={{margin:'10px 0px', width:'100%'}}>
                    {
                        giftType === 1 ? 
                        <input value={giftCode} onChange={e => setGiftCode(e.currentTarget.value)} placeholder="카카오톡 선물 코드를 입력해주세요." style={{width:'90%'}} />
                            :
                        <div className="centero" style={{width:'100%', flexDirection:'column'}}>
                            <div className="gift-fab" onClick={inputClick} style={{backgroundColor:PCOLOR, color:'white', fontSize:'0.8em', width:'80%'}}>
                                {
                                    giftycon ?<>기프티콘 이미지 수정하기</> : <>기프티콘 이미지 넣기</>
                                }
                            </div>
                            <input
                                type="file" 
                                accept="image/*" 
                                id="file" 
                                onChange={ e => {
                                    const {target:{files},} = e;
                                    const oneFile = files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = (finishedEvent) => { // 로딩이 끝날 때 실행한다는 뜻.
                                        const {currentTarget:{result}} = finishedEvent;
                                        setGiftycon(result);
                                    }
                                    if(oneFile){
                                        reader.readAsDataURL(oneFile);
                                    }
                                } }
                                ref={photoInput}
                                style={{display: 'none', cursor: 'pointer', objectFit:'cover'}}
                            />
                            <img src={giftycon} style={{width:'100%', margin:'10px 0px'}} />
                        </div>
                    }
                    </div>
                </div>
                <div className="gift__one-question" style={{flexDirection:'column'}}>
                    <div className="gift__q">
                        🎨 편지지 디자인
                    </div>
                    {/* <div style={{display:'flex', flexDirection:'row', width:'100%', boxSizing:'border-box', flexWrap:'wrap'}}>
                        {
                            LetterBackOptions.map((item, index) => {
                                let picked = letterType === item.type

                                return(
                                    <div className="gift-img__radio" onClick={() => {setLetterType(item.type)}} 
                                        style={{
                                            backgroundImage:`url(${item.src})`,
                                            border:`1px solid ${picked ? PCOLOR : 'rgba(0,0,0,0)'}`, 
                                        }}
                                    />
                                )
                            })
                        }
                    </div> */}
                </div>
                <div className="gift__one-question" style={{flexDirection:'column'}}>
                    <div className="gift__q">
                        ✍️ 편지 작성
                    </div>
                    <div className="centera" style={{position:'relative'}}>
                        <div className="gift__letter centero" style={{backgroundImage:`url(${LetterBackOptions[letterType - 1].src})`}}>
                            <div style={{backgroundColor:'rgba(255,255,255,0.3)', width:'100%', height:'100%', position:'absolute', zIndex:'3'}}></div>
                            <TextareaAutosize placeholder="편지를 작성해주세요." className="gift__letter-input" value={letter} onChange={e => {setLetter(e.currentTarget.value)}} />
                        </div>
                    </div>
                </div>
                <div className="gift__one-question" style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div className="gift__q">
                        😁 함께 보내고 싶은 감정
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row', width:'100%', boxSizing:'border-box', flexWrap:'wrap'}}>
                        {
                            Emotions.map((item, index) => {
                                let picked = emotions.includes(item)

                                return(
                                    <button className="gift__radio" onClick={() => {onClickEmotion(item)}} 
                                        style={{
                                            color:`${picked ? 'white' : PCOLOR}`, 
                                            backgroundColor:`${picked ? PCOLOR : NCOLOR}`,
                                            // border:`1px solid ${picked ? '#FD6F96' : 'rgba(0,0,0,0.7)'}`
                                        }}>
                                        {item}
                                    </button>
                                )
                            })
                        }
                    </div>
                    {/* <div style={{background:'rgba(255,255,255,0.6)', borderRadius:'6px', margin:'20px 0px', padding:'5px'}}> */}
                    <div style={{background:`linear-gradient(90deg, ${colorList[0]} 0%, ${colorList[2]} 100%)`, borderRadius:'6px', margin:'20px 0px', padding:'5px'}}>
                        <img src={box} style={{width:'60%', margin:'10px 0px'}} />
                        <div style={{margin:'10px 0px', fontSize:'0.9em'}}>
                            { to }님에게
                            { emotions.map((it, id) => {
                                    if(id === emotions.length - 1 )
                                        return(<span style={{color:PCOLOR, fontWeight:'700', margin:'0px 3px'}}>{it}</span>)
                                    else
                                        return(<span style={{color:PCOLOR, fontWeight:'700', margin:'0px 3px'}}>{it},</span>)
                                })
                            }
                            을(를) 함께 담아서 보내요.
                        </div>
                    </div>
                </div>
                <div className="gift__one-question" style={{flexDirection:'column'}}>
                    <div className="gift__q">
                        {from}님은 {to}님을 어떻게 생각하나요?
                    </div>
                    <div>
                        <input className="gift__input" style={{width:'10vw'}} />&nbsp; 같은 사람
                    </div>
                </div>
                <div className="gift__one-question" style={{flexDirection:'column'}}>
                    <div className="gift__q">
                        💬 카카오톡 공유 시 이미지 고르기
                    </div>
                </div>
                <div className="gift-fab__container">
                    <button className="gift-fab gsecondary" onClick={() => seeAdvance()}>
                        선물상자 미리보기
                    </button>
                    <Link to={{
                        pathname:`/giftend`,
                        state:{
                            id:randomId,
                            title:`${from}님이 ${to}님에게 보내는 선물입니다.`
                        }}} className="gift-fab gprimary">
                        저장 후 보내기
                    </Link>
                </div>
            </div>
            <img src={bottom} style={{width:'100%', position:'absolute', top:'0px', transform:'rotate(180deg)'}} />
        </div>
        </OUT>
    )
}

export default GiftMake
