"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[76949],{944814:(e,t,i)=>{var n;i.r(t),i.d(t,{default:()=>l});let a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetNormalizedPinImage_pin",selections:[{alias:"imageSpec_564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:'images(spec:"564x")'},{alias:"imageSpec_736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"736x")'},{alias:"imageSpec_orig",args:[{kind:"Literal",name:"spec",value:"orig"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"orig")'},{alias:"imageSpec_474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"474x")'},{alias:"imageSpec_236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:n,storageKey:'images(spec:"236x")'}],type:"Pin",abstractKey:null};a.hash="3d7a6d04f923d00acfb2887f852aea16";let l=a},645258:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(616550),a=i(907511),l=i(976534);function r(){let e=(0,n.TH)(),t=(0,n.k6)();return function(i){let n=(0,l.Z)();n.filter_location=i,t.replace((0,a.Z)(e.pathname,n))}}},479110:(e,t,i)=>{i.d(t,{Z:()=>u,q:()=>c});var n=i(616550),a=i(297728),l=i(545230),r=i(663641),s=i(907511),o=i(976534),d=i(383399);let c=["brands","brand_value","colors","commerce_only","domains","on_sale","price_max","price_min","style"];function u(){let e=(0,n.k6)(),t=(0,n.TH)(),{checkExperiment:i}=(0,a.F)(),{scope:u}=(0,n.UO)(),h=(0,d.Z)(),{isAuth:g}=h,p=g?h.country:"";return function(n){let a=(0,o.Z)();a.rs=l.i.SHOPPING_FILTER,n.forEach(({key:e,value:t})=>{""!==t?a[e]=t:delete a[e]}),("US"===p||i("hundred_percent_product_load_i8n",{dangerouslySkipActivation:!0}).anyEnabled)&&u!==r.lw.PINS&&!c.some(e=>"commerce_only"!==e&&e in a)&&delete a.commerce_only,e.push((0,s.Z)(t.pathname,a))}}},682776:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(667294),a=i(883119),l=i(293704),r=i(144326),s=i(297728),o=i(730212),d=i(115642),c=i(785893);function u({collapsed:e,displayViewState:t,forceTappableHeader:i,headerHeight:u,headerPaddingRight:h,headerPreview:g,heading:p,onClick:m,showArrow:x,surface:_}){let f=(0,r.ZP)(),{checkExperiment:y}=(0,s.F)(),{isAuthenticated:v}=(0,o.B)(),S=v?y("auth_closeup_redesign").anyEnabled:y("unauth_closeup_redesign").anyEnabled,{closeupWithinMasonryEnabled:b,isCloseupRelatedPinsAboveTheFoldEnabled:w,peekCloseupEnabled:j,viewportSize:Z}=(0,d.x4)(),k=(0,l.rt)({peekCloseupEnabled:j,viewportSize:Z,surface:_});return(0,c.jsx)(n.Fragment,{children:i||null!==t?(0,c.jsx)(a.iP,{disabled:!x,onTap:m,children:(0,c.jsx)(a.xu,{marginBottom:!e&&j?4:void 0,children:(0,c.jsxs)(a.kC,{alignItems:"center",dataTestId:"collapsible-header",direction:"row",flex:"grow",height:u,justifyContent:"between",children:[(0,c.jsx)(a.X6,{accessibilityLevel:2,align:"start",id:"comments-heading",size:S||b?"300":"400",children:p}),(0,c.jsxs)(a.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{paddingRight:h}},direction:"row",display:"flex",children:[e&&g,(x||b)&&(w?(0,c.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{transform:e?"rotate(0deg)":"rotate(180deg)",transition:w?"all 600ms cubic-bezier(.25,1,.5,1)":void 0}},opacity:x?1:0,children:(0,c.jsx)(a.hU,{accessibilityLabel:f.bt("Иконка за разширяване", "Expand icon", "accordion.actionButton", undefined, true),dataTestId:"collapse-button",disabled:!x,icon:"arrow-down",size:"sm"})}):(0,c.jsx)(a.xu,{alignItems:"center","data-test-id":"collapse-button",display:"flex",justifyContent:"center",marginStart:g?-1:0,width:w?32:48,children:(0,c.jsx)(a.JO,{accessibilityLabel:f.bt("Иконка за разширяване", "Expand icon", "accordion.actionButton", undefined, true),color:"default",icon:e?"arrow-down":"arrow-up"})}))]})]})})}):(()=>{let e=(0,c.jsx)(a.X6,{accessibilityLevel:2,align:"start",id:"comments-heading",size:k?"300":"400",children:p});return k?(0,c.jsx)(a.xu,{marginBottom:4,children:e}):e})()})}},923952:(e,t,i)=>{i.d(t,{n:()=>n});let n="300"},691566:(e,t,i)=>{i.d(t,{I6:()=>a,Nv:()=>n,RZ:()=>l,ZG:()=>o,b9:()=>s,mV:()=>d,s0:()=>r});let n=44,a=24,l=446,r=.05,s=36,o=20,d=16},488379:(e,t,i)=>{i.d(t,{Z:()=>s});var n,a=i(667294);i(167912);var l=i(47848);let r=void 0!==n?n:n=i(944814);function s({pinKey:e,maxWidth:t}){let i=(0,l.Z)(r,e),n=i?.imageSpec_564x||i?.imageSpec_736x||i?.imageSpec_orig||i?.imageSpec_474x||i?.imageSpec_236x,s=n?.width||1,o=n?.height||1,d=n?.url||"",c=function(e,t,i=564){return e>i&&(t*=i/e,e=i),{width:e,height:t}}(s,o,t);return{getNormalizedPinImage:(0,a.useCallback)(()=>({width:c.width,height:c.height,url:d}),[c.height,c.width,d])}}},756222:(e,t,i)=>{i.d(t,{Z:()=>g});var n=i(667294),a=i(883119),l=i(923952),r=i(144326),s=i(207630),o=i(785893);function d({category:e,ingredients:t,textSize:i="300"}){return(0,o.jsxs)(a.xu,{children:[e&&(0,o.jsx)(a.xu,{children:(0,o.jsx)(a.xv,{size:i,weight:"bold",children:e})}),(0,o.jsx)("ul",{children:t.map((e,t)=>(0,o.jsx)("li",{"data-test-id":"recipe-ingredient",itemProp:"recipeIngredient",children:(0,o.jsx)(a.xu,{marginTop:1,children:(0,o.jsxs)(a.xv,{size:i,children:["• ",e.amt||null," ",e.name]})})},t))})]})}var c=i(91160),u=i(66551),h=i(115642);function g({recipeProps:e,marginOverrides:t}){var i;let g=(0,r.ZP)(),{image:p,name:m,categorizedIngredients:x}=e.recipe,{isCloseupRelatedPinsAboveTheFoldEnabled:_,peekCloseupEnabled:f}=(0,h.x4)(),y=0;if(x&&x.length){let e=[];x.forEach(t=>(y+=t.ingredients.length,e.push(t.ingredients)))}let v=f?(i=y,(0,s.Z)(g.nbt(["{{ count }} съставка", "{{ count }} съставки"], i, "closeup.recipePin.heading.ingredientCount", true),{count:i.toString()})):g.bt("Съставки", "Ingredients", "Ingredients title and count in closeup recipe description", undefined, true);return(0,o.jsx)(a.xu,{marginBottom:_?2:void 0,marginTop:_?2:8,children:(0,o.jsxs)(c.Z,{itemScope:!0,itemType:"https://schema.org/Recipe",children:[(0,o.jsx)("meta",{content:m,itemProp:"name"}),(0,o.jsx)("meta",{content:p,itemProp:"image"}),(0,o.jsx)(u.Z,{heading:v,children:(0,o.jsx)(a.xu,{marginTop:_?void 0:4,children:x.map(({category:e,ingredients:i},r)=>{let s=`ingredient-${r}`;return(0,o.jsx)(n.Fragment,{children:(0,o.jsx)(a.xu,{marginBottom:t?.ingredientMarginBottom||4,children:(0,o.jsx)(d,{category:e,ingredients:i,textSize:_?"200":l.n})})},s)})})})]})})}},91160:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(785893);let a=e=>{let t=e.itemType?{itemScope:!0,itemType:e.itemType}:{};return(0,n.jsx)("div",{"data-test-id":"rich-pin-information",...t,children:e.children||null})}},24534:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(937304);function a(e){let{query:t,rs:i,scope:a,guideAdded:l,filters:r,user:s,requestParams:o,selectedOneBarModules:d}=e;if(!t)return"/";let c={q:t,rs:i,...o};if(r&&(c.filters=r),s&&(c.user=s),d&&(c.selected_one_bar_modules=d),l&&l.term&&(c.add_refine=`${l.term}|guide|word|${l.index}`),window.location.pathname.startsWith("/explore"))return`/search/pins/?${(0,n.Z)(c)}`;let u=a;return["pins","buyable_pins","my_pins","boards","users","idea_pins","videos"].includes(u)||(u="pins"),u?`/search/${u}/?${(0,n.Z)(c)}`:`${window.location.pathname}?${(0,n.Z)(c)}`}},794352:(e,t,i)=>{i.d(t,{Z:()=>n});function n(e){return e.toLowerCase().charAt(0).toUpperCase()+e.toLowerCase().slice(1)}},907511:(e,t,i)=>{i.d(t,{Z:()=>n});let n=(e,t)=>{let i=new URL(e,"https://pinterest.com");return i.search=new URLSearchParams(t).toString(),i.toString().substring(i.origin.length)}},665992:(e,t,i)=>{i.d(t,{Z:()=>n});function n({cropArea:e,scaledWidth:t,scaledHeight:i}){let n=e.h||0;return{h:Math.floor(n*i),w:Math.floor((e.w||0)*t),x:Math.floor((e.x||0)*t),y:Math.floor((e.y||0)*i)}}},122882:(e,t,i)=>{i.d(t,{Z:()=>n});function n({cropArea:e,cropSource:t,requestParams:i,searchQuery:n,surfaceType:a,title:l,trafficSource:r}){let s=[];if(e){let{x:t,y:i,w:n,h:a}=e;t>=0&&i>=0&&n>=0&&a>=0&&s.push(`x=${t}`,`y=${i}`,`w=${n}`,`h=${a}`)}return t&&s.push(`cropSource=${t}`),a&&s.push(`surfaceType=${a}`),l&&s.push(`full_feed_title=${encodeURIComponent(l)}`),n&&s.push(`q=${n}`),r&&"unknown"!==r&&s.push(`rs=${r}`),i&&s.push(`requestParams=${encodeURIComponent(i)}`),s.length?`?${s.join("&")}`:""}},472921:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(122882);function a({cropArea:e,cropSource:t,isProductPage:i,pinId:a,requestParams:l,searchQuery:r,surfaceType:s,title:o,trafficSource:d}){let c=(0,n.Z)({cropArea:e,cropSource:t,requestParams:l,searchQuery:r,surfaceType:s,title:o,trafficSource:d}),u="";return i&&(u="products/"),`/pin/${a}/visual-search/${u}${c}`}},339712:(e,t,i)=>{i.d(t,{E:()=>n,Z:()=>l});let{Provider:n,useHook:a}=(0,i(498490).Z)("VerticalNav",{width:0}),l=a},210173:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(339712);function a(){let{width:e}=(0,n.Z)();return e}},425423:(e,t,i)=>{i.d(t,{V:()=>s,Z:()=>o});var n=i(667294),a=i(785893);let l={cropArea:{x:0,y:0,w:1,h:1},cropSource:5,entrySource:"flashlight",isProductPage:!1,surfaceType:"flashlight",title:""},r=(0,n.createContext)(l);function s({children:e,value:t}){let[i,s]=(0,n.useState)(!1),[o,d]=(0,n.useState)({}),[c,u]=(0,n.useState)({}),[h,g]=(0,n.useState)(!1),[p,m]=(0,n.useState)(null),[x,_]=(0,n.useState)(!1),f=(0,n.useMemo)(()=>({...t||l,hasAnimatedCutoutsOnLand:h,isHoveringOnCropperEdges:i,setIsHoveringOnCropperEdges:s,cutoutContours:o,setCutoutContours:d,scaledValues:c,setScaledValues:u,setHasAnimatedCutoutsOnLand:g,selectedId:p,setSelectedId:m,hasLoggedRender:x,setHasLoggedRender:_}),[t,h,s,i,o,c,g,p,m,d,u,x,_]);return(0,a.jsx)(r.Provider,{value:f,children:e})}function o(){return(0,n.useContext)(r)}},66551:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(667294),a=i(883119),l=i(682776),r=i(573706),s=i(730212),o=i(410150),d=i(115642),c=i(785893);function u({auxData:e,children:t,collapseButtonElementType:i,collapseByDefault:u=!0,componentType:h,displayViewState:g,expandButtonElementType:p,forceTappableHeader:m,headerHeight:x,headerPaddingRight:_,headerPreview:f,heading:y,surface:v,viewParameter:S,viewType:b}){let w=(0,o.HG)(),{isBot:j}=(0,s.B)(),{logContextEvent:Z}=(0,r.v)(),{isCloseupRelatedPinsAboveTheFoldEnabled:k,setIsShoppingModuleExpanded:I}=(0,d.x4)(),$=(0,n.useRef)(null),[P,L]=(0,n.useState)(!j&&u||[1,2].includes(g));return(0,n.useEffect)(()=>{I&&I(!P)},[]),(0,c.jsxs)(a.kC,{dataTestId:"collapsible-layout",direction:"column",gap:w&&k?0:4,children:[(0,c.jsx)(l.Z,{collapsed:P,displayViewState:g,forceTappableHeader:m,headerHeight:x,headerPaddingRight:_,headerPreview:f,heading:y,onClick:()=>{L(!P),I&&I(P),Z({aux_data:e,component:h,element:P?p:i,event_type:w?101:102,view_parameter:S,view_type:b})},showArrow:!0,surface:v}),w&&k?(0,c.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{transition:k?"height 600ms cubic-bezier(.25,1,.5,1)":void 0}},"data-test-id":`collapsible-layout-content-${P?"collapsed":"expanded"}`,height:P?"0px":`${$?.current?.scrollHeight}px`,marginBottom:k&&!P?1:void 0,overflow:"hidden",children:(0,c.jsx)(a.xu,{ref:$,children:t})}):!P&&(0,c.jsx)(a.xu,{children:t})]})}},87575:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(883119),a=i(785893);function l({children:e,color:t,isDarkMode:i,outlined:l,type:r="bold",rounding:s=4}){return(0,a.jsxs)(n.xu,{position:"relative",children:[(0,a.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},"data-test-id":"outline-content",overflow:"hidden",rounding:s,children:e}),l&&(0,a.jsx)(n.xu,{bottom:!0,color:"transparent",dangerouslySetInlineStyle:{__style:function({color:e,isDarkMode:t,type:i}){let n=t?"#fff":"#000",a=t?"#000":"#fff";return"solid"===i?{boxShadow:`inset 0 0 0 2px ${e??n}`,WebkitBoxShadow:`inset 0 0 0 2px ${e??n}`,MozBoxShadow:`inset 0 0 0 2px ${e??n}`}:{boxShadow:`inset 0 0 0 2px ${e??n}, inset 0 0 0 4px ${a}`,WebkitBoxShadow:`inset 0 0 0 2px ${e??n}, inset 0 0 0 4px ${a}`,MozBoxShadow:`inset 0 0 0 2px ${e??n}, inset 0 0 0 4px ${a}`}}({color:t,isDarkMode:i,type:r})},"data-test-id":"outline-box",left:!0,position:"absolute",right:!0,rounding:s,top:!0})]})}},912985:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(883119),a=i(810655),l=i(785893);function r({coverImages:e,height:t,isHovered:i,onClick:r,onMouseEnter:s,onMouseLeave:o,textType:d,text:c,url:u,width:h}){let g=e&&(e["236x"]||e["280x280"]);return(0,l.jsx)(a.Z,{backgroundColor:"gray",coverImage:g,height:t,isHovered:i,onClick:r,onMouseEnter:s,onMouseLeave:o,url:u,width:h,children:(0,l.jsx)(n.xu,{alignItems:"center",display:"flex",height:t,justifyContent:"center",padding:3,position:"absolute",top:!0,width:h||"100%",children:"text"===d?(0,l.jsx)(n.xu,{alignItems:"center",display:"flex",height:48,padding:3,children:(0,l.jsx)(n.X6,{align:"center",color:"light",size:"500",children:c})}):(0,l.jsx)(n.xu,{alignItems:"center",color:"secondary",display:"flex",height:48,padding:3,rounding:"pill",children:(0,l.jsx)(n.xv,{align:"center",weight:"bold",children:c})})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/76949.bg_BG-79fcf3b027a54ad5.mjs.map