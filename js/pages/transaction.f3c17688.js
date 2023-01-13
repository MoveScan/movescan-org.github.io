var P=Object.defineProperty;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))L.call(t,n)&&b(e,n,t[n]);if(f)for(var n of f(t))F.call(t,n)&&b(e,n,t[n]);return e};import{i as V}from"../echarts/echarts.5bea4114.js";import{_ as B,a as E,t as N,s as U}from"../footer/footer.becc9f56.js";import{S as A}from"../search/search.64506da3.js";import{a as H}from"../index/index.b402fc8a.js";import{u as G}from"../vue-i18n/vue-i18n.6f01f2b2.js";import{u as O}from"../store/store.18269d15.js";import{_ as R}from"../../assets/index.c9112440.js";import{I as W,a0 as j,r as i,a3 as K,h as M,a4 as r,al as Q,o as _,c as k,X as s,a,L as u,W as c,Q as d,R as X,P as q,K as J,F as Y,U as Z,V as x,b8 as ee,b7 as te}from"../@vue/@vue.fb755038.js";import"../tslib/tslib.e35f93b8.js";import"../zrender/zrender.b2e4eadc.js";import"../@vueuse/@vueuse.d209e4ed.js";import"../vue-router/vue-router.b3b2f7cd.js";import"../@element-plus/@element-plus.fb03e5a3.js";import"../element-plus/element-plus.7de12a9d.js";import"../lodash-es/lodash-es.a0751e35.js";import"../@popperjs/@popperjs.f1fb8f77.js";import"../@ctrl/@ctrl.17547d95.js";import"../dayjs/dayjs.7ffc491e.js";import"../@intlify/@intlify.6852b34b.js";import"../source-map/source-map.6efb65ba.js";import"../async-validator/async-validator.21881447.js";import"../memoize-one/memoize-one.f0fba034.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.94de1731.js";import"../@floating-ui/@floating-ui.1282fc6d.js";import"../axios/axios.f5bf103d.js";import"../nprogress/nprogress.03f19d7f.js";import"../js-cookie/js-cookie.431252a9.js";import"../vue/vue.b16dc40c.js";import"../pinia/pinia.81315bcb.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../vue-json-viewer/vue-json-viewer.7e7e9520.js";import"../clipboard/clipboard.61903894.js";import"../pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js";const ae=W({name:"transaction",components:{Header:B,Search:A,Footer:E},setup(){const{t:e}=G(),t=j({store:O(),loading:i(!0),currentPage:i(1),pageSize:i(20),total:i(0),background:i(!1),disabled:i(!1),activeName:i("first"),tableData:[],getTransaction:()=>{H({page:t.currentPage,count:t.pageSize,start:0,txn_type:""}).then(o=>{console.log("transaction",o),t.tableData=o.contents,t.total=o.total,t.loading=!1}).catch(o=>{console.log(o)})},handleClick:(o,m)=>{console.log(o,m)},timestampToTime:o=>N(o),setSubstring:o=>U(o),handleSizeChange:o=>{console.log(`${o} items per page`)},handleCurrentChange:o=>{console.log(`current page: ${o}`),t.loading=!0,t.currentPage=o,t.getTransaction()},initChart:()=>{const o=document.getElementById("chart"),m=V(o),g={title:{text:e("lang.DailyTxnDistribution")},tooltip:{trigger:"item"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]};g&&m.setOption(g),window.onresize=function(){m.resize()}},isDark:o=>o?"color:#2ef1a7":"color:#715cff"}),n=K(t);return M(()=>{t.getTransaction(),t.initChart()}),v({},n)}}),w=e=>(ee("data-v-e6233dec"),e=e(),te(),e),oe={class:"container"},se={class:"blocks-data-wrap"},ne={class:"blocks_overview blocks_list_overview"},le={class:""},re={class:"card"},ie={class:"card-body",id:"txcont"},ce={class:"d-flex"},de={class:"d-flex align-items-center"},pe={class:"d-flex flex-column"},me={class:"num"},ue={class:"d-flex",style:{"margin-top":"6px"}},ge={class:"txt"},_e=w(()=>a("div",{class:"d-flex flex-column"},null,-1)),he=w(()=>a("div",{class:"card box"},[a("div",{id:"chart"})],-1)),fe={key:0},be={class:"page"};function ve(e,t,n,o,m,g){const S=r("Header"),y=r("Search"),h=r("el-col"),D=r("el-row"),p=r("el-table-column"),C=r("router-link"),T=r("el-table"),$=r("el-pagination"),z=r("Footer"),I=Q("loading");return _(),k(Y,null,[s(S),s(y),a("div",oe,[a("div",{class:"block-title",style:u(e.isDark(e.store.switchDark))},c(e.$t("lang.Transaction")),5),s(D,null,{default:d(()=>[s(h,{span:12},{default:d(()=>[a("div",se,[a("div",ne,[a("div",le,[a("div",re,[a("div",ie,[a("h2",ce,[a("span",{style:u(e.isDark(e.store.switchDark))},c(e.$t("lang.Txns")),5)]),a("div",de,[a("div",pe,[a("span",me,[a("span",null,[a("a",{href:"#",style:u(e.isDark(e.store.switchDark))},c(e.total),5)])]),a("div",ue,[a("span",ge,[a("span",null,c(e.$t("lang.Total")),1)])])]),_e])])])])])])]),_:1}),s(h,{span:12},{default:d(()=>[he]),_:1})]),_:1}),a("div",{class:"table",style:u(e.store.switchDark?"background:#202020":"background:#f2f2f2")},[a("div",null,c(e.$t("lang.LatestList")),1),X((_(),q(T,{class:J(e.store.switchDark?"black":"white"),data:e.tableData},{default:d(()=>[s(p,{prop:"global_index",label:e.$t("lang.GlobalIndex")},null,8,["label"]),s(p,{prop:"create_at",label:e.$t("lang.CreateAt")},{default:d(l=>[l.row.create_at!=null?(_(),k("span",fe,c(e.timestampToTime(l.row.create_at)),1)):Z("",!0)]),_:1},8,["label"]),s(p,{prop:"success",label:e.$t("lang.IsSuccess")},null,8,["label"]),s(p,{prop:"gas_used",label:e.$t("lang.GasUsed")},null,8,["label"]),s(p,{prop:"txn_type",label:e.$t("lang.TxnType")},null,8,["label"]),s(p,{prop:"txn_hash",label:e.$t("lang.TxnHash"),"show-overflow-tooltip":!0,width:"300"},{default:d(l=>[s(C,{to:"/transactionDetail?hash="+l.row.txn_hash+"&txn_type="+l.row.txn_type,style:u(e.isDark(e.store.switchDark))},{default:d(()=>[x(c(e.setSubstring(l.row.txn_hash)),1)]),_:2},1032,["to","style"])]),_:1},8,["label"])]),_:1},8,["class","data"])),[[I,e.loading]]),a("div",be,[s($,{currentPage:e.currentPage,"onUpdate:currentPage":t[0]||(t[0]=l=>e.currentPage=l),"page-size":e.pageSize,"onUpdate:page-size":t[1]||(t[1]=l=>e.pageSize=l),disabled:e.disabled,background:e.background,layout:"prev, pager, next, jumper",total:e.total>1e3?1e3:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","disabled","background","total","onSizeChange","onCurrentChange"])])],4)]),s(z)],64)}var tt=R(ae,[["render",ve],["__scopeId","data-v-e6233dec"]]);export{tt as default};
