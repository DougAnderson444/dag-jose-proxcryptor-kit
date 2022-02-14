import { SvelteComponent, init, safe_not_equal, create_slot, HtmlTagHydration, empty, claim_html_tag, insert_hydration, detach, element, text, space, claim_element, children, claim_text, claim_space, attr, append_hydration, listen, prevent_default, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, add_render_callback, create_bidirectional_transition, quintOut, slide, transition_out, createEventDispatcher, set_input_value, getContext, base64Js, bs58, group_outros, check_outros, handle_promise, update_await_block_branch, noop, set_data, destroy_each, onMount, writable, component_subscribe, create_component, claim_component, mount_component, destroy_component, query_selector_all, binding_callbacks, bind, add_flush_callback, fade, browser, svg_element, claim_svg_element, toggle_class, run_all, tick, set_store_value, Scanner, select_option, select_value, is_function } from "./vendor-87cb2300.js";
import { __vitePreload, router } from "./singletons-f3a0af73.js";
function fallback_block$2(ctx) {
  let textarea;
  let mounted;
  let dispose;
  return {
    c() {
      textarea = element("textarea");
    },
    l(nodes) {
      textarea = claim_element(nodes, "TEXTAREA", {});
      children(textarea).forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, textarea, anchor);
      set_input_value(textarea, ctx[1]);
      if (!mounted) {
        dispose = listen(textarea, "input", ctx[6]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 2) {
        set_input_value(textarea, ctx2[1]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(textarea);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$d(ctx) {
  let html_tag;
  let raw_value = JSON.stringify(ctx[0], null, 2) + "";
  let html_anchor;
  return {
    c() {
      html_tag = new HtmlTagHydration();
      html_anchor = empty();
      this.h();
    },
    l(nodes) {
      html_tag = claim_html_tag(nodes);
      html_anchor = empty();
      this.h();
    },
    h() {
      html_tag.a = html_anchor;
    },
    m(target, anchor) {
      html_tag.m(raw_value, target, anchor);
      insert_hydration(target, html_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && raw_value !== (raw_value = JSON.stringify(ctx2[0], null, 2) + ""))
        html_tag.p(raw_value);
    },
    d(detaching) {
      if (detaching)
        detach(html_anchor);
      if (detaching)
        html_tag.d();
    }
  };
}
function create_fragment$h(ctx) {
  let div1;
  let h3;
  let t0;
  let t1;
  let t2;
  let div0;
  let button;
  let t3;
  let div1_transition;
  let t4;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], null);
  const default_slot_or_fallback = default_slot || fallback_block$2(ctx);
  let if_block = ctx[0] && create_if_block$d(ctx);
  return {
    c() {
      div1 = element("div");
      h3 = element("h3");
      t0 = text(tag$1);
      t1 = space();
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      t2 = space();
      div0 = element("div");
      button = element("button");
      t3 = text("Post");
      t4 = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      h3 = claim_element(div1_nodes, "H3", {});
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, tag$1);
      h3_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(div1_nodes);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", {});
      var button_nodes = children(button);
      t3 = claim_text(button_nodes, "Post");
      button_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t4 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(div0, "class", "submit");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, h3);
      append_hydration(h3, t0);
      append_hydration(div1, t1);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(div1, null);
      }
      append_hydration(div1, t2);
      append_hydration(div1, div0);
      append_hydration(div0, button);
      append_hydration(button, t3);
      insert_hydration(target, t4, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", prevent_default(ctx[7]));
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16)) {
          update_slot_base(default_slot, default_slot_template, ctx, ctx[4], !current ? get_all_dirty_from_scope(ctx[4]) : get_slot_changes(default_slot_template, ctx[4], dirty, null), null);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 2)) {
          default_slot_or_fallback.p(ctx, !current ? -1 : dirty);
        }
      }
      if (ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$d(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      add_render_callback(() => {
        if (!div1_transition)
          div1_transition = create_bidirectional_transition(div1, slide, {
            delay: 100,
            duration: 400,
            easing: quintOut
          }, true);
        div1_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      if (!div1_transition)
        div1_transition = create_bidirectional_transition(div1, slide, {
          delay: 100,
          duration: 400,
          easing: quintOut
        }, false);
      div1_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      if (detaching && div1_transition)
        div1_transition.end();
      if (detaching)
        detach(t4);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
const tag$1 = "Profile";
function instance$h($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { decryptedData } = $$props;
  const dispatch = createEventDispatcher();
  let schema;
  let value;
  function textarea_input_handler() {
    value = this.value;
    $$invalidate(1, value);
  }
  const click_handler = () => dispatch("handleSubmit", { tag: tag$1, data: { value, schema } });
  $$self.$$set = ($$props2) => {
    if ("decryptedData" in $$props2)
      $$invalidate(0, decryptedData = $$props2.decryptedData);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [
    decryptedData,
    value,
    dispatch,
    schema,
    $$scope,
    slots,
    textarea_input_handler,
    click_handler
  ];
}
class Profile extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$h, safe_not_equal, { decryptedData: 0 });
  }
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const PUBLIC_KEY_BYTES = 32;
const LUT_HEX_4b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const LUT_HEX_8b = new Array(256);
for (let n = 0; n < 256; n++) {
  LUT_HEX_8b[n] = `${LUT_HEX_4b[n >>> 4 & 15]}${LUT_HEX_4b[n & 15]}`;
}
function bufftoHex(buffer) {
  let out = "";
  for (let idx = 0, edx = buffer.length; idx < edx; idx++) {
    out += LUT_HEX_8b[buffer[idx]];
  }
  return out;
}
function validatePubKey(pubKey) {
  if (!pubKey)
    return;
  let pubKeyBytes = base64Js.toByteArray(pubKey);
  if (pubKeyBytes.length === PUBLIC_KEY_BYTES) {
    return pubKeyBytes;
  }
  try {
    let b58Bytes = bs58.decode(pubKey);
    if (b58Bytes.length === PUBLIC_KEY_BYTES) {
      return b58Bytes;
    }
  } catch (error) {
  }
  const fromHexString = (hexString) => new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
  let hexb58Bytes = fromHexString(pubKey);
  if (hexb58Bytes.length === PUBLIC_KEY_BYTES) {
    return hexb58Bytes;
  }
  return false;
}
async function hexDigestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
var ContactCard_svelte_svelte_type_style_lang = "";
const get_latest_slot_changes = (dirty) => ({});
const get_latest_slot_context = (ctx) => ({});
const get_publicKey_slot_changes = (dirty) => ({});
const get_publicKey_slot_context = (ctx) => ({});
const get_handle_slot_changes = (dirty) => ({});
const get_handle_slot_context = (ctx) => ({});
function fallback_block_2(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("Unknown handle");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Unknown handle");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "missing svelte-rrgue8");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function fallback_block_1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("Unknown publicKey");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Unknown publicKey");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "missing svelte-rrgue8");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function fallback_block$1(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("Unknown latest value");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Unknown latest value");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "missing svelte-rrgue8");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$g(ctx) {
  let article;
  let h2;
  let t0;
  let div0;
  let t1;
  let div1;
  let current;
  const handle_slot_template = ctx[1].handle;
  const handle_slot = create_slot(handle_slot_template, ctx, ctx[0], get_handle_slot_context);
  const handle_slot_or_fallback = handle_slot || fallback_block_2();
  const publicKey_slot_template = ctx[1].publicKey;
  const publicKey_slot = create_slot(publicKey_slot_template, ctx, ctx[0], get_publicKey_slot_context);
  const publicKey_slot_or_fallback = publicKey_slot || fallback_block_1();
  const latest_slot_template = ctx[1].latest;
  const latest_slot = create_slot(latest_slot_template, ctx, ctx[0], get_latest_slot_context);
  const latest_slot_or_fallback = latest_slot || fallback_block$1();
  return {
    c() {
      article = element("article");
      h2 = element("h2");
      if (handle_slot_or_fallback)
        handle_slot_or_fallback.c();
      t0 = space();
      div0 = element("div");
      if (publicKey_slot_or_fallback)
        publicKey_slot_or_fallback.c();
      t1 = space();
      div1 = element("div");
      if (latest_slot_or_fallback)
        latest_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      article = claim_element(nodes, "ARTICLE", { class: true });
      var article_nodes = children(article);
      h2 = claim_element(article_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      if (handle_slot_or_fallback)
        handle_slot_or_fallback.l(h2_nodes);
      h2_nodes.forEach(detach);
      t0 = claim_space(article_nodes);
      div0 = claim_element(article_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (publicKey_slot_or_fallback)
        publicKey_slot_or_fallback.l(div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(article_nodes);
      div1 = claim_element(article_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if (latest_slot_or_fallback)
        latest_slot_or_fallback.l(div1_nodes);
      div1_nodes.forEach(detach);
      article_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "svelte-rrgue8");
      attr(div0, "class", "address svelte-rrgue8");
      attr(div1, "class", "email svelte-rrgue8");
      attr(article, "class", "contact-card svelte-rrgue8");
    },
    m(target, anchor) {
      insert_hydration(target, article, anchor);
      append_hydration(article, h2);
      if (handle_slot_or_fallback) {
        handle_slot_or_fallback.m(h2, null);
      }
      append_hydration(article, t0);
      append_hydration(article, div0);
      if (publicKey_slot_or_fallback) {
        publicKey_slot_or_fallback.m(div0, null);
      }
      append_hydration(article, t1);
      append_hydration(article, div1);
      if (latest_slot_or_fallback) {
        latest_slot_or_fallback.m(div1, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (handle_slot) {
        if (handle_slot.p && (!current || dirty & 1)) {
          update_slot_base(handle_slot, handle_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(handle_slot_template, ctx2[0], dirty, get_handle_slot_changes), get_handle_slot_context);
        }
      }
      if (publicKey_slot) {
        if (publicKey_slot.p && (!current || dirty & 1)) {
          update_slot_base(publicKey_slot, publicKey_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(publicKey_slot_template, ctx2[0], dirty, get_publicKey_slot_changes), get_publicKey_slot_context);
        }
      }
      if (latest_slot) {
        if (latest_slot.p && (!current || dirty & 1)) {
          update_slot_base(latest_slot, latest_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(latest_slot_template, ctx2[0], dirty, get_latest_slot_changes), get_latest_slot_context);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(handle_slot_or_fallback, local);
      transition_in(publicKey_slot_or_fallback, local);
      transition_in(latest_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(handle_slot_or_fallback, local);
      transition_out(publicKey_slot_or_fallback, local);
      transition_out(latest_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(article);
      if (handle_slot_or_fallback)
        handle_slot_or_fallback.d(detaching);
      if (publicKey_slot_or_fallback)
        publicKey_slot_or_fallback.d(detaching);
      if (latest_slot_or_fallback)
        latest_slot_or_fallback.d(detaching);
    }
  };
}
function instance$g($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class ContactCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$g, safe_not_equal, {});
  }
}
const get_default_slot_changes$3 = (dirty) => ({ latestHypns: dirty & 1 });
const get_default_slot_context$3 = (ctx) => ({ latestHypns: ctx[0] });
function create_else_block$6(ctx) {
  let await_block_anchor;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: true,
    pending: create_pending_block$5,
    then: create_then_block$5,
    catch: create_catch_block$5,
    error: 9,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[1], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 2 && promise !== (promise = ctx[1]) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_if_block$c(ctx) {
  let t;
  return {
    c() {
      t = text("Loading hypnsInstance...");
    },
    l(nodes) {
      t = claim_text(nodes, "Loading hypnsInstance...");
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
function create_catch_block$5(ctx) {
  let t;
  return {
    c() {
      t = text("Problem connecting to Pipernet");
    },
    l(nodes) {
      t = claim_text(nodes, "Problem connecting to Pipernet");
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
function create_then_block$5(ctx) {
  let h3;
  let t0;
  let t1;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1$4, create_else_block_1$2];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[0])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      h3 = element("h3");
      t0 = text("\u2714\uFE0F Connected to PiperNet");
      t1 = space();
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      h3 = claim_element(nodes, "H3", {});
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "\u2714\uFE0F Connected to PiperNet");
      h3_nodes.forEach(detach);
      t1 = claim_space(nodes);
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      insert_hydration(target, h3, anchor);
      append_hydration(h3, t0);
      insert_hydration(target, t1, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
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
      if (detaching)
        detach(h3);
      if (detaching)
        detach(t1);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_else_block_1$2(ctx) {
  let t;
  return {
    c() {
      t = text("\u26A0\uFE0F No latest value available.");
    },
    l(nodes) {
      t = claim_text(nodes, "\u26A0\uFE0F No latest value available.");
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
function create_if_block_1$4(ctx) {
  let t0;
  let t1;
  let t2;
  let current;
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], get_default_slot_context$3);
  return {
    c() {
      t0 = text("\u2714\uFE0F Lastest Saved Root: ");
      t1 = text(ctx[0]);
      t2 = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      t0 = claim_text(nodes, "\u2714\uFE0F Lastest Saved Root: ");
      t1 = claim_text(nodes, ctx[0]);
      t2 = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 1)
        set_data(t1, ctx2[0]);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 17)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, get_default_slot_changes$3), get_default_slot_context$3);
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
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_pending_block$5(ctx) {
  let t;
  return {
    c() {
      t = text("Getting instance ready...");
    },
    l(nodes) {
      t = claim_text(nodes, "Getting instance ready...");
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
function create_fragment$f(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$c, create_else_block$6];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[1])
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
function instance$f($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { pubKey } = $$props;
  let { openHypns } = $$props;
  const dispatch = createEventDispatcher();
  let latestHypns;
  let hypnsInstance;
  async function handleOpen(pubKey2) {
    let publicKeyHex = bufftoHex(pubKey2);
    const onUpdate = (val) => {
      console.log("Update from ", { hypnsInstance });
      $$invalidate(0, latestHypns = val.ipld);
    };
    const onMessage = (msg) => {
      dispatch("newContact", msg);
    };
    $$invalidate(1, hypnsInstance = await openHypns({
      pubKeyHex: publicKeyHex,
      onUpdate,
      onMessage
    }));
    $$invalidate(0, latestHypns = hypnsInstance.latest);
  }
  $$self.$$set = ($$props2) => {
    if ("pubKey" in $$props2)
      $$invalidate(2, pubKey = $$props2.pubKey);
    if ("openHypns" in $$props2)
      $$invalidate(3, openHypns = $$props2.openHypns);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 12) {
      if (!!pubKey && openHypns)
        handleOpen(pubKey);
    }
  };
  return [latestHypns, hypnsInstance, pubKey, openHypns, $$scope, slots];
}
class PiperNet extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$f, safe_not_equal, { pubKey: 2, openHypns: 3 });
  }
}
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
const get_default_slot_changes$2 = (dirty) => ({ tagNode: dirty & 1 });
const get_default_slot_context$2 = (ctx) => ({ tagNode: ctx[6] });
function create_if_block$b(ctx) {
  let await_block_anchor;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$4,
    then: create_then_block$4,
    catch: create_catch_block$4,
    value: 0,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[0], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 1 && promise !== (promise = ctx[0]) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_catch_block$4(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$4(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 9) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$2(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$2(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block$2(ctx) {
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], get_default_slot_context$2);
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
        if (default_slot.p && (!current || dirty & 9)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, get_default_slot_changes$2), get_default_slot_context$2);
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
function create_pending_block$4(ctx) {
  let t;
  return {
    c() {
      t = text("Loading tags");
    },
    l(nodes) {
      t = claim_text(nodes, "Loading tags");
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
function create_fragment$e(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block$b(ctx);
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
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$b(ctx2);
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
function instance$e($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { rootCID } = $$props;
  let { getTagNodes } = $$props;
  let tagNodes;
  async function processRootCID() {
    $$invalidate(0, tagNodes = await getTagNodes(rootCID));
  }
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(1, rootCID = $$props2.rootCID);
    if ("getTagNodes" in $$props2)
      $$invalidate(2, getTagNodes = $$props2.getTagNodes);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      rootCID && processRootCID();
    }
  };
  return [tagNodes, rootCID, getTagNodes, $$scope, slots];
}
class GetTags extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { rootCID: 1, getTagNodes: 2 });
  }
}
function create_else_block$5(ctx) {
  let t0;
  let t1;
  return {
    c() {
      t0 = text("\u2716\uFE0F You have no access to ");
      t1 = text(ctx[0]);
    },
    l(nodes) {
      t0 = claim_text(nodes, "\u2716\uFE0F You have no access to ");
      t1 = claim_text(nodes, ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t1, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_if_block$a(ctx) {
  let t0;
  let t1;
  return {
    c() {
      t0 = text("\u2714\uFE0F You have has access to their ");
      t1 = text(ctx[0]);
    },
    l(nodes) {
      t0 = claim_text(nodes, "\u2714\uFE0F You have has access to their ");
      t1 = claim_text(nodes, ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t1, ctx2[0]);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_fragment$d(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (ctx2[2] && ctx2[1])
      return create_if_block$a;
    return create_else_block$5;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  let { tag: tag2 } = $$props;
  let { pubKey } = $$props;
  let { checkAccess } = $$props;
  let accessCode;
  let checked;
  async function doCheck() {
    console.log(`Checking access to ${tag2} for `, { pubKey });
    $$invalidate(1, accessCode = await checkAccess(tag2, pubKey));
    $$invalidate(2, checked = true);
  }
  onMount(async () => {
  });
  $$self.$$set = ($$props2) => {
    if ("tag" in $$props2)
      $$invalidate(0, tag2 = $$props2.tag);
    if ("pubKey" in $$props2)
      $$invalidate(3, pubKey = $$props2.pubKey);
    if ("checkAccess" in $$props2)
      $$invalidate(4, checkAccess = $$props2.checkAccess);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 9) {
      if (!!tag2 && !!pubKey)
        doCheck();
    }
  };
  return [tag2, accessCode, checked, pubKey, checkAccess];
}
class TagAccess extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, { tag: 0, pubKey: 3, checkAccess: 4 });
  }
}
function create_if_block_2$2(ctx) {
  let t0;
  let t1;
  return {
    c() {
      t0 = text("\u2716\uFE0F No matches for ");
      t1 = text(ctx[1]);
    },
    l(nodes) {
      t0 = claim_text(nodes, "\u2716\uFE0F No matches for ");
      t1 = claim_text(nodes, ctx[1]);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t1, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_if_block_1$3(ctx) {
  let t0;
  let t1_value = ctx[2].handle + "";
  let t1;
  let t2;
  let button;
  let t3;
  let mounted;
  let dispose;
  return {
    c() {
      t0 = text("\u2714\uFE0F Matched ");
      t1 = text(t1_value);
      t2 = space();
      button = element("button");
      t3 = text("Grant Access");
    },
    l(nodes) {
      t0 = claim_text(nodes, "\u2714\uFE0F Matched ");
      t1 = claim_text(nodes, t1_value);
      t2 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", {});
      var button_nodes = children(button);
      t3 = claim_text(button_nodes, "Grant Access");
      button_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, t3);
      if (!mounted) {
        dispose = listen(button, "click", ctx[4]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 4 && t1_value !== (t1_value = ctx2[2].handle + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$9(ctx) {
  let await_block_anchor;
  let promise;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$3,
    then: create_then_block$3,
    catch: create_catch_block$3,
    value: 9
  };
  handle_promise(promise = ctx[3], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 8 && promise !== (promise = ctx[3]) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_catch_block$3(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    d: noop
  };
}
function create_then_block$3(ctx) {
  let t0;
  let t1;
  return {
    c() {
      t0 = text("Access Granted to ");
      t1 = text(ctx[1]);
    },
    l(nodes) {
      t0 = claim_text(nodes, "Access Granted to ");
      t1 = claim_text(nodes, ctx[1]);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 2)
        set_data(t1, ctx2[1]);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_pending_block$3(ctx) {
  let t;
  return {
    c() {
      t = text("Granting access...");
    },
    l(nodes) {
      t = claim_text(nodes, "Granting access...");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$c(ctx) {
  let div1;
  let t0;
  let t1;
  let t2;
  let input;
  let t3;
  let div0;
  let t4;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return create_if_block_1$3;
    if (ctx2[1])
      return create_if_block_2$2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type && current_block_type(ctx);
  let if_block1 = ctx[3] && create_if_block$9(ctx);
  return {
    c() {
      div1 = element("div");
      t0 = text("Share ");
      t1 = text(ctx[0]);
      t2 = text(" With: ");
      input = element("input");
      t3 = space();
      div0 = element("div");
      if (if_block0)
        if_block0.c();
      t4 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      t0 = claim_text(div1_nodes, "Share ");
      t1 = claim_text(div1_nodes, ctx[0]);
      t2 = claim_text(div1_nodes, " With: ");
      input = claim_element(div1_nodes, "INPUT", { placeholder: true });
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (if_block0)
        if_block0.l(div0_nodes);
      div0_nodes.forEach(detach);
      t4 = claim_space(div1_nodes);
      if (if_block1)
        if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "placeholder", "Enter Handle or Public Key");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, t0);
      append_hydration(div1, t1);
      append_hydration(div1, t2);
      append_hydration(div1, input);
      set_input_value(input, ctx[1]);
      append_hydration(div1, t3);
      append_hydration(div1, div0);
      if (if_block0)
        if_block0.m(div0, null);
      append_hydration(div1, t4);
      if (if_block1)
        if_block1.m(div1, null);
      if (!mounted) {
        dispose = listen(input, "input", ctx[7]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 1)
        set_data(t1, ctx2[0]);
      if (dirty & 2 && input.value !== ctx2[1]) {
        set_input_value(input, ctx2[1]);
      }
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block0) {
        if_block0.p(ctx2, dirty);
      } else {
        if (if_block0)
          if_block0.d(1);
        if_block0 = current_block_type && current_block_type(ctx2);
        if (if_block0) {
          if_block0.c();
          if_block0.m(div0, null);
        }
      }
      if (ctx2[3]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$9(ctx2);
          if_block1.c();
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div1);
      if (if_block0) {
        if_block0.d();
      }
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function instance$c($$self, $$props, $$invalidate) {
  let { tag: tag2 } = $$props;
  let { setAccess } = $$props;
  let { contacts: contacts2 } = $$props;
  let target;
  let value;
  let promiseToAllow;
  function handleGrantAccess(_event) {
    $$invalidate(3, promiseToAllow = setAccess(tag2, target.pubKey));
  }
  function input_input_handler() {
    value = this.value;
    $$invalidate(1, value);
  }
  $$self.$$set = ($$props2) => {
    if ("tag" in $$props2)
      $$invalidate(0, tag2 = $$props2.tag);
    if ("setAccess" in $$props2)
      $$invalidate(5, setAccess = $$props2.setAccess);
    if ("contacts" in $$props2)
      $$invalidate(6, contacts2 = $$props2.contacts);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 66) {
      if (value && contacts2 && contacts2.length) {
        console.log({ contacts: contacts2 });
        let match = contacts2 == null ? void 0 : contacts2.find((contact) => contact.handle === value);
        $$invalidate(2, target = match || null);
      }
    }
  };
  return [
    tag2,
    value,
    target,
    promiseToAllow,
    handleGrantAccess,
    setAccess,
    contacts2,
    input_input_handler
  ];
}
class ShareTagWith extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { tag: 0, setAccess: 5, contacts: 6 });
  }
}
var _Contacts_svelte_svelte_type_style_lang = "";
function create_if_block$8(ctx) {
  let t0;
  let a;
  let t1;
  let a_href_value;
  let t2;
  let br;
  return {
    c() {
      t0 = text("\u2714\uFE0F IPLD Data Saved to: ");
      a = element("a");
      t1 = text(ctx[0]);
      t2 = space();
      br = element("br");
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, "\u2714\uFE0F IPLD Data Saved to: ");
      a = claim_element(nodes, "A", { href: true, target: true });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, ctx[0]);
      a_nodes.forEach(detach);
      t2 = claim_space(nodes);
      br = claim_element(nodes, "BR", {});
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = "https://dweb.link/api/v0/dag/get?arg=" + ctx[0]);
      attr(a, "target", "_blank");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, a, anchor);
      append_hydration(a, t1);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, br, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t1, ctx2[0]);
      if (dirty & 1 && a_href_value !== (a_href_value = "https://dweb.link/api/v0/dag/get?arg=" + ctx2[0])) {
        attr(a, "href", a_href_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(a);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(br);
    }
  };
}
function create_fragment$b(ctx) {
  let if_block_anchor;
  let if_block = ctx[0] && create_if_block$8(ctx);
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
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block$8(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  let { rootCID } = $$props;
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(0, rootCID = $$props2.rootCID);
  };
  return [rootCID];
}
class ShowRoot extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { rootCID: 0 });
  }
}
const contacts = writable([]);
const get_default_slot_changes_1 = (dirty) => ({});
const get_default_slot_context_1 = (ctx) => ({ decryptedData: null });
const get_default_slot_changes$1 = (dirty) => ({
  decryptedData: dirty & 32
});
const get_default_slot_context$1 = (ctx) => ({ decryptedData: ctx[5] });
function create_else_block$4(ctx) {
  let current;
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[11], get_default_slot_context_1);
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
        if (default_slot.p && (!current || dirty & 2048)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(default_slot_template, ctx2[11], dirty, get_default_slot_changes_1), get_default_slot_context_1);
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
function create_if_block$7(ctx) {
  let await_block_anchor;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$2,
    then: create_then_block$2,
    catch: create_catch_block$2,
    value: 5,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[5], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 32 && promise !== (promise = ctx[5]) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_catch_block$2(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$2(ctx) {
  let sharetagwith;
  let t;
  let current;
  sharetagwith = new ShareTagWith({
    props: {
      tag: ctx[0],
      setAccess: ctx[1],
      contacts: ctx[4]
    }
  });
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[11], get_default_slot_context$1);
  return {
    c() {
      create_component(sharetagwith.$$.fragment);
      t = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      claim_component(sharetagwith.$$.fragment, nodes);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      mount_component(sharetagwith, target, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      const sharetagwith_changes = {};
      if (dirty & 1)
        sharetagwith_changes.tag = ctx2[0];
      if (dirty & 2)
        sharetagwith_changes.setAccess = ctx2[1];
      if (dirty & 16)
        sharetagwith_changes.contacts = ctx2[4];
      sharetagwith.$set(sharetagwith_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2080)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(default_slot_template, ctx2[11], dirty, get_default_slot_changes$1), get_default_slot_context$1);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(sharetagwith.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(sharetagwith.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(sharetagwith, detaching);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_pending_block$2(ctx) {
  let t;
  return {
    c() {
      t = text("Decrypting...");
    },
    l(nodes) {
      t = claim_text(nodes, "Decrypting...");
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
function create_fragment$a(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$7, create_else_block$4];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[3] && ctx2[2] && ctx2[5])
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
function instance$a($$self, $$props, $$invalidate) {
  let $contacts;
  component_subscribe($$self, contacts, ($$value) => $$invalidate(4, $contacts = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { getTagNode } = $$props;
  let { decrypt } = $$props;
  let { tag: tag2 } = $$props;
  let { rootCID } = $$props;
  let { setAccess } = $$props;
  let tagNode;
  let decryptedData = [];
  let currentRoodCID;
  let ready;
  async function refreshedRootCID() {
    $$invalidate(3, ready = false);
    $$invalidate(10, currentRoodCID = rootCID);
    $$invalidate(2, tagNode = await getTagNode(tag2));
    if (tagNode && tagNode.hasOwnProperty("encryptedData"))
      $$invalidate(5, decryptedData = await decrypt(tagNode));
    $$invalidate(3, ready = true);
  }
  $$self.$$set = ($$props2) => {
    if ("getTagNode" in $$props2)
      $$invalidate(6, getTagNode = $$props2.getTagNode);
    if ("decrypt" in $$props2)
      $$invalidate(7, decrypt = $$props2.decrypt);
    if ("tag" in $$props2)
      $$invalidate(0, tag2 = $$props2.tag);
    if ("rootCID" in $$props2)
      $$invalidate(8, rootCID = $$props2.rootCID);
    if ("setAccess" in $$props2)
      $$invalidate(1, setAccess = $$props2.setAccess);
    if ("$$scope" in $$props2)
      $$invalidate(11, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1281) {
      if (tag2 || rootCID && currentRoodCID !== rootCID)
        refreshedRootCID();
    }
  };
  return [
    tag2,
    setAccess,
    tagNode,
    ready,
    $contacts,
    decryptedData,
    getTagNode,
    decrypt,
    rootCID,
    refreshedRootCID,
    currentRoodCID,
    $$scope,
    slots
  ];
}
class Common extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$a, safe_not_equal, {
      getTagNode: 6,
      decrypt: 7,
      tag: 0,
      rootCID: 8,
      setAccess: 1,
      refreshedRootCID: 9
    });
  }
  get refreshedRootCID() {
    return this.$$.ctx[9];
  }
}
var DAGJose_svelte_svelte_type_style_lang = "";
const get_default_slot_changes = (dirty) => ({
  decryptedData: dirty & 4194304,
  getTagNodes: dirty & 128,
  checkAccess: dirty & 64,
  setAccess: dirty & 32,
  decryptFromTagNode: dirty & 16
});
const get_default_slot_context = (ctx) => ({
  handleSubmit: ctx[10],
  decryptedData: ctx[22],
  getTagNodes: ctx[7],
  checkAccess: ctx[6],
  setAccess: ctx[5],
  decryptFromTagNode: ctx[4]
});
function create_else_block$3(ctx) {
  let t;
  return {
    c() {
      t = text("Connect with the Wallet to save encrypted messages.");
    },
    l(nodes) {
      t = claim_text(nodes, "Connect with the Wallet to save encrypted messages.");
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
function create_if_block$6(ctx) {
  let div;
  let showroot;
  let t;
  let common;
  let updating_refreshedRootCID;
  let current;
  showroot = new ShowRoot({ props: { rootCID: ctx[0] } });
  function common_refreshedRootCID_binding(value) {
    ctx[19](value);
  }
  let common_props = {
    getTagNode: ctx[11],
    decrypt: ctx[9],
    tag: ctx[2],
    rootCID: ctx[0],
    setAccess: ctx[5],
    $$slots: {
      default: [
        create_default_slot$3,
        ({ decryptedData }) => ({ 22: decryptedData }),
        ({ decryptedData }) => decryptedData ? 4194304 : 0
      ]
    },
    $$scope: { ctx }
  };
  if (ctx[8] !== void 0) {
    common_props.refreshedRootCID = ctx[8];
  }
  common = new Common({ props: common_props });
  binding_callbacks.push(() => bind(common, "refreshedRootCID", common_refreshedRootCID_binding));
  return {
    c() {
      div = element("div");
      create_component(showroot.$$.fragment);
      t = space();
      create_component(common.$$.fragment);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(showroot.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      claim_component(common.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(showroot, div, null);
      append_hydration(div, t);
      mount_component(common, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const showroot_changes = {};
      if (dirty & 1)
        showroot_changes.rootCID = ctx2[0];
      showroot.$set(showroot_changes);
      const common_changes = {};
      if (dirty & 4)
        common_changes.tag = ctx2[2];
      if (dirty & 1)
        common_changes.rootCID = ctx2[0];
      if (dirty & 32)
        common_changes.setAccess = ctx2[5];
      if (dirty & 5243120) {
        common_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_refreshedRootCID && dirty & 256) {
        updating_refreshedRootCID = true;
        common_changes.refreshedRootCID = ctx2[8];
        add_flush_callback(() => updating_refreshedRootCID = false);
      }
      common.$set(common_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(showroot.$$.fragment, local);
      transition_in(common.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(showroot.$$.fragment, local);
      transition_out(common.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(showroot);
      destroy_component(common);
    }
  };
}
function create_default_slot$3(ctx) {
  let current;
  const default_slot_template = ctx[18].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[20], get_default_slot_context);
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
        if (default_slot.p && (!current || dirty & 5243120)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[20], !current ? get_all_dirty_from_scope(ctx2[20]) : get_slot_changes(default_slot_template, ctx2[20], dirty, get_default_slot_changes), get_default_slot_context);
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
function create_fragment$9(ctx) {
  let script;
  let t0;
  let t1;
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$6, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1] && ctx2[3])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      script = element("script");
      t0 = text("global = globalThis; // for solana web3 repo");
      t1 = space();
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-1yyo2jl"]', document.head);
      script = claim_element(head_nodes, "SCRIPT", {});
      var script_nodes = children(script);
      t0 = claim_text(script_nodes, "global = globalThis; // for solana web3 repo");
      script_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "main svelte-1ohwnyw");
    },
    m(target, anchor) {
      append_hydration(document.head, script);
      append_hydration(script, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
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
        if_block.m(div, null);
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
      detach(script);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
    }
  };
}
const ROOT_CID = "__ROOT_CID__";
function instance$9($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { rootCID } = $$props;
  let { proxcryptor } = $$props;
  let { ipfsNode } = $$props;
  let { CID } = $$props;
  let { tag: tag2 } = $$props;
  let loaded = false;
  let handleRootCIDUpdate;
  let loadRootCID;
  let joseCryptor;
  let setJoseCryptor;
  let decryptFromTagNode;
  let setAccess, checkAccess;
  let getTagNodes;
  let refreshedRootCID;
  let { onSubmitted = () => {
  } } = $$props;
  onMount(async () => {
    const { ImmortalDB } = await __vitePreload(() => import("./index-17ddc90e.js"), true ? [] : void 0);
    const { DagJoseCryptor } = await __vitePreload(() => import("./dagjosecryptor-df20fc17.js"), true ? ["chunks/dagjosecryptor-df20fc17.js","chunks/vendor-87cb2300.js","assets/vendor-1494a6c6.css","chunks/singletons-f3a0af73.js"] : void 0);
    loadRootCID = async () => {
      await ipfsNode;
      if (rootCID)
        return true;
      let res = await ImmortalDB.get(ROOT_CID);
      if (!res) {
        $$invalidate(0, rootCID = false);
        return true;
      }
      $$invalidate(0, rootCID = CID.asCID(res) || CID.parse(res));
      console.log("rootCID set in loadRootCID");
      return true;
    };
    await loadRootCID();
    $$invalidate(17, setJoseCryptor = async () => {
      await ipfsNode;
      $$invalidate(16, joseCryptor = new DagJoseCryptor(ipfsNode, proxcryptor, rootCID));
      if (!rootCID)
        $$invalidate(3, loaded = true);
    });
    $$invalidate(15, handleRootCIDUpdate = async () => {
      $$invalidate(0, rootCID = joseCryptor.rootCID);
      console.log("Updating rootCID", { rootCID: rootCID.toString() });
      ImmortalDB.set(ROOT_CID, rootCID.toString());
      $$invalidate(3, loaded = true);
    });
  });
  let decrypt = async (data) => await joseCryptor.selfDecrypt(data);
  const handleSubmit = async function(event) {
    let tag3 = event.detail.tag || null;
    let schema = event.detail.data.schema || "";
    let value = event.detail.data.value || null;
    if (!tag3 || !value)
      return;
    console.log("Put: ", { tag: tag3, value });
    await joseCryptor.put(value, tag3, schema);
    $$invalidate(16, joseCryptor);
    onSubmitted();
    refreshedRootCID();
  };
  setAccess = async (tag3, targetPublicKey) => {
    await joseCryptor.setTagReKeys(tag3, targetPublicKey);
    $$invalidate(16, joseCryptor);
  };
  checkAccess = async (tag3, targetPublicKey) => {
    return await joseCryptor.checkAccess(tag3, targetPublicKey);
  };
  decryptFromTagNode = async (tagNode) => {
    return await joseCryptor.decryptFromTagNode(tagNode);
  };
  getTagNodes = async () => {
    if (!ipfsNode || !rootCID)
      return;
    const root = await ipfsNode.dag.get(rootCID);
    const promises = Object.entries(root.value).map(async ([key, val]) => {
      if (key === "prev" || !val)
        return null;
      let fields = await ipfsNode.dag.get(val);
      return fields.value;
    });
    const result = await Promise.all(promises);
    return result.filter((r) => r);
  };
  async function getTagNode(tag3, root = rootCID) {
    if (!root || !ipfsNode || !tag3)
      return;
    try {
      const cid = (await ipfsNode.dag.get(root, { path: `/${tag3}`, localResolve: true })).value;
      let tagNode = (await ipfsNode.dag.get(cid, { localResolve: true })).value;
      return tagNode;
    } catch (error) {
      console.warn(`${tag3} no DAG data`);
    }
  }
  function common_refreshedRootCID_binding(value) {
    refreshedRootCID = value;
    $$invalidate(8, refreshedRootCID);
  }
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(0, rootCID = $$props2.rootCID);
    if ("proxcryptor" in $$props2)
      $$invalidate(1, proxcryptor = $$props2.proxcryptor);
    if ("ipfsNode" in $$props2)
      $$invalidate(12, ipfsNode = $$props2.ipfsNode);
    if ("CID" in $$props2)
      $$invalidate(13, CID = $$props2.CID);
    if ("tag" in $$props2)
      $$invalidate(2, tag2 = $$props2.tag);
    if ("onSubmitted" in $$props2)
      $$invalidate(14, onSubmitted = $$props2.onSubmitted);
    if ("$$scope" in $$props2)
      $$invalidate(20, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 131074) {
      if (proxcryptor && setJoseCryptor)
        setJoseCryptor();
    }
    if ($$self.$$.dirty & 98304) {
      if (joseCryptor && joseCryptor.rootCID && handleRootCIDUpdate)
        handleRootCIDUpdate();
    }
  };
  return [
    rootCID,
    proxcryptor,
    tag2,
    loaded,
    decryptFromTagNode,
    setAccess,
    checkAccess,
    getTagNodes,
    refreshedRootCID,
    decrypt,
    handleSubmit,
    getTagNode,
    ipfsNode,
    CID,
    onSubmitted,
    handleRootCIDUpdate,
    joseCryptor,
    setJoseCryptor,
    slots,
    common_refreshedRootCID_binding,
    $$scope
  ];
}
class DAGJose extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {
      rootCID: 0,
      proxcryptor: 1,
      ipfsNode: 12,
      CID: 13,
      tag: 2,
      onSubmitted: 14
    });
  }
}
var QRCode_svelte_svelte_type_style_lang = "";
function fallback_block(ctx) {
  let t;
  return {
    c() {
      t = text("[QR Code]");
    },
    l(nodes) {
      t = claim_text(nodes, "[QR Code]");
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
function create_fragment$8(ctx) {
  let div1;
  let div0;
  let t0;
  let br;
  let t1;
  let canvas_1;
  let canvas_1_hidden_value;
  let canvas_1_transition;
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], null);
  const default_slot_or_fallback = default_slot || fallback_block();
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      t0 = space();
      br = element("br");
      t1 = space();
      canvas_1 = element("canvas");
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      br = claim_element(div1_nodes, "BR", {});
      t1 = claim_space(div1_nodes);
      canvas_1 = claim_element(div1_nodes, "CANVAS", { class: true });
      children(canvas_1).forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "qr-slot svelte-1l7tyqz");
      canvas_1.hidden = canvas_1_hidden_value = !ctx[1];
      attr(canvas_1, "class", "svelte-1l7tyqz");
      attr(div1, "class", "wrapper svelte-1l7tyqz");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(div0, null);
      }
      append_hydration(div1, t0);
      append_hydration(div1, br);
      append_hydration(div1, t1);
      append_hydration(div1, canvas_1);
      ctx[5](canvas_1);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, null), null);
        }
      }
      if (!current || dirty & 2 && canvas_1_hidden_value !== (canvas_1_hidden_value = !ctx2[1])) {
        canvas_1.hidden = canvas_1_hidden_value;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      add_render_callback(() => {
        if (!canvas_1_transition)
          canvas_1_transition = create_bidirectional_transition(canvas_1, fade, {}, true);
        canvas_1_transition.run(1);
      });
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      if (!canvas_1_transition)
        canvas_1_transition = create_bidirectional_transition(canvas_1, fade, {}, false);
      canvas_1_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      ctx[5](null);
      if (detaching && canvas_1_transition)
        canvas_1_transition.end();
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { value } = $$props;
  let canvas;
  let visible = false;
  async function showQR() {
    browser.toCanvas(canvas, value);
    $$invalidate(1, visible = true);
  }
  onMount(() => showQR());
  function canvas_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      canvas = $$value;
      $$invalidate(0, canvas);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(2, value = $$props2.value);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [canvas, visible, value, $$scope, slots, canvas_1_binding];
}
class QRCode_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { value: 2 });
  }
}
const goto = goto_;
async function goto_(href, opts) {
  return router.goto(href, opts, []);
}
var HypnsManager_svelte_svelte_type_style_lang = "";
function create_if_block$5(ctx) {
  let switch_instance;
  let updating_hypnsNode;
  let t;
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  function switch_instance_hypnsNode_binding(value) {
    ctx[13](value);
  }
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    let switch_instance_props = { opts: ctx2[7] };
    if (ctx2[1] !== void 0) {
      switch_instance_props.hypnsNode = ctx2[1];
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    binding_callbacks.push(() => bind(switch_instance, "hypnsNode", switch_instance_hypnsNode_binding));
  }
  const if_block_creators = [create_if_block_1$2, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t = space();
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "main svelte-52klll");
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, t, anchor);
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = {};
      if (!updating_hypnsNode && dirty & 2) {
        updating_hypnsNode = true;
        switch_instance_changes.hypnsNode = ctx2[1];
        add_flush_callback(() => updating_hypnsNode = false);
      }
      if (switch_value !== (switch_value = ctx2[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          binding_callbacks.push(() => bind(switch_instance, "hypnsNode", switch_instance_hypnsNode_binding));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, t.parentNode, t);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
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
        if_block.m(div, null);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (switch_instance)
        destroy_component(switch_instance, detaching);
      if (detaching)
        detach(t);
      if (detaching)
        detach(div);
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_else_block$2(ctx) {
  let t0_value = ctx[3] ? "Last Saved Root: " + ctx[3] : "Connect to Pin to PiperNet";
  let t0;
  let t1;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_2$1, create_else_block_1$1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (!ctx2[6])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      t0 = text(t0_value);
      t1 = space();
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_space(nodes);
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 8) && t0_value !== (t0_value = ctx2[3] ? "Last Saved Root: " + ctx2[3] : "Connect to Pin to PiperNet"))
        set_data(t0, t0_value);
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
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
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_if_block_1$2(ctx) {
  let t;
  return {
    c() {
      t = text("Loading Hypns...");
    },
    l(nodes) {
      t = claim_text(nodes, "Loading Hypns...");
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
function create_else_block_1$1(ctx) {
  let await_block_anchor;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$1,
    then: create_then_block$1,
    catch: create_catch_block$1,
    value: 6,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[6], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 64 && promise !== (promise = ctx[6]) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_if_block_2$1(ctx) {
  let button;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      t = text("Pin to PiperNet");
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Pin to PiperNet");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "svelte-52klll");
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      append_hydration(button, t);
      if (!mounted) {
        dispose = listen(button, "click", ctx[8]);
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_catch_block$1(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block$1(ctx) {
  let h3;
  let t0;
  let t1;
  let t2;
  let br;
  let t3;
  let show_if;
  let t4;
  let qrcode;
  let current;
  function select_block_type_2(ctx2, dirty) {
    var _a;
    if (dirty & 9)
      show_if = null;
    if (show_if == null)
      show_if = !!(ctx2[0] && ((_a = ctx2[0]) == null ? void 0 : _a.toV1().toString()) === ctx2[3]);
    if (show_if)
      return create_if_block_3$1;
    return create_else_block_2;
  }
  let current_block_type = select_block_type_2(ctx, -1);
  let if_block = current_block_type(ctx);
  qrcode = new QRCode_1({
    props: {
      value: JSON.stringify({ pubKeyHex: ctx[5] }),
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      h3 = element("h3");
      t0 = text("\u2714\uFE0F Connected to PiperNet");
      t1 = text("\r\n					latestHypns: ");
      t2 = text(ctx[3]);
      br = element("br");
      t3 = space();
      if_block.c();
      t4 = space();
      create_component(qrcode.$$.fragment);
    },
    l(nodes) {
      h3 = claim_element(nodes, "H3", {});
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "\u2714\uFE0F Connected to PiperNet");
      h3_nodes.forEach(detach);
      t1 = claim_text(nodes, "\r\n					latestHypns: ");
      t2 = claim_text(nodes, ctx[3]);
      br = claim_element(nodes, "BR", {});
      t3 = claim_space(nodes);
      if_block.l(nodes);
      t4 = claim_space(nodes);
      claim_component(qrcode.$$.fragment, nodes);
    },
    m(target, anchor) {
      insert_hydration(target, h3, anchor);
      append_hydration(h3, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, br, anchor);
      insert_hydration(target, t3, anchor);
      if_block.m(target, anchor);
      insert_hydration(target, t4, anchor);
      mount_component(qrcode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & 8)
        set_data(t2, ctx2[3]);
      if (current_block_type === (current_block_type = select_block_type_2(ctx2, dirty)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(t4.parentNode, t4);
        }
      }
      const qrcode_changes = {};
      if (dirty & 32)
        qrcode_changes.value = JSON.stringify({ pubKeyHex: ctx2[5] });
      if (dirty & 16384) {
        qrcode_changes.$$scope = { dirty, ctx: ctx2 };
      }
      qrcode.$set(qrcode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(qrcode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(qrcode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(h3);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(br);
      if (detaching)
        detach(t3);
      if_block.d(detaching);
      if (detaching)
        detach(t4);
      destroy_component(qrcode, detaching);
    }
  };
}
function create_else_block_2(ctx) {
  let t0;
  let button;
  let t1;
  let button_disabled_value;
  let mounted;
  let dispose;
  function select_block_type_3(ctx2, dirty) {
    if (!ctx2[0])
      return create_if_block_4;
    return create_else_block_3;
  }
  let current_block_type = select_block_type_3(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      t0 = space();
      button = element("button");
      t1 = text("Publish Latest");
      this.h();
    },
    l(nodes) {
      if_block.l(nodes);
      t0 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t1 = claim_text(button_nodes, "Publish Latest");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      button.disabled = button_disabled_value = !ctx[0] || !ctx[4];
      attr(button, "class", "svelte-52klll");
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, t1);
      if (!mounted) {
        dispose = listen(button, "click", ctx[9]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (current_block_type !== (current_block_type = select_block_type_3(ctx2))) {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(t0.parentNode, t0);
        }
      }
      if (dirty & 17 && button_disabled_value !== (button_disabled_value = !ctx2[0] || !ctx2[4])) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_3$1(ctx) {
  let h3;
  let t;
  return {
    c() {
      h3 = element("h3");
      t = text("\u2714\uFE0F PiperNet up to date");
    },
    l(nodes) {
      h3 = claim_element(nodes, "H3", {});
      var h3_nodes = children(h3);
      t = claim_text(h3_nodes, "\u2714\uFE0F PiperNet up to date");
      h3_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h3, anchor);
      append_hydration(h3, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(h3);
    }
  };
}
function create_else_block_3(ctx) {
  let h3;
  let t;
  return {
    c() {
      h3 = element("h3");
      t = text("\u26A0\uFE0F PiperNet needs updating");
    },
    l(nodes) {
      h3 = claim_element(nodes, "H3", {});
      var h3_nodes = children(h3);
      t = claim_text(h3_nodes, "\u26A0\uFE0F PiperNet needs updating");
      h3_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h3, anchor);
      append_hydration(h3, t);
    },
    d(detaching) {
      if (detaching)
        detach(h3);
    }
  };
}
function create_if_block_4(ctx) {
  let t;
  return {
    c() {
      t = text("Save something feed");
    },
    l(nodes) {
      t = claim_text(nodes, "Save something feed");
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
function create_default_slot$2(ctx) {
  let t;
  return {
    c() {
      t = text("[ Link to Others]");
    },
    l(nodes) {
      t = claim_text(nodes, "[ Link to Others]");
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
function create_pending_block$1(ctx) {
  let t;
  return {
    c() {
      t = text("Loading instance...");
    },
    l(nodes) {
      t = claim_text(nodes, "Loading instance...");
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
function create_fragment$7(ctx) {
  let t;
  let current;
  let if_block = ctx[2] && create_if_block$5(ctx);
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[14], null);
  return {
    c() {
      if (if_block)
        if_block.c();
      t = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$5(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t.parentNode, t);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16384)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[14], !current ? get_all_dirty_from_scope(ctx2[14]) : get_slot_changes(default_slot_template, ctx2[14], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
let connectKeyPhrase = "letsConnect";
function instance$7($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { rootCID } = $$props;
  let { wallet } = $$props;
  let hypnsNode;
  let HyPNSComponent, latestHypns;
  let hypnsInstance, publish;
  let myPublicKeyHex;
  let opts = {
    persist: true,
    swarmOpts: {
      announceLocalAddress: true,
      wsProxy: [
        "wss://hyperswarm.mauve.moe",
        "wss://geut-webrtc-signal-v3.glitch.me",
        "wss://geut-webrtc-signal-v3.herokuapp.com"
      ]
    }
  };
  onMount(async () => {
    __vitePreload(() => import("./index-436b918d.js"), true ? [] : void 0).then((module) => {
      $$invalidate(2, HyPNSComponent = module.default);
    });
  });
  async function initHypns() {
    const pk = await wallet.proxcryptor.getPublicKey();
    $$invalidate(5, myPublicKeyHex = bufftoHex(pk));
  }
  async function handleOpen() {
    console.log("Opening ", { myPublicKeyHex });
    const onUpdate = (val) => {
      console.log("Update from ", { hypnsInstance });
      $$invalidate(3, latestHypns = val.ipld);
    };
    const onMessage = async (msg) => {
      console.log(`redirect to ${location.origin + location.pathname}?add=${msg.pubKeyHex}`);
      await goto(`${location.origin + location.pathname}?add=${msg.pubKeyHex}`);
    };
    $$invalidate(6, hypnsInstance = await openHypns({
      pubKeyHex: myPublicKeyHex,
      wallet,
      onUpdate,
      onMessage
    }));
    $$invalidate(3, latestHypns = hypnsInstance.latest);
    $$invalidate(4, publish = () => {
      hypnsInstance.publish({ ipld: rootCID.toV1().toString() });
    });
  }
  const openHypns = async function({ pubKeyHex, wallet: wallet2 = null, onUpdate = (val) => {
  }, onMessage = (val) => {
    console.log("Default onMessage");
  } }) {
    console.log("open Hypns", pubKeyHex);
    const hypnsInstance2 = await hypnsNode.open({
      keypair: { publicKey: pubKeyHex },
      wallet: wallet2
    });
    hypnsInstance2.on("update", onUpdate);
    await hypnsInstance2.ready();
    const extension = hypnsInstance2.network.networker.registerExtension(connectKeyPhrase, {
      encoding: "json",
      onmessage: (message, peer) => {
        console.log("Got msg from peer!", { message }, { peer });
        console.log({ onMessage });
        onMessage(message);
        if (message.pubKeyHex && !hypnsNode.instances.has(message.pubKeyHex)) {
          openHypns({ pubKeyHex: message.pubKeyHex, onUpdate });
        } else {
          console.log("Already connected to ", message.pubKeyHex);
        }
      }
    });
    hypnsInstance2.network.networker.once("peer-add", (peer) => {
      console.log("Added a peer! Sending", myPublicKeyHex, { peer });
      extension.send({ pubKeyHex: myPublicKeyHex }, peer);
    });
    return hypnsInstance2;
  };
  async function handlePublish() {
    publish();
  }
  function switch_instance_hypnsNode_binding(value) {
    hypnsNode = value;
    $$invalidate(1, hypnsNode);
  }
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(0, rootCID = $$props2.rootCID);
    if ("wallet" in $$props2)
      $$invalidate(10, wallet = $$props2.wallet);
    if ("$$scope" in $$props2)
      $$invalidate(14, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1026) {
      wallet && hypnsNode && initHypns();
    }
  };
  return [
    rootCID,
    hypnsNode,
    HyPNSComponent,
    latestHypns,
    publish,
    myPublicKeyHex,
    hypnsInstance,
    opts,
    handleOpen,
    handlePublish,
    wallet,
    openHypns,
    slots,
    switch_instance_hypnsNode_binding,
    $$scope
  ];
}
class HypnsManager extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { rootCID: 0, wallet: 10, openHypns: 11 });
  }
  get openHypns() {
    return this.$$.ctx[11];
  }
}
function create_else_block$1(ctx) {
  let t0;
  let t1_value = ctx[0].tag + "";
  let t1;
  return {
    c() {
      t0 = text("\u2716\uFE0F You have no access to ");
      t1 = text(t1_value);
    },
    l(nodes) {
      t0 = claim_text(nodes, "\u2716\uFE0F You have no access to ");
      t1 = claim_text(nodes, t1_value);
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t1_value !== (t1_value = ctx2[0].tag + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(t0);
      if (detaching)
        detach(t1);
    }
  };
}
function create_if_block$4(ctx) {
  let await_block_anchor;
  let promise;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 1
  };
  handle_promise(promise = ctx[1], info);
  return {
    c() {
      await_block_anchor = empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 2 && promise !== (promise = ctx[1]) && handle_promise(promise, info))
        ;
      else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function create_catch_block(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  let t_value = ctx[1] + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 2 && t_value !== (t_value = ctx2[1] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_pending_block(ctx) {
  let t;
  return {
    c() {
      t = text("accessing tagNode...");
    },
    l(nodes) {
      t = claim_text(nodes, "accessing tagNode...");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$6(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return create_if_block$4;
    return create_else_block$1;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_block.m(div, null);
    },
    p(ctx2, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(div, null);
        }
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      if_block.d();
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { decryptFromTagNode } = $$props;
  let { tagNode } = $$props;
  let data;
  async function getData() {
    console.log(`Decrypting data on ${tagNode.tag} `);
    $$invalidate(1, data = await decryptFromTagNode(tagNode));
  }
  onMount(async () => {
  });
  $$self.$$set = ($$props2) => {
    if ("decryptFromTagNode" in $$props2)
      $$invalidate(2, decryptFromTagNode = $$props2.decryptFromTagNode);
    if ("tagNode" in $$props2)
      $$invalidate(0, tagNode = $$props2.tagNode);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      if (tagNode)
        getData();
    }
  };
  return [tagNode, data, decryptFromTagNode];
}
class TagValue extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { decryptFromTagNode: 2, tagNode: 0 });
  }
}
var scanIcon_svelte_svelte_type_style_lang = "";
function create_if_block$3(ctx) {
  let current;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
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
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
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
function create_fragment$5(ctx) {
  let div;
  let svg;
  let path0;
  let path1;
  let path2;
  let path3;
  let path4;
  let path5;
  let g;
  let path6;
  let path7;
  let path8;
  let t;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block$3(ctx);
  return {
    c() {
      div = element("div");
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      path4 = svg_element("path");
      path5 = svg_element("path");
      g = svg_element("g");
      path6 = svg_element("path");
      path7 = svg_element("path");
      path8 = svg_element("path");
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      svg = claim_svg_element(div_nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        viewBox: true,
        class: true
      });
      var svg_nodes = children(svg);
      path0 = claim_svg_element(svg_nodes, "path", {
        fill: true,
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path0).forEach(detach);
      path1 = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path1).forEach(detach);
      path2 = claim_svg_element(svg_nodes, "path", {
        fill: true,
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path2).forEach(detach);
      path3 = claim_svg_element(svg_nodes, "path", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path3).forEach(detach);
      path4 = claim_svg_element(svg_nodes, "path", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path4).forEach(detach);
      path5 = claim_svg_element(svg_nodes, "path", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path5).forEach(detach);
      g = claim_svg_element(svg_nodes, "g", {});
      var g_nodes = children(g);
      path6 = claim_svg_element(g_nodes, "path", { d: true });
      children(path6).forEach(detach);
      path7 = claim_svg_element(g_nodes, "path", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path7).forEach(detach);
      path8 = claim_svg_element(g_nodes, "path", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path8).forEach(detach);
      g_nodes.forEach(detach);
      svg_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(path0, "fill", "#fff");
      attr(path0, "stroke", "#000");
      attr(path0, "stroke-linecap", "round");
      attr(path0, "stroke-linejoin", "round");
      attr(path0, "stroke-width", "2.65");
      attr(path0, "d", "M7.36 33A18.2 18.2 0 0 1 6.65 7.3a18.2 18.2 0 0 1 25.71-.71 18.2 18.2 0 0 1 .72 25.7 18.2 18.2 0 0 1-25.71.74");
      attr(path1, "fill", "#fff");
      attr(path1, "d", "M13.87 8.51c0-.27.1-.5.29-.68.28-.27.32-.27 5.22-.27h4.95l.27.29c.16.17.26.44.26.68v.4H13.87zM14.14 29.02a1.07 1.07 0 0 1-.27-.68v-.4H20.76l.05.69.04.67h-3.22c-3.2 0-3.22 0-3.5-.28zM17.94 13.53h.98v1.06h-.98z");
      attr(path2, "fill", "#fff");
      attr(path2, "stroke", "#000");
      attr(path2, "stroke-linecap", "round");
      attr(path2, "stroke-linejoin", "round");
      attr(path2, "stroke-width", ".26");
      attr(path2, "d", "M17.41 13.53h.98v1.06h-.98zM19.8 13.52h.98v1.06h-.98zM17.41 16.08h.98v1.06h-.98zM19.78 16.08h.98v1.06h-.98z");
      attr(path3, "stroke", "#000");
      attr(path3, "stroke-linecap", "round");
      attr(path3, "stroke-linejoin", "round");
      attr(path3, "stroke-width", ".26458");
      attr(path3, "d", "M18.08 33.81c-.4-.03-.9-.12-1.1-.19-.34-.11-.4-.16-.66-.64a10.5 10.5 0 0 1-.98-1.9c0-.11.2-.12 3.11-.12h3.12l.2.2c.18.17.23.18.4.1a.8.8 0 0 0 .3-.34c.13-.27.11-.39-.15-1.1-.12-.32-.13-.25.18-1.45.1-.38.66-.96 1.93-1.98 1.87-1.5 2.22-1.98 2.22-2.98 0-.36-.04-.52-.22-.82-.25-.45-.44-.57-1.86-1.2-1.16-.51-1.67-.82-1.95-1.16-.2-.23-.25-.4-.15-.56.07-.1 1.1-.25 1.74-.25.62 0 1.61.19 2.2.4.95.36 2.1 1.2 2.35 1.71.4.78.39 1.92-.03 4.65-.39 2.57-.55 3.2-1.1 4.27-.93 1.82-2.56 2.84-5.18 3.25-.85.14-3.32.2-4.37.11z");
      attr(path4, "stroke", "#000");
      attr(path4, "stroke-linecap", "round");
      attr(path4, "stroke-linejoin", "round");
      attr(path4, "stroke-width", ".26458");
      attr(path4, "d", "M14.19 29.04c-.18-.18-.24-.32-.28-.65l-.05-.42h6.95v.54c0 .3.02.6.05.66.04.1-.28.11-3.2.11H14.4Z");
      attr(path5, "stroke", "#000");
      attr(path5, "stroke-linecap", "round");
      attr(path5, "stroke-linejoin", "round");
      attr(path5, "stroke-width", "1.0001124");
      attr(path5, "d", "M17.56 16.61v-.36h.7v.73h-.7zM19.91 16.62v-.38h.69V17h-.69ZM19.94 14.04v-.38h.7v.76h-.7ZM17.56 14.07v-.38h.7v.76h-.7Z");
      attr(path6, "d", "M16 34.56c.8-.8.59-.83 1.18-.8 11.36 1.14 11.05-4.42 11.72-8.48.38-2.25.28-3.5-.41-4.24-5.51-1.7-6.34-2.86-2.26 1.3.3.37.41.67.41 1.14 0 .55-.2.99-.72 1.57-.94 1.06-3.5 2.51-3.5 3.46 0 .47-.42.85-.12 1.41.3.57.29.96-.06 1.24-.3.23-.26.18-.5-.1l-.14-.17h-6.33v.17c0 .35 1.02 1.88 1.32 2.48 2.4.76 1.93 1.4-.58 1.02-.67-4.3-6.2-7.49-6.23-8.68-.03-1.18.94-1.37.94-1.37l-1.18-.96c-.56-1.84.41-1.91 1.1-2.2-.89-1.06-1.27-1.87-.42-2.74.83-.64 1.21-.63 2.04-.08l.04-5.7c.04-5.16 0-5.07.32-5.67.3-.55.92-.98 1.58-1.1.43-.09 9.95-.08 10.39 0a2.4 2.4 0 0 1 1.58 1.13c.3.51.29.43.29 6.37v5.52l.3.1A4.67 4.67 0 0 1 29.22 21c.44.72.62 1.49.57 2.44-.04.64-.4 2.84-.63 3.9-1.17 5.8-.13 7.57-13.16 7.21zm4.9-5.5a6.58 6.58 0 0 1-.03-.7v-.43h-7v.96l.22.22.22.22h6.63zm-8.69-3.36c-.3-.46-1.07-1.04-1.63-.4-.56.65 0 .98.6 1.64.46.5.56.58 1.12 1.06-.03-.84-.05-1.72-.09-2.3zm13.27-3.2c-2.2-1.86-5.66-3.09-1.41-3.79l.88.03v-8.27H13.87v15.95h7.49c1.28-2.73 3.93-2.86 4.12-3.93zm-10.5-3.36c-.33.1-.35-.38-.35-1.38 0-.75.02-.92.1-1.08.2-.36.7-.5 1.06-.28.29.17.36.34.4.87l.03.47h.41c.25 0 .48.03.57.08.5.26.57.88.14 1.26l-.2.17h-.98c-.9 0-1-.17-1.18-.11zm5.87-.1c-.19-.2-.21-.25-.21-.5 0-.56.3-.8 1-.8h.45v-.45c0-.52.08-.73.35-.9.36-.21.89-.08 1.08.28.06.13.08.37.08 1.11.12 1.42-.71 1.47-1.54 1.47h-.99Zm-5.87-4.73c-.3-.18-.35-.38-.35-1.38 0-1.41.07-1.48 1.48-1.48.7 0 .97.02 1.09.08.49.26.57.86.17 1.24-.16.15-.2.17-.67.19l-.5.02v.31c0 .5-.08.74-.3.95-.17.15-.24.18-.47.18a.9.9 0 0 1-.45-.11zm7.46 0c-.25-.16-.32-.3-.35-.84l-.03-.48-.47-.03c-.51-.03-.66-.08-.84-.31-.16-.2-.16-.64 0-.87.21-.3.35-.33 1.38-.33.83 0 .96.02 1.12.11.32.2.35.34.35 1.39 0 .83-.01.96-.1 1.12a.78.78 0 0 1-1.06.24zm-10.2 8.82.01-.78-.82-.5c-.77-.3-2.07.61-1.25 1.64.6.48 1.45.93 2.07 1.27l-.01-1.63zm0-3.21v-.85c-.38-.43-1.3-1.07-1.93.13-.64 1.2.68 1.83 1.94 2.1zm12.7-11.28c0-.46-.08-.7-.3-.9l-.2-.18H14.31l-.22.22-.22.22v.96h11.08v-.32z");
      attr(path7, "stroke", "#000");
      attr(path7, "stroke-linecap", "round");
      attr(path7, "stroke-linejoin", "round");
      attr(path7, "stroke-width", ".26458");
      attr(path7, "d", "M11.38 27.08c-.93-.95-1.06-1.15-.94-1.45.28-.66.93-.74 1.48-.16l.26.27.05 1.08c.03.59.03 1.07 0 1.07-.02 0-.4-.36-.85-.81zM11.48 24.28c-1.03-.6-1.3-.82-1.44-1.15-.19-.48.02-.89.6-1.18.36-.18.65-.14 1.12.15l.43.27v1.15l-.01 1.16-.7-.4zM11.57 21.07c-.9-.32-1.37-.76-1.37-1.27 0-.56.57-1.25 1.02-1.25.21 0 .58.17.81.38.16.15.16.2.16 1.24 0 .6-.02 1.08-.05 1.08a6.2 6.2 0 0 1-.57-.18z");
      attr(path8, "stroke", "#000");
      attr(path8, "stroke-linecap", "round");
      attr(path8, "stroke-linejoin", "round");
      attr(path8, "stroke-width", ".0740824");
      attr(path8, "d", "M14.1 29.04c-.2-.21-.23-.29-.23-.66v-.41h6.94v.32c0 .17.02.47.05.65l.04.34h-6.56Z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "150");
      attr(svg, "height", "150");
      attr(svg, "viewBox", "0 0 39.69 39.69");
      attr(svg, "class", "svelte-1ey9nt7");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, svg);
      append_hydration(svg, path0);
      append_hydration(svg, path1);
      append_hydration(svg, path2);
      append_hydration(svg, path3);
      append_hydration(svg, path4);
      append_hydration(svg, path5);
      append_hydration(svg, g);
      append_hydration(g, path6);
      append_hydration(g, path7);
      append_hydration(g, path8);
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(div, "click", ctx[3]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$3(ctx2);
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
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { scan = false } = $$props;
  const click_handler = () => $$invalidate(0, scan = true);
  $$self.$$set = ($$props2) => {
    if ("scan" in $$props2)
      $$invalidate(0, scan = $$props2.scan);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [scan, $$scope, slots, click_handler];
}
class ScanIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { scan: 0 });
  }
}
var Modal_svelte_svelte_type_style_lang = "";
function create_fragment$4(ctx) {
  let div2;
  let div1;
  let span;
  let t0;
  let t1;
  let div0;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      span = element("span");
      t0 = text("\xD7");
      t1 = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { id: true, class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      span = claim_element(div1_nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "\xD7");
      span_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "close svelte-1dtwwq4");
      attr(div1, "class", "modal-content svelte-1dtwwq4");
      attr(div2, "id", "myModal");
      attr(div2, "class", "svelte-1dtwwq4");
      toggle_class(div2, "modal", ctx[0]);
      toggle_class(div2, "hide", !ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, span);
      append_hydration(span, t0);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(span, "click", ctx[1]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
        }
      }
      if (dirty & 1) {
        toggle_class(div2, "modal", ctx2[0]);
      }
      if (dirty & 1) {
        toggle_class(div2, "hide", !ctx2[0]);
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
      if (detaching)
        detach(div2);
      if (default_slot)
        default_slot.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { modal } = $$props;
  const handleClose = () => {
    $$invalidate(0, modal = false);
    console.log("Closing", { modal });
  };
  $$self.$$set = ($$props2) => {
    if ("modal" in $$props2)
      $$invalidate(0, modal = $$props2.modal);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      modal && console.log({ modal });
    }
  };
  return [modal, handleClose, $$scope, slots];
}
class Modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { modal: 0 });
  }
}
var QRCodeIcon_svelte_svelte_type_style_lang = "";
function create_if_block$2(ctx) {
  let current;
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
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
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[1], !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null), null);
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
function create_fragment$3(ctx) {
  let div;
  let svg;
  let path0;
  let path1;
  let path2;
  let path3;
  let path4;
  let path5;
  let t;
  let if_block_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block$2(ctx);
  return {
    c() {
      div = element("div");
      svg = svg_element("svg");
      path0 = svg_element("path");
      path1 = svg_element("path");
      path2 = svg_element("path");
      path3 = svg_element("path");
      path4 = svg_element("path");
      path5 = svg_element("path");
      t = space();
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      svg = claim_svg_element(div_nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        viewBox: true,
        class: true
      });
      var svg_nodes = children(svg);
      path0 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path0).forEach(detach);
      path1 = claim_svg_element(svg_nodes, "path", {
        fill: true,
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path1).forEach(detach);
      path2 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path2).forEach(detach);
      path3 = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path3).forEach(detach);
      path4 = claim_svg_element(svg_nodes, "path", { d: true });
      children(path4).forEach(detach);
      path5 = claim_svg_element(svg_nodes, "path", {
        stroke: true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        "stroke-width": true,
        d: true
      });
      children(path5).forEach(detach);
      svg_nodes.forEach(detach);
      div_nodes.forEach(detach);
      t = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h() {
      attr(path0, "d", "M19.05 38.56a18.94 18.94 0 0 1-17.03-13.1 18.95 18.95 0 0 1 6.7-20.94A18.92 18.92 0 0 1 34.3 32.07a18.84 18.84 0 0 1-15.25 6.5zm3-.8a18.28 18.28 0 0 0 16.11-16.68A18.23 18.23 0 0 0 18.64 1.53a18.21 18.21 0 0 0-7.02 34.28 18.23 18.23 0 0 0 6.93 2c.6.06 2.91.02 3.5-.05zM9.69 30.6a.97.97 0 0 1-.44-.43c-.07-.14-.08-.3-.08-4.57 0-4.83-.01-4.54.23-4.81.26-.3-.02-.28 4.4-.29h4.23c.7-.02.97.16 1.12.75.05.2.06.74.06 4.35 0 2.81-.02 4.18-.05 4.32-.07.36-.26.62-.5.72-.08.02-1.48.04-4.46.04-4.14 0-4.36 0-4.5-.08zm7.63-5v-3.18h-6.29v6.36h6.29zm4.03 5.01c-.26-.13-.4-.35-.48-.7-.03-.12-.05-1.52-.05-4.44 0-4.23 0-4.27.08-4.45a.83.83 0 0 1 .47-.42c.11-.04.66-.06 2.89-.07H27V24.37h1.96v-1.63c0-.9.01-1.77.03-1.93l.02-.3h.51c.76 0 1.1.13 1.26.48.09.19.1.84.05 3.75l-.03 1.68h-3.09l-3.09-.02v-.72l-.02-.73h-1.93v5.72h-.6c-.48 0-.64-.02-.73-.07zm3.3-.58c-.02-.36-.02-.87 0-1.14l.01-.5h2.08v2.29h-2.08l-.02-.65zm4.04 0v-1.14l.02-.5h2.16v.79c0 .74-.01.8-.1.98-.1.2-.27.38-.47.46-.1.04-.33.06-.86.06h-.73ZM10.07 18.82a1.38 1.38 0 0 1-.7-.27c-.2-.2-.2 0-.2-4.78 0-4.34 0-4.44.08-4.59.1-.19.27-.36.44-.44.12-.06.53-.06 4.53-.06 4.93 0 4.55-.03 4.77.29.22.31.22.3.22 4.82 0 3.62 0 4.16-.06 4.36-.08.32-.2.5-.43.6l-.18.1h-4.11c-2.27 0-4.23-.02-4.36-.03zm7.25-5.07v-3.18h-6.29v6.37h6.29zm4.17 5.07c-.31-.06-.53-.34-.62-.77-.06-.3-.06-8.4 0-8.65.05-.23.16-.45.26-.54.2-.2.04-.18 4.72-.18 4.26 0 4.37 0 4.51.07.2.1.4.35.46.54.03.1.04 1.3.04 4.49v4.33l-.09.2a.88.88 0 0 1-.46.46c-.15.06-.52.07-4.43.07-2.35 0-4.33 0-4.39-.02zm7.48-5.07v-3.18h-3.13l-3.14.02V16.89c.01.04.68.05 3.15.05h3.12z");
      attr(path1, "fill", "#fff");
      attr(path1, "stroke", "#000");
      attr(path1, "stroke-linecap", "round");
      attr(path1, "stroke-linejoin", "round");
      attr(path1, "stroke-width", "1.03");
      attr(path1, "d", "M17.43 37.63a18.6 18.6 0 0 1-8.87-3.9 24.2 24.2 0 0 1-3.08-3.23 18.44 18.44 0 0 1-3.43-8.33c-.21-1.43-.14-4.53.13-5.83.84-3.98 2.5-7 5.3-9.72a17.9 17.9 0 0 1 9.04-4.74c1.11-.24 1.32-.25 3.5-.25 2.5 0 3.3.1 5.05.62 3.14.94 5.65 2.47 7.96 4.84a18.16 18.16 0 0 1 4.82 9.18c.28 1.4.35 4.37.13 5.87a17.82 17.82 0 0 1-4.91 10.08 17.96 17.96 0 0 1-10.48 5.41 25.5 25.5 0 0 1-5.16 0zm1.36-7c.08-.04.21-.2.3-.35.12-.25.14-.82.15-4.65 0-3.22-.02-4.43-.1-4.6-.25-.55-.14-.54-4.98-.54-2.8 0-4.5.04-4.6.1-.4.2-.4.31-.44 4.59-.01 2.25 0 4.31.03 4.58.04.34.13.56.28.7l.21.22h4.5c2.48 0 4.57-.03 4.65-.06zm3.96-2.77v-2.82h1.82v1.46h6.24l.06-1.44c.09-2.08.07-3.56-.04-3.96-.12-.45-.5-.62-1.3-.59l-.55.03-.03 1.89-.02 1.88h-1.91V20.5h-2.71c-2.85 0-3.2.05-3.4.4-.14.23-.22 5.88-.12 7.95.06 1.2.08 1.32.3 1.57.2.26.25.27.94.27h.72zm4 1.64v-1.18H25.7c-1.2 0-1.14-.07-1.14 1.18s-.07 1.18 1.14 1.18h1.04zm3.74 1.08c.3-.16.44-.64.44-1.49v-.77H28.66v2.36h.82c.46 0 .9-.04 1.01-.1zM18.95 18.6c.22-.26.23-.31.3-2.34.04-1.14.04-3.18 0-4.53-.05-2.11-.08-2.48-.22-2.72l-.16-.28-4.6-.03c-5.17-.02-4.9-.06-5.08.66-.1.42-.1 8.15 0 8.78.04.35.1.43.37.57.29.14.71.16 4.74.16h4.43l.22-.27zm11.67-.04.31-.31v-4.22c0-2.31-.04-4.4-.08-4.62-.15-.77.12-.73-5.01-.73-4.26 0-4.54.01-4.74.17-.18.15-.21.29-.27 1.11-.1 1.19-.1 5.15-.02 7 .05 1.29.07 1.4.28 1.65l.22.26h9z");
      attr(path2, "d", "M15.29 25.68V24.5h-1.04c-1.2 0-1.14-.07-1.14 1.18s-.07 1.18 1.14 1.18h1.04z");
      attr(path3, "fill", "#fff");
      attr(path3, "d", "M22.75 13.78V10.7l.28-.06c.16-.03 1.55-.06 3.1-.06h2.8v6.28h-6.18zM11.1 13.72v-3.14H17.3v6.28h-6.18ZM11.1 25.63V22.5H17.3v6.27h-6.18Z");
      attr(path4, "d", "M12.83 24.13h2.73v2.73h-2.73zM12.93 12.4h2.73v2.73h-2.73zM24.29 12.31h2.73v2.73h-2.73z");
      attr(path5, "stroke", "#000");
      attr(path5, "stroke-linecap", "round");
      attr(path5, "stroke-linejoin", "round");
      attr(path5, "stroke-width", "1.54");
      attr(path5, "d", "M17.42 38.36A18.94 18.94 0 0 1 1.33 22.15c-.16-1.2-.18-3.55-.04-4.66.44-3.54 1.89-7 4.04-9.64.59-.71 2.26-2.37 2.98-2.95A19.1 19.1 0 0 1 17.54.99c1.3-.17 3.68-.17 4.95 0 3.7.49 7.33 2.14 9.94 4.52a18.65 18.65 0 0 1 6.41 14.15A18.87 18.87 0 0 1 22.2 38.4c-1.04.13-3.77.1-4.78-.04zm4.35-1.13a17.6 17.6 0 0 0 11.37-5.77 17.3 17.3 0 0 0 4.44-13.34 17.58 17.58 0 0 0-12.02-15.2c-2.03-.68-2.27-.72-5.18-.77-2.5-.04-2.63-.03-3.73.2A17.76 17.76 0 0 0 2.6 16.76c-.11.64-.15 1.4-.16 3 0 1.97.02 2.22.25 3.3.34 1.61.78 2.9 1.51 4.38a15.62 15.62 0 0 0 2.6 3.88 17.22 17.22 0 0 0 7.77 5.11c.68.22 1.58.48 2 .56 1.45.3 3.4.38 5.2.23z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "width", "150");
      attr(svg, "height", "150");
      attr(svg, "viewBox", "0 0 39.69 39.69");
      attr(svg, "class", "svelte-1ey9nt7");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, svg);
      append_hydration(svg, path0);
      append_hydration(svg, path1);
      append_hydration(svg, path2);
      append_hydration(svg, path3);
      append_hydration(svg, path4);
      append_hydration(svg, path5);
      insert_hydration(target, t, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = listen(div, "click", ctx[3]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx2);
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
        detach(t);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
      mounted = false;
      dispose();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { showQR = false } = $$props;
  const click_handler = () => $$invalidate(0, showQR = true);
  $$self.$$set = ($$props2) => {
    if ("showQR" in $$props2)
      $$invalidate(0, showQR = $$props2.showQR);
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [showQR, $$scope, slots, click_handler];
}
class QRCodeIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { showQR: 0 });
  }
}
var Contacts_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i].handle;
  child_ctx[12] = list[i].pubKey;
  return child_ctx;
}
function create_default_slot_7(ctx) {
  let div;
  return {
    c() {
      div = element("div");
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      children(div).forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_default_slot_6(ctx) {
  let scanner;
  let updating_result;
  let current;
  function scanner_result_binding(value) {
    ctx[22](value);
  }
  let scanner_props = {
    $$slots: { default: [create_default_slot_7] },
    $$scope: { ctx }
  };
  if (ctx[12] !== void 0) {
    scanner_props.result = ctx[12];
  }
  scanner = new Scanner({ props: scanner_props });
  binding_callbacks.push(() => bind(scanner, "result", scanner_result_binding));
  scanner.$on("successfulScan", ctx[23]);
  return {
    c() {
      create_component(scanner.$$.fragment);
    },
    l(nodes) {
      claim_component(scanner.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(scanner, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const scanner_changes = {};
      if (dirty[1] & 32) {
        scanner_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_result && dirty[0] & 4096) {
        updating_result = true;
        scanner_changes.result = ctx2[12];
        add_flush_callback(() => updating_result = false);
      }
      scanner.$set(scanner_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(scanner.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(scanner.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(scanner, detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let modal;
  let updating_modal;
  let current;
  function modal_modal_binding(value) {
    ctx[24](value);
  }
  let modal_props = {
    $$slots: { default: [create_default_slot_6] },
    $$scope: { ctx }
  };
  if (ctx[9] !== void 0) {
    modal_props.modal = ctx[9];
  }
  modal = new Modal({ props: modal_props });
  binding_callbacks.push(() => bind(modal, "modal", modal_modal_binding));
  return {
    c() {
      create_component(modal.$$.fragment);
    },
    l(nodes) {
      claim_component(modal.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const modal_changes = {};
      if (dirty[0] & 4608 | dirty[1] & 32) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_modal && dirty[0] & 512) {
        updating_modal = true;
        modal_changes.modal = ctx2[9];
        add_flush_callback(() => updating_modal = false);
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modal, detaching);
    }
  };
}
function create_default_slot_4(ctx) {
  let t;
  return {
    c() {
      t = text("Others Scan this from their PeerPiper to Connect to You");
    },
    l(nodes) {
      t = claim_text(nodes, "Others Scan this from their PeerPiper to Connect to You");
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
function create_default_slot_3(ctx) {
  let qrcode;
  let current;
  qrcode = new QRCode_1({
    props: {
      value: JSON.stringify({ connectJson: "test" }),
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(qrcode.$$.fragment);
    },
    l(nodes) {
      claim_component(qrcode.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(qrcode, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const qrcode_changes = {};
      if (dirty[1] & 32) {
        qrcode_changes.$$scope = { dirty, ctx: ctx2 };
      }
      qrcode.$set(qrcode_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(qrcode.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(qrcode.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(qrcode, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let modal;
  let updating_modal;
  let current;
  function modal_modal_binding_1(value) {
    ctx[26](value);
  }
  let modal_props = {
    $$slots: { default: [create_default_slot_3] },
    $$scope: { ctx }
  };
  if (ctx[10] !== void 0) {
    modal_props.modal = ctx[10];
  }
  modal = new Modal({ props: modal_props });
  binding_callbacks.push(() => bind(modal, "modal", modal_modal_binding_1));
  return {
    c() {
      create_component(modal.$$.fragment);
    },
    l(nodes) {
      claim_component(modal.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(modal, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const modal_changes = {};
      if (dirty[1] & 32) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_modal && dirty[0] & 1024) {
        updating_modal = true;
        modal_changes.modal = ctx2[10];
        add_flush_callback(() => updating_modal = false);
      }
      modal.$set(modal_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(modal, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let h1;
  let t0;
  let t1;
  let label;
  let t2;
  let t3;
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      h1 = element("h1");
      t0 = text("Add Nickname");
      t1 = space();
      label = element("label");
      t2 = text("Handle:");
      t3 = space();
      input = element("input");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Add Nickname");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      label = claim_element(nodes, "LABEL", { for: true });
      var label_nodes = children(label);
      t2 = claim_text(label_nodes, "Handle:");
      label_nodes.forEach(detach);
      t3 = claim_space(nodes);
      input = claim_element(nodes, "INPUT", { id: true, class: true });
      this.h();
    },
    h() {
      attr(label, "for", "handle");
      attr(input, "id", "handle");
      attr(input, "class", "svelte-2enj2l");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, label, anchor);
      append_hydration(label, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, input, anchor);
      set_input_value(input, ctx[11]);
      if (!mounted) {
        dispose = listen(input, "input", ctx[28]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty[0] & 2048 && input.value !== ctx2[11]) {
        set_input_value(input, ctx2[11]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(label);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(input);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[3];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty[0] & 196639 | dirty[1] & 16) {
        each_value = ctx2[3];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_handle_slot(ctx) {
  let span;
  let t_value = ctx[11] + "";
  let t;
  return {
    c() {
      span = element("span");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, t_value);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "slot", "handle");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 8 && t_value !== (t_value = ctx2[11] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_publicKey_slot(ctx) {
  let span;
  let t0;
  let small;
  let t1_value = ctx[12] + "";
  let t1;
  return {
    c() {
      span = element("span");
      t0 = text("PubKey: ");
      small = element("small");
      t1 = text(t1_value);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "PubKey: ");
      small = claim_element(span_nodes, "SMALL", {});
      var small_nodes = children(small);
      t1 = claim_text(small_nodes, t1_value);
      small_nodes.forEach(detach);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "slot", "publicKey");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      append_hydration(span, small);
      append_hydration(small, t1);
    },
    p(ctx2, dirty) {
      if (dirty[0] & 8 && t1_value !== (t1_value = ctx2[12] + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2(ctx) {
  let tagaccess;
  let current;
  tagaccess = new TagAccess({
    props: {
      tag: ctx[17].tag,
      pubKey: ctx[12],
      checkAccess: ctx[2]
    }
  });
  return {
    c() {
      create_component(tagaccess.$$.fragment);
    },
    l(nodes) {
      claim_component(tagaccess.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tagaccess, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tagaccess_changes = {};
      if (dirty[0] & 131072)
        tagaccess_changes.tag = ctx2[17].tag;
      if (dirty[0] & 8)
        tagaccess_changes.pubKey = ctx2[12];
      if (dirty[0] & 4)
        tagaccess_changes.checkAccess = ctx2[2];
      tagaccess.$set(tagaccess_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tagaccess.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tagaccess.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tagaccess, detaching);
    }
  };
}
function create_if_block_1$1(ctx) {
  let tagvalue;
  let current;
  tagvalue = new TagValue({
    props: {
      tagNode: ctx[17],
      decryptFromTagNode: ctx[4]
    }
  });
  return {
    c() {
      create_component(tagvalue.$$.fragment);
    },
    l(nodes) {
      claim_component(tagvalue.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tagvalue, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tagvalue_changes = {};
      if (dirty[0] & 131072)
        tagvalue_changes.tagNode = ctx2[17];
      if (dirty[0] & 16)
        tagvalue_changes.decryptFromTagNode = ctx2[4];
      tagvalue.$set(tagvalue_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(tagvalue.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tagvalue.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tagvalue, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = create_if_block_2(ctx);
  let if_block1 = ctx[17].tag === "Profile" && create_if_block_1$1(ctx);
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if_block0.p(ctx2, dirty);
      if (ctx2[17].tag === "Profile") {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty[0] & 131072) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
    }
  };
}
function create_default_slot$1(ctx) {
  let gettags;
  let current;
  gettags = new GetTags({
    props: {
      rootCID: ctx[35],
      getTagNodes: ctx[0],
      $$slots: {
        default: [
          create_default_slot_1,
          ({ tagNode }) => ({ 17: tagNode }),
          ({ tagNode }) => [tagNode ? 131072 : 0]
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(gettags.$$.fragment);
    },
    l(nodes) {
      claim_component(gettags.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(gettags, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const gettags_changes = {};
      if (dirty[1] & 16)
        gettags_changes.rootCID = ctx2[35];
      if (dirty[0] & 1)
        gettags_changes.getTagNodes = ctx2[0];
      if (dirty[0] & 131100 | dirty[1] & 32) {
        gettags_changes.$$scope = { dirty, ctx: ctx2 };
      }
      gettags.$set(gettags_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(gettags.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(gettags.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(gettags, detaching);
    }
  };
}
function create_latest_slot(ctx) {
  let span;
  let pipernet;
  let current;
  pipernet = new PiperNet({
    props: {
      pubKey: ctx[12],
      openHypns: ctx[1],
      $$slots: {
        default: [
          create_default_slot$1,
          ({ latestHypns }) => ({ 35: latestHypns }),
          ({ latestHypns }) => [0, latestHypns ? 16 : 0]
        ]
      },
      $$scope: { ctx }
    }
  });
  pipernet.$on("onMessage", ctx[16]);
  return {
    c() {
      span = element("span");
      create_component(pipernet.$$.fragment);
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { slot: true });
      var span_nodes = children(span);
      claim_component(pipernet.$$.fragment, span_nodes);
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "slot", "latest");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      mount_component(pipernet, span, null);
      current = true;
    },
    p(ctx2, dirty) {
      const pipernet_changes = {};
      if (dirty[0] & 8)
        pipernet_changes.pubKey = ctx2[12];
      if (dirty[0] & 2)
        pipernet_changes.openHypns = ctx2[1];
      if (dirty[0] & 29 | dirty[1] & 48) {
        pipernet_changes.$$scope = { dirty, ctx: ctx2 };
      }
      pipernet.$set(pipernet_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(pipernet.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(pipernet.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      destroy_component(pipernet);
    }
  };
}
function create_each_block$1(ctx) {
  let div;
  let contactcard;
  let t;
  let current;
  contactcard = new ContactCard({
    props: {
      $$slots: {
        latest: [create_latest_slot],
        publicKey: [create_publicKey_slot],
        handle: [create_handle_slot]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      create_component(contactcard.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(contactcard.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "card-container svelte-2enj2l");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(contactcard, div, null);
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const contactcard_changes = {};
      if (dirty[0] & 31 | dirty[1] & 32) {
        contactcard_changes.$$scope = { dirty, ctx: ctx2 };
      }
      contactcard.$set(contactcard_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(contactcard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(contactcard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(contactcard);
    }
  };
}
function create_fragment$2(ctx) {
  let div7;
  let div6;
  let h1;
  let t0;
  let t1;
  let div0;
  let input0;
  let t2;
  let div4;
  let div3;
  let input1;
  let t3_value = ctx[7] ? "\u2714\uFE0F Valid Public Key" : "";
  let t3;
  let t4;
  let div1;
  let scanicon;
  let updating_scan;
  let t5;
  let div2;
  let qrcodeicon;
  let updating_showQR;
  let t6;
  let t7;
  let div5;
  let label;
  let t8;
  let button;
  let t9;
  let button_disabled_value;
  let div7_transition;
  let t10;
  let if_block1_anchor;
  let current;
  let mounted;
  let dispose;
  function scanicon_scan_binding(value) {
    ctx[25](value);
  }
  let scanicon_props = {
    $$slots: { default: [create_default_slot_5] },
    $$scope: { ctx }
  };
  if (ctx[9] !== void 0) {
    scanicon_props.scan = ctx[9];
  }
  scanicon = new ScanIcon({ props: scanicon_props });
  binding_callbacks.push(() => bind(scanicon, "scan", scanicon_scan_binding));
  function qrcodeicon_showQR_binding(value) {
    ctx[27](value);
  }
  let qrcodeicon_props = {
    $$slots: { default: [create_default_slot_2] },
    $$scope: { ctx }
  };
  if (ctx[10] !== void 0) {
    qrcodeicon_props.showQR = ctx[10];
  }
  qrcodeicon = new QRCodeIcon({ props: qrcodeicon_props });
  binding_callbacks.push(() => bind(qrcodeicon, "showQR", qrcodeicon_showQR_binding));
  let if_block0 = ctx[7] && create_if_block_3(ctx);
  let if_block1 = ctx[3] && create_if_block$1(ctx);
  return {
    c() {
      div7 = element("div");
      div6 = element("div");
      h1 = element("h1");
      t0 = text(tag);
      t1 = space();
      div0 = element("div");
      input0 = element("input");
      t2 = space();
      div4 = element("div");
      div3 = element("div");
      input1 = element("input");
      t3 = text(t3_value);
      t4 = space();
      div1 = element("div");
      create_component(scanicon.$$.fragment);
      t5 = space();
      div2 = element("div");
      create_component(qrcodeicon.$$.fragment);
      t6 = space();
      if (if_block0)
        if_block0.c();
      t7 = space();
      div5 = element("div");
      label = element("label");
      t8 = space();
      button = element("button");
      t9 = text("Save");
      t10 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      div7 = claim_element(nodes, "DIV", {});
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      h1 = claim_element(div6_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, tag);
      h1_nodes.forEach(detach);
      t1 = claim_space(div6_nodes);
      div0 = claim_element(div6_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input0 = claim_element(div0_nodes, "INPUT", { placeholder: true, class: true });
      div0_nodes.forEach(detach);
      t2 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      input1 = claim_element(div3_nodes, "INPUT", { placeholder: true, class: true });
      t3 = claim_text(div3_nodes, t3_value);
      t4 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(scanicon.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(qrcodeicon.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t6 = claim_space(div6_nodes);
      if (if_block0)
        if_block0.l(div6_nodes);
      t7 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      label = claim_element(div5_nodes, "LABEL", { for: true });
      var label_nodes = children(label);
      label_nodes.forEach(detach);
      t8 = claim_space(div5_nodes);
      button = claim_element(div5_nodes, "BUTTON", {});
      var button_nodes = children(button);
      t9 = claim_text(button_nodes, "Save");
      button_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      div6_nodes.forEach(detach);
      div7_nodes.forEach(detach);
      t10 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(h1, "class", "tag");
      attr(input0, "placeholder", "publicKey friends contacts");
      input0.disabled = true;
      attr(input0, "class", "svelte-2enj2l");
      attr(div0, "class", "tag keywords");
      attr(input1, "placeholder", "Paste or Scan Public Key");
      attr(input1, "class", "svelte-2enj2l");
      attr(div1, "class", "scan-icon svelte-2enj2l");
      attr(div2, "class", "scan-icon svelte-2enj2l");
      attr(div3, "class", "entry-item svelte-2enj2l");
      attr(div4, "class", "item svelte-2enj2l");
      attr(label, "for", "preview");
      button.disabled = button_disabled_value = !ctx[11] || !ctx[12] || ctx[8];
      attr(div5, "class", "submit");
      attr(div6, "class", "data-entry svelte-2enj2l");
    },
    m(target, anchor) {
      insert_hydration(target, div7, anchor);
      append_hydration(div7, div6);
      append_hydration(div6, h1);
      append_hydration(h1, t0);
      append_hydration(div6, t1);
      append_hydration(div6, div0);
      append_hydration(div0, input0);
      set_input_value(input0, ctx[5]);
      append_hydration(div6, t2);
      append_hydration(div6, div4);
      append_hydration(div4, div3);
      append_hydration(div3, input1);
      ctx[20](input1);
      set_input_value(input1, ctx[12]);
      append_hydration(div3, t3);
      append_hydration(div3, t4);
      append_hydration(div3, div1);
      mount_component(scanicon, div1, null);
      append_hydration(div3, t5);
      append_hydration(div3, div2);
      mount_component(qrcodeicon, div2, null);
      append_hydration(div6, t6);
      if (if_block0)
        if_block0.m(div6, null);
      append_hydration(div6, t7);
      append_hydration(div6, div5);
      append_hydration(div5, label);
      append_hydration(div5, t8);
      append_hydration(div5, button);
      append_hydration(button, t9);
      insert_hydration(target, t10, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input0, "input", ctx[19]),
          listen(input1, "input", ctx[21]),
          listen(input1, "input", ctx[13]),
          listen(input1, "change", ctx[13]),
          listen(input1, "focus", ctx[13]),
          listen(button, "click", prevent_default(ctx[14]))
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & 32 && input0.value !== ctx[5]) {
        set_input_value(input0, ctx[5]);
      }
      if (dirty[0] & 4096 && input1.value !== ctx[12]) {
        set_input_value(input1, ctx[12]);
      }
      if ((!current || dirty[0] & 128) && t3_value !== (t3_value = ctx[7] ? "\u2714\uFE0F Valid Public Key" : ""))
        set_data(t3, t3_value);
      const scanicon_changes = {};
      if (dirty[0] & 4608 | dirty[1] & 32) {
        scanicon_changes.$$scope = { dirty, ctx };
      }
      if (!updating_scan && dirty[0] & 512) {
        updating_scan = true;
        scanicon_changes.scan = ctx[9];
        add_flush_callback(() => updating_scan = false);
      }
      scanicon.$set(scanicon_changes);
      const qrcodeicon_changes = {};
      if (dirty[0] & 1024 | dirty[1] & 32) {
        qrcodeicon_changes.$$scope = { dirty, ctx };
      }
      if (!updating_showQR && dirty[0] & 1024) {
        updating_showQR = true;
        qrcodeicon_changes.showQR = ctx[10];
        add_flush_callback(() => updating_showQR = false);
      }
      qrcodeicon.$set(qrcodeicon_changes);
      if (ctx[7]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_3(ctx);
          if_block0.c();
          if_block0.m(div6, t7);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!current || dirty[0] & 6400 && button_disabled_value !== (button_disabled_value = !ctx[11] || !ctx[12] || ctx[8])) {
        button.disabled = button_disabled_value;
      }
      if (ctx[3]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
          if (dirty[0] & 8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(scanicon.$$.fragment, local);
      transition_in(qrcodeicon.$$.fragment, local);
      add_render_callback(() => {
        if (!div7_transition)
          div7_transition = create_bidirectional_transition(div7, slide, {
            delay: 100,
            duration: 400,
            easing: quintOut
          }, true);
        div7_transition.run(1);
      });
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(scanicon.$$.fragment, local);
      transition_out(qrcodeicon.$$.fragment, local);
      if (!div7_transition)
        div7_transition = create_bidirectional_transition(div7, slide, {
          delay: 100,
          duration: 400,
          easing: quintOut
        }, false);
      div7_transition.run(0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div7);
      ctx[20](null);
      destroy_component(scanicon);
      destroy_component(qrcodeicon);
      if (if_block0)
        if_block0.d();
      if (detaching && div7_transition)
        div7_transition.end();
      if (detaching)
        detach(t10);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
const tag = "Contacts";
function instance$2($$self, $$props, $$invalidate) {
  let $page;
  let $contacts;
  component_subscribe($$self, page, ($$value) => $$invalidate(30, $page = $$value));
  component_subscribe($$self, contacts, ($$value) => $$invalidate(31, $contacts = $$value));
  let { getTagNodes } = $$props;
  let { openHypns } = $$props;
  let { checkAccess } = $$props;
  let { decryptedData } = $$props;
  let { decryptFromTagNode } = $$props;
  const dispatch = createEventDispatcher();
  let schema;
  let handle, pubKey, pubKeyInput;
  let tagNode;
  let valid;
  let submitting;
  let scan;
  let showQR;
  onMount(async () => {
    let params = new URLSearchParams(location.search);
    if ($page.url.searchParams.has("add")) {
      $$invalidate(12, pubKey = $page.url.searchParams.get("add"));
      await tick();
      pubKeyInput.focus();
    } else if (params.has("add")) {
      $$invalidate(12, pubKey = params.get("add"));
      await tick();
      pubKeyInput.focus();
    }
  });
  function onSubmitted() {
    $$invalidate(8, submitting = false);
    $$invalidate(11, handle = "");
    $$invalidate(12, pubKey = "");
    $$invalidate(7, valid = false);
  }
  function handleValidate() {
    console.log(`Validating ${pubKey}`);
    if (!pubKey)
      return;
    if (validatePubKey(pubKey))
      $$invalidate(7, valid = true);
    else
      $$invalidate(7, valid = false);
  }
  async function handleAddContact() {
    console.log("Adding ", { handle }, { pubKey });
    if (!handle || !pubKey)
      return;
    const bytes = validatePubKey(pubKey);
    console.log("Adding bytes", { bytes });
    let value;
    if (decryptedData && decryptedData.length)
      value = [...decryptedData, { handle, pubKey: new Uint8Array(bytes) }];
    else
      value = [{ handle, pubKey: new Uint8Array(bytes) }];
    console.log("Adding value", { value });
    $$invalidate(8, submitting = true);
    dispatch("handleSubmit", { tag, data: { value, schema } });
  }
  function handleConnect(key) {
    $$invalidate(12, pubKey = key);
  }
  function handleMessenger(event) {
    console.log("Setting pubKey to rx'd msg value");
    $$invalidate(12, pubKey = event.detail.pubKeyHex);
  }
  function input0_input_handler() {
    schema = this.value;
    $$invalidate(5, schema);
  }
  function input1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      pubKeyInput = $$value;
      $$invalidate(6, pubKeyInput);
    });
  }
  function input1_input_handler() {
    pubKey = this.value;
    $$invalidate(12, pubKey);
  }
  function scanner_result_binding(value) {
    pubKey = value;
    $$invalidate(12, pubKey);
  }
  const successfulScan_handler = (data) => {
    $$invalidate(9, scan = false);
    const parsed = JSON.parse(data.detail);
    console.log(`Scanned `, { parsed });
    handleConnect(parsed.pubKeyHex);
  };
  function modal_modal_binding(value) {
    scan = value;
    $$invalidate(9, scan);
  }
  function scanicon_scan_binding(value) {
    scan = value;
    $$invalidate(9, scan);
  }
  function modal_modal_binding_1(value) {
    showQR = value;
    $$invalidate(10, showQR);
  }
  function qrcodeicon_showQR_binding(value) {
    showQR = value;
    $$invalidate(10, showQR);
  }
  function input_input_handler() {
    handle = this.value;
    $$invalidate(11, handle);
  }
  $$self.$$set = ($$props2) => {
    if ("getTagNodes" in $$props2)
      $$invalidate(0, getTagNodes = $$props2.getTagNodes);
    if ("openHypns" in $$props2)
      $$invalidate(1, openHypns = $$props2.openHypns);
    if ("checkAccess" in $$props2)
      $$invalidate(2, checkAccess = $$props2.checkAccess);
    if ("decryptedData" in $$props2)
      $$invalidate(3, decryptedData = $$props2.decryptedData);
    if ("decryptFromTagNode" in $$props2)
      $$invalidate(4, decryptFromTagNode = $$props2.decryptFromTagNode);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & 8) {
      if (decryptedData)
        set_store_value(contacts, $contacts = decryptedData, $contacts);
    }
  };
  return [
    getTagNodes,
    openHypns,
    checkAccess,
    decryptedData,
    decryptFromTagNode,
    schema,
    pubKeyInput,
    valid,
    submitting,
    scan,
    showQR,
    handle,
    pubKey,
    handleValidate,
    handleAddContact,
    handleConnect,
    handleMessenger,
    tagNode,
    onSubmitted,
    input0_input_handler,
    input1_binding,
    input1_input_handler,
    scanner_result_binding,
    successfulScan_handler,
    modal_modal_binding,
    scanicon_scan_binding,
    modal_modal_binding_1,
    qrcodeicon_showQR_binding,
    input_input_handler
  ];
}
class Contacts extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      getTagNodes: 0,
      openHypns: 1,
      checkAccess: 2,
      decryptedData: 3,
      decryptFromTagNode: 4,
      onSubmitted: 18
    }, null, [-1, -1]);
  }
  get onSubmitted() {
    return this.$$.ctx[18];
  }
}
const CONTACTS = "Contacts";
const PROFILE = "Profile";
const Components = {
  [CONTACTS]: { name: CONTACTS, component: Contacts, tag: CONTACTS },
  [PROFILE]: { name: PROFILE, component: Profile, tag: PROFILE }
};
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i][0];
  child_ctx[22] = list[i][1];
  return child_ctx;
}
function create_else_block_1(ctx) {
  let t;
  let br;
  return {
    c() {
      t = text("Loading Web3 Wallet...");
      br = element("br");
    },
    l(nodes) {
      t = claim_text(nodes, "Loading Web3 Wallet...");
      br = claim_element(nodes, "BR", {});
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      insert_hydration(target, br, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(br);
    }
  };
}
function create_if_block_1(ctx) {
  let switch_instance;
  let updating_wallet;
  let switch_instance_anchor;
  let current;
  function switch_instance_wallet_binding(value) {
    ctx[8](value);
  }
  var switch_value = ctx[6];
  function switch_props(ctx2) {
    let switch_instance_props = { inputUrl };
    if (ctx2[0] !== void 0) {
      switch_instance_props.wallet = ctx2[0];
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    binding_callbacks.push(() => bind(switch_instance, "wallet", switch_instance_wallet_binding));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = {};
      if (!updating_wallet && dirty & 1) {
        updating_wallet = true;
        switch_instance_changes.wallet = ctx2[0];
        add_flush_callback(() => updating_wallet = false);
      }
      if (switch_value !== (switch_value = ctx2[6])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          binding_callbacks.push(() => bind(switch_instance, "wallet", switch_instance_wallet_binding));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_each_block(ctx) {
  let option;
  let t_value = ctx[21] + "";
  let t;
  let option_value_value;
  return {
    c() {
      option = element("option");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      option = claim_element(nodes, "OPTION", {});
      var option_nodes = children(option);
      t = claim_text(option_nodes, t_value);
      option_nodes.forEach(detach);
      this.h();
    },
    h() {
      option.__value = option_value_value = ctx[22];
      option.value = option.__value;
    },
    m(target, anchor) {
      insert_hydration(target, option, anchor);
      append_hydration(option, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(option);
    }
  };
}
function create_else_block(ctx) {
  let t;
  let br;
  return {
    c() {
      t = text("Loading IPFS...");
      br = element("br");
    },
    l(nodes) {
      t = claim_text(nodes, "Loading IPFS...");
      br = claim_element(nodes, "BR", {});
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
      insert_hydration(target, br, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(t);
      if (detaching)
        detach(br);
    }
  };
}
function create_if_block(ctx) {
  let dagjose;
  let updating_rootCID;
  let current;
  function dagjose_rootCID_binding(value) {
    ctx[11](value);
  }
  let dagjose_props = {
    proxcryptor: ctx[0].proxcryptor,
    ipfsNode: ctx[3],
    CID: ctx[4],
    tag: ctx[2].tag,
    onSubmitted: ctx[7],
    $$slots: {
      default: [
        create_default_slot,
        ({ decryptedData, getTagNodes, checkAccess, setAccess, handleSubmit, decryptFromTagNode }) => ({
          15: decryptedData,
          16: getTagNodes,
          17: checkAccess,
          18: setAccess,
          19: handleSubmit,
          20: decryptFromTagNode
        }),
        ({ decryptedData, getTagNodes, checkAccess, setAccess, handleSubmit, decryptFromTagNode }) => (decryptedData ? 32768 : 0) | (getTagNodes ? 65536 : 0) | (checkAccess ? 131072 : 0) | (setAccess ? 262144 : 0) | (handleSubmit ? 524288 : 0) | (decryptFromTagNode ? 1048576 : 0)
      ]
    },
    $$scope: { ctx }
  };
  if (ctx[1] !== void 0) {
    dagjose_props.rootCID = ctx[1];
  }
  dagjose = new DAGJose({ props: dagjose_props });
  binding_callbacks.push(() => bind(dagjose, "rootCID", dagjose_rootCID_binding));
  return {
    c() {
      create_component(dagjose.$$.fragment);
    },
    l(nodes) {
      claim_component(dagjose.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(dagjose, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const dagjose_changes = {};
      if (dirty & 1)
        dagjose_changes.proxcryptor = ctx2[0].proxcryptor;
      if (dirty & 8)
        dagjose_changes.ipfsNode = ctx2[3];
      if (dirty & 16)
        dagjose_changes.CID = ctx2[4];
      if (dirty & 4)
        dagjose_changes.tag = ctx2[2].tag;
      if (dirty & 128)
        dagjose_changes.onSubmitted = ctx2[7];
      if (dirty & 35618980) {
        dagjose_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_rootCID && dirty & 2) {
        updating_rootCID = true;
        dagjose_changes.rootCID = ctx2[1];
        add_flush_callback(() => updating_rootCID = false);
      }
      dagjose.$set(dagjose_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(dagjose.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(dagjose.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(dagjose, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let switch_instance;
  let updating_onSubmitted;
  let switch_instance_anchor;
  let current;
  function switch_instance_onSubmitted_binding(value) {
    ctx[10](value);
  }
  var switch_value = ctx[2].component;
  function switch_props(ctx2) {
    let switch_instance_props = {
      decryptedData: ctx2[15],
      getTagNodes: ctx2[16],
      checkAccess: ctx2[17],
      setAccess: ctx2[18],
      openHypns: ctx2[5],
      decryptFromTagNode: ctx2[20]
    };
    if (ctx2[7] !== void 0) {
      switch_instance_props.onSubmitted = ctx2[7];
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    binding_callbacks.push(() => bind(switch_instance, "onSubmitted", switch_instance_onSubmitted_binding));
    switch_instance.$on("handleSubmit", function() {
      if (is_function(ctx[19]))
        ctx[19].apply(this, arguments);
    });
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) {
        mount_component(switch_instance, target, anchor);
      }
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const switch_instance_changes = {};
      if (dirty & 32768)
        switch_instance_changes.decryptedData = ctx[15];
      if (dirty & 65536)
        switch_instance_changes.getTagNodes = ctx[16];
      if (dirty & 131072)
        switch_instance_changes.checkAccess = ctx[17];
      if (dirty & 262144)
        switch_instance_changes.setAccess = ctx[18];
      if (dirty & 32)
        switch_instance_changes.openHypns = ctx[5];
      if (dirty & 1048576)
        switch_instance_changes.decryptFromTagNode = ctx[20];
      if (!updating_onSubmitted && dirty & 128) {
        updating_onSubmitted = true;
        switch_instance_changes.onSubmitted = ctx[7];
        add_flush_callback(() => updating_onSubmitted = false);
      }
      if (switch_value !== (switch_value = ctx[2].component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx));
          binding_callbacks.push(() => bind(switch_instance, "onSubmitted", switch_instance_onSubmitted_binding));
          switch_instance.$on("handleSubmit", function() {
            if (is_function(ctx[19]))
              ctx[19].apply(this, arguments);
          });
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(switch_instance_anchor);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div1;
  let current_block_type_index;
  let if_block0;
  let t0;
  let div0;
  let select;
  let t1;
  let current_block_type_index_1;
  let if_block1;
  let t2;
  let hypnsmanager;
  let updating_openHypns;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_1, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[6])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let each_value = Object.entries(Components);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const if_block_creators_1 = [create_if_block, create_else_block];
  const if_blocks_1 = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[0] && ctx2[0].proxcryptor && ctx2[3] && ctx2[4])
      return 0;
    return 1;
  }
  current_block_type_index_1 = select_block_type_1(ctx);
  if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  function hypnsmanager_openHypns_binding(value) {
    ctx[12](value);
  }
  let hypnsmanager_props = {
    wallet: ctx[0],
    rootCID: ctx[1]
  };
  if (ctx[5] !== void 0) {
    hypnsmanager_props.openHypns = ctx[5];
  }
  hypnsmanager = new HypnsManager({ props: hypnsmanager_props });
  binding_callbacks.push(() => bind(hypnsmanager, "openHypns", hypnsmanager_openHypns_binding));
  return {
    c() {
      div1 = element("div");
      if_block0.c();
      t0 = space();
      div0 = element("div");
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t1 = space();
      if_block1.c();
      t2 = space();
      create_component(hypnsmanager.$$.fragment);
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if_block0.l(div1_nodes);
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      select = claim_element(div0_nodes, "SELECT", { class: true });
      var select_nodes = children(select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      if_block1.l(div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(hypnsmanager.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(select, "class", "form-control");
      if (ctx[2] === void 0)
        add_render_callback(() => ctx[9].call(select));
      attr(div1, "class", "");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      if_blocks[current_block_type_index].m(div1, null);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      append_hydration(div0, select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }
      select_option(select, ctx[2]);
      append_hydration(div1, t1);
      if_blocks_1[current_block_type_index_1].m(div1, null);
      append_hydration(div1, t2);
      mount_component(hypnsmanager, div1, null);
      current = true;
      if (!mounted) {
        dispose = listen(select, "change", ctx[9]);
        mounted = true;
      }
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
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(div1, t0);
      }
      if (dirty & 0) {
        each_value = Object.entries(Components);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(select, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & 4) {
        select_option(select, ctx2[2]);
      }
      let previous_block_index_1 = current_block_type_index_1;
      current_block_type_index_1 = select_block_type_1(ctx2);
      if (current_block_type_index_1 === previous_block_index_1) {
        if_blocks_1[current_block_type_index_1].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks_1[previous_block_index_1], 1, 1, () => {
          if_blocks_1[previous_block_index_1] = null;
        });
        check_outros();
        if_block1 = if_blocks_1[current_block_type_index_1];
        if (!if_block1) {
          if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx2);
          if_block1.c();
        } else {
          if_block1.p(ctx2, dirty);
        }
        transition_in(if_block1, 1);
        if_block1.m(div1, t2);
      }
      const hypnsmanager_changes = {};
      if (dirty & 1)
        hypnsmanager_changes.wallet = ctx2[0];
      if (dirty & 2)
        hypnsmanager_changes.rootCID = ctx2[1];
      if (!updating_openHypns && dirty & 32) {
        updating_openHypns = true;
        hypnsmanager_changes.openHypns = ctx2[5];
        add_flush_callback(() => updating_openHypns = false);
      }
      hypnsmanager.$set(hypnsmanager_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(hypnsmanager.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(hypnsmanager.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if_blocks[current_block_type_index].d();
      destroy_each(each_blocks, detaching);
      if_blocks_1[current_block_type_index_1].d();
      destroy_component(hypnsmanager);
      mounted = false;
      dispose();
    }
  };
}
let inputUrl = "https://peerpiper.github.io/iframe-wallet-engine";
function instance$1($$self, $$props, $$invalidate) {
  let { wallet = null } = $$props;
  let { rootCID = null } = $$props;
  let active = Components["Contacts"];
  let ipfsNode, CID;
  let nodeId;
  let openHypns;
  let Web3WalletMenu;
  let start = Date.now();
  let onSubmitted;
  onMount(async () => {
    if (!wallet)
      loadWallet();
    if (!ipfsNode)
      loadIPFS();
    async function loadWallet() {
      $$invalidate(6, { Web3WalletMenu } = await __vitePreload(() => import("./index-9ac9e207.js"), true ? ["chunks/index-9ac9e207.js","assets/index-a39541f0.css","chunks/vendor-87cb2300.js","assets/vendor-1494a6c6.css"] : void 0), Web3WalletMenu);
    }
    async function loadIPFS() {
      const IPFSmodule = await __vitePreload(() => import("./ipfs-core-7ce8034c.js"), true ? [] : void 0);
      const IPFS = IPFSmodule.default;
      $$invalidate(4, CID = IPFS.CID);
      $$invalidate(3, ipfsNode = await IPFS.create({}));
      console.log(`Loaded in ${(Date.now() - start) / 1e3}s`, { ipfsNode });
      const identity = await ipfsNode.id();
      nodeId = identity.id;
      console.info("NodeId", nodeId);
    }
    return () => ipfsNode.stop();
  });
  function switch_instance_wallet_binding(value) {
    wallet = value;
    $$invalidate(0, wallet);
  }
  function select_change_handler() {
    active = select_value(this);
    $$invalidate(2, active);
  }
  function switch_instance_onSubmitted_binding(value) {
    onSubmitted = value;
    $$invalidate(7, onSubmitted);
  }
  function dagjose_rootCID_binding(value) {
    rootCID = value;
    $$invalidate(1, rootCID);
  }
  function hypnsmanager_openHypns_binding(value) {
    openHypns = value;
    $$invalidate(5, openHypns);
  }
  $$self.$$set = ($$props2) => {
    if ("wallet" in $$props2)
      $$invalidate(0, wallet = $$props2.wallet);
    if ("rootCID" in $$props2)
      $$invalidate(1, rootCID = $$props2.rootCID);
  };
  return [
    wallet,
    rootCID,
    active,
    ipfsNode,
    CID,
    openHypns,
    Web3WalletMenu,
    onSubmitted,
    switch_instance_wallet_binding,
    select_change_handler,
    switch_instance_onSubmitted_binding,
    dagjose_rootCID_binding,
    hypnsmanager_openHypns_binding
  ];
}
class App extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { wallet: 0, rootCID: 1 });
  }
}
function create_fragment(ctx) {
  let script;
  let t0;
  let t1;
  let app;
  let current;
  app = new App({});
  return {
    c() {
      script = element("script");
      t0 = text("global = globalThis; // for solana web3 repo");
      t1 = space();
      create_component(app.$$.fragment);
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-1yyo2jl"]', document.head);
      script = claim_element(head_nodes, "SCRIPT", {});
      var script_nodes = children(script);
      t0 = claim_text(script_nodes, "global = globalThis; // for solana web3 repo");
      script_nodes.forEach(detach);
      head_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(app.$$.fragment, nodes);
    },
    m(target, anchor) {
      append_hydration(document.head, script);
      append_hydration(script, t0);
      insert_hydration(target, t1, anchor);
      mount_component(app, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(app.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(app.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      detach(script);
      if (detaching)
        detach(t1);
      destroy_component(app, detaching);
    }
  };
}
function instance($$self) {
  onMount(async () => {
  });
  return [];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Routes, hexDigestMessage };
//# sourceMappingURL=index-1def2b07.js.map
