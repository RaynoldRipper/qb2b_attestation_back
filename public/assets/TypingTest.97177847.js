import{a9 as f,ab as h,_ as m,K as n,L as o,S as c,a4 as T,O as y,Q as I,T as _,J as u,M as p,aq as x}from"./index.0360f8b2.js";import{I as A}from"./InfoMessage.6cc4fe54.js";const v={data(){return{testStatus:"WAITING",textArray:[],currentArrayItem:!1,timer:0,timerInterval:!1,results:{totalSuccess:0,totalError:0,timeLeft:0}}},props:{textToTyping:String},created(){const t={prev_error:null};document.addEventListener("keydown",e=>{const r=[9,20,16,17,18,93];if(this.testStatus==="STARTED"&&r.indexOf(e.keyCode)==-1&&this.currentArrayItem<this.textArray.length)if(e.key==this.textArray[this.currentArrayItem]){let s=document.querySelector(`span[data-array-item="${this.currentArrayItem}"]`);s.classList="letter letter--passed",this.setCurrentItem(++this.currentArrayItem),this.results.totalSuccess++,this.currentArrayItem<this.textArray.length?document.querySelector(`span[data-array-item="${this.currentArrayItem}"]`).classList="letter letter--current":this.currentArrayItem==this.textArray.length&&(this.results.timeLeft=this.timer,this.testStatus="FINISHED",this.saveResults(),console.log(this.results))}else{t.prev_error!==this.currentArrayItem&&(this.results.totalError++,t.prev_error=this.currentArrayItem);let s=document.querySelector(`span[data-array-item="${this.currentArrayItem}"]`);s.classList="letter letter--error"}})},methods:{...f("tests",["saveUserTest"]),setTextArray(t){this.textArray=t},setCurrentItem(t){this.textArray.length>0&&t<this.textArray.length&&(this.currentArrayItem=t)},saveResults:function(){let t={source:this.results,test_id:7,user_id:this.getUser.id,attestation_id:this.attestationId};this.saveUserTest(t).then(e=>{this.$router.push("/tests")})}},computed:{...h("user",["getUser","positionCrmId"]),...h("tests",["getTests","attestationId"]),textToHtml(){let t=this.textToTyping.split("");this.setTextArray(t);let e="";for(let r=0;r<t.length;r++){let s="";r==0&&(s=" letter--current",this.currentArrayItem==!1&&this.setCurrentItem(r));let a=t[r];e+=`<span class="letter${s}" data-array-item="${r}">${a}</span>`}return e}},watch:{testStatus(t){this.testStatus=="STARTED"?this.timerInterval=setInterval(()=>{this.currentArrayItem!=!1&&(console.log(this.timer),this.timer++)},1e3):this.testStatus=="FINISHED"&&this.timerInterval!==!1&&clearTimeout(this.timerInterval)},currentArrayItem(t){}}},g=["innerHTML"],S={class:"buttons-wrap"},$={key:1,class:""};function k(t,e,r,s,a,l){return n(),o(_,null,[a.testStatus==="STARTED"?(n(),o("div",{key:0,class:"text",innerHTML:l.textToHtml},null,8,g)):c("",!0),T("div",S,[a.testStatus==="WAITING"?(n(),y(I,{key:0,color:"primary",label:"\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C \u043A \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E",onClick:e[0]||(e[0]=i=>a.testStatus="STARTED")})):c("",!0)]),a.testStatus==="FINISHED"?(n(),o("div",$)):c("",!0)],64)}var C=m(v,[["render",k]]);Array.prototype.rand=function(){return this[Math.floor(Math.random()*this.length)]};const E={data(){return{texts_for_typing:['\u0412\u0430\u0432\u0438\u043B\u043E\u043D - \u0434\u0440\u0435\u0432\u043D\u0438\u0439 \u0433\u043E\u0440\u043E\u0434 \u0432 \u042E\u0436\u043D\u043E\u0439 \u041C\u0435\u0441\u043E\u043F\u043E\u0442\u0430\u043C\u0438\u0438, \u0441\u0442\u043E\u043B\u0438\u0446\u0430 \u0412\u0430\u0432\u0438\u043B\u043E\u043D\u0441\u043A\u043E\u0433\u043E \u0446\u0430\u0440\u0441\u0442\u0432\u0430. \u0412\u0430\u0436\u043D\u044B\u0439 \u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439, \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u044B\u0439 \u0446\u0435\u043D\u0442\u0440 \u0414\u0440\u0435\u0432\u043D\u0435\u0433\u043E \u043C\u0438\u0440\u0430, \u043E\u0434\u0438\u043D \u0438\u0437 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u0433\u043E\u0440\u043E\u0434\u043E\u0432 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 "\u043F\u0435\u0440\u0432\u044B\u0439 \u043C\u0435\u0433\u0430\u043B\u043E\u043F\u043E\u043B\u0438\u0441" \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B \u0445\u0440\u0438\u0441\u0442\u0438\u0430\u043D\u0441\u043A\u043E\u0439 \u044D\u0441\u0445\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B. \u0420\u0443\u0438\u043D\u044B \u0412\u0430\u0432\u0438\u043B\u043E\u043D\u0430 - \u0433\u0440\u0443\u043F\u043F\u0430 \u0445\u043E\u043B\u043C\u043E\u0432 \u0443 \u0433\u043E\u0440\u043E\u0434\u0430 \u042D\u043B\u044C-\u0425\u0438\u043B\u043B\u0430 (\u0418\u0440\u0430\u043A), \u0432 90 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u0430\u0445 \u043A \u044E\u0433\u0443 \u043E\u0442 \u0411\u0430\u0433\u0434\u0430\u0434\u0430. \u041E\u0431\u044A\u0435\u043A\u0442 \u0432\u0441\u0435\u043C\u0438\u0440\u043D\u043E\u0433\u043E \u043D\u0430\u0441\u043B\u0435\u0434\u0438\u044F \u042E\u041D\u0415\u0421\u041A\u041E.',"\u0414\u0440\u0435\u0432\u043D\u0435\u0439\u0448\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0433\u0440\u0435\u0447\u0435\u0441\u043A\u043E\u0439 \u043C\u0438\u0444\u043E\u043B\u043E\u0433\u0438\u0438 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E \u0438\u0437 \u0442\u0430\u0431\u043B\u0438\u0447\u0435\u043A \u044D\u0433\u0435\u0439\u0441\u043A\u043E\u0439 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B, \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u043B\u0438\u043D\u0435\u0439\u043D\u044B\u043C \u043F\u0438\u0441\u044C\u043C\u043E\u043C \u0411. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u043D\u0430 \u043D\u0435\u043C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0431\u043E\u0433\u043E\u0432, \u043C\u043D\u043E\u0433\u0438\u0435 \u0438\u0437 \u043D\u0438\u0445 \u0438\u043C\u0435\u043D\u0443\u044E\u0442\u0441\u044F \u0438\u043D\u043E\u0441\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u0443 \u0440\u044F\u0434\u0430 \u0438\u043C\u0451\u043D \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u0436\u0435\u043D\u0441\u043A\u0438\u0435 \u0430\u043D\u0430\u043B\u043E\u0433\u0438. \u0423\u0436\u0435 \u0432 \u043A\u0440\u0438\u0442\u043E-\u043C\u0438\u043A\u0435\u043D\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B \u0417\u0435\u0432\u0441, \u0410\u0444\u0438\u043D\u0430, \u0414\u0438\u043E\u043D\u0438\u0441 \u0438 \u0440\u044F\u0434 \u0434\u0440\u0443\u0433\u0438\u0445, \u0445\u043E\u0442\u044F \u0438\u0445 \u0438\u0435\u0440\u0430\u0440\u0445\u0438\u044F \u043C\u043E\u0433\u043B\u0430 \u043E\u0442\u043B\u0438\u0447\u0430\u0442\u044C\u0441\u044F \u043E\u0442 \u043F\u043E\u0437\u0434\u043D\u0435\u0439\u0448\u0435\u0439.","\u0412\u0438\u0437\u0430\u043D\u0442\u0438\u0439 - \u0434\u0440\u0435\u0432\u043D\u0435\u0433\u0440\u0435\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u043E\u0440\u043E\u0434 \u0432 \u043C\u0435\u0441\u0442\u0435 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u041C\u0440\u0430\u043C\u043E\u0440\u043D\u043E\u0433\u043E \u043C\u043E\u0440\u044F, \u0411\u043E\u0441\u0444\u043E\u0440\u0430 \u0438 \u0417\u043E\u043B\u043E\u0442\u043E\u0433\u043E \u0420\u043E\u0433\u0430, \u043F\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u043F\u043E\u043B\u044F. \u041E\u0441\u043D\u043E\u0432\u0430\u043D \u0434\u043E\u0440\u0438\u0439\u0441\u043A\u0438\u043C\u0438 \u043A\u043E\u043B\u043E\u043D\u0438\u0441\u0442\u0430\u043C\u0438 \u0438\u0437 \u041C\u0435\u0433\u0430\u0440\u0438\u0434\u044B \u0432 7 \u0432\u0435\u043A\u0435 \u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B. \u0412\u043E\u0448\u0451\u043B \u0432 \u0441\u043E\u0441\u0442\u0430\u0432 \u0420\u0438\u043C\u0441\u043A\u043E\u0439 \u0438\u043C\u043F\u0435\u0440\u0438\u0438 \u0432\u043E 2 \u0432\u0435\u043A\u0435 \u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B. \u0412 330 \u0433\u043E\u0434\u0443 \u043F\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044E \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u0430 \u041F\u0435\u0440\u0432\u043E\u0433\u043E \u0412\u0435\u043B\u0438\u043A\u043E\u0433\u043E \u0441\u0442\u0430\u043B \u0441\u0442\u043E\u043B\u0438\u0446\u0435\u0439 \u0438\u043C\u043F\u0435\u0440\u0438\u0438 \u043F\u043E\u0434 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u041D\u043E\u0432\u044B\u0439 \u0420\u0438\u043C, \u0437\u0430\u0442\u0435\u043C - \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u043F\u043E\u043B\u044C."]}},components:{MainTextArea:C,Info:A}},L=x('<div class="title-container"><h3 class="title--style-1"><span class="text-primary">\u0422\u0435\u0441\u0442:</span> &quot;\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0435\u0447\u0430\u0442\u0438&quot;</h3></div><div class="text-container"><p class="text--style-1 text-center"> \u0417\u0434\u0435\u0441\u044C \u0432\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0432\u043E\u044E \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u0435\u0447\u0430\u0442\u0438. \u041F\u0440\u043E\u0445\u043E\u0434\u043D\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0430\u0442 \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 150 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 \u0432 \u043C\u0438\u043D\u0443\u0442\u0443. </p></div>',2);function M(t,e,r,s,a,l){const i=u("Info"),d=u("MainTextArea");return n(),o(_,null,[L,p(i,{class:"q-mb-xl",message_type:"info",message_text:"\u041A\u0430\u043A \u0431\u0443\u0434\u0435\u0442\u0435 \u0433\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443: '\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C \u043A \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E'. <br> \u0422\u0430\u0439\u043C\u0435\u0440 \u043D\u0430\u0447\u043D\u0435\u0442 \u043E\u0442\u0441\u0447\u0435\u0442 \u043F\u043E\u0441\u043B\u0435 \u0432\u0432\u043E\u0434\u0430 \u043F\u0435\u0440\u0432\u043E\u0439 \u0431\u0443\u043A\u0432\u044B."}),p(d,{textToTyping:this.texts_for_typing.rand()},null,8,["textToTyping"])],64)}var N=m(E,[["render",M]]);const q={components:{TypingTestComponent:N}};function D(t,e,r,s,a,l){const i=u("TypingTestComponent");return n(),y(i)}var R=m(q,[["render",D]]);export{R as default};
