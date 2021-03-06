import React, { useContext, useState, useRef, useEffect } from 'react'
import { MyContext } from '../../../../pages/Make/MakePageV2'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Editor from '../../tools/Editor'
import TextAuto from './TextAuto'
import produce from 'immer'
import { ChakraProvider } from '@chakra-ui/react'
import './QnaOpenClose.css'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: '1px solid rgba(0,0,0,0.2)',
    width:'90%',
    borderRadius:10,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, 0)',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0.3),
}));

// 아래는 열고 닫히는 애니메이션 효과까지 적용
export const AccordionCustom = (props) => {
  return (
    <div className="centera">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <div>
                {props.title}
            </div>
        </AccordionSummary>
        <AccordionDetails>
            <div>
                {props.children}
            </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const OpenCloseCustom = (props) => {
  /**
   * title, tooltip, preseen 설정 가능
   */
  const isopen = props.content.qna.shape

  const [open, setOpen] = useState(false)
  const {state, action} = useContext(MyContext) //ContextAPI로 state와 action을 넘겨받는다.

  return (
    <div className="one-element" onClick={() => {action.setFocus('qna'); action.setCategory(0)}}>
      <div className={props.type === 'card' ? 'accordion__card' : 'accordion__plain'}>
        <div className="accordion__header-qna" onClick={() => setOpen(!open)}>
          <div className="edit-element">
            <ChakraProvider>
            <div className="accordion__title">
              <div className="title_text" style={{color:`${props.color}`, width:'100%', alignItems: 'start'}}>
                <div className="qna__word" style={{ marginRight:`${state.isPhone ? '3px' : '5px'}`, fontWeight:'700'}}>Q.</div>
                <div style={{width:'100%', align:'start', marginTop:'6px', color:`${props.color}`, fontSize:'0.9em', fontFamily:`${state.setting.smallFont}`}}>
                  <Editor 
                    placeholder="여기를 클릭하여 자주 묻는 질문을 적어보세요."
                    data={props.title}
                    onChange={(event,editor) => {
                      const data = editor.getData();
                      action.setContents(produce(state.contents, draft => {
                        draft[state.secNum].qnas[props.index].question = data;
                      }))
                    }}
                  />
                </div>
              </div> 
            </div>
            </ChakraProvider>
            <div className="centera" style={{justifyContent: 'end', width:`${state.isPhone ? '7.5%' : '6%'}`}}>
              {
                isopen !== 'open' ? 
                <>
                { open ? <ExpandMoreIcon style={{transform:'rotate(180deg)'}} /> : <ExpandMoreIcon />}
                </> : 
                <>
                </>
              }
            </div>
          </div>
        </div>
        {isopen === 'open' ? 
          (<div className="accordion__body" style={{display:'flex', flexDirection:'row', justifyContent:'start'}}>
          {props.children}
          </div>):
          (<div className="accordion__body" style={{display:`${open ? 'flex' : 'none'}`, flexDirection:'row', justifyContent:'start'}}>
          {props.children}
          </div>)
        }
      </div>
    </div>
  );
}

export default OpenCloseCustom


