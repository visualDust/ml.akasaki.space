"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[4912],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),g=i,h=c["".concat(s,".").concat(g)]||c[g]||u[g]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},21527:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>d,default:()=>w,frontMatter:()=>h,metadata:()=>f,toc:()=>b});var n=a(3905),i=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&m(e,a,t[a]);return e},u=(e,t)=>r(e,l(t)),g=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const h={title:"BiSeNet - Bilateral Segmentation Network for Real-time Semantic Segmentation",authors:["visualdust"],tags:["segmentation","light-weight"]},d=void 0,f={permalink:"/blog/[24]BiSeNet-Bilateral-Segmentation-Network-for-Real-time-Semantic-Segmentation",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[24]BiSeNet-Bilateral-Segmentation-Network-for-Real-time-Semantic-Segmentation.md",source:"@site/blog/[24]BiSeNet-Bilateral-Segmentation-Network-for-Real-time-Semantic-Segmentation.md",title:"BiSeNet - Bilateral Segmentation Network for Real-time Semantic Segmentation",description:"BiSeNet\u7684\u76ee\u6807\u662f\u66f4\u5feb\u901f\u7684\u5b9e\u65f6\u8bed\u4e49\u5206\u5272\u3002\u5728\u8bed\u4e49\u5206\u5272\u4efb\u52a1\u4e2d\uff0c\u7a7a\u95f4\u5206\u8fa8\u7387\u548c\u611f\u53d7\u91ce\u5f88\u96be\u4e24\u5168\uff0c\u5c24\u5176\u662f\u5728\u5b9e\u65f6\u8bed\u4e49\u5206\u5272\u7684\u60c5\u51b5\u4e0b\uff0c\u73b0\u6709\u65b9\u6cd5\u901a\u5e38\u662f\u5229\u7528\u5c0f\u7684\u8f93\u5165\u56fe\u50cf\u6216\u8005\u8f7b\u91cf\u4e3b\u5e72\u6a21\u578b\u5b9e\u73b0\u52a0\u901f\u3002\u4f46\u662f\u5c0f\u56fe\u50cf\u76f8\u8f83\u4e8e\u539f\u56fe\u50cf\u7f3a\u5931\u4e86\u5f88\u591a\u7a7a\u95f4\u4fe1\u606f\uff0c\u800c\u8f7b\u91cf\u7ea7\u6a21\u578b\u5219\u7531\u4e8e\u88c1\u526a\u901a\u9053\u800c\u635f\u5bb3\u4e86\u7a7a\u95f4\u4fe1\u606f\u3002BiSegNet\u6574\u5408\u4e86Spatial Path (SP) \u548c Context Path (CP)\u5206\u522b\u7528\u6765\u89e3\u51b3\u7a7a\u95f4\u4fe1\u606f\u7f3a\u5931\u548c\u611f\u53d7\u91ce\u7f29\u5c0f\u7684\u95ee\u9898\u3002",date:"2023-12-31T09:31:53.000Z",formattedDate:"2023\u5e7412\u670831\u65e5",tags:[{label:"segmentation",permalink:"/blog/tags/segmentation"},{label:"light-weight",permalink:"/blog/tags/light-weight"}],readingTime:9.905,hasTruncateMarker:!0,authors:[{name:"Gavin Gong",title:"Rubbish CVer | Poor LaTex speaker | Half stack developer | \u952e\u5708\u8eba\u5c38\u7816\u5bb6",url:"https://gong.host",email:"gavin@gong.host",imageURL:"https://github.yuuza.net/visualDust.png",key:"visualdust"}],frontMatter:{title:"BiSeNet - Bilateral Segmentation Network for Real-time Semantic Segmentation",authors:["visualdust"],tags:["segmentation","light-weight"]},prevItem:{title:"Squeeze-and-Excitation Networks",permalink:"/blog/[23]Squeeze-and-Excitation-Networks"},nextItem:{title:"Rethinking BiSeNet For Real-time Semantic Segmentation",permalink:"/blog/[25]Rethinking-BiSeNet-For-Real-time-Semantic-Segmentation"}},k={authorsImageUrls:[void 0]},b=[{value:"\u8bbe\u8ba1\u76ee\u7684\u548c\u601d\u8def",id:"\u8bbe\u8ba1\u76ee\u7684\u548c\u601d\u8def",level:2},{value:"\u7f51\u7edc\u7ed3\u6784\u8bbe\u8ba1",id:"\u7f51\u7edc\u7ed3\u6784\u8bbe\u8ba1",level:2},{value:"Spatial Path",id:"spatial-path",level:3},{value:"Context Path",id:"context-path",level:3},{value:"Attention Refinement Module (ARM)",id:"attention-refinement-module-arm",level:4},{value:"Feature Fusion Module (FFM)",id:"feature-fusion-module-ffm",level:3},{value:"\u5b9e\u9a8c",id:"\u5b9e\u9a8c",level:2}],S={toc:b},v="wrapper";function w(e){var t=e,{components:i}=t,r=g(t,["components"]);return(0,n.kt)(v,u(c(c({},S),r),{components:i,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"BiSeNet\u7684\u76ee\u6807\u662f\u66f4\u5feb\u901f\u7684\u5b9e\u65f6\u8bed\u4e49\u5206\u5272\u3002\u5728\u8bed\u4e49\u5206\u5272\u4efb\u52a1\u4e2d\uff0c\u7a7a\u95f4\u5206\u8fa8\u7387\u548c\u611f\u53d7\u91ce\u5f88\u96be\u4e24\u5168\uff0c\u5c24\u5176\u662f\u5728\u5b9e\u65f6\u8bed\u4e49\u5206\u5272\u7684\u60c5\u51b5\u4e0b\uff0c\u73b0\u6709\u65b9\u6cd5\u901a\u5e38\u662f\u5229\u7528\u5c0f\u7684\u8f93\u5165\u56fe\u50cf\u6216\u8005\u8f7b\u91cf\u4e3b\u5e72\u6a21\u578b\u5b9e\u73b0\u52a0\u901f\u3002\u4f46\u662f\u5c0f\u56fe\u50cf\u76f8\u8f83\u4e8e\u539f\u56fe\u50cf\u7f3a\u5931\u4e86\u5f88\u591a\u7a7a\u95f4\u4fe1\u606f\uff0c\u800c\u8f7b\u91cf\u7ea7\u6a21\u578b\u5219\u7531\u4e8e\u88c1\u526a\u901a\u9053\u800c\u635f\u5bb3\u4e86\u7a7a\u95f4\u4fe1\u606f\u3002BiSegNet\u6574\u5408\u4e86Spatial Path (SP) \u548c Context Path (CP)\u5206\u522b\u7528\u6765\u89e3\u51b3\u7a7a\u95f4\u4fe1\u606f\u7f3a\u5931\u548c\u611f\u53d7\u91ce\u7f29\u5c0f\u7684\u95ee\u9898\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Semantic segmentation requires both rich spatial information and sizeable receptive field. However, modern approaches usually compromise spatial resolution to achieve real-time inference speed, which leads to poor performance. In this paper, we address this dilemma with a novel Bilateral Segmentation Network (BiSeNet). We first design a Spatial Path with a small stride to preserve the spatial information and generate high-resolution features. Meanwhile, a Context Path with a fast downsampling strategy is employed to obtain sufficient receptive field. On top of the two paths, we introduce a new Feature Fusion Module to combine features efficiently. The proposed architecture makes a right balance between the speed and segmentation performance on Cityscapes, CamVid, and COCO-Stuff datasets. Specifically, for a 2048x1024 input, we achieve 68.4% Mean IOU on the Cityscapes test dataset with speed of 105 FPS on one NVIDIA Titan XP card, which is significantly faster than the existing methods with comparable performance.")),(0,n.kt)("p",null,"\u8bba\u6587\u539f\u6587\uff1a",(0,n.kt)("a",c({parentName:"p"},{href:"https://arxiv.org/abs/1808.00897"}),"BiSeNet: Bilateral Segmentation Network for Real-time Semantic Segmentation"),"\u3002\u9605\u8bfb\u540e\u4f60\u4f1a\u53d1\u73b0\uff0c\u8fd9\u7bc7\u8bba\u6587\u6709\u5f88\u591a\u601d\u8def\u53d7\u5230",(0,n.kt)("a",c({parentName:"p"},{href:"./%5B23%5DSqueeze-and-Excitation-Networks"}),"SENet\uff08Squeeze-and-Excitation Networks\uff09"),"\u7684\u542f\u53d1\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h2",c({},{id:"\u8bbe\u8ba1\u76ee\u7684\u548c\u601d\u8def"}),"\u8bbe\u8ba1\u76ee\u7684\u548c\u601d\u8def"),(0,n.kt)("p",null,"\u5728\u4ee5\u5f80\u7684\u5de5\u4f5c\u4e2d\uff0c\u4e3a\u4e86\u5bf9\u7f51\u7edc\u8fdb\u884c\u52a0\u901f\u4ee5\u8fbe\u5230\u5b9e\u65f6\u7684\u76ee\u7684\uff0c\u7814\u7a76\u8005\u4eec\u5f80\u5f80\u4f1a\u9009\u62e9\u6298\u4e2d\u7cbe\u5ea6\u4ee5\u6c42\u901f\u5ea6\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u526a\u88c1\u6216 resize \u6765\u9650\u5b9a\u8f93\u5165\u5927\u5c0f\uff0c\u4ee5\u964d\u4f4e\u8ba1\u7b97\u590d\u6742\u5ea6\u3002\u5c3d\u7ba1\u8fd9\u79cd\u65b9\u6cd5\u7b80\u5355\u800c\u6709\u6548\uff0c\u7a7a\u95f4\u7ec6\u8282\u7684\u635f\u5931\u8fd8\u662f\u8ba9\u9884\u6d4b\u6253\u4e86\u6298\u6263\uff0c\u5c24\u5176\u662f\u8fb9\u754c\u90e8\u5206\uff0c\u5bfc\u81f4\u5ea6\u91cf\u548c\u53ef\u89c6\u5316\u7684\u7cbe\u5ea6\u4e0b\u964d\uff1b"),(0,n.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u51cf\u5c11\u7f51\u7edc\u901a\u9053\u6570\u91cf\u52a0\u5feb\u5904\u7406\u901f\u5ea6\uff0c\u5c24\u5176\u662f\u5728\u9aa8\u5e72\u6a21\u578b\u7684\u65e9\u671f\u9636\u6bb5\uff0c\u4f46\u662f\u8fd9\u4f1a\u5f31\u5316\u7a7a\u95f4\u4fe1\u606f\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e3a\u8ffd\u6c42\u6781\u5176\u7d27\u51d1\u7684\u6846\u67b6\u800c\u4e22\u5f03\u6a21\u578b\u7684\u6700\u540e\u9636\u6bb5\uff08\u6bd4\u5982ENet\uff09\u3002\u8be5\u65b9\u6cd5\u7684\u7f3a\u70b9\u4e5f\u5f88\u660e\u663e\uff1a\u7531\u4e8e ENet \u629b\u5f03\u4e86\u6700\u540e\u9636\u6bb5\u7684\u4e0b\u91c7\u6837\uff0c\u6a21\u578b\u7684\u611f\u53d7\u91ce\u4e0d\u8db3\u4ee5\u6db5\u76d6\u5927\u7269\u4f53\uff0c\u5bfc\u81f4\u5224\u522b\u80fd\u529b\u8f83\u5dee\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210704101433666",src:a(17426).Z,width:"379",height:"456"})),(0,n.kt)("p",null,"\u4e0a\u56fe\u4e2d\u5de6\u4fa7\u662f\u526a\u88c1\u548cresize\u65b9\u6cd5\u7684\u793a\u610f\uff0c\u53f3\u4fa7\u662f\u8dd1\u53bb\u90e8\u5206\u7ed3\u6784\u6216\u51cf\u5c11\u901a\u9053\u7684\u793a\u610f\u3002\u4e3a\u89e3\u51b3\u4e0a\u8ff0\u7a7a\u95f4\u4fe1\u606f\u7f3a\u5931\u95ee\u9898\uff0c\u7814\u7a76\u8005\u666e\u904d\u91c7\u7528 U \u5f62\u7ed3\u6784\u3002\u901a\u8fc7\u878d\u5408 backbone \u7f51\u7edc\u4e0d\u540c\u5c42\u7ea7\u7684\u7279\u5f81\uff0cU \u5f62\u7ed3\u6784\u9010\u6e10\u589e\u52a0\u4e86\u7a7a\u95f4\u5206\u8fa8\u7387\uff0c\u5e76\u586b\u8865\u4e86\u4e00\u4e9b\u9057\u5931\u7684\u7ec6\u8282\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210704102757859",src:a(54876).Z,width:"379",height:"456"})),(0,n.kt)("p",null,"\u4e0a\u56fe\u662f\u4e00\u79cd\u5178\u578b\u7684U\u578b\u7ed3\u6784\u3002\u4f46\u662f\uff0c\u8fd9\u4e00\u6280\u672f\u6709\u4e24\u4e2a\u5f31\u70b9\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u9ad8\u5206\u8fa8\u7387\u7279\u5f81\u56fe\u4e0a\u989d\u5916\u8ba1\u7b97\u91cf\u7684\u5f15\u5165\uff0c\u5b8c\u6574\u7684 U \u5f62\u7ed3\u6784\u62d6\u6162\u4e86\u6a21\u578b\u7684\u901f\u5ea6\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7edd\u5927\u591a\u6570\u7531\u4e8e\u88c1\u526a\u8f93\u5165\u6216\u8005\u51cf\u5c11\u7f51\u7edc\u901a\u9053\u800c\u4e22\u5931\u7684\u7a7a\u95f4\u4fe1\u606f\u65e0\u6cd5\u901a\u8fc7\u5f15\u5165\u6d45\u5c42\u800c\u8f7b\u6613\u590d\u539f\u3002\u6362\u8a00\u4e4b\uff0cU \u5f62\u7ed3\u6784\u9876\u591a\u662f\u4e00\u4e2a\u5907\u9009\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f\u6700\u7ec8\u7684\u89e3\u51b3\u65b9\u6848\u3002")),(0,n.kt)("p",null,"\u57fa\u4e8e\u4e0a\u8ff0\u89c2\u5bdf\uff0c\u672c\u6587\u63d0\u51fa\u4e86\u53cc\u5411\u5206\u5272\u7f51\u7edcBiSeNet\uff08Bilateral Segmentation Network\uff09\uff0c\u5176\u4e3b\u8981\u7684\u6539\u8fdb\u6709\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u540c\u65f6\u4f7f\u7528Spatial Path (SP) \u548c Context Path (CP)\uff0c\u517c\u987e\u7a7a\u95f4\u5c5e\u6027\u548c\u611f\u53d7\u91ce"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u51fa\u7279\u5f81\u878d\u5408\u6a21\u5757\uff08Feature Fusion Module/FFM\uff09\u7528\u4e8e\u66f4\u597d\u5730\u878d\u5408SP\u548cCP\u7684\u7279\u5f81"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u51fa\u6ce8\u610f\u529b\u4f18\u5316\u6a21\u5757\uff08Attention Refinement Module/ARM\uff09")),(0,n.kt)("p",null,"\u4e0b\u56fe\u4e3aBiSeNet\u7684\u7ed3\u6784\u793a\u610f\u56fe\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210704102830425",src:a(47e3).Z,width:"378",height:"456"})),(0,n.kt)("p",null,"\u5b83\u5305\u542b\u4e24\u4e2a\u90e8\u5206\uff1aSpatial Path (SP) \u548c Context Path (CP)\u3002\u987e\u540d\u601d\u4e49\uff0c\u8fd9\u4e24\u4e2a\u7ec4\u4ef6\u5206\u522b\u7528\u6765\u89e3\u51b3\u7a7a\u95f4\u4fe1\u606f\u7f3a\u5931\u548c\u611f\u53d7\u91ce\u7f29\u5c0f\u7684\u95ee\u9898\u3002\u5bf9\u4e8e Spatial Path\uff0c\u8bba\u6587\u4e2d\u53ea\u53e0\u52a0\u4e09\u4e2a\u5377\u79ef\u5c42\u4ee5\u83b7\u5f97 1/8 \u7279\u5f81\u56fe\uff0c\u5176\u4fdd\u7559\u7740\u4e30\u5bcc\u7684\u7a7a\u95f4\u7ec6\u8282\u3002\u5bf9\u4e8e Context Path\uff0c\u672c\u6587\u5728",(0,n.kt)("a",c({parentName:"p"},{href:"//todo"}),"Xception"),"\u5c3e\u90e8\u9644\u52a0\u4e00\u4e2a\u5168\u5c40\u5e73\u5747\u6c60\u5316\u5c42\uff0c\u5176\u4e2d\u611f\u53d7\u91ce\u662f backbone \u7f51\u7edc\u7684\u6700\u5927\u503c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210704103510162",src:a(54216).Z,width:"1093",height:"464"})),(0,n.kt)("p",null,"\u4e0a\u56fe\u662f\u4ee5\u4e0a\u4e09\u79cd\u601d\u8def\u653e\u5728\u4e00\u8d77\u7684\u5bf9\u6bd4\u56fe\u3002\u5728\u8ffd\u6c42\u66f4\u5feb\u3001\u66f4\u597d\u6a21\u578b\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8bba\u6587\u4e5f\u7814\u7a76\u4e86\u4e24\u4e2a\u7ec4\u4ef6\u7684\u878d\u5408\uff0c\u4ee5\u53ca\u6700\u540e\u9884\u6d4b\u7684\u4f18\u5316\uff0c\u5e76\u5206\u522b\u63d0\u51fa\u7279\u5f81\u878d\u5408\u6a21\u5757FFM\uff08Feature Fusion Module\uff09\u548c\u6ce8\u610f\u529b\u4f18\u5316\u6a21\u5757ARM\uff08Attention Refinement Module\uff09\uff0c\u8fd9\u4e24\u4e2a\u6a21\u5757\u8fdb\u4e00\u6b65\u4ece\u6574\u4f53\u4e0a\u63d0\u5347\u4e86\u8bed\u4e49\u5206\u5272\u7684\u7cbe\u5ea6\u3002"),(0,n.kt)("hr",null),(0,n.kt)("h2",c({},{id:"\u7f51\u7edc\u7ed3\u6784\u8bbe\u8ba1"}),"\u7f51\u7edc\u7ed3\u6784\u8bbe\u8ba1"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210704141854108",src:a(23925).Z,width:"1139",height:"630"})),(0,n.kt)("p",null,"\u4e0a\u56fe\u662fBiSeNet\u7684\u7f51\u7edc\u7ed3\u6784\u3002\u53ef\u4ee5\u770b\u5230\u5176\u91cd\u8981\u7ec4\u6210\u90e8\u5206Spatial Path\u3001Context Path\u4ee5\u53ca\u4e24\u4e2a\u4f18\u5316\u6a21\u5757Attention Refinement\uff08\u539f\u56fe\u4e2d\u6253\u9519\u4e86\u5355\u8bcd\uff09\u3001Feature Fusion Module\u3002"),(0,n.kt)("h3",c({},{id:"spatial-path"}),"Spatial Path"),(0,n.kt)("p",null,"\u5728\u8bed\u4e49\u5206\u5272\u4efb\u52a1\u4e2d\uff0c\u7a7a\u95f4\u5206\u8fa8\u7387\u548c\u611f\u53d7\u91ce\u5f88\u96be\u4e24\u5168\uff0c\u5c24\u5176\u662f\u5728\u5b9e\u65f6\u8bed\u4e49\u5206\u5272\u7684\u60c5\u51b5\u4e0b\uff0c\u73b0\u6709\u65b9\u6cd5\u901a\u5e38\u662f\u5229\u7528\u5c0f\u7684\u8f93\u5165\u56fe\u50cf\u6216\u8005\u8f7b\u91cf\u4e3b\u5e72\u6a21\u578b\u5b9e\u73b0\u52a0\u901f\u3002\u4f46\u662f\u5c0f\u56fe\u50cf\u76f8\u8f83\u4e8e\u539f\u56fe\u50cf\u7f3a\u5931\u4e86\u5f88\u591a\u7a7a\u95f4\u4fe1\u606f\uff0c\u800c\u8f7b\u91cf\u7ea7\u6a21\u578b\u5219\u7531\u4e8e\u88c1\u526a\u901a\u9053\u800c\u635f\u5bb3\u4e86\u7a7a\u95f4\u4fe1\u606f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210704144527369",src:a(23624).Z,width:"313",height:"351"})),(0,n.kt)("p",null,"\u5728\u539f\u8bba\u6587\u4e2d\uff0c\u4e3a\u4e86\u4fdd\u6301\u5145\u8db3\u7684\u7a7a\u95f4\u4fe1\u606f\uff0cSpatial Path\u5305\u542b\u4e09\u4e2a\u5c42\uff0c\u6bcf\u4e2a\u5c42\u7531\u4e00\u4e2a\u6b65\u957f\u4e3a2\u7684\u5377\u79ef\u548c\u4e00\u4e2aBN\u5c42\u4ee5\u53ca\u4e00\u4e2a\u975e\u7ebf\u6027\u7684ReLU\u6fc0\u6d3b\u5c42\u6784\u6210\u3002\u8fd9\u6837\u505a\u4f7f\u5f97Spatial Path\u4ec5\u5bf9\u539f\u56fe\u8fdb\u884c1/8\u4e0b\u91c7\u6837\uff0c\u4fdd\u7559\u4e86\u4e30\u5bcc\u7684\u7a7a\u95f4\u4fe1\u606f\u3002"),(0,n.kt)("h3",c({},{id:"context-path"}),"Context Path"),(0,n.kt)("p",null,'\u5728\u8bed\u4e49\u5206\u5272\u4efb\u52a1\u4e2d\uff0c\u611f\u53d7\u91ce\u5bf9\u4e8e\u6027\u80fd\u8868\u73b0\u81f3\u5173\u91cd\u8981\u3002\u4e3a\u589e\u5927\u611f\u53d7\u91ce\uff0c\u4e00\u4e9b\u65b9\u6cd5\u5229\u7528\u91d1\u5b57\u5854\u6c60\u5316\u6a21\u5757\uff0c\u91d1\u5b57\u5854\u578b\u7a7a\u6d1e\u6c60\u5316\uff08ASPP\uff09\u6216\u4f7f\u7528"large kernel"\uff0c\u4f46\u662f\u8fd9\u4e9b\u64cd\u4f5c\u6bd4\u8f83\u8017\u8d39\u8ba1\u7b97\u548c\u5185\u5b58\uff0c\u5bfc\u81f4\u901f\u5ea6\u6162\uff0c\u8fd9\u4e9b\u7f3a\u70b9\u5728\u5b9e\u65f6\u7684\u4efb\u52a1\u4e0a\u5c24\u4e3a\u7a81\u51fa\u3002\u51fa\u4e8e\u8f83\u5927\u611f\u53d7\u91ce\u548c\u8f83\u9ad8\u8ba1\u7b97\u6548\u7387\u517c\u5f97\u7684\u8003\u91cf\uff0c\u672c\u6587\u63d0\u51fa Context Path\uff0c\u5b83\u5145\u5206\u5229\u7528\u8f7b\u91cf\u7ea7\u6a21\u578b\u4e0e\u5168\u5c40\u5e73\u5747\u6c60\u5316\u4ee5\u63d0\u4f9b\u5927\u611f\u53d7\u91ce\u3002'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210704145307009",src:a(27439).Z,width:"525",height:"658"})),(0,n.kt)("p",null,"\u5728\u672c\u5de5\u4f5c\u4e2d\uff0c\u8f7b\u91cf\u7ea7\u6a21\u578b\uff0c\u6bd4\u5982 Xception\uff0c\u53ef\u4ee5\u5feb\u901f\u4e0b\u91c7\u6837\u7279\u5f81\u56fe\u4ee5\u83b7\u5f97\u5927\u611f\u53d7\u91ce\uff0c\u7f16\u7801\u9ad8\u5c42\u8bed\u4e49\u8bed\u5883\u4fe1\u606f\u3002\u63a5\u7740\uff0c\u672c\u6587\u5728\u8f7b\u91cf\u7ea7\u6a21\u578b\u672b\u7aef\u6dfb\u52a0\u4e00\u4e2a\u5168\u5c40\u5e73\u5747\u6c60\u5316\uff0c\u901a\u8fc7\u5168\u5c40\u8bed\u5883\u4fe1\u606f\u63d0\u4f9b\u4e00\u4e2a\u6700\u5927\u611f\u53d7\u91ce\u3002\u5728\u8f7b\u91cf\u7ea7\u6a21\u578b\u4e2d\uff0c\u672c\u6587\u501f\u52a9 U \u5f62\u7ed3\u6784\u878d\u5408\u6700\u540e\u4e24\u4e2a\u9636\u6bb5\u7684\u7279\u5f81\uff0c\u4f46\u8fd9\u4e0d\u662f\u4e00\u4e2a\u5b8c\u6574\u7684 U \u5f62\u7ed3\u6784\u3002\u56fe 2(c) \u5168\u9762\u5c55\u793a\u4e86 Context Path\u3002"),(0,n.kt)("h4",c({},{id:"attention-refinement-module-arm"}),"Attention Refinement Module (ARM)"),(0,n.kt)("p",null,"\u5728 Context Path \u4e2d\uff0c\u672c\u6587\u63d0\u51fa\u4e00\u4e2a\u72ec\u7279\u7684\u6ce8\u610f\u529b\u4f18\u5316\u6a21\u5757\uff0c\u4ee5\u4f18\u5316\u6bcf\u4e00\u9636\u6bb5\u7684\u7279\u5f81\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210704145528506",src:a(68803).Z,width:"383",height:"211"})),(0,n.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0cARM \u501f\u52a9\u5168\u5c40\u5e73\u5747\u6c60\u5316\u6355\u83b7\u5168\u5c40\u8bed\u5883\u5e76\u8ba1\u7b97\u6ce8\u610f\u529b\u5411\u91cf\u4ee5\u6307\u5bfc\u7279\u5f81\u5b66\u4e60\u3002\u8fd9\u4e00\u8bbe\u8ba1\u53ef\u4ee5\u4f18\u5316 Context Path \u4e2d\u6bcf\u4e00\u9636\u6bb5\u7684\u8f93\u51fa\u7279\u5f81\uff0c\u65e0\u9700\u4efb\u4f55\u4e0a\u91c7\u6837\u64cd\u4f5c\u5373\u53ef\u8f7b\u6613\u6574\u5408\u5168\u5c40\u8bed\u5883\u4fe1\u606f\uff0c\u56e0\u6b64\uff0c\u5176\u8ba1\u7b97\u6210\u672c\u51e0\u4e4e\u53ef\u5ffd\u7565\u3002"),(0,n.kt)("h3",c({},{id:"feature-fusion-module-ffm"}),"Feature Fusion Module (FFM)"),(0,n.kt)("p",null,"\u5728\u7279\u5f81\u8868\u793a\u7684\u5c42\u9762\u4e0a\uff0c\u4e24\u8def\u7f51\u7edc\u7684\u7279\u5f81\u5e76\u4e0d\u76f8\u540c\u3002\u56e0\u6b64\u4e0d\u80fd\u7b80\u5355\u5730\u52a0\u6743\u8fd9\u4e9b\u7279\u5f81\u3002\u7531 Spatial Path\u6355\u83b7\u7684\u7a7a\u95f4\u4fe1\u606f\u7f16\u7801\u4e86\u7edd\u5927\u591a\u6570\u7684\u4e30\u5bcc\u7ec6\u8282\u4fe1\u606f\u3002\u800c Context Path \u7684\u8f93\u51fa\u7279\u5f81\u4e3b\u8981\u7f16\u7801\u8bed\u5883\u4fe1\u606f\u3002\u6362\u8a00\u4e4b\uff0cSpatial Path \u7684\u8f93\u51fa\u7279\u5f81\u662f\u4f4e\u5c42\u7ea7\u7684\uff0cContext Path \u7684\u8f93\u51fa\u7279\u5f81\u662f\u9ad8\u5c42\u7ea7\u7684\u3002\u56e0\u6b64\uff0c\u672c\u6587\u63d0\u51fa\u4e00\u4e2a\u72ec\u7279\u7684\u7279\u5f81\u878d\u5408\u6a21\u5757\u4ee5\u878d\u5408\u8fd9\u4e9b\u7279\u5f81\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image-20210704150819590",src:a(55227).Z,width:"599",height:"251"})),(0,n.kt)("p",null,"\u5728\u7279\u5f81\u7684\u4e0d\u540c\u5c42\u7ea7\u7ed9\u5b9a\u7684\u60c5\u51b5\u4e0b\uff0c\u672c\u6587\u9996\u5148\u8fde\u63a5 Spatial Path \u548c Context Path \u7684\u8f93\u51fa\u7279\u5f81\uff1b\u63a5\u7740\uff0c\u901a\u8fc7\u6279\u5f52\u4e00\u5316\u5e73\u8861\u7279\u5f81\u7684\u5c3a\u5ea6\u3002\u4e0b\u4e00\u6b65\uff0c\u50cf",(0,n.kt)("a",c({parentName:"p"},{href:"./%5B23%5DSqueeze-and-Excitation-Networks"}),"SENet"),"\u4e00\u6837\uff0c\u628a\u76f8\u8fde\u63a5\u7684\u7279\u5f81\u6c60\u5316\u4e3a\u4e00\u4e2a\u7279\u5f81\u5411\u91cf\uff0c\u5e76\u8ba1\u7b97\u4e00\u4e2a\u6743\u91cd\u5411\u91cf\u3002\u8fd9\u4e00\u6743\u91cd\u5411\u91cf\u53ef\u4ee5\u91cd\u65b0\u52a0\u6743\u7279\u5f81\uff0c\u8d77\u5230\u7279\u5f81\u9009\u62e9\u548c\u7ed3\u5408\u7684\u4f5c\u7528\u3002\u4e0a\u56fe\u5c55\u793a\u4e86\u8fd9\u4e00\u8bbe\u8ba1\u7684\u7ec6\u8282\u3002"),(0,n.kt)("h2",c({},{id:"\u5b9e\u9a8c"}),"\u5b9e\u9a8c"),(0,n.kt)("p",null,"\u5b9e\u9a8c\u90e8\u5206\u8bf7\u81ea\u884c\u9605\u8bfb\u539f\u8bba\u6587\u3002"))}w.isMDXComponent=!0},17426:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20210704101433666-123c7f576017c475fb4fa8e3a507b61e.png"},54876:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20210704102757859-98a380bdd1662da7f682da3048fd1a5e.png"},47e3:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20210704102830425-4704ba1016a5406ad789ef27aed50af9.png"},54216:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20210704103510162-b07bae6fce147f59d2928542cb6b59b2.png"},23925:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20210704141854108-1028f8624ca37778cd9f846bebfdd718.png"},23624:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20210704144527369-7907d3f07d3299bf8f8518bdbb813225.png"},27439:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20210704145307009-8cb05d3ce02ee8a6480ac21105f7d9ec.png"},68803:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20210704145528506-6968338cc8150c82afd8ea1bd38cb0e2.png"},55227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20210704150819590-0779d2c320de89a502426a3240645cfb.png"}}]);