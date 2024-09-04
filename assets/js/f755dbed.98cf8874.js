"use strict";(self.webpackChunkmug_atlas_search_workshop=self.webpackChunkmug_atlas_search_workshop||[]).push([[289],{815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=t(4848),a=t(8453);const r={sidebar_position:4},c="Advanced Search Techniques",i={id:"advanced-search/advanced-techniques",title:"Advanced Search Techniques",description:"Now that we've covered the basics, let's explore some more advanced search techniques that can help users find the perfect Airbnb listing.",source:"@site/docs/3_advanced-search/advanced-techniques.md",sourceDirName:"3_advanced-search",slug:"/advanced-search/advanced-techniques",permalink:"/search-play-workshop/docs/advanced-search/advanced-techniques",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/3_advanced-search/advanced-techniques.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Refining Your Queries",permalink:"/search-play-workshop/docs/search-basics/refining-queries"},next:{title:"\ud83e\udde0 Atlas Vector Search on Search Playground",permalink:"/search-play-workshop/docs/advanced-search/vector-search"}},h={},o=[{value:"Faceted Search",id:"faceted-search",level:2},{value:"Highlighting",id:"highlighting",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"advanced-search-techniques",children:"Advanced Search Techniques"})}),"\n",(0,s.jsx)(n.p,{children:"Now that we've covered the basics, let's explore some more advanced search techniques that can help users find the perfect Airbnb listing."}),"\n",(0,s.jsx)(n.h2,{id:"faceted-search",children:"Faceted Search"}),"\n",(0,s.jsx)(n.p,{children:"Faceted search allows users to narrow down results based on specific attributes."}),"\n",(0,s.jsxs)(n.p,{children:["We will need to adjustb the ",(0,s.jsx)(n.code,{children:"INDEX"})," as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "mappings": {\n    "dynamic": true,\n    "fields": {\n      "room_type": {\n        "type": "stringFacet"\n      },\n      "accommodates": {\n        "type": "number"\n      },\n      "pricePerNight": {\n        "type": "number"\n      },\n      "name": {\n        "type": "string"\n      }\n    }\n  },\n  "synonyms": [\n    {\n      "name": "listingsSynonyms",\n      "analyzer": "lucene.standard",\n      "source": {\n        "collection": "synonym_mappings"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's create a faceted search for room types:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[{\n  $searchMeta: {\n    "facet": {\n      "operator": {\n        "text": {\n          "query": ["Ocean"],\n          "path": "name"\n        }\n      },\n      "facets": {\n        "roomTypes": {\n          "type": "string",\n          "path": "room_type"\n        }\n      }\n    }\n  }\n}]\n'})}),"\n",(0,s.jsx)(n.p,{children:'This query will return facet counts for different room types among listings that have "Ocean" in their name.'}),"\n",(0,s.jsx)(n.h2,{id:"highlighting",children:"Highlighting"}),"\n",(0,s.jsx)(n.p,{children:"Highlighting can help users quickly see why a particular listing matched their search. Let's add highlighting to our text search:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  [{\n    $search: {\n      "text": {\n        "query": "Ocean View",\n        "path": "name"\n      },\n      "highlight": {\n        "path": "name"\n      }\n    }\n  },\n  {\n    $project: {\n      "name": 1,\n      "room_type": 1,\n      "accommodates": 1,\n      "pricePerNight": 1,\n      "highlights": { $meta: "searchHighlights" }\n    }\n  }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:['This query will return results with "Ocean View" in the name, and it will also provide highlighted snippets showing where the match occurred in ',(0,s.jsx)(n.code,{children:"highlights"})," field."]}),"\n",(0,s.jsx)(n.p,{children:"Try these advanced queries in the playground. Notice how they provide more sophisticated ways to search and present the Airbnb listing data."}),"\n",(0,s.jsx)(n.p,{children:"In the next section, we'll look at how to combine these techniques to create powerful, multi-faceted search experiences!"})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(6540);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);