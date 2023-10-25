// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6cUJw":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "dfd5faebf5bd83b5";
module.bundle.HMR_BUNDLE_ID = "8411f17170a9f2d3";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fWapj":[function(require,module,exports) {
/*------------------------------------------------------------------
Entry
------------------------------------------------------------------*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/ var _lib = require("./lib");
var _search = require("./search");
var _shop = require("./shop");
var _flickity = require("flickity");
var _flickityDefault = parcelHelpers.interopDefault(_flickity);
var _inView = require("in-view");
var _inViewDefault = parcelHelpers.interopDefault(_inView);
var _animeEsJs = require("animejs/lib/anime.es.js");
var _animeEsJsDefault = parcelHelpers.interopDefault(_animeEsJs);
console.log("Vital Bits v1.0.0");
/*------------------------------------------------------------------
Sticky header  
------------------------------------------------------------------*/ let previousScrollPosition = 0;
let scrollDelta = 5;
let header = (0, _lib.$)(".header");
let nav = (0, _lib.$)(".header-nav");
let headerHeight = header ? header.clientHeight / 3 : 0;
const stickyHeader = ()=>{
    let st = window.scrollY;
    if (Math.abs(previousScrollPosition - st) <= scrollDelta) return;
    if (st <= 10) {
        header.classList.remove("nav-down");
        header.classList.remove("nav-up");
        nav.classList.remove("coloured");
    } else if (st > previousScrollPosition && st > headerHeight) {
        header.classList.remove("nav-down");
        header.classList.add("nav-up");
        nav.classList.add("coloured");
    } else if (st + window.innerHeight < document.body.clientHeight) {
        header.classList.add("nav-down");
        header.classList.remove("nav-up");
    }
    previousScrollPosition = st;
};
window.addEventListener("scroll", stickyHeader);
let wave_text = (0, _lib.$)(".js-wave-text");
wave_text.innerHTML = wave_text.textContent.replace(/\S/g, '<span class="letter">$&</span>');
let wave = (0, _animeEsJsDefault.default).timeline({
    autoplay: false
}).add({
    targets: ".js-wave-text .letter",
    translateY: [
        0,
        -2,
        0
    ],
    easing: "easeOutExpo",
    duration: 500,
    autoplay: false,
    delay: (el, i)=>10 * i
});
setInterval(()=>wave.play(), 20000);
(0, _animeEsJsDefault.default)({
    targets: ".js-wave path",
    d: [
        "M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,250.7C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320"
    ],
    direction: "alternate",
    loop: true,
    easing: "easeInOutQuad",
    duration: 10000
});
/*------------------------------------------------------------------
Side cart interactions
------------------------------------------------------------------*/ const toggleSidecart = ()=>document.body.classList.toggle("sidecart-visible");
window.toggleMobileNavigation = ()=>{
    document.body.classList.toggle("mobile-navigation-visible");
};
/**
 * Define the square animation
 */ const marquee = (0, _animeEsJsDefault.default)({
    targets: ".collections__marquee__animation,.related-products__marquee__animation,.collection-grid__marquee__animation",
    translateX: "-10%",
    easing: "linear",
    autoplay: false
});
/**
 * Define the square animation
 */ const blog_image = (0, _animeEsJsDefault.default)({
    targets: ".banner-blog-image",
    rotateX: "10",
    rotateY: "-10",
    scale: 1.1,
    easing: "linear",
    autoplay: false
});
/**
 * Define the square animation
 */ const blog_image_shadow = (0, _animeEsJsDefault.default)({
    targets: ".banner-blog-image__shadow",
    opacity: 1,
    easing: "linear",
    autoplay: false
});
/**
 * Calculate the scroll percentage position
 */ const scrollPercent = ()=>(document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
/**
 * Add a scroll listener on the window object to
 * control animations based on scroll percentage.
 */ window.onscroll = ()=>{
    marquee.seek(scrollPercent() / 100 * marquee.duration);
    blog_image.seek(scrollPercent() / 100 * blog_image.duration);
    blog_image_shadow.seek(scrollPercent() / 100 * blog_image_shadow.duration);
};
/*------------------------------------------------------------------
Banner slider block - Flickity
------------------------------------------------------------------*/ if ((0, _lib.$)(".collections__slider")) new (0, _flickityDefault.default)(".collections__slider", {
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    initialIndex: window.innerWidth > 768 ? 1 : 0
});
/*------------------------------------------------------------------
In view elements
------------------------------------------------------------------*/ document.addEventListener("DOMContentLoaded", ()=>{
    (0, _inViewDefault.default)(".js-inview").on("enter", (el)=>el.classList.add("inview"));
}, false);
// On escape press toggle a class on the body
document.addEventListener("keyup", (e)=>e.key === "Escape" ? toggleMobileNavigation() : null);
window.changeQuantity = (event, amount)=>{
    let input = event.target.parentElement.querySelector("input");
    let quantity = parseInt(input.value);
    quantity = quantity + amount < 1 ? 1 : quantity + amount;
    input.value = quantity;
};

},{"./lib":"acGTP","./search":"4fKJc","flickity":"lGlvh","in-view":"70hii","animejs/lib/anime.es.js":"hQAdq","@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS","./shop":"1fHDu"}],"acGTP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$);
parcelHelpers.export(exports, "$$", ()=>$$);
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"5ITdS":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4fKJc":[function(require,module,exports) {
/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/ var _lib = require("./lib");
/*------------------------------------------------------------------
Search interactions
------------------------------------------------------------------*/ let $search_input = (0, _lib.$)(".js-search-query");
window.toggleSearchPane = ()=>{
    document.body.classList.toggle("search-visible");
    if (document.body.classList.contains("search-visible")) setTimeout(()=>document.getElementById("search-query").focus(), 1000);
};
document.addEventListener("keyup", (e)=>{
    if (e.keyCode === 27) document.body.classList.remove("search-visible");
});
// Our Declare our search variables
const $search_button = (0, _lib.$)(".js-show-all-results");
const $search_results = (0, _lib.$)(".search-pane-results");
const $search_grid = (0, _lib.$)(".js-search-results-grid");
let search_results = [];
// Create the AbortController for the future fetch request
let controller;
/**
 * 
 * Debounce function
 * 
 * @param {function} callback 
 * @param {number} delay 
 * @returns 
 */ const debounce = (callback, delay)=>{
    let timeoutId = null;
    return (...args)=>{
        window.clearTimeout(timeoutId);
        timeoutId = window.setTimeout(()=>callback.apply(null, args), delay);
    };
};
/**
 * 
 * Placeholder result template
 * 
 * @returns {string} template
 */ const template_search_placeholder = ()=>{
    return /*html*/ `
            <div class="search-pane-results-grid__placeholder">
                <div class="search-pane-results-grid__placeholder__image"></div>
                <div class="search-pane-results-grid__placeholder__type"><p>&nbsp;</p></div>
                <div class="search-pane-results-grid__placeholder__title"><p>&nbsp;<br>&nbsp;</p></div>
            </div>
        `;
};
/**
 * 
 * Search result template
 * 
 * @param {template} result 
 * @returns {string} template
 */ const template_search_result = (result)=>{
    // Only return a string if there is a result to augment
    if (result) return /*html*/ `
            <a href="${result.url}" class="search-pane-results-grid__item">
                <div class="search-pane-results-grid__item__image">
                    ${result.featured_image ? `
                    <img src="${result.featured_image.url}" width="610" height="610" loading="lazy" alt="${result.title}">
                    ` : `
                    <img src="/themes/mercury/dist/images/standard/placeholder.png" width="610" height="610" loading="lazy" alt="${result.title}">
                    `}
                    
                </div>
                <div class="search-pane-results-grid__item__title"><p>${result.title}</p></div>
                <div class="search-pane-results-grid__item__type"><p>$${result.price}</p></div>
            </a>
            `;
    else return "";
};
/**
 * 
 * Show the search animation by enumerating the results with three placeholder elements
 * 
 */ const show_search_animation = ()=>{
    let html = "";
    for(let i = 0; i < 2; i++)html += template_search_placeholder();
    html += template_search_placeholder();
    $search_grid.innerHTML = html;
};
/**
 * 
 * Show the first three search results
 * 
 */ const update_search_results = ()=>{
    let html = "";
    for(let i = 0; i < 3; i++)html += template_search_result(search_results[i]);
    $search_grid.innerHTML = html;
};
/**
 * 
 * Show the no results found message
 * 
 */ const no_results_found = ()=>{
    let html = /*html*/ `
        <div class="search-pane-results-grid__no-results">
            <h5><b>Sorry, there are no suggestions for that term</b></h5>
            <p>Why not view our collections <a href="/collections">here</a></p>
        </div>`;
    $search_grid.innerHTML = html;
};
/**
 * 
 * Redirect to the search results page showing all results
 * 
 * @returns {void} redirect to the search results page
 */ const go_to_all_results = ()=>window.location = `/SearchForm/?Search=${$search_input.value}`;
/**
 * 
 * Show the search results grid
 * 
 * @returns {void} show the search results grid
 */ const show_predicitive_search = ()=>$search_results.classList.add("active");
