(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,t,i){},47:function(e,t,i){"use strict";i.r(t);var n=i(7),s=i.n(n),o=i(30),a=i.n(o),r=(i(38),i(13)),c=i(22),l=i(10),u=i(31),h=i(32),d=i(1),p=function(e){var t=e.isOpen,i=e.setOpen;return Object(d.jsx)("button",{id:"menu-opener",onClick:function(){return i(!t)},children:t?Object(d.jsx)(u.a,{style:{width:"40px",height:"40px"}}):Object(d.jsx)(h.a,{style:{width:"40px",height:"40px"}})})},m=function(e){var t=e.button,i=Object(l.e)().pathname;return Object(d.jsx)(c.b,{to:t.route,className:i===t.route?"selected":"",children:t.text})},b=function(e,t){return e/t>=1?"landscape":"portrait"},j=function(e){var t=e.buttons,i=Object(n.useRef)(),s=Object(n.useState)(!1),o=Object(r.a)(s,2),a=o[0],c=o[1],l=Object(n.useState)(b(window.innerWidth,window.innerHeight)),u=Object(r.a)(l,2),h=u[0],j=u[1],v=function(e){i.current&&!i.current.contains(e.target)&&c(!1)};return Object(n.useEffect)((function(){return document.addEventListener("mousedown",v),document.addEventListener("touchstart",v),window.addEventListener("resize",(function(){j(b(window.innerWidth,window.innerHeight))})),function(){document.removeEventListener("mousedown",v),document.removeEventListener("touchstart",v),window.removeEventListener("resize",(function(){j(b(window.innerWidth,window.innerHeight))}))}}),[]),Object(d.jsxs)("div",{id:"nav-bar",ref:i,className:"top-bar ".concat(h," ").concat(a?"open":"closed"),children:["portrait"===h&&Object(d.jsx)(p,{isOpen:a,setOpen:c}),t.map((function(e,t){return Object(d.jsx)(m,{button:e},t)}))]})},v=function(e){var t=e.baseRoute;return Object(d.jsxs)("div",{id:"title-bar",className:"top-bar",children:[Object(d.jsx)("img",{src:t+"/images/favicon/favicon-64x64.png",style:{width:"48px",maxWidth:"100%",height:"auto"},title:"Logo"}),Object(d.jsx)("button",{type:"button",className:"title",onClick:function(){window.location.reload()},children:"Marcus_Mills"})]})},f=function(e){var t=Object(n.useState)(!1),i=Object(r.a)(t,2),s=i[0],o=i[1],a=Object(n.useRef)();return Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return o(e.isIntersecting||s)}))}));return e.observe(a.current),function(){return e.unobserve(a.current)}}),[s]),Object(d.jsx)("div",{className:"fade-in-section ".concat(s?"is-visible":""),ref:a,children:e.children})},x=i(11),O=i.n(x),g=i(16),w=i(2),y=i(3),k=i(4),C=i(5),M=i(9),S=function(e){Object(k.a)(i,e);var t=Object(C.a)(i);function i(e,n,s){var o,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return Object(w.a)(this,i),(o=t.call(this)).spawnPos=e.clone(),o.focalPoint=n.clone(),o.aspect=s,o.frustumSize=a,o.position.set(-1,1,1),o.lookAt(o.focalPoint),o.near=-300,o.far=1500,o.update(),o}return Object(y.a)(i,[{key:"update",value:function(){this.left=this.frustumSize*this.aspect/-2,this.right=this.frustumSize*this.aspect/2,this.top=this.frustumSize/2,this.bottom=this.frustumSize/-2,this.updateProjectionMatrix()}},{key:"follow",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER,i=e.position.x-this.position.x,n=e.position.z-this.position.z;if(e.completionPending||e.completedLevel){var s=e.spawnPos.y-this.spawnPos.y,o=e.position.y-this.position.y,a=o-s;this.position.y+=a<0?Math.max(a,-999999):Math.min(a,999999)}this.position.x+=i<0?Math.max(i,-t):Math.min(i,t),this.position.z+=n<0?Math.max(n,-t):Math.min(n,t)}}]),i}(M.j),E=function(){function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;Object(w.a)(this,e),this.moveCallback=function(e){console.log("Move callback never assigned")},t.addEventListener("keydown",this.handleKeyDown.bind(this),!1),t.addEventListener("touchstart",this.handleTouchStart.bind(this),!1),t.addEventListener("touchmove",this.handleTouchMove.bind(this),!1),this.xDown=null,this.yDown=null,n&&(this.solutionLoaded=!1,this.loadSolution(n),t.addEventListener("wheel",this.handleScroll.bind(this),!1)),this.lastMoveWasManual=!1,this.isEnabled=i}return Object(y.a)(e,[{key:"loadSolution",value:function(){var e=Object(g.a)(O.a.mark((function e(t){var i=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.text()})).then((function(e){i.solution=e,i.solutionIdx=0,i.solutionLoaded=!0}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleScroll",value:function(e){this.solutionLoaded&&this.isEnabled&&(-100==e.deltaY?this.moveCallback("resp")&&(this.solutionIdx=0):100==e.deltaY&&(this.lastMoveWasManual?this.moveCallback("resp")&&(this.solutionIdx=0):this.moveCallback(this.solution[this.solutionIdx])&&this.solutionIdx++),this.lastMoveWasManual=!1)}},{key:"handleKeyDown",value:function(e){if(this.isEnabled){var t=e.which;87==t||38==t?this.moveCallback("u"):83==t||40==t?this.moveCallback("d"):65==t||37==t?this.moveCallback("l"):68==t||39==t?this.moveCallback("r"):console.log("Key pressed: "+t),this.lastMoveWasManual=!0}}},{key:"getTouches",value:function(e){return e.touches||e.originalEvent.touches}},{key:"handleTouchStart",value:function(e){var t=this.getTouches(e)[0];this.xDown=t.clientX,this.yDown=t.clientY}},{key:"handleTouchMove",value:function(e){if(this.isEnabled&&this.xDown&&this.yDown){var t=e.touches[0].clientX,i=e.touches[0].clientY,n=this.xDown-t,s=this.yDown-i;if(0!=n&&0!=s){var o=Math.atan2(s,n);0<=o&&o<Math.PI/2?this.moveCallback("l"):Math.PI/2<=o&&o<=Math.PI?this.moveCallback("u"):-Math.PI<=o&&o<-Math.PI/2?this.moveCallback("r"):-Math.PI/2<=o&&o<0?this.moveCallback("d"):console.log("This should not happen - touch input angle: ".concat(o))}this.xDown=null,this.yDown=null}}}]),e}(),T=function(){function e(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(w.a)(this,e),this.window=t,this.loadedSound=null,this.baseRoute=i,this.context=n,this.listener=new M.b,this.loader=new M.c,this.sound=new M.a(this.listener)}return Object(y.a)(e,[{key:"playSound",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;null==this.context&&(console.log("context loaded"),this.loadContext()),!this.loadedSound==e&&(this.loadSound(e,t),console.log("loaded sound: ".concat(e))),this.sound.isPlaying&&this.sound.stop(),this.sound.play()}},{key:"stopSound",value:function(){this.sound.stop()}},{key:"loadContext",value:function(){var e=window.AudioContext||window.webkitAudioContext;this.context=new e,this.context.resume().then((function(){console.log("Playback resumed successfully")}))}},{key:"loadSound",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.loader.load("".concat(this.baseRoute,"/sounds/").concat(e,".ogg"),(function(e){t.sound.setBuffer(e),t.sound.setLoop(!1),t.sound.setVolume(i)})),this.loadedSound=e}}]),e}(),P=function(e){Object(k.a)(i,e);var t=Object(C.a)(i);function i(e,n){var s,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[.9,.9,.9],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"red";Object(w.a)(this,i);var c=new M.d(a[0],a[1],a[2]),l=new M.h;return l.color=new M.e(r),l.blending=M.i,(s=t.call(this,c,l)).name="player",s.position.x=e,s.position.y=o,s.position.z=n,s.spawnPos=s.position.clone(),s.fallVelocity=0,s.isReadyToMove=!0,s.isFalling=!1,s.completedLevel=!1,s.respawnPending=!1,s.completionPending=!1,s.animations=[],s.framesLeftOfAnimation=0,s}return Object(y.a)(i,[{key:"setController",value:function(e){var t=this;this.controller=e,this.controller.moveCallback=function(e){return t.move(e)}}},{key:"move",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=Math.PI/2/i,s=!1;return 1==this.isReadyToMove&&("u"==e?this.animations.push([function(){t.position.x+=1/i,t.rotation.z-=n},i]):"d"==e?this.animations.push([function(){t.position.x-=1/i,t.rotation.z+=n},i]):"l"==e?this.animations.push([function(){t.position.z-=1/i,t.rotation.x-=n},i]):"r"==e?this.animations.push([function(){t.position.z+=1/i,t.rotation.x+=n},i]):"resp"==e&&this.respawn(),s=!0,this.playSound=!0,this.isReadyToMove=!1),s}},{key:"animate",value:function(e){for(var t=0;t<this.animations.length;t++)this.animations[t][1]>0&&((this.animations[t].length<3||this.animations[t][2]<=0)&&this.animations[t][0].bind(this)(),this.animations[t][1]--,this.animations[t].length>=3&&this.animations[t][2]--);this.removeCompletedAnimations(),0==this.animations.length&&(this.completionPending?this.complete():(this.getNextAction(),this.checkFloor(e))),this.playSound=!1}},{key:"removeCompletedAnimations",value:function(){for(var e=[],t=0;t<this.animations.length;t++)this.animations[t][1]>0&&e.push(this.animations[t]);this.animations=e}},{key:"getNextAction",value:function(){this.respawnPending?(this.respawnPending=!1,this.respawn()):(this.rotation.set(0,0,0),this.position.round(),this.isReadyToMove=!0)}},{key:"checkFloor",value:function(e){e.hasBlockInLocation(this.position.x,this.position.z)||(e.hasGoalInLocation(this.position.x,this.position.z)?(this.fall(.005,100),this.beginCompletion(),e.completeLevel()):(this.fall(.02),this.respawnPending=!0))}},{key:"fall",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;this.isFalling=!0,this.isReadyToMove=!1,this.animations.push([function(){t.position.y-=t.fallVelocity,t.fallVelocity+=e},i])}},{key:"respawn",value:function(){this.fallVelocity=0,this.position.copy(this.spawnPos)}},{key:"beginCompletion",value:function(){var e=this;this.completionPending=!0;var t=Math.PI/4/25;this.animations.push([function(){e.rotation.y-=t},25]),this.animations.push([function(){e.scale.x*=1.1,e.scale.y*=1.1,e.scale.z*=1.1},75,25])}},{key:"complete",value:function(){this.position.x=9999999,this.position.y=9999999,this.position.z=9999999,this.completedLevel=!0}}]),i}(M.g),L=i(23),z=(i(46),function(e){Object(k.a)(i,e);var t=Object(C.a)(i);function i(e,n){var s,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.9,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:16777215,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"tile";Object(w.a)(this,i);var l=new M.d(a,.5*a,a),u=new M.h;return u.color=new M.e(r),u.blending=M.i,(s=t.call(this,l,u)).name=c,s.position.x=e,s.position.y=o+.325*a,s.position.z=n,s.color=r,s}return Object(y.a)(i,[{key:"getPosition",value:function(){return[this.position.x,this.position.z]}}]),i}(M.g)),R=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[16777215],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[1];Object(w.a)(this,e),this.tiles=[],this.goalTile=void 0,this.scale=t,this.colors=i,this.colorProb=n}return Object(y.a)(e,[{key:"loadTemplate",value:function(){var e=Object(g.a)(O.a.mark((function e(t){var i=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.text()})).then((function(e){i.template=e.split("\n").map((function(e){return e.split("\t")})),i.addTiles()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"setTemplate",value:function(e){this.template=e,this.addTiles()}},{key:"addTiles",value:function(){for(var e=0;e<this.template.length;e++)for(var t=0;t<this.template[e].length;t++)"x"==this.template[e][t].toLowerCase()?this.tiles.push(new z(t,e)):"s"==this.template[e][t].toLowerCase()?(void 0!=this.spawnTile&&console.log("ERROR: Multiple spawn tiles! Please fix level template"),this.spawnTile=new z(t,e,0,.9,13948116,"spawn"),this.tiles.push(this.spawnTile)):"g"==this.template[e][t].toLowerCase()&&(void 0!=this.goalTile&&console.log("ERROR: Multiple goal tiles! Please fix level template"),this.goalTile=new z(t,e,0,.9,16760222,"goal"),this.tiles.push(this.goalTile))}},{key:"addToScene",value:function(e){var t,i=Object(L.a)(this.tiles);try{for(i.s();!(t=i.n()).done;){var n=t.value;e.add(n)}}catch(s){i.e(s)}finally{i.f()}}},{key:"getBlockInLocation",value:function(e,t){var i=Math.round(e),n=Math.round(t);return i<0||n<0||i>=this.template[0].length||n>=this.template.length?"":this.template[n][i].toLowerCase()}},{key:"hasBlockInLocation",value:function(e,t){return["x","s"].includes(this.getBlockInLocation(e,t))}},{key:"hasGoalInLocation",value:function(e,t){return"g"==this.getBlockInLocation(e,t)}},{key:"getPositions",value:function(){var e,t=[],i=Object(L.a)(this.tiles);try{for(i.s();!(e=i.n()).done;){var n=e.value;t.push(n.position)}}catch(s){i.e(s)}finally{i.f()}return t}},{key:"completeLevel",value:function(){this.goalTile.position.z=1e5}}]),e}();var I=function(e){Object(k.a)(i,e);var t=Object(C.a)(i);function i(e){var n;return Object(w.a)(this,i),(n=t.call(this,e)).state={renderer:null,scene:null,camera:null,audioManager:null,floor:null,controller:null,player:null,initialMountWidth:null,initialMountHeight:null,isInitialized:!1},n}return Object(y.a)(i,[{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Canvas mounted"),this.initThreeCanvas(),window.addEventListener("resize",this.resizeCanvasToMountSize.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Canvas updated"),this.state.isInitialized&&(this.resizeCanvasToMountSize(),this.resumeThreeCanvas(),this.state.controller.isEnabled=this.props.isActive,this.state.player.completedLevel&&console.log("completed - ",this.props.level));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.removeEventListener("resize",this.resizeCanvasToMountSize.bind(this)),console.log("Canvas unmounted");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"initThreeCanvas",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.initialMountWidth=this.mount.offsetWidth,this.state.initialMountHeight=this.mount.offsetHeight,t=this.state.initialMountWidth/this.state.initialMountHeight,this.state.scene=new M.k,this.state.camera=new S(new M.l(-1,1,1),this.state.scene.position.clone(),t),this.state.renderer=new M.m({alpha:!0,antialias:!0}),this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(this.state.initialMountWidth,this.state.initialMountHeight,!0),this.mount.appendChild(this.state.renderer.domElement),this.state.renderer.domElement.style.zIndex=0,i=new M.f,this.state.scene.add(i),i.position.set(-20,100,50),this.state.audioManager=new T(window,this.props.baseRoute),this.state.camera.add(this.state.audioManager.listener),this.state.audioManager.loadSound("wooden-percussion-shot"),this.state.floor=new R(.9,[11337592,2697513],[0,1]),e.next=19,this.state.floor.loadTemplate("".concat(this.props.baseRoute,"/levels/").concat(this.props.level,".tsv"));case 19:this.state.floor.addToScene(this.state.scene),this.state.controller=new E(document,this.props.isActive,"".concat(this.props.baseRoute,"/levels/solutions/").concat(this.props.level,".txt")),this.state.player=new P(this.state.floor.spawnTile.position.x,this.state.floor.spawnTile.position.z),this.state.player.setController(this.state.controller),this.state.scene.add(this.state.player),this.state.camera.follow(this.state.player),this.state.isInitialized=!0,this.setState(this.state);case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"resumeThreeCanvas",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,i=this;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,function e(){i.props.isActive&&(i.state.renderer.render(i.state.scene,i.state.camera),i.state.player.playSound&&i.state.audioManager.playSound("wooden-percussion-shot"),i.state.player.animate(i.state.floor),i.state.camera.follow(i.state.player,.1),i.state.player.completionPending&&!i.props.isComplete&&i.props.completeStageCallback(),t%200==0&&console.log(i.state.player.position),t+=1,requestAnimationFrame(e))}();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"resizeCanvasToMountSize",value:function(){var e=this.state.renderer.domElement,t=e.offsetWidth,i=e.offsetHeight,n=this.mount.offsetWidth,s=this.mount.offsetHeight;t===n&&i===s||(this.state.renderer.setPixelRatio(window.devicePixelRatio),this.state.renderer.setSize(n,s,!0),this.state.camera.aspect=n/s,this.state.camera.update(),function(e){var t=e.firstElementChild;t.style.width=e.offsetWidth,t.style.height=e.offsetHeight}(this.mount))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{ref:function(t){return e.mount=t},id:this.props.level,className:"canvas-container",style:{display:this.props.isActive?"block":"none"}})}}]),i}(n.Component),D=function(){return Object(d.jsx)("div",{id:"footer",children:"Copyright 2021"})},q=function(e){var t=e.Component,i=e.isActive,s=e.baseRoute,o=Object(n.useState)(!0),a=Object(r.a)(o,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){return l(!1)}),1e3);return function(){clearTimeout(e)}}),[]),Object(d.jsxs)("div",{className:"page ".concat(c?"fade":""," ").concat(!c&&i?"active":""),children:[Object(d.jsx)(t,{baseRoute:s}),Object(d.jsx)(D,{})]})},A=function(e){var t=e.pages,i=e.completeStageCallback,s=e.baseRoute,o=Object(l.e)().pathname;return Object(n.useEffect)((function(){t.forEach((function(e){if(o===e.route){var t=document.getElementsByTagName("html")[0];t&&(e.completed?t.style.touchAction="auto":t.style.touchAction="none")}}))})),Object(d.jsx)(d.Fragment,{children:t.map((function(e,t){return Object(d.jsxs)(d.Fragment,{children:[e.completed&&Object(d.jsx)(q,{Component:e.component,isActive:o===e.route,baseRoute:s},e.route),!e.completed&&o===e.route&&Object(d.jsx)("h1",{id:"directions-text",children:"Beat the level to unlock the page!"}),Object(d.jsx)(I,{level:e.route.replace("/",""),isActive:o===e.route,completeStageCallback:function(){return i(e.route)},isComplete:e.completed,baseRoute:s})]})}))})},W=function(e){var t=e.baseRoute;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"About Me"}),Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsx)("img",{src:t+"/images/headshot.jpg",style:{objectFit:"cover",maxWidth:"400px",maxHeight:"400px",width:"50%"},title:"Me!"}),Object(d.jsxs)("div",{style:{height:"400px",padding:"2rem",border:"3px solid ".concat("#202020"),overflow:"hidden"},children:[Object(d.jsx)("h2",{style:{letterSpacing:"2px"},children:"Overview"}),Object(d.jsx)("h3",{children:"Occupation: Software Engineer"}),Object(d.jsx)("h3",{children:"Company: Motorola Solutions"}),Object(d.jsx)("h3",{children:"Location: Denver, CO"}),Object(d.jsx)("h3",{children:"Total Experience: 5+ years"}),Object(d.jsx)("h3",{children:"Industry Experience: 1+ year"})]})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"Objective"}),Object(d.jsx)("p",{children:"To make society more productive through the use of software solutions"})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"CS Interests"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Backend Development"}),Object(d.jsx)("li",{children:"Frontend Development"}),Object(d.jsx)("li",{children:"Machine Learning"})]})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"Extracurricular Interests"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Investing / Economics"}),Object(d.jsx)("li",{children:"Disc Golf"}),Object(d.jsx)("li",{children:"Climbing"}),Object(d.jsx)("li",{children:"Hiking"}),Object(d.jsx)("li",{children:"Running"}),Object(d.jsx)("li",{children:"Weightlifting"})]})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"Languages / Frameworks"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Python - Proficient"}),Object(d.jsx)("li",{children:"Javascript - Experienced"}),Object(d.jsx)("li",{children:"HTML / CSS - Experienced"}),Object(d.jsx)("li",{children:"React.JS - Experienced"}),Object(d.jsx)("li",{children:"Git - Experienced"}),Object(d.jsx)("li",{children:"SQL - Experienced"}),Object(d.jsx)("li",{children:"Node.JS - Some knowledge"})]})]}),Object(d.jsxs)(f,{children:[Object(d.jsx)("h2",{children:"Timeline"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})]}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})}),Object(d.jsx)(f,{children:Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolorem ab, voluptatibus maiores placeat deleniti, tempora amet rem voluptatum excepturi, maxime sapiente rerum corrupti repellendus ipsa mollitia architecto corporis nostrum velit cumque vero soluta! Perspiciatis minima quam exercitationem harum. Distinctio quas sint ad, sapiente praesentium veniam reiciendis consectetur deserunt laudantium."})})]})},F=i(8),H=function(e){var t=e.baseRoute;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Projects"}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"Political Bias Detector"}),Object(d.jsx)("img",{src:t+"/images/projects/poli-bias.jpg",style:Object(F.a)({height:"400px",width:"640px",maxWidth:"100%"},"height","auto"),title:"Political Bias Detector"}),Object(d.jsx)("p",{children:"This project uses a state-of-the-art GPT-2 model, hosted on a dockerized Python server on a Google cloud cluster to make predictions about political bias in text."}),Object(d.jsx)("p",{children:"This model underwent reinforcement training on 86,460 tweets from 200 different US senators, using their party affiliation as the label."}),Object(d.jsx)("p",{children:"In order to query the model, we built a chrome extension that allows you to highlight text and send an HTTP request to the server. The results come back within a few seconds."}),Object(d.jsxs)("p",{children:["You can find the chrome extension listed on the Chrome Web Store\xa0",Object(d.jsx)("a",{href:"https://chrome.google.com/webstore/detail/bias-detector/aifdepmjdlepmpcgdkmbnhjfdmpjboma",style:{color:"purple",fontSize:"1rem",textDecoration:"underline"},children:"here"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},N=function(e){e.baseRoute;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Contact"}),Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{children:"Name\xa0\xa0\xa0\xa0\xa0"}),Object(d.jsx)("input",{id:"name",type:"text",placeholder:"Your name.."}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"Email\xa0\xa0\xa0\xa0\xa0"}),Object(d.jsx)("input",{id:"email",type:"text",placeholder:"Your email.."}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{for:"subject",children:"Message"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{id:"message",placeholder:"Write something..",style:{width:"100%",height:"100px"}}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbx0ftvrzfj7KimqSseC2Nacuez7WMrF6GVNa0L-bSiuB6nXJcgxeRbHaKT0_IRICwamBQ/exec"),console.log("hello")},style:{color:"black"},children:"Submit"})]}),Object(d.jsx)("p",{children:"Contact form under construction! In the mean time, please send any inquiries to:"}),Object(d.jsx)("p",{children:"marcusm009@gmail.com"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]})},B="/portfolio",G="0.4.0";console.log("VER: ",G);var V=function(){var e=Object(n.useState)({pages:[{text:"About",route:"/about",completed:!1,component:W},{text:"Projects",route:"/projects",completed:!1,component:H},{text:"Contact",route:"/contact",completed:!1,component:N}]}),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(d.jsxs)(c.a,{basename:B,children:[Object(d.jsx)(l.a,{exact:!0,from:"/",to:"about"}),Object(d.jsx)(v,{baseRoute:B}),Object(d.jsx)(j,{buttons:i.pages,baseRoute:B}),Object(d.jsx)(A,{pages:i.pages,completeStageCallback:function(e){console.log(e," completed!"),i.pages.forEach((function(t,n){if(t.route===e){var o={};Object.assign(o,i),o.pages[n].completed=!0,s(o)}}))},baseRoute:B}),Object(d.jsxs)("div",{style:{color:"white",position:"fixed",right:"2px",bottom:"2px",zIndex:"999"},children:["Ver: ",G]})]})},Y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,48)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),o(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(V,{})}),document.getElementById("root")),Y()}},[[47,1,2]]]);
//# sourceMappingURL=main.b6399a57.chunk.js.map