import{_ as d,a as _}from"../footer/footer.becc9f56.js";import{u as c}from"../vue-router/vue-router.b3b2f7cd.js";import{_ as v}from"../../assets/index.c9112440.js";import{E as a}from"../element-plus/element-plus.7de12a9d.js";import{I as f,r as p,a4 as m,o as F,c as g,X as r,a as B,Q as V,F as C,V as y}from"../@vue/@vue.fb755038.js";import"../@vueuse/@vueuse.d209e4ed.js";import"../vue-i18n/vue-i18n.6f01f2b2.js";import"../@intlify/@intlify.6852b34b.js";import"../source-map/source-map.6efb65ba.js";import"../vue/vue.b16dc40c.js";import"../@element-plus/@element-plus.fb03e5a3.js";import"../store/store.18269d15.js";import"../pinia/pinia.81315bcb.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../nprogress/nprogress.03f19d7f.js";import"../echarts/echarts.5bea4114.js";import"../tslib/tslib.e35f93b8.js";import"../zrender/zrender.b2e4eadc.js";import"../vue-json-viewer/vue-json-viewer.7e7e9520.js";import"../clipboard/clipboard.61903894.js";import"../pinia-plugin-persistedstate/pinia-plugin-persistedstate.54412c64.js";import"../lodash-es/lodash-es.a0751e35.js";import"../@popperjs/@popperjs.f1fb8f77.js";import"../@ctrl/@ctrl.17547d95.js";import"../dayjs/dayjs.7ffc491e.js";import"../async-validator/async-validator.21881447.js";import"../memoize-one/memoize-one.f0fba034.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.94de1731.js";import"../@floating-ui/@floating-ui.1282fc6d.js";const x={class:"login"},b=y("\u70B9\u51FB\u767B\u5F55,\u8DF3\u8F6C\u9996\u9875"),w=f({setup(E){const i=c(),t=p(""),u=p(""),s=()=>(t.value==="admin"&&u.value==="admin"?(a({type:"success",message:"\u767B\u5F55\u6210\u529F"}),i.push("/main")):t.value===""&&u.value===""?a({type:"error",message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801"}):a({type:"error",message:"\u7528\u6237\u540D\u6216\u5BC6\u7801\u8F93\u5165\u9519\u8BEF"}),{userName:t.value,pwd:u.value});return(N,e)=>{const l=m("el-input"),n=m("el-button");return F(),g(C,null,[r(d),B("div",x,[r(l,{class:"login-input",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),placeholder:"\u8F93\u5165\u7528\u6237\u540D",clearable:""},null,8,["modelValue"]),r(l,{class:"login-input",type:"password",modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=o=>u.value=o),placeholder:"\u8F93\u5165\u5BC6\u7801",onKeydown:e[2]||(e[2]=o=>o.code==="Enter"?s():""),clearable:""},null,8,["modelValue"]),r(n,{onClick:e[3]||(e[3]=o=>s())},{default:V(()=>[b]),_:1})]),r(_)],64)}}});var re=v(w,[["__scopeId","data-v-58afb232"]]);export{re as default};
