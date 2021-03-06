import React, {useContext, useState, useEffect} from 'react';
import { MyContext } from '../../../../pages/Make/MakePageV2';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import produce from 'immer';
import AddingSection from '../../Modal/AddingSection';
import {sectionIcons} from './ContentsIcons';
import {CustomSwitch2} from '../tools/Custom/OnOffCustom'
import lodash from 'lodash'
import {base} from '../../SectionTypes/baseTypes'
import './EditContents.css';
// import PlusIcon from '../../../../tools/img/plusButton.png';

const BCOLOR = 'rgba(230,230,230,0)'

const getItemStyle = (isDragging, draggableStyle, backColor) => {
    return {
        userSelect: "none",
        textAlign: "right",

        // change background color if dragging
        background: isDragging ? "white" : BCOLOR,
        boxShadow: isDragging ? "2px 4px 20px #E8F0F9" : 'none',

        // styles we need to apply on draggables
        ...draggableStyle
    };
};

const sectionDescriptions = {
    'HeroSection':'이미지를 이용한 설명과 버튼을 사용가능합니다',
    'DetailSection':'이미지를 이용한 설명이 가능합니다',
    'CtaSection':'5개의 입력 혹은 앱스토어 버튼을 사용가능합니다',
    'ApplySection':'최대 5개의 입력을 받을 수 있습니다',
    'AppDownloadSection':'앱스토어 버튼을 사용가능합니다',
    'FeaturesSection':'여러개의 특징을 설명할 수 있습니다',
    'ReviewSection':'별점을 사용해 추천사를 적기 유용합니다',
    'QnaSection':'질문과 답변을 적을 수 있습니다',
    'TextSection':'글만을 적을 수 있습니다',
    'GallerySection':'이미지를 강조하여 설명하는데 유용합니다',
    'VideoSection':'동영상을 보여줄 수 있습니다',
    'MockupSection':'휴대폰과 노트북에 이미지를 넣을 수 있습니다',
}

