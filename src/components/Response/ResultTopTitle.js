import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import gadata from '../../tools/datacodes/gadata.json'
import { Tooltip, ChakraProvider, Button } from '@chakra-ui/react'
import { InformationCircle } from '@styled-icons/ionicons-outline';
import {dbService} from '../../tools/fbase';
import './ResultTopTitle.css'
import FeedbackModal from '../../tools/FeedbackModal'
import MiniModal from '../../tools/MiniModal'

function ResultTopTitle({content, myResponses, checkPublished, history, datas}) {
    const [feedbackOpen, setFeedbackOpen] = useState(false);
    const [deployOpen, setDeployOpen] = useState(false)

    const numOfPerson = (type) => {
        let numClick = 0
        myResponses.forEach(doc => doc.type === type ? numClick += 1 : numClick)
        return numClick
    }

    const doPublish = async () => {
        
        const urlDatas = await dbService
            .collection("published-page")
            .where("urlId", "==", content.urlId)
            .get(); // uid를 creatorId로 줬었으니까.
        
        let urlData = urlDatas.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });
        
        if(urlData.length > 0 && urlData[0].pageId !== content.id ){
            alert("url을 변경한 후 배포해주시기 바랍니다.");
            return;
        }

        await dbService
            .collection('published-page')
            .where('pageId', "==", content.id)
            .get().then( async querySnapshot => 
                { 
                    if(querySnapshot.empty){
                        let body = {
                            ...content,
                            pageId:content.id,
                            created:Date.now(),
                        }
                        await dbService.collection('published-page').add(body)
                        setDeployOpen(true)
                    }else{
                        let body = {
                            ...content,
                            created:Date.now(),
                        }
                        querySnapshot.forEach(async (doc) => {
                            await dbService.doc(`published-page/${doc.id}`).update(body).then(() => {
                                alert("배포 완료되었습니다.")
                                history.go();
                            })
                        });
                    }
                }
            )
    }

    const ResultData = ({data, name, end, type}) => {
        return(
            <div className="data-result__card" style={{borderRight:`${end ? 'none' : '1px solid var(--main-light-gray)'}`}}>
                <div className="data-result__data">
                    {data}
                    { type ? type : null}
                </div>
                <div className="data-result__name">
                    {name}
                </div>
            </div>
        )
    }

    return (
    <ChakraProvider>
    <div className="response-table-top">
        <span className="response-table-title"> 
            <div className="left" style={{width:'80%'}}>
                {
                    checkPublished(content.urlId) ? 
                    <div className="center-row" style={{justifyContent:'start'}}>
                        <div className="ga-data__container"> 
                            <Tooltip hasArrow arrowSize={10} label={"데이터는 Google Analytics의 업데이트 주기에 맞춰 \n 30분마다 업데이트 됩니다."} placement='top' fontSize='13'>
                                <InformationCircle size="18" style={{color:'#C4CACF', zIndex:'20', margin:'0px 6px'}}/>
                            </Tooltip>
                            {
                                // 이 페이지 관련 GA 데이터가 있을 때
                                datas ? 
                                <div className="row">
                                    <ResultData data={datas.pageViews + "개"} name="페이지 뷰" />
                                    <ResultData data={datas.users + "명"} name="유입 수" />
                                    <ResultData data={Math.round(numOfPerson('apply')*1000 / parseInt(datas.users)) / 10} name="신청 전환율" type="%"/>
                                    <ResultData data={Math.round(numOfPerson('click')*1000 / parseInt(datas.users)) / 10} name="클릭 전환율" type="%"/>
                                </div>
                                :
                                <div className="row">
                                    아직 기록된 GA 데이터가 없습니다.
                                </div>
                            }
                            <ResultData data={numOfPerson('click')} name="버튼 클릭 수" />
                            <ResultData data={numOfPerson('apply')} name="신청 수" end/>
                        </div>
                    </div>
                    :
                    <div>
                        이 랜딩페이지는 아직 배포되지 않았습니다. 오른쪽의 ‘배포하기' 버튼을 눌러 페이지를 배포하고, 전환율 및 신청을 확인하세요
                    </div>
                }
            </div>
            <div className="right" style={{flexDirection: 'row', width:'20%'}}>
                <Link to={{
                    pathname:`/make`,
                    state:{
                        item:content.id,
                    }}} 
                    className="default-button-01 opacity-hover" style={{marginLeft:'15px'}}>편집하기</Link>
                <Button className="default-button-02" style={{marginLeft:'15px'}} colorScheme="6c63ff"
                    onClick={() => {
                        if(localStorage.getItem('feedback'))
                        {
                            doPublish();
                        }
                        else{
                            setFeedbackOpen(true)
                        }
                    }}>
                    배포하기
                </Button>
            </div>
        </span>
    </div>
    <FeedbackModal open={feedbackOpen} setOpen={setFeedbackOpen} deploy={doPublish}/>
    <MiniModal open={deployOpen} setOpen={setDeployOpen} deploy history={history}/>
    </ChakraProvider>
    )
}

export default ResultTopTitle
