import React, {useState} from 'react'
import RadioCustom from '../tools/RadioCustom'
import EditButtonTable from '../tools/EditButtonTable'
import EditColor from '../tools/ColorCustom'
import OpenCloseCustom from '../tools/OpenCloseCustom'
import OnOffCustom from '../tools/OnOffCustom'
import InputCustom from '../tools/InputCustom'
import ResponsiveCustom from '../tools/ResponsiveCustom'
import CheckBoxContainer from '../tools/CheckBoxContainer'
import ElementsTable from '../tools/ElementsTable'
import {EditSliderContainer} from '../tools/EditSlider'
import TextSizeCustom from '../tools/TextSizeCustom'
import BoxCustom from '../tools/BoxCustom'
import produce from 'immer';

const logoOptions = [
    { label: '로고 이미지', value: 'logo' },
    { label: '텍스트', value: 'text' },
]
const buttonOptions = [
    { label: '링크', value: 'link' },
    { label: '스크롤', value: 'scroll' },
    { label: '팝업', value: 'popup' },
]

function EditNaviSection({navi, setNavi, category}) {
    const [logo, setLogo] = useState("logo")
    const [buttonUse, setButtonUse] = useState(true)
    const [buttonFunc, setButtonFunc] = useState("link")
    const [buttonTemplate, setButtonTemplate] = useState(1)

    const elements = [
        {
            title:'버튼',
            use:navi.elements.buttonUse,
            func:() => setNavi(produce(navi, draft => {
                draft.elements.buttonUse = !navi.elements.buttonUse;
            }))
        },
        {
            title:'로고',
            use:navi.elements.logoUse,
            func:() => setNavi(produce(navi, draft => {
                draft.elements.logoUse = !navi.elements.logoUse;
            }))
        },
        {
            title:'앱 다운로드',
            use:navi.elements.appButtonUse,
            func:() => setNavi(produce(navi, draft => {
                draft.elements.appButtonUse = !navi.elements.appButtonUse;
            }))
        },
    ]

    const changeNaviTemplate = num => {
        let newNavi = JSON.parse(JSON.stringify(navi))
        newNavi.sectionTemplateNumber = num
        setNavi(newNavi);
    }

    // 템플릿 2 이미지의 경우에는
    const onChangeLogoImage = e => {
        let newNavi = JSON.parse(JSON.stringify(navi))
        const {target:{files},} = e;
        const oneFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => { // 로딩이 끝날 때 실행한다는 뜻.
            const {currentTarget:{result}} = finishedEvent;
            // newContents = state.contents.map((item, index) => index === state.secNum ? {...item, image: {...item.image, attachment : result}} : item)
            newNavi.logo= result;
        }
        reader.readAsDataURL(oneFile);
        setNavi(newNavi);
    }

    const returnFuncEdit = () => {
        switch(buttonFunc){
            case "link":
                return(
                    <div className="edit-element">
                        링크 수정
                    </div>
                )
            case "scroll":
                return(
                    <div className="edit-element">
                        스크롤 수정
                    </div>
                )
            case "popup":
                return(
                    <div className="edit-element">
                        팝업 수정
                    </div>
                )
        }
    }

    const returnButtonTemplates = () => {

    }

    return (
        <div>
            { category === 0 ? 
            <>
                <div>
                    <ElementsTable elements={elements} />
                    <OpenCloseCustom title="로고">
                        <div className="edit-element">
                            <div className="edit-element__one">
                                <div className="edit-element__left">메인 로고</div>
                                <div className="edit-element__right">
                                    <RadioCustom 
                                        options={logoOptions}
                                        onChange={(e) => setNavi({...navi, isLogo:e})}
                                        value={navi.isLogo}
                                    />
                                </div>
                            </div>
                        </div>
                        {
                            navi.isLogo === 'logo' && 
                            <div className="edit-element no-border">
                                <div className="edit-element__one">
                                    <div className="edit-element__left">로고</div>
                                    <div className="edit-element__right">
                                        <input type="file" accept="image/*" id="file" onChange={ e => onChangeLogoImage(e) } />
                                    </div>
                                </div>
                            </div>
                        }
                        <TextSizeCustom text="크기" value={navi.logo.textSize} func={e =>  setNavi(produce(navi, draft => {
                                draft.logo.textSize = e;
                            }))} />
                    </OpenCloseCustom>
                    <OpenCloseCustom title="버튼 사용">

                        <OnOffCustom text="버튼 사용" value={navi.elements.buttonUse} func={() => setNavi(produce(navi, draft => {
                            draft.elements.buttonUse = !navi.elements.buttonUse
                        }))} />
                        
                        <OnOffCustom text="CTA 버튼" value={navi.cta.use} func={() => setNavi(produce(navi, draft => {
                            draft.cta.use = !navi.cta.use
                        }))} />
                        {
                            navi.cta.use && 
                            <InputCustom value={navi.cta.link} func={(e) => setNavi(produce(navi, draft => {
                                draft.cta.link = e
                            }))} />
                        }
                        
                        <OnOffCustom text="고스트 버튼" value={navi.ghost.use} func={() => setNavi(produce(navi, draft => {
                            draft.ghost.use = !navi.ghost.use
                        }))} />
                        {
                            navi.ghost.use && 
                            <InputCustom value={navi.ghost.link} func={(e) => setNavi(produce(navi, draft => {
                                draft.ghost.link = e
                            }))} />
                        }
                        
                    </OpenCloseCustom>
                    <BoxCustom>
                        <OnOffCustom text="페이지 상단 고정" value={navi.fixed} func={e => setNavi({...navi, fixed:!navi.fixed})}/>
                        <div>
                            {
                                navi.fixed ? <p>스크롤을 내리면 내비게이션 바는 더 이상 보이지 않습니다.</p> 
                                    : 
                                <p>스크롤을 내려도 내비게이션 바가 화면 상단에 따라 다닙니다.</p>
                            }
                        </div>
                    </BoxCustom>
                </div>
            </>
            : 
            <>
            <div>
                <OpenCloseCustom title="배경색">
                    <div className="edit-element">
                        <div className="edit-element__one">
                            <div className="edit-element__left">배경색</div>
                            <div className="edit-element__right">
                                <EditColor onChange={(e) => setNavi({...navi, backgroundColor:e})} value={navi.backgroundColor} />
                            </div>
                        </div>
                    </div>
                </OpenCloseCustom>
                <OpenCloseCustom title="구분선">
                    <CheckBoxContainer text="구분선" value={navi.bottomBorder} func={e => setNavi({...navi, bottomBorder:!navi.bottomBorder})}/>
                </OpenCloseCustom>
                <OpenCloseCustom title="높이">
                    <EditSliderContainer text="높이 조정" value={navi.height} func={e => setNavi({...navi, height:e})}/>
                </OpenCloseCustom>
                <ResponsiveCustom />
            </div>
            </>
            }
        </div>
    )
}

export default EditNaviSection
