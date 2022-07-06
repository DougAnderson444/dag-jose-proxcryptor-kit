import { SvelteComponent, init, safe_not_equal, create_slot, element, claim_element, children, detach, attr, insert_hydration, update_slot_base, get_all_dirty_from_scope, get_slot_changes, transition_in, transition_out } from "../chunks/index-64ae2edc.js";
var HouseSolid_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "svg.svelte-1es2uhx{width:auto;height:2em;display:block}")();
var Menu_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".menu.svelte-1w9krkj{display:flex;flex-direction:row;background-color:black;justify-content:space-evenly;align-items:center;padding:0.7em 0.2em}.menu-item.svelte-1w9krkj{margin:0.25em}")();
var app = /* @__PURE__ */ (() => `/*
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
}\r
	html {\r
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\r
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\r
			'Segoe UI Symbol', 'Noto Color Emoji';\r
	}\r
	body,\r
	#svelte {\r
		min-height: 100vh;\r
		margin: 0;\r
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
.h-6 {
  height: 1.5rem;
}\r
.h-96 {
  height: 24rem;
}\r
.h-screen {
  height: 100vh;
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
.flex-1 {
  flex: 1 1 0%;
}\r
.flex-auto {
  flex: 1 1 auto;
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
.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 159 110 / var(--tw-bg-opacity));
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
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}\r
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}\r
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
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
.hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(4 108 78 / var(--tw-bg-opacity));
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
}\r
`)();
function create_fragment(ctx) {
  let main;
  let current;
  const default_slot_template = ctx[1].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[0], null);
  return {
    c() {
      main = element("main");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(main, "class", "relative flex flex-col h-screen");
    },
    m(target, anchor) {
      insert_hydration(target, main, anchor);
      if (default_slot) {
        default_slot.m(main, null);
      }
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
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      if (default_slot)
        default_slot.d(detaching);
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
//# sourceMappingURL=__layout.svelte-f62d1b2d.js.map
