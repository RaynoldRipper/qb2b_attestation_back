import{Q as C}from"./QExpansionItem.bb2eed2b.js";import{Q as P}from"./QList.ecf90d53.js";import{_ as k,K as s,O as l,N as t,G as I,M as r,aC as w,R as p,ad as h,S as g,U as A,a9 as L,aj as R,L as d,T as v,ac as y,J as U}from"./index.6f997eae.js";import{a as x,Q as c}from"./QItem.61a85ead.js";import{Q as f}from"./QItemLabel.7bf49f49.js";import{a as B,Q as S}from"./QBadge.64fa9633.js";import{Q as N}from"./axios-vo.c59d1dc2.js";import{u as T}from"./users-helper.3be6869e.js";import"./QSlideTransition.964a8b6b.js";import"./QSeparator.e7e2e85c.js";import"./use-dark.ba596b4d.js";import"./use-id.bc68c23c.js";import"./uid.42677368.js";import"./use-model-toggle.34d54554.js";const M={props:{fullName:String,userRole:String,userId:Number,badgeInfo:String,userStatus:String,userPosition:String},computed:{firstLetterName(){return this.fullName.substr(0,1).toUpperCase()},userMainStatusText(){return T(this.userStatus)}}};function V(m,n,e,a,i,_){return s(),l(N,{class:"my-card q-mb-sm",flat:"",bordered:""},{default:t(()=>[I((s(),l(x,{clickable:"",to:{name:"users-info",params:{id:e.userId}}},{default:t(()=>[r(c,{avatar:""},{default:t(()=>[r(w,{color:"secondary","text-color":"white"},{default:t(()=>[p(h(_.firstLetterName),1)]),_:1})]),_:1}),r(c,null,{default:t(()=>[r(f,null,{default:t(()=>[p(h(e.fullName),1)]),_:1}),r(f,{caption:""},{default:t(()=>[p(h(e.userRole),1)]),_:1})]),_:1}),r(c,null,{default:t(()=>[e.userStatus?(s(),l(f,{key:0,caption:""},{default:t(()=>[p(h(_.userMainStatusText),1)]),_:1})):g("",!0),e.userPosition?(s(),l(f,{key:1,caption:""},{default:t(()=>[p(h(e.userPosition),1)]),_:1})):g("",!0)]),_:1}),r(c,{style:{position:"relative"}},{default:t(()=>[e.badgeInfo?(s(),l(B,{key:0,color:"secondary",floating:"",transparent:"",label:e.badgeInfo},null,8,["label"])):g("",!0)]),_:1})]),_:1},8,["to"])),[[A]])]),_:1})}var q=k(M,[["render",V]]);const D={};function E(m,n,e,a,i,_){return s(),l(N,{class:"my-card q-mb-sm",flat:"",bordered:""},{default:t(()=>[r(x,{style:{"max-width":"250px"}},{default:t(()=>[r(c,{avatar:""},{default:t(()=>[r(S,{type:"QAvatar"})]),_:1}),r(c,null,{default:t(()=>[r(f,null,{default:t(()=>[r(S,{type:"text"})]),_:1}),r(f,{caption:""},{default:t(()=>[r(S,{type:"text",width:"65%"})]),_:1})]),_:1})]),_:1})]),_:1})}var j=k(D,[["render",E]]);const F={data(){return{users:null,reserve_users:{},skeletons:10}},components:{UserCard:q,UserCardSkeleton:j},methods:{...L("user",["positionsLoad"]),async getAllUsers(){return new Promise((m,n)=>{R.get(`/api/users?users_list_type=${this.$route.name}`).then(e=>{(e.status===200||e.status===201)&&(this.users=e.data,m(e))}).catch(e=>{n(e)})})},sortUsersByPositions(){this.$store.state.user.positions?this.getAllUsers().then(m=>{if(this.$route.name==="personnel-reserve"){this.reserve_users={},this.users.sort((n,e)=>n.meta.reserve_prioricy>e.meta.reserve_prioricy?1:-1);for(let n=0;n<this.users.length;n++){let e=this.users[n],a=this.$store.state.user.positions.find(i=>i.crm_id==e.meta.reserve_position_crm_id).name;typeof this.reserve_users[a]=="undefined"?this.reserve_users[a]=[e]:this.reserve_users[a].push(e)}}}):this.positionsLoad().then(m=>{console.log(m),this.getAllUsers().then(n=>{if(this.$route.name==="personnel-reserve"){this.reserve_users={},this.users.sort((e,a)=>e.meta.reserve_prioricy>a.meta.reserve_prioricy?1:-1);for(let e=0;e<this.users.length;e++){let a=this.users[e],i=this.$store.state.user.positions.find(_=>_.crm_id==a.meta.reserve_position_crm_id).name;typeof this.reserve_users[i]=="undefined"?this.reserve_users[i]=[a]:this.reserve_users[i].push(a)}}})})}},computed:{},watch:{"$route.path"(){this.users=null,this.sortUsersByPositions()}},mounted(){this.$route.name==="personnel-reserve"?this.sortUsersByPositions():this.getAllUsers()}},G={key:0,class:"skeleton-wrapper"},J={key:1},K={key:2};function O(m,n,e,a,i,_){const $=U("UserCardSkeleton"),b=U("UserCard");return s(),d(v,null,[i.users===null?(s(),d("div",G,[(s(!0),d(v,null,y(i.skeletons,o=>(s(),l($,{key:o}))),128))])):g("",!0),this.$route.name==="personnel-reserve"?(s(),d("div",J,[r(P,{padding:"",class:"menu-list"},{default:t(()=>[(s(!0),d(v,null,y(i.reserve_users,(o,Q)=>(s(),l(C,{key:Q,label:Q,"content-inset-level":1},{default:t(()=>[(s(!0),d(v,null,y(o,u=>(s(),l(b,{fullName:u.family+" "+u.name+" "+u.middle_name,userRole:u.role,userStatus:u.status,userPosition:u.position.name,"user-id":u.id,badgeInfo:`\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442: ${u.meta.reserve_prioricy}`,key:u},null,8,["fullName","userRole","userStatus","userPosition","user-id","badgeInfo"]))),128))]),_:2},1032,["label"]))),128))]),_:1})])):(s(),d("div",K,[(s(!0),d(v,null,y(i.users,o=>(s(),l(b,{fullName:o.family+" "+o.name+" "+o.middle_name,userRole:o.role,userStatus:o.status,userPosition:o.position.name,"user-id":o.id,key:o},null,8,["fullName","userRole","userStatus","userPosition","user-id"]))),128))]))],64)}var le=k(F,[["render",O]]);export{le as default};
