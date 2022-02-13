import { SvelteComponent, init, safe_not_equal, create_slot, HtmlTagHydration, empty, claim_html_tag, insert_hydration, detach, element, text, space, claim_element, children, claim_text, claim_space, attr, append_hydration, listen, prevent_default, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, add_render_callback, create_bidirectional_transition, quintOut, slide, transition_out, createEventDispatcher, set_input_value, getContext, base64Js, bs58, group_outros, check_outros, noop, handle_promise, update_await_block_branch, set_data, destroy_each, onMount, writable, component_subscribe, create_component, claim_component, mount_component, destroy_component, query_selector_all, binding_callbacks, bind, add_flush_callback, fade, run_all, browser, tick, set_store_value, select_option, select_value, is_function } from "./vendor-ab2ef118.js";
import { __vitePreload } from "./preload-helper-3af2b5e8.js";
function fallback_block$1(ctx) {
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
function create_if_block$b(ctx) {
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
function create_fragment$e(ctx) {
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
  const default_slot_or_fallback = default_slot || fallback_block$1(ctx);
  let if_block = ctx[0] && create_if_block$b(ctx);
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
          if_block = create_if_block$b(ctx);
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
function instance$e($$self, $$props, $$invalidate) {
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
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { decryptedData: 0 });
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
function fallback_block(ctx) {
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
function create_fragment$d(ctx) {
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
  const latest_slot_or_fallback = latest_slot || fallback_block();
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
function instance$d($$self, $$props, $$invalidate) {
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
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {});
  }
}
const get_default_slot_changes$3 = (dirty) => ({ latestHypns: dirty & 1 });
const get_default_slot_context$3 = (ctx) => ({ latestHypns: ctx[0] });
function create_else_block_1$2(ctx) {
  let t;
  return {
    c() {
      t = text("Sign message to write to PiperNet...");
    },
    l(nodes) {
      t = claim_text(nodes, "Sign message to write to PiperNet...");
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
  let await_block_anchor;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$5,
    then: create_then_block$5,
    catch: create_catch_block$5,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[2], info);
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
      if (dirty & 4 && promise !== (promise = ctx[2]) && handle_promise(promise, info))
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
function create_if_block$a(ctx) {
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
function create_then_block$5(ctx) {
  let h3;
  let t0;
  let t1;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_2$4, create_else_block$6];
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
function create_else_block$6(ctx) {
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
function create_if_block_2$4(ctx) {
  let t0;
  let t1;
  let t2;
  let current;
  const default_slot_template = ctx[6].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[5], get_default_slot_context$3);
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
        if (default_slot.p && (!current || dirty & 33)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, get_default_slot_changes$3), get_default_slot_context$3);
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
function create_fragment$c(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$a, create_if_block_1$4, create_else_block_1$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (!ctx2[1])
      return 0;
    if (ctx2[2])
      return 1;
    return 2;
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
function instance$c($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { pubKey } = $$props;
  let { hypnsNode } = $$props;
  let latestHypns;
  let hypnsInstance;
  let instanceReady;
  async function handleOpen(pubKey2) {
    let publicKeyHex = bufftoHex(pubKey2);
    $$invalidate(1, hypnsInstance = await hypnsNode.open({ keypair: { publicKey: publicKeyHex } }));
    hypnsInstance.on("update", (val) => {
      console.log("Update from ", { hypnsInstance });
      $$invalidate(0, latestHypns = val.ipld);
    });
    $$invalidate(2, instanceReady = await hypnsInstance.ready());
    $$invalidate(0, latestHypns = hypnsInstance.latest);
  }
  $$self.$$set = ($$props2) => {
    if ("pubKey" in $$props2)
      $$invalidate(3, pubKey = $$props2.pubKey);
    if ("hypnsNode" in $$props2)
      $$invalidate(4, hypnsNode = $$props2.hypnsNode);
    if ("$$scope" in $$props2)
      $$invalidate(5, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 24) {
      if (!!pubKey && hypnsNode)
        handleOpen(pubKey);
    }
  };
  return [latestHypns, hypnsInstance, instanceReady, pubKey, hypnsNode, $$scope, slots];
}
class PiperNet extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, { pubKey: 3, hypnsNode: 4 });
  }
}
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
const get_default_slot_changes$2 = (dirty) => ({ tagNode: dirty & 1 });
const get_default_slot_context$2 = (ctx) => ({ tagNode: ctx[6] });
function create_if_block$9(ctx) {
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
function create_fragment$b(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block$9(ctx);
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
          if_block = create_if_block$9(ctx2);
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
function instance$b($$self, $$props, $$invalidate) {
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
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { rootCID: 1, getTagNodes: 2 });
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
function create_if_block$8(ctx) {
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
function create_fragment$a(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (ctx2[2] && ctx2[1])
      return create_if_block$8;
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
function instance$a($$self, $$props, $$invalidate) {
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
    init(this, options, instance$a, create_fragment$a, safe_not_equal, { tag: 0, pubKey: 3, checkAccess: 4 });
  }
}
function create_if_block_2$3(ctx) {
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
function create_if_block$7(ctx) {
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
function create_fragment$9(ctx) {
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
      return create_if_block_2$3;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type && current_block_type(ctx);
  let if_block1 = ctx[3] && create_if_block$7(ctx);
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
          if_block1 = create_if_block$7(ctx2);
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
function instance$9($$self, $$props, $$invalidate) {
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
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { tag: 0, setAccess: 5, contacts: 6 });
  }
}
var _Contacts_svelte_svelte_type_style_lang = "";
function create_if_block$6(ctx) {
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
function create_fragment$8(ctx) {
  let if_block_anchor;
  let if_block = ctx[0] && create_if_block$6(ctx);
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
          if_block = create_if_block$6(ctx2);
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
function instance$8($$self, $$props, $$invalidate) {
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
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { rootCID: 0 });
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
function create_if_block$5(ctx) {
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
function create_fragment$7(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$5, create_else_block$4];
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
function instance$7($$self, $$props, $$invalidate) {
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
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
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
function create_if_block$4(ctx) {
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
        create_default_slot$2,
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
function create_default_slot$2(ctx) {
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
function create_fragment$6(ctx) {
  let script;
  let t0;
  let t1;
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$4, create_else_block$3];
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
      attr(div, "class", "main svelte-460y2v");
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
function instance$6($$self, $$props, $$invalidate) {
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
    const { DagJoseCryptor } = await __vitePreload(() => import("./dagjosecryptor-81e0cb34.js"), true ? ["chunks/dagjosecryptor-81e0cb34.js","chunks/vendor-ab2ef118.js","chunks/preload-helper-3af2b5e8.js"] : void 0);
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
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
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
function create_fragment$5(ctx) {
  let span;
  let t0;
  let t1;
  let br0;
  let t2;
  let canvas_1;
  let canvas_1_hidden_value;
  let canvas_1_transition;
  let t3;
  let br1;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      t0 = text("[QR Code]");
      t1 = space();
      br0 = element("br");
      t2 = space();
      canvas_1 = element("canvas");
      t3 = space();
      br1 = element("br");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "[QR Code]");
      span_nodes.forEach(detach);
      t1 = claim_space(nodes);
      br0 = claim_element(nodes, "BR", {});
      t2 = claim_space(nodes);
      canvas_1 = claim_element(nodes, "CANVAS", { width: true, height: true, class: true });
      children(canvas_1).forEach(detach);
      t3 = claim_space(nodes);
      br1 = claim_element(nodes, "BR", {});
      this.h();
    },
    h() {
      attr(span, "class", "svelte-s2soft");
      canvas_1.hidden = canvas_1_hidden_value = !ctx[1];
      attr(canvas_1, "width", 32);
      attr(canvas_1, "height", 32);
      attr(canvas_1, "class", "svelte-s2soft");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, br0, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, canvas_1, anchor);
      ctx[6](canvas_1);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, br1, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(span, "mouseover", ctx[4]),
          listen(canvas_1, "mousemove", ctx[5])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 2 && canvas_1_hidden_value !== (canvas_1_hidden_value = !ctx2[1])) {
        canvas_1.hidden = canvas_1_hidden_value;
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!canvas_1_transition)
          canvas_1_transition = create_bidirectional_transition(canvas_1, fade, {}, true);
        canvas_1_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!canvas_1_transition)
        canvas_1_transition = create_bidirectional_transition(canvas_1, fade, {}, false);
      canvas_1_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(span);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(br0);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(canvas_1);
      ctx[6](null);
      if (detaching && canvas_1_transition)
        canvas_1_transition.end();
      if (detaching)
        detach(t3);
      if (detaching)
        detach(br1);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { value } = $$props;
  let canvas;
  let visible = false;
  async function showQR() {
    browser.toCanvas(canvas, value);
    $$invalidate(1, visible = true);
  }
  const mouseover_handler = () => {
    showQR();
  };
  const mousemove_handler = () => {
    $$invalidate(1, visible = false);
  };
  function canvas_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      canvas = $$value;
      $$invalidate(0, canvas);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(3, value = $$props2.value);
  };
  return [
    canvas,
    visible,
    showQR,
    value,
    mouseover_handler,
    mousemove_handler,
    canvas_1_binding
  ];
}
class QRCode_1 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { value: 3 });
  }
}
var HypnsManager_svelte_svelte_type_style_lang = "";
function create_if_block$3(ctx) {
  let switch_instance;
  let updating_hypnsNode;
  let t;
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  function switch_instance_hypnsNode_binding(value) {
    ctx[12](value);
  }
  var switch_value = ctx[2];
  function switch_props(ctx2) {
    let switch_instance_props = { opts: ctx2[8] };
    if (ctx2[0] !== void 0) {
      switch_instance_props.hypnsNode = ctx2[0];
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
    if (!ctx2[0])
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
      if (!updating_hypnsNode && dirty & 1) {
        updating_hypnsNode = true;
        switch_instance_changes.hypnsNode = ctx2[0];
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
  let t0_value = (ctx[3] ? "Last Saved Root: " + ctx[3] : "Connect to Pin to PiperNet") + "";
  let t0;
  let t1;
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_2$2, create_if_block_3$1, create_else_block_2$1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (!ctx2[4])
      return 0;
    if (ctx2[5])
      return 1;
    return 2;
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
      if ((!current || dirty & 8) && t0_value !== (t0_value = (ctx2[3] ? "Last Saved Root: " + ctx2[3] : "Connect to Pin to PiperNet") + ""))
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
function create_else_block_2$1(ctx) {
  let t;
  return {
    c() {
      t = text("Sign message to write to PiperNet...");
    },
    l(nodes) {
      t = claim_text(nodes, "Sign message to write to PiperNet...");
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
function create_if_block_3$1(ctx) {
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
function create_if_block_2$2(ctx) {
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
        dispose = listen(button, "click", ctx[9]);
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
  let a;
  let t5;
  let a_href_value;
  let t6;
  let qrcode;
  let current;
  function select_block_type_2(ctx2, dirty) {
    if (dirty & 10)
      show_if = null;
    if (show_if == null)
      show_if = !!(ctx2[3] === ctx2[1].toV1().toString());
    if (show_if)
      return create_if_block_4;
    return create_else_block_1$1;
  }
  let current_block_type = select_block_type_2(ctx, -1);
  let if_block = current_block_type(ctx);
  qrcode = new QRCode_1({
    props: {
      value: `${location.origin + location.pathname}?add=${ctx[7]}`
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
      t4 = text("\r\n\r\n					\r\n					Connect with others: [");
      a = element("a");
      t5 = text("Link");
      t6 = text("] ");
      create_component(qrcode.$$.fragment);
      this.h();
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
      t4 = claim_text(nodes, "\r\n\r\n					\r\n					Connect with others: [");
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "Link");
      a_nodes.forEach(detach);
      t6 = claim_text(nodes, "] ");
      claim_component(qrcode.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = "" + (location.origin + location.pathname + "?add=" + ctx[7]));
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
      insert_hydration(target, a, anchor);
      append_hydration(a, t5);
      insert_hydration(target, t6, anchor);
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
      if (!current || dirty & 128 && a_href_value !== (a_href_value = "" + (location.origin + location.pathname + "?add=" + ctx2[7]))) {
        attr(a, "href", a_href_value);
      }
      const qrcode_changes = {};
      if (dirty & 128)
        qrcode_changes.value = `${location.origin + location.pathname}?add=${ctx2[7]}`;
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
      if (detaching)
        detach(a);
      if (detaching)
        detach(t6);
      destroy_component(qrcode, detaching);
    }
  };
}
function create_else_block_1$1(ctx) {
  let h3;
  let t0;
  let t1;
  let button;
  let t2;
  let button_disabled_value;
  let mounted;
  let dispose;
  return {
    c() {
      h3 = element("h3");
      t0 = text("\u26A0\uFE0F PiperNet needs updating");
      t1 = space();
      button = element("button");
      t2 = text("Publish Latest");
      this.h();
    },
    l(nodes) {
      h3 = claim_element(nodes, "H3", {});
      var h3_nodes = children(h3);
      t0 = claim_text(h3_nodes, "\u26A0\uFE0F PiperNet needs updating");
      h3_nodes.forEach(detach);
      t1 = claim_space(nodes);
      button = claim_element(nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t2 = claim_text(button_nodes, "Publish Latest");
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      button.disabled = button_disabled_value = !ctx[1] || !ctx[6];
      attr(button, "class", "svelte-52klll");
    },
    m(target, anchor) {
      insert_hydration(target, h3, anchor);
      append_hydration(h3, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, button, anchor);
      append_hydration(button, t2);
      if (!mounted) {
        dispose = listen(button, "click", ctx[10]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 66 && button_disabled_value !== (button_disabled_value = !ctx2[1] || !ctx2[6])) {
        button.disabled = button_disabled_value;
      }
    },
    d(detaching) {
      if (detaching)
        detach(h3);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(button);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_4(ctx) {
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
function create_fragment$4(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[2] && create_if_block$3(ctx);
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
      if (ctx2[2]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 4) {
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { rootCID } = $$props;
  let { wallet } = $$props;
  let { hypnsNode } = $$props;
  let HyPNSComponent, latestHypns;
  let hypnsInstance, instanceReady, publish;
  let publicKeyHex;
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
    $$invalidate(7, publicKeyHex = bufftoHex(pk));
  }
  async function handleOpen() {
    console.log("Opening ", { publicKeyHex });
    $$invalidate(4, hypnsInstance = await hypnsNode.open({
      keypair: { publicKey: publicKeyHex },
      wallet
    }));
    hypnsInstance.on("update", (val) => {
      console.log("Update from ", { hypnsInstance });
      $$invalidate(3, latestHypns = val.ipld);
    });
    $$invalidate(5, instanceReady = await hypnsInstance.ready());
    console.log({ instanceReady });
    $$invalidate(3, latestHypns = hypnsInstance.latest);
    $$invalidate(6, publish = () => {
      hypnsInstance.publish({ ipld: rootCID.toV1().toString() });
    });
  }
  async function handlePublish() {
    publish();
  }
  function switch_instance_hypnsNode_binding(value) {
    hypnsNode = value;
    $$invalidate(0, hypnsNode);
  }
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(1, rootCID = $$props2.rootCID);
    if ("wallet" in $$props2)
      $$invalidate(11, wallet = $$props2.wallet);
    if ("hypnsNode" in $$props2)
      $$invalidate(0, hypnsNode = $$props2.hypnsNode);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2049) {
      wallet && hypnsNode && initHypns();
    }
  };
  return [
    hypnsNode,
    rootCID,
    HyPNSComponent,
    latestHypns,
    hypnsInstance,
    instanceReady,
    publish,
    publicKeyHex,
    opts,
    handleOpen,
    handlePublish,
    wallet,
    switch_instance_hypnsNode_binding
  ];
}
class HypnsManager extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { rootCID: 1, wallet: 11, hypnsNode: 0 });
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
function create_if_block$2(ctx) {
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
function create_fragment$3(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return create_if_block$2;
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
function instance$3($$self, $$props, $$invalidate) {
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
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { decryptFromTagNode: 2, tagNode: 0 });
  }
}
var Contacts_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i].handle;
  child_ctx[10] = list[i].pubKey;
  return child_ctx;
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
      attr(input, "class", "svelte-1uzs6ik");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, label, anchor);
      append_hydration(label, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, input, anchor);
      set_input_value(input, ctx[9]);
      if (!mounted) {
        dispose = listen(input, "input", ctx[18]);
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & 512 && input.value !== ctx2[9]) {
        set_input_value(input, ctx2[9]);
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
      if (dirty & 33562655) {
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
  let t_value = ctx[9] + "";
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
      if (dirty & 8 && t_value !== (t_value = ctx2[9] + ""))
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
  let t1_value = ctx[10] + "";
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
      if (dirty & 8 && t1_value !== (t1_value = ctx2[10] + ""))
        set_data(t1, t1_value);
    },
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_if_block_2$1(ctx) {
  let tagaccess;
  let current;
  tagaccess = new TagAccess({
    props: {
      tag: ctx[13].tag,
      pubKey: ctx[10],
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
      if (dirty & 8192)
        tagaccess_changes.tag = ctx2[13].tag;
      if (dirty & 8)
        tagaccess_changes.pubKey = ctx2[10];
      if (dirty & 4)
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
      tagNode: ctx[13],
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
      if (dirty & 8192)
        tagvalue_changes.tagNode = ctx2[13];
      if (dirty & 16)
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
  let if_block0 = create_if_block_2$1(ctx);
  let if_block1 = ctx[13].tag === "Profile" && create_if_block_1$1(ctx);
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
      if (ctx2[13].tag === "Profile") {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 8192) {
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
      rootCID: ctx[25],
      getTagNodes: ctx[0],
      $$slots: {
        default: [
          create_default_slot_1,
          ({ tagNode }) => ({ 13: tagNode }),
          ({ tagNode }) => tagNode ? 8192 : 0
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
      if (dirty & 33554432)
        gettags_changes.rootCID = ctx2[25];
      if (dirty & 1)
        gettags_changes.getTagNodes = ctx2[0];
      if (dirty & 67117084) {
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
      pubKey: ctx[10],
      hypnsNode: ctx[1],
      $$slots: {
        default: [
          create_default_slot$1,
          ({ latestHypns }) => ({ 25: latestHypns }),
          ({ latestHypns }) => latestHypns ? 33554432 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
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
      if (dirty & 8)
        pipernet_changes.pubKey = ctx2[10];
      if (dirty & 2)
        pipernet_changes.hypnsNode = ctx2[1];
      if (dirty & 100663325) {
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
      attr(div, "class", "card-container svelte-1uzs6ik");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(contactcard, div, null);
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const contactcard_changes = {};
      if (dirty & 67108895) {
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
  let div4;
  let div3;
  let h1;
  let t0;
  let t1;
  let div0;
  let input0;
  let t2;
  let div1;
  let input1;
  let t3_value = (ctx[7] ? "\u2714\uFE0F Valid Public Key" : "") + "";
  let t3;
  let t4;
  let t5;
  let div2;
  let label;
  let t6;
  let button;
  let t7;
  let button_disabled_value;
  let div4_transition;
  let t8;
  let if_block1_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[7] && create_if_block_3(ctx);
  let if_block1 = ctx[3] && create_if_block$1(ctx);
  return {
    c() {
      div4 = element("div");
      div3 = element("div");
      h1 = element("h1");
      t0 = text(tag);
      t1 = space();
      div0 = element("div");
      input0 = element("input");
      t2 = space();
      div1 = element("div");
      input1 = element("input");
      t3 = text(t3_value);
      t4 = space();
      if (if_block0)
        if_block0.c();
      t5 = space();
      div2 = element("div");
      label = element("label");
      t6 = space();
      button = element("button");
      t7 = text("Save");
      t8 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      h1 = claim_element(div3_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, tag);
      h1_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input0 = claim_element(div0_nodes, "INPUT", { placeholder: true, class: true });
      div0_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      input1 = claim_element(div1_nodes, "INPUT", { class: true });
      t3 = claim_text(div1_nodes, t3_value);
      div1_nodes.forEach(detach);
      t4 = claim_space(div3_nodes);
      if (if_block0)
        if_block0.l(div3_nodes);
      t5 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      label = claim_element(div2_nodes, "LABEL", { for: true });
      var label_nodes = children(label);
      label_nodes.forEach(detach);
      t6 = claim_space(div2_nodes);
      button = claim_element(div2_nodes, "BUTTON", {});
      var button_nodes = children(button);
      t7 = claim_text(button_nodes, "Save");
      button_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      t8 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(h1, "class", "tag");
      attr(input0, "placeholder", "publicKey friends contacts");
      input0.disabled = true;
      attr(input0, "class", "svelte-1uzs6ik");
      attr(div0, "class", "tag keywords");
      attr(input1, "class", "svelte-1uzs6ik");
      attr(div1, "class", "item svelte-1uzs6ik");
      attr(label, "for", "preview");
      button.disabled = button_disabled_value = !ctx[9] || !ctx[10] || ctx[8];
      attr(div2, "class", "submit");
      attr(div3, "class", "data-entry svelte-1uzs6ik");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div3);
      append_hydration(div3, h1);
      append_hydration(h1, t0);
      append_hydration(div3, t1);
      append_hydration(div3, div0);
      append_hydration(div0, input0);
      set_input_value(input0, ctx[5]);
      append_hydration(div3, t2);
      append_hydration(div3, div1);
      append_hydration(div1, input1);
      ctx[16](input1);
      set_input_value(input1, ctx[10]);
      append_hydration(div1, t3);
      append_hydration(div3, t4);
      if (if_block0)
        if_block0.m(div3, null);
      append_hydration(div3, t5);
      append_hydration(div3, div2);
      append_hydration(div2, label);
      append_hydration(div2, t6);
      append_hydration(div2, button);
      append_hydration(button, t7);
      insert_hydration(target, t8, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input0, "input", ctx[15]),
          listen(input1, "input", ctx[17]),
          listen(input1, "input", ctx[11]),
          listen(input1, "change", ctx[11]),
          listen(input1, "focus", ctx[11]),
          listen(button, "click", prevent_default(ctx[12]))
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & 32 && input0.value !== ctx[5]) {
        set_input_value(input0, ctx[5]);
      }
      if (dirty & 1024 && input1.value !== ctx[10]) {
        set_input_value(input1, ctx[10]);
      }
      if ((!current || dirty & 128) && t3_value !== (t3_value = (ctx[7] ? "\u2714\uFE0F Valid Public Key" : "") + ""))
        set_data(t3, t3_value);
      if (ctx[7]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0 = create_if_block_3(ctx);
          if_block0.c();
          if_block0.m(div3, t5);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (!current || dirty & 1792 && button_disabled_value !== (button_disabled_value = !ctx[9] || !ctx[10] || ctx[8])) {
        button.disabled = button_disabled_value;
      }
      if (ctx[3]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
          if (dirty & 8) {
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
      add_render_callback(() => {
        if (!div4_transition)
          div4_transition = create_bidirectional_transition(div4, slide, {
            delay: 100,
            duration: 400,
            easing: quintOut
          }, true);
        div4_transition.run(1);
      });
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      if (!div4_transition)
        div4_transition = create_bidirectional_transition(div4, slide, {
          delay: 100,
          duration: 400,
          easing: quintOut
        }, false);
      div4_transition.run(0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div4);
      ctx[16](null);
      if (if_block0)
        if_block0.d();
      if (detaching && div4_transition)
        div4_transition.end();
      if (detaching)
        detach(t8);
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
  component_subscribe($$self, page, ($$value) => $$invalidate(20, $page = $$value));
  component_subscribe($$self, contacts, ($$value) => $$invalidate(21, $contacts = $$value));
  let { getTagNodes } = $$props;
  let { hypnsNode } = $$props;
  let { checkAccess } = $$props;
  let { decryptedData } = $$props;
  let { decryptFromTagNode } = $$props;
  const dispatch = createEventDispatcher();
  let schema;
  let handle, pubKey, pubKeyInput;
  let tagNode;
  let valid;
  let submitting;
  onMount(async () => {
    let params = new URLSearchParams(location.search);
    if ($page.url.searchParams.has("add")) {
      $$invalidate(10, pubKey = $page.url.searchParams.get("add"));
      await tick();
      pubKeyInput.focus();
    } else if (params.has("add")) {
      $$invalidate(10, pubKey = params.get("add"));
      await tick();
      pubKeyInput.focus();
    }
  });
  function onSubmitted() {
    $$invalidate(8, submitting = false);
    $$invalidate(9, handle = "");
    $$invalidate(10, pubKey = "");
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
    $$invalidate(10, pubKey);
  }
  function input_input_handler() {
    handle = this.value;
    $$invalidate(9, handle);
  }
  $$self.$$set = ($$props2) => {
    if ("getTagNodes" in $$props2)
      $$invalidate(0, getTagNodes = $$props2.getTagNodes);
    if ("hypnsNode" in $$props2)
      $$invalidate(1, hypnsNode = $$props2.hypnsNode);
    if ("checkAccess" in $$props2)
      $$invalidate(2, checkAccess = $$props2.checkAccess);
    if ("decryptedData" in $$props2)
      $$invalidate(3, decryptedData = $$props2.decryptedData);
    if ("decryptFromTagNode" in $$props2)
      $$invalidate(4, decryptFromTagNode = $$props2.decryptFromTagNode);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8) {
      if (decryptedData)
        set_store_value(contacts, $contacts = decryptedData, $contacts);
    }
  };
  return [
    getTagNodes,
    hypnsNode,
    checkAccess,
    decryptedData,
    decryptFromTagNode,
    schema,
    pubKeyInput,
    valid,
    submitting,
    handle,
    pubKey,
    handleValidate,
    handleAddContact,
    tagNode,
    onSubmitted,
    input0_input_handler,
    input1_binding,
    input1_input_handler,
    input_input_handler
  ];
}
class Contacts extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      getTagNodes: 0,
      hypnsNode: 1,
      checkAccess: 2,
      decryptedData: 3,
      decryptFromTagNode: 4,
      onSubmitted: 14
    });
  }
  get onSubmitted() {
    return this.$$.ctx[14];
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
function create_else_block_2(ctx) {
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
function create_if_block_2(ctx) {
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
function create_else_block_1(ctx) {
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
function create_if_block_1(ctx) {
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
      hypnsNode: ctx2[5],
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
        switch_instance_changes.hypnsNode = ctx[5];
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
function create_else_block(ctx) {
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
function create_if_block(ctx) {
  let hypnsmanager;
  let updating_hypnsNode;
  let current;
  function hypnsmanager_hypnsNode_binding(value) {
    ctx[12](value);
  }
  let hypnsmanager_props = {
    wallet: ctx[0],
    rootCID: ctx[1]
  };
  if (ctx[5] !== void 0) {
    hypnsmanager_props.hypnsNode = ctx[5];
  }
  hypnsmanager = new HypnsManager({ props: hypnsmanager_props });
  binding_callbacks.push(() => bind(hypnsmanager, "hypnsNode", hypnsmanager_hypnsNode_binding));
  return {
    c() {
      create_component(hypnsmanager.$$.fragment);
    },
    l(nodes) {
      claim_component(hypnsmanager.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(hypnsmanager, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const hypnsmanager_changes = {};
      if (dirty & 1)
        hypnsmanager_changes.wallet = ctx2[0];
      if (dirty & 2)
        hypnsmanager_changes.rootCID = ctx2[1];
      if (!updating_hypnsNode && dirty & 32) {
        updating_hypnsNode = true;
        hypnsmanager_changes.hypnsNode = ctx2[5];
        add_flush_callback(() => updating_hypnsNode = false);
      }
      hypnsmanager.$set(hypnsmanager_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(hypnsmanager.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(hypnsmanager.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(hypnsmanager, detaching);
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
  let current_block_type_index_2;
  let if_block2;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_2, create_else_block_2];
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
  const if_block_creators_1 = [create_if_block_1, create_else_block_1];
  const if_blocks_1 = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[0] && ctx2[0].proxcryptor && ctx2[3] && ctx2[4])
      return 0;
    return 1;
  }
  current_block_type_index_1 = select_block_type_1(ctx);
  if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  const if_block_creators_2 = [create_if_block, create_else_block];
  const if_blocks_2 = [];
  function select_block_type_2(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index_2 = select_block_type_2(ctx);
  if_block2 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx);
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
      if_block2.c();
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
      if_block2.l(div1_nodes);
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
      if_blocks_2[current_block_type_index_2].m(div1, null);
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
      let previous_block_index_2 = current_block_type_index_2;
      current_block_type_index_2 = select_block_type_2(ctx2);
      if (current_block_type_index_2 === previous_block_index_2) {
        if_blocks_2[current_block_type_index_2].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks_2[previous_block_index_2], 1, 1, () => {
          if_blocks_2[previous_block_index_2] = null;
        });
        check_outros();
        if_block2 = if_blocks_2[current_block_type_index_2];
        if (!if_block2) {
          if_block2 = if_blocks_2[current_block_type_index_2] = if_block_creators_2[current_block_type_index_2](ctx2);
          if_block2.c();
        } else {
          if_block2.p(ctx2, dirty);
        }
        transition_in(if_block2, 1);
        if_block2.m(div1, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if_blocks[current_block_type_index].d();
      destroy_each(each_blocks, detaching);
      if_blocks_1[current_block_type_index_1].d();
      if_blocks_2[current_block_type_index_2].d();
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
  let hypnsNode;
  let Web3WalletMenu;
  let start = Date.now();
  let onSubmitted;
  onMount(async () => {
    if (!wallet)
      loadWallet();
    if (!ipfsNode)
      loadIPFS();
    async function loadWallet() {
      $$invalidate(6, { Web3WalletMenu } = await __vitePreload(() => import("./index-d302f1ba.js"), true ? ["chunks/index-d302f1ba.js","assets/index-a39541f0.css","chunks/vendor-ab2ef118.js"] : void 0), Web3WalletMenu);
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
  function hypnsmanager_hypnsNode_binding(value) {
    hypnsNode = value;
    $$invalidate(5, hypnsNode);
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
    hypnsNode,
    Web3WalletMenu,
    onSubmitted,
    switch_instance_wallet_binding,
    select_change_handler,
    switch_instance_onSubmitted_binding,
    dagjose_rootCID_binding,
    hypnsmanager_hypnsNode_binding
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
//# sourceMappingURL=index-e798c16c.js.map
