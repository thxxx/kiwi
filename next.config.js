module.exports = {
    reasctStrictMode:true,
    async redirects() {
        return [
            {
                source : '/contact/:path*', // -> contact/12232/cose/ddw 등등 까지 다 리다이렉션 한다.
                destination:'/made',
                permanent:false, // 브라우저가 기억하게 하고 싶은지 아닌지?
            }
        ]
    }
}