(this.webpackJsonptictac3d=this.webpackJsonptictac3d||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(4),i=a.n(r),l=(a(10),a(1)),o=a(2);a(11),a(12);function c(e){var t="squarre";return e.lastPos.length!==e.size||e.is3d?t="squarre":e.lastPos.map((function(a){return e.index===a&&(t="victory"),t})),e.isNotDraw||(t="squarre squarre-draw"),n.a.createElement("button",{onClick:function(t){return e.handleChange(e.index)},index:e.index,className:t},e.value)}a(13);function u(e){var t=Object(s.useState)("select-button-s"),a=Object(o.a)(t,2),r=a[0],i=a[1],c=Object(s.useState)("select-button"),u=Object(o.a)(c,2),d=u[0],b=u[1],m=Object(s.useState)("select-button"),p=Object(o.a)(m,2),h=p[0],f=p[1],N=Object(s.useState)("select-button"),v=Object(o.a)(N,2),E=v[0],y=v[1];return n.a.createElement("div",{className:"select"},n.a.createElement("button",{className:r,onClick:function(){y("select-button"),i("select-button-s"),b("select-button"),f("select-button"),e.setupdateSize(3),e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{is3d:!1})}))}},"3 in a row"),n.a.createElement("button",{className:E,onClick:function(){y("select-button-s"),f("select-button"),b("select-button"),i("select-button"),e.setupdateSize(3),e.setState((function(e){return Object(l.a)(Object(l.a)({},e),{},{is3d:!0})}))}},"3 in a row 3D"),n.a.createElement("button",{className:d,onClick:function(){y("select-button"),b("select-button-s"),i("select-button"),f("select-button"),e.setupdateSize(4)}},"4 in a row"),n.a.createElement("button",{className:h,onClick:function(){y("select-button"),f("select-button-s"),b("select-button"),i("select-button"),e.setupdateSize(5)}},"5 in a row"))}a(14);function d(e){var t=n.a.createElement("p",null),a=n.a.createElement("p",null),s=n.a.createElement("p",null),r=n.a.createElement("p",null,"Hello");n.a.useEffect((function(){console.log("Board Mounted")})),e.state.isFinished1&&e.state.isNotDraw1?t=n.a.createElement("p",{className:"winner title"},"Winner: ",e.state.isX1?"O":"X"):e.state.isNotDraw1?!e.state.isFinished1&&e.state.isNotDraw1&&(t=n.a.createElement("p",{className:"title"},"Current Player: ",n.a.createElement("span",{className:e.state.isX1?"xplay":"oplay"},e.state.isX1?"X":"O"))):t=n.a.createElement("p",{className:"draw title"},"Draw"),e.state.isFinished2&&e.state.isNotDraw2?a=n.a.createElement("p",{className:"winner title"},"Winner: ",e.state.isX2?"O":"X"):e.state.isNotDraw2?!e.state.isFinished2&&e.state.isNotDraw2&&(a=n.a.createElement("p",{className:"title"},"Current Player: ",n.a.createElement("span",{className:e.state.isX2?"xplay":"oplay"},e.state.isX2?"X":"O"))):a=n.a.createElement("p",{className:"draw title"},"Draw"),e.state.isFinished3&&e.state.isNotDraw3?s=n.a.createElement("p",{className:"winner title"},"Winner: ",e.state.isX3?"O":"X"):e.state.isNotDraw3?!e.state.isFinished3&&e.state.isNotDraw3&&(s=n.a.createElement("p",{className:"title"},"Current Player: ",n.a.createElement("span",{className:e.state.isX3?"xplay":"oplay"},e.state.isX3?"X":"O"))):s=n.a.createElement("p",{className:"draw title"},"Draw");var i=3===e.updateSize&&e.state.is3d,l=3===e.updateSize&&!e.state.is3d;return n.a.createElement("div",{className:"board"},n.a.createElement("h1",{className:"board-title"},"Tic Tac Toe"),n.a.createElement("p",{className:"board-message"},"Super sizer"),n.a.createElement("div",null,n.a.createElement(u,{value:e.size,updateSize:e.updateSize,setupdateSize:e.setupdateSize,istreeD:e.state.is3d,setState:e.setState})),l&&n.a.createElement("div",null,n.a.createElement("div",{className:"board-element"},t),n.a.createElement("div",{className:"board-body-3"},e.state.boardCopy1.map((function(t,a){return n.a.createElement(c,{key:a+"bc1",index:a,handleChange:e.handleChange,value:t,lastPos:e.state.lastPosition1,size:e.updateSize,isNotDraw:e.state.isNotDraw1,is3d:e.state.is3d})})))),i&&n.a.createElement("div",null,n.a.createElement("div",{className:"board-element"},r),n.a.createElement("div",{className:"board-body-6"},e.state.boardCopy4.map((function(t,a){return n.a.createElement("div",{key:a+"bc4board",className:"board-body-6-board"},t.map((function(t,s){return n.a.createElement(c,{key:a+"bc4"+s,index:s,handleChange:e.handleChange,value:t,lastPos:e.state.lastPosition1,size:e.updateSize,isNotDraw:e.state.isNotDraw1,is3d:e.state.is3d})})))})))),4===e.updateSize&&n.a.createElement("div",null,n.a.createElement("div",{className:"board-element"},a),n.a.createElement("div",{className:"board-body-4"},e.state.boardCopy2.map((function(t,a){return n.a.createElement(c,{key:a+"bc2",index:a,handleChange:e.handleChange,value:t,lastPos:e.state.lastPosition2,size:e.updateSize,isNotDraw:e.state.isNotDraw2,is3d:e.state.is3d})})))),5===e.updateSize&&n.a.createElement("div",null,n.a.createElement("div",{className:"board-element"},s),n.a.createElement("div",{className:"board-body-5"},e.state.boardCopy3.map((function(t,a){return n.a.createElement(c,{key:a+"bc3",index:a,handleChange:e.handleChange,value:t,lastPos:e.state.lastPosition3,size:e.updateSize,isNotDraw:e.state.isNotDraw3,is3d:e.state.is3d})})))))}a(15);function b(e){var t=function(t){switch(e.updateSize){case 3:for(var a=0;a<e.history1.length-1;a++){var s=a+"3x3"+e.updateSize;document.getElementById(s).className=a===t?"travel-li-s":"travel-li"}break;case 4:for(var n=0;n<e.history2.length-1;n++){var r=n+"4x4"+e.updateSize;document.getElementById(r).className=n===t?"travel-li-s":"travel-li"}break;case 5:for(var i=0;i<e.history3.length-1;i++){var l=i+"5x5"+e.updateSize;document.getElementById(l).className=i===t?"travel-li-s":"travel-li"}}e.jumpTo(t)};return n.a.createElement("div",{className:"travel"},n.a.createElement("p",{className:"travel-title"},"Time Machine"),3===e.updateSize&&n.a.createElement("ul",null,e.history1.map((function(a,s){return e.history1.length-1===s?null:n.a.createElement("li",{key:s+"3x3"+e.updateSize,id:s+"3x3"+e.updateSize,onClick:function(){return t(s)},className:"travel-li"},0===s?"Start":"Go To Step ".concat(s))}))),4===e.updateSize&&n.a.createElement("ul",null,e.history2.map((function(a,s){return e.history2.length-1===s?null:n.a.createElement("li",{key:s+"4x4"+e.updateSize,id:s+"4x4"+e.updateSize,onClick:function(){return t(s)},className:"travel-li"},0===s?"Start":"Go To Step ".concat(s))}))),5===e.updateSize&&n.a.createElement("ul",null,e.history3.map((function(a,s){return e.history3.length-1===s?null:n.a.createElement("li",{key:s+"5x5"+e.updateSize,id:s+"5x5"+e.updateSize,onClick:function(){return t(s)},className:"travel-li"},0===s?"Start":"Go To Step ".concat(s))}))))}a(16);function m(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"container-board"},n.a.createElement(d,{state:e.state,setState:e.setState,handleChange:e.handleChange,size:e.size,updateSize:e.updateSize,setupdateSize:e.setupdateSize})),n.a.createElement("div",{className:"container-travel"},n.a.createElement(b,{history1:e.state.boards1,history2:e.state.boards2,history3:e.state.boards3,jumpTo:e.jumpTo,updateSize:e.updateSize,setupdateSize:e.setupdateSize})))}function p(e,t){for(var a=0,s=t,n=[],r=!1,i=[],l=[],o=[],c=0;c<t;c++){n=[];for(var u=a;u<s&&(null===e[u]?r=!0:(n.push(e[u]),r=!(n.length>1)||n[0]===e[u]),r);u++);i.push(r),a+=t,s+=t}for(var d=0,b=0;b<i.length;b++)i[b]||d++;a=0,s=t*t-2,r=!1;for(var m=0;m<t;m++){n=[];for(var p=a;p<s&&(null===e[p]?r=!0:(n.push(e[p]),r=!(n.length>1)||n[0]===e[p]),r);p+=t);l.push(r),a+=1,s+=1}for(var h=0,f=0;f<l.length;f++)l[f]||h++;a=0,s=t*t;var N=t+1;r=!1;for(var v=0;v<2;v++){n=[];for(var E=a;E<s&&(null===e[E]?r=!0:(n.push(e[E]),r=!(n.length>1)||n[0]===e[E]),r);E+=N);o.push(r),a=t-1,s=t*t-2,N=t-1}for(var y=0,S=0;S<o.length;S++)o[S]||y++;return d!==t||h!==t||2!==y}function h(e,t){for(var a=0,s=0,n=0,r=t,i=[],l=0;l<t;l++){i=[];for(var o=n;o<r;o++)"X"===e[o]?a+=1:"O"===e[o]&&(s+=1),i.push(o);if(a===t||s===t)return i;a=0,s=0,n+=t,r+=t}a=0,s=0,n=0,r=t*t-2;for(var c=0;c<t;c++){i=[];for(var u=n;u<r;u+=t)"X"===e[u]?a+=1:"O"===e[u]&&(s+=1),i.push(u);if(a===t||s===t)return i;a=0,s=0,n+=1,r+=1}a=0,s=0,n=0,r=t*t;for(var d=t+1,b=0;b<2;b++){i=[];for(var m=n;m<r;m+=d)"X"===e[m]?a+=1:"O"===e[m]&&(s+=1),i.push(m);if(a===t||s===t)return i;a=0,s=0,n=t-1,r=t*t-2,d=t-1}}var f=function(){var e=Object(s.useState)({boards1:[{board:Array(9).fill(null)}],boards2:[{board:Array(16).fill(null)}],boards3:[{board:Array(25).fill(null)}],boards4:[{board:[Array(9).fill(null),Array(9).fill(null),Array(9).fill(null)]}],isX1:!0,isX2:!0,isX3:!0,isX4:!0,isFinished1:!1,isFinished2:!1,isFinished3:!1,isFinished4:!1,stepNumber1:0,stepNumber2:0,stepNumber3:0,stepNumber4:0,boardCopy1:Array(9).fill(null),boardCopy2:Array(16).fill(null),boardCopy3:Array(25).fill(null),boardCopy4:[Array(9).fill(null),Array(9).fill(null),Array(9).fill(null)],lastPosition1:[],lastPosition2:[],lastPosition3:[],lastPosition4:[],isNotDraw1:!0,isNotDraw2:!0,isNotDraw3:!0,isNotDraw4:!0,is3d:!1}),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(s.useState)(3),c=Object(o.a)(i,2),u=c[0],d=c[1];return n.a.useEffect((function(){console.log("IN USEEFFECT");var e=[],t=[],s=[],n=!0;switch(u){case 3:a.is3d?console.log("hello 3D checks L103"):a.boards1.length-1===a.stepNumber1&&(t=(e=a.boards1.slice())[e.length-1],n=p(t.board,u),console.log("on est dans cas 3 et le test est: "+n),(s=h(t.board,u))&&r((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFinished1:!0,lastPosition1:s})})),n||r((function(e){return Object(l.a)(Object(l.a)({},e),{},{isNotDraw1:n,isFinished1:!0})})));break;case 4:a.boards2.length-1===a.stepNumber2&&(t=(e=a.boards2.slice())[e.length-1],n=p(t.board,u),(s=h(t.board,u))&&r((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFinished2:!0,lastPosition2:s})})),n||r((function(e){return Object(l.a)(Object(l.a)({},e),{},{isNotDraw2:n,isFinished2:!0})})));break;case 5:a.boards3.length-1===a.stepNumber3&&(t=(e=a.boards3.slice())[e.length-1],n=p(t.board,u),(s=h(t.board,u))&&r((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFinished3:!0,lastPosition3:s})})),n||r((function(e){return Object(l.a)(Object(l.a)({},e),{},{isNotDraw3:n,isFinished3:!0})})))}}),[a.boards1,a.boards2,a.boards3,u,3,r,a.stepNumber1,a.stepNumber2,a.stepNumber3]),n.a.createElement("div",{className:"app"},n.a.createElement(m,{state:a,setState:r,handleChange:function(e){var t=[],s=[],n=[],i="";switch(u){case 3:if(a.is3d)console.log("hello 3D changes L280");else{if(console.log("cas 1"),s=(t=a.boards1.slice(0,a.stepNumber1+1))[t.length-1],n=s.board.slice(),a.isFinished1||n[e])return;i=a.isX1?"X":"O",n[e]=i,r((function(e){return Object(l.a)(Object(l.a)({},e),{},{boards1:t.concat([{board:n}]),isX1:!e.isX1,stepNumber1:t.length,boardCopy1:n.slice()})}))}break;case 4:if(console.log("cas 2"),s=(t=a.boards2.slice(0,a.stepNumber2+1))[t.length-1],n=s.board.slice(),a.isFinished2||n[e])return;i=a.isX2?"X":"O",n[e]=i,r((function(e){return Object(l.a)(Object(l.a)({},e),{},{boards2:t.concat([{board:n}]),isX2:!e.isX2,stepNumber2:t.length,boardCopy2:n.slice()})}));break;case 5:if(console.log("cas 3"),s=(t=a.boards3.slice(0,a.stepNumber3+1))[t.length-1],n=s.board.slice(),a.isFinished3||n[e])return;i=a.isX3?"X":"O",n[e]=i,r((function(e){return Object(l.a)(Object(l.a)({},e),{},{boards3:t.concat([{board:n}]),isX3:!e.isX3,stepNumber3:t.length,boardCopy3:n.slice()})}))}},jumpTo:function(e){var t=[],s=[];switch(u){case 3:a.is3d?console.log("hello 3D jumps L200"):(t=a.boards1.slice()[e],s=t.board.slice(),r((function(t){return Object(l.a)(Object(l.a)({},t),{},{stepNumber1:e,isX1:e%2===0,boardCopy1:s.slice(),lastPosition1:[],isNotDraw1:!0,isFinished1:!1})})));break;case 4:t=a.boards2.slice()[e],s=t.board.slice(),r((function(t){return Object(l.a)(Object(l.a)({},t),{},{stepNumber2:e,isX2:e%2===0,boardCopy2:s.slice(),lastPosition2:[],isNotDraw2:!0,isFinished2:!1})}));break;case 5:t=a.boards3.slice()[e],s=t.board.slice(),r((function(t){return Object(l.a)(Object(l.a)({},t),{},{stepNumber3:e,isX3:e%2===0,boardCopy3:s.slice(),lastPosition3:[],isNotDraw3:!0,isFinished3:!1})}))}},size:3,updateSize:u,setupdateSize:d}))};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.1d22c81b.chunk.js.map