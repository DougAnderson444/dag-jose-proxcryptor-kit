var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { commonjsRequire, getAugmentedNamespace, commonjsGlobal } from "./vendor-0410968b.js";
import { require$$0 as require$$0$1, elliptic } from "./elliptic-eff0a372.js";
import { hexDigestMessage } from "./index-18c330cc.js";
import "./singletons-f3a0af73.js";
import "./stores-7187c4f5.js";
var random = {};
var system = {};
var browser = {};
Object.defineProperty(browser, "__esModule", { value: true });
var QUOTA = 65536;
var BrowserRandomSource = function() {
  function BrowserRandomSource2() {
    this.isAvailable = false;
    this.isInstantiated = false;
    var browserCrypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
    if (browserCrypto && browserCrypto.getRandomValues) {
      this._crypto = browserCrypto;
      this.isAvailable = true;
      this.isInstantiated = true;
    }
  }
  BrowserRandomSource2.prototype.randomBytes = function(length2) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Browser random byte generator is not available.");
    }
    var out = new Uint8Array(length2);
    for (var i = 0; i < out.length; i += QUOTA) {
      this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
    }
    return out;
  };
  return BrowserRandomSource2;
}();
browser.BrowserRandomSource = BrowserRandomSource;
var node = {};
var wipe$1 = {};
Object.defineProperty(wipe$1, "__esModule", { value: true });
function wipe(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = 0;
  }
  return array;
}
wipe$1.wipe = wipe;
Object.defineProperty(node, "__esModule", { value: true });
var wipe_1$2 = wipe$1;
var NodeRandomSource = function() {
  function NodeRandomSource2() {
    this.isAvailable = false;
    this.isInstantiated = false;
    if (typeof commonjsRequire !== "undefined") {
      var nodeCrypto = require$$0$1;
      if (nodeCrypto && nodeCrypto.randomBytes) {
        this._crypto = nodeCrypto;
        this.isAvailable = true;
        this.isInstantiated = true;
      }
    }
  }
  NodeRandomSource2.prototype.randomBytes = function(length2) {
    if (!this.isAvailable || !this._crypto) {
      throw new Error("Node.js random byte generator is not available.");
    }
    var buffer2 = this._crypto.randomBytes(length2);
    if (buffer2.length !== length2) {
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    }
    var out = new Uint8Array(length2);
    for (var i = 0; i < out.length; i++) {
      out[i] = buffer2[i];
    }
    wipe_1$2.wipe(buffer2);
    return out;
  };
  return NodeRandomSource2;
}();
node.NodeRandomSource = NodeRandomSource;
Object.defineProperty(system, "__esModule", { value: true });
var browser_1 = browser;
var node_1 = node;
var SystemRandomSource = function() {
  function SystemRandomSource2() {
    this.isAvailable = false;
    this.name = "";
    this._source = new browser_1.BrowserRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Browser";
      return;
    }
    this._source = new node_1.NodeRandomSource();
    if (this._source.isAvailable) {
      this.isAvailable = true;
      this.name = "Node";
      return;
    }
  }
  SystemRandomSource2.prototype.randomBytes = function(length2) {
    if (!this.isAvailable) {
      throw new Error("System random byte generator is not available.");
    }
    return this._source.randomBytes(length2);
  };
  return SystemRandomSource2;
}();
system.SystemRandomSource = SystemRandomSource;
var binary = {};
var int = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  function imulShim(a, b) {
    var ah = a >>> 16 & 65535, al = a & 65535;
    var bh = b >>> 16 & 65535, bl = b & 65535;
    return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
  }
  exports.mul = Math.imul || imulShim;
  function add(a, b) {
    return a + b | 0;
  }
  exports.add = add;
  function sub(a, b) {
    return a - b | 0;
  }
  exports.sub = sub;
  function rotl(x, n) {
    return x << n | x >>> 32 - n;
  }
  exports.rotl = rotl;
  function rotr(x, n) {
    return x << 32 - n | x >>> n;
  }
  exports.rotr = rotr;
  function isIntegerShim(n) {
    return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
  }
  exports.isInteger = Number.isInteger || isIntegerShim;
  exports.MAX_SAFE_INTEGER = 9007199254740991;
  exports.isSafeInteger = function(n) {
    return exports.isInteger(n) && (n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER);
  };
})(int);
Object.defineProperty(binary, "__esModule", { value: true });
var int_1 = int;
function readInt16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) << 16 >> 16;
}
binary.readInt16BE = readInt16BE;
function readUint16BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 0] << 8 | array[offset + 1]) >>> 0;
}
binary.readUint16BE = readUint16BE;
function readInt16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) << 16 >> 16;
}
binary.readInt16LE = readInt16LE;
function readUint16LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint16LE = readUint16LE;
function writeUint16BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 8;
  out[offset + 1] = value >>> 0;
  return out;
}
binary.writeUint16BE = writeUint16BE;
binary.writeInt16BE = writeUint16BE;
function writeUint16LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(2);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  return out;
}
binary.writeUint16LE = writeUint16LE;
binary.writeInt16LE = writeUint16LE;
function readInt32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3];
}
binary.readInt32BE = readInt32BE;
function readUint32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset] << 24 | array[offset + 1] << 16 | array[offset + 2] << 8 | array[offset + 3]) >>> 0;
}
binary.readUint32BE = readUint32BE;
function readInt32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset];
}
binary.readInt32LE = readInt32LE;
function readUint32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  return (array[offset + 3] << 24 | array[offset + 2] << 16 | array[offset + 1] << 8 | array[offset]) >>> 0;
}
binary.readUint32LE = readUint32LE;
function writeUint32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 24;
  out[offset + 1] = value >>> 16;
  out[offset + 2] = value >>> 8;
  out[offset + 3] = value >>> 0;
  return out;
}
binary.writeUint32BE = writeUint32BE;
binary.writeInt32BE = writeUint32BE;
function writeUint32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  out[offset + 0] = value >>> 0;
  out[offset + 1] = value >>> 8;
  out[offset + 2] = value >>> 16;
  out[offset + 3] = value >>> 24;
  return out;
}
binary.writeUint32LE = writeUint32LE;
binary.writeInt32LE = writeUint32LE;
function readInt64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readInt32BE(array, offset);
  var lo = readInt32BE(array, offset + 4);
  return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
}
binary.readInt64BE = readInt64BE;
function readUint64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var hi = readUint32BE(array, offset);
  var lo = readUint32BE(array, offset + 4);
  return hi * 4294967296 + lo;
}
binary.readUint64BE = readUint64BE;
function readInt64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo = readInt32LE(array, offset);
  var hi = readInt32LE(array, offset + 4);
  return hi * 4294967296 + lo - (lo >> 31) * 4294967296;
}
binary.readInt64LE = readInt64LE;
function readUint64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var lo = readUint32LE(array, offset);
  var hi = readUint32LE(array, offset + 4);
  return hi * 4294967296 + lo;
}
binary.readUint64LE = readUint64LE;
function writeUint64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32BE(value / 4294967296 >>> 0, out, offset);
  writeUint32BE(value >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64BE = writeUint64BE;
binary.writeInt64BE = writeUint64BE;
function writeUint64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  writeUint32LE(value >>> 0, out, offset);
  writeUint32LE(value / 4294967296 >>> 0, out, offset + 4);
  return out;
}
binary.writeUint64LE = writeUint64LE;
binary.writeInt64LE = writeUint64LE;
function readUintBE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintBE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
    result += array[i] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintBE = readUintBE;
function readUintLE(bitLength, array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  }
  if (bitLength / 8 > array.length - offset) {
    throw new Error("readUintLE: array is too short for the given bitLength");
  }
  var result = 0;
  var mul = 1;
  for (var i = offset; i < offset + bitLength / 8; i++) {
    result += array[i] * mul;
    mul *= 256;
  }
  return result;
}
binary.readUintLE = readUintLE;
function writeUintBE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintBE value must be an integer");
  }
  var div = 1;
  for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
    out[i] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintBE = writeUintBE;
