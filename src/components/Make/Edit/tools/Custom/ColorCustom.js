import React, {useContext, useState, useRef} from 'react'
import { MyContext } from '../../../../../pages/Make/MakePageV2'
import { MakeContext } from '../../NewSectionMake'
import produce from 'immer'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import './ColorCustom.css'
import {
    ChakraProvider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Portal,
  } from '@chakra-ui/react'


export function EditColor({onChange, value}) {
    const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.
    const {stateC, actionC} = useContext(MakeContext) //ContextAPI로 state와 action을 넘겨받는다.
    const [color, setColor] = useColor("hex", value);
    const [newColor, setNewColor] = useState(true);
    
    const closeSave = () => {
        if(stateC.usedColors.includes(value)){
            return
        }else{
            if(stateC.usedColors.length > 6){
                actionC.setUsedColors(produce(stateC.usedColors, draft => {
                    draft.shift()
                    draft.push(value)
                }))
            }else{
                actionC.setUsedColors(produce(stateC.usedColors, draft => {
                    draft.push(value)
                }))
            }
        }
    }

    return (
        <ChakraProvider>
        <div className="center-row" style={{justifyContent: "start"}}>
            <div className="color-button" 
                style={{
                    backgroundColor : `${state.setting.color}`, 
                    color:`${state.setting.color === '#ffffff' ? '#555C67' : 'white'}`,
                    border: `${newColor ? ('2px solid #ffffff'): ('2px solid #6B63F7')}`,
                }} 
                onClick={() => {
                    setNewColor(false)
                    onChange(`${state.setting.color}`)
                    }}>
                {/* <div style={{color:'rgba(255,255,255,0.8)'}}>
                    main
                </div> */}
                <div>메인 색상
                    {state.setting.color}
                </div>
            </div>
                <Popover
                    placement='right'
                    onClose={() => {
                        closeSave()
                    }}>
                <PopoverTrigger>
                    <button className="color-button" 
                        style={{
                            backgroundColor:`${value}`, 
                            color:`${value === '#ffffff' ? '#555C67' : 'white'}`,
                            border: `${!newColor ? ('2px solid #ffffff'): ('2px solid #6B63F7')}`,
                        }} onClick={() => setNewColor(true)}>    
                            새로운 색상
                            {value}
                    </button>
                </PopoverTrigger>
                <Portal>
                <PopoverContent style={{zIndex: 100}}>
                    <PopoverArrow />
                    <PopoverBody>
                        <div className="center-column">
                            <ColorPicker
                                width={300}
                                height={150}
                                color={color}
                                onChange={(e) => {
                                    setColor(e);
                                    onChange(e.hex);
                                }}
                                hideHSV
                                alpha
                            />
                            <div style={{width:'95%', textAlign:'left'}}>최근에 사용한 색상</div>
                            <div className="center-row" style={{marginTop:'7px', justifyContent:'start'}}>
                                {stateC.usedColors.map((item, index) => {
                                    return(
                                        <div onClick={() => {onChange(item); setColor({...color, hex:item})}} key={index}>
                                            <div className="recent-color-button" style={{backgroundColor:`${item}`}}>
                                                
                                            </div>
                                            {/* <div className="recent-color-text">
                                                {item}
                                            </div> */}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </PopoverBody>
                </PopoverContent>
                </Portal>
                </Popover>
        </div>
        </ChakraProvider>
    )
}

const ColorCustom = ({text, value, func}) => {
    return(
        <div className="edit-element">
            <div className="edit-element__one" style={{flexDirection: 'column'}}>
                {
                    text && <div className="edit-element__left">{text}</div>
                }
                <div className="edit-element__bottom">
                    <EditColor onChange={(e) => func(e)} value={value || 'white'} />
                </div>
            </div>
        </div>
    )
}

export default ColorCustom
