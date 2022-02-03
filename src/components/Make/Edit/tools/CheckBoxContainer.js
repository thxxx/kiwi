import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import {Check} from '@styled-icons/bootstrap';

export const CheckboxCustom = ({value, func}) => {
    return(
        <>
        {/* <Checkbox
            checked={value || false}
            value={value || false}
            onClick={func}
            inputProps={{ 'aria-label': 'controlled' }}
        /> */}
        <div className={value ? 'custom-check' : 'custom-check cc-unclicked'} onClick={func}>
            <Check color='white' />
        </div>
        </>
    )
}

function CheckBoxContainer({text, value, func}) {
    return(
        <div className="edit-element">
            <div className="edit-element__one">
                <div className="edit-element__left">
                    {text}
                </div>
                <div className="edit-element__right">
                    <Checkbox
                        checked={value || false}
                        value={value || false}
                        onClick={func}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CheckBoxContainer
