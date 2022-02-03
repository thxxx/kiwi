export const base = [
    {
        // 공통적으로 들어갈 확률이 높은 것들
        name:'메인',
        sectionTypeName:'HeroSection',
        sectionTypeNumber:1,
        templateNumber:1,
        paddingSize:'',
        paddingLeft:'',
        paddingRight:'',
        paddingCustom: false,
        backgroundType:'color',
        backgroundColor:'white',
        backgroundOpacity:1,
        backgroundImage:{
            use:false,
            attachment:'',
        },
        animation:{
            use: true,
            type:'none',
        },
        // 특정 섹션에 해당할 확률이 높은 것들
        title:{
            text: '',
            align: '',
            size: 10,
            color: 'black'
        },
        desc:{
            text: '',
            align: '',
            size: 10,
            color: 'black'
        },
        image:{
            type:'image',
            attachment:'',
            width:70,
            border:0,
            size:150,
        },
        button:{
            title:'버튼입니다.',
            backgroundColor:'rgba(255,255,255,1)',
            buttonTemplate:1,
            func:1,
            link:"https://surfee.co.kr",
            first:true,
            second:false,
        },
    },
    {
        name:'디테일',
        sectionTypeName:'DetailSection',
        sectionTypeNumber:2,
        templateNumber:1,
        backgroundColor:'white',
        backgroundOpacity:1,
        backgroundImage:{
            use:false,
            attachment:'',
        },
        titles:{
            title:'<p>여기서 타이틀을 입력rhrh</p>',
            font:'Pretendard-Regular',
        },
        design:{

        },
        image:{
            attachment:'',
            width:70,
        },
        animation:{
            use:true,
            type:'none',
        },
        button:{
            title:'버튼입니다.',
            backgroundColor:'rgba(255,255,255,1)',
            buttonTemplate:1,
            func:1,
            link:"https://surfee.co.kr"
        },
        backgroundImage:{
            use:false,
            attachment:'',
        }
    },
    {
        name:'리뷰/추천',
        sectionTypeName:'ReviewSection',
        sectionTypeNumber:3,
        templateNumber:1,
        numOfFeatures:3,
        title:"Surfee의 자랑",
        backgroundColor:'white',
        backgroundOpacity:1,
        backgroundImage:{
            use:false,
            attachment:'',
        },
        ratingColor:'red',
        reviews:[
            {
                title:'1의 타이틀',
                desc:'리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.',
                rating:5,
                writer:'김호진',
            },
            {
                title:'2의 타이틀',
                desc:'2의 부가설명',
                rating:5,
                writer:'백인성',
            },
            {
                title:'3의 타이틀',
                desc:'3의 부가설명',
                rating:5,
                writer:'이유진',
            },
        ],
        backgroundImage:{
            use:false,
            attachment:'',
        },
        animation:{
            use:true,
            type:'none',
        },
    },
    {
        name:'특징',
        sectionTypeName:'FeaturesSection',
        sectionTypeNumber:4,
        templateNumber:1,
        backgroundColor:'white',
        backgroundOpacity:1,
        backgroundImage:{
            use:false,
            attachment:'',
        },
        align:'start',
        features:[
            {
                icon:'',
                attachment:'',
                title:'1의 타이틀',
                desc:'리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.',
            },
            {
                attachment:'',
                title:'1의 타이틀',
                desc:'리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.',
            },
            {
                attachment:'',
                title:'1의 타이틀',
                desc:'리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.리뷰를 쓰는 창입니다.',
            },
        ],
        backgroundImage:{
            use:false,
            attachment:'',
        },
        animation:{
            use:true,
            type:'none',
        },
    },
    {
        name:'CTA',
        sectionTypeName:'CtaSection',
        sectionTypeNumber:9,
        templateNumber:1,
        width:90,
        backgroundColor:'white',
        backgroundOpacity:1,
        title:'One Landing Page 제작 툴, 가장 먼저 이용해보세요.',
        desc:'사전 신청하신 분들에겐 오픈 시 사용가능한 일주일 무료 이용권을 드립니다.',
        attachment:'',
        button:{
            title:'버튼입니다.',
            backgroundColor:'rgba(255,255,255,1)',
            buttonTemplate:1,
            func:1,
            link:"https://surfee.co.kr",
            first:true,
        },
        backgroundImage:{
            use:false,
            attachment:'',
        },
        animation:{
            use:true,
            type:'none',
        },
    },
]

export const defaults = {
    navi:{
        elements:{
            buttonUse:true,
            logoUse:true,
            appButtonUse:true,
        },
        sectionTypeName:'상단 바',
        sectionTemplateNumber:1,
        height:60,
        use:true,
        title:'Surfee',
        logo:{
            text:'',
            textSize:20,
            textColor:'red',
            isLogo:'logo',
            logo:'',
        },
        fixed:false,
        backgroundColor:'rgba(255,255,255,1)', 
        bottomBorder:false,
        cta:{
            use:true,
            link:''
        },
        ghost:{
            use:true,
            link:''
        },
    },
    foot:{
        sectionTypeName:'푸터 바',
        sectionTemplateNumber:1,
        use:true,
        backgroundColor:'white', 
        padding:1,
        text:"copyright 2022",
        iconUse:true,
        iconStyle:'circle',
        iconColor:'white',
        iconAlign:'start',
        icons:[
            
        ],
        second:{
            text:'<p>두번 째 단입니다.</p>'
        }
    },
    setting:{
        urlId:'',
        faviconAttachment:'',
        font:'',
        smallFont:'',
        color:'#63B3F7',
        fta:{
            width:50,
            borderRadius:5,
            use:false,
            backgroundColor:'rgba(150,150,0,1)',
            text:'fta 버튼',
            link:'',
        },
        cta:{
            borderRadius:5,
            backgroundColor:'rgba(150,150,0,1)',
            color:'rgba(0,0,0,1)',
            shadow:true,
            borderColor:'rgba(0,0,0,1)',
            border:false,
        },
        ghost:{
            borderRadius:5,
            backgroundColor:'rgba(150,0,150,1)',
            color:'rgba(0,0,0,1)',
            shadow:true,
            borderColor:'rgba(0,0,0,1)',
            border:false,
        },
        animation:{

        }
    }
}