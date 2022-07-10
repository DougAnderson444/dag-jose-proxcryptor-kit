import { SvelteComponent, init, safe_not_equal, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out, empty, insert_hydration, group_outros, check_outros, detach, create_slot, element, claim_element, children, attr, create_component, space, claim_component, claim_space, mount_component, append_hydration, destroy_component, destroy_each, add_flush_callback, binding_callbacks, bind, onMount, text, claim_text, set_data, is_function, noop } from "../chunks/index-64ae2edc.js";
import { validatePubKey } from "../chunks/cid-ddbe2f79.js";
import { PiperNet, HypnsManager } from "../chunks/Contacts.svelte_svelte_type_style_lang-bf697503.js";
import { __vitePreload } from "../chunks/preload-helper-ef2a18a4.js";
import { IPFSManager, Proxcryptor, Gateway } from "../chunks/IPFSManager-527b796e.js";
import "../chunks/index-9f669967.js";
import "../chunks/singletons-cdabada9.js";
import "../chunks/_commonjsHelpers-9b98600b.js";
var Icon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".icon.svelte-18dvs4w{position:relative;overflow:hidden;vertical-align:middle;-o-object-fit:contain;object-fit:contain;transform-origin:center center;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;fill:currentColor}")();
var Modal_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".hide.svelte-5vlr37{display:none}.modal.svelte-5vlr37{display:block;position:fixed;z-index:99999;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.4)}.modal-content.svelte-5vlr37{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%}.close.svelte-5vlr37{color:#aaa;float:right;font-size:3.5em;font-weight:bold;line-height:0.5;padding:0.25em}.close.svelte-5vlr37:hover,.close.svelte-5vlr37:focus{color:black;text-decoration:none;cursor:pointer}")();
var Wrapper_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".svelte-1uo1q83,.svelte-1uo1q83::before,.svelte-1uo1q83::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-1uo1q83::before,.svelte-1uo1q83::after{--tw-content:''}.svelte-1uo1q83:-moz-focusring{outline:auto}.svelte-1uo1q83:-moz-ui-invalid{box-shadow:none}.svelte-1uo1q83::-webkit-inner-spin-button,.svelte-1uo1q83::-webkit-outer-spin-button{height:auto}.svelte-1uo1q83::-webkit-search-decoration{-webkit-appearance:none}.svelte-1uo1q83::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-1uo1q83:disabled{cursor:default}.svelte-1uo1q83::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-1uo1q83::-webkit-date-and-time-value{min-height:1.5em}.svelte-1uo1q83,.svelte-1uo1q83::before,.svelte-1uo1q83::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1uo1q83::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1uo1q83::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.m-2.svelte-1uo1q83{margin:0.5rem}.flex-1.svelte-1uo1q83{flex:1 1 0%}@-webkit-keyframes svelte-1uo1q83-spin{to{transform:rotate(360deg)}}@keyframes svelte-1uo1q83-spin{to{transform:rotate(360deg)}}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}")();
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
			div.innerHTML = \`<svg><symbol id="avatar" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path d="M105 2a129 129 0 0 0 1 253c11 1 33 2 44 0 26-5 48-16 67-35a126 126 0 0 0 38-114A129 129 0 0 0 150 2c-10-2-35-2-45 0zm31 30c23 4 41 24 45 51l3 9 2 6c0 4-1 6-5 14l-7 15c-3 8-11 19-16 24s-5 7-2 13c5 10 13 16 35 23l16 5-3 4a117 117 0 0 1-151 0l-4-4 4-1 17-6c19-6 27-13 31-25l2-5-4-4c-5-6-12-16-15-23l-7-11c-4-6-7-14-7-18 0-3 3-9 5-9l1-3 2-11c6-26 26-43 50-45l8 1z"></path></symbol><symbol id="address" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path d="M412 414a111 111 0 0 1 90-77v-40h31c7 0 13-6 13-13v-15c0-5-2-9-7-11L355 153c-4-2-8-2-12 0l-65 37v-13c0-5-4-9-9-9h-29c-5 0-8 4-8 9v39l-74 42c-4 2-7 7-7 11v15c0 7 6 13 13 13h31v180c0 12 9 21 20 21h203c-13-25-15-56-6-84z"></path><path d="M592 412a81 81 0 0 0-109-36 82 82 0 0 0-36 109l61 108c5 9 18 9 23 0l61-108c12-22 12-49 0-73zm-73 72a35 35 0 1 1 0-70 35 35 0 1 1 0 70z"></path></symbol><symbol id="email" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path d="m582.1 312.4-197.5-128c-4.3-2.8-10-2.8-14.4 0l-199 128c-3.8 2.4-7.8 6.6-7.8 11v230.3c0 7.3 9.3 15.6 16.6 15.6h394.5c7.3 0 14.1-8.3 14.1-15.6V323.4c0-4.4-2.7-8.6-6.4-11zm-385 35.2 113 73.3-113 103zm131.8 88 41.2 26.8a13.2 13.2 0 0 0 14.3 0l41.1-26.8 115 104.7H214zM451.5 421l113-73.3V524zm-74.3-209.8 173.1 112.3-173 112.3-173.1-112.3zm0 200.6c20.7 0 40.9-7.3 56.7-20.6A13.2 13.2 0 0 0 417 371a62 62 0 1 1 22.2-47.5c0 6-4.9 10.9-10.8 10.9a11 11 0 0 1-10.9-10v-.9a40.3 40.3 0 1 0-12.3 29 37 37 0 0 0 60.3-29 88.4 88.4 0 1 0-88.3 88.4zm0-74.3a14 14 0 1 1 0-28 14 14 0 0 1 0 28z"></path></symbol><symbol id="phone" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path fill-rule="evenodd" d="m587 561-3 3c-96 96-241-7-315-81S92 264 188 168l3-3 107 106-13 14a39 39 0 0 0-5 49 503 503 0 0 0 138 138c16 11 36 9 49-5l14-13zm-92-118 104 103c7-14 4-33-8-45l-51-51a39 39 0 0 0-45-7zM206 153l103 104c7-15 5-33-7-45l-51-51a39 39 0 0 0-45-8z"></path></symbol><symbol id="arrow-left" class="icon" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></symbol><symbol id="arrow-right" class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></symbol><symbol id="arrow-up" class="icon" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></symbol><symbol id="arrow-down" class="icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></symbol><symbol id="check" class="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></symbol><symbol id="close" class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol><symbol id="download" class="icon" viewBox="0 0 24 24"><path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></symbol><symbol id="edit" class="icon" viewBox="0 0 24 24"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></symbol><symbol id="github" class="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2ZM0 12C0 5.3726 5.3726 0 12 0C18.6274 0 24 5.3726 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12Z" fill="currentColor" stroke="none"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.59162 22.7357C9.49492 22.6109 9.49492 21.4986 9.59162 19.399C8.55572 19.4347 7.90122 19.3628 7.62812 19.1833C7.21852 18.9139 6.80842 18.0833 6.44457 17.4979C6.08072 16.9125 5.27312 16.8199 4.94702 16.6891C4.62091 16.5582 4.53905 16.0247 5.84562 16.4282C7.15222 16.8316 7.21592 17.9303 7.62812 18.1872C8.04032 18.4441 9.02572 18.3317 9.47242 18.1259C9.91907 17.9201 9.88622 17.1538 9.96587 16.8503C10.0666 16.5669 9.71162 16.5041 9.70382 16.5018C9.26777 16.5018 6.97697 16.0036 6.34772 13.7852C5.71852 11.5669 6.52907 10.117 6.96147 9.49369C7.24972 9.07814 7.22422 8.19254 6.88497 6.83679C8.11677 6.67939 9.06732 7.06709 9.73672 7.99999C9.73737 8.00534 10.6143 7.47854 12.0001 7.47854C13.386 7.47854 13.8777 7.90764 14.2571 7.99999C14.6365 8.09234 14.94 6.36699 17.2834 6.83679C16.7942 7.79839 16.3844 8.99999 16.6972 9.49369C17.0099 9.98739 18.2372 11.5573 17.4833 13.7852C16.9807 15.2706 15.9927 16.1761 14.5192 16.5018C14.3502 16.5557 14.2658 16.6427 14.2658 16.7627C14.2658 16.9427 14.4942 16.9624 14.8233 17.8058C15.0426 18.368 15.0585 19.9739 14.8708 22.6234C14.3953 22.7445 14.0254 22.8257 13.7611 22.8673C13.2924 22.9409 12.7835 22.9822 12.2834 22.9982C11.7834 23.0141 11.6098 23.0123 10.9185 22.948C10.4577 22.9051 10.0154 22.8343 9.59162 22.7357Z" fill="currentColor" stroke="none"></path></symbol><symbol id="git-branch" class="icon" viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></symbol><symbol id="log-in" class="icon" viewBox="0 0 24 24"><path d="M15 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H15"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></symbol><symbol id="maximize" class="icon" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></symbol><symbol id="maximize-2" class="icon" viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></symbol><symbol id="menu" class="icon" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></symbol><symbol id="message-square" class="icon" viewBox="0 0 24 24"><g transform="translate(0, 1)"><path d="M16.5 19H11V15H18V11H22V19H19.5L18 20.5L16.5 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 3H18V15H8.5L6.5 17L4.5 15H2V3Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 11H9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M6 7H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></g></symbol><symbol id="minus" class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></symbol><symbol id="plus" class="icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></symbol><symbol id="save" class="icon" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></symbol><symbol id="link" class="icon" viewBox="0 0 24 24"><path d="M9,7L6,7A2 2 0 0 0 6,17L9,17"></path><path d="M15,7L18,7A2 2 0 0 1 18,17L15,17"></path><path d="M7,12L17,12"></path></symbol><symbol id="chevron" class="icon" viewBox="0 0 24 24"><path d="M2,7 L12,17 L20,7"></path></symbol><symbol id="delete" class="icon" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M22 4.2h-5.6L15 1.6c-.1-.2-.4-.4-.7-.4H9.6c-.2 0-.5.2-.6.4L7.6 4.2H2c-.4 0-.8.4-.8.8s.4.8.8.8h1.8V22c0 .4.3.8.8.8h15c.4 0 .8-.3.8-.8V5.8H22c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM10.8 16.5c0 .4-.3.8-.8.8s-.8-.3-.8-.8V10c0-.4.3-.8.8-.8s.8.3.8.8v6.5zm4 0c0 .4-.3.8-.8.8s-.8-.3-.8-.8V10c0-.4.3-.8.8-.8s.8.3.8.8v6.5z"></path></symbol><symbol id="scanQR" class="icon" width="100%" height="100%" viewBox="0 0 760 760"><path d="M684 630c-31-34-9-38-2-84 7-34 13-75-2-123l-34-64c-22-39-51-89-58-117v-2c-6-24-9-43-9-60-2-22-4-35-20-41h-2c-11-3-22-5-33 2V59c0-22-20-41-43-41H205c-25 0-42 19-42 41v49s-29-26-49-30c-5 0-21 2-32 13a44 44 0 0 0-11 43c2 11 31 50 65 69 7 7 15 11 27 15v3h-5c-49 4-69 64-31 94-34 20-34 65-2 87a54 52 0 0 0 38 92v72c0 23 17 62 42 62h89c13 30 25 41 69 50h7c11 4 31 8 47 6l2 2 7 13c6 11 11 22 13 35 2 6 9 11 16 9 6-3 11-9 9-16-3-15-9-28-16-38l-9-13c-2-7-4-9-11-13l-2-2h-9c-11 2-31-3-43-5l-6-2c-32-6-34-4-47-26h160c23 0 43-17 43-41 0 0-20-60-18-86s24-65 24-65l18-30c9-24-4-47-18-78l-9-15c-11-23-20-47-20-75-2-11 5-41 20-63 7-8 16-19 29-17l5 24c0 17 2 39 11 64 7 33 34 82 58 123l33 63c12 41 7 78 0 112-6 45-31 58 9 101 12 5 20-4 18-15zM205 41h276c9 0 18 9 18 18v19H187V59c0-9 7-18 18-18zm-58 143c-18-11-51-48-51-54-3-7-3-17 4-22 5-4 14-4 16-6 4 0 47 30 47 30v58zm11 60a30 29 0 1 1 0 58 30 29 0 0 1 0-58zm0 145a30 29 0 1 1 0-58 30 29 0 0 1 0 58zm-29 54a30 29 0 1 1 60 0 30 29 0 0 1-60 0zm85 0c0-18-9-33-22-41 31-22 31-67-3-87 34-21 34-69-2-88V102h312v62c-15 26-24 59-22 76 0 30 11 58 22 82 31 267-67 211-312 211v-45c16-9 27-26 27-45zm267 161H205c-11 0-18-28-18-38v-9h312v9c0 10-9 38-18 38z"></path><path d="m306 191-2 18v18h5c4 0 4 2 4 3 1 4 0 5-4 5-5 0-5 0-5 10 0 8 0 8 5 8 4 0 5-1 5-5l3-3c5 0 5 0 5 13 2 13 2 13 5 13 4 2 5 0 5-3s2-5 5-5 3 0 3-5 0-5 5-5 5 0 5-3c0-5 0-5-5-5-3 0-5 0-5 5 0 3 0 3-3 3-5 0-5 0-5-18l-1-16-4-2c-3 0-5-1-5-5l-3-3c-3 0-5-2-5-10s-1-8-3-10z"></path><path d="m352 191-2 5c0 3 0 3-8 3-10 0-10 0-10 5 0 3 0 5 5 5 3 0 3 0 3 13v13h18v9c0 9 0 9 5 9h5v-26h10c8 0 8 0 8-5s0-5-8-5c-10 0-10 0-10-5 0-3 0-3-5-3s-5 0-5 3c0 4 2 5 5 5 5 0 5 2 5 5 0 5 0 5-5 5-3 0-5-2-5-5s-1-5-4-5c-4 0-4 0-4-10 0-8 0-8 5-8 3 0 3 0 3-5-1-3-4-6-6-3zm26 2c-1 5 0 6 5 6 3 0 3 0 3-5-1-5-8-6-9-1zm-146 29v31h62v-62h-62Zm54 0v23h-46v-46h46z"></path><path d="M250 222v13h26v-26h-26Zm146 0v31h63v-62h-63zm54 0v23h-46v-46h46z"></path><path d="M414 222v13h27v-26h-27zm-37 15v10l4 6c5 0 5 0 5-8 0-10 0-10-3-10zm-25 18-2 5c0 2 2 3 5 3s3 0 3-5c-1-3-4-6-6-3zm-122 10v10l5 6c5 0 5 2 5 5 0 5 0 5-5 5h-5v26h20v5c0 5 0 5 5 5 3 0 3 0 3-5 0-3-1-5-5-5l-3-3c0-3-1-5-5-5-5 0-5 0-5-10 0-8 0-8 5-8s5 0 5 5c0 12 0 13 5 13 3 0 3 2 3 5s2 3 5 3c5 0 5 0 5-3s-1-5-5-5c-5 0-5 0-5-10v-8h10c8 0 8 0 8 5 0 3 2 3 5 3 5 0 5 0 5 5s0 5-5 5-5 0-5 10c0 8 0 8-3 8s-5 2-5 4c0 4 5 6 13 4 4 0 5-1 5-4 0-2 2-4 5-4s3 2 3 5 2 3 15 3c5 0 5 0 5 5s0 5 5 5c3 0 3 0 3 10 0 8 0 8 5 8h5v-13c2-13 2-13 5-15 2 0 3-1 3-4 0-4 2-4 5-4 5 0 5 0 5 5s8 5 8 0c2-3 2-3 10-5 9 0 9 0 9-5s0-5-10-5c-9 0-9 0-9-3s2-5 5-5c4 0 5-1 5-5 0-3 0-5-5-5-3 0-5-1-5-5 0-1 0-3 5-3 4-1 5-1 5-10 0-8 0-8-5-8h-8c-5 0-5 0-5 8-1 9-1 9-5 10-3 0-5 2-5 5 0 2 0 3-3 3-5 0-5 0-5 5s0 5-5 5c-3 0-5 0-5 3 0 4 0 5-3 5-5 0-5 0-5 5 0 4 0 5 5 5 3 0 3 0 3 4 0 6-8 6-8 1-1-3-1-5-10-5-10 0-10 0-10-5s0-5-3-5-5-1-5-5c0-3 0-3 10-3 8 0 8 0 8 5 0 3 0 3 5 3 7-1 7-6 0-8-5 0-5 0-5-10 0-8 0-8 5-8 4 0 5 2 5 5 0 5 8 5 8 0 0-3 2-5 5-5 4 0 4-1 4-5 1-3 0-3-14-5-13 0-13 0-13-3 0-5 0-5-5-5s-5 0-5 3c0 4 2 5 5 5 5 0 5 2 5 5 0 5 0 5-5 5s-5 0-5-5v-5h-36v-3c0-7-8-7-8-2 0 4-1 5-5 5-5 0-5 0-5-3s2-5 5-5c4 0 5-2 5-5s-1-3-10-5zm64 29c0 5 0 5-3 5s-5 0-5-3 2-5 5-5 3 2 3 5zm56 10c0 4-1 5-5 5-3 0-5 2-5 5 0 2 0 3-3 3s-5 0-5-3 2-5 5-5 3 0 3-5 0-5 5-5c4 0 4 2 4 5z"></path><path d="M268 268c2 3 2 3 13 3 12 0 13 0 13-3v-5h-26Zm74-3c-2 2-2 6 2 6 3 2 6 0 6-3-1-5-6-6-8-3zm35 2c0 3 3 6 6 6l3-6c0-4 0-4-3-4zm29-2c-2 2-2 6 2 6 3 2 6 0 6-3-1-5-6-6-8-3zm16 8c0 8 0 8-4 8s-4 0-4 5c0 4 2 5 5 5 2 0 3-1 3-5 0-5 2-5 5-5 4 0 5 0 5-3 0-5 0-5 10-5 8 0 8 0 8 3 0 4-1 5-5 5-3 0-4 2-4 5 0 4-2 5-5 5-2 0-4 2-4 5s2 3 4 3c3 0 5 2 5 5 0 4 1 5 4 5 4 0 5 2 5 5s2 3 5 3h5v-52l-19-2h-19zm-36 5c0 3 0 3-3 3-5 0-6 2-6 7 3 5 8 3 9-2 0-3 2-5 5-5 4 0 5-1 5-5 0-3 0-3-5-3s-5 0-5 3zm10 26c0 13 0 13 5 13 3 0 3 0 3-13s0-13-3-13c-5 0-5 0-5 13zm28 7-2 3c0 2 2 3 5 3 5 0 5 0 5-5 0-3 0-3-3-3zm-8 8-2 5c0 2 2 3 5 3s3 0 3-5c-1-3-4-6-6-3zm-30 12c0 3-1 4-5 4s-4 2-4 15 0 13-4 13c-5 0-5 0-5 5s0 5-8 5c-10 0-10 0-10 4 0 3 2 4 5 4s3 0 3 5 0 5-3 5-5-1-5-5c0-3-1-5-5-5-3 0-5 2-5 5 0 4-1 5-3 5-3 0-5-1-5-5 0-3-1-5-5-5-3 0-5 2-5 5 0 4-1 5-5 5s-4 8 0 8 5 2 5 5c0 5 0 5-3 5s-5-1-5-5c0-3-1-5-5-5-3 2-3 2-3 10v10h8c7 0 8-1 8-5 0-5 0-5 10-5 8 0 8 0 8 5 2 4 2 4 10 5h8v-10c2-8 2-10 5-10 4 0 5-1 5-4 0-4 2-4 4-4 5 0 5 0 5 8 1 9 1 9 4 10 5 0 5 0 5-8v-10h15c13 0 13 0 13 4 0 3-1 4-5 4-3 0-3 2-3 10v10h54v-10c0-8-1-8-5-8-3 0-5 0-5 3 0 5-1 5-5 5-3 0-4-1-4-5 0-5 0-5 4-5s5 0 5-3 2-5 5-5c4 0 4-1 4-5 0-3 0-3-9-3h-9v16h-10c-9 0-9 0-9-3s-1-5-4-5c-4 0-4 0-4-5 0-3 0-5 4-5 3 0 4 0 4-3 0-5 0-5 19-5l18-1v-7l-18-2c-19 0-19 0-19-3s2-5 5-5c4 0 5-1 5-5 0-5 0-5-5-5-3 0-5-1-5-5-1-3-1-3-9-5-9 0-9 0-9-4s0-4-9-4-9 0-9 4zm28 27v15h-26l-2-15v-13h14l14 2v13zm-37 20c0 3 0 3-4 3-3 0-5 0-5-3s2-5 5-5c4 0 4 2 4 5zm-27 26c0 5 0 5-5 5s-5 0-5-3c0-5 2-7 7-7 2 0 3 2 3 5z"></path><path d="M396 360c0 3 2 3 5 3s3 0 3-3 0-5-3-5-5 2-5 5zm36-28c0 3 2 3 5 3 4 0 4 0 4-3s0-5-4-5c-3 0-5 2-5 5zm-202 5c-1 7 2 8 10 8 9 0 10-1 10-5 0-3-1-3-10-5zm30 0-2 5c0 3 0 3 5 3 4 0 5-1 5-3 0-5-5-8-8-5zm28 0-2 5c0 2 2 3 5 3s3 0 3-5c0-3-4-6-6-3zm54 0c-3 2-2 8 3 8 4 0 5-1 5-3 0-3-1-7-5-7zm108 0v10c2 7 2 7 5 7 4 1 5 0 5-9 0-8-1-8-5-10zm-146 13c2 5 9 7 10 2 0-5-1-7-6-7-4 0-4 0-4 5zm46 0c0 4 2 4 5 4 2 0 3 0 3-4 0-5 0-5-4-5s-4 0-4 5zm-118 36v32h62v-63h-62Zm54 0v23h-46v-46h46z"></path><path d="M250 386v13h26v-26h-26Zm54-13c0 8 0 8 5 8 4-1 4-1 4-9 1-7 0-7-4-9-5 0-5 0-5 10zm36-8c-1 5 2 8 5 8 4 0 5-1 5-5 0-3-1-5-5-5zm-8 13c0 3 2 3 5 3s3 0 3-3 0-5-3-5-5 2-5 5zm90 5c-1 5 2 8 5 8 4 0 5-1 5-5 0-3-1-5-5-5zm-54 31c0 4 2 5 5 5 4 0 4 0 4-5s0-5-5-5c-4 0-4 0-4 5z"></path></symbol></svg>\`;
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
	append_styles(target, "svelte-12pt8gd-ContactCard", ".icon.svelte-12pt8gd-ContactCard{position:relative;overflow:hidden;vertical-align:middle;-o-object-fit:contain;object-fit:contain;transform-origin:center center;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;fill:currentColor}");
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
			attr(svg, "class", "icon  svelte-12pt8gd-ContactCard");
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
	let { size = '100%' } = $$props;

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
	append_styles(target, "svelte-12gamzf-ContactCard", ".svelte-12gamzf-ContactCard,.svelte-12gamzf-ContactCard::before,.svelte-12gamzf-ContactCard::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-12gamzf-ContactCard::before,.svelte-12gamzf-ContactCard::after{--tw-content:''}.svelte-12gamzf-ContactCard:-moz-focusring{outline:auto}.svelte-12gamzf-ContactCard:-moz-ui-invalid{box-shadow:none}.svelte-12gamzf-ContactCard::-webkit-inner-spin-button,.svelte-12gamzf-ContactCard::-webkit-outer-spin-button{height:auto}.svelte-12gamzf-ContactCard::-webkit-search-decoration{-webkit-appearance:none}.svelte-12gamzf-ContactCard::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-12gamzf-ContactCard:disabled{cursor:default}.svelte-12gamzf-ContactCard::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-12gamzf-ContactCard::-webkit-date-and-time-value{min-height:1.5em}.svelte-12gamzf-ContactCard{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-12gamzf-ContactCard,.svelte-12gamzf-ContactCard::before,.svelte-12gamzf-ContactCard::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-12gamzf-ContactCard::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-12gamzf-ContactCard::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.m-2.svelte-12gamzf-ContactCard{margin:0.5rem}.flex.svelte-12gamzf-ContactCard{display:flex}.h-8.svelte-12gamzf-ContactCard{height:2rem}.w-8.svelte-12gamzf-ContactCard{width:2rem}@-webkit-keyframes svelte-12gamzf-ContactCard-spin{to{transform:rotate(360deg)}}@keyframes svelte-12gamzf-ContactCard-spin{to{transform:rotate(360deg)}}.items-center.svelte-12gamzf-ContactCard{align-items:center}.justify-center.svelte-12gamzf-ContactCard{justify-content:center}.bg-contain.svelte-12gamzf-ContactCard{background-size:contain}.bg-no-repeat.svelte-12gamzf-ContactCard{background-repeat:no-repeat}.text-center.svelte-12gamzf-ContactCard{text-align:center}.align-middle.svelte-12gamzf-ContactCard{vertical-align:middle}.text-slate-500.svelte-12gamzf-ContactCard{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
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
			attr(div, "class", "text-slate-500 svelte-12gamzf-ContactCard");
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
			attr(div0, "class", "align-middle w-8 h-8 svelte-12gamzf-ContactCard");
			attr(div1, "class", "align-middle svelte-12gamzf-ContactCard");
			attr(div2, "class", "flex align-middle items-center text-center justify-center bg-contain bg-no-repeat m-2 biggie svelte-12gamzf-ContactCard");
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
	append_styles(target, "svelte-ryiy6k-ContactCard", ".svelte-ryiy6k-ContactCard,.svelte-ryiy6k-ContactCard::before,.svelte-ryiy6k-ContactCard::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-ryiy6k-ContactCard::before,.svelte-ryiy6k-ContactCard::after{--tw-content:''}b.svelte-ryiy6k-ContactCard{font-weight:bolder}input.svelte-ryiy6k-ContactCard{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.svelte-ryiy6k-ContactCard:-moz-focusring{outline:auto}.svelte-ryiy6k-ContactCard:-moz-ui-invalid{box-shadow:none}.svelte-ryiy6k-ContactCard::-webkit-inner-spin-button,.svelte-ryiy6k-ContactCard::-webkit-outer-spin-button{height:auto}.svelte-ryiy6k-ContactCard::-webkit-search-decoration{-webkit-appearance:none}.svelte-ryiy6k-ContactCard::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-ryiy6k-ContactCard::-moz-placeholder{opacity:1;color:#9CA3AF}input.svelte-ryiy6k-ContactCard::placeholder{opacity:1;color:#9CA3AF}.svelte-ryiy6k-ContactCard:disabled{cursor:default}svg.svelte-ryiy6k-ContactCard{display:block;vertical-align:middle}[type='text'].svelte-ryiy6k-ContactCard{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6B7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}[type='text'].svelte-ryiy6k-ContactCard:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#1C64F2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#1C64F2}input.svelte-ryiy6k-ContactCard::-moz-placeholder{color:#6B7280;opacity:1}input.svelte-ryiy6k-ContactCard::placeholder{color:#6B7280;opacity:1}.svelte-ryiy6k-ContactCard::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-ryiy6k-ContactCard::-webkit-date-and-time-value{min-height:1.5em}[type='checkbox'].svelte-ryiy6k-ContactCard{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1C64F2;background-color:#fff;border-color:#6B7280;border-width:1px;--tw-shadow:0 0 #0000}[type='checkbox'].svelte-ryiy6k-ContactCard{border-radius:0px}[type='checkbox'].svelte-ryiy6k-ContactCard:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#1C64F2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[type='checkbox'].svelte-ryiy6k-ContactCard:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox'].svelte-ryiy6k-ContactCard:checked{background-image:url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\\")}[type='checkbox'].svelte-ryiy6k-ContactCard:indeterminate{background-image:url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox'].svelte-ryiy6k-ContactCard:indeterminate:hover,[type='checkbox'].svelte-ryiy6k-ContactCard:indeterminate:focus{border-color:transparent;background-color:currentColor}.svelte-ryiy6k-ContactCard{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-ryiy6k-ContactCard,.svelte-ryiy6k-ContactCard::before,.svelte-ryiy6k-ContactCard::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-ryiy6k-ContactCard::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-ryiy6k-ContactCard::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.z-50.svelte-ryiy6k-ContactCard{z-index:50}.mx-4.svelte-ryiy6k-ContactCard{margin-left:1rem;margin-right:1rem}.mx-1.svelte-ryiy6k-ContactCard{margin-left:0.25rem;margin-right:0.25rem}.flex.svelte-ryiy6k-ContactCard{display:flex}.h-10.svelte-ryiy6k-ContactCard{height:2.5rem}.w-10.svelte-ryiy6k-ContactCard{width:2.5rem}@-webkit-keyframes svelte-ryiy6k-ContactCard-spin{to{transform:rotate(360deg)}}@keyframes svelte-ryiy6k-ContactCard-spin{to{transform:rotate(360deg)}}.flex-row.svelte-ryiy6k-ContactCard{flex-direction:row}.flex-col.svelte-ryiy6k-ContactCard{flex-direction:column}.justify-end.svelte-ryiy6k-ContactCard{justify-content:flex-end}.rounded-sm.svelte-ryiy6k-ContactCard{border-radius:0.125rem}.border.svelte-ryiy6k-ContactCard{border-width:1px}.border-slate-300.svelte-ryiy6k-ContactCard{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.bg-slate-50.svelte-ryiy6k-ContactCard{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.p-4.svelte-ryiy6k-ContactCard{padding:1rem}.text-left.svelte-ryiy6k-ContactCard{text-align:left}.text-sm.svelte-ryiy6k-ContactCard{font-size:0.875rem;line-height:1.25rem}.text-lg.svelte-ryiy6k-ContactCard{font-size:1.125rem;line-height:1.75rem}.drop-shadow-lg.svelte-ryiy6k-ContactCard{--tw-drop-shadow:drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
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
			attr(div0, "class", "text-left border-slate-300 svelte-ryiy6k-ContactCard");
			attr(div1, "class", "flex flex-row justify-end z-50 bg-slate-50 border drop-shadow-lg p-4 mx-4 rounded-sm svelte-ryiy6k-ContactCard");
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
			span.innerHTML = \`Paste the <b class="svelte-ryiy6k-ContactCard">Public Key</b> you want to grant access\`;
			t3 = space();
			create_component(content0.$$.fragment);
			t4 = space();
			create_component(content1.$$.fragment);
			attr(span, "class", "text-sm svelte-ryiy6k-ContactCard");
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
			attr(input, "class", "svelte-ryiy6k-ContactCard");
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
			attr(span, "class", "text-sm mx-1 text-lg svelte-ryiy6k-ContactCard");
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
			attr(input, "class", "svelte-ryiy6k-ContactCard");
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
			span.innerHTML = \`Add <b class="svelte-ryiy6k-ContactCard">Contact</b>\`;
			attr(input, "type", "checkbox");
			input.checked = true;
			attr(input, "class", "svelte-ryiy6k-ContactCard");
			attr(span, "class", "text-sm mx-1 svelte-ryiy6k-ContactCard");
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
			div0.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 752" class="svelte-ryiy6k-ContactCard"><path d="M346.9 153.4c-6.2 0-12.1 5.2-13.7 10.2l-12.4 43.5a176 176 0 0 0-25.2 10.4l-39.5-21.9c-5.3-3-12.7-2-17 2.4l-41 41.1a14.6 14.6 0 0 0-2.4 16.9l22 39.6a171 171 0 0 0-10.4 25l-43.5 12.5c-6 1.7-10.4 7.6-10.4 13.8v58.3c0 6 4.5 12 10.4 13.6L207 431c2.9 8.7 6.5 17 10.5 25.1L195.7 496a14.7 14.7 0 0 0 2.4 16.9l41 41.1a14.6 14.6 0 0 0 17 2.4l39.5-22c8.1 4.2 16.5 7.7 25.2 10.6l12.4 43.3a14.6 14.6 0 0 0 13.7 10.4h58.3c6 0 12-4.5 13.6-10.4l12.4-43.3c8.7-2.9 17.1-6.4 25.2-10.5l39.5 21.9c5.3 3 12.7 2 17-2.4l41-41.1a14.6 14.6 0 0 0 2.4-17l-22-39.6c4.2-8 7.7-16.4 10.6-25.1l43.3-12.3a14.6 14.6 0 0 0 10.4-13.6V347c0-6.2-4.4-12.1-10.4-13.8l-43.5-12.4c-2.8-8.7-6.3-17-10.3-25l21.9-39.7a14.7 14.7 0 0 0-2.4-16.9l-41-41.1a14.6 14.6 0 0 0-17-2.4l-39.5 21.9c-8-4.1-16.5-7.5-25.2-10.4l-12.4-43.5a14.6 14.6 0 0 0-13.6-10.2zm10.6 28.4h37L406 222c1.3 4.7 5.2 8.7 10 10 11.9 3.2 23.2 8 33.8 14 4.2 2.4 9.7 2.5 14 .2l36.6-20.5 26 26-20.4 36.6a14.5 14.5 0 0 0 0 14c6.1 10.6 11 22 14.3 34a14 14 0 0 0 9.7 9.9l40.3 11.4v36.9L530 406a14.5 14.5 0 0 0-9.7 9.8 149 149 0 0 1-14.3 34 14.5 14.5 0 0 0 0 14l20.5 36.6-26 26-36.8-20.5a14.5 14.5 0 0 0-13.9.1c-10.6 6-22 11-33.9 14.2a14.5 14.5 0 0 0-9.9 9.8l-11.4 40.3h-37L346.2 530a14.5 14.5 0 0 0-9.9-9.8c-12-3.3-23.3-8.1-33.9-14.2a14.5 14.5 0 0 0-13.9-.1l-36.7 20.4-26-25.9 20.4-36.7c2.3-4.2 2.3-9.7 0-13.9-6-10.6-11-22-14.2-34a14.5 14.5 0 0 0-9.8-9.8l-40.3-11.5v-36.9l40.3-11.4c4.6-1.3 8.5-5.2 9.8-10a149 149 0 0 1 14.2-34c2.3-4.2 2.3-9.6 0-13.9l-20.5-36.5 26-26 36.8 20.4c4.2 2.3 9.7 2.2 14-.2a146 146 0 0 1 33.8-14 15 15 0 0 0 10-10zm18.5 90c-57.4 0-104.2 46.8-104.2 104.2S318.6 480.2 376 480.2c57.4 0 104.2-46.8 104.2-104.2S433.4 271.8 376 271.8zm0 28.4c42 0 75.8 33.8 75.8 75.8S418 451.8 376 451.8 300.2 418 300.2 376s33.8-75.8 75.8-75.8z" class="svelte-ryiy6k-ContactCard"></path></svg>\`;
			t = space();
			if (if_block) if_block.c();
			attr(div0, "class", "w-10 h-10 svelte-ryiy6k-ContactCard");
			attr(div1, "class", "flex flex-row justify-end svelte-ryiy6k-ContactCard");
			attr(div2, "class", "flex flex-col svelte-ryiy6k-ContactCard");
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
	append_styles(target, "svelte-1aklrav-ContactCard", ".svelte-1aklrav-ContactCard,.svelte-1aklrav-ContactCard::before,.svelte-1aklrav-ContactCard::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-1aklrav-ContactCard::before,.svelte-1aklrav-ContactCard::after{--tw-content:''}input.svelte-1aklrav-ContactCard{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.svelte-1aklrav-ContactCard:-moz-focusring{outline:auto}.svelte-1aklrav-ContactCard:-moz-ui-invalid{box-shadow:none}.svelte-1aklrav-ContactCard::-webkit-inner-spin-button,.svelte-1aklrav-ContactCard::-webkit-outer-spin-button{height:auto}.svelte-1aklrav-ContactCard::-webkit-search-decoration{-webkit-appearance:none}.svelte-1aklrav-ContactCard::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}blockquote.svelte-1aklrav-ContactCard,p.svelte-1aklrav-ContactCard{margin:0}input.svelte-1aklrav-ContactCard::-moz-placeholder{opacity:1;color:#9CA3AF}input.svelte-1aklrav-ContactCard::placeholder{opacity:1;color:#9CA3AF}.svelte-1aklrav-ContactCard:disabled{cursor:default}img.svelte-1aklrav-ContactCard,svg.svelte-1aklrav-ContactCard{display:block;vertical-align:middle}img.svelte-1aklrav-ContactCard{max-width:100%;height:auto}input.svelte-1aklrav-ContactCard::-moz-placeholder{color:#6B7280;opacity:1}input.svelte-1aklrav-ContactCard::placeholder{color:#6B7280;opacity:1}.svelte-1aklrav-ContactCard::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-1aklrav-ContactCard::-webkit-date-and-time-value{min-height:1.5em}[type='file'].svelte-1aklrav-ContactCard{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type='file'].svelte-1aklrav-ContactCard:focus{outline:1px auto inherit}input[type=file].svelte-1aklrav-ContactCard::-webkit-file-upload-button{color:white;background:#1F2937;border:0;font-weight:500;font-size:0.875rem;cursor:pointer;padding-top:0.625rem;padding-bottom:0.625rem;padding-left:2rem;padding-right:1rem;-webkit-margin-start:-1rem;margin-inline-start:-1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}input[type=file].svelte-1aklrav-ContactCard::file-selector-button{color:white;background:#1F2937;border:0;font-weight:500;font-size:0.875rem;cursor:pointer;padding-top:0.625rem;padding-bottom:0.625rem;padding-left:2rem;padding-right:1rem;-webkit-margin-start:-1rem;margin-inline-start:-1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}input[type=file].svelte-1aklrav-ContactCard::-webkit-file-upload-button:hover{background:#374151}input[type=file].svelte-1aklrav-ContactCard::file-selector-button:hover{background:#374151}.svelte-1aklrav-ContactCard{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-1aklrav-ContactCard,.svelte-1aklrav-ContactCard::before,.svelte-1aklrav-ContactCard::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1aklrav-ContactCard::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1aklrav-ContactCard::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.absolute.svelte-1aklrav-ContactCard{position:absolute}.relative.svelte-1aklrav-ContactCard{position:relative}.z-10.svelte-1aklrav-ContactCard{z-index:10}.m-auto.svelte-1aklrav-ContactCard{margin:auto}.my-2.svelte-1aklrav-ContactCard{margin-top:0.5rem;margin-bottom:0.5rem}.mx-auto.svelte-1aklrav-ContactCard{margin-left:auto;margin-right:auto}.mx-2.svelte-1aklrav-ContactCard{margin-left:0.5rem;margin-right:0.5rem}.-mt-20.svelte-1aklrav-ContactCard{margin-top:-5rem}.mt-5.svelte-1aklrav-ContactCard{margin-top:1.25rem}.mb-7.svelte-1aklrav-ContactCard{margin-bottom:1.75rem}.flex.svelte-1aklrav-ContactCard{display:flex}.h-24.svelte-1aklrav-ContactCard{height:6rem}.h-32.svelte-1aklrav-ContactCard{height:8rem}.w-96.svelte-1aklrav-ContactCard{width:24rem}.w-32.svelte-1aklrav-ContactCard{width:8rem}.max-w-lg.svelte-1aklrav-ContactCard{max-width:32rem}.max-w-none.svelte-1aklrav-ContactCard{max-width:none}.flex-none.svelte-1aklrav-ContactCard{flex:none}@-webkit-keyframes svelte-1aklrav-ContactCard-spin{to{transform:rotate(360deg)}}@keyframes svelte-1aklrav-ContactCard-spin{to{transform:rotate(360deg)}}.items-center.svelte-1aklrav-ContactCard{align-items:center}.justify-center.svelte-1aklrav-ContactCard{justify-content:center}.overflow-hidden.svelte-1aklrav-ContactCard{overflow:hidden}.rounded-2xl.svelte-1aklrav-ContactCard{border-radius:1rem}.rounded-full.svelte-1aklrav-ContactCard{border-radius:9999px}.bg-slate-100.svelte-1aklrav-ContactCard{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.bg-white.svelte-1aklrav-ContactCard{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-green-400.svelte-1aklrav-ContactCard{--tw-bg-opacity:1;background-color:rgb(49 196 141 / var(--tw-bg-opacity))}.fill-slate-500.svelte-1aklrav-ContactCard{fill:#64748b}.object-cover.svelte-1aklrav-ContactCard{-o-object-fit:cover;object-fit:cover}.px-3.svelte-1aklrav-ContactCard{padding-left:0.75rem;padding-right:0.75rem}.text-center.svelte-1aklrav-ContactCard{text-align:center}.text-xl.svelte-1aklrav-ContactCard{font-size:1.25rem;line-height:1.75rem}.text-base.svelte-1aklrav-ContactCard{font-size:1rem;line-height:1.5rem}.text-sky-500.svelte-1aklrav-ContactCard{--tw-text-opacity:1;color:rgb(14 165 233 / var(--tw-text-opacity))}.text-white.svelte-1aklrav-ContactCard{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow-xl.svelte-1aklrav-ContactCard{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.drop-shadow-xl.svelte-1aklrav-ContactCard{--tw-drop-shadow:drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
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
			attr(img, "class", "rounded-full bg-white absolute max-w-none object-cover svelte-1aklrav-ContactCard");
			if (!src_url_equal(img.src, img_src_value = /*profile*/ ctx[0].avatar)) attr(img, "src", img_src_value);
			attr(img, "alt", "d");
			set_style(img, "width", "100%");
			set_style(img, "height", "100%");
			set_style(img, "transform-origin", "50% 50% 0px");
			attr(div, "class", "relative z-10 overflow-hidden flex-none mx-auto w-32 h-32 drop-shadow-xl svelte-1aklrav-ContactCard");
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
			attr(path, "class", "svelte-1aklrav-ContactCard");
			attr(svg, "class", "rounded-full bg-white shadow-xl drop-shadow-xl svelte-1aklrav-ContactCard");
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
			attr(span, "class", "text-sky-500 svelte-1aklrav-ContactCard");
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
			attr(div0, "class", "h-24 bg-white svelte-1aklrav-ContactCard");
			set_style(input, "display", "none");
			attr(input, "type", "file");
			attr(input, "accept", ".jpg, .jpeg, .png");
			attr(input, "class", "svelte-1aklrav-ContactCard");
			attr(div1, "class", "-mt-20 h-32 flex justify-center svelte-1aklrav-ContactCard");
			attr(div2, "class", "mt-5 mb-7 px-3 text-center text-xl svelte-1aklrav-ContactCard");
			attr(p, "class", "mx-2 mb-7 text-center text-base svelte-1aklrav-ContactCard");
			attr(blockquote, "class", "svelte-1aklrav-ContactCard");
			attr(footer, "class", "text-center bg-green-400 text-white svelte-1aklrav-ContactCard");
			attr(div3, "class", "m-auto fill-slate-500 my-2 w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-100 shadow-xl svelte-1aklrav-ContactCard");
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
var ContactList = `function noop() {}
const identity = (x) => x;
function assign(tar, src) {
	// @ts-ignore
	for (const k in src) tar[k] = src[k];
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
	return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}
function is_empty(obj) {
	return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
	if (store == null) {
		return noop;
	}
	const unsub = store.subscribe(...callbacks);
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function component_subscribe(component, store, callback) {
	component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
	if (definition) {
		const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
		return definition[0](slot_ctx);
	}
}
function get_slot_context(definition, ctx, $$scope, fn) {
	return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
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
function null_to_empty(value) {
	return value == null ? '' : value;
}
function set_store_value(store, ret, value) {
	store.set(value);
	return ret;
}

const is_client = typeof window !== 'undefined';
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;

const tasks = new Set();
function run_tasks(now) {
	tasks.forEach((task) => {
		if (!task.c(now)) {
			tasks.delete(task);
			task.f();
		}
	});
	if (tasks.size !== 0) raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
	let task;
	if (tasks.size === 0) raf(run_tasks);
	return {
		promise: new Promise((fulfill) => {
			tasks.add((task = { c: callback, f: fulfill }));
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
	if (!node) return document;
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
function empty() {
	return text('');
}
function listen(node, event, handler, options) {
	node.addEventListener(event, handler, options);
	return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
	if (value == null) node.removeAttribute(attribute);
	else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}
function xlink_attr(node, attribute, value) {
	node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function children(element) {
	return Array.from(element.childNodes);
}
function set_data(text, data) {
	data = '' + data;
	if (text.wholeText !== data) text.data = data;
}
function set_input_value(input, value) {
	input.value = value == null ? '' : value;
}
function set_style(node, key, value, important) {
	if (value === null) {
		node.style.removeProperty(key);
	} else {
		node.style.setProperty(key, value, important ? 'important' : '');
	}
}
function toggle_class(element, name, toggle) {
	element.classList[toggle ? 'add' : 'remove'](name);
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
	while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
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
	node.style.animation = \`\${
		animation ? \`\${animation}, \` : ''
	}\${name} \${duration}ms linear \${delay}ms 1 both\`;
	active += 1;
	return name;
}
function delete_rule(node, name) {
	const previous = (node.style.animation || '').split(', ');
	const next = previous.filter(
		name
			? (anim) => anim.indexOf(name) < 0 // remove specific animation
			: (anim) => anim.indexOf('__svelte') === -1 // remove all Svelte animations
	);
	const deleted = previous.length - next.length;
	if (deleted) {
		node.style.animation = next.join(', ');
		active -= deleted;
		if (!active) clear_rules();
	}
}
function clear_rules() {
	raf(() => {
		if (active) return;
		managed_styles.forEach((info) => {
			const { stylesheet } = info;
			let i = stylesheet.cssRules.length;
			while (i--) stylesheet.deleteRule(i);
			info.rules = {};
		});
		managed_styles.clear();
	});
}

function create_animation(node, from, fn, params) {
	if (!from) return noop;
	const to = node.getBoundingClientRect();
	if (
		from.left === to.left &&
		from.right === to.right &&
		from.top === to.top &&
		from.bottom === to.bottom
	)
		return noop;
	const {
		delay = 0,
		duration = 300,
		easing = identity,
		// @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
		start: start_time = now() + delay,
		// @ts-ignore todo:
		end = start_time + duration,
		tick = noop,
		css
	} = fn(node, { from, to }, params);
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
		if (css) delete_rule(node, name);
		running = false;
	}
	loop((now) => {
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
	if (!current_component) throw new Error('Function called outside component initialization');
	return current_component;
}
function onMount(fn) {
	get_current_component().$$.on_mount.push(fn);
}
function createEventDispatcher() {
	const component = get_current_component();
	return (type, detail, { cancelable = false } = {}) => {
		const callbacks = component.$$.callbacks[type];
		if (callbacks) {
			// TODO are there situations where events could be dispatched
			// in a server (non-DOM) environment?
			const event = custom_event(type, detail, { cancelable });
			callbacks.slice().forEach((fn) => {
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
		while (binding_callbacks.length) binding_callbacks.pop()();
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
		if (outroing.has(block)) return;
		outroing.add(block);
		outros.c.push(() => {
			outroing.delete(block);
			if (callback) {
				if (detach) block.d(1);
				callback();
			}
		});
		block.o(local);
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
function update_keyed_each(
	old_blocks,
	dirty,
	get_key,
	dynamic,
	ctx,
	list,
	lookup,
	node,
	destroy,
	create_each_block,
	next,
	get_context
) {
	let o = old_blocks.length;
	let n = list.length;
	let i = o;
	const old_indexes = {};
	while (i--) old_indexes[old_blocks[i].key] = i;
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
		} else if (dynamic) {
			block.p(child_ctx, dirty);
		}
		new_lookup.set(key, (new_blocks[i] = block));
		if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
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
		} else if (!new_lookup.has(old_key)) {
			// remove old block
			destroy(old_block, lookup);
			o--;
		} else if (!lookup.has(new_key) || will_move.has(new_key)) {
			insert(new_block);
		} else if (did_move.has(old_key)) {
			o--;
		} else if (deltas.get(new_key) > deltas.get(old_key)) {
			did_move.add(new_key);
			insert(new_block);
		} else {
			will_move.add(old_key);
			o--;
		}
	}
	while (o--) {
		const old_block = old_blocks[o];
		if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
	}
	while (n) insert(new_blocks[n - 1]);
	return new_blocks;
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
			} else {
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
	component.$$.dirty[(i / 31) | 0] |= 1 << i % 31;
}
function init(
	component,
	options,
	instance,
	create_fragment,
	not_equal,
	props,
	append_styles,
	dirty = [-1]
) {
	const parent_component = current_component;
	set_current_component(component);
	const $$ = (component.$$ = {
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
	});
	append_styles && append_styles($$.root);
	let ready = false;
	$$.ctx = instance
		? instance(component, options.props || {}, (i, ret, ...rest) => {
				const value = rest.length ? rest[0] : ret;
				if ($$.ctx && not_equal($$.ctx[i], ($$.ctx[i] = value))) {
					if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
					if (ready) make_dirty(component, i);
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
		} else {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			$$.fragment && $$.fragment.c();
		}
		if (options.intro) transition_in(component.$$.fragment);
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
		const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
		callbacks.push(callback);
		return () => {
			const index = callbacks.indexOf(callback);
			if (index !== -1) callbacks.splice(index, 1);
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
	const dx = from.left + (from.width * ox) / to.width - (to.left + ox);
	const dy = from.top + (from.height * oy) / to.height - (to.top + oy);
	const { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params;
	return {
		delay,
		duration: is_function(duration) ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
		easing,
		css: (t, u) => {
			const x = u * dx;
			const y = u * dy;
			const sx = t + (u * from.width) / to.width;
			const sy = t + (u * from.height) / to.height;
			return \`transform: \${transform} translate(\${x}px, \${y}px) scale(\${sx}, \${sy});\`;
		}
	};
}

/* src\\lib\\components\\@peerpiper\\Icons.svelte generated by Svelte v3.48.0 */

function create_fragment$7(ctx) {
	let div;

	return {
		c() {
			div = element('div');
			div.innerHTML = \`<svg><symbol id="avatar" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path d="M105 2a129 129 0 0 0 1 253c11 1 33 2 44 0 26-5 48-16 67-35a126 126 0 0 0 38-114A129 129 0 0 0 150 2c-10-2-35-2-45 0zm31 30c23 4 41 24 45 51l3 9 2 6c0 4-1 6-5 14l-7 15c-3 8-11 19-16 24s-5 7-2 13c5 10 13 16 35 23l16 5-3 4a117 117 0 0 1-151 0l-4-4 4-1 17-6c19-6 27-13 31-25l2-5-4-4c-5-6-12-16-15-23l-7-11c-4-6-7-14-7-18 0-3 3-9 5-9l1-3 2-11c6-26 26-43 50-45l8 1z"></path></symbol><symbol id="address" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path d="M412 414a111 111 0 0 1 90-77v-40h31c7 0 13-6 13-13v-15c0-5-2-9-7-11L355 153c-4-2-8-2-12 0l-65 37v-13c0-5-4-9-9-9h-29c-5 0-8 4-8 9v39l-74 42c-4 2-7 7-7 11v15c0 7 6 13 13 13h31v180c0 12 9 21 20 21h203c-13-25-15-56-6-84z"></path><path d="M592 412a81 81 0 0 0-109-36 82 82 0 0 0-36 109l61 108c5 9 18 9 23 0l61-108c12-22 12-49 0-73zm-73 72a35 35 0 1 1 0-70 35 35 0 1 1 0 70z"></path></symbol><symbol id="email" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path d="m582.1 312.4-197.5-128c-4.3-2.8-10-2.8-14.4 0l-199 128c-3.8 2.4-7.8 6.6-7.8 11v230.3c0 7.3 9.3 15.6 16.6 15.6h394.5c7.3 0 14.1-8.3 14.1-15.6V323.4c0-4.4-2.7-8.6-6.4-11zm-385 35.2 113 73.3-113 103zm131.8 88 41.2 26.8a13.2 13.2 0 0 0 14.3 0l41.1-26.8 115 104.7H214zM451.5 421l113-73.3V524zm-74.3-209.8 173.1 112.3-173 112.3-173.1-112.3zm0 200.6c20.7 0 40.9-7.3 56.7-20.6A13.2 13.2 0 0 0 417 371a62 62 0 1 1 22.2-47.5c0 6-4.9 10.9-10.8 10.9a11 11 0 0 1-10.9-10v-.9a40.3 40.3 0 1 0-12.3 29 37 37 0 0 0 60.3-29 88.4 88.4 0 1 0-88.3 88.4zm0-74.3a14 14 0 1 1 0-28 14 14 0 0 1 0 28z"></path></symbol><symbol id="phone" class="icon" width="32px" height="32px" viewBox="0 0 752 752"><path fill-rule="evenodd" d="m587 561-3 3c-96 96-241-7-315-81S92 264 188 168l3-3 107 106-13 14a39 39 0 0 0-5 49 503 503 0 0 0 138 138c16 11 36 9 49-5l14-13zm-92-118 104 103c7-14 4-33-8-45l-51-51a39 39 0 0 0-45-7zM206 153l103 104c7-15 5-33-7-45l-51-51a39 39 0 0 0-45-8z"></path></symbol><symbol id="arrow-left" class="icon" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></symbol><symbol id="arrow-right" class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></symbol><symbol id="arrow-up" class="icon" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></symbol><symbol id="arrow-down" class="icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></symbol><symbol id="check" class="icon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></symbol><symbol id="close" class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></symbol><symbol id="download" class="icon" viewBox="0 0 24 24"><path d="M21 15V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V15"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></symbol><symbol id="edit" class="icon" viewBox="0 0 24 24"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></symbol><symbol id="github" class="icon" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2ZM0 12C0 5.3726 5.3726 0 12 0C18.6274 0 24 5.3726 24 12C24 18.6274 18.6274 24 12 24C5.3726 24 0 18.6274 0 12Z" fill="currentColor" stroke="none"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.59162 22.7357C9.49492 22.6109 9.49492 21.4986 9.59162 19.399C8.55572 19.4347 7.90122 19.3628 7.62812 19.1833C7.21852 18.9139 6.80842 18.0833 6.44457 17.4979C6.08072 16.9125 5.27312 16.8199 4.94702 16.6891C4.62091 16.5582 4.53905 16.0247 5.84562 16.4282C7.15222 16.8316 7.21592 17.9303 7.62812 18.1872C8.04032 18.4441 9.02572 18.3317 9.47242 18.1259C9.91907 17.9201 9.88622 17.1538 9.96587 16.8503C10.0666 16.5669 9.71162 16.5041 9.70382 16.5018C9.26777 16.5018 6.97697 16.0036 6.34772 13.7852C5.71852 11.5669 6.52907 10.117 6.96147 9.49369C7.24972 9.07814 7.22422 8.19254 6.88497 6.83679C8.11677 6.67939 9.06732 7.06709 9.73672 7.99999C9.73737 8.00534 10.6143 7.47854 12.0001 7.47854C13.386 7.47854 13.8777 7.90764 14.2571 7.99999C14.6365 8.09234 14.94 6.36699 17.2834 6.83679C16.7942 7.79839 16.3844 8.99999 16.6972 9.49369C17.0099 9.98739 18.2372 11.5573 17.4833 13.7852C16.9807 15.2706 15.9927 16.1761 14.5192 16.5018C14.3502 16.5557 14.2658 16.6427 14.2658 16.7627C14.2658 16.9427 14.4942 16.9624 14.8233 17.8058C15.0426 18.368 15.0585 19.9739 14.8708 22.6234C14.3953 22.7445 14.0254 22.8257 13.7611 22.8673C13.2924 22.9409 12.7835 22.9822 12.2834 22.9982C11.7834 23.0141 11.6098 23.0123 10.9185 22.948C10.4577 22.9051 10.0154 22.8343 9.59162 22.7357Z" fill="currentColor" stroke="none"></path></symbol><symbol id="git-branch" class="icon" viewBox="0 0 24 24"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></symbol><symbol id="log-in" class="icon" viewBox="0 0 24 24"><path d="M15 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H15"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></symbol><symbol id="maximize" class="icon" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></symbol><symbol id="maximize-2" class="icon" viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></symbol><symbol id="menu" class="icon" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></symbol><symbol id="message-square" class="icon" viewBox="0 0 24 24"><g transform="translate(0, 1)"><path d="M16.5 19H11V15H18V11H22V19H19.5L18 20.5L16.5 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 3H18V15H8.5L6.5 17L4.5 15H2V3Z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 11H9" stroke="white" stroke-width="1.5" stroke-linecap="round"></path><path d="M6 7H12" stroke="white" stroke-width="1.5" stroke-linecap="round"></path></g></symbol><symbol id="minus" class="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></symbol><symbol id="plus" class="icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></symbol><symbol id="save" class="icon" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></symbol><symbol id="link" class="icon" viewBox="0 0 24 24"><path d="M9,7L6,7A2 2 0 0 0 6,17L9,17"></path><path d="M15,7L18,7A2 2 0 0 1 18,17L15,17"></path><path d="M7,12L17,12"></path></symbol><symbol id="chevron" class="icon" viewBox="0 0 24 24"><path d="M2,7 L12,17 L20,7"></path></symbol><symbol id="delete" class="icon" viewBox="0 0 24 24"><path fill="currentColor" stroke="none" d="M22 4.2h-5.6L15 1.6c-.1-.2-.4-.4-.7-.4H9.6c-.2 0-.5.2-.6.4L7.6 4.2H2c-.4 0-.8.4-.8.8s.4.8.8.8h1.8V22c0 .4.3.8.8.8h15c.4 0 .8-.3.8-.8V5.8H22c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM10.8 16.5c0 .4-.3.8-.8.8s-.8-.3-.8-.8V10c0-.4.3-.8.8-.8s.8.3.8.8v6.5zm4 0c0 .4-.3.8-.8.8s-.8-.3-.8-.8V10c0-.4.3-.8.8-.8s.8.3.8.8v6.5z"></path></symbol><symbol id="scanQR" class="icon" width="100%" height="100%" viewBox="0 0 760 760"><path d="M684 630c-31-34-9-38-2-84 7-34 13-75-2-123l-34-64c-22-39-51-89-58-117v-2c-6-24-9-43-9-60-2-22-4-35-20-41h-2c-11-3-22-5-33 2V59c0-22-20-41-43-41H205c-25 0-42 19-42 41v49s-29-26-49-30c-5 0-21 2-32 13a44 44 0 0 0-11 43c2 11 31 50 65 69 7 7 15 11 27 15v3h-5c-49 4-69 64-31 94-34 20-34 65-2 87a54 52 0 0 0 38 92v72c0 23 17 62 42 62h89c13 30 25 41 69 50h7c11 4 31 8 47 6l2 2 7 13c6 11 11 22 13 35 2 6 9 11 16 9 6-3 11-9 9-16-3-15-9-28-16-38l-9-13c-2-7-4-9-11-13l-2-2h-9c-11 2-31-3-43-5l-6-2c-32-6-34-4-47-26h160c23 0 43-17 43-41 0 0-20-60-18-86s24-65 24-65l18-30c9-24-4-47-18-78l-9-15c-11-23-20-47-20-75-2-11 5-41 20-63 7-8 16-19 29-17l5 24c0 17 2 39 11 64 7 33 34 82 58 123l33 63c12 41 7 78 0 112-6 45-31 58 9 101 12 5 20-4 18-15zM205 41h276c9 0 18 9 18 18v19H187V59c0-9 7-18 18-18zm-58 143c-18-11-51-48-51-54-3-7-3-17 4-22 5-4 14-4 16-6 4 0 47 30 47 30v58zm11 60a30 29 0 1 1 0 58 30 29 0 0 1 0-58zm0 145a30 29 0 1 1 0-58 30 29 0 0 1 0 58zm-29 54a30 29 0 1 1 60 0 30 29 0 0 1-60 0zm85 0c0-18-9-33-22-41 31-22 31-67-3-87 34-21 34-69-2-88V102h312v62c-15 26-24 59-22 76 0 30 11 58 22 82 31 267-67 211-312 211v-45c16-9 27-26 27-45zm267 161H205c-11 0-18-28-18-38v-9h312v9c0 10-9 38-18 38z"></path><path d="m306 191-2 18v18h5c4 0 4 2 4 3 1 4 0 5-4 5-5 0-5 0-5 10 0 8 0 8 5 8 4 0 5-1 5-5l3-3c5 0 5 0 5 13 2 13 2 13 5 13 4 2 5 0 5-3s2-5 5-5 3 0 3-5 0-5 5-5 5 0 5-3c0-5 0-5-5-5-3 0-5 0-5 5 0 3 0 3-3 3-5 0-5 0-5-18l-1-16-4-2c-3 0-5-1-5-5l-3-3c-3 0-5-2-5-10s-1-8-3-10z"></path><path d="m352 191-2 5c0 3 0 3-8 3-10 0-10 0-10 5 0 3 0 5 5 5 3 0 3 0 3 13v13h18v9c0 9 0 9 5 9h5v-26h10c8 0 8 0 8-5s0-5-8-5c-10 0-10 0-10-5 0-3 0-3-5-3s-5 0-5 3c0 4 2 5 5 5 5 0 5 2 5 5 0 5 0 5-5 5-3 0-5-2-5-5s-1-5-4-5c-4 0-4 0-4-10 0-8 0-8 5-8 3 0 3 0 3-5-1-3-4-6-6-3zm26 2c-1 5 0 6 5 6 3 0 3 0 3-5-1-5-8-6-9-1zm-146 29v31h62v-62h-62Zm54 0v23h-46v-46h46z"></path><path d="M250 222v13h26v-26h-26Zm146 0v31h63v-62h-63zm54 0v23h-46v-46h46z"></path><path d="M414 222v13h27v-26h-27zm-37 15v10l4 6c5 0 5 0 5-8 0-10 0-10-3-10zm-25 18-2 5c0 2 2 3 5 3s3 0 3-5c-1-3-4-6-6-3zm-122 10v10l5 6c5 0 5 2 5 5 0 5 0 5-5 5h-5v26h20v5c0 5 0 5 5 5 3 0 3 0 3-5 0-3-1-5-5-5l-3-3c0-3-1-5-5-5-5 0-5 0-5-10 0-8 0-8 5-8s5 0 5 5c0 12 0 13 5 13 3 0 3 2 3 5s2 3 5 3c5 0 5 0 5-3s-1-5-5-5c-5 0-5 0-5-10v-8h10c8 0 8 0 8 5 0 3 2 3 5 3 5 0 5 0 5 5s0 5-5 5-5 0-5 10c0 8 0 8-3 8s-5 2-5 4c0 4 5 6 13 4 4 0 5-1 5-4 0-2 2-4 5-4s3 2 3 5 2 3 15 3c5 0 5 0 5 5s0 5 5 5c3 0 3 0 3 10 0 8 0 8 5 8h5v-13c2-13 2-13 5-15 2 0 3-1 3-4 0-4 2-4 5-4 5 0 5 0 5 5s8 5 8 0c2-3 2-3 10-5 9 0 9 0 9-5s0-5-10-5c-9 0-9 0-9-3s2-5 5-5c4 0 5-1 5-5 0-3 0-5-5-5-3 0-5-1-5-5 0-1 0-3 5-3 4-1 5-1 5-10 0-8 0-8-5-8h-8c-5 0-5 0-5 8-1 9-1 9-5 10-3 0-5 2-5 5 0 2 0 3-3 3-5 0-5 0-5 5s0 5-5 5c-3 0-5 0-5 3 0 4 0 5-3 5-5 0-5 0-5 5 0 4 0 5 5 5 3 0 3 0 3 4 0 6-8 6-8 1-1-3-1-5-10-5-10 0-10 0-10-5s0-5-3-5-5-1-5-5c0-3 0-3 10-3 8 0 8 0 8 5 0 3 0 3 5 3 7-1 7-6 0-8-5 0-5 0-5-10 0-8 0-8 5-8 4 0 5 2 5 5 0 5 8 5 8 0 0-3 2-5 5-5 4 0 4-1 4-5 1-3 0-3-14-5-13 0-13 0-13-3 0-5 0-5-5-5s-5 0-5 3c0 4 2 5 5 5 5 0 5 2 5 5 0 5 0 5-5 5s-5 0-5-5v-5h-36v-3c0-7-8-7-8-2 0 4-1 5-5 5-5 0-5 0-5-3s2-5 5-5c4 0 5-2 5-5s-1-3-10-5zm64 29c0 5 0 5-3 5s-5 0-5-3 2-5 5-5 3 2 3 5zm56 10c0 4-1 5-5 5-3 0-5 2-5 5 0 2 0 3-3 3s-5 0-5-3 2-5 5-5 3 0 3-5 0-5 5-5c4 0 4 2 4 5z"></path><path d="M268 268c2 3 2 3 13 3 12 0 13 0 13-3v-5h-26Zm74-3c-2 2-2 6 2 6 3 2 6 0 6-3-1-5-6-6-8-3zm35 2c0 3 3 6 6 6l3-6c0-4 0-4-3-4zm29-2c-2 2-2 6 2 6 3 2 6 0 6-3-1-5-6-6-8-3zm16 8c0 8 0 8-4 8s-4 0-4 5c0 4 2 5 5 5 2 0 3-1 3-5 0-5 2-5 5-5 4 0 5 0 5-3 0-5 0-5 10-5 8 0 8 0 8 3 0 4-1 5-5 5-3 0-4 2-4 5 0 4-2 5-5 5-2 0-4 2-4 5s2 3 4 3c3 0 5 2 5 5 0 4 1 5 4 5 4 0 5 2 5 5s2 3 5 3h5v-52l-19-2h-19zm-36 5c0 3 0 3-3 3-5 0-6 2-6 7 3 5 8 3 9-2 0-3 2-5 5-5 4 0 5-1 5-5 0-3 0-3-5-3s-5 0-5 3zm10 26c0 13 0 13 5 13 3 0 3 0 3-13s0-13-3-13c-5 0-5 0-5 13zm28 7-2 3c0 2 2 3 5 3 5 0 5 0 5-5 0-3 0-3-3-3zm-8 8-2 5c0 2 2 3 5 3s3 0 3-5c-1-3-4-6-6-3zm-30 12c0 3-1 4-5 4s-4 2-4 15 0 13-4 13c-5 0-5 0-5 5s0 5-8 5c-10 0-10 0-10 4 0 3 2 4 5 4s3 0 3 5 0 5-3 5-5-1-5-5c0-3-1-5-5-5-3 0-5 2-5 5 0 4-1 5-3 5-3 0-5-1-5-5 0-3-1-5-5-5-3 0-5 2-5 5 0 4-1 5-5 5s-4 8 0 8 5 2 5 5c0 5 0 5-3 5s-5-1-5-5c0-3-1-5-5-5-3 2-3 2-3 10v10h8c7 0 8-1 8-5 0-5 0-5 10-5 8 0 8 0 8 5 2 4 2 4 10 5h8v-10c2-8 2-10 5-10 4 0 5-1 5-4 0-4 2-4 4-4 5 0 5 0 5 8 1 9 1 9 4 10 5 0 5 0 5-8v-10h15c13 0 13 0 13 4 0 3-1 4-5 4-3 0-3 2-3 10v10h54v-10c0-8-1-8-5-8-3 0-5 0-5 3 0 5-1 5-5 5-3 0-4-1-4-5 0-5 0-5 4-5s5 0 5-3 2-5 5-5c4 0 4-1 4-5 0-3 0-3-9-3h-9v16h-10c-9 0-9 0-9-3s-1-5-4-5c-4 0-4 0-4-5 0-3 0-5 4-5 3 0 4 0 4-3 0-5 0-5 19-5l18-1v-7l-18-2c-19 0-19 0-19-3s2-5 5-5c4 0 5-1 5-5 0-5 0-5-5-5-3 0-5-1-5-5-1-3-1-3-9-5-9 0-9 0-9-4s0-4-9-4-9 0-9 4zm28 27v15h-26l-2-15v-13h14l14 2v13zm-37 20c0 3 0 3-4 3-3 0-5 0-5-3s2-5 5-5c4 0 4 2 4 5zm-27 26c0 5 0 5-5 5s-5 0-5-3c0-5 2-7 7-7 2 0 3 2 3 5z"></path><path d="M396 360c0 3 2 3 5 3s3 0 3-3 0-5-3-5-5 2-5 5zm36-28c0 3 2 3 5 3 4 0 4 0 4-3s0-5-4-5c-3 0-5 2-5 5zm-202 5c-1 7 2 8 10 8 9 0 10-1 10-5 0-3-1-3-10-5zm30 0-2 5c0 3 0 3 5 3 4 0 5-1 5-3 0-5-5-8-8-5zm28 0-2 5c0 2 2 3 5 3s3 0 3-5c0-3-4-6-6-3zm54 0c-3 2-2 8 3 8 4 0 5-1 5-3 0-3-1-7-5-7zm108 0v10c2 7 2 7 5 7 4 1 5 0 5-9 0-8-1-8-5-10zm-146 13c2 5 9 7 10 2 0-5-1-7-6-7-4 0-4 0-4 5zm46 0c0 4 2 4 5 4 2 0 3 0 3-4 0-5 0-5-4-5s-4 0-4 5zm-118 36v32h62v-63h-62Zm54 0v23h-46v-46h46z"></path><path d="M250 386v13h26v-26h-26Zm54-13c0 8 0 8 5 8 4-1 4-1 4-9 1-7 0-7-4-9-5 0-5 0-5 10zm36-8c-1 5 2 8 5 8 4 0 5-1 5-5 0-3-1-5-5-5zm-8 13c0 3 2 3 5 3s3 0 3-3 0-5-3-5-5 2-5 5zm90 5c-1 5 2 8 5 8 4 0 5-1 5-5 0-3-1-5-5-5zm-54 31c0 4 2 5 5 5 4 0 4 0 4-5s0-5-5-5c-4 0-4 0-4 5z"></path></symbol></svg>\`;
			set_style(div, 'display', 'none');
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
		init(this, options, null, create_fragment$7, safe_not_equal, {});
	}
}

/* src\\lib\\components\\@peerpiper\\Icon.svelte generated by Svelte v3.48.0 */

function add_css$5(target) {
	append_styles(
		target,
		'svelte-wkpedn-ContactList',
		'.icon.svelte-wkpedn-ContactList{position:relative;overflow:hidden;vertical-align:middle;-o-object-fit:contain;object-fit:contain;transform-origin:center center;stroke:currentColor;stroke-width:1;stroke-linecap:round;stroke-linejoin:round;fill:currentColor}'
	);
}

function create_fragment$6(ctx) {
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
			svg = svg_element('svg');
			use = svg_element('use');
			t0 = space();
			if (default_slot) default_slot.c();
			t1 = space();
			create_component(icons.$$.fragment);
			xlink_attr(use, 'xlink:href', (use_xlink_href_value = '#' + /*name*/ ctx[0]));
			attr(svg, 'width', /*size*/ ctx[1]);
			attr(svg, 'height', /*size*/ ctx[1]);
			attr(svg, 'class', 'icon  svelte-wkpedn-ContactList');
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
			if (
				!current ||
				(dirty & /*name*/ 1 &&
					use_xlink_href_value !== (use_xlink_href_value = '#' + /*name*/ ctx[0]))
			) {
				xlink_attr(use, 'xlink:href', use_xlink_href_value);
			}

			if (!current || dirty & /*size*/ 2) {
				attr(svg, 'width', /*size*/ ctx[1]);
			}

			if (!current || dirty & /*size*/ 2) {
				attr(svg, 'height', /*size*/ ctx[1]);
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

function instance$6($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { name } = $$props;
	let { size = '100%' } = $$props;

	$$self.$$set = ($$props) => {
		if ('name' in $$props) $$invalidate(0, (name = $$props.name));
		if ('size' in $$props) $$invalidate(1, (size = $$props.size));
		if ('$$scope' in $$props) $$invalidate(2, ($$scope = $$props.$$scope));
	};

	return [name, size, $$scope, slots];
}

class Icon extends SvelteComponent {
	constructor(options) {
		super();
		init(
			this,
			options,
			instance$6,
			create_fragment$6,
			safe_not_equal,
			{ name: 0, size: 1 },
			add_css$5
		);
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

/* src\\lib\\components\\@peerpiper\\Modal.svelte generated by Svelte v3.48.0 */

function add_css$4(target) {
	append_styles(
		target,
		'svelte-7dgeyu-ContactList',
		'.hide.svelte-7dgeyu-ContactList{display:none}.modal.svelte-7dgeyu-ContactList{display:block;position:fixed;z-index:99999;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.4)}.modal-content.svelte-7dgeyu-ContactList{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%}.close.svelte-7dgeyu-ContactList{color:#aaa;float:right;font-size:3.5em;font-weight:bold;line-height:0.5;padding:0.25em}.close.svelte-7dgeyu-ContactList:hover,.close.svelte-7dgeyu-ContactList:focus{color:black;text-decoration:none;cursor:pointer}'
	);
}

function create_fragment$5(ctx) {
	let div2;
	let div1;
	let span;
	let t1;
	let div0;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			div2 = element('div');
			div1 = element('div');
			span = element('span');
			span.textContent = '\xD7';
			t1 = space();
			div0 = element('div');
			if (default_slot) default_slot.c();
			attr(span, 'class', 'close svelte-7dgeyu-ContactList');
			attr(div1, 'class', 'modal-content svelte-7dgeyu-ContactList');
			attr(div2, 'class', 'svelte-7dgeyu-ContactList');
			toggle_class(div2, 'modal', /*modal*/ ctx[0]);
			toggle_class(div2, 'hide', !(/*modal*/ ctx[0]));
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div1);
			append(div1, span);
			append(div1, t1);
			append(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen(span, 'click', /*handleClose*/ ctx[1]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
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

			if (dirty & /*modal*/ 1) {
				toggle_class(div2, 'modal', /*modal*/ ctx[0]);
			}

			if (dirty & /*modal*/ 1) {
				toggle_class(div2, 'hide', !(/*modal*/ ctx[0]));
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
			if (detaching) detach(div2);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { modal } = $$props;
	const dispatch = createEventDispatcher();

	const handleClose = () => {
		$$invalidate(0, (modal = false));
		console.log('Closing', { modal });
		dispatch('closeModal', null);
	};

	$$self.$$set = ($$props) => {
		if ('modal' in $$props) $$invalidate(0, (modal = $$props.modal));
		if ('$$scope' in $$props) $$invalidate(2, ($$scope = $$props.$$scope));
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*modal*/ 1) {
			modal && console.log({ modal });
		}
	};

	return [modal, handleClose, $$scope, slots];
}

class Modal extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$5, create_fragment$5, safe_not_equal, { modal: 0 }, add_css$4);
	}

	get modal() {
		return this.$$.ctx[0];
	}

	set modal(modal) {
		this.$$set({ modal });
		flush();
	}
}

/* src\\lib\\components\\@peerpiper\\Scan.svelte generated by Svelte v3.48.0 */

function create_if_block$1(ctx) {
	let modal;
	let current;

	modal = new Modal({
		props: {
			modal: /*scan*/ ctx[2],
			$$slots: { default: [create_default_slot] },
			$$scope: { ctx }
		}
	});

	modal.$on('closeModal', /*handleModalClose*/ ctx[4]);

	return {
		c() {
			create_component(modal.$$.fragment);
		},
		m(target, anchor) {
			mount_component(modal, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const modal_changes = {};
			if (dirty & /*scan*/ 4) modal_changes.modal = /*scan*/ ctx[2];

			if (dirty & /*$$scope, scan, pubkey*/ 133) {
				modal_changes.$$scope = { dirty, ctx };
			}

			modal.$set(modal_changes);
		},
		i(local) {
			if (current) return;
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

// (36:1) <Modal modal={scan} on:closeModal={handleModalClose}>
function create_default_slot(ctx) {
	let switch_instance;
	let updating_result;
	let switch_instance_anchor;
	let current;

	function switch_instance_result_binding(value) {
		/*switch_instance_result_binding*/ ctx[5](value);
	}

	var switch_value = /*scan*/ ctx[2];

	function switch_props(ctx) {
		let switch_instance_props = {};

		if (/*pubkey*/ ctx[0] !== void 0) {
			switch_instance_props.result = /*pubkey*/ ctx[0];
		}

		return { props: switch_instance_props };
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
		binding_callbacks.push(() => bind(switch_instance, 'result', switch_instance_result_binding));
		switch_instance.$on('successfulScan', /*successfulScan_handler*/ ctx[6]);
	}

	return {
		c() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const switch_instance_changes = {};

			if (!updating_result && dirty & /*pubkey*/ 1) {
				updating_result = true;
				switch_instance_changes.result = /*pubkey*/ ctx[0];
				add_flush_callback(() => (updating_result = false));
			}

			if (switch_value !== (switch_value = /*scan*/ ctx[2])) {
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
					binding_callbacks.push(() =>
						bind(switch_instance, 'result', switch_instance_result_binding)
					);
					switch_instance.$on('successfulScan', /*successfulScan_handler*/ ctx[6]);
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(
						switch_instance,
						switch_instance_anchor.parentNode,
						switch_instance_anchor
					);
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
			if (detaching) detach(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};
}

function create_fragment$4(ctx) {
	let div1;
	let div0;
	let icon;
	let t;
	let if_block_anchor;
	let current;
	let mounted;
	let dispose;
	icon = new Icon({ props: { name: 'scanQR' } });
	let if_block = /*Scanner*/ ctx[1] && /*scan*/ ctx[2] && create_if_block$1(ctx);

	return {
		c() {
			div1 = element('div');
			div0 = element('div');
			create_component(icon.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			attr(
				div0,
				'class',
				'text-slate-800 w-16 h-16 cursor-pointer font-bold rounded hover:scale-125 transition duration-150 ease-in-out'
			);
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			mount_component(icon, div0, null);
			insert(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = listen(div1, 'click', /*handleClick*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*Scanner*/ ctx[1] && /*scan*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*Scanner, scan*/ 6) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
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
			transition_in(icon.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			destroy_component(icon);
			if (detaching) detach(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
			mounted = false;
			dispose();
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	let { pubkey } = $$props;
	let Scanner;
	let scan;

	onMount(async () => {
		$$invalidate(
			1,
			({ Scanner } = await Promise.resolve().then(function () {
				return index;
			})),
			Scanner
		);
		console.log({ Scanner });
	});

	function handleClick(e) {
		$$invalidate(2, (scan = Scanner));
	}

	function handleModalClose() {
		console.log('Got close modal');
		$$invalidate(2, (scan = false));
	} // selected?.stopMediaStream();

	function switch_instance_result_binding(value) {
		pubkey = value;
		$$invalidate(0, pubkey);
	}

	const successfulScan_handler = (data) => {
		const parsed = JSON.parse(data.detail);
		console.log(\`Scanned \`, { parsed });
		$$invalidate(0, (pubkey = parsed.pubKeyHex));
		$$invalidate(2, (scan = false));
	};

	$$self.$$set = ($$props) => {
		if ('pubkey' in $$props) $$invalidate(0, (pubkey = $$props.pubkey));
	};

	return [
		pubkey,
		Scanner,
		scan,
		handleClick,
		handleModalClose,
		switch_instance_result_binding,
		successfulScan_handler
	];
}

class Scan extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$4, create_fragment$4, safe_not_equal, { pubkey: 0 });
	}

	get pubkey() {
		return this.$$.ctx[0];
	}

	set pubkey(pubkey) {
		this.$$set({ pubkey });
		flush();
	}
}

/* src\\lib\\components\\@peerpiper\\ContactList.svelte generated by Svelte v3.48.0 */

function add_css$3(target) {
	append_styles(
		target,
		'svelte-1u8ba31-ContactList',
		'.svelte-1u8ba31-ContactList,.svelte-1u8ba31-ContactList::before,.svelte-1u8ba31-ContactList::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-1u8ba31-ContactList::before,.svelte-1u8ba31-ContactList::after{--tw-content:\\'\\'}button.svelte-1u8ba31-ContactList,input.svelte-1u8ba31-ContactList{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-1u8ba31-ContactList{text-transform:none}button.svelte-1u8ba31-ContactList{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-1u8ba31-ContactList:-moz-focusring{outline:auto}.svelte-1u8ba31-ContactList:-moz-ui-invalid{box-shadow:none}.svelte-1u8ba31-ContactList::-webkit-inner-spin-button,.svelte-1u8ba31-ContactList::-webkit-outer-spin-button{height:auto}.svelte-1u8ba31-ContactList::-webkit-search-decoration{-webkit-appearance:none}.svelte-1u8ba31-ContactList::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-1u8ba31-ContactList::-moz-placeholder{opacity:1;color:#9CA3AF}input.svelte-1u8ba31-ContactList::placeholder{opacity:1;color:#9CA3AF}button.svelte-1u8ba31-ContactList{cursor:pointer}.svelte-1u8ba31-ContactList:disabled{cursor:default}[type=\\'text\\'].svelte-1u8ba31-ContactList{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6B7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}[type=\\'text\\'].svelte-1u8ba31-ContactList:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#1C64F2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#1C64F2}input.svelte-1u8ba31-ContactList::-moz-placeholder{color:#6B7280;opacity:1}input.svelte-1u8ba31-ContactList::placeholder{color:#6B7280;opacity:1}.svelte-1u8ba31-ContactList::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-1u8ba31-ContactList::-webkit-date-and-time-value{min-height:1.5em}.svelte-1u8ba31-ContactList{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.svelte-1u8ba31-ContactList,.svelte-1u8ba31-ContactList::before,.svelte-1u8ba31-ContactList::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1u8ba31-ContactList::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1u8ba31-ContactList::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.m-4.svelte-1u8ba31-ContactList{margin:1rem}.mx-4.svelte-1u8ba31-ContactList{margin-left:1rem;margin-right:1rem}.ml-4.svelte-1u8ba31-ContactList{margin-left:1rem}.mr-4.svelte-1u8ba31-ContactList{margin-right:1rem}.flex.svelte-1u8ba31-ContactList{display:flex}.w-4\\\\/5.svelte-1u8ba31-ContactList{width:80%}.w-full.svelte-1u8ba31-ContactList{width:100%}.flex-1.svelte-1u8ba31-ContactList{flex:1 1 0%}@-webkit-keyframes svelte-1u8ba31-ContactList-spin{to{transform:rotate(360deg)}}@keyframes svelte-1u8ba31-ContactList-spin{to{transform:rotate(360deg)}}.flex-row.svelte-1u8ba31-ContactList{flex-direction:row}.items-center.svelte-1u8ba31-ContactList{align-items:center}.break-all.svelte-1u8ba31-ContactList{word-break:break-all}.rounded.svelte-1u8ba31-ContactList{border-radius:0.25rem}.rounded-xl.svelte-1u8ba31-ContactList{border-radius:0.75rem}.border-r-gray-400.svelte-1u8ba31-ContactList{--tw-border-opacity:1;border-right-color:rgb(156 163 175 / var(--tw-border-opacity))}.bg-gray-50.svelte-1u8ba31-ContactList{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-100.svelte-1u8ba31-ContactList{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-blue-500.svelte-1u8ba31-ContactList{--tw-bg-opacity:1;background-color:rgb(63 131 248 / var(--tw-bg-opacity))}.p-4.svelte-1u8ba31-ContactList{padding:1rem}.p-1.svelte-1u8ba31-ContactList{padding:0.25rem}.py-2.svelte-1u8ba31-ContactList{padding-top:0.5rem;padding-bottom:0.5rem}.px-4.svelte-1u8ba31-ContactList{padding-left:1rem;padding-right:1rem}.text-center.svelte-1u8ba31-ContactList{text-align:center}.font-sans.svelte-1u8ba31-ContactList{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}.font-mono.svelte-1u8ba31-ContactList{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace}.font-bold.svelte-1u8ba31-ContactList{font-weight:700}.text-white.svelte-1u8ba31-ContactList{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow-xl.svelte-1u8ba31-ContactList{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.hover\\\\:bg-blue-700.svelte-1u8ba31-ContactList:hover{--tw-bg-opacity:1;background-color:rgb(26 86 219 / var(--tw-bg-opacity))}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}'
	);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (48:1) {#each contacts as contact (contact)}
function create_each_block(key_1, ctx) {
	let div2;
	let div0;
	let t0_value = /*contact*/ ctx[9].handle + '';
	let t0;
	let t1;
	let div1;
	let t2_value = /*contact*/ ctx[9].pubkey + '';
	let t2;
	let t3;
	let rect;
	let stop_animation = noop;

	return {
		key: key_1,
		first: null,
		c() {
			div2 = element('div');
			div0 = element('div');
			t0 = text(t0_value);
			t1 = space();
			div1 = element('div');
			t2 = text(t2_value);
			t3 = space();
			attr(
				div0,
				'class',
				'flex-1 font-sans bg-gray-100 ml-4 p-4 border-r-gray-400 svelte-1u8ba31-ContactList'
			);
			attr(
				div1,
				'class',
				'flex-1 font-mono bg-gray-100 mr-4 p-4 break-all svelte-1u8ba31-ContactList'
			);
			attr(div2, 'class', 'flex flex-row mx-4 bg-gray-50 rounded p-4  svelte-1u8ba31-ContactList');
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
			if (dirty & /*contacts*/ 1 && t0_value !== (t0_value = /*contact*/ ctx[9].handle + ''))
				set_data(t0, t0_value);
			if (dirty & /*contacts*/ 1 && t2_value !== (t2_value = /*contact*/ ctx[9].pubkey + ''))
				set_data(t2, t2_value);
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

function create_fragment$3(ctx) {
	let div7;
	let div2;
	let div0;
	let t1;
	let div1;
	let scan;
	let updating_pubkey;
	let t2;
	let div6;
	let div3;
	let input0;
	let t3;
	let div4;
	let input1;
	let t4;
	let div5;
	let button;
	let t6;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let current;
	let mounted;
	let dispose;

	function scan_pubkey_binding(value) {
		/*scan_pubkey_binding*/ ctx[3](value);
	}

	let scan_props = {};

	if (/*pubkey*/ ctx[2] !== void 0) {
		scan_props.pubkey = /*pubkey*/ ctx[2];
	}

	scan = new Scan({ props: scan_props });
	binding_callbacks.push(() => bind(scan, 'pubkey', scan_pubkey_binding));
	let each_value = /*contacts*/ ctx[0];
	const get_key = (ctx) => /*contact*/ ctx[9];

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, (each_blocks[i] = create_each_block(key, child_ctx)));
	}

	return {
		c() {
			div7 = element('div');
			div2 = element('div');
			div0 = element('div');
			div0.textContent = 'Scan their PeerPiper Key to add';
			t1 = space();
			div1 = element('div');
			create_component(scan.$$.fragment);
			t2 = space();
			div6 = element('div');
			div3 = element('div');
			input0 = element('input');
			t3 = space();
			div4 = element('div');
			input1 = element('input');
			t4 = space();
			div5 = element('div');
			button = element('button');
			button.textContent = 'Add';
			t6 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(div0, 'class', 'flex-1 svelte-1u8ba31-ContactList');
			attr(div1, 'class', 'svelte-1u8ba31-ContactList');
			attr(
				div2,
				'class',
				'flex flex-row mx-4 bg-gray-50 rounded p-4 items-center text-center svelte-1u8ba31-ContactList'
			);
			attr(input0, 'type', 'text');
			attr(input0, 'class', 'w-full svelte-1u8ba31-ContactList');
			attr(input0, 'placeholder', '@handle / nickname');
			attr(
				div3,
				'class',
				'flex-1 font-sans bg-gray-100 ml-4 p-1 rounded-xl border-r-gray-400 svelte-1u8ba31-ContactList'
			);
			attr(input1, 'type', 'text');
			attr(input1, 'class', 'w-full svelte-1u8ba31-ContactList');
			attr(input1, 'placeholder', 'their public key');
			attr(
				div4,
				'class',
				'flex-1 font-mono bg-gray-100 mr-4 p-1 rounded-xl svelte-1u8ba31-ContactList'
			);
			attr(
				button,
				'class',
				'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-xl svelte-1u8ba31-ContactList'
			);
			attr(div5, 'class', 'svelte-1u8ba31-ContactList');
			attr(
				div6,
				'class',
				'flex flex-row mx-4 bg-gray-50 rounded p-4 items-center svelte-1u8ba31-ContactList'
			);
			attr(div7, 'class', 'm-4 w-auto svelte-1u8ba31-ContactList');
		},
		m(target, anchor) {
			insert(target, div7, anchor);
			append(div7, div2);
			append(div2, div0);
			append(div2, t1);
			append(div2, div1);
			mount_component(scan, div1, null);
			append(div7, t2);
			append(div7, div6);
			append(div6, div3);
			append(div3, input0);
			set_input_value(input0, /*handle*/ ctx[1]);
			append(div6, t3);
			append(div6, div4);
			append(div4, input1);
			set_input_value(input1, /*pubkey*/ ctx[2]);
			append(div6, t4);
			append(div6, div5);
			append(div5, button);
			append(div7, t6);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div7, null);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen(input0, 'input', /*input0_input_handler*/ ctx[4]),
					listen(input1, 'input', /*input1_input_handler*/ ctx[5]),
					listen(button, 'click', /*click_handler*/ ctx[6])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			const scan_changes = {};

			if (!updating_pubkey && dirty & /*pubkey*/ 4) {
				updating_pubkey = true;
				scan_changes.pubkey = /*pubkey*/ ctx[2];
				add_flush_callback(() => (updating_pubkey = false));
			}

			scan.$set(scan_changes);

			if (dirty & /*handle*/ 2 && input0.value !== /*handle*/ ctx[1]) {
				set_input_value(input0, /*handle*/ ctx[1]);
			}

			if (dirty & /*pubkey*/ 4 && input1.value !== /*pubkey*/ ctx[2]) {
				set_input_value(input1, /*pubkey*/ ctx[2]);
			}

			if (dirty & /*contacts*/ 1) {
				each_value = /*contacts*/ ctx[0];
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();
				each_blocks = update_keyed_each(
					each_blocks,
					dirty,
					get_key,
					1,
					ctx,
					each_value,
					each_1_lookup,
					div7,
					fix_and_destroy_block,
					create_each_block,
					null,
					get_each_context
				);
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();
			}
		},
		i(local) {
			if (current) return;
			transition_in(scan.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(scan.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div7);
			destroy_component(scan);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			mounted = false;
			run_all(dispose);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let handle, pubkey;

	let defaultContact = {
		pubkey: 'GnHDprayyzahnWjDqvQ9AGWsmjojWymVNztGHNr4S7an',
		handle: 'douganderson444'
	};

	let { contacts = [defaultContact] } = $$props;

	function scan_pubkey_binding(value) {
		pubkey = value;
		$$invalidate(2, pubkey);
	}

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
		$$invalidate(0, (contacts = [{ handle, pubkey }, ...contacts]));
	};

	$$self.$$set = ($$props) => {
		if ('contacts' in $$props) $$invalidate(0, (contacts = $$props.contacts));
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*contacts*/ 1) {
			// this fires when todos change; let's emit an event to update any listeners consuming this component
			if (contacts) {
				dispatch('change', { contacts });
				dispatch('loadContacts', contacts);
			}
		}
	};

	return [
		contacts,
		handle,
		pubkey,
		scan_pubkey_binding,
		input0_input_handler,
		input1_input_handler,
		click_handler
	];
}

class ContactList extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$3, create_fragment$3, safe_not_equal, { contacts: 0 }, add_css$3);
	}

	get contacts() {
		return this.$$.ctx[0];
	}

	set contacts(contacts) {
		this.$$set({ contacts });
		flush();
	}
}

const subscriber_queue = [];
/**
 * Create a \`Writable\` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
	let stop;
	const subscribers = new Set();
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}
	function update(fn) {
		set(fn(value));
	}
	function subscribe(run, invalidate = noop) {
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set) || noop;
		}
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

const stream = writable(null);
const error = writable(null);
const status = writable(null);

var commonjsGlobal =
	typeof globalThis !== 'undefined'
		? globalThis
		: typeof window !== 'undefined'
		? window
		: typeof global !== 'undefined'
		? global
		: typeof self !== 'undefined'
		? self
		: {};

function getDefaultExportFromCjs(x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsQR$1 = { exports: {} };

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(typeof self !== 'undefined' ? self : commonjsGlobal, function () {
		return /******/ (function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/ var installedModules = {};
			/******/
			/******/ // The require function
			/******/ function __webpack_require__(moduleId) {
				/******/
				/******/ // Check if module is in cache
				/******/ if (installedModules[moduleId]) {
					/******/ return installedModules[moduleId].exports;
					/******/
				}
				/******/ // Create a new module (and put it into the cache)
				/******/ var module = (installedModules[moduleId] = {
					/******/ i: moduleId,
					/******/ l: false,
					/******/ exports: {}
					/******/
				});
				/******/
				/******/ // Execute the module function
				/******/ modules[moduleId].call(
					module.exports,
					module,
					module.exports,
					__webpack_require__
				);
				/******/
				/******/ // Flag the module as loaded
				/******/ module.l = true;
				/******/
				/******/ // Return the exports of the module
				/******/ return module.exports;
				/******/
			}
			/******/
			/******/
			/******/ // expose the modules object (__webpack_modules__)
			/******/ __webpack_require__.m = modules;
			/******/
			/******/ // expose the module cache
			/******/ __webpack_require__.c = installedModules;
			/******/
			/******/ // define getter function for harmony exports
			/******/ __webpack_require__.d = function (exports, name, getter) {
				/******/ if (!__webpack_require__.o(exports, name)) {
					/******/ Object.defineProperty(exports, name, {
						/******/ configurable: false,
						/******/ enumerable: true,
						/******/ get: getter
						/******/
					});
					/******/
				}
				/******/
			};
			/******/
			/******/ // getDefaultExport function for compatibility with non-harmony modules
			/******/ __webpack_require__.n = function (module) {
				/******/ var getter =
					module && module.__esModule
						? /******/ function getDefault() {
								return module['default'];
						  }
						: /******/ function getModuleExports() {
								return module;
						  };
				/******/ __webpack_require__.d(getter, 'a', getter);
				/******/ return getter;
				/******/
			};
			/******/
			/******/ // Object.prototype.hasOwnProperty.call
			/******/ __webpack_require__.o = function (object, property) {
				return Object.prototype.hasOwnProperty.call(object, property);
			};
			/******/
			/******/ // __webpack_public_path__
			/******/ __webpack_require__.p = '';
			/******/
			/******/ // Load entry module and return exports
			/******/ return __webpack_require__((__webpack_require__.s = 3));
			/******/
		})(
			/************************************************************************/
			/******/ [
				/* 0 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					var BitMatrix = /** @class */ (function () {
						function BitMatrix(data, width) {
							this.width = width;
							this.height = data.length / width;
							this.data = data;
						}
						BitMatrix.createEmpty = function (width, height) {
							return new BitMatrix(new Uint8ClampedArray(width * height), width);
						};
						BitMatrix.prototype.get = function (x, y) {
							if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
								return false;
							}
							return !!this.data[y * this.width + x];
						};
						BitMatrix.prototype.set = function (x, y, v) {
							this.data[y * this.width + x] = v ? 1 : 0;
						};
						BitMatrix.prototype.setRegion = function (left, top, width, height, v) {
							for (var y = top; y < top + height; y++) {
								for (var x = left; x < left + width; x++) {
									this.set(x, y, !!v);
								}
							}
						};
						return BitMatrix;
					})();
					exports.BitMatrix = BitMatrix;

					/***/
				},
				/* 1 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					var GenericGFPoly_1 = __webpack_require__(2);
					function addOrSubtractGF(a, b) {
						return a ^ b; // tslint:disable-line:no-bitwise
					}
					exports.addOrSubtractGF = addOrSubtractGF;
					var GenericGF = /** @class */ (function () {
						function GenericGF(primitive, size, genBase) {
							this.primitive = primitive;
							this.size = size;
							this.generatorBase = genBase;
							this.expTable = new Array(this.size);
							this.logTable = new Array(this.size);
							var x = 1;
							for (var i = 0; i < this.size; i++) {
								this.expTable[i] = x;
								x = x * 2;
								if (x >= this.size) {
									x = (x ^ this.primitive) & (this.size - 1); // tslint:disable-line:no-bitwise
								}
							}
							for (var i = 0; i < this.size - 1; i++) {
								this.logTable[this.expTable[i]] = i;
							}
							this.zero = new GenericGFPoly_1.default(this, Uint8ClampedArray.from([0]));
							this.one = new GenericGFPoly_1.default(this, Uint8ClampedArray.from([1]));
						}
						GenericGF.prototype.multiply = function (a, b) {
							if (a === 0 || b === 0) {
								return 0;
							}
							return this.expTable[(this.logTable[a] + this.logTable[b]) % (this.size - 1)];
						};
						GenericGF.prototype.inverse = function (a) {
							if (a === 0) {
								throw new Error("Can't invert 0");
							}
							return this.expTable[this.size - this.logTable[a] - 1];
						};
						GenericGF.prototype.buildMonomial = function (degree, coefficient) {
							if (degree < 0) {
								throw new Error('Invalid monomial degree less than 0');
							}
							if (coefficient === 0) {
								return this.zero;
							}
							var coefficients = new Uint8ClampedArray(degree + 1);
							coefficients[0] = coefficient;
							return new GenericGFPoly_1.default(this, coefficients);
						};
						GenericGF.prototype.log = function (a) {
							if (a === 0) {
								throw new Error("Can't take log(0)");
							}
							return this.logTable[a];
						};
						GenericGF.prototype.exp = function (a) {
							return this.expTable[a];
						};
						return GenericGF;
					})();
					exports.default = GenericGF;

					/***/
				},
				/* 2 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					var GenericGF_1 = __webpack_require__(1);
					var GenericGFPoly = /** @class */ (function () {
						function GenericGFPoly(field, coefficients) {
							if (coefficients.length === 0) {
								throw new Error('No coefficients.');
							}
							this.field = field;
							var coefficientsLength = coefficients.length;
							if (coefficientsLength > 1 && coefficients[0] === 0) {
								// Leading term must be non-zero for anything except the constant polynomial "0"
								var firstNonZero = 1;
								while (firstNonZero < coefficientsLength && coefficients[firstNonZero] === 0) {
									firstNonZero++;
								}
								if (firstNonZero === coefficientsLength) {
									this.coefficients = field.zero.coefficients;
								} else {
									this.coefficients = new Uint8ClampedArray(coefficientsLength - firstNonZero);
									for (var i = 0; i < this.coefficients.length; i++) {
										this.coefficients[i] = coefficients[firstNonZero + i];
									}
								}
							} else {
								this.coefficients = coefficients;
							}
						}
						GenericGFPoly.prototype.degree = function () {
							return this.coefficients.length - 1;
						};
						GenericGFPoly.prototype.isZero = function () {
							return this.coefficients[0] === 0;
						};
						GenericGFPoly.prototype.getCoefficient = function (degree) {
							return this.coefficients[this.coefficients.length - 1 - degree];
						};
						GenericGFPoly.prototype.addOrSubtract = function (other) {
							var _a;
							if (this.isZero()) {
								return other;
							}
							if (other.isZero()) {
								return this;
							}
							var smallerCoefficients = this.coefficients;
							var largerCoefficients = other.coefficients;
							if (smallerCoefficients.length > largerCoefficients.length) {
								(_a = [largerCoefficients, smallerCoefficients]),
									(smallerCoefficients = _a[0]),
									(largerCoefficients = _a[1]);
							}
							var sumDiff = new Uint8ClampedArray(largerCoefficients.length);
							var lengthDiff = largerCoefficients.length - smallerCoefficients.length;
							for (var i = 0; i < lengthDiff; i++) {
								sumDiff[i] = largerCoefficients[i];
							}
							for (var i = lengthDiff; i < largerCoefficients.length; i++) {
								sumDiff[i] = GenericGF_1.addOrSubtractGF(
									smallerCoefficients[i - lengthDiff],
									largerCoefficients[i]
								);
							}
							return new GenericGFPoly(this.field, sumDiff);
						};
						GenericGFPoly.prototype.multiply = function (scalar) {
							if (scalar === 0) {
								return this.field.zero;
							}
							if (scalar === 1) {
								return this;
							}
							var size = this.coefficients.length;
							var product = new Uint8ClampedArray(size);
							for (var i = 0; i < size; i++) {
								product[i] = this.field.multiply(this.coefficients[i], scalar);
							}
							return new GenericGFPoly(this.field, product);
						};
						GenericGFPoly.prototype.multiplyPoly = function (other) {
							if (this.isZero() || other.isZero()) {
								return this.field.zero;
							}
							var aCoefficients = this.coefficients;
							var aLength = aCoefficients.length;
							var bCoefficients = other.coefficients;
							var bLength = bCoefficients.length;
							var product = new Uint8ClampedArray(aLength + bLength - 1);
							for (var i = 0; i < aLength; i++) {
								var aCoeff = aCoefficients[i];
								for (var j = 0; j < bLength; j++) {
									product[i + j] = GenericGF_1.addOrSubtractGF(
										product[i + j],
										this.field.multiply(aCoeff, bCoefficients[j])
									);
								}
							}
							return new GenericGFPoly(this.field, product);
						};
						GenericGFPoly.prototype.multiplyByMonomial = function (degree, coefficient) {
							if (degree < 0) {
								throw new Error('Invalid degree less than 0');
							}
							if (coefficient === 0) {
								return this.field.zero;
							}
							var size = this.coefficients.length;
							var product = new Uint8ClampedArray(size + degree);
							for (var i = 0; i < size; i++) {
								product[i] = this.field.multiply(this.coefficients[i], coefficient);
							}
							return new GenericGFPoly(this.field, product);
						};
						GenericGFPoly.prototype.evaluateAt = function (a) {
							var result = 0;
							if (a === 0) {
								// Just return the x^0 coefficient
								return this.getCoefficient(0);
							}
							var size = this.coefficients.length;
							if (a === 1) {
								// Just the sum of the coefficients
								this.coefficients.forEach(function (coefficient) {
									result = GenericGF_1.addOrSubtractGF(result, coefficient);
								});
								return result;
							}
							result = this.coefficients[0];
							for (var i = 1; i < size; i++) {
								result = GenericGF_1.addOrSubtractGF(
									this.field.multiply(a, result),
									this.coefficients[i]
								);
							}
							return result;
						};
						return GenericGFPoly;
					})();
					exports.default = GenericGFPoly;

					/***/
				},
				/* 3 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					var binarizer_1 = __webpack_require__(4);
					var decoder_1 = __webpack_require__(5);
					var extractor_1 = __webpack_require__(11);
					var locator_1 = __webpack_require__(12);
					function scan(matrix) {
						var locations = locator_1.locate(matrix);
						if (!locations) {
							return null;
						}
						for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
							var location_1 = locations_1[_i];
							var extracted = extractor_1.extract(matrix, location_1);
							var decoded = decoder_1.decode(extracted.matrix);
							if (decoded) {
								return {
									binaryData: decoded.bytes,
									data: decoded.text,
									chunks: decoded.chunks,
									version: decoded.version,
									location: {
										topRightCorner: extracted.mappingFunction(location_1.dimension, 0),
										topLeftCorner: extracted.mappingFunction(0, 0),
										bottomRightCorner: extracted.mappingFunction(
											location_1.dimension,
											location_1.dimension
										),
										bottomLeftCorner: extracted.mappingFunction(0, location_1.dimension),
										topRightFinderPattern: location_1.topRight,
										topLeftFinderPattern: location_1.topLeft,
										bottomLeftFinderPattern: location_1.bottomLeft,
										bottomRightAlignmentPattern: location_1.alignmentPattern
									}
								};
							}
						}
						return null;
					}
					var defaultOptions = {
						inversionAttempts: 'attemptBoth'
					};
					function jsQR(data, width, height, providedOptions) {
						if (providedOptions === void 0) {
							providedOptions = {};
						}
						var options = defaultOptions;
						Object.keys(options || {}).forEach(function (opt) {
							options[opt] = providedOptions[opt] || options[opt];
						});
						var shouldInvert =
							options.inversionAttempts === 'attemptBoth' ||
							options.inversionAttempts === 'invertFirst';
						var tryInvertedFirst =
							options.inversionAttempts === 'onlyInvert' ||
							options.inversionAttempts === 'invertFirst';
						var _a = binarizer_1.binarize(data, width, height, shouldInvert),
							binarized = _a.binarized,
							inverted = _a.inverted;
						var result = scan(tryInvertedFirst ? inverted : binarized);
						if (
							!result &&
							(options.inversionAttempts === 'attemptBoth' ||
								options.inversionAttempts === 'invertFirst')
						) {
							result = scan(tryInvertedFirst ? binarized : inverted);
						}
						return result;
					}
					jsQR.default = jsQR;
					exports.default = jsQR;

					/***/
				},
				/* 4 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					var BitMatrix_1 = __webpack_require__(0);
					var REGION_SIZE = 8;
					var MIN_DYNAMIC_RANGE = 24;
					function numBetween(value, min, max) {
						return value < min ? min : value > max ? max : value;
					}
					// Like BitMatrix but accepts arbitry Uint8 values
					var Matrix = /** @class */ (function () {
						function Matrix(width, height) {
							this.width = width;
							this.data = new Uint8ClampedArray(width * height);
						}
						Matrix.prototype.get = function (x, y) {
							return this.data[y * this.width + x];
						};
						Matrix.prototype.set = function (x, y, value) {
							this.data[y * this.width + x] = value;
						};
						return Matrix;
					})();
					function binarize(data, width, height, returnInverted) {
						if (data.length !== width * height * 4) {
							throw new Error('Malformed data passed to binarizer.');
						}
						// Convert image to greyscale
						var greyscalePixels = new Matrix(width, height);
						for (var x = 0; x < width; x++) {
							for (var y = 0; y < height; y++) {
								var r = data[(y * width + x) * 4 + 0];
								var g = data[(y * width + x) * 4 + 1];
								var b = data[(y * width + x) * 4 + 2];
								greyscalePixels.set(x, y, 0.2126 * r + 0.7152 * g + 0.0722 * b);
							}
						}
						var horizontalRegionCount = Math.ceil(width / REGION_SIZE);
						var verticalRegionCount = Math.ceil(height / REGION_SIZE);
						var blackPoints = new Matrix(horizontalRegionCount, verticalRegionCount);
						for (var verticalRegion = 0; verticalRegion < verticalRegionCount; verticalRegion++) {
							for (
								var hortizontalRegion = 0;
								hortizontalRegion < horizontalRegionCount;
								hortizontalRegion++
							) {
								var sum = 0;
								var min = Infinity;
								var max = 0;
								for (var y = 0; y < REGION_SIZE; y++) {
									for (var x = 0; x < REGION_SIZE; x++) {
										var pixelLumosity = greyscalePixels.get(
											hortizontalRegion * REGION_SIZE + x,
											verticalRegion * REGION_SIZE + y
										);
										sum += pixelLumosity;
										min = Math.min(min, pixelLumosity);
										max = Math.max(max, pixelLumosity);
									}
								}
								var average = sum / Math.pow(REGION_SIZE, 2);
								if (max - min <= MIN_DYNAMIC_RANGE) {
									// If variation within the block is low, assume this is a block with only light or only
									// dark pixels. In that case we do not want to use the average, as it would divide this
									// low contrast area into black and white pixels, essentially creating data out of noise.
									//
									// Default the blackpoint for these blocks to be half the min - effectively white them out
									average = min / 2;
									if (verticalRegion > 0 && hortizontalRegion > 0) {
										// Correct the "white background" assumption for blocks that have neighbors by comparing
										// the pixels in this block to the previously calculated black points. This is based on
										// the fact that dark barcode symbology is always surrounded by some amount of light
										// background for which reasonable black point estimates were made. The bp estimated at
										// the boundaries is used for the interior.
										// The (min < bp) is arbitrary but works better than other heuristics that were tried.
										var averageNeighborBlackPoint =
											(blackPoints.get(hortizontalRegion, verticalRegion - 1) +
												2 * blackPoints.get(hortizontalRegion - 1, verticalRegion) +
												blackPoints.get(hortizontalRegion - 1, verticalRegion - 1)) /
											4;
										if (min < averageNeighborBlackPoint) {
											average = averageNeighborBlackPoint;
										}
									}
								}
								blackPoints.set(hortizontalRegion, verticalRegion, average);
							}
						}
						var binarized = BitMatrix_1.BitMatrix.createEmpty(width, height);
						var inverted = null;
						if (returnInverted) {
							inverted = BitMatrix_1.BitMatrix.createEmpty(width, height);
						}
						for (var verticalRegion = 0; verticalRegion < verticalRegionCount; verticalRegion++) {
							for (
								var hortizontalRegion = 0;
								hortizontalRegion < horizontalRegionCount;
								hortizontalRegion++
							) {
								var left = numBetween(hortizontalRegion, 2, horizontalRegionCount - 3);
								var top_1 = numBetween(verticalRegion, 2, verticalRegionCount - 3);
								var sum = 0;
								for (var xRegion = -2; xRegion <= 2; xRegion++) {
									for (var yRegion = -2; yRegion <= 2; yRegion++) {
										sum += blackPoints.get(left + xRegion, top_1 + yRegion);
									}
								}
								var threshold = sum / 25;
								for (var xRegion = 0; xRegion < REGION_SIZE; xRegion++) {
									for (var yRegion = 0; yRegion < REGION_SIZE; yRegion++) {
										var x = hortizontalRegion * REGION_SIZE + xRegion;
										var y = verticalRegion * REGION_SIZE + yRegion;
										var lum = greyscalePixels.get(x, y);
										binarized.set(x, y, lum <= threshold);
										if (returnInverted) {
											inverted.set(x, y, !(lum <= threshold));
										}
									}
								}
							}
						}
						if (returnInverted) {
							return { binarized: binarized, inverted: inverted };
						}
						return { binarized: binarized };
					}
					exports.binarize = binarize;

					/***/
				},
				/* 5 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					var BitMatrix_1 = __webpack_require__(0);
					var decodeData_1 = __webpack_require__(6);
					var reedsolomon_1 = __webpack_require__(9);
					var version_1 = __webpack_require__(10);
					// tslint:disable:no-bitwise
					function numBitsDiffering(x, y) {
						var z = x ^ y;
						var bitCount = 0;
						while (z) {
							bitCount++;
							z &= z - 1;
						}
						return bitCount;
					}
					function pushBit(bit, byte) {
						return (byte << 1) | bit;
					}
					// tslint:enable:no-bitwise
					var FORMAT_INFO_TABLE = [
						{ bits: 0x5412, formatInfo: { errorCorrectionLevel: 1, dataMask: 0 } },
						{ bits: 0x5125, formatInfo: { errorCorrectionLevel: 1, dataMask: 1 } },
						{ bits: 0x5e7c, formatInfo: { errorCorrectionLevel: 1, dataMask: 2 } },
						{ bits: 0x5b4b, formatInfo: { errorCorrectionLevel: 1, dataMask: 3 } },
						{ bits: 0x45f9, formatInfo: { errorCorrectionLevel: 1, dataMask: 4 } },
						{ bits: 0x40ce, formatInfo: { errorCorrectionLevel: 1, dataMask: 5 } },
						{ bits: 0x4f97, formatInfo: { errorCorrectionLevel: 1, dataMask: 6 } },
						{ bits: 0x4aa0, formatInfo: { errorCorrectionLevel: 1, dataMask: 7 } },
						{ bits: 0x77c4, formatInfo: { errorCorrectionLevel: 0, dataMask: 0 } },
						{ bits: 0x72f3, formatInfo: { errorCorrectionLevel: 0, dataMask: 1 } },
						{ bits: 0x7daa, formatInfo: { errorCorrectionLevel: 0, dataMask: 2 } },
						{ bits: 0x789d, formatInfo: { errorCorrectionLevel: 0, dataMask: 3 } },
						{ bits: 0x662f, formatInfo: { errorCorrectionLevel: 0, dataMask: 4 } },
						{ bits: 0x6318, formatInfo: { errorCorrectionLevel: 0, dataMask: 5 } },
						{ bits: 0x6c41, formatInfo: { errorCorrectionLevel: 0, dataMask: 6 } },
						{ bits: 0x6976, formatInfo: { errorCorrectionLevel: 0, dataMask: 7 } },
						{ bits: 0x1689, formatInfo: { errorCorrectionLevel: 3, dataMask: 0 } },
						{ bits: 0x13be, formatInfo: { errorCorrectionLevel: 3, dataMask: 1 } },
						{ bits: 0x1ce7, formatInfo: { errorCorrectionLevel: 3, dataMask: 2 } },
						{ bits: 0x19d0, formatInfo: { errorCorrectionLevel: 3, dataMask: 3 } },
						{ bits: 0x0762, formatInfo: { errorCorrectionLevel: 3, dataMask: 4 } },
						{ bits: 0x0255, formatInfo: { errorCorrectionLevel: 3, dataMask: 5 } },
						{ bits: 0x0d0c, formatInfo: { errorCorrectionLevel: 3, dataMask: 6 } },
						{ bits: 0x083b, formatInfo: { errorCorrectionLevel: 3, dataMask: 7 } },
						{ bits: 0x355f, formatInfo: { errorCorrectionLevel: 2, dataMask: 0 } },
						{ bits: 0x3068, formatInfo: { errorCorrectionLevel: 2, dataMask: 1 } },
						{ bits: 0x3f31, formatInfo: { errorCorrectionLevel: 2, dataMask: 2 } },
						{ bits: 0x3a06, formatInfo: { errorCorrectionLevel: 2, dataMask: 3 } },
						{ bits: 0x24b4, formatInfo: { errorCorrectionLevel: 2, dataMask: 4 } },
						{ bits: 0x2183, formatInfo: { errorCorrectionLevel: 2, dataMask: 5 } },
						{ bits: 0x2eda, formatInfo: { errorCorrectionLevel: 2, dataMask: 6 } },
						{ bits: 0x2bed, formatInfo: { errorCorrectionLevel: 2, dataMask: 7 } }
					];
					var DATA_MASKS = [
						function (p) {
							return (p.y + p.x) % 2 === 0;
						},
						function (p) {
							return p.y % 2 === 0;
						},
						function (p) {
							return p.x % 3 === 0;
						},
						function (p) {
							return (p.y + p.x) % 3 === 0;
						},
						function (p) {
							return (Math.floor(p.y / 2) + Math.floor(p.x / 3)) % 2 === 0;
						},
						function (p) {
							return ((p.x * p.y) % 2) + ((p.x * p.y) % 3) === 0;
						},
						function (p) {
							return (((p.y * p.x) % 2) + ((p.y * p.x) % 3)) % 2 === 0;
						},
						function (p) {
							return (((p.y + p.x) % 2) + ((p.y * p.x) % 3)) % 2 === 0;
						}
					];
					function buildFunctionPatternMask(version) {
						var dimension = 17 + 4 * version.versionNumber;
						var matrix = BitMatrix_1.BitMatrix.createEmpty(dimension, dimension);
						matrix.setRegion(0, 0, 9, 9, true); // Top left finder pattern + separator + format
						matrix.setRegion(dimension - 8, 0, 8, 9, true); // Top right finder pattern + separator + format
						matrix.setRegion(0, dimension - 8, 9, 8, true); // Bottom left finder pattern + separator + format
						// Alignment patterns
						for (var _i = 0, _a = version.alignmentPatternCenters; _i < _a.length; _i++) {
							var x = _a[_i];
							for (var _b = 0, _c = version.alignmentPatternCenters; _b < _c.length; _b++) {
								var y = _c[_b];
								if (
									!(
										(x === 6 && y === 6) ||
										(x === 6 && y === dimension - 7) ||
										(x === dimension - 7 && y === 6)
									)
								) {
									matrix.setRegion(x - 2, y - 2, 5, 5, true);
								}
							}
						}
						matrix.setRegion(6, 9, 1, dimension - 17, true); // Vertical timing pattern
						matrix.setRegion(9, 6, dimension - 17, 1, true); // Horizontal timing pattern
						if (version.versionNumber > 6) {
							matrix.setRegion(dimension - 11, 0, 3, 6, true); // Version info, top right
							matrix.setRegion(0, dimension - 11, 6, 3, true); // Version info, bottom left
						}
						return matrix;
					}
					function readCodewords(matrix, version, formatInfo) {
						var dataMask = DATA_MASKS[formatInfo.dataMask];
						var dimension = matrix.height;
						var functionPatternMask = buildFunctionPatternMask(version);
						var codewords = [];
						var currentByte = 0;
						var bitsRead = 0;
						// Read columns in pairs, from right to left
						var readingUp = true;
						for (var columnIndex = dimension - 1; columnIndex > 0; columnIndex -= 2) {
							if (columnIndex === 6) {
								// Skip whole column with vertical alignment pattern;
								columnIndex--;
							}
							for (var i = 0; i < dimension; i++) {
								var y = readingUp ? dimension - 1 - i : i;
								for (var columnOffset = 0; columnOffset < 2; columnOffset++) {
									var x = columnIndex - columnOffset;
									if (!functionPatternMask.get(x, y)) {
										bitsRead++;
										var bit = matrix.get(x, y);
										if (dataMask({ y: y, x: x })) {
											bit = !bit;
										}
										currentByte = pushBit(bit, currentByte);
										if (bitsRead === 8) {
											// Whole bytes
											codewords.push(currentByte);
											bitsRead = 0;
											currentByte = 0;
										}
									}
								}
							}
							readingUp = !readingUp;
						}
						return codewords;
					}
					function readVersion(matrix) {
						var dimension = matrix.height;
						var provisionalVersion = Math.floor((dimension - 17) / 4);
						if (provisionalVersion <= 6) {
							// 6 and under dont have version info in the QR code
							return version_1.VERSIONS[provisionalVersion - 1];
						}
						var topRightVersionBits = 0;
						for (var y = 5; y >= 0; y--) {
							for (var x = dimension - 9; x >= dimension - 11; x--) {
								topRightVersionBits = pushBit(matrix.get(x, y), topRightVersionBits);
							}
						}
						var bottomLeftVersionBits = 0;
						for (var x = 5; x >= 0; x--) {
							for (var y = dimension - 9; y >= dimension - 11; y--) {
								bottomLeftVersionBits = pushBit(matrix.get(x, y), bottomLeftVersionBits);
							}
						}
						var bestDifference = Infinity;
						var bestVersion;
						for (var _i = 0, VERSIONS_1 = version_1.VERSIONS; _i < VERSIONS_1.length; _i++) {
							var version = VERSIONS_1[_i];
							if (
								version.infoBits === topRightVersionBits ||
								version.infoBits === bottomLeftVersionBits
							) {
								return version;
							}
							var difference = numBitsDiffering(topRightVersionBits, version.infoBits);
							if (difference < bestDifference) {
								bestVersion = version;
								bestDifference = difference;
							}
							difference = numBitsDiffering(bottomLeftVersionBits, version.infoBits);
							if (difference < bestDifference) {
								bestVersion = version;
								bestDifference = difference;
							}
						}
						// We can tolerate up to 3 bits of error since no two version info codewords will
						// differ in less than 8 bits.
						if (bestDifference <= 3) {
							return bestVersion;
						}
					}
					function readFormatInformation(matrix) {
						var topLeftFormatInfoBits = 0;
						for (var x = 0; x <= 8; x++) {
							if (x !== 6) {
								// Skip timing pattern bit
								topLeftFormatInfoBits = pushBit(matrix.get(x, 8), topLeftFormatInfoBits);
							}
						}
						for (var y = 7; y >= 0; y--) {
							if (y !== 6) {
								// Skip timing pattern bit
								topLeftFormatInfoBits = pushBit(matrix.get(8, y), topLeftFormatInfoBits);
							}
						}
						var dimension = matrix.height;
						var topRightBottomRightFormatInfoBits = 0;
						for (var y = dimension - 1; y >= dimension - 7; y--) {
							// bottom left
							topRightBottomRightFormatInfoBits = pushBit(
								matrix.get(8, y),
								topRightBottomRightFormatInfoBits
							);
						}
						for (var x = dimension - 8; x < dimension; x++) {
							// top right
							topRightBottomRightFormatInfoBits = pushBit(
								matrix.get(x, 8),
								topRightBottomRightFormatInfoBits
							);
						}
						var bestDifference = Infinity;
						var bestFormatInfo = null;
						for (
							var _i = 0, FORMAT_INFO_TABLE_1 = FORMAT_INFO_TABLE;
							_i < FORMAT_INFO_TABLE_1.length;
							_i++
						) {
							var _a = FORMAT_INFO_TABLE_1[_i],
								bits = _a.bits,
								formatInfo = _a.formatInfo;
							if (bits === topLeftFormatInfoBits || bits === topRightBottomRightFormatInfoBits) {
								return formatInfo;
							}
							var difference = numBitsDiffering(topLeftFormatInfoBits, bits);
							if (difference < bestDifference) {
								bestFormatInfo = formatInfo;
								bestDifference = difference;
							}
							if (topLeftFormatInfoBits !== topRightBottomRightFormatInfoBits) {
								// also try the other option
								difference = numBitsDiffering(topRightBottomRightFormatInfoBits, bits);
								if (difference < bestDifference) {
									bestFormatInfo = formatInfo;
									bestDifference = difference;
								}
							}
						}
						// Hamming distance of the 32 masked codes is 7, by construction, so <= 3 bits differing means we found a match
						if (bestDifference <= 3) {
							return bestFormatInfo;
						}
						return null;
					}
					function getDataBlocks(codewords, version, ecLevel) {
						var ecInfo = version.errorCorrectionLevels[ecLevel];
						var dataBlocks = [];
						var totalCodewords = 0;
						ecInfo.ecBlocks.forEach(function (block) {
							for (var i = 0; i < block.numBlocks; i++) {
								dataBlocks.push({ numDataCodewords: block.dataCodewordsPerBlock, codewords: [] });
								totalCodewords += block.dataCodewordsPerBlock + ecInfo.ecCodewordsPerBlock;
							}
						});
						// In some cases the QR code will be malformed enough that we pull off more or less than we should.
						// If we pull off less there's nothing we can do.
						// If we pull off more we can safely truncate
						if (codewords.length < totalCodewords) {
							return null;
						}
						codewords = codewords.slice(0, totalCodewords);
						var shortBlockSize = ecInfo.ecBlocks[0].dataCodewordsPerBlock;
						// Pull codewords to fill the blocks up to the minimum size
						for (var i = 0; i < shortBlockSize; i++) {
							for (var _i = 0, dataBlocks_1 = dataBlocks; _i < dataBlocks_1.length; _i++) {
								var dataBlock = dataBlocks_1[_i];
								dataBlock.codewords.push(codewords.shift());
							}
						}
						// If there are any large blocks, pull codewords to fill the last element of those
						if (ecInfo.ecBlocks.length > 1) {
							var smallBlockCount = ecInfo.ecBlocks[0].numBlocks;
							var largeBlockCount = ecInfo.ecBlocks[1].numBlocks;
							for (var i = 0; i < largeBlockCount; i++) {
								dataBlocks[smallBlockCount + i].codewords.push(codewords.shift());
							}
						}
						// Add the rest of the codewords to the blocks. These are the error correction codewords.
						while (codewords.length > 0) {
							for (var _a = 0, dataBlocks_2 = dataBlocks; _a < dataBlocks_2.length; _a++) {
								var dataBlock = dataBlocks_2[_a];
								dataBlock.codewords.push(codewords.shift());
							}
						}
						return dataBlocks;
					}
					function decodeMatrix(matrix) {
						var version = readVersion(matrix);
						if (!version) {
							return null;
						}
						var formatInfo = readFormatInformation(matrix);
						if (!formatInfo) {
							return null;
						}
						var codewords = readCodewords(matrix, version, formatInfo);
						var dataBlocks = getDataBlocks(codewords, version, formatInfo.errorCorrectionLevel);
						if (!dataBlocks) {
							return null;
						}
						// Count total number of data bytes
						var totalBytes = dataBlocks.reduce(function (a, b) {
							return a + b.numDataCodewords;
						}, 0);
						var resultBytes = new Uint8ClampedArray(totalBytes);
						var resultIndex = 0;
						for (var _i = 0, dataBlocks_3 = dataBlocks; _i < dataBlocks_3.length; _i++) {
							var dataBlock = dataBlocks_3[_i];
							var correctedBytes = reedsolomon_1.decode(
								dataBlock.codewords,
								dataBlock.codewords.length - dataBlock.numDataCodewords
							);
							if (!correctedBytes) {
								return null;
							}
							for (var i = 0; i < dataBlock.numDataCodewords; i++) {
								resultBytes[resultIndex++] = correctedBytes[i];
							}
						}
						try {
							return decodeData_1.decode(resultBytes, version.versionNumber);
						} catch (_a) {
							return null;
						}
					}
					function decode(matrix) {
						if (matrix == null) {
							return null;
						}
						var result = decodeMatrix(matrix);
						if (result) {
							return result;
						}
						// Decoding didn't work, try mirroring the QR across the topLeft -> bottomRight line.
						for (var x = 0; x < matrix.width; x++) {
							for (var y = x + 1; y < matrix.height; y++) {
								if (matrix.get(x, y) !== matrix.get(y, x)) {
									matrix.set(x, y, !matrix.get(x, y));
									matrix.set(y, x, !matrix.get(y, x));
								}
							}
						}
						return decodeMatrix(matrix);
					}
					exports.decode = decode;

					/***/
				},
				/* 6 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					// tslint:disable:no-bitwise
					var BitStream_1 = __webpack_require__(7);
					var shiftJISTable_1 = __webpack_require__(8);
					var Mode;
					(function (Mode) {
						Mode['Numeric'] = 'numeric';
						Mode['Alphanumeric'] = 'alphanumeric';
						Mode['Byte'] = 'byte';
						Mode['Kanji'] = 'kanji';
						Mode['ECI'] = 'eci';
					})((Mode = exports.Mode || (exports.Mode = {})));
					var ModeByte;
					(function (ModeByte) {
						ModeByte[(ModeByte['Terminator'] = 0)] = 'Terminator';
						ModeByte[(ModeByte['Numeric'] = 1)] = 'Numeric';
						ModeByte[(ModeByte['Alphanumeric'] = 2)] = 'Alphanumeric';
						ModeByte[(ModeByte['Byte'] = 4)] = 'Byte';
						ModeByte[(ModeByte['Kanji'] = 8)] = 'Kanji';
						ModeByte[(ModeByte['ECI'] = 7)] = 'ECI';
						// StructuredAppend = 0x3,
						// FNC1FirstPosition = 0x5,
						// FNC1SecondPosition = 0x9,
					})(ModeByte || (ModeByte = {}));
					function decodeNumeric(stream, size) {
						var bytes = [];
						var text = '';
						var characterCountSize = [10, 12, 14][size];
						var length = stream.readBits(characterCountSize);
						// Read digits in groups of 3
						while (length >= 3) {
							var num = stream.readBits(10);
							if (num >= 1000) {
								throw new Error('Invalid numeric value above 999');
							}
							var a = Math.floor(num / 100);
							var b = Math.floor(num / 10) % 10;
							var c = num % 10;
							bytes.push(48 + a, 48 + b, 48 + c);
							text += a.toString() + b.toString() + c.toString();
							length -= 3;
						}
						// If the number of digits aren't a multiple of 3, the remaining digits are special cased.
						if (length === 2) {
							var num = stream.readBits(7);
							if (num >= 100) {
								throw new Error('Invalid numeric value above 99');
							}
							var a = Math.floor(num / 10);
							var b = num % 10;
							bytes.push(48 + a, 48 + b);
							text += a.toString() + b.toString();
						} else if (length === 1) {
							var num = stream.readBits(4);
							if (num >= 10) {
								throw new Error('Invalid numeric value above 9');
							}
							bytes.push(48 + num);
							text += num.toString();
						}
						return { bytes: bytes, text: text };
					}
					var AlphanumericCharacterCodes = [
						'0',
						'1',
						'2',
						'3',
						'4',
						'5',
						'6',
						'7',
						'8',
						'9',
						'A',
						'B',
						'C',
						'D',
						'E',
						'F',
						'G',
						'H',
						'I',
						'J',
						'K',
						'L',
						'M',
						'N',
						'O',
						'P',
						'Q',
						'R',
						'S',
						'T',
						'U',
						'V',
						'W',
						'X',
						'Y',
						'Z',
						' ',
						'$',
						'%',
						'*',
						'+',
						'-',
						'.',
						'/',
						':'
					];
					function decodeAlphanumeric(stream, size) {
						var bytes = [];
						var text = '';
						var characterCountSize = [9, 11, 13][size];
						var length = stream.readBits(characterCountSize);
						while (length >= 2) {
							var v = stream.readBits(11);
							var a = Math.floor(v / 45);
							var b = v % 45;
							bytes.push(
								AlphanumericCharacterCodes[a].charCodeAt(0),
								AlphanumericCharacterCodes[b].charCodeAt(0)
							);
							text += AlphanumericCharacterCodes[a] + AlphanumericCharacterCodes[b];
							length -= 2;
						}
						if (length === 1) {
							var a = stream.readBits(6);
							bytes.push(AlphanumericCharacterCodes[a].charCodeAt(0));
							text += AlphanumericCharacterCodes[a];
						}
						return { bytes: bytes, text: text };
					}
					function decodeByte(stream, size) {
						var bytes = [];
						var text = '';
						var characterCountSize = [8, 16, 16][size];
						var length = stream.readBits(characterCountSize);
						for (var i = 0; i < length; i++) {
							var b = stream.readBits(8);
							bytes.push(b);
						}
						try {
							text += decodeURIComponent(
								bytes
									.map(function (b) {
										return '%' + ('0' + b.toString(16)).substr(-2);
									})
									.join('')
							);
						} catch (_a) {
							// failed to decode
						}
						return { bytes: bytes, text: text };
					}
					function decodeKanji(stream, size) {
						var bytes = [];
						var text = '';
						var characterCountSize = [8, 10, 12][size];
						var length = stream.readBits(characterCountSize);
						for (var i = 0; i < length; i++) {
							var k = stream.readBits(13);
							var c = (Math.floor(k / 0xc0) << 8) | k % 0xc0;
							if (c < 0x1f00) {
								c += 0x8140;
							} else {
								c += 0xc140;
							}
							bytes.push(c >> 8, c & 0xff);
							text += String.fromCharCode(shiftJISTable_1.shiftJISTable[c]);
						}
						return { bytes: bytes, text: text };
					}
					function decode(data, version) {
						var _a, _b, _c, _d;
						var stream = new BitStream_1.BitStream(data);
						// There are 3 'sizes' based on the version. 1-9 is small (0), 10-26 is medium (1) and 27-40 is large (2).
						var size = version <= 9 ? 0 : version <= 26 ? 1 : 2;
						var result = {
							text: '',
							bytes: [],
							chunks: [],
							version: version
						};
						while (stream.available() >= 4) {
							var mode = stream.readBits(4);
							if (mode === ModeByte.Terminator) {
								return result;
							} else if (mode === ModeByte.ECI) {
								if (stream.readBits(1) === 0) {
									result.chunks.push({
										type: Mode.ECI,
										assignmentNumber: stream.readBits(7)
									});
								} else if (stream.readBits(1) === 0) {
									result.chunks.push({
										type: Mode.ECI,
										assignmentNumber: stream.readBits(14)
									});
								} else if (stream.readBits(1) === 0) {
									result.chunks.push({
										type: Mode.ECI,
										assignmentNumber: stream.readBits(21)
									});
								} else {
									// ECI data seems corrupted
									result.chunks.push({
										type: Mode.ECI,
										assignmentNumber: -1
									});
								}
							} else if (mode === ModeByte.Numeric) {
								var numericResult = decodeNumeric(stream, size);
								result.text += numericResult.text;
								(_a = result.bytes).push.apply(_a, numericResult.bytes);
								result.chunks.push({
									type: Mode.Numeric,
									text: numericResult.text
								});
							} else if (mode === ModeByte.Alphanumeric) {
								var alphanumericResult = decodeAlphanumeric(stream, size);
								result.text += alphanumericResult.text;
								(_b = result.bytes).push.apply(_b, alphanumericResult.bytes);
								result.chunks.push({
									type: Mode.Alphanumeric,
									text: alphanumericResult.text
								});
							} else if (mode === ModeByte.Byte) {
								var byteResult = decodeByte(stream, size);
								result.text += byteResult.text;
								(_c = result.bytes).push.apply(_c, byteResult.bytes);
								result.chunks.push({
									type: Mode.Byte,
									bytes: byteResult.bytes,
									text: byteResult.text
								});
							} else if (mode === ModeByte.Kanji) {
								var kanjiResult = decodeKanji(stream, size);
								result.text += kanjiResult.text;
								(_d = result.bytes).push.apply(_d, kanjiResult.bytes);
								result.chunks.push({
									type: Mode.Kanji,
									bytes: kanjiResult.bytes,
									text: kanjiResult.text
								});
							}
						}
						// If there is no data left, or the remaining bits are all 0, then that counts as a termination marker
						if (stream.available() === 0 || stream.readBits(stream.available()) === 0) {
							return result;
						}
					}
					exports.decode = decode;

					/***/
				},
				/* 7 */
				/***/ function (module, exports, __webpack_require__) {
					// tslint:disable:no-bitwise
					Object.defineProperty(exports, '__esModule', { value: true });
					var BitStream = /** @class */ (function () {
						function BitStream(bytes) {
							this.byteOffset = 0;
							this.bitOffset = 0;
							this.bytes = bytes;
						}
						BitStream.prototype.readBits = function (numBits) {
							if (numBits < 1 || numBits > 32 || numBits > this.available()) {
								throw new Error('Cannot read ' + numBits.toString() + ' bits');
							}
							var result = 0;
							// First, read remainder from current byte
							if (this.bitOffset > 0) {
								var bitsLeft = 8 - this.bitOffset;
								var toRead = numBits < bitsLeft ? numBits : bitsLeft;
								var bitsToNotRead = bitsLeft - toRead;
								var mask = (0xff >> (8 - toRead)) << bitsToNotRead;
								result = (this.bytes[this.byteOffset] & mask) >> bitsToNotRead;
								numBits -= toRead;
								this.bitOffset += toRead;
								if (this.bitOffset === 8) {
									this.bitOffset = 0;
									this.byteOffset++;
								}
							}
							// Next read whole bytes
							if (numBits > 0) {
								while (numBits >= 8) {
									result = (result << 8) | (this.bytes[this.byteOffset] & 0xff);
									this.byteOffset++;
									numBits -= 8;
								}
								// Finally read a partial byte
								if (numBits > 0) {
									var bitsToNotRead = 8 - numBits;
									var mask = (0xff >> bitsToNotRead) << bitsToNotRead;
									result =
										(result << numBits) | ((this.bytes[this.byteOffset] & mask) >> bitsToNotRead);
									this.bitOffset += numBits;
								}
							}
							return result;
						};
						BitStream.prototype.available = function () {
							return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
						};
						return BitStream;
					})();
					exports.BitStream = BitStream;

					/***/
				},
				/* 8 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					exports.shiftJISTable = {
						0x20: 0x0020,
						0x21: 0x0021,
						0x22: 0x0022,
						0x23: 0x0023,
						0x24: 0x0024,
						0x25: 0x0025,
						0x26: 0x0026,
						0x27: 0x0027,
						0x28: 0x0028,
						0x29: 0x0029,
						0x2a: 0x002a,
						0x2b: 0x002b,
						0x2c: 0x002c,
						0x2d: 0x002d,
						0x2e: 0x002e,
						0x2f: 0x002f,
						0x30: 0x0030,
						0x31: 0x0031,
						0x32: 0x0032,
						0x33: 0x0033,
						0x34: 0x0034,
						0x35: 0x0035,
						0x36: 0x0036,
						0x37: 0x0037,
						0x38: 0x0038,
						0x39: 0x0039,
						0x3a: 0x003a,
						0x3b: 0x003b,
						0x3c: 0x003c,
						0x3d: 0x003d,
						0x3e: 0x003e,
						0x3f: 0x003f,
						0x40: 0x0040,
						0x41: 0x0041,
						0x42: 0x0042,
						0x43: 0x0043,
						0x44: 0x0044,
						0x45: 0x0045,
						0x46: 0x0046,
						0x47: 0x0047,
						0x48: 0x0048,
						0x49: 0x0049,
						0x4a: 0x004a,
						0x4b: 0x004b,
						0x4c: 0x004c,
						0x4d: 0x004d,
						0x4e: 0x004e,
						0x4f: 0x004f,
						0x50: 0x0050,
						0x51: 0x0051,
						0x52: 0x0052,
						0x53: 0x0053,
						0x54: 0x0054,
						0x55: 0x0055,
						0x56: 0x0056,
						0x57: 0x0057,
						0x58: 0x0058,
						0x59: 0x0059,
						0x5a: 0x005a,
						0x5b: 0x005b,
						0x5c: 0x00a5,
						0x5d: 0x005d,
						0x5e: 0x005e,
						0x5f: 0x005f,
						0x60: 0x0060,
						0x61: 0x0061,
						0x62: 0x0062,
						0x63: 0x0063,
						0x64: 0x0064,
						0x65: 0x0065,
						0x66: 0x0066,
						0x67: 0x0067,
						0x68: 0x0068,
						0x69: 0x0069,
						0x6a: 0x006a,
						0x6b: 0x006b,
						0x6c: 0x006c,
						0x6d: 0x006d,
						0x6e: 0x006e,
						0x6f: 0x006f,
						0x70: 0x0070,
						0x71: 0x0071,
						0x72: 0x0072,
						0x73: 0x0073,
						0x74: 0x0074,
						0x75: 0x0075,
						0x76: 0x0076,
						0x77: 0x0077,
						0x78: 0x0078,
						0x79: 0x0079,
						0x7a: 0x007a,
						0x7b: 0x007b,
						0x7c: 0x007c,
						0x7d: 0x007d,
						0x7e: 0x203e,
						0x8140: 0x3000,
						0x8141: 0x3001,
						0x8142: 0x3002,
						0x8143: 0xff0c,
						0x8144: 0xff0e,
						0x8145: 0x30fb,
						0x8146: 0xff1a,
						0x8147: 0xff1b,
						0x8148: 0xff1f,
						0x8149: 0xff01,
						0x814a: 0x309b,
						0x814b: 0x309c,
						0x814c: 0x00b4,
						0x814d: 0xff40,
						0x814e: 0x00a8,
						0x814f: 0xff3e,
						0x8150: 0xffe3,
						0x8151: 0xff3f,
						0x8152: 0x30fd,
						0x8153: 0x30fe,
						0x8154: 0x309d,
						0x8155: 0x309e,
						0x8156: 0x3003,
						0x8157: 0x4edd,
						0x8158: 0x3005,
						0x8159: 0x3006,
						0x815a: 0x3007,
						0x815b: 0x30fc,
						0x815c: 0x2015,
						0x815d: 0x2010,
						0x815e: 0xff0f,
						0x815f: 0x005c,
						0x8160: 0x301c,
						0x8161: 0x2016,
						0x8162: 0xff5c,
						0x8163: 0x2026,
						0x8164: 0x2025,
						0x8165: 0x2018,
						0x8166: 0x2019,
						0x8167: 0x201c,
						0x8168: 0x201d,
						0x8169: 0xff08,
						0x816a: 0xff09,
						0x816b: 0x3014,
						0x816c: 0x3015,
						0x816d: 0xff3b,
						0x816e: 0xff3d,
						0x816f: 0xff5b,
						0x8170: 0xff5d,
						0x8171: 0x3008,
						0x8172: 0x3009,
						0x8173: 0x300a,
						0x8174: 0x300b,
						0x8175: 0x300c,
						0x8176: 0x300d,
						0x8177: 0x300e,
						0x8178: 0x300f,
						0x8179: 0x3010,
						0x817a: 0x3011,
						0x817b: 0xff0b,
						0x817c: 0x2212,
						0x817d: 0x00b1,
						0x817e: 0x00d7,
						0x8180: 0x00f7,
						0x8181: 0xff1d,
						0x8182: 0x2260,
						0x8183: 0xff1c,
						0x8184: 0xff1e,
						0x8185: 0x2266,
						0x8186: 0x2267,
						0x8187: 0x221e,
						0x8188: 0x2234,
						0x8189: 0x2642,
						0x818a: 0x2640,
						0x818b: 0x00b0,
						0x818c: 0x2032,
						0x818d: 0x2033,
						0x818e: 0x2103,
						0x818f: 0xffe5,
						0x8190: 0xff04,
						0x8191: 0x00a2,
						0x8192: 0x00a3,
						0x8193: 0xff05,
						0x8194: 0xff03,
						0x8195: 0xff06,
						0x8196: 0xff0a,
						0x8197: 0xff20,
						0x8198: 0x00a7,
						0x8199: 0x2606,
						0x819a: 0x2605,
						0x819b: 0x25cb,
						0x819c: 0x25cf,
						0x819d: 0x25ce,
						0x819e: 0x25c7,
						0x819f: 0x25c6,
						0x81a0: 0x25a1,
						0x81a1: 0x25a0,
						0x81a2: 0x25b3,
						0x81a3: 0x25b2,
						0x81a4: 0x25bd,
						0x81a5: 0x25bc,
						0x81a6: 0x203b,
						0x81a7: 0x3012,
						0x81a8: 0x2192,
						0x81a9: 0x2190,
						0x81aa: 0x2191,
						0x81ab: 0x2193,
						0x81ac: 0x3013,
						0x81b8: 0x2208,
						0x81b9: 0x220b,
						0x81ba: 0x2286,
						0x81bb: 0x2287,
						0x81bc: 0x2282,
						0x81bd: 0x2283,
						0x81be: 0x222a,
						0x81bf: 0x2229,
						0x81c8: 0x2227,
						0x81c9: 0x2228,
						0x81ca: 0x00ac,
						0x81cb: 0x21d2,
						0x81cc: 0x21d4,
						0x81cd: 0x2200,
						0x81ce: 0x2203,
						0x81da: 0x2220,
						0x81db: 0x22a5,
						0x81dc: 0x2312,
						0x81dd: 0x2202,
						0x81de: 0x2207,
						0x81df: 0x2261,
						0x81e0: 0x2252,
						0x81e1: 0x226a,
						0x81e2: 0x226b,
						0x81e3: 0x221a,
						0x81e4: 0x223d,
						0x81e5: 0x221d,
						0x81e6: 0x2235,
						0x81e7: 0x222b,
						0x81e8: 0x222c,
						0x81f0: 0x212b,
						0x81f1: 0x2030,
						0x81f2: 0x266f,
						0x81f3: 0x266d,
						0x81f4: 0x266a,
						0x81f5: 0x2020,
						0x81f6: 0x2021,
						0x81f7: 0x00b6,
						0x81fc: 0x25ef,
						0x824f: 0xff10,
						0x8250: 0xff11,
						0x8251: 0xff12,
						0x8252: 0xff13,
						0x8253: 0xff14,
						0x8254: 0xff15,
						0x8255: 0xff16,
						0x8256: 0xff17,
						0x8257: 0xff18,
						0x8258: 0xff19,
						0x8260: 0xff21,
						0x8261: 0xff22,
						0x8262: 0xff23,
						0x8263: 0xff24,
						0x8264: 0xff25,
						0x8265: 0xff26,
						0x8266: 0xff27,
						0x8267: 0xff28,
						0x8268: 0xff29,
						0x8269: 0xff2a,
						0x826a: 0xff2b,
						0x826b: 0xff2c,
						0x826c: 0xff2d,
						0x826d: 0xff2e,
						0x826e: 0xff2f,
						0x826f: 0xff30,
						0x8270: 0xff31,
						0x8271: 0xff32,
						0x8272: 0xff33,
						0x8273: 0xff34,
						0x8274: 0xff35,
						0x8275: 0xff36,
						0x8276: 0xff37,
						0x8277: 0xff38,
						0x8278: 0xff39,
						0x8279: 0xff3a,
						0x8281: 0xff41,
						0x8282: 0xff42,
						0x8283: 0xff43,
						0x8284: 0xff44,
						0x8285: 0xff45,
						0x8286: 0xff46,
						0x8287: 0xff47,
						0x8288: 0xff48,
						0x8289: 0xff49,
						0x828a: 0xff4a,
						0x828b: 0xff4b,
						0x828c: 0xff4c,
						0x828d: 0xff4d,
						0x828e: 0xff4e,
						0x828f: 0xff4f,
						0x8290: 0xff50,
						0x8291: 0xff51,
						0x8292: 0xff52,
						0x8293: 0xff53,
						0x8294: 0xff54,
						0x8295: 0xff55,
						0x8296: 0xff56,
						0x8297: 0xff57,
						0x8298: 0xff58,
						0x8299: 0xff59,
						0x829a: 0xff5a,
						0x829f: 0x3041,
						0x82a0: 0x3042,
						0x82a1: 0x3043,
						0x82a2: 0x3044,
						0x82a3: 0x3045,
						0x82a4: 0x3046,
						0x82a5: 0x3047,
						0x82a6: 0x3048,
						0x82a7: 0x3049,
						0x82a8: 0x304a,
						0x82a9: 0x304b,
						0x82aa: 0x304c,
						0x82ab: 0x304d,
						0x82ac: 0x304e,
						0x82ad: 0x304f,
						0x82ae: 0x3050,
						0x82af: 0x3051,
						0x82b0: 0x3052,
						0x82b1: 0x3053,
						0x82b2: 0x3054,
						0x82b3: 0x3055,
						0x82b4: 0x3056,
						0x82b5: 0x3057,
						0x82b6: 0x3058,
						0x82b7: 0x3059,
						0x82b8: 0x305a,
						0x82b9: 0x305b,
						0x82ba: 0x305c,
						0x82bb: 0x305d,
						0x82bc: 0x305e,
						0x82bd: 0x305f,
						0x82be: 0x3060,
						0x82bf: 0x3061,
						0x82c0: 0x3062,
						0x82c1: 0x3063,
						0x82c2: 0x3064,
						0x82c3: 0x3065,
						0x82c4: 0x3066,
						0x82c5: 0x3067,
						0x82c6: 0x3068,
						0x82c7: 0x3069,
						0x82c8: 0x306a,
						0x82c9: 0x306b,
						0x82ca: 0x306c,
						0x82cb: 0x306d,
						0x82cc: 0x306e,
						0x82cd: 0x306f,
						0x82ce: 0x3070,
						0x82cf: 0x3071,
						0x82d0: 0x3072,
						0x82d1: 0x3073,
						0x82d2: 0x3074,
						0x82d3: 0x3075,
						0x82d4: 0x3076,
						0x82d5: 0x3077,
						0x82d6: 0x3078,
						0x82d7: 0x3079,
						0x82d8: 0x307a,
						0x82d9: 0x307b,
						0x82da: 0x307c,
						0x82db: 0x307d,
						0x82dc: 0x307e,
						0x82dd: 0x307f,
						0x82de: 0x3080,
						0x82df: 0x3081,
						0x82e0: 0x3082,
						0x82e1: 0x3083,
						0x82e2: 0x3084,
						0x82e3: 0x3085,
						0x82e4: 0x3086,
						0x82e5: 0x3087,
						0x82e6: 0x3088,
						0x82e7: 0x3089,
						0x82e8: 0x308a,
						0x82e9: 0x308b,
						0x82ea: 0x308c,
						0x82eb: 0x308d,
						0x82ec: 0x308e,
						0x82ed: 0x308f,
						0x82ee: 0x3090,
						0x82ef: 0x3091,
						0x82f0: 0x3092,
						0x82f1: 0x3093,
						0x8340: 0x30a1,
						0x8341: 0x30a2,
						0x8342: 0x30a3,
						0x8343: 0x30a4,
						0x8344: 0x30a5,
						0x8345: 0x30a6,
						0x8346: 0x30a7,
						0x8347: 0x30a8,
						0x8348: 0x30a9,
						0x8349: 0x30aa,
						0x834a: 0x30ab,
						0x834b: 0x30ac,
						0x834c: 0x30ad,
						0x834d: 0x30ae,
						0x834e: 0x30af,
						0x834f: 0x30b0,
						0x8350: 0x30b1,
						0x8351: 0x30b2,
						0x8352: 0x30b3,
						0x8353: 0x30b4,
						0x8354: 0x30b5,
						0x8355: 0x30b6,
						0x8356: 0x30b7,
						0x8357: 0x30b8,
						0x8358: 0x30b9,
						0x8359: 0x30ba,
						0x835a: 0x30bb,
						0x835b: 0x30bc,
						0x835c: 0x30bd,
						0x835d: 0x30be,
						0x835e: 0x30bf,
						0x835f: 0x30c0,
						0x8360: 0x30c1,
						0x8361: 0x30c2,
						0x8362: 0x30c3,
						0x8363: 0x30c4,
						0x8364: 0x30c5,
						0x8365: 0x30c6,
						0x8366: 0x30c7,
						0x8367: 0x30c8,
						0x8368: 0x30c9,
						0x8369: 0x30ca,
						0x836a: 0x30cb,
						0x836b: 0x30cc,
						0x836c: 0x30cd,
						0x836d: 0x30ce,
						0x836e: 0x30cf,
						0x836f: 0x30d0,
						0x8370: 0x30d1,
						0x8371: 0x30d2,
						0x8372: 0x30d3,
						0x8373: 0x30d4,
						0x8374: 0x30d5,
						0x8375: 0x30d6,
						0x8376: 0x30d7,
						0x8377: 0x30d8,
						0x8378: 0x30d9,
						0x8379: 0x30da,
						0x837a: 0x30db,
						0x837b: 0x30dc,
						0x837c: 0x30dd,
						0x837d: 0x30de,
						0x837e: 0x30df,
						0x8380: 0x30e0,
						0x8381: 0x30e1,
						0x8382: 0x30e2,
						0x8383: 0x30e3,
						0x8384: 0x30e4,
						0x8385: 0x30e5,
						0x8386: 0x30e6,
						0x8387: 0x30e7,
						0x8388: 0x30e8,
						0x8389: 0x30e9,
						0x838a: 0x30ea,
						0x838b: 0x30eb,
						0x838c: 0x30ec,
						0x838d: 0x30ed,
						0x838e: 0x30ee,
						0x838f: 0x30ef,
						0x8390: 0x30f0,
						0x8391: 0x30f1,
						0x8392: 0x30f2,
						0x8393: 0x30f3,
						0x8394: 0x30f4,
						0x8395: 0x30f5,
						0x8396: 0x30f6,
						0x839f: 0x0391,
						0x83a0: 0x0392,
						0x83a1: 0x0393,
						0x83a2: 0x0394,
						0x83a3: 0x0395,
						0x83a4: 0x0396,
						0x83a5: 0x0397,
						0x83a6: 0x0398,
						0x83a7: 0x0399,
						0x83a8: 0x039a,
						0x83a9: 0x039b,
						0x83aa: 0x039c,
						0x83ab: 0x039d,
						0x83ac: 0x039e,
						0x83ad: 0x039f,
						0x83ae: 0x03a0,
						0x83af: 0x03a1,
						0x83b0: 0x03a3,
						0x83b1: 0x03a4,
						0x83b2: 0x03a5,
						0x83b3: 0x03a6,
						0x83b4: 0x03a7,
						0x83b5: 0x03a8,
						0x83b6: 0x03a9,
						0x83bf: 0x03b1,
						0x83c0: 0x03b2,
						0x83c1: 0x03b3,
						0x83c2: 0x03b4,
						0x83c3: 0x03b5,
						0x83c4: 0x03b6,
						0x83c5: 0x03b7,
						0x83c6: 0x03b8,
						0x83c7: 0x03b9,
						0x83c8: 0x03ba,
						0x83c9: 0x03bb,
						0x83ca: 0x03bc,
						0x83cb: 0x03bd,
						0x83cc: 0x03be,
						0x83cd: 0x03bf,
						0x83ce: 0x03c0,
						0x83cf: 0x03c1,
						0x83d0: 0x03c3,
						0x83d1: 0x03c4,
						0x83d2: 0x03c5,
						0x83d3: 0x03c6,
						0x83d4: 0x03c7,
						0x83d5: 0x03c8,
						0x83d6: 0x03c9,
						0x8440: 0x0410,
						0x8441: 0x0411,
						0x8442: 0x0412,
						0x8443: 0x0413,
						0x8444: 0x0414,
						0x8445: 0x0415,
						0x8446: 0x0401,
						0x8447: 0x0416,
						0x8448: 0x0417,
						0x8449: 0x0418,
						0x844a: 0x0419,
						0x844b: 0x041a,
						0x844c: 0x041b,
						0x844d: 0x041c,
						0x844e: 0x041d,
						0x844f: 0x041e,
						0x8450: 0x041f,
						0x8451: 0x0420,
						0x8452: 0x0421,
						0x8453: 0x0422,
						0x8454: 0x0423,
						0x8455: 0x0424,
						0x8456: 0x0425,
						0x8457: 0x0426,
						0x8458: 0x0427,
						0x8459: 0x0428,
						0x845a: 0x0429,
						0x845b: 0x042a,
						0x845c: 0x042b,
						0x845d: 0x042c,
						0x845e: 0x042d,
						0x845f: 0x042e,
						0x8460: 0x042f,
						0x8470: 0x0430,
						0x8471: 0x0431,
						0x8472: 0x0432,
						0x8473: 0x0433,
						0x8474: 0x0434,
						0x8475: 0x0435,
						0x8476: 0x0451,
						0x8477: 0x0436,
						0x8478: 0x0437,
						0x8479: 0x0438,
						0x847a: 0x0439,
						0x847b: 0x043a,
						0x847c: 0x043b,
						0x847d: 0x043c,
						0x847e: 0x043d,
						0x8480: 0x043e,
						0x8481: 0x043f,
						0x8482: 0x0440,
						0x8483: 0x0441,
						0x8484: 0x0442,
						0x8485: 0x0443,
						0x8486: 0x0444,
						0x8487: 0x0445,
						0x8488: 0x0446,
						0x8489: 0x0447,
						0x848a: 0x0448,
						0x848b: 0x0449,
						0x848c: 0x044a,
						0x848d: 0x044b,
						0x848e: 0x044c,
						0x848f: 0x044d,
						0x8490: 0x044e,
						0x8491: 0x044f,
						0x849f: 0x2500,
						0x84a0: 0x2502,
						0x84a1: 0x250c,
						0x84a2: 0x2510,
						0x84a3: 0x2518,
						0x84a4: 0x2514,
						0x84a5: 0x251c,
						0x84a6: 0x252c,
						0x84a7: 0x2524,
						0x84a8: 0x2534,
						0x84a9: 0x253c,
						0x84aa: 0x2501,
						0x84ab: 0x2503,
						0x84ac: 0x250f,
						0x84ad: 0x2513,
						0x84ae: 0x251b,
						0x84af: 0x2517,
						0x84b0: 0x2523,
						0x84b1: 0x2533,
						0x84b2: 0x252b,
						0x84b3: 0x253b,
						0x84b4: 0x254b,
						0x84b5: 0x2520,
						0x84b6: 0x252f,
						0x84b7: 0x2528,
						0x84b8: 0x2537,
						0x84b9: 0x253f,
						0x84ba: 0x251d,
						0x84bb: 0x2530,
						0x84bc: 0x2525,
						0x84bd: 0x2538,
						0x84be: 0x2542,
						0x889f: 0x4e9c,
						0x88a0: 0x5516,
						0x88a1: 0x5a03,
						0x88a2: 0x963f,
						0x88a3: 0x54c0,
						0x88a4: 0x611b,
						0x88a5: 0x6328,
						0x88a6: 0x59f6,
						0x88a7: 0x9022,
						0x88a8: 0x8475,
						0x88a9: 0x831c,
						0x88aa: 0x7a50,
						0x88ab: 0x60aa,
						0x88ac: 0x63e1,
						0x88ad: 0x6e25,
						0x88ae: 0x65ed,
						0x88af: 0x8466,
						0x88b0: 0x82a6,
						0x88b1: 0x9bf5,
						0x88b2: 0x6893,
						0x88b3: 0x5727,
						0x88b4: 0x65a1,
						0x88b5: 0x6271,
						0x88b6: 0x5b9b,
						0x88b7: 0x59d0,
						0x88b8: 0x867b,
						0x88b9: 0x98f4,
						0x88ba: 0x7d62,
						0x88bb: 0x7dbe,
						0x88bc: 0x9b8e,
						0x88bd: 0x6216,
						0x88be: 0x7c9f,
						0x88bf: 0x88b7,
						0x88c0: 0x5b89,
						0x88c1: 0x5eb5,
						0x88c2: 0x6309,
						0x88c3: 0x6697,
						0x88c4: 0x6848,
						0x88c5: 0x95c7,
						0x88c6: 0x978d,
						0x88c7: 0x674f,
						0x88c8: 0x4ee5,
						0x88c9: 0x4f0a,
						0x88ca: 0x4f4d,
						0x88cb: 0x4f9d,
						0x88cc: 0x5049,
						0x88cd: 0x56f2,
						0x88ce: 0x5937,
						0x88cf: 0x59d4,
						0x88d0: 0x5a01,
						0x88d1: 0x5c09,
						0x88d2: 0x60df,
						0x88d3: 0x610f,
						0x88d4: 0x6170,
						0x88d5: 0x6613,
						0x88d6: 0x6905,
						0x88d7: 0x70ba,
						0x88d8: 0x754f,
						0x88d9: 0x7570,
						0x88da: 0x79fb,
						0x88db: 0x7dad,
						0x88dc: 0x7def,
						0x88dd: 0x80c3,
						0x88de: 0x840e,
						0x88df: 0x8863,
						0x88e0: 0x8b02,
						0x88e1: 0x9055,
						0x88e2: 0x907a,
						0x88e3: 0x533b,
						0x88e4: 0x4e95,
						0x88e5: 0x4ea5,
						0x88e6: 0x57df,
						0x88e7: 0x80b2,
						0x88e8: 0x90c1,
						0x88e9: 0x78ef,
						0x88ea: 0x4e00,
						0x88eb: 0x58f1,
						0x88ec: 0x6ea2,
						0x88ed: 0x9038,
						0x88ee: 0x7a32,
						0x88ef: 0x8328,
						0x88f0: 0x828b,
						0x88f1: 0x9c2f,
						0x88f2: 0x5141,
						0x88f3: 0x5370,
						0x88f4: 0x54bd,
						0x88f5: 0x54e1,
						0x88f6: 0x56e0,
						0x88f7: 0x59fb,
						0x88f8: 0x5f15,
						0x88f9: 0x98f2,
						0x88fa: 0x6deb,
						0x88fb: 0x80e4,
						0x88fc: 0x852d,
						0x8940: 0x9662,
						0x8941: 0x9670,
						0x8942: 0x96a0,
						0x8943: 0x97fb,
						0x8944: 0x540b,
						0x8945: 0x53f3,
						0x8946: 0x5b87,
						0x8947: 0x70cf,
						0x8948: 0x7fbd,
						0x8949: 0x8fc2,
						0x894a: 0x96e8,
						0x894b: 0x536f,
						0x894c: 0x9d5c,
						0x894d: 0x7aba,
						0x894e: 0x4e11,
						0x894f: 0x7893,
						0x8950: 0x81fc,
						0x8951: 0x6e26,
						0x8952: 0x5618,
						0x8953: 0x5504,
						0x8954: 0x6b1d,
						0x8955: 0x851a,
						0x8956: 0x9c3b,
						0x8957: 0x59e5,
						0x8958: 0x53a9,
						0x8959: 0x6d66,
						0x895a: 0x74dc,
						0x895b: 0x958f,
						0x895c: 0x5642,
						0x895d: 0x4e91,
						0x895e: 0x904b,
						0x895f: 0x96f2,
						0x8960: 0x834f,
						0x8961: 0x990c,
						0x8962: 0x53e1,
						0x8963: 0x55b6,
						0x8964: 0x5b30,
						0x8965: 0x5f71,
						0x8966: 0x6620,
						0x8967: 0x66f3,
						0x8968: 0x6804,
						0x8969: 0x6c38,
						0x896a: 0x6cf3,
						0x896b: 0x6d29,
						0x896c: 0x745b,
						0x896d: 0x76c8,
						0x896e: 0x7a4e,
						0x896f: 0x9834,
						0x8970: 0x82f1,
						0x8971: 0x885b,
						0x8972: 0x8a60,
						0x8973: 0x92ed,
						0x8974: 0x6db2,
						0x8975: 0x75ab,
						0x8976: 0x76ca,
						0x8977: 0x99c5,
						0x8978: 0x60a6,
						0x8979: 0x8b01,
						0x897a: 0x8d8a,
						0x897b: 0x95b2,
						0x897c: 0x698e,
						0x897d: 0x53ad,
						0x897e: 0x5186,
						0x8980: 0x5712,
						0x8981: 0x5830,
						0x8982: 0x5944,
						0x8983: 0x5bb4,
						0x8984: 0x5ef6,
						0x8985: 0x6028,
						0x8986: 0x63a9,
						0x8987: 0x63f4,
						0x8988: 0x6cbf,
						0x8989: 0x6f14,
						0x898a: 0x708e,
						0x898b: 0x7114,
						0x898c: 0x7159,
						0x898d: 0x71d5,
						0x898e: 0x733f,
						0x898f: 0x7e01,
						0x8990: 0x8276,
						0x8991: 0x82d1,
						0x8992: 0x8597,
						0x8993: 0x9060,
						0x8994: 0x925b,
						0x8995: 0x9d1b,
						0x8996: 0x5869,
						0x8997: 0x65bc,
						0x8998: 0x6c5a,
						0x8999: 0x7525,
						0x899a: 0x51f9,
						0x899b: 0x592e,
						0x899c: 0x5965,
						0x899d: 0x5f80,
						0x899e: 0x5fdc,
						0x899f: 0x62bc,
						0x89a0: 0x65fa,
						0x89a1: 0x6a2a,
						0x89a2: 0x6b27,
						0x89a3: 0x6bb4,
						0x89a4: 0x738b,
						0x89a5: 0x7fc1,
						0x89a6: 0x8956,
						0x89a7: 0x9d2c,
						0x89a8: 0x9d0e,
						0x89a9: 0x9ec4,
						0x89aa: 0x5ca1,
						0x89ab: 0x6c96,
						0x89ac: 0x837b,
						0x89ad: 0x5104,
						0x89ae: 0x5c4b,
						0x89af: 0x61b6,
						0x89b0: 0x81c6,
						0x89b1: 0x6876,
						0x89b2: 0x7261,
						0x89b3: 0x4e59,
						0x89b4: 0x4ffa,
						0x89b5: 0x5378,
						0x89b6: 0x6069,
						0x89b7: 0x6e29,
						0x89b8: 0x7a4f,
						0x89b9: 0x97f3,
						0x89ba: 0x4e0b,
						0x89bb: 0x5316,
						0x89bc: 0x4eee,
						0x89bd: 0x4f55,
						0x89be: 0x4f3d,
						0x89bf: 0x4fa1,
						0x89c0: 0x4f73,
						0x89c1: 0x52a0,
						0x89c2: 0x53ef,
						0x89c3: 0x5609,
						0x89c4: 0x590f,
						0x89c5: 0x5ac1,
						0x89c6: 0x5bb6,
						0x89c7: 0x5be1,
						0x89c8: 0x79d1,
						0x89c9: 0x6687,
						0x89ca: 0x679c,
						0x89cb: 0x67b6,
						0x89cc: 0x6b4c,
						0x89cd: 0x6cb3,
						0x89ce: 0x706b,
						0x89cf: 0x73c2,
						0x89d0: 0x798d,
						0x89d1: 0x79be,
						0x89d2: 0x7a3c,
						0x89d3: 0x7b87,
						0x89d4: 0x82b1,
						0x89d5: 0x82db,
						0x89d6: 0x8304,
						0x89d7: 0x8377,
						0x89d8: 0x83ef,
						0x89d9: 0x83d3,
						0x89da: 0x8766,
						0x89db: 0x8ab2,
						0x89dc: 0x5629,
						0x89dd: 0x8ca8,
						0x89de: 0x8fe6,
						0x89df: 0x904e,
						0x89e0: 0x971e,
						0x89e1: 0x868a,
						0x89e2: 0x4fc4,
						0x89e3: 0x5ce8,
						0x89e4: 0x6211,
						0x89e5: 0x7259,
						0x89e6: 0x753b,
						0x89e7: 0x81e5,
						0x89e8: 0x82bd,
						0x89e9: 0x86fe,
						0x89ea: 0x8cc0,
						0x89eb: 0x96c5,
						0x89ec: 0x9913,
						0x89ed: 0x99d5,
						0x89ee: 0x4ecb,
						0x89ef: 0x4f1a,
						0x89f0: 0x89e3,
						0x89f1: 0x56de,
						0x89f2: 0x584a,
						0x89f3: 0x58ca,
						0x89f4: 0x5efb,
						0x89f5: 0x5feb,
						0x89f6: 0x602a,
						0x89f7: 0x6094,
						0x89f8: 0x6062,
						0x89f9: 0x61d0,
						0x89fa: 0x6212,
						0x89fb: 0x62d0,
						0x89fc: 0x6539,
						0x8a40: 0x9b41,
						0x8a41: 0x6666,
						0x8a42: 0x68b0,
						0x8a43: 0x6d77,
						0x8a44: 0x7070,
						0x8a45: 0x754c,
						0x8a46: 0x7686,
						0x8a47: 0x7d75,
						0x8a48: 0x82a5,
						0x8a49: 0x87f9,
						0x8a4a: 0x958b,
						0x8a4b: 0x968e,
						0x8a4c: 0x8c9d,
						0x8a4d: 0x51f1,
						0x8a4e: 0x52be,
						0x8a4f: 0x5916,
						0x8a50: 0x54b3,
						0x8a51: 0x5bb3,
						0x8a52: 0x5d16,
						0x8a53: 0x6168,
						0x8a54: 0x6982,
						0x8a55: 0x6daf,
						0x8a56: 0x788d,
						0x8a57: 0x84cb,
						0x8a58: 0x8857,
						0x8a59: 0x8a72,
						0x8a5a: 0x93a7,
						0x8a5b: 0x9ab8,
						0x8a5c: 0x6d6c,
						0x8a5d: 0x99a8,
						0x8a5e: 0x86d9,
						0x8a5f: 0x57a3,
						0x8a60: 0x67ff,
						0x8a61: 0x86ce,
						0x8a62: 0x920e,
						0x8a63: 0x5283,
						0x8a64: 0x5687,
						0x8a65: 0x5404,
						0x8a66: 0x5ed3,
						0x8a67: 0x62e1,
						0x8a68: 0x64b9,
						0x8a69: 0x683c,
						0x8a6a: 0x6838,
						0x8a6b: 0x6bbb,
						0x8a6c: 0x7372,
						0x8a6d: 0x78ba,
						0x8a6e: 0x7a6b,
						0x8a6f: 0x899a,
						0x8a70: 0x89d2,
						0x8a71: 0x8d6b,
						0x8a72: 0x8f03,
						0x8a73: 0x90ed,
						0x8a74: 0x95a3,
						0x8a75: 0x9694,
						0x8a76: 0x9769,
						0x8a77: 0x5b66,
						0x8a78: 0x5cb3,
						0x8a79: 0x697d,
						0x8a7a: 0x984d,
						0x8a7b: 0x984e,
						0x8a7c: 0x639b,
						0x8a7d: 0x7b20,
						0x8a7e: 0x6a2b,
						0x8a80: 0x6a7f,
						0x8a81: 0x68b6,
						0x8a82: 0x9c0d,
						0x8a83: 0x6f5f,
						0x8a84: 0x5272,
						0x8a85: 0x559d,
						0x8a86: 0x6070,
						0x8a87: 0x62ec,
						0x8a88: 0x6d3b,
						0x8a89: 0x6e07,
						0x8a8a: 0x6ed1,
						0x8a8b: 0x845b,
						0x8a8c: 0x8910,
						0x8a8d: 0x8f44,
						0x8a8e: 0x4e14,
						0x8a8f: 0x9c39,
						0x8a90: 0x53f6,
						0x8a91: 0x691b,
						0x8a92: 0x6a3a,
						0x8a93: 0x9784,
						0x8a94: 0x682a,
						0x8a95: 0x515c,
						0x8a96: 0x7ac3,
						0x8a97: 0x84b2,
						0x8a98: 0x91dc,
						0x8a99: 0x938c,
						0x8a9a: 0x565b,
						0x8a9b: 0x9d28,
						0x8a9c: 0x6822,
						0x8a9d: 0x8305,
						0x8a9e: 0x8431,
						0x8a9f: 0x7ca5,
						0x8aa0: 0x5208,
						0x8aa1: 0x82c5,
						0x8aa2: 0x74e6,
						0x8aa3: 0x4e7e,
						0x8aa4: 0x4f83,
						0x8aa5: 0x51a0,
						0x8aa6: 0x5bd2,
						0x8aa7: 0x520a,
						0x8aa8: 0x52d8,
						0x8aa9: 0x52e7,
						0x8aaa: 0x5dfb,
						0x8aab: 0x559a,
						0x8aac: 0x582a,
						0x8aad: 0x59e6,
						0x8aae: 0x5b8c,
						0x8aaf: 0x5b98,
						0x8ab0: 0x5bdb,
						0x8ab1: 0x5e72,
						0x8ab2: 0x5e79,
						0x8ab3: 0x60a3,
						0x8ab4: 0x611f,
						0x8ab5: 0x6163,
						0x8ab6: 0x61be,
						0x8ab7: 0x63db,
						0x8ab8: 0x6562,
						0x8ab9: 0x67d1,
						0x8aba: 0x6853,
						0x8abb: 0x68fa,
						0x8abc: 0x6b3e,
						0x8abd: 0x6b53,
						0x8abe: 0x6c57,
						0x8abf: 0x6f22,
						0x8ac0: 0x6f97,
						0x8ac1: 0x6f45,
						0x8ac2: 0x74b0,
						0x8ac3: 0x7518,
						0x8ac4: 0x76e3,
						0x8ac5: 0x770b,
						0x8ac6: 0x7aff,
						0x8ac7: 0x7ba1,
						0x8ac8: 0x7c21,
						0x8ac9: 0x7de9,
						0x8aca: 0x7f36,
						0x8acb: 0x7ff0,
						0x8acc: 0x809d,
						0x8acd: 0x8266,
						0x8ace: 0x839e,
						0x8acf: 0x89b3,
						0x8ad0: 0x8acc,
						0x8ad1: 0x8cab,
						0x8ad2: 0x9084,
						0x8ad3: 0x9451,
						0x8ad4: 0x9593,
						0x8ad5: 0x9591,
						0x8ad6: 0x95a2,
						0x8ad7: 0x9665,
						0x8ad8: 0x97d3,
						0x8ad9: 0x9928,
						0x8ada: 0x8218,
						0x8adb: 0x4e38,
						0x8adc: 0x542b,
						0x8add: 0x5cb8,
						0x8ade: 0x5dcc,
						0x8adf: 0x73a9,
						0x8ae0: 0x764c,
						0x8ae1: 0x773c,
						0x8ae2: 0x5ca9,
						0x8ae3: 0x7feb,
						0x8ae4: 0x8d0b,
						0x8ae5: 0x96c1,
						0x8ae6: 0x9811,
						0x8ae7: 0x9854,
						0x8ae8: 0x9858,
						0x8ae9: 0x4f01,
						0x8aea: 0x4f0e,
						0x8aeb: 0x5371,
						0x8aec: 0x559c,
						0x8aed: 0x5668,
						0x8aee: 0x57fa,
						0x8aef: 0x5947,
						0x8af0: 0x5b09,
						0x8af1: 0x5bc4,
						0x8af2: 0x5c90,
						0x8af3: 0x5e0c,
						0x8af4: 0x5e7e,
						0x8af5: 0x5fcc,
						0x8af6: 0x63ee,
						0x8af7: 0x673a,
						0x8af8: 0x65d7,
						0x8af9: 0x65e2,
						0x8afa: 0x671f,
						0x8afb: 0x68cb,
						0x8afc: 0x68c4,
						0x8b40: 0x6a5f,
						0x8b41: 0x5e30,
						0x8b42: 0x6bc5,
						0x8b43: 0x6c17,
						0x8b44: 0x6c7d,
						0x8b45: 0x757f,
						0x8b46: 0x7948,
						0x8b47: 0x5b63,
						0x8b48: 0x7a00,
						0x8b49: 0x7d00,
						0x8b4a: 0x5fbd,
						0x8b4b: 0x898f,
						0x8b4c: 0x8a18,
						0x8b4d: 0x8cb4,
						0x8b4e: 0x8d77,
						0x8b4f: 0x8ecc,
						0x8b50: 0x8f1d,
						0x8b51: 0x98e2,
						0x8b52: 0x9a0e,
						0x8b53: 0x9b3c,
						0x8b54: 0x4e80,
						0x8b55: 0x507d,
						0x8b56: 0x5100,
						0x8b57: 0x5993,
						0x8b58: 0x5b9c,
						0x8b59: 0x622f,
						0x8b5a: 0x6280,
						0x8b5b: 0x64ec,
						0x8b5c: 0x6b3a,
						0x8b5d: 0x72a0,
						0x8b5e: 0x7591,
						0x8b5f: 0x7947,
						0x8b60: 0x7fa9,
						0x8b61: 0x87fb,
						0x8b62: 0x8abc,
						0x8b63: 0x8b70,
						0x8b64: 0x63ac,
						0x8b65: 0x83ca,
						0x8b66: 0x97a0,
						0x8b67: 0x5409,
						0x8b68: 0x5403,
						0x8b69: 0x55ab,
						0x8b6a: 0x6854,
						0x8b6b: 0x6a58,
						0x8b6c: 0x8a70,
						0x8b6d: 0x7827,
						0x8b6e: 0x6775,
						0x8b6f: 0x9ecd,
						0x8b70: 0x5374,
						0x8b71: 0x5ba2,
						0x8b72: 0x811a,
						0x8b73: 0x8650,
						0x8b74: 0x9006,
						0x8b75: 0x4e18,
						0x8b76: 0x4e45,
						0x8b77: 0x4ec7,
						0x8b78: 0x4f11,
						0x8b79: 0x53ca,
						0x8b7a: 0x5438,
						0x8b7b: 0x5bae,
						0x8b7c: 0x5f13,
						0x8b7d: 0x6025,
						0x8b7e: 0x6551,
						0x8b80: 0x673d,
						0x8b81: 0x6c42,
						0x8b82: 0x6c72,
						0x8b83: 0x6ce3,
						0x8b84: 0x7078,
						0x8b85: 0x7403,
						0x8b86: 0x7a76,
						0x8b87: 0x7aae,
						0x8b88: 0x7b08,
						0x8b89: 0x7d1a,
						0x8b8a: 0x7cfe,
						0x8b8b: 0x7d66,
						0x8b8c: 0x65e7,
						0x8b8d: 0x725b,
						0x8b8e: 0x53bb,
						0x8b8f: 0x5c45,
						0x8b90: 0x5de8,
						0x8b91: 0x62d2,
						0x8b92: 0x62e0,
						0x8b93: 0x6319,
						0x8b94: 0x6e20,
						0x8b95: 0x865a,
						0x8b96: 0x8a31,
						0x8b97: 0x8ddd,
						0x8b98: 0x92f8,
						0x8b99: 0x6f01,
						0x8b9a: 0x79a6,
						0x8b9b: 0x9b5a,
						0x8b9c: 0x4ea8,
						0x8b9d: 0x4eab,
						0x8b9e: 0x4eac,
						0x8b9f: 0x4f9b,
						0x8ba0: 0x4fa0,
						0x8ba1: 0x50d1,
						0x8ba2: 0x5147,
						0x8ba3: 0x7af6,
						0x8ba4: 0x5171,
						0x8ba5: 0x51f6,
						0x8ba6: 0x5354,
						0x8ba7: 0x5321,
						0x8ba8: 0x537f,
						0x8ba9: 0x53eb,
						0x8baa: 0x55ac,
						0x8bab: 0x5883,
						0x8bac: 0x5ce1,
						0x8bad: 0x5f37,
						0x8bae: 0x5f4a,
						0x8baf: 0x602f,
						0x8bb0: 0x6050,
						0x8bb1: 0x606d,
						0x8bb2: 0x631f,
						0x8bb3: 0x6559,
						0x8bb4: 0x6a4b,
						0x8bb5: 0x6cc1,
						0x8bb6: 0x72c2,
						0x8bb7: 0x72ed,
						0x8bb8: 0x77ef,
						0x8bb9: 0x80f8,
						0x8bba: 0x8105,
						0x8bbb: 0x8208,
						0x8bbc: 0x854e,
						0x8bbd: 0x90f7,
						0x8bbe: 0x93e1,
						0x8bbf: 0x97ff,
						0x8bc0: 0x9957,
						0x8bc1: 0x9a5a,
						0x8bc2: 0x4ef0,
						0x8bc3: 0x51dd,
						0x8bc4: 0x5c2d,
						0x8bc5: 0x6681,
						0x8bc6: 0x696d,
						0x8bc7: 0x5c40,
						0x8bc8: 0x66f2,
						0x8bc9: 0x6975,
						0x8bca: 0x7389,
						0x8bcb: 0x6850,
						0x8bcc: 0x7c81,
						0x8bcd: 0x50c5,
						0x8bce: 0x52e4,
						0x8bcf: 0x5747,
						0x8bd0: 0x5dfe,
						0x8bd1: 0x9326,
						0x8bd2: 0x65a4,
						0x8bd3: 0x6b23,
						0x8bd4: 0x6b3d,
						0x8bd5: 0x7434,
						0x8bd6: 0x7981,
						0x8bd7: 0x79bd,
						0x8bd8: 0x7b4b,
						0x8bd9: 0x7dca,
						0x8bda: 0x82b9,
						0x8bdb: 0x83cc,
						0x8bdc: 0x887f,
						0x8bdd: 0x895f,
						0x8bde: 0x8b39,
						0x8bdf: 0x8fd1,
						0x8be0: 0x91d1,
						0x8be1: 0x541f,
						0x8be2: 0x9280,
						0x8be3: 0x4e5d,
						0x8be4: 0x5036,
						0x8be5: 0x53e5,
						0x8be6: 0x533a,
						0x8be7: 0x72d7,
						0x8be8: 0x7396,
						0x8be9: 0x77e9,
						0x8bea: 0x82e6,
						0x8beb: 0x8eaf,
						0x8bec: 0x99c6,
						0x8bed: 0x99c8,
						0x8bee: 0x99d2,
						0x8bef: 0x5177,
						0x8bf0: 0x611a,
						0x8bf1: 0x865e,
						0x8bf2: 0x55b0,
						0x8bf3: 0x7a7a,
						0x8bf4: 0x5076,
						0x8bf5: 0x5bd3,
						0x8bf6: 0x9047,
						0x8bf7: 0x9685,
						0x8bf8: 0x4e32,
						0x8bf9: 0x6adb,
						0x8bfa: 0x91e7,
						0x8bfb: 0x5c51,
						0x8bfc: 0x5c48,
						0x8c40: 0x6398,
						0x8c41: 0x7a9f,
						0x8c42: 0x6c93,
						0x8c43: 0x9774,
						0x8c44: 0x8f61,
						0x8c45: 0x7aaa,
						0x8c46: 0x718a,
						0x8c47: 0x9688,
						0x8c48: 0x7c82,
						0x8c49: 0x6817,
						0x8c4a: 0x7e70,
						0x8c4b: 0x6851,
						0x8c4c: 0x936c,
						0x8c4d: 0x52f2,
						0x8c4e: 0x541b,
						0x8c4f: 0x85ab,
						0x8c50: 0x8a13,
						0x8c51: 0x7fa4,
						0x8c52: 0x8ecd,
						0x8c53: 0x90e1,
						0x8c54: 0x5366,
						0x8c55: 0x8888,
						0x8c56: 0x7941,
						0x8c57: 0x4fc2,
						0x8c58: 0x50be,
						0x8c59: 0x5211,
						0x8c5a: 0x5144,
						0x8c5b: 0x5553,
						0x8c5c: 0x572d,
						0x8c5d: 0x73ea,
						0x8c5e: 0x578b,
						0x8c5f: 0x5951,
						0x8c60: 0x5f62,
						0x8c61: 0x5f84,
						0x8c62: 0x6075,
						0x8c63: 0x6176,
						0x8c64: 0x6167,
						0x8c65: 0x61a9,
						0x8c66: 0x63b2,
						0x8c67: 0x643a,
						0x8c68: 0x656c,
						0x8c69: 0x666f,
						0x8c6a: 0x6842,
						0x8c6b: 0x6e13,
						0x8c6c: 0x7566,
						0x8c6d: 0x7a3d,
						0x8c6e: 0x7cfb,
						0x8c6f: 0x7d4c,
						0x8c70: 0x7d99,
						0x8c71: 0x7e4b,
						0x8c72: 0x7f6b,
						0x8c73: 0x830e,
						0x8c74: 0x834a,
						0x8c75: 0x86cd,
						0x8c76: 0x8a08,
						0x8c77: 0x8a63,
						0x8c78: 0x8b66,
						0x8c79: 0x8efd,
						0x8c7a: 0x981a,
						0x8c7b: 0x9d8f,
						0x8c7c: 0x82b8,
						0x8c7d: 0x8fce,
						0x8c7e: 0x9be8,
						0x8c80: 0x5287,
						0x8c81: 0x621f,
						0x8c82: 0x6483,
						0x8c83: 0x6fc0,
						0x8c84: 0x9699,
						0x8c85: 0x6841,
						0x8c86: 0x5091,
						0x8c87: 0x6b20,
						0x8c88: 0x6c7a,
						0x8c89: 0x6f54,
						0x8c8a: 0x7a74,
						0x8c8b: 0x7d50,
						0x8c8c: 0x8840,
						0x8c8d: 0x8a23,
						0x8c8e: 0x6708,
						0x8c8f: 0x4ef6,
						0x8c90: 0x5039,
						0x8c91: 0x5026,
						0x8c92: 0x5065,
						0x8c93: 0x517c,
						0x8c94: 0x5238,
						0x8c95: 0x5263,
						0x8c96: 0x55a7,
						0x8c97: 0x570f,
						0x8c98: 0x5805,
						0x8c99: 0x5acc,
						0x8c9a: 0x5efa,
						0x8c9b: 0x61b2,
						0x8c9c: 0x61f8,
						0x8c9d: 0x62f3,
						0x8c9e: 0x6372,
						0x8c9f: 0x691c,
						0x8ca0: 0x6a29,
						0x8ca1: 0x727d,
						0x8ca2: 0x72ac,
						0x8ca3: 0x732e,
						0x8ca4: 0x7814,
						0x8ca5: 0x786f,
						0x8ca6: 0x7d79,
						0x8ca7: 0x770c,
						0x8ca8: 0x80a9,
						0x8ca9: 0x898b,
						0x8caa: 0x8b19,
						0x8cab: 0x8ce2,
						0x8cac: 0x8ed2,
						0x8cad: 0x9063,
						0x8cae: 0x9375,
						0x8caf: 0x967a,
						0x8cb0: 0x9855,
						0x8cb1: 0x9a13,
						0x8cb2: 0x9e78,
						0x8cb3: 0x5143,
						0x8cb4: 0x539f,
						0x8cb5: 0x53b3,
						0x8cb6: 0x5e7b,
						0x8cb7: 0x5f26,
						0x8cb8: 0x6e1b,
						0x8cb9: 0x6e90,
						0x8cba: 0x7384,
						0x8cbb: 0x73fe,
						0x8cbc: 0x7d43,
						0x8cbd: 0x8237,
						0x8cbe: 0x8a00,
						0x8cbf: 0x8afa,
						0x8cc0: 0x9650,
						0x8cc1: 0x4e4e,
						0x8cc2: 0x500b,
						0x8cc3: 0x53e4,
						0x8cc4: 0x547c,
						0x8cc5: 0x56fa,
						0x8cc6: 0x59d1,
						0x8cc7: 0x5b64,
						0x8cc8: 0x5df1,
						0x8cc9: 0x5eab,
						0x8cca: 0x5f27,
						0x8ccb: 0x6238,
						0x8ccc: 0x6545,
						0x8ccd: 0x67af,
						0x8cce: 0x6e56,
						0x8ccf: 0x72d0,
						0x8cd0: 0x7cca,
						0x8cd1: 0x88b4,
						0x8cd2: 0x80a1,
						0x8cd3: 0x80e1,
						0x8cd4: 0x83f0,
						0x8cd5: 0x864e,
						0x8cd6: 0x8a87,
						0x8cd7: 0x8de8,
						0x8cd8: 0x9237,
						0x8cd9: 0x96c7,
						0x8cda: 0x9867,
						0x8cdb: 0x9f13,
						0x8cdc: 0x4e94,
						0x8cdd: 0x4e92,
						0x8cde: 0x4f0d,
						0x8cdf: 0x5348,
						0x8ce0: 0x5449,
						0x8ce1: 0x543e,
						0x8ce2: 0x5a2f,
						0x8ce3: 0x5f8c,
						0x8ce4: 0x5fa1,
						0x8ce5: 0x609f,
						0x8ce6: 0x68a7,
						0x8ce7: 0x6a8e,
						0x8ce8: 0x745a,
						0x8ce9: 0x7881,
						0x8cea: 0x8a9e,
						0x8ceb: 0x8aa4,
						0x8cec: 0x8b77,
						0x8ced: 0x9190,
						0x8cee: 0x4e5e,
						0x8cef: 0x9bc9,
						0x8cf0: 0x4ea4,
						0x8cf1: 0x4f7c,
						0x8cf2: 0x4faf,
						0x8cf3: 0x5019,
						0x8cf4: 0x5016,
						0x8cf5: 0x5149,
						0x8cf6: 0x516c,
						0x8cf7: 0x529f,
						0x8cf8: 0x52b9,
						0x8cf9: 0x52fe,
						0x8cfa: 0x539a,
						0x8cfb: 0x53e3,
						0x8cfc: 0x5411,
						0x8d40: 0x540e,
						0x8d41: 0x5589,
						0x8d42: 0x5751,
						0x8d43: 0x57a2,
						0x8d44: 0x597d,
						0x8d45: 0x5b54,
						0x8d46: 0x5b5d,
						0x8d47: 0x5b8f,
						0x8d48: 0x5de5,
						0x8d49: 0x5de7,
						0x8d4a: 0x5df7,
						0x8d4b: 0x5e78,
						0x8d4c: 0x5e83,
						0x8d4d: 0x5e9a,
						0x8d4e: 0x5eb7,
						0x8d4f: 0x5f18,
						0x8d50: 0x6052,
						0x8d51: 0x614c,
						0x8d52: 0x6297,
						0x8d53: 0x62d8,
						0x8d54: 0x63a7,
						0x8d55: 0x653b,
						0x8d56: 0x6602,
						0x8d57: 0x6643,
						0x8d58: 0x66f4,
						0x8d59: 0x676d,
						0x8d5a: 0x6821,
						0x8d5b: 0x6897,
						0x8d5c: 0x69cb,
						0x8d5d: 0x6c5f,
						0x8d5e: 0x6d2a,
						0x8d5f: 0x6d69,
						0x8d60: 0x6e2f,
						0x8d61: 0x6e9d,
						0x8d62: 0x7532,
						0x8d63: 0x7687,
						0x8d64: 0x786c,
						0x8d65: 0x7a3f,
						0x8d66: 0x7ce0,
						0x8d67: 0x7d05,
						0x8d68: 0x7d18,
						0x8d69: 0x7d5e,
						0x8d6a: 0x7db1,
						0x8d6b: 0x8015,
						0x8d6c: 0x8003,
						0x8d6d: 0x80af,
						0x8d6e: 0x80b1,
						0x8d6f: 0x8154,
						0x8d70: 0x818f,
						0x8d71: 0x822a,
						0x8d72: 0x8352,
						0x8d73: 0x884c,
						0x8d74: 0x8861,
						0x8d75: 0x8b1b,
						0x8d76: 0x8ca2,
						0x8d77: 0x8cfc,
						0x8d78: 0x90ca,
						0x8d79: 0x9175,
						0x8d7a: 0x9271,
						0x8d7b: 0x783f,
						0x8d7c: 0x92fc,
						0x8d7d: 0x95a4,
						0x8d7e: 0x964d,
						0x8d80: 0x9805,
						0x8d81: 0x9999,
						0x8d82: 0x9ad8,
						0x8d83: 0x9d3b,
						0x8d84: 0x525b,
						0x8d85: 0x52ab,
						0x8d86: 0x53f7,
						0x8d87: 0x5408,
						0x8d88: 0x58d5,
						0x8d89: 0x62f7,
						0x8d8a: 0x6fe0,
						0x8d8b: 0x8c6a,
						0x8d8c: 0x8f5f,
						0x8d8d: 0x9eb9,
						0x8d8e: 0x514b,
						0x8d8f: 0x523b,
						0x8d90: 0x544a,
						0x8d91: 0x56fd,
						0x8d92: 0x7a40,
						0x8d93: 0x9177,
						0x8d94: 0x9d60,
						0x8d95: 0x9ed2,
						0x8d96: 0x7344,
						0x8d97: 0x6f09,
						0x8d98: 0x8170,
						0x8d99: 0x7511,
						0x8d9a: 0x5ffd,
						0x8d9b: 0x60da,
						0x8d9c: 0x9aa8,
						0x8d9d: 0x72db,
						0x8d9e: 0x8fbc,
						0x8d9f: 0x6b64,
						0x8da0: 0x9803,
						0x8da1: 0x4eca,
						0x8da2: 0x56f0,
						0x8da3: 0x5764,
						0x8da4: 0x58be,
						0x8da5: 0x5a5a,
						0x8da6: 0x6068,
						0x8da7: 0x61c7,
						0x8da8: 0x660f,
						0x8da9: 0x6606,
						0x8daa: 0x6839,
						0x8dab: 0x68b1,
						0x8dac: 0x6df7,
						0x8dad: 0x75d5,
						0x8dae: 0x7d3a,
						0x8daf: 0x826e,
						0x8db0: 0x9b42,
						0x8db1: 0x4e9b,
						0x8db2: 0x4f50,
						0x8db3: 0x53c9,
						0x8db4: 0x5506,
						0x8db5: 0x5d6f,
						0x8db6: 0x5de6,
						0x8db7: 0x5dee,
						0x8db8: 0x67fb,
						0x8db9: 0x6c99,
						0x8dba: 0x7473,
						0x8dbb: 0x7802,
						0x8dbc: 0x8a50,
						0x8dbd: 0x9396,
						0x8dbe: 0x88df,
						0x8dbf: 0x5750,
						0x8dc0: 0x5ea7,
						0x8dc1: 0x632b,
						0x8dc2: 0x50b5,
						0x8dc3: 0x50ac,
						0x8dc4: 0x518d,
						0x8dc5: 0x6700,
						0x8dc6: 0x54c9,
						0x8dc7: 0x585e,
						0x8dc8: 0x59bb,
						0x8dc9: 0x5bb0,
						0x8dca: 0x5f69,
						0x8dcb: 0x624d,
						0x8dcc: 0x63a1,
						0x8dcd: 0x683d,
						0x8dce: 0x6b73,
						0x8dcf: 0x6e08,
						0x8dd0: 0x707d,
						0x8dd1: 0x91c7,
						0x8dd2: 0x7280,
						0x8dd3: 0x7815,
						0x8dd4: 0x7826,
						0x8dd5: 0x796d,
						0x8dd6: 0x658e,
						0x8dd7: 0x7d30,
						0x8dd8: 0x83dc,
						0x8dd9: 0x88c1,
						0x8dda: 0x8f09,
						0x8ddb: 0x969b,
						0x8ddc: 0x5264,
						0x8ddd: 0x5728,
						0x8dde: 0x6750,
						0x8ddf: 0x7f6a,
						0x8de0: 0x8ca1,
						0x8de1: 0x51b4,
						0x8de2: 0x5742,
						0x8de3: 0x962a,
						0x8de4: 0x583a,
						0x8de5: 0x698a,
						0x8de6: 0x80b4,
						0x8de7: 0x54b2,
						0x8de8: 0x5d0e,
						0x8de9: 0x57fc,
						0x8dea: 0x7895,
						0x8deb: 0x9dfa,
						0x8dec: 0x4f5c,
						0x8ded: 0x524a,
						0x8dee: 0x548b,
						0x8def: 0x643e,
						0x8df0: 0x6628,
						0x8df1: 0x6714,
						0x8df2: 0x67f5,
						0x8df3: 0x7a84,
						0x8df4: 0x7b56,
						0x8df5: 0x7d22,
						0x8df6: 0x932f,
						0x8df7: 0x685c,
						0x8df8: 0x9bad,
						0x8df9: 0x7b39,
						0x8dfa: 0x5319,
						0x8dfb: 0x518a,
						0x8dfc: 0x5237,
						0x8e40: 0x5bdf,
						0x8e41: 0x62f6,
						0x8e42: 0x64ae,
						0x8e43: 0x64e6,
						0x8e44: 0x672d,
						0x8e45: 0x6bba,
						0x8e46: 0x85a9,
						0x8e47: 0x96d1,
						0x8e48: 0x7690,
						0x8e49: 0x9bd6,
						0x8e4a: 0x634c,
						0x8e4b: 0x9306,
						0x8e4c: 0x9bab,
						0x8e4d: 0x76bf,
						0x8e4e: 0x6652,
						0x8e4f: 0x4e09,
						0x8e50: 0x5098,
						0x8e51: 0x53c2,
						0x8e52: 0x5c71,
						0x8e53: 0x60e8,
						0x8e54: 0x6492,
						0x8e55: 0x6563,
						0x8e56: 0x685f,
						0x8e57: 0x71e6,
						0x8e58: 0x73ca,
						0x8e59: 0x7523,
						0x8e5a: 0x7b97,
						0x8e5b: 0x7e82,
						0x8e5c: 0x8695,
						0x8e5d: 0x8b83,
						0x8e5e: 0x8cdb,
						0x8e5f: 0x9178,
						0x8e60: 0x9910,
						0x8e61: 0x65ac,
						0x8e62: 0x66ab,
						0x8e63: 0x6b8b,
						0x8e64: 0x4ed5,
						0x8e65: 0x4ed4,
						0x8e66: 0x4f3a,
						0x8e67: 0x4f7f,
						0x8e68: 0x523a,
						0x8e69: 0x53f8,
						0x8e6a: 0x53f2,
						0x8e6b: 0x55e3,
						0x8e6c: 0x56db,
						0x8e6d: 0x58eb,
						0x8e6e: 0x59cb,
						0x8e6f: 0x59c9,
						0x8e70: 0x59ff,
						0x8e71: 0x5b50,
						0x8e72: 0x5c4d,
						0x8e73: 0x5e02,
						0x8e74: 0x5e2b,
						0x8e75: 0x5fd7,
						0x8e76: 0x601d,
						0x8e77: 0x6307,
						0x8e78: 0x652f,
						0x8e79: 0x5b5c,
						0x8e7a: 0x65af,
						0x8e7b: 0x65bd,
						0x8e7c: 0x65e8,
						0x8e7d: 0x679d,
						0x8e7e: 0x6b62,
						0x8e80: 0x6b7b,
						0x8e81: 0x6c0f,
						0x8e82: 0x7345,
						0x8e83: 0x7949,
						0x8e84: 0x79c1,
						0x8e85: 0x7cf8,
						0x8e86: 0x7d19,
						0x8e87: 0x7d2b,
						0x8e88: 0x80a2,
						0x8e89: 0x8102,
						0x8e8a: 0x81f3,
						0x8e8b: 0x8996,
						0x8e8c: 0x8a5e,
						0x8e8d: 0x8a69,
						0x8e8e: 0x8a66,
						0x8e8f: 0x8a8c,
						0x8e90: 0x8aee,
						0x8e91: 0x8cc7,
						0x8e92: 0x8cdc,
						0x8e93: 0x96cc,
						0x8e94: 0x98fc,
						0x8e95: 0x6b6f,
						0x8e96: 0x4e8b,
						0x8e97: 0x4f3c,
						0x8e98: 0x4f8d,
						0x8e99: 0x5150,
						0x8e9a: 0x5b57,
						0x8e9b: 0x5bfa,
						0x8e9c: 0x6148,
						0x8e9d: 0x6301,
						0x8e9e: 0x6642,
						0x8e9f: 0x6b21,
						0x8ea0: 0x6ecb,
						0x8ea1: 0x6cbb,
						0x8ea2: 0x723e,
						0x8ea3: 0x74bd,
						0x8ea4: 0x75d4,
						0x8ea5: 0x78c1,
						0x8ea6: 0x793a,
						0x8ea7: 0x800c,
						0x8ea8: 0x8033,
						0x8ea9: 0x81ea,
						0x8eaa: 0x8494,
						0x8eab: 0x8f9e,
						0x8eac: 0x6c50,
						0x8ead: 0x9e7f,
						0x8eae: 0x5f0f,
						0x8eaf: 0x8b58,
						0x8eb0: 0x9d2b,
						0x8eb1: 0x7afa,
						0x8eb2: 0x8ef8,
						0x8eb3: 0x5b8d,
						0x8eb4: 0x96eb,
						0x8eb5: 0x4e03,
						0x8eb6: 0x53f1,
						0x8eb7: 0x57f7,
						0x8eb8: 0x5931,
						0x8eb9: 0x5ac9,
						0x8eba: 0x5ba4,
						0x8ebb: 0x6089,
						0x8ebc: 0x6e7f,
						0x8ebd: 0x6f06,
						0x8ebe: 0x75be,
						0x8ebf: 0x8cea,
						0x8ec0: 0x5b9f,
						0x8ec1: 0x8500,
						0x8ec2: 0x7be0,
						0x8ec3: 0x5072,
						0x8ec4: 0x67f4,
						0x8ec5: 0x829d,
						0x8ec6: 0x5c61,
						0x8ec7: 0x854a,
						0x8ec8: 0x7e1e,
						0x8ec9: 0x820e,
						0x8eca: 0x5199,
						0x8ecb: 0x5c04,
						0x8ecc: 0x6368,
						0x8ecd: 0x8d66,
						0x8ece: 0x659c,
						0x8ecf: 0x716e,
						0x8ed0: 0x793e,
						0x8ed1: 0x7d17,
						0x8ed2: 0x8005,
						0x8ed3: 0x8b1d,
						0x8ed4: 0x8eca,
						0x8ed5: 0x906e,
						0x8ed6: 0x86c7,
						0x8ed7: 0x90aa,
						0x8ed8: 0x501f,
						0x8ed9: 0x52fa,
						0x8eda: 0x5c3a,
						0x8edb: 0x6753,
						0x8edc: 0x707c,
						0x8edd: 0x7235,
						0x8ede: 0x914c,
						0x8edf: 0x91c8,
						0x8ee0: 0x932b,
						0x8ee1: 0x82e5,
						0x8ee2: 0x5bc2,
						0x8ee3: 0x5f31,
						0x8ee4: 0x60f9,
						0x8ee5: 0x4e3b,
						0x8ee6: 0x53d6,
						0x8ee7: 0x5b88,
						0x8ee8: 0x624b,
						0x8ee9: 0x6731,
						0x8eea: 0x6b8a,
						0x8eeb: 0x72e9,
						0x8eec: 0x73e0,
						0x8eed: 0x7a2e,
						0x8eee: 0x816b,
						0x8eef: 0x8da3,
						0x8ef0: 0x9152,
						0x8ef1: 0x9996,
						0x8ef2: 0x5112,
						0x8ef3: 0x53d7,
						0x8ef4: 0x546a,
						0x8ef5: 0x5bff,
						0x8ef6: 0x6388,
						0x8ef7: 0x6a39,
						0x8ef8: 0x7dac,
						0x8ef9: 0x9700,
						0x8efa: 0x56da,
						0x8efb: 0x53ce,
						0x8efc: 0x5468,
						0x8f40: 0x5b97,
						0x8f41: 0x5c31,
						0x8f42: 0x5dde,
						0x8f43: 0x4fee,
						0x8f44: 0x6101,
						0x8f45: 0x62fe,
						0x8f46: 0x6d32,
						0x8f47: 0x79c0,
						0x8f48: 0x79cb,
						0x8f49: 0x7d42,
						0x8f4a: 0x7e4d,
						0x8f4b: 0x7fd2,
						0x8f4c: 0x81ed,
						0x8f4d: 0x821f,
						0x8f4e: 0x8490,
						0x8f4f: 0x8846,
						0x8f50: 0x8972,
						0x8f51: 0x8b90,
						0x8f52: 0x8e74,
						0x8f53: 0x8f2f,
						0x8f54: 0x9031,
						0x8f55: 0x914b,
						0x8f56: 0x916c,
						0x8f57: 0x96c6,
						0x8f58: 0x919c,
						0x8f59: 0x4ec0,
						0x8f5a: 0x4f4f,
						0x8f5b: 0x5145,
						0x8f5c: 0x5341,
						0x8f5d: 0x5f93,
						0x8f5e: 0x620e,
						0x8f5f: 0x67d4,
						0x8f60: 0x6c41,
						0x8f61: 0x6e0b,
						0x8f62: 0x7363,
						0x8f63: 0x7e26,
						0x8f64: 0x91cd,
						0x8f65: 0x9283,
						0x8f66: 0x53d4,
						0x8f67: 0x5919,
						0x8f68: 0x5bbf,
						0x8f69: 0x6dd1,
						0x8f6a: 0x795d,
						0x8f6b: 0x7e2e,
						0x8f6c: 0x7c9b,
						0x8f6d: 0x587e,
						0x8f6e: 0x719f,
						0x8f6f: 0x51fa,
						0x8f70: 0x8853,
						0x8f71: 0x8ff0,
						0x8f72: 0x4fca,
						0x8f73: 0x5cfb,
						0x8f74: 0x6625,
						0x8f75: 0x77ac,
						0x8f76: 0x7ae3,
						0x8f77: 0x821c,
						0x8f78: 0x99ff,
						0x8f79: 0x51c6,
						0x8f7a: 0x5faa,
						0x8f7b: 0x65ec,
						0x8f7c: 0x696f,
						0x8f7d: 0x6b89,
						0x8f7e: 0x6df3,
						0x8f80: 0x6e96,
						0x8f81: 0x6f64,
						0x8f82: 0x76fe,
						0x8f83: 0x7d14,
						0x8f84: 0x5de1,
						0x8f85: 0x9075,
						0x8f86: 0x9187,
						0x8f87: 0x9806,
						0x8f88: 0x51e6,
						0x8f89: 0x521d,
						0x8f8a: 0x6240,
						0x8f8b: 0x6691,
						0x8f8c: 0x66d9,
						0x8f8d: 0x6e1a,
						0x8f8e: 0x5eb6,
						0x8f8f: 0x7dd2,
						0x8f90: 0x7f72,
						0x8f91: 0x66f8,
						0x8f92: 0x85af,
						0x8f93: 0x85f7,
						0x8f94: 0x8af8,
						0x8f95: 0x52a9,
						0x8f96: 0x53d9,
						0x8f97: 0x5973,
						0x8f98: 0x5e8f,
						0x8f99: 0x5f90,
						0x8f9a: 0x6055,
						0x8f9b: 0x92e4,
						0x8f9c: 0x9664,
						0x8f9d: 0x50b7,
						0x8f9e: 0x511f,
						0x8f9f: 0x52dd,
						0x8fa0: 0x5320,
						0x8fa1: 0x5347,
						0x8fa2: 0x53ec,
						0x8fa3: 0x54e8,
						0x8fa4: 0x5546,
						0x8fa5: 0x5531,
						0x8fa6: 0x5617,
						0x8fa7: 0x5968,
						0x8fa8: 0x59be,
						0x8fa9: 0x5a3c,
						0x8faa: 0x5bb5,
						0x8fab: 0x5c06,
						0x8fac: 0x5c0f,
						0x8fad: 0x5c11,
						0x8fae: 0x5c1a,
						0x8faf: 0x5e84,
						0x8fb0: 0x5e8a,
						0x8fb1: 0x5ee0,
						0x8fb2: 0x5f70,
						0x8fb3: 0x627f,
						0x8fb4: 0x6284,
						0x8fb5: 0x62db,
						0x8fb6: 0x638c,
						0x8fb7: 0x6377,
						0x8fb8: 0x6607,
						0x8fb9: 0x660c,
						0x8fba: 0x662d,
						0x8fbb: 0x6676,
						0x8fbc: 0x677e,
						0x8fbd: 0x68a2,
						0x8fbe: 0x6a1f,
						0x8fbf: 0x6a35,
						0x8fc0: 0x6cbc,
						0x8fc1: 0x6d88,
						0x8fc2: 0x6e09,
						0x8fc3: 0x6e58,
						0x8fc4: 0x713c,
						0x8fc5: 0x7126,
						0x8fc6: 0x7167,
						0x8fc7: 0x75c7,
						0x8fc8: 0x7701,
						0x8fc9: 0x785d,
						0x8fca: 0x7901,
						0x8fcb: 0x7965,
						0x8fcc: 0x79f0,
						0x8fcd: 0x7ae0,
						0x8fce: 0x7b11,
						0x8fcf: 0x7ca7,
						0x8fd0: 0x7d39,
						0x8fd1: 0x8096,
						0x8fd2: 0x83d6,
						0x8fd3: 0x848b,
						0x8fd4: 0x8549,
						0x8fd5: 0x885d,
						0x8fd6: 0x88f3,
						0x8fd7: 0x8a1f,
						0x8fd8: 0x8a3c,
						0x8fd9: 0x8a54,
						0x8fda: 0x8a73,
						0x8fdb: 0x8c61,
						0x8fdc: 0x8cde,
						0x8fdd: 0x91a4,
						0x8fde: 0x9266,
						0x8fdf: 0x937e,
						0x8fe0: 0x9418,
						0x8fe1: 0x969c,
						0x8fe2: 0x9798,
						0x8fe3: 0x4e0a,
						0x8fe4: 0x4e08,
						0x8fe5: 0x4e1e,
						0x8fe6: 0x4e57,
						0x8fe7: 0x5197,
						0x8fe8: 0x5270,
						0x8fe9: 0x57ce,
						0x8fea: 0x5834,
						0x8feb: 0x58cc,
						0x8fec: 0x5b22,
						0x8fed: 0x5e38,
						0x8fee: 0x60c5,
						0x8fef: 0x64fe,
						0x8ff0: 0x6761,
						0x8ff1: 0x6756,
						0x8ff2: 0x6d44,
						0x8ff3: 0x72b6,
						0x8ff4: 0x7573,
						0x8ff5: 0x7a63,
						0x8ff6: 0x84b8,
						0x8ff7: 0x8b72,
						0x8ff8: 0x91b8,
						0x8ff9: 0x9320,
						0x8ffa: 0x5631,
						0x8ffb: 0x57f4,
						0x8ffc: 0x98fe,
						0x9040: 0x62ed,
						0x9041: 0x690d,
						0x9042: 0x6b96,
						0x9043: 0x71ed,
						0x9044: 0x7e54,
						0x9045: 0x8077,
						0x9046: 0x8272,
						0x9047: 0x89e6,
						0x9048: 0x98df,
						0x9049: 0x8755,
						0x904a: 0x8fb1,
						0x904b: 0x5c3b,
						0x904c: 0x4f38,
						0x904d: 0x4fe1,
						0x904e: 0x4fb5,
						0x904f: 0x5507,
						0x9050: 0x5a20,
						0x9051: 0x5bdd,
						0x9052: 0x5be9,
						0x9053: 0x5fc3,
						0x9054: 0x614e,
						0x9055: 0x632f,
						0x9056: 0x65b0,
						0x9057: 0x664b,
						0x9058: 0x68ee,
						0x9059: 0x699b,
						0x905a: 0x6d78,
						0x905b: 0x6df1,
						0x905c: 0x7533,
						0x905d: 0x75b9,
						0x905e: 0x771f,
						0x905f: 0x795e,
						0x9060: 0x79e6,
						0x9061: 0x7d33,
						0x9062: 0x81e3,
						0x9063: 0x82af,
						0x9064: 0x85aa,
						0x9065: 0x89aa,
						0x9066: 0x8a3a,
						0x9067: 0x8eab,
						0x9068: 0x8f9b,
						0x9069: 0x9032,
						0x906a: 0x91dd,
						0x906b: 0x9707,
						0x906c: 0x4eba,
						0x906d: 0x4ec1,
						0x906e: 0x5203,
						0x906f: 0x5875,
						0x9070: 0x58ec,
						0x9071: 0x5c0b,
						0x9072: 0x751a,
						0x9073: 0x5c3d,
						0x9074: 0x814e,
						0x9075: 0x8a0a,
						0x9076: 0x8fc5,
						0x9077: 0x9663,
						0x9078: 0x976d,
						0x9079: 0x7b25,
						0x907a: 0x8acf,
						0x907b: 0x9808,
						0x907c: 0x9162,
						0x907d: 0x56f3,
						0x907e: 0x53a8,
						0x9080: 0x9017,
						0x9081: 0x5439,
						0x9082: 0x5782,
						0x9083: 0x5e25,
						0x9084: 0x63a8,
						0x9085: 0x6c34,
						0x9086: 0x708a,
						0x9087: 0x7761,
						0x9088: 0x7c8b,
						0x9089: 0x7fe0,
						0x908a: 0x8870,
						0x908b: 0x9042,
						0x908c: 0x9154,
						0x908d: 0x9310,
						0x908e: 0x9318,
						0x908f: 0x968f,
						0x9090: 0x745e,
						0x9091: 0x9ac4,
						0x9092: 0x5d07,
						0x9093: 0x5d69,
						0x9094: 0x6570,
						0x9095: 0x67a2,
						0x9096: 0x8da8,
						0x9097: 0x96db,
						0x9098: 0x636e,
						0x9099: 0x6749,
						0x909a: 0x6919,
						0x909b: 0x83c5,
						0x909c: 0x9817,
						0x909d: 0x96c0,
						0x909e: 0x88fe,
						0x909f: 0x6f84,
						0x90a0: 0x647a,
						0x90a1: 0x5bf8,
						0x90a2: 0x4e16,
						0x90a3: 0x702c,
						0x90a4: 0x755d,
						0x90a5: 0x662f,
						0x90a6: 0x51c4,
						0x90a7: 0x5236,
						0x90a8: 0x52e2,
						0x90a9: 0x59d3,
						0x90aa: 0x5f81,
						0x90ab: 0x6027,
						0x90ac: 0x6210,
						0x90ad: 0x653f,
						0x90ae: 0x6574,
						0x90af: 0x661f,
						0x90b0: 0x6674,
						0x90b1: 0x68f2,
						0x90b2: 0x6816,
						0x90b3: 0x6b63,
						0x90b4: 0x6e05,
						0x90b5: 0x7272,
						0x90b6: 0x751f,
						0x90b7: 0x76db,
						0x90b8: 0x7cbe,
						0x90b9: 0x8056,
						0x90ba: 0x58f0,
						0x90bb: 0x88fd,
						0x90bc: 0x897f,
						0x90bd: 0x8aa0,
						0x90be: 0x8a93,
						0x90bf: 0x8acb,
						0x90c0: 0x901d,
						0x90c1: 0x9192,
						0x90c2: 0x9752,
						0x90c3: 0x9759,
						0x90c4: 0x6589,
						0x90c5: 0x7a0e,
						0x90c6: 0x8106,
						0x90c7: 0x96bb,
						0x90c8: 0x5e2d,
						0x90c9: 0x60dc,
						0x90ca: 0x621a,
						0x90cb: 0x65a5,
						0x90cc: 0x6614,
						0x90cd: 0x6790,
						0x90ce: 0x77f3,
						0x90cf: 0x7a4d,
						0x90d0: 0x7c4d,
						0x90d1: 0x7e3e,
						0x90d2: 0x810a,
						0x90d3: 0x8cac,
						0x90d4: 0x8d64,
						0x90d5: 0x8de1,
						0x90d6: 0x8e5f,
						0x90d7: 0x78a9,
						0x90d8: 0x5207,
						0x90d9: 0x62d9,
						0x90da: 0x63a5,
						0x90db: 0x6442,
						0x90dc: 0x6298,
						0x90dd: 0x8a2d,
						0x90de: 0x7a83,
						0x90df: 0x7bc0,
						0x90e0: 0x8aac,
						0x90e1: 0x96ea,
						0x90e2: 0x7d76,
						0x90e3: 0x820c,
						0x90e4: 0x8749,
						0x90e5: 0x4ed9,
						0x90e6: 0x5148,
						0x90e7: 0x5343,
						0x90e8: 0x5360,
						0x90e9: 0x5ba3,
						0x90ea: 0x5c02,
						0x90eb: 0x5c16,
						0x90ec: 0x5ddd,
						0x90ed: 0x6226,
						0x90ee: 0x6247,
						0x90ef: 0x64b0,
						0x90f0: 0x6813,
						0x90f1: 0x6834,
						0x90f2: 0x6cc9,
						0x90f3: 0x6d45,
						0x90f4: 0x6d17,
						0x90f5: 0x67d3,
						0x90f6: 0x6f5c,
						0x90f7: 0x714e,
						0x90f8: 0x717d,
						0x90f9: 0x65cb,
						0x90fa: 0x7a7f,
						0x90fb: 0x7bad,
						0x90fc: 0x7dda,
						0x9140: 0x7e4a,
						0x9141: 0x7fa8,
						0x9142: 0x817a,
						0x9143: 0x821b,
						0x9144: 0x8239,
						0x9145: 0x85a6,
						0x9146: 0x8a6e,
						0x9147: 0x8cce,
						0x9148: 0x8df5,
						0x9149: 0x9078,
						0x914a: 0x9077,
						0x914b: 0x92ad,
						0x914c: 0x9291,
						0x914d: 0x9583,
						0x914e: 0x9bae,
						0x914f: 0x524d,
						0x9150: 0x5584,
						0x9151: 0x6f38,
						0x9152: 0x7136,
						0x9153: 0x5168,
						0x9154: 0x7985,
						0x9155: 0x7e55,
						0x9156: 0x81b3,
						0x9157: 0x7cce,
						0x9158: 0x564c,
						0x9159: 0x5851,
						0x915a: 0x5ca8,
						0x915b: 0x63aa,
						0x915c: 0x66fe,
						0x915d: 0x66fd,
						0x915e: 0x695a,
						0x915f: 0x72d9,
						0x9160: 0x758f,
						0x9161: 0x758e,
						0x9162: 0x790e,
						0x9163: 0x7956,
						0x9164: 0x79df,
						0x9165: 0x7c97,
						0x9166: 0x7d20,
						0x9167: 0x7d44,
						0x9168: 0x8607,
						0x9169: 0x8a34,
						0x916a: 0x963b,
						0x916b: 0x9061,
						0x916c: 0x9f20,
						0x916d: 0x50e7,
						0x916e: 0x5275,
						0x916f: 0x53cc,
						0x9170: 0x53e2,
						0x9171: 0x5009,
						0x9172: 0x55aa,
						0x9173: 0x58ee,
						0x9174: 0x594f,
						0x9175: 0x723d,
						0x9176: 0x5b8b,
						0x9177: 0x5c64,
						0x9178: 0x531d,
						0x9179: 0x60e3,
						0x917a: 0x60f3,
						0x917b: 0x635c,
						0x917c: 0x6383,
						0x917d: 0x633f,
						0x917e: 0x63bb,
						0x9180: 0x64cd,
						0x9181: 0x65e9,
						0x9182: 0x66f9,
						0x9183: 0x5de3,
						0x9184: 0x69cd,
						0x9185: 0x69fd,
						0x9186: 0x6f15,
						0x9187: 0x71e5,
						0x9188: 0x4e89,
						0x9189: 0x75e9,
						0x918a: 0x76f8,
						0x918b: 0x7a93,
						0x918c: 0x7cdf,
						0x918d: 0x7dcf,
						0x918e: 0x7d9c,
						0x918f: 0x8061,
						0x9190: 0x8349,
						0x9191: 0x8358,
						0x9192: 0x846c,
						0x9193: 0x84bc,
						0x9194: 0x85fb,
						0x9195: 0x88c5,
						0x9196: 0x8d70,
						0x9197: 0x9001,
						0x9198: 0x906d,
						0x9199: 0x9397,
						0x919a: 0x971c,
						0x919b: 0x9a12,
						0x919c: 0x50cf,
						0x919d: 0x5897,
						0x919e: 0x618e,
						0x919f: 0x81d3,
						0x91a0: 0x8535,
						0x91a1: 0x8d08,
						0x91a2: 0x9020,
						0x91a3: 0x4fc3,
						0x91a4: 0x5074,
						0x91a5: 0x5247,
						0x91a6: 0x5373,
						0x91a7: 0x606f,
						0x91a8: 0x6349,
						0x91a9: 0x675f,
						0x91aa: 0x6e2c,
						0x91ab: 0x8db3,
						0x91ac: 0x901f,
						0x91ad: 0x4fd7,
						0x91ae: 0x5c5e,
						0x91af: 0x8cca,
						0x91b0: 0x65cf,
						0x91b1: 0x7d9a,
						0x91b2: 0x5352,
						0x91b3: 0x8896,
						0x91b4: 0x5176,
						0x91b5: 0x63c3,
						0x91b6: 0x5b58,
						0x91b7: 0x5b6b,
						0x91b8: 0x5c0a,
						0x91b9: 0x640d,
						0x91ba: 0x6751,
						0x91bb: 0x905c,
						0x91bc: 0x4ed6,
						0x91bd: 0x591a,
						0x91be: 0x592a,
						0x91bf: 0x6c70,
						0x91c0: 0x8a51,
						0x91c1: 0x553e,
						0x91c2: 0x5815,
						0x91c3: 0x59a5,
						0x91c4: 0x60f0,
						0x91c5: 0x6253,
						0x91c6: 0x67c1,
						0x91c7: 0x8235,
						0x91c8: 0x6955,
						0x91c9: 0x9640,
						0x91ca: 0x99c4,
						0x91cb: 0x9a28,
						0x91cc: 0x4f53,
						0x91cd: 0x5806,
						0x91ce: 0x5bfe,
						0x91cf: 0x8010,
						0x91d0: 0x5cb1,
						0x91d1: 0x5e2f,
						0x91d2: 0x5f85,
						0x91d3: 0x6020,
						0x91d4: 0x614b,
						0x91d5: 0x6234,
						0x91d6: 0x66ff,
						0x91d7: 0x6cf0,
						0x91d8: 0x6ede,
						0x91d9: 0x80ce,
						0x91da: 0x817f,
						0x91db: 0x82d4,
						0x91dc: 0x888b,
						0x91dd: 0x8cb8,
						0x91de: 0x9000,
						0x91df: 0x902e,
						0x91e0: 0x968a,
						0x91e1: 0x9edb,
						0x91e2: 0x9bdb,
						0x91e3: 0x4ee3,
						0x91e4: 0x53f0,
						0x91e5: 0x5927,
						0x91e6: 0x7b2c,
						0x91e7: 0x918d,
						0x91e8: 0x984c,
						0x91e9: 0x9df9,
						0x91ea: 0x6edd,
						0x91eb: 0x7027,
						0x91ec: 0x5353,
						0x91ed: 0x5544,
						0x91ee: 0x5b85,
						0x91ef: 0x6258,
						0x91f0: 0x629e,
						0x91f1: 0x62d3,
						0x91f2: 0x6ca2,
						0x91f3: 0x6fef,
						0x91f4: 0x7422,
						0x91f5: 0x8a17,
						0x91f6: 0x9438,
						0x91f7: 0x6fc1,
						0x91f8: 0x8afe,
						0x91f9: 0x8338,
						0x91fa: 0x51e7,
						0x91fb: 0x86f8,
						0x91fc: 0x53ea,
						0x9240: 0x53e9,
						0x9241: 0x4f46,
						0x9242: 0x9054,
						0x9243: 0x8fb0,
						0x9244: 0x596a,
						0x9245: 0x8131,
						0x9246: 0x5dfd,
						0x9247: 0x7aea,
						0x9248: 0x8fbf,
						0x9249: 0x68da,
						0x924a: 0x8c37,
						0x924b: 0x72f8,
						0x924c: 0x9c48,
						0x924d: 0x6a3d,
						0x924e: 0x8ab0,
						0x924f: 0x4e39,
						0x9250: 0x5358,
						0x9251: 0x5606,
						0x9252: 0x5766,
						0x9253: 0x62c5,
						0x9254: 0x63a2,
						0x9255: 0x65e6,
						0x9256: 0x6b4e,
						0x9257: 0x6de1,
						0x9258: 0x6e5b,
						0x9259: 0x70ad,
						0x925a: 0x77ed,
						0x925b: 0x7aef,
						0x925c: 0x7baa,
						0x925d: 0x7dbb,
						0x925e: 0x803d,
						0x925f: 0x80c6,
						0x9260: 0x86cb,
						0x9261: 0x8a95,
						0x9262: 0x935b,
						0x9263: 0x56e3,
						0x9264: 0x58c7,
						0x9265: 0x5f3e,
						0x9266: 0x65ad,
						0x9267: 0x6696,
						0x9268: 0x6a80,
						0x9269: 0x6bb5,
						0x926a: 0x7537,
						0x926b: 0x8ac7,
						0x926c: 0x5024,
						0x926d: 0x77e5,
						0x926e: 0x5730,
						0x926f: 0x5f1b,
						0x9270: 0x6065,
						0x9271: 0x667a,
						0x9272: 0x6c60,
						0x9273: 0x75f4,
						0x9274: 0x7a1a,
						0x9275: 0x7f6e,
						0x9276: 0x81f4,
						0x9277: 0x8718,
						0x9278: 0x9045,
						0x9279: 0x99b3,
						0x927a: 0x7bc9,
						0x927b: 0x755c,
						0x927c: 0x7af9,
						0x927d: 0x7b51,
						0x927e: 0x84c4,
						0x9280: 0x9010,
						0x9281: 0x79e9,
						0x9282: 0x7a92,
						0x9283: 0x8336,
						0x9284: 0x5ae1,
						0x9285: 0x7740,
						0x9286: 0x4e2d,
						0x9287: 0x4ef2,
						0x9288: 0x5b99,
						0x9289: 0x5fe0,
						0x928a: 0x62bd,
						0x928b: 0x663c,
						0x928c: 0x67f1,
						0x928d: 0x6ce8,
						0x928e: 0x866b,
						0x928f: 0x8877,
						0x9290: 0x8a3b,
						0x9291: 0x914e,
						0x9292: 0x92f3,
						0x9293: 0x99d0,
						0x9294: 0x6a17,
						0x9295: 0x7026,
						0x9296: 0x732a,
						0x9297: 0x82e7,
						0x9298: 0x8457,
						0x9299: 0x8caf,
						0x929a: 0x4e01,
						0x929b: 0x5146,
						0x929c: 0x51cb,
						0x929d: 0x558b,
						0x929e: 0x5bf5,
						0x929f: 0x5e16,
						0x92a0: 0x5e33,
						0x92a1: 0x5e81,
						0x92a2: 0x5f14,
						0x92a3: 0x5f35,
						0x92a4: 0x5f6b,
						0x92a5: 0x5fb4,
						0x92a6: 0x61f2,
						0x92a7: 0x6311,
						0x92a8: 0x66a2,
						0x92a9: 0x671d,
						0x92aa: 0x6f6e,
						0x92ab: 0x7252,
						0x92ac: 0x753a,
						0x92ad: 0x773a,
						0x92ae: 0x8074,
						0x92af: 0x8139,
						0x92b0: 0x8178,
						0x92b1: 0x8776,
						0x92b2: 0x8abf,
						0x92b3: 0x8adc,
						0x92b4: 0x8d85,
						0x92b5: 0x8df3,
						0x92b6: 0x929a,
						0x92b7: 0x9577,
						0x92b8: 0x9802,
						0x92b9: 0x9ce5,
						0x92ba: 0x52c5,
						0x92bb: 0x6357,
						0x92bc: 0x76f4,
						0x92bd: 0x6715,
						0x92be: 0x6c88,
						0x92bf: 0x73cd,
						0x92c0: 0x8cc3,
						0x92c1: 0x93ae,
						0x92c2: 0x9673,
						0x92c3: 0x6d25,
						0x92c4: 0x589c,
						0x92c5: 0x690e,
						0x92c6: 0x69cc,
						0x92c7: 0x8ffd,
						0x92c8: 0x939a,
						0x92c9: 0x75db,
						0x92ca: 0x901a,
						0x92cb: 0x585a,
						0x92cc: 0x6802,
						0x92cd: 0x63b4,
						0x92ce: 0x69fb,
						0x92cf: 0x4f43,
						0x92d0: 0x6f2c,
						0x92d1: 0x67d8,
						0x92d2: 0x8fbb,
						0x92d3: 0x8526,
						0x92d4: 0x7db4,
						0x92d5: 0x9354,
						0x92d6: 0x693f,
						0x92d7: 0x6f70,
						0x92d8: 0x576a,
						0x92d9: 0x58f7,
						0x92da: 0x5b2c,
						0x92db: 0x7d2c,
						0x92dc: 0x722a,
						0x92dd: 0x540a,
						0x92de: 0x91e3,
						0x92df: 0x9db4,
						0x92e0: 0x4ead,
						0x92e1: 0x4f4e,
						0x92e2: 0x505c,
						0x92e3: 0x5075,
						0x92e4: 0x5243,
						0x92e5: 0x8c9e,
						0x92e6: 0x5448,
						0x92e7: 0x5824,
						0x92e8: 0x5b9a,
						0x92e9: 0x5e1d,
						0x92ea: 0x5e95,
						0x92eb: 0x5ead,
						0x92ec: 0x5ef7,
						0x92ed: 0x5f1f,
						0x92ee: 0x608c,
						0x92ef: 0x62b5,
						0x92f0: 0x633a,
						0x92f1: 0x63d0,
						0x92f2: 0x68af,
						0x92f3: 0x6c40,
						0x92f4: 0x7887,
						0x92f5: 0x798e,
						0x92f6: 0x7a0b,
						0x92f7: 0x7de0,
						0x92f8: 0x8247,
						0x92f9: 0x8a02,
						0x92fa: 0x8ae6,
						0x92fb: 0x8e44,
						0x92fc: 0x9013,
						0x9340: 0x90b8,
						0x9341: 0x912d,
						0x9342: 0x91d8,
						0x9343: 0x9f0e,
						0x9344: 0x6ce5,
						0x9345: 0x6458,
						0x9346: 0x64e2,
						0x9347: 0x6575,
						0x9348: 0x6ef4,
						0x9349: 0x7684,
						0x934a: 0x7b1b,
						0x934b: 0x9069,
						0x934c: 0x93d1,
						0x934d: 0x6eba,
						0x934e: 0x54f2,
						0x934f: 0x5fb9,
						0x9350: 0x64a4,
						0x9351: 0x8f4d,
						0x9352: 0x8fed,
						0x9353: 0x9244,
						0x9354: 0x5178,
						0x9355: 0x586b,
						0x9356: 0x5929,
						0x9357: 0x5c55,
						0x9358: 0x5e97,
						0x9359: 0x6dfb,
						0x935a: 0x7e8f,
						0x935b: 0x751c,
						0x935c: 0x8cbc,
						0x935d: 0x8ee2,
						0x935e: 0x985b,
						0x935f: 0x70b9,
						0x9360: 0x4f1d,
						0x9361: 0x6bbf,
						0x9362: 0x6fb1,
						0x9363: 0x7530,
						0x9364: 0x96fb,
						0x9365: 0x514e,
						0x9366: 0x5410,
						0x9367: 0x5835,
						0x9368: 0x5857,
						0x9369: 0x59ac,
						0x936a: 0x5c60,
						0x936b: 0x5f92,
						0x936c: 0x6597,
						0x936d: 0x675c,
						0x936e: 0x6e21,
						0x936f: 0x767b,
						0x9370: 0x83df,
						0x9371: 0x8ced,
						0x9372: 0x9014,
						0x9373: 0x90fd,
						0x9374: 0x934d,
						0x9375: 0x7825,
						0x9376: 0x783a,
						0x9377: 0x52aa,
						0x9378: 0x5ea6,
						0x9379: 0x571f,
						0x937a: 0x5974,
						0x937b: 0x6012,
						0x937c: 0x5012,
						0x937d: 0x515a,
						0x937e: 0x51ac,
						0x9380: 0x51cd,
						0x9381: 0x5200,
						0x9382: 0x5510,
						0x9383: 0x5854,
						0x9384: 0x5858,
						0x9385: 0x5957,
						0x9386: 0x5b95,
						0x9387: 0x5cf6,
						0x9388: 0x5d8b,
						0x9389: 0x60bc,
						0x938a: 0x6295,
						0x938b: 0x642d,
						0x938c: 0x6771,
						0x938d: 0x6843,
						0x938e: 0x68bc,
						0x938f: 0x68df,
						0x9390: 0x76d7,
						0x9391: 0x6dd8,
						0x9392: 0x6e6f,
						0x9393: 0x6d9b,
						0x9394: 0x706f,
						0x9395: 0x71c8,
						0x9396: 0x5f53,
						0x9397: 0x75d8,
						0x9398: 0x7977,
						0x9399: 0x7b49,
						0x939a: 0x7b54,
						0x939b: 0x7b52,
						0x939c: 0x7cd6,
						0x939d: 0x7d71,
						0x939e: 0x5230,
						0x939f: 0x8463,
						0x93a0: 0x8569,
						0x93a1: 0x85e4,
						0x93a2: 0x8a0e,
						0x93a3: 0x8b04,
						0x93a4: 0x8c46,
						0x93a5: 0x8e0f,
						0x93a6: 0x9003,
						0x93a7: 0x900f,
						0x93a8: 0x9419,
						0x93a9: 0x9676,
						0x93aa: 0x982d,
						0x93ab: 0x9a30,
						0x93ac: 0x95d8,
						0x93ad: 0x50cd,
						0x93ae: 0x52d5,
						0x93af: 0x540c,
						0x93b0: 0x5802,
						0x93b1: 0x5c0e,
						0x93b2: 0x61a7,
						0x93b3: 0x649e,
						0x93b4: 0x6d1e,
						0x93b5: 0x77b3,
						0x93b6: 0x7ae5,
						0x93b7: 0x80f4,
						0x93b8: 0x8404,
						0x93b9: 0x9053,
						0x93ba: 0x9285,
						0x93bb: 0x5ce0,
						0x93bc: 0x9d07,
						0x93bd: 0x533f,
						0x93be: 0x5f97,
						0x93bf: 0x5fb3,
						0x93c0: 0x6d9c,
						0x93c1: 0x7279,
						0x93c2: 0x7763,
						0x93c3: 0x79bf,
						0x93c4: 0x7be4,
						0x93c5: 0x6bd2,
						0x93c6: 0x72ec,
						0x93c7: 0x8aad,
						0x93c8: 0x6803,
						0x93c9: 0x6a61,
						0x93ca: 0x51f8,
						0x93cb: 0x7a81,
						0x93cc: 0x6934,
						0x93cd: 0x5c4a,
						0x93ce: 0x9cf6,
						0x93cf: 0x82eb,
						0x93d0: 0x5bc5,
						0x93d1: 0x9149,
						0x93d2: 0x701e,
						0x93d3: 0x5678,
						0x93d4: 0x5c6f,
						0x93d5: 0x60c7,
						0x93d6: 0x6566,
						0x93d7: 0x6c8c,
						0x93d8: 0x8c5a,
						0x93d9: 0x9041,
						0x93da: 0x9813,
						0x93db: 0x5451,
						0x93dc: 0x66c7,
						0x93dd: 0x920d,
						0x93de: 0x5948,
						0x93df: 0x90a3,
						0x93e0: 0x5185,
						0x93e1: 0x4e4d,
						0x93e2: 0x51ea,
						0x93e3: 0x8599,
						0x93e4: 0x8b0e,
						0x93e5: 0x7058,
						0x93e6: 0x637a,
						0x93e7: 0x934b,
						0x93e8: 0x6962,
						0x93e9: 0x99b4,
						0x93ea: 0x7e04,
						0x93eb: 0x7577,
						0x93ec: 0x5357,
						0x93ed: 0x6960,
						0x93ee: 0x8edf,
						0x93ef: 0x96e3,
						0x93f0: 0x6c5d,
						0x93f1: 0x4e8c,
						0x93f2: 0x5c3c,
						0x93f3: 0x5f10,
						0x93f4: 0x8fe9,
						0x93f5: 0x5302,
						0x93f6: 0x8cd1,
						0x93f7: 0x8089,
						0x93f8: 0x8679,
						0x93f9: 0x5eff,
						0x93fa: 0x65e5,
						0x93fb: 0x4e73,
						0x93fc: 0x5165,
						0x9440: 0x5982,
						0x9441: 0x5c3f,
						0x9442: 0x97ee,
						0x9443: 0x4efb,
						0x9444: 0x598a,
						0x9445: 0x5fcd,
						0x9446: 0x8a8d,
						0x9447: 0x6fe1,
						0x9448: 0x79b0,
						0x9449: 0x7962,
						0x944a: 0x5be7,
						0x944b: 0x8471,
						0x944c: 0x732b,
						0x944d: 0x71b1,
						0x944e: 0x5e74,
						0x944f: 0x5ff5,
						0x9450: 0x637b,
						0x9451: 0x649a,
						0x9452: 0x71c3,
						0x9453: 0x7c98,
						0x9454: 0x4e43,
						0x9455: 0x5efc,
						0x9456: 0x4e4b,
						0x9457: 0x57dc,
						0x9458: 0x56a2,
						0x9459: 0x60a9,
						0x945a: 0x6fc3,
						0x945b: 0x7d0d,
						0x945c: 0x80fd,
						0x945d: 0x8133,
						0x945e: 0x81bf,
						0x945f: 0x8fb2,
						0x9460: 0x8997,
						0x9461: 0x86a4,
						0x9462: 0x5df4,
						0x9463: 0x628a,
						0x9464: 0x64ad,
						0x9465: 0x8987,
						0x9466: 0x6777,
						0x9467: 0x6ce2,
						0x9468: 0x6d3e,
						0x9469: 0x7436,
						0x946a: 0x7834,
						0x946b: 0x5a46,
						0x946c: 0x7f75,
						0x946d: 0x82ad,
						0x946e: 0x99ac,
						0x946f: 0x4ff3,
						0x9470: 0x5ec3,
						0x9471: 0x62dd,
						0x9472: 0x6392,
						0x9473: 0x6557,
						0x9474: 0x676f,
						0x9475: 0x76c3,
						0x9476: 0x724c,
						0x9477: 0x80cc,
						0x9478: 0x80ba,
						0x9479: 0x8f29,
						0x947a: 0x914d,
						0x947b: 0x500d,
						0x947c: 0x57f9,
						0x947d: 0x5a92,
						0x947e: 0x6885,
						0x9480: 0x6973,
						0x9481: 0x7164,
						0x9482: 0x72fd,
						0x9483: 0x8cb7,
						0x9484: 0x58f2,
						0x9485: 0x8ce0,
						0x9486: 0x966a,
						0x9487: 0x9019,
						0x9488: 0x877f,
						0x9489: 0x79e4,
						0x948a: 0x77e7,
						0x948b: 0x8429,
						0x948c: 0x4f2f,
						0x948d: 0x5265,
						0x948e: 0x535a,
						0x948f: 0x62cd,
						0x9490: 0x67cf,
						0x9491: 0x6cca,
						0x9492: 0x767d,
						0x9493: 0x7b94,
						0x9494: 0x7c95,
						0x9495: 0x8236,
						0x9496: 0x8584,
						0x9497: 0x8feb,
						0x9498: 0x66dd,
						0x9499: 0x6f20,
						0x949a: 0x7206,
						0x949b: 0x7e1b,
						0x949c: 0x83ab,
						0x949d: 0x99c1,
						0x949e: 0x9ea6,
						0x949f: 0x51fd,
						0x94a0: 0x7bb1,
						0x94a1: 0x7872,
						0x94a2: 0x7bb8,
						0x94a3: 0x8087,
						0x94a4: 0x7b48,
						0x94a5: 0x6ae8,
						0x94a6: 0x5e61,
						0x94a7: 0x808c,
						0x94a8: 0x7551,
						0x94a9: 0x7560,
						0x94aa: 0x516b,
						0x94ab: 0x9262,
						0x94ac: 0x6e8c,
						0x94ad: 0x767a,
						0x94ae: 0x9197,
						0x94af: 0x9aea,
						0x94b0: 0x4f10,
						0x94b1: 0x7f70,
						0x94b2: 0x629c,
						0x94b3: 0x7b4f,
						0x94b4: 0x95a5,
						0x94b5: 0x9ce9,
						0x94b6: 0x567a,
						0x94b7: 0x5859,
						0x94b8: 0x86e4,
						0x94b9: 0x96bc,
						0x94ba: 0x4f34,
						0x94bb: 0x5224,
						0x94bc: 0x534a,
						0x94bd: 0x53cd,
						0x94be: 0x53db,
						0x94bf: 0x5e06,
						0x94c0: 0x642c,
						0x94c1: 0x6591,
						0x94c2: 0x677f,
						0x94c3: 0x6c3e,
						0x94c4: 0x6c4e,
						0x94c5: 0x7248,
						0x94c6: 0x72af,
						0x94c7: 0x73ed,
						0x94c8: 0x7554,
						0x94c9: 0x7e41,
						0x94ca: 0x822c,
						0x94cb: 0x85e9,
						0x94cc: 0x8ca9,
						0x94cd: 0x7bc4,
						0x94ce: 0x91c6,
						0x94cf: 0x7169,
						0x94d0: 0x9812,
						0x94d1: 0x98ef,
						0x94d2: 0x633d,
						0x94d3: 0x6669,
						0x94d4: 0x756a,
						0x94d5: 0x76e4,
						0x94d6: 0x78d0,
						0x94d7: 0x8543,
						0x94d8: 0x86ee,
						0x94d9: 0x532a,
						0x94da: 0x5351,
						0x94db: 0x5426,
						0x94dc: 0x5983,
						0x94dd: 0x5e87,
						0x94de: 0x5f7c,
						0x94df: 0x60b2,
						0x94e0: 0x6249,
						0x94e1: 0x6279,
						0x94e2: 0x62ab,
						0x94e3: 0x6590,
						0x94e4: 0x6bd4,
						0x94e5: 0x6ccc,
						0x94e6: 0x75b2,
						0x94e7: 0x76ae,
						0x94e8: 0x7891,
						0x94e9: 0x79d8,
						0x94ea: 0x7dcb,
						0x94eb: 0x7f77,
						0x94ec: 0x80a5,
						0x94ed: 0x88ab,
						0x94ee: 0x8ab9,
						0x94ef: 0x8cbb,
						0x94f0: 0x907f,
						0x94f1: 0x975e,
						0x94f2: 0x98db,
						0x94f3: 0x6a0b,
						0x94f4: 0x7c38,
						0x94f5: 0x5099,
						0x94f6: 0x5c3e,
						0x94f7: 0x5fae,
						0x94f8: 0x6787,
						0x94f9: 0x6bd8,
						0x94fa: 0x7435,
						0x94fb: 0x7709,
						0x94fc: 0x7f8e,
						0x9540: 0x9f3b,
						0x9541: 0x67ca,
						0x9542: 0x7a17,
						0x9543: 0x5339,
						0x9544: 0x758b,
						0x9545: 0x9aed,
						0x9546: 0x5f66,
						0x9547: 0x819d,
						0x9548: 0x83f1,
						0x9549: 0x8098,
						0x954a: 0x5f3c,
						0x954b: 0x5fc5,
						0x954c: 0x7562,
						0x954d: 0x7b46,
						0x954e: 0x903c,
						0x954f: 0x6867,
						0x9550: 0x59eb,
						0x9551: 0x5a9b,
						0x9552: 0x7d10,
						0x9553: 0x767e,
						0x9554: 0x8b2c,
						0x9555: 0x4ff5,
						0x9556: 0x5f6a,
						0x9557: 0x6a19,
						0x9558: 0x6c37,
						0x9559: 0x6f02,
						0x955a: 0x74e2,
						0x955b: 0x7968,
						0x955c: 0x8868,
						0x955d: 0x8a55,
						0x955e: 0x8c79,
						0x955f: 0x5edf,
						0x9560: 0x63cf,
						0x9561: 0x75c5,
						0x9562: 0x79d2,
						0x9563: 0x82d7,
						0x9564: 0x9328,
						0x9565: 0x92f2,
						0x9566: 0x849c,
						0x9567: 0x86ed,
						0x9568: 0x9c2d,
						0x9569: 0x54c1,
						0x956a: 0x5f6c,
						0x956b: 0x658c,
						0x956c: 0x6d5c,
						0x956d: 0x7015,
						0x956e: 0x8ca7,
						0x956f: 0x8cd3,
						0x9570: 0x983b,
						0x9571: 0x654f,
						0x9572: 0x74f6,
						0x9573: 0x4e0d,
						0x9574: 0x4ed8,
						0x9575: 0x57e0,
						0x9576: 0x592b,
						0x9577: 0x5a66,
						0x9578: 0x5bcc,
						0x9579: 0x51a8,
						0x957a: 0x5e03,
						0x957b: 0x5e9c,
						0x957c: 0x6016,
						0x957d: 0x6276,
						0x957e: 0x6577,
						0x9580: 0x65a7,
						0x9581: 0x666e,
						0x9582: 0x6d6e,
						0x9583: 0x7236,
						0x9584: 0x7b26,
						0x9585: 0x8150,
						0x9586: 0x819a,
						0x9587: 0x8299,
						0x9588: 0x8b5c,
						0x9589: 0x8ca0,
						0x958a: 0x8ce6,
						0x958b: 0x8d74,
						0x958c: 0x961c,
						0x958d: 0x9644,
						0x958e: 0x4fae,
						0x958f: 0x64ab,
						0x9590: 0x6b66,
						0x9591: 0x821e,
						0x9592: 0x8461,
						0x9593: 0x856a,
						0x9594: 0x90e8,
						0x9595: 0x5c01,
						0x9596: 0x6953,
						0x9597: 0x98a8,
						0x9598: 0x847a,
						0x9599: 0x8557,
						0x959a: 0x4f0f,
						0x959b: 0x526f,
						0x959c: 0x5fa9,
						0x959d: 0x5e45,
						0x959e: 0x670d,
						0x959f: 0x798f,
						0x95a0: 0x8179,
						0x95a1: 0x8907,
						0x95a2: 0x8986,
						0x95a3: 0x6df5,
						0x95a4: 0x5f17,
						0x95a5: 0x6255,
						0x95a6: 0x6cb8,
						0x95a7: 0x4ecf,
						0x95a8: 0x7269,
						0x95a9: 0x9b92,
						0x95aa: 0x5206,
						0x95ab: 0x543b,
						0x95ac: 0x5674,
						0x95ad: 0x58b3,
						0x95ae: 0x61a4,
						0x95af: 0x626e,
						0x95b0: 0x711a,
						0x95b1: 0x596e,
						0x95b2: 0x7c89,
						0x95b3: 0x7cde,
						0x95b4: 0x7d1b,
						0x95b5: 0x96f0,
						0x95b6: 0x6587,
						0x95b7: 0x805e,
						0x95b8: 0x4e19,
						0x95b9: 0x4f75,
						0x95ba: 0x5175,
						0x95bb: 0x5840,
						0x95bc: 0x5e63,
						0x95bd: 0x5e73,
						0x95be: 0x5f0a,
						0x95bf: 0x67c4,
						0x95c0: 0x4e26,
						0x95c1: 0x853d,
						0x95c2: 0x9589,
						0x95c3: 0x965b,
						0x95c4: 0x7c73,
						0x95c5: 0x9801,
						0x95c6: 0x50fb,
						0x95c7: 0x58c1,
						0x95c8: 0x7656,
						0x95c9: 0x78a7,
						0x95ca: 0x5225,
						0x95cb: 0x77a5,
						0x95cc: 0x8511,
						0x95cd: 0x7b86,
						0x95ce: 0x504f,
						0x95cf: 0x5909,
						0x95d0: 0x7247,
						0x95d1: 0x7bc7,
						0x95d2: 0x7de8,
						0x95d3: 0x8fba,
						0x95d4: 0x8fd4,
						0x95d5: 0x904d,
						0x95d6: 0x4fbf,
						0x95d7: 0x52c9,
						0x95d8: 0x5a29,
						0x95d9: 0x5f01,
						0x95da: 0x97ad,
						0x95db: 0x4fdd,
						0x95dc: 0x8217,
						0x95dd: 0x92ea,
						0x95de: 0x5703,
						0x95df: 0x6355,
						0x95e0: 0x6b69,
						0x95e1: 0x752b,
						0x95e2: 0x88dc,
						0x95e3: 0x8f14,
						0x95e4: 0x7a42,
						0x95e5: 0x52df,
						0x95e6: 0x5893,
						0x95e7: 0x6155,
						0x95e8: 0x620a,
						0x95e9: 0x66ae,
						0x95ea: 0x6bcd,
						0x95eb: 0x7c3f,
						0x95ec: 0x83e9,
						0x95ed: 0x5023,
						0x95ee: 0x4ff8,
						0x95ef: 0x5305,
						0x95f0: 0x5446,
						0x95f1: 0x5831,
						0x95f2: 0x5949,
						0x95f3: 0x5b9d,
						0x95f4: 0x5cf0,
						0x95f5: 0x5cef,
						0x95f6: 0x5d29,
						0x95f7: 0x5e96,
						0x95f8: 0x62b1,
						0x95f9: 0x6367,
						0x95fa: 0x653e,
						0x95fb: 0x65b9,
						0x95fc: 0x670b,
						0x9640: 0x6cd5,
						0x9641: 0x6ce1,
						0x9642: 0x70f9,
						0x9643: 0x7832,
						0x9644: 0x7e2b,
						0x9645: 0x80de,
						0x9646: 0x82b3,
						0x9647: 0x840c,
						0x9648: 0x84ec,
						0x9649: 0x8702,
						0x964a: 0x8912,
						0x964b: 0x8a2a,
						0x964c: 0x8c4a,
						0x964d: 0x90a6,
						0x964e: 0x92d2,
						0x964f: 0x98fd,
						0x9650: 0x9cf3,
						0x9651: 0x9d6c,
						0x9652: 0x4e4f,
						0x9653: 0x4ea1,
						0x9654: 0x508d,
						0x9655: 0x5256,
						0x9656: 0x574a,
						0x9657: 0x59a8,
						0x9658: 0x5e3d,
						0x9659: 0x5fd8,
						0x965a: 0x5fd9,
						0x965b: 0x623f,
						0x965c: 0x66b4,
						0x965d: 0x671b,
						0x965e: 0x67d0,
						0x965f: 0x68d2,
						0x9660: 0x5192,
						0x9661: 0x7d21,
						0x9662: 0x80aa,
						0x9663: 0x81a8,
						0x9664: 0x8b00,
						0x9665: 0x8c8c,
						0x9666: 0x8cbf,
						0x9667: 0x927e,
						0x9668: 0x9632,
						0x9669: 0x5420,
						0x966a: 0x982c,
						0x966b: 0x5317,
						0x966c: 0x50d5,
						0x966d: 0x535c,
						0x966e: 0x58a8,
						0x966f: 0x64b2,
						0x9670: 0x6734,
						0x9671: 0x7267,
						0x9672: 0x7766,
						0x9673: 0x7a46,
						0x9674: 0x91e6,
						0x9675: 0x52c3,
						0x9676: 0x6ca1,
						0x9677: 0x6b86,
						0x9678: 0x5800,
						0x9679: 0x5e4c,
						0x967a: 0x5954,
						0x967b: 0x672c,
						0x967c: 0x7ffb,
						0x967d: 0x51e1,
						0x967e: 0x76c6,
						0x9680: 0x6469,
						0x9681: 0x78e8,
						0x9682: 0x9b54,
						0x9683: 0x9ebb,
						0x9684: 0x57cb,
						0x9685: 0x59b9,
						0x9686: 0x6627,
						0x9687: 0x679a,
						0x9688: 0x6bce,
						0x9689: 0x54e9,
						0x968a: 0x69d9,
						0x968b: 0x5e55,
						0x968c: 0x819c,
						0x968d: 0x6795,
						0x968e: 0x9baa,
						0x968f: 0x67fe,
						0x9690: 0x9c52,
						0x9691: 0x685d,
						0x9692: 0x4ea6,
						0x9693: 0x4fe3,
						0x9694: 0x53c8,
						0x9695: 0x62b9,
						0x9696: 0x672b,
						0x9697: 0x6cab,
						0x9698: 0x8fc4,
						0x9699: 0x4fad,
						0x969a: 0x7e6d,
						0x969b: 0x9ebf,
						0x969c: 0x4e07,
						0x969d: 0x6162,
						0x969e: 0x6e80,
						0x969f: 0x6f2b,
						0x96a0: 0x8513,
						0x96a1: 0x5473,
						0x96a2: 0x672a,
						0x96a3: 0x9b45,
						0x96a4: 0x5df3,
						0x96a5: 0x7b95,
						0x96a6: 0x5cac,
						0x96a7: 0x5bc6,
						0x96a8: 0x871c,
						0x96a9: 0x6e4a,
						0x96aa: 0x84d1,
						0x96ab: 0x7a14,
						0x96ac: 0x8108,
						0x96ad: 0x5999,
						0x96ae: 0x7c8d,
						0x96af: 0x6c11,
						0x96b0: 0x7720,
						0x96b1: 0x52d9,
						0x96b2: 0x5922,
						0x96b3: 0x7121,
						0x96b4: 0x725f,
						0x96b5: 0x77db,
						0x96b6: 0x9727,
						0x96b7: 0x9d61,
						0x96b8: 0x690b,
						0x96b9: 0x5a7f,
						0x96ba: 0x5a18,
						0x96bb: 0x51a5,
						0x96bc: 0x540d,
						0x96bd: 0x547d,
						0x96be: 0x660e,
						0x96bf: 0x76df,
						0x96c0: 0x8ff7,
						0x96c1: 0x9298,
						0x96c2: 0x9cf4,
						0x96c3: 0x59ea,
						0x96c4: 0x725d,
						0x96c5: 0x6ec5,
						0x96c6: 0x514d,
						0x96c7: 0x68c9,
						0x96c8: 0x7dbf,
						0x96c9: 0x7dec,
						0x96ca: 0x9762,
						0x96cb: 0x9eba,
						0x96cc: 0x6478,
						0x96cd: 0x6a21,
						0x96ce: 0x8302,
						0x96cf: 0x5984,
						0x96d0: 0x5b5f,
						0x96d1: 0x6bdb,
						0x96d2: 0x731b,
						0x96d3: 0x76f2,
						0x96d4: 0x7db2,
						0x96d5: 0x8017,
						0x96d6: 0x8499,
						0x96d7: 0x5132,
						0x96d8: 0x6728,
						0x96d9: 0x9ed9,
						0x96da: 0x76ee,
						0x96db: 0x6762,
						0x96dc: 0x52ff,
						0x96dd: 0x9905,
						0x96de: 0x5c24,
						0x96df: 0x623b,
						0x96e0: 0x7c7e,
						0x96e1: 0x8cb0,
						0x96e2: 0x554f,
						0x96e3: 0x60b6,
						0x96e4: 0x7d0b,
						0x96e5: 0x9580,
						0x96e6: 0x5301,
						0x96e7: 0x4e5f,
						0x96e8: 0x51b6,
						0x96e9: 0x591c,
						0x96ea: 0x723a,
						0x96eb: 0x8036,
						0x96ec: 0x91ce,
						0x96ed: 0x5f25,
						0x96ee: 0x77e2,
						0x96ef: 0x5384,
						0x96f0: 0x5f79,
						0x96f1: 0x7d04,
						0x96f2: 0x85ac,
						0x96f3: 0x8a33,
						0x96f4: 0x8e8d,
						0x96f5: 0x9756,
						0x96f6: 0x67f3,
						0x96f7: 0x85ae,
						0x96f8: 0x9453,
						0x96f9: 0x6109,
						0x96fa: 0x6108,
						0x96fb: 0x6cb9,
						0x96fc: 0x7652,
						0x9740: 0x8aed,
						0x9741: 0x8f38,
						0x9742: 0x552f,
						0x9743: 0x4f51,
						0x9744: 0x512a,
						0x9745: 0x52c7,
						0x9746: 0x53cb,
						0x9747: 0x5ba5,
						0x9748: 0x5e7d,
						0x9749: 0x60a0,
						0x974a: 0x6182,
						0x974b: 0x63d6,
						0x974c: 0x6709,
						0x974d: 0x67da,
						0x974e: 0x6e67,
						0x974f: 0x6d8c,
						0x9750: 0x7336,
						0x9751: 0x7337,
						0x9752: 0x7531,
						0x9753: 0x7950,
						0x9754: 0x88d5,
						0x9755: 0x8a98,
						0x9756: 0x904a,
						0x9757: 0x9091,
						0x9758: 0x90f5,
						0x9759: 0x96c4,
						0x975a: 0x878d,
						0x975b: 0x5915,
						0x975c: 0x4e88,
						0x975d: 0x4f59,
						0x975e: 0x4e0e,
						0x975f: 0x8a89,
						0x9760: 0x8f3f,
						0x9761: 0x9810,
						0x9762: 0x50ad,
						0x9763: 0x5e7c,
						0x9764: 0x5996,
						0x9765: 0x5bb9,
						0x9766: 0x5eb8,
						0x9767: 0x63da,
						0x9768: 0x63fa,
						0x9769: 0x64c1,
						0x976a: 0x66dc,
						0x976b: 0x694a,
						0x976c: 0x69d8,
						0x976d: 0x6d0b,
						0x976e: 0x6eb6,
						0x976f: 0x7194,
						0x9770: 0x7528,
						0x9771: 0x7aaf,
						0x9772: 0x7f8a,
						0x9773: 0x8000,
						0x9774: 0x8449,
						0x9775: 0x84c9,
						0x9776: 0x8981,
						0x9777: 0x8b21,
						0x9778: 0x8e0a,
						0x9779: 0x9065,
						0x977a: 0x967d,
						0x977b: 0x990a,
						0x977c: 0x617e,
						0x977d: 0x6291,
						0x977e: 0x6b32,
						0x9780: 0x6c83,
						0x9781: 0x6d74,
						0x9782: 0x7fcc,
						0x9783: 0x7ffc,
						0x9784: 0x6dc0,
						0x9785: 0x7f85,
						0x9786: 0x87ba,
						0x9787: 0x88f8,
						0x9788: 0x6765,
						0x9789: 0x83b1,
						0x978a: 0x983c,
						0x978b: 0x96f7,
						0x978c: 0x6d1b,
						0x978d: 0x7d61,
						0x978e: 0x843d,
						0x978f: 0x916a,
						0x9790: 0x4e71,
						0x9791: 0x5375,
						0x9792: 0x5d50,
						0x9793: 0x6b04,
						0x9794: 0x6feb,
						0x9795: 0x85cd,
						0x9796: 0x862d,
						0x9797: 0x89a7,
						0x9798: 0x5229,
						0x9799: 0x540f,
						0x979a: 0x5c65,
						0x979b: 0x674e,
						0x979c: 0x68a8,
						0x979d: 0x7406,
						0x979e: 0x7483,
						0x979f: 0x75e2,
						0x97a0: 0x88cf,
						0x97a1: 0x88e1,
						0x97a2: 0x91cc,
						0x97a3: 0x96e2,
						0x97a4: 0x9678,
						0x97a5: 0x5f8b,
						0x97a6: 0x7387,
						0x97a7: 0x7acb,
						0x97a8: 0x844e,
						0x97a9: 0x63a0,
						0x97aa: 0x7565,
						0x97ab: 0x5289,
						0x97ac: 0x6d41,
						0x97ad: 0x6e9c,
						0x97ae: 0x7409,
						0x97af: 0x7559,
						0x97b0: 0x786b,
						0x97b1: 0x7c92,
						0x97b2: 0x9686,
						0x97b3: 0x7adc,
						0x97b4: 0x9f8d,
						0x97b5: 0x4fb6,
						0x97b6: 0x616e,
						0x97b7: 0x65c5,
						0x97b8: 0x865c,
						0x97b9: 0x4e86,
						0x97ba: 0x4eae,
						0x97bb: 0x50da,
						0x97bc: 0x4e21,
						0x97bd: 0x51cc,
						0x97be: 0x5bee,
						0x97bf: 0x6599,
						0x97c0: 0x6881,
						0x97c1: 0x6dbc,
						0x97c2: 0x731f,
						0x97c3: 0x7642,
						0x97c4: 0x77ad,
						0x97c5: 0x7a1c,
						0x97c6: 0x7ce7,
						0x97c7: 0x826f,
						0x97c8: 0x8ad2,
						0x97c9: 0x907c,
						0x97ca: 0x91cf,
						0x97cb: 0x9675,
						0x97cc: 0x9818,
						0x97cd: 0x529b,
						0x97ce: 0x7dd1,
						0x97cf: 0x502b,
						0x97d0: 0x5398,
						0x97d1: 0x6797,
						0x97d2: 0x6dcb,
						0x97d3: 0x71d0,
						0x97d4: 0x7433,
						0x97d5: 0x81e8,
						0x97d6: 0x8f2a,
						0x97d7: 0x96a3,
						0x97d8: 0x9c57,
						0x97d9: 0x9e9f,
						0x97da: 0x7460,
						0x97db: 0x5841,
						0x97dc: 0x6d99,
						0x97dd: 0x7d2f,
						0x97de: 0x985e,
						0x97df: 0x4ee4,
						0x97e0: 0x4f36,
						0x97e1: 0x4f8b,
						0x97e2: 0x51b7,
						0x97e3: 0x52b1,
						0x97e4: 0x5dba,
						0x97e5: 0x601c,
						0x97e6: 0x73b2,
						0x97e7: 0x793c,
						0x97e8: 0x82d3,
						0x97e9: 0x9234,
						0x97ea: 0x96b7,
						0x97eb: 0x96f6,
						0x97ec: 0x970a,
						0x97ed: 0x9e97,
						0x97ee: 0x9f62,
						0x97ef: 0x66a6,
						0x97f0: 0x6b74,
						0x97f1: 0x5217,
						0x97f2: 0x52a3,
						0x97f3: 0x70c8,
						0x97f4: 0x88c2,
						0x97f5: 0x5ec9,
						0x97f6: 0x604b,
						0x97f7: 0x6190,
						0x97f8: 0x6f23,
						0x97f9: 0x7149,
						0x97fa: 0x7c3e,
						0x97fb: 0x7df4,
						0x97fc: 0x806f,
						0x9840: 0x84ee,
						0x9841: 0x9023,
						0x9842: 0x932c,
						0x9843: 0x5442,
						0x9844: 0x9b6f,
						0x9845: 0x6ad3,
						0x9846: 0x7089,
						0x9847: 0x8cc2,
						0x9848: 0x8def,
						0x9849: 0x9732,
						0x984a: 0x52b4,
						0x984b: 0x5a41,
						0x984c: 0x5eca,
						0x984d: 0x5f04,
						0x984e: 0x6717,
						0x984f: 0x697c,
						0x9850: 0x6994,
						0x9851: 0x6d6a,
						0x9852: 0x6f0f,
						0x9853: 0x7262,
						0x9854: 0x72fc,
						0x9855: 0x7bed,
						0x9856: 0x8001,
						0x9857: 0x807e,
						0x9858: 0x874b,
						0x9859: 0x90ce,
						0x985a: 0x516d,
						0x985b: 0x9e93,
						0x985c: 0x7984,
						0x985d: 0x808b,
						0x985e: 0x9332,
						0x985f: 0x8ad6,
						0x9860: 0x502d,
						0x9861: 0x548c,
						0x9862: 0x8a71,
						0x9863: 0x6b6a,
						0x9864: 0x8cc4,
						0x9865: 0x8107,
						0x9866: 0x60d1,
						0x9867: 0x67a0,
						0x9868: 0x9df2,
						0x9869: 0x4e99,
						0x986a: 0x4e98,
						0x986b: 0x9c10,
						0x986c: 0x8a6b,
						0x986d: 0x85c1,
						0x986e: 0x8568,
						0x986f: 0x6900,
						0x9870: 0x6e7e,
						0x9871: 0x7897,
						0x9872: 0x8155,
						0x989f: 0x5f0c,
						0x98a0: 0x4e10,
						0x98a1: 0x4e15,
						0x98a2: 0x4e2a,
						0x98a3: 0x4e31,
						0x98a4: 0x4e36,
						0x98a5: 0x4e3c,
						0x98a6: 0x4e3f,
						0x98a7: 0x4e42,
						0x98a8: 0x4e56,
						0x98a9: 0x4e58,
						0x98aa: 0x4e82,
						0x98ab: 0x4e85,
						0x98ac: 0x8c6b,
						0x98ad: 0x4e8a,
						0x98ae: 0x8212,
						0x98af: 0x5f0d,
						0x98b0: 0x4e8e,
						0x98b1: 0x4e9e,
						0x98b2: 0x4e9f,
						0x98b3: 0x4ea0,
						0x98b4: 0x4ea2,
						0x98b5: 0x4eb0,
						0x98b6: 0x4eb3,
						0x98b7: 0x4eb6,
						0x98b8: 0x4ece,
						0x98b9: 0x4ecd,
						0x98ba: 0x4ec4,
						0x98bb: 0x4ec6,
						0x98bc: 0x4ec2,
						0x98bd: 0x4ed7,
						0x98be: 0x4ede,
						0x98bf: 0x4eed,
						0x98c0: 0x4edf,
						0x98c1: 0x4ef7,
						0x98c2: 0x4f09,
						0x98c3: 0x4f5a,
						0x98c4: 0x4f30,
						0x98c5: 0x4f5b,
						0x98c6: 0x4f5d,
						0x98c7: 0x4f57,
						0x98c8: 0x4f47,
						0x98c9: 0x4f76,
						0x98ca: 0x4f88,
						0x98cb: 0x4f8f,
						0x98cc: 0x4f98,
						0x98cd: 0x4f7b,
						0x98ce: 0x4f69,
						0x98cf: 0x4f70,
						0x98d0: 0x4f91,
						0x98d1: 0x4f6f,
						0x98d2: 0x4f86,
						0x98d3: 0x4f96,
						0x98d4: 0x5118,
						0x98d5: 0x4fd4,
						0x98d6: 0x4fdf,
						0x98d7: 0x4fce,
						0x98d8: 0x4fd8,
						0x98d9: 0x4fdb,
						0x98da: 0x4fd1,
						0x98db: 0x4fda,
						0x98dc: 0x4fd0,
						0x98dd: 0x4fe4,
						0x98de: 0x4fe5,
						0x98df: 0x501a,
						0x98e0: 0x5028,
						0x98e1: 0x5014,
						0x98e2: 0x502a,
						0x98e3: 0x5025,
						0x98e4: 0x5005,
						0x98e5: 0x4f1c,
						0x98e6: 0x4ff6,
						0x98e7: 0x5021,
						0x98e8: 0x5029,
						0x98e9: 0x502c,
						0x98ea: 0x4ffe,
						0x98eb: 0x4fef,
						0x98ec: 0x5011,
						0x98ed: 0x5006,
						0x98ee: 0x5043,
						0x98ef: 0x5047,
						0x98f0: 0x6703,
						0x98f1: 0x5055,
						0x98f2: 0x5050,
						0x98f3: 0x5048,
						0x98f4: 0x505a,
						0x98f5: 0x5056,
						0x98f6: 0x506c,
						0x98f7: 0x5078,
						0x98f8: 0x5080,
						0x98f9: 0x509a,
						0x98fa: 0x5085,
						0x98fb: 0x50b4,
						0x98fc: 0x50b2,
						0x9940: 0x50c9,
						0x9941: 0x50ca,
						0x9942: 0x50b3,
						0x9943: 0x50c2,
						0x9944: 0x50d6,
						0x9945: 0x50de,
						0x9946: 0x50e5,
						0x9947: 0x50ed,
						0x9948: 0x50e3,
						0x9949: 0x50ee,
						0x994a: 0x50f9,
						0x994b: 0x50f5,
						0x994c: 0x5109,
						0x994d: 0x5101,
						0x994e: 0x5102,
						0x994f: 0x5116,
						0x9950: 0x5115,
						0x9951: 0x5114,
						0x9952: 0x511a,
						0x9953: 0x5121,
						0x9954: 0x513a,
						0x9955: 0x5137,
						0x9956: 0x513c,
						0x9957: 0x513b,
						0x9958: 0x513f,
						0x9959: 0x5140,
						0x995a: 0x5152,
						0x995b: 0x514c,
						0x995c: 0x5154,
						0x995d: 0x5162,
						0x995e: 0x7af8,
						0x995f: 0x5169,
						0x9960: 0x516a,
						0x9961: 0x516e,
						0x9962: 0x5180,
						0x9963: 0x5182,
						0x9964: 0x56d8,
						0x9965: 0x518c,
						0x9966: 0x5189,
						0x9967: 0x518f,
						0x9968: 0x5191,
						0x9969: 0x5193,
						0x996a: 0x5195,
						0x996b: 0x5196,
						0x996c: 0x51a4,
						0x996d: 0x51a6,
						0x996e: 0x51a2,
						0x996f: 0x51a9,
						0x9970: 0x51aa,
						0x9971: 0x51ab,
						0x9972: 0x51b3,
						0x9973: 0x51b1,
						0x9974: 0x51b2,
						0x9975: 0x51b0,
						0x9976: 0x51b5,
						0x9977: 0x51bd,
						0x9978: 0x51c5,
						0x9979: 0x51c9,
						0x997a: 0x51db,
						0x997b: 0x51e0,
						0x997c: 0x8655,
						0x997d: 0x51e9,
						0x997e: 0x51ed,
						0x9980: 0x51f0,
						0x9981: 0x51f5,
						0x9982: 0x51fe,
						0x9983: 0x5204,
						0x9984: 0x520b,
						0x9985: 0x5214,
						0x9986: 0x520e,
						0x9987: 0x5227,
						0x9988: 0x522a,
						0x9989: 0x522e,
						0x998a: 0x5233,
						0x998b: 0x5239,
						0x998c: 0x524f,
						0x998d: 0x5244,
						0x998e: 0x524b,
						0x998f: 0x524c,
						0x9990: 0x525e,
						0x9991: 0x5254,
						0x9992: 0x526a,
						0x9993: 0x5274,
						0x9994: 0x5269,
						0x9995: 0x5273,
						0x9996: 0x527f,
						0x9997: 0x527d,
						0x9998: 0x528d,
						0x9999: 0x5294,
						0x999a: 0x5292,
						0x999b: 0x5271,
						0x999c: 0x5288,
						0x999d: 0x5291,
						0x999e: 0x8fa8,
						0x999f: 0x8fa7,
						0x99a0: 0x52ac,
						0x99a1: 0x52ad,
						0x99a2: 0x52bc,
						0x99a3: 0x52b5,
						0x99a4: 0x52c1,
						0x99a5: 0x52cd,
						0x99a6: 0x52d7,
						0x99a7: 0x52de,
						0x99a8: 0x52e3,
						0x99a9: 0x52e6,
						0x99aa: 0x98ed,
						0x99ab: 0x52e0,
						0x99ac: 0x52f3,
						0x99ad: 0x52f5,
						0x99ae: 0x52f8,
						0x99af: 0x52f9,
						0x99b0: 0x5306,
						0x99b1: 0x5308,
						0x99b2: 0x7538,
						0x99b3: 0x530d,
						0x99b4: 0x5310,
						0x99b5: 0x530f,
						0x99b6: 0x5315,
						0x99b7: 0x531a,
						0x99b8: 0x5323,
						0x99b9: 0x532f,
						0x99ba: 0x5331,
						0x99bb: 0x5333,
						0x99bc: 0x5338,
						0x99bd: 0x5340,
						0x99be: 0x5346,
						0x99bf: 0x5345,
						0x99c0: 0x4e17,
						0x99c1: 0x5349,
						0x99c2: 0x534d,
						0x99c3: 0x51d6,
						0x99c4: 0x535e,
						0x99c5: 0x5369,
						0x99c6: 0x536e,
						0x99c7: 0x5918,
						0x99c8: 0x537b,
						0x99c9: 0x5377,
						0x99ca: 0x5382,
						0x99cb: 0x5396,
						0x99cc: 0x53a0,
						0x99cd: 0x53a6,
						0x99ce: 0x53a5,
						0x99cf: 0x53ae,
						0x99d0: 0x53b0,
						0x99d1: 0x53b6,
						0x99d2: 0x53c3,
						0x99d3: 0x7c12,
						0x99d4: 0x96d9,
						0x99d5: 0x53df,
						0x99d6: 0x66fc,
						0x99d7: 0x71ee,
						0x99d8: 0x53ee,
						0x99d9: 0x53e8,
						0x99da: 0x53ed,
						0x99db: 0x53fa,
						0x99dc: 0x5401,
						0x99dd: 0x543d,
						0x99de: 0x5440,
						0x99df: 0x542c,
						0x99e0: 0x542d,
						0x99e1: 0x543c,
						0x99e2: 0x542e,
						0x99e3: 0x5436,
						0x99e4: 0x5429,
						0x99e5: 0x541d,
						0x99e6: 0x544e,
						0x99e7: 0x548f,
						0x99e8: 0x5475,
						0x99e9: 0x548e,
						0x99ea: 0x545f,
						0x99eb: 0x5471,
						0x99ec: 0x5477,
						0x99ed: 0x5470,
						0x99ee: 0x5492,
						0x99ef: 0x547b,
						0x99f0: 0x5480,
						0x99f1: 0x5476,
						0x99f2: 0x5484,
						0x99f3: 0x5490,
						0x99f4: 0x5486,
						0x99f5: 0x54c7,
						0x99f6: 0x54a2,
						0x99f7: 0x54b8,
						0x99f8: 0x54a5,
						0x99f9: 0x54ac,
						0x99fa: 0x54c4,
						0x99fb: 0x54c8,
						0x99fc: 0x54a8,
						0x9a40: 0x54ab,
						0x9a41: 0x54c2,
						0x9a42: 0x54a4,
						0x9a43: 0x54be,
						0x9a44: 0x54bc,
						0x9a45: 0x54d8,
						0x9a46: 0x54e5,
						0x9a47: 0x54e6,
						0x9a48: 0x550f,
						0x9a49: 0x5514,
						0x9a4a: 0x54fd,
						0x9a4b: 0x54ee,
						0x9a4c: 0x54ed,
						0x9a4d: 0x54fa,
						0x9a4e: 0x54e2,
						0x9a4f: 0x5539,
						0x9a50: 0x5540,
						0x9a51: 0x5563,
						0x9a52: 0x554c,
						0x9a53: 0x552e,
						0x9a54: 0x555c,
						0x9a55: 0x5545,
						0x9a56: 0x5556,
						0x9a57: 0x5557,
						0x9a58: 0x5538,
						0x9a59: 0x5533,
						0x9a5a: 0x555d,
						0x9a5b: 0x5599,
						0x9a5c: 0x5580,
						0x9a5d: 0x54af,
						0x9a5e: 0x558a,
						0x9a5f: 0x559f,
						0x9a60: 0x557b,
						0x9a61: 0x557e,
						0x9a62: 0x5598,
						0x9a63: 0x559e,
						0x9a64: 0x55ae,
						0x9a65: 0x557c,
						0x9a66: 0x5583,
						0x9a67: 0x55a9,
						0x9a68: 0x5587,
						0x9a69: 0x55a8,
						0x9a6a: 0x55da,
						0x9a6b: 0x55c5,
						0x9a6c: 0x55df,
						0x9a6d: 0x55c4,
						0x9a6e: 0x55dc,
						0x9a6f: 0x55e4,
						0x9a70: 0x55d4,
						0x9a71: 0x5614,
						0x9a72: 0x55f7,
						0x9a73: 0x5616,
						0x9a74: 0x55fe,
						0x9a75: 0x55fd,
						0x9a76: 0x561b,
						0x9a77: 0x55f9,
						0x9a78: 0x564e,
						0x9a79: 0x5650,
						0x9a7a: 0x71df,
						0x9a7b: 0x5634,
						0x9a7c: 0x5636,
						0x9a7d: 0x5632,
						0x9a7e: 0x5638,
						0x9a80: 0x566b,
						0x9a81: 0x5664,
						0x9a82: 0x562f,
						0x9a83: 0x566c,
						0x9a84: 0x566a,
						0x9a85: 0x5686,
						0x9a86: 0x5680,
						0x9a87: 0x568a,
						0x9a88: 0x56a0,
						0x9a89: 0x5694,
						0x9a8a: 0x568f,
						0x9a8b: 0x56a5,
						0x9a8c: 0x56ae,
						0x9a8d: 0x56b6,
						0x9a8e: 0x56b4,
						0x9a8f: 0x56c2,
						0x9a90: 0x56bc,
						0x9a91: 0x56c1,
						0x9a92: 0x56c3,
						0x9a93: 0x56c0,
						0x9a94: 0x56c8,
						0x9a95: 0x56ce,
						0x9a96: 0x56d1,
						0x9a97: 0x56d3,
						0x9a98: 0x56d7,
						0x9a99: 0x56ee,
						0x9a9a: 0x56f9,
						0x9a9b: 0x5700,
						0x9a9c: 0x56ff,
						0x9a9d: 0x5704,
						0x9a9e: 0x5709,
						0x9a9f: 0x5708,
						0x9aa0: 0x570b,
						0x9aa1: 0x570d,
						0x9aa2: 0x5713,
						0x9aa3: 0x5718,
						0x9aa4: 0x5716,
						0x9aa5: 0x55c7,
						0x9aa6: 0x571c,
						0x9aa7: 0x5726,
						0x9aa8: 0x5737,
						0x9aa9: 0x5738,
						0x9aaa: 0x574e,
						0x9aab: 0x573b,
						0x9aac: 0x5740,
						0x9aad: 0x574f,
						0x9aae: 0x5769,
						0x9aaf: 0x57c0,
						0x9ab0: 0x5788,
						0x9ab1: 0x5761,
						0x9ab2: 0x577f,
						0x9ab3: 0x5789,
						0x9ab4: 0x5793,
						0x9ab5: 0x57a0,
						0x9ab6: 0x57b3,
						0x9ab7: 0x57a4,
						0x9ab8: 0x57aa,
						0x9ab9: 0x57b0,
						0x9aba: 0x57c3,
						0x9abb: 0x57c6,
						0x9abc: 0x57d4,
						0x9abd: 0x57d2,
						0x9abe: 0x57d3,
						0x9abf: 0x580a,
						0x9ac0: 0x57d6,
						0x9ac1: 0x57e3,
						0x9ac2: 0x580b,
						0x9ac3: 0x5819,
						0x9ac4: 0x581d,
						0x9ac5: 0x5872,
						0x9ac6: 0x5821,
						0x9ac7: 0x5862,
						0x9ac8: 0x584b,
						0x9ac9: 0x5870,
						0x9aca: 0x6bc0,
						0x9acb: 0x5852,
						0x9acc: 0x583d,
						0x9acd: 0x5879,
						0x9ace: 0x5885,
						0x9acf: 0x58b9,
						0x9ad0: 0x589f,
						0x9ad1: 0x58ab,
						0x9ad2: 0x58ba,
						0x9ad3: 0x58de,
						0x9ad4: 0x58bb,
						0x9ad5: 0x58b8,
						0x9ad6: 0x58ae,
						0x9ad7: 0x58c5,
						0x9ad8: 0x58d3,
						0x9ad9: 0x58d1,
						0x9ada: 0x58d7,
						0x9adb: 0x58d9,
						0x9adc: 0x58d8,
						0x9add: 0x58e5,
						0x9ade: 0x58dc,
						0x9adf: 0x58e4,
						0x9ae0: 0x58df,
						0x9ae1: 0x58ef,
						0x9ae2: 0x58fa,
						0x9ae3: 0x58f9,
						0x9ae4: 0x58fb,
						0x9ae5: 0x58fc,
						0x9ae6: 0x58fd,
						0x9ae7: 0x5902,
						0x9ae8: 0x590a,
						0x9ae9: 0x5910,
						0x9aea: 0x591b,
						0x9aeb: 0x68a6,
						0x9aec: 0x5925,
						0x9aed: 0x592c,
						0x9aee: 0x592d,
						0x9aef: 0x5932,
						0x9af0: 0x5938,
						0x9af1: 0x593e,
						0x9af2: 0x7ad2,
						0x9af3: 0x5955,
						0x9af4: 0x5950,
						0x9af5: 0x594e,
						0x9af6: 0x595a,
						0x9af7: 0x5958,
						0x9af8: 0x5962,
						0x9af9: 0x5960,
						0x9afa: 0x5967,
						0x9afb: 0x596c,
						0x9afc: 0x5969,
						0x9b40: 0x5978,
						0x9b41: 0x5981,
						0x9b42: 0x599d,
						0x9b43: 0x4f5e,
						0x9b44: 0x4fab,
						0x9b45: 0x59a3,
						0x9b46: 0x59b2,
						0x9b47: 0x59c6,
						0x9b48: 0x59e8,
						0x9b49: 0x59dc,
						0x9b4a: 0x598d,
						0x9b4b: 0x59d9,
						0x9b4c: 0x59da,
						0x9b4d: 0x5a25,
						0x9b4e: 0x5a1f,
						0x9b4f: 0x5a11,
						0x9b50: 0x5a1c,
						0x9b51: 0x5a09,
						0x9b52: 0x5a1a,
						0x9b53: 0x5a40,
						0x9b54: 0x5a6c,
						0x9b55: 0x5a49,
						0x9b56: 0x5a35,
						0x9b57: 0x5a36,
						0x9b58: 0x5a62,
						0x9b59: 0x5a6a,
						0x9b5a: 0x5a9a,
						0x9b5b: 0x5abc,
						0x9b5c: 0x5abe,
						0x9b5d: 0x5acb,
						0x9b5e: 0x5ac2,
						0x9b5f: 0x5abd,
						0x9b60: 0x5ae3,
						0x9b61: 0x5ad7,
						0x9b62: 0x5ae6,
						0x9b63: 0x5ae9,
						0x9b64: 0x5ad6,
						0x9b65: 0x5afa,
						0x9b66: 0x5afb,
						0x9b67: 0x5b0c,
						0x9b68: 0x5b0b,
						0x9b69: 0x5b16,
						0x9b6a: 0x5b32,
						0x9b6b: 0x5ad0,
						0x9b6c: 0x5b2a,
						0x9b6d: 0x5b36,
						0x9b6e: 0x5b3e,
						0x9b6f: 0x5b43,
						0x9b70: 0x5b45,
						0x9b71: 0x5b40,
						0x9b72: 0x5b51,
						0x9b73: 0x5b55,
						0x9b74: 0x5b5a,
						0x9b75: 0x5b5b,
						0x9b76: 0x5b65,
						0x9b77: 0x5b69,
						0x9b78: 0x5b70,
						0x9b79: 0x5b73,
						0x9b7a: 0x5b75,
						0x9b7b: 0x5b78,
						0x9b7c: 0x6588,
						0x9b7d: 0x5b7a,
						0x9b7e: 0x5b80,
						0x9b80: 0x5b83,
						0x9b81: 0x5ba6,
						0x9b82: 0x5bb8,
						0x9b83: 0x5bc3,
						0x9b84: 0x5bc7,
						0x9b85: 0x5bc9,
						0x9b86: 0x5bd4,
						0x9b87: 0x5bd0,
						0x9b88: 0x5be4,
						0x9b89: 0x5be6,
						0x9b8a: 0x5be2,
						0x9b8b: 0x5bde,
						0x9b8c: 0x5be5,
						0x9b8d: 0x5beb,
						0x9b8e: 0x5bf0,
						0x9b8f: 0x5bf6,
						0x9b90: 0x5bf3,
						0x9b91: 0x5c05,
						0x9b92: 0x5c07,
						0x9b93: 0x5c08,
						0x9b94: 0x5c0d,
						0x9b95: 0x5c13,
						0x9b96: 0x5c20,
						0x9b97: 0x5c22,
						0x9b98: 0x5c28,
						0x9b99: 0x5c38,
						0x9b9a: 0x5c39,
						0x9b9b: 0x5c41,
						0x9b9c: 0x5c46,
						0x9b9d: 0x5c4e,
						0x9b9e: 0x5c53,
						0x9b9f: 0x5c50,
						0x9ba0: 0x5c4f,
						0x9ba1: 0x5b71,
						0x9ba2: 0x5c6c,
						0x9ba3: 0x5c6e,
						0x9ba4: 0x4e62,
						0x9ba5: 0x5c76,
						0x9ba6: 0x5c79,
						0x9ba7: 0x5c8c,
						0x9ba8: 0x5c91,
						0x9ba9: 0x5c94,
						0x9baa: 0x599b,
						0x9bab: 0x5cab,
						0x9bac: 0x5cbb,
						0x9bad: 0x5cb6,
						0x9bae: 0x5cbc,
						0x9baf: 0x5cb7,
						0x9bb0: 0x5cc5,
						0x9bb1: 0x5cbe,
						0x9bb2: 0x5cc7,
						0x9bb3: 0x5cd9,
						0x9bb4: 0x5ce9,
						0x9bb5: 0x5cfd,
						0x9bb6: 0x5cfa,
						0x9bb7: 0x5ced,
						0x9bb8: 0x5d8c,
						0x9bb9: 0x5cea,
						0x9bba: 0x5d0b,
						0x9bbb: 0x5d15,
						0x9bbc: 0x5d17,
						0x9bbd: 0x5d5c,
						0x9bbe: 0x5d1f,
						0x9bbf: 0x5d1b,
						0x9bc0: 0x5d11,
						0x9bc1: 0x5d14,
						0x9bc2: 0x5d22,
						0x9bc3: 0x5d1a,
						0x9bc4: 0x5d19,
						0x9bc5: 0x5d18,
						0x9bc6: 0x5d4c,
						0x9bc7: 0x5d52,
						0x9bc8: 0x5d4e,
						0x9bc9: 0x5d4b,
						0x9bca: 0x5d6c,
						0x9bcb: 0x5d73,
						0x9bcc: 0x5d76,
						0x9bcd: 0x5d87,
						0x9bce: 0x5d84,
						0x9bcf: 0x5d82,
						0x9bd0: 0x5da2,
						0x9bd1: 0x5d9d,
						0x9bd2: 0x5dac,
						0x9bd3: 0x5dae,
						0x9bd4: 0x5dbd,
						0x9bd5: 0x5d90,
						0x9bd6: 0x5db7,
						0x9bd7: 0x5dbc,
						0x9bd8: 0x5dc9,
						0x9bd9: 0x5dcd,
						0x9bda: 0x5dd3,
						0x9bdb: 0x5dd2,
						0x9bdc: 0x5dd6,
						0x9bdd: 0x5ddb,
						0x9bde: 0x5deb,
						0x9bdf: 0x5df2,
						0x9be0: 0x5df5,
						0x9be1: 0x5e0b,
						0x9be2: 0x5e1a,
						0x9be3: 0x5e19,
						0x9be4: 0x5e11,
						0x9be5: 0x5e1b,
						0x9be6: 0x5e36,
						0x9be7: 0x5e37,
						0x9be8: 0x5e44,
						0x9be9: 0x5e43,
						0x9bea: 0x5e40,
						0x9beb: 0x5e4e,
						0x9bec: 0x5e57,
						0x9bed: 0x5e54,
						0x9bee: 0x5e5f,
						0x9bef: 0x5e62,
						0x9bf0: 0x5e64,
						0x9bf1: 0x5e47,
						0x9bf2: 0x5e75,
						0x9bf3: 0x5e76,
						0x9bf4: 0x5e7a,
						0x9bf5: 0x9ebc,
						0x9bf6: 0x5e7f,
						0x9bf7: 0x5ea0,
						0x9bf8: 0x5ec1,
						0x9bf9: 0x5ec2,
						0x9bfa: 0x5ec8,
						0x9bfb: 0x5ed0,
						0x9bfc: 0x5ecf,
						0x9c40: 0x5ed6,
						0x9c41: 0x5ee3,
						0x9c42: 0x5edd,
						0x9c43: 0x5eda,
						0x9c44: 0x5edb,
						0x9c45: 0x5ee2,
						0x9c46: 0x5ee1,
						0x9c47: 0x5ee8,
						0x9c48: 0x5ee9,
						0x9c49: 0x5eec,
						0x9c4a: 0x5ef1,
						0x9c4b: 0x5ef3,
						0x9c4c: 0x5ef0,
						0x9c4d: 0x5ef4,
						0x9c4e: 0x5ef8,
						0x9c4f: 0x5efe,
						0x9c50: 0x5f03,
						0x9c51: 0x5f09,
						0x9c52: 0x5f5d,
						0x9c53: 0x5f5c,
						0x9c54: 0x5f0b,
						0x9c55: 0x5f11,
						0x9c56: 0x5f16,
						0x9c57: 0x5f29,
						0x9c58: 0x5f2d,
						0x9c59: 0x5f38,
						0x9c5a: 0x5f41,
						0x9c5b: 0x5f48,
						0x9c5c: 0x5f4c,
						0x9c5d: 0x5f4e,
						0x9c5e: 0x5f2f,
						0x9c5f: 0x5f51,
						0x9c60: 0x5f56,
						0x9c61: 0x5f57,
						0x9c62: 0x5f59,
						0x9c63: 0x5f61,
						0x9c64: 0x5f6d,
						0x9c65: 0x5f73,
						0x9c66: 0x5f77,
						0x9c67: 0x5f83,
						0x9c68: 0x5f82,
						0x9c69: 0x5f7f,
						0x9c6a: 0x5f8a,
						0x9c6b: 0x5f88,
						0x9c6c: 0x5f91,
						0x9c6d: 0x5f87,
						0x9c6e: 0x5f9e,
						0x9c6f: 0x5f99,
						0x9c70: 0x5f98,
						0x9c71: 0x5fa0,
						0x9c72: 0x5fa8,
						0x9c73: 0x5fad,
						0x9c74: 0x5fbc,
						0x9c75: 0x5fd6,
						0x9c76: 0x5ffb,
						0x9c77: 0x5fe4,
						0x9c78: 0x5ff8,
						0x9c79: 0x5ff1,
						0x9c7a: 0x5fdd,
						0x9c7b: 0x60b3,
						0x9c7c: 0x5fff,
						0x9c7d: 0x6021,
						0x9c7e: 0x6060,
						0x9c80: 0x6019,
						0x9c81: 0x6010,
						0x9c82: 0x6029,
						0x9c83: 0x600e,
						0x9c84: 0x6031,
						0x9c85: 0x601b,
						0x9c86: 0x6015,
						0x9c87: 0x602b,
						0x9c88: 0x6026,
						0x9c89: 0x600f,
						0x9c8a: 0x603a,
						0x9c8b: 0x605a,
						0x9c8c: 0x6041,
						0x9c8d: 0x606a,
						0x9c8e: 0x6077,
						0x9c8f: 0x605f,
						0x9c90: 0x604a,
						0x9c91: 0x6046,
						0x9c92: 0x604d,
						0x9c93: 0x6063,
						0x9c94: 0x6043,
						0x9c95: 0x6064,
						0x9c96: 0x6042,
						0x9c97: 0x606c,
						0x9c98: 0x606b,
						0x9c99: 0x6059,
						0x9c9a: 0x6081,
						0x9c9b: 0x608d,
						0x9c9c: 0x60e7,
						0x9c9d: 0x6083,
						0x9c9e: 0x609a,
						0x9c9f: 0x6084,
						0x9ca0: 0x609b,
						0x9ca1: 0x6096,
						0x9ca2: 0x6097,
						0x9ca3: 0x6092,
						0x9ca4: 0x60a7,
						0x9ca5: 0x608b,
						0x9ca6: 0x60e1,
						0x9ca7: 0x60b8,
						0x9ca8: 0x60e0,
						0x9ca9: 0x60d3,
						0x9caa: 0x60b4,
						0x9cab: 0x5ff0,
						0x9cac: 0x60bd,
						0x9cad: 0x60c6,
						0x9cae: 0x60b5,
						0x9caf: 0x60d8,
						0x9cb0: 0x614d,
						0x9cb1: 0x6115,
						0x9cb2: 0x6106,
						0x9cb3: 0x60f6,
						0x9cb4: 0x60f7,
						0x9cb5: 0x6100,
						0x9cb6: 0x60f4,
						0x9cb7: 0x60fa,
						0x9cb8: 0x6103,
						0x9cb9: 0x6121,
						0x9cba: 0x60fb,
						0x9cbb: 0x60f1,
						0x9cbc: 0x610d,
						0x9cbd: 0x610e,
						0x9cbe: 0x6147,
						0x9cbf: 0x613e,
						0x9cc0: 0x6128,
						0x9cc1: 0x6127,
						0x9cc2: 0x614a,
						0x9cc3: 0x613f,
						0x9cc4: 0x613c,
						0x9cc5: 0x612c,
						0x9cc6: 0x6134,
						0x9cc7: 0x613d,
						0x9cc8: 0x6142,
						0x9cc9: 0x6144,
						0x9cca: 0x6173,
						0x9ccb: 0x6177,
						0x9ccc: 0x6158,
						0x9ccd: 0x6159,
						0x9cce: 0x615a,
						0x9ccf: 0x616b,
						0x9cd0: 0x6174,
						0x9cd1: 0x616f,
						0x9cd2: 0x6165,
						0x9cd3: 0x6171,
						0x9cd4: 0x615f,
						0x9cd5: 0x615d,
						0x9cd6: 0x6153,
						0x9cd7: 0x6175,
						0x9cd8: 0x6199,
						0x9cd9: 0x6196,
						0x9cda: 0x6187,
						0x9cdb: 0x61ac,
						0x9cdc: 0x6194,
						0x9cdd: 0x619a,
						0x9cde: 0x618a,
						0x9cdf: 0x6191,
						0x9ce0: 0x61ab,
						0x9ce1: 0x61ae,
						0x9ce2: 0x61cc,
						0x9ce3: 0x61ca,
						0x9ce4: 0x61c9,
						0x9ce5: 0x61f7,
						0x9ce6: 0x61c8,
						0x9ce7: 0x61c3,
						0x9ce8: 0x61c6,
						0x9ce9: 0x61ba,
						0x9cea: 0x61cb,
						0x9ceb: 0x7f79,
						0x9cec: 0x61cd,
						0x9ced: 0x61e6,
						0x9cee: 0x61e3,
						0x9cef: 0x61f6,
						0x9cf0: 0x61fa,
						0x9cf1: 0x61f4,
						0x9cf2: 0x61ff,
						0x9cf3: 0x61fd,
						0x9cf4: 0x61fc,
						0x9cf5: 0x61fe,
						0x9cf6: 0x6200,
						0x9cf7: 0x6208,
						0x9cf8: 0x6209,
						0x9cf9: 0x620d,
						0x9cfa: 0x620c,
						0x9cfb: 0x6214,
						0x9cfc: 0x621b,
						0x9d40: 0x621e,
						0x9d41: 0x6221,
						0x9d42: 0x622a,
						0x9d43: 0x622e,
						0x9d44: 0x6230,
						0x9d45: 0x6232,
						0x9d46: 0x6233,
						0x9d47: 0x6241,
						0x9d48: 0x624e,
						0x9d49: 0x625e,
						0x9d4a: 0x6263,
						0x9d4b: 0x625b,
						0x9d4c: 0x6260,
						0x9d4d: 0x6268,
						0x9d4e: 0x627c,
						0x9d4f: 0x6282,
						0x9d50: 0x6289,
						0x9d51: 0x627e,
						0x9d52: 0x6292,
						0x9d53: 0x6293,
						0x9d54: 0x6296,
						0x9d55: 0x62d4,
						0x9d56: 0x6283,
						0x9d57: 0x6294,
						0x9d58: 0x62d7,
						0x9d59: 0x62d1,
						0x9d5a: 0x62bb,
						0x9d5b: 0x62cf,
						0x9d5c: 0x62ff,
						0x9d5d: 0x62c6,
						0x9d5e: 0x64d4,
						0x9d5f: 0x62c8,
						0x9d60: 0x62dc,
						0x9d61: 0x62cc,
						0x9d62: 0x62ca,
						0x9d63: 0x62c2,
						0x9d64: 0x62c7,
						0x9d65: 0x629b,
						0x9d66: 0x62c9,
						0x9d67: 0x630c,
						0x9d68: 0x62ee,
						0x9d69: 0x62f1,
						0x9d6a: 0x6327,
						0x9d6b: 0x6302,
						0x9d6c: 0x6308,
						0x9d6d: 0x62ef,
						0x9d6e: 0x62f5,
						0x9d6f: 0x6350,
						0x9d70: 0x633e,
						0x9d71: 0x634d,
						0x9d72: 0x641c,
						0x9d73: 0x634f,
						0x9d74: 0x6396,
						0x9d75: 0x638e,
						0x9d76: 0x6380,
						0x9d77: 0x63ab,
						0x9d78: 0x6376,
						0x9d79: 0x63a3,
						0x9d7a: 0x638f,
						0x9d7b: 0x6389,
						0x9d7c: 0x639f,
						0x9d7d: 0x63b5,
						0x9d7e: 0x636b,
						0x9d80: 0x6369,
						0x9d81: 0x63be,
						0x9d82: 0x63e9,
						0x9d83: 0x63c0,
						0x9d84: 0x63c6,
						0x9d85: 0x63e3,
						0x9d86: 0x63c9,
						0x9d87: 0x63d2,
						0x9d88: 0x63f6,
						0x9d89: 0x63c4,
						0x9d8a: 0x6416,
						0x9d8b: 0x6434,
						0x9d8c: 0x6406,
						0x9d8d: 0x6413,
						0x9d8e: 0x6426,
						0x9d8f: 0x6436,
						0x9d90: 0x651d,
						0x9d91: 0x6417,
						0x9d92: 0x6428,
						0x9d93: 0x640f,
						0x9d94: 0x6467,
						0x9d95: 0x646f,
						0x9d96: 0x6476,
						0x9d97: 0x644e,
						0x9d98: 0x652a,
						0x9d99: 0x6495,
						0x9d9a: 0x6493,
						0x9d9b: 0x64a5,
						0x9d9c: 0x64a9,
						0x9d9d: 0x6488,
						0x9d9e: 0x64bc,
						0x9d9f: 0x64da,
						0x9da0: 0x64d2,
						0x9da1: 0x64c5,
						0x9da2: 0x64c7,
						0x9da3: 0x64bb,
						0x9da4: 0x64d8,
						0x9da5: 0x64c2,
						0x9da6: 0x64f1,
						0x9da7: 0x64e7,
						0x9da8: 0x8209,
						0x9da9: 0x64e0,
						0x9daa: 0x64e1,
						0x9dab: 0x62ac,
						0x9dac: 0x64e3,
						0x9dad: 0x64ef,
						0x9dae: 0x652c,
						0x9daf: 0x64f6,
						0x9db0: 0x64f4,
						0x9db1: 0x64f2,
						0x9db2: 0x64fa,
						0x9db3: 0x6500,
						0x9db4: 0x64fd,
						0x9db5: 0x6518,
						0x9db6: 0x651c,
						0x9db7: 0x6505,
						0x9db8: 0x6524,
						0x9db9: 0x6523,
						0x9dba: 0x652b,
						0x9dbb: 0x6534,
						0x9dbc: 0x6535,
						0x9dbd: 0x6537,
						0x9dbe: 0x6536,
						0x9dbf: 0x6538,
						0x9dc0: 0x754b,
						0x9dc1: 0x6548,
						0x9dc2: 0x6556,
						0x9dc3: 0x6555,
						0x9dc4: 0x654d,
						0x9dc5: 0x6558,
						0x9dc6: 0x655e,
						0x9dc7: 0x655d,
						0x9dc8: 0x6572,
						0x9dc9: 0x6578,
						0x9dca: 0x6582,
						0x9dcb: 0x6583,
						0x9dcc: 0x8b8a,
						0x9dcd: 0x659b,
						0x9dce: 0x659f,
						0x9dcf: 0x65ab,
						0x9dd0: 0x65b7,
						0x9dd1: 0x65c3,
						0x9dd2: 0x65c6,
						0x9dd3: 0x65c1,
						0x9dd4: 0x65c4,
						0x9dd5: 0x65cc,
						0x9dd6: 0x65d2,
						0x9dd7: 0x65db,
						0x9dd8: 0x65d9,
						0x9dd9: 0x65e0,
						0x9dda: 0x65e1,
						0x9ddb: 0x65f1,
						0x9ddc: 0x6772,
						0x9ddd: 0x660a,
						0x9dde: 0x6603,
						0x9ddf: 0x65fb,
						0x9de0: 0x6773,
						0x9de1: 0x6635,
						0x9de2: 0x6636,
						0x9de3: 0x6634,
						0x9de4: 0x661c,
						0x9de5: 0x664f,
						0x9de6: 0x6644,
						0x9de7: 0x6649,
						0x9de8: 0x6641,
						0x9de9: 0x665e,
						0x9dea: 0x665d,
						0x9deb: 0x6664,
						0x9dec: 0x6667,
						0x9ded: 0x6668,
						0x9dee: 0x665f,
						0x9def: 0x6662,
						0x9df0: 0x6670,
						0x9df1: 0x6683,
						0x9df2: 0x6688,
						0x9df3: 0x668e,
						0x9df4: 0x6689,
						0x9df5: 0x6684,
						0x9df6: 0x6698,
						0x9df7: 0x669d,
						0x9df8: 0x66c1,
						0x9df9: 0x66b9,
						0x9dfa: 0x66c9,
						0x9dfb: 0x66be,
						0x9dfc: 0x66bc,
						0x9e40: 0x66c4,
						0x9e41: 0x66b8,
						0x9e42: 0x66d6,
						0x9e43: 0x66da,
						0x9e44: 0x66e0,
						0x9e45: 0x663f,
						0x9e46: 0x66e6,
						0x9e47: 0x66e9,
						0x9e48: 0x66f0,
						0x9e49: 0x66f5,
						0x9e4a: 0x66f7,
						0x9e4b: 0x670f,
						0x9e4c: 0x6716,
						0x9e4d: 0x671e,
						0x9e4e: 0x6726,
						0x9e4f: 0x6727,
						0x9e50: 0x9738,
						0x9e51: 0x672e,
						0x9e52: 0x673f,
						0x9e53: 0x6736,
						0x9e54: 0x6741,
						0x9e55: 0x6738,
						0x9e56: 0x6737,
						0x9e57: 0x6746,
						0x9e58: 0x675e,
						0x9e59: 0x6760,
						0x9e5a: 0x6759,
						0x9e5b: 0x6763,
						0x9e5c: 0x6764,
						0x9e5d: 0x6789,
						0x9e5e: 0x6770,
						0x9e5f: 0x67a9,
						0x9e60: 0x677c,
						0x9e61: 0x676a,
						0x9e62: 0x678c,
						0x9e63: 0x678b,
						0x9e64: 0x67a6,
						0x9e65: 0x67a1,
						0x9e66: 0x6785,
						0x9e67: 0x67b7,
						0x9e68: 0x67ef,
						0x9e69: 0x67b4,
						0x9e6a: 0x67ec,
						0x9e6b: 0x67b3,
						0x9e6c: 0x67e9,
						0x9e6d: 0x67b8,
						0x9e6e: 0x67e4,
						0x9e6f: 0x67de,
						0x9e70: 0x67dd,
						0x9e71: 0x67e2,
						0x9e72: 0x67ee,
						0x9e73: 0x67b9,
						0x9e74: 0x67ce,
						0x9e75: 0x67c6,
						0x9e76: 0x67e7,
						0x9e77: 0x6a9c,
						0x9e78: 0x681e,
						0x9e79: 0x6846,
						0x9e7a: 0x6829,
						0x9e7b: 0x6840,
						0x9e7c: 0x684d,
						0x9e7d: 0x6832,
						0x9e7e: 0x684e,
						0x9e80: 0x68b3,
						0x9e81: 0x682b,
						0x9e82: 0x6859,
						0x9e83: 0x6863,
						0x9e84: 0x6877,
						0x9e85: 0x687f,
						0x9e86: 0x689f,
						0x9e87: 0x688f,
						0x9e88: 0x68ad,
						0x9e89: 0x6894,
						0x9e8a: 0x689d,
						0x9e8b: 0x689b,
						0x9e8c: 0x6883,
						0x9e8d: 0x6aae,
						0x9e8e: 0x68b9,
						0x9e8f: 0x6874,
						0x9e90: 0x68b5,
						0x9e91: 0x68a0,
						0x9e92: 0x68ba,
						0x9e93: 0x690f,
						0x9e94: 0x688d,
						0x9e95: 0x687e,
						0x9e96: 0x6901,
						0x9e97: 0x68ca,
						0x9e98: 0x6908,
						0x9e99: 0x68d8,
						0x9e9a: 0x6922,
						0x9e9b: 0x6926,
						0x9e9c: 0x68e1,
						0x9e9d: 0x690c,
						0x9e9e: 0x68cd,
						0x9e9f: 0x68d4,
						0x9ea0: 0x68e7,
						0x9ea1: 0x68d5,
						0x9ea2: 0x6936,
						0x9ea3: 0x6912,
						0x9ea4: 0x6904,
						0x9ea5: 0x68d7,
						0x9ea6: 0x68e3,
						0x9ea7: 0x6925,
						0x9ea8: 0x68f9,
						0x9ea9: 0x68e0,
						0x9eaa: 0x68ef,
						0x9eab: 0x6928,
						0x9eac: 0x692a,
						0x9ead: 0x691a,
						0x9eae: 0x6923,
						0x9eaf: 0x6921,
						0x9eb0: 0x68c6,
						0x9eb1: 0x6979,
						0x9eb2: 0x6977,
						0x9eb3: 0x695c,
						0x9eb4: 0x6978,
						0x9eb5: 0x696b,
						0x9eb6: 0x6954,
						0x9eb7: 0x697e,
						0x9eb8: 0x696e,
						0x9eb9: 0x6939,
						0x9eba: 0x6974,
						0x9ebb: 0x693d,
						0x9ebc: 0x6959,
						0x9ebd: 0x6930,
						0x9ebe: 0x6961,
						0x9ebf: 0x695e,
						0x9ec0: 0x695d,
						0x9ec1: 0x6981,
						0x9ec2: 0x696a,
						0x9ec3: 0x69b2,
						0x9ec4: 0x69ae,
						0x9ec5: 0x69d0,
						0x9ec6: 0x69bf,
						0x9ec7: 0x69c1,
						0x9ec8: 0x69d3,
						0x9ec9: 0x69be,
						0x9eca: 0x69ce,
						0x9ecb: 0x5be8,
						0x9ecc: 0x69ca,
						0x9ecd: 0x69dd,
						0x9ece: 0x69bb,
						0x9ecf: 0x69c3,
						0x9ed0: 0x69a7,
						0x9ed1: 0x6a2e,
						0x9ed2: 0x6991,
						0x9ed3: 0x69a0,
						0x9ed4: 0x699c,
						0x9ed5: 0x6995,
						0x9ed6: 0x69b4,
						0x9ed7: 0x69de,
						0x9ed8: 0x69e8,
						0x9ed9: 0x6a02,
						0x9eda: 0x6a1b,
						0x9edb: 0x69ff,
						0x9edc: 0x6b0a,
						0x9edd: 0x69f9,
						0x9ede: 0x69f2,
						0x9edf: 0x69e7,
						0x9ee0: 0x6a05,
						0x9ee1: 0x69b1,
						0x9ee2: 0x6a1e,
						0x9ee3: 0x69ed,
						0x9ee4: 0x6a14,
						0x9ee5: 0x69eb,
						0x9ee6: 0x6a0a,
						0x9ee7: 0x6a12,
						0x9ee8: 0x6ac1,
						0x9ee9: 0x6a23,
						0x9eea: 0x6a13,
						0x9eeb: 0x6a44,
						0x9eec: 0x6a0c,
						0x9eed: 0x6a72,
						0x9eee: 0x6a36,
						0x9eef: 0x6a78,
						0x9ef0: 0x6a47,
						0x9ef1: 0x6a62,
						0x9ef2: 0x6a59,
						0x9ef3: 0x6a66,
						0x9ef4: 0x6a48,
						0x9ef5: 0x6a38,
						0x9ef6: 0x6a22,
						0x9ef7: 0x6a90,
						0x9ef8: 0x6a8d,
						0x9ef9: 0x6aa0,
						0x9efa: 0x6a84,
						0x9efb: 0x6aa2,
						0x9efc: 0x6aa3,
						0x9f40: 0x6a97,
						0x9f41: 0x8617,
						0x9f42: 0x6abb,
						0x9f43: 0x6ac3,
						0x9f44: 0x6ac2,
						0x9f45: 0x6ab8,
						0x9f46: 0x6ab3,
						0x9f47: 0x6aac,
						0x9f48: 0x6ade,
						0x9f49: 0x6ad1,
						0x9f4a: 0x6adf,
						0x9f4b: 0x6aaa,
						0x9f4c: 0x6ada,
						0x9f4d: 0x6aea,
						0x9f4e: 0x6afb,
						0x9f4f: 0x6b05,
						0x9f50: 0x8616,
						0x9f51: 0x6afa,
						0x9f52: 0x6b12,
						0x9f53: 0x6b16,
						0x9f54: 0x9b31,
						0x9f55: 0x6b1f,
						0x9f56: 0x6b38,
						0x9f57: 0x6b37,
						0x9f58: 0x76dc,
						0x9f59: 0x6b39,
						0x9f5a: 0x98ee,
						0x9f5b: 0x6b47,
						0x9f5c: 0x6b43,
						0x9f5d: 0x6b49,
						0x9f5e: 0x6b50,
						0x9f5f: 0x6b59,
						0x9f60: 0x6b54,
						0x9f61: 0x6b5b,
						0x9f62: 0x6b5f,
						0x9f63: 0x6b61,
						0x9f64: 0x6b78,
						0x9f65: 0x6b79,
						0x9f66: 0x6b7f,
						0x9f67: 0x6b80,
						0x9f68: 0x6b84,
						0x9f69: 0x6b83,
						0x9f6a: 0x6b8d,
						0x9f6b: 0x6b98,
						0x9f6c: 0x6b95,
						0x9f6d: 0x6b9e,
						0x9f6e: 0x6ba4,
						0x9f6f: 0x6baa,
						0x9f70: 0x6bab,
						0x9f71: 0x6baf,
						0x9f72: 0x6bb2,
						0x9f73: 0x6bb1,
						0x9f74: 0x6bb3,
						0x9f75: 0x6bb7,
						0x9f76: 0x6bbc,
						0x9f77: 0x6bc6,
						0x9f78: 0x6bcb,
						0x9f79: 0x6bd3,
						0x9f7a: 0x6bdf,
						0x9f7b: 0x6bec,
						0x9f7c: 0x6beb,
						0x9f7d: 0x6bf3,
						0x9f7e: 0x6bef,
						0x9f80: 0x9ebe,
						0x9f81: 0x6c08,
						0x9f82: 0x6c13,
						0x9f83: 0x6c14,
						0x9f84: 0x6c1b,
						0x9f85: 0x6c24,
						0x9f86: 0x6c23,
						0x9f87: 0x6c5e,
						0x9f88: 0x6c55,
						0x9f89: 0x6c62,
						0x9f8a: 0x6c6a,
						0x9f8b: 0x6c82,
						0x9f8c: 0x6c8d,
						0x9f8d: 0x6c9a,
						0x9f8e: 0x6c81,
						0x9f8f: 0x6c9b,
						0x9f90: 0x6c7e,
						0x9f91: 0x6c68,
						0x9f92: 0x6c73,
						0x9f93: 0x6c92,
						0x9f94: 0x6c90,
						0x9f95: 0x6cc4,
						0x9f96: 0x6cf1,
						0x9f97: 0x6cd3,
						0x9f98: 0x6cbd,
						0x9f99: 0x6cd7,
						0x9f9a: 0x6cc5,
						0x9f9b: 0x6cdd,
						0x9f9c: 0x6cae,
						0x9f9d: 0x6cb1,
						0x9f9e: 0x6cbe,
						0x9f9f: 0x6cba,
						0x9fa0: 0x6cdb,
						0x9fa1: 0x6cef,
						0x9fa2: 0x6cd9,
						0x9fa3: 0x6cea,
						0x9fa4: 0x6d1f,
						0x9fa5: 0x884d,
						0x9fa6: 0x6d36,
						0x9fa7: 0x6d2b,
						0x9fa8: 0x6d3d,
						0x9fa9: 0x6d38,
						0x9faa: 0x6d19,
						0x9fab: 0x6d35,
						0x9fac: 0x6d33,
						0x9fad: 0x6d12,
						0x9fae: 0x6d0c,
						0x9faf: 0x6d63,
						0x9fb0: 0x6d93,
						0x9fb1: 0x6d64,
						0x9fb2: 0x6d5a,
						0x9fb3: 0x6d79,
						0x9fb4: 0x6d59,
						0x9fb5: 0x6d8e,
						0x9fb6: 0x6d95,
						0x9fb7: 0x6fe4,
						0x9fb8: 0x6d85,
						0x9fb9: 0x6df9,
						0x9fba: 0x6e15,
						0x9fbb: 0x6e0a,
						0x9fbc: 0x6db5,
						0x9fbd: 0x6dc7,
						0x9fbe: 0x6de6,
						0x9fbf: 0x6db8,
						0x9fc0: 0x6dc6,
						0x9fc1: 0x6dec,
						0x9fc2: 0x6dde,
						0x9fc3: 0x6dcc,
						0x9fc4: 0x6de8,
						0x9fc5: 0x6dd2,
						0x9fc6: 0x6dc5,
						0x9fc7: 0x6dfa,
						0x9fc8: 0x6dd9,
						0x9fc9: 0x6de4,
						0x9fca: 0x6dd5,
						0x9fcb: 0x6dea,
						0x9fcc: 0x6dee,
						0x9fcd: 0x6e2d,
						0x9fce: 0x6e6e,
						0x9fcf: 0x6e2e,
						0x9fd0: 0x6e19,
						0x9fd1: 0x6e72,
						0x9fd2: 0x6e5f,
						0x9fd3: 0x6e3e,
						0x9fd4: 0x6e23,
						0x9fd5: 0x6e6b,
						0x9fd6: 0x6e2b,
						0x9fd7: 0x6e76,
						0x9fd8: 0x6e4d,
						0x9fd9: 0x6e1f,
						0x9fda: 0x6e43,
						0x9fdb: 0x6e3a,
						0x9fdc: 0x6e4e,
						0x9fdd: 0x6e24,
						0x9fde: 0x6eff,
						0x9fdf: 0x6e1d,
						0x9fe0: 0x6e38,
						0x9fe1: 0x6e82,
						0x9fe2: 0x6eaa,
						0x9fe3: 0x6e98,
						0x9fe4: 0x6ec9,
						0x9fe5: 0x6eb7,
						0x9fe6: 0x6ed3,
						0x9fe7: 0x6ebd,
						0x9fe8: 0x6eaf,
						0x9fe9: 0x6ec4,
						0x9fea: 0x6eb2,
						0x9feb: 0x6ed4,
						0x9fec: 0x6ed5,
						0x9fed: 0x6e8f,
						0x9fee: 0x6ea5,
						0x9fef: 0x6ec2,
						0x9ff0: 0x6e9f,
						0x9ff1: 0x6f41,
						0x9ff2: 0x6f11,
						0x9ff3: 0x704c,
						0x9ff4: 0x6eec,
						0x9ff5: 0x6ef8,
						0x9ff6: 0x6efe,
						0x9ff7: 0x6f3f,
						0x9ff8: 0x6ef2,
						0x9ff9: 0x6f31,
						0x9ffa: 0x6eef,
						0x9ffb: 0x6f32,
						0x9ffc: 0x6ecc,
						0xa1: 0xff61,
						0xa2: 0xff62,
						0xa3: 0xff63,
						0xa4: 0xff64,
						0xa5: 0xff65,
						0xa6: 0xff66,
						0xa7: 0xff67,
						0xa8: 0xff68,
						0xa9: 0xff69,
						0xaa: 0xff6a,
						0xab: 0xff6b,
						0xac: 0xff6c,
						0xad: 0xff6d,
						0xae: 0xff6e,
						0xaf: 0xff6f,
						0xb0: 0xff70,
						0xb1: 0xff71,
						0xb2: 0xff72,
						0xb3: 0xff73,
						0xb4: 0xff74,
						0xb5: 0xff75,
						0xb6: 0xff76,
						0xb7: 0xff77,
						0xb8: 0xff78,
						0xb9: 0xff79,
						0xba: 0xff7a,
						0xbb: 0xff7b,
						0xbc: 0xff7c,
						0xbd: 0xff7d,
						0xbe: 0xff7e,
						0xbf: 0xff7f,
						0xc0: 0xff80,
						0xc1: 0xff81,
						0xc2: 0xff82,
						0xc3: 0xff83,
						0xc4: 0xff84,
						0xc5: 0xff85,
						0xc6: 0xff86,
						0xc7: 0xff87,
						0xc8: 0xff88,
						0xc9: 0xff89,
						0xca: 0xff8a,
						0xcb: 0xff8b,
						0xcc: 0xff8c,
						0xcd: 0xff8d,
						0xce: 0xff8e,
						0xcf: 0xff8f,
						0xd0: 0xff90,
						0xd1: 0xff91,
						0xd2: 0xff92,
						0xd3: 0xff93,
						0xd4: 0xff94,
						0xd5: 0xff95,
						0xd6: 0xff96,
						0xd7: 0xff97,
						0xd8: 0xff98,
						0xd9: 0xff99,
						0xda: 0xff9a,
						0xdb: 0xff9b,
						0xdc: 0xff9c,
						0xdd: 0xff9d,
						0xde: 0xff9e,
						0xdf: 0xff9f,
						0xe040: 0x6f3e,
						0xe041: 0x6f13,
						0xe042: 0x6ef7,
						0xe043: 0x6f86,
						0xe044: 0x6f7a,
						0xe045: 0x6f78,
						0xe046: 0x6f81,
						0xe047: 0x6f80,
						0xe048: 0x6f6f,
						0xe049: 0x6f5b,
						0xe04a: 0x6ff3,
						0xe04b: 0x6f6d,
						0xe04c: 0x6f82,
						0xe04d: 0x6f7c,
						0xe04e: 0x6f58,
						0xe04f: 0x6f8e,
						0xe050: 0x6f91,
						0xe051: 0x6fc2,
						0xe052: 0x6f66,
						0xe053: 0x6fb3,
						0xe054: 0x6fa3,
						0xe055: 0x6fa1,
						0xe056: 0x6fa4,
						0xe057: 0x6fb9,
						0xe058: 0x6fc6,
						0xe059: 0x6faa,
						0xe05a: 0x6fdf,
						0xe05b: 0x6fd5,
						0xe05c: 0x6fec,
						0xe05d: 0x6fd4,
						0xe05e: 0x6fd8,
						0xe05f: 0x6ff1,
						0xe060: 0x6fee,
						0xe061: 0x6fdb,
						0xe062: 0x7009,
						0xe063: 0x700b,
						0xe064: 0x6ffa,
						0xe065: 0x7011,
						0xe066: 0x7001,
						0xe067: 0x700f,
						0xe068: 0x6ffe,
						0xe069: 0x701b,
						0xe06a: 0x701a,
						0xe06b: 0x6f74,
						0xe06c: 0x701d,
						0xe06d: 0x7018,
						0xe06e: 0x701f,
						0xe06f: 0x7030,
						0xe070: 0x703e,
						0xe071: 0x7032,
						0xe072: 0x7051,
						0xe073: 0x7063,
						0xe074: 0x7099,
						0xe075: 0x7092,
						0xe076: 0x70af,
						0xe077: 0x70f1,
						0xe078: 0x70ac,
						0xe079: 0x70b8,
						0xe07a: 0x70b3,
						0xe07b: 0x70ae,
						0xe07c: 0x70df,
						0xe07d: 0x70cb,
						0xe07e: 0x70dd,
						0xe080: 0x70d9,
						0xe081: 0x7109,
						0xe082: 0x70fd,
						0xe083: 0x711c,
						0xe084: 0x7119,
						0xe085: 0x7165,
						0xe086: 0x7155,
						0xe087: 0x7188,
						0xe088: 0x7166,
						0xe089: 0x7162,
						0xe08a: 0x714c,
						0xe08b: 0x7156,
						0xe08c: 0x716c,
						0xe08d: 0x718f,
						0xe08e: 0x71fb,
						0xe08f: 0x7184,
						0xe090: 0x7195,
						0xe091: 0x71a8,
						0xe092: 0x71ac,
						0xe093: 0x71d7,
						0xe094: 0x71b9,
						0xe095: 0x71be,
						0xe096: 0x71d2,
						0xe097: 0x71c9,
						0xe098: 0x71d4,
						0xe099: 0x71ce,
						0xe09a: 0x71e0,
						0xe09b: 0x71ec,
						0xe09c: 0x71e7,
						0xe09d: 0x71f5,
						0xe09e: 0x71fc,
						0xe09f: 0x71f9,
						0xe0a0: 0x71ff,
						0xe0a1: 0x720d,
						0xe0a2: 0x7210,
						0xe0a3: 0x721b,
						0xe0a4: 0x7228,
						0xe0a5: 0x722d,
						0xe0a6: 0x722c,
						0xe0a7: 0x7230,
						0xe0a8: 0x7232,
						0xe0a9: 0x723b,
						0xe0aa: 0x723c,
						0xe0ab: 0x723f,
						0xe0ac: 0x7240,
						0xe0ad: 0x7246,
						0xe0ae: 0x724b,
						0xe0af: 0x7258,
						0xe0b0: 0x7274,
						0xe0b1: 0x727e,
						0xe0b2: 0x7282,
						0xe0b3: 0x7281,
						0xe0b4: 0x7287,
						0xe0b5: 0x7292,
						0xe0b6: 0x7296,
						0xe0b7: 0x72a2,
						0xe0b8: 0x72a7,
						0xe0b9: 0x72b9,
						0xe0ba: 0x72b2,
						0xe0bb: 0x72c3,
						0xe0bc: 0x72c6,
						0xe0bd: 0x72c4,
						0xe0be: 0x72ce,
						0xe0bf: 0x72d2,
						0xe0c0: 0x72e2,
						0xe0c1: 0x72e0,
						0xe0c2: 0x72e1,
						0xe0c3: 0x72f9,
						0xe0c4: 0x72f7,
						0xe0c5: 0x500f,
						0xe0c6: 0x7317,
						0xe0c7: 0x730a,
						0xe0c8: 0x731c,
						0xe0c9: 0x7316,
						0xe0ca: 0x731d,
						0xe0cb: 0x7334,
						0xe0cc: 0x732f,
						0xe0cd: 0x7329,
						0xe0ce: 0x7325,
						0xe0cf: 0x733e,
						0xe0d0: 0x734e,
						0xe0d1: 0x734f,
						0xe0d2: 0x9ed8,
						0xe0d3: 0x7357,
						0xe0d4: 0x736a,
						0xe0d5: 0x7368,
						0xe0d6: 0x7370,
						0xe0d7: 0x7378,
						0xe0d8: 0x7375,
						0xe0d9: 0x737b,
						0xe0da: 0x737a,
						0xe0db: 0x73c8,
						0xe0dc: 0x73b3,
						0xe0dd: 0x73ce,
						0xe0de: 0x73bb,
						0xe0df: 0x73c0,
						0xe0e0: 0x73e5,
						0xe0e1: 0x73ee,
						0xe0e2: 0x73de,
						0xe0e3: 0x74a2,
						0xe0e4: 0x7405,
						0xe0e5: 0x746f,
						0xe0e6: 0x7425,
						0xe0e7: 0x73f8,
						0xe0e8: 0x7432,
						0xe0e9: 0x743a,
						0xe0ea: 0x7455,
						0xe0eb: 0x743f,
						0xe0ec: 0x745f,
						0xe0ed: 0x7459,
						0xe0ee: 0x7441,
						0xe0ef: 0x745c,
						0xe0f0: 0x7469,
						0xe0f1: 0x7470,
						0xe0f2: 0x7463,
						0xe0f3: 0x746a,
						0xe0f4: 0x7476,
						0xe0f5: 0x747e,
						0xe0f6: 0x748b,
						0xe0f7: 0x749e,
						0xe0f8: 0x74a7,
						0xe0f9: 0x74ca,
						0xe0fa: 0x74cf,
						0xe0fb: 0x74d4,
						0xe0fc: 0x73f1,
						0xe140: 0x74e0,
						0xe141: 0x74e3,
						0xe142: 0x74e7,
						0xe143: 0x74e9,
						0xe144: 0x74ee,
						0xe145: 0x74f2,
						0xe146: 0x74f0,
						0xe147: 0x74f1,
						0xe148: 0x74f8,
						0xe149: 0x74f7,
						0xe14a: 0x7504,
						0xe14b: 0x7503,
						0xe14c: 0x7505,
						0xe14d: 0x750c,
						0xe14e: 0x750e,
						0xe14f: 0x750d,
						0xe150: 0x7515,
						0xe151: 0x7513,
						0xe152: 0x751e,
						0xe153: 0x7526,
						0xe154: 0x752c,
						0xe155: 0x753c,
						0xe156: 0x7544,
						0xe157: 0x754d,
						0xe158: 0x754a,
						0xe159: 0x7549,
						0xe15a: 0x755b,
						0xe15b: 0x7546,
						0xe15c: 0x755a,
						0xe15d: 0x7569,
						0xe15e: 0x7564,
						0xe15f: 0x7567,
						0xe160: 0x756b,
						0xe161: 0x756d,
						0xe162: 0x7578,
						0xe163: 0x7576,
						0xe164: 0x7586,
						0xe165: 0x7587,
						0xe166: 0x7574,
						0xe167: 0x758a,
						0xe168: 0x7589,
						0xe169: 0x7582,
						0xe16a: 0x7594,
						0xe16b: 0x759a,
						0xe16c: 0x759d,
						0xe16d: 0x75a5,
						0xe16e: 0x75a3,
						0xe16f: 0x75c2,
						0xe170: 0x75b3,
						0xe171: 0x75c3,
						0xe172: 0x75b5,
						0xe173: 0x75bd,
						0xe174: 0x75b8,
						0xe175: 0x75bc,
						0xe176: 0x75b1,
						0xe177: 0x75cd,
						0xe178: 0x75ca,
						0xe179: 0x75d2,
						0xe17a: 0x75d9,
						0xe17b: 0x75e3,
						0xe17c: 0x75de,
						0xe17d: 0x75fe,
						0xe17e: 0x75ff,
						0xe180: 0x75fc,
						0xe181: 0x7601,
						0xe182: 0x75f0,
						0xe183: 0x75fa,
						0xe184: 0x75f2,
						0xe185: 0x75f3,
						0xe186: 0x760b,
						0xe187: 0x760d,
						0xe188: 0x7609,
						0xe189: 0x761f,
						0xe18a: 0x7627,
						0xe18b: 0x7620,
						0xe18c: 0x7621,
						0xe18d: 0x7622,
						0xe18e: 0x7624,
						0xe18f: 0x7634,
						0xe190: 0x7630,
						0xe191: 0x763b,
						0xe192: 0x7647,
						0xe193: 0x7648,
						0xe194: 0x7646,
						0xe195: 0x765c,
						0xe196: 0x7658,
						0xe197: 0x7661,
						0xe198: 0x7662,
						0xe199: 0x7668,
						0xe19a: 0x7669,
						0xe19b: 0x766a,
						0xe19c: 0x7667,
						0xe19d: 0x766c,
						0xe19e: 0x7670,
						0xe19f: 0x7672,
						0xe1a0: 0x7676,
						0xe1a1: 0x7678,
						0xe1a2: 0x767c,
						0xe1a3: 0x7680,
						0xe1a4: 0x7683,
						0xe1a5: 0x7688,
						0xe1a6: 0x768b,
						0xe1a7: 0x768e,
						0xe1a8: 0x7696,
						0xe1a9: 0x7693,
						0xe1aa: 0x7699,
						0xe1ab: 0x769a,
						0xe1ac: 0x76b0,
						0xe1ad: 0x76b4,
						0xe1ae: 0x76b8,
						0xe1af: 0x76b9,
						0xe1b0: 0x76ba,
						0xe1b1: 0x76c2,
						0xe1b2: 0x76cd,
						0xe1b3: 0x76d6,
						0xe1b4: 0x76d2,
						0xe1b5: 0x76de,
						0xe1b6: 0x76e1,
						0xe1b7: 0x76e5,
						0xe1b8: 0x76e7,
						0xe1b9: 0x76ea,
						0xe1ba: 0x862f,
						0xe1bb: 0x76fb,
						0xe1bc: 0x7708,
						0xe1bd: 0x7707,
						0xe1be: 0x7704,
						0xe1bf: 0x7729,
						0xe1c0: 0x7724,
						0xe1c1: 0x771e,
						0xe1c2: 0x7725,
						0xe1c3: 0x7726,
						0xe1c4: 0x771b,
						0xe1c5: 0x7737,
						0xe1c6: 0x7738,
						0xe1c7: 0x7747,
						0xe1c8: 0x775a,
						0xe1c9: 0x7768,
						0xe1ca: 0x776b,
						0xe1cb: 0x775b,
						0xe1cc: 0x7765,
						0xe1cd: 0x777f,
						0xe1ce: 0x777e,
						0xe1cf: 0x7779,
						0xe1d0: 0x778e,
						0xe1d1: 0x778b,
						0xe1d2: 0x7791,
						0xe1d3: 0x77a0,
						0xe1d4: 0x779e,
						0xe1d5: 0x77b0,
						0xe1d6: 0x77b6,
						0xe1d7: 0x77b9,
						0xe1d8: 0x77bf,
						0xe1d9: 0x77bc,
						0xe1da: 0x77bd,
						0xe1db: 0x77bb,
						0xe1dc: 0x77c7,
						0xe1dd: 0x77cd,
						0xe1de: 0x77d7,
						0xe1df: 0x77da,
						0xe1e0: 0x77dc,
						0xe1e1: 0x77e3,
						0xe1e2: 0x77ee,
						0xe1e3: 0x77fc,
						0xe1e4: 0x780c,
						0xe1e5: 0x7812,
						0xe1e6: 0x7926,
						0xe1e7: 0x7820,
						0xe1e8: 0x792a,
						0xe1e9: 0x7845,
						0xe1ea: 0x788e,
						0xe1eb: 0x7874,
						0xe1ec: 0x7886,
						0xe1ed: 0x787c,
						0xe1ee: 0x789a,
						0xe1ef: 0x788c,
						0xe1f0: 0x78a3,
						0xe1f1: 0x78b5,
						0xe1f2: 0x78aa,
						0xe1f3: 0x78af,
						0xe1f4: 0x78d1,
						0xe1f5: 0x78c6,
						0xe1f6: 0x78cb,
						0xe1f7: 0x78d4,
						0xe1f8: 0x78be,
						0xe1f9: 0x78bc,
						0xe1fa: 0x78c5,
						0xe1fb: 0x78ca,
						0xe1fc: 0x78ec,
						0xe240: 0x78e7,
						0xe241: 0x78da,
						0xe242: 0x78fd,
						0xe243: 0x78f4,
						0xe244: 0x7907,
						0xe245: 0x7912,
						0xe246: 0x7911,
						0xe247: 0x7919,
						0xe248: 0x792c,
						0xe249: 0x792b,
						0xe24a: 0x7940,
						0xe24b: 0x7960,
						0xe24c: 0x7957,
						0xe24d: 0x795f,
						0xe24e: 0x795a,
						0xe24f: 0x7955,
						0xe250: 0x7953,
						0xe251: 0x797a,
						0xe252: 0x797f,
						0xe253: 0x798a,
						0xe254: 0x799d,
						0xe255: 0x79a7,
						0xe256: 0x9f4b,
						0xe257: 0x79aa,
						0xe258: 0x79ae,
						0xe259: 0x79b3,
						0xe25a: 0x79b9,
						0xe25b: 0x79ba,
						0xe25c: 0x79c9,
						0xe25d: 0x79d5,
						0xe25e: 0x79e7,
						0xe25f: 0x79ec,
						0xe260: 0x79e1,
						0xe261: 0x79e3,
						0xe262: 0x7a08,
						0xe263: 0x7a0d,
						0xe264: 0x7a18,
						0xe265: 0x7a19,
						0xe266: 0x7a20,
						0xe267: 0x7a1f,
						0xe268: 0x7980,
						0xe269: 0x7a31,
						0xe26a: 0x7a3b,
						0xe26b: 0x7a3e,
						0xe26c: 0x7a37,
						0xe26d: 0x7a43,
						0xe26e: 0x7a57,
						0xe26f: 0x7a49,
						0xe270: 0x7a61,
						0xe271: 0x7a62,
						0xe272: 0x7a69,
						0xe273: 0x9f9d,
						0xe274: 0x7a70,
						0xe275: 0x7a79,
						0xe276: 0x7a7d,
						0xe277: 0x7a88,
						0xe278: 0x7a97,
						0xe279: 0x7a95,
						0xe27a: 0x7a98,
						0xe27b: 0x7a96,
						0xe27c: 0x7aa9,
						0xe27d: 0x7ac8,
						0xe27e: 0x7ab0,
						0xe280: 0x7ab6,
						0xe281: 0x7ac5,
						0xe282: 0x7ac4,
						0xe283: 0x7abf,
						0xe284: 0x9083,
						0xe285: 0x7ac7,
						0xe286: 0x7aca,
						0xe287: 0x7acd,
						0xe288: 0x7acf,
						0xe289: 0x7ad5,
						0xe28a: 0x7ad3,
						0xe28b: 0x7ad9,
						0xe28c: 0x7ada,
						0xe28d: 0x7add,
						0xe28e: 0x7ae1,
						0xe28f: 0x7ae2,
						0xe290: 0x7ae6,
						0xe291: 0x7aed,
						0xe292: 0x7af0,
						0xe293: 0x7b02,
						0xe294: 0x7b0f,
						0xe295: 0x7b0a,
						0xe296: 0x7b06,
						0xe297: 0x7b33,
						0xe298: 0x7b18,
						0xe299: 0x7b19,
						0xe29a: 0x7b1e,
						0xe29b: 0x7b35,
						0xe29c: 0x7b28,
						0xe29d: 0x7b36,
						0xe29e: 0x7b50,
						0xe29f: 0x7b7a,
						0xe2a0: 0x7b04,
						0xe2a1: 0x7b4d,
						0xe2a2: 0x7b0b,
						0xe2a3: 0x7b4c,
						0xe2a4: 0x7b45,
						0xe2a5: 0x7b75,
						0xe2a6: 0x7b65,
						0xe2a7: 0x7b74,
						0xe2a8: 0x7b67,
						0xe2a9: 0x7b70,
						0xe2aa: 0x7b71,
						0xe2ab: 0x7b6c,
						0xe2ac: 0x7b6e,
						0xe2ad: 0x7b9d,
						0xe2ae: 0x7b98,
						0xe2af: 0x7b9f,
						0xe2b0: 0x7b8d,
						0xe2b1: 0x7b9c,
						0xe2b2: 0x7b9a,
						0xe2b3: 0x7b8b,
						0xe2b4: 0x7b92,
						0xe2b5: 0x7b8f,
						0xe2b6: 0x7b5d,
						0xe2b7: 0x7b99,
						0xe2b8: 0x7bcb,
						0xe2b9: 0x7bc1,
						0xe2ba: 0x7bcc,
						0xe2bb: 0x7bcf,
						0xe2bc: 0x7bb4,
						0xe2bd: 0x7bc6,
						0xe2be: 0x7bdd,
						0xe2bf: 0x7be9,
						0xe2c0: 0x7c11,
						0xe2c1: 0x7c14,
						0xe2c2: 0x7be6,
						0xe2c3: 0x7be5,
						0xe2c4: 0x7c60,
						0xe2c5: 0x7c00,
						0xe2c6: 0x7c07,
						0xe2c7: 0x7c13,
						0xe2c8: 0x7bf3,
						0xe2c9: 0x7bf7,
						0xe2ca: 0x7c17,
						0xe2cb: 0x7c0d,
						0xe2cc: 0x7bf6,
						0xe2cd: 0x7c23,
						0xe2ce: 0x7c27,
						0xe2cf: 0x7c2a,
						0xe2d0: 0x7c1f,
						0xe2d1: 0x7c37,
						0xe2d2: 0x7c2b,
						0xe2d3: 0x7c3d,
						0xe2d4: 0x7c4c,
						0xe2d5: 0x7c43,
						0xe2d6: 0x7c54,
						0xe2d7: 0x7c4f,
						0xe2d8: 0x7c40,
						0xe2d9: 0x7c50,
						0xe2da: 0x7c58,
						0xe2db: 0x7c5f,
						0xe2dc: 0x7c64,
						0xe2dd: 0x7c56,
						0xe2de: 0x7c65,
						0xe2df: 0x7c6c,
						0xe2e0: 0x7c75,
						0xe2e1: 0x7c83,
						0xe2e2: 0x7c90,
						0xe2e3: 0x7ca4,
						0xe2e4: 0x7cad,
						0xe2e5: 0x7ca2,
						0xe2e6: 0x7cab,
						0xe2e7: 0x7ca1,
						0xe2e8: 0x7ca8,
						0xe2e9: 0x7cb3,
						0xe2ea: 0x7cb2,
						0xe2eb: 0x7cb1,
						0xe2ec: 0x7cae,
						0xe2ed: 0x7cb9,
						0xe2ee: 0x7cbd,
						0xe2ef: 0x7cc0,
						0xe2f0: 0x7cc5,
						0xe2f1: 0x7cc2,
						0xe2f2: 0x7cd8,
						0xe2f3: 0x7cd2,
						0xe2f4: 0x7cdc,
						0xe2f5: 0x7ce2,
						0xe2f6: 0x9b3b,
						0xe2f7: 0x7cef,
						0xe2f8: 0x7cf2,
						0xe2f9: 0x7cf4,
						0xe2fa: 0x7cf6,
						0xe2fb: 0x7cfa,
						0xe2fc: 0x7d06,
						0xe340: 0x7d02,
						0xe341: 0x7d1c,
						0xe342: 0x7d15,
						0xe343: 0x7d0a,
						0xe344: 0x7d45,
						0xe345: 0x7d4b,
						0xe346: 0x7d2e,
						0xe347: 0x7d32,
						0xe348: 0x7d3f,
						0xe349: 0x7d35,
						0xe34a: 0x7d46,
						0xe34b: 0x7d73,
						0xe34c: 0x7d56,
						0xe34d: 0x7d4e,
						0xe34e: 0x7d72,
						0xe34f: 0x7d68,
						0xe350: 0x7d6e,
						0xe351: 0x7d4f,
						0xe352: 0x7d63,
						0xe353: 0x7d93,
						0xe354: 0x7d89,
						0xe355: 0x7d5b,
						0xe356: 0x7d8f,
						0xe357: 0x7d7d,
						0xe358: 0x7d9b,
						0xe359: 0x7dba,
						0xe35a: 0x7dae,
						0xe35b: 0x7da3,
						0xe35c: 0x7db5,
						0xe35d: 0x7dc7,
						0xe35e: 0x7dbd,
						0xe35f: 0x7dab,
						0xe360: 0x7e3d,
						0xe361: 0x7da2,
						0xe362: 0x7daf,
						0xe363: 0x7ddc,
						0xe364: 0x7db8,
						0xe365: 0x7d9f,
						0xe366: 0x7db0,
						0xe367: 0x7dd8,
						0xe368: 0x7ddd,
						0xe369: 0x7de4,
						0xe36a: 0x7dde,
						0xe36b: 0x7dfb,
						0xe36c: 0x7df2,
						0xe36d: 0x7de1,
						0xe36e: 0x7e05,
						0xe36f: 0x7e0a,
						0xe370: 0x7e23,
						0xe371: 0x7e21,
						0xe372: 0x7e12,
						0xe373: 0x7e31,
						0xe374: 0x7e1f,
						0xe375: 0x7e09,
						0xe376: 0x7e0b,
						0xe377: 0x7e22,
						0xe378: 0x7e46,
						0xe379: 0x7e66,
						0xe37a: 0x7e3b,
						0xe37b: 0x7e35,
						0xe37c: 0x7e39,
						0xe37d: 0x7e43,
						0xe37e: 0x7e37,
						0xe380: 0x7e32,
						0xe381: 0x7e3a,
						0xe382: 0x7e67,
						0xe383: 0x7e5d,
						0xe384: 0x7e56,
						0xe385: 0x7e5e,
						0xe386: 0x7e59,
						0xe387: 0x7e5a,
						0xe388: 0x7e79,
						0xe389: 0x7e6a,
						0xe38a: 0x7e69,
						0xe38b: 0x7e7c,
						0xe38c: 0x7e7b,
						0xe38d: 0x7e83,
						0xe38e: 0x7dd5,
						0xe38f: 0x7e7d,
						0xe390: 0x8fae,
						0xe391: 0x7e7f,
						0xe392: 0x7e88,
						0xe393: 0x7e89,
						0xe394: 0x7e8c,
						0xe395: 0x7e92,
						0xe396: 0x7e90,
						0xe397: 0x7e93,
						0xe398: 0x7e94,
						0xe399: 0x7e96,
						0xe39a: 0x7e8e,
						0xe39b: 0x7e9b,
						0xe39c: 0x7e9c,
						0xe39d: 0x7f38,
						0xe39e: 0x7f3a,
						0xe39f: 0x7f45,
						0xe3a0: 0x7f4c,
						0xe3a1: 0x7f4d,
						0xe3a2: 0x7f4e,
						0xe3a3: 0x7f50,
						0xe3a4: 0x7f51,
						0xe3a5: 0x7f55,
						0xe3a6: 0x7f54,
						0xe3a7: 0x7f58,
						0xe3a8: 0x7f5f,
						0xe3a9: 0x7f60,
						0xe3aa: 0x7f68,
						0xe3ab: 0x7f69,
						0xe3ac: 0x7f67,
						0xe3ad: 0x7f78,
						0xe3ae: 0x7f82,
						0xe3af: 0x7f86,
						0xe3b0: 0x7f83,
						0xe3b1: 0x7f88,
						0xe3b2: 0x7f87,
						0xe3b3: 0x7f8c,
						0xe3b4: 0x7f94,
						0xe3b5: 0x7f9e,
						0xe3b6: 0x7f9d,
						0xe3b7: 0x7f9a,
						0xe3b8: 0x7fa3,
						0xe3b9: 0x7faf,
						0xe3ba: 0x7fb2,
						0xe3bb: 0x7fb9,
						0xe3bc: 0x7fae,
						0xe3bd: 0x7fb6,
						0xe3be: 0x7fb8,
						0xe3bf: 0x8b71,
						0xe3c0: 0x7fc5,
						0xe3c1: 0x7fc6,
						0xe3c2: 0x7fca,
						0xe3c3: 0x7fd5,
						0xe3c4: 0x7fd4,
						0xe3c5: 0x7fe1,
						0xe3c6: 0x7fe6,
						0xe3c7: 0x7fe9,
						0xe3c8: 0x7ff3,
						0xe3c9: 0x7ff9,
						0xe3ca: 0x98dc,
						0xe3cb: 0x8006,
						0xe3cc: 0x8004,
						0xe3cd: 0x800b,
						0xe3ce: 0x8012,
						0xe3cf: 0x8018,
						0xe3d0: 0x8019,
						0xe3d1: 0x801c,
						0xe3d2: 0x8021,
						0xe3d3: 0x8028,
						0xe3d4: 0x803f,
						0xe3d5: 0x803b,
						0xe3d6: 0x804a,
						0xe3d7: 0x8046,
						0xe3d8: 0x8052,
						0xe3d9: 0x8058,
						0xe3da: 0x805a,
						0xe3db: 0x805f,
						0xe3dc: 0x8062,
						0xe3dd: 0x8068,
						0xe3de: 0x8073,
						0xe3df: 0x8072,
						0xe3e0: 0x8070,
						0xe3e1: 0x8076,
						0xe3e2: 0x8079,
						0xe3e3: 0x807d,
						0xe3e4: 0x807f,
						0xe3e5: 0x8084,
						0xe3e6: 0x8086,
						0xe3e7: 0x8085,
						0xe3e8: 0x809b,
						0xe3e9: 0x8093,
						0xe3ea: 0x809a,
						0xe3eb: 0x80ad,
						0xe3ec: 0x5190,
						0xe3ed: 0x80ac,
						0xe3ee: 0x80db,
						0xe3ef: 0x80e5,
						0xe3f0: 0x80d9,
						0xe3f1: 0x80dd,
						0xe3f2: 0x80c4,
						0xe3f3: 0x80da,
						0xe3f4: 0x80d6,
						0xe3f5: 0x8109,
						0xe3f6: 0x80ef,
						0xe3f7: 0x80f1,
						0xe3f8: 0x811b,
						0xe3f9: 0x8129,
						0xe3fa: 0x8123,
						0xe3fb: 0x812f,
						0xe3fc: 0x814b,
						0xe440: 0x968b,
						0xe441: 0x8146,
						0xe442: 0x813e,
						0xe443: 0x8153,
						0xe444: 0x8151,
						0xe445: 0x80fc,
						0xe446: 0x8171,
						0xe447: 0x816e,
						0xe448: 0x8165,
						0xe449: 0x8166,
						0xe44a: 0x8174,
						0xe44b: 0x8183,
						0xe44c: 0x8188,
						0xe44d: 0x818a,
						0xe44e: 0x8180,
						0xe44f: 0x8182,
						0xe450: 0x81a0,
						0xe451: 0x8195,
						0xe452: 0x81a4,
						0xe453: 0x81a3,
						0xe454: 0x815f,
						0xe455: 0x8193,
						0xe456: 0x81a9,
						0xe457: 0x81b0,
						0xe458: 0x81b5,
						0xe459: 0x81be,
						0xe45a: 0x81b8,
						0xe45b: 0x81bd,
						0xe45c: 0x81c0,
						0xe45d: 0x81c2,
						0xe45e: 0x81ba,
						0xe45f: 0x81c9,
						0xe460: 0x81cd,
						0xe461: 0x81d1,
						0xe462: 0x81d9,
						0xe463: 0x81d8,
						0xe464: 0x81c8,
						0xe465: 0x81da,
						0xe466: 0x81df,
						0xe467: 0x81e0,
						0xe468: 0x81e7,
						0xe469: 0x81fa,
						0xe46a: 0x81fb,
						0xe46b: 0x81fe,
						0xe46c: 0x8201,
						0xe46d: 0x8202,
						0xe46e: 0x8205,
						0xe46f: 0x8207,
						0xe470: 0x820a,
						0xe471: 0x820d,
						0xe472: 0x8210,
						0xe473: 0x8216,
						0xe474: 0x8229,
						0xe475: 0x822b,
						0xe476: 0x8238,
						0xe477: 0x8233,
						0xe478: 0x8240,
						0xe479: 0x8259,
						0xe47a: 0x8258,
						0xe47b: 0x825d,
						0xe47c: 0x825a,
						0xe47d: 0x825f,
						0xe47e: 0x8264,
						0xe480: 0x8262,
						0xe481: 0x8268,
						0xe482: 0x826a,
						0xe483: 0x826b,
						0xe484: 0x822e,
						0xe485: 0x8271,
						0xe486: 0x8277,
						0xe487: 0x8278,
						0xe488: 0x827e,
						0xe489: 0x828d,
						0xe48a: 0x8292,
						0xe48b: 0x82ab,
						0xe48c: 0x829f,
						0xe48d: 0x82bb,
						0xe48e: 0x82ac,
						0xe48f: 0x82e1,
						0xe490: 0x82e3,
						0xe491: 0x82df,
						0xe492: 0x82d2,
						0xe493: 0x82f4,
						0xe494: 0x82f3,
						0xe495: 0x82fa,
						0xe496: 0x8393,
						0xe497: 0x8303,
						0xe498: 0x82fb,
						0xe499: 0x82f9,
						0xe49a: 0x82de,
						0xe49b: 0x8306,
						0xe49c: 0x82dc,
						0xe49d: 0x8309,
						0xe49e: 0x82d9,
						0xe49f: 0x8335,
						0xe4a0: 0x8334,
						0xe4a1: 0x8316,
						0xe4a2: 0x8332,
						0xe4a3: 0x8331,
						0xe4a4: 0x8340,
						0xe4a5: 0x8339,
						0xe4a6: 0x8350,
						0xe4a7: 0x8345,
						0xe4a8: 0x832f,
						0xe4a9: 0x832b,
						0xe4aa: 0x8317,
						0xe4ab: 0x8318,
						0xe4ac: 0x8385,
						0xe4ad: 0x839a,
						0xe4ae: 0x83aa,
						0xe4af: 0x839f,
						0xe4b0: 0x83a2,
						0xe4b1: 0x8396,
						0xe4b2: 0x8323,
						0xe4b3: 0x838e,
						0xe4b4: 0x8387,
						0xe4b5: 0x838a,
						0xe4b6: 0x837c,
						0xe4b7: 0x83b5,
						0xe4b8: 0x8373,
						0xe4b9: 0x8375,
						0xe4ba: 0x83a0,
						0xe4bb: 0x8389,
						0xe4bc: 0x83a8,
						0xe4bd: 0x83f4,
						0xe4be: 0x8413,
						0xe4bf: 0x83eb,
						0xe4c0: 0x83ce,
						0xe4c1: 0x83fd,
						0xe4c2: 0x8403,
						0xe4c3: 0x83d8,
						0xe4c4: 0x840b,
						0xe4c5: 0x83c1,
						0xe4c6: 0x83f7,
						0xe4c7: 0x8407,
						0xe4c8: 0x83e0,
						0xe4c9: 0x83f2,
						0xe4ca: 0x840d,
						0xe4cb: 0x8422,
						0xe4cc: 0x8420,
						0xe4cd: 0x83bd,
						0xe4ce: 0x8438,
						0xe4cf: 0x8506,
						0xe4d0: 0x83fb,
						0xe4d1: 0x846d,
						0xe4d2: 0x842a,
						0xe4d3: 0x843c,
						0xe4d4: 0x855a,
						0xe4d5: 0x8484,
						0xe4d6: 0x8477,
						0xe4d7: 0x846b,
						0xe4d8: 0x84ad,
						0xe4d9: 0x846e,
						0xe4da: 0x8482,
						0xe4db: 0x8469,
						0xe4dc: 0x8446,
						0xe4dd: 0x842c,
						0xe4de: 0x846f,
						0xe4df: 0x8479,
						0xe4e0: 0x8435,
						0xe4e1: 0x84ca,
						0xe4e2: 0x8462,
						0xe4e3: 0x84b9,
						0xe4e4: 0x84bf,
						0xe4e5: 0x849f,
						0xe4e6: 0x84d9,
						0xe4e7: 0x84cd,
						0xe4e8: 0x84bb,
						0xe4e9: 0x84da,
						0xe4ea: 0x84d0,
						0xe4eb: 0x84c1,
						0xe4ec: 0x84c6,
						0xe4ed: 0x84d6,
						0xe4ee: 0x84a1,
						0xe4ef: 0x8521,
						0xe4f0: 0x84ff,
						0xe4f1: 0x84f4,
						0xe4f2: 0x8517,
						0xe4f3: 0x8518,
						0xe4f4: 0x852c,
						0xe4f5: 0x851f,
						0xe4f6: 0x8515,
						0xe4f7: 0x8514,
						0xe4f8: 0x84fc,
						0xe4f9: 0x8540,
						0xe4fa: 0x8563,
						0xe4fb: 0x8558,
						0xe4fc: 0x8548,
						0xe540: 0x8541,
						0xe541: 0x8602,
						0xe542: 0x854b,
						0xe543: 0x8555,
						0xe544: 0x8580,
						0xe545: 0x85a4,
						0xe546: 0x8588,
						0xe547: 0x8591,
						0xe548: 0x858a,
						0xe549: 0x85a8,
						0xe54a: 0x856d,
						0xe54b: 0x8594,
						0xe54c: 0x859b,
						0xe54d: 0x85ea,
						0xe54e: 0x8587,
						0xe54f: 0x859c,
						0xe550: 0x8577,
						0xe551: 0x857e,
						0xe552: 0x8590,
						0xe553: 0x85c9,
						0xe554: 0x85ba,
						0xe555: 0x85cf,
						0xe556: 0x85b9,
						0xe557: 0x85d0,
						0xe558: 0x85d5,
						0xe559: 0x85dd,
						0xe55a: 0x85e5,
						0xe55b: 0x85dc,
						0xe55c: 0x85f9,
						0xe55d: 0x860a,
						0xe55e: 0x8613,
						0xe55f: 0x860b,
						0xe560: 0x85fe,
						0xe561: 0x85fa,
						0xe562: 0x8606,
						0xe563: 0x8622,
						0xe564: 0x861a,
						0xe565: 0x8630,
						0xe566: 0x863f,
						0xe567: 0x864d,
						0xe568: 0x4e55,
						0xe569: 0x8654,
						0xe56a: 0x865f,
						0xe56b: 0x8667,
						0xe56c: 0x8671,
						0xe56d: 0x8693,
						0xe56e: 0x86a3,
						0xe56f: 0x86a9,
						0xe570: 0x86aa,
						0xe571: 0x868b,
						0xe572: 0x868c,
						0xe573: 0x86b6,
						0xe574: 0x86af,
						0xe575: 0x86c4,
						0xe576: 0x86c6,
						0xe577: 0x86b0,
						0xe578: 0x86c9,
						0xe579: 0x8823,
						0xe57a: 0x86ab,
						0xe57b: 0x86d4,
						0xe57c: 0x86de,
						0xe57d: 0x86e9,
						0xe57e: 0x86ec,
						0xe580: 0x86df,
						0xe581: 0x86db,
						0xe582: 0x86ef,
						0xe583: 0x8712,
						0xe584: 0x8706,
						0xe585: 0x8708,
						0xe586: 0x8700,
						0xe587: 0x8703,
						0xe588: 0x86fb,
						0xe589: 0x8711,
						0xe58a: 0x8709,
						0xe58b: 0x870d,
						0xe58c: 0x86f9,
						0xe58d: 0x870a,
						0xe58e: 0x8734,
						0xe58f: 0x873f,
						0xe590: 0x8737,
						0xe591: 0x873b,
						0xe592: 0x8725,
						0xe593: 0x8729,
						0xe594: 0x871a,
						0xe595: 0x8760,
						0xe596: 0x875f,
						0xe597: 0x8778,
						0xe598: 0x874c,
						0xe599: 0x874e,
						0xe59a: 0x8774,
						0xe59b: 0x8757,
						0xe59c: 0x8768,
						0xe59d: 0x876e,
						0xe59e: 0x8759,
						0xe59f: 0x8753,
						0xe5a0: 0x8763,
						0xe5a1: 0x876a,
						0xe5a2: 0x8805,
						0xe5a3: 0x87a2,
						0xe5a4: 0x879f,
						0xe5a5: 0x8782,
						0xe5a6: 0x87af,
						0xe5a7: 0x87cb,
						0xe5a8: 0x87bd,
						0xe5a9: 0x87c0,
						0xe5aa: 0x87d0,
						0xe5ab: 0x96d6,
						0xe5ac: 0x87ab,
						0xe5ad: 0x87c4,
						0xe5ae: 0x87b3,
						0xe5af: 0x87c7,
						0xe5b0: 0x87c6,
						0xe5b1: 0x87bb,
						0xe5b2: 0x87ef,
						0xe5b3: 0x87f2,
						0xe5b4: 0x87e0,
						0xe5b5: 0x880f,
						0xe5b6: 0x880d,
						0xe5b7: 0x87fe,
						0xe5b8: 0x87f6,
						0xe5b9: 0x87f7,
						0xe5ba: 0x880e,
						0xe5bb: 0x87d2,
						0xe5bc: 0x8811,
						0xe5bd: 0x8816,
						0xe5be: 0x8815,
						0xe5bf: 0x8822,
						0xe5c0: 0x8821,
						0xe5c1: 0x8831,
						0xe5c2: 0x8836,
						0xe5c3: 0x8839,
						0xe5c4: 0x8827,
						0xe5c5: 0x883b,
						0xe5c6: 0x8844,
						0xe5c7: 0x8842,
						0xe5c8: 0x8852,
						0xe5c9: 0x8859,
						0xe5ca: 0x885e,
						0xe5cb: 0x8862,
						0xe5cc: 0x886b,
						0xe5cd: 0x8881,
						0xe5ce: 0x887e,
						0xe5cf: 0x889e,
						0xe5d0: 0x8875,
						0xe5d1: 0x887d,
						0xe5d2: 0x88b5,
						0xe5d3: 0x8872,
						0xe5d4: 0x8882,
						0xe5d5: 0x8897,
						0xe5d6: 0x8892,
						0xe5d7: 0x88ae,
						0xe5d8: 0x8899,
						0xe5d9: 0x88a2,
						0xe5da: 0x888d,
						0xe5db: 0x88a4,
						0xe5dc: 0x88b0,
						0xe5dd: 0x88bf,
						0xe5de: 0x88b1,
						0xe5df: 0x88c3,
						0xe5e0: 0x88c4,
						0xe5e1: 0x88d4,
						0xe5e2: 0x88d8,
						0xe5e3: 0x88d9,
						0xe5e4: 0x88dd,
						0xe5e5: 0x88f9,
						0xe5e6: 0x8902,
						0xe5e7: 0x88fc,
						0xe5e8: 0x88f4,
						0xe5e9: 0x88e8,
						0xe5ea: 0x88f2,
						0xe5eb: 0x8904,
						0xe5ec: 0x890c,
						0xe5ed: 0x890a,
						0xe5ee: 0x8913,
						0xe5ef: 0x8943,
						0xe5f0: 0x891e,
						0xe5f1: 0x8925,
						0xe5f2: 0x892a,
						0xe5f3: 0x892b,
						0xe5f4: 0x8941,
						0xe5f5: 0x8944,
						0xe5f6: 0x893b,
						0xe5f7: 0x8936,
						0xe5f8: 0x8938,
						0xe5f9: 0x894c,
						0xe5fa: 0x891d,
						0xe5fb: 0x8960,
						0xe5fc: 0x895e,
						0xe640: 0x8966,
						0xe641: 0x8964,
						0xe642: 0x896d,
						0xe643: 0x896a,
						0xe644: 0x896f,
						0xe645: 0x8974,
						0xe646: 0x8977,
						0xe647: 0x897e,
						0xe648: 0x8983,
						0xe649: 0x8988,
						0xe64a: 0x898a,
						0xe64b: 0x8993,
						0xe64c: 0x8998,
						0xe64d: 0x89a1,
						0xe64e: 0x89a9,
						0xe64f: 0x89a6,
						0xe650: 0x89ac,
						0xe651: 0x89af,
						0xe652: 0x89b2,
						0xe653: 0x89ba,
						0xe654: 0x89bd,
						0xe655: 0x89bf,
						0xe656: 0x89c0,
						0xe657: 0x89da,
						0xe658: 0x89dc,
						0xe659: 0x89dd,
						0xe65a: 0x89e7,
						0xe65b: 0x89f4,
						0xe65c: 0x89f8,
						0xe65d: 0x8a03,
						0xe65e: 0x8a16,
						0xe65f: 0x8a10,
						0xe660: 0x8a0c,
						0xe661: 0x8a1b,
						0xe662: 0x8a1d,
						0xe663: 0x8a25,
						0xe664: 0x8a36,
						0xe665: 0x8a41,
						0xe666: 0x8a5b,
						0xe667: 0x8a52,
						0xe668: 0x8a46,
						0xe669: 0x8a48,
						0xe66a: 0x8a7c,
						0xe66b: 0x8a6d,
						0xe66c: 0x8a6c,
						0xe66d: 0x8a62,
						0xe66e: 0x8a85,
						0xe66f: 0x8a82,
						0xe670: 0x8a84,
						0xe671: 0x8aa8,
						0xe672: 0x8aa1,
						0xe673: 0x8a91,
						0xe674: 0x8aa5,
						0xe675: 0x8aa6,
						0xe676: 0x8a9a,
						0xe677: 0x8aa3,
						0xe678: 0x8ac4,
						0xe679: 0x8acd,
						0xe67a: 0x8ac2,
						0xe67b: 0x8ada,
						0xe67c: 0x8aeb,
						0xe67d: 0x8af3,
						0xe67e: 0x8ae7,
						0xe680: 0x8ae4,
						0xe681: 0x8af1,
						0xe682: 0x8b14,
						0xe683: 0x8ae0,
						0xe684: 0x8ae2,
						0xe685: 0x8af7,
						0xe686: 0x8ade,
						0xe687: 0x8adb,
						0xe688: 0x8b0c,
						0xe689: 0x8b07,
						0xe68a: 0x8b1a,
						0xe68b: 0x8ae1,
						0xe68c: 0x8b16,
						0xe68d: 0x8b10,
						0xe68e: 0x8b17,
						0xe68f: 0x8b20,
						0xe690: 0x8b33,
						0xe691: 0x97ab,
						0xe692: 0x8b26,
						0xe693: 0x8b2b,
						0xe694: 0x8b3e,
						0xe695: 0x8b28,
						0xe696: 0x8b41,
						0xe697: 0x8b4c,
						0xe698: 0x8b4f,
						0xe699: 0x8b4e,
						0xe69a: 0x8b49,
						0xe69b: 0x8b56,
						0xe69c: 0x8b5b,
						0xe69d: 0x8b5a,
						0xe69e: 0x8b6b,
						0xe69f: 0x8b5f,
						0xe6a0: 0x8b6c,
						0xe6a1: 0x8b6f,
						0xe6a2: 0x8b74,
						0xe6a3: 0x8b7d,
						0xe6a4: 0x8b80,
						0xe6a5: 0x8b8c,
						0xe6a6: 0x8b8e,
						0xe6a7: 0x8b92,
						0xe6a8: 0x8b93,
						0xe6a9: 0x8b96,
						0xe6aa: 0x8b99,
						0xe6ab: 0x8b9a,
						0xe6ac: 0x8c3a,
						0xe6ad: 0x8c41,
						0xe6ae: 0x8c3f,
						0xe6af: 0x8c48,
						0xe6b0: 0x8c4c,
						0xe6b1: 0x8c4e,
						0xe6b2: 0x8c50,
						0xe6b3: 0x8c55,
						0xe6b4: 0x8c62,
						0xe6b5: 0x8c6c,
						0xe6b6: 0x8c78,
						0xe6b7: 0x8c7a,
						0xe6b8: 0x8c82,
						0xe6b9: 0x8c89,
						0xe6ba: 0x8c85,
						0xe6bb: 0x8c8a,
						0xe6bc: 0x8c8d,
						0xe6bd: 0x8c8e,
						0xe6be: 0x8c94,
						0xe6bf: 0x8c7c,
						0xe6c0: 0x8c98,
						0xe6c1: 0x621d,
						0xe6c2: 0x8cad,
						0xe6c3: 0x8caa,
						0xe6c4: 0x8cbd,
						0xe6c5: 0x8cb2,
						0xe6c6: 0x8cb3,
						0xe6c7: 0x8cae,
						0xe6c8: 0x8cb6,
						0xe6c9: 0x8cc8,
						0xe6ca: 0x8cc1,
						0xe6cb: 0x8ce4,
						0xe6cc: 0x8ce3,
						0xe6cd: 0x8cda,
						0xe6ce: 0x8cfd,
						0xe6cf: 0x8cfa,
						0xe6d0: 0x8cfb,
						0xe6d1: 0x8d04,
						0xe6d2: 0x8d05,
						0xe6d3: 0x8d0a,
						0xe6d4: 0x8d07,
						0xe6d5: 0x8d0f,
						0xe6d6: 0x8d0d,
						0xe6d7: 0x8d10,
						0xe6d8: 0x9f4e,
						0xe6d9: 0x8d13,
						0xe6da: 0x8ccd,
						0xe6db: 0x8d14,
						0xe6dc: 0x8d16,
						0xe6dd: 0x8d67,
						0xe6de: 0x8d6d,
						0xe6df: 0x8d71,
						0xe6e0: 0x8d73,
						0xe6e1: 0x8d81,
						0xe6e2: 0x8d99,
						0xe6e3: 0x8dc2,
						0xe6e4: 0x8dbe,
						0xe6e5: 0x8dba,
						0xe6e6: 0x8dcf,
						0xe6e7: 0x8dda,
						0xe6e8: 0x8dd6,
						0xe6e9: 0x8dcc,
						0xe6ea: 0x8ddb,
						0xe6eb: 0x8dcb,
						0xe6ec: 0x8dea,
						0xe6ed: 0x8deb,
						0xe6ee: 0x8ddf,
						0xe6ef: 0x8de3,
						0xe6f0: 0x8dfc,
						0xe6f1: 0x8e08,
						0xe6f2: 0x8e09,
						0xe6f3: 0x8dff,
						0xe6f4: 0x8e1d,
						0xe6f5: 0x8e1e,
						0xe6f6: 0x8e10,
						0xe6f7: 0x8e1f,
						0xe6f8: 0x8e42,
						0xe6f9: 0x8e35,
						0xe6fa: 0x8e30,
						0xe6fb: 0x8e34,
						0xe6fc: 0x8e4a,
						0xe740: 0x8e47,
						0xe741: 0x8e49,
						0xe742: 0x8e4c,
						0xe743: 0x8e50,
						0xe744: 0x8e48,
						0xe745: 0x8e59,
						0xe746: 0x8e64,
						0xe747: 0x8e60,
						0xe748: 0x8e2a,
						0xe749: 0x8e63,
						0xe74a: 0x8e55,
						0xe74b: 0x8e76,
						0xe74c: 0x8e72,
						0xe74d: 0x8e7c,
						0xe74e: 0x8e81,
						0xe74f: 0x8e87,
						0xe750: 0x8e85,
						0xe751: 0x8e84,
						0xe752: 0x8e8b,
						0xe753: 0x8e8a,
						0xe754: 0x8e93,
						0xe755: 0x8e91,
						0xe756: 0x8e94,
						0xe757: 0x8e99,
						0xe758: 0x8eaa,
						0xe759: 0x8ea1,
						0xe75a: 0x8eac,
						0xe75b: 0x8eb0,
						0xe75c: 0x8ec6,
						0xe75d: 0x8eb1,
						0xe75e: 0x8ebe,
						0xe75f: 0x8ec5,
						0xe760: 0x8ec8,
						0xe761: 0x8ecb,
						0xe762: 0x8edb,
						0xe763: 0x8ee3,
						0xe764: 0x8efc,
						0xe765: 0x8efb,
						0xe766: 0x8eeb,
						0xe767: 0x8efe,
						0xe768: 0x8f0a,
						0xe769: 0x8f05,
						0xe76a: 0x8f15,
						0xe76b: 0x8f12,
						0xe76c: 0x8f19,
						0xe76d: 0x8f13,
						0xe76e: 0x8f1c,
						0xe76f: 0x8f1f,
						0xe770: 0x8f1b,
						0xe771: 0x8f0c,
						0xe772: 0x8f26,
						0xe773: 0x8f33,
						0xe774: 0x8f3b,
						0xe775: 0x8f39,
						0xe776: 0x8f45,
						0xe777: 0x8f42,
						0xe778: 0x8f3e,
						0xe779: 0x8f4c,
						0xe77a: 0x8f49,
						0xe77b: 0x8f46,
						0xe77c: 0x8f4e,
						0xe77d: 0x8f57,
						0xe77e: 0x8f5c,
						0xe780: 0x8f62,
						0xe781: 0x8f63,
						0xe782: 0x8f64,
						0xe783: 0x8f9c,
						0xe784: 0x8f9f,
						0xe785: 0x8fa3,
						0xe786: 0x8fad,
						0xe787: 0x8faf,
						0xe788: 0x8fb7,
						0xe789: 0x8fda,
						0xe78a: 0x8fe5,
						0xe78b: 0x8fe2,
						0xe78c: 0x8fea,
						0xe78d: 0x8fef,
						0xe78e: 0x9087,
						0xe78f: 0x8ff4,
						0xe790: 0x9005,
						0xe791: 0x8ff9,
						0xe792: 0x8ffa,
						0xe793: 0x9011,
						0xe794: 0x9015,
						0xe795: 0x9021,
						0xe796: 0x900d,
						0xe797: 0x901e,
						0xe798: 0x9016,
						0xe799: 0x900b,
						0xe79a: 0x9027,
						0xe79b: 0x9036,
						0xe79c: 0x9035,
						0xe79d: 0x9039,
						0xe79e: 0x8ff8,
						0xe79f: 0x904f,
						0xe7a0: 0x9050,
						0xe7a1: 0x9051,
						0xe7a2: 0x9052,
						0xe7a3: 0x900e,
						0xe7a4: 0x9049,
						0xe7a5: 0x903e,
						0xe7a6: 0x9056,
						0xe7a7: 0x9058,
						0xe7a8: 0x905e,
						0xe7a9: 0x9068,
						0xe7aa: 0x906f,
						0xe7ab: 0x9076,
						0xe7ac: 0x96a8,
						0xe7ad: 0x9072,
						0xe7ae: 0x9082,
						0xe7af: 0x907d,
						0xe7b0: 0x9081,
						0xe7b1: 0x9080,
						0xe7b2: 0x908a,
						0xe7b3: 0x9089,
						0xe7b4: 0x908f,
						0xe7b5: 0x90a8,
						0xe7b6: 0x90af,
						0xe7b7: 0x90b1,
						0xe7b8: 0x90b5,
						0xe7b9: 0x90e2,
						0xe7ba: 0x90e4,
						0xe7bb: 0x6248,
						0xe7bc: 0x90db,
						0xe7bd: 0x9102,
						0xe7be: 0x9112,
						0xe7bf: 0x9119,
						0xe7c0: 0x9132,
						0xe7c1: 0x9130,
						0xe7c2: 0x914a,
						0xe7c3: 0x9156,
						0xe7c4: 0x9158,
						0xe7c5: 0x9163,
						0xe7c6: 0x9165,
						0xe7c7: 0x9169,
						0xe7c8: 0x9173,
						0xe7c9: 0x9172,
						0xe7ca: 0x918b,
						0xe7cb: 0x9189,
						0xe7cc: 0x9182,
						0xe7cd: 0x91a2,
						0xe7ce: 0x91ab,
						0xe7cf: 0x91af,
						0xe7d0: 0x91aa,
						0xe7d1: 0x91b5,
						0xe7d2: 0x91b4,
						0xe7d3: 0x91ba,
						0xe7d4: 0x91c0,
						0xe7d5: 0x91c1,
						0xe7d6: 0x91c9,
						0xe7d7: 0x91cb,
						0xe7d8: 0x91d0,
						0xe7d9: 0x91d6,
						0xe7da: 0x91df,
						0xe7db: 0x91e1,
						0xe7dc: 0x91db,
						0xe7dd: 0x91fc,
						0xe7de: 0x91f5,
						0xe7df: 0x91f6,
						0xe7e0: 0x921e,
						0xe7e1: 0x91ff,
						0xe7e2: 0x9214,
						0xe7e3: 0x922c,
						0xe7e4: 0x9215,
						0xe7e5: 0x9211,
						0xe7e6: 0x925e,
						0xe7e7: 0x9257,
						0xe7e8: 0x9245,
						0xe7e9: 0x9249,
						0xe7ea: 0x9264,
						0xe7eb: 0x9248,
						0xe7ec: 0x9295,
						0xe7ed: 0x923f,
						0xe7ee: 0x924b,
						0xe7ef: 0x9250,
						0xe7f0: 0x929c,
						0xe7f1: 0x9296,
						0xe7f2: 0x9293,
						0xe7f3: 0x929b,
						0xe7f4: 0x925a,
						0xe7f5: 0x92cf,
						0xe7f6: 0x92b9,
						0xe7f7: 0x92b7,
						0xe7f8: 0x92e9,
						0xe7f9: 0x930f,
						0xe7fa: 0x92fa,
						0xe7fb: 0x9344,
						0xe7fc: 0x932e,
						0xe840: 0x9319,
						0xe841: 0x9322,
						0xe842: 0x931a,
						0xe843: 0x9323,
						0xe844: 0x933a,
						0xe845: 0x9335,
						0xe846: 0x933b,
						0xe847: 0x935c,
						0xe848: 0x9360,
						0xe849: 0x937c,
						0xe84a: 0x936e,
						0xe84b: 0x9356,
						0xe84c: 0x93b0,
						0xe84d: 0x93ac,
						0xe84e: 0x93ad,
						0xe84f: 0x9394,
						0xe850: 0x93b9,
						0xe851: 0x93d6,
						0xe852: 0x93d7,
						0xe853: 0x93e8,
						0xe854: 0x93e5,
						0xe855: 0x93d8,
						0xe856: 0x93c3,
						0xe857: 0x93dd,
						0xe858: 0x93d0,
						0xe859: 0x93c8,
						0xe85a: 0x93e4,
						0xe85b: 0x941a,
						0xe85c: 0x9414,
						0xe85d: 0x9413,
						0xe85e: 0x9403,
						0xe85f: 0x9407,
						0xe860: 0x9410,
						0xe861: 0x9436,
						0xe862: 0x942b,
						0xe863: 0x9435,
						0xe864: 0x9421,
						0xe865: 0x943a,
						0xe866: 0x9441,
						0xe867: 0x9452,
						0xe868: 0x9444,
						0xe869: 0x945b,
						0xe86a: 0x9460,
						0xe86b: 0x9462,
						0xe86c: 0x945e,
						0xe86d: 0x946a,
						0xe86e: 0x9229,
						0xe86f: 0x9470,
						0xe870: 0x9475,
						0xe871: 0x9477,
						0xe872: 0x947d,
						0xe873: 0x945a,
						0xe874: 0x947c,
						0xe875: 0x947e,
						0xe876: 0x9481,
						0xe877: 0x947f,
						0xe878: 0x9582,
						0xe879: 0x9587,
						0xe87a: 0x958a,
						0xe87b: 0x9594,
						0xe87c: 0x9596,
						0xe87d: 0x9598,
						0xe87e: 0x9599,
						0xe880: 0x95a0,
						0xe881: 0x95a8,
						0xe882: 0x95a7,
						0xe883: 0x95ad,
						0xe884: 0x95bc,
						0xe885: 0x95bb,
						0xe886: 0x95b9,
						0xe887: 0x95be,
						0xe888: 0x95ca,
						0xe889: 0x6ff6,
						0xe88a: 0x95c3,
						0xe88b: 0x95cd,
						0xe88c: 0x95cc,
						0xe88d: 0x95d5,
						0xe88e: 0x95d4,
						0xe88f: 0x95d6,
						0xe890: 0x95dc,
						0xe891: 0x95e1,
						0xe892: 0x95e5,
						0xe893: 0x95e2,
						0xe894: 0x9621,
						0xe895: 0x9628,
						0xe896: 0x962e,
						0xe897: 0x962f,
						0xe898: 0x9642,
						0xe899: 0x964c,
						0xe89a: 0x964f,
						0xe89b: 0x964b,
						0xe89c: 0x9677,
						0xe89d: 0x965c,
						0xe89e: 0x965e,
						0xe89f: 0x965d,
						0xe8a0: 0x965f,
						0xe8a1: 0x9666,
						0xe8a2: 0x9672,
						0xe8a3: 0x966c,
						0xe8a4: 0x968d,
						0xe8a5: 0x9698,
						0xe8a6: 0x9695,
						0xe8a7: 0x9697,
						0xe8a8: 0x96aa,
						0xe8a9: 0x96a7,
						0xe8aa: 0x96b1,
						0xe8ab: 0x96b2,
						0xe8ac: 0x96b0,
						0xe8ad: 0x96b4,
						0xe8ae: 0x96b6,
						0xe8af: 0x96b8,
						0xe8b0: 0x96b9,
						0xe8b1: 0x96ce,
						0xe8b2: 0x96cb,
						0xe8b3: 0x96c9,
						0xe8b4: 0x96cd,
						0xe8b5: 0x894d,
						0xe8b6: 0x96dc,
						0xe8b7: 0x970d,
						0xe8b8: 0x96d5,
						0xe8b9: 0x96f9,
						0xe8ba: 0x9704,
						0xe8bb: 0x9706,
						0xe8bc: 0x9708,
						0xe8bd: 0x9713,
						0xe8be: 0x970e,
						0xe8bf: 0x9711,
						0xe8c0: 0x970f,
						0xe8c1: 0x9716,
						0xe8c2: 0x9719,
						0xe8c3: 0x9724,
						0xe8c4: 0x972a,
						0xe8c5: 0x9730,
						0xe8c6: 0x9739,
						0xe8c7: 0x973d,
						0xe8c8: 0x973e,
						0xe8c9: 0x9744,
						0xe8ca: 0x9746,
						0xe8cb: 0x9748,
						0xe8cc: 0x9742,
						0xe8cd: 0x9749,
						0xe8ce: 0x975c,
						0xe8cf: 0x9760,
						0xe8d0: 0x9764,
						0xe8d1: 0x9766,
						0xe8d2: 0x9768,
						0xe8d3: 0x52d2,
						0xe8d4: 0x976b,
						0xe8d5: 0x9771,
						0xe8d6: 0x9779,
						0xe8d7: 0x9785,
						0xe8d8: 0x977c,
						0xe8d9: 0x9781,
						0xe8da: 0x977a,
						0xe8db: 0x9786,
						0xe8dc: 0x978b,
						0xe8dd: 0x978f,
						0xe8de: 0x9790,
						0xe8df: 0x979c,
						0xe8e0: 0x97a8,
						0xe8e1: 0x97a6,
						0xe8e2: 0x97a3,
						0xe8e3: 0x97b3,
						0xe8e4: 0x97b4,
						0xe8e5: 0x97c3,
						0xe8e6: 0x97c6,
						0xe8e7: 0x97c8,
						0xe8e8: 0x97cb,
						0xe8e9: 0x97dc,
						0xe8ea: 0x97ed,
						0xe8eb: 0x9f4f,
						0xe8ec: 0x97f2,
						0xe8ed: 0x7adf,
						0xe8ee: 0x97f6,
						0xe8ef: 0x97f5,
						0xe8f0: 0x980f,
						0xe8f1: 0x980c,
						0xe8f2: 0x9838,
						0xe8f3: 0x9824,
						0xe8f4: 0x9821,
						0xe8f5: 0x9837,
						0xe8f6: 0x983d,
						0xe8f7: 0x9846,
						0xe8f8: 0x984f,
						0xe8f9: 0x984b,
						0xe8fa: 0x986b,
						0xe8fb: 0x986f,
						0xe8fc: 0x9870,
						0xe940: 0x9871,
						0xe941: 0x9874,
						0xe942: 0x9873,
						0xe943: 0x98aa,
						0xe944: 0x98af,
						0xe945: 0x98b1,
						0xe946: 0x98b6,
						0xe947: 0x98c4,
						0xe948: 0x98c3,
						0xe949: 0x98c6,
						0xe94a: 0x98e9,
						0xe94b: 0x98eb,
						0xe94c: 0x9903,
						0xe94d: 0x9909,
						0xe94e: 0x9912,
						0xe94f: 0x9914,
						0xe950: 0x9918,
						0xe951: 0x9921,
						0xe952: 0x991d,
						0xe953: 0x991e,
						0xe954: 0x9924,
						0xe955: 0x9920,
						0xe956: 0x992c,
						0xe957: 0x992e,
						0xe958: 0x993d,
						0xe959: 0x993e,
						0xe95a: 0x9942,
						0xe95b: 0x9949,
						0xe95c: 0x9945,
						0xe95d: 0x9950,
						0xe95e: 0x994b,
						0xe95f: 0x9951,
						0xe960: 0x9952,
						0xe961: 0x994c,
						0xe962: 0x9955,
						0xe963: 0x9997,
						0xe964: 0x9998,
						0xe965: 0x99a5,
						0xe966: 0x99ad,
						0xe967: 0x99ae,
						0xe968: 0x99bc,
						0xe969: 0x99df,
						0xe96a: 0x99db,
						0xe96b: 0x99dd,
						0xe96c: 0x99d8,
						0xe96d: 0x99d1,
						0xe96e: 0x99ed,
						0xe96f: 0x99ee,
						0xe970: 0x99f1,
						0xe971: 0x99f2,
						0xe972: 0x99fb,
						0xe973: 0x99f8,
						0xe974: 0x9a01,
						0xe975: 0x9a0f,
						0xe976: 0x9a05,
						0xe977: 0x99e2,
						0xe978: 0x9a19,
						0xe979: 0x9a2b,
						0xe97a: 0x9a37,
						0xe97b: 0x9a45,
						0xe97c: 0x9a42,
						0xe97d: 0x9a40,
						0xe97e: 0x9a43,
						0xe980: 0x9a3e,
						0xe981: 0x9a55,
						0xe982: 0x9a4d,
						0xe983: 0x9a5b,
						0xe984: 0x9a57,
						0xe985: 0x9a5f,
						0xe986: 0x9a62,
						0xe987: 0x9a65,
						0xe988: 0x9a64,
						0xe989: 0x9a69,
						0xe98a: 0x9a6b,
						0xe98b: 0x9a6a,
						0xe98c: 0x9aad,
						0xe98d: 0x9ab0,
						0xe98e: 0x9abc,
						0xe98f: 0x9ac0,
						0xe990: 0x9acf,
						0xe991: 0x9ad1,
						0xe992: 0x9ad3,
						0xe993: 0x9ad4,
						0xe994: 0x9ade,
						0xe995: 0x9adf,
						0xe996: 0x9ae2,
						0xe997: 0x9ae3,
						0xe998: 0x9ae6,
						0xe999: 0x9aef,
						0xe99a: 0x9aeb,
						0xe99b: 0x9aee,
						0xe99c: 0x9af4,
						0xe99d: 0x9af1,
						0xe99e: 0x9af7,
						0xe99f: 0x9afb,
						0xe9a0: 0x9b06,
						0xe9a1: 0x9b18,
						0xe9a2: 0x9b1a,
						0xe9a3: 0x9b1f,
						0xe9a4: 0x9b22,
						0xe9a5: 0x9b23,
						0xe9a6: 0x9b25,
						0xe9a7: 0x9b27,
						0xe9a8: 0x9b28,
						0xe9a9: 0x9b29,
						0xe9aa: 0x9b2a,
						0xe9ab: 0x9b2e,
						0xe9ac: 0x9b2f,
						0xe9ad: 0x9b32,
						0xe9ae: 0x9b44,
						0xe9af: 0x9b43,
						0xe9b0: 0x9b4f,
						0xe9b1: 0x9b4d,
						0xe9b2: 0x9b4e,
						0xe9b3: 0x9b51,
						0xe9b4: 0x9b58,
						0xe9b5: 0x9b74,
						0xe9b6: 0x9b93,
						0xe9b7: 0x9b83,
						0xe9b8: 0x9b91,
						0xe9b9: 0x9b96,
						0xe9ba: 0x9b97,
						0xe9bb: 0x9b9f,
						0xe9bc: 0x9ba0,
						0xe9bd: 0x9ba8,
						0xe9be: 0x9bb4,
						0xe9bf: 0x9bc0,
						0xe9c0: 0x9bca,
						0xe9c1: 0x9bb9,
						0xe9c2: 0x9bc6,
						0xe9c3: 0x9bcf,
						0xe9c4: 0x9bd1,
						0xe9c5: 0x9bd2,
						0xe9c6: 0x9be3,
						0xe9c7: 0x9be2,
						0xe9c8: 0x9be4,
						0xe9c9: 0x9bd4,
						0xe9ca: 0x9be1,
						0xe9cb: 0x9c3a,
						0xe9cc: 0x9bf2,
						0xe9cd: 0x9bf1,
						0xe9ce: 0x9bf0,
						0xe9cf: 0x9c15,
						0xe9d0: 0x9c14,
						0xe9d1: 0x9c09,
						0xe9d2: 0x9c13,
						0xe9d3: 0x9c0c,
						0xe9d4: 0x9c06,
						0xe9d5: 0x9c08,
						0xe9d6: 0x9c12,
						0xe9d7: 0x9c0a,
						0xe9d8: 0x9c04,
						0xe9d9: 0x9c2e,
						0xe9da: 0x9c1b,
						0xe9db: 0x9c25,
						0xe9dc: 0x9c24,
						0xe9dd: 0x9c21,
						0xe9de: 0x9c30,
						0xe9df: 0x9c47,
						0xe9e0: 0x9c32,
						0xe9e1: 0x9c46,
						0xe9e2: 0x9c3e,
						0xe9e3: 0x9c5a,
						0xe9e4: 0x9c60,
						0xe9e5: 0x9c67,
						0xe9e6: 0x9c76,
						0xe9e7: 0x9c78,
						0xe9e8: 0x9ce7,
						0xe9e9: 0x9cec,
						0xe9ea: 0x9cf0,
						0xe9eb: 0x9d09,
						0xe9ec: 0x9d08,
						0xe9ed: 0x9ceb,
						0xe9ee: 0x9d03,
						0xe9ef: 0x9d06,
						0xe9f0: 0x9d2a,
						0xe9f1: 0x9d26,
						0xe9f2: 0x9daf,
						0xe9f3: 0x9d23,
						0xe9f4: 0x9d1f,
						0xe9f5: 0x9d44,
						0xe9f6: 0x9d15,
						0xe9f7: 0x9d12,
						0xe9f8: 0x9d41,
						0xe9f9: 0x9d3f,
						0xe9fa: 0x9d3e,
						0xe9fb: 0x9d46,
						0xe9fc: 0x9d48,
						0xea40: 0x9d5d,
						0xea41: 0x9d5e,
						0xea42: 0x9d64,
						0xea43: 0x9d51,
						0xea44: 0x9d50,
						0xea45: 0x9d59,
						0xea46: 0x9d72,
						0xea47: 0x9d89,
						0xea48: 0x9d87,
						0xea49: 0x9dab,
						0xea4a: 0x9d6f,
						0xea4b: 0x9d7a,
						0xea4c: 0x9d9a,
						0xea4d: 0x9da4,
						0xea4e: 0x9da9,
						0xea4f: 0x9db2,
						0xea50: 0x9dc4,
						0xea51: 0x9dc1,
						0xea52: 0x9dbb,
						0xea53: 0x9db8,
						0xea54: 0x9dba,
						0xea55: 0x9dc6,
						0xea56: 0x9dcf,
						0xea57: 0x9dc2,
						0xea58: 0x9dd9,
						0xea59: 0x9dd3,
						0xea5a: 0x9df8,
						0xea5b: 0x9de6,
						0xea5c: 0x9ded,
						0xea5d: 0x9def,
						0xea5e: 0x9dfd,
						0xea5f: 0x9e1a,
						0xea60: 0x9e1b,
						0xea61: 0x9e1e,
						0xea62: 0x9e75,
						0xea63: 0x9e79,
						0xea64: 0x9e7d,
						0xea65: 0x9e81,
						0xea66: 0x9e88,
						0xea67: 0x9e8b,
						0xea68: 0x9e8c,
						0xea69: 0x9e92,
						0xea6a: 0x9e95,
						0xea6b: 0x9e91,
						0xea6c: 0x9e9d,
						0xea6d: 0x9ea5,
						0xea6e: 0x9ea9,
						0xea6f: 0x9eb8,
						0xea70: 0x9eaa,
						0xea71: 0x9ead,
						0xea72: 0x9761,
						0xea73: 0x9ecc,
						0xea74: 0x9ece,
						0xea75: 0x9ecf,
						0xea76: 0x9ed0,
						0xea77: 0x9ed4,
						0xea78: 0x9edc,
						0xea79: 0x9ede,
						0xea7a: 0x9edd,
						0xea7b: 0x9ee0,
						0xea7c: 0x9ee5,
						0xea7d: 0x9ee8,
						0xea7e: 0x9eef,
						0xea80: 0x9ef4,
						0xea81: 0x9ef6,
						0xea82: 0x9ef7,
						0xea83: 0x9ef9,
						0xea84: 0x9efb,
						0xea85: 0x9efc,
						0xea86: 0x9efd,
						0xea87: 0x9f07,
						0xea88: 0x9f08,
						0xea89: 0x76b7,
						0xea8a: 0x9f15,
						0xea8b: 0x9f21,
						0xea8c: 0x9f2c,
						0xea8d: 0x9f3e,
						0xea8e: 0x9f4a,
						0xea8f: 0x9f52,
						0xea90: 0x9f54,
						0xea91: 0x9f63,
						0xea92: 0x9f5f,
						0xea93: 0x9f60,
						0xea94: 0x9f61,
						0xea95: 0x9f66,
						0xea96: 0x9f67,
						0xea97: 0x9f6c,
						0xea98: 0x9f6a,
						0xea99: 0x9f77,
						0xea9a: 0x9f72,
						0xea9b: 0x9f76,
						0xea9c: 0x9f95,
						0xea9d: 0x9f9c,
						0xea9e: 0x9fa0,
						0xea9f: 0x582f,
						0xeaa0: 0x69c7,
						0xeaa1: 0x9059,
						0xeaa2: 0x7464,
						0xeaa3: 0x51dc,
						0xeaa4: 0x7199
					};

					/***/
				},
				/* 9 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					var GenericGF_1 = __webpack_require__(1);
					var GenericGFPoly_1 = __webpack_require__(2);
					function runEuclideanAlgorithm(field, a, b, R) {
						var _a;
						// Assume a's degree is >= b's
						if (a.degree() < b.degree()) {
							(_a = [b, a]), (a = _a[0]), (b = _a[1]);
						}
						var rLast = a;
						var r = b;
						var tLast = field.zero;
						var t = field.one;
						// Run Euclidean algorithm until r's degree is less than R/2
						while (r.degree() >= R / 2) {
							var rLastLast = rLast;
							var tLastLast = tLast;
							rLast = r;
							tLast = t;
							// Divide rLastLast by rLast, with quotient in q and remainder in r
							if (rLast.isZero()) {
								// Euclidean algorithm already terminated?
								return null;
							}
							r = rLastLast;
							var q = field.zero;
							var denominatorLeadingTerm = rLast.getCoefficient(rLast.degree());
							var dltInverse = field.inverse(denominatorLeadingTerm);
							while (r.degree() >= rLast.degree() && !r.isZero()) {
								var degreeDiff = r.degree() - rLast.degree();
								var scale = field.multiply(r.getCoefficient(r.degree()), dltInverse);
								q = q.addOrSubtract(field.buildMonomial(degreeDiff, scale));
								r = r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff, scale));
							}
							t = q.multiplyPoly(tLast).addOrSubtract(tLastLast);
							if (r.degree() >= rLast.degree()) {
								return null;
							}
						}
						var sigmaTildeAtZero = t.getCoefficient(0);
						if (sigmaTildeAtZero === 0) {
							return null;
						}
						var inverse = field.inverse(sigmaTildeAtZero);
						return [t.multiply(inverse), r.multiply(inverse)];
					}
					function findErrorLocations(field, errorLocator) {
						// This is a direct application of Chien's search
						var numErrors = errorLocator.degree();
						if (numErrors === 1) {
							return [errorLocator.getCoefficient(1)];
						}
						var result = new Array(numErrors);
						var errorCount = 0;
						for (var i = 1; i < field.size && errorCount < numErrors; i++) {
							if (errorLocator.evaluateAt(i) === 0) {
								result[errorCount] = field.inverse(i);
								errorCount++;
							}
						}
						if (errorCount !== numErrors) {
							return null;
						}
						return result;
					}
					function findErrorMagnitudes(field, errorEvaluator, errorLocations) {
						// This is directly applying Forney's Formula
						var s = errorLocations.length;
						var result = new Array(s);
						for (var i = 0; i < s; i++) {
							var xiInverse = field.inverse(errorLocations[i]);
							var denominator = 1;
							for (var j = 0; j < s; j++) {
								if (i !== j) {
									denominator = field.multiply(
										denominator,
										GenericGF_1.addOrSubtractGF(1, field.multiply(errorLocations[j], xiInverse))
									);
								}
							}
							result[i] = field.multiply(
								errorEvaluator.evaluateAt(xiInverse),
								field.inverse(denominator)
							);
							if (field.generatorBase !== 0) {
								result[i] = field.multiply(result[i], xiInverse);
							}
						}
						return result;
					}
					function decode(bytes, twoS) {
						var outputBytes = new Uint8ClampedArray(bytes.length);
						outputBytes.set(bytes);
						var field = new GenericGF_1.default(0x011d, 256, 0); // x^8 + x^4 + x^3 + x^2 + 1
						var poly = new GenericGFPoly_1.default(field, outputBytes);
						var syndromeCoefficients = new Uint8ClampedArray(twoS);
						var error = false;
						for (var s = 0; s < twoS; s++) {
							var evaluation = poly.evaluateAt(field.exp(s + field.generatorBase));
							syndromeCoefficients[syndromeCoefficients.length - 1 - s] = evaluation;
							if (evaluation !== 0) {
								error = true;
							}
						}
						if (!error) {
							return outputBytes;
						}
						var syndrome = new GenericGFPoly_1.default(field, syndromeCoefficients);
						var sigmaOmega = runEuclideanAlgorithm(
							field,
							field.buildMonomial(twoS, 1),
							syndrome,
							twoS
						);
						if (sigmaOmega === null) {
							return null;
						}
						var errorLocations = findErrorLocations(field, sigmaOmega[0]);
						if (errorLocations == null) {
							return null;
						}
						var errorMagnitudes = findErrorMagnitudes(field, sigmaOmega[1], errorLocations);
						for (var i = 0; i < errorLocations.length; i++) {
							var position = outputBytes.length - 1 - field.log(errorLocations[i]);
							if (position < 0) {
								return null;
							}
							outputBytes[position] = GenericGF_1.addOrSubtractGF(
								outputBytes[position],
								errorMagnitudes[i]
							);
						}
						return outputBytes;
					}
					exports.decode = decode;

					/***/
				},
				/* 10 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					exports.VERSIONS = [
						{
							infoBits: null,
							versionNumber: 1,
							alignmentPatternCenters: [],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 7,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 19 }]
								},
								{
									ecCodewordsPerBlock: 10,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }]
								},
								{
									ecCodewordsPerBlock: 13,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 13 }]
								},
								{
									ecCodewordsPerBlock: 17,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 9 }]
								}
							]
						},
						{
							infoBits: null,
							versionNumber: 2,
							alignmentPatternCenters: [6, 18],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 10,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 34 }]
								},
								{
									ecCodewordsPerBlock: 16,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 28 }]
								},
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 22 }]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 16 }]
								}
							]
						},
						{
							infoBits: null,
							versionNumber: 3,
							alignmentPatternCenters: [6, 22],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 15,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 55 }]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 44 }]
								},
								{
									ecCodewordsPerBlock: 18,
									ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 17 }]
								},
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 13 }]
								}
							]
						},
						{
							infoBits: null,
							versionNumber: 4,
							alignmentPatternCenters: [6, 26],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 20,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 80 }]
								},
								{
									ecCodewordsPerBlock: 18,
									ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 32 }]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 24 }]
								},
								{
									ecCodewordsPerBlock: 16,
									ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 9 }]
								}
							]
						},
						{
							infoBits: null,
							versionNumber: 5,
							alignmentPatternCenters: [6, 30],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [{ numBlocks: 1, dataCodewordsPerBlock: 108 }]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 43 }]
								},
								{
									ecCodewordsPerBlock: 18,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 15 },
										{ numBlocks: 2, dataCodewordsPerBlock: 16 }
									]
								},
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 11 },
										{ numBlocks: 2, dataCodewordsPerBlock: 12 }
									]
								}
							]
						},
						{
							infoBits: null,
							versionNumber: 6,
							alignmentPatternCenters: [6, 34],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 18,
									ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 68 }]
								},
								{
									ecCodewordsPerBlock: 16,
									ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 27 }]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 19 }]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 15 }]
								}
							]
						},
						{
							infoBits: 0x07c94,
							versionNumber: 7,
							alignmentPatternCenters: [6, 22, 38],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 20,
									ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 78 }]
								},
								{
									ecCodewordsPerBlock: 18,
									ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 31 }]
								},
								{
									ecCodewordsPerBlock: 18,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 14 },
										{ numBlocks: 4, dataCodewordsPerBlock: 15 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 13 },
										{ numBlocks: 1, dataCodewordsPerBlock: 14 }
									]
								}
							]
						},
						{
							infoBits: 0x085bc,
							versionNumber: 8,
							alignmentPatternCenters: [6, 24, 42],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 97 }]
								},
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 38 },
										{ numBlocks: 2, dataCodewordsPerBlock: 39 }
									]
								},
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 18 },
										{ numBlocks: 2, dataCodewordsPerBlock: 19 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 14 },
										{ numBlocks: 2, dataCodewordsPerBlock: 15 }
									]
								}
							]
						},
						{
							infoBits: 0x09a99,
							versionNumber: 9,
							alignmentPatternCenters: [6, 26, 46],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [{ numBlocks: 2, dataCodewordsPerBlock: 116 }]
								},
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 36 },
										{ numBlocks: 2, dataCodewordsPerBlock: 37 }
									]
								},
								{
									ecCodewordsPerBlock: 20,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 16 },
										{ numBlocks: 4, dataCodewordsPerBlock: 17 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 12 },
										{ numBlocks: 4, dataCodewordsPerBlock: 13 }
									]
								}
							]
						},
						{
							infoBits: 0x0a4d3,
							versionNumber: 10,
							alignmentPatternCenters: [6, 28, 50],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 18,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 68 },
										{ numBlocks: 2, dataCodewordsPerBlock: 69 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 43 },
										{ numBlocks: 1, dataCodewordsPerBlock: 44 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 6, dataCodewordsPerBlock: 19 },
										{ numBlocks: 2, dataCodewordsPerBlock: 20 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 6, dataCodewordsPerBlock: 15 },
										{ numBlocks: 2, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x0bbf6,
							versionNumber: 11,
							alignmentPatternCenters: [6, 30, 54],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 20,
									ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 81 }]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 1, dataCodewordsPerBlock: 50 },
										{ numBlocks: 4, dataCodewordsPerBlock: 51 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 22 },
										{ numBlocks: 4, dataCodewordsPerBlock: 23 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 12 },
										{ numBlocks: 8, dataCodewordsPerBlock: 13 }
									]
								}
							]
						},
						{
							infoBits: 0x0c762,
							versionNumber: 12,
							alignmentPatternCenters: [6, 32, 58],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 92 },
										{ numBlocks: 2, dataCodewordsPerBlock: 93 }
									]
								},
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [
										{ numBlocks: 6, dataCodewordsPerBlock: 36 },
										{ numBlocks: 2, dataCodewordsPerBlock: 37 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 20 },
										{ numBlocks: 6, dataCodewordsPerBlock: 21 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 7, dataCodewordsPerBlock: 14 },
										{ numBlocks: 4, dataCodewordsPerBlock: 15 }
									]
								}
							]
						},
						{
							infoBits: 0x0d847,
							versionNumber: 13,
							alignmentPatternCenters: [6, 34, 62],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [{ numBlocks: 4, dataCodewordsPerBlock: 107 }]
								},
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [
										{ numBlocks: 8, dataCodewordsPerBlock: 37 },
										{ numBlocks: 1, dataCodewordsPerBlock: 38 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 8, dataCodewordsPerBlock: 20 },
										{ numBlocks: 4, dataCodewordsPerBlock: 21 }
									]
								},
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [
										{ numBlocks: 12, dataCodewordsPerBlock: 11 },
										{ numBlocks: 4, dataCodewordsPerBlock: 12 }
									]
								}
							]
						},
						{
							infoBits: 0x0e60d,
							versionNumber: 14,
							alignmentPatternCenters: [6, 26, 46, 66],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 115 },
										{ numBlocks: 1, dataCodewordsPerBlock: 116 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 40 },
										{ numBlocks: 5, dataCodewordsPerBlock: 41 }
									]
								},
								{
									ecCodewordsPerBlock: 20,
									ecBlocks: [
										{ numBlocks: 11, dataCodewordsPerBlock: 16 },
										{ numBlocks: 5, dataCodewordsPerBlock: 17 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 11, dataCodewordsPerBlock: 12 },
										{ numBlocks: 5, dataCodewordsPerBlock: 13 }
									]
								}
							]
						},
						{
							infoBits: 0x0f928,
							versionNumber: 15,
							alignmentPatternCenters: [6, 26, 48, 70],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 22,
									ecBlocks: [
										{ numBlocks: 5, dataCodewordsPerBlock: 87 },
										{ numBlocks: 1, dataCodewordsPerBlock: 88 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 5, dataCodewordsPerBlock: 41 },
										{ numBlocks: 5, dataCodewordsPerBlock: 42 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 5, dataCodewordsPerBlock: 24 },
										{ numBlocks: 7, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 11, dataCodewordsPerBlock: 12 },
										{ numBlocks: 7, dataCodewordsPerBlock: 13 }
									]
								}
							]
						},
						{
							infoBits: 0x10b78,
							versionNumber: 16,
							alignmentPatternCenters: [6, 26, 50, 74],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 5, dataCodewordsPerBlock: 98 },
										{ numBlocks: 1, dataCodewordsPerBlock: 99 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 7, dataCodewordsPerBlock: 45 },
										{ numBlocks: 3, dataCodewordsPerBlock: 46 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [
										{ numBlocks: 15, dataCodewordsPerBlock: 19 },
										{ numBlocks: 2, dataCodewordsPerBlock: 20 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 15 },
										{ numBlocks: 13, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x1145d,
							versionNumber: 17,
							alignmentPatternCenters: [6, 30, 54, 78],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 1, dataCodewordsPerBlock: 107 },
										{ numBlocks: 5, dataCodewordsPerBlock: 108 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 10, dataCodewordsPerBlock: 46 },
										{ numBlocks: 1, dataCodewordsPerBlock: 47 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 1, dataCodewordsPerBlock: 22 },
										{ numBlocks: 15, dataCodewordsPerBlock: 23 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 14 },
										{ numBlocks: 17, dataCodewordsPerBlock: 15 }
									]
								}
							]
						},
						{
							infoBits: 0x12a17,
							versionNumber: 18,
							alignmentPatternCenters: [6, 30, 56, 82],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 5, dataCodewordsPerBlock: 120 },
										{ numBlocks: 1, dataCodewordsPerBlock: 121 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 9, dataCodewordsPerBlock: 43 },
										{ numBlocks: 4, dataCodewordsPerBlock: 44 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 17, dataCodewordsPerBlock: 22 },
										{ numBlocks: 1, dataCodewordsPerBlock: 23 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 14 },
										{ numBlocks: 19, dataCodewordsPerBlock: 15 }
									]
								}
							]
						},
						{
							infoBits: 0x13532,
							versionNumber: 19,
							alignmentPatternCenters: [6, 30, 58, 86],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 113 },
										{ numBlocks: 4, dataCodewordsPerBlock: 114 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 44 },
										{ numBlocks: 11, dataCodewordsPerBlock: 45 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 17, dataCodewordsPerBlock: 21 },
										{ numBlocks: 4, dataCodewordsPerBlock: 22 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 9, dataCodewordsPerBlock: 13 },
										{ numBlocks: 16, dataCodewordsPerBlock: 14 }
									]
								}
							]
						},
						{
							infoBits: 0x149a6,
							versionNumber: 20,
							alignmentPatternCenters: [6, 34, 62, 90],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 107 },
										{ numBlocks: 5, dataCodewordsPerBlock: 108 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 41 },
										{ numBlocks: 13, dataCodewordsPerBlock: 42 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 15, dataCodewordsPerBlock: 24 },
										{ numBlocks: 5, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 15, dataCodewordsPerBlock: 15 },
										{ numBlocks: 10, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x15683,
							versionNumber: 21,
							alignmentPatternCenters: [6, 28, 50, 72, 94],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 116 },
										{ numBlocks: 4, dataCodewordsPerBlock: 117 }
									]
								},
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 42 }]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 17, dataCodewordsPerBlock: 22 },
										{ numBlocks: 6, dataCodewordsPerBlock: 23 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 19, dataCodewordsPerBlock: 16 },
										{ numBlocks: 6, dataCodewordsPerBlock: 17 }
									]
								}
							]
						},
						{
							infoBits: 0x168c9,
							versionNumber: 22,
							alignmentPatternCenters: [6, 26, 50, 74, 98],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 111 },
										{ numBlocks: 7, dataCodewordsPerBlock: 112 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 46 }]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 7, dataCodewordsPerBlock: 24 },
										{ numBlocks: 16, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 24,
									ecBlocks: [{ numBlocks: 34, dataCodewordsPerBlock: 13 }]
								}
							]
						},
						{
							infoBits: 0x177ec,
							versionNumber: 23,
							alignmentPatternCenters: [6, 30, 54, 74, 102],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 121 },
										{ numBlocks: 5, dataCodewordsPerBlock: 122 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 47 },
										{ numBlocks: 14, dataCodewordsPerBlock: 48 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 11, dataCodewordsPerBlock: 24 },
										{ numBlocks: 14, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 16, dataCodewordsPerBlock: 15 },
										{ numBlocks: 14, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x18ec4,
							versionNumber: 24,
							alignmentPatternCenters: [6, 28, 54, 80, 106],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 6, dataCodewordsPerBlock: 117 },
										{ numBlocks: 4, dataCodewordsPerBlock: 118 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 6, dataCodewordsPerBlock: 45 },
										{ numBlocks: 14, dataCodewordsPerBlock: 46 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 11, dataCodewordsPerBlock: 24 },
										{ numBlocks: 16, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 30, dataCodewordsPerBlock: 16 },
										{ numBlocks: 2, dataCodewordsPerBlock: 17 }
									]
								}
							]
						},
						{
							infoBits: 0x191e1,
							versionNumber: 25,
							alignmentPatternCenters: [6, 32, 58, 84, 110],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 26,
									ecBlocks: [
										{ numBlocks: 8, dataCodewordsPerBlock: 106 },
										{ numBlocks: 4, dataCodewordsPerBlock: 107 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 8, dataCodewordsPerBlock: 47 },
										{ numBlocks: 13, dataCodewordsPerBlock: 48 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 7, dataCodewordsPerBlock: 24 },
										{ numBlocks: 22, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 22, dataCodewordsPerBlock: 15 },
										{ numBlocks: 13, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x1afab,
							versionNumber: 26,
							alignmentPatternCenters: [6, 30, 58, 86, 114],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 10, dataCodewordsPerBlock: 114 },
										{ numBlocks: 2, dataCodewordsPerBlock: 115 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 19, dataCodewordsPerBlock: 46 },
										{ numBlocks: 4, dataCodewordsPerBlock: 47 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 28, dataCodewordsPerBlock: 22 },
										{ numBlocks: 6, dataCodewordsPerBlock: 23 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 33, dataCodewordsPerBlock: 16 },
										{ numBlocks: 4, dataCodewordsPerBlock: 17 }
									]
								}
							]
						},
						{
							infoBits: 0x1b08e,
							versionNumber: 27,
							alignmentPatternCenters: [6, 34, 62, 90, 118],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 8, dataCodewordsPerBlock: 122 },
										{ numBlocks: 4, dataCodewordsPerBlock: 123 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 22, dataCodewordsPerBlock: 45 },
										{ numBlocks: 3, dataCodewordsPerBlock: 46 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 8, dataCodewordsPerBlock: 23 },
										{ numBlocks: 26, dataCodewordsPerBlock: 24 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 12, dataCodewordsPerBlock: 15 },
										{ numBlocks: 28, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x1cc1a,
							versionNumber: 28,
							alignmentPatternCenters: [6, 26, 50, 74, 98, 122],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 117 },
										{ numBlocks: 10, dataCodewordsPerBlock: 118 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 3, dataCodewordsPerBlock: 45 },
										{ numBlocks: 23, dataCodewordsPerBlock: 46 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 24 },
										{ numBlocks: 31, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 11, dataCodewordsPerBlock: 15 },
										{ numBlocks: 31, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x1d33f,
							versionNumber: 29,
							alignmentPatternCenters: [6, 30, 54, 78, 102, 126],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 7, dataCodewordsPerBlock: 116 },
										{ numBlocks: 7, dataCodewordsPerBlock: 117 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 21, dataCodewordsPerBlock: 45 },
										{ numBlocks: 7, dataCodewordsPerBlock: 46 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 1, dataCodewordsPerBlock: 23 },
										{ numBlocks: 37, dataCodewordsPerBlock: 24 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 19, dataCodewordsPerBlock: 15 },
										{ numBlocks: 26, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x1ed75,
							versionNumber: 30,
							alignmentPatternCenters: [6, 26, 52, 78, 104, 130],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 5, dataCodewordsPerBlock: 115 },
										{ numBlocks: 10, dataCodewordsPerBlock: 116 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 19, dataCodewordsPerBlock: 47 },
										{ numBlocks: 10, dataCodewordsPerBlock: 48 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 15, dataCodewordsPerBlock: 24 },
										{ numBlocks: 25, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 23, dataCodewordsPerBlock: 15 },
										{ numBlocks: 25, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x1f250,
							versionNumber: 31,
							alignmentPatternCenters: [6, 30, 56, 82, 108, 134],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 13, dataCodewordsPerBlock: 115 },
										{ numBlocks: 3, dataCodewordsPerBlock: 116 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 46 },
										{ numBlocks: 29, dataCodewordsPerBlock: 47 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 42, dataCodewordsPerBlock: 24 },
										{ numBlocks: 1, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 23, dataCodewordsPerBlock: 15 },
										{ numBlocks: 28, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x209d5,
							versionNumber: 32,
							alignmentPatternCenters: [6, 34, 60, 86, 112, 138],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [{ numBlocks: 17, dataCodewordsPerBlock: 115 }]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 10, dataCodewordsPerBlock: 46 },
										{ numBlocks: 23, dataCodewordsPerBlock: 47 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 10, dataCodewordsPerBlock: 24 },
										{ numBlocks: 35, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 19, dataCodewordsPerBlock: 15 },
										{ numBlocks: 35, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x216f0,
							versionNumber: 33,
							alignmentPatternCenters: [6, 30, 58, 86, 114, 142],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 17, dataCodewordsPerBlock: 115 },
										{ numBlocks: 1, dataCodewordsPerBlock: 116 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 14, dataCodewordsPerBlock: 46 },
										{ numBlocks: 21, dataCodewordsPerBlock: 47 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 29, dataCodewordsPerBlock: 24 },
										{ numBlocks: 19, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 11, dataCodewordsPerBlock: 15 },
										{ numBlocks: 46, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x228ba,
							versionNumber: 34,
							alignmentPatternCenters: [6, 34, 62, 90, 118, 146],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 13, dataCodewordsPerBlock: 115 },
										{ numBlocks: 6, dataCodewordsPerBlock: 116 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 14, dataCodewordsPerBlock: 46 },
										{ numBlocks: 23, dataCodewordsPerBlock: 47 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 44, dataCodewordsPerBlock: 24 },
										{ numBlocks: 7, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 59, dataCodewordsPerBlock: 16 },
										{ numBlocks: 1, dataCodewordsPerBlock: 17 }
									]
								}
							]
						},
						{
							infoBits: 0x2379f,
							versionNumber: 35,
							alignmentPatternCenters: [6, 30, 54, 78, 102, 126, 150],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 12, dataCodewordsPerBlock: 121 },
										{ numBlocks: 7, dataCodewordsPerBlock: 122 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 12, dataCodewordsPerBlock: 47 },
										{ numBlocks: 26, dataCodewordsPerBlock: 48 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 39, dataCodewordsPerBlock: 24 },
										{ numBlocks: 14, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 22, dataCodewordsPerBlock: 15 },
										{ numBlocks: 41, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x24b0b,
							versionNumber: 36,
							alignmentPatternCenters: [6, 24, 50, 76, 102, 128, 154],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 6, dataCodewordsPerBlock: 121 },
										{ numBlocks: 14, dataCodewordsPerBlock: 122 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 6, dataCodewordsPerBlock: 47 },
										{ numBlocks: 34, dataCodewordsPerBlock: 48 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 46, dataCodewordsPerBlock: 24 },
										{ numBlocks: 10, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 2, dataCodewordsPerBlock: 15 },
										{ numBlocks: 64, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x2542e,
							versionNumber: 37,
							alignmentPatternCenters: [6, 28, 54, 80, 106, 132, 158],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 17, dataCodewordsPerBlock: 122 },
										{ numBlocks: 4, dataCodewordsPerBlock: 123 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 29, dataCodewordsPerBlock: 46 },
										{ numBlocks: 14, dataCodewordsPerBlock: 47 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 49, dataCodewordsPerBlock: 24 },
										{ numBlocks: 10, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 24, dataCodewordsPerBlock: 15 },
										{ numBlocks: 46, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x26a64,
							versionNumber: 38,
							alignmentPatternCenters: [6, 32, 58, 84, 110, 136, 162],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 4, dataCodewordsPerBlock: 122 },
										{ numBlocks: 18, dataCodewordsPerBlock: 123 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 13, dataCodewordsPerBlock: 46 },
										{ numBlocks: 32, dataCodewordsPerBlock: 47 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 48, dataCodewordsPerBlock: 24 },
										{ numBlocks: 14, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 42, dataCodewordsPerBlock: 15 },
										{ numBlocks: 32, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x27541,
							versionNumber: 39,
							alignmentPatternCenters: [6, 26, 54, 82, 110, 138, 166],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 20, dataCodewordsPerBlock: 117 },
										{ numBlocks: 4, dataCodewordsPerBlock: 118 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 40, dataCodewordsPerBlock: 47 },
										{ numBlocks: 7, dataCodewordsPerBlock: 48 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 43, dataCodewordsPerBlock: 24 },
										{ numBlocks: 22, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 10, dataCodewordsPerBlock: 15 },
										{ numBlocks: 67, dataCodewordsPerBlock: 16 }
									]
								}
							]
						},
						{
							infoBits: 0x28c69,
							versionNumber: 40,
							alignmentPatternCenters: [6, 30, 58, 86, 114, 142, 170],
							errorCorrectionLevels: [
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 19, dataCodewordsPerBlock: 118 },
										{ numBlocks: 6, dataCodewordsPerBlock: 119 }
									]
								},
								{
									ecCodewordsPerBlock: 28,
									ecBlocks: [
										{ numBlocks: 18, dataCodewordsPerBlock: 47 },
										{ numBlocks: 31, dataCodewordsPerBlock: 48 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 34, dataCodewordsPerBlock: 24 },
										{ numBlocks: 34, dataCodewordsPerBlock: 25 }
									]
								},
								{
									ecCodewordsPerBlock: 30,
									ecBlocks: [
										{ numBlocks: 20, dataCodewordsPerBlock: 15 },
										{ numBlocks: 61, dataCodewordsPerBlock: 16 }
									]
								}
							]
						}
					];

					/***/
				},
				/* 11 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					var BitMatrix_1 = __webpack_require__(0);
					function squareToQuadrilateral(p1, p2, p3, p4) {
						var dx3 = p1.x - p2.x + p3.x - p4.x;
						var dy3 = p1.y - p2.y + p3.y - p4.y;
						if (dx3 === 0 && dy3 === 0) {
							// Affine
							return {
								a11: p2.x - p1.x,
								a12: p2.y - p1.y,
								a13: 0,
								a21: p3.x - p2.x,
								a22: p3.y - p2.y,
								a23: 0,
								a31: p1.x,
								a32: p1.y,
								a33: 1
							};
						} else {
							var dx1 = p2.x - p3.x;
							var dx2 = p4.x - p3.x;
							var dy1 = p2.y - p3.y;
							var dy2 = p4.y - p3.y;
							var denominator = dx1 * dy2 - dx2 * dy1;
							var a13 = (dx3 * dy2 - dx2 * dy3) / denominator;
							var a23 = (dx1 * dy3 - dx3 * dy1) / denominator;
							return {
								a11: p2.x - p1.x + a13 * p2.x,
								a12: p2.y - p1.y + a13 * p2.y,
								a13: a13,
								a21: p4.x - p1.x + a23 * p4.x,
								a22: p4.y - p1.y + a23 * p4.y,
								a23: a23,
								a31: p1.x,
								a32: p1.y,
								a33: 1
							};
						}
					}
					function quadrilateralToSquare(p1, p2, p3, p4) {
						// Here, the adjoint serves as the inverse:
						var sToQ = squareToQuadrilateral(p1, p2, p3, p4);
						return {
							a11: sToQ.a22 * sToQ.a33 - sToQ.a23 * sToQ.a32,
							a12: sToQ.a13 * sToQ.a32 - sToQ.a12 * sToQ.a33,
							a13: sToQ.a12 * sToQ.a23 - sToQ.a13 * sToQ.a22,
							a21: sToQ.a23 * sToQ.a31 - sToQ.a21 * sToQ.a33,
							a22: sToQ.a11 * sToQ.a33 - sToQ.a13 * sToQ.a31,
							a23: sToQ.a13 * sToQ.a21 - sToQ.a11 * sToQ.a23,
							a31: sToQ.a21 * sToQ.a32 - sToQ.a22 * sToQ.a31,
							a32: sToQ.a12 * sToQ.a31 - sToQ.a11 * sToQ.a32,
							a33: sToQ.a11 * sToQ.a22 - sToQ.a12 * sToQ.a21
						};
					}
					function times(a, b) {
						return {
							a11: a.a11 * b.a11 + a.a21 * b.a12 + a.a31 * b.a13,
							a12: a.a12 * b.a11 + a.a22 * b.a12 + a.a32 * b.a13,
							a13: a.a13 * b.a11 + a.a23 * b.a12 + a.a33 * b.a13,
							a21: a.a11 * b.a21 + a.a21 * b.a22 + a.a31 * b.a23,
							a22: a.a12 * b.a21 + a.a22 * b.a22 + a.a32 * b.a23,
							a23: a.a13 * b.a21 + a.a23 * b.a22 + a.a33 * b.a23,
							a31: a.a11 * b.a31 + a.a21 * b.a32 + a.a31 * b.a33,
							a32: a.a12 * b.a31 + a.a22 * b.a32 + a.a32 * b.a33,
							a33: a.a13 * b.a31 + a.a23 * b.a32 + a.a33 * b.a33
						};
					}
					function extract(image, location) {
						var qToS = quadrilateralToSquare(
							{ x: 3.5, y: 3.5 },
							{ x: location.dimension - 3.5, y: 3.5 },
							{ x: location.dimension - 6.5, y: location.dimension - 6.5 },
							{ x: 3.5, y: location.dimension - 3.5 }
						);
						var sToQ = squareToQuadrilateral(
							location.topLeft,
							location.topRight,
							location.alignmentPattern,
							location.bottomLeft
						);
						var transform = times(sToQ, qToS);
						var matrix = BitMatrix_1.BitMatrix.createEmpty(location.dimension, location.dimension);
						var mappingFunction = function (x, y) {
							var denominator = transform.a13 * x + transform.a23 * y + transform.a33;
							return {
								x: (transform.a11 * x + transform.a21 * y + transform.a31) / denominator,
								y: (transform.a12 * x + transform.a22 * y + transform.a32) / denominator
							};
						};
						for (var y = 0; y < location.dimension; y++) {
							for (var x = 0; x < location.dimension; x++) {
								var xValue = x + 0.5;
								var yValue = y + 0.5;
								var sourcePixel = mappingFunction(xValue, yValue);
								matrix.set(x, y, image.get(Math.floor(sourcePixel.x), Math.floor(sourcePixel.y)));
							}
						}
						return {
							matrix: matrix,
							mappingFunction: mappingFunction
						};
					}
					exports.extract = extract;

					/***/
				},
				/* 12 */
				/***/ function (module, exports, __webpack_require__) {
					Object.defineProperty(exports, '__esModule', { value: true });
					var MAX_FINDERPATTERNS_TO_SEARCH = 4;
					var MIN_QUAD_RATIO = 0.5;
					var MAX_QUAD_RATIO = 1.5;
					var distance = function (a, b) {
						return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
					};
					function sum(values) {
						return values.reduce(function (a, b) {
							return a + b;
						});
					}
					// Takes three finder patterns and organizes them into topLeft, topRight, etc
					function reorderFinderPatterns(pattern1, pattern2, pattern3) {
						var _a, _b, _c, _d;
						// Find distances between pattern centers
						var oneTwoDistance = distance(pattern1, pattern2);
						var twoThreeDistance = distance(pattern2, pattern3);
						var oneThreeDistance = distance(pattern1, pattern3);
						var bottomLeft;
						var topLeft;
						var topRight;
						// Assume one closest to other two is B; A and C will just be guesses at first
						if (twoThreeDistance >= oneTwoDistance && twoThreeDistance >= oneThreeDistance) {
							(_a = [pattern2, pattern1, pattern3]),
								(bottomLeft = _a[0]),
								(topLeft = _a[1]),
								(topRight = _a[2]);
						} else if (oneThreeDistance >= twoThreeDistance && oneThreeDistance >= oneTwoDistance) {
							(_b = [pattern1, pattern2, pattern3]),
								(bottomLeft = _b[0]),
								(topLeft = _b[1]),
								(topRight = _b[2]);
						} else {
							(_c = [pattern1, pattern3, pattern2]),
								(bottomLeft = _c[0]),
								(topLeft = _c[1]),
								(topRight = _c[2]);
						}
						// Use cross product to figure out whether bottomLeft (A) and topRight (C) are correct or flipped in relation to topLeft (B)
						// This asks whether BC x BA has a positive z component, which is the arrangement we want. If it's negative, then
						// we've got it flipped around and should swap topRight and bottomLeft.
						if (
							(topRight.x - topLeft.x) * (bottomLeft.y - topLeft.y) -
								(topRight.y - topLeft.y) * (bottomLeft.x - topLeft.x) <
							0
						) {
							(_d = [topRight, bottomLeft]), (bottomLeft = _d[0]), (topRight = _d[1]);
						}
						return { bottomLeft: bottomLeft, topLeft: topLeft, topRight: topRight };
					}
					// Computes the dimension (number of modules on a side) of the QR Code based on the position of the finder patterns
					function computeDimension(topLeft, topRight, bottomLeft, matrix) {
						var moduleSize =
							(sum(countBlackWhiteRun(topLeft, bottomLeft, matrix, 5)) / 7 + // Divide by 7 since the ratio is 1:1:3:1:1
								sum(countBlackWhiteRun(topLeft, topRight, matrix, 5)) / 7 +
								sum(countBlackWhiteRun(bottomLeft, topLeft, matrix, 5)) / 7 +
								sum(countBlackWhiteRun(topRight, topLeft, matrix, 5)) / 7) /
							4;
						if (moduleSize < 1) {
							throw new Error('Invalid module size');
						}
						var topDimension = Math.round(distance(topLeft, topRight) / moduleSize);
						var sideDimension = Math.round(distance(topLeft, bottomLeft) / moduleSize);
						var dimension = Math.floor((topDimension + sideDimension) / 2) + 7;
						switch (dimension % 4) {
							case 0:
								dimension++;
								break;
							case 2:
								dimension--;
								break;
						}
						return { dimension: dimension, moduleSize: moduleSize };
					}
					// Takes an origin point and an end point and counts the sizes of the black white run from the origin towards the end point.
					// Returns an array of elements, representing the pixel size of the black white run.
					// Uses a variant of http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
					function countBlackWhiteRunTowardsPoint(origin, end, matrix, length) {
						var switchPoints = [{ x: Math.floor(origin.x), y: Math.floor(origin.y) }];
						var steep = Math.abs(end.y - origin.y) > Math.abs(end.x - origin.x);
						var fromX;
						var fromY;
						var toX;
						var toY;
						if (steep) {
							fromX = Math.floor(origin.y);
							fromY = Math.floor(origin.x);
							toX = Math.floor(end.y);
							toY = Math.floor(end.x);
						} else {
							fromX = Math.floor(origin.x);
							fromY = Math.floor(origin.y);
							toX = Math.floor(end.x);
							toY = Math.floor(end.y);
						}
						var dx = Math.abs(toX - fromX);
						var dy = Math.abs(toY - fromY);
						var error = Math.floor(-dx / 2);
						var xStep = fromX < toX ? 1 : -1;
						var yStep = fromY < toY ? 1 : -1;
						var currentPixel = true;
						// Loop up until x == toX, but not beyond
						for (var x = fromX, y = fromY; x !== toX + xStep; x += xStep) {
							// Does current pixel mean we have moved white to black or vice versa?
							// Scanning black in state 0,2 and white in state 1, so if we find the wrong
							// color, advance to next state or end if we are in state 2 already
							var realX = steep ? y : x;
							var realY = steep ? x : y;
							if (matrix.get(realX, realY) !== currentPixel) {
								currentPixel = !currentPixel;
								switchPoints.push({ x: realX, y: realY });
								if (switchPoints.length === length + 1) {
									break;
								}
							}
							error += dy;
							if (error > 0) {
								if (y === toY) {
									break;
								}
								y += yStep;
								error -= dx;
							}
						}
						var distances = [];
						for (var i = 0; i < length; i++) {
							if (switchPoints[i] && switchPoints[i + 1]) {
								distances.push(distance(switchPoints[i], switchPoints[i + 1]));
							} else {
								distances.push(0);
							}
						}
						return distances;
					}
					// Takes an origin point and an end point and counts the sizes of the black white run in the origin point
					// along the line that intersects with the end point. Returns an array of elements, representing the pixel sizes
					// of the black white run. Takes a length which represents the number of switches from black to white to look for.
					function countBlackWhiteRun(origin, end, matrix, length) {
						var _a;
						var rise = end.y - origin.y;
						var run = end.x - origin.x;
						var towardsEnd = countBlackWhiteRunTowardsPoint(
							origin,
							end,
							matrix,
							Math.ceil(length / 2)
						);
						var awayFromEnd = countBlackWhiteRunTowardsPoint(
							origin,
							{ x: origin.x - run, y: origin.y - rise },
							matrix,
							Math.ceil(length / 2)
						);
						var middleValue = towardsEnd.shift() + awayFromEnd.shift() - 1; // Substract one so we don't double count a pixel
						return (_a = awayFromEnd.concat(middleValue)).concat.apply(_a, towardsEnd);
					}
					// Takes in a black white run and an array of expected ratios. Returns the average size of the run as well as the "error" -
					// that is the amount the run diverges from the expected ratio
					function scoreBlackWhiteRun(sequence, ratios) {
						var averageSize = sum(sequence) / sum(ratios);
						var error = 0;
						ratios.forEach(function (ratio, i) {
							error += Math.pow(sequence[i] - ratio * averageSize, 2);
						});
						return { averageSize: averageSize, error: error };
					}
					// Takes an X,Y point and an array of sizes and scores the point against those ratios.
					// For example for a finder pattern takes the ratio list of 1:1:3:1:1 and checks horizontal, vertical and diagonal ratios
					// against that.
					function scorePattern(point, ratios, matrix) {
						try {
							var horizontalRun = countBlackWhiteRun(
								point,
								{ x: -1, y: point.y },
								matrix,
								ratios.length
							);
							var verticalRun = countBlackWhiteRun(
								point,
								{ x: point.x, y: -1 },
								matrix,
								ratios.length
							);
							var topLeftPoint = {
								x: Math.max(0, point.x - point.y) - 1,
								y: Math.max(0, point.y - point.x) - 1
							};
							var topLeftBottomRightRun = countBlackWhiteRun(
								point,
								topLeftPoint,
								matrix,
								ratios.length
							);
							var bottomLeftPoint = {
								x: Math.min(matrix.width, point.x + point.y) + 1,
								y: Math.min(matrix.height, point.y + point.x) + 1
							};
							var bottomLeftTopRightRun = countBlackWhiteRun(
								point,
								bottomLeftPoint,
								matrix,
								ratios.length
							);
							var horzError = scoreBlackWhiteRun(horizontalRun, ratios);
							var vertError = scoreBlackWhiteRun(verticalRun, ratios);
							var diagDownError = scoreBlackWhiteRun(topLeftBottomRightRun, ratios);
							var diagUpError = scoreBlackWhiteRun(bottomLeftTopRightRun, ratios);
							var ratioError = Math.sqrt(
								horzError.error * horzError.error +
									vertError.error * vertError.error +
									diagDownError.error * diagDownError.error +
									diagUpError.error * diagUpError.error
							);
							var avgSize =
								(horzError.averageSize +
									vertError.averageSize +
									diagDownError.averageSize +
									diagUpError.averageSize) /
								4;
							var sizeError =
								(Math.pow(horzError.averageSize - avgSize, 2) +
									Math.pow(vertError.averageSize - avgSize, 2) +
									Math.pow(diagDownError.averageSize - avgSize, 2) +
									Math.pow(diagUpError.averageSize - avgSize, 2)) /
								avgSize;
							return ratioError + sizeError;
						} catch (_a) {
							return Infinity;
						}
					}
					function recenterLocation(matrix, p) {
						var leftX = Math.round(p.x);
						while (matrix.get(leftX, Math.round(p.y))) {
							leftX--;
						}
						var rightX = Math.round(p.x);
						while (matrix.get(rightX, Math.round(p.y))) {
							rightX++;
						}
						var x = (leftX + rightX) / 2;
						var topY = Math.round(p.y);
						while (matrix.get(Math.round(x), topY)) {
							topY--;
						}
						var bottomY = Math.round(p.y);
						while (matrix.get(Math.round(x), bottomY)) {
							bottomY++;
						}
						var y = (topY + bottomY) / 2;
						return { x: x, y: y };
					}
					function locate(matrix) {
						var finderPatternQuads = [];
						var activeFinderPatternQuads = [];
						var alignmentPatternQuads = [];
						var activeAlignmentPatternQuads = [];
						var _loop_1 = function (y) {
							var length_1 = 0;
							var lastBit = false;
							var scans = [0, 0, 0, 0, 0];
							var _loop_2 = function (x) {
								var v = matrix.get(x, y);
								if (v === lastBit) {
									length_1++;
								} else {
									scans = [scans[1], scans[2], scans[3], scans[4], length_1];
									length_1 = 1;
									lastBit = v;
									// Do the last 5 color changes ~ match the expected ratio for a finder pattern? 1:1:3:1:1 of b:w:b:w:b
									var averageFinderPatternBlocksize = sum(scans) / 7;
									var validFinderPattern =
										Math.abs(scans[0] - averageFinderPatternBlocksize) <
											averageFinderPatternBlocksize &&
										Math.abs(scans[1] - averageFinderPatternBlocksize) <
											averageFinderPatternBlocksize &&
										Math.abs(scans[2] - 3 * averageFinderPatternBlocksize) <
											3 * averageFinderPatternBlocksize &&
										Math.abs(scans[3] - averageFinderPatternBlocksize) <
											averageFinderPatternBlocksize &&
										Math.abs(scans[4] - averageFinderPatternBlocksize) <
											averageFinderPatternBlocksize &&
										!v; // And make sure the current pixel is white since finder patterns are bordered in white
									// Do the last 3 color changes ~ match the expected ratio for an alignment pattern? 1:1:1 of w:b:w
									var averageAlignmentPatternBlocksize = sum(scans.slice(-3)) / 3;
									var validAlignmentPattern =
										Math.abs(scans[2] - averageAlignmentPatternBlocksize) <
											averageAlignmentPatternBlocksize &&
										Math.abs(scans[3] - averageAlignmentPatternBlocksize) <
											averageAlignmentPatternBlocksize &&
										Math.abs(scans[4] - averageAlignmentPatternBlocksize) <
											averageAlignmentPatternBlocksize &&
										v; // Is the current pixel black since alignment patterns are bordered in black
									if (validFinderPattern) {
										// Compute the start and end x values of the large center black square
										var endX_1 = x - scans[3] - scans[4];
										var startX_1 = endX_1 - scans[2];
										var line = { startX: startX_1, endX: endX_1, y: y };
										// Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
										// that line as the starting point.
										var matchingQuads = activeFinderPatternQuads.filter(function (q) {
											return (
												(startX_1 >= q.bottom.startX && startX_1 <= q.bottom.endX) ||
												(endX_1 >= q.bottom.startX && startX_1 <= q.bottom.endX) ||
												(startX_1 <= q.bottom.startX &&
													endX_1 >= q.bottom.endX &&
													scans[2] / (q.bottom.endX - q.bottom.startX) < MAX_QUAD_RATIO &&
													scans[2] / (q.bottom.endX - q.bottom.startX) > MIN_QUAD_RATIO)
											);
										});
										if (matchingQuads.length > 0) {
											matchingQuads[0].bottom = line;
										} else {
											activeFinderPatternQuads.push({ top: line, bottom: line });
										}
									}
									if (validAlignmentPattern) {
										// Compute the start and end x values of the center black square
										var endX_2 = x - scans[4];
										var startX_2 = endX_2 - scans[3];
										var line = { startX: startX_2, y: y, endX: endX_2 };
										// Is there a quad directly above the current spot? If so, extend it with the new line. Otherwise, create a new quad with
										// that line as the starting point.
										var matchingQuads = activeAlignmentPatternQuads.filter(function (q) {
											return (
												(startX_2 >= q.bottom.startX && startX_2 <= q.bottom.endX) ||
												(endX_2 >= q.bottom.startX && startX_2 <= q.bottom.endX) ||
												(startX_2 <= q.bottom.startX &&
													endX_2 >= q.bottom.endX &&
													scans[2] / (q.bottom.endX - q.bottom.startX) < MAX_QUAD_RATIO &&
													scans[2] / (q.bottom.endX - q.bottom.startX) > MIN_QUAD_RATIO)
											);
										});
										if (matchingQuads.length > 0) {
											matchingQuads[0].bottom = line;
										} else {
											activeAlignmentPatternQuads.push({ top: line, bottom: line });
										}
									}
								}
							};
							for (var x = -1; x <= matrix.width; x++) {
								_loop_2(x);
							}
							finderPatternQuads.push.apply(
								finderPatternQuads,
								activeFinderPatternQuads.filter(function (q) {
									return q.bottom.y !== y && q.bottom.y - q.top.y >= 2;
								})
							);
							activeFinderPatternQuads = activeFinderPatternQuads.filter(function (q) {
								return q.bottom.y === y;
							});
							alignmentPatternQuads.push.apply(
								alignmentPatternQuads,
								activeAlignmentPatternQuads.filter(function (q) {
									return q.bottom.y !== y;
								})
							);
							activeAlignmentPatternQuads = activeAlignmentPatternQuads.filter(function (q) {
								return q.bottom.y === y;
							});
						};
						for (var y = 0; y <= matrix.height; y++) {
							_loop_1(y);
						}
						finderPatternQuads.push.apply(
							finderPatternQuads,
							activeFinderPatternQuads.filter(function (q) {
								return q.bottom.y - q.top.y >= 2;
							})
						);
						alignmentPatternQuads.push.apply(alignmentPatternQuads, activeAlignmentPatternQuads);
						var finderPatternGroups = finderPatternQuads
							.filter(function (q) {
								return q.bottom.y - q.top.y >= 2;
							}) // All quads must be at least 2px tall since the center square is larger than a block
							.map(function (q) {
								var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
								var y = (q.top.y + q.bottom.y + 1) / 2;
								if (!matrix.get(Math.round(x), Math.round(y))) {
									return;
								}
								var lengths = [
									q.top.endX - q.top.startX,
									q.bottom.endX - q.bottom.startX,
									q.bottom.y - q.top.y + 1
								];
								var size = sum(lengths) / lengths.length;
								var score = scorePattern(
									{ x: Math.round(x), y: Math.round(y) },
									[1, 1, 3, 1, 1],
									matrix
								);
								return { score: score, x: x, y: y, size: size };
							})
							.filter(function (q) {
								return !!q;
							}) // Filter out any rejected quads from above
							.sort(function (a, b) {
								return a.score - b.score;
							})
							// Now take the top finder pattern options and try to find 2 other options with a similar size.
							.map(function (point, i, finderPatterns) {
								if (i > MAX_FINDERPATTERNS_TO_SEARCH) {
									return null;
								}
								var otherPoints = finderPatterns
									.filter(function (p, ii) {
										return i !== ii;
									})
									.map(function (p) {
										return {
											x: p.x,
											y: p.y,
											score: p.score + Math.pow(p.size - point.size, 2) / point.size,
											size: p.size
										};
									})
									.sort(function (a, b) {
										return a.score - b.score;
									});
								if (otherPoints.length < 2) {
									return null;
								}
								var score = point.score + otherPoints[0].score + otherPoints[1].score;
								return { points: [point].concat(otherPoints.slice(0, 2)), score: score };
							})
							.filter(function (q) {
								return !!q;
							}) // Filter out any rejected finder patterns from above
							.sort(function (a, b) {
								return a.score - b.score;
							});
						if (finderPatternGroups.length === 0) {
							return null;
						}
						var _a = reorderFinderPatterns(
								finderPatternGroups[0].points[0],
								finderPatternGroups[0].points[1],
								finderPatternGroups[0].points[2]
							),
							topRight = _a.topRight,
							topLeft = _a.topLeft,
							bottomLeft = _a.bottomLeft;
						var alignment = findAlignmentPattern(
							matrix,
							alignmentPatternQuads,
							topRight,
							topLeft,
							bottomLeft
						);
						var result = [];
						if (alignment) {
							result.push({
								alignmentPattern: {
									x: alignment.alignmentPattern.x,
									y: alignment.alignmentPattern.y
								},
								bottomLeft: { x: bottomLeft.x, y: bottomLeft.y },
								dimension: alignment.dimension,
								topLeft: { x: topLeft.x, y: topLeft.y },
								topRight: { x: topRight.x, y: topRight.y }
							});
						}
						// We normally use the center of the quads as the location of the tracking points, which is optimal for most cases and will account
						// for a skew in the image. However, In some cases, a slight skew might not be real and instead be caused by image compression
						// errors and/or low resolution. For those cases, we'd be better off centering the point exactly in the middle of the black area. We
						// compute and return the location data for the naively centered points as it is little additional work and allows for multiple
						// attempts at decoding harder images.
						var midTopRight = recenterLocation(matrix, topRight);
						var midTopLeft = recenterLocation(matrix, topLeft);
						var midBottomLeft = recenterLocation(matrix, bottomLeft);
						var centeredAlignment = findAlignmentPattern(
							matrix,
							alignmentPatternQuads,
							midTopRight,
							midTopLeft,
							midBottomLeft
						);
						if (centeredAlignment) {
							result.push({
								alignmentPattern: {
									x: centeredAlignment.alignmentPattern.x,
									y: centeredAlignment.alignmentPattern.y
								},
								bottomLeft: { x: midBottomLeft.x, y: midBottomLeft.y },
								topLeft: { x: midTopLeft.x, y: midTopLeft.y },
								topRight: { x: midTopRight.x, y: midTopRight.y },
								dimension: centeredAlignment.dimension
							});
						}
						if (result.length === 0) {
							return null;
						}
						return result;
					}
					exports.locate = locate;
					function findAlignmentPattern(
						matrix,
						alignmentPatternQuads,
						topRight,
						topLeft,
						bottomLeft
					) {
						var _a;
						// Now that we've found the three finder patterns we can determine the blockSize and the size of the QR code.
						// We'll use these to help find the alignment pattern but also later when we do the extraction.
						var dimension;
						var moduleSize;
						try {
							(_a = computeDimension(topLeft, topRight, bottomLeft, matrix)),
								(dimension = _a.dimension),
								(moduleSize = _a.moduleSize);
						} catch (e) {
							return null;
						}
						// Now find the alignment pattern
						var bottomRightFinderPattern = {
							x: topRight.x - topLeft.x + bottomLeft.x,
							y: topRight.y - topLeft.y + bottomLeft.y
						};
						var modulesBetweenFinderPatterns =
							(distance(topLeft, bottomLeft) + distance(topLeft, topRight)) / 2 / moduleSize;
						var correctionToTopLeft = 1 - 3 / modulesBetweenFinderPatterns;
						var expectedAlignmentPattern = {
							x: topLeft.x + correctionToTopLeft * (bottomRightFinderPattern.x - topLeft.x),
							y: topLeft.y + correctionToTopLeft * (bottomRightFinderPattern.y - topLeft.y)
						};
						var alignmentPatterns = alignmentPatternQuads
							.map(function (q) {
								var x = (q.top.startX + q.top.endX + q.bottom.startX + q.bottom.endX) / 4;
								var y = (q.top.y + q.bottom.y + 1) / 2;
								if (!matrix.get(Math.floor(x), Math.floor(y))) {
									return;
								}
								var lengths = [
									q.top.endX - q.top.startX,
									q.bottom.endX - q.bottom.startX,
									q.bottom.y - q.top.y + 1
								];
								sum(lengths) / lengths.length;
								var sizeScore = scorePattern(
									{ x: Math.floor(x), y: Math.floor(y) },
									[1, 1, 1],
									matrix
								);
								var score = sizeScore + distance({ x: x, y: y }, expectedAlignmentPattern);
								return { x: x, y: y, score: score };
							})
							.filter(function (v) {
								return !!v;
							})
							.sort(function (a, b) {
								return a.score - b.score;
							});
						// If there are less than 15 modules between finder patterns it's a version 1 QR code and as such has no alignmemnt pattern
						// so we can only use our best guess.
						var alignmentPattern =
							modulesBetweenFinderPatterns >= 15 && alignmentPatterns.length
								? alignmentPatterns[0]
								: expectedAlignmentPattern;
						return { alignmentPattern: alignmentPattern, dimension: dimension };
					}

					/***/
				}
				/******/
			]
		)['default'];
	});
})(jsQR$1);

var jsQR = /*@__PURE__*/ getDefaultExportFromCjs(jsQR$1.exports);

/* ..\\qrcode-scanner-svelte\\src\\lib\\components\\ScannerBorders.svelte generated by Svelte v3.48.0 */

function add_css$2(target) {
	append_styles(
		target,
		'svelte-yg5u4i-ContactList',
		':root{--border-thickness:3px;--border-radius:40%;--border-offset:5%;--border-color:#cbf3f0}.scanner-border.svelte-yg5u4i-ContactList{position:absolute;width:20%;height:20%}.scanner-border--top-left.svelte-yg5u4i-ContactList{top:var(--border-offset);left:var(--border-offset);border-top:var(--border-thickness) solid var(--border-color);border-left:var(--border-thickness) solid var(--border-color);border-top-left-radius:var(--border-radius)}.scanner-border--top-right.svelte-yg5u4i-ContactList{top:var(--border-offset);right:var(--border-offset);border-top:var(--border-thickness) solid var(--border-color);border-right:var(--border-thickness) solid var(--border-color);border-top-right-radius:var(--border-radius)}.scanner-border--bottom-left.svelte-yg5u4i-ContactList{bottom:var(--border-offset);left:var(--border-offset);border-bottom:var(--border-thickness) solid var(--border-color);border-left:var(--border-thickness) solid var(--border-color);border-bottom-left-radius:var(--border-radius)}.scanner-border--bottom-right.svelte-yg5u4i-ContactList{right:var(--border-offset);bottom:var(--border-offset);border-right:var(--border-thickness) solid var(--border-color);border-bottom:var(--border-thickness) solid var(--border-color);border-bottom-right-radius:var(--border-radius)}'
	);
}

function create_fragment$2(ctx) {
	let div4;

	return {
		c() {
			div4 = element('div');

			div4.innerHTML = \`<div class="scanner-border scanner-border--top-left svelte-yg5u4i-ContactList"></div> 
	<div class="scanner-border scanner-border--top-right svelte-yg5u4i-ContactList"></div> 
	<div class="scanner-border scanner-border--bottom-left svelte-yg5u4i-ContactList"></div> 
	<div class="scanner-border scanner-border--bottom-right svelte-yg5u4i-ContactList"></div>\`;
		},
		m(target, anchor) {
			insert(target, div4, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div4);
		}
	};
}

class ScannerBorders extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment$2, safe_not_equal, {}, add_css$2);
	}
}

/* ..\\qrcode-scanner-svelte\\src\\lib\\components\\Results.svelte generated by Svelte v3.48.0 */

function add_css$1(target) {
	append_styles(
		target,
		'svelte-8prxng-ContactList',
		'.results.svelte-8prxng-ContactList{width:100%;max-width:500px}.results__data.svelte-8prxng-ContactList{margin:50px 0 80px 0;padding:20px 20px 27px 20px;word-break:break-all;border:2px dashed #3d3d3d;border-radius:20px;font-size:1.3rem}.results__empty.svelte-8prxng-ContactList{color:#959595;font-style:italic}.results__button-container.svelte-8prxng-ContactList{display:flex;justify-content:center}.results__button.svelte-8prxng-ContactList{display:flex;align-items:center;padding:14px 16px;cursor:pointer;transition-duration:300ms;transition-property:background-color, transform;color:white;border:0;border-radius:8px;background-color:#23cd00;font-size:1.5rem;font-weight:500}.results__button.svelte-8prxng-ContactList:hover{background-color:#39b300}.results__link.svelte-8prxng-ContactList,.results__link.svelte-8prxng-ContactList:visited{transition:color 200ms;color:#7094ff}.results__link.svelte-8prxng-ContactList:hover,.results__link.svelte-8prxng-ContactList:active{color:#486cd9}'
	);
}

const get_default_slot_changes$1 = (dirty) => ({ decodedData: dirty & /*decodedData*/ 1 });
const get_default_slot_context$1 = (ctx) => ({ decodedData: /*decodedData*/ ctx[0] });

// (21:25)
function create_if_block_2(ctx) {
	let t0;
	let t1;

	return {
		c() {
			t0 = text(/*decodedData*/ ctx[0]);
			t1 = text(';');
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, t1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*decodedData*/ 1) set_data(t0, /*decodedData*/ ctx[0]);
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(t1);
		}
	};
}

// (17:39)
function create_if_block_1(ctx) {
	let a;
	let t;

	return {
		c() {
			a = element('a');
			t = text(/*decodedData*/ ctx[0]);
			attr(a, 'class', 'results__link svelte-8prxng-ContactList');
			attr(a, 'href', /*decodedData*/ ctx[0]);
			attr(a, 'target', '_blank');
			attr(a, 'rel', 'noopener noreferrer');
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*decodedData*/ 1) set_data(t, /*decodedData*/ ctx[0]);

			if (dirty & /*decodedData*/ 1) {
				attr(a, 'href', /*decodedData*/ ctx[0]);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
		}
	};
}

// (15:3) {#if !decodedData || decodedData === ''}
function create_if_block(ctx) {
	let span;

	return {
		c() {
			span = element('span');
			span.textContent = 'Scan a QR Code to send data here.';
			attr(span, 'class', 'results__empty svelte-8prxng-ContactList');
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

// (12:20)
function fallback_block$1(ctx) {
	let div2;
	let div0;
	let show_if;
	let t0;
	let div1;
	let button;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (dirty & /*decodedData, regex*/ 5) show_if = null;
		if (!(/*decodedData*/ ctx[0]) || /*decodedData*/ ctx[0] === '') return create_if_block;
		if (show_if == null) show_if = !!(/*decodedData*/ ctx[0]?.match(/*regex*/ ctx[2]));
		if (show_if) return create_if_block_1;
		if (/*decodedData*/ ctx[0]) return create_if_block_2;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type && current_block_type(ctx);

	return {
		c() {
			div2 = element('div');
			div0 = element('div');
			if (if_block) if_block.c();
			t0 = space();
			div1 = element('div');
			button = element('button');
			button.innerHTML = \`<span>New Scan</span>\`;
			attr(div0, 'class', 'results__data svelte-8prxng-ContactList');
			attr(button, 'type', 'button');
			attr(button, 'class', 'results__button svelte-8prxng-ContactList');
			attr(div1, 'class', 'results__button-container svelte-8prxng-ContactList');
			attr(div2, 'class', 'results svelte-8prxng-ContactList');
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			if (if_block) if_block.m(div0, null);
			append(div2, t0);
			append(div2, div1);
			append(div1, button);

			if (!mounted) {
				dispose = listen(button, 'click', function () {
					if (is_function(/*onNewScan*/ ctx[1])) /*onNewScan*/ ctx[1].apply(this, arguments);
				});

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if (if_block) if_block.d(1);
				if_block = current_block_type && current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div0, null);
				}
			}
		},
		d(detaching) {
			if (detaching) detach(div2);

			if (if_block) {
				if_block.d();
			}

			mounted = false;
			dispose();
		}
	};
}

function create_fragment$1(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(
		default_slot_template,
		ctx,
		/*$$scope*/ ctx[4],
		get_default_slot_context$1
	);
	const default_slot_or_fallback = default_slot || fallback_block$1(ctx);

	return {
		c() {
			if (default_slot_or_fallback) default_slot_or_fallback.c();
		},
		m(target, anchor) {
			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(target, anchor);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope, decodedData*/ 17)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
							? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
							: get_slot_changes(
									default_slot_template,
									/*$$scope*/ ctx[4],
									dirty,
									get_default_slot_changes$1
							  ),
						get_default_slot_context$1
					);
				}
			} else {
				if (
					default_slot_or_fallback &&
					default_slot_or_fallback.p &&
					(!current || dirty & /*onNewScan, decodedData, regex*/ 7)
				) {
					default_slot_or_fallback.p(ctx, !current ? -1 : dirty);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot_or_fallback, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot_or_fallback, local);
			current = false;
		},
		d(detaching) {
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { active } = $$props;
	let { decodedData } = $$props;
	let { onNewScan } = $$props;
	let regex;

	$$self.$$set = ($$props) => {
		if ('active' in $$props) $$invalidate(3, (active = $$props.active));
		if ('decodedData' in $$props) $$invalidate(0, (decodedData = $$props.decodedData));
		if ('onNewScan' in $$props) $$invalidate(1, (onNewScan = $$props.onNewScan));
		if ('$$scope' in $$props) $$invalidate(4, ($$scope = $$props.$$scope));
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*active*/ 8) {
			if (active) {
				const urlExp =
					/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
				$$invalidate(2, (regex = new RegExp(urlExp)));
			}
		}
	};

	return [decodedData, onNewScan, regex, active, $$scope, slots];
}

class Results extends SvelteComponent {
	constructor(options) {
		super();
		init(
			this,
			options,
			instance$2,
			create_fragment$1,
			safe_not_equal,
			{ active: 3, decodedData: 0, onNewScan: 1 },
			add_css$1
		);
	}

	get active() {
		return this.$$.ctx[3];
	}

	set active(active) {
		this.$$set({ active });
		flush();
	}

	get decodedData() {
		return this.$$.ctx[0];
	}

	set decodedData(decodedData) {
		this.$$set({ decodedData });
		flush();
	}

	get onNewScan() {
		return this.$$.ctx[1];
	}

	set onNewScan(onNewScan) {
		this.$$set({ onNewScan });
		flush();
	}
}

/* ..\\qrcode-scanner-svelte\\src\\lib\\utils\\use-usermedia.svelte generated by Svelte v3.48.0 */

function instance$1($$self, $$props, $$invalidate) {
	let $stream;
	let $error;
	let $status;
	component_subscribe($$self, stream, ($$value) => $$invalidate(2, ($stream = $$value)));
	component_subscribe($$self, error, ($$value) => $$invalidate(3, ($error = $$value)));
	component_subscribe($$self, status, ($$value) => $$invalidate(4, ($status = $$value)));

	onMount(() => {
		return () => {
			console.log('stop Component destroyed');
		}; // stopMedia();
	});

	const isMediaStream = (candidate) => candidate !== null && 'getTracks' in candidate;

	function setStatus(params) {
		console.log(\`Setting status \${params}\`);
		set_store_value(status, ($status = params), $status);
	}

	const useUserMedia = () => {
		set_store_value(stream, ($stream = null), $stream);
		set_store_value(error, ($error = null), $error);
		set_store_value(status, ($status = 'stopped'), $status);

		function setError(params) {
			console.log('Setting erro');
			set_store_value(error, ($error = params), $error);
		}

		function setStream(params) {
			console.log(\`Setting stream\`, { params });
			set_store_value(stream, ($stream = params), $stream);
		}

		const startMediaStream = () => {
			setStatus('pending');

			navigator.mediaDevices
				.getUserMedia({
					audio: false,
					video: { facingMode: 'environment' }
				})
				.then((userStream) => {
					setStream(userStream);
					setStatus('resolved');
				})
				.catch((err) => {
					setError(err);
					setStatus('rejected');
				});
		};

		const stopMediaStream = stopMedia;
		return { stopMediaStream, startMediaStream };
	};

	function stopMedia() {
		console.log('stopping media stream');

		if (isMediaStream($stream)) {
			$stream.getTracks().forEach((track) => {
				track.stop();
				$stream.removeTrack(track);
			});

			console.log({ streams: $stream });
			setStatus('stopped');
		}
	}

	return [useUserMedia];
}

class Use_usermedia extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, null, safe_not_equal, { useUserMedia: 0 });
	}

	get useUserMedia() {
		return this.$$.ctx[0];
	}
}

/* ..\\qrcode-scanner-svelte\\src\\lib\\components\\Scanner.svelte generated by Svelte v3.48.0 */

function add_css(target) {
	append_styles(
		target,
		'svelte-1drrksk-ContactList',
		'.scanner.svelte-1drrksk-ContactList{width:100%;max-width:500px}.scanner--hidden.svelte-1drrksk-ContactList{display:none}.scanner__aspect-ratio-container.svelte-1drrksk-ContactList{position:relative;overflow:hidden;padding-bottom:100%;border-radius:10%}.scanner__video.svelte-1drrksk-ContactList{position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;outline:none;-o-object-fit:cover;object-fit:cover}.scanner__canvas.svelte-1drrksk-ContactList{display:none}.scanner-tip.svelte-1drrksk-ContactList{display:flex;justify-content:center;margin-top:15px;font-size:0.8rem}'
	);
}

const get_default_slot_changes = (dirty) => ({ result: dirty & /*result*/ 1 });
const get_default_slot_context = (ctx) => ({ result: /*result*/ ctx[0] });

// (87:15)
function fallback_block(ctx) {
	let results;
	let current;

	results = new Results({
		props: {
			active: /*result*/ ctx[0] !== null,
			decodedData: /*result*/ ctx[0],
			onNewScan: /*func*/ ctx[15]
		}
	});

	return {
		c() {
			create_component(results.$$.fragment);
		},
		m(target, anchor) {
			mount_component(results, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const results_changes = {};
			if (dirty & /*result*/ 1) results_changes.active = /*result*/ ctx[0] !== null;
			if (dirty & /*result*/ 1) results_changes.decodedData = /*result*/ ctx[0];
			if (dirty & /*result*/ 1) results_changes.onNewScan = /*func*/ ctx[15];
			results.$set(results_changes);
		},
		i(local) {
			if (current) return;
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

function create_fragment(ctx) {
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
	let div3_class_value;
	let t5;
	let current;
	let mounted;
	let dispose;

	function usermedia_useUserMedia_binding(value) {
		/*usermedia_useUserMedia_binding*/ ctx[12](value);
	}

	let usermedia_props = {};

	if (/*useUserMedia*/ ctx[4] !== void 0) {
		usermedia_props.useUserMedia = /*useUserMedia*/ ctx[4];
	}

	usermedia = new Use_usermedia({ props: usermedia_props });
	binding_callbacks.push(() => bind(usermedia, 'useUserMedia', usermedia_useUserMedia_binding));
	scannerborders = new ScannerBorders({});
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(
		default_slot_template,
		ctx,
		/*$$scope*/ ctx[10],
		get_default_slot_context
	);
	const default_slot_or_fallback = default_slot || fallback_block(ctx);

	return {
		c() {
			create_component(usermedia.$$.fragment);
			t0 = space();
			div3 = element('div');
			div0 = element('div');
			canvas_1 = element('canvas');
			t1 = space();
			video_1 = element('video');
			t2 = space();
			create_component(scannerborders.$$.fragment);
			t3 = space();
			div2 = element('div');
			div2.innerHTML = \`<div>Scan a QR code with your camera to see what it says.</div>\`;
			t5 = space();
			if (default_slot_or_fallback) default_slot_or_fallback.c();
			attr(canvas_1, 'class', 'scanner__canvas svelte-1drrksk-ContactList');
			attr(video_1, 'class', 'scanner__video svelte-1drrksk-ContactList');
			attr(div0, 'class', 'scanner__aspect-ratio-container svelte-1drrksk-ContactList');
			attr(div2, 'class', 'scanner-tip svelte-1drrksk-ContactList');
			attr(
				div3,
				'class',
				(div3_class_value =
					'' +
					(null_to_empty(\`scanner \${/*active*/ ctx[2] ? '' : 'scanner--hidden'}\`) +
						' svelte-1drrksk-ContactList'))
			);
		},
		m(target, anchor) {
			mount_component(usermedia, target, anchor);
			insert(target, t0, anchor);
			insert(target, div3, anchor);
			append(div3, div0);
			append(div0, canvas_1);
			/*canvas_1_binding*/ ctx[13](canvas_1);
			append(div0, t1);
			append(div0, video_1);
			/*video_1_binding*/ ctx[14](video_1);
			append(div0, t2);
			mount_component(scannerborders, div0, null);
			append(div3, t3);
			append(div3, div2);
			insert(target, t5, anchor);

			if (default_slot_or_fallback) {
				default_slot_or_fallback.m(target, anchor);
			}

			current = true;

			if (!mounted) {
				dispose = listen(video_1, 'canplay', /*handleCanPlay*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			const usermedia_changes = {};

			if (!updating_useUserMedia && dirty & /*useUserMedia*/ 16) {
				updating_useUserMedia = true;
				usermedia_changes.useUserMedia = /*useUserMedia*/ ctx[4];
				add_flush_callback(() => (updating_useUserMedia = false));
			}

			usermedia.$set(usermedia_changes);

			if (
				!current ||
				(dirty & /*active*/ 4 &&
					div3_class_value !==
						(div3_class_value =
							'' +
							(null_to_empty(\`scanner \${/*active*/ ctx[2] ? '' : 'scanner--hidden'}\`) +
								' svelte-1drrksk-ContactList')))
			) {
				attr(div3, 'class', div3_class_value);
			}

			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope, result*/ 1025)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[10],
						!current
							? get_all_dirty_from_scope(/*$$scope*/ ctx[10])
							: get_slot_changes(
									default_slot_template,
									/*$$scope*/ ctx[10],
									dirty,
									get_default_slot_changes
							  ),
						get_default_slot_context
					);
				}
			} else {
				if (
					default_slot_or_fallback &&
					default_slot_or_fallback.p &&
					(!current || dirty & /*result*/ 1)
				) {
					default_slot_or_fallback.p(ctx, !current ? -1 : dirty);
				}
			}
		},
		i(local) {
			if (current) return;
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
			if (detaching) detach(t0);
			if (detaching) detach(div3);
			/*canvas_1_binding*/ ctx[13](null);
			/*video_1_binding*/ ctx[14](null);
			destroy_component(scannerborders);
			if (detaching) detach(t5);
			if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let active;
	let $status;
	let $stream;
	let $error;
	component_subscribe($$self, status, ($$value) => $$invalidate(8, ($status = $$value)));
	component_subscribe($$self, stream, ($$value) => $$invalidate(9, ($stream = $$value)));
	component_subscribe($$self, error, ($$value) => $$invalidate(17, ($error = $$value)));
	let { $$slots: slots = {}, $$scope } = $$props;
	let { result = null } = $$props;
	let { stopMediaStream = null } = $$props;
	let startMediaStream;
	const dispatch = createEventDispatcher();
	let video = null;
	let canvas = null;
	let useUserMedia;

	onMount(() => {
		$$invalidate(
			6,
			({ stopMediaStream, startMediaStream } = useUserMedia()),
			stopMediaStream,
			$$invalidate(7, startMediaStream)
		);

		return () => {
			console.log('Component destroyed');
			stopMediaStream();
			$$invalidate(1, (video.srcObject = null), video);
		};
	});

	const startCapturing = () => {
		if (!canvas || !video) return;
		const context = canvas.getContext('2d');
		if (!context) return;
		const { width, height } = canvas;
		context.drawImage(video, 0, 0, width, height);
		const imageData = context.getImageData(0, 0, width, height);
		const qrCode = jsQR(imageData.data, width, height);

		if (qrCode === null) {
			console.log('timeout');
			setTimeout(startCapturing, 750);
		} else {
			$$invalidate(0, (result = qrCode.data));
			dispatch('successfulScan', qrCode.data);
			stopMediaStream();
			$$invalidate(1, (video.srcObject = null), video);
		}
	};

	const handleCanPlay = () => {
		console.log('canplay');

		if (canvas === null || canvas === null || video === null || video === null) {
			return;
		}

		$$invalidate(3, (canvas.width = video.videoWidth), canvas);
		$$invalidate(3, (canvas.height = video.videoHeight), canvas);

		if ($error !== null);
		else {
			startCapturing(); // TODO: show dialog to user with an error
		}
	};

	function usermedia_useUserMedia_binding(value) {
		useUserMedia = value;
		$$invalidate(4, useUserMedia);
	}

	function canvas_1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			canvas = $$value;
			$$invalidate(3, canvas);
		});
	}

	function video_1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			video = $$value;
			($$invalidate(1, video), $$invalidate(8, $status)), $$invalidate(9, $stream);
		});
	}

	const func = () => $$invalidate(0, (result = null));

	$$self.$$set = ($$props) => {
		if ('result' in $$props) $$invalidate(0, (result = $$props.result));
		if ('stopMediaStream' in $$props) $$invalidate(6, (stopMediaStream = $$props.stopMediaStream));
		if ('$$scope' in $$props) $$invalidate(10, ($$scope = $$props.$$scope));
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*result*/ 1) {
			$$invalidate(2, (active = !result));
		}

		if ($$self.$$.dirty & /*$status, video, $stream*/ 770) {
			if ($status === 'resolved' && video !== null && $stream) {
				console.log('Resolve, stream');
				$$invalidate(1, (video.srcObject = $stream), video);
				video.play().catch(console.error);
			}
		}

		if ($$self.$$.dirty & /*active, $status, startMediaStream*/ 388) {
			if (active && $status === 'stopped' && startMediaStream) {
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
		init(
			this,
			options,
			instance,
			create_fragment,
			safe_not_equal,
			{ result: 0, stopMediaStream: 6 },
			add_css
		);
	}

	get result() {
		return this.$$.ctx[0];
	}

	set result(result) {
		this.$$set({ result });
		flush();
	}

	get stopMediaStream() {
		return this.$$.ctx[6];
	}

	set stopMediaStream(stopMediaStream) {
		this.$$set({ stopMediaStream });
		flush();
	}
}

var Scanner$1 = Scanner;

var index = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	Scanner: Scanner$1
});

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
	append_styles(target, "svelte-l2rleg-TagManager", ".svelte-l2rleg-TagManager,.svelte-l2rleg-TagManager::before,.svelte-l2rleg-TagManager::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-l2rleg-TagManager::before,.svelte-l2rleg-TagManager::after{--tw-content:''}.svelte-l2rleg-TagManager:-moz-focusring{outline:auto}.svelte-l2rleg-TagManager:-moz-ui-invalid{box-shadow:none}.svelte-l2rleg-TagManager::-webkit-inner-spin-button,.svelte-l2rleg-TagManager::-webkit-outer-spin-button{height:auto}.svelte-l2rleg-TagManager::-webkit-search-decoration{-webkit-appearance:none}.svelte-l2rleg-TagManager::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-l2rleg-TagManager:disabled{cursor:default}.svelte-l2rleg-TagManager::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-l2rleg-TagManager::-webkit-date-and-time-value{min-height:1.5em}.svelte-l2rleg-TagManager{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-l2rleg-TagManager,.svelte-l2rleg-TagManager::before,.svelte-l2rleg-TagManager::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-l2rleg-TagManager::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-l2rleg-TagManager::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.m-2.svelte-l2rleg-TagManager{margin:0.5rem}.flex.svelte-l2rleg-TagManager{display:flex}@-webkit-keyframes svelte-l2rleg-TagManager-spin{to{transform:rotate(360deg)}}@keyframes svelte-l2rleg-TagManager-spin{to{transform:rotate(360deg)}}.flex-col.svelte-l2rleg-TagManager{flex-direction:column}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
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
			attr(div, "class", "flex flex-col m-2 svelte-l2rleg-TagManager");
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
	append_styles(target, "svelte-1p680oz-TagManager", "@tailwind base;@tailwind components;@tailwind utilities;.svelte-1p680oz-TagManager,.svelte-1p680oz-TagManager::before,.svelte-1p680oz-TagManager::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-1p680oz-TagManager::before,.svelte-1p680oz-TagManager::after{--tw-content:''}.svelte-1p680oz-TagManager:-moz-focusring{outline:auto}.svelte-1p680oz-TagManager:-moz-ui-invalid{box-shadow:none}.svelte-1p680oz-TagManager::-webkit-inner-spin-button,.svelte-1p680oz-TagManager::-webkit-outer-spin-button{height:auto}.svelte-1p680oz-TagManager::-webkit-search-decoration{-webkit-appearance:none}.svelte-1p680oz-TagManager::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-1p680oz-TagManager:disabled{cursor:default}.svelte-1p680oz-TagManager::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-1p680oz-TagManager::-webkit-date-and-time-value{min-height:1.5em}.svelte-1p680oz-TagManager{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\"Segoe UI\\", Roboto, \\"Helvetica Neue\\", Arial, \\"Noto Sans\\", sans-serif, \\"Apple Color Emoji\\", \\"Segoe UI Emoji\\", \\"Segoe UI Symbol\\", \\"Noto Color Emoji\\"}.svelte-1p680oz-TagManager,.svelte-1p680oz-TagManager::before,.svelte-1p680oz-TagManager::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1p680oz-TagManager::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1p680oz-TagManager::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.m-2.svelte-1p680oz-TagManager{margin:0.5rem}.flex-1.svelte-1p680oz-TagManager{flex:1 1 0%}@-webkit-keyframes svelte-1p680oz-TagManager-spin{to{transform:rotate(360deg)}}@keyframes svelte-1p680oz-TagManager-spin{to{transform:rotate(360deg)}}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
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
			attr(div, "class", "flex-1 m-2 svelte-1p680oz-TagManager");
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
  let div;
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
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "m-2 p-2 border bg-slate-200 rounded min-h-[100px]");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div, null);
      }
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
            each_blocks[i].m(div, null);
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
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
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
      attr(div, "class", "main m-1 p-2 rounded bg-neutral-800 text-slate-50 break-words");
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
  let t0;
  let div;
  let hypnsmanager;
  let updating_openHypns;
  let t1;
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
      if (if_block)
        if_block.c();
      t0 = space();
      div = element("div");
      create_component(hypnsmanager.$$.fragment);
      t1 = space();
      create_component(pipernetmanager.$$.fragment);
      this.h();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(hypnsmanager.$$.fragment, div_nodes);
      div_nodes.forEach(detach);
      t1 = claim_space(nodes);
      claim_component(pipernetmanager.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(div, "class", "m-2 p-2 border bg-slate-200 rounded min-h-[100px]");
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div, anchor);
      mount_component(hypnsmanager, div, null);
      insert_hydration(target, t1, anchor);
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
          if_block.m(t0.parentNode, t0);
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(div);
      destroy_component(hypnsmanager);
      if (detaching)
        detach(t1);
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
      $$invalidate(1, { Web3WalletMenu } = await __vitePreload(() => import("../chunks/index-73f8326a.js"), true ? ["chunks/index-73f8326a.js","assets/index-c30dcd19.css","chunks/index-64ae2edc.js","chunks/preload-helper-ef2a18a4.js","chunks/index-9f669967.js","chunks/cid-ddbe2f79.js","assets/cid-5802fef1.css"] : void 0), Web3WalletMenu);
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
//# sourceMappingURL=index.svelte-6f72c0ca.js.map
