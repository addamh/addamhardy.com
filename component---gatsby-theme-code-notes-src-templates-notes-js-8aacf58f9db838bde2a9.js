(self.webpackChunksite=self.webpackChunksite||[]).push([[218],{2636:function(t,e,n){"use strict";n.d(e,{O:function(){return f}});var o=n(7378),i=n(2861),a=n(9465),r=n(3542),s=n(2186),l=n(9581),c=n(8689),d=n(7326),u=n(9275),g=n(5242),m=n(8886),f=function(t){var e=t.activeTag,n=t.path,f=t.basePath,h=t.hasUntagged,p=t.title,x=t.tags,v=t.pages,Z=t.children,b=(0,r.B7)().theme,w=(0,g.$)(),y=(w.showThemeInfo,w.showDescriptionInSidebar),k=w.description,C=w.logo,S=w.openSearch,z=(0,o.useState)(!1),T=z[0],E=z[1],I=(0,s.If)(),M=I[0],q=I[1],N=(0,o.useContext)(m.ci).query,U="/notes"===n;return(0,a.tZ)(o.Fragment,null,(0,a.tZ)(d.q,{key:"app-metadata",titleTemplate:"%s · "+k,defaultTitle:k},(0,a.tZ)("html",{lang:"en"}),(0,a.tZ)("meta",{charSet:"utf-8"}),(0,a.tZ)("title",null,p),(0,a.tZ)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),S&&S.siteUrl&&(0,a.tZ)("link",{rel:"search",type:"application/opensearchdescription+xml",href:"/opensearch.xml",title:S.siteShortName})),(0,a.tZ)(i.xB,{key:"global-styles",styles:(0,l.iv)({"*":{boxSizing:"border-box"},body:{margin:0},":root":{fontSize:"16px"},"@media (min-width: 480px)":{":root":{fontSize:"calc(1rem + ((1vw - 4.8px) * 0.2778))"}},"@media (min-width: 1920px)":{":root":{fontSize:"20px"}}})}),(0,a.tZ)(c.xu,{as:"main",sx:{position:["relative","fixed"],top:[0,3],right:[0,3],bottom:[0,3],left:[0,b.sizes.sidebar],overflowX:"hidden",overflowY:"auto",zIndex:"low",p:[3,6],bg:"contentBg",transform:[T&&"translateX("+b.sizes.sidebar+")","translateX(0)"],transition:"all 200ms ease-in-out ",boxShadow:"md",borderRadius:[0,"default"],minHeight:["100vh","unset"]}},(0,a.tZ)(c.W2,{sx:{display:"flex",flexDirection:"column",minHeight:"100%"}},(0,a.tZ)(c.kC,{sx:{alignItems:"center",mb:5}},(0,a.tZ)(c.j2,{"aria-label":"Toggle Menu",onClick:function(){return E(!T)},sx:{display:["block","none"],mr:3}})),U?(0,a.tZ)(c.xu,{sx:{mb:6}},(0,a.tZ)(m.Mj,null)):"",N?(0,a.tZ)(m.sZ,null):Z)),(0,a.tZ)(c.xu,{as:"header",sx:{width:"sidebar",position:"fixed",top:0,right:[0,"auto"],left:0,bottom:0,overflowX:"hidden",overflowY:"auto",pt:4}},(0,a.tZ)(c.xu,{sx:{mb:3,px:3}},!!C&&(0,a.tZ)(c.xu,{sx:{mb:3}},(0,a.tZ)(c.Ee,{src:C,variant:"logo",alt:"logo"})),y&&k&&(0,a.tZ)(c.xu,{sx:{mb:3}},(0,a.tZ)(c.xv,{sx:{color:"textStrong",lineHeight:"snug",fontWeight:"extrabold"}},(0,a.tZ)("a",{href:"/"},k)))),(0,a.tZ)(u.D,{tags:x,pages:v,activeTag:e,rootPath:n===f,basePath:f,location:n,hasUntagged:h}),(0,a.tZ)(c.xu,{sx:{position:"fixed",left:0,width:"sidebar",bottom:0,bg:"backgroundTransparent",py:3}},(0,a.tZ)(c.hU,{onClick:function(t){q("light"===M?"dark":"light")},"aria-label":"Toggle dark mode",sx:{color:"text",zIndex:11,p:0,display:"block",mx:"auto",transition:"all 200ms ease-in-out ",cursor:"pointer","&:hover":{color:"primary"}}},(0,a.tZ)("svg",{width:"1.5rem",height:"1.5rem",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:"currentColor"},(0,a.tZ)("path",{d:"M912.1 512c0 20-1.4 39.9-4 59.7.5-3.5 1-7.1 1.4-10.6-5.2 38.4-15.5 75.9-30.5 111.6 1.3-3.2 2.7-6.4 4-9.6-14.8 34.8-34 67.6-57.1 97.6l6.3-8.1c-23 29.7-49.8 56.4-79.5 79.5l8.1-6.3c-30 23.1-62.8 42.3-97.6 57.1 3.2-1.3 6.4-2.7 9.6-4-35.7 15-73.2 25.3-111.6 30.6 3.5-.5 7.1-1 10.6-1.4a450.3 450.3 0 0 1-119.4 0c3.5.5 7.1 1 10.6 1.4-38.5-5.2-76-15.5-111.7-30.5 3.2 1.3 6.4 2.7 9.6 4-34.8-14.8-67.6-34-97.6-57.1l8.1 6.3c-29.7-23-56.4-49.8-79.5-79.5l6.3 8.1c-23.1-30-42.3-62.8-57.1-97.6 1.3 3.2 2.7 6.4 4 9.6-15-35.7-25.3-73.2-30.6-111.6.5 3.5 1 7.1 1.4 10.6a450.3 450.3 0 0 1 0-119.4c-.5 3.5-1 7.1-1.4 10.6 5.3-38.4 15.5-75.9 30.6-111.6-1.3 3.2-2.7 6.4-4 9.6 14.8-34.8 34-67.6 57.1-97.6l-6.3 8.1c23-29.7 49.8-56.4 79.5-79.5l-8.1 6.3c30-23.1 62.8-42.3 97.6-57.1-3.2 1.3-6.4 2.7-9.6 4 35.7-15 73.2-25.3 111.6-30.6-3.5.5-7.1 1-10.6 1.4 39.6-5.3 79.8-5.3 119.4 0-3.5-.5-7.1-1-10.6-1.4 38.4 5.3 75.9 15.5 111.6 30.6-3.2-1.3-6.4-2.7-9.6-4 34.8 14.8 67.6 34 97.6 57.1l-8.1-6.3c29.7 23 56.4 49.8 79.5 79.5l-6.3-8.1c23.1 30 42.3 62.8 57.1 97.6-1.3-3.2-2.7-6.4-4-9.6 15 35.7 25.3 73.2 30.6 111.6-.5-3.5-1-7.1-1.4-10.6 2.7 19.7 4 39.6 4 59.6 0 20.9 18.4 41 40 40s40-17.6 40-40c-.1-49.6-7.6-99.8-22.9-146.9-14.8-45.6-36.2-89.4-64-128.5-14.6-20.5-30.6-40.3-48.1-58.5-17.6-18.2-36.8-34.5-56.9-49.9-38-29.1-80.5-51.4-125.3-67.9-46.3-17.1-95.9-26.1-145.2-28.1-49.8-2-100.5 4.1-148.5 17.7-46.1 13.1-90.9 33.3-131 59.7-39.7 26.1-76 57.8-106.2 94.4-16.1 19.5-31.1 40-44.1 61.7-13.2 21.9-24 45-33.7 68.6-18.8 45.7-29.2 94.3-33 143.4-3.8 49.7.7 100.4 12.5 148.9C57 673.3 75.9 718.9 100.8 760c24.6 40.5 55.3 78 90.8 109.5 35.7 31.7 75.7 58.7 119.2 78.4 23.5 10.6 47.5 19.9 72.3 26.8 25.4 7.1 51.3 11.5 77.4 14.5 50 5.8 100.9 2.8 150.2-7.3 47.3-9.6 93.5-27.2 135.6-50.7 41.2-23 79.4-52.6 112.1-86.7 32.8-34.3 61.2-73.7 82.3-116.3 21.7-43.6 37.5-90.2 44.9-138.4 4-25.8 6.5-51.7 6.5-77.8 0-20.9-18.4-41-40-40-21.7 1-39.9 17.6-40 40z"}),(0,a.tZ)("path",{d:"M512 187.7v648.6c-179.1 0-324-145.2-324-324.3s144.9-324.3 324-324.3z"}),(0,a.tZ)("path",{d:"M482 187.7v569c0 26.2-.6 52.4 0 78.6v1.1l30-30c-14.4 0-28.8-1-43.1-2.8 2.7.4 5.3.7 8 1.1-28.6-3.9-56.5-11.5-83.1-22.6l7.2 3c-15-6.4-29.5-13.9-43.4-22.4-6.7-4.1-13.3-8.5-19.7-13.1-1.6-1.2-3.2-2.3-4.8-3.5-.8-.6-2.1-1.2-2.6-2-.1-.1 6.4 5.1 3 2.3-3.2-2.6-6.5-5.2-9.6-7.9-12.1-10.3-23.5-21.5-34.1-33.5-2.6-3-5.1-6-7.6-9-1.1-1.4-2.2-2.7-3.3-4.1-.5-.7-1.1-1.4-1.6-2.1 6.1 7.7 2.9 3.7 1.5 1.9-4.9-6.5-9.5-13.1-13.8-20-9.9-15.4-18.4-31.7-25.5-48.5l3 7.2c-11.2-26.6-18.8-54.5-22.6-83.1.4 2.7.7 5.3 1.1 8-3.7-28.6-3.7-57.6 0-86.2-.4 2.7-.7 5.3-1.1 8 3.9-28.6 11.4-56.5 22.6-83.1l-3 7.2c6.4-15 13.8-29.6 22.4-43.5 4.1-6.7 8.5-13.3 13.1-19.7 1.1-1.6 2.3-3.2 3.5-4.8.5-.7 1.2-2.2 2-2.6.1-.1-5 6.4-2.3 3 2.6-3.3 5.2-6.5 7.9-9.7 10.3-12.2 21.5-23.6 33.4-34.1 3-2.6 5.9-5.1 9-7.6 1.4-1.1 2.7-2.2 4.1-3.3.7-.5 1.4-1.1 2.1-1.6-7.6 6.1-3.7 2.9-1.9 1.5 6.5-4.9 13.1-9.5 19.9-13.9 15.4-9.9 31.6-18.4 48.4-25.6l-7.2 3c26.6-11.2 54.5-18.8 83.1-22.6-2.7.4-5.3.7-8 1.1 14.3-1.9 28.7-2.8 43.1-2.8 15.7 0 30.7-13.8 30-30-.7-16.2-13.2-30-30-30-72.2.2-144.6 22.3-203.4 64.4-59.5 42.6-104.5 101.2-129.7 170-25.2 68.6-27.5 146.1-7.6 216.3C190.5 676.5 230.6 739.1 285 784c57.5 47.4 126.9 75.7 201.2 81.6 8.6.7 17.3 1 25.9 1 16.2 0 30-13.8 30-30v-64.5-155-187.5-162c0-26.2.5-52.4 0-78.6v-1.1c0-15.7-13.8-30.7-30-30-16.4.5-30.1 13-30.1 29.8z"}))))))}},1630:function(t,e,n){"use strict";n.d(e,{h:function(){return Z}});var o=n(9465),i=n(8689),a=n(7378),r=n(7597),s=n(1184),l=function(t,e){if(e)return e.key===t?"active "+e.direction:void 0},c=function(t){var e=t.requestSort,n=t.sortKey,o=t.sortConfig,r=t.children;return a.createElement(i.zx,{variant:"sort",type:"button",onClick:function(){return e(n)},className:l(n,o)},r,o.key===n&&a.createElement(a.Fragment,null,"descending"===o.direction?a.createElement(s.PNI,{sx:{color:"inherit",pointerEvents:"none"},size:"15px"}):a.createElement(s.a7d,{sx:{color:"inherit",pointerEvents:"none"},size:"15px"})))},d=n(6250),u=n(3697);var g=function(t,e){void 0===e&&(e=null);var n,o,i,r,s,l,c=(n="codeNotesSortConfig",o=e,i=a.useState((function(){try{var t=window.localStorage.getItem(n);if(t){var e=t.match(/^(\[|\{|\d).*(\]|\}|\d)?$/gm);return e&&e.length?JSON.parse(t):t}return o}catch(i){return o}})),r=(0,u.Z)(i,2),s=r[0],l=r[1],[s,a.useCallback((function(t){try{l(t),"object"==typeof t?window.localStorage.setItem(n,JSON.stringify(t)):window.localStorage.setItem(n,t)}catch(e){console.error(e)}}),[n])]),g=c[0],m=c[1];return{items:(0,a.useMemo)((function(){var e=(0,d.Z)(t);return null!==g&&e.sort((function(t,e){var n,o,i,a;return(null===(n=t.node.frontmatter[g.key])||void 0===n?void 0:n.toLowerCase())<(null===(o=e.node.frontmatter[g.key])||void 0===o?void 0:o.toLowerCase())?"ascending"===g.direction?-1:1:(null===(i=t.node.frontmatter[g.key])||void 0===i?void 0:i.toLowerCase())>(null===(a=e.node.frontmatter[g.key])||void 0===a?void 0:a.toLowerCase())?"ascending"===g.direction?1:-1:0})),e}),[t,g]),requestSort:function(t){var e="ascending";g&&g.key===t&&"ascending"===g.direction&&(e="descending"),m({key:t,direction:e})},sortConfig:g}},m=n(7175),f=n.n(m),h=function(t){var e=t.notes,n=g(e,{key:"modified",direction:"descending"}),o=n.items,s=n.requestSort,l=n.sortConfig;return a.createElement(a.Fragment,null,a.createElement(i.kC,{sx:{justifyContent:"flex-end",alignItems:"center",mb:2}},a.createElement(c,{requestSort:s,sortKey:"title",sortConfig:l},"A-Z"),a.createElement(c,{requestSort:s,sortKey:"modifiedTimestamp",sortConfig:l},"Date")),o.map((function(t){var e=t.node,n=e.frontmatter,o=n.title,i=n.tags,s=n.emoji,l=n.modified,c=n.modifiedTimestamp,d="/"+f()(e.fields.slug);return a.createElement(r.y,{title:o,emoji:s,tags:i,slug:d,key:d,dateModified:l,modifiedTimestamp:c})})))},p=n(2636),x=n(5242),v=n(3534),Z=function(t){var e=t.data,n=t.pageContext,r=t.location,s=e.allMdx.edges,l=(0,x.$)().title;return(0,o.tZ)(p.O,{activeTag:n.tag,path:r.pathname,basePath:n.basePath,hasUntagged:n.hasUntagged,tags:n.tags,pages:n.pages,title:n.tag?"Tag: "+n.tag:l},n.tag&&(0,o.tZ)(i.X6,{as:"h1",variant:"noteTitle"},"untagged"!==n.tag?(0,o.tZ)(a.Fragment,null,(0,o.tZ)(v.Y,{tag:n.tag,size:"0.5em"})," ",n.tag):(0,o.tZ)(a.Fragment,null,"Untagged Notes")),(0,o.tZ)(h,{notes:s}))}},3554:function(t,e,n){"use strict";n.r(e);var o=n(1630);e.default=o.h}}]);
//# sourceMappingURL=component---gatsby-theme-code-notes-src-templates-notes-js-8aacf58f9db838bde2a9.js.map