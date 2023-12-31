"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[9391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>d,metadata:()=>g,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const d={title:"CBAM - Convolutional Block Attention Module",authors:["visualdust"],tags:["attention-mechanism"]},h=void 0,g={permalink:"/blog/[26]CBAM-Convolutional-Block-Attention-Module",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[26]CBAM-Convolutional-Block-Attention-Module.md",source:"@site/blog/[26]CBAM-Convolutional-Block-Attention-Module.md",title:"CBAM - Convolutional Block Attention Module",description:"image-20210723203210974",date:"2023-12-31T09:31:53.000Z",formattedDate:"2023\u5e7412\u670831\u65e5",tags:[{label:"attention-mechanism",permalink:"/blog/tags/attention-mechanism"}],readingTime:6.185,hasTruncateMarker:!0,authors:[{name:"Gavin Gong",title:"Rubbish CVer | Poor LaTex speaker | Half stack developer | \u952e\u5708\u8eba\u5c38\u7816\u5bb6",url:"https://gong.host",email:"gavin@gong.host",imageURL:"https://github.yuuza.net/visualDust.png",key:"visualdust"}],frontMatter:{title:"CBAM - Convolutional Block Attention Module",authors:["visualdust"],tags:["attention-mechanism"]},prevItem:{title:"Rethinking BiSeNet For Real-time Semantic Segmentation",permalink:"/blog/[25]Rethinking-BiSeNet-For-Real-time-Semantic-Segmentation"},nextItem:{title:"Non-local Neural Networks",permalink:"/blog/[27]Non-local-Neural-Networks"}},b={authorsImageUrls:[void 0]},v=[],y={toc:v},k="wrapper";function O(e){var t=e,{components:o}=t,a=f(t,["components"]);return(0,r.kt)(k,m(p(p({},y),a),{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210723203210974",src:n(3758).Z,width:"1230",height:"733"})),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Woo%2C+S"}),"Sanghyun Woo"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Park%2C+J"}),"Jongchan Park"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Lee%2C+J"}),"Joon-Young Lee"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Kweon%2C+I+S"}),"In So Kweon")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We propose Convolutional Block Attention Module (CBAM), a simple yet effective attention module for feed-forward convolutional neural networks. Given an intermediate feature map, our module sequentially infers attention maps along two separate dimensions, channel and spatial, then the attention maps are multiplied to the input feature map for adaptive feature refinement. Because CBAM is a lightweight and general module, it can be integrated into any CNN architectures seamlessly with negligible overheads and is end-to-end trainable along with base CNNs. We validate our CBAM through extensive experiments on ImageNet-1K, MS~COCO detection, and VOC~2007 detection datasets. Our experiments show consistent improvements in classification and detection performances with various models, demonstrating the wide applicability of CBAM. The code and models will be publicly available.")),(0,r.kt)("p",null,"CBAM\u662f\u4e00\u7bc7\u7ed3\u5408\u4e86\u901a\u9053\u6ce8\u610f\u529b\u548c\u7a7a\u95f4\u6ce8\u610f\u529b\u7684\u8bba\u6587\u3002\u5b83\u901a\u8fc7\u5728\u540c\u4e2a\u6a21\u5757\u4e2d\u53e0\u52a0\u901a\u9053\u6ce8\u610f\u529b\u548c\u7a7a\u95f4\u6ce8\u610f\u529b\u8fbe\u5230\u4e86\u826f\u597d\u7684\u6548\u679c\u3002\u4e3a\u4e86\u63d0\u5347 CNN \u6a21\u578b\u7684\u8868\u73b0\uff0c\u9664\u4e86\u5bf9\u7f51\u7edc\u7684\u6df1\u5ea6\u3001\u5bbd\u5ea6\u4e0b\u624b\uff0c\u8fd8\u6709\u4e00\u4e2a\u65b9\u5411\u662f\u6ce8\u610f\u529b\u3002\u6ce8\u610f\u529b\u4e0d\u4ec5\u8981\u544a\u8bc9\u6211\u4eec\u91cd\u70b9\u5173\u6ce8\u54ea\u91cc\uff0c\u63d0\u9ad8\u5173\u6ce8\u70b9\u7684\u8868\u8fbe\u3002 \u6211\u4eec\u7684\u76ee\u6807\u662f\u901a\u8fc7\u4f7f\u7528\u6ce8\u610f\u673a\u5236\u6765\u589e\u52a0\u8868\u73b0\u529b\uff0c\u5173\u6ce8\u91cd\u8981\u7279\u5f81\u5e76\u6291\u5236\u4e0d\u5fc5\u8981\u7684\u7279\u5f81\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5f3a\u8c03\u7a7a\u95f4\u548c\u901a\u9053\u8fd9\u4e24\u4e2a\u7ef4\u5ea6\u4e0a\u7684\u6709\u610f\u4e49\u7279\u5f81\uff0c\u4f5c\u8005\u4f9d\u6b21\u5e94\u7528\u901a\u9053\u548c\u7a7a\u95f4\u6ce8\u610f\u6a21\u5757\uff0c\u6765\u5206\u522b\u4f18\u5316\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u5728\u901a\u9053\u548c\u7a7a\u95f4\u7ef4\u5ea6\u4e0a\u5b66\u4e60\u80fd\u529b\u3002\u4f5c\u8005\u5c06\u6ce8\u610f\u529b\u8fc7\u7a0b\u5206\u4e3a\u901a\u9053\u548c\u7a7a\u95f4\u4e24\u4e2a\u72ec\u7acb\u7684\u90e8\u5206\uff0c\u8fd9\u6837\u505a\u4e0d\u4ec5\u53ef\u4ee5\u8282\u7ea6\u53c2\u6570\u548c\u8ba1\u7b97\u529b\uff0c\u800c\u4e14\u4fdd\u8bc1\u4e86\u5176\u53ef\u4ee5\u4f5c\u4e3a\u5373\u63d2\u5373\u7528\u7684\u6a21\u5757\u96c6\u6210\u5230\u73b0\u6709\u7684\u7f51\u7edc\u67b6\u6784\u4e2d\u53bb\u3002"))}O.isMDXComponent=!0},3758:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20210723203210974-2dc470230899435d972cfec3588e4ffc.png"}}]);