/**
* 
* Hide the search results grid
* 
* @returns {void} hide the search results grid
*/ const hide_predicitive_search = ()=>$search_results.classList.remove("active");
/**
 * 
 * Fetch the search results - wrapped in a debounce method to prevent excessive requests
 * 
 */ const search = ()=>{
    // If there is a previous request, abort it
    if (controller) controller.abort();
    // Setup the new AbortController
    controller = new AbortController();
    // Assign our signal 
    const { signal } = controller;
    if ($search_input.value.length > 0) {
        // Log our fetch request intent
        console.time("search performed in ");
        // Fetch the newly requested results
        fetch(`/search/suggest.json?q=${encodeURIComponent($search_input.value)}&resources[type]=product,page,article,collection&resources[limit]=4&resources[options][unavailable_products]=last&`, {
            signal
        }).then((response)=>response.text()).then((data)=>{
            console.timeEnd("search performed in ");
            // Log out our new results for debugging
            data = JSON.parse(data);
            search_results = data.resources.results.products;
            // Update the search results grid with the new results or a nothing found message
            search_results.length > 0 ? update_search_results() : no_results_found();
            (0, _lib.$)(".search-pane-results-action").style.display = search_results.length > 0 ? "block" : "none";
        });
    }
};
/**
 * 
 * Activate the search panel as soon as the user starts interacting with it
 * 
 */ const activate_search = (event)=>{
    // Show or hide the search results grid
    $search_input.value.length ? show_predicitive_search() : hide_predicitive_search();
    const input = String.fromCharCode(event.keyCode);
    // Test to see it the input was a letter, number or special character
    const letterNumber = /^[0-9a-zA-Z]+$/;
    // Only show the animation if a user has started typing
    if ($search_input.value.length && input.match(letterNumber)) show_search_animation();
};
// Event handler for the search input - this is debounced to prevent excessive requests
$search_input.addEventListener("input", debounce(search, 200));
// Event handler for the search input - this is instant to show action but will not search yet
$search_input.addEventListener("keyup", activate_search);
// Event handler for the search button - this will redirect to the search results page
$search_button.addEventListener("click", go_to_all_results); // For dev purposes only - remove on live
 // document.body.classList.add('searchActive');
 // Focus on the search input
 // setTimeout(() => document.getElementById('SearchForm_SearchForm_Search').focus(), 1500);

},{"./lib":"acGTP"}],"lGlvh":[function(require,module,exports) {
/*!
 * Flickity v2.2.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */ (function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "./drag",
        "./prev-next-button",
        "./page-dots",
        "./player",
        "./add-remove-cell",
        "./lazyload"
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("7f4fc0fa93b379af"), require("bb0305263f6cb53e"), require("ae996051f9e1d92a"), require("4ac8cd6c25220e4d"), require("765ef4929b67b432"), require("19e7a54076c11add"), require("d91f4dabff6fb76b"));
})(window, function factory(Flickity) {
    return Flickity;
});

},{"7f4fc0fa93b379af":"lqXaA","bb0305263f6cb53e":"fplVG","ae996051f9e1d92a":"5sFqy","4ac8cd6c25220e4d":"aRztI","765ef4929b67b432":"9u4yR","19e7a54076c11add":"ewQZE","d91f4dabff6fb76b":"73rKt"}],"lqXaA":[function(require,module,exports) {
// Flickity main
/* eslint-disable max-params */ (function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./slide",
        "./animate"
    ], function(EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
        return factory(window1, EvEmitter, getSize, utils, Cell, Slide, animatePrototype);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("fa23e9e6e601baae"), require("85a1c701d007b558"), require("bffd2b9d17982adc"), require("1bd440e3aab8bdf6"), require("d1a522f1df04542d"), require("fb4fc3262d72fc3d"));
    else {
        // browser global
        var _Flickity = window1.Flickity;
        window1.Flickity = factory(window1, window1.EvEmitter, window1.getSize, window1.fizzyUIUtils, _Flickity.Cell, _Flickity.Slide, _Flickity.animatePrototype);
    }
})(window, function factory(window1, EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
    /* eslint-enable max-params */ "use strict";
    // vars
    var jQuery = window1.jQuery;
    var getComputedStyle = window1.getComputedStyle;
    var console = window1.console;
    function moveElements(elems, toElem) {
        elems = utils.makeArray(elems);
        while(elems.length)toElem.appendChild(elems.shift());
    }
    // -------------------------- Flickity -------------------------- //
    // globally unique identifiers
    var GUID = 0;
    // internal store of all Flickity intances
    var instances = {};
    function Flickity(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) console.error("Bad element for Flickity: " + (queryElement || element));
            return;
        }
        this.element = queryElement;
        // do not initialize twice on same element
        if (this.element.flickityGUID) {
            var instance = instances[this.element.flickityGUID];
            if (instance) instance.option(options);
            return instance;
        }
        // add jQuery
        if (jQuery) this.$element = jQuery(this.element);
        // options
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        // kick things off
        this._create();
    }
    Flickity.defaults = {
        accessibility: true,
        // adaptiveHeight: false,
        cellAlign: "center",
        // cellSelector: undefined,
        // contain: false,
        freeScrollFriction: 0.075,
        friction: 0.28,
        namespaceJQueryEvents: true,
        // initialIndex: 0,
        percentPosition: true,
        resize: true,
        selectedAttraction: 0.025,
        setGallerySize: true
    };
    // hash of methods triggered on _create()
    Flickity.createMethods = [];
    var proto = Flickity.prototype;
    // inherit EventEmitter
    utils.extend(proto, EvEmitter.prototype);
    proto._create = function() {
        // add id for Flickity.data
        var id = this.guid = ++GUID;
        this.element.flickityGUID = id; // expando
        instances[id] = this; // associate via id
        // initial properties
        this.selectedIndex = 0;
        // how many frames slider has been in same position
        this.restingFrames = 0;
        // initial physics properties
        this.x = 0;
        this.velocity = 0;
        this.originSide = this.options.rightToLeft ? "right" : "left";
        // create viewport & slider
        this.viewport = document.createElement("div");
        this.viewport.className = "flickity-viewport";
        this._createSlider();
        if (this.options.resize || this.options.watchCSS) window1.addEventListener("resize", this);
        // add listeners from on option
        for(var eventName in this.options.on){
            var listener = this.options.on[eventName];
            this.on(eventName, listener);
        }
        Flickity.createMethods.forEach(function(method) {
            this[method]();
        }, this);
        if (this.options.watchCSS) this.watchCSS();
        else this.activate();
    };
    /**
 * set options
 * @param {Object} opts - options to extend
 */ proto.option = function(opts) {
        utils.extend(this.options, opts);
    };
    proto.activate = function() {
        if (this.isActive) return;
        this.isActive = true;
        this.element.classList.add("flickity-enabled");
        if (this.options.rightToLeft) this.element.classList.add("flickity-rtl");
        this.getSize();
        // move initial cell elements so they can be loaded as cells
        var cellElems = this._filterFindCellElements(this.element.children);
        moveElements(cellElems, this.slider);
        this.viewport.appendChild(this.slider);
        this.element.appendChild(this.viewport);
        // get cells from children
        this.reloadCells();
        if (this.options.accessibility) {
            // allow element to focusable
            this.element.tabIndex = 0;
            // listen for key presses
            this.element.addEventListener("keydown", this);
        }
        this.emitEvent("activate");
        this.selectInitialIndex();
        // flag for initial activation, for using initialIndex
        this.isInitActivated = true;
        // ready event. #493
        this.dispatchEvent("ready");
    };
    // slider positions the cells
    proto._createSlider = function() {
        // slider element does all the positioning
        var slider = document.createElement("div");
        slider.className = "flickity-slider";
        slider.style[this.originSide] = 0;
        this.slider = slider;
    };
    proto._filterFindCellElements = function(elems) {
        return utils.filterFindElements(elems, this.options.cellSelector);
    };
    // goes through all children
    proto.reloadCells = function() {
        // collection of item elements
        this.cells = this._makeCells(this.slider.children);
        this.positionCells();
        this._getWrapShiftCells();
        this.setGallerySize();
    };
    /**
 * turn elements into Flickity.Cells
 * @param {[Array, NodeList, HTMLElement]} elems - elements to make into cells
 * @returns {Array} items - collection of new Flickity Cells
 */ proto._makeCells = function(elems) {
        var cellElems = this._filterFindCellElements(elems);
        // create new Flickity for collection
        var cells = cellElems.map(function(cellElem) {
            return new Cell(cellElem, this);
        }, this);
        return cells;
    };
    proto.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    };
    proto.getLastSlide = function() {
        return this.slides[this.slides.length - 1];
    };
    // positions all cells
    proto.positionCells = function() {
        // size all cells
        this._sizeCells(this.cells);
        // position all cells
        this._positionCells(0);
    };
    /**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */ proto._positionCells = function(index) {
        index = index || 0;
        // also measure maxCellHeight
        // start 0 if positioning all cells
        this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
        var cellX = 0;
        // get cellX
        if (index > 0) {
            var startCell = this.cells[index - 1];
            cellX = startCell.x + startCell.size.outerWidth;
        }
        var len = this.cells.length;
        for(var i = index; i < len; i++){
            var cell = this.cells[i];
            cell.setPosition(cellX);
            cellX += cell.size.outerWidth;
            this.maxCellHeight = Math.max(cell.size.outerHeight, this.maxCellHeight);
        }
        // keep track of cellX for wrap-around
        this.slideableWidth = cellX;
        // slides
        this.updateSlides();
        // contain slides target
        this._containSlides();
        // update slidesWidth
        this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
    };
    /**
 * cell.getSize() on multiple cells
 * @param {Array} cells - cells to size
 */ proto._sizeCells = function(cells) {
        cells.forEach(function(cell) {
            cell.getSize();
        });
    };
    // --------------------------  -------------------------- //
    proto.updateSlides = function() {
        this.slides = [];
        if (!this.cells.length) return;
        var slide = new Slide(this);
        this.slides.push(slide);
        var isOriginLeft = this.originSide == "left";
        var nextMargin = isOriginLeft ? "marginRight" : "marginLeft";
        var canCellFit = this._getCanCellFit();
        this.cells.forEach(function(cell, i) {
            // just add cell if first cell in slide
            if (!slide.cells.length) {
                slide.addCell(cell);
                return;
            }
            var slideWidth = slide.outerWidth - slide.firstMargin + (cell.size.outerWidth - cell.size[nextMargin]);
            if (canCellFit.call(this, i, slideWidth)) slide.addCell(cell);
            else {
                // doesn't fit, new slide
                slide.updateTarget();
                slide = new Slide(this);
                this.slides.push(slide);
                slide.addCell(cell);
            }
        }, this);
        // last slide
        slide.updateTarget();
        // update .selectedSlide
        this.updateSelectedSlide();
    };
    proto._getCanCellFit = function() {
        var groupCells = this.options.groupCells;
        if (!groupCells) return function() {
            return false;
        };
        else if (typeof groupCells == "number") {
            // group by number. 3 -> [0,1,2], [3,4,5], ...
            var number = parseInt(groupCells, 10);
            return function(i) {
                return i % number !== 0;
            };
        }
        // default, group by width of slide
        // parse '75%
        var percentMatch = typeof groupCells == "string" && groupCells.match(/^(\d+)%$/);
        var percent = percentMatch ? parseInt(percentMatch[1], 10) / 100 : 1;
        return function(i, slideWidth) {
            /* eslint-disable-next-line no-invalid-this */ return slideWidth <= (this.size.innerWidth + 1) * percent;
        };
    };
    // alias _init for jQuery plugin .flickity()
    proto._init = proto.reposition = function() {
        this.positionCells();
        this.positionSliderAtSelected();
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
        this.setCellAlign();
        this.cursorPosition = this.size.innerWidth * this.cellAlign;
    };
    var cellAlignShorthands = {
        // cell align, then based on origin side
        center: {
            left: 0.5,
            right: 0.5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    proto.setCellAlign = function() {
        var shorthand = cellAlignShorthands[this.options.cellAlign];
        this.cellAlign = shorthand ? shorthand[this.originSide] : this.options.cellAlign;
    };
    proto.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var height = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = height + "px";
        }
    };
    proto._getWrapShiftCells = function() {
        // only for wrap-around
        if (!this.options.wrapAround) return;
        // unshift previous cells
        this._unshiftCells(this.beforeShiftCells);
        this._unshiftCells(this.afterShiftCells);
        // get before cells
        // initial gap
        var gapX = this.cursorPosition;
        var cellIndex = this.cells.length - 1;
        this.beforeShiftCells = this._getGapCells(gapX, cellIndex, -1);
        // get after cells
        // ending gap between last cell and end of gallery viewport
        gapX = this.size.innerWidth - this.cursorPosition;
        // start cloning at first cell, working forwards
        this.afterShiftCells = this._getGapCells(gapX, 0, 1);
    };
    proto._getGapCells = function(gapX, cellIndex, increment) {
        // keep adding cells until the cover the initial gap
        var cells = [];
        while(gapX > 0){
            var cell = this.cells[cellIndex];
            if (!cell) break;
            cells.push(cell);
            cellIndex += increment;
            gapX -= cell.size.outerWidth;
        }
        return cells;
    };
    // ----- contain ----- //
    // contain cell targets so no excess sliding
    proto._containSlides = function() {
        if (!this.options.contain || this.options.wrapAround || !this.cells.length) return;
        var isRightToLeft = this.options.rightToLeft;
        var beginMargin = isRightToLeft ? "marginRight" : "marginLeft";
        var endMargin = isRightToLeft ? "marginLeft" : "marginRight";
        var contentWidth = this.slideableWidth - this.getLastCell().size[endMargin];
        // content is less than gallery size
        var isContentSmaller = contentWidth < this.size.innerWidth;
        // bounds
        var beginBound = this.cursorPosition + this.cells[0].size[beginMargin];
        var endBound = contentWidth - this.size.innerWidth * (1 - this.cellAlign);
        // contain each cell target
        this.slides.forEach(function(slide) {
            if (isContentSmaller) // all cells fit inside gallery
            slide.target = contentWidth * this.cellAlign;
            else {
                // contain to bounds
                slide.target = Math.max(slide.target, beginBound);
                slide.target = Math.min(slide.target, endBound);
            }
        }, this);
    };
    // -----  ----- //
    /**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */ proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [
            event
        ].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery && this.$element) {
            // default trigger with type if no event
            type += this.options.namespaceJQueryEvents ? ".flickity" : "";
            var $event = type;
            if (event) {
                // create jQuery event
                var jQEvent = new jQuery.Event(event);
                jQEvent.type = type;
                $event = jQEvent;
            }
            this.$element.trigger($event, args);
        }
    };
    // -------------------------- select -------------------------- //
    /**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */ proto.select = function(index, isWrap, isInstant) {
        if (!this.isActive) return;
        index = parseInt(index, 10);
        this._wrapSelect(index);
        if (this.options.wrapAround || isWrap) index = utils.modulo(index, this.slides.length);
        // bail if invalid index
        if (!this.slides[index]) return;
        var prevIndex = this.selectedIndex;
        this.selectedIndex = index;
        this.updateSelectedSlide();
        if (isInstant) this.positionSliderAtSelected();
        else this.startAnimation();
        if (this.options.adaptiveHeight) this.setGallerySize();
        // events
        this.dispatchEvent("select", null, [
            index
        ]);
        // change event if new index
        if (index != prevIndex) this.dispatchEvent("change", null, [
            index
        ]);
        // old v1 event name, remove in v3
        this.dispatchEvent("cellSelect");
    };
    // wraps position for wrapAround, to move to closest slide. #113
    proto._wrapSelect = function(index) {
        var len = this.slides.length;
        var isWrapping = this.options.wrapAround && len > 1;
        if (!isWrapping) return index;
        var wrapIndex = utils.modulo(index, len);
        // go to shortest
        var delta = Math.abs(wrapIndex - this.selectedIndex);
        var backWrapDelta = Math.abs(wrapIndex + len - this.selectedIndex);
        var forewardWrapDelta = Math.abs(wrapIndex - len - this.selectedIndex);
        if (!this.isDragSelect && backWrapDelta < delta) index += len;
        else if (!this.isDragSelect && forewardWrapDelta < delta) index -= len;
        // wrap position so slider is within normal area
        if (index < 0) this.x -= this.slideableWidth;
        else if (index >= len) this.x += this.slideableWidth;
    };
    proto.previous = function(isWrap, isInstant) {
        this.select(this.selectedIndex - 1, isWrap, isInstant);
    };
    proto.next = function(isWrap, isInstant) {
        this.select(this.selectedIndex + 1, isWrap, isInstant);
    };
    proto.updateSelectedSlide = function() {
        var slide = this.slides[this.selectedIndex];
        // selectedIndex could be outside of slides, if triggered before resize()
        if (!slide) return;
        // unselect previous selected slide
        this.unselectSelectedSlide();
        // update new selected slide
        this.selectedSlide = slide;
        slide.select();
        this.selectedCells = slide.cells;
        this.selectedElements = slide.getCellElements();
        // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
        // Remove in v3?
        this.selectedCell = slide.cells[0];
        this.selectedElement = this.selectedElements[0];
    };
    proto.unselectSelectedSlide = function() {
        if (this.selectedSlide) this.selectedSlide.unselect();
    };
    proto.selectInitialIndex = function() {
        var initialIndex = this.options.initialIndex;
        // already activated, select previous selectedIndex
        if (this.isInitActivated) {
            this.select(this.selectedIndex, false, true);
            return;
        }
        // select with selector string
        if (initialIndex && typeof initialIndex == "string") {
            var cell = this.queryCell(initialIndex);
            if (cell) {
                this.selectCell(initialIndex, false, true);
                return;
            }
        }
        var index = 0;
        // select with number
        if (initialIndex && this.slides[initialIndex]) index = initialIndex;
        // select instantly
        this.select(index, false, true);
    };
    /**
 * select slide from number or cell element
 * @param {[Element, Number]} value - zero-based index or element to select
 * @param {Boolean} isWrap - enables wrapping around for extra index
 * @param {Boolean} isInstant - disables slide animation
 */ proto.selectCell = function(value, isWrap, isInstant) {
        // get cell
        var cell = this.queryCell(value);
        if (!cell) return;
        var index = this.getCellSlideIndex(cell);
        this.select(index, isWrap, isInstant);
    };
    proto.getCellSlideIndex = function(cell) {
        // get index of slides that has cell
        for(var i = 0; i < this.slides.length; i++){
            var slide = this.slides[i];
            var index = slide.cells.indexOf(cell);
            if (index != -1) return i;
        }
    };
    // -------------------------- get cells -------------------------- //
    /**
 * get Flickity.Cell, given an Element
 * @param {Element} elem - matching cell element
 * @returns {Flickity.Cell} cell - matching cell
 */ proto.getCell = function(elem) {
        // loop through cells to get the one that matches
        for(var i = 0; i < this.cells.length; i++){
            var cell = this.cells[i];
            if (cell.element == elem) return cell;
        }
    };
    /**
 * get collection of Flickity.Cells, given Elements
 * @param {[Element, Array, NodeList]} elems - multiple elements
 * @returns {Array} cells - Flickity.Cells
 */ proto.getCells = function(elems) {
        elems = utils.makeArray(elems);
        var cells = [];
        elems.forEach(function(elem) {
            var cell = this.getCell(elem);
            if (cell) cells.push(cell);
        }, this);
        return cells;
    };
    /**
 * get cell elements
 * @returns {Array} cellElems
 */ proto.getCellElements = function() {
        return this.cells.map(function(cell) {
            return cell.element;
        });
    };
    /**
 * get parent cell from an element
 * @param {Element} elem - child element
 * @returns {Flickit.Cell} cell - parent cell
 */ proto.getParentCell = function(elem) {
        // first check if elem is cell
        var cell = this.getCell(elem);
        if (cell) return cell;
        // try to get parent cell elem
        elem = utils.getParent(elem, ".flickity-slider > *");
        return this.getCell(elem);
    };
    /**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */ proto.getAdjacentCellElements = function(adjCount, index) {
        if (!adjCount) return this.selectedSlide.getCellElements();
        index = index === undefined ? this.selectedIndex : index;
        var len = this.slides.length;
        if (1 + adjCount * 2 >= len) return this.getCellElements();
        var cellElems = [];
        for(var i = index - adjCount; i <= index + adjCount; i++){
            var slideIndex = this.options.wrapAround ? utils.modulo(i, len) : i;
            var slide = this.slides[slideIndex];
            if (slide) cellElems = cellElems.concat(slide.getCellElements());
        }
        return cellElems;
    };
    /**
 * select slide from number or cell element
 * @param {[Element, String, Number]} selector - element, selector string, or index
 * @returns {Flickity.Cell} - matching cell
 */ proto.queryCell = function(selector) {
        if (typeof selector == "number") // use number as index
        return this.cells[selector];
        if (typeof selector == "string") {
            // do not select invalid selectors from hash: #123, #/. #791
            if (selector.match(/^[#.]?[\d/]/)) return;
            // use string as selector, get element
            selector = this.element.querySelector(selector);
        }
        // get cell from element
        return this.getCell(selector);
    };
    // -------------------------- events -------------------------- //
    proto.uiChange = function() {
        this.emitEvent("uiChange");
    };
    // keep focus on element when child UI elements are clicked
    proto.childUIPointerDown = function(event) {
        // HACK iOS does not allow touch events to bubble up?!
        if (event.type != "touchstart") event.preventDefault();
        this.focus();
    };
    // ----- resize ----- //
    proto.onresize = function() {
        this.watchCSS();
        this.resize();
    };
    utils.debounceMethod(Flickity, "onresize", 150);
    proto.resize = function() {
        if (!this.isActive) return;
        this.getSize();
        // wrap values
        if (this.options.wrapAround) this.x = utils.modulo(this.x, this.slideableWidth);
        this.positionCells();
        this._getWrapShiftCells();
        this.setGallerySize();
        this.emitEvent("resize");
        // update selected index for group slides, instant
        // TODO: position can be lost between groups of various numbers
        var selectedElement = this.selectedElements && this.selectedElements[0];
        this.selectCell(selectedElement, false, true);
    };
    // watches the :after property, activates/deactivates
    proto.watchCSS = function() {
        var watchOption = this.options.watchCSS;
        if (!watchOption) return;
        var afterContent = getComputedStyle(this.element, ":after").content;
        // activate if :after { content: 'flickity' }
        if (afterContent.indexOf("flickity") != -1) this.activate();
        else this.deactivate();
    };
    // ----- keydown ----- //
    // go previous/next if left/right keys pressed
    proto.onkeydown = function(event) {
        // only work if element is in focus
        var isNotFocused = document.activeElement && document.activeElement != this.element;
        if (!this.options.accessibility || isNotFocused) return;
        var handler = Flickity.keyboardHandlers[event.keyCode];
        if (handler) handler.call(this);
    };
    Flickity.keyboardHandlers = {
        // left arrow
        37: function() {
            var leftMethod = this.options.rightToLeft ? "next" : "previous";
            this.uiChange();
            this[leftMethod]();
        },
        // right arrow
        39: function() {
            var rightMethod = this.options.rightToLeft ? "previous" : "next";
            this.uiChange();
            this[rightMethod]();
        }
    };
    // ----- focus ----- //
    proto.focus = function() {
        // TODO remove scrollTo once focus options gets more support
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus ...
        //    #Browser_compatibility
        var prevScrollY = window1.pageYOffset;
        this.element.focus({
            preventScroll: true
        });
        // hack to fix scroll jump after focus, #76
        if (window1.pageYOffset != prevScrollY) window1.scrollTo(window1.pageXOffset, prevScrollY);
    };
    // -------------------------- destroy -------------------------- //
    // deactivate all Flickity functionality, but keep stuff available
    proto.deactivate = function() {
        if (!this.isActive) return;
        this.element.classList.remove("flickity-enabled");
        this.element.classList.remove("flickity-rtl");
        this.unselectSelectedSlide();
        // destroy cells
        this.cells.forEach(function(cell) {
            cell.destroy();
        });
        this.element.removeChild(this.viewport);
        // move child elements back into element
        moveElements(this.slider.children, this.element);
        if (this.options.accessibility) {
            this.element.removeAttribute("tabIndex");
            this.element.removeEventListener("keydown", this);
        }
        // set flags
        this.isActive = false;
        this.emitEvent("deactivate");
    };
    proto.destroy = function() {
        this.deactivate();
        window1.removeEventListener("resize", this);
        this.allOff();
        this.emitEvent("destroy");
        if (jQuery && this.$element) jQuery.removeData(this.element, "flickity");
        delete this.element.flickityGUID;
        delete instances[this.guid];
    };
    // -------------------------- prototype -------------------------- //
    utils.extend(proto, animatePrototype);
    // -------------------------- extras -------------------------- //
    /**
 * get Flickity instance from element
 * @param {[Element, String]} elem - element or selector string
 * @returns {Flickity} - Flickity instance
 */ Flickity.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.flickityGUID;
        return id && instances[id];
    };
    utils.htmlInit(Flickity, "flickity");
    if (jQuery && jQuery.bridget) jQuery.bridget("flickity", Flickity);
    // set internal jQuery, for Webpack + jQuery v3, #478
    Flickity.setJQuery = function(jq) {
        jQuery = jq;
    };
    Flickity.Cell = Cell;
    Flickity.Slide = Slide;
    return Flickity;
});

},{"fa23e9e6e601baae":"cYzr6","85a1c701d007b558":"a7g94","bffd2b9d17982adc":"l5E56","1bd440e3aab8bdf6":"8jmuM","d1a522f1df04542d":"4fy9v","fb4fc3262d72fc3d":"5whLO"}],"cYzr6":[function(require,module,exports) {
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */ (function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == "function" && define.amd) // AMD - RequireJS
    define(factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != "undefined" ? window : this, function() {
    "use strict";
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}],"a7g94":[function(require,module,exports) {
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */ /* globals console: false */ (function(window1, factory) {
    /* jshint strict: false */ /* globals define, module */ if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.getSize = factory();
})(window, function factory() {
    "use strict";
    // -------------------------- helpers -------------------------- //
    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf("%") == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == "undefined" ? noop : function(message) {
        console.error(message);
    };
    // -------------------------- measurements -------------------------- //
    var measurements = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth"
    ];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    // -------------------------- getStyle -------------------------- //
    /**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */ function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) logError("Style returned " + style + ". Are you running this code in a hidden iframe on Firefox? " + "See https://bit.ly/getsizebug1");
        return style;
    }
    // -------------------------- setup -------------------------- //
    var isSetup = false;
    var isBoxSizeOuter;
    /**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */ function setup() {
        // setup once
        if (isSetup) return;
        isSetup = true;
        // -------------------------- box sizing -------------------------- //
        /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */ var div = document.createElement("div");
        div.style.width = "200px";
        div.style.padding = "1px 2px 3px 4px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px 2px 3px 4px";
        div.style.boxSizing = "border-box";
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        // round value for browser zoom. desandro/masonry#928
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }
    // -------------------------- getSize -------------------------- //
    function getSize(elem) {
        setup();
        // use querySeletor if elem is string
        if (typeof elem == "string") elem = document.querySelector(elem);
        // do not proceed on non-objects
        if (!elem || typeof elem != "object" || !elem.nodeType) return;
        var style = getStyle(elem);
        // if hidden, everything is 0
        if (style.display == "none") return getZeroSize();
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == "border-box";
        // get all measurements
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            // any 'auto', 'medium' value will be 0
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) size.width = styleWidth + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) size.height = styleHeight + // add padding and border unless it's already including it
        (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});

},{}],"l5E56":[function(require,module,exports) {
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "desandro-matches-selector/matches-selector"
    ], function(matchesSelector) {
        return factory(window1, matchesSelector);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("51e1096a76b062e0"));
    else // browser global
    window1.fizzyUIUtils = factory(window1, window1.matchesSelector);
})(window, function factory(window1, matchesSelector) {
    "use strict";
    var utils = {};
    // ----- extend ----- //
    // extends objects
    utils.extend = function(a, b) {
        for(var prop in b)a[prop] = b[prop];
        return a;
    };
    // ----- modulo ----- //
    utils.modulo = function(num, div) {
        return (num % div + div) % div;
    };
    // ----- makeArray ----- //
    var arraySlice = Array.prototype.slice;
    // turn element or nodeList into an array
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) // use object if already an array
        return obj;
        // return empty array if undefined or null. #6
        if (obj === null || obj === undefined) return [];
        var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
        if (isArrayLike) // convert nodeList to array
        return arraySlice.call(obj);
        // array of single index
        return [
            obj
        ];
    };
    // ----- removeFrom ----- //
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) ary.splice(index, 1);
    };
    // ----- getParent ----- //
    utils.getParent = function(elem, selector) {
        while(elem.parentNode && elem != document.body){
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) return elem;
        }
    };
    // ----- getQueryElement ----- //
    // use element as selector string
    utils.getQueryElement = function(elem) {
        if (typeof elem == "string") return document.querySelector(elem);
        return elem;
    };
    // ----- handleEvent ----- //
    // enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    // ----- filterFindElements ----- //
    utils.filterFindElements = function(elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) return;
            // add elem if no selector
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            // filter & find items if we have a selector
            // filter
            if (matchesSelector(elem, selector)) ffElems.push(elem);
            // find children
            var childElems = elem.querySelectorAll(selector);
            // concat childElems to filterFound array
            for(var i = 0; i < childElems.length; i++)ffElems.push(childElems[i]);
        });
        return ffElems;
    };
    // ----- debounceMethod ----- //
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + "Timeout";
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };
    // ----- docReady ----- //
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == "complete" || readyState == "interactive") // do async to allow for other scripts to run. metafizzy/flickity#441
        setTimeout(callback);
        else document.addEventListener("DOMContentLoaded", callback);
    };
    // ----- htmlInit ----- //
    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + "-" + $2;
        }).toLowerCase();
    };
    var console = window1.console;
    /**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */ utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = "data-" + dashedNamespace;
            var dataAttrElems = document.querySelectorAll("[" + dataAttr + "]");
            var jsDashElems = document.querySelectorAll(".js-" + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + "-options";
            var jQuery = window1.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) console.error("Error parsing " + dataAttr + " on " + elem.className + ": " + error);
                    return;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('namespace')
                if (jQuery) jQuery.data(elem, namespace, instance);
            });
        });
    };
    // -----  ----- //
    return utils;
});

},{"51e1096a76b062e0":"hi1Dq"}],"hi1Dq":[function(require,module,exports) {
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */ (function(window1, factory) {
    /*global define: false, module: false */ "use strict";
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.matchesSelector = factory();
})(window, function factory() {
    "use strict";
    var matchesMethod = function() {
        var ElemProto = window.Element.prototype;
        // check for the standard method name first
        if (ElemProto.matches) return "matches";
        // check un-prefixed
        if (ElemProto.matchesSelector) return "matchesSelector";
        // check vendor prefixes
        var prefixes = [
            "webkit",
            "moz",
            "ms",
            "o"
        ];
        for(var i = 0; i < prefixes.length; i++){
            var prefix = prefixes[i];
            var method = prefix + "MatchesSelector";
            if (ElemProto[method]) return method;
        }
    }();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
});

},{}],"8jmuM":[function(require,module,exports) {
// Flickity.Cell
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "get-size/get-size"
    ], function(getSize) {
        return factory(window1, getSize);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("1b42d1889deda879"));
    else {
        // browser global
        window1.Flickity = window1.Flickity || {};
        window1.Flickity.Cell = factory(window1, window1.getSize);
    }
})(window, function factory(window1, getSize) {
    "use strict";
    function Cell(elem, parent) {
        this.element = elem;
        this.parent = parent;
        this.create();
    }
    var proto = Cell.prototype;
    proto.create = function() {
        this.element.style.position = "absolute";
        this.element.setAttribute("aria-hidden", "true");
        this.x = 0;
        this.shift = 0;
    };
    proto.destroy = function() {
        // reset style
        this.unselect();
        this.element.style.position = "";
        var side = this.parent.originSide;
        this.element.style[side] = "";
        this.element.removeAttribute("aria-hidden");
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    proto.setPosition = function(x) {
        this.x = x;
        this.updateTarget();
        this.renderPosition(x);
    };
    // setDefaultTarget v1 method, backwards compatibility, remove in v3
    proto.updateTarget = proto.setDefaultTarget = function() {
        var marginProperty = this.parent.originSide == "left" ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
    };
    proto.renderPosition = function(x) {
        // render position of cell with in slider
        var side = this.parent.originSide;
        this.element.style[side] = this.parent.getPositionValue(x);
    };
    proto.select = function() {
        this.element.classList.add("is-selected");
        this.element.removeAttribute("aria-hidden");
    };
    proto.unselect = function() {
        this.element.classList.remove("is-selected");
        this.element.setAttribute("aria-hidden", "true");
    };
    /**
 * @param {Integer} shift - 0, 1, or -1
 */ proto.wrapShift = function(shift) {
        this.shift = shift;
        this.renderPosition(this.x + this.parent.slideableWidth * shift);
    };
    proto.remove = function() {
        this.element.parentNode.removeChild(this.element);
    };
    return Cell;
});

},{"1b42d1889deda879":"a7g94"}],"4fy9v":[function(require,module,exports) {
// slide
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else {
        // browser global
        window1.Flickity = window1.Flickity || {};
        window1.Flickity.Slide = factory();
    }
})(window, function factory() {
    "use strict";
    function Slide(parent) {
        this.parent = parent;
        this.isOriginLeft = parent.originSide == "left";
        this.cells = [];
        this.outerWidth = 0;
        this.height = 0;
    }
    var proto = Slide.prototype;
    proto.addCell = function(cell) {
        this.cells.push(cell);
        this.outerWidth += cell.size.outerWidth;
        this.height = Math.max(cell.size.outerHeight, this.height);
        // first cell stuff
        if (this.cells.length == 1) {
            this.x = cell.x; // x comes from first cell
            var beginMargin = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = cell.size[beginMargin];
        }
    };
    proto.updateTarget = function() {
        var endMargin = this.isOriginLeft ? "marginRight" : "marginLeft";
        var lastCell = this.getLastCell();
        var lastMargin = lastCell ? lastCell.size[endMargin] : 0;
        var slideWidth = this.outerWidth - (this.firstMargin + lastMargin);
        this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
    };
    proto.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    };
    proto.select = function() {
        this.cells.forEach(function(cell) {
            cell.select();
        });
    };
    proto.unselect = function() {
        this.cells.forEach(function(cell) {
            cell.unselect();
        });
    };
    proto.getCellElements = function() {
        return this.cells.map(function(cell) {
            return cell.element;
        });
    };
    return Slide;
});

},{}],"5whLO":[function(require,module,exports) {
// animate
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "fizzy-ui-utils/utils"
    ], function(utils) {
        return factory(window1, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("1e52957a1ff1b7bd"));
    else {
        // browser global
        window1.Flickity = window1.Flickity || {};
        window1.Flickity.animatePrototype = factory(window1, window1.fizzyUIUtils);
    }
})(window, function factory(window1, utils) {
    "use strict";
    // -------------------------- animate -------------------------- //
    var proto = {};
    proto.startAnimation = function() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.restingFrames = 0;
        this.animate();
    };
    proto.animate = function() {
        this.applyDragForce();
        this.applySelectedAttraction();
        var previousX = this.x;
        this.integratePhysics();
        this.positionSlider();
        this.settle(previousX);
        // animate next frame
        if (this.isAnimating) {
            var _this = this;
            requestAnimationFrame(function animateFrame() {
                _this.animate();
            });
        }
    };
    proto.positionSlider = function() {
        var x = this.x;
        // wrap position around
        if (this.options.wrapAround && this.cells.length > 1) {
            x = utils.modulo(x, this.slideableWidth);
            x -= this.slideableWidth;
            this.shiftWrapCells(x);
        }
        this.setTranslateX(x, this.isAnimating);
        this.dispatchScrollEvent();
    };
    proto.setTranslateX = function(x, is3d) {
        x += this.cursorPosition;
        // reverse if right-to-left and using transform
        x = this.options.rightToLeft ? -x : x;
        var translateX = this.getPositionValue(x);
        // use 3D transforms for hardware acceleration on iOS
        // but use 2D when settled, for better font-rendering
        this.slider.style.transform = is3d ? "translate3d(" + translateX + ",0,0)" : "translateX(" + translateX + ")";
    };
    proto.dispatchScrollEvent = function() {
        var firstSlide = this.slides[0];
        if (!firstSlide) return;
        var positionX = -this.x - firstSlide.target;
        var progress = positionX / this.slidesWidth;
        this.dispatchEvent("scroll", null, [
            progress,
            positionX
        ]);
    };
    proto.positionSliderAtSelected = function() {
        if (!this.cells.length) return;
        this.x = -this.selectedSlide.target;
        this.velocity = 0; // stop wobble
        this.positionSlider();
    };
    proto.getPositionValue = function(position) {
        if (this.options.percentPosition) // percent position, round to 2 digits, like 12.34%
        return Math.round(position / this.size.innerWidth * 10000) * 0.01 + "%";
        else // pixel positioning
        return Math.round(position) + "px";
    };
    proto.settle = function(previousX) {
        // keep track of frames where x hasn't moved
        var isResting = !this.isPointerDown && Math.round(this.x * 100) == Math.round(previousX * 100);
        if (isResting) this.restingFrames++;
        // stop animating if resting for 3 or more frames
        if (this.restingFrames > 2) {
            this.isAnimating = false;
            delete this.isFreeScrolling;
            // render position with translateX when settled
            this.positionSlider();
            this.dispatchEvent("settle", null, [
                this.selectedIndex
            ]);
        }
    };
    proto.shiftWrapCells = function(x) {
        // shift before cells
        var beforeGap = this.cursorPosition + x;
        this._shiftCells(this.beforeShiftCells, beforeGap, -1);
        // shift after cells
        var afterGap = this.size.innerWidth - (x + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, afterGap, 1);
    };
    proto._shiftCells = function(cells, gap, shift) {
        for(var i = 0; i < cells.length; i++){
            var cell = cells[i];
            var cellShift = gap > 0 ? shift : 0;
            cell.wrapShift(cellShift);
            gap -= cell.size.outerWidth;
        }
    };
    proto._unshiftCells = function(cells) {
        if (!cells || !cells.length) return;
        for(var i = 0; i < cells.length; i++)cells[i].wrapShift(0);
    };
    // -------------------------- physics -------------------------- //
    proto.integratePhysics = function() {
        this.x += this.velocity;
        this.velocity *= this.getFrictionFactor();
    };
    proto.applyForce = function(force) {
        this.velocity += force;
    };
    proto.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
    };
    proto.getRestingPosition = function() {
        // my thanks to Steven Wittens, who simplified this math greatly
        return this.x + this.velocity / (1 - this.getFrictionFactor());
    };
    proto.applyDragForce = function() {
        if (!this.isDraggable || !this.isPointerDown) return;
        // change the position to drag position by applying force
        var dragVelocity = this.dragX - this.x;
        var dragForce = dragVelocity - this.velocity;
        this.applyForce(dragForce);
    };
    proto.applySelectedAttraction = function() {
        // do not attract if pointer down or no slides
        var dragDown = this.isDraggable && this.isPointerDown;
        if (dragDown || this.isFreeScrolling || !this.slides.length) return;
        var distance = this.selectedSlide.target * -1 - this.x;
        var force = distance * this.options.selectedAttraction;
        this.applyForce(force);
    };
    return proto;
});

},{"1e52957a1ff1b7bd":"l5E56"}],"fplVG":[function(require,module,exports) {
// drag
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "unidragger/unidragger",
        "fizzy-ui-utils/utils"
    ], function(Flickity, Unidragger, utils) {
        return factory(window1, Flickity, Unidragger, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("d40d64ed30f1bf77"), require("86ba687567ee797"), require("ac8d1ac140a5d50e"));
    else // browser global
    window1.Flickity = factory(window1, window1.Flickity, window1.Unidragger, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, Unidragger, utils) {
    "use strict";
    // ----- defaults ----- //
    utils.extend(Flickity.defaults, {
        draggable: ">1",
        dragThreshold: 3
    });
    // ----- create ----- //
    Flickity.createMethods.push("_createDrag");
    // -------------------------- drag prototype -------------------------- //
    var proto = Flickity.prototype;
    utils.extend(proto, Unidragger.prototype);
    proto._touchActionValue = "pan-y";
    // --------------------------  -------------------------- //
    var isTouch = "createTouch" in document;
    var isTouchmoveScrollCanceled = false;
    proto._createDrag = function() {
        this.on("activate", this.onActivateDrag);
        this.on("uiChange", this._uiChangeDrag);
        this.on("deactivate", this.onDeactivateDrag);
        this.on("cellChange", this.updateDraggable);
        // TODO updateDraggable on resize? if groupCells & slides change
        // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
        // #457, RubaXa/Sortable#973
        if (isTouch && !isTouchmoveScrollCanceled) {
            window1.addEventListener("touchmove", function() {});
            isTouchmoveScrollCanceled = true;
        }
    };
    proto.onActivateDrag = function() {
        this.handles = [
            this.viewport
        ];
        this.bindHandles();
        this.updateDraggable();
    };
    proto.onDeactivateDrag = function() {
        this.unbindHandles();
        this.element.classList.remove("is-draggable");
    };
    proto.updateDraggable = function() {
        // disable dragging if less than 2 slides. #278
        if (this.options.draggable == ">1") this.isDraggable = this.slides.length > 1;
        else this.isDraggable = this.options.draggable;
        if (this.isDraggable) this.element.classList.add("is-draggable");
        else this.element.classList.remove("is-draggable");
    };
    // backwards compatibility
    proto.bindDrag = function() {
        this.options.draggable = true;
        this.updateDraggable();
    };
    proto.unbindDrag = function() {
        this.options.draggable = false;
        this.updateDraggable();
    };
    proto._uiChangeDrag = function() {
        delete this.isFreeScrolling;
    };
    // -------------------------- pointer events -------------------------- //
    proto.pointerDown = function(event, pointer) {
        if (!this.isDraggable) {
            this._pointerDownDefault(event, pointer);
            return;
        }
        var isOkay = this.okayPointerDown(event);
        if (!isOkay) return;
        this._pointerDownPreventDefault(event);
        this.pointerDownFocus(event);
        // blur
        if (document.activeElement != this.element) // do not blur if already focused
        this.pointerDownBlur();
        // stop if it was moving
        this.dragX = this.x;
        this.viewport.classList.add("is-pointer-down");
        // track scrolling
        this.pointerDownScroll = getScrollPosition();
        window1.addEventListener("scroll", this);
        this._pointerDownDefault(event, pointer);
    };
    // default pointerDown logic, used for staticClick
    proto._pointerDownDefault = function(event, pointer) {
        // track start event position
        // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
        this.pointerDownPointer = {
            pageX: pointer.pageX,
            pageY: pointer.pageY
        };
        // bind move and end events
        this._bindPostStartEvents(event);
        this.dispatchEvent("pointerDown", event, [
            pointer
        ]);
    };
    var focusNodes = {
        INPUT: true,
        TEXTAREA: true,
        SELECT: true
    };
    proto.pointerDownFocus = function(event) {
        var isFocusNode = focusNodes[event.target.nodeName];
        if (!isFocusNode) this.focus();
    };
    proto._pointerDownPreventDefault = function(event) {
        var isTouchStart = event.type == "touchstart";
        var isTouchPointer = event.pointerType == "touch";
        var isFocusNode = focusNodes[event.target.nodeName];
        if (!isTouchStart && !isTouchPointer && !isFocusNode) event.preventDefault();
    };
    // ----- move ----- //
    proto.hasDragStarted = function(moveVector) {
        return Math.abs(moveVector.x) > this.options.dragThreshold;
    };
    // ----- up ----- //
    proto.pointerUp = function(event, pointer) {
        delete this.isTouchScrolling;
        this.viewport.classList.remove("is-pointer-down");
        this.dispatchEvent("pointerUp", event, [
            pointer
        ]);
        this._dragPointerUp(event, pointer);
    };
    proto.pointerDone = function() {
        window1.removeEventListener("scroll", this);
        delete this.pointerDownScroll;
    };
    // -------------------------- dragging -------------------------- //
    proto.dragStart = function(event, pointer) {
        if (!this.isDraggable) return;
        this.dragStartPosition = this.x;
        this.startAnimation();
        window1.removeEventListener("scroll", this);
        this.dispatchEvent("dragStart", event, [
            pointer
        ]);
    };
    proto.pointerMove = function(event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);
        this.dispatchEvent("pointerMove", event, [
            pointer,
            moveVector
        ]);
        this._dragMove(event, pointer, moveVector);
    };
    proto.dragMove = function(event, pointer, moveVector) {
        if (!this.isDraggable) return;
        event.preventDefault();
        this.previousDragX = this.dragX;
        // reverse if right-to-left
        var direction = this.options.rightToLeft ? -1 : 1;
        if (this.options.wrapAround) // wrap around move. #589
        moveVector.x %= this.slideableWidth;
        var dragX = this.dragStartPosition + moveVector.x * direction;
        if (!this.options.wrapAround && this.slides.length) {
            // slow drag
            var originBound = Math.max(-this.slides[0].target, this.dragStartPosition);
            dragX = dragX > originBound ? (dragX + originBound) * 0.5 : dragX;
            var endBound = Math.min(-this.getLastSlide().target, this.dragStartPosition);
            dragX = dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
        }
        this.dragX = dragX;
        this.dragMoveTime = new Date();
        this.dispatchEvent("dragMove", event, [
            pointer,
            moveVector
        ]);
    };
    proto.dragEnd = function(event, pointer) {
        if (!this.isDraggable) return;
        if (this.options.freeScroll) this.isFreeScrolling = true;
        // set selectedIndex based on where flick will end up
        var index = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            // if free-scroll & not wrap around
            // do not free-scroll if going outside of bounding slides
            // so bounding slides can attract slider, and keep it in bounds
            var restingX = this.getRestingPosition();
            this.isFreeScrolling = -restingX > this.slides[0].target && -restingX < this.getLastSlide().target;
        } else if (!this.options.freeScroll && index == this.selectedIndex) // boost selection if selected index has not changed
        index += this.dragEndBoostSelect();
        delete this.previousDragX;
        // apply selection
        // TODO refactor this, selecting here feels weird
        // HACK, set flag so dragging stays in correct direction
        this.isDragSelect = this.options.wrapAround;
        this.select(index);
        delete this.isDragSelect;
        this.dispatchEvent("dragEnd", event, [
            pointer
        ]);
    };
    proto.dragEndRestingSelect = function() {
        var restingX = this.getRestingPosition();
        // how far away from selected slide
        var distance = Math.abs(this.getSlideDistance(-restingX, this.selectedIndex));
        // get closet resting going up and going down
        var positiveResting = this._getClosestResting(restingX, distance, 1);
        var negativeResting = this._getClosestResting(restingX, distance, -1);
        // use closer resting for wrap-around
        var index = positiveResting.distance < negativeResting.distance ? positiveResting.index : negativeResting.index;
        return index;
    };
    /**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */ proto._getClosestResting = function(restingX, distance, increment) {
        var index = this.selectedIndex;
        var minDistance = Infinity;
        var condition = this.options.contain && !this.options.wrapAround ? // if contain, keep going if distance is equal to minDistance
        function(dist, minDist) {
            return dist <= minDist;
        } : function(dist, minDist) {
            return dist < minDist;
        };
        while(condition(distance, minDistance)){
            // measure distance to next cell
            index += increment;
            minDistance = distance;
            distance = this.getSlideDistance(-restingX, index);
            if (distance === null) break;
            distance = Math.abs(distance);
        }
        return {
            distance: minDistance,
            // selected was previous index
            index: index - increment
        };
    };
    /**
 * measure distance between x and a slide target
 * @param {Number} x - horizontal position
 * @param {Integer} index - slide index
 * @returns {Number} - slide distance
 */ proto.getSlideDistance = function(x, index) {
        var len = this.slides.length;
        // wrap around if at least 2 slides
        var isWrapAround = this.options.wrapAround && len > 1;
        var slideIndex = isWrapAround ? utils.modulo(index, len) : index;
        var slide = this.slides[slideIndex];
        if (!slide) return null;
        // add distance for wrap-around slides
        var wrap = isWrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
        return x - (slide.target + wrap);
    };
    proto.dragEndBoostSelect = function() {
        // do not boost if no previousDragX or dragMoveTime
        if (this.previousDragX === undefined || !this.dragMoveTime || // or if drag was held for 100 ms
        new Date() - this.dragMoveTime > 100) return 0;
        var distance = this.getSlideDistance(-this.dragX, this.selectedIndex);
        var delta = this.previousDragX - this.dragX;
        if (distance > 0 && delta > 0) // boost to next if moving towards the right, and positive velocity
        return 1;
        else if (distance < 0 && delta < 0) // boost to previous if moving towards the left, and negative velocity
        return -1;
        return 0;
    };
    // ----- staticClick ----- //
    proto.staticClick = function(event, pointer) {
        // get clickedCell, if cell was clicked
        var clickedCell = this.getParentCell(event.target);
        var cellElem = clickedCell && clickedCell.element;
        var cellIndex = clickedCell && this.cells.indexOf(clickedCell);
        this.dispatchEvent("staticClick", event, [
            pointer,
            cellElem,
            cellIndex
        ]);
    };
    // ----- scroll ----- //
    proto.onscroll = function() {
        var scroll = getScrollPosition();
        var scrollMoveX = this.pointerDownScroll.x - scroll.x;
        var scrollMoveY = this.pointerDownScroll.y - scroll.y;
        // cancel click/tap if scroll is too much
        if (Math.abs(scrollMoveX) > 3 || Math.abs(scrollMoveY) > 3) this._pointerDone();
    };
    // ----- utils ----- //
    function getScrollPosition() {
        return {
            x: window1.pageXOffset,
            y: window1.pageYOffset
        };
    }
    // -----  ----- //
    return Flickity;
});

},{"d40d64ed30f1bf77":"lqXaA","86ba687567ee797":"2Lloh","ac8d1ac140a5d50e":"l5E56"}],"2Lloh":[function(require,module,exports) {
/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */ /*jshint browser: true, unused: true, undef: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "unipointer/unipointer"
    ], function(Unipointer) {
        return factory(window1, Unipointer);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("668741c9e93bb99c"));
    else // browser global
    window1.Unidragger = factory(window1, window1.Unipointer);
})(window, function factory(window1, Unipointer) {
    "use strict";
    // -------------------------- Unidragger -------------------------- //
    function Unidragger() {}
    // inherit Unipointer & EvEmitter
    var proto = Unidragger.prototype = Object.create(Unipointer.prototype);
    // ----- bind start ----- //
    proto.bindHandles = function() {
        this._bindHandles(true);
    };
    proto.unbindHandles = function() {
        this._bindHandles(false);
    };
    /**
 * Add or remove start event
 * @param {Boolean} isAdd
 */ proto._bindHandles = function(isAdd) {
        // munge isAdd, default to true
        isAdd = isAdd === undefined ? true : isAdd;
        // bind each handle
        var bindMethod = isAdd ? "addEventListener" : "removeEventListener";
        var touchAction = isAdd ? this._touchActionValue : "";
        for(var i = 0; i < this.handles.length; i++){
            var handle = this.handles[i];
            this._bindStartEvent(handle, isAdd);
            handle[bindMethod]("click", this);
            // touch-action: none to override browser touch gestures. metafizzy/flickity#540
            if (window1.PointerEvent) handle.style.touchAction = touchAction;
        }
    };
    // prototype so it can be overwriteable by Flickity
    proto._touchActionValue = "none";
    // ----- start event ----- //
    /**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto.pointerDown = function(event, pointer) {
        var isOkay = this.okayPointerDown(event);
        if (!isOkay) return;
        // track start event position
        // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
        this.pointerDownPointer = {
            pageX: pointer.pageX,
            pageY: pointer.pageY
        };
        event.preventDefault();
        this.pointerDownBlur();
        // bind move and end events
        this._bindPostStartEvents(event);
        this.emitEvent("pointerDown", [
            event,
            pointer
        ]);
    };
    // nodes that have text fields
    var cursorNodes = {
        TEXTAREA: true,
        INPUT: true,
        SELECT: true,
        OPTION: true
    };
    // input types that do not have text fields
    var clickTypes = {
        radio: true,
        checkbox: true,
        button: true,
        submit: true,
        image: true,
        file: true
    };
    // dismiss inputs with text fields. flickity#403, flickity#404
    proto.okayPointerDown = function(event) {
        var isCursorNode = cursorNodes[event.target.nodeName];
        var isClickType = clickTypes[event.target.type];
        var isOkay = !isCursorNode || isClickType;
        if (!isOkay) this._pointerReset();
        return isOkay;
    };
    // kludge to blur previously focused input
    proto.pointerDownBlur = function() {
        var focused = document.activeElement;
        // do not blur body for IE10, metafizzy/flickity#117
        var canBlur = focused && focused.blur && focused != document.body;
        if (canBlur) focused.blur();
    };
    // ----- move event ----- //
    /**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto.pointerMove = function(event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);
        this.emitEvent("pointerMove", [
            event,
            pointer,
            moveVector
        ]);
        this._dragMove(event, pointer, moveVector);
    };
    // base pointer move logic
    proto._dragPointerMove = function(event, pointer) {
        var moveVector = {
            x: pointer.pageX - this.pointerDownPointer.pageX,
            y: pointer.pageY - this.pointerDownPointer.pageY
        };
        // start drag if pointer has moved far enough to start drag
        if (!this.isDragging && this.hasDragStarted(moveVector)) this._dragStart(event, pointer);
        return moveVector;
    };
    // condition if pointer has moved far enough to start drag
    proto.hasDragStarted = function(moveVector) {
        return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
    };
    // ----- end event ----- //
    /**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto.pointerUp = function(event, pointer) {
        this.emitEvent("pointerUp", [
            event,
            pointer
        ]);
        this._dragPointerUp(event, pointer);
    };
    proto._dragPointerUp = function(event, pointer) {
        if (this.isDragging) this._dragEnd(event, pointer);
        else // pointer didn't move enough for drag to start
        this._staticClick(event, pointer);
    };
    // -------------------------- drag -------------------------- //
    // dragStart
    proto._dragStart = function(event, pointer) {
        this.isDragging = true;
        // prevent clicks
        this.isPreventingClicks = true;
        this.dragStart(event, pointer);
    };
    proto.dragStart = function(event, pointer) {
        this.emitEvent("dragStart", [
            event,
            pointer
        ]);
    };
    // dragMove
    proto._dragMove = function(event, pointer, moveVector) {
        // do not drag if not dragging yet
        if (!this.isDragging) return;
        this.dragMove(event, pointer, moveVector);
    };
    proto.dragMove = function(event, pointer, moveVector) {
        event.preventDefault();
        this.emitEvent("dragMove", [
            event,
            pointer,
            moveVector
        ]);
    };
    // dragEnd
    proto._dragEnd = function(event, pointer) {
        // set flags
        this.isDragging = false;
        // re-enable clicking async
        setTimeout((function() {
            delete this.isPreventingClicks;
        }).bind(this));
        this.dragEnd(event, pointer);
    };
    proto.dragEnd = function(event, pointer) {
        this.emitEvent("dragEnd", [
            event,
            pointer
        ]);
    };
    // ----- onclick ----- //
    // handle all clicks and prevent clicks when dragging
    proto.onclick = function(event) {
        if (this.isPreventingClicks) event.preventDefault();
    };
    // ----- staticClick ----- //
    // triggered after pointer down & up with no/tiny movement
    proto._staticClick = function(event, pointer) {
        // ignore emulated mouse up clicks
        if (this.isIgnoringMouseUp && event.type == "mouseup") return;
        this.staticClick(event, pointer);
        // set flag for emulated clicks 300ms after touchend
        if (event.type != "mouseup") {
            this.isIgnoringMouseUp = true;
            // reset flag after 300ms
            setTimeout((function() {
                delete this.isIgnoringMouseUp;
            }).bind(this), 400);
        }
    };
    proto.staticClick = function(event, pointer) {
        this.emitEvent("staticClick", [
            event,
            pointer
        ]);
    };
    // ----- utils ----- //
    Unidragger.getPointerPoint = Unipointer.getPointerPoint;
    // -----  ----- //
    return Unidragger;
});

},{"668741c9e93bb99c":"8cmqm"}],"8cmqm":[function(require,module,exports) {
/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*global define, module, require */ if (typeof define == "function" && define.amd) // AMD
    define([
        "ev-emitter/ev-emitter"
    ], function(EvEmitter) {
        return factory(window1, EvEmitter);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("5e002a009fae883c"));
    else // browser global
    window1.Unipointer = factory(window1, window1.EvEmitter);
})(window, function factory(window1, EvEmitter) {
    "use strict";
    function noop() {}
    function Unipointer() {}
    // inherit EvEmitter
    var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);
    proto.bindStartEvent = function(elem) {
        this._bindStartEvent(elem, true);
    };
    proto.unbindStartEvent = function(elem) {
        this._bindStartEvent(elem, false);
    };
    /**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */ proto._bindStartEvent = function(elem, isAdd) {
        // munge isAdd, default to true
        isAdd = isAdd === undefined ? true : isAdd;
        var bindMethod = isAdd ? "addEventListener" : "removeEventListener";
        // default to mouse events
        var startEvent = "mousedown";
        if ("ontouchstart" in window1) // HACK prefer Touch Events as you can preventDefault on touchstart to
        // disable scroll in iOS & mobile Chrome metafizzy/flickity#1177
        startEvent = "touchstart";
        else if (window1.PointerEvent) // Pointer Events
        startEvent = "pointerdown";
        elem[bindMethod](startEvent, this);
    };
    // trigger handler methods for events
    proto.handleEvent = function(event) {
        var method = "on" + event.type;
        if (this[method]) this[method](event);
    };
    // returns the touch that we're keeping track of
    proto.getTouch = function(touches) {
        for(var i = 0; i < touches.length; i++){
            var touch = touches[i];
            if (touch.identifier == this.pointerIdentifier) return touch;
        }
    };
    // ----- start event ----- //
    proto.onmousedown = function(event) {
        // dismiss clicks from right or middle buttons
        var button = event.button;
        if (button && button !== 0 && button !== 1) return;
        this._pointerDown(event, event);
    };
    proto.ontouchstart = function(event) {
        this._pointerDown(event, event.changedTouches[0]);
    };
    proto.onpointerdown = function(event) {
        this._pointerDown(event, event);
    };
    /**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto._pointerDown = function(event, pointer) {
        // dismiss right click and other pointers
        // button = 0 is okay, 1-4 not
        if (event.button || this.isPointerDown) return;
        this.isPointerDown = true;
        // save pointer identifier to match up touch events
        this.pointerIdentifier = pointer.pointerId !== undefined ? // pointerId for pointer events, touch.indentifier for touch events
        pointer.pointerId : pointer.identifier;
        this.pointerDown(event, pointer);
    };
    proto.pointerDown = function(event, pointer) {
        this._bindPostStartEvents(event);
        this.emitEvent("pointerDown", [
            event,
            pointer
        ]);
    };
    // hash of events to be bound after start event
    var postStartEvents = {
        mousedown: [
            "mousemove",
            "mouseup"
        ],
        touchstart: [
            "touchmove",
            "touchend",
            "touchcancel"
        ],
        pointerdown: [
            "pointermove",
            "pointerup",
            "pointercancel"
        ]
    };
    proto._bindPostStartEvents = function(event) {
        if (!event) return;
        // get proper events to match start event
        var events = postStartEvents[event.type];
        // bind events to node
        events.forEach(function(eventName) {
            window1.addEventListener(eventName, this);
        }, this);
        // save these arguments
        this._boundPointerEvents = events;
    };
    proto._unbindPostStartEvents = function() {
        // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
        if (!this._boundPointerEvents) return;
        this._boundPointerEvents.forEach(function(eventName) {
            window1.removeEventListener(eventName, this);
        }, this);
        delete this._boundPointerEvents;
    };
    // ----- move event ----- //
    proto.onmousemove = function(event) {
        this._pointerMove(event, event);
    };
    proto.onpointermove = function(event) {
        if (event.pointerId == this.pointerIdentifier) this._pointerMove(event, event);
    };
    proto.ontouchmove = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) this._pointerMove(event, touch);
    };
    /**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */ proto._pointerMove = function(event, pointer) {
        this.pointerMove(event, pointer);
    };
    // public
    proto.pointerMove = function(event, pointer) {
        this.emitEvent("pointerMove", [
            event,
            pointer
        ]);
    };
    // ----- end event ----- //
    proto.onmouseup = function(event) {
        this._pointerUp(event, event);
    };
    proto.onpointerup = function(event) {
        if (event.pointerId == this.pointerIdentifier) this._pointerUp(event, event);
    };
    proto.ontouchend = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) this._pointerUp(event, touch);
    };
    /**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */ proto._pointerUp = function(event, pointer) {
        this._pointerDone();
        this.pointerUp(event, pointer);
    };
    // public
    proto.pointerUp = function(event, pointer) {
        this.emitEvent("pointerUp", [
            event,
            pointer
        ]);
    };
    // ----- pointer done ----- //
    // triggered on pointer up & pointer cancel
    proto._pointerDone = function() {
        this._pointerReset();
        this._unbindPostStartEvents();
        this.pointerDone();
    };
    proto._pointerReset = function() {
        // reset properties
        this.isPointerDown = false;
        delete this.pointerIdentifier;
    };
    proto.pointerDone = noop;
    // ----- pointer cancel ----- //
    proto.onpointercancel = function(event) {
        if (event.pointerId == this.pointerIdentifier) this._pointerCancel(event, event);
    };
    proto.ontouchcancel = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) this._pointerCancel(event, touch);
    };
    /**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */ proto._pointerCancel = function(event, pointer) {
        this._pointerDone();
        this.pointerCancel(event, pointer);
    };
    // public
    proto.pointerCancel = function(event, pointer) {
        this.emitEvent("pointerCancel", [
            event,
            pointer
        ]);
    };
    // -----  ----- //
    // utility function for getting x/y coords from event
    Unipointer.getPointerPoint = function(pointer) {
        return {
            x: pointer.pageX,
            y: pointer.pageY
        };
    };
    // -----  ----- //
    return Unipointer;
});

},{"5e002a009fae883c":"cYzr6"}],"5sFqy":[function(require,module,exports) {
// prev/next buttons
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "unipointer/unipointer",
        "fizzy-ui-utils/utils"
    ], function(Flickity, Unipointer, utils) {
        return factory(window1, Flickity, Unipointer, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("86c844a3c95b4c7b"), require("f19d11d2c4d740a0"), require("3f52ff90f00cdcb1"));
    else // browser global
    factory(window1, window1.Flickity, window1.Unipointer, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, Unipointer, utils) {
    "use strict";
    var svgURI = "http://www.w3.org/2000/svg";
    // -------------------------- PrevNextButton -------------------------- //
    function PrevNextButton(direction, parent) {
        this.direction = direction;
        this.parent = parent;
        this._create();
    }
    PrevNextButton.prototype = Object.create(Unipointer.prototype);
    PrevNextButton.prototype._create = function() {
        // properties
        this.isEnabled = true;
        this.isPrevious = this.direction == -1;
        var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == leftDirection;
        var element = this.element = document.createElement("button");
        element.className = "flickity-button flickity-prev-next-button";
        element.className += this.isPrevious ? " previous" : " next";
        // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
        element.setAttribute("type", "button");
        // init as disabled
        this.disable();
        element.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        // create arrow
        var svg = this.createSVG();
        element.appendChild(svg);
        // events
        this.parent.on("select", this.update.bind(this));
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
    };
    PrevNextButton.prototype.activate = function() {
        this.bindStartEvent(this.element);
        this.element.addEventListener("click", this);
        // add to DOM
        this.parent.element.appendChild(this.element);
    };
    PrevNextButton.prototype.deactivate = function() {
        // remove from DOM
        this.parent.element.removeChild(this.element);
        // click events
        this.unbindStartEvent(this.element);
        this.element.removeEventListener("click", this);
    };
    PrevNextButton.prototype.createSVG = function() {
        var svg = document.createElementNS(svgURI, "svg");
        svg.setAttribute("class", "flickity-button-icon");
        svg.setAttribute("viewBox", "0 0 100 100");
        var path = document.createElementNS(svgURI, "path");
        var pathMovements = getArrowMovements(this.parent.options.arrowShape);
        path.setAttribute("d", pathMovements);
        path.setAttribute("class", "arrow");
        // rotate arrow
        if (!this.isLeft) path.setAttribute("transform", "translate(100, 100) rotate(180) ");
        svg.appendChild(path);
        return svg;
    };
    // get SVG path movmement
    function getArrowMovements(shape) {
        // use shape as movement if string
        if (typeof shape == "string") return shape;
        // create movement string
        return "M " + shape.x0 + ",50" + " L " + shape.x1 + "," + (shape.y1 + 50) + " L " + shape.x2 + "," + (shape.y2 + 50) + " L " + shape.x3 + ",50 " + " L " + shape.x2 + "," + (50 - shape.y2) + " L " + shape.x1 + "," + (50 - shape.y1) + " Z";
    }
    PrevNextButton.prototype.handleEvent = utils.handleEvent;
    PrevNextButton.prototype.onclick = function() {
        if (!this.isEnabled) return;
        this.parent.uiChange();
        var method = this.isPrevious ? "previous" : "next";
        this.parent[method]();
    };
    // -----  ----- //
    PrevNextButton.prototype.enable = function() {
        if (this.isEnabled) return;
        this.element.disabled = false;
        this.isEnabled = true;
    };
    PrevNextButton.prototype.disable = function() {
        if (!this.isEnabled) return;
        this.element.disabled = true;
        this.isEnabled = false;
    };
    PrevNextButton.prototype.update = function() {
        // index of first or last slide, if previous or next
        var slides = this.parent.slides;
        // enable is wrapAround and at least 2 slides
        if (this.parent.options.wrapAround && slides.length > 1) {
            this.enable();
            return;
        }
        var lastIndex = slides.length ? slides.length - 1 : 0;
        var boundIndex = this.isPrevious ? 0 : lastIndex;
        var method = this.parent.selectedIndex == boundIndex ? "disable" : "enable";
        this[method]();
    };
    PrevNextButton.prototype.destroy = function() {
        this.deactivate();
        this.allOff();
    };
    // -------------------------- Flickity prototype -------------------------- //
    utils.extend(Flickity.defaults, {
        prevNextButtons: true,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    });
    Flickity.createMethods.push("_createPrevNextButtons");
    var proto = Flickity.prototype;
    proto._createPrevNextButtons = function() {
        if (!this.options.prevNextButtons) return;
        this.prevButton = new PrevNextButton(-1, this);
        this.nextButton = new PrevNextButton(1, this);
        this.on("activate", this.activatePrevNextButtons);
    };
    proto.activatePrevNextButtons = function() {
        this.prevButton.activate();
        this.nextButton.activate();
        this.on("deactivate", this.deactivatePrevNextButtons);
    };
    proto.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate();
        this.nextButton.deactivate();
        this.off("deactivate", this.deactivatePrevNextButtons);
    };
    // --------------------------  -------------------------- //
    Flickity.PrevNextButton = PrevNextButton;
    return Flickity;
});

},{"86c844a3c95b4c7b":"lqXaA","f19d11d2c4d740a0":"8cmqm","3f52ff90f00cdcb1":"l5E56"}],"aRztI":[function(require,module,exports) {
// page dots
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "unipointer/unipointer",
        "fizzy-ui-utils/utils"
    ], function(Flickity, Unipointer, utils) {
        return factory(window1, Flickity, Unipointer, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("21635259d02ab6d4"), require("c9357f33874c5116"), require("c50c0cd4d2022f0d"));
    else // browser global
    factory(window1, window1.Flickity, window1.Unipointer, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, Unipointer, utils) {
    // -------------------------- PageDots -------------------------- //
    "use strict";
    function PageDots(parent) {
        this.parent = parent;
        this._create();
    }
    PageDots.prototype = Object.create(Unipointer.prototype);
    PageDots.prototype._create = function() {
        // create holder element
        this.holder = document.createElement("ol");
        this.holder.className = "flickity-page-dots";
        // create dots, array of elements
        this.dots = [];
        // events
        this.handleClick = this.onClick.bind(this);
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
    };
    PageDots.prototype.activate = function() {
        this.setDots();
        this.holder.addEventListener("click", this.handleClick);
        this.bindStartEvent(this.holder);
        // add to DOM
        this.parent.element.appendChild(this.holder);
    };
    PageDots.prototype.deactivate = function() {
        this.holder.removeEventListener("click", this.handleClick);
        this.unbindStartEvent(this.holder);
        // remove from DOM
        this.parent.element.removeChild(this.holder);
    };
    PageDots.prototype.setDots = function() {
        // get difference between number of slides and number of dots
        var delta = this.parent.slides.length - this.dots.length;
        if (delta > 0) this.addDots(delta);
        else if (delta < 0) this.removeDots(-delta);
    };
    PageDots.prototype.addDots = function(count) {
        var fragment = document.createDocumentFragment();
        var newDots = [];
        var length = this.dots.length;
        var max = length + count;
        for(var i = length; i < max; i++){
            var dot = document.createElement("li");
            dot.className = "dot";
            dot.setAttribute("aria-label", "Page dot " + (i + 1));
            fragment.appendChild(dot);
            newDots.push(dot);
        }
        this.holder.appendChild(fragment);
        this.dots = this.dots.concat(newDots);
    };
    PageDots.prototype.removeDots = function(count) {
        // remove from this.dots collection
        var removeDots = this.dots.splice(this.dots.length - count, count);
        // remove from DOM
        removeDots.forEach(function(dot) {
            this.holder.removeChild(dot);
        }, this);
    };
    PageDots.prototype.updateSelected = function() {
        // remove selected class on previous
        if (this.selectedDot) {
            this.selectedDot.className = "dot";
            this.selectedDot.removeAttribute("aria-current");
        }
        // don't proceed if no dots
        if (!this.dots.length) return;
        this.selectedDot = this.dots[this.parent.selectedIndex];
        this.selectedDot.className = "dot is-selected";
        this.selectedDot.setAttribute("aria-current", "step");
    };
    PageDots.prototype.onTap = PageDots.prototype.onClick = function(event) {
        var target = event.target;
        // only care about dot clicks
        if (target.nodeName != "LI") return;
        this.parent.uiChange();
        var index = this.dots.indexOf(target);
        this.parent.select(index);
    };
    PageDots.prototype.destroy = function() {
        this.deactivate();
        this.allOff();
    };
    Flickity.PageDots = PageDots;
    // -------------------------- Flickity -------------------------- //
    utils.extend(Flickity.defaults, {
        pageDots: true
    });
    Flickity.createMethods.push("_createPageDots");
    var proto = Flickity.prototype;
    proto._createPageDots = function() {
        if (!this.options.pageDots) return;
        this.pageDots = new PageDots(this);
        // events
        this.on("activate", this.activatePageDots);
        this.on("select", this.updateSelectedPageDots);
        this.on("cellChange", this.updatePageDots);
        this.on("resize", this.updatePageDots);
        this.on("deactivate", this.deactivatePageDots);
    };
    proto.activatePageDots = function() {
        this.pageDots.activate();
    };
    proto.updateSelectedPageDots = function() {
        this.pageDots.updateSelected();
    };
    proto.updatePageDots = function() {
        this.pageDots.setDots();
    };
    proto.deactivatePageDots = function() {
        this.pageDots.deactivate();
    };
    // -----  ----- //
    Flickity.PageDots = PageDots;
    return Flickity;
});

},{"21635259d02ab6d4":"lqXaA","c9357f33874c5116":"8cmqm","c50c0cd4d2022f0d":"l5E56"}],"9u4yR":[function(require,module,exports) {
// player & autoPlay
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "ev-emitter/ev-emitter",
        "fizzy-ui-utils/utils",
        "./flickity"
    ], function(EvEmitter, utils, Flickity) {
        return factory(EvEmitter, utils, Flickity);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("ca77fcfb076b879"), require("96169aea6b8aee65"), require("43c2ad06d8fc3b6"));
    else // browser global
    factory(window1.EvEmitter, window1.fizzyUIUtils, window1.Flickity);
})(window, function factory(EvEmitter, utils, Flickity) {
    "use strict";
    // -------------------------- Player -------------------------- //
    function Player(parent) {
        this.parent = parent;
        this.state = "stopped";
        // visibility change event handler
        this.onVisibilityChange = this.visibilityChange.bind(this);
        this.onVisibilityPlay = this.visibilityPlay.bind(this);
    }
    Player.prototype = Object.create(EvEmitter.prototype);
    // start play
    Player.prototype.play = function() {
        if (this.state == "playing") return;
        // do not play if page is hidden, start playing when page is visible
        var isPageHidden = document.hidden;
        if (isPageHidden) {
            document.addEventListener("visibilitychange", this.onVisibilityPlay);
            return;
        }
        this.state = "playing";
        // listen to visibility change
        document.addEventListener("visibilitychange", this.onVisibilityChange);
        // start ticking
        this.tick();
    };
    Player.prototype.tick = function() {
        // do not tick if not playing
        if (this.state != "playing") return;
        var time = this.parent.options.autoPlay;
        // default to 3 seconds
        time = typeof time == "number" ? time : 3000;
        var _this = this;
        // HACK: reset ticks if stopped and started within interval
        this.clear();
        this.timeout = setTimeout(function() {
            _this.parent.next(true);
            _this.tick();
        }, time);
    };
    Player.prototype.stop = function() {
        this.state = "stopped";
        this.clear();
        // remove visibility change event
        document.removeEventListener("visibilitychange", this.onVisibilityChange);
    };
    Player.prototype.clear = function() {
        clearTimeout(this.timeout);
    };
    Player.prototype.pause = function() {
        if (this.state == "playing") {
            this.state = "paused";
            this.clear();
        }
    };
    Player.prototype.unpause = function() {
        // re-start play if paused
        if (this.state == "paused") this.play();
    };
    // pause if page visibility is hidden, unpause if visible
    Player.prototype.visibilityChange = function() {
        var isPageHidden = document.hidden;
        this[isPageHidden ? "pause" : "unpause"]();
    };
    Player.prototype.visibilityPlay = function() {
        this.play();
        document.removeEventListener("visibilitychange", this.onVisibilityPlay);
    };
    // -------------------------- Flickity -------------------------- //
    utils.extend(Flickity.defaults, {
        pauseAutoPlayOnHover: true
    });
    Flickity.createMethods.push("_createPlayer");
    var proto = Flickity.prototype;
    proto._createPlayer = function() {
        this.player = new Player(this);
        this.on("activate", this.activatePlayer);
        this.on("uiChange", this.stopPlayer);
        this.on("pointerDown", this.stopPlayer);
        this.on("deactivate", this.deactivatePlayer);
    };
    proto.activatePlayer = function() {
        if (!this.options.autoPlay) return;
        this.player.play();
        this.element.addEventListener("mouseenter", this);
    };
    // Player API, don't hate the ... thanks I know where the door is
    proto.playPlayer = function() {
        this.player.play();
    };
    proto.stopPlayer = function() {
        this.player.stop();
    };
    proto.pausePlayer = function() {
        this.player.pause();
    };
    proto.unpausePlayer = function() {
        this.player.unpause();
    };
    proto.deactivatePlayer = function() {
        this.player.stop();
        this.element.removeEventListener("mouseenter", this);
    };
    // ----- mouseenter/leave ----- //
    // pause auto-play on hover
    proto.onmouseenter = function() {
        if (!this.options.pauseAutoPlayOnHover) return;
        this.player.pause();
        this.element.addEventListener("mouseleave", this);
    };
    // resume auto-play on hover off
    proto.onmouseleave = function() {
        this.player.unpause();
        this.element.removeEventListener("mouseleave", this);
    };
    // -----  ----- //
    Flickity.Player = Player;
    return Flickity;
});

},{"ca77fcfb076b879":"cYzr6","96169aea6b8aee65":"l5E56","43c2ad06d8fc3b6":"lqXaA"}],"ewQZE":[function(require,module,exports) {
// add, remove cell
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "fizzy-ui-utils/utils"
    ], function(Flickity, utils) {
        return factory(window1, Flickity, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("d506693eb6a3628"), require("e88457f9dcce248b"));
    else // browser global
    factory(window1, window1.Flickity, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, utils) {
    "use strict";
    // append cells to a document fragment
    function getCellsFragment(cells) {
        var fragment = document.createDocumentFragment();
        cells.forEach(function(cell) {
            fragment.appendChild(cell.element);
        });
        return fragment;
    }
    // -------------------------- add/remove cell prototype -------------------------- //
    var proto = Flickity.prototype;
    /**
 * Insert, prepend, or append cells
 * @param {[Element, Array, NodeList]} elems - Elements to insert
 * @param {Integer} index - Zero-based number to insert
 */ proto.insert = function(elems, index) {
        var cells = this._makeCells(elems);
        if (!cells || !cells.length) return;
        var len = this.cells.length;
        // default to append
        index = index === undefined ? len : index;
        // add cells with document fragment
        var fragment = getCellsFragment(cells);
        // append to slider
        var isAppend = index == len;
        if (isAppend) this.slider.appendChild(fragment);
        else {
            var insertCellElement = this.cells[index].element;
            this.slider.insertBefore(fragment, insertCellElement);
        }
        // add to this.cells
        if (index === 0) // prepend, add to start
        this.cells = cells.concat(this.cells);
        else if (isAppend) // append, add to end
        this.cells = this.cells.concat(cells);
        else {
            // insert in this.cells
            var endCells = this.cells.splice(index, len - index);
            this.cells = this.cells.concat(cells).concat(endCells);
        }
        this._sizeCells(cells);
        this.cellChange(index, true);
    };
    proto.append = function(elems) {
        this.insert(elems, this.cells.length);
    };
    proto.prepend = function(elems) {
        this.insert(elems, 0);
    };
    /**
 * Remove cells
 * @param {[Element, Array, NodeList]} elems - ELements to remove
 */ proto.remove = function(elems) {
        var cells = this.getCells(elems);
        if (!cells || !cells.length) return;
        var minCellIndex = this.cells.length - 1;
        // remove cells from collection & DOM
        cells.forEach(function(cell) {
            cell.remove();
            var index = this.cells.indexOf(cell);
            minCellIndex = Math.min(index, minCellIndex);
            utils.removeFrom(this.cells, cell);
        }, this);
        this.cellChange(minCellIndex, true);
    };
    /**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */ proto.cellSizeChange = function(elem) {
        var cell = this.getCell(elem);
        if (!cell) return;
        cell.getSize();
        var index = this.cells.indexOf(cell);
        this.cellChange(index);
    };
    /**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 * @param {Boolean} isPositioningSlider - Positions slider after selection
 */ proto.cellChange = function(changedCellIndex, isPositioningSlider) {
        var prevSelectedElem = this.selectedElement;
        this._positionCells(changedCellIndex);
        this._getWrapShiftCells();
        this.setGallerySize();
        // update selectedIndex
        // try to maintain position & select previous selected element
        var cell = this.getCell(prevSelectedElem);
        if (cell) this.selectedIndex = this.getCellSlideIndex(cell);
        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
        this.emitEvent("cellChange", [
            changedCellIndex
        ]);
        // position slider
        this.select(this.selectedIndex);
        // do not position slider after lazy load
        if (isPositioningSlider) this.positionSliderAtSelected();
    };
    // -----  ----- //
    return Flickity;
});

},{"d506693eb6a3628":"lqXaA","e88457f9dcce248b":"l5E56"}],"73rKt":[function(require,module,exports) {
// lazyload
(function(window1, factory) {
    // universal module definition
    if (typeof define == "function" && define.amd) // AMD
    define([
        "./flickity",
        "fizzy-ui-utils/utils"
    ], function(Flickity, utils) {
        return factory(window1, Flickity, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("74a714f84255b2e2"), require("fa4aaf42fafa550b"));
    else // browser global
    factory(window1, window1.Flickity, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, utils) {
    "use strict";
    Flickity.createMethods.push("_createLazyload");
    var proto = Flickity.prototype;
    proto._createLazyload = function() {
        this.on("select", this.lazyLoad);
    };
    proto.lazyLoad = function() {
        var lazyLoad = this.options.lazyLoad;
        if (!lazyLoad) return;
        // get adjacent cells, use lazyLoad option for adjacent count
        var adjCount = typeof lazyLoad == "number" ? lazyLoad : 0;
        var cellElems = this.getAdjacentCellElements(adjCount);
        // get lazy images in those cells
        var lazyImages = [];
        cellElems.forEach(function(cellElem) {
            var lazyCellImages = getCellLazyImages(cellElem);
            lazyImages = lazyImages.concat(lazyCellImages);
        });
        // load lazy images
        lazyImages.forEach(function(img) {
            new LazyLoader(img, this);
        }, this);
    };
    function getCellLazyImages(cellElem) {
        // check if cell element is lazy image
        if (cellElem.nodeName == "IMG") {
            var lazyloadAttr = cellElem.getAttribute("data-flickity-lazyload");
            var srcAttr = cellElem.getAttribute("data-flickity-lazyload-src");
            var srcsetAttr = cellElem.getAttribute("data-flickity-lazyload-srcset");
            if (lazyloadAttr || srcAttr || srcsetAttr) return [
                cellElem
            ];
        }
        // select lazy images in cell
        var lazySelector = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";
        var imgs = cellElem.querySelectorAll(lazySelector);
        return utils.makeArray(imgs);
    }
    // -------------------------- LazyLoader -------------------------- //
    /**
 * class to handle loading images
 * @param {Image} img - Image element
 * @param {Flickity} flickity - Flickity instance
 */ function LazyLoader(img, flickity) {
        this.img = img;
        this.flickity = flickity;
        this.load();
    }
    LazyLoader.prototype.handleEvent = utils.handleEvent;
    LazyLoader.prototype.load = function() {
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        // get src & srcset
        var src = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src");
        var srcset = this.img.getAttribute("data-flickity-lazyload-srcset");
        // set src & serset
        this.img.src = src;
        if (srcset) this.img.setAttribute("srcset", srcset);
        // remove attr
        this.img.removeAttribute("data-flickity-lazyload");
        this.img.removeAttribute("data-flickity-lazyload-src");
        this.img.removeAttribute("data-flickity-lazyload-srcset");
    };
    LazyLoader.prototype.onload = function(event) {
        this.complete(event, "flickity-lazyloaded");
    };
    LazyLoader.prototype.onerror = function(event) {
        this.complete(event, "flickity-lazyerror");
    };
    LazyLoader.prototype.complete = function(event, className) {
        // unbind events
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this);
        var cell = this.flickity.getParentCell(this.img);
        var cellElem = cell && cell.element;
        this.flickity.cellSizeChange(cellElem);
        this.img.classList.add(className);
        this.flickity.dispatchEvent("lazyLoad", event, cellElem);
    };
    // -----  ----- //
    Flickity.LazyLoader = LazyLoader;
    return Flickity;
});

},{"74a714f84255b2e2":"lqXaA","fa4aaf42fafa550b":"l5E56"}],"70hii":[function(require,module,exports) {
/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */ !function(t, e) {
    module.exports = e();
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
        }
        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0);
    }([
        function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                };
            }
            var i = n(2), o = r(i);
            t.exports = o["default"];
        },
        function(t, e) {
            function n(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
            }
            t.exports = n;
        },
        function(t, e, n) {
            "use strict";
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(9), o = r(i), u = n(3), f = r(u), s = n(4), c = function() {
                if ("undefined" != typeof window) {
                    var t = 100, e = [
                        "scroll",
                        "resize",
                        "load"
                    ], n = {
                        history: []
                    }, r = {
                        offset: {},
                        threshold: 0,
                        test: s.inViewport
                    }, i = (0, o["default"])(function() {
                        n.history.forEach(function(t) {
                            n[t].check();
                        });
                    }, t);
                    e.forEach(function(t) {
                        return addEventListener(t, i);
                    }), window.MutationObserver && addEventListener("DOMContentLoaded", function() {
                        new MutationObserver(i).observe(document.body, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        });
                    });
                    var u = function(t) {
                        if ("string" == typeof t) {
                            var e = [].slice.call(document.querySelectorAll(t));
                            return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0, f["default"])(e, r), n.history.push(t)), n[t];
                        }
                    };
                    return u.offset = function(t) {
                        if (void 0 === t) return r.offset;
                        var e = function(t) {
                            return "number" == typeof t;
                        };
                        return [
                            "top",
                            "right",
                            "bottom",
                            "left"
                        ].forEach(e(t) ? function(e) {
                            return r.offset[e] = t;
                        } : function(n) {
                            return e(t[n]) ? r.offset[n] = t[n] : null;
                        }), r.offset;
                    }, u.threshold = function(t) {
                        return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold;
                    }, u.test = function(t) {
                        return "function" == typeof t ? r.test = t : r.test;
                    }, u.is = function(t) {
                        return r.test(t, r);
                    }, u.offset(0), u;
                }
            };
            e["default"] = c();
        },
        function(t, e) {
            "use strict";
            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(t, e) {
                    for(var n = 0; n < e.length; n++){
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e;
                };
            }(), i = function() {
                function t(e, r) {
                    n(this, t), this.options = r, this.elements = e, this.current = [], this.handlers = {
                        enter: [],
                        exit: []
                    }, this.singles = {
                        enter: [],
                        exit: []
                    };
                }
                return r(t, [
                    {
                        key: "check",
                        value: function() {
                            var t = this;
                            return this.elements.forEach(function(e) {
                                var n = t.options.test(e, t.options), r = t.current.indexOf(e), i = r > -1, o = n && !i, u = !n && i;
                                o && (t.current.push(e), t.emit("enter", e)), u && (t.current.splice(r, 1), t.emit("exit", e));
                            }), this;
                        }
                    },
                    {
                        key: "on",
                        value: function(t, e) {
                            return this.handlers[t].push(e), this;
                        }
                    },
                    {
                        key: "once",
                        value: function(t, e) {
                            return this.singles[t].unshift(e), this;
                        }
                    },
                    {
                        key: "emit",
                        value: function(t, e) {
                            for(; this.singles[t].length;)this.singles[t].pop()(e);
                            for(var n = this.handlers[t].length; --n > -1;)this.handlers[t][n](e);
                            return this;
                        }
                    }
                ]), t;
            }();
            e["default"] = function(t, e) {
                return new i(t, e);
            };
        },
        function(t, e) {
            "use strict";
            function n(t, e) {
                var n = t.getBoundingClientRect(), r = n.top, i = n.right, o = n.bottom, u = n.left, f = n.width, s = n.height, c = {
                    t: o,
                    r: window.innerWidth - u,
                    b: window.innerHeight - r,
                    l: i
                }, a = {
                    x: e.threshold * f,
                    y: e.threshold * s
                };
                return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.inViewport = n;
        },
        function(t, e) {
            (function(e) {
                var n = "object" == typeof e && e && e.Object === Object && e;
                t.exports = n;
            }).call(e, function() {
                return this;
            }());
        },
        function(t, e, n) {
            var r = n(5), i = "object" == typeof self && self && self.Object === Object && self, o = r || i || Function("return this")();
            t.exports = o;
        },
        function(t, e, n) {
            function r(t, e, n) {
                function r(e) {
                    var n = x, r = m;
                    return x = m = void 0, E = e, w = t.apply(r, n);
                }
                function a(t) {
                    return E = t, j = setTimeout(h, e), M ? r(t) : w;
                }
                function l(t) {
                    var n = t - O, r = t - E, i = e - n;
                    return _ ? c(i, g - r) : i;
                }
                function d(t) {
                    var n = t - O, r = t - E;
                    return void 0 === O || n >= e || n < 0 || _ && r >= g;
                }
                function h() {
                    var t = o();
                    return d(t) ? p(t) : void (j = setTimeout(h, l(t)));
                }
                function p(t) {
                    return j = void 0, T && x ? r(t) : (x = m = void 0, w);
                }
                function v() {
                    void 0 !== j && clearTimeout(j), E = 0, x = O = m = j = void 0;
                }
                function y() {
                    return void 0 === j ? w : p(o());
                }
                function b() {
                    var t = o(), n = d(t);
                    if (x = arguments, m = this, O = t, n) {
                        if (void 0 === j) return a(O);
                        if (_) return j = setTimeout(h, e), r(O);
                    }
                    return void 0 === j && (j = setTimeout(h, e)), w;
                }
                var x, m, g, w, j, O, E = 0, M = !1, _ = !1, T = !0;
                if ("function" != typeof t) throw new TypeError(f);
                return e = u(e) || 0, i(n) && (M = !!n.leading, _ = "maxWait" in n, g = _ ? s(u(n.maxWait) || 0, e) : g, T = "trailing" in n ? !!n.trailing : T), b.cancel = v, b.flush = y, b;
            }
            var i = n(1), o = n(8), u = n(10), f = "Expected a function", s = Math.max, c = Math.min;
            t.exports = r;
        },
        function(t, e, n) {
            var r = n(6), i = function() {
                return r.Date.now();
            };
            t.exports = i;
        },
        function(t, e, n) {
            function r(t, e, n) {
                var r = !0, f = !0;
                if ("function" != typeof t) throw new TypeError(u);
                return o(n) && (r = "leading" in n ? !!n.leading : r, f = "trailing" in n ? !!n.trailing : f), i(t, e, {
                    leading: r,
                    maxWait: e,
                    trailing: f
                });
            }
            var i = n(7), o = n(1), u = "Expected a function";
            t.exports = r;
        },
        function(t, e) {
            function n(t) {
                return t;
            }
            t.exports = n;
        }
    ]);
});

},{}],"hQAdq":[function(require,module,exports) {
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */ // Defaults
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var defaultInstanceSettings = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: true,
    timelineOffset: 0
};
var defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0
};
var validTransforms = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d"
];
// Caching
var cache = {
    CSS: {},
    springs: {}
};
// Utils
function minMax(val, min, max) {
    return Math.min(Math.max(val, min), max);
}
function stringContains(str, text) {
    return str.indexOf(text) > -1;
}
function applyArguments(func, args) {
    return func.apply(null, args);
}
var is = {
    arr: function(a) {
        return Array.isArray(a);
    },
    obj: function(a) {
        return stringContains(Object.prototype.toString.call(a), "Object");
    },
    pth: function(a) {
        return is.obj(a) && a.hasOwnProperty("totalLength");
    },
    svg: function(a) {
        return a instanceof SVGElement;
    },
    inp: function(a) {
        return a instanceof HTMLInputElement;
    },
    dom: function(a) {
        return a.nodeType || is.svg(a);
    },
    str: function(a) {
        return typeof a === "string";
    },
    fnc: function(a) {
        return typeof a === "function";
    },
    und: function(a) {
        return typeof a === "undefined";
    },
    nil: function(a) {
        return is.und(a) || a === null;
    },
    hex: function(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },
    rgb: function(a) {
        return /^rgb/.test(a);
    },
    hsl: function(a) {
        return /^hsl/.test(a);
    },
    col: function(a) {
        return is.hex(a) || is.rgb(a) || is.hsl(a);
    },
    key: function(a) {
        return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== "targets" && a !== "keyframes";
    }
};
// Easings
function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(",").map(function(p) {
        return parseFloat(p);
    }) : [];
}
// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js
function spring(string, duration) {
    var params = parseEasingParameters(string);
    var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
    var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
    var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
    var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
    var w0 = Math.sqrt(stiffness / mass);
    var zeta = damping / (2 * Math.sqrt(stiffness * mass));
    var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
    var a = 1;
    var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
    function solver(t) {
        var progress = duration ? duration * t / 1000 : t;
        if (zeta < 1) progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
        else progress = (a + b * progress) * Math.exp(-progress * w0);
        if (t === 0 || t === 1) return t;
        return 1 - progress;
    }
    function getDuration() {
        var cached = cache.springs[string];
        if (cached) return cached;
        var frame = 1 / 6;
        var elapsed = 0;
        var rest = 0;
        while(true){
            elapsed += frame;
            if (solver(elapsed) === 1) {
                rest++;
                if (rest >= 16) break;
            } else rest = 0;
        }
        var duration = elapsed * frame * 1000;
        cache.springs[string] = duration;
        return duration;
    }
    return duration ? solver : getDuration;
}
// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
function steps(steps) {
    if (steps === void 0) steps = 10;
    return function(t) {
        return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
    };
}
// BezierEasing https://github.com/gre/bezier-easing
var bezier = function() {
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    function A(aA1, aA2) {
        return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }
    function B(aA1, aA2) {
        return 3.0 * aA2 - 6.0 * aA1;
    }
    function C(aA1) {
        return 3.0 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
        return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) aB = currentT;
            else aA = currentT;
        }while (Math.abs(currentX) > 0.0000001 && ++i < 10);
        return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for(var i = 0; i < 4; ++i){
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    }
    function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) return;
        var sampleValues = new Float32Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) for(var i = 0; i < kSplineTableSize; ++i)sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        function getTForX(aX) {
            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += kSampleStepSize;
            --currentSample;
            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= 0.001) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            else if (initialSlope === 0.0) return guessForT;
            else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
        return function(x) {
            if (mX1 === mY1 && mX2 === mY2) return x;
            if (x === 0 || x === 1) return x;
            return calcBezier(getTForX(x), mY1, mY2);
        };
    }
    return bezier;
}();
var penner = function() {
    // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
    var eases = {
        linear: function() {
            return function(t) {
                return t;
            };
        }
    };
    var functionEasings = {
        Sine: function() {
            return function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            };
        },
        Circ: function() {
            return function(t) {
                return 1 - Math.sqrt(1 - t * t);
            };
        },
        Back: function() {
            return function(t) {
                return t * t * (3 * t - 2);
            };
        },
        Bounce: function() {
            return function(t) {
                var pow2, b = 4;
                while(t < ((pow2 = Math.pow(2, --b)) - 1) / 11);
                return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
            };
        },
        Elastic: function(amplitude, period) {
            if (amplitude === void 0) amplitude = 1;
            if (period === void 0) period = .5;
            var a = minMax(amplitude, 1, 10);
            var p = minMax(period, .1, 2);
            return function(t) {
                return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
            };
        }
    };
    var baseEasings = [
        "Quad",
        "Cubic",
        "Quart",
        "Quint",
        "Expo"
    ];
    baseEasings.forEach(function(name, i) {
        functionEasings[name] = function() {
            return function(t) {
                return Math.pow(t, i + 2);
            };
        };
    });
    Object.keys(functionEasings).forEach(function(name) {
        var easeIn = functionEasings[name];
        eases["easeIn" + name] = easeIn;
        eases["easeOut" + name] = function(a, b) {
            return function(t) {
                return 1 - easeIn(a, b)(1 - t);
            };
        };
        eases["easeInOut" + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
            };
        };
        eases["easeOutIn" + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
            };
        };
    });
    return eases;
}();
function parseEasings(easing, duration) {
    if (is.fnc(easing)) return easing;
    var name = easing.split("(")[0];
    var ease = penner[name];
    var args = parseEasingParameters(easing);
    switch(name){
        case "spring":
            return spring(easing, duration);
        case "cubicBezier":
            return applyArguments(bezier, args);
        case "steps":
            return applyArguments(steps, args);
        default:
            return applyArguments(ease, args);
    }
}
// Strings
function selectString(str) {
    try {
        var nodes = document.querySelectorAll(str);
        return nodes;
    } catch (e) {
        return;
    }
}
// Arrays
function filterArray(arr, callback) {
    var len = arr.length;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var result = [];
    for(var i = 0; i < len; i++)if (i in arr) {
        var val = arr[i];
        if (callback.call(thisArg, val, i, arr)) result.push(val);
    }
    return result;
}
function flattenArray(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
}
function toArray(o) {
    if (is.arr(o)) return o;
    if (is.str(o)) o = selectString(o) || o;
    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
    return [
        o
    ];
}
function arrayContains(arr, val) {
    return arr.some(function(a) {
        return a === val;
    });
}
// Objects
function cloneObject(o) {
    var clone = {};
    for(var p in o)clone[p] = o[p];
    return clone;
}
function replaceObjectProps(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o1)o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
    return o;
}
function mergeObjects(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o2)o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    return o;
}
// Colors
function rgbToRgba(rgbValue) {
    var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}
