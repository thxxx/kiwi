import React, {useState, useContext} from 'react'
import {UserContext} from '../Router'
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { Close } from '@styled-icons/evaicons-solid';
import './FeedbackModal.css';
import {dbService} from './fbase'

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;
`;
const style = {
    width: 800,
    height: 620,
    bgcolor: 'white',
    // boxShadow: '18px 18px 36px rgba(0, 0, 0, 0.15), inset 6px 4px 16px rgba(108, 99, 255, 0.1), inset -12px -8px 16px rgba(108, 99, 255, 0.25)',
    borderRadius:2,
    p: 2,
    px: 4,
    pb: 3,
  };

function FeedbackModal({open, setOpen, deploy}) {
    const {state, action} = useContext(UserContext) //ContextAPI로 state와 action을 넘겨받는다.

    const [quest, goQuest] = useState(false);
    const [page, setPage] = useState(1);
    const [complete, setComplete] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [inputText, setInputText] = useState('');
    const [job, setJob] = useState('');
    const [age, setAge] = useState('');

    const [path, setPath] = useState('');
    const [pathEtc, setPathEtc] = useState('');
    const [difficul, setDifficul] = useState('');
    const [inconv, setInconv] = useState('');
    const [inconvEtc, setInconvEtc] = useState('');
    const [satisfy, setSatisfy] = useState('');
    const [satisfyEtc, setSatisfyEtc] = useState('');
    const [time, setTime] = useState('');
    const [func, setFunc] = useState('');
    const [comment, setComment] = useState('');
    const [recom, setRecom] = useState('');

    const saveFeedback = async () => {
        // 파이어베이스에 피드백기록
        await dbService.collection('feedback').add({
            funnel: path,
            funnelEtc: pathEtc,
            difficulty: difficul,
            inconvenience: inconv,
            inconvenienceEtc: inconvEtc,
            satisfaction: satisfy,
            satisfactionEtc: satisfyEtc,
            working_time: time,
            function: func,
            comment: comment,
            job:job,
            age:age,
            recommendation: recom,
            created:Date.now(),
            user : state.userObj.email
        })
        localStorage.setItem('feedback',true);
    }

    const toPrev = () => {
        if(page>1)
            setPage(page-1)
        else
            return
    }

    const toNext = () => {
        if(page<8 && clicked)
           {
               setPage(page+1);
               setClicked(false);
               setInputText('');
           }
        else {
            alert('답변해주세요!')
        }
    }

    const toComplete = () => {
        if(clicked)
        {
            setComplete(true)
            goQuest(false)
            setClicked(false)
            saveFeedback()
        }
        else {
            alert('답변해주세요!')
        }
    }

    const setClear = () => {
        setOpen(false);
        setClicked(false);
        goQuest(false);
        setPage(1);
    }

    const returnQuestions = () => {
        switch(page){
            case 1: return(
                <>
                <div className="big-title question">
                    어떤 경로를 통해 Surfee를 알게 되셨나요?
                </div>
                <div className="column-ans">
                    <div className="round-ans-button" style={{background: `${path === 'kakao' ? `var(--main-color)`: 'white'}`, color: `${path === 'kakao' ? 'white': `var(--main-color)`}`}} onClick={() => {setPath('kakao'); setClicked(true);}}>
                        카카오톡 오픈채팅방
                    </div>
                    <div className="round-ans-button" style={{background: `${path === 'disquiet' ? `var(--main-color)`: 'white'}`, color: `${path === 'disquiet' ? 'white': `var(--main-color)`}`}} onClick={() => {setPath('disquiet'); setClicked(true);}}>
                        SNS 광고
                    </div>
                    <div className="round-ans-button" style={{background: `${path === '지인 추천' ? `var(--main-color)`: 'white'}`, color: `${path === '지인 추천' ? 'white': `var(--main-color)`}`}} onClick={() => {setPath('지인 추천'); setClicked(true);}}>
                        지인 추천
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
                        <div className="round-ans-button" style={{background: `${path === '기타' ? `var(--main-color)`: 'white'}`, color: `${path === '기타' ? 'white': `var(--main-color)`}`}} onClick={() => {setPath('기타'); setClicked(true);}}>
                            기타
                        </div>
                        {
                            path === '기타' && 
                            <input className="text-modal-input inputbox" value={pathEtc} onChange={e => setPathEtc(e.currentTarget.value)} style={{width:'300px'}}/>
                        }
                    </div>
                </div>
                <div className="prev-next-fbuttons" style={{justifyContent:'end'}}>
                    <div className="prev-next-fbutton" style={{width:'100%'}} onClick={toNext}>다음</div>
                </div>
                </>
            )
            case 2: return(
                <>
                <div className="big-title question">
                Surfee를 통한 랜딩페이지 제작 과정은 어땠나요?
                </div>
                <div className="row-ans">
                    <div className="circle-text">어려움</div>
                        <div className="circle-ans-button" style={{background: `${difficul === '1' ? `var(--main-color)`: 'white'}`, color: `${difficul === '1' ? 'white': `var(--main-color)`}`}} onClick={() => {setDifficul('1'); setClicked(true);}}>1</div>
                        <div className="circle-ans-button" style={{background: `${difficul === '2' ? `var(--main-color)`: 'white'}`, color: `${difficul === '2' ? 'white': `var(--main-color)`}`}} onClick={() => {setDifficul('2'); setClicked(true);}}>2</div>
                        <div className="circle-ans-button" style={{background: `${difficul === '3' ? `var(--main-color)`: 'white'}`, color: `${difficul === '3' ? 'white': `var(--main-color)`}`}} onClick={() => {setDifficul('3'); setClicked(true);}}>3</div>
                        <div className="circle-ans-button" style={{background: `${difficul === '4' ? `var(--main-color)`: 'white'}`, color: `${difficul === '4' ? 'white': `var(--main-color)`}`}} onClick={() => {setDifficul('4'); setClicked(true);}}>4</div>
                        <div className="circle-ans-button" style={{background: `${difficul === '5' ? `var(--main-color)`: 'white'}`, color: `${difficul === '5' ? 'white': `var(--main-color)`}`}} onClick={() => {setDifficul('5'); setClicked(true);}}>5</div> 
                    <div className="circle-text">쉬움</div>
                </div>
                <div className="prev-next-fbuttons">
                    <div className="prev-next-fbutton" onClick={toPrev}>이전</div>
                    <div className="prev-next-fbutton" onClick={toNext}>다음</div>
                </div>
                </>
            )
            case 3: return(
                <>
                <div className="big-title question">
                Surfee를 사용하면서 가장 불편했던 점이 무엇인가요?
                </div>
                <div className="column-ans">
                    <div className="round-ans-button" style={{background: `${inconv === '낮은 자유도' ? `var(--main-color)`: 'white'}`, color: `${inconv === '낮은 자유도' ? 'white': `var(--main-color)`}`}} onClick={() => {setInconv('낮은 자유도'); setClicked(true);}}>
                        낮은 자유도
                    </div>
                    <div className="round-ans-button" style={{background: `${inconv === '섹션 유형의 부족' ? `var(--main-color)`: 'white'}`, color: `${inconv === '섹션 유형의 부족' ? 'white': `var(--main-color)`}`}} onClick={() => {setInconv('섹션 유형의 부족'); setClicked(true);}}>
                        섹션 유형의 부족
                    </div>
                    <div className="round-ans-button" style={{background: `${inconv === '기능의 오류' ? `var(--main-color)`: 'white'}`, color: `${inconv === '기능의 오류' ? 'white': `var(--main-color)`}`}} onClick={() => {setInconv('기능의 오류'); setClicked(true);}}>
                        기능의 오류
                    </div>
                    <div className="round-ans-button" style={{background: `${inconv === '결과물이 만족스럽지 않음' ? `var(--main-color)`: 'white'}`, color: `${inconv === '결과물이 만족스럽지 않음' ? 'white': `var(--main-color)`}`}} onClick={() => {setInconv('결과물이 만족스럽지 않음'); setClicked(true);}}>
                        결과물이 만족스럽지 않음
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
                        <div className="round-ans-button" style={{background: `${inconv === '기타' ? `var(--main-color)`: 'white'}`, color: `${inconv === '기타' ? 'white': `var(--main-color)`}`}} onClick={() => {setInconv('기타'); setClicked(true);}}>
                            기타
                        </div>
                        {
                            inconv === '기타' && 
                            <input className="text-modal-input inputbox" value={inconvEtc} onChange={e => setInconvEtc(e.currentTarget.value)} style={{width:'300px'}}/>
                        }
                    </div>
                </div>
                <div className="prev-next-fbuttons">
                    <div className="prev-next-fbutton" onClick={toPrev}>이전</div>
                    <div className="prev-next-fbutton" onClick={toNext}>다음</div>
                </div>
                </>
            )
            case 4: return(
                <>
                <div className="big-title question">
                Surfee를 사용하면서 가장 만족했던 점이 무엇인가요?
                </div>
                <div className="column-ans">
                    <button className="round-ans-button" style={{background: `${satisfy === '사용이 쉬움' ? `var(--main-color)`: 'white'}`, color: `${satisfy === '사용이 쉬움' ? 'white': `var(--main-color)`}`}} onClick={() => {setSatisfy('사용이 쉬움'); setClicked(true);}}>
                        사용이 쉬움
                    </button>
                    <button className="round-ans-button" style={{background: `${satisfy === '섹션 유형이 다양함' ? `var(--main-color)`: 'white'}`, color: `${satisfy === '섹션 유형이 다양함' ? 'white': `var(--main-color)`}`}} onClick={() => {setSatisfy('섹션 유형이 다양함'); setClicked(true);}}>
                    섹션 유형이 다양함
                    </button>
                    <button className="round-ans-button" style={{background: `${satisfy === '결과물이 유용함' ? `var(--main-color)`: 'white'}`, color: `${satisfy === '결과물이 유용함' ? 'white': `var(--main-color)`}`}} onClick={() => {setSatisfy('결과물이 유용함'); setClicked(true);}}>
                    결과물이 유용함
                    </button>
                    <button className="round-ans-button" style={{background: `${satisfy === '결과물의 디자인' ? `var(--main-color)`: 'white'}`, color: `${satisfy === '결과물의 디자인' ? 'white': `var(--main-color)`}`}} onClick={() => {setSatisfy('결과물의 디자인'); setClicked(true);}}>
                    결과물의 디자인
                    </button>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
                        <button className="round-ans-button" style={{background: `${satisfy === '기타' ? `var(--main-color)`: 'white'}`, color: `${satisfy === '기타' ? 'white': `var(--main-color)`}`}} onClick={() => {setSatisfy('기타'); setClicked(true);}}>
                        기타
                        </button>
                        {
                            satisfy === '기타' && 
                            <input className="text-modal-input inputbox" value={satisfyEtc} onChange={e => setSatisfyEtc(e.currentTarget.value)} style={{width:'300px'}}/>
                        }
                    </div>
                </div>
                <div className="prev-next-fbuttons">
                    <div className="prev-next-fbutton" onClick={toPrev}>이전</div>
                    <div className="prev-next-fbutton" onClick={toNext}>다음</div>
                </div>
                </>
            )
            case 5: return(
                <>
                <div className="big-title question">
                추가되면 좋겠다고 생각하는 기능을 자유롭게 남겨주세요!
                </div>
                <div className="text-modal-input">
                <input className="text-modal-input inputbox" value={inputText} onChange={(e)=>{setInputText(e.target.value); setFunc(e.target.value); setClicked(true);}}/>
                </div>
                <div className="prev-next-fbuttons">
                    <div className="prev-next-fbutton" onClick={toPrev}>이전</div>
                    <div className="prev-next-fbutton" onClick={toNext}>다음</div>
                </div>
                </>
            )
            case 6: return(
                <>
                <div className="big-title question">
                Surfee를 위해, 여러분의 소중한 의견을 자유롭게 남겨주세요!
                </div>
                <div className="text-modal-input">
                <input className="text-modal-input inputbox" value={inputText} onChange={(e)=>{setInputText(e.target.value); setComment(e.target.value); setClicked(true);}}/>
                </div>
                <div className="prev-next-fbuttons">
                    <div className="prev-next-fbutton" onClick={toPrev}>이전</div>
                    <div className="prev-next-fbutton" onClick={toNext}>다음</div>
                </div>
                </>
            )
            case 7: return(
                <>
                <div className="big-title question">
                Surfee를 주위 친구, 동료, 지인에게 추천할 의향이 얼마나 있나요?
                </div>
                <div className="row-ans" style={{width: '750px'}}>
                    <div className="circle-text">전혀없음</div>
                        <div className="circle-ans-button" style={{background: `${recom === '0' ? `var(--main-color)`: 'white'}`, color: `${recom === '0' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('0'); setClicked(true);}}>0</div>
                        <div className="circle-ans-button" style={{background: `${recom === '1' ? `var(--main-color)`: 'white'}`, color: `${recom === '1' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('1'); setClicked(true);}}>1</div>
                        <div className="circle-ans-button" style={{background: `${recom === '2' ? `var(--main-color)`: 'white'}`, color: `${recom === '2' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('2'); setClicked(true);}}>2</div>
                        <div className="circle-ans-button" style={{background: `${recom === '3' ? `var(--main-color)`: 'white'}`, color: `${recom === '3' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('3'); setClicked(true);}}>3</div>
                        <div className="circle-ans-button" style={{background: `${recom === '4' ? `var(--main-color)`: 'white'}`, color: `${recom === '4' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('4'); setClicked(true);}}>4</div>
                        <div className="circle-ans-button" style={{background: `${recom === '5' ? `var(--main-color)`: 'white'}`, color: `${recom === '5' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('5'); setClicked(true);}}>5</div>
                        <div className="circle-ans-button" style={{background: `${recom === '6' ? `var(--main-color)`: 'white'}`, color: `${recom === '6' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('6'); setClicked(true);}}>6</div>
                        <div className="circle-ans-button" style={{background: `${recom === '7' ? `var(--main-color)`: 'white'}`, color: `${recom === '7' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('7'); setClicked(true);}}>7</div>
                        <div className="circle-ans-button" style={{background: `${recom === '8' ? `var(--main-color)`: 'white'}`, color: `${recom === '8' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('8'); setClicked(true);}}>8</div>
                        <div className="circle-ans-button" style={{background: `${recom === '9' ? `var(--main-color)`: 'white'}`, color: `${recom === '9' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('9'); setClicked(true);}}>9</div>
                        <div className="circle-ans-button" style={{background: `${recom === '10' ? `var(--main-color)`: 'white'}`, color: `${recom === '10' ? 'white': `var(--main-color)`}`}} onClick={()=>{setRecom('10'); setClicked(true);}}>10</div>
                    <div className="circle-text">완전있음</div>
                </div>
                <div className="prev-next-fbuttons">
                    <div className="prev-next-fbutton" onClick={toPrev}>이전</div>
                    <div className="prev-next-fbutton" onClick={toNext}>완료</div>
                </div>
                </>
            )
            case 8: return(
                <>
                <div className="big-title question">
                    마지막으로, 다음 답변을 바탕으로 더욱 발전하는 Surfee가 되겠습니다. 감사합니다!
                </div>
                <div className="column-ans">
                    <div style={{margin:'10px'}}>
                        분야 및 경력
                    </div>
                    <input style={{width:'50%'}} placeholder="마케팅 3년차/대학생 등" className="text-modal-input inputbox" value={job} onChange={(e)=>{setJob(e.target.value); setClicked(true);}}/>
                    <div style={{margin:'10px'}}>
                        나이
                    </div>
                    <div style={{width:'50%', textAlign:'center'}}>
                        <input style={{width:'50%'}} type="number" placeholder="숫자만 입력해주세요" className="text-modal-input inputbox" value={age} onChange={(e)=>{setAge(e.target.value); setClicked(true);}}/>&nbsp;&nbsp;&nbsp;세
                    </div>
                </div>
                <div className="prev-next-fbuttons">
                    <div className="prev-next-fbutton" onClick={toPrev}>이전</div>
                    <div className="prev-next-fbutton" onClick={toComplete}>다음</div>
                </div>
                </>
            )
        }
    }

    return (
        <div>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={() => setOpen(!open)}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <div className="modal-top__title" style={{marginTop:'-10px', flexDirection:'row'}}>
                        <div className="big-title" style={{marginTop:'5px'}}>Surfee 제작 과정 피드백</div>
                        <div className="modal-close-button" onClick={() => {setClear()}}>
                            <Close size="30" />
                        </div>
                    </div>
                    { quest ? (
                        <>
                            <div className="questnum">Q{page}</div>
                            {returnQuestions()}
                        </> 
                    ) :
                    (<>
                        {
                            complete ? (
                                <>
                                <div className="big-title" style={{color:'black', marginTop: '70px'}}>감사합니다!</div>
                                <div className="big-title sub">
                                    작성해 주신 피드백을 바탕으로 <br />
                                    더 발전하는 Surfee가 되겠습니다 :)
                                </div>
                                <div className="feed-button" style={{width: '167px'}} 
                                onClick={()=>{deploy(true)}}
                                >
                                    배포하기
                                </div>
                                </>
                            ):
                            (
                                <>      
                                <div className="big-title" style={{color:'black', marginTop: '70px'}}>제작을 완료하셨나요?</div>
                                <div className="big-title sub">
                                    랜딩페이지를 <span style={{color:`var(--main-color)`}}>무료로 배포</span>하기 전에 <br />
                                    Surfee가 더 나은 서비스를 제공할 수 있도록,<br />
                                    제작 과정에서 느낀 점에 대한 피드백을 부탁드립니다 :)
                                </div>
                                <div className="big-title small-text">
                                    질문은 총 <span style={{color:`var(--main-color)`}}>8</span>개이며, 예상 소요시간은 <span style={{color:`var(--main-color)`}}>1</span>분입니다.<br/>
                                    최초 배포 시 한번만 응답하시면 됩니다. 이후에는 나타나지 않습니다.
                                </div>
                                <div className="feed-button" onClick={()=>{goQuest(true)}}>
                                    피드백 하고 배포 완료하기
                                </div>
                                </>
                            )
                        }
                    </>)
                    }
                    
                </Box>
            </StyledModal>
        </div>
    )
}

export default FeedbackModal
