(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+xvc":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("9Hrx"),i=a("TSYQ"),s=a.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.as,a=void 0===t?"span":t,n=e.className;return r.a.createElement(a,{className:s()("anchor",n)},this.props.children,r.a.createElement("a",{href:"#"+this.props.target,"aria-hidden":!0},r.a.createElement("span",{"aria-hidden":!0},"#")))},t}(r.a.Component),u=a("PdwQ"),c=a.n(u),d=a("SU4/"),m=function(e){function t(){return e.apply(this,arguments)||this}Object(l.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.h,a=e.registerNode,n=e.id,r=e.title;a&&a(parseInt(t,10),r,n)},a.render=function(){var e=this.props,t=e.h,a=e.id,n=e.children,l=e.className,i="h"+t;return r.a.createElement(i,{id:a,className:s()("heading",l)},r.a.createElement("div",null,n))},t}(r.a.Component),p=c()(d.a,(function(e){return{registerNode:e.registerNode}}),m);t.a=function(e){var t=e.h,a=e.id,n=e.children;return r.a.createElement(p,{h:t,id:a,title:n},r.a.createElement(o,{target:a},n))}},PdwQ:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t,a){return 2===arguments.length?u(e,t):u({consumers:e,mapToProps:t},a)};var n=l(a("q1tI")),r=l(a("QA0p"));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s=function(e){var t="string"==typeof e?e:e.name||e.displayName;return t?"ContextTransform("+t+")":"ContextTransform"},o=function(e){return e.Consumer||e};function u(e,t){var a=e.consumers,l=e.mapToProps,u=e.displayName,c=e.forwardRefAs,d=void 0===c?"ref":c,m=a;Array.isArray(a)||(m=[a]);var p=o(m[0]);var f=1===m.length?function(e,a){var r,s=i(((r={})[d]=a,r),e);return n.default.createElement(p,null,(function(a){return n.default.createElement(t,i({},s,l(a,e)))}))}:function(e,a){var r,s=i(((r={})[d]=a,r),e);return m.reduceRight((function(e,t){return function(){for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];var i=o(t);return n.default.createElement(i,null,(function(t){return e.apply(void 0,r.concat([t]))}))}}),(function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n.default.createElement(t,i({},s,l.apply(void 0,r.concat([e]))))}))()};return(0,r.default)(f,{displayName:u||s(t)})}},QA0p:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,l=a.defaultProps,i=a.allowFallback,s=void 0!==i&&i,o=a.displayName,u=void 0===o?e.name||e.displayName:o,c=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!s?r.default.forwardRef(c):function(e){return c(e,null)},{displayName:u,propTypes:n,defaultProps:l})};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n}},ahRi:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("+xvc"),i=a("Z/SS");t.default=Object(i.a)((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{h:"1",id:"typography"},"Typography"),r.a.createElement(l.a,{h:"2",id:"heading"},"Heading"),r.a.createElement("h1",null,"EBF Heading 1"),r.a.createElement("h2",null,"EBF Heading 2"),r.a.createElement("h3",null,"EBF Heading 3"),r.a.createElement("h4",null,"EBF Heading 4"),r.a.createElement("h5",null,"EBF Heading 5"),r.a.createElement("h6",null,"EBF Heading 6"),r.a.createElement(l.a,{h:"2",id:"display-heading"},"Display Heading"),r.a.createElement("h1",{className:"display-1"},"Display 1"),r.a.createElement("h1",{className:"display-2"},"Display 2"),r.a.createElement("h1",{className:"display-3"},"Display 3"),r.a.createElement("h1",{className:"display-4"},"Display 4"),r.a.createElement(l.a,{h:"2",id:"lead"},"Lead"),r.a.createElement("p",{className:"lead"},"Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus."),r.a.createElement(l.a,{h:"2",id:"paragraph"},"Paragraph"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),r.a.createElement("p",{className:"sm"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),r.a.createElement("p",{className:""},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),r.a.createElement(l.a,{h:"2",id:"inline-txt-elements"},"Inline Text Elements"),r.a.createElement("p",null,"You can use the mark tag to ",r.a.createElement("mark",null,"highlight")," text."),r.a.createElement("p",null,r.a.createElement("del",null,"This line of text is meant to be treated as deleted text.")),r.a.createElement("p",null,r.a.createElement("s",null,"This line of text is meant to be treated as no longer accurate.")),r.a.createElement("p",null,r.a.createElement("ins",null,"This line of text is meant to be treated as an addition to the document.")),r.a.createElement("p",null,r.a.createElement("u",null,"This line of text will render as underlined")),r.a.createElement("p",null,r.a.createElement("small",null,"This line of text is meant to be treated as fine print.")),r.a.createElement("p",null,r.a.createElement("strong",null,"This line rendered as bold text.")),r.a.createElement("p",null,r.a.createElement("em",null,"This line rendered as italicized text.")))}))}}]);
//# sourceMappingURL=component---src-pages-typography-js-3a5b295964e949b17a45.js.map