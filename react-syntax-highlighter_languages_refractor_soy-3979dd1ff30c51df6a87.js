(window.webpackJsonp=window.webpackJsonp||[]).push([[153,105],{"0iGP":function(e,t,n){"use strict";function a(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,o){if(n.language===a){var i=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"==typeof o&&!o(e))return e;for(var r,l=i.length;-1!==n.code.indexOf(r=t(a,l));)++l;return i[l]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,o=Object.keys(n.tokenStack);!function i(l){for(var s=0;s<l.length&&!(r>=o.length);s++){var p=l[s];if("string"==typeof p||p.content&&"string"==typeof p.content){var c=o[r],u=n.tokenStack[c],g="string"==typeof p?p:p.content,d=t(a,c),f=g.indexOf(d);if(f>-1){++r;var m=g.substring(0,f),b=new e.Token(a,e.tokenize(u,n.grammar),"language-"+a,u),k=g.substring(f+d.length),h=[];m&&h.push.apply(h,i([m])),h.push(b),k&&h.push.apply(h,i([k])),"string"==typeof p?l.splice.apply(l,[s,1].concat(h)):p.content=h}}else p.content&&i(p.content)}return l}(n.tokens)}}}})}(e)}n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("V+eJ"),n("pIFo"),n("WLL4"),e.exports=a,a.displayName="markupTemplating",a.aliases=[]},"4UXz":function(e,t,n){"use strict";var a=n("0iGP");function r(e){e.register(a),function(e){var t=/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,n=/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;e.languages.soy={comment:[/\/\*[\s\S]*?\*\//,{pattern:/(\s)\/\/.*/,lookbehind:!0,greedy:!0}],"command-arg":{pattern:/({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,lookbehind:!0,alias:"string",inside:{punctuation:/\./}},parameter:{pattern:/({+\/?\s*@?param\??\s+)\.?[\w.]+/,lookbehind:!0,alias:"variable"},keyword:[{pattern:/({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,lookbehind:!0},/\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/],delimiter:{pattern:/^{+\/?|\/?}+$/,alias:"punctuation"},property:/\w+(?==)/,variable:{pattern:/\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,inside:{string:{pattern:t,greedy:!0},number:n,punctuation:/[\[\].?]/}},string:{pattern:t,greedy:!0},function:[/\w+(?=\()/,{pattern:/(\|[^\S\r\n]*)\w+/,lookbehind:!0}],boolean:/\b(?:true|false)\b/,number:n,operator:/\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,punctuation:/[{}()\[\]|.,:]/},e.hooks.add("before-tokenize",(function(t){var n=!1;e.languages["markup-templating"].buildPlaceholders(t,"soy",/{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g,(function(e){return"{/literal}"===e&&(n=!1),!n&&("{literal}"===e&&(n=!0),!0)}))})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"soy")}))}(e)}e.exports=r,r.displayName="soy",r.aliases=[]},WLL4:function(e,t,n){var a=n("XKFU");a(a.S+a.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_soy-3979dd1ff30c51df6a87.js.map