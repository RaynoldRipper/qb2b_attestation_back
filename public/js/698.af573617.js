"use strict";(self["webpackChunkquasar_app"]=self["webpackChunkquasar_app"]||[]).push([[698],{4926:(t,e,r)=>{r.d(e,{Z:()=>h});var s=r(3673),n=r(2323);const a={class:"row info-section__content"},i=["innerHTML"];function o(t,e,r,o,l,c){const u=(0,s.up)("q-icon");return(0,s.wg)(),(0,s.iD)("div",{class:(0,n.C_)([c.color,"q-mt-xl q-mb-md info-section"])},[(0,s._)("div",a,[(0,s.Wm)(u,{class:"col-1 info-section__icon",name:c.icon},null,8,["name"]),(0,s._)("div",{class:"col-10 text--style-2",innerHTML:r.message_text},null,8,i),(0,s.WI)(t.$slots,"default")])],2)}const l={data(){return{icon_name:null}},props:{message_type:String,message_text:String},computed:{icon(){return this.message_type,"info"},color(){return"info"==this.message_type?"text-secondary":""}}};var c=r(4554),u=r(7518),m=r.n(u);l.render=o;const h=l;m()(l,"components",{QIcon:c.Z})},6698:(t,e,r)=>{r.r(e),r.d(e,{default:()=>v});var s=r(3673);function n(t,e,r,n,a,i){const o=(0,s.up)("TypingTestComponent");return(0,s.wg)(),(0,s.j4)(o)}const a=(0,s.uE)('<div class="title-container"><h3 class="title--style-1"><span class="text-primary">Тест:</span> &quot;Скорость печати&quot;</h3></div><div class="text-container"><p class="text--style-1 text-center"> Здесь вам предстоит проверить свою скорость печати. Проходной резульат не менее 150 символов в минуту. </p></div>',2);function i(t,e,r,n,i,o){const l=(0,s.up)("Info"),c=(0,s.up)("MainTextArea");return(0,s.wg)(),(0,s.iD)(s.HY,null,[a,(0,s.Wm)(l,{class:"q-mb-xl",message_type:"info",message_text:"Как будете готовы нажмите на кнопку: 'Приступить к тестированию'. <br> Таймер начнет отсчет после ввода первой буквы."}),(0,s.Wm)(c,{textToTyping:this.texts_for_typing.rand()},null,8,["textToTyping"])],64)}const o=["innerHTML"],l={class:"buttons-wrap"},c={key:1,class:""};function u(t,e,r,n,a,i){const u=(0,s.up)("q-btn");return(0,s.wg)(),(0,s.iD)(s.HY,null,["STARTED"===a.testStatus?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"text",innerHTML:i.textToHtml},null,8,o)):(0,s.kq)("",!0),(0,s._)("div",l,["WAITING"===a.testStatus?((0,s.wg)(),(0,s.j4)(u,{key:0,color:"primary",label:"Приступить к тестированию",onClick:e[0]||(e[0]=t=>a.testStatus="STARTED")})):(0,s.kq)("",!0)]),"FINISHED"===a.testStatus?((0,s.wg)(),(0,s.iD)("div",c)):(0,s.kq)("",!0)],64)}var m=r(3617);const h={data(){return{testStatus:"WAITING",textArray:[],currentArrayItem:!1,timer:0,timerInterval:!1,results:{totalSuccess:0,totalError:0,timeLeft:0}}},props:{textToTyping:String},created(){const t={prev_error:null};document.addEventListener("keydown",(e=>{const r=[9,20,16,17,18,93];if("STARTED"===this.testStatus&&-1==r.indexOf(e.keyCode)&&this.currentArrayItem<this.textArray.length)if(e.key==this.textArray[this.currentArrayItem]){let t=document.querySelector(`span[data-array-item="${this.currentArrayItem}"]`);t.classList="letter letter--passed",this.setCurrentItem(++this.currentArrayItem),this.results.totalSuccess++,this.currentArrayItem<this.textArray.length?document.querySelector(`span[data-array-item="${this.currentArrayItem}"]`).classList="letter letter--current":this.currentArrayItem==this.textArray.length&&(this.results.timeLeft=this.timer,this.testStatus="FINISHED",this.saveResults(),console.log(this.results))}else{t.prev_error!==this.currentArrayItem&&(this.results.totalError++,t.prev_error=this.currentArrayItem);let e=document.querySelector(`span[data-array-item="${this.currentArrayItem}"]`);e.classList="letter letter--error"}}))},methods:{...(0,m.nv)("tests",["saveUserTest"]),setTextArray(t){this.textArray=t},setCurrentItem(t){this.textArray.length>0&&t<this.textArray.length&&(this.currentArrayItem=t)},saveResults:function(){let t={source:this.results,test_id:7,user_id:this.getUser.id,attestation_id:this.attestationId};this.saveUserTest(t).then((t=>{this.$router.push("/tests")}))}},computed:{...(0,m.Se)("user",["getUser","positionCrmId"]),...(0,m.Se)("tests",["getTests","attestationId"]),textToHtml(){let t=this.textToTyping.split("");this.setTextArray(t);let e="";for(let r=0;r<t.length;r++){let s="";0==r&&(s=" letter--current",0==this.currentArrayItem&&this.setCurrentItem(r));let n=t[r];e+=`<span class="letter${s}" data-array-item="${r}">${n}</span>`}return e}},watch:{testStatus(t){"STARTED"==this.testStatus?this.timerInterval=setInterval((()=>{0!=this.currentArrayItem&&(console.log(this.timer),this.timer++)}),1e3):"FINISHED"==this.testStatus&&!1!==this.timerInterval&&clearTimeout(this.timerInterval)},currentArrayItem(t){}}};var y=r(8240),p=r(7518),d=r.n(p);h.render=u;const I=h;d()(h,"components",{QBtn:y.Z});var g=r(4926);Array.prototype.rand=function(){return this[Math.floor(Math.random()*this.length)]};const T={data(){return{texts_for_typing:['Вавилон - древний город в Южной Месопотамии, столица Вавилонского царства. Важный политический, экономический и культурный центр Древнего мира, один из крупнейших городов в истории человечества и "первый мегалополис" известный символ христианской эсхатологии и современной культуры. Руины Вавилона - группа холмов у города Эль-Хилла (Ирак), в 90 километрах к югу от Багдада. Объект всемирного наследия ЮНЕСКО.',"Древнейшее состояние греческой мифологии известно из табличек эгейской культуры, записанных линейным письмом Б. Для этого периода характерна немногочисленность богов, многие из них именуются иносказательно, у ряда имён имеются женские аналоги. Уже в крито-микенский период известны Зевс, Афина, Дионис и ряд других, хотя их иерархия могла отличаться от позднейшей.","Византий - древнегреческий город в месте соединения Мраморного моря, Босфора и Золотого Рога, предшественник Константинополя. Основан дорийскими колонистами из Мегариды в 7 веке до нашей эры. Вошёл в состав Римской империи во 2 веке до нашей эры. В 330 году по решению Константина Первого Великого стал столицей империи под названием Новый Рим, затем - Константинополь."]}},components:{MainTextArea:I,Info:g.Z}};T.render=i;const A=T,x={components:{TypingTestComponent:A}};x.render=n;const v=x}}]);