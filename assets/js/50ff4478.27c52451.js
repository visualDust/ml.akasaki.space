"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[3056],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(o),u=n,d=m["".concat(c,".").concat(u)]||m[u]||g[u]||a;return o?r.createElement(d,i(i({ref:t},s),{},{components:o})):r.createElement(d,i({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},41523:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>L,frontMatter:()=>d,metadata:()=>h,toc:()=>w});var r=o(3905),n=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))c.call(t,o)&&s(e,o,t[o]);if(l)for(var o of l(t))p.call(t,o)&&s(e,o,t[o]);return e},g=(e,t)=>a(e,i(t)),u=(e,t)=>{var o={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(o[r]=e[r]);return o};const d={title:"HLA-Face Joint High-Low Adaptation for Low Light Face Detection",authors:["pommespeter"],tags:["detection","low-light"]},f=void 0,h={permalink:"/blog/[05]HLA-Face-Joint-High-Low-Adaptation-for-Low-Light-Face-Detection",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[05]HLA-Face-Joint-High-Low-Adaptation-for-Low-Light-Face-Detection.md",source:"@site/blog/[05]HLA-Face-Joint-High-Low-Adaptation-for-Low-Light-Face-Detection.md",title:"HLA-Face Joint High-Low Adaptation for Low Light Face Detection",description:"\u8fd9\u662f\u4e00\u7bc7\u8bb2\u4f4e\u5149\u7167\u4eba\u8138\u68c0\u6d4b\u7684\u8bba\u6587\u3002\u539f\u8bba\u6587\uff08HLA-Face Joint High-Low Adaptation for Low Light Face Detection\uff09\u3002",date:"2023-12-31T09:31:53.000Z",formattedDate:"2023\u5e7412\u670831\u65e5",tags:[{label:"detection",permalink:"/blog/tags/detection"},{label:"low-light",permalink:"/blog/tags/low-light"}],readingTime:15.675,hasTruncateMarker:!0,authors:[{name:"PommesPeter",title:"I want to be strong. But it seems so hard.",url:"https://blog.pommespeter.com/",email:"me@pommespeter.com",imageURL:"https://github.com/PommesPeter.png",key:"pommespeter"}],frontMatter:{title:"HLA-Face Joint High-Low Adaptation for Low Light Face Detection",authors:["pommespeter"],tags:["detection","low-light"]},prevItem:{title:"Decoders Matter for Semantic Segmentation - Data-Dependent Decoding Enables Flexible Feature Aggregation",permalink:"/blog/[04]Decoders-Matter-for-Semantic-Segmentation-Data-Dependent-Decoding-Enables-Flexible-Feature-Aggregation"},nextItem:{title:"DeepLab Series",permalink:"/blog/[06]DeepLab-Series"}},b={authorsImageUrls:[void 0]},w=[],y={toc:w},v="wrapper";function L(e){var t=e,{components:o}=t,n=u(t,["components"]);return(0,r.kt)(v,g(m(m({},y),n),{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u7bc7\u8bb2\u4f4e\u5149\u7167\u4eba\u8138\u68c0\u6d4b\u7684\u8bba\u6587\u3002",(0,r.kt)("a",m({parentName:"p"},{href:"https://arxiv.org/pdf/2104.01984.pdf"}),"\u539f\u8bba\u6587\uff08HLA-Face Joint High-Low Adaptation for Low Light Face Detection\uff09"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5145\u5206\u5229\u7528\u73b0\u6709\u7684\u6b63\u5e38\u5149\u6570\u636e\uff0c\u5e76\u63a2\u7d22\u5982\u4f55\u5c06\u9762\u90e8\u63a2\u6d4b\u5668\u4ece\u6b63\u5e38\u5149\u7ebf\u8c03\u6574\u5230\u4f4e\u5149\u3002\u8fd9\u9879\u4efb\u52a1\u7684\u6311\u6218\u662f\uff0c\u6b63\u5e38\u548c\u4f4e\u5149\u4e4b\u95f4\u7684\u5dee\u8ddd\u5bf9\u4e8e\u50cf\u7d20\u7ea7\u548c\u7269\u4f53\u7ea7\u522b\u6765\u8bf4\u592a\u5927\u800c\u590d\u6742\u3002\u56e0\u6b64\uff0c\u5927\u591a\u6570\u73b0\u6709\u7684lowlighenhance\u548c\u9002\u5e94\u65b9\u6cd5\u4e0d\u8fbe\u5230\u6240\u9700\u7684performance\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u672c\u6587\u662fDARK FACE\u4e3a\u57fa\u51c6\uff0c\u9488\u5bf9\u73b0\u6709\u7684\u6b63\u5e38\u7167\u5ea6\u56fe\u50cf\uff0c\u5c06\u56fe\u50cf\u8c03\u6574\u6210\u4f4e\u7167\u5ea6\u56fe\u50cf\uff0c\u4e0d\u9700\u8981\u6807\u7b7e"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u662f\u50cf\u7d20\u7ea7\u5916\u89c2\u7684\u5dee\u8ddd\uff0c\u4f8b\u5982\u4e0d\u8db3\uff0c\u7167\u660e\uff0c\u76f8\u673a\u566a\u58f0\u548c\u989c\u8272\u504f\u7f6e\u3002\u53e6\u4e00\u4e2a\u662f\u6b63\u5e38\u548c\u4f4e\u5149\u573a\u666f\u4e4b\u95f4\u7684\u7269\u4f53\u7ea7\u8bed\u4e49\u5dee\u5f02\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u8def\u706f\u7684\u5b58\u5728\uff0c\u8f66\u8f86\u524d\u706f\u548c\u5e7f\u544a\u677f\u3002\u4f20\u7edf\u7684\u4f4e\u5149\u589e\u5f3a\u65b9\u6cd5","[5,6]","\u8bbe\u8ba1\u7528\u4e8e\u63d0\u9ad8\u89c6\u89c9\u8d28\u91cf\uff0c\u56e0\u6b64\u4e0d\u80fd\u586b\u5145\u8bed\u4e49\u5dee\u8ddd\uff0c"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u4f7f\u4f4e\u5149\u56fe\u50cf\u4eae\u8d77\u5e76\u626d\u66f2\u6b63\u5e38\u5149\u56fe\u50cf\uff0c\u6211\u4eec\u6784\u5efa\u4f4d\u4e8e\u6b63\u5e38\u548c\u4f4e\u5149\u4e4b\u95f4\u7684\u4e2d\u95f4\u72b6\u6001\u3002")),(0,r.kt)("p",null,"\u6458\u8981:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Face detection in low light scenarios is challenging but vital to many practical applications, e.g., surveillance video, autonomous driving at night. Most existing face detectors heavily rely on extensive annotations, while col- lecting data is time-consuming and laborious. To reduce the burden of building new datasets for low light condi- tions, we make full use of existing normal light data and explore how to adapt face detectors from normal light to low light. The challenge of this task is that the gap between normal and low light is too huge and complex for both pixel-level and object-level. Therefore, most existing low- light enhancement and adaptation methods do not achieve desirable performance. To address the issue, we propose a joint High-Low Adaptation (HLA) framework. Through a bidirectional low-level adaptation and multi-task high- level adaptation scheme, our HLA-Face outperforms state- of-the-art methods even without using dark face labels for training. Our project is publicly available at: ","[https: //daooshee.github.io/HLA-Face-Website/]","(https: //daooshee.github.io/HLA-Face-Website/)")))}L.isMDXComponent=!0}}]);