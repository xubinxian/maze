webpackJsonp([1],{NHnr:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=n("7+uW"),h={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var e=n("VU/8")({name:"App"},h,!1,function(t){n("nF9L")},null,null).exports,o=n("/ocq");function a(t,i,n){this.radius=t,this.fillColor=i,this.xCoordinate=this.radius+(n.width-2*this.radius)*Math.random(),this.yCoordinate=this.radius+(n.height-2*this.radius)*Math.random(),this.xVelocity=2*Math.random()-1,this.yVelocity=2*Math.random()-1,this.gravity=.15,this.xShift=0,this.yShift=0,this.friction=.83,this.c=n.getContext("2d");var s=n.width/2,h=n.height/2;this.update=function(){1==n.pullTowardsMouse?(this.xShift+=.05*(s-this.xShift),this.yShift+=.05*(h-this.yShift),this.xCoordinate=this.xShift+50*Math.sin(this.xVelocity),this.yCoordinate=this.yShift+50*Math.cos(this.yVelocity),this.xVelocity<0?this.xVelocity-=.15*Math.random():this.xVelocity+=.15*Math.random(),this.yVelocity<0?this.yVelocity-=.15*Math.random():this.yVelocity+=.15*Math.random(),this.xCoordinate=Math.max(Math.min(this.xCoordinate,n.width-this.radius),0+this.radius),this.yCoordinate=Math.max(Math.min(this.yCoordinate,n.height-this.radius),0+this.radius)):((this.xCoordinate+this.radius+this.xVelocity>n.width||this.xCoordinate-this.radius+this.xVelocity<0)&&(this.xVelocity=-this.xVelocity*this.friction),this.yCoordinate+this.radius+this.yVelocity>n.height||this.yCoordinate-this.radius+this.yVelocity<0?(this.yVelocity=-this.yVelocity*this.friction,this.xVelocity=.99*this.xVelocity):this.yVelocity+=this.gravity,this.xCoordinate=this.xCoordinate+this.xVelocity,this.yCoordinate=this.yCoordinate+this.yVelocity,this.xShift=this.xCoordinate,this.yShift=this.yCoordinate),this.draw()},this.draw=function(){this.c.beginPath(),this.c.arc(this.xCoordinate,this.yCoordinate,this.radius,0,2*Math.PI,!1),this.c.fillStyle=i,this.c.fill(),this.c.closePath()}}var r={name:"Main",data:function(){return{canvas:null,context:null,orbs:[]}},mounted:function(){this.init(),this.initOrb(),this.initEventListener()},methods:{init:function(){this.canvas=document.querySelector("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.pullTowardsMouse=!1,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight},initOrb:function(){for(var t=["#2A3B30","#ABFFD1","#EBFFF5","#9DFEFF","#273B40"],i=0;i<50;i++)this.orbs.push(new a(Math.floor(50*Math.random()+10),t[Math.floor(5*Math.random())],this.canvas));this.animate()},initEventListener:function(){var t=this;this.canvas.width,this.canvas.height;window.addEventListener("mousemove",function(t){t.clientX,t.clientY}),window.addEventListener("mousedown",function(i){t.canvas.pullTowardsMouse=!0}),window.addEventListener("mouseup",function(i){t.canvas.pullTowardsMouse=!1,t.orbs.forEach(function(t){var i=Math.random()<.5?-1:1,n=Math.random()<.5?-1:1;t.xVelocity=i*t.xVelocity,t.yVelocity=n*t.yVelocity})}),window.addEventListener("resize",function(i){t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight})},animate:function(){clearTimeout(this.animate),setTimeout(this.animate,10),this.context.fillStyle="rgba(0,0,0,0.25)",this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.orbs.forEach(function(t){t.update()})}}},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("canvas"),this._v(" "),i("p",[this._v("Hold mouse down or frown")])])}]};var d=n("VU/8")(r,c,!1,function(t){n("eMZq")},"data-v-caa47864",null).exports;s.a.use(o.a);var l=new o.a({routes:[{path:"/",name:"Main",component:d}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:l,components:{App:e},template:"<App/>"})},eMZq:function(t,i){},nF9L:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.093d9f262d2ca83d2e66.js.map