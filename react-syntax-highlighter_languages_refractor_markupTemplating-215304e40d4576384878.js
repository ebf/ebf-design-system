(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{"0iGP":function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,c=i.length;-1!==t.code.indexOf(o=n(a,c));)++c;return i[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(c){for(var p=0;p<c.length&&!(o>=r.length);p++){var u=c[p];if("string"==typeof u||u.content&&"string"==typeof u.content){var s=r[o],g=t.tokenStack[s],l="string"==typeof u?u:u.content,f=n(a,s),k=l.indexOf(f);if(k>-1){++o;var d=l.substring(0,k),m=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),h=l.substring(k+f.length),v=[];d&&v.push.apply(v,i([d])),v.push(m),h&&v.push.apply(v,i([h])),"string"==typeof u?c.splice.apply(c,[p,1].concat(v)):u.content=v}}else u.content&&i(u.content)}return c}(t.tokens)}}}})}(e)}t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("V+eJ"),t("pIFo"),t("WLL4"),e.exports=a,a.displayName="markupTemplating",a.aliases=[]},WLL4:function(e,n,t){var a=t("XKFU");a(a.S+a.F*!t("nh4g"),"Object",{defineProperties:t("FJW5")})}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating-215304e40d4576384878.js.map