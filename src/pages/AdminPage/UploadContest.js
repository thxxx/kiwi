import React, {useState} from 'react'
import styled from 'styled-components'
import {dbService, stService} from '../../tools/fbase'
import { v4 as uuidv4 } from 'uuid';

const Title = styled('div')`
    padding:10px 0px;
    font-size:20px;
`

const Input = styled('input')`
    padding:10px;
    font-size:20px;
    border:1px solid black;
    border-radius:3px;
`

function UploadContest() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState(0)
    const [src, setSrc] = useState('')
    const [urlId, setUrlId] = useState('')

    const upload = async () => {

        // 사진을 먼저 업로드하고 그 URL을 받아서 데이터로 넣어줘야한다.
        const attachmentRef = stService.ref().child(`contestImages/${uuidv4()}`)
        const response = await attachmentRef.putString(src, "data_url");
        const attachmentURL = await response.ref.getDownloadURL();

        const body = {
            created:Date.now(),
            name:name,
            phone:parseInt(phone),
            urlId:urlId,
            vote:0,
            img:attachmentURL,
        }

        await dbService.collection('contest').add(body)
        alert("업로드 완료!")
        setName('')
        setPhone(0)
        setSrc('')
        setUrlId('')
    }

    const uploadImage = e => {
        const {target:{files},} = e;
        const oneFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => { // 로딩이 끝날 때 실행한다는 뜻.
            const {currentTarget:{result}} = finishedEvent;
            setSrc(result);
        }
        if(oneFile){
            reader.readAsDataURL(oneFile);
        }
    }

    return (
        <div>
            <Title>
                올리신 분 이름 : (김*진)
            </Title>
            <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} />
            <Title>
                올리신 분 번호 : (5086)
            </Title>
            <input type="text" value={phone} onChange={e => setPhone(e.currentTarget.value)} />
            <Title>
                보여질 페이지의 이미지
            </Title>
            <input type="file"
                    accept="image/*" 
                    id="file" 
                    onChange={e => uploadImage(e)} />
            {
                src && <img src={src} style={{width:'200px'}} />
            }
            <Title>
                페이지 url : (template1)
            </Title>
            <input type="text" value={urlId} onChange={e => setUrlId(e.currentTarget.value)} />
            <div onClick={() => upload()} style={{cursor:'pointer', fontSize:'30px', padding:'10px', margin:'10px', backgroundColor:'yellow'}}>
                올리기!
            </div>
        </div>
    )
}

export default UploadContest
