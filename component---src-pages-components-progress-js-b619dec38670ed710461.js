(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{JUMO:function(e,a,s){"use strict";var r=s("k1TG"),t=s("8o2o"),n=s("TSYQ"),l=s.n(n),c=s("q1tI"),m=s.n(c),o=s("vUet");function i(e,a,s){var r=(e-a)/(s-a)*100;return Math.round(1e3*r)/1e3}function p(e,a){var s,n=e.min,c=e.now,o=e.max,p=e.label,d=e.srOnly,b=e.striped,g=e.animated,E=e.className,v=e.style,u=e.variant,N=e.bsPrefix,f=Object(t.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return m.a.createElement("div",Object(r.a)({ref:a},f,{role:"progressbar",className:l()(E,N+"-bar",(s={},s["bg-"+u]=u,s[N+"-bar-animated"]=g,s[N+"-bar-striped"]=g||b,s)),style:Object(r.a)({width:i(c,n,o)+"%"},v),"aria-valuenow":c,"aria-valuemin":n,"aria-valuemax":o}),d?m.a.createElement("span",{className:"sr-only"},p):p)}var d=m.a.forwardRef((function(e,a){var s=e.isChild,n=Object(t.a)(e,["isChild"]);if(n.bsPrefix=Object(o.a)(n.bsPrefix,"progress"),s)return p(n,a);var i=n.min,d=n.now,b=n.max,g=n.label,E=n.srOnly,v=n.striped,u=n.animated,N=n.bsPrefix,f=n.variant,h=n.className,w=n.children,y=Object(t.a)(n,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return m.a.createElement("div",Object(r.a)({ref:a},y,{className:l()(h,N)}),w?function(e,a){var s=0;return m.a.Children.map(e,(function(e){return m.a.isValidElement(e)?a(e,s++):e}))}(w,(function(e){return Object(c.cloneElement)(e,{isChild:!0})})):p({min:i,now:d,max:b,label:g,srOnly:E,striped:v,animated:u,bsPrefix:N,variant:f},a))}));d.displayName="ProgressBar",d.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};a.a=d},gych:function(e,a,s){"use strict";s.r(a);var r=s("q1tI"),t=s.n(r),n=s("JUMO"),l=s("Afmz"),c=s("+xvc"),m=s("Z/SS");a.default=Object(m.a)((function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement(c.a,{h:"1",id:"progress-bar"},"Progress Bar"),t.a.createElement("div",{className:"ebf-progress-bar col-9"},t.a.createElement("div",{className:"progress-bar-item-container"},t.a.createElement("a",{href:"",className:"progress-bar-item active"},t.a.createElement("span",{className:"progress-label"},"Name"),t.a.createElement("span",{className:"progress-dot"})),t.a.createElement("a",{href:"",className:"progress-bar-item active current"},t.a.createElement("span",{className:"progress-label"},"Source"),t.a.createElement("span",{className:"progress-dot"})),t.a.createElement("a",{href:"",className:"progress-bar-item"},t.a.createElement("span",{className:"progress-label"},"Target"),t.a.createElement("span",{className:"progress-dot"})),t.a.createElement("a",{href:"",className:"progress-bar-item"},t.a.createElement("span",{className:"progress-label"},"Devices"),t.a.createElement("span",{className:"progress-dot"})),t.a.createElement("a",{href:"",className:"progress-bar-item"},t.a.createElement("span",{className:"progress-label"},"Save"),t.a.createElement("span",{className:"progress-dot"}))),t.a.createElement(n.a,{variant:"primary",now:25})),t.a.createElement("br",null),t.a.createElement("div",{className:"ebf-progress-bar col-6"},t.a.createElement("div",{className:"progress-bar-item-container"},t.a.createElement("a",{href:"",className:"progress-bar-item active"},t.a.createElement("span",{className:"progress-label"},"Name"),t.a.createElement("span",{className:"progress-dot"})),t.a.createElement("a",{href:"",className:"progress-bar-item active"},t.a.createElement("span",{className:"progress-label"},"Source"),t.a.createElement("span",{className:"progress-dot"})),t.a.createElement("a",{href:"",className:"progress-bar-item active"},t.a.createElement("span",{className:"progress-label"},"Target"),t.a.createElement("span",{className:"progress-dot"})),t.a.createElement("a",{href:"",className:"progress-bar-item active current"},t.a.createElement("span",{className:"progress-label"},"Devices"),t.a.createElement("span",{className:"progress-dot"}))),t.a.createElement(n.a,{variant:"primary",now:100})),t.a.createElement("br",null),t.a.createElement("div",{className:"ebf-progress-bar col-4"},t.a.createElement("div",{className:"progress-bar-item-container"},t.a.createElement("a",{href:"",className:"progress-bar-item active"},t.a.createElement("span",{className:"progress-label"},"Source"),t.a.createElement("span",{className:"progress-dot"})),t.a.createElement("a",{href:"",className:"progress-bar-item active current"},t.a.createElement("span",{className:"progress-label"},"Target"),t.a.createElement("span",{className:"progress-dot"})),t.a.createElement("a",{href:"",className:"progress-bar-item"},t.a.createElement("span",{className:"progress-label"},"Devices"),t.a.createElement("span",{className:"progress-dot"}))),t.a.createElement(n.a,{variant:"primary",now:50})),t.a.createElement("div",{className:"mb-3 copyblock-container"},t.a.createElement("div",null,t.a.createElement("h3",null,"Code example"),t.a.createElement("p",null,"To control the width of ",t.a.createElement("code",null,"div.ebf-progress-bar")," just append needed ",t.a.createElement("code",null,".col-*")," class "),t.a.createElement("p",null,t.a.createElement("code",null,"div.progress")," should be controlled so the ",t.a.createElement("code",null,'aria-valuenow="*"')," and ",t.a.createElement("code",null,'style="width: *%;')," values are accordingly appended.")),t.a.createElement(l.a,{theme:l.c,text:'<div class="ebf-progress-bar col-9">\n\t<div class="progress-bar-item-container">\n\t\t<a href="" class="progress-bar-item active">\n\t\t\t<span class="progress-label">Name</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t\t<a href="" class="progress-bar-item active current">\n\t\t\t<span class="progress-label">Source</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t\t<a href="" class="progress-bar-item">\n\t\t\t<span class="progress-label">Target</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t\t<a href="" class="progress-bar-item">\n\t\t\t<span class="progress-label">Devices</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t\t<a href="" class="progress-bar-item">\n\t\t\t<span class="progress-label">Save</span>\n\t\t\t<span class="progress-dot"></span>\n\t\t</a>\n\t<div>\n\t<div class="progress">\n\t\t<div\n\t\t\trole="progressbar"\n\t\t\tclass="progress-bar bg-primary"\n\t\t\taria-valuenow="25"\n\t\t\taria-valuemin="0"\n\t\t\taria-valuemax="100"\n\t\t\tstyle="width: 25%;">\n\t\t<div>\n\t</div>\n</div>',language:"jsx",showLineNumbers:!0,wrapLines:!0,codeBlock:!0})))}))}}]);
//# sourceMappingURL=component---src-pages-components-progress-js-b619dec38670ed710461.js.map