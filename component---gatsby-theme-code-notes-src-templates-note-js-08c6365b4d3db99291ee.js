(self.webpackChunksite=self.webpackChunksite||[]).push([[155],{5365:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},9090:function(t,e,n){var r=n(5365);t.exports=function(t){if(Array.isArray(t))return r(t)}},639:function(t,e,n){var r=n(7276),o=n(7321);function i(e,n,a){return o()?t.exports=i=Reflect.construct:t.exports=i=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}t.exports=i},5526:function(t){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},7321:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},8850:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},5929:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7276:function(t){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,r)}t.exports=e},6292:function(t,e,n){var r=n(9090),o=n(8850),i=n(4595),a=n(5929);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},4595:function(t,e,n){var r=n(5365);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},2636:function(t,e,n){"use strict";n.d(e,{O:function(){return d}});var r=n(7378),o=n(2861),i=n(9465),a=n(3542),l=n(2186),s=n(9581),c=n(8689),u=n(7326),p=n(9275),f=n(5242),m=n(8886),d=function(t){var e=t.activeTag,n=t.path,d=t.basePath,x=t.hasUntagged,h=t.title,g=t.tags,b=t.pages,y=t.children,v=(0,a.B7)().theme,Z=(0,f.$)(),w=(Z.showThemeInfo,Z.showDescriptionInSidebar),S=Z.description,k=Z.logo,O=Z.openSearch,E=(0,r.useState)(!1),j=E[0],P=E[1],z=(0,l.If)(),C=z[0],T=z[1],D=(0,r.useContext)(m.ci).query,U="/notes"===n;return(0,i.tZ)(r.Fragment,null,(0,i.tZ)(u.q,{key:"app-metadata",titleTemplate:"%s · "+S,defaultTitle:S},(0,i.tZ)("html",{lang:"en"}),(0,i.tZ)("meta",{charSet:"utf-8"}),(0,i.tZ)("title",null,h),(0,i.tZ)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),O&&O.siteUrl&&(0,i.tZ)("link",{rel:"search",type:"application/opensearchdescription+xml",href:"/opensearch.xml",title:O.siteShortName})),(0,i.tZ)(o.xB,{key:"global-styles",styles:(0,s.iv)({"*":{boxSizing:"border-box"},body:{margin:0},":root":{fontSize:"16px"},"@media (min-width: 480px)":{":root":{fontSize:"calc(1rem + ((1vw - 4.8px) * 0.2778))"}},"@media (min-width: 1920px)":{":root":{fontSize:"20px"}}})}),(0,i.tZ)(c.xu,{as:"main",sx:{position:["relative","fixed"],top:[0,3],right:[0,3],bottom:[0,3],left:[0,v.sizes.sidebar],overflowX:"hidden",overflowY:"auto",zIndex:"low",bg:"contentBg",transform:[j&&"translateX("+v.sizes.sidebar+")","translateX(0)"],transition:"all 200ms ease-in-out ",boxShadow:"md",borderRadius:[0,"default"],minHeight:["100vh","unset"]}},(0,i.tZ)(c.W2,{sx:{display:"flex",flexDirection:"column",minHeight:"100%"}},(0,i.tZ)(c.kC,{sx:{alignItems:"center",mb:5}},(0,i.tZ)(c.j2,{"aria-label":"Toggle Menu",onClick:function(){return P(!j)},sx:{display:["block","none"],mr:3}})),U?(0,i.tZ)(c.xu,{sx:{mb:6}},(0,i.tZ)(m.Mj,null)):"",D?(0,i.tZ)(m.sZ,null):y)),(0,i.tZ)(c.xu,{as:"header",sx:{width:"sidebar",position:"fixed",top:0,right:[0,"auto"],left:0,bottom:0,overflowX:"hidden",overflowY:"auto",pt:4}},(0,i.tZ)(c.xu,{sx:{mb:3,px:3}},!!k&&(0,i.tZ)(c.xu,{sx:{mb:3}},(0,i.tZ)(c.Ee,{src:k,variant:"logo",alt:"logo"})),w&&S&&(0,i.tZ)(c.xu,{sx:{mb:3}},(0,i.tZ)(c.xv,{sx:{color:"textStrong",lineHeight:"snug",fontWeight:"extrabold"}},(0,i.tZ)("a",{href:"/"},S)))),(0,i.tZ)(p.D,{tags:g,pages:b,activeTag:e,rootPath:n===d,basePath:d,location:n,hasUntagged:x}),(0,i.tZ)(c.xu,{sx:{position:"fixed",left:0,width:"sidebar",bottom:0,bg:"backgroundTransparent",py:3}},(0,i.tZ)(c.hU,{onClick:function(t){T("light"===C?"dark":"light")},"aria-label":"Toggle dark mode",sx:{color:"text",zIndex:11,p:0,display:"block",mx:"auto",transition:"all 200ms ease-in-out ",cursor:"pointer","&:hover":{color:"primary"}}},(0,i.tZ)("svg",{width:"1.5rem",height:"1.5rem",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:"currentColor"},(0,i.tZ)("path",{d:"M912.1 512c0 20-1.4 39.9-4 59.7.5-3.5 1-7.1 1.4-10.6-5.2 38.4-15.5 75.9-30.5 111.6 1.3-3.2 2.7-6.4 4-9.6-14.8 34.8-34 67.6-57.1 97.6l6.3-8.1c-23 29.7-49.8 56.4-79.5 79.5l8.1-6.3c-30 23.1-62.8 42.3-97.6 57.1 3.2-1.3 6.4-2.7 9.6-4-35.7 15-73.2 25.3-111.6 30.6 3.5-.5 7.1-1 10.6-1.4a450.3 450.3 0 0 1-119.4 0c3.5.5 7.1 1 10.6 1.4-38.5-5.2-76-15.5-111.7-30.5 3.2 1.3 6.4 2.7 9.6 4-34.8-14.8-67.6-34-97.6-57.1l8.1 6.3c-29.7-23-56.4-49.8-79.5-79.5l6.3 8.1c-23.1-30-42.3-62.8-57.1-97.6 1.3 3.2 2.7 6.4 4 9.6-15-35.7-25.3-73.2-30.6-111.6.5 3.5 1 7.1 1.4 10.6a450.3 450.3 0 0 1 0-119.4c-.5 3.5-1 7.1-1.4 10.6 5.3-38.4 15.5-75.9 30.6-111.6-1.3 3.2-2.7 6.4-4 9.6 14.8-34.8 34-67.6 57.1-97.6l-6.3 8.1c23-29.7 49.8-56.4 79.5-79.5l-8.1 6.3c30-23.1 62.8-42.3 97.6-57.1-3.2 1.3-6.4 2.7-9.6 4 35.7-15 73.2-25.3 111.6-30.6-3.5.5-7.1 1-10.6 1.4 39.6-5.3 79.8-5.3 119.4 0-3.5-.5-7.1-1-10.6-1.4 38.4 5.3 75.9 15.5 111.6 30.6-3.2-1.3-6.4-2.7-9.6-4 34.8 14.8 67.6 34 97.6 57.1l-8.1-6.3c29.7 23 56.4 49.8 79.5 79.5l-6.3-8.1c23.1 30 42.3 62.8 57.1 97.6-1.3-3.2-2.7-6.4-4-9.6 15 35.7 25.3 73.2 30.6 111.6-.5-3.5-1-7.1-1.4-10.6 2.7 19.7 4 39.6 4 59.6 0 20.9 18.4 41 40 40s40-17.6 40-40c-.1-49.6-7.6-99.8-22.9-146.9-14.8-45.6-36.2-89.4-64-128.5-14.6-20.5-30.6-40.3-48.1-58.5-17.6-18.2-36.8-34.5-56.9-49.9-38-29.1-80.5-51.4-125.3-67.9-46.3-17.1-95.9-26.1-145.2-28.1-49.8-2-100.5 4.1-148.5 17.7-46.1 13.1-90.9 33.3-131 59.7-39.7 26.1-76 57.8-106.2 94.4-16.1 19.5-31.1 40-44.1 61.7-13.2 21.9-24 45-33.7 68.6-18.8 45.7-29.2 94.3-33 143.4-3.8 49.7.7 100.4 12.5 148.9C57 673.3 75.9 718.9 100.8 760c24.6 40.5 55.3 78 90.8 109.5 35.7 31.7 75.7 58.7 119.2 78.4 23.5 10.6 47.5 19.9 72.3 26.8 25.4 7.1 51.3 11.5 77.4 14.5 50 5.8 100.9 2.8 150.2-7.3 47.3-9.6 93.5-27.2 135.6-50.7 41.2-23 79.4-52.6 112.1-86.7 32.8-34.3 61.2-73.7 82.3-116.3 21.7-43.6 37.5-90.2 44.9-138.4 4-25.8 6.5-51.7 6.5-77.8 0-20.9-18.4-41-40-40-21.7 1-39.9 17.6-40 40z"}),(0,i.tZ)("path",{d:"M512 187.7v648.6c-179.1 0-324-145.2-324-324.3s144.9-324.3 324-324.3z"}),(0,i.tZ)("path",{d:"M482 187.7v569c0 26.2-.6 52.4 0 78.6v1.1l30-30c-14.4 0-28.8-1-43.1-2.8 2.7.4 5.3.7 8 1.1-28.6-3.9-56.5-11.5-83.1-22.6l7.2 3c-15-6.4-29.5-13.9-43.4-22.4-6.7-4.1-13.3-8.5-19.7-13.1-1.6-1.2-3.2-2.3-4.8-3.5-.8-.6-2.1-1.2-2.6-2-.1-.1 6.4 5.1 3 2.3-3.2-2.6-6.5-5.2-9.6-7.9-12.1-10.3-23.5-21.5-34.1-33.5-2.6-3-5.1-6-7.6-9-1.1-1.4-2.2-2.7-3.3-4.1-.5-.7-1.1-1.4-1.6-2.1 6.1 7.7 2.9 3.7 1.5 1.9-4.9-6.5-9.5-13.1-13.8-20-9.9-15.4-18.4-31.7-25.5-48.5l3 7.2c-11.2-26.6-18.8-54.5-22.6-83.1.4 2.7.7 5.3 1.1 8-3.7-28.6-3.7-57.6 0-86.2-.4 2.7-.7 5.3-1.1 8 3.9-28.6 11.4-56.5 22.6-83.1l-3 7.2c6.4-15 13.8-29.6 22.4-43.5 4.1-6.7 8.5-13.3 13.1-19.7 1.1-1.6 2.3-3.2 3.5-4.8.5-.7 1.2-2.2 2-2.6.1-.1-5 6.4-2.3 3 2.6-3.3 5.2-6.5 7.9-9.7 10.3-12.2 21.5-23.6 33.4-34.1 3-2.6 5.9-5.1 9-7.6 1.4-1.1 2.7-2.2 4.1-3.3.7-.5 1.4-1.1 2.1-1.6-7.6 6.1-3.7 2.9-1.9 1.5 6.5-4.9 13.1-9.5 19.9-13.9 15.4-9.9 31.6-18.4 48.4-25.6l-7.2 3c26.6-11.2 54.5-18.8 83.1-22.6-2.7.4-5.3.7-8 1.1 14.3-1.9 28.7-2.8 43.1-2.8 15.7 0 30.7-13.8 30-30-.7-16.2-13.2-30-30-30-72.2.2-144.6 22.3-203.4 64.4-59.5 42.6-104.5 101.2-129.7 170-25.2 68.6-27.5 146.1-7.6 216.3C190.5 676.5 230.6 739.1 285 784c57.5 47.4 126.9 75.7 201.2 81.6 8.6.7 17.3 1 25.9 1 16.2 0 30-13.8 30-30v-64.5-155-187.5-162c0-26.2.5-52.4 0-78.6v-1.1c0-15.7-13.8-30.7-30-30-16.4.5-30.1 13-30.1 29.8z"}))))))}},1427:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(7378),o=n(9465),i=n(8689),a=n(7131),l=n(9211),s=n(5242),c=function(t){var e=t.items;return r.createElement(i.xu,{as:"ul",sx:{listStyleType:"none",pl:3}},e.map((function(t){return r.createElement(u,{key:t.url+"-item",item:t})})))},u=function(t){var e=t.item;return r.createElement("li",null,r.createElement(i.rU,{href:e.url},e.title),e.items&&e.items.length&&r.createElement(c,{key:e.url+"-list",items:e.items}))},p=function(t){var e=t.toc;return e.items?r.createElement(i.xu,{as:"details",sx:{my:4,fontSize:1}},r.createElement(i.xu,{as:"summary",sx:{textTransform:"uppercase",fontSize:0,cursor:"pointer"}},"On this page"),r.createElement(c,{items:e.items,key:"toc-list"})):null},f=n(2636),m=n(6398),d=function(t){var e=t.references;return r.createElement(i.xu,{as:"details",sx:{my:4,fontSize:1}},r.createElement(i.xu,{as:"summary",sx:{textTransform:"uppercase",fontSize:0,cursor:"pointer"}},"Back Links (",e.length,")"),r.createElement(i.xu,{as:"ul",sx:{listStyleType:"none",pl:3}},e.map((function(t){return r.createElement("li",{key:t.slug+"-item"},r.createElement(i.rU,{href:"/"+t.slug.toLowerCase()},t.frontmatter.title))}))))},x=function(t){var e=t.data,n=t.pageContext,c=t.location;if(!e)return null;var u=(0,s.$)().showDate,x=e.mdx,h=x.frontmatter,g=h.title,b=h.tags,y=h.emoji,v=h.link,Z=h.modified,w=h.modifiedTimestamp,S=x.body,k=x.parent.relativePath,O=x.tableOfContents,E=(0,s.$)().gitRepoContentPath,j=!(!v&&!u),P=(0,r.useState)(v),z=P[0],C=P[1];return(0,r.useEffect)((function(){if(v&&"URL"in window){var t=new URL(v),e=t.hostname,n=t.pathname;C(""+e+n)}}),[v]),(0,o.tZ)(f.O,{hasUntagged:n.hasUntagged,basePath:n.basePath,tags:n.tags,pages:n.pages,path:c.pathname,title:g},(0,o.tZ)("article",null,(0,o.tZ)(i.xu,{as:"header",sx:{my:4,borderBottom:"1px solid",borderBottomColor:"muted",pb:4}},y&&(0,o.tZ)(i.xu,{sx:{fontSize:7,lineHeight:1,mb:3}},(0,o.tZ)("span",{role:"img"},y)),(0,o.tZ)(i.X6,{as:"h1",variant:"noteTitle"},g),j&&(0,o.tZ)(i.kC,{sx:{mb:2,alignItems:"center"}},v&&(0,o.tZ)(r.Fragment,null,(0,o.tZ)(l.NxY,{sx:{color:"input",pointerEvents:"none",mr:2,flexShrink:0}}),(0,o.tZ)(i.rU,{href:v,sx:{mr:4,fontSize:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}},z)),w&&Z&&(0,o.tZ)("time",{dateTime:w,sx:{display:"flex",alignItems:"center"}},(0,o.tZ)(l.bgj,{sx:{color:"input",pointerEvents:"none",mr:2,flexShrink:0}}),(0,o.tZ)(i.xv,{variant:"dateModified"},Z))),b&&(0,o.tZ)(i.kC,null,(0,o.tZ)(l.mnl,{sx:{color:"input",pointerEvents:"none",mr:2,flexShrink:0}}),(0,o.tZ)(m.P,{tags:b}))),!!e.mdx.references.length&&(0,o.tZ)(d,{references:e.mdx.references}),(0,o.tZ)(p,{toc:O}),(0,o.tZ)(a.MDXRenderer,null,S),(0,o.tZ)(i.xu,{sx:{mt:6,pt:4,borderTop:"2px solid",borderTopColor:"background"}},E&&(0,o.tZ)(i.rU,{href:""+E+k,sx:{fontSize:0}},"Edit this page"))))}},7131:function(t,e,n){var r=n(2018);t.exports={MDXRenderer:r}},2018:function(t,e,n){var r=n(639),o=n(6292),i=n(5526),a=n(5600);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=n(7378),u=n(1368).mdx,p=n(5179).useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,i=a(t,["scope","children"]),l=p(e),f=c.useMemo((function(){if(!n)return null;var t=s({React:c,mdx:u},l),e=Object.keys(t),i=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(i)))}),[n,e]);return c.createElement(f,s({},i))}}}]);
//# sourceMappingURL=component---gatsby-theme-code-notes-src-templates-note-js-08c6365b4d3db99291ee.js.map