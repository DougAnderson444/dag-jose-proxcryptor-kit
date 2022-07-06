import { SvelteComponent, init, safe_not_equal, create_component, empty, claim_component, mount_component, insert_hydration, add_flush_callback, group_outros, transition_out, destroy_component, check_outros, binding_callbacks, bind, transition_in, detach, element, space, text, query_selector_all, claim_element, claim_space, children, claim_text, attr, append_hydration, onMount, set_data, is_function, noop } from "../chunks/index-64ae2edc.js";
import "../chunks/cid-da67497d.js";
import "../chunks/Contacts.svelte_svelte_type_style_lang-b442e525.js";
import { __vitePreload } from "../chunks/preload-helper-ef2a18a4.js";
import { IPFSManager, Proxcryptor, Gateway } from "../chunks/IPFSManager-c92cb8db.js";
import "../chunks/singletons-cdabada9.js";
import "../chunks/_commonjsHelpers-9b98600b.js";
var Icon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".icon.svelte-ym28xb{position:relative;overflow:hidden;vertical-align:middle;-o-object-fit:contain;object-fit:contain;transform-origin:center center;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:currentColor}")();
var Content_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => `/*
! tailwindcss v3.1.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #E5E7EB; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::-webkit-file-upload-button:hover {
  background: #374151;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

.dark input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::-webkit-file-upload-button:hover {
  background: #6B7280;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

input[type="range"].range-sm::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-webkit-slider-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

input[type="range"].range-sm::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

.tooltip-arrow,.tooltip-arrow:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.tooltip-arrow {
  visibility: hidden;
}

.tooltip-arrow:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #E5E7EB;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}\r
	h1 {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
	h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
	h3 {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
.container {
  width: 100%;
}\r
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}\r
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}\r
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}\r
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}\r
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}\r
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}\r
.pointer-events-none {
  pointer-events: none;
}\r
.visible {
  visibility: visible;
}\r
.\\!visible {
  visibility: visible !important;
}\r
.invisible {
  visibility: hidden;
}\r
.static {
  position: static;
}\r
.fixed {
  position: fixed;
}\r
.absolute {
  position: absolute;
}\r
.relative {
  position: relative;
}\r
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}\r
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}\r
.-left-1 {
  left: -0.25rem;
}\r
.top-16 {
  top: 4rem;
}\r
.-right-16 {
  right: -4rem;
}\r
.bottom-5 {
  bottom: 1.25rem;
}\r
.left-1\\/2 {
  left: 50%;
}\r
.top-0 {
  top: 0px;
}\r
.left-0 {
  left: 0px;
}\r
.right-0 {
  right: 0px;
}\r
.top-8 {
  top: 2rem;
}\r
.top-1 {
  top: 0.25rem;
}\r
.-left-16 {
  left: -4rem;
}\r
.top-14 {
  top: 3.5rem;
}\r
.top-3 {
  top: 0.75rem;
}\r
.right-2\\.5 {
  right: 0.625rem;
}\r
.bottom-2\\.5 {
  bottom: 0.625rem;
}\r
.right-2 {
  right: 0.5rem;
}\r
.bottom-2 {
  bottom: 0.5rem;
}\r
.-left-3 {
  left: -0.75rem;
}\r
.-left-1\\.5 {
  left: -0.375rem;
}\r
.z-10 {
  z-index: 10;
}\r
.z-30 {
  z-index: 30;
}\r
.z-50 {
  z-index: 50;
}\r
.z-0 {
  z-index: 0;
}\r
.-z-10 {
  z-index: -10;
}\r
.z-40 {
  z-index: 40;
}\r
.z-20 {
  z-index: 20;
}\r
.m-2 {
  margin: 0.5rem;
}\r
.m-4 {
  margin: 1rem;
}\r
.m-1 {
  margin: 0.25rem;
}\r
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}\r
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}\r
.-mx-1\\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}\r
.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}\r
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}\r
.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}\r
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}\r
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}\r
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}\r
.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}\r
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}\r
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}\r
.mr-6 {
  margin-right: 1.5rem;
}\r
.mr-2 {
  margin-right: 0.5rem;
}\r
.mb-4 {
  margin-bottom: 1rem;
}\r
.ml-auto {
  margin-left: auto;
}\r
.mr-3 {
  margin-right: 0.75rem;
}\r
.ml-1 {
  margin-left: 0.25rem;
}\r
.mb-2 {
  margin-bottom: 0.5rem;
}\r
.ml-2 {
  margin-left: 0.5rem;
}\r
.-mr-1 {
  margin-right: -0.25rem;
}\r
.mb-5 {
  margin-bottom: 1.25rem;
}\r
.ml-3 {
  margin-left: 0.75rem;
}\r
.mt-2\\.5 {
  margin-top: 0.625rem;
}\r
.mt-2 {
  margin-top: 0.5rem;
}\r
.mb-3 {
  margin-bottom: 0.75rem;
}\r
.mb-1 {
  margin-bottom: 0.25rem;
}\r
.mt-4 {
  margin-top: 1rem;
}\r
.mt-6 {
  margin-top: 1.5rem;
}\r
.mb-6 {
  margin-bottom: 1.5rem;
}\r
.mr-4 {
  margin-right: 1rem;
}\r
.mt-3 {
  margin-top: 0.75rem;
}\r
.mt-1 {
  margin-top: 0.25rem;
}\r
.ml-0 {
  margin-left: 0px;
}\r
.-mb-px {
  margin-bottom: -1px;
}\r
.mb-10 {
  margin-bottom: 2.5rem;
}\r
.ml-6 {
  margin-left: 1.5rem;
}\r
.mr-1 {
  margin-right: 0.25rem;
}\r
.ml-4 {
  margin-left: 1rem;
}\r
.mt-1\\.5 {
  margin-top: 0.375rem;
}\r
.block {
  display: block;
}\r
.\\!block {
  display: block !important;
}\r
.inline-block {
  display: inline-block;
}\r
.inline {
  display: inline;
}\r
.flex {
  display: flex;
}\r
.inline-flex {
  display: inline-flex;
}\r
.table {
  display: table;
}\r
.\\!table {
  display: table !important;
}\r
.flow-root {
  display: flow-root;
}\r
.grid {
  display: grid;
}\r
.contents {
  display: contents;
}\r
.hidden {
  display: none;
}\r
.\\!hidden {
  display: none !important;
}\r
.h-96 {
  height: 24rem;
}\r
.h-6 {
  height: 1.5rem;
}\r
.h-8 {
  height: 2rem;
}\r
.h-5 {
  height: 1.25rem;
}\r
.h-10 {
  height: 2.5rem;
}\r
.h-12 {
  height: 3rem;
}\r
.h-4 {
  height: 1rem;
}\r
.h-24 {
  height: 6rem;
}\r
.h-56 {
  height: 14rem;
}\r
.h-3 {
  height: 0.75rem;
}\r
.h-full {
  height: 100%;
}\r
.h-1 {
  height: 0.25rem;
}\r
.h-2 {
  height: 0.5rem;
}\r
.h-7 {
  height: 1.75rem;
}\r
.h-2\\.5 {
  height: 0.625rem;
}\r
.h-0\\.5 {
  height: 0.125rem;
}\r
.h-0 {
  height: 0px;
}\r
.w-full {
  width: 100%;
}\r
.w-8 {
  width: 2rem;
}\r
.w-5 {
  width: 1.25rem;
}\r
.w-10 {
  width: 2.5rem;
}\r
.w-12 {
  width: 3rem;
}\r
.w-4 {
  width: 1rem;
}\r
.w-6 {
  width: 1.5rem;
}\r
.w-44 {
  width: 11rem;
}\r
.w-24 {
  width: 6rem;
}\r
.w-3 {
  width: 0.75rem;
}\r
.w-11 {
  width: 2.75rem;
}\r
.w-9 {
  width: 2.25rem;
}\r
.w-14 {
  width: 3.5rem;
}\r
.w-48 {
  width: 12rem;
}\r
.w-2\\/4 {
  width: 50%;
}\r
.w-1 {
  width: 0.25rem;
}\r
.w-32 {
  width: 8rem;
}\r
.w-64 {
  width: 16rem;
}\r
.w-80 {
  width: 20rem;
}\r
.w-fit {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}\r
.w-2 {
  width: 0.5rem;
}\r
.min-w-0 {
  min-width: 0px;
}\r
.max-w-sm {
  max-width: 24rem;
}\r
.max-w-md {
  max-width: 28rem;
}\r
.max-w-7xl {
  max-width: 80rem;
}\r
.max-w-4xl {
  max-width: 56rem;
}\r
.max-w-2xl {
  max-width: 42rem;
}\r
.max-w-xs {
  max-width: 20rem;
}\r
.flex-auto {
  flex: 1 1 auto;
}\r
.flex-1 {
  flex: 1 1 0%;
}\r
.flex-shrink-0 {
  flex-shrink: 0;
}\r
.shrink-0 {
  flex-shrink: 0;
}\r
.origin-\\[0\\] {
  transform-origin: 0;
}\r
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
@-webkit-keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
.animate-spin {
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
}\r
.cursor-not-allowed {
  cursor: not-allowed;
}\r
.cursor-pointer {
  cursor: pointer;
}\r
.list-none {
  list-style-type: none;
}\r
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}\r
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}\r
.flex-row {
  flex-direction: row;
}\r
.flex-col {
  flex-direction: column;
}\r
.flex-wrap {
  flex-wrap: wrap;
}\r
.items-start {
  align-items: flex-start;
}\r
.items-center {
  align-items: center;
}\r
.justify-end {
  justify-content: flex-end;
}\r
.justify-center {
  justify-content: center;
}\r
.justify-between {
  justify-content: space-between;
}\r
.gap-2 {
  gap: 0.5rem;
}\r
.gap-8 {
  gap: 2rem;
}\r
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}\r
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}\r
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}\r
.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}\r
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}\r
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}\r
.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}\r
.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}\r
.self-center {
  align-self: center;
}\r
.overflow-auto {
  overflow: auto;
}\r
.overflow-hidden {
  overflow: hidden;
}\r
.overflow-x-auto {
  overflow-x: auto;
}\r
.overflow-y-auto {
  overflow-y: auto;
}\r
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}\r
.whitespace-nowrap {
  white-space: nowrap;
}\r
.rounded {
  border-radius: 0.25rem;
}\r
.rounded-lg {
  border-radius: 0.5rem;
}\r
.rounded-full {
  border-radius: 9999px;
}\r
.rounded-md {
  border-radius: 0.375rem;
}\r
.rounded-none {
  border-radius: 0px;
}\r
.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}\r
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}\r
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}\r
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}\r
.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}\r
.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}\r
.border {
  border-width: 1px;
}\r
.border-2 {
  border-width: 2px;
}\r
.border-0 {
  border-width: 0px;
}\r
.border-b {
  border-bottom-width: 1px;
}\r
.border-t-0 {
  border-top-width: 0px;
}\r
.border-t-4 {
  border-top-width: 4px;
}\r
.border-t {
  border-top-width: 1px;
}\r
.border-l {
  border-left-width: 1px;
}\r
.border-b-2 {
  border-bottom-width: 2px;
}\r
.border-r-0 {
  border-right-width: 0px;
}\r
.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
}\r
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}\r
.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}\r
.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}\r
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-border-opacity));
}\r
.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-border-opacity));
}\r
.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-border-opacity));
}\r
.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-border-opacity));
}\r
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}\r
.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(195 221 253 / var(--tw-border-opacity));
}\r
.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(251 213 213 / var(--tw-border-opacity));
}\r
.border-yellow-200 {
  --tw-border-opacity: 1;
  border-color: rgb(252 233 106 / var(--tw-border-opacity));
}\r
.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(188 240 218 / var(--tw-border-opacity));
}\r
.border-indigo-200 {
  --tw-border-opacity: 1;
  border-color: rgb(205 219 254 / var(--tw-border-opacity));
}\r
.border-purple-200 {
  --tw-border-opacity: 1;
  border-color: rgb(220 215 254 / var(--tw-border-opacity));
}\r
.border-pink-200 {
  --tw-border-opacity: 1;
  border-color: rgb(250 209 232 / var(--tw-border-opacity));
}\r
.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.border-transparent {
  border-color: transparent;
}\r
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}\r
.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}\r
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.bg-transparent {
  background-color: transparent;
}\r
.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}\r
.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}\r
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}\r
.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}\r
.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.bg-purple-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}\r
.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}\r
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 245 255 / var(--tw-bg-opacity));
}\r
.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 236 220 / var(--tw-bg-opacity));
}\r
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}\r
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}\r
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-400 {
  --tw-gradient-from: #22d3ee;
  --tw-gradient-to: rgb(34 211 238 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-400 {
  --tw-gradient-from: #16BDCA;
  --tw-gradient-to: rgb(22 189 202 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-lime-200 {
  --tw-gradient-from: #d9f99d;
  --tw-gradient-to: rgb(217 249 157 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-400 {
  --tw-gradient-from: #F98080;
  --tw-gradient-to: rgb(249 128 128 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-400 {
  --tw-gradient-from: #F17EB8;
  --tw-gradient-to: rgb(241 126 184 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-blue-500 {
  --tw-gradient-from: #3F83F8;
  --tw-gradient-to: rgb(63 131 248 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-200 {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.via-green-500 {
  --tw-gradient-to: rgb(14 159 110 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E, var(--tw-gradient-to);
}\r
.via-cyan-500 {
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4, var(--tw-gradient-to);
}\r
.via-teal-500 {
  --tw-gradient-to: rgb(6 148 162 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0694A2, var(--tw-gradient-to);
}\r
.via-lime-400 {
  --tw-gradient-to: rgb(163 230 53 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635, var(--tw-gradient-to);
}\r
.via-red-500 {
  --tw-gradient-to: rgb(240 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F05252, var(--tw-gradient-to);
}\r
.via-pink-500 {
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #E74694, var(--tw-gradient-to);
}\r
.via-purple-600 {
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2, var(--tw-gradient-to);
}\r
.via-blue-600 {
  --tw-gradient-to: rgb(28 100 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2, var(--tw-gradient-to);
}\r
.via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.to-green-600 {
  --tw-gradient-to: #057A55;
}\r
.to-cyan-600 {
  --tw-gradient-to: #0891b2;
}\r
.to-teal-600 {
  --tw-gradient-to: #047481;
}\r
.to-lime-500 {
  --tw-gradient-to: #84cc16;
}\r
.to-red-600 {
  --tw-gradient-to: #E02424;
}\r
.to-pink-600 {
  --tw-gradient-to: #D61F69;
}\r
.to-purple-700 {
  --tw-gradient-to: #6C2BD9;
}\r
.to-blue-700 {
  --tw-gradient-to: #1A56DB;
}\r
.to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.to-lime-200 {
  --tw-gradient-to: #d9f99d;
}\r
.to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.fill-blue-600 {
  fill: #1C64F2;
}\r
.fill-gray-600 {
  fill: #4B5563;
}\r
.fill-green-500 {
  fill: #0E9F6E;
}\r
.fill-red-600 {
  fill: #E02424;
}\r
.fill-yellow-400 {
  fill: #E3A008;
}\r
.fill-pink-600 {
  fill: #D61F69;
}\r
.fill-purple-600 {
  fill: #7E3AF2;
}\r
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}\r
.p-2 {
  padding: 0.5rem;
}\r
.p-6 {
  padding: 1.5rem;
}\r
.p-4 {
  padding: 1rem;
}\r
.p-5 {
  padding: 1.25rem;
}\r
.p-1\\.5 {
  padding: 0.375rem;
}\r
.p-1 {
  padding: 0.25rem;
}\r
.p-0\\.5 {
  padding: 0.125rem;
}\r
.p-0 {
  padding: 0px;
}\r
.p-8 {
  padding: 2rem;
}\r
.p-2\\.5 {
  padding: 0.625rem;
}\r
.p-3 {
  padding: 0.75rem;
}\r
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}\r
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}\r
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}\r
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}\r
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}\r
.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}\r
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}\r
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}\r
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}\r
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}\r
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}\r
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}\r
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}\r
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}\r
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}\r
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}\r
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}\r
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}\r
.pb-5 {
  padding-bottom: 1.25rem;
}\r
.pt-4 {
  padding-top: 1rem;
}\r
.pb-10 {
  padding-bottom: 2.5rem;
}\r
.pl-10 {
  padding-left: 2.5rem;
}\r
.pl-3 {
  padding-left: 0.75rem;
}\r
.pb-4 {
  padding-bottom: 1rem;
}\r
.pr-4 {
  padding-right: 1rem;
}\r
.pl-4 {
  padding-left: 1rem;
}\r
.pl-2\\.5 {
  padding-left: 0.625rem;
}\r
.pl-2 {
  padding-left: 0.5rem;
}\r
.pl-11 {
  padding-left: 2.75rem;
}\r
.text-left {
  text-align: left;
}\r
.text-center {
  text-align: center;
}\r
.text-right {
  text-align: right;
}\r
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}\r
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}\r
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}\r
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}\r
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}\r
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}\r
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}\r
.font-bold {
  font-weight: 700;
}\r
.font-medium {
  font-weight: 500;
}\r
.font-semibold {
  font-weight: 600;
}\r
.font-normal {
  font-weight: 400;
}\r
.font-light {
  font-weight: 300;
}\r
.uppercase {
  text-transform: uppercase;
}\r
.italic {
  font-style: italic;
}\r
.leading-tight {
  line-height: 1.25;
}\r
.leading-normal {
  line-height: 1.5;
}\r
.leading-none {
  line-height: 1;
}\r
.leading-relaxed {
  line-height: 1.625;
}\r
.tracking-tight {
  letter-spacing: -0.025em;
}\r
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}\r
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(200 30 30 / var(--tw-text-opacity));
}\r
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgb(142 75 16 / var(--tw-text-opacity));
}\r
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(194 120 3 / var(--tw-text-opacity));
}\r
.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(4 108 78 / var(--tw-text-opacity));
}\r
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(81 69 205 / var(--tw-text-opacity));
}\r
.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(104 117 245 / var(--tw-text-opacity));
}\r
.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}\r
.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}\r
.text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(191 18 93 / var(--tw-text-opacity));
}\r
.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(231 70 148 / var(--tw-text-opacity));
}\r
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.text-blue-900 {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(4 116 129 / var(--tw-text-opacity));
}\r
.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(255 90 31 / var(--tw-text-opacity));
}\r
.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}\r
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(138 44 13 / var(--tw-text-opacity));
}\r
.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.opacity-60 {
  opacity: 0.6;
}\r
.opacity-40 {
  opacity: 0.4;
}\r
.opacity-0 {
  opacity: 0;
}\r
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-green-500\\/50 {
  --tw-shadow-color: rgb(14 159 110 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-cyan-500\\/50 {
  --tw-shadow-color: rgb(6 182 212 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-teal-500\\/50 {
  --tw-shadow-color: rgb(6 148 162 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-lime-500\\/50 {
  --tw-shadow-color: rgb(132 204 22 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-red-500\\/50 {
  --tw-shadow-color: rgb(240 82 82 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-pink-500\\/50 {
  --tw-shadow-color: rgb(231 70 148 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-purple-500\\/50 {
  --tw-shadow-color: rgb(144 97 249 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-blue-500\\/50 {
  --tw-shadow-color: rgb(63 131 248 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.outline {
  outline-style: solid;
}\r
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.duration-75 {
  transition-duration: 75ms;
}\r
.duration-300 {
  transition-duration: 300ms;
}\r
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}\r
.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}\r
.after\\:top-0\\.5::after {
  content: var(--tw-content);
  top: 0.125rem;
}\r
.after\\:left-\\[2px\\]::after {
  content: var(--tw-content);
  left: 2px;
}\r
.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}\r
.after\\:top-\\[2px\\]::after {
  content: var(--tw-content);
  top: 2px;
}\r
.after\\:left-\\[4px\\]::after {
  content: var(--tw-content);
  left: 4px;
}\r
.after\\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}\r
.after\\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}\r
.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}\r
.after\\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}\r
.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}\r
.after\\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}\r
.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}\r
.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}\r
.after\\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}\r
.first\\:rounded-l-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.last\\:rounded-r-md:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}\r
.last\\:border-r:last-child {
  border-right-width: 1px;
}\r
.odd\\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.even\\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.hover\\:bg-gradient-to-l:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}\r
.hover\\:from-teal-200:hover {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.hover\\:text-red-900:hover {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.hover\\:text-yellow-900:hover {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.hover\\:text-green-900:hover {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.hover\\:text-indigo-900:hover {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.hover\\:text-purple-900:hover {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.hover\\:text-pink-900:hover {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.hover\\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.focus\\:z-10:focus {
  z-index: 10;
}\r
.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.focus\\:border-transparent:focus {
  border-color: transparent;
}\r
.focus\\:border-blue-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.focus\\:bg-white:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(195 221 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(26 86 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(165 243 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));
}\r
.focus\\:ring-orange-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));
}\r
.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}\r
.group:hover .group-hover\\:bg-opacity-0 {
  --tw-bg-opacity: 0;
}\r
.group:hover .group-hover\\:from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.group:hover .group-hover\\:to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.group:hover .group-hover\\:to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.group:hover .group-hover\\:to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.group:hover .group-hover\\:to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.group:hover .group-hover\\:to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.group:hover .group-hover\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 116 129 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 90 31 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:checked ~ .peer-checked\\:after\\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:left-0 {
  left: 0px;
}\r
.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.peer:focus ~ .peer-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.peer:focus ~ .peer-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.peer:focus ~ .peer-focus\\:ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));
}\r
.dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}\r
.dark .dark\\:divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}\r
.dark .dark\\:border-none {
  border-style: none;
}\r
.dark .dark\\:border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-600 {
  --tw-border-opacity: 1;
  border-color: rgb(159 88 10 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(88 80 236 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(126 58 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-600 {
  --tw-border-opacity: 1;
  border-color: rgb(214 31 105 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.dark .dark\\:bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800\\/30 {
  background-color: rgb(31 41 55 / 0.3);
}\r
.dark .dark\\:bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(35 56 118 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 217 189 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-opacity-80 {
  --tw-bg-opacity: 0.8;
}\r
.dark .dark\\:text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(159 88 10 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(88 80 236 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-600 {
  --tw-text-opacity: 1;
  color: rgb(214 31 105 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-300 {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-300 {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-200 {
  --tw-text-opacity: 1;
  color: rgb(252 233 106 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-orange-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(195 221 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-200 {
  --tw-text-opacity: 1;
  color: rgb(188 240 218 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-200 {
  --tw-text-opacity: 1;
  color: rgb(251 213 213 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-200 {
  --tw-text-opacity: 1;
  color: rgb(220 215 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-200 {
  --tw-text-opacity: 1;
  color: rgb(205 219 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.dark .dark\\:shadow-green-800\\/80 {
  --tw-shadow-color: rgb(3 84 63 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-cyan-800\\/80 {
  --tw-shadow-color: rgb(21 94 117 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-teal-800\\/80 {
  --tw-shadow-color: rgb(5 80 92 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-lime-800\\/80 {
  --tw-shadow-color: rgb(63 98 18 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-red-800\\/80 {
  --tw-shadow-color: rgb(155 28 28 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-pink-800\\/80 {
  --tw-shadow-color: rgb(153 21 75 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-purple-800\\/80 {
  --tw-shadow-color: rgb(85 33 181 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-blue-800\\/80 {
  --tw-shadow-color: rgb(30 66 159 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:ring-gray-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-gray-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-offset-gray-800 {
  --tw-ring-offset-color: #1F2937;
}\r
.dark .odd\\:dark\\:bg-gray-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .even\\:dark\\:bg-gray-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:border-gray-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:border-gray-700:hover {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 180 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 202 21 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(132 225 188 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(180 198 252 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(202 191 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(164 202 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:focus\\:bg-gray-700:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-cyan-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-lime-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-pink-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-indigo-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-orange-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}\r
.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60 {
  background-color: rgb(31 41 55 / 0.6);
}\r
.dark .group:hover .dark\\:group-hover\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70 {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}\r
.peer:focus ~ .dark .peer-focus\\:dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));
}\r
@media (min-width: 640px) {

  .sm\\:order-last {
    order: 9999;
  }

  .sm\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:inline-block {
    display: inline-block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-6 {
    height: 1.5rem;
  }

  .sm\\:h-64 {
    height: 16rem;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:h-7 {
    height: 1.75rem;
  }

  .sm\\:w-6 {
    width: 1.5rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:gap-6 {
    gap: 1.5rem;
  }

  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:p-8 {
    padding: 2rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .sm\\:pb-6 {
    padding-bottom: 1.5rem;
  }

  .sm\\:pr-8 {
    padding-right: 2rem;
  }

  .sm\\:text-center {
    text-align: center;
  }

  .sm\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:ring-8 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
}\r
@media (min-width: 768px) {

  .md\\:order-1 {
    order: 1;
  }

  .md\\:ml-2 {
    margin-left: 0.5rem;
  }

  .md\\:mr-6 {
    margin-right: 1.5rem;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:w-48 {
    width: 12rem;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-xl {
    max-width: 36rem;
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:items-center {
    align-items: center;
  }

  .md\\:justify-between {
    justify-content: space-between;
  }

  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:rounded-none {
    border-radius: 0px;
  }

  .md\\:rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .md\\:border-0 {
    border-width: 0px;
  }

  .md\\:bg-transparent {
    background-color: transparent;
  }

  .md\\:p-6 {
    padding: 1.5rem;
  }

  .md\\:p-0 {
    padding: 0px;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:font-medium {
    font-weight: 500;
  }

  .md\\:text-blue-700 {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .md\\:hover\\:text-blue-700:hover {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .dark .md\\:dark\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .dark .md\\:dark\\:hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}\r
@media (min-width: 1024px) {

  .lg\\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .lg\\:mt-6 {
    margin-top: 1.5rem;
  }

  .lg\\:p-8 {
    padding: 2rem;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}\r
@media (min-width: 1280px) {

  .xl\\:h-80 {
    height: 20rem;
  }

  .xl\\:pb-8 {
    padding-bottom: 2rem;
  }
}\r
@media (min-width: 1536px) {

  .\\32xl\\:h-96 {
    height: 24rem;
  }
}`)();
var ContextMenu_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => `/*
! tailwindcss v3.1.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #E5E7EB; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::-webkit-file-upload-button:hover {
  background: #374151;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

.dark input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::-webkit-file-upload-button:hover {
  background: #6B7280;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

input[type="range"].range-sm::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-webkit-slider-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

input[type="range"].range-sm::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

.tooltip-arrow,.tooltip-arrow:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.tooltip-arrow {
  visibility: hidden;
}

.tooltip-arrow:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #E5E7EB;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}\r
	h1 {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
	h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
	h3 {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
.container {
  width: 100%;
}\r
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}\r
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}\r
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}\r
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}\r
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}\r
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}\r
.pointer-events-none {
  pointer-events: none;
}\r
.visible {
  visibility: visible;
}\r
.\\!visible {
  visibility: visible !important;
}\r
.invisible {
  visibility: hidden;
}\r
.static {
  position: static;
}\r
.fixed {
  position: fixed;
}\r
.absolute {
  position: absolute;
}\r
.relative {
  position: relative;
}\r
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}\r
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}\r
.-left-1 {
  left: -0.25rem;
}\r
.top-16 {
  top: 4rem;
}\r
.-right-16 {
  right: -4rem;
}\r
.bottom-5 {
  bottom: 1.25rem;
}\r
.left-1\\/2 {
  left: 50%;
}\r
.top-0 {
  top: 0px;
}\r
.left-0 {
  left: 0px;
}\r
.right-0 {
  right: 0px;
}\r
.top-8 {
  top: 2rem;
}\r
.top-1 {
  top: 0.25rem;
}\r
.-left-16 {
  left: -4rem;
}\r
.top-14 {
  top: 3.5rem;
}\r
.top-3 {
  top: 0.75rem;
}\r
.right-2\\.5 {
  right: 0.625rem;
}\r
.bottom-2\\.5 {
  bottom: 0.625rem;
}\r
.right-2 {
  right: 0.5rem;
}\r
.bottom-2 {
  bottom: 0.5rem;
}\r
.-left-3 {
  left: -0.75rem;
}\r
.-left-1\\.5 {
  left: -0.375rem;
}\r
.z-10 {
  z-index: 10;
}\r
.z-30 {
  z-index: 30;
}\r
.z-50 {
  z-index: 50;
}\r
.z-0 {
  z-index: 0;
}\r
.-z-10 {
  z-index: -10;
}\r
.z-40 {
  z-index: 40;
}\r
.z-20 {
  z-index: 20;
}\r
.m-2 {
  margin: 0.5rem;
}\r
.m-4 {
  margin: 1rem;
}\r
.m-1 {
  margin: 0.25rem;
}\r
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}\r
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}\r
.-mx-1\\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}\r
.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}\r
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}\r
.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}\r
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}\r
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}\r
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}\r
.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}\r
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}\r
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}\r
.mr-6 {
  margin-right: 1.5rem;
}\r
.mr-2 {
  margin-right: 0.5rem;
}\r
.mb-4 {
  margin-bottom: 1rem;
}\r
.ml-auto {
  margin-left: auto;
}\r
.mr-3 {
  margin-right: 0.75rem;
}\r
.ml-1 {
  margin-left: 0.25rem;
}\r
.mb-2 {
  margin-bottom: 0.5rem;
}\r
.ml-2 {
  margin-left: 0.5rem;
}\r
.-mr-1 {
  margin-right: -0.25rem;
}\r
.mb-5 {
  margin-bottom: 1.25rem;
}\r
.ml-3 {
  margin-left: 0.75rem;
}\r
.mt-2\\.5 {
  margin-top: 0.625rem;
}\r
.mt-2 {
  margin-top: 0.5rem;
}\r
.mb-3 {
  margin-bottom: 0.75rem;
}\r
.mb-1 {
  margin-bottom: 0.25rem;
}\r
.mt-4 {
  margin-top: 1rem;
}\r
.mt-6 {
  margin-top: 1.5rem;
}\r
.mb-6 {
  margin-bottom: 1.5rem;
}\r
.mr-4 {
  margin-right: 1rem;
}\r
.mt-3 {
  margin-top: 0.75rem;
}\r
.mt-1 {
  margin-top: 0.25rem;
}\r
.ml-0 {
  margin-left: 0px;
}\r
.-mb-px {
  margin-bottom: -1px;
}\r
.mb-10 {
  margin-bottom: 2.5rem;
}\r
.ml-6 {
  margin-left: 1.5rem;
}\r
.mr-1 {
  margin-right: 0.25rem;
}\r
.ml-4 {
  margin-left: 1rem;
}\r
.mt-1\\.5 {
  margin-top: 0.375rem;
}\r
.block {
  display: block;
}\r
.\\!block {
  display: block !important;
}\r
.inline-block {
  display: inline-block;
}\r
.inline {
  display: inline;
}\r
.flex {
  display: flex;
}\r
.inline-flex {
  display: inline-flex;
}\r
.table {
  display: table;
}\r
.\\!table {
  display: table !important;
}\r
.flow-root {
  display: flow-root;
}\r
.grid {
  display: grid;
}\r
.contents {
  display: contents;
}\r
.hidden {
  display: none;
}\r
.\\!hidden {
  display: none !important;
}\r
.h-96 {
  height: 24rem;
}\r
.h-6 {
  height: 1.5rem;
}\r
.h-8 {
  height: 2rem;
}\r
.h-5 {
  height: 1.25rem;
}\r
.h-10 {
  height: 2.5rem;
}\r
.h-12 {
  height: 3rem;
}\r
.h-4 {
  height: 1rem;
}\r
.h-24 {
  height: 6rem;
}\r
.h-56 {
  height: 14rem;
}\r
.h-3 {
  height: 0.75rem;
}\r
.h-full {
  height: 100%;
}\r
.h-1 {
  height: 0.25rem;
}\r
.h-2 {
  height: 0.5rem;
}\r
.h-7 {
  height: 1.75rem;
}\r
.h-2\\.5 {
  height: 0.625rem;
}\r
.h-0\\.5 {
  height: 0.125rem;
}\r
.h-0 {
  height: 0px;
}\r
.w-full {
  width: 100%;
}\r
.w-8 {
  width: 2rem;
}\r
.w-5 {
  width: 1.25rem;
}\r
.w-10 {
  width: 2.5rem;
}\r
.w-12 {
  width: 3rem;
}\r
.w-4 {
  width: 1rem;
}\r
.w-6 {
  width: 1.5rem;
}\r
.w-44 {
  width: 11rem;
}\r
.w-24 {
  width: 6rem;
}\r
.w-3 {
  width: 0.75rem;
}\r
.w-11 {
  width: 2.75rem;
}\r
.w-9 {
  width: 2.25rem;
}\r
.w-14 {
  width: 3.5rem;
}\r
.w-48 {
  width: 12rem;
}\r
.w-2\\/4 {
  width: 50%;
}\r
.w-1 {
  width: 0.25rem;
}\r
.w-32 {
  width: 8rem;
}\r
.w-64 {
  width: 16rem;
}\r
.w-80 {
  width: 20rem;
}\r
.w-fit {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}\r
.w-2 {
  width: 0.5rem;
}\r
.min-w-0 {
  min-width: 0px;
}\r
.max-w-sm {
  max-width: 24rem;
}\r
.max-w-md {
  max-width: 28rem;
}\r
.max-w-7xl {
  max-width: 80rem;
}\r
.max-w-4xl {
  max-width: 56rem;
}\r
.max-w-2xl {
  max-width: 42rem;
}\r
.max-w-xs {
  max-width: 20rem;
}\r
.flex-auto {
  flex: 1 1 auto;
}\r
.flex-1 {
  flex: 1 1 0%;
}\r
.flex-shrink-0 {
  flex-shrink: 0;
}\r
.shrink-0 {
  flex-shrink: 0;
}\r
.origin-\\[0\\] {
  transform-origin: 0;
}\r
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
@-webkit-keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
.animate-spin {
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
}\r
.cursor-not-allowed {
  cursor: not-allowed;
}\r
.cursor-pointer {
  cursor: pointer;
}\r
.list-none {
  list-style-type: none;
}\r
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}\r
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}\r
.flex-row {
  flex-direction: row;
}\r
.flex-col {
  flex-direction: column;
}\r
.flex-wrap {
  flex-wrap: wrap;
}\r
.items-start {
  align-items: flex-start;
}\r
.items-center {
  align-items: center;
}\r
.justify-end {
  justify-content: flex-end;
}\r
.justify-center {
  justify-content: center;
}\r
.justify-between {
  justify-content: space-between;
}\r
.gap-2 {
  gap: 0.5rem;
}\r
.gap-8 {
  gap: 2rem;
}\r
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}\r
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}\r
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}\r
.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}\r
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}\r
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}\r
.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}\r
.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}\r
.self-center {
  align-self: center;
}\r
.overflow-auto {
  overflow: auto;
}\r
.overflow-hidden {
  overflow: hidden;
}\r
.overflow-x-auto {
  overflow-x: auto;
}\r
.overflow-y-auto {
  overflow-y: auto;
}\r
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}\r
.whitespace-nowrap {
  white-space: nowrap;
}\r
.rounded {
  border-radius: 0.25rem;
}\r
.rounded-lg {
  border-radius: 0.5rem;
}\r
.rounded-full {
  border-radius: 9999px;
}\r
.rounded-md {
  border-radius: 0.375rem;
}\r
.rounded-none {
  border-radius: 0px;
}\r
.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}\r
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}\r
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}\r
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}\r
.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}\r
.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}\r
.border {
  border-width: 1px;
}\r
.border-2 {
  border-width: 2px;
}\r
.border-0 {
  border-width: 0px;
}\r
.border-b {
  border-bottom-width: 1px;
}\r
.border-t-0 {
  border-top-width: 0px;
}\r
.border-t-4 {
  border-top-width: 4px;
}\r
.border-t {
  border-top-width: 1px;
}\r
.border-l {
  border-left-width: 1px;
}\r
.border-b-2 {
  border-bottom-width: 2px;
}\r
.border-r-0 {
  border-right-width: 0px;
}\r
.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
}\r
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}\r
.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}\r
.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}\r
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-border-opacity));
}\r
.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-border-opacity));
}\r
.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-border-opacity));
}\r
.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-border-opacity));
}\r
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}\r
.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(195 221 253 / var(--tw-border-opacity));
}\r
.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(251 213 213 / var(--tw-border-opacity));
}\r
.border-yellow-200 {
  --tw-border-opacity: 1;
  border-color: rgb(252 233 106 / var(--tw-border-opacity));
}\r
.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(188 240 218 / var(--tw-border-opacity));
}\r
.border-indigo-200 {
  --tw-border-opacity: 1;
  border-color: rgb(205 219 254 / var(--tw-border-opacity));
}\r
.border-purple-200 {
  --tw-border-opacity: 1;
  border-color: rgb(220 215 254 / var(--tw-border-opacity));
}\r
.border-pink-200 {
  --tw-border-opacity: 1;
  border-color: rgb(250 209 232 / var(--tw-border-opacity));
}\r
.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.border-transparent {
  border-color: transparent;
}\r
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}\r
.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}\r
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.bg-transparent {
  background-color: transparent;
}\r
.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}\r
.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}\r
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}\r
.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}\r
.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.bg-purple-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}\r
.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}\r
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 245 255 / var(--tw-bg-opacity));
}\r
.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 236 220 / var(--tw-bg-opacity));
}\r
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}\r
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}\r
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-400 {
  --tw-gradient-from: #22d3ee;
  --tw-gradient-to: rgb(34 211 238 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-400 {
  --tw-gradient-from: #16BDCA;
  --tw-gradient-to: rgb(22 189 202 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-lime-200 {
  --tw-gradient-from: #d9f99d;
  --tw-gradient-to: rgb(217 249 157 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-400 {
  --tw-gradient-from: #F98080;
  --tw-gradient-to: rgb(249 128 128 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-400 {
  --tw-gradient-from: #F17EB8;
  --tw-gradient-to: rgb(241 126 184 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-blue-500 {
  --tw-gradient-from: #3F83F8;
  --tw-gradient-to: rgb(63 131 248 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-200 {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.via-green-500 {
  --tw-gradient-to: rgb(14 159 110 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E, var(--tw-gradient-to);
}\r
.via-cyan-500 {
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4, var(--tw-gradient-to);
}\r
.via-teal-500 {
  --tw-gradient-to: rgb(6 148 162 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0694A2, var(--tw-gradient-to);
}\r
.via-lime-400 {
  --tw-gradient-to: rgb(163 230 53 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635, var(--tw-gradient-to);
}\r
.via-red-500 {
  --tw-gradient-to: rgb(240 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F05252, var(--tw-gradient-to);
}\r
.via-pink-500 {
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #E74694, var(--tw-gradient-to);
}\r
.via-purple-600 {
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2, var(--tw-gradient-to);
}\r
.via-blue-600 {
  --tw-gradient-to: rgb(28 100 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2, var(--tw-gradient-to);
}\r
.via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.to-green-600 {
  --tw-gradient-to: #057A55;
}\r
.to-cyan-600 {
  --tw-gradient-to: #0891b2;
}\r
.to-teal-600 {
  --tw-gradient-to: #047481;
}\r
.to-lime-500 {
  --tw-gradient-to: #84cc16;
}\r
.to-red-600 {
  --tw-gradient-to: #E02424;
}\r
.to-pink-600 {
  --tw-gradient-to: #D61F69;
}\r
.to-purple-700 {
  --tw-gradient-to: #6C2BD9;
}\r
.to-blue-700 {
  --tw-gradient-to: #1A56DB;
}\r
.to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.to-lime-200 {
  --tw-gradient-to: #d9f99d;
}\r
.to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.fill-blue-600 {
  fill: #1C64F2;
}\r
.fill-gray-600 {
  fill: #4B5563;
}\r
.fill-green-500 {
  fill: #0E9F6E;
}\r
.fill-red-600 {
  fill: #E02424;
}\r
.fill-yellow-400 {
  fill: #E3A008;
}\r
.fill-pink-600 {
  fill: #D61F69;
}\r
.fill-purple-600 {
  fill: #7E3AF2;
}\r
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}\r
.p-2 {
  padding: 0.5rem;
}\r
.p-6 {
  padding: 1.5rem;
}\r
.p-4 {
  padding: 1rem;
}\r
.p-5 {
  padding: 1.25rem;
}\r
.p-1\\.5 {
  padding: 0.375rem;
}\r
.p-1 {
  padding: 0.25rem;
}\r
.p-0\\.5 {
  padding: 0.125rem;
}\r
.p-0 {
  padding: 0px;
}\r
.p-8 {
  padding: 2rem;
}\r
.p-2\\.5 {
  padding: 0.625rem;
}\r
.p-3 {
  padding: 0.75rem;
}\r
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}\r
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}\r
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}\r
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}\r
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}\r
.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}\r
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}\r
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}\r
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}\r
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}\r
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}\r
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}\r
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}\r
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}\r
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}\r
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}\r
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}\r
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}\r
.pb-5 {
  padding-bottom: 1.25rem;
}\r
.pt-4 {
  padding-top: 1rem;
}\r
.pb-10 {
  padding-bottom: 2.5rem;
}\r
.pl-10 {
  padding-left: 2.5rem;
}\r
.pl-3 {
  padding-left: 0.75rem;
}\r
.pb-4 {
  padding-bottom: 1rem;
}\r
.pr-4 {
  padding-right: 1rem;
}\r
.pl-4 {
  padding-left: 1rem;
}\r
.pl-2\\.5 {
  padding-left: 0.625rem;
}\r
.pl-2 {
  padding-left: 0.5rem;
}\r
.pl-11 {
  padding-left: 2.75rem;
}\r
.text-left {
  text-align: left;
}\r
.text-center {
  text-align: center;
}\r
.text-right {
  text-align: right;
}\r
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}\r
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}\r
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}\r
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}\r
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}\r
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}\r
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}\r
.font-bold {
  font-weight: 700;
}\r
.font-medium {
  font-weight: 500;
}\r
.font-semibold {
  font-weight: 600;
}\r
.font-normal {
  font-weight: 400;
}\r
.font-light {
  font-weight: 300;
}\r
.uppercase {
  text-transform: uppercase;
}\r
.italic {
  font-style: italic;
}\r
.leading-tight {
  line-height: 1.25;
}\r
.leading-normal {
  line-height: 1.5;
}\r
.leading-none {
  line-height: 1;
}\r
.leading-relaxed {
  line-height: 1.625;
}\r
.tracking-tight {
  letter-spacing: -0.025em;
}\r
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}\r
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(200 30 30 / var(--tw-text-opacity));
}\r
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgb(142 75 16 / var(--tw-text-opacity));
}\r
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(194 120 3 / var(--tw-text-opacity));
}\r
.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(4 108 78 / var(--tw-text-opacity));
}\r
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(81 69 205 / var(--tw-text-opacity));
}\r
.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(104 117 245 / var(--tw-text-opacity));
}\r
.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}\r
.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}\r
.text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(191 18 93 / var(--tw-text-opacity));
}\r
.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(231 70 148 / var(--tw-text-opacity));
}\r
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.text-blue-900 {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(4 116 129 / var(--tw-text-opacity));
}\r
.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(255 90 31 / var(--tw-text-opacity));
}\r
.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}\r
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(138 44 13 / var(--tw-text-opacity));
}\r
.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.opacity-60 {
  opacity: 0.6;
}\r
.opacity-40 {
  opacity: 0.4;
}\r
.opacity-0 {
  opacity: 0;
}\r
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-green-500\\/50 {
  --tw-shadow-color: rgb(14 159 110 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-cyan-500\\/50 {
  --tw-shadow-color: rgb(6 182 212 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-teal-500\\/50 {
  --tw-shadow-color: rgb(6 148 162 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-lime-500\\/50 {
  --tw-shadow-color: rgb(132 204 22 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-red-500\\/50 {
  --tw-shadow-color: rgb(240 82 82 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-pink-500\\/50 {
  --tw-shadow-color: rgb(231 70 148 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-purple-500\\/50 {
  --tw-shadow-color: rgb(144 97 249 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-blue-500\\/50 {
  --tw-shadow-color: rgb(63 131 248 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.outline {
  outline-style: solid;
}\r
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.duration-75 {
  transition-duration: 75ms;
}\r
.duration-300 {
  transition-duration: 300ms;
}\r
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}\r
.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}\r
.after\\:top-0\\.5::after {
  content: var(--tw-content);
  top: 0.125rem;
}\r
.after\\:left-\\[2px\\]::after {
  content: var(--tw-content);
  left: 2px;
}\r
.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}\r
.after\\:top-\\[2px\\]::after {
  content: var(--tw-content);
  top: 2px;
}\r
.after\\:left-\\[4px\\]::after {
  content: var(--tw-content);
  left: 4px;
}\r
.after\\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}\r
.after\\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}\r
.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}\r
.after\\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}\r
.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}\r
.after\\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}\r
.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}\r
.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}\r
.after\\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}\r
.first\\:rounded-l-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.last\\:rounded-r-md:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}\r
.last\\:border-r:last-child {
  border-right-width: 1px;
}\r
.odd\\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.even\\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.hover\\:bg-gradient-to-l:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}\r
.hover\\:from-teal-200:hover {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.hover\\:text-red-900:hover {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.hover\\:text-yellow-900:hover {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.hover\\:text-green-900:hover {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.hover\\:text-indigo-900:hover {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.hover\\:text-purple-900:hover {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.hover\\:text-pink-900:hover {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.hover\\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.focus\\:z-10:focus {
  z-index: 10;
}\r
.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.focus\\:border-transparent:focus {
  border-color: transparent;
}\r
.focus\\:border-blue-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.focus\\:bg-white:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(195 221 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(26 86 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(165 243 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));
}\r
.focus\\:ring-orange-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));
}\r
.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}\r
.group:hover .group-hover\\:bg-opacity-0 {
  --tw-bg-opacity: 0;
}\r
.group:hover .group-hover\\:from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.group:hover .group-hover\\:to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.group:hover .group-hover\\:to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.group:hover .group-hover\\:to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.group:hover .group-hover\\:to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.group:hover .group-hover\\:to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.group:hover .group-hover\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 116 129 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 90 31 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:checked ~ .peer-checked\\:after\\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:left-0 {
  left: 0px;
}\r
.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.peer:focus ~ .peer-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.peer:focus ~ .peer-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.peer:focus ~ .peer-focus\\:ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));
}\r
.dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}\r
.dark .dark\\:divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}\r
.dark .dark\\:border-none {
  border-style: none;
}\r
.dark .dark\\:border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-600 {
  --tw-border-opacity: 1;
  border-color: rgb(159 88 10 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(88 80 236 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(126 58 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-600 {
  --tw-border-opacity: 1;
  border-color: rgb(214 31 105 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.dark .dark\\:bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800\\/30 {
  background-color: rgb(31 41 55 / 0.3);
}\r
.dark .dark\\:bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(35 56 118 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 217 189 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-opacity-80 {
  --tw-bg-opacity: 0.8;
}\r
.dark .dark\\:text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(159 88 10 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(88 80 236 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-600 {
  --tw-text-opacity: 1;
  color: rgb(214 31 105 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-300 {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-300 {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-200 {
  --tw-text-opacity: 1;
  color: rgb(252 233 106 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-orange-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(195 221 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-200 {
  --tw-text-opacity: 1;
  color: rgb(188 240 218 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-200 {
  --tw-text-opacity: 1;
  color: rgb(251 213 213 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-200 {
  --tw-text-opacity: 1;
  color: rgb(220 215 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-200 {
  --tw-text-opacity: 1;
  color: rgb(205 219 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.dark .dark\\:shadow-green-800\\/80 {
  --tw-shadow-color: rgb(3 84 63 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-cyan-800\\/80 {
  --tw-shadow-color: rgb(21 94 117 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-teal-800\\/80 {
  --tw-shadow-color: rgb(5 80 92 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-lime-800\\/80 {
  --tw-shadow-color: rgb(63 98 18 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-red-800\\/80 {
  --tw-shadow-color: rgb(155 28 28 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-pink-800\\/80 {
  --tw-shadow-color: rgb(153 21 75 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-purple-800\\/80 {
  --tw-shadow-color: rgb(85 33 181 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-blue-800\\/80 {
  --tw-shadow-color: rgb(30 66 159 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:ring-gray-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-gray-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-offset-gray-800 {
  --tw-ring-offset-color: #1F2937;
}\r
.dark .odd\\:dark\\:bg-gray-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .even\\:dark\\:bg-gray-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:border-gray-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:border-gray-700:hover {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 180 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 202 21 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(132 225 188 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(180 198 252 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(202 191 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(164 202 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:focus\\:bg-gray-700:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-cyan-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-lime-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-pink-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-indigo-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-orange-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}\r
.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60 {
  background-color: rgb(31 41 55 / 0.6);
}\r
.dark .group:hover .dark\\:group-hover\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70 {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}\r
.peer:focus ~ .dark .peer-focus\\:dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));
}\r
@media (min-width: 640px) {

  .sm\\:order-last {
    order: 9999;
  }

  .sm\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:inline-block {
    display: inline-block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-6 {
    height: 1.5rem;
  }

  .sm\\:h-64 {
    height: 16rem;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:h-7 {
    height: 1.75rem;
  }

  .sm\\:w-6 {
    width: 1.5rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:gap-6 {
    gap: 1.5rem;
  }

  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:p-8 {
    padding: 2rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .sm\\:pb-6 {
    padding-bottom: 1.5rem;
  }

  .sm\\:pr-8 {
    padding-right: 2rem;
  }

  .sm\\:text-center {
    text-align: center;
  }

  .sm\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:ring-8 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
}\r
@media (min-width: 768px) {

  .md\\:order-1 {
    order: 1;
  }

  .md\\:ml-2 {
    margin-left: 0.5rem;
  }

  .md\\:mr-6 {
    margin-right: 1.5rem;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:w-48 {
    width: 12rem;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-xl {
    max-width: 36rem;
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:items-center {
    align-items: center;
  }

  .md\\:justify-between {
    justify-content: space-between;
  }

  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:rounded-none {
    border-radius: 0px;
  }

  .md\\:rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .md\\:border-0 {
    border-width: 0px;
  }

  .md\\:bg-transparent {
    background-color: transparent;
  }

  .md\\:p-6 {
    padding: 1.5rem;
  }

  .md\\:p-0 {
    padding: 0px;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:font-medium {
    font-weight: 500;
  }

  .md\\:text-blue-700 {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .md\\:hover\\:text-blue-700:hover {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .dark .md\\:dark\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .dark .md\\:dark\\:hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}\r
@media (min-width: 1024px) {

  .lg\\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .lg\\:mt-6 {
    margin-top: 1.5rem;
  }

  .lg\\:p-8 {
    padding: 2rem;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}\r
@media (min-width: 1280px) {

  .xl\\:h-80 {
    height: 20rem;
  }

  .xl\\:pb-8 {
    padding-bottom: 2rem;
  }
}\r
@media (min-width: 1536px) {

  .\\32xl\\:h-96 {
    height: 24rem;
  }
}`)();
var ContactCard_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => `/*
! tailwindcss v3.1.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #E5E7EB; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::-webkit-file-upload-button:hover {
  background: #374151;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

.dark input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::-webkit-file-upload-button:hover {
  background: #6B7280;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

input[type="range"].range-sm::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-webkit-slider-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

input[type="range"].range-sm::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

.tooltip-arrow,.tooltip-arrow:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.tooltip-arrow {
  visibility: hidden;
}

.tooltip-arrow:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #E5E7EB;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}\r
	h1 {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
	h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
	h3 {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
.container {
  width: 100%;
}\r
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}\r
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}\r
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}\r
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}\r
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}\r
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}\r
.pointer-events-none {
  pointer-events: none;
}\r
.visible {
  visibility: visible;
}\r
.\\!visible {
  visibility: visible !important;
}\r
.invisible {
  visibility: hidden;
}\r
.static {
  position: static;
}\r
.fixed {
  position: fixed;
}\r
.absolute {
  position: absolute;
}\r
.relative {
  position: relative;
}\r
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}\r
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}\r
.-left-1 {
  left: -0.25rem;
}\r
.top-16 {
  top: 4rem;
}\r
.-right-16 {
  right: -4rem;
}\r
.bottom-5 {
  bottom: 1.25rem;
}\r
.left-1\\/2 {
  left: 50%;
}\r
.top-0 {
  top: 0px;
}\r
.left-0 {
  left: 0px;
}\r
.right-0 {
  right: 0px;
}\r
.top-8 {
  top: 2rem;
}\r
.top-1 {
  top: 0.25rem;
}\r
.-left-16 {
  left: -4rem;
}\r
.top-14 {
  top: 3.5rem;
}\r
.top-3 {
  top: 0.75rem;
}\r
.right-2\\.5 {
  right: 0.625rem;
}\r
.bottom-2\\.5 {
  bottom: 0.625rem;
}\r
.right-2 {
  right: 0.5rem;
}\r
.bottom-2 {
  bottom: 0.5rem;
}\r
.-left-3 {
  left: -0.75rem;
}\r
.-left-1\\.5 {
  left: -0.375rem;
}\r
.z-10 {
  z-index: 10;
}\r
.z-30 {
  z-index: 30;
}\r
.z-50 {
  z-index: 50;
}\r
.z-0 {
  z-index: 0;
}\r
.-z-10 {
  z-index: -10;
}\r
.z-40 {
  z-index: 40;
}\r
.z-20 {
  z-index: 20;
}\r
.m-2 {
  margin: 0.5rem;
}\r
.m-4 {
  margin: 1rem;
}\r
.m-1 {
  margin: 0.25rem;
}\r
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}\r
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}\r
.-mx-1\\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}\r
.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}\r
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}\r
.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}\r
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}\r
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}\r
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}\r
.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}\r
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}\r
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}\r
.mr-6 {
  margin-right: 1.5rem;
}\r
.mr-2 {
  margin-right: 0.5rem;
}\r
.mb-4 {
  margin-bottom: 1rem;
}\r
.ml-auto {
  margin-left: auto;
}\r
.mr-3 {
  margin-right: 0.75rem;
}\r
.ml-1 {
  margin-left: 0.25rem;
}\r
.mb-2 {
  margin-bottom: 0.5rem;
}\r
.ml-2 {
  margin-left: 0.5rem;
}\r
.-mr-1 {
  margin-right: -0.25rem;
}\r
.mb-5 {
  margin-bottom: 1.25rem;
}\r
.ml-3 {
  margin-left: 0.75rem;
}\r
.mt-2\\.5 {
  margin-top: 0.625rem;
}\r
.mt-2 {
  margin-top: 0.5rem;
}\r
.mb-3 {
  margin-bottom: 0.75rem;
}\r
.mb-1 {
  margin-bottom: 0.25rem;
}\r
.mt-4 {
  margin-top: 1rem;
}\r
.mt-6 {
  margin-top: 1.5rem;
}\r
.mb-6 {
  margin-bottom: 1.5rem;
}\r
.mr-4 {
  margin-right: 1rem;
}\r
.mt-3 {
  margin-top: 0.75rem;
}\r
.mt-1 {
  margin-top: 0.25rem;
}\r
.ml-0 {
  margin-left: 0px;
}\r
.-mb-px {
  margin-bottom: -1px;
}\r
.mb-10 {
  margin-bottom: 2.5rem;
}\r
.ml-6 {
  margin-left: 1.5rem;
}\r
.mr-1 {
  margin-right: 0.25rem;
}\r
.ml-4 {
  margin-left: 1rem;
}\r
.mt-1\\.5 {
  margin-top: 0.375rem;
}\r
.block {
  display: block;
}\r
.\\!block {
  display: block !important;
}\r
.inline-block {
  display: inline-block;
}\r
.inline {
  display: inline;
}\r
.flex {
  display: flex;
}\r
.inline-flex {
  display: inline-flex;
}\r
.table {
  display: table;
}\r
.\\!table {
  display: table !important;
}\r
.flow-root {
  display: flow-root;
}\r
.grid {
  display: grid;
}\r
.contents {
  display: contents;
}\r
.hidden {
  display: none;
}\r
.\\!hidden {
  display: none !important;
}\r
.h-96 {
  height: 24rem;
}\r
.h-6 {
  height: 1.5rem;
}\r
.h-8 {
  height: 2rem;
}\r
.h-5 {
  height: 1.25rem;
}\r
.h-10 {
  height: 2.5rem;
}\r
.h-12 {
  height: 3rem;
}\r
.h-4 {
  height: 1rem;
}\r
.h-24 {
  height: 6rem;
}\r
.h-56 {
  height: 14rem;
}\r
.h-3 {
  height: 0.75rem;
}\r
.h-full {
  height: 100%;
}\r
.h-1 {
  height: 0.25rem;
}\r
.h-2 {
  height: 0.5rem;
}\r
.h-7 {
  height: 1.75rem;
}\r
.h-2\\.5 {
  height: 0.625rem;
}\r
.h-0\\.5 {
  height: 0.125rem;
}\r
.h-0 {
  height: 0px;
}\r
.w-full {
  width: 100%;
}\r
.w-8 {
  width: 2rem;
}\r
.w-5 {
  width: 1.25rem;
}\r
.w-10 {
  width: 2.5rem;
}\r
.w-12 {
  width: 3rem;
}\r
.w-4 {
  width: 1rem;
}\r
.w-6 {
  width: 1.5rem;
}\r
.w-44 {
  width: 11rem;
}\r
.w-24 {
  width: 6rem;
}\r
.w-3 {
  width: 0.75rem;
}\r
.w-11 {
  width: 2.75rem;
}\r
.w-9 {
  width: 2.25rem;
}\r
.w-14 {
  width: 3.5rem;
}\r
.w-48 {
  width: 12rem;
}\r
.w-2\\/4 {
  width: 50%;
}\r
.w-1 {
  width: 0.25rem;
}\r
.w-32 {
  width: 8rem;
}\r
.w-64 {
  width: 16rem;
}\r
.w-80 {
  width: 20rem;
}\r
.w-fit {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}\r
.w-2 {
  width: 0.5rem;
}\r
.min-w-0 {
  min-width: 0px;
}\r
.max-w-sm {
  max-width: 24rem;
}\r
.max-w-md {
  max-width: 28rem;
}\r
.max-w-7xl {
  max-width: 80rem;
}\r
.max-w-4xl {
  max-width: 56rem;
}\r
.max-w-2xl {
  max-width: 42rem;
}\r
.max-w-xs {
  max-width: 20rem;
}\r
.flex-auto {
  flex: 1 1 auto;
}\r
.flex-1 {
  flex: 1 1 0%;
}\r
.flex-shrink-0 {
  flex-shrink: 0;
}\r
.shrink-0 {
  flex-shrink: 0;
}\r
.origin-\\[0\\] {
  transform-origin: 0;
}\r
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
@-webkit-keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
.animate-spin {
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
}\r
.cursor-not-allowed {
  cursor: not-allowed;
}\r
.cursor-pointer {
  cursor: pointer;
}\r
.list-none {
  list-style-type: none;
}\r
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}\r
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}\r
.flex-row {
  flex-direction: row;
}\r
.flex-col {
  flex-direction: column;
}\r
.flex-wrap {
  flex-wrap: wrap;
}\r
.items-start {
  align-items: flex-start;
}\r
.items-center {
  align-items: center;
}\r
.justify-end {
  justify-content: flex-end;
}\r
.justify-center {
  justify-content: center;
}\r
.justify-between {
  justify-content: space-between;
}\r
.gap-2 {
  gap: 0.5rem;
}\r
.gap-8 {
  gap: 2rem;
}\r
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}\r
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}\r
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}\r
.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}\r
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}\r
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}\r
.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}\r
.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}\r
.self-center {
  align-self: center;
}\r
.overflow-auto {
  overflow: auto;
}\r
.overflow-hidden {
  overflow: hidden;
}\r
.overflow-x-auto {
  overflow-x: auto;
}\r
.overflow-y-auto {
  overflow-y: auto;
}\r
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}\r
.whitespace-nowrap {
  white-space: nowrap;
}\r
.rounded {
  border-radius: 0.25rem;
}\r
.rounded-lg {
  border-radius: 0.5rem;
}\r
.rounded-full {
  border-radius: 9999px;
}\r
.rounded-md {
  border-radius: 0.375rem;
}\r
.rounded-none {
  border-radius: 0px;
}\r
.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}\r
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}\r
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}\r
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}\r
.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}\r
.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}\r
.border {
  border-width: 1px;
}\r
.border-2 {
  border-width: 2px;
}\r
.border-0 {
  border-width: 0px;
}\r
.border-b {
  border-bottom-width: 1px;
}\r
.border-t-0 {
  border-top-width: 0px;
}\r
.border-t-4 {
  border-top-width: 4px;
}\r
.border-t {
  border-top-width: 1px;
}\r
.border-l {
  border-left-width: 1px;
}\r
.border-b-2 {
  border-bottom-width: 2px;
}\r
.border-r-0 {
  border-right-width: 0px;
}\r
.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
}\r
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}\r
.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}\r
.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}\r
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-border-opacity));
}\r
.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-border-opacity));
}\r
.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-border-opacity));
}\r
.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-border-opacity));
}\r
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}\r
.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(195 221 253 / var(--tw-border-opacity));
}\r
.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(251 213 213 / var(--tw-border-opacity));
}\r
.border-yellow-200 {
  --tw-border-opacity: 1;
  border-color: rgb(252 233 106 / var(--tw-border-opacity));
}\r
.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(188 240 218 / var(--tw-border-opacity));
}\r
.border-indigo-200 {
  --tw-border-opacity: 1;
  border-color: rgb(205 219 254 / var(--tw-border-opacity));
}\r
.border-purple-200 {
  --tw-border-opacity: 1;
  border-color: rgb(220 215 254 / var(--tw-border-opacity));
}\r
.border-pink-200 {
  --tw-border-opacity: 1;
  border-color: rgb(250 209 232 / var(--tw-border-opacity));
}\r
.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.border-transparent {
  border-color: transparent;
}\r
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}\r
.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}\r
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.bg-transparent {
  background-color: transparent;
}\r
.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}\r
.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}\r
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}\r
.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}\r
.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.bg-purple-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}\r
.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}\r
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 245 255 / var(--tw-bg-opacity));
}\r
.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 236 220 / var(--tw-bg-opacity));
}\r
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}\r
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}\r
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-400 {
  --tw-gradient-from: #22d3ee;
  --tw-gradient-to: rgb(34 211 238 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-400 {
  --tw-gradient-from: #16BDCA;
  --tw-gradient-to: rgb(22 189 202 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-lime-200 {
  --tw-gradient-from: #d9f99d;
  --tw-gradient-to: rgb(217 249 157 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-400 {
  --tw-gradient-from: #F98080;
  --tw-gradient-to: rgb(249 128 128 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-400 {
  --tw-gradient-from: #F17EB8;
  --tw-gradient-to: rgb(241 126 184 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-blue-500 {
  --tw-gradient-from: #3F83F8;
  --tw-gradient-to: rgb(63 131 248 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-200 {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.via-green-500 {
  --tw-gradient-to: rgb(14 159 110 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E, var(--tw-gradient-to);
}\r
.via-cyan-500 {
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4, var(--tw-gradient-to);
}\r
.via-teal-500 {
  --tw-gradient-to: rgb(6 148 162 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0694A2, var(--tw-gradient-to);
}\r
.via-lime-400 {
  --tw-gradient-to: rgb(163 230 53 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635, var(--tw-gradient-to);
}\r
.via-red-500 {
  --tw-gradient-to: rgb(240 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F05252, var(--tw-gradient-to);
}\r
.via-pink-500 {
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #E74694, var(--tw-gradient-to);
}\r
.via-purple-600 {
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2, var(--tw-gradient-to);
}\r
.via-blue-600 {
  --tw-gradient-to: rgb(28 100 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2, var(--tw-gradient-to);
}\r
.via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.to-green-600 {
  --tw-gradient-to: #057A55;
}\r
.to-cyan-600 {
  --tw-gradient-to: #0891b2;
}\r
.to-teal-600 {
  --tw-gradient-to: #047481;
}\r
.to-lime-500 {
  --tw-gradient-to: #84cc16;
}\r
.to-red-600 {
  --tw-gradient-to: #E02424;
}\r
.to-pink-600 {
  --tw-gradient-to: #D61F69;
}\r
.to-purple-700 {
  --tw-gradient-to: #6C2BD9;
}\r
.to-blue-700 {
  --tw-gradient-to: #1A56DB;
}\r
.to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.to-lime-200 {
  --tw-gradient-to: #d9f99d;
}\r
.to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.fill-blue-600 {
  fill: #1C64F2;
}\r
.fill-gray-600 {
  fill: #4B5563;
}\r
.fill-green-500 {
  fill: #0E9F6E;
}\r
.fill-red-600 {
  fill: #E02424;
}\r
.fill-yellow-400 {
  fill: #E3A008;
}\r
.fill-pink-600 {
  fill: #D61F69;
}\r
.fill-purple-600 {
  fill: #7E3AF2;
}\r
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}\r
.p-2 {
  padding: 0.5rem;
}\r
.p-6 {
  padding: 1.5rem;
}\r
.p-4 {
  padding: 1rem;
}\r
.p-5 {
  padding: 1.25rem;
}\r
.p-1\\.5 {
  padding: 0.375rem;
}\r
.p-1 {
  padding: 0.25rem;
}\r
.p-0\\.5 {
  padding: 0.125rem;
}\r
.p-0 {
  padding: 0px;
}\r
.p-8 {
  padding: 2rem;
}\r
.p-2\\.5 {
  padding: 0.625rem;
}\r
.p-3 {
  padding: 0.75rem;
}\r
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}\r
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}\r
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}\r
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}\r
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}\r
.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}\r
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}\r
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}\r
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}\r
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}\r
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}\r
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}\r
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}\r
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}\r
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}\r
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}\r
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}\r
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}\r
.pb-5 {
  padding-bottom: 1.25rem;
}\r
.pt-4 {
  padding-top: 1rem;
}\r
.pb-10 {
  padding-bottom: 2.5rem;
}\r
.pl-10 {
  padding-left: 2.5rem;
}\r
.pl-3 {
  padding-left: 0.75rem;
}\r
.pb-4 {
  padding-bottom: 1rem;
}\r
.pr-4 {
  padding-right: 1rem;
}\r
.pl-4 {
  padding-left: 1rem;
}\r
.pl-2\\.5 {
  padding-left: 0.625rem;
}\r
.pl-2 {
  padding-left: 0.5rem;
}\r
.pl-11 {
  padding-left: 2.75rem;
}\r
.text-left {
  text-align: left;
}\r
.text-center {
  text-align: center;
}\r
.text-right {
  text-align: right;
}\r
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}\r
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}\r
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}\r
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}\r
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}\r
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}\r
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}\r
.font-bold {
  font-weight: 700;
}\r
.font-medium {
  font-weight: 500;
}\r
.font-semibold {
  font-weight: 600;
}\r
.font-normal {
  font-weight: 400;
}\r
.font-light {
  font-weight: 300;
}\r
.uppercase {
  text-transform: uppercase;
}\r
.italic {
  font-style: italic;
}\r
.leading-tight {
  line-height: 1.25;
}\r
.leading-normal {
  line-height: 1.5;
}\r
.leading-none {
  line-height: 1;
}\r
.leading-relaxed {
  line-height: 1.625;
}\r
.tracking-tight {
  letter-spacing: -0.025em;
}\r
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}\r
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(200 30 30 / var(--tw-text-opacity));
}\r
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgb(142 75 16 / var(--tw-text-opacity));
}\r
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(194 120 3 / var(--tw-text-opacity));
}\r
.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(4 108 78 / var(--tw-text-opacity));
}\r
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(81 69 205 / var(--tw-text-opacity));
}\r
.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(104 117 245 / var(--tw-text-opacity));
}\r
.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}\r
.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}\r
.text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(191 18 93 / var(--tw-text-opacity));
}\r
.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(231 70 148 / var(--tw-text-opacity));
}\r
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.text-blue-900 {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(4 116 129 / var(--tw-text-opacity));
}\r
.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(255 90 31 / var(--tw-text-opacity));
}\r
.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}\r
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(138 44 13 / var(--tw-text-opacity));
}\r
.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.opacity-60 {
  opacity: 0.6;
}\r
.opacity-40 {
  opacity: 0.4;
}\r
.opacity-0 {
  opacity: 0;
}\r
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-green-500\\/50 {
  --tw-shadow-color: rgb(14 159 110 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-cyan-500\\/50 {
  --tw-shadow-color: rgb(6 182 212 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-teal-500\\/50 {
  --tw-shadow-color: rgb(6 148 162 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-lime-500\\/50 {
  --tw-shadow-color: rgb(132 204 22 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-red-500\\/50 {
  --tw-shadow-color: rgb(240 82 82 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-pink-500\\/50 {
  --tw-shadow-color: rgb(231 70 148 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-purple-500\\/50 {
  --tw-shadow-color: rgb(144 97 249 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-blue-500\\/50 {
  --tw-shadow-color: rgb(63 131 248 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.outline {
  outline-style: solid;
}\r
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.duration-75 {
  transition-duration: 75ms;
}\r
.duration-300 {
  transition-duration: 300ms;
}\r
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}\r
.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}\r
.after\\:top-0\\.5::after {
  content: var(--tw-content);
  top: 0.125rem;
}\r
.after\\:left-\\[2px\\]::after {
  content: var(--tw-content);
  left: 2px;
}\r
.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}\r
.after\\:top-\\[2px\\]::after {
  content: var(--tw-content);
  top: 2px;
}\r
.after\\:left-\\[4px\\]::after {
  content: var(--tw-content);
  left: 4px;
}\r
.after\\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}\r
.after\\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}\r
.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}\r
.after\\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}\r
.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}\r
.after\\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}\r
.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}\r
.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}\r
.after\\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}\r
.first\\:rounded-l-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.last\\:rounded-r-md:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}\r
.last\\:border-r:last-child {
  border-right-width: 1px;
}\r
.odd\\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.even\\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.hover\\:bg-gradient-to-l:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}\r
.hover\\:from-teal-200:hover {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.hover\\:text-red-900:hover {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.hover\\:text-yellow-900:hover {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.hover\\:text-green-900:hover {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.hover\\:text-indigo-900:hover {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.hover\\:text-purple-900:hover {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.hover\\:text-pink-900:hover {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.hover\\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.focus\\:z-10:focus {
  z-index: 10;
}\r
.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.focus\\:border-transparent:focus {
  border-color: transparent;
}\r
.focus\\:border-blue-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.focus\\:bg-white:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(195 221 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(26 86 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(165 243 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));
}\r
.focus\\:ring-orange-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));
}\r
.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}\r
.group:hover .group-hover\\:bg-opacity-0 {
  --tw-bg-opacity: 0;
}\r
.group:hover .group-hover\\:from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.group:hover .group-hover\\:to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.group:hover .group-hover\\:to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.group:hover .group-hover\\:to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.group:hover .group-hover\\:to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.group:hover .group-hover\\:to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.group:hover .group-hover\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 116 129 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 90 31 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:checked ~ .peer-checked\\:after\\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:left-0 {
  left: 0px;
}\r
.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.peer:focus ~ .peer-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.peer:focus ~ .peer-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.peer:focus ~ .peer-focus\\:ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));
}\r
.dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}\r
.dark .dark\\:divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}\r
.dark .dark\\:border-none {
  border-style: none;
}\r
.dark .dark\\:border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-600 {
  --tw-border-opacity: 1;
  border-color: rgb(159 88 10 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(88 80 236 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(126 58 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-600 {
  --tw-border-opacity: 1;
  border-color: rgb(214 31 105 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.dark .dark\\:bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800\\/30 {
  background-color: rgb(31 41 55 / 0.3);
}\r
.dark .dark\\:bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(35 56 118 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 217 189 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-opacity-80 {
  --tw-bg-opacity: 0.8;
}\r
.dark .dark\\:text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(159 88 10 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(88 80 236 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-600 {
  --tw-text-opacity: 1;
  color: rgb(214 31 105 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-300 {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-300 {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-200 {
  --tw-text-opacity: 1;
  color: rgb(252 233 106 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-orange-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(195 221 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-200 {
  --tw-text-opacity: 1;
  color: rgb(188 240 218 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-200 {
  --tw-text-opacity: 1;
  color: rgb(251 213 213 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-200 {
  --tw-text-opacity: 1;
  color: rgb(220 215 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-200 {
  --tw-text-opacity: 1;
  color: rgb(205 219 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.dark .dark\\:shadow-green-800\\/80 {
  --tw-shadow-color: rgb(3 84 63 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-cyan-800\\/80 {
  --tw-shadow-color: rgb(21 94 117 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-teal-800\\/80 {
  --tw-shadow-color: rgb(5 80 92 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-lime-800\\/80 {
  --tw-shadow-color: rgb(63 98 18 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-red-800\\/80 {
  --tw-shadow-color: rgb(155 28 28 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-pink-800\\/80 {
  --tw-shadow-color: rgb(153 21 75 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-purple-800\\/80 {
  --tw-shadow-color: rgb(85 33 181 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-blue-800\\/80 {
  --tw-shadow-color: rgb(30 66 159 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:ring-gray-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-gray-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-offset-gray-800 {
  --tw-ring-offset-color: #1F2937;
}\r
.dark .odd\\:dark\\:bg-gray-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .even\\:dark\\:bg-gray-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:border-gray-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:border-gray-700:hover {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 180 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 202 21 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(132 225 188 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(180 198 252 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(202 191 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(164 202 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:focus\\:bg-gray-700:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-cyan-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-lime-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-pink-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-indigo-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-orange-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}\r
.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60 {
  background-color: rgb(31 41 55 / 0.6);
}\r
.dark .group:hover .dark\\:group-hover\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70 {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}\r
.peer:focus ~ .dark .peer-focus\\:dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));
}\r
@media (min-width: 640px) {

  .sm\\:order-last {
    order: 9999;
  }

  .sm\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:inline-block {
    display: inline-block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-6 {
    height: 1.5rem;
  }

  .sm\\:h-64 {
    height: 16rem;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:h-7 {
    height: 1.75rem;
  }

  .sm\\:w-6 {
    width: 1.5rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:gap-6 {
    gap: 1.5rem;
  }

  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:p-8 {
    padding: 2rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .sm\\:pb-6 {
    padding-bottom: 1.5rem;
  }

  .sm\\:pr-8 {
    padding-right: 2rem;
  }

  .sm\\:text-center {
    text-align: center;
  }

  .sm\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:ring-8 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
}\r
@media (min-width: 768px) {

  .md\\:order-1 {
    order: 1;
  }

  .md\\:ml-2 {
    margin-left: 0.5rem;
  }

  .md\\:mr-6 {
    margin-right: 1.5rem;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:w-48 {
    width: 12rem;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-xl {
    max-width: 36rem;
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:items-center {
    align-items: center;
  }

  .md\\:justify-between {
    justify-content: space-between;
  }

  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:rounded-none {
    border-radius: 0px;
  }

  .md\\:rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .md\\:border-0 {
    border-width: 0px;
  }

  .md\\:bg-transparent {
    background-color: transparent;
  }

  .md\\:p-6 {
    padding: 1.5rem;
  }

  .md\\:p-0 {
    padding: 0px;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:font-medium {
    font-weight: 500;
  }

  .md\\:text-blue-700 {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .md\\:hover\\:text-blue-700:hover {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .dark .md\\:dark\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .dark .md\\:dark\\:hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}\r
@media (min-width: 1024px) {

  .lg\\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .lg\\:mt-6 {
    margin-top: 1.5rem;
  }

  .lg\\:p-8 {
    padding: 2rem;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}\r
@media (min-width: 1280px) {

  .xl\\:h-80 {
    height: 20rem;
  }

  .xl\\:pb-8 {
    padding-bottom: 2rem;
  }
}\r
@media (min-width: 1536px) {

  .\\32xl\\:h-96 {
    height: 24rem;
  }
}`)();
var ContactList_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => `/*
! tailwindcss v3.1.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #E5E7EB; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::-webkit-file-upload-button:hover {
  background: #374151;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

.dark input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::-webkit-file-upload-button:hover {
  background: #6B7280;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

input[type="range"].range-sm::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-webkit-slider-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

input[type="range"].range-sm::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

.tooltip-arrow,.tooltip-arrow:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.tooltip-arrow {
  visibility: hidden;
}

.tooltip-arrow:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #E5E7EB;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}\r
	h1 {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
	h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
	h3 {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
.container {
  width: 100%;
}\r
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}\r
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}\r
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}\r
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}\r
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}\r
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}\r
.pointer-events-none {
  pointer-events: none;
}\r
.visible {
  visibility: visible;
}\r
.\\!visible {
  visibility: visible !important;
}\r
.invisible {
  visibility: hidden;
}\r
.static {
  position: static;
}\r
.fixed {
  position: fixed;
}\r
.absolute {
  position: absolute;
}\r
.relative {
  position: relative;
}\r
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}\r
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}\r
.-left-1 {
  left: -0.25rem;
}\r
.top-16 {
  top: 4rem;
}\r
.-right-16 {
  right: -4rem;
}\r
.bottom-5 {
  bottom: 1.25rem;
}\r
.left-1\\/2 {
  left: 50%;
}\r
.top-0 {
  top: 0px;
}\r
.left-0 {
  left: 0px;
}\r
.right-0 {
  right: 0px;
}\r
.top-8 {
  top: 2rem;
}\r
.top-1 {
  top: 0.25rem;
}\r
.-left-16 {
  left: -4rem;
}\r
.top-14 {
  top: 3.5rem;
}\r
.top-3 {
  top: 0.75rem;
}\r
.right-2\\.5 {
  right: 0.625rem;
}\r
.bottom-2\\.5 {
  bottom: 0.625rem;
}\r
.right-2 {
  right: 0.5rem;
}\r
.bottom-2 {
  bottom: 0.5rem;
}\r
.-left-3 {
  left: -0.75rem;
}\r
.-left-1\\.5 {
  left: -0.375rem;
}\r
.z-10 {
  z-index: 10;
}\r
.z-30 {
  z-index: 30;
}\r
.z-50 {
  z-index: 50;
}\r
.z-0 {
  z-index: 0;
}\r
.-z-10 {
  z-index: -10;
}\r
.z-40 {
  z-index: 40;
}\r
.z-20 {
  z-index: 20;
}\r
.m-2 {
  margin: 0.5rem;
}\r
.m-4 {
  margin: 1rem;
}\r
.m-1 {
  margin: 0.25rem;
}\r
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}\r
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}\r
.-mx-1\\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}\r
.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}\r
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}\r
.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}\r
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}\r
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}\r
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}\r
.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}\r
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}\r
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}\r
.mr-6 {
  margin-right: 1.5rem;
}\r
.mr-2 {
  margin-right: 0.5rem;
}\r
.mb-4 {
  margin-bottom: 1rem;
}\r
.ml-auto {
  margin-left: auto;
}\r
.mr-3 {
  margin-right: 0.75rem;
}\r
.ml-1 {
  margin-left: 0.25rem;
}\r
.mb-2 {
  margin-bottom: 0.5rem;
}\r
.ml-2 {
  margin-left: 0.5rem;
}\r
.-mr-1 {
  margin-right: -0.25rem;
}\r
.mb-5 {
  margin-bottom: 1.25rem;
}\r
.ml-3 {
  margin-left: 0.75rem;
}\r
.mt-2\\.5 {
  margin-top: 0.625rem;
}\r
.mt-2 {
  margin-top: 0.5rem;
}\r
.mb-3 {
  margin-bottom: 0.75rem;
}\r
.mb-1 {
  margin-bottom: 0.25rem;
}\r
.mt-4 {
  margin-top: 1rem;
}\r
.mt-6 {
  margin-top: 1.5rem;
}\r
.mb-6 {
  margin-bottom: 1.5rem;
}\r
.mr-4 {
  margin-right: 1rem;
}\r
.mt-3 {
  margin-top: 0.75rem;
}\r
.mt-1 {
  margin-top: 0.25rem;
}\r
.ml-0 {
  margin-left: 0px;
}\r
.-mb-px {
  margin-bottom: -1px;
}\r
.mb-10 {
  margin-bottom: 2.5rem;
}\r
.ml-6 {
  margin-left: 1.5rem;
}\r
.mr-1 {
  margin-right: 0.25rem;
}\r
.ml-4 {
  margin-left: 1rem;
}\r
.mt-1\\.5 {
  margin-top: 0.375rem;
}\r
.block {
  display: block;
}\r
.\\!block {
  display: block !important;
}\r
.inline-block {
  display: inline-block;
}\r
.inline {
  display: inline;
}\r
.flex {
  display: flex;
}\r
.inline-flex {
  display: inline-flex;
}\r
.table {
  display: table;
}\r
.\\!table {
  display: table !important;
}\r
.flow-root {
  display: flow-root;
}\r
.grid {
  display: grid;
}\r
.contents {
  display: contents;
}\r
.hidden {
  display: none;
}\r
.\\!hidden {
  display: none !important;
}\r
.h-96 {
  height: 24rem;
}\r
.h-6 {
  height: 1.5rem;
}\r
.h-8 {
  height: 2rem;
}\r
.h-5 {
  height: 1.25rem;
}\r
.h-10 {
  height: 2.5rem;
}\r
.h-12 {
  height: 3rem;
}\r
.h-4 {
  height: 1rem;
}\r
.h-24 {
  height: 6rem;
}\r
.h-56 {
  height: 14rem;
}\r
.h-3 {
  height: 0.75rem;
}\r
.h-full {
  height: 100%;
}\r
.h-1 {
  height: 0.25rem;
}\r
.h-2 {
  height: 0.5rem;
}\r
.h-7 {
  height: 1.75rem;
}\r
.h-2\\.5 {
  height: 0.625rem;
}\r
.h-0\\.5 {
  height: 0.125rem;
}\r
.h-0 {
  height: 0px;
}\r
.w-full {
  width: 100%;
}\r
.w-8 {
  width: 2rem;
}\r
.w-5 {
  width: 1.25rem;
}\r
.w-10 {
  width: 2.5rem;
}\r
.w-12 {
  width: 3rem;
}\r
.w-4 {
  width: 1rem;
}\r
.w-6 {
  width: 1.5rem;
}\r
.w-44 {
  width: 11rem;
}\r
.w-24 {
  width: 6rem;
}\r
.w-3 {
  width: 0.75rem;
}\r
.w-11 {
  width: 2.75rem;
}\r
.w-9 {
  width: 2.25rem;
}\r
.w-14 {
  width: 3.5rem;
}\r
.w-48 {
  width: 12rem;
}\r
.w-2\\/4 {
  width: 50%;
}\r
.w-1 {
  width: 0.25rem;
}\r
.w-32 {
  width: 8rem;
}\r
.w-64 {
  width: 16rem;
}\r
.w-80 {
  width: 20rem;
}\r
.w-fit {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}\r
.w-2 {
  width: 0.5rem;
}\r
.min-w-0 {
  min-width: 0px;
}\r
.max-w-sm {
  max-width: 24rem;
}\r
.max-w-md {
  max-width: 28rem;
}\r
.max-w-7xl {
  max-width: 80rem;
}\r
.max-w-4xl {
  max-width: 56rem;
}\r
.max-w-2xl {
  max-width: 42rem;
}\r
.max-w-xs {
  max-width: 20rem;
}\r
.flex-auto {
  flex: 1 1 auto;
}\r
.flex-1 {
  flex: 1 1 0%;
}\r
.flex-shrink-0 {
  flex-shrink: 0;
}\r
.shrink-0 {
  flex-shrink: 0;
}\r
.origin-\\[0\\] {
  transform-origin: 0;
}\r
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
@-webkit-keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
.animate-spin {
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
}\r
.cursor-not-allowed {
  cursor: not-allowed;
}\r
.cursor-pointer {
  cursor: pointer;
}\r
.list-none {
  list-style-type: none;
}\r
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}\r
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}\r
.flex-row {
  flex-direction: row;
}\r
.flex-col {
  flex-direction: column;
}\r
.flex-wrap {
  flex-wrap: wrap;
}\r
.items-start {
  align-items: flex-start;
}\r
.items-center {
  align-items: center;
}\r
.justify-end {
  justify-content: flex-end;
}\r
.justify-center {
  justify-content: center;
}\r
.justify-between {
  justify-content: space-between;
}\r
.gap-2 {
  gap: 0.5rem;
}\r
.gap-8 {
  gap: 2rem;
}\r
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}\r
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}\r
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}\r
.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}\r
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}\r
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}\r
.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}\r
.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}\r
.self-center {
  align-self: center;
}\r
.overflow-auto {
  overflow: auto;
}\r
.overflow-hidden {
  overflow: hidden;
}\r
.overflow-x-auto {
  overflow-x: auto;
}\r
.overflow-y-auto {
  overflow-y: auto;
}\r
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}\r
.whitespace-nowrap {
  white-space: nowrap;
}\r
.rounded {
  border-radius: 0.25rem;
}\r
.rounded-lg {
  border-radius: 0.5rem;
}\r
.rounded-full {
  border-radius: 9999px;
}\r
.rounded-md {
  border-radius: 0.375rem;
}\r
.rounded-none {
  border-radius: 0px;
}\r
.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}\r
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}\r
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}\r
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}\r
.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}\r
.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}\r
.border {
  border-width: 1px;
}\r
.border-2 {
  border-width: 2px;
}\r
.border-0 {
  border-width: 0px;
}\r
.border-b {
  border-bottom-width: 1px;
}\r
.border-t-0 {
  border-top-width: 0px;
}\r
.border-t-4 {
  border-top-width: 4px;
}\r
.border-t {
  border-top-width: 1px;
}\r
.border-l {
  border-left-width: 1px;
}\r
.border-b-2 {
  border-bottom-width: 2px;
}\r
.border-r-0 {
  border-right-width: 0px;
}\r
.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
}\r
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}\r
.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}\r
.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}\r
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-border-opacity));
}\r
.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-border-opacity));
}\r
.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-border-opacity));
}\r
.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-border-opacity));
}\r
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}\r
.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(195 221 253 / var(--tw-border-opacity));
}\r
.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(251 213 213 / var(--tw-border-opacity));
}\r
.border-yellow-200 {
  --tw-border-opacity: 1;
  border-color: rgb(252 233 106 / var(--tw-border-opacity));
}\r
.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(188 240 218 / var(--tw-border-opacity));
}\r
.border-indigo-200 {
  --tw-border-opacity: 1;
  border-color: rgb(205 219 254 / var(--tw-border-opacity));
}\r
.border-purple-200 {
  --tw-border-opacity: 1;
  border-color: rgb(220 215 254 / var(--tw-border-opacity));
}\r
.border-pink-200 {
  --tw-border-opacity: 1;
  border-color: rgb(250 209 232 / var(--tw-border-opacity));
}\r
.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.border-transparent {
  border-color: transparent;
}\r
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}\r
.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}\r
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.bg-transparent {
  background-color: transparent;
}\r
.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}\r
.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}\r
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}\r
.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}\r
.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.bg-purple-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}\r
.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}\r
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 245 255 / var(--tw-bg-opacity));
}\r
.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 236 220 / var(--tw-bg-opacity));
}\r
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}\r
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}\r
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-400 {
  --tw-gradient-from: #22d3ee;
  --tw-gradient-to: rgb(34 211 238 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-400 {
  --tw-gradient-from: #16BDCA;
  --tw-gradient-to: rgb(22 189 202 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-lime-200 {
  --tw-gradient-from: #d9f99d;
  --tw-gradient-to: rgb(217 249 157 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-400 {
  --tw-gradient-from: #F98080;
  --tw-gradient-to: rgb(249 128 128 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-400 {
  --tw-gradient-from: #F17EB8;
  --tw-gradient-to: rgb(241 126 184 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-blue-500 {
  --tw-gradient-from: #3F83F8;
  --tw-gradient-to: rgb(63 131 248 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-200 {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.via-green-500 {
  --tw-gradient-to: rgb(14 159 110 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E, var(--tw-gradient-to);
}\r
.via-cyan-500 {
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4, var(--tw-gradient-to);
}\r
.via-teal-500 {
  --tw-gradient-to: rgb(6 148 162 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0694A2, var(--tw-gradient-to);
}\r
.via-lime-400 {
  --tw-gradient-to: rgb(163 230 53 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635, var(--tw-gradient-to);
}\r
.via-red-500 {
  --tw-gradient-to: rgb(240 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F05252, var(--tw-gradient-to);
}\r
.via-pink-500 {
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #E74694, var(--tw-gradient-to);
}\r
.via-purple-600 {
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2, var(--tw-gradient-to);
}\r
.via-blue-600 {
  --tw-gradient-to: rgb(28 100 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2, var(--tw-gradient-to);
}\r
.via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.to-green-600 {
  --tw-gradient-to: #057A55;
}\r
.to-cyan-600 {
  --tw-gradient-to: #0891b2;
}\r
.to-teal-600 {
  --tw-gradient-to: #047481;
}\r
.to-lime-500 {
  --tw-gradient-to: #84cc16;
}\r
.to-red-600 {
  --tw-gradient-to: #E02424;
}\r
.to-pink-600 {
  --tw-gradient-to: #D61F69;
}\r
.to-purple-700 {
  --tw-gradient-to: #6C2BD9;
}\r
.to-blue-700 {
  --tw-gradient-to: #1A56DB;
}\r
.to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.to-lime-200 {
  --tw-gradient-to: #d9f99d;
}\r
.to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.fill-blue-600 {
  fill: #1C64F2;
}\r
.fill-gray-600 {
  fill: #4B5563;
}\r
.fill-green-500 {
  fill: #0E9F6E;
}\r
.fill-red-600 {
  fill: #E02424;
}\r
.fill-yellow-400 {
  fill: #E3A008;
}\r
.fill-pink-600 {
  fill: #D61F69;
}\r
.fill-purple-600 {
  fill: #7E3AF2;
}\r
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}\r
.p-2 {
  padding: 0.5rem;
}\r
.p-6 {
  padding: 1.5rem;
}\r
.p-4 {
  padding: 1rem;
}\r
.p-5 {
  padding: 1.25rem;
}\r
.p-1\\.5 {
  padding: 0.375rem;
}\r
.p-1 {
  padding: 0.25rem;
}\r
.p-0\\.5 {
  padding: 0.125rem;
}\r
.p-0 {
  padding: 0px;
}\r
.p-8 {
  padding: 2rem;
}\r
.p-2\\.5 {
  padding: 0.625rem;
}\r
.p-3 {
  padding: 0.75rem;
}\r
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}\r
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}\r
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}\r
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}\r
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}\r
.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}\r
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}\r
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}\r
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}\r
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}\r
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}\r
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}\r
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}\r
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}\r
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}\r
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}\r
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}\r
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}\r
.pb-5 {
  padding-bottom: 1.25rem;
}\r
.pt-4 {
  padding-top: 1rem;
}\r
.pb-10 {
  padding-bottom: 2.5rem;
}\r
.pl-10 {
  padding-left: 2.5rem;
}\r
.pl-3 {
  padding-left: 0.75rem;
}\r
.pb-4 {
  padding-bottom: 1rem;
}\r
.pr-4 {
  padding-right: 1rem;
}\r
.pl-4 {
  padding-left: 1rem;
}\r
.pl-2\\.5 {
  padding-left: 0.625rem;
}\r
.pl-2 {
  padding-left: 0.5rem;
}\r
.pl-11 {
  padding-left: 2.75rem;
}\r
.text-left {
  text-align: left;
}\r
.text-center {
  text-align: center;
}\r
.text-right {
  text-align: right;
}\r
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}\r
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}\r
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}\r
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}\r
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}\r
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}\r
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}\r
.font-bold {
  font-weight: 700;
}\r
.font-medium {
  font-weight: 500;
}\r
.font-semibold {
  font-weight: 600;
}\r
.font-normal {
  font-weight: 400;
}\r
.font-light {
  font-weight: 300;
}\r
.uppercase {
  text-transform: uppercase;
}\r
.italic {
  font-style: italic;
}\r
.leading-tight {
  line-height: 1.25;
}\r
.leading-normal {
  line-height: 1.5;
}\r
.leading-none {
  line-height: 1;
}\r
.leading-relaxed {
  line-height: 1.625;
}\r
.tracking-tight {
  letter-spacing: -0.025em;
}\r
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}\r
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(200 30 30 / var(--tw-text-opacity));
}\r
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgb(142 75 16 / var(--tw-text-opacity));
}\r
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(194 120 3 / var(--tw-text-opacity));
}\r
.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(4 108 78 / var(--tw-text-opacity));
}\r
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(81 69 205 / var(--tw-text-opacity));
}\r
.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(104 117 245 / var(--tw-text-opacity));
}\r
.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}\r
.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}\r
.text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(191 18 93 / var(--tw-text-opacity));
}\r
.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(231 70 148 / var(--tw-text-opacity));
}\r
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.text-blue-900 {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(4 116 129 / var(--tw-text-opacity));
}\r
.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(255 90 31 / var(--tw-text-opacity));
}\r
.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}\r
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(138 44 13 / var(--tw-text-opacity));
}\r
.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.opacity-60 {
  opacity: 0.6;
}\r
.opacity-40 {
  opacity: 0.4;
}\r
.opacity-0 {
  opacity: 0;
}\r
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-green-500\\/50 {
  --tw-shadow-color: rgb(14 159 110 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-cyan-500\\/50 {
  --tw-shadow-color: rgb(6 182 212 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-teal-500\\/50 {
  --tw-shadow-color: rgb(6 148 162 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-lime-500\\/50 {
  --tw-shadow-color: rgb(132 204 22 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-red-500\\/50 {
  --tw-shadow-color: rgb(240 82 82 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-pink-500\\/50 {
  --tw-shadow-color: rgb(231 70 148 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-purple-500\\/50 {
  --tw-shadow-color: rgb(144 97 249 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-blue-500\\/50 {
  --tw-shadow-color: rgb(63 131 248 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.outline {
  outline-style: solid;
}\r
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.duration-75 {
  transition-duration: 75ms;
}\r
.duration-300 {
  transition-duration: 300ms;
}\r
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}\r
.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}\r
.after\\:top-0\\.5::after {
  content: var(--tw-content);
  top: 0.125rem;
}\r
.after\\:left-\\[2px\\]::after {
  content: var(--tw-content);
  left: 2px;
}\r
.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}\r
.after\\:top-\\[2px\\]::after {
  content: var(--tw-content);
  top: 2px;
}\r
.after\\:left-\\[4px\\]::after {
  content: var(--tw-content);
  left: 4px;
}\r
.after\\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}\r
.after\\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}\r
.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}\r
.after\\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}\r
.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}\r
.after\\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}\r
.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}\r
.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}\r
.after\\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}\r
.first\\:rounded-l-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.last\\:rounded-r-md:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}\r
.last\\:border-r:last-child {
  border-right-width: 1px;
}\r
.odd\\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.even\\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.hover\\:bg-gradient-to-l:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}\r
.hover\\:from-teal-200:hover {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.hover\\:text-red-900:hover {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.hover\\:text-yellow-900:hover {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.hover\\:text-green-900:hover {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.hover\\:text-indigo-900:hover {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.hover\\:text-purple-900:hover {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.hover\\:text-pink-900:hover {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.hover\\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.focus\\:z-10:focus {
  z-index: 10;
}\r
.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.focus\\:border-transparent:focus {
  border-color: transparent;
}\r
.focus\\:border-blue-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.focus\\:bg-white:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(195 221 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(26 86 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(165 243 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));
}\r
.focus\\:ring-orange-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));
}\r
.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}\r
.group:hover .group-hover\\:bg-opacity-0 {
  --tw-bg-opacity: 0;
}\r
.group:hover .group-hover\\:from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.group:hover .group-hover\\:to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.group:hover .group-hover\\:to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.group:hover .group-hover\\:to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.group:hover .group-hover\\:to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.group:hover .group-hover\\:to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.group:hover .group-hover\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 116 129 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 90 31 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:checked ~ .peer-checked\\:after\\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:left-0 {
  left: 0px;
}\r
.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.peer:focus ~ .peer-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.peer:focus ~ .peer-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.peer:focus ~ .peer-focus\\:ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));
}\r
.dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}\r
.dark .dark\\:divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}\r
.dark .dark\\:border-none {
  border-style: none;
}\r
.dark .dark\\:border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-600 {
  --tw-border-opacity: 1;
  border-color: rgb(159 88 10 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(88 80 236 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(126 58 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-600 {
  --tw-border-opacity: 1;
  border-color: rgb(214 31 105 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.dark .dark\\:bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800\\/30 {
  background-color: rgb(31 41 55 / 0.3);
}\r
.dark .dark\\:bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(35 56 118 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 217 189 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-opacity-80 {
  --tw-bg-opacity: 0.8;
}\r
.dark .dark\\:text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(159 88 10 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(88 80 236 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-600 {
  --tw-text-opacity: 1;
  color: rgb(214 31 105 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-300 {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-300 {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-200 {
  --tw-text-opacity: 1;
  color: rgb(252 233 106 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-orange-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(195 221 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-200 {
  --tw-text-opacity: 1;
  color: rgb(188 240 218 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-200 {
  --tw-text-opacity: 1;
  color: rgb(251 213 213 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-200 {
  --tw-text-opacity: 1;
  color: rgb(220 215 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-200 {
  --tw-text-opacity: 1;
  color: rgb(205 219 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.dark .dark\\:shadow-green-800\\/80 {
  --tw-shadow-color: rgb(3 84 63 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-cyan-800\\/80 {
  --tw-shadow-color: rgb(21 94 117 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-teal-800\\/80 {
  --tw-shadow-color: rgb(5 80 92 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-lime-800\\/80 {
  --tw-shadow-color: rgb(63 98 18 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-red-800\\/80 {
  --tw-shadow-color: rgb(155 28 28 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-pink-800\\/80 {
  --tw-shadow-color: rgb(153 21 75 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-purple-800\\/80 {
  --tw-shadow-color: rgb(85 33 181 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-blue-800\\/80 {
  --tw-shadow-color: rgb(30 66 159 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:ring-gray-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-gray-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-offset-gray-800 {
  --tw-ring-offset-color: #1F2937;
}\r
.dark .odd\\:dark\\:bg-gray-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .even\\:dark\\:bg-gray-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:border-gray-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:border-gray-700:hover {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 180 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 202 21 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(132 225 188 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(180 198 252 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(202 191 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(164 202 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:focus\\:bg-gray-700:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-cyan-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-lime-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-pink-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-indigo-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-orange-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}\r
.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60 {
  background-color: rgb(31 41 55 / 0.6);
}\r
.dark .group:hover .dark\\:group-hover\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70 {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}\r
.peer:focus ~ .dark .peer-focus\\:dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));
}\r
@media (min-width: 640px) {

  .sm\\:order-last {
    order: 9999;
  }

  .sm\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:inline-block {
    display: inline-block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-6 {
    height: 1.5rem;
  }

  .sm\\:h-64 {
    height: 16rem;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:h-7 {
    height: 1.75rem;
  }

  .sm\\:w-6 {
    width: 1.5rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:gap-6 {
    gap: 1.5rem;
  }

  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:p-8 {
    padding: 2rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .sm\\:pb-6 {
    padding-bottom: 1.5rem;
  }

  .sm\\:pr-8 {
    padding-right: 2rem;
  }

  .sm\\:text-center {
    text-align: center;
  }

  .sm\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:ring-8 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
}\r
@media (min-width: 768px) {

  .md\\:order-1 {
    order: 1;
  }

  .md\\:ml-2 {
    margin-left: 0.5rem;
  }

  .md\\:mr-6 {
    margin-right: 1.5rem;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:w-48 {
    width: 12rem;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-xl {
    max-width: 36rem;
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:items-center {
    align-items: center;
  }

  .md\\:justify-between {
    justify-content: space-between;
  }

  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:rounded-none {
    border-radius: 0px;
  }

  .md\\:rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .md\\:border-0 {
    border-width: 0px;
  }

  .md\\:bg-transparent {
    background-color: transparent;
  }

  .md\\:p-6 {
    padding: 1.5rem;
  }

  .md\\:p-0 {
    padding: 0px;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:font-medium {
    font-weight: 500;
  }

  .md\\:text-blue-700 {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .md\\:hover\\:text-blue-700:hover {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .dark .md\\:dark\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .dark .md\\:dark\\:hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}\r
@media (min-width: 1024px) {

  .lg\\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .lg\\:mt-6 {
    margin-top: 1.5rem;
  }

  .lg\\:p-8 {
    padding: 2rem;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}\r
@media (min-width: 1280px) {

  .xl\\:h-80 {
    height: 20rem;
  }

  .xl\\:pb-8 {
    padding-bottom: 2rem;
  }
}\r
@media (min-width: 1536px) {

  .\\32xl\\:h-96 {
    height: 24rem;
  }
}`)();
var OutterWraper_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => `/*
! tailwindcss v3.1.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #E5E7EB; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::-webkit-file-upload-button:hover {
  background: #374151;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

.dark input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::-webkit-file-upload-button:hover {
  background: #6B7280;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

input[type="range"].range-sm::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-webkit-slider-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

input[type="range"].range-sm::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

.tooltip-arrow,.tooltip-arrow:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.tooltip-arrow {
  visibility: hidden;
}

.tooltip-arrow:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #E5E7EB;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}.pointer-events-none {
  pointer-events: none;
}.visible {
  visibility: visible;
}.\\!visible {
  visibility: visible !important;
}.invisible {
  visibility: hidden;
}.static {
  position: static;
}.fixed {
  position: fixed;
}.absolute {
  position: absolute;
}.relative {
  position: relative;
}.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}.inset-y-0 {
  top: 0px;
  bottom: 0px;
}.-left-1 {
  left: -0.25rem;
}.top-16 {
  top: 4rem;
}.-right-16 {
  right: -4rem;
}.bottom-5 {
  bottom: 1.25rem;
}.left-1\\/2 {
  left: 50%;
}.top-0 {
  top: 0px;
}.left-0 {
  left: 0px;
}.right-0 {
  right: 0px;
}.top-8 {
  top: 2rem;
}.top-1 {
  top: 0.25rem;
}.-left-16 {
  left: -4rem;
}.top-14 {
  top: 3.5rem;
}.top-3 {
  top: 0.75rem;
}.right-2\\.5 {
  right: 0.625rem;
}.bottom-2\\.5 {
  bottom: 0.625rem;
}.right-2 {
  right: 0.5rem;
}.bottom-2 {
  bottom: 0.5rem;
}.-left-3 {
  left: -0.75rem;
}.-left-1\\.5 {
  left: -0.375rem;
}.z-10 {
  z-index: 10;
}.z-30 {
  z-index: 30;
}.z-50 {
  z-index: 50;
}.z-0 {
  z-index: 0;
}.-z-10 {
  z-index: -10;
}.z-40 {
  z-index: 40;
}.z-20 {
  z-index: 20;
}.m-2 {
  margin: 0.5rem;
}.m-4 {
  margin: 1rem;
}.m-1 {
  margin: 0.25rem;
}.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}.-mx-1\\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}.mx-auto {
  margin-left: auto;
  margin-right: auto;
}.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}.mr-6 {
  margin-right: 1.5rem;
}.mr-2 {
  margin-right: 0.5rem;
}.mb-4 {
  margin-bottom: 1rem;
}.ml-auto {
  margin-left: auto;
}.mr-3 {
  margin-right: 0.75rem;
}.ml-1 {
  margin-left: 0.25rem;
}.mb-2 {
  margin-bottom: 0.5rem;
}.ml-2 {
  margin-left: 0.5rem;
}.-mr-1 {
  margin-right: -0.25rem;
}.mb-5 {
  margin-bottom: 1.25rem;
}.ml-3 {
  margin-left: 0.75rem;
}.mt-2\\.5 {
  margin-top: 0.625rem;
}.mt-2 {
  margin-top: 0.5rem;
}.mb-3 {
  margin-bottom: 0.75rem;
}.mb-1 {
  margin-bottom: 0.25rem;
}.mt-4 {
  margin-top: 1rem;
}.mt-6 {
  margin-top: 1.5rem;
}.mb-6 {
  margin-bottom: 1.5rem;
}.mr-4 {
  margin-right: 1rem;
}.mt-3 {
  margin-top: 0.75rem;
}.mt-1 {
  margin-top: 0.25rem;
}.ml-0 {
  margin-left: 0px;
}.-mb-px {
  margin-bottom: -1px;
}.mb-10 {
  margin-bottom: 2.5rem;
}.ml-6 {
  margin-left: 1.5rem;
}.mr-1 {
  margin-right: 0.25rem;
}.ml-4 {
  margin-left: 1rem;
}.mt-1\\.5 {
  margin-top: 0.375rem;
}.block {
  display: block;
}.\\!block {
  display: block !important;
}.inline-block {
  display: inline-block;
}.inline {
  display: inline;
}.flex {
  display: flex;
}.inline-flex {
  display: inline-flex;
}.table {
  display: table;
}.\\!table {
  display: table !important;
}.flow-root {
  display: flow-root;
}.grid {
  display: grid;
}.contents {
  display: contents;
}.hidden {
  display: none;
}.\\!hidden {
  display: none !important;
}.h-96 {
  height: 24rem;
}.h-6 {
  height: 1.5rem;
}.h-8 {
  height: 2rem;
}.h-5 {
  height: 1.25rem;
}.h-10 {
  height: 2.5rem;
}.h-12 {
  height: 3rem;
}.h-4 {
  height: 1rem;
}.h-24 {
  height: 6rem;
}.h-56 {
  height: 14rem;
}.h-3 {
  height: 0.75rem;
}.h-full {
  height: 100%;
}.h-1 {
  height: 0.25rem;
}.h-2 {
  height: 0.5rem;
}.h-7 {
  height: 1.75rem;
}.h-2\\.5 {
  height: 0.625rem;
}.h-0\\.5 {
  height: 0.125rem;
}.h-0 {
  height: 0px;
}.w-full {
  width: 100%;
}.w-8 {
  width: 2rem;
}.w-5 {
  width: 1.25rem;
}.w-10 {
  width: 2.5rem;
}.w-12 {
  width: 3rem;
}.w-4 {
  width: 1rem;
}.w-6 {
  width: 1.5rem;
}.w-44 {
  width: 11rem;
}.w-24 {
  width: 6rem;
}.w-3 {
  width: 0.75rem;
}.w-11 {
  width: 2.75rem;
}.w-9 {
  width: 2.25rem;
}.w-14 {
  width: 3.5rem;
}.w-48 {
  width: 12rem;
}.w-2\\/4 {
  width: 50%;
}.w-1 {
  width: 0.25rem;
}.w-32 {
  width: 8rem;
}.w-64 {
  width: 16rem;
}.w-80 {
  width: 20rem;
}.w-fit {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}.w-2 {
  width: 0.5rem;
}.min-w-0 {
  min-width: 0px;
}.max-w-sm {
  max-width: 24rem;
}.max-w-md {
  max-width: 28rem;
}.max-w-7xl {
  max-width: 80rem;
}.max-w-4xl {
  max-width: 56rem;
}.max-w-2xl {
  max-width: 42rem;
}.max-w-xs {
  max-width: 20rem;
}.flex-auto {
  flex: 1 1 auto;
}.flex-1 {
  flex: 1 1 0%;
}.flex-shrink-0 {
  flex-shrink: 0;
}.shrink-0 {
  flex-shrink: 0;
}.origin-\\[0\\] {
  transform-origin: 0;
}.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}@-webkit-keyframes spin {

  to {
    transform: rotate(360deg);
  }
}@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}.animate-spin {
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
}.cursor-not-allowed {
  cursor: not-allowed;
}.cursor-pointer {
  cursor: pointer;
}.list-none {
  list-style-type: none;
}.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}.flex-row {
  flex-direction: row;
}.flex-col {
  flex-direction: column;
}.flex-wrap {
  flex-wrap: wrap;
}.items-start {
  align-items: flex-start;
}.items-center {
  align-items: center;
}.justify-end {
  justify-content: flex-end;
}.justify-center {
  justify-content: center;
}.justify-between {
  justify-content: space-between;
}.gap-2 {
  gap: 0.5rem;
}.gap-8 {
  gap: 2rem;
}.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}.self-center {
  align-self: center;
}.overflow-auto {
  overflow: auto;
}.overflow-hidden {
  overflow: hidden;
}.overflow-x-auto {
  overflow-x: auto;
}.overflow-y-auto {
  overflow-y: auto;
}.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}.whitespace-nowrap {
  white-space: nowrap;
}.rounded {
  border-radius: 0.25rem;
}.rounded-lg {
  border-radius: 0.5rem;
}.rounded-full {
  border-radius: 9999px;
}.rounded-md {
  border-radius: 0.375rem;
}.rounded-none {
  border-radius: 0px;
}.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}.border {
  border-width: 1px;
}.border-2 {
  border-width: 2px;
}.border-0 {
  border-width: 0px;
}.border-b {
  border-bottom-width: 1px;
}.border-t-0 {
  border-top-width: 0px;
}.border-t-4 {
  border-top-width: 4px;
}.border-t {
  border-top-width: 1px;
}.border-l {
  border-left-width: 1px;
}.border-b-2 {
  border-bottom-width: 2px;
}.border-r-0 {
  border-right-width: 0px;
}.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
}.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}.border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}.border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-border-opacity));
}.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-border-opacity));
}.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-border-opacity));
}.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-border-opacity));
}.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(195 221 253 / var(--tw-border-opacity));
}.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(251 213 213 / var(--tw-border-opacity));
}.border-yellow-200 {
  --tw-border-opacity: 1;
  border-color: rgb(252 233 106 / var(--tw-border-opacity));
}.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(188 240 218 / var(--tw-border-opacity));
}.border-indigo-200 {
  --tw-border-opacity: 1;
  border-color: rgb(205 219 254 / var(--tw-border-opacity));
}.border-purple-200 {
  --tw-border-opacity: 1;
  border-color: rgb(220 215 254 / var(--tw-border-opacity));
}.border-pink-200 {
  --tw-border-opacity: 1;
  border-color: rgb(250 209 232 / var(--tw-border-opacity));
}.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}.border-transparent {
  border-color: transparent;
}.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}.bg-transparent {
  background-color: transparent;
}.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}.bg-purple-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}.bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}.bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 245 255 / var(--tw-bg-opacity));
}.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 236 220 / var(--tw-bg-opacity));
}.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}.from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-cyan-400 {
  --tw-gradient-from: #22d3ee;
  --tw-gradient-to: rgb(34 211 238 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-teal-400 {
  --tw-gradient-from: #16BDCA;
  --tw-gradient-to: rgb(22 189 202 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-lime-200 {
  --tw-gradient-from: #d9f99d;
  --tw-gradient-to: rgb(217 249 157 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-red-400 {
  --tw-gradient-from: #F98080;
  --tw-gradient-to: rgb(249 128 128 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-pink-400 {
  --tw-gradient-from: #F17EB8;
  --tw-gradient-to: rgb(241 126 184 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-blue-500 {
  --tw-gradient-from: #3F83F8;
  --tw-gradient-to: rgb(63 131 248 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-teal-200 {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.via-green-500 {
  --tw-gradient-to: rgb(14 159 110 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E, var(--tw-gradient-to);
}.via-cyan-500 {
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4, var(--tw-gradient-to);
}.via-teal-500 {
  --tw-gradient-to: rgb(6 148 162 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0694A2, var(--tw-gradient-to);
}.via-lime-400 {
  --tw-gradient-to: rgb(163 230 53 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635, var(--tw-gradient-to);
}.via-red-500 {
  --tw-gradient-to: rgb(240 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F05252, var(--tw-gradient-to);
}.via-pink-500 {
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #E74694, var(--tw-gradient-to);
}.via-purple-600 {
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2, var(--tw-gradient-to);
}.via-blue-600 {
  --tw-gradient-to: rgb(28 100 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2, var(--tw-gradient-to);
}.via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}.to-green-600 {
  --tw-gradient-to: #057A55;
}.to-cyan-600 {
  --tw-gradient-to: #0891b2;
}.to-teal-600 {
  --tw-gradient-to: #047481;
}.to-lime-500 {
  --tw-gradient-to: #84cc16;
}.to-red-600 {
  --tw-gradient-to: #E02424;
}.to-pink-600 {
  --tw-gradient-to: #D61F69;
}.to-purple-700 {
  --tw-gradient-to: #6C2BD9;
}.to-blue-700 {
  --tw-gradient-to: #1A56DB;
}.to-blue-500 {
  --tw-gradient-to: #3F83F8;
}.to-blue-600 {
  --tw-gradient-to: #1C64F2;
}.to-pink-500 {
  --tw-gradient-to: #E74694;
}.to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}.to-lime-200 {
  --tw-gradient-to: #d9f99d;
}.to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}.to-lime-300 {
  --tw-gradient-to: #bef264;
}.fill-blue-600 {
  fill: #1C64F2;
}.fill-gray-600 {
  fill: #4B5563;
}.fill-green-500 {
  fill: #0E9F6E;
}.fill-red-600 {
  fill: #E02424;
}.fill-yellow-400 {
  fill: #E3A008;
}.fill-pink-600 {
  fill: #D61F69;
}.fill-purple-600 {
  fill: #7E3AF2;
}.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}.p-2 {
  padding: 0.5rem;
}.p-6 {
  padding: 1.5rem;
}.p-4 {
  padding: 1rem;
}.p-5 {
  padding: 1.25rem;
}.p-1\\.5 {
  padding: 0.375rem;
}.p-1 {
  padding: 0.25rem;
}.p-0\\.5 {
  padding: 0.125rem;
}.p-0 {
  padding: 0px;
}.p-8 {
  padding: 2rem;
}.p-2\\.5 {
  padding: 0.625rem;
}.p-3 {
  padding: 0.75rem;
}.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}.pb-5 {
  padding-bottom: 1.25rem;
}.pt-4 {
  padding-top: 1rem;
}.pb-10 {
  padding-bottom: 2.5rem;
}.pl-10 {
  padding-left: 2.5rem;
}.pl-3 {
  padding-left: 0.75rem;
}.pb-4 {
  padding-bottom: 1rem;
}.pr-4 {
  padding-right: 1rem;
}.pl-4 {
  padding-left: 1rem;
}.pl-2\\.5 {
  padding-left: 0.625rem;
}.pl-2 {
  padding-left: 0.5rem;
}.pl-11 {
  padding-left: 2.75rem;
}.text-left {
  text-align: left;
}.text-center {
  text-align: center;
}.text-right {
  text-align: right;
}.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}.font-bold {
  font-weight: 700;
}.font-medium {
  font-weight: 500;
}.font-semibold {
  font-weight: 600;
}.font-normal {
  font-weight: 400;
}.font-light {
  font-weight: 300;
}.uppercase {
  text-transform: uppercase;
}.italic {
  font-style: italic;
}.leading-tight {
  line-height: 1.25;
}.leading-normal {
  line-height: 1.5;
}.leading-none {
  line-height: 1;
}.leading-relaxed {
  line-height: 1.625;
}.tracking-tight {
  letter-spacing: -0.025em;
}.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(200 30 30 / var(--tw-text-opacity));
}.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}.text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgb(142 75 16 / var(--tw-text-opacity));
}.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(194 120 3 / var(--tw-text-opacity));
}.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(4 108 78 / var(--tw-text-opacity));
}.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(81 69 205 / var(--tw-text-opacity));
}.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(104 117 245 / var(--tw-text-opacity));
}.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}.text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(191 18 93 / var(--tw-text-opacity));
}.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(231 70 148 / var(--tw-text-opacity));
}.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}.text-blue-900 {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}.text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}.text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}.text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}.text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(4 116 129 / var(--tw-text-opacity));
}.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(255 90 31 / var(--tw-text-opacity));
}.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(138 44 13 / var(--tw-text-opacity));
}.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}.opacity-60 {
  opacity: 0.6;
}.opacity-40 {
  opacity: 0.4;
}.opacity-0 {
  opacity: 0;
}.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.shadow-green-500\\/50 {
  --tw-shadow-color: rgb(14 159 110 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-cyan-500\\/50 {
  --tw-shadow-color: rgb(6 182 212 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-teal-500\\/50 {
  --tw-shadow-color: rgb(6 148 162 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-lime-500\\/50 {
  --tw-shadow-color: rgb(132 204 22 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-red-500\\/50 {
  --tw-shadow-color: rgb(240 82 82 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-pink-500\\/50 {
  --tw-shadow-color: rgb(231 70 148 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-purple-500\\/50 {
  --tw-shadow-color: rgb(144 97 249 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-blue-500\\/50 {
  --tw-shadow-color: rgb(63 131 248 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.outline {
  outline-style: solid;
}.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.duration-75 {
  transition-duration: 75ms;
}.duration-300 {
  transition-duration: 300ms;
}.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}.container {
  width: 100%;
}@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}.after\\:top-0\\.5::after {
  content: var(--tw-content);
  top: 0.125rem;
}.after\\:left-\\[2px\\]::after {
  content: var(--tw-content);
  left: 2px;
}.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}.after\\:top-\\[2px\\]::after {
  content: var(--tw-content);
  top: 2px;
}.after\\:left-\\[4px\\]::after {
  content: var(--tw-content);
  left: 4px;
}.after\\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}.after\\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}.after\\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}.after\\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}.after\\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}.first\\:rounded-l-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}.last\\:rounded-r-md:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}.last\\:border-r:last-child {
  border-right-width: 1px;
}.odd\\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}.even\\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}.hover\\:bg-yellow-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}.hover\\:bg-indigo-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}.hover\\:bg-purple-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}.hover\\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}.hover\\:bg-yellow-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}.hover\\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.hover\\:bg-yellow-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}.hover\\:bg-indigo-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}.hover\\:bg-pink-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}.hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}.hover\\:bg-red-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}.hover\\:bg-yellow-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}.hover\\:bg-green-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}.hover\\:bg-indigo-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}.hover\\:bg-purple-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}.hover\\:bg-pink-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}.hover\\:bg-gradient-to-l:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}.hover\\:from-teal-200:hover {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}.hover\\:text-red-900:hover {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}.hover\\:text-yellow-900:hover {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}.hover\\:text-green-900:hover {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}.hover\\:text-indigo-900:hover {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}.hover\\:text-purple-900:hover {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}.hover\\:text-pink-900:hover {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}.hover\\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}.focus\\:z-10:focus {
  z-index: 10;
}.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}.focus\\:border-transparent:focus {
  border-color: transparent;
}.focus\\:border-blue-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}.focus\\:bg-white:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(195 221 253 / var(--tw-ring-opacity));
}.focus\\:ring-gray-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}.focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}.focus\\:ring-yellow-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));
}.focus\\:ring-green-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));
}.focus\\:ring-indigo-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));
}.focus\\:ring-purple-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));
}.focus\\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));
}.focus\\:ring-blue-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));
}.focus\\:ring-blue-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(26 86 219 / var(--tw-ring-opacity));
}.focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}.focus\\:ring-green-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}.focus\\:ring-red-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}.focus\\:ring-yellow-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}.focus\\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}.focus\\:ring-cyan-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}.focus\\:ring-teal-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}.focus\\:ring-lime-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}.focus\\:ring-pink-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));
}.focus\\:ring-cyan-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(165 243 252 / var(--tw-ring-opacity));
}.focus\\:ring-green-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));
}.focus\\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}.focus\\:ring-pink-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));
}.focus\\:ring-lime-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}.focus\\:ring-red-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));
}.focus\\:ring-indigo-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity));
}.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}.focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}.focus\\:ring-purple-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));
}.focus\\:ring-teal-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));
}.focus\\:ring-yellow-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));
}.focus\\:ring-orange-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));
}.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}.group:hover .group-hover\\:bg-opacity-0 {
  --tw-bg-opacity: 0;
}.group:hover .group-hover\\:from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}.group:hover .group-hover\\:to-blue-500 {
  --tw-gradient-to: #3F83F8;
}.group:hover .group-hover\\:to-blue-600 {
  --tw-gradient-to: #1C64F2;
}.group:hover .group-hover\\:to-pink-500 {
  --tw-gradient-to: #E74694;
}.group:hover .group-hover\\:to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}.group:hover .group-hover\\:to-lime-300 {
  --tw-gradient-to: #bef264;
}.group:hover .group-hover\\:to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}.group:hover .group-hover\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}.peer:checked ~ .peer-checked\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 116 129 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 90 31 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:checked ~ .peer-checked\\:after\\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:focus ~ .peer-focus\\:left-0 {
  left: 0px;
}.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:focus ~ .peer-focus\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}.peer:focus ~ .peer-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}.peer:focus ~ .peer-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.peer:focus ~ .peer-focus\\:ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));
}.dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}.dark .dark\\:divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}.dark .dark\\:border-none {
  border-style: none;
}.dark .dark\\:border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}.dark .dark\\:border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}.dark .dark\\:border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}.dark .dark\\:border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}.dark .dark\\:border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}.dark .dark\\:border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}.dark .dark\\:border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}.dark .dark\\:border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}.dark .dark\\:border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}.dark .dark\\:border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}.dark .dark\\:border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}.dark .dark\\:border-yellow-600 {
  --tw-border-opacity: 1;
  border-color: rgb(159 88 10 / var(--tw-border-opacity));
}.dark .dark\\:border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}.dark .dark\\:border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}.dark .dark\\:border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(88 80 236 / var(--tw-border-opacity));
}.dark .dark\\:border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}.dark .dark\\:border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(126 58 242 / var(--tw-border-opacity));
}.dark .dark\\:border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}.dark .dark\\:border-pink-600 {
  --tw-border-opacity: 1;
  border-color: rgb(214 31 105 / var(--tw-border-opacity));
}.dark .dark\\:border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}.dark .dark\\:border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}.dark .dark\\:bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}.dark .dark\\:bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}.dark .dark\\:bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}.dark .dark\\:bg-pink-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-800\\/30 {
  background-color: rgb(31 41 55 / 0.3);
}.dark .dark\\:bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(35 56 118 / var(--tw-bg-opacity));
}.dark .dark\\:bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 217 189 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}.dark .dark\\:bg-opacity-80 {
  --tw-bg-opacity: 0.8;
}.dark .dark\\:text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}.dark .dark\\:text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}.dark .dark\\:text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(159 88 10 / var(--tw-text-opacity));
}.dark .dark\\:text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}.dark .dark\\:text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(88 80 236 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-600 {
  --tw-text-opacity: 1;
  color: rgb(214 31 105 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}.dark .dark\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.dark .dark\\:text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}.dark .dark\\:text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}.dark .dark\\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}.dark .dark\\:text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-300 {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-300 {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}.dark .dark\\:text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}.dark .dark\\:text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}.dark .dark\\:text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}.dark .dark\\:text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-200 {
  --tw-text-opacity: 1;
  color: rgb(252 233 106 / var(--tw-text-opacity));
}.dark .dark\\:text-orange-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(195 221 253 / var(--tw-text-opacity));
}.dark .dark\\:text-green-200 {
  --tw-text-opacity: 1;
  color: rgb(188 240 218 / var(--tw-text-opacity));
}.dark .dark\\:text-red-200 {
  --tw-text-opacity: 1;
  color: rgb(251 213 213 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-200 {
  --tw-text-opacity: 1;
  color: rgb(220 215 254 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-200 {
  --tw-text-opacity: 1;
  color: rgb(205 219 254 / var(--tw-text-opacity));
}.dark .dark\\:placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}.dark .dark\\:placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}.dark .dark\\:placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}.dark .dark\\:shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.dark .dark\\:shadow-green-800\\/80 {
  --tw-shadow-color: rgb(3 84 63 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-cyan-800\\/80 {
  --tw-shadow-color: rgb(21 94 117 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-teal-800\\/80 {
  --tw-shadow-color: rgb(5 80 92 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-lime-800\\/80 {
  --tw-shadow-color: rgb(63 98 18 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-red-800\\/80 {
  --tw-shadow-color: rgb(155 28 28 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-pink-800\\/80 {
  --tw-shadow-color: rgb(153 21 75 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-purple-800\\/80 {
  --tw-shadow-color: rgb(85 33 181 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-blue-800\\/80 {
  --tw-shadow-color: rgb(30 66 159 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:ring-gray-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}.dark .dark\\:ring-gray-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}.dark .dark\\:ring-offset-gray-800 {
  --tw-ring-offset-color: #1F2937;
}.dark .odd\\:dark\\:bg-gray-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.dark .even\\:dark\\:bg-gray-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:border-gray-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}.dark .dark\\:hover\\:border-gray-700:hover {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}.dark .dark\\:hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 180 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-yellow-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 202 21 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-green-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(132 225 188 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-indigo-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(180 198 252 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-purple-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(202 191 253 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-pink-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 217 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-blue-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(164 202 254 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-green-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-yellow-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-purple-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-purple-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-yellow-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-pink-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-yellow-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-indigo-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-purple-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-pink-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.dark .dark\\:hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}.dark .dark\\:hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.dark .dark\\:focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}.dark .dark\\:focus\\:bg-gray-700:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.dark .dark\\:focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.dark .dark\\:focus\\:ring-gray-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-blue-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-gray-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-green-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-red-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-yellow-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-purple-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-cyan-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-teal-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-lime-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-red-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-pink-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-purple-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-teal-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-yellow-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-indigo-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-blue-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-red-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-green-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-purple-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-teal-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-yellow-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-orange-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-gray-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60 {
  background-color: rgb(31 41 55 / 0.6);
}.dark .group:hover .dark\\:group-hover\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70 {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}.peer:focus ~ .dark .peer-focus\\:dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));
}@media (min-width: 640px) {

  .sm\\:order-last {
    order: 9999;
  }

  .sm\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:inline-block {
    display: inline-block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-6 {
    height: 1.5rem;
  }

  .sm\\:h-64 {
    height: 16rem;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:h-7 {
    height: 1.75rem;
  }

  .sm\\:w-6 {
    width: 1.5rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:gap-6 {
    gap: 1.5rem;
  }

  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:p-8 {
    padding: 2rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .sm\\:pb-6 {
    padding-bottom: 1.5rem;
  }

  .sm\\:pr-8 {
    padding-right: 2rem;
  }

  .sm\\:text-center {
    text-align: center;
  }

  .sm\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:ring-8 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
}@media (min-width: 768px) {

  .md\\:order-1 {
    order: 1;
  }

  .md\\:ml-2 {
    margin-left: 0.5rem;
  }

  .md\\:mr-6 {
    margin-right: 1.5rem;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:w-48 {
    width: 12rem;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-xl {
    max-width: 36rem;
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:items-center {
    align-items: center;
  }

  .md\\:justify-between {
    justify-content: space-between;
  }

  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:rounded-none {
    border-radius: 0px;
  }

  .md\\:rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .md\\:border-0 {
    border-width: 0px;
  }

  .md\\:bg-transparent {
    background-color: transparent;
  }

  .md\\:p-6 {
    padding: 1.5rem;
  }

  .md\\:p-0 {
    padding: 0px;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:font-medium {
    font-weight: 500;
  }

  .md\\:text-blue-700 {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .md\\:hover\\:text-blue-700:hover {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .dark .md\\:dark\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .dark .md\\:dark\\:hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}@media (min-width: 1024px) {

  .lg\\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .lg\\:mt-6 {
    margin-top: 1.5rem;
  }

  .lg\\:p-8 {
    padding: 2rem;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}@media (min-width: 1280px) {

  .xl\\:h-80 {
    height: 20rem;
  }

  .xl\\:pb-8 {
    padding-bottom: 2rem;
  }
}@media (min-width: 1536px) {

  .\\32xl\\:h-96 {
    height: 24rem;
  }
}`)();
var Wrapper_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => `/*
! tailwindcss v3.1.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #E5E7EB; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::-webkit-file-upload-button:hover {
  background: #374151;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

.dark input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::-webkit-file-upload-button:hover {
  background: #6B7280;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

input[type="range"].range-sm::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-webkit-slider-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

input[type="range"].range-sm::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

.tooltip-arrow,.tooltip-arrow:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.tooltip-arrow {
  visibility: hidden;
}

.tooltip-arrow:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #E5E7EB;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}.pointer-events-none {
  pointer-events: none;
}.visible {
  visibility: visible;
}.\\!visible {
  visibility: visible !important;
}.invisible {
  visibility: hidden;
}.static {
  position: static;
}.fixed {
  position: fixed;
}.absolute {
  position: absolute;
}.relative {
  position: relative;
}.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}.inset-y-0 {
  top: 0px;
  bottom: 0px;
}.-left-1 {
  left: -0.25rem;
}.top-16 {
  top: 4rem;
}.-right-16 {
  right: -4rem;
}.bottom-5 {
  bottom: 1.25rem;
}.left-1\\/2 {
  left: 50%;
}.top-0 {
  top: 0px;
}.left-0 {
  left: 0px;
}.right-0 {
  right: 0px;
}.top-8 {
  top: 2rem;
}.top-1 {
  top: 0.25rem;
}.-left-16 {
  left: -4rem;
}.top-14 {
  top: 3.5rem;
}.top-3 {
  top: 0.75rem;
}.right-2\\.5 {
  right: 0.625rem;
}.bottom-2\\.5 {
  bottom: 0.625rem;
}.right-2 {
  right: 0.5rem;
}.bottom-2 {
  bottom: 0.5rem;
}.-left-3 {
  left: -0.75rem;
}.-left-1\\.5 {
  left: -0.375rem;
}.z-10 {
  z-index: 10;
}.z-30 {
  z-index: 30;
}.z-50 {
  z-index: 50;
}.z-0 {
  z-index: 0;
}.-z-10 {
  z-index: -10;
}.z-40 {
  z-index: 40;
}.z-20 {
  z-index: 20;
}.m-2 {
  margin: 0.5rem;
}.m-4 {
  margin: 1rem;
}.m-1 {
  margin: 0.25rem;
}.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}.-mx-1\\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}.mx-auto {
  margin-left: auto;
  margin-right: auto;
}.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}.mr-6 {
  margin-right: 1.5rem;
}.mr-2 {
  margin-right: 0.5rem;
}.mb-4 {
  margin-bottom: 1rem;
}.ml-auto {
  margin-left: auto;
}.mr-3 {
  margin-right: 0.75rem;
}.ml-1 {
  margin-left: 0.25rem;
}.mb-2 {
  margin-bottom: 0.5rem;
}.ml-2 {
  margin-left: 0.5rem;
}.-mr-1 {
  margin-right: -0.25rem;
}.mb-5 {
  margin-bottom: 1.25rem;
}.ml-3 {
  margin-left: 0.75rem;
}.mt-2\\.5 {
  margin-top: 0.625rem;
}.mt-2 {
  margin-top: 0.5rem;
}.mb-3 {
  margin-bottom: 0.75rem;
}.mb-1 {
  margin-bottom: 0.25rem;
}.mt-4 {
  margin-top: 1rem;
}.mt-6 {
  margin-top: 1.5rem;
}.mb-6 {
  margin-bottom: 1.5rem;
}.mr-4 {
  margin-right: 1rem;
}.mt-3 {
  margin-top: 0.75rem;
}.mt-1 {
  margin-top: 0.25rem;
}.ml-0 {
  margin-left: 0px;
}.-mb-px {
  margin-bottom: -1px;
}.mb-10 {
  margin-bottom: 2.5rem;
}.ml-6 {
  margin-left: 1.5rem;
}.mr-1 {
  margin-right: 0.25rem;
}.ml-4 {
  margin-left: 1rem;
}.mt-1\\.5 {
  margin-top: 0.375rem;
}.block {
  display: block;
}.\\!block {
  display: block !important;
}.inline-block {
  display: inline-block;
}.inline {
  display: inline;
}.flex {
  display: flex;
}.inline-flex {
  display: inline-flex;
}.table {
  display: table;
}.\\!table {
  display: table !important;
}.flow-root {
  display: flow-root;
}.grid {
  display: grid;
}.contents {
  display: contents;
}.hidden {
  display: none;
}.\\!hidden {
  display: none !important;
}.h-96 {
  height: 24rem;
}.h-6 {
  height: 1.5rem;
}.h-8 {
  height: 2rem;
}.h-5 {
  height: 1.25rem;
}.h-10 {
  height: 2.5rem;
}.h-12 {
  height: 3rem;
}.h-4 {
  height: 1rem;
}.h-24 {
  height: 6rem;
}.h-56 {
  height: 14rem;
}.h-3 {
  height: 0.75rem;
}.h-full {
  height: 100%;
}.h-1 {
  height: 0.25rem;
}.h-2 {
  height: 0.5rem;
}.h-7 {
  height: 1.75rem;
}.h-2\\.5 {
  height: 0.625rem;
}.h-0\\.5 {
  height: 0.125rem;
}.h-0 {
  height: 0px;
}.w-full {
  width: 100%;
}.w-8 {
  width: 2rem;
}.w-5 {
  width: 1.25rem;
}.w-10 {
  width: 2.5rem;
}.w-12 {
  width: 3rem;
}.w-4 {
  width: 1rem;
}.w-6 {
  width: 1.5rem;
}.w-44 {
  width: 11rem;
}.w-24 {
  width: 6rem;
}.w-3 {
  width: 0.75rem;
}.w-11 {
  width: 2.75rem;
}.w-9 {
  width: 2.25rem;
}.w-14 {
  width: 3.5rem;
}.w-48 {
  width: 12rem;
}.w-2\\/4 {
  width: 50%;
}.w-1 {
  width: 0.25rem;
}.w-32 {
  width: 8rem;
}.w-64 {
  width: 16rem;
}.w-80 {
  width: 20rem;
}.w-fit {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}.w-2 {
  width: 0.5rem;
}.min-w-0 {
  min-width: 0px;
}.max-w-sm {
  max-width: 24rem;
}.max-w-md {
  max-width: 28rem;
}.max-w-7xl {
  max-width: 80rem;
}.max-w-4xl {
  max-width: 56rem;
}.max-w-2xl {
  max-width: 42rem;
}.max-w-xs {
  max-width: 20rem;
}.flex-auto {
  flex: 1 1 auto;
}.flex-1 {
  flex: 1 1 0%;
}.flex-shrink-0 {
  flex-shrink: 0;
}.shrink-0 {
  flex-shrink: 0;
}.origin-\\[0\\] {
  transform-origin: 0;
}.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}@-webkit-keyframes spin {

  to {
    transform: rotate(360deg);
  }
}@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}.animate-spin {
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
}.cursor-not-allowed {
  cursor: not-allowed;
}.cursor-pointer {
  cursor: pointer;
}.list-none {
  list-style-type: none;
}.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}.flex-row {
  flex-direction: row;
}.flex-col {
  flex-direction: column;
}.flex-wrap {
  flex-wrap: wrap;
}.items-start {
  align-items: flex-start;
}.items-center {
  align-items: center;
}.justify-end {
  justify-content: flex-end;
}.justify-center {
  justify-content: center;
}.justify-between {
  justify-content: space-between;
}.gap-2 {
  gap: 0.5rem;
}.gap-8 {
  gap: 2rem;
}.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}.self-center {
  align-self: center;
}.overflow-auto {
  overflow: auto;
}.overflow-hidden {
  overflow: hidden;
}.overflow-x-auto {
  overflow-x: auto;
}.overflow-y-auto {
  overflow-y: auto;
}.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}.whitespace-nowrap {
  white-space: nowrap;
}.rounded {
  border-radius: 0.25rem;
}.rounded-lg {
  border-radius: 0.5rem;
}.rounded-full {
  border-radius: 9999px;
}.rounded-md {
  border-radius: 0.375rem;
}.rounded-none {
  border-radius: 0px;
}.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}.border {
  border-width: 1px;
}.border-2 {
  border-width: 2px;
}.border-0 {
  border-width: 0px;
}.border-b {
  border-bottom-width: 1px;
}.border-t-0 {
  border-top-width: 0px;
}.border-t-4 {
  border-top-width: 4px;
}.border-t {
  border-top-width: 1px;
}.border-l {
  border-left-width: 1px;
}.border-b-2 {
  border-bottom-width: 2px;
}.border-r-0 {
  border-right-width: 0px;
}.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
}.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}.border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}.border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-border-opacity));
}.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-border-opacity));
}.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-border-opacity));
}.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-border-opacity));
}.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(195 221 253 / var(--tw-border-opacity));
}.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(251 213 213 / var(--tw-border-opacity));
}.border-yellow-200 {
  --tw-border-opacity: 1;
  border-color: rgb(252 233 106 / var(--tw-border-opacity));
}.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(188 240 218 / var(--tw-border-opacity));
}.border-indigo-200 {
  --tw-border-opacity: 1;
  border-color: rgb(205 219 254 / var(--tw-border-opacity));
}.border-purple-200 {
  --tw-border-opacity: 1;
  border-color: rgb(220 215 254 / var(--tw-border-opacity));
}.border-pink-200 {
  --tw-border-opacity: 1;
  border-color: rgb(250 209 232 / var(--tw-border-opacity));
}.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}.border-transparent {
  border-color: transparent;
}.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}.bg-transparent {
  background-color: transparent;
}.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}.bg-purple-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}.bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}.bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 245 255 / var(--tw-bg-opacity));
}.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 236 220 / var(--tw-bg-opacity));
}.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}.from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-cyan-400 {
  --tw-gradient-from: #22d3ee;
  --tw-gradient-to: rgb(34 211 238 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-teal-400 {
  --tw-gradient-from: #16BDCA;
  --tw-gradient-to: rgb(22 189 202 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-lime-200 {
  --tw-gradient-from: #d9f99d;
  --tw-gradient-to: rgb(217 249 157 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-red-400 {
  --tw-gradient-from: #F98080;
  --tw-gradient-to: rgb(249 128 128 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-pink-400 {
  --tw-gradient-from: #F17EB8;
  --tw-gradient-to: rgb(241 126 184 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-blue-500 {
  --tw-gradient-from: #3F83F8;
  --tw-gradient-to: rgb(63 131 248 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-teal-200 {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.via-green-500 {
  --tw-gradient-to: rgb(14 159 110 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E, var(--tw-gradient-to);
}.via-cyan-500 {
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4, var(--tw-gradient-to);
}.via-teal-500 {
  --tw-gradient-to: rgb(6 148 162 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0694A2, var(--tw-gradient-to);
}.via-lime-400 {
  --tw-gradient-to: rgb(163 230 53 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635, var(--tw-gradient-to);
}.via-red-500 {
  --tw-gradient-to: rgb(240 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F05252, var(--tw-gradient-to);
}.via-pink-500 {
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #E74694, var(--tw-gradient-to);
}.via-purple-600 {
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2, var(--tw-gradient-to);
}.via-blue-600 {
  --tw-gradient-to: rgb(28 100 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2, var(--tw-gradient-to);
}.via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}.to-green-600 {
  --tw-gradient-to: #057A55;
}.to-cyan-600 {
  --tw-gradient-to: #0891b2;
}.to-teal-600 {
  --tw-gradient-to: #047481;
}.to-lime-500 {
  --tw-gradient-to: #84cc16;
}.to-red-600 {
  --tw-gradient-to: #E02424;
}.to-pink-600 {
  --tw-gradient-to: #D61F69;
}.to-purple-700 {
  --tw-gradient-to: #6C2BD9;
}.to-blue-700 {
  --tw-gradient-to: #1A56DB;
}.to-blue-500 {
  --tw-gradient-to: #3F83F8;
}.to-blue-600 {
  --tw-gradient-to: #1C64F2;
}.to-pink-500 {
  --tw-gradient-to: #E74694;
}.to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}.to-lime-200 {
  --tw-gradient-to: #d9f99d;
}.to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}.to-lime-300 {
  --tw-gradient-to: #bef264;
}.fill-blue-600 {
  fill: #1C64F2;
}.fill-gray-600 {
  fill: #4B5563;
}.fill-green-500 {
  fill: #0E9F6E;
}.fill-red-600 {
  fill: #E02424;
}.fill-yellow-400 {
  fill: #E3A008;
}.fill-pink-600 {
  fill: #D61F69;
}.fill-purple-600 {
  fill: #7E3AF2;
}.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}.p-2 {
  padding: 0.5rem;
}.p-6 {
  padding: 1.5rem;
}.p-4 {
  padding: 1rem;
}.p-5 {
  padding: 1.25rem;
}.p-1\\.5 {
  padding: 0.375rem;
}.p-1 {
  padding: 0.25rem;
}.p-0\\.5 {
  padding: 0.125rem;
}.p-0 {
  padding: 0px;
}.p-8 {
  padding: 2rem;
}.p-2\\.5 {
  padding: 0.625rem;
}.p-3 {
  padding: 0.75rem;
}.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}.pb-5 {
  padding-bottom: 1.25rem;
}.pt-4 {
  padding-top: 1rem;
}.pb-10 {
  padding-bottom: 2.5rem;
}.pl-10 {
  padding-left: 2.5rem;
}.pl-3 {
  padding-left: 0.75rem;
}.pb-4 {
  padding-bottom: 1rem;
}.pr-4 {
  padding-right: 1rem;
}.pl-4 {
  padding-left: 1rem;
}.pl-2\\.5 {
  padding-left: 0.625rem;
}.pl-2 {
  padding-left: 0.5rem;
}.pl-11 {
  padding-left: 2.75rem;
}.text-left {
  text-align: left;
}.text-center {
  text-align: center;
}.text-right {
  text-align: right;
}.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}.font-bold {
  font-weight: 700;
}.font-medium {
  font-weight: 500;
}.font-semibold {
  font-weight: 600;
}.font-normal {
  font-weight: 400;
}.font-light {
  font-weight: 300;
}.uppercase {
  text-transform: uppercase;
}.italic {
  font-style: italic;
}.leading-tight {
  line-height: 1.25;
}.leading-normal {
  line-height: 1.5;
}.leading-none {
  line-height: 1;
}.leading-relaxed {
  line-height: 1.625;
}.tracking-tight {
  letter-spacing: -0.025em;
}.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(200 30 30 / var(--tw-text-opacity));
}.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}.text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgb(142 75 16 / var(--tw-text-opacity));
}.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(194 120 3 / var(--tw-text-opacity));
}.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(4 108 78 / var(--tw-text-opacity));
}.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(81 69 205 / var(--tw-text-opacity));
}.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(104 117 245 / var(--tw-text-opacity));
}.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}.text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(191 18 93 / var(--tw-text-opacity));
}.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(231 70 148 / var(--tw-text-opacity));
}.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}.text-blue-900 {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}.text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}.text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}.text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}.text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(4 116 129 / var(--tw-text-opacity));
}.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(255 90 31 / var(--tw-text-opacity));
}.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(138 44 13 / var(--tw-text-opacity));
}.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}.opacity-60 {
  opacity: 0.6;
}.opacity-40 {
  opacity: 0.4;
}.opacity-0 {
  opacity: 0;
}.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.shadow-green-500\\/50 {
  --tw-shadow-color: rgb(14 159 110 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-cyan-500\\/50 {
  --tw-shadow-color: rgb(6 182 212 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-teal-500\\/50 {
  --tw-shadow-color: rgb(6 148 162 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-lime-500\\/50 {
  --tw-shadow-color: rgb(132 204 22 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-red-500\\/50 {
  --tw-shadow-color: rgb(240 82 82 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-pink-500\\/50 {
  --tw-shadow-color: rgb(231 70 148 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-purple-500\\/50 {
  --tw-shadow-color: rgb(144 97 249 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.shadow-blue-500\\/50 {
  --tw-shadow-color: rgb(63 131 248 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}.outline {
  outline-style: solid;
}.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.duration-75 {
  transition-duration: 75ms;
}.duration-300 {
  transition-duration: 300ms;
}.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}.container {
  width: 100%;
}@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}.after\\:top-0\\.5::after {
  content: var(--tw-content);
  top: 0.125rem;
}.after\\:left-\\[2px\\]::after {
  content: var(--tw-content);
  left: 2px;
}.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}.after\\:top-\\[2px\\]::after {
  content: var(--tw-content);
  top: 2px;
}.after\\:left-\\[4px\\]::after {
  content: var(--tw-content);
  left: 4px;
}.after\\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}.after\\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}.after\\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}.after\\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}.after\\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}.first\\:rounded-l-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}.last\\:rounded-r-md:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}.last\\:border-r:last-child {
  border-right-width: 1px;
}.odd\\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}.even\\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}.hover\\:bg-yellow-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}.hover\\:bg-indigo-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}.hover\\:bg-purple-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}.hover\\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}.hover\\:bg-yellow-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}.hover\\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.hover\\:bg-yellow-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}.hover\\:bg-indigo-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}.hover\\:bg-pink-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}.hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}.hover\\:bg-red-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}.hover\\:bg-yellow-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}.hover\\:bg-green-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}.hover\\:bg-indigo-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}.hover\\:bg-purple-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}.hover\\:bg-pink-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}.hover\\:bg-gradient-to-l:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}.hover\\:from-teal-200:hover {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}.hover\\:text-red-900:hover {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}.hover\\:text-yellow-900:hover {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}.hover\\:text-green-900:hover {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}.hover\\:text-indigo-900:hover {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}.hover\\:text-purple-900:hover {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}.hover\\:text-pink-900:hover {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}.hover\\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}.focus\\:z-10:focus {
  z-index: 10;
}.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}.focus\\:border-transparent:focus {
  border-color: transparent;
}.focus\\:border-blue-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}.focus\\:bg-white:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(195 221 253 / var(--tw-ring-opacity));
}.focus\\:ring-gray-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}.focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}.focus\\:ring-yellow-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));
}.focus\\:ring-green-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));
}.focus\\:ring-indigo-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));
}.focus\\:ring-purple-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));
}.focus\\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));
}.focus\\:ring-blue-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));
}.focus\\:ring-blue-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(26 86 219 / var(--tw-ring-opacity));
}.focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}.focus\\:ring-green-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}.focus\\:ring-red-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}.focus\\:ring-yellow-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}.focus\\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}.focus\\:ring-cyan-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}.focus\\:ring-teal-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}.focus\\:ring-lime-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}.focus\\:ring-pink-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));
}.focus\\:ring-cyan-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(165 243 252 / var(--tw-ring-opacity));
}.focus\\:ring-green-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));
}.focus\\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}.focus\\:ring-pink-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));
}.focus\\:ring-lime-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}.focus\\:ring-red-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));
}.focus\\:ring-indigo-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity));
}.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}.focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}.focus\\:ring-purple-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));
}.focus\\:ring-teal-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));
}.focus\\:ring-yellow-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));
}.focus\\:ring-orange-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));
}.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}.group:hover .group-hover\\:bg-opacity-0 {
  --tw-bg-opacity: 0;
}.group:hover .group-hover\\:from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}.group:hover .group-hover\\:via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}.group:hover .group-hover\\:to-blue-500 {
  --tw-gradient-to: #3F83F8;
}.group:hover .group-hover\\:to-blue-600 {
  --tw-gradient-to: #1C64F2;
}.group:hover .group-hover\\:to-pink-500 {
  --tw-gradient-to: #E74694;
}.group:hover .group-hover\\:to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}.group:hover .group-hover\\:to-lime-300 {
  --tw-gradient-to: #bef264;
}.group:hover .group-hover\\:to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}.group:hover .group-hover\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}.peer:checked ~ .peer-checked\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 116 129 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 90 31 / var(--tw-bg-opacity));
}.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:checked ~ .peer-checked\\:after\\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:focus ~ .peer-focus\\:left-0 {
  left: 0px;
}.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}.peer:focus ~ .peer-focus\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}.peer:focus ~ .peer-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}.peer:focus ~ .peer-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}.peer:focus ~ .peer-focus\\:ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}.peer:focus ~ .peer-focus\\:ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));
}.dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}.dark .dark\\:divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}.dark .dark\\:border-none {
  border-style: none;
}.dark .dark\\:border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}.dark .dark\\:border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}.dark .dark\\:border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}.dark .dark\\:border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}.dark .dark\\:border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}.dark .dark\\:border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}.dark .dark\\:border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}.dark .dark\\:border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}.dark .dark\\:border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}.dark .dark\\:border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}.dark .dark\\:border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}.dark .dark\\:border-yellow-600 {
  --tw-border-opacity: 1;
  border-color: rgb(159 88 10 / var(--tw-border-opacity));
}.dark .dark\\:border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}.dark .dark\\:border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}.dark .dark\\:border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(88 80 236 / var(--tw-border-opacity));
}.dark .dark\\:border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}.dark .dark\\:border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(126 58 242 / var(--tw-border-opacity));
}.dark .dark\\:border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}.dark .dark\\:border-pink-600 {
  --tw-border-opacity: 1;
  border-color: rgb(214 31 105 / var(--tw-border-opacity));
}.dark .dark\\:border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}.dark .dark\\:border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}.dark .dark\\:bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}.dark .dark\\:bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}.dark .dark\\:bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}.dark .dark\\:bg-pink-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}.dark .dark\\:bg-gray-800\\/30 {
  background-color: rgb(31 41 55 / 0.3);
}.dark .dark\\:bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(35 56 118 / var(--tw-bg-opacity));
}.dark .dark\\:bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 217 189 / var(--tw-bg-opacity));
}.dark .dark\\:bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}.dark .dark\\:bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}.dark .dark\\:bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}.dark .dark\\:bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}.dark .dark\\:bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}.dark .dark\\:bg-yellow-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}.dark .dark\\:bg-opacity-80 {
  --tw-bg-opacity: 0.8;
}.dark .dark\\:text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}.dark .dark\\:text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}.dark .dark\\:text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(159 88 10 / var(--tw-text-opacity));
}.dark .dark\\:text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}.dark .dark\\:text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(88 80 236 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-600 {
  --tw-text-opacity: 1;
  color: rgb(214 31 105 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}.dark .dark\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.dark .dark\\:text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}.dark .dark\\:text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}.dark .dark\\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}.dark .dark\\:text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-300 {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-300 {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}.dark .dark\\:text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}.dark .dark\\:text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}.dark .dark\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}.dark .dark\\:text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}.dark .dark\\:text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}.dark .dark\\:text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}.dark .dark\\:text-yellow-200 {
  --tw-text-opacity: 1;
  color: rgb(252 233 106 / var(--tw-text-opacity));
}.dark .dark\\:text-orange-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}.dark .dark\\:text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(195 221 253 / var(--tw-text-opacity));
}.dark .dark\\:text-green-200 {
  --tw-text-opacity: 1;
  color: rgb(188 240 218 / var(--tw-text-opacity));
}.dark .dark\\:text-red-200 {
  --tw-text-opacity: 1;
  color: rgb(251 213 213 / var(--tw-text-opacity));
}.dark .dark\\:text-purple-200 {
  --tw-text-opacity: 1;
  color: rgb(220 215 254 / var(--tw-text-opacity));
}.dark .dark\\:text-indigo-200 {
  --tw-text-opacity: 1;
  color: rgb(205 219 254 / var(--tw-text-opacity));
}.dark .dark\\:placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}.dark .dark\\:placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}.dark .dark\\:placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}.dark .dark\\:shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}.dark .dark\\:shadow-green-800\\/80 {
  --tw-shadow-color: rgb(3 84 63 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-cyan-800\\/80 {
  --tw-shadow-color: rgb(21 94 117 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-teal-800\\/80 {
  --tw-shadow-color: rgb(5 80 92 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-lime-800\\/80 {
  --tw-shadow-color: rgb(63 98 18 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-red-800\\/80 {
  --tw-shadow-color: rgb(155 28 28 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-pink-800\\/80 {
  --tw-shadow-color: rgb(153 21 75 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-purple-800\\/80 {
  --tw-shadow-color: rgb(85 33 181 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:shadow-blue-800\\/80 {
  --tw-shadow-color: rgb(30 66 159 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}.dark .dark\\:ring-gray-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}.dark .dark\\:ring-gray-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}.dark .dark\\:ring-offset-gray-800 {
  --tw-ring-offset-color: #1F2937;
}.dark .odd\\:dark\\:bg-gray-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.dark .even\\:dark\\:bg-gray-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:border-gray-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}.dark .dark\\:hover\\:border-gray-700:hover {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}.dark .dark\\:hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 180 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-yellow-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 202 21 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-green-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(132 225 188 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-indigo-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(180 198 252 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-purple-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(202 191 253 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-pink-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 217 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-blue-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(164 202 254 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-green-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-yellow-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-purple-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-purple-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-yellow-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-pink-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-yellow-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-indigo-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-purple-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:bg-pink-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}.dark .dark\\:hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.dark .dark\\:hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}.dark .dark\\:hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.dark .dark\\:focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}.dark .dark\\:focus\\:bg-gray-700:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}.dark .dark\\:focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}.dark .dark\\:focus\\:ring-gray-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-blue-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-gray-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-green-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-red-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-yellow-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-purple-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-cyan-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-teal-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-lime-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-red-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-pink-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-purple-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-teal-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-yellow-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-indigo-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-blue-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-red-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-green-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-purple-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-teal-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-yellow-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-orange-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}.dark .dark\\:focus\\:ring-gray-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60 {
  background-color: rgb(31 41 55 / 0.6);
}.dark .group:hover .dark\\:group-hover\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70 {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}.peer:focus ~ .dark .peer-focus\\:dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));
}@media (min-width: 640px) {

  .sm\\:order-last {
    order: 9999;
  }

  .sm\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:inline-block {
    display: inline-block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-6 {
    height: 1.5rem;
  }

  .sm\\:h-64 {
    height: 16rem;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:h-7 {
    height: 1.75rem;
  }

  .sm\\:w-6 {
    width: 1.5rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:gap-6 {
    gap: 1.5rem;
  }

  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:p-8 {
    padding: 2rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .sm\\:pb-6 {
    padding-bottom: 1.5rem;
  }

  .sm\\:pr-8 {
    padding-right: 2rem;
  }

  .sm\\:text-center {
    text-align: center;
  }

  .sm\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:ring-8 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
}@media (min-width: 768px) {

  .md\\:order-1 {
    order: 1;
  }

  .md\\:ml-2 {
    margin-left: 0.5rem;
  }

  .md\\:mr-6 {
    margin-right: 1.5rem;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:w-48 {
    width: 12rem;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-xl {
    max-width: 36rem;
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:items-center {
    align-items: center;
  }

  .md\\:justify-between {
    justify-content: space-between;
  }

  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:rounded-none {
    border-radius: 0px;
  }

  .md\\:rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .md\\:border-0 {
    border-width: 0px;
  }

  .md\\:bg-transparent {
    background-color: transparent;
  }

  .md\\:p-6 {
    padding: 1.5rem;
  }

  .md\\:p-0 {
    padding: 0px;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:font-medium {
    font-weight: 500;
  }

  .md\\:text-blue-700 {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .md\\:hover\\:text-blue-700:hover {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .dark .md\\:dark\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .dark .md\\:dark\\:hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}@media (min-width: 1024px) {

  .lg\\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .lg\\:mt-6 {
    margin-top: 1.5rem;
  }

  .lg\\:p-8 {
    padding: 2rem;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}@media (min-width: 1280px) {

  .xl\\:h-80 {
    height: 20rem;
  }

  .xl\\:pb-8 {
    padding-bottom: 2rem;
  }
}@media (min-width: 1536px) {

  .\\32xl\\:h-96 {
    height: 24rem;
  }
}`)();
var TagManager_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => `/*
! tailwindcss v3.1.3 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #E5E7EB; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9CA3AF; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}

[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #1C64F2;
}

input::-moz-placeholder, textarea::-moz-placeholder {
  color: #6B7280;
  opacity: 1;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  color: #6B7280;
  opacity: 1;
}

input::placeholder,textarea::placeholder {
  color: #6B7280;
  opacity: 1;
}

::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}

::-webkit-date-and-time-value {
  min-height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
}

[multiple] {
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
     color-adjust: unset;
          print-color-adjust: unset;
}

[type='checkbox'],[type='radio'] {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
     color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #1C64F2;
  background-color: #fff;
  border-color: #6B7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}

[type='checkbox'] {
  border-radius: 0px;
}

[type='radio'] {
  border-radius: 100%;
}

[type='checkbox']:focus,[type='radio']:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #1C64F2;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}

[type='checkbox']:checked,[type='radio']:checked,.dark [type='checkbox']:checked,.dark [type='radio']:checked {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type='radio']:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type='checkbox']:indeterminate {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {
  border-color: transparent;
  background-color: currentColor;
}

[type='file'] {
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}

[type='file']:focus {
  outline: 1px auto inherit;
}

input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::file-selector-button {
  color: white;
  background: #1F2937;
  border: 0;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 2rem;
  padding-right: 1rem;
  -webkit-margin-start: -1rem;
          margin-inline-start: -1rem;
  -webkit-margin-end: 1rem;
          margin-inline-end: 1rem;
}

input[type=file]::-webkit-file-upload-button:hover {
  background: #374151;
}

input[type=file]::file-selector-button:hover {
  background: #374151;
}

.dark input[type=file]::-webkit-file-upload-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::file-selector-button {
  color: white;
  background: #4B5563;
}

.dark input[type=file]::-webkit-file-upload-button:hover {
  background: #6B7280;
}

.dark input[type=file]::file-selector-button:hover {
  background: #6B7280;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #6B7280;
}

input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 1px;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}

input[type="range"]::-moz-range-thumb {
  height: 1.25rem;
  width: 1.25rem;
  background: #1C64F2;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #9CA3AF;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #6B7280;
}

input[type="range"]::-moz-range-progress {
  background: #3F83F8;
}

input[type="range"]::-ms-fill-lower {
  background: #3F83F8;
}

input[type="range"].range-sm::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-webkit-slider-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

input[type="range"].range-sm::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
}

input[type="range"].range-lg::-moz-range-thumb {
  height: 1.5rem;
  width: 1.5rem;
}

.tooltip-arrow,.tooltip-arrow:before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

.tooltip-arrow {
  visibility: hidden;
}

.tooltip-arrow:before {
  content: "";
  visibility: visible;
  transform: rotate(45deg);
}

[data-tooltip-style^='light'] + .tooltip > .tooltip-arrow:before {
  border-style: solid;
  border-color: #E5E7EB;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='top'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-right-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='right'] > .tooltip-arrow:before {
  border-bottom-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='bottom'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-left-width: 1px;
}

[data-tooltip-style^='light'] + .tooltip[data-popper-placement^='left'] > .tooltip-arrow:before {
  border-top-width: 1px;
  border-right-width: 1px;
}

.tooltip[data-popper-placement^='top'] > .tooltip-arrow {
  bottom: -4px;
}

.tooltip[data-popper-placement^='bottom'] > .tooltip-arrow {
  top: -4px;
}

.tooltip[data-popper-placement^='left'] > .tooltip-arrow {
  right: -4px;
}

.tooltip[data-popper-placement^='right'] > .tooltip-arrow {
  left: -4px;
}

.tooltip.invisible > .tooltip-arrow:before {
  visibility: hidden;
}\r
	h1 {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
	h2 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
	h3 {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::-webkit-backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(63 131 248 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}\r
.container {
  width: 100%;
}\r
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}\r
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}\r
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}\r
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}\r
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}\r
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}\r
.pointer-events-none {
  pointer-events: none;
}\r
.visible {
  visibility: visible;
}\r
.\\!visible {
  visibility: visible !important;
}\r
.invisible {
  visibility: hidden;
}\r
.static {
  position: static;
}\r
.fixed {
  position: fixed;
}\r
.absolute {
  position: absolute;
}\r
.relative {
  position: relative;
}\r
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}\r
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}\r
.-left-1 {
  left: -0.25rem;
}\r
.top-16 {
  top: 4rem;
}\r
.-right-16 {
  right: -4rem;
}\r
.bottom-5 {
  bottom: 1.25rem;
}\r
.left-1\\/2 {
  left: 50%;
}\r
.top-0 {
  top: 0px;
}\r
.left-0 {
  left: 0px;
}\r
.right-0 {
  right: 0px;
}\r
.top-8 {
  top: 2rem;
}\r
.top-1 {
  top: 0.25rem;
}\r
.-left-16 {
  left: -4rem;
}\r
.top-14 {
  top: 3.5rem;
}\r
.top-3 {
  top: 0.75rem;
}\r
.right-2\\.5 {
  right: 0.625rem;
}\r
.bottom-2\\.5 {
  bottom: 0.625rem;
}\r
.right-2 {
  right: 0.5rem;
}\r
.bottom-2 {
  bottom: 0.5rem;
}\r
.-left-3 {
  left: -0.75rem;
}\r
.-left-1\\.5 {
  left: -0.375rem;
}\r
.z-10 {
  z-index: 10;
}\r
.z-30 {
  z-index: 30;
}\r
.z-50 {
  z-index: 50;
}\r
.z-0 {
  z-index: 0;
}\r
.-z-10 {
  z-index: -10;
}\r
.z-40 {
  z-index: 40;
}\r
.z-20 {
  z-index: 20;
}\r
.m-2 {
  margin: 0.5rem;
}\r
.m-4 {
  margin: 1rem;
}\r
.m-1 {
  margin: 0.25rem;
}\r
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}\r
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}\r
.-mx-1\\.5 {
  margin-left: -0.375rem;
  margin-right: -0.375rem;
}\r
.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}\r
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}\r
.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}\r
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}\r
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}\r
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}\r
.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}\r
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}\r
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}\r
.mr-6 {
  margin-right: 1.5rem;
}\r
.mr-2 {
  margin-right: 0.5rem;
}\r
.mb-4 {
  margin-bottom: 1rem;
}\r
.ml-auto {
  margin-left: auto;
}\r
.mr-3 {
  margin-right: 0.75rem;
}\r
.ml-1 {
  margin-left: 0.25rem;
}\r
.mb-2 {
  margin-bottom: 0.5rem;
}\r
.ml-2 {
  margin-left: 0.5rem;
}\r
.-mr-1 {
  margin-right: -0.25rem;
}\r
.mb-5 {
  margin-bottom: 1.25rem;
}\r
.ml-3 {
  margin-left: 0.75rem;
}\r
.mt-2\\.5 {
  margin-top: 0.625rem;
}\r
.mt-2 {
  margin-top: 0.5rem;
}\r
.mb-3 {
  margin-bottom: 0.75rem;
}\r
.mb-1 {
  margin-bottom: 0.25rem;
}\r
.mt-4 {
  margin-top: 1rem;
}\r
.mt-6 {
  margin-top: 1.5rem;
}\r
.mb-6 {
  margin-bottom: 1.5rem;
}\r
.mr-4 {
  margin-right: 1rem;
}\r
.mt-3 {
  margin-top: 0.75rem;
}\r
.mt-1 {
  margin-top: 0.25rem;
}\r
.ml-0 {
  margin-left: 0px;
}\r
.-mb-px {
  margin-bottom: -1px;
}\r
.mb-10 {
  margin-bottom: 2.5rem;
}\r
.ml-6 {
  margin-left: 1.5rem;
}\r
.mr-1 {
  margin-right: 0.25rem;
}\r
.ml-4 {
  margin-left: 1rem;
}\r
.mt-1\\.5 {
  margin-top: 0.375rem;
}\r
.block {
  display: block;
}\r
.\\!block {
  display: block !important;
}\r
.inline-block {
  display: inline-block;
}\r
.inline {
  display: inline;
}\r
.flex {
  display: flex;
}\r
.inline-flex {
  display: inline-flex;
}\r
.table {
  display: table;
}\r
.\\!table {
  display: table !important;
}\r
.flow-root {
  display: flow-root;
}\r
.grid {
  display: grid;
}\r
.contents {
  display: contents;
}\r
.hidden {
  display: none;
}\r
.\\!hidden {
  display: none !important;
}\r
.h-96 {
  height: 24rem;
}\r
.h-6 {
  height: 1.5rem;
}\r
.h-8 {
  height: 2rem;
}\r
.h-5 {
  height: 1.25rem;
}\r
.h-10 {
  height: 2.5rem;
}\r
.h-12 {
  height: 3rem;
}\r
.h-4 {
  height: 1rem;
}\r
.h-24 {
  height: 6rem;
}\r
.h-56 {
  height: 14rem;
}\r
.h-3 {
  height: 0.75rem;
}\r
.h-full {
  height: 100%;
}\r
.h-1 {
  height: 0.25rem;
}\r
.h-2 {
  height: 0.5rem;
}\r
.h-7 {
  height: 1.75rem;
}\r
.h-2\\.5 {
  height: 0.625rem;
}\r
.h-0\\.5 {
  height: 0.125rem;
}\r
.h-0 {
  height: 0px;
}\r
.w-full {
  width: 100%;
}\r
.w-8 {
  width: 2rem;
}\r
.w-5 {
  width: 1.25rem;
}\r
.w-10 {
  width: 2.5rem;
}\r
.w-12 {
  width: 3rem;
}\r
.w-4 {
  width: 1rem;
}\r
.w-6 {
  width: 1.5rem;
}\r
.w-44 {
  width: 11rem;
}\r
.w-24 {
  width: 6rem;
}\r
.w-3 {
  width: 0.75rem;
}\r
.w-11 {
  width: 2.75rem;
}\r
.w-9 {
  width: 2.25rem;
}\r
.w-14 {
  width: 3.5rem;
}\r
.w-48 {
  width: 12rem;
}\r
.w-2\\/4 {
  width: 50%;
}\r
.w-1 {
  width: 0.25rem;
}\r
.w-32 {
  width: 8rem;
}\r
.w-64 {
  width: 16rem;
}\r
.w-80 {
  width: 20rem;
}\r
.w-fit {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}\r
.w-2 {
  width: 0.5rem;
}\r
.min-w-0 {
  min-width: 0px;
}\r
.max-w-sm {
  max-width: 24rem;
}\r
.max-w-md {
  max-width: 28rem;
}\r
.max-w-7xl {
  max-width: 80rem;
}\r
.max-w-4xl {
  max-width: 56rem;
}\r
.max-w-2xl {
  max-width: 42rem;
}\r
.max-w-xs {
  max-width: 20rem;
}\r
.flex-auto {
  flex: 1 1 auto;
}\r
.flex-1 {
  flex: 1 1 0%;
}\r
.flex-shrink-0 {
  flex-shrink: 0;
}\r
.shrink-0 {
  flex-shrink: 0;
}\r
.origin-\\[0\\] {
  transform-origin: 0;
}\r
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
@-webkit-keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}\r
.animate-spin {
  -webkit-animation: spin 1s linear infinite;
          animation: spin 1s linear infinite;
}\r
.cursor-not-allowed {
  cursor: not-allowed;
}\r
.cursor-pointer {
  cursor: pointer;
}\r
.list-none {
  list-style-type: none;
}\r
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}\r
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}\r
.flex-row {
  flex-direction: row;
}\r
.flex-col {
  flex-direction: column;
}\r
.flex-wrap {
  flex-wrap: wrap;
}\r
.items-start {
  align-items: flex-start;
}\r
.items-center {
  align-items: center;
}\r
.justify-end {
  justify-content: flex-end;
}\r
.justify-center {
  justify-content: center;
}\r
.justify-between {
  justify-content: space-between;
}\r
.gap-2 {
  gap: 0.5rem;
}\r
.gap-8 {
  gap: 2rem;
}\r
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}\r
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}\r
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}\r
.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}\r
.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}\r
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}\r
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}\r
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}\r
.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}\r
.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-divide-opacity));
}\r
.self-center {
  align-self: center;
}\r
.overflow-auto {
  overflow: auto;
}\r
.overflow-hidden {
  overflow: hidden;
}\r
.overflow-x-auto {
  overflow-x: auto;
}\r
.overflow-y-auto {
  overflow-y: auto;
}\r
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}\r
.whitespace-nowrap {
  white-space: nowrap;
}\r
.rounded {
  border-radius: 0.25rem;
}\r
.rounded-lg {
  border-radius: 0.5rem;
}\r
.rounded-full {
  border-radius: 9999px;
}\r
.rounded-md {
  border-radius: 0.375rem;
}\r
.rounded-none {
  border-radius: 0px;
}\r
.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}\r
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}\r
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}\r
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}\r
.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}\r
.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}\r
.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}\r
.border {
  border-width: 1px;
}\r
.border-2 {
  border-width: 2px;
}\r
.border-0 {
  border-width: 0px;
}\r
.border-b {
  border-bottom-width: 1px;
}\r
.border-t-0 {
  border-top-width: 0px;
}\r
.border-t-4 {
  border-top-width: 4px;
}\r
.border-t {
  border-top-width: 1px;
}\r
.border-l {
  border-left-width: 1px;
}\r
.border-b-2 {
  border-bottom-width: 2px;
}\r
.border-r-0 {
  border-right-width: 0px;
}\r
.border-slate-300 {
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
}\r
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}\r
.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.border-blue-700 {
  --tw-border-opacity: 1;
  border-color: rgb(26 86 219 / var(--tw-border-opacity));
}\r
.border-gray-800 {
  --tw-border-opacity: 1;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
}\r
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.border-green-700 {
  --tw-border-opacity: 1;
  border-color: rgb(4 108 78 / var(--tw-border-opacity));
}\r
.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(200 30 30 / var(--tw-border-opacity));
}\r
.border-yellow-400 {
  --tw-border-opacity: 1;
  border-color: rgb(227 160 8 / var(--tw-border-opacity));
}\r
.border-purple-700 {
  --tw-border-opacity: 1;
  border-color: rgb(108 43 217 / var(--tw-border-opacity));
}\r
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}\r
.border-blue-200 {
  --tw-border-opacity: 1;
  border-color: rgb(195 221 253 / var(--tw-border-opacity));
}\r
.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(251 213 213 / var(--tw-border-opacity));
}\r
.border-yellow-200 {
  --tw-border-opacity: 1;
  border-color: rgb(252 233 106 / var(--tw-border-opacity));
}\r
.border-green-200 {
  --tw-border-opacity: 1;
  border-color: rgb(188 240 218 / var(--tw-border-opacity));
}\r
.border-indigo-200 {
  --tw-border-opacity: 1;
  border-color: rgb(205 219 254 / var(--tw-border-opacity));
}\r
.border-purple-200 {
  --tw-border-opacity: 1;
  border-color: rgb(220 215 254 / var(--tw-border-opacity));
}\r
.border-pink-200 {
  --tw-border-opacity: 1;
  border-color: rgb(250 209 232 / var(--tw-border-opacity));
}\r
.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.border-transparent {
  border-color: transparent;
}\r
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.bg-slate-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 / var(--tw-bg-opacity));
}\r
.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.bg-slate-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(148 163 184 / var(--tw-bg-opacity));
}\r
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.bg-indigo-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.bg-purple-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.bg-pink-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.bg-transparent {
  background-color: transparent;
}\r
.bg-blue-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(118 169 250 / var(--tw-bg-opacity));
}\r
.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}\r
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.bg-green-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(49 196 141 / var(--tw-bg-opacity));
}\r
.bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 128 128 / var(--tw-bg-opacity));
}\r
.bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.bg-purple-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(172 148 250 / var(--tw-bg-opacity));
}\r
.bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}\r
.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(235 245 255 / var(--tw-bg-opacity));
}\r
.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 236 220 / var(--tw-bg-opacity));
}\r
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}\r
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}\r
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-400 {
  --tw-gradient-from: #22d3ee;
  --tw-gradient-to: rgb(34 211 238 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-400 {
  --tw-gradient-from: #16BDCA;
  --tw-gradient-to: rgb(22 189 202 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-lime-200 {
  --tw-gradient-from: #d9f99d;
  --tw-gradient-to: rgb(217 249 157 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-400 {
  --tw-gradient-from: #F98080;
  --tw-gradient-to: rgb(249 128 128 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-400 {
  --tw-gradient-from: #F17EB8;
  --tw-gradient-to: rgb(241 126 184 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-blue-500 {
  --tw-gradient-from: #3F83F8;
  --tw-gradient-to: rgb(63 131 248 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-200 {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.via-green-500 {
  --tw-gradient-to: rgb(14 159 110 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0E9F6E, var(--tw-gradient-to);
}\r
.via-cyan-500 {
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #06b6d4, var(--tw-gradient-to);
}\r
.via-teal-500 {
  --tw-gradient-to: rgb(6 148 162 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #0694A2, var(--tw-gradient-to);
}\r
.via-lime-400 {
  --tw-gradient-to: rgb(163 230 53 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #a3e635, var(--tw-gradient-to);
}\r
.via-red-500 {
  --tw-gradient-to: rgb(240 82 82 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F05252, var(--tw-gradient-to);
}\r
.via-pink-500 {
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #E74694, var(--tw-gradient-to);
}\r
.via-purple-600 {
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #7E3AF2, var(--tw-gradient-to);
}\r
.via-blue-600 {
  --tw-gradient-to: rgb(28 100 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #1C64F2, var(--tw-gradient-to);
}\r
.via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.to-green-600 {
  --tw-gradient-to: #057A55;
}\r
.to-cyan-600 {
  --tw-gradient-to: #0891b2;
}\r
.to-teal-600 {
  --tw-gradient-to: #047481;
}\r
.to-lime-500 {
  --tw-gradient-to: #84cc16;
}\r
.to-red-600 {
  --tw-gradient-to: #E02424;
}\r
.to-pink-600 {
  --tw-gradient-to: #D61F69;
}\r
.to-purple-700 {
  --tw-gradient-to: #6C2BD9;
}\r
.to-blue-700 {
  --tw-gradient-to: #1A56DB;
}\r
.to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.to-lime-200 {
  --tw-gradient-to: #d9f99d;
}\r
.to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.fill-blue-600 {
  fill: #1C64F2;
}\r
.fill-gray-600 {
  fill: #4B5563;
}\r
.fill-green-500 {
  fill: #0E9F6E;
}\r
.fill-red-600 {
  fill: #E02424;
}\r
.fill-yellow-400 {
  fill: #E3A008;
}\r
.fill-pink-600 {
  fill: #D61F69;
}\r
.fill-purple-600 {
  fill: #7E3AF2;
}\r
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}\r
.p-2 {
  padding: 0.5rem;
}\r
.p-6 {
  padding: 1.5rem;
}\r
.p-4 {
  padding: 1rem;
}\r
.p-5 {
  padding: 1.25rem;
}\r
.p-1\\.5 {
  padding: 0.375rem;
}\r
.p-1 {
  padding: 0.25rem;
}\r
.p-0\\.5 {
  padding: 0.125rem;
}\r
.p-0 {
  padding: 0px;
}\r
.p-8 {
  padding: 2rem;
}\r
.p-2\\.5 {
  padding: 0.625rem;
}\r
.p-3 {
  padding: 0.75rem;
}\r
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}\r
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}\r
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}\r
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}\r
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}\r
.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}\r
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}\r
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}\r
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}\r
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}\r
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}\r
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}\r
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}\r
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}\r
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}\r
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}\r
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}\r
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}\r
.pb-5 {
  padding-bottom: 1.25rem;
}\r
.pt-4 {
  padding-top: 1rem;
}\r
.pb-10 {
  padding-bottom: 2.5rem;
}\r
.pl-10 {
  padding-left: 2.5rem;
}\r
.pl-3 {
  padding-left: 0.75rem;
}\r
.pb-4 {
  padding-bottom: 1rem;
}\r
.pr-4 {
  padding-right: 1rem;
}\r
.pl-4 {
  padding-left: 1rem;
}\r
.pl-2\\.5 {
  padding-left: 0.625rem;
}\r
.pl-2 {
  padding-left: 0.5rem;
}\r
.pl-11 {
  padding-left: 2.75rem;
}\r
.text-left {
  text-align: left;
}\r
.text-center {
  text-align: center;
}\r
.text-right {
  text-align: right;
}\r
.font-mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}\r
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}\r
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}\r
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}\r
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}\r
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}\r
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}\r
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}\r
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}\r
.font-bold {
  font-weight: 700;
}\r
.font-medium {
  font-weight: 500;
}\r
.font-semibold {
  font-weight: 600;
}\r
.font-normal {
  font-weight: 400;
}\r
.font-light {
  font-weight: 300;
}\r
.uppercase {
  text-transform: uppercase;
}\r
.italic {
  font-style: italic;
}\r
.leading-tight {
  line-height: 1.25;
}\r
.leading-normal {
  line-height: 1.5;
}\r
.leading-none {
  line-height: 1;
}\r
.leading-relaxed {
  line-height: 1.625;
}\r
.tracking-tight {
  letter-spacing: -0.025em;
}\r
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}\r
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(200 30 30 / var(--tw-text-opacity));
}\r
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.text-yellow-700 {
  --tw-text-opacity: 1;
  color: rgb(142 75 16 / var(--tw-text-opacity));
}\r
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(194 120 3 / var(--tw-text-opacity));
}\r
.text-green-700 {
  --tw-text-opacity: 1;
  color: rgb(4 108 78 / var(--tw-text-opacity));
}\r
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.text-indigo-700 {
  --tw-text-opacity: 1;
  color: rgb(81 69 205 / var(--tw-text-opacity));
}\r
.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(104 117 245 / var(--tw-text-opacity));
}\r
.text-purple-700 {
  --tw-text-opacity: 1;
  color: rgb(108 43 217 / var(--tw-text-opacity));
}\r
.text-purple-500 {
  --tw-text-opacity: 1;
  color: rgb(144 97 249 / var(--tw-text-opacity));
}\r
.text-pink-700 {
  --tw-text-opacity: 1;
  color: rgb(191 18 93 / var(--tw-text-opacity));
}\r
.text-pink-500 {
  --tw-text-opacity: 1;
  color: rgb(231 70 148 / var(--tw-text-opacity));
}\r
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.text-blue-900 {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(4 116 129 / var(--tw-text-opacity));
}\r
.text-orange-500 {
  --tw-text-opacity: 1;
  color: rgb(255 90 31 / var(--tw-text-opacity));
}\r
.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(225 239 254 / var(--tw-text-opacity));
}\r
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(138 44 13 / var(--tw-text-opacity));
}\r
.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.underline {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.opacity-60 {
  opacity: 0.6;
}\r
.opacity-40 {
  opacity: 0.4;
}\r
.opacity-0 {
  opacity: 0;
}\r
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.shadow-green-500\\/50 {
  --tw-shadow-color: rgb(14 159 110 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-cyan-500\\/50 {
  --tw-shadow-color: rgb(6 182 212 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-teal-500\\/50 {
  --tw-shadow-color: rgb(6 148 162 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-lime-500\\/50 {
  --tw-shadow-color: rgb(132 204 22 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-red-500\\/50 {
  --tw-shadow-color: rgb(240 82 82 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-pink-500\\/50 {
  --tw-shadow-color: rgb(231 70 148 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-purple-500\\/50 {
  --tw-shadow-color: rgb(144 97 249 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.shadow-blue-500\\/50 {
  --tw-shadow-color: rgb(63 131 248 / 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.outline {
  outline-style: solid;
}\r
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-8 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}\r
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition {
  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.duration-75 {
  transition-duration: 75ms;
}\r
.duration-300 {
  transition-duration: 300ms;
}\r
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}\r
.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}\r
.after\\:top-0\\.5::after {
  content: var(--tw-content);
  top: 0.125rem;
}\r
.after\\:left-\\[2px\\]::after {
  content: var(--tw-content);
  left: 2px;
}\r
.after\\:top-0::after {
  content: var(--tw-content);
  top: 0px;
}\r
.after\\:top-\\[2px\\]::after {
  content: var(--tw-content);
  top: 2px;
}\r
.after\\:left-\\[4px\\]::after {
  content: var(--tw-content);
  left: 4px;
}\r
.after\\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}\r
.after\\:h-4::after {
  content: var(--tw-content);
  height: 1rem;
}\r
.after\\:h-6::after {
  content: var(--tw-content);
  height: 1.5rem;
}\r
.after\\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}\r
.after\\:w-4::after {
  content: var(--tw-content);
  width: 1rem;
}\r
.after\\:w-6::after {
  content: var(--tw-content);
  width: 1.5rem;
}\r
.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}\r
.after\\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}\r
.after\\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.after\\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.after\\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}\r
.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}\r
.first\\:rounded-l-lg:first-child {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}\r
.last\\:rounded-r-md:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}\r
.last\\:border-r:last-child {
  border-right-width: 1px;
}\r
.odd\\:bg-white:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.even\\:bg-gray-50:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:border-gray-300:hover {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}\r
.hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(225 239 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-900:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(153 21 75 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.hover\\:bg-red-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 232 232 / var(--tw-bg-opacity));
}\r
.hover\\:bg-yellow-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(253 246 178 / var(--tw-bg-opacity));
}\r
.hover\\:bg-green-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(222 247 236 / var(--tw-bg-opacity));
}\r
.hover\\:bg-indigo-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 237 255 / var(--tw-bg-opacity));
}\r
.hover\\:bg-purple-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(237 235 254 / var(--tw-bg-opacity));
}\r
.hover\\:bg-pink-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 232 243 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}\r
.hover\\:bg-gradient-to-br:hover {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}\r
.hover\\:bg-gradient-to-l:hover {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}\r
.hover\\:from-teal-200:hover {
  --tw-gradient-from: #AFECEF;
  --tw-gradient-to: rgb(175 236 239 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-700:hover {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.hover\\:text-blue-900:hover {
  --tw-text-opacity: 1;
  color: rgb(35 56 118 / var(--tw-text-opacity));
}\r
.hover\\:text-red-900:hover {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.hover\\:text-yellow-900:hover {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.hover\\:text-green-900:hover {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.hover\\:text-indigo-900:hover {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.hover\\:text-purple-900:hover {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.hover\\:text-pink-900:hover {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}\r
.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.hover\\:underline:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}\r
.focus\\:z-10:focus {
  z-index: 10;
}\r
.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.focus\\:border-transparent:focus {
  border-color: transparent;
}\r
.focus\\:border-blue-600:focus {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.focus\\:bg-white:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}\r
.focus\\:bg-gray-900:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.focus\\:text-blue-700:focus {
  --tw-text-opacity: 1;
  color: rgb(26 86 219 / var(--tw-text-opacity));
}\r
.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(195 221 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(227 160 8 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(49 196 141 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(141 162 251 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(172 148 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(241 126 184 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(118 169 250 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(26 86 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(103 232 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(190 242 100 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 217 / var(--tw-ring-opacity));
}\r
.focus\\:ring-cyan-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(165 243 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(188 240 218 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(220 215 254 / var(--tw-ring-opacity));
}\r
.focus\\:ring-pink-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 209 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-lime-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(217 249 157 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-100:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 232 232 / var(--tw-ring-opacity));
}\r
.focus\\:ring-indigo-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(180 198 252 / var(--tw-ring-opacity));
}\r
.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.focus\\:ring-red-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(240 82 82 / var(--tw-ring-opacity));
}\r
.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(14 159 110 / var(--tw-ring-opacity));
}\r
.focus\\:ring-purple-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(144 97 249 / var(--tw-ring-opacity));
}\r
.focus\\:ring-teal-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(6 148 162 / var(--tw-ring-opacity));
}\r
.focus\\:ring-yellow-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(194 120 3 / var(--tw-ring-opacity));
}\r
.focus\\:ring-orange-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 90 31 / var(--tw-ring-opacity));
}\r
.group:hover .group-hover\\:bg-white\\/50 {
  background-color: rgb(255 255 255 / 0.5);
}\r
.group:hover .group-hover\\:bg-opacity-0 {
  --tw-bg-opacity: 0;
}\r
.group:hover .group-hover\\:from-cyan-500 {
  --tw-gradient-from: #06b6d4;
  --tw-gradient-to: rgb(6 182 212 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-green-400 {
  --tw-gradient-from: #31C48D;
  --tw-gradient-to: rgb(49 196 141 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-500 {
  --tw-gradient-from: #9061F9;
  --tw-gradient-to: rgb(144 97 249 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-pink-500 {
  --tw-gradient-from: #E74694;
  --tw-gradient-to: rgb(231 70 148 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-teal-300 {
  --tw-gradient-from: #7EDCE2;
  --tw-gradient-to: rgb(126 220 226 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-red-200 {
  --tw-gradient-from: #FBD5D5;
  --tw-gradient-to: rgb(251 213 213 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:from-purple-600 {
  --tw-gradient-from: #7E3AF2;
  --tw-gradient-to: rgb(126 58 242 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:via-red-300 {
  --tw-gradient-to: rgb(248 180 180 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), #F8B4B4, var(--tw-gradient-to);
}\r
.group:hover .group-hover\\:to-blue-500 {
  --tw-gradient-to: #3F83F8;
}\r
.group:hover .group-hover\\:to-blue-600 {
  --tw-gradient-to: #1C64F2;
}\r
.group:hover .group-hover\\:to-pink-500 {
  --tw-gradient-to: #E74694;
}\r
.group:hover .group-hover\\:to-orange-400 {
  --tw-gradient-to: #FF8A4C;
}\r
.group:hover .group-hover\\:to-lime-300 {
  --tw-gradient-to: #bef264;
}\r
.group:hover .group-hover\\:to-yellow-200 {
  --tw-gradient-to: #FCE96A;
}\r
.group:hover .group-hover\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.group:focus .group-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.group:focus .group-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.group:focus .group-focus\\:ring-white {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-teal-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 116 129 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 90 31 / var(--tw-bg-opacity));
}\r
.peer:checked ~ .peer-checked\\:after\\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:checked ~ .peer-checked\\:after\\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-moz-placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:-ms-input-placeholder ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:placeholder-shown ~ .peer-placeholder-shown\\:scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:left-0 {
  left: 0px;
}\r
.peer:focus ~ .peer-focus\\:-translate-y-6 {
  --tw-translate-y: -1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}\r
.peer:focus ~ .peer-focus\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.peer:focus ~ .peer-focus\\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}\r
.peer:focus ~ .peer-focus\\:ring-4 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}\r
.peer:focus ~ .peer-focus\\:ring-blue-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(164 202 254 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-red-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 180 180 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-green-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(132 225 188 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-purple-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(202 191 253 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-yellow-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(250 202 21 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-teal-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 220 226 / var(--tw-ring-opacity));
}\r
.peer:focus ~ .peer-focus\\:ring-orange-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(253 186 140 / var(--tw-ring-opacity));
}\r
.dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-divide-opacity));
}\r
.dark .dark\\:divide-gray-600 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-divide-opacity));
}\r
.dark .dark\\:border-none {
  border-style: none;
}\r
.dark .dark\\:border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-600 {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-500 {
  --tw-border-opacity: 1;
  border-color: rgb(14 159 110 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(240 82 82 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-300 {
  --tw-border-opacity: 1;
  border-color: rgb(250 202 21 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-400 {
  --tw-border-opacity: 1;
  border-color: rgb(172 148 250 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-blue-600 {
  --tw-border-opacity: 1;
  border-color: rgb(28 100 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-red-600 {
  --tw-border-opacity: 1;
  border-color: rgb(224 36 36 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-600 {
  --tw-border-opacity: 1;
  border-color: rgb(159 88 10 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-yellow-500 {
  --tw-border-opacity: 1;
  border-color: rgb(194 120 3 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-green-600 {
  --tw-border-opacity: 1;
  border-color: rgb(5 122 85 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-600 {
  --tw-border-opacity: 1;
  border-color: rgb(88 80 236 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-indigo-500 {
  --tw-border-opacity: 1;
  border-color: rgb(104 117 245 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-600 {
  --tw-border-opacity: 1;
  border-color: rgb(126 58 242 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-purple-500 {
  --tw-border-opacity: 1;
  border-color: rgb(144 97 249 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-600 {
  --tw-border-opacity: 1;
  border-color: rgb(214 31 105 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-pink-500 {
  --tw-border-opacity: 1;
  border-color: rgb(231 70 148 / var(--tw-border-opacity));
}\r
.dark .dark\\:border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}\r
.dark .dark\\:bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(251 213 213 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 233 106 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(188 240 218 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(205 219 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 215 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 209 232 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(195 221 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 131 248 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(240 82 82 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(194 120 3 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-pink-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-gray-800\\/30 {
  background-color: rgb(31 41 55 / 0.3);
}\r
.dark .dark\\:bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(104 117 245 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(35 56 118 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-orange-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(252 217 189 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-blue-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 66 159 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-green-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(3 84 63 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(155 28 28 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(85 33 181 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-indigo-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(66 56 157 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-yellow-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(114 59 19 / var(--tw-bg-opacity));
}\r
.dark .dark\\:bg-opacity-80 {
  --tw-bg-opacity: 0.8;
}\r
.dark .dark\\:text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(155 28 28 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(224 36 36 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(114 59 19 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-600 {
  --tw-text-opacity: 1;
  color: rgb(159 88 10 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(3 84 63 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(5 122 85 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-800 {
  --tw-text-opacity: 1;
  color: rgb(66 56 157 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(88 80 236 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-800 {
  --tw-text-opacity: 1;
  color: rgb(85 33 181 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-600 {
  --tw-text-opacity: 1;
  color: rgb(126 58 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-800 {
  --tw-text-opacity: 1;
  color: rgb(153 21 75 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-600 {
  --tw-text-opacity: 1;
  color: rgb(214 31 105 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 66 159 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(28 100 242 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-900 {
  --tw-text-opacity: 1;
  color: rgb(1 71 55 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-900 {
  --tw-text-opacity: 1;
  color: rgb(99 49 18 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-900 {
  --tw-text-opacity: 1;
  color: rgb(54 47 120 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-900 {
  --tw-text-opacity: 1;
  color: rgb(74 29 150 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-900 {
  --tw-text-opacity: 1;
  color: rgb(117 26 61 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 180 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-300 {
  --tw-text-opacity: 1;
  color: rgb(132 225 188 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(250 202 21 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-300 {
  --tw-text-opacity: 1;
  color: rgb(180 198 252 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-300 {
  --tw-text-opacity: 1;
  color: rgb(202 191 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-300 {
  --tw-text-opacity: 1;
  color: rgb(248 180 217 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-300 {
  --tw-text-opacity: 1;
  color: rgb(164 202 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(14 159 110 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(240 82 82 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(172 148 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(118 169 250 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(249 128 128 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(227 160 8 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(49 196 141 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-400 {
  --tw-text-opacity: 1;
  color: rgb(141 162 251 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-pink-400 {
  --tw-text-opacity: 1;
  color: rgb(241 126 184 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-yellow-200 {
  --tw-text-opacity: 1;
  color: rgb(252 233 106 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-orange-900 {
  --tw-text-opacity: 1;
  color: rgb(119 29 29 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(195 221 253 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-green-200 {
  --tw-text-opacity: 1;
  color: rgb(188 240 218 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-red-200 {
  --tw-text-opacity: 1;
  color: rgb(251 213 213 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-purple-200 {
  --tw-text-opacity: 1;
  color: rgb(220 215 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:text-indigo-200 {
  --tw-text-opacity: 1;
  color: rgb(205 219 254 / var(--tw-text-opacity));
}\r
.dark .dark\\:placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400:-ms-input-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}\r
.dark .dark\\:shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}\r
.dark .dark\\:shadow-green-800\\/80 {
  --tw-shadow-color: rgb(3 84 63 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-cyan-800\\/80 {
  --tw-shadow-color: rgb(21 94 117 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-teal-800\\/80 {
  --tw-shadow-color: rgb(5 80 92 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-lime-800\\/80 {
  --tw-shadow-color: rgb(63 98 18 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-red-800\\/80 {
  --tw-shadow-color: rgb(155 28 28 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-pink-800\\/80 {
  --tw-shadow-color: rgb(153 21 75 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-purple-800\\/80 {
  --tw-shadow-color: rgb(85 33 181 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:shadow-blue-800\\/80 {
  --tw-shadow-color: rgb(30 66 159 / 0.8);
  --tw-shadow: var(--tw-shadow-colored);
}\r
.dark .dark\\:ring-gray-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-gray-900 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));
}\r
.dark .dark\\:ring-offset-gray-800 {
  --tw-ring-offset-color: #1F2937;
}\r
.dark .odd\\:dark\\:bg-gray-800:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .even\\:dark\\:bg-gray-700:nth-child(even) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:border-gray-600:hover {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:border-gray-700:hover {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 180 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(250 202 21 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(132 225 188 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(180 198 252 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(202 191 253 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(248 180 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(164 202 254 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(26 86 219 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(28 100 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-green-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(5 122 85 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(200 30 30 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(224 36 36 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-400:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(227 160 8 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(108 43 217 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(144 97 249 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(142 75 16 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(81 69 205 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(191 18 93 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-yellow-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(159 88 10 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-indigo-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(88 80 236 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-purple-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(126 58 242 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:bg-pink-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(214 31 105 / var(--tw-bg-opacity));
}\r
.dark .dark\\:hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}\r
.dark .dark\\:hover\\:text-gray-300:hover {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(63 131 248 / var(--tw-border-opacity));
}\r
.dark .dark\\:focus\\:bg-gray-700:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}\r
.dark .dark\\:focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 131 248 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(119 29 29 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 49 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-900:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(74 29 150 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-cyan-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(21 94 117 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-lime-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(63 98 18 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-pink-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(153 21 75 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-700:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 102 114 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(249 128 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-indigo-800:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(66 56 157 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-blue-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(28 100 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-red-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(224 36 36 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-green-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 122 85 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-purple-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(126 58 242 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-teal-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(4 116 129 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-yellow-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(159 88 10 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-orange-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(208 56 1 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}\r
.dark .dark\\:focus\\:ring-gray-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));
}\r
.dark .group:hover .dark\\:group-hover\\:bg-gray-800\\/60 {
  background-color: rgb(31 41 55 / 0.6);
}\r
.dark .group:hover .dark\\:group-hover\\:text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}\r
.dark .group:focus .dark\\:group-focus\\:ring-gray-800\\/70 {
  --tw-ring-color: rgb(31 41 55 / 0.7);
}\r
.peer:focus ~ .dark .peer-focus\\:dark\\:text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(63 131 248 / var(--tw-text-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-blue-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 66 159 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-red-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(155 28 28 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-green-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(3 84 63 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-purple-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(85 33 181 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-yellow-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(114 59 19 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-teal-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(5 80 92 / var(--tw-ring-opacity));
}\r
.dark .peer:focus ~ .dark\\:peer-focus\\:ring-orange-800 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(138 44 13 / var(--tw-ring-opacity));
}\r
@media (min-width: 640px) {

  .sm\\:order-last {
    order: 9999;
  }

  .sm\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .sm\\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:inline-block {
    display: inline-block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-6 {
    height: 1.5rem;
  }

  .sm\\:h-64 {
    height: 16rem;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:h-7 {
    height: 1.75rem;
  }

  .sm\\:w-6 {
    width: 1.5rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:gap-6 {
    gap: 1.5rem;
  }

  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:p-8 {
    padding: 2rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .sm\\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .sm\\:pb-6 {
    padding-bottom: 1.5rem;
  }

  .sm\\:pr-8 {
    padding-right: 2rem;
  }

  .sm\\:text-center {
    text-align: center;
  }

  .sm\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:ring-8 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }
}\r
@media (min-width: 768px) {

  .md\\:order-1 {
    order: 1;
  }

  .md\\:ml-2 {
    margin-left: 0.5rem;
  }

  .md\\:mr-6 {
    margin-right: 1.5rem;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:w-48 {
    width: 12rem;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-xl {
    max-width: 36rem;
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:items-center {
    align-items: center;
  }

  .md\\:justify-between {
    justify-content: space-between;
  }

  .md\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--tw-space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(2rem * var(--tw-space-x-reverse));
    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\\:rounded-none {
    border-radius: 0px;
  }

  .md\\:rounded-l-lg {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  .md\\:border-0 {
    border-width: 0px;
  }

  .md\\:bg-transparent {
    background-color: transparent;
  }

  .md\\:p-6 {
    padding: 1.5rem;
  }

  .md\\:p-0 {
    padding: 0px;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:font-medium {
    font-weight: 500;
  }

  .md\\:text-blue-700 {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .md\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .md\\:hover\\:text-blue-700:hover {
    --tw-text-opacity: 1;
    color: rgb(26 86 219 / var(--tw-text-opacity));
  }

  .dark .md\\:dark\\:hover\\:bg-transparent:hover {
    background-color: transparent;
  }

  .dark .md\\:dark\\:hover\\:text-white:hover {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
}\r
@media (min-width: 1024px) {

  .lg\\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .lg\\:mt-6 {
    margin-top: 1.5rem;
  }

  .lg\\:p-8 {
    padding: 2rem;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}\r
@media (min-width: 1280px) {

  .xl\\:h-80 {
    height: 20rem;
  }

  .xl\\:pb-8 {
    padding-bottom: 2rem;
  }
}\r
@media (min-width: 1536px) {

  .\\32xl\\:h-96 {
    height: 24rem;
  }
}`)();
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

