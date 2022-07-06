import { SvelteComponent, init, safe_not_equal, create_slot, HtmlTagHydration, empty, claim_html_tag, insert_hydration, detach, element, text, space, claim_element, children, claim_text, claim_space, attr, append_hydration, listen, prevent_default, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, add_render_callback, create_bidirectional_transition, transition_out, createEventDispatcher, set_input_value, noop, handle_promise, update_await_block_branch, group_outros, check_outros, destroy_each, onMount, set_data, svg_element, claim_svg_element, create_component, claim_component, mount_component, destroy_component, component_subscribe, query_selector_all, src_url_equal, is_function, set_store_value, binding_callbacks, bind, null_to_empty, add_flush_callback, set_style, run_all, tick, select_option, select_value } from "../chunks/index-64ae2edc.js";
import { writable, __vitePreload } from "../chunks/preload-helper-ef2a18a4.js";
import { quintOut, getTagNodes, validatePubKey, CID } from "../chunks/cid-d85b89cf.js";
import { jsQR, Modal, PiperNet, HypnsManager } from "../chunks/Contacts.svelte_svelte_type_style_lang-6b2bb9e7.js";
import { page } from "../chunks/stores-bdc5e892.js";
import { slide } from "../chunks/index-1b64b11a.js";
import "../chunks/singletons-cdabada9.js";
import "../chunks/_commonjsHelpers-9b98600b.js";
function fallback_block$3(ctx) {
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
      html_tag = new HtmlTagHydration(false);
      html_anchor = empty();
      this.h();
    },
    l(nodes) {
      html_tag = claim_html_tag(nodes, false);
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
function create_fragment$j(ctx) {
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
  const default_slot_or_fallback = default_slot || fallback_block$3(ctx);
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
function instance$i($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { decryptedData } = $$props;
  const dispatch = createEventDispatcher();
  let schema;
  let value;
  function textarea_input_handler() {
    value = this.value;
    $$invalidate(1, value);
  }
  const click_handler2 = () => dispatch("handleSubmit", { tag: tag$1, data: { value, schema } });
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
    click_handler2
  ];
}
class Profile extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$j, safe_not_equal, { decryptedData: 0 });
  }
}
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
      attr(span, "class", "missing svelte-ip382u");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop,
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
      attr(span, "class", "missing svelte-ip382u");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function fallback_block$2(ctx) {
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
      attr(span, "class", "missing svelte-ip382u");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function create_fragment$i(ctx) {
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
  const latest_slot_or_fallback = latest_slot || fallback_block$2();
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
      attr(h2, "class", "svelte-ip382u");
      attr(div0, "class", "address svelte-ip382u");
      attr(div1, "class", "email svelte-ip382u");
      attr(article, "class", "contact-card svelte-ip382u");
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
function instance$h($$self, $$props, $$invalidate) {
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
    init(this, options, instance$h, create_fragment$i, safe_not_equal, {});
  }
}
function get_each_context$2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
const get_default_slot_changes$4 = (dirty) => ({ tagNode: dirty & 1 });
const get_default_slot_context$4 = (ctx) => ({ tagNode: ctx[5] });
function create_if_block$c(ctx) {
  let await_block_anchor;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$3,
    then: create_then_block$3,
    catch: create_catch_block$3,
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
function create_catch_block$3(ctx) {
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
function create_then_block$3(ctx) {
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
      if (dirty & 5) {
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
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], get_default_slot_context$4);
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
        if (default_slot.p && (!current || dirty & 5)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, get_default_slot_changes$4), get_default_slot_context$4);
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
function create_pending_block$3(ctx) {
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
function create_fragment$h(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block$c(ctx);
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
          if_block = create_if_block$c(ctx2);
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
function instance$g($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { rootCID } = $$props;
  let tagNodes;
  async function processRootCID() {
    $$invalidate(0, tagNodes = await getTagNodes({ rootCID, ipfsNode: globalThis.ipfsNode }));
  }
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(1, rootCID = $$props2.rootCID);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 2) {
      if (rootCID)
        processRootCID();
    }
  };
  return [tagNodes, rootCID, $$scope, slots];
}
class GetTags extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$h, safe_not_equal, { rootCID: 1 });
  }
}
function create_else_block$4(ctx) {
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
function create_if_block$b(ctx) {
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
function create_fragment$g(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (ctx2[2] && ctx2[1])
      return create_if_block$b;
    return create_else_block$4;
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
function instance$f($$self, $$props, $$invalidate) {
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
    init(this, options, instance$f, create_fragment$g, safe_not_equal, { tag: 0, pubKey: 3, checkAccess: 4 });
  }
}
function create_fragment$f(ctx) {
  let svg;
  let path;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        xmlns: true,
        "xml:space": true,
        viewBox: true,
        class: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "d", "M367.75 288.5c-25 0-47.8 9.7-64.7 25.5l-65.2-39.4c3.7-11.2 5.7-23.1 5.7-35.6 0-12.4-2-24.4-5.7-35.6l65.3-39.5c16.9 15.8 39.7 25.5 64.7 25.5 52.3 0 94.7-42.4 94.7-94.7S420.15 0 367.85 0s-94.7 42.4-94.7 94.7c0 8.7 1.2 17.2 3.4 25.2l-65.3 39.5c-20.7-21.3-49.8-34.6-81.9-34.6-63 0-114.1 51.1-114.1 114.1S66.35 353 129.35 353c32.1 0 61.1-13.3 81.9-34.6l65.3 39.5c-2.2 8-3.4 16.5-3.4 25.2 0 52.3 42.4 94.7 94.7 94.7s94.7-42.4 94.7-94.7-42.5-94.6-94.8-94.6zM92.15 239c0 9.4-7.6 17-17 17s-17-7.6-17-17c0-39.3 32-71.3 71.3-71.3 9.4 0 17 7.6 17 17s-7.6 17-17 17c-20.6.1-37.3 16.8-37.3 37.3z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "xml:space", "preserve");
      attr(svg, "viewBox", "0 0 477.8 477.8");
      attr(svg, "class", "svelte-q8m63s");
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      append_hydration(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
class ShareIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$f, safe_not_equal, {});
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
function create_if_block_1$4(ctx) {
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
function create_if_block$a(ctx) {
  let await_block_anchor;
  let promise;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block$2,
    then: create_then_block$2,
    catch: create_catch_block$2,
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
function create_catch_block$2(ctx) {
  return {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    d: noop
  };
}
function create_then_block$2(ctx) {
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
function create_pending_block$2(ctx) {
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
function create_fragment$e(ctx) {
  let div3;
  let div1;
  let div0;
  let shareicon;
  let t0;
  let input;
  let input_placeholder_value;
  let t1;
  let div2;
  let t2;
  let current;
  let mounted;
  let dispose;
  shareicon = new ShareIcon({});
  function select_block_type(ctx2, dirty) {
    if (ctx2[2])
      return create_if_block_1$4;
    if (ctx2[1])
      return create_if_block_2$2;
  }
  let current_block_type = select_block_type(ctx);
  let if_block0 = current_block_type && current_block_type(ctx);
  let if_block1 = ctx[3] && create_if_block$a(ctx);
  return {
    c() {
      div3 = element("div");
      div1 = element("div");
      div0 = element("div");
      create_component(shareicon.$$.fragment);
      t0 = space();
      input = element("input");
      t1 = space();
      div2 = element("div");
      if (if_block0)
        if_block0.c();
      t2 = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", {});
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(shareicon.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      input = claim_element(div1_nodes, "INPUT", { class: true, placeholder: true });
      div1_nodes.forEach(detach);
      t1 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      if (if_block0)
        if_block0.l(div2_nodes);
      div2_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      if (if_block1)
        if_block1.l(div3_nodes);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "share-item svelte-oto3uq");
      attr(input, "class", "share-item svelte-oto3uq");
      attr(input, "placeholder", input_placeholder_value = "Share " + ctx[0] + " with:");
      attr(div1, "class", "share svelte-oto3uq");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div1);
      append_hydration(div1, div0);
      mount_component(shareicon, div0, null);
      append_hydration(div1, t0);
      append_hydration(div1, input);
      set_input_value(input, ctx[1]);
      append_hydration(div3, t1);
      append_hydration(div3, div2);
      if (if_block0)
        if_block0.m(div2, null);
      append_hydration(div3, t2);
      if (if_block1)
        if_block1.m(div3, null);
      current = true;
      if (!mounted) {
        dispose = listen(input, "input", ctx[7]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (!current || dirty & 1 && input_placeholder_value !== (input_placeholder_value = "Share " + ctx2[0] + " with:")) {
        attr(input, "placeholder", input_placeholder_value);
      }
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
          if_block0.m(div2, null);
        }
      }
      if (ctx2[3]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$a(ctx2);
          if_block1.c();
          if_block1.m(div3, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(shareicon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(shareicon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(shareicon);
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
function instance$e($$self, $$props, $$invalidate) {
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
    init(this, options, instance$e, create_fragment$e, safe_not_equal, { tag: 0, setAccess: 5, contacts: 6 });
  }
}
const contacts = writable([]);
const get_default_slot_changes_1 = (dirty) => ({});
const get_default_slot_context_1 = (ctx) => ({
  decryptedData: null,
  refreshedRootCID: ctx[2]
});
const get_default_slot_changes$3 = (dirty) => ({
  decryptedData: dirty & 64
});
const get_default_slot_context$3 = (ctx) => ({
  decryptedData: ctx[6],
  refreshedRootCID: ctx[2]
});
function create_else_block$3(ctx) {
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
function create_if_block$9(ctx) {
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
  let sharetagwith;
  let t;
  let current;
  sharetagwith = new ShareTagWith({
    props: {
      tag: ctx[0],
      setAccess: ctx[1],
      contacts: ctx[5]
    }
  });
  const default_slot_template = ctx[12].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[11], get_default_slot_context$3);
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
      if (dirty & 32)
        sharetagwith_changes.contacts = ctx2[5];
      sharetagwith.$set(sharetagwith_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2112)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(default_slot_template, ctx2[11], dirty, get_default_slot_changes$3), get_default_slot_context$3);
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
function create_pending_block$1(ctx) {
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
function create_fragment$d(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$9, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[4] && ctx2[3] && ctx2[6])
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
function instance$d($$self, $$props, $$invalidate) {
  let $contacts;
  component_subscribe($$self, contacts, ($$value) => $$invalidate(5, $contacts = $$value));
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
    console.log({ tag: tag2 });
    $$invalidate(4, ready = false);
    $$invalidate(10, currentRoodCID = rootCID);
    $$invalidate(3, tagNode = await getTagNode(tag2));
    console.log(tag2, { tagNode });
    if (tagNode && tagNode.hasOwnProperty("encryptedData"))
      $$invalidate(6, decryptedData = await decrypt(tagNode));
    $$invalidate(4, ready = true);
  }
  $$self.$$set = ($$props2) => {
    if ("getTagNode" in $$props2)
      $$invalidate(7, getTagNode = $$props2.getTagNode);
    if ("decrypt" in $$props2)
      $$invalidate(8, decrypt = $$props2.decrypt);
    if ("tag" in $$props2)
      $$invalidate(0, tag2 = $$props2.tag);
    if ("rootCID" in $$props2)
      $$invalidate(9, rootCID = $$props2.rootCID);
    if ("setAccess" in $$props2)
      $$invalidate(1, setAccess = $$props2.setAccess);
    if ("$$scope" in $$props2)
      $$invalidate(11, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1537) {
      if (tag2 && rootCID && currentRoodCID !== rootCID)
        refreshedRootCID();
    }
  };
  return [
    tag2,
    setAccess,
    refreshedRootCID,
    tagNode,
    ready,
    $contacts,
    decryptedData,
    getTagNode,
    decrypt,
    rootCID,
    currentRoodCID,
    $$scope,
    slots
  ];
}
class Common extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$d, safe_not_equal, {
      getTagNode: 7,
      decrypt: 8,
      tag: 0,
      rootCID: 9,
      setAccess: 1,
      refreshedRootCID: 2
    });
  }
  get refreshedRootCID() {
    return this.$$.ctx[2];
  }
}
const get_default_slot_changes$2 = (dirty) => ({
  getTagNodes: dirty & 32,
  checkAccess: dirty & 16,
  setAccess: dirty & 8,
  decryptFromTagNode: dirty & 4
});
const get_default_slot_context$2 = (ctx) => ({
  handleSubmit: ctx[7],
  decrypt: ctx[6],
  getTagNodes: ctx[5],
  getTagNode: ctx[8],
  checkAccess: ctx[4],
  setAccess: ctx[3],
  decryptFromTagNode: ctx[2]
});
function create_else_block$2(ctx) {
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
function create_if_block$8(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[19].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[18], get_default_slot_context$2);
  return {
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 262204)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[18], !current ? get_all_dirty_from_scope(ctx2[18]) : get_slot_changes(default_slot_template, ctx2[18], dirty, get_default_slot_changes$2), get_default_slot_context$2);
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
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment$c(ctx) {
  let script;
  let t0;
  let t1;
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$8, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0] && ctx2[1])
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
function instance$c($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { rootCID } = $$props;
  let { proxcryptor } = $$props;
  let { ipfsNode } = $$props;
  let { CID: CID2 } = $$props;
  let { tag: tag2 } = $$props;
  let loaded = false;
  let handleRootCIDUpdate;
  let loadRootCID;
  let joseCryptor;
  let setJoseCryptor;
  let decryptFromTagNode;
  let setAccess, checkAccess;
  let getTagNodes2;
  let { refreshedRootCID } = $$props;
  let { onSubmitted = () => {
  } } = $$props;
  onMount(async () => {
    const { ImmortalDB } = await __vitePreload(() => import("../chunks/index-17ddc90e.js"), true ? [] : void 0);
    const { DagJoseCryptor } = await __vitePreload(() => import("../chunks/dagjosecryptor-ca67e286.js"), true ? ["chunks/dagjosecryptor-ca67e286.js","chunks/_commonjsHelpers-9b98600b.js","chunks/cid-d85b89cf.js","chunks/index-64ae2edc.js","chunks/hash-2a1eb12b.js"] : void 0);
    loadRootCID = async () => {
      if (rootCID)
        return true;
      let res = await ImmortalDB.get(ROOT_CID);
      if (!res) {
        $$invalidate(9, rootCID = false);
        return true;
      }
      $$invalidate(9, rootCID = CID2.asCID(res) || CID2.parse(res));
      console.log("rootCID set in loadRootCID");
      return true;
    };
    await loadRootCID();
    $$invalidate(17, setJoseCryptor = async () => {
      $$invalidate(16, joseCryptor = new DagJoseCryptor(ipfsNode, proxcryptor, rootCID));
      if (!rootCID)
        $$invalidate(1, loaded = true);
    });
    $$invalidate(15, handleRootCIDUpdate = async () => {
      $$invalidate(9, rootCID = joseCryptor.rootCID);
      console.log("Updating rootCID", { rootCID: rootCID.toString() });
      ImmortalDB.set(ROOT_CID, rootCID.toString());
      $$invalidate(1, loaded = true);
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
  getTagNodes2 = async () => {
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
    } catch (error2) {
      console.warn(`${tag3} no DAG data`);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("rootCID" in $$props2)
      $$invalidate(9, rootCID = $$props2.rootCID);
    if ("proxcryptor" in $$props2)
      $$invalidate(0, proxcryptor = $$props2.proxcryptor);
    if ("ipfsNode" in $$props2)
      $$invalidate(10, ipfsNode = $$props2.ipfsNode);
    if ("CID" in $$props2)
      $$invalidate(11, CID2 = $$props2.CID);
    if ("tag" in $$props2)
      $$invalidate(12, tag2 = $$props2.tag);
    if ("refreshedRootCID" in $$props2)
      $$invalidate(13, refreshedRootCID = $$props2.refreshedRootCID);
    if ("onSubmitted" in $$props2)
      $$invalidate(14, onSubmitted = $$props2.onSubmitted);
    if ("$$scope" in $$props2)
      $$invalidate(18, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 131073) {
      if (proxcryptor && setJoseCryptor)
        setJoseCryptor();
    }
    if ($$self.$$.dirty & 98304) {
      if (joseCryptor && joseCryptor.rootCID && handleRootCIDUpdate)
        handleRootCIDUpdate();
    }
  };
  return [
    proxcryptor,
    loaded,
    decryptFromTagNode,
    setAccess,
    checkAccess,
    getTagNodes2,
    decrypt,
    handleSubmit,
    getTagNode,
    rootCID,
    ipfsNode,
    CID2,
    tag2,
    refreshedRootCID,
    onSubmitted,
    handleRootCIDUpdate,
    joseCryptor,
    setJoseCryptor,
    $$scope,
    slots
  ];
}
class DAGJose extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, create_fragment$c, safe_not_equal, {
      rootCID: 9,
      proxcryptor: 0,
      ipfsNode: 10,
      CID: 11,
      tag: 12,
      refreshedRootCID: 13,
      onSubmitted: 14
    });
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
function create_if_block$7(ctx) {
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
function create_fragment$b(ctx) {
  let div;
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return create_if_block$7;
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
function instance$b($$self, $$props, $$invalidate) {
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
    init(this, options, instance$b, create_fragment$b, safe_not_equal, { decryptFromTagNode: 2, tagNode: 0 });
  }
}
const stream = writable(null);
const error = writable(null);
const status = writable(null);
function create_fragment$a(ctx) {
  let div4;
  let div0;
  let t0;
  let div1;
  let t1;
  let div2;
  let t2;
  let div3;
  return {
    c() {
      div4 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      div2 = element("div");
      t2 = space();
      div3 = element("div");
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", {});
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t0 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", { class: true });
      children(div1).forEach(detach);
      t1 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", { class: true });
      children(div2).forEach(detach);
      t2 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      children(div3).forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "scanner-border scanner-border--top-left svelte-5ppqz9");
      attr(div1, "class", "scanner-border scanner-border--top-right svelte-5ppqz9");
      attr(div2, "class", "scanner-border scanner-border--bottom-left svelte-5ppqz9");
      attr(div3, "class", "scanner-border scanner-border--bottom-right svelte-5ppqz9");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div0);
      append_hydration(div4, t0);
      append_hydration(div4, div1);
      append_hydration(div4, t1);
      append_hydration(div4, div2);
      append_hydration(div4, t2);
      append_hydration(div4, div3);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div4);
    }
  };
}
class ScannerBorders extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$a, safe_not_equal, {});
  }
}
var scanIcon = "/dag-jose-proxcryptor-kit/_app/immutable/assets/scan-002b6a9a.svg";
const get_default_slot_changes$1 = (dirty) => ({ decodedData: dirty & 1 });
const get_default_slot_context$1 = (ctx) => ({ decodedData: ctx[0] });
function create_if_block_2$1(ctx) {
  let t0;
  let t1;
  return {
    c() {
      t0 = text(ctx[0]);
      t1 = text(";");
    },
    l(nodes) {
      t0 = claim_text(nodes, ctx[0]);
      t1 = claim_text(nodes, ";");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t0, ctx2[0]);
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
  let a;
  let t;
  return {
    c() {
      a = element("a");
      t = text(ctx[0]);
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes, ctx[0]);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "class", "results__link svelte-2uoird");
      attr(a, "href", ctx[0]);
      attr(a, "target", "_blank");
      attr(a, "rel", "noopener noreferrer");
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      append_hydration(a, t);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
      if (dirty & 1) {
        attr(a, "href", ctx2[0]);
      }
    },
    d(detaching) {
      if (detaching)
        detach(a);
    }
  };
}
function create_if_block$6(ctx) {
  let span;
  let t;
  return {
    c() {
      span = element("span");
      t = text("Scan a QR Code to send data here.");
      this.h();
    },
    l(nodes) {
      span = claim_element(nodes, "SPAN", { class: true });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Scan a QR Code to send data here.");
      span_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span, "class", "results__empty svelte-2uoird");
    },
    m(target, anchor) {
      insert_hydration(target, span, anchor);
      append_hydration(span, t);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(span);
    }
  };
}
function fallback_block$1(ctx) {
  let div2;
  let div0;
  let show_if;
  let t0;
  let div1;
  let button;
  let img;
  let img_src_value;
  let t1;
  let span;
  let t2;
  let mounted;
  let dispose;
  function select_block_type(ctx2, dirty) {
    var _a;
    if (dirty & 5)
      show_if = null;
    if (!ctx2[0] || ctx2[0] === "")
      return create_if_block$6;
    if (show_if == null)
      show_if = !!((_a = ctx2[0]) == null ? void 0 : _a.match(ctx2[2]));
    if (show_if)
      return create_if_block_1$3;
    if (ctx2[0])
      return create_if_block_2$1;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type && current_block_type(ctx);
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      if (if_block)
        if_block.c();
      t0 = space();
      div1 = element("div");
      button = element("button");
      img = element("img");
      t1 = space();
      span = element("span");
      t2 = text("New Scan");
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
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button = claim_element(div1_nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", { class: true, src: true, alt: true });
      t1 = claim_space(button_nodes);
      span = claim_element(button_nodes, "SPAN", {});
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, "New Scan");
      span_nodes.forEach(detach);
      button_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "results__data svelte-2uoird");
      attr(img, "class", "results__scan-icon svelte-2uoird");
      if (!src_url_equal(img.src, img_src_value = scanIcon))
        attr(img, "src", img_src_value);
      attr(img, "alt", "New Scan");
      attr(button, "type", "button");
      attr(button, "class", "results__button svelte-2uoird");
      attr(div1, "class", "results__button-container svelte-2uoird");
      attr(div2, "class", "results svelte-2uoird");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      if (if_block)
        if_block.m(div0, null);
      append_hydration(div2, t0);
      append_hydration(div2, div1);
      append_hydration(div1, button);
      append_hydration(button, img);
      append_hydration(button, t1);
      append_hydration(button, span);
      append_hydration(span, t2);
      if (!mounted) {
        dispose = listen(button, "click", function() {
          if (is_function(ctx[1]))
            ctx[1].apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if (if_block)
          if_block.d(1);
        if_block = current_block_type && current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(div0, null);
        }
      }
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      if (if_block) {
        if_block.d();
      }
      mounted = false;
      dispose();
    }
  };
}
function create_fragment$9(ctx) {
  let current;
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], get_default_slot_context$1);
  const default_slot_or_fallback = default_slot || fallback_block$1(ctx);
  return {
    c() {
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
    },
    l(nodes) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 17)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[4], !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, get_default_slot_changes$1), get_default_slot_context$1);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 7)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
    }
  };
}
function instance$a($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { active } = $$props;
  let { decodedData } = $$props;
  let { onNewScan } = $$props;
  let regex;
  $$self.$$set = ($$props2) => {
    if ("active" in $$props2)
      $$invalidate(3, active = $$props2.active);
    if ("decodedData" in $$props2)
      $$invalidate(0, decodedData = $$props2.decodedData);
    if ("onNewScan" in $$props2)
      $$invalidate(1, onNewScan = $$props2.onNewScan);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 8) {
      if (active) {
        const urlExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
        $$invalidate(2, regex = new RegExp(urlExp));
      }
    }
  };
  return [decodedData, onNewScan, regex, active, $$scope, slots];
}
class Results extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, create_fragment$9, safe_not_equal, { active: 3, decodedData: 0, onNewScan: 1 });
  }
}
function instance$9($$self, $$props, $$invalidate) {
  let $stream;
  let $error;
  let $status;
  component_subscribe($$self, stream, ($$value) => $$invalidate(2, $stream = $$value));
  component_subscribe($$self, error, ($$value) => $$invalidate(3, $error = $$value));
  component_subscribe($$self, status, ($$value) => $$invalidate(4, $status = $$value));
  onMount(() => {
    return () => {
      console.log("stop Component destroyed");
    };
  });
  const isMediaStream = (candidate) => candidate !== null && "getTracks" in candidate;
  function setStatus(params) {
    console.log(`Setting status ${params}`);
    set_store_value(status, $status = params, $status);
  }
  const useUserMedia = () => {
    set_store_value(stream, $stream = null, $stream);
    set_store_value(error, $error = null, $error);
    set_store_value(status, $status = "stopped", $status);
    function setError(params) {
      console.log("Setting erro");
      set_store_value(error, $error = params, $error);
    }
    function setStream(params) {
      console.log(`Setting stream`, { params });
      set_store_value(stream, $stream = params, $stream);
    }
    const startMediaStream = () => {
      setStatus("pending");
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: "environment" }
      }).then((userStream) => {
        setStream(userStream);
        setStatus("resolved");
      }).catch((err) => {
        setError(err);
        setStatus("rejected");
      });
    };
    const stopMediaStream = stopMedia;
    return { stopMediaStream, startMediaStream };
  };
  function stopMedia() {
    console.log("stopping media stream");
    if (isMediaStream($stream)) {
      $stream.getTracks().forEach((track) => {
        track.stop();
        $stream.removeTrack(track);
      });
      console.log({ streams: $stream });
      setStatus("stopped");
    }
  }
  return [useUserMedia];
}
class Use_usermedia extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, null, safe_not_equal, { useUserMedia: 0 });
  }
  get useUserMedia() {
    return this.$$.ctx[0];
  }
}
const get_default_slot_changes = (dirty) => ({ result: dirty & 1 });
const get_default_slot_context = (ctx) => ({ result: ctx[0] });
function fallback_block(ctx) {
  let results;
  let current;
  results = new Results({
    props: {
      active: ctx[0] !== null,
      decodedData: ctx[0],
      onNewScan: ctx[15]
    }
  });
  return {
    c() {
      create_component(results.$$.fragment);
    },
    l(nodes) {
      claim_component(results.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(results, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const results_changes = {};
      if (dirty & 1)
        results_changes.active = ctx2[0] !== null;
      if (dirty & 1)
        results_changes.decodedData = ctx2[0];
      if (dirty & 1)
        results_changes.onNewScan = ctx2[15];
      results.$set(results_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(results.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(results.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(results, detaching);
    }
  };
}
function create_fragment$8(ctx) {
  let usermedia;
  let updating_useUserMedia;
  let t0;
  let div3;
  let div0;
  let canvas_1;
  let t1;
  let video_1;
  let t2;
  let scannerborders;
  let t3;
  let div2;
  let div1;
  let t4;
  let div3_class_value;
  let t5;
  let current;
  let mounted;
  let dispose;
  function usermedia_useUserMedia_binding(value) {
    ctx[12](value);
  }
  let usermedia_props = {};
  if (ctx[4] !== void 0) {
    usermedia_props.useUserMedia = ctx[4];
  }
  usermedia = new Use_usermedia({ props: usermedia_props });
  binding_callbacks.push(() => bind(usermedia, "useUserMedia", usermedia_useUserMedia_binding));
  scannerborders = new ScannerBorders({});
  const default_slot_template = ctx[11].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[10], get_default_slot_context);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  return {
    c() {
      create_component(usermedia.$$.fragment);
      t0 = space();
      div3 = element("div");
      div0 = element("div");
      canvas_1 = element("canvas");
      t1 = space();
      video_1 = element("video");
      t2 = space();
      create_component(scannerborders.$$.fragment);
      t3 = space();
      div2 = element("div");
      div1 = element("div");
      t4 = text("Scan a QR code with your camera to see what it says.");
      t5 = space();
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      claim_component(usermedia.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      canvas_1 = claim_element(div0_nodes, "CANVAS", { class: true });
      children(canvas_1).forEach(detach);
      t1 = claim_space(div0_nodes);
      video_1 = claim_element(div0_nodes, "VIDEO", { class: true });
      var video_1_nodes = children(video_1);
      video_1_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      claim_component(scannerborders.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "Scan a QR code with your camera to see what it says.");
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      t5 = claim_space(nodes);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
      this.h();
    },
    h() {
      attr(canvas_1, "class", "scanner__canvas svelte-hxohih");
      attr(video_1, "class", "scanner__video svelte-hxohih");
      attr(div0, "class", "scanner__aspect-ratio-container svelte-hxohih");
      attr(div2, "class", "scanner-tip svelte-hxohih");
      attr(div3, "class", div3_class_value = null_to_empty(`scanner ${ctx[2] ? "" : "scanner--hidden"}`) + " svelte-hxohih");
    },
    m(target, anchor) {
      mount_component(usermedia, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, canvas_1);
      ctx[13](canvas_1);
      append_hydration(div0, t1);
      append_hydration(div0, video_1);
      ctx[14](video_1);
      append_hydration(div0, t2);
      mount_component(scannerborders, div0, null);
      append_hydration(div3, t3);
      append_hydration(div3, div2);
      append_hydration(div2, div1);
      append_hydration(div1, t4);
      insert_hydration(target, t5, anchor);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      current = true;
      if (!mounted) {
        dispose = listen(video_1, "canplay", ctx[5]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      const usermedia_changes = {};
      if (!updating_useUserMedia && dirty & 16) {
        updating_useUserMedia = true;
        usermedia_changes.useUserMedia = ctx2[4];
        add_flush_callback(() => updating_useUserMedia = false);
      }
      usermedia.$set(usermedia_changes);
      if (!current || dirty & 4 && div3_class_value !== (div3_class_value = null_to_empty(`scanner ${ctx2[2] ? "" : "scanner--hidden"}`) + " svelte-hxohih")) {
        attr(div3, "class", div3_class_value);
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1025)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[10], !current ? get_all_dirty_from_scope(ctx2[10]) : get_slot_changes(default_slot_template, ctx2[10], dirty, get_default_slot_changes), get_default_slot_context);
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 1)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(usermedia.$$.fragment, local);
      transition_in(scannerborders.$$.fragment, local);
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(usermedia.$$.fragment, local);
      transition_out(scannerborders.$$.fragment, local);
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usermedia, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div3);
      ctx[13](null);
      ctx[14](null);
      destroy_component(scannerborders);
      if (detaching)
        detach(t5);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let active;
  let $status;
  let $stream;
  let $error;
  component_subscribe($$self, status, ($$value) => $$invalidate(8, $status = $$value));
  component_subscribe($$self, stream, ($$value) => $$invalidate(9, $stream = $$value));
  component_subscribe($$self, error, ($$value) => $$invalidate(17, $error = $$value));
  let { $$slots: slots = {}, $$scope } = $$props;
  let { result = null } = $$props;
  let { stopMediaStream = null } = $$props;
  let startMediaStream;
  const dispatch = createEventDispatcher();
  let video = null;
  let canvas = null;
  let useUserMedia;
  onMount(() => {
    $$invalidate(6, { stopMediaStream, startMediaStream } = useUserMedia(), stopMediaStream, $$invalidate(7, startMediaStream));
    return () => {
      console.log("Component destroyed");
      stopMediaStream();
      $$invalidate(1, video.srcObject = null, video);
    };
  });
  const startCapturing = () => {
    if (!canvas || !video)
      return;
    const context = canvas.getContext("2d");
    if (!context)
      return;
    const { width, height } = canvas;
    context.drawImage(video, 0, 0, width, height);
    const imageData = context.getImageData(0, 0, width, height);
    const qrCode = jsQR(imageData.data, width, height);
    if (qrCode === null) {
      console.log("timeout");
      setTimeout(startCapturing, 750);
    } else {
      $$invalidate(0, result = qrCode.data);
      dispatch("successfulScan", qrCode.data);
      stopMediaStream();
      $$invalidate(1, video.srcObject = null, video);
    }
  };
  const handleCanPlay = () => {
    console.log("canplay");
    if (canvas === null || canvas === null || video === null || video === null) {
      return;
    }
    $$invalidate(3, canvas.width = video.videoWidth, canvas);
    $$invalidate(3, canvas.height = video.videoHeight, canvas);
    if ($error !== null)
      ;
    else {
      startCapturing();
    }
  };
  function usermedia_useUserMedia_binding(value) {
    useUserMedia = value;
    $$invalidate(4, useUserMedia);
  }
  function canvas_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      canvas = $$value;
      $$invalidate(3, canvas);
    });
  }
  function video_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      video = $$value;
      $$invalidate(1, video), $$invalidate(8, $status), $$invalidate(9, $stream);
    });
  }
  const func = () => $$invalidate(0, result = null);
  $$self.$$set = ($$props2) => {
    if ("result" in $$props2)
      $$invalidate(0, result = $$props2.result);
    if ("stopMediaStream" in $$props2)
      $$invalidate(6, stopMediaStream = $$props2.stopMediaStream);
    if ("$$scope" in $$props2)
      $$invalidate(10, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      $$invalidate(2, active = !result);
    }
    if ($$self.$$.dirty & 770) {
      if ($status === "resolved" && video !== null && $stream) {
        console.log("Resolve, stream");
        $$invalidate(1, video.srcObject = $stream, video);
        video.play().catch(console.error);
      }
    }
    if ($$self.$$.dirty & 388) {
      if (active && $status === "stopped" && startMediaStream) {
        startMediaStream();
      }
    }
  };
  return [
    result,
    video,
    active,
    canvas,
    useUserMedia,
    handleCanPlay,
    stopMediaStream,
    startMediaStream,
    $status,
    $stream,
    $$scope,
    slots,
    usermedia_useUserMedia_binding,
    canvas_1_binding,
    video_1_binding,
    func
  ];
}
class Scanner extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { result: 0, stopMediaStream: 6 });
  }
}
function create_if_block$5(ctx) {
  let current;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[2], null);
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
        if (default_slot.p && (!current || dirty & 4)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[2], !current ? get_all_dirty_from_scope(ctx2[2]) : get_slot_changes(default_slot_template, ctx2[2], dirty, null), null);
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
function create_fragment$7(ctx) {
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
  let if_block = ctx[0] && create_if_block$5(ctx);
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
        dispose = listen(div, "click", ctx[1]);
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
          if_block = create_if_block$5(ctx2);
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
function instance$7($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  let { scan } = $$props;
  function handleClick(e) {
    $$invalidate(0, scan = true);
    dispatch("click", true);
  }
  $$self.$$set = ($$props2) => {
    if ("scan" in $$props2)
      $$invalidate(0, scan = $$props2.scan);
    if ("$$scope" in $$props2)
      $$invalidate(2, $$scope = $$props2.$$scope);
  };
  return [scan, handleClick, $$scope, slots];
}
class ScanIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { scan: 0 });
  }
}
function create_default_slot$3(ctx) {
  let div2;
  let h1;
  let t0;
  let t1;
  let div0;
  let t2;
  let t3;
  let div1;
  let t4;
  let button0;
  let t5;
  let t6;
  let button1;
  let t7;
  let t8;
  let button2;
  let t9;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      h1 = element("h1");
      t0 = text(ctx[0]);
      t1 = space();
      div0 = element("div");
      t2 = text(ctx[1]);
      t3 = space();
      div1 = element("div");
      t4 = space();
      button0 = element("button");
      t5 = text("Add Contact");
      t6 = space();
      button1 = element("button");
      t7 = text("Grant Access to Tag(s)");
      t8 = space();
      button2 = element("button");
      t9 = text("Request Access");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      h1 = claim_element(div2_nodes, "H1", { contenteditable: true, class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, ctx[0]);
      h1_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      t2 = claim_text(div0_nodes, ctx[1]);
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      children(div1).forEach(detach);
      t4 = claim_space(div2_nodes);
      button0 = claim_element(div2_nodes, "BUTTON", { class: true });
      var button0_nodes = children(button0);
      t5 = claim_text(button0_nodes, "Add Contact");
      button0_nodes.forEach(detach);
      t6 = claim_space(div2_nodes);
      button1 = claim_element(div2_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t7 = claim_text(button1_nodes, "Grant Access to Tag(s)");
      button1_nodes.forEach(detach);
      t8 = claim_space(div2_nodes);
      button2 = claim_element(div2_nodes, "BUTTON", { class: true });
      var button2_nodes = children(button2);
      t9 = claim_text(button2_nodes, "Request Access");
      button2_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "contenteditable", "true");
      attr(h1, "class", "svelte-14s5ast");
      if (ctx[0] === void 0)
        add_render_callback(() => ctx[4].call(h1));
      attr(div0, "class", "pubkey svelte-14s5ast");
      set_style(div0, "font-size", ".6em");
      attr(div1, "class", "buttons svelte-14s5ast");
      attr(button0, "class", "svelte-14s5ast");
      attr(button1, "class", "svelte-14s5ast");
      attr(button2, "class", "svelte-14s5ast");
      attr(div2, "class", "SearchResults svelte-14s5ast");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, h1);
      append_hydration(h1, t0);
      if (ctx[0] !== void 0) {
        h1.innerHTML = ctx[0];
      }
      append_hydration(div2, t1);
      append_hydration(div2, div0);
      append_hydration(div0, t2);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      append_hydration(div2, t4);
      append_hydration(div2, button0);
      append_hydration(button0, t5);
      append_hydration(div2, t6);
      append_hydration(div2, button1);
      append_hydration(button1, t7);
      append_hydration(div2, t8);
      append_hydration(div2, button2);
      append_hydration(button2, t9);
      if (!mounted) {
        dispose = [
          listen(h1, "input", ctx[4]),
          listen(button0, "click", function() {
            if (is_function(ctx[2](ctx[1].toString(), ctx[0])))
              ctx[2](ctx[1].toString(), ctx[0]).apply(this, arguments);
          })
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1)
        set_data(t0, ctx[0]);
      if (dirty & 1 && ctx[0] !== h1.innerHTML) {
        h1.innerHTML = ctx[0];
      }
      if (dirty & 2)
        set_data(t2, ctx[1]);
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$6(ctx) {
  let modal;
  let current;
  modal = new Modal({
    props: {
      modal: true,
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    }
  });
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
    p(ctx2, [dirty]) {
      const modal_changes = {};
      if (dirty & 39) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
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
function instance$6($$self, $$props, $$invalidate) {
  let { handle } = $$props;
  let { pubKey } = $$props;
  let { source } = $$props;
  let { handleAddContact } = $$props;
  function h1_input_handler() {
    handle = this.innerHTML;
    $$invalidate(0, handle);
  }
  $$self.$$set = ($$props2) => {
    if ("handle" in $$props2)
      $$invalidate(0, handle = $$props2.handle);
    if ("pubKey" in $$props2)
      $$invalidate(1, pubKey = $$props2.pubKey);
    if ("source" in $$props2)
      $$invalidate(3, source = $$props2.source);
    if ("handleAddContact" in $$props2)
      $$invalidate(2, handleAddContact = $$props2.handleAddContact);
  };
  return [handle, pubKey, handleAddContact, source, h1_input_handler];
}
class SearchResults extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      handle: 0,
      pubKey: 1,
      source: 3,
      handleAddContact: 2
    });
  }
}
function create_if_block_1$2(ctx) {
  let switch_instance;
  let updating_pubKey;
  let switch_instance_anchor;
  let current;
  function switch_instance_pubKey_binding(value) {
    ctx[8](value);
  }
  var switch_value = ctx[4];
  function switch_props(ctx2) {
    let switch_instance_props = { handle: ctx2[2] };
    if (ctx2[1] !== void 0) {
      switch_instance_props.pubKey = ctx2[1];
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    binding_callbacks.push(() => bind(switch_instance, "pubKey", switch_instance_pubKey_binding));
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
      if (dirty & 4)
        switch_instance_changes.handle = ctx2[2];
      if (!updating_pubKey && dirty & 2) {
        updating_pubKey = true;
        switch_instance_changes.pubKey = ctx2[1];
        add_flush_callback(() => updating_pubKey = false);
      }
      if (switch_value !== (switch_value = ctx2[4])) {
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
          binding_callbacks.push(() => bind(switch_instance, "pubKey", switch_instance_pubKey_binding));
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
function create_if_block$4(ctx) {
  let searchresults;
  let current;
  searchresults = new SearchResults({
    props: {
      handle: ctx[2],
      pubKey: ctx[1],
      source: null,
      handleAddContact: ctx[3]
    }
  });
  return {
    c() {
      create_component(searchresults.$$.fragment);
    },
    l(nodes) {
      claim_component(searchresults.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(searchresults, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const searchresults_changes = {};
      if (dirty & 4)
        searchresults_changes.handle = ctx2[2];
      if (dirty & 2)
        searchresults_changes.pubKey = ctx2[1];
      if (dirty & 8)
        searchresults_changes.handleAddContact = ctx2[3];
      searchresults.$set(searchresults_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(searchresults.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(searchresults.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(searchresults, detaching);
    }
  };
}
function create_fragment$5(ctx) {
  let link;
  let t0;
  let t1;
  let div2;
  let div0;
  let input;
  let t2;
  let button;
  let i;
  let t3;
  let div1;
  let t4_value = ctx[5] ? "\u2714\uFE0F Valid " + ctx[1].toString() : "";
  let t4;
  let t5;
  let if_block1_anchor;
  let current;
  let mounted;
  let dispose;
  let if_block0 = ctx[4] && create_if_block_1$2(ctx);
  let if_block1 = ctx[1] && ctx[5] && create_if_block$4(ctx);
  return {
    c() {
      link = element("link");
      t0 = space();
      if (if_block0)
        if_block0.c();
      t1 = space();
      div2 = element("div");
      div0 = element("div");
      input = element("input");
      t2 = space();
      button = element("button");
      i = element("i");
      t3 = space();
      div1 = element("div");
      t4 = text(t4_value);
      t5 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-yteug7"]', document.head);
      link = claim_element(head_nodes, "LINK", {
        rel: true,
        href: true,
        integrity: true,
        crossorigin: true,
        referrerpolicy: true
      });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      if (if_block0)
        if_block0.l(nodes);
      t1 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input = claim_element(div0_nodes, "INPUT", { class: true, placeholder: true });
      t2 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", { type: true, class: true });
      var button_nodes = children(button);
      i = claim_element(button_nodes, "I", { class: true });
      children(i).forEach(detach);
      button_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, t4_value);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t5 = claim_space(nodes);
      if (if_block1)
        if_block1.l(nodes);
      if_block1_anchor = empty();
      this.h();
    },
    h() {
      attr(link, "rel", "stylesheet");
      attr(link, "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
      attr(link, "integrity", "sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==");
      attr(link, "crossorigin", "anonymous");
      attr(link, "referrerpolicy", "no-referrer");
      attr(input, "class", "searchTerm svelte-1ln7uo");
      attr(input, "placeholder", "@handle or Public Key");
      attr(i, "class", "fa fa-search");
      attr(button, "type", "submit");
      attr(button, "class", "searchButton svelte-1ln7uo");
      attr(div0, "class", "search svelte-1ln7uo");
      attr(div1, "class", "validity svelte-1ln7uo");
      attr(div2, "class", "sb-example-1 svelte-1ln7uo");
    },
    m(target, anchor) {
      append_hydration(document.head, link);
      insert_hydration(target, t0, anchor);
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, input);
      set_input_value(input, ctx[0]);
      ctx[10](input);
      append_hydration(div0, t2);
      append_hydration(div0, button);
      append_hydration(button, i);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      append_hydration(div1, t4);
      insert_hydration(target, t5, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[9]),
          listen(input, "input", ctx[7]),
          listen(input, "change", ctx[7]),
          listen(input, "focus", ctx[7]),
          listen(button, "click", click_handler)
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (ctx2[4]) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 16) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t1.parentNode, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (dirty & 1 && input.value !== ctx2[0]) {
        set_input_value(input, ctx2[0]);
      }
      if ((!current || dirty & 34) && t4_value !== (t4_value = ctx2[5] ? "\u2714\uFE0F Valid " + ctx2[1].toString() : ""))
        set_data(t4, t4_value);
      if (ctx2[1] && ctx2[5]) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 34) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$4(ctx2);
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
      detach(link);
      if (detaching)
        detach(t0);
      if (if_block0)
        if_block0.d(detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div2);
      ctx[10](null);
      if (detaching)
        detach(t5);
      if (if_block1)
        if_block1.d(detaching);
      if (detaching)
        detach(if_block1_anchor);
      mounted = false;
      run_all(dispose);
    }
  };
}
const click_handler = () => {
};
function instance$5($$self, $$props, $$invalidate) {
  let { handle = "DougAnderson44" } = $$props;
  let { value = "DougAnderson44" } = $$props;
  let { pubKey } = $$props;
  let { handleAddContact } = $$props;
  let SNSWrapper;
  let valid;
  let inputElement;
  onMount(async () => {
    const Buffer = await __vitePreload(() => import("../chunks/cid-d85b89cf.js").then(function(n) {
      return n.index;
    }), true ? ["chunks/cid-d85b89cf.js","chunks/index-64ae2edc.js"] : void 0);
    global.Buffer = Buffer.Buffer;
    const process = await __vitePreload(() => import("../chunks/browser-62a45c90.js").then(function(n) {
      return n.browser;
    }), true ? [] : void 0);
    global.process = process;
    $$invalidate(4, { SNSWrapper } = await __vitePreload(() => import("../chunks/index-39b12389.js"), true ? ["chunks/index-39b12389.js","chunks/hash-2a1eb12b.js","chunks/_commonjsHelpers-9b98600b.js","chunks/cid-d85b89cf.js","chunks/index-64ae2edc.js","chunks/preload-helper-ef2a18a4.js"] : void 0), SNSWrapper);
    let params = new URLSearchParams(location.search);
    if (params.has("add")) {
      $$invalidate(1, pubKey = params.get("add"));
      inputElement.focus();
    }
  });
  function handleInput() {
    $$invalidate(2, handle = value);
    handleValidate(value);
  }
  function handleValidate(value2) {
    if (!value2)
      return;
    const valBytes = validatePubKey(value2.toString());
    if (valBytes) {
      $$invalidate(5, valid = true);
      $$invalidate(1, pubKey = value2.toString());
    } else
      $$invalidate(5, valid = false);
  }
  function switch_instance_pubKey_binding(value2) {
    pubKey = value2;
    $$invalidate(1, pubKey);
  }
  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      inputElement = $$value;
      $$invalidate(6, inputElement);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("handle" in $$props2)
      $$invalidate(2, handle = $$props2.handle);
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("pubKey" in $$props2)
      $$invalidate(1, pubKey = $$props2.pubKey);
    if ("handleAddContact" in $$props2)
      $$invalidate(3, handleAddContact = $$props2.handleAddContact);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      value && handleInput();
    }
    if ($$self.$$.dirty & 2) {
      pubKey && handleValidate(pubKey);
    }
  };
  return [
    value,
    pubKey,
    handle,
    handleAddContact,
    SNSWrapper,
    valid,
    inputElement,
    handleInput,
    switch_instance_pubKey_binding,
    input_input_handler,
    input_binding
  ];
}
class Search extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      handle: 2,
      value: 0,
      pubKey: 1,
      handleAddContact: 3
    });
  }
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i].handle;
  child_ctx[8] = list[i].pubKey;
  return child_ctx;
}
function create_if_block$3(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[0];
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
      if (dirty & 6207) {
        each_value = ctx2[0];
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
  let t_value = ctx[7] + "";
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
      if (dirty & 1 && t_value !== (t_value = ctx2[7] + ""))
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
  let t1_value = ctx[8] + "";
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
      if (dirty & 1 && t1_value !== (t1_value = ctx2[8] + ""))
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
      tag: ctx[12].tag,
      pubKey: ctx[8],
      checkAccess: ctx[3]
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
      if (dirty & 4096)
        tagaccess_changes.tag = ctx2[12].tag;
      if (dirty & 1)
        tagaccess_changes.pubKey = ctx2[8];
      if (dirty & 8)
        tagaccess_changes.checkAccess = ctx2[3];
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
      tagNode: ctx[12],
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
      if (dirty & 4096)
        tagvalue_changes.tagNode = ctx2[12];
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
function create_default_slot_1$2(ctx) {
  let t;
  let if_block1_anchor;
  let current;
  let if_block0 = ctx[12].tag && create_if_block_2(ctx);
  let if_block1 = ctx[12].tag === "Profile" && create_if_block_1$1(ctx);
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
      if (ctx2[12].tag) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 4096) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t.parentNode, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (ctx2[12].tag === "Profile") {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 4096) {
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
function create_default_slot$2(ctx) {
  let gettags;
  let current;
  gettags = new GetTags({
    props: {
      rootCID: ctx[11],
      getTagNodes: ctx[2],
      $$slots: {
        default: [
          create_default_slot_1$2,
          ({ tagNode }) => ({ 12: tagNode }),
          ({ tagNode }) => tagNode ? 4096 : 0
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
      if (dirty & 2048)
        gettags_changes.rootCID = ctx2[11];
      if (dirty & 4)
        gettags_changes.getTagNodes = ctx2[2];
      if (dirty & 12313) {
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
      pubKey: ctx[8],
      openHypns: ctx[1],
      $$slots: {
        default: [
          create_default_slot$2,
          ({ latestHypns }) => ({ 11: latestHypns }),
          ({ latestHypns }) => latestHypns ? 2048 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  pipernet.$on("onMessage", ctx[5]);
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
      if (dirty & 1)
        pipernet_changes.pubKey = ctx2[8];
      if (dirty & 2)
        pipernet_changes.openHypns = ctx2[1];
      if (dirty & 10269) {
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
      attr(div, "class", "card-container");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(contactcard, div, null);
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const contactcard_changes = {};
      if (dirty & 8223) {
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
function create_fragment$4(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block$3(ctx);
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
  let { decryptedData } = $$props;
  let { openHypns } = $$props;
  let { getTagNodes: getTagNodes2 } = $$props;
  let { checkAccess } = $$props;
  let { decryptFromTagNode } = $$props;
  console.log("ShowContacts", { decryptedData });
  const dispatch = createEventDispatcher();
  function handleMessenger(event) {
    console.log("handleMessenger pubKey to rx'd msg value", { event });
    dispatch("incomingPubKey", { pubKeyHex: event.detail.pubKeyHex });
  }
  $$self.$$set = ($$props2) => {
    if ("decryptedData" in $$props2)
      $$invalidate(0, decryptedData = $$props2.decryptedData);
    if ("openHypns" in $$props2)
      $$invalidate(1, openHypns = $$props2.openHypns);
    if ("getTagNodes" in $$props2)
      $$invalidate(2, getTagNodes2 = $$props2.getTagNodes);
    if ("checkAccess" in $$props2)
      $$invalidate(3, checkAccess = $$props2.checkAccess);
    if ("decryptFromTagNode" in $$props2)
      $$invalidate(4, decryptFromTagNode = $$props2.decryptFromTagNode);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 1) {
      decryptedData && console.log({ decryptedData });
    }
  };
  return [
    decryptedData,
    openHypns,
    getTagNodes2,
    checkAccess,
    decryptFromTagNode,
    handleMessenger
  ];
}
class ShowContacts extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      decryptedData: 0,
      openHypns: 1,
      getTagNodes: 2,
      checkAccess: 3,
      decryptFromTagNode: 4
    });
  }
}
function create_if_block$2(ctx) {
  let showcontacts;
  let current;
  showcontacts = new ShowContacts({
    props: {
      decryptedData: ctx[3],
      getTagNodes: ctx[0],
      openHypns: ctx[1],
      checkAccess: ctx[2],
      decryptFromTagNode: ctx[4]
    }
  });
  showcontacts.$on("incomingPubKey", ctx[11]);
  return {
    c() {
      create_component(showcontacts.$$.fragment);
    },
    l(nodes) {
      claim_component(showcontacts.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(showcontacts, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const showcontacts_changes = {};
      if (dirty & 8)
        showcontacts_changes.decryptedData = ctx2[3];
      if (dirty & 1)
        showcontacts_changes.getTagNodes = ctx2[0];
      if (dirty & 2)
        showcontacts_changes.openHypns = ctx2[1];
      if (dirty & 4)
        showcontacts_changes.checkAccess = ctx2[2];
      if (dirty & 16)
        showcontacts_changes.decryptFromTagNode = ctx2[4];
      showcontacts.$set(showcontacts_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(showcontacts.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(showcontacts.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(showcontacts, detaching);
    }
  };
}
function create_default_slot_1$1(ctx) {
  let switch_instance;
  let updating_result;
  let switch_instance_anchor;
  let current;
  function switch_instance_result_binding(value) {
    ctx[17](value);
  }
  var switch_value = ctx[6];
  function switch_props(ctx2) {
    let switch_instance_props = {};
    if (ctx2[8] !== void 0) {
      switch_instance_props.result = ctx2[8];
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    binding_callbacks.push(() => bind(switch_instance, "result", switch_instance_result_binding));
    switch_instance.$on("successfulScan", ctx[18]);
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
      if (!updating_result && dirty & 256) {
        updating_result = true;
        switch_instance_changes.result = ctx2[8];
        add_flush_callback(() => updating_result = false);
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
          binding_callbacks.push(() => bind(switch_instance, "result", switch_instance_result_binding));
          switch_instance.$on("successfulScan", ctx2[18]);
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
function create_default_slot$1(ctx) {
  let modal;
  let current;
  modal = new Modal({
    props: {
      modal: ctx[5],
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  modal.$on("closeModal", ctx[12]);
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
      if (dirty & 32)
        modal_changes.modal = ctx2[5];
      if (dirty & 268435808) {
        modal_changes.$$scope = { dirty, ctx: ctx2 };
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
function create_fragment$3(ctx) {
  let t0;
  let div2;
  let div0;
  let search;
  let updating_handle;
  let updating_pubKey;
  let t1;
  let div1;
  let scanicon;
  let current;
  let if_block = ctx[3] && create_if_block$2(ctx);
  function search_handle_binding(value) {
    ctx[15](value);
  }
  function search_pubKey_binding(value) {
    ctx[16](value);
  }
  let search_props = {
    handleAddContact: ctx[9]
  };
  if (ctx[7] !== void 0) {
    search_props.handle = ctx[7];
  }
  if (ctx[8] !== void 0) {
    search_props.pubKey = ctx[8];
  }
  search = new Search({ props: search_props });
  binding_callbacks.push(() => bind(search, "handle", search_handle_binding));
  binding_callbacks.push(() => bind(search, "pubKey", search_pubKey_binding));
  scanicon = new ScanIcon({
    props: {
      scan: ctx[5],
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  scanicon.$on("click", ctx[19]);
  return {
    c() {
      if (if_block)
        if_block.c();
      t0 = space();
      div2 = element("div");
      div0 = element("div");
      create_component(search.$$.fragment);
      t1 = space();
      div1 = element("div");
      create_component(scanicon.$$.fragment);
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t0 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      claim_component(search.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(scanicon.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "scan-icon svelte-rpa35j");
      set_style(div0, "width", "100%");
      attr(div1, "class", "scan-icon svelte-rpa35j");
      attr(div2, "class", "searchBar svelte-rpa35j");
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      mount_component(search, div0, null);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      mount_component(scanicon, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[3]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 8) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t0.parentNode, t0);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const search_changes = {};
      if (!updating_handle && dirty & 128) {
        updating_handle = true;
        search_changes.handle = ctx2[7];
        add_flush_callback(() => updating_handle = false);
      }
      if (!updating_pubKey && dirty & 256) {
        updating_pubKey = true;
        search_changes.pubKey = ctx2[8];
        add_flush_callback(() => updating_pubKey = false);
      }
      search.$set(search_changes);
      const scanicon_changes = {};
      if (dirty & 32)
        scanicon_changes.scan = ctx2[5];
      if (dirty & 268435808) {
        scanicon_changes.$$scope = { dirty, ctx: ctx2 };
      }
      scanicon.$set(scanicon_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(search.$$.fragment, local);
      transition_in(scanicon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(search.$$.fragment, local);
      transition_out(scanicon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div2);
      destroy_component(search);
      destroy_component(scanicon);
    }
  };
}
const tag = "Contacts";
function instance$3($$self, $$props, $$invalidate) {
  let selected;
  let $page;
  let $contacts;
  component_subscribe($$self, page, ($$value) => $$invalidate(22, $page = $$value));
  component_subscribe($$self, contacts, ($$value) => $$invalidate(14, $contacts = $$value));
  let { getTagNodes: getTagNodes2 } = $$props;
  let { openHypns } = $$props;
  let { checkAccess } = $$props;
  let { decryptedData } = $$props;
  let { decryptFromTagNode } = $$props;
  const dispatch = createEventDispatcher();
  let schema;
  let handle, pubKey, pubKeyInput;
  let scan;
  onMount(async () => {
    let params = new URLSearchParams(location.search);
    if ($page.url.searchParams.has("add")) {
      $$invalidate(8, pubKey = $page.url.searchParams.get("add"));
      await tick();
      pubKeyInput.focus();
    } else if (params.has("add")) {
      $$invalidate(8, pubKey = params.get("add"));
      await tick();
      pubKeyInput.focus();
    }
  });
  function onSubmitted() {
    $$invalidate(7, handle = "");
    $$invalidate(8, pubKey = "");
  }
  async function handleAddContact(pK = pubKey, name = handle) {
    console.log("Adding ", { name }, { pK });
    if (!name || !pK)
      return;
    const bytes = validatePubKey(pK);
    console.log("Adding bytes", { bytes });
    let value;
    if (decryptedData && decryptedData.length)
      value = [
        ...decryptedData,
        {
          handle: name,
          pubKey: new Uint8Array(bytes)
        }
      ];
    else
      value = [
        {
          handle: name,
          pubKey: new Uint8Array(bytes)
        }
      ];
    console.log("Adding value", { value });
    dispatch("handleSubmit", { tag, data: { value, schema } });
  }
  function handleConnect(key) {
    $$invalidate(8, pubKey = key);
  }
  function handleMessenger(event) {
    console.log("Setting pubKey to rx'd msg value", { event });
    $$invalidate(8, pubKey = event.detail.pubKeyHex);
  }
  function handleModalClose() {
    console.log("Got close modal");
    $$invalidate(5, scan = false);
    console.log({ scan }, { selected });
  }
  function search_handle_binding(value) {
    handle = value;
    $$invalidate(7, handle);
  }
  function search_pubKey_binding(value) {
    pubKey = value;
    $$invalidate(8, pubKey);
  }
  function switch_instance_result_binding(value) {
    pubKey = value;
    $$invalidate(8, pubKey);
  }
  const successfulScan_handler = (data) => {
    const parsed = JSON.parse(data.detail);
    console.log(`Scanned `, { parsed });
    handleConnect(parsed.pubKeyHex);
    $$invalidate(5, scan = false);
  };
  const click_handler2 = () => {
    console.log("scan clicked");
    $$invalidate(5, scan = true);
  };
  $$self.$$set = ($$props2) => {
    if ("getTagNodes" in $$props2)
      $$invalidate(0, getTagNodes2 = $$props2.getTagNodes);
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
    if ($$self.$$.dirty & 8) {
      if (decryptedData)
        set_store_value(contacts, $contacts = decryptedData, $contacts);
    }
    if ($$self.$$.dirty & 16384) {
      $contacts && console.log($contacts);
    }
    if ($$self.$$.dirty & 32) {
      $$invalidate(6, selected = scan ? Scanner : null);
    }
    if ($$self.$$.dirty & 64) {
      selected && console.log({ selected });
    }
    if ($$self.$$.dirty & 32) {
      scan && console.log({ scan });
    }
  };
  return [
    getTagNodes2,
    openHypns,
    checkAccess,
    decryptedData,
    decryptFromTagNode,
    scan,
    selected,
    handle,
    pubKey,
    handleAddContact,
    handleConnect,
    handleMessenger,
    handleModalClose,
    onSubmitted,
    $contacts,
    search_handle_binding,
    search_pubKey_binding,
    switch_instance_result_binding,
    successfulScan_handler,
    click_handler2
  ];
}
class Contacts extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      getTagNodes: 0,
      openHypns: 1,
      checkAccess: 2,
      decryptedData: 3,
      decryptFromTagNode: 4,
      onSubmitted: 13
    });
  }
  get onSubmitted() {
    return this.$$.ctx[13];
  }
}
const CONTACTS = "Contacts";
const PROFILE = "Profile";
const Components = {
  [PROFILE]: { name: PROFILE, component: Profile, tag: PROFILE },
  [CONTACTS]: { name: CONTACTS, component: ShowContacts, tag: CONTACTS }
};
function create_if_block$1(ctx) {
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
function create_fragment$2(ctx) {
  let if_block_anchor;
  let if_block = ctx[0] && create_if_block$1(ctx);
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
          if_block = create_if_block$1(ctx2);
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
function instance$2($$self, $$props, $$invalidate) {
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
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { rootCID: 0 });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[26] = list[i][0];
  child_ctx[27] = list[i][1];
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
  var switch_value = ctx[5];
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
      if (switch_value !== (switch_value = ctx2[5])) {
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
  let t_value = ctx[26] + "";
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
      option.__value = option_value_value = ctx[27];
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
    ctx[14](value);
  }
  let dagjose_props = {
    proxcryptor: ctx[0].proxcryptor,
    ipfsNode: ctx[3],
    CID,
    refreshedRootCID: ctx[7],
    tag: ctx[2].tag,
    onSubmitted: ctx[6],
    $$slots: {
      default: [
        create_default_slot,
        ({ getTagNodes: getTagNodes2, getTagNode, checkAccess, setAccess, handleSubmit, decryptFromTagNode, decrypt }) => ({
          18: getTagNodes2,
          19: getTagNode,
          20: checkAccess,
          21: setAccess,
          22: handleSubmit,
          23: decryptFromTagNode,
          24: decrypt
        }),
        ({ getTagNodes: getTagNodes2, getTagNode, checkAccess, setAccess, handleSubmit, decryptFromTagNode, decrypt }) => (getTagNodes2 ? 262144 : 0) | (getTagNode ? 524288 : 0) | (checkAccess ? 1048576 : 0) | (setAccess ? 2097152 : 0) | (handleSubmit ? 4194304 : 0) | (decryptFromTagNode ? 8388608 : 0) | (decrypt ? 16777216 : 0)
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
      if (dirty & 128)
        dagjose_changes.refreshedRootCID = ctx2[7];
      if (dirty & 4)
        dagjose_changes.tag = ctx2[2].tag;
      if (dirty & 64)
        dagjose_changes.onSubmitted = ctx2[6];
      if (dirty & 1107034326) {
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
function create_default_slot_2(ctx) {
  let switch_instance;
  let updating_onSubmitted;
  let switch_instance_anchor;
  let current;
  function switch_instance_onSubmitted_binding(value) {
    ctx[11](value);
  }
  var switch_value = ctx[2].component;
  function switch_props(ctx2) {
    let switch_instance_props = {
      decryptedData: ctx2[25],
      getTagNodes: ctx2[18],
      checkAccess: ctx2[20],
      setAccess: ctx2[21],
      openHypns: ctx2[4],
      decryptFromTagNode: ctx2[23]
    };
    if (ctx2[6] !== void 0) {
      switch_instance_props.onSubmitted = ctx2[6];
    }
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
    binding_callbacks.push(() => bind(switch_instance, "onSubmitted", switch_instance_onSubmitted_binding));
    switch_instance.$on("handleSubmit", function() {
      if (is_function(ctx[22]))
        ctx[22].apply(this, arguments);
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
      if (dirty & 33554432)
        switch_instance_changes.decryptedData = ctx[25];
      if (dirty & 262144)
        switch_instance_changes.getTagNodes = ctx[18];
      if (dirty & 1048576)
        switch_instance_changes.checkAccess = ctx[20];
      if (dirty & 2097152)
        switch_instance_changes.setAccess = ctx[21];
      if (dirty & 16)
        switch_instance_changes.openHypns = ctx[4];
      if (dirty & 8388608)
        switch_instance_changes.decryptFromTagNode = ctx[23];
      if (!updating_onSubmitted && dirty & 64) {
        updating_onSubmitted = true;
        switch_instance_changes.onSubmitted = ctx[6];
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
            if (is_function(ctx[22]))
              ctx[22].apply(this, arguments);
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
function create_default_slot_1(ctx) {
  let contacts2;
  let current;
  contacts2 = new Contacts({
    props: {
      getTagNodes: ctx[18],
      openHypns: ctx[4],
      checkAccess: ctx[20],
      decryptedData: ctx[25],
      decryptFromTagNode: ctx[23]
    }
  });
  contacts2.$on("handleSubmit", function() {
    if (is_function(ctx[22]))
      ctx[22].apply(this, arguments);
  });
  return {
    c() {
      create_component(contacts2.$$.fragment);
    },
    l(nodes) {
      claim_component(contacts2.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(contacts2, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const contacts_changes = {};
      if (dirty & 262144)
        contacts_changes.getTagNodes = ctx[18];
      if (dirty & 16)
        contacts_changes.openHypns = ctx[4];
      if (dirty & 1048576)
        contacts_changes.checkAccess = ctx[20];
      if (dirty & 33554432)
        contacts_changes.decryptedData = ctx[25];
      if (dirty & 8388608)
        contacts_changes.decryptFromTagNode = ctx[23];
      contacts2.$set(contacts_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(contacts2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(contacts2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(contacts2, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let common0;
  let updating_refreshedRootCID;
  let t;
  let common1;
  let updating_refreshedRootCID_1;
  let current;
  function common0_refreshedRootCID_binding(value) {
    ctx[12](value);
  }
  let common0_props = {
    getTagNode: ctx[19],
    decrypt: ctx[24],
    tag: ctx[2].tag,
    rootCID: ctx[1],
    setAccess: ctx[21],
    $$slots: {
      default: [
        create_default_slot_2,
        ({ decryptedData }) => ({ 25: decryptedData }),
        ({ decryptedData }) => decryptedData ? 33554432 : 0
      ]
    },
    $$scope: { ctx }
  };
  if (ctx[7] !== void 0) {
    common0_props.refreshedRootCID = ctx[7];
  }
  common0 = new Common({ props: common0_props });
  binding_callbacks.push(() => bind(common0, "refreshedRootCID", common0_refreshedRootCID_binding));
  function common1_refreshedRootCID_binding(value) {
    ctx[13](value);
  }
  let common1_props = {
    getTagNode: ctx[19],
    decrypt: ctx[24],
    tag: "Contacts",
    rootCID: ctx[1],
    setAccess: ctx[21],
    $$slots: {
      default: [
        create_default_slot_1,
        ({ decryptedData }) => ({ 25: decryptedData }),
        ({ decryptedData }) => decryptedData ? 33554432 : 0
      ]
    },
    $$scope: { ctx }
  };
  if (ctx[7] !== void 0) {
    common1_props.refreshedRootCID = ctx[7];
  }
  common1 = new Common({ props: common1_props });
  binding_callbacks.push(() => bind(common1, "refreshedRootCID", common1_refreshedRootCID_binding));
  return {
    c() {
      create_component(common0.$$.fragment);
      t = space();
      create_component(common1.$$.fragment);
    },
    l(nodes) {
      claim_component(common0.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(common1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(common0, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(common1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const common0_changes = {};
      if (dirty & 524288)
        common0_changes.getTagNode = ctx2[19];
      if (dirty & 16777216)
        common0_changes.decrypt = ctx2[24];
      if (dirty & 4)
        common0_changes.tag = ctx2[2].tag;
      if (dirty & 2)
        common0_changes.rootCID = ctx2[1];
      if (dirty & 2097152)
        common0_changes.setAccess = ctx2[21];
      if (dirty & 1123287124) {
        common0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_refreshedRootCID && dirty & 128) {
        updating_refreshedRootCID = true;
        common0_changes.refreshedRootCID = ctx2[7];
        add_flush_callback(() => updating_refreshedRootCID = false);
      }
      common0.$set(common0_changes);
      const common1_changes = {};
      if (dirty & 524288)
        common1_changes.getTagNode = ctx2[19];
      if (dirty & 16777216)
        common1_changes.decrypt = ctx2[24];
      if (dirty & 2)
        common1_changes.rootCID = ctx2[1];
      if (dirty & 2097152)
        common1_changes.setAccess = ctx2[21];
      if (dirty & 1121189904) {
        common1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_refreshedRootCID_1 && dirty & 128) {
        updating_refreshedRootCID_1 = true;
        common1_changes.refreshedRootCID = ctx2[7];
        add_flush_callback(() => updating_refreshedRootCID_1 = false);
      }
      common1.$set(common1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(common0.$$.fragment, local);
      transition_in(common1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(common0.$$.fragment, local);
      transition_out(common1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(common0, detaching);
      if (detaching)
        detach(t);
      destroy_component(common1, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let link;
  let t0;
  let div1;
  let current_block_type_index;
  let if_block0;
  let t1;
  let hypnsmanager;
  let updating_openHypns;
  let t2;
  let div0;
  let select;
  let t3;
  let showroot;
  let t4;
  let current_block_type_index_1;
  let if_block1;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block_1, create_else_block_1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[5])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  function hypnsmanager_openHypns_binding(value) {
    ctx[9](value);
  }
  let hypnsmanager_props = {
    wallet: ctx[0],
    rootCID: ctx[1]
  };
  if (ctx[4] !== void 0) {
    hypnsmanager_props.openHypns = ctx[4];
  }
  hypnsmanager = new HypnsManager({ props: hypnsmanager_props });
  binding_callbacks.push(() => bind(hypnsmanager, "openHypns", hypnsmanager_openHypns_binding));
  let each_value = Object.entries(Components);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  showroot = new ShowRoot({ props: { rootCID: ctx[1] } });
  const if_block_creators_1 = [create_if_block, create_else_block];
  const if_blocks_1 = [];
  function select_block_type_1(ctx2, dirty) {
    if (ctx2[0] && ctx2[0].proxcryptor && ctx2[3] && CID)
      return 0;
    return 1;
  }
  current_block_type_index_1 = select_block_type_1(ctx);
  if_block1 = if_blocks_1[current_block_type_index_1] = if_block_creators_1[current_block_type_index_1](ctx);
  return {
    c() {
      link = element("link");
      t0 = space();
      div1 = element("div");
      if_block0.c();
      t1 = space();
      create_component(hypnsmanager.$$.fragment);
      t2 = space();
      div0 = element("div");
      select = element("select");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t3 = space();
      create_component(showroot.$$.fragment);
      t4 = space();
      if_block1.c();
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-3hhnlk"]', document.head);
      link = claim_element(head_nodes, "LINK", { href: true, rel: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if_block0.l(div1_nodes);
      t1 = claim_space(div1_nodes);
      claim_component(hypnsmanager.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      select = claim_element(div0_nodes, "SELECT", { class: true });
      var select_nodes = children(select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(select_nodes);
      }
      select_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t3 = claim_space(div1_nodes);
      claim_component(showroot.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      if_block1.l(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(link, "href", "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
      attr(link, "rel", "stylesheet");
      attr(select, "class", "form-control");
      if (ctx[2] === void 0)
        add_render_callback(() => ctx[10].call(select));
      attr(div1, "class", "");
    },
    m(target, anchor) {
      append_hydration(document.head, link);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div1, anchor);
      if_blocks[current_block_type_index].m(div1, null);
      append_hydration(div1, t1);
      mount_component(hypnsmanager, div1, null);
      append_hydration(div1, t2);
      append_hydration(div1, div0);
      append_hydration(div0, select);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(select, null);
      }
      select_option(select, ctx[2]);
      append_hydration(div1, t3);
      mount_component(showroot, div1, null);
      append_hydration(div1, t4);
      if_blocks_1[current_block_type_index_1].m(div1, null);
      current = true;
      if (!mounted) {
        dispose = listen(select, "change", ctx[10]);
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
        if_block0.m(div1, t1);
      }
      const hypnsmanager_changes = {};
      if (dirty & 1)
        hypnsmanager_changes.wallet = ctx2[0];
      if (dirty & 2)
        hypnsmanager_changes.rootCID = ctx2[1];
      if (!updating_openHypns && dirty & 16) {
        updating_openHypns = true;
        hypnsmanager_changes.openHypns = ctx2[4];
        add_flush_callback(() => updating_openHypns = false);
      }
      hypnsmanager.$set(hypnsmanager_changes);
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
      const showroot_changes = {};
      if (dirty & 2)
        showroot_changes.rootCID = ctx2[1];
      showroot.$set(showroot_changes);
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
        if_block1.m(div1, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(hypnsmanager.$$.fragment, local);
      transition_in(showroot.$$.fragment, local);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(hypnsmanager.$$.fragment, local);
      transition_out(showroot.$$.fragment, local);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      detach(link);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div1);
      if_blocks[current_block_type_index].d();
      destroy_component(hypnsmanager);
      destroy_each(each_blocks, detaching);
      destroy_component(showroot);
      if_blocks_1[current_block_type_index_1].d();
      mounted = false;
      dispose();
    }
  };
}
let inputUrl = "https://peerpiper.github.io/iframe-wallet-sveltekit";
function instance$1($$self, $$props, $$invalidate) {
  let { wallet = null } = $$props;
  let { rootCID = null } = $$props;
  let active = Components["Profile"];
  let ipfsNode;
  let nodeId;
  let openHypns;
  let Web3WalletMenu;
  let start = Date.now();
  let onSubmitted;
  let refreshedRootCID;
  async function loadIPFS() {
    const IPFSmodule = await __vitePreload(() => import("../chunks/ipfs-core-a65b18ab.js"), true ? [] : void 0);
    const IPFS = IPFSmodule.default;
    $$invalidate(3, ipfsNode = await IPFS.create());
    console.log(`Loaded in ${(Date.now() - start) / 1e3}s`, { ipfsNode });
    const identity = await ipfsNode.id();
    nodeId = identity.id;
    console.info("NodeId", nodeId);
  }
  onMount(async () => {
    if (!wallet) {
      $$invalidate(5, { Web3WalletMenu } = await __vitePreload(() => import("../chunks/index-ca95c035.js"), true ? ["chunks/index-ca95c035.js","assets/index-c30dcd19.css","chunks/index-64ae2edc.js","chunks/preload-helper-ef2a18a4.js","chunks/index-1b64b11a.js","chunks/cid-d85b89cf.js"] : void 0), Web3WalletMenu);
    }
    return () => ipfsNode.stop();
  });
  function switch_instance_wallet_binding(value) {
    wallet = value;
    $$invalidate(0, wallet);
  }
  function hypnsmanager_openHypns_binding(value) {
    openHypns = value;
    $$invalidate(4, openHypns);
  }
  function select_change_handler() {
    active = select_value(this);
    $$invalidate(2, active);
  }
  function switch_instance_onSubmitted_binding(value) {
    onSubmitted = value;
    $$invalidate(6, onSubmitted);
  }
  function common0_refreshedRootCID_binding(value) {
    refreshedRootCID = value;
    $$invalidate(7, refreshedRootCID);
  }
  function common1_refreshedRootCID_binding(value) {
    refreshedRootCID = value;
    $$invalidate(7, refreshedRootCID);
  }
  function dagjose_rootCID_binding(value) {
    rootCID = value;
    $$invalidate(1, rootCID);
  }
  $$self.$$set = ($$props2) => {
    if ("wallet" in $$props2)
      $$invalidate(0, wallet = $$props2.wallet);
    if ("rootCID" in $$props2)
      $$invalidate(1, rootCID = $$props2.rootCID);
  };
  if (globalThis.Ipfs) {
    console.log("Loading IPFS ");
    loadIPFS();
  }
  return [
    wallet,
    rootCID,
    active,
    ipfsNode,
    openHypns,
    Web3WalletMenu,
    onSubmitted,
    refreshedRootCID,
    switch_instance_wallet_binding,
    hypnsmanager_openHypns_binding,
    select_change_handler,
    switch_instance_onSubmitted_binding,
    common0_refreshedRootCID_binding,
    common1_refreshedRootCID_binding,
    dagjose_rootCID_binding
  ];
}
class App extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { wallet: 0, rootCID: 1 });
  }
}
function create_fragment(ctx) {
  let app;
  let current;
  app = new App({});
  return {
    c() {
      create_component(app.$$.fragment);
    },
    l(nodes) {
      claim_component(app.$$.fragment, nodes);
    },
    m(target, anchor) {
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
      destroy_component(app, detaching);
    }
  };
}
function instance($$self) {
  onMount(async () => {
  });
  return [];
}
class Legacy extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { Legacy as default };
//# sourceMappingURL=legacy.svelte-153afd08.js.map
