import React, {useState, useEffect} from 'react';
import './ResponsePage.css';
import {dbService} from '../../tools/fbase';
import Footer from '../NavAndFooter/Footer'
import MadeLandingCard from '../../components/Response/MadeLandingCard'
import ResponseNavBar from '../../components/Response/ResponseNavBar'
import ChromeTapBar from '../../components/Response/ChromeTapBar'
import ResultTable from '../../components/Response/ResultTable'
import ResultTopTitle from '../../components/Response/ResultTopTitle'
import LoadingDisplay from '../../tools/LoadingDisplay'
import { Tooltip, ChakraProvider } from '@chakra-ui/react'
import MiniModal from '../../tools/MiniModal'
import ChannelTalk from '../../tools/ChannelTalk'
import FeatVote from '../../tools/modal/FeatVote'
import { Cookies } from 'react-cookie'

const NOTCLICKED = 10000

const cookies = new Cookies()

function ResponsePage({userObj, history}) {
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);
    const [responses, setResponses] = useState([[]]);
    const [datas, setDatas] = useState([[]]);
    const [mylandings, setMylandings] = useState([]);
    const [published, setPublished] = useState([]);
    const [part, setPart] = useState(1);
    const [nowChecking, setNowChecking] = useState(NOTCLICKED);
    const [copyOpen, setCopyOpen] = useState(false)
    const [voteOpen, setVoteOpen] = useState(false)

    // useEffect(() => {
    //     console.log("쿠키", cookies.get('featvote'))

    //     if(cookies.get('featvote')){
    //         const expires = new Date()
    //         expires.setDate(expires.getDate() + 7)

    //         setVoteOpen(true);
    //         cookies.set('featvote', true, {
    //             expires:expires
    //         })
    //     }
    // }, [])
    
    useEffect(() => {
        ChannelTalk.boot({
            "pluginKey": "e6b830bc-7731-43fa-8eea-1245d3d4fc3e", //please fill with your plugin key"
        });
        // to report page view
        // ReactGa.initialize('UA-213792742-1');
        // ReactGa.pageview(`/response/${userObj.email}`);
        getThisUserDatas();
    },[loading, update])

    const getThisUserDatas = async () => {
        // setLoading(false);
        const thisuserDatas = await dbService
            .collection('saved-page')
            .where("makerEmail", "==", userObj.email)
            .orderBy("created", "desc")
            .get();
        
        let thisuserData = thisuserDatas.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });

        setMylandings(thisuserData);

        getThisPublished();
        let tempApplyDatas = []
        let tempDatas = []
        
        thisuserData.map(item => {
            let tempd = []
            getResponses(item.id).then(i => {
                tempd = i;
                tempApplyDatas.push(tempd);
            })
            getDatas(item.id).then(i => {
                tempd = i;
                tempDatas.push(tempd);
            })
        })
        setResponses(tempApplyDatas);
        setDatas(tempDatas);

        setLoading(true);
    }

    const getThisPublished = async () => {
        const publishedDatas = await dbService
            .collection('published-page')
            .where("makerEmail", "==", userObj.email)
            .get();
        let publishedData = publishedDatas.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });
        setPublished(publishedData);
    }

    const getResponses = async (pageId) => {
        const reDatas = await dbService
            .collection("datas") // apply-datas는 유저가 만든 랜딩페이지에 들어와서 목표 액션을 한 데이터.
            .orderBy("created", "desc")
            .where("pageId", "==", pageId)
            .get();

        let reData = reDatas.docs.map(doc => {
            let day = new Date(doc.data().created)
            return({...doc.data(), id:doc.id, date:day})
        });

        return reData;
    }

    const getDatas = async (pageId) => {
        const reDatas = await dbService
            .collection("gadata") // apply-datas는 유저가 만든 랜딩페이지에 들어와서 목표 액션을 한 데이터.
            .where("path", "==", '/' + pageId)
            .get();

        let result = reDatas.docs.map(doc => {
            let day = new Date(doc.data().created)
            return({...doc.data(), id:doc.id, date:day})
        });

        return result[0];
    }

    const checkPublished = (urlId) => {
        let found = false
        published.map((item,index) => {
            if(item.urlId === urlId){
                found = item
            }
        })
        if(found){
            return found
        }else{
            return false
        }
    }

    const returnMylandingsTable = mylandings.map((item, index) => {
        return(
            <MadeLandingCard 
                history={history} item={item} key={item.id} index={index} 
                published={checkPublished(item.urlId)} setNowChecking={setNowChecking} setCopyOpen={() => {setCopyOpen(true)}}
                nowChecking={nowChecking} num={mylandings.length} setUpdate={setUpdate} update={update}/>
        )
    })

        if(loading === true){
            return (
                <ChakraProvider>
                <div className="response__container">
                <ResponseNavBar />
                <div className="get-all-container">
                    <div className="get-up-container">
                        <div className="get-up-title">
                            {
                                userObj.displayName ? <>{userObj.displayName} 님의 랜딩페이지를 관리해 보세요 :)</>
                                : <>제작한 랜딩페이지를 관리해 보세요 :)</>
                            }
                            
                            {
                                mylandings.length > 2 &&
                               <span className="response-subtext">현재 버전에서 랜딩페이지는 최대 3개까지 만들 수 있습니다. 새로운 페이지를 만들고 싶다면 기존의 페이지를 삭제해 주세요.</span>
                            }
                        </div>
                        <div className="get__mylandings-cantainer">
                            {returnMylandingsTable}
                            {
                                mylandings.length < 3 &&
                                <MadeLandingCard addNew />
                            }
                        </div>
                    </div>
                    {
                    nowChecking !== NOTCLICKED && responses[nowChecking] !== undefined ? 
                    <div className="response-down__container">
                        <ChromeTapBar content={mylandings[nowChecking]}/>
                        { part === 1 ? 
                        <div className="response-display__container">
                            <ResultTopTitle content={mylandings[nowChecking]} myResponses={responses[nowChecking]} checkPublished={checkPublished} datas={datas[nowChecking]} history={history}/>
                            <ResultTable setUpdate={setUpdate} update={update} responses={responses} nowChecking={nowChecking} setResponses={setResponses} />
                        </div>
                        :
                        <>
                        {/* 데이터 파트 */}
                        {/* <div style={{height:'100vh'}}>
                            <div>
                                <span className="data-one-mini-card">총 페이지 뷰 수 {myDatas.all_pageViews}</span>
                                <span className="data-one-mini-card">총 세션 수 {myDatas.all_sessions}</span>
                            </div>
                        </div> */}
                        </>
                        }
                    </div>
                    :
                    <div style={{marginTop:'15px'}}>
                        {
                            mylandings.length === 0 ?
                            <div>
                                10분 만에 새로운 랜딩페이지를 만들고 간편하게 유저의 반응을 확인해 보세요!
                            </div>
                            :
                            <div>
                                확인할 페이지를 클릭하세요
                            </div>
                        }
                    </div>
                    }
                </div>
                <div style={{fontSize:'15px', width:'100%', marginTop:'40vh'}}>
                    <Footer />
                </div>
                </div>
                <MiniModal open={copyOpen} setOpen={setCopyOpen} copy />
                <FeatVote open={voteOpen} setOpen={setVoteOpen} />
                </ChakraProvider>
            )
        }else{
            return(
                <LoadingDisplay />
            )
        }
}

export default ResponsePage
