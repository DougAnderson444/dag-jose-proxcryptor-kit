var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { SvelteComponent, init, safe_not_equal, text, claim_text, insert_hydration, detach, element, space, claim_element, children, claim_space, attr, add_render_callback, append_hydration, add_resize_listener, noop, binding_callbacks, bind, create_component, claim_component, mount_component, add_flush_callback, transition_in, transition_out, destroy_component, createEventDispatcher, empty, group_outros, check_outros, onMount, update_slot_base, get_all_dirty_from_scope, get_slot_changes, set_data, create_slot, set_style, assign, now, loop, identity, listen, destroy_each, component_subscribe, set_store_value } from "./index-64ae2edc.js";
import { __vitePreload, writable } from "./preload-helper-ef2a18a4.js";
import { getTagNode, validatePubKey, CID, cubicOut } from "./cid-da67497d.js";
var IFrame_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".iframe-container.svelte-1yd6ark{height:100%;border-radius:4px}.header.svelte-1yd6ark{font-weight:700;font-size:0.8rem;text-transform:uppercase;color:rgba(0, 0, 0, 0.7)}iframe.svelte-1yd6ark{height:100%;width:100%;border:0}.iframe-inner.svelte-1yd6ark{height:100%}")();
function create_if_block$3(ctx) {
  let t;
  return {
    c() {
      t = text("Rendering...");
    },
    l(nodes) {
      t = claim_text(nodes, "Rendering...");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$4(ctx) {
  let div2;
  let div0;
  let t;
  let div1;
  let iframe_1;
  let iframe_1_resize_listener;
  let if_block = !ctx[2] && create_if_block$3();
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      if (if_block)
        if_block.c();
      t = space();
      div1 = element("div");
      iframe_1 = element("iframe");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block)
        if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      iframe_1 = claim_element(div1_nodes, "IFRAME", {
        sandbox: true,
        title: true,
        srcdoc: true,
        class: true
      });
      children(iframe_1).forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "header svelte-1yd6ark");
      attr(iframe_1, "sandbox", "allow-scripts");
      attr(iframe_1, "title", "Rendered Component");
      attr(iframe_1, "srcdoc", ctx[1]);
      attr(iframe_1, "class", "svelte-1yd6ark");
      add_render_callback(() => ctx[6].call(iframe_1));
      attr(div1, "class", "iframe-inner svelte-1yd6ark");
      attr(div2, "class", "iframe-container svelte-1yd6ark");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      if (if_block)
        if_block.m(div0, null);
      append_hydration(div2, t);
      append_hydration(div2, div1);
      append_hydration(div1, iframe_1);
      ctx[5](iframe_1);
      iframe_1_resize_listener = add_resize_listener(iframe_1, ctx[6].bind(iframe_1));
    },
    p(ctx2, [dirty]) {
      if (!ctx2[2]) {
        if (if_block)
          ;
        else {
          if_block = create_if_block$3();
          if_block.c();
          if_block.m(div0, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
      if (dirty & 2) {
        attr(iframe_1, "srcdoc", ctx2[1]);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block)
        if_block.d();
      ctx[5](null);
      iframe_1_resize_listener();
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { iframe } = $$props;
  let { srcdoc: srcdoc2 } = $$props;
  let { rendered } = $$props;
  let offsetWidth;
  let sendWidth;
  async function handleLoad() {
    if (!iframe || !offsetWidth)
      throw new Error("Missing offsetWidth");
    const channel = new MessageChannel();
    channel.port1.onmessage = (e) => {
    };
    $$invalidate(4, sendWidth = () => {
      iframe.contentWindow.postMessage({ offsetWidth }, "*", [channel.port2]);
    });
  }
  function iframe_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      iframe = $$value;
      $$invalidate(0, iframe);
    });
  }
  function iframe_1_elementresize_handler() {
    offsetWidth = this.offsetWidth;
    $$invalidate(3, offsetWidth);
  }
  $$self.$$set = ($$props2) => {
    if ("iframe" in $$props2)
      $$invalidate(0, iframe = $$props2.iframe);
    if ("srcdoc" in $$props2)
      $$invalidate(1, srcdoc2 = $$props2.srcdoc);
    if ("rendered" in $$props2)
      $$invalidate(2, rendered = $$props2.rendered);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      iframe && iframe.addEventListener("load", handleLoad);
    }
    if ($$self.$$.dirty & 24) {
      if (offsetWidth && sendWidth)
        sendWidth();
    }
  };
  return [
    iframe,
    srcdoc2,
    rendered,
    offsetWidth,
    sendWidth,
    iframe_1_binding,
    iframe_1_elementresize_handler
  ];
}
class IFrame extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { iframe: 0, srcdoc: 1, rendered: 2 });
  }
}
var srcdoc = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1" />
		<style>
			* {
				margin: 0;
				padding: 0;
				/*  include padding and the border */
				box-sizing: border-box;
				/* more padding on the inside of your box, but you don't want the box to resize */
				/* box-sizing: content-box; */
			}

			body {
				margin: 0;
				position: relative;
			}
		</style>
		<script defer type="module">
			var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e,n,c,o){t.__svelte_meta={loc:{file:e,line:n,column:c,char:o}}}function c(t){return t()}function o(){return Object.create(null)}function l(t){t.forEach(c)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r;function a(t,e){return r||(r=document.createElement("a")),r.href=e,t===r.href}function u(t,e,n,c){if(t){const o=d(t,e,n,c);return t[0](o)}}function d(t,e,n,c){return t[1]&&c?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](c(e))):n.ctx}function p(t,e,n,c){if(t[2]&&c){const o=t[2](c(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let c=0;c<n;c+=1)t[c]=e.dirty[c]|o[c];return t}return e.dirty|o}return e.dirty}function x(t,e,n,c,o,l){if(o){const s=d(e,n,c,l);t.p(s,o)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}const b="undefined"!=typeof window;let f=b?()=>window.performance.now():()=>Date.now(),X=b?t=>requestAnimationFrame(t):t;const y=new Set;function g(t){y.forEach((e=>{e.c(t)||(y.delete(e),e.f())})),0!==y.size&&X(g)}function h(t,e){t.appendChild(e)}function w(t,e,n){const c=H(t);if(!c.getElementById(e)){const t=C("style");t.id=e,t.textContent=n,G(c,t)}}function H(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function I(t){const e=C("style");return G(H(t),e),e.sheet}function G(t,e){h(t.head||t,e)}function $(t,e,n){t.insertBefore(e,n||null)}function R(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function M(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Z(){return L(" ")}function N(){return L("")}function j(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function B(t,e){t.value=null==e?"":e}function F(t,e,n,c){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,c?"important":"")}function J(t,e,{bubbles:n=!1,cancelable:c=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,c,e),o}class z{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=M(e.nodeName):this.e=C(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)$(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(R)}}const Y=new Map;let V,W=0;function k(t,e,n,c,o,l,s,i=0){const r=16.666/c;let a="{\\n";for(let t=0;t<=1;t+=r){const c=e+(n-e)*l(t);a+=100*t+\`%{\${s(c,1-c)}}\\n\`}const u=a+\`100% {\${s(n,1-n)}}\\n}\`,d=\`__svelte_\${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_\${i}\`,p=H(t),{stylesheet:x,rules:m}=Y.get(p)||function(t,e){const n={stylesheet:I(e),rules:{}};return Y.set(t,n),n}(p,t);m[d]||(m[d]=!0,x.insertRule(\`@keyframes \${d} \${u}\`,x.cssRules.length));const b=t.style.animation||"";return t.style.animation=\`\${b?\`\${b}, \`:""}\${d} \${c}ms linear \${o}ms 1 both\`,W+=1,d}function Q(t,e){const n=(t.style.animation||"").split(", "),c=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-c.length;o&&(t.style.animation=c.join(", "),W-=o,W||X((()=>{W||(Y.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),Y.clear())})))}function D(t){V=t}function S(){if(!V)throw new Error("Function called outside component initialization");return V}function E(t){S().$$.on_mount.push(t)}function T(t){S().$$.on_destroy.push(t)}function A(){const t=S();return(e,n,{cancelable:c=!1}={})=>{const o=t.$$.callbacks[e];if(o){const l=J(e,n,{cancelable:c});return o.slice().forEach((e=>{e.call(t,l)})),!l.defaultPrevented}return!0}}function U(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const P=[],O=[],_=[],K=[],q=Promise.resolve();let tt=!1;function et(){tt||(tt=!0,q.then(rt))}function nt(){return et(),q}function ct(t){_.push(t)}function ot(t){K.push(t)}const lt=new Set;let st,it=0;function rt(){const t=V;do{for(;it<P.length;){const t=P[it];it++,D(t),at(t.$$)}for(D(null),P.length=0,it=0;O.length;)O.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];lt.has(e)||(lt.add(e),e())}_.length=0}while(P.length);for(;K.length;)K.pop()();tt=!1,lt.clear(),D(t)}function at(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ct)}}function ut(t,e,n){t.dispatchEvent(J(\`\${e?"intro":"outro"}\${n}\`))}const dt=new Set;let pt;function xt(){pt={r:0,c:[],p:pt}}function mt(){pt.r||l(pt.c),pt=pt.p}function bt(t,e){t&&t.i&&(dt.delete(t),t.i(e))}function ft(t,e,n,c){if(t&&t.o){if(dt.has(t))return;dt.add(t),pt.c.push((()=>{dt.delete(t),c&&(n&&t.d(1),c())})),t.o(e)}}const Xt={duration:0};function yt(n,c,o,i){let r=c(n,o),a=i?0:1,u=null,d=null,p=null;function x(){p&&Q(n,p)}function m(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function b(c){const{delay:o=0,duration:s=300,easing:i=e,tick:b=t,css:h}=r||Xt,w={start:f()+o,b:c};c||(w.group=pt,pt.r+=1),u||d?d=w:(h&&(x(),p=k(n,a,c,s,o,i,h)),c&&b(0,1),u=m(w,s),ct((()=>ut(n,c,"start"))),function(t){let e;0===y.size&&X(g),new Promise((n=>{y.add(e={c:t,f:n})}))}((t=>{if(d&&t>d.start&&(u=m(d,s),d=null,ut(n,u.b,"start"),h&&(x(),p=k(n,a,u.b,u.duration,0,i,r.css))),u)if(t>=u.end)b(a=u.b,1-a),ut(n,u.b,"end"),d||(u.b?x():--u.group.r||l(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*i(e/u.duration),b(a,1-a)}return!(!u&&!d)})))}return{run(t){s(r)?(st||(st=Promise.resolve(),st.then((()=>{st=null}))),st).then((()=>{r=r(),b(t)})):b(t)},end(){x(),u=d=null}}}const gt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ht(t,e,n){const c=t.$$.props[e];void 0!==c&&(t.$$.bound[c]=n,n(t.$$.ctx[c]))}function wt(t){t&&t.c()}function Ht(t,e,n,o){const{fragment:i,on_mount:r,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,n),o||ct((()=>{const e=r.map(c).filter(s);a?a.push(...e):l(e),t.$$.on_mount=[]})),u.forEach(ct)}function It(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Gt(e,n,c,s,i,r,a,u=[-1]){const d=V;D(e);const p=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(p.root);let x=!1;if(p.ctx=c?c(e,n.props||{},((t,n,...c)=>{const o=c.length?c[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),x&&function(t,e){-1===t.$$.dirty[0]&&(P.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),x=!0,l(p.before_update),p.fragment=!!s&&s(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(R)}else p.fragment&&p.fragment.c();n.intro&&bt(e.$$.fragment),Ht(e,n.target,n.anchor,n.customElement),rt()}D(d)}function $t(t,e){document.dispatchEvent(J(t,Object.assign({version:"3.48.0"},e),{bubbles:!0}))}function Rt(t,e){$t("SvelteDOMInsert",{target:t,node:e}),h(t,e)}function vt(t,e,n){$t("SvelteDOMInsert",{target:t,node:e,anchor:n}),$(t,e,n)}function Ct(t){$t("SvelteDOMRemove",{node:t}),R(t)}function Mt(t,e,n,c,o,l){const s=!0===c?["capture"]:c?Array.from(Object.keys(c)):[];o&&s.push("preventDefault"),l&&s.push("stopPropagation"),$t("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:s});const i=function(t,e,n,c){return t.addEventListener(e,n,c),()=>t.removeEventListener(e,n,c)}(t,e,n,c);return()=>{$t("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:s}),i()}}function Lt(t,e,n){!function(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}(t,e,n),null==n?$t("SvelteDOMRemoveAttribute",{node:t,attribute:e}):$t("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function Zt(t,e){e=""+e,t.wholeText!==e&&($t("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function Nt(t){if(!("string"==typeof t||t&&"object"==typeof t&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw"function"==typeof Symbol&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function jt(t,e,n){for(const c of Object.keys(e))~n.indexOf(c)||console.warn(\`<\${t}> received an unexpected slot "\${c}".\`)}class Bt extends class{$destroy(){It(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}const{Object:Ft}=gt;function Jt(e){let c,o,s;const i={c:function(){c=C("span"),Lt(c,"contenteditable",""),Lt(c,"class","align-middle"),void 0===e[0]&&ct((()=>e[6].call(c))),n(c,"..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\Changable.svelte",28,0,726)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,n){vt(t,c,n),e[5](c),void 0!==e[0]&&(c.textContent=e[0]),o||(s=[Mt(c,"input",e[6]),Mt(c,"keydown",e[2],!1,!1,!1)],o=!0)},p:function(t,[e]){1&e&&t[0]!==c.textContent&&(c.textContent=t[0])},i:t,o:t,d:function(t){t&&Ct(c),e[5](null),o=!1,l(s)}};return $t("SvelteRegisterBlock",{block:i,id:Jt.name,type:"component",source:"",ctx:e}),i}function zt(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("Changable",c,[]);const l=A();let s,{item:i}=e,{options:r={singleLine:!0}}=e;const a=t=>({key:Object.keys(t)[0],value:t[Object.keys(t)[0]]});let{key:u,value:d}=a(i);const p=t=>{13===t.keyCode&&r.singleLine&&(t.preventDefault(),s.blur())},x=["item","options"];return Ft.keys(e).forEach((t=>{~x.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<Changable> was created with unknown prop '\${t}'\`)})),t.$$set=t=>{"item"in t&&n(3,i=t.item),"options"in t&&n(4,r=t.options)},t.$capture_state=()=>({createEventDispatcher:A,dispatch:l,item:i,options:r,inputEl:s,makeChangable:a,key:u,value:d,handleEnter:p}),t.$inject_state=t=>{"item"in t&&n(3,i=t.item),"options"in t&&n(4,r=t.options),"inputEl"in t&&n(1,s=t.inputEl),"key"in t&&n(9,u=t.key),"value"in t&&n(0,d=t.value)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{1&t.$$.dirty&&d&&l("change",{[u]:d})},[d,s,p,i,r,function(t){O[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},function(){d=this.textContent,n(0,d)}]}class Yt extends Bt{constructor(t){super(t),Gt(this,t,zt,Jt,i,{item:3,options:4}),$t("SvelteRegisterComponent",{component:this,tagName:"Changable",options:t,id:Jt.name});const{ctx:e}=this.$$,n=t.props||{};void 0!==e[3]||"item"in n||console.warn("<Changable> was created without expected prop 'item'")}get item(){throw new Error("<Changable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set item(t){throw new Error("<Changable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get options(){throw new Error("<Changable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set options(t){throw new Error("<Changable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function Vt(e){let c,o,s;const i={c:function(){c=C("span"),Lt(c,"contenteditable",""),Lt(c,"class","align-middle"),void 0===e[0]&&ct((()=>e[5].call(c))),n(c,"..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\Editable.svelte",18,0,446)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,n){vt(t,c,n),e[4](c),void 0!==e[0]&&(c.textContent=e[0]),o||(s=[Mt(c,"input",e[5]),Mt(c,"keydown",e[2],!1,!1,!1)],o=!0)},p:function(t,[e]){1&e&&t[0]!==c.textContent&&(c.textContent=t[0])},i:t,o:t,d:function(t){t&&Ct(c),e[4](null),o=!1,l(s)}};return $t("SvelteRegisterBlock",{block:i,id:Vt.name,type:"component",source:"",ctx:e}),i}function Wt(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("Editable",c,[]);const l=A();let s,{item:i}=e,{options:r={singleLine:!0}}=e;const a=t=>{13===t.keyCode&&r.singleLine&&(t.preventDefault(),s.blur())},u=["item","options"];return Object.keys(e).forEach((t=>{~u.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<Editable> was created with unknown prop '\${t}'\`)})),t.$$set=t=>{"item"in t&&n(0,i=t.item),"options"in t&&n(3,r=t.options)},t.$capture_state=()=>({createEventDispatcher:A,dispatch:l,item:i,options:r,inputEl:s,handleEnter:a}),t.$inject_state=t=>{"item"in t&&n(0,i=t.item),"options"in t&&n(3,r=t.options),"inputEl"in t&&n(1,s=t.inputEl)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[i,s,a,r,function(t){O[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},function(){i=this.textContent,n(0,i)}]}class kt extends Bt{constructor(t){super(t),Gt(this,t,Wt,Vt,i,{item:0,options:3}),$t("SvelteRegisterComponent",{component:this,tagName:"Editable",options:t,id:Vt.name});const{ctx:e}=this.$$,n=t.props||{};void 0!==e[0]||"item"in n||console.warn("<Editable> was created without expected prop 'item'")}get item(){throw new Error("<Editable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set item(t){throw new Error("<Editable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get options(){throw new Error("<Editable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set options(t){throw new Error("<Editable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Qt="..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\_ContactCard\\\\Icons.svelte";function Dt(e){let c,o,l,s,i,r,a,u,d,p,x,m,b,f,X,y,g,h,w,H,I,G,$,R,v,L,Z,N,j,B,J,z,Y,V,W,k,Q,D,S,E,T,A,U,P,O,_,K,q,tt,et,nt,ct,ot,lt,st,it,rt,at,ut,dt,pt,xt,mt,bt,ft,Xt,yt,gt,ht,wt,Ht,It,Gt,Mt,Zt,Nt,jt,Bt,Ft,Jt,zt;const Yt={c:function(){c=C("div"),o=M("svg"),l=M("symbol"),s=M("path"),i=M("symbol"),r=M("path"),a=M("path"),u=M("symbol"),d=M("path"),p=M("symbol"),x=M("path"),m=M("symbol"),b=M("line"),f=M("polyline"),X=M("symbol"),y=M("line"),g=M("polyline"),h=M("symbol"),w=M("line"),H=M("polyline"),I=M("symbol"),G=M("line"),$=M("polyline"),R=M("symbol"),v=M("polyline"),L=M("symbol"),Z=M("line"),N=M("line"),j=M("symbol"),B=M("path"),J=M("polyline"),z=M("line"),Y=M("symbol"),V=M("path"),W=M("polygon"),k=M("symbol"),Q=M("path"),D=M("path"),S=M("symbol"),E=M("line"),T=M("circle"),A=M("circle"),U=M("path"),P=M("symbol"),O=M("path"),_=M("polyline"),K=M("line"),q=M("symbol"),tt=M("path"),et=M("symbol"),nt=M("polyline"),ct=M("polyline"),ot=M("line"),lt=M("line"),st=M("symbol"),it=M("line"),rt=M("line"),at=M("line"),ut=M("symbol"),dt=M("g"),pt=M("path"),xt=M("path"),mt=M("path"),bt=M("path"),ft=M("symbol"),Xt=M("line"),yt=M("symbol"),gt=M("line"),ht=M("line"),wt=M("symbol"),Ht=M("path"),It=M("polyline"),Gt=M("polyline"),Mt=M("symbol"),Zt=M("path"),Nt=M("path"),jt=M("path"),Bt=M("symbol"),Ft=M("path"),Jt=M("symbol"),zt=M("path"),Lt(s,"d","M105 2a129 129 0 0 0 1 253c11 1 33 2 44 0 26-5 48-16 67-35a126 126 0 0 0 38-114A129 129 0 0 0 150 2c-10-2-35-2-45 0zm31 30c23 4 41 24 45 51l3 9 2 6c0 4-1 6-5 14l-7 15c-3 8-11 19-16 24s-5 7-2 13c5 10 13 16 35 23l16 5-3 4a117 117 0 0 1-151 0l-4-4 4-1 17-6c19-6 27-13 31-25l2-5-4-4c-5-6-12-16-15-23l-7-11c-4-6-7-14-7-18 0-3 3-9 5-9l1-3 2-11c6-26 26-43 50-45l8 1z"),n(s,Qt,4,3,173),Lt(l,"id","avatar"),Lt(l,"class","icon"),Lt(l,"width","32px"),Lt(l,"height","32px"),Lt(l,"viewBox","0 0 752 752"),n(l,Qt,3,2,86),Lt(r,"d","M412 414a111 111 0 0 1 90-77v-40h31c7 0 13-6 13-13v-15c0-5-2-9-7-11L355 153c-4-2-8-2-12 0l-65 37v-13c0-5-4-9-9-9h-29c-5 0-8 4-8 9v39l-74 42c-4 2-7 7-7 11v15c0 7 6 13 13 13h31v180c0 12 9 21 20 21h203c-13-25-15-56-6-84z"),n(r,Qt,10,3,661),Lt(a,"d","M592 412a81 81 0 0 0-109-36 82 82 0 0 0-36 109l61 108c5 9 18 9 23 0l61-108c12-22 12-49 0-73zm-73 72a35 35 0 1 1 0-70 35 35 0 1 1 0 70z"),n(a,Qt,13,3,905),Lt(i,"id","address"),Lt(i,"class","icon"),Lt(i,"width","32px"),Lt(i,"height","32px"),Lt(i,"viewBox","0 0 752 752"),n(i,Qt,9,2,573),Lt(d,"d","m582.1 312.4-197.5-128c-4.3-2.8-10-2.8-14.4 0l-199 128c-3.8 2.4-7.8 6.6-7.8 11v230.3c0 7.3 9.3 15.6 16.6 15.6h394.5c7.3 0 14.1-8.3 14.1-15.6V323.4c0-4.4-2.7-8.6-6.4-11zm-385 35.2 113 73.3-113 103zm131.8 88 41.2 26.8a13.2 13.2 0 0 0 14.3 0l41.1-26.8 115 104.7H214zM451.5 421l113-73.3V524zm-74.3-209.8 173.1 112.3-173 112.3-173.1-112.3zm0 200.6c20.7 0 40.9-7.3 56.7-20.6A13.2 13.2 0 0 0 417 371a62 62 0 1 1 22.2-47.5c0 6-4.9 10.9-10.8 10.9a11 11 0 0 1-10.9-10v-.9a40.3 40.3 0 1 0-12.3 29 37 37 0 0 0 60.3-29 88.4 88.4 0 1 0-88.3 88.4zm0-74.3a14 14 0 1 1 0-28 14 14 0 0 1 0 28z"),n(d,Qt,19,3,1166),Lt(u,"id","email"),Lt(u,"class","icon"),Lt(u,"width","32px"),Lt(u,"height","32px"),Lt(u,"viewBox","0 0 752 752"),n(u,Qt,18,2,1080),Lt(x,"fill-rule","evenodd"),Lt(x,"d","m587 561-3 3c-96 96-241-7-315-81S92 264 188 168l3-3 107 106-13 14a39 39 0 0 0-5 49 503 503 0 0 0 138 138c16 11 36 9 49-5l14-13zm-92-118 104 103c7-14 4-33-8-45l-51-51a39 39 0 0 0-45-7zM206 153l103 104c7-15 5-33-7-45l-51-51a39 39 0 0 0-45-8z"),n(x,Qt,25,3,1867),Lt(p,"id","phone"),Lt(p,"class","icon"),Lt(p,"width","32px"),Lt(p,"height","32px"),Lt(p,"viewBox","0 0 752 752"),n(p,Qt,24,2,1781),Lt(b,"x1","19"),Lt(b,"y1","12"),Lt(b,"x2","5"),Lt(b,"y2","12"),n(b,Qt,32,3,2234),Lt(f,"points","12 19 5 12 12 5"),n(f,Qt,33,3,2278),Lt(m,"id","arrow-left"),Lt(m,"class","icon"),Lt(m,"viewBox","0 0 24 24"),n(m,Qt,31,2,2172),Lt(y,"x1","5"),Lt(y,"y1","12"),Lt(y,"x2","19"),Lt(y,"y2","12"),n(y,Qt,37,3,2397),Lt(g,"points","12 5 19 12 12 19"),n(g,Qt,38,3,2441),Lt(X,"id","arrow-right"),Lt(X,"class","icon"),Lt(X,"viewBox","0 0 24 24"),n(X,Qt,36,2,2334),Lt(w,"x1","12"),Lt(w,"y1","19"),Lt(w,"x2","12"),Lt(w,"y2","5"),n(w,Qt,42,3,2558),Lt(H,"points","5 12 12 5 19 12"),n(H,Qt,43,3,2602),Lt(h,"id","arrow-up"),Lt(h,"class","icon"),Lt(h,"viewBox","0 0 24 24"),n(h,Qt,41,2,2498),Lt(G,"x1","12"),Lt(G,"y1","5"),Lt(G,"x2","12"),Lt(G,"y2","19"),n(G,Qt,47,3,2720),Lt($,"points","19 12 12 19 5 12"),n($,Qt,48,3,2764),Lt(I,"id","arrow-down"),Lt(I,"class","icon"),Lt(I,"viewBox","0 0 24 24"),n(I,Qt,46,2,2658),Lt(v,"points","20 6 9 17 4 12"),n(v,Qt,52,3,2878),Lt(R,"id","check"),Lt(R,"class","icon"),Lt(R,"viewBox","0 0 24 24"),n(R,Qt,51,2,2821),Lt(Z,"x1","18"),Lt(Z,"y1","6"),Lt(Z,"x2","6"),Lt(Z,"y2","18"),n(Z,Qt,56,3,2990),Lt(N,"x1","6"),Lt(N,"y1","6"),Lt(N,"x2","18"),Lt(N,"y2","18"),n(N,Qt,57,3,3033),Lt(L,"id","close"),Lt(L,"class","icon"),Lt(L,"viewBox","0 0 24 24"),n(L,Qt,55,2,2933),Lt(B,"d","M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15"),n(B,Qt,61,3,3150),Lt(J,"points","7 10 12 15 17 10"),n(J,Qt,62,3,3213),Lt(z,"x1","12"),Lt(z,"y1","15"),Lt(z,"x2","12"),Lt(z,"y2","3"),n(z,Qt,63,3,3256),Lt(j,"id","download"),Lt(j,"class","icon"),Lt(j,"viewBox","0 0 24 24"),n(j,Qt,60,2,3090),Lt(V,"d","M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"),n(V,Qt,67,3,3370),Lt(W,"points","18 2 22 6 12 16 8 16 8 12 18 2"),n(W,Qt,68,3,3451),Lt(Y,"id","edit"),Lt(Y,"class","icon"),Lt(Y,"viewBox","0 0 24 24"),n(Y,Qt,66,2,3314),Lt(Q,"fill-rule","evenodd"),Lt(Q,"clip-rule","evenodd"),Lt(Q,"d","M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2ZM0 12C0 5.3726 5.3726 0 12 0C18.6274 0 24 5.3726 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12Z"),Lt(Q,"fill","currentColor"),Lt(Q,"stroke","none"),n(Q,Qt,72,3,3579),Lt(D,"fill-rule","evenodd"),Lt(D,"clip-rule","evenodd"),Lt(D,"d","M9.59162 22.7357C9.49492 22.6109 9.49492 21.4986 9.59162 19.399C8.55572 19.4347 7.90122 19.3628 7.62812 19.1833C7.21852 18.9139 6.80842 18.0833 6.44457 17.4979C6.08072 16.9125 5.27312 16.8199 4.94702 16.6891C4.62091 16.5582 4.53905 16.0247 5.84562 16.4282C7.15222 16.8316 7.21592 17.9303 7.62812 18.1872C8.04032 18.4441 9.02572 18.3317 9.47242 18.1259C9.91907 17.9201 9.88622 17.1538 9.96587 16.8503C10.0666 16.5669 9.71162 16.5041 9.70382 16.5018C9.26777 16.5018 6.97697 16.0036 6.34772 13.7852C5.71852 11.5669 6.52907 10.117 6.96147 9.49369C7.24972 9.07814 7.22422 8.19254 6.88497 6.83679C8.11677 6.67939 9.06732 7.06709 9.73672 7.99999C9.73737 8.00534 10.6143 7.47854 12.0001 7.47854C13.386 7.47854 13.8777 7.90764 14.2571 7.99999C14.6365 8.09234 14.94 6.36699 17.2834 6.83679C16.7942 7.79839 16.3844 8.99999 16.6972 9.49369C17.0099 9.98739 18.2372 11.5573 17.4833 13.7852C16.9807 15.2706 15.9927 16.1761 14.5192 16.5018C14.3502 16.5557 14.2658 16.6427 14.2658 16.7627C14.2658 16.9427 14.4942 16.9624 14.8233 17.8058C15.0426 18.368 15.0585 19.9739 14.8708 22.6234C14.3953 22.7445 14.0254 22.8257 13.7611 22.8673C13.2924 22.9409 12.7835 22.9822 12.2834 22.9982C11.7834 23.0141 11.6098 23.0123 10.9185 22.948C10.4577 22.9051 10.0154 22.8343 9.59162 22.7357Z"),Lt(D,"fill","currentColor"),Lt(D,"stroke","none"),n(D,Qt,79,3,3920),Lt(k,"id","github"),Lt(k,"class","icon"),Lt(k,"viewBox","0 0 24 24"),n(k,Qt,71,2,3521),Lt(E,"x1","6"),Lt(E,"y1","3"),Lt(E,"x2","6"),Lt(E,"y2","15"),n(E,Qt,89,3,5375),Lt(T,"cx","18"),Lt(T,"cy","6"),Lt(T,"r","3"),n(T,Qt,90,3,5417),Lt(A,"cx","6"),Lt(A,"cy","18"),Lt(A,"r","3"),n(A,Qt,91,3,5453),Lt(U,"d","M18 9a9 9 0 0 1-9 9"),n(U,Qt,92,3,5489),Lt(S,"id","git-branch"),Lt(S,"class","icon"),Lt(S,"viewBox","0 0 24 24"),n(S,Qt,88,2,5313),Lt(O,"d","M15 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H15"),n(O,Qt,96,3,5598),Lt(_,"points","10 17 15 12 10 7"),n(_,Qt,97,3,5661),Lt(K,"x1","15"),Lt(K,"y1","12"),Lt(K,"x2","3"),Lt(K,"y2","12"),n(K,Qt,98,3,5704),Lt(P,"id","log-in"),Lt(P,"class","icon"),Lt(P,"viewBox","0 0 24 24"),n(P,Qt,95,2,5540),Lt(tt,"d","M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"),n(tt,Qt,102,3,5822),Lt(q,"id","maximize"),Lt(q,"class","icon"),Lt(q,"viewBox","0 0 24 24"),n(q,Qt,101,2,5762),Lt(nt,"points","15 3 21 3 21 9"),n(nt,Qt,108,3,6018),Lt(ct,"points","9 21 3 21 3 15"),n(ct,Qt,109,3,6059),Lt(ot,"x1","21"),Lt(ot,"y1","3"),Lt(ot,"x2","14"),Lt(ot,"y2","10"),n(ot,Qt,110,3,6100),Lt(lt,"x1","3"),Lt(lt,"y1","21"),Lt(lt,"x2","10"),Lt(lt,"y2","14"),n(lt,Qt,111,3,6144),Lt(et,"id","maximize-2"),Lt(et,"class","icon"),Lt(et,"viewBox","0 0 24 24"),n(et,Qt,107,2,5956),Lt(it,"x1","3"),Lt(it,"y1","12"),Lt(it,"x2","21"),Lt(it,"y2","12"),n(it,Qt,115,3,6258),Lt(rt,"x1","3"),Lt(rt,"y1","6"),Lt(rt,"x2","21"),Lt(rt,"y2","6"),n(rt,Qt,116,3,6302),Lt(at,"x1","3"),Lt(at,"y1","18"),Lt(at,"x2","21"),Lt(at,"y2","18"),n(at,Qt,117,3,6344),Lt(st,"id","menu"),Lt(st,"class","icon"),Lt(st,"viewBox","0 0 24 24"),n(st,Qt,114,2,6202),Lt(pt,"d","M16.5 19H11V15H18V11H22V19H19.5L18 20.5L16.5 19Z"),Lt(pt,"stroke","currentColor"),Lt(pt,"stroke-width","1.5"),Lt(pt,"stroke-linecap","round"),Lt(pt,"stroke-linejoin","round"),n(pt,Qt,122,4,6505),Lt(xt,"d","M2 3H18V15H8.5L6.5 17L4.5 15H2V3Z"),Lt(xt,"fill","currentColor"),Lt(xt,"stroke","currentColor"),Lt(xt,"stroke-width","1.5"),Lt(xt,"stroke-linecap","round"),Lt(xt,"stroke-linejoin","round"),n(xt,Qt,129,4,6695),Lt(mt,"d","M6 11H9"),Lt(mt,"stroke","white"),Lt(mt,"stroke-width","1.5"),Lt(mt,"stroke-linecap","round"),n(mt,Qt,137,4,6896),Lt(bt,"d","M6 7H12"),Lt(bt,"stroke","white"),Lt(bt,"stroke-width","1.5"),Lt(bt,"stroke-linecap","round"),n(bt,Qt,138,4,6979),Lt(dt,"transform","translate(0, 1)"),n(dt,Qt,121,3,6468),Lt(ut,"id","message-square"),Lt(ut,"class","icon"),Lt(ut,"viewBox","0 0 24 24"),n(ut,Qt,120,2,6402),Lt(Xt,"x1","5"),Lt(Xt,"y1","12"),Lt(Xt,"x2","19"),Lt(Xt,"y2","12"),n(Xt,Qt,143,3,7141),Lt(ft,"id","minus"),Lt(ft,"class","icon"),Lt(ft,"viewBox","0 0 24 24"),n(ft,Qt,142,2,7084),Lt(gt,"x1","12"),Lt(gt,"y1","5"),Lt(gt,"x2","12"),Lt(gt,"y2","19"),n(gt,Qt,147,3,7255),Lt(ht,"x1","5"),Lt(ht,"y1","12"),Lt(ht,"x2","19"),Lt(ht,"y2","12"),n(ht,Qt,148,3,7299),Lt(yt,"id","plus"),Lt(yt,"class","icon"),Lt(yt,"viewBox","0 0 24 24"),n(yt,Qt,146,2,7199),Lt(Ht,"d","M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"),n(Ht,Qt,152,3,7413),Lt(It,"points","17 21 17 13 7 13 7 21"),n(It,Qt,153,3,7494),Lt(Gt,"points","7 3 7 8 15 8"),n(Gt,Qt,154,3,7542),Lt(wt,"id","save"),Lt(wt,"class","icon"),Lt(wt,"viewBox","0 0 24 24"),n(wt,Qt,151,2,7357),Lt(Zt,"d","M9,7L6,7A2 2 0 0 0 6,17L9,17"),n(Zt,Qt,158,3,7651),Lt(Nt,"d","M15,7L18,7A2 2 0 0 1 18,17L15,17"),n(Nt,Qt,159,3,7697),Lt(jt,"d","M7,12L17,12"),n(jt,Qt,160,3,7747),Lt(Mt,"id","link"),Lt(Mt,"class","icon"),Lt(Mt,"viewBox","0 0 24 24"),n(Mt,Qt,157,2,7595),Lt(Ft,"d","M2,7 L12,17 L20,7"),n(Ft,Qt,164,3,7849),Lt(Bt,"id","chevron"),Lt(Bt,"class","icon"),Lt(Bt,"viewBox","0 0 24 24"),n(Bt,Qt,163,2,7790),Lt(zt,"fill","currentColor"),Lt(zt,"stroke","none"),Lt(zt,"d","M22 4.2h-5.6L15 1.6c-.1-.2-.4-.4-.7-.4H9.6c-.2 0-.5.2-.6.4L7.6 4.2H2c-.4 0-.8.4-.8.8s.4.8.8.8h1.8V22c0 .4.3.8.8.8h15c.4 0 .8-.3.8-.8V5.8H22c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM10.8 16.5c0 .4-.3.8-.8.8s-.8-.3-.8-.8V10c0-.4.3-.8.8-.8s.8.3.8.8v6.5zm4 0c0 .4-.3.8-.8.8s-.8-.3-.8-.8V10c0-.4.3-.8.8-.8s.8.3.8.8v6.5z"),n(zt,Qt,168,3,7956),Lt(Jt,"id","delete"),Lt(Jt,"class","icon"),Lt(Jt,"viewBox","0 0 24 24"),n(Jt,Qt,167,2,7898),n(o,Qt,2,1,77),F(c,"display","none"),n(c,Qt,0,0,0)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,e){vt(t,c,e),Rt(c,o),Rt(o,l),Rt(l,s),Rt(o,i),Rt(i,r),Rt(i,a),Rt(o,u),Rt(u,d),Rt(o,p),Rt(p,x),Rt(o,m),Rt(m,b),Rt(m,f),Rt(o,X),Rt(X,y),Rt(X,g),Rt(o,h),Rt(h,w),Rt(h,H),Rt(o,I),Rt(I,G),Rt(I,$),Rt(o,R),Rt(R,v),Rt(o,L),Rt(L,Z),Rt(L,N),Rt(o,j),Rt(j,B),Rt(j,J),Rt(j,z),Rt(o,Y),Rt(Y,V),Rt(Y,W),Rt(o,k),Rt(k,Q),Rt(k,D),Rt(o,S),Rt(S,E),Rt(S,T),Rt(S,A),Rt(S,U),Rt(o,P),Rt(P,O),Rt(P,_),Rt(P,K),Rt(o,q),Rt(q,tt),Rt(o,et),Rt(et,nt),Rt(et,ct),Rt(et,ot),Rt(et,lt),Rt(o,st),Rt(st,it),Rt(st,rt),Rt(st,at),Rt(o,ut),Rt(ut,dt),Rt(dt,pt),Rt(dt,xt),Rt(dt,mt),Rt(dt,bt),Rt(o,ft),Rt(ft,Xt),Rt(o,yt),Rt(yt,gt),Rt(yt,ht),Rt(o,wt),Rt(wt,Ht),Rt(wt,It),Rt(wt,Gt),Rt(o,Mt),Rt(Mt,Zt),Rt(Mt,Nt),Rt(Mt,jt),Rt(o,Bt),Rt(Bt,Ft),Rt(o,Jt),Rt(Jt,zt)},p:t,i:t,o:t,d:function(t){t&&Ct(c)}};return $t("SvelteRegisterBlock",{block:Yt,id:Dt.name,type:"component",source:"",ctx:e}),Yt}function St(t,e){let{$$slots:n={},$$scope:c}=e;jt("Icons",n,[]);const o=[];return Object.keys(e).forEach((t=>{~o.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<Icons> was created with unknown prop '\${t}'\`)})),[]}class Et extends Bt{constructor(t){super(t),Gt(this,t,St,Dt,i,{}),$t("SvelteRegisterComponent",{component:this,tagName:"Icons",options:t,id:Dt.name})}}const Tt="..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\_ContactCard\\\\Icon.svelte";function At(t){w(t,"svelte-ym28xb",".icon.svelte-ym28xb{position:relative;overflow:hidden;vertical-align:middle;-o-object-fit:contain;object-fit:contain;-webkit-transform-origin:center center;transform-origin:center center;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:currentColor}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5zdmVsdGUiLCJzb3VyY2VzIjpbIkljb24uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRzdmcgaWNvblxyXG5cdC0gaHR0cHM6Ly9naXRodWIuY29tL2phY29ibWlzY2hrYS9zdmVsdGUtZmVhdGhlci1pY29uXHJcblx0LSBodHRwczovL2ZlYXRoZXJpY29ucy5jb20vXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi0tPlxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBJY29ucyBmcm9tICcuL0ljb25zLnN2ZWx0ZSc7XHJcblx0ZXhwb3J0IGxldCBuYW1lO1xyXG5cdGV4cG9ydCBsZXQgc2l6ZSA9IDMyO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdmcgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gY2xhc3M9XCJpY29uIFwiPlxyXG5cdDx1c2UgeGxpbms6aHJlZj1cIiN7bmFtZX1cIiAvPlxyXG48L3N2Zz5cclxuXHJcbjxzbG90IC8+XHJcblxyXG48SWNvbnMgLz5cclxuXHJcbjxzdHlsZT5cclxuXHQuaWNvbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XHJcblx0XHRvYmplY3QtZml0OiBjb250YWluO1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuXHRcdHN0cm9rZTogY3VycmVudENvbG9yO1xyXG5cdFx0c3Ryb2tlLXdpZHRoOiAyO1xyXG5cdFx0c3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG5cdFx0c3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcclxuXHRcdGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkMsS0FBSyxjQUFDLENBQUMsQUFDTixRQUFRLENBQUUsUUFBUSxDQUNsQixRQUFRLENBQUUsTUFBTSxDQUNoQixjQUFjLENBQUUsTUFBTSxDQUN0QixhQUFhLENBQUUsT0FBTyxDQUN0QixVQUFVLENBQUUsT0FBTyxDQUNuQix3QkFBd0IsQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUN2QyxnQkFBZ0IsQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUMvQixNQUFNLENBQUUsWUFBWSxDQUNwQixZQUFZLENBQUUsQ0FBQyxDQUNmLGNBQWMsQ0FBRSxLQUFLLENBQ3JCLGVBQWUsQ0FBRSxLQUFLLENBQ3RCLElBQUksQ0FBRSxZQUFZLEFBQ25CLENBQUMifQ== */")}function Ut(t){let e,c,o,l,s,i,r;const a=t[3].default,d=u(a,t,t[2],null);i=new Et({$$inline:!0});const b={c:function(){e=M("svg"),c=M("use"),l=Z(),d&&d.c(),s=Z(),wt(i.$$.fragment),j(c,"xlink:href",o="#"+t[0]),n(c,Tt,14,1,359),Lt(e,"width",t[1]),Lt(e,"height",t[1]),Lt(e,"class","icon  svelte-ym28xb"),n(e,Tt,13,0,310)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,n){vt(t,e,n),Rt(e,c),vt(t,l,n),d&&d.m(t,n),vt(t,s,n),Ht(i,t,n),r=!0},p:function(t,[n]){(!r||1&n&&o!==(o="#"+t[0]))&&j(c,"xlink:href",o),(!r||2&n)&&Lt(e,"width",t[1]),(!r||2&n)&&Lt(e,"height",t[1]),d&&d.p&&(!r||4&n)&&x(d,a,t,t[2],r?p(a,t[2],n,null):m(t[2]),null)},i:function(t){r||(bt(d,t),bt(i.$$.fragment,t),r=!0)},o:function(t){ft(d,t),ft(i.$$.fragment,t),r=!1},d:function(t){t&&Ct(e),t&&Ct(l),d&&d.d(t),t&&Ct(s),It(i,t)}};return $t("SvelteRegisterBlock",{block:b,id:Ut.name,type:"component",source:"",ctx:t}),b}function Pt(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("Icon",c,["default"]);let{name:l}=e,{size:s=32}=e;const i=["name","size"];return Object.keys(e).forEach((t=>{~i.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<Icon> was created with unknown prop '\${t}'\`)})),t.$$set=t=>{"name"in t&&n(0,l=t.name),"size"in t&&n(1,s=t.size),"$$scope"in t&&n(2,o=t.$$scope)},t.$capture_state=()=>({Icons:Et,name:l,size:s}),t.$inject_state=t=>{"name"in t&&n(0,l=t.name),"size"in t&&n(1,s=t.size)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[l,s,o,c]}class Ot extends Bt{constructor(t){super(t),Gt(this,t,Pt,Ut,i,{name:0,size:1},At),$t("SvelteRegisterComponent",{component:this,tagName:"Icon",options:t,id:Ut.name});const{ctx:e}=this.$$,n=t.props||{};void 0!==e[0]||"name"in n||console.warn("<Icon> was created without expected prop 'name'")}get name(){throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(t){throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get size(){throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set size(t){throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const _t="..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\_ContactCard\\\\Content.svelte";function Kt(t){w(t,"svelte-1fjuav9","@import '../../../app.css';\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudC5zdmVsdGUiLCJzb3VyY2VzIjpbIkNvbnRlbnQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcblx0aW1wb3J0IEljb24gZnJvbSAnLi9JY29uLnN2ZWx0ZSc7XHJcblx0ZXhwb3J0IGxldCBuYW1lID0gbnVsbDtcclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmxleCBhbGlnbi1taWRkbGUgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWNvbnRhaW4gYmctbm8tcmVwZWF0IG0tMlwiPlxyXG5cdDxkaXYgY2xhc3M9XCJhbGlnbi1taWRkbGVcIj5cclxuXHRcdDxzbG90IG5hbWU9XCJmaXJzdFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dC1zbGF0ZS01MDBcIj5cclxuXHRcdFx0XHQ8SWNvbiB7bmFtZX0gLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L3Nsb3Q+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cImFsaWduLW1pZGRsZVwiPlxyXG5cdFx0PHNsb3QgLz5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48c3R5bGUgbGFuZz1cInBvc3Rjc3NcIj5cclxuXHRAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY3NzJztcclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQyxRQUFRLGtCQUFrQixDQUFDIn0= */")}const qt=t=>({}),te=t=>({});function ee(t){let e,c,o;c=new Ot({props:{name:t[0]},$$inline:!0});const l={c:function(){e=C("div"),wt(c.$$.fragment),Lt(e,"class","text-slate-500"),n(e,_t,8,3,241)},m:function(t,n){vt(t,e,n),Ht(c,e,null),o=!0},p:function(t,e){const n={};1&e&&(n.name=t[0]),c.$set(n)},i:function(t){o||(bt(c.$$.fragment,t),o=!0)},o:function(t){ft(c.$$.fragment,t),o=!1},d:function(t){t&&Ct(e),It(c)}};return $t("SvelteRegisterBlock",{block:l,id:ee.name,type:"fallback",source:"(8:21)      ",ctx:t}),l}function ne(t){let e,c,o,l,s;const i=t[2].first,r=u(i,t,t[1],te),a=r||ee(t),d=t[2].default,b=u(d,t,t[1],null),f={c:function(){e=C("div"),c=C("div"),a&&a.c(),o=Z(),l=C("div"),b&&b.c(),Lt(c,"class","align-middle"),n(c,_t,6,1,187),Lt(l,"class","align-middle"),n(l,_t,13,1,324),Lt(e,"class","flex align-middle items-center text-center justify-center bg-contain bg-no-repeat m-2"),n(e,_t,5,0,85)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,n){vt(t,e,n),Rt(e,c),a&&a.m(c,null),Rt(e,o),Rt(e,l),b&&b.m(l,null),s=!0},p:function(t,[e]){r?r.p&&(!s||2&e)&&x(r,i,t,t[1],s?p(i,t[1],e,qt):m(t[1]),te):a&&a.p&&(!s||1&e)&&a.p(t,s?e:-1),b&&b.p&&(!s||2&e)&&x(b,d,t,t[1],s?p(d,t[1],e,null):m(t[1]),null)},i:function(t){s||(bt(a,t),bt(b,t),s=!0)},o:function(t){ft(a,t),ft(b,t),s=!1},d:function(t){t&&Ct(e),a&&a.d(t),b&&b.d(t)}};return $t("SvelteRegisterBlock",{block:f,id:ne.name,type:"component",source:"",ctx:t}),f}function ce(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("Content",c,["first","default"]);let{name:l=null}=e;const s=["name"];return Object.keys(e).forEach((t=>{~s.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<Content> was created with unknown prop '\${t}'\`)})),t.$$set=t=>{"name"in t&&n(0,l=t.name),"$$scope"in t&&n(1,o=t.$$scope)},t.$capture_state=()=>({Icon:Ot,name:l}),t.$inject_state=t=>{"name"in t&&n(0,l=t.name)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[l,o,c]}class oe extends Bt{constructor(t){super(t),Gt(this,t,ce,ne,i,{name:0},Kt),$t("SvelteRegisterComponent",{component:this,tagName:"Content",options:t,id:ne.name})}get name(){throw new Error("<Content>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set name(t){throw new Error("<Content>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}function le(t){const e=t-1;return e*e*e+1}function se(t){return--t*t*t*t*t+1}function ie(t,{delay:e=0,duration:n=400,easing:c=le,x:o=0,y:l=0,opacity:s=0}={}){const i=getComputedStyle(t),r=+i.opacity,a="none"===i.transform?"":i.transform,u=r*(1-s);return{delay:e,duration:n,easing:c,css:(t,e)=>\`\\n\\t\\t\\ttransform: \${a} translate(\${(1-t)*o}px, \${(1-t)*l}px);\\n\\t\\t\\topacity: \${r-u*e}\`}}const re="..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\_ContactCard\\\\ContextMenu.svelte";function ae(t){w(t,"svelte-1fjuav9","@import '../../../app.css';\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGV4dE1lbnUuc3ZlbHRlIiwic291cmNlcyI6WyJDb250ZXh0TWVudS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuXHQvLyBpbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnZmxvd2JpdGUtc3ZlbHRlJztcclxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xyXG5cclxuXHRpbXBvcnQgeyBmbHkgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XHJcblx0aW1wb3J0IHsgcXVpbnRPdXQgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcclxuXHRpbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQuc3ZlbHRlJztcclxuXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcblx0bGV0IG9wZW4gPSBmYWxzZTtcclxuXHRsZXQgc3VibWl0dGluZztcclxuXHRsZXQgdGFyZ2V0UHVibGljS2V5O1xyXG5cclxuXHRmdW5jdGlvbiBjbGlja091dHNpZGUobm9kZSwgeyBlbmFibGVkOiBpbml0aWFsRW5hYmxlZCwgY2IgfSkge1xyXG5cdFx0Y29uc3QgaGFuZGxlT3V0c2lkZUNsaWNrID0gKHsgdGFyZ2V0IH0pID0+IHtcclxuXHRcdFx0aWYgKCFub2RlLmNvbnRhaW5zKHRhcmdldCkpIHtcclxuXHRcdFx0XHRjYigpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGZ1bmN0aW9uIHVwZGF0ZSh7IGVuYWJsZWQgfSkge1xyXG5cdFx0XHRpZiAoZW5hYmxlZCkge1xyXG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU91dHNpZGVDbGljayk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlT3V0c2lkZUNsaWNrKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHVwZGF0ZSh7IGVuYWJsZWQ6IGluaXRpYWxFbmFibGVkIH0pO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dXBkYXRlLFxyXG5cdFx0XHRkZXN0cm95KCkge1xyXG5cdFx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU91dHNpZGVDbGljayk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cdGZ1bmN0aW9uIG9wZW5NZW51KGUpIHtcclxuXHRcdG9wZW4gPSAhb3BlbjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUlucHV0KGUpIHtcclxuXHRcdGlmIChlLmNvZGUgIT09ICdFbnRlcicpIHJldHVybjtcclxuXHRcdHN1Ym1pdHRpbmcgPSB0cnVlO1xyXG5cdFx0ZGlzcGF0Y2goJ2NoYW5nZScsIHsgdGFyZ2V0UHVibGljS2V5IH0pO1xyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2XHJcblx0Y2xhc3M9XCJmbGV4IGZsZXgtY29sXCJcclxuXHR1c2U6Y2xpY2tPdXRzaWRlPXt7XHJcblx0XHRlbmFibGVkOiBvcGVuLFxyXG5cdFx0Y2I6ICgpID0+IHtcclxuXHRcdFx0b3BlbiA9IGZhbHNlO1xyXG5cdFx0XHRzdWJtaXR0aW5nID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fX1cclxuPlxyXG5cdDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwidy0xMCBoLTEwXCIgb246Y2xpY2s9e29wZW5NZW51fT5cclxuXHRcdFx0PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA3NTIgNzUyXCI+XHJcblx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdGQ9XCJNMzQ2LjkgMTUzLjRjLTYuMiAwLTEyLjEgNS4yLTEzLjcgMTAuMmwtMTIuNCA0My41YTE3NiAxNzYgMCAwIDAtMjUuMiAxMC40bC0zOS41LTIxLjljLTUuMy0zLTEyLjctMi0xNyAyLjRsLTQxIDQxLjFhMTQuNiAxNC42IDAgMCAwLTIuNCAxNi45bDIyIDM5LjZhMTcxIDE3MSAwIDAgMC0xMC40IDI1bC00My41IDEyLjVjLTYgMS43LTEwLjQgNy42LTEwLjQgMTMuOHY1OC4zYzAgNiA0LjUgMTIgMTAuNCAxMy42TDIwNyA0MzFjMi45IDguNyA2LjUgMTcgMTAuNSAyNS4xTDE5NS43IDQ5NmExNC43IDE0LjcgMCAwIDAgMi40IDE2LjlsNDEgNDEuMWExNC42IDE0LjYgMCAwIDAgMTcgMi40bDM5LjUtMjJjOC4xIDQuMiAxNi41IDcuNyAyNS4yIDEwLjZsMTIuNCA0My4zYTE0LjYgMTQuNiAwIDAgMCAxMy43IDEwLjRoNTguM2M2IDAgMTItNC41IDEzLjYtMTAuNGwxMi40LTQzLjNjOC43LTIuOSAxNy4xLTYuNCAyNS4yLTEwLjVsMzkuNSAyMS45YzUuMyAzIDEyLjcgMiAxNy0yLjRsNDEtNDEuMWExNC42IDE0LjYgMCAwIDAgMi40LTE3bC0yMi0zOS42YzQuMi04IDcuNy0xNi40IDEwLjYtMjUuMWw0My4zLTEyLjNhMTQuNiAxNC42IDAgMCAwIDEwLjQtMTMuNlYzNDdjMC02LjItNC40LTEyLjEtMTAuNC0xMy44bC00My41LTEyLjRjLTIuOC04LjctNi4zLTE3LTEwLjMtMjVsMjEuOS0zOS43YTE0LjcgMTQuNyAwIDAgMC0yLjQtMTYuOWwtNDEtNDEuMWExNC42IDE0LjYgMCAwIDAtMTctMi40bC0zOS41IDIxLjljLTgtNC4xLTE2LjUtNy41LTI1LjItMTAuNGwtMTIuNC00My41YTE0LjYgMTQuNiAwIDAgMC0xMy42LTEwLjJ6bTEwLjYgMjguNGgzN0w0MDYgMjIyYzEuMyA0LjcgNS4yIDguNyAxMCAxMCAxMS45IDMuMiAyMy4yIDggMzMuOCAxNCA0LjIgMi40IDkuNyAyLjUgMTQgLjJsMzYuNi0yMC41IDI2IDI2LTIwLjQgMzYuNmExNC41IDE0LjUgMCAwIDAgMCAxNGM2LjEgMTAuNiAxMSAyMiAxNC4zIDM0YTE0IDE0IDAgMCAwIDkuNyA5LjlsNDAuMyAxMS40djM2LjlMNTMwIDQwNmExNC41IDE0LjUgMCAwIDAtOS43IDkuOCAxNDkgMTQ5IDAgMCAxLTE0LjMgMzQgMTQuNSAxNC41IDAgMCAwIDAgMTRsMjAuNSAzNi42LTI2IDI2LTM2LjgtMjAuNWExNC41IDE0LjUgMCAwIDAtMTMuOS4xYy0xMC42IDYtMjIgMTEtMzMuOSAxNC4yYTE0LjUgMTQuNSAwIDAgMC05LjkgOS44bC0xMS40IDQwLjNoLTM3TDM0Ni4yIDUzMGExNC41IDE0LjUgMCAwIDAtOS45LTkuOGMtMTItMy4zLTIzLjMtOC4xLTMzLjktMTQuMmExNC41IDE0LjUgMCAwIDAtMTMuOS0uMWwtMzYuNyAyMC40LTI2LTI1LjkgMjAuNC0zNi43YzIuMy00LjIgMi4zLTkuNyAwLTEzLjktNi0xMC42LTExLTIyLTE0LjItMzRhMTQuNSAxNC41IDAgMCAwLTkuOC05LjhsLTQwLjMtMTEuNXYtMzYuOWw0MC4zLTExLjRjNC42LTEuMyA4LjUtNS4yIDkuOC0xMGExNDkgMTQ5IDAgMCAxIDE0LjItMzRjMi4zLTQuMiAyLjMtOS42IDAtMTMuOWwtMjAuNS0zNi41IDI2LTI2IDM2LjggMjAuNGM0LjIgMi4zIDkuNyAyLjIgMTQtLjJhMTQ2IDE0NiAwIDAgMSAzMy44LTE0IDE1IDE1IDAgMCAwIDEwLTEwem0xOC41IDkwYy01Ny40IDAtMTA0LjIgNDYuOC0xMDQuMiAxMDQuMlMzMTguNiA0ODAuMiAzNzYgNDgwLjJjNTcuNCAwIDEwNC4yLTQ2LjggMTA0LjItMTA0LjJTNDMzLjQgMjcxLjggMzc2IDI3MS44em0wIDI4LjRjNDIgMCA3NS44IDMzLjggNzUuOCA3NS44UzQxOCA0NTEuOCAzNzYgNDUxLjggMzAwLjIgNDE4IDMwMC4yIDM3NnMzMy44LTc1LjggNzUuOC03NS44elwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9zdmc+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHR7I2lmIG9wZW59XHJcblx0XHQ8ZGl2XHJcblx0XHRcdHRyYW5zaXRpb246Zmx5PXt7IGRlbGF5OiAyNTAsIGR1cmF0aW9uOiAzMDAsIHg6IDAsIHk6IC0xMDAsIG9wYWNpdHk6IDAuMSwgZWFzaW5nOiBxdWludE91dCB9fVxyXG5cdFx0XHRjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1lbmQgei01MCBiZy1zbGF0ZS01MCBib3JkZXIgZHJvcC1zaGFkb3ctbGcgcC00IG14LTQgcm91bmRlZC1zbVwiXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnQgYm9yZGVyLXNsYXRlLTMwMFwiPlxyXG5cdFx0XHRcdHsjaWYgIXN1Ym1pdHRpbmd9XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRleHQtc21cIj5QYXN0ZSB0aGUgPGI+UHVibGljIEtleTwvYj4geW91IHdhbnQgdG8gZ3JhbnQgYWNjZXNzPC9zcGFuPlxyXG5cdFx0XHRcdFx0PENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cImZpcnN0XCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0ZXh0LXNtIG14LTEgdGV4dC1sZ1wiPkdyYW50IEFjZXNzOjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zdmVsdGU6ZnJhZ21lbnQ+XHJcblx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlRoZWlyIFB1YmxpYyBLZXlcIlxyXG5cdFx0XHRcdFx0XHRcdGJpbmQ6dmFsdWU9e3RhcmdldFB1YmxpY0tleX1cclxuXHRcdFx0XHRcdFx0XHRvbjprZXlkb3duPXtoYW5kbGVJbnB1dH1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvQ29udGVudD5cclxuXHRcdFx0XHRcdDxDb250ZW50PlxyXG5cdFx0XHRcdFx0XHQ8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJmaXJzdFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0cnVlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGV4dC1zbSBteC0xXCI+QWRkIDxiPkNvbnRhY3Q8L2I+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L3N2ZWx0ZTpmcmFnbWVudD5cclxuXHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJkb3VnYW5kZXJzb240NDRcIiBvbjprZXlkb3duPXtoYW5kbGVJbnB1dH0gLz5cclxuXHRcdFx0XHRcdDwvQ29udGVudD5cclxuXHRcdFx0XHR7OmVsc2V9XHJcblx0XHRcdFx0XHQ8IS0tIHtTcGlubmVyfSAtLT5SZXF1ZXN0aW5nIGFjY2Vzcy4uLlxyXG5cdFx0XHRcdHsvaWZ9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0ey9pZn1cclxuPC9kaXY+XHJcblxyXG48c3R5bGUgbGFuZz1cInBvc3Rjc3NcIj5cclxuXHRAaW1wb3J0ICcuLi8uLi8uLi9hcHAuY3NzJztcclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHQyxRQUFRLGtCQUFrQixDQUFDIn0= */")}function ue(t){let e,c,o,l,s,i;const r=[pe,de],a=[];function u(t,e){return t[1]?1:0}o=u(t),l=a[o]=r[o](t);const d={c:function(){e=C("div"),c=C("div"),l.c(),Lt(c,"class","text-left border-slate-300"),n(c,re,72,3,3411),Lt(e,"class","flex flex-row justify-end z-50 bg-slate-50 border drop-shadow-lg p-4 mx-4 rounded-sm"),n(e,re,68,2,3202)},m:function(t,n){vt(t,e,n),Rt(e,c),a[o].m(c,null),i=!0},p:function(e,n){let s=o;o=u(t=e),o===s?a[o].p(t,n):(xt(),ft(a[s],1,1,(()=>{a[s]=null})),mt(),l=a[o],l?l.p(t,n):(l=a[o]=r[o](t),l.c()),bt(l,1),l.m(c,null))},i:function(t){i||(bt(l),ct((()=>{s||(s=yt(e,ie,{delay:250,duration:300,x:0,y:-100,opacity:.1,easing:se},!0)),s.run(1)})),i=!0)},o:function(t){ft(l),s||(s=yt(e,ie,{delay:250,duration:300,x:0,y:-100,opacity:.1,easing:se},!1)),s.run(0),i=!1},d:function(t){t&&Ct(e),a[o].d(),t&&s&&s.end()}};return $t("SvelteRegisterBlock",{block:d,id:ue.name,type:"if",source:"(68:1) {#if open}",ctx:t}),d}function de(e){let n;const c={c:function(){n=L("Requesting access...")},m:function(t,e){vt(t,n,e)},p:t,i:t,o:t,d:function(t){t&&Ct(n)}};return $t("SvelteRegisterBlock",{block:c,id:de.name,type:"else",source:"(94:4) {:else}",ctx:e}),c}function pe(t){let e,c,o,l,s,i,r,a,u;i=new oe({props:{$$slots:{first:[me],default:[xe]},$$scope:{ctx:t}},$$inline:!0}),a=new oe({props:{$$slots:{first:[fe],default:[be]},$$scope:{ctx:t}},$$inline:!0});const d={c:function(){e=C("span"),c=L("Paste the "),o=C("b"),o.textContent="Public Key",l=L(" you want to grant access"),s=Z(),wt(i.$$.fragment),r=Z(),wt(a.$$.fragment),n(o,re,74,37,3513),Lt(e,"class","text-sm"),n(e,re,74,5,3481)},m:function(t,n){vt(t,e,n),Rt(e,c),Rt(e,o),Rt(e,l),vt(t,s,n),Ht(i,t,n),vt(t,r,n),Ht(a,t,n),u=!0},p:function(t,e){const n={};260&e&&(n.$$scope={dirty:e,ctx:t}),i.$set(n);const c={};256&e&&(c.$$scope={dirty:e,ctx:t}),a.$set(c)},i:function(t){u||(bt(i.$$.fragment,t),bt(a.$$.fragment,t),u=!0)},o:function(t){ft(i.$$.fragment,t),ft(a.$$.fragment,t),u=!1},d:function(t){t&&Ct(e),t&&Ct(s),It(i,t),t&&Ct(r),It(a,t)}};return $t("SvelteRegisterBlock",{block:d,id:pe.name,type:"if",source:"(74:4) {#if !submitting}",ctx:t}),d}function xe(t){let e,c,o;const s={c:function(){e=C("input"),Lt(e,"type","text"),Lt(e,"placeholder","Their Public Key"),n(e,re,79,6,3713)},m:function(n,l){vt(n,e,l),B(e,t[2]),c||(o=[Mt(e,"input",t[5]),Mt(e,"keydown",t[4],!1,!1,!1)],c=!0)},p:function(t,n){4&n&&e.value!==t[2]&&B(e,t[2])},d:function(t){t&&Ct(e),c=!1,l(o)}};return $t("SvelteRegisterBlock",{block:s,id:xe.name,type:"slot",source:"(76:5) <Content>",ctx:t}),s}function me(e){let c;const o={c:function(){c=C("span"),c.textContent="Grant Acess:",Lt(c,"class","text-sm mx-1 text-lg"),n(c,re,77,7,3625)},m:function(t,e){vt(t,c,e)},p:t,d:function(t){t&&Ct(c)}};return $t("SvelteRegisterBlock",{block:o,id:me.name,type:"slot",source:'(77:6) <svelte:fragment slot=\\\\"first\\\\">',ctx:e}),o}function be(e){let c,o,l;const s={c:function(){c=C("input"),Lt(c,"type","text"),Lt(c,"placeholder","douganderson444"),n(c,re,91,6,4073)},m:function(t,n){vt(t,c,n),o||(l=Mt(c,"keydown",e[4],!1,!1,!1),o=!0)},p:t,d:function(t){t&&Ct(c),o=!1,l()}};return $t("SvelteRegisterBlock",{block:s,id:be.name,type:"slot",source:"(87:5) <Content>",ctx:e}),s}function fe(e){let c,o,l,s,i;const r={c:function(){c=C("input"),o=Z(),l=C("span"),s=L("Add "),i=C("b"),i.textContent="Contact",Lt(c,"type","checkbox"),c.checked=!0,n(c,re,88,7,3938),n(i,re,89,38,4018),Lt(l,"class","text-sm mx-1"),n(l,re,89,7,3987)},m:function(t,e){vt(t,c,e),vt(t,o,e),vt(t,l,e),Rt(l,s),Rt(l,i)},p:t,d:function(t){t&&Ct(c),t&&Ct(o),t&&Ct(l)}};return $t("SvelteRegisterBlock",{block:r,id:fe.name,type:"slot",source:'(88:6) <svelte:fragment slot=\\\\"first\\\\">',ctx:e}),r}function Xe(e){let c,o,i,r,a,u,d,p,x,m,b=e[0]&&ue(e);const f={c:function(){c=C("div"),o=C("div"),i=C("div"),r=M("svg"),a=M("path"),u=Z(),b&&b.c(),Lt(a,"d","M346.9 153.4c-6.2 0-12.1 5.2-13.7 10.2l-12.4 43.5a176 176 0 0 0-25.2 10.4l-39.5-21.9c-5.3-3-12.7-2-17 2.4l-41 41.1a14.6 14.6 0 0 0-2.4 16.9l22 39.6a171 171 0 0 0-10.4 25l-43.5 12.5c-6 1.7-10.4 7.6-10.4 13.8v58.3c0 6 4.5 12 10.4 13.6L207 431c2.9 8.7 6.5 17 10.5 25.1L195.7 496a14.7 14.7 0 0 0 2.4 16.9l41 41.1a14.6 14.6 0 0 0 17 2.4l39.5-22c8.1 4.2 16.5 7.7 25.2 10.6l12.4 43.3a14.6 14.6 0 0 0 13.7 10.4h58.3c6 0 12-4.5 13.6-10.4l12.4-43.3c8.7-2.9 17.1-6.4 25.2-10.5l39.5 21.9c5.3 3 12.7 2 17-2.4l41-41.1a14.6 14.6 0 0 0 2.4-17l-22-39.6c4.2-8 7.7-16.4 10.6-25.1l43.3-12.3a14.6 14.6 0 0 0 10.4-13.6V347c0-6.2-4.4-12.1-10.4-13.8l-43.5-12.4c-2.8-8.7-6.3-17-10.3-25l21.9-39.7a14.7 14.7 0 0 0-2.4-16.9l-41-41.1a14.6 14.6 0 0 0-17-2.4l-39.5 21.9c-8-4.1-16.5-7.5-25.2-10.4l-12.4-43.5a14.6 14.6 0 0 0-13.6-10.2zm10.6 28.4h37L406 222c1.3 4.7 5.2 8.7 10 10 11.9 3.2 23.2 8 33.8 14 4.2 2.4 9.7 2.5 14 .2l36.6-20.5 26 26-20.4 36.6a14.5 14.5 0 0 0 0 14c6.1 10.6 11 22 14.3 34a14 14 0 0 0 9.7 9.9l40.3 11.4v36.9L530 406a14.5 14.5 0 0 0-9.7 9.8 149 149 0 0 1-14.3 34 14.5 14.5 0 0 0 0 14l20.5 36.6-26 26-36.8-20.5a14.5 14.5 0 0 0-13.9.1c-10.6 6-22 11-33.9 14.2a14.5 14.5 0 0 0-9.9 9.8l-11.4 40.3h-37L346.2 530a14.5 14.5 0 0 0-9.9-9.8c-12-3.3-23.3-8.1-33.9-14.2a14.5 14.5 0 0 0-13.9-.1l-36.7 20.4-26-25.9 20.4-36.7c2.3-4.2 2.3-9.7 0-13.9-6-10.6-11-22-14.2-34a14.5 14.5 0 0 0-9.8-9.8l-40.3-11.5v-36.9l40.3-11.4c4.6-1.3 8.5-5.2 9.8-10a149 149 0 0 1 14.2-34c2.3-4.2 2.3-9.6 0-13.9l-20.5-36.5 26-26 36.8 20.4c4.2 2.3 9.7 2.2 14-.2a146 146 0 0 1 33.8-14 15 15 0 0 0 10-10zm18.5 90c-57.4 0-104.2 46.8-104.2 104.2S318.6 480.2 376 480.2c57.4 0 104.2-46.8 104.2-104.2S433.4 271.8 376 271.8zm0 28.4c42 0 75.8 33.8 75.8 75.8S418 451.8 376 451.8 300.2 418 300.2 376s33.8-75.8 75.8-75.8z"),n(a,re,61,4,1374),Lt(r,"xmlns","http://www.w3.org/2000/svg"),Lt(r,"viewBox","0 0 752 752"),n(r,re,60,3,1306),Lt(i,"class","w-10 h-10"),n(i,re,59,2,1258),Lt(o,"class","flex flex-row justify-end"),n(o,re,58,1,1215),Lt(c,"class","flex flex-col"),n(c,re,48,0,1074)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(n,l){var f;vt(n,c,l),Rt(c,o),Rt(o,i),Rt(i,r),Rt(r,a),Rt(c,u),b&&b.m(c,null),p=!0,x||(m=[Mt(i,"click",e[3],!1,!1,!1),(f=d=ye.call(null,c,{enabled:e[0],cb:e[6]}),f&&s(f.destroy)?f.destroy:t)],x=!0)},p:function(t,[e]){t[0]?b?(b.p(t,e),1&e&&bt(b,1)):(b=ue(t),b.c(),bt(b,1),b.m(c,null)):b&&(xt(),ft(b,1,1,(()=>{b=null})),mt()),d&&s(d.update)&&3&e&&d.update.call(null,{enabled:t[0],cb:t[6]})},i:function(t){p||(bt(b),p=!0)},o:function(t){ft(b),p=!1},d:function(t){t&&Ct(c),b&&b.d(),x=!1,l(m)}};return $t("SvelteRegisterBlock",{block:f,id:Xe.name,type:"component",source:"",ctx:e}),f}function ye(t,{enabled:e,cb:n}){const c=({target:e})=>{t.contains(e)||n()};function o({enabled:t}){t?window.addEventListener("click",c):window.removeEventListener("click",c)}return o({enabled:e}),{update:o,destroy(){window.removeEventListener("click",c)}}}function ge(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("ContextMenu",c,[]);const l=A();let s,i,r=!1;function a(t){n(0,r=!r)}function u(t){"Enter"===t.code&&(n(1,s=!0),l("change",{targetPublicKey:i}))}const d=[];Object.keys(e).forEach((t=>{~d.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<ContextMenu> was created with unknown prop '\${t}'\`)}));return t.$capture_state=()=>({createEventDispatcher:A,fly:ie,quintOut:se,Content:oe,dispatch:l,open:r,submitting:s,targetPublicKey:i,clickOutside:ye,openMenu:a,handleInput:u}),t.$inject_state=t=>{"open"in t&&n(0,r=t.open),"submitting"in t&&n(1,s=t.submitting),"targetPublicKey"in t&&n(2,i=t.targetPublicKey)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[r,s,i,a,u,function(){i=this.value,n(2,i)},()=>{n(0,r=!1),n(1,s=!1)}]}class he extends Bt{constructor(t){super(t),Gt(this,t,ge,Xe,i,{},ae),$t("SvelteRegisterComponent",{component:this,tagName:"ContextMenu",options:t,id:Xe.name})}}const{Object:we}=gt,He="..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\ContactCard.svelte";function Ie(t){w(t,"svelte-y8lr1t","@import '../../app.css';\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdENhcmQuc3ZlbHRlIiwic291cmNlcyI6WyJDb250YWN0Q2FyZC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBhY2Nlc3NvcnMgbmVjZXNzYXJ5IHRvIHBhc3MgZGVmYXVsdCBwcm9wIHZhbHVlcyB1cCB0byBwYXJlbnQgYnkgZ2F0ZXdheSAgLS0+XHJcbjxzdmVsdGU6b3B0aW9ucyBhY2Nlc3NvcnMgLz5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IENoYW5nYWJsZSBmcm9tICcuL0NoYW5nYWJsZS5zdmVsdGUnO1xyXG5cdGltcG9ydCBFZGl0YWJsZSBmcm9tICcuL0VkaXRhYmxlLnN2ZWx0ZSc7XHJcblx0aW1wb3J0IENvbnRlbnQgZnJvbSAnLi9fQ29udGFjdENhcmQvQ29udGVudC5zdmVsdGUnO1xyXG5cdGltcG9ydCBDb250ZXh0TWVudSBmcm9tICcuL19Db250YWN0Q2FyZC9Db250ZXh0TWVudS5zdmVsdGUnO1xyXG5cdC8vIGltcG9ydCAnLi4vLi4vYXBwLmNzcyc7XHJcblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcclxuXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcblx0bGV0IGRlZmF1bHRQcm9maWxlID0ge1xyXG5cdFx0Zmlyc3ROYW1lOiAnRmlyc3ROYW1lJyxcclxuXHRcdGxhc3ROYW1lOiAnTGFzdG5hbWUnLFxyXG5cdFx0YWRkcmVzczogJ1Vua25vd24gYWRkcmVzcycsXHJcblx0XHRlbWFpbDogJ1Vua25vd24gZW1haWwnLFxyXG5cdFx0cGhvbmU6ICdObyBwaG9uZScsXHJcblx0XHRub3RlczogJ05vIG5vdGVzJyxcclxuXHRcdGF2YXRhcjogbnVsbFxyXG5cdH07XHJcblxyXG5cdC8vIHlvdSBjYW4gdXNlIGVpdGhlciBwcm9wcyBvciBzbG90cyB3aXRoIHRoaXMgY29tcG9uZW50XHJcblx0ZXhwb3J0IGxldCBwcm9maWxlID0gZGVmYXVsdFByb2ZpbGU7XHJcblxyXG5cdC8vIHRoaXMgZmlyZXMgd2hlbiB0b2RvcyBjaGFuZ2U7IGxldCdzIGVtaXQgYW4gZXZlbnQgdG8gdXBkYXRlIGFueSBsaXN0ZW5lcnMgY29uc3VtaW5nIHRoaXMgY29tcG9uZW50XHJcblx0JDogaWYgKHByb2ZpbGUpIHtcclxuXHRcdHByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UHJvZmlsZSwgcHJvZmlsZSk7XHJcblx0XHRkaXNwYXRjaCgnY2hhbmdlJywgeyBwcm9maWxlIH0pO1xyXG5cdH1cclxuXHJcblx0bGV0IGZpbGVpbnB1dDtcclxuXHJcblx0Y29uc3Qgb25GaWxlU2VsZWN0ZWQgPSAoZSkgPT4ge1xyXG5cdFx0bGV0IGltYWdlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblx0XHRsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlKTtcclxuXHRcdHJlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xyXG5cdFx0XHRwcm9maWxlLmF2YXRhciA9IGUudGFyZ2V0LnJlc3VsdDtcclxuXHRcdH07XHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2XHJcblx0Y2xhc3M9XCJtLWF1dG8gZmlsbC1zbGF0ZS01MDAgbXktMiB3LTk2IG1heC13LWxnIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYmctc2xhdGUtMTAwIHNoYWRvdy14bFwiXHJcbj5cclxuXHQ8ZGl2IGNsYXNzPVwiaC0yNCBiZy13aGl0ZVwiPlxyXG5cdFx0PENvbnRleHRNZW51IG9uOmNoYW5nZSAvPlxyXG5cdDwvZGl2PlxyXG5cdDxpbnB1dFxyXG5cdFx0c3R5bGU9XCJkaXNwbGF5Om5vbmVcIlxyXG5cdFx0dHlwZT1cImZpbGVcIlxyXG5cdFx0YWNjZXB0PVwiLmpwZywgLmpwZWcsIC5wbmdcIlxyXG5cdFx0b246Y2hhbmdlPXsoZSkgPT4gb25GaWxlU2VsZWN0ZWQoZSl9XHJcblx0XHRiaW5kOnRoaXM9e2ZpbGVpbnB1dH1cclxuXHQvPlxyXG5cdDxkaXZcclxuXHRcdGNsYXNzPVwiLW10LTIwIGgtMzIgZmxleCBqdXN0aWZ5LWNlbnRlclwiXHJcblx0XHRvbjpjbGljaz17KCkgPT4ge1xyXG5cdFx0XHRmaWxlaW5wdXQuY2xpY2soKTtcclxuXHRcdH19XHJcblx0PlxyXG5cdFx0eyNpZiAhcHJvZmlsZS5hdmF0YXJ9XHJcblx0XHRcdDxzdmdcclxuXHRcdFx0XHRjbGFzcz1cIiByb3VuZGVkLWZ1bGwgYmctd2hpdGUgc2hhZG93LXhsIGRyb3Atc2hhZG93LXhsXCJcclxuXHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuXHRcdFx0XHR2ZXJzaW9uPVwiMS4wXCJcclxuXHRcdFx0XHR2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PHBhdGhcclxuXHRcdFx0XHRcdGQ9XCJNMTA1IDJhMTI5IDEyOSAwIDAgMCAxIDI1M2MxMSAxIDMzIDIgNDQgMCAyNi01IDQ4LTE2IDY3LTM1YTEyNiAxMjYgMCAwIDAgMzgtMTE0QTEyOSAxMjkgMCAwIDAgMTUwIDJjLTEwLTItMzUtMi00NSAwem0zMSAzMGMyMyA0IDQxIDI0IDQ1IDUxbDMgOSAyIDZjMCA0LTEgNi01IDE0bC03IDE1Yy0zIDgtMTEgMTktMTYgMjRzLTUgNy0yIDEzYzUgMTAgMTMgMTYgMzUgMjNsMTYgNS0zIDRhMTE3IDExNyAwIDAgMS0xNTEgMGwtNC00IDQtMSAxNy02YzE5LTYgMjctMTMgMzEtMjVsMi01LTQtNGMtNS02LTEyLTE2LTE1LTIzbC03LTExYy00LTYtNy0xNC03LTE4IDAtMyAzLTkgNS05bDEtMyAyLTExYzYtMjYgMjYtNDMgNTAtNDVsOCAxelwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9zdmc+XHJcblx0XHR7OmVsc2V9XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIG92ZXJmbG93LWhpZGRlbiBmbGV4LW5vbmUgbXgtYXV0byB3LTMyIGgtMzIgZHJvcC1zaGFkb3cteGxcIj5cclxuXHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRjbGFzcz1cInJvdW5kZWQtZnVsbCBiZy13aGl0ZSBhYnNvbHV0ZSBtYXgtdy1ub25lIG9iamVjdC1jb3ZlclwiXHJcblx0XHRcdFx0XHRzcmM9e3Byb2ZpbGUuYXZhdGFyfVxyXG5cdFx0XHRcdFx0YWx0PVwiZFwiXHJcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCUgMHB4O1wiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHR7L2lmfVxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJtdC01IG1iLTcgcHgtMyB0ZXh0LWNlbnRlciB0ZXh0LXhsXCI+XHJcblx0XHQ8c2xvdCBuYW1lPVwibmFtZVwiPlxyXG5cdFx0XHQ8RWRpdGFibGUgYmluZDppdGVtPXtwcm9maWxlLmZpcnN0TmFtZX0gLz5cclxuXHRcdFx0PEVkaXRhYmxlIGJpbmQ6aXRlbT17cHJvZmlsZS5sYXN0TmFtZX0gLz5cclxuXHRcdDwvc2xvdD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PCEtLSBpZiB0aGVyZSBpcyBubyBzbG90IGNvbnRlbnQsIG1ha2UgdGhlIGNvbnRlbnQgY2hhbmdhYmxlICAtLT5cclxuXHQ8IS0tIGlmIHRoZXJlIElTIHNsb3QgY29udGVudCwgaXQgb3ZlcndyaXRlcyB0aGUgY2hhbmdhYmxlIGFiaWxpdHkgIC0tPlxyXG5cclxuXHQ8Q29udGVudCBuYW1lPXsnYWRkcmVzcyd9PlxyXG5cdFx0PHNsb3QgbmFtZT1cImFkZHJlc3NcIj5cclxuXHRcdFx0PEVkaXRhYmxlIGJpbmQ6aXRlbT17cHJvZmlsZS5hZGRyZXNzfSAvPlxyXG5cdFx0PC9zbG90PlxyXG5cdDwvQ29udGVudD5cclxuXHJcblx0PENvbnRlbnQgbmFtZT17J2VtYWlsJ30+XHJcblx0XHQ8c2xvdCBuYW1lPVwiZW1haWxcIj5cclxuXHRcdFx0PEVkaXRhYmxlIGJpbmQ6aXRlbT17cHJvZmlsZS5lbWFpbH0gLz5cclxuXHRcdDwvc2xvdD5cclxuXHQ8L0NvbnRlbnQ+XHJcblxyXG5cdDxDb250ZW50IG5hbWU9eydwaG9uZSd9PlxyXG5cdFx0PHNsb3QgbmFtZT1cInBob25lXCI+XHJcblx0XHRcdDxFZGl0YWJsZSBiaW5kOml0ZW09e3Byb2ZpbGUucGhvbmV9IC8+XHJcblx0XHQ8L3Nsb3Q+XHJcblx0PC9Db250ZW50PlxyXG5cclxuXHQ8YmxvY2txdW90ZT5cclxuXHRcdDxwIGNsYXNzPVwibXgtMiBtYi03IHRleHQtY2VudGVyIHRleHQtYmFzZVwiPlxyXG5cdFx0XHQ8IS0tIHVubmFtZWQgc2xvdCBmb3IgcmVtYWluZGVyIG9mIHNsb3RzLCBpZiBhbnkgIC0tPlxyXG5cdFx0XHQ8c2xvdD5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRleHQtc2t5LTUwMFwiPlxyXG5cdFx0XHRcdFx0PEVkaXRhYmxlIGJpbmQ6aXRlbT17cHJvZmlsZS5ub3Rlc30gb3B0aW9ucz17eyBzaW5nbGVMaW5lOiBmYWxzZSB9fSAvPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0PC9zbG90PlxyXG5cdFx0PC9wPlxyXG5cdDwvYmxvY2txdW90ZT5cclxuXHJcblx0PGZvb3RlciBjbGFzcz1cInRleHQtY2VudGVyIGJnLWdyZWVuLTQwMCB0ZXh0LXdoaXRlXCI+UG93ZXJlZCBieSBQZWVyUGlwZXI8L2Zvb3Rlcj5cclxuPC9kaXY+XHJcblxyXG48c3R5bGUgbGFuZz1cInBvc3Rjc3NcIj5cclxuXHQvKiB1c2UgcHJlcGVuZCBpbiBzdmVsdGUuY29uZmlnIGluc3RlYWQgb2Y6ICovXHJcblx0QGltcG9ydCAnLi4vLi4vYXBwLmNzcyc7XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSUMsUUFBUSxlQUFlLENBQUMifQ== */")}const Ge=t=>({}),$e=t=>({}),Re=t=>({}),ve=t=>({}),Ce=t=>({}),Me=t=>({}),Le=t=>({}),Ze=t=>({});function Ne(t){let e,c,o;const l={c:function(){e=C("div"),c=C("img"),Lt(c,"class","rounded-full bg-white absolute max-w-none object-cover"),a(c.src,o=t[0].avatar)||Lt(c,"src",o),Lt(c,"alt","d"),F(c,"width","100%"),F(c,"height","100%"),F(c,"transform-origin","50% 50% 0px"),n(c,He,76,4,2380),Lt(e,"class","relative z-10 overflow-hidden flex-none mx-auto w-32 h-32 drop-shadow-xl"),n(e,He,75,3,2288)},m:function(t,n){vt(t,e,n),Rt(e,c)},p:function(t,e){1&e&&!a(c.src,o=t[0].avatar)&&Lt(c,"src",o)},d:function(t){t&&Ct(e)}};return $t("SvelteRegisterBlock",{block:l,id:Ne.name,type:"else",source:"(75:2) {:else}",ctx:t}),l}function je(e){let c,o;const l={c:function(){c=M("svg"),o=M("path"),Lt(o,"d","M105 2a129 129 0 0 0 1 253c11 1 33 2 44 0 26-5 48-16 67-35a126 126 0 0 0 38-114A129 129 0 0 0 150 2c-10-2-35-2-45 0zm31 30c23 4 41 24 45 51l3 9 2 6c0 4-1 6-5 14l-7 15c-3 8-11 19-16 24s-5 7-2 13c5 10 13 16 35 23l16 5-3 4a117 117 0 0 1-151 0l-4-4 4-1 17-6c19-6 27-13 31-25l2-5-4-4c-5-6-12-16-15-23l-7-11c-4-6-7-14-7-18 0-3 3-9 5-9l1-3 2-11c6-26 26-43 50-45l8 1z"),n(o,He,70,4,1878),Lt(c,"class","rounded-full bg-white shadow-xl drop-shadow-xl"),Lt(c,"xmlns","http://www.w3.org/2000/svg"),Lt(c,"version","1.0"),Lt(c,"viewBox","0 0 256 256"),n(c,He,64,3,1715)},m:function(t,e){vt(t,c,e),Rt(c,o)},p:t,d:function(t){t&&Ct(c)}};return $t("SvelteRegisterBlock",{block:l,id:je.name,type:"if",source:"(64:2) {#if !profile.avatar}",ctx:e}),l}function Be(t){let e,n,c,o,l,s;function i(e){t[8](e)}let r={};function a(e){t[9](e)}void 0!==t[0].firstName&&(r.item=t[0].firstName),e=new kt({props:r,$$inline:!0}),O.push((()=>ht(e,"item",i)));let u={};void 0!==t[0].lastName&&(u.item=t[0].lastName),o=new kt({props:u,$$inline:!0}),O.push((()=>ht(o,"item",a)));const d={c:function(){wt(e.$$.fragment),c=Z(),wt(o.$$.fragment)},m:function(t,n){Ht(e,t,n),vt(t,c,n),Ht(o,t,n),s=!0},p:function(t,c){const s={};!n&&1&c&&(n=!0,s.item=t[0].firstName,ot((()=>n=!1))),e.$set(s);const i={};!l&&1&c&&(l=!0,i.item=t[0].lastName,ot((()=>l=!1))),o.$set(i)},i:function(t){s||(bt(e.$$.fragment,t),bt(o.$$.fragment,t),s=!0)},o:function(t){ft(e.$$.fragment,t),ft(o.$$.fragment,t),s=!1},d:function(t){It(e,t),t&&Ct(c),It(o,t)}};return $t("SvelteRegisterBlock",{block:d,id:Be.name,type:"fallback",source:"(87:20)      ",ctx:t}),d}function Fe(t){let e,n,c;function o(e){t[10](e)}let l={};void 0!==t[0].address&&(l.item=t[0].address),e=new kt({props:l,$$inline:!0}),O.push((()=>ht(e,"item",o)));const s={c:function(){wt(e.$$.fragment)},m:function(t,n){Ht(e,t,n),c=!0},p:function(t,c){const o={};!n&&1&c&&(n=!0,o.item=t[0].address,ot((()=>n=!1))),e.$set(o)},i:function(t){c||(bt(e.$$.fragment,t),c=!0)},o:function(t){ft(e.$$.fragment,t),c=!1},d:function(t){It(e,t)}};return $t("SvelteRegisterBlock",{block:s,id:Fe.name,type:"fallback",source:"(97:23)      ",ctx:t}),s}function Je(t){let e;const n=t[3].address,c=u(n,t,t[14],Me),o=c||Fe(t),l={c:function(){o&&o.c()},m:function(t,n){o&&o.m(t,n),e=!0},p:function(t,l){c?c.p&&(!e||16384&l)&&x(c,n,t,t[14],e?p(n,t[14],l,Ce):m(t[14]),Me):o&&o.p&&(!e||1&l)&&o.p(t,e?l:-1)},i:function(t){e||(bt(o,t),e=!0)},o:function(t){ft(o,t),e=!1},d:function(t){o&&o.d(t)}};return $t("SvelteRegisterBlock",{block:l,id:Je.name,type:"slot",source:"(96:1) <Content name={'address'}>",ctx:t}),l}function ze(t){let e,n,c;function o(e){t[11](e)}let l={};void 0!==t[0].email&&(l.item=t[0].email),e=new kt({props:l,$$inline:!0}),O.push((()=>ht(e,"item",o)));const s={c:function(){wt(e.$$.fragment)},m:function(t,n){Ht(e,t,n),c=!0},p:function(t,c){const o={};!n&&1&c&&(n=!0,o.item=t[0].email,ot((()=>n=!1))),e.$set(o)},i:function(t){c||(bt(e.$$.fragment,t),c=!0)},o:function(t){ft(e.$$.fragment,t),c=!1},d:function(t){It(e,t)}};return $t("SvelteRegisterBlock",{block:s,id:ze.name,type:"fallback",source:"(103:21)      ",ctx:t}),s}function Ye(t){let e;const n=t[3].email,c=u(n,t,t[14],ve),o=c||ze(t),l={c:function(){o&&o.c()},m:function(t,n){o&&o.m(t,n),e=!0},p:function(t,l){c?c.p&&(!e||16384&l)&&x(c,n,t,t[14],e?p(n,t[14],l,Re):m(t[14]),ve):o&&o.p&&(!e||1&l)&&o.p(t,e?l:-1)},i:function(t){e||(bt(o,t),e=!0)},o:function(t){ft(o,t),e=!1},d:function(t){o&&o.d(t)}};return $t("SvelteRegisterBlock",{block:l,id:Ye.name,type:"slot",source:"(102:1) <Content name={'email'}>",ctx:t}),l}function Ve(t){let e,n,c;function o(e){t[12](e)}let l={};void 0!==t[0].phone&&(l.item=t[0].phone),e=new kt({props:l,$$inline:!0}),O.push((()=>ht(e,"item",o)));const s={c:function(){wt(e.$$.fragment)},m:function(t,n){Ht(e,t,n),c=!0},p:function(t,c){const o={};!n&&1&c&&(n=!0,o.item=t[0].phone,ot((()=>n=!1))),e.$set(o)},i:function(t){c||(bt(e.$$.fragment,t),c=!0)},o:function(t){ft(e.$$.fragment,t),c=!1},d:function(t){It(e,t)}};return $t("SvelteRegisterBlock",{block:s,id:Ve.name,type:"fallback",source:"(109:21)      ",ctx:t}),s}function We(t){let e;const n=t[3].phone,c=u(n,t,t[14],$e),o=c||Ve(t),l={c:function(){o&&o.c()},m:function(t,n){o&&o.m(t,n),e=!0},p:function(t,l){c?c.p&&(!e||16384&l)&&x(c,n,t,t[14],e?p(n,t[14],l,Ge):m(t[14]),$e):o&&o.p&&(!e||1&l)&&o.p(t,e?l:-1)},i:function(t){e||(bt(o,t),e=!0)},o:function(t){ft(o,t),e=!1},d:function(t){o&&o.d(t)}};return $t("SvelteRegisterBlock",{block:l,id:We.name,type:"slot",source:"(108:1) <Content name={'phone'}>",ctx:t}),l}function ke(t){let e,c,o,l;function s(e){t[13](e)}let i={options:{singleLine:!1}};void 0!==t[0].notes&&(i.item=t[0].notes),c=new kt({props:i,$$inline:!0}),O.push((()=>ht(c,"item",s)));const r={c:function(){e=C("span"),wt(c.$$.fragment),Lt(e,"class","text-sky-500"),n(e,He,117,4,3435)},m:function(t,n){vt(t,e,n),Ht(c,e,null),l=!0},p:function(t,e){const n={};!o&&1&e&&(o=!0,n.item=t[0].notes,ot((()=>o=!1))),c.$set(n)},i:function(t){l||(bt(c.$$.fragment,t),l=!0)},o:function(t){ft(c.$$.fragment,t),l=!1},d:function(t){t&&Ct(e),It(c)}};return $t("SvelteRegisterBlock",{block:r,id:ke.name,type:"fallback",source:"(117:9)       ",ctx:t}),r}function Qe(t){let e,c,o,s,i,r,a,d,b,f,X,y,g,h,w,H,I,G,$,R,v,M,L;function N(t,e){return t[0].avatar?Ne:je}o=new he({$$inline:!0}),o.$on("change",t[4]);let j=N(t),B=j(t);const J=t[3].name,z=u(J,t,t[14],Ze),Y=z||Be(t);X=new oe({props:{name:"address",$$slots:{default:[Je]},$$scope:{ctx:t}},$$inline:!0}),g=new oe({props:{name:"email",$$slots:{default:[Ye]},$$scope:{ctx:t}},$$inline:!0}),w=new oe({props:{name:"phone",$$slots:{default:[We]},$$scope:{ctx:t}},$$inline:!0});const V=t[3].default,W=u(V,t,t[14],null),k=W||ke(t),Q={c:function(){e=C("div"),c=C("div"),wt(o.$$.fragment),s=Z(),i=C("input"),r=Z(),a=C("div"),B.c(),d=Z(),b=C("div"),Y&&Y.c(),f=Z(),wt(X.$$.fragment),y=Z(),wt(g.$$.fragment),h=Z(),wt(w.$$.fragment),H=Z(),I=C("blockquote"),G=C("p"),k&&k.c(),$=Z(),R=C("footer"),R.textContent="Powered by PeerPiper",Lt(c,"class","h-24 bg-white"),n(c,He,47,1,1368),F(i,"display","none"),Lt(i,"type","file"),Lt(i,"accept",".jpg, .jpeg, .png"),n(i,He,50,1,1436),Lt(a,"class","-mt-20 h-32 flex justify-center"),n(a,He,57,1,1584),Lt(b,"class","mt-5 mb-7 px-3 text-center text-xl"),n(b,He,85,1,2606),Lt(G,"class","mx-2 mb-7 text-center text-base"),n(G,He,114,2,3317),n(I,He,113,1,3301),Lt(R,"class","text-center bg-green-400 text-white"),n(R,He,124,1,3593),Lt(e,"class","m-auto fill-slate-500 my-2 w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-100 shadow-xl"),n(e,He,44,0,1228)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(n,l){vt(n,e,l),Rt(e,c),Ht(o,c,null),Rt(e,s),Rt(e,i),t[6](i),Rt(e,r),Rt(e,a),B.m(a,null),Rt(e,d),Rt(e,b),Y&&Y.m(b,null),Rt(e,f),Ht(X,e,null),Rt(e,y),Ht(g,e,null),Rt(e,h),Ht(w,e,null),Rt(e,H),Rt(e,I),Rt(I,G),k&&k.m(G,null),Rt(e,$),Rt(e,R),v=!0,M||(L=[Mt(i,"change",t[5],!1,!1,!1),Mt(a,"click",t[7],!1,!1,!1)],M=!0)},p:function(t,[e]){j===(j=N(t))&&B?B.p(t,e):(B.d(1),B=j(t),B&&(B.c(),B.m(a,null))),z?z.p&&(!v||16384&e)&&x(z,J,t,t[14],v?p(J,t[14],e,Le):m(t[14]),Ze):Y&&Y.p&&(!v||1&e)&&Y.p(t,v?e:-1);const n={};16385&e&&(n.$$scope={dirty:e,ctx:t}),X.$set(n);const c={};16385&e&&(c.$$scope={dirty:e,ctx:t}),g.$set(c);const o={};16385&e&&(o.$$scope={dirty:e,ctx:t}),w.$set(o),W?W.p&&(!v||16384&e)&&x(W,V,t,t[14],v?p(V,t[14],e,null):m(t[14]),null):k&&k.p&&(!v||1&e)&&k.p(t,v?e:-1)},i:function(t){v||(bt(o.$$.fragment,t),bt(Y,t),bt(X.$$.fragment,t),bt(g.$$.fragment,t),bt(w.$$.fragment,t),bt(k,t),v=!0)},o:function(t){ft(o.$$.fragment,t),ft(Y,t),ft(X.$$.fragment,t),ft(g.$$.fragment,t),ft(w.$$.fragment,t),ft(k,t),v=!1},d:function(n){n&&Ct(e),It(o),t[6](null),B.d(),Y&&Y.d(n),It(X),It(g),It(w),k&&k.d(n),M=!1,l(L)}};return $t("SvelteRegisterBlock",{block:Q,id:Qe.name,type:"component",source:"",ctx:t}),Q}function De(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("ContactCard",c,["name","address","email","phone","default"]);const l=A();let s,i={firstName:"FirstName",lastName:"Lastname",address:"Unknown address",email:"Unknown email",phone:"No phone",notes:"No notes",avatar:null},{profile:r=i}=e;const a=t=>{let e=t.target.files[0],c=new FileReader;c.readAsDataURL(e),c.onload=t=>{n(0,r.avatar=t.target.result,r)}},u=["profile"];we.keys(e).forEach((t=>{~u.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<ContactCard> was created with unknown prop '\${t}'\`)}));return t.$$set=t=>{"profile"in t&&n(0,r=t.profile),"$$scope"in t&&n(14,o=t.$$scope)},t.$capture_state=()=>({Changable:Yt,Editable:kt,Content:oe,ContextMenu:he,createEventDispatcher:A,dispatch:l,defaultProfile:i,profile:r,fileinput:s,onFileSelected:a}),t.$inject_state=t=>{"defaultProfile"in t&&n(16,i=t.defaultProfile),"profile"in t&&n(0,r=t.profile),"fileinput"in t&&n(1,s=t.fileinput)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{1&t.$$.dirty&&r&&(n(0,r=Object.assign({},i,r)),l("change",{profile:r}))},[r,s,a,c,function(e){U.call(this,t,e)},t=>a(t),function(t){O[t?"unshift":"push"]((()=>{s=t,n(1,s)}))},()=>{s.click()},function(e){t.$$.not_equal(r.firstName,e)&&(r.firstName=e,n(0,r),n(16,i))},function(e){t.$$.not_equal(r.lastName,e)&&(r.lastName=e,n(0,r),n(16,i))},function(e){t.$$.not_equal(r.address,e)&&(r.address=e,n(0,r),n(16,i))},function(e){t.$$.not_equal(r.email,e)&&(r.email=e,n(0,r),n(16,i))},function(e){t.$$.not_equal(r.phone,e)&&(r.phone=e,n(0,r),n(16,i))},function(e){t.$$.not_equal(r.notes,e)&&(r.notes=e,n(0,r),n(16,i))},o]}const Se="..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\ContactList.svelte";function Ee(t){w(t,"svelte-y8lr1t","@import '../../app.css';\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdExpc3Quc3ZlbHRlIiwic291cmNlcyI6WyJDb250YWN0TGlzdC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuXHRleHBvcnQgbGV0IGNvbnRhY3RzID0gW3sgcHVia2V5OiBudWxsLCBoYW5kbGU6IG51bGwgfV07XHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdiBjbGFzcz1cIm15LTRcIj5cclxuXHR7I2VhY2ggY29udGFjdHMgYXMgY29udGFjdH1cclxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IG14LTQgYmctZ3JheS01MCByb3VuZGVkIHAtNCBcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtMSBiZy1ncmF5LTEwMCBtbC00IHAtNCB3LTEvMiBib3JkZXItci1ncmF5LTQwMFwiPlxyXG5cdFx0XHRcdHtjb250YWN0LmhhbmRsZX1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LTEgZm9udC1tb25vICBiZy1ncmF5LTEwMCBtci00IHAtNCB3LTEvMlwiPntjb250YWN0LnB1YmtleX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdHsvZWFjaH1cclxuPC9kaXY+XHJcblxyXG48c3R5bGUgbGFuZz1cInBvc3Rjc3NcIj5cclxuXHQvKiB1c2UgcHJlcGVuZCBpbiBzdmVsdGUuY29uZmlnIGluc3RlYWQgb2Y6ICovXHJcblx0QGltcG9ydCAnLi4vLi4vYXBwLmNzcyc7XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkMsUUFBUSxlQUFlLENBQUMifQ== */")}function Te(t,e,n){const c=t.slice();return c[1]=e[n],c}function Ae(t){let e,c,o,l,s,i,r,a=t[1].handle+"",u=t[1].pubkey+"";const d={c:function(){e=C("div"),c=C("div"),o=L(a),l=Z(),s=C("div"),i=L(u),r=Z(),Lt(c,"class","flex-1 bg-gray-100 ml-4 p-4 w-1/2 border-r-gray-400"),n(c,Se,7,3,194),Lt(s,"class","flex-1 font-mono bg-gray-100 mr-4 p-4 w-1/2"),n(s,Se,10,3,297),Lt(e,"class","flex flex-row mx-4 bg-gray-50 rounded p-4 "),n(e,Se,6,2,133)},m:function(t,n){vt(t,e,n),Rt(e,c),Rt(c,o),Rt(e,l),Rt(e,s),Rt(s,i),Rt(e,r)},p:function(t,e){1&e&&a!==(a=t[1].handle+"")&&Zt(o,a),1&e&&u!==(u=t[1].pubkey+"")&&Zt(i,u)},d:function(t){t&&Ct(e)}};return $t("SvelteRegisterBlock",{block:d,id:Ae.name,type:"each",source:"(6:1) {#each contacts as contact}",ctx:t}),d}function Ue(e){let c,o=e[0];Nt(o);let l=[];for(let t=0;t<o.length;t+=1)l[t]=Ae(Te(e,o,t));const s={c:function(){c=C("div");for(let t=0;t<l.length;t+=1)l[t].c();Lt(c,"class","my-4"),n(c,Se,4,0,81)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,e){vt(t,c,e);for(let t=0;t<l.length;t+=1)l[t].m(c,null)},p:function(t,[e]){if(1&e){let n;for(o=t[0],Nt(o),n=0;n<o.length;n+=1){const s=Te(t,o,n);l[n]?l[n].p(s,e):(l[n]=Ae(s),l[n].c(),l[n].m(c,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=o.length}},i:t,o:t,d:function(t){t&&Ct(c),v(l,t)}};return $t("SvelteRegisterBlock",{block:s,id:Ue.name,type:"component",source:"",ctx:e}),s}function Pe(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("ContactList",c,[]);let{contacts:l=[{pubkey:null,handle:null}]}=e;const s=["contacts"];return Object.keys(e).forEach((t=>{~s.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<ContactList> was created with unknown prop '\${t}'\`)})),t.$$set=t=>{"contacts"in t&&n(0,l=t.contacts)},t.$capture_state=()=>({contacts:l}),t.$inject_state=t=>{"contacts"in t&&n(0,l=t.contacts)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[l]}function Oe(t){w(t,"svelte-151qcys","@tailwind base;@tailwind utilities;@tailwind components;\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3V0dGVyV3JhcGVyLnN2ZWx0ZSIsInNvdXJjZXMiOlsiT3V0dGVyV3JhcGVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbFwiPlxyXG5cdDxzbG90IC8+XHJcbjwvZGl2PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJwb3N0Y3NzXCI+XHJcblx0QHRhaWx3aW5kIGJhc2U7XHJcblx0QHRhaWx3aW5kIHV0aWxpdGllcztcclxuXHRAdGFpbHdpbmQgY29tcG9uZW50cztcclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDLFVBQVUsSUFBSSxDQUFDLEFBQ2YsVUFBVSxTQUFTLENBQUMsQUFDcEIsVUFBVSxVQUFVLENBQUMifQ== */")}function _e(t){let e,c;const o=t[1].default,l=u(o,t,t[0],null),s={c:function(){e=C("div"),l&&l.c(),Lt(e,"class","flex flex-col"),n(e,"..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\OutterWraper.svelte",0,0,0)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,n){vt(t,e,n),l&&l.m(e,null),c=!0},p:function(t,[e]){l&&l.p&&(!c||1&e)&&x(l,o,t,t[0],c?p(o,t[0],e,null):m(t[0]),null)},i:function(t){c||(bt(l,t),c=!0)},o:function(t){ft(l,t),c=!1},d:function(t){t&&Ct(e),l&&l.d(t)}};return $t("SvelteRegisterBlock",{block:s,id:_e.name,type:"component",source:"",ctx:t}),s}function Ke(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("OutterWraper",c,["default"]);const l=[];return Object.keys(e).forEach((t=>{~l.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<OutterWraper> was created with unknown prop '\${t}'\`)})),t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,c]}class qe extends Bt{constructor(t){super(t),Gt(this,t,Ke,_e,i,{},Oe),$t("SvelteRegisterComponent",{component:this,tagName:"OutterWraper",options:t,id:_e.name})}}function tn(t){w(t,"svelte-151qcys","@tailwind base;@tailwind utilities;@tailwind components;\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JhcHBlci5zdmVsdGUiLCJzb3VyY2VzIjpbIldyYXBwZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cclxuXHQ8c2xvdCAvPlxyXG48L2Rpdj5cclxuXHJcbjxzdHlsZSBsYW5nPVwicG9zdGNzc1wiPlxyXG5cdEB0YWlsd2luZCBiYXNlO1xyXG5cdEB0YWlsd2luZCB1dGlsaXRpZXM7XHJcblx0QHRhaWx3aW5kIGNvbXBvbmVudHM7XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQyxVQUFVLElBQUksQ0FBQyxBQUNmLFVBQVUsU0FBUyxDQUFDLEFBQ3BCLFVBQVUsVUFBVSxDQUFDIn0= */")}function en(t){let e,c;const o=t[1].default,l=u(o,t,t[0],null),s={c:function(){e=C("div"),l&&l.c(),Lt(e,"class","flex-1"),n(e,"..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\Wrapper.svelte",0,0,0)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,n){vt(t,e,n),l&&l.m(e,null),c=!0},p:function(t,[e]){l&&l.p&&(!c||1&e)&&x(l,o,t,t[0],c?p(o,t[0],e,null):m(t[0]),null)},i:function(t){c||(bt(l,t),c=!0)},o:function(t){ft(l,t),c=!1},d:function(t){t&&Ct(e),l&&l.d(t)}};return $t("SvelteRegisterBlock",{block:s,id:en.name,type:"component",source:"",ctx:t}),s}function nn(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("Wrapper",c,["default"]);const l=[];return Object.keys(e).forEach((t=>{~l.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<Wrapper> was created with unknown prop '\${t}'\`)})),t.$$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,c]}class cn extends Bt{constructor(t){super(t),Gt(this,t,nn,en,i,{},tn),$t("SvelteRegisterComponent",{component:this,tagName:"Wrapper",options:t,id:en.name})}}const{Object:on}=gt;function ln(t){w(t,"svelte-1yhr0gq","@import '../../app.css';\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnTWFuYWdlci5zdmVsdGUiLCJzb3VyY2VzIjpbIlRhZ01hbmFnZXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcblx0Ly8gdGFrZXMgY29tcG9uZW50cyBhcyBwcm9wcyBhbmQgYWRkcyB0aGVtIHRvIHRoZSBjb21wb25lbnQgY2FudmFzXHJcblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcclxuXHRpbXBvcnQgT3V0dGVyV3JhcGVyIGZyb20gJy4vT3V0dGVyV3JhcGVyLnN2ZWx0ZSc7XHJcblx0aW1wb3J0IENvbXBvbmVudFdyYXBwZXIgZnJvbSAnLi9XcmFwcGVyLnN2ZWx0ZSc7XHJcblxyXG5cdGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG5cdGxldCBDb21wb25lbnRNb3VudGVyO1xyXG5cclxuXHRvbk1vdW50KGFzeW5jICgpID0+IHtcclxuXHRcdC8vIG5vdCBTU1IgY29tcGF0aWJsZVxyXG5cdFx0Q29tcG9uZW50TW91bnRlciA9IChhd2FpdCBpbXBvcnQoJy4vQ29tcG9uZW50TW91bnRlci5zdmVsdGUnKSkuZGVmYXVsdDtcclxuXHR9KTtcclxuXHJcblx0ZXhwb3J0IGxldCBwYXJhbXM7XHJcblxyXG5cdGZ1bmN0aW9uIHVwZGF0ZShlLCBpKSB7XHJcblx0XHRwYXJhbXNbaV0gPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXNbaV0ucHJvcHMsIHsgLi4uZS5kZXRhaWwgfSk7XHJcblx0XHRkaXNwYXRjaCgnY2hhbmdlJywgcGFyYW1zKTtcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdiBjbGFzcz1cInRleHQteGwgZm9udC1ib2xkXCI+VGhlIFRhZyBNYW5hZ2VyIHY2PC9kaXY+XHJcblxyXG57I2lmIENvbXBvbmVudE1vdW50ZXIgJiYgcGFyYW1zICYmIHBhcmFtcy5sZW5ndGggPiAwfVxyXG5cdDxPdXR0ZXJXcmFwZXI+XHJcblx0XHR7I2VhY2ggcGFyYW1zIGFzIHsgZXNNb2R1bGUsIHByb3BzID0geyB9IH0sIGl9XHJcblx0XHRcdDwhLS0gb246Y2hhbmdlIGJ1YmJsZXMgdGhlIHByb3AgY2hhbmdlcyB1cCB0byB0aGUgcGFyZW50IGNvbXBvbmVudCAgLS0+XHJcblx0XHRcdDxDb21wb25lbnRXcmFwcGVyPlxyXG5cdFx0XHRcdDxzdmVsdGU6Y29tcG9uZW50XHJcblx0XHRcdFx0XHR0aGlzPXtDb21wb25lbnRNb3VudGVyfVxyXG5cdFx0XHRcdFx0e2VzTW9kdWxlfVxyXG5cdFx0XHRcdFx0e3Byb3BzfVxyXG5cdFx0XHRcdFx0b246Y2hhbmdlPXsoZSkgPT4gdXBkYXRlKGUsIGkpfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvQ29tcG9uZW50V3JhcHBlcj5cclxuXHRcdHsvZWFjaH1cclxuXHQ8L091dHRlcldyYXBlcj5cclxuey9pZn1cclxuXHJcbjxzdHlsZSBsYW5nPVwicG9zdGNzc1wiPlxyXG5cdEBpbXBvcnQgJy4uLy4uL2FwcC5jc3MnO1xyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENDLFFBQVEsZUFBZSxDQUFDIn0= */")}function sn(t,e,n){const c=t.slice();return c[5]=e[n].esModule,c[6]=void 0!==e[n].props?e[n].props:{},c[8]=n,c}function rn(t){let e,n;e=new qe({props:{$$slots:{default:[dn]},$$scope:{ctx:t}},$$inline:!0});const c={c:function(){wt(e.$$.fragment)},m:function(t,c){Ht(e,t,c),n=!0},p:function(t,n){const c={};515&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i:function(t){n||(bt(e.$$.fragment,t),n=!0)},o:function(t){ft(e.$$.fragment,t),n=!1},d:function(t){It(e,t)}};return $t("SvelteRegisterBlock",{block:c,id:rn.name,type:"if",source:"(26:0) {#if ComponentMounter && params && params.length > 0}",ctx:t}),c}function an(t){let e,n,c;function o(...e){return t[3](t[8],...e)}var l=t[1];function s(t){return{props:{esModule:t[5],props:t[6]},$$inline:!0}}l&&(e=new l(s(t)),e.$on("change",o));const i={c:function(){e&&wt(e.$$.fragment),n=Z()},m:function(t,o){e&&Ht(e,t,o),vt(t,n,o),c=!0},p:function(c,i){t=c;const r={};if(1&i&&(r.esModule=t[5]),1&i&&(r.props=t[6]),l!==(l=t[1])){if(e){xt();const t=e;ft(t.$$.fragment,1,0,(()=>{It(t,1)})),mt()}l?(e=new l(s(t)),e.$on("change",o),wt(e.$$.fragment),bt(e.$$.fragment,1),Ht(e,n.parentNode,n)):e=null}else l&&e.$set(r)},i:function(t){c||(e&&bt(e.$$.fragment,t),c=!0)},o:function(t){e&&ft(e.$$.fragment,t),c=!1},d:function(t){e&&It(e,t),t&&Ct(n)}};return $t("SvelteRegisterBlock",{block:i,id:an.name,type:"slot",source:"(30:3) <ComponentWrapper>",ctx:t}),i}function un(t){let e,n;e=new cn({props:{$$slots:{default:[an]},$$scope:{ctx:t}},$$inline:!0});const c={c:function(){wt(e.$$.fragment)},m:function(t,c){Ht(e,t,c),n=!0},p:function(t,n){const c={};515&n&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i:function(t){n||(bt(e.$$.fragment,t),n=!0)},o:function(t){ft(e.$$.fragment,t),n=!1},d:function(t){It(e,t)}};return $t("SvelteRegisterBlock",{block:c,id:un.name,type:"each",source:"(28:2) {#each params as { esModule, props = { }",ctx:t}),c}function dn(t){let e,n,c=t[0];Nt(c);let o=[];for(let e=0;e<c.length;e+=1)o[e]=un(sn(t,c,e));const l=t=>ft(o[t],1,1,(()=>{o[t]=null})),s={c:function(){for(let t=0;t<o.length;t+=1)o[t].c();e=N()},m:function(t,c){for(let e=0;e<o.length;e+=1)o[e].m(t,c);vt(t,e,c),n=!0},p:function(t,n){if(7&n){let s;for(c=t[0],Nt(c),s=0;s<c.length;s+=1){const l=sn(t,c,s);o[s]?(o[s].p(l,n),bt(o[s],1)):(o[s]=un(l),o[s].c(),bt(o[s],1),o[s].m(e.parentNode,e))}for(xt(),s=c.length;s<o.length;s+=1)l(s);mt()}},i:function(t){if(!n){for(let t=0;t<c.length;t+=1)bt(o[t]);n=!0}},o:function(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)ft(o[t]);n=!1},d:function(t){v(o,t),t&&Ct(e)}};return $t("SvelteRegisterBlock",{block:s,id:dn.name,type:"slot",source:"(27:1) <OutterWraper>",ctx:t}),s}function pn(t){let e,c,o,l,s=t[1]&&t[0]&&t[0].length>0&&rn(t);const i={c:function(){e=C("div"),e.textContent="The Tag Manager v6",c=Z(),s&&s.c(),o=N(),Lt(e,"class","text-xl font-bold"),n(e,"..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\TagManager.svelte",23,0,612)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,n){vt(t,e,n),vt(t,c,n),s&&s.m(t,n),vt(t,o,n),l=!0},p:function(t,[e]){t[1]&&t[0]&&t[0].length>0?s?(s.p(t,e),3&e&&bt(s,1)):(s=rn(t),s.c(),bt(s,1),s.m(o.parentNode,o)):s&&(xt(),ft(s,1,1,(()=>{s=null})),mt())},i:function(t){l||(bt(s),l=!0)},o:function(t){ft(s),l=!1},d:function(t){t&&Ct(e),t&&Ct(c),s&&s.d(t),t&&Ct(o)}};return $t("SvelteRegisterBlock",{block:i,id:pn.name,type:"component",source:"",ctx:t}),i}function xn(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("TagManager",c,[]);const l=A();let s;E((async()=>{n(1,s=(await Promise.resolve().then((function(){return yn}))).default)}));let{params:i}=e;function r(t,e){n(0,i[e]=Object.assign({},i[e].props,{...t.detail}),i),l("change",i)}const a=["params"];on.keys(e).forEach((t=>{~a.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<TagManager> was created with unknown prop '\${t}'\`)}));return t.$$set=t=>{"params"in t&&n(0,i=t.params)},t.$capture_state=()=>({onMount:E,createEventDispatcher:A,OutterWraper:qe,ComponentWrapper:cn,dispatch:l,ComponentMounter:s,params:i,update:r}),t.$inject_state=t=>{"ComponentMounter"in t&&n(1,s=t.ComponentMounter),"params"in t&&n(0,i=t.params)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[i,s,r,(t,e)=>r(e,t)]}const{Object:mn}=gt;function bn(e){let c,o,l,s;const i={c:function(){c=new z(!1),o=N(),l=Z(),s=C("div"),c.a=o,n(s,"..\\\\awesome-peerpiper-components\\\\src\\\\lib\\\\components\\\\@peerpiper\\\\ComponentMounter.svelte",81,0,2150)},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(t,n){c.m(e[0],document.head),Rt(document.head,o),vt(t,l,n),vt(t,s,n),e[6](s)},p:function(t,[e]){1&e&&c.p(t[0])},i:t,o:t,d:function(t){Ct(o),t&&c.d(),t&&Ct(l),t&&Ct(s),e[6](null)}};return $t("SvelteRegisterBlock",{block:i,id:bn.name,type:"component",source:"",ctx:e}),i}function fn(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("ComponentMounter",c,[]);let{esModule:l}=e,{props:s}=e,{css:i}=e;const r=A();let a,u,d,p;async function x(){n(0,i=i?\`<style>\${i}</style>\`:""),a&&(a.$destroy(),URL.revokeObjectURL(u));const t=new Blob([l],{type:"text/javascript"});u=URL.createObjectURL(t);const e=(await import(u)).default;if(!e||!d)return;n(1,d.innerHTML="",d),n(4,a=new e({target:d,props:{}}));const c=a.$$.props;let o={};Object.keys(c).map((t=>{o[t]=a[t]}));let p=Object.assign(o,s);r("change",p),a.$on("change",(t=>{r("change",t.detail)})),m(p)}function m(t){a&&a.$set({...t})}E((()=>{n(5,p=!0)})),T((()=>{a&&a.$destroy(),u&&URL.revokeObjectURL(u)}));const b=["esModule","props","css"];return mn.keys(e).forEach((t=>{~b.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(\`<ComponentMounter> was created with unknown prop '\${t}'\`)})),t.$$set=t=>{"esModule"in t&&n(2,l=t.esModule),"props"in t&&n(3,s=t.props),"css"in t&&n(0,i=t.css)},t.$capture_state=()=>({onMount:E,onDestroy:T,tick:nt,createEventDispatcher:A,esModule:l,props:s,css:i,dispatch:r,component:a,url:u,target:d,mounted:p,loadEsModuleComponent:x,setProps:m}),t.$inject_state=t=>{"esModule"in t&&n(2,l=t.esModule),"props"in t&&n(3,s=t.props),"css"in t&&n(0,i=t.css),"component"in t&&n(4,a=t.component),"url"in t&&(u=t.url),"target"in t&&n(1,d=t.target),"mounted"in t&&n(5,p=t.mounted)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{36&t.$$.dirty&&p&&l&&x(),24&t.$$.dirty&&a&&s&&m()},[i,d,l,s,a,p,function(t){O[t?"unshift":"push"]((()=>{d=t,n(1,d)}))}]}class Xn extends Bt{constructor(t){super(t),Gt(this,t,fn,bn,i,{esModule:2,props:3,css:0}),$t("SvelteRegisterComponent",{component:this,tagName:"ComponentMounter",options:t,id:bn.name});const{ctx:e}=this.$$,n=t.props||{};void 0!==e[2]||"esModule"in n||console.warn("<ComponentMounter> was created without expected prop 'esModule'"),void 0!==e[3]||"props"in n||console.warn("<ComponentMounter> was created without expected prop 'props'"),void 0!==e[0]||"css"in n||console.warn("<ComponentMounter> was created without expected prop 'css'")}get esModule(){throw new Error("<ComponentMounter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set esModule(t){throw new Error("<ComponentMounter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get props(){throw new Error("<ComponentMounter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set props(t){throw new Error("<ComponentMounter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get css(){throw new Error("<ComponentMounter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set css(t){throw new Error("<ComponentMounter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}var yn=Object.freeze({__proto__:null,default:Xn}),gn=Object.freeze({__proto__:null,ContactCard:class extends Bt{constructor(t){super(t),Gt(this,t,De,Qe,i,{profile:0},Ie),$t("SvelteRegisterComponent",{component:this,tagName:"ContactCard",options:t,id:Qe.name})}get profile(){return this.$$.ctx[0]}set profile(t){this.$$set({profile:t}),rt()}},ContactList:class extends Bt{constructor(t){super(t),Gt(this,t,Pe,Ue,i,{contacts:0},Ee),$t("SvelteRegisterComponent",{component:this,tagName:"ContactList",options:t,id:Ue.name})}get contacts(){throw new Error("<ContactList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set contacts(t){throw new Error("<ContactList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}},Changable:Yt,ContextMenu:he,TagManager:class extends Bt{constructor(t){super(t),Gt(this,t,xn,pn,i,{params:0},ln),$t("SvelteRegisterComponent",{component:this,tagName:"TagManager",options:t,id:pn.name});const{ctx:e}=this.$$,n=t.props||{};void 0!==e[0]||"params"in n||console.warn("<TagManager> was created without expected prop 'params'")}get params(){throw new Error("<TagManager>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set params(t){throw new Error("<TagManager>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}},ComponentMounter:Xn});globalThis.fetch=()=>(console.log("Nulled out fetch"),{json:()=>({result:"no fetch, sorry"})}),globalThis.XMLHttpRequest=class{constructor(){console.log("Nulled out XHR too")}open=()=>null;send=()=>null},globalThis.WebSocket=null,globalThis.EventSource=null;const{console:hn}=gt;function wn(t){let e,n,c;var o=Xn;function l(t){return{props:{esModule:t[0],props:t[1]},$$inline:!0}}o&&(e=new o(l(t)),e.$on("change",t[3]));const s={c:function(){e&&wt(e.$$.fragment),n=N()},m:function(t,o){e&&Ht(e,t,o),vt(t,n,o),c=!0},p:function(t,c){const s={};if(1&c&&(s.esModule=t[0]),2&c&&(s.props=t[1]),o!==(o=Xn)){if(e){xt();const t=e;ft(t.$$.fragment,1,0,(()=>{It(t,1)})),mt()}o?(e=new o(l(t)),e.$on("change",t[3]),wt(e.$$.fragment),bt(e.$$.fragment,1),Ht(e,n.parentNode,n)):e=null}else o&&e.$set(s)},i:function(t){c||(e&&bt(e.$$.fragment,t),c=!0)},o:function(t){e&&ft(e.$$.fragment,t),c=!1},d:function(t){t&&Ct(n),e&&It(e,t)}};return $t("SvelteRegisterBlock",{block:s,id:wn.name,type:"if",source:"(35:0) {#if esModule}",ctx:t}),s}function Hn(t){let e,n,c,o,l=t[0]&&wn(t);const s={c:function(){l&&l.c(),e=N()},l:function(t){throw new Error("options.hydrate only works if the component was compiled with the \`hydratable: true\` option")},m:function(s,i){l&&l.m(s,i),vt(s,e,i),n=!0,c||(o=Mt(window,"message",t[2],!1,!1,!1),c=!0)},p:function(t,[n]){t[0]?l?(l.p(t,n),1&n&&bt(l,1)):(l=wn(t),l.c(),bt(l,1),l.m(e.parentNode,e)):l&&(xt(),ft(l,1,1,(()=>{l=null})),mt())},i:function(t){n||(bt(l),n=!0)},o:function(t){ft(l),n=!1},d:function(t){l&&l.d(t),t&&Ct(e),c=!1,o()}};return $t("SvelteRegisterBlock",{block:s,id:Hn.name,type:"component",source:"",ctx:t}),s}function In(t,e,n){let{$$slots:c={},$$scope:o}=e;jt("InnerHandler",c,[]),console.log("UPDATED InnerHandler.svelte");let l,s,i,r=new Map;async function a(t){t?.data&&(t?.data.hasOwnProperty("load")&&(n(0,({esModule:l,props:s}=t.data.load),l,n(1,s)),i=e=>{t.ports[0].postMessage(e)}),t?.data.hasOwnProperty("setProps")&&n(1,s=t.data.setProps))}function u(t){i&&t.detail&&i(t.detail)}const d=[];return Object.keys(e).forEach((t=>{~d.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||hn.warn(\`<InnerHandler> was created with unknown prop '\${t}'\`)})),t.$capture_state=()=>({Peerpiper:gn,modules:r,esModule:l,props:s,reply:i,handleMessage:a,handleChange:u}),t.$inject_state=t=>{"modules"in t&&(r=t.modules),"esModule"in t&&n(0,l=t.esModule),"props"in t&&n(1,s=t.props),"reply"in t&&(i=t.reply)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{1&t.$$.dirty&&l&&console.log("Mounting",{esModule:l})},[l,s,a,u]}return new class extends Bt{constructor(t){super(t),Gt(this,t,In,Hn,i,{}),$t("SvelteRegisterComponent",{component:this,tagName:"InnerHandler",options:t,id:Hn.name})}}({target:document.body,props:{}})}();

		<\/script>
	</head>

	<body></body>
</html>
`;
const CHANGE = "change";
function create_fragment$3(ctx) {
  let iframe_1;
  let updating_iframe;
  let current;
  function iframe_1_iframe_binding(value) {
    ctx[6](value);
  }
  let iframe_1_props = { srcdoc, rendered: ctx[0] };
  if (ctx[1] !== void 0) {
    iframe_1_props.iframe = ctx[1];
  }
  iframe_1 = new IFrame({ props: iframe_1_props });
  binding_callbacks.push(() => bind(iframe_1, "iframe", iframe_1_iframe_binding));
  return {
    c() {
      create_component(iframe_1.$$.fragment);
    },
    l(nodes) {
      claim_component(iframe_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(iframe_1, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const iframe_1_changes = {};
      if (dirty & 1)
        iframe_1_changes.rendered = ctx2[0];
      if (!updating_iframe && dirty & 2) {
        updating_iframe = true;
        iframe_1_changes.iframe = ctx2[1];
        add_flush_callback(() => updating_iframe = false);
      }
      iframe_1.$set(iframe_1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(iframe_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(iframe_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(iframe_1, detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { esModule } = $$props;
  let { css } = $$props;
  let { props } = $$props;
  let { rendered } = $$props;
  let iframe;
  let setProps;
  const dispatch = createEventDispatcher();
  async function handleLoad() {
    if (!esModule || !iframe)
      throw new Error("Missing esModule");
    const channel = new MessageChannel();
    channel.port1.onmessage = (e) => {
      $$invalidate(0, rendered = true);
      dispatch(CHANGE, __spreadValues(__spreadValues({}, props), e.data));
      $$invalidate(5, setProps = (props2) => {
        iframe.contentWindow.postMessage({ setProps: props2 }, "*");
      });
    };
    iframe.contentWindow.postMessage({ load: { esModule, props, css } }, "*", [channel.port2]);
  }
  function iframe_1_iframe_binding(value) {
    iframe = value;
    $$invalidate(1, iframe);
  }
  $$self.$$set = ($$props2) => {
    if ("esModule" in $$props2)
      $$invalidate(2, esModule = $$props2.esModule);
    if ("css" in $$props2)
      $$invalidate(3, css = $$props2.css);
    if ("props" in $$props2)
      $$invalidate(4, props = $$props2.props);
    if ("rendered" in $$props2)
      $$invalidate(0, rendered = $$props2.rendered);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 6) {
      if (esModule && iframe)
        handleLoad();
    }
    if ($$self.$$.dirty & 2) {
      iframe && iframe.addEventListener("load", handleLoad);
    }
    if ($$self.$$.dirty & 48) {
      if (props && setProps)
        setProps(props);
    }
  };
  return [rendered, iframe, esModule, css, props, setProps, iframe_1_iframe_binding];
}
class Gateway extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      esModule: 2,
      css: 3,
      props: 4,
      rendered: 0
    });
  }
}
const get_default_slot_changes$1 = (dirty) => ({ props: dirty & 8 });
const get_default_slot_context$1 = (ctx) => ({
  handleChange: ctx[4],
  props: ctx[3]
});
function create_else_block$1(ctx) {
  let t;
  return {
    c() {
      t = text("Log into a wallet to encrypt your data/.");
    },
    l(nodes) {
      t = claim_text(nodes, "Log into a wallet to encrypt your data/.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let span;
  let t0;
  let t1;
  let if_block_anchor;
  let current;
  let if_block = ctx[2] && create_if_block_1$2(ctx);
  return {
    c() {
      div = element("div");
      span = element("span");
      t0 = text(ctx[0]);
      t1 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, ctx[0]);
      span_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(span, "class", "bg-green-600 text-white rounded p-2 mr-2-1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span);
      append_hydration(span, t0);
      insert_hydration(target, t1, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 1)
        set_data(t0, ctx2[0]);
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching)
        detach(t1);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1$2(ctx) {
  let current;
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], get_default_slot_context$1);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1032)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, get_default_slot_changes$1), get_default_slot_context$1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$2(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { rootCID = null } = $$props;
  let { tag } = $$props;
  let { proxcryptor } = $$props;
  let { ipfsNode } = $$props;
  let { onSubmitted = () => {
  } } = $$props;
  const dispatch = createEventDispatcher();
  let joseCryptor;
  let setJoseCryptor;
  let timeoutID = null;
  let loaded;
  let decryptedData = {};
  onMount(async () => {
    const { DagJoseCryptor } = await __vitePreload(() => import("./dagjosecryptor-59e8557a.js"), true ? ["chunks/dagjosecryptor-59e8557a.js","chunks/_commonjsHelpers-9b98600b.js","chunks/cid-da67497d.js","chunks/index-64ae2edc.js","chunks/hash-2a1eb12b.js"] : void 0);
    $$invalidate(9, setJoseCryptor = async () => {
      $$invalidate(1, joseCryptor = new DagJoseCryptor(ipfsNode, proxcryptor, rootCID));
      console.log({ rootCID });
      if (!rootCID) {
        $$invalidate(2, loaded = true);
        return;
      }
      let tagNode = await getTagNode({ tag, rootCID, ipfsNode });
      console.log({ tagNode });
      if (tagNode && tagNode.hasOwnProperty("encryptedData")) {
        $$invalidate(3, decryptedData = await decrypt(tagNode));
        console.log({ decryptedData });
      }
      $$invalidate(2, loaded = true);
    });
  });
  let decrypt = async (data) => await joseCryptor.selfDecrypt(data);
  const handleChange = async function(event) {
    if (!tag || !event.detail)
      return;
    if (event.detail.hasOwnProperty("targetPublicKey"))
      setAccess(tag, event.detail.targetPublicKey);
    else if (JSON.stringify(Object.values(event.detail)[0]) != JSON.stringify(Object.values(decryptedData)[0]))
      putValue({ value: event.detail });
  };
  function putValue({ value }) {
    if (timeoutID)
      clearTimeout(timeoutID);
    timeoutID = setTimeout(async () => {
      timeoutID = false;
      let schema = "";
      console.log("Put: ", { tag, value });
      await joseCryptor.put(value, tag, schema);
      $$invalidate(1, joseCryptor);
      onSubmitted();
    }, 5e3);
  }
  function handleRootCIDUpdate() {
    console.log("Updating rootCID", { rootCID: joseCryptor.rootCID.toString() });
    dispatch("rootCID", joseCryptor.rootCID);
  }
  async function setAccess(tag2, targetPublicKey) {
    console.log(`"Setting access to ${tag2} for ${targetPublicKey}"`);
    const pubKeyBytes = validatePubKey(targetPublicKey);
    console.log({ pubKeyBytes });
    if (!pubKeyBytes)
      return new Error("Public Key not valid");
    await joseCryptor.setTagReKeys(tag2, pubKeyBytes);
    $$invalidate(1, joseCryptor);
    $$invalidate(3, decryptedData);
  }
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(5, rootCID = $$props2.rootCID);
    if ("tag" in $$props2)
      $$invalidate(0, tag = $$props2.tag);
    if ("proxcryptor" in $$props2)
      $$invalidate(6, proxcryptor = $$props2.proxcryptor);
    if ("ipfsNode" in $$props2)
      $$invalidate(7, ipfsNode = $$props2.ipfsNode);
    if ("onSubmitted" in $$props2)
      $$invalidate(8, onSubmitted = $$props2.onSubmitted);
    if ("$$scope" in $$props2)
      $$invalidate(10, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 576) {
      if (proxcryptor && setJoseCryptor)
        setJoseCryptor();
    }
    if ($$self.$$.dirty & 2) {
      if (joseCryptor && joseCryptor.rootCID && handleRootCIDUpdate)
        handleRootCIDUpdate();
    }
  };
  return [
    tag,
    joseCryptor,
    loaded,
    decryptedData,
    handleChange,
    rootCID,
    proxcryptor,
    ipfsNode,
    onSubmitted,
    setJoseCryptor,
    $$scope,
    slots
  ];
}
class Proxcryptor extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      rootCID: 5,
      tag: 0,
      proxcryptor: 6,
      ipfsNode: 7,
      onSubmitted: 8
    });
  }
}
var Thumbnail_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".active.svelte-1o2b5yq{opacity:1}")();
var Indicator_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".active.svelte-1o2b5yq{opacity:1}")();
var DropdownNavbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#mobile-menu.svelte-w89w8 .active.svelte-w89w8{color:#fab534}")();
function create_if_block_1$1(ctx) {
  let div;
  let span0;
  let t0;
  let t1;
  let span1;
  let t2;
  let t3;
  return {
    c() {
      div = element("div");
      span0 = element("span");
      t0 = text(ctx[3]);
      t1 = space();
      span1 = element("span");
      t2 = text(ctx[0]);
      t3 = text("%");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      span0 = claim_element(div_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, ctx[3]);
      span0_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      span1 = claim_element(div_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, ctx[0]);
      t3 = claim_text(span1_nodes, "%");
      span1_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "text-base font-medium text-blue-700 dark:text-white");
      attr(span1, "class", "text-sm font-medium text-blue-700 dark:text-white");
      attr(div, "class", "flex justify-between mb-1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span0);
      append_hydration(span0, t0);
      append_hydration(div, t1);
      append_hydration(div, span1);
      append_hydration(span1, t2);
      append_hydration(span1, t3);
    },
    p(ctx2, dirty) {
      if (dirty & 8)
        set_data(t0, ctx2[3]);
      if (dirty & 1)
        set_data(t2, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_else_block(ctx) {
  let div;
  let div_class_value;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = ctx[4] + " " + ctx[1] + " rounded-full");
      set_style(div, "width", ctx[0] + "%");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 18 && div_class_value !== (div_class_value = ctx2[4] + " " + ctx2[1] + " rounded-full")) {
        attr(div, "class", div_class_value);
      }
      if (dirty & 1) {
        set_style(div, "width", ctx2[0] + "%");
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_if_block$1(ctx) {
  let div;
  let t0;
  let t1;
  return {
    c() {
      div = element("div");
      t0 = text(ctx[0]);
      t1 = text("%");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, ctx[0]);
      t1 = claim_text(div_nodes, "%");
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full");
      set_style(div, "width", ctx[0] + "%");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, t1);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t0, ctx2[0]);
      if (dirty & 1) {
        set_style(div, "width", ctx2[0] + "%");
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment$1(ctx) {
  let t;
  let div;
  let div_class_value;
  let if_block0 = ctx[3] && create_if_block_1$1(ctx);
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return create_if_block$1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block1 = current_block_type(ctx);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t = space();
      div = element("div");
      if_block1.c();
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "w-full bg-gray-200 rounded-full " + ctx[1] + " dark:bg-gray-700");
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t, anchor);
      insert_hydration(target, div, anchor);
      if_block1.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (ctx2[3]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) {
        if_block1.p(ctx2, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(div, null);
        }
      }
      if (dirty & 2 && div_class_value !== (div_class_value = "w-full bg-gray-200 rounded-full " + ctx2[1] + " dark:bg-gray-700")) {
        attr(div, "class", div_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      if_block1.d();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { progress = "45" } = $$props;
  let { size = "h-2.5" } = $$props;
  let { labelInside = false } = $$props;
  let { labelOutside = "" } = $$props;
  let { color = "blue" } = $$props;
  let barColor;
  if (color === "blue") {
    barColor = "bg-blue-600";
  } else if (color === "gray") {
    barColor = "bg-gray-600 dark:bg-gray-300";
  } else if (color === "red") {
    barColor = "bg-red-600 dark:bg-red-500";
  } else if (color === "green") {
    barColor = "bg-green-600 dark:bg-green-500";
  } else if (color === "yellow") {
    barColor = "bg-yellow-400 ";
  } else if (color === "purple") {
    barColor = "bg-purple-600 dark:bg-purple-500";
  } else if (color === "indigo") {
    barColor = "bg-indigo-600 dark:bg-indigo-500";
  } else {
    barColor = "bg-blue-600 dark:bg-blue-500";
  }
  $$self.$$set = ($$props2) => {
    if ("progress" in $$props2)
      $$invalidate(0, progress = $$props2.progress);
    if ("size" in $$props2)
      $$invalidate(1, size = $$props2.size);
    if ("labelInside" in $$props2)
      $$invalidate(2, labelInside = $$props2.labelInside);
    if ("labelOutside" in $$props2)
      $$invalidate(3, labelOutside = $$props2.labelOutside);
    if ("color" in $$props2)
      $$invalidate(5, color = $$props2.color);
  };
  return [progress, size, labelInside, labelOutside, barColor, color];
}
class Progressbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      progress: 0,
      size: 1,
      labelInside: 2,
      labelOutside: 3,
      color: 5
    });
  }
}
var classnames = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const get_default_slot_changes = (dirty) => ({
  tag: dirty & 16,
  ipfsNode: dirty & 2
});
const get_default_slot_context = (ctx) => ({
  tag: ctx[4],
  ipfsNode: ctx[1]
});
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[13] = list[i];
  return child_ctx;
}
function create_if_block_3(ctx) {
  var _a;
  let t0;
  let span;
  let t1_value = ctx[0].toString().substring(0, 6) + "..." + ctx[0].toString().substring(ctx[0].toString().length - 6, (_a = ctx[0]) == null ? void 0 : _a.toString().length);
  let t1;
  let t2;
  let a0;
  let t3;
  let a0_href_value;
  let t4;
  let a1;
  let t5;
  let a1_href_value;
  return {
    c() {
      t0 = text("RootCID: ");
      span = element("span");
      t1 = text(t1_value);
      t2 = space();
      a0 = element("a");
      t3 = text("DWeb");
      t4 = text("\r\n			| ");
      a1 = element("a");
      t5 = text("Explorer");
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "RootCID: ");
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes, t1_value);
      t2 = claim_space(span_nodes);
      a0 = claim_element(span_nodes, "A", { href: true, target: true });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "DWeb");
      a0_nodes.forEach(detach);
      t4 = claim_text(span_nodes, "\r\n			| ");
      a1 = claim_element(span_nodes, "A", { href: true, target: true });
      var a1_nodes = children(a1);
      t5 = claim_text(a1_nodes, "Explorer");
      a1_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", a0_href_value = "https://dweb.link/api/v0/dag/get?arg=" + ctx[0]);
      attr(a0, "target", "_blank");
      attr(a1, "href", a1_href_value = "https://explore.ipld.io/#/explore/" + ctx[0]);
      attr(a1, "target", "_blank");
      attr(span, "class", "font-mono");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, span, anchor);
      append_hydration(span, t1);
      append_hydration(span, t2);
      append_hydration(span, a0);
      append_hydration(a0, t3);
      append_hydration(span, t4);
      append_hydration(span, a1);
      append_hydration(a1, t5);
    },
    p(ctx2, dirty) {
      var _a2;
      if (dirty & 1 && t1_value !== (t1_value = ctx2[0].toString().substring(0, 6) + "..." + ctx2[0].toString().substring(ctx2[0].toString().length - 6, (_a2 = ctx2[0]) == null ? void 0 : _a2.toString().length)))
        set_data(t1, t1_value);
      if (dirty & 1 && a0_href_value !== (a0_href_value = "https://dweb.link/api/v0/dag/get?arg=" + ctx2[0])) {
        attr(a0, "href", a0_href_value);
      }
      if (dirty & 1 && a1_href_value !== (a1_href_value = "https://explore.ipld.io/#/explore/" + ctx2[0])) {
        attr(a1, "href", a1_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let ul;
  let each_value = ctx[2];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      ul = claim_element(div_nodes, "UL", {});
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "m-4 p-2 border-slate-300 bg-slate-200 shadow-sm rounded-lg");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p(ctx2, dirty) {
      if (dirty & 20) {
        each_value = ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let div;
  let span;
  let t0_value = ctx[13][0] + "";
  let t0;
  let t1;
  let span_class_value;
  let a;
  let t2_value = ctx[13][1] + "";
  let t2;
  let a_href_value;
  let t3;
  let mounted;
  let dispose;
  function click_handler(...args) {
    return ctx[10](ctx[13], ...args);
  }
  return {
    c() {
      li = element("li");
      div = element("div");
      span = element("span");
      t0 = text(t0_value);
      t1 = text(":\r\n							");
      a = element("a");
      t2 = text(t2_value);
      t3 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      div = claim_element(li_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      span = claim_element(div_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, t0_value);
      t1 = claim_text(span_nodes, ":\r\n							");
      span_nodes.forEach(detach);
      a = claim_element(div_nodes, "A", { href: true, target: true });
      var a_nodes = children(a);
      t2 = claim_text(a_nodes, t2_value);
      a_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t3 = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", span_class_value = (ctx[4] == ctx[13][0] && "bg-green-600 text-white rounded") + " p-2 mr-6");
      attr(a, "href", a_href_value = "https://explore.ipld.io/#/explore/" + ctx[13][1]);
      attr(a, "target", "_blank");
      attr(div, "class", "my-1 py-1");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, div);
      append_hydration(div, span);
      append_hydration(span, t0);
      append_hydration(span, t1);
      append_hydration(div, a);
      append_hydration(a, t2);
      append_hydration(li, t3);
      if (!mounted) {
        dispose = listen(span, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 4 && t0_value !== (t0_value = ctx[13][0] + ""))
        set_data(t0, t0_value);
      if (dirty & 20 && span_class_value !== (span_class_value = (ctx[4] == ctx[13][0] && "bg-green-600 text-white rounded") + " p-2 mr-6")) {
        attr(span, "class", span_class_value);
      }
      if (dirty & 4 && t2_value !== (t2_value = ctx[13][1] + ""))
        set_data(t2, t2_value);
      if (dirty & 4 && a_href_value !== (a_href_value = "https://explore.ipld.io/#/explore/" + ctx[13][1])) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1(ctx) {
  let div;
  let progressbar;
  let current;
  progressbar = new Progressbar({
    props: {
      size: "h-6",
      progress: String(ctx[5].toFixed(0)),
      labelOutside: "Loading... " + ctx[5].toFixed(0) + "%"
    }
  });
  return {
    c() {
      div = element("div");
      create_component(progressbar.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(progressbar.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "p-6");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(progressbar, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const progressbar_changes = {};
      if (dirty & 32)
        progressbar_changes.progress = String(ctx2[5].toFixed(0));
      if (dirty & 32)
        progressbar_changes.labelOutside = "Loading... " + ctx2[5].toFixed(0) + "%";
      progressbar.$set(progressbar_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(progressbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(progressbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(progressbar);
    }
  };
}
function create_if_block(ctx) {
  let current;
  const default_slot_template = ctx[9].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[8], get_default_slot_context);
  return {
    c() {
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 274)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[8], !current ? get_all_dirty_from_scope(ctx2[8]) : get_slot_changes(default_slot_template, ctx2[8], dirty, get_default_slot_changes), get_default_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let div;
  let t0;
  let t1;
  let current_block_type_index;
  let if_block2;
  let if_block2_anchor;
  let current;
  let if_block0 = ctx[0] && create_if_block_3(ctx);
  let if_block1 = ctx[2] && create_if_block_2(ctx);
  const if_block_creators = [create_if_block, create_if_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[3])
      return 0;
    if (ctx2[5])
      return 1;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t0 = space();
      if (if_block1)
        if_block1.c();
      t1 = space();
      if (if_block2)
        if_block2.c();
      if_block2_anchor = empty();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t0 = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if (if_block2)
        if_block2.l(nodes);
      if_block2_anchor = empty();
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t0);
      if (if_block1)
        if_block1.m(div, null);
      insert_hydration(target, t1, anchor);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_hydration(target, if_block2_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_3(ctx2);
          if_block0.c();
          if_block0.m(div, t0);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (ctx2[2]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_2(ctx2);
          if_block1.c();
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block2) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block2 = if_blocks[current_block_type_index];
          if (!if_block2) {
            if_block2 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block2.c();
          } else {
            if_block2.p(ctx2, dirty);
          }
          transition_in(if_block2, 1);
          if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
        } else {
          if_block2 = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      if (detaching)
        detach(t1);
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
      if (detaching)
        detach(if_block2_anchor);
    }
  };
}
const ROOT_CID = "__ROOT_CID__";
function instance($$self, $$props, $$invalidate) {
  let $loader;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { rootCID = null } = $$props;
  let ipfsNode;
  let tagNodes;
  let handleRootCIDUpdate;
  let loaded;
  let selectedTag = "Profile";
  const loader = tweened(1, { duration: 45e3, easing: cubicOut });
  component_subscribe($$self, loader, (value) => $$invalidate(5, $loader = value));
  async function loadIPFS() {
    const IPFSmodule = await __vitePreload(() => import("./ipfs-core-a65b18ab.js"), true ? [] : void 0);
    const IPFS = IPFSmodule.default;
    if (globalThis.ipfsNode) {
      return;
    }
    console.log("Creating IPFS node...");
    $$invalidate(1, ipfsNode = await IPFS.create());
    globalThis.ipfsNode = ipfsNode;
    const identity2 = await globalThis.ipfsNode.id();
    identity2.id;
  }
  onMount(async () => {
    set_store_value(loader, $loader = 99, $loader);
    await loadIPFS();
    const { ImmortalDB } = await __vitePreload(() => import("./index-17ddc90e.js"), true ? [] : void 0);
    if (!rootCID) {
      const res = await ImmortalDB.get(ROOT_CID);
      if (res) {
        $$invalidate(0, rootCID = CID.asCID(res) || CID.parse(res));
      }
    }
    $$invalidate(7, handleRootCIDUpdate = async () => {
      const root = await ipfsNode.dag.get(rootCID);
      $$invalidate(2, tagNodes = Object.entries(root.value));
      $$invalidate(4, selectedTag = tagNodes.find(([tag, _]) => tag !== "prev")[0]);
      console.log("Saving rootCID", rootCID.toString());
      await ImmortalDB.set(ROOT_CID, rootCID.toString());
    });
    $$invalidate(3, loaded = true);
    return () => {
      globalThis.ipfsNode.stop();
      globalThis.ipfsNode = null;
    };
  });
  const click_handler = (tagNode, e) => $$invalidate(4, selectedTag = tagNode[0]);
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(0, rootCID = $$props2.rootCID);
    if ("$$scope" in $$props2)
      $$invalidate(8, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 131) {
      if (rootCID && ipfsNode) {
        handleRootCIDUpdate();
      }
    }
  };
  return [
    rootCID,
    ipfsNode,
    tagNodes,
    loaded,
    selectedTag,
    $loader,
    loader,
    handleRootCIDUpdate,
    $$scope,
    slots,
    click_handler
  ];
}
class IPFSManager extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { rootCID: 0 });
  }
}
export { Gateway, IPFSManager, Proxcryptor };
//# sourceMappingURL=IPFSManager-c92cb8db.js.map
