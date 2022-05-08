import React from 'react';
import Head from 'next/head';

// 모든 컴포넌트의 렌더링 전, 이게 먼저 렌더링 된다.

// Component, pageProps는 필수적인 이름
const App = ({ Component, pageProps }) => (
  <>
    <Head>
        <meta charset="utf-8" />
        <link rel="icon" id="favicon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
            name="description"
            content="나만의 랜딩페이지를 코딩없이 쉽고 빠르게 제작해보세요. 지금 당장 무료로 제작할 수 있습니다! 노코드 랜딩페이지 제작툴, Surfee"
        />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo193.png" />

        {/* <!-- 카카오톡 공유 시 메타정보 --> */}
        <meta property="og:title" content="Surfee" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./main.png" />
        <meta property="og:description" content="나만의 랜딩페이지를 코딩없이 쉽고 빠르게 제작해보세요!" />

        <title id="urltitle">Surfee | 나만의 페이지를 노코드로 제작</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;