!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var i,r,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(T,t),d?b(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function T(){var e=p();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return s?g(n,u-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?b(e):(i=r=void 0,a)}function w(){var e=p(),n=S(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return O(l);if(s)return f=setTimeout(T,t),b(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=a.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var O="feedback-form-state",S=document.querySelector(".feedback-form");S.addEventListener("input",e(t)((function(e){I={email:x.value,message:E.value},localStorage.setItem(O,JSON.stringify(I))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(O))),localStorage.removeItem(O),e.currentTarget.reset()}));var T,h,w,N=S.elements,x=N.email,E=N.message,I=null!==(T=JSON.parse(localStorage.getItem(O)))&&void 0!==T?T:{};I&&(x.value=null!==(h=I.email)&&void 0!==h?h:"",E.value=null!==(w=I.message)&&void 0!==w?w:"")}();
//# sourceMappingURL=03-feedback.c7d0aefb.js.map
