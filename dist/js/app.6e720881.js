(function(){var e={4626:function(e,t,n){"use strict";var a=n(9242),r=n(3396);const s={class:"app-container"};var o={__name:"App",setup(e){return(e,t)=>{const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(n)])}}};const i=o;var c=i,p=n(2483);n(7658);const d=e=>((0,r.dD)("data-v-41ec5318"),e=e(),(0,r.Cn)(),e),A=d((()=>(0,r._)("div",{class:"logo"},"STP.",-1))),l=[A];var u={__name:"LogoComponent",setup(e){function t(){Qe.push({name:"home"})}return(e,n)=>((0,r.wg)(),(0,r.iD)("div",{onClick:t,class:"logo-container"},l))}},g=n(89);const h=(0,g.Z)(u,[["__scopeId","data-v-41ec5318"]]);var f=h;const v={class:"nav-bar"};var m={__name:"NavigationBar",setup(e){function t(){const e=document.querySelector(".nav-bar");window.scrollY>0?e.classList.add("nav-bar-scrolled"):e.classList.remove("nav-bar-scrolled")}return(0,r.bv)((()=>{window.addEventListener("scroll",t)})),(0,r.Ah)((()=>{window.removeEventListener("scroll",t)})),(e,t)=>((0,r.wg)(),(0,r.iD)("div",v,[(0,r.Wm)(f)]))}};const w=(0,g.Z)(m,[["__scopeId","data-v-33f7d7e4"]]);var _=w,b=n(3786),S=n(7139),k={__name:"ButtonComponent",props:{text:String},setup(e){const t=e;function n(){Qe.push({name:"form"})}return(e,a)=>((0,r.wg)(),(0,r.iD)("div",{onClick:n,class:"button"},(0,S.zw)(t.text),1))}};const C=(0,g.Z)(k,[["__scopeId","data-v-c16db8e4"]]);var B=C;const x={class:"hero-section"},E={class:"hero-text-container"},D=(0,r.uE)('<h1 class="hero-text-h1" data-v-07d72b08>Build beautiful</h1><p class="hero-paragraph" data-v-07d72b08><span class="inline-logo" data-v-07d72b08>Seacoast Technical Partners</span> is a team of East Coast located software product builders. We know and use the bleeding edge in web technologies. </p><p class="hero-second-paragraph" data-v-07d72b08><span data-v-07d72b08><img src="'+b+'" data-v-07d72b08></span>All projects designed and engineered in the USA. </p>',3);var I={__name:"HeroLandingPage",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("div",x,[(0,r._)("div",E,[D,(0,r.Wm)(B,{text:"Book Meeting"})])]))}};const U=(0,g.Z)(I,[["__scopeId","data-v-07d72b08"]]);var R=U,Q=n(6189);const W=e=>((0,r.dD)("data-v-76e2fd21"),e=e(),(0,r.Cn)(),e),j={class:"work-tile"},y=["href"],O=W((()=>(0,r._)("span",{class:"link"},null,-1))),z=[O],Y={class:"work-title"},L=W((()=>(0,r._)("span",{class:"link-span"},[(0,r._)("img",{src:Q})],-1)));var Z={__name:"WorkTile",props:{title:String,subtitle:String,description:String,url:String,image:String},setup(e){const t=e;return(e,n)=>((0,r.wg)(),(0,r.iD)("div",j,[(0,r._)("a",{href:t.url,target:"_blank"},z,8,y),(0,r._)("h3",Y,[(0,r.Uk)((0,S.zw)(t.title),1),L]),(0,r._)("p",null,(0,S.zw)(t.description),1)]))}};const T=(0,g.Z)(Z,[["__scopeId","data-v-76e2fd21"]]);var V=T;const H=e=>((0,r.dD)("data-v-1160cce4"),e=e(),(0,r.Cn)(),e),N={class:"example-section"},P=H((()=>(0,r._)("div",{class:"example-section-heading"},[(0,r._)("h2",{class:"example-section-h2"},"Some of our work")],-1))),X={class:"example-tiles"};var M={__name:"ExampleSection",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("div",N,[P,(0,r._)("div",X,[(0,r.Wm)(V,{title:"HeyThanks",image:"heythanks-text.png",url:"https://www.heythanks.io/",description:"A Shopify application for tipping fulfillment workers"})])]))}};const q=(0,g.Z)(M,[["__scopeId","data-v-1160cce4"]]);var F=q;const J=e=>((0,r.dD)("data-v-3d82ca10"),e=e(),(0,r.Cn)(),e),G={class:"footer-container"},K=J((()=>(0,r._)("div",{class:"footer"},"© 2023 Seacoast Technical Partners, LLC",-1))),$=[K];function ee(e,t){return(0,r.wg)(),(0,r.iD)("div",G,$)}const te={},ne=(0,g.Z)(te,[["render",ee],["__scopeId","data-v-3d82ca10"]]);var ae=ne;const re=e=>((0,r.dD)("data-v-15034afb"),e=e(),(0,r.Cn)(),e),se={class:"person-container"},oe=["href"],ie=re((()=>(0,r._)("span",{class:"link"},null,-1))),ce=[ie],pe=["src"],de={class:"name"},Ae={class:"description"};var le={__name:"PersonComponent",props:{name:String,image:String,book:String,url:String,des:String},setup(e){const t=e;return(e,a)=>((0,r.wg)(),(0,r.iD)("div",se,[(0,r._)("a",{href:t.url,target:"_blank"},ce,8,oe),(0,r._)("img",{class:"image",src:n(7173)(`./${t.image}`),height:"150",width:"150"},null,8,pe),(0,r._)("h3",de,(0,S.zw)(t.name),1),(0,r._)("p",Ae,(0,S.zw)(t.des),1)]))}};const ue=(0,g.Z)(le,[["__scopeId","data-v-15034afb"]]);var ge=ue;const he=e=>((0,r.dD)("data-v-469e9282"),e=e(),(0,r.Cn)(),e),fe={class:"who-we-are-section"},ve=he((()=>(0,r._)("h2",{class:"about-section-heading"},"Who we are",-1))),me={class:"who-we-are-tiles"};var we={__name:"AboutUsSection",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)("div",fe,[ve,(0,r._)("div",me,[(0,r.Wm)(ge,{name:"Ian",image:"ian-headshot.png",url:"https://ianherri.github.io/",des:"Ian is chief designer, front-end guru, and full time philosophizer."}),(0,r.Wm)(ge,{name:"Chris",image:"chris-headshot.jpg",url:"https://github.com/ccali11",des:"Chris is chief executive, full stack guru, and part time philosophizer."}),(0,r.Wm)(ge,{name:"Shane",image:"shane.jpeg",url:"https://github.com/shanejearley",des:"Shane is chief technical genius, full stack guru, and part time philosophizer."})])]))}};const _e=(0,g.Z)(we,[["__scopeId","data-v-469e9282"]]);var be=_e,Se={__name:"HomeView",setup(e){return(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(_),(0,r.Wm)(R),(0,r.Wm)(F),(0,r.Wm)(be),(0,r.Wm)(ae)],64))}};const ke=Se;var Ce=ke;const Be=e=>((0,r.dD)("data-v-50b6e0f4"),e=e(),(0,r.Cn)(),e),xe=Be((()=>(0,r._)("div",{class:"form-container","data-tf-widget":"gi3hGpQE",id:"wrapper","data-tf-opacity":"100","data-tf-inline-on-mobile":"","data-tf-iframe-props":"title=Lead Capture Form STP","data-tf-transitive-search-params":"","data-tf-auto-focus":""},null,-1)));var Ee={__name:"FormView",setup(e){return(()=>{window.localStorage&&(localStorage.getItem("reload")?localStorage.removeItem("reload"):(localStorage["reload"]=!0,window.location.reload()))})(),(e,t)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(_),xe],64))}};const De=(0,g.Z)(Ee,[["__scopeId","data-v-50b6e0f4"]]);var Ie=De;const Ue=[{path:"/",name:"home",component:Ce},{path:"/form",name:"form",component:Ie}],Re=(0,p.p7)({history:(0,p.PO)(),routes:Ue,base:"/"});var Qe=Re;(0,a.ri)(c).use(Qe).mount("#app")},7173:function(e,t,n){var a={"./chad-greiter--0gBnnMdQPw-unsplash.jpg":2209,"./chris-headshot.jpg":1374,"./divider.png":1810,"./example-section-bg.png":9913,"./flag.png":3786,"./heythanks-text.png":9587,"./ian-headshot.png":8398,"./link.png":6189,"./shane.jpeg":3934};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=7173},2209:function(e,t,n){"use strict";e.exports=n.p+"img/chad-greiter--0gBnnMdQPw-unsplash.bc90f310.jpg"},1374:function(e,t,n){"use strict";e.exports=n.p+"img/chris-headshot.53b52438.jpg"},1810:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAARCAYAAABn7pGyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgB7dxNkcJAEAXgXgdIiJSVsBLiYHEADpCAFCQgARwgIcxUzT3NXzWH76vqU/r8aiZ5lQh4s2VZNomdKbMH8DEthOY255WdTZtLD60AqDKC6HdlZ9fmGABVMkE0roI3pyugTDaIeqC12QdAlUwQ9ativzIGQJVxurqsffUbO3MAVMkE0fh6eAp4wc84ok8B8N2uAc/K9qna84MaA1DqgRqDkihQ58EawzYAqiRrDLMaA1Aq26dSYwDKJWsM/160A6UyfSp/YwC+wgisaWWnB9ZfwJvdAXkj+hjm+hF9AAAAAElFTkSuQmCC"},9913:function(e,t,n){"use strict";e.exports=n.p+"img/example-section-bg.300e8add.png"},3786:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAYAAABFGc6jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABRSURBVHgB7dTRCQAgCARQjRZp/6Eapfywf8/gCOlBhBAEV6rLCEHzffiSYA3rkqQGOp+N7vaiE88M1mFNSGjRvf/r0CSU1bD1KHvWfbB6b7QBoB0kknUqgbIAAAAASUVORK5CYII="},9587:function(e,t,n){"use strict";e.exports=n.p+"img/heythanks-text.71def605.png"},8398:function(e,t,n){"use strict";e.exports=n.p+"img/ian-headshot.f630f81c.png"},6189:function(e){"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACSSURBVHgBrZPRDYAgDESLEzgCmzmDG+ikuAFugCWhHxJar8SXNBJzPK8fUill48nFgBpWJvAkzkQyCIyI1FD/VQSOx1rg1dor6iRpSjSQRLdoJGnvcZEmcYksSR9URbDEEqESczVPE1XExxVeB2h0IJJPkTQjALkfRCI/phe5v9BP1EaZn9AaBldttNcDzXPznA8Hsry2veHFUQAAAABJRU5ErkJggg=="},3934:function(e,t,n){"use strict";e.exports=n.p+"img/shane.a522b29c.jpeg"}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,s){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],s=e[d][2];for(var i=!0,c=0;c<a.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(i=!1,s<o&&(o=s));if(i){e.splice(d--,1);var p=r();void 0!==p&&(t=p)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,s,o=a[0],i=a[1],c=a[2],p=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var d=c(n)}for(t&&t(a);p<o.length;p++)s=o[p],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},a=self["webpackChunkstp_site"]=self["webpackChunkstp_site"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4626)}));a=n.O(a)})();
//# sourceMappingURL=app.6e720881.js.map