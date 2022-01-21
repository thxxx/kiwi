import React from 'react'
import './custom.css'

function RadioCustom({options, value, onChange}) {
    return (
        <div>
            {options.map((item, index) => {
                let backColor = "rgb(100,100,100)";
                if(value === item.value){
                    backColor = "#6a6cfa";
                }
                if(index === 0){
                    return(
                        <span className="radio-element r-first" style={{border:`1px solid ${backColor}`, color:`${backColor}`}} onClick={() => onChange(item.value)} key={index}>
                            {item.label}
                        </span>
                    )
                }else if(index === (options.length - 1)){
                    return(
                        <span className="radio-element r-end" style={{border:`1px solid ${backColor}`, color:`${backColor}`}} onClick={() => onChange(item.value)} key={index}>
                            {item.label}
                        </span>
                    )
                }
                else{
                    return(
                        <span className="radio-element" style={{border:`1px solid ${backColor}`, color:`${backColor}`}} onClick={() => onChange(item.value)} key={index}>
                            {item.label}
                        </span>
                    )
                }
            })}
        </div>
    )
}

export const EditRadioContainer = ({text, options, value, func}) => {
    return(
        <div className="edit-element">
            <div className="edit-element__one">
                <div className="edit-element__left">{text}</div>
                <div className="edit-element__right">
                    <RadioCustom 
                        options={options}
                        onChange={e => func(e)}
                        value={value}
                    />
                </div>
            </div>
        </div>
    )
}

export default RadioCustom