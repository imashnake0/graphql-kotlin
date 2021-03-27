(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?r.a.createElement(b,o(o({ref:t},s),{},{components:n})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(180)),i={id:"arguments",title:"Arguments"},o={unversionedId:"schema-generator/writing-schemas/arguments",id:"schema-generator/writing-schemas/arguments",isDocsHomePage:!1,title:"Arguments",description:"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields.",source:"@site/docs/schema-generator/writing-schemas/arguments.md",slug:"/schema-generator/writing-schemas/arguments",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/arguments",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/schema-generator/writing-schemas/arguments.md",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1616812820,sidebar:"docs",previous:{title:"Nullability",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/nullability"},next:{title:"Scalars",permalink:"/graphql-kotlin/docs/schema-generator/writing-schemas/scalars"}},u=[{value:"Input Types",id:"input-types",children:[]},{value:"Optional fields",id:"optional-fields",children:[]},{value:"Default values",id:"default-values",children:[]}],s={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Method arguments are automatically exposed as part of the arguments to the corresponding GraphQL fields."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"\nfun doSomething(value: Int): Boolean = true\n\n")),Object(l.b)("p",null,"The above Kotlin code will generate following GraphQL schema:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Query {\n  doSomething(value: Int!): Boolean!\n}\n\n")),Object(l.b)("p",null,"This behavior is true for all arguments except for the special classes for the ",Object(l.b)("a",{parentName:"p",href:"../execution/contextual-data"},"GraphQLContext")," and the ",Object(l.b)("a",{parentName:"p",href:"../execution/data-fetching-environment"},"DataFetchingEnvironment")),Object(l.b)("h2",{id:"input-types"},"Input Types"),Object(l.b)("p",null,"Query, Mutation, and Subscription function arguments are automatically converted to GraphQL input fields. GraphQL makes a\ndistinction between input and output types and requires unique names for all the types. Since we can use the same\nobjects for input and output in our Kotlin functions, ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator")," will automatically append\nan ",Object(l.b)("inlineCode",{parentName:"p"},"Input")," suffix to the GraphQL name of input objects."),Object(l.b)("p",null,"For example, the following code:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},"\nclass WidgetMutation {\n    fun processWidget(widget: Widget): Widget {\n        if (widget.value == null) {\n            widget.value = 42\n        }\n        return widget\n    }\n\n\ndata class Widget(var value: Int? = nul) {\n    fun multiplyValueBy(multiplier: Int): Int? = value?.times(multiplier)\n}\n\n")),Object(l.b)("p",null,"Will generate the following schema:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},"\ntype Mutation {\n  processWidget(widget: WidgetInput!): Widget!\n}\n\ntype Widget {\n  value: Int\n  multiplyValueBy(multiplier: Int!): Int\n}\n\ninput WidgetInput {\n  value: Int\n}\n\n")),Object(l.b)("p",null,"Please note that only fields are exposed in the input objects. Functions will only be available on the GraphQL output types."),Object(l.b)("p",null,"If you know a type will only be used for input types you can call your class something like ",Object(l.b)("inlineCode",{parentName:"p"},"CustomTypeInput"),". The library will not\nappend ",Object(l.b)("inlineCode",{parentName:"p"},"Input")," if the class name already ends with ",Object(l.b)("inlineCode",{parentName:"p"},"Input")," but that means you can not use this type as output because\nthe schema would have two types with the same name and that would be invalid."),Object(l.b)("h2",{id:"optional-fields"},"Optional fields"),Object(l.b)("p",null,"Kotlin requires variables/values to be initialized upon their declaration either from the user input OR by providing\ndefaults (even if they are marked as nullable). Therefore in order for a GraphQL input field to be optional it needs to be\nnullable."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'\nfun doSomethingWithOptionalInput(requiredValue: Int, optionalValue: Int?): String {\n    return "requiredValue=$requiredValue, optionalValue=$optionalValue"\n}\n\n')),Object(l.b)("h2",{id:"default-values"},"Default values"),Object(l.b)("p",null,"Default Kotlin values are supported, however the default value information is not available to the schema due to the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/ExpediaGroup/graphql-kotlin/issues/53"},"reflection limitations of Kotlin"),".\nThe parameters must also be defined as optional (nullable) in the schema, as the only way a default value will be used is when the client does not specify any value in the request."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"},'\nfun print(message: String? = "hello"): String? = message\n\n')),Object(l.b)("p",null,"The following operations will return the message in the comments"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-graphql"},'\nquery PrintMessages {\n    first: print(message = "foo") # foo\n    second: print(message = null) # null\n    third: print # hello\n}\n\n')),Object(l.b)("p",null,"If you need logic to determine when a client passed in a value vs when the default value was used (aka the argument was missing in the request), see ",Object(l.b)("a",{parentName:"p",href:"/graphql-kotlin/docs/schema-generator/execution/optional-undefined-arguments"},"optional undefined arguments"),"."))}p.isMDXComponent=!0}}]);