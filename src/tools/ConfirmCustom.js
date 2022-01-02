import React from 'react'
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:10px;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: '25vw',
  height: '30vh',
  bgcolor: 'rgba(255,255,255,1)',
  border: '0px solid #000',
  flexDirection:'column',
  p: 2,
  px: 4,
  pb: 3,
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
//   borderRadius:'20px',
  position:'relative',
}


function ConfirmCustom({open, setOpen, message, callback}) {
    return (
        <div>
        <StyledModal    
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={open}
            BackdropComponent={Backdrop}
        >
            <Box sx={style}>
                <div>
                    {message}
                </div>
                <div>
                    <button onClick={() => {callback(); setOpen(false)}}>
                        예
                    </button>
                    <button onClick={() => setOpen(false)}>
                        아니오
                    </button>
                </div>
            </Box>
        </StyledModal>
        </div>
    )
}

export default ConfirmCustom
