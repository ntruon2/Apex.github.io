(this["webpackJsonpapexgaming-web"]=this["webpackJsonpapexgaming-web"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(6),s=n.n(o),r=(n(14),n.p+"static/media/logo.6ce24c58.svg");n(15);function i(e,t,n,c){var a;c&&(a=JSON.stringify(c));var o=new XMLHttpRequest,s="http://localhost:8000/api".concat(t);o.responseType="json";var r=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");o.open(e,s),o.setRequestHeader("Content-Type","application/json"),r&&(o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("X-CSRFToken",r)),o.onload=function(){403===o.status&&("Authentication credentials were not provided."===o.response.detail&&(window.location.href="/login?showLoginRequired=true"));n(o.response,o.status)},o.onerror=function(e){n({message:"The request was an error"},400)},o.send(a)}var l=n(0);function u(e){var t=e.blog,n=e.action,c=e.didPerformAction,a=t.likes?t.likes:0,o=e.className?e.className:"btn btn-primary btn-sm",s=n.display?n.display:"Action",r=function(e,t){console.log(e,t),200!==t&&201!==t||!c||c(e,t)},u="like"===n.type?"".concat(a," ").concat(s):s;return Object(l.jsx)("button",{className:o,onClick:function(e){e.preventDefault(),function(e,t,n){i("POST","/blogs/action/",n,{id:e,action:t})}(t.id,n.type,r)},children:u})}var d=n(9),b=n(3),j=n(2);function m(e){var t=a.a.createRef(),n=e.didBlog,c=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again"))};return Object(l.jsx)("div",{className:e.className,children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;i("POST","/blogs/create/",c,{content:n}),t.current.value=""},children:[Object(l.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"blog"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Blog"})]})})}var g=n(8);function f(e){var t=e.blog;return t.parent?Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-11 mx-auto p-3 border rounded",children:[Object(l.jsx)("p",{className:"mb-0 text-muted small",children:"Reblog"}),Object(l.jsx)(p,{hideActions:!0,className:" ",blog:t.parent})]})}):null}function p(e){var t=e.blog,n=e.didReblog,o=e.hideActions,s=Object(c.useState)(e.blog?e.blog:null),r=Object(j.a)(s,2),i=r[0],d=r[1],b=e.className?e.className:"col-10 mx-auto col-md-6",m=window.location.pathname.match(Object(g.a)(/([0-9]+)/,{blogid:1})),p=m?m.groups.blogid:-1,O="".concat(t.id)==="".concat(p),h=function(e,t){200===t?d(e):201===t&&n&&n(e)};return Object(l.jsxs)("div",{className:b,children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[t.id," - ",t.content]}),Object(l.jsx)(f,{blog:t})]}),Object(l.jsxs)("div",{className:"btn btn-group",children:[i&&!0!==o&&Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)(u,{blog:i,didPerformAction:h,action:{type:"like",display:"Likes"}}),Object(l.jsx)(u,{blog:i,didPerformAction:h,action:{type:"unlike",display:"Unlike"}}),Object(l.jsx)(u,{blog:i,didPerformAction:h,action:{type:"reblog",display:"Reblog"}})]}),!0===O?null:Object(l.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})}function O(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)([]),r=Object(j.a)(s,2),u=r[0],d=r[1],m=Object(c.useState)(!1),g=Object(j.a)(m,2),f=g[0],O=g[1];Object(c.useEffect)((function(){var t=Object(b.a)(e.newBlogs).concat(a);t.length!==u.length&&d(t)}),[e.newBlogs,u,a]),Object(c.useEffect)((function(){if(!1===f){!function(e,t){var n="/blogs/";e&&(n="/blogs/?username=".concat(e)),i("GET",n,t)}(e.username,(function(e,t){200===t?(o(e),O(!0)):alert("There was an error")}))}}),[a,f,O,e.username]);var h=function(e){var t=Object(b.a)(a);t.unshift(e),o(t);var n=Object(b.a)(u);n.unshift(u),d(n)};return u.map((function(e,t){return Object(l.jsx)(p,{blog:e,didReblog:h,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))}))}function h(e){var t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],o=n[1],s="false"!==e.canBlog;return Object(l.jsxs)("div",{className:e.className,children:[!0===s&&Object(l.jsx)(m,{didBlog:function(e){var t=Object(b.a)(a);t.unshift(e),o(t)},className:"col-12 mb-3"}),Object(l.jsx)(O,Object(d.a)({newBlogs:a},e))]})}function v(e){var t=e.blogId,n=Object(c.useState)(!1),a=Object(j.a)(n,2),o=a[0],s=a[1],r=Object(c.useState)(null),u=Object(j.a)(r,2),d=u[0],b=u[1],m=function(e,t){200===t?b(e):alert("There was an error finding your blog.")};return Object(c.useEffect)((function(){!1===o&&(!function(e,t){i("GET","/blogs/".concat(e,"/"),t)}(t,m),s(!0))}),[t,o,s]),null===d?null:Object(l.jsx)(p,{blog:d,className:e.className})}var x=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(l.jsx)("div",{children:Object(l.jsx)(h,{})}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=document.getElementById("root");w&&s.a.render(Object(l.jsx)(x,{}),w);var N=a.a.createElement,y=document.getElementById("ApexGaming");y&&s.a.render(N(h,y.dataset),y),document.querySelectorAll(".ApexGaming-detail").forEach((function(e){s.a.render(N(v,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.dd92336b.chunk.js.map