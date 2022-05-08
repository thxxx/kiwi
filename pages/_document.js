import React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class CustomDocument extends Document {
    render() {
        return (
                <Html lang="ko">
                <Head>
                    {/* <!-- Google Tag Manager --> */}
                    {/* <script(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-PF85K64');</script> */}
                    {/* <!-- End Google Tag Manager --> */}
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                </Html>

        );
    }
}

