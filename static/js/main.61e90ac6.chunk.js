(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{42:function(e,t,i){},43:function(e,t,i){},58:function(e,t,i){"use strict";i.r(t);var n=i(6),s=i.n(n),o=i(34),a=i.n(o),c=(i(42),i(43),i(14)),r=i(24),l=i(11),h=i(35),u=i(36),d=i(1),b=function(e){var t=e.isOpen,i=e.setOpen;return Object(d.jsx)("button",{id:"menu-opener",onClick:function(){return i(!t)},children:t?Object(d.jsx)(h.a,{style:{width:"40px",height:"40px"}}):Object(d.jsx)(u.a,{style:{width:"40px",height:"40px"}})})},j=function(e){var t=e.button,i=Object(l.e)().pathname;return Object(d.jsx)(r.b,{to:t.route,className:i===t.route?"selected":"",children:t.text})},p=function(e,t){return e/t>=1?"landscape":"portrait"},m=function(e){var t=e.buttons,i=Object(n.useRef)(),s=Object(n.useState)(!1),o=Object(c.a)(s,2),a=o[0],r=o[1],l=Object(n.useState)(p(window.innerWidth,window.innerHeight)),h=Object(c.a)(l,2),u=h[0],m=h[1],f=function(e){i.current&&!i.current.contains(e.target)&&r(!1)};return Object(n.useEffect)((function(){return document.addEventListener("mousedown",f),document.addEventListener("touchstart",f),window.addEventListener("resize",(function(){m(p(window.innerWidth,window.innerHeight))})),function(){document.removeEventListener("mousedown",f),document.removeEventListener("touchstart",f),window.removeEventListener("resize",(function(){m(p(window.innerWidth,window.innerHeight))}))}}),[]),Object(d.jsxs)("div",{id:"nav-bar",ref:i,className:"top-bar ".concat(u," ").concat(a?"open":"closed"),children:["portrait"===u&&Object(d.jsx)(b,{isOpen:a,setOpen:r}),t.map((function(e,t){return Object(d.jsx)(j,{button:e},t)}))]})},f=function(e){var t=e.baseRoute;return Object(d.jsxs)("div",{id:"title-bar",className:"top-bar",children:[Object(d.jsx)("img",{src:t+"/images/favicon/favicon-64x64.png",style:{width:"48px",maxWidth:"100%",height:"auto"},title:"Logo"}),Object(d.jsx)("button",{type:"button",className:"title",onClick:function(){window.location.reload()},children:"Marcus_Mills"})]})},v=function(e){var t=Object(n.useState)(!1),i=Object(c.a)(t,2),s=i[0],o=i[1],a=Object(n.useRef)();return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return o(e.isIntersecting||s)}))}));return e.observe(a.current),function(){return e.unobserve(a.current)}}),[s]),Object(d.jsx)("div",{className:"fade-in-section ".concat(s?"is-visible":""),ref:a,children:e.children})},x=i(12),O=i.n(x),g=i(17),y=i(2),w=i(5),k=i(3),M=i(4),S=i(9),C=function(e){Object(k.a)(i,e);var t=Object(M.a)(i);function i(e,n,s){var o,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return Object(y.a)(this,i),(o=t.call(this)).spawnPos=e.clone(),o.focalPoint=n.clone(),o.aspect=s,o.frustumSize=a,o.position.set(-1,1,1),o.lookAt(o.focalPoint),o.near=-300,o.far=1500,o.update(),o}return Object(w.a)(i,[{key:"update",value:function(){this.left=this.frustumSize*this.aspect/-2,this.right=this.frustumSize*this.aspect/2,this.top=this.frustumSize/2,this.bottom=this.frustumSize/-2,this.updateProjectionMatrix()}},{key:"follow",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER,i=e.position.x-this.position.x,n=e.position.z-this.position.z;if(e.completionPending||e.completedLevel){var s=e.spawnPos.y-this.spawnPos.y,o=e.position.y-this.position.y,a=o-s;this.position.y+=a<0?Math.max(a,-999999):Math.min(a,999999)}this.position.x+=i<0?Math.max(i,-t):Math.min(i,t),this.position.z+=n<0?Math.max(n,-t):Math.min(n,t)}}]),i}(S.m),E=function(){function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;Object(y.a)(this,e),this.moveCallback=function(e){console.log("Move callback never assigned")},t.addEventListener("keydown",this.handleKeyDown.bind(this),!1),t.addEventListener("touchstart",this.handleTouchStart.bind(this),!1),t.addEventListener("touchmove",this.handleTouchMove.bind(this),!1),this.xDown=null,this.yDown=null,n&&(this.solutionLoaded=!1,this.loadSolution(n),t.addEventListener("wheel",this.handleScroll.bind(this),!1)),this.lastMoveWasManual=!1,this.isEnabled=i}return Object(w.a)(e,[{key:"loadSolution",value:function(){var e=Object(g.a)(O.a.mark((function e(t){var i=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.text()})).then((function(e){i.solution=e,i.solutionIdx=0,i.solutionLoaded=!0}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleScroll",value:function(e){this.solutionLoaded&&this.isEnabled&&(-100==e.deltaY?this.moveCallback("resp")&&(this.solutionIdx=0):100==e.deltaY&&(this.lastMoveWasManual?this.moveCallback("resp")&&(this.solutionIdx=0):this.moveCallback(this.solution[this.solutionIdx])&&this.solutionIdx++),this.lastMoveWasManual=!1)}},{key:"handleKeyDown",value:function(e){if(this.isEnabled){var t=e.which;87==t||38==t?this.moveCallback("u"):83==t||40==t?this.moveCallback("d"):65==t||37==t?this.moveCallback("l"):68==t||39==t?this.moveCallback("r"):console.log("Key pressed: "+t),this.lastMoveWasManual=!0}}},{key:"getTouches",value:function(e){return e.touches||e.originalEvent.touches}},{key:"handleTouchStart",value:function(e){var t=this.getTouches(e)[0];this.xDown=t.clientX,this.yDown=t.clientY}},{key:"handleTouchMove",value:function(e){if(this.isEnabled&&this.xDown&&this.yDown){var t=e.touches[0].clientX,i=e.touches[0].clientY,n=this.xDown-t,s=this.yDown-i;if(0!=n&&0!=s){var o=Math.atan2(s,n);0<=o&&o<Math.PI/2?this.moveCallback("l"):Math.PI/2<=o&&o<=Math.PI?this.moveCallback("u"):-Math.PI<=o&&o<-Math.PI/2?this.moveCallback("r"):-Math.PI/2<=o&&o<0?this.moveCallback("d"):console.log("This should not happen - touch input angle: ".concat(o))}this.xDown=null,this.yDown=null}}}]),e}(),T=function(){function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(y.a)(this,e),this.window=t,this.loadedSound=null,this.baseRoute=i,this.context=n,this.listener=new S.b,this.loader=new S.c,this.sound=new S.a(this.listener)}return Object(w.a)(e,[{key:"playSound",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;null==this.context&&(console.log("context loaded"),this.loadContext()),!this.loadedSound==e&&(this.loadSound(e,t),console.log("loaded sound: ".concat(e))),this.sound.isPlaying&&this.sound.stop(),this.sound.play()}},{key:"stopSound",value:function(){this.sound.stop()}},{key:"loadContext",value:function(){var e=window.AudioContext||window.webkitAudioContext;this.context=new e,this.context.resume().then((function(){console.log("Playback resumed successfully")}))}},{key:"loadSound",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loader.load("".concat(this.baseRoute,"/sounds/").concat(e,".ogg"),(function(e){t.sound.setBuffer(e),t.sound.setLoop(!1),t.sound.setVolume(i)})),this.loadedSound=e}}]),e}(),P=function(e){Object(k.a)(i,e);var t=Object(M.a)(i);function i(e,n){var s,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.9,.9,.9];Object(y.a)(this,i);for(var c=new S.d(a[0],a[1],a[2]),r=[],l=0;l<6;l++)r.push(new S.i({map:(new S.p).load("textures/player/".concat(2===l||3===l?"1":"2",".png")),side:S.g}));new S.j(r);return(s=t.call(this,c,r)).name="player",s.position.x=e,s.position.y=o,s.position.z=n,s.size=a,s.spawnPos=s.position.clone(),s.fallVelocity=0,s.isReadyToMove=!0,s.isFalling=!1,s.completedLevel=!1,s.lastDirection="resp",s.lastRotation=new S.q(0,0,0),s.respawnPending=!1,s.completionPending=!1,s.animations=[],s.framesLeftOfAnimation=0,s}return Object(w.a)(i,[{key:"setController",value:function(e){var t=this;this.controller=e,this.controller.moveCallback=function(e){return t.move(e)}}},{key:"move",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=Math.PI/2/i,s=!1;return 1==this.isReadyToMove&&("u"==e?this.animations.push([function(){t.position.x+=1/i,t.rotateOnWorldAxis(new S.q(0,0,1),-n)},i]):"d"==e?this.animations.push([function(){t.position.x-=1/i,t.rotateOnWorldAxis(new S.q(0,0,1),n)},i]):"l"==e?this.animations.push([function(){t.position.z-=1/i,t.rotateOnWorldAxis(new S.q(1,0,0),-n)},i]):"r"==e?this.animations.push([function(){t.position.z+=1/i,t.rotateOnWorldAxis(new S.q(1,0,0),n)},i]):"resp"==e&&this.respawn(),s=!0,this.playSound=!0,this.isReadyToMove=!1,this.lastDirection=e),s}},{key:"animate",value:function(e){for(var t=0;t<this.animations.length;t++)this.animations[t][1]>0&&((this.animations[t].length<3||this.animations[t][2]<=0)&&this.animations[t][0].bind(this)(),this.animations[t][1]--,this.animations[t].length>=3&&this.animations[t][2]--);this.removeCompletedAnimations(),0==this.animations.length&&(this.completionPending?this.complete():(this.getNextAction(),this.checkFloor(e))),this.playSound=!1}},{key:"removeCompletedAnimations",value:function(){for(var e=[],t=0;t<this.animations.length;t++)this.animations[t][1]>0&&e.push(this.animations[t]);this.animations=e}},{key:"getNextAction",value:function(){this.respawnPending?(this.respawnPending=!1,this.respawn()):(this.roundPosition(),this.roundQuaternion(),this.isReadyToMove=!0)}},{key:"checkFloor",value:function(e){var t=this.getGridPosition();e.hasBlockInLocation(t)?e.hasGoalInLocation(t)&&(this.fall(.005,100),this.beginCompletion(),e.completeLevel()):(this.fall(.02),this.respawnPending=!0)}},{key:"fall",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;this.isFalling=!0,this.isReadyToMove=!1,this.animations.push([function(){t.position.y-=t.fallVelocity,t.fallVelocity+=e},i])}},{key:"getGridPosition",value:function(){return[this.position.x,this.position.z]}},{key:"roundPosition",value:function(){this.position.round()}},{key:"roundQuaternion",value:function(){var e,t,i,n;if(void 0!=this.quaternion._x&&void 0!=this.quaternion._y&&void 0!=this.quaternion._z&&void 0!=this.quaternion._w){e=R(this.quaternion._x),t=R(this.quaternion._y),i=R(this.quaternion._z),n=R(this.quaternion._w);var s=new S.n(e,t,i,n);this.setRotationFromQuaternion(s)}}},{key:"respawn",value:function(){this.fallVelocity=0,this.position.copy(this.spawnPos),this.setRotationFromQuaternion(new S.n(0,0,0,1))}},{key:"beginCompletion",value:function(){var e=this;this.completionPending=!0;var t=Math.PI/4/25;this.animations.push([function(){e.rotation.y-=t},25]),this.animations.push([function(){e.scale.x*=1.1,e.scale.y*=1.1,e.scale.z*=1.1},75,25])}},{key:"complete",value:function(){this.position.x=9999999,this.position.y=9999999,this.position.z=9999999,this.completedLevel=!0}}]),i}(S.h),R=function(e){return Math.abs(e)<1e-10?0:Math.abs(e)-.5<1e-10?e<0?-.5:.5:Math.abs(e)-Math.sqrt(2)/2<1e-10?e<0?-Math.sqrt(2)/2:Math.sqrt(2)/2:Math.abs(e)-1<1e-10?e<0?-1:1:void 0},z=P,L=function(e){Object(k.a)(i,e);var t=Object(M.a)(i);function i(e,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.9,.9,.9],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"red";return Object(y.a)(this,i),t.call(this,e,n,s,o,a)}return i}(z),D=(i(8),i(7),i(25)),I=(i(51),function(e){Object(k.a)(i,e);var t=Object(M.a)(i);function i(e,n){var s,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.9,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16777215,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"tile";Object(y.a)(this,i);var l=new S.d(a,.5*a,a),h=new S.k;return h.color=new S.e(c),h.blending=S.l,(s=t.call(this,l,h)).name=r,s.position.x=e,s.position.y=o+.325*a,s.position.z=n,s.color=c,s}return Object(w.a)(i,[{key:"getPosition",value:function(){return[this.position.x,this.position.z]}}]),i}(S.h)),N=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[16777215],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1];Object(y.a)(this,e),this.tiles=[],this.goalTile=void 0,this.scale=t,this.colors=i,this.colorProb=n}return Object(w.a)(e,[{key:"loadTemplate",value:function(){var e=Object(g.a)(O.a.mark((function e(t){var i=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.text()})).then((function(e){i.template=e.split("\n").map((function(e){return e.split("\t")})),i.addTiles()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"setTemplate",value:function(e){this.template=e,this.addTiles()}},{key:"addTiles",value:function(){for(var e=0;e<this.template.length;e++)for(var t=0;t<this.template[e].length;t++)"x"==this.template[e][t].toLowerCase()?this.tiles.push(new I(t,e)):"s"==this.template[e][t].toLowerCase()?(void 0!=this.spawnTile&&console.log("ERROR: Multiple spawn tiles! Please fix level template"),this.spawnTile=new I(t,e,0,.9,13948116,"spawn"),this.tiles.push(this.spawnTile)):"g"==this.template[e][t].toLowerCase()&&(void 0!=this.goalTile&&console.log("ERROR: Multiple goal tiles! Please fix level template"),this.goalTile=new I(t,e,0,.9,16760222,"goal"),this.tiles.push(this.goalTile))}},{key:"addToScene",value:function(e){var t,i=Object(D.a)(this.tiles);try{for(i.s();!(t=i.n()).done;){var n=t.value;e.add(n)}}catch(s){i.e(s)}finally{i.f()}}},{key:"getBlockInLocation",value:function(e){var t=Math.round(e[0]),i=Math.round(e[1]);return t<0||i<0||t>=this.template[0].length||i>=this.template.length?"":this.template[i][t].toLowerCase()}},{key:"hasBlockInLocation",value:function(e){return["x","s","g"].includes(this.getBlockInLocation(e))}},{key:"hasGoalInLocation",value:function(e){return"g"==this.getBlockInLocation(e)}},{key:"getPositions",value:function(){var e,t=[],i=Object(D.a)(this.tiles);try{for(i.s();!(e=i.n()).done;){var n=e.value;t.push(n.position)}}catch(s){i.e(s)}finally{i.f()}return t}},{key:"completeLevel",value:function(){this.goalTile.position.z=1e5}}]),e}();var A=function(e){Object(k.a)(i,e);var t=Object(M.a)(i);function i(e){var n;return Object(y.a)(this,i),(n=t.call(this,e)).state={renderer:null,scene:null,camera:null,audioManager:null,floor:null,controller:null,player:null,initialMountWidth:null,initialMountHeight:null,isInitialized:!1},n}return Object(w.a)(i,[{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Canvas mounted"),this.initThreeCanvas(),window.addEventListener("resize",this.resizeCanvasToMountSize.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Canvas updated"),this.state.isInitialized&&(this.resizeCanvasToMountSize(),this.resumeThreeCanvas(),this.state.controller.isEnabled=this.props.isActive,this.state.player.completedLevel&&console.log("completed - ",this.props.level));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.removeEventListener("resize",this.resizeCanvasToMountSize.bind(this)),console.log("Canvas unmounted");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initThreeCanvas",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.initialMountWidth=this.mount.offsetWidth,this.state.initialMountHeight=this.mount.offsetHeight,t=this.state.initialMountWidth/this.state.initialMountHeight,this.state.scene=new S.o,this.state.camera=new C(new S.q(-1,1,1),this.state.scene.position.clone(),t),this.state.renderer=new S.r({alpha:!0,antialias:!0}),this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(this.state.initialMountWidth,this.state.initialMountHeight,!0),this.mount.appendChild(this.state.renderer.domElement),this.state.renderer.domElement.style.zIndex=0,i=new S.f,this.state.scene.add(i),i.position.set(-20,100,50),this.state.audioManager=new T(window,this.props.baseRoute),this.state.camera.add(this.state.audioManager.listener),this.state.audioManager.loadSound("wooden-percussion-shot"),this.state.floor=new N(.9,[11337592,2697513],[0,1]),e.next=19,this.state.floor.loadTemplate("".concat(this.props.baseRoute,"/levels/").concat(this.props.level,".tsv"));case 19:this.state.floor.addToScene(this.state.scene),this.state.controller=new E(document,this.props.isActive,"".concat(this.props.baseRoute,"/levels/solutions/").concat(this.props.level,".txt")),this.state.player=new L(this.state.floor.spawnTile.position.x,this.state.floor.spawnTile.position.z),this.state.player.setController(this.state.controller),this.state.scene.add(this.state.player),this.state.camera.follow(this.state.player),this.state.isInitialized=!0,this.setState(this.state);case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"resumeThreeCanvas",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,i,n=this,s=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!(s.length>0&&void 0!==s[0])||s[0],i=0,function e(){n.props.isActive&&(n.state.renderer.render(n.state.scene,n.state.camera),n.state.player.playSound&&n.state.audioManager.playSound("wooden-percussion-shot"),n.state.player.animate(n.state.floor),n.state.camera.follow(n.state.player,.1),n.state.player.completionPending&&!n.props.isComplete&&n.props.completeStageCallback(),i%200==0&&t&&console.log(n.state.player.getGridPosition()),i+=1,requestAnimationFrame(e))}();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"resizeCanvasToMountSize",value:function(){var e=this.state.renderer.domElement,t=e.offsetWidth,i=e.offsetHeight,n=this.mount.offsetWidth,s=this.mount.offsetHeight;t===n&&i===s||(this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(n,s,!0),this.state.camera.aspect=n/s,this.state.camera.update(),function(e){var t=e.firstElementChild;t.style.width=e.offsetWidth,t.style.height=e.offsetHeight}(this.mount))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{ref:function(t){return e.mount=t},id:this.props.level,className:"canvas-container",style:{display:this.props.isActive?"block":"none"}})}}]),i}(n.Component),W=function(){return Object(d.jsx)("div",{id:"footer",children:"Copyright 2021"})};var F=function(e){var t=Object(n.useState)(e),i=Object(c.a)(t,2),s=i[0],o=i[1],a=Object(n.useRef)(s);return Object(n.useEffect)((function(){a.current=s}),[s]),[s,o,a]},V=function(e){var t=e.Component,i=e.isActive,s=(e.replayStageCallback,e.baseRoute),o=(Object(n.useRef)(0),F(0)),a=Object(c.a)(o,3),r=a[0],l=(a[1],a[2],Object(n.useState)(!0)),h=Object(c.a)(l,2),u=h[0],b=h[1];return Object(n.useEffect)((function(){setTimeout((function(){return b(!1)}),1e3)}),[]),Object(n.useEffect)((function(){r<-20?console.log("goto prev page"):r>20&&console.log("goto next page")}),[r]),Object(d.jsxs)("div",{className:"page-container ".concat(u?"fade":""," ").concat(!u&&i?"active":""),children:[Object(d.jsx)("h1",{style:{position:"absolute",left:"0",right:"0",color:"white",textAlign:"center",zIndex:"-1",textShadow:r<-20?"1px 1px":""},children:"Replay level"}),Object(d.jsxs)("div",{className:"page ".concat(u?"fade":""," ").concat(!u&&i?"active":""),style:{transform:"translate(0,".concat(Math.abs(r)>5?-Math.sign(r-5)*Math.log(2*Math.abs(r)-5):0,"%)")},children:[Object(d.jsx)(t,{baseRoute:s}),Object(d.jsx)(W,{})]}),Object(d.jsx)("h1",{style:{position:"absolute",left:"0",right:"0",bottom:".5rem",color:"white",textAlign:"center",zIndex:"-1",textShadow:r>20?"1px 1px":""},children:"Next level"})]})},q=function(e){var t=e.pages,i=e.completeStageCallback,s=e.replayStageCallback,o=e.baseRoute,a=Object(l.e)().pathname;return Object(n.useEffect)((function(){t.forEach((function(e){if(a===e.route){var t=document.getElementsByTagName("html")[0];t&&(e.completed?t.style.touchAction="auto":t.style.touchAction="none")}}))})),Object(d.jsx)(d.Fragment,{children:t.map((function(e,t){return Object(d.jsxs)(d.Fragment,{children:[e.completed&&Object(d.jsx)(V,{Component:e.component,isActive:a===e.route,replayStageCallback:function(){return s(e.route)},baseRoute:o},e.route),!e.completed&&a===e.route&&Object(d.jsx)("h1",{id:"directions-text",children:"Beat the level to unlock the page!"}),Object(d.jsx)(A,{level:e.route.replace("/",""),isActive:a===e.route,completeStageCallback:function(){return i(e.route)},isComplete:e.completed,baseRoute:o})]})}))})},B=i(20),H=(i(57),function(){return Object(d.jsxs)(B.VerticalTimeline,{children:[Object(d.jsxs)(B.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"rgb(33, 150, 243)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},date:"2011 - present",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},children:[Object(d.jsx)("h3",{className:"vertical-timeline-element-title",children:"Creative Director"}),Object(d.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:"Miami, FL"}),Object(d.jsx)("p",{children:"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"})]}),Object(d.jsxs)(B.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2010 - 2011",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},children:[Object(d.jsx)("h3",{className:"vertical-timeline-element-title",children:"Art Director"}),Object(d.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:"San Francisco, CA"}),Object(d.jsx)("p",{children:"Creative Direction, User Experience, Visual Design, SEO, Online Marketing"})]}),Object(d.jsxs)(B.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2008 - 2010",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},children:[Object(d.jsx)("h3",{className:"vertical-timeline-element-title",children:"Web Designer"}),Object(d.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:"Los Angeles, CA"}),Object(d.jsx)("p",{children:"User Experience, Visual Design"})]}),Object(d.jsxs)(B.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"2006 - 2008",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},children:[Object(d.jsx)("h3",{className:"vertical-timeline-element-title",children:"Web Designer"}),Object(d.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:"San Francisco, CA"}),Object(d.jsx)("p",{children:"User Experience, Visual Design"})]}),Object(d.jsxs)(B.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"April 2013",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},children:[Object(d.jsx)("h3",{className:"vertical-timeline-element-title",children:"Content Marketing for Web, Mobile and Social Media"}),Object(d.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:"Online Course"}),Object(d.jsx)("p",{children:"Strategy, Social Media"})]}),Object(d.jsxs)(B.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"November 2012",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},children:[Object(d.jsx)("h3",{className:"vertical-timeline-element-title",children:"Agile Development Scrum Master"}),Object(d.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:"Certification"}),Object(d.jsx)("p",{children:"Creative Direction, User Experience, Visual Design"})]}),Object(d.jsxs)(B.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"2002 - 2006",iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},children:[Object(d.jsx)("h3",{className:"vertical-timeline-element-title",children:"Bachelor of Science in Interactive Digital Media Visual Imaging"}),Object(d.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:"Bachelor Degree"}),Object(d.jsx)("p",{children:"Creative Direction, Visual Design"})]}),Object(d.jsx)(B.VerticalTimelineElement,{iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"}})]})}),_=function(e){var t=e.baseRoute;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"About Me"}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("img",{src:t+"/images/headshot.jpg",style:{objectFit:"cover",maxWidth:"400px",maxHeight:"400px",width:"50%"},title:"Me!"}),Object(d.jsxs)("div",{style:{height:"400px",padding:"2rem",border:"3px solid ".concat("#202020"),overflow:"hidden"},children:[Object(d.jsx)("h2",{style:{letterSpacing:"2px"},children:"Overview"}),Object(d.jsx)("h3",{children:"Occupation: Software Engineer"}),Object(d.jsx)("h3",{children:"Company: Motorola Solutions"}),Object(d.jsx)("h3",{children:"Location: Denver, CO"}),Object(d.jsx)("h3",{children:"Total Experience: 5+ years"}),Object(d.jsx)("h3",{children:"Industry Experience: 1+ year"})]})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(v,{children:[Object(d.jsx)("h2",{children:"Objective"}),Object(d.jsx)("p",{children:"To make society more productive through the use of software solutions"})]}),Object(d.jsxs)(v,{children:[Object(d.jsx)("h2",{children:"CS Interests"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Backend Development"}),Object(d.jsx)("li",{children:"Frontend Development"}),Object(d.jsx)("li",{children:"Machine Learning"})]})]}),Object(d.jsxs)(v,{children:[Object(d.jsx)("h2",{children:"Extracurricular Interests"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Investing / Economics"}),Object(d.jsx)("li",{children:"Disc Golf"}),Object(d.jsx)("li",{children:"Climbing"}),Object(d.jsx)("li",{children:"Hiking"}),Object(d.jsx)("li",{children:"Running"}),Object(d.jsx)("li",{children:"Weightlifting"})]})]}),Object(d.jsxs)(v,{children:[Object(d.jsx)("h2",{children:"Languages / Frameworks"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Python - Proficient"}),Object(d.jsx)("li",{children:"Javascript - Experienced"}),Object(d.jsx)("li",{children:"HTML / CSS - Experienced"}),Object(d.jsx)("li",{children:"React.JS - Experienced"}),Object(d.jsx)("li",{children:"Git - Experienced"}),Object(d.jsx)("li",{children:"SQL - Experienced"}),Object(d.jsx)("li",{children:"Node.JS - Some knowledge"})]})]}),Object(d.jsx)("h2",{children:"Timeline"}),Object(d.jsx)(H,{})]})},G=i(10),U=function(e){var t=e.baseRoute;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Projects"}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"Political Bias Detector"}),Object(d.jsx)("img",{src:t+"/images/projects/poli-bias.jpg",style:Object(G.a)({height:"400px",width:"640px",maxWidth:"100%"},"height","auto"),title:"Political Bias Detector"}),Object(d.jsx)("p",{children:"This project uses a state-of-the-art GPT-2 model, hosted on a dockerized Python server on a Google cloud cluster to make predictions about political bias in text."}),Object(d.jsx)("p",{children:"This model underwent reinforcement training on 86,460 tweets from 200 different US senators, using their party affiliation as the label."}),Object(d.jsx)("p",{children:"In order to query the model, we built a chrome extension that allows you to highlight text and send an HTTP request to the server. The results come back within a few seconds."}),Object(d.jsxs)("p",{children:["You can find the chrome extension listed on the Chrome Web Store\xa0",Object(d.jsx)("a",{href:"https://chrome.google.com/webstore/detail/bias-detector/aifdepmjdlepmpcgdkmbnhjfdmpjboma",style:{color:"purple",fontSize:"1rem",textDecoration:"underline"},children:"here"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},Y=function(e){e.baseRoute;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Contact"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{children:"Name\xa0\xa0\xa0\xa0\xa0"}),Object(d.jsx)("input",{id:"name",type:"text",placeholder:"Your name.."}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Email\xa0\xa0\xa0\xa0\xa0"}),Object(d.jsx)("input",{id:"email",type:"text",placeholder:"Your email.."}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{for:"subject",children:"Message"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{id:"message",placeholder:"Write something..",style:{width:"100%",height:"100px"}}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbx0ftvrzfj7KimqSseC2Nacuez7WMrF6GVNa0L-bSiuB6nXJcgxeRbHaKT0_IRICwamBQ/exec"),console.log("hello")},style:{color:"black"},children:"Submit"})]}),Object(d.jsx)("p",{children:"Contact form under construction! In the mean time, please send any inquiries to:"}),Object(d.jsx)("p",{children:"marcusm009@gmail.com"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},J="/portfolio",K="0.5.3";console.log("VER: ",K);var Q=function(){var e=Object(n.useState)({pages:[{text:"About",route:"/about",completed:!1,component:_},{text:"Projects",route:"/projects",completed:!1,component:U},{text:"Contact",route:"/contact",completed:!1,component:Y}]}),t=Object(c.a)(e,2),i=t[0],s=t[1];return Object(d.jsxs)(r.a,{basename:J,children:[Object(d.jsx)(l.a,{exact:!0,from:"/",to:"about"}),Object(d.jsx)(f,{baseRoute:J}),Object(d.jsx)(m,{buttons:i.pages,baseRoute:J}),Object(d.jsx)(q,{pages:i.pages,completeStageCallback:function(e){console.log(e," completed!"),i.pages.forEach((function(t,n){if(t.route===e){var o={};Object.assign(o,i),o.pages[n].completed=!0,s(o)}}))},replayStageCallback:function(e){console.log(e," - replaying!"),i.pages.forEach((function(t,n){if(t.route===e){var o={};Object.assign(o,i),o.pages[n].completed=!1,s(o)}}))},baseRoute:J}),Object(d.jsxs)("div",{style:{color:"white",position:"fixed",right:"2px",bottom:"2px",zIndex:"999"},children:["Ver: ",K]})]})},X=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,59)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(Q,{})}),document.getElementById("root")),X()}},[[58,1,2]]]);
//# sourceMappingURL=main.61e90ac6.chunk.js.map