import Head from 'next/Head'

export default function Seo({title}){
    return(
        <Head>
            <title>
                {title}
            </title>
        </Head>
    )
}