(window.webpackJsonp=window.webpackJsonp||[]).push([[154,86,157],{"1K8B":function(t,e,n){"use strict";function a(t){!function(t){var e=t.util.clone(t.languages.javascript);t.languages.jsx=t.languages.extend("markup",e),t.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},t.languages.jsx.tag),t.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var n=function t(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(t).join(""):""};t.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||function e(a){for(var s=[],i=0;i<a.length;i++){var o=a[i],r=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===n(o.content[0].content[1])&&s.pop():"/>"===o.content[o.content.length-1].content||s.push({tagName:n(o.content[0].content[1]),openedBraces:0}):s.length>0&&"punctuation"===o.type&&"{"===o.content?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?s[s.length-1].openedBraces--:r=!0),(r||"string"==typeof o)&&s.length>0&&0===s[s.length-1].openedBraces){var g=n(o);i<a.length-1&&("string"==typeof a[i+1]||"plain-text"===a[i+1].type)&&(g+=n(a[i+1]),a.splice(i+1,1)),i>0&&("string"==typeof a[i-1]||"plain-text"===a[i-1].type)&&(g=n(a[i-1])+g,a.splice(i-1,1),i--),a[i]=new t.Token("plain-text",g,null,g)}o.content&&"string"!=typeof o.content&&e(o.content)}}(e.tokens)}))}(t)}n("bWfx"),t.exports=a,a.displayName="jsx",a.aliases=[]},T09G:function(t,e,n){"use strict";var a=n("1K8B"),s=n("WUdu");function i(t){t.register(a),t.register(s);var e=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",e)}t.exports=i,i.displayName="tsx",i.aliases=[]},WUdu:function(t,e,n){"use strict";function a(t){t.languages.typescript=t.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),t.languages.ts=t.languages.typescript}t.exports=a,a.displayName="typescript",a.aliases=["ts"]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx-2806b0317bff832963a7.js.map