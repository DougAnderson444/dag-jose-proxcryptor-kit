import { __vitePreload } from "../chunks/preload-helper-ef2a18a4.js";
import { SvelteComponent, init, safe_not_equal, create_slot, space, element, claim_space, query_selector_all, claim_element, children, detach, src_url_equal, attr, insert_hydration, append_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out, onMount, create_component, empty, claim_component, mount_component, add_flush_callback, check_outros, binding_callbacks, bind, destroy_component, text, claim_text, group_outros, set_data, is_function } from "../chunks/index-64ae2edc.js";
import { IPFSManager, Proxcryptor, Gateway } from "../chunks/IPFSManager-fbe22ba3.js";
import "../chunks/cid-d85b89cf.js";
const get_default_slot_changes = (dirty) => ({ component: dirty & 1 });
const get_default_slot_context = (ctx) => ({ component: ctx[0] });
function create_fragment$1(ctx) {
  let t;
  let script;
  let script_src_value;
  let link;
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], get_default_slot_context);
  return {
    c() {
      if (default_slot)
        default_slot.c();
      t = space();
      script = element("script");
      link = element("link");
      this.h();
    },
    l(nodes) {
      if (default_slot)
        default_slot.l(nodes);
      t = claim_space(nodes);
      const head_nodes = query_selector_all('[data-svelte="svelte-bpeq2r"]', document.head);
      script = claim_element(head_nodes, "SCRIPT", { src: true });
      var script_nodes = children(script);
      script_nodes.forEach(detach);
      link = claim_element(head_nodes, "LINK", { href: true, rel: true });
      head_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(script.src, script_src_value = "https://cdn.tailwindcss.com"))
        attr(script, "src", script_src_value);
      attr(link, "href", "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
      attr(link, "rel", "stylesheet");
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      insert_hydration(target, t, anchor);
      append_hydration(document.head, script);
      append_hydration(document.head, link);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 9)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, get_default_slot_changes), get_default_slot_context);
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
      if (detaching)
        detach(t);
      detach(script);
      detach(link);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { url: url2 } = $$props;
  let component;
  let mounted = false;
  onMount(() => {
    $$invalidate(2, mounted = true);
    $$invalidate(1, url2 = location.url.searchParams.get("url") || url2);
    window.cachedURL = url2;
    doFetch(url2);
  });
  let fetched;
  async function doFetch(url3) {
    if (!url3)
      return;
    try {
      window.cachedURL = url3;
      fetched = await fetch(url3);
      if (!fetched.ok)
        throw new Error(fetched.statusText);
      console.log("fetching", url3, { fetched });
      const text2 = await fetched.text();
      console.log("fetched:", { text: text2 });
      $$invalidate(0, component = text2);
    } catch (error) {
      console.log(error);
    }
  }
  $$self.$$set = ($$props2) => {
    if ("url" in $$props2)
      $$invalidate(1, url2 = $$props2.url);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 6) {
      if (mounted && url2 && window.cachedURL != url2)
        doFetch(url2);
    }
  };
  return [component, url2, mounted, $$scope, slots];
}
class FetchComponent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { url: 1 });
  }
}
function create_if_block_1(ctx) {
  let switch_instance;
  let updating_wallet;
  let switch_instance_anchor;
  let current;
  function switch_instance_wallet_binding(value) {
    ctx[3](value);
  }
  var switch_value = ctx[1];
  function switch_props(ctx2) {
    let switch_instance_props = {};
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
      if (switch_value !== (switch_value = ctx2[1])) {
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
function create_if_block(ctx) {
  var _a;
  let proxcryptor;
  let current;
  proxcryptor = new Proxcryptor({
    props: {
      proxcryptor: (_a = ctx[0]) == null ? void 0 : _a.proxcryptor,
      tag: ctx[8],
      ipfsNode: ctx[7],
      rootCID: ctx[2],
      $$slots: {
        default: [
          create_default_slot_2,
          ({ props, handleSubmit }) => ({ 10: props, 11: handleSubmit }),
          ({ props, handleSubmit }) => (props ? 1024 : 0) | (handleSubmit ? 2048 : 0)
        ]
      },
      $$scope: { ctx }
    }
  });
  proxcryptor.$on("rootCID", ctx[4]);
  return {
    c() {
      create_component(proxcryptor.$$.fragment);
    },
    l(nodes) {
      claim_component(proxcryptor.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(proxcryptor, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      var _a2;
      const proxcryptor_changes = {};
      if (dirty & 1)
        proxcryptor_changes.proxcryptor = (_a2 = ctx2[0]) == null ? void 0 : _a2.proxcryptor;
      if (dirty & 256)
        proxcryptor_changes.tag = ctx2[8];
      if (dirty & 128)
        proxcryptor_changes.ipfsNode = ctx2[7];
      if (dirty & 4)
        proxcryptor_changes.rootCID = ctx2[2];
      if (dirty & 7680) {
        proxcryptor_changes.$$scope = { dirty, ctx: ctx2 };
      }
      proxcryptor.$set(proxcryptor_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(proxcryptor.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(proxcryptor.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(proxcryptor, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let gateway;
  let current;
  gateway = new Gateway({
    props: {
      esModule: ctx[9],
      props: ctx[10]
    }
  });
  gateway.$on("change", function() {
    if (is_function(ctx[11]))
      ctx[11].apply(this, arguments);
  });
  return {
    c() {
      create_component(gateway.$$.fragment);
    },
    l(nodes) {
      claim_component(gateway.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(gateway, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const gateway_changes = {};
      if (dirty & 512)
        gateway_changes.esModule = ctx[9];
      if (dirty & 1024)
        gateway_changes.props = ctx[10];
      gateway.$set(gateway_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(gateway.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(gateway.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(gateway, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t0_value = !!ctx[9] + "";
  let t0;
  let t1;
  let t2_value = !!ctx[7] + "";
  let t2;
  let t3;
  let t4_value = !!ctx[0] + "";
  let t4;
  let t5;
  let div;
  let current;
  let if_block = ctx[9] && ctx[7] && ctx[0] && create_if_block(ctx);
  return {
    c() {
      t0 = text(t0_value);
      t1 = text(" && ");
      t2 = text(t2_value);
      t3 = text(" && ");
      t4 = text(t4_value);
      t5 = space();
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_text(nodes, " && ");
      t2 = claim_text(nodes, t2_value);
      t3 = claim_text(nodes, " && ");
      t4 = claim_text(nodes, t4_value);
      t5 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "border flex-auto h-96");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 512) && t0_value !== (t0_value = !!ctx2[9] + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 128) && t2_value !== (t2_value = !!ctx2[7] + ""))
        set_data(t2, t2_value);
      if ((!current || dirty & 1) && t4_value !== (t4_value = !!ctx2[0] + ""))
        set_data(t4, t4_value);
      if (ctx2[9] && ctx2[7] && ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 641) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
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
        detach(t0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(t2);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function create_default_slot(ctx) {
  let fetchcomponent;
  let current;
  fetchcomponent = new FetchComponent({
    props: {
      url,
      $$slots: {
        default: [
          create_default_slot_1,
          ({ component }) => ({ 9: component }),
          ({ component }) => component ? 512 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(fetchcomponent.$$.fragment);
    },
    l(nodes) {
      claim_component(fetchcomponent.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(fetchcomponent, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const fetchcomponent_changes = {};
      if (dirty & 4997) {
        fetchcomponent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      fetchcomponent.$set(fetchcomponent_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(fetchcomponent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(fetchcomponent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(fetchcomponent, detaching);
    }
  };
}
function create_fragment(ctx) {
  let link;
  let t0;
  let div;
  let t1;
  let t2;
  let t3;
  let ipfsmanager;
  let updating_rootCID;
  let current;
  let if_block = ctx[1] && create_if_block_1(ctx);
  function ipfsmanager_rootCID_binding(value) {
    ctx[5](value);
  }
  let ipfsmanager_props = {
    $$slots: {
      default: [
        create_default_slot,
        ({ ipfsNode, tag }) => ({ 7: ipfsNode, 8: tag }),
        ({ ipfsNode, tag }) => (ipfsNode ? 128 : 0) | (tag ? 256 : 0)
      ]
    },
    $$scope: { ctx }
  };
  if (ctx[2] !== void 0) {
    ipfsmanager_props.rootCID = ctx[2];
  }
  ipfsmanager = new IPFSManager({ props: ipfsmanager_props });
  binding_callbacks.push(() => bind(ipfsmanager, "rootCID", ipfsmanager_rootCID_binding));
  return {
    c() {
      link = element("link");
      t0 = space();
      div = element("div");
      t1 = text("Data: All the data in a Component needs to be saved encrypted under a Tag name. So the user must\r\n	choose which Tag this component's data will be saved under. If Multiple Components save data to\r\n	the same tag, it's up to them to update the object sent to the proxcryptor, as the proxcryptor\r\n	will only write Tag:Value that it is given.");
      t2 = space();
      if (if_block)
        if_block.c();
      t3 = space();
      create_component(ipfsmanager.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-elf7d0"]', document.head);
      link = claim_element(head_nodes, "LINK", { href: true, rel: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t1 = claim_text(div_nodes, "Data: All the data in a Component needs to be saved encrypted under a Tag name. So the user must\r\n	choose which Tag this component's data will be saved under. If Multiple Components save data to\r\n	the same tag, it's up to them to update the object sent to the proxcryptor, as the proxcryptor\r\n	will only write Tag:Value that it is given.");
      div_nodes.forEach(detach);
      t2 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      t3 = claim_space(nodes);
      claim_component(ipfsmanager.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(link, "href", "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css");
      attr(link, "rel", "stylesheet");
      attr(div, "class", "m-2 p-2 border bg-slate-400 rounded text-slate-300");
    },
    m(target, anchor) {
      append_hydration(document.head, link);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      append_hydration(div, t1);
      insert_hydration(target, t2, anchor);
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t3, anchor);
      mount_component(ipfsmanager, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t3.parentNode, t3);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const ipfsmanager_changes = {};
      if (dirty & 4485) {
        ipfsmanager_changes.$$scope = { dirty, ctx: ctx2 };
      }
      if (!updating_rootCID && dirty & 4) {
        updating_rootCID = true;
        ipfsmanager_changes.rootCID = ctx2[2];
        add_flush_callback(() => updating_rootCID = false);
      }
      ipfsmanager.$set(ipfsmanager_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(ipfsmanager.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(ipfsmanager.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      detach(link);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      if (detaching)
        detach(t2);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t3);
      destroy_component(ipfsmanager, detaching);
    }
  };
}
let url = "https://raw.githubusercontent.com/PeerPiper/awesome-peerpiper-components/master/compiled/@peerpiper/ContactCard.svelte.js";
function instance($$self, $$props, $$invalidate) {
  let { wallet = null } = $$props;
  let Web3WalletMenu;
  let rootCID;
  onMount(async () => {
    if (!wallet) {
      $$invalidate(1, { Web3WalletMenu } = await __vitePreload(() => import("../chunks/index-ca95c035.js"), true ? ["chunks/index-ca95c035.js","assets/index-c30dcd19.css","chunks/index-64ae2edc.js","chunks/preload-helper-ef2a18a4.js","chunks/index-1b64b11a.js","chunks/cid-d85b89cf.js"] : void 0), Web3WalletMenu);
    }
  });
  function switch_instance_wallet_binding(value) {
    wallet = value;
    $$invalidate(0, wallet);
  }
  const rootCID_handler = (e) => $$invalidate(2, rootCID = e.detail);
  function ipfsmanager_rootCID_binding(value) {
    rootCID = value;
    $$invalidate(2, rootCID);
  }
  $$self.$$set = ($$props2) => {
    if ("wallet" in $$props2)
      $$invalidate(0, wallet = $$props2.wallet);
  };
  return [
    wallet,
    Web3WalletMenu,
    rootCID,
    switch_instance_wallet_binding,
    rootCID_handler,
    ipfsmanager_rootCID_binding
  ];
}
class Multitag extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { wallet: 0 });
  }
}
export { Multitag as default };
//# sourceMappingURL=multitag.svelte-b9040bc1.js.map
