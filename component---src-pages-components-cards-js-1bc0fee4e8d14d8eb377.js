(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"J3P+":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),c=t.n(l),n=t("YdCC"),r=Object(n.a)("card-deck"),s=t("k1TG"),i=t("8o2o"),m=t("TSYQ"),d=t.n(m),o=t("vUet"),u=t("U1MP"),b=t("Wzyw"),f=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.variant,r=e.as,m=void 0===r?"img":r,u=Object(i.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(t,"card-img");return c.a.createElement(m,Object(s.a)({ref:a,className:d()(n?b+"-"+n:b,l)},u))}));f.displayName="CardImg",f.defaultProps={variant:null};var p=f,h=Object(u.a)("h5"),v=Object(u.a)("h6"),E=Object(n.a)("card-body"),x=Object(n.a)("card-title",{Component:h}),k=Object(n.a)("card-subtitle",{Component:v}),N=Object(n.a)("card-link",{Component:"a"}),g=Object(n.a)("card-text",{Component:"p"}),y=Object(n.a)("card-header"),w=Object(n.a)("card-footer"),T=Object(n.a)("card-img-overlay"),C=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.bg,m=e.text,u=e.border,f=e.body,p=e.children,h=e.as,v=void 0===h?"div":h,x=Object(i.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),k=Object(o.a)(t,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:k+"-header"}}),[k]);return c.a.createElement(b.a.Provider,{value:N},c.a.createElement(v,Object(s.a)({ref:a},x,{className:d()(n,k,r&&"bg-"+r,m&&"text-"+m,u&&"border-"+u)}),f?c.a.createElement(E,null,p):p))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=p,C.Title=x,C.Subtitle=k,C.Body=E,C.Link=N,C.Text=g,C.Header=y,C.Footer=w,C.ImgOverlay=T;var S=C,j=t("3Z9Z"),B=t("JI6e"),P=t("sjrs"),L=t("cWnB"),O=t("Afmz"),z=t("+xvc"),I=t("Z/SS");a.default=Object(I.a)((function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(z.a,{h:"1",id:"cards"},"Cards"),c.a.createElement(r,null,c.a.createElement(S,{className:"ebf-card-select card-hover text-center"},c.a.createElement(S.Body,null,c.a.createElement("i",{className:"ebf ebf-esim ebf-card-icon mb-2"}),c.a.createElement(S.Link,{href:"#"},c.a.createElement(S.Title,{className:"mb-1"},"Card Title Example")),c.a.createElement(S.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content. Just adding up some text to fill in the third row."))),c.a.createElement(S,{className:"ebf-card-select card-hover text-center"},c.a.createElement(S.Body,null,c.a.createElement("i",{className:"ebf ebf-device-smartphone ebf-card-icon mb-2"}),c.a.createElement(S.Link,{href:"#"},c.a.createElement(S.Title,{className:"mb-1"},"Long Card Title Example")),c.a.createElement(S.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))),c.a.createElement(S,{className:"ebf-card-select card-hover text-center"},c.a.createElement(S.Body,null,c.a.createElement("i",{className:"ebf ebf-apps ebf-card-icon mb-2"}),c.a.createElement(S.Link,{href:"#"},c.a.createElement(S.Title,{className:"mb-1"},"Card Title")),c.a.createElement(S.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),c.a.createElement(r,null,c.a.createElement(S,{className:"ebf-card-select card-hover text-center"},c.a.createElement(S.Body,null,c.a.createElement("i",{className:"ebf ebf-apps ebf-card-icon mb-2"}),c.a.createElement(S.Link,{href:"#"},c.a.createElement(S.Title,{className:"mb-1"},"Card Title")),c.a.createElement(S.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),c.a.createElement("div",{className:"mb-3 copyblock-container"},c.a.createElement("div",null,c.a.createElement("h3",null,"Code example")),c.a.createElement(O.a,{theme:O.c,text:'<div class="card-deck">\n  <div class="ebf-card-select card-hover text-center card">\n      <div class="card-body">\n        <i class="ebf ebf-esim ebf-card-icon mb-2"></i>\n        <a class="card-link" href="#">\n            <div class="mb-1 card-title h5">Card Title Example</div>\n        </a>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content. Just adding up some text to fill in the third row.</p>\n      </div>\n  </div>\n  <div class="ebf-card-select card-hover text-center card">\n      <div class="card-body">\n        <i class="ebf ebf-device-smartphone ebf-card-icon mb-2"></i>\n        <a class="card-link" href="#">\n            <div class="mb-1 card-title h5">Long Card Title Example</div>\n        </a>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n      </div>\n  </div>\n  <div class="ebf-card-select card-hover text-center card">\n      <div class="card-body">\n        <i class="ebf ebf-apps ebf-card-icon mb-2"></i>\n        <a class="card-link" href="#">\n            <div class="mb-1 card-title h5">Card Title</div>\n        </a>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n      </div>\n  </div>\n</div>',language:"jsx",showLineNumbers:!0,wrapLines:!0,codeBlock:!0})),c.a.createElement(z.a,{h:"2",id:"alternative-cards"},"Color Hover Cards"),c.a.createElement("p",null,"Just append class ",c.a.createElement("code",null,".card-hover-effect")," to the ",c.a.createElement("code",null,"div.card")," element "),c.a.createElement(r,null,c.a.createElement(S,{className:"ebf-card-select card-hover card-hover-effect text-center"},c.a.createElement(S.Body,null,c.a.createElement("i",{className:"ebf ebf-esim ebf-card-icon mb-2"}),c.a.createElement(S.Link,{href:"#"},c.a.createElement(S.Title,{className:"mb-1"},"Card Title Example")),c.a.createElement(S.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content. Just adding up some text to fill in the third row."))),c.a.createElement(S,{className:"ebf-card-select card-hover card-hover-effect text-center"},c.a.createElement(S.Body,null,c.a.createElement("i",{className:"ebf ebf-device-smartphone ebf-card-icon mb-2"}),c.a.createElement(S.Link,{href:"#"},c.a.createElement(S.Title,{className:"mb-1"},"Long Card Title Example")),c.a.createElement(S.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))),c.a.createElement(S,{className:"ebf-card-select card-hover card-hover-effect text-center"},c.a.createElement(S.Body,null,c.a.createElement("i",{className:"ebf ebf-apps ebf-card-icon mb-2"}),c.a.createElement(S.Link,{href:"#"},c.a.createElement(S.Title,{className:"mb-1"},"Card Title")),c.a.createElement(S.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),c.a.createElement("div",{className:"mb-3 copyblock-container"},c.a.createElement("div",null,c.a.createElement("h3",null,"Code example")),c.a.createElement(O.a,{theme:O.c,text:'<div class="card-deck">\n  <div class="ebf-card-select card-hover card-hover-effect text-center card">\n      <div class="card-body">\n        <i class="ebf ebf-esim ebf-card-icon mb-2"></i>\n        <a class="card-link" href="#">\n            <div class="mb-1 card-title h5">Card Title Example</div>\n        </a>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content. Just adding up some text to fill in the third row.</p>\n      </div>\n  </div>\n  <div class="ebf-card-select card-hover card-hover-effect text-center card">\n      <div class="card-body">\n        <i class="ebf ebf-device-smartphone ebf-card-icon mb-2"></i>\n        <a class="card-link" href="#">\n            <div class="mb-1 card-title h5">Long Card Title Example</div>\n        </a>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n      </div>\n  </div>\n  <div class="ebf-card-select card-hover card-hover-effect text-center card">\n      <div class="card-body">\n        <i class="ebf ebf-apps ebf-card-icon mb-2"></i>\n        <a class="card-link" href="#">\n            <div class="mb-1 card-title h5">Card Title</div>\n        </a>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n      </div>\n  </div>\n</div>',language:"jsx",showLineNumbers:!0,wrapLines:!0,codeBlock:!0})),c.a.createElement(z.a,{h:"2",id:"summary-cards"},"Summary Cards"),c.a.createElement(j.a,{className:"ebf-card-container"},c.a.createElement(B.a,{className:"col-lg-4 col-md-6 col-sm-12"},c.a.createElement(S,{className:"ebf-card-summary"},c.a.createElement(S.Body,null,c.a.createElement(P.a,{variant:"flush"},c.a.createElement(P.a.Item,null,c.a.createElement("span",null,"Besitzer:")," Carole Rosario"),c.a.createElement(P.a.Item,null,c.a.createElement("span",null,"eMail:")," carolerosario@ebf.com"),c.a.createElement(P.a.Item,null,c.a.createElement("span",null,"Kartenprofil:")," 000001-3972834-2"),c.a.createElement(P.a.Item,null,c.a.createElement("span",null,"Telefonnummer:")," +49-175-5558-994"),c.a.createElement(P.a.Item,{className:"eid-color"},c.a.createElement("span",null,"EID:")," 984654")))))),c.a.createElement("div",{className:"mb-3 copyblock-container"},c.a.createElement("div",null,c.a.createElement("h3",null,"Code example")),c.a.createElement(O.a,{theme:O.c,text:'<div class="ebf-card-container row">\n  <div class="col-lg-4 col-md-6 col-sm-12 col">\n      <div class="ebf-card-summary card">\n        <div class="card-body">\n            <div class="list-group list-group-flush">\n              <div class="list-group-item"><span>Besitzer:</span> Carole Rosario</div>\n              <div class="list-group-item"><span>eMail:</span> carolerosario@ebf.com</div>\n              <div class="list-group-item"><span>Kartenprofil:</span> 000001-3972834-2</div>\n              <div class="list-group-item"><span>Telefonnummer:</span> +49-175-5558-994</div>\n              <div class="eid-color list-group-item"><span>EID:</span> 984654</div>\n            </div>\n        </div>\n      </div>\n  </div>\n</div>',language:"jsx",showLineNumbers:!0,wrapLines:!0,codeBlock:!0})),c.a.createElement(z.a,{h:"2",id:"summary-cards-variation"},"Summary Cards Variation"),c.a.createElement(j.a,{className:"ebf-card-container"},c.a.createElement(B.a,{className:"col-12"},c.a.createElement(S,{className:"ebf-card-summary ebf-card-summary-horizontal mt-3"},c.a.createElement(S.Body,null,c.a.createElement(P.a,{variant:"flush"},c.a.createElement(P.a,{variant:"flush",className:"summary-horizontal-container name-mail-container"},c.a.createElement(P.a.Item,null,c.a.createElement("span",null,"Besitzer:")," Carole Rosario"),c.a.createElement(P.a.Item,null,c.a.createElement("span",null,"eMail:")," carolerosario@ebf.com")),c.a.createElement(P.a,{variant:"flush",className:"summary-horizontal-container"},c.a.createElement(P.a.Item,null,c.a.createElement("span",null,"Kartenprofil:")," 000001-3972834-2"),c.a.createElement(P.a.Item,null,c.a.createElement("span",null,"Telefonnummer:")," +49-175-5558-994"),c.a.createElement(P.a.Item,{className:"eid-color"},c.a.createElement("span",null,"EID:")," 984654"))))))),c.a.createElement("div",{className:"mb-3 copyblock-container"},c.a.createElement("div",null,c.a.createElement("h3",null,"Code example")),c.a.createElement(O.a,{theme:O.c,text:'<div class="ebf-card-container row">\n  <div class="col-12 col">\n      <div class="ebf-card-summary ebf-card-summary-horizontal mt-3 card">\n        <div class="card-body">\n            <div class="list-group list-group-flush">\n              <div class="summary-horizontal-container name-mail-container list-group list-group-flush">\n                  <div class="list-group-item"><span>Besitzer:</span> Carole Rosario</div>\n                  <div class="list-group-item"><span>eMail:</span> carolerosario@ebf.com</div>\n              </div>\n              <div class="summary-horizontal-container list-group list-group-flush">\n                  <div class="list-group-item"><span>Kartenprofil:</span> 000001-3972834-2</div>\n                  <div class="list-group-item"><span>Telefonnummer:</span> +49-175-5558-994</div>\n                  <div class="eid-color list-group-item"><span>EID:</span> 984654</div>\n              </div>\n            </div>\n        </div>\n      </div>\n  </div>\n</div>',language:"jsx",showLineNumbers:!0,wrapLines:!0,codeBlock:!0})),c.a.createElement(z.a,{h:"2",id:"cards-option"},"Cards Option"),c.a.createElement("p",null,"In order to work properly, ",c.a.createElement("code",null,"ebf-card-select")," sholud have ",c.a.createElement("code",null,"card-select")," class appended to element."),c.a.createElement(r,null,c.a.createElement(S,{className:"ebf-card-select ebf-card-option card-select mt-3"},c.a.createElement("i",{className:"option-select-icon ebf ebf-check-mark-circle-full-fill"}),c.a.createElement(S.Body,null,c.a.createElement(S.Title,{className:"mb-1 font-weight-bold"},"Card Title Example"),c.a.createElement(S.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content."))),c.a.createElement(S,{className:"ebf-card-select ebf-card-option mt-3"},c.a.createElement("i",{className:"option-select-icon ebf ebf-check-mark-circle-full-fill"}),c.a.createElement(S.Body,null,c.a.createElement(S.Title,{className:"mb-1 font-weight-bold"},"Card Title Example"),c.a.createElement(S.Text,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")))),c.a.createElement("div",{className:"mb-3 copyblock-container"},c.a.createElement("div",null,c.a.createElement("h3",null,"Code example")),c.a.createElement(O.a,{theme:O.c,text:'<div class="card-deck">\n  <div class="ebf-card-select ebf-card-option card-select mt-3 card">\n      <i class="option-select-icon ebf ebf-check-mark-circle-full-fill"></i>\n      <div class="card-body">\n        <div class="mb-1 font-weight-bold card-title h5">Card Title Example</div>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n      </div>\n  </div>\n  <div class="ebf-card-select ebf-card-option mt-3 card">\n      <i class="option-select-icon ebf ebf-check-mark-circle-full-fill"></i>\n      <div class="card-body">\n        <div class="mb-1 font-weight-bold card-title h5">Card Title Example</div>\n        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n      </div>\n  </div>\n</div>\n         ',language:"jsx",showLineNumbers:!0,wrapLines:!0,codeBlock:!0})),c.a.createElement(z.a,{h:"2",id:"cards-option"},"Cards Product"),c.a.createElement(r,null,c.a.createElement(S,{className:"ebf-card-select ebf-card-product hoverable-card  mt-5"},c.a.createElement(S.Body,null,c.a.createElement(j.a,null,c.a.createElement(B.a,{className:"image-row",md:5,xl:4},c.a.createElement(p,{className:"align-self-center",src:"https://via.placeholder.com/244x512/2494c5/fff","data-src":"holder.js/244x512"})),c.a.createElement(B.a,{md:7,xl:8},c.a.createElement(S.Title,{className:"mb-2 font-weight-normal"},"Apple iPhone 11 schwarz"),c.a.createElement(S.Text,{className:"mb-4"},"Apple iPhone SE 64 GB Schwarz Lieferumfang - iPhone mit iOS 13 - EarPods mit Lightning Anschluss - Lightning auf USB Kabel - USB Power Adapter - Dokumentation"),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h4",{color:"primary"},"116,93 €"),c.a.createElement(L.a,{size:"sm",variant:"primary"},"Mehr Details")))))),c.a.createElement(S,{className:"ebf-card-select ebf-card-product hoverable-card  mt-5"},c.a.createElement(S.Body,null,c.a.createElement(j.a,null,c.a.createElement(B.a,{className:"image-row",md:5,xl:4},c.a.createElement(p,{className:"align-self-center",src:"https://via.placeholder.com/244x512/2494c5/fff","data-src":"holder.js/244x512"})),c.a.createElement(B.a,{md:7,xl:8},c.a.createElement(S.Title,{className:"mb-2 font-weight-normal"},"Apple iPhone 11 schwarz"),c.a.createElement(S.Text,{className:"mb-4"},"Apple iPhone SE 64 GB Schwarz Lieferumfang - iPhone mit iOS 13 - EarPods mit Lightning Anschluss - Lightning auf USB Kabel - USB Power Adapter - Dokumentation"),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h4",{color:"primary"},"116,93 €"),c.a.createElement(L.a,{size:"sm",variant:"primary"},"Mehr Details"))))))),c.a.createElement(r,null,c.a.createElement(S,{className:"ebf-card-select ebf-card-product hoverable-card  mt-5"},c.a.createElement(S.Body,null,c.a.createElement(j.a,null,c.a.createElement(B.a,{className:"image-row",md:5,xl:4},c.a.createElement(p,{className:"align-self-center",src:"https://via.placeholder.com/244x512/2494c5/fff","data-src":"holder.js/244x512"})),c.a.createElement(B.a,{md:7,xl:8},c.a.createElement(S.Title,{className:"mb-2 font-weight-normal"},"Apple iPhone 11 schwarz"),c.a.createElement(S.Text,{className:"mb-4"},"Apple iPhone SE 64 GB Schwarz Lieferumfang - iPhone mit iOS 13 - EarPods mit Lightning Anschluss - Lightning auf USB Kabel - USB Power Adapter - Dokumentation"),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h4",{color:"primary"},"116,93 €"),c.a.createElement(L.a,{size:"sm",variant:"primary"},"Mehr Details")))))),c.a.createElement(S,{className:"ebf-card-select ebf-card-product hoverable-card  mt-5"},c.a.createElement(S.Body,null,c.a.createElement(j.a,null,c.a.createElement(B.a,{className:"image-row",md:5,xl:4},c.a.createElement(p,{className:"align-self-center",src:"https://via.placeholder.com/244x512/2494c5/fff","data-src":"holder.js/244x512"})),c.a.createElement(B.a,{md:7,xl:8},c.a.createElement(S.Title,{className:"mb-2 font-weight-normal"},"Apple iPhone 11 schwarz"),c.a.createElement(S.Text,{className:"mb-4"},"Apple iPhone SE 64 GB Schwarz Lieferumfang - iPhone mit iOS 13 - EarPods mit Lightning Anschluss - Lightning auf USB Kabel - USB Power Adapter - Dokumentation"),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("h4",{color:"primary"},"116,93 €"),c.a.createElement(L.a,{size:"sm",variant:"primary"},"Mehr Details"))))))))}))},U1MP:function(e,a,t){"use strict";var l=t("k1TG"),c=t("q1tI"),n=t.n(c),r=t("TSYQ"),s=t.n(r);a.a=function(e){return n.a.forwardRef((function(a,t){return n.a.createElement("div",Object(l.a)({},a,{ref:t,className:s()(a.className,e)}))}))}},sjrs:function(e,a,t){"use strict";var l=t("k1TG"),c=t("8o2o"),n=t("TSYQ"),r=t.n(n),s=t("q1tI"),i=t.n(s),m=(t("2W6z"),t("JCAc")),d=t("vUet"),o=t("rQNl"),u=t("VWqr"),b=t("ILyh"),f={variant:void 0,active:!1,disabled:!1},p=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,m=e.disabled,o=e.className,f=e.variant,p=e.action,h=e.as,v=e.eventKey,E=e.onClick,x=Object(c.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(d.a)(t,"list-group-item");var k=Object(s.useCallback)((function(e){if(m)return e.preventDefault(),void e.stopPropagation();E&&E(e)}),[m,E]);return i.a.createElement(u.a,Object(l.a)({ref:a},x,{eventKey:Object(b.b)(v||null,x.href),as:h||(p?x.href?"a":"button":"div"),onClick:k,className:r()(o,t,n&&"active",m&&"disabled",f&&t+"-"+f,p&&t+"-action")}))}));p.defaultProps=f,p.displayName="ListGroupItem";var h=p,v={variant:void 0,horizontal:void 0},E=i.a.forwardRef((function(e,a){var t,n=Object(m.a)(e,{activeKey:"onSelect"}),s=n.className,u=n.bsPrefix,b=n.variant,f=n.horizontal,p=n.as,h=void 0===p?"div":p,v=Object(c.a)(n,["className","bsPrefix","variant","horizontal","as"]),E=Object(d.a)(u,"list-group");return t=f?!0===f?"horizontal":"horizontal-"+f:null,i.a.createElement(o.a,Object(l.a)({ref:a},v,{as:h,className:r()(s,E,b&&E+"-"+b,t&&E+"-"+t)}))}));E.defaultProps=v,E.displayName="ListGroup",E.Item=h;a.a=E}}]);
//# sourceMappingURL=component---src-pages-components-cards-js-1bc0fee4e8d14d8eb377.js.map