/* src\\lib\\components\\@peerpiper\\_ContactCard\\Icons.svelte generated by Svelte v3.48.0 */

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

/* src\\lib\\components\\@peerpiper\\_ContactCard\\Icon.svelte generated by Svelte v3.48.0 */

function add_css$3(target) {
	append_styles(target, "svelte-b6ce0n", ".icon.svelte-b6ce0n{position:relative;overflow:hidden;vertical-align:middle;-o-object-fit:contain;object-fit:contain;transform-origin:center center;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:currentColor}");
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
			attr(svg, "class", "icon  svelte-b6ce0n");
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

/* src\\lib\\components\\@peerpiper\\_ContactCard\\Content.svelte generated by Svelte v3.48.0 */

function add_css$2(target) {
	append_styles(target, "svelte-l47n8i", ".svelte-l47n8i,.svelte-l47n8i::before,.svelte-l47n8i::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-l47n8i::before,.svelte-l47n8i::after{--tw-content:''}.svelte-l47n8i:-moz-focusring{outline:auto}.svelte-l47n8i:-moz-ui-invalid{box-shadow:none}.svelte-l47n8i::-webkit-inner-spin-button,.svelte-l47n8i::-webkit-outer-spin-button{height:auto}.svelte-l47n8i::-webkit-search-decoration{-webkit-appearance:none}.svelte-l47n8i::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-l47n8i:disabled{cursor:default}.svelte-l47n8i::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-l47n8i::-webkit-date-and-time-value{min-height:1.5em}.svelte-l47n8i,.svelte-l47n8i::before,.svelte-l47n8i::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-l47n8i::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-l47n8i::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.m-2.svelte-l47n8i{margin:0.5rem}.flex.svelte-l47n8i{display:flex}@-webkit-keyframes svelte-l47n8i-spin{to{transform:rotate(360deg)}}@keyframes svelte-l47n8i-spin{to{transform:rotate(360deg)}}.items-center.svelte-l47n8i{align-items:center}.justify-center.svelte-l47n8i{justify-content:center}.bg-contain.svelte-l47n8i{background-size:contain}.bg-no-repeat.svelte-l47n8i{background-repeat:no-repeat}.text-center.svelte-l47n8i{text-align:center}.align-middle.svelte-l47n8i{vertical-align:middle}.text-slate-500.svelte-l47n8i{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
}

const get_first_slot_changes = dirty => ({});
const get_first_slot_context = ctx => ({});

// (8:21)      
function fallback_block$1(ctx) {
	let div;
	let icon;
	let current;
	icon = new Icon({ props: { name: /*name*/ ctx[0] } });

	return {
		c() {
			div = element("div");
			create_component(icon.$$.fragment);
			attr(div, "class", "text-slate-500 svelte-l47n8i");
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
			attr(div0, "class", "align-middle svelte-l47n8i");
			attr(div1, "class", "align-middle svelte-l47n8i");
			attr(div2, "class", "flex align-middle items-center text-center justify-center bg-contain bg-no-repeat m-2 svelte-l47n8i");
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

/* src\\lib\\components\\@peerpiper\\_ContactCard\\ContextMenu.svelte generated by Svelte v3.48.0 */

function add_css$1(target) {
	append_styles(target, "svelte-l47n8i", ".svelte-l47n8i,.svelte-l47n8i::before,.svelte-l47n8i::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-l47n8i::before,.svelte-l47n8i::after{--tw-content:''}b.svelte-l47n8i{font-weight:bolder}input.svelte-l47n8i{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.svelte-l47n8i:-moz-focusring{outline:auto}.svelte-l47n8i:-moz-ui-invalid{box-shadow:none}.svelte-l47n8i::-webkit-inner-spin-button,.svelte-l47n8i::-webkit-outer-spin-button{height:auto}.svelte-l47n8i::-webkit-search-decoration{-webkit-appearance:none}.svelte-l47n8i::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-l47n8i::-moz-placeholder{opacity:1;color:#9CA3AF}input.svelte-l47n8i:-ms-input-placeholder{opacity:1;color:#9CA3AF}input.svelte-l47n8i::placeholder{opacity:1;color:#9CA3AF}.svelte-l47n8i:disabled{cursor:default}svg.svelte-l47n8i{display:block;vertical-align:middle}[type='text'].svelte-l47n8i{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6B7280;border-width:1px;border-radius:0px;padding-top:0.5rem;padding-right:0.75rem;padding-bottom:0.5rem;padding-left:0.75rem;font-size:1rem;line-height:1.5rem;--tw-shadow:0 0 #0000}[type='text'].svelte-l47n8i:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#1C64F2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);border-color:#1C64F2}input.svelte-l47n8i::-moz-placeholder{color:#6B7280;opacity:1}input.svelte-l47n8i:-ms-input-placeholder{color:#6B7280;opacity:1}input.svelte-l47n8i::placeholder{color:#6B7280;opacity:1}.svelte-l47n8i::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-l47n8i::-webkit-date-and-time-value{min-height:1.5em}[type='checkbox'].svelte-l47n8i{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#1C64F2;background-color:#fff;border-color:#6B7280;border-width:1px;--tw-shadow:0 0 #0000}[type='checkbox'].svelte-l47n8i{border-radius:0px}[type='checkbox'].svelte-l47n8i:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:#1C64F2;--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}[type='checkbox'].svelte-l47n8i:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox'].svelte-l47n8i:checked{background-image:url(\\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\\")}[type='checkbox'].svelte-l47n8i:indeterminate{background-image:url(\\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\\");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type='checkbox'].svelte-l47n8i:indeterminate:hover,[type='checkbox'].svelte-l47n8i:indeterminate:focus{border-color:transparent;background-color:currentColor}.svelte-l47n8i,.svelte-l47n8i::before,.svelte-l47n8i::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-l47n8i::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-l47n8i::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.z-50.svelte-l47n8i{z-index:50}.mx-4.svelte-l47n8i{margin-left:1rem;margin-right:1rem}.mx-1.svelte-l47n8i{margin-left:0.25rem;margin-right:0.25rem}.flex.svelte-l47n8i{display:flex}.h-10.svelte-l47n8i{height:2.5rem}.w-10.svelte-l47n8i{width:2.5rem}@-webkit-keyframes svelte-l47n8i-spin{to{transform:rotate(360deg)}}@keyframes svelte-l47n8i-spin{to{transform:rotate(360deg)}}.flex-row.svelte-l47n8i{flex-direction:row}.flex-col.svelte-l47n8i{flex-direction:column}.justify-end.svelte-l47n8i{justify-content:flex-end}.rounded-sm.svelte-l47n8i{border-radius:0.125rem}.border.svelte-l47n8i{border-width:1px}.border-slate-300.svelte-l47n8i{--tw-border-opacity:1;border-color:rgb(203 213 225 / var(--tw-border-opacity))}.bg-slate-50.svelte-l47n8i{--tw-bg-opacity:1;background-color:rgb(248 250 252 / var(--tw-bg-opacity))}.p-4.svelte-l47n8i{padding:1rem}.text-left.svelte-l47n8i{text-align:left}.text-sm.svelte-l47n8i{font-size:0.875rem;line-height:1.25rem}.text-lg.svelte-l47n8i{font-size:1.125rem;line-height:1.75rem}.drop-shadow-lg.svelte-l47n8i{--tw-drop-shadow:drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
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
			attr(div0, "class", "text-left border-slate-300 svelte-l47n8i");
			attr(div1, "class", "flex flex-row justify-end z-50 bg-slate-50 border drop-shadow-lg p-4 mx-4 rounded-sm svelte-l47n8i");
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
			span.innerHTML = \`Paste the <b class="svelte-l47n8i">Public Key</b> you want to grant access\`;
			t3 = space();
			create_component(content0.$$.fragment);
			t4 = space();
			create_component(content1.$$.fragment);
			attr(span, "class", "text-sm svelte-l47n8i");
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
			attr(input, "class", "svelte-l47n8i");
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
			attr(span, "class", "text-sm mx-1 text-lg svelte-l47n8i");
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
			attr(input, "class", "svelte-l47n8i");
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
			span.innerHTML = \`Add <b class="svelte-l47n8i">Contact</b>\`;
			attr(input, "type", "checkbox");
			input.checked = true;
			attr(input, "class", "svelte-l47n8i");
			attr(span, "class", "text-sm mx-1 svelte-l47n8i");
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
			div0.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 752" class="svelte-l47n8i"><path d="M346.9 153.4c-6.2 0-12.1 5.2-13.7 10.2l-12.4 43.5a176 176 0 0 0-25.2 10.4l-39.5-21.9c-5.3-3-12.7-2-17 2.4l-41 41.1a14.6 14.6 0 0 0-2.4 16.9l22 39.6a171 171 0 0 0-10.4 25l-43.5 12.5c-6 1.7-10.4 7.6-10.4 13.8v58.3c0 6 4.5 12 10.4 13.6L207 431c2.9 8.7 6.5 17 10.5 25.1L195.7 496a14.7 14.7 0 0 0 2.4 16.9l41 41.1a14.6 14.6 0 0 0 17 2.4l39.5-22c8.1 4.2 16.5 7.7 25.2 10.6l12.4 43.3a14.6 14.6 0 0 0 13.7 10.4h58.3c6 0 12-4.5 13.6-10.4l12.4-43.3c8.7-2.9 17.1-6.4 25.2-10.5l39.5 21.9c5.3 3 12.7 2 17-2.4l41-41.1a14.6 14.6 0 0 0 2.4-17l-22-39.6c4.2-8 7.7-16.4 10.6-25.1l43.3-12.3a14.6 14.6 0 0 0 10.4-13.6V347c0-6.2-4.4-12.1-10.4-13.8l-43.5-12.4c-2.8-8.7-6.3-17-10.3-25l21.9-39.7a14.7 14.7 0 0 0-2.4-16.9l-41-41.1a14.6 14.6 0 0 0-17-2.4l-39.5 21.9c-8-4.1-16.5-7.5-25.2-10.4l-12.4-43.5a14.6 14.6 0 0 0-13.6-10.2zm10.6 28.4h37L406 222c1.3 4.7 5.2 8.7 10 10 11.9 3.2 23.2 8 33.8 14 4.2 2.4 9.7 2.5 14 .2l36.6-20.5 26 26-20.4 36.6a14.5 14.5 0 0 0 0 14c6.1 10.6 11 22 14.3 34a14 14 0 0 0 9.7 9.9l40.3 11.4v36.9L530 406a14.5 14.5 0 0 0-9.7 9.8 149 149 0 0 1-14.3 34 14.5 14.5 0 0 0 0 14l20.5 36.6-26 26-36.8-20.5a14.5 14.5 0 0 0-13.9.1c-10.6 6-22 11-33.9 14.2a14.5 14.5 0 0 0-9.9 9.8l-11.4 40.3h-37L346.2 530a14.5 14.5 0 0 0-9.9-9.8c-12-3.3-23.3-8.1-33.9-14.2a14.5 14.5 0 0 0-13.9-.1l-36.7 20.4-26-25.9 20.4-36.7c2.3-4.2 2.3-9.7 0-13.9-6-10.6-11-22-14.2-34a14.5 14.5 0 0 0-9.8-9.8l-40.3-11.5v-36.9l40.3-11.4c4.6-1.3 8.5-5.2 9.8-10a149 149 0 0 1 14.2-34c2.3-4.2 2.3-9.6 0-13.9l-20.5-36.5 26-26 36.8 20.4c4.2 2.3 9.7 2.2 14-.2a146 146 0 0 1 33.8-14 15 15 0 0 0 10-10zm18.5 90c-57.4 0-104.2 46.8-104.2 104.2S318.6 480.2 376 480.2c57.4 0 104.2-46.8 104.2-104.2S433.4 271.8 376 271.8zm0 28.4c42 0 75.8 33.8 75.8 75.8S418 451.8 376 451.8 300.2 418 300.2 376s33.8-75.8 75.8-75.8z" class="svelte-l47n8i"></path></svg>\`;
			t = space();
			if (if_block) if_block.c();
			attr(div0, "class", "w-10 h-10 svelte-l47n8i");
			attr(div1, "class", "flex flex-row justify-end svelte-l47n8i");
			attr(div2, "class", "flex flex-col svelte-l47n8i");
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
	append_styles(target, "svelte-emwvz3", ".svelte-emwvz3,.svelte-emwvz3::before,.svelte-emwvz3::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-emwvz3::before,.svelte-emwvz3::after{--tw-content:''}input.svelte-emwvz3{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}.svelte-emwvz3:-moz-focusring{outline:auto}.svelte-emwvz3:-moz-ui-invalid{box-shadow:none}.svelte-emwvz3::-webkit-inner-spin-button,.svelte-emwvz3::-webkit-outer-spin-button{height:auto}.svelte-emwvz3::-webkit-search-decoration{-webkit-appearance:none}.svelte-emwvz3::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}blockquote.svelte-emwvz3,p.svelte-emwvz3{margin:0}input.svelte-emwvz3::-moz-placeholder{opacity:1;color:#9CA3AF}input.svelte-emwvz3:-ms-input-placeholder{opacity:1;color:#9CA3AF}input.svelte-emwvz3::placeholder{opacity:1;color:#9CA3AF}.svelte-emwvz3:disabled{cursor:default}img.svelte-emwvz3,svg.svelte-emwvz3{display:block;vertical-align:middle}img.svelte-emwvz3{max-width:100%;height:auto}input.svelte-emwvz3::-moz-placeholder{color:#6B7280;opacity:1}input.svelte-emwvz3:-ms-input-placeholder{color:#6B7280;opacity:1}input.svelte-emwvz3::placeholder{color:#6B7280;opacity:1}.svelte-emwvz3::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-emwvz3::-webkit-date-and-time-value{min-height:1.5em}[type='file'].svelte-emwvz3{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type='file'].svelte-emwvz3:focus{outline:1px auto inherit}input[type=file].svelte-emwvz3::-webkit-file-upload-button{color:white;background:#1F2937;border:0;font-weight:500;font-size:0.875rem;cursor:pointer;padding-top:0.625rem;padding-bottom:0.625rem;padding-left:2rem;padding-right:1rem;-webkit-margin-start:-1rem;margin-inline-start:-1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}input[type=file].svelte-emwvz3::file-selector-button{color:white;background:#1F2937;border:0;font-weight:500;font-size:0.875rem;cursor:pointer;padding-top:0.625rem;padding-bottom:0.625rem;padding-left:2rem;padding-right:1rem;-webkit-margin-start:-1rem;margin-inline-start:-1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}input[type=file].svelte-emwvz3::-webkit-file-upload-button:hover{background:#374151}input[type=file].svelte-emwvz3::file-selector-button:hover{background:#374151}.svelte-emwvz3,.svelte-emwvz3::before,.svelte-emwvz3::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-emwvz3::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-emwvz3::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.absolute.svelte-emwvz3{position:absolute}.relative.svelte-emwvz3{position:relative}.z-10.svelte-emwvz3{z-index:10}.m-auto.svelte-emwvz3{margin:auto}.my-2.svelte-emwvz3{margin-top:0.5rem;margin-bottom:0.5rem}.mx-auto.svelte-emwvz3{margin-left:auto;margin-right:auto}.mx-2.svelte-emwvz3{margin-left:0.5rem;margin-right:0.5rem}.-mt-20.svelte-emwvz3{margin-top:-5rem}.mt-5.svelte-emwvz3{margin-top:1.25rem}.mb-7.svelte-emwvz3{margin-bottom:1.75rem}.flex.svelte-emwvz3{display:flex}.h-24.svelte-emwvz3{height:6rem}.h-32.svelte-emwvz3{height:8rem}.w-96.svelte-emwvz3{width:24rem}.w-32.svelte-emwvz3{width:8rem}.max-w-lg.svelte-emwvz3{max-width:32rem}.max-w-none.svelte-emwvz3{max-width:none}.flex-none.svelte-emwvz3{flex:none}@-webkit-keyframes svelte-emwvz3-spin{to{transform:rotate(360deg)}}@keyframes svelte-emwvz3-spin{to{transform:rotate(360deg)}}.items-center.svelte-emwvz3{align-items:center}.justify-center.svelte-emwvz3{justify-content:center}.overflow-hidden.svelte-emwvz3{overflow:hidden}.rounded-2xl.svelte-emwvz3{border-radius:1rem}.rounded-full.svelte-emwvz3{border-radius:9999px}.bg-slate-100.svelte-emwvz3{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.bg-white.svelte-emwvz3{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-green-400.svelte-emwvz3{--tw-bg-opacity:1;background-color:rgb(49 196 141 / var(--tw-bg-opacity))}.fill-slate-500.svelte-emwvz3{fill:#64748b}.object-cover.svelte-emwvz3{-o-object-fit:cover;object-fit:cover}.px-3.svelte-emwvz3{padding-left:0.75rem;padding-right:0.75rem}.text-center.svelte-emwvz3{text-align:center}.text-xl.svelte-emwvz3{font-size:1.25rem;line-height:1.75rem}.text-base.svelte-emwvz3{font-size:1rem;line-height:1.5rem}.text-sky-500.svelte-emwvz3{--tw-text-opacity:1;color:rgb(14 165 233 / var(--tw-text-opacity))}.text-white.svelte-emwvz3{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow-xl.svelte-emwvz3{--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.drop-shadow-xl.svelte-emwvz3{--tw-drop-shadow:drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
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
			attr(img, "class", "rounded-full bg-white absolute max-w-none object-cover svelte-emwvz3");
			if (!src_url_equal(img.src, img_src_value = /*profile*/ ctx[0].avatar)) attr(img, "src", img_src_value);
			attr(img, "alt", "d");
			set_style(img, "width", "100%");
			set_style(img, "height", "100%");
			set_style(img, "transform-origin", "50% 50% 0px");
			attr(div, "class", "relative z-10 overflow-hidden flex-none mx-auto w-32 h-32 drop-shadow-xl svelte-emwvz3");
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
			attr(path, "class", "svelte-emwvz3");
			attr(svg, "class", "rounded-full bg-white shadow-xl drop-shadow-xl svelte-emwvz3");
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
			attr(span, "class", "text-sky-500 svelte-emwvz3");
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
			attr(div0, "class", "h-24 bg-white svelte-emwvz3");
			set_style(input, "display", "none");
			attr(input, "type", "file");
			attr(input, "accept", ".jpg, .jpeg, .png");
			attr(input, "class", "svelte-emwvz3");
			attr(div1, "class", "-mt-20 h-32 flex justify-center svelte-emwvz3");
			attr(div2, "class", "mt-5 mb-7 px-3 text-center text-xl svelte-emwvz3");
			attr(p, "class", "mx-2 mb-7 text-center text-base svelte-emwvz3");
			attr(blockquote, "class", "svelte-emwvz3");
			attr(footer, "class", "text-center bg-green-400 text-white svelte-emwvz3");
			attr(div3, "class", "m-auto fill-slate-500 my-2 w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-100 shadow-xl svelte-emwvz3");
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
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
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

let current_component;
function set_current_component(component) {
    current_component = component;
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

/* src\\lib\\components\\@peerpiper\\ContactList.svelte generated by Svelte v3.48.0 */

function add_css(target) {
	append_styles(target, "svelte-emwvz3", ".svelte-emwvz3,.svelte-emwvz3::before,.svelte-emwvz3::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-emwvz3::before,.svelte-emwvz3::after{--tw-content:''}.svelte-emwvz3:-moz-focusring{outline:auto}.svelte-emwvz3:-moz-ui-invalid{box-shadow:none}.svelte-emwvz3::-webkit-inner-spin-button,.svelte-emwvz3::-webkit-outer-spin-button{height:auto}.svelte-emwvz3::-webkit-search-decoration{-webkit-appearance:none}.svelte-emwvz3::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-emwvz3:disabled{cursor:default}.svelte-emwvz3::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-emwvz3::-webkit-date-and-time-value{min-height:1.5em}.svelte-emwvz3,.svelte-emwvz3::before,.svelte-emwvz3::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-emwvz3::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-emwvz3::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}.my-4.svelte-emwvz3{margin-top:1rem;margin-bottom:1rem}.mx-4.svelte-emwvz3{margin-left:1rem;margin-right:1rem}.ml-4.svelte-emwvz3{margin-left:1rem}.mr-4.svelte-emwvz3{margin-right:1rem}.flex.svelte-emwvz3{display:flex}.w-1\\\\/2.svelte-emwvz3{width:50%}.flex-1.svelte-emwvz3{flex:1 1 0%}@-webkit-keyframes svelte-emwvz3-spin{to{transform:rotate(360deg)}}@keyframes svelte-emwvz3-spin{to{transform:rotate(360deg)}}.flex-row.svelte-emwvz3{flex-direction:row}.rounded.svelte-emwvz3{border-radius:0.25rem}.border-r-gray-400.svelte-emwvz3{--tw-border-opacity:1;border-right-color:rgb(156 163 175 / var(--tw-border-opacity))}.bg-gray-50.svelte-emwvz3{--tw-bg-opacity:1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-gray-100.svelte-emwvz3{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.p-4.svelte-emwvz3{padding:1rem}.font-mono.svelte-emwvz3{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\"Liberation Mono\\", \\"Courier New\\", monospace}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (6:1) {#each contacts as contact}
function create_each_block(ctx) {
	let div2;
	let div0;
	let t0_value = /*contact*/ ctx[1].handle + "";
	let t0;
	let t1;
	let div1;
	let t2_value = /*contact*/ ctx[1].pubkey + "";
	let t2;
	let t3;

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			t0 = text(t0_value);
			t1 = space();
			div1 = element("div");
			t2 = text(t2_value);
			t3 = space();
			attr(div0, "class", "flex-1 bg-gray-100 ml-4 p-4 w-1/2 border-r-gray-400 svelte-emwvz3");
			attr(div1, "class", "flex-1 font-mono bg-gray-100 mr-4 p-4 w-1/2 svelte-emwvz3");
			attr(div2, "class", "flex flex-row mx-4 bg-gray-50 rounded p-4  svelte-emwvz3");
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
		p(ctx, dirty) {
			if (dirty & /*contacts*/ 1 && t0_value !== (t0_value = /*contact*/ ctx[1].handle + "")) set_data(t0, t0_value);
			if (dirty & /*contacts*/ 1 && t2_value !== (t2_value = /*contact*/ ctx[1].pubkey + "")) set_data(t2, t2_value);
		},
		d(detaching) {
			if (detaching) detach(div2);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let each_value = /*contacts*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(div, "class", "my-4 svelte-emwvz3");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*contacts*/ 1) {
				each_value = /*contacts*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			destroy_each(each_blocks, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { contacts = [{ pubkey: null, handle: null }] } = $$props;

	$$self.$$set = $$props => {
		if ('contacts' in $$props) $$invalidate(0, contacts = $$props.contacts);
	};

	return [contacts];
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

function add_css$2(target) {
	append_styles(target, "svelte-qmwn23", ".svelte-qmwn23,.svelte-qmwn23::before,.svelte-qmwn23::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-qmwn23::before,.svelte-qmwn23::after{--tw-content:''}.svelte-qmwn23:-moz-focusring{outline:auto}.svelte-qmwn23:-moz-ui-invalid{box-shadow:none}.svelte-qmwn23::-webkit-inner-spin-button,.svelte-qmwn23::-webkit-outer-spin-button{height:auto}.svelte-qmwn23::-webkit-search-decoration{-webkit-appearance:none}.svelte-qmwn23::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-qmwn23:disabled{cursor:default}.svelte-qmwn23::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-qmwn23::-webkit-date-and-time-value{min-height:1.5em}.svelte-qmwn23,.svelte-qmwn23::before,.svelte-qmwn23::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-qmwn23::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-qmwn23::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.flex.svelte-qmwn23{display:flex}@-webkit-keyframes svelte-qmwn23-spin{to{transform:rotate(360deg)}}@keyframes svelte-qmwn23-spin{to{transform:rotate(360deg)}}.flex-col.svelte-qmwn23{flex-direction:column}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
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
			attr(div, "class", "flex flex-col svelte-qmwn23");
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
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {}, add_css$2);
	}
}

/* src\\lib\\components\\@peerpiper\\Wrapper.svelte generated by Svelte v3.48.0 */

function add_css$1(target) {
	append_styles(target, "svelte-qmwn23", ".svelte-qmwn23,.svelte-qmwn23::before,.svelte-qmwn23::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-qmwn23::before,.svelte-qmwn23::after{--tw-content:''}.svelte-qmwn23:-moz-focusring{outline:auto}.svelte-qmwn23:-moz-ui-invalid{box-shadow:none}.svelte-qmwn23::-webkit-inner-spin-button,.svelte-qmwn23::-webkit-outer-spin-button{height:auto}.svelte-qmwn23::-webkit-search-decoration{-webkit-appearance:none}.svelte-qmwn23::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-qmwn23:disabled{cursor:default}.svelte-qmwn23::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-qmwn23::-webkit-date-and-time-value{min-height:1.5em}.svelte-qmwn23,.svelte-qmwn23::before,.svelte-qmwn23::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-qmwn23::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-qmwn23::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.flex-1.svelte-qmwn23{flex:1 1 0%}@-webkit-keyframes svelte-qmwn23-spin{to{transform:rotate(360deg)}}@keyframes svelte-qmwn23-spin{to{transform:rotate(360deg)}}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
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
			attr(div, "class", "flex-1 svelte-qmwn23");
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
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {}, add_css$1);
	}
}

/* src\\lib\\components\\@peerpiper\\TagManager.svelte generated by Svelte v3.48.0 */

function add_css(target) {
	append_styles(target, "svelte-l47n8i", ".svelte-l47n8i,.svelte-l47n8i::before,.svelte-l47n8i::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#E5E7EB}.svelte-l47n8i::before,.svelte-l47n8i::after{--tw-content:''}.svelte-l47n8i:-moz-focusring{outline:auto}.svelte-l47n8i:-moz-ui-invalid{box-shadow:none}.svelte-l47n8i::-webkit-inner-spin-button,.svelte-l47n8i::-webkit-outer-spin-button{height:auto}.svelte-l47n8i::-webkit-search-decoration{-webkit-appearance:none}.svelte-l47n8i::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.svelte-l47n8i:disabled{cursor:default}.svelte-l47n8i::-webkit-datetime-edit-fields-wrapper{padding:0}.svelte-l47n8i::-webkit-date-and-time-value{min-height:1.5em}.svelte-l47n8i,.svelte-l47n8i::before,.svelte-l47n8i::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-l47n8i::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-l47n8i::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(63 131 248 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}@-webkit-keyframes svelte-l47n8i-spin{to{transform:rotate(360deg)}}@keyframes svelte-l47n8i-spin{to{transform:rotate(360deg)}}.text-xl.svelte-l47n8i{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-l47n8i{font-weight:700}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}");
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i].esModule;
	child_ctx[6] = list[i].props !== undefined ? list[i].props : {};
	child_ctx[8] = i;
	return child_ctx;
}

// (26:0) {#if ComponentMounter && params && params.length > 0}
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

			if (dirty & /*$$scope, params, ComponentMounter*/ 515) {
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

// (30:3) <ComponentWrapper>
function create_default_slot_1(ctx) {
	let switch_instance;
	let t;
	let current;

	function change_handler(...args) {
		return /*change_handler*/ ctx[3](/*i*/ ctx[8], ...args);
	}

	var switch_value = /*ComponentMounter*/ ctx[1];

	function switch_props(ctx) {
		return {
			props: {
				esModule: /*esModule*/ ctx[5],
				props: /*props*/ ctx[6]
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
			if (dirty & /*params*/ 1) switch_instance_changes.esModule = /*esModule*/ ctx[5];
			if (dirty & /*params*/ 1) switch_instance_changes.props = /*props*/ ctx[6];

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

// (28:2) {#each params as { esModule, props = { }
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

			if (dirty & /*$$scope, ComponentMounter, params*/ 515) {
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

// (27:1) <OutterWraper>
function create_default_slot(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*params*/ ctx[0];
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
			if (dirty & /*ComponentMounter, params, update*/ 7) {
				each_value = /*params*/ ctx[0];
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
	let div;
	let t1;
	let if_block_anchor;
	let current;
	let if_block = /*ComponentMounter*/ ctx[1] && /*params*/ ctx[0] && /*params*/ ctx[0].length > 0 && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			div.textContent = "The Tag Manager v6";
			t1 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			attr(div, "class", "text-xl font-bold svelte-l47n8i");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			insert(target, t1, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*ComponentMounter*/ ctx[1] && /*params*/ ctx[0] && /*params*/ ctx[0].length > 0) {
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
			if (detaching) detach(div);
			if (detaching) detach(t1);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	const dispatch = createEventDispatcher();
	let ComponentMounter;

	onMount(async () => {
		// not SSR compatible
		$$invalidate(1, ComponentMounter = (await Promise.resolve().then(function () { return ComponentMounter$1; })).default);
	});

	let { params } = $$props;

	function update(e, i) {
		$$invalidate(0, params[i] = Object.assign({}, params[i].props, { ...e.detail }), params);
		dispatch('change', params);
	}

	const change_handler = (i, e) => update(e, i);

	$$self.$$set = $$props => {
		if ('params' in $$props) $$invalidate(0, params = $$props.params);
	};

	return [params, ComponentMounter, update, change_handler];
}

class TagManager extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { params: 0 }, add_css);
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
		// console.log({ css });
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

		// await tick();
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
function create_if_block_2(ctx) {
  let switch_instance;
  let updating_wallet;
  let switch_instance_anchor;
  let current;
  function switch_instance_wallet_binding(value) {
    ctx[4](value);
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
      tag: ctx[9],
      ipfsNode: ctx[8],
      rootCID: ctx[2],
      $$slots: {
        default: [
          create_default_slot_1,
          ({ props, handleChange }) => ({ 10: props, 11: handleChange }),
          ({ props, handleChange }) => (props ? 1024 : 0) | (handleChange ? 2048 : 0)
        ]
      },
      $$scope: { ctx }
    }
  });
  proxcryptor.$on("rootCID", ctx[5]);
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
      if (dirty & 512)
        proxcryptor_changes.tag = ctx2[9];
      if (dirty & 256)
        proxcryptor_changes.ipfsNode = ctx2[8];
      if (dirty & 4)
        proxcryptor_changes.rootCID = ctx2[2];
      if (dirty & 6144) {
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
function create_default_slot_1(ctx) {
  let gateway;
  let current;
  gateway = new Gateway({
    props: {
      esModule: TagManager,
      props: { params: ctx[3] }
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
function create_default_slot(ctx) {
  let t0_value = (!ctx[8] ? refresh() : "") + "";
  let t0;
  let t1;
  let t2_value = !ctx[0] ? "Connect to PeerPiper Wallet" : "";
  let t2;
  let t3;
  let div;
  let current;
  let if_block = ctx[8] && ctx[0] && create_if_block(ctx);
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
      attr(div, "class", "border flex-auto h-96");
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
      if ((!current || dirty & 256) && t0_value !== (t0_value = (!ctx2[8] ? refresh() : "") + ""))
        set_data(t0, t0_value);
      if ((!current || dirty & 1) && t2_value !== (t2_value = !ctx2[0] ? "Connect to PeerPiper Wallet" : ""))
        set_data(t2, t2_value);
      if (ctx2[8] && ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 257) {
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
function create_fragment$1(ctx) {
  let link;
  let t0;
  let div;
  let t1;
  let t2;
  let t3;
  let ipfsmanager;
  let updating_rootCID;
  let current;
  let if_block = ctx[1] && create_if_block_2(ctx);
  function ipfsmanager_rootCID_binding(value) {
    ctx[6](value);
  }
  let ipfsmanager_props = {
    $$slots: {
      default: [
        create_default_slot,
        ({ ipfsNode, tag }) => ({ 8: ipfsNode, 9: tag }),
        ({ ipfsNode, tag }) => (ipfsNode ? 256 : 0) | (tag ? 512 : 0)
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
          if_block = create_if_block_2(ctx2);
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
      if (dirty & 4869) {
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
  let params = [
    {
      esModule: ContactCard,
      props: {
        profile: { firstName: "Doug", lastName: "Anders =)" }
      }
    },
    {
      esModule: ContactList,
      props: {
        contacts: [
          {
            pubkey: "DouG123mnbD",
            handle: "douganderson444"
          },
          { pubkey: "Adr1aN", handle: "aamath" },
          { pubkey: "DArkHHH", handle: "darikj" }
        ]
      }
    }
  ];
  onMount(async () => {
    if (!wallet) {
      $$invalidate(1, { Web3WalletMenu } = await __vitePreload(() => import("../chunks/index-f08a2899.js"), true ? ["chunks/index-f08a2899.js","assets/index-f37f8aff.css","chunks/index-64ae2edc.js","chunks/preload-helper-ef2a18a4.js","chunks/index-5cd534b3.js","chunks/cid-da67497d.js"] : void 0), Web3WalletMenu);
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
    params,
    switch_instance_wallet_binding,
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
//# sourceMappingURL=index.svelte-a5e399e5.js.map
