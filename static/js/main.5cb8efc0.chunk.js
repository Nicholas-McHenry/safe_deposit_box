(this.webpackJsonpsafe_deposit_box=this.webpackJsonpsafe_deposit_box||[]).push([[0],{22:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(1),c=n.n(s),i=n(16),r=n.n(i),o=(n(22),n(8)),u=n(9),l=n(13),d=n(12),p=n(10),h=n(11),b=Object.freeze({LOCKED:"Locked",UNLOCKED:"Unlocked"}),O=Object.freeze({BLANK:"",ERROR:"Error",READY:"Ready",LOCKING:"Locking",UNLOCKING:"Unlocking",SERVICE:"Service",VALIDATING:"Validating"}),E=Object.freeze({ONE:"1",TWO:"2",THREE:"3",FOUR:"4",FIVE:"5",SIX:"6",SEVEN:"7",EIGHT:"8",NINE:"9",ZERO:"0",ASTERIX:"*",LOCK:"L"}),f=[E.SEVEN,E.EIGHT,E.NINE,E.FOUR,E.FIVE,E.SIX,E.ONE,E.TWO,E.THREE,E.ASTERIX,E.ZERO,E.LOCK],T=Object.freeze({INPUT_PASSCODE:"INPUT_PASSCODE",CHANGE_STATUS:"CHANGE_STATUS",CHANGE_MESSAGE:"CHANGE_MESSAGE",CREATE_PASSCODE:"CREATE_PASSCODE",BUTTON_ACTIVITY:"BUTTON_ACTIVITY"}),v=Object.freeze({VALIDATE_SN:"VALIDATE_SN"}),N=function(e){return{type:T.INPUT_PASSCODE,payload:e}},S=function(e){return{type:T.CHANGE_STATUS,payload:e}},j=function(e){return{type:T.CHANGE_MESSAGE,payload:e}},m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(h.a)(a)),a.checkEnteredPasscode=a.checkEnteredPasscode.bind(Object(h.a)(a)),a.clearInputPasscode=a.clearInputPasscode.bind(Object(h.a)(a)),a.lockTheSafe=a.lockTheSafe.bind(Object(h.a)(a)),a.validateSN=a.validateSN.bind(Object(h.a)(a)),a.state={inputTimeout:null,lockingTimeout:null},a}return Object(u.a)(n,[{key:"handleClick",value:function(e){var t,n=this,a=this.state.inputTimeout,s=this.props,c=s.dispatch,i=s.status,r=s.message,o=new Date,u=o.getHours()+":"+o.getMinutes()+":"+o.getSeconds();c((t=u,{type:T.BUTTON_ACTIVITY,payload:t})),i===b.LOCKED?r===O.SERVICE?(c(N(e)),null!=a&&clearTimeout(a),this.setState({inputTimeout:setTimeout((function(){n.validateSN()}),1200)})):e!==E.LOCK&&e!==E.ASTERIX?(c(N(e)),null!=a&&clearTimeout(a),this.setState({inputTimeout:setTimeout((function(){n.checkEnteredPasscode()}),1200)})):this.clearInputPasscode():e!==E.LOCK&&e!==E.ASTERIX?c(N(e)):e===E.LOCK?this.lockTheSafe():this.clearInputPasscode()}},{key:"checkEnteredPasscode",value:function(){var e=this,t=this.props,n=t.dispatch;t.passcode===t.enteredPasscode?(n(j(O.UNLOCKING)),setTimeout((function(){n(S(b.UNLOCKED)),n(j(O.READY)),e.clearInputPasscode()}),3e3)):this.clearInputPasscode()}},{key:"clearInputPasscode",value:function(){this.props.dispatch(N(null))}},{key:"validateSN",value:function(){var e=this.props,t=e.enteredPasscode,n=e.dispatch,a=e.serialNumber;n(j(O.VALIDATING)),n(function(e,t){return{type:v.VALIDATE_SN,payload:e,serialNumber:t}}(t,a))}},{key:"lockTheSafe",value:function(){var e=this.props,t=e.enteredPasscode,n=e.dispatch;null!=t&&t.length>=6&&(n(j(O.LOCKING)),setTimeout((function(){var e;n((e=t,{type:T.CREATE_PASSCODE,payload:e})),n(N(null)),n(S(b.LOCKED)),n(j(O.READY))}),3e3))}},{key:"getButtonList",value:function(){var e=this;return f.map((function(t,n){return Object(a.jsx)("button",{className:"btn",onClick:function(){return e.handleClick(t)},children:t},n)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"sdb-numpad",children:this.getButtonList()})}}]),n}(c.a.Component),A=Object(p.b)((function(e){return{status:e.status,passcode:e.passcode,enteredPasscode:e.inputPasscode,message:e.message,serialNumber:e.serialNumber}}))(m),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={screenTimeout:null,backlight:"off"},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({screenTimeout:setTimeout((function(){e.setState({backlight:"off"})}),5e3)})}},{key:"componentDidUpdate",value:function(e,t,n){var a=this,s=this.props.dispatch;e.enteredPasscode!==this.props.enteredPasscode&&"000000"===this.props.enteredPasscode&&this.props.status!==b.UNLOCKED&&setTimeout((function(){s(N(null)),s(j(O.SERVICE))}),1200),e.buttonActivity!==this.props.buttonActivity&&(clearTimeout(this.state.screenTimeout),this.setState({backlight:"on",screenTimeout:setTimeout((function(){a.setState({backlight:"off"})}),5e3)})),"on"===t.backlight&&"off"===this.state.backlight&&s(N(null))}},{key:"render",value:function(){var e=this.props,t=e.status,n=e.message,s=this.state.backlight;return Object(a.jsxs)("div",{className:"sdb-screen backlight-".concat(s),children:[Object(a.jsx)("div",{className:"sdb-status",children:t}),Object(a.jsx)("div",{className:"sdb-status-messages",children:n})]})}}]),n}(c.a.Component),y=Object(p.b)((function(e){return{status:e.status,message:e.message,enteredPasscode:e.inputPasscode,buttonActivity:e.buttonActivity}}))(C),I=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"sdb-container",children:Object(a.jsxs)("div",{className:"sdb-body",children:[Object(a.jsx)(y,{}),Object(a.jsx)(A,{}),Object(a.jsxs)("div",{className:"sn",children:["S/N: ",this.props.serialNumber]})]})})})}}]),n}(c.a.Component),k=Object(p.b)((function(e){return{serialNumber:e.serialNumber}}))(I),g=n(7),P=n(25),D=Object(g.c)({status:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T.CHANGE_STATUS?t.payload:e},message:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T.CHANGE_MESSAGE?t.payload:e},serialNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e},passcode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T.CREATE_PASSCODE?t.payload:e},inputPasscode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T.INPUT_PASSCODE?null!=e?null!=t.payload?e+t.payload:null:t.payload:e},buttonActivity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===T.BUTTON_ACTIVITY?t.payload:e}}),_=n(14),L=n.n(_),R=n(15),x=n(24),U=n.n(x),G=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"validateSerialNumber",value:function(e){return U()("https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a?code="+e).then((function(e){return e.json()})).catch((function(e){console.log("There was an error in fetching:",e)}))}}]),e}(),K=L.a.mark(H),V=L.a.mark(w);function H(e){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(R.a)(G.validateSerialNumber,e.payload);case 3:if(t.sent.sn!==e.serialNumber){t.next=7;break}return t.next=7,Object(R.b)(S(b.UNLOCKED));case 7:return t.next=9,Object(R.b)(j(O.READY));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("There was an error while fetching the data:",t.t0);case 14:case"end":return t.stop()}}),K,null,[[0,11]])}function w(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.c)(v.VALIDATE_SN,H);case 2:case"end":return e.stop()}}),V)}var Y=w,B={status:b.UNLOCKED,message:O.READY,serialNumber:"4815162342",passcode:null,inputPasscode:null,buttonActivity:null},M=Object(P.a)(),z=Object(g.e)(D,B,Object(g.a)(M));M.run(Y),r.a.render(Object(a.jsx)(p.a,{store:z,children:Object(a.jsx)(k,{})}),document.querySelector("#root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.5cb8efc0.chunk.js.map