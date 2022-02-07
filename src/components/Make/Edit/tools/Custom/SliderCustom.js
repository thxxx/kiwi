import React, {useState} from 'react'
import { MDBRange } from 'mdb-react-ui-kit';

function SliderCustom({top, text, func, value, max}) {
    const [range, setRange] = useState(value);

    const onChange = (e) => {
        setRange(e.target.value)
      }

    return (
      <div className="edit-element">
        <div className="edit-element__one" style={{flexDirection: 'column'}}>
        <div className="edit-element__left">{top}</div>
        <MDBRange
          className="slider"
          value={range}
          id='customRange'
          min='0'
          max={max}
          onChange={onChange}   
          onClick={e => func(e)}   
        />
        <div className="small-command">
          {text}의 세로 길이를 조절해주세요.
        </div>
        </div>
      </div>
    )
}

export default SliderCustom