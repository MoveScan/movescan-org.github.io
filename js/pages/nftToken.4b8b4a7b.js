var z=Object.defineProperty;var f=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var h=(e,a,t)=>a in e?z(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,_=(e,a)=>{for(var t in a||(a={}))N.call(a,t)&&h(e,t,a[t]);if(f)for(var t of f(a))P.call(a,t)&&h(e,t,a[t]);return e};import{_ as L,a as F,t as V,s as B}from"../footer/footer.becc9f56.js";import{S as H}from"../search/search.64506da3.js";import{z as I}from"../index/index.b402fc8a.js";import{u as U}from"../store/store.18269d15.js";import{_ as A}from"../../assets/index.c9112440.js";import{I as R,a0 as j,r as l,a3 as E,h as K,a4 as i,al as M,o as m,c as b,X as n,a as o,L as p,W as d,R as Q,P as k,Q as c,K as W,F as X,V as v,U as w}from"../@vue/@vue.fb755038.js";import"../@vueuse/@vueuse.d209e4ed.js";import"../vue-router/vue-router.b3b2f7cd.js";import"../vue-i18n/vue-i18n.6f01f2b2.js";import"../@intlify/@intlify.6852b34b.js";import"../source-map/source-map.6efb65ba.js";import"../vue/vue.b16dc40c.js";import"../@element-plus/@element-plus.fb03e5a3.js";import"../element-plus/element-plus.7de12a9d.js";import"../lodash-es/lodash-es.a0751e35.js";import"../@popperjs/@popperjs.f1fb8f77.js";import"../@ctrl/@ctrl.17547d95.js";import"../dayjs/dayjs.7ffc491e.js";import"../async-validator/async-validator.21881447.js";import"../memoize-one/memoize-one.f0fba034.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.94de1731.js";import"../@floating-ui/@floating-ui.1282fc6d.js";import"../axios/axios.f5bf103d.js";import"../nprogress/nprogress.03f19d7f.js";import"../js-cookie/js-cookie.431252a9.js";import"../pinia/pinia.81315bcb.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../echarts/echarts.5bea4114.js";import"../tslib/tslib.e35f93b8.js";import"../zrender/zrender.b2e4eadc.js";import"../vue-json-viewer/vue-json-viewer.7e7e9520.js";import"../clipboard/clipboard.61903894.js";import"../pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js";const q=R({name:"nftToken",components:{Header:L,Search:H,Footer:F},setup(){const e=j({store:U(),loading:l(!0),currentPage:l(1),pageSize:l(20),total:l(0),background:l(!1),disabled:l(!1),activeName:l("first"),tableData:[],getNftTokenList:()=>{I({page:e.currentPage,count:e.pageSize}).then(t=>{console.log("nftToken",t),e.tableData=t.contents,e.total=t.total,e.loading=!1}).catch(t=>{console.log(t)})},handleClick:(t,g)=>{console.log(t,g)},timestampToTime:t=>V(t),setSubstring:t=>B(t),handleSizeChange:t=>{console.log(`${t} items per page`)},handleCurrentChange:t=>{console.log(`current page: ${t}`),e.loading=!0,e.currentPage=t,e.getNftTokenList()},isDark:t=>t?"color:#2ef1a7":"color:#715cff"}),a=E(e);return K(()=>{e.getNftTokenList()}),_({},a)}}),G={class:"container"},J={class:"blocks-data-wrap"},O={class:"blocks_overview blocks_list_overview"},Y={class:""},Z={class:"card"},x={class:"card-body",id:"txcont"},ee={class:"d-flex"},te={class:"d-flex align-items-center"},ae={class:"d-flex flex-column"},oe={class:"num"},re={key:0},ne={class:"page"};function se(e,a,t,g,le,ie){const C=i("Header"),D=i("Search"),u=i("router-link"),s=i("el-table-column"),y=i("el-table"),S=i("el-pagination"),T=i("Footer"),$=M("loading");return m(),b(X,null,[n(C),n(D),o("div",G,[o("div",{class:"block-title",style:p(e.isDark(e.store.switchDark))},"NFT",4),o("div",J,[o("div",O,[o("div",Y,[o("div",Z,[o("div",x,[o("h2",ee,[o("span",{style:p(e.isDark(e.store.switchDark))},d(e.$t("lang.TotalCoins")),5)]),o("div",te,[o("div",ae,[o("span",oe,[o("span",{style:p(e.isDark(e.store.switchDark))},d(e.total),5)])])])])])])])]),o("div",{class:"table",style:p(e.store.switchDark?"background:#202020":"background:#f2f2f2")},[o("div",null,d(e.$t("lang.LatestList")),1),Q((m(),k(y,{class:W(e.store.switchDark?"black":"white"),data:e.tableData},{default:c(()=>[n(s,{prop:"type_tag",label:e.$t("lang.CoinID"),width:"350","show-overflow-tooltip":!0},{default:c(r=>[n(u,{to:"/nftTokenInfo?tag="+r.row.type_tag,style:p(e.isDark(e.store.switchDark))},{default:c(()=>[v(d(r.row.type_tag),1)]),_:2},1032,["to","style"])]),_:1},8,["label"]),n(s,{prop:"collection",label:e.$t("lang.Collection")},null,8,["label"]),n(s,{prop:"create_at",label:e.$t("lang.CreateAt"),width:"200"},{default:c(r=>[r.row.create_at!=null?(m(),b("span",re,d(e.timestampToTime(r.row.create_at)),1)):w("",!0)]),_:1},8,["label"]),n(s,{prop:"creator",label:e.$t("lang.Creator"),width:"210"},{default:c(r=>[r.row.creator!==null?(m(),k(u,{key:0,to:"/accountDetail?address="+r.row.creator,style:p(e.isDark(e.store.switchDark))},{default:c(()=>[v(d(r.row.creator.length<10?r.row.creator:e.setSubstring(r.row.creator)),1)]),_:2},1032,["to","style"])):w("",!0)]),_:1},8,["label"]),n(s,{prop:"name",label:e.$t("lang.NodeName")},null,8,["label"]),n(s,{prop:"holders",label:e.$t("lang.HolderAmount")},null,8,["label"]),n(s,{prop:"supply",label:e.$t("lang.Supply")},null,8,["label"])]),_:1},8,["class","data"])),[[$,e.loading]]),o("div",ne,[n(S,{currentPage:e.currentPage,"onUpdate:currentPage":a[0]||(a[0]=r=>e.currentPage=r),"page-size":e.pageSize,"onUpdate:page-size":a[1]||(a[1]=r=>e.pageSize=r),disabled:e.disabled,background:e.background,layout:"prev, pager, next, jumper",total:e.total>1e3?1e3:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","disabled","background","total","onSizeChange","onCurrentChange"])])],4)]),n(T)],64)}var Qe=A(q,[["render",se],["__scopeId","data-v-2632ff74"]]);export{Qe as default};
