(self.webpackChunkipc_144=self.webpackChunkipc_144||[]).push([[7729],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=s(n),p=l,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5687:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(2122),l=n(9756),a=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},u="Character Strings (C string)",s={unversionedId:"F-Refinements/character-strings",id:"F-Refinements/character-strings",isDocsHomePage:!1,title:"Character Strings (C string)",description:"Learning Outcomes",source:"@site/docs/F-Refinements/character-strings.md",sourceDirName:"F-Refinements",slug:"/F-Refinements/character-strings",permalink:"/F-Refinements/character-strings",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/F-Refinements/character-strings.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"courseNotesSidebar",previous:{title:"Records and Files",permalink:"/E-Secondary-Storage/records-and-files"},next:{title:"String Library",permalink:"/F-Refinements/string-library"}},c=[{value:"Learning Outcomes",id:"learning-outcomes",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Definition (review)",id:"definition-review",children:[{value:"Allocating Memory",id:"allocating-memory",children:[]}]}],d={toc:c};function m(t){var e=t.components,n=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"character-strings-c-string"},"Character Strings (C string)"),(0,a.kt)("h2",{id:"learning-outcomes"},"Learning Outcomes"),(0,a.kt)("p",null,"After reading this section, you will be able to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Design data collections using arrays to manage information efficiently"),(0,a.kt)("li",{parentName:"ul"},"Stream data using standard library functions to interact with users")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Although some original programming languages focused on processing numerical information, most languages include extensive features for processing textual data.  Textual data involves sets of characters and these sets are often referred to as character strings.  The C language libraries provide facilities for processing character strings, treated as arrays of characters with a special delimiter. "),(0,a.kt)("p",null,"This chapter introduces these C-style strings, highlights their distinguishing feature and notes the advantage of using strings to pass textual data from one function to another.  This chapter include the conversion specifiers for input and output of character strings."),(0,a.kt)("h2",{id:"definition-review"},"Definition (review)"),(0,a.kt)("p",null,"A string is a ",(0,a.kt)("inlineCode",{parentName:"p"},"char")," array with a special property: a terminator element follows the last ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"meaningful character"))," in the string.  We refer to this terminator as the ",(0,a.kt)("strong",{parentName:"p"},"null terminator")," and identify it by the escape sequence ",(0,a.kt)("inlineCode",{parentName:"p"},"'\\0'"),". "),(0,a.kt)("table",{border:"1"},(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"18",align:"center"},"char")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"\\0"))),(0,a.kt)("blockquote",null,(0,a.kt)("u",null,"Term Definition"),(0,a.kt)("br",null),'The term "Meaningful Characters" in these notes refers to the actual data content you want to manage in the C string character array.'),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"null terminator")," has the integral value of ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," on any host platform (in its collating sequence).  All of its bits are 0's.  The null terminator occupies the first position in the ",(0,a.kt)("a",{parentName:"p",href:"../Resources-Appendices/ascii-collating-sequence"},"ASCII")," and ",(0,a.kt)("a",{parentName:"p",href:"../Resources-Appendices/ebcdic-collating-sequence"},"EBCDIC"),". "),(0,a.kt)("p",null,"The index identifying the null terminator element is the same as the number of meaningful characters in the string. "),(0,a.kt)("table",{border:"1"},(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"18",align:"center"},"char",(0,a.kt)("br",null),"name")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"0"),(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"2"),(0,a.kt)("td",null,"3"),(0,a.kt)("td",null,"4"),(0,a.kt)("td",null,"5"),(0,a.kt)("td",null,"6"),(0,a.kt)("td",null,"7"),(0,a.kt)("td",null,"8"),(0,a.kt)("td",null,"9"),(0,a.kt)("td",null,"10"),(0,a.kt)("td",null,"11"),(0,a.kt)("td",null,"12"),(0,a.kt)("td",null,"13"),(0,a.kt)("td",null,"14"),(0,a.kt)("td",null,"15"),(0,a.kt)("td",null,"16"),(0,a.kt)("td",null,(0,a.kt)("b",null,"17"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"M"),(0,a.kt)("td",null,"y"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"n"),(0,a.kt)("td",null,"a"),(0,a.kt)("td",null,"m"),(0,a.kt)("td",null,"e"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"i"),(0,a.kt)("td",null,"s"),(0,a.kt)("td",null,"\xa0"),(0,a.kt)("td",null,"A"),(0,a.kt)("td",null,"r"),(0,a.kt)("td",null,"n"),(0,a.kt)("td",null,"o"),(0,a.kt)("td",null,"l"),(0,a.kt)("td",null,"d"),(0,a.kt)("td",null,(0,a.kt)("b",null,"\\0")))),(0,a.kt)("blockquote",null,(0,a.kt)("u",null,"HINT"),(0,a.kt)("br",null),"The number of memory locations (`char` **array size**) occupied by a C string is one more than the number of meaningful characters in the string."),(0,a.kt)("h3",{id:"allocating-memory"},"Allocating Memory"),(0,a.kt)("p",null,"We allocate memory for a C string in the same way that we allocate memory for an array.  Since the ",(0,a.kt)("strong",{parentName:"p"},"null terminator")," is one of the elements in the array, we must allocate memory for one extra character than the number of meaningful characters. "),(0,a.kt)("p",null,"For example, to allocate memory for a string with up to ",(0,a.kt)("inlineCode",{parentName:"p"},"30")," meaningful characters, we write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"char name[31]; // 30 chars plus 1 char for the null terminator byte\n")))}m.isMDXComponent=!0}}]);