/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[6],{374:function(ha,ca,f){f.r(ca);var aa=f(4),x=f(399),fa=f(400),da;(function(f){f[f.EXTERNAL_XFDF_NOT_REQUESTED=0]="EXTERNAL_XFDF_NOT_REQUESTED";f[f.EXTERNAL_XFDF_NOT_AVAILABLE=1]="EXTERNAL_XFDF_NOT_AVAILABLE";f[f.EXTERNAL_XFDF_AVAILABLE=2]="EXTERNAL_XFDF_AVAILABLE"})(da||(da={}));ha=function(){function f(f){this.V=f;this.state=da.EXTERNAL_XFDF_NOT_REQUESTED}f.prototype.i6=function(){var f=this;return function(r,n,h){return Object(aa.b)(f,
void 0,void 0,function(){var e,f,x,y,ba,ca,fa,ha=this,la,ja;return Object(aa.d)(this,function(w){switch(w.label){case 0:if(this.state!==da.EXTERNAL_XFDF_NOT_REQUESTED)return[3,2];e=this.V.getDocument().Uq();return[4,this.I4(e)];case 1:f=w.oa(),x=this.D0(f),this.gF=(ja=null===(la=x)||void 0===la?void 0:la.parse(),null!==ja&&void 0!==ja?ja:null),this.state=null===this.gF?da.EXTERNAL_XFDF_NOT_AVAILABLE:da.EXTERNAL_XFDF_AVAILABLE,w.label=2;case 2:if(this.state===da.EXTERNAL_XFDF_NOT_AVAILABLE)return h(r),
[2];y=new DOMParser;ba=y.parseFromString(r,"text/xml");n.forEach(function(e){ha.merge(ba,ha.gF,e-1)});ca=new XMLSerializer;fa=ca.serializeToString(ba);h(fa);return[2]}})})}};f.prototype.EI=function(f){this.I4=f};f.prototype.de=function(){this.gF=void 0;this.state=da.EXTERNAL_XFDF_NOT_REQUESTED};f.prototype.D0=function(f){return f?Array.isArray(f)?new x.a(f):"string"!==typeof f?null:(new DOMParser).parseFromString(f,"text/xml").querySelector("xfdf > add")?new x.a(f):new fa.a(f):null};f.prototype.merge=
function(f,r,n){var h=this;0===n&&(this.r8(f,r.Yn),this.t8(f,r.RE));var e=r.ca[n];e&&(this.u8(f,e.Xl),this.w8(f,e.jV,r.lu),this.v8(f,e.page,n),this.s8(f,e.PN));e=this.V.Vc();if(n===e-1){var w=r.lu;Object.keys(w).forEach(function(e){w[e].pG||h.dR(f,e,w[e])})}};f.prototype.r8=function(f,r){null!==r&&(f=this.Et(f),this.qp(f,"calculation-order",r))};f.prototype.t8=function(f,r){null!==r&&(f=this.Et(f),this.qp(f,"document-actions",r))};f.prototype.u8=function(f,r){var n=this,h=this.Dt(f.querySelector("xfdf"),
"annots");Object.keys(r).forEach(function(e){n.qp(h,'[name="'+e+'"]',r[e])})};f.prototype.w8=function(f,r,n){var h=this;if(0!==r.length){var e=this.Et(f);r.forEach(function(r){var w=r.getAttribute("field"),x=n[w];x&&(h.dR(f,w,x),h.qp(e,"null",r))})}};f.prototype.dR=function(f,r,n){var h=this.Et(f);null!==n.hz&&this.qp(h,'ffield [name="'+r+'"]',n.hz);f=this.Dt(f.querySelector("xfdf"),"fields");r=r.split(".");this.VH(f,r,0,n.value);n.pG=!0};f.prototype.v8=function(f,r,n){null!==r&&(f=this.Et(f),f=this.Dt(f,
"pages"),this.qp(f,'[number="'+(n+1)+'"]',r))};f.prototype.s8=function(f,r){Object.keys(r).forEach(function(n){(n=f.querySelector('annots [name="'+n+'"]'))&&n.parentElement.removeChild(n)})};f.prototype.VH=function(f,r,n,h){if(n===r.length)r=document.createElementNS("","value"),r.textContent=h,this.qp(f,"value",r);else{var e=r[n];this.Dt(f,'[name="'+e+'"]',"field").setAttribute("name",e);f=f.querySelectorAll('[name="'+e+'"]');1===f.length?this.VH(f[0],r,n+1,h):(e=this.H3(f),this.VH(n===r.length-1?
e:this.Ida(f,e),r,n+1,h))}};f.prototype.H3=function(f){for(var r=null,n=0;n<f.length;n++){var h=f[n];if(0===h.childElementCount||1===h.childElementCount&&"value"===h.children[0].tagName){r=h;break}}return r};f.prototype.Ida=function(f,r){for(var n=0;n<f.length;n++)if(f[n]!==r)return f[n];return null};f.prototype.qp=function(f,r,n){r=f.querySelector(r);null!==r&&f.removeChild(r);f.appendChild(n)};f.prototype.Et=function(f){var r=f.querySelector("pdf-info");if(null!==r)return r;r=this.Dt(f.querySelector("xfdf"),
"pdf-info");r.setAttribute("xmlns","http://www.pdftron.com/pdfinfo");r.setAttribute("version","2");r.setAttribute("import-version","3");return r};f.prototype.Dt=function(f,r,n){var h=f.querySelector(r);if(null!==h)return h;h=document.createElementNS("",n||r);f.appendChild(h);return h};return f}();ca["default"]=ha},385:function(ha,ca){ha=function(){function f(){}f.prototype.Tx=function(f){var x={Yn:null,RE:null,lu:{},ca:{}};f=(new DOMParser).parseFromString(f,"text/xml");x.Yn=f.querySelector("pdf-info calculation-order");
x.RE=f.querySelector("pdf-info document-actions");x.lu=this.q9(f);x.ca=this.C9(f);return x};f.prototype.q9=function(f){var x=f.querySelector("fields");f=f.querySelectorAll("pdf-info > ffield");if(null===x&&null===f)return{};var aa={};this.pZ(aa,x);this.nZ(aa,f);return aa};f.prototype.pZ=function(f,x){if(null!==x&&x.children){for(var aa=[],ca=0;ca<x.children.length;ca++){var ba=x.children[ca];aa.push({name:ba.getAttribute("name"),element:ba})}for(;0!==aa.length;)for(x=aa.shift(),ca=0;ca<x.element.children.length;ca++)ba=
x.element.children[ca],"value"===ba.tagName?f[x.name]={value:ba.textContent,hz:null,pG:!1}:ba.children&&aa.push({name:x.name+"."+ba.getAttribute("name"),element:ba})}};f.prototype.nZ=function(f,x){x.forEach(function(x){var aa=x.getAttribute("name");f[aa]?f[aa].hz=x:f[aa]={value:null,hz:x,pG:!1}})};f.prototype.C9=function(f){var x=this,aa={};f.querySelectorAll("pdf-info widget").forEach(function(f){var ba=parseInt(f.getAttribute("page"),10)-1;x.fA(aa,ba);aa[ba].jV.push(f)});f.querySelectorAll("pdf-info page").forEach(function(f){var ba=
parseInt(f.getAttribute("number"),10)-1;x.fA(aa,ba);aa[ba].page=f});this.fP(f).forEach(function(f){var ba=parseInt(f.getAttribute("page"),10),y=f.getAttribute("name");x.fA(aa,ba);aa[ba].Xl[y]=f});this.TO(f).forEach(function(f){var ba=parseInt(f.getAttribute("page"),10);f=f.textContent;x.fA(aa,ba);aa[ba].PN[f]=!0});return aa};f.prototype.fA=function(f,x){f[x]||(f[x]={Xl:{},PN:{},jV:[],page:null})};return f}();ca.a=ha},399:function(ha,ca,f){var aa=f(4),x=f(0);f.n(x);ha=function(f){function ca(x){var y=
f.call(this)||this;y.t3=Array.isArray(x)?x:[x];return y}Object(aa.c)(ca,f);ca.prototype.parse=function(){var f=this,y={Yn:null,RE:null,lu:{},ca:{}};this.t3.forEach(function(r){y=Object(x.merge)(y,f.Tx(r))});return y};ca.prototype.fP=function(f){var x=[];f.querySelectorAll("add > *").forEach(function(f){x.push(f)});f.querySelectorAll("modify > *").forEach(function(f){x.push(f)});return x};ca.prototype.TO=function(f){return f.querySelectorAll("delete > *")};return ca}(f(385).a);ca.a=ha},400:function(ha,
ca,f){var aa=f(4);ha=function(f){function x(x){var aa=f.call(this)||this;aa.u3=x;return aa}Object(aa.c)(x,f);x.prototype.parse=function(){return this.Tx(this.u3)};x.prototype.fP=function(f){return f.querySelectorAll("annots > *")};x.prototype.TO=function(){return[]};return x}(f(385).a);ca.a=ha}}]);}).call(this || window)