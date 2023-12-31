"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[2056],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>d});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},N="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,l=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),N=o(t),k=s,d=N["".concat(l,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(d,p(p({ref:e},i),{},{components:t})):n.createElement(d,p({ref:e},i))}));function d(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=k;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[N]="string"==typeof a?a:s,p[1]=r;for(var o=2;o<m;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},44308:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>f,contentTitle:()=>h,default:()=>w,frontMatter:()=>d,metadata:()=>g,toc:()=>u});var n=t(3905),s=Object.defineProperty,m=Object.defineProperties,p=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(a,e,t)=>e in a?s(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,N=(a,e)=>{for(var t in e||(e={}))l.call(e,t)&&i(a,t,e[t]);if(r)for(var t of r(e))o.call(e,t)&&i(a,t,e[t]);return a},c=(a,e)=>m(a,p(e)),k=(a,e)=>{var t={};for(var n in a)l.call(a,n)&&e.indexOf(n)<0&&(t[n]=a[n]);if(null!=a&&r)for(var n of r(a))e.indexOf(n)<0&&o.call(a,n)&&(t[n]=a[n]);return t};const d={},h="\u6fc0\u6d3b\u51fd\u6570\u4eec",g={unversionedId:"appendix-1/[2]activation-functions",id:"appendix-1/[2]activation-functions",title:"\u6fc0\u6d3b\u51fd\u6570\u4eec",description:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6fc0\u6d3b\u51fd\u6570",source:"@site/docs/appendix-1/[2]activation-functions.md",sourceDirName:"appendix-1",slug:"/appendix-1/[2]activation-functions",permalink:"/appendix-1/[2]activation-functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u673a\u5668\u5b66\u4e60(?)\u672f\u8bed\u8868",permalink:"/appendix-1/[1]similar-vocabularies"},next:{title:"\u635f\u5931\u51fd\u6570\u4eec",permalink:"/appendix-1/[3]loss-functions"}},f={},u=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6fc0\u6d3b\u51fd\u6570",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6fc0\u6d3b\u51fd\u6570",level:2},{value:"\u5e38\u89c1\u7684\u6fc0\u6d3b\u51fd\u6570",id:"\u5e38\u89c1\u7684\u6fc0\u6d3b\u51fd\u6570",level:2},{value:"ReLU\u51fd\u6570",id:"relu\u51fd\u6570",level:3},{value:"Sigmoid\u51fd\u6570",id:"sigmoid\u51fd\u6570",level:3},{value:"tanh\u51fd\u6570",id:"tanh\u51fd\u6570",level:3}],x={toc:u},y="wrapper";function w(a){var e=a,{components:s}=e,m=k(e,["components"]);return(0,n.kt)(y,c(N(N({},x),m),{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",N({},{id:"\u6fc0\u6d3b\u51fd\u6570\u4eec"}),"\u6fc0\u6d3b\u51fd\u6570\u4eec"),(0,n.kt)("h2",N({},{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6fc0\u6d3b\u51fd\u6570"}),"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u6fc0\u6d3b\u51fd\u6570"),(0,n.kt)("p",null,"\u56e0\u4e3a\u7ebf\u6027\u6a21\u578b\u7684\u8868\u8fbe\u80fd\u529b\u4e0d\u591f\uff0c\u5f15\u5165\u6fc0\u6d3b\u51fd\u6570\u662f\u4e3a\u4e86\u6dfb\u52a0\u975e\u7ebf\u6027\u56e0\u7d20\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210311102706368",src:t(44723).Z,width:"600",height:"600"})),(0,n.kt)("p",null,"\u5728\u6ca1\u6709\u6fc0\u6d3b\u51fd\u6570\u7684\u795e\u7ecf\u7f51\u7edc\u4e2d\uff0c\u6bcf\u4e00\u5c42\u8f93\u51fa\u7684\u90fd\u662f\u4e0a\u4e00\u5c42\u8f93\u5165\u7684\u7ebf\u6027\u51fd\u6570\uff0c\u6240\u4ee5\u65e0\u8bba\u7f51\u7edc\u7ed3\u6784\u600e\u4e48\u642d\uff0c\u8f93\u51fa\u90fd\u662f\u8f93\u5165\u7684",(0,n.kt)("strong",{parentName:"p"},"\u7ebf\u6027\u7ec4\u5408"),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8fd9\u91cc\u5199\u56fe\u7247\u63cf\u8ff0",src:t(93906).Z,width:"720",height:"375"})),(0,n.kt)("p",null,"\u4e0a\u56fe\u4e2d\u662f\u4e00\u4e2a\u5355\u5c42\u611f\u77e5\u673a\u3002\u5355\u5c42\u611f\u77e5\u673a\u80fd\u591f\u5c06\u7a7a\u95f4\u7528\u76f4\u7ebf\u5212\u5206\u4e3a\u4e24\u4e2a\u533a\u57df\uff0c\u4ece\u800c\u83b7\u5f97\u4e00\u79cd\u7c7b\u4f3c\u4e8c\u5206\u7c7b\u7684\u80fd\u529b\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u591a\u4e2a\u611f\u77e5\u673a\u7684\u7ec4\u5408\uff0c\u83b7\u5f97\u66f4\u5f3a\u7684\u5206\u7c7b\u80fd\u529b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8fd9\u91cc\u5199\u56fe\u7247\u63cf\u8ff0",src:t(63837).Z,width:"720",height:"376"})),(0,n.kt)("p",null,"\u5f53\u591a\u4e2a\u611f\u77e5\u673a\u7ec4\u5408\u65f6\uff0c\u4f1a\u5728\u7a7a\u95f4\u5185\u753b\u51fa\u591a\u6839\u76f4\u7ebf\uff0c\u5c06\u7a7a\u95f4\u5206\u6210\u5f88\u591a\u4efd\uff0c\u6216\u662f\u5728\u7a7a\u95f4\u5185\u72ec\u7acb\u51fa\u4e00\u4e2a\u5c01\u95ed\u7684\u6709\u9650\u56fe\u5f62\u3002\u8fd9\u4f7f\u5f97\u611f\u77e5\u673a\u83b7\u5f97\u4e86\u66f4\u5f3a\u7684\u5206\u7c7b\u80fd\u529b\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u4e0a\u5982\u7684\u611f\u77e5\u673a\u8fdb\u884c\u7ec4\u5408\u8f93\u51fa\u7684\u7ed3\u679c\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u8fd9\u91cc\u5199\u56fe\u7247\u63cf\u8ff0",src:t(9860).Z,width:"890",height:"409"})),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c\u4e0d\u8bba\u600e\u4e48\u7ec4\u5408\uff0c\u90fd\u662f\u8f93\u51fa\u90fd\u662f\u8f93\u5165\u7684\u7ebf\u6027\u53d8\u6362\uff0c\u65e0\u6cd5\u505a\u5230\u80fd\u591f\u7528\u5728\u7a7a\u95f4\u5185\u753b\u51fa\u66f2\u7ebf\u6216\u662f\u66f4\u590d\u6742\u64cd\u4f5c\u7684\u975e\u7ebf\u6027\u5206\u7c7b\u3002"),(0,n.kt)("h2",N({},{id:"\u5e38\u89c1\u7684\u6fc0\u6d3b\u51fd\u6570"}),"\u5e38\u89c1\u7684\u6fc0\u6d3b\u51fd\u6570"),(0,n.kt)("h3",N({},{id:"relu\u51fd\u6570"}),"ReLU\u51fd\u6570"),(0,n.kt)("p",null,"ReLU\uff08rectified linear unit\uff09\u51fd\u6570\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u975e\u7ebf\u6027\u53d8\u6362\u3002\u7ed9\u5b9a\u5143\u7d20x\uff0c\u8be5\u51fd\u6570\u5b9a\u4e49\u4e3a$\\text{ReLU}(x) = \\max(x, 0) $"),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0cReLU\u51fd\u6570\u53ea\u4fdd\u7559\u6b63\u6570\u5143\u7d20\uff0c\u5e76\u5c06\u8d1f\u6570\u5143\u7d20\u6e05\u96f6\u3002\u4e3a\u4e86\u76f4\u89c2\u5730\u89c2\u5bdf\u8fd9\u4e00\u975e\u7ebf\u6027\u53d8\u6362\uff0c\u6211\u4eec\u5148\u5b9a\u4e49\u4e00\u4e2a\u7ed8\u56fe\u51fd\u6570",(0,n.kt)("inlineCode",{parentName:"p"},"xyplot"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-python"}),'import tensorflow as tf\nimport matplotlib.pyplot as plt\n\nx = tf.constant(range(-8, 8, 1))\nout = tf.nn.relu(x)\nplt.xlabel("x")\nplt.ylabel("reLU x")\nplt.plot(x, out)\nplt.show()\n')),(0,n.kt)("p",null,"\u4e0b\u56fe\u662f\u4f1a\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u7ed8\u5236\u51fa\u7684\u56fe\u5f62"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(43531).Z,width:"640",height:"480"})),(0,n.kt)("p",null,"\u53ef\u4ee5\u770b\u51fa\uff0c\u8be5\u51fd\u6570\u5b9a\u4e49\u4e3a ",(0,n.kt)("span",N({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-error",title:"ParseError: KaTeX parse error: Can't use function '$' in math mode at position 29: \u2026) = \\max(x, 0) $\u0332 \uff0c\u5728 $x>0",style:{color:"#cc0000"}}),"\\text{ReLU}(x) = \\max(x, 0) $ \uff0c\u5728 $x>0"))," \u5904\u51fd\u6570\u503c\u4e3a ",(0,n.kt)("span",N({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",N({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"x")),(0,n.kt)("annotation",N({parentName:"semantics"},{encoding:"application/x-tex"}),"x")))),(0,n.kt)("span",N({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"0.4306em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x")))))," \u672c\u8eab\u3002\u56e0\u6b64\u5728 ",(0,n.kt)("span",N({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",N({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",{parentName:"mrow"},">"),(0,n.kt)("mn",{parentName:"mrow"},"0")),(0,n.kt)("annotation",N({parentName:"semantics"},{encoding:"application/x-tex"}),"x>0")))),(0,n.kt)("span",N({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mrel"}),">"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}}))),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"0.6444em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"0")))))," \u5904\u7684\u68af\u5ea6\u5e94\u8be5\u662f1\u3002"),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u6253\u51fa\u5b83\u7684\u68af\u5ea6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-python"}),'x = tf.Variable(tf.cast(x, dtype=tf.float32))\nwith tf.GradientTape() as tape:\n    y = tf.nn.relu(x)\nplt.xlabel("x")\nplt.ylabel("(reLU x)\\\'")\ngrad = tape.gradient(y, x)\nplt.plot(x.numpy(), grad)\nplt.show()\n')),(0,n.kt)("p",null,"\u4e0b\u56fe\u662f\u4ee3\u7801\u6253\u5370\u51fa\u7684\u56fe\u5f62\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(96069).Z,width:"640",height:"480"})),(0,n.kt)("h3",N({},{id:"sigmoid\u51fd\u6570"}),"Sigmoid\u51fd\u6570"),(0,n.kt)("p",null,"sigmoid\u51fd\u6570\u53ef\u4ee5\u5c06\u5143\u7d20\u7684\u503c\u53d8\u6362\u52300\u548c1\u4e4b\u95f4\uff1a"),(0,n.kt)("div",N({},{className:"math math-display"}),(0,n.kt)("span",N({parentName:"div"},{className:"katex-display"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",N({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"sigmoid"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mn",{parentName:"mfrac"},"1"),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow"},"exp"),(0,n.kt)("mo",{parentName:"mrow"},"\u2061"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),")"))),(0,n.kt)("mi",N({parentName:"mrow"},{mathvariant:"normal"}),".")),(0,n.kt)("annotation",N({parentName:"semantics"},{encoding:"application/x-tex"}),"\\text{sigmoid}(x) = \\frac{1}{1 + \\exp(-x)}.")))),(0,n.kt)("span",N({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"sigmoid")),(0,n.kt)("span",N({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",N({parentName:"span"},{className:"mclose"}),")"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mrel"}),"="),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}}))),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"2.2574em",verticalAlign:"-0.936em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),(0,n.kt)("span",N({parentName:"span"},{className:"mopen nulldelimiter"})),(0,n.kt)("span",N({parentName:"span"},{className:"mfrac"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-t vlist-t2"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist",style:{height:"1.3214em"}}),(0,n.kt)("span",N({parentName:"span"},{style:{top:"-2.314em"}}),(0,n.kt)("span",N({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"1"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mbin"}),"+"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mop"}),"exp"),(0,n.kt)("span",N({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"\u2212"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",N({parentName:"span"},{className:"mclose"}),")"))),(0,n.kt)("span",N({parentName:"span"},{style:{top:"-3.23em"}}),(0,n.kt)("span",N({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"frac-line",style:{borderBottomWidth:"0.04em"}}))),(0,n.kt)("span",N({parentName:"span"},{style:{top:"-3.677em"}}),(0,n.kt)("span",N({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"1")))),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-s"}),"\u200b")),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist",style:{height:"0.936em"}}),(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",N({parentName:"span"},{className:"mclose nulldelimiter"}))),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),".")))))),(0,n.kt)("p",null,"sigmoid\u51fd\u6570\u5728\u65e9\u671f\u7684\u795e\u7ecf\u7f51\u7edc\u4e2d\u8f83\u4e3a\u666e\u904d\uff0c\u4f46\u5b83\u76ee\u524d\u9010\u6e10\u88ab\u66f4\u7b80\u5355\u7684ReLU\u51fd\u6570\u53d6\u4ee3\u3002\u5728\u540e\u9762\u201c\u5faa\u73af\u795e\u7ecf\u7f51\u7edc\u201d\u4e00\u7ae0\u4e2d\u6211\u4eec\u4f1a\u4ecb\u7ecd\u5982\u4f55\u5229\u7528\u5b83\u503c\u57df\u57280\u52301\u4e4b\u95f4\u8fd9\u4e00\u7279\u6027\u6765\u63a7\u5236\u4fe1\u606f\u5728\u795e\u7ecf\u7f51\u7edc\u4e2d\u7684\u6d41\u52a8\u3002\u4e0b\u9762\u7ed8\u5236\u4e86sigmoid\u51fd\u6570\u3002\u5f53\u8f93\u5165\u63a5\u8fd10\u65f6\uff0csigmoid\u51fd\u6570\u63a5\u8fd1\u7ebf\u6027\u53d8\u6362\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u7ed8\u5236sigmoid\u7684\u51fd\u6570\u56fe\u50cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-python"}),'import tensorflow as tf\nimport matplotlib.pyplot as plt\n\nx = tf.constant(range(-20, 20, 1))\nx = tf.cast(x,dtype=tf.float32)\nout = tf.nn.sigmoid(x)\nplt.xlabel("x")\nplt.ylabel("reLU x")\nplt.plot(x, out)\nplt.show()\n')),(0,n.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7ed8\u5236\u7684\u56fe\u50cf\u5982\u4e0b\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(11605).Z,width:"640",height:"480"})),(0,n.kt)("p",null,"\u4f9d\u636e\u94fe\u5f0f\u6cd5\u5219\uff0csigmoid\u51fd\u6570\u7684\u5bfc\u6570\u4e3a\uff1a"),(0,n.kt)("div",N({},{className:"math math-display"}),(0,n.kt)("span",N({parentName:"div"},{className:"katex-display"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",N({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msup",{parentName:"mrow"},(0,n.kt)("mtext",{parentName:"msup"},"sigmoid"),(0,n.kt)("mo",N({parentName:"msup"},{mathvariant:"normal",lspace:"0em",rspace:"0em"}),"\u2032")),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mtext",{parentName:"mrow"},"sigmoid"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),")"),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mo",N({parentName:"mrow"},{fence:"true"}),"("),(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mtext",{parentName:"mrow"},"sigmoid"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),")"),(0,n.kt)("mo",N({parentName:"mrow"},{fence:"true"}),")"))),(0,n.kt)("annotation",N({parentName:"semantics"},{encoding:"application/x-tex"}),"\\text{sigmoid}'(x) = \\text{sigmoid}(x)\\left(1-\\text{sigmoid}(x)\\right)")))),(0,n.kt)("span",N({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"1.0862em",verticalAlign:"-0.25em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"sigmoid")),(0,n.kt)("span",N({parentName:"span"},{className:"msupsub"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-t"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist",style:{height:"0.8362em"}}),(0,n.kt)("span",N({parentName:"span"},{style:{top:"-3.1473em",marginRight:"0.05em"}}),(0,n.kt)("span",N({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord mtight"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord mtight"}),"\u2032"))))))))),(0,n.kt)("span",N({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",N({parentName:"span"},{className:"mclose"}),")"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mrel"}),"="),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}}))),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"sigmoid")),(0,n.kt)("span",N({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",N({parentName:"span"},{className:"mclose"}),")"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.1667em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"minner"}),(0,n.kt)("span",N({parentName:"span"},{className:"mopen delimcenter",style:{top:"0em"}}),"("),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"1"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mbin"}),"\u2212"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"sigmoid")),(0,n.kt)("span",N({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",N({parentName:"span"},{className:"mclose"}),")"),(0,n.kt)("span",N({parentName:"span"},{className:"mclose delimcenter",style:{top:"0em"}}),")"))))))),(0,n.kt)("p",null,"\u4e0b\u9762\u7ed8\u5236\u4e86sigmoid\u51fd\u6570\u7684\u5bfc\u6570\u3002\u5f53\u8f93\u5165\u4e3a0\u65f6\uff0csigmoid\u51fd\u6570\u7684\u5bfc\u6570\u8fbe\u5230\u6700\u5927\u503c0.25\uff1b\u5f53\u8f93\u5165\u8d8a\u504f\u79bb0\u65f6\uff0csigmoid\u51fd\u6570\u7684\u5bfc\u6570\u8d8a\u63a5\u8fd10\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-python"}),'x = tf.Variable(tf.cast(x, dtype=tf.float32))\nwith tf.GradientTape() as tape:\n    y = tf.nn.sigmoid(x)\nplt.xlabel("x")\nplt.ylabel("(reLU x)\\\'")\ngrad = tape.gradient(y, x)\nplt.plot(x.numpy(), grad)\nplt.show()\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(42444).Z,width:"640",height:"480"})),(0,n.kt)("h3",N({},{id:"tanh\u51fd\u6570"}),"tanh\u51fd\u6570"),(0,n.kt)("p",null,"tanh\uff08\u53cc\u66f2\u6b63\u5207\uff09\u51fd\u6570\u53ef\u4ee5\u5c06\u5143\u7d20\u7684\u503c\u53d8\u6362\u5230-1\u548c1\u4e4b\u95f4\uff1a"),(0,n.kt)("div",N({},{className:"math math-display"}),(0,n.kt)("span",N({parentName:"div"},{className:"katex-display"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex"}),(0,n.kt)("span",N({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",N({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"tanh"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mi",{parentName:"mrow"},"exp"),(0,n.kt)("mo",{parentName:"mrow"},"\u2061"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),")")),(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow"},"exp"),(0,n.kt)("mo",{parentName:"mrow"},"\u2061"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",N({parentName:"mrow"},{stretchy:"false"}),")"))),(0,n.kt)("mi",N({parentName:"mrow"},{mathvariant:"normal"}),".")),(0,n.kt)("annotation",N({parentName:"semantics"},{encoding:"application/x-tex"}),"\\text{tanh}(x) = \\frac{1 - \\exp(-2x)}{1 + \\exp(-2x)}.")))),(0,n.kt)("span",N({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord text"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"tanh")),(0,n.kt)("span",N({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",N({parentName:"span"},{className:"mclose"}),")"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mrel"}),"="),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}}))),(0,n.kt)("span",N({parentName:"span"},{className:"base"}),(0,n.kt)("span",N({parentName:"span"},{className:"strut",style:{height:"2.363em",verticalAlign:"-0.936em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),(0,n.kt)("span",N({parentName:"span"},{className:"mopen nulldelimiter"})),(0,n.kt)("span",N({parentName:"span"},{className:"mfrac"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-t vlist-t2"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist",style:{height:"1.427em"}}),(0,n.kt)("span",N({parentName:"span"},{style:{top:"-2.314em"}}),(0,n.kt)("span",N({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"1"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mbin"}),"+"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mop"}),"exp"),(0,n.kt)("span",N({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"\u2212"),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"2"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",N({parentName:"span"},{className:"mclose"}),")"))),(0,n.kt)("span",N({parentName:"span"},{style:{top:"-3.23em"}}),(0,n.kt)("span",N({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"frac-line",style:{borderBottomWidth:"0.04em"}}))),(0,n.kt)("span",N({parentName:"span"},{style:{top:"-3.677em"}}),(0,n.kt)("span",N({parentName:"span"},{className:"pstrut",style:{height:"3em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"1"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mbin"}),"\u2212"),(0,n.kt)("span",N({parentName:"span"},{className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",N({parentName:"span"},{className:"mop"}),"exp"),(0,n.kt)("span",N({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"\u2212"),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),"2"),(0,n.kt)("span",N({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",N({parentName:"span"},{className:"mclose"}),")")))),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-s"}),"\u200b")),(0,n.kt)("span",N({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",N({parentName:"span"},{className:"vlist",style:{height:"0.936em"}}),(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",N({parentName:"span"},{className:"mclose nulldelimiter"}))),(0,n.kt)("span",N({parentName:"span"},{className:"mord"}),".")))))),(0,n.kt)("p",null,"\u6211\u4eec\u63a5\u7740\u7ed8\u5236tanh\u51fd\u6570\u3002\u5f53\u8f93\u5165\u63a5\u8fd10\u65f6\uff0ctanh\u51fd\u6570\u63a5\u8fd1\u7ebf\u6027\u53d8\u6362\u3002\u867d\u7136\u8be5\u51fd\u6570\u7684\u5f62\u72b6\u548csigmoid\u51fd\u6570\u7684\u5f62\u72b6\u5f88\u50cf\uff0c\u4f46tanh\u51fd\u6570\u5728\u5750\u6807\u7cfb\u7684\u539f\u70b9\u4e0a\u5bf9\u79f0\u3002"),(0,n.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u5c06\u4f1a\u6253\u5370tanh\u7684\u56fe\u50cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-python"}),'import tensorflow as tf\nimport matplotlib.pyplot as plt\n\nx = tf.constant(range(-20, 20, 1))\nx = tf.cast(x,dtype=tf.float32)\nout = tf.nn.tanh(x)\nplt.xlabel("x")\nplt.ylabel("reLU x")\nplt.plot(x, out)\nplt.show()\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(78868).Z,width:"640",height:"480"})),(0,n.kt)("p",null,"\u8001\u89c4\u77e9\u6253\u5370tanh\u68af\u5ea6\u7684\u56fe\u50cf\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",N({parentName:"pre"},{className:"language-python"}),'x = tf.Variable(tf.cast(x, dtype=tf.float32))\nwith tf.GradientTape() as tape:\n    y = tf.nn.tanh(x)\nplt.xlabel("x")\nplt.ylabel("(reLU x)\\\'")\ngrad = tape.gradient(y, x)\nplt.plot(x.numpy(), grad)\nplt.show()\n')),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(74608).Z,width:"640",height:"480"})))}w.isMDXComponent=!0},93906:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/2e83b4403f21654cd9147f13ecfaf799_b-8ade0dc5dead8921fb9cb968cd25ffc7.png"},9860:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/7c6e12aed30bf315eed8df6476d7ef7b_b-ff40da8aa72568cc4829ec0f236040a4.png"},63837:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/ef7eb0f56730058e1100dd6605eb2a25_b-816ea6c4ffae1f94eee0032f74be8c81.png"},44723:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/image-20210311102706368-100ea857a63c15228a7f1636e009d7ce.png"},43531:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/myplot-6f5ce76f7ff9a5e2058816912b95ed57.png"},96069:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/relugrad-e0f785b3263e27f3d62322d75a8bf883.png"},11605:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/sigmoid-83f6789fa58fcf41a8d253b68575868f.png"},42444:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/sigmoidgrad-324e8957b1e17f41b84347320c15354f.png"},78868:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/tanh-bd1549bbf3ae3d2d5882a28eb0c4291a.png"},74608:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/tanhgrad-429f966dd1064c6675450af4882ce0ff.png"}}]);