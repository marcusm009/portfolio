(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{39:function(t,e,i){},48:function(t,e,i){"use strict";i.r(e);var n=i(6),o=i.n(n),s=i(31),a=i.n(s),r=(i(39),i(14)),c=i(23),l=i(11),u=i(32),h=i(33),d=i(1),p=function(t){var e=t.isOpen,i=t.setOpen;return Object(d.jsx)("button",{id:"menu-opener",onClick:function(){return i(!e)},children:e?Object(d.jsx)(u.a,{style:{width:"40px",height:"40px"}}):Object(d.jsx)(h.a,{style:{width:"40px",height:"40px"}})})},m=function(t){var e=t.button,i=Object(l.e)().pathname;return Object(d.jsx)(c.b,{to:e.route,className:i===e.route?"selected":"",children:e.text})},b=function(t,e){return t/e>=1?"landscape":"portrait"},j=function(t){var e=t.buttons,i=Object(n.useRef)(),o=Object(n.useState)(!1),s=Object(r.a)(o,2),a=s[0],c=s[1],l=Object(n.useState)(b(window.innerWidth,window.innerHeight)),u=Object(r.a)(l,2),h=u[0],j=u[1],v=function(t){i.current&&!i.current.contains(t.target)&&c(!1)};return Object(n.useEffect)((function(){return document.addEventListener("mousedown",v),document.addEventListener("touchstart",v),window.addEventListener("resize",(function(){j(b(window.innerWidth,window.innerHeight))})),function(){document.removeEventListener("mousedown",v),document.removeEventListener("touchstart",v),window.removeEventListener("resize",(function(){j(b(window.innerWidth,window.innerHeight))}))}}),[]),Object(d.jsxs)("div",{id:"nav-bar",ref:i,className:"top-bar ".concat(h," ").concat(a?"open":"closed"),children:["portrait"===h&&Object(d.jsx)(p,{isOpen:a,setOpen:c}),e.map((function(t,e){return Object(d.jsx)(m,{button:t},e)}))]})},v=function(t){var e=t.baseRoute;return Object(d.jsxs)("div",{id:"title-bar",className:"top-bar",children:[Object(d.jsx)("img",{src:e+"/images/favicon/favicon-64x64.png",style:{width:"48px",maxWidth:"100%",height:"auto"},title:"Logo"}),Object(d.jsx)("button",{type:"button",className:"title",onClick:function(){window.location.reload()},children:"Marcus_Mills"})]})},f=function(t){var e=Object(n.useState)(!1),i=Object(r.a)(e,2),o=i[0],s=i[1],a=Object(n.useRef)();return Object(n.useEffect)((function(){var t=new IntersectionObserver((function(t){t.forEach((function(t){return s(t.isIntersecting||o)}))}));return t.observe(a.current),function(){return t.unobserve(a.current)}}),[o]),Object(d.jsx)("div",{className:"fade-in-section ".concat(o?"is-visible":""),ref:a,children:t.children})},x=i(12),O=i.n(x),g=i(17),w=i(2),y=i(5),k=i(3),M=i(4),P=i(9),C=function(t){Object(k.a)(i,t);var e=Object(M.a)(i);function i(t,n,o){var s,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return Object(w.a)(this,i),(s=e.call(this)).spawnPos=t.clone(),s.focalPoint=n.clone(),s.aspect=o,s.frustumSize=a,s.position.set(-1,1,1),s.lookAt(s.focalPoint),s.near=-300,s.far=1500,s.update(),s}return Object(y.a)(i,[{key:"update",value:function(){this.left=this.frustumSize*this.aspect/-2,this.right=this.frustumSize*this.aspect/2,this.top=this.frustumSize/2,this.bottom=this.frustumSize/-2,this.updateProjectionMatrix()}},{key:"follow",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER,i=t.position.x-this.position.x,n=t.position.z-this.position.z;if(t.completionPending||t.completedLevel){var o=t.spawnPos.y-this.spawnPos.y,s=t.position.y-this.position.y,a=s-o;this.position.y+=a<0?Math.max(a,-999999):Math.min(a,999999)}this.position.x+=i<0?Math.max(i,-e):Math.min(i,e),this.position.z+=n<0?Math.max(n,-e):Math.min(n,e)}}]),i}(P.m),T=function(){function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;Object(w.a)(this,t),this.moveCallback=function(t){console.log("Move callback never assigned")},e.addEventListener("keydown",this.handleKeyDown.bind(this),!1),e.addEventListener("touchstart",this.handleTouchStart.bind(this),!1),e.addEventListener("touchmove",this.handleTouchMove.bind(this),!1),this.xDown=null,this.yDown=null,n&&(this.solutionLoaded=!1,this.loadSolution(n),e.addEventListener("wheel",this.handleScroll.bind(this),!1)),this.lastMoveWasManual=!1,this.isEnabled=i}return Object(y.a)(t,[{key:"loadSolution",value:function(){var t=Object(g.a)(O.a.mark((function t(e){var i=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(t){return t.text()})).then((function(t){i.solution=t,i.solutionIdx=0,i.solutionLoaded=!0}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleScroll",value:function(t){this.solutionLoaded&&this.isEnabled&&(-100==t.deltaY?this.moveCallback("resp")&&(this.solutionIdx=0):100==t.deltaY&&(this.lastMoveWasManual?this.moveCallback("resp")&&(this.solutionIdx=0):this.moveCallback(this.solution[this.solutionIdx])&&this.solutionIdx++),this.lastMoveWasManual=!1)}},{key:"handleKeyDown",value:function(t){if(this.isEnabled){var e=t.which;87==e||38==e?this.moveCallback("u"):83==e||40==e?this.moveCallback("d"):65==e||37==e?this.moveCallback("l"):68==e||39==e?this.moveCallback("r"):console.log("Key pressed: "+e),this.lastMoveWasManual=!0}}},{key:"getTouches",value:function(t){return t.touches||t.originalEvent.touches}},{key:"handleTouchStart",value:function(t){var e=this.getTouches(t)[0];this.xDown=e.clientX,this.yDown=e.clientY}},{key:"handleTouchMove",value:function(t){if(this.isEnabled&&this.xDown&&this.yDown){var e=t.touches[0].clientX,i=t.touches[0].clientY,n=this.xDown-e,o=this.yDown-i;if(0!=n&&0!=o){var s=Math.atan2(o,n);0<=s&&s<Math.PI/2?this.moveCallback("l"):Math.PI/2<=s&&s<=Math.PI?this.moveCallback("u"):-Math.PI<=s&&s<-Math.PI/2?this.moveCallback("r"):-Math.PI/2<=s&&s<0?this.moveCallback("d"):console.log("This should not happen - touch input angle: ".concat(s))}this.xDown=null,this.yDown=null}}}]),t}(),E=function(){function t(e,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(w.a)(this,t),this.window=e,this.loadedSound=null,this.baseRoute=i,this.context=n,this.listener=new P.b,this.loader=new P.c,this.sound=new P.a(this.listener)}return Object(y.a)(t,[{key:"playSound",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;null==this.context&&(console.log("context loaded"),this.loadContext()),!this.loadedSound==t&&(this.loadSound(t,e),console.log("loaded sound: ".concat(t))),this.sound.isPlaying&&this.sound.stop(),this.sound.play()}},{key:"stopSound",value:function(){this.sound.stop()}},{key:"loadContext",value:function(){var t=window.AudioContext||window.webkitAudioContext;this.context=new t,this.context.resume().then((function(){console.log("Playback resumed successfully")}))}},{key:"loadSound",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loader.load("".concat(this.baseRoute,"/sounds/").concat(t,".ogg"),(function(t){e.sound.setBuffer(t),e.sound.setLoop(!1),e.sound.setVolume(i)})),this.loadedSound=t}}]),t}(),S=function(t){Object(k.a)(i,t);var e=Object(M.a)(i);function i(t,n){var o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.9,.9,.9];Object(w.a)(this,i);for(var r=new P.d(a[0],a[1],a[2]),c=[],l=0;l<6;l++)c.push(new P.i({map:(new P.p).load("textures/player/".concat(2===l||3===l?"1":"2",".png")),side:P.g}));new P.j(c);return(o=e.call(this,r,c)).name="player",o.position.x=t,o.position.y=s,o.position.z=n,o.size=a,o.spawnPos=o.position.clone(),o.fallVelocity=0,o.isReadyToMove=!0,o.isFalling=!1,o.completedLevel=!1,o.lastDirection="resp",o.lastRotation=new P.q(0,0,0),o.respawnPending=!1,o.completionPending=!1,o.animations=[],o.framesLeftOfAnimation=0,o}return Object(y.a)(i,[{key:"setController",value:function(t){var e=this;this.controller=t,this.controller.moveCallback=function(t){return e.move(t)}}},{key:"move",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=Math.PI/2/i,o=!1;return 1==this.isReadyToMove&&("u"==t?this.animations.push([function(){e.position.x+=1/i,e.rotateOnWorldAxis(new P.q(0,0,1),-n)},i]):"d"==t?this.animations.push([function(){e.position.x-=1/i,e.rotateOnWorldAxis(new P.q(0,0,1),n)},i]):"l"==t?this.animations.push([function(){e.position.z-=1/i,e.rotateOnWorldAxis(new P.q(1,0,0),-n)},i]):"r"==t?this.animations.push([function(){e.position.z+=1/i,e.rotateOnWorldAxis(new P.q(1,0,0),n)},i]):"resp"==t&&this.respawn(),o=!0,this.playSound=!0,this.isReadyToMove=!1,this.lastDirection=t),o}},{key:"animate",value:function(t){for(var e=0;e<this.animations.length;e++)this.animations[e][1]>0&&((this.animations[e].length<3||this.animations[e][2]<=0)&&this.animations[e][0].bind(this)(),this.animations[e][1]--,this.animations[e].length>=3&&this.animations[e][2]--);this.removeCompletedAnimations(),0==this.animations.length&&(this.completionPending?this.complete():(this.getNextAction(),this.checkFloor(t))),this.playSound=!1}},{key:"removeCompletedAnimations",value:function(){for(var t=[],e=0;e<this.animations.length;e++)this.animations[e][1]>0&&t.push(this.animations[e]);this.animations=t}},{key:"getNextAction",value:function(){this.respawnPending?(this.respawnPending=!1,this.respawn()):(this.roundPosition(),this.roundQuaternion(),this.isReadyToMove=!0)}},{key:"checkFloor",value:function(t){var e=this.getGridPosition();t.hasBlockInLocation(e)?t.hasGoalInLocation(e)&&(this.fall(.005,100),this.beginCompletion(),t.completeLevel()):(this.fall(.02),this.respawnPending=!0)}},{key:"fall",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;this.isFalling=!0,this.isReadyToMove=!1,this.animations.push([function(){e.position.y-=e.fallVelocity,e.fallVelocity+=t},i])}},{key:"getGridPosition",value:function(){return[this.position.x,this.position.z]}},{key:"roundPosition",value:function(){this.position.round()}},{key:"roundQuaternion",value:function(){var t,e,i,n;if(void 0!=this.quaternion._x&&void 0!=this.quaternion._y&&void 0!=this.quaternion._z&&void 0!=this.quaternion._w){t=L(this.quaternion._x),e=L(this.quaternion._y),i=L(this.quaternion._z),n=L(this.quaternion._w);var o=new P.n(t,e,i,n);this.setRotationFromQuaternion(o)}}},{key:"respawn",value:function(){this.fallVelocity=0,this.position.copy(this.spawnPos),this.setRotationFromQuaternion(new P.n(0,0,0,1))}},{key:"beginCompletion",value:function(){var t=this;this.completionPending=!0;var e=Math.PI/4/25;this.animations.push([function(){t.rotation.y-=e},25]),this.animations.push([function(){t.scale.x*=1.1,t.scale.y*=1.1,t.scale.z*=1.1},75,25])}},{key:"complete",value:function(){this.position.x=9999999,this.position.y=9999999,this.position.z=9999999,this.completedLevel=!0}}]),i}(P.h),L=function(t){return Math.abs(t)<1e-10?0:Math.abs(t)-.5<1e-10?t<0?-.5:.5:Math.abs(t)-Math.sqrt(2)/2<1e-10?t<0?-Math.sqrt(2)/2:Math.sqrt(2)/2:Math.abs(t)-1<1e-10?t<0?-1:1:void 0},R=S,q=i(8),z=i(7),I=function(t){Object(k.a)(i,t);var e=Object(M.a)(i);function i(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.9,1.8,.9],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"blue";return Object(w.a)(this,i),e.call(this,t,n,o+.25*s[1],s,a)}return Object(y.a)(i,[{key:"move",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=Math.PI/2/i,o=!1;if(!0===this.isReadyToMove){var s,a=this.getOrientation(),r=1/i,c=0;"UPRIGHT"!==a&&("UP-DOWN"!==a||"u"!==t&&"d"!==t)&&("LEFT-RIGHT"!==a||"l"!==t&&"r"!==t)||(r*=1.5,c=.25*("UPRIGHT"===a?-1:1)*this.size[1]/i),"u"===t?(s=new P.q(0,0,-1),this.animations.push([function(){e.position.x+=r,e.position.y+=c,e.rotateOnWorldAxis(s,n)},i])):"d"===t?(s=new P.q(0,0,1),this.animations.push([function(){e.position.x-=r,e.position.y+=c,e.rotateOnWorldAxis(s,n)},i])):"r"===t?(s=new P.q(1,0,0),this.animations.push([function(){e.position.z+=r,e.position.y+=c,e.rotateOnWorldAxis(s,n)},i])):"l"===t?(s=new P.q(-1,0,0),this.animations.push([function(){e.position.z-=r,e.position.y+=c,e.rotateOnWorldAxis(s,n)},i])):"resp"==t&&this.respawn(),o=!0,this.playSound=!0,this.isReadyToMove=!1,this.lastDirection=t,this.lastRotation=s}return o}},{key:"getOrientation",value:function(){var t=this.position.x,e=this.position.z;return t===D(t)&&e===D(e)?"UPRIGHT":t===D(t)?"LEFT-RIGHT":e===D(e)?"UP-DOWN":void 0}},{key:"checkFloor",value:function(t){var e=this.getGridPosition(),n=this.getOrientation();this.lastDirection;if("UPRIGHT"===n)return Object(q.a)(Object(z.a)(i.prototype),"checkFloor",this).call(this,t);t.hasBlockInLocation(e[0])&&t.hasBlockInLocation(e[1])||((t.hasBlockInLocation(e[0])||t.hasBlockInLocation(e[1]))&&(t.hasBlockInLocation(e[0])?(console.log("second off"),"UP-DOWN"===n?this.quickRotate(new P.q(0,0,-1)):this.quickRotate(new P.q(1,0,0),!1)):(console.log("first off"),"UP-DOWN"===n?this.quickRotate(new P.q(0,0,1)):this.quickRotate(new P.q(-1,0,0),!1))),this.fall(.02),this.respawnPending=!0)}},{key:"quickRotate",value:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:25,s=(i?-1:1)*t.z,a=(i?-1:1)*t.x;this.animations.push([function(){e.position.x+=.5*s/n,e.position.z+=.5*a/n},n]);var r=Math.PI/2/o;this.animations.push([function(){e.rotateOnWorldAxis(t,r)},o])}},{key:"getGridPosition",value:function(){var t=this.position.x,e=this.position.z,i=this.getOrientation();return"UPRIGHT"===i?[t,e]:"UP-DOWN"===i?[[t-.5,e],[t+.5,e]]:"LEFT-RIGHT"===i?[[t,e-.5],[t,e+.5]]:void 0}},{key:"roundPosition",value:function(){this.position.x=Math.round(2*this.position.x)/2,this.position.z=Math.round(2*this.position.z)/2}}]),i}(R),D=function(t){return~~t},W=I,A=i(24),F=(i(47),function(t){Object(k.a)(i,t);var e=Object(M.a)(i);function i(t,n){var o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.9,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16777215,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"tile";Object(w.a)(this,i);var l=new P.d(a,.5*a,a),u=new P.k;return u.color=new P.e(r),u.blending=P.l,(o=e.call(this,l,u)).name=c,o.position.x=t,o.position.y=s+.325*a,o.position.z=n,o.color=r,o}return Object(y.a)(i,[{key:"getPosition",value:function(){return[this.position.x,this.position.z]}}]),i}(P.h)),H=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[16777215],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1];Object(w.a)(this,t),this.tiles=[],this.goalTile=void 0,this.scale=e,this.colors=i,this.colorProb=n}return Object(y.a)(t,[{key:"loadTemplate",value:function(){var t=Object(g.a)(O.a.mark((function t(e){var i=this;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(t){return t.text()})).then((function(t){i.template=t.split("\n").map((function(t){return t.split("\t")})),i.addTiles()}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},{key:"setTemplate",value:function(t){this.template=t,this.addTiles()}},{key:"addTiles",value:function(){for(var t=0;t<this.template.length;t++)for(var e=0;e<this.template[t].length;e++)"x"==this.template[t][e].toLowerCase()?this.tiles.push(new F(e,t)):"s"==this.template[t][e].toLowerCase()?(void 0!=this.spawnTile&&console.log("ERROR: Multiple spawn tiles! Please fix level template"),this.spawnTile=new F(e,t,0,.9,13948116,"spawn"),this.tiles.push(this.spawnTile)):"g"==this.template[t][e].toLowerCase()&&(void 0!=this.goalTile&&console.log("ERROR: Multiple goal tiles! Please fix level template"),this.goalTile=new F(e,t,0,.9,16760222,"goal"),this.tiles.push(this.goalTile))}},{key:"addToScene",value:function(t){var e,i=Object(A.a)(this.tiles);try{for(i.s();!(e=i.n()).done;){var n=e.value;t.add(n)}}catch(o){i.e(o)}finally{i.f()}}},{key:"getBlockInLocation",value:function(t){var e=Math.round(t[0]),i=Math.round(t[1]);return e<0||i<0||e>=this.template[0].length||i>=this.template.length?"":this.template[i][e].toLowerCase()}},{key:"hasBlockInLocation",value:function(t){return["x","s","g"].includes(this.getBlockInLocation(t))}},{key:"hasGoalInLocation",value:function(t){return"g"==this.getBlockInLocation(t)}},{key:"getPositions",value:function(){var t,e=[],i=Object(A.a)(this.tiles);try{for(i.s();!(t=i.n()).done;){var n=t.value;e.push(n.position)}}catch(o){i.e(o)}finally{i.f()}return e}},{key:"completeLevel",value:function(){this.goalTile.position.z=1e5}}]),t}();var N=function(t){Object(k.a)(i,t);var e=Object(M.a)(i);function i(t){var n;return Object(w.a)(this,i),(n=e.call(this,t)).state={renderer:null,scene:null,camera:null,audioManager:null,floor:null,controller:null,player:null,initialMountWidth:null,initialMountHeight:null,isInitialized:!1},n}return Object(y.a)(i,[{key:"componentDidMount",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Canvas mounted"),this.initThreeCanvas(),window.addEventListener("resize",this.resizeCanvasToMountSize.bind(this));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Canvas updated"),this.state.isInitialized&&(this.resizeCanvasToMountSize(),this.resumeThreeCanvas(),this.state.controller.isEnabled=this.props.isActive,this.state.player.completedLevel&&console.log("completed - ",this.props.level));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var t=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.removeEventListener("resize",this.resizeCanvasToMountSize.bind(this)),console.log("Canvas unmounted");case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"initThreeCanvas",value:function(){var t=Object(g.a)(O.a.mark((function t(){var e,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.state.initialMountWidth=this.mount.offsetWidth,this.state.initialMountHeight=this.mount.offsetHeight,e=this.state.initialMountWidth/this.state.initialMountHeight,this.state.scene=new P.o,this.state.camera=new C(new P.q(-1,1,1),this.state.scene.position.clone(),e),this.state.renderer=new P.r({alpha:!0,antialias:!0}),this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(this.state.initialMountWidth,this.state.initialMountHeight,!0),this.mount.appendChild(this.state.renderer.domElement),this.state.renderer.domElement.style.zIndex=0,i=new P.f,this.state.scene.add(i),i.position.set(-20,100,50),this.state.audioManager=new E(window,this.props.baseRoute),this.state.camera.add(this.state.audioManager.listener),this.state.audioManager.loadSound("wooden-percussion-shot"),this.state.floor=new H(.9,[11337592,2697513],[0,1]),t.next=19,this.state.floor.loadTemplate("".concat(this.props.baseRoute,"/levels/").concat(this.props.level,".tsv"));case 19:this.state.floor.addToScene(this.state.scene),this.state.controller=new T(document,this.props.isActive,"".concat(this.props.baseRoute,"/levels/solutions/").concat(this.props.level,".txt")),this.state.player=new W(this.state.floor.spawnTile.position.x,this.state.floor.spawnTile.position.z),this.state.player.setController(this.state.controller),this.state.scene.add(this.state.player),this.state.camera.follow(this.state.player),this.state.isInitialized=!0,this.setState(this.state);case 27:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"resumeThreeCanvas",value:function(){var t=Object(g.a)(O.a.mark((function t(){var e,i,n=this,o=arguments;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=!(o.length>0&&void 0!==o[0])||o[0],i=0,function t(){n.props.isActive&&(n.state.renderer.render(n.state.scene,n.state.camera),n.state.player.playSound&&n.state.audioManager.playSound("wooden-percussion-shot"),n.state.player.animate(n.state.floor),n.state.camera.follow(n.state.player,.1),n.state.player.completionPending&&!n.props.isComplete&&n.props.completeStageCallback(),i%200==0&&e&&console.log(n.state.player.getGridPosition()),i+=1,requestAnimationFrame(t))}();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"resizeCanvasToMountSize",value:function(){var t=this.state.renderer.domElement,e=t.offsetWidth,i=t.offsetHeight,n=this.mount.offsetWidth,o=this.mount.offsetHeight;e===n&&i===o||(this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(n,o,!0),this.state.camera.aspect=n/o,this.state.camera.update(),function(t){var e=t.firstElementChild;e.style.width=t.offsetWidth,e.style.height=t.offsetHeight}(this.mount))}},{key:"render",value:function(){var t=this;return Object(d.jsx)("div",{ref:function(e){return t.mount=e},id:this.props.level,className:"canvas-container",style:{display:this.props.isActive?"block":"none"}})}}]),i}(n.Component),G=function(){return Object(d.jsx)("div",{id:"footer",children:"Copyright 2021"})};var B=function(t){var e=Object(n.useState)(t),i=Object(r.a)(e,2),o=i[0],s=i[1],a=Object(n.useRef)(o);return Object(n.useEffect)((function(){a.current=o}),[o]),[o,s,a]},U=function(t){var e=t.Component,i=t.isActive,o=(t.replayStageCallback,t.baseRoute),s=Object(n.useRef)(0),a=B(0),c=Object(r.a)(a,3),l=c[0],u=c[1],h=c[2],p=Object(n.useState)(!0),m=Object(r.a)(p,2),b=m[0],j=m[1],v=function(){var t=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight;s.current=t/e},f=function(t){0===s.current&&t.deltaY<0?u(h.current-1):1===s.current&&t.deltaY>0?u(h.current+1):u(0)};return Object(n.useEffect)((function(){var t=setTimeout((function(){return j(!1)}),1e3);return window.addEventListener("scroll",v),document.addEventListener("wheel",f),function(){clearTimeout(t),window.removeEventListener("scroll",v),document.removeEventListener("wheel",f)}}),[]),Object(n.useEffect)((function(){l<-20?console.log("goto prev page"):l>20&&console.log("goto next page")}),[l]),Object(d.jsxs)("div",{className:"page-container ".concat(b?"fade":""," ").concat(!b&&i?"active":""),children:[Object(d.jsx)("h1",{style:{position:"absolute",left:"0",right:"0",color:"white",textAlign:"center",zIndex:"-1",textShadow:l<-20?"1px 1px":""},children:"Replay level"}),Object(d.jsxs)("div",{className:"page ".concat(b?"fade":""," ").concat(!b&&i?"active":""),style:{transform:"translate(0,".concat(Math.abs(l)>5?-Math.sign(l-5)*Math.log(2*Math.abs(l)-5):0,"%)")},children:[Object(d.jsx)(e,{baseRoute:o}),Object(d.jsx)(G,{})]}),Object(d.jsx)("h1",{style:{position:"absolute",left:"0",right:"0",bottom:".5rem",color:"white",textAlign:"center",zIndex:"-1",textShadow:l>20?"1px 1px":""},children:"Next level"})]})},_=function(t){var e=t.pages,i=t.completeStageCallback,o=t.replayStageCallback,s=t.baseRoute,a=Object(l.e)().pathname;return Object(n.useEffect)((function(){e.forEach((function(t){if(a===t.route){var e=document.getElementsByTagName("html")[0];e&&(t.completed?e.style.touchAction="auto":e.style.touchAction="none")}}))})),Object(d.jsx)(d.Fragment,{children:e.map((function(t,e){return Object(d.jsxs)(d.Fragment,{children:[t.completed&&Object(d.jsx)(U,{Component:t.component,isActive:a===t.route,replayStageCallback:function(){return o(t.route)},baseRoute:s},t.route),!t.completed&&a===t.route&&Object(d.jsx)("h1",{id:"directions-text",children:"Beat the level to unlock the page!"}),Object(d.jsx)(N,{level:t.route.replace("/",""),isActive:a===t.route,completeStageCallback:function(){return i(t.route)},isComplete:t.completed,baseRoute:s})]})}))})},Y=function(t){var e=t.baseRoute;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"About Me"}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("img",{src:e+"/images/headshot.jpg",style:{objectFit:"cover",maxWidth:"400px",maxHeight:"400px",width:"50%"},title:"Me!"}),Object(d.jsxs)("div",{style:{height:"400px",padding:"2rem",border:"3px solid ".concat("#202020"),overflow:"hidden"},children:[Object(d.jsx)("h2",{style:{letterSpacing:"2px"},children:"Overview"}),Object(d.jsx)("h3",{children:"Occupation: Software Engineer"}),Object(d.jsx)("h3",{children:"Company: Motorola Solutions"}),Object(d.jsx)("h3",{children:"Location: Denver, CO"}),Object(d.jsx)("h3",{children:"Total Experience: 5+ years"}),Object(d.jsx)("h3",{children:"Industry Experience: 1+ year"})]})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"Objective"}),Object(d.jsx)("p",{children:"To make society more productive through the use of software solutions"})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"CS Interests"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Backend Development"}),Object(d.jsx)("li",{children:"Frontend Development"}),Object(d.jsx)("li",{children:"Machine Learning"})]})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"Extracurricular Interests"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Investing / Economics"}),Object(d.jsx)("li",{children:"Disc Golf"}),Object(d.jsx)("li",{children:"Climbing"}),Object(d.jsx)("li",{children:"Hiking"}),Object(d.jsx)("li",{children:"Running"}),Object(d.jsx)("li",{children:"Weightlifting"})]})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"Languages / Frameworks"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Python - Proficient"}),Object(d.jsx)("li",{children:"Javascript - Experienced"}),Object(d.jsx)("li",{children:"HTML / CSS - Experienced"}),Object(d.jsx)("li",{children:"React.JS - Experienced"}),Object(d.jsx)("li",{children:"Git - Experienced"}),Object(d.jsx)("li",{children:"SQL - Experienced"}),Object(d.jsx)("li",{children:"Node.JS - Some knowledge"})]})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"Timeline"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})]}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})})]})},V=i(10),J=function(t){var e=t.baseRoute;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Projects"}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"Political Bias Detector"}),Object(d.jsx)("img",{src:e+"/images/projects/poli-bias.jpg",style:Object(V.a)({height:"400px",width:"640px",maxWidth:"100%"},"height","auto"),title:"Political Bias Detector"}),Object(d.jsx)("p",{children:"This project uses a state-of-the-art GPT-2 model, hosted on a dockerized Python server on a Google cloud cluster to make predictions about political bias in text."}),Object(d.jsx)("p",{children:"This model underwent reinforcement training on 86,460 tweets from 200 different US senators, using their party affiliation as the label."}),Object(d.jsx)("p",{children:"In order to query the model, we built a chrome extension that allows you to highlight text and send an HTTP request to the server. The results come back within a few seconds."}),Object(d.jsxs)("p",{children:["You can find the chrome extension listed on the Chrome Web Store\xa0",Object(d.jsx)("a",{href:"https://chrome.google.com/webstore/detail/bias-detector/aifdepmjdlepmpcgdkmbnhjfdmpjboma",style:{color:"purple",fontSize:"1rem",textDecoration:"underline"},children:"here"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},K=function(t){t.baseRoute;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Contact"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{children:"Name\xa0\xa0\xa0\xa0\xa0"}),Object(d.jsx)("input",{id:"name",type:"text",placeholder:"Your name.."}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Email\xa0\xa0\xa0\xa0\xa0"}),Object(d.jsx)("input",{id:"email",type:"text",placeholder:"Your email.."}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{for:"subject",children:"Message"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{id:"message",placeholder:"Write something..",style:{width:"100%",height:"100px"}}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbx0ftvrzfj7KimqSseC2Nacuez7WMrF6GVNa0L-bSiuB6nXJcgxeRbHaKT0_IRICwamBQ/exec"),console.log("hello")},style:{color:"black"},children:"Submit"})]}),Object(d.jsx)("p",{children:"Contact form under construction! In the mean time, please send any inquiries to:"}),Object(d.jsx)("p",{children:"marcusm009@gmail.com"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},Q="/portfolio",X="0.5.2";console.log("VER: ",X);var Z=function(){var t=Object(n.useState)({pages:[{text:"About",route:"/about",completed:!1,component:Y},{text:"Projects",route:"/projects",completed:!1,component:J},{text:"Contact",route:"/contact",completed:!1,component:K}]}),e=Object(r.a)(t,2),i=e[0],o=e[1];return Object(d.jsxs)(c.a,{basename:Q,children:[Object(d.jsx)(l.a,{exact:!0,from:"/",to:"about"}),Object(d.jsx)(v,{baseRoute:Q}),Object(d.jsx)(j,{buttons:i.pages,baseRoute:Q}),Object(d.jsx)(_,{pages:i.pages,completeStageCallback:function(t){console.log(t," completed!"),i.pages.forEach((function(e,n){if(e.route===t){var s={};Object.assign(s,i),s.pages[n].completed=!0,o(s)}}))},replayStageCallback:function(t){console.log(t," - replaying!"),i.pages.forEach((function(e,n){if(e.route===t){var s={};Object.assign(s,i),s.pages[n].completed=!1,o(s)}}))},baseRoute:Q}),Object(d.jsxs)("div",{style:{color:"white",position:"fixed",right:"2px",bottom:"2px",zIndex:"999"},children:["Ver: ",X]})]})},$=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,49)).then((function(e){var i=e.getCLS,n=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;i(t),n(t),o(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(Z,{})}),document.getElementById("root")),$()}},[[48,1,2]]]);
//# sourceMappingURL=main.d7b75144.chunk.js.map