function writeUintLE(bitLength, value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(bitLength / 8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (bitLength % 8 !== 0) {
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  }
  if (!int_1.isSafeInteger(value)) {
    throw new Error("writeUintLE value must be an integer");
  }
  var div = 1;
  for (var i = offset; i < offset + bitLength / 8; i++) {
    out[i] = value / div & 255;
    div *= 256;
  }
  return out;
}
binary.writeUintLE = writeUintLE;
function readFloat32BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset);
}
binary.readFloat32BE = readFloat32BE;
function readFloat32LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat32(offset, true);
}
binary.readFloat32LE = readFloat32LE;
function readFloat64BE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset);
}
binary.readFloat64BE = readFloat64BE;
function readFloat64LE(array, offset) {
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
  return view.getFloat64(offset, true);
}
binary.readFloat64LE = readFloat64LE;
function writeFloat32BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value);
  return out;
}
binary.writeFloat32BE = writeFloat32BE;
function writeFloat32LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(4);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat32(offset, value, true);
  return out;
}
binary.writeFloat32LE = writeFloat32LE;
function writeFloat64BE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value);
  return out;
}
binary.writeFloat64BE = writeFloat64BE;
function writeFloat64LE(value, out, offset) {
  if (out === void 0) {
    out = new Uint8Array(8);
  }
  if (offset === void 0) {
    offset = 0;
  }
  var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
  view.setFloat64(offset, value, true);
  return out;
}
binary.writeFloat64LE = writeFloat64LE;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var system_1 = system;
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports.defaultRandomSource = new system_1.SystemRandomSource();
  function randomBytes(length2, prng) {
    if (prng === void 0) {
      prng = exports.defaultRandomSource;
    }
    return prng.randomBytes(length2);
  }
  exports.randomBytes = randomBytes;
  function randomUint32(prng) {
    if (prng === void 0) {
      prng = exports.defaultRandomSource;
    }
    var buf2 = randomBytes(4, prng);
    var result = binary_12.readUint32LE(buf2);
    wipe_12.wipe(buf2);
    return result;
  }
  exports.randomUint32 = randomUint32;
  var ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function randomString(length2, charset, prng) {
    if (charset === void 0) {
      charset = ALPHANUMERIC;
    }
    if (prng === void 0) {
      prng = exports.defaultRandomSource;
    }
    if (charset.length < 2) {
      throw new Error("randomString charset is too short");
    }
    if (charset.length > 256) {
      throw new Error("randomString charset is too long");
    }
    var out = "";
    var charsLen = charset.length;
    var maxByte = 256 - 256 % charsLen;
    while (length2 > 0) {
      var buf2 = randomBytes(Math.ceil(length2 * 256 / maxByte), prng);
      for (var i = 0; i < buf2.length && length2 > 0; i++) {
        var randomByte = buf2[i];
        if (randomByte < maxByte) {
          out += charset.charAt(randomByte % charsLen);
          length2--;
        }
      }
      wipe_12.wipe(buf2);
    }
    return out;
  }
  exports.randomString = randomString;
  function randomStringForEntropy(bits, charset, prng) {
    if (charset === void 0) {
      charset = ALPHANUMERIC;
    }
    if (prng === void 0) {
      prng = exports.defaultRandomSource;
    }
    var length2 = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return randomString(length2, charset, prng);
  }
  exports.randomStringForEntropy = randomStringForEntropy;
})(random);
function concat$1(arrays, length2) {
  if (!length2) {
    length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = new Uint8Array(length2);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}
function base$1(ALPHABET2, name2) {
  if (ALPHABET2.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET2.length; i++) {
    var x = ALPHABET2.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET2.length;
  var LEADER = ALPHABET2.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i2;
      pbegin++;
    }
    var it2 = size - length2;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET2.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i2;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length2;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer2 = decodeUnsafe(string2);
    if (buffer2) {
      return buffer2;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src$1 = base$1;
var _brrp__multiformats_scope_baseX$1 = src$1;
const coerce$1 = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
const fromString$2 = (str) => new TextEncoder().encode(str);
const toString$2 = (b) => new TextDecoder().decode(b);
class Encoder$1 {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder$1 {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      switch (text[0]) {
        case this.prefix: {
          return this.baseDecode(text.slice(1));
        }
        default: {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
      }
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
}
class ComposedDecoder$1 {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
const or = (left, right) => new ComposedDecoder$1(__spreadValues(__spreadValues({}, left.decoders || { [left.prefix]: left }), right.decoders || { [right.prefix]: right }));
class Codec$1 {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder$1(name2, prefix, baseEncode);
    this.decoder = new Decoder$1(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from$3 = ({ name: name2, prefix, encode: encode2, decode: decode2 }) => new Codec$1(name2, prefix, encode2, decode2);
const baseX = ({ prefix, name: name2, alphabet }) => {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX$1(alphabet, name2);
  return from$3({
    prefix,
    name: name2,
    encode: encode2,
    decode: (text) => coerce$1(decode2(text))
  });
};
const decode$8 = (string2, alphabet, bitsPerChar, name2) => {
  const codes = {};
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }
  let end = string2.length;
  while (string2[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer2 = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string2[i]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer2 = buffer2 << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer2 >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer2 << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
const encode$7 = (data, alphabet, bitsPerChar) => {
  const pad2 = alphabet[alphabet.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer2 = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer2 = buffer2 << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer2 >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer2 << bitsPerChar - bits];
  }
  if (pad2) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
const rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet }) => {
  return from$3({
    prefix,
    name: name2,
    encode(input) {
      return encode$7(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode$8(input, alphabet, bitsPerChar, name2);
    }
  });
};
const identity$4 = from$3({
  prefix: "\0",
  name: "identity",
  encode: (buf2) => toString$2(buf2),
  decode: (str) => fromString$2(str)
});
var identityBase = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  identity: identity$4
});
const base2 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});
var base2$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  base2
});
const base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});
var base8$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  base8
});
const base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});
var base10$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  base10
});
const base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
const base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});
var base16$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  base16,
  base16upper
});
const base32$1 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
const base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
const base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
const base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
const base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
const base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
const base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
const base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
const base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});
var base32$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  base32: base32$1,
  base32upper,
  base32pad,
  base32padupper,
  base32hex,
  base32hexupper,
  base32hexpad,
  base32hexpadupper,
  base32z
});
const base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
const base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var base36$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  base36,
  base36upper
});
const base58btc$1 = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
const base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var base58 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  base58btc: base58btc$1,
  base58flickr
});
const base64$1 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
const base64pad$1 = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
const base64url$1 = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
const base64urlpad$1 = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});
var base64$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  base64: base64$1,
  base64pad: base64pad$1,
  base64url: base64url$1,
  base64urlpad: base64urlpad$1
});
var encode_1$1 = encode$6;
var MSB$2 = 128, REST$2 = 127, MSBALL$1 = ~REST$2, INT$1 = Math.pow(2, 31);
function encode$6(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT$1) {
    out[offset++] = num & 255 | MSB$2;
    num /= 128;
  }
  while (num & MSBALL$1) {
    out[offset++] = num & 255 | MSB$2;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode$6.bytes = offset - oldOffset + 1;
  return out;
}
var decode$7 = read$1;
var MSB$1$1 = 128, REST$1$1 = 127;
function read$1(buf2, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
  do {
    if (counter >= l) {
      read$1.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf2[counter++];
    res += shift < 28 ? (b & REST$1$1) << shift : (b & REST$1$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1$1);
  read$1.bytes = counter - offset;
  return res;
}
var N1$1 = Math.pow(2, 7);
var N2$1 = Math.pow(2, 14);
var N3$1 = Math.pow(2, 21);
var N4$1 = Math.pow(2, 28);
var N5$1 = Math.pow(2, 35);
var N6$1 = Math.pow(2, 42);
var N7$1 = Math.pow(2, 49);
var N8$1 = Math.pow(2, 56);
var N9$1 = Math.pow(2, 63);
var length$1 = function(value) {
  return value < N1$1 ? 1 : value < N2$1 ? 2 : value < N3$1 ? 3 : value < N4$1 ? 4 : value < N5$1 ? 5 : value < N6$1 ? 6 : value < N7$1 ? 7 : value < N8$1 ? 8 : value < N9$1 ? 9 : 10;
};
var varint$1 = {
  encode: encode_1$1,
  decode: decode$7,
  encodingLength: length$1
};
var _brrp_varint$1 = varint$1;
const encodeTo$1 = (int2, target, offset = 0) => {
  _brrp_varint$1.encode(int2, target, offset);
  return target;
};
const encodingLength$1 = (int2) => {
  return _brrp_varint$1.encodingLength(int2);
};
const create$2 = (code2, digest2) => {
  const size = digest2.byteLength;
  const sizeOffset = encodingLength$1(code2);
  const digestOffset = sizeOffset + encodingLength$1(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo$1(code2, bytes, 0);
  encodeTo$1(size, bytes, sizeOffset);
  bytes.set(digest2, digestOffset);
  return new Digest$1(code2, size, digest2, bytes);
};
class Digest$1 {
  constructor(code2, size, digest2, bytes) {
    this.code = code2;
    this.size = size;
    this.digest = digest2;
    this.bytes = bytes;
  }
}
const from$2 = ({ name: name2, code: code2, encode: encode2 }) => new Hasher$1(name2, code2, encode2);
class Hasher$1 {
  constructor(name2, code2, encode2) {
    this.name = name2;
    this.code = code2;
    this.encode = encode2;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create$2(this.code, result) : result.then((digest2) => create$2(this.code, digest2));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
const sha$1 = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
const sha256$2 = from$2({
  name: "sha2-256",
  code: 18,
  encode: sha$1("SHA-256")
});
const sha512$2 = from$2({
  name: "sha2-512",
  code: 19,
  encode: sha$1("SHA-512")
});
var sha2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  sha256: sha256$2,
  sha512: sha512$2
});
const code$2 = 0;
const name$1 = "identity";
const encode$5 = coerce$1;
const digest = (input) => create$2(code$2, encode$5(input));
const identity$2 = {
  code: code$2,
  name: name$1,
  encode: encode$5,
  digest
};
var identity$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  identity: identity$2
});
new TextEncoder();
new TextDecoder();
const bases = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, identityBase), base2$1), base8$1), base10$1), base16$1), base32$2), base36$1), base58), base64$2);
__spreadValues(__spreadValues({}, sha2), identity$3);
function createCodec(name2, prefix, encode2, decode2) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode2
    },
    decoder: { decode: decode2 }
  };
}
const string = createCodec("utf8", "u", (buf2) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf2);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf2) => {
  let string2 = "a";
  for (let i = 0; i < buf2.length; i++) {
    string2 += String.fromCharCode(buf2[i]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf2 = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    buf2[i] = str.charCodeAt(i);
  }
  return buf2;
});
const BASES = __spreadValues({
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii
}, bases);
function fromString$1(string2, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  return base3.decoder.decode(`${base3.prefix}${string2}`);
}
function toString$1(array, encoding = "utf8") {
  const base3 = BASES[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  return base3.encoder.encode(array).substring(1);
}
var sha256$1 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 32;
  exports.BLOCK_SIZE = 64;
  var SHA256 = function() {
    function SHA2562() {
      this.digestLength = exports.DIGEST_LENGTH;
      this.blockSize = exports.BLOCK_SIZE;
      this._state = new Int32Array(8);
      this._temp = new Int32Array(64);
      this._buffer = new Uint8Array(128);
      this._bufferLength = 0;
      this._bytesHashed = 0;
      this._finished = false;
      this.reset();
    }
    SHA2562.prototype._initState = function() {
      this._state[0] = 1779033703;
      this._state[1] = 3144134277;
      this._state[2] = 1013904242;
      this._state[3] = 2773480762;
      this._state[4] = 1359893119;
      this._state[5] = 2600822924;
      this._state[6] = 528734635;
      this._state[7] = 1541459225;
    };
    SHA2562.prototype.reset = function() {
      this._initState();
      this._bufferLength = 0;
      this._bytesHashed = 0;
      this._finished = false;
      return this;
    };
    SHA2562.prototype.clean = function() {
      wipe_12.wipe(this._buffer);
      wipe_12.wipe(this._temp);
      this.reset();
    };
    SHA2562.prototype.update = function(data, dataLength) {
      if (dataLength === void 0) {
        dataLength = data.length;
      }
      if (this._finished) {
        throw new Error("SHA256: can't update because hash was finished.");
      }
      var dataPos = 0;
      this._bytesHashed += dataLength;
      if (this._bufferLength > 0) {
        while (this._bufferLength < this.blockSize && dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        if (this._bufferLength === this.blockSize) {
          hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
          this._bufferLength = 0;
        }
      }
      if (dataLength >= this.blockSize) {
        dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
        dataLength %= this.blockSize;
      }
      while (dataLength > 0) {
        this._buffer[this._bufferLength++] = data[dataPos++];
        dataLength--;
      }
      return this;
    };
    SHA2562.prototype.finish = function(out) {
      if (!this._finished) {
        var bytesHashed = this._bytesHashed;
        var left = this._bufferLength;
        var bitLenHi = bytesHashed / 536870912 | 0;
        var bitLenLo = bytesHashed << 3;
        var padLength = bytesHashed % 64 < 56 ? 64 : 128;
        this._buffer[left] = 128;
        for (var i = left + 1; i < padLength - 8; i++) {
          this._buffer[i] = 0;
        }
        binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
        binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
        hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
        this._finished = true;
      }
      for (var i = 0; i < this.digestLength / 4; i++) {
        binary_12.writeUint32BE(this._state[i], out, i * 4);
      }
      return this;
    };
    SHA2562.prototype.digest = function() {
      var out = new Uint8Array(this.digestLength);
      this.finish(out);
      return out;
    };
    SHA2562.prototype.saveState = function() {
      if (this._finished) {
        throw new Error("SHA256: cannot save finished state");
      }
      return {
        state: new Int32Array(this._state),
        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
        bufferLength: this._bufferLength,
        bytesHashed: this._bytesHashed
      };
    };
    SHA2562.prototype.restoreState = function(savedState) {
      this._state.set(savedState.state);
      this._bufferLength = savedState.bufferLength;
      if (savedState.buffer) {
        this._buffer.set(savedState.buffer);
      }
      this._bytesHashed = savedState.bytesHashed;
      this._finished = false;
      return this;
    };
    SHA2562.prototype.cleanSavedState = function(savedState) {
      wipe_12.wipe(savedState.state);
      if (savedState.buffer) {
        wipe_12.wipe(savedState.buffer);
      }
      savedState.bufferLength = 0;
      savedState.bytesHashed = 0;
    };
    return SHA2562;
  }();
  exports.SHA256 = SHA256;
  var K = new Int32Array([
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ]);
  function hashBlocks(w, v, p, pos, len) {
    while (len >= 64) {
      var a = v[0];
      var b = v[1];
      var c = v[2];
      var d = v[3];
      var e = v[4];
      var f = v[5];
      var g = v[6];
      var h = v[7];
      for (var i = 0; i < 16; i++) {
        var j = pos + i * 4;
        w[i] = binary_12.readUint32BE(p, j);
      }
      for (var i = 16; i < 64; i++) {
        var u = w[i - 2];
        var t1 = (u >>> 17 | u << 32 - 17) ^ (u >>> 19 | u << 32 - 19) ^ u >>> 10;
        u = w[i - 15];
        var t2 = (u >>> 7 | u << 32 - 7) ^ (u >>> 18 | u << 32 - 18) ^ u >>> 3;
        w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
      }
      for (var i = 0; i < 64; i++) {
        var t1 = (((e >>> 6 | e << 32 - 6) ^ (e >>> 11 | e << 32 - 11) ^ (e >>> 25 | e << 32 - 25)) + (e & f ^ ~e & g) | 0) + (h + (K[i] + w[i] | 0) | 0) | 0;
        var t2 = ((a >>> 2 | a << 32 - 2) ^ (a >>> 13 | a << 32 - 13) ^ (a >>> 22 | a << 32 - 22)) + (a & b ^ a & c ^ b & c) | 0;
        h = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }
      v[0] += a;
      v[1] += b;
      v[2] += c;
      v[3] += d;
      v[4] += e;
      v[5] += f;
      v[6] += g;
      v[7] += h;
      pos += 64;
      len -= 64;
    }
    return pos;
  }
  function hash(data) {
    var h = new SHA256();
    h.update(data);
    var digest2 = h.digest();
    h.clean();
    return digest2;
  }
  exports.hash = hash;
})(sha256$1);
var ed25519 = {};
var sha512$1 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var binary_12 = binary;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 64;
  exports.BLOCK_SIZE = 128;
  var SHA512 = function() {
    function SHA5122() {
      this.digestLength = exports.DIGEST_LENGTH;
      this.blockSize = exports.BLOCK_SIZE;
      this._stateHi = new Int32Array(8);
      this._stateLo = new Int32Array(8);
      this._tempHi = new Int32Array(16);
      this._tempLo = new Int32Array(16);
      this._buffer = new Uint8Array(256);
      this._bufferLength = 0;
      this._bytesHashed = 0;
      this._finished = false;
      this.reset();
    }
    SHA5122.prototype._initState = function() {
      this._stateHi[0] = 1779033703;
      this._stateHi[1] = 3144134277;
      this._stateHi[2] = 1013904242;
      this._stateHi[3] = 2773480762;
      this._stateHi[4] = 1359893119;
      this._stateHi[5] = 2600822924;
      this._stateHi[6] = 528734635;
      this._stateHi[7] = 1541459225;
      this._stateLo[0] = 4089235720;
      this._stateLo[1] = 2227873595;
      this._stateLo[2] = 4271175723;
      this._stateLo[3] = 1595750129;
      this._stateLo[4] = 2917565137;
      this._stateLo[5] = 725511199;
      this._stateLo[6] = 4215389547;
      this._stateLo[7] = 327033209;
    };
    SHA5122.prototype.reset = function() {
      this._initState();
      this._bufferLength = 0;
      this._bytesHashed = 0;
      this._finished = false;
      return this;
    };
    SHA5122.prototype.clean = function() {
      wipe_12.wipe(this._buffer);
      wipe_12.wipe(this._tempHi);
      wipe_12.wipe(this._tempLo);
      this.reset();
    };
    SHA5122.prototype.update = function(data, dataLength) {
      if (dataLength === void 0) {
        dataLength = data.length;
      }
      if (this._finished) {
        throw new Error("SHA512: can't update because hash was finished.");
      }
      var dataPos = 0;
      this._bytesHashed += dataLength;
      if (this._bufferLength > 0) {
        while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
          this._buffer[this._bufferLength++] = data[dataPos++];
          dataLength--;
        }
        if (this._bufferLength === this.blockSize) {
          hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
          this._bufferLength = 0;
        }
      }
      if (dataLength >= this.blockSize) {
        dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
        dataLength %= this.blockSize;
      }
      while (dataLength > 0) {
        this._buffer[this._bufferLength++] = data[dataPos++];
        dataLength--;
      }
      return this;
    };
    SHA5122.prototype.finish = function(out) {
      if (!this._finished) {
        var bytesHashed = this._bytesHashed;
        var left = this._bufferLength;
        var bitLenHi = bytesHashed / 536870912 | 0;
        var bitLenLo = bytesHashed << 3;
        var padLength = bytesHashed % 128 < 112 ? 128 : 256;
        this._buffer[left] = 128;
        for (var i = left + 1; i < padLength - 8; i++) {
          this._buffer[i] = 0;
        }
        binary_12.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
        binary_12.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
        hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
        this._finished = true;
      }
      for (var i = 0; i < this.digestLength / 8; i++) {
        binary_12.writeUint32BE(this._stateHi[i], out, i * 8);
        binary_12.writeUint32BE(this._stateLo[i], out, i * 8 + 4);
      }
      return this;
    };
    SHA5122.prototype.digest = function() {
      var out = new Uint8Array(this.digestLength);
      this.finish(out);
      return out;
    };
    SHA5122.prototype.saveState = function() {
      if (this._finished) {
        throw new Error("SHA256: cannot save finished state");
      }
      return {
        stateHi: new Int32Array(this._stateHi),
        stateLo: new Int32Array(this._stateLo),
        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
        bufferLength: this._bufferLength,
        bytesHashed: this._bytesHashed
      };
    };
    SHA5122.prototype.restoreState = function(savedState) {
      this._stateHi.set(savedState.stateHi);
      this._stateLo.set(savedState.stateLo);
      this._bufferLength = savedState.bufferLength;
      if (savedState.buffer) {
        this._buffer.set(savedState.buffer);
      }
      this._bytesHashed = savedState.bytesHashed;
      this._finished = false;
      return this;
    };
    SHA5122.prototype.cleanSavedState = function(savedState) {
      wipe_12.wipe(savedState.stateHi);
      wipe_12.wipe(savedState.stateLo);
      if (savedState.buffer) {
        wipe_12.wipe(savedState.buffer);
      }
      savedState.bufferLength = 0;
      savedState.bytesHashed = 0;
    };
    return SHA5122;
  }();
  exports.SHA512 = SHA512;
  var K = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function hashBlocks(wh, wl, hh, hl, m, pos, len) {
    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
    var h, l;
    var th, tl;
    var a, b, c, d;
    while (len >= 128) {
      for (var i = 0; i < 16; i++) {
        var j = 8 * i + pos;
        wh[i] = binary_12.readUint32BE(m, j);
        wl[i] = binary_12.readUint32BE(m, j + 4);
      }
      for (var i = 0; i < 80; i++) {
        var bh0 = ah0;
        var bh1 = ah1;
        var bh2 = ah2;
        var bh3 = ah3;
        var bh4 = ah4;
        var bh5 = ah5;
        var bh6 = ah6;
        var bh7 = ah7;
        var bl0 = al0;
        var bl1 = al1;
        var bl2 = al2;
        var bl3 = al3;
        var bl4 = al4;
        var bl5 = al5;
        var bl6 = al6;
        var bl7 = al7;
        h = ah7;
        l = al7;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
        l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        h = ah4 & ah5 ^ ~ah4 & ah6;
        l = al4 & al5 ^ ~al4 & al6;
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        h = K[i * 2];
        l = K[i * 2 + 1];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        h = wh[i % 16];
        l = wl[i % 16];
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        th = c & 65535 | d << 16;
        tl = a & 65535 | b << 16;
        h = th;
        l = tl;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
        l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
        l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        bh7 = c & 65535 | d << 16;
        bl7 = a & 65535 | b << 16;
        h = bh3;
        l = bl3;
        a = l & 65535;
        b = l >>> 16;
        c = h & 65535;
        d = h >>> 16;
        h = th;
        l = tl;
        a += l & 65535;
        b += l >>> 16;
        c += h & 65535;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        bh3 = c & 65535 | d << 16;
        bl3 = a & 65535 | b << 16;
        ah1 = bh0;
        ah2 = bh1;
        ah3 = bh2;
        ah4 = bh3;
        ah5 = bh4;
        ah6 = bh5;
        ah7 = bh6;
        ah0 = bh7;
        al1 = bl0;
        al2 = bl1;
        al3 = bl2;
        al4 = bl3;
        al5 = bl4;
        al6 = bl5;
        al7 = bl6;
        al0 = bl7;
        if (i % 16 === 15) {
          for (var j = 0; j < 16; j++) {
            h = wh[j];
            l = wl[j];
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = wh[(j + 9) % 16];
            l = wl[(j + 9) % 16];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            th = wh[(j + 1) % 16];
            tl = wl[(j + 1) % 16];
            h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
            l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            th = wh[(j + 14) % 16];
            tl = wl[(j + 14) % 16];
            h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
            l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            wh[j] = c & 65535 | d << 16;
            wl[j] = a & 65535 | b << 16;
          }
        }
      }
      h = ah0;
      l = al0;
      a = l & 65535;
      b = l >>> 16;
      c = h & 65535;
      d = h >>> 16;
      h = hh[0];
      l = hl[0];
      a += l & 65535;
      b += l >>> 16;
      c += h & 65535;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[0] = ah0 = c & 65535 | d << 16;
      hl[0] = al0 = a & 65535 | b << 16;
      h = ah1;
      l = al1;
      a = l & 65535;
      b = l >>> 16;
      c = h & 65535;
      d = h >>> 16;
      h = hh[1];
      l = hl[1];
      a += l & 65535;
      b += l >>> 16;
      c += h & 65535;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[1] = ah1 = c & 65535 | d << 16;
      hl[1] = al1 = a & 65535 | b << 16;
      h = ah2;
      l = al2;
      a = l & 65535;
      b = l >>> 16;
      c = h & 65535;
      d = h >>> 16;
      h = hh[2];
      l = hl[2];
      a += l & 65535;
      b += l >>> 16;
      c += h & 65535;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[2] = ah2 = c & 65535 | d << 16;
      hl[2] = al2 = a & 65535 | b << 16;
      h = ah3;
      l = al3;
      a = l & 65535;
      b = l >>> 16;
      c = h & 65535;
      d = h >>> 16;
      h = hh[3];
      l = hl[3];
      a += l & 65535;
      b += l >>> 16;
      c += h & 65535;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[3] = ah3 = c & 65535 | d << 16;
      hl[3] = al3 = a & 65535 | b << 16;
      h = ah4;
      l = al4;
      a = l & 65535;
      b = l >>> 16;
      c = h & 65535;
      d = h >>> 16;
      h = hh[4];
      l = hl[4];
      a += l & 65535;
      b += l >>> 16;
      c += h & 65535;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[4] = ah4 = c & 65535 | d << 16;
      hl[4] = al4 = a & 65535 | b << 16;
      h = ah5;
      l = al5;
      a = l & 65535;
      b = l >>> 16;
      c = h & 65535;
      d = h >>> 16;
      h = hh[5];
      l = hl[5];
      a += l & 65535;
      b += l >>> 16;
      c += h & 65535;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[5] = ah5 = c & 65535 | d << 16;
      hl[5] = al5 = a & 65535 | b << 16;
      h = ah6;
      l = al6;
      a = l & 65535;
      b = l >>> 16;
      c = h & 65535;
      d = h >>> 16;
      h = hh[6];
      l = hl[6];
      a += l & 65535;
      b += l >>> 16;
      c += h & 65535;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[6] = ah6 = c & 65535 | d << 16;
      hl[6] = al6 = a & 65535 | b << 16;
      h = ah7;
      l = al7;
      a = l & 65535;
      b = l >>> 16;
      c = h & 65535;
      d = h >>> 16;
      h = hh[7];
      l = hl[7];
      a += l & 65535;
      b += l >>> 16;
      c += h & 65535;
      d += h >>> 16;
      b += a >>> 16;
      c += b >>> 16;
      d += c >>> 16;
      hh[7] = ah7 = c & 65535 | d << 16;
      hl[7] = al7 = a & 65535 | b << 16;
      pos += 128;
      len -= 128;
    }
    return pos;
  }
  function hash(data) {
    var h = new SHA512();
    h.update(data);
    var digest2 = h.digest();
    h.clean();
    return digest2;
  }
  exports.hash = hash;
})(sha512$1);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var random_1 = random;
  var sha512_1 = sha512$1;
  var wipe_12 = wipe$1;
  exports.SIGNATURE_LENGTH = 64;
  exports.PUBLIC_KEY_LENGTH = 32;
  exports.SECRET_KEY_LENGTH = 64;
  exports.SEED_LENGTH = 32;
  function gf(init) {
    var r = new Float64Array(16);
    if (init) {
      for (var i = 0; i < init.length; i++) {
        r[i] = init[i];
      }
    }
    return r;
  }
  var _9 = new Uint8Array(32);
  _9[0] = 9;
  var gf0 = gf();
  var gf1 = gf([1]);
  var D = gf([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]);
  var D2 = gf([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]);
  var X = gf([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]);
  var Y = gf([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]);
  var I = gf([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function set25519(r, a) {
    for (var i = 0; i < 16; i++) {
      r[i] = a[i] | 0;
    }
  }
  function car25519(o) {
    var c = 1;
    for (var i = 0; i < 16; i++) {
      var v = o[i] + c + 65535;
      c = Math.floor(v / 65536);
      o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
  }
  function sel25519(p, q, b) {
    var c = ~(b - 1);
    for (var i = 0; i < 16; i++) {
      var t = c & (p[i] ^ q[i]);
      p[i] ^= t;
      q[i] ^= t;
    }
  }
  function pack25519(o, n) {
    var m = gf();
    var t = gf();
    for (var i = 0; i < 16; i++) {
      t[i] = n[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (var j = 0; j < 2; j++) {
      m[0] = t[0] - 65517;
      for (var i = 1; i < 15; i++) {
        m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
        m[i - 1] &= 65535;
      }
      m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
      var b = m[15] >> 16 & 1;
      m[14] &= 65535;
      sel25519(t, m, 1 - b);
    }
    for (var i = 0; i < 16; i++) {
      o[2 * i] = t[i] & 255;
      o[2 * i + 1] = t[i] >> 8;
    }
  }
  function verify32(x, y) {
    var d = 0;
    for (var i = 0; i < 32; i++) {
      d |= x[i] ^ y[i];
    }
    return (1 & d - 1 >>> 8) - 1;
  }
  function neq25519(a, b) {
    var c = new Uint8Array(32);
    var d = new Uint8Array(32);
    pack25519(c, a);
    pack25519(d, b);
    return verify32(c, d);
  }
  function par25519(a) {
    var d = new Uint8Array(32);
    pack25519(d, a);
    return d[0] & 1;
  }
  function unpack25519(o, n) {
    for (var i = 0; i < 16; i++) {
      o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    }
    o[15] &= 32767;
  }
  function add(o, a, b) {
    for (var i = 0; i < 16; i++) {
      o[i] = a[i] + b[i];
    }
  }
  function sub(o, a, b) {
    for (var i = 0; i < 16; i++) {
      o[i] = a[i] - b[i];
    }
  }
  function mul(o, a, b) {
    var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
  }
  function square(o, a) {
    mul(o, a, a);
  }
  function inv25519(o, i) {
    var c = gf();
    var a;
    for (a = 0; a < 16; a++) {
      c[a] = i[a];
    }
    for (a = 253; a >= 0; a--) {
      square(c, c);
      if (a !== 2 && a !== 4) {
        mul(c, c, i);
      }
    }
    for (a = 0; a < 16; a++) {
      o[a] = c[a];
    }
  }
  function pow2523(o, i) {
    var c = gf();
    var a;
    for (a = 0; a < 16; a++) {
      c[a] = i[a];
    }
    for (a = 250; a >= 0; a--) {
      square(c, c);
      if (a !== 1) {
        mul(c, c, i);
      }
    }
    for (a = 0; a < 16; a++) {
      o[a] = c[a];
    }
  }
  function edadd(p, q) {
    var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
    sub(a, p[1], p[0]);
    sub(t, q[1], q[0]);
    mul(a, a, t);
    add(b, p[0], p[1]);
    add(t, q[0], q[1]);
    mul(b, b, t);
    mul(c, p[3], q[3]);
    mul(c, c, D2);
    mul(d, p[2], q[2]);
    add(d, d, d);
    sub(e, b, a);
    sub(f, d, c);
    add(g, d, c);
    add(h, b, a);
    mul(p[0], e, f);
    mul(p[1], h, g);
    mul(p[2], g, f);
    mul(p[3], e, h);
  }
  function cswap(p, q, b) {
    for (var i = 0; i < 4; i++) {
      sel25519(p[i], q[i], b);
    }
  }
  function pack(r, p) {
    var tx = gf(), ty = gf(), zi = gf();
    inv25519(zi, p[2]);
    mul(tx, p[0], zi);
    mul(ty, p[1], zi);
    pack25519(r, ty);
    r[31] ^= par25519(tx) << 7;
  }
  function scalarmult(p, q, s) {
    set25519(p[0], gf0);
    set25519(p[1], gf1);
    set25519(p[2], gf1);
    set25519(p[3], gf0);
    for (var i = 255; i >= 0; --i) {
      var b = s[i / 8 | 0] >> (i & 7) & 1;
      cswap(p, q, b);
      edadd(q, p);
      edadd(p, p);
      cswap(p, q, b);
    }
  }
  function scalarbase(p, s) {
    var q = [gf(), gf(), gf(), gf()];
    set25519(q[0], X);
    set25519(q[1], Y);
    set25519(q[2], gf1);
    mul(q[3], X, Y);
    scalarmult(p, q, s);
  }
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SEED_LENGTH) {
      throw new Error("ed25519: seed must be " + exports.SEED_LENGTH + " bytes");
    }
    var d = sha512_1.hash(seed);
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    var publicKey = new Uint8Array(32);
    var p = [gf(), gf(), gf(), gf()];
    scalarbase(p, d);
    pack(publicKey, p);
    var secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return {
      publicKey,
      secretKey
    };
  }
  exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair(prng) {
    var seed = random_1.randomBytes(32, prng);
    var result = generateKeyPairFromSeed(seed);
    wipe_12.wipe(seed);
    return result;
  }
  exports.generateKeyPair = generateKeyPair;
  function extractPublicKeyFromSecretKey(secretKey) {
    if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
      throw new Error("ed25519: secret key must be " + exports.SECRET_KEY_LENGTH + " bytes");
    }
    return new Uint8Array(secretKey.subarray(32));
  }
  exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
  var L = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function modL(r, x) {
    var carry;
    var i;
    var j;
    var k;
    for (i = 63; i >= 32; --i) {
      carry = 0;
      for (j = i - 32, k = i - 12; j < k; ++j) {
        x[j] += carry - 16 * x[i] * L[j - (i - 32)];
        carry = Math.floor((x[j] + 128) / 256);
        x[j] -= carry * 256;
      }
      x[j] += carry;
      x[i] = 0;
    }
    carry = 0;
    for (j = 0; j < 32; j++) {
      x[j] += carry - (x[31] >> 4) * L[j];
      carry = x[j] >> 8;
      x[j] &= 255;
    }
    for (j = 0; j < 32; j++) {
      x[j] -= carry * L[j];
    }
    for (i = 0; i < 32; i++) {
      x[i + 1] += x[i] >> 8;
      r[i] = x[i] & 255;
    }
  }
  function reduce(r) {
    var x = new Float64Array(64);
    for (var i = 0; i < 64; i++) {
      x[i] = r[i];
    }
    for (var i = 0; i < 64; i++) {
      r[i] = 0;
    }
    modL(r, x);
  }
  function sign(secretKey, message) {
    var x = new Float64Array(64);
    var p = [gf(), gf(), gf(), gf()];
    var d = sha512_1.hash(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    var signature = new Uint8Array(64);
    signature.set(d.subarray(32), 32);
    var hs = new sha512_1.SHA512();
    hs.update(signature.subarray(32));
    hs.update(message);
    var r = hs.digest();
    hs.clean();
    reduce(r);
    scalarbase(p, r);
    pack(signature, p);
    hs.reset();
    hs.update(signature.subarray(0, 32));
    hs.update(secretKey.subarray(32));
    hs.update(message);
    var h = hs.digest();
    reduce(h);
    for (var i = 0; i < 32; i++) {
      x[i] = r[i];
    }
    for (var i = 0; i < 32; i++) {
      for (var j = 0; j < 32; j++) {
        x[i + j] += h[i] * d[j];
      }
    }
    modL(signature.subarray(32), x);
    return signature;
  }
  exports.sign = sign;
  function unpackneg(r, p) {
    var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
    set25519(r[2], gf1);
    unpack25519(r[1], p);
    square(num, r[1]);
    mul(den, num, D);
    sub(num, num, r[2]);
    add(den, r[2], den);
    square(den2, den);
    square(den4, den2);
    mul(den6, den4, den2);
    mul(t, den6, num);
    mul(t, t, den);
    pow2523(t, t);
    mul(t, t, num);
    mul(t, t, den);
    mul(t, t, den);
    mul(r[0], t, den);
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      mul(r[0], r[0], I);
    }
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
      return -1;
    }
    if (par25519(r[0]) === p[31] >> 7) {
      sub(r[0], gf0, r[0]);
    }
    mul(r[3], r[0], r[1]);
    return 0;
  }
  function verify(publicKey, message, signature) {
    var t = new Uint8Array(32);
    var p = [gf(), gf(), gf(), gf()];
    var q = [gf(), gf(), gf(), gf()];
    if (signature.length !== exports.SIGNATURE_LENGTH) {
      throw new Error("ed25519: signature must be " + exports.SIGNATURE_LENGTH + " bytes");
    }
    if (unpackneg(q, publicKey)) {
      return false;
    }
    var hs = new sha512_1.SHA512();
    hs.update(signature.subarray(0, 32));
    hs.update(publicKey);
    hs.update(message);
    var h = hs.digest();
    reduce(h);
    scalarmult(p, q, h);
    scalarbase(q, signature.subarray(32));
    edadd(p, q);
    pack(t, p);
    if (verify32(signature, t)) {
      return false;
    }
    return true;
  }
  exports.verify = verify;
  function convertPublicKeyToX25519(publicKey) {
    var q = [gf(), gf(), gf(), gf()];
    if (unpackneg(q, publicKey)) {
      throw new Error("Ed25519: invalid public key");
    }
    var a = gf();
    var b = gf();
    var y = q[1];
    add(a, gf1, y);
    sub(b, gf1, y);
    inv25519(b, b);
    mul(a, a, b);
    var z = new Uint8Array(32);
    pack25519(z, a);
    return z;
  }
  exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
  function convertSecretKeyToX25519(secretKey) {
    var d = sha512_1.hash(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    var o = new Uint8Array(d.subarray(0, 32));
    wipe_12.wipe(d);
    return o;
  }
  exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
})(ed25519);
var dist = {};
Object.defineProperty(dist, "__esModule", { value: true });
dist.bech32m = dist.bech32 = void 0;
const ALPHABET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
const ALPHABET_MAP = {};
for (let z = 0; z < ALPHABET.length; z++) {
  const x = ALPHABET.charAt(z);
  ALPHABET_MAP[x] = z;
}
function polymodStep(pre) {
  const b = pre >> 25;
  return (pre & 33554431) << 5 ^ -(b >> 0 & 1) & 996825010 ^ -(b >> 1 & 1) & 642813549 ^ -(b >> 2 & 1) & 513874426 ^ -(b >> 3 & 1) & 1027748829 ^ -(b >> 4 & 1) & 705979059;
}
function prefixChk(prefix) {
  let chk = 1;
  for (let i = 0; i < prefix.length; ++i) {
    const c = prefix.charCodeAt(i);
    if (c < 33 || c > 126)
      return "Invalid prefix (" + prefix + ")";
    chk = polymodStep(chk) ^ c >> 5;
  }
  chk = polymodStep(chk);
  for (let i = 0; i < prefix.length; ++i) {
    const v = prefix.charCodeAt(i);
    chk = polymodStep(chk) ^ v & 31;
  }
  return chk;
}
function convert(data, inBits, outBits, pad2) {
  let value = 0;
  let bits = 0;
  const maxV = (1 << outBits) - 1;
  const result = [];
  for (let i = 0; i < data.length; ++i) {
    value = value << inBits | data[i];
    bits += inBits;
    while (bits >= outBits) {
      bits -= outBits;
      result.push(value >> bits & maxV);
    }
  }
  if (pad2) {
    if (bits > 0) {
      result.push(value << outBits - bits & maxV);
    }
  } else {
    if (bits >= inBits)
      return "Excess padding";
    if (value << outBits - bits & maxV)
      return "Non-zero padding";
  }
  return result;
}
function toWords(bytes) {
  return convert(bytes, 8, 5, true);
}
function fromWordsUnsafe(words) {
  const res = convert(words, 5, 8, false);
  if (Array.isArray(res))
    return res;
}
function fromWords(words) {
  const res = convert(words, 5, 8, false);
  if (Array.isArray(res))
    return res;
  throw new Error(res);
}
function getLibraryFromEncoding(encoding) {
  let ENCODING_CONST;
  if (encoding === "bech32") {
    ENCODING_CONST = 1;
  } else {
    ENCODING_CONST = 734539939;
  }
  function encode2(prefix, words, LIMIT) {
    LIMIT = LIMIT || 90;
    if (prefix.length + 7 + words.length > LIMIT)
      throw new TypeError("Exceeds length limit");
    prefix = prefix.toLowerCase();
    let chk = prefixChk(prefix);
    if (typeof chk === "string")
      throw new Error(chk);
    let result = prefix + "1";
    for (let i = 0; i < words.length; ++i) {
      const x = words[i];
      if (x >> 5 !== 0)
        throw new Error("Non 5-bit word");
      chk = polymodStep(chk) ^ x;
      result += ALPHABET.charAt(x);
    }
    for (let i = 0; i < 6; ++i) {
      chk = polymodStep(chk);
    }
    chk ^= ENCODING_CONST;
    for (let i = 0; i < 6; ++i) {
      const v = chk >> (5 - i) * 5 & 31;
      result += ALPHABET.charAt(v);
    }
    return result;
  }
  function __decode(str, LIMIT) {
    LIMIT = LIMIT || 90;
    if (str.length < 8)
      return str + " too short";
    if (str.length > LIMIT)
      return "Exceeds length limit";
    const lowered = str.toLowerCase();
    const uppered = str.toUpperCase();
    if (str !== lowered && str !== uppered)
      return "Mixed-case string " + str;
    str = lowered;
    const split = str.lastIndexOf("1");
    if (split === -1)
      return "No separator character for " + str;
    if (split === 0)
      return "Missing prefix for " + str;
    const prefix = str.slice(0, split);
    const wordChars = str.slice(split + 1);
    if (wordChars.length < 6)
      return "Data too short";
    let chk = prefixChk(prefix);
    if (typeof chk === "string")
      return chk;
    const words = [];
    for (let i = 0; i < wordChars.length; ++i) {
      const c = wordChars.charAt(i);
      const v = ALPHABET_MAP[c];
      if (v === void 0)
        return "Unknown character " + c;
      chk = polymodStep(chk) ^ v;
      if (i + 6 >= wordChars.length)
        continue;
      words.push(v);
    }
    if (chk !== ENCODING_CONST)
      return "Invalid checksum for " + str;
    return { prefix, words };
  }
  function decodeUnsafe(str, LIMIT) {
    const res = __decode(str, LIMIT);
    if (typeof res === "object")
      return res;
  }
  function decode2(str, LIMIT) {
    const res = __decode(str, LIMIT);
    if (typeof res === "object")
      return res;
    throw new Error(res);
  }
  return {
    decodeUnsafe,
    decode: decode2,
    encode: encode2,
    toWords,
    fromWordsUnsafe,
    fromWords
  };
}
dist.bech32 = getLibraryFromEncoding("bech32");
dist.bech32m = getLibraryFromEncoding("bech32m");
var x25519 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var random_1 = random;
  var wipe_12 = wipe$1;
  exports.PUBLIC_KEY_LENGTH = 32;
  exports.SECRET_KEY_LENGTH = 32;
  exports.SHARED_KEY_LENGTH = 32;
  function gf(init) {
    var r = new Float64Array(16);
    if (init) {
      for (var i = 0; i < init.length; i++) {
        r[i] = init[i];
      }
    }
    return r;
  }
  var _9 = new Uint8Array(32);
  _9[0] = 9;
  var _121665 = gf([56129, 1]);
  function car25519(o) {
    var c = 1;
    for (var i = 0; i < 16; i++) {
      var v = o[i] + c + 65535;
      c = Math.floor(v / 65536);
      o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
  }
  function sel25519(p, q, b) {
    var c = ~(b - 1);
    for (var i = 0; i < 16; i++) {
      var t = c & (p[i] ^ q[i]);
      p[i] ^= t;
      q[i] ^= t;
    }
  }
  function pack25519(o, n) {
    var m = gf();
    var t = gf();
    for (var i = 0; i < 16; i++) {
      t[i] = n[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (var j = 0; j < 2; j++) {
      m[0] = t[0] - 65517;
      for (var i = 1; i < 15; i++) {
        m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
        m[i - 1] &= 65535;
      }
      m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
      var b = m[15] >> 16 & 1;
      m[14] &= 65535;
      sel25519(t, m, 1 - b);
    }
    for (var i = 0; i < 16; i++) {
      o[2 * i] = t[i] & 255;
      o[2 * i + 1] = t[i] >> 8;
    }
  }
  function unpack25519(o, n) {
    for (var i = 0; i < 16; i++) {
      o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    }
    o[15] &= 32767;
  }
  function add(o, a, b) {
    for (var i = 0; i < 16; i++) {
      o[i] = a[i] + b[i];
    }
  }
  function sub(o, a, b) {
    for (var i = 0; i < 16; i++) {
      o[i] = a[i] - b[i];
    }
  }
  function mul(o, a, b) {
    var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
  }
  function square(o, a) {
    mul(o, a, a);
  }
  function inv25519(o, inp) {
    var c = gf();
    for (var i = 0; i < 16; i++) {
      c[i] = inp[i];
    }
    for (var i = 253; i >= 0; i--) {
      square(c, c);
      if (i !== 2 && i !== 4) {
        mul(c, c, inp);
      }
    }
    for (var i = 0; i < 16; i++) {
      o[i] = c[i];
    }
  }
  function scalarMult(n, p) {
    var z = new Uint8Array(32);
    var x = new Float64Array(80);
    var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
    for (var i = 0; i < 31; i++) {
      z[i] = n[i];
    }
    z[31] = n[31] & 127 | 64;
    z[0] &= 248;
    unpack25519(x, p);
    for (var i = 0; i < 16; i++) {
      b[i] = x[i];
    }
    a[0] = d[0] = 1;
    for (var i = 254; i >= 0; --i) {
      var r = z[i >>> 3] >>> (i & 7) & 1;
      sel25519(a, b, r);
      sel25519(c, d, r);
      add(e, a, c);
      sub(a, a, c);
      add(c, b, d);
      sub(b, b, d);
      square(d, e);
      square(f, a);
      mul(a, c, a);
      mul(c, b, e);
      add(e, a, c);
      sub(a, a, c);
      square(b, a);
      sub(c, d, f);
      mul(a, c, _121665);
      add(a, a, d);
      mul(c, c, a);
      mul(a, d, f);
      mul(d, b, x);
      square(b, e);
      sel25519(a, b, r);
      sel25519(c, d, r);
    }
    for (var i = 0; i < 16; i++) {
      x[i + 16] = a[i];
      x[i + 32] = c[i];
      x[i + 48] = b[i];
      x[i + 64] = d[i];
    }
    var x32 = x.subarray(32);
    var x16 = x.subarray(16);
    inv25519(x32, x32);
    mul(x16, x16, x32);
    var q = new Uint8Array(32);
    pack25519(q, x16);
    return q;
  }
  exports.scalarMult = scalarMult;
  function scalarMultBase(n) {
    return scalarMult(n, _9);
  }
  exports.scalarMultBase = scalarMultBase;
  function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SECRET_KEY_LENGTH) {
      throw new Error("x25519: seed must be " + exports.SECRET_KEY_LENGTH + " bytes");
    }
    var secretKey = new Uint8Array(seed);
    var publicKey = scalarMultBase(secretKey);
    return {
      publicKey,
      secretKey
    };
  }
  exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
  function generateKeyPair(prng) {
    var seed = random_1.randomBytes(32, prng);
    var result = generateKeyPairFromSeed(seed);
    wipe_12.wipe(seed);
    return result;
  }
  exports.generateKeyPair = generateKeyPair;
  function sharedKey(mySecretKey, theirPublicKey, rejectZero) {
    if (rejectZero === void 0) {
      rejectZero = false;
    }
    if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect secret key length");
    }
    if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) {
      throw new Error("X25519: incorrect public key length");
    }
    var result = scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
      var zeros = 0;
      for (var i = 0; i < result.length; i++) {
        zeros |= result[i];
      }
      if (zeros === 0) {
        throw new Error("X25519: invalid shared key");
      }
    }
    return result;
  }
  exports.sharedKey = sharedKey;
})(x25519);
var xchacha20poly1305 = {};
var xchacha20 = {};
var chacha = {};
Object.defineProperty(chacha, "__esModule", { value: true });
var binary_1$1 = binary;
var wipe_1$1 = wipe$1;
var ROUNDS$1 = 20;
function core(out, input, key) {
  var j0 = 1634760805;
  var j1 = 857760878;
  var j2 = 2036477234;
  var j3 = 1797285236;
  var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
  var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
  var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
  var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
  var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
  var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
  var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
  var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
  var j12 = input[3] << 24 | input[2] << 16 | input[1] << 8 | input[0];
  var j13 = input[7] << 24 | input[6] << 16 | input[5] << 8 | input[4];
  var j14 = input[11] << 24 | input[10] << 16 | input[9] << 8 | input[8];
  var j15 = input[15] << 24 | input[14] << 16 | input[13] << 8 | input[12];
  var x0 = j0;
  var x1 = j1;
  var x2 = j2;
  var x3 = j3;
  var x4 = j4;
  var x5 = j5;
  var x6 = j6;
  var x7 = j7;
  var x8 = j8;
  var x9 = j9;
  var x10 = j10;
  var x11 = j11;
  var x12 = j12;
  var x13 = j13;
  var x14 = j14;
  var x15 = j15;
  for (var i = 0; i < ROUNDS$1; i += 2) {
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 7 | x5 << 7;
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 7 | x5 << 7;
  }
  binary_1$1.writeUint32LE(x0 + j0 | 0, out, 0);
  binary_1$1.writeUint32LE(x1 + j1 | 0, out, 4);
  binary_1$1.writeUint32LE(x2 + j2 | 0, out, 8);
  binary_1$1.writeUint32LE(x3 + j3 | 0, out, 12);
  binary_1$1.writeUint32LE(x4 + j4 | 0, out, 16);
  binary_1$1.writeUint32LE(x5 + j5 | 0, out, 20);
  binary_1$1.writeUint32LE(x6 + j6 | 0, out, 24);
  binary_1$1.writeUint32LE(x7 + j7 | 0, out, 28);
  binary_1$1.writeUint32LE(x8 + j8 | 0, out, 32);
  binary_1$1.writeUint32LE(x9 + j9 | 0, out, 36);
  binary_1$1.writeUint32LE(x10 + j10 | 0, out, 40);
  binary_1$1.writeUint32LE(x11 + j11 | 0, out, 44);
  binary_1$1.writeUint32LE(x12 + j12 | 0, out, 48);
  binary_1$1.writeUint32LE(x13 + j13 | 0, out, 52);
  binary_1$1.writeUint32LE(x14 + j14 | 0, out, 56);
  binary_1$1.writeUint32LE(x15 + j15 | 0, out, 60);
}
function streamXOR$1(key, nonce, src2, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  if (key.length !== 32) {
    throw new Error("ChaCha: key size must be 32 bytes");
  }
  if (dst.length < src2.length) {
    throw new Error("ChaCha: destination is shorter than source");
  }
  var nc;
  var counterLength;
  if (nonceInplaceCounterLength === 0) {
    if (nonce.length !== 8 && nonce.length !== 12) {
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    }
    nc = new Uint8Array(16);
    counterLength = nc.length - nonce.length;
    nc.set(nonce, counterLength);
  } else {
    if (nonce.length !== 16) {
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    }
    nc = nonce;
    counterLength = nonceInplaceCounterLength;
  }
  var block2 = new Uint8Array(64);
  for (var i = 0; i < src2.length; i += 64) {
    core(block2, nc, key);
    for (var j = i; j < i + 64 && j < src2.length; j++) {
      dst[j] = src2[j] ^ block2[j - i];
    }
    incrementCounter(nc, 0, counterLength);
  }
  wipe_1$1.wipe(block2);
  if (nonceInplaceCounterLength === 0) {
    wipe_1$1.wipe(nc);
  }
  return dst;
}
chacha.streamXOR = streamXOR$1;
function stream$1(key, nonce, dst, nonceInplaceCounterLength) {
  if (nonceInplaceCounterLength === void 0) {
    nonceInplaceCounterLength = 0;
  }
  wipe_1$1.wipe(dst);
  return streamXOR$1(key, nonce, dst, dst, nonceInplaceCounterLength);
}
chacha.stream = stream$1;
function incrementCounter(counter, pos, len) {
  var carry = 1;
  while (len--) {
    carry = carry + (counter[pos] & 255) | 0;
    counter[pos] = carry & 255;
    carry >>>= 8;
    pos++;
  }
  if (carry > 0) {
    throw new Error("ChaCha: counter overflow");
  }
}
Object.defineProperty(xchacha20, "__esModule", { value: true });
var binary_1 = binary;
var wipe_1 = wipe$1;
var chacha_1 = chacha;
var ROUNDS = 20;
function streamXOR(key, nonce, src2, dst) {
  if (nonce.length !== 24) {
    throw new Error("XChaCha20 nonce must be 24 bytes");
  }
  var subkey = hchacha(key, nonce.subarray(0, 16), new Uint8Array(32));
  var modifiedNonce = new Uint8Array(12);
  modifiedNonce.set(nonce.subarray(16), 4);
  var result = chacha_1.streamXOR(subkey, modifiedNonce, src2, dst);
  wipe_1.wipe(subkey);
  return result;
}
xchacha20.streamXOR = streamXOR;
function stream(key, nonce, dst) {
  wipe_1.wipe(dst);
  return streamXOR(key, nonce, dst, dst);
}
xchacha20.stream = stream;
function hchacha(key, src2, dst) {
  var j0 = 1634760805;
  var j1 = 857760878;
  var j2 = 2036477234;
  var j3 = 1797285236;
  var j4 = key[3] << 24 | key[2] << 16 | key[1] << 8 | key[0];
  var j5 = key[7] << 24 | key[6] << 16 | key[5] << 8 | key[4];
  var j6 = key[11] << 24 | key[10] << 16 | key[9] << 8 | key[8];
  var j7 = key[15] << 24 | key[14] << 16 | key[13] << 8 | key[12];
  var j8 = key[19] << 24 | key[18] << 16 | key[17] << 8 | key[16];
  var j9 = key[23] << 24 | key[22] << 16 | key[21] << 8 | key[20];
  var j10 = key[27] << 24 | key[26] << 16 | key[25] << 8 | key[24];
  var j11 = key[31] << 24 | key[30] << 16 | key[29] << 8 | key[28];
  var j12 = src2[3] << 24 | src2[2] << 16 | src2[1] << 8 | src2[0];
  var j13 = src2[7] << 24 | src2[6] << 16 | src2[5] << 8 | src2[4];
  var j14 = src2[11] << 24 | src2[10] << 16 | src2[9] << 8 | src2[8];
  var j15 = src2[15] << 24 | src2[14] << 16 | src2[13] << 8 | src2[12];
  var x0 = j0;
  var x1 = j1;
  var x2 = j2;
  var x3 = j3;
  var x4 = j4;
  var x5 = j5;
  var x6 = j6;
  var x7 = j7;
  var x8 = j8;
  var x9 = j9;
  var x10 = j10;
  var x11 = j11;
  var x12 = j12;
  var x13 = j13;
  var x14 = j14;
  var x15 = j15;
  for (var i = 0; i < ROUNDS; i += 2) {
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x2 = x2 + x6 | 0;
    x14 ^= x2;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x10 = x10 + x14 | 0;
    x6 ^= x10;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x3 = x3 + x7 | 0;
    x15 ^= x3;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x11 = x11 + x15 | 0;
    x7 ^= x11;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x1 = x1 + x5 | 0;
    x13 ^= x1;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x9 = x9 + x13 | 0;
    x5 ^= x9;
    x5 = x5 >>> 32 - 7 | x5 << 7;
    x0 = x0 + x4 | 0;
    x12 ^= x0;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x8 = x8 + x12 | 0;
    x4 ^= x8;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 16 | x15 << 16;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 12 | x5 << 12;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 16 | x12 << 16;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 12 | x6 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 16 | x13 << 16;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 12 | x7 << 12;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 16 | x14 << 16;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 12 | x4 << 12;
    x2 = x2 + x7 | 0;
    x13 ^= x2;
    x13 = x13 >>> 32 - 8 | x13 << 8;
    x8 = x8 + x13 | 0;
    x7 ^= x8;
    x7 = x7 >>> 32 - 7 | x7 << 7;
    x3 = x3 + x4 | 0;
    x14 ^= x3;
    x14 = x14 >>> 32 - 8 | x14 << 8;
    x9 = x9 + x14 | 0;
    x4 ^= x9;
    x4 = x4 >>> 32 - 7 | x4 << 7;
    x1 = x1 + x6 | 0;
    x12 ^= x1;
    x12 = x12 >>> 32 - 8 | x12 << 8;
    x11 = x11 + x12 | 0;
    x6 ^= x11;
    x6 = x6 >>> 32 - 7 | x6 << 7;
    x0 = x0 + x5 | 0;
    x15 ^= x0;
    x15 = x15 >>> 32 - 8 | x15 << 8;
    x10 = x10 + x15 | 0;
    x5 ^= x10;
    x5 = x5 >>> 32 - 7 | x5 << 7;
  }
  binary_1.writeUint32LE(x0, dst, 0);
  binary_1.writeUint32LE(x1, dst, 4);
  binary_1.writeUint32LE(x2, dst, 8);
  binary_1.writeUint32LE(x3, dst, 12);
  binary_1.writeUint32LE(x12, dst, 16);
  binary_1.writeUint32LE(x13, dst, 20);
  binary_1.writeUint32LE(x14, dst, 24);
  binary_1.writeUint32LE(x15, dst, 28);
  return dst;
}
xchacha20.hchacha = hchacha;
var chacha20poly1305 = {};
var poly1305 = {};
var constantTime = {};
Object.defineProperty(constantTime, "__esModule", { value: true });
function select(subject, resultIfOne, resultIfZero) {
  return ~(subject - 1) & resultIfOne | subject - 1 & resultIfZero;
}
constantTime.select = select;
function lessOrEqual(a, b) {
  return (a | 0) - (b | 0) - 1 >>> 31 & 1;
}
constantTime.lessOrEqual = lessOrEqual;
function compare$1(a, b) {
  if (a.length !== b.length) {
    return 0;
  }
  var result = 0;
  for (var i = 0; i < a.length; i++) {
    result |= a[i] ^ b[i];
  }
  return 1 & result - 1 >>> 8;
}
constantTime.compare = compare$1;
function equal(a, b) {
  if (a.length === 0 || b.length === 0) {
    return false;
  }
  return compare$1(a, b) !== 0;
}
constantTime.equal = equal;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var constant_time_1 = constantTime;
  var wipe_12 = wipe$1;
  exports.DIGEST_LENGTH = 16;
  var Poly1305 = function() {
    function Poly13052(key) {
      this.digestLength = exports.DIGEST_LENGTH;
      this._buffer = new Uint8Array(16);
      this._r = new Uint16Array(10);
      this._h = new Uint16Array(10);
      this._pad = new Uint16Array(8);
      this._leftover = 0;
      this._fin = 0;
      this._finished = false;
      var t0 = key[0] | key[1] << 8;
      this._r[0] = t0 & 8191;
      var t1 = key[2] | key[3] << 8;
      this._r[1] = (t0 >>> 13 | t1 << 3) & 8191;
      var t2 = key[4] | key[5] << 8;
      this._r[2] = (t1 >>> 10 | t2 << 6) & 7939;
      var t3 = key[6] | key[7] << 8;
      this._r[3] = (t2 >>> 7 | t3 << 9) & 8191;
      var t4 = key[8] | key[9] << 8;
      this._r[4] = (t3 >>> 4 | t4 << 12) & 255;
      this._r[5] = t4 >>> 1 & 8190;
      var t5 = key[10] | key[11] << 8;
      this._r[6] = (t4 >>> 14 | t5 << 2) & 8191;
      var t6 = key[12] | key[13] << 8;
      this._r[7] = (t5 >>> 11 | t6 << 5) & 8065;
      var t7 = key[14] | key[15] << 8;
      this._r[8] = (t6 >>> 8 | t7 << 8) & 8191;
      this._r[9] = t7 >>> 5 & 127;
      this._pad[0] = key[16] | key[17] << 8;
      this._pad[1] = key[18] | key[19] << 8;
      this._pad[2] = key[20] | key[21] << 8;
      this._pad[3] = key[22] | key[23] << 8;
      this._pad[4] = key[24] | key[25] << 8;
      this._pad[5] = key[26] | key[27] << 8;
      this._pad[6] = key[28] | key[29] << 8;
      this._pad[7] = key[30] | key[31] << 8;
    }
    Poly13052.prototype._blocks = function(m, mpos, bytes) {
      var hibit = this._fin ? 0 : 1 << 11;
      var h0 = this._h[0], h1 = this._h[1], h2 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
      var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
      while (bytes >= 16) {
        var t0 = m[mpos + 0] | m[mpos + 1] << 8;
        h0 += t0 & 8191;
        var t1 = m[mpos + 2] | m[mpos + 3] << 8;
        h1 += (t0 >>> 13 | t1 << 3) & 8191;
        var t2 = m[mpos + 4] | m[mpos + 5] << 8;
        h2 += (t1 >>> 10 | t2 << 6) & 8191;
        var t3 = m[mpos + 6] | m[mpos + 7] << 8;
        h3 += (t2 >>> 7 | t3 << 9) & 8191;
        var t4 = m[mpos + 8] | m[mpos + 9] << 8;
        h4 += (t3 >>> 4 | t4 << 12) & 8191;
        h5 += t4 >>> 1 & 8191;
        var t5 = m[mpos + 10] | m[mpos + 11] << 8;
        h6 += (t4 >>> 14 | t5 << 2) & 8191;
        var t6 = m[mpos + 12] | m[mpos + 13] << 8;
        h7 += (t5 >>> 11 | t6 << 5) & 8191;
        var t7 = m[mpos + 14] | m[mpos + 15] << 8;
        h8 += (t6 >>> 8 | t7 << 8) & 8191;
        h9 += t7 >>> 5 | hibit;
        var c = 0;
        var d0 = c;
        d0 += h0 * r0;
        d0 += h1 * (5 * r9);
        d0 += h2 * (5 * r8);
        d0 += h3 * (5 * r7);
        d0 += h4 * (5 * r6);
        c = d0 >>> 13;
        d0 &= 8191;
        d0 += h5 * (5 * r5);
        d0 += h6 * (5 * r4);
        d0 += h7 * (5 * r3);
        d0 += h8 * (5 * r2);
        d0 += h9 * (5 * r1);
        c += d0 >>> 13;
        d0 &= 8191;
        var d1 = c;
        d1 += h0 * r1;
        d1 += h1 * r0;
        d1 += h2 * (5 * r9);
        d1 += h3 * (5 * r8);
        d1 += h4 * (5 * r7);
        c = d1 >>> 13;
        d1 &= 8191;
        d1 += h5 * (5 * r6);
        d1 += h6 * (5 * r5);
        d1 += h7 * (5 * r4);
        d1 += h8 * (5 * r3);
        d1 += h9 * (5 * r2);
        c += d1 >>> 13;
        d1 &= 8191;
        var d2 = c;
        d2 += h0 * r2;
        d2 += h1 * r1;
        d2 += h2 * r0;
        d2 += h3 * (5 * r9);
        d2 += h4 * (5 * r8);
        c = d2 >>> 13;
        d2 &= 8191;
        d2 += h5 * (5 * r7);
        d2 += h6 * (5 * r6);
        d2 += h7 * (5 * r5);
        d2 += h8 * (5 * r4);
        d2 += h9 * (5 * r3);
        c += d2 >>> 13;
        d2 &= 8191;
        var d3 = c;
        d3 += h0 * r3;
        d3 += h1 * r2;
        d3 += h2 * r1;
        d3 += h3 * r0;
        d3 += h4 * (5 * r9);
        c = d3 >>> 13;
        d3 &= 8191;
        d3 += h5 * (5 * r8);
        d3 += h6 * (5 * r7);
        d3 += h7 * (5 * r6);
        d3 += h8 * (5 * r5);
        d3 += h9 * (5 * r4);
        c += d3 >>> 13;
        d3 &= 8191;
        var d4 = c;
        d4 += h0 * r4;
        d4 += h1 * r3;
        d4 += h2 * r2;
        d4 += h3 * r1;
        d4 += h4 * r0;
        c = d4 >>> 13;
        d4 &= 8191;
        d4 += h5 * (5 * r9);
        d4 += h6 * (5 * r8);
        d4 += h7 * (5 * r7);
        d4 += h8 * (5 * r6);
        d4 += h9 * (5 * r5);
        c += d4 >>> 13;
        d4 &= 8191;
        var d5 = c;
        d5 += h0 * r5;
        d5 += h1 * r4;
        d5 += h2 * r3;
        d5 += h3 * r2;
        d5 += h4 * r1;
        c = d5 >>> 13;
        d5 &= 8191;
        d5 += h5 * r0;
        d5 += h6 * (5 * r9);
        d5 += h7 * (5 * r8);
        d5 += h8 * (5 * r7);
        d5 += h9 * (5 * r6);
        c += d5 >>> 13;
        d5 &= 8191;
        var d6 = c;
        d6 += h0 * r6;
        d6 += h1 * r5;
        d6 += h2 * r4;
        d6 += h3 * r3;
        d6 += h4 * r2;
        c = d6 >>> 13;
        d6 &= 8191;
        d6 += h5 * r1;
        d6 += h6 * r0;
        d6 += h7 * (5 * r9);
        d6 += h8 * (5 * r8);
        d6 += h9 * (5 * r7);
        c += d6 >>> 13;
        d6 &= 8191;
        var d7 = c;
        d7 += h0 * r7;
        d7 += h1 * r6;
        d7 += h2 * r5;
        d7 += h3 * r4;
        d7 += h4 * r3;
        c = d7 >>> 13;
        d7 &= 8191;
        d7 += h5 * r2;
        d7 += h6 * r1;
        d7 += h7 * r0;
        d7 += h8 * (5 * r9);
        d7 += h9 * (5 * r8);
        c += d7 >>> 13;
        d7 &= 8191;
        var d8 = c;
        d8 += h0 * r8;
        d8 += h1 * r7;
        d8 += h2 * r6;
        d8 += h3 * r5;
        d8 += h4 * r4;
        c = d8 >>> 13;
        d8 &= 8191;
        d8 += h5 * r3;
        d8 += h6 * r2;
        d8 += h7 * r1;
        d8 += h8 * r0;
        d8 += h9 * (5 * r9);
        c += d8 >>> 13;
        d8 &= 8191;
        var d9 = c;
        d9 += h0 * r9;
        d9 += h1 * r8;
        d9 += h2 * r7;
        d9 += h3 * r6;
        d9 += h4 * r5;
        c = d9 >>> 13;
        d9 &= 8191;
        d9 += h5 * r4;
        d9 += h6 * r3;
        d9 += h7 * r2;
        d9 += h8 * r1;
        d9 += h9 * r0;
        c += d9 >>> 13;
        d9 &= 8191;
        c = (c << 2) + c | 0;
        c = c + d0 | 0;
        d0 = c & 8191;
        c = c >>> 13;
        d1 += c;
        h0 = d0;
        h1 = d1;
        h2 = d2;
        h3 = d3;
        h4 = d4;
        h5 = d5;
        h6 = d6;
        h7 = d7;
        h8 = d8;
        h9 = d9;
        mpos += 16;
        bytes -= 16;
      }
      this._h[0] = h0;
      this._h[1] = h1;
      this._h[2] = h2;
      this._h[3] = h3;
      this._h[4] = h4;
      this._h[5] = h5;
      this._h[6] = h6;
      this._h[7] = h7;
      this._h[8] = h8;
      this._h[9] = h9;
    };
    Poly13052.prototype.finish = function(mac, macpos) {
      if (macpos === void 0) {
        macpos = 0;
      }
      var g = new Uint16Array(10);
      var c;
      var mask;
      var f;
      var i;
      if (this._leftover) {
        i = this._leftover;
        this._buffer[i++] = 1;
        for (; i < 16; i++) {
          this._buffer[i] = 0;
        }
        this._fin = 1;
        this._blocks(this._buffer, 0, 16);
      }
      c = this._h[1] >>> 13;
      this._h[1] &= 8191;
      for (i = 2; i < 10; i++) {
        this._h[i] += c;
        c = this._h[i] >>> 13;
        this._h[i] &= 8191;
      }
      this._h[0] += c * 5;
      c = this._h[0] >>> 13;
      this._h[0] &= 8191;
      this._h[1] += c;
      c = this._h[1] >>> 13;
      this._h[1] &= 8191;
      this._h[2] += c;
      g[0] = this._h[0] + 5;
      c = g[0] >>> 13;
      g[0] &= 8191;
      for (i = 1; i < 10; i++) {
        g[i] = this._h[i] + c;
        c = g[i] >>> 13;
        g[i] &= 8191;
      }
      g[9] -= 1 << 13;
      mask = (c ^ 1) - 1;
      for (i = 0; i < 10; i++) {
        g[i] &= mask;
      }
      mask = ~mask;
      for (i = 0; i < 10; i++) {
        this._h[i] = this._h[i] & mask | g[i];
      }
      this._h[0] = (this._h[0] | this._h[1] << 13) & 65535;
      this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535;
      this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535;
      this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535;
      this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535;
      this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535;
      this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535;
      this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535;
      f = this._h[0] + this._pad[0];
      this._h[0] = f & 65535;
      for (i = 1; i < 8; i++) {
        f = (this._h[i] + this._pad[i] | 0) + (f >>> 16) | 0;
        this._h[i] = f & 65535;
      }
      mac[macpos + 0] = this._h[0] >>> 0;
      mac[macpos + 1] = this._h[0] >>> 8;
      mac[macpos + 2] = this._h[1] >>> 0;
      mac[macpos + 3] = this._h[1] >>> 8;
      mac[macpos + 4] = this._h[2] >>> 0;
      mac[macpos + 5] = this._h[2] >>> 8;
      mac[macpos + 6] = this._h[3] >>> 0;
      mac[macpos + 7] = this._h[3] >>> 8;
      mac[macpos + 8] = this._h[4] >>> 0;
      mac[macpos + 9] = this._h[4] >>> 8;
      mac[macpos + 10] = this._h[5] >>> 0;
      mac[macpos + 11] = this._h[5] >>> 8;
      mac[macpos + 12] = this._h[6] >>> 0;
      mac[macpos + 13] = this._h[6] >>> 8;
      mac[macpos + 14] = this._h[7] >>> 0;
      mac[macpos + 15] = this._h[7] >>> 8;
      this._finished = true;
      return this;
    };
    Poly13052.prototype.update = function(m) {
      var mpos = 0;
      var bytes = m.length;
      var want;
      if (this._leftover) {
        want = 16 - this._leftover;
        if (want > bytes) {
          want = bytes;
        }
        for (var i = 0; i < want; i++) {
          this._buffer[this._leftover + i] = m[mpos + i];
        }
        bytes -= want;
        mpos += want;
        this._leftover += want;
        if (this._leftover < 16) {
          return this;
        }
        this._blocks(this._buffer, 0, 16);
        this._leftover = 0;
      }
      if (bytes >= 16) {
        want = bytes - bytes % 16;
        this._blocks(m, mpos, want);
        mpos += want;
        bytes -= want;
      }
      if (bytes) {
        for (var i = 0; i < bytes; i++) {
          this._buffer[this._leftover + i] = m[mpos + i];
        }
        this._leftover += bytes;
      }
      return this;
    };
    Poly13052.prototype.digest = function() {
      if (this._finished) {
        throw new Error("Poly1305 was finished");
      }
      var mac = new Uint8Array(16);
      this.finish(mac);
      return mac;
    };
    Poly13052.prototype.clean = function() {
      wipe_12.wipe(this._buffer);
      wipe_12.wipe(this._r);
      wipe_12.wipe(this._h);
      wipe_12.wipe(this._pad);
      this._leftover = 0;
      this._fin = 0;
      this._finished = true;
      return this;
    };
    return Poly13052;
  }();
  exports.Poly1305 = Poly1305;
  function oneTimeAuth(key, data) {
    var h = new Poly1305(key);
    h.update(data);
    var digest2 = h.digest();
    h.clean();
    return digest2;
  }
  exports.oneTimeAuth = oneTimeAuth;
  function equal2(a, b) {
    if (a.length !== exports.DIGEST_LENGTH || b.length !== exports.DIGEST_LENGTH) {
      return false;
    }
    return constant_time_1.equal(a, b);
  }
  exports.equal = equal2;
})(poly1305);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var chacha_12 = chacha;
  var poly1305_1 = poly1305;
  var wipe_12 = wipe$1;
  var binary_12 = binary;
  var constant_time_1 = constantTime;
  exports.KEY_LENGTH = 32;
  exports.NONCE_LENGTH = 12;
  exports.TAG_LENGTH = 16;
  var ZEROS = new Uint8Array(16);
  var ChaCha20Poly1305 = function() {
    function ChaCha20Poly13052(key) {
      this.nonceLength = exports.NONCE_LENGTH;
      this.tagLength = exports.TAG_LENGTH;
      if (key.length !== exports.KEY_LENGTH) {
        throw new Error("ChaCha20Poly1305 needs 32-byte key");
      }
      this._key = new Uint8Array(key);
    }
    ChaCha20Poly13052.prototype.seal = function(nonce, plaintext, associatedData, dst) {
      if (nonce.length > 16) {
        throw new Error("ChaCha20Poly1305: incorrect nonce length");
      }
      var counter = new Uint8Array(16);
      counter.set(nonce, counter.length - nonce.length);
      var authKey = new Uint8Array(32);
      chacha_12.stream(this._key, counter, authKey, 4);
      var resultLength = plaintext.length + this.tagLength;
      var result;
      if (dst) {
        if (dst.length !== resultLength) {
          throw new Error("ChaCha20Poly1305: incorrect destination length");
        }
        result = dst;
      } else {
        result = new Uint8Array(resultLength);
      }
      chacha_12.streamXOR(this._key, counter, plaintext, result, 4);
      this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
      wipe_12.wipe(counter);
      return result;
    };
    ChaCha20Poly13052.prototype.open = function(nonce, sealed, associatedData, dst) {
      if (nonce.length > 16) {
        throw new Error("ChaCha20Poly1305: incorrect nonce length");
      }
      if (sealed.length < this.tagLength) {
        return null;
      }
      var counter = new Uint8Array(16);
      counter.set(nonce, counter.length - nonce.length);
      var authKey = new Uint8Array(32);
      chacha_12.stream(this._key, counter, authKey, 4);
      var calculatedTag = new Uint8Array(this.tagLength);
      this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
      if (!constant_time_1.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
        return null;
      }
      var resultLength = sealed.length - this.tagLength;
      var result;
      if (dst) {
        if (dst.length !== resultLength) {
          throw new Error("ChaCha20Poly1305: incorrect destination length");
        }
        result = dst;
      } else {
        result = new Uint8Array(resultLength);
      }
      chacha_12.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
      wipe_12.wipe(counter);
      return result;
    };
    ChaCha20Poly13052.prototype.clean = function() {
      wipe_12.wipe(this._key);
      return this;
    };
    ChaCha20Poly13052.prototype._authenticate = function(tagOut, authKey, ciphertext, associatedData) {
      var h = new poly1305_1.Poly1305(authKey);
      if (associatedData) {
        h.update(associatedData);
        if (associatedData.length % 16 > 0) {
          h.update(ZEROS.subarray(associatedData.length % 16));
        }
      }
      h.update(ciphertext);
      if (ciphertext.length % 16 > 0) {
        h.update(ZEROS.subarray(ciphertext.length % 16));
      }
      var length2 = new Uint8Array(8);
      if (associatedData) {
        binary_12.writeUint64LE(associatedData.length, length2);
      }
      h.update(length2);
      binary_12.writeUint64LE(ciphertext.length, length2);
      h.update(length2);
      var tag = h.digest();
      for (var i = 0; i < tag.length; i++) {
        tagOut[i] = tag[i];
      }
      h.clean();
      wipe_12.wipe(tag);
      wipe_12.wipe(length2);
    };
    return ChaCha20Poly13052;
  }();
  exports.ChaCha20Poly1305 = ChaCha20Poly1305;
})(chacha20poly1305);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var xchacha20_1 = xchacha20;
  var chacha20poly1305_1 = chacha20poly1305;
  var wipe_12 = wipe$1;
  exports.KEY_LENGTH = 32;
  exports.NONCE_LENGTH = 24;
  exports.TAG_LENGTH = 16;
  var XChaCha20Poly1305 = function() {
    function XChaCha20Poly13052(key) {
      this.nonceLength = exports.NONCE_LENGTH;
      this.tagLength = exports.TAG_LENGTH;
      if (key.length !== exports.KEY_LENGTH) {
        throw new Error("ChaCha20Poly1305 needs 32-byte key");
      }
      this._key = new Uint8Array(key);
    }
    XChaCha20Poly13052.prototype.seal = function(nonce, plaintext, associatedData, dst) {
      if (nonce.length !== 24) {
        throw new Error("XChaCha20Poly1305: incorrect nonce length");
      }
      var subKey = xchacha20_1.hchacha(this._key, nonce.subarray(0, 16), new Uint8Array(32));
      var modifiedNonce = new Uint8Array(12);
      modifiedNonce.set(nonce.subarray(16), 4);
      var chaChaPoly = new chacha20poly1305_1.ChaCha20Poly1305(subKey);
      var result = chaChaPoly.seal(modifiedNonce, plaintext, associatedData, dst);
      wipe_12.wipe(subKey);
      wipe_12.wipe(modifiedNonce);
      chaChaPoly.clean();
      return result;
    };
    XChaCha20Poly13052.prototype.open = function(nonce, sealed, associatedData, dst) {
      if (nonce.length !== 24) {
        throw new Error("XChaCha20Poly1305: incorrect nonce length");
      }
      if (sealed.length < this.tagLength) {
        return null;
      }
      var subKey = xchacha20_1.hchacha(this._key, nonce.subarray(0, 16), new Uint8Array(32));
      var modifiedNonce = new Uint8Array(12);
      modifiedNonce.set(nonce.subarray(16), 4);
      var chaChaPoly = new chacha20poly1305_1.ChaCha20Poly1305(subKey);
      var result = chaChaPoly.open(modifiedNonce, sealed, associatedData, dst);
      wipe_12.wipe(subKey);
      wipe_12.wipe(modifiedNonce);
      chaChaPoly.clean();
      return result;
    };
    XChaCha20Poly13052.prototype.clean = function() {
      wipe_12.wipe(this._key);
      return this;
    };
    return XChaCha20Poly13052;
  }();
  exports.XChaCha20Poly1305 = XChaCha20Poly1305;
})(xchacha20poly1305);
function bytesToBase64url(b) {
  return toString$1(b, "base64url");
}
function base64ToBytes(s) {
  const inputBase64Url = s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return fromString$1(inputBase64Url, "base64url");
}
function encodeBase64url(s) {
  return bytesToBase64url(fromString$1(s));
}
function decodeBase64url(s) {
  return toString$1(base64ToBytes(s));
}
function toSealed(ciphertext, tag) {
  return concat$1([base64ToBytes(ciphertext), base64ToBytes(tag)]);
}
new elliptic.ec("secp256k1");
elliptic.ec;
new elliptic.ec("secp256k1");
function _for(test, update, body) {
  var stage;
  for (; ; ) {
    var shouldContinue = test();
    if (_isSettledPact(shouldContinue)) {
      shouldContinue = shouldContinue.v;
    }
    if (!shouldContinue) {
      return result;
    }
    if (shouldContinue.then) {
      stage = 0;
      break;
    }
    var result = body();
    if (result && result.then) {
      if (_isSettledPact(result)) {
        result = result.s;
      } else {
        stage = 1;
        break;
      }
    }
    if (update) {
      var updateValue = update();
      if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
        stage = 2;
        break;
      }
    }
  }
  var pact = new _Pact();
  var reject = _settle.bind(null, pact, 2);
  (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
  return pact;
  function _resumeAfterBody(value) {
    result = value;
    do {
      if (update) {
        updateValue = update();
        if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
          updateValue.then(_resumeAfterUpdate).then(void 0, reject);
          return;
        }
      }
      shouldContinue = test();
      if (!shouldContinue || _isSettledPact(shouldContinue) && !shouldContinue.v) {
        _settle(pact, 1, result);
        return;
      }
      if (shouldContinue.then) {
        shouldContinue.then(_resumeAfterTest).then(void 0, reject);
        return;
      }
      result = body();
      if (_isSettledPact(result)) {
        result = result.v;
      }
    } while (!result || !result.then);
    result.then(_resumeAfterBody).then(void 0, reject);
  }
  function _resumeAfterTest(shouldContinue2) {
    if (shouldContinue2) {
      result = body();
      if (result && result.then) {
        result.then(_resumeAfterBody).then(void 0, reject);
      } else {
        _resumeAfterBody(result);
      }
    } else {
      _settle(pact, 1, result);
    }
  }
  function _resumeAfterUpdate() {
    if (shouldContinue = test()) {
      if (shouldContinue.then) {
        shouldContinue.then(_resumeAfterTest).then(void 0, reject);
      } else {
        _resumeAfterTest(shouldContinue);
      }
    } else {
      _settle(pact, 1, result);
    }
  }
}
const decryptJWE = function(jwe, decrypter) {
  try {
    let _temp5 = function(_result) {
      if (_exit)
        ;
      if (cleartext === null)
        throw new Error("failure: Failed to decrypt");
      return cleartext;
    };
    let _exit;
    validateJWE(jwe);
    const protHeader = JSON.parse(decodeBase64url(jwe.protected));
    if (protHeader.enc !== decrypter.enc)
      throw new Error(`not_supported: Decrypter does not supported: '${protHeader.enc}'`);
    const sealed = toSealed(jwe.ciphertext, jwe.tag);
    const aad = fromString$1(jwe.aad ? `${jwe.protected}.${jwe.aad}` : jwe.protected);
    let cleartext = null;
    const _temp4 = function() {
      if (protHeader.alg === "dir" && decrypter.alg === "dir") {
        return Promise.resolve(decrypter.decrypt(sealed, base64ToBytes(jwe.iv), aad)).then(function(_decrypter$decrypt) {
          cleartext = _decrypter$decrypt;
        });
      } else
        return function() {
          if (!jwe.recipients || jwe.recipients.length === 0) {
            throw new Error("bad_jwe: missing recipients");
          } else {
            let i = 0;
            return _for(function() {
              return !cleartext && i < jwe.recipients.length;
            }, function() {
              return i++;
            }, function() {
              const recipient = jwe.recipients[i];
              Object.assign(recipient.header, protHeader);
              const _temp3 = function() {
                if (recipient.header.alg === decrypter.alg) {
                  return Promise.resolve(decrypter.decrypt(sealed, base64ToBytes(jwe.iv), aad, recipient)).then(function(_decrypter$decrypt2) {
                    cleartext = _decrypter$decrypt2;
                  });
                }
              }();
              if (_temp3 && _temp3.then)
                return _temp3.then(function() {
                });
            });
          }
        }();
    }();
    return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp5) : _temp5(_temp4));
  } catch (e) {
    return Promise.reject(e);
  }
};
const _iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function _settle(pact, state, value) {
  if (!pact.s) {
    if (value instanceof _Pact) {
      if (value.s) {
        if (state & 1) {
          state = value.s;
        }
        value = value.v;
      } else {
        value.o = _settle.bind(null, pact, state);
        return;
      }
    }
    if (value && value.then) {
      value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
      return;
    }
    pact.s = state;
    pact.v = value;
    const observer = pact.o;
    if (observer) {
      observer(pact);
    }
  }
}
const _Pact = /* @__PURE__ */ function() {
  function _Pact2() {
  }
  _Pact2.prototype.then = function(onFulfilled, onRejected) {
    const result = new _Pact2();
    const state = this.s;
    if (state) {
      const callback = state & 1 ? onFulfilled : onRejected;
      if (callback) {
        try {
          _settle(result, 1, callback(this.v));
        } catch (e) {
          _settle(result, 2, e);
        }
        return result;
      } else {
        return this;
      }
    }
    this.o = function(_this) {
      try {
        const value = _this.v;
        if (_this.s & 1) {
          _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
        } else if (onRejected) {
          _settle(result, 1, onRejected(value));
        } else {
          _settle(result, 2, value);
        }
      } catch (e) {
        _settle(result, 2, e);
      }
    };
    return result;
  };
  return _Pact2;
}();
function _isSettledPact(thenable) {
  return thenable instanceof _Pact && thenable.s & 1;
}
function _forTo(array, body, check) {
  var i = -1, pact, reject;
  function _cycle(result) {
    try {
      while (++i < array.length && (!check || !check())) {
        result = body(i);
        if (result && result.then) {
          if (_isSettledPact(result)) {
            result = result.v;
          } else {
            result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
            return;
          }
        }
      }
      if (pact) {
        _settle(pact, 1, result);
      } else {
        pact = result;
      }
    } catch (e) {
      _settle(pact || (pact = new _Pact()), 2, e);
    }
  }
  _cycle();
  return pact;
}
function _forOf(target, body, check) {
  if (typeof target[_iteratorSymbol] === "function") {
    let _cycle = function(result) {
      try {
        while (!(step = iterator.next()).done && (!check || !check())) {
          result = body(step.value);
          if (result && result.then) {
            if (_isSettledPact(result)) {
              result = result.v;
            } else {
              result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
              return;
            }
          }
        }
        if (pact) {
          _settle(pact, 1, result);
        } else {
          pact = result;
        }
      } catch (e) {
        _settle(pact || (pact = new _Pact()), 2, e);
      }
    };
    var iterator = target[_iteratorSymbol](), step, pact, reject;
    _cycle();
    if (iterator.return) {
      var _fixup = function(value) {
        try {
          if (!step.done) {
            iterator.return();
          }
        } catch (e) {
        }
        return value;
      };
      if (pact && pact.then) {
        return pact.then(_fixup, function(e) {
          throw _fixup(e);
        });
      }
      _fixup();
    }
    return pact;
  }
  if (!("length" in target)) {
    throw new TypeError("Object is not iterable");
  }
  var values = [];
  for (var i = 0; i < target.length; i++) {
    values.push(target[i]);
  }
  return _forTo(values, function(i2) {
    return body(values[i2]);
  }, check);
}
function validateJWE(jwe) {
  if (!(jwe.protected && jwe.iv && jwe.ciphertext && jwe.tag)) {
    throw new Error("bad_jwe: missing properties");
  }
  if (jwe.recipients) {
    jwe.recipients.map((rec) => {
      if (!(rec.header && rec.encrypted_key)) {
        throw new Error("bad_jwe: malformed recipients");
      }
    });
  }
}
function encodeJWE({
  ciphertext,
  tag,
  iv,
  protectedHeader,
  recipient
}, aad) {
  const jwe = {
    protected: protectedHeader,
    iv: bytesToBase64url(iv),
    ciphertext: bytesToBase64url(ciphertext),
    tag: bytesToBase64url(tag)
  };
  if (aad)
    jwe.aad = bytesToBase64url(aad);
  if (recipient)
    jwe.recipients = [recipient];
  return jwe;
}
const createJWE = function(cleartext, encrypters, protectedHeader = {}, aad) {
  try {
    if (encrypters[0].alg === "dir") {
      if (encrypters.length > 1)
        throw new Error('not_supported: Can only do "dir" encryption to one key.');
      return Promise.resolve(encrypters[0].encrypt(cleartext, protectedHeader, aad)).then(function(encryptionResult) {
        return encodeJWE(encryptionResult, aad);
      });
    } else {
      const tmpEnc = encrypters[0].enc;
      if (!encrypters.reduce((acc, encrypter) => acc && encrypter.enc === tmpEnc, true)) {
        throw new Error("invalid_argument: Incompatible encrypters passed");
      }
      let cek;
      let jwe;
      const _temp2 = _forOf(encrypters, function(encrypter) {
        const _temp = function() {
          if (!cek) {
            return Promise.resolve(encrypter.encrypt(cleartext, protectedHeader, aad)).then(function(encryptionResult) {
              cek = encryptionResult.cek;
              jwe = encodeJWE(encryptionResult, aad);
            });
          } else {
            return Promise.resolve(encrypter.encryptCek == null ? void 0 : encrypter.encryptCek(cek)).then(function(recipient) {
              if (recipient) {
                var _jwe, _jwe$recipients;
                (_jwe = jwe) == null ? void 0 : (_jwe$recipients = _jwe.recipients) == null ? void 0 : _jwe$recipients.push(recipient);
              }
            });
          }
        }();
        if (_temp && _temp.then)
          return _temp.then(function() {
          });
      });
      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function() {
        return jwe;
      }) : jwe);
    }
  } catch (e) {
    return Promise.reject(e);
  }
};
function xc20pEncrypter(key) {
  const cipher = new xchacha20poly1305.XChaCha20Poly1305(key);
  return (cleartext, aad) => {
    const iv = random.randomBytes(cipher.nonceLength);
    const sealed = cipher.seal(iv, cleartext, aad);
    return {
      ciphertext: sealed.subarray(0, sealed.length - cipher.tagLength),
      tag: sealed.subarray(sealed.length - cipher.tagLength),
      iv
    };
  };
}
function xc20pDirEncrypter(key) {
  const encrypt = function(cleartext, protectedHeader = {}, aad) {
    try {
      const protHeader = encodeBase64url(JSON.stringify(Object.assign({
        alg
      }, protectedHeader, {
        enc
      })));
      const encodedAad = fromString$1(aad ? `${protHeader}.${bytesToBase64url(aad)}` : protHeader);
      return Promise.resolve(__spreadProps(__spreadValues({}, xc20pEncrypt(cleartext, encodedAad)), {
        protectedHeader: protHeader
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const xc20pEncrypt = xc20pEncrypter(key);
  const enc = "XC20P";
  const alg = "dir";
  return {
    alg,
    enc,
    encrypt
  };
}
function xc20pDirDecrypter(key) {
  const decrypt = function(sealed, iv, aad) {
    try {
      return Promise.resolve(cipher.open(iv, sealed, aad));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  const cipher = new xchacha20poly1305.XChaCha20Poly1305(key);
  return {
    alg: "dir",
    enc: "XC20P",
    decrypt
  };
}
var lib = {};
var encode_1 = encode$4;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode$4(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode$4.bytes = offset - oldOffset + 1;
  return out;
}
var decode$6 = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf2, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf2.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b = buf2[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode$6,
  encodingLength: length
};
var _brrp_varint = varint;
const decode$5 = (data) => {
  const code2 = _brrp_varint.decode(data);
  return [
    code2,
    _brrp_varint.decode.bytes
  ];
};
const encodeTo = (int2, target, offset = 0) => {
  _brrp_varint.encode(int2, target, offset);
  return target;
};
const encodingLength = (int2) => {
  return _brrp_varint.encodingLength(int2);
};
const equals$1 = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
const coerce = (o) => {
  if (o instanceof Uint8Array && o.constructor.name === "Uint8Array")
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
const create$1 = (code2, digest2) => {
  const size = digest2.byteLength;
  const sizeOffset = encodingLength(code2);
  const digestOffset = sizeOffset + encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  encodeTo(code2, bytes, 0);
  encodeTo(size, bytes, sizeOffset);
  bytes.set(digest2, digestOffset);
  return new Digest(code2, size, digest2, bytes);
};
const decode$4 = (multihash) => {
  const bytes = coerce(multihash);
  const [code2, sizeOffset] = decode$5(bytes);
  const [size, digestOffset] = decode$5(bytes.subarray(sizeOffset));
  const digest2 = bytes.subarray(sizeOffset + digestOffset);
  if (digest2.byteLength !== size) {
    throw new Error("Incorrect length");
  }
  return new Digest(code2, size, digest2, bytes);
};
const equals = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return a.code === b.code && a.size === b.size && equals$1(a.bytes, b.bytes);
  }
};
class Digest {
  constructor(code2, size, digest2, bytes) {
    this.code = code2;
    this.size = size;
    this.digest = digest2;
    this.bytes = bytes;
  }
}
function base(ALPHABET2) {
  if (ALPHABET2.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET2.length; i++) {
    var x = ALPHABET2.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + " is ambiguous");
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET2.length;
  var LEADER = ALPHABET2.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode2(source) {
    if (source instanceof Uint8Array)
      ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i2 = 0;
      for (var it1 = size - 1; (carry !== 0 || i2 < length2) && it1 !== -1; it1--, i2++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i2;
      pbegin++;
    }
    var it2 = size - length2;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET2.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i2 = 0;
      for (var it3 = size - 1; (carry !== 0 || i2 < length2) && it3 !== -1; it3--, i2++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i2;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it4 = size - length2;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j2 = zeroes;
    while (it4 !== size) {
      vch[j2++] = b256[it4++];
    }
    return vch;
  }
  function decode2(string2) {
    var buffer2 = decodeUnsafe(string2);
    if (buffer2) {
      return buffer2;
    }
    throw new Error("Non-base" + BASE + " character");
  }
  return {
    encode: encode2,
    decodeUnsafe,
    decode: decode2
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
class Encoder {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
class Decoder {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      switch (text[0]) {
        case this.prefix: {
          return this.baseDecode(text.slice(1));
        }
        default: {
          throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
        }
      }
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    const decoders = __spreadValues({
      [this.prefix]: this
    }, decoder.decoders || { [decoder.prefix]: decoder });
    return new ComposedDecoder(decoders);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    const other = decoder.decoders || { [decoder.prefix]: decoder };
    return new ComposedDecoder(__spreadValues(__spreadValues({}, this.decoders), other));
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
}
class Codec {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name2, prefix, baseEncode);
    this.decoder = new Decoder(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const withAlphabet = ({ name: name2, prefix, encode: encode2, decode: decode2, alphabet }) => from$1({
  name: name2,
  prefix,
  encode: (input) => encode2(input, alphabet),
  decode: (input) => {
    for (const char of input) {
      if (alphabet.indexOf(char) < 0) {
        throw new Error(`invalid ${name2} character`);
      }
    }
    return decode2(input, alphabet);
  }
});
const withSettings = ({ name: name2, prefix, settings, encode: encode2, decode: decode2 }) => from$1({
  name: name2,
  prefix,
  encode: (input) => encode2(input, settings),
  decode: (input) => decode2(input, settings)
});
const from$1 = ({ name: name2, prefix, encode: encode2, decode: decode2 }) => new Codec(name2, prefix, encode2, decode2);
const implement = (alphabet) => {
  const { encode: encode2, decode: decode2 } = _brrp__multiformats_scope_baseX(alphabet);
  return {
    encode: encode2,
    decode: (text) => coerce(decode2(text))
  };
};
const base58btc = from$1(__spreadValues({
  name: "base58btc",
  prefix: "z"
}, implement("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")));
from$1(__spreadValues({
  name: "base58flickr",
  prefix: "Z"
}, implement("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ")));
function decode$3(input, alphabet) {
  input = input.replace(/=/g, "");
  const length2 = input.length;
  let bits = 0;
  let value = 0;
  let index = 0;
  const output = new Uint8Array(length2 * 5 / 8 | 0);
  for (let i = 0; i < length2; i++) {
    value = value << 5 | alphabet.indexOf(input[i]);
    bits += 5;
    if (bits >= 8) {
      output[index++] = value >>> bits - 8 & 255;
      bits -= 8;
    }
  }
  return output;
}
function encode$3(buffer2, alphabet) {
  const length2 = buffer2.byteLength;
  const view = new Uint8Array(buffer2);
  const padding = alphabet.indexOf("=") === alphabet.length - 1;
  if (padding) {
    alphabet = alphabet.substring(0, alphabet.length - 1);
  }
  let bits = 0;
  let value = 0;
  let output = "";
  for (let i = 0; i < length2; i++) {
    value = value << 8 | view[i];
    bits += 8;
    while (bits >= 5) {
      output += alphabet[value >>> bits - 5 & 31];
      bits -= 5;
    }
  }
  if (bits > 0) {
    output += alphabet[value << 5 - bits & 31];
  }
  if (padding) {
    while (output.length % 8 !== 0) {
      output += "=";
    }
  }
  return output;
}
const base32 = withAlphabet({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  encode: encode$3,
  decode: decode$3
});
withAlphabet({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  encode: encode$3,
  decode: decode$3
});
withAlphabet({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  encode: encode$3,
  decode: decode$3
});
withAlphabet({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  encode: encode$3,
  decode: decode$3
});
withAlphabet({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  encode: encode$3,
  decode: decode$3
});
class CID {
  constructor(version2, code2, multihash, bytes) {
    this.code = code2;
    this.version = version2;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = /* @__PURE__ */ new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly$1,
      version: readonly$1,
      multihash: readonly$1,
      bytes: readonly$1,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      default: {
        const { code: code2, multihash } = this;
        if (code2 !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code2, digest: digest2 } = this.multihash;
        const multihash = create$1(code2, digest2);
        return CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && equals(this.multihash, other.multihash);
  }
  toString(base3) {
    const { bytes, version: version2, _baseCache } = this;
    switch (version2) {
      case 0:
        return toStringV0(bytes, _baseCache, base3 || base58btc.encoder);
      default:
        return toStringV1(bytes, _baseCache, base3 || base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "CID(" + this.toString() + ")";
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error("Deprecated, use .toString()");
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const { version: version2, code: code2, multihash, bytes } = value;
      return new CID(version2, code2, multihash, bytes || encodeCID(version2, code2, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const { version: version2, multihash, code: code2 } = value;
      const digest2 = decode$4(multihash);
      return CID.create(version2, code2, digest2);
    } else {
      return null;
    }
  }
  static create(version2, code2, digest2) {
    if (typeof code2 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    switch (version2) {
      case 0: {
        if (code2 !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
        } else {
          return new CID(version2, code2, digest2, digest2.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID(version2, code2, digest2.bytes);
        return new CID(version2, code2, digest2, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  static createV0(digest2) {
    return CID.create(0, DAG_PB_CODE, digest2);
  }
  static createV1(code2, digest2) {
    return CID.create(1, code2, digest2);
  }
  static decode(bytes) {
    const [cid2, remainder] = CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid2;
  }
  static decodeFirst(bytes) {
    const specs = CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid2 = specs.version === 0 ? CID.createV0(digest2) : CID.createV1(specs.codec, digest2);
    return [
      cid2,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length2] = decode$5(initialBytes.subarray(offset));
      offset += length2;
      return i;
    };
    let version2 = next();
    let codec = DAG_PB_CODE;
    if (version2 === 18) {
      version2 = 0;
      offset = 0;
    } else if (version2 === 1) {
      codec = next();
    } else if (version2 !== 1) {
      throw new RangeError(`Invalid CID version ${version2}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version: version2,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base3) {
    const [prefix, bytes] = parseCIDtoBytes(source, base3);
    const cid2 = CID.decode(bytes);
    cid2._baseCache.set(prefix, source);
    return cid2;
  }
}
const parseCIDtoBytes = (source, base3) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(source)
      ];
    }
    case base32.prefix: {
      const decoder = base3 || base32;
      return [
        base32.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base3 == null) {
        throw Error("To parse non base32 or base56btc encoded CID multibase decoder must be provided");
      }
      return [
        source[0],
        base3.decode(source)
      ];
    }
  }
};
const toStringV0 = (bytes, cache, base3) => {
  const { prefix } = base3;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
  }
  const cid2 = cache.get(prefix);
  if (cid2 == null) {
    const cid3 = base3.encode(bytes).slice(1);
    cache.set(prefix, cid3);
    return cid3;
  } else {
    return cid2;
  }
};
const toStringV1 = (bytes, cache, base3) => {
  const { prefix } = base3;
  const cid2 = cache.get(prefix);
  if (cid2 == null) {
    const cid3 = base3.encode(bytes);
    cache.set(prefix, cid3);
    return cid3;
  } else {
    return cid2;
  }
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version2, code2, multihash) => {
  const codeOffset = encodingLength(version2);
  const hashOffset = codeOffset + encodingLength(code2);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version2, bytes, 0);
  encodeTo(code2, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
const cidSymbol = Symbol.for("@ipld/js-cid/CID");
const readonly$1 = {
  writable: false,
  configurable: false,
  enumerable: true
};
const hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
const version = "0.0.0-dev";
const deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
var cid = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  CID
});
const from = ({ name: name2, code: code2, encode: encode2 }) => new Hasher(name2, code2, encode2);
class Hasher {
  constructor(name2, code2, encode2) {
    this.name = name2;
    this.code = code2;
    this.encode = encode2;
  }
  async digest(input) {
    if (input instanceof Uint8Array) {
      const digest2 = await this.encode(input);
      return create$1(this.code, digest2);
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
}
const readonly = ({ enumerable = true, configurable = false } = {}) => ({
  enumerable,
  configurable,
  writable: false
});
const links = function* (source, base3) {
  if (source == null)
    return;
  for (const [key, value] of Object.entries(source)) {
    const path = [
      ...base3,
      key
    ];
    if (value != null && typeof value === "object") {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [
            ...path,
            index
          ];
          const cid2 = CID.asCID(element);
          if (cid2) {
            yield [
              elementPath.join("/"),
              cid2
            ];
          } else if (typeof element === "object") {
            yield* links(element, elementPath);
          }
        }
      } else {
        const cid2 = CID.asCID(value);
        if (cid2) {
          yield [
            path.join("/"),
            cid2
          ];
        } else {
          yield* links(value, path);
        }
      }
    }
  }
};
const tree = function* (source, base3) {
  if (source == null)
    return;
  for (const [key, value] of Object.entries(source)) {
    const path = [
      ...base3,
      key
    ];
    yield path.join("/");
    if (value != null && typeof value === "object" && !CID.asCID(value)) {
      if (Array.isArray(value)) {
        for (const [index, element] of value.entries()) {
          const elementPath = [
            ...path,
            index
          ];
          yield elementPath.join("/");
          if (typeof element === "object" && !CID.asCID(element)) {
            yield* tree(element, elementPath);
          }
        }
      } else {
        yield* tree(value, path);
      }
    }
  }
};
const get = (source, path) => {
  let node2 = source;
  for (const [index, key] of path.entries()) {
    node2 = node2[key];
    if (node2 == null) {
      throw new Error(`Object has no property at ${path.slice(0, index + 1).map((part) => `[${JSON.stringify(part)}]`).join("")}`);
    }
    const cid2 = CID.asCID(node2);
    if (cid2) {
      return {
        value: cid2,
        remaining: path.slice(index + 1).join("/")
      };
    }
  }
  return { value: node2 };
};
class Block$1 {
  constructor({ cid: cid2, bytes, value }) {
    if (!cid2 || !bytes || typeof value === "undefined")
      throw new Error("Missing required argument");
    this.cid = cid2;
    this.bytes = bytes;
    this.value = value;
    this.asBlock = this;
    Object.defineProperties(this, {
      cid: readonly(),
      bytes: readonly(),
      value: readonly(),
      asBlock: readonly()
    });
  }
  links() {
    return links(this.value, []);
  }
  tree() {
    return tree(this.value, []);
  }
  get(path = "/") {
    return get(this.value, path.split("/").filter(Boolean));
  }
}
const encode$2 = async ({ value, codec, hasher }) => {
  if (typeof value === "undefined")
    throw new Error('Missing required argument "value"');
  if (!codec || !hasher)
    throw new Error("Missing required argument: codec or hasher");
  const bytes = codec.encode(value);
  const hash = await hasher.digest(bytes);
  const cid2 = CID.create(1, codec.code, hash);
  return new Block$1({
    value,
    bytes,
    cid: cid2
  });
};
const decode$2 = async ({ bytes, codec, hasher }) => {
  if (!bytes)
    throw new Error('Missing required argument "bytes"');
  if (!codec || !hasher)
    throw new Error("Missing required argument: codec or hasher");
  const value = codec.decode(bytes);
  const hash = await hasher.digest(bytes);
  const cid2 = CID.create(1, codec.code, hash);
  return new Block$1({
    value,
    bytes,
    cid: cid2
  });
};
const createUnsafe = ({
  bytes,
  cid: cid2,
  value: maybeValue,
  codec
}) => {
  const value = maybeValue !== void 0 ? maybeValue : codec && codec.decode(bytes);
  if (value === void 0)
    throw new Error('Missing required argument, must either provide "value" or "codec"');
  return new Block$1({
    cid: cid2,
    bytes,
    value
  });
};
const create = async ({ bytes, cid: cid2, hasher, codec }) => {
  if (!bytes)
    throw new Error('Missing required argument "bytes"');
  if (!hasher)
    throw new Error('Missing required argument "hasher"');
  const value = codec.decode(bytes);
  const hash = await hasher.digest(bytes);
  if (!equals$1(cid2.multihash.bytes, hash.bytes)) {
    throw new Error("CID hash does not match bytes");
  }
  return createUnsafe({
    bytes,
    cid: cid2,
    value,
    codec
  });
};
var block = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  encode: encode$2,
  decode: decode$2,
  create,
  createUnsafe,
  Block: Block$1
});
var require$$0 = /* @__PURE__ */ getAugmentedNamespace(block);
var require$$1 = /* @__PURE__ */ getAugmentedNamespace(cid);
const sha = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
const sha256 = from({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
const sha512 = from({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});
const __browser$1 = true;
var sha2Browser = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  sha256,
  sha512,
  __browser: __browser$1
});
var require$$2 = /* @__PURE__ */ getAugmentedNamespace(sha2Browser);
const identity = from({
  name: "identity",
  code: 0,
  encode: (input) => coerce(input)
});
var identity$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  identity
});
var require$$3 = /* @__PURE__ */ getAugmentedNamespace(identity$1);
const alphabetSettings = (alphabet) => ({
  alphabet,
  padding: alphabet.indexOf("=") > -1,
  url: alphabet.indexOf("-") > -1 && alphabet.indexOf("_") > -1
});
var b64 = (b642) => {
  const encode2 = (input, { url, padding }) => {
    let output = b642.encode(input);
    if (url) {
      output = output.replace(/\+/g, "-").replace(/\//g, "_");
    }
    const pad2 = output.indexOf("=");
    if (pad2 > 0 && !padding) {
      output = output.substring(0, pad2);
    }
    return output;
  };
  const decode2 = (input, { alphabet }) => {
    for (const char of input) {
      if (alphabet.indexOf(char) < 0) {
        throw new Error("invalid base64 character");
      }
    }
    return b642.decode(input);
  };
  const codec = ({ name: name2, prefix, alphabet }) => withSettings({
    name: name2,
    prefix,
    settings: alphabetSettings(alphabet),
    decode: decode2,
    encode: encode2
  });
  return {
    b64: b642,
    __browser: b642.__browser,
    base64: codec({
      name: "base64",
      prefix: "m",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    }),
    base64pad: codec({
      name: "base64pad",
      prefix: "M",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }),
    base64url: codec({
      name: "base64url",
      prefix: "u",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
    }),
    base64urlpad: codec({
      name: "base64urlpad",
      prefix: "U",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_="
    })
  };
};
const { base64, base64pad, base64url, base64urlpad, __browser } = b64({
  encode: (b) => btoa(b.reduce((p, c) => p + String.fromCharCode(c), "")),
  decode: (str) => Uint8Array.from(atob(str), (c) => c.charCodeAt(0)),
  __browser: true
});
var base64Browser = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  base64,
  base64pad,
  base64url,
  base64urlpad,
  __browser
});
var require$$4 = /* @__PURE__ */ getAugmentedNamespace(base64Browser);
const typeofs = [
  "string",
  "number",
  "bigint",
  "symbol"
];
const objectTypeNames = [
  "Function",
  "Generator",
  "AsyncGenerator",
  "GeneratorFunction",
  "AsyncGeneratorFunction",
  "AsyncFunction",
  "Observable",
  "Array",
  "Buffer",
  "Object",
  "RegExp",
  "Date",
  "Error",
  "Map",
  "Set",
  "WeakMap",
  "WeakSet",
  "ArrayBuffer",
  "SharedArrayBuffer",
  "DataView",
  "Promise",
  "URL",
  "HTMLElement",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float32Array",
  "Float64Array",
  "BigInt64Array",
  "BigUint64Array"
];
function is(value) {
  if (value === null) {
    return "null";
  }
  if (value === void 0) {
    return "undefined";
  }
  if (value === true || value === false) {
    return "boolean";
  }
  const typeOf = typeof value;
  if (typeofs.includes(typeOf)) {
    return typeOf;
  }
  if (typeOf === "function") {
    return "Function";
  }
  if (Array.isArray(value)) {
    return "Array";
  }
  if (isBuffer$1(value)) {
    return "Buffer";
  }
  const objectType = getObjectType(value);
  if (objectType) {
    return objectType;
  }
  return "Object";
}
function isBuffer$1(value) {
  return value && value.constructor && value.constructor.isBuffer && value.constructor.isBuffer.call(null, value);
}
function getObjectType(value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
  if (objectTypeNames.includes(objectTypeName)) {
    return objectTypeName;
  }
  return void 0;
}
class Type {
  constructor(major, name2, terminal) {
    this.major = major;
    this.majorEncoded = major << 5;
    this.name = name2;
    this.terminal = terminal;
  }
  toString() {
    return `Type[${this.major}].${this.name}`;
  }
  compare(typ) {
    return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0;
  }
}
Type.uint = new Type(0, "uint", true);
Type.negint = new Type(1, "negint", true);
Type.bytes = new Type(2, "bytes", true);
Type.string = new Type(3, "string", true);
Type.array = new Type(4, "array", false);
Type.map = new Type(5, "map", false);
Type.tag = new Type(6, "tag", false);
Type.float = new Type(7, "float", true);
Type.false = new Type(7, "false", true);
Type.true = new Type(7, "true", true);
Type.null = new Type(7, "null", true);
Type.undefined = new Type(7, "undefined", true);
Type.break = new Type(7, "break", true);
class Token {
  constructor(type, value, encodedLength) {
    this.type = type;
    this.value = value;
    this.encodedLength = encodedLength;
    this.encodedBytes = void 0;
  }
  toString() {
    return `Token[${this.type}].${this.value}`;
  }
}
const useBuffer = globalThis.process && !globalThis.process.browser && globalThis.Buffer && typeof globalThis.Buffer.isBuffer === "function";
const textDecoder = new TextDecoder();
const textEncoder$1 = new TextEncoder();
function isBuffer(buf2) {
  return useBuffer && globalThis.Buffer.isBuffer(buf2);
}
function asU8A(buf2) {
  if (!(buf2 instanceof Uint8Array)) {
    return Uint8Array.from(buf2);
  }
  return isBuffer(buf2) ? new Uint8Array(buf2.buffer, buf2.byteOffset, buf2.byteLength) : buf2;
}
const toString = useBuffer ? (bytes, start, end) => {
  return end - start > 64 ? globalThis.Buffer.from(bytes.subarray(start, end)).toString("utf8") : utf8Slice(bytes, start, end);
} : (bytes, start, end) => {
  return end - start > 64 ? textDecoder.decode(bytes.subarray(start, end)) : utf8Slice(bytes, start, end);
};
const fromString = useBuffer ? (string2) => {
  return string2.length > 64 ? globalThis.Buffer.from(string2) : utf8ToBytes(string2);
} : (string2) => {
  return string2.length > 64 ? textEncoder$1.encode(string2) : utf8ToBytes(string2);
};
const fromArray = (arr) => {
  return Uint8Array.from(arr);
};
const slice = useBuffer ? (bytes, start, end) => {
  if (isBuffer(bytes)) {
    return new Uint8Array(bytes.subarray(start, end));
  }
  return bytes.slice(start, end);
} : (bytes, start, end) => {
  return bytes.slice(start, end);
};
const concat = useBuffer ? (chunks, length2) => {
  chunks = chunks.map((c) => c instanceof Uint8Array ? c : globalThis.Buffer.from(c));
  return asU8A(globalThis.Buffer.concat(chunks, length2));
} : (chunks, length2) => {
  const out = new Uint8Array(length2);
  let off = 0;
  for (let b of chunks) {
    if (off + b.length > out.length) {
      b = b.subarray(0, out.length - off);
    }
    out.set(b, off);
    off += b.length;
  }
  return out;
};
const alloc = useBuffer ? (size) => {
  return globalThis.Buffer.allocUnsafe(size);
} : (size) => {
  return new Uint8Array(size);
};
function compare(b1, b2) {
  if (isBuffer(b1) && isBuffer(b2)) {
    return b1.compare(b2);
  }
  for (let i = 0; i < b1.length; i++) {
    if (b1[i] === b2[i]) {
      continue;
    }
    return b1[i] < b2[i] ? -1 : 1;
  }
  return 0;
}
function utf8ToBytes(string2, units = Infinity) {
  let codePoint;
  const length2 = string2.length;
  let leadSurrogate = null;
  const bytes = [];
  for (let i = 0; i < length2; ++i) {
    codePoint = string2.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length2) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error("Invalid code point");
    }
  }
  return bytes;
}
function utf8Slice(buf2, offset, end) {
  const res = [];
  while (offset < end) {
    const firstByte = buf2[offset];
    let codePoint = null;
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (offset + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 128) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf2[offset + 1];
          if ((secondByte & 192) === 128) {
            tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
            if (tempCodePoint > 127) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf2[offset + 1];
          thirdByte = buf2[offset + 2];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
            if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf2[offset + 1];
          thirdByte = buf2[offset + 2];
          fourthByte = buf2[offset + 3];
          if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
            tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
            if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
              codePoint = tempCodePoint;
            }
          }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    offset += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  let res = "";
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}
const defaultChunkSize = 256;
class Bl {
  constructor(chunkSize = defaultChunkSize) {
    this.chunkSize = chunkSize;
    this.cursor = 0;
    this.maxCursor = -1;
    this.chunks = [];
    this._initReuseChunk = null;
  }
  reset() {
    this.chunks = [];
    this.cursor = 0;
    this.maxCursor = -1;
    if (this._initReuseChunk !== null) {
      this.chunks.push(this._initReuseChunk);
      this.maxCursor = this._initReuseChunk.length - 1;
    }
  }
  push(bytes) {
    let topChunk = this.chunks[this.chunks.length - 1];
    const newMax = this.cursor + bytes.length;
    if (newMax <= this.maxCursor + 1) {
      const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
      topChunk.set(bytes, chunkPos);
    } else {
      if (topChunk) {
        const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
        if (chunkPos < topChunk.length) {
          this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
          this.maxCursor = this.cursor - 1;
        }
      }
      if (bytes.length < 64 && bytes.length < this.chunkSize) {
        topChunk = alloc(this.chunkSize);
        this.chunks.push(topChunk);
        this.maxCursor += topChunk.length;
        if (this._initReuseChunk === null) {
          this._initReuseChunk = topChunk;
        }
        topChunk.set(bytes, 0);
      } else {
        this.chunks.push(bytes);
        this.maxCursor += bytes.length;
      }
    }
    this.cursor += bytes.length;
  }
  toBytes(reset = false) {
    let byts;
    if (this.chunks.length === 1) {
      const chunk = this.chunks[0];
      if (reset && this.cursor > chunk.length / 2) {
        byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
        this._initReuseChunk = null;
        this.chunks = [];
      } else {
        byts = slice(chunk, 0, this.cursor);
      }
    } else {
      byts = concat(this.chunks, this.cursor);
    }
    if (reset) {
      this.reset();
    }
    return byts;
  }
}
const decodeErrPrefix = "CBOR decode error:";
const encodeErrPrefix = "CBOR encode error:";
function assertEnoughData(data, pos, need) {
  if (data.length - pos < need) {
    throw new Error(`${decodeErrPrefix} not enough data for type`);
  }
}
const uintBoundaries = [
  24,
  256,
  65536,
  4294967296,
  BigInt("18446744073709551616")
];
function readUint8(data, offset, options) {
  assertEnoughData(data, offset, 1);
  const value = data[offset];
  if (options.strict === true && value < uintBoundaries[0]) {
    throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint16(data, offset, options) {
  assertEnoughData(data, offset, 2);
  const value = data[offset] << 8 | data[offset + 1];
  if (options.strict === true && value < uintBoundaries[1]) {
    throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint32(data, offset, options) {
  assertEnoughData(data, offset, 4);
  const value = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  if (options.strict === true && value < uintBoundaries[2]) {
    throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint64(data, offset, options) {
  assertEnoughData(data, offset, 8);
  const hi = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  const lo = data[offset + 4] * 16777216 + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
  const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);
  if (options.strict === true && value < uintBoundaries[3]) {
    throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`);
  }
  if (value <= Number.MAX_SAFE_INTEGER) {
    return Number(value);
  }
  if (options.allowBigInt === true) {
    return value;
  }
  throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`);
}
function decodeUint8(data, pos, _minor, options) {
  return new Token(Type.uint, readUint8(data, pos + 1, options), 2);
}
function decodeUint16(data, pos, _minor, options) {
  return new Token(Type.uint, readUint16(data, pos + 1, options), 3);
}
function decodeUint32(data, pos, _minor, options) {
  return new Token(Type.uint, readUint32(data, pos + 1, options), 5);
}
function decodeUint64(data, pos, _minor, options) {
  return new Token(Type.uint, readUint64(data, pos + 1, options), 9);
}
function encodeUint(buf2, token) {
  return encodeUintValue(buf2, 0, token.value);
}
function encodeUintValue(buf2, major, uint) {
  if (uint < uintBoundaries[0]) {
    const nuint = Number(uint);
    buf2.push([major | nuint]);
  } else if (uint < uintBoundaries[1]) {
    const nuint = Number(uint);
    buf2.push([
      major | 24,
      nuint
    ]);
  } else if (uint < uintBoundaries[2]) {
    const nuint = Number(uint);
    buf2.push([
      major | 25,
      nuint >>> 8,
      nuint & 255
    ]);
  } else if (uint < uintBoundaries[3]) {
    const nuint = Number(uint);
    buf2.push([
      major | 26,
      nuint >>> 24 & 255,
      nuint >>> 16 & 255,
      nuint >>> 8 & 255,
      nuint & 255
    ]);
  } else {
    const buint = BigInt(uint);
    if (buint < uintBoundaries[4]) {
      const set = [
        major | 27,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let lo = Number(buint & BigInt(4294967295));
      let hi = Number(buint >> BigInt(32) & BigInt(4294967295));
      set[8] = lo & 255;
      lo = lo >> 8;
      set[7] = lo & 255;
      lo = lo >> 8;
      set[6] = lo & 255;
      lo = lo >> 8;
      set[5] = lo & 255;
      set[4] = hi & 255;
      hi = hi >> 8;
      set[3] = hi & 255;
      hi = hi >> 8;
      set[2] = hi & 255;
      hi = hi >> 8;
      set[1] = hi & 255;
      buf2.push(set);
    } else {
      throw new Error(`${decodeErrPrefix} encountered BigInt larger than allowable range`);
    }
  }
}
encodeUint.encodedSize = function encodedSize(token) {
  return encodeUintValue.encodedSize(token.value);
};
encodeUintValue.encodedSize = function encodedSize2(uint) {
  if (uint < uintBoundaries[0]) {
    return 1;
  }
  if (uint < uintBoundaries[1]) {
    return 2;
  }
  if (uint < uintBoundaries[2]) {
    return 3;
  }
  if (uint < uintBoundaries[3]) {
    return 5;
  }
  return 9;
};
encodeUint.compareTokens = function compareTokens(tok1, tok2) {
  return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : 0;
};
function decodeNegint8(data, pos, _minor, options) {
  return new Token(Type.negint, -1 - readUint8(data, pos + 1, options), 2);
}
function decodeNegint16(data, pos, _minor, options) {
  return new Token(Type.negint, -1 - readUint16(data, pos + 1, options), 3);
}
function decodeNegint32(data, pos, _minor, options) {
  return new Token(Type.negint, -1 - readUint32(data, pos + 1, options), 5);
}
const neg1b = BigInt(-1);
const pos1b = BigInt(1);
function decodeNegint64(data, pos, _minor, options) {
  const int2 = readUint64(data, pos + 1, options);
  if (typeof int2 !== "bigint") {
    const value = -1 - int2;
    if (value >= Number.MIN_SAFE_INTEGER) {
      return new Token(Type.negint, value, 9);
    }
  }
  if (options.allowBigInt !== true) {
    throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`);
  }
  return new Token(Type.negint, neg1b - BigInt(int2), 9);
}
function encodeNegint(buf2, token) {
  const negint = token.value;
  const unsigned = typeof negint === "bigint" ? negint * neg1b - pos1b : negint * -1 - 1;
  encodeUintValue(buf2, token.type.majorEncoded, unsigned);
}
encodeNegint.encodedSize = function encodedSize3(token) {
  const negint = token.value;
  const unsigned = typeof negint === "bigint" ? negint * neg1b - pos1b : negint * -1 - 1;
  if (unsigned < uintBoundaries[0]) {
    return 1;
  }
  if (unsigned < uintBoundaries[1]) {
    return 2;
  }
  if (unsigned < uintBoundaries[2]) {
    return 3;
  }
  if (unsigned < uintBoundaries[3]) {
    return 5;
  }
  return 9;
};
encodeNegint.compareTokens = function compareTokens2(tok1, tok2) {
  return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : 0;
};
function toToken$3(data, pos, prefix, length2) {
  assertEnoughData(data, pos, prefix + length2);
  const buf2 = slice(data, pos + prefix, pos + prefix + length2);
  return new Token(Type.bytes, buf2, prefix + length2);
}
function decodeBytesCompact(data, pos, minor, _options) {
  return toToken$3(data, pos, 1, minor);
}
function decodeBytes8(data, pos, _minor, options) {
  return toToken$3(data, pos, 2, readUint8(data, pos + 1, options));
}
function decodeBytes16(data, pos, _minor, options) {
  return toToken$3(data, pos, 3, readUint16(data, pos + 1, options));
}
function decodeBytes32(data, pos, _minor, options) {
  return toToken$3(data, pos, 5, readUint32(data, pos + 1, options));
}
function decodeBytes64(data, pos, _minor, options) {
  const l = readUint64(data, pos + 1, options);
  if (typeof l === "bigint") {
    throw new Error(`${decodeErrPrefix} 64-bit integer bytes lengths not supported`);
  }
  return toToken$3(data, pos, 9, l);
}
function tokenBytes(token) {
  if (token.encodedBytes === void 0) {
    token.encodedBytes = token.type === Type.string ? fromString(token.value) : token.value;
  }
  return token.encodedBytes;
}
function encodeBytes(buf2, token) {
  const bytes = tokenBytes(token);
  encodeUintValue(buf2, token.type.majorEncoded, bytes.length);
  buf2.push(bytes);
}
encodeBytes.encodedSize = function encodedSize4(token) {
  const bytes = tokenBytes(token);
  return encodeUintValue.encodedSize(bytes.length) + bytes.length;
};
encodeBytes.compareTokens = function compareTokens3(tok1, tok2) {
  return compareBytes(tokenBytes(tok1), tokenBytes(tok2));
};
function compareBytes(b1, b2) {
  return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : compare(b1, b2);
}
function toToken$2(data, pos, prefix, length2) {
  const totLength = prefix + length2;
  assertEnoughData(data, pos, totLength);
  return new Token(Type.string, toString(data, pos + prefix, pos + totLength), totLength);
}
function decodeStringCompact(data, pos, minor, _options) {
  return toToken$2(data, pos, 1, minor);
}
function decodeString8(data, pos, _minor, options) {
  return toToken$2(data, pos, 2, readUint8(data, pos + 1, options));
}
function decodeString16(data, pos, _minor, options) {
  return toToken$2(data, pos, 3, readUint16(data, pos + 1, options));
}
function decodeString32(data, pos, _minor, options) {
  return toToken$2(data, pos, 5, readUint32(data, pos + 1, options));
}
function decodeString64(data, pos, _minor, options) {
  const l = readUint64(data, pos + 1, options);
  if (typeof l === "bigint") {
    throw new Error(`${decodeErrPrefix} 64-bit integer string lengths not supported`);
  }
  return toToken$2(data, pos, 9, l);
}
const encodeString = encodeBytes;
function toToken$1(_data, _pos, prefix, length2) {
  return new Token(Type.array, length2, prefix);
}
function decodeArrayCompact(data, pos, minor, _options) {
  return toToken$1(data, pos, 1, minor);
}
function decodeArray8(data, pos, _minor, options) {
  return toToken$1(data, pos, 2, readUint8(data, pos + 1, options));
}
function decodeArray16(data, pos, _minor, options) {
  return toToken$1(data, pos, 3, readUint16(data, pos + 1, options));
}
function decodeArray32(data, pos, _minor, options) {
  return toToken$1(data, pos, 5, readUint32(data, pos + 1, options));
}
function decodeArray64(data, pos, _minor, options) {
  const l = readUint64(data, pos + 1, options);
  if (typeof l === "bigint") {
    throw new Error(`${decodeErrPrefix} 64-bit integer array lengths not supported`);
  }
  return toToken$1(data, pos, 9, l);
}
function decodeArrayIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
  }
  return toToken$1(data, pos, 1, Infinity);
}
function encodeArray(buf2, token) {
  encodeUintValue(buf2, Type.array.majorEncoded, token.value);
}
encodeArray.compareTokens = encodeUint.compareTokens;
function toToken(_data, _pos, prefix, length2) {
  return new Token(Type.map, length2, prefix);
}
function decodeMapCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeMap8(data, pos, _minor, options) {
  return toToken(data, pos, 2, readUint8(data, pos + 1, options));
}
function decodeMap16(data, pos, _minor, options) {
  return toToken(data, pos, 3, readUint16(data, pos + 1, options));
}
function decodeMap32(data, pos, _minor, options) {
  return toToken(data, pos, 5, readUint32(data, pos + 1, options));
}
function decodeMap64(data, pos, _minor, options) {
  const l = readUint64(data, pos + 1, options);
  if (typeof l === "bigint") {
    throw new Error(`${decodeErrPrefix} 64-bit integer map lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function decodeMapIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
  }
  return toToken(data, pos, 1, Infinity);
}
function encodeMap(buf2, token) {
  encodeUintValue(buf2, Type.map.majorEncoded, token.value);
}
encodeMap.compareTokens = encodeUint.compareTokens;
function decodeTagCompact(_data, _pos, minor, _options) {
  return new Token(Type.tag, minor, 1);
}
function decodeTag8(data, pos, _minor, options) {
  return new Token(Type.tag, readUint8(data, pos + 1, options), 2);
}
function decodeTag16(data, pos, _minor, options) {
  return new Token(Type.tag, readUint16(data, pos + 1, options), 3);
}
function decodeTag32(data, pos, _minor, options) {
  return new Token(Type.tag, readUint32(data, pos + 1, options), 5);
}
function decodeTag64(data, pos, _minor, options) {
  return new Token(Type.tag, readUint64(data, pos + 1, options), 9);
}
function encodeTag(buf2, token) {
  encodeUintValue(buf2, Type.tag.majorEncoded, token.value);
}
encodeTag.compareTokens = encodeUint.compareTokens;
const MINOR_FALSE = 20;
const MINOR_TRUE = 21;
const MINOR_NULL = 22;
const MINOR_UNDEFINED = 23;
function decodeUndefined(_data, _pos, _minor, options) {
  if (options.allowUndefined === false) {
    throw new Error(`${decodeErrPrefix} undefined values are not supported`);
  } else if (options.coerceUndefinedToNull === true) {
    return new Token(Type.null, null, 1);
  }
  return new Token(Type.undefined, void 0, 1);
}
function decodeBreak(_data, _pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${decodeErrPrefix} indefinite length items not allowed`);
  }
  return new Token(Type.break, void 0, 1);
}
function createToken(value, bytes, options) {
  if (options) {
    if (options.allowNaN === false && Number.isNaN(value)) {
      throw new Error(`${decodeErrPrefix} NaN values are not supported`);
    }
    if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) {
      throw new Error(`${decodeErrPrefix} Infinity values are not supported`);
    }
  }
  return new Token(Type.float, value, bytes);
}
function decodeFloat16(data, pos, _minor, options) {
  return createToken(readFloat16(data, pos + 1), 3, options);
}
function decodeFloat32(data, pos, _minor, options) {
  return createToken(readFloat32(data, pos + 1), 5, options);
}
function decodeFloat64(data, pos, _minor, options) {
  return createToken(readFloat64(data, pos + 1), 9, options);
}
function encodeFloat(buf2, token, options) {
  const float = token.value;
  if (float === false) {
    buf2.push([Type.float.majorEncoded | MINOR_FALSE]);
  } else if (float === true) {
    buf2.push([Type.float.majorEncoded | MINOR_TRUE]);
  } else if (float === null) {
    buf2.push([Type.float.majorEncoded | MINOR_NULL]);
  } else if (float === void 0) {
    buf2.push([Type.float.majorEncoded | MINOR_UNDEFINED]);
  } else {
    let decoded;
    let success = false;
    if (!options || options.float64 !== true) {
      encodeFloat16(float);
      decoded = readFloat16(ui8a, 1);
      if (float === decoded || Number.isNaN(float)) {
        ui8a[0] = 249;
        buf2.push(ui8a.slice(0, 3));
        success = true;
      } else {
        encodeFloat32(float);
        decoded = readFloat32(ui8a, 1);
        if (float === decoded) {
          ui8a[0] = 250;
          buf2.push(ui8a.slice(0, 5));
          success = true;
        }
      }
    }
    if (!success) {
      encodeFloat64(float);
      decoded = readFloat64(ui8a, 1);
      ui8a[0] = 251;
      buf2.push(ui8a.slice(0, 9));
    }
  }
}
encodeFloat.encodedSize = function encodedSize5(token, options) {
  const float = token.value;
  if (float === false || float === true || float === null || float === void 0) {
    return 1;
  }
  let decoded;
  if (!options || options.float64 !== true) {
    encodeFloat16(float);
    decoded = readFloat16(ui8a, 1);
    if (float === decoded || Number.isNaN(float)) {
      return 3;
    }
    encodeFloat32(float);
    decoded = readFloat32(ui8a, 1);
    if (float === decoded) {
      return 5;
    }
  }
  return 9;
};
const buffer = new ArrayBuffer(9);
const dataView = new DataView(buffer, 1);
const ui8a = new Uint8Array(buffer, 0);
function encodeFloat16(inp) {
  if (inp === Infinity) {
    dataView.setUint16(0, 31744, false);
  } else if (inp === -Infinity) {
    dataView.setUint16(0, 64512, false);
  } else if (Number.isNaN(inp)) {
    dataView.setUint16(0, 32256, false);
  } else {
    dataView.setFloat32(0, inp);
    const valu32 = dataView.getUint32(0);
    const exponent = (valu32 & 2139095040) >> 23;
    const mantissa = valu32 & 8388607;
    if (exponent === 255) {
      dataView.setUint16(0, 31744, false);
    } else if (exponent === 0) {
      dataView.setUint16(0, (inp & 2147483648) >> 16 | mantissa >> 13, false);
    } else {
      const logicalExponent = exponent - 127;
      if (logicalExponent < -24) {
        dataView.setUint16(0, 0);
      } else if (logicalExponent < -14) {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | 1 << 24 + logicalExponent, false);
      } else {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | logicalExponent + 15 << 10 | mantissa >> 13, false);
      }
    }
  }
}
function readFloat16(ui8a2, pos) {
  if (ui8a2.length - pos < 2) {
    throw new Error(`${decodeErrPrefix} not enough data for float16`);
  }
  const half = (ui8a2[pos] << 8) + ui8a2[pos + 1];
  if (half === 31744) {
    return Infinity;
  }
  if (half === 64512) {
    return -Infinity;
  }
  if (half === 32256) {
    return NaN;
  }
  const exp = half >> 10 & 31;
  const mant = half & 1023;
  let val;
  if (exp === 0) {
    val = mant * 2 ** -24;
  } else if (exp !== 31) {
    val = (mant + 1024) * 2 ** (exp - 25);
  } else {
    val = mant === 0 ? Infinity : NaN;
  }
  return half & 32768 ? -val : val;
}
function encodeFloat32(inp) {
  dataView.setFloat32(0, inp, false);
}
function readFloat32(ui8a2, pos) {
  if (ui8a2.length - pos < 4) {
    throw new Error(`${decodeErrPrefix} not enough data for float32`);
  }
  const offset = (ui8a2.byteOffset || 0) + pos;
  return new DataView(ui8a2.buffer, offset, 4).getFloat32(0, false);
}
function encodeFloat64(inp) {
  dataView.setFloat64(0, inp, false);
}
function readFloat64(ui8a2, pos) {
  if (ui8a2.length - pos < 8) {
    throw new Error(`${decodeErrPrefix} not enough data for float64`);
  }
  const offset = (ui8a2.byteOffset || 0) + pos;
  return new DataView(ui8a2.buffer, offset, 8).getFloat64(0, false);
}
encodeFloat.compareTokens = encodeUint.compareTokens;
function invalidMinor(data, pos, minor) {
  throw new Error(`${decodeErrPrefix} encountered invalid minor (${minor}) for major ${data[pos] >>> 5}`);
}
function errorer(msg) {
  return () => {
    throw new Error(`${decodeErrPrefix} ${msg}`);
  };
}
const jump = [];
for (let i = 0; i <= 23; i++) {
  jump[i] = invalidMinor;
}
jump[24] = decodeUint8;
jump[25] = decodeUint16;
jump[26] = decodeUint32;
jump[27] = decodeUint64;
jump[28] = invalidMinor;
jump[29] = invalidMinor;
jump[30] = invalidMinor;
jump[31] = invalidMinor;
for (let i = 32; i <= 55; i++) {
  jump[i] = invalidMinor;
}
jump[56] = decodeNegint8;
jump[57] = decodeNegint16;
jump[58] = decodeNegint32;
jump[59] = decodeNegint64;
jump[60] = invalidMinor;
jump[61] = invalidMinor;
jump[62] = invalidMinor;
jump[63] = invalidMinor;
for (let i = 64; i <= 87; i++) {
  jump[i] = decodeBytesCompact;
}
jump[88] = decodeBytes8;
jump[89] = decodeBytes16;
jump[90] = decodeBytes32;
jump[91] = decodeBytes64;
jump[92] = invalidMinor;
jump[93] = invalidMinor;
jump[94] = invalidMinor;
jump[95] = errorer("indefinite length bytes/strings are not supported");
for (let i = 96; i <= 119; i++) {
  jump[i] = decodeStringCompact;
}
jump[120] = decodeString8;
jump[121] = decodeString16;
jump[122] = decodeString32;
jump[123] = decodeString64;
jump[124] = invalidMinor;
jump[125] = invalidMinor;
jump[126] = invalidMinor;
jump[127] = errorer("indefinite length bytes/strings are not supported");
for (let i = 128; i <= 151; i++) {
  jump[i] = decodeArrayCompact;
}
jump[152] = decodeArray8;
jump[153] = decodeArray16;
jump[154] = decodeArray32;
jump[155] = decodeArray64;
jump[156] = invalidMinor;
jump[157] = invalidMinor;
jump[158] = invalidMinor;
jump[159] = decodeArrayIndefinite;
for (let i = 160; i <= 183; i++) {
  jump[i] = decodeMapCompact;
}
jump[184] = decodeMap8;
jump[185] = decodeMap16;
jump[186] = decodeMap32;
jump[187] = decodeMap64;
jump[188] = invalidMinor;
jump[189] = invalidMinor;
jump[190] = invalidMinor;
jump[191] = decodeMapIndefinite;
for (let i = 192; i <= 215; i++) {
  jump[i] = decodeTagCompact;
}
jump[216] = decodeTag8;
jump[217] = decodeTag16;
jump[218] = decodeTag32;
jump[219] = decodeTag64;
jump[220] = invalidMinor;
jump[221] = invalidMinor;
jump[222] = invalidMinor;
jump[223] = invalidMinor;
for (let i = 224; i <= 243; i++) {
  jump[i] = errorer("simple values are not supported");
}
jump[244] = invalidMinor;
jump[245] = invalidMinor;
jump[246] = invalidMinor;
jump[247] = decodeUndefined;
jump[248] = errorer("simple values are not supported");
jump[249] = decodeFloat16;
jump[250] = decodeFloat32;
jump[251] = decodeFloat64;
jump[252] = invalidMinor;
jump[253] = invalidMinor;
jump[254] = invalidMinor;
jump[255] = decodeBreak;
const quick = [];
for (let i = 0; i < 24; i++) {
  quick[i] = new Token(Type.uint, i, 1);
}
for (let i = -1; i >= -24; i--) {
  quick[31 - i] = new Token(Type.negint, i, 1);
}
quick[64] = new Token(Type.bytes, new Uint8Array(0), 1);
quick[96] = new Token(Type.string, "", 1);
quick[128] = new Token(Type.array, 0, 1);
quick[160] = new Token(Type.map, 0, 1);
quick[244] = new Token(Type.false, false, 1);
quick[245] = new Token(Type.true, true, 1);
quick[246] = new Token(Type.null, null, 1);
function quickEncodeToken(token) {
  switch (token.type) {
    case Type.false:
      return fromArray([244]);
    case Type.true:
      return fromArray([245]);
    case Type.null:
      return fromArray([246]);
    case Type.bytes:
      if (!token.value.length) {
        return fromArray([64]);
      }
      return;
    case Type.string:
      if (token.value === "") {
        return fromArray([96]);
      }
      return;
    case Type.array:
      if (token.value === 0) {
        return fromArray([128]);
      }
      return;
    case Type.map:
      if (token.value === 0) {
        return fromArray([160]);
      }
      return;
    case Type.uint:
      if (token.value < 24) {
        return fromArray([Number(token.value)]);
      }
      return;
    case Type.negint:
      if (token.value >= -24) {
        return fromArray([31 - Number(token.value)]);
      }
  }
}
const defaultEncodeOptions = {
  float64: false,
  mapSorter,
  quickEncodeToken
};
const cborEncoders = [];
cborEncoders[Type.uint.major] = encodeUint;
cborEncoders[Type.negint.major] = encodeNegint;
cborEncoders[Type.bytes.major] = encodeBytes;
cborEncoders[Type.string.major] = encodeString;
cborEncoders[Type.array.major] = encodeArray;
cborEncoders[Type.map.major] = encodeMap;
cborEncoders[Type.tag.major] = encodeTag;
cborEncoders[Type.float.major] = encodeFloat;
const buf = new Bl();
class Ref {
  constructor(obj, parent) {
    this.obj = obj;
    this.parent = parent;
  }
  includes(obj) {
    let p = this;
    do {
      if (p.obj === obj) {
        return true;
      }
    } while (p = p.parent);
    return false;
  }
  static createCheck(stack, obj) {
    if (stack && stack.includes(obj)) {
      throw new Error(`${encodeErrPrefix} object contains circular references`);
    }
    return new Ref(obj, stack);
  }
}
const simpleTokens = {
  null: new Token(Type.null, null),
  undefined: new Token(Type.undefined, void 0),
  true: new Token(Type.true, true),
  false: new Token(Type.false, false),
  emptyArray: new Token(Type.array, 0),
  emptyMap: new Token(Type.map, 0)
};
const typeEncoders = {
  number(obj, _typ, _options, _refStack) {
    if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) {
      return new Token(Type.float, obj);
    } else if (obj >= 0) {
      return new Token(Type.uint, obj);
    } else {
      return new Token(Type.negint, obj);
    }
  },
  bigint(obj, _typ, _options, _refStack) {
    if (obj >= BigInt(0)) {
      return new Token(Type.uint, obj);
    } else {
      return new Token(Type.negint, obj);
    }
  },
  Uint8Array(obj, _typ, _options, _refStack) {
    return new Token(Type.bytes, obj);
  },
  string(obj, _typ, _options, _refStack) {
    return new Token(Type.string, obj);
  },
  boolean(obj, _typ, _options, _refStack) {
    return obj ? simpleTokens.true : simpleTokens.false;
  },
  null(_obj, _typ, _options, _refStack) {
    return simpleTokens.null;
  },
  undefined(_obj, _typ, _options, _refStack) {
    return simpleTokens.undefined;
  },
  ArrayBuffer(obj, _typ, _options, _refStack) {
    return new Token(Type.bytes, new Uint8Array(obj));
  },
  DataView(obj, _typ, _options, _refStack) {
    return new Token(Type.bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
  },
  Array(obj, _typ, options, refStack) {
    if (!obj.length) {
      if (options.addBreakTokens === true) {
        return [
          simpleTokens.emptyArray,
          new Token(Type.break)
        ];
      }
      return simpleTokens.emptyArray;
    }
    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;
    for (const e of obj) {
      entries[i++] = objectToTokens(e, options, refStack);
    }
    if (options.addBreakTokens) {
      return [
        new Token(Type.array, obj.length),
        entries,
        new Token(Type.break)
      ];
    }
    return [
      new Token(Type.array, obj.length),
      entries
    ];
  },
  Object(obj, typ, options, refStack) {
    const isMap = typ !== "Object";
    const keys = isMap ? obj.keys() : Object.keys(obj);
    const length2 = isMap ? obj.size : keys.length;
    if (!length2) {
      if (options.addBreakTokens === true) {
        return [
          simpleTokens.emptyMap,
          new Token(Type.break)
        ];
      }
      return simpleTokens.emptyMap;
    }
    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;
    for (const key of keys) {
      entries[i++] = [
        objectToTokens(key, options, refStack),
        objectToTokens(isMap ? obj.get(key) : obj[key], options, refStack)
      ];
    }
    sortMapEntries(entries, options);
    if (options.addBreakTokens) {
      return [
        new Token(Type.map, length2),
        entries,
        new Token(Type.break)
      ];
    }
    return [
      new Token(Type.map, length2),
      entries
    ];
  }
};
typeEncoders.Map = typeEncoders.Object;
typeEncoders.Buffer = typeEncoders.Uint8Array;
for (const typ of "Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64".split(" ")) {
  typeEncoders[`${typ}Array`] = typeEncoders.DataView;
}
function objectToTokens(obj, options = {}, refStack) {
  const typ = is(obj);
  const customTypeEncoder = options && options.typeEncoders && options.typeEncoders[typ] || typeEncoders[typ];
  if (typeof customTypeEncoder === "function") {
    const tokens = customTypeEncoder(obj, typ, options, refStack);
    if (tokens != null) {
      return tokens;
    }
  }
  const typeEncoder = typeEncoders[typ];
  if (!typeEncoder) {
    throw new Error(`${encodeErrPrefix} unsupported type: ${typ}`);
  }
  return typeEncoder(obj, typ, options, refStack);
}
function sortMapEntries(entries, options) {
  if (options.mapSorter) {
    entries.sort(options.mapSorter);
  }
}
function mapSorter(e1, e2) {
  const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
  const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];
  if (keyToken1.type !== keyToken2.type) {
    return keyToken1.type.compare(keyToken2.type);
  }
  const major = keyToken1.type.major;
  const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);
  if (tcmp === 0) {
    console.warn("WARNING: complex key types used, CBOR key sorting guarantees are gone");
  }
  return tcmp;
}
function tokensToEncoded(buf2, tokens, encoders, options) {
  if (Array.isArray(tokens)) {
    for (const token of tokens) {
      tokensToEncoded(buf2, token, encoders, options);
    }
  } else {
    encoders[tokens.type.major](buf2, tokens, options);
  }
}
function encodeCustom(data, encoders, options) {
  const tokens = objectToTokens(data, options);
  if (!Array.isArray(tokens) && options.quickEncodeToken) {
    const quickBytes = options.quickEncodeToken(tokens);
    if (quickBytes) {
      return quickBytes;
    }
    const encoder = encoders[tokens.type.major];
    if (encoder.encodedSize) {
      const size = encoder.encodedSize(tokens, options);
      const buf2 = new Bl(size);
      encoder(buf2, tokens, options);
      if (buf2.chunks.length !== 1) {
        throw new Error(`Unexpected error: pre-calculated length for ${tokens} was wrong`);
      }
      return asU8A(buf2.chunks[0]);
    }
  }
  tokensToEncoded(buf, tokens, encoders, options);
  return buf.toBytes(true);
}
function encode$1(data, options) {
  options = Object.assign({}, defaultEncodeOptions, options);
  return encodeCustom(data, cborEncoders, options);
}
const defaultDecodeOptions = {
  strict: false,
  allowIndefinite: true,
  allowUndefined: true,
  allowBigInt: true
};
class Tokeniser {
  constructor(data, options = {}) {
    this.pos = 0;
    this.data = data;
    this.options = options;
  }
  done() {
    return this.pos >= this.data.length;
  }
  next() {
    const byt = this.data[this.pos];
    let token = quick[byt];
    if (token === void 0) {
      const decoder = jump[byt];
      if (!decoder) {
        throw new Error(`${decodeErrPrefix} no decoder for major type ${byt >>> 5} (byte 0x${byt.toString(16).padStart(2, "0")})`);
      }
      const minor = byt & 31;
      token = decoder(this.data, this.pos, minor, this.options);
    }
    this.pos += token.encodedLength;
    return token;
  }
}
const DONE = Symbol.for("DONE");
const BREAK = Symbol.for("BREAK");
function tokenToArray(token, tokeniser, options) {
  const arr = [];
  for (let i = 0; i < token.value; i++) {
    const value = tokensToObject(tokeniser, options);
    if (value === BREAK) {
      if (token.value === Infinity) {
        break;
      }
      throw new Error(`${decodeErrPrefix} got unexpected break to lengthed array`);
    }
    if (value === DONE) {
      throw new Error(`${decodeErrPrefix} found array but not enough entries (got ${i}, expected ${token.value})`);
    }
    arr[i] = value;
  }
  return arr;
}
function tokenToMap(token, tokeniser, options) {
  const useMaps = options.useMaps === true;
  const obj = useMaps ? void 0 : {};
  const m = useMaps ? /* @__PURE__ */ new Map() : void 0;
  for (let i = 0; i < token.value; i++) {
    const key = tokensToObject(tokeniser, options);
    if (key === BREAK) {
      if (token.value === Infinity) {
        break;
      }
      throw new Error(`${decodeErrPrefix} got unexpected break to lengthed map`);
    }
    if (key === DONE) {
      throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no key], expected ${token.value})`);
    }
    if (useMaps !== true && typeof key !== "string") {
      throw new Error(`${decodeErrPrefix} non-string keys not supported (got ${typeof key})`);
    }
    const value = tokensToObject(tokeniser, options);
    if (value === DONE) {
      throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no value], expected ${token.value})`);
    }
    if (useMaps) {
      m.set(key, value);
    } else {
      obj[key] = value;
    }
  }
  return useMaps ? m : obj;
}
function tokensToObject(tokeniser, options) {
  if (tokeniser.done()) {
    return DONE;
  }
  const token = tokeniser.next();
  if (token.type === Type.break) {
    return BREAK;
  }
  if (token.type.terminal) {
    return token.value;
  }
  if (token.type === Type.array) {
    return tokenToArray(token, tokeniser, options);
  }
  if (token.type === Type.map) {
    return tokenToMap(token, tokeniser, options);
  }
  if (token.type === Type.tag) {
    if (options.tags && typeof options.tags[token.value] === "function") {
      const tagged = tokensToObject(tokeniser, options);
      return options.tags[token.value](tagged);
    }
    throw new Error(`${decodeErrPrefix} tag not supported (${token.value})`);
  }
  throw new Error("unsupported");
}
function decode$1(data, options) {
  if (!(data instanceof Uint8Array)) {
    throw new Error(`${decodeErrPrefix} data to decode must be a Uint8Array`);
  }
  options = Object.assign({}, defaultDecodeOptions, options);
  const tokeniser = options.tokenizer || new Tokeniser(data, options);
  const decoded = tokensToObject(tokeniser, options);
  if (decoded === DONE) {
    throw new Error(`${decodeErrPrefix} did not find any content to decode`);
  }
  if (decoded === BREAK) {
    throw new Error(`${decodeErrPrefix} got unexpected break`);
  }
  if (!tokeniser.done()) {
    throw new Error(`${decodeErrPrefix} too many terminals, data makes no sense`);
  }
  return decoded;
}
const CID_CBOR_TAG = 42;
function cidEncoder(obj) {
  if (obj.asCID !== obj) {
    return null;
  }
  const cid2 = CID.asCID(obj);
  if (!cid2) {
    return null;
  }
  const bytes = new Uint8Array(cid2.bytes.byteLength + 1);
  bytes.set(cid2.bytes, 1);
  return [
    new Token(Type.tag, CID_CBOR_TAG),
    new Token(Type.bytes, bytes)
  ];
}
function undefinedEncoder() {
  throw new Error("`undefined` is not supported by the IPLD Data Model and cannot be encoded");
}
function numberEncoder(num) {
  if (Number.isNaN(num)) {
    throw new Error("`NaN` is not supported by the IPLD Data Model and cannot be encoded");
  }
  if (num === Infinity || num === -Infinity) {
    throw new Error("`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded");
  }
  return null;
}
const encodeOptions = {
  float64: true,
  typeEncoders: {
    Object: cidEncoder,
    undefined: undefinedEncoder,
    number: numberEncoder
  }
};
function cidDecoder(bytes) {
  if (bytes[0] !== 0) {
    throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
  }
  return CID.decode(bytes.subarray(1));
}
const decodeOptions = {
  allowIndefinite: false,
  allowUndefined: false,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true,
  strict: true,
  useMaps: false,
  tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = "dag-cbor";
const code$1 = 113;
const encode = (node2) => encode$1(node2, encodeOptions);
const decode = (data) => decode$1(data, decodeOptions);
var esm = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  name,
  code: code$1,
  encode,
  decode
});
var require$$5 = /* @__PURE__ */ getAugmentedNamespace(esm);
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() {
    return m[k];
  } });
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(lib, "__esModule", { value: true });
var decodeCleartext_1 = lib.decodeCleartext = prepareCleartext_1 = lib.prepareCleartext = lib.decodeIdentityCID = lib.encodeIdentityCID = lib.toJWSStrings = lib.toJWSPayload = lib.encodePayload = void 0;
const Block = __importStar(require$$0);
const cid_1 = require$$1;
const sha2_1 = require$$2;
const identity_1 = require$$3;
const base64_1 = require$$4;
const dagCBOR = __importStar(require$$5);
const ENC_BLOCK_SIZE = 24;
function encodePayload(payload) {
  return __awaiter(this, void 0, void 0, function* () {
    const block2 = yield Block.encode({ value: payload, codec: dagCBOR, hasher: sha2_1.sha256 });
    return {
      cid: block2.cid,
      linkedBlock: block2.bytes
    };
  });
}
lib.encodePayload = encodePayload;
function toJWSPayload(payload) {
  let cid2 = cid_1.CID.asCID(payload);
  if (!cid2) {
    cid2 = cid_1.CID.asCID(payload.cid);
  }
  if (!cid2) {
    throw new Error("Payload must be an EncodedPayload or a CID");
  }
  return base64_1.base64url.encode(cid2.bytes).slice(1);
}
lib.toJWSPayload = toJWSPayload;
function toJWSStrings(jose) {
  if (typeof jose === "object" && typeof jose.payload === "string" && Array.isArray(jose.signatures)) {
    return jose.signatures.map((signature) => {
      if (typeof signature !== "object" || typeof signature.protected !== "string" || typeof signature.signature !== "string") {
        throw new Error("Object must be a DagJWS");
      }
      return `${signature.protected}.${jose.payload}.${signature.signature}`;
    }, []);
  }
  throw new Error("Object must be a DagJWS");
}
lib.toJWSStrings = toJWSStrings;
function pad(b, blockSize = ENC_BLOCK_SIZE) {
  const padLen = (blockSize - b.length % blockSize) % blockSize;
  const bytes = new Uint8Array(b.length + padLen);
  bytes.set(b, 0);
  return bytes;
}
function encodeIdentityCID(obj) {
  return __awaiter(this, void 0, void 0, function* () {
    const block2 = yield Block.encode({ value: obj, codec: dagCBOR, hasher: identity_1.identity });
    return block2.cid;
  });
}
lib.encodeIdentityCID = encodeIdentityCID;
function decodeIdentityCID(cid2) {
  cid2 = cid_1.CID.asCID(cid2);
  if (cid2.code !== dagCBOR.code)
    throw new Error("CID codec must be dag-cbor");
  if (cid2.multihash.code !== identity_1.identity.code)
    throw new Error("CID must use identity multihash");
  return dagCBOR.decode(cid2.multihash.digest);
}
lib.decodeIdentityCID = decodeIdentityCID;
function prepareCleartext(cleartext, blockSize) {
  return __awaiter(this, void 0, void 0, function* () {
    return pad((yield encodeIdentityCID(cleartext)).bytes, blockSize);
  });
}
var prepareCleartext_1 = lib.prepareCleartext = prepareCleartext;
function decodeCleartext(b) {
  return decodeIdentityCID(cid_1.CID.decodeFirst(b)[0]);
}
decodeCleartext_1 = lib.decodeCleartext = decodeCleartext;
class JSONEncoder extends Array {
  constructor() {
    super();
    this.inRecursive = [];
  }
  prefix(buf2) {
    const recurs = this.inRecursive[this.inRecursive.length - 1];
    if (recurs) {
      if (recurs.type === Type.array) {
        recurs.elements++;
        if (recurs.elements !== 1) {
          buf2.push([44]);
        }
      }
      if (recurs.type === Type.map) {
        recurs.elements++;
        if (recurs.elements !== 1) {
          if (recurs.elements % 2 === 1) {
            buf2.push([44]);
          } else {
            buf2.push([58]);
          }
        }
      }
    }
  }
  [Type.uint.major](buf2, token) {
    this.prefix(buf2);
    const is2 = String(token.value);
    const isa = [];
    for (let i = 0; i < is2.length; i++) {
      isa[i] = is2.charCodeAt(i);
    }
    buf2.push(isa);
  }
  [Type.negint.major](buf2, token) {
    this[Type.uint.major](buf2, token);
  }
  [Type.bytes.major](_buf, _token) {
    throw new Error(`${encodeErrPrefix} unsupported type: Uint8Array`);
  }
  [Type.string.major](buf2, token) {
    this.prefix(buf2);
    const byts = fromString(JSON.stringify(token.value));
    buf2.push(byts.length > 32 ? asU8A(byts) : byts);
  }
  [Type.array.major](buf2, _token) {
    this.prefix(buf2);
    this.inRecursive.push({
      type: Type.array,
      elements: 0
    });
    buf2.push([91]);
  }
  [Type.map.major](buf2, _token) {
    this.prefix(buf2);
    this.inRecursive.push({
      type: Type.map,
      elements: 0
    });
    buf2.push([123]);
  }
  [Type.tag.major](_buf, _token) {
  }
  [Type.float.major](buf2, token) {
    if (token.type.name === "break") {
      const recurs = this.inRecursive.pop();
      if (recurs) {
        if (recurs.type === Type.array) {
          buf2.push([93]);
        } else if (recurs.type === Type.map) {
          buf2.push([125]);
        } else {
          throw new Error("Unexpected recursive type; this should not happen!");
        }
        return;
      }
      throw new Error("Unexpected break; this should not happen!");
    }
    if (token.value === void 0) {
      throw new Error(`${encodeErrPrefix} unsupported type: undefined`);
    }
    this.prefix(buf2);
    if (token.type.name === "true") {
      buf2.push([
        116,
        114,
        117,
        101
      ]);
      return;
    } else if (token.type.name === "false") {
      buf2.push([
        102,
        97,
        108,
        115,
        101
      ]);
      return;
    } else if (token.type.name === "null") {
      buf2.push([
        110,
        117,
        108,
        108
      ]);
      return;
    }
    const is2 = String(token.value);
    const isa = [];
    let dp = false;
    for (let i = 0; i < is2.length; i++) {
      isa[i] = is2.charCodeAt(i);
      if (!dp && (isa[i] === 46 || isa[i] === 101 || isa[i] === 69)) {
        dp = true;
      }
    }
    if (!dp) {
      isa.push(46);
      isa.push(48);
    }
    buf2.push(isa);
  }
}
const code = 297;
const textEncoder = new TextEncoder();
new TextDecoder();
const REKEYS = "reKeys";
class DagJoseCryptor {
  constructor(ipfs, proxcryptor, cid2) {
    this.storeDAGEncrypted = async (payload, key) => {
      const jwe = await this.makeJWE(payload, key);
      const cid3 = await this.ipfs.dag.put(jwe, {
        hashAlg: "sha2-256"
      });
      return cid3;
    };
    this.storeIPFSEncrypted = async (payload, key) => {
      const jwe = await this.makeJWE(payload, key);
      const res = await this.ipfs.add(JSON.stringify(jwe), {
        cidVersion: 1,
        pin: true
      });
      return res.cid;
    };
    this.makeJWE = async (payload, key) => {
      const dirEncrypter = xc20pDirEncrypter(key);
      const cleartext = await prepareCleartext_1(payload);
      const jwe = await createJWE(cleartext, [dirEncrypter]);
      return jwe;
    };
    this.loadEncrypted = async (cid3, key) => {
      const dirDecrypter = xc20pDirDecrypter(key);
      const retrieved = await this.ipfs.dag.get(cid3);
      const decryptedData = await decryptJWE(retrieved.value, dirDecrypter);
      return decodeCleartext_1(decryptedData);
    };
    this.ipfs = ipfs;
    this.proxcryptor = proxcryptor;
    this.rootCID = cid2;
  }
  async updateDag(currentRootCID, tag, newEntry) {
    const newCID = await this.ipfs.dag.put(newEntry, {
      pin: true,
      format: code
    });
    const exisitingData = currentRootCID ? await this.ipfs.dag.get(currentRootCID) : {};
    let data = __spreadProps(__spreadValues({}, exisitingData.value), {
      [tag]: newCID,
      prev: currentRootCID || false
    });
    const newRootCID = await this.ipfs.dag.put(data, {
      format: code
    });
    return newRootCID;
  }
  async getHashedTags(tag, targetPublicKey) {
    const senderPubKey = await this.proxcryptor.getPublicKey();
    const tagArray = textEncoder.encode(tag);
    const input = new Uint8Array([...tagArray, ...targetPublicKey, ...senderPubKey]);
    const hashedPubkeys = await hexDigestMessage(input);
    return hashedPubkeys;
  }
  async getTagReKeysNode(tag) {
    if (!tag)
      return;
    const resTagNode = await this.ipfs.dag.get(this.rootCID, { path: `/${tag}` });
    let tagNode = resTagNode.value;
    const reKeyNode = tagNode[REKEYS];
    return { reKeyNode, tagNode };
  }
  async setTagReKeys(tag, targetPublicKey) {
    if (!tag)
      return;
    const hashedPubkeys = await this.getHashedTags(tag, targetPublicKey);
    let { reKeyNode, tagNode } = await this.getTagReKeysNode(tag);
    const targetsReKey = await this.proxcryptor.generateReKey(targetPublicKey, tag);
    const targetsReEncryptedKey = await this.proxcryptor.reEncrypt(targetPublicKey, tagNode.encryptedKey, targetsReKey);
    reKeyNode[hashedPubkeys] = targetsReEncryptedKey;
    tagNode = __spreadProps(__spreadValues({}, tagNode), { [REKEYS]: reKeyNode });
    this.rootCID = await this.updateDag(this.rootCID, tag, tagNode);
    return this.rootCID;
  }
  async checkAccess(tag, targetPublicKey) {
    if (!tag)
      return;
    const hashedPubkeys = await this.getHashedTags(tag, targetPublicKey);
    let { reKeyNode, tagNode } = await this.getTagReKeysNode(tag);
    if (hashedPubkeys in reKeyNode)
      return reKeyNode[hashedPubkeys];
    return false;
  }
  async decryptFromTagNode(tagNode) {
    const pubKey = await this.proxcryptor.getPublicKey();
    const hashTag = await this.getHashedTags(tagNode.tag, pubKey);
    if (!(hashTag in tagNode[REKEYS]))
      return false;
    const reKey = tagNode[REKEYS][hashTag];
    return await this.get(tagNode.encryptedData, reKey);
  }
  async put(secretz, tag, schema = {}) {
    const symmetricKey = random.randomBytes(32);
    const selfEncryptedSymmetricKey = await this.proxcryptor.selfEncrypt(symmetricKey, tag);
    const cid2 = await this.storeDAGEncrypted(secretz, symmetricKey);
    await this.ipfs.pin.add(cid2, { recursive: true });
    let prev = false;
    try {
      let res = await this.ipfs.dag.resolve(`${this.rootCID}/${tag}`);
      prev = res.cid;
    } catch (error) {
      prev = false;
    }
    const newEntry = {
      tag,
      schema,
      timestamp: +new Date(),
      encryptedData: cid2,
      encryptedKey: selfEncryptedSymmetricKey,
      [REKEYS]: {},
      prev
    };
    this.rootCID = await this.updateDag(this.rootCID, tag, newEntry);
  }
  async get(cid2, re_encrypted_message) {
    const symmetricKey = await this.proxcryptor.reDecrypt(re_encrypted_message);
    const decoded = await this.loadEncrypted(cid2, symmetricKey);
    return decoded;
  }
  async selfDecrypt(data) {
    try {
      const symmetricKey = await this.proxcryptor.selfDecrypt(data.encryptedKey);
      const decoded = await this.loadEncrypted(data.encryptedData, symmetricKey);
      return decoded;
    } catch (error) {
      console.error("In selfDecrypt", error);
      return false;
    }
  }
}
export { DagJoseCryptor };
//# sourceMappingURL=dagjosecryptor-3eefc414.js.map
