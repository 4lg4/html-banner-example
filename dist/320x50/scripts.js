!function(e){var t={};function a(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,a),u.l=!0,u.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)a.d(n,u,function(t){return e[t]}.bind(null,u));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(a(1));a(3),a(5)(n.default)},function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(a(2));e.exports=function(){new n.default(document.querySelector(".sprites-get-up"),20,44,40,function(){new n.default(document.querySelector(".sprites-and-go"),19,47,40)}),window.timeline=anime.timeline({loop:1,update:function(e){0}}),timeline.add({targets:".frame-back-to-bed",offset:2e3,opacity:[{value:1,duration:500},{delay:4900,value:0,duration:900,easing:"easeInOutQuart"}],top:[{value:-115,duration:0},{value:6,duration:500},{value:3,duration:50},{value:9,duration:50},{value:3,duration:50},{value:6,duration:50},{delay:1300,value:-100,duration:1400,easing:"easeInOutQuart"}],width:[{value:2070,duration:0},{value:295,duration:500}],right:[{value:-829,duration:0},{value:13,duration:500},{value:10,duration:50},{value:16,duration:50},{value:10,duration:50},{value:13,duration:50}],easing:"easeInBack"}),timeline.add({targets:".sprites",offset:2e3,opacity:[{delay:310,value:0,duration:400,easing:"easeInOutQuart"}]}),timeline.add({targets:".item-purple",offset:3200,opacity:1,bottom:[{delay:600,value:-59,duration:1500},{delay:1e3,value:-25,duration:600},{delay:900,value:200,duration:600,easing:"easeInOutQuart"}],height:[{delay:3100,value:109,duration:600}],left:[{delay:3100,value:126,duration:600}],easing:"easeInOutQuart"}),timeline.add({targets:".item-red",offset:6400,opacity:[{value:1,duration:600}],left:[{value:187,duration:1200}],bottom:[{delay:1400,value:200,duration:600,easing:"easeInOutQuart"}],easing:"easeInOutQuart"}),timeline.add({targets:".item-blue",offset:6400,opacity:[{value:1,duration:600}],left:[{value:70,duration:1200}],bottom:[{delay:1400,value:200,duration:600,easing:"easeInOutQuart"}],easing:"easeInOutQuart"}),timeline.add({targets:".item-orange",offset:6400,opacity:[{value:1,duration:600}],left:[{value:17,duration:1200}],bottom:[{delay:1400,value:200,duration:600,easing:"easeInOutQuart"}],easing:"easeInOutQuart"}),timeline.add({targets:".item-green",offset:6400,opacity:[{value:1,duration:600}],left:[{value:243,duration:1200}],bottom:[{delay:1400,value:200,duration:600,easing:"easeInOutQuart"}],easing:"easeInOutQuart"}),timeline.add({targets:".copy",opacity:1,offset:"-=700",duration:600,bottom:7,easing:"easeInOutQuart"}),timeline.add({targets:".logo",offset:"-=700",duration:600,bottom:0,easing:"easeInOutQuart"}),timeline.add({targets:".background",translateY:[{value:-100,duration:2e3}],duration:3e3,easing:"easeInOutQuart",offset:3100}),timeline.add({targets:"#background .background img",opacity:[{value:.4,duration:300},{delay:1600,value:1,duration:300},{delay:2e3,value:0,duration:500}],bottom:[{value:-395,delay:0,easing:"easeInOutQuart"},{delay:1500,value:-213,duration:400,easing:"easeInOutQuart"}],left:[{value:-124,delay:0}],width:[{value:600,delay:0}],offset:2900})}},function(e,t,a){"use strict";e.exports=function(e,t,a,n,u){this.el=e,this.speed=n,this.sprite=t-1,this.size=-a,this.finish=u||function(){return!0},this.play=function(){var e=this;setTimeout(function(){if(e.el.style.backgroundPosition="center "+e.size*e.sprite+"px",e.sprite-=1,e.sprite<0)return e.finish();e.play()},e.speed)},this.el.style.opacity=1,this.play()}},function(e,t,a){},,function(e,t,a){"use strict";e.exports=function(e){document.querySelector(".progress").remove(),document.querySelector(".progress-number").remove();window.addEventListener("load",function(){function t(){document.getElementsByTagName("BODY")[0].addEventListener("click",function(){return EB.clickthrough()}),e()}EB.isInitialized()?t():EB.addEventListener(EBG.EventName.EB_INITIALIZED,t)})}}]);