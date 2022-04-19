import React, {useState, useEffect} from 'react'
import Footer from '../../NavAndFooter/Footer'
import NavBarV2 from '../../NavAndFooter/NavBarV2'
import {Search} from '@styled-icons/boxicons-regular'
import {dbService} from '../../../tools/fbase'
import {isMobile} from 'react-device-detect'
import './ContestPage.css'
import img from '../../../tools/img/gift/gift.png'
import {
    ChakraProvider,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

const ContestCard = ({url}) => {
    return(
        <div className="excard uphover2">
            <div className="back-image-fit excard-image"
                style={{backgroundImage:`url(${img})`}}>
                <div className="excard-black">
                    {/* {
                        url.length > 1 && 
                        <div className="section-add__button" style={{width:'130px', fontSize:'14px'}} onClick={() => {
                            if(isMobile){
                                alert("죄송합니다. 현재 제작은 PC 환경에서만 가능합니다!")
                            }else{
                                setMakeModal(true);
                                setUrl(url)
                            }
                            }}>
                            템플릿 사용하기
                        </div>
                    } */}
                    <div className="excard-button-3" onClick={()=>{
                        window.open(
                                'https://surfee.co.kr/' + url,
                                '_blank' // <- This is what makes it open in a new window.
                            );
                        }}>
                        페이지 보기
                    </div>
                </div>
            </div>
            <div className="excard-title">
                {url}
            </div>
        </div>
    )
}

function ContestPage({history, isLoggedIn}) {
    const [loading, setLoading] = useState(false);
    const [contests, setContests] = useState([]);
    const [order, setOrder] = useState('최신순')

    useEffect(() => {
        getContestPages()
    },[])

    const getContestPages = async () => {
        const items = await dbService
            .collection('contest')
            .get();
        let item = items.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });
        
        console.log(item)

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

    return (
        <ChakraProvider>
            <NavBarV2 history={history} isLoggedIn={isLoggedIn} />
            <div className="contest__container">
                <div className="content__top-container">
                    <div style={{textAlign: 'center', fontSize:'2em', fontWeight:'700'}}>
                        Surfee 활용 예시
                    </div>
                    <div style={{textAlign: 'center', fontSize:'0.8em', marginTop:'30px'}}>
                        Surfee를 사용한 페이지 디자인 예시를 참고해보세요!<br/>
                        마음에 드는 템플릿📄&nbsp;으로 바로 제작할 수도 있습니다.
                    </div>
                </div>
                <div className="contest__search-container">
                    <div className="contest__search-box">
                        <Search size="20" color="rgb(165, 165, 165)" />
                        <input type="search" className="contest__search-input" placeholder="전화번호 뒷 4자리로 검색할 수 있어요."  />
                    </div>
                    <div style={{marginLeft:'20vw'}}>
                        <Menu>
                            <MenuButton>
                                <div className="font-button opacity-hover" style={{width:'200px', fontSize:'15px', textAlign:'center'}}>
                                    {order}
                                </div>
                            </MenuButton>
                            <MenuList style={{width:'200px'}}>
                                <div style={{width:'200px', textAlign:'center', zIndex:'10'}}>
                                    <div className="select-hover" style={{textAlign:'center', fontSize:'15px'}} onClick={() => setOrder('최신순')}>
                                        최신순
                                    </div>
                                    <div className="select-hover" style={{textAlign:'center', fontSize:'15px'}} onClick={() => setOrder('오래된순')}>
                                        오래된순
                                    </div>
                                </div>
                            </MenuList>
                        </Menu>
                    </div>
                </div>
                <div className="centero">
                    <div className="contest__pages-container">
                    {
                        loading ? 
                        <>
                            {
                                contests.map((item, index) => {
                                    return(
                                        <ContestCard id={index} url={item.urlId} />
                                    )
                                })
                            }
                        </>
                        :
                        <>
                            로딩 중...
                        </>
                    }
                    </div>
                </div>
            </div>
            <Footer />
        </ChakraProvider>
    )
}

export default ContestPage
