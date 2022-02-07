import React, {useRef} from 'react'

function AddContentImg({text, value, func, removeFunc}) {
    const photoInput = useRef();
    const inputClick = () => {
        photoInput.current.click();
    };

    return (
        <div className="edit-element">
        <div className="top-img-div">
        <div className="put-img-div" 
        onClick={inputClick}
        onChange={e => func(e)}
        id='attach'
        style={{backgroundImage: `url(${value}`}}
        >
            {/* <div 
                className="img-remove"
                onClick={ e => removeFunc(e) }
            >X</div> */}
            <input
                type="file" 
                accept="image/*" 
                id="file" 
                onChange={ e => func(e) }
                ref={photoInput}
                style={{display: 'none', cursor: 'pointer'}}
            /> 
            {/* <div className="img-command">
            5MB 이하, <br />가로 1200px를 권장합니다!
            </div> */}
        </div>
        <div className="upload-div">
            <div className="upload-click"
            onClick={inputClick}
            onChange={e => func(e)}
            id='attach'
            >
                {text} 업로드
            </div>
        <div className="small-command">
        최대 5MB 업로드 가능
        </div>
        </div>
        </div>
        </div>
    )
}

export default AddContentImg