function hexToRgba(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return "rgba(" + r + "," + g + "," + b + ",1)";
}
function hslToRgba(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    var h = parseInt(hsl[1], 10) / 360;
    var s = parseInt(hsl[2], 10) / 100;
    var l = parseInt(hsl[3], 10) / 100;
    var a = hsl[4] || 1;
    function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 0.5) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    var r, g, b;
    if (s == 0) r = g = b = l;
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}
function colorToRgb(val) {
    if (is.rgb(val)) return rgbToRgba(val);
    if (is.hex(val)) return hexToRgba(val);
    if (is.hsl(val)) return hslToRgba(val);
}
// Units
function getUnit(val) {
    var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) return split[1];
}
function getTransformUnit(propName) {
    if (stringContains(propName, "translate") || propName === "perspective") return "px";
    if (stringContains(propName, "rotate") || stringContains(propName, "skew")) return "deg";
}
// Values
function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) return val;
    return val(animatable.target, animatable.id, animatable.total);
}
function getAttribute(el, prop) {
    return el.getAttribute(prop);
}
function convertPxToUnit(el, value, unit) {
    var valueUnit = getUnit(value);
    if (arrayContains([
        unit,
        "deg",
        "rad",
        "turn"
    ], valueUnit)) return value;
    var cached = cache.CSS[value + unit];
    if (!is.und(cached)) return cached;
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = "absolute";
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
}
function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
        var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || "0";
        return unit ? convertPxToUnit(el, value, unit) : value;
    }
}
function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) return "attribute";
    if (is.dom(el) && arrayContains(validTransforms, prop)) return "transform";
    if (is.dom(el) && prop !== "transform" && getCSSValue(el, prop)) return "css";
    if (el[prop] != null) return "object";
}
function getElementTransforms(el) {
    if (!is.dom(el)) return;
    var str = el.style.transform || "";
    var reg = /(\w+)\(([^)]*)\)/g;
    var transforms = new Map();
    var m;
    while(m = reg.exec(str))transforms.set(m[1], m[2]);
    return transforms;
}
function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
    if (animatable) {
        animatable.transforms.list.set(propName, value);
        animatable.transforms["last"] = propName;
    }
    return unit ? convertPxToUnit(el, value, unit) : value;
}
function getOriginalTargetValue(target, propName, unit, animatable) {
    switch(getAnimationType(target, propName)){
        case "transform":
            return getTransformValue(target, propName, animatable, unit);
        case "css":
            return getCSSValue(target, propName, unit);
        case "attribute":
            return getAttribute(target, propName);
        default:
            return target[propName] || 0;
    }
}
function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) return to;
    var u = getUnit(to) || 0;
    var x = parseFloat(from);
    var y = parseFloat(to.replace(operator[0], ""));
    switch(operator[0][0]){
        case "+":
            return x + y + u;
        case "-":
            return x - y + u;
        case "*":
            return x * y + u;
    }
}
function validateValue(val, unit) {
    if (is.col(val)) return colorToRgb(val);
    if (/\s/g.test(val)) return val;
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    if (unit) return unitLess + unit;
    return unitLess;
}
// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744
function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getCircleLength(el) {
    return Math.PI * 2 * getAttribute(el, "r");
}
function getRectLength(el) {
    return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
}
function getLineLength(el) {
    return getDistance({
        x: getAttribute(el, "x1"),
        y: getAttribute(el, "y1")
    }, {
        x: getAttribute(el, "x2"),
        y: getAttribute(el, "y2")
    });
}
function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos;
    for(var i = 0; i < points.numberOfItems; i++){
        var currentPos = points.getItem(i);
        if (i > 0) totalLength += getDistance(previousPos, currentPos);
        previousPos = currentPos;
    }
    return totalLength;
}
function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}
// Path animation
function getTotalLength(el) {
    if (el.getTotalLength) return el.getTotalLength();
    switch(el.tagName.toLowerCase()){
        case "circle":
            return getCircleLength(el);
        case "rect":
            return getRectLength(el);
        case "line":
            return getLineLength(el);
        case "polyline":
            return getPolylineLength(el);
        case "polygon":
            return getPolygonLength(el);
    }
}
function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute("stroke-dasharray", pathLength);
    return pathLength;
}
// Motion path
function getParentSvgEl(el) {
    var parentEl = el.parentNode;
    while(is.svg(parentEl)){
        if (!is.svg(parentEl.parentNode)) break;
        parentEl = parentEl.parentNode;
    }
    return parentEl;
}
function getParentSvg(pathEl, svgData) {
    var svg = svgData || {};
    var parentSvgEl = svg.el || getParentSvgEl(pathEl);
    var rect = parentSvgEl.getBoundingClientRect();
    var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(" ") : [
        0,
        0,
        width,
        height
    ]);
    return {
        el: parentSvgEl,
        viewBox: viewBox,
        x: viewBox[0] / 1,
        y: viewBox[1] / 1,
        w: width,
        h: height,
        vW: viewBox[2],
        vH: viewBox[3]
    };
}
function getPath(path, percent) {
    var pathEl = is.str(path) ? selectString(path)[0] : path;
    var p = percent || 100;
    return function(property) {
        return {
            property: property,
            el: pathEl,
            svg: getParentSvg(pathEl),
            totalLength: getTotalLength(pathEl) * (p / 100)
        };
    };
}
function getPathProgress(path, progress, isPathTargetInsideSVG) {
    function point(offset) {
        if (offset === void 0) offset = 0;
        var l = progress + offset >= 1 ? progress + offset : 0;
        return path.el.getPointAtLength(l);
    }
    var svg = getParentSvg(path.el, path.svg);
    var p = point();
    var p0 = point(-1);
    var p1 = point(1);
    var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
    var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
    switch(path.property){
        case "x":
            return (p.x - svg.x) * scaleX;
        case "y":
            return (p.y - svg.y) * scaleY;
        case "angle":
            return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
}
// Decompose value
function decomposeValue(val, unit) {
    // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
    // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
    return {
        original: value,
        numbers: value.match(rgx) ? value.match(rgx).map(Number) : [
            0
        ],
        strings: is.str(val) || unit ? value.split(rgx) : []
    };
}
// Animatables
function parseTargets(targets) {
    var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
    return filterArray(targetsArray, function(item, pos, self) {
        return self.indexOf(item) === pos;
    });
}
function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function(t, i) {
        return {
            target: t,
            id: i,
            total: parsed.length,
            transforms: {
                list: getElementTransforms(t)
            }
        };
    });
}
// Properties
function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings);
    // Override duration if easing is a spring
    if (/^spring/.test(settings.easing)) settings.duration = spring(settings.easing);
    if (is.arr(prop)) {
        var l = prop.length;
        var isFromTo = l === 2 && !is.obj(prop[0]);
        if (!isFromTo) // Duration divided by the number of tweens
        {
            if (!is.fnc(tweenSettings.duration)) settings.duration = tweenSettings.duration / l;
        } else // Transform [from, to] values shorthand to a valid tween value
        prop = {
            value: prop
        };
    }
    var propArray = is.arr(prop) ? prop : [
        prop
    ];
    return propArray.map(function(v, i) {
        var obj = is.obj(v) && !is.pth(v) ? v : {
            value: v
        };
        // Default delay value should only be applied to the first tween
        if (is.und(obj.delay)) obj.delay = !i ? tweenSettings.delay : 0;
        // Default endDelay value should only be applied to the last tween
        if (is.und(obj.endDelay)) obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
        return obj;
    }).map(function(k) {
        return mergeObjects(k, settings);
    });
}
function flattenKeyframes(keyframes) {
    var propertyNames = filterArray(flattenArray(keyframes.map(function(key) {
        return Object.keys(key);
    })), function(p) {
        return is.key(p);
    }).reduce(function(a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);
    var properties = {};
    var loop = function(i) {
        var propName = propertyNames[i];
        properties[propName] = keyframes.map(function(key) {
            var newKey = {};
            for(var p in key){
                if (is.key(p)) {
                    if (p == propName) newKey.value = key[p];
                } else newKey[p] = key[p];
            }
            return newKey;
        });
    };
    for(var i = 0; i < propertyNames.length; i++)loop(i);
    return properties;
}
function getProperties(tweenSettings, params) {
    var properties = [];
    var keyframes = params.keyframes;
    if (keyframes) params = mergeObjects(flattenKeyframes(keyframes), params);
    for(var p in params)if (is.key(p)) properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
    });
    return properties;
}
// Tweens
function normalizeTweenValues(tween, animatable) {
    var t = {};
    for(var p in tween){
        var value = getFunctionValue(tween[p], animatable);
        if (is.arr(value)) {
            value = value.map(function(v) {
                return getFunctionValue(v, animatable);
            });
            if (value.length === 1) value = value[0];
        }
        t[p] = value;
    }
    t.duration = parseFloat(t.duration);
    t.delay = parseFloat(t.delay);
    return t;
}
function normalizeTweens(prop, animatable) {
    var previousTween;
    return prop.tweens.map(function(t) {
        var tween = normalizeTweenValues(t, animatable);
        var tweenValue = tween.value;
        var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
        var toUnit = getUnit(to);
        var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
        var previousValue = previousTween ? previousTween.to.original : originalValue;
        var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
        var fromUnit = getUnit(from) || getUnit(originalValue);
        var unit = toUnit || fromUnit;
        if (is.und(to)) to = previousValue;
        tween.from = decomposeValue(from, unit);
        tween.to = decomposeValue(getRelativeValue(to, from), unit);
        tween.start = previousTween ? previousTween.end : 0;
        tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
        tween.easing = parseEasings(tween.easing, tween.duration);
        tween.isPath = is.pth(tweenValue);
        tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
        tween.isColor = is.col(tween.from.original);
        if (tween.isColor) tween.round = 1;
        previousTween = tween;
        return tween;
    });
}
// Tween progress
var setProgressValue = {
    css: function(t, p, v) {
        return t.style[p] = v;
    },
    attribute: function(t, p, v) {
        return t.setAttribute(p, v);
    },
    object: function(t, p, v) {
        return t[p] = v;
    },
    transform: function(t, p, v, transforms, manual) {
        transforms.list.set(p, v);
        if (p === transforms.last || manual) {
            var str = "";
            transforms.list.forEach(function(value, prop) {
                str += prop + "(" + value + ") ";
            });
            t.style.transform = str;
        }
    }
};
// Set Value helper
function setTargetsValue(targets, properties) {
    var animatables = getAnimatables(targets);
    animatables.forEach(function(animatable) {
        for(var property in properties){
            var value = getFunctionValue(properties[property], animatable);
            var target = animatable.target;
            var valueUnit = getUnit(value);
            var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
            var unit = valueUnit || getUnit(originalValue);
            var to = getRelativeValue(validateValue(value, unit), originalValue);
            var animType = getAnimationType(target, property);
            setProgressValue[animType](target, property, to, animatable.transforms, true);
        }
    });
}
// Animations
function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
        var tweens = normalizeTweens(prop, animatable);
        var lastTween = tweens[tweens.length - 1];
        return {
            type: animType,
            property: prop.name,
            animatable: animatable,
            tweens: tweens,
            duration: lastTween.end,
            delay: tweens[0].delay,
            endDelay: lastTween.endDelay
        };
    }
}
function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(function(animatable) {
        return properties.map(function(prop) {
            return createAnimation(animatable, prop);
        });
    })), function(a) {
        return !is.und(a);
    });
}
// Create Instance
function getInstanceTimings(animations, tweenSettings) {
    var animLength = animations.length;
    var getTlOffset = function(anim) {
        return anim.timelineOffset ? anim.timelineOffset : 0;
    };
    var timings = {};
    timings.duration = animLength ? Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration;
    })) : tweenSettings.duration;
    timings.delay = animLength ? Math.min.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.delay;
    })) : tweenSettings.delay;
    timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration - anim.endDelay;
    })) : tweenSettings.endDelay;
    return timings;
}
var instanceID = 0;
function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var properties = getProperties(tweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var animations = getAnimations(animatables, properties);
    var timings = getInstanceTimings(animations, tweenSettings);
    var id = instanceID;
    instanceID++;
    return mergeObjects(instanceSettings, {
        id: id,
        children: [],
        animatables: animatables,
        animations: animations,
        duration: timings.duration,
        delay: timings.delay,
        endDelay: timings.endDelay
    });
}
// Core
var activeInstances = [];
var engine = function() {
    var raf;
    function play() {
        if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) raf = requestAnimationFrame(step);
    }
    function step(t) {
        // memo on algorithm issue:
        // dangerous iteration over mutable `activeInstances`
        // (that collection may be updated from within callbacks of `tick`-ed animation instances)
        var activeInstancesLength = activeInstances.length;
        var i = 0;
        while(i < activeInstancesLength){
            var activeInstance = activeInstances[i];
            if (!activeInstance.paused) {
                activeInstance.tick(t);
                i++;
            } else {
                activeInstances.splice(i, 1);
                activeInstancesLength--;
            }
        }
        raf = i > 0 ? requestAnimationFrame(step) : undefined;
    }
    function handleVisibilityChange() {
        if (!anime.suspendWhenDocumentHidden) return;
        if (isDocumentHidden()) // suspend ticks
        raf = cancelAnimationFrame(raf);
        else {
            // first adjust animations to consider the time that ticks were suspended
            activeInstances.forEach(function(instance) {
                return instance._onDocumentVisibility();
            });
            engine();
        }
    }
    if (typeof document !== "undefined") document.addEventListener("visibilitychange", handleVisibilityChange);
    return play;
}();
function isDocumentHidden() {
    return !!document && document.hidden;
}
// Public Instance
function anime(params) {
    if (params === void 0) params = {};
    var startTime = 0, lastTime = 0, now = 0;
    var children, childrenLength = 0;
    var resolve = null;
    function makePromise(instance) {
        var promise = window.Promise && new Promise(function(_resolve) {
            return resolve = _resolve;
        });
        instance.finished = promise;
        return promise;
    }
    var instance = createNewInstance(params);
    var promise = makePromise(instance);
    function toggleInstanceDirection() {
        var direction = instance.direction;
        if (direction !== "alternate") instance.direction = direction !== "normal" ? "normal" : "reverse";
        instance.reversed = !instance.reversed;
        children.forEach(function(child) {
            return child.reversed = instance.reversed;
        });
    }
    function adjustTime(time) {
        return instance.reversed ? instance.duration - time : time;
    }
    function resetTime() {
        startTime = 0;
        lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
    }
    function seekChild(time, child) {
        if (child) child.seek(time - child.timelineOffset);
    }
    function syncInstanceChildren(time) {
        if (!instance.reversePlayback) for(var i = 0; i < childrenLength; i++)seekChild(time, children[i]);
        else for(var i$1 = childrenLength; i$1--;)seekChild(time, children[i$1]);
    }
    function setAnimationsProgress(insTime) {
        var i = 0;
        var animations = instance.animations;
        var animationsLength = animations.length;
        while(i < animationsLength){
            var anim = animations[i];
            var animatable = anim.animatable;
            var tweens = anim.tweens;
            var tweenLength = tweens.length - 1;
            var tween = tweens[tweenLength];
            // Only check for keyframes if there is more than one tween
            if (tweenLength) tween = filterArray(tweens, function(t) {
                return insTime < t.end;
            })[0] || tween;
            var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
            var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
            var strings = tween.to.strings;
            var round = tween.round;
            var numbers = [];
            var toNumbersLength = tween.to.numbers.length;
            var progress = void 0;
            for(var n = 0; n < toNumbersLength; n++){
                var value = void 0;
                var toNumber = tween.to.numbers[n];
                var fromNumber = tween.from.numbers[n] || 0;
                if (!tween.isPath) value = fromNumber + eased * (toNumber - fromNumber);
                else value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
                if (round) {
                    if (!(tween.isColor && n > 2)) value = Math.round(value * round) / round;
                }
                numbers.push(value);
            }
            // Manual Array.reduce for better performances
            var stringsLength = strings.length;
            if (!stringsLength) progress = numbers[0];
            else {
                progress = strings[0];
                for(var s = 0; s < stringsLength; s++){
                    var a = strings[s];
                    var b = strings[s + 1];
                    var n$1 = numbers[s];
                    if (!isNaN(n$1)) {
                        if (!b) progress += n$1 + " ";
                        else progress += n$1 + b;
                    }
                }
            }
            setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
            anim.currentValue = progress;
            i++;
        }
    }
    function setCallback(cb) {
        if (instance[cb] && !instance.passThrough) instance[cb](instance);
    }
    function countIteration() {
        if (instance.remaining && instance.remaining !== true) instance.remaining--;
    }
    function setInstanceProgress(engineTime) {
        var insDuration = instance.duration;
        var insDelay = instance.delay;
        var insEndDelay = insDuration - instance.endDelay;
        var insTime = adjustTime(engineTime);
        instance.progress = minMax(insTime / insDuration * 100, 0, 100);
        instance.reversePlayback = insTime < instance.currentTime;
        if (children) syncInstanceChildren(insTime);
        if (!instance.began && instance.currentTime > 0) {
            instance.began = true;
            setCallback("begin");
        }
        if (!instance.loopBegan && instance.currentTime > 0) {
            instance.loopBegan = true;
            setCallback("loopBegin");
        }
        if (insTime <= insDelay && instance.currentTime !== 0) setAnimationsProgress(0);
        if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) setAnimationsProgress(insDuration);
        if (insTime > insDelay && insTime < insEndDelay) {
            if (!instance.changeBegan) {
                instance.changeBegan = true;
                instance.changeCompleted = false;
                setCallback("changeBegin");
            }
            setCallback("change");
            setAnimationsProgress(insTime);
        } else if (instance.changeBegan) {
            instance.changeCompleted = true;
            instance.changeBegan = false;
            setCallback("changeComplete");
        }
        instance.currentTime = minMax(insTime, 0, insDuration);
        if (instance.began) setCallback("update");
        if (engineTime >= insDuration) {
            lastTime = 0;
            countIteration();
            if (!instance.remaining) {
                instance.paused = true;
                if (!instance.completed) {
                    instance.completed = true;
                    setCallback("loopComplete");
                    setCallback("complete");
                    if (!instance.passThrough && "Promise" in window) {
                        resolve();
                        promise = makePromise(instance);
                    }
                }
            } else {
                startTime = now;
                setCallback("loopComplete");
                instance.loopBegan = false;
                if (instance.direction === "alternate") toggleInstanceDirection();
            }
        }
    }
    instance.reset = function() {
        var direction = instance.direction;
        instance.passThrough = false;
        instance.currentTime = 0;
        instance.progress = 0;
        instance.paused = true;
        instance.began = false;
        instance.loopBegan = false;
        instance.changeBegan = false;
        instance.completed = false;
        instance.changeCompleted = false;
        instance.reversePlayback = false;
        instance.reversed = direction === "reverse";
        instance.remaining = instance.loop;
        children = instance.children;
        childrenLength = children.length;
        for(var i = childrenLength; i--;)instance.children[i].reset();
        if (instance.reversed && instance.loop !== true || direction === "alternate" && instance.loop === 1) instance.remaining++;
        setAnimationsProgress(instance.reversed ? instance.duration : 0);
    };
    // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
    instance._onDocumentVisibility = resetTime;
    // Set Value helper
    instance.set = function(targets, properties) {
        setTargetsValue(targets, properties);
        return instance;
    };
    instance.tick = function(t) {
        now = t;
        if (!startTime) startTime = now;
        setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
    };
    instance.seek = function(time) {
        setInstanceProgress(adjustTime(time));
    };
    instance.pause = function() {
        instance.paused = true;
        resetTime();
    };
    instance.play = function() {
        if (!instance.paused) return;
        if (instance.completed) instance.reset();
        instance.paused = false;
        activeInstances.push(instance);
        resetTime();
        engine();
    };
    instance.reverse = function() {
        toggleInstanceDirection();
        instance.completed = instance.reversed ? false : true;
        resetTime();
    };
    instance.restart = function() {
        instance.reset();
        instance.play();
    };
    instance.remove = function(targets) {
        var targetsArray = parseTargets(targets);
        removeTargetsFromInstance(targetsArray, instance);
    };
    instance.reset();
    if (instance.autoplay) instance.play();
    return instance;
}
// Remove targets from animation
function removeTargetsFromAnimations(targetsArray, animations) {
    for(var a = animations.length; a--;)if (arrayContains(targetsArray, animations[a].animatable.target)) animations.splice(a, 1);
}
function removeTargetsFromInstance(targetsArray, instance) {
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for(var c = children.length; c--;){
        var child = children[c];
        var childAnimations = child.animations;
        removeTargetsFromAnimations(targetsArray, childAnimations);
        if (!childAnimations.length && !child.children.length) children.splice(c, 1);
    }
    if (!animations.length && !children.length) instance.pause();
}
function removeTargetsFromActiveInstances(targets) {
    var targetsArray = parseTargets(targets);
    for(var i = activeInstances.length; i--;){
        var instance = activeInstances[i];
        removeTargetsFromInstance(targetsArray, instance);
    }
}
// Stagger helpers
function stagger(val, params) {
    if (params === void 0) params = {};
    var direction = params.direction || "normal";
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === "first";
    var fromCenter = fromIndex === "center";
    var fromLast = fromIndex === "last";
    var isRange = is.arr(val);
    var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
    var val2 = isRange ? parseFloat(val[1]) : 0;
    var unit = getUnit(isRange ? val[1] : val) || 0;
    var start = params.start || 0 + (isRange ? val1 : 0);
    var values = [];
    var maxValue = 0;
    return function(el, i, t) {
        if (fromFirst) fromIndex = 0;
        if (fromCenter) fromIndex = (t - 1) / 2;
        if (fromLast) fromIndex = t - 1;
        if (!values.length) {
            for(var index = 0; index < t; index++){
                if (!grid) values.push(Math.abs(fromIndex - index));
                else {
                    var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
                    var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
                    var toX = index % grid[0];
                    var toY = Math.floor(index / grid[0]);
                    var distanceX = fromX - toX;
                    var distanceY = fromY - toY;
                    var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                    if (axis === "x") value = -distanceX;
                    if (axis === "y") value = -distanceY;
                    values.push(value);
                }
                maxValue = Math.max.apply(Math, values);
            }
            if (easing) values = values.map(function(val) {
                return easing(val / maxValue) * maxValue;
            });
            if (direction === "reverse") values = values.map(function(val) {
                return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
            });
        }
        var spacing = isRange ? (val2 - val1) / maxValue : val1;
        return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
    };
}
// Timeline
function timeline(params) {
    if (params === void 0) params = {};
    var tl = anime(params);
    tl.duration = 0;
    tl.add = function(instanceParams, timelineOffset) {
        var tlIndex = activeInstances.indexOf(tl);
        var children = tl.children;
        if (tlIndex > -1) activeInstances.splice(tlIndex, 1);
        function passThrough(ins) {
            ins.passThrough = true;
        }
        for(var i = 0; i < children.length; i++)passThrough(children[i]);
        var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
        insParams.targets = insParams.targets || params.targets;
        var tlDuration = tl.duration;
        insParams.autoplay = false;
        insParams.direction = tl.direction;
        insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
        passThrough(tl);
        tl.seek(insParams.timelineOffset);
        var ins = anime(insParams);
        passThrough(ins);
        children.push(ins);
        var timings = getInstanceTimings(children, params);
        tl.delay = timings.delay;
        tl.endDelay = timings.endDelay;
        tl.duration = timings.duration;
        tl.seek(0);
        tl.reset();
        if (tl.autoplay) tl.play();
        return tl;
    };
    return tl;
}
anime.version = "3.2.1";
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.default = anime;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"1fHDu":[function(require,module,exports) {
/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/ var _lib = require("./lib");
var _notyf = require("notyf");
var _templates = require("./templates");
// Base notification styles
let notyf = new (0, _notyf.Notyf)({
    duration: 4000,
    dismissible: true,
    icon: false
});
const updateCarts = (cart)=>{
    // Update the cart count
    updateCartCount(cart.item_count);
    // Update the cart count
    updateMainCart(cart);
    // Update the main sidecart
    updateSideCart(cart);
};
/**
 * 
 * Update the cart count in the header
 * 
 * @param {number} count 
 */ const updateCartCount = (count = 0)=>{
    let $cart_count = (0, _lib.$)(".js-cart-count");
    $cart_count.innerHTML = `<b>${count}</b>`;
    $cart_count.classList.toggle("active", count > 0);
    (0, _lib.$)(".header-actions__cart__count").classList.add("pulse");
    // Remove the pulse animation class after the animation ends
    setTimeout(()=>(0, _lib.$)(".header-actions__cart__count").classList.remove("pulse"), 3000);
};
/**
 * 
 * Update the sidecart items
 * 
 * @param {object} cart 
 */ const updateSideCart = (cart)=>{
    let html = "";
    let $side_cart = (0, _lib.$)(".sidecart-draw-items");
    cart.items.forEach((item, index)=>html += (0, _templates.sidecart_item)(item, index));
    if ($side_cart) $side_cart.innerHTML = html;
};
/**
 * 
 * Update the maincart items
 * 
 * @param {object} cart 
 */ const updateMainCart = (cart)=>{
    let html = "";
    let $main_cart = (0, _lib.$)(".js-cart-items");
    cart.items.forEach((item, index)=>html += (0, _templates.maincart_item)(item, index));
    if ($main_cart) $main_cart.innerHTML = html;
};
window.fetchCart = ()=>{
    // Send the request to Shopify
    fetch("/cart.js").then((response)=>response.json()).then((data)=>{
        // Update all of the carts
        updateCarts(data);
    }).catch((data)=>{
        // Show an error message in the console
        console.log(data);
    });
};
// Initialise the cart on page load
fetchCart();
window.changeSideCartQuantity = (event, amount)=>{
    let quantity, input = event.target.parentElement.querySelector("input");
    if (amount !== 0) {
        quantity = parseInt(input.value);
        quantity = quantity + amount < 1 ? 1 : quantity + amount;
        input.value = quantity;
    }
    let data = {
        line: parseInt(event.target.closest(".sidecart-draw-items__item").dataset.line),
        quantity: amount == 0 ? 0 : quantity
    };
    // Send the request to Shopify
    fetch("/cart/change.js", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        // Update all of the carts
        updateCarts(data);
    }).catch((data)=>{
        // Show an error message in the console
        console.log(data);
    });
};
/**
 * 
 * Add to cart interactions
 * 
 */ if ((0, _lib.$)(".js-add-to-cart")) (0, _lib.$)(".js-add-to-cart").addEventListener("click", (e)=>{
    e.preventDefault();
    // Declare our variables
    let button = e.target;
    let form = button.closest("form");
    // Add a loading animation to the button
    button.classList.add("busy");
    let data = {
        id: form.querySelector(".js-variant").value,
        quantity: parseInt(form.querySelector(".quantity-input input").value)
    };
    // Send the request to Shopify
    fetch("/cart/add.js", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        // Update the cart sitewide
        fetchCart();
        // Remove the loading animation from the button
        button.classList.remove("busy");
        // Show a success message
        notyf.success({
            message: "Your cart has been updated",
            icon: false
        });
    }).catch((data)=>{
        // Remove the loading animation from the button
        button.classList.remove("busy");
        // Show an error message in the console
        console.log(data);
    });
});
window.changeMainCartQuantity = (event, amount)=>{
    let quantity, input = event.target.parentElement.querySelector("input");
    if (amount !== 0) {
        quantity = parseInt(input.value);
        quantity = quantity + amount < 1 ? 1 : quantity + amount;
        input.value = quantity;
    }
    let data = {
        line: parseInt(event.target.closest(".cart__wrap__form__table__body__row").dataset.line),
        quantity: amount == 0 ? 0 : quantity
    };
    // Send the request to Shopify
    fetch("/cart/change.js", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response)=>response.json()).then((data)=>{
        // Update all of the carts
        updateCarts(data);
    }).catch((data)=>{
        // Show an error message in the console
        console.log(data);
    });
};

},{"./lib":"acGTP","notyf":"kobg9","./templates":"bituW"}],"kobg9":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_OPTIONS", ()=>DEFAULT_OPTIONS);
parcelHelpers.export(exports, "Notyf", ()=>Notyf);
parcelHelpers.export(exports, "NotyfArray", ()=>NotyfArray);
parcelHelpers.export(exports, "NotyfArrayEvent", ()=>NotyfArrayEvent);
parcelHelpers.export(exports, "NotyfEvent", ()=>NotyfEvent);
parcelHelpers.export(exports, "NotyfNotification", ()=>NotyfNotification);
parcelHelpers.export(exports, "NotyfView", ()=>NotyfView);
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var NotyfNotification = /** @class */ function() {
    function NotyfNotification(options) {
        this.options = options;
        this.listeners = {};
    }
    NotyfNotification.prototype.on = function(eventType, cb) {
        var callbacks = this.listeners[eventType] || [];
        this.listeners[eventType] = callbacks.concat([
            cb
        ]);
    };
    NotyfNotification.prototype.triggerEvent = function(eventType, event) {
        var _this = this;
        var callbacks = this.listeners[eventType] || [];
        callbacks.forEach(function(cb) {
            return cb({
                target: _this,
                event: event
            });
        });
    };
    return NotyfNotification;
}();
var NotyfArrayEvent;
(function(NotyfArrayEvent) {
    NotyfArrayEvent[NotyfArrayEvent["Add"] = 0] = "Add";
    NotyfArrayEvent[NotyfArrayEvent["Remove"] = 1] = "Remove";
})(NotyfArrayEvent || (NotyfArrayEvent = {}));
var NotyfArray = /** @class */ function() {
    function NotyfArray() {
        this.notifications = [];
    }
    NotyfArray.prototype.push = function(elem) {
        this.notifications.push(elem);
        this.updateFn(elem, NotyfArrayEvent.Add, this.notifications);
    };
    NotyfArray.prototype.splice = function(index, num) {
        var elem = this.notifications.splice(index, num)[0];
        this.updateFn(elem, NotyfArrayEvent.Remove, this.notifications);
        return elem;
    };
    NotyfArray.prototype.indexOf = function(elem) {
        return this.notifications.indexOf(elem);
    };
    NotyfArray.prototype.onUpdate = function(fn) {
        this.updateFn = fn;
    };
    return NotyfArray;
}();
var NotyfEvent;
(function(NotyfEvent) {
    NotyfEvent["Dismiss"] = "dismiss";
    NotyfEvent["Click"] = "click";
})(NotyfEvent || (NotyfEvent = {}));
var DEFAULT_OPTIONS = {
    types: [
        {
            type: "success",
            className: "notyf__toast--success",
            backgroundColor: "#3dc763",
            icon: {
                className: "notyf__icon--success",
                tagName: "i"
            }
        },
        {
            type: "error",
            className: "notyf__toast--error",
            backgroundColor: "#ed3d3d",
            icon: {
                className: "notyf__icon--error",
                tagName: "i"
            }
        }
    ],
    duration: 2000,
    ripple: true,
    position: {
        x: "right",
        y: "bottom"
    },
    dismissible: false
};
var NotyfView = /** @class */ function() {
    function NotyfView() {
        this.notifications = [];
        this.events = {};
        this.X_POSITION_FLEX_MAP = {
            left: "flex-start",
            center: "center",
            right: "flex-end"
        };
        this.Y_POSITION_FLEX_MAP = {
            top: "flex-start",
            center: "center",
            bottom: "flex-end"
        };
        // Creates the main notifications container
        var docFrag = document.createDocumentFragment();
        var notyfContainer = this._createHTMLElement({
            tagName: "div",
            className: "notyf"
        });
        docFrag.appendChild(notyfContainer);
        document.body.appendChild(docFrag);
        this.container = notyfContainer;
        // Identifies the main animation end event
        this.animationEndEventName = this._getAnimationEndEventName();
        this._createA11yContainer();
    }
    NotyfView.prototype.on = function(event, cb) {
        var _a;
        this.events = __assign(__assign({}, this.events), (_a = {}, _a[event] = cb, _a));
    };
    NotyfView.prototype.update = function(notification, type) {
        if (type === NotyfArrayEvent.Add) this.addNotification(notification);
        else if (type === NotyfArrayEvent.Remove) this.removeNotification(notification);
    };
    NotyfView.prototype.removeNotification = function(notification) {
        var _this = this;
        var renderedNotification = this._popRenderedNotification(notification);
        var node;
        if (!renderedNotification) return;
        node = renderedNotification.node;
        node.classList.add("notyf__toast--disappear");
        var handleEvent;
        node.addEventListener(this.animationEndEventName, handleEvent = function(event) {
            if (event.target === node) {
                node.removeEventListener(_this.animationEndEventName, handleEvent);
                _this.container.removeChild(node);
            }
        });
    };
    NotyfView.prototype.addNotification = function(notification) {
        var node = this._renderNotification(notification);
        this.notifications.push({
            notification: notification,
            node: node
        });
        // For a11y purposes, we still want to announce that there's a notification in the screen
        // even if it comes with no message.
        this._announce(notification.options.message || "Notification");
    };
    NotyfView.prototype._renderNotification = function(notification) {
        var _a;
        var card = this._buildNotificationCard(notification);
        var className = notification.options.className;
        if (className) (_a = card.classList).add.apply(_a, className.split(" "));
        this.container.appendChild(card);
        return card;
    };
    NotyfView.prototype._popRenderedNotification = function(notification) {
        var idx = -1;
        for(var i = 0; i < this.notifications.length && idx < 0; i++)if (this.notifications[i].notification === notification) idx = i;
        if (idx !== -1) return this.notifications.splice(idx, 1)[0];
        return;
    };
    NotyfView.prototype.getXPosition = function(options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.x) || "right";
    };
    NotyfView.prototype.getYPosition = function(options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.y) || "bottom";
    };
    NotyfView.prototype.adjustContainerAlignment = function(options) {
        var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];
        var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];
        var style = this.container.style;
        style.setProperty("justify-content", justify);
        style.setProperty("align-items", align);
    };
    NotyfView.prototype._buildNotificationCard = function(notification) {
        var _this = this;
        var options = notification.options;
        var iconOpts = options.icon;
        // Adjust container according to position (e.g. top-left, bottom-center, etc)
        this.adjustContainerAlignment(options);
        // Create elements
        var notificationElem = this._createHTMLElement({
            tagName: "div",
            className: "notyf__toast"
        });
        var ripple = this._createHTMLElement({
            tagName: "div",
            className: "notyf__ripple"
        });
        var wrapper = this._createHTMLElement({
            tagName: "div",
            className: "notyf__wrapper"
        });
        var message = this._createHTMLElement({
            tagName: "div",
            className: "notyf__message"
        });
        message.innerHTML = options.message || "";
        var mainColor = options.background || options.backgroundColor;
        // Build the icon and append it to the card
        if (iconOpts) {
            var iconContainer = this._createHTMLElement({
                tagName: "div",
                className: "notyf__icon"
            });
            if (typeof iconOpts === "string" || iconOpts instanceof String) iconContainer.innerHTML = new String(iconOpts).valueOf();
            if (typeof iconOpts === "object") {
                var _a = iconOpts.tagName, tagName = _a === void 0 ? "i" : _a, className_1 = iconOpts.className, text = iconOpts.text, _b = iconOpts.color, color = _b === void 0 ? mainColor : _b;
                var iconElement = this._createHTMLElement({
                    tagName: tagName,
                    className: className_1,
                    text: text
                });
                if (color) iconElement.style.color = color;
                iconContainer.appendChild(iconElement);
            }
            wrapper.appendChild(iconContainer);
        }
        wrapper.appendChild(message);
        notificationElem.appendChild(wrapper);
        // Add ripple if applicable, else just paint the full toast
        if (mainColor) {
            if (options.ripple) {
                ripple.style.background = mainColor;
                notificationElem.appendChild(ripple);
            } else notificationElem.style.background = mainColor;
        }
        // Add dismiss button
        if (options.dismissible) {
            var dismissWrapper = this._createHTMLElement({
                tagName: "div",
                className: "notyf__dismiss"
            });
            var dismissButton = this._createHTMLElement({
                tagName: "button",
                className: "notyf__dismiss-btn"
            });
            dismissWrapper.appendChild(dismissButton);
            wrapper.appendChild(dismissWrapper);
            notificationElem.classList.add("notyf__toast--dismissible");
            dismissButton.addEventListener("click", function(event) {
                var _a, _b;
                (_b = (_a = _this.events)[NotyfEvent.Dismiss]) === null || _b === void 0 || _b.call(_a, {
                    target: notification,
                    event: event
                });
                event.stopPropagation();
            });
        }
        notificationElem.addEventListener("click", function(event) {
            var _a, _b;
            return (_b = (_a = _this.events)[NotyfEvent.Click]) === null || _b === void 0 ? void 0 : _b.call(_a, {
                target: notification,
                event: event
            });
        });
        // Adjust margins depending on whether its an upper or lower notification
        var className = this.getYPosition(options) === "top" ? "upper" : "lower";
        notificationElem.classList.add("notyf__toast--" + className);
        return notificationElem;
    };
    NotyfView.prototype._createHTMLElement = function(_a) {
        var tagName = _a.tagName, className = _a.className, text = _a.text;
        var elem = document.createElement(tagName);
        if (className) elem.className = className;
        elem.textContent = text || null;
        return elem;
    };
    /**
     * Creates an invisible container which will announce the notyfs to
     * screen readers
     */ NotyfView.prototype._createA11yContainer = function() {
        var a11yContainer = this._createHTMLElement({
            tagName: "div",
            className: "notyf-announcer"
        });
        a11yContainer.setAttribute("aria-atomic", "true");
        a11yContainer.setAttribute("aria-live", "polite");
        // Set the a11y container to be visible hidden. Can't use display: none as
        // screen readers won't read it.
        a11yContainer.style.border = "0";
        a11yContainer.style.clip = "rect(0 0 0 0)";
        a11yContainer.style.height = "1px";
        a11yContainer.style.margin = "-1px";
        a11yContainer.style.overflow = "hidden";
        a11yContainer.style.padding = "0";
        a11yContainer.style.position = "absolute";
        a11yContainer.style.width = "1px";
        a11yContainer.style.outline = "0";
        document.body.appendChild(a11yContainer);
        this.a11yContainer = a11yContainer;
    };
    /**
     * Announces a message to screenreaders.
     */ NotyfView.prototype._announce = function(message) {
        var _this = this;
        this.a11yContainer.textContent = "";
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        // https://github.com/angular/material2/blob/master/src/cdk/a11y/live-announcer/live-announcer.ts
        setTimeout(function() {
            _this.a11yContainer.textContent = message;
        }, 100);
    };
    /**
     * Determine which animationend event is supported
     */ NotyfView.prototype._getAnimationEndEventName = function() {
        var el = document.createElement("_fake");
        var transitions = {
            MozTransition: "animationend",
            OTransition: "oAnimationEnd",
            WebkitTransition: "webkitAnimationEnd",
            transition: "animationend"
        };
        var t;
        for(t in transitions){
            if (el.style[t] !== undefined) return transitions[t];
        }
        // No supported animation end event. Using "animationend" as a fallback
        return "animationend";
    };
    return NotyfView;
}();
/**
 * Main controller class. Defines the main Notyf API.
 */ var Notyf = /** @class */ function() {
    function Notyf(opts) {
        var _this = this;
        this.dismiss = this._removeNotification;
        this.notifications = new NotyfArray();
        this.view = new NotyfView();
        var types = this.registerTypes(opts);
        this.options = __assign(__assign({}, DEFAULT_OPTIONS), opts);
        this.options.types = types;
        this.notifications.onUpdate(function(elem, type) {
            return _this.view.update(elem, type);
        });
        this.view.on(NotyfEvent.Dismiss, function(_a) {
            var target = _a.target, event = _a.event;
            _this._removeNotification(target);
            // tslint:disable-next-line: no-string-literal
            target["triggerEvent"](NotyfEvent.Dismiss, event);
        });
        // tslint:disable-next-line: no-string-literal
        this.view.on(NotyfEvent.Click, function(_a) {
            var target = _a.target, event = _a.event;
            return target["triggerEvent"](NotyfEvent.Click, event);
        });
    }
    Notyf.prototype.error = function(payload) {
        var options = this.normalizeOptions("error", payload);
        return this.open(options);
    };
    Notyf.prototype.success = function(payload) {
        var options = this.normalizeOptions("success", payload);
        return this.open(options);
    };
    Notyf.prototype.open = function(options) {
        var defaultOpts = this.options.types.find(function(_a) {
            var type = _a.type;
            return type === options.type;
        }) || {};
        var config = __assign(__assign({}, defaultOpts), options);
        this.assignProps([
            "ripple",
            "position",
            "dismissible"
        ], config);
        var notification = new NotyfNotification(config);
        this._pushNotification(notification);
        return notification;
    };
    Notyf.prototype.dismissAll = function() {
        while(this.notifications.splice(0, 1));
    };
    /**
     * Assigns properties to a config object based on two rules:
     * 1. If the config object already sets that prop, leave it as so
     * 2. Otherwise, use the default prop from the global options
     *
     * It's intended to build the final config object to open a notification. e.g. if
     * 'dismissible' is not set, then use the value from the global config.
     *
     * @param props - properties to be assigned to the config object
     * @param config - object whose properties need to be set
     */ Notyf.prototype.assignProps = function(props, config) {
        var _this = this;
        props.forEach(function(prop) {
            // intentional double equality to check for both null and undefined
            config[prop] = config[prop] == null ? _this.options[prop] : config[prop];
        });
    };
    Notyf.prototype._pushNotification = function(notification) {
        var _this = this;
        this.notifications.push(notification);
        var duration = notification.options.duration !== undefined ? notification.options.duration : this.options.duration;
        if (duration) setTimeout(function() {
            return _this._removeNotification(notification);
        }, duration);
    };
    Notyf.prototype._removeNotification = function(notification) {
        var index = this.notifications.indexOf(notification);
        if (index !== -1) this.notifications.splice(index, 1);
    };
    Notyf.prototype.normalizeOptions = function(type, payload) {
        var options = {
            type: type
        };
        if (typeof payload === "string") options.message = payload;
        else if (typeof payload === "object") options = __assign(__assign({}, options), payload);
        return options;
    };
    Notyf.prototype.registerTypes = function(opts) {
        var incomingTypes = (opts && opts.types || []).slice();
        var finalDefaultTypes = DEFAULT_OPTIONS.types.map(function(defaultType) {
            // find if there's a default type within the user input's types, if so, it means the user
            // wants to change some of the default settings
            var userTypeIdx = -1;
            incomingTypes.forEach(function(t, idx) {
                if (t.type === defaultType.type) userTypeIdx = idx;
            });
            var userType = userTypeIdx !== -1 ? incomingTypes.splice(userTypeIdx, 1)[0] : {};
            return __assign(__assign({}, defaultType), userType);
        });
        return finalDefaultTypes.concat(incomingTypes);
    };
    return Notyf;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"bituW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sidecart_item", ()=>sidecart_item);
