(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/stF":function(e,a,l){"use strict";l.r(a);var t=l("q1tI"),i=l.n(t),r=l("wx14"),n=l("zLVn"),c=l("TSYQ"),s=l.n(c),o=l("JCAc"),f=l("ZCiN"),b=l("YdCC"),d=l("U1MP"),u=l("vUet"),m=l("7xGa"),h=l("XQC9"),k=l("dbZe"),p={show:!0,transition:m.a,closeLabel:"Close alert"},v={show:"onClose"},E=i.a.forwardRef((function(e,a){var l=Object(o.a)(e,v),t=l.bsPrefix,c=l.show,b=l.closeLabel,d=l.className,m=l.children,k=l.variant,p=l.onClose,E=l.dismissible,w=l.transition,y=Object(n.a)(l,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),x=Object(u.b)(t,"alert"),g=Object(f.a)((function(e){p(!1,e)})),N=i.a.createElement("div",Object(r.a)({role:"alert"},w?y:void 0,{className:s()(d,x,k&&x+"-"+k,E&&x+"-dismissible")}),E&&i.a.createElement(h.a,{onClick:g,label:b}),m);return w?i.a.createElement(w,Object(r.a)({unmountOnExit:!0,ref:a},y,{in:c}),N):c?N:null})),w=Object(d.a)("h4");w.displayName="DivStyledAsH4",E.displayName="Alert",E.defaultProps=p,E.Link=Object(b.a)("alert-link",{Component:k.a}),E.Heading=Object(b.a)("alert-heading",{Component:w});var y=E,x=l("3Z9Z"),g=l("JI6e"),N=l("+xvc"),T=l("Z/SS"),C=[{type:"primary",icon:"ebf-bell-fill"},{type:"secondary",icon:"ebf-bell-fill"},{type:"success",icon:"ebf-check-mark-circle"},{type:"danger",icon:"ebf-alert-wide-fill"},{type:"warning",icon:"ebf-alert-wide-fill"},{type:"info",icon:"ebf-info-fill"},{type:"light",icon:"ebf-bell-fill"},{type:"dark",icon:"ebf-bell-fill"}];a.default=Object(T.a)((function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N.a,{h:"1",id:"alerts"},"Alerts"),i.a.createElement("p",{className:"lead"},"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."),i.a.createElement(N.a,{h:"2",id:"examples"},"Examples"),i.a.createElement("p",null,"Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the eight ",i.a.createElement("code",null,"variant"),"s."),C.map((function(e,a){return i.a.createElement(y,{key:a,variant:e.type},i.a.createElement("i",{className:"alert-icon ebf "+e.icon}),"This is a ",e.type," alert — check it out!")})),i.a.createElement(x.a,{fluid:"md"},i.a.createElement(g.a,{xl:10,md:12},i.a.createElement("code",{className:"code-snippet"},'<div role="alert" class="fade alert alert-primary show"><i class="alert-icon ebf ebf-bell-fill"></i> This is a primary alert — check it out!</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-secondary show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a secondary alert — check it out!</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-success show"><i class="alert-icon ebf ebf-check-mark-circle"></i>This is a success alert — check it out!</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-danger show"><i class="alert-icon ebf ebf-alert-wide-fill"></i>This is a danger alert — check it out!</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-warning show"><i class="alert-icon ebf ebf-alert-wide-fill"></i>This is a warning alert — check it out!</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-info show"><i class="alert-icon ebf ebf-info-fill"></i>This is a info alert — check it out!</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-light show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a light alert — check it out!</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-dark show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a dark alert — check it out!</div>'))),i.a.createElement(N.a,{h:"2",id:"links"},"Links"),i.a.createElement("p",null,"Use the ",i.a.createElement("code",null,".alert-link")," utility class to quickly provide matching colored links within any alert."),C.map((function(e,a){return i.a.createElement(y,{key:a,variant:e.type},i.a.createElement("i",{className:"alert-icon ebf "+e.icon}),"This is a ",e.type," alert with"," "," ",i.a.createElement(y.Link,{href:"#"},"an example link"),". Give it a click if you like.")})),i.a.createElement(x.a,{fluid:"md"},i.a.createElement(g.a,{xl:10,md:12},i.a.createElement("code",{className:"code-snippet"},'<div role="alert" class="fade alert alert-primary show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a primary alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-secondary show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a secondary alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-success show"><i class="alert-icon ebf ebf-check-mark-circle"></i>This is a success alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-danger show"><i class="alert-icon ebf ebf-alert-wide-fill"></i>This is a danger alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-warning show"><i class="alert-icon ebf ebf-alert-wide-fill"></i>This is a warning alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-info show"><i class="alert-icon ebf ebf-info-fill"></i>This is a info alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-light show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a light alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>',i.a.createElement("br",null),i.a.createElement("br",null),'<div role="alert" class="fade alert alert-dark show"><i class="alert-icon ebf ebf-bell-fill"></i>This is a dark alert with  <a class="alert-link" href="#" role="button">an example link</a>. Give it a click if you like.</div>'))))}))},"7xGa":function(e,a,l){"use strict";var t,i=l("wx14"),r=l("zLVn"),n=l("TSYQ"),c=l.n(n),s=l("CR+v"),o=l("q1tI"),f=l.n(o),b=l("dRu9"),d=l("z+q/"),u=((t={})[b.b]="show",t[b.a]="show",t),m=f.a.forwardRef((function(e,a){var l=e.className,t=e.children,n=Object(r.a)(e,["className","children"]),m=Object(o.useCallback)((function(e){Object(d.a)(e),n.onEnter&&n.onEnter(e)}),[n]);return f.a.createElement(b.e,Object(i.a)({ref:a,addEndListener:s.a},n,{onEnter:m}),(function(e,a){return f.a.cloneElement(t,Object(i.a)({},a,{className:c()("fade",l,t.props.className,u[e])}))}))}));m.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},m.displayName="Fade",a.a=m},U1MP:function(e,a,l){"use strict";var t=l("wx14"),i=l("q1tI"),r=l.n(i),n=l("TSYQ"),c=l.n(n);a.a=function(e){return r.a.forwardRef((function(a,l){return r.a.createElement("div",Object(t.a)({},a,{ref:l,className:c()(a.className,e)}))}))}},XQC9:function(e,a,l){"use strict";var t=l("wx14"),i=l("zLVn"),r=l("17x9"),n=l.n(r),c=l("q1tI"),s=l.n(c),o=l("TSYQ"),f=l.n(o),b={label:n.a.string.isRequired,onClick:n.a.func},d=s.a.forwardRef((function(e,a){var l=e.label,r=e.onClick,n=e.className,c=Object(i.a)(e,["label","onClick","className"]);return s.a.createElement("button",Object(t.a)({ref:a,type:"button",className:f()("close",n),onClick:r},c),s.a.createElement("span",{"aria-hidden":"true"},"×"),s.a.createElement("span",{className:"sr-only"},l))}));d.displayName="CloseButton",d.propTypes=b,d.defaultProps={label:"Close"},a.a=d}}]);
//# sourceMappingURL=component---src-pages-components-alerts-js-5e0978ce2520c98dd3b8.js.map