import { SvelteComponent, init, safe_not_equal, element, svg_element, claim_element, children, claim_svg_element, detach, attr, insert_hydration, append_hydration, noop, create_component, space, claim_component, claim_space, mount_component, transition_in, transition_out, destroy_component, create_slot, text, claim_text, update_slot_base, get_all_dirty_from_scope, get_slot_changes } from "../chunks/index-64ae2edc.js";
var HouseSolid_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "svg.svelte-1es2uhx{width:auto;height:2em;display:block}")();
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
var Menu_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".menu.svelte-1w9krkj{display:flex;flex-direction:row;background-color:black;justify-content:space-evenly;align-items:center;padding:0.7em 0.2em}.menu-item.svelte-1w9krkj{margin:0.25em}")();
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
var app = /* @__PURE__ */ (() => "/* @import '@fontsource/fira-mono'; */\r\n\r\n:root {\r\n	font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,\r\n		Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n	--font-mono: 'Fira Mono', monospace;\r\n	--pure-white: #ffffff;\r\n	--primary-color: #b9c6d2;\r\n	--secondary-color: #d0dde9;\r\n	--tertiary-color: #edf0f8;\r\n	--accent-color: #2ab938;\r\n	--heading-color: rgba(0, 0, 0, 0.7);\r\n	--text-color: #444444;\r\n	--background-without-opacity: rgba(255, 255, 255, 0.7);\r\n	--column-width: 42rem;\r\n	--column-margin-top: 4rem;\r\n}\r\n\r\nbody {\r\n	min-height: 100vh;\r\n	margin: 0;\r\n}\r\n\r\nbody::before {\r\n	content: '';\r\n	width: 80vw;\r\n	height: 100vh;\r\n	position: absolute;\r\n	top: 0;\r\n	left: 10vw;\r\n	z-index: -1;\r\n	background: radial-gradient(\r\n		50% 50% at 50% 50%,\r\n		var(--pure-white) 0%,\r\n		rgba(255, 255, 255, 0) 100%\r\n	);\r\n	opacity: 0.05;\r\n}\r\n\r\n#svelte {\r\n	min-height: 100vh;\r\n	display: flex;\r\n	flex-direction: column;\r\n}\r\n\r\nh1,\r\nh2,\r\np {\r\n	font-weight: 400;\r\n	color: var(--heading-color);\r\n}\r\n\r\np {\r\n	line-height: 1.5;\r\n}\r\n\r\na {\r\n	color: var(--accent-color) !important;\r\n	text-decoration: underline !important;\r\n}\r\n\r\na:hover {\r\n	text-decoration: underline;\r\n}\r\n\r\nh1 {\r\n	font-size: 2rem;\r\n	text-align: center;\r\n}\r\n\r\nh2 {\r\n	font-size: 1rem;\r\n}\r\n\r\npre {\r\n	font-size: 16px;\r\n	font-family: var(--font-mono);\r\n	background-color: rgba(255, 255, 255, 0.45);\r\n	border-radius: 3px;\r\n	box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);\r\n	padding: 0.5em;\r\n	overflow-x: auto;\r\n	color: var(--text-color);\r\n}\r\n\r\ninput,\r\nbutton {\r\n	font-size: inherit;\r\n	font-family: inherit;\r\n}\r\n\r\nbutton:focus:not(:focus-visible) {\r\n	outline: none;\r\n}\r\n\r\ndiv {\r\n	overflow-wrap: break-word;\r\n	/* word-break: break-word; */\r\n}\r\n\r\nbutton {\r\n	border: none;\r\n	color: white;\r\n	padding: 15px 32px;\r\n	text-align: center;\r\n	text-decoration: none;\r\n	display: inline-block;\r\n	font-size: 16px;\r\n	width: -webkit-fit-content;\r\n	width: -moz-fit-content;\r\n	width: fit-content;\r\n	/* margin-left: auto; */\r\n	/* margin-top: 0.5em; */\r\n	/* margin-bottom: 1em; */\r\n	border-radius: 2px;\r\n	filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));\r\n}\r\n\r\nbutton.yellow {\r\n	background-color: rgb(230, 208, 10, 0.82);\r\n}\r\n\r\nbutton.ready {\r\n	background-color: rgb(47, 137, 255, 0.82);\r\n}\r\n\r\nbutton.green {\r\n	background-color: #4caf50;\r\n}\r\n\r\n@media (min-width: 720px) {\r\n	h1 {\r\n		font-size: 2.4rem;\r\n	}\r\n}\r\n")();
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ":root{--column-width:42rem;--column-margin-top:4rem}main.svelte-1r86zn0.svelte-1r86zn0{flex:1;display:flex;flex-direction:column;width:100%;margin:0 auto;box-sizing:border-box}footer.svelte-1r86zn0.svelte-1r86zn0,footer.svelte-1r86zn0 p.svelte-1r86zn0{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;background-color:black;color:#2ec73d}footer.svelte-1r86zn0 a.svelte-1r86zn0{font-weight:bold;margin:auto 0.4em;display:contents}.tagline.svelte-1r86zn0.svelte-1r86zn0{display:flex}@media(min-width: 480px){:root{--column-margin-top:1.1rem}}")();
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
//# sourceMappingURL=__layout.svelte-e9a33b50.js.map
