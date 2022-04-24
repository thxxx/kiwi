import React, {useRef} from 'react'

<<<<<<< HEAD:src/components/Make/Edit/tools/func/FuncSlideImg.js
function FuncSlideImg({text, value, func, removeFunc}) {
=======
function AddContentImg({text, value, func, removeFunc}) {
>>>>>>> d40f1f954 (Test second..):src/components/Make/Edit/tools/AddContentImg.js
    const photoInput = useRef();
    const inputClick = () => {
        photoInput.current.click();
    };

    return (
<<<<<<< HEAD:src/components/Make/Edit/tools/func/FuncSlideImg.js
        <div className="top-img-div">
        <div className="put-slider-img" 
=======
        <div className="edit-element">
        <div className="top-img-div">
        <div className="put-img-div" 
>>>>>>> d40f1f954 (Test second..):src/components/Make/Edit/tools/AddContentImg.js
        onClick={inputClick}
        onChange={e => func(e)}
        id='attach'
        style={{backgroundImage: `url(${value}`}}
        >
            {/* <div 
                className="img-remove"
                onClick={ e => removeFunc(e) }
<<<<<<< HEAD:src/components/Make/Edit/tools/func/FuncSlideImg.js
            >+</div>
=======
            >X</div> */}
>>>>>>> d40f1f954 (Test second..):src/components/Make/Edit/tools/AddContentImg.js
            <input
                type="file" 
                accept="image/*" 
                id="file" 
                onChange={ e => func(e) }
                ref={photoInput}
                style={{display: 'none', cursor: 'pointer', objectFit:'cover'}}
            /> 
<<<<<<< HEAD:src/components/Make/Edit/tools/func/FuncSlideImg.js
            <div className="embed-command">
                파일 선택
=======
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
>>>>>>> d40f1f954 (Test second..):src/components/Make/Edit/tools/AddContentImg.js
            </div>
        <div className="small-command">
        최대 5MB 업로드 가능
        </div>
        </div>
        </div>
        </div>
<<<<<<< HEAD:src/components/Make/Edit/tools/func/FuncSlideImg.js
        </div>

=======
>>>>>>> d40f1f954 (Test second..):src/components/Make/Edit/tools/AddContentImg.js
    )
}

export default FuncSlideImg
