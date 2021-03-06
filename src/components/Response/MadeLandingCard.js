import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ConfirmCustom from '../../tools/ConfirmCustom'
import {dbService, stService} from '../../tools/fbase'
import './MadeLandingCard.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {Copy} from '@styled-icons/boxicons-regular'
import lodash from 'lodash'
import {Duplicate} from '@styled-icons/ionicons-outline'
import {ThreeDots, Share} from '@styled-icons/bootstrap'
import {Trash} from '@styled-icons/boxicons-regular'
import {
    ChakraProvider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Portal,
    Button
  } from '@chakra-ui/react'

function MadeLandingCard({item, published, setCopyOpen, id, index, setNowChecking, nowChecking, history, addNew, num, update, setUpdate}) {
    const [deleteopen, setDeleteOpen] = useState(false)

    const OptionButton = () => {
        return(
            <Popover>
                <PopoverTrigger>
                    <button className="option-trigger-button opacity-hover">
                        <ThreeDots color="rgb(90, 90, 90)" size="17" />
                    </button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent style={{width:'180px'}}>
                        <PopoverArrow />
                        <PopoverBody style={{flexDirection:'column'}}>
                            <div className="option-selects opacity-hover" style={{color:'#e26a6a'}} onClick={() => {setDeleteOpen(true)}}><Trash size="20" />&nbsp;&nbsp; 페이지 삭제</div>
                            <div className="option-selects opacity-hover" onClick={() => duplicate()}><Duplicate size="20" />&nbsp;&nbsp; 페이지 복제</div>
                            <CopyToClipboard text={"https://surfee.co.kr/make/" + `${item.id}`}>
                                <div className="option-selects opacity-hover" onClick={() => alert('템플릿을 복제할 수 있는 링크를 복사했습니다. \n이 링크를 이용하여 템플릿을 공유할 수 있습니다.')}><Share size="15"/>&nbsp; &nbsp;이 템플릿 공유하기</div>
                            </CopyToClipboard>
                        </PopoverBody>
                    </PopoverContent>
                </Portal>
            </Popover>
            )
    }
    
    const deletePage = async () => {

        // var saved_delete = await dbService.collection('saved-page').where('urlId','==', item.urlId).get().then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //       doc.ref.delete();
        //     });
        //   });;
        
        await dbService.doc(`saved-page/${item.id}`).delete();

        var published_delete = await dbService.collection('published-page').where('urlId','==', item.urlId).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              doc.ref.delete();
            });
          });
        
          var urlStores = await dbService.collection('urlStores').where('urlId','==', item.urlId).get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              doc.ref.delete();
            });
          });

        //   var datas = await dbService.collection('datas').where('pageId','==', item.id).get().then(function(querySnapshot) {
        //     querySnapshot.forEach(function(doc) {
        //       doc.ref.delete();
        //     });
        //   });

        // 새로고침 시키기
        alert("삭제했습니다.")
        setUpdate(!update)

        history.go()
    }

    const duplicate = async () => {
        if(num > 2){
            alert("최대 3개의 페이지만 만들 수 있습니다.")
        }else{
            let temp = lodash.cloneDeep(item);
            temp.urlId = item.urlId + 'copied'
            temp.setting.urlId = item.setting.urlId + 'copied'
            temp.created = Date.now();
            await dbService.collection("saved-page").add(temp);

            // await dbService.collection("urlStores").add({urlId:item.setting.urlId});

            setUpdate(!update)
            alert("복제되었습니다.")
            history.go()
        }
    }

    const returnDate = (made) => {
        let day = new Date(Date.now() - made);

        return(
            <>
            {
            day.getDate()-1 > 0 ? <>
            {day.getDate()-1} 일전</> :
            day.getHours()-9 > 0 ? <>
                {day.getHours()-9} 시간전 </> : 
                <>{day.getMinutes()}분전</>}
            </>
        )
    }

    if(addNew){
        return(
            <Link to={{
                pathname:`/questions`,
                state:{
                    newMake:true,
                }}} 
                className="response-page-card uphover">
                <div className="response-card-main-color">
                + 새로운 랜딩페이지 만들기
                </div>
            </Link>
        )
    }
    return (
        <div className="response-page-card uphover" onClick={() => setNowChecking(index)} style={{border:`${index === nowChecking ? '0.8px solid #A89AFF' : 'none'}`}}>
            <div className="center-row" style={{justifyContent: "start"}}>
                <div className="card__title">
                    {item.setting.title}
                </div>
                <div style={{width:`${published ? '45%' : '20%'}`, fontSize:'0.6em', textAlign:'end'}}>
                    {published ? 
                    <div style={{display: 'flex', justifyContent:'end', alignItems: 'center', flexDirection:'row'}}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius:'10px',
                        marginRight:'3px',
                        background: '#11E533'}}></div>
                    {returnDate(published.created)} 마지막 배포
                    </div>
                    :
                    <div style={{display: 'flex', justifyContent:'end', alignItems: 'center', flexDirection:'row'}}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius:'10px',
                        marginRight:'3px',
                        background: '#C4C4C4'}}></div>배포 전
                    </div>
                    }
                </div>
            </div>
            <div className="center-row" style={{justifyContent: "start"}}>
                <div className="left" style={{fontSize:'0.7em', width:'70%', wordWrap:'break-word', wordBreak:'break-all'}}>
                    https://surfee.co.kr/{item.setting.urlId} 
                    <CopyToClipboard  text={"https://surfee.co.kr/"+`${item.setting.urlId}`} onCopy={setCopyOpen}>
                        <Copy size={17} color="#6B63F7" style={{marginLeft:'5px'}} />
                    </CopyToClipboard>
                </div>
                <div className="right" style={{fontSize:'15px', width:'30%'}}>
                    <Popover>
                        <PopoverTrigger>
                            <button className="option-trigger-button opacity-hover">
                                <ThreeDots color="rgb(90, 90, 90)" size="17" />
                            </button>
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent style={{width:'180px'}}>
                                <PopoverArrow />
                                <PopoverBody style={{flexDirection:'column'}}>
                                    <div className="option-selects opacity-hover" style={{color:'#e26a6a'}} onClick={() => {setDeleteOpen(true)}}><Trash size="20" />&nbsp;&nbsp; 페이지 삭제</div>
                                    <div className="option-selects opacity-hover" onClick={() => duplicate()}><Duplicate size="20" />&nbsp;&nbsp; 페이지 복제</div>
                                    <CopyToClipboard text={"https://surfee.co.kr/make/" + `${item.id}`}>
                                        <div className="option-selects opacity-hover" onClick={() => alert('템플릿을 복제할 수 있는 링크를 복사했습니다. \n이 링크를 이용하여 템플릿을 공유할 수 있습니다.')}><Share size="15"/>&nbsp; &nbsp;이 템플릿 공유하기</div>
                                    </CopyToClipboard>
                                </PopoverBody>
                            </PopoverContent>
                        </Portal>
                    </Popover>
                </div>
            </div>
            <ConfirmCustom warn open={deleteopen} setOpen={setDeleteOpen} message={"한번 삭제하면 복구할 수 없습니다. 정말 삭제하시겠습니까?"} callback={deletePage}/>
        </div>
    )
}

export default MadeLandingCard
