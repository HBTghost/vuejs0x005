(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],h=0,u=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"18d4":function(t,e,n){t.exports=n.p+"img/lottery.6bf2d838.png"},2:function(t,e){},3:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{key:t.$route.fullPath})],1)},o=[],i={name:"app"},s=i,l=n("2877"),c=Object(l["a"])(s,r,o,!1,null,null,null),d=c.exports,h=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("navbar")},f=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"panel-footer clearfix fixed-bottom"},[n("b-button-group",{staticClass:"custom-nav"},[n("b-dropdown",{staticClass:"region",attrs:{text:t.selectedRegion,variant:"primary",size:t.size,id:"dropdown-dropup",dropup:""}},t._l(t.regions,(function(e,a){return n("b-dropdown-item",{key:a,attrs:{disabled:e===t.selectedRegion},on:{click:function(n){return t.selectRegion(e)}}},[t._v(" "+t._s(e)+" ")])})),1),n("b-dropdown",{staticClass:"DoW",attrs:{text:t.selectedDoW,variant:"secondary",size:t.size,id:"dropdown-dropup",dropup:""}},t._l(t.DoWs,(function(e,a){return n("b-dropdown-item",{key:a,attrs:{disabled:e===t.selectedDoW},on:{click:function(n){return t.selectDoW(e)}}},[t._v(" "+t._s(e)+" ")])})),1),n("b-dropdown",{staticClass:"date",attrs:{text:t.selectedDateString,variant:"success",size:t.size,id:"dropdown-dropup",dropup:""}},t._l(t.dateStrings,(function(e,a){return n("b-dropdown-item",{key:a,attrs:{disabled:e===t.selectedDateString},on:{click:function(n){return t.selectDate(e)}}},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)},p=[],v=(n("c975"),n("b0c0"),n("d3b7"),n("25f0"),{name:"NavBar",data:function(){return{regions:["Miền Bắc","Miền Trung","Miền Nam"],regionCodes:["north","middle","south"],selectedRegion:"",DoWs:["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ nhật"],DoWcodes:["thu-2","thu-3","thu-4","thu-5","thu-6","thu-7","chu-nhat"],selectedDoW:"",dateStrings:[],selectedDateString:"",timeRes:17,size:"lg"}},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.changeNavSize()}))},watch:{selectedRegion:function(t){this.timeRes="Miền Nam"===t?17:"Miền Trung"===t?18:19}},created:function(){this.changeNavSize();var t=this.$route.name;if("home"===t){this.selectedRegion=this.regions[2],this.selectedDoW=this.getCurDoW();var e=new Date;e.getHours()<this.timeRes&&(e=new Date(e.getTime()-6048e5)),this.moveToNewPage(this.getStringFromDate(e))}else{this.selectedRegion=this.regions[this.regionCodes.indexOf(t)];var n=this.$route.params.DoWcode;if("0"===n){this.selectedDoW=this.getCurDoW();var a=new Date;a.getHours()<this.timeRes&&(a=new Date(a.getTime()-6048e5)),this.moveToNewPage(this.getStringFromDate(a))}var r=this.DoWcodes.indexOf(n);this.selectedDoW=this.DoWs[r],this.selectedDateString=this.$route.params.dateString,this.genDateStringsFromDoW(this.selectedDoW)}},methods:{changeNavSize:function(){var t=window.innerWidth>0?window.innerWidth:screen.width;this.size=t<500?"sm":"lg"},getDoWindexFromDate:function(t){return(t.getDay()+7-1)%7},getCurDoW:function(){return this.DoWs[this.getDoWindexFromDate(new Date)]},formatDigits:function(t,e){var n=t.toString();while(n.length<e)n="0"+n;return n},getStringFromDate:function(t){var e=this.formatDigits(t.getDate(),2),n=this.formatDigits(t.getMonth()+1,2),a=t.getFullYear();return e+"-"+n+"-"+a},genDateStringsFromDoW:function(t){var e=new Date,n=this.DoWs.indexOf(t)-this.getDoWindexFromDate(e),a=864e5,r=new Date(e.getTime()+n*a);(n>0||0===n&&e.getHours()<this.timeRes)&&(r=new Date(r-7*a)),this.dateStrings=[];for(var o=0;o<7;++o)this.dateStrings.push(this.getStringFromDate(r)),r=new Date(r-7*a)},moveToNewPage:function(t){var e=this.regions.indexOf(this.selectedRegion),n=this.regionCodes[e],a=this.DoWcodes[this.DoWs.indexOf(this.selectedDoW)];this.$router.push({name:n,params:{DoWcode:a,dateString:t}})},selectRegion:function(t){this.selectedRegion=t,this.moveToNewPage(this.selectedDateString)},selectDoW:function(t){this.selectedDoW=t,this.genDateStringsFromDoW(t),this.moveToNewPage(this.dateStrings[0])},selectDate:function(t){this.selectedDateString=t,this.moveToNewPage(t)}}}),m=v,D=Object(l["a"])(m,g,p,!1,null,null,null),b=D.exports,w={name:"redirect",components:{navbar:b}},_=w,y=Object(l["a"])(_,u,f,!1,null,null,null),x=y.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" "+t._s(t.data)+" ")])},W=[],C=(n("99af"),n("96cf"),n("1da1")),T=n("7338"),k=n.n(T),N=n("bfdc"),O=n.n(N),R={name:"TestAPI",data:function(){return{cors:"https://cors-anywhere.herokuapp.com/",baseUrl:"https://xosodaiphat.com/xsmt-truc-tiep.html",channels:["A","B","C"],pre_data:null,data:null,interval:null}},created:function(){this.loadData()},mounted:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=setInterval,e.next=3,t.loadData;case 3:e.t1=e.sent,t.interval=(0,e.t0)(e.t1,1e4);case 5:case"end":return e.stop()}}),e)})))()},methods:{loadData:function(){for(var t=this,e=this.data,n=[],a=0;a<this.channels.length;++a){var r=[[],[],[],[],[],[],[],[],[]];n.push(r.concat())}k()(this.cors+this.baseUrl).then((function(a){var r=O.a.load(a.data);if(r(".table-striped tbody > tr").each((function(t,e){var a=O.a.load(e);a("td").next((function(e,a){var o=O.a.load(a);o("span").each((function(a,o){n[e][t].push(r(o).text())}))}))})),null!==e)for(var o=0;o<t.channels.length;++o)for(var i=0;i<9;++i)for(var s=0;s<n[o][i].length;++s)"..."!==n[o][i][s]&&(e[o][i][s]=n[o][i][s],console.log(e[o][i][s]));else e=n;t.data=e,console.log(new Date)})).catch(console.error)},handleData:function(t){if(void 0!==this.pre_data)for(var e=0;e<this.channels.length;++e)for(var n=0;n<9;++n)"..."!==t[e][n]&&(this.pre_data[e][n]=t[e][n])}},beforeDestroy:function(){clearInterval(this.interval)}},j=R,$=Object(l["a"])(j,S,W,!1,null,null,null),P=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),n("div",{staticClass:"content"},[t.gotData?n("div",[n("div",[t.validData?n("div",[n("table",{staticClass:"table table-bordered text-center"},[n("thead",[n("tr",[n("th",{staticClass:"channel",attrs:{scope:"col",width:"4%"}},[n("router-link",{attrs:{to:"/south/0/0"}},[n("home")],1)],1),t._l(t.channels,(function(e,a){return n("th",{key:a,staticClass:"channel",attrs:{scope:"col",width:t.colWidth}},[t._v(" "+t._s(e)+" ")])}))],2)]),n("tbody",t._l(t.rewardNames,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e))]),t._l(t.channels,(function(e,r){return n("td",{key:r,style:{color:t.getTextColor(a)}},t._l(t.data[r][a],(function(e,a){return n("div",{key:a},[t._v(" "+t._s(e)+" ")])})),0)}))],2)})),0)])]):n("div",{staticClass:"notValid"},[n("router-link",{attrs:{to:"/south/0/0"}},[n("home")],1),n("error")],1)])]):n("div",[n("loading")],1)])],1)},z=[],F=(n("4160"),n("caad"),n("ac1f"),n("5319"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"icon-pulse pulse",attrs:{src:t.src,alt:"lottery"}})}),M=[],I={name:"home",data:function(){return{src:n("18d4")}}},G=I,K=Object(l["a"])(G,F,M,!1,null,null,null),U=K.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"loading",attrs:{src:t.src,alt:"loading..."}})},B=[],H={name:"loading",data:function(){return{src:n("e96b")}}},V=H,A=Object(l["a"])(V,X,B,!1,null,null,null),J=A.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"10px"}},[n("h2",[t._v(" Vào ngày này dịch vụ XSKT bị tạm dừng để Phòng - Chống dịch COVID-19 ")]),n("img",{staticStyle:{width:"48px"},attrs:{src:t.src,alt:"error"}}),n("img",{staticStyle:{width:"48px"},attrs:{src:t.src,alt:"error"}}),n("img",{staticStyle:{width:"48px"},attrs:{src:t.src,alt:"error"}})])},Q=[],Y={name:"error",data:function(){return{src:n("ec4e")}}},q=Y,Z=Object(l["a"])(q,L,Q,!1,null,null,null),tt=Z.exports,et={name:"south",components:{navbar:b,home:U,loading:J,error:tt},data:function(){return{apiURI:"/api/lotteries/south/#date",channels:[],data:[],rewardNames:null,colWidth:"32%",gotData:!1,validData:!1}},watch:{channels:function(t){var e=t.length;3===e?this.colWidth="32%":4===e&&(this.colWidth="24%")}},created:function(){var t=this.$route.params.dateString,e=this.apiURI.replace(/#date/g,t);this.getData(e)},methods:{getData:function(t){var e=this;this.gotData=!1,k()(t).then((function(t){var n=t.data,a=[],r=[],o=[];n.forEach((function(t){var e=[];for(var n in t)"_id"!==n&&"__v"!==n&&"date"!==n&&("channel"===n?a.push(t[n]):(o.includes(n)||o.push(n),e.push(t[n])));r[a.length-1]=[].concat(e)})),e.data=r,e.channels=a,e.rewardNames=o,e.validData=r[0][0].length>0,e.gotData=!0})).catch(console.error)},getTextColor:function(t){return t<1||t>this.rewardNames.length-2?"red":"black"}}},nt=et,at=Object(l["a"])(nt,E,z,!1,null,null,null),rt=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),n("div",{staticClass:"content"},[t.gotData?n("div",[n("div",[t.validData?n("div",[n("table",{staticClass:"table table-bordered text-center"},[n("thead",[n("tr",[n("th",{staticClass:"channel",attrs:{scope:"col",width:"4%"}},[n("router-link",{attrs:{to:"/middle/0/0"}},[n("home")],1)],1),t._l(t.channels,(function(e,a){return n("th",{key:a,staticClass:"channel",attrs:{scope:"col",width:t.colWidth}},[t._v(" "+t._s(e)+" ")])}))],2)]),n("tbody",t._l(t.rewardNames,(function(e,a){return n("tr",{key:a},[n("td",[t._v(t._s(e))]),t._l(t.channels,(function(e,r){return n("td",{key:r,style:{color:t.getTextColor(a)}},t._l(t.data[r][a],(function(e,a){return n("div",{key:a},[t._v(" "+t._s(e)+" ")])})),0)}))],2)})),0)])]):n("div",{staticClass:"notValid"},[n("router-link",{attrs:{to:"/middle/0/0"}},[n("home")],1),n("error")],1)])]):n("div",[n("loading")],1)])],1)},it=[],st={name:"middle",components:{navbar:b,home:U,loading:J,error:tt},data:function(){return{apiURI:"/api/lotteries/middle/#date",channels:[],data:[],rewardNames:null,colWidth:"32%",gotData:!1,validData:!1}},watch:{channels:function(t){var e=t.length;3===e?this.colWidth="32%":4===e&&(this.colWidth="24%")}},created:function(){var t=this.$route.params.dateString,e=this.apiURI.replace(/#date/g,t);this.getData(e)},methods:{getData:function(t){var e=this;this.gotData=!1,k()(t).then((function(t){var n=t.data,a=[],r=[],o=[];n.forEach((function(t){var e=[];for(var n in t)"_id"!==n&&"__v"!==n&&"date"!==n&&("channel"===n?a.push(t[n]):(o.includes(n)||o.push(n),e.push(t[n])));r[a.length-1]=[].concat(e)})),e.data=r,e.channels=a,e.rewardNames=o,e.validData=r[0][0].length>0,e.gotData=!0})).catch(console.error)},getTextColor:function(t){return t<1||t>this.rewardNames.length-2?"red":"black"}}},lt=st,ct=Object(l["a"])(lt,ot,it,!1,null,null,null),dt=ct.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),n("div",{staticClass:"content"},[t.gotData?n("div",[n("div",[t.validData?n("div",[n("table",{staticClass:"table table-bordered text-center"},[n("thead",[n("tr",[n("th",{staticClass:"channel",attrs:{scope:"col",width:"4%"}},[n("router-link",{attrs:{to:"/north/0/0"}},[n("home")],1)],1),n("th",{staticClass:"channel",attrs:{scope:"col",width:"96%",colspan:"12"}},[t._v(" "+t._s(t.channel)+" ")])])]),n("tbody",t._l(t.rewardNames,(function(e,a){return n("tr",{key:a,style:{backgroundColor:t.coloredRow[a]?"#fff":"#eee"}},[t.rewardNames[a].length>0?n("td",{attrs:{rowspan:t.rowspans[a]}},[t._v(" "+t._s(e)+" ")]):t._e(),t._l(t.data[a],(function(e,r){return n("td",{key:r,style:{color:t.getTextColor(a)},attrs:{colspan:t.getColSpan(t.data[a])}},[t._v(" "+t._s(e)+" ")])}))],2)})),0)])]):n("div",{staticClass:"notValid"},[n("router-link",{attrs:{to:"/north/0/0"}},[n("home")],1),n("error")],1)])]):n("div",[n("loading")],1)])],1)},ut=[],ft=(n("a434"),{name:"north",components:{navbar:b,home:U,loading:J,error:tt},data:function(){return{channels:["XSKT Hà Nội","XSKT Quảng Ninh","XSKT Bắc Ninh","XSKT Hà Nội","XSKT Hải Phòng","XSKT Nam Định","XSKT Thái Bình"],channel:"",DoWcodes:["thu-2","thu-3","thu-4","thu-5","thu-6","thu-7","chu-nhat"],apiURI:"/api/lotteries/north/#date",rewardNames:["Mã ĐB","GĐB","G1","G2","G3","","G4","","G5","","G6","G7",""],coloredRow:[0,1,0,1,0,0,1,1,0,0,1,0,0],rowspans:[1,1,1,1,2,1,2,1,2,1,1,2,1],data:[],gotData:!1,validData:!1}},watch:{channels:function(t){var e=t.length;this.colWidth=2===e?"48%":"32%"}},created:function(){var t=this.$route.params.DoWcode;if("0"!==t){var e=this.DoWcodes.indexOf(t);this.channel=this.channels[e];var n=this.$route.params.dateString,a=this.apiURI.replace(/#date/g,n);this.getData(a)}},methods:{getData:function(t){var e=this;this.gotData=!1,k()(t).then((function(t){var n=t.data[0],a=[],r=[];for(var o in n)"_id"!==o&&"__v"!==o&&"date"!==o&&(r.push(o),a.push(n[o]));var i=a[0].length>0;i&&(e.handleData(a),e.data=a),e.validData=i,e.gotData=!0})).catch(console.error)},handleData:function(t){for(var e=1;e<t.length;++e){var n=t[e].length;if(n>=4){var a=n/2,r=t[e].splice(a,a);t.splice(e+1,0,r)}}},getColSpan:function(t){return 12/t.length},getTextColor:function(t){return t<2||t>this.rewardNames.length-3?"red":"black"}}}),gt=ft,pt=Object(l["a"])(gt,ht,ut,!1,null,null,null),vt=pt.exports;a["default"].use(h["a"]);var mt=[{path:"/",name:"home",component:x},{path:"/south/:DoWcode/:dateString",name:"south",component:rt},{path:"/north/:DoWcode/:dateString",name:"north",component:vt},{path:"/middle/:DoWcode/:dateString",name:"middle",component:dt},{path:"/realtime",name:"realtime",component:P}],Dt=new h["a"]({mode:"history",base:"/",routes:mt}),bt=Dt,wt=(n("ddae"),n("78a7"),n("5f5b")),_t=n("b1e0");a["default"].use(wt["a"]),a["default"].use(_t["a"]),a["default"].config.productionTip=!1,new a["default"]({router:bt,render:function(t){return t(d)}}).$mount("#app")},"78a7":function(t,e,n){},ddae:function(t,e,n){},e96b:function(t,e,n){t.exports=n.p+"img/loading.389858b4.svg"},ec4e:function(t,e,n){t.exports=n.p+"img/error.5885b991.svg"}});
//# sourceMappingURL=app.0a3177bf.js.map