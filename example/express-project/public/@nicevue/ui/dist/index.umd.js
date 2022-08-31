(function(t,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],n):(t=typeof globalThis<"u"?globalThis:t||self,n(t.NiceVue={},t.Vue))})(this,function(t,n){"use strict";const a={type:{type:String,default:"default"},size:{type:String,default:"middle"},disabled:{type:Boolean},text:{type:Boolean,default:!1},bg:{type:Boolean,default:!1},onClick:{type:Function}},l=n.defineComponent({name:"NiceButton",props:a,setup(e,{slots:o}){const{type:i,size:s,disabled:d,text:b,bg:m}=e,y=()=>{const u=["nice-button",`nice-button--${i}`,`nice-button--${s}`];return d&&u.push("nice-button--disabled"),b&&u.push("nice-button--text"),m&&u.push("nice-button--bg"),u.join(" ")};return()=>n.createVNode("button",{disabled:d,class:y(),onClick:()=>e.onClick&&e.onClick()},[n.createVNode("span",{class:"nice-button__content"},[o.default&&o.default()])])}});l.install=e=>(e.component(l.name,l),e);const f={type:{type:String,default:"default"},text:{type:String,default:""},onClick:{type:Function}},c=n.defineComponent({name:"NiceScroll",props:f,setup(e){const{type:o,text:i}=e,s=()=>["nice-scroll",`nice-scroll--${o}`].join(" ");return()=>n.createVNode("div",{class:s(),onClick:()=>e.onClick&&e.onClick()},[i])}});c.install=e=>(e.component(c.name,c),e);const r=Object.freeze(Object.defineProperty({__proto__:null,Button:l,Scroll:c},Symbol.toStringTag,{value:"Module"})),p={install(e){for(const o in r){const i=r[o];i.install&&e.use(i)}return e}};t.Button=l,t.Scroll=c,t.default=p,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
