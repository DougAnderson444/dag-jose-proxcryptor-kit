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
import { SvelteComponent, init, safe_not_equal, text, claim_text, insert_hydration, detach, element, space, claim_element, children, claim_space, attr, add_render_callback, append_hydration, add_resize_listener, noop, binding_callbacks, bind, create_component, claim_component, mount_component, add_flush_callback, transition_in, transition_out, destroy_component, createEventDispatcher, empty, group_outros, check_outros, onMount, update_slot_base, get_all_dirty_from_scope, get_slot_changes, create_slot, set_data, set_style, assign, now, loop, identity, destroy_each, component_subscribe, set_store_value } from "./index-64ae2edc.js";
import { __vitePreload, writable } from "./preload-helper-ef2a18a4.js";
import { validatePubKey, CID, cubicOut } from "./cid-d85b89cf.js";
var IFrame_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".iframe-container.svelte-x34u6i{display:flex;flex:1;height:100%;width:100%;border-radius:4px}.header.svelte-x34u6i{font-weight:700;font-size:0.8rem;text-transform:uppercase;color:rgba(0, 0, 0, 0.7)}iframe.svelte-x34u6i{display:flex;flex:1;height:100%;width:100%;border:0}.iframe-inner.svelte-x34u6i{display:flex;flex:1;height:100%}")();
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
      attr(div0, "class", "header svelte-x34u6i");
      attr(iframe_1, "sandbox", "allow-scripts");
      attr(iframe_1, "title", "Rendered Component");
      attr(iframe_1, "srcdoc", ctx[1]);
      attr(iframe_1, "class", "svelte-x34u6i");
      add_render_callback(() => ctx[6].call(iframe_1));
      attr(div1, "class", "iframe-inner svelte-x34u6i");
      attr(div2, "class", "iframe-container svelte-x34u6i");
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
var srcdoc = '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<meta name="viewport" content="width=device-width,initial-scale=1" />\n		<style>\n			* {\n				margin: 0;\n				padding: 0;\n				/*  include padding and the border */\n				box-sizing: border-box;\n				/* more padding on the inside of your box, but you don\'t want the box to resize */\n				/* box-sizing: content-box; */\n			}\n\n			body {\n				margin: 0;\n				position: relative;\n			}\n		</style>\n		<script defer type="module">\n			var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function l(){return a("")}class d{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){var o;this.e||(this.is_svg?this.e=(o=e.nodeName,document.createElementNS("http://www.w3.org/2000/svg",o)):this.e=u(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)c(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(i)}}let f;function p(t){f=t}function h(){if(!f)throw new Error("Function called outside component initialization");return f}function $(){const t=h();return(e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=function(t,e,{bubbles:n=!1,cancelable:o=!1}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}(e,n,{cancelable:o});return s.slice().forEach((e=>{e.call(t,r)})),!r.defaultPrevented}return!0}}const m=[],g=[],b=[],y=[],v=Promise.resolve();let _=!1;function w(t){b.push(t)}const x=new Set;let E=0;function k(){const t=f;do{for(;E<m.length;){const t=m[E];E++,p(t),M(t.$$)}for(p(null),m.length=0,E=0;g.length;)g.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];x.has(e)||(x.add(e),e())}b.length=0}while(m.length);for(;y.length;)y.pop()();_=!1,x.clear(),p(t)}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const L=new Set;let j;function N(t,e){t&&t.i&&(L.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),j.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function R(t,n,r,c){const{fragment:i,on_mount:u,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,r),c||w((()=>{const n=u.map(e).filter(s);a?a.push(...n):o(n),t.$$.on_mount=[]})),l.forEach(w)}function T(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(m.push(t),_||(_=!0,v.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function U(e,s,r,c,u,a,l,d=[-1]){const h=f;p(e);const $=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||h.$$.root};l&&l($.root);let m=!1;if($.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=s)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](s),m&&P(e,t)),n})):[],$.update(),m=!0,o($.before_update),$.fragment=!!c&&c($.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);$.fragment&&$.fragment.l(t),t.forEach(i)}else $.fragment&&$.fragment.c();s.intro&&N(e.$$.fragment),R(e,s.target,s.anchor,s.customElement),k()}p(h)}class S{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function C(e){let n,o,s,r;return{c(){n=new d(!1),o=l(),s=a(" "),r=u("div"),n.a=o},m(t,i){n.m(e[0],document.head),function(t,e){t.appendChild(e)}(document.head,o),c(t,s,i),c(t,r,i),e[6](r)},p(t,[e]){1&e&&n.p(t[0])},i:t,o:t,d(t){i(o),t&&n.d(),t&&i(s),t&&i(r),e[6](null)}}}function H(t,e,n){let{esModule:o}=e,{props:s}=e,{css:r}=e;const c=$();let i,u,a,l;function d(t){i&&t&&i.$set({...t})}var f;return f=()=>{n(5,l=!0)},h().$$.on_mount.push(f),function(t){h().$$.on_destroy.push(t)}((()=>{i&&i.$destroy(),u&&URL.revokeObjectURL(u)})),t.$$set=t=>{"esModule"in t&&n(2,o=t.esModule),"props"in t&&n(3,s=t.props),"css"in t&&n(0,r=t.css)},t.$$.update=()=>{36&t.$$.dirty&&l&&o&&async function(){n(0,r=r?`<style>${r}</style>`:""),i&&(i.$destroy(),URL.revokeObjectURL(u));const t=new Blob([o],{type:"text/javascript"});u=URL.createObjectURL(t);const e=(await import(u)).default;if(!e||!a)return;n(1,a.innerHTML="",a),n(4,i=new e({target:a,props:{}}));const l=i.$$.props;let f={};Object.keys(l).map((t=>{f[t]=i[t]}));let p=Object.assign(f,s);c("change",p),i.$on("change",(t=>{c("change",t.detail)})),d(p)}(),24&t.$$.dirty&&i&&s&&d()},[r,a,o,s,i,l,function(t){g[t?"unshift":"push"]((()=>{a=t,n(1,a)}))}]}class q extends S{constructor(t){super(),U(this,t,H,C,r,{esModule:2,props:3,css:0})}}function A(t){let e,n;return e=new q({props:{esModule:t[0],props:t[1]}}),e.$on("change",t[3]),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){R(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.esModule=t[0]),2&n&&(o.props=t[1]),e.$set(o)},i(t){n||(N(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function B(t){let e,n,s,r,u=t[0]&&A(t);return{c(){u&&u.c(),e=l()},m(o,i){var a,l,d,f;u&&u.m(o,i),c(o,e,i),n=!0,s||(a=window,l="message",d=t[2],a.addEventListener(l,d,f),r=()=>a.removeEventListener(l,d,f),s=!0)},p(t,[n]){t[0]?u?(u.p(t,n),1&n&&N(u,1)):(u=A(t),u.c(),N(u,1),u.m(e.parentNode,e)):u&&(j={r:0,c:[],p:j},O(u,1,1,(()=>{u=null})),j.r||o(j.c),j=j.p)},i(t){n||(N(u),n=!0)},o(t){O(u),n=!1},d(t){u&&u.d(t),t&&i(e),s=!1,r()}}}function X(t,e,n){let o,s,r;return[o,s,async function(t){t?.data&&(t?.data.hasOwnProperty("load")&&(n(0,({esModule:o,props:s}=t.data.load),o,n(1,s)),r=e=>{t.ports[0].postMessage(e)}),t?.data.hasOwnProperty("setProps")&&n(1,s=t.data.setProps))},function(t){r&&t.detail&&r(t.detail)}]}globalThis.fetch=()=>(console.log("Nulled out fetch"),{json:()=>({result:"no fetch, sorry"})}),globalThis.XMLHttpRequest=class{constructor(){console.log("Nulled out XHR too")}open=()=>null;send=()=>null},globalThis.WebSocket=null,globalThis.EventSource=null;return new class extends S{constructor(t){super(),U(this,t,X,B,r,{})}}({target:document.body,props:{}})}();\n\n		<\/script>\n	</head>\n\n	<body></body>\n</html>\n';
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
const get_default_slot_changes$1 = (dirty) => ({});
const get_default_slot_context$1 = (ctx) => ({
  handleTagChange: ctx[3],
  decryptTagNode: ctx[2]
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
  let if_block_anchor;
  let current;
  let if_block = ctx[1] && create_if_block_1$2(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1$2(ctx) {
  let current;
  const default_slot_template = ctx[10].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[9], get_default_slot_context$1);
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
        if (default_slot.p && (!current || dirty & 512)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[9], !current ? get_all_dirty_from_scope(ctx2[9]) : get_slot_changes(default_slot_template, ctx2[9], dirty, get_default_slot_changes$1), get_default_slot_context$1);
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
    if (ctx2[0])
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
  let { proxcryptor } = $$props;
  let { ipfsNode } = $$props;
  let { onSubmitted = () => {
  } } = $$props;
  const dispatch = createEventDispatcher();
  let joseCryptor;
  let setJoseCryptor;
  let timeoutIDs = /* @__PURE__ */ new Map();
  let loaded;
  onMount(async () => {
    const { DagJoseCryptor } = await __vitePreload(() => import("./dagjosecryptor-ca67e286.js"), true ? ["chunks/dagjosecryptor-ca67e286.js","chunks/_commonjsHelpers-9b98600b.js","chunks/cid-d85b89cf.js","chunks/index-64ae2edc.js","chunks/hash-2a1eb12b.js"] : void 0);
    $$invalidate(8, setJoseCryptor = async () => {
      $$invalidate(0, joseCryptor = new DagJoseCryptor(ipfsNode, proxcryptor, rootCID));
      $$invalidate(1, loaded = true);
    });
  });
  let decrypt = async (tagNode) => await joseCryptor.selfDecrypt(tagNode);
  async function decryptTagNode(tag) {
    if (!rootCID || !ipfsNode || !tag)
      return;
    try {
      const cid = (await ipfsNode.dag.get(rootCID, { path: `/${tag}`, localResolve: true })).value;
      let tagNode = (await ipfsNode.dag.get(cid, { localResolve: true })).value;
      return await decrypt(tagNode);
    } catch (error) {
      console.warn(`${tag} no DAG data`);
    }
  }
  const handleTagChange = async function(event) {
    if (!event.detail.tag && event.detail.contacts)
      dispatch("loadContacts", event.detail.contacts);
    let invalid = !event.detail || !event.detail.tag || !event.detail.props && !event.detail.targetPublicKey;
    if (invalid)
      return;
    if (event.detail.hasOwnProperty("targetPublicKey"))
      setAccess(event.detail.tag, event.detail.targetPublicKey);
    else if (event.detail.hasOwnProperty("tag") && event.detail.hasOwnProperty("props"))
      putValue({
        tag: event.detail.tag,
        value: event.detail.props
      });
    if (event.detail.tag === "Contacts") {
      dispatch("updateContacts", event.detail.props.props);
    }
  };
  function putValue({ tag, value }) {
    if (timeoutIDs.has(tag))
      clearTimeout(timeoutIDs.get(tag));
    timeoutIDs.set(tag, setTimeout(async () => {
      timeoutIDs.delete(tag);
      let schema = "";
      console.log("Put: ", { tag, value });
      await joseCryptor.put(value, tag, schema);
      $$invalidate(0, joseCryptor);
      onSubmitted();
    }, 5e3));
  }
  function handleRootCIDUpdate() {
    dispatch("rootCID", joseCryptor.rootCID);
  }
  async function setAccess(tag, targetPublicKey) {
    console.log(`"Setting access to ${tag} for ${targetPublicKey}"`);
    const pubKeyBytes = validatePubKey(targetPublicKey);
    console.log({ pubKeyBytes });
    if (!pubKeyBytes)
      return new Error("Public Key not valid");
    await joseCryptor.setTagReKeys(tag, pubKeyBytes);
    $$invalidate(0, joseCryptor);
  }
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(4, rootCID = $$props2.rootCID);
    if ("proxcryptor" in $$props2)
      $$invalidate(5, proxcryptor = $$props2.proxcryptor);
    if ("ipfsNode" in $$props2)
      $$invalidate(6, ipfsNode = $$props2.ipfsNode);
    if ("onSubmitted" in $$props2)
      $$invalidate(7, onSubmitted = $$props2.onSubmitted);
    if ("$$scope" in $$props2)
      $$invalidate(9, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 288) {
      if (proxcryptor && setJoseCryptor)
        setJoseCryptor();
    }
    if ($$self.$$.dirty & 1) {
      if (joseCryptor && joseCryptor.rootCID && handleRootCIDUpdate)
        handleRootCIDUpdate();
    }
  };
  return [
    joseCryptor,
    loaded,
    decryptTagNode,
    handleTagChange,
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
      rootCID: 4,
      proxcryptor: 5,
      ipfsNode: 6,
      onSubmitted: 7
    });
  }
}
var Thumbnail_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".active.svelte-p2e6ba{opacity:1}")();
var Indicator_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".active.svelte-p2e6ba{opacity:1}")();
var DropdownNavbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "#mobile-menu.svelte-1qvc76k .active.svelte-1qvc76k{color:#fab534}")();
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
  tagNodes: dirty & 4,
  ipfsNode: dirty & 2
});
const get_default_slot_context = (ctx) => ({
  tagNodes: ctx[2],
  ipfsNode: ctx[1]
});
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i][0];
  child_ctx[12] = list[i][1];
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
  let each_value = [...Object.entries(ctx[2])];
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
      if (dirty & 4) {
        each_value = [...Object.entries(ctx2[2])];
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
  let t0_value = ctx[11] + "";
  let t0;
  let t1;
  let a;
  let t2_value = ctx[12] + "";
  let t2;
  let a_href_value;
  let t3;
  return {
    c() {
      li = element("li");
      div = element("div");
      span = element("span");
      t0 = text(t0_value);
      t1 = text(": ");
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
      t1 = claim_text(span_nodes, ": ");
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
      attr(span, "class", "bg-green-600 text-white rounded p-2 mr-6");
      attr(a, "href", a_href_value = "https://explore.ipld.io/#/explore/" + ctx[12]);
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
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t0_value !== (t0_value = ctx2[11] + ""))
        set_data(t0, t0_value);
      if (dirty & 4 && t2_value !== (t2_value = ctx2[12] + ""))
        set_data(t2, t2_value);
      if (dirty & 4 && a_href_value !== (a_href_value = "https://explore.ipld.io/#/explore/" + ctx2[12])) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
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
      progress: String(ctx[4].toFixed(0)),
      labelOutside: "Loading... " + ctx[4].toFixed(0) + "%"
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
      if (dirty & 16)
        progressbar_changes.progress = String(ctx2[4].toFixed(0));
      if (dirty & 16)
        progressbar_changes.labelOutside = "Loading... " + ctx2[4].toFixed(0) + "%";
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
  const default_slot_template = ctx[8].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[7], get_default_slot_context);
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
        if (default_slot.p && (!current || dirty & 134)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, get_default_slot_changes), get_default_slot_context);
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
    if (ctx2[4])
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
  let start = Date.now();
  const loader = tweened(1, { duration: 45e3, easing: cubicOut });
  component_subscribe($$self, loader, (value) => $$invalidate(4, $loader = value));
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
    let nodeId = identity2.id;
    console.info("NodeId", nodeId, `Loaded in ${(Date.now() - start) / 1e3}s`);
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
    $$invalidate(6, handleRootCIDUpdate = async () => {
      if (!rootCID || !CID.isCID(rootCID))
        return;
      const root = await ipfsNode.dag.get(rootCID);
      $$invalidate(2, tagNodes = root.value);
      await ImmortalDB.set(ROOT_CID, rootCID.toString());
    });
    $$invalidate(3, loaded = true);
    return () => {
      globalThis.ipfsNode.stop();
      globalThis.ipfsNode = null;
    };
  });
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(0, rootCID = $$props2.rootCID);
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 67) {
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
    $loader,
    loader,
    handleRootCIDUpdate,
    $$scope,
    slots
  ];
}
class IPFSManager extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { rootCID: 0 });
  }
}
export { Gateway, IPFSManager, Proxcryptor };
//# sourceMappingURL=IPFSManager-fbe22ba3.js.map
