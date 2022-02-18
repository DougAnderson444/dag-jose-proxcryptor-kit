import { SvelteComponent, init, safe_not_equal, element, svg_element, claim_element, children, claim_svg_element, detach, attr, insert_hydration, append_hydration, noop, create_component, space, claim_component, claim_space, mount_component, transition_in, transition_out, destroy_component, create_slot, text, claim_text, update_slot_base, get_all_dirty_from_scope, get_slot_changes } from "../chunks/vendor-bb143dea.js";
var HouseSolid_svelte_svelte_type_style_lang = "";
function create_fragment$2(ctx) {
  let div;
  let svg;
  let path;
  return {
    c() {
      div = element("div");
      svg = svg_element("svg");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      svg = claim_svg_element(div_nodes, "svg", { xmlns: true, viewBox: true, class: true });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", { fill: true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill", "#2ec73d");
      attr(path, "d", "M576 256c0 18-15 32-32 32h-32l1 160-1 8v16c0 22-18 40-40 40h-80c-22 0-40-18-40-40v-88c0-18-14-32-32-32h-64c-18 0-32 14-32 32v88c0 22-18 40-40 40h-80c-22 0-40-18-40-40V288H32c-18 0-32-14-32-32 0-9 3-17 10-24L266 8c7-7 15-8 22-8s15 2 22 7l255 225c8 7 12 15 11 24z");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "viewBox", "0 0 576 512");
      attr(svg, "class", "svelte-1es2uhx");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, svg);
      append_hydration(svg, path);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
class HouseSolid extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$2, safe_not_equal, {});
  }
}
var Menu_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let div2;
  let div0;
  let housesolid;
  let t;
  let div1;
  let current;
  housesolid = new HouseSolid({});
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      create_component(housesolid.$$.fragment);
      t = space();
      div1 = element("div");
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(housesolid.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      children(div1).forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "menu-item svelte-1w9krkj");
      attr(div1, "class", "menu-item svelte-1w9krkj");
      attr(div2, "class", "menu svelte-1w9krkj");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      mount_component(housesolid, div0, null);
      append_hydration(div2, t);
      append_hydration(div2, div1);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(housesolid.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(housesolid.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(housesolid);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { handle } = $$props;
  let { pubKey } = $$props;
  $$self.$$set = ($$props2) => {
    if ("handle" in $$props2)
      $$invalidate(0, handle = $$props2.handle);
    if ("pubKey" in $$props2)
      $$invalidate(1, pubKey = $$props2.pubKey);
  };
  return [handle, pubKey];
}
class Menu extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { handle: 0, pubKey: 1 });
  }
}
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let main;
  let t0;
  let footer;
  let menu;
  let t1;
  let div;
  let p;
  let t2;
  let a;
  let t3;
  let t4;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  menu = new Menu({});
  return {
    c() {
      main = element("main");
      if (default_slot)
        default_slot.c();
      t0 = space();
      footer = element("footer");
      create_component(menu.$$.fragment);
      t1 = space();
      div = element("div");
      p = element("p");
      t2 = text("visit ");
      a = element("a");
      t3 = text("http://peerpiper.io");
      t4 = text(" to learn more");
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      t0 = claim_space(nodes);
      footer = claim_element(nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      claim_component(menu.$$.fragment, footer_nodes);
      t1 = claim_space(footer_nodes);
      div = claim_element(footer_nodes, "DIV", { class: true });
      var div_nodes = children(div);
      p = claim_element(div_nodes, "P", { class: true });
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "visit ");
      a = claim_element(p_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "http://peerpiper.io");
      a_nodes.forEach(detach);
      t4 = claim_text(p_nodes, " to learn more");
      p_nodes.forEach(detach);
      div_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(main, "class", "svelte-1r86zn0");
      attr(a, "href", "https://peerpiper.io");
      attr(a, "class", "svelte-1r86zn0");
      attr(p, "class", "svelte-1r86zn0");
      attr(div, "class", "tagline svelte-1r86zn0");
      attr(footer, "class", "svelte-1r86zn0");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      if (default_slot) {
        default_slot.m(main, null);
      }
      insert_hydration(target, t0, anchor);
      insert_hydration(target, footer, anchor);
      mount_component(menu, footer, null);
      append_hydration(footer, t1);
      append_hydration(footer, div);
      append_hydration(div, p);
      append_hydration(p, t2);
      append_hydration(p, a);
      append_hydration(a, t3);
      append_hydration(p, t4);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[0], !current ? get_all_dirty_from_scope(ctx2[0]) : get_slot_changes(default_slot_template, ctx2[0], dirty, null), null);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      transition_in(menu.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      transition_out(menu.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(footer);
      destroy_component(menu);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class _layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export { _layout as default };
//# sourceMappingURL=__layout.svelte-928670df.js.map
