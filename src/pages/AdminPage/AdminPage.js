import React, {useState, useEffect} from 'react'
import { styled } from '@mui/system';
import MainPage from '../Landing/old/MainPage'
import { dbService } from '../../tools/fbase'
import UploadContest from './UploadContest'

const RadioButton = styled('div')`
    margin:10px;
    background-color:#6c63ff;
    padding:10px;
`;

const Half = styled('div')`
    margin:10px;
    width:20%;
`;

function AdminPage({history}) {
    const [type, setType] = useState(4);
    const [published, setPublished] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const [emails, setEmails] = useState([]);
    const [saved, setSaved] = useState([]);
    const [voted, setVoted] = useState([]);
    const [password, setPassword] = useState('');

    useEffect(() => {
        getThisPublished()
        getFeedback()
        getMails()
        getSaved()
        getVoted()
        setTimeout(() => {
            console.log(saved.length, "갯수")
            console.log(published.length, "갯수")
        }, 2000)
    }, emails)

    const getThisPublished = async () => {
        const publishedDatas = await dbService
            .collection('published-page')
            .orderBy("created", "desc")
            .get();
        let publishedData = publishedDatas.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });
        setPublished(publishedData);
    }

    const getFeedback = async () => {
        const fds = await dbService
            .collection('feedback')
            .get();
        let fd = fds.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });
        setFeedback(fd);
    }

    const getMails = async () => {
        const fds = await dbService
            .collection('apply-datas')
            .get();
        let fd = fds.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });
        setEmails(fd);
    }

    const getSaved = async () => {
        const fds = await dbService
            .collection('saved-page')
            .orderBy("created", "desc")
            .get();
        let fd = fds.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });
        setSaved(fd);
    }

    const getVoted = async () => {
        const fds = await dbService
            .collection('vote')
            .orderBy("created", "desc")
            .get();
        let fd = fds.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });
        setVoted(fd);
    }

    const switchType = () => {
        switch (type){
            case 0:
                return(<UploadContest history={history} />)
            case 1:
                return(
                    <div>
                        <div>
                            배포된 페이지
                        </div>
                        <div>
                            {published &&
                            published.map((item, index) => {
                                let day = new Date(item.created)
                                let date = `${day.getMonth() + 1}월 ${day.getDate()}일 ${day.getHours()}시 ${day.getMinutes()}분`
                                return(
                                    <div className="center-row" style={{margin:'10px'}} key={index}>
                                    <Half>
                                        번호 : {index}
                                    </Half>
                                        <Half>
                                            url : {item.urlId}
                                        </Half>
                                        <Half>
                                            날짜 : {date}
                                        </Half>
                                        <Half>
                                            만드신 분 : {item.makerEmail}
                                        </Half>
                                    </div>
                                )
                            }) 
                            }
                        </div>
                    </div>
                )

            case 2:
                return(
                    <div>
                        <div>
                            피드백
                        </div>
                        <div>
                            {feedback &&
                            feedback.map((item, index) => {
                                let day = new Date(item.created)
                                let date = `${day.getMonth() + 1}월 ${day.getDate()}일 ${day.getHours()}시 ${day.getMinutes()}분`
                                return(
                                    <div className="center-row" style={{margin:'10px', flexWrap:'wrap', backgroundColor:'rgba(0,0,0,0.2)'}} key={index}>
                                        <Half>
                                            번호 : {index}
                                        </Half>
                                        <Half>
                                            코멘트 : {item.comment}
                                        </Half>
                                        <Half>
                                            난이도 : {item.difficulty}
                                        </Half>
                                        <Half>
                                            있으면 좋겠는 기능 : {item.function}
                                        </Half>
                                        <Half>
                                            유입 경로 : {item.funnel} {item.funnelEtc}
                                        </Half>
                                        <Half>
                                            불편함 : {item.inconvenience} {item.inconvenienceEtc}
                                        </Half>
                                        <Half>
                                            추천도 : {item.recommendation}
                                        </Half>
                                        <Half>
                                            만족사항 : {item.satisfaction} {item.satisfactionEtc}
                                        </Half>
                                        <Half>
                                            작업 시간 : {item.working_time}
                                        </Half>
                                        <Half>
                                            피드백 시간 : {date}
                                        </Half>
                                        <Half>
                                            작성자 : {item.user}
                                        </Half>
                                    </div>
                                )
                            }) 
                            }
                        </div>
                    </div>
                )

                case 3:
                    return(
                        <div>
                            <div>
                                저장된 페이지
                            </div>
                            <div>
                                {saved &&
                                saved.map((item, index) => {
                                    let day = new Date(item.created)
                                    let date = `${day.getMonth() + 1}월 ${day.getDate()}일 ${day.getHours()}시 ${day.getMinutes()}분`
                                    return(
                                        <div className="center-row" style={{margin:'10px'}} key={index}>
                                        <Half>
                                            번호 : {index}
                                        </Half>
                                            <Half>
                                                url : {item.urlId}
                                            </Half>
                                            <Half>
                                                날짜 : {date}
                                            </Half>
                                            <Half>
                                                만드신 분 : {item.makerEmail}
                                            </Half>
                                        </div>
                                    )
                                }) 
                                }
                            </div>
                        </div>
                    )

            case 4:
                return(
                    <div>
                        <div>
                            투표결과
                        </div>
                        <div>
                            {voted &&
                                voted.map((item, index) => {
                                    let day = new Date(item.created)
                                    let date = `${day.getMonth() + 1}월 ${day.getDate()}일 ${day.getHours()}시 ${day.getMinutes()}분`
                                    return(
                                        <div className="center-row" style={{margin:'10px'}} key={index}>
                                            <Half>
                                                투표 : {item.select.map((item1,index) => {
                                                    return item1 + ','
                                                })}
                                            </Half>
                                            <Half>
                                                날짜 : {date}
                                            </Half>
                                        </div>
                                    )
                            }) 
                            }
                        </div>
                    </div>
                )
            default:
                return(<>뭐요</>)
        }
    }

    return (
        password !== 'abcdefghijklmnoppp' ?
        <div className="centero" style={{width:'100vw', height:'100vh', flexDirection:'column'}}>
            <input value={password} onChange={e => setPassword(e.currentTarget.value)} />
            <button onClick={() => {
                if(password === 'pass'){
                    setPassword('abcdefghijklmnoppp')
                }else{
                    alert('비밀공간입니다!')
                }
            }}>비밀번호 입력</button>
        </div>
        :
        <div>
            <div className="center-row" style={{zIndex:'2000'}}>
                <RadioButton  onClick={() => setType(0)}>
                    데이터 용도
                </RadioButton>
                <RadioButton  onClick={() => setType(2)}>
                    피드백(배포 시)
                </RadioButton>
                <RadioButton  onClick={() => setType(1)}>
                    배포된 페이지
                </RadioButton>
                <RadioButton  onClick={() => setType(3)}>
                    저장된 페이지
                </RadioButton>
                <RadioButton  onClick={() => setType(4)}>
                    투표
                </RadioButton>
            </div>
            <div>
                {switchType()}
            </div>
        </div>
    )
}

export default AdminPage
