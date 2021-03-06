import React, {useContext} from 'react'
import { MyContext } from '../../../../../pages/Make/MakePageV2'
import RadioCustom from '../../tools/Custom/RadioCustom'
import AlignCustom from '../../tools/Custom/AlignCustom'
import produce from 'immer';
import OpenCloseCustom from '../../tools/Custom/OpenCloseCustom'

const layoutOptions = [
    { label: '2', value: 2},
    { label: '3', value: 3},
    { label: '4', value: 4},
    { label: '5', value: 5},
]
const layoutOptions2 = [
    { label: '2', value: 2},
    { label: '3', value: 3},
    { label: '4', value: 4},
]
const mobileLayoutOptions = [
    { label: '1', value: 1},
    { label: '2', value: 2},
    { label: '3', value: 3},
]

function LayoutRFG({content}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    return (
        <OpenCloseCustom title="레이아웃" use={true} subtext={state.isPhone ? '모바일' : 'PC'}>
            {
                state.isPhone ? 
                <>
                <RadioCustom text="단 개수" options={mobileLayoutOptions} value={content.mobile.layout} func={e => action.setContents(produce(state.contents, draft => {
                        draft[state.secNum].mobile.layout = e;
                    }))} />
                <AlignCustom all value={content.mobile.align} func={e => action.setContents(produce(state.contents, draft => {
                    draft[state.secNum].mobile.align = e;
                }))} />
                </>
                :
                <>
                <RadioCustom text="단 개수" options={content.sectionTypeName === 'GallerySection' ? layoutOptions2 : layoutOptions} value={content.numOfElements} func={e => action.setContents(produce(state.contents, draft => {
                        draft[state.secNum].layout = e;
                        draft[state.secNum].numOfElements = e;
                    }))} />
                <AlignCustom all value={content.title.align} func={e => action.setContents(produce(state.contents, draft => {
                    draft[state.secNum].title.align = e;
                    draft[state.secNum].desc.align = e;
                    draft[state.secNum].elementText.align = e;
                    draft[state.secNum].align = e;
                }))} />
                </>
            }
        </OpenCloseCustom>
    )
}

export default LayoutRFG
