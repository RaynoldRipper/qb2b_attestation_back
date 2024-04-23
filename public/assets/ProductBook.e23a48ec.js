import{a9 as w,ab as v,_ as g,K as r,L as u,a3 as m,M as i,P as B,Q as T,S as p,T as x,aq as D,an as U,ac as $,ad as y,N as h,G as C,O as k,R as S,U as Q,J as q}from"./index.6f997eae.js";import{r as I,Q as O}from"./QRadio.2e4cef5e.js";import{Q as A}from"./QCheckbox.58a9f804.js";import{Q as b,a as R}from"./QItem.61a85ead.js";import{Q as V}from"./QItemLabel.7bf49f49.js";import{Q as N}from"./QList.ecf90d53.js";import"./use-dark.ba596b4d.js";import"./use-form.739a4b7f.js";const P={data(){return{test_id:2,document_crm_id:"\u041A002",document_link:null}},components:{},methods:{...w("tests",["testStart"]),refreshLink(c){let e=c.target;e.setAttribute("disabled","disabled");let s=this.document_link;this.document_link="",setTimeout(()=>{this.document_link=s,e.removeAttribute("disabled")},2e3)}},computed:{...v("tests",["getTests"])},mounted(){this.document_link===null&&I.regulationByCrmId(this.document_crm_id).then(c=>{this.document_link="https://docs.google.com/gview?url="+c.data.file_store+"&embedded=true"})}},E=D('<div class="title-container"><h3 class="title--style-1"><span class="text-primary">\u042D\u0442\u0430\u043F:</span> &quot;\u0417\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E \u0441 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u043C&quot;</h3></div><div class="text-container"><p class="text--style-1 text-center"> \u041D\u0430 \u044D\u0442\u043E\u043C \u044D\u0442\u0430\u043F\u0435 \u0432\u0430\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u0438\u0442 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 &quot;\u041A\u043D\u0438\u0433\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u041A\u0423\u04112\u0411&quot; \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u041F\u043E\u0441\u043B\u0435 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441 &quot;\u041A\u043D\u0438\u0433\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430 \u041A\u0423\u04112\u0411&quot;, \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u0436\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C \u043A \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E <b>(\u043E\u043D\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0441\u0430\u043C\u043E\u043C \u043D\u0438\u0437\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B)</b>, \u043F\u043E\u0441\u043B\u0435 \u0447\u0435\u0433\u043E \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u0442\u0435\u0441\u0442 \u0444\u043E\u0440\u043C\u0430\u0442\u0430: &quot;\u0412\u043E\u043F\u0440\u043E\u0441-\u043E\u0442\u0432\u0435\u0442&quot; </p></div>',2),L={class:"q-mt-xl q-mb-md info-section text-secondary"},G={class:"row info-section__content"},F=m("div",{class:"text--style-2"},"\u0415\u0441\u043B\u0438 \u043E\u043A\u043D\u043E \u0441\u043D\u0438\u0437\u0443 \u043F\u0443\u0441\u0442\u043E\u0435 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443:",-1),j={class:"frame-container shadow-10"},M=["src"];function W(c,e,s,o,t,a){return r(),u(x,null,[E,m("div",L,[m("div",G,[i(B,{class:"info-section__icon q-mr-md",name:"info"}),F,i(T,{class:"q-ml-md q-mr-md",color:"secondary",label:"\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u043A\u043D\u043E",onClick:a.refreshLink},null,8,["onClick"])])]),m("div",j,[t.document_link!==null?(r(),u("iframe",{key:0,class:"",src:t.document_link,frameborder:"0"},null,8,M)):p("",!0)])],64)}var H=g(P,[["render",W]]);const J={setup(){},data(){return{testData:[{name:"\u041A\u0430\u043A\u0438\u0435 \u0422\u0430\u0440\u0438\u0444\u044B \u0435\u0441\u0442\u044C \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438:",type:"checkbox",choice:[],answers:[{name:"\u041A\u0423\u04112\u0411 \u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044F",correct:!0,checked:!1},{name:"\u041B\u0435\u0433\u043A\u0438\u0439 \u0441\u0442\u0430\u0440\u0442",correct:!1,checked:!1},{name:"\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439",correct:!1,checked:!1},{name:"\u041A\u0423\u04112\u0411 \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u0447\u0435\u0442",correct:!0,checked:!1},{name:"\u041E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439",correct:!1,checked:!1},{name:"\u041A\u0423\u04112\u0411 \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u0430\u043C\u0438",correct:!0,checked:!1},{name:"\u041A\u0423\u04112\u0411 \u0411\u0438\u0437\u043D\u0435\u0441",correct:!1,checked:!1}]},{name:"\u041A\u0430\u043A\u0438\u0435 \u0440\u0430\u0437\u043E\u0432\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F:",type:"checkbox",choice:[],answers:[{name:"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043E\u0442\u0447\u0435\u0442\u043E\u0432",correct:!0,checked:!1},{name:"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u0438",correct:!0,checked:!1},{name:"\u0412\u044B\u043F\u0443\u0441\u043A \u042D\u0426\u041F",correct:!1,checked:!1},{name:"\u0421\u0434\u0430\u0447\u0430 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 \u042D\u0426\u041F \u041A\u0423\u04112\u0411",correct:!1,checked:!1},{name:"\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433",correct:!0,checked:!1},{name:"\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433",correct:!0,checked:!1},{name:"\u0421\u0434\u0430\u0447\u0430 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u043F\u043E \u0415\u0413\u0410\u0418\u0421",correct:!1,checked:!1},{name:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 1\u0421",correct:!1,checked:!1},{name:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u041F\u041A",correct:!1,checked:!1},{name:"\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u0418\u041F",correct:!1,checked:!1},{name:"\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u0418\u041F",correct:!1,checked:!1},{name:"\u041E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u041E\u041E\u041E",correct:!1,checked:!1},{name:"\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u041E\u041E\u041E",correct:!1,checked:!1},{name:"\u0421\u043C\u0435\u043D\u0430 \u0443\u0447\u0440\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432",correct:!1,checked:!1},{name:"\u041F\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043D\u0430 \u0432\u043E\u0438\u043D\u0441\u043A\u0438\u0439 \u0443\u0447\u0435\u0442",correct:!0,checked:!1},{name:"\u041F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u0438\u0435 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u043C\u043E\u0434\u0435\u043B\u0438",correct:!0,checked:!1}]},{name:"\u0412\u0435\u0434\u0435\u043D\u0438\u0435 \u0431\u0430\u043D\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F:",type:"radio",choice:[],answers:[{name:"\u0414\u0430",correct:!1,checked:!1},{name:"\u041D\u0435\u0442",correct:!0,checked:!1}]},{name:"\u0412 \u043A\u0430\u043A\u0438\u0445 \u0431\u0430\u0437\u0430\u0445 \u043C\u044B \u0432\u0435\u0434\u0435\u043C \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u0430",type:"checkbox",choice:[],answers:[{name:"\u041E\u0431\u0449\u0430\u044F \u0431\u0430\u0437\u0430 1\u0421",correct:!0,checked:!1},{name:"\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0431\u0430\u0437\u0430 1\u0421",correct:!0,checked:!1},{name:"1\u0421 \u0423\u0422\u041F",correct:!1,checked:!1},{name:"\u041A\u043E\u043D\u0442\u0443\u0440.\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044F",correct:!1,checked:!1},{name:"\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u043E\u0431\u0449\u0430\u044F \u0431\u0430\u0437\u0430 1\u0421",correct:!0,checked:!1},{name:"1\u0421 \u041E\u0431\u043B\u0430\u043A\u043E",correct:!0,checked:!1},{name:"1\u0421 \u0424\u0420\u042D\u0428",correct:!1,checked:!1}]},{name:"\u041A\u0430\u043A\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u044B \u0441\u0434\u0430\u0447\u0438 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0435\u0441\u0442\u044C \u0432 \u041A\u0423\u04112\u0411:",choice:[],type:"checkbox",answers:[{name:"\u041C\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u042D\u0426\u041F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043A \u0441\u0432\u043E\u0435\u043C\u0443 \u043B\u0438\u0447\u043D\u043E\u043C\u0443 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0443 \u0443\u043F\u043E\u043B\u043D\u043E\u043C\u043E\u0447\u0435\u043D\u043D\u043E\u0439 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u0438 \u0438 \u0441\u0434\u0430\u0447\u0430 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438, \u0430 \u0442\u0430\u043A \u0436\u0435 \u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0435.",correct:!0,checked:!1},{name:"\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C \u043D\u0430 \u043F\u043E\u0447\u0442\u0443, \u0430 \u043A\u043B\u0438\u0435\u043D\u0442 \u0441\u0430\u043C \u0441\u0434\u0430\u0435\u0442 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u043C \u0435\u043C\u0443 \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C. \u0422\u0430\u043A \u0436\u0435 \u0441\u0430\u043C \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E\u0442 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0439",correct:!0,checked:!1},{name:"\u041C\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u043F\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u0435 \u043A \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \u0441\u0434\u0430\u0435\u043C \u043E\u0442\u0447\u0435\u0442\u044B \u0447\u0435\u0440\u0435\u0437 \u043B\u044E\u0431\u0443\u044E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0443\u044E \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u042D\u0414\u041E",correct:!1,checked:!1}]},{name:"\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0439 \u0443\u0447\u0435\u0442 \u0432 \u0422\u0430\u0440\u0438\u0444\u0435 \xAB\u041D\u0435\u0442\xBB \u044D\u0442\u043E:",type:"radio",choice:[],answers:[{name:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0432 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u043C \u0443\u0447\u0435\u0442\u0435 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043F\u043E\u0442\u043E\u0432\u0430\u0440\u043D\u043E\u0433\u043E \u0443\u0447\u0435\u0442\u0430, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0441\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043F\u043E \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u043A\u0430\u0440\u0442\u0430\u043C \u043F\u0440\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435. \u0422\u043E \u0435\u0441\u0442\u044C \u0443\u0447\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0441\u0443\u043C\u043C\u0430\u043C\u0438 \u0438 \u043D\u043E\u043C\u0435\u0440\u0430\u043C\u0438 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u044B\u0445.",correct:!1,checked:!1},{name:"\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043F\u0443\u0442\u0438 \u0411\u0438\u0437\u043D\u0435\u0441 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043E\u043D \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0431\u043B\u043E\u043A \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u0443\u0447\u0435\u0442\u0430 \u0438 \u043C\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043D\u0430\u043B\u043E\u0433\u043E\u043E\u0431\u043B\u0430\u0433\u0430\u0435\u043C\u0443\u044E \u0431\u0430\u0437\u0443 \u0438 \u043F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043E\u0442\u0447\u0435\u0442\u044B. \u041F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u043A\u043B\u0438\u0435\u043D\u0442 \u0441\u0430\u043C \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u043D\u043E\u0441\u0438\u0442\u044C \u0432\u044B\u043F\u0438\u0441\u043A\u0443 \u0438 \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B.",correct:!0,checked:!1}]},{name:"\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \xAB\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043C\u0435\u0441\u044F\u0446\xBB \u043F\u0440\u0438 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0438 \u0434\u0430\u0442\u044B \u0417\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u044B \u043F\u0440\u0438 \u043F\u043E\u0434\u0441\u0447\u0435\u0442\u0435 \u0422\u0430\u0440\u0438\u0444\u0430 \u044D\u0442\u043E:",type:"radio",choice:[],answers:[{name:"\u0415\u0441\u043B\u0438 \u0434\u0430\u0442\u0430 \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A \u0440\u0430\u0441\u0447\u0435\u0442\u043D\u043E\u043C\u0443 \u043C\u0435\u0441\u044F\u0446\u0443, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043E\u0434\u0438\u043D \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043B\u0430\u0442\u0438\u0442 \u0417\u041F \u0441\u0432\u043E\u0438\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C 10 \u0430\u043F\u0440\u0435\u043B\u044F \u0437\u0430 \u043C\u0430\u0440\u0442, \u0442\u043E\u0433\u0434\u0430 \u043E\u043D \u044D\u0442\u0443 \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u043D\u0435 \u0441\u0442\u0430\u0432\u0438\u0442, \u0430 \u0434\u0440\u0443\u0433\u043E\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043B\u0430\u0442\u0438\u0442 30 \u043C\u0430\u0440\u0442\u0430 \u0437\u0430 \u043C\u0430\u0440\u0442, \u0442\u043E \u0435\u0441\u0442\u044C \u043C\u0435\u0441\u044F\u0446 \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u043C\u0435\u0441\u044F\u0446\u0435\u043C \u0437\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u2013 \u0442\u043E \u0435\u0441\u0442\u044C \u0433\u0430\u043B\u043E\u0447\u043A\u0430 \u043D\u0443\u0436\u043D\u0430, \u0447\u0442\u043E\u0431\u044B \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043B\u0430 \u0437\u0430 \u043A\u0430\u043A\u043E\u0439 \u043C\u0435\u0441\u044F\u0446 \u043F\u043B\u0430\u0442\u0438\u0442\u0441\u044F \u0417\u041F",correct:!0,checked:!1},{name:"\u0412\u044B\u0431\u043E\u0440 \u044D\u0442\u043E\u0433\u043E \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u0442\u043E, \u0447\u0442\u043E \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u043D\u043E\u044E \u043F\u043B\u0430\u0442\u0443 \u043D\u0443\u0436\u043D\u043E \u0432\u044B\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u043C \u043C\u0435\u0441\u044F\u0446\u0435 \u0442\u043E\u0436\u0435 \u2013 \u0432 \u043C\u0435\u0441\u044F\u0446 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0422\u0430\u0440\u0438\u0444\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C",correct:!1,checked:!1}]},{name:"\u0427\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 '\u0411\u0430\u0437\u044B \u043D\u0435\u0442' \u0432 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0435 \u0422\u0430\u0440\u0438\u0444\u0430:",type:"radio",choice:[],answers:[{name:"\u0411\u0430\u0437\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0443 \u043D\u0430\u0441 \u043D\u0435\u0442, \u043E\u043D\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u0430\u044F \u0438 \u043C\u044B \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0443\u0434\u0430\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u0430",correct:!1,checked:!1},{name:"\u041C\u044B \u043D\u0435 \u0432\u0435\u0434\u0435\u043C \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u0438\u0439 \u0443\u0447\u0435\u0442 \u043F\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0443, \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0443 \u043D\u0443\u043B\u0435\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u043E\u0442\u0447\u0435\u0442\u044B \u0441\u0434\u0430\u0435\u044E\u0441\u044F \u0438 \u0433\u043E\u0442\u043E\u0432\u044F\u0442\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0432 \u0421\u0411\u0418\u0421",correct:!0,checked:!1},{name:"\u0411\u0430\u0437\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0443 \u043D\u0430\u0441, \u043D\u043E \u043A\u043B\u0438\u0435\u043D\u0442 \u0437\u0430 \u043D\u0435\u0435 \u043D\u0435 \u043F\u043B\u0430\u0442\u0438\u0442.",correct:!1,checked:!1}]},{name:"\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0443\u0441\u043B\u0443\u0433\u0443 \xAB\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043E\u0442\u0447\u0435\u0442\u043E\u0432\xBB:",type:"checkbox",choice:[],answers:[{name:"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0432\u0441\u0435\u0445 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0432 \u043F\u0435\u0447\u0430\u0442\u043D\u043E\u043C, \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u043C \u0438 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0435\u043C\u043E\u043C \u0432\u0438\u0434\u0435",correct:!0,checked:!1},{name:"\u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0432\u0441\u0435\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0445 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439 \u043F\u043E \u043D\u0430\u043B\u043E\u0433\u0430\u043C \u0438 \u043E\u0442\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F\u043C \u043A \u0434\u0430\u043D\u043D\u044B\u043C \u043E\u0442\u0447\u0435\u0442\u0430\u043C",correct:!0,checked:!1},{name:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E \u0441\u0434\u0430\u0447\u0435 \u043E\u0442\u0447\u0435\u0442\u0430",correct:!0,checked:!1},{name:"\u0421\u0434\u0430\u0447\u0430 \u043E\u0442\u0447\u0435\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043E\u0431\u043E\u0440\u043E\u0442 \u041A\u0423\u04112\u0411",correct:!0,checked:!1},{name:"\u0421\u0434\u0430\u0447\u0430 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0447\u0435\u0440\u0435\u0437 \u042D\u0426\u041F \u041A\u0423\u04112\u0411",correct:!1,checked:!1},{name:"\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 1\u0421 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0435\u0441\u043B\u0438 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0430 \u0438 \u0444\u043E\u0440\u043C\u044B \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u043D\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B",correct:!1,checked:!1}]},{name:"\u041A\u0430\u043A\u0438\u0435 \u043E\u0442\u0447\u0435\u0442\u044B \u0432\u0445\u043E\u0434\u044F\u0442 \u0432 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u0447\u0435\u0442:",type:"checkbox",choice:[],answers:[{name:"\u041E\u041F\u0438\u0423",correct:!0,checked:!1},{name:"\u041F\u043B\u0430\u043D-\u0444\u0430\u043A\u0442",correct:!1,checked:!1},{name:"\u0414\u0414\u0421",correct:!0,checked:!1},{name:"\u041F\u043B\u0430\u0442\u0435\u0436\u043D\u044B\u0439 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C",correct:!0,checked:!1},{name:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439 \u0431\u0430\u043B\u0430\u043D\u0441",correct:!0,checked:!1},{name:"\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C",correct:!0,checked:!1}]},{name:"\u0421 \u043A\u0430\u043A\u043E\u0433\u043E \u0433\u043E\u0434\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u041A\u0423\u04112\u0411 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433:",type:"radio",choice:[],answers:[{name:"2018",correct:!1,checked:!1},{name:"2017",correct:!0,checked:!1},{name:"2019",correct:!1,checked:!1},{name:"2016",correct:!1,checked:!1}]}],results:{source:[],processed:{}},errors:[]}},methods:{...w("tests",["saveUserTest"]),choiceSubsequence(c,e){let s=this.testData[c],o=s.answers[e];if(s.type=="radio")s.choice=e;else if(s.type=="position")if(s.choice.length<s.answers.length&&s.choice.indexOf(o.position)==-1)s.choice.push(o.position);else{let t=s.choice.indexOf(o.position);s.choice.splice(t,1)}else s.type=="checkbox"&&(s.choice.length<s.answers.length&&s.choice.indexOf(e)==-1?s.choice.push(e):s.choice.splice(s.choice.indexOf(e),1))},indexPosition(c,e){let s=this.testData[c],o=s.answers[e];return s.choice.indexOf(o.position)!=-1?s.choice.indexOf(o.position)+1:""},testResult(){this.clearTestResults();for(let c=0;c<this.testData.length;c++){let e=this.testData[c],s=e.answers;if(c<5){if(e.choice.length===0){this.errors.push(c),U.create({message:`\u0412\u044B \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441 \u2116${c+1}`,color:"negative"});break}let o={name:"",success:[],error:[],missed:[],choice:[]};o.name=e.name,o.choice=e.choice,e.type=="radio"?s[e.choice].correct===!0?o.success.push(e.choice):o.error.push(e.choice):e.type=="position"?(e.choice.forEach((t,a)=>{t==a+1?o.success.push(t):o.error.push(t)}),e.answers.forEach((t,a)=>{t.correct===!0&&e.choice.indexOf(t.position)==-1&&o.missed.push(t.position)})):e.type=="checkbox"&&(e.choice.forEach(t=>{s[t].correct===!0?o.success.push(t):o.error.push(t)}),e.answers.forEach((t,a)=>{t.correct===!0&&e.choice.indexOf(a)==-1&&o.missed.push(a)})),this.results.source.push(o)}}this.handleResults()},handleResults(){let c={total_points:0,count:0};this.results.source.forEach((e,s)=>{let o=s+1;var t=0;if(e.success.length==1&&e.error.length==0&&e.missed.length==0)t=1;else if(e.success.length==0&&e.error.length==1&&e.missed.length==0)t=0;else{let a=e.success.length,n=e.error.length,l=e.missed.length,d=a+l,f=n+l,_=a+n+l;t=a/d-f/_,t<0&&(t=0)}c.total_points+=parseFloat(t.toFixed(2)),c.count=o}),this.results.processed=c,this.errors.length<=0&&this.saveResults()},clearTestResults(){this.errors=[],this.results.source=[]},saveResults:function(){let c={results:this.results,test_id:4,user_id:this.getUser.id,attestation_id:this.attestationId};this.saveUserTest(c).then(e=>{this.$router.push("/tests")})}},computed:{...v("user",["getUser"]),...v("tests",["attestationId"])},async mounted(){this.testData.sort(()=>Math.random()-.5)}},K={class:"question__list"},z={key:0,class:"question__item q-mb-lg"},X={class:"question__number text--style-1 text-center q-mb-md shadow-1"},Y={class:"question__name text--style-2 text-center q-mb-md"},Z={class:"text-bold"},ee={class:"buttons-wrap"};function te(c,e,s,o,t,a){return r(),u("div",K,[(r(!0),u(x,null,$(t.testData,(n,l)=>(r(),u("div",{key:l},[l<5?(r(),u("div",z,[m("div",X,"\u0412\u043E\u043F\u0440\u043E\u0441 \u2116"+y(l+1),1),m("div",Y,y(n.name),1),i(N,null,{default:h(()=>[(r(!0),u(x,null,$(n.answers,(d,f)=>(r(),u("div",{key:f},[typeof d.position=="undefined"?C((r(),k(R,{key:0,tag:"label"},{default:h(()=>[i(b,{avatar:""},{default:h(()=>[n.type==="checkbox"?(r(),k(A,{key:0,modelValue:d.checked,"onUpdate:modelValue":_=>d.checked=_,val:d.name,color:"secondary",onClick:_=>a.choiceSubsequence(l,f)},null,8,["modelValue","onUpdate:modelValue","val","onClick"])):n.type==="radio"?(r(),k(O,{key:1,modelValue:n.choice,"onUpdate:modelValue":_=>n.choice=_,val:f,color:"secondary",onClick:_=>a.choiceSubsequence(l,f)},null,8,["modelValue","onUpdate:modelValue","val","onClick"])):p("",!0)]),_:2},1024),i(b,null,{default:h(()=>[i(V,null,{default:h(()=>[S(y(d.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[Q]]):typeof d.position!="undefined"?C((r(),k(R,{key:1,tag:"label",onClick:_=>a.choiceSubsequence(l,f)},{default:h(()=>[i(b,{avatar:""},{default:h(()=>[m("div",Z,y(a.indexPosition(l,f)),1)]),_:2},1024),i(b,null,{default:h(()=>[i(V,null,{default:h(()=>[S(y(d.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[Q]]):p("",!0)]))),128))]),_:2},1024)])):p("",!0)]))),128)),m("div",ee,[i(T,{color:"primary",label:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",onClick:a.testResult},null,8,["onClick"])])])}var se=g(J,[["render",te]]);const ce={data(){return{test_id:4,status:null}},components:{Info:H,Test:se},methods:{...w("tests",["loadTests","loadUserTests","testStart"]),testStatusStart(){this.status="STARTED",this.testStart(this.test_id),window.scrollTo({top:0,behavior:"smooth"})}},computed:{...v("tests",["getTests"]),...v("user",["getUser"])},mounted(){this.getTests==null?this.$router.push("/tests"):this.status=this.getTests[this.test_id].status},watch:{status(){}}},oe={class:"container"},ae={class:"buttons-wrap"};function re(c,e,s,o,t,a){const n=q("Info"),l=q("Test");return r(),u("div",oe,[t.status==="WAITING"?(r(),k(n,{key:0})):t.status==="STARTED"?(r(),k(l,{key:1})):p("",!0),m("div",ae,[t.status==="WAITING"?(r(),k(T,{key:0,class:"q-mt-xl",color:"primary",label:"\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0438\u0442\u044C \u043A \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E",onClick:a.testStatusStart},null,8,["onClick"])):p("",!0)])])}var ne=g(ce,[["render",re]]);const le={components:{ProductBook:ne}};function ie(c,e,s,o,t,a){const n=q("ProductBook",!0);return r(),k(n)}var ye=g(le,[["render",ie]]);export{ye as default};