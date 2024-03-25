/*! For license information please see Badge-stories-Badge-mdx.8c1ac634.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_barebones_ts=self.webpackChunkreact_barebones_ts||[]).push([[784,141],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/Badge/stories/Badge.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Badge_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Badge/stories/Badge.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"badge",children:"Badge"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Badges are used to inform the user of an item's status or value."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:"import { Badge } from 'react-barebones-ts';\r\n\r\n<Badge>Badge</Badge>\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary",children:"primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usage: The primary badge is used to indicate the main action or status of an item."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Badge variant="primary">Badge</Badge>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"secondary",children:"secondary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usage: The secondary badge is used to indicate a less important action or status of an item."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Badge variant="secondary">Badge</Badge>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Secondary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"tertiary",children:"tertiary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usage: The tertiary badge is used to indicate a less important action or status of an item."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Badge variant="tertiary">Badge</Badge>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Tertiary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"error",children:"error"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usage: The error badge is used to indicate an error or problem with an item."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Badge variant="error">Badge</Badge>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Error}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"success",children:"success"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usage: The success badge is used to indicate a successful action or status of an item."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-jsx",children:'<Badge variant="success">Badge</Badge>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Badge_stories__WEBPACK_IMPORTED_MODULE_2__.Success})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/Badge/stories/Badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Error:()=>Error,Primary:()=>Primary,Secondary:()=>Secondary,Success:()=>Success,Tertiary:()=>Tertiary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badge_stories});__webpack_require__("./node_modules/react/index.js");var Block=__webpack_require__("./src/Block/index.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Badge_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/Badge/Badge.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Badge_module.Z,options);const Badge_Badge_module=Badge_module.Z&&Badge_module.Z.locals?Badge_module.Z.locals:void 0;var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Badge=({children,variant})=>(0,jsx_runtime.jsx)("div",{className:classnames_default()(Badge_Badge_module.badge,variant&&Badge_Badge_module[`badge-${variant}`]),children});Badge.displayName="Badge";const src_Badge=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Badge/index.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/Badge/index.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}const Badge_stories={title:"COMPONENTS/Badge",component:src_Badge,argTypes:{variant:{type:{required:!0},control:"select",options:["primary","secondary","tertiary","success","error"]}}},Template=args=>(0,jsx_runtime.jsx)(src_Badge,{variant:args.variant,children:args.children});Template.displayName="Template";const DarkTemplate=args=>(0,jsx_runtime.jsx)(Block.Z,{classes:"bb-p-400 bb-border-radius-400",style:{backgroundColor:"black"},children:(0,jsx_runtime.jsx)(src_Badge,{variant:args.variant,children:args.children})});DarkTemplate.displayName="DarkTemplate";const Primary=Template.bind({});Primary.args={variant:"primary",children:"Primary"};const Secondary=Template.bind({});Secondary.args={variant:"secondary",children:"Secondary"};const Tertiary=DarkTemplate.bind({});Tertiary.args={variant:"tertiary",children:"Tertiary"};const Error=Template.bind({});Error.args={variant:"error",children:"Error"};const Success=Template.bind({});Success.args={variant:"success",children:"Success"},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <Badge variant={args.variant}>\r\n        {args.children}\r\n    </Badge>",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => <Badge variant={args.variant}>\r\n        {args.children}\r\n    </Badge>",...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:'args => <Block classes={\'bb-p-400 bb-border-radius-400\'} style={{\n  "backgroundColor": "black"\n}}>\r\n        <Badge variant={args.variant}>{args.children}</Badge>\r\n    </Block>',...Tertiary.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"args => <Badge variant={args.variant}>\r\n        {args.children}\r\n    </Badge>",...Error.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"args => <Badge variant={args.variant}>\r\n        {args.children}\r\n    </Badge>",...Success.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Tertiary","Error","Success"]},"./src/Block/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>src_Block});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Block_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/Block/Block.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Block_module.Z,options);const Block_Block_module=Block_module.Z&&Block_module.Z.locals?Block_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Block=({children,classes,column,size,style,variant,align,justify,flex,stretch,dark})=>(0,jsx_runtime.jsx)("div",{className:classnames_default()(Block_Block_module.block,size&&[Block_Block_module[`gap-${size}`]],variant&&[Block_Block_module[`block-${dark?"dark-":""}${variant}`]],column&&[Block_Block_module.column],align&&[Block_Block_module[`align-${align}`]],justify&&[Block_Block_module[`justify-${justify}`]],flex&&[Block_Block_module[`flex-${flex}`]],stretch&&Block_Block_module.stretch,classes),style,children});Block.displayName="Block";const src_Block=Block;try{Block.displayName="Block",Block.__docgenInfo={description:"",displayName:"Block",props:{classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"string"}},column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:"100"},{value:"200"},{value:"300"},{value:"400"},{value:"500"},{value:"600"},{value:"700"},{value:"800"},{value:"900"}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"card"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"flex-end"'},{value:'"center"'}]}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"flex-start"'},{value:'"flex-end"'},{value:'"center"'},{value:'"space-between"'},{value:'"space-evenly"'},{value:'"space-around"'}]}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:"7"},{value:"8"},{value:"9"}]}},stretch:{defaultValue:null,description:"",name:"stretch",required:!1,type:{name:"boolean"}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Block/index.tsx#Block"]={docgenInfo:Block.__docgenInfo,name:"Block",path:"src/Block/index.tsx#Block"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/Badge/Badge.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".eKsC8BrwOek3yrxE4umF{font-size:9px;background:#56595c;color:#fff;padding:0 6px;border-radius:8px;display:flex;align-items:center;line-height:16px;width:fit-content}.o4BdDJ_ryjl8rZIkG26w{background-color:#1495eb}.W_PCZekuFPpmIXfQ92bU{background-color:#464646}.YvdJFXppsqxHqJtUJVyQ{background-color:rgba(0,0,0,0);border:1px solid #fff}._2LrkzS_WJP8QPzn_UAD{background-color:#b83423}.wL3Hrh7gw_LtrqCpYMtp{background-color:#168b42}.CwKmrfuorVAMMDf2VfjZ{background-color:gray}.jLAhYWfAYOBv5M5szwFN{background-color:#d7d7d7}","",{version:3,sources:["webpack://./src/Badge/Badge.module.scss","webpack://./src/assets/scss/variables/_colors.scss"],names:[],mappings:"AAEA,sBACE,aAAA,CACA,kBCsBW,CDrBX,UAAA,CACA,aAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,gBAAA,CACA,iBAAA,CAIA,sBAKI,wBANc,CAClB,sBAKI,wBANc,CAClB,sBAEI,8BAAA,CACA,qBAAA,CAHJ,sBAKI,wBANc,CAClB,sBAKI,wBANc,CAClB,sBAKI,qBANc,CAClB,sBAKI,wBANc",sourcesContent:["@use '../assets/scss/variables/theme' as *;\r\n\r\n.badge {\r\n  font-size: 9px;\r\n  background: $badge-bg-color;\r\n  color: white;\r\n  padding: 0 6px;\r\n  border-radius: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: 16px;\r\n  width: fit-content;\r\n}\r\n\r\n@each $key, $val in ($color-map) {\r\n  .badge-#{$key} {\r\n    @if (#{$key} == \"tertiary\") {\r\n      background-color: transparent;\r\n      border: 1px solid white;\r\n    } @else {\r\n      background-color: $val;\r\n    }\r\n  }\r\n}","$white: #ffffff;\r\n$black: #000000;\r\n\r\n$primary900: #0A466E;\r\n$primary800: #0B4D79;\r\n$primary700: #0C5585;\r\n$primary600: #0D5D92;\r\n$primary500: #0E66A1;\r\n$primary400: #0F70B1;\r\n$primary300: #107BC3;\r\n$primary200: #1287D6;\r\n$primary100: #1495EB;\r\n$primary50: #2892D2;\r\n\r\n$secondary900: #404040;\r\n$secondary700: #464646;\r\n$secondary500: #555555;\r\n$secondary400: #808080;\r\n$secondary300: #AEAEAE;\r\n$secondary200: #c0c0c0;\r\n$secondary100: #D7D7D7;\r\n\r\n$neutral900: #0F1113;\r\n$neutral800: #16191C;\r\n$neutral700: #1D2125;\r\n$neutral600: #2C2F33;\r\n$neutral500: #56595C;\r\n$neutral400: #8E9092;\r\n$neutral300: #C7C8C9;\r\n$neutral200: #d8d9da;\r\n$neutral100: #F5F5F5;\r\n$neutral50: #FAFAFA;\r\n\r\n$error900: #7D2318;\r\n$error800: #8A271A;\r\n$error700: #982B1D;\r\n$error600: #A72F20;\r\n$error500: #B83423;\r\n$error300: #cc4332;\r\n$error200: #be695e;\r\n$error100: #E0978E;\r\n$error50: #F0CBC7;\r\n\r\n$success900: #0F5F2D;\r\n$success800: #106932;\r\n$success700: #127337;\r\n$success600: #147E3C;\r\n$success500: #168B42;\r\n$success200: #189949;\r\n$success100: #8CCCA4;\r\n$success50: #C6E6D2;\r\n\r\n$warning900: #653600;\r\n$warning800: #814600;\r\n$warning700: #B96400;\r\n$warning600: #D57300;\r\n$warning500: #FFAA46;\r\n$warning100: #FFD9A0;\r\n$warning50: #FFF1DB;\r\n\r\n$info900: #1C303B;\r\n$info800: #0A496A;\r\n$info700: #005583;\r\n$info600: #0067AA;\r\n$info500: #2977D1;\r\n$info100: #BAEBF5;\r\n$info50: #E9F9FB;"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={badge:"eKsC8BrwOek3yrxE4umF","badge-primary":"o4BdDJ_ryjl8rZIkG26w","badge-secondary":"W_PCZekuFPpmIXfQ92bU","badge-tertiary":"YvdJFXppsqxHqJtUJVyQ","badge-error":"_2LrkzS_WJP8QPzn_UAD","badge-success":"wL3Hrh7gw_LtrqCpYMtp","badge-default":"CwKmrfuorVAMMDf2VfjZ","badge-disabled":"jLAhYWfAYOBv5M5szwFN"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/Block/Block.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".GPzYbNZMnjblAp8Tf77T{display:flex;gap:0}.bMaJr2_u0W5Y0AHyavjb>*{flex:1}.DeUEkgDPuGwmW37nkrO6{gap:2px}.IWGv2abd3uCeBHsFycbA{gap:4px}.PYdgCmEbQTth6pUmcEGm{gap:8px}.Bahq5QZEZ_nmWI5l7c9z{gap:12px}.pKhk2xHV8FSd6WH4AM4z{gap:16px}.B2T0UvL405LkF2xts31r{gap:20px}.hKbFocpTGeCxl1JanXg9{gap:24px}.YvLgYavYHUPn_zSvDnFW{gap:32px}.Dd2CZ04ifPqZHL4Xesup{gap:40px}.WOwOtcSBRkbtz3gcZWtg{gap:56px}.tcJqDcz69kLtlwAtMGk_{flex:1}.jPlcSnT23GhEVN5zmeJQ{flex:2}.MrYBk3BoOaFmt4Rmq_ch{flex:3}.ZeGduzz_sDfSIdkg6nrT{flex:4}.qjhpVg_xrwbxU6uPM12M{flex:5}.KR6b8qJ9flZaMfeaw1gm{flex:6}.ubFjgyBf1A4dIix6GCwB{flex:7}.QTfK5jLL7rP__QojdeZa{flex:8}.AVuyJ1oO4SZOC1JzLrXp{flex:9}.xJQrOe76U5bpwlGPzfSJ{flex:10}.bNAVfJJA7z0B_QhkkqHQ{flex:11}.hor45yOoum1wfCvu3QDi{flex:12}.b3rIewvQmx6CtfSGjtMA{justify-content:flex-start}.XRBvEf1PX8TDArwh3HqH{justify-content:flex-end}.nyJ8IsHySHGz3nZ2_CUQ{justify-content:center}._zpHB27pB1H1FYDBlGcY{justify-content:space-between}.iBlZND3hBWUMyuxRBgEe{justify-content:space-around}.XGpO_9wOrYwQiLLYhDtD{justify-content:space-evenly}.vLfttH7B3XDgAcc9BwKg{align-items:flex-start}.DIHcdj4OLuty6_lujkga{align-items:flex-end}.Px1Zbjbsld_6NTBfuzBb{align-items:center}.I4PzFW2ec6O5DNwc7UEu{background:#fff;color:#1d2125;border-radius:6px;border:1px solid #8e9092}.VkO1slZa69tnC82iZp4K{background:#1d2125;color:#f5f5f5;border-radius:6px;border:1px solid #8e9092}.mB4ujaBcuBzyxAL4gYQ7{flex-direction:column}","",{version:3,sources:["webpack://./src/Block/Block.module.scss","webpack://./src/assets/scss/variables/_colors.scss"],names:[],mappings:"AAiBA,sBACE,YAAA,CACA,KAAA,CAIA,wBACE,MAAA,CAKF,sBACE,OAFgB,CAClB,sBACE,OAFgB,CAClB,sBACE,OAFgB,CAClB,sBACE,QAFgB,CAClB,sBACE,QAFgB,CAClB,sBACE,QAFgB,CAClB,sBACE,QAFgB,CAClB,sBACE,QAFgB,CAClB,sBACE,QAFgB,CAClB,sBACE,QAFgB,CAOlB,sBACE,MAFY,CACd,sBACE,MAFY,CACd,sBACE,MAFY,CACd,sBACE,MAFY,CACd,sBACE,MAFY,CACd,sBACE,MAFY,CACd,sBACE,MAFY,CACd,sBACE,MAFY,CACd,sBACE,MAFY,CACd,sBACE,OAFY,CACd,sBACE,OAFY,CACd,sBACE,OAFY,CAOd,sBACE,0BAAA,CADF,sBACE,wBAAA,CADF,sBACE,sBAAA,CADF,sBACE,6BAAA,CADF,sBACE,4BAAA,CADF,sBACE,4BAAA,CAKF,sBACE,sBAAA,CADF,sBACE,oBAAA,CADF,sBACE,kBAAA,CAIJ,sBACE,eAAA,CACA,aC9BW,CD+BX,iBAAA,CACA,wBAAA,CAGF,sBACE,kBCpCW,CDqCX,aC/BW,CDgCX,iBAAA,CACA,wBAAA,CAGF,sBACE,qBAAA",sourcesContent:['@use \'../assets/scss/variables/theme\' as *;\r\n\r\n$justify-map: (\r\n        "justify-flex-start": "flex-start",\r\n        "justify-flex-end": "flex-end",\r\n        "justify-center": "center",\r\n        "justify-space-between": "space-between",\r\n        "justify-space-around": "space-around",\r\n        "justify-space-evenly": "space-evenly"\r\n);\r\n\r\n$align-map: (\r\n        "align-flex-start": "flex-start",\r\n        "align-flex-end": "flex-end",\r\n        "align-center": "center"\r\n);\r\n\r\n.block {\r\n  display: flex;\r\n  gap: 0;\r\n}\r\n\r\n.stretch {\r\n  > * {\r\n    flex: 1;\r\n  }\r\n}\r\n\r\n@each $key, $val in ($spacing-map) {\r\n  .gap-#{$key} {\r\n    gap: $val;\r\n  }\r\n}\r\n\r\n@for $size from 1 through 12 {\r\n  .flex-#{$size} {\r\n    flex: $size;\r\n  }\r\n}\r\n\r\n@each $justKey, $justVal in ($justify-map) {\r\n  .#{$justKey} {\r\n    justify-content: #{$justVal};\r\n  }\r\n}\r\n\r\n@each $alKey, $alVal in ($align-map) {\r\n  .#{$alKey} {\r\n    align-items: #{$alVal};\r\n  }\r\n}\r\n\r\n.block-card {\r\n  background: white;\r\n  color: $block-card-color;\r\n  border-radius: 6px;\r\n  border: 1px solid $block-card-border-color;\r\n}\r\n\r\n.block-dark-card {\r\n  background: $block-card-dark-background;\r\n  color: $block-card-dark-color;\r\n  border-radius: 6px;\r\n  border: 1px solid $block-card-border-color;\r\n}\r\n\r\n.column {\r\n  flex-direction: column;\r\n}\r\n',"$white: #ffffff;\r\n$black: #000000;\r\n\r\n$primary900: #0A466E;\r\n$primary800: #0B4D79;\r\n$primary700: #0C5585;\r\n$primary600: #0D5D92;\r\n$primary500: #0E66A1;\r\n$primary400: #0F70B1;\r\n$primary300: #107BC3;\r\n$primary200: #1287D6;\r\n$primary100: #1495EB;\r\n$primary50: #2892D2;\r\n\r\n$secondary900: #404040;\r\n$secondary700: #464646;\r\n$secondary500: #555555;\r\n$secondary400: #808080;\r\n$secondary300: #AEAEAE;\r\n$secondary200: #c0c0c0;\r\n$secondary100: #D7D7D7;\r\n\r\n$neutral900: #0F1113;\r\n$neutral800: #16191C;\r\n$neutral700: #1D2125;\r\n$neutral600: #2C2F33;\r\n$neutral500: #56595C;\r\n$neutral400: #8E9092;\r\n$neutral300: #C7C8C9;\r\n$neutral200: #d8d9da;\r\n$neutral100: #F5F5F5;\r\n$neutral50: #FAFAFA;\r\n\r\n$error900: #7D2318;\r\n$error800: #8A271A;\r\n$error700: #982B1D;\r\n$error600: #A72F20;\r\n$error500: #B83423;\r\n$error300: #cc4332;\r\n$error200: #be695e;\r\n$error100: #E0978E;\r\n$error50: #F0CBC7;\r\n\r\n$success900: #0F5F2D;\r\n$success800: #106932;\r\n$success700: #127337;\r\n$success600: #147E3C;\r\n$success500: #168B42;\r\n$success200: #189949;\r\n$success100: #8CCCA4;\r\n$success50: #C6E6D2;\r\n\r\n$warning900: #653600;\r\n$warning800: #814600;\r\n$warning700: #B96400;\r\n$warning600: #D57300;\r\n$warning500: #FFAA46;\r\n$warning100: #FFD9A0;\r\n$warning50: #FFF1DB;\r\n\r\n$info900: #1C303B;\r\n$info800: #0A496A;\r\n$info700: #005583;\r\n$info600: #0067AA;\r\n$info500: #2977D1;\r\n$info100: #BAEBF5;\r\n$info50: #E9F9FB;"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={block:"GPzYbNZMnjblAp8Tf77T",stretch:"bMaJr2_u0W5Y0AHyavjb","gap-50":"DeUEkgDPuGwmW37nkrO6","gap-100":"IWGv2abd3uCeBHsFycbA","gap-200":"PYdgCmEbQTth6pUmcEGm","gap-300":"Bahq5QZEZ_nmWI5l7c9z","gap-400":"pKhk2xHV8FSd6WH4AM4z","gap-500":"B2T0UvL405LkF2xts31r","gap-600":"hKbFocpTGeCxl1JanXg9","gap-700":"YvLgYavYHUPn_zSvDnFW","gap-800":"Dd2CZ04ifPqZHL4Xesup","gap-900":"WOwOtcSBRkbtz3gcZWtg","flex-1":"tcJqDcz69kLtlwAtMGk_","flex-2":"jPlcSnT23GhEVN5zmeJQ","flex-3":"MrYBk3BoOaFmt4Rmq_ch","flex-4":"ZeGduzz_sDfSIdkg6nrT","flex-5":"qjhpVg_xrwbxU6uPM12M","flex-6":"KR6b8qJ9flZaMfeaw1gm","flex-7":"ubFjgyBf1A4dIix6GCwB","flex-8":"QTfK5jLL7rP__QojdeZa","flex-9":"AVuyJ1oO4SZOC1JzLrXp","flex-10":"xJQrOe76U5bpwlGPzfSJ","flex-11":"bNAVfJJA7z0B_QhkkqHQ","flex-12":"hor45yOoum1wfCvu3QDi","justify-flex-start":"b3rIewvQmx6CtfSGjtMA","justify-flex-end":"XRBvEf1PX8TDArwh3HqH","justify-center":"nyJ8IsHySHGz3nZ2_CUQ","justify-space-between":"_zpHB27pB1H1FYDBlGcY","justify-space-around":"iBlZND3hBWUMyuxRBgEe","justify-space-evenly":"XGpO_9wOrYwQiLLYhDtD","align-flex-start":"vLfttH7B3XDgAcc9BwKg","align-flex-end":"DIHcdj4OLuty6_lujkga","align-center":"Px1Zbjbsld_6NTBfuzBb","block-card":"I4PzFW2ec6O5DNwc7UEu","block-dark-card":"VkO1slZa69tnC82iZp4K",column:"mB4ujaBcuBzyxAL4gYQ7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);