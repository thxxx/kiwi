import React, {useState, useContext} from 'react'
import { MyContext } from '../../../../pages/Make/MakePageV2'
import EditTopBar from '../tools/EditTopBar'
import './EditSetting.css'
import '../EditTemplates/Edit.css'

function EdtirSetting({setting, setSetting}) {
    const [category, setCategory] = useState(0)
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

    const changeFtaUse = () => {
        setSetting({...setting, fta:{...setting.fta, use:!setting.fta.use}});
    }

    const changeFtaText = (e) => {
        setSetting({...setting, fta:{...setting.fta, text:e.currentTarget.value}});
    }

    const changeFtaColor = e => {
        setSetting({...setting, fta:{...setting.fta, color:e.currentTarget.value}});
    }

    const returnTable = () => {
        switch(category){
            case 0:
                // case 0은 디자인 수정
                return(
                    <>
                    <div>
                        기본
                        <div>
                            urlId
                        </div>
                        <div>
                            <input type="text" value={setting.urlId} onChange={e => setSetting({...setting, urlId:e.currentTarget.value})} />
                        </div>
                    </div>
                    </>
                )

            case 1:
                // case 1은 템플릿 변경
                return(
                    <>
                    <div>
                        <div>
                            버튼
                        </div>
                        <div>
                            <div>
                                <span>FTA</span>
                                <span><input type="checkbox" value={setting.fta.use} onChange={() => changeFtaUse()} /></span>
                            </div>
                            {setting.fta.use && 
                                <div>
                                    <div>
                                        <span>link</span>
                                        <span>
                                            <input value={setting.fta.text} onChange={(e) => changeFtaText(e)} />
                                        </span>
                                    </div>
                                    <div>
                                        <span>색상</span>
                                        <span>
                                            <input type="color" value={setting.fta.text} onChange={(e) => changeFtaColor(e)} />
                                        </span>
                                    </div>
                                </div>}
                        </div>
                        <div>
                            버튼
                        </div>
                    </div>
                    </>
                )

            default:
                return(
                    <div className="section-make__inner-container">
                    </div>
                )
        }
    }

    return(
        <>
            <EditTopBar category={category} setCategory={setCategory} />
            {returnTable()}
        </>
    )
}

export default EdtirSetting