import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {dbService} from '../../../tools/fbase'

const OUT = styled('div')`
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family:MapoGoldenPier;
    position:relative;
`

function GiftBox(props) {
    const [item, setItem] = useState({})

    useEffect(() => {
        getItem()
    },[])

    const getItem = async () => {
        const fds = await dbService
            .collection('gift')
            .where('id', '==', props.match.params.id)
            .get();
        let fd = fds.docs.map(doc => {
            return({...doc.data(), id:doc.id})
        });

        setItem(fd[0])
        console.log(fd[0])
    }

    return (
        <OUT>
        <div className="gift__container">
            {
                item && 
                <div className="gift__landing" style={{backgroundColor:'#fff3c6'}}>
                    {item.from}님이 {item.to}님에게 보내는 특별한 선물입니다.
                </div>
            }
        </div>
        </OUT>
    )
}

export default GiftBox
