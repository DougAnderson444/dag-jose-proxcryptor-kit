import{D as qe,L as We,S as ee,i as te,s as le,e as D,t as N,k as A,c as C,a as S,h as P,d as b,m as j,b as L,g,G as I,M as ne,N as J,l as q,O as Fe,P as ke,Q as ue,R as ve,T as ye,U as we,V as Ie,W as Je,v as re,X as Qe,Y as Me,Z as $,K as k,_ as fe,$ as De,j as ce,a0 as Ge,a1 as Ce,n as Y,o as T,p as Z,q as E,a2 as Xe,a3 as oe,F as Ne,w as M,x,y as G,a4 as _e,H as Pe,I as Ee,J as Se,B as X,a5 as Le,a6 as Ye}from"../chunks/vendor-fa7435e7.js";import{_ as ie}from"../chunks/preload-helper-c6bb0bca.js";const Te=qe(null);const Ze=()=>{const s=We("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},ze={subscribe(s){return Ze().page.subscribe(s)}};function Re(s,e,t){const l=s.slice();return l[5]=e[t].handle,l[6]=e[t].pubKey,l}function Ae(s){let e,t,l,n,r,o,i,a,_;return{c(){e=D("h1"),t=N("Add Contact Details"),l=A(),n=D("label"),r=N("Handle:"),o=A(),i=D("input"),this.h()},l(c){e=C(c,"H1",{});var u=S(e);t=P(u,"Add Contact Details"),u.forEach(b),l=j(c),n=C(c,"LABEL",{for:!0});var d=S(n);r=P(d,"Handle:"),d.forEach(b),o=j(c),i=C(c,"INPUT",{id:!0,class:!0}),this.h()},h(){L(n,"for","handle"),L(i,"id","handle"),L(i,"class","svelte-1jwthxq")},m(c,u){g(c,e,u),I(e,t),g(c,l,u),g(c,n,u),I(n,r),g(c,o,u),g(c,i,u),ne(i,s[5]),a||(_=J(i,"input",s[17]),a=!0)},p(c,u){u&32&&i.value!==c[5]&&ne(i,c[5])},d(c){c&&b(e),c&&b(l),c&&b(n),c&&b(o),c&&b(i),a=!1,_()}}}function $e(s){let e,t,l;return{c(){e=N("No "),t=N(se),l=N(" yet.")},l(n){e=P(n,"No "),t=P(n,se),l=P(n," yet.")},m(n,r){g(n,e,r),g(n,t,r),g(n,l,r)},p:k,d(n){n&&b(e),n&&b(t),n&&b(l)}}}function xe(s){let e,t,l={ctx:s,current:null,token:null,hasCatch:!1,pending:lt,then:tt,catch:et,value:7};return fe(t=s[7],l),{c(){e=q(),l.block.c()},l(n){e=q(),l.block.l(n)},m(n,r){g(n,e,r),l.block.m(n,l.anchor=r),l.mount=()=>e.parentNode,l.anchor=e},p(n,r){s=n,l.ctx=s,r&128&&t!==(t=s[7])&&fe(t,l)||De(l,s,r)},d(n){n&&b(e),l.block.d(n),l.token=null,l=null}}}function et(s){return{c:k,l:k,m:k,p:k,d:k}}function tt(s){let e,t=s[7],l=[];for(let n=0;n<t.length;n+=1)l[n]=je(Re(s,t,n));return{c(){e=D("ul");for(let n=0;n<l.length;n+=1)l[n].c()},l(n){e=C(n,"UL",{});var r=S(e);for(let o=0;o<l.length;o+=1)l[o].l(r);r.forEach(b)},m(n,r){g(n,e,r);for(let o=0;o<l.length;o+=1)l[o].m(e,null)},p(n,r){if(r&128){t=n[7];let o;for(o=0;o<t.length;o+=1){const i=Re(n,t,o);l[o]?l[o].p(i,r):(l[o]=je(i),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(n){n&&b(e),Ge(l,n)}}}function je(s){let e,t=s[5]+"",l,n,r=s[6]+"",o;return{c(){e=D("li"),l=N(t),n=A(),o=N(r)},l(i){e=C(i,"LI",{});var a=S(e);l=P(a,t),n=j(a),o=P(a,r),a.forEach(b)},m(i,a){g(i,e,a),I(e,l),I(e,n),I(e,o)},p(i,a){a&128&&t!==(t=i[5]+"")&&ce(l,t),a&128&&r!==(r=i[6]+"")&&ce(o,r)},d(i){i&&b(e)}}}function lt(s){let e;return{c(){e=N("Decrypting...")},l(t){e=P(t,"Decrypting...")},m(t,l){g(t,e,l)},p:k,d(t){t&&b(e)}}}function nt(s){let e,t,l,n,r,o,i,a,_,c,u,d,h,f,p,v,w,R,K,m,y,V,F,H,O=s[3]&&Ae(s);function pe(B,U){return B[2]&&B[7]?xe:$e}let z=pe(s),W=z(s);return{c(){e=D("div"),t=D("div"),l=D("h1"),n=N(se),r=A(),o=D("div"),i=D("input"),a=A(),_=D("div"),c=D("input"),u=A(),O&&O.c(),d=A(),h=D("div"),f=D("label"),p=A(),v=D("button"),w=N("Save"),m=A(),W.c(),y=q(),this.h()},l(B){e=C(B,"DIV",{});var U=S(e);t=C(U,"DIV",{class:!0});var Q=S(t);l=C(Q,"H1",{class:!0});var be=S(l);n=P(be,se),be.forEach(b),r=j(Q),o=C(Q,"DIV",{class:!0});var he=S(o);i=C(he,"INPUT",{placeholder:!0,class:!0}),he.forEach(b),a=j(Q),_=C(Q,"DIV",{class:!0});var me=S(_);c=C(me,"INPUT",{class:!0}),me.forEach(b),u=j(Q),O&&O.l(Q),d=j(Q),h=C(Q,"DIV",{class:!0});var ae=S(h);f=C(ae,"LABEL",{for:!0});var Ue=S(f);Ue.forEach(b),p=j(ae),v=C(ae,"BUTTON",{});var ge=S(v);w=P(ge,"Save"),ge.forEach(b),ae.forEach(b),Q.forEach(b),U.forEach(b),m=j(B),W.l(B),y=q(),this.h()},h(){L(l,"class","tag"),L(i,"placeholder","publicKey friends contacts"),i.disabled=!0,L(i,"class","svelte-1jwthxq"),L(o,"class","tag keywords"),L(c,"class","svelte-1jwthxq"),L(_,"class","item svelte-1jwthxq"),L(f,"for","preview"),v.disabled=R=!s[5]||!s[6]||s[4],L(h,"class","submit"),L(t,"class","data-entry svelte-1jwthxq")},m(B,U){g(B,e,U),I(e,t),I(t,l),I(l,n),I(t,r),I(t,o),I(o,i),ne(i,s[0]),I(t,a),I(t,_),I(_,c),s[15](c),ne(c,s[6]),I(t,u),O&&O.m(t,null),I(t,d),I(t,h),I(h,f),I(h,p),I(h,v),I(v,w),g(B,m,U),W.m(B,U),g(B,y,U),V=!0,F||(H=[J(i,"input",s[14]),J(c,"input",s[16]),J(c,"input",s[9]),J(c,"change",s[9]),J(c,"focus",s[9]),J(v,"click",Fe(s[8]))],F=!0)},p(B,[U]){s=B,U&1&&i.value!==s[0]&&ne(i,s[0]),U&64&&c.value!==s[6]&&ne(c,s[6]),s[3]?O?O.p(s,U):(O=Ae(s),O.c(),O.m(t,d)):O&&(O.d(1),O=null),(!V||U&112&&R!==(R=!s[5]||!s[6]||s[4]))&&(v.disabled=R),z===(z=pe(s))&&W?W.p(s,U):(W.d(1),W=z(s),W&&(W.c(),W.m(y.parentNode,y)))},i(B){V||(ke(()=>{K||(K=ue(e,ye,{delay:100,duration:400,easing:ve},!0)),K.run(1)}),V=!0)},o(B){K||(K=ue(e,ye,{delay:100,duration:400,easing:ve},!1)),K.run(0),V=!1},d(B){B&&b(e),s[15](null),O&&O.d(),B&&K&&K.end(),B&&b(m),W.d(B),B&&b(y),F=!1,we(H)}}}const de=32,se="Contacts";function ot(s,e,t){let l;Ie(s,ze,H=>t(18,l=H));let{getTagNode:n}=e,{decrypt:r}=e,{rootCID:o}=e;const i=Je();let a,_,c,u,d,h,f=[],p;re(async()=>{l.url.searchParams.has("add")&&(t(6,c=l.url.searchParams.get("add")),u.focus())});async function v(){t(2,d=await n(se)),t(7,f=await r(d))}function w(){v(),t(4,p=!1),t(5,_=""),t(6,c="")}async function R(){if(!_||!c)return;const H=[...f,{handle:_,pubKey:c}];t(4,p=!0),i("handleSubmit",{tag:se,data:{value:H,schema:a}})}function K(){if(!c)return;if(Qe.toByteArray(c).length===de){t(3,h=!0);return}try{if(Me.decode(c).length===de){t(3,h=!0);return}}catch{}if((z=>new Uint8Array(z.match(/.{1,2}/g).map(W=>parseInt(W,16))))(c).length===de){t(3,h=!0);return}}function m(){a=this.value,t(0,a)}function y(H){$[H?"unshift":"push"](()=>{u=H,t(1,u)})}function V(){c=this.value,t(6,c)}function F(){_=this.value,t(5,_)}return s.$$set=H=>{"getTagNode"in H&&t(10,n=H.getTagNode),"decrypt"in H&&t(11,r=H.decrypt),"rootCID"in H&&t(12,o=H.rootCID)},s.$$.update=()=>{s.$$.dirty&4096&&o&&v()},[a,u,d,h,p,_,c,f,R,K,n,r,o,w,m,y,V,F]}class st extends ee{constructor(e){super();te(this,e,ot,nt,le,{getTagNode:10,decrypt:11,rootCID:12,onSubmitted:13})}get onSubmitted(){return this.$$.ctx[13]}}function He(s){let e,t,l,n,r,o;return{c(){e=N("\u2714\uFE0F IPLD Data Saved to: "),t=D("a"),l=N(s[0]),r=A(),o=D("br"),this.h()},l(i){e=P(i,"\u2714\uFE0F IPLD Data Saved to: "),t=C(i,"A",{href:!0,target:!0});var a=S(t);l=P(a,s[0]),a.forEach(b),r=j(i),o=C(i,"BR",{}),this.h()},h(){L(t,"href",n="https://dweb.link/api/v0/dag/get?arg="+s[0]),L(t,"target","_blank")},m(i,a){g(i,e,a),g(i,t,a),I(t,l),g(i,r,a),g(i,o,a)},p(i,a){a&1&&ce(l,i[0]),a&1&&n!==(n="https://dweb.link/api/v0/dag/get?arg="+i[0])&&L(t,"href",n)},d(i){i&&b(e),i&&b(t),i&&b(r),i&&b(o)}}}function rt(s){let e,t=s[0]&&He(s);return{c(){t&&t.c(),e=q()},l(l){t&&t.l(l),e=q()},m(l,n){t&&t.m(l,n),g(l,e,n)},p(l,[n]){l[0]?t?t.p(l,n):(t=He(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(l){t&&t.d(l),l&&b(e)}}}function it(s,e,t){let{rootCID:l}=e;return s.$$set=n=>{"rootCID"in n&&t(0,l=n.rootCID)},[l]}class at extends ee{constructor(e){super();te(this,e,it,rt,le,{rootCID:0})}}function ut(s){let e;return{c(){e=N("Connect with the Wallet to save encrypted messages.")},l(t){e=P(t,"Connect with the Wallet to save encrypted messages.")},m(t,l){g(t,e,l)},p:k,i:k,o:k,d(t){t&&b(e)}}}function ft(s){let e,t,l,n,r,o,i;t=new at({props:{rootCID:s[0]}});function a(d){s[14](d)}let _={getTagNode:s[6],decrypt:s[4],rootCID:s[0]};s[3]!==void 0&&(_.onSubmitted=s[3]),n=new st({props:_}),$.push(()=>oe(n,"onSubmitted",a)),n.$on("handleSubmit",s[5]);const c=s[13].default,u=Ne(c,s,s[12],null);return{c(){e=D("div"),M(t.$$.fragment),l=A(),M(n.$$.fragment),o=A(),u&&u.c(),this.h()},l(d){e=C(d,"DIV",{class:!0});var h=S(e);x(t.$$.fragment,h),l=j(h),x(n.$$.fragment,h),h.forEach(b),o=j(d),u&&u.l(d),this.h()},h(){L(e,"class","")},m(d,h){g(d,e,h),G(t,e,null),I(e,l),G(n,e,null),g(d,o,h),u&&u.m(d,h),i=!0},p(d,h){const f={};h&1&&(f.rootCID=d[0]),t.$set(f);const p={};h&1&&(p.rootCID=d[0]),!r&&h&8&&(r=!0,p.onSubmitted=d[3],_e(()=>r=!1)),n.$set(p),u&&u.p&&(!i||h&4096)&&Pe(u,c,d,d[12],i?Se(c,d[12],h,null):Ee(d[12]),null)},i(d){i||(E(t.$$.fragment,d),E(n.$$.fragment,d),E(u,d),i=!0)},o(d){T(t.$$.fragment,d),T(n.$$.fragment,d),T(u,d),i=!1},d(d){d&&b(e),X(t),X(n),d&&b(o),u&&u.d(d)}}}function ct(s){let e,t,l,n,r,o,i;const a=[ft,ut],_=[];function c(u,d){return u[1]&&u[2]?0:1}return r=c(s),o=_[r]=a[r](s),{c(){e=D("script"),t=N("global = globalThis; // for solana web3 repo"),l=A(),n=D("div"),o.c(),this.h()},l(u){const d=Ce('[data-svelte="svelte-1yyo2jl"]',document.head);e=C(d,"SCRIPT",{});var h=S(e);t=P(h,"global = globalThis; // for solana web3 repo"),h.forEach(b),d.forEach(b),l=j(u),n=C(u,"DIV",{class:!0});var f=S(n);o.l(f),f.forEach(b),this.h()},h(){L(n,"class","main svelte-460y2v")},m(u,d){I(document.head,e),I(e,t),g(u,l,d),g(u,n,d),_[r].m(n,null),i=!0},p(u,[d]){let h=r;r=c(u),r===h?_[r].p(u,d):(Y(),T(_[h],1,1,()=>{_[h]=null}),Z(),o=_[r],o?o.p(u,d):(o=_[r]=a[r](u),o.c()),E(o,1),o.m(n,null))},i(u){i||(E(o),i=!0)},o(u){T(o),i=!1},d(u){b(e),u&&b(l),u&&b(n),_[r].d()}}}const Be="__ROOT_CID__";function _t(s,e,t){let l;Ie(s,Te,m=>t(16,l=m));let{$$slots:n={},$$scope:r}=e,{rootCID:o}=e,{proxcryptor:i}=e,{ipfsNode:a}=e,{CID:_}=e,c=!1,u,d,h,f,p=()=>{};re(async()=>{const{ImmortalDB:m}=await ie(()=>import("../chunks/index-17ddc90e.js"),[]),{DagJoseCryptor:y}=await ie(()=>import("../chunks/dagjosecryptor-fcca8126.js"),["chunks/dagjosecryptor-fcca8126.js","chunks/vendor-fa7435e7.js"]);d=async()=>{if(await a,o)return!0;let V=await m.get(Be);return V?(t(0,o=_.asCID(V)||_.parse(V)),!0):(t(0,o=!1),!0)},t(2,c=await d()),t(11,f=async()=>{await a,t(10,h=new y(a,i,o))}),t(9,u=async()=>{t(0,o=h.rootCID),m.set(Be,o.toString())})});let v=async m=>await h.selfDecrypt(m);const w=async function(m){let y=m.detail.tag||null,V=m.detail.data.schema||"",F=m.detail.data.value||null;!y||!F||(await h.put(F,y,V),t(10,h),p())};Xe(Te,l=async(m,y)=>{await h.setTagReKeys(m,y),t(10,h)},l);async function R(m){if(!(!o||!a||!m))try{const y=(await a.dag.get(o,{path:`/${m}`,localResolve:!0})).value;return(await a.dag.get(y,{localResolve:!0})).value}catch{console.warn(`${m} no DAG data`)}}function K(m){p=m,t(3,p)}return s.$$set=m=>{"rootCID"in m&&t(0,o=m.rootCID),"proxcryptor"in m&&t(1,i=m.proxcryptor),"ipfsNode"in m&&t(7,a=m.ipfsNode),"CID"in m&&t(8,_=m.CID),"$$scope"in m&&t(12,r=m.$$scope)},s.$$.update=()=>{s.$$.dirty&2050&&i&&f&&f(),s.$$.dirty&1536&&h&&h.rootCID&&u&&u()},[o,i,c,p,v,w,R,a,_,u,h,f,r,n,K]}class pt extends ee{constructor(e){super();te(this,e,_t,ct,le,{rootCID:0,proxcryptor:1,ipfsNode:7,CID:8})}}function dt(s){let e,t,l,n,r,o,i,a,_,c,u,d,h;return{c(){e=D("span"),t=N("[QR Code]"),l=A(),n=D("br"),r=A(),o=D("canvas"),_=A(),c=D("br"),this.h()},l(f){e=C(f,"SPAN",{class:!0});var p=S(e);t=P(p,"[QR Code]"),p.forEach(b),l=j(f),n=C(f,"BR",{}),r=j(f),o=C(f,"CANVAS",{width:!0,height:!0,class:!0}),S(o).forEach(b),_=j(f),c=C(f,"BR",{}),this.h()},h(){L(e,"class","svelte-s2soft"),o.hidden=i=!s[1],L(o,"width",32),L(o,"height",32),L(o,"class","svelte-s2soft")},m(f,p){g(f,e,p),I(e,t),g(f,l,p),g(f,n,p),g(f,r,p),g(f,o,p),s[6](o),g(f,_,p),g(f,c,p),u=!0,d||(h=[J(e,"mouseover",s[4]),J(o,"mousemove",s[5])],d=!0)},p(f,[p]){(!u||p&2&&i!==(i=!f[1]))&&(o.hidden=i)},i(f){u||(ke(()=>{a||(a=ue(o,Le,{},!0)),a.run(1)}),u=!0)},o(f){a||(a=ue(o,Le,{},!1)),a.run(0),u=!1},d(f){f&&b(e),f&&b(l),f&&b(n),f&&b(r),f&&b(o),s[6](null),f&&a&&a.end(),f&&b(_),f&&b(c),d=!1,we(h)}}}function bt(s,e,t){let{value:l}=e,n,r=!1;async function o(){Ye.toCanvas(n,l),t(1,r=!0)}const i=()=>{o()},a=()=>{t(1,r=!1)};function _(c){$[c?"unshift":"push"](()=>{n=c,t(0,n)})}return s.$$set=c=>{"value"in c&&t(3,l=c.value)},[n,r,o,l,i,a,_]}class ht extends ee{constructor(e){super();te(this,e,bt,dt,le,{value:3})}}const Ve=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],Oe=new Array(256);for(let s=0;s<256;s++)Oe[s]=`${Ve[s>>>4&15]}${Ve[s&15]}`;function mt(s){let e="";for(let t=0,l=s.length;t<l;t++)e+=Oe[s[t]];return e}function Ke(s){let e,t,l,n,r,o,i;function a(f){s[12](f)}var _=s[2];function c(f){let p={opts:f[8]};return f[1]!==void 0&&(p.hypnsNode=f[1]),{props:p}}_&&(e=new _(c(s)),$.push(()=>oe(e,"hypnsNode",a)));const u=[kt,gt],d=[];function h(f,p){return f[1]?1:0}return r=h(s),o=d[r]=u[r](s),{c(){e&&M(e.$$.fragment),l=A(),n=D("div"),o.c(),this.h()},l(f){e&&x(e.$$.fragment,f),l=j(f),n=C(f,"DIV",{class:!0});var p=S(n);o.l(p),p.forEach(b),this.h()},h(){L(n,"class","main svelte-52klll")},m(f,p){e&&G(e,f,p),g(f,l,p),g(f,n,p),d[r].m(n,null),i=!0},p(f,p){const v={};if(!t&&p&2&&(t=!0,v.hypnsNode=f[1],_e(()=>t=!1)),_!==(_=f[2])){if(e){Y();const R=e;T(R.$$.fragment,1,0,()=>{X(R,1)}),Z()}_?(e=new _(c(f)),$.push(()=>oe(e,"hypnsNode",a)),M(e.$$.fragment),E(e.$$.fragment,1),G(e,l.parentNode,l)):e=null}else _&&e.$set(v);let w=r;r=h(f),r===w?d[r].p(f,p):(Y(),T(d[w],1,1,()=>{d[w]=null}),Z(),o=d[r],o?o.p(f,p):(o=d[r]=u[r](f),o.c()),E(o,1),o.m(n,null))},i(f){i||(e&&E(e.$$.fragment,f),E(o),i=!0)},o(f){e&&T(e.$$.fragment,f),T(o),i=!1},d(f){e&&X(e,f),f&&b(l),f&&b(n),d[r].d()}}}function gt(s){let e=(s[3]?"Last Saved Root: "+s[3]:"Connect to Pin to PiperNet")+"",t,l,n,r,o,i;const a=[wt,yt,vt],_=[];function c(u,d){return u[4]?u[5]?1:2:0}return n=c(s),r=_[n]=a[n](s),{c(){t=N(e),l=A(),r.c(),o=q()},l(u){t=P(u,e),l=j(u),r.l(u),o=q()},m(u,d){g(u,t,d),g(u,l,d),_[n].m(u,d),g(u,o,d),i=!0},p(u,d){(!i||d&8)&&e!==(e=(u[3]?"Last Saved Root: "+u[3]:"Connect to Pin to PiperNet")+"")&&ce(t,e);let h=n;n=c(u),n===h?_[n].p(u,d):(Y(),T(_[h],1,1,()=>{_[h]=null}),Z(),r=_[n],r?r.p(u,d):(r=_[n]=a[n](u),r.c()),E(r,1),r.m(o.parentNode,o))},i(u){i||(E(r),i=!0)},o(u){T(r),i=!1},d(u){u&&b(t),u&&b(l),_[n].d(u),u&&b(o)}}}function kt(s){let e;return{c(){e=N("Loading Hypns...")},l(t){e=P(t,"Loading Hypns...")},m(t,l){g(t,e,l)},p:k,i:k,o:k,d(t){t&&b(e)}}}function vt(s){let e;return{c(){e=N("Sign message to write to PiperNet...")},l(t){e=P(t,"Sign message to write to PiperNet...")},m(t,l){g(t,e,l)},p:k,i:k,o:k,d(t){t&&b(e)}}}function yt(s){let e,t,l,n={ctx:s,current:null,token:null,hasCatch:!1,pending:Pt,then:Dt,catch:It,blocks:[,,,]};return fe(t=s[5],n),{c(){e=q(),n.block.c()},l(r){e=q(),n.block.l(r)},m(r,o){g(r,e,o),n.block.m(r,n.anchor=o),n.mount=()=>e.parentNode,n.anchor=e,l=!0},p(r,o){s=r,n.ctx=s,o&32&&t!==(t=s[5])&&fe(t,n)||De(n,s,o)},i(r){l||(E(n.block),l=!0)},o(r){for(let o=0;o<3;o+=1){const i=n.blocks[o];T(i)}l=!1},d(r){r&&b(e),n.block.d(r),n.token=null,n=null}}}function wt(s){let e,t,l,n;return{c(){e=D("button"),t=N("Pin to PiperNet"),this.h()},l(r){e=C(r,"BUTTON",{class:!0});var o=S(e);t=P(o,"Pin to PiperNet"),o.forEach(b),this.h()},h(){L(e,"class","svelte-52klll")},m(r,o){g(r,e,o),I(e,t),l||(n=J(e,"click",s[9]),l=!0)},p:k,i:k,o:k,d(r){r&&b(e),l=!1,n()}}}function It(s){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function Dt(s){let e,t,l,n,r,o,i,a,_,c,u;function d(p,v){return v&9&&(n=null),n==null&&(n=p[3]===p[0].toV1().toString()),n?Nt:Ct}let h=d(s,-1),f=h(s);return c=new ht({props:{value:`${location.origin}/?contactid=${s[7]}`}}),{c(){e=D("h3"),t=N("\u2714\uFE0F Connected to PiperNet"),l=A(),f.c(),r=N(`\r
\r
					\r
					Connect with others: [`),o=D("a"),i=N("Link"),_=N("] "),M(c.$$.fragment),this.h()},l(p){e=C(p,"H3",{});var v=S(e);t=P(v,"\u2714\uFE0F Connected to PiperNet"),v.forEach(b),l=j(p),f.l(p),r=P(p,`\r
\r
					\r
					Connect with others: [`),o=C(p,"A",{href:!0});var w=S(o);i=P(w,"Link"),w.forEach(b),_=P(p,"] "),x(c.$$.fragment,p),this.h()},h(){L(o,"href",a=""+(location.origin+"/?add="+s[7]))},m(p,v){g(p,e,v),I(e,t),g(p,l,v),f.m(p,v),g(p,r,v),g(p,o,v),I(o,i),g(p,_,v),G(c,p,v),u=!0},p(p,v){h===(h=d(p,v))&&f?f.p(p,v):(f.d(1),f=h(p),f&&(f.c(),f.m(r.parentNode,r))),(!u||v&128&&a!==(a=""+(location.origin+"/?add="+p[7])))&&L(o,"href",a);const w={};v&128&&(w.value=`${location.origin}/?contactid=${p[7]}`),c.$set(w)},i(p){u||(E(c.$$.fragment,p),u=!0)},o(p){T(c.$$.fragment,p),u=!1},d(p){p&&b(e),p&&b(l),f.d(p),p&&b(r),p&&b(o),p&&b(_),X(c,p)}}}function Ct(s){let e,t,l,n,r,o,i,a;return{c(){e=D("h3"),t=N("\u26A0\uFE0F PiperNet needs updating"),l=A(),n=D("button"),r=N("Publish Latest"),this.h()},l(_){e=C(_,"H3",{});var c=S(e);t=P(c,"\u26A0\uFE0F PiperNet needs updating"),c.forEach(b),l=j(_),n=C(_,"BUTTON",{class:!0});var u=S(n);r=P(u,"Publish Latest"),u.forEach(b),this.h()},h(){n.disabled=o=!s[0]||!s[6],L(n,"class","svelte-52klll")},m(_,c){g(_,e,c),I(e,t),g(_,l,c),g(_,n,c),I(n,r),i||(a=J(n,"click",s[10]),i=!0)},p(_,c){c&65&&o!==(o=!_[0]||!_[6])&&(n.disabled=o)},d(_){_&&b(e),_&&b(l),_&&b(n),i=!1,a()}}}function Nt(s){let e,t;return{c(){e=D("h3"),t=N("\u2714\uFE0F PiperNet up to date")},l(l){e=C(l,"H3",{});var n=S(e);t=P(n,"\u2714\uFE0F PiperNet up to date"),n.forEach(b)},m(l,n){g(l,e,n),I(e,t)},p:k,d(l){l&&b(e)}}}function Pt(s){let e;return{c(){e=N("Loading instance...")},l(t){e=P(t,"Loading instance...")},m(t,l){g(t,e,l)},p:k,i:k,o:k,d(t){t&&b(e)}}}function Et(s){let e,t,l=s[2]&&Ke(s);return{c(){l&&l.c(),e=q()},l(n){l&&l.l(n),e=q()},m(n,r){l&&l.m(n,r),g(n,e,r),t=!0},p(n,[r]){n[2]?l?(l.p(n,r),r&4&&E(l,1)):(l=Ke(n),l.c(),E(l,1),l.m(e.parentNode,e)):l&&(Y(),T(l,1,1,()=>{l=null}),Z())},i(n){t||(E(l),t=!0)},o(n){T(l),t=!1},d(n){l&&l.d(n),n&&b(e)}}}function St(s,e,t){let{rootCID:l}=e,{wallet:n}=e,r,o,i,a,_,c,u,d={persist:!0,swarmOpts:{announceLocalAddress:!0,wsProxy:["wss://hyperswarm.mauve.moe","wss://geut-webrtc-signal-v3.glitch.me","wss://geut-webrtc-signal-v3.herokuapp.com"]}};re(async()=>{ie(()=>import("../chunks/index-66a1090b.js"),[]).then(w=>{t(2,r=w.default)})});async function h(){const w=await n.proxcryptor.getPublicKey();t(7,u=mt(w))}async function f(){console.log({wallet:n});let w=await n.getPublicKey();console.log({getPublicKey:w}),t(4,a=await o.open({keypair:{publicKey:u},wallet:n})),console.log({hypnsInstance:a}),t(5,_=await a.ready()),console.log({instanceReady:_}),t(6,c=()=>{a.publish({ipld:l.toV1().toString()})}),a.on("update",R=>{t(3,i=R.ipld)})}async function p(){c()}function v(w){o=w,t(1,o)}return s.$$set=w=>{"rootCID"in w&&t(0,l=w.rootCID),"wallet"in w&&t(11,n=w.wallet)},s.$$.update=()=>{s.$$.dirty&2050&&n&&o&&h()},[l,o,r,i,a,_,c,u,d,f,p,n,v]}class Lt extends ee{constructor(e){super();te(this,e,St,Et,le,{rootCID:0,wallet:11})}}function Tt(s){let e,t;return{c(){e=N("Loading Web3 Wallet..."),t=D("br")},l(l){e=P(l,"Loading Web3 Wallet..."),t=C(l,"BR",{})},m(l,n){g(l,e,n),g(l,t,n)},p:k,i:k,o:k,d(l){l&&b(e),l&&b(t)}}}function Rt(s){let e,t,l,n;function r(a){s[6](a)}var o=s[4];function i(a){let _={inputUrl:Kt};return a[0]!==void 0&&(_.wallet=a[0]),{props:_}}return o&&(e=new o(i(s)),$.push(()=>oe(e,"wallet",r))),{c(){e&&M(e.$$.fragment),l=q()},l(a){e&&x(e.$$.fragment,a),l=q()},m(a,_){e&&G(e,a,_),g(a,l,_),n=!0},p(a,_){const c={};if(!t&&_&1&&(t=!0,c.wallet=a[0],_e(()=>t=!1)),o!==(o=a[4])){if(e){Y();const u=e;T(u.$$.fragment,1,0,()=>{X(u,1)}),Z()}o?(e=new o(i(a)),$.push(()=>oe(e,"wallet",r)),M(e.$$.fragment),E(e.$$.fragment,1),G(e,l.parentNode,l)):e=null}else o&&e.$set(c)},i(a){n||(e&&E(e.$$.fragment,a),n=!0)},o(a){e&&T(e.$$.fragment,a),n=!1},d(a){a&&b(l),e&&X(e,a)}}}function At(s){let e,t;return{c(){e=N("Loading IPFS..."),t=D("br")},l(l){e=P(l,"Loading IPFS..."),t=C(l,"BR",{})},m(l,n){g(l,e,n),g(l,t,n)},p:k,i:k,o:k,d(l){l&&b(e),l&&b(t)}}}function jt(s){let e,t,l;function n(o){s[7](o)}let r={proxcryptor:s[0].proxcryptor,ipfsNode:s[2],CID:s[3],$$slots:{default:[Ht]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.rootCID=s[1]),e=new pt({props:r}),$.push(()=>oe(e,"rootCID",n)),{c(){M(e.$$.fragment)},l(o){x(e.$$.fragment,o)},m(o,i){G(e,o,i),l=!0},p(o,i){const a={};i&1&&(a.proxcryptor=o[0].proxcryptor),i&4&&(a.ipfsNode=o[2]),i&8&&(a.CID=o[3]),i&256&&(a.$$scope={dirty:i,ctx:o}),!t&&i&2&&(t=!0,a.rootCID=o[1],_e(()=>t=!1)),e.$set(a)},i(o){l||(E(e.$$.fragment,o),l=!0)},o(o){T(e.$$.fragment,o),l=!1},d(o){X(e,o)}}}function Ht(s){let e;const t=s[5].default,l=Ne(t,s,s[8],null);return{c(){l&&l.c()},l(n){l&&l.l(n)},m(n,r){l&&l.m(n,r),e=!0},p(n,r){l&&l.p&&(!e||r&256)&&Pe(l,t,n,n[8],e?Se(t,n[8],r,null):Ee(n[8]),null)},i(n){e||(E(l,n),e=!0)},o(n){T(l,n),e=!1},d(n){l&&l.d(n)}}}function Bt(s){return{c:k,l:k,m:k,p:k,i:k,o:k,d:k}}function Vt(s){let e,t;return e=new Lt({props:{wallet:s[0],rootCID:s[1]}}),{c(){M(e.$$.fragment)},l(l){x(e.$$.fragment,l)},m(l,n){G(e,l,n),t=!0},p(l,n){const r={};n&1&&(r.wallet=l[0]),n&2&&(r.rootCID=l[1]),e.$set(r)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){T(e.$$.fragment,l),t=!1},d(l){X(e,l)}}}function Ot(s){let e,t,l,n,r,o,i,a,_,c;const u=[Rt,Tt],d=[];function h(m,y){return m[4]?0:1}t=h(s),l=d[t]=u[t](s);const f=[jt,At],p=[];function v(m,y){return m[0]&&m[2]&&m[3]?0:1}r=v(s),o=p[r]=f[r](s);const w=[Vt,Bt],R=[];function K(m,y){return m[1]?0:1}return a=K(s),_=R[a]=w[a](s),{c(){e=D("div"),l.c(),n=A(),o.c(),i=A(),_.c(),this.h()},l(m){e=C(m,"DIV",{class:!0});var y=S(e);l.l(y),n=j(y),o.l(y),i=j(y),_.l(y),y.forEach(b),this.h()},h(){L(e,"class","")},m(m,y){g(m,e,y),d[t].m(e,null),I(e,n),p[r].m(e,null),I(e,i),R[a].m(e,null),c=!0},p(m,[y]){let V=t;t=h(m),t===V?d[t].p(m,y):(Y(),T(d[V],1,1,()=>{d[V]=null}),Z(),l=d[t],l?l.p(m,y):(l=d[t]=u[t](m),l.c()),E(l,1),l.m(e,n));let F=r;r=v(m),r===F?p[r].p(m,y):(Y(),T(p[F],1,1,()=>{p[F]=null}),Z(),o=p[r],o?o.p(m,y):(o=p[r]=f[r](m),o.c()),E(o,1),o.m(e,i));let H=a;a=K(m),a===H?R[a].p(m,y):(Y(),T(R[H],1,1,()=>{R[H]=null}),Z(),_=R[a],_?_.p(m,y):(_=R[a]=w[a](m),_.c()),E(_,1),_.m(e,null))},i(m){c||(E(l),E(o),E(_),c=!0)},o(m){T(l),T(o),T(_),c=!1},d(m){m&&b(e),d[t].d(),p[r].d(),R[a].d()}}}let Kt="https://peerpiper.github.io/iframe-wallet-engine/";function Ut(s,e,t){let{$$slots:l={},$$scope:n}=e,{wallet:r}=e,{rootCID:o}=e,i,a,_,c,u=Date.now();re(async()=>{r||f(),i||p();async function f(){t(4,{Web3WalletMenu:c}=await ie(()=>import("../chunks/index-20663a52.js"),["chunks/index-20663a52.js","assets/index-ccfb2056.css","chunks/vendor-fa7435e7.js"]),c)}async function p(){const w=(await ie(()=>import("../chunks/ipfs-core-7ce8034c.js"),[])).default;t(3,a=w.CID),t(2,i=await w.create({})),console.log(`Loaded in ${(Date.now()-u)/1e3}s`,{ipfsNode:i}),_=(await i.id()).id,console.info("NodeId",_)}return()=>i.stop()});function d(f){r=f,t(0,r)}function h(f){o=f,t(1,o)}return s.$$set=f=>{"wallet"in f&&t(0,r=f.wallet),"rootCID"in f&&t(1,o=f.rootCID),"$$scope"in f&&t(8,n=f.$$scope)},[r,o,i,a,c,l,d,h,n]}class qt extends ee{constructor(e){super();te(this,e,Ut,Ot,le,{wallet:0,rootCID:1})}}function Wt(s){let e,t,l,n,r;return n=new qt({}),{c(){e=D("script"),t=N("global = globalThis; // for solana web3 repo"),l=A(),M(n.$$.fragment)},l(o){const i=Ce('[data-svelte="svelte-1yyo2jl"]',document.head);e=C(i,"SCRIPT",{});var a=S(e);t=P(a,"global = globalThis; // for solana web3 repo"),a.forEach(b),i.forEach(b),l=j(o),x(n.$$.fragment,o)},m(o,i){I(document.head,e),I(e,t),g(o,l,i),G(n,o,i),r=!0},p:k,i(o){r||(E(n.$$.fragment,o),r=!0)},o(o){T(n.$$.fragment,o),r=!1},d(o){b(e),o&&b(l),X(n,o)}}}function Ft(s){return re(async()=>{}),[]}class Mt extends ee{constructor(e){super();te(this,e,Ft,Wt,le,{})}}export{Mt as default};
