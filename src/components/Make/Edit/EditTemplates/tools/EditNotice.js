import React, { useContext } from 'react'
import { MyContext } from '../../../../../pages/Make/MakePageV2'
import produce from 'immer'
import OpenCloseCustom from '../../tools/Custom/OpenCloseCustom'
import ColorCustom from '../../tools/Custom/ColorCustom'
import TextSizeCustom from '../../tools/func/TextSizeCustom'
import RadioCustom from '../../tools/Custom/RadioCustom'

const alignOptions = [
    { label: '왼쪽', value: 'start' },
    { label: '중앙', value: 'center' },
]

const sizeOptions = [
    { label: 'Small', value: 50 },
    { label: 'Medium', value: 75 },
    { label: 'Large', value: 100 },
]


function EditNotice({content}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    return (
        <OpenCloseCustom title="유의 사항 안내" use={content.caution.use}>
           <>
            <ColorCustom text="색상" value={content.caution.color} func={e => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].caution.color = e;
            }))} />
            <RadioCustom text="정렬" options={alignOptions} value={content.caution.align} func={e => action.setContents(produce(state.contents, draft => {
                draft[state.secNum].caution.align = e;
            }))} />
            <TextSizeCustom text="크기" value={content.caution.size} func={e => action.setContents(produce(state.contents, draft => {
            draft[state.secNum].caution.size = e;
            }))} />
            </>
        </OpenCloseCustom>
    )
}

export default EditNotice
