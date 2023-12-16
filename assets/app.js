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
var _cursor = require("./cursor");
var _accordion = require("./accordion");
var _flickity = require("flickity");
var _flickityDefault = parcelHelpers.interopDefault(_flickity);
var _inView = require("in-view");
var _inViewDefault = parcelHelpers.interopDefault(_inView);
var _animeEsJs = require("animejs/lib/anime.es.js");
var _animeEsJsDefault = parcelHelpers.interopDefault(_animeEsJs);
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
var _glightbox = require("glightbox");
var _glightboxDefault = parcelHelpers.interopDefault(_glightbox);
console.log("Vital Bits v1.0.0");
(0, _inViewDefault.default)(".js-gradient").on("enter", (el)=>{
    el.classList.add("inview");
    (0, _lib.$)("body").setAttribute("data-theme", el.dataset.collection);
});
// new ('.articles-grid__item__content h4');
if ((0, _lib.$)(".js-accordion-element")) (0, _lib.$$)(".js-accordion-element").forEach((element)=>new (0, _accordion.Accordion)(element));
if ((0, _lib.$)(".product-details")) {
    // Declare our choices options
    const options = {
        searchEnabled: false,
        itemSelectText: "",
        shouldSort: false,
        placeholder: true,
        allowHTML: true
    };
    if ((0, _lib.$)(".js-variant")) {
        new (0, _choicesJsDefault.default)((0, _lib.$)(".js-variant"), options);
        (0, _lib.$)(".js-variant").addEventListener("change", (event)=>{
            let variant = event.detail.value;
            let variantData = window.inventories[variant];
            (0, _lib.$)(".js-variation-price").innerHTML = variantData.price;
        });
    }
    (0, _lib.$$)(".product-details h4").forEach((element)=>{
        let uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        //wrap html in span
        let html = element.outerHTML;
        // strip all html tags
        html = html.replace(/(<([^>]+)>)/gi, "");
        // get all the html until the next h4
        let content = "";
        let next = element.nextElementSibling;
        while(next && next.tagName !== "H4"){
            content += next.outerHTML;
            nextNext = next.nextElementSibling;
            next.outerHTML = "";
            next = nextNext;
        }
        element.outerHTML = /*html*/ `
                <section class="accordion-element accordion-element-dynamic [ element ]">
                    <div class="accordion-element__wrap">
                        <div class="accordion-element__item [ js-accordion-element ][ js-accordion-element-dynamic ]" id="accordion_${uuid}">
                            <button class="accordion-element__trigger [ js-trigger ]" aria-expanded="false" aria-controls="accordion_section_${uuid}">
                                <h6 class="no-margin">
                                    <b>${html}</b>
                                </h6>
                            </button>
                            <div class="accordion-element__content [ js-content ]" role="region" aria-labelledby="accordion_section_${uuid}">
                                <div class="accordion-element__inner">
                                  ${content}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
    });
    setTimeout(()=>{
        (0, _lib.$$)(".js-accordion-element-dynamic").forEach((element)=>new (0, _accordion.Accordion)(element));
    }, 400);
}
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
/*------------------------------------------------------------------
Import external
------------------------------------------------------------------*/ // import $ from 'jquery';
// import slick from 'slick-carousel';
/*------------------------------------------------------------------
Product gallery slider
------------------------------------------------------------------*/ document.addEventListener("DOMContentLoaded", ()=>{
    let tick;
    let percent = 0;
    let hovered = false;
    let $productSlider = (0, _lib.$)(".js-product-imagery-slider");
    let $productSliderProgress = (0, _lib.$)(".js-gallery-progress");
    let $productSliderProgressCircle = (0, _lib.$)(".js-gallery-progress-circle");
    if ($productSlider) {
        /**
         * Reset the progress bars' animation to zero 
         */ const resetProgressbar = ()=>{
            $productSliderProgress.style.width = `${0}%`;
            $productSliderProgressCircle.setAttribute("stroke-dashoffset", 0);
            clearInterval(tick);
        };
        /**
         * Start the progress bar animating 
         */ const startProgressbar = ()=>{
            resetProgressbar();
            hovered = false;
            percent = 0;
            tick = setInterval(interval, 10);
        };
        /**
         * Set our animation speed for the progress bar
         */ const interval = ()=>{
            if (!hovered) percent += .19;
            $productSliderProgress.style.width = `${percent}%`;
            $productSliderProgressCircle.setAttribute("stroke-dashoffset", percent * Math.PI);
        };
        let product_slider = new (0, _flickityDefault.default)(".js-product-imagery-slider", {
            wrapAround: true,
            pageDots: false,
            prevNextButtons: false,
            autoPlay: 5250
        });
        startProgressbar();
        product_slider.on("change", ()=>startProgressbar());
        (0, _lib.$)(".js-cursor-previous").addEventListener("click", (e)=>{
            e.preventDefault();
            product_slider.previous();
        });
        (0, _lib.$)(".js-cursor-next").addEventListener("click", (e)=>{
            e.preventDefault();
            product_slider.next();
        });
        let images = [];
        const productSliderItemImages = document.querySelectorAll(".js-product-slider-item-image");
        productSliderItemImages.forEach((el)=>{
            images.push({
                "href": el.getAttribute("data-lightbox-image"),
                "type": "image"
            });
        });
        const myGallery = (0, _glightboxDefault.default)({
            height: "90%",
            touchNavigation: true,
            elements: images
        });
        document.body.addEventListener("click", (e)=>{
            if (e.target.classList.contains("js-product-lightbox")) {
                e.preventDefault();
                myGallery.open();
            }
        });
        if ((0, _lib.$)(".eye-roll")) document.body.addEventListener("mousemove", function(event) {
            let eye = (0, _lib.$)(".eye-roll");
            let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let y = eye.getBoundingClientRect().top + eye.clientWidth / 2;
            let rad = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = rad * (180 / Math.PI) * -1 + 180;
            eye.style.webkitTransform = "rotate(" + rot + "deg)";
            eye.style.mozTransform = "rotate(" + rot + "deg)";
            eye.style.msTransform = "rotate(" + rot + "deg)";
            eye.style.transform = "rotate(" + rot + "deg)";
        });
    }
});

},{"./lib":"acGTP","./search":"4fKJc","flickity":"lGlvh","in-view":"70hii","animejs/lib/anime.es.js":"hQAdq","@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS","./shop":"1fHDu","./accordion":"lWUal","choices.js":"7Oucv","./cursor":"9Us5D","glightbox":"119aE"}],"acGTP":[function(require,module,exports) {
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
    let total = 0;
    let $side_cart = (0, _lib.$)(".sidecart-draw-items");
    let $side_cart_total = (0, _lib.$)(".js-sidecart-total");
    let $afterpay_payments = (0, _lib.$)(".js-afterpay-payments");
    let $afterpay = (0, _lib.$)(".sidecart-draw-actions-afterpay");
    cart.items.forEach((item, index)=>{
        html += (0, _templates.sidecart_item)(item, index);
        total += parseFloat(item.quantity * item.price / 100);
    });
    if ($side_cart) $side_cart.innerHTML = html;
    if ($side_cart_total) $side_cart_total.innerHTML = `$${total.toFixed(2)}`;
    if ($afterpay_payments) $afterpay_payments.innerHTML = `$${(total / 4).toFixed(2)}`;
    total === 0 ? $afterpay.style.display = "none" : $afterpay.style.display = "block";
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
                <img src="${item.image || `//vital-bits.myshopify.com/cdn/shop/t/3/assets/placeholder.jpeg?v=49819949536947215331702494934`}" loading="lazy" alt="${item.product_title}">
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"lWUal":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Accordion", ()=>Accordion);
class Accordion {
    /**
     * 
     * Initialise the accordion item
     * 
     */ init() {
        // Get the initial state of the accordion
        this.getState();
        // Add the click event handler to the accordion
        this.addEventListeners();
    }
    /**
     * 
     * Get the current state of the accordion
     * 
     */ getState() {
        this.is_open = this.accordion.classList.contains("active");
    }
    /**
    * 
    * Toggle the current state of the accordion
    * 
    */ toggle() {
        this.is_open ? this.close() : this.open();
    }
    /**
     * 
     * Add the click event handler to the accordion
     * 
     */ addEventListeners() {
        this.accordion.addEventListener("click", ()=>this.toggle());
    }
    /**
     * 
     * Add the click event handler to the accordion
     * 
     */ updateState(state) {
        // Update the current state
        this.is_open = state;
        // Update the aria-expanded attribute
        this.trigger.setAttribute("aria-expanded", state);
    }
    /**
     * 
     * Open the accordion
     * 
     */ open() {
        // Add active class to the accordion
        this.accordion.classList.add("active");
        // Quickly get the height we want to animate to
        this.content.style.height = "auto";
        var height = this.content.clientHeight + "px";
        // Revert the heioght back to nothing
        this.content.style.height = 0;
        // Animate the height once the calculations are done
        setTimeout(()=>this.content.style.height = height, 0);
        // Update the current state
        this.updateState(true);
    }
    /**
     * 
     * Close the accordion
     * 
     */ close() {
        // Revert the height back to nothing
        this.content.style.height = 0;
        // Remove the active class once animations are over
        this.content.addEventListener("transitionend", ()=>{
            this.accordion.classList.remove("active");
        }, {
            once: true
        });
        // Update the current state
        this.updateState(false);
    }
    /**
     * 
     * Constructor
     * 
     * @param {element} element accordion parent
     */ constructor(element){
        this.accordion = element;
        this.trigger = this.accordion.querySelector(".js-trigger");
        this.content = this.accordion.querySelector(".js-content");
        // Initialise the accordion
        this.init();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"7Oucv":[function(require,module,exports) {
/*! choices.js v10.2.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(window, function() {
    return /******/ function() {
        /******/ "use strict";
        /******/ var __webpack_modules__ = {
            /***/ 282: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
                var constants_1 = __webpack_require__(883);
                var addChoice = function(_a) {
                    var value = _a.value, label = _a.label, id = _a.id, groupId = _a.groupId, disabled = _a.disabled, elementId = _a.elementId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                    return {
                        type: constants_1.ACTION_TYPES.ADD_CHOICE,
                        value: value,
                        label: label,
                        id: id,
                        groupId: groupId,
                        disabled: disabled,
                        elementId: elementId,
                        customProperties: customProperties,
                        placeholder: placeholder,
                        keyCode: keyCode
                    };
                };
                exports.addChoice = addChoice;
                var filterChoices = function(results) {
                    return {
                        type: constants_1.ACTION_TYPES.FILTER_CHOICES,
                        results: results
                    };
                };
                exports.filterChoices = filterChoices;
                var activateChoices = function(active) {
                    if (active === void 0) active = true;
                    return {
                        type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
                        active: active
                    };
                };
                exports.activateChoices = activateChoices;
                var clearChoices = function() {
                    return {
                        type: constants_1.ACTION_TYPES.CLEAR_CHOICES
                    };
                };
                exports.clearChoices = clearChoices;
            /***/ },
            /***/ 783: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.addGroup = void 0;
                var constants_1 = __webpack_require__(883);
                var addGroup = function(_a) {
                    var value = _a.value, id = _a.id, active = _a.active, disabled = _a.disabled;
                    return {
                        type: constants_1.ACTION_TYPES.ADD_GROUP,
                        value: value,
                        id: id,
                        active: active,
                        disabled: disabled
                    };
                };
                exports.addGroup = addGroup;
            /***/ },
            /***/ 464: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.highlightItem = exports.removeItem = exports.addItem = void 0;
                var constants_1 = __webpack_require__(883);
                var addItem = function(_a) {
                    var value = _a.value, label = _a.label, id = _a.id, choiceId = _a.choiceId, groupId = _a.groupId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                    return {
                        type: constants_1.ACTION_TYPES.ADD_ITEM,
                        value: value,
                        label: label,
                        id: id,
                        choiceId: choiceId,
                        groupId: groupId,
                        customProperties: customProperties,
                        placeholder: placeholder,
                        keyCode: keyCode
                    };
                };
                exports.addItem = addItem;
                var removeItem = function(id, choiceId) {
                    return {
                        type: constants_1.ACTION_TYPES.REMOVE_ITEM,
                        id: id,
                        choiceId: choiceId
                    };
                };
                exports.removeItem = removeItem;
                var highlightItem = function(id, highlighted) {
                    return {
                        type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
                        id: id,
                        highlighted: highlighted
                    };
                };
                exports.highlightItem = highlightItem;
            /***/ },
            /***/ 137: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
                var constants_1 = __webpack_require__(883);
                var clearAll = function() {
                    return {
                        type: constants_1.ACTION_TYPES.CLEAR_ALL
                    };
                };
                exports.clearAll = clearAll;
                var resetTo = function(state) {
                    return {
                        type: constants_1.ACTION_TYPES.RESET_TO,
                        state: state
                    };
                };
                exports.resetTo = resetTo;
                var setIsLoading = function(isLoading) {
                    return {
                        type: constants_1.ACTION_TYPES.SET_IS_LOADING,
                        isLoading: isLoading
                    };
                };
                exports.setIsLoading = setIsLoading;
            /***/ },
            /***/ 373: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var deepmerge_1 = __importDefault(__webpack_require__(996));
                /* eslint-disable @typescript-eslint/no-explicit-any */ var fuse_js_1 = __importDefault(__webpack_require__(221));
                var choices_1 = __webpack_require__(282);
                var groups_1 = __webpack_require__(783);
                var items_1 = __webpack_require__(464);
                var misc_1 = __webpack_require__(137);
                var components_1 = __webpack_require__(520);
                var constants_1 = __webpack_require__(883);
                var defaults_1 = __webpack_require__(789);
                var utils_1 = __webpack_require__(799);
                var reducers_1 = __webpack_require__(655);
                var store_1 = __importDefault(__webpack_require__(744));
                var templates_1 = __importDefault(__webpack_require__(686));
                /** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */ var IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                var USER_DEFAULTS = {};
                /**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */ var Choices = /** @class */ function() {
                    function Choices(element, userConfig) {
                        if (element === void 0) element = "[data-choice]";
                        if (userConfig === void 0) userConfig = {};
                        var _this = this;
                        if (userConfig.allowHTML === undefined) console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.");
                        this.config = deepmerge_1.default.all([
                            defaults_1.DEFAULT_CONFIG,
                            Choices.defaults.options,
                            userConfig
                        ], // When merging array configs, replace with a copy of the userConfig array,
                        // instead of concatenating with the default array
                        {
                            arrayMerge: function(_, sourceArray) {
                                return __spreadArray([], sourceArray, true);
                            }
                        });
                        var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
                        if (invalidConfigOptions.length) console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
                        var passedElement = typeof element === "string" ? document.querySelector(element) : element;
                        if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                        this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
                        this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
                        this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
                        this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                        this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                        if (![
                            "auto",
                            "always"
                        ].includes("".concat(this.config.renderSelectedChoices))) this.config.renderSelectedChoices = "auto";
                        if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
                            var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                            this.config.addItemFilter = re.test.bind(re);
                        }
                        if (this._isTextElement) this.passedElement = new components_1.WrappedInput({
                            element: passedElement,
                            classNames: this.config.classNames,
                            delimiter: this.config.delimiter
                        });
                        else this.passedElement = new components_1.WrappedSelect({
                            element: passedElement,
                            classNames: this.config.classNames,
                            template: function(data) {
                                return _this._templates.option(data);
                            }
                        });
                        this.initialised = false;
                        this._store = new store_1.default();
                        this._initialState = reducers_1.defaultState;
                        this._currentState = reducers_1.defaultState;
                        this._prevState = reducers_1.defaultState;
                        this._currentValue = "";
                        this._canSearch = !!this.config.searchEnabled;
                        this._isScrollingOnIe = false;
                        this._highlightPosition = 0;
                        this._wasTap = true;
                        this._placeholderValue = this._generatePlaceholderValue();
                        this._baseId = (0, utils_1.generateId)(this.passedElement.element, "choices-");
                        /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     */ this._direction = this.passedElement.dir;
                        if (!this._direction) {
                            var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                            var documentDirection = window.getComputedStyle(document.documentElement).direction;
                            if (elementDirection !== documentDirection) this._direction = elementDirection;
                        }
                        this._idNames = {
                            itemChoice: "item-choice"
                        };
                        if (this._isSelectElement) {
                            // Assign preset groups from passed element
                            this._presetGroups = this.passedElement.optionGroups;
                            // Assign preset options from passed element
                            this._presetOptions = this.passedElement.options;
                        }
                        // Assign preset choices from passed object
                        this._presetChoices = this.config.choices;
                        // Assign preset items from passed object first
                        this._presetItems = this.config.items;
                        // Add any values passed from attribute
                        if (this.passedElement.value && this._isTextElement) {
                            var splitValues = this.passedElement.value.split(this.config.delimiter);
                            this._presetItems = this._presetItems.concat(splitValues);
                        }
                        // Create array of choices from option elements
                        if (this.passedElement.options) this.passedElement.options.forEach(function(option) {
                            _this._presetChoices.push({
                                value: option.value,
                                label: option.innerHTML,
                                selected: !!option.selected,
                                disabled: option.disabled || option.parentNode.disabled,
                                placeholder: option.value === "" || option.hasAttribute("placeholder"),
                                customProperties: (0, utils_1.parseCustomProperties)(option.dataset.customProperties)
                            });
                        });
                        this._render = this._render.bind(this);
                        this._onFocus = this._onFocus.bind(this);
                        this._onBlur = this._onBlur.bind(this);
                        this._onKeyUp = this._onKeyUp.bind(this);
                        this._onKeyDown = this._onKeyDown.bind(this);
                        this._onClick = this._onClick.bind(this);
                        this._onTouchMove = this._onTouchMove.bind(this);
                        this._onTouchEnd = this._onTouchEnd.bind(this);
                        this._onMouseDown = this._onMouseDown.bind(this);
                        this._onMouseOver = this._onMouseOver.bind(this);
                        this._onFormReset = this._onFormReset.bind(this);
                        this._onSelectKey = this._onSelectKey.bind(this);
                        this._onEnterKey = this._onEnterKey.bind(this);
                        this._onEscapeKey = this._onEscapeKey.bind(this);
                        this._onDirectionKey = this._onDirectionKey.bind(this);
                        this._onDeleteKey = this._onDeleteKey.bind(this);
                        // If element has already been initialised with Choices, fail silently
                        if (this.passedElement.isActive) {
                            if (!this.config.silent) console.warn("Trying to initialise Choices on element already initialised", {
                                element: element
                            });
                            this.initialised = true;
                            return;
                        }
                        // Let's go
                        this.init();
                    }
                    Object.defineProperty(Choices, "defaults", {
                        get: function() {
                            return Object.preventExtensions({
                                get options () {
                                    return USER_DEFAULTS;
                                },
                                get templates () {
                                    return templates_1.default;
                                }
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Choices.prototype.init = function() {
                        if (this.initialised) return;
                        this._createTemplates();
                        this._createElements();
                        this._createStructure();
                        this._store.subscribe(this._render);
                        this._render();
                        this._addEventListeners();
                        var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                        if (shouldDisable) this.disable();
                        this.initialised = true;
                        var callbackOnInit = this.config.callbackOnInit;
                        // Run callback if it is a function
                        if (callbackOnInit && typeof callbackOnInit === "function") callbackOnInit.call(this);
                    };
                    Choices.prototype.destroy = function() {
                        if (!this.initialised) return;
                        this._removeEventListeners();
                        this.passedElement.reveal();
                        this.containerOuter.unwrap(this.passedElement.element);
                        this.clearStore();
                        if (this._isSelectElement) this.passedElement.options = this._presetOptions;
                        this._templates = templates_1.default;
                        this.initialised = false;
                    };
                    Choices.prototype.enable = function() {
                        if (this.passedElement.isDisabled) this.passedElement.enable();
                        if (this.containerOuter.isDisabled) {
                            this._addEventListeners();
                            this.input.enable();
                            this.containerOuter.enable();
                        }
                        return this;
                    };
                    Choices.prototype.disable = function() {
                        if (!this.passedElement.isDisabled) this.passedElement.disable();
                        if (!this.containerOuter.isDisabled) {
                            this._removeEventListeners();
                            this.input.disable();
                            this.containerOuter.disable();
                        }
                        return this;
                    };
                    Choices.prototype.highlightItem = function(item, runEvent) {
                        if (runEvent === void 0) runEvent = true;
                        if (!item || !item.id) return this;
                        var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        this._store.dispatch((0, items_1.highlightItem)(id, true));
                        if (runEvent) this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                            id: id,
                            value: value,
                            label: label,
                            groupValue: group && group.value ? group.value : null
                        });
                        return this;
                    };
                    Choices.prototype.unhighlightItem = function(item) {
                        if (!item || !item.id) return this;
                        var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        this._store.dispatch((0, items_1.highlightItem)(id, false));
                        this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                            id: id,
                            value: value,
                            label: label,
                            groupValue: group && group.value ? group.value : null
                        });
                        return this;
                    };
                    Choices.prototype.highlightAll = function() {
                        var _this = this;
                        this._store.items.forEach(function(item) {
                            return _this.highlightItem(item);
                        });
                        return this;
                    };
                    Choices.prototype.unhighlightAll = function() {
                        var _this = this;
                        this._store.items.forEach(function(item) {
                            return _this.unhighlightItem(item);
                        });
                        return this;
                    };
                    Choices.prototype.removeActiveItemsByValue = function(value) {
                        var _this = this;
                        this._store.activeItems.filter(function(item) {
                            return item.value === value;
                        }).forEach(function(item) {
                            return _this._removeItem(item);
                        });
                        return this;
                    };
                    Choices.prototype.removeActiveItems = function(excludedId) {
                        var _this = this;
                        this._store.activeItems.filter(function(_a) {
                            var id = _a.id;
                            return id !== excludedId;
                        }).forEach(function(item) {
                            return _this._removeItem(item);
                        });
                        return this;
                    };
                    Choices.prototype.removeHighlightedItems = function(runEvent) {
                        var _this = this;
                        if (runEvent === void 0) runEvent = false;
                        this._store.highlightedActiveItems.forEach(function(item) {
                            _this._removeItem(item);
                            // If this action was performed by the user
                            // trigger the event
                            if (runEvent) _this._triggerChange(item.value);
                        });
                        return this;
                    };
                    Choices.prototype.showDropdown = function(preventInputFocus) {
                        var _this = this;
                        if (this.dropdown.isActive) return this;
                        requestAnimationFrame(function() {
                            _this.dropdown.show();
                            _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
                            if (!preventInputFocus && _this._canSearch) _this.input.focus();
                            _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
                        });
                        return this;
                    };
                    Choices.prototype.hideDropdown = function(preventInputBlur) {
                        var _this = this;
                        if (!this.dropdown.isActive) return this;
                        requestAnimationFrame(function() {
                            _this.dropdown.hide();
                            _this.containerOuter.close();
                            if (!preventInputBlur && _this._canSearch) {
                                _this.input.removeActiveDescendant();
                                _this.input.blur();
                            }
                            _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
                        });
                        return this;
                    };
                    Choices.prototype.getValue = function(valueOnly) {
                        if (valueOnly === void 0) valueOnly = false;
                        var values = this._store.activeItems.reduce(function(selectedItems, item) {
                            var itemValue = valueOnly ? item.value : item;
                            selectedItems.push(itemValue);
                            return selectedItems;
                        }, []);
                        return this._isSelectOneElement ? values[0] : values;
                    };
                    Choices.prototype.setValue = function(items) {
                        var _this = this;
                        if (!this.initialised) return this;
                        items.forEach(function(value) {
                            return _this._setChoiceOrItem(value);
                        });
                        return this;
                    };
                    Choices.prototype.setChoiceByValue = function(value) {
                        var _this = this;
                        if (!this.initialised || this._isTextElement) return this;
                        // If only one value has been passed, convert to array
                        var choiceValue = Array.isArray(value) ? value : [
                            value
                        ];
                        // Loop through each value and
                        choiceValue.forEach(function(val) {
                            return _this._findAndSelectChoiceByValue(val);
                        });
                        return this;
                    };
                    /**
   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
   *
   * **Input types affected:** select-one, select-multiple
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([
   *   {value: 'One', label: 'Label One', disabled: true},
   *   {value: 'Two', label: 'Label Two', selected: true},
   *   {value: 'Three', label: 'Label Three'},
   * ], 'value', 'label', false);
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices(async () => {
   *   try {
   *      const items = await fetch('/items');
   *      return items.json()
   *   } catch(err) {
   *      console.error(err)
   *   }
   * });
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([{
   *   label: 'Group one',
   *   id: 1,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child One', label: 'Child One', selected: true},
   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
   *     {value: 'Child Three', label: 'Child Three'},
   *   ]
   * },
   * {
   *   label: 'Group two',
   *   id: 2,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child Four', label: 'Child Four', disabled: true},
   *     {value: 'Child Five', label: 'Child Five'},
   *     {value: 'Child Six', label: 'Child Six', customProperties: {
   *       description: 'Custom description about child six',
   *       random: 'Another random custom property'
   *     }},
   *   ]
   * }], 'value', 'label', false);
   * ```
   */ Choices.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices) {
                        var _this = this;
                        if (choicesArrayOrFetcher === void 0) choicesArrayOrFetcher = [];
                        if (value === void 0) value = "value";
                        if (label === void 0) label = "label";
                        if (replaceChoices === void 0) replaceChoices = false;
                        if (!this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                        if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                        if (typeof value !== "string" || !value) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                        // Clear choices if needed
                        if (replaceChoices) this.clearChoices();
                        if (typeof choicesArrayOrFetcher === "function") {
                            // it's a choices fetcher function
                            var fetcher_1 = choicesArrayOrFetcher(this);
                            if (typeof Promise === "function" && fetcher_1 instanceof Promise) // that's a promise
                            // eslint-disable-next-line no-promise-executor-return
                            return new Promise(function(resolve) {
                                return requestAnimationFrame(resolve);
                            }).then(function() {
                                return _this._handleLoadingState(true);
                            }).then(function() {
                                return fetcher_1;
                            }).then(function(data) {
                                return _this.setChoices(data, value, label, replaceChoices);
                            }).catch(function(err) {
                                if (!_this.config.silent) console.error(err);
                            }).then(function() {
                                return _this._handleLoadingState(false);
                            }).then(function() {
                                return _this;
                            });
                            // function returned something else than promise, let's check if it's an array of choices
                            if (!Array.isArray(fetcher_1)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                            // recursion with results, it's sync and choices were cleared already
                            return this.setChoices(fetcher_1, value, label, false);
                        }
                        if (!Array.isArray(choicesArrayOrFetcher)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                        this.containerOuter.removeLoadingState();
                        this._startLoading();
                        choicesArrayOrFetcher.forEach(function(groupOrChoice) {
                            if (groupOrChoice.choices) _this._addGroup({
                                id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                                group: groupOrChoice,
                                valueKey: value,
                                labelKey: label
                            });
                            else {
                                var choice = groupOrChoice;
                                _this._addChoice({
                                    value: choice[value],
                                    label: choice[label],
                                    isSelected: !!choice.selected,
                                    isDisabled: !!choice.disabled,
                                    placeholder: !!choice.placeholder,
                                    customProperties: choice.customProperties
                                });
                            }
                        });
                        this._stopLoading();
                        return this;
                    };
                    Choices.prototype.clearChoices = function() {
                        this._store.dispatch((0, choices_1.clearChoices)());
                        return this;
                    };
                    Choices.prototype.clearStore = function() {
                        this._store.dispatch((0, misc_1.clearAll)());
                        return this;
                    };
                    Choices.prototype.clearInput = function() {
                        var shouldSetInputWidth = !this._isSelectOneElement;
                        this.input.clear(shouldSetInputWidth);
                        if (!this._isTextElement && this._canSearch) {
                            this._isSearching = false;
                            this._store.dispatch((0, choices_1.activateChoices)(true));
                        }
                        return this;
                    };
                    Choices.prototype._render = function() {
                        if (this._store.isLoading()) return;
                        this._currentState = this._store.state;
                        var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                        var shouldRenderChoices = this._isSelectElement;
                        var shouldRenderItems = this._currentState.items !== this._prevState.items;
                        if (!stateChanged) return;
                        if (shouldRenderChoices) this._renderChoices();
                        if (shouldRenderItems) this._renderItems();
                        this._prevState = this._currentState;
                    };
                    Choices.prototype._renderChoices = function() {
                        var _this = this;
                        var _a = this._store, activeGroups = _a.activeGroups, activeChoices = _a.activeChoices;
                        var choiceListFragment = document.createDocumentFragment();
                        this.choiceList.clear();
                        if (this.config.resetScrollPosition) requestAnimationFrame(function() {
                            return _this.choiceList.scrollToTop();
                        });
                        // If we have grouped options
                        if (activeGroups.length >= 1 && !this._isSearching) {
                            // If we have a placeholder choice along with groups
                            var activePlaceholders = activeChoices.filter(function(activeChoice) {
                                return activeChoice.placeholder === true && activeChoice.groupId === -1;
                            });
                            if (activePlaceholders.length >= 1) choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                            choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                        } else if (activeChoices.length >= 1) choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                        // If we have choices to show
                        if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                            var activeItems = this._store.activeItems;
                            var canAddItem = this._canAddItem(activeItems, this.input.value);
                            // ...and we can select them
                            if (canAddItem.response) {
                                // ...append them and highlight the first choice
                                this.choiceList.append(choiceListFragment);
                                this._highlightChoice();
                            } else {
                                var notice = this._getTemplate("notice", canAddItem.notice);
                                this.choiceList.append(notice);
                            }
                        } else {
                            // Otherwise show a notice
                            var dropdownItem = void 0;
                            var notice = void 0;
                            if (this._isSearching) {
                                notice = typeof this.config.noResultsText === "function" ? this.config.noResultsText() : this.config.noResultsText;
                                dropdownItem = this._getTemplate("notice", notice, "no-results");
                            } else {
                                notice = typeof this.config.noChoicesText === "function" ? this.config.noChoicesText() : this.config.noChoicesText;
                                dropdownItem = this._getTemplate("notice", notice, "no-choices");
                            }
                            this.choiceList.append(dropdownItem);
                        }
                    };
                    Choices.prototype._renderItems = function() {
                        var activeItems = this._store.activeItems || [];
                        this.itemList.clear();
                        // Create a fragment to store our list items
                        // (so we don't have to update the DOM for each item)
                        var itemListFragment = this._createItemsFragment(activeItems);
                        // If we have items to add, append them
                        if (itemListFragment.childNodes) this.itemList.append(itemListFragment);
                    };
                    Choices.prototype._createGroupsFragment = function(groups, choices, fragment) {
                        var _this = this;
                        if (fragment === void 0) fragment = document.createDocumentFragment();
                        var getGroupChoices = function(group) {
                            return choices.filter(function(choice) {
                                if (_this._isSelectOneElement) return choice.groupId === group.id;
                                return choice.groupId === group.id && (_this.config.renderSelectedChoices === "always" || !choice.selected);
                            });
                        };
                        // If sorting is enabled, filter groups
                        if (this.config.shouldSort) groups.sort(this.config.sorter);
                        groups.forEach(function(group) {
                            var groupChoices = getGroupChoices(group);
                            if (groupChoices.length >= 1) {
                                var dropdownGroup = _this._getTemplate("choiceGroup", group);
                                fragment.appendChild(dropdownGroup);
                                _this._createChoicesFragment(groupChoices, fragment, true);
                            }
                        });
                        return fragment;
                    };
                    Choices.prototype._createChoicesFragment = function(choices, fragment, withinGroup) {
                        var _this = this;
                        if (fragment === void 0) fragment = document.createDocumentFragment();
                        if (withinGroup === void 0) withinGroup = false;
                        // Create a fragment to store our list items (so we don't have to update the DOM for each item)
                        var _a = this.config, renderSelectedChoices = _a.renderSelectedChoices, searchResultLimit = _a.searchResultLimit, renderChoiceLimit = _a.renderChoiceLimit;
                        var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
                        var appendChoice = function(choice) {
                            var shouldRender = renderSelectedChoices === "auto" ? _this._isSelectOneElement || !choice.selected : true;
                            if (shouldRender) {
                                var dropdownItem = _this._getTemplate("choice", choice, _this.config.itemSelectText);
                                fragment.appendChild(dropdownItem);
                            }
                        };
                        var rendererableChoices = choices;
                        if (renderSelectedChoices === "auto" && !this._isSelectOneElement) rendererableChoices = choices.filter(function(choice) {
                            return !choice.selected;
                        });
                        // Split array into placeholders and "normal" choices
                        var _b = rendererableChoices.reduce(function(acc, choice) {
                            if (choice.placeholder) acc.placeholderChoices.push(choice);
                            else acc.normalChoices.push(choice);
                            return acc;
                        }, {
                            placeholderChoices: [],
                            normalChoices: []
                        }), placeholderChoices = _b.placeholderChoices, normalChoices = _b.normalChoices;
                        // If sorting is enabled or the user is searching, filter choices
                        if (this.config.shouldSort || this._isSearching) normalChoices.sort(filter);
                        var choiceLimit = rendererableChoices.length;
                        // Prepend placeholeder
                        var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
                        if (this._isSearching) choiceLimit = searchResultLimit;
                        else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) choiceLimit = renderChoiceLimit;
                        // Add each choice to dropdown within range
                        for(var i = 0; i < choiceLimit; i += 1)if (sortedChoices[i]) appendChoice(sortedChoices[i]);
                        return fragment;
                    };
                    Choices.prototype._createItemsFragment = function(items, fragment) {
                        var _this = this;
                        if (fragment === void 0) fragment = document.createDocumentFragment();
                        // Create fragment to add elements to
                        var _a = this.config, shouldSortItems = _a.shouldSortItems, sorter = _a.sorter, removeItemButton = _a.removeItemButton;
                        // If sorting is enabled, filter items
                        if (shouldSortItems && !this._isSelectOneElement) items.sort(sorter);
                        if (this._isTextElement) // Update the value of the hidden input
                        this.passedElement.value = items.map(function(_a) {
                            var value = _a.value;
                            return value;
                        }).join(this.config.delimiter);
                        else // Update the options of the hidden input
                        this.passedElement.options = items;
                        var addItemToFragment = function(item) {
                            // Create new list element
                            var listItem = _this._getTemplate("item", item, removeItemButton);
                            // Append it to list
                            fragment.appendChild(listItem);
                        };
                        // Add each list item to list
                        items.forEach(addItemToFragment);
                        return fragment;
                    };
                    Choices.prototype._triggerChange = function(value) {
                        if (value === undefined || value === null) return;
                        this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                            value: value
                        });
                    };
                    Choices.prototype._selectPlaceholderChoice = function(placeholderChoice) {
                        this._addItem({
                            value: placeholderChoice.value,
                            label: placeholderChoice.label,
                            choiceId: placeholderChoice.id,
                            groupId: placeholderChoice.groupId,
                            placeholder: placeholderChoice.placeholder
                        });
                        this._triggerChange(placeholderChoice.value);
                    };
                    Choices.prototype._handleButtonAction = function(activeItems, element) {
                        if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) return;
                        var itemId = element.parentNode && element.parentNode.dataset.id;
                        var itemToRemove = itemId && activeItems.find(function(item) {
                            return item.id === parseInt(itemId, 10);
                        });
                        if (!itemToRemove) return;
                        // Remove item associated with button
                        this._removeItem(itemToRemove);
                        this._triggerChange(itemToRemove.value);
                        if (this._isSelectOneElement && this._store.placeholderChoice) this._selectPlaceholderChoice(this._store.placeholderChoice);
                    };
                    Choices.prototype._handleItemAction = function(activeItems, element, hasShiftKey) {
                        var _this = this;
                        if (hasShiftKey === void 0) hasShiftKey = false;
                        if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) return;
                        var passedId = element.dataset.id;
                        // We only want to select one item with a click
                        // so we deselect any items that aren't the target
                        // unless shift is being pressed
                        activeItems.forEach(function(item) {
                            if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) _this.highlightItem(item);
                            else if (!hasShiftKey && item.highlighted) _this.unhighlightItem(item);
                        });
                        // Focus input as without focus, a user cannot do anything with a
                        // highlighted item
                        this.input.focus();
                    };
                    Choices.prototype._handleChoiceAction = function(activeItems, element) {
                        if (!activeItems || !element) return;
                        // If we are clicking on an option
                        var id = element.dataset.id;
                        var choice = id && this._store.getChoiceById(id);
                        if (!choice) return;
                        var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : undefined;
                        var hasActiveDropdown = this.dropdown.isActive;
                        // Update choice keyCode
                        choice.keyCode = passedKeyCode;
                        this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                            choice: choice
                        });
                        if (!choice.selected && !choice.disabled) {
                            var canAddItem = this._canAddItem(activeItems, choice.value);
                            if (canAddItem.response) {
                                this._addItem({
                                    value: choice.value,
                                    label: choice.label,
                                    choiceId: choice.id,
                                    groupId: choice.groupId,
                                    customProperties: choice.customProperties,
                                    placeholder: choice.placeholder,
                                    keyCode: choice.keyCode
                                });
                                this._triggerChange(choice.value);
                            }
                        }
                        this.clearInput();
                        // We want to close the dropdown if we are dealing with a single select box
                        if (hasActiveDropdown && this._isSelectOneElement) {
                            this.hideDropdown(true);
                            this.containerOuter.focus();
                        }
                    };
                    Choices.prototype._handleBackspace = function(activeItems) {
                        if (!this.config.removeItems || !activeItems) return;
                        var lastItem = activeItems[activeItems.length - 1];
                        var hasHighlightedItems = activeItems.some(function(item) {
                            return item.highlighted;
                        });
                        // If editing the last item is allowed and there are not other selected items,
                        // we can edit the item value. Otherwise if we can remove items, remove all selected items
                        if (this.config.editItems && !hasHighlightedItems && lastItem) {
                            this.input.value = lastItem.value;
                            this.input.setWidth();
                            this._removeItem(lastItem);
                            this._triggerChange(lastItem.value);
                        } else {
                            if (!hasHighlightedItems) // Highlight last item if none already highlighted
                            this.highlightItem(lastItem, false);
                            this.removeHighlightedItems(true);
                        }
                    };
                    Choices.prototype._startLoading = function() {
                        this._store.dispatch((0, misc_1.setIsLoading)(true));
                    };
                    Choices.prototype._stopLoading = function() {
                        this._store.dispatch((0, misc_1.setIsLoading)(false));
                    };
                    Choices.prototype._handleLoadingState = function(setLoading) {
                        if (setLoading === void 0) setLoading = true;
                        var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                        if (setLoading) {
                            this.disable();
                            this.containerOuter.addLoadingState();
                            if (this._isSelectOneElement) {
                                if (!placeholderItem) {
                                    placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                                    if (placeholderItem) this.itemList.append(placeholderItem);
                                } else placeholderItem.innerHTML = this.config.loadingText;
                            } else this.input.placeholder = this.config.loadingText;
                        } else {
                            this.enable();
                            this.containerOuter.removeLoadingState();
                            if (this._isSelectOneElement) {
                                if (placeholderItem) placeholderItem.innerHTML = this._placeholderValue || "";
                            } else this.input.placeholder = this._placeholderValue || "";
                        }
                    };
                    Choices.prototype._handleSearch = function(value) {
                        if (!this.input.isFocussed) return;
                        var choices = this._store.choices;
                        var _a = this.config, searchFloor = _a.searchFloor, searchChoices = _a.searchChoices;
                        var hasUnactiveChoices = choices.some(function(option) {
                            return !option.active;
                        });
                        // Check that we have a value to search and the input was an alphanumeric character
                        if (value !== null && typeof value !== "undefined" && value.length >= searchFloor) {
                            var resultCount = searchChoices ? this._searchChoices(value) : 0;
                            // Trigger search event
                            this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                                value: value,
                                resultCount: resultCount
                            });
                        } else if (hasUnactiveChoices) {
                            // Otherwise reset choices to active
                            this._isSearching = false;
                            this._store.dispatch((0, choices_1.activateChoices)(true));
                        }
                    };
                    Choices.prototype._canAddItem = function(activeItems, value) {
                        var canAddItem = true;
                        var notice = typeof this.config.addItemText === "function" ? this.config.addItemText(value) : this.config.addItemText;
                        if (!this._isSelectOneElement) {
                            var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
                            if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                                // If there is a max entry limit and we have reached that limit
                                // don't update
                                canAddItem = false;
                                notice = typeof this.config.maxItemText === "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                            }
                            if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                                canAddItem = false;
                                notice = typeof this.config.uniqueItemText === "function" ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                            }
                            if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === "function" && !this.config.addItemFilter(value)) {
                                canAddItem = false;
                                notice = typeof this.config.customAddItemText === "function" ? this.config.customAddItemText(value) : this.config.customAddItemText;
                            }
                        }
                        return {
                            response: canAddItem,
                            notice: notice
                        };
                    };
                    Choices.prototype._searchChoices = function(value) {
                        var newValue = typeof value === "string" ? value.trim() : value;
                        var currentValue = typeof this._currentValue === "string" ? this._currentValue.trim() : this._currentValue;
                        if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) return 0;
                        // If new value matches the desired length and is not the same as the current value with a space
                        var haystack = this._store.searchableChoices;
                        var needle = newValue;
                        var options = Object.assign(this.config.fuseOptions, {
                            keys: __spreadArray([], this.config.searchFields, true),
                            includeMatches: true
                        });
                        var fuse = new fuse_js_1.default(haystack, options);
                        var results = fuse.search(needle); // see https://github.com/krisk/Fuse/issues/303
                        this._currentValue = newValue;
                        this._highlightPosition = 0;
                        this._isSearching = true;
                        this._store.dispatch((0, choices_1.filterChoices)(results));
                        return results.length;
                    };
                    Choices.prototype._addEventListeners = function() {
                        var documentElement = document.documentElement;
                        // capture events - can cancel event processing or propagation
                        documentElement.addEventListener("touchend", this._onTouchEnd, true);
                        this.containerOuter.element.addEventListener("keydown", this._onKeyDown, true);
                        this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, true);
                        // passive events - doesn't call `preventDefault` or `stopPropagation`
                        documentElement.addEventListener("click", this._onClick, {
                            passive: true
                        });
                        documentElement.addEventListener("touchmove", this._onTouchMove, {
                            passive: true
                        });
                        this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                            passive: true
                        });
                        if (this._isSelectOneElement) {
                            this.containerOuter.element.addEventListener("focus", this._onFocus, {
                                passive: true
                            });
                            this.containerOuter.element.addEventListener("blur", this._onBlur, {
                                passive: true
                            });
                        }
                        this.input.element.addEventListener("keyup", this._onKeyUp, {
                            passive: true
                        });
                        this.input.element.addEventListener("focus", this._onFocus, {
                            passive: true
                        });
                        this.input.element.addEventListener("blur", this._onBlur, {
                            passive: true
                        });
                        if (this.input.element.form) this.input.element.form.addEventListener("reset", this._onFormReset, {
                            passive: true
                        });
                        this.input.addEventListeners();
                    };
                    Choices.prototype._removeEventListeners = function() {
                        var documentElement = document.documentElement;
                        documentElement.removeEventListener("touchend", this._onTouchEnd, true);
                        this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, true);
                        this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, true);
                        documentElement.removeEventListener("click", this._onClick);
                        documentElement.removeEventListener("touchmove", this._onTouchMove);
                        this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
                        if (this._isSelectOneElement) {
                            this.containerOuter.element.removeEventListener("focus", this._onFocus);
                            this.containerOuter.element.removeEventListener("blur", this._onBlur);
                        }
                        this.input.element.removeEventListener("keyup", this._onKeyUp);
                        this.input.element.removeEventListener("focus", this._onFocus);
                        this.input.element.removeEventListener("blur", this._onBlur);
                        if (this.input.element.form) this.input.element.form.removeEventListener("reset", this._onFormReset);
                        this.input.removeEventListeners();
                    };
                    Choices.prototype._onKeyDown = function(event) {
                        var keyCode = event.keyCode;
                        var activeItems = this._store.activeItems;
                        var hasFocusedInput = this.input.isFocussed;
                        var hasActiveDropdown = this.dropdown.isActive;
                        var hasItems = this.itemList.hasChildren();
                        var keyString = String.fromCharCode(keyCode);
                        // eslint-disable-next-line no-control-regex
                        var wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
                        var BACK_KEY = constants_1.KEY_CODES.BACK_KEY, DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY, ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY, A_KEY = constants_1.KEY_CODES.A_KEY, ESC_KEY = constants_1.KEY_CODES.ESC_KEY, UP_KEY = constants_1.KEY_CODES.UP_KEY, DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY, PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                        if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
                            this.showDropdown();
                            if (!this.input.isFocussed) /*
          We update the input value with the pressed key as
          the input was not focussed at the time of key press
          therefore does not have the value of the key.
        */ this.input.value += event.key.toLowerCase();
                        }
                        switch(keyCode){
                            case A_KEY:
                                return this._onSelectKey(event, hasItems);
                            case ENTER_KEY:
                                return this._onEnterKey(event, activeItems, hasActiveDropdown);
                            case ESC_KEY:
                                return this._onEscapeKey(hasActiveDropdown);
                            case UP_KEY:
                            case PAGE_UP_KEY:
                            case DOWN_KEY:
                            case PAGE_DOWN_KEY:
                                return this._onDirectionKey(event, hasActiveDropdown);
                            case DELETE_KEY:
                            case BACK_KEY:
                                return this._onDeleteKey(event, activeItems, hasFocusedInput);
                            default:
                        }
                    };
                    Choices.prototype._onKeyUp = function(_a) {
                        var target = _a.target, keyCode = _a.keyCode;
                        var value = this.input.value;
                        var activeItems = this._store.activeItems;
                        var canAddItem = this._canAddItem(activeItems, value);
                        var backKey = constants_1.KEY_CODES.BACK_KEY, deleteKey = constants_1.KEY_CODES.DELETE_KEY;
                        // We are typing into a text input and have a value, we want to show a dropdown
                        // notice. Otherwise hide the dropdown
                        if (this._isTextElement) {
                            var canShowDropdownNotice = canAddItem.notice && value;
                            if (canShowDropdownNotice) {
                                var dropdownItem = this._getTemplate("notice", canAddItem.notice);
                                this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                                this.showDropdown(true);
                            } else this.hideDropdown(true);
                        } else {
                            var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                            var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                            var canReactivateChoices = !this._isTextElement && this._isSearching;
                            var canSearch = this._canSearch && canAddItem.response;
                            if (userHasRemovedValue && canReactivateChoices) {
                                this._isSearching = false;
                                this._store.dispatch((0, choices_1.activateChoices)(true));
                            } else if (canSearch) this._handleSearch(this.input.rawValue);
                        }
                        this._canSearch = this.config.searchEnabled;
                    };
                    Choices.prototype._onSelectKey = function(event, hasItems) {
                        var ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                        var hasCtrlDownKeyPressed = ctrlKey || metaKey;
                        // If CTRL + A or CMD + A have been pressed and there are items to select
                        if (hasCtrlDownKeyPressed && hasItems) {
                            this._canSearch = false;
                            var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                            if (shouldHightlightAll) this.highlightAll();
                        }
                    };
                    Choices.prototype._onEnterKey = function(event, activeItems, hasActiveDropdown) {
                        var target = event.target;
                        var enterKey = constants_1.KEY_CODES.ENTER_KEY;
                        var targetWasButton = target && target.hasAttribute("data-button");
                        if (this._isTextElement && target && target.value) {
                            var value = this.input.value;
                            var canAddItem = this._canAddItem(activeItems, value);
                            if (canAddItem.response) {
                                this.hideDropdown(true);
                                this._addItem({
                                    value: value
                                });
                                this._triggerChange(value);
                                this.clearInput();
                            }
                        }
                        if (targetWasButton) {
                            this._handleButtonAction(activeItems, target);
                            event.preventDefault();
                        }
                        if (hasActiveDropdown) {
                            var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                            if (highlightedChoice) {
                                // add enter keyCode value
                                if (activeItems[0]) activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
                                this._handleChoiceAction(activeItems, highlightedChoice);
                            }
                            event.preventDefault();
                        } else if (this._isSelectOneElement) {
                            this.showDropdown();
                            event.preventDefault();
                        }
                    };
                    Choices.prototype._onEscapeKey = function(hasActiveDropdown) {
                        if (hasActiveDropdown) {
                            this.hideDropdown(true);
                            this.containerOuter.focus();
                        }
                    };
                    Choices.prototype._onDirectionKey = function(event, hasActiveDropdown) {
                        var keyCode = event.keyCode, metaKey = event.metaKey;
                        var downKey = constants_1.KEY_CODES.DOWN_KEY, pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY, pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                        // If up or down key is pressed, traverse through options
                        if (hasActiveDropdown || this._isSelectOneElement) {
                            this.showDropdown();
                            this._canSearch = false;
                            var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                            var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                            var selectableChoiceIdentifier = "[data-choice-selectable]";
                            var nextEl = void 0;
                            if (skipKey) {
                                if (directionInt > 0) nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
                                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                            } else {
                                var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                                if (currentEl) nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
                                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                            }
                            if (nextEl) {
                                // We prevent default to stop the cursor moving
                                // when pressing the arrow
                                if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                                this._highlightChoice(nextEl);
                            }
                            // Prevent default to maintain cursor position whilst
                            // traversing dropdown options
                            event.preventDefault();
                        }
                    };
                    Choices.prototype._onDeleteKey = function(event, activeItems, hasFocusedInput) {
                        var target = event.target;
                        // If backspace or delete key is pressed and the input has no value
                        if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                            this._handleBackspace(activeItems);
                            event.preventDefault();
                        }
                    };
                    Choices.prototype._onTouchMove = function() {
                        if (this._wasTap) this._wasTap = false;
                    };
                    Choices.prototype._onTouchEnd = function(event) {
                        var target = (event || event.touches[0]).target;
                        var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                        if (touchWasWithinContainer) {
                            var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                            if (containerWasExactTarget) {
                                if (this._isTextElement) this.input.focus();
                                else if (this._isSelectMultipleElement) this.showDropdown();
                            }
                            // Prevents focus event firing
                            event.stopPropagation();
                        }
                        this._wasTap = true;
                    };
                    /**
   * Handles mousedown event in capture mode for containetOuter.element
   */ Choices.prototype._onMouseDown = function(event) {
                        var target = event.target;
                        if (!(target instanceof HTMLElement)) return;
                        // If we have our mouse down on the scrollbar and are on IE11...
                        if (IS_IE11 && this.choiceList.element.contains(target)) {
                            // check if click was on a scrollbar area
                            var firstChoice = this.choiceList.element.firstElementChild;
                            var isOnScrollbar = this._direction === "ltr" ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                            this._isScrollingOnIe = isOnScrollbar;
                        }
                        if (target === this.input.element) return;
                        var item = target.closest("[data-button],[data-item],[data-choice]");
                        if (item instanceof HTMLElement) {
                            var hasShiftKey = event.shiftKey;
                            var activeItems = this._store.activeItems;
                            var dataset = item.dataset;
                            if ("button" in dataset) this._handleButtonAction(activeItems, item);
                            else if ("item" in dataset) this._handleItemAction(activeItems, item, hasShiftKey);
                            else if ("choice" in dataset) this._handleChoiceAction(activeItems, item);
                        }
                        event.preventDefault();
                    };
                    /**
   * Handles mouseover event over this.dropdown
   * @param {MouseEvent} event
   */ Choices.prototype._onMouseOver = function(_a) {
                        var target = _a.target;
                        if (target instanceof HTMLElement && "choice" in target.dataset) this._highlightChoice(target);
                    };
                    Choices.prototype._onClick = function(_a) {
                        var target = _a.target;
                        var clickWasWithinContainer = this.containerOuter.element.contains(target);
                        if (clickWasWithinContainer) {
                            if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                                if (this._isTextElement) {
                                    if (document.activeElement !== this.input.element) this.input.focus();
                                } else {
                                    this.showDropdown();
                                    this.containerOuter.focus();
                                }
                            } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
                        } else {
                            var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                            if (hasHighlightedItems) this.unhighlightAll();
                            this.containerOuter.removeFocusState();
                            this.hideDropdown(true);
                        }
                    };
                    Choices.prototype._onFocus = function(_a) {
                        var _b;
                        var _this = this;
                        var target = _a.target;
                        var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
                        if (!focusWasWithinContainer) return;
                        var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                            if (target === _this.input.element) _this.containerOuter.addFocusState();
                        }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                            _this.containerOuter.addFocusState();
                            if (target === _this.input.element) _this.showDropdown(true);
                        }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                            if (target === _this.input.element) {
                                _this.showDropdown(true);
                                // If element is a select box, the focused element is the container and the dropdown
                                // isn't already open, focus and show dropdown
                                _this.containerOuter.addFocusState();
                            }
                        }, _b);
                        focusActions[this.passedElement.element.type]();
                    };
                    Choices.prototype._onBlur = function(_a) {
                        var _b;
                        var _this = this;
                        var target = _a.target;
                        var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
                        if (blurWasWithinContainer && !this._isScrollingOnIe) {
                            var activeItems = this._store.activeItems;
                            var hasHighlightedItems_1 = activeItems.some(function(item) {
                                return item.highlighted;
                            });
                            var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                if (target === _this.input.element) {
                                    _this.containerOuter.removeFocusState();
                                    if (hasHighlightedItems_1) _this.unhighlightAll();
                                    _this.hideDropdown(true);
                                }
                            }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                _this.containerOuter.removeFocusState();
                                if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) _this.hideDropdown(true);
                            }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                if (target === _this.input.element) {
                                    _this.containerOuter.removeFocusState();
                                    _this.hideDropdown(true);
                                    if (hasHighlightedItems_1) _this.unhighlightAll();
                                }
                            }, _b);
                            blurActions[this.passedElement.element.type]();
                        } else {
                            // On IE11, clicking the scollbar blurs our input and thus
                            // closes the dropdown. To stop this, we refocus our input
                            // if we know we are on IE *and* are scrolling.
                            this._isScrollingOnIe = false;
                            this.input.element.focus();
                        }
                    };
                    Choices.prototype._onFormReset = function() {
                        this._store.dispatch((0, misc_1.resetTo)(this._initialState));
                    };
                    Choices.prototype._highlightChoice = function(el) {
                        var _this = this;
                        if (el === void 0) el = null;
                        var choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                        if (!choices.length) return;
                        var passedEl = el;
                        var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
                        // Remove any highlighted choices
                        highlightedChoices.forEach(function(choice) {
                            choice.classList.remove(_this.config.classNames.highlightedState);
                            choice.setAttribute("aria-selected", "false");
                        });
                        if (passedEl) this._highlightPosition = choices.indexOf(passedEl);
                        else {
                            // Highlight choice based on last known highlight location
                            if (choices.length > this._highlightPosition) // If we have an option to highlight
                            passedEl = choices[this._highlightPosition];
                            else // Otherwise highlight the option before
                            passedEl = choices[choices.length - 1];
                            if (!passedEl) passedEl = choices[0];
                        }
                        passedEl.classList.add(this.config.classNames.highlightedState);
                        passedEl.setAttribute("aria-selected", "true");
                        this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                            el: passedEl
                        });
                        if (this.dropdown.isActive) {
                            // IE11 ignores aria-label and blocks virtual keyboard
                            // if aria-activedescendant is set without a dropdown
                            this.input.setActiveDescendant(passedEl.id);
                            this.containerOuter.setActiveDescendant(passedEl.id);
                        }
                    };
                    Choices.prototype._addItem = function(_a) {
                        var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.choiceId, choiceId = _c === void 0 ? -1 : _c, _d = _a.groupId, groupId = _d === void 0 ? -1 : _d, _e = _a.customProperties, customProperties = _e === void 0 ? {} : _e, _f = _a.placeholder, placeholder = _f === void 0 ? false : _f, _g = _a.keyCode, keyCode = _g === void 0 ? -1 : _g;
                        var passedValue = typeof value === "string" ? value.trim() : value;
                        var items = this._store.items;
                        var passedLabel = label || passedValue;
                        var passedOptionId = choiceId || -1;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        var id = items ? items.length + 1 : 1;
                        // If a prepended value has been passed, prepend it
                        if (this.config.prependValue) passedValue = this.config.prependValue + passedValue.toString();
                        // If an appended value has been passed, append it
                        if (this.config.appendValue) passedValue += this.config.appendValue.toString();
                        this._store.dispatch((0, items_1.addItem)({
                            value: passedValue,
                            label: passedLabel,
                            id: id,
                            choiceId: passedOptionId,
                            groupId: groupId,
                            customProperties: customProperties,
                            placeholder: placeholder,
                            keyCode: keyCode
                        }));
                        if (this._isSelectOneElement) this.removeActiveItems(id);
                        // Trigger change event
                        this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                            id: id,
                            value: passedValue,
                            label: passedLabel,
                            customProperties: customProperties,
                            groupValue: group && group.value ? group.value : null,
                            keyCode: keyCode
                        });
                    };
                    Choices.prototype._removeItem = function(item) {
                        var id = item.id, value = item.value, label = item.label, customProperties = item.customProperties, choiceId = item.choiceId, groupId = item.groupId;
                        var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        if (!id || !choiceId) return;
                        this._store.dispatch((0, items_1.removeItem)(id, choiceId));
                        this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                            id: id,
                            value: value,
                            label: label,
                            customProperties: customProperties,
                            groupValue: group && group.value ? group.value : null
                        });
                    };
                    Choices.prototype._addChoice = function(_a) {
                        var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.groupId, groupId = _e === void 0 ? -1 : _e, _f = _a.customProperties, customProperties = _f === void 0 ? {} : _f, _g = _a.placeholder, placeholder = _g === void 0 ? false : _g, _h = _a.keyCode, keyCode = _h === void 0 ? -1 : _h;
                        if (typeof value === "undefined" || value === null) return;
                        // Generate unique id
                        var choices = this._store.choices;
                        var choiceLabel = label || value;
                        var choiceId = choices ? choices.length + 1 : 1;
                        var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
                        this._store.dispatch((0, choices_1.addChoice)({
                            id: choiceId,
                            groupId: groupId,
                            elementId: choiceElementId,
                            value: value,
                            label: choiceLabel,
                            disabled: isDisabled,
                            customProperties: customProperties,
                            placeholder: placeholder,
                            keyCode: keyCode
                        }));
                        if (isSelected) this._addItem({
                            value: value,
                            label: choiceLabel,
                            choiceId: choiceId,
                            customProperties: customProperties,
                            placeholder: placeholder,
                            keyCode: keyCode
                        });
                    };
                    Choices.prototype._addGroup = function(_a) {
                        var _this = this;
                        var group = _a.group, id = _a.id, _b = _a.valueKey, valueKey = _b === void 0 ? "value" : _b, _c = _a.labelKey, labelKey = _c === void 0 ? "label" : _c;
                        var groupChoices = (0, utils_1.isType)("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
                        var groupId = id || Math.floor(new Date().valueOf() * Math.random());
                        var isDisabled = group.disabled ? group.disabled : false;
                        if (groupChoices) {
                            this._store.dispatch((0, groups_1.addGroup)({
                                value: group.label,
                                id: groupId,
                                active: true,
                                disabled: isDisabled
                            }));
                            var addGroupChoices = function(choice) {
                                var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                                _this._addChoice({
                                    value: choice[valueKey],
                                    label: (0, utils_1.isType)("Object", choice) ? choice[labelKey] : choice.innerHTML,
                                    isSelected: choice.selected,
                                    isDisabled: isOptDisabled,
                                    groupId: groupId,
                                    customProperties: choice.customProperties,
                                    placeholder: choice.placeholder
                                });
                            };
                            groupChoices.forEach(addGroupChoices);
                        } else this._store.dispatch((0, groups_1.addGroup)({
                            value: group.label,
                            id: group.id,
                            active: false,
                            disabled: group.disabled
                        }));
                    };
                    Choices.prototype._getTemplate = function(template) {
                        var _a;
                        var args = [];
                        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
                        return (_a = this._templates[template]).call.apply(_a, __spreadArray([
                            this,
                            this.config
                        ], args, false));
                    };
                    Choices.prototype._createTemplates = function() {
                        var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                        var userTemplates = {};
                        if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === "function") userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
                        this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
                    };
                    Choices.prototype._createElements = function() {
                        this.containerOuter = new components_1.Container({
                            element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position
                        });
                        this.containerInner = new components_1.Container({
                            element: this._getTemplate("containerInner"),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position
                        });
                        this.input = new components_1.Input({
                            element: this._getTemplate("input", this._placeholderValue),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            preventPaste: !this.config.paste
                        });
                        this.choiceList = new components_1.List({
                            element: this._getTemplate("choiceList", this._isSelectOneElement)
                        });
                        this.itemList = new components_1.List({
                            element: this._getTemplate("itemList", this._isSelectOneElement)
                        });
                        this.dropdown = new components_1.Dropdown({
                            element: this._getTemplate("dropdown"),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type
                        });
                    };
                    Choices.prototype._createStructure = function() {
                        // Hide original element
                        this.passedElement.conceal();
                        // Wrap input in container preserving DOM ordering
                        this.containerInner.wrap(this.passedElement.element);
                        // Wrapper inner container with outer container
                        this.containerOuter.wrap(this.containerInner.element);
                        if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || "";
                        else if (this._placeholderValue) {
                            this.input.placeholder = this._placeholderValue;
                            this.input.setWidth();
                        }
                        this.containerOuter.element.appendChild(this.containerInner.element);
                        this.containerOuter.element.appendChild(this.dropdown.element);
                        this.containerInner.element.appendChild(this.itemList.element);
                        if (!this._isTextElement) this.dropdown.element.appendChild(this.choiceList.element);
                        if (!this._isSelectOneElement) this.containerInner.element.appendChild(this.input.element);
                        else if (this.config.searchEnabled) this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                        if (this._isSelectElement) {
                            this._highlightPosition = 0;
                            this._isSearching = false;
                            this._startLoading();
                            if (this._presetGroups.length) this._addPredefinedGroups(this._presetGroups);
                            else this._addPredefinedChoices(this._presetChoices);
                            this._stopLoading();
                        }
                        if (this._isTextElement) this._addPredefinedItems(this._presetItems);
                    };
                    Choices.prototype._addPredefinedGroups = function(groups) {
                        var _this = this;
                        // If we have a placeholder option
                        var placeholderChoice = this.passedElement.placeholderOption;
                        if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === "SELECT") this._addChoice({
                            value: placeholderChoice.value,
                            label: placeholderChoice.innerHTML,
                            isSelected: placeholderChoice.selected,
                            isDisabled: placeholderChoice.disabled,
                            placeholder: true
                        });
                        groups.forEach(function(group) {
                            return _this._addGroup({
                                group: group,
                                id: group.id || null
                            });
                        });
                    };
                    Choices.prototype._addPredefinedChoices = function(choices) {
                        var _this = this;
                        // If sorting is enabled or the user is searching, filter choices
                        if (this.config.shouldSort) choices.sort(this.config.sorter);
                        var hasSelectedChoice = choices.some(function(choice) {
                            return choice.selected;
                        });
                        var firstEnabledChoiceIndex = choices.findIndex(function(choice) {
                            return choice.disabled === undefined || !choice.disabled;
                        });
                        choices.forEach(function(choice, index) {
                            var _a = choice.value, value = _a === void 0 ? "" : _a, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                            if (_this._isSelectElement) {
                                // If the choice is actually a group
                                if (choice.choices) _this._addGroup({
                                    group: choice,
                                    id: choice.id || null
                                });
                                else {
                                    /**
           * If there is a selected choice already or the choice is not the first in
           * the array, add each choice normally.
           *
           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
           */ var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                                    var isSelected = shouldPreselect ? true : choice.selected;
                                    var isDisabled = choice.disabled;
                                    _this._addChoice({
                                        value: value,
                                        label: label,
                                        isSelected: !!isSelected,
                                        isDisabled: !!isDisabled,
                                        placeholder: !!placeholder,
                                        customProperties: customProperties
                                    });
                                }
                            } else _this._addChoice({
                                value: value,
                                label: label,
                                isSelected: !!choice.selected,
                                isDisabled: !!choice.disabled,
                                placeholder: !!choice.placeholder,
                                customProperties: customProperties
                            });
                        });
                    };
                    Choices.prototype._addPredefinedItems = function(items) {
                        var _this = this;
                        items.forEach(function(item) {
                            if (typeof item === "object" && item.value) _this._addItem({
                                value: item.value,
                                label: item.label,
                                choiceId: item.id,
                                customProperties: item.customProperties,
                                placeholder: item.placeholder
                            });
                            if (typeof item === "string") _this._addItem({
                                value: item
                            });
                        });
                    };
                    Choices.prototype._setChoiceOrItem = function(item) {
                        var _this = this;
                        var itemType = (0, utils_1.getType)(item).toLowerCase();
                        var handleType = {
                            object: function() {
                                if (!item.value) return;
                                // If we are dealing with a select input, we need to create an option first
                                // that is then selected. For text inputs we can just add items normally.
                                if (!_this._isTextElement) _this._addChoice({
                                    value: item.value,
                                    label: item.label,
                                    isSelected: true,
                                    isDisabled: false,
                                    customProperties: item.customProperties,
                                    placeholder: item.placeholder
                                });
                                else _this._addItem({
                                    value: item.value,
                                    label: item.label,
                                    choiceId: item.id,
                                    customProperties: item.customProperties,
                                    placeholder: item.placeholder
                                });
                            },
                            string: function() {
                                if (!_this._isTextElement) _this._addChoice({
                                    value: item,
                                    label: item,
                                    isSelected: true,
                                    isDisabled: false
                                });
                                else _this._addItem({
                                    value: item
                                });
                            }
                        };
                        handleType[itemType]();
                    };
                    Choices.prototype._findAndSelectChoiceByValue = function(value) {
                        var _this = this;
                        var choices = this._store.choices;
                        // Check 'value' property exists and the choice isn't already selected
                        var foundChoice = choices.find(function(choice) {
                            return _this.config.valueComparer(choice.value, value);
                        });
                        if (foundChoice && !foundChoice.selected) this._addItem({
                            value: foundChoice.value,
                            label: foundChoice.label,
                            choiceId: foundChoice.id,
                            groupId: foundChoice.groupId,
                            customProperties: foundChoice.customProperties,
                            placeholder: foundChoice.placeholder,
                            keyCode: foundChoice.keyCode
                        });
                    };
                    Choices.prototype._generatePlaceholderValue = function() {
                        if (this._isSelectElement && this.passedElement.placeholderOption) {
                            var placeholderOption = this.passedElement.placeholderOption;
                            return placeholderOption ? placeholderOption.text : null;
                        }
                        var _a = this.config, placeholder = _a.placeholder, placeholderValue = _a.placeholderValue;
                        var dataset = this.passedElement.element.dataset;
                        if (placeholder) {
                            if (placeholderValue) return placeholderValue;
                            if (dataset.placeholder) return dataset.placeholder;
                        }
                        return null;
                    };
                    return Choices;
                }();
                exports["default"] = Choices;
            /***/ },
            /***/ 613: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var utils_1 = __webpack_require__(799);
                var constants_1 = __webpack_require__(883);
                var Container = /** @class */ function() {
                    function Container(_a) {
                        var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
                        this.element = element;
                        this.classNames = classNames;
                        this.type = type;
                        this.position = position;
                        this.isOpen = false;
                        this.isFlipped = false;
                        this.isFocussed = false;
                        this.isDisabled = false;
                        this.isLoading = false;
                        this._onFocus = this._onFocus.bind(this);
                        this._onBlur = this._onBlur.bind(this);
                    }
                    Container.prototype.addEventListeners = function() {
                        this.element.addEventListener("focus", this._onFocus);
                        this.element.addEventListener("blur", this._onBlur);
                    };
                    Container.prototype.removeEventListeners = function() {
                        this.element.removeEventListener("focus", this._onFocus);
                        this.element.removeEventListener("blur", this._onBlur);
                    };
                    /**
   * Determine whether container should be flipped based on passed
   * dropdown position
   */ Container.prototype.shouldFlip = function(dropdownPos) {
                        if (typeof dropdownPos !== "number") return false;
                        // If flip is enabled and the dropdown bottom position is
                        // greater than the window height flip the dropdown.
                        var shouldFlip = false;
                        if (this.position === "auto") shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
                        else if (this.position === "top") shouldFlip = true;
                        return shouldFlip;
                    };
                    Container.prototype.setActiveDescendant = function(activeDescendantID) {
                        this.element.setAttribute("aria-activedescendant", activeDescendantID);
                    };
                    Container.prototype.removeActiveDescendant = function() {
                        this.element.removeAttribute("aria-activedescendant");
                    };
                    Container.prototype.open = function(dropdownPos) {
                        this.element.classList.add(this.classNames.openState);
                        this.element.setAttribute("aria-expanded", "true");
                        this.isOpen = true;
                        if (this.shouldFlip(dropdownPos)) {
                            this.element.classList.add(this.classNames.flippedState);
                            this.isFlipped = true;
                        }
                    };
                    Container.prototype.close = function() {
                        this.element.classList.remove(this.classNames.openState);
                        this.element.setAttribute("aria-expanded", "false");
                        this.removeActiveDescendant();
                        this.isOpen = false;
                        // A dropdown flips if it does not have space within the page
                        if (this.isFlipped) {
                            this.element.classList.remove(this.classNames.flippedState);
                            this.isFlipped = false;
                        }
                    };
                    Container.prototype.focus = function() {
                        if (!this.isFocussed) this.element.focus();
                    };
                    Container.prototype.addFocusState = function() {
                        this.element.classList.add(this.classNames.focusState);
                    };
                    Container.prototype.removeFocusState = function() {
                        this.element.classList.remove(this.classNames.focusState);
                    };
                    Container.prototype.enable = function() {
                        this.element.classList.remove(this.classNames.disabledState);
                        this.element.removeAttribute("aria-disabled");
                        if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "0");
                        this.isDisabled = false;
                    };
                    Container.prototype.disable = function() {
                        this.element.classList.add(this.classNames.disabledState);
                        this.element.setAttribute("aria-disabled", "true");
                        if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "-1");
                        this.isDisabled = true;
                    };
                    Container.prototype.wrap = function(element) {
                        (0, utils_1.wrap)(element, this.element);
                    };
                    Container.prototype.unwrap = function(element) {
                        if (this.element.parentNode) {
                            // Move passed element outside this element
                            this.element.parentNode.insertBefore(element, this.element);
                            // Remove this element
                            this.element.parentNode.removeChild(this.element);
                        }
                    };
                    Container.prototype.addLoadingState = function() {
                        this.element.classList.add(this.classNames.loadingState);
                        this.element.setAttribute("aria-busy", "true");
                        this.isLoading = true;
                    };
                    Container.prototype.removeLoadingState = function() {
                        this.element.classList.remove(this.classNames.loadingState);
                        this.element.removeAttribute("aria-busy");
                        this.isLoading = false;
                    };
                    Container.prototype._onFocus = function() {
                        this.isFocussed = true;
                    };
                    Container.prototype._onBlur = function() {
                        this.isFocussed = false;
                    };
                    return Container;
                }();
                exports["default"] = Container;
            /***/ },
            /***/ 217: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var Dropdown = /** @class */ function() {
                    function Dropdown(_a) {
                        var element = _a.element, type = _a.type, classNames = _a.classNames;
                        this.element = element;
                        this.classNames = classNames;
                        this.type = type;
                        this.isActive = false;
                    }
                    Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
                        /**
     * Bottom position of dropdown in viewport coordinates
     */ get: function() {
                            return this.element.getBoundingClientRect().bottom;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Dropdown.prototype.getChild = function(selector) {
                        return this.element.querySelector(selector);
                    };
                    /**
   * Show dropdown to user by adding active state class
   */ Dropdown.prototype.show = function() {
                        this.element.classList.add(this.classNames.activeState);
                        this.element.setAttribute("aria-expanded", "true");
                        this.isActive = true;
                        return this;
                    };
                    /**
   * Hide dropdown from user
   */ Dropdown.prototype.hide = function() {
                        this.element.classList.remove(this.classNames.activeState);
                        this.element.setAttribute("aria-expanded", "false");
                        this.isActive = false;
                        return this;
                    };
                    return Dropdown;
                }();
                exports["default"] = Dropdown;
            /***/ },
            /***/ 520: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
                var dropdown_1 = __importDefault(__webpack_require__(217));
                exports.Dropdown = dropdown_1.default;
                var container_1 = __importDefault(__webpack_require__(613));
                exports.Container = container_1.default;
                var input_1 = __importDefault(__webpack_require__(11));
                exports.Input = input_1.default;
                var list_1 = __importDefault(__webpack_require__(624));
                exports.List = list_1.default;
                var wrapped_input_1 = __importDefault(__webpack_require__(541));
                exports.WrappedInput = wrapped_input_1.default;
                var wrapped_select_1 = __importDefault(__webpack_require__(982));
                exports.WrappedSelect = wrapped_select_1.default;
            /***/ },
            /***/ 11: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var utils_1 = __webpack_require__(799);
                var constants_1 = __webpack_require__(883);
                var Input = /** @class */ function() {
                    function Input(_a) {
                        var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
                        this.element = element;
                        this.type = type;
                        this.classNames = classNames;
                        this.preventPaste = preventPaste;
                        this.isFocussed = this.element.isEqualNode(document.activeElement);
                        this.isDisabled = element.disabled;
                        this._onPaste = this._onPaste.bind(this);
                        this._onInput = this._onInput.bind(this);
                        this._onFocus = this._onFocus.bind(this);
                        this._onBlur = this._onBlur.bind(this);
                    }
                    Object.defineProperty(Input.prototype, "placeholder", {
                        set: function(placeholder) {
                            this.element.placeholder = placeholder;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Input.prototype, "value", {
                        get: function() {
                            return (0, utils_1.sanitise)(this.element.value);
                        },
                        set: function(value) {
                            this.element.value = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Input.prototype, "rawValue", {
                        get: function() {
                            return this.element.value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Input.prototype.addEventListeners = function() {
                        this.element.addEventListener("paste", this._onPaste);
                        this.element.addEventListener("input", this._onInput, {
                            passive: true
                        });
                        this.element.addEventListener("focus", this._onFocus, {
                            passive: true
                        });
                        this.element.addEventListener("blur", this._onBlur, {
                            passive: true
                        });
                    };
                    Input.prototype.removeEventListeners = function() {
                        this.element.removeEventListener("input", this._onInput);
                        this.element.removeEventListener("paste", this._onPaste);
                        this.element.removeEventListener("focus", this._onFocus);
                        this.element.removeEventListener("blur", this._onBlur);
                    };
                    Input.prototype.enable = function() {
                        this.element.removeAttribute("disabled");
                        this.isDisabled = false;
                    };
                    Input.prototype.disable = function() {
                        this.element.setAttribute("disabled", "");
                        this.isDisabled = true;
                    };
                    Input.prototype.focus = function() {
                        if (!this.isFocussed) this.element.focus();
                    };
                    Input.prototype.blur = function() {
                        if (this.isFocussed) this.element.blur();
                    };
                    Input.prototype.clear = function(setWidth) {
                        if (setWidth === void 0) setWidth = true;
                        if (this.element.value) this.element.value = "";
                        if (setWidth) this.setWidth();
                        return this;
                    };
                    /**
   * Set the correct input width based on placeholder
   * value or input value
   */ Input.prototype.setWidth = function() {
                        // Resize input to contents or placeholder
                        var _a = this.element, style = _a.style, value = _a.value, placeholder = _a.placeholder;
                        style.minWidth = "".concat(placeholder.length + 1, "ch");
                        style.width = "".concat(value.length + 1, "ch");
                    };
                    Input.prototype.setActiveDescendant = function(activeDescendantID) {
                        this.element.setAttribute("aria-activedescendant", activeDescendantID);
                    };
                    Input.prototype.removeActiveDescendant = function() {
                        this.element.removeAttribute("aria-activedescendant");
                    };
                    Input.prototype._onInput = function() {
                        if (this.type !== constants_1.SELECT_ONE_TYPE) this.setWidth();
                    };
                    Input.prototype._onPaste = function(event) {
                        if (this.preventPaste) event.preventDefault();
                    };
                    Input.prototype._onFocus = function() {
                        this.isFocussed = true;
                    };
                    Input.prototype._onBlur = function() {
                        this.isFocussed = false;
                    };
                    return Input;
                }();
                exports["default"] = Input;
            /***/ },
            /***/ 624: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var constants_1 = __webpack_require__(883);
                var List = /** @class */ function() {
                    function List(_a) {
                        var element = _a.element;
                        this.element = element;
                        this.scrollPos = this.element.scrollTop;
                        this.height = this.element.offsetHeight;
                    }
                    List.prototype.clear = function() {
                        this.element.innerHTML = "";
                    };
                    List.prototype.append = function(node) {
                        this.element.appendChild(node);
                    };
                    List.prototype.getChild = function(selector) {
                        return this.element.querySelector(selector);
                    };
                    List.prototype.hasChildren = function() {
                        return this.element.hasChildNodes();
                    };
                    List.prototype.scrollToTop = function() {
                        this.element.scrollTop = 0;
                    };
                    List.prototype.scrollToChildElement = function(element, direction) {
                        var _this = this;
                        if (!element) return;
                        var listHeight = this.element.offsetHeight;
                        // Scroll position of dropdown
                        var listScrollPosition = this.element.scrollTop + listHeight;
                        var elementHeight = element.offsetHeight;
                        // Distance from bottom of element to top of parent
                        var elementPos = element.offsetTop + elementHeight;
                        // Difference between the element and scroll position
                        var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                        requestAnimationFrame(function() {
                            _this._animateScroll(destination, direction);
                        });
                    };
                    List.prototype._scrollDown = function(scrollPos, strength, destination) {
                        var easing = (destination - scrollPos) / strength;
                        var distance = easing > 1 ? easing : 1;
                        this.element.scrollTop = scrollPos + distance;
                    };
                    List.prototype._scrollUp = function(scrollPos, strength, destination) {
                        var easing = (scrollPos - destination) / strength;
                        var distance = easing > 1 ? easing : 1;
                        this.element.scrollTop = scrollPos - distance;
                    };
                    List.prototype._animateScroll = function(destination, direction) {
                        var _this = this;
                        var strength = constants_1.SCROLLING_SPEED;
                        var choiceListScrollTop = this.element.scrollTop;
                        var continueAnimation = false;
                        if (direction > 0) {
                            this._scrollDown(choiceListScrollTop, strength, destination);
                            if (choiceListScrollTop < destination) continueAnimation = true;
                        } else {
                            this._scrollUp(choiceListScrollTop, strength, destination);
                            if (choiceListScrollTop > destination) continueAnimation = true;
                        }
                        if (continueAnimation) requestAnimationFrame(function() {
                            _this._animateScroll(destination, direction);
                        });
                    };
                    return List;
                }();
                exports["default"] = List;
            /***/ },
            /***/ 730: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var utils_1 = __webpack_require__(799);
                var WrappedElement = /** @class */ function() {
                    function WrappedElement(_a) {
                        var element = _a.element, classNames = _a.classNames;
                        this.element = element;
                        this.classNames = classNames;
                        if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                        this.isDisabled = false;
                    }
                    Object.defineProperty(WrappedElement.prototype, "isActive", {
                        get: function() {
                            return this.element.dataset.choice === "active";
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(WrappedElement.prototype, "dir", {
                        get: function() {
                            return this.element.dir;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(WrappedElement.prototype, "value", {
                        get: function() {
                            return this.element.value;
                        },
                        set: function(value) {
                            // you must define setter here otherwise it will be readonly property
                            this.element.value = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    WrappedElement.prototype.conceal = function() {
                        // Hide passed input
                        this.element.classList.add(this.classNames.input);
                        this.element.hidden = true;
                        // Remove element from tab index
                        this.element.tabIndex = -1;
                        // Backup original styles if any
                        var origStyle = this.element.getAttribute("style");
                        if (origStyle) this.element.setAttribute("data-choice-orig-style", origStyle);
                        this.element.setAttribute("data-choice", "active");
                    };
                    WrappedElement.prototype.reveal = function() {
                        // Reinstate passed element
                        this.element.classList.remove(this.classNames.input);
                        this.element.hidden = false;
                        this.element.removeAttribute("tabindex");
                        // Recover original styles if any
                        var origStyle = this.element.getAttribute("data-choice-orig-style");
                        if (origStyle) {
                            this.element.removeAttribute("data-choice-orig-style");
                            this.element.setAttribute("style", origStyle);
                        } else this.element.removeAttribute("style");
                        this.element.removeAttribute("data-choice");
                        // Re-assign values - this is weird, I know
                        // @todo Figure out why we need to do this
                        this.element.value = this.element.value; // eslint-disable-line no-self-assign
                    };
                    WrappedElement.prototype.enable = function() {
                        this.element.removeAttribute("disabled");
                        this.element.disabled = false;
                        this.isDisabled = false;
                    };
                    WrappedElement.prototype.disable = function() {
                        this.element.setAttribute("disabled", "");
                        this.element.disabled = true;
                        this.isDisabled = true;
                    };
                    WrappedElement.prototype.triggerEvent = function(eventType, data) {
                        (0, utils_1.dispatchEvent)(this.element, eventType, data);
                    };
                    return WrappedElement;
                }();
                exports["default"] = WrappedElement;
            /***/ },
            /***/ 541: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __extends = this && this.__extends || function() {
                    var extendStatics = function(d, b) {
                        extendStatics = Object.setPrototypeOf || ({
                            __proto__: []
                        }) instanceof Array && function(d, b) {
                            d.__proto__ = b;
                        } || function(d, b) {
                            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                        };
                        return extendStatics(d, b);
                    };
                    return function(d, b) {
                        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var wrapped_element_1 = __importDefault(__webpack_require__(730));
                var WrappedInput = /** @class */ function(_super) {
                    __extends(WrappedInput, _super);
                    function WrappedInput(_a) {
                        var element = _a.element, classNames = _a.classNames, delimiter = _a.delimiter;
                        var _this = _super.call(this, {
                            element: element,
                            classNames: classNames
                        }) || this;
                        _this.delimiter = delimiter;
                        return _this;
                    }
                    Object.defineProperty(WrappedInput.prototype, "value", {
                        get: function() {
                            return this.element.value;
                        },
                        set: function(value) {
                            this.element.setAttribute("value", value);
                            this.element.value = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    return WrappedInput;
                }(wrapped_element_1.default);
                exports["default"] = WrappedInput;
            /***/ },
            /***/ 982: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __extends = this && this.__extends || function() {
                    var extendStatics = function(d, b) {
                        extendStatics = Object.setPrototypeOf || ({
                            __proto__: []
                        }) instanceof Array && function(d, b) {
                            d.__proto__ = b;
                        } || function(d, b) {
                            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                        };
                        return extendStatics(d, b);
                    };
                    return function(d, b) {
                        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var wrapped_element_1 = __importDefault(__webpack_require__(730));
                var WrappedSelect = /** @class */ function(_super) {
                    __extends(WrappedSelect, _super);
                    function WrappedSelect(_a) {
                        var element = _a.element, classNames = _a.classNames, template = _a.template;
                        var _this = _super.call(this, {
                            element: element,
                            classNames: classNames
                        }) || this;
                        _this.template = template;
                        return _this;
                    }
                    Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
                        get: function() {
                            return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
                            this.element.querySelector("option[placeholder]");
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
                        get: function() {
                            return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(WrappedSelect.prototype, "options", {
                        get: function() {
                            return Array.from(this.element.options);
                        },
                        set: function(options) {
                            var _this = this;
                            var fragment = document.createDocumentFragment();
                            var addOptionToFragment = function(data) {
                                // Create a standard select option
                                var option = _this.template(data);
                                // Append it to fragment
                                fragment.appendChild(option);
                            };
                            // Add each list item to list
                            options.forEach(function(optionData) {
                                return addOptionToFragment(optionData);
                            });
                            this.appendDocFragment(fragment);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    WrappedSelect.prototype.appendDocFragment = function(fragment) {
                        this.element.innerHTML = "";
                        this.element.appendChild(fragment);
                    };
                    return WrappedSelect;
                }(wrapped_element_1.default);
                exports["default"] = WrappedSelect;
            /***/ },
            /***/ 883: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
                exports.EVENTS = {
                    showDropdown: "showDropdown",
                    hideDropdown: "hideDropdown",
                    change: "change",
                    choice: "choice",
                    search: "search",
                    addItem: "addItem",
                    removeItem: "removeItem",
                    highlightItem: "highlightItem",
                    highlightChoice: "highlightChoice",
                    unhighlightItem: "unhighlightItem"
                };
                exports.ACTION_TYPES = {
                    ADD_CHOICE: "ADD_CHOICE",
                    FILTER_CHOICES: "FILTER_CHOICES",
                    ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                    CLEAR_CHOICES: "CLEAR_CHOICES",
                    ADD_GROUP: "ADD_GROUP",
                    ADD_ITEM: "ADD_ITEM",
                    REMOVE_ITEM: "REMOVE_ITEM",
                    HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                    CLEAR_ALL: "CLEAR_ALL",
                    RESET_TO: "RESET_TO",
                    SET_IS_LOADING: "SET_IS_LOADING"
                };
                exports.KEY_CODES = {
                    BACK_KEY: 46,
                    DELETE_KEY: 8,
                    ENTER_KEY: 13,
                    A_KEY: 65,
                    ESC_KEY: 27,
                    UP_KEY: 38,
                    DOWN_KEY: 40,
                    PAGE_UP_KEY: 33,
                    PAGE_DOWN_KEY: 34
                };
                exports.TEXT_TYPE = "text";
                exports.SELECT_ONE_TYPE = "select-one";
                exports.SELECT_MULTIPLE_TYPE = "select-multiple";
                exports.SCROLLING_SPEED = 4;
            /***/ },
            /***/ 789: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
                var utils_1 = __webpack_require__(799);
                exports.DEFAULT_CLASSNAMES = {
                    containerOuter: "choices",
                    containerInner: "choices__inner",
                    input: "choices__input",
                    inputCloned: "choices__input--cloned",
                    list: "choices__list",
                    listItems: "choices__list--multiple",
                    listSingle: "choices__list--single",
                    listDropdown: "choices__list--dropdown",
                    item: "choices__item",
                    itemSelectable: "choices__item--selectable",
                    itemDisabled: "choices__item--disabled",
                    itemChoice: "choices__item--choice",
                    placeholder: "choices__placeholder",
                    group: "choices__group",
                    groupHeading: "choices__heading",
                    button: "choices__button",
                    activeState: "is-active",
                    focusState: "is-focused",
                    openState: "is-open",
                    disabledState: "is-disabled",
                    highlightedState: "is-highlighted",
                    selectedState: "is-selected",
                    flippedState: "is-flipped",
                    loadingState: "is-loading",
                    noResults: "has-no-results",
                    noChoices: "has-no-choices"
                };
                exports.DEFAULT_CONFIG = {
                    items: [],
                    choices: [],
                    silent: false,
                    renderChoiceLimit: -1,
                    maxItemCount: -1,
                    addItems: true,
                    addItemFilter: null,
                    removeItems: true,
                    removeItemButton: false,
                    editItems: false,
                    allowHTML: true,
                    duplicateItemsAllowed: true,
                    delimiter: ",",
                    paste: true,
                    searchEnabled: true,
                    searchChoices: true,
                    searchFloor: 1,
                    searchResultLimit: 4,
                    searchFields: [
                        "label",
                        "value"
                    ],
                    position: "auto",
                    resetScrollPosition: true,
                    shouldSort: true,
                    shouldSortItems: false,
                    sorter: utils_1.sortByAlpha,
                    placeholder: true,
                    placeholderValue: null,
                    searchPlaceholderValue: null,
                    prependValue: null,
                    appendValue: null,
                    renderSelectedChoices: "auto",
                    loadingText: "Loading...",
                    noResultsText: "No results found",
                    noChoicesText: "No choices to choose from",
                    itemSelectText: "Press to select",
                    uniqueItemText: "Only unique values can be added",
                    customAddItemText: "Only values matching specific conditions can be added",
                    addItemText: function(value) {
                        return 'Press Enter to add <b>"'.concat((0, utils_1.sanitise)(value), '"</b>');
                    },
                    maxItemText: function(maxItemCount) {
                        return "Only ".concat(maxItemCount, " values can be added");
                    },
                    valueComparer: function(value1, value2) {
                        return value1 === value2;
                    },
                    fuseOptions: {
                        includeScore: true
                    },
                    labelId: "",
                    callbackOnInit: null,
                    callbackOnCreateTemplates: null,
                    classNames: exports.DEFAULT_CLASSNAMES
                };
            /***/ },
            /***/ 18: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 978: /***/ function(__unused_webpack_module, exports) {
                /* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 948: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 359: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 285: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 533: /***/ function(__unused_webpack_module, exports) {
                /* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 187: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
                        enumerable: true,
                        get: function() {
                            return m[k];
                        }
                    };
                    Object.defineProperty(o, k2, desc);
                } : function(o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                });
                var __exportStar = this && this.__exportStar || function(m, exports) {
                    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                __exportStar(__webpack_require__(18), exports);
                __exportStar(__webpack_require__(978), exports);
                __exportStar(__webpack_require__(948), exports);
                __exportStar(__webpack_require__(359), exports);
                __exportStar(__webpack_require__(285), exports);
                __exportStar(__webpack_require__(533), exports);
                __exportStar(__webpack_require__(287), exports);
                __exportStar(__webpack_require__(132), exports);
                __exportStar(__webpack_require__(837), exports);
                __exportStar(__webpack_require__(598), exports);
                __exportStar(__webpack_require__(369), exports);
                __exportStar(__webpack_require__(37), exports);
                __exportStar(__webpack_require__(47), exports);
                __exportStar(__webpack_require__(923), exports);
                __exportStar(__webpack_require__(876), exports);
            /***/ },
            /***/ 287: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 132: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 837: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 598: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 37: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 369: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 47: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 923: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 876: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 799: /***/ function(__unused_webpack_module, exports) {
                /* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.parseCustomProperties = exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
                var getRandomNumber = function(min, max) {
                    return Math.floor(Math.random() * (max - min) + min);
                };
                exports.getRandomNumber = getRandomNumber;
                var generateChars = function(length) {
                    return Array.from({
                        length: length
                    }, function() {
                        return (0, exports.getRandomNumber)(0, 36).toString(36);
                    }).join("");
                };
                exports.generateChars = generateChars;
                var generateId = function(element, prefix) {
                    var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, exports.generateChars)(4);
                    id = id.replace(/(:|\.|\[|\]|,)/g, "");
                    id = "".concat(prefix, "-").concat(id);
                    return id;
                };
                exports.generateId = generateId;
                var getType = function(obj) {
                    return Object.prototype.toString.call(obj).slice(8, -1);
                };
                exports.getType = getType;
                var isType = function(type, obj) {
                    return obj !== undefined && obj !== null && (0, exports.getType)(obj) === type;
                };
                exports.isType = isType;
                var wrap = function(element, wrapper) {
                    if (wrapper === void 0) wrapper = document.createElement("div");
                    if (element.parentNode) {
                        if (element.nextSibling) element.parentNode.insertBefore(wrapper, element.nextSibling);
                        else element.parentNode.appendChild(wrapper);
                    }
                    return wrapper.appendChild(element);
                };
                exports.wrap = wrap;
                var getAdjacentEl = function(startEl, selector, direction) {
                    if (direction === void 0) direction = 1;
                    var prop = "".concat(direction > 0 ? "next" : "previous", "ElementSibling");
                    var sibling = startEl[prop];
                    while(sibling){
                        if (sibling.matches(selector)) return sibling;
                        sibling = sibling[prop];
                    }
                    return sibling;
                };
                exports.getAdjacentEl = getAdjacentEl;
                var isScrolledIntoView = function(element, parent, direction) {
                    if (direction === void 0) direction = 1;
                    if (!element) return false;
                    var isVisible;
                    if (direction > 0) // In view from bottom
                    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
                    else // In view from top
                    isVisible = element.offsetTop >= parent.scrollTop;
                    return isVisible;
                };
                exports.isScrolledIntoView = isScrolledIntoView;
                var sanitise = function(value) {
                    if (typeof value !== "string") return value;
                    return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                };
                exports.sanitise = sanitise;
                exports.strToEl = function() {
                    var tmpEl = document.createElement("div");
                    return function(str) {
                        var cleanedInput = str.trim();
                        tmpEl.innerHTML = cleanedInput;
                        var firldChild = tmpEl.children[0];
                        while(tmpEl.firstChild)tmpEl.removeChild(tmpEl.firstChild);
                        return firldChild;
                    };
                }();
                var sortByAlpha = function(_a, _b) {
                    var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
                    var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
                    return label.localeCompare(label2, [], {
                        sensitivity: "base",
                        ignorePunctuation: true,
                        numeric: true
                    });
                };
                exports.sortByAlpha = sortByAlpha;
                var sortByScore = function(a, b) {
                    var _a = a.score, scoreA = _a === void 0 ? 0 : _a;
                    var _b = b.score, scoreB = _b === void 0 ? 0 : _b;
                    return scoreA - scoreB;
                };
                exports.sortByScore = sortByScore;
                var dispatchEvent = function(element, type, customArgs) {
                    if (customArgs === void 0) customArgs = null;
                    var event = new CustomEvent(type, {
                        detail: customArgs,
                        bubbles: true,
                        cancelable: true
                    });
                    return element.dispatchEvent(event);
                };
                exports.dispatchEvent = dispatchEvent;
                var existsInArray = function(array, value, key) {
                    if (key === void 0) key = "value";
                    return array.some(function(item) {
                        if (typeof value === "string") return item[key] === value.trim();
                        return item[key] === value;
                    });
                };
                exports.existsInArray = existsInArray;
                var cloneObject = function(obj) {
                    return JSON.parse(JSON.stringify(obj));
                };
                exports.cloneObject = cloneObject;
                /**
 * Returns an array of keys present on the first but missing on the second object
 */ var diff = function(a, b) {
                    var aKeys = Object.keys(a).sort();
                    var bKeys = Object.keys(b).sort();
                    return aKeys.filter(function(i) {
                        return bKeys.indexOf(i) < 0;
                    });
                };
                exports.diff = diff;
                var parseCustomProperties = function(customProperties) {
                    if (typeof customProperties !== "undefined") try {
                        return JSON.parse(customProperties);
                    } catch (e) {
                        return customProperties;
                    }
                    return {};
                };
                exports.parseCustomProperties = parseCustomProperties;
            /***/ },
            /***/ 273: /***/ function(__unused_webpack_module, exports) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                exports.defaultState = [];
                function choices(state, action) {
                    if (state === void 0) state = exports.defaultState;
                    if (action === void 0) action = {};
                    switch(action.type){
                        case "ADD_CHOICE":
                            var addChoiceAction = action;
                            var choice = {
                                id: addChoiceAction.id,
                                elementId: addChoiceAction.elementId,
                                groupId: addChoiceAction.groupId,
                                value: addChoiceAction.value,
                                label: addChoiceAction.label || addChoiceAction.value,
                                disabled: addChoiceAction.disabled || false,
                                selected: false,
                                active: true,
                                score: 9999,
                                customProperties: addChoiceAction.customProperties,
                                placeholder: addChoiceAction.placeholder || false
                            };
                            /*
          A disabled choice appears in the choice dropdown but cannot be selected
          A selected choice has been added to the passed input's value (added as an item)
          An active choice appears within the choice dropdown
        */ return __spreadArray(__spreadArray([], state, true), [
                                choice
                            ], false);
                        case "ADD_ITEM":
                            var addItemAction_1 = action;
                            // When an item is added and it has an associated choice,
                            // we want to disable it so it can't be chosen again
                            if (addItemAction_1.choiceId > -1) return state.map(function(obj) {
                                var choice = obj;
                                if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) choice.selected = true;
                                return choice;
                            });
                            return state;
                        case "REMOVE_ITEM":
                            var removeItemAction_1 = action;
                            // When an item is removed and it has an associated choice,
                            // we want to re-enable it so it can be chosen again
                            if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) return state.map(function(obj) {
                                var choice = obj;
                                if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) choice.selected = false;
                                return choice;
                            });
                            return state;
                        case "FILTER_CHOICES":
                            var filterChoicesAction_1 = action;
                            return state.map(function(obj) {
                                var choice = obj;
                                // Set active state based on whether choice is
                                // within filtered results
                                choice.active = filterChoicesAction_1.results.some(function(_a) {
                                    var item = _a.item, score = _a.score;
                                    if (item.id === choice.id) {
                                        choice.score = score;
                                        return true;
                                    }
                                    return false;
                                });
                                return choice;
                            });
                        case "ACTIVATE_CHOICES":
                            var activateChoicesAction_1 = action;
                            return state.map(function(obj) {
                                var choice = obj;
                                choice.active = activateChoicesAction_1.active;
                                return choice;
                            });
                        case "CLEAR_CHOICES":
                            return exports.defaultState;
                        default:
                            return state;
                    }
                }
                exports["default"] = choices;
            /***/ },
            /***/ 871: /***/ function(__unused_webpack_module, exports) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                exports.defaultState = [];
                function groups(state, action) {
                    if (state === void 0) state = exports.defaultState;
                    if (action === void 0) action = {};
                    switch(action.type){
                        case "ADD_GROUP":
                            var addGroupAction = action;
                            return __spreadArray(__spreadArray([], state, true), [
                                {
                                    id: addGroupAction.id,
                                    value: addGroupAction.value,
                                    active: addGroupAction.active,
                                    disabled: addGroupAction.disabled
                                }
                            ], false);
                        case "CLEAR_CHOICES":
                            return [];
                        default:
                            return state;
                    }
                }
                exports["default"] = groups;
            /***/ },
            /***/ 655: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                var redux_1 = __webpack_require__(791);
                var items_1 = __importDefault(__webpack_require__(52));
                var groups_1 = __importDefault(__webpack_require__(871));
                var choices_1 = __importDefault(__webpack_require__(273));
                var loading_1 = __importDefault(__webpack_require__(502));
                var utils_1 = __webpack_require__(799);
                exports.defaultState = {
                    groups: [],
                    items: [],
                    choices: [],
                    loading: false
                };
                var appReducer = (0, redux_1.combineReducers)({
                    items: items_1.default,
                    groups: groups_1.default,
                    choices: choices_1.default,
                    loading: loading_1.default
                });
                var rootReducer = function(passedState, action) {
                    var state = passedState;
                    // If we are clearing all items, groups and options we reassign
                    // state and then pass that state to our proper reducer. This isn't
                    // mutating our actual state
                    // See: http://stackoverflow.com/a/35641992
                    if (action.type === "CLEAR_ALL") state = exports.defaultState;
                    else if (action.type === "RESET_TO") return (0, utils_1.cloneObject)(action.state);
                    return appReducer(state, action);
                };
                exports["default"] = rootReducer;
            /***/ },
            /***/ 52: /***/ function(__unused_webpack_module, exports) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                exports.defaultState = [];
                function items(state, action) {
                    if (state === void 0) state = exports.defaultState;
                    if (action === void 0) action = {};
                    switch(action.type){
                        case "ADD_ITEM":
                            var addItemAction = action;
                            // Add object to items array
                            var newState = __spreadArray(__spreadArray([], state, true), [
                                {
                                    id: addItemAction.id,
                                    choiceId: addItemAction.choiceId,
                                    groupId: addItemAction.groupId,
                                    value: addItemAction.value,
                                    label: addItemAction.label,
                                    active: true,
                                    highlighted: false,
                                    customProperties: addItemAction.customProperties,
                                    placeholder: addItemAction.placeholder || false,
                                    keyCode: null
                                }
                            ], false);
                            return newState.map(function(obj) {
                                var item = obj;
                                item.highlighted = false;
                                return item;
                            });
                        case "REMOVE_ITEM":
                            // Set item to inactive
                            return state.map(function(obj) {
                                var item = obj;
                                if (item.id === action.id) item.active = false;
                                return item;
                            });
                        case "HIGHLIGHT_ITEM":
                            var highlightItemAction_1 = action;
                            return state.map(function(obj) {
                                var item = obj;
                                if (item.id === highlightItemAction_1.id) item.highlighted = highlightItemAction_1.highlighted;
                                return item;
                            });
                        default:
                            return state;
                    }
                }
                exports["default"] = items;
            /***/ },
            /***/ 502: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                exports.defaultState = false;
                var general = function(state, action) {
                    if (state === void 0) state = exports.defaultState;
                    if (action === void 0) action = {};
                    switch(action.type){
                        case "SET_IS_LOADING":
                            return action.isLoading;
                        default:
                            return state;
                    }
                };
                exports["default"] = general;
            /***/ },
            /***/ 744: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                /* eslint-disable @typescript-eslint/no-explicit-any */ var redux_1 = __webpack_require__(791);
                var index_1 = __importDefault(__webpack_require__(655));
                var Store = /** @class */ function() {
                    function Store() {
                        this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                    }
                    /**
   * Subscribe store to function call (wrapped Redux method)
   */ Store.prototype.subscribe = function(onChange) {
                        this._store.subscribe(onChange);
                    };
                    /**
   * Dispatch event to store (wrapped Redux method)
   */ Store.prototype.dispatch = function(action) {
                        this._store.dispatch(action);
                    };
                    Object.defineProperty(Store.prototype, "state", {
                        /**
     * Get store object (wrapping Redux method)
     */ get: function() {
                            return this._store.getState();
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "items", {
                        /**
     * Get items from store
     */ get: function() {
                            return this.state.items;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "activeItems", {
                        /**
     * Get active items from store
     */ get: function() {
                            return this.items.filter(function(item) {
                                return item.active === true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "highlightedActiveItems", {
                        /**
     * Get highlighted items from store
     */ get: function() {
                            return this.items.filter(function(item) {
                                return item.active && item.highlighted;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "choices", {
                        /**
     * Get choices from store
     */ get: function() {
                            return this.state.choices;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "activeChoices", {
                        /**
     * Get active choices from store
     */ get: function() {
                            return this.choices.filter(function(choice) {
                                return choice.active === true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "selectableChoices", {
                        /**
     * Get selectable choices from store
     */ get: function() {
                            return this.choices.filter(function(choice) {
                                return choice.disabled !== true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "searchableChoices", {
                        /**
     * Get choices that can be searched (excluding placeholders)
     */ get: function() {
                            return this.selectableChoices.filter(function(choice) {
                                return choice.placeholder !== true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "placeholderChoice", {
                        /**
     * Get placeholder choice from store
     */ get: function() {
                            return __spreadArray([], this.choices, true).reverse().find(function(choice) {
                                return choice.placeholder === true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "groups", {
                        /**
     * Get groups from store
     */ get: function() {
                            return this.state.groups;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "activeGroups", {
                        /**
     * Get active groups from store
     */ get: function() {
                            var _a = this, groups = _a.groups, choices = _a.choices;
                            return groups.filter(function(group) {
                                var isActive = group.active === true && group.disabled === false;
                                var hasActiveOptions = choices.some(function(choice) {
                                    return choice.active === true && choice.disabled === false;
                                });
                                return isActive && hasActiveOptions;
                            }, []);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    /**
   * Get loading state from store
   */ Store.prototype.isLoading = function() {
                        return this.state.loading;
                    };
                    /**
   * Get single choice by it's ID
   */ Store.prototype.getChoiceById = function(id) {
                        return this.activeChoices.find(function(choice) {
                            return choice.id === parseInt(id, 10);
                        });
                    };
                    /**
   * Get group by group id
   */ Store.prototype.getGroupById = function(id) {
                        return this.groups.find(function(group) {
                            return group.id === id;
                        });
                    };
                    return Store;
                }();
                exports["default"] = Store;
            /***/ },
            /***/ 686: /***/ function(__unused_webpack_module, exports) {
                /**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option
 */ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var templates = {
                    containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
                        var containerOuter = _a.classNames.containerOuter;
                        var div = Object.assign(document.createElement("div"), {
                            className: containerOuter
                        });
                        div.dataset.type = passedElementType;
                        if (dir) div.dir = dir;
                        if (isSelectOneElement) div.tabIndex = 0;
                        if (isSelectElement) {
                            div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
                            if (searchEnabled) div.setAttribute("aria-autocomplete", "list");
                        }
                        div.setAttribute("aria-haspopup", "true");
                        div.setAttribute("aria-expanded", "false");
                        if (labelId) div.setAttribute("aria-labelledby", labelId);
                        return div;
                    },
                    containerInner: function(_a) {
                        var containerInner = _a.classNames.containerInner;
                        return Object.assign(document.createElement("div"), {
                            className: containerInner
                        });
                    },
                    itemList: function(_a, isSelectOneElement) {
                        var _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
                        return Object.assign(document.createElement("div"), {
                            className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
                        });
                    },
                    placeholder: function(_a, value) {
                        var _b;
                        var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
                        return Object.assign(document.createElement("div"), (_b = {
                            className: placeholder
                        }, _b[allowHTML ? "innerHTML" : "innerText"] = value, _b));
                    },
                    item: function(_a, _b, removeItemButton) {
                        var _c, _d;
                        var allowHTML = _a.allowHTML, _e = _a.classNames, item = _e.item, button = _e.button, highlightedState = _e.highlightedState, itemSelectable = _e.itemSelectable, placeholder = _e.placeholder;
                        var id = _b.id, value = _b.value, label = _b.label, customProperties = _b.customProperties, active = _b.active, disabled = _b.disabled, highlighted = _b.highlighted, isPlaceholder = _b.placeholder;
                        var div = Object.assign(document.createElement("div"), (_c = {
                            className: item
                        }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c));
                        Object.assign(div.dataset, {
                            item: "",
                            id: id,
                            value: value,
                            customProperties: customProperties
                        });
                        if (active) div.setAttribute("aria-selected", "true");
                        if (disabled) div.setAttribute("aria-disabled", "true");
                        if (isPlaceholder) div.classList.add(placeholder);
                        div.classList.add(highlighted ? highlightedState : itemSelectable);
                        if (removeItemButton) {
                            if (disabled) div.classList.remove(itemSelectable);
                            div.dataset.deletable = "";
                            /** @todo This MUST be localizable, not hardcoded! */ var REMOVE_ITEM_TEXT = "Remove item";
                            var removeButton = Object.assign(document.createElement("button"), (_d = {
                                type: "button",
                                className: button
                            }, _d[allowHTML ? "innerHTML" : "innerText"] = REMOVE_ITEM_TEXT, _d));
                            removeButton.setAttribute("aria-label", "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                            removeButton.dataset.button = "";
                            div.appendChild(removeButton);
                        }
                        return div;
                    },
                    choiceList: function(_a, isSelectOneElement) {
                        var list = _a.classNames.list;
                        var div = Object.assign(document.createElement("div"), {
                            className: list
                        });
                        if (!isSelectOneElement) div.setAttribute("aria-multiselectable", "true");
                        div.setAttribute("role", "listbox");
                        return div;
                    },
                    choiceGroup: function(_a, _b) {
                        var _c;
                        var allowHTML = _a.allowHTML, _d = _a.classNames, group = _d.group, groupHeading = _d.groupHeading, itemDisabled = _d.itemDisabled;
                        var id = _b.id, value = _b.value, disabled = _b.disabled;
                        var div = Object.assign(document.createElement("div"), {
                            className: "".concat(group, " ").concat(disabled ? itemDisabled : "")
                        });
                        div.setAttribute("role", "group");
                        Object.assign(div.dataset, {
                            group: "",
                            id: id,
                            value: value
                        });
                        if (disabled) div.setAttribute("aria-disabled", "true");
                        div.appendChild(Object.assign(document.createElement("div"), (_c = {
                            className: groupHeading
                        }, _c[allowHTML ? "innerHTML" : "innerText"] = value, _c)));
                        return div;
                    },
                    choice: function(_a, _b, selectText) {
                        var _c;
                        var allowHTML = _a.allowHTML, _d = _a.classNames, item = _d.item, itemChoice = _d.itemChoice, itemSelectable = _d.itemSelectable, selectedState = _d.selectedState, itemDisabled = _d.itemDisabled, placeholder = _d.placeholder;
                        var id = _b.id, value = _b.value, label = _b.label, groupId = _b.groupId, elementId = _b.elementId, isDisabled = _b.disabled, isSelected = _b.selected, isPlaceholder = _b.placeholder;
                        var div = Object.assign(document.createElement("div"), (_c = {
                            id: elementId
                        }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));
                        if (isSelected) div.classList.add(selectedState);
                        if (isPlaceholder) div.classList.add(placeholder);
                        div.setAttribute("role", groupId && groupId > 0 ? "treeitem" : "option");
                        Object.assign(div.dataset, {
                            choice: "",
                            id: id,
                            value: value,
                            selectText: selectText
                        });
                        if (isDisabled) {
                            div.classList.add(itemDisabled);
                            div.dataset.choiceDisabled = "";
                            div.setAttribute("aria-disabled", "true");
                        } else {
                            div.classList.add(itemSelectable);
                            div.dataset.choiceSelectable = "";
                        }
                        return div;
                    },
                    input: function(_a, placeholderValue) {
                        var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned;
                        var inp = Object.assign(document.createElement("input"), {
                            type: "search",
                            name: "search_terms",
                            className: "".concat(input, " ").concat(inputCloned),
                            autocomplete: "off",
                            autocapitalize: "off",
                            spellcheck: false
                        });
                        inp.setAttribute("role", "textbox");
                        inp.setAttribute("aria-autocomplete", "list");
                        inp.setAttribute("aria-label", placeholderValue);
                        return inp;
                    },
                    dropdown: function(_a) {
                        var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
                        var div = document.createElement("div");
                        div.classList.add(list, listDropdown);
                        div.setAttribute("aria-expanded", "false");
                        return div;
                    },
                    notice: function(_a, innerText, type) {
                        var _b;
                        var allowHTML = _a.allowHTML, _c = _a.classNames, item = _c.item, itemChoice = _c.itemChoice, noResults = _c.noResults, noChoices = _c.noChoices;
                        if (type === void 0) type = "";
                        var classes = [
                            item,
                            itemChoice
                        ];
                        if (type === "no-choices") classes.push(noChoices);
                        else if (type === "no-results") classes.push(noResults);
                        return Object.assign(document.createElement("div"), (_b = {}, _b[allowHTML ? "innerHTML" : "innerText"] = innerText, _b.className = classes.join(" "), _b));
                    },
                    option: function(_a) {
                        var label = _a.label, value = _a.value, customProperties = _a.customProperties, active = _a.active, disabled = _a.disabled;
                        var opt = new Option(label, value, false, active);
                        if (customProperties) opt.dataset.customProperties = "".concat(customProperties);
                        opt.disabled = !!disabled;
                        return opt;
                    }
                };
                exports["default"] = templates;
            /***/ },
            /***/ 996: /***/ function(module1) {
                var isMergeableObject = function isMergeableObject(value) {
                    return isNonNullObject(value) && !isSpecial(value);
                };
                function isNonNullObject(value) {
                    return !!value && typeof value === "object";
                }
                function isSpecial(value) {
                    var stringValue = Object.prototype.toString.call(value);
                    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
                }
                // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
                var canUseSymbol = typeof Symbol === "function" && Symbol.for;
                var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
                function isReactElement(value) {
                    return value.$$typeof === REACT_ELEMENT_TYPE;
                }
                function emptyTarget(val) {
                    return Array.isArray(val) ? [] : {};
                }
                function cloneUnlessOtherwiseSpecified(value, options) {
                    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
                }
                function defaultArrayMerge(target, source, options) {
                    return target.concat(source).map(function(element) {
                        return cloneUnlessOtherwiseSpecified(element, options);
                    });
                }
                function getMergeFunction(key, options) {
                    if (!options.customMerge) return deepmerge;
                    var customMerge = options.customMerge(key);
                    return typeof customMerge === "function" ? customMerge : deepmerge;
                }
                function getEnumerableOwnPropertySymbols(target) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                        return target.propertyIsEnumerable(symbol);
                    }) : [];
                }
                function getKeys(target) {
                    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
                }
                function propertyIsOnObject(object, property) {
                    try {
                        return property in object;
                    } catch (_) {
                        return false;
                    }
                }
                // Protects from prototype poisoning and unexpected merging up the prototype chain.
                function propertyIsUnsafe(target, key) {
                    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
                     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
                     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
                    );
                }
                function mergeObject(target, source, options) {
                    var destination = {};
                    if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
                        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                    });
                    getKeys(source).forEach(function(key) {
                        if (propertyIsUnsafe(target, key)) return;
                        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                        else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                    });
                    return destination;
                }
                function deepmerge(target, source, options) {
                    options = options || {};
                    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
                    // implementations can use it. The caller may not replace it.
                    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                    var sourceIsArray = Array.isArray(source);
                    var targetIsArray = Array.isArray(target);
                    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                    if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
                    else if (sourceIsArray) return options.arrayMerge(target, source, options);
                    else return mergeObject(target, source, options);
                }
                deepmerge.all = function deepmergeAll(array, options) {
                    if (!Array.isArray(array)) throw new Error("first argument should be an array");
                    return array.reduce(function(prev, next) {
                        return deepmerge(prev, next, options);
                    }, {});
                };
                var deepmerge_1 = deepmerge;
                module1.exports = deepmerge_1;
            /***/ },
            /***/ 221: /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ "default": function() {
                        return /* binding */ Fuse;
                    }
                });
                /**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */ function isArray(value) {
                    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
                }
                // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
                const INFINITY = 1 / 0;
                function baseToString(value) {
                    // Exit early for strings to avoid a performance hit in some environments.
                    if (typeof value == "string") return value;
                    let result = value + "";
                    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
                }
                function toString(value) {
                    return value == null ? "" : baseToString(value);
                }
                function isString(value) {
                    return typeof value === "string";
                }
                function isNumber(value) {
                    return typeof value === "number";
                }
                // Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
                function isBoolean(value) {
                    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
                }
                function isObject(value) {
                    return typeof value === "object";
                }
                // Checks if `value` is object-like.
                function isObjectLike(value) {
                    return isObject(value) && value !== null;
                }
                function isDefined(value) {
                    return value !== undefined && value !== null;
                }
                function isBlank(value) {
                    return !value.trim().length;
                }
                // Gets the `toStringTag` of `value`.
                // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
                function getTag(value) {
                    return value == null ? value === undefined ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
                }
                const EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
                const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
                const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key)=>`Invalid value for key ${key}`;
                const PATTERN_LENGTH_TOO_LARGE = (max)=>`Pattern length exceeds max of ${max}.`;
                const MISSING_KEY_PROPERTY = (name)=>`Missing ${name} property in key`;
                const INVALID_KEY_WEIGHT_VALUE = (key)=>`Property 'weight' in key '${key}' must be a positive integer`;
                const hasOwn = Object.prototype.hasOwnProperty;
                class KeyStore {
                    get(keyId) {
                        return this._keyMap[keyId];
                    }
                    keys() {
                        return this._keys;
                    }
                    toJSON() {
                        return JSON.stringify(this._keys);
                    }
                    constructor(keys){
                        this._keys = [];
                        this._keyMap = {};
                        let totalWeight = 0;
                        keys.forEach((key)=>{
                            let obj = createKey(key);
                            totalWeight += obj.weight;
                            this._keys.push(obj);
                            this._keyMap[obj.id] = obj;
                            totalWeight += obj.weight;
                        });
                        // Normalize weights so that their sum is equal to 1
                        this._keys.forEach((key)=>{
                            key.weight /= totalWeight;
                        });
                    }
                }
                function createKey(key) {
                    let path = null;
                    let id = null;
                    let src = null;
                    let weight = 1;
                    let getFn = null;
                    if (isString(key) || isArray(key)) {
                        src = key;
                        path = createKeyPath(key);
                        id = createKeyId(key);
                    } else {
                        if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
                        const name = key.name;
                        src = name;
                        if (hasOwn.call(key, "weight")) {
                            weight = key.weight;
                            if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                        }
                        path = createKeyPath(name);
                        id = createKeyId(name);
                        getFn = key.getFn;
                    }
                    return {
                        path,
                        id,
                        weight,
                        src,
                        getFn
                    };
                }
                function createKeyPath(key) {
                    return isArray(key) ? key : key.split(".");
                }
                function createKeyId(key) {
                    return isArray(key) ? key.join(".") : key;
                }
                function get(obj, path) {
                    let list = [];
                    let arr = false;
                    const deepGet = (obj, path, index)=>{
                        if (!isDefined(obj)) return;
                        if (!path[index]) // If there's no path left, we've arrived at the object we care about.
                        list.push(obj);
                        else {
                            let key = path[index];
                            const value = obj[key];
                            if (!isDefined(value)) return;
                            // If we're at the last value in the path, and if it's a string/number/bool,
                            // add it to the list
                            if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) list.push(toString(value));
                            else if (isArray(value)) {
                                arr = true;
                                // Search each item in the array.
                                for(let i = 0, len = value.length; i < len; i += 1)deepGet(value[i], path, index + 1);
                            } else if (path.length) // An object. Recurse further.
                            deepGet(value, path, index + 1);
                        }
                    };
                    // Backwards compatibility (since path used to be a string)
                    deepGet(obj, isString(path) ? path.split(".") : path, 0);
                    return arr ? list : list[0];
                }
                const MatchOptions = {
                    // Whether the matches should be included in the result set. When `true`, each record in the result
                    // set will include the indices of the matched characters.
                    // These can consequently be used for highlighting purposes.
                    includeMatches: false,
                    // When `true`, the matching function will continue to the end of a search pattern even if
                    // a perfect match has already been located in the string.
                    findAllMatches: false,
                    // Minimum number of characters that must be matched before a result is considered a match
                    minMatchCharLength: 1
                };
                const BasicOptions = {
                    // When `true`, the algorithm continues searching to the end of the input even if a perfect
                    // match is found before the end of the same input.
                    isCaseSensitive: false,
                    // When true, the matching function will continue to the end of a search pattern even if
                    includeScore: false,
                    // List of properties that will be searched. This also supports nested properties.
                    keys: [],
                    // Whether to sort the result list, by score
                    shouldSort: true,
                    // Default sort function: sort by ascending score, ascending index
                    sortFn: (a, b)=>a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
                };
                const FuzzyOptions = {
                    // Approximately where in the text is the pattern expected to be found?
                    location: 0,
                    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
                    // (of both letters and location), a threshold of '1.0' would match anything.
                    threshold: 0.6,
                    // Determines how close the match must be to the fuzzy location (specified above).
                    // An exact letter match which is 'distance' characters away from the fuzzy location
                    // would score as a complete mismatch. A distance of '0' requires the match be at
                    // the exact location specified, a threshold of '1000' would require a perfect match
                    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
                    distance: 100
                };
                const AdvancedOptions = {
                    // When `true`, it enables the use of unix-like search commands
                    useExtendedSearch: false,
                    // The get function to use when fetching an object's properties.
                    // The default will search nested paths *ie foo.bar.baz*
                    getFn: get,
                    // When `true`, search will ignore `location` and `distance`, so it won't matter
                    // where in the string the pattern appears.
                    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
                    ignoreLocation: false,
                    // When `true`, the calculation for the relevance score (used for sorting) will
                    // ignore the field-length norm.
                    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
                    ignoreFieldNorm: false,
                    // The weight to determine how much field length norm effects scoring.
                    fieldNormWeight: 1
                };
                var Config = {
                    ...BasicOptions,
                    ...MatchOptions,
                    ...FuzzyOptions,
                    ...AdvancedOptions
                };
                const SPACE = /[^ ]+/g;
                // Field-length norm: the shorter the field, the higher the weight.
                // Set to 3 decimals to reduce index size.
                function norm(weight = 1, mantissa = 3) {
                    const cache = new Map();
                    const m = Math.pow(10, mantissa);
                    return {
                        get (value) {
                            const numTokens = value.match(SPACE).length;
                            if (cache.has(numTokens)) return cache.get(numTokens);
                            // Default function is 1/sqrt(x), weight makes that variable
                            const norm = 1 / Math.pow(numTokens, 0.5 * weight);
                            // In place of `toFixed(mantissa)`, for faster computation
                            const n = parseFloat(Math.round(norm * m) / m);
                            cache.set(numTokens, n);
                            return n;
                        },
                        clear () {
                            cache.clear();
                        }
                    };
                }
                class FuseIndex {
                    setSources(docs = []) {
                        this.docs = docs;
                    }
                    setIndexRecords(records = []) {
                        this.records = records;
                    }
                    setKeys(keys = []) {
                        this.keys = keys;
                        this._keysMap = {};
                        keys.forEach((key, idx)=>{
                            this._keysMap[key.id] = idx;
                        });
                    }
                    create() {
                        if (this.isCreated || !this.docs.length) return;
                        this.isCreated = true;
                        // List is Array<String>
                        if (isString(this.docs[0])) this.docs.forEach((doc, docIndex)=>{
                            this._addString(doc, docIndex);
                        });
                        else // List is Array<Object>
                        this.docs.forEach((doc, docIndex)=>{
                            this._addObject(doc, docIndex);
                        });
                        this.norm.clear();
                    }
                    // Adds a doc to the end of the index
                    add(doc) {
                        const idx = this.size();
                        if (isString(doc)) this._addString(doc, idx);
                        else this._addObject(doc, idx);
                    }
                    // Removes the doc at the specified index of the index
                    removeAt(idx) {
                        this.records.splice(idx, 1);
                        // Change ref index of every subsquent doc
                        for(let i = idx, len = this.size(); i < len; i += 1)this.records[i].i -= 1;
                    }
                    getValueForItemAtKeyId(item, keyId) {
                        return item[this._keysMap[keyId]];
                    }
                    size() {
                        return this.records.length;
                    }
                    _addString(doc, docIndex) {
                        if (!isDefined(doc) || isBlank(doc)) return;
                        let record = {
                            v: doc,
                            i: docIndex,
                            n: this.norm.get(doc)
                        };
                        this.records.push(record);
                    }
                    _addObject(doc, docIndex) {
                        let record = {
                            i: docIndex,
                            $: {}
                        };
                        // Iterate over every key (i.e, path), and fetch the value at that key
                        this.keys.forEach((key, keyIndex)=>{
                            let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
                            if (!isDefined(value)) return;
                            if (isArray(value)) {
                                let subRecords = [];
                                const stack = [
                                    {
                                        nestedArrIndex: -1,
                                        value
                                    }
                                ];
                                while(stack.length){
                                    const { nestedArrIndex, value } = stack.pop();
                                    if (!isDefined(value)) continue;
                                    if (isString(value) && !isBlank(value)) {
                                        let subRecord = {
                                            v: value,
                                            i: nestedArrIndex,
                                            n: this.norm.get(value)
                                        };
                                        subRecords.push(subRecord);
                                    } else if (isArray(value)) value.forEach((item, k)=>{
                                        stack.push({
                                            nestedArrIndex: k,
                                            value: item
                                        });
                                    });
                                }
                                record.$[keyIndex] = subRecords;
                            } else if (isString(value) && !isBlank(value)) {
                                let subRecord = {
                                    v: value,
                                    n: this.norm.get(value)
                                };
                                record.$[keyIndex] = subRecord;
                            }
                        });
                        this.records.push(record);
                    }
                    toJSON() {
                        return {
                            keys: this.keys,
                            records: this.records
                        };
                    }
                    constructor({ getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}){
                        this.norm = norm(fieldNormWeight, 3);
                        this.getFn = getFn;
                        this.isCreated = false;
                        this.setIndexRecords();
                    }
                }
                function createIndex(keys, docs, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
                    const myIndex = new FuseIndex({
                        getFn,
                        fieldNormWeight
                    });
                    myIndex.setKeys(keys.map(createKey));
                    myIndex.setSources(docs);
                    myIndex.create();
                    return myIndex;
                }
                function parseIndex(data, { getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}) {
                    const { keys, records } = data;
                    const myIndex = new FuseIndex({
                        getFn,
                        fieldNormWeight
                    });
                    myIndex.setKeys(keys);
                    myIndex.setIndexRecords(records);
                    return myIndex;
                }
                function computeScore$1(pattern, { errors = 0, currentLocation = 0, expectedLocation = 0, distance = Config.distance, ignoreLocation = Config.ignoreLocation } = {}) {
                    const accuracy = errors / pattern.length;
                    if (ignoreLocation) return accuracy;
                    const proximity = Math.abs(expectedLocation - currentLocation);
                    if (!distance) // Dodge divide by zero error.
                    return proximity ? 1.0 : accuracy;
                    return accuracy + proximity / distance;
                }
                function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
                    let indices = [];
                    let start = -1;
                    let end = -1;
                    let i = 0;
                    for(let len = matchmask.length; i < len; i += 1){
                        let match = matchmask[i];
                        if (match && start === -1) start = i;
                        else if (!match && start !== -1) {
                            end = i - 1;
                            if (end - start + 1 >= minMatchCharLength) indices.push([
                                start,
                                end
                            ]);
                            start = -1;
                        }
                    }
                    // (i-1 - start) + 1 => i - start
                    if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([
                        start,
                        i - 1
                    ]);
                    return indices;
                }
                // Machine word size
                const MAX_BITS = 32;
                function search(text, pattern, patternAlphabet, { location = Config.location, distance = Config.distance, threshold = Config.threshold, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, includeMatches = Config.includeMatches, ignoreLocation = Config.ignoreLocation } = {}) {
                    if (pattern.length > MAX_BITS) throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
                    const patternLen = pattern.length;
                    // Set starting location at beginning text and initialize the alphabet.
                    const textLen = text.length;
                    // Handle the case when location > text.length
                    const expectedLocation = Math.max(0, Math.min(location, textLen));
                    // Highest score beyond which we give up.
                    let currentThreshold = threshold;
                    // Is there a nearby exact match? (speedup)
                    let bestLocation = expectedLocation;
                    // Performance: only computer matches when the minMatchCharLength > 1
                    // OR if `includeMatches` is true.
                    const computeMatches = minMatchCharLength > 1 || includeMatches;
                    // A mask of the matches, used for building the indices
                    const matchMask = computeMatches ? Array(textLen) : [];
                    let index;
                    // Get all exact matches, here for speed up
                    while((index = text.indexOf(pattern, bestLocation)) > -1){
                        let score = computeScore$1(pattern, {
                            currentLocation: index,
                            expectedLocation,
                            distance,
                            ignoreLocation
                        });
                        currentThreshold = Math.min(score, currentThreshold);
                        bestLocation = index + patternLen;
                        if (computeMatches) {
                            let i = 0;
                            while(i < patternLen){
                                matchMask[index + i] = 1;
                                i += 1;
                            }
                        }
                    }
                    // Reset the best location
                    bestLocation = -1;
                    let lastBitArr = [];
                    let finalScore = 1;
                    let binMax = patternLen + textLen;
                    const mask = 1 << patternLen - 1;
                    for(let i = 0; i < patternLen; i += 1){
                        // Scan for the best match; each iteration allows for one more error.
                        // Run a binary search to determine how far from the match location we can stray
                        // at this error level.
                        let binMin = 0;
                        let binMid = binMax;
                        while(binMin < binMid){
                            const score = computeScore$1(pattern, {
                                errors: i,
                                currentLocation: expectedLocation + binMid,
                                expectedLocation,
                                distance,
                                ignoreLocation
                            });
                            if (score <= currentThreshold) binMin = binMid;
                            else binMax = binMid;
                            binMid = Math.floor((binMax - binMin) / 2 + binMin);
                        }
                        // Use the result from this iteration as the maximum for the next.
                        binMax = binMid;
                        let start = Math.max(1, expectedLocation - binMid + 1);
                        let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
                        // Initialize the bit array
                        let bitArr = Array(finish + 2);
                        bitArr[finish + 1] = (1 << i) - 1;
                        for(let j = finish; j >= start; j -= 1){
                            let currentLocation = j - 1;
                            let charMatch = patternAlphabet[text.charAt(currentLocation)];
                            if (computeMatches) // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
                            matchMask[currentLocation] = +!!charMatch;
                            // First pass: exact match
                            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
                            // Subsequent passes: fuzzy match
                            if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                            if (bitArr[j] & mask) {
                                finalScore = computeScore$1(pattern, {
                                    errors: i,
                                    currentLocation,
                                    expectedLocation,
                                    distance,
                                    ignoreLocation
                                });
                                // This match will almost certainly be better than any existing match.
                                // But check anyway.
                                if (finalScore <= currentThreshold) {
                                    // Indeed it is
                                    currentThreshold = finalScore;
                                    bestLocation = currentLocation;
                                    // Already passed `loc`, downhill from here on in.
                                    if (bestLocation <= expectedLocation) break;
                                    // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                                    start = Math.max(1, 2 * expectedLocation - bestLocation);
                                }
                            }
                        }
                        // No hope for a (better) match at greater error levels.
                        const score = computeScore$1(pattern, {
                            errors: i + 1,
                            currentLocation: expectedLocation,
                            expectedLocation,
                            distance,
                            ignoreLocation
                        });
                        if (score > currentThreshold) break;
                        lastBitArr = bitArr;
                    }
                    const result = {
                        isMatch: bestLocation >= 0,
                        // Count exact matches (those with a score of 0) to be "almost" exact
                        score: Math.max(0.001, finalScore)
                    };
                    if (computeMatches) {
                        const indices = convertMaskToIndices(matchMask, minMatchCharLength);
                        if (!indices.length) result.isMatch = false;
                        else if (includeMatches) result.indices = indices;
                    }
                    return result;
                }
                function createPatternAlphabet(pattern) {
                    let mask = {};
                    for(let i = 0, len = pattern.length; i < len; i += 1){
                        const char = pattern.charAt(i);
                        mask[char] = (mask[char] || 0) | 1 << len - i - 1;
                    }
                    return mask;
                }
                class BitapSearch {
                    searchIn(text) {
                        const { isCaseSensitive, includeMatches } = this.options;
                        if (!isCaseSensitive) text = text.toLowerCase();
                        // Exact match
                        if (this.pattern === text) {
                            let result = {
                                isMatch: true,
                                score: 0
                            };
                            if (includeMatches) result.indices = [
                                [
                                    0,
                                    text.length - 1
                                ]
                            ];
                            return result;
                        }
                        // Otherwise, use Bitap algorithm
                        const { location, distance, threshold, findAllMatches, minMatchCharLength, ignoreLocation } = this.options;
                        let allIndices = [];
                        let totalScore = 0;
                        let hasMatches = false;
                        this.chunks.forEach(({ pattern, alphabet, startIndex })=>{
                            const { isMatch, score, indices } = search(text, pattern, alphabet, {
                                location: location + startIndex,
                                distance,
                                threshold,
                                findAllMatches,
                                minMatchCharLength,
                                includeMatches,
                                ignoreLocation
                            });
                            if (isMatch) hasMatches = true;
                            totalScore += score;
                            if (isMatch && indices) allIndices = [
                                ...allIndices,
                                ...indices
                            ];
                        });
                        let result = {
                            isMatch: hasMatches,
                            score: hasMatches ? totalScore / this.chunks.length : 1
                        };
                        if (hasMatches && includeMatches) result.indices = allIndices;
                        return result;
                    }
                    constructor(pattern, { location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation } = {}){
                        this.options = {
                            location,
                            threshold,
                            distance,
                            includeMatches,
                            findAllMatches,
                            minMatchCharLength,
                            isCaseSensitive,
                            ignoreLocation
                        };
                        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                        this.chunks = [];
                        if (!this.pattern.length) return;
                        const addChunk = (pattern, startIndex)=>{
                            this.chunks.push({
                                pattern,
                                alphabet: createPatternAlphabet(pattern),
                                startIndex
                            });
                        };
                        const len = this.pattern.length;
                        if (len > MAX_BITS) {
                            let i = 0;
                            const remainder = len % MAX_BITS;
                            const end = len - remainder;
                            while(i < end){
                                addChunk(this.pattern.substr(i, MAX_BITS), i);
                                i += MAX_BITS;
                            }
                            if (remainder) {
                                const startIndex = len - MAX_BITS;
                                addChunk(this.pattern.substr(startIndex), startIndex);
                            }
                        } else addChunk(this.pattern, 0);
                    }
                }
                class BaseMatch {
                    static isMultiMatch(pattern) {
                        return getMatch(pattern, this.multiRegex);
                    }
                    static isSingleMatch(pattern) {
                        return getMatch(pattern, this.singleRegex);
                    }
                    search() {}
                    constructor(pattern){
                        this.pattern = pattern;
                    }
                }
                function getMatch(pattern, exp) {
                    const matches = pattern.match(exp);
                    return matches ? matches[1] : null;
                }
                // Token: 'file
                class ExactMatch extends BaseMatch {
                    static get type() {
                        return "exact";
                    }
                    static get multiRegex() {
                        return /^="(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^=(.*)$/;
                    }
                    search(text) {
                        const isMatch = text === this.pattern;
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                this.pattern.length - 1
                            ]
                        };
                    }
                    constructor(pattern){
                        super(pattern);
                    }
                }
                // Token: !fire
                class InverseExactMatch extends BaseMatch {
                    static get type() {
                        return "inverse-exact";
                    }
                    static get multiRegex() {
                        return /^!"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^!(.*)$/;
                    }
                    search(text) {
                        const index = text.indexOf(this.pattern);
                        const isMatch = index === -1;
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                text.length - 1
                            ]
                        };
                    }
                    constructor(pattern){
                        super(pattern);
                    }
                }
                // Token: ^file
                class PrefixExactMatch extends BaseMatch {
                    static get type() {
                        return "prefix-exact";
                    }
                    static get multiRegex() {
                        return /^\^"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^\^(.*)$/;
                    }
                    search(text) {
                        const isMatch = text.startsWith(this.pattern);
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                this.pattern.length - 1
                            ]
                        };
                    }
                    constructor(pattern){
                        super(pattern);
                    }
                }
                // Token: !^fire
                class InversePrefixExactMatch extends BaseMatch {
                    static get type() {
                        return "inverse-prefix-exact";
                    }
                    static get multiRegex() {
                        return /^!\^"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^!\^(.*)$/;
                    }
                    search(text) {
                        const isMatch = !text.startsWith(this.pattern);
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                text.length - 1
                            ]
                        };
                    }
                    constructor(pattern){
                        super(pattern);
                    }
                }
                // Token: .file$
                class SuffixExactMatch extends BaseMatch {
                    static get type() {
                        return "suffix-exact";
                    }
                    static get multiRegex() {
                        return /^"(.*)"\$$/;
                    }
                    static get singleRegex() {
                        return /^(.*)\$$/;
                    }
                    search(text) {
                        const isMatch = text.endsWith(this.pattern);
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                text.length - this.pattern.length,
                                text.length - 1
                            ]
                        };
                    }
                    constructor(pattern){
                        super(pattern);
                    }
                }
                // Token: !.file$
                class InverseSuffixExactMatch extends BaseMatch {
                    static get type() {
                        return "inverse-suffix-exact";
                    }
                    static get multiRegex() {
                        return /^!"(.*)"\$$/;
                    }
                    static get singleRegex() {
                        return /^!(.*)\$$/;
                    }
                    search(text) {
                        const isMatch = !text.endsWith(this.pattern);
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                text.length - 1
                            ]
                        };
                    }
                    constructor(pattern){
                        super(pattern);
                    }
                }
                class FuzzyMatch extends BaseMatch {
                    static get type() {
                        return "fuzzy";
                    }
                    static get multiRegex() {
                        return /^"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^(.*)$/;
                    }
                    search(text) {
                        return this._bitapSearch.searchIn(text);
                    }
                    constructor(pattern, { location = Config.location, threshold = Config.threshold, distance = Config.distance, includeMatches = Config.includeMatches, findAllMatches = Config.findAllMatches, minMatchCharLength = Config.minMatchCharLength, isCaseSensitive = Config.isCaseSensitive, ignoreLocation = Config.ignoreLocation } = {}){
                        super(pattern);
                        this._bitapSearch = new BitapSearch(pattern, {
                            location,
                            threshold,
                            distance,
                            includeMatches,
                            findAllMatches,
                            minMatchCharLength,
                            isCaseSensitive,
                            ignoreLocation
                        });
                    }
                }
                // Token: 'file
                class IncludeMatch extends BaseMatch {
                    static get type() {
                        return "include";
                    }
                    static get multiRegex() {
                        return /^'"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^'(.*)$/;
                    }
                    search(text) {
                        let location = 0;
                        let index;
                        const indices = [];
                        const patternLen = this.pattern.length;
                        // Get all exact matches
                        while((index = text.indexOf(this.pattern, location)) > -1){
                            location = index + patternLen;
                            indices.push([
                                index,
                                location - 1
                            ]);
                        }
                        const isMatch = !!indices.length;
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices
                        };
                    }
                    constructor(pattern){
                        super(pattern);
                    }
                }
                // ❗Order is important. DO NOT CHANGE.
                const searchers = [
                    ExactMatch,
                    IncludeMatch,
                    PrefixExactMatch,
                    InversePrefixExactMatch,
                    InverseSuffixExactMatch,
                    SuffixExactMatch,
                    InverseExactMatch,
                    FuzzyMatch
                ];
                const searchersLen = searchers.length;
                // Regex to split by spaces, but keep anything in quotes together
                const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
                const OR_TOKEN = "|";
                // Return a 2D array representation of the query, for simpler parsing.
                // Example:
                // "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
                function parseQuery(pattern, options = {}) {
                    return pattern.split(OR_TOKEN).map((item)=>{
                        let query = item.trim().split(SPACE_RE).filter((item)=>item && !!item.trim());
                        let results = [];
                        for(let i = 0, len = query.length; i < len; i += 1){
                            const queryItem = query[i];
                            // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
                            let found = false;
                            let idx = -1;
                            while(!found && ++idx < searchersLen){
                                const searcher = searchers[idx];
                                let token = searcher.isMultiMatch(queryItem);
                                if (token) {
                                    results.push(new searcher(token, options));
                                    found = true;
                                }
                            }
                            if (found) continue;
                            // 2. Handle single query matches (i.e, once that are *not* quoted)
                            idx = -1;
                            while(++idx < searchersLen){
                                const searcher = searchers[idx];
                                let token = searcher.isSingleMatch(queryItem);
                                if (token) {
                                    results.push(new searcher(token, options));
                                    break;
                                }
                            }
                        }
                        return results;
                    });
                }
                // These extended matchers can return an array of matches, as opposed
                // to a singl match
                const MultiMatchSet = new Set([
                    FuzzyMatch.type,
                    IncludeMatch.type
                ]);
                /**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */ class ExtendedSearch {
                    static condition(_, options) {
                        return options.useExtendedSearch;
                    }
                    searchIn(text) {
                        const query = this.query;
                        if (!query) return {
                            isMatch: false,
                            score: 1
                        };
                        const { includeMatches, isCaseSensitive } = this.options;
                        text = isCaseSensitive ? text : text.toLowerCase();
                        let numMatches = 0;
                        let allIndices = [];
                        let totalScore = 0;
                        // ORs
                        for(let i = 0, qLen = query.length; i < qLen; i += 1){
                            const searchers = query[i];
                            // Reset indices
                            allIndices.length = 0;
                            numMatches = 0;
                            // ANDs
                            for(let j = 0, pLen = searchers.length; j < pLen; j += 1){
                                const searcher = searchers[j];
                                const { isMatch, indices, score } = searcher.search(text);
                                if (isMatch) {
                                    numMatches += 1;
                                    totalScore += score;
                                    if (includeMatches) {
                                        const type = searcher.constructor.type;
                                        if (MultiMatchSet.has(type)) allIndices = [
                                            ...allIndices,
                                            ...indices
                                        ];
                                        else allIndices.push(indices);
                                    }
                                } else {
                                    totalScore = 0;
                                    numMatches = 0;
                                    allIndices.length = 0;
                                    break;
                                }
                            }
                            // OR condition, so if TRUE, return
                            if (numMatches) {
                                let result = {
                                    isMatch: true,
                                    score: totalScore / numMatches
                                };
                                if (includeMatches) result.indices = allIndices;
                                return result;
                            }
                        }
                        // Nothing was matched
                        return {
                            isMatch: false,
                            score: 1
                        };
                    }
                    constructor(pattern, { isCaseSensitive = Config.isCaseSensitive, includeMatches = Config.includeMatches, minMatchCharLength = Config.minMatchCharLength, ignoreLocation = Config.ignoreLocation, findAllMatches = Config.findAllMatches, location = Config.location, threshold = Config.threshold, distance = Config.distance } = {}){
                        this.query = null;
                        this.options = {
                            isCaseSensitive,
                            includeMatches,
                            minMatchCharLength,
                            findAllMatches,
                            ignoreLocation,
                            location,
                            threshold,
                            distance
                        };
                        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                        this.query = parseQuery(this.pattern, this.options);
                    }
                }
                const registeredSearchers = [];
                function register(...args) {
                    registeredSearchers.push(...args);
                }
                function createSearcher(pattern, options) {
                    for(let i = 0, len = registeredSearchers.length; i < len; i += 1){
                        let searcherClass = registeredSearchers[i];
                        if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
                    }
                    return new BitapSearch(pattern, options);
                }
                const LogicalOperator = {
                    AND: "$and",
                    OR: "$or"
                };
                const KeyType = {
                    PATH: "$path",
                    PATTERN: "$val"
                };
                const isExpression = (query)=>!!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
                const isPath = (query)=>!!query[KeyType.PATH];
                const isLeaf = (query)=>!isArray(query) && isObject(query) && !isExpression(query);
                const convertToExplicit = (query)=>({
                        [LogicalOperator.AND]: Object.keys(query).map((key)=>({
                                [key]: query[key]
                            }))
                    });
                // When `auto` is `true`, the parse function will infer and initialize and add
                // the appropriate `Searcher` instance
                function parse(query, options, { auto = true } = {}) {
                    const next = (query)=>{
                        let keys = Object.keys(query);
                        const isQueryPath = isPath(query);
                        if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
                        if (isLeaf(query)) {
                            const key = isQueryPath ? query[KeyType.PATH] : keys[0];
                            const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
                            if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                            const obj = {
                                keyId: createKeyId(key),
                                pattern
                            };
                            if (auto) obj.searcher = createSearcher(pattern, options);
                            return obj;
                        }
                        let node = {
                            children: [],
                            operator: keys[0]
                        };
                        keys.forEach((key)=>{
                            const value = query[key];
                            if (isArray(value)) value.forEach((item)=>{
                                node.children.push(next(item));
                            });
                        });
                        return node;
                    };
                    if (!isExpression(query)) query = convertToExplicit(query);
                    return next(query);
                }
                // Practical scoring function
                function computeScore(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
                    results.forEach((result)=>{
                        let totalScore = 1;
                        result.matches.forEach(({ key, norm, score })=>{
                            const weight = key ? key.weight : null;
                            totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
                        });
                        result.score = totalScore;
                    });
                }
                function transformMatches(result, data) {
                    const matches = result.matches;
                    data.matches = [];
                    if (!isDefined(matches)) return;
                    matches.forEach((match)=>{
                        if (!isDefined(match.indices) || !match.indices.length) return;
                        const { indices, value } = match;
                        let obj = {
                            indices,
                            value
                        };
                        if (match.key) obj.key = match.key.src;
                        if (match.idx > -1) obj.refIndex = match.idx;
                        data.matches.push(obj);
                    });
                }
                function transformScore(result, data) {
                    data.score = result.score;
                }
                function format(results, docs, { includeMatches = Config.includeMatches, includeScore = Config.includeScore } = {}) {
                    const transformers = [];
                    if (includeMatches) transformers.push(transformMatches);
                    if (includeScore) transformers.push(transformScore);
                    return results.map((result)=>{
                        const { idx } = result;
                        const data = {
                            item: docs[idx],
                            refIndex: idx
                        };
                        if (transformers.length) transformers.forEach((transformer)=>{
                            transformer(result, data);
                        });
                        return data;
                    });
                }
                class Fuse {
                    setCollection(docs, index) {
                        this._docs = docs;
                        if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
                        this._myIndex = index || createIndex(this.options.keys, this._docs, {
                            getFn: this.options.getFn,
                            fieldNormWeight: this.options.fieldNormWeight
                        });
                    }
                    add(doc) {
                        if (!isDefined(doc)) return;
                        this._docs.push(doc);
                        this._myIndex.add(doc);
                    }
                    remove(predicate = ()=>false) {
                        const results = [];
                        for(let i = 0, len = this._docs.length; i < len; i += 1){
                            const doc = this._docs[i];
                            if (predicate(doc, i)) {
                                this.removeAt(i);
                                i -= 1;
                                len -= 1;
                                results.push(doc);
                            }
                        }
                        return results;
                    }
                    removeAt(idx) {
                        this._docs.splice(idx, 1);
                        this._myIndex.removeAt(idx);
                    }
                    getIndex() {
                        return this._myIndex;
                    }
                    search(query, { limit = -1 } = {}) {
                        const { includeMatches, includeScore, shouldSort, sortFn, ignoreFieldNorm } = this.options;
                        let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
                        computeScore(results, {
                            ignoreFieldNorm
                        });
                        if (shouldSort) results.sort(sortFn);
                        if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
                        return format(results, this._docs, {
                            includeMatches,
                            includeScore
                        });
                    }
                    _searchStringList(query) {
                        const searcher = createSearcher(query, this.options);
                        const { records } = this._myIndex;
                        const results = [];
                        // Iterate over every string in the index
                        records.forEach(({ v: text, i: idx, n: norm })=>{
                            if (!isDefined(text)) return;
                            const { isMatch, score, indices } = searcher.searchIn(text);
                            if (isMatch) results.push({
                                item: text,
                                idx,
                                matches: [
                                    {
                                        score,
                                        value: text,
                                        norm,
                                        indices
                                    }
                                ]
                            });
                        });
                        return results;
                    }
                    _searchLogical(query) {
                        const expression = parse(query, this.options);
                        const evaluate = (node, item, idx)=>{
                            if (!node.children) {
                                const { keyId, searcher } = node;
                                const matches = this._findMatches({
                                    key: this._keyStore.get(keyId),
                                    value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                                    searcher
                                });
                                if (matches && matches.length) return [
                                    {
                                        idx,
                                        item,
                                        matches
                                    }
                                ];
                                return [];
                            }
                            const res = [];
                            for(let i = 0, len = node.children.length; i < len; i += 1){
                                const child = node.children[i];
                                const result = evaluate(child, item, idx);
                                if (result.length) res.push(...result);
                                else if (node.operator === LogicalOperator.AND) return [];
                            }
                            return res;
                        };
                        const records = this._myIndex.records;
                        const resultMap = {};
                        const results = [];
                        records.forEach(({ $: item, i: idx })=>{
                            if (isDefined(item)) {
                                let expResults = evaluate(expression, item, idx);
                                if (expResults.length) {
                                    // Dedupe when adding
                                    if (!resultMap[idx]) {
                                        resultMap[idx] = {
                                            idx,
                                            item,
                                            matches: []
                                        };
                                        results.push(resultMap[idx]);
                                    }
                                    expResults.forEach(({ matches })=>{
                                        resultMap[idx].matches.push(...matches);
                                    });
                                }
                            }
                        });
                        return results;
                    }
                    _searchObjectList(query) {
                        const searcher = createSearcher(query, this.options);
                        const { keys, records } = this._myIndex;
                        const results = [];
                        // List is Array<Object>
                        records.forEach(({ $: item, i: idx })=>{
                            if (!isDefined(item)) return;
                            let matches = [];
                            // Iterate over every key (i.e, path), and fetch the value at that key
                            keys.forEach((key, keyIndex)=>{
                                matches.push(...this._findMatches({
                                    key,
                                    value: item[keyIndex],
                                    searcher
                                }));
                            });
                            if (matches.length) results.push({
                                idx,
                                item,
                                matches
                            });
                        });
                        return results;
                    }
                    _findMatches({ key, value, searcher }) {
                        if (!isDefined(value)) return [];
                        let matches = [];
                        if (isArray(value)) value.forEach(({ v: text, i: idx, n: norm })=>{
                            if (!isDefined(text)) return;
                            const { isMatch, score, indices } = searcher.searchIn(text);
                            if (isMatch) matches.push({
                                score,
                                key,
                                value: text,
                                idx,
                                norm,
                                indices
                            });
                        });
                        else {
                            const { v: text, n: norm } = value;
                            const { isMatch, score, indices } = searcher.searchIn(text);
                            if (isMatch) matches.push({
                                score,
                                key,
                                value: text,
                                norm,
                                indices
                            });
                        }
                        return matches;
                    }
                    constructor(docs, options = {}, index){
                        this.options = {
                            ...Config,
                            ...options
                        };
                        this.options.useExtendedSearch;
                        this._keyStore = new KeyStore(this.options.keys);
                        this.setCollection(docs, index);
                    }
                }
                Fuse.version = "6.6.2";
                Fuse.createIndex = createIndex;
                Fuse.parseIndex = parseIndex;
                Fuse.config = Config;
                Fuse.parseQuery = parse;
                register(ExtendedSearch);
            /***/ },
            /***/ 791: /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                // ESM COMPAT FLAG
                __webpack_require__.r(__webpack_exports__);
                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "__DO_NOT_USE__ActionTypes": function() {
                        return /* binding */ ActionTypes;
                    },
                    "applyMiddleware": function() {
                        return /* binding */ applyMiddleware;
                    },
                    "bindActionCreators": function() {
                        return /* binding */ bindActionCreators;
                    },
                    "combineReducers": function() {
                        return /* binding */ combineReducers;
                    },
                    "compose": function() {
                        return /* binding */ compose;
                    },
                    "createStore": function() {
                        return /* binding */ createStore;
                    },
                    "legacy_createStore": function() {
                        return /* binding */ legacy_createStore;
                    }
                });
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                        return typeof obj;
                    } : function(obj) {
                        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    }, _typeof(obj);
                }
                function _toPrimitive(input, hint) {
                    if (_typeof(input) !== "object" || input === null) return input;
                    var prim = input[Symbol.toPrimitive];
                    if (prim !== undefined) {
                        var res = prim.call(input, hint || "default");
                        if (_typeof(res) !== "object") return res;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return (hint === "string" ? String : Number)(input);
                }
                function _toPropertyKey(arg) {
                    var key = _toPrimitive(arg, "string");
                    return _typeof(key) === "symbol" ? key : String(key);
                }
                function _defineProperty(obj, key, value) {
                    key = _toPropertyKey(key);
                    if (key in obj) Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                    else obj[key] = value;
                    return obj;
                }
                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        enumerableOnly && (symbols = symbols.filter(function(sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                        })), keys.push.apply(keys, symbols);
                    }
                    return keys;
                }
                function _objectSpread2(target) {
                    for(var i = 1; i < arguments.length; i++){
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                    return target;
                }
                /**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
                    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + "use the non-minified dev environment for full errors. ";
                }
                // Inlined version of the `symbol-observable` polyfill
                var $$observable = function() {
                    return typeof Symbol === "function" && Symbol.observable || "@@observable";
                }();
                /**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
                    return Math.random().toString(36).substring(7).split("").join(".");
                };
                var ActionTypes = {
                    INIT: "@@redux/INIT" + randomString(),
                    REPLACE: "@@redux/REPLACE" + randomString(),
                    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                    }
                };
                /**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
                    if (typeof obj !== "object" || obj === null) return false;
                    var proto = obj;
                    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
                    return Object.getPrototypeOf(obj) === proto;
                }
                // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
                function miniKindOf(val) {
                    if (val === void 0) return "undefined";
                    if (val === null) return "null";
                    var type = typeof val;
                    switch(type){
                        case "boolean":
                        case "string":
                        case "number":
                        case "symbol":
                        case "function":
                            return type;
                    }
                    if (Array.isArray(val)) return "array";
                    if (isDate(val)) return "date";
                    if (isError(val)) return "error";
                    var constructorName = ctorName(val);
                    switch(constructorName){
                        case "Symbol":
                        case "Promise":
                        case "WeakMap":
                        case "WeakSet":
                        case "Map":
                        case "Set":
                            return constructorName;
                    } // other
                    return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
                }
                function ctorName(val) {
                    return typeof val.constructor === "function" ? val.constructor.name : null;
                }
                function isError(val) {
                    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
                }
                function isDate(val) {
                    if (val instanceof Date) return true;
                    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
                }
                function kindOf(val) {
                    var typeOfVal = typeof val;
                    return typeOfVal;
                }
                /**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */ function createStore(reducer, preloadedState, enhancer) {
                    var _ref2;
                    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(formatProdErrorMessage(0));
                    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                        enhancer = preloadedState;
                        preloadedState = undefined;
                    }
                    if (typeof enhancer !== "undefined") {
                        if (typeof enhancer !== "function") throw new Error(formatProdErrorMessage(1));
                        return enhancer(createStore)(reducer, preloadedState);
                    }
                    if (typeof reducer !== "function") throw new Error(formatProdErrorMessage(2));
                    var currentReducer = reducer;
                    var currentState = preloadedState;
                    var currentListeners = [];
                    var nextListeners = currentListeners;
                    var isDispatching = false;
                    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
                        if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
                    }
                    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
                        if (isDispatching) throw new Error(formatProdErrorMessage(3));
                        return currentState;
                    }
                    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
                        if (typeof listener !== "function") throw new Error(formatProdErrorMessage(4));
                        if (isDispatching) throw new Error(formatProdErrorMessage(5));
                        var isSubscribed = true;
                        ensureCanMutateNextListeners();
                        nextListeners.push(listener);
                        return function unsubscribe() {
                            if (!isSubscribed) return;
                            if (isDispatching) throw new Error(formatProdErrorMessage(6));
                            isSubscribed = false;
                            ensureCanMutateNextListeners();
                            var index = nextListeners.indexOf(listener);
                            nextListeners.splice(index, 1);
                            currentListeners = null;
                        };
                    }
                    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
                        if (!isPlainObject(action)) throw new Error(formatProdErrorMessage(7));
                        if (typeof action.type === "undefined") throw new Error(formatProdErrorMessage(8));
                        if (isDispatching) throw new Error(formatProdErrorMessage(9));
                        try {
                            isDispatching = true;
                            currentState = currentReducer(currentState, action);
                        } finally{
                            isDispatching = false;
                        }
                        var listeners = currentListeners = nextListeners;
                        for(var i = 0; i < listeners.length; i++){
                            var listener = listeners[i];
                            listener();
                        }
                        return action;
                    }
                    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
                        if (typeof nextReducer !== "function") throw new Error(formatProdErrorMessage(10));
                        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
                        // Any reducers that existed in both the new and old rootReducer
                        // will receive the previous state. This effectively populates
                        // the new state tree with any relevant data from the old one.
                        dispatch({
                            type: ActionTypes.REPLACE
                        });
                    }
                    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
                        var _ref;
                        var outerSubscribe = subscribe;
                        return _ref = {
                            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                                if (typeof observer !== "object" || observer === null) throw new Error(formatProdErrorMessage(11));
                                function observeState() {
                                    if (observer.next) observer.next(getState());
                                }
                                observeState();
                                var unsubscribe = outerSubscribe(observeState);
                                return {
                                    unsubscribe: unsubscribe
                                };
                            }
                        }, _ref[$$observable] = function() {
                            return this;
                        }, _ref;
                    } // When a store is created, an "INIT" action is dispatched so that every
                    // reducer returns their initial state. This effectively populates
                    // the initial state tree.
                    dispatch({
                        type: ActionTypes.INIT
                    });
                    return _ref2 = {
                        dispatch: dispatch,
                        subscribe: subscribe,
                        getState: getState,
                        replaceReducer: replaceReducer
                    }, _ref2[$$observable] = observable, _ref2;
                }
                /**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ var legacy_createStore = createStore;
                /**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
                    /* eslint-disable no-console */ if (typeof console !== "undefined" && typeof console.error === "function") console.error(message);
                    /* eslint-enable no-console */ try {
                        // This error was thrown as a convenience so that if you enable
                        // "break on all exceptions" in your console,
                        // it would pause the execution at this line.
                        throw new Error(message);
                    } catch (e) {} // eslint-disable-line no-empty
                }
                function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
                    var reducerKeys = Object.keys(reducers);
                    var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
                    if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                    if (!isPlainObject(inputState)) return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
                    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
                        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
                    });
                    unexpectedKeys.forEach(function(key) {
                        unexpectedKeyCache[key] = true;
                    });
                    if (action && action.type === ActionTypes.REPLACE) return;
                    if (unexpectedKeys.length > 0) return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
                }
                function assertReducerShape(reducers) {
                    Object.keys(reducers).forEach(function(key) {
                        var reducer = reducers[key];
                        var initialState = reducer(undefined, {
                            type: ActionTypes.INIT
                        });
                        if (typeof initialState === "undefined") throw new Error(formatProdErrorMessage(12));
                        if (typeof reducer(undefined, {
                            type: ActionTypes.PROBE_UNKNOWN_ACTION()
                        }) === "undefined") throw new Error(formatProdErrorMessage(13));
                    });
                }
                /**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
                    var reducerKeys = Object.keys(reducers);
                    var finalReducers = {};
                    for(var i = 0; i < reducerKeys.length; i++){
                        var key = reducerKeys[i];
                        if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
                    }
                    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
                    // keys multiple times.
                    var unexpectedKeyCache;
                    var shapeAssertionError;
                    try {
                        assertReducerShape(finalReducers);
                    } catch (e) {
                        shapeAssertionError = e;
                    }
                    return function combination(state, action) {
                        if (state === void 0) state = {};
                        if (shapeAssertionError) throw shapeAssertionError;
                        var warningMessage;
                        var hasChanged = false;
                        var nextState = {};
                        for(var _i = 0; _i < finalReducerKeys.length; _i++){
                            var _key = finalReducerKeys[_i];
                            var reducer = finalReducers[_key];
                            var previousStateForKey = state[_key];
                            var nextStateForKey = reducer(previousStateForKey, action);
                            if (typeof nextStateForKey === "undefined") {
                                var actionType = action && action.type;
                                throw new Error(formatProdErrorMessage(14));
                            }
                            nextState[_key] = nextStateForKey;
                            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                        }
                        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                        return hasChanged ? nextState : state;
                    };
                }
                function bindActionCreator(actionCreator, dispatch) {
                    return function() {
                        return dispatch(actionCreator.apply(this, arguments));
                    };
                }
                /**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
                    if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
                    if (typeof actionCreators !== "object" || actionCreators === null) throw new Error(formatProdErrorMessage(16));
                    var boundActionCreators = {};
                    for(var key in actionCreators){
                        var actionCreator = actionCreators[key];
                        if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                    }
                    return boundActionCreators;
                }
                /**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
                    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++)funcs[_key] = arguments[_key];
                    if (funcs.length === 0) return function(arg) {
                        return arg;
                    };
                    if (funcs.length === 1) return funcs[0];
                    return funcs.reduce(function(a, b) {
                        return function() {
                            return a(b.apply(void 0, arguments));
                        };
                    });
                }
                /**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
                    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++)middlewares[_key] = arguments[_key];
                    return function(createStore) {
                        return function() {
                            var store = createStore.apply(void 0, arguments);
                            var _dispatch = function dispatch() {
                                throw new Error(formatProdErrorMessage(15));
                            };
                            var middlewareAPI = {
                                getState: store.getState,
                                dispatch: function dispatch() {
                                    return _dispatch.apply(void 0, arguments);
                                }
                            };
                            var chain = middlewares.map(function(middleware) {
                                return middleware(middlewareAPI);
                            });
                            _dispatch = compose.apply(void 0, chain)(store.dispatch);
                            return _objectSpread2(_objectSpread2({}, store), {}, {
                                dispatch: _dispatch
                            });
                        };
                    };
                }
                /*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */ function isCrushed() {}
            /***/ }
        };
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) /******/ return cachedModule.exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/ !function() {
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/ __webpack_require__.n = function(module1) {
                /******/ var getter = module1 && module1.__esModule ? /******/ function() {
                    return module1["default"];
                } : /******/ function() {
                    return module1;
                };
                /******/ __webpack_require__.d(getter, {
                    a: getter
                });
                /******/ return getter;
            /******/ };
        /******/ }();
        /******/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
            /******/ // define getter functions for harmony exports
            /******/ __webpack_require__.d = function(exports, definition) {
                /******/ for(var key in definition)/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            /******/ };
        /******/ }();
        /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
            /******/ __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            };
        /******/ }();
        /******/ /******/ /* webpack/runtime/make namespace object */ /******/ !function() {
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = function(exports) {
                /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
                /******/ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /******/ };
        /******/ }();
        /******/ /************************************************************************/ var __webpack_exports__ = {};
        // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
        !function() {
            /* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
            /* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
            /* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _scripts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(883);
            /* harmony import */ var _scripts_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(789);
            /* harmony import */ var _scripts_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(686);
            /* harmony default export */ __webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
        }();
        __webpack_exports__ = __webpack_exports__["default"];
        /******/ return __webpack_exports__;
    /******/ }();
});

},{}],"9Us5D":[function(require,module,exports) {
var _lib = require("./lib");
document.addEventListener("DOMContentLoaded", function() {
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector(".customCursor");
    const initCursor = ()=>{
        document.addEventListener("mousemove", (e)=>{
            clientX = e.clientX;
            clientY = e.clientY;
        });
        const render = ()=>{
            innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    };
    const animateCursor = (type, remove)=>(0, _lib.$)(".customCursor").classList.toggle(type, remove);
    initCursor();
    // Get the element with the class 'js-cursor-previous'
    const $previous = (0, _lib.$)(".js-cursor-previous");
    if ($previous) {
        // Add event listeners for mouseenter and mouseleave
        $previous.addEventListener("mouseenter", ()=>animateCursor("previous", true));
        $previous.addEventListener("mouseleave", ()=>animateCursor("previous", false));
    }
    // Get the element with the class 'js-cursor-previous'
    const $next = (0, _lib.$)(".js-cursor-next");
    if ($next) {
        // Add event listeners for mouseenter and mouseleave
        $next.addEventListener("mouseenter", ()=>animateCursor("next", true));
        $next.addEventListener("mouseleave", ()=>animateCursor("next", false));
    }
});

},{"./lib":"acGTP"}],"119aE":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
    }
    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        for(var i = 0; i < t.length; i++){
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
    }
    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
    }
    var s = Date.now();
    function l() {
        var e = {}, t = !0, i = 0, n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
        for(var s = function(i) {
            for(var n in i)Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = l(!0, e[n], i[n]) : e[n] = i[n]);
        }; i < n; i++){
            var o = arguments[i];
            s(o);
        }
        return e;
    }
    function o(e, t) {
        if ((k(e) || e === window || e === document) && (e = [
            e
        ]), A(e) || L(e) || (e = [
            e
        ]), 0 != P(e)) {
            if (A(e) && !L(e)) for(var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
            else if (L(e)) {
                for(var s in e)if (O(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
            }
        }
    }
    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e[s] = e[s] || [], l = {
            all: n,
            evt: null,
            found: null
        };
        return t && i && P(n) > 0 && o(n, function(e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return l.found = !0, l.evt = n, !1;
        }), l;
    }
    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = t.onElement, n = t.withCallback, s = t.avoidDuplicate, l = void 0 === s || s, a = t.once, h = void 0 !== a && a, d = t.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i || [];
        function v(e) {
            T(n) && n.call(u, e, this), h && v.destroy();
        }
        return C(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
            o(g, function(t) {
                var i = r(t, e, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c);
            });
        }, o(g, function(t) {
            var i = r(t, e, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c), i.all.push({
                eventName: e,
                fn: v
            }));
        }), v;
    }
    function h(e, t) {
        o(t.split(" "), function(t) {
            return e.classList.add(t);
        });
    }
    function d(e, t) {
        o(t.split(" "), function(t) {
            return e.classList.remove(t);
        });
    }
    function c(e, t) {
        return e.classList.contains(t);
    }
    function u(e, t) {
        for(; e !== document.body;){
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
        }
    }
    function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" === t) return T(i) && i(), !1;
        var n = x(), s = t.split(" ");
        o(s, function(t) {
            h(e, "g" + t);
        }), a(n, {
            onElement: e,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e, t) {
                o(s, function(e) {
                    d(t, "g" + e);
                }), T(i) && i();
            }
        });
    }
    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
    }
    function f(e) {
        e.style.display = "block";
    }
    function p(e) {
        e.style.display = "none";
    }
    function m(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for(i.innerHTML = e; i.firstChild;)t.appendChild(i.firstChild);
        return t;
    }
    function y() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        };
    }
    function x() {
        var e, t = document.createElement("fakeelement"), i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for(e in i)if (void 0 !== t.style[e]) return i[e];
    }
    function b(e, t, i, n) {
        if (e()) t();
        else {
            var s;
            i || (i = 100);
            var l = setInterval(function() {
                e() && (clearInterval(l), s && clearTimeout(s), t());
            }, i);
            n && (s = setTimeout(function() {
                clearInterval(l);
            }, n));
        }
    }
    function S(e, t, i) {
        if (I(e)) console.error("Inject assets error");
        else if (T(t) && (i = t, t = !1), C(t) && t in window) T(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (T(i) && i());
                var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'), o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (T(i) && i());
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (T(i)) {
                    if (C(t)) return b(function() {
                        return void 0 !== window[t];
                    }, function() {
                        i();
                    }), !1;
                    i();
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function() {
                    if (T(i)) {
                        if (C(t)) return b(function() {
                            return void 0 !== window[t];
                        }, function() {
                            i();
                        }), !1;
                        i();
                    }
                }, document.body.appendChild(r);
            }
        }
    }
    function w() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
    }
    function T(e) {
        return "function" == typeof e;
    }
    function C(e) {
        return "string" == typeof e;
    }
    function k(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType);
    }
    function E(e) {
        return Array.isArray(e);
    }
    function A(e) {
        return e && e.length && isFinite(e.length);
    }
    function L(t) {
        return "object" === e(t) && null != t && !T(t) && !E(t);
    }
    function I(e) {
        return null == e;
    }
    function O(e, t) {
        return null !== e && hasOwnProperty.call(e, t);
    }
    function P(e) {
        if (L(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for(var i in e)O(e, i) && t++;
            return t;
        }
        return e.length;
    }
    function M(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        o(t, function(e) {
            i.push(e.getAttribute("data-taborder"));
        });
        var n = Math.max.apply(Math, i.map(function(e) {
            return parseInt(e);
        })), s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var l = i.filter(function(e) {
            return e >= parseInt(s);
        }), r = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(r, '"]'));
    }
    function X(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = a("keydown", {
            onElement: window,
            withCallback: function(t, i) {
                var n = (t = t || window.event).keyCode;
                if (9 == n) {
                    var s = document.querySelector(".gbtn.focused");
                    if (!s) {
                        var l = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                        if ("input" == l || "textarea" == l || "button" == l) return;
                    }
                    t.preventDefault();
                    var o = document.querySelectorAll(".gbtn[data-taborder]");
                    if (!o || o.length <= 0) return;
                    if (!s) {
                        var r = z();
                        return void (r && (r.focus(), h(r, "focused")));
                    }
                    var a = z(s.getAttribute("data-taborder"));
                    d(s, "focused"), a && (a.focus(), h(a, "focused"));
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
            }
        });
    }
    function Y(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function q(e, t) {
        var i = function(e, t) {
            var i = Y(e) * Y(t);
            if (0 === i) return 0;
            var n = function(e, t) {
                return e.x * t.x + e.y * t.y;
            }(e, t) / i;
            return n > 1 && (n = 1), Math.acos(n);
        }(e, t);
        return function(e, t) {
            return e.x * t.y - t.x * e.y;
        }(e, t) > 0 && (i *= -1), 180 * i / Math.PI;
    }
    var N = function() {
        function e(i) {
            t(this, e), this.handlers = [], this.el = i;
        }
        return n(e, [
            {
                key: "add",
                value: function(e) {
                    this.handlers.push(e);
                }
            },
            {
                key: "del",
                value: function(e) {
                    e || (this.handlers = []);
                    for(var t = this.handlers.length; t >= 0; t--)this.handlers[t] === e && this.handlers.splice(t, 1);
                }
            },
            {
                key: "dispatch",
                value: function() {
                    for(var e = 0, t = this.handlers.length; e < t; e++){
                        var i = this.handlers[e];
                        "function" == typeof i && i.apply(this.el, arguments);
                    }
                }
            }
        ]), e;
    }();
    function D(e, t) {
        var i = new N(e);
        return i.add(t), i;
    }
    var _ = function() {
        function e(i, n) {
            t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function() {};
            this.rotate = D(this.element, n.rotate || s), this.touchStart = D(this.element, n.touchStart || s), this.multipointStart = D(this.element, n.multipointStart || s), this.multipointEnd = D(this.element, n.multipointEnd || s), this.pinch = D(this.element, n.pinch || s), this.swipe = D(this.element, n.swipe || s), this.tap = D(this.element, n.tap || s), this.doubleTap = D(this.element, n.doubleTap || s), this.longTap = D(this.element, n.longTap || s), this.singleTap = D(this.element, n.singleTap || s), this.pressMove = D(this.element, n.pressMove || s), this.twoFingerPressMove = D(this.element, n.twoFingerPressMove || s), this.touchMove = D(this.element, n.touchMove || s), this.touchEnd = D(this.element, n.touchEnd || s), this.touchCancel = D(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            };
        }
        return n(e, [
            {
                key: "start",
                value: function(e) {
                    if (e.touches) {
                        if (e.target && e.target.nodeName && [
                            "a",
                            "button",
                            "input"
                        ].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                        else {
                            this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30, this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                            var t = this.preV;
                            if (e.touches.length > 1) {
                                this._cancelLongTap(), this._cancelSingleTap();
                                var i = {
                                    x: e.touches[1].pageX - this.x1,
                                    y: e.touches[1].pageY - this.y1
                                };
                                t.x = i.x, t.y = i.y, this.pinchStartLen = Y(t), this.multipointStart.dispatch(e, this.element);
                            }
                            this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                                this.longTap.dispatch(e, this.element), this._preventTap = !0;
                            }).bind(this), 750);
                        }
                    }
                }
            },
            {
                key: "move",
                value: function(e) {
                    if (e.touches) {
                        var t = this.preV, i = e.touches.length, n = e.touches[0].pageX, s = e.touches[0].pageY;
                        if (this.isDoubleTap = !1, i > 1) {
                            var l = e.touches[1].pageX, o = e.touches[1].pageY, r = {
                                x: e.touches[1].pageX - n,
                                y: e.touches[1].pageY - s
                            };
                            null !== t.x && (this.pinchStartLen > 0 && (e.zoom = Y(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = q(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o;
                        } else {
                            if (null !== this.x2) {
                                e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                                var a = Math.abs(this.x1 - this.x2), h = Math.abs(this.y1 - this.y2);
                                (a > 10 || h > 10) && (this._preventTap = !0);
                            } else e.deltaX = 0, e.deltaY = 0;
                            this.pressMove.dispatch(e, this.element);
                        }
                        this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault();
                    }
                }
            },
            {
                key: "end",
                value: function(e) {
                    if (e.changedTouches) {
                        this._cancelLongTap();
                        var t = this;
                        e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                            t.swipe.dispatch(e, t.element);
                        }, 0)) : (this.tapTimeout = setTimeout(function() {
                            t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1);
                        }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                            t.singleTap.dispatch(e, t.element);
                        }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
                    }
                }
            },
            {
                key: "cancelAll",
                value: function() {
                    this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
                }
            },
            {
                key: "cancel",
                value: function(e) {
                    this.cancelAll(), this.touchCancel.dispatch(e, this.element);
                }
            },
            {
                key: "_cancelLongTap",
                value: function() {
                    clearTimeout(this.longTapTimeout);
                }
            },
            {
                key: "_cancelSingleTap",
                value: function() {
                    clearTimeout(this.singleTapTimeout);
                }
            },
            {
                key: "_swipeDirection",
                value: function(e, t, i, n) {
                    return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down";
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    this[e] && this[e].add(t);
                }
            },
            {
                key: "off",
                value: function(e, t) {
                    this[e] && this[e].del(t);
                }
            },
            {
                key: "destroy",
                value: function() {
                    return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
                }
            }
        ]), e;
    }();
    function W(e) {
        var t = function() {
            var e, t = document.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for(e in i)if (void 0 !== t.style[e]) return i[e];
        }(), i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = c(e, "gslide-media") ? e : e.querySelector(".gslide-media"), s = u(n, ".ginner-container"), l = e.querySelector(".gslide-description");
        i > 769 && (n = s), h(n, "greset"), v(n, "translate3d(0, 0, 0)"), a(t, {
            onElement: n,
            once: !0,
            withCallback: function(e, t) {
                d(n, "greset");
            }
        }), n.style.opacity = "", l && (l.style.opacity = "");
    }
    function B(e) {
        if (e.events.hasOwnProperty("touch")) return !1;
        var t, i, n, s = y(), l = s.width, o = s.height, r = !1, a = null, g = null, f = null, p = !1, m = 1, x = 1, b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0, z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new _(X, {
            touchStart: function(t) {
                if (r = !0, (c(t.targetTouches[0].target, "ginner-container") || u(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), u(t.targetTouches[0].target, ".gslide-inline") && !c(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                    if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a = e.activeSlide, g = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), f = null, c(g, "gslide-image") && (f = g.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (g = a.querySelector(".ginner-container")), d(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
                    t.preventDefault();
                }
            },
            touchMove: function(s) {
                if (r && (P = s.targetTouches[0], !b && !S)) {
                    if (n && n.offsetHeight > o) {
                        var a = O.pageX - P.pageX;
                        if (Math.abs(a) <= 13) return !1;
                    }
                    p = !0;
                    var h, d = s.targetTouches[0].clientX, c = s.targetTouches[0].clientY, u = M - d, m = z - c;
                    if (Math.abs(u) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && f && (h = 1 - Math.abs(i) / o, Y.style.opacity = h, e.settings.touchFollowAxis && (E = 0)), I && (h = 1 - Math.abs(t) / l, g.style.opacity = h, e.settings.touchFollowAxis && (A = 0)), !f) return v(g, "translate3d(".concat(E, "%, 0, 0)"));
                    v(g, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"));
                }
            },
            touchEnd: function() {
                if (r) {
                    if (p = !1, S || b) return C = w, void (k = T);
                    var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                    if (!(t > 29 && f)) return t < 29 && i < 25 ? (h(Y, "greset"), Y.style.opacity = 1, W(g)) : void 0;
                    e.close();
                }
            },
            multipointEnd: function() {
                setTimeout(function() {
                    b = !1;
                }, 50);
            },
            multipointStart: function() {
                b = !0, m = x || 1;
            },
            pinch: function(e) {
                if (!f || p) return !1;
                b = !0, f.scaleX = f.scaleY = m * e.zoom;
                var t = m * e.zoom;
                if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void f.setAttribute("style", "");
                t > 4.5 && (t = 4.5), f.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), x = t;
            },
            pressMove: function(e) {
                if (S && !b) {
                    var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                    C && (t += C), k && (i += k), w = t, T = i;
                    var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                    x && (n += " scale3d(".concat(x, ", ").concat(x, ", 1)")), v(f, n);
                }
            },
            swipe: function(t) {
                if (!S) {
                    if (b) b = !1;
                    else {
                        if ("Left" == t.direction) {
                            if (e.index == e.elements.length - 1) return W(g);
                            e.nextSlide();
                        }
                        if ("Right" == t.direction) {
                            if (0 == e.index) return W(g);
                            e.prevSlide();
                        }
                    }
                }
            }
        });
        e.events.touch = q;
    }
    var H = function() {
        function e(i, n) {
            var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            if (t(this, e), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
            this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
                return s.dragStart(e);
            }, !1), this.img.addEventListener("mouseup", function(e) {
                return s.dragEnd(e);
            }, !1), this.img.addEventListener("mousemove", function(e) {
                return s.drag(e);
            }, !1), this.img.addEventListener("click", function(e) {
                return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn();
            }, !1), this.img.setZoomEvents = !0;
        }
        return n(e, [
            {
                key: "zoomIn",
                value: function() {
                    var e = this.widowWidth();
                    if (!(this.zoomedIn || e <= 768)) {
                        var t = this.img;
                        if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                            var i = e / 2 - t.naturalWidth / 2;
                            this.setTranslate(this.img.parentNode, i, 0);
                        }
                        this.slide.classList.add("zoomed"), this.zoomedIn = !0;
                    }
                }
            },
            {
                key: "zoomOut",
                value: function() {
                    this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose();
                }
            },
            {
                key: "dragStart",
                value: function(e) {
                    e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1;
                }
            },
            {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                        t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging");
                    }, 100);
                }
            },
            {
                key: "drag",
                value: function(e) {
                    this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY));
                }
            },
            {
                key: "onMove",
                value: function(e) {
                    if (this.zoomedIn) {
                        var t = e.clientX - this.img.naturalWidth / 2, i = e.clientY - this.img.naturalHeight / 2;
                        this.setTranslate(this.img, t, i);
                    }
                }
            },
            {
                key: "setTranslate",
                value: function(e, t, i) {
                    e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)";
                }
            },
            {
                key: "widowWidth",
                value: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                }
            }
        ]), e;
    }(), V = function() {
        function e() {
            var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e);
            var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r, h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
            this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", function(e) {
                return i.dragStart(e);
            }, !1), this.el.addEventListener("mouseup", function(e) {
                return i.dragEnd(e);
            }, !1), this.el.addEventListener("mousemove", function(e) {
                return i.drag(e);
            }, !1);
        }
        return n(e, [
            {
                key: "dragStart",
                value: function(e) {
                    if (this.slide.classList.contains("zoomed")) this.active = !1;
                    else {
                        "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                        var t = e.target.nodeName.toLowerCase();
                        e.target.classList.contains("nodrag") || u(e.target, ".nodrag") || -1 !== [
                            "input",
                            "select",
                            "textarea",
                            "button",
                            "a"
                        ].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u(e.target, ".ginner-container")));
                    }
                }
            },
            {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                        t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = "";
                    }, 100);
                }
            },
            {
                key: "drag",
                value: function(e) {
                    if (this.active) {
                        e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                        var t = Math.abs(this.currentX), i = Math.abs(this.currentY);
                        if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                            var n = this.shouldChange();
                            if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void ("left" == n && this.instance.nextSlide());
                        }
                        if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                            var s = this.shouldClose();
                            return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void (this.instance.settings.dragAutoSnap && s && this.instance.close());
                        }
                    }
                }
            },
            {
                key: "shouldChange",
                value: function() {
                    var e = !1;
                    if (Math.abs(this.currentX) >= this.toleranceX) {
                        var t = this.currentX > 0 ? "right" : "left";
                        ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t);
                    }
                    return e;
                }
            },
            {
                key: "shouldClose",
                value: function() {
                    var e = !1;
                    return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e;
                }
            },
            {
                key: "setTranslate",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                }
            }
        ]), e;
    }();
    function j(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
        l.addEventListener("load", function() {
            T(n) && n();
        }, !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", I(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild);
    }
    function F(e, t, i, n) {
        var s = this, l = e.querySelector(".ginner-container"), o = "gvideo" + i, r = e.querySelector(".gslide-media"), a = this.getAllPlayers();
        h(l, "gvideo-container"), r.insertBefore(m('<div class="gvideo-wrapper"></div>'), r.firstChild);
        var d = e.querySelector(".gvideo-wrapper");
        S(this.settings.plyr.css, "Plyr");
        var c = t.href, u = null == t ? void 0 : t.videoProvider, g = !1;
        r.style.maxWidth = t.width, S(this.settings.plyr.js, "Plyr", function() {
            if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var l = '<video id="' + o + '" ';
                l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = m(l += "</video>");
            }
            var r = g || m('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
            h(d, "".concat(u, "-video gvideo")), d.appendChild(r), d.setAttribute("data-id", o), d.setAttribute("data-index", i);
            var v = O(s.settings.plyr, "config") ? s.settings.plyr.config : {}, f = new Plyr("#" + o, v);
            f.on("ready", function(e) {
                a[o] = e.detail.plyr, T(n) && n();
            }), b(function() {
                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready;
            }, function() {
                s.resize(e);
            }), f.on("enterfullscreen", R), f.on("exitfullscreen", R);
        });
    }
    function R(e) {
        var t = u(e.target, ".gslide-media");
        "enterfullscreen" === e.type && h(t, "fullscreen"), "exitfullscreen" === e.type && d(t, "fullscreen");
    }
    function G(e, t, i, n) {
        var s, l = this, o = e.querySelector(".gslide-media"), r = !(!O(t, "href") || !t.href) && t.href.split("#").pop().trim(), d = !(!O(t, "content") || !t.content) && t.content;
        if (d && (C(d) && (s = m('<div class="ginlined-content">'.concat(d, "</div>"))), k(d))) {
            "none" == d.style.display && (d.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(d), s = c;
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, h(g, "ginlined-content"), s = g;
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = a("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function(e) {
                e.preventDefault(), l.close();
            }
        }), T(n) && n();
    }
    function Z(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = function(e) {
            var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
            return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
                l.onload = null, h(l, "node-ready"), T(n) && n();
            }, s && s.appendChild(l), l;
        }({
            url: t.href,
            callback: n
        });
        s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l);
    }
    var U = function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e), this.defaults = {
                href: "",
                sizes: "",
                srcset: "",
                title: "",
                type: "",
                videoProvider: "",
                description: "",
                alt: "",
                descPosition: "bottom",
                effect: "",
                width: "",
                height: "",
                content: !1,
                zoomable: !0,
                draggable: !0
            }, L(i) && (this.defaults = l(this.defaults, i));
        }
        return n(e, [
            {
                key: "sourceType",
                value: function(e) {
                    var t = e;
                    if (null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)) return "image";
                    if (e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) return "video";
                    if (e.match(/vimeo\.com\/([0-9]*)/)) return "video";
                    if (null !== e.match(/\.(mp4|ogg|webm|mov)/)) return "video";
                    if (null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)) return "audio";
                    if (e.indexOf("#") > -1 && "" !== t.split("#").pop().trim()) return "inline";
                    return e.indexOf("goajax=true") > -1 ? "ajax" : "external";
                }
            },
            {
                key: "parseConfig",
                value: function(e, t) {
                    var i = this, n = l({
                        descPosition: t.descPosition
                    }, this.defaults);
                    if (L(e) && !k(e)) {
                        O(e, "type") || (O(e, "content") && e.content ? e.type = "inline" : O(e, "href") && (e.type = this.sourceType(e.href)));
                        var s = l(n, e);
                        return this.setSize(s, t), s;
                    }
                    var r = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                    if ("a" === h && (r = e.href), "img" === h && (r = e.src, n.alt = e.alt), n.href = r, o(n, function(s, l) {
                        O(t, l) && "width" !== l && (n[l] = t[l]);
                        var o = e.dataset[l];
                        I(o) || (n[l] = i.sanitizeValue(o));
                    }), n.content && (n.type = "inline"), !n.type && r && (n.type = this.sourceType(r)), I(a)) {
                        if (!n.title && "a" == h) {
                            var d = e.title;
                            I(d) || "" === d || (n.title = d);
                        }
                        if (!n.title && "img" == h) {
                            var c = e.alt;
                            I(c) || "" === c || (n.title = c);
                        }
                    } else {
                        var u = [];
                        o(n, function(e, t) {
                            u.push(";\\s?" + t);
                        }), u = u.join("\\s?:|"), "" !== a.trim() && o(n, function(e, t) {
                            var s = a, l = new RegExp("s?" + t + "s?:s?(.*?)(" + u + "s?:|$)"), o = s.match(l);
                            if (o && o.length && o[1]) {
                                var r = o[1].trim().replace(/;\s*$/, "");
                                n[t] = i.sanitizeValue(r);
                            }
                        });
                    }
                    if (n.description && "." === n.description.substring(0, 1)) {
                        var g;
                        try {
                            g = document.querySelector(n.description).innerHTML;
                        } catch (e) {
                            if (!(e instanceof DOMException)) throw e;
                        }
                        g && (n.description = g);
                    }
                    if (!n.description) {
                        var v = e.querySelector(".glightbox-desc");
                        v && (n.description = v.innerHTML);
                    }
                    return this.setSize(n, t, e), this.slideConfig = n, n;
                }
            },
            {
                key: "setSize",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width), s = this.checkSize(t.height);
                    return e.width = O(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = O(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e;
                }
            },
            {
                key: "checkSize",
                value: function(e) {
                    return M(e) ? "".concat(e, "px") : e;
                }
            },
            {
                key: "sanitizeValue",
                value: function(e) {
                    return "true" !== e && "false" !== e ? e : "true" === e;
                }
            }
        ]), e;
    }(), $ = function() {
        function e(i, n, s) {
            t(this, e), this.element = i, this.instance = n, this.index = s;
        }
        return n(e, [
            {
                key: "setContent",
                value: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (c(t, "loaded")) return !1;
                    var n = this.instance.settings, s = this.slideConfig, l = w();
                    T(n.beforeSlideLoad) && n.beforeSlideLoad({
                        index: this.index,
                        slide: t,
                        player: !1
                    });
                    var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"), d = t.querySelector(".gslide-title"), u = t.querySelector(".gslide-desc"), g = t.querySelector(".gdesc-inner"), v = i, f = "gSlideTitle_" + this.index, p = "gSlideDesc_" + this.index;
                    if (T(n.afterSlideLoad) && (v = function() {
                        T(i) && i(), n.afterSlideLoad({
                            index: e.index,
                            slide: t,
                            player: e.instance.getSlidePlayerInstance(e.index)
                        });
                    }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (d && "" !== s.title ? (d.id = f, d.innerHTML = s.title) : d.parentNode.removeChild(d), u && "" !== s.description ? (u.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), u.innerHTML = s.smallDescription, this.descriptionEvents(u, s)) : u.innerHTML = s.description) : u.parentNode.removeChild(u), h(a.parentNode, "desc-".concat(r)), h(g.parentNode, "description-".concat(r))), h(a, "gslide-".concat(o)), h(t, "loaded"), "video" !== o) {
                        if ("external" !== o) return "inline" === o ? (G.apply(this.instance, [
                            t,
                            s,
                            this.index,
                            v
                        ]), void (s.draggable && new V({
                            dragEl: t.querySelector(".gslide-inline"),
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: this.instance
                        }))) : void ("image" !== o ? T(v) && v() : j(t, s, this.index, function() {
                            var i = t.querySelector("img");
                            s.draggable && new V({
                                dragEl: i,
                                toleranceX: n.dragToleranceX,
                                toleranceY: n.dragToleranceY,
                                slide: t,
                                instance: e.instance
                            }), s.zoomable && i.naturalWidth > i.offsetWidth && (h(i, "zoomable"), new H(i, t, function() {
                                e.instance.resize();
                            })), T(v) && v();
                        }));
                        Z.apply(this, [
                            t,
                            s,
                            this.index,
                            v
                        ]);
                    } else F.apply(this.instance, [
                        t,
                        s,
                        this.index,
                        v
                    ]);
                }
            },
            {
                key: "slideShortDesc",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = document.createElement("div");
                    n.innerHTML = e;
                    var s = n.innerText, l = i;
                    if ((e = s.trim()).length <= t) return e;
                    var o = e.substr(0, t - 1);
                    return l ? (n = null, o + '... <a href="#" class="desc-more">' + i + "</a>") : o;
                }
            },
            {
                key: "descriptionEvents",
                value: function(e, t) {
                    var i = this, n = e.querySelector(".desc-more");
                    if (!n) return !1;
                    a("click", {
                        onElement: n,
                        withCallback: function(e, n) {
                            e.preventDefault();
                            var s = document.body, l = u(n, ".gslide-desc");
                            if (!l) return !1;
                            l.innerHTML = t.description, h(s, "gdesc-open");
                            var o = a("click", {
                                onElement: [
                                    s,
                                    u(l, ".gslide-description")
                                ],
                                withCallback: function(e, n) {
                                    "a" !== e.target.nodeName.toLowerCase() && (d(s, "gdesc-open"), h(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout(function() {
                                        d(s, "gdesc-closed");
                                    }, 400), o.destroy());
                                }
                            });
                        }
                    });
                }
            },
            {
                key: "create",
                value: function() {
                    return m(this.instance.settings.slideHTML);
                }
            },
            {
                key: "getConfig",
                value: function() {
                    k(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var e = new U(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
                }
            }
        ]), e;
    }(), J = w(), K = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, Q = document.getElementsByTagName("html")[0], ee = {
        selector: ".glightbox",
        elements: null,
        skin: "clean",
        theme: "clean",
        closeButton: !0,
        startAt: null,
        autoplayVideos: !0,
        autofocusVideos: !0,
        descPosition: "bottom",
        width: "900px",
        height: "506px",
        videosWidth: "960px",
        beforeSlideChange: null,
        afterSlideChange: null,
        beforeSlideLoad: null,
        afterSlideLoad: null,
        slideInserted: null,
        slideRemoved: null,
        slideExtraAttributes: null,
        onOpen: null,
        onClose: null,
        loop: !1,
        zoomable: !0,
        draggable: !0,
        dragAutoSnap: !1,
        dragToleranceX: 40,
        dragToleranceY: 65,
        preload: !0,
        oneSlidePerOpen: !1,
        touchNavigation: !0,
        touchFollowAxis: !0,
        keyboardNavigation: !0,
        closeOnOutsideClick: !0,
        plugins: !1,
        plyr: {
            css: "https://cdn.plyr.io/3.6.12/plyr.css",
            js: "https://cdn.plyr.io/3.6.12/plyr.js",
            config: {
                ratio: "16:9",
                fullscreen: {
                    enabled: !0,
                    iosNative: !0
                },
                youtube: {
                    noCookie: !0,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3
                },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    transparent: !1
                }
            }
        },
        openEffect: "zoom",
        closeEffect: "zoom",
        slideEffect: "slide",
        moreText: "See more",
        moreLength: 60,
        cssEfects: {
            fade: {
                in: "fadeIn",
                out: "fadeOut"
            },
            zoom: {
                in: "zoomIn",
                out: "zoomOut"
            },
            slide: {
                in: "slideInRight",
                out: "slideOutLeft"
            },
            slideBack: {
                in: "slideInLeft",
                out: "slideOutRight"
            },
            none: {
                in: "none",
                out: "none"
            }
        },
        svg: {
            close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
            next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
            prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
        },
        slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
        lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
    }, te = function() {
        function e() {
            var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            t(this, e), this.customOptions = i, this.settings = l(ee, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1;
        }
        return n(e, [
            {
                key: "init",
                value: function() {
                    var e = this, t = this.getSelector();
                    t && (this.baseEvents = a("click", {
                        onElement: t,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.open(i);
                        }
                    })), this.elements = this.getElements();
                }
            },
            {
                key: "open",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (0 === this.elements.length) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var i = M(t) ? t : this.settings.startAt;
                    if (k(e)) {
                        var n = e.getAttribute("data-gallery");
                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), I(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
                    }
                    M(i) || (i = 0), this.build(), g(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                    var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                    if (l > 0) {
                        var o = document.createElement("style");
                        o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), h(s, "gscrollbar-fixer");
                    }
                    h(s, "glightbox-open"), h(Q, "glightbox-open"), J && (h(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (h(this.prevButton, "glightbox-button-hidden"), h(this.nextButton, "glightbox-button-hidden")) : (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), T(this.settings.onOpen) && this.settings.onOpen(), K && this.settings.touchNavigation && B(this), this.settings.keyboardNavigation && X(this);
                }
            },
            {
                key: "openAt",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.open(null, e);
                }
            },
            {
                key: "showSlide",
                value: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    f(this.loader), this.index = parseInt(t);
                    var n = this.slidesContainer.querySelector(".current");
                    n && d(n, "current"), this.slideAnimateOut();
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (c(s, "loaded")) this.slideAnimateIn(s, i), p(this.loader);
                    else {
                        f(this.loader);
                        var l = this.elements[t], o = {
                            index: this.index,
                            slide: s,
                            slideNode: s,
                            slideConfig: l.slideConfig,
                            slideIndex: this.index,
                            trigger: l.node,
                            player: null
                        };
                        this.trigger("slide_before_load", o), l.instance.setContent(s, function() {
                            p(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o);
                        });
                    }
                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && c(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s;
                }
            },
            {
                key: "preloadSlide",
                value: function(e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    if (I(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (c(i, "loaded")) return !1;
                    var n = this.elements[e], s = n.type, l = {
                        index: e,
                        slide: i,
                        slideNode: i,
                        slideConfig: n.slideConfig,
                        slideIndex: e,
                        trigger: n.node,
                        player: null
                    };
                    this.trigger("slide_before_load", l), "video" === s || "external" === s ? setTimeout(function() {
                        n.instance.setContent(i, function() {
                            t.trigger("slide_after_load", l);
                        });
                    }, 200) : n.instance.setContent(i, function() {
                        t.trigger("slide_after_load", l);
                    });
                }
            },
            {
                key: "prevSlide",
                value: function() {
                    this.goToSlide(this.index - 1);
                }
            },
            {
                key: "nextSlide",
                value: function() {
                    this.goToSlide(this.index + 1);
                }
            },
            {
                key: "goToSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e);
                }
            },
            {
                key: "insertSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new $(e, this, t), n = i.getConfig(), s = l({}, n), o = i.create(), r = this.elements.length - 1;
                    s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                    var a = null, h = null;
                    if (this.slidesContainer) {
                        if (t > r) this.slidesContainer.appendChild(o);
                        else {
                            var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                            this.slidesContainer.insertBefore(o, d);
                        }
                        (this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), a = this.slidesContainer.querySelectorAll(".gslide")[t], h = this.getSlidePlayerInstance(t), s.slideNode = a;
                    }
                    this.trigger("slide_inserted", {
                        index: t,
                        slide: a,
                        slideNode: a,
                        slideConfig: n,
                        slideIndex: t,
                        trigger: null,
                        player: h
                    }), T(this.settings.slideInserted) && this.settings.slideInserted({
                        index: t,
                        slide: a,
                        player: h
                    });
                }
            },
            {
                key: "removeSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), T(this.settings.slideRemoved) && this.settings.slideRemoved(e);
                }
            },
            {
                key: "slideAnimateIn",
                value: function(e, t) {
                    var i = this, n = e.querySelector(".gslide-media"), s = e.querySelector(".gslide-description"), l = {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlide,
                        slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, o = {
                        index: this.index,
                        slide: this.activeSlide,
                        slideNode: this.activeSlide,
                        slideConfig: this.elements[this.index].slideConfig,
                        slideIndex: this.index,
                        trigger: this.elements[this.index].node,
                        player: this.getSlidePlayerInstance(this.index)
                    };
                    if (n.offsetWidth > 0 && s && (p(s), s.style.display = ""), d(e, this.effectsClasses), t) g(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                            l,
                            o
                        ]);
                    });
                    else {
                        var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r].in : r;
                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), g(e, a, function() {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: l,
                                current: o
                            }), T(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                                l,
                                o
                            ]);
                        });
                    }
                    setTimeout(function() {
                        i.resize(e);
                    }, 100), h(e, "current");
                }
            },
            {
                key: "slideAnimateOut",
                value: function() {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    d(e, this.effectsClasses), h(e, "prev");
                    var t = this.settings.slideEffect, i = "none" !== t ? this.settings.cssEfects[t].out : t;
                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: I(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), T(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [
                        {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        {
                            index: this.index,
                            slide: this.activeSlide,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    ]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), g(e, i, function() {
                        var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"), n = e.querySelector(".gslide-description");
                        t.style.transform = "", i.style.transform = "", d(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), d(e, "prev");
                    });
                }
            },
            {
                key: "getAllPlayers",
                value: function() {
                    return this.videoPlayers;
                }
            },
            {
                key: "getSlidePlayerInstance",
                value: function(e) {
                    var t = "gvideo" + e, i = this.getAllPlayers();
                    return !(!O(i, t) || !i[t]) && i[t];
                }
            },
            {
                key: "stopSlideVideo",
                value: function(e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                }
            },
            {
                key: "slidePlayerPause",
                value: function(e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause();
                }
            },
            {
                key: "playSlideVideo",
                value: function(e) {
                    if (k(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"));
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play();
                }
            },
            {
                key: "slidePlayerPlay",
                value: function(e) {
                    var t;
                    if (!J || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                        if (k(e)) {
                            var i = e.querySelector(".gvideo-wrapper");
                            i && (e = i.getAttribute("data-index"));
                        }
                        var n = this.getSlidePlayerInstance(e);
                        n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus());
                    }
                }
            },
            {
                key: "setElements",
                value: function(e) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    e && e.length && o(e, function(e, n) {
                        var s = new $(e, t, n), o = s.getConfig(), r = l({}, o);
                        r.slideConfig = o, r.instance = s, r.index = n, i.push(r);
                    }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (o(this.elements, function() {
                        var e = m(t.settings.slideHTML);
                        t.slidesContainer.appendChild(e);
                    }), this.showSlide(0, !0)));
                }
            },
            {
                key: "getElementIndex",
                value: function(e) {
                    var t = !1;
                    return o(this.elements, function(i, n) {
                        if (O(i, "node") && i.node == e) return t = n, !0;
                    }), t;
                }
            },
            {
                key: "getElements",
                value: function() {
                    var e = this, t = [];
                    this.elements = this.elements ? this.elements : [], !I(this.settings.elements) && E(this.settings.elements) && this.settings.elements.length && o(this.settings.elements, function(i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l({}, o);
                        r.node = !1, r.index = n, r.instance = s, r.slideConfig = o, t.push(r);
                    });
                    var i = !1;
                    return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (o(i, function(i, n) {
                        var s = new $(i, e, n), o = s.getConfig(), r = l({}, o);
                        r.node = i, r.index = n, r.instance = s, r.slideConfig = o, r.gallery = i.getAttribute("data-gallery"), t.push(r);
                    }), t) : t;
                }
            },
            {
                key: "getGalleryElements",
                value: function(e, t) {
                    return e.filter(function(e) {
                        return e.gallery == t;
                    });
                }
            },
            {
                key: "getSelector",
                value: function() {
                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector);
                }
            },
            {
                key: "getActiveSlide",
                value: function() {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index];
                }
            },
            {
                key: "getActiveSlideIndex",
                value: function() {
                    return this.index;
                }
            },
            {
                key: "getAnimationClasses",
                value: function() {
                    var e = [];
                    for(var t in this.settings.cssEfects)if (this.settings.cssEfects.hasOwnProperty(t)) {
                        var i = this.settings.cssEfects[t];
                        e.push("g".concat(i.in)), e.push("g".concat(i.out));
                    }
                    return e.join(" ");
                }
            },
            {
                key: "build",
                value: function() {
                    var e = this;
                    if (this.built) return !1;
                    var t = document.body.childNodes, i = [];
                    o(t, function(e) {
                        e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
                    });
                    var n = O(this.settings.svg, "next") ? this.settings.svg.next : "", s = O(this.settings.svg, "prev") ? this.settings.svg.prev : "", l = O(this.settings.svg, "close") ? this.settings.svg.close : "", r = this.settings.lightboxHTML;
                    r = m(r = (r = (r = r.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(r);
                    var d = document.getElementById("glightbox-body");
                    this.modal = d;
                    var g = d.querySelector(".gclose");
                    this.prevButton = d.querySelector(".gprev"), this.nextButton = d.querySelector(".gnext"), this.overlay = d.querySelector(".goverlay"), this.loader = d.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, h(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && g && (this.events.close = a("click", {
                        onElement: g,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.close();
                        }
                    })), g && !this.settings.closeButton && g.parentNode.removeChild(g), this.nextButton && (this.events.next = a("click", {
                        onElement: this.nextButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.nextSlide();
                        }
                    })), this.prevButton && (this.events.prev = a("click", {
                        onElement: this.prevButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.prevSlide();
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = a("click", {
                        onElement: d,
                        withCallback: function(t, i) {
                            e.preventOutsideClick || c(document.body, "glightbox-mobile") || u(t.target, ".ginner-container") || u(t.target, ".gbtn") || c(t.target, "gnext") || c(t.target, "gprev") || e.close();
                        }
                    })), o(this.elements, function(t, i) {
                        e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i];
                    }), K && h(document.body, "glightbox-touch"), this.events.resize = a("resize", {
                        onElement: window,
                        withCallback: function() {
                            e.resize();
                        }
                    }), this.built = !0;
                }
            },
            {
                key: "resize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((e = e || this.activeSlide) && !c(e, "zoomed")) {
                        var t = y(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"), s = this.slideDescription, l = t.width, o = t.height;
                        if (l <= 768 ? h(document.body, "glightbox-mobile") : d(document.body, "glightbox-mobile"), i || n) {
                            var r = !1;
                            if (s && (c(s, "description-bottom") || c(s, "description-top")) && !c(s, "gabsolute") && (r = !0), n) {
                                if (l <= 768) n.querySelector("img");
                                else if (r) {
                                    var a = s.offsetHeight, u = n.querySelector("img");
                                    u.setAttribute("style", "max-height: calc(100vh - ".concat(a, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"));
                                }
                            }
                            if (i) {
                                var g = O(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                if (!g) {
                                    var v = i.clientWidth, f = i.clientHeight, p = v / f;
                                    g = "".concat(v / p, ":").concat(f / p);
                                }
                                var m = g.split(":"), x = this.settings.videosWidth, b = this.settings.videosWidth, S = (b = M(x) || -1 !== x.indexOf("px") ? parseInt(x) : -1 !== x.indexOf("vw") ? l * parseInt(x) / 100 : -1 !== x.indexOf("vh") ? o * parseInt(x) / 100 : -1 !== x.indexOf("%") ? l * parseInt(x) / 100 : parseInt(i.clientWidth)) / (parseInt(m[0]) / parseInt(m[1]));
                                if (S = Math.floor(S), r && (o -= s.offsetHeight), b > l || S > o || o < S && l > b) {
                                    var w = i.offsetWidth, T = i.offsetHeight, C = o / T, k = {
                                        width: w * C,
                                        height: T * C
                                    };
                                    i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), r && s.setAttribute("style", "max-width: ".concat(k.width, "px;"));
                                } else i.parentNode.style.maxWidth = "".concat(x), r && s.setAttribute("style", "max-width: ".concat(x, ";"));
                            }
                        }
                    }
                }
            },
            {
                key: "reload",
                value: function() {
                    this.init();
                }
            },
            {
                key: "updateNavigationClasses",
                value: function() {
                    var e = this.loop();
                    d(this.nextButton, "disabled"), d(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (h(this.prevButton, "disabled"), h(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || h(this.nextButton, "disabled") : h(this.prevButton, "disabled");
                }
            },
            {
                key: "loop",
                value: function() {
                    var e = O(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return e = O(this.settings, "loop") ? this.settings.loop : e, e;
                }
            },
            {
                key: "close",
                value: function() {
                    var e = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for(var t in this.events)this.events.hasOwnProperty(t) && this.events[t].destroy();
                            this.events = null;
                        }
                        return !1;
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && o(this.bodyHiddenChildElms, function(e) {
                        e.removeAttribute("aria-hidden");
                    }), h(this.modal, "glightbox-closing"), g(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                        if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                            for(var t in e.events)e.events.hasOwnProperty(t) && e.events[t].destroy();
                            e.events = null;
                        }
                        var i = document.body;
                        d(Q, "glightbox-open"), d(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), T(e.settings.onClose) && e.settings.onClose();
                        var n = document.querySelector(".gcss-styles");
                        n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null;
                    });
                }
            },
            {
                key: "destroy",
                value: function() {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
                }
            },
            {
                key: "on",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e || !T(t)) throw new TypeError("Event name and callback must be defined");
                    this.apiEvents.push({
                        evt: e,
                        once: i,
                        callback: t
                    });
                }
            },
            {
                key: "once",
                value: function(e, t) {
                    this.on(e, t, !0);
                }
            },
            {
                key: "trigger",
                value: function(e) {
                    var t = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [];
                    o(this.apiEvents, function(t, s) {
                        var l = t.evt, o = t.once, r = t.callback;
                        l == e && (r(i), o && n.push(s));
                    }), n.length && o(n, function(e) {
                        return t.apiEvents.splice(e, 1);
                    });
                }
            },
            {
                key: "clearAllEvents",
                value: function() {
                    this.apiEvents.splice(0, this.apiEvents.length);
                }
            },
            {
                key: "version",
                value: function() {
                    return "3.1.0";
                }
            }
        ]), e;
    }();
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new te(e);
        return t.init(), t;
    };
});

},{}]},["6cUJw","fWapj"], "fWapj", "parcelRequire2d09")

//# sourceMappingURL=app.js.map
