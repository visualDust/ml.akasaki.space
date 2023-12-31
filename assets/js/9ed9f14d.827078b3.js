"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[6380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>w,frontMatter:()=>g,metadata:()=>b,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const g={title:"Decoders Matter for Semantic Segmentation - Data-Dependent Decoding Enables Flexible Feature Aggregation",authors:["visualdust"],tags:["survey","decoder"]},f=void 0,b={permalink:"/blog/[04]Decoders-Matter-for-Semantic-Segmentation-Data-Dependent-Decoding-Enables-Flexible-Feature-Aggregation",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[04]Decoders-Matter-for-Semantic-Segmentation-Data-Dependent-Decoding-Enables-Flexible-Feature-Aggregation.md",source:"@site/blog/[04]Decoders-Matter-for-Semantic-Segmentation-Data-Dependent-Decoding-Enables-Flexible-Feature-Aggregation.md",title:"Decoders Matter for Semantic Segmentation - Data-Dependent Decoding Enables Flexible Feature Aggregation",description:"\u8fd9\u662f\u4e00\u7bc7\u5173\u4e8e\u6570\u636e\u4f9d\u8d56\u578b\u89e3\u7801\u5668\u7684\u7406\u8bba\u548c\u6d4b\u8bd5\u5de5\u4f5c\u7684\u8bba\u6587\u3002\u539f\u8bba\u6587\u662fDecoders Matter for Semantic Segmentation : Data-Dependent Decoding Enables Flexible Feature Aggregation\u3002",date:"2023-12-31T09:31:53.000Z",formattedDate:"2023\u5e7412\u670831\u65e5",tags:[{label:"survey",permalink:"/blog/tags/survey"},{label:"decoder",permalink:"/blog/tags/decoder"}],readingTime:21.69,hasTruncateMarker:!0,authors:[{name:"Gavin Gong",title:"Rubbish CVer | Poor LaTex speaker | Half stack developer | \u952e\u5708\u8eba\u5c38\u7816\u5bb6",url:"https://gong.host",email:"gavin@gong.host",imageURL:"https://github.yuuza.net/visualDust.png",key:"visualdust"}],frontMatter:{title:"Decoders Matter for Semantic Segmentation - Data-Dependent Decoding Enables Flexible Feature Aggregation",authors:["visualdust"],tags:["survey","decoder"]},prevItem:{title:"Progressive Semantic Segmentation",permalink:"/blog/[03]Progressive-Semantic-Segmentation"},nextItem:{title:"HLA-Face Joint High-Low Adaptation for Low Light Face Detection",permalink:"/blog/[05]HLA-Face-Joint-High-Low-Adaptation-for-Low-Light-Face-Detection"}},h={authorsImageUrls:[void 0]},y=[{value:"Abstract\uff08\u6458\u8981\uff09",id:"abstract\u6458\u8981",level:2}],v={toc:y},D="wrapper";function w(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(D,d(u(u({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u8fd9\u662f\u4e00\u7bc7\u5173\u4e8e\u6570\u636e\u4f9d\u8d56\u578b\u89e3\u7801\u5668\u7684\u7406\u8bba\u548c\u6d4b\u8bd5\u5de5\u4f5c\u7684\u8bba\u6587\u3002\u539f\u8bba\u6587\u662f",(0,n.kt)("a",u({parentName:"p"},{href:"https://arxiv.org/pdf/1903.02120.pdf"}),"Decoders Matter for Semantic Segmentation : Data-Dependent Decoding Enables Flexible Feature Aggregation"),"\u3002"),(0,n.kt)("p",null,"\u8fd1\u5e74\u6765\uff0c\u5e38\u89c1\u7684\u8bed\u4e49\u5206\u5272\u65b9\u6cd5\u5229\u7528\u7f16\u7801\u5668-\u89e3\u7801\u5668\u7ed3\u6784\u8fdb\u884c\u9010\u50cf\u7d20\u7684\u9884\u6d4b\u4efb\u52a1\u3002\u5728\u8fd9\u4e9b\u89e3\u7801\u5668\u6bcf\u4e00\u5c42\u7684\u6700\u540e\u901a\u5e38\u662f\u4e00\u5c42\u53cc\u7ebf\u6027\u4e0a\u91c7\u6837\u7684\u8fc7\u7a0b\uff0c\u7528\u4e8e\u5c06\u50cf\u7d20\u6062\u590d\u81f3\u539f\u6709\u50cf\u7d20\u5927\u5c0f\u3002\u672c\u8bba\u6587\u7684\u7814\u7a76\u8868\u660e\uff0c\u8fd9\u79cd\u4e0e\u6570\u636e\u65e0\u5173\u7684\u53cc\u7ebf\u6027\u4e0a\u91c7\u6837\u65b9\u6cd5\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7ed3\u679c\u5e76\u4e0d\u5b8c\u7f8e\u3002"),(0,n.kt)("p",null,"\u6240\u4ee5\uff0c\u672c\u8bba\u6587\u63d0\u51fa\u4e86\u4e00\u79cd\u4f9d\u8d56\u4e8e\u8f93\u5165\u6570\u636e\u7684\u4e0a\u91c7\u6837\u53d6\u4ee3\u53cc\u7ebf\u6027\u4e0a\u91c7\u6837\uff0c\u79f0\u4e3a\u201cDUpsampling\u201d\u3002\u8fd9\u4e2a\u65b0\u7684\u65b9\u6cd5\u5229\u7528\u5728\u8bed\u4e49\u5206\u6bb5\u6807\u7b7e\u4e2d\u7684\u7a7a\u95f4\u5197\u4f59\uff0c\u80fd\u591f\u4ece\u4f4e\u5206\u8fa8\u7387\u7684CNN\u8f93\u51fa\u4e2d\u6062\u590d\u5206\u8fa8\u7387\u5e76\u5b9e\u73b0\u9010\u50cf\u7d20\u9884\u6d4b\u3002\u8be5\u65b9\u6cd5\u5728\u5206\u8fa8\u7387\u76f8\u5bf9\u8f83\u4f4e\u7684\u8f93\u5165\u4e0a\u80fd\u83b7\u5f97\u66f4\u52a0\u7cbe\u786e\u7684\u5206\u5272\u6548\u679c\uff0c\u5e76\u4e14\u663e\u8457\u964d\u4f4e\u4e86\u8ba1\u7b97\u7684\u590d\u6742\u5ea6\u3002\u4e5f\u5c31\u662f\u8bf4\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8fd9\u79cd\u65b0\u7684\u4e0a\u91c7\u6837\u5c42\u91cd\u5efa\u80fd\u529b\u975e\u5e38\u5f3a"),(0,n.kt)("li",{parentName:"ul"},"\u8fd9\u79cd\u65b9\u6cd5\u5bf9\u4efb\u4f55CNN\u7f16\u7801\u5668\u7684\u7ec4\u5408\u548c\u4f7f\u7528\u8868\u73b0\u51fa\u5f88\u597d\u7684\u517c\u5bb9\u6027")),(0,n.kt)("p",null,"\u672c\u8bba\u6587\u8fd8\u901a\u8fc7\u5b9e\u9a8c\u6807\u660e\u4e86\uff0cDUpsampling\u6027\u80fd\u4f18\u8d8a\uff0c\u5e76\u4e14\u65e0\u9700\u4efb\u4f55\u540e\u5904\u7406\u3002"),(0,n.kt)("h2",u({},{id:"abstract\u6458\u8981"}),"Abstract\uff08\u6458\u8981\uff09"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Recent semantic segmentation methods exploit encoder-decoder architectures to produce the desired pixel-wise segmentation prediction. The last layer of the decoders is typically a bilinear upsampling procedure to recover the final pixel-wise prediction. We empirically show that this oversimple and data-independent bilinear upsampling may lead to sub-optimal results.\nIn this work, we propose a data-dependent upsampling (DUpsampling) to replace bilinear, which takes advantages of the redundancy in the label space of semantic segmentation and is able to recover the pixel-wise prediction from low-resolution outputs of CNNs. The main advantage of the new upsampling layer lies in that with a relatively lower-resolution feature map such as 1/16 or 1/32 of the input size, we can achieve even better segmentation accuracy, significantly reducing computation complexity. This is made possible by 1) the new upsampling layer's much improved reconstruction capability; and more importantly 2) the DUpsampling based decoder's flexibility in leveraging almost arbitrary combinations of the CNN encoders' features. Experiments demonstrate that our proposed decoder outperforms the state-of-the-art decoder, with only 20% of computation. Finally, without any post-processing, the framework equipped with our proposed decoder achieves new state-of-the-art performance on two datasets: 88.1% mIOU on PASCAL VOC with 30% computation of the previously best model; and 52.5% mIOU on PASCAL Context.     ")),(0,n.kt)("p",null,"\u5982\u679c\u6709\u65f6\u95f4\u7684\u8bdd\u8bf7\u9605\u8bfb",(0,n.kt)("a",u({parentName:"p"},{href:"https://arxiv.org/pdf/1903.02120.pdf"}),"\u539f\u4f5c"),"\u3002\u672c\u6587\u53ea\u662f\u5bf9\u539f\u4f5c\u9605\u8bfb\u7684\u7c97\u6d45\u7b14\u8bb0\u3002"))}w.isMDXComponent=!0}}]);