(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{291:function(t,e,a){},292:function(t,e,a){},428:function(t,e,a){"use strict";a.r(e);var n=a(7),c=a(0),s=a.n(c),i=a(35),r=a.n(i),o=(a(291),a(50)),j=a(51),l=a(52),d=a(54),b=(a(292),a(39)),h=(a(293),a(106)),u=a(435),O=a(441),x=a(63),m=a(442),p=a(443),f=a(444),y=a(445),v=a.p+"static/media/logo_main.a2a66270.svg",g=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("h2",{className:"text-primary",children:"Analysis tools"})}}]),a}(s.a.Component),k=a(44);var S=function(){var t=Object(c.useState)(0),e=Object(k.a)(t,2),a=e[0],s=e[1];return Object(c.useEffect)((function(){fetch("/time").then((function(t){return t.text()})).then((function(t){t=JSON.parse(t),s(t.time)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:["Timer: API time is ",a,"."]})})},N=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={date:new Date},t}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.updateTimer()}},{key:"updateTimer",value:function(){var t=this;setInterval((function(){t.setState({date:new Date})}),1e3)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:["\u73fe\u5728\u6642\u9593\u662f: ",this.state.date.toLocaleTimeString()]})}}]),a}(c.Component);var I=function(){var t=Object(c.useState)("none"),e=Object(k.a)(t,2),a=e[0],s=e[1];return Object(c.useEffect)((function(){fetch("/testpost",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sentence:"this sentence is setting from react"})}).then((function(t){return t.text()})).then((function(t){t=JSON.parse(t),s(t.content)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsxs)("p",{children:[a,"."]})})},_=a(248),F=a(73),T=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={name:"",email:""},n.changeState=n.changeState.bind(Object(F.a)(n)),n.submitForm=n.submitForm.bind(Object(F.a)(n)),n}return Object(j.a)(a,[{key:"changeState",value:function(t){var e=t.target.name;this.setState(Object(_.a)({},e,t.target.value)),console.log("\u6539\u4e86\u6539\u4e86")}},{key:"submitForm",value:function(t){alert("You add a user in database successfully");var e="/create_user/"+String(this.state.name)+"/"+String(this.state.email);fetch(e).then((function(t){return t.text()})).then((function(t){t=JSON.parse(t)}))}},{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.submitForm,children:[Object(n.jsx)("label",{children:"Name\uff1a"}),Object(n.jsx)("input",{id:"name",name:"name",placeholder:"name...",value:this.state.name,onChange:this.changeState}),Object(n.jsx)("label",{children:"Email\uff1a"}),Object(n.jsx)("input",{id:"email",name:"email",value:this.state.email,onChange:this.changeState}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",value:"\u9001\u51fa\u8868\u55ae"})]})}}]),a}(s.a.Component);var D=function(){var t=Object(c.useState)("Loading..."),e=Object(k.a)(t,2),a=e[0],s=e[1];return Object(c.useEffect)((function(){fetch("/get_all_user").then((function(t){return t.text()})).then((function(t){var e=(t=JSON.parse(t)).user_list.map((function(t){return Object(n.jsx)("li",{children:"Name:"+t[0]+", Email:"+t[1]},t)}));s(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsxs)("ul",{children:["Name List in Database: ",a]}),Object(n.jsx)("div",{children:Object(n.jsx)(T,{})})]})},w=a(249),C=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)(w.a,{size:"large"})}}]),a}(s.a.Component),K=a(440),J=a(437),A=a(438),E=a(434),M=a(267),P=a(268),B=a(176),H=a(143),L=a(275),z=a(175),G=a(66),U=a(260),R=K.a.Search,V=J.a.Title,Y=J.a.Text,q=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={data:null,kd_ratio:null,loading:0},n.fetch_stock_close=n.fetch_stock_close.bind(Object(F.a)(n)),n}return Object(j.a)(a,[{key:"fetch_stock_close",value:function(t){var e=this,a={stock_number:t};this.setState({loading:1}),fetch("/fetch_stock_close",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(t){return t.text()})).then((function(t){t=JSON.parse(t),e.setState({data:t.data,kd_ratio:t.kd_ratio,loading:0})}))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(R,{style:{padding:"10px 10px 10px 0px",width:200},placeholder:"\u4ee3\u865f",enterButton:"Search",onSearch:function(e){return t.fetch_stock_close(e)},loading:this.state.loading}),Object(n.jsxs)(A.a,{width:1e3,height:400,data:this.state.data,margin:{top:5,right:30,left:20,bottom:5},syncId:"anyId",children:[Object(n.jsx)(E.a,{strokeDasharray:"3 3"}),Object(n.jsx)(M.a,{dataKey:"date"}),Object(n.jsx)(P.a,{}),Object(n.jsx)(B.a,{}),Object(n.jsx)(H.a,{verticalAlign:"top"}),Object(n.jsx)(L.a,{type:"monotone",dataKey:"close",stroke:"#82ca9d",dot:!1}),Object(n.jsx)(L.a,{type:"monotone",dataKey:"5MA",stroke:"#FF2D2D",dot:!1}),Object(n.jsx)(L.a,{type:"monotone",dataKey:"10MA",stroke:"#0072E3",dot:!1})]}),Object(n.jsxs)(A.a,{width:1e3,height:200,data:this.state.data,margin:{top:5,right:30,left:20,bottom:5},syncId:"anyId",children:[Object(n.jsx)(E.a,{strokeDasharray:"3 3"}),Object(n.jsx)(M.a,{dataKey:"date"}),Object(n.jsx)(P.a,{}),Object(n.jsx)(B.a,{}),Object(n.jsx)(H.a,{verticalAlign:"top"}),Object(n.jsx)(L.a,{type:"monotone",dataKey:"k",stroke:"#46A3FF",dot:!1}),Object(n.jsx)(L.a,{type:"monotone",dataKey:"d",stroke:"#FF2D2D",dot:!1}),Object(n.jsx)(z.a,{dataKey:"date"})]}),Object(n.jsx)(V,{level:4,style:{padding:"10px 30px 0px 20px"},children:"KD Strategy: \u8cb7\u9032(K\u8d85\u904eD), \u8ce3\u51fa(D\u8d85\u904eK)"}),Object(n.jsxs)(Y,{style:{padding:"10px 30px 0px 20px"},type:"success",children:["\u5e74\u5831\u916c\u7387:",this.state.kd_ratio,"%"]}),Object(n.jsxs)(A.a,{width:1e3,height:200,data:this.state.data,margin:{top:5,right:30,left:20,bottom:5},syncId:"anyId",children:[Object(n.jsx)(G.a,{value:"hii",position:"top"}),Object(n.jsx)(E.a,{strokeDasharray:"3 3"}),Object(n.jsx)(M.a,{dataKey:"date"}),Object(n.jsx)(P.a,{domain:["dataMin","dataMax"]}),Object(n.jsx)(B.a,{}),Object(n.jsx)(H.a,{verticalAlign:"top"}),Object(n.jsx)(U.a,{y:1e3,label:"Base",stroke:"red"}),Object(n.jsx)(L.a,{type:"monotone",dataKey:"asset",stroke:"#00B271",dot:!1})]})]})}}]),a}(s.a.Component),Q=a(436),W=K.a.Search,X=[{title:"\u65e5\u671f",dataIndex:"date",key:"date"},{title:"\u958b\u76e4\u50f9",dataIndex:"open",key:"open"},{title:"\u6700\u9ad8\u50f9",dataIndex:"high",key:"high"},{title:"\b\b\u6700\u4f4e\u50f9",key:"low",dataIndex:"low"},{title:"\b\u6536\u76e4\u50f9",key:"close",dataIndex:"close"},{title:"\b\u6f32\u8dcc\u50f9\u5dee",key:"spread",dataIndex:"spread",render:function(t){return Object(n.jsx)(n.Fragment,{children:t.map((function(t){var e="-"===t[0]?"red":"green";return Object(n.jsx)(O.a,{color:e,children:t})}))})}}],Z=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={data:null,loading:0},n.fetch_stock=n.fetch_stock.bind(Object(F.a)(n)),n}return Object(j.a)(a,[{key:"fetch_stock",value:function(t){var e=this,a={stock_number:t};this.setState({loading:1}),fetch("/fetch_stock",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(t){return t.text()})).then((function(t){t=JSON.parse(t),e.setState({loading:0,data:t.data})}))}},{key:"render",value:function(){var t=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Stock Fetch"}),Object(n.jsx)(W,{style:{padding:"10px 10px 10px 0px",width:200},placeholder:"\u4ee3\u865f",enterButton:"Search",onSearch:function(e){return t.fetch_stock(e)},loading:this.state.loading}),Object(n.jsx)(Q.a,{columns:X,dataSource:this.state.data,size:"small"})]})}}]),a}(s.a.Component),$=h.a.SubMenu,tt=u.a.Header,et=u.a.Content,at=u.a.Sider,nt=u.a.Footer,ct=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(u.a,{children:[Object(n.jsxs)(tt,{className:"header",children:[Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:v,width:"50",height:"50",alt:"logo"})}),Object(n.jsx)(h.a,{theme:"dark",mode:"horizontal",children:Object(n.jsx)("div",{className:"Apptitle",children:"Analysis Tools"})})]}),Object(n.jsxs)(u.a,{children:[Object(n.jsx)(at,{width:200,className:"site-layout-background",children:Object(n.jsxs)(h.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["0"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[Object(n.jsxs)(h.a.Item,{children:["Home",Object(n.jsx)(x.b,{className:"nav-link",to:"/"})]},"0"),Object(n.jsxs)($,{icon:Object(n.jsx)(m.a,{}),title:"Function Test",children:[Object(n.jsxs)(h.a.Item,{children:["Timer",Object(n.jsx)(x.b,{className:"nav-link",to:"/Timer"})]},"1"),Object(n.jsxs)(h.a.Item,{children:["JSTimer",Object(n.jsx)(x.b,{className:"nav-link",to:"/JSTimer"})]},"2"),Object(n.jsxs)(h.a.Item,{children:["Name",Object(n.jsx)(x.b,{className:"nav-link",to:"/name"})]},"3"),Object(n.jsxs)(h.a.Item,{children:["GetDbUser",Object(n.jsx)(x.b,{className:"nav-link",to:"/GetDbUser"})]},"4"),Object(n.jsxs)(h.a.Item,{children:["Func1",Object(n.jsx)(x.b,{className:"nav-link",to:"/func1"})]},"5"),Object(n.jsxs)(h.a.Item,{children:["Func2",Object(n.jsx)(x.b,{className:"nav-link",to:"/func2"})]},"6"),Object(n.jsxs)(h.a.Item,{children:["Func3",Object(n.jsx)(x.b,{className:"nav-link",to:"/func3"})]},"7")]},"sub1"),Object(n.jsxs)($,{icon:Object(n.jsx)(p.a,{}),title:"Data Process",children:[Object(n.jsx)(h.a.Item,{children:"option5"},"8"),Object(n.jsx)(h.a.Item,{children:"option6"},"9")]},"sub2"),Object(n.jsx)($,{icon:Object(n.jsx)(f.a,{}),title:"Stock",children:Object(n.jsx)(h.a.Item,{children:"option9"},"10")},"sub3")]})}),Object(n.jsx)(u.a,{style:{padding:"10px 10px 0px 10px"},children:Object(n.jsxs)(et,{className:"site-layout-background",style:{overflow:"auto",padding:24,margin:0,maxHeight:"100vh",minHeight:"100vh"},children:[Object(n.jsx)(b.a,{exact:!0,path:"/",component:g}),Object(n.jsx)(b.a,{path:"/Home",component:g}),Object(n.jsx)(b.a,{path:"/Timer",component:S}),Object(n.jsx)(b.a,{path:"/JSTimer",component:N}),Object(n.jsx)(b.a,{path:"/Name",component:I}),Object(n.jsx)(b.a,{path:"/GetDbUser",component:D}),Object(n.jsx)(b.a,{path:"/func1",component:C}),Object(n.jsx)(b.a,{path:"/func2",component:q}),Object(n.jsx)(b.a,{path:"/func3",component:Z})]})})]}),Object(n.jsxs)(nt,{className:"Footer",children:["Copyright \xa9 KEVIN CHEN",Object(n.jsx)("a",{href:"https://www.facebook.com/chen.kevin.3785/",children:Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{icon:Object(n.jsx)(y.a,{}),color:"#3b5999",children:"Facebook"})})})]})]})}}]),a}(s.a.Component),st=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,446)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),s(t),i(t)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(x.a,{children:Object(n.jsx)(b.c,{children:Object(n.jsx)(ct,{})})})}),document.getElementById("root")),st()}},[[428,1,2]]]);
//# sourceMappingURL=main.c96795ae.chunk.js.map