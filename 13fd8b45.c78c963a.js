(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{180:function(e,r,n){"use strict";n.d(r,"a",(function(){return p})),n.d(r,"b",(function(){return b}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=t,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:r},u),{},{components:n})):a.a.createElement(b,c({ref:r},u))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return s}));var t=n(3),a=n(7),o=(n(0),n(180)),i={id:"exceptions",title:"Exceptions and Partial Data",original_id:"exceptions"},c={unversionedId:"schema-generator/execution/exceptions",id:"version-3.x.x/schema-generator/execution/exceptions",isDocsHomePage:!1,title:"Exceptions and Partial Data",description:"Returning GraphQL Errors",source:"@site/versioned_docs/version-3.x.x/schema-generator/execution/exceptions.md",slug:"/schema-generator/execution/exceptions",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/exceptions",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/execution/exceptions.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1616812820,sidebar:"version-3.x.x/docs",previous:{title:"Async Models",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/async-models"},next:{title:"Data Fetching Environment",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/execution/data-fetching-environment"}},l=[{value:"Returning GraphQL Errors",id:"returning-graphql-errors",children:[]},{value:"Returning Data and Errors",id:"returning-data-and-errors",children:[]}],u={toc:l};function s(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"returning-graphql-errors"},"Returning GraphQL Errors"),Object(o.b)("p",null,"Exceptions thrown during execution of an operation will result in an empty data response and a GraphQLError that is added to a list of errors of the result.\nSee ",Object(o.b)("a",{parentName:"p",href:"https://www.graphql-java.com/documentation/v14/execution/"},"graphql-java documentation")," for more details on how to customize your exception handling."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nfun getRandomNumberOrError(): Int {\n    val num = Random().nextInt(100)\n    return if (num <= 50) num else throw Exception("number is greater than 50")\n}\n\n')),Object(o.b)("h2",{id:"returning-data-and-errors"},"Returning Data and Errors"),Object(o.b)("p",null,"GraphQL allows you to return both data and errors in a single response, as long as the data returned still matches the schema. Depending on the criticality of the encountered error, instead of throwing an exception, you may want to return\ndefault data or use a nullable field, but still include more information in the ",Object(o.b)("inlineCode",{parentName:"p"},"errors")," block. In Kotlin, functions return only a single value, which means that in order to return both data\nand errors you have to explicitly return them wrapped in a ",Object(o.b)("inlineCode",{parentName:"p"},"DataFetcherResult")," object."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass DataAndErrorsQuery {\n  fun returnDataAndErrors(): DataFetcherResult<String?> {\n    val data: String? = getData()\n    val error = if (data == null) MyError() else null\n\n    return DataFetcherResult.newResult<String?>()\n      .data(data)\n      .error(error)\n      .build()\n  }\n}\n\n")),Object(o.b)("p",null,"An example of a query returning partial data is available in our ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/examples/spring/src/main/kotlin/com/expediagroup/graphql/examples/query/DataAndErrorsQuery.kt"},"spring example app"),"."))}s.isMDXComponent=!0}}]);