(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[6144],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55199:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(67294),o=n(86010),a=n(33084),l=n(57343),c=n(39130);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var s=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&b(e,n,t[n]);return e},v=(e,t)=>p(e,u(t)),g=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n};function h(e){var t=e,{as:n,id:s}=t,p=g(t,["as","id"]);const{navbar:{hideOnScroll:u}}=(0,l.L)();if("h1"===n||!s)return r.createElement(n,v(y({},p),{id:void 0}));const m=(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof p.children?p.children:s});return r.createElement(n,v(y({},p),{className:(0,o.Z)("anchor",u?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,p.className),id:s}),p.children,r.createElement(c.Z,{className:"hash-link",to:`#${s}`,"aria-label":m,title:m},"\u200b"))}},26144:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Cn});var r=n(67294),o=n(3905),a=n(68333),l=Object.defineProperty,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};var d=n(54939),f=n(86010),b=n(97353),y=n(57343);function v(){const{prism:e}=(0,y.L)(),{colorMode:t}=(0,b.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var g=n(83631),h=n(87594),O=n.n(h);const E=new RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),j=new RegExp("\\{(?<range>[\\d,-]+)\\}"),w={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){const n=e.map((e=>{const{start:n,end:r}=w[e];return`(?:${n}\\s*(${t.flatMap((e=>{var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function P(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&j.test(a)){const e=a.match(j).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=O()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(w),t)}}(r,o),c=n.split("\n"),i=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),s=Object.fromEntries(o.filter((e=>e.line)).map((({className:e,line:t})=>[t,e]))),p=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.start,e]))),u=Object.fromEntries(o.filter((e=>e.block)).map((({className:e,block:t})=>[t.end,e])));for(let d=0;d<c.length;){const e=c[d].match(l);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));s[t]?i[s[t]].range+=`${d},`:p[t]?i[p[t]].start=d:u[t]&&(i[u[t]].range+=`${i[u[t]].start}-${d-1},`),c.splice(d,1)}n=c.join("\n");const m={};return Object.entries(i).forEach((([e,{range:t}])=>{O()(t).forEach((t=>{null!=m[t]||(m[t]=[]),m[t].push(e)}))})),{lineClassNames:m,code:n}}const N={codeBlockContainer:"codeBlockContainer_Ckt0"};var C=Object.defineProperty,B=Object.defineProperties,T=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&I(e,n,t[n]);if(x)for(var n of x(t))L.call(t,n)&&I(e,n,t[n]);return e},D=(e,t)=>B(e,T(t)),Z=(e,t)=>{var n={};for(var r in e)S.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&x)for(var r of x(e))t.indexOf(r)<0&&L.call(e,r)&&(n[r]=e[r]);return n};function z(e){var t=e,{as:n}=t,o=Z(t,["as"]);const a=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((([e,r])=>{const o=t[e];o&&"string"==typeof r&&(n[o]=r)})),n}(v());return r.createElement(n,D(_({},o),{style:a,className:(0,f.Z)(o.className,N.codeBlockContainer,g.k.common.codeBlock)}))}const A={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function H({children:e,className:t}){return r.createElement(z,{as:"pre",tabIndex:0,className:(0,f.Z)(A.codeBlockStandalone,"thin-scrollbar",t)},r.createElement("code",{className:A.codeBlockLines},e))}var M=n(21651);const W={attributes:!0,characterData:!0,childList:!0,subtree:!0};function R(e,t){const[n,o]=(0,r.useState)(),a=(0,r.useCallback)((()=>{var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((()=>{a()}),[a]),function(e,t,n=W){const o=(0,M.zX)(t),a=(0,M.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,a),()=>t.disconnect()}),[e,o,a])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),a())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const V={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var $={Prism:n(87410).Z,theme:V};function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(){return q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}var G=/\r\n|\r|\n/,U=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},Q=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=q({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=q({},n,{backgroundColor:null}),o};function X(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const J=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),F(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?Q(e.theme,e.language):void 0;return t.themeDict=n})),F(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=q({},X(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?q({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),F(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),F(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=q({},X(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?q({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),F(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,p=t[l],u=n[l][a];if("string"==typeof u?(p=l>0?p:["plain"],s=u):(p=Y(p,u.type),u.alias&&(p=Y(p,u.alias)),s=u.content),"string"==typeof s){var m=s.split(G),d=m.length;c.push({types:p,content:m[0]});for(var f=1;f<d;f++)U(c),i.push(c=[]),c.push({types:p,content:m[f]})}else l++,t.push(p),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return U(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),K={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};var ee=Object.defineProperty,te=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,oe=(e,t,n)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ae=(e,t)=>{for(var n in t||(t={}))ne.call(t,n)&&oe(e,n,t[n]);if(te)for(var n of te(t))re.call(t,n)&&oe(e,n,t[n]);return e};function le({line:e,classNames:t,showLineNumbers:n,getLineProps:o,getTokenProps:a}){1===e.length&&"\n"===e[0].content&&(e[0].content="");const l=o({line:e,className:(0,f.Z)(t,n&&K.codeLine)}),c=e.map(((e,t)=>r.createElement("span",ae({key:t},a({token:e,key:t})))));return r.createElement("span",ae({},l),n?r.createElement(r.Fragment,null,r.createElement("span",{className:K.codeLineNumber}),r.createElement("span",{className:K.codeLineContent},c)):c,r.createElement("br",null))}var ce=n(33084);const ie={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function se({code:e,className:t}){const[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const o=document.getSelection();let a=!1;o.rangeCount>0&&(a=o.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}n.remove(),a&&(o.removeAllRanges(),o.addRange(a)),r&&r.focus()}(e),o(!0),a.current=window.setTimeout((()=>{o(!1)}),1e3)}),[e]);return(0,r.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),r.createElement("button",{type:"button","aria-label":n?(0,ce.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,ce.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,ce.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,f.Z)("clean-btn",t,ie.copyButton,n&&ie.copyButtonCopied),onClick:l},r.createElement("span",{className:ie.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:ie.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:ie.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const pe={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function ue({className:e,onClick:t,isEnabled:n}){const o=(0,ce.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:t,className:(0,f.Z)("clean-btn",e,n&&pe.wordWrapButtonEnabled),"aria-label":o,title:o},r.createElement("svg",{className:pe.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}var me=Object.defineProperty,de=Object.defineProperties,fe=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ge=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,he=(e,t)=>{for(var n in t||(t={}))ye.call(t,n)&&ge(e,n,t[n]);if(be)for(var n of be(t))ve.call(t,n)&&ge(e,n,t[n]);return e},Oe=(e,t)=>de(e,fe(t));function Ee({children:e,className:t="",metastring:n,title:o,showLineNumbers:a,language:l}){var c;const{prism:{defaultLanguage:i,magicComments:s}}=(0,y.L)(),p=null!=(c=null!=l?l:function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return null==t?void 0:t.replace(/language-/,"")}(t))?c:i,u=v(),m=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),l=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),c=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return R(a,c),(0,r.useEffect)((()=>{c()}),[e,c]),(0,r.useEffect)((()=>(window.addEventListener("resize",c,{passive:!0}),()=>{window.removeEventListener("resize",c)})),[c]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:l}}(),d=function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.match(E))?void 0:t.groups.title)?n:""}(n)||o,{lineClassNames:b,code:g}=P(e,{metastring:n,language:p,magicComments:s}),h=null!=a?a:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(n);return r.createElement(z,{as:"div",className:(0,f.Z)(t,p&&!t.includes(`language-${p}`)&&`language-${p}`)},d&&r.createElement("div",{className:A.codeBlockTitle},d),r.createElement("div",{className:A.codeBlockContent},r.createElement(J,Oe(he({},$),{theme:u,code:g,language:null!=p?p:"text"}),(({className:e,tokens:t,getLineProps:n,getTokenProps:o})=>r.createElement("pre",{tabIndex:0,ref:m.codeBlockRef,className:(0,f.Z)(e,A.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,f.Z)(A.codeBlockLines,h&&A.codeBlockLinesWithNumbering)},t.map(((e,t)=>r.createElement(le,{key:t,line:e,getLineProps:n,getTokenProps:o,classNames:b[t],showLineNumbers:h}))))))),r.createElement("div",{className:A.buttonGroup},(m.isEnabled||m.isCodeScrollable)&&r.createElement(ue,{className:A.codeButton,onClick:()=>m.toggle(),isEnabled:m.isEnabled}),r.createElement(se,{className:A.codeButton,code:g}))))}var je=Object.defineProperty,we=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ce=(e,t)=>{for(var n in t||(t={}))ke.call(t,n)&&Ne(e,n,t[n]);if(we)for(var n of we(t))Pe.call(t,n)&&Ne(e,n,t[n]);return e},Be=(e,t)=>{var n={};for(var r in e)ke.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&we)for(var r of we(e))t.indexOf(r)<0&&Pe.call(e,r)&&(n[r]=e[r]);return n};function Te(e){var t=e,{children:n}=t,o=Be(t,["children"]);const a=(0,d.Z)(),l=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(n),c="string"==typeof l?Ee:H;return r.createElement(c,Ce({key:String(a)},o),l)}var xe=Object.defineProperty,Se=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,_e=(e,t,n)=>t in e?xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,De=(e,t)=>{for(var n in t||(t={}))Le.call(t,n)&&_e(e,n,t[n]);if(Se)for(var n of Se(t))Ie.call(t,n)&&_e(e,n,t[n]);return e};var Ze=n(39130),ze=Object.defineProperty,Ae=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,We=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Re=(e,t)=>{for(var n in t||(t={}))He.call(t,n)&&We(e,n,t[n]);if(Ae)for(var n of Ae(t))Me.call(t,n)&&We(e,n,t[n]);return e};var Ve=Object.defineProperty,$e=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable,Ge=(e,t,n)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ue=(e,t)=>{for(var n in t||(t={}))Fe.call(t,n)&&Ge(e,n,t[n]);if($e)for(var n of $e(t))qe.call(t,n)&&Ge(e,n,t[n]);return e};var Ye=n(65897);const Qe={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var Xe=Object.defineProperty,Je=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,et=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,rt=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t)=>{for(var n in t||(t={}))tt.call(t,n)&&rt(e,n,t[n]);if(et)for(var n of et(t))nt.call(t,n)&&rt(e,n,t[n]);return e},at=(e,t)=>Je(e,Ke(t)),lt=(e,t)=>{var n={};for(var r in e)tt.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&et)for(var r of et(e))t.indexOf(r)<0&&nt.call(e,r)&&(n[r]=e[r]);return n};function ct(e){return!!e&&("SUMMARY"===e.tagName||ct(e.parentElement))}function it(e,t){return!!e&&(e===t||it(e.parentElement,t))}function st(e){var t=e,{summary:n,children:o}=t,a=lt(t,["summary","children"]);const l=(0,d.Z)(),c=(0,r.useRef)(null),{collapsed:i,setCollapsed:s}=(0,Ye.u)({initialState:!a.open}),[p,u]=(0,r.useState)(a.open);return r.createElement("details",at(ot({},a),{ref:c,open:p,"data-collapsed":i,className:(0,f.Z)(Qe.details,l&&Qe.isBrowser,a.className),onMouseDown:e=>{ct(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ct(t)&&it(t,c.current)&&(e.preventDefault(),i?(s(!1),u(!0)):s(!0))}}),null!=n?n:r.createElement("summary",null,"Details"),r.createElement(Ye.z,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{s(e),u(!e)}},r.createElement("div",{className:Qe.collapsibleContent},o)))}const pt={details:"details_b_Ee"};var ut=Object.defineProperty,mt=Object.defineProperties,dt=Object.getOwnPropertyDescriptors,ft=Object.getOwnPropertySymbols,bt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable,vt=(e,t,n)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gt=(e,t)=>{for(var n in t||(t={}))bt.call(t,n)&&vt(e,n,t[n]);if(ft)for(var n of ft(t))yt.call(t,n)&&vt(e,n,t[n]);return e},ht=(e,t)=>mt(e,dt(t)),Ot=(e,t)=>{var n={};for(var r in e)bt.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&ft)for(var r of ft(e))t.indexOf(r)<0&&yt.call(e,r)&&(n[r]=e[r]);return n};const Et="alert alert--info";function jt(e){var t=Ot(e,[]);return r.createElement(st,ht(gt({},t),{className:(0,f.Z)(Et,pt.details,t.className)}))}var wt=Object.defineProperty,kt=Object.defineProperties,Pt=Object.getOwnPropertyDescriptors,Nt=Object.getOwnPropertySymbols,Ct=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable,Tt=(e,t,n)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xt=(e,t)=>{for(var n in t||(t={}))Ct.call(t,n)&&Tt(e,n,t[n]);if(Nt)for(var n of Nt(t))Bt.call(t,n)&&Tt(e,n,t[n]);return e},St=(e,t)=>kt(e,Pt(t));var Lt=n(55199),It=Object.defineProperty,_t=Object.getOwnPropertySymbols,Dt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable,zt=(e,t,n)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,At=(e,t)=>{for(var n in t||(t={}))Dt.call(t,n)&&zt(e,n,t[n]);if(_t)for(var n of _t(t))Zt.call(t,n)&&zt(e,n,t[n]);return e};function Ht(e){return r.createElement(Lt.Z,At({},e))}const Mt={containsTaskList:"containsTaskList_mC6p"};var Wt=Object.defineProperty,Rt=Object.defineProperties,Vt=Object.getOwnPropertyDescriptors,$t=Object.getOwnPropertySymbols,Ft=Object.prototype.hasOwnProperty,qt=Object.prototype.propertyIsEnumerable,Gt=(e,t,n)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ut=(e,t)=>{for(var n in t||(t={}))Ft.call(t,n)&&Gt(e,n,t[n]);if($t)for(var n of $t(t))qt.call(t,n)&&Gt(e,n,t[n]);return e},Yt=(e,t)=>Rt(e,Vt(t));const Qt={img:"img_ev3q"};var Xt=Object.defineProperty,Jt=Object.defineProperties,Kt=Object.getOwnPropertyDescriptors,en=Object.getOwnPropertySymbols,tn=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable,rn=(e,t,n)=>t in e?Xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,on=(e,t)=>{for(var n in t||(t={}))tn.call(t,n)&&rn(e,n,t[n]);if(en)for(var n of en(t))nn.call(t,n)&&rn(e,n,t[n]);return e},an=(e,t)=>Jt(e,Kt(t));const ln={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};var cn=Object.defineProperty,sn=Object.defineProperties,pn=Object.getOwnPropertyDescriptors,un=Object.getOwnPropertySymbols,mn=Object.prototype.hasOwnProperty,dn=Object.prototype.propertyIsEnumerable,fn=(e,t,n)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bn=(e,t)=>{for(var n in t||(t={}))mn.call(t,n)&&fn(e,n,t[n]);if(un)for(var n of un(t))dn.call(t,n)&&fn(e,n,t[n]);return e},yn=(e,t)=>sn(e,pn(t));const vn={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(ce.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(ce.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(ce.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(ce.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(ce.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},gn={secondary:"note",important:"info",success:"tip",warning:"danger"};function hn(e){var t;const{mdxAdmonitionTitle:n,rest:o}=function(e){const t=r.Children.toArray(e),n=t.find((e=>{var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return yn(bn({},e),{title:null!=(t=e.title)?t:n,children:o})}var On=Object.defineProperty,En=Object.getOwnPropertySymbols,jn=Object.prototype.hasOwnProperty,wn=Object.prototype.propertyIsEnumerable,kn=(e,t,n)=>t in e?On(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Pn=(e,t)=>{for(var n in t||(t={}))jn.call(t,n)&&kn(e,n,t[n]);if(En)for(var n of En(t))wn.call(t,n)&&kn(e,n,t[n]);return e};const Nn={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){var t;if((null==(t=e.props)?void 0:t.mdxType)&&e.props.originalType){const t=e.props,{mdxType:n,originalType:o}=t,a=m(t,["mdxType","originalType"]);return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(a.Z,u({},e),t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",De({},e)):r.createElement(Te,De({},e))},a:function(e){return r.createElement(Ze.Z,Re({},e))},pre:function(e){var t;return r.createElement(Te,Ue({},(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Ue({},e)))},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>{var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(jt,St(xt({},e),{summary:n}),o)},ul:function(e){return r.createElement("ul",Yt(Ut({},e),{className:(t=e.className,(0,f.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Mt.containsTaskList))}));var t},img:function(e){return r.createElement("img",an(on({loading:"lazy"},e),{className:(t=e.className,(0,f.Z)(t,Qt.img))}));var t},h1:e=>r.createElement(Ht,Pn({as:"h1"},e)),h2:e=>r.createElement(Ht,Pn({as:"h2"},e)),h3:e=>r.createElement(Ht,Pn({as:"h3"},e)),h4:e=>r.createElement(Ht,Pn({as:"h4"},e)),h5:e=>r.createElement(Ht,Pn({as:"h5"},e)),h6:e=>r.createElement(Ht,Pn({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:o,icon:a}=hn(e),l=function(e){var t;const n=null!=(t=gn[e])?t:e,r=vn[n];return r||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),vn.info)}(n),c=null!=o?o:l.label,{iconComponent:i}=l,s=null!=a?a:r.createElement(i,null);return r.createElement("div",{className:(0,f.Z)(g.k.common.admonition,g.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,ln.admonition)},r.createElement("div",{className:ln.admonitionHeading},r.createElement("span",{className:ln.admonitionIcon},s),c),r.createElement("div",{className:ln.admonitionContent},t))},mermaid:()=>null};function Cn({children:e}){return r.createElement(o.Zo,{components:Nn},e)}},87594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);