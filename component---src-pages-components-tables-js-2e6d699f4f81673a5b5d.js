(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"65eO":function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),c=t("TSYQ"),s=t.n(c),n=t("q1tI"),i=t.n(n),o=t("vUet"),m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,n=e.pill,m=e.className,d=e.as,b=void 0===d?"span":d,u=Object(r.a)(e,["bsPrefix","variant","pill","className","as"]),f=Object(o.b)(t,"badge");return i.a.createElement(b,Object(l.a)({ref:a},u,{className:s()(m,f,n&&f+"-pill",c&&f+"-"+c)}))}));m.displayName="Badge",m.defaultProps={pill:!1},a.a=m},"9Iqo":function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l).a.createContext({controlId:void 0});a.a=r},Mlt0:function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),c=t("TSYQ"),s=t.n(c),n=t("q1tI"),i=t.n(n),o=t("17x9"),m=t.n(o),d={type:m.a.string.isRequired,as:m.a.elementType},b=i.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"div":t,n=e.className,o=e.type,m=Object(r.a)(e,["as","className","type"]);return i.a.createElement(c,Object(l.a)({},m,{ref:a,className:s()(n,o&&o+"-feedback")}))}));b.displayName="Feedback",b.propTypes=d,b.defaultProps={type:"valid"},a.a=b},QojX:function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),c=t("TSYQ"),s=t.n(c),n=t("q1tI"),i=t.n(n),o=(t("K9S6"),t("Mlt0")),m=t("9Iqo"),d=t("vUet"),b=i.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,o=e.bsCustomPrefix,b=e.className,u=e.isValid,f=e.isInvalid,p=e.isStatic,v=e.as,E=void 0===v?"input":v,h=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),N=Object(n.useContext)(m.a),x=N.controlId;return c=N.custom?Object(d.b)(o,"custom-control-input"):Object(d.b)(c,"form-check-input"),i.a.createElement(E,Object(l.a)({},h,{ref:a,id:t||x,className:s()(b,c,u&&"is-valid",f&&"is-invalid",p&&"position-static")}))}));b.displayName="FormCheckInput",b.defaultProps={type:"checkbox"};var u=b,f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,o=e.className,b=e.htmlFor,u=Object(r.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(n.useContext)(m.a),p=f.controlId;return t=f.custom?Object(d.b)(c,"custom-control-label"):Object(d.b)(t,"form-check-label"),i.a.createElement("label",Object(l.a)({},u,{ref:a,htmlFor:b||p,className:s()(o,t)}))}));f.displayName="FormCheckLabel";var p=f,v=i.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,b=e.bsCustomPrefix,f=e.inline,v=e.disabled,E=e.isValid,h=e.isInvalid,N=e.feedback,x=e.className,O=e.style,y=e.title,j=e.type,I=e.label,w=e.children,P=e.custom,k=e.as,C=void 0===k?"input":k,F=Object(r.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),R="switch"===j||P;c=R?Object(d.b)(b,"custom-control"):Object(d.b)(c,"form-check");var S=Object(n.useContext)(m.a).controlId,V=Object(n.useMemo)((function(){return{controlId:t||S,custom:R}}),[S,R,t]),g=null!=I&&!1!==I&&!w,L=i.a.createElement(u,Object(l.a)({},F,{type:"switch"===j?"checkbox":j,ref:a,isValid:E,isInvalid:h,isStatic:!g,disabled:v,as:C}));return i.a.createElement(m.a.Provider,{value:V},i.a.createElement("div",{style:O,className:s()(x,c,R&&"custom-"+j,f&&c+"-inline")},w||i.a.createElement(i.a.Fragment,null,L,g&&i.a.createElement(p,{title:y},I),(E||h)&&i.a.createElement(o.a,{type:E?"valid":"invalid"},N))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=u,v.Label=p;var E=v,h=t("jDKy"),N=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.children,b=e.controlId,u=e.as,f=void 0===u?"div":u,p=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(d.b)(t,"form-group");var v=Object(n.useMemo)((function(){return{controlId:b}}),[b]);return i.a.createElement(m.a.Provider,{value:v},i.a.createElement(f,Object(l.a)({},p,{ref:a,className:s()(c,t)}),o))}));N.displayName="FormGroup";var x=N,O=(t("hFyo"),t("JI6e")),y=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.column,o=e.srOnly,b=e.className,u=e.htmlFor,f=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),p=Object(n.useContext)(m.a).controlId;t=Object(d.b)(t,"form-label");var v=s()(b,t,o&&"sr-only",c&&"col-form-label");return u=u||p,c?i.a.createElement(O.a,Object(l.a)({as:"label",className:v,htmlFor:u},f)):i.a.createElement("label",Object(l.a)({ref:a,className:v,htmlFor:u},f))}));y.displayName="FormLabel",y.defaultProps={column:!1,srOnly:!1};var j=y,I=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,n=e.as,o=void 0===n?"small":n,m=e.muted,b=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(d.b)(t,"form-text"),i.a.createElement(o,Object(l.a)({},b,{ref:a,className:s()(c,t,m&&"text-muted")}))}));I.displayName="FormText";var w=I,P=i.a.forwardRef((function(e,a){return i.a.createElement(E,Object(l.a)({},e,{ref:a,type:"switch"}))}));P.displayName="Switch",P.Input=E.Input,P.Label=E.Label;var k=P,C=t("YdCC"),F=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.inline,n=e.className,o=e.validated,m=e.as,b=void 0===m?"form":m,u=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(d.b)(t,"form"),i.a.createElement(b,Object(l.a)({},u,{ref:a,className:s()(n,o&&"was-validated",c&&t+"-inline")}))}));F.displayName="Form",F.defaultProps={inline:!1},F.Row=Object(C.a)("form-row"),F.Group=x,F.Control=h.a,F.Check=E,F.Switch=k,F.Label=j,F.Text=w;a.a=F},hFyo:function(e,a,t){"use strict";t("pIFo");var l=function(){};e.exports=l},jDKy:function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),c=t("TSYQ"),s=t.n(c),n=t("q1tI"),i=t.n(n),o=(t("hFyo"),t("Mlt0")),m=t("9Iqo"),d=t("vUet"),b=i.a.forwardRef((function(e,a){var t,c,o=e.bsPrefix,b=e.type,u=e.size,f=e.id,p=e.className,v=e.isValid,E=e.isInvalid,h=e.plaintext,N=e.readOnly,x=e.as,O=void 0===x?"input":x,y=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),j=Object(n.useContext)(m.a).controlId;if(o=Object(d.b)(o,"form-control"),h)(c={})[o+"-plaintext"]=!0,t=c;else if("file"===b){var I;(I={})[o+"-file"]=!0,t=I}else{var w;(w={})[o]=!0,w[o+"-"+u]=u,t=w}return i.a.createElement(O,Object(l.a)({},y,{type:b,ref:a,readOnly:N,id:f||j,className:s()(p,t,v&&"is-valid",E&&"is-invalid")}))}));b.displayName="FormControl",b.Feedback=o.a,a.a=b},"s+ac":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),c=t("wx14"),s=t("zLVn"),n=t("TSYQ"),i=t.n(n),o=t("vUet"),m=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.striped,m=e.bordered,d=e.borderless,b=e.hover,u=e.size,f=e.variant,p=e.responsive,v=Object(s.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=Object(o.b)(t,"table"),h=i()(l,E,f&&E+"-"+f,u&&E+"-"+u,n&&E+"-striped",m&&E+"-bordered",d&&E+"-borderless",b&&E+"-hover"),N=r.a.createElement("table",Object(c.a)({},v,{className:h,ref:a}));if(p){var x=E+"-responsive";return"string"==typeof p&&(x=x+"-"+p),r.a.createElement("div",{className:x},N)}return N})),d=t("QojX"),b=t("65eO"),u=t("+xvc"),f=t("Z/SS");a.default=Object(f.a)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{h:"1",id:"tables"},"Tables"),r.a.createElement("p",{className:"lead"},"Use the striped, bordered and hover props to customise the table."),r.a.createElement(u.a,{h:"2",id:"simple-table"},"Simple table"),r.a.createElement("div",{className:"ebf-table"},r.a.createElement("header",{className:"ebf-table-header"},r.a.createElement("h5",{className:"ebf-table-headline"},"Table Header")),r.a.createElement("div",{className:"ebf-table-contents"},r.a.createElement(m,{hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(d.a.Group,{controlId:"formBasicCheckbox",className:"mb-0"},r.a.createElement(d.a.Check,{type:"checkbox"}))),r.a.createElement("th",null,"Besitzer ",r.a.createElement("i",{className:"ebf ebf-arr-up-fill"})),r.a.createElement("th",null,"eMail ",r.a.createElement("i",{className:"ebf ebf-arr-up-fill"})),r.a.createElement("th",null,"IMEI ",r.a.createElement("i",{className:"ebf ebf-arr-up-fill"})),r.a.createElement("th",null,"EID ",r.a.createElement("i",{className:"ebf ebf-arr-up-fill"})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(d.a.Group,{controlId:"formBasicCheckbox",className:"mb-0"},r.a.createElement(d.a.Check,{type:"checkbox"}))),r.a.createElement("td",null,"Mark"),r.a.createElement("td",null,"alayaward@ebf.com"),r.a.createElement("td",null,"54321987"),r.a.createElement("td",null,r.a.createElement(b.a,{variant:"info",className:"badge-pill"},"in Bearbeitung"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(d.a.Group,{controlId:"formBasicCheckbox",className:"mb-0"},r.a.createElement(d.a.Check,{type:"checkbox"}))),r.a.createElement("td",null,"Jacob"),r.a.createElement("td",null,"alayaward@ebf.com"),r.a.createElement("td",null,"54321987"),r.a.createElement("td",null,r.a.createElement(b.a,{variant:"primary",className:"badge-pill"},"Unbekannt"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(d.a.Group,{controlId:"formBasicCheckbox",className:"mb-0"},r.a.createElement(d.a.Check,{type:"checkbox"}))),r.a.createElement("td",null,"Larry the Bird"),r.a.createElement("td",null,"alayaward@ebf.com"),r.a.createElement("td",null,"54321987"),r.a.createElement("td",null,r.a.createElement(b.a,{variant:"success",className:"badge-pill"},"Fertig"))))))))}))}}]);
//# sourceMappingURL=component---src-pages-components-tables-js-2e6d699f4f81673a5b5d.js.map