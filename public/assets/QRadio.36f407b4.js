import{aj as w,h as t,c as B,ar as P,as as j,r as R,a as l,P as $,s as z,b as Q,g as T,E as b,at as f}from"./index.fa0b2748.js";import{u as V,a as D}from"./use-dark.cd3327a2.js";import{o as F,u as M}from"./QCheckbox.ccd69156.js";import{u as A,a as E}from"./use-form.8020c4bb.js";const G={regulationByCrmId(e){return new Promise((r,i)=>{w.get(`/api/regulationsByCrmId/${e}`).then(o=>{r(o)}).catch(o=>{i(o)})})}},K=t("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[t("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),t("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var J=B({name:"QRadio",props:{...V,...P,...A,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:r,emit:i}){const{proxy:o}=T(),h=D(e,o.$q),k=j(e,F),c=R(null),{refocusTargetEl:d,refocusTarget:g}=M(e,c),n=l(()=>f(e.modelValue)===f(e.val)),q=l(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(h.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),y=l(()=>{const a=e.color!==void 0&&(e.keepColor===!0||n.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${n.value===!0?"truthy":"falsy"}${a}`}),v=l(()=>(n.value===!0?e.checkedIcon:e.uncheckedIcon)||null),_=l(()=>e.disable===!0?-1:e.tabindex||0),C=l(()=>{const a={type:"radio"};return e.name!==void 0&&Object.assign(a,{".checked":n.value===!0,"^checked":n.value===!0?"checked":void 0,name:e.name,value:e.val}),a}),S=E(C);function u(a){a!==void 0&&(b(a),g(a)),e.disable!==!0&&n.value!==!0&&i("update:modelValue",e.val,a)}function x(a){(a.keyCode===13||a.keyCode===32)&&b(a)}function I(a){(a.keyCode===13||a.keyCode===32)&&u(a)}return Object.assign(o,{set:u}),()=>{const a=v.value!==null?[t("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[t($,{class:"q-radio__icon",name:v.value})])]:[K];e.disable!==!0&&S(a,"unshift"," q-radio__native q-ma-none q-pa-none");const s=[t("div",{class:y.value,style:k.value,"aria-hidden":"true"},a)];d.value!==null&&s.push(d.value);const m=e.label!==void 0?z(r.default,[e.label]):Q(r.default);return m!==void 0&&s.push(t("div",{class:"q-radio__label q-anchor--skip"},m)),t("div",{ref:c,class:q.value,tabindex:_.value,role:"radio","aria-label":e.label,"aria-checked":n.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:u,onKeydown:x,onKeyup:I},s)}}});export{J as Q,G as r};
