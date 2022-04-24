import React, {useState, useEffect} from 'react'
import Footer from '../../NavAndFooter/Footer'
import NavBarV2 from '../../NavAndFooter/NavBarV2'
import {Search} from '@styled-icons/boxicons-regular'
import {dbService} from '../../../tools/fbase'
import {ChevronDown} from '@styled-icons/bootstrap'
import {Heart, HeartFill} from '@styled-icons/bootstrap'
import './ContestPage.css'
import { Cookies } from 'react-cookie'
import {isMobile} from 'react-device-detect'
import {produce} from 'immer'
import {
    ChakraProvider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

const cookies = new Cookies()

function ContestPage({history, isLoggedIn}) {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [contests, setContests] = useState([]);
    const [voteList, setVoteList] = useState([]);
    const [order, setOrder] = useState('최신순')

    useEffect(() => {
        getCookies()
        getContestPages()
    },[])

    const getCookies = () => {
        const coki = cookies.get('contest')
        if(coki){
            setVoteList(coki)
        }else{
        }
    }

    const getContestPages = async () => {
        const items = await dbService
            .collection('contest')
            .get();
        let item = items.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });
        
        // let temp = []
        // item.forEach(async element => {
        //     const dds = await dbService
        //     .collection('contest')
        //     .where('urlId', '==', element.urlId)
        //     .get();
            
        //     let dd = dds.docs.map(doc => {
        //         return({...doc.data(), id:doc.id})
        //     });
        //     if(dd){
        //         temp.push(dd[0])
        //     }
        // })

        setContests(item)

        setLoading(true)
    }

    const Upvote = async (index, item) => {

        const coki = cookies.get('contest')

        if(coki){
            if(coki.includes(item.id)){
                setContests(produce(contests, draft => {
                    draft[index].vote = item.vote - 1
                }))
        
                await dbService.doc(`contest/${item.id}`).update({
                    urlId:item.urlId,
                    img:item.img,
                    name:item.name,
                    phone:item.phone,
                    vote : item.vote - 1
                }).then(() => {
                    alert("투표가 취소되었습니다.")
                })
                
                // 쿠키의 목록에서 빼기
                let tt = coki; 
                tt = tt.filter(doc => doc !== item.id)
                cookies.set('contest', tt)
                setVoteList(tt)
            }else{
                setContests(produce(contests, draft => {
                    draft[index].vote = item.vote + 1
                }))
        
                await dbService.doc(`contest/${item.id}`).update({
                    urlId:item.urlId,
                    img:item.img,
                    name:item.name,
                    phone:item.phone,
                    vote : item.vote + 1
                }).then(() => {
                    alert("투표가 완료되었습니다.")
                })
                
                // 쿠키 목록에 넣기
                let tt = coki;
                tt.push(item.id)
                cookies.set('contest', tt)
                setVoteList(tt)
            }
        }else{
            setContests(produce(contests, draft => {
                draft[index].vote = item.vote + 1
            }))
    
            await dbService.doc(`contest/${item.id}`).update({
                urlId:item.urlId,
                img:item.img,
                name:item.name,
                phone:item.phone,
                vote : item.vote + 1
            }).then(() => {
                alert("투표가 완료되었습니다.")
            })
            // 쿠키 목록 새로 만들기
            cookies.set('contest', [item.id])
            setVoteList([item.id])
        }
    }

    const getSearch = async e => {
        e.preventDefault();

        if(!search){
            const items = await dbService
                .collection('contest')
                .get();
            let item = items.docs.map(doc => {
                return({...doc.data(), id:doc.id})
            });
            setContests(item)
        }else{
            const items = await dbService
                .collection('contest')
                .where('phone', '==', parseInt(search))
                .get();
            let item = items.docs.map(doc => {
                return({...doc.data(), id:doc.id})
            });
            setContests(item)
        }
    }

    const orderBy = type => {
        if(type === 'new'){
            let tt = contests
            tt.sort((a,b) => {
                return b.created - a.created
            });
            setContests(tt)
        }else{
            let tt = contests
            tt.sort((a,b) => {
                return b.vote - a.vote
            });
            setContests(tt)
        }
    }



    const ContestCard = ({item, index, img, Upvote, voteList}) => {

        return(
            <div className="excard uphover2" style={{fontFamily:'Pretendard'}}>
                <span style={{position:'absolute', top:'10px', left:'10px', cursor:'pointer'}} onClick={() => Upvote(index, item)}>
                    {
                        voteList.includes(item.id) ?
                        <HeartFill size="32" color="#EB4956" style={{ backgroundColor:'rgba(240,240,240,0.5)', padding:'4px', borderRadius:'4px' }} />
                        :
                        <Heart size="29" className="contest__heart" style={{ backgroundColor:'rgba(240,240,240,0.5)', padding:'4px', borderRadius:'4px' }} />
                    }
                </span>
                <span style={{position:'absolute', top:'10px', right:'10px', borderRadius:'4px', fontSize:'1.1em', fontWeight:'700', backgroundColor:'rgba(240,240,240,0.5)', padding:'4px'}}>
                    {item.vote}표
                </span>
                <div className="back-image-fit excard-image"
                    style={{backgroundImage:`url(${img})`, cursor:'pointer'}}>
                    <div className="excard-black">
                        <div className="excard-button-3" onClick={()=>{
                            window.open(
                                    'https://surfee.co.kr/' + item.urlId,
                                    '_blank' // <- This is what makes it open in a new window.
                                );
                            }}>
                            페이지 보기
                        </div>
                    </div>
                </div>
                <div className="excard-title" style={{flexDirection:'column', alignItems:'start', justifyContent:'center'}}>
                    <div style={{fontWeight:'700'}}>{item.urlId}</div>
                    <div>
                        Designed by. {item.name} ({item.phone})
                    </div>
                </div>
            </div>
        )
    }

    return (
        <ChakraProvider>
            <NavBarV2 history={history} isLoggedIn={isLoggedIn} />
            <div className="contest__container">
                <div className="content__top-container" style={{fontFamily:'Pretendard'}}>
                    <div className="contest__top-title">
                        마음에 드는 템플릿에 투표해 주세요!
                    </div>
                    <div className="contest__top-desc">
                        하트를 누르면 투표가 바로 반영됩니다.<br/>
                        여러 템플릿에 투표할 수는 있지만, {isMobile && <br/>}하나의 템플릿에 여러 번 투표할 수는 없습니다.<br/>
                        5월 6일부터는 득표수가 비공개 처리됩니다! :)
                        <br/><br/>
                        <a href="https://surfee.co.kr/contest2022" style={{fontSize:'1.1em'}}> > 콘테스트 설명 보러가기</a><br/>
                        <span>위의 링크에서 제작한 페이지를 등록하실 수 있습니다.</span>
                    </div>
                </div>
                <div className="contest__search-container">
                    <div className="contest__search-box">
                        <form onSubmit={(e) => getSearch(e)}>
                            <Search size="20" color="rgb(165, 165, 165)" />
                            <input value={search} type="search" className="contest__search-input" placeholder="전화번호 뒷 4자리로 검색할 수 있어요." 
                                onChange={e => setSearch(e.currentTarget.value)}
                            />
                        </form>
                    </div>
                    <div style={{marginLeft:'5vw', zIndex:5}}>
                        <Menu>
                            <MenuButton>
                                <div className="order-button opacity-hover">
                                    {order}
                                    <ChevronDown size="15" style={{marginLeft:'2vw'}} />
                                </div>
                            </MenuButton>
                            <MenuList style={{width:'150px', zIndex:100}}>
                                <div style={{width:'150px', textAlign:'center'}}>
                                    <div className="order-option" onClick={() => {setOrder('최신순'); orderBy('new')}}>
                                        최신순
                                    </div>
                                    <div className="order-option" onClick={() => {setOrder('인기순'); orderBy('popular')}}>
                                        인기순
                                    </div>
                                </div>
                            </MenuList>
                        </Menu>
                    </div>
                </div>
                <div className="centero">
                    <div className="contest__pages-container">
                    {
                        contests.length > 0 ?
                        <div className="centero">
                            {
                                loading ? 
                                <div className="centero" style={{flexDirection:'row', flexWrap:'wrap'}}>
                                    {
                                        contests.map((item, index) => {
                                            return(
                                                <ContestCard voteList={voteList} key={index} index={index} item={item} Upvote={Upvote} img={item.img} />
                                            )
                                        })
                                    }
                                </div>
                                :
                                <>
                                    로딩 중...
                                </>
                            }
                        </div>
                        :
                        <div style={{padding:'20px', width:'100%', textAlign:'center'}}>
                            검색 결과가 없습니다.
                        </div>
                    }
                    </div>
                </div>
            </div>
            <div style={{marginTop:'100px'}}>
            </div>
            <Footer />
        </ChakraProvider>
    )
}

export default ContestPage
