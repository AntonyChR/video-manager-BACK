var z=Object.defineProperty,R=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,$e=Reflect.get,ke=Reflect.set;var M=(e,o,r)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,m=(e,o)=>{for(var r in o||(o={}))L.call(o,r)&&M(e,r,o[r]);if(w)for(var r of w(o))F.call(o,r)&&M(e,r,o[r]);return e},u=(e,o)=>R(e,j(o));import{W as E,j as g,r as c,s as n,N as T,u as B,B as O,R as P,a as b,F as V,b as A,c as H}from"./vendor.d4a8c9b2.js";const W=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}};W();const Y=E`
    * {
        box-sizing: border-box;
        margin: 0;
    }

    body{
        background-color:${({theme:e})=>e.colors.bg};
        margin: 0;
        padding: 5px 20px;

    }

    html::-webkit-scrollbar{
        width: 11px;
        position: fixed;
    }

    html::-webkit-scrollbar-track{
        background: rgb(255, 255, 255,.1);
        border-radius: 0px;
        box-shadow: inset 0px 0px 0px 0px #F0F0F0;
    }
    html::-webkit-scrollbar-thumb{
        background: #B3AFB3;
        border-radius: 19px;
    }
    html::-webkit-scrollbar-thumb:hover{
        background: rgb(252, 80, 80);
        cursor: pointer;
    }

`,q={colors:{bg:"#1e1b26",textTitle:"#fff",text:"#888888",red:"#fe4141"},card:{size:{height:"580px",width:"300px"}},trailerModal:{height:"560px",width:"300px"}},d={setTrailer:"SET_TRAILER",removeTrailer:"REMOVE_TRAILER",setMovies:"SET_MOVIES",setMobile:"SET_MOBILE"},D=(e={},o)=>{switch(o.type){case d.setTrailer:return u(m({},e),{trailerStatus:{url:o.payload.url,showing:!0}});case d.removeTrailer:return u(m({},e),{trailerStatus:{url:"",showing:!1}});case d.setMovies:return u(m({},e),{movies:o.payload.movies});case d.setMobile:return u(m({},e),{isMobile:o.payload.isMobile});default:return e}},G=async e=>await(await fetch(e)).json(),t=g.exports.jsx,a=g.exports.jsxs,x=g.exports.Fragment,p=c.exports.createContext({}),K=()=>({movies:{},trailerStatus:{showing:!1,ulr:""},isMobile:!1}),U=({children:e})=>{const[o,r]=c.exports.useReducer(D,{},K);return c.exports.useEffect(()=>{G(" http://192.168.1.8:3001/info").then(l=>r({type:d.setMovies,payload:{movies:l.data}})).catch(l=>console.log(l)),window.innerWidth<768&&r({type:d.setMobile,payload:{isMobile:!0}})},[]),t(p.Provider,{value:{state:o,dispatch:r},children:e})},J=n.nav`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    gap: 20px;
    .active{
        color: ${({theme:e})=>e.colors.red};
    }
`,$=n(T)`
    text-decoration: none;
    color: #666666;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: sans-serif;

`,Q=()=>a(J,{children:[a($,{to:"/",children:[t("span",{className:"material-icons",children:"home"}),"Inicio"]}),a($,{to:"/config",children:[t("span",{className:"material-icons",children:"settings"}),"Configuraci\xF3n"]})]}),X=()=>t("div",{className:"animate__animated animate__fadeIn",children:"la real configuracion"}),Z=n.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.red}; 
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    
    span{
        font-size: 2rem;
    }
    :hover{
        transform: scale(1.1);
    }

`,ee=()=>{const[e,o]=c.exports.useState(!1);return window.onscroll=function(){window.scrollY>400?e||o(!0):e&&o(!1)},t(Z,{className:"animate__animated animate__fadeInUp ",onClick:()=>{window.scrollTo(0,0)},style:{display:e?"":"none"},children:t("span",{className:"material-icons",children:"arrow_upward"})})},te=n.header`
    height: 300px;
    border: 1px solid ${({theme:e})=>e.colors.red};
    @media only screen and (max-width: 768px){
        display: none;
    }
`,oe=()=>{const{state:e}=c.exports.useContext(p),{movies:o}=e,r=Object.keys(o),l=r.length,i=Math.floor(Math.random()*l),s=o[r[i]];return s?t(te,{children:t("h1",{children:s.title})}):t("h1",{children:"loading"})},re=n.span`
    cursor: pointer;
    display:block;
    margin: 0 auto;
    position: fixed;
    z-index: 30;
    top:${e=>e.top}px;
    left:${e=>e.left}px;
    font-size: 3rem;
    color: #fff;
    transition: transform .3s ease;
    top:${({isMobile:e})=>e?"18vh":"8vh"};
    left:${({isMobile:e})=>e?"87vw":"86.5vw"};
    &:hover {
        transform: scale(1.2);
        color: ${({theme:e})=>e.colors.red};
    }
`,ie=n.iframe`
        display:'block';
        margin: 0 auto;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 20;
