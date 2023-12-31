"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[7693],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return t?n.createElement(d,c(c({ref:r},f),{},{components:t})):n.createElement(d,c({ref:r},f))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},59301:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>O,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>v});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&f(e,t,r[t]);if(l)for(var t of l(r))p.call(r,t)&&f(e,t,r[t]);return e},s=(e,r)=>a(e,c(r)),m=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const d={},y="\u9009\u4e00\u4e2a\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6",b={unversionedId:"ch0/[2]nn-and-frameworks",id:"ch0/[2]nn-and-frameworks",title:"\u9009\u4e00\u4e2a\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6",description:"\u5982\u679c\u4f60\u5728\u8bfb\u8fd9\u7bc7\u6587\u7ae0\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u5df2\u7ecf\u5f00\u59cb\u4e86\u81ea\u5df1\u7684\u6df1\u5ea6\u5b66\u4e60\u4e4b\u65c5\u3002\u5982\u679c\u4f60\u5bf9\u8fd9\u4e00\u9886\u57df\u8fd8\u4e0d\u662f\u5f88\u719f\u6089\uff0c\u90a3\u4e48\u7b80\u5355\u6765\u8bf4\uff0c\u6df1\u5ea6\u5b66\u4e60\u4f7f\u7528\u4e86\u201c\u4eba\u5de5\u795e\u7ecf\u7f51\u7edc\u201d\uff0c\u8fd9\u662f\u4e00\u79cd\u4eff\u751f\u7684\u3001\u5229\u7528\u8ba1\u7b97\u673a\u8fdb\u884c\u8ba1\u7b97\u7684\u3001\u542c\u4e0a\u53bb\u5f88\u9ad8\u5927\u4e0a\u7684\u7ed3\u6784\uff0c\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6\u662f\u4e00\u79cd\u80fd\u591f\u5e2e\u52a9\u4f60\u5b9e\u73b0\u8fd9\u79cd\u7ed3\u6784\u7684\u5de5\u5177\u3002\u4e0b\u9762\u5bf9\u4e09\u79cd\u6846\u67b6\u8fdb\u884c\u4ecb\u7ecd\uff1a",source:"@site/docs/ch0/[2]nn-and-frameworks.md",sourceDirName:"ch0",slug:"/ch0/[2]nn-and-frameworks",permalink:"/ch0/[2]nn-and-frameworks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u6bc1\u706d\u7f51\u53cb\u7684\u4eba\u5de5\u667a\u80fd",permalink:"/ch0/[1]ai-that-destroying-netizens"},next:{title:"\u914d\u7f6eGPU",permalink:"/ch0/[3]configure-gpu"}},O={},v=[],w={toc:v},g="wrapper";function h(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(g,s(u(u({},w),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"\u9009\u4e00\u4e2a\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6"}),"\u9009\u4e00\u4e2a\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5728\u8bfb\u8fd9\u7bc7\u6587\u7ae0\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u5df2\u7ecf\u5f00\u59cb\u4e86\u81ea\u5df1\u7684\u6df1\u5ea6\u5b66\u4e60\u4e4b\u65c5\u3002\u5982\u679c\u4f60\u5bf9\u8fd9\u4e00\u9886\u57df\u8fd8\u4e0d\u662f\u5f88\u719f\u6089\uff0c\u90a3\u4e48\u7b80\u5355\u6765\u8bf4\uff0c\u6df1\u5ea6\u5b66\u4e60\u4f7f\u7528\u4e86\u201c\u4eba\u5de5\u795e\u7ecf\u7f51\u7edc\u201d\uff0c\u8fd9\u662f\u4e00\u79cd\u4eff\u751f\u7684\u3001\u5229\u7528\u8ba1\u7b97\u673a\u8fdb\u884c\u8ba1\u7b97\u7684\u3001\u542c\u4e0a\u53bb\u5f88\u9ad8\u5927\u4e0a\u7684\u7ed3\u6784\uff0c\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6\u662f\u4e00\u79cd\u80fd\u591f\u5e2e\u52a9\u4f60\u5b9e\u73b0\u8fd9\u79cd\u7ed3\u6784\u7684\u5de5\u5177\u3002\u4e0b\u9762\u5bf9\u4e09\u79cd\u6846\u67b6\u8fdb\u884c\u4ecb\u7ecd\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tensorflow\uff1aTensorflow\u662f\u4e00\u6574\u4e2a\u751f\u6001\u7cfb\u7edf\u3002Tensorflow\u5bf9\u5404\u79cd\u786c\u4ef6\u3001\u8bed\u8a00\u3001\u90e8\u7f72\u73af\u5883\u7684\u652f\u6301\u80fd\u529b\u8f83\u597d\uff0c\u9002\u5408\u7814\u7a76\u8005\u6216\u662f\u751f\u4ea7\u73af\u5883\u4f7f\u7528\u3002\u5386\u53f2\u4e0aTensorflow\u4ece1.x\u52302.0\u7684\u8fc1\u79fb\uff0c2.0\u540e\u7684Tensorflow\u7531\u4e8e\u9ad8\u9636API\u7684\u52a0\u5165\u53d8\u5f97\u66f4\u6613\u4e8e\u4f7f\u7528\u3002Tensorflow\u5177\u6709\u5404\u79cd\u4efb\u52a1\u7684\u5b8c\u6574\u5b98\u65b9\u4f8b\u7a0b\u548c\u5b8c\u5584\u7684\u5f00\u53d1\u8005\u6587\u6863\u3002"),(0,n.kt)("li",{parentName:"ul"},"Pytorch\uff1a\u5982\u679c\u4f60\u4e3b\u8981\u4ece\u4e8b\u5b66\u672f\u7814\u7a76\u5de5\u4f5c\uff0c\u5e76\u4e14\u4e0d\u8003\u8651\u751f\u4ea7\u548c\u90e8\u7f72\u73af\u5883\uff0c\u800c\u4e14\u8ba8\u538c\u9ebb\u70e6\uff0c\u4e0d\u559c\u6b22\u8003\u8651\u79fb\u690d\u548c\u5de5\u7a0b\u95ee\u9898\uff0c\u5efa\u8bae\u65e0\u8111\u9009\u62e9Pytorch\u3002\u5f88\u591a\u8bba\u6587\u7ed9\u7684\u4ee3\u7801\u90fd\u662f\u7528Pytorch\u5199\u7684\uff0c\u6284\u8d77\u6765\u6bd4\u8f83\u65b9\u4fbf\u3002"),(0,n.kt)("li",{parentName:"ul"},"PaddlePaddle\u662f\u767e\u5ea6\u5185\u90e8\u5f00\u53d1\u81ea\u7528\u7684Paddle\u884d\u751f\u5f97\u5230\u7684\u751f\u6001\u5b8c\u6574\u7684\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6\uff0c\u5177\u6709\u7a20\u5bc6\u53c2\u6570\u548c\u7a00\u758f\u53c2\u6570\u573a\u666f\u7684\u8d85\u5927\u89c4\u6a21\u6df1\u5ea6\u5b66\u4e60\u5e76\u884c\u8bad\u7ec3\u80fd\u529b\uff0c\u6709\u767e\u5ea6\u5728\u7ebf\u5e73\u53f0\u652f\u6301\uff0c\u4ece\u7f16\u5199\u5230\u90e8\u7f72\u4f60\u57fa\u672c\u4e0d\u600e\u4e48\u7528\u6101\uff0c\u6587\u6863\u4e2d\u82f1\u90fd\u6709\uff0c\u8fd9\u4e24\u5e74\u751f\u6001\u4e5f\u5728\u9010\u6e10\u5b8c\u5584\u3002\u652f\u6301\u56fd\u4ea7\u4e5f\u662f\u4e0d\u9519\u7684\u9009\u62e9\u3002")),(0,n.kt)("p",null,"\u66f4\u591a\u5185\u5bb9\u8bf7\u81ea\u884c\u641c\u7d22\u5982\u4f55\u9009\u62e9\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6\uff0c\u80af\u5b9a\u8bb2\u7684\u6bd4\u8fd9\u91cc\u53c8\u5168\u53c8\u597d\u3002\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8e\u6df1\u5ea6\u5b66\u4e60\u53ca\u5176\u6280\u672f\u5177\u6709\u5f88\u5f3a\u7684\u65f6\u6548\u6027\uff0c\u6846\u67b6\u4e5f\u4f1a\u63a8\u9648\u51fa\u65b0\uff0c\u6240\u4ee5\u8bf7\u5373\u4f7f\u5173\u6ce8\u4e1a\u5185\u7684\u6700\u65b0\u52a8\u6001\u3002"))}h.isMDXComponent=!0}}]);