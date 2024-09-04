"use strict";(self.webpackChunkmug_atlas_search_workshop=self.webpackChunkmug_atlas_search_workshop||[]).push([[293],{1456:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(4848),t=s(8453);const i={sidebar_position:3},a="Refining Your Queries",o={id:"search-basics/refining-queries",title:"Refining Your Queries",description:"Now that we've run a basic query on our Airbnb dataset, let's look at ways to refine and improve our searches.",source:"@site/docs/2_search-basics/refining-queries.md",sourceDirName:"2_search-basics",slug:"/search-basics/refining-queries",permalink:"/search-play-workshop/docs/search-basics/refining-queries",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2_search-basics/refining-queries.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Your First Search Query",permalink:"/search-play-workshop/docs/search-basics/first-query"},next:{title:"Advanced Search Techniques",permalink:"/search-play-workshop/docs/advanced-search/advanced-techniques"}},c={},l=[{value:"Fuzzy Matching",id:"fuzzy-matching",level:2},{value:"Compound Queries",id:"compound-queries",level:2},{value:"Searching Multiple Fields",id:"searching-multiple-fields",level:2},{value:"Autocomplete",id:"autocomplete",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"refining-your-queries",children:"Refining Your Queries"})}),"\n",(0,r.jsx)(n.p,{children:"Now that we've run a basic query on our Airbnb dataset, let's look at ways to refine and improve our searches."}),"\n",(0,r.jsx)(n.h2,{id:"fuzzy-matching",children:"Fuzzy Matching"}),"\n",(0,r.jsx)(n.p,{children:"Atlas Search supports fuzzy matching, which can help catch misspellings or variations in spelling:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[{\n  $search: {\n    "text": {\n      "query": "Ocean Veiw",\n      "path": "name",\n      "fuzzy": {\n        "maxEdits": 1\n      }\n    }\n  }\n}]\n'})}),"\n",(0,r.jsxs)(n.p,{children:['This query will match "Ocean View" even though we typed "Ocean Veiw". The ',(0,r.jsx)(n.code,{children:"maxEdits"})," parameter determines how many character changes are allowed."]}),"\n",(0,r.jsx)(n.h2,{id:"compound-queries",children:"Compound Queries"}),"\n",(0,r.jsx)(n.p,{children:"We can combine multiple search criteria using compound queries. Let's search for Big House apartments that accommodate at least 2 people and are priced between $100 and $200 per night:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[{\n  $search: {\n    "compound": {\n      "must": [\n        {\n          "text": {\n            "query": "Big House",\n            "path": "name"\n          }\n        },\n        {\n          "range": {\n            "path": "accommodates",\n            "gte": 2\n          }\n        }\n      ],\n      "should": [\n        {\n          "range": {\n            "path": "pricePerNight",\n            "gte": 100,\n            "lte": 200\n          }\n        }\n      ]\n    }\n  }\n}]\n'})}),"\n",(0,r.jsx)(n.p,{children:'This query requires that the listing has "Big House", or "Big"/"House" in the name and accommodates at least 2 people. It also gives preference to listings priced between $100 and $200 per night.'}),"\n",(0,r.jsx)(n.h2,{id:"searching-multiple-fields",children:"Searching Multiple Fields"}),"\n",(0,r.jsx)(n.p,{children:'We can search across multiple fields at once. Let\'s search for "home" in either the name or the room type:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[{\n  $search: {\n    "text": {\n      "query": "home",\n      "path": ["name", "room_type"]\n    }\n  }\n}]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Since the initial index is set to have ",(0,r.jsx)(n.code,{children:'"room_type" : { "type" : "token"}'}),' we are expected to hit a full match on the room_type, therefore we are getting only documents with "home" in the name as room type values have "Home" only as a substring.']}),"\n",(0,r.jsxs)(n.p,{children:["Now if we change the ",(0,r.jsx)(n.code,{children:"INDEX"})," definition to:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "mappings": {\n    "dynamic": true,\n    "fields": {\n      "room_type": {\n        "type": "string"\n      },\n      "accommodates": {\n        "type": "number"\n      },\n      "pricePerNight": {\n        "type": "number"\n      },\n      "name": {\n        "type": "string"\n      }\n    }\n  },\n  "synonyms": [\n    {\n      "name": "listingsSynonyms",\n      "analyzer": "lucene.standard",\n      "source": {\n        "collection": "synonym_mappings"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'This query will return results where "home" appears in either the name or room_type fields, preferencing both.'}),"\n",(0,r.jsx)(n.h2,{id:"autocomplete",children:"Autocomplete"}),"\n",(0,r.jsx)(n.p,{children:"Let's add an autocomplete example to help users find listings as they type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[{\n  $search: {\n    "autocomplete": {\n      "query": "Ocean V",\n      "path": "name",\n      "fuzzy": {\n        "maxEdits": 1\n      }\n    }\n  }\n}]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The original ",(0,r.jsx)(n.code,{children:"INDEX"})," defenition will error out as ",(0,r.jsx)(n.code,{children:'"name" : {"type" : "string"}'})," does not support autocomplete."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's replace the ",(0,r.jsx)(n.code,{children:"INDEX"})," defenition:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "mappings": {\n    "dynamic": true,\n    "fields": {\n      "room_type": {\n        "type": "string"\n      },\n      "accommodates": {\n        "type": "number"\n      },\n      "pricePerNight": {\n        "type": "number"\n      },\n      "name": {\n        "type": "autocomplete"\n      }\n    }\n  },\n  "synonyms": [\n    {\n      "name": "listingsSynonyms",\n      "analyzer": "lucene.standard",\n      "source": {\n        "collection": "synonym_mappings"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:'Now the query will suggest completions for "Ocean V", which could help users find "Ocean View" listings more easily.'}),"\n",(0,r.jsx)(n.p,{children:"Try these queries in the playground and observe how the results change. Pay attention to how different criteria affect the returned listings."}),"\n",(0,r.jsx)(n.p,{children:"In the next section, we'll look at even more advanced search features to help users find their perfect Airbnb stay!"})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var r=s(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);