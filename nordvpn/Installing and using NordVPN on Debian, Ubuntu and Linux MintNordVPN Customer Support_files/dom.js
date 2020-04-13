function DOM(t){return new DOMHelper(t)}var DOMHelper=function(){function t(t){e.isFunction(t)&&(this.element=document,this.ready(t)),e.isString(t)&&(this.element=document.querySelector(t)),e.isNode(t)&&(this.element=t)}var e={isFunction:function(t){return"function"==typeof t},isString:function(t){return"string"==typeof t},isNode:function(t){return!!t.nodeType}};return t.prototype={ready:function(t){var e=this;this.element.attachEvent&&"undefined"!=typeof this.element.attachEvent?this.element.attachEvent("onreadystatechange",function(){"complete"===e.element.readyState&&t.call(e)}):this.element.addEventListener("DOMContentLoaded",function(){t.call(e)})},on:function(t,e){return document.addEventListener?this.element.addEventListener(t,e,!1):document.attachEvent&&this.element.attachEvent("on"+t,e),this},off:function(t,e){return document.removeEventListener?this.element.removeEventListener(t,e):document.detachEvent&&this.element.detachEvent("on"+t,e),this},addClass:function(t){return this.hasClass(t)||(this.element.className+=" "+t),this},hasClass:function(t){return new RegExp("(^| )"+t+"( |$)","gi").test(this.element.className)},removeClass:function(t){return this.element.className=this.element.className.replace(new RegExp("(^| )"+t+"( |$)","gi"),""),this},toggleClass:function(t){var e=this.hasClass(t)?"removeClass":"addClass";return this[e](t),this},loadScript:function(t,e){var n=document.createElement("script");return n.type="text/javascript",n.async=n.defer=!0,n.src=("https:"==document.location.protocol?"https://":"http://")+t,e&&(n.onload=e),this.element.appendChild(n),this},css:function(t,e){if("string"==typeof t)this.element.style[t]=e;else{var n=t;for(var s in n)this.css(s,n[s])}return this}},t}(),DropDown=function(){function t(t){this.parent="string"==typeof t.parent?document.querySelector(t.parent):t.parent,this.toggle="string"==typeof t.parent?document.querySelector(t.toggle):t.toggle,this.activeClass=t.activeClass?t.activeClass:"labels--visible",this.parent&&this.bindEvents()}return t.prototype={bindEvents:function(){var t=this;DOM(this.toggle).on("click",function(){DOM(t.parent).toggleClass(t.activeClass)})}},t}();