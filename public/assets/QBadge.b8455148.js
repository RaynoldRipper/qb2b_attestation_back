import{u as s,a as g}from"./use-dark.c767244e.js";import{c as r,a,h as u,b as c,g as m,s as b}from"./index.59cc79a1.js";const v=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],k=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var h=r({name:"QSkeleton",props:{...s,tag:{type:String,default:"div"},type:{type:String,validator:e=>v.includes(e),default:"rect"},animation:{type:String,validator:e=>k.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:n}){const l=m(),i=g(e,l.proxy.$q),t=a(()=>{const o=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:o[0],height:o[1]}}),d=a(()=>`q-skeleton q-skeleton--${i.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>u(e.tag,{class:d.value,style:t.value},c(n.default))}});const q=["top","middle","bottom"];var y=r({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>q.includes(e)}},setup(e,{slots:n}){const l=a(()=>e.align!==void 0?{verticalAlign:e.align}:null),i=a(()=>{const t=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(t!==void 0?` text-${t}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>u("div",{class:i.value,style:l.value,role:"status","aria-label":e.label},b(n.default,e.label!==void 0?[e.label]:[]))}});export{h as Q,y as a};
