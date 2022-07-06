import { SvelteComponent, init, safe_not_equal, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out, empty, insert_hydration, group_outros, check_outros, detach, create_slot, element, create_component, space, claim_element, children, claim_component, claim_space, attr, mount_component, append_hydration, destroy_component, destroy_each, add_flush_callback, binding_callbacks, bind, query_selector_all, onMount, text, claim_text, set_data, is_function, noop } from "../chunks/index-64ae2edc.js";
import { validatePubKey } from "../chunks/cid-d85b89cf.js";
import { PiperNet, HypnsManager } from "../chunks/Contacts.svelte_svelte_type_style_lang-6b2bb9e7.js";
import { __vitePreload } from "../chunks/preload-helper-ef2a18a4.js";
import { IPFSManager, Proxcryptor, Gateway } from "../chunks/IPFSManager-fbe22ba3.js";
import "../chunks/index-1b64b11a.js";
import "../chunks/singletons-cdabada9.js";
import "../chunks/_commonjsHelpers-9b98600b.js";
var Icon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".icon.svelte-g92v1v{position:relative;overflow:hidden;vertical-align:middle;-o-object-fit:contain;object-fit:contain;transform-origin:center center;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:currentColor}")();
var OutterWraper_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-169itvj,.svelte-169itvj::before,.svelte-169itvj::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-169itvj::before,.svelte-169itvj::after{--tw-content:''}.svelte-169itvj:-moz-focusring{outline:auto}.svelte-169itvj:-moz-ui-invalid{box-shadow:none}.svelte-169itvj::-webkit-inner-spin-button,.svelte-169itvj::-webkit-outer-spin-button{height:auto}.svelte-169itvj::-webkit-search-decoration{-webkit-appearance:none}.svelte-169itvj::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-169itvj:disabled{cursor:default}.svelte-169itvj::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-169itvj::-webkit-date-and-time-value{min-height:1.5em}.svelte-169itvj,.svelte-169itvj::before,.svelte-169itvj::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-169itvj::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-169itvj::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.flex.svelte-169itvj{display:flex}@-webkit-keyframes svelte-169itvj-spin{to{transform:rotate(360deg)}}@keyframes svelte-169itvj-spin{to{transform:rotate(360deg)}}.flex-col.svelte-169itvj{flex-direction:column}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}")();
var Wrapper_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-169itvj,.svelte-169itvj::before,.svelte-169itvj::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-169itvj::before,.svelte-169itvj::after{--tw-content:''}.svelte-169itvj:-moz-focusring{outline:auto}.svelte-169itvj:-moz-ui-invalid{box-shadow:none}.svelte-169itvj::-webkit-inner-spin-button,.svelte-169itvj::-webkit-outer-spin-button{height:auto}.svelte-169itvj::-webkit-search-decoration{-webkit-appearance:none}.svelte-169itvj::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-169itvj:disabled{cursor:default}.svelte-169itvj::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-169itvj::-webkit-date-and-time-value{min-height:1.5em}.svelte-169itvj,.svelte-169itvj::before,.svelte-169itvj::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-169itvj::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-169itvj::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.flex-1.svelte-169itvj{flex:1 1 0%}@-webkit-keyframes svelte-169itvj-spin{to{transform:rotate(360deg)}}@keyframes svelte-169itvj-spin{to{transform:rotate(360deg)}}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}")();
var ContactCard = `function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) {
        src_url_equal_anchor = document.createElement('a');
    }
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function element(name) {
    return document.createElement(name);
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function children(element) {
    return Array.from(element.childNodes);
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_style(node, key, value, important) {
    if (value === null) {
        node.style.removeProperty(key);
    }
    else {
        node.style.setProperty(key, value, important ? 'important' : '');
    }
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}

// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + \`%{\${fn(t, 1 - t)}}\\n\`;
    }
    const rule = keyframes + \`100% {\${fn(b, 1 - b)}}\\n}\`;
    const name = \`__svelte_\${hash(rule)}_\${uid}\`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(\`@keyframes \${name} \${rule}\`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = \`\${animation ? \`\${animation}, \` : ''}\${name} \${duration}ms linear \${delay}ms 1 both\`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        managed_styles.forEach(info => {
            const { stylesheet } = info;
            let i = stylesheet.cssRules.length;
            while (i--)
                stylesheet.deleteRule(i);
            info.rules = {};
        });
        managed_styles.clear();
    });
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, { cancelable });
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        // @ts-ignore
        callbacks.slice().forEach(fn => fn.call(this, event));
    }
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(\`\${direction ? 'intro' : 'outro'}\${kind}\`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = (program.b - t);
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro \u2014 we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro \u2014 needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // \`false\` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

/* src\\lib\\components\\@peerpiper\\Editable.svelte generated by Svelte v3.48.0 */

function create_fragment$5(ctx) {
	let span;
	let mounted;
	let dispose;

	return {
		c() {
			span = element("span");
			attr(span, "contenteditable", "");
			attr(span, "class", "align-middle");
			if (/*item*/ ctx[0] === void 0) add_render_callback(() => /*span_input_handler*/ ctx[5].call(span));
		},
		m(target, anchor) {
			insert(target, span, anchor);
			/*span_binding*/ ctx[4](span);

			if (/*item*/ ctx[0] !== void 0) {
				span.textContent = /*item*/ ctx[0];
			}

			if (!mounted) {
				dispose = [
					listen(span, "input", /*span_input_handler*/ ctx[5]),
					listen(span, "keydown", /*handleEnter*/ ctx[2])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*item*/ 1 && /*item*/ ctx[0] !== span.textContent) {
				span.textContent = /*item*/ ctx[0];
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(span);
			/*span_binding*/ ctx[4](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	createEventDispatcher();
	let { item } = $$props;
	let { options = { singleLine: true } } = $$props;
	let inputEl;

	// by default, if Enter is pressed, the input is blurred
	const handleEnter = e => {
		if (e.keyCode === 13 && options.singleLine) {
			e.preventDefault();
			inputEl.blur();
		}
	};

	function span_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			inputEl = $$value;
			$$invalidate(1, inputEl);
		});
	}

	function span_input_handler() {
		item = this.textContent;
		$$invalidate(0, item);
	}

	$$self.$$set = $$props => {
		if ('item' in $$props) $$invalidate(0, item = $$props.item);
		if ('options' in $$props) $$invalidate(3, options = $$props.options);
	};

	return [item, inputEl, handleEnter, options, span_binding, span_input_handler];
}

class Editable extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$4, create_fragment$5, safe_not_equal, { item: 0, options: 3 });
	}

	get item() {
		return this.$$.ctx[0];
	}

	set item(item) {
		this.$$set({ item });
		flush();
	}

	get options() {
		return this.$$.ctx[3];
	}

	set options(options) {
		this.$$set({ options });
		flush();
	}
}

/* src\\lib\\components\\@peerpiper\\Icons.svelte generated by Svelte v3.48.0 */

function create_fragment$4(ctx) {
	let div;

	return {
		c() {
			div = element("div");
			div.innerHTML = \`<svg><symbol id="avatar" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path d="M105 2a129 129 0 0 0 1 253c11 1 33 2 44 0 26-5 48-16 67-35a126 126 0 0 0 38-114A129 129 0 0 0 150 2c-10-2-35-2-45 0zm31 30c23 4 41 24 45 51l3 9 2 6c0 4-1 6-5 14l-7 15c-3 8-11 19-16 24s-5 7-2 13c5 10 13 16 35 23l16 5-3 4a117 117 0 0 1-151 0l-4-4 4-1 17-6c19-6 27-13 31-25l2-5-4-4c-5-6-12-16-15-23l-7-11c-4-6-7-14-7-18 0-3 3-9 5-9l1-3 2-11c6-26 26-43 50-45l8 1z"></path></symbol><symbol id="address" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path d="M412 414a111 111 0 0 1 90-77v-40h31c7 0 13-6 13-13v-15c0-5-2-9-7-11L355 153c-4-2-8-2-12 0l-65 37v-13c0-5-4-9-9-9h-29c-5 0-8 4-8 9v39l-74 42c-4 2-7 7-7 11v15c0 7 6 13 13 13h31v180c0 12 9 21 20 21h203c-13-25-15-56-6-84z"></path><path d="M592 412a81 81 0 0 0-109-36 82 82 0 0 0-36 109l61 108c5 9 18 9 23 0l61-108c12-22 12-49 0-73zm-73 72a35 35 0 1 1 0-70 35 35 0 1 1 0 70z"></path></symbol><symbol id="email" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path d="m582.1 312.4-197.5-128c-4.3-2.8-10-2.8-14.4 0l-199 128c-3.8 2.4-7.8 6.6-7.8 11v230.3c0 7.3 9.3 15.6 16.6 15.6h394.5c7.3 0 14.1-8.3 14.1-15.6V323.4c0-4.4-2.7-8.6-6.4-11zm-385 35.2 113 73.3-113 103zm131.8 88 41.2 26.8a13.2 13.2 0 0 0 14.3 0l41.1-26.8 115 104.7H214zM451.5 421l113-73.3V524zm-74.3-209.8 173.1 112.3-173 112.3-173.1-112.3zm0 200.6c20.7 0 40.9-7.3 56.7-20.6A13.2 13.2 0 0 0 417 371a62 62 0 1 1 22.2-47.5c0 6-4.9 10.9-10.8 10.9a11 11 0 0 1-10.9-10v-.9a40.3 40.3 0 1 0-12.3 29 37 37 0 0 0 60.3-29 88.4 88.4 0 1 0-88.3 88.4zm0-74.3a14 14 0 1 1 0-28 14 14 0 0 1 0 28z"></path></symbol><symbol id="phone" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path fill-rule="evenodd" d="m587 561-3 3c-96 96-241-7-315-81S92 264 188 168l3-3 107 106-13 14a39 39 0 0 0-5 49 503 503 0 0 0 138 138c16 11 36 9 49-5l14-13zm-92-118 104 103c7-14 4-33-8-45l-51-51a39 39 0 0 0-45-7zM206 153l103 104c7-15 5-33-7-45l-51-51a39 39 0 0 0-45-8z"></path></symbol><symbol id="arrow-left" class="icon" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></symbol><symbol id="arrow-right" class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></symbol><symbol id="arrow-up" class="icon" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></symbol><symbol id="arrow-down" class="icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></symbol><symbol id="check" class="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></symbol><symbol id="close" class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol><symbol id="download" class="icon" viewBox="0 0 24 24"><path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></symbol><symbol id="edit" class="icon" viewBox="0 0 24 24"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></symbol><symbol id="github" class="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2ZM0 12C0 5.3726 5.3726 0 12 0C18.6274 0 24 5.3726 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12Z" fill="currentColor" stroke="none"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.59162 22.7357C9.49492 22.6109 9.49492 21.4986 9.59162 19.399C8.55572 19.4347 7.90122 19.3628 7.62812 19.1833C7.21852 18.9139 6.80842 18.0833 6.44457 17.4979C6.08072 16.9125 5.27312 16.8199 4.94702 16.6891C4.62091 16.5582 4.53905 16.0247 5.84562 16.4282C7.15222 16.8316 7.21592 17.9303 7.62812 18.1872C8.04032 18.4441 9.02572 18.3317 9.47242 18.1259C9.91907 17.9201 9.88622 17.1538 9.96587 16.8503C10.0666 16.5669 9.71162 16.5041 9.70382 16.5018C9.26777 16.5018 6.97697 16.0036 6.34772 13.7852C5.71852 11.5669 6.52907 10.117 6.96147 9.49369C7.24972 9.07814 7.22422 8.19254 6.88497 6.83679C8.11677 6.67939 9.06732 7.06709 9.73672 7.99999C9.73737 8.00534 10.6143 7.47854 12.0001 7.47854C13.386 7.47854 13.8777 7.90764 14.2571 7.99999C14.6365 8.09234 14.94 6.36699 17.2834 6.83679C16.7942 7.79839 16.3844 8.99999 16.6972 9.49369C17.0099 9.98739 18.2372 11.5573 17.4833 13.7852C16.9807 15.2706 15.9927 16.1761 14.5192 16.5018C14.3502 16.5557 14.2658 16.6427 14.2658 16.7627C14.2658 16.9427 14.4942 16.9624 14.8233 17.8058C15.0426 18.368 15.0585 19.9739 14.8708 22.6234C14.3953 22.7445 14.0254 22.8257 13.7611 22.8673C13.2924 22.9409 12.7835 22.9822 12.2834 22.9982C11.7834 23.0141 11.6098 23.0123 10.9185 22.948C10.4577 22.9051 10.0154 22.8343 9.59162 22.7357Z" fill="currentColor" stroke="none"></path></symbol><symbol id="git-branch" class="icon" viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></symbol><symbol id="log-in" class="icon" viewBox="0 0 24 24"><path d="M15 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H15"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></symbol><symbol id="maximize" class="icon" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></symbol><symbol id="maximize-2" class="icon" viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></symbol><symbol id="menu" class="icon" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></symbol><symbol id="message-square" class="icon" viewBox="0 0 24 24"><g transform="translate(0, 1)"><path d="M16.5 19H11V15H18V11H22V19H19.5L18 20.5L16.5 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 3H18V15H8.5L6.5 17L4.5 15H2V3Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 11H9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M6 7H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></g></symbol><symbol id="minus" class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></symbol><symbol id="plus" class="icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></symbol><symbol id="save" class="icon" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></symbol><symbol id="link" class="icon" viewBox="0 0 24 24"><path d="M9,7L6,7A2 2 0 0 0 6,17L9,17"></path><path d="M15,7L18,7A2 2 0 0 1 18,17L15,17"></path><path d="M7,12L17,12"></path></symbol><symbol id="chevron" class="icon" viewBox="0 0 24 24"><path d="M2,7 L12,17 L20,7"></path></symbol><symbol id="delete" class="icon" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M22 4.2h-5.6L15 1.6c-.1-.2-.4-.4-.7-.4H9.6c-.2 0-.5.2-.6.4L7.6 4.2H2c-.4 0-.8.4-.8.8s.4.8.8.8h1.8V22c0 .4.3.8.8.8h15c.4 0 .8-.3.8-.8V5.8H22c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM10.8 16.5c0 .4-.3.8-.8.8s-.8-.3-.8-.8V10c0-.4.3-.8.8-.8s.8.3.8.8v6.5zm4 0c0 .4-.3.8-.8.8s-.8-.3-.8-.8V10c0-.4.3-.8.8-.8s.8.3.8.8v6.5z"></path></symbol></svg>\`;
			set_style(div, "display", "none");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

class Icons extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment$4, safe_not_equal, {});
	}
}

/* src\\lib\\components\\@peerpiper\\Icon.svelte generated by Svelte v3.48.0 */

function add_css$3(target) {
	append_styles(target, "svelte-qfptj0-ContactCard", ".icon.svelte-qfptj0-ContactCard{position:relative;overflow:hidden;vertical-align:middle;-o-object-fit:contain;object-fit:contain;transform-origin:center center;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:currentColor}");
}

function create_fragment$3(ctx) {
	let svg;
	let use;
	let use_xlink_href_value;
	let t0;
	let t1;
	let icons;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);
	icons = new Icons({});

	return {
		c() {
			svg = svg_element("svg");
			use = svg_element("use");
			t0 = space();
			if (default_slot) default_slot.c();
			t1 = space();
			create_component(icons.$$.fragment);
			xlink_attr(use, "xlink:href", use_xlink_href_value = "#" + /*name*/ ctx[0]);
			attr(svg, "width", /*size*/ ctx[1]);
			attr(svg, "height", /*size*/ ctx[1]);
			attr(svg, "class", "icon  svelte-qfptj0-ContactCard");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, use);
			insert(target, t0, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			insert(target, t1, anchor);
			mount_component(icons, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*name*/ 1 && use_xlink_href_value !== (use_xlink_href_value = "#" + /*name*/ ctx[0])) {
				xlink_attr(use, "xlink:href", use_xlink_href_value);
			}

			if (!current || dirty & /*size*/ 2) {
				attr(svg, "width", /*size*/ ctx[1]);
			}

			if (!current || dirty & /*size*/ 2) {
				attr(svg, "height", /*size*/ ctx[1]);
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[2],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[2])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			transition_in(icons.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			transition_out(icons.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(svg);
			if (detaching) detach(t0);
			if (default_slot) default_slot.d(detaching);
			if (detaching) detach(t1);
			destroy_component(icons, detaching);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { name } = $$props;
	let { size = 32 } = $$props;

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('size' in $$props) $$invalidate(1, size = $$props.size);
		if ('$$scope' in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [name, size, $$scope, slots];
}

class Icon extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$3, create_fragment$3, safe_not_equal, { name: 0, size: 1 }, add_css$3);
	}

	get name() {
		return this.$$.ctx[0];
	}

	set name(name) {
		this.$$set({ name });
		flush();
	}

	get size() {
		return this.$$.ctx[1];
	}

	set size(size) {
		this.$$set({ size });
		flush();
	}
}

/* src\\lib\\components\\@peerpiper\\Content.svelte generated by Svelte v3.48.0 */

function add_css$2(target) {
	append_styles(target, "svelte-rjokov-ContactCard", ".svelte-rjokov-ContactCard,.svelte-rjokov-ContactCard::before,.svelte-rjokov-ContactCard::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-rjokov-ContactCard::before,.svelte-rjokov-ContactCard::after{--tw-content:''}.svelte-rjokov-ContactCard:-moz-focusring{outline:auto}.svelte-rjokov-ContactCard:-moz-ui-invalid{box-shadow:none}.svelte-rjokov-ContactCard::-webkit-inner-spin-button,.svelte-rjokov-ContactCard::-webkit-outer-spin-button{height:auto}.svelte-rjokov-ContactCard::-webkit-search-decoration{-webkit-appearance:none}.svelte-rjokov-ContactCard::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-rjokov-ContactCard:disabled{cursor:default}.svelte-rjokov-ContactCard::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-rjokov-ContactCard::-webkit-date-and-time-value{min-height:1.5em}.svelte-rjokov-ContactCard{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-rjokov-ContactCard,.svelte-rjokov-ContactCard::before,.svelte-rjokov-ContactCard::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-rjokov-ContactCard::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-rjokov-ContactCard::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.m-2.svelte-rjokov-ContactCard{margin:0.5rem}.flex.svelte-rjokov-ContactCard{display:flex}@-webkit-keyframes svelte-rjokov-ContactCard-spin{to{transform:rotate(360deg)}}@keyframes svelte-rjokov-ContactCard-spin{to{transform:rotate(360deg)}}.items-center.svelte-rjokov-ContactCard{align-items:center}.justify-center.svelte-rjokov-ContactCard{justify-content:center}.bg-contain.svelte-rjokov-ContactCard{background-size:contain}.bg-no-repeat.svelte-rjokov-ContactCard{background-repeat:no-repeat}.text-center.svelte-rjokov-ContactCard{text-align:center}.align-middle.svelte-rjokov-ContactCard{vertical-align:middle}.text-slate-500.svelte-rjokov-ContactCard{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
}

const get_first_slot_changes = dirty => ({});
const get_first_slot_context = ctx => ({});

// (10:21)      
function fallback_block$1(ctx) {
	let div;
	let icon;
	let current;
	icon = new Icon({ props: { name: /*name*/ ctx[0] } });

	return {
		c() {
			div = element("div");
			create_component(icon.$$.fragment);
			attr(div, "class", "text-slate-500 svelte-rjokov-ContactCard");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(icon, div, null);
			current = true;
		},
		p(ctx, dirty) {
			const icon_changes = {};
			if (dirty & /*name*/ 1) icon_changes.name = /*name*/ ctx[0];
			icon.$set(icon_changes);
		},
		i(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(icon);
		}
	};
}

function create_fragment$2(ctx) {
	let div2;
	let div0;
	let t;
	let div1;
	let current;
	const first_slot_template = /*#slots*/ ctx[2].first;
	const first_slot = create_slot(first_slot_template, ctx, /*$$scope*/ ctx[1], get_first_slot_context);
	const first_slot_or_fallback = first_slot || fallback_block$1(ctx);
	const default_slot_template = /*#slots*/ ctx[2].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			if (first_slot_or_fallback) first_slot_or_fallback.c();
			t = space();
			div1 = element("div");
			if (default_slot) default_slot.c();
			attr(div0, "class", "align-middle svelte-rjokov-ContactCard");
			attr(div1, "class", "align-middle svelte-rjokov-ContactCard");
			attr(div2, "class", "flex align-middle items-center text-center justify-center bg-contain bg-no-repeat m-2 biggie svelte-rjokov-ContactCard");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);

			if (first_slot_or_fallback) {
				first_slot_or_fallback.m(div0, null);
			}

			append(div2, t);
			append(div2, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (first_slot) {
				if (first_slot.p && (!current || dirty & /*$$scope*/ 2)) {
					update_slot_base(
						first_slot,
						first_slot_template,
						ctx,
						/*$$scope*/ ctx[1],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[1])
						: get_slot_changes(first_slot_template, /*$$scope*/ ctx[1], dirty, get_first_slot_changes),
						get_first_slot_context
					);
				}
			} else {
				if (first_slot_or_fallback && first_slot_or_fallback.p && (!current || dirty & /*name*/ 1)) {
					first_slot_or_fallback.p(ctx, !current ? -1 : dirty);
				}
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[1],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[1])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(first_slot_or_fallback, local);
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(first_slot_or_fallback, local);
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			if (first_slot_or_fallback) first_slot_or_fallback.d(detaching);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { name = null } = $$props;

	$$self.$$set = $$props => {
		if ('name' in $$props) $$invalidate(0, name = $$props.name);
		if ('$$scope' in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	return [name, $$scope, slots];
}

class Content extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { name: 0 }, add_css$2);
	}

	get name() {
		return this.$$.ctx[0];
	}

	set name(name) {
		this.$$set({ name });
		flush();
	}
}

function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}
function quintOut(t) {
    return --t * t * t * t * t + 1;
}

function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u) => \`
			transform: \${transform} translate(\${(1 - t) * x}px, \${(1 - t) * y}px);
			opacity: \${target_opacity - (od * u)}\`
    };
}

/* src\\lib\\components\\@peerpiper\\ContextMenu.svelte generated by Svelte v3.48.0 */

function add_css$1(target) {
	append_styles(target, "svelte-9a28q0-ContactCard", ".svelte-9a28q0-ContactCard,.svelte-9a28q0-ContactCard::before,.svelte-9a28q0-ContactCard::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-9a28q0-ContactCard::before,.svelte-9a28q0-ContactCard::after{--tw-content:''}b.svelte-9a28q0-ContactCard{font-weight:bolder}input.svelte-9a28q0-ContactCard{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.svelte-9a28q0-ContactCard:-moz-focusring{outline:auto}.svelte-9a28q0-ContactCard:-moz-ui-invalid{box-shadow:none}.svelte-9a28q0-ContactCard::-webkit-inner-spin-button,.svelte-9a28q0-ContactCard::-webkit-outer-spin-button{height:auto}.svelte-9a28q0-ContactCard::-webkit-search-decoration{-webkit-appearance:none}.svelte-9a28q0-ContactCard::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-9a28q0-ContactCard::-moz-placeholder{opacity:1;color:#9CA3AF}input.svelte-9a28q0-ContactCard::placeholder{opacity:1;color:#9CA3AF}.svelte-9a28q0-ContactCard:disabled{cursor:default}svg.svelte-9a28q0-ContactCard{display:block;vertical-align:middle}[type='text'].svelte-9a28q0-ContactCard{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6B7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}[type='text'].svelte-9a28q0-ContactCard:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#1C64F2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#1C64F2}input.svelte-9a28q0-ContactCard::-moz-placeholder{color:#6B7280;opacity:1}input.svelte-9a28q0-ContactCard::placeholder{color:#6B7280;opacity:1}.svelte-9a28q0-ContactCard::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-9a28q0-ContactCard::-webkit-date-and-time-value{min-height:1.5em}[type='checkbox'].svelte-9a28q0-ContactCard{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1C64F2;background-color:#fff;border-color:#6B7280;border-width:1px;--tw-shadow:0 0 #0000}[type='checkbox'].svelte-9a28q0-ContactCard{border-radius:0px}[type='checkbox'].svelte-9a28q0-ContactCard:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#1C64F2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[type='checkbox'].svelte-9a28q0-ContactCard:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox'].svelte-9a28q0-ContactCard:checked{background-image:url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\\")}[type='checkbox'].svelte-9a28q0-ContactCard:indeterminate{background-image:url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox'].svelte-9a28q0-ContactCard:indeterminate:hover,[type='checkbox'].svelte-9a28q0-ContactCard:indeterminate:focus{border-color:transparent;background-color:currentColor}.svelte-9a28q0-ContactCard{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-9a28q0-ContactCard,.svelte-9a28q0-ContactCard::before,.svelte-9a28q0-ContactCard::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-9a28q0-ContactCard::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-9a28q0-ContactCard::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.z-50.svelte-9a28q0-ContactCard{z-index:50}.mx-4.svelte-9a28q0-ContactCard{margin-left:1rem;margin-right:1rem}.mx-1.svelte-9a28q0-ContactCard{margin-left:0.25rem;margin-right:0.25rem}.flex.svelte-9a28q0-ContactCard{display:flex}.h-10.svelte-9a28q0-ContactCard{height:2.5rem}.w-10.svelte-9a28q0-ContactCard{width:2.5rem}@-webkit-keyframes svelte-9a28q0-ContactCard-spin{to{transform:rotate(360deg)}}@keyframes svelte-9a28q0-ContactCard-spin{to{transform:rotate(360deg)}}.flex-row.svelte-9a28q0-ContactCard{flex-direction:row}.flex-col.svelte-9a28q0-ContactCard{flex-direction:column}.justify-end.svelte-9a28q0-ContactCard{justify-content:flex-end}.rounded-sm.svelte-9a28q0-ContactCard{border-radius:0.125rem}.border.svelte-9a28q0-ContactCard{border-width:1px}.border-slate-300.svelte-9a28q0-ContactCard{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.bg-slate-50.svelte-9a28q0-ContactCard{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.p-4.svelte-9a28q0-ContactCard{padding:1rem}.text-left.svelte-9a28q0-ContactCard{text-align:left}.text-sm.svelte-9a28q0-ContactCard{font-size:0.875rem;line-height:1.25rem}.text-lg.svelte-9a28q0-ContactCard{font-size:1.125rem;line-height:1.75rem}.drop-shadow-lg.svelte-9a28q0-ContactCard{--tw-drop-shadow:drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
}

// (68:1) {#if open}
function create_if_block$1(ctx) {
	let div1;
	let div0;
	let current_block_type_index;
	let if_block;
	let div1_transition;
	let current;
	const if_block_creators = [create_if_block_1, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (!/*submitting*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			if_block.c();
			attr(div0, "class", "text-left border-slate-300 svelte-9a28q0-ContactCard");
			attr(div1, "class", "flex flex-row justify-end z-50 bg-slate-50 border drop-shadow-lg p-4 mx-4 rounded-sm svelte-9a28q0-ContactCard");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			if_blocks[current_block_type_index].m(div0, null);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(div0, null);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);

			add_render_callback(() => {
				if (!div1_transition) div1_transition = create_bidirectional_transition(
					div1,
					fly,
					{
						delay: 250,
						duration: 300,
						x: 0,
						y: -100,
						opacity: 0.1,
						easing: quintOut
					},
					true
				);

				div1_transition.run(1);
			});

			current = true;
		},
		o(local) {
			transition_out(if_block);

			if (!div1_transition) div1_transition = create_bidirectional_transition(
				div1,
				fly,
				{
					delay: 250,
					duration: 300,
					x: 0,
					y: -100,
					opacity: 0.1,
					easing: quintOut
				},
				false
			);

			div1_transition.run(0);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if_blocks[current_block_type_index].d();
			if (detaching && div1_transition) div1_transition.end();
		}
	};
}

// (94:4) {:else}
function create_else_block$1(ctx) {
	let t;

	return {
		c() {
			t = text("Requesting access...");
		},
		m(target, anchor) {
			insert(target, t, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(t);
		}
	};
}

// (74:4) {#if !submitting}
function create_if_block_1(ctx) {
	let span;
	let t3;
	let content0;
	let t4;
	let content1;
	let current;

	content0 = new Content({
			props: {
				$$slots: {
					first: [create_first_slot_1],
					default: [create_default_slot_1$1]
				},
				$$scope: { ctx }
			}
		});

	content1 = new Content({
			props: {
				$$slots: {
					first: [create_first_slot],
					default: [create_default_slot$1]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			span = element("span");
			span.innerHTML = \`Paste the <b class="svelte-9a28q0-ContactCard">Public Key</b> you want to grant access\`;
			t3 = space();
			create_component(content0.$$.fragment);
			t4 = space();
			create_component(content1.$$.fragment);
			attr(span, "class", "text-sm svelte-9a28q0-ContactCard");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			insert(target, t3, anchor);
			mount_component(content0, target, anchor);
			insert(target, t4, anchor);
			mount_component(content1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const content0_changes = {};

			if (dirty & /*$$scope, targetPublicKey*/ 260) {
				content0_changes.$$scope = { dirty, ctx };
			}

			content0.$set(content0_changes);
			const content1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				content1_changes.$$scope = { dirty, ctx };
			}

			content1.$set(content1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(content0.$$.fragment, local);
			transition_in(content1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(content0.$$.fragment, local);
			transition_out(content1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			if (detaching) detach(t3);
			destroy_component(content0, detaching);
			if (detaching) detach(t4);
			destroy_component(content1, detaching);
		}
	};
}

// (76:5) <Content>
function create_default_slot_1$1(ctx) {
	let input;
	let mounted;
	let dispose;

	return {
		c() {
			input = element("input");
			attr(input, "type", "text");
			attr(input, "placeholder", "Their Public Key");
			attr(input, "class", "svelte-9a28q0-ContactCard");
		},
		m(target, anchor) {
			insert(target, input, anchor);
			set_input_value(input, /*targetPublicKey*/ ctx[2]);

			if (!mounted) {
				dispose = [
					listen(input, "input", /*input_input_handler*/ ctx[5]),
					listen(input, "keydown", /*handleInput*/ ctx[4])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*targetPublicKey*/ 4 && input.value !== /*targetPublicKey*/ ctx[2]) {
				set_input_value(input, /*targetPublicKey*/ ctx[2]);
			}
		},
		d(detaching) {
			if (detaching) detach(input);
			mounted = false;
			run_all(dispose);
		}
	};
}

// (77:6) <svelte:fragment slot="first">
function create_first_slot_1(ctx) {
	let span;

	return {
		c() {
			span = element("span");
			span.textContent = "Grant Acess:";
			attr(span, "class", "text-sm mx-1 text-lg svelte-9a28q0-ContactCard");
		},
		m(target, anchor) {
			insert(target, span, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(span);
		}
	};
}

// (87:5) <Content>
function create_default_slot$1(ctx) {
	let input;
	let mounted;
	let dispose;

	return {
		c() {
			input = element("input");
			attr(input, "type", "text");
			attr(input, "placeholder", "douganderson444");
			attr(input, "class", "svelte-9a28q0-ContactCard");
		},
		m(target, anchor) {
			insert(target, input, anchor);

			if (!mounted) {
				dispose = listen(input, "keydown", /*handleInput*/ ctx[4]);
				mounted = true;
			}
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(input);
			mounted = false;
			dispose();
		}
	};
}

// (88:6) <svelte:fragment slot="first">
function create_first_slot(ctx) {
	let input;
	let t0;
	let span;

	return {
		c() {
			input = element("input");
			t0 = space();
			span = element("span");
			span.innerHTML = \`Add <b class="svelte-9a28q0-ContactCard">Contact</b>\`;
			attr(input, "type", "checkbox");
			input.checked = true;
			attr(input, "class", "svelte-9a28q0-ContactCard");
			attr(span, "class", "text-sm mx-1 svelte-9a28q0-ContactCard");
		},
		m(target, anchor) {
			insert(target, input, anchor);
			insert(target, t0, anchor);
			insert(target, span, anchor);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(input);
			if (detaching) detach(t0);
			if (detaching) detach(span);
		}
	};
}

function create_fragment$1(ctx) {
	let div2;
	let div1;
	let div0;
	let t;
	let clickOutside_action;
	let current;
	let mounted;
	let dispose;
	let if_block = /*open*/ ctx[0] && create_if_block$1(ctx);

	return {
		c() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			div0.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 752" class="svelte-9a28q0-ContactCard"><path d="M346.9 153.4c-6.2 0-12.1 5.2-13.7 10.2l-12.4 43.5a176 176 0 0 0-25.2 10.4l-39.5-21.9c-5.3-3-12.7-2-17 2.4l-41 41.1a14.6 14.6 0 0 0-2.4 16.9l22 39.6a171 171 0 0 0-10.4 25l-43.5 12.5c-6 1.7-10.4 7.6-10.4 13.8v58.3c0 6 4.5 12 10.4 13.6L207 431c2.9 8.7 6.5 17 10.5 25.1L195.7 496a14.7 14.7 0 0 0 2.4 16.9l41 41.1a14.6 14.6 0 0 0 17 2.4l39.5-22c8.1 4.2 16.5 7.7 25.2 10.6l12.4 43.3a14.6 14.6 0 0 0 13.7 10.4h58.3c6 0 12-4.5 13.6-10.4l12.4-43.3c8.7-2.9 17.1-6.4 25.2-10.5l39.5 21.9c5.3 3 12.7 2 17-2.4l41-41.1a14.6 14.6 0 0 0 2.4-17l-22-39.6c4.2-8 7.7-16.4 10.6-25.1l43.3-12.3a14.6 14.6 0 0 0 10.4-13.6V347c0-6.2-4.4-12.1-10.4-13.8l-43.5-12.4c-2.8-8.7-6.3-17-10.3-25l21.9-39.7a14.7 14.7 0 0 0-2.4-16.9l-41-41.1a14.6 14.6 0 0 0-17-2.4l-39.5 21.9c-8-4.1-16.5-7.5-25.2-10.4l-12.4-43.5a14.6 14.6 0 0 0-13.6-10.2zm10.6 28.4h37L406 222c1.3 4.7 5.2 8.7 10 10 11.9 3.2 23.2 8 33.8 14 4.2 2.4 9.7 2.5 14 .2l36.6-20.5 26 26-20.4 36.6a14.5 14.5 0 0 0 0 14c6.1 10.6 11 22 14.3 34a14 14 0 0 0 9.7 9.9l40.3 11.4v36.9L530 406a14.5 14.5 0 0 0-9.7 9.8 149 149 0 0 1-14.3 34 14.5 14.5 0 0 0 0 14l20.5 36.6-26 26-36.8-20.5a14.5 14.5 0 0 0-13.9.1c-10.6 6-22 11-33.9 14.2a14.5 14.5 0 0 0-9.9 9.8l-11.4 40.3h-37L346.2 530a14.5 14.5 0 0 0-9.9-9.8c-12-3.3-23.3-8.1-33.9-14.2a14.5 14.5 0 0 0-13.9-.1l-36.7 20.4-26-25.9 20.4-36.7c2.3-4.2 2.3-9.7 0-13.9-6-10.6-11-22-14.2-34a14.5 14.5 0 0 0-9.8-9.8l-40.3-11.5v-36.9l40.3-11.4c4.6-1.3 8.5-5.2 9.8-10a149 149 0 0 1 14.2-34c2.3-4.2 2.3-9.6 0-13.9l-20.5-36.5 26-26 36.8 20.4c4.2 2.3 9.7 2.2 14-.2a146 146 0 0 1 33.8-14 15 15 0 0 0 10-10zm18.5 90c-57.4 0-104.2 46.8-104.2 104.2S318.6 480.2 376 480.2c57.4 0 104.2-46.8 104.2-104.2S433.4 271.8 376 271.8zm0 28.4c42 0 75.8 33.8 75.8 75.8S418 451.8 376 451.8 300.2 418 300.2 376s33.8-75.8 75.8-75.8z" class="svelte-9a28q0-ContactCard"></path></svg>\`;
			t = space();
			if (if_block) if_block.c();
			attr(div0, "class", "w-10 h-10 svelte-9a28q0-ContactCard");
			attr(div1, "class", "flex flex-row justify-end svelte-9a28q0-ContactCard");
			attr(div2, "class", "flex flex-col svelte-9a28q0-ContactCard");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div1);
			append(div1, div0);
			append(div2, t);
			if (if_block) if_block.m(div2, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(div0, "click", /*openMenu*/ ctx[3]),
					action_destroyer(clickOutside_action = clickOutside.call(null, div2, {
						enabled: /*open*/ ctx[0],
						cb: /*clickOutside_function*/ ctx[6]
					}))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*open*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*open*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div2, null);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (clickOutside_action && is_function(clickOutside_action.update) && dirty & /*open, submitting*/ 3) clickOutside_action.update.call(null, {
				enabled: /*open*/ ctx[0],
				cb: /*clickOutside_function*/ ctx[6]
			});
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};
}

function clickOutside(node, { enabled: initialEnabled, cb }) {
	const handleOutsideClick = ({ target }) => {
		if (!node.contains(target)) {
			cb();
		}
	};

	function update({ enabled }) {
		if (enabled) {
			window.addEventListener('click', handleOutsideClick);
		} else {
			window.removeEventListener('click', handleOutsideClick);
		}
	}

	update({ enabled: initialEnabled });

	return {
		update,
		destroy() {
			window.removeEventListener('click', handleOutsideClick);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let open = false;
	let submitting;
	let targetPublicKey;

	function openMenu(e) {
		$$invalidate(0, open = !open);
	}

	function handleInput(e) {
		if (e.code !== 'Enter') return;
		$$invalidate(1, submitting = true);
		dispatch('change', { targetPublicKey });
	}

	function input_input_handler() {
		targetPublicKey = this.value;
		$$invalidate(2, targetPublicKey);
	}

	const clickOutside_function = () => {
		$$invalidate(0, open = false);
		$$invalidate(1, submitting = false);
	};

	return [
		open,
		submitting,
		targetPublicKey,
		openMenu,
		handleInput,
		input_input_handler,
		clickOutside_function
	];
}

class ContextMenu extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {}, add_css$1);
	}
}

/* src\\lib\\components\\@peerpiper\\ContactCard.svelte generated by Svelte v3.48.0 */

function add_css(target) {
	append_styles(target, "svelte-111zx6r-ContactCard", ".svelte-111zx6r-ContactCard,.svelte-111zx6r-ContactCard::before,.svelte-111zx6r-ContactCard::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-111zx6r-ContactCard::before,.svelte-111zx6r-ContactCard::after{--tw-content:''}input.svelte-111zx6r-ContactCard{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.svelte-111zx6r-ContactCard:-moz-focusring{outline:auto}.svelte-111zx6r-ContactCard:-moz-ui-invalid{box-shadow:none}.svelte-111zx6r-ContactCard::-webkit-inner-spin-button,.svelte-111zx6r-ContactCard::-webkit-outer-spin-button{height:auto}.svelte-111zx6r-ContactCard::-webkit-search-decoration{-webkit-appearance:none}.svelte-111zx6r-ContactCard::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}blockquote.svelte-111zx6r-ContactCard,p.svelte-111zx6r-ContactCard{margin:0}input.svelte-111zx6r-ContactCard::-moz-placeholder{opacity:1;color:#9CA3AF}input.svelte-111zx6r-ContactCard::placeholder{opacity:1;color:#9CA3AF}.svelte-111zx6r-ContactCard:disabled{cursor:default}img.svelte-111zx6r-ContactCard,svg.svelte-111zx6r-ContactCard{display:block;vertical-align:middle}img.svelte-111zx6r-ContactCard{max-width:100%;height:auto}input.svelte-111zx6r-ContactCard::-moz-placeholder{color:#6B7280;opacity:1}input.svelte-111zx6r-ContactCard::placeholder{color:#6B7280;opacity:1}.svelte-111zx6r-ContactCard::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-111zx6r-ContactCard::-webkit-date-and-time-value{min-height:1.5em}[type='file'].svelte-111zx6r-ContactCard{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type='file'].svelte-111zx6r-ContactCard:focus{outline:1px auto inherit}input[type=file].svelte-111zx6r-ContactCard::-webkit-file-upload-button{color:white;background:#1F2937;border:0;font-weight:500;font-size:0.875rem;cursor:pointer;padding-top:0.625rem;padding-bottom:0.625rem;padding-left:2rem;padding-right:1rem;-webkit-margin-start:-1rem;margin-inline-start:-1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}input[type=file].svelte-111zx6r-ContactCard::file-selector-button{color:white;background:#1F2937;border:0;font-weight:500;font-size:0.875rem;cursor:pointer;padding-top:0.625rem;padding-bottom:0.625rem;padding-left:2rem;padding-right:1rem;-webkit-margin-start:-1rem;margin-inline-start:-1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}input[type=file].svelte-111zx6r-ContactCard::-webkit-file-upload-button:hover{background:#374151}input[type=file].svelte-111zx6r-ContactCard::file-selector-button:hover{background:#374151}.svelte-111zx6r-ContactCard{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-111zx6r-ContactCard,.svelte-111zx6r-ContactCard::before,.svelte-111zx6r-ContactCard::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-111zx6r-ContactCard::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-111zx6r-ContactCard::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.absolute.svelte-111zx6r-ContactCard{position:absolute}.relative.svelte-111zx6r-ContactCard{position:relative}.z-10.svelte-111zx6r-ContactCard{z-index:10}.m-auto.svelte-111zx6r-ContactCard{margin:auto}.my-2.svelte-111zx6r-ContactCard{margin-top:0.5rem;margin-bottom:0.5rem}.mx-auto.svelte-111zx6r-ContactCard{margin-left:auto;margin-right:auto}.mx-2.svelte-111zx6r-ContactCard{margin-left:0.5rem;margin-right:0.5rem}.-mt-20.svelte-111zx6r-ContactCard{margin-top:-5rem}.mt-5.svelte-111zx6r-ContactCard{margin-top:1.25rem}.mb-7.svelte-111zx6r-ContactCard{margin-bottom:1.75rem}.flex.svelte-111zx6r-ContactCard{display:flex}.h-24.svelte-111zx6r-ContactCard{height:6rem}.h-32.svelte-111zx6r-ContactCard{height:8rem}.w-96.svelte-111zx6r-ContactCard{width:24rem}.w-32.svelte-111zx6r-ContactCard{width:8rem}.max-w-lg.svelte-111zx6r-ContactCard{max-width:32rem}.max-w-none.svelte-111zx6r-ContactCard{max-width:none}.flex-none.svelte-111zx6r-ContactCard{flex:none}@-webkit-keyframes svelte-111zx6r-ContactCard-spin{to{transform:rotate(360deg)}}@keyframes svelte-111zx6r-ContactCard-spin{to{transform:rotate(360deg)}}.items-center.svelte-111zx6r-ContactCard{align-items:center}.justify-center.svelte-111zx6r-ContactCard{justify-content:center}.overflow-hidden.svelte-111zx6r-ContactCard{overflow:hidden}.rounded-2xl.svelte-111zx6r-ContactCard{border-radius:1rem}.rounded-full.svelte-111zx6r-ContactCard{border-radius:9999px}.bg-slate-100.svelte-111zx6r-ContactCard{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.bg-white.svelte-111zx6r-ContactCard{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-green-400.svelte-111zx6r-ContactCard{--tw-bg-opacity:1;background-color:rgb(49 196 141 / var(--tw-bg-opacity))}.fill-slate-500.svelte-111zx6r-ContactCard{fill:#64748b}.object-cover.svelte-111zx6r-ContactCard{-o-object-fit:cover;object-fit:cover}.px-3.svelte-111zx6r-ContactCard{padding-left:0.75rem;padding-right:0.75rem}.text-center.svelte-111zx6r-ContactCard{text-align:center}.text-xl.svelte-111zx6r-ContactCard{font-size:1.25rem;line-height:1.75rem}.text-base.svelte-111zx6r-ContactCard{font-size:1rem;line-height:1.5rem}.text-sky-500.svelte-111zx6r-ContactCard{--tw-text-opacity:1;color:rgb(14 165 233 / var(--tw-text-opacity))}.text-white.svelte-111zx6r-ContactCard{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow-xl.svelte-111zx6r-ContactCard{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.drop-shadow-xl.svelte-111zx6r-ContactCard{--tw-drop-shadow:drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
}

const get_phone_slot_changes = dirty => ({});
const get_phone_slot_context = ctx => ({});
const get_email_slot_changes = dirty => ({});
const get_email_slot_context = ctx => ({});
const get_address_slot_changes = dirty => ({});
const get_address_slot_context = ctx => ({});
const get_name_slot_changes = dirty => ({});
const get_name_slot_context = ctx => ({});

// (75:2) {:else}
function create_else_block(ctx) {
	let div;
	let img;
	let img_src_value;

	return {
		c() {
			div = element("div");
			img = element("img");
			attr(img, "class", "rounded-full bg-white absolute max-w-none object-cover svelte-111zx6r-ContactCard");
			if (!src_url_equal(img.src, img_src_value = /*profile*/ ctx[0].avatar)) attr(img, "src", img_src_value);
			attr(img, "alt", "d");
			set_style(img, "width", "100%");
			set_style(img, "height", "100%");
			set_style(img, "transform-origin", "50% 50% 0px");
			attr(div, "class", "relative z-10 overflow-hidden flex-none mx-auto w-32 h-32 drop-shadow-xl svelte-111zx6r-ContactCard");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, img);
		},
		p(ctx, dirty) {
			if (dirty & /*profile*/ 1 && !src_url_equal(img.src, img_src_value = /*profile*/ ctx[0].avatar)) {
				attr(img, "src", img_src_value);
			}
		},
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (64:2) {#if !profile.avatar}
function create_if_block(ctx) {
	let svg;
	let path;

	return {
		c() {
			svg = svg_element("svg");
			path = svg_element("path");
			attr(path, "d", "M105 2a129 129 0 0 0 1 253c11 1 33 2 44 0 26-5 48-16 67-35a126 126 0 0 0 38-114A129 129 0 0 0 150 2c-10-2-35-2-45 0zm31 30c23 4 41 24 45 51l3 9 2 6c0 4-1 6-5 14l-7 15c-3 8-11 19-16 24s-5 7-2 13c5 10 13 16 35 23l16 5-3 4a117 117 0 0 1-151 0l-4-4 4-1 17-6c19-6 27-13 31-25l2-5-4-4c-5-6-12-16-15-23l-7-11c-4-6-7-14-7-18 0-3 3-9 5-9l1-3 2-11c6-26 26-43 50-45l8 1z");
			attr(path, "class", "svelte-111zx6r-ContactCard");
			attr(svg, "class", "rounded-full bg-white shadow-xl drop-shadow-xl svelte-111zx6r-ContactCard");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "version", "1.0");
			attr(svg, "viewBox", "0 0 256 256");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

// (87:20)      
function fallback_block_4(ctx) {
	let editable0;
	let updating_item;
	let t;
	let editable1;
	let updating_item_1;
	let current;

	function editable0_item_binding(value) {
		/*editable0_item_binding*/ ctx[8](value);
	}

	let editable0_props = {};

	if (/*profile*/ ctx[0].firstName !== void 0) {
		editable0_props.item = /*profile*/ ctx[0].firstName;
	}

	editable0 = new Editable({ props: editable0_props });
	binding_callbacks.push(() => bind(editable0, 'item', editable0_item_binding));

	function editable1_item_binding(value) {
		/*editable1_item_binding*/ ctx[9](value);
	}

	let editable1_props = {};

	if (/*profile*/ ctx[0].lastName !== void 0) {
		editable1_props.item = /*profile*/ ctx[0].lastName;
	}

	editable1 = new Editable({ props: editable1_props });
	binding_callbacks.push(() => bind(editable1, 'item', editable1_item_binding));

	return {
		c() {
			create_component(editable0.$$.fragment);
			t = space();
			create_component(editable1.$$.fragment);
		},
		m(target, anchor) {
			mount_component(editable0, target, anchor);
			insert(target, t, anchor);
			mount_component(editable1, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const editable0_changes = {};

			if (!updating_item && dirty & /*profile*/ 1) {
				updating_item = true;
				editable0_changes.item = /*profile*/ ctx[0].firstName;
				add_flush_callback(() => updating_item = false);
			}

			editable0.$set(editable0_changes);
			const editable1_changes = {};

			if (!updating_item_1 && dirty & /*profile*/ 1) {
				updating_item_1 = true;
				editable1_changes.item = /*profile*/ ctx[0].lastName;
				add_flush_callback(() => updating_item_1 = false);
			}

			editable1.$set(editable1_changes);
		},
		i(local) {
			if (current) return;
			transition_in(editable0.$$.fragment, local);
			transition_in(editable1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(editable0.$$.fragment, local);
			transition_out(editable1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(editable0, detaching);
			if (detaching) detach(t);
			destroy_component(editable1, detaching);
		}
	};
}

// (97:23)      
function fallback_block_3(ctx) {
	let editable;
	let updating_item;
	let current;

	function editable_item_binding(value) {
		/*editable_item_binding*/ ctx[10](value);
	}

	let editable_props = {};

	if (/*profile*/ ctx[0].address !== void 0) {
		editable_props.item = /*profile*/ ctx[0].address;
	}

	editable = new Editable({ props: editable_props });
	binding_callbacks.push(() => bind(editable, 'item', editable_item_binding));

	return {
		c() {
			create_component(editable.$$.fragment);
		},
		m(target, anchor) {
			mount_component(editable, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const editable_changes = {};

			if (!updating_item && dirty & /*profile*/ 1) {
				updating_item = true;
				editable_changes.item = /*profile*/ ctx[0].address;
				add_flush_callback(() => updating_item = false);
			}

			editable.$set(editable_changes);
		},
		i(local) {
			if (current) return;
			transition_in(editable.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(editable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(editable, detaching);
		}
	};
}

// (96:1) <Content name={'address'}>
function create_default_slot_2(ctx) {
	let current;
	const address_slot_template = /*#slots*/ ctx[3].address;
	const address_slot = create_slot(address_slot_template, ctx, /*$$scope*/ ctx[14], get_address_slot_context);
	const address_slot_or_fallback = address_slot || fallback_block_3(ctx);

	return {
		c() {
			if (address_slot_or_fallback) address_slot_or_fallback.c();
		},
		m(target, anchor) {
			if (address_slot_or_fallback) {
				address_slot_or_fallback.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (address_slot) {
				if (address_slot.p && (!current || dirty & /*$$scope*/ 16384)) {
					update_slot_base(
						address_slot,
						address_slot_template,
						ctx,
						/*$$scope*/ ctx[14],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[14])
						: get_slot_changes(address_slot_template, /*$$scope*/ ctx[14], dirty, get_address_slot_changes),
						get_address_slot_context
					);
				}
			} else {
				if (address_slot_or_fallback && address_slot_or_fallback.p && (!current || dirty & /*profile*/ 1)) {
					address_slot_or_fallback.p(ctx, !current ? -1 : dirty);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(address_slot_or_fallback, local);
			current = true;
		},
		o(local) {
			transition_out(address_slot_or_fallback, local);
			current = false;
		},
		d(detaching) {
			if (address_slot_or_fallback) address_slot_or_fallback.d(detaching);
		}
	};
}

// (103:21)      
function fallback_block_2(ctx) {
	let editable;
	let updating_item;
	let current;

	function editable_item_binding_1(value) {
		/*editable_item_binding_1*/ ctx[11](value);
	}

	let editable_props = {};

	if (/*profile*/ ctx[0].email !== void 0) {
		editable_props.item = /*profile*/ ctx[0].email;
	}

	editable = new Editable({ props: editable_props });
	binding_callbacks.push(() => bind(editable, 'item', editable_item_binding_1));

	return {
		c() {
			create_component(editable.$$.fragment);
		},
		m(target, anchor) {
			mount_component(editable, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const editable_changes = {};

			if (!updating_item && dirty & /*profile*/ 1) {
				updating_item = true;
				editable_changes.item = /*profile*/ ctx[0].email;
				add_flush_callback(() => updating_item = false);
			}

			editable.$set(editable_changes);
		},
		i(local) {
			if (current) return;
			transition_in(editable.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(editable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(editable, detaching);
		}
	};
}

// (102:1) <Content name={'email'}>
function create_default_slot_1(ctx) {
	let current;
	const email_slot_template = /*#slots*/ ctx[3].email;
	const email_slot = create_slot(email_slot_template, ctx, /*$$scope*/ ctx[14], get_email_slot_context);
	const email_slot_or_fallback = email_slot || fallback_block_2(ctx);

	return {
		c() {
			if (email_slot_or_fallback) email_slot_or_fallback.c();
		},
		m(target, anchor) {
			if (email_slot_or_fallback) {
				email_slot_or_fallback.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (email_slot) {
				if (email_slot.p && (!current || dirty & /*$$scope*/ 16384)) {
					update_slot_base(
						email_slot,
						email_slot_template,
						ctx,
						/*$$scope*/ ctx[14],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[14])
						: get_slot_changes(email_slot_template, /*$$scope*/ ctx[14], dirty, get_email_slot_changes),
						get_email_slot_context
					);
				}
			} else {
				if (email_slot_or_fallback && email_slot_or_fallback.p && (!current || dirty & /*profile*/ 1)) {
					email_slot_or_fallback.p(ctx, !current ? -1 : dirty);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(email_slot_or_fallback, local);
			current = true;
		},
		o(local) {
			transition_out(email_slot_or_fallback, local);
			current = false;
		},
		d(detaching) {
			if (email_slot_or_fallback) email_slot_or_fallback.d(detaching);
		}
	};
}

// (109:21)      
function fallback_block_1(ctx) {
	let editable;
	let updating_item;
	let current;

	function editable_item_binding_2(value) {
		/*editable_item_binding_2*/ ctx[12](value);
	}

	let editable_props = {};

	if (/*profile*/ ctx[0].phone !== void 0) {
		editable_props.item = /*profile*/ ctx[0].phone;
	}

	editable = new Editable({ props: editable_props });
	binding_callbacks.push(() => bind(editable, 'item', editable_item_binding_2));

	return {
		c() {
			create_component(editable.$$.fragment);
		},
		m(target, anchor) {
			mount_component(editable, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const editable_changes = {};

			if (!updating_item && dirty & /*profile*/ 1) {
				updating_item = true;
				editable_changes.item = /*profile*/ ctx[0].phone;
				add_flush_callback(() => updating_item = false);
			}

			editable.$set(editable_changes);
		},
		i(local) {
			if (current) return;
			transition_in(editable.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(editable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(editable, detaching);
		}
	};
}

// (108:1) <Content name={'phone'}>
function create_default_slot(ctx) {
	let current;
	const phone_slot_template = /*#slots*/ ctx[3].phone;
	const phone_slot = create_slot(phone_slot_template, ctx, /*$$scope*/ ctx[14], get_phone_slot_context);
	const phone_slot_or_fallback = phone_slot || fallback_block_1(ctx);

	return {
		c() {
			if (phone_slot_or_fallback) phone_slot_or_fallback.c();
		},
		m(target, anchor) {
			if (phone_slot_or_fallback) {
				phone_slot_or_fallback.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (phone_slot) {
				if (phone_slot.p && (!current || dirty & /*$$scope*/ 16384)) {
					update_slot_base(
						phone_slot,
						phone_slot_template,
						ctx,
						/*$$scope*/ ctx[14],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[14])
						: get_slot_changes(phone_slot_template, /*$$scope*/ ctx[14], dirty, get_phone_slot_changes),
						get_phone_slot_context
					);
				}
			} else {
				if (phone_slot_or_fallback && phone_slot_or_fallback.p && (!current || dirty & /*profile*/ 1)) {
					phone_slot_or_fallback.p(ctx, !current ? -1 : dirty);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(phone_slot_or_fallback, local);
			current = true;
		},
		o(local) {
			transition_out(phone_slot_or_fallback, local);
			current = false;
		},
		d(detaching) {
			if (phone_slot_or_fallback) phone_slot_or_fallback.d(detaching);
		}
	};
}

// (117:9)       
function fallback_block(ctx) {
	let span;
	let editable;
	let updating_item;
	let current;

	function editable_item_binding_3(value) {
		/*editable_item_binding_3*/ ctx[13](value);
	}

	let editable_props = { options: { singleLine: false } };

	if (/*profile*/ ctx[0].notes !== void 0) {
		editable_props.item = /*profile*/ ctx[0].notes;
	}

	editable = new Editable({ props: editable_props });
	binding_callbacks.push(() => bind(editable, 'item', editable_item_binding_3));

	return {
		c() {
			span = element("span");
			create_component(editable.$$.fragment);
			attr(span, "class", "text-sky-500 svelte-111zx6r-ContactCard");
		},
		m(target, anchor) {
			insert(target, span, anchor);
			mount_component(editable, span, null);
			current = true;
		},
		p(ctx, dirty) {
			const editable_changes = {};

			if (!updating_item && dirty & /*profile*/ 1) {
				updating_item = true;
				editable_changes.item = /*profile*/ ctx[0].notes;
				add_flush_callback(() => updating_item = false);
			}

			editable.$set(editable_changes);
		},
		i(local) {
			if (current) return;
			transition_in(editable.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(editable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(span);
			destroy_component(editable);
		}
	};
}

function create_fragment(ctx) {
	let div3;
	let div0;
	let contextmenu;
	let t0;
	let input;
	let t1;
	let div1;
	let t2;
	let div2;
	let t3;
	let content0;
	let t4;
	let content1;
	let t5;
	let content2;
	let t6;
	let blockquote;
	let p;
	let t7;
	let footer;
	let current;
	let mounted;
	let dispose;
	contextmenu = new ContextMenu({});
	contextmenu.$on("change", /*change_handler*/ ctx[4]);

	function select_block_type(ctx, dirty) {
		if (!/*profile*/ ctx[0].avatar) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);
	const name_slot_template = /*#slots*/ ctx[3].name;
	const name_slot = create_slot(name_slot_template, ctx, /*$$scope*/ ctx[14], get_name_slot_context);
	const name_slot_or_fallback = name_slot || fallback_block_4(ctx);

	content0 = new Content({
			props: {
				name: 'address',
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	content1 = new Content({
			props: {
				name: 'email',
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	content2 = new Content({
			props: {
				name: 'phone',
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], null);
	const default_slot_or_fallback = default_slot || fallback_block(ctx);

	return {
		c() {
			div3 = element("div");
			div0 = element("div");
			create_component(contextmenu.$$.fragment);
			t0 = space();
			input = element("input");
			t1 = space();
			div1 = element("div");
			if_block.c();
			t2 = space();
			div2 = element("div");
			if (name_slot_or_fallback) name_slot_or_fallback.c();
			t3 = space();
			create_component(content0.$$.fragment);
			t4 = space();
			create_component(content1.$$.fragment);
			t5 = space();
			create_component(content2.$$.fragment);
			t6 = space();
			blockquote = element("blockquote");
			p = element("p");
			if (default_slot_or_fallback) default_slot_or_fallback.c();
			t7 = space();
			footer = element("footer");
			footer.textContent = "Powered by PeerPiper";
			attr(div0, "class", "h-24 bg-white svelte-111zx6r-ContactCard");
			set_style(input, "display", "none");
			attr(input, "type", "file");
			attr(input, "accept", ".jpg, .jpeg, .png");
			attr(input, "class", "svelte-111zx6r-ContactCard");
			attr(div1, "class", "-mt-20 h-32 flex justify-center svelte-111zx6r-ContactCard");
			attr(div2, "class", "mt-5 mb-7 px-3 text-center text-xl svelte-111zx6r-ContactCard");
			attr(p, "class", "mx-2 mb-7 text-center text-base svelte-111zx6r-ContactCard");
			attr(blockquote, "class", "svelte-111zx6r-ContactCard");
			attr(footer, "class", "text-center bg-green-400 text-white svelte-111zx6r-ContactCard");
			attr(div3, "class", "m-auto fill-slate-500 my-2 w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-100 shadow-xl svelte-111zx6r-ContactCard");
		},
		m(target, anchor) {
			insert(target, div3, anchor);
			append(div3, div0);
			mount_component(contextmenu, div0, null);
			append(div3, t0);
			append(div3, input);
			/*input_binding*/ ctx[6](input);
			append(div3, t1);
			append(div3, div1);
			if_block.m(div1, null);
			append(div3, t2);
			append(div3, div2);

			if (name_slot_or_fallback) {
				name_slot_or_fallback.m(div2, null);
			}

			append(div3, t3);
			mount_component(content0, div3, null);
			append(div3, t4);
			mount_component(content1, div3, null);
			append(div3, t5);
			mount_component(content2, div3, null);
			append(div3, t6);
			append(div3, blockquote);
			append(blockquote, p);

			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(p, null);
			}

			append(div3, t7);
			append(div3, footer);
			current = true;

			if (!mounted) {
				dispose = [
					listen(input, "change", /*change_handler_1*/ ctx[5]),
					listen(div1, "click", /*click_handler*/ ctx[7])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div1, null);
				}
			}

			if (name_slot) {
				if (name_slot.p && (!current || dirty & /*$$scope*/ 16384)) {
					update_slot_base(
						name_slot,
						name_slot_template,
						ctx,
						/*$$scope*/ ctx[14],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[14])
						: get_slot_changes(name_slot_template, /*$$scope*/ ctx[14], dirty, get_name_slot_changes),
						get_name_slot_context
					);
				}
			} else {
				if (name_slot_or_fallback && name_slot_or_fallback.p && (!current || dirty & /*profile*/ 1)) {
					name_slot_or_fallback.p(ctx, !current ? -1 : dirty);
				}
			}

			const content0_changes = {};

			if (dirty & /*$$scope, profile*/ 16385) {
				content0_changes.$$scope = { dirty, ctx };
			}

			content0.$set(content0_changes);
			const content1_changes = {};

			if (dirty & /*$$scope, profile*/ 16385) {
				content1_changes.$$scope = { dirty, ctx };
			}

			content1.$set(content1_changes);
			const content2_changes = {};

			if (dirty & /*$$scope, profile*/ 16385) {
				content2_changes.$$scope = { dirty, ctx };
			}

			content2.$set(content2_changes);

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16384)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[14],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[14])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[14], dirty, null),
						null
					);
				}
			} else {
				if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*profile*/ 1)) {
					default_slot_or_fallback.p(ctx, !current ? -1 : dirty);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(contextmenu.$$.fragment, local);
			transition_in(name_slot_or_fallback, local);
			transition_in(content0.$$.fragment, local);
			transition_in(content1.$$.fragment, local);
			transition_in(content2.$$.fragment, local);
			transition_in(default_slot_or_fallback, local);
			current = true;
		},
		o(local) {
			transition_out(contextmenu.$$.fragment, local);
			transition_out(name_slot_or_fallback, local);
			transition_out(content0.$$.fragment, local);
			transition_out(content1.$$.fragment, local);
			transition_out(content2.$$.fragment, local);
			transition_out(default_slot_or_fallback, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div3);
			destroy_component(contextmenu);
			/*input_binding*/ ctx[6](null);
			if_block.d();
			if (name_slot_or_fallback) name_slot_or_fallback.d(detaching);
			destroy_component(content0);
			destroy_component(content1);
			destroy_component(content2);
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	const dispatch = createEventDispatcher();

	let defaultProfile = {
		firstName: 'FirstName',
		lastName: 'Lastname',
		address: 'Unknown address',
		email: 'Unknown email',
		phone: 'No phone',
		notes: 'No notes',
		avatar: null
	};

	let { profile = defaultProfile } = $$props;
	let fileinput;

	const onFileSelected = e => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);

		reader.onload = e => {
			$$invalidate(0, profile.avatar = e.target.result, profile);
		};
	};

	function change_handler(event) {
		bubble.call(this, $$self, event);
	}

	const change_handler_1 = e => onFileSelected(e);

	function input_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			fileinput = $$value;
			$$invalidate(1, fileinput);
		});
	}

	const click_handler = () => {
		fileinput.click();
	};

	function editable0_item_binding(value) {
		if ($$self.$$.not_equal(profile.firstName, value)) {
			profile.firstName = value;
			($$invalidate(0, profile), $$invalidate(16, defaultProfile));
		}
	}

	function editable1_item_binding(value) {
		if ($$self.$$.not_equal(profile.lastName, value)) {
			profile.lastName = value;
			($$invalidate(0, profile), $$invalidate(16, defaultProfile));
		}
	}

	function editable_item_binding(value) {
		if ($$self.$$.not_equal(profile.address, value)) {
			profile.address = value;
			($$invalidate(0, profile), $$invalidate(16, defaultProfile));
		}
	}

	function editable_item_binding_1(value) {
		if ($$self.$$.not_equal(profile.email, value)) {
			profile.email = value;
			($$invalidate(0, profile), $$invalidate(16, defaultProfile));
		}
	}

	function editable_item_binding_2(value) {
		if ($$self.$$.not_equal(profile.phone, value)) {
			profile.phone = value;
			($$invalidate(0, profile), $$invalidate(16, defaultProfile));
		}
	}

	function editable_item_binding_3(value) {
		if ($$self.$$.not_equal(profile.notes, value)) {
			profile.notes = value;
			($$invalidate(0, profile), $$invalidate(16, defaultProfile));
		}
	}

	$$self.$$set = $$props => {
		if ('profile' in $$props) $$invalidate(0, profile = $$props.profile);
		if ('$$scope' in $$props) $$invalidate(14, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*profile*/ 1) {
			// this fires when todos change; let's emit an event to update any listeners consuming this component
			if (profile) {
				$$invalidate(0, profile = Object.assign({}, defaultProfile, profile));
				dispatch('change', { profile });
			}
		}
	};

	return [
		profile,
		fileinput,
		onFileSelected,
		slots,
		change_handler,
		change_handler_1,
		input_binding,
		click_handler,
		editable0_item_binding,
		editable1_item_binding,
		editable_item_binding,
		editable_item_binding_1,
		editable_item_binding_2,
		editable_item_binding_3,
		$$scope
	];
}

class ContactCard extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { profile: 0 }, add_css);
	}

	get profile() {
		return this.$$.ctx[0];
	}

	set profile(profile) {
		this.$$set({ profile });
		flush();
	}
}

export { ContactCard as default };
`;
var ContactList = `function noop() { }
const identity = x => x;
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function element(name) {
    return document.createElement(name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function children(element) {
    return Array.from(element.childNodes);
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}

// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + \`%{\${fn(t, 1 - t)}}\\n\`;
    }
    const rule = keyframes + \`100% {\${fn(b, 1 - b)}}\\n}\`;
    const name = \`__svelte_\${hash(rule)}_\${uid}\`;
    const doc = get_root_for_style(node);
    const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(\`@keyframes \${name} \${rule}\`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = \`\${animation ? \`\${animation}, \` : ''}\${name} \${duration}ms linear \${delay}ms 1 both\`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        managed_styles.forEach(info => {
            const { stylesheet } = info;
            let i = stylesheet.cssRules.length;
            while (i--)
                stylesheet.deleteRule(i);
            info.rules = {};
        });
        managed_styles.clear();
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = \`\${transform} translate(\${a.left - b.left}px, \${a.top - b.top}px)\`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, { cancelable });
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // \`false\` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}
function quintOut(t) {
    return --t * t * t * t * t + 1;
}

function flip(node, { from, to }, params = {}) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const [ox, oy] = style.transformOrigin.split(' ').map(parseFloat);
    const dx = (from.left + from.width * ox / to.width) - (to.left + ox);
    const dy = (from.top + from.height * oy / to.height) - (to.top + oy);
    const { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params;
    return {
        delay,
        duration: is_function(duration) ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
        easing,
        css: (t, u) => {
            const x = u * dx;
            const y = u * dy;
            const sx = t + u * from.width / to.width;
            const sy = t + u * from.height / to.height;
            return \`transform: \${transform} translate(\${x}px, \${y}px) scale(\${sx}, \${sy});\`;
        }
    };
}

/* src\\lib\\components\\@peerpiper\\ContactList.svelte generated by Svelte v3.48.0 */

function add_css(target) {
	append_styles(target, "svelte-umbyh9-ContactList", ".svelte-umbyh9-ContactList,.svelte-umbyh9-ContactList::before,.svelte-umbyh9-ContactList::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-umbyh9-ContactList::before,.svelte-umbyh9-ContactList::after{--tw-content:''}button.svelte-umbyh9-ContactList,input.svelte-umbyh9-ContactList{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-umbyh9-ContactList{text-transform:none}button.svelte-umbyh9-ContactList{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-umbyh9-ContactList:-moz-focusring{outline:auto}.svelte-umbyh9-ContactList:-moz-ui-invalid{box-shadow:none}.svelte-umbyh9-ContactList::-webkit-inner-spin-button,.svelte-umbyh9-ContactList::-webkit-outer-spin-button{height:auto}.svelte-umbyh9-ContactList::-webkit-search-decoration{-webkit-appearance:none}.svelte-umbyh9-ContactList::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-umbyh9-ContactList::-moz-placeholder{opacity:1;color:#9CA3AF}input.svelte-umbyh9-ContactList::placeholder{opacity:1;color:#9CA3AF}button.svelte-umbyh9-ContactList{cursor:pointer}.svelte-umbyh9-ContactList:disabled{cursor:default}[type='text'].svelte-umbyh9-ContactList{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6B7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}[type='text'].svelte-umbyh9-ContactList:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#1C64F2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#1C64F2}input.svelte-umbyh9-ContactList::-moz-placeholder{color:#6B7280;opacity:1}input.svelte-umbyh9-ContactList::placeholder{color:#6B7280;opacity:1}.svelte-umbyh9-ContactList::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-umbyh9-ContactList::-webkit-date-and-time-value{min-height:1.5em}.svelte-umbyh9-ContactList{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-umbyh9-ContactList,.svelte-umbyh9-ContactList::before,.svelte-umbyh9-ContactList::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-umbyh9-ContactList::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-umbyh9-ContactList::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.my-4.svelte-umbyh9-ContactList{margin-top:1rem;margin-bottom:1rem}.mx-4.svelte-umbyh9-ContactList{margin-left:1rem;margin-right:1rem}.ml-4.svelte-umbyh9-ContactList{margin-left:1rem}.mr-4.svelte-umbyh9-ContactList{margin-right:1rem}.flex.svelte-umbyh9-ContactList{display:flex}.w-96.svelte-umbyh9-ContactList{width:24rem}.w-full.svelte-umbyh9-ContactList{width:100%}.flex-1.svelte-umbyh9-ContactList{flex:1 1 0%}@-webkit-keyframes svelte-umbyh9-ContactList-spin{to{transform:rotate(360deg)}}@keyframes svelte-umbyh9-ContactList-spin{to{transform:rotate(360deg)}}.flex-row.svelte-umbyh9-ContactList{flex-direction:row}.items-center.svelte-umbyh9-ContactList{align-items:center}.rounded.svelte-umbyh9-ContactList{border-radius:0.25rem}.border-r-gray-400.svelte-umbyh9-ContactList{--tw-border-opacity:1;border-right-color:rgb(156 163 175 / var(--tw-border-opacity))}.bg-gray-50.svelte-umbyh9-ContactList{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-100.svelte-umbyh9-ContactList{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-blue-500.svelte-umbyh9-ContactList{--tw-bg-opacity:1;background-color:rgb(63 131 248 / var(--tw-bg-opacity))}.p-4.svelte-umbyh9-ContactList{padding:1rem}.py-2.svelte-umbyh9-ContactList{padding-top:0.5rem;padding-bottom:0.5rem}.px-4.svelte-umbyh9-ContactList{padding-left:1rem;padding-right:1rem}.font-sans.svelte-umbyh9-ContactList{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.font-mono.svelte-umbyh9-ContactList{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\"Liberation Mono\\", \\"Courier New\\", monospace}.font-bold.svelte-umbyh9-ContactList{font-weight:700}.text-white.svelte-umbyh9-ContactList{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow-xl.svelte-umbyh9-ContactList{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.hover\\\\:bg-blue-700.svelte-umbyh9-ContactList:hover{--tw-bg-opacity:1;background-color:rgb(26 86 219 / var(--tw-bg-opacity))}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (45:1) {#each contacts as contact (contact)}
function create_each_block(key_1, ctx) {
	let div2;
	let div0;
	let t0_value = /*contact*/ ctx[8].handle + "";
	let t0;
	let t1;
	let div1;
	let t2_value = /*contact*/ ctx[8].pubkey + "";
	let t2;
	let t3;
	let rect;
	let stop_animation = noop;

	return {
		key: key_1,
		first: null,
		c() {
			div2 = element("div");
			div0 = element("div");
			t0 = text(t0_value);
			t1 = space();
			div1 = element("div");
			t2 = text(t2_value);
			t3 = space();
			attr(div0, "class", "flex-1 font-sans bg-gray-100 ml-4 p-4 border-r-gray-400 svelte-umbyh9-ContactList");
			attr(div1, "class", "flex-1 font-mono bg-gray-100 mr-4 p-4  svelte-umbyh9-ContactList");
			attr(div2, "class", "flex flex-row mx-4 bg-gray-50 rounded p-4  svelte-umbyh9-ContactList");
			this.first = div2;
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div0, t0);
			append(div2, t1);
			append(div2, div1);
			append(div1, t2);
			append(div2, t3);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*contacts*/ 1 && t0_value !== (t0_value = /*contact*/ ctx[8].handle + "")) set_data(t0, t0_value);
			if (dirty & /*contacts*/ 1 && t2_value !== (t2_value = /*contact*/ ctx[8].pubkey + "")) set_data(t2, t2_value);
		},
		r() {
			rect = div2.getBoundingClientRect();
		},
		f() {
			fix_position(div2);
			stop_animation();
		},
		a() {
			stop_animation();

			stop_animation = create_animation(div2, rect, flip, {
				delay: 250,
				duration: 750,
				easing: quintOut
			});
		},
		d(detaching) {
			if (detaching) detach(div2);
		}
	};
}

function create_fragment(ctx) {
	let div4;
	let div3;
	let div0;
	let input0;
	let t0;
	let div1;
	let input1;
	let t1;
	let div2;
	let button;
	let t3;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let mounted;
	let dispose;
	let each_value = /*contacts*/ ctx[0];
	const get_key = ctx => /*contact*/ ctx[8];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div4 = element("div");
			div3 = element("div");
			div0 = element("div");
			input0 = element("input");
			t0 = space();
			div1 = element("div");
			input1 = element("input");
			t1 = space();
			div2 = element("div");
			button = element("button");
			button.textContent = "Add";
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(input0, "type", "text");
			attr(input0, "class", "w-full svelte-umbyh9-ContactList");
			attr(div0, "class", "flex-1 font-sans bg-gray-100 ml-4 p-4 border-r-gray-400 svelte-umbyh9-ContactList");
			attr(input1, "type", "text");
			attr(input1, "class", "w-full svelte-umbyh9-ContactList");
			attr(div1, "class", "flex-1 font-mono bg-gray-100 mr-4 p-4  svelte-umbyh9-ContactList");
			attr(button, "class", "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-xl svelte-umbyh9-ContactList");
			attr(div2, "class", "svelte-umbyh9-ContactList");
			attr(div3, "class", "flex flex-row mx-4 bg-gray-50 rounded p-4 items-center svelte-umbyh9-ContactList");
			attr(div4, "class", "my-4 w-96 svelte-umbyh9-ContactList");
		},
		m(target, anchor) {
			insert(target, div4, anchor);
			append(div4, div3);
			append(div3, div0);
			append(div0, input0);
			set_input_value(input0, /*handle*/ ctx[1]);
			append(div3, t0);
			append(div3, div1);
			append(div1, input1);
			set_input_value(input1, /*pubkey*/ ctx[2]);
			append(div3, t1);
			append(div3, div2);
			append(div2, button);
			append(div4, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div4, null);
			}

			if (!mounted) {
				dispose = [
					listen(input0, "input", /*input0_input_handler*/ ctx[3]),
					listen(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen(button, "click", /*click_handler*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*handle*/ 2 && input0.value !== /*handle*/ ctx[1]) {
				set_input_value(input0, /*handle*/ ctx[1]);
			}

			if (dirty & /*pubkey*/ 4 && input1.value !== /*pubkey*/ ctx[2]) {
				set_input_value(input1, /*pubkey*/ ctx[2]);
			}

			if (dirty & /*contacts*/ 1) {
				each_value = /*contacts*/ ctx[0];
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div4, fix_and_destroy_block, create_each_block, null, get_each_context);
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div4);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let handle, pubkey;

	let defaultContact = {
		pubkey: 'GnHDprayyzahnWjDqvQ9AGWsmjojWymVNztGHNr4S7an',
		handle: 'douganderson444'
	};

	let { contacts = [defaultContact] } = $$props;

	function input0_input_handler() {
		handle = this.value;
		$$invalidate(1, handle);
	}

	function input1_input_handler() {
		pubkey = this.value;
		$$invalidate(2, pubkey);
	}

	const click_handler = () => {
		if (!handle || !pubkey) return;
		$$invalidate(0, contacts = [{ handle, pubkey }, ...contacts]);
	};

	$$self.$$set = $$props => {
		if ('contacts' in $$props) $$invalidate(0, contacts = $$props.contacts);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*contacts*/ 1) {
			// this fires when todos change; let's emit an event to update any listeners consuming this component
			if (contacts) {
				console.log('Chg', { contacts });
				dispatch('change', { contacts });
				dispatch('loadContacts', contacts);
				console.log('loadedContacts');
			}
		}
	};

	return [
		contacts,
		handle,
		pubkey,
		input0_input_handler,
		input1_input_handler,
		click_handler
	];
}

class ContactList extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { contacts: 0 }, add_css);
	}

	get contacts() {
		return this.$$.ctx[0];
	}

	set contacts(contacts) {
		this.$$set({ contacts });
		flush();
	}
}

export { ContactList as default };
`;
const get_default_slot_changes$1 = (dirty) => ({ params: dirty & 1 });
const get_default_slot_context$1 = (ctx) => ({ params: ctx[0] });
function create_if_block$2(ctx) {
  let current;
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], get_default_slot_context$1);
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
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, get_default_slot_changes$1), get_default_slot_context$1);
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
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block$2(ctx);
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { tagNodes } = $$props;
  let { decryptTagNode } = $$props;
  let params;
  if (tagNodes) {
    const promises = Object.keys(tagNodes).map(async (tag) => {
      if (tag === "prev")
        return null;
      const decrypted = await decryptTagNode(tag);
      if (!decrypted.hasOwnProperty("esModule") || !decrypted.hasOwnProperty("props"))
        return null;
      return [
        [tag],
        {
          esModule: decrypted.esModule,
          props: decrypted.props
        }
      ];
    });
    Promise.all(promises).then((result) => {
      console.log({ result }, Object.fromEntries(result.filter((r) => r)));
      $$invalidate(0, params = Object.fromEntries(result.filter((r) => r)));
    });
  } else {
    params = {
      Contacts: { esModule: ContactList },
      Profile: { esModule: ContactCard }
    };
  }
  $$self.$$set = ($$props2) => {
    if ("tagNodes" in $$props2)
      $$invalidate(1, tagNodes = $$props2.tagNodes);
    if ("decryptTagNode" in $$props2)
      $$invalidate(2, decryptTagNode = $$props2.decryptTagNode);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [params, tagNodes, decryptTagNode, $$scope, slots];
}
class TagConfig extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, { tagNodes: 1, decryptTagNode: 2 });
  }
}
var TagManager = `function noop() { }
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for (let i = 0; i < length; i++) {
            dirty[i] = -1;
        }
        return dirty;
    }
    return -1;
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node)
        return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) {
        return root;
    }
    return node.ownerDocument;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function children(element) {
    return Array.from(element.childNodes);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}
class HtmlTag {
    constructor(is_svg = false) {
        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
    }
    c(html) {
        this.h(html);
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            if (this.is_svg)
                this.e = svg_element(target.nodeName);
            else
                this.e = element(target.nodeName);
            this.t = target;
            this.c(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(this.t, this.n[i], anchor);
        }
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable = false } = {}) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, { cancelable });
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while (flushidx < dirty_components.length) {
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // \`false\` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

/* src\\lib\\components\\@peerpiper\\OutterWraper.svelte generated by Svelte v3.48.0 */

function add_css$1(target) {
	append_styles(target, "svelte-q5cgiz-TagManager", "@tailwind base;@tailwind components;@tailwind utilities;.svelte-q5cgiz-TagManager,.svelte-q5cgiz-TagManager::before,.svelte-q5cgiz-TagManager::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-q5cgiz-TagManager::before,.svelte-q5cgiz-TagManager::after{--tw-content:''}.svelte-q5cgiz-TagManager:-moz-focusring{outline:auto}.svelte-q5cgiz-TagManager:-moz-ui-invalid{box-shadow:none}.svelte-q5cgiz-TagManager::-webkit-inner-spin-button,.svelte-q5cgiz-TagManager::-webkit-outer-spin-button{height:auto}.svelte-q5cgiz-TagManager::-webkit-search-decoration{-webkit-appearance:none}.svelte-q5cgiz-TagManager::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-q5cgiz-TagManager:disabled{cursor:default}.svelte-q5cgiz-TagManager::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-q5cgiz-TagManager::-webkit-date-and-time-value{min-height:1.5em}.svelte-q5cgiz-TagManager{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-q5cgiz-TagManager,.svelte-q5cgiz-TagManager::before,.svelte-q5cgiz-TagManager::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-q5cgiz-TagManager::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-q5cgiz-TagManager::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.flex.svelte-q5cgiz-TagManager{display:flex}@-webkit-keyframes svelte-q5cgiz-TagManager-spin{to{transform:rotate(360deg)}}@keyframes svelte-q5cgiz-TagManager-spin{to{transform:rotate(360deg)}}.flex-col.svelte-q5cgiz-TagManager{flex-direction:column}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
}

function create_fragment$3(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			attr(div, "class", "flex flex-col svelte-q5cgiz-TagManager");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[0],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[0])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[0], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class OutterWraper extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {}, add_css$1);
	}
}

/* src\\lib\\components\\@peerpiper\\Wrapper.svelte generated by Svelte v3.48.0 */

function add_css(target) {
	append_styles(target, "svelte-q5cgiz-TagManager", "@tailwind base;@tailwind components;@tailwind utilities;.svelte-q5cgiz-TagManager,.svelte-q5cgiz-TagManager::before,.svelte-q5cgiz-TagManager::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-q5cgiz-TagManager::before,.svelte-q5cgiz-TagManager::after{--tw-content:''}.svelte-q5cgiz-TagManager:-moz-focusring{outline:auto}.svelte-q5cgiz-TagManager:-moz-ui-invalid{box-shadow:none}.svelte-q5cgiz-TagManager::-webkit-inner-spin-button,.svelte-q5cgiz-TagManager::-webkit-outer-spin-button{height:auto}.svelte-q5cgiz-TagManager::-webkit-search-decoration{-webkit-appearance:none}.svelte-q5cgiz-TagManager::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-q5cgiz-TagManager:disabled{cursor:default}.svelte-q5cgiz-TagManager::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-q5cgiz-TagManager::-webkit-date-and-time-value{min-height:1.5em}.svelte-q5cgiz-TagManager{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-q5cgiz-TagManager,.svelte-q5cgiz-TagManager::before,.svelte-q5cgiz-TagManager::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-q5cgiz-TagManager::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-q5cgiz-TagManager::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.flex-1.svelte-q5cgiz-TagManager{flex:1 1 0%}@-webkit-keyframes svelte-q5cgiz-TagManager-spin{to{transform:rotate(360deg)}}@keyframes svelte-q5cgiz-TagManager-spin{to{transform:rotate(360deg)}}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
}

function create_fragment$2(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	return {
		c() {
			div = element("div");
			if (default_slot) default_slot.c();
			attr(div, "class", "flex-1 svelte-q5cgiz-TagManager");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[0],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[0])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[0], dirty, null),
						null
					);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;

	$$self.$$set = $$props => {
		if ('$$scope' in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class Wrapper extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {}, add_css);
	}
}

function canonicalize(obj) {
    var buffer = '';
    serialize(obj);
    return buffer;
    function serialize(object) {
        if (object === null ||
            typeof object !== 'object' ||
            object.toJSON != null) {
            /////////////////////////////////////////////////
            // Primitive data type - Use ES6/JSON          //
            /////////////////////////////////////////////////
            buffer += JSON.stringify(object);
            // } else if (object instanceof Date) {
            //   buffer += JSON.stringify(object);
        }
        else if (Array.isArray(object)) {
            /////////////////////////////////////////////////
            // Array - Maintain element order              //
            /////////////////////////////////////////////////
            buffer += '[';
            var next_1 = false;
            object.forEach(function (element) {
                if (next_1) {
                    buffer += ',';
                }
                next_1 = true;
                /////////////////////////////////////////
                // Array element - Recursive expansion //
                /////////////////////////////////////////
                serialize(element);
            });
            buffer += ']';
        }
        else {
            /////////////////////////////////////////////////
            // Object - Sort properties before serializing //
            /////////////////////////////////////////////////
            buffer += '{';
            var vKeys = Object.keys(object).sort();
            vKeys.forEach(function (property, index) { return addProp(object, property, index); });
            buffer += '}';
        }
    }
    function addProp(object, property, index) {
        if (index > 0) {
            buffer += ',';
        }
        ///////////////////////////////////////////////
        // Property names are strings - Use ES6/JSON //
        ///////////////////////////////////////////////
        buffer += JSON.stringify(property);
        buffer += ':';
        //////////////////////////////////////////
        // Property value - Recursive expansion //
        //////////////////////////////////////////
        serialize(object[property]);
    }
}

/* src\\lib\\components\\@peerpiper\\TagManager.svelte generated by Svelte v3.48.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i][0];
	child_ctx[6] = list[i][1].esModule;
	child_ctx[7] = list[i][1].props !== undefined ? list[i][1].props : {};
	return child_ctx;
}

// (27:0) {#if ComponentMounter && params && Object.entries(params).length > 0}
function create_if_block(ctx) {
	let outterwraper;
	let current;

	outterwraper = new OutterWraper({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(outterwraper.$$.fragment);
		},
		m(target, anchor) {
			mount_component(outterwraper, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const outterwraper_changes = {};

			if (dirty & /*$$scope, params, ComponentMounter*/ 1027) {
				outterwraper_changes.$$scope = { dirty, ctx };
			}

			outterwraper.$set(outterwraper_changes);
		},
		i(local) {
			if (current) return;
			transition_in(outterwraper.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(outterwraper.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(outterwraper, detaching);
		}
	};
}

// (31:3) <ComponentWrapper>
function create_default_slot_1(ctx) {
	let switch_instance;
	let t;
	let current;

	function change_handler(...args) {
		return /*change_handler*/ ctx[4](/*props*/ ctx[7], /*tag*/ ctx[5], /*esModule*/ ctx[6], ...args);
	}

	var switch_value = /*ComponentMounter*/ ctx[1];

	function switch_props(ctx) {
		return {
			props: {
				esModule: /*esModule*/ ctx[6],
				props: /*props*/ ctx[7]
			}
		};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
		switch_instance.$on("change", change_handler);
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			t = space();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, t, anchor);
			current = true;
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			const switch_instance_changes = {};
			if (dirty & /*params*/ 1) switch_instance_changes.esModule = /*esModule*/ ctx[6];
			if (dirty & /*params*/ 1) switch_instance_changes.props = /*props*/ ctx[7];

			if (switch_value !== (switch_value = /*ComponentMounter*/ ctx[1])) {
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
					switch_instance.$on("change", change_handler);
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, t.parentNode, t);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (switch_instance) destroy_component(switch_instance, detaching);
			if (detaching) detach(t);
		}
	};
}

// (29:2) {#each [...Object.entries(params)] as [tag, { esModule, props = { }
function create_each_block(ctx) {
	let componentwrapper;
	let current;

	componentwrapper = new Wrapper({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(componentwrapper.$$.fragment);
		},
		m(target, anchor) {
			mount_component(componentwrapper, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const componentwrapper_changes = {};

			if (dirty & /*$$scope, ComponentMounter, params*/ 1027) {
				componentwrapper_changes.$$scope = { dirty, ctx };
			}

			componentwrapper.$set(componentwrapper_changes);
		},
		i(local) {
			if (current) return;
			transition_in(componentwrapper.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(componentwrapper.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(componentwrapper, detaching);
		}
	};
}

// (28:1) <OutterWraper>
function create_default_slot(ctx) {
	let each_1_anchor;
	let current;
	let each_value = [...Object.entries(/*params*/ ctx[0])];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*ComponentMounter, Object, params, dispatch, canonicalize, update, JSON*/ 15) {
				each_value = [...Object.entries(/*params*/ ctx[0])];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
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
			if (current) return;

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
			if (detaching) detach(each_1_anchor);
		}
	};
}

function create_fragment$1(ctx) {
	let show_if = /*ComponentMounter*/ ctx[1] && /*params*/ ctx[0] && Object.entries(/*params*/ ctx[0]).length > 0;
	let if_block_anchor;
	let current;
	let if_block = show_if && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*ComponentMounter, params*/ 3) show_if = /*ComponentMounter*/ ctx[1] && /*params*/ ctx[0] && Object.entries(/*params*/ ctx[0]).length > 0;

			if (show_if) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*ComponentMounter, params*/ 3) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
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
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { params } = $$props;
	const dispatch = createEventDispatcher();
	let ComponentMounter;

	onMount(async () => {
		// not SSR compatible
		$$invalidate(1, ComponentMounter = (await Promise.resolve().then(function () { return ComponentMounter$1; })).default);
	});

	// sends update for each individual tag as they change
	function update({ tag, value }) {
		$$invalidate(0, params[tag] = Object.assign({}, params[tag], { ...value }), params);

		// dispatch update for this tag
		dispatch('change', { tag, props: { ...params[tag] } });
	}

	const change_handler = (props, tag, esModule, e) => {
		// loading contacts?
		if (e.detail.contacts) dispatch('change', { contacts: e.detail.contacts });

		// cleanse and compare
		canonicalize(e.detail) != canonicalize(props) && update({
			tag,
			value: {
				esModule,
				props: JSON.parse(canonicalize(e.detail))
			}
		});
	};

	$$self.$$set = $$props => {
		if ('params' in $$props) $$invalidate(0, params = $$props.params);
	};

	return [params, ComponentMounter, dispatch, update, change_handler];
}

class TagManager extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { params: 0 });
	}

	get params() {
		return this.$$.ctx[0];
	}

	set params(params) {
		this.$$set({ params });
		flush();
	}
}

/* src\\lib\\components\\@peerpiper\\ComponentMounter.svelte generated by Svelte v3.48.0 */

function create_fragment(ctx) {
	let html_tag;
	let html_anchor;
	let t;
	let div;

	return {
		c() {
			html_tag = new HtmlTag(false);
			html_anchor = empty();
			t = space();
			div = element("div");
			html_tag.a = html_anchor;
		},
		m(target, anchor) {
			html_tag.m(/*css*/ ctx[0], document.head);
			append(document.head, html_anchor);
			insert(target, t, anchor);
			insert(target, div, anchor);
			/*div_binding*/ ctx[6](div);
		},
		p(ctx, [dirty]) {
			if (dirty & /*css*/ 1) html_tag.p(/*css*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			detach(html_anchor);
			if (detaching) html_tag.d();
			if (detaching) detach(t);
			if (detaching) detach(div);
			/*div_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { esModule } = $$props;
	let { props } = $$props;
	let { css } = $$props;
	const dispatch = createEventDispatcher();
	let component; // the esModule component to be mounted in this gateway
	let url;
	let target; // where we mount this component
	let mounted;

	async function loadEsModuleComponent() {
		$$invalidate(0, css = css ? \`<style>\${css}<\\/style>\` : '');

		// cleanup from prior loads
		if (component) {
			component.$destroy();
			URL.revokeObjectURL(url); // memory management
		}

		const blob = new Blob([esModule], { type: 'text/javascript' });
		url = URL.createObjectURL(blob);

		const App = (await import(/* @vite-ignore */
		url)).default;

		if (!App || !target) return;
		$$invalidate(1, target.innerHTML = '', target);
		$$invalidate(4, component = new App({ target, props: {} }));

		// get the default values of component for each of the keys of component.$$.props
		// this way the parent component can deduce the schema of the data
		const initProps = component['$$'].props;

		let inits = {};

		Object.keys(initProps).map(k => {
			inits[k] = component[k]; // load default initial props
		});

		let allProps = Object.assign(inits, props);
		dispatch('change', allProps); // trigger "rendered" in Gateway, plus push any default values to the db to save

		// on change, Pass props message up to iframe parent so it can be saved/updated
		component.$on('change', event => {
			dispatch('change', event.detail);
		});

		setProps(allProps); // set them after we emit the defaults back to the user to save/display
	} // if (url) URL.revokeObjectURL(url); // memory management

	function setProps(props) {
		if (!component) return;
		component.$set({ ...props });
	}

	onMount(() => {
		$$invalidate(5, mounted = true);
	});

	onDestroy(() => {
		if (component) component.$destroy();
		if (url) URL.revokeObjectURL(url); // memory management
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			target = $$value;
			$$invalidate(1, target);
		});
	}

	$$self.$$set = $$props => {
		if ('esModule' in $$props) $$invalidate(2, esModule = $$props.esModule);
		if ('props' in $$props) $$invalidate(3, props = $$props.props);
		if ('css' in $$props) $$invalidate(0, css = $$props.css);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*mounted, esModule*/ 36) {
			if (mounted && esModule) loadEsModuleComponent();
		}

		if ($$self.$$.dirty & /*component, props*/ 24) {
			if (component && props) setProps();
		}
	};

	return [css, target, esModule, props, component, mounted, div_binding];
}

class ComponentMounter extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { esModule: 2, props: 3, css: 0 });
	}

	get esModule() {
		return this.$$.ctx[2];
	}

	set esModule(esModule) {
		this.$$set({ esModule });
		flush();
	}

	get props() {
		return this.$$.ctx[3];
	}

	set props(props) {
		this.$$set({ props });
		flush();
	}

	get css() {
		return this.$$.ctx[0];
	}

	set css(css) {
		this.$$set({ css });
		flush();
	}
}

var ComponentMounter$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': ComponentMounter
});

export { TagManager as default };
`;
const get_default_slot_changes = (dirty) => ({});
const get_default_slot_context = (ctx) => ({
  handleLoadContacts: ctx[2]
});
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[5] = list[i];
  return child_ctx;
}
function create_if_block$1(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[1];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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
      if (dirty & 3) {
        each_value = ctx2[1];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
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
function create_each_block(ctx) {
  let div;
  let pipernet;
  let t;
  let current;
  pipernet = new PiperNet({
    props: {
      pubkey: ctx[5].pubkey,
      handle: ctx[5].handle,
      openHypns: ctx[0]
    }
  });
  return {
    c() {
      div = element("div");
      create_component(pipernet.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(pipernet.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "block");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(pipernet, div, null);
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const pipernet_changes = {};
      if (dirty & 2)
        pipernet_changes.pubkey = ctx2[5].pubkey;
      if (dirty & 2)
        pipernet_changes.handle = ctx2[5].handle;
      if (dirty & 1)
        pipernet_changes.openHypns = ctx2[0];
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
        detach(div);
      destroy_component(pipernet);
    }
  };
}
function create_fragment$2(ctx) {
  let t;
  let current;
  let if_block = ctx[1] && create_if_block$1(ctx);
  const default_slot_template = ctx[4].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[3], get_default_slot_context);
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
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
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
        if (default_slot.p && (!current || dirty & 8)) {
          update_slot_base(default_slot, default_slot_template, ctx2, ctx2[3], !current ? get_all_dirty_from_scope(ctx2[3]) : get_slot_changes(default_slot_template, ctx2[3], dirty, get_default_slot_changes), get_default_slot_context);
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
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { openHypns } = $$props;
  let contacts;
  function handleLoadContacts(e) {
    $$invalidate(1, contacts = e.detail.map((contact) => {
      const vpk = validatePubKey(contact.pubkey);
      if (!vpk)
        return null;
      return { pubkey: vpk, handle: contact.handle };
    }).filter((contact) => contact));
    console.log("Piper Manager handleLoadContacts", contacts);
  }
  $$self.$$set = ($$props2) => {
    if ("openHypns" in $$props2)
      $$invalidate(0, openHypns = $$props2.openHypns);
    if ("$$scope" in $$props2)
      $$invalidate(3, $$scope = $$props2.$$scope);
  };
  return [openHypns, contacts, handleLoadContacts, $$scope, slots];
}
class PiperNetManager extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { openHypns: 0 });
  }
}
function create_if_block_2(ctx) {
  let switch_instance;
  let updating_wallet;
  let switch_instance_anchor;
  let current;
  function switch_instance_wallet_binding(value) {
    ctx[5](value);
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
  let if_block_anchor;
  let current;
  let if_block = create_if_block_1(ctx);
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
      if_block.p(ctx2, dirty);
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
function create_if_block_1(ctx) {
  var _a;
  let proxcryptor;
  let current;
  proxcryptor = new Proxcryptor({
    props: {
      proxcryptor: (_a = ctx[0]) == null ? void 0 : _a.proxcryptor,
      ipfsNode: ctx[10],
      rootCID: ctx[2],
      $$slots: {
        default: [
          create_default_slot_2,
          ({ decryptTagNode, handleTagChange }) => ({ 12: decryptTagNode, 13: handleTagChange }),
          ({ decryptTagNode, handleTagChange }) => (decryptTagNode ? 4096 : 0) | (handleTagChange ? 8192 : 0)
        ]
      },
      $$scope: { ctx }
    }
  });
  proxcryptor.$on("rootCID", ctx[7]);
  proxcryptor.$on("loadContacts", function() {
    if (is_function(ctx[4]))
      ctx[4].apply(this, arguments);
  });
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
    p(new_ctx, dirty) {
      var _a2;
      ctx = new_ctx;
      const proxcryptor_changes = {};
      if (dirty & 1)
        proxcryptor_changes.proxcryptor = (_a2 = ctx[0]) == null ? void 0 : _a2.proxcryptor;
      if (dirty & 1024)
        proxcryptor_changes.ipfsNode = ctx[10];
      if (dirty & 4)
        proxcryptor_changes.rootCID = ctx[2];
      if (dirty & 47104) {
        proxcryptor_changes.$$scope = { dirty, ctx };
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
function create_default_slot_3(ctx) {
  let gateway;
  let current;
  gateway = new Gateway({
    props: {
      esModule: TagManager,
      props: { params: ctx[14] }
    }
  });
  gateway.$on("change", function() {
    if (is_function(ctx[13]))
      ctx[13].apply(this, arguments);
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
      if (dirty & 16384)
        gateway_changes.props = { params: ctx[14] };
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
function create_default_slot_2(ctx) {
  let peerpiper_tagconfig;
  let current;
  peerpiper_tagconfig = new TagConfig({
    props: {
      tagNodes: ctx[11],
      decryptTagNode: ctx[12],
      $$slots: {
        default: [
          create_default_slot_3,
          ({ params }) => ({ 14: params }),
          ({ params }) => params ? 16384 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(peerpiper_tagconfig.$$.fragment);
    },
    l(nodes) {
      claim_component(peerpiper_tagconfig.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(peerpiper_tagconfig, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const peerpiper_tagconfig_changes = {};
      if (dirty & 2048)
        peerpiper_tagconfig_changes.tagNodes = ctx2[11];
      if (dirty & 4096)
        peerpiper_tagconfig_changes.decryptTagNode = ctx2[12];
      if (dirty & 57344) {
        peerpiper_tagconfig_changes.$$scope = { dirty, ctx: ctx2 };
      }
      peerpiper_tagconfig.$set(peerpiper_tagconfig_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(peerpiper_tagconfig.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(peerpiper_tagconfig.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(peerpiper_tagconfig, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t0_value = (!ctx[10] ? refresh() : "") + "";
  let t0;
  let t1;
  let t2_value = !ctx[0] ? "Connect to PeerPiper Wallet" : "";
  let t2;
  let t3;
  let div;
  let current;
  let if_block = ctx[10] && ctx[0] && create_if_block(ctx);
  return {
    c() {
      t0 = text(t0_value);
      t1 = space();
      t2 = text(t2_value);
      t3 = space();
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      t0 = claim_text(nodes, t0_value);
      t1 = claim_space(nodes);
      t2 = claim_text(nodes, t2_value);
      t3 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "flex flex-1");
    },
    m(target, anchor) {
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, t2, anchor);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1024) && t0_value !== (t0_value = (!ctx2[10] ? refresh() : "") + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 1) && t2_value !== (t2_value = !ctx2[0] ? "Connect to PeerPiper Wallet" : ""))
        set_data(t2, t2_value);
      if (ctx2[10] && ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1025) {
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
        detach(div);
      if (if_block)
        if_block.d();
    }
  };
}
function create_default_slot(ctx) {
  let ipfsmanager;
  let updating_rootCID;
  let current;
  function ipfsmanager_rootCID_binding(value) {
    ctx[8](value);
  }
  let ipfsmanager_props = {
    $$slots: {
      default: [
        create_default_slot_1,
        ({ ipfsNode, tagNodes }) => ({ 10: ipfsNode, 11: tagNodes }),
        ({ ipfsNode, tagNodes }) => (ipfsNode ? 1024 : 0) | (tagNodes ? 2048 : 0)
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
      create_component(ipfsmanager.$$.fragment);
    },
    l(nodes) {
      claim_component(ipfsmanager.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(ipfsmanager, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const ipfsmanager_changes = {};
      if (dirty & 35861) {
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
      transition_in(ipfsmanager.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(ipfsmanager.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(ipfsmanager, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let link;
  let t0;
  let t1;
  let div;
  let hypnsmanager;
  let updating_openHypns;
  let t2;
  let pipernetmanager;
  let current;
  let if_block = ctx[1] && create_if_block_2(ctx);
  function hypnsmanager_openHypns_binding(value) {
    ctx[6](value);
  }
  let hypnsmanager_props = {
    wallet: ctx[0],
    rootCID: ctx[2]
  };
  if (ctx[3] !== void 0) {
    hypnsmanager_props.openHypns = ctx[3];
  }
  hypnsmanager = new HypnsManager({ props: hypnsmanager_props });
  binding_callbacks.push(() => bind(hypnsmanager, "openHypns", hypnsmanager_openHypns_binding));
  pipernetmanager = new PiperNetManager({
    props: {
      openHypns: ctx[3],
      $$slots: {
        default: [
          create_default_slot,
          ({ handleLoadContacts }) => ({ 4: handleLoadContacts }),
          ({ handleLoadContacts }) => handleLoadContacts ? 16 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      link = element("link");
      t0 = space();
      if (if_block)
        if_block.c();
      t1 = space();
      div = element("div");
      create_component(hypnsmanager.$$.fragment);
      t2 = space();
      create_component(pipernetmanager.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = query_selector_all('[data-svelte="svelte-elf7d0"]', document.head);
      link = claim_element(head_nodes, "LINK", { href: true, rel: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      if (if_block)
        if_block.l(nodes);
      t1 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(hypnsmanager.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      t2 = claim_space(nodes);
      claim_component(pipernetmanager.$$.fragment, nodes);
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
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div, anchor);
      mount_component(hypnsmanager, div, null);
      insert_hydration(target, t2, anchor);
      mount_component(pipernetmanager, target, anchor);
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
          if_block = create_if_block_2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(t1.parentNode, t1);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      const hypnsmanager_changes = {};
      if (dirty & 1)
        hypnsmanager_changes.wallet = ctx2[0];
      if (dirty & 4)
        hypnsmanager_changes.rootCID = ctx2[2];
      if (!updating_openHypns && dirty & 8) {
        updating_openHypns = true;
        hypnsmanager_changes.openHypns = ctx2[3];
        add_flush_callback(() => updating_openHypns = false);
      }
      hypnsmanager.$set(hypnsmanager_changes);
      const pipernetmanager_changes = {};
      if (dirty & 8)
        pipernetmanager_changes.openHypns = ctx2[3];
      if (dirty & 32789) {
        pipernetmanager_changes.$$scope = { dirty, ctx: ctx2 };
      }
      pipernetmanager.$set(pipernetmanager_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(hypnsmanager.$$.fragment, local);
      transition_in(pipernetmanager.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(hypnsmanager.$$.fragment, local);
      transition_out(pipernetmanager.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      detach(link);
      if (detaching)
        detach(t0);
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div);
      destroy_component(hypnsmanager);
      if (detaching)
        detach(t2);
      destroy_component(pipernetmanager, detaching);
    }
  };
}
function refresh() {
  globalThis.ipfsNode.stop();
  globalThis.ipfsNode = null;
  globalThis.location.reload();
  return "Reloading page...";
}
function instance$1($$self, $$props, $$invalidate) {
  let { wallet = null } = $$props;
  let Web3WalletMenu;
  let rootCID;
  let openHypns;
  let handleLoadContacts;
  onMount(async () => {
    if (!wallet) {
      $$invalidate(1, { Web3WalletMenu } = await __vitePreload(() => import("../chunks/index-ca95c035.js"), true ? ["chunks/index-ca95c035.js","assets/index-c30dcd19.css","chunks/index-64ae2edc.js","chunks/preload-helper-ef2a18a4.js","chunks/index-1b64b11a.js","chunks/cid-d85b89cf.js"] : void 0), Web3WalletMenu);
    }
  });
  function switch_instance_wallet_binding(value) {
    wallet = value;
    $$invalidate(0, wallet);
  }
  function hypnsmanager_openHypns_binding(value) {
    openHypns = value;
    $$invalidate(3, openHypns);
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
    openHypns,
    handleLoadContacts,
    switch_instance_wallet_binding,
    hypnsmanager_openHypns_binding,
    rootCID_handler,
    ipfsmanager_rootCID_binding
  ];
}
class Demo extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { wallet: 0 });
  }
}
function create_fragment(ctx) {
  let demo;
  let current;
  demo = new Demo({});
  return {
    c() {
      create_component(demo.$$.fragment);
    },
    l(nodes) {
      claim_component(demo.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(demo, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(demo.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(demo.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(demo, detaching);
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
export { Routes as default };
//# sourceMappingURL=index.svelte-217df75d.js.map
