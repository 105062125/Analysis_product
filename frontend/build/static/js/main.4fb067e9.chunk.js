(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{270:function(e,t,n){},271:function(e,t,n){},407:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(0),s=n.n(c),i=n(43),r=n.n(i),o=(n(270),n(45)),j=n(46),l=n(47),d=n(49),b=(n(271),n(36)),h=(n(272),n(95)),u=n(415),O=n(420),x=n(58),m=n(421),p=n(422),f=n(423),v=n(424),y=n.p+"static/media/logo_main.a2a66270.svg",g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("h2",{className:"text-primary",children:"Analysis tools"})}}]),n}(s.a.Component),k=n(40);var S=function(){var e=Object(c.useState)(0),t=Object(k.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/time").then((function(e){return e.text()})).then((function(e){e=JSON.parse(e),s(e.time)}))}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:["Timer: API time is ",n,"."]})})},N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={date:new Date},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.updateTimer()}},{key:"updateTimer",value:function(){var e=this;setInterval((function(){e.setState({date:new Date})}),1e3)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:["\u73fe\u5728\u6642\u9593\u662f: ",this.state.date.toLocaleTimeString()]})}}]),n}(c.Component);var I=function(){var e=Object(c.useState)("none"),t=Object(k.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/testpost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sentence:"this sentence is setting from react"})}).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e),s(e.content)}))}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{children:[n,"."]})})},F=n(231),_=n(67),T=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={name:"",email:""},a.changeState=a.changeState.bind(Object(_.a)(a)),a.submitForm=a.submitForm.bind(Object(_.a)(a)),a}return Object(j.a)(n,[{key:"changeState",value:function(e){var t=e.target.name;this.setState(Object(F.a)({},t,e.target.value)),console.log("\u6539\u4e86\u6539\u4e86")}},{key:"submitForm",value:function(e){alert("You add a user in database successfully");var t="/create_user/"+String(this.state.name)+"/"+String(this.state.email);fetch(t).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.submitForm,children:[Object(a.jsx)("label",{children:"Name\uff1a"}),Object(a.jsx)("input",{id:"name",name:"name",placeholder:"name...",value:this.state.name,onChange:this.changeState}),Object(a.jsx)("label",{children:"Email\uff1a"}),Object(a.jsx)("input",{id:"email",name:"email",value:this.state.email,onChange:this.changeState}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"\u9001\u51fa\u8868\u55ae"})]})}}]),n}(s.a.Component);var C=function(){var e=Object(c.useState)("Loading..."),t=Object(k.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("/get_all_user").then((function(e){return e.text()})).then((function(e){var t=(e=JSON.parse(e)).user_list.map((function(e){return Object(a.jsx)("li",{children:"Name:"+e[0]+", Email:"+e[1]},e)}));s(t)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("ul",{children:["Name List in Database: ",n]}),Object(a.jsx)("div",{children:Object(a.jsx)(T,{})})]})},w=n(232),D=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(w.a,{size:"large"})}}]),n}(s.a.Component),J=n(418),K=n(417),E=n(414),A=n(245),P=n(246),H=n(160),L=n(124),M=n(256),B=n(159),z=J.a.Search,G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={data:null,loading:0},a.fetch_stock_close=a.fetch_stock_close.bind(Object(_.a)(a)),a}return Object(j.a)(n,[{key:"fetch_stock_close",value:function(e){var t=this,n={stock_number:e};this.setState({loading:1}),fetch("/fetch_stock_close",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e),t.setState({data:e.data,loading:0})}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)(z,{style:{padding:"10px 10px 10px 0px",width:200},placeholder:"\u4ee3\u865f",enterButton:"Search",onSearch:function(t){return e.fetch_stock_close(t)},loading:this.state.loading}),Object(a.jsxs)(K.a,{width:1e3,height:250,data:this.state.data,margin:{top:5,right:30,left:20,bottom:5},syncId:"anyId",children:[Object(a.jsx)(E.a,{strokeDasharray:"3 3"}),Object(a.jsx)(A.a,{dataKey:"date"}),Object(a.jsx)(P.a,{}),Object(a.jsx)(H.a,{}),Object(a.jsx)(L.a,{}),Object(a.jsx)(M.a,{type:"monotone",dataKey:"close",stroke:"#82ca9d",dot:!1}),Object(a.jsx)(M.a,{type:"monotone",dataKey:"5MA",stroke:"#FF2D2D",dot:!1}),Object(a.jsx)(M.a,{type:"monotone",dataKey:"10MA",stroke:"#0072E3",dot:!1})]}),Object(a.jsxs)(K.a,{width:1e3,height:250,data:this.state.data,margin:{top:5,right:30,left:20,bottom:5},syncId:"anyId",children:[Object(a.jsx)(E.a,{strokeDasharray:"3 3"}),Object(a.jsx)(A.a,{dataKey:"date"}),Object(a.jsx)(P.a,{}),Object(a.jsx)(H.a,{}),Object(a.jsx)(L.a,{}),Object(a.jsx)(M.a,{type:"monotone",dataKey:"k",stroke:"#46A3FF",dot:!1}),Object(a.jsx)(M.a,{type:"monotone",dataKey:"d",stroke:"#FF2D2D",dot:!1}),Object(a.jsx)(B.a,{dataKey:"date"})]})]})}}]),n}(s.a.Component),U=n(416),R=J.a.Search,V=[{title:"\u65e5\u671f",dataIndex:"date",key:"date"},{title:"\u958b\u76e4\u50f9",dataIndex:"open",key:"open"},{title:"\u6700\u9ad8\u50f9",dataIndex:"high",key:"high"},{title:"\b\b\u6700\u4f4e\u50f9",key:"low",dataIndex:"low"},{title:"\b\u6536\u76e4\u50f9",key:"close",dataIndex:"close"},{title:"\b\u6f32\u8dcc\u50f9\u5dee",key:"spread",dataIndex:"spread",render:function(e){return Object(a.jsx)(a.Fragment,{children:e.map((function(e){var t="-"===e[0]?"red":"green";return Object(a.jsx)(O.a,{color:t,children:e})}))})}}],Y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={data:null,loading:0},a.fetch_stock=a.fetch_stock.bind(Object(_.a)(a)),a}return Object(j.a)(n,[{key:"fetch_stock",value:function(e){var t=this,n={stock_number:e};this.setState({loading:1}),fetch("/fetch_stock",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.text()})).then((function(e){e=JSON.parse(e),t.setState({loading:0,data:e.data})}))}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Stock Fetch"}),Object(a.jsx)(R,{style:{padding:"10px 10px 10px 0px",width:200},placeholder:"\u4ee3\u865f",enterButton:"Search",onSearch:function(t){return e.fetch_stock(t)},loading:this.state.loading}),Object(a.jsx)(U.a,{columns:V,dataSource:this.state.data,size:"small"})]})}}]),n}(s.a.Component),q=h.a.SubMenu,Q=u.a.Header,W=u.a.Content,X=u.a.Sider,Z=u.a.Footer,$=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(Q,{className:"header",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("img",{src:y,width:"50",height:"50",alt:"logo"})}),Object(a.jsx)(h.a,{theme:"dark",mode:"horizontal",children:Object(a.jsx)("div",{className:"Apptitle",children:"Analysis Tools"})})]}),Object(a.jsxs)(u.a,{children:[Object(a.jsx)(X,{width:200,className:"site-layout-background",children:Object(a.jsxs)(h.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["0"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[Object(a.jsxs)(h.a.Item,{children:["Home",Object(a.jsx)(x.b,{className:"nav-link",to:"/"})]},"0"),Object(a.jsxs)(q,{icon:Object(a.jsx)(m.a,{}),title:"Function Test",children:[Object(a.jsxs)(h.a.Item,{children:["Timer",Object(a.jsx)(x.b,{className:"nav-link",to:"/Timer"})]},"1"),Object(a.jsxs)(h.a.Item,{children:["JSTimer",Object(a.jsx)(x.b,{className:"nav-link",to:"/JSTimer"})]},"2"),Object(a.jsxs)(h.a.Item,{children:["Name",Object(a.jsx)(x.b,{className:"nav-link",to:"/name"})]},"3"),Object(a.jsxs)(h.a.Item,{children:["GetDbUser",Object(a.jsx)(x.b,{className:"nav-link",to:"/GetDbUser"})]},"4"),Object(a.jsxs)(h.a.Item,{children:["Func1",Object(a.jsx)(x.b,{className:"nav-link",to:"/func1"})]},"5"),Object(a.jsxs)(h.a.Item,{children:["Func2",Object(a.jsx)(x.b,{className:"nav-link",to:"/func2"})]},"6"),Object(a.jsxs)(h.a.Item,{children:["Func3",Object(a.jsx)(x.b,{className:"nav-link",to:"/func3"})]},"7")]},"sub1"),Object(a.jsxs)(q,{icon:Object(a.jsx)(p.a,{}),title:"Data Process",children:[Object(a.jsx)(h.a.Item,{children:"option5"},"8"),Object(a.jsx)(h.a.Item,{children:"option6"},"9")]},"sub2"),Object(a.jsx)(q,{icon:Object(a.jsx)(f.a,{}),title:"Stock",children:Object(a.jsx)(h.a.Item,{children:"option9"},"10")},"sub3")]})}),Object(a.jsx)(u.a,{style:{padding:"10px 10px 0px 10px"},children:Object(a.jsxs)(W,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:"100vh"},children:[Object(a.jsx)(b.a,{exact:!0,path:"/",component:g}),Object(a.jsx)(b.a,{path:"/Home",component:g}),Object(a.jsx)(b.a,{path:"/Timer",component:S}),Object(a.jsx)(b.a,{path:"/JSTimer",component:N}),Object(a.jsx)(b.a,{path:"/Name",component:I}),Object(a.jsx)(b.a,{path:"/GetDbUser",component:C}),Object(a.jsx)(b.a,{path:"/func1",component:D}),Object(a.jsx)(b.a,{path:"/func2",component:G}),Object(a.jsx)(b.a,{path:"/func3",component:Y})]})})]}),Object(a.jsxs)(Z,{className:"Footer",children:["Copyright \xa9 KEVIN CHEN",Object(a.jsx)("a",{href:"https://www.facebook.com/chen.kevin.3785/",children:Object(a.jsx)("div",{children:Object(a.jsx)(O.a,{icon:Object(a.jsx)(v.a,{}),color:"#3b5999",children:"Facebook"})})})]})]})}}]),n}(s.a.Component),ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,425)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(b.c,{children:Object(a.jsx)($,{})})})}),document.getElementById("root")),ee()}},[[407,1,2]]]);
//# sourceMappingURL=main.4fb067e9.chunk.js.map