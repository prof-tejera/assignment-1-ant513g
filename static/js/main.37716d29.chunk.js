(this["webpackJsonpassignment-1"]=this["webpackJsonpassignment-1"]||[]).push([[0],{31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var s,a,i,r,c,o,l,j,h=n(1),u=n.n(h),d=n(22),p=n.n(d),b=(n(31),n(2)),x=n(17),O=n(8),m=n(3),v=n(4),f=n(5),g=n(7),y=n(6),S=n(0),C=m.a.div(s||(s=Object(b.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),k=m.a.div(a||(a=Object(b.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),L=m.a.div(i||(i=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),w=m.a.div(r||(r=Object(b.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),z=m.a.table(c||(c=Object(b.a)([""]))),D=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(S.jsxs)(C,{children:[Object(S.jsx)(L,{children:this.props.title}),Object(S.jsxs)(k,{children:[Object(S.jsx)(w,{children:this.props.component}),Object(S.jsxs)(z,{children:[Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Prop"}),Object(S.jsx)("th",{children:"Description"}),Object(S.jsx)("th",{children:"Type"}),Object(S.jsx)("th",{children:"Default value"})]}),this.props.propDocs.map((function(e){return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:e.prop}),Object(S.jsx)("td",{children:e.description}),Object(S.jsx)("td",{children:e.type}),Object(S.jsx)("td",{children:Object(S.jsx)("code",{children:e.defaultValue})})]})}))]})]})]})}}]),n}(u.a.Component),R=D,V={small:10,medium:14,large:20},F=m.a.div(o||(o=Object(b.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),A=m.a.span(l||(l=Object(b.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.color})),P=m.a.div(j||(j=Object(b.a)(["\n  display: flex;\n"]))),E=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=V[this.props.size],t=this.props.color;return Object(S.jsxs)(F,{children:[Object(S.jsxs)(P,{children:[Object(S.jsx)(A,{size:e,color:t}),Object(S.jsx)(A,{size:e,color:t})]}),Object(S.jsxs)(P,{children:[Object(S.jsx)(A,{size:e,color:t}),Object(S.jsx)(A,{size:e,color:t})]})]})}}]),n}(u.a.Component);E.defaultProps={size:"medium",color:"#ffa2bf"};var T,B,I=E,M={Default:"#4037C4",Start:"#057C48",Stop:"#AD0A0F",Pause:"#CDAE3E",Lap:"#4037C4",Reset:"#4037C4"},N={small:48,medium:60,large:80},H=m.a.button(T||(T=Object(b.a)(["\n  display: inline;\n  box-sizing: border-box;\n  overflow: auto;\n  vertical-align: middle;\n  text-align: center;\n  margin: auto;\n  width: ","px;\n  height: ","px;\n  border-radius: 8px;\n  border: none;\n  font-size: 16px;\n  color: white;\n  background-color: ",";\n  box-shadow: ",";\n  cursor: pointer;\n  &:hover {\n    font-weight: 600;\n    background-color:",";\n    box-shadow: inset 1px 1px 5px #6760D2;\n  }\n  &:active {\n    background-color: #342D9F;\n    box-shadow: inset 1px 1px 5px #25253C;\n  }\n  \n"])),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.type||"#4037C4"}),(function(e){return e.down?"inset 0 0 5px black":"inset 1px 1px 5px #6760D2"}),(function(e){return e.type||"#342D9F"})),J=m.a.div(B||(B=Object(b.a)(["\n    display: flex;\n    margin: 0.5rem;\n    align-content: center;\n    overflow: auto;\n    color: #EFF1F3;\n    cursor: pointer;\n    .something {\n      background-color: orange; \n    }\n"]))),Y=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(e){var s;return Object(v.a)(this,n),(s=t.call(this,e)).state={value:"Start",pressed:!1},s}return Object(f.a)(n,[{key:"render",value:function(){var e=N[this.props.size],t=M[this.props.type];this.props.onClick;return Object(S.jsx)(J,{children:Object(S.jsx)(H,{pressed:this.state.pressed,value:this.state.value,size:e,type:t,onClick:this.props.onClick,children:this.props.value})})}}]),n}(h.Component);Y.defaultProps={size:"medium",type:"Default"};var X,q,G,K,Q,U=Y,W=m.a.div(X||(X=Object(b.a)(["\n  text-align: center;\n  margin: auto;\n  padding: 1rem;\n  overflow: auto;\n  box-sizing: border-box;\n  border: none;\n  display: block;\n  font-size: 16px;\n  vertical-align: baseline;\n  cursor: pointer; \n  \n"]))),Z=m.a.select(q||(q=Object(b.a)(["\nwidth: 50px;\ndisplay: block;\nfont-family: 'Inconsolata', monospace;\nfont-size: 16px;\ncolor: #f2f2f2;\nbackground-color: #4A4A55;\nborder: none;\ntext-align: center;\nfont-weight: 500;\nmargin: 8px;\nborder-radius: 8px;\ncursor: pointer; \n"]))),$=m.a.option(G||(G=Object(b.a)(["\n&:hover {\n  font-weight: 700;\n  background-color: #4037C4;\n}\n"]))),_=m.a.label(K||(K=Object(b.a)(["\n\nfont-family: 'Courier Prime', monospace;\nfont-size: 16px;\ncolor: white;\nborder: none;\ntext-align: center;\nmargin: auto;\ntext-align: center;\n"]))),ee=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(e){var s;return Object(v.a)(this,n),(s=t.call(this,e)).state={click:!1,rounds:0},s}return Object(f.a)(n,[{key:"render",value:function(){var e=this.state.value;this.props.onChange;return Object(S.jsxs)(W,{children:[Object(S.jsx)(_,{for:this.props.name,value:e,children:this.props.name}),Object(S.jsxs)(Z,{name:this.props.name,size:"5",onChange:this.props.onChange,children:[Object(S.jsx)($,{value:"0",children:"0"}),Object(S.jsx)($,{value:"1",children:"1"}),Object(S.jsx)($,{value:"2",children:"2"}),Object(S.jsx)($,{value:"3",children:"3"}),Object(S.jsx)($,{value:"4",children:"4"}),Object(S.jsx)($,{value:"5",children:"5"}),Object(S.jsx)($,{value:"6",children:"6"}),Object(S.jsx)($,{value:"7",children:"7"}),Object(S.jsx)($,{value:"8",children:"8"}),Object(S.jsx)($,{value:"9",children:"9"}),Object(S.jsx)($,{value:"10",children:"10"}),Object(S.jsx)($,{value:"11",children:"11"}),Object(S.jsx)($,{value:"12",children:"12"}),Object(S.jsx)($,{value:"13",children:"13"}),Object(S.jsx)($,{value:"14",children:"14"}),Object(S.jsx)($,{value:"15",children:"15"}),Object(S.jsx)($,{value:"16",children:"16"}),Object(S.jsx)($,{value:"17",children:"17"}),Object(S.jsx)($,{value:"18",children:"18"}),Object(S.jsx)($,{value:"19",children:"19"}),Object(S.jsx)($,{value:"20",children:"20"}),Object(S.jsx)($,{value:"21",children:"21"}),Object(S.jsx)($,{value:"22",children:"22"}),Object(S.jsx)($,{value:"23",children:"23"}),Object(S.jsx)($,{value:"24",children:"24"}),Object(S.jsx)($,{value:"25",children:"25"}),Object(S.jsx)($,{value:"26",children:"26"}),Object(S.jsx)($,{value:"27",children:"27"}),Object(S.jsx)($,{value:"28",children:"28"}),Object(S.jsx)($,{value:"29",children:"29"}),Object(S.jsx)($,{value:"30",children:"30"}),Object(S.jsx)($,{value:"31",children:"31"}),Object(S.jsx)($,{value:"32",children:"32"}),Object(S.jsx)($,{value:"33",children:"33"}),Object(S.jsx)($,{value:"34",children:"34"}),Object(S.jsx)($,{value:"35",children:"35"}),Object(S.jsx)($,{value:"36",children:"36"}),Object(S.jsx)($,{value:"37",children:"37"}),Object(S.jsx)($,{value:"38",children:"38"}),Object(S.jsx)($,{value:"39",children:"39"}),Object(S.jsx)($,{value:"40",children:"40"}),Object(S.jsx)($,{value:"41",children:"41"}),Object(S.jsx)($,{value:"42",children:"42"}),Object(S.jsx)($,{value:"43",children:"43"}),Object(S.jsx)($,{value:"44",children:"44"}),Object(S.jsx)($,{value:"45",children:"45"}),Object(S.jsx)($,{value:"46",children:"46"}),Object(S.jsx)($,{value:"47",children:"47"}),Object(S.jsx)($,{value:"48",children:"48"}),Object(S.jsx)($,{value:"49",children:"49"}),Object(S.jsx)($,{value:"50",children:"50"}),Object(S.jsx)($,{value:"51",children:"51"}),Object(S.jsx)($,{value:"52",children:"52"}),Object(S.jsx)($,{value:"53",children:"53"}),Object(S.jsx)($,{value:"54",children:"54"}),Object(S.jsx)($,{value:"55",children:"55"}),Object(S.jsx)($,{value:"56",children:"56"}),Object(S.jsx)($,{value:"57",children:"57"}),Object(S.jsx)($,{value:"58",children:"58"}),Object(S.jsx)($,{value:"59",children:"59"})]})]})}}]),n}(h.Component),te=m.a.div(Q||(Q=Object(b.a)(["\n    box-sizing: border-box;\n    margin: auto;\n    width: 100%;\n    display: flex;\n    align-content: center;\n    justify-content: center;\n    overflow: auto;\n    font-size: 38px;\n    font-weight: 400;\n    position: relative;\n    flex-wrap: wrap;\n"]))),ne=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(S.jsxs)(te,{children:[this.props.hh,":",this.props.mm,":",this.props.ss,".",this.props.ms]})}}]),n}(h.Component);ne.defaultProps={hh:0,mm:0,ss:0,ms:0};var se,ae,ie,re=ne,ce=m.a.span(se||(se=Object(b.a)(["\n  font-size: 18px;\n  margin-right: 1rem;\n"]))),oe=m.a.div(ae||(ae=Object(b.a)(["\n  font-size: 18px;\n  font-family: 'Inconsolata', monospace;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n"]))),le=m.a.hr(ie||(ie=Object(b.a)(["\n  border: 0;\n  height: 1px;\n  background: #25253C;\n  background-image: linear-gradient(to right, #342D9F, #4037C4, #342D9F);\n"]))),je=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(le,{}),Object(S.jsxs)(oe,{children:[Object(S.jsxs)(ce,{children:[this.props.name," ",this.props.lap,":"]}),this.props.hhLap,":",this.props.mmLap,":",this.props.ssLap,".",this.props.msLap]})]})}}]),n}(h.Component);je.defaultProps={name:"Lap",lap:1,hhLap:0,mmLap:0,ssLap:0,msLap:0};var he,ue,de,pe,be,xe,Oe,me,ve,fe,ge,ye,Se,Ce,ke,Le,we=je,ze=m.a.div(he||(he=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  background-color: #h2h2h2;\n"]))),De=m.a.div(ue||(ue=Object(b.a)(["\n color: black;\n background-color: #6760d2;\n"]))),Re=m.a.div(de||(de=Object(b.a)(["\n  font-size: 2rem;\n"]))),Ve=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(S.jsx)(ze,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)(Re,{children:"Documentation"}),Object(S.jsx)(R,{title:"Loading spinner ",component:Object(S.jsx)(I,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]}),Object(S.jsx)(R,{title:"Button",component:Object(S.jsx)(U,{value:"Button"}),propDocs:[{prop:"size",description:"Changes the size of the button",type:"string",defaultValue:"medium"},{prop:"type",description:"Changes the type of button",type:"string",defaultValue:"default"},{prop:"onClick",description:"Binds the onClick",type:"N/A",defaultValue:"N/A"}]}),Object(S.jsx)(R,{title:"Input",component:Object(S.jsx)(ee,{}),propDocs:[{prop:"name",description:"Assigns a name",type:"string, number, or node",defaultValue:"n/a"},{prop:"onChange",description:"Binds the onChange",type:"n/a",defaultValue:"n/a"}]}),Object(S.jsx)(R,{title:"Display Time",component:Object(S.jsx)(re,{}),propDocs:[{prop:"hh",description:"Sets the hours value",type:"number",defaultValue:0},{prop:"mm",description:"Set the minutes value",type:"number",defaultValue:0},{prop:"ss",description:"Sets the seconds value",type:"number",defaultValue:0},{prop:"ms",description:"Sets the milliseconds",type:"number",defaultValue:0}]}),Object(S.jsx)(De,{children:Object(S.jsx)(R,{title:"Display Rounds",component:Object(S.jsx)(we,{}),propDocs:[{prop:"hhLap",description:"Sets the hours value",type:"number",defaultValue:0},{prop:"mmLap",description:"Set the minutes value",type:"number",defaultValue:0},{prop:"ssLap",description:"Sets the seconds value",type:"number",defaultValue:0},{prop:"msLap",description:"Sets the milliseconds",type:"number",defaultValue:0},{prop:"lap",description:"Sets the number of laps",type:"number",defaultValue:1},{prop:"name",description:"Sets the name of the rounds",type:"string",defaultValue:"Lap"}]})})]})})}}]),n}(u.a.Component),Fe=Ve,Ae=m.a.div(pe||(pe=Object(b.a)(["\nbackground: rgb(37,37,60);\nbackground: linear-gradient(90deg, rgba(37,37,60,1) 0%, rgba(47,47,55,1) 100%);\n  border-radius: 16px;\n  padding: 2rem;\n  display: block;\n  justify-content: space-evenly;\n  overflow: auto;\n  box-sizing: border-box;\n  min-width: 500px;\n  box-shadow:  1px 1px 5px #2F2F37;\n"]))),Pe=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(S.jsx)(Ae,{children:this.props.children})}}]),n}(h.Component),Ee=Pe,Te=m.a.div(be||(be=Object(b.a)(["\ndisplay: flex;\nalign-content: center;\njustify-content: space-evenly;\nmargin: 1rem;\nflex-wrap: wrap;\n"]))),Be=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(S.jsx)(Te,{children:this.props.children})}}]),n}(h.Component),Ie=Be,Me=m.a.div(xe||(xe=Object(b.a)(["\nbox-sizing: border-box;\n  border: none;\n  padding: 2rem;\n  height: max-content;\n  margin: auto;\n  overflow: auto;\n  width: 100%; \n  text-align: center;\n  background-color: #4A4A55;\n  border-radius: 8px;\n  color: white;\n  box-shadow: inset 0 0 10px #1C1C21;\n  font-family: 'Inconsolata', monospace;\n"]))),Ne=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return Object(S.jsx)(Me,{children:this.props.children})}}]),n}(h.Component),He=Ne,Je=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(e){var s;return Object(v.a)(this,n),(s=t.call(this,e)).state={time:0,name:"Lap",lap:1,type:"Start",value:"Start"},s}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(S.jsxs)(Ee,{children:[Object(S.jsx)(He,{children:Object(S.jsx)(re,{hh:this.state.hh,mm:this.state.mm,ss:this.state.ss,ms:"00"})}),Object(S.jsxs)(Ie,{children:[Object(S.jsx)(U,{value:this.state.value,type:this.state.type,onClick:function(){e.state.pressed?e.setState({type:"Start",pressed:!1,down:!1,value:"Start"}):e.setState({type:"Stop",pressed:!0,down:!0,value:"Stop"})}}),Object(S.jsx)(U,{value:"Reset",type:"Reset",onClick:function(t){e.setState({hh:0,mm:0,ss:0,hhLap:0,mmLap:0,ssLap:0})}}),Object(S.jsx)(U,{value:"Lap"})]}),Object(S.jsx)(we,{name:this.state.name,lap:this.state.lap,hhLap:this.state.hhLap,mmLap:this.state.mmLap,ssLap:this.state.ssLap,msLap:0})]})}}]),n}(u.a.Component),Ye=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(e){var s;return Object(v.a)(this,n),(s=t.call(this,e)).state={type:"Start",value:"Start"},s}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(S.jsxs)(Ee,{children:[Object(S.jsx)(He,{children:Object(S.jsx)(re,{hh:this.state.hh,mm:this.state.mm,ss:this.state.ss,ms:"00"})}),Object(S.jsxs)(Ie,{children:[Object(S.jsx)(ee,{name:"Hours",value:this.state.hh,onChange:function(t){e.setState({hh:t.target.value})}}),Object(S.jsx)(ee,{name:"Minutes",value:this.state.mm,onChange:function(t){e.setState({mm:t.target.value})}}),Object(S.jsx)(ee,{name:"Seconds",value:this.state.ss,onChange:function(t){e.setState({ss:t.target.value})}})]}),Object(S.jsxs)(Ie,{children:[Object(S.jsx)(U,{value:this.state.value,type:this.state.type,onClick:function(){e.state.pressed?e.setState({type:"Start",pressed:!1,down:!1,value:"Start"}):e.setState({type:"Stop",pressed:!0,down:!0,value:"Stop"})}}),Object(S.jsx)(U,{value:"Reset",type:"Reset",onClick:function(t){e.setState({hh:0,mm:0,ss:0,ms:0})}})]})]})}}]),n}(u.a.Component),Xe=m.a.text(Oe||(Oe=Object(b.a)(["\npadding: 0;\nfont-size: 16px;\ncolor: white;\nborder: none;\nmargin: 16px 0 0 0;\nwidth: auto;\nvertical-align: middle;\nline-height: 40px;\nfont-weight: 600;\ndisplay: block;\n"]))),qe=m.a.text(me||(me=Object(b.a)(["\n  font-family: 'Courier Prime', monospace;\n  box-sizing: border-box;\n  overflow: auto;\n  font-size: 20px;\n  font-weight: 400;\n  vertical-align: middle;\n  display: block;\n"]))),Ge=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(e){var s;return Object(v.a)(this,n),(s=t.call(this,e)).state={rounds:2,type:"Start",value:"Start"},s}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(S.jsxs)(Ee,{children:[Object(S.jsxs)(He,{children:[Object(S.jsx)(Xe,{children:"Time Left:"}),Object(S.jsx)(re,{hh:this.state.hh,mm:this.state.mm,ss:this.state.ss,ms:"00"}),Object(S.jsx)(Xe,{children:"Rounds Left:"}),Object(S.jsx)(qe,{children:this.state.rounds})]}),Object(S.jsxs)(Ie,{children:[Object(S.jsx)(ee,{name:"Rounds",value:this.state.rounds,onChange:function(t){e.setState({rounds:t.target.value})}}),Object(S.jsx)(ee,{name:"Hours",value:this.state.hh,onChange:function(t){e.setState({hh:t.target.value})}}),Object(S.jsx)(ee,{name:"Minutes",value:this.state.mm,onChange:function(t){e.setState({mm:t.target.value})}}),Object(S.jsx)(ee,{name:"Seconds",value:this.state.ss,onChange:function(t){e.setState({ss:t.target.value})}})]}),Object(S.jsxs)(Ie,{children:[Object(S.jsx)(U,{value:this.state.value,type:this.state.type,onClick:function(){e.state.pressed?e.setState({type:"Start",pressed:!1,down:!1,value:"Start"}):e.setState({type:"Stop",pressed:!0,down:!0,value:"Stop"})}}),Object(S.jsx)(U,{value:"Reset",type:"Reset",onClick:function(t){e.setState({hh:0,mm:0,ss:0,rounds:0,hhLap:0,mmLap:0,ssLap:0})}})]}),Object(S.jsx)(we,{name:"Round",lap:2,hhLap:this.state.hhLap,mmLap:this.state.mmLap,ssLap:this.state.ssLap,msLap:0}),Object(S.jsx)(we,{name:"Round",lap:1,hhLap:this.state.hhLap,mmLap:this.state.mmLap,ssLap:this.state.ssLap,msLap:0})]})}}]),n}(u.a.Component),Ke=m.a.text(ve||(ve=Object(b.a)(["\npadding: 0;\nfont-size: 16px;\ncolor: white;\nborder: none;\nmargin: 0 0 0 0;\nwidth: auto;\nvertical-align: middle;\nline-height: 40px;\nfont-weight: 600;\ndisplay: block;\ntext-align: center;\n"]))),Qe=m.a.div(fe||(fe=Object(b.a)(["\npadding: 1rem;\ndisplay: flex;\nalign-content: center;\njustify-content: space-between;\nmin-width: 80px;\n"]))),Ue=m.a.div(ge||(ge=Object(b.a)(["\n  display: ",";\n  position: relative;\n  width: 100%;\n"])),(function(e){return e.hide?"block":"none"})),We=m.a.text(ye||(ye=Object(b.a)(["\n  font-family: 'Courier Prime', monospace;\n  box-sizing: border-box;\n  overflow: auto;\n  font-size: 20px;\n  font-weight: 400;\n  vertical-align: middle;\n  display: block;\n  text-align: center;\n"]))),Ze=m.a.hr(Se||(Se=Object(b.a)(["\n  border: 0;\n  height: 1px;\n  background: #25253C;\n  background-image: linear-gradient(to right, #342D9F, #4037C4, #342D9F);\n"]))),$e=function(e){Object(g.a)(n,e);var t=Object(y.a)(n);function n(e){var s;return Object(v.a)(this,n),(s=t.call(this,e)).state={type:"Start",value:"Start",rounds:1,lap:1,hide:!1},s}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(S.jsxs)(Ee,{children:[Object(S.jsxs)(He,{children:[Object(S.jsx)(Ke,{children:"Time Left:"}),Object(S.jsx)(re,{name:"Rounds",hh:this.state.hh,mm:this.state.mm,ss:this.state.ss,ms:"00"}),Object(S.jsxs)(Ie,{children:[Object(S.jsxs)(Ke,{children:["Rounds Left:",Object(S.jsx)(We,{children:this.state.rounds})]}),Object(S.jsxs)(Ke,{children:["Sets Left:",Object(S.jsx)(We,{children:this.state.lap})]})]})]}),Object(S.jsxs)(Qe,{children:[Object(S.jsxs)(Ie,{children:[Object(S.jsx)(Qe,{children:Object(S.jsxs)(Ke,{children:[" Rounds:",Object(S.jsxs)(We,{children:[this.state.rounds," "]})]})}),Object(S.jsxs)("div",{children:[Object(S.jsx)(U,{size:"small",value:"+",onClick:function(){e.setState((function(e){return{rounds:e.rounds+1}}))}}),Object(S.jsx)(U,{size:"small",value:"-",onClick:function(){e.setState((function(e){return{rounds:e.rounds-1}}))}})]})]}),Object(S.jsxs)(Ie,{children:[Object(S.jsx)(Qe,{children:Object(S.jsxs)(Ke,{children:["Sets:",Object(S.jsx)(We,{children:this.state.lap})]})}),Object(S.jsxs)("div",{children:[Object(S.jsx)(U,{size:"small",value:"+",onClick:function(){e.setState((function(e){return{lap:e.lap+1}}))}}),Object(S.jsx)(U,{size:"small",value:"-",onClick:function(){e.setState((function(e){return{lap:e.lap-1}}))}})]})]})]}),Object(S.jsx)(we,{name:"Set",lap:1,hhLap:this.state.hhLap,mmLap:this.state.mmLap,ssLap:this.state.ssLap,msLap:0}),Object(S.jsx)(Ue,{hide:this.state.hide,children:Object(S.jsxs)(Ie,{children:[Object(S.jsx)(ee,{name:"Hours",value:this.state.hh,onChange:function(t){e.setState({hhLap:t.target.value})}}),Object(S.jsx)(ee,{name:"Minutes",value:this.state.mm,onChange:function(t){e.setState({mmLap:t.target.value})}}),Object(S.jsx)(ee,{name:"Seconds",value:this.state.ss,onChange:function(t){e.setState({ssLap:t.target.value})}})]})}),Object(S.jsx)(U,{size:"small",pressed:this.state.pressed,value:"Edit",onClick:function(){e.state.pressed?(e.setState({hide:!0,pressed:!1}),console.log("YES")):(e.setState({hide:!1,pressed:!0}),console.log("NO"))}}),Object(S.jsx)(Ze,{}),Object(S.jsxs)(Ie,{children:[Object(S.jsx)(U,{value:this.state.value,type:this.state.type,onClick:function(){e.state.pressed?e.setState({type:"Start",pressed:!1,value:"Start"}):e.setState({type:"Stop",pressed:!0,value:"Stop"})}}),Object(S.jsx)(U,{value:"Reset",type:"Reset",className:"something",onClick:function(t){e.setState({hh:0,mm:0,ss:0,rounds:0,lap:0,hhLap:0,mmLap:0,ssLap:0})}})]})]})}}]),n}(u.a.Component),_e=m.a.div(Ce||(Ce=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),et=m.a.div(ke||(ke=Object(b.a)(["\n  border: 1px solid gray;\n  padding: 20px;\n  margin: 10px;\n  font-size: 1.5rem;\n"]))),tt=m.a.div(Le||(Le=Object(b.a)([""])));var nt,st=function(){var e=[{title:"Stopwatch",C:Object(S.jsx)(Je,{})},{title:"Countdown",C:Object(S.jsx)(Ye,{})},{title:"XY",C:Object(S.jsx)(Ge,{})},{title:"Tabata",C:Object(S.jsx)($e,{})}];return Object(S.jsx)(_e,{children:e.map((function(e){return Object(S.jsxs)(et,{children:[Object(S.jsx)(tt,{children:e.title}),e.C]})}))})},at=m.a.div(nt||(nt=Object(b.a)(["\n  background: #f0f6fb;\n  height: 100vh;\n  overflow: auto;\n"])));var it=function(){return Object(S.jsx)(at,{children:Object(S.jsxs)(x.a,{children:[Object(S.jsx)("nav",{children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)(x.b,{to:"/",children:"Timers"})}),Object(S.jsx)("li",{children:Object(S.jsx)(x.b,{to:"/docs",children:"Documentation"})})]})}),Object(S.jsxs)(O.c,{children:[Object(S.jsx)(O.a,{path:"/docs",children:Object(S.jsx)(Fe,{})}),Object(S.jsx)(O.a,{path:"/",children:Object(S.jsx)(st,{})})]})]})})};p.a.render(Object(S.jsx)(u.a.StrictMode,{children:Object(S.jsx)(it,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.37716d29.chunk.js.map