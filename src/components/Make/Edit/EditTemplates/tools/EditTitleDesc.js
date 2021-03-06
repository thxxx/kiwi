import React, {useState, useContext} from 'react'
import { MyContext } from '../../../../../pages/Make/MakePageV2'
import RadioCustom from '../../tools/Custom/RadioCustom'
import produce from 'immer';
import ColorCustom from '../../tools/Custom/ColorCustom'
import AlignCustom from '../../tools/Custom/AlignCustom'
import TextSizeCustom from '../../tools/func/TextSizeCustom'
import OpenCloseCustom from '../../tools/Custom/OpenCloseCustom'

function EditTitleDesc({content}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    return (
        <>
        <OpenCloseCustom title="제목" use={content.title.use} open={state.focus === 'title'}>
            <ColorCustom text="색상" value={content.title.color} func={e => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].title.color = e;
            }))} />
            <TextSizeCustom text="크기" title value={content.title.size} func={e => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].title.size = e;
            }))} />
        </OpenCloseCustom>
        <OpenCloseCustom title="본문" use={content.desc.use} open={state.focus === 'desc'}>
            <ColorCustom text="색상" value={content.desc.color} func={e => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].desc.color = e;
            }))} />
            <TextSizeCustom text="크기" desc value={content.desc.size} func={e => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].desc.size = e;
            }))} />
        </OpenCloseCustom>
        </>
    )
}

export default EditTitleDesc