function EditContents({setting, navi, setNavi, foot, setFoot, elementsRef}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.
    const [addOpen, setAddOpen] = useState(false);

    const handleChange = result => {

        if (!result.destination) {
            return
        }else{
            let tempContents = lodash.cloneDeep(state.contents)
            const item = tempContents.splice(result.source.index, 1)
            action.setContents([].concat(tempContents.slice(0,result.destination.index), item, tempContents.slice(result.destination.index)))

            // action.setContents(produce(state.contents, draft => {
            //     const [reorderedItem] = draft.splice(result.source.index, 1);
            //     draft.splice(result.destination.index, 0, reorderedItem);
            // }));
        }
    }

    const optionButton = (num) => {
        return(
            <div className="content__button"
                onClick={() => {
                    action.setSecNum(num)
                }}>
                수정
            </div>
        )
    }
 
    const deleteSection = (index) => {

        if(index === 0){
            const tempContents = lodash.cloneDeep(state.contents)
            action.setContents([].concat(tempContents.slice(1)))
        }else if(index === state.contents.length - 1){
            action.setContents(produce(state.contents, draft => {
                let tt = draft
                tt.pop()
                draft = tt
            }))
        }else{
            const tempContents = lodash.cloneDeep(state.contents)
            action.setContents([].concat(tempContents.slice(0,index), tempContents.slice(index+1)))
        }
    }

    const pasteThisSection = (content, index) => {
        const tempContents = lodash.cloneDeep(state.contents)

        action.setContents([].concat(tempContents.slice(0,index), [content], tempContents.slice(index)))
    }

    // action.setContents([...tempContents, content]) 는 에러 X 
    // action.setContents(tempContents) 는 에러 X 
    // action.setContents([...tempContents.slice(0,3), content, ...tempContents.slice(0,3)]) 는 에러 X
    // action.setContents([...tempContents.slice(0, index), content, ...tempContents.slice(0,index)]) 는 에러 X
    // // action.setContents([...tempContents.slice(0, index), content, ...tempContents.slice(index, index + 2)]) 는 에러 X

    return (
        <div>
            <div className="back__container" />
            <div style={{width:'100%', display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
                <div className="one-contents-draggable" style={{backgroundColor:`${BCOLOR}`}}>
                    <div className="center-row hoverback one-contents__inner" style={{padding:'20px 10px'}}>
                        <div className="left">
                            <div className="content__name">
                                내비게이션 바
                            </div>
                            <div style={{paddingLeft:'7%'}}>
                                <CustomSwitch2 value={navi.use} onChange={e => setNavi(produce(navi, draft => {
                                    draft.use = !navi.use
                                })) }/>
                            </div>
                        </div>
                        <div className="right">
                            {optionButton(50)}
                        </div>
                    </div>   
                </div>
                <div className="comment">
                    <div>
                        클릭 시 해당 섹션을 보여줍니다.
                    </div>
                    <div>
                        <span style={{fontWeight:'700', fontSize:'1em'}}>드래그 앤 드랍</span>으로 순서를 변경할 수 있습니다
                    </div>
                </div>
                <DragDropContext onDragEnd={handleChange}>
                    <Droppable droppableId="sectionsss">
                        {(provided) => 
                            ( <>
                            <div {...provided.droppableProps} ref={provided.innerRef} style={{width:'100%', display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
                                {state.contents.map((item, index) => {
                                    return(
                                        <Draggable draggableId={String(index)} key={index} index={index} style={{width:'100%'}}>
                                            {(provided, snapshot) => {
                                                if(index === 0){
                                                        return(
                                                            <>
                                                            <div style={{marginTop: '30px'}}></div>
                                                            {/* <img className="fixed-icon" src={PlusIcon} alt="아이콘"/> */}
                                                                <div
                                                                    className="one-contents-draggable"
                                                                    ref={provided.innerRef}
                                                                    {...provided.dragHandleProps}
                                                                    {...provided.draggableProps}
                                                                    onClick={() => {window.scrollTo({top:(elementsRef.current[index].current.offsetTop - window.innerHeight/5), left:0, behavior:'smooth'})}}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style,
                                                                    )}>
                                                                        <div className="center-column hoverback one-contents__inner">
                                                                            <div className="center-row">
                                                                                <div className="left">
                                                                                    {
                                                                                        sectionIcons.filter(doc => doc.sectionTypeName === item.sectionTypeName)[0].icon
                                                                                    }
                                                                                    <div className="content__name">
                                                                                        {item.name}
                                                                                    </div>
                                                                                </div>
                                                                                <div className="right">
                                                                                    {optionButton(index)}
                                                                                </div>
                                                                            </div>
                                                                            <div className="center-row">
                                                                                <div className="left" style={{width:'92%', textAlign:'left', color:'#737a86', display:'block', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                                                    {/* {item.title.text} */}
                                                                                    {sectionDescriptions[item.sectionTypeName]}
                                                                                </div>
                                                                                <div className="right">
                                                                                    <div className="content__button cb-delete"
                                                                                        onClick={() => {
                                                                                            const yes = window.confirm("정말 삭제하시겠습니까?");
                                                                                            if(yes){
                                                                                                deleteSection(index);
                                                                                            }
                                                                                        } }>
                                                                                        삭제
                                                                                    </div>
                                                                                    <div className="content__button cb-duplicate"
                                                                                        onClick={() => pasteThisSection(lodash.cloneDeep(state.contents[index]), index) }>
                                                                                        복제
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>   
                                                                </div>
                                                                {/* <div className="centera small-button__container">
                                                                    <span className="centera make-section-button__small">
                                                                        +
                                                                    </span>
                                                                </div> */}
                                                            </>
                                                        )}
                                                        else{
                                                            return(
                                                            <>
                                                            <div
                                                                className="one-contents-draggable"
                                                                ref={provided.innerRef}
                                                                {...provided.dragHandleProps}
                                                                {...provided.draggableProps}
                                                                onClick={() => {window.scrollTo({top:(elementsRef.current[index] && elementsRef.current[index].current.offsetTop - window.innerHeight/5), left:0, behavior:'smooth'})}}
                                                                style={getItemStyle(
                                                                snapshot.isDragging,
                                                                provided.draggableProps.style,
                                                                )}>
                                                                    <div className="center-column hoverback one-contents__inner">
                                                                        <div className="center-row">
                                                                            <div className="left">
                                                                                {
                                                                                    sectionIcons.filter(doc => doc.sectionTypeName === item.sectionTypeName)[0].icon
                                                                                }
                                                                                <div className="content__name">
                                                                                    {item.name}
                                                                                </div>
                                                                            </div>
                                                                            <div className="right">
                                                                                {optionButton(index)}
                                                                            </div>
                                                                        </div>
                                                                        <div className="center-row">
                                                                            <div className="left" style={{width:'92%', textAlign:'left', color:'#737a86', display:'block', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                                                                                {/* {item.title.text} */}
                                                                                {sectionDescriptions[item.sectionTypeName]}
                                                                            </div>
                                                                            <div className="right">
                                                                                <div className="content__button cb-delete"
                                                                                    onClick={() => {
                                                                                        const yes = window.confirm("정말 삭제하시겠습니까?");
                                                                                        if(yes){
                                                                                            deleteSection(index);
                                                                                        }
                                                                                    } }>
                                                                                    삭제
                                                                                </div>
                                                                                <div className="content__button cb-duplicate"
                                                                                    onClick={() => pasteThisSection(lodash.cloneDeep(state.contents[index]), index) }>
                                                                                    복제
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>   
                                                                </div>
                                                            </>
                                                        ) }}}
                                                </Draggable>
                                            )
                                        })}
                                {provided.placeholder}
                            </div>
                            </>
                            )
                        }
                    </Droppable>
                </DragDropContext>
                <div className="center-row">
                    <div className="section-add__button" onClick={() => { setAddOpen(true); }}
                        style={{margin:'15px'}} >
                        + 섹션 추가하기
                    </div>
                </div>
                <div className="one-contents-draggable">
                    <div className="center-row hoverback one-contents__inner" style={{padding:'20px 10px'}}>
                        <div className="left">
                            <div className="content__name">
                                푸터 바
                            </div>
                            <div style={{paddingLeft:'7%'}}>
                                <CustomSwitch2 value={foot.use} onChange={e => setFoot(produce(foot, draft => {
                                    draft.use = !foot.use
                                })) }/>
                            </div>
                        </div>
                        <div className="right">
                            {optionButton(51)}
                        </div>
                    </div>   
                </div>
            </div>
            <AddingSection setting={setting} open={addOpen} setOpen={setAddOpen} foot={foot}/>
        </div>
    )
}

export default EditContents
