import{a as g,aw as S,r as k,q as ce,ax as de,h as b,ay as fe,az as me,aA as ge,a1 as ve,v as N,c as he,w as K,f as be,Z as R,b as we,g as ye,aB as qe}from"./index.0360f8b2.js";import{u as ke,d as xe}from"./use-prevent-scroll.d7447811.js";import{u as Ee}from"./use-timeout.1ad5423b.js";import{u as Pe}from"./use-tick.0dc36b64.js";import{u as Se,a as _e,b as Be}from"./use-model-toggle.d281fd0e.js";import{r as I,a as Ce,b as pe}from"./focus-manager.02955f48.js";const Te={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function $e(e,n=()=>{},o=()=>{}){return{transitionProps:g(()=>{const r=`q-transition--${e.transitionShow||n()}`,a=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${r}-enter-from`,enterActiveClass:`${r}-enter-active`,enterToClass:`${r}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:g(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const _=[];function Ne(e){return _.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function De(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return S(e)}else if(e.__qPortal===!0){const o=S(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(n),o):e}e=S(e)}while(e!=null)}function Ve(e,n,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=De(e,n);continue}e.hide(n)}e=S(e)}}function Fe(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Me(e,n,o,r){const a=k(!1),s=k(!1);let l=null;const c={},u=r==="dialog"&&Fe(e);function d(m){if(m===!0){I(c),s.value=!0;return}s.value=!1,a.value===!1&&(u===!1&&l===null&&(l=me(!1,r)),a.value=!0,_.push(e.proxy),Ce(c))}function f(m){if(s.value=!1,m!==!0)return;I(c),a.value=!1;const y=_.indexOf(e.proxy);y!==-1&&_.splice(y,1),l!==null&&(ge(l),l=null)}return ce(()=>{f(!0)}),e.proxy.__qPortal=!0,de(e.proxy,"contentEl",()=>n.value),{showPortal:d,hidePortal:f,portalIsActive:a,portalIsAccessible:s,renderPortal:()=>u===!0?o():a.value===!0?[b(fe,{to:l},o())]:void 0}}const v=[];let w;function He(e){w=e.keyCode===27}function ze(){w===!0&&(w=!1)}function Oe(e){w===!0&&(w=!1,ve(e,27)===!0&&v[v.length-1](e))}function V(e){window[e]("keydown",He),window[e]("blur",ze),window[e]("keyup",Oe),w=!1}function Le(e){N.is.desktop===!0&&(v.push(e),v.length===1&&V("addEventListener"))}function j(e){const n=v.indexOf(e);n>-1&&(v.splice(n,1),v.length===0&&V("removeEventListener"))}const h=[];function U(e){h[h.length-1](e)}function Ae(e){N.is.desktop===!0&&(h.push(e),h.length===1&&document.body.addEventListener("focusin",U))}function G(e){const n=h.indexOf(e);n>-1&&(h.splice(n,1),h.length===0&&document.body.removeEventListener("focusin",U))}let P=0;const Qe={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},W={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ue=he({name:"QDialog",inheritAttrs:!1,props:{...Se,...Te,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[..._e,"shake","click","escapeKey"],setup(e,{slots:n,emit:o,attrs:r}){const a=ye(),s=k(null),l=k(!1),c=k(!1);let u=null,d=null,f,m;const y=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:F}=xe(),{registerTimeout:M}=Ee(),{registerTick:Z,removeTick:H}=Pe(),{transitionProps:J,transitionStyle:z}=$e(e,()=>W[e.position][0],()=>W[e.position][1]),{showPortal:O,hidePortal:L,portalIsAccessible:X,renderPortal:Y}=Me(a,s,re,"dialog"),{hide:x}=Be({showing:l,hideOnRouteChange:y,handleShow:ae,handleHide:le,processOnMount:!0}),{addToHistory:ee,removeFromHistory:te}=ke(l,x,y),ne=g(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Qe[e.position]}`+(c.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),E=g(()=>l.value===!0&&e.seamless!==!0),oe=g(()=>e.autoClose===!0?{onClick:se}:{}),ie=g(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${E.value===!0?"modal":"seamless"}`,r.class]);K(()=>e.maximized,t=>{l.value===!0&&p(t)}),K(E,t=>{F(t),t===!0?(Ae(T),Le(C)):(G(T),j(C))});function ae(t){ee(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,p(e.maximized),O(),c.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),Z(q)):H(),M(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:i,bottom:$}=document.activeElement.getBoundingClientRect(),{innerHeight:Q}=window,D=window.visualViewport!==void 0?window.visualViewport.height:Q;i>0&&$>D/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-D,$>=Q?1/0:Math.ceil(document.scrollingElement.scrollTop+$-D/2))),document.activeElement.scrollIntoView()}m=!0,s.value.click(),m=!1}O(!0),c.value=!1,o("show",t)},e.transitionDuration)}function le(t){H(),te(),A(!0),c.value=!0,L(),d!==null&&(((t&&t.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),M(()=>{L(!0),c.value=!1,o("hide",t)},e.transitionDuration)}function q(t){pe(()=>{let i=s.value;i===null||i.contains(document.activeElement)===!0||(i=(t!==""?i.querySelector(t):null)||i.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.querySelector("[autofocus], [data-autofocus]")||i,i.focus({preventScroll:!0}))})}function B(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):q(),o("shake");const i=s.value;i!==null&&(i.classList.remove("q-animate--scale"),i.classList.add("q-animate--scale"),u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,s.value!==null&&(i.classList.remove("q-animate--scale"),q())},170))}function C(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&B():(o("escapeKey"),x()))}function A(t){u!==null&&(clearTimeout(u),u=null),(t===!0||l.value===!0)&&(p(!1),e.seamless!==!0&&(F(!1),G(T),j(C))),t!==!0&&(d=null)}function p(t){t===!0?f!==!0&&(P<1&&document.body.classList.add("q-body--dialog"),P++,f=!0):f===!0&&(P<2&&document.body.classList.remove("q-body--dialog"),P--,f=!1)}function se(t){m!==!0&&(x(t),o("click",t))}function ue(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?x(t):e.noShake!==!0&&B()}function T(t){e.allowFocusOutside!==!0&&X.value===!0&&qe(s.value,t.target)!==!0&&q('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:q,shake:B,__updateRefocusTarget(t){d=t||null}}),be(A);function re(){return b("div",{role:"dialog","aria-modal":E.value===!0?"true":"false",...r,class:ie.value},[b(R,{name:"q-transition--fade",appear:!0},()=>E.value===!0?b("div",{class:"q-dialog__backdrop fixed-full",style:z.value,"aria-hidden":"true",tabindex:-1,onClick:ue}):null),b(R,J.value,()=>l.value===!0?b("div",{ref:s,class:ne.value,style:z.value,tabindex:-1,...oe.value},we(n.default)):null)])}return Y}});export{Ue as Q,$e as a,Me as b,Ve as c,Ae as d,j as e,Le as f,Ne as g,De as h,_ as p,G as r,Te as u};
