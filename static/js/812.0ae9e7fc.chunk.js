"use strict";(self.webpackChunksynthesia=self.webpackChunksynthesia||[]).push([[812],{9868:(e,n,a)=>{a.d(n,{_:()=>t,o:()=>i});const r="https://picsum.photos";async function t(){var e;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;const t=await fetch("".concat(r,"/v2/list?page=").concat(n,"&limit=").concat(a)),i=(await t.json()).map((e=>{let{id:n,author:a,download_url:r}=e;return{id:n,author:a,preview:"https://picsum.photos/id/".concat(n,"/200"),src:r}}));return{hasMore:!(null===(e=t.headers.get("Link"))||void 0===e||!e.includes('rel="next"')),images:i}}async function i(e){const n=await fetch("".concat(r,"/id/").concat(e,"/info")),{author:a,download_url:t,height:i,width:l}=await n.json();return{author:a,src:t,height:i,width:l}}},7812:(e,n,a)=>{a.r(n),a.d(n,{default:()=>v});var r=a(2791),t=a(7689),i=a(1933),l=a(4554),s=a(1473),c=a(5818),o=a(890),d=a(3721),h=a(1582),u=a(4294),g=a(1131),x=a(9868),j=a(4032);var f=a(184);const p=(0,r.forwardRef)(((e,n)=>{const a=(0,r.useRef)(null),t=n||a,{src:i,width:l,height:s,blur:c=0,grayscale:o=0}=e;return(0,r.useEffect)((()=>{t&&"current"in t&&t.current&&function(e,n,a,r){const t=e.getContext("2d");if(!t)throw Error("issue with 2d context on canvas");const i=new Image;i.crossOrigin="anonymous",i.src=n,i.onload=()=>{r&&(t.filter=Object.keys(r).map((e=>"".concat(e,"(").concat(r[e],")"))).join(" ")),t.drawImage(i,0,0,a[0],a[1])}}(t.current,i,[l,s],{blur:"".concat(c,"px"),grayscale:"".concat(o,"%")})}),[i,l,s,c,o,t]),(0,f.jsx)("canvas",{ref:t,height:s,width:l})}));var m=a(9768);function y(e){let{blur:n=0,grayscale:a=0,onChangeBlur:r,onChangeGrayscale:t}=e;return(0,f.jsxs)(h.Z,{direction:"column",gap:1,padding:2,children:[(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(o.Z,{id:"blur-slider",children:"Blur"}),(0,f.jsx)(m.ZP,{"aria-labelledby":"blur-slider",defaultValue:n,"aria-label":"Blur level",min:0,max:10,valueLabelDisplay:"auto",onChangeCommitted:(e,n)=>r(n)})]}),(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(o.Z,{id:"grayscale-slider",children:"Grayscale (%)"}),(0,f.jsx)(m.ZP,{"aria-labelledby":"grayscale-slider",defaultValue:a,"aria-label":"Grayscale level",min:0,max:100,valueLabelDisplay:"auto",onChangeCommitted:(e,n)=>t(n)})]})]})}var w=a(7017);function b(e){let{width:n,height:a,onChangeDimensions:t}=e;const i=(0,r.useRef)(null),l=(0,r.useRef)(null);return(0,f.jsxs)(h.Z,{direction:"column",gap:1,padding:1,children:[(0,f.jsx)(w.Z,{"data-testid":"width-textfield",inputRef:l,required:!0,id:"outlined-required",label:"Width",defaultValue:n}),(0,f.jsx)(w.Z,{"data-testid":"height-textfield",inputRef:i,required:!0,id:"outlined-required",label:"Height",defaultValue:a}),(0,f.jsx)(u.Z,{variant:"contained",onClick:()=>{l.current&&i.current&&t(Number(l.current.value),Number(i.current.value))},children:"Apply"})]})}var Z=a(1087);function v(){const e=(0,r.useRef)(null),{imageId:n}=(0,t.UO)(),{isLoading:a,error:m,data:w}=(0,i.useQuery)({queryKey:["gallery",n],queryFn:()=>(0,x.o)(n),keepPreviousData:!0}),{width:v,height:C,blur:D,grayscale:k,onChangeBlur:R,onChangeGrayscale:I,onChangeDimensions:S}=function(){const[e,n]=(0,Z.lr)(),a=Number(e.get("width")),r=Number(e.get("height")),t=Number(e.get("blur"))||0,i=Number(e.get("grayscale"))||0,l=(a,r)=>{let t=new URLSearchParams(e.toString());t.set(a,r),n(t.toString())};return{height:r,width:a,blur:t,grayscale:i,onChangeDimensions:(e,a)=>{n((n=>(n.set("width",e.toString()),n.set("height",a.toString()),n)))},onChangeBlur:e=>{l("blur",e.toString())},onChangeGrayscale:e=>{l("grayscale",e.toString())}}}();if(a)return(0,f.jsx)(j.g,{});if(!w||m)return(0,f.jsx)(f.Fragment,{children:"An error has occurred"});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p,{ref:e,src:w.src,height:C||w.height,width:v||w.width,blur:D,grayscale:k}),(0,f.jsxs)(l.Z,{position:"fixed",top:50,right:50,bgcolor:"white",sx:{opacity:.8},children:[(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(c.Z,{expandIcon:(0,f.jsx)(g.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,f.jsx)(o.Z,{children:"Dimensions"})}),(0,f.jsx)(d.Z,{children:(0,f.jsx)(b,{height:C||w.height,width:v||w.width,onChangeDimensions:S})})]}),(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(c.Z,{expandIcon:(0,f.jsx)(g.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,f.jsx)(o.Z,{children:"Filters"})}),(0,f.jsx)(d.Z,{children:(0,f.jsx)(y,{blur:D,grayscale:k,onChangeBlur:R,onChangeGrayscale:I})})]}),(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(c.Z,{expandIcon:(0,f.jsx)(g.Z,{}),"aria-controls":"panel3a-content",id:"panel3a-header",children:(0,f.jsx)(o.Z,{children:"Download"})}),(0,f.jsx)(d.Z,{children:(0,f.jsx)(h.Z,{children:(0,f.jsx)(u.Z,{variant:"contained",onClick:()=>{e.current&&function(e,n){const a=e.toDataURL(),r=document.createElement("a");r.download="".concat(n,".png"),r.href=a,r.click()}(e.current,"edited")},children:"Download Edited Image"})})})]})]})]})}}}]);
//# sourceMappingURL=812.0ae9e7fc.chunk.js.map