import React, {useEffect} from 'react'
import person1 from '../../../tools/img/person1.png'

function KaKaoTalkButton({title, imgUrl, url}) {
    useEffect(() => {
        createKakaoButton()
      }, [])
    
      const createKakaoButton = () => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능하다고 한다.
        if (window.Kakao) {
          const kakao = window.Kakao
    
          // 중복 initialization 방지
          if (!kakao.isInitialized()) {
            // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
            kakao.init('7ee630bf57da187a1038b1adcf4ef7ec')
          }
    
          kakao.Link.createDefaultButton({
            // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
              title: title,
              description: '여기서 확인하세요',
              imageUrl: imgUrl, // i.e. process.env.FETCH_URL + '/logo.png'
              // link: {
              //   mobileWebUrl: url,
              //   webUrl: url,
              // },
            },
            // social: {
            //   likeCount: 77,
            //   commentCount: 55,
            //   sharedCount: 333,
            // },
            buttons: [
              {
                title: '선물 받으러 가기',
                link: {
                  mobileWebUrl: url,
                  webUrl: url,
                },
              },
            ],
          })
        }
      }

    return (
        <div>
            <button id="kakao-link-btn" style={{backgroundColor:'yellow', padding:'10px'}}>
                카카오톡 공유하기
            </button>
        </div>
    )
}

export default KaKaoTalkButton
