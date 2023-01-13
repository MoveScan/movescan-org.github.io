var j=Object.defineProperty;var F=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var z=(e,i,o)=>i in e?j(e,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[i]=o,P=(e,i)=>{for(var o in i||(i={}))U.call(i,o)&&z(e,o,i[o]);if(F)for(var o of F(i))J.call(i,o)&&z(e,o,i[o]);return e};import{u as K,b as O}from"../vue-router/vue-router.b3b2f7cd.js";import{_ as M,a as Q,s as W,t as X}from"../footer/footer.becc9f56.js";import{S as G}from"../search/search.64506da3.js";import{c as Y,m as Z,n as x,o as ee}from"../index/index.b402fc8a.js";import{u as ae}from"../vue-clipboard3/vue-clipboard3.f7ffa845.js";import{u as te}from"../store/store.18269d15.js";import{_ as oe}from"../../assets/index.c9112440.js";import{E as D}from"../element-plus/element-plus.7de12a9d.js";import{I as le,a0 as se,r as c,a3 as ne,h as re,a4 as u,al as ie,o as h,c as f,X as t,a as d,L as g,V as m,W as r,P as w,Q as s,U as k,F as de,b8 as ue,b7 as pe,R as C,K as S,a8 as ce}from"../@vue/@vue.fb755038.js";import"../@vueuse/@vueuse.d209e4ed.js";import"../vue-i18n/vue-i18n.6f01f2b2.js";import"../@intlify/@intlify.6852b34b.js";import"../source-map/source-map.6efb65ba.js";import"../vue/vue.b16dc40c.js";import"../@element-plus/@element-plus.fb03e5a3.js";import"../axios/axios.f5bf103d.js";import"../nprogress/nprogress.03f19d7f.js";import"../js-cookie/js-cookie.431252a9.js";import"../clipboard/clipboard.61903894.js";import"../pinia/pinia.81315bcb.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../echarts/echarts.5bea4114.js";import"../tslib/tslib.e35f93b8.js";import"../zrender/zrender.b2e4eadc.js";import"../vue-json-viewer/vue-json-viewer.7e7e9520.js";import"../pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js";import"../lodash-es/lodash-es.a0751e35.js";import"../@popperjs/@popperjs.f1fb8f77.js";import"../@ctrl/@ctrl.17547d95.js";import"../dayjs/dayjs.7ffc491e.js";import"../async-validator/async-validator.21881447.js";import"../memoize-one/memoize-one.f0fba034.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.94de1731.js";import"../@floating-ui/@floating-ui.1282fc6d.js";const me=le({name:"address Detail",components:{Header:M,Search:G,Footer:Q},setup(){K();const e=O(),{toClipboard:i}=ae(),o=se({store:te(),loading:c(!0),currentPage:c(1),pageSize:c(20),total:c(0),background:c(!1),disabled:c(!1),detail:c({}),activeName:c("transaction"),tableData:c([]),tableData2:c([]),tableData3:c([]),network:localStorage.getItem("network"),getAddress:l=>{Y({address:l}).then(n=>{console.log("address Detail",n),o.detail=n}).catch(n=>{console.log(n)})},getTransactionList:l=>{Z({address:l,page:o.currentPage,count:o.pageSize,with_event:""}).then(n=>{console.log("\u4EA4\u6613\u8BB0\u5F55",n),o.tableData=n.contents,o.total=n.total,o.loading=!1}).catch(n=>{console.log(n)})},getTransferList:l=>{x({address:l,page:o.currentPage,count:o.pageSize,query_type:""}).then(n=>{console.log("\u8F6C\u8D26\u8BB0\u5F55",n),o.tableData2=n.contents}).catch(n=>{console.log(n)})},getResources:l=>{ee({address:l,page:o.currentPage,count:o.pageSize,query_type:""}).then(n=>{console.log("\u8D44\u6E90\u5217\u8868",n),o.tableData3=n}).catch(n=>{console.log(n)})},setSubstring:l=>W(l),jsonParse(l){return JSON.parse(l)},handleClick:(l,n)=>{console.log(o.activeName)},timestampToTime:l=>X(l),handleSizeChange:l=>{console.log(`${l} items per page`)},handleCurrentChange:l=>{console.log(`current page: ${l}`),o.loading=!1,o.currentPage=l,o.getTransactionList(e.query.address)},copy:async l=>{try{await i(l),D.success("copy success")}catch(n){console.log(n),n.text==null?D.error("copy failed"):D.error(n)}},isDark:l=>l?"color:#2ef1a7":"color:#715cff"}),$=ne(o);return re(()=>{let l=e.query.network;console.log("\u5176\u5B83\u7F51\u7EDC",l),l!==void 0&&localStorage.setItem("network",l),o.getAddress(e.query.address),o.getTransactionList(e.query.address),o.getTransferList(e.query.address),o.getResources(e.query.address)}),P({},$)}}),ge=e=>(ue("data-v-2e7e6a98"),e=e(),pe(),e),he={class:"container"},be={class:"flex"},fe={class:"overview-desc"},we={key:0},ke=ge(()=>d("br",null,null,-1)),ye={class:"title"},_e={key:0},ve={class:"page"},De={key:0};function Ce(e,i,o,$,l,n){const L=u("Header"),N=u("Search"),q=u("DocumentCopy"),B=u("el-icon"),I=u("el-card"),T=u("el-col"),R=u("el-row"),p=u("el-table-column"),b=u("router-link"),A=u("json-viewer"),y=u("el-table"),V=u("el-pagination"),_=u("el-tab-pane"),E=u("el-tabs"),H=u("Footer"),v=ie("loading");return h(),f(de,null,[t(L),t(N),d("div",he,[d("div",be,[d("div",{class:"block-title",style:g(e.isDark(e.store.switchDark))},[m(r(e.$t("lang.Account"))+" ",1),d("div",fe,[m(r(e.detail.address)+" ",1),e.detail.address!=null?(h(),w(B,{key:0,onClick:i[0]||(i[0]=a=>e.copy(e.detail.address))},{default:s(()=>[t(q)]),_:1})):k("",!0)])],4),d("div",{style:g([{"font-size":"14px"},e.isDark(e.store.switchDark)])},[m(r(e.$t("lang.CreateAt"))+"\uFF1A ",1),e.detail.create_at!=null?(h(),f("span",we,r(e.timestampToTime(e.detail.create_at)),1)):k("",!0)],4)]),ke,t(R,null,{default:s(()=>[t(T,{span:12},{default:s(()=>[t(I,{class:"list"},{default:s(()=>[d("span",ye,r(e.$t("lang.TotalAssets")),1),d("div",null,[d("span",null,r(e.$t("lang.AuthenticationKey"))+"\uFF1A",1),d("span",null,r(e.detail.authentication_key),1)]),d("div",null,[d("span",null,r(e.$t("lang.CreateAt"))+"\uFF1A",1),e.detail.create_at!=null?(h(),f("span",_e,r(e.timestampToTime(e.detail.create_at)),1)):k("",!0)]),d("div",null,[d("span",null,r(e.$t("lang.HoldAmount"))+"\uFF1A",1),d("span",null,r(e.detail.hold_amount),1)]),d("div",null,[d("span",null,r(e.$t("lang.SequenceNumber"))+"\uFF1A",1),d("span",null,r(e.detail.sequence_number),1)])]),_:1})]),_:1}),t(T,{span:12})]),_:1}),d("div",{class:"table",style:g(e.store.switchDark?"background:#202020":"background:#f2f2f2")},[t(E,{modelValue:e.activeName,"onUpdate:modelValue":i[3]||(i[3]=a=>e.activeName=a),class:"demo-tabs",onTabClick:e.handleClick},{default:s(()=>[t(_,{label:e.$t("lang.TransactionList"),name:"transaction"},{default:s(()=>[C((h(),w(y,{class:S(e.store.switchDark?"black":"white"),data:e.tableData},{default:s(()=>[t(p,{prop:"chainTime",label:e.$t("lang.ChainTime")},{default:s(a=>[m(r(e.timestampToTime(a.row.chainTime)),1)]),_:1},8,["label"]),t(p,{prop:"sender",label:e.$t("lang.Sender"),"show-overflow-tooltip":!0},{default:s(a=>[t(b,{to:"/accountDetail?address="+a.row.sender,style:g(e.isDark(e.store.switchDark))},{default:s(()=>[m(r(a.row.sender),1)]),_:2},1032,["to","style"])]),_:1},8,["label"]),t(p,{prop:"txn_hash",label:e.$t("lang.TxnHash"),"show-overflow-tooltip":!0,width:"300"},{default:s(a=>[t(b,{to:"/transactionDetail?hash="+a.row.txn_hash+"&txn_type=user_transaction",style:g(e.isDark(e.store.switchDark))},{default:s(()=>[m(r(e.setSubstring(a.row.txn_hash)),1)]),_:2},1032,["to","style"])]),_:1},8,["label"]),t(p,{label:e.$t("lang.SignType")},{default:s(a=>[m(r(e.jsonParse(a.row.signature).type),1)]),_:1},8,["label"]),t(p,{type:"expand",label:e.$t("lang.Signature"),width:"100"},{default:s(a=>[t(A,{value:JSON.parse(a.row.signature),"expand-depth":5,copyable:"",boxed:"",sort:""},null,8,["value"])]),_:1},8,["label"])]),_:1},8,["class","data"])),[[v,e.loading]]),d("div",ve,[t(V,{currentPage:e.currentPage,"onUpdate:currentPage":i[1]||(i[1]=a=>e.currentPage=a),"page-size":e.pageSize,"onUpdate:page-size":i[2]||(i[2]=a=>e.pageSize=a),disabled:e.disabled,background:e.background,layout:"prev, pager, next, jumper",total:e.total,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","disabled","background","total","onSizeChange","onCurrentChange"])])]),_:1},8,["label"]),t(_,{label:e.$t("lang.TransferList"),name:"transfer"},{default:s(()=>[C((h(),w(y,{class:S(e.store.switchDark?"black":"white"),data:e.tableData2},{default:s(()=>[t(p,{prop:"amount",label:e.$t("lang.Amount")},null,8,["label"]),t(p,{prop:"create_at",label:e.$t("lang.CreateAt")},{default:s(a=>[a.row.create_at!=null?(h(),f("span",De,r(e.timestampToTime(a.row.create_at)),1)):k("",!0)]),_:1},8,["label"]),t(p,{prop:"sender",label:e.$t("lang.Sender"),"show-overflow-tooltip":!0},{default:s(a=>[t(b,{to:"/accountDetail?address="+a.row.sender,style:g(e.isDark(e.store.switchDark))},{default:s(()=>[m(r(a.row.sender),1)]),_:2},1032,["to","style"])]),_:1},8,["label"]),t(p,{prop:"receiver",label:e.$t("lang.Receiver"),"show-overflow-tooltip":!0},{default:s(a=>[t(b,{to:"/accountDetail?address="+a.row.receiver,style:g(e.isDark(e.store.switchDark))},{default:s(()=>[m(r(a.row.receiver),1)]),_:2},1032,["to","style"])]),_:1},8,["label"]),t(p,{prop:"txn_hash",label:e.$t("lang.TxnHash"),"show-overflow-tooltip":!0},{default:s(a=>[t(b,{to:"/transactionDetail?hash="+a.row.txn_hash,style:g(e.isDark(e.store.switchDark))},{default:s(()=>[m(r(a.row.txn_hash),1)]),_:2},1032,["to","style"])]),_:1},8,["label"]),t(p,{prop:"type_tag",label:e.$t("lang.CoinID"),width:"400","show-overflow-tooltip":!0},{default:s(a=>[t(b,{to:"/coinDetail?tag="+a.row.type_tag,style:g(e.isDark(e.store.switchDark))},{default:s(()=>[m(r(a.row.type_tag),1)]),_:2},1032,["to","style"])]),_:1},8,["label"])]),_:1},8,["class","data"])),[[v,e.loading]])]),_:1},8,["label"]),t(_,{label:e.$t("lang.ResourceList"),name:"resources"},{default:s(()=>[C((h(),w(y,{class:S(e.store.switchDark?"black":"white"),data:e.tableData3},{default:s(()=>[t(p,{prop:"key",label:e.$t("lang.Key")},null,8,["label"]),t(p,{prop:"value",label:e.$t("lang.Value")},ce({_:2},[e.network=="aptos_mainnet"||e.network=="aptos_testnet"||e.network=="aptos_devnet"?{name:"default",fn:s(a=>[t(A,{value:JSON.parse(a.row.value),"expand-depth":5,copyable:"",boxed:"",sort:""},null,8,["value"])])}:void 0]),1032,["label"])]),_:1},8,["class","data"])),[[v,e.loading]])]),_:1},8,["label"])]),_:1},8,["modelValue","onTabClick"])],4)]),t(H)],64)}var ra=oe(me,[["render",Ce],["__scopeId","data-v-2e7e6a98"]]);export{ra as default};
