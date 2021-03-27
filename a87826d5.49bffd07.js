(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(180)),i={id:"schema-generator-getting-started",title:"Getting Started with the Schema Generator",original_id:"schema-generator-getting-started"},c={unversionedId:"schema-generator/schema-generator-getting-started",id:"version-3.x.x/schema-generator/schema-generator-getting-started",isDocsHomePage:!1,title:"Getting Started with the Schema Generator",description:"Install",source:"@site/versioned_docs/version-3.x.x/schema-generator/schema-generator-getting-started.md",slug:"/schema-generator/schema-generator-getting-started",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/schema-generator-getting-started",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/versioned_docs/version-3.x.x/schema-generator/schema-generator-getting-started.md",version:"3.x.x",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1616812820,sidebar:"version-3.x.x/docs",previous:{title:"Blogs & Videos",permalink:"/graphql-kotlin/docs/3.x.x/blogs-and-videos"},next:{title:"Nullability",permalink:"/graphql-kotlin/docs/3.x.x/schema-generator/writing-schemas/nullability"}},l=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]},{value:"<code>toSchema</code>",id:"toschema",children:[]},{value:"Class <code>TopLevelObject</code>",id:"class-toplevelobject",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"install"},"Install"),Object(o.b)("p",null,"Using a JVM dependency manager, simply link ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," to your project."),Object(o.b)("p",null,"With Maven:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"\n<dependency>\n  <groupId>com.expediagroup</groupId>\n  <artifactId>graphql-kotlin-schema-generator</artifactId>\n  <version>${latestVersion}</version>\n</dependency>\n\n")),Object(o.b)("p",null,"With Gradle:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},'\nimplementation("com.expediagroup", "graphql-kotlin-schema-generator", latestVersion)\n\n')),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," provides a single function, ",Object(o.b)("inlineCode",{parentName:"p"},"toSchema"),", to generate a schema from Kotlin objects."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\ndata class Widget(val id: Int, val value: String)\n\nclass WidgetQuery {\n  fun widgetById(id: Int): Widget? {\n    // grabs widget from a data source\n  }\n}\n\nclass WidgetMutation {\n  fun saveWidget(value: String): Widget {\n    // some logic for saving widget\n  }\n}\n\nval widgetQuery = WidgetQuery()\nval widgetMutation = WidgetMutation()\nval schema = toSchema(\n  config = yourCustomConfig(),\n  queries = listOf(TopLevelObject(widgetQuery)),\n  mutations = listOf(TopLevelObject(widgetMutation))\n)\n\n")),Object(o.b)("p",null,"will generate:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-graphql"},"\nschema {\n  query: Query\n  mutation: Mutation\n}\n\ntype Query {\n  widgetById(id: Int!): Widget\n}\n\ntype Mutation {\n  saveWidget(value: String!): Widget!\n}\n\ntype Widget {\n  id: Int!\n  value: String!\n}\n\n")),Object(o.b)("p",null,"Any ",Object(o.b)("inlineCode",{parentName:"p"},"public")," functions defined on a query, mutation, or subscription Kotlin class will be translated into GraphQL fields on the object\ntype. ",Object(o.b)("inlineCode",{parentName:"p"},"toSchema")," will then recursively apply Kotlin reflection on the specified classes to generate all\nremaining object types, their properties, functions, and function arguments."),Object(o.b)("p",null,"The generated ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," can then be used to expose a GraphQL API endpoint."),Object(o.b)("h2",{id:"toschema"},Object(o.b)("inlineCode",{parentName:"h2"},"toSchema")),Object(o.b)("p",null,"This function accepts four arguments: ",Object(o.b)("inlineCode",{parentName:"p"},"config"),", ",Object(o.b)("inlineCode",{parentName:"p"},"queries"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mutations")," and ",Object(o.b)("inlineCode",{parentName:"p"},"subscriptions"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"queries"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mutations"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"subscriptions")," are a list of ",Object(o.b)("inlineCode",{parentName:"p"},"TopLevelObject"),"s and will be used to generate corresponding GraphQL root types. See\nbelow on why we use this wrapper class. The ",Object(o.b)("inlineCode",{parentName:"p"},"config")," contains all the extra information you need to pass, including\ncustom hooks, supported packages, and name overrides. See the ",Object(o.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/3.x.x/schema-generator/customizing-schemas/generator-config"},"Generator Configuration")," documentation for more information."),Object(o.b)("p",null,"You can see the definition for ",Object(o.b)("inlineCode",{parentName:"p"},"toSchema")," ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/blob/master/generator/graphql-kotlin-schema-generator/src/main/kotlin/com/expediagroup/graphql/generator/toSchema.kt"},"in the\nsource")),Object(o.b)("h2",{id:"class-toplevelobject"},"Class ",Object(o.b)("inlineCode",{parentName:"h2"},"TopLevelObject")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"toSchema")," uses Kotlin reflection to build a GraphQL schema from given classes using ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-java"),"'s schema builder. We\ndon't just pass a ",Object(o.b)("inlineCode",{parentName:"p"},"KClass")," though, we have to actually pass an object, because the functions on the object are\ntransformed into the data fetchers. In most cases, a ",Object(o.b)("inlineCode",{parentName:"p"},"TopLevelObject")," can be constructed with just an object:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass Query {\n  fun getNumber() = 1\n}\n\nval topLevelObject = TopLevelObject(Query())\n\ntoSchema(config = config, queries = listOf(topLevelObject))\n\n")),Object(o.b)("p",null,"In the above case, ",Object(o.b)("inlineCode",{parentName:"p"},"toSchema")," will use ",Object(o.b)("inlineCode",{parentName:"p"},"topLevelObject::class")," as the reflection target, and ",Object(o.b)("inlineCode",{parentName:"p"},"Query")," as the data fetcher\ntarget."),Object(o.b)("p",null,"In a lot of cases, such as with Spring AOP, the object (or bean) being used to generate a schema is a dynamic proxy. In\nthis case, ",Object(o.b)("inlineCode",{parentName:"p"},"topLevelObject::class")," is not ",Object(o.b)("inlineCode",{parentName:"p"},"Query"),", but rather a generated class that will confuse the schema generator.\nTo specify the ",Object(o.b)("inlineCode",{parentName:"p"},"KClass")," to use for reflection on a proxy, pass the class to ",Object(o.b)("inlineCode",{parentName:"p"},"TopLevelObject"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-kotlin"},"\n@Component\nclass Query {\n  @Timed\n  fun getNumber() = 1\n}\n\nval query = getObjectFromBean()\nval customDef = TopLevelObject(query, Query::class)\n\ntoSchema(config, listOf(customDef))\n\n")))}p.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);