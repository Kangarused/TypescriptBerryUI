var I=Object.defineProperty,V=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var E=(e,t,a)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,C=(e,t)=>{for(var a in t||(t={}))T.call(t,a)&&E(e,a,t[a]);if(v)for(var a of v(t))$.call(t,a)&&E(e,a,t[a]);return e},A=(e,t)=>V(e,j(t));import{r as n,E as z,_ as N,W as m,j as r,B,a as u,T as b,u as k,a7 as G,a8 as _,a9 as W,A as f,aa as q,ab as J,b as K,G as S}from"./index.c945cb14.js";import{u as O,E as Q,S as M,F as x,B as g}from"./FormTextInput.f12b7bee.js";import{M as X}from"./MainCard.0fd27eff.js";var U=n.exports.forwardRef(function(e,t){var a={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return n.exports.createElement(z,N({iconAttrs:a,iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},e,{ref:t}),n.exports.createElement("path",{fillRule:"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"}))});U.displayName="ArrowLeftCircle";var H=n.exports.forwardRef(function(e,t){var a={fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"};return n.exports.createElement(z,N({iconAttrs:a,iconVerticalAlign:"middle",iconViewBox:"0 0 32 32"},e,{ref:t}),n.exports.createElement("path",{d:"M15.03 6.12A7.63 7.63 0 0 0 2.61 14.5H7.7l2.14-3.74a2.5 2.5 0 0 1 4.4.12l2.17 4.32 1.58-2.17a2.5 2.5 0 0 1 3.62-.45l2.3 1.92h5.56a7.7 7.7 0 0 0-12.6-8.27l-.86.86-.97-.97zM15.27 28.68l-8.6-9.18h2.47c.9 0 1.73-.48 2.17-1.26l.54-.94 1.91 3.82a2.5 2.5 0 0 0 4.26.35l2.43-3.34.95.8a2.5 2.5 0 0 0 1.6.57h2.47l-8.75 9.19a1 1 0 0 1-1.45 0z"}),n.exports.createElement("path",{d:"M12.9 11.55a1 1 0 0 0-1.76-.06L8.44 16H2.66a1 1 0 1 0 0 2H9a1 1 0 0 0 .86-.49l2.06-3.43 3.19 6.37a1 1 0 0 0 1.7.14l3.37-4.64 2.18 1.82A1 1 0 0 0 23 18h6a1 1 0 0 0 0-2h-5.64l-2.72-2.27a1 1 0 0 0-1.45.18l-3.03 4.17-3.27-6.53z"}))});H.displayName="HeartPulse";function Y(){return{onCreate:o=>null.mutateAsync({data:o}).then(i=>(m("Successfully created user",{type:"success"}),i)).catch(i=>{throw m("Failed to create user",{type:"error"}),i}),onEdit:o=>null.mutateAsync({data:o}).then(()=>{m("Successfully updated user",{type:"success"})}).catch(i=>{m("Failed to update user",{type:"error"})})}}function Z(e){return e.error!=null?r(B,{className:"w-full h-full flex flex-col items-center",children:u(B,{className:"text-center",children:[r(H,{size:90}),r(b,{variant:"h4",className:"mb-2",children:"Something went wrong"}),r(b,{variant:"subtitle2",children:e.error.message})]})}):null}function ee(e){const{title:t,withBackButton:a,buttonSize:c=24}=e,o=k();return u("div",{className:"flex flex-row items-center",children:[a&&r(G,{color:"primary",size:"small",className:"mr-2",onClick:()=>{o(-1)},children:r(U,{width:c})}),r("div",{children:t})]})}const te={userId:1,username:"Example",name:"Example User",email:"example.user@example.com"};function le(){const[e,t]=n.exports.useState(!1),a=k(),{userId:c}=_(),{onCreate:o,onEdit:i}=Y(),l=n.exports.useMemo(()=>W(f.userDetail.createPath,c),[c]),{isLoading:h,error:p,data:s}={isLoading:!1,error:null,data:l?{}:te},d=O({defaultValues:s!=null?s:{}});q(f.userDetail.path,l?"Create":s&&`${s==null?void 0:s.name}`);const P=[h],R=()=>{t(!0)},w=()=>{t(!1)},D=d.handleSubmit(y=>{l?o(y).then(L=>a(`${J(f.userSearch)}/${L}`,{replace:!0})):i(y).then(()=>w())}),F=()=>{d.reset(),w()};return n.exports.useEffect(()=>{d.reset(s)},[s]),r(K,{loadingState:P,children:r(S,{container:!0,spacing:1,children:r(S,{item:!0,xs:12,md:6,lg:4,children:u(X,{title:r(ee,{title:"User details",withBackButton:!0}),children:[p==null&&r(Q,A(C({},d),{readonly:!e&&!l,loading:h,handleSubmit:D,handleReset:F,children:u(M,{spacing:2,children:[r(x,{name:"username",label:"Username"}),r(x,{name:"name",label:"Name"}),r(x,{name:"email",label:"Email",type:"email"}),!h&&u(M,{spacing:2,direction:"row",justifyContent:"flex-end",children:[!e&&!l&&r(g,{variant:"outlined",color:"primary",onClick:R,type:"button",children:"Update details"}),e&&!l&&r(g,{variant:"outlined",color:"default",type:"reset",children:"Discard changes"}),(e||l)&&r(g,{variant:"outlined",color:"secondary",type:"submit",children:l?"Create":"Save changes"})]})]})})),p!=null&&r(Z,{error:p})]})})})})}export{le as default};
