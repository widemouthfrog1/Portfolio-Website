(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{20:function(e,t,n){e.exports=n(37)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),i=n.n(l),c=(n(25),n(26),n(6)),o=n(7),u=n(9),s=n(8),m=(n(27),n(12)),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-list"},r.a.createElement(m.b,{className:"link",to:"/Portfolio-Website"},r.a.createElement("li",null,"About")),r.a.createElement(m.b,{className:"link",to:"/Portfolio-Website/tictactoe"},r.a.createElement("li",null,"Tic-Tac-Toe"))))}}]),n}(r.a.Component);n(33);var h=function(e){return r.a.createElement("button",{className:"tile",onClick:function(){return e.onClick()}},e.value)},v=(n(34),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderTile",value:function(e,t){var n=this;return r.a.createElement(h,{value:this.props.tiles[e][t],onClick:function(){return n.props.onClick(e,t)}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"board-rows"},r.a.createElement("div",{className:"board-row"},this.renderTile(0,2),this.renderTile(1,2),this.renderTile(2,2)),r.a.createElement("div",{className:"board-row"},this.renderTile(0,1),this.renderTile(1,1),this.renderTile(2,1)),r.a.createElement("div",{className:"board-row"},this.renderTile(0,0),this.renderTile(1,0),this.renderTile(2,0)))}}]),n}(r.a.Component));n(35);function d(e){for(var t=0;t<e.length;t++){if(b(t,e))return e[t][0];if(p(t,e))return e[0][t]}for(var n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++){if(E(n,a,!0,3,e))return e[n][a];if(E(n,a,!1,3,e))return e[n][a]}return null}function b(e,t){var n;if(null===(n=t[e][0]))return!1;for(var a=1;a<t[e].length;a++)if(t[e][a]!==n)return!1;return!0}function p(e,t){var n=t[0][e];if(null===n)return!1;for(var a=1;a<t.length;a++)if(t[a][e]!==n)return!1;return!0}function E(e,t,n,a,r){var l=r[e][t];if(null===l)return!1;for(var i=0;i<a;i++)if(e+i===r.length||e+i<0||t+(n?i:-i)===r[e].length||t+(n?i:-i)<0||r[e+i][t+(n?i:-i)]!==l)return!1;return!0}var N=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={history:[{tiles:Array(3).fill(0).map((function(e){return new Array(3).fill(null)}))}],stepNumber:0,xTurn:!0},a}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],l=d(a.tiles),i=n.map((function(e,n){var a=n?"Go to move #"+n:"Go to start";return t.state.stepNumber!==n?r.a.createElement("li",{key:n},r.a.createElement("button",{onClick:function(){return t.jumpTo(n)}},a)):null}));return e=l?"Winner: "+l:"Next player: "+(this.state.xTurn?"X":"O"),r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"title"},"Tic-Tac-Toe"),r.a.createElement("div",{className:"game-content"},r.a.createElement("div",{className:"game-board"},r.a.createElement(v,{tiles:a.tiles,onClick:function(e,n){return t.handleClick(e,n)}})),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null,e),r.a.createElement("ol",null,i))))}},{key:"handleClick",value:function(e,t){for(var n=this.state.history.slice(0,this.state.stepNumber+1),a=n[n.length-1],r=[],l=0;l<a.tiles.length;l++)r.push(a.tiles[l].slice());d(r)||r[e][t]||(r[e][t]=this.state.xTurn?"X":"O",this.setState({history:n.concat([{tiles:r}]),stepNumber:n.length,xTurn:!this.state.xTurn}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xTurn:e%2===0})}}]),n}(r.a.Component),T=function(){return r.a.createElement(N,null)},k=n(1),g=(n(36),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"Some stuff about me"))}}]),n}(r.a.Component));var y=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(f,null)),r.a.createElement("div",{className:"switch"},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/Portfolio-Website",exact:!0,component:g}),r.a.createElement(k.a,{path:"/Portfolio-Website/tictactoe",component:T}))),r.a.createElement("div",{className:"background"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.1cc758d9.chunk.js.map