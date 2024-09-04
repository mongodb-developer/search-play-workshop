"use strict";(self.webpackChunkmug_atlas_search_workshop=self.webpackChunkmug_atlas_search_workshop||[]).push([[425],{4198:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=s(4848),n=s(8453);const r={sidebar_position:1},i="\ud83d\udcd8 How Atlas Search Works",o={id:"search-basics/how-search-works",title:"\ud83d\udcd8 How Atlas Search Works",description:"Atlas Search uses inverted indexes to support text search queries. An inverted index is a data structure that maps each unique term in a collection to the documents that contain that term. The index is sorted by term, with each term referencing the documents that contain it.",source:"@site/docs/2_search-basics/4-how-search-works.mdx",sourceDirName:"2_search-basics",slug:"/search-basics/how-search-works",permalink:"/search-play-workshop/docs/search-basics/how-search-works",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2_search-basics/4-how-search-works.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Why Atlas Search",permalink:"/search-play-workshop/docs/search-basics/why-atlas-search"},next:{title:"Accessing the Atlas Search Playground",permalink:"/search-play-workshop/docs/search-basics/accessing-playground"}},c={},h=[{value:"Simple String Search",id:"simple-string-search",level:2},{value:"Full Text Search",id:"full-text-search",level:2},{value:"Index Creation",id:"index-creation",level:2}];function l(e){const t={h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"-how-atlas-search-works",children:"\ud83d\udcd8 How Atlas Search Works"})}),"\n",(0,a.jsx)(t.p,{children:"Atlas Search uses inverted indexes to support text search queries. An inverted index is a data structure that maps each unique term in a collection to the documents that contain that term. The index is sorted by term, with each term referencing the documents that contain it."}),"\n",(0,a.jsx)(t.h2,{id:"simple-string-search",children:"Simple String Search"}),"\n",(0,a.jsx)(t.p,{children:"When you do a simple query in your database using a LIKE operator, or a regular expression, the database has to scan every document in the collection to find the matching documents. This is a slow process, and it gets slower as the number of documents in the collection increases."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Simple String Search",src:s(7835).A+"",width:"754",height:"156"})}),"\n",(0,a.jsx)(t.h2,{id:"full-text-search",children:"Full Text Search"}),"\n",(0,a.jsx)(t.p,{children:"Full-text search is meant to search large amounts of text. For example, a search engine will use a full-text search to look for keywords in all the web pages that it indexed. The key to this technique is indexing."}),"\n",(0,a.jsx)(t.p,{children:"Indexing can be done in different ways, such as batch indexing or incremental indexing. The index then acts as an extensive glossary for any matching documents. Various techniques can then be used to extract the data. Apache Lucene, the open sourced search library, uses an inversed index to find the matching items. In the case of our menu search, each word links to the matching menu item."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Full Text Search",src:s(3522).A+"",width:"754",height:"298"})}),"\n",(0,a.jsx)(t.p,{children:"This technique is much faster than string searches for large amounts of data."}),"\n",(0,a.jsx)(t.h2,{id:"index-creation",children:"Index Creation"}),"\n",(0,a.jsx)(t.p,{children:"In order to prepare your data to be indexed, your data will go through a process called tokenization. Tokenization is the process of breaking a stream of text up into words, phrases, symbols, or other meaningful elements called tokens. This is done through a series of analyzers. Analyzers are the building blocks of the search engine. They are responsible for producing tokens out of the text. The tokens are then stored in the index."}),"\n",(0,a.jsx)(t.p,{children:"In our example, it will start by removing any diacritics (marks placed above or below letters, such as \xe9, \xe0, and \xe7 in French). Then, based on the used language, the algorithms will remove filler words and only keep the stem of the terms. This way, \u201cto eat,\u201d \u201ceating,\u201d and \u201cate\u201d are all classified as the same \u201ceat\u201d keyword. It then changes the casing to use only either uppercase or lowercase. The exact indexing process is determined by the analyzer that is used."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Analyzer",src:s(3502).A+"",width:"1303",height:"589"})}),"\n",(0,a.jsx)(t.p,{children:"In the end, the index will look like a glossary of all the meaningful words in your data. Each word will be linked to the documents that contain it."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Glossary",src:s(1185).A+"",width:"826",height:"457"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7835:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/3-string-search-953a4b9a3361b0e76d96710a33f1962c.gif"},3522:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/4-full-text-search-db0022853c7bbb4ce17cbe4109c6747c.gif"},3502:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/5-analyzer-3029ddf907bf3f5667bccc8e6557d254.png"},1185:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/6-glossary-d317195d862c5ec004a0d9d43090d54b.png"},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var a=s(6540);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);