import{c as C,r as P,a6 as q,af as A,o as I,h as B,b as R,g as V,a7 as Q,E as S,F as j,d as D,aI as O}from"./index.6f997eae.js";import{b as k}from"./focus-manager.02955f48.js";var $=C({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(r,{slots:F,emit:l}){const E=V(),u=P(null);let s=0;const i=[];function d(e){const a=typeof e=="boolean"?e:r.noErrorFocus!==!0,f=++s,x=(t,o)=>{l("validation"+(t===!0?"Success":"Error"),o)},h=t=>{const o=t.validate();return typeof o.then=="function"?o.then(n=>({valid:n,comp:t}),n=>({valid:!1,comp:t,err:n})):Promise.resolve({valid:o,comp:t})};return(r.greedy===!0?Promise.all(i.map(h)).then(t=>t.filter(o=>o.valid!==!0)):i.reduce((t,o)=>t.then(()=>h(o).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return f===s&&x(!0),!0;if(f===s){const{comp:o,err:n}=t[0];if(n!==void 0&&console.error(n),x(!1,o),a===!0){const g=t.find(({comp:p})=>typeof p.focus=="function"&&Q(p.$)===!1);g!==void 0&&g.comp.focus()}}return!1})}function v(){s++,i.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function m(e){e!==void 0&&S(e);const a=s+1;d().then(f=>{a===s&&f===!0&&(r.onSubmit!==void 0?l("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function b(e){e!==void 0&&S(e),l("reset"),j(()=>{v(),r.autofocus===!0&&r.noResetFocus!==!0&&c()})}function c(){k(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),a=>a.tabIndex!==-1);e!=null&&e.focus({preventScroll:!0})})}D(O,{bindComponent(e){i.push(e)},unbindComponent(e){const a=i.indexOf(e);a!==-1&&i.splice(a,1)}});let y=!1;return q(()=>{y=!0}),A(()=>{y===!0&&r.autofocus===!0&&c()}),I(()=>{r.autofocus===!0&&c()}),Object.assign(E.proxy,{validate:d,resetValidation:v,submit:m,reset:b,focus:c,getValidationComponents:()=>i}),()=>B("form",{class:"q-form",ref:u,onSubmit:m,onReset:b},R(F.default))}});export{$ as Q};
