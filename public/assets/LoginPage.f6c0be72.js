import{Q as i}from"./QInput.4465514b.js";import{i as p,aP as d,_ as c,r as f,a9 as l,ab as h,O as g,N as u,S as y,K as w,M as o,P as b,a3 as V,Q as P}from"./index.09dd7e77.js";import{Q}from"./QForm.c67c71bd.js";import"./use-dark.ae0c462b.js";import"./use-id.a9cd32fb.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.d0bfca0a.js";function k(){return p(d)}const x={setup(){const s=k();return{isPwd:f(!0),toast(e,n){s.notify({type:n,message:e})}}},data(){return{user:{phone:"8"}}},methods:{...l("user",["userInit","login","authenticate"]),...l("pageSettings",["updateAjaxBarTimeout"]),callLogin(s){this.login(this.user).then(e=>{this.$router.push("/tests")}).catch(e=>{})}},computed:{...h("user",["getUser","authenticated"])}};function B(s,e,n,r,a,m){return s.authenticated?y("",!0):(w(),g(Q,{key:0,class:"q-gutter-md",onSubmit:m.callLogin},{default:u(()=>[o(i,{filled:"",modelValue:a.user.phone,"onUpdate:modelValue":e[0]||(e[0]=t=>a.user.phone=t),name:"phone",label:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 *","lazy-rules":"",mask:"# (###) ###-##-##",hint:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430: 8(999) 999-99-99 *",rules:[t=>t&&t.length>0||"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435"]},null,8,["modelValue","rules"]),o(i,{name:"password",modelValue:a.user.password,"onUpdate:modelValue":e[2]||(e[2]=t=>a.user.password=t),filled:"",type:r.isPwd?"password":"text",label:"\u041F\u0430\u0440\u043E\u043B\u044C",hint:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C","lazy-rules":"",rules:[t=>t&&t.length>0||"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435"]},{append:u(()=>[o(b,{name:r.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:e[1]||(e[1]=t=>r.isPwd=!r.isPwd)},null,8,["name"])]),_:1},8,["modelValue","type","rules"]),V("div",null,[o(P,{label:"\u0412\u043E\u0439\u0442\u0438",type:"submit",color:"primary"})])]),_:1},8,["onSubmit"]))}var U=c(x,[["render",B]]);export{U as default};