(self["webpackChunkquasar_app"]=self["webpackChunkquasar_app"]||[]).push([[847],{8847:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>se});var r=s(3673);function i(e,t,s,i,c,o){const n=(0,r.up)("CorrectureComponent");return(0,r.wg)(),(0,r.j4)(n,{onCorrecturePassed:o.testChecker,onCorrectureUnpassed:t[0]||(t[0]=t=>e.correcture=!1)},null,8,["onCorrecturePassed"])}const c={class:"container"};function o(e,t,s,i,o,n){const a=(0,r.up)("CorrectureTimer"),u=(0,r.up)("CorrectureInfo"),l=(0,r.up)("CorrectureContent");return(0,r.wg)(),(0,r.iD)("div",c,["undefined"===n.storageKeyType("correcture")?((0,r.wg)(),(0,r.j4)(a,{key:0,currentTime:o.currentTime,timeLeft:o.timeLeft,timer:o.timer},null,8,["currentTime","timeLeft","timer"])):(0,r.kq)("",!0),"undefined"===n.storageKeyType("correcture")||1===o.showInfo?((0,r.wg)(),(0,r.j4)(u,{key:1,timerStatus:o.timerStatus,accessSymbols:o.accessSymbols,success:o.success,errosrs:o.errosrs,checked:o.checked,intervalChecked:o.intervalChecked,missed:o.missed,currentTime:o.currentTime,testStatus:o.testStatus},null,8,["timerStatus","accessSymbols","success","errosrs","checked","intervalChecked","missed","currentTime","testStatus"])):(0,r.kq)("",!0),"undefined"===n.storageKeyType("correcture")?((0,r.wg)(),(0,r.j4)(l,{key:2,symbols:1925,generated:o.generated,checked:o.checked,currentTime:o.currentTime,modulo:o.modulo,onGeneratedPush:n.generatedPush,onCheckedPush:n.checkedPush,onCheckedUnset:n.checkedUnset,onStartTimer:n.startTimer,onCheckMissed:n.pushMissed},null,8,["generated","checked","currentTime","modulo","onGeneratedPush","onCheckedPush","onCheckedUnset","onStartTimer","onCheckMissed"])):(0,r.kq)("",!0)])}var n=s(3617),a=(s(71),s(2323));const u={class:"buttons-wrap"},l={class:"flex-container"},h=["data-index"];function d(e,t,s,i,c,o){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",u,[0===this.generated.length?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn btn--main",onClick:t[0]||(t[0]=(...e)=>o.symbolGenrator&&o.symbolGenrator(...e))},"Начать")):(0,r.kq)("",!0)]),(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.generated,((e,i)=>((0,r.wg)(),(0,r.iD)("span",{class:"symbol",key:e,onClick:t[1]||(t[1]=(...e)=>o.symbolCheck&&o.symbolCheck(...e)),"data-index":i},(0,a.zw)(s.generated[i]),9,h)))),128))])],64)}const m={data(){return{count:0,ABC:"а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я"}},props:{symbols:Number,modulo:Number,currentTime:Number,generated:Array,checked:Array},emits:["generated-push","checked-push","checked-unset","check-missed","start-timer"],methods:{symbolGenrator:function(){let e=this.ABC.split(" ");for(let t=0;t<this.symbols;t++){let t=e[Math.floor(Math.random()*e.length)];this.$emit("generated-push",t)}this.$emit("start-timer")},symbolCheck:function(e){if(this.currentTime>0){let t=e.target,s=parseInt(t.dataset.index);0===this.modulo&&this.$emit("start-timer"),-1===this.checked.indexOf(s)?(this.$emit("checked-push",s),t.classList.add("active")):this.$emit("checked-unset",[t,s]),this.$emit("check-missed",s)}}}};m.render=d;const p=m,k={class:"timer-wrapper timer-wrapper--sticky"},f={key:0,class:"timer"},g={key:1,class:"timer-out"};function y(e,t,s,i,c,o){return(0,r.wg)(),(0,r.iD)("div",k,[s.currentTime>0?((0,r.wg)(),(0,r.iD)("div",f,(0,a.zw)(o.timerStyle()),1)):0===s.currentTime?((0,r.wg)(),(0,r.iD)("div",g,"Время вышло!")):(0,r.kq)("",!0)])}const w={data(){return{}},props:{currentTime:Number,timeLeft:Number,timer:Number},methods:{timerStyle(){let e=Math.floor(this.currentTime/60)>9?Math.floor(this.currentTime/60):"0"+Math.floor(this.currentTime/60),t=this.currentTime-60*e>9?this.currentTime-60*e:"0"+(this.currentTime-60*e).toString();return`${e}:${t}`}}};w.render=y;const S=w;var b=s(7971),T=s.n(b);const C={class:"correcture info text-center"},v={key:0},I=(0,r._)("h4",null,"Тест Корректурная проба",-1),_=(0,r._)("p",{class:"info__text"},' Задача – выделять только буквы: "м", "а", "к", "в" из предоставленного списка букв. Время на прохождение теста даётся 4 минуты. В случае ошибки, вы можете кликнуть повторно на неправильно выделенную букву, таким образом убрав отметку с неё. ',-1),x={key:0,class:"info__text"},D=(0,r.Uk)(" Буквы которые нужно выделять: "),N={key:1,class:""},O=(0,r._)("p",null,"Ваши результаты:",-1),A={key:2,class:"text-center"},q=(0,r._)("p",{class:"sub-text"},"Снизу показан пример",-1),$=(0,r._)("img",{class:"img",alt:"Test 2",src:T()},null,-1),R=[q,$];function P(e,t,s,i,c,o){return(0,r.wg)(),(0,r.iD)("div",C,["WAITING"===s.testStatus||"STARTED"===s.testStatus?((0,r.wg)(),(0,r.iD)("div",v,[I,_,"undefined"===o.storageKeyType("correcture")?((0,r.wg)(),(0,r.iD)("p",x,[D,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.accessSymbols,(e=>((0,r.wg)(),(0,r.iD)("span",{key:e},(0,a.zw)(e)+", ",1)))),128))])):(0,r.kq)("",!0)])):"undefined"!==o.storageKeyType("correcture")?((0,r.wg)(),(0,r.iD)("div",N,[O,(0,r._)("p",null,"Ошибок: "+(0,a.zw)(s.errosrs.length)+". Правильных выделений:"+(0,a.zw)(s.success.length)+". Всего обработано символов: "+(0,a.zw)(o.maxArrayValue(s.checked))+". Пропущено символов: "+(0,a.zw)(s.missed.length),1)])):(0,r.kq)("",!0),"WAITING"===s.testStatus?((0,r.wg)(),(0,r.iD)("div",A,R)):(0,r.kq)("",!0)])}const J={props:{accessSymbols:Array,checked:Array,intervalChecked:Array,success:Array,errosrs:Array,missed:Array,currentTime:Number,timerStatus:Number,testStatus:String},methods:{storageKeyType:function(e){return typeof localStorage[e]},maxArrayValue:function(e){let t=0;for(let s=0;s<e.length;s++)t<e[s]&&(t=e[s]);return t}}};J.render=P;const L=J;var M=s(8880);const U={class:"info"},V=(0,r._)("div",{class:"content"},"Тест Корректурная проба пройден",-1),K={class:"buttons-wrapper"},G={key:0,class:"modal"},H={class:"modal-top"},z=(0,r._)("i",{class:"i i-close"},null,-1),j=[z],E=(0,r._)("div",{class:"modal-head"},[(0,r._)("h5",{class:"q-pa-lg m-0 text-center"},"Введите пароль чтобы пройти тест заново")],-1),F={class:"modal-body"},W={class:"input-field"},Y={key:0,class:"notific notific--error"},B={class:"modal-footer"};function Q(e,t,s,i,c,o){return(0,r.wg)(),(0,r.iD)("div",U,[V,(0,r._)("div",K,[0===s.showInfo?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"btn btn--main",onClick:t[0]||(t[0]=(...e)=>o.showResults&&o.showResults(...e))}," Посмотреть результаты ")):(0,r.kq)("",!0),1===s.showInfo?((0,r.wg)(),(0,r.iD)("button",{key:1,class:"btn btn--main",onClick:t[1]||(t[1]=(...e)=>o.hideResults&&o.hideResults(...e))}," Скрыть результаты ")):(0,r.kq)("",!0),c.passwordInput?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",{key:2,class:"btn btn--main",onClick:t[2]||(t[2]=e=>c.passwordInput=!0)},"Повторить тестированние")),(0,r._)("button",{class:"btn btn--main",onClick:t[3]||(t[3]=(...e)=>o.nextTest&&o.nextTest(...e))},"Перейти к следующему тесту")]),c.passwordInput?((0,r.wg)(),(0,r.iD)("div",G,[(0,r._)("div",H,[(0,r._)("button",{class:"btn btn--close",onClick:t[4]||(t[4]=e=>c.passwordInput=!1)},j)]),E,(0,r._)("div",F,[(0,r._)("div",W,[(0,r.wy)((0,r._)("input",{class:"input-main",type:"text",placeholder:"Введите пароль","onUpdate:modelValue":t[5]||(t[5]=e=>c.passwordInputValue=e),onKeyup:t[6]||(t[6]=(0,M.D2)(((...e)=>o.passwordHandler&&o.passwordHandler(...e)),["enter"]))},null,544),[[M.nr,c.passwordInputValue]]),c.passwordValid?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",Y,"Неверный пароль"))])]),(0,r._)("div",B,[(0,r._)("button",{class:"btn btn--main",onClick:t[7]||(t[7]=(...e)=>o.passwordHandler&&o.passwordHandler(...e))},"Подтвердить")])])):(0,r.kq)("",!0)])}s(52);const X={data(){return{passwordInput:!1,passwordInputValue:"",password:"qwe123",passwordValid:!0,posts:[],errors:[]}},props:{showInfo:Number},emits:["show-results","hide-results","pull-storage-data","correcture-passed"],methods:{showResults:function(){this.$emit("show-results")},hideResults:function(){this.$emit("hide-results")},pullDatatFromStorage:function(){this.$emit("pull-storage-data",[JSON.parse(localStorage.correcture).generated,JSON.parse(localStorage.correcture).checked,JSON.parse(localStorage.correcture).success,JSON.parse(localStorage.correcture).errosrs,JSON.parse(localStorage.correcture).missed,JSON.parse(localStorage.correcture).interval,JSON.parse(localStorage.correcture).results])},passwordHandler(){this.password===this.passwordInputValue?(this.passwordValid=!0,this.$emit("clear-test")):(this.passwordValid=!1,console.log("error"))},nextTest(){if("undefined"!==typeof JSON.parse(localStorage.correcture).testPassed&&!0===JSON.parse(localStorage.correcture).testPassed)this.$emit("correcture-passed");else{let e=JSON.parse(localStorage.correcture);e.testPassed=!0,localStorage.correcture=JSON.stringify(e)}}},mounted(){this.pullDatatFromStorage()}};X.render=Q;const Z={data(){return{showInfo:0,testStatus:"WAITING",currentTime:240,timeLeft:0,timer:null,timerStatus:0,modulo:null,accessSymbols:["м","а","к","в"],generated:[],checked:[],intervalChecked:[],success:[],errosrs:[],missed:[],results:[]}},emits:["correcture-unpassed","correcture-passed"],components:{CorrectureContent:p,CorrectureTimer:S,CorrectureInfo:L},methods:{...(0,n.nv)("tests",["saveUserTest"]),showResults:function(){0===this.showInfo?this.showInfo=1:1===this.showInfo&&(this.showInfo=0)},startTimer(){0==this.timerStatus&&0!==this.currentTime&&(this.timer=setInterval((()=>{this.currentTime--,this.timeLeft++,this.modulo=this.timeLeft%60}),1e3),this.timerStatus=1,this.testStatus="STARTED")},stopTimer(){clearTimeout(this.timer),this.timerStatus=0},generatedPush:function(e){this.generated.push(e)},checkedPush:function(e){this.checked.push(e),-1!=this.accessSymbols.indexOf(this.generated[e])?this.success.push(e):this.errosrs.push(e)},checkedUnset:function(e){let t=e[0],s=e[1],r=this.checked.indexOf(s),i=this.errosrs.indexOf(s),c=this.success.indexOf(s);-1!==r&&(this.checked.splice(r,1),t.classList.remove("active")),-1!=i&&this.errosrs.splice(i,1),-1!=c&&this.success.splice(c,1)},pushMissed:function(){this.missed=[];let e=0;for(let t=0;t<this.checked.length;t++)e<this.checked[t]&&(e=this.checked[t]);for(let t=0;t<e;t++)-1!==this.accessSymbols.indexOf(this.generated[t])&&-1===this.missed.indexOf(t)&&-1===this.checked.indexOf(t)&&this.missed.push(t)},getResult:function(){let e=this.intervalChecked.length,t=0;for(let s=0;s<e;s++){let e=0,r=0,i=0,c=0,o=this.intervalChecked[s];for(let s=t;s<o;s++)-1!==this.accessSymbols.indexOf(this.generated[s])&&e++,-1!==this.success.indexOf(s)&&r++,-1!==this.errosrs.indexOf(s)&&c++,-1!==this.missed.indexOf(s)&&i++;let n=Math.round((r-c)/e*100),a=Math.round((o-t)*n/100),u={viewSymbols:o-t,neededSymbols:e,successSymbols:r,missedSymbols:i,errorSymbols:c,accuracy:n,stability:a};t=o,this.results.push(u)}},storageKeyType:function(e){return typeof localStorage[e]},saveResults:function(){let e={generated:this.generated,checked:this.checked,success:this.success,errosrs:this.errosrs,interval:this.intervalChecked,missed:this.missed,results:this.results,test_id:1,user_id:this.getUser.id,attestation_id:this.attestationId};this.saveUserTest(e).then((e=>{this.$router.push("/tests")}))},pullStorageData:function(e){this.generated=e[0],this.checked=e[1],this.success=e[2],this.errosrs=e[3],this.missed=e[4],this.intervalChecked=e[5],this.results=e[6]},clearTest:function(){this.generated=[],this.checked=[],this.success=[],this.errosrs=[],this.missed=[],this.intervalChecked=[],this.results=[],localStorage.removeItem("correcture"),this.currentTime=240,this.timeLeft=0,this.showInfo=1,this.$emit("correcture-unpadssed")},passed:function(){this.$emit("correcture-passed")}},unmounted(){this.stopTimer()},mounted(){"undefined"!==typeof localStorage.correcture&&(this.testStatus="STORAGE"),null===this.attestationId&&this.$router.push("/tests")},computed:{...(0,n.Se)("user",["getUser"]),...(0,n.Se)("tests",["attestationId"])},watch:{currentTime(e){if(0===e&&(this.testStatus="FINISHED"),0===this.modulo){this.stopTimer(),setTimeout((()=>{if(0===this.modulo&&this.timeLeft/60>this.intervalChecked.length){let e=0;for(let t=0;t<this.checked.length;t++)e<this.checked[t]&&(e=this.checked[t]);this.intervalChecked.push(e)}this.startTimer()}),5e3);let e=0;for(let t=0;t<this.checked.length;t++)e<this.checked[t]&&(e=this.checked[t]);this.intervalChecked.push(e)}0===e&&(this.stopTimer(),this.getResult(),this.saveResults())}}};Z.render=o;const ee=Z,te={components:{CorrectureComponent:ee},methods:{testChecker(){this.correcture=!0}}};te.render=i;const se=te},7971:(e,t,s)=>{e.exports=s.p+"img/test-1.9ff23ba9.gif"}}]);