`,se=({urlTrailer:e})=>{const o=e.split("=")[1],r="https://www.youtube.com/embed/"+o,{state:l}=c.exports.useContext(p),{isMobile:i}=l,s=window.innerWidth*(i?1:.8),h=window.innerHeight*(i?.4:.71),{dispatch:f}=c.exports.useContext(p);return a(x,{children:[t(re,{onClick:()=>{f({type:d.removeTrailer})},className:"material-icons",isMobile:i,children:"disabled_by_default"}),t(ie,{width:s,height:h,src:`${r}`,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})},ne=n.div`
    width: ${({theme:e})=>e.card.size.width};
    height: ${({theme:e})=>e.card.size.height};
    background-color: ${({theme:e})=>e.colors.bg};
    font-family: sans-serif;
    overflow: hidden;
    margin-top: 50px;
    position: relative;
    box-shadow: 0px 0px 20px -9px black;
    transition: box-shadow 0.3s ease-in-out;

    display: flex;
    flex-direction: column;
    align-items: center;


    &:hover {
        box-shadow: 0px 0px 20px -9px gray;
    }
  
`,ae=n.div`
    overflow: hidden;
    height: 270px;
    color: rgba(245, 245, 245,0);
    transition: color 0.4s ease;

    &:hover{
        cursor: pointer;
        
        img{
            filter: blur(1px);
            
        }
        span{
            color: rgba(245, 245, 245,1);
        }
    }
    img{
        width:${({theme:e})=>e.card.size.width};
        transition: filter .5s ease;
    }

    span{
        position: absolute;
        left: 40%;
        top: 20%;
        z-index: 10;
        font-size: 72px;
        color: rgba(245, 245, 245,0);
    }
`,le=n.div`
    padding: 0 10px 10px 10px;
    position: relative;
    box-shadow: 0px 15px 37px 57px ${({theme:e})=>e.colors.bg};
`,ce=n.p`
    color: ${({theme:e})=>e.colors.textTitle};
    margin-top: 0px;
    margin-bottom: 0;
    font-size: 2rem;
`,de=n.p`
    margin-top: 0;
    font-size: 0.8rem;
    color: ${({theme:e})=>e.colors.text};
`,pe=n.p`
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.textTitle};
    margin-bottom: 5px;
    margin-top: 15px;
`,he=n.p`
    margin-top: 0;
    font-size: .85rem;
    color: ${({theme:e})=>e.colors.text};
`,me=n.div`
    width: 90%;
    border: 1px solid ${({theme:e})=>e.colors.red};
    border-radius: 5px;
    color: ${({theme:e})=>e.colors.red};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    cursor: pointer;
    transition: transform 0.2s ease;
    position: absolute;
    bottom: 20px;
    margin: auto;

    &:hover{
        background-color: ${({theme:e})=>e.colors.red};
        color: ${({theme:e})=>e.colors.bg};
        transform: scale(1.02);
    }
`;var ue="/assets/puff.e708a72e.svg";const xe=n.img`
    object-fit: fill;
`,fe=({title:e,year:o,img:r,trailer:l,summary:i,genres:s,stars:h,duration:f,classification:v,id:k})=>{const _=i.length>351?i.slice(0,280)+"...":i,{dispatch:S}=c.exports.useContext(p),[y,C]=c.exports.useState(!1),I=()=>{console.log("play trailer"),S({type:d.setTrailer,payload:{url:l}})},N=()=>C(!0);return a(ne,{children:[a(ae,{children:[t(T,{to:`/movie/${k}`,children:t("span",{className:"material-icons play_movie md-48",children:"play_circle"})}),y?t(x,{}):t(xe,{src:ue,alt:"loading"}),t("img",{src:r,className:"img-movie",alt:"image movie",onLoad:N,style:{display:y?"flex":"none"}})]}),a(le,{children:[t(ce,{children:e}),a(de,{children:[v," / ",f," / ",s]}),t(pe,{children:i?"Resumen":"Resumen no disponible"}),t(he,{children:_})]}),a(me,{onClick:I,children:[t("span",{className:"material-icons",children:"play_arrow"}),"Ver trailer"]})]})},ge=n.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    gap: 20px;  
    background-color: ${({theme:e})=>e.colors.bg};
 `,be=()=>{const{state:e}=c.exports.useContext(p);return t(x,{children:t(ge,{children:Object.keys(e.movies).map(o=>t(fe,m({},e.movies[o]),o))})})},ve=()=>{const{state:e}=c.exports.useContext(p);return a("div",{className:"animate__animated animate__fadeIn",children:[t(oe,{}),t(be,{}),e.trailerStatus.showing?t(se,{urlTrailer:e.trailerStatus.url}):t(x,{}),t(ee,{})]})},ye=n.div`
    height: 77vh;
    width: 90%;
    margin: 20px auto;
    @media only screen and (max-width: 768px){
        width: 100%;
        height: 40vh;
    }
`;n.video`

`;const we=()=>{const{id:e}=B(),{state:o}=c.exports.useContext(p),r=o.movies[e];return r?a("div",{className:"animate__animated animate__fadeIn",children:[t("h1",{style:{textAlign:"center",color:"white",fontFamily:"sans-serif"},children:r.title}),t(ye,{children:t("video",{controls:!0,src:` http://192.168.1.8:3001/video/${r.id}`,type:"video/mp4",autoPlay:!0,style:{width:"100%",height:"100%"}})})]}):t("h1",{children:"Loading..."})},Me=()=>a(O,{children:[t(Q,{}),a(P,{children:[t(b,{path:"/",element:t(ve,{})}),t(b,{path:"movie/:id",element:t(we,{})}),t(b,{path:"config",element:t(X,{})})]})]});function Te(){return t(U,{children:a(V,{theme:q,children:[t(Y,{}),t(Me,{})]})})}A.render(t(H.StrictMode,{children:t(Te,{})}),document.getElementById("root"));