parcelHelpers.export(exports, "maincart_item", ()=>maincart_item);
const sidecart_item = (item, index)=>{
    return /*html*/ `
        <div class="sidecart-draw-items__item" data-line="${index + 1}">
            <div class="sidecart-draw-items__item__image">
                <img src="${item.image}" loading="lazy" alt="${item.product_title}">
            </div>
            <div class="sidecart-draw-items__item__details">
                
                <a href="#" class="sidecart-draw-items__item__details__remove" onclick="changeSideCartQuantity(event, 0)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#000" fill-rule="nonzero" d="M12 10.169 7.831 6 12 1.83 10.169 0 6 4.17 1.831 0 .001 1.83 4.17 6 0 10.169 1.83 12 6 7.83 10.169 12z"/></svg>
                </a>

                <p><b>${item.product_title}</b></p>
                
                <p class="small">
                    ${item.product_title}
                    ${item.variant_title ? `<br>${item.variant_title}` : ``}
                </p>

                <div class="quantity">
                  <div class="quantity-remove" onclick="changeSideCartQuantity(event,-1)">-</div>
                  <div class="quantity-input">
                    <input type="text" value="${item.quantity}">
                  </div>
                  <div class="quantity-add" onclick="changeSideCartQuantity(event,1)">+</div>
                </div>

                <p class="sidecart-draw-items__item__details__price">$${parseFloat(item.quantity * item.price / 100).toFixed(2)}</p>
            </div>
        </div>
    `;
};
const maincart_item = (item, index)=>{
    console.log(item);
    return /*html*/ `
    <tr class="cart__wrap__form__table__body__row" data-line="${index + 1}">
    <td class="cart__wrap__form__table__body__row__cell">
      <a href="${item.link}" class="cart__wrap__form__table__body__row__cell__image">
        <img src="${item.image}" alt="${item.product_title}" width="400" height="400">
      </a>
    </td>
    <td class="cart__wrap__form__table__body__row__cell cart__wrap__form__table__body__row__cell--details">
      <a class="colour--green" href="${item.link}">
        <h5 class="no-margin"><b>${item.product_title}</b></h5>
      </a>
    </td>
    <td class="cart__wrap__form__table__body__row__cell">
      <div class="quantity quantity--cart">
        <div class="quantity-remove" onclick="changeMainCartQuantity(event,-1)">-</div>
        <div class="quantity-input">
          <input type="text" value="${item.quantity}">
        </div>
        <div class="quantity-add" onclick="changeMainCartQuantity(event,1)">+</div>
      </div>
    </td>
    <td class="cart__wrap__form__table__body__row__cell cart__wrap__form__table__body__row__cell--total">
        <h5 class="no-margin">$${parseFloat(item.quantity * item.price / 100).toFixed(2)}</h5>
    </td>
    <td class="cart__wrap__form__table__body__row__cell">
      <a href="/cart/change?line=${index + 1}&amp;quantity=0" data-cart-item-index="2" class="[ js-remove-from-cart ]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25">
          <path fill-rule="evenodd" d="M5.488 0v3.628H.045v1.814H1.86v19.955h16.327V5.442H20V3.628h-5.442V0h-9.07Zm1.814 1.814h5.442v1.814H7.302V1.814ZM3.673 5.442h12.699v18.14H3.673V5.443Zm2.722 2.721v12.699h1.814V8.163H6.395Zm5.442 0v12.699h1.814V8.163h-1.814Z"></path>
        </svg>
      </a>
    </td>
  </tr>`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}]},["6cUJw","fWapj"], "fWapj", "parcelRequire2d09")

//# sourceMappingURL=app.js.map
