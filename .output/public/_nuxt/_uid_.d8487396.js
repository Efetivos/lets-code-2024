import{g as y,h as x,i as f,u as D,r as w,c as m,a as t,t as n,j as e,F as A,k as B,b as k,w as C,l as b,e as v,o as i,m as N,d as P}from"./entry.506c9df0.js";const V={class:"page page-article article","data-page":"article"},F=["src"],j={class:"blog-grid"},I={methods:{scrollDown(g){}},mounted(){}},G=Object.assign(I,{__name:"[uid]",async setup(g){let a,l;const{client:u}=y(),d=x();let _=[];const{data:s}=([a,l]=f(async()=>b(d.params.uid,async()=>{const o=await u.getByUID("article",d.params.uid);for(const p of o.data.articles_group){let r=await u.getByUID("article",""+p.article.uid);_.push(r)}if(o)return o},"$1iuAZVFDP7")),a=await a,l(),a);return D({title:" Article | Boiler Nuxt & Prismic",bodyAttrs:{class:"article"}}),(o,p)=>{const r=w("CardArticle"),h=v;return i(),m("div",V,[t("h1",null,n(e(s).data.title),1),t("h1",null,n(e(s).data.img.url),1),t("h1",null,n(e(s).data.excerpt),1),t("img",{src:e(s).data.img.url},null,8,F),t("div",j,[(i(!0),m(A,null,B(e(_),(c,U)=>(i(),N(r,{postData:c.data,type:c.type,uid:c.uid},null,8,["postData","type","uid"]))),256))]),k(h,{to:"/"},{default:C(()=>[P(" Go to home Page ")]),_:1})])}}});export{G as default};
