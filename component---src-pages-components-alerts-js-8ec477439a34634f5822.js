(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/stF":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),i=t("k1TG"),r=t("8o2o"),c=t("TSYQ"),s=t.n(c),o=t("JCAc"),m=t("ZCiN"),f=t("vUet"),u=t("7xGa"),b=t("XQC9"),d=t("U1MP"),p=t("YdCC"),h=t("dbZe"),k=Object(d.a)("h4");k.displayName="DivStyledAsH4";var E=Object(p.a)("alert-heading",{Component:k}),v=Object(p.a)("alert-link",{Component:h.a}),y={show:!0,transition:u.a,closeLabel:"Close alert"},w=n.a.forwardRef((function(e,a){var t=Object(o.a)(e,{show:"onClose"}),l=t.bsPrefix,c=t.show,d=t.closeLabel,p=t.className,h=t.children,k=t.variant,E=t.onClose,v=t.dismissible,y=t.transition,w=Object(r.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),N=Object(f.a)(l,"alert"),x=Object(m.a)((function(e){E&&E(!1,e)})),O=!0===y?u.a:y,j=n.a.createElement("div",Object(i.a)({role:"alert"},O?w:void 0,{ref:a,className:s()(p,N,k&&N+"-"+k,v&&N+"-dismissible")}),v&&n.a.createElement(b.a,{onClick:x,label:d}),h);return O?n.a.createElement(O,Object(i.a)({unmountOnExit:!0},w,{ref:void 0,in:c}),j):c?j:null}));w.displayName="Alert",w.defaultProps=y,w.Link=v,w.Heading=E;var N=w,x=t("+xvc"),O=t("Afmz"),j=t("Z/SS"),C=[{type:"primary",icon:"ebf-bell-fill"},{type:"secondary",icon:"ebf-bell-fill"},{type:"success",icon:"ebf-check-mark-circle-full-fill"},{type:"danger",icon:"ebf-alert-wide-fill"},{type:"warning",icon:"ebf-alert-wide-fill"},{type:"info",icon:"ebf-info-fill"},{type:"light",icon:"ebf-bell-fill"},{type:"dark",icon:"ebf-bell-fill"}];a.default=Object(j.a)((function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{h:"1",id:"alerts"},"Alerts"),n.a.createElement("p",{className:"lead"},"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),n.a.createElement(x.a,{h:"2",id:"examples"},"Examples"),n.a.createElement("p",null,"Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight ",n.a.createElement("code",null,"variant"),"s."),C.map((function(e,a){return n.a.createElement(N,{key:a,variant:e.type,className:"mb-4"},n.a.createElement("i",{className:"alert-icon ebf "+e.icon}),"This is a ",e.type," alert — check it out! .")})),C.map((function(e){var a=e.type,t=e.icon;return n.a.createElement("div",{key:a,className:"mb-3 capitalize-text copyblock-container"},n.a.createElement(x.a,{h:"3",id:a+"-alert"},a," Alert"),n.a.createElement(N,{variant:a,className:"mb-4"},n.a.createElement("i",{className:"alert-icon ebf "+t}),"This is a ",a," alert — check it out!"),n.a.createElement(O.a,{theme:O.c,text:'<div role="alert" class="fade alert alert-'+a+' show">s\n\t<i class="alert-icon ebf '+t+'"></i>\n\tThis is a '+a+" alert - check it out!\n</div>",language:"jsx",showLineNumbers:!0,wrapLines:!0,codeBlock:!0}))})),n.a.createElement("hr",null),n.a.createElement(x.a,{h:"2",id:"links"},"Links Alerts"),n.a.createElement("p",null,"Use the ",n.a.createElement("code",null,".alert-link")," utility class to quickly provide matching colored links within any alert."),C.map((function(e,a){return n.a.createElement(N,{key:a,variant:e.type,className:"mb-4"},n.a.createElement("i",{className:"alert-icon ebf "+e.icon}),"This is a ",e.type," alert with"," "," ",n.a.createElement(N.Link,{href:"#"},"an example link"),". Give it a click if you like.")})),C.map((function(e){var a=e.type,t=e.icon;return n.a.createElement("div",{key:a,className:"mb-3 capitalize-text copyblock-container"},n.a.createElement(x.a,{h:"3",id:a+"-linked-alert"},a," Alert"),n.a.createElement(N,{variant:a,className:"mb-4"},n.a.createElement("i",{className:"alert-icon ebf "+t}),"This is a ",a," alert with"," "," ",n.a.createElement(N.Link,{href:"#"},"an example link"),". Give it a click if you like."),n.a.createElement(O.a,{theme:O.c,text:'<div role="alert" class="fade alert alert-'+a+' show">\n\t<i class="alert-icon ebf '+t+'"></i> \n\t This is a '+a+' alert with \n\t<a class="alert-link" href="#" role="button">an example link</a>.\n</div>',language:"jsx",showLineNumbers:!0,wrapLines:!0,codeBlock:!0}))})))}))},"7xGa":function(e,a,t){"use strict";var l,n=t("k1TG"),i=t("8o2o"),r=t("TSYQ"),c=t.n(r),s=t("YECM"),o=t("q1tI"),m=t.n(o),f=t("dRu9"),u=t("z+q/"),b=((l={})[f.b]="show",l[f.a]="show",l),d=m.a.forwardRef((function(e,a){var t=e.className,l=e.children,r=Object(i.a)(e,["className","children"]),d=Object(o.useCallback)((function(e){Object(u.a)(e),r.onEnter&&r.onEnter(e)}),[r]);return m.a.createElement(f.e,Object(n.a)({ref:a,addEndListener:s.a},r,{onEnter:d}),(function(e,a){return m.a.cloneElement(l,Object(n.a)({},a,{className:c()("fade",t,l.props.className,b[e])}))}))}));d.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},d.displayName="Fade",a.a=d},U1MP:function(e,a,t){"use strict";var l=t("k1TG"),n=t("q1tI"),i=t.n(n),r=t("TSYQ"),c=t.n(r);a.a=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(l.a)({},a,{ref:t,className:c()(a.className,e)}))}))}},XQC9:function(e,a,t){"use strict";var l=t("k1TG"),n=t("8o2o"),i=t("q1tI"),r=t.n(i),c=t("TSYQ"),s=t.n(c),o=r.a.forwardRef((function(e,a){var t=e.label,i=e.onClick,c=e.className,o=Object(n.a)(e,["label","onClick","className"]);return r.a.createElement("button",Object(l.a)({ref:a,type:"button",className:s()("close",c),onClick:i},o),r.a.createElement("span",{"aria-hidden":"true"},"×"),r.a.createElement("span",{className:"sr-only"},t))}));o.displayName="CloseButton",o.defaultProps={label:"Close"},a.a=o}}]);
//# sourceMappingURL=component---src-pages-components-alerts-js-8ec477439a34634f5822.js.map