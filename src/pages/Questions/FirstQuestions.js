import React, {useState, useEffect, useContext} from 'react'
import { styled, Box } from '@mui/system';
import { MyContext } from '../Make/MakePageV2'
import ModalUnstyled from '@mui/base/ModalUnstyled';
import '../../components/Make/Modal/Modal.css';
import './FirstQuestions.css'
import {Link} from 'react-router-dom'
import {dbService} from '../../tools/fbase';
import MiniModal from '../../tools/MiniModal';
import OverflowScrolling from 'react-overflow-scrolling';
import { defaults } from '../../components/Make/SectionTypes/baseTypes'
import produce from 'immer';
import lodash from 'lodash'
import { Input } from 'antd';
import { base } from '../../components/Make/SectionTypes/baseTypes'
import ReactGa from 'react-ga'
import {
    ChakraProvider,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import OpenCloseCustom from '../../components/Make/Edit/tools/Custom/OpenCloseCustom'
//추가
import ex1 from '../../tools/img/main/ex1.png'
import ex2 from '../../tools/img/main/ex2.png'
import ex3 from '../../tools/img/main/ex3.png'
import ex4 from '../../tools/img/main/ex4.png'
import ex5 from '../../tools/img/main/ex5.png'
import ex6 from '../../tools/img/main/ex6.png'
import TemplateModal from '../../pages/ExamplePage/TemplateModal'
import {isMobile} from 'react-device-detect'
import '../../pages/ExamplePage/ExamplePage.css'
import { MultiSelect } from "react-multi-select-component";
import Select from 'react-select';
import backback from '../../tools/img/main/Elements.jpg';
import {Check} from '@styled-icons/bootstrap'
import {ChevronDown} from '@styled-icons/bootstrap'
//추가

const Div = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  box-sizing:border-box;
`;

const progressList = [
    {
        num:1,
        name:'NAME',
    },
    {
        num:2,
        name:'GOAL',
    },
    {
        num:3,
        name:'DEVICE',
    },
    {
        num:4,
        name:'DESIGN',
    },
]

const fontList = [
    { label: '노토산스', value: 'Noto Sans KR' },
    { label: '프리텐다드', value: 'Pretendard-Bold' },
    { label: '나눔스퀘어 라운드', value: 'NanumSquareRound' },
    { label: '바른 공군', value: 'ROKAFSansBold' },
    { label: '지마켓 산스', value: 'GmarketSansBold' },
    { label: '고운 돋움', value: 'GowunDodum-Regular' },
    { label: '에스코어 드림', value: 'S-CoreDream-7ExtraBold' },
    { label: '함박눈체', value : 'SF_HambakSnow'},
    { label: '카페24 서라운드', value: 'Cafe24Ssurround'},
    { label: '레페리포인트-Black', value:'LeferiPoint-BlackA'},
    { label: '고운바탕', value : 'GowunBatang-Bold'},
    { label: '여기어때 잘난체', value: 'yg-jalnan'},
]

const smallFontList = [
    { label: '노토산스', value: 'Noto Sans KR' },
    { label: '프리텐다드', value: 'Pretendard-Bold' },
    { label: '나눔스퀘어 라운드', value: 'NanumSquareRound' },
    { label: '바른 공군', value: 'ROKAFSansBold' },
    { label: '지마켓 산스', value: 'GmarketSansBold' },
    { label: '고운 돋움', value: 'GowunDodum-Regular' },
    { label: '에스코어 드림', value: 'S-CoreDream-7ExtraBold' },
    { label: '함박눈체', value : 'SF_HambakSnow'},
    { label: '카페24 서라운드', value: 'Cafe24Ssurround'},
    { label: '레페리포인트-Black', value:'LeferiPoint-BlackA'},
    { label: '고운바탕', value : 'GowunBatang-Bold'},
    { label: '여기어때 잘난체', value: 'yg-jalnan'},
]

const colorList = [
    {name:'Surfee', color:'#6c63ff'},
    {name:'빨강', color:'#FF6464'},
    {name:'노랑',color:'#FFE162'},
    {name:'머스타드노랑',color:'#FFBD35'},
    {name:'초록',color:'#91C483'},
    {name:'하늘색',color:'#5D8BF4'},
    {name:'파란색',color:'#2D31FA'},
    {name:'연보라',color:'#BAABDA'},
    {name:'진한 보라색',color:'#3B185F'},
    {name:'검정',color:'#171717'},
    {name:'진한 회색',color:'#444444'},
    {name:'갈색',color:'#C99C75'},
    {name:'상아색',color:'#EEE6C4'},
]

//추가
const exs = [
    {
        img : ex1,
        title:"Surfee 랜딩페이지",
        url:''
    },
    {
        img : ex2,
        title:"Template 2",
        url:'template1'
    },
    {
        img : ex3,
        title:"Template 3",
        url:'template2'
    },
    {
        img : ex4,
        title:"Template 4",
        url:'template3'
    },
    {
        img : ex5,
        title:"Template 5",
        url:'template5'
    },
    {
        img : ex6,
        title:"Template 6",
        url:'template4'
    },
]

const ExampleCard = ({img, title, url}) => {

    return(
        <div className="excard uphover2" style={{cursor:'pointer'}} onClick={()=>{
                window.open(
                        'https://surfee.co.kr/' + url,
                        '_blank' // <- This is what makes it open in a new window.
                    );
                }}>
            <div className="back-image-fit excard-image"
                style={{backgroundImage:`url(${img})`}}>
                {/* <div className="excard-black">
                    <Link className="excard-button-1" to={{
                        pathname:`/make`,
                        state:{
                            template:true,
                            templateNum:url,
                        }}}>
                        템플릿 사용하기
                    </Link>
                    <div className="excard-button-2" onClick={()=>{
                        window.open(
                                'https://surfee.co.kr/' + url,
                                '_blank' // <- This is what makes it open in a new window.
                            );
                        }}>
                        페이지 보기
                    </div>
                </div> */}
            </div>
            <div className="excard-title">
                {title}
            </div>
        </div>
    )
}

export const LandingPageExamples = () => {
    return(
        <div style={{ boxSizing:'border-box', flexWrap: 'wrap', marginTop:'15px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center', width:'100%'}}>
            {exs.map((item, index) => {
                return(
                    <ExampleCard key={index} img={item.img} title={item.title} url={item.url}/>
                )
            })}
        </div>
    )
}
//추가

function FirstQuestions({history}) {
    
    const [setting, setSetting] = useState(lodash.cloneDeep(defaults.setting));
    const arr = lodash.cloneDeep(base[0])
    const [contents, setContents] = useState([ arr, lodash.cloneDeep(base[1]), lodash.cloneDeep(base[4]), lodash.cloneDeep(base[5]), lodash.cloneDeep(base[6]) ])
    const [navi, setNavi] = useState(lodash.cloneDeep(defaults.navi));
    const [foot, setFoot] = useState(lodash.cloneDeep(defaults.foot));
    // 모달
    const [cnum, setCnum] = useState(1);
    const [title, setTitle] = useState("");
    const [device, setDevice] = useState("");
    const [font, setFont] = useState('');
    //const [smallFont, setSmallFont] = useState('');
    const [color, setColor] = useState('');
    const [alarm, setAlarm] = useState(false);
    const [urlId, setUrlId] = useState('');
    const [type, setType] = useState('maintemplate');
    const [start, setStart] = useState(false);
    const [miniModal, setMiniModal] = useState(false);
    const [miniModalText, setMiniModalText] = useState('');

    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    useEffect(() => {
        // to report page view
        ReactGa.initialize('UA-213792742-1');
        ReactGa.pageview(`/questions`);
    },[])

    const handleClose = async () => {
        // 마지막에는 입력한 정보도 저장한다. 근데 한명껄 여러번 저장해서 헷갈리지 않게..!

        await dbService.collection('question_answers').add({
            createdAt: new Date(),
        })
        // setOpen(false)
    };

    const onUrlChange = e => {
        if (isNotNumber(e.nativeEvent.data)){ 
            setAlarm(false)
            setUrlId(e.currentTarget.value);
        }else{
            setAlarm(true)
            e.preventDefault(); 
            return null; 
        }
    }

    const nextAndSetTemplates = async (e) => {
        if(type === ""){
            setMiniModal(true);
            setMiniModalText('위의 보기 중 한가지를 선택해 주세요.');
            return
        }else{
            setCnum(cnum + 1);
        }
    }

    //추가
    const SetTemplates = async (e) => {

        setCnum(cnum + 1);
        
    }

    const nextAndSetDesign = async (e) => {

        setCnum(cnum + 3);
    
    }
    
    const nextAndSetFont2 = async e => {
        if(font === '' || color === ''){
            setMiniModal(true);
            setMiniModalText('위의 보기 중 한가지를 선택해 주세요.');
            return
        }else{

            setCnum(cnum + 2);
        }
    }
    //추가

    const nextAndSetTemplate = async (e) => {
        if(device === ""){
            setMiniModal(true);
            setMiniModalText('위의 보기 중 한가지를 선택해 주세요.');
            return
        }else{
            setCnum(cnum + 1);
        }
    }

    const nextAndSetFont = async e => {
        if(font === '' || color === ''){
            setMiniModal(true);
            setMiniModalText('위의 보기 중 한가지를 선택해 주세요.');
            return
        }else{

            setCnum(cnum + 1);
        }
    }
    const nextAndSetDone = async e => {

        const urlDatas = await dbService
            .collection("saved-page")
            .where("urlId", "==", urlId)
            .get(); // uid를 creatorId로 줬었으니까.
        
        let urlData = urlDatas.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });

        if(urlId === ''){
            e.stopPropagation()
            e.preventDefault()
            setMiniModal(true);
            setMiniModalText('URL을 입력해 주세요. 이후 페이지에서 수정가능합니다.');
            return
        }else if(urlData.length > 0){
            e.stopPropagation()
            e.preventDefault()
            setMiniModal(true);
            setMiniModalText('이미 존재하는 url입니다. 다른 url을 사용해 주세요.');
            return;
        }else{
            setStart(true);
            setMiniModal(true);
            setMiniModalText('사용 가능한 url입니다.');
            const defaults = await dbService
                .collection("saved-page")
                .where("urlId", "==", type)
                .get(); // ui

            let defaultTemplate = defaults.docs.map(doc => {
                return({...doc.data(), id:doc.id})
            });

            let opacityColor = color + '';
    
            defaultTemplate[0].navi.title = ' '+title+' ';
            defaultTemplate[0].navi.backgroundColor = color+'30';
            defaultTemplate[0].setting.title = title;
            defaultTemplate[0].setting.cta.backgroundColor = color;
            defaultTemplate[0].setting.color = opacityColor;
            defaultTemplate[0].setting.fta.backgroundColor = color;
            defaultTemplate[0].setting.ghost.borderColor = color;
            defaultTemplate[0].setting.ghost.color = color;
            defaultTemplate[0].setting.urlId = urlId;
            defaultTemplate[0].setting.font = font;
            //defaultTemplate[0].setting.smallFont = smallFont;
            defaultTemplate[0].foot.copyright.text = title;

            defaultTemplate[0].contents = defaultTemplate[0].contents.map((doc, index) => {
                if(doc.sectionTypeName === 'HeroSection' || doc.sectionTypeName === 'DetailSection' || doc.sectionTypeName === 'ApplySection' ){
                    doc.backgroundColor = opacityColor+'30';
                }
                /*if(index === 1 && doc.sectionTypeName === 'TextSection' ){
                    doc.backgroundColor = opacityColor;
                }*/
                return doc;
            })

            if(defaultTemplate){
                setContents(defaultTemplate[0].contents);
                setNavi(defaultTemplate[0].navi);
                setFoot(defaultTemplate[0].foot);
                setSetting(defaultTemplate[0].setting);
            }
            
            const body = {
                type: type,
                name: navi.title,
                font: font,
                color:color
            }

            const done = await dbService.collection('after-questions').add(body);

            if(JSON.stringify([defaultTemplate[0].contents, defaultTemplate[0].navi, defaultTemplate[0].foot, defaultTemplate[0].setting, false, '']).length > 48000){
                // 임시 방편으로 큰 데이터는 건너뛰도록 조치.
                handleClose()
            }else{
                localStorage.setItem('temp', JSON.stringify([defaultTemplate[0].contents, defaultTemplate[0].navi, defaultTemplate[0].foot, defaultTemplate[0].setting, false, '']));
                handleClose()
            }
        }
    }

    const ModalBox = (props) => {
        return(
            <div className="modal-flex-column" style={{paddingTop:`${props.small ? '80px' : '50px'}`}}>
                <div className="modal-title">
                    {props.title}
                </div>
                <div className="modal-main-card">
                    {props.children}
                </div>
            </div>
        )
    }

    const isNotNumber = (v) => {
        const regExp = /[a-z0-9]/g; 
        return regExp.test(v);
    }

    //추가
    const [makeModal, setMakeModal] = useState(false)
    const [url, setUrl] = useState('')

    const LandingPageTemplates = () => {
        return(
            <div style={{ boxSizing:'border-box', flexWrap: 'wrap', marginTop:'15px', display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'center', width:'100%'}}>
                {exs.map((item, index) => {
                    return(
                        <ExampleCardInTemplate key={index} img={item.img} title={item.title} url={item.url}/>
                    )
                })}
            </div>
        )
    }

    const ExampleCardInTemplate = ({img, title, url}) => {

        return(
            <div className="excard uphover2">
                <div className="back-image-fit excard-image"
                    style={{backgroundImage:`url(${img})`}}>
                    <div className="excard-black">
                        {
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
                        }
                        {/* <Link className="excard-button-1" to={{
                            pathname:`/make`,
                            state:{
                                template:true,
                                templateNum:url,
                            }}}>
                            템플릿 사용하기
                        </Link> */}
                        <div className="excard-button-2" onClick={()=>{
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
                    {title}
                </div>
            </div>
        )
    }

    const FontSelect = () => {
        return(
        <div className="edit-element" style={{flexDirection:'row', justifyContent: 'center'}}>
            <div className="right" style={{alignContent:'center'}}>
            <Menu>
                <MenuButton className="font-button opacity-hover" style={{fontFamily:`${setting.font}`, width:'250px'}}>
                    {fontList.filter(doc => doc.value === setting.font)[0].label}
                    <ChevronDown size="15" style={{position:'absolute', right:'12px'}}/>
                </MenuButton>
                <MenuList>

                <div style={{height:'250px'}}>
                    <OverflowScrolling className='overflow-scrolling2'>
                    {fontList.map((item, index) => {
                        return(
                            <MenuItem className={item.value === setting.font ? 'select-hover clicked' : 'select-hover'} onClick={(e) => {setSetting(produce(setting, draft => {
                                draft.font = item.value
                                setFont(item.value);
                            }))}} style={{fontFamily: `${item.value}`, width:'250px'}}>
                                <div className="left" style={{width:'70%'}}>
                                    {item.label}
                                </div>
                                {
                                    item.value === setting.font && 
                                    <div className="right">
                                        <Check size="20"/>
                                    </div>
                                }
                            </MenuItem>
                        )
                    })}
                    </OverflowScrolling>
                </div>
                </MenuList>
            </Menu>
            </div>
        </div>
        )
    }
    const ColorSelect = () => {
        return(
        <div className="edit-element" style={{flexDirection:'row', justifyContent: 'center'}}>
            <div className="right" style={{alignContent:'center'}}>
            <Menu>
                <MenuButton className="font-button opacity-hover" style={{fontFamily:`Noto Sans KR`, fontWeight: '700', color:`${setting.color}`, width:'250px'}}>
                    {colorList.filter(doc => doc.color === setting.color)[0].name}
                    <ChevronDown size="15" style={{position:'absolute', right:'12px'}}/>
                </MenuButton>
                <MenuList>

                <div style={{height:'250px'}}>
                    <OverflowScrolling className='overflow-scrolling2'>
                    {colorList.map((item, index) => {
                        return(
                            <MenuItem className={item.color === setting.color ? 'select-hover clicked' : 'select-hover'} onClick={(e) => {setSetting(produce(setting, draft => {
                                draft.color = item.color
                                setColor(item.color);
                            }))}} style={{fontFamily:`${item.font}`, color: `${item.color}`, width:'250px'}}>
                                <div style={{backgroundColor:`${item.color}`, width:'25px', height:'25px', borderRadius:'5px'}}>
                                                    
                                </div>
                                <div className="left" style={{width:'50%'}}>
                                    {item.color} 
                                </div>

                                {
                                    item.color === setting.color && 
                                    <div className="right">
                                        <Check size="20"/>
                                    </div>
                                }
                            </MenuItem>
                        )
                    })}
                    </OverflowScrolling>
                </div>
                </MenuList>
            </Menu>
            </div>
        </div>
        )
    }
    /*const SmallFontSelect = () => {
        return(
        <div className="edit-element" style={{flexDirection:'row'}}>
            <div className="left" style={{width:'20%'}}>본문</div>
            <div className="right" style={{width:'80%'}}>
            <Menu>
                <MenuButton className="font-button opacity-hover" style={{fontFamily:`${setting.smallFont}`, width:'250px'}}>
                    {smallFontList.filter(doc => doc.value === setting.smallFont)[0].label}
                    <ChevronDown size="15" style={{position:'absolute', right:'12px'}}/>
                </MenuButton>
                <MenuList>

                <div style={{height:'250px'}}>
                    <OverflowScrolling className='overflow-scrolling2'>
                    {smallFontList.map((item, index) => {
                        return(
                            <MenuItem className={item.value === setting.smallFont ? 'select-hover clicked' : 'select-hover'} onClick={(e) => {setSetting(produce(setting, draft => {
                                draft.smallFont = item.value
                            }))}} style={{fontFamily: `${item.value}`, width:'250px'}}>
                                <div className="left" style={{width:'70%'}}>
                                    {item.label}
                                </div>
                                {
                                    item.value === setting.smallFont && 
                                    <div className="right">
                                        <Check size="20"/>
                                    </div>
                                }
                            </MenuItem>
                        )
                    })}
                    </OverflowScrolling>
                </div>
                </MenuList>
            </Menu>
            </div>
        </div>
        )
    }*/
    //추가

    const content = () => {
        switch(cnum){
            case 1:
                return(
                    <ModalBox 
                        title={<><div className="modal-title-test" style={{marginTop: '35px'}}>
                            안녕하세요✋</div></>}>
                        <div className="modal-subtitle-test" style={{marginBottom: '0.5%'}}>
                            제작방법을 선택해주세요 🚀
                        </div>
                        <>
                            <div className="modal-button-container">
                                <div className="question-button1" onClick={e => setCnum(cnum + 1)} style={{flexDirection: 'column', marginRight: '2%', width:'250px', height:'250px', textAlign:'center',  padding:'30px 30px'}}>
                                    <div style={{color: '#6c63ff', fontSize:'1.1em', fontWeight:'700'}}>
                                    기본 템플릿<br/>
                                    이용하기<br/>
                                    🖌</div>
                                    <div style={{marginTop: '15%', fontSize: '10px', fontWeight:'400'}}>
                                    기본으로 제공되는 템플릿을 활용하여<br/> 개성있는 나만의 페이지를 제작해보세요!
                                    </div>
                                </div>
                                <div className="question-button2" onClick={e => nextAndSetDesign()} style={{color: 'white', flexDirection: 'column', marginRight: '2%', width:'250px', height:'250px', textAlign:'center',  padding:'30px 30px'}}>
                                    <div style={{fontSize:'1.1em', fontWeight:'700'}}>
                                    디자인 템플릿<br/>
                                    이용하기<br/>
                                    ️💡</div>
                                    <div style={{marginTop: '15%', fontSize: '10px', fontWeight:'400'}}>
                                    다양한 디자인 템플릿을 이용하여<br/> 완성도 높은 나만의 페이지를<br/> 제작해보세요!
                                    </div>
                                </div>
                            </div>
                        </>
                    </ModalBox>
                )
                break;

            case 2:
                return(
                    <div className="modal-flex-column" style={{paddingTop:'80px', backgroundImage:`url(${backback})`}}>
                        <div className="modal-title-test" style={{marginBottom: '3%'}}>
                            코딩없이 만드는<br/>
                            나만의 페이지 <span style={{color:'#6C63FF'}}>Surfee</span>
                        </div>
                        <div className="modal-subtitle-test" style={{marginBottom: '0.5%'}}>
                            페이지의 이름✏️을 지어볼까요?
                        </div>
                        
                        <div className="modal-main-card">
                        <form onSubmit={() => setCnum(cnum + 1)} style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Input 
                                className="input-holder input-focus" 
                                placeholder="페이지 이름이 로고 자리에 들어갑니다." 
                                value={title} 
                                onChange={e => setTitle(e.currentTarget.value)} />
                        </form>
                        <div className="modal-mini-text">
                            수정 가능하니 편하게 정해주세요 :)
                        </div>
                        <div className="modal-button-container" style={{flexDirection:'column'}}>
                            
                            <div className="modal-move-button"
                                onSubmit={e => setCnum(cnum + 1)} style={{visibility:`${title.length > 0 ? 'visible' : 'hidden'}`, display:'flex', marginTop:'2%'}}
                                onClick={e => setCnum(cnum + 1)}>다음</div>  
                            </div>
                            <div className="modal-move-button-back" onClick={e => setCnum(cnum - 1)}>이전</div>
                        </div>
                    </div>
                )
                break;

            case 3:
                return(
                    <OverflowScrolling className="scroll" style={{paddingBottom:'50px'}}>
                    <ModalBox title={<> <div className="modal-title-test">기본템플릿의<br/>글씨체와 메인색상을 정해볼까요?</div> </>}>
                        <div className="modal-subtitle-test" style={{marginBottom: '3%'}}>
                        이곳에서 선택한 글씨체와 색상은 <br/> 제작화면에서 수정가능하니 편하게 선택해주세요😊
                        </div>
                        <div className="modal-column" style={{flexDirection: 'row'}}>
                            <div className="modal-column" style={{float: 'left', width: '30%'}}>
                                <div className="modal-fc-select-title">
                                    글씨체
                                </div>
                                {/*추가*/}
                            
              
                                    <ChakraProvider>
                                        {FontSelect()}
                                    </ChakraProvider>

                                <div style={{marginTop: '2%', fontSize: '12px',  color:'white'}}>
                                    메인 색상을 지정해두시면, <br/>나중에 글자색 또는 배경색을 수정하실 때 <br/> 해당 색상으로 편하게 변경하실 수 있어요!
                                </div>
                                    
                            </div>
                            <div className="modal-column" style={{float: 'left', width: '30%'}}>
                                {/*추가*/}   
                                <div className="modal-fc-select-title">
                                    메인 색상
                                </div>
                                {/*추가*/}
                            
              
                                    <ChakraProvider>
                                        {ColorSelect()}
                                    </ChakraProvider>

                                <div style={{marginTop: '2%', fontSize: '12px'}}>
                                    메인 색상을 지정해두시면, <br/>나중에 글자색 또는 배경색을 수정하실 때 <br/> 해당 색상으로 편하게 변경하실 수 있어요!
                                </div>
                    
                                {/*추가*/}  
                            </div>    
                        </div>
                        <div className="modal-button-container">
                            <div className="modal-move-button-back" onClick={e => setCnum(cnum - 1)}>이전<span style={{color:'rgba(0,0,0,0)'}}>3</span></div>
                            <div className="modal-move-button" onClick={e => nextAndSetFont2()}>다음<span style={{color:'rgba(0,0,0,0)'}}>3</span></div>  
                        </div>
                    </ModalBox>
                    </OverflowScrolling>
                )

            case 4:
                return(
                    <ModalBox
                    title={<>
                        <div className="modal-title-test" >디자인 템플릿</div>
                    </>}>
                        <div className="modal-subtitle-test" style={{marginBottom: '5%'}}>
                        마음에 드는 템플릿을 골라보세요😊
                        </div>
                        <>
                        <div className="modal-template-title" style={{width:'84%', marginBottom: '1%'}}>
                            🎉<span className="modal-template-underline" style={{fontSize:'32px'}}>이벤트/마케팅</span>
                        </div>
                        {/*<div className="modal-template-subtitle" style={{width:'82%'}}>
                        도전적인 아이디어를 빠르게 검증해보고 싶은데<br/> 다른 팀의 리소스를 끌어다 쓰기에는 확신이 없을 때,<br/> Surfee로 가볍고 빠르게 도전해 보세요.
                        </div>*/}
                        <div style={{fontSize: '28px'}}>
                            <div className="main-page-section1" style={{paddingTop: '0%', flexDirection:'column'}}>
                                <LandingPageTemplates />
                            </div>
                        </div>
                        <div className="modal-template-title" style={{width:'84%', marginBottom: '1%', marginTop: '4%'}}>
                        📢<span className="modal-template-underline" style={{fontSize:'32px'}}>고객모집</span>
                        </div>
                        {/*<div className="modal-template-subtitle" style={{width:'82%'}}>
                        도전적인 아이디어를 빠르게 검증해보고 싶은데<br/> 다른 팀의 리소스를 끌어다 쓰기에는 확신이 없을 때,<br/> Surfee로 가볍고 빠르게 도전해 보세요.
                        </div>*/}
                        <div style={{fontSize: '28px'}}>
                            <div className="main-page-section1" style={{paddingTop: '0%', flexDirection:'column'}}>
                                <LandingPageTemplates />
                            </div>
                        </div>
                        <div className="modal-template-title" style={{width:'84%', marginBottom: '1%', marginTop: '4%'}}>
                        🔎<span className="modal-template-underline" style={{fontSize:'32px'}}>고객검증</span>
                        </div>
                        {/*<div className="modal-template-subtitle" style={{width:'82%'}}>
                        도전적인 아이디어를 빠르게 검증해보고 싶은데<br/> 다른 팀의 리소스를 끌어다 쓰기에는 확신이 없을 때,<br/> Surfee로 가볍고 빠르게 도전해 보세요.
                        </div>*/}
                        <div style={{fontSize: '28px'}}>
                            <div className="main-page-section1" style={{paddingTop: '0%', flexDirection:'column'}}>
                                <LandingPageTemplates />
                            </div>
                        </div>
                        <div className="modal-template-title" style={{width:'84%', marginBottom: '1%', marginTop: '4%'}}>
                        😎<span className="modal-template-underline" style={{fontSize:'32px'}}>포트폴리오</span>
                        </div>
                        {/*<div className="modal-template-subtitle" style={{width:'82%'}}>
                        도전적인 아이디어를 빠르게 검증해보고 싶은데<br/> 다른 팀의 리소스를 끌어다 쓰기에는 확신이 없을 때,<br/> Surfee로 가볍고 빠르게 도전해 보세요.
                        </div>*/}
                        <div style={{fontSize: '28px'}}>
                            <div className="main-page-section1" style={{paddingTop: '0%', flexDirection:'column'}}>
                                <LandingPageTemplates />
                            </div>
                        </div>
                        <TemplateModal url={url} open={makeModal} setOpen={setMakeModal} />
                        <div className="modal-button-container">
                            <div className="modal-move-button-back" style={{marginBottom:'5%'}} onClick={e => setCnum(cnum - 3)}>돌아가기</div>
                        </div>
                        </>
                    </ModalBox>
                )
                break;

            case 5:
                return(
                    <div className="modal-flex-column" style={{paddingTop:'80px'}}>
                        <div className="modal-title-test">
                            마지막으로, <span style={{color:'#6C63FF'}}>{title}</span>의 <br/>
                            페이지 주소를 설정해주세요!                            
                        </div>
                        <div className="modal-main-card">
                            <div className="url-input-box" style={{marginTop: '2.5%'}}>
                                <div className="modal-title" style={{fontSize:'23px'}}>
                                    https://surfee.co.kr/<input className="input-holder input-focus" style={{width: '25vw', padding:'0px 15px', marginLeft: '10px'}} placeholder="영문 소문자와 숫자만 사용 가능합니다." value={urlId} 
                                    onChange={e => {
                                        setStart(false);
                                        onUrlChange(e);
                                    }} />
                                </div>
                                <Button colorScheme='#6c63ff' className="dup-button" onClick={nextAndSetDone}>
                                    중복 확인
                                </Button>
                            </div>
                            {alarm ? (
                                <div className="text-alarm">
                                    ⚠ 영문 소문자와 숫자만 사용가능합니다.
                                </div>
                            ):(<div className="text-alarm"> </div>)}
                            <div style={{color:'gray', paddingLeft:'0%',marginTop:'1%', fontSize:'14px', textAlign:'center', fontFamily:'Pretendard-Regular'}}>
                                개인 도메인 연결은 다음 버전에 업데이트할 예정입니다.
                                수정 가능하니 편하게 설정해 주세요 :)
                            </div>
                            <div className="modal-button-container">
                                <div className="modal-move-button-back" onClick={e => setCnum(cnum - 2)}>이전<span style={{color:'rgba(0,0,0,0)'}}>5</span></div>
                                {
                                    start ? 
                                    <Link to={{
                                        pathname: "/make", 
                                        state: {
                                            now: true,
                                            isPhone: device === 'mobile',
                                        }
                                    }} className="modal-move-button">시작하기</Link> 
                                    : 
                                    <div className="modal-move-button-back">시작하기</div>
                                }
                            </div>
                        </div>
                    </div>
                )
                break;
        }
    }

    return (
        <Div>
            <div className="progress-bar__container">
                <div onClick={() => 
                    history.go(-1)} className="arrow-back">
                    ←
                </div> 
                {progressList.map((item, index) => {
                    let backColor = 'rgba(100,100,100,0)'
                    let fontColor = '#C4C4C4'
                    let fontColor2 = 'rgba(0,0,0,0.6)'

                    if(item.num < cnum){
                        backColor = 'linear-gradient(180deg, #9281FF 0%, #6C63FF 100%)'
                        fontColor = "white"
                        fontColor2 = 'black'
                    }else if(item.num === cnum){
                        backColor = 'white'
                        fontColor = "#6C63FF"
                        fontColor2 = "#6C63FF"
                    }

                    return(
                        <span style={{display:'flex', flexDirection:'column', margin:'3%', alignItems: 'center', justifyContent: 'center'}}>
                            <span className="list-component" style={{background:`${backColor}`, color:`${fontColor}`}}>{item.num}</span>
                        </span>
                    )
                })}
            </div>
            <ChakraProvider className="center-column">
                {content()}
            </ChakraProvider>
            <MiniModal open={miniModal} setOpen={setMiniModal} text={miniModalText} />
        </Div>
    )
}

export default FirstQuestions
