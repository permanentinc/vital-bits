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
        globalObject
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
})({"cklYw":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "dfd5faebf5bd83b5";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8411f17170a9f2d3";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
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
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"fWapj":[function(require,module,exports,__globalThis) {
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
var _templates = require("./templates");
var _flickity = require("flickity");
var _flickityDefault = parcelHelpers.interopDefault(_flickity);
var _flickityAsNavFor = require("flickity-as-nav-for");
var _inView = require("in-view");
var _inViewDefault = parcelHelpers.interopDefault(_inView);
var _animeEsJs = require("animejs/lib/anime.es.js");
var _animeEsJsDefault = parcelHelpers.interopDefault(_animeEsJs);
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
var _glightbox = require("glightbox");
var _glightboxDefault = parcelHelpers.interopDefault(_glightbox);
var _splitting = require("splitting");
var _splittingDefault = parcelHelpers.interopDefault(_splitting);
var _core = require("typewriter-effect/dist/core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _splide = require("@splidejs/splide");
var _splideDefault = parcelHelpers.interopDefault(_splide);
console.log('Vital Bits v1.0.0');
document.addEventListener('DOMContentLoaded', function() {
    // find an em tag inside an A tag a inside grid-with-text__copy and make the a tag have a button class
    const gridWithText = (0, _lib.$$)('.grid-with-text__copy a em');
    gridWithText.forEach((element)=>{
        let parent = element.parentElement;
        let grandParent = parent.parentElement;
        let greatGrandParent = grandParent.parentElement;
        if (greatGrandParent.classList.contains('grid-with-text__copy')) {
            parent.classList.add('button');
            parent.setAttribute('href', parent.getAttribute('href'));
            parent.setAttribute('target', '_blank');
        }
    });
    (0, _inViewDefault.default)('.js-gradient').on('enter', (el)=>{
        el.classList.add('inview');
        (0, _lib.$)('body').setAttribute('data-theme', el.dataset.collection.toLowerCase().replace(/ /g, '-'));
    });
    let $scrollTriggers = (0, _lib.$$)('.js-collection-slider-scroll');
    $scrollTriggers.forEach(($item)=>{
        $item.addEventListener('click', (e)=>{
            e.preventDefault();
            let element = e.target.closest('.js-collection-slider-scroll') || e.target;
            let handle = element.dataset.handle;
            // scroll down to .collection-grid__list__title[data-handle="${handle}"]
            const $item = document.querySelector(`.collection-grid__list__title[data-handle="${handle}"]`);
            if ($item) {
                const yOffset = -100; // Adjust by -200px
                const y = $item.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }
        });
    });
    document.body.addEventListener('click', (e)=>{
        if (e.target && e.target.classList.contains('js-show-quickview')) {
            e.preventDefault();
            console.log('show quickview');
            // Show the quickview flyout
            document.body.classList.add('quickview-visible');
            // Get the product handle
            let product_handle = e.target.dataset.id;
            let product_collection = e.target.dataset.collection;
            if (product_collection) (0, _lib.$)('.quickview').setAttribute('data-theme', product_collection.toLowerCase().replace(/ /g, '-'));
            let $quickviewContent = (0, _lib.$)('.js-quickview-content');
            fetch(`/products/${product_handle}.json`).then((response)=>response.json()).then((data)=>{
                let product = data.product;
                let html = /*html*/ `
                            <div class="product-gallery">
                                <div class="product-slider [ js-quickview-imagery-slider ]">
                                  ${product.images.map((media)=>{
                    return /*html*/ `
                                    <div class="product-slider-item">
                                      <img
                                        class="[ js-product-slider-item-image ]"
                                        src="${media.src}"
                                        alt="${media.alt}"
                                        data-lightbox-image="${media.src}"
                                        width="1080"
                                        height="1080"
                                       >
                                    </div>`;
                }).join('')}
                                </div>
                            </div>
                                
                            <div class="product-details">
                                ${product_collection ? `<h6 class="product-details__category no-margin">
                                        <b>${product_collection}</b>
                                    </h6>` : null}
                                <h4>
                                  <b>${product.title}</b>
                                </h4>
                            </div>
                                
                            <div class="product-details-price">
                              <p class="h4">
                                <b class="[ js-variation-price ]">
                                    $${product.variants[0].price}
                                </b>
                              </p>
                            </div>

                            <div class="product-details-form">
                                <form method="post" action="/cart/add" id="product_form_${product.id}" accept-charset="UTF-8" class="shopify-product-form" enctype="multipart/form-data" novalidate="novalidate" data-product-form="">
                                <input type="hidden" name="form_type" value="product" />
                                <input type="hidden" name="utf8" value="\u{2713}" />

                                  <div class="product-actions">
                                    <div class="quantity">
                                      <div class="quantity-remove" onclick="changeQuantity(event,-1)">-</div>
                                      <div class="quantity-input">
                                        <input type="text" value="1">
                                      </div>
                                      <div class="quantity-add" onclick="changeQuantity(event,1)">+</div>
                                    </div>
                                    <a href="#" class="button [ js-add-to-cart ]">Add to Cart <span class="loader"></span></a>
                                  </div>

                                  
                                  <select ${product.variants.length > 1 ? `  class="[ js-variant ][ js-choices ]"` : ` style="display:none;" class="[ js-variant ]"`} name="id" id="ProductSelect-template--23800677400894__main">
                                    ${product.variants.map((variant)=>`<option value="${variant.id}">${variant.title}</option>`).join('')}
                                  </select>

                                  <input type="hidden" name="product-id" value="${product.id}" /><input type="hidden" name="section-id" value="template--23800677400894__main" />
                                </form>
                            </div>

                            <div class="product-details-description">
                                ${product.body_html.match(/<p>(.*?)<\/p>/)[0]}
                            </div>                           
                            `;
                $quickviewContent.innerHTML = html;
                (0, _lib.$)('.js-quickview-link').setAttribute('href', `/products/${product_handle}`);
                let quickview_slider = new (0, _flickityDefault.default)('.js-quickview-imagery-slider', {
                    wrapAround: true,
                    pageDots: false,
                    prevNextButtons: false
                });
                // $('.js-cursor-previous').addEventListener('click', (e) => {
                //     e.preventDefault();
                //     quickview_slider.previous();
                // });
                // $('.js-cursor-next').addEventListener('click', (e) => {
                //     e.preventDefault();
                //     quickview_slider.next();
                // });
                Afterpay.createPlacements({
                    targetSelector: '.product-details-price',
                    attributes: {
                        locale: Afterpay.locale.EN_NZ,
                        currency: Afterpay.currency.NZD,
                        amount: product.variants[0].price,
                        size: Afterpay.size.XS,
                        logoType: Afterpay.logoType.BADGE,
                        badgeTheme: Afterpay.theme.badge.BLACK_ON_WHITE,
                        modalLinkStyle: Afterpay.modalLinkStyle.CIRCLED_QUESTION_ICON
                    }
                });
                // Declare our choices options
                const options = {
                    searchEnabled: false,
                    itemSelectText: '',
                    shouldSort: false,
                    placeholder: true,
                    allowHTML: true
                };
                if ((0, _lib.$)('.js-choices')) {
                    new (0, _choicesJsDefault.default)((0, _lib.$)('.js-choices'), options);
                    (0, _lib.$)('.js-variant').addEventListener('change', (event)=>{
                        let variant = event.detail.value;
                        let variantData = window.inventories[variant];
                        (0, _lib.$)('.js-variation-price').innerHTML = variantData.price;
                    });
                }
                let index = 0;
                (0, _lib.$$)('.product-details-description h4').forEach((element)=>{
                    let uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    //wrap html in span
                    let html = element.outerHTML;
                    // strip all html tags
                    html = html.replace(/(<([^>]+)>)/gi, "");
                    // get all the html until the next h4
                    let content = '';
                    let next = element.nextElementSibling;
                    while(next && next.tagName !== 'H4'){
                        content += next.outerHTML;
                        nextNext = next.nextElementSibling;
                        next.outerHTML = '';
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
                    (0, _lib.$$)('.js-accordion-element-dynamic').forEach((element)=>new (0, _accordion.Accordion)(element));
                }, 400);
                index++;
            });
        }
    });
    (0, _splittingDefault.default)();
    //We care for your bits. Your private bits. Your life bits.
    var typewriter1 = new (0, _coreDefault.default)((0, _lib.$)('.js-typed-1'), {
        delay: 100,
        cursor: ''
    });
    typewriter1.pauseFor(50).typeString('We care for your bits.').start();
    var typewriter2 = new (0, _coreDefault.default)((0, _lib.$)('.js-typed-2'), {
        delay: 100,
        cursor: ''
    });
    typewriter2.pauseFor(3000).typeString('Your private bits.').start();
    var typewriter3 = new (0, _coreDefault.default)((0, _lib.$)('.js-typed-3'), {
        delay: 100,
        cursor: ''
    });
    typewriter3.pauseFor(5500).typeString('Your life bits.').start();
    setTimeout(()=>{
        typewriter1.stop().deleteAll(1);
        typewriter2.stop().deleteAll(1);
        typewriter3.stop().deleteAll(1);
        typewriter1.pauseFor(50).typeString('We care for your bits.').start();
        typewriter2.pauseFor(3000).typeString('Your private bits.').start();
        typewriter3.pauseFor(5500).typeString('Your life bits.').start();
    }, 8522);
// typewriter
//     .pauseFor(1500)
//     .typeString('We care for your bits.')
//     .pauseFor(1000)
//     .deleteChars(5)
//     .typeString('private bits.')
//     .pauseFor(1000)
//     .deleteChars(13)
//     .typeString('life bits.')
//     .start();
// typewriter
//     .pauseFor(1500)
//     .typeString('We care for your bits.')
//     .pauseFor(1000)
//     .typeString('Your private bits.')
//     .pauseFor(1000)
//     .typeString('Your life bits.')
//     .start();
}, false);
if ((0, _lib.$)('.js-accordion-element')) (0, _lib.$$)('.js-accordion-element').forEach((element)=>new (0, _accordion.Accordion)(element));
if ((0, _lib.$)('.product-details')) {
    // Declare our choices options
    const options = {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        placeholder: true,
        allowHTML: true
    };
    if ((0, _lib.$)('.js-choices')) {
        new (0, _choicesJsDefault.default)((0, _lib.$)('.js-choices'), options);
        (0, _lib.$)('.js-variant').addEventListener('change', (event)=>{
            let variant = event.detail.value;
            let variantData = window.inventories[variant];
            (0, _lib.$)('.js-variation-price').innerHTML = variantData.price;
        });
    }
    (0, _lib.$$)('.product-details h4').forEach((element, index)=>{
        let uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        //wrap html in span
        let html = element.outerHTML;
        // strip all html tags
        html = html.replace(/(<([^>]+)>)/gi, "");
        // get all the html until the next h4
        let content = '';
        let next = element.nextElementSibling;
        while(next && next.tagName !== 'H4'){
            content += next.outerHTML;
            nextNext = next.nextElementSibling;
            next.outerHTML = '';
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
        (0, _lib.$$)('.js-accordion-element-dynamic').forEach((element, index)=>new (0, _accordion.Accordion)(element, index === 0 ? true : false));
    }, 400);
}
/*------------------------------------------------------------------
Sticky header  
------------------------------------------------------------------*/ let previousScrollPosition = 0;
let scrollDelta = 5;
let header = (0, _lib.$)('.header');
let nav = (0, _lib.$)('.header-nav');
let headerHeight = header ? header.clientHeight / 3 : 0;
const stickyHeader = ()=>{
    let st = window.scrollY;
    if (Math.abs(previousScrollPosition - st) <= scrollDelta) return;
    if (st <= 10) {
        header.classList.remove('nav-down');
        header.classList.remove('nav-up');
    // nav.classList.remove('coloured');
    } else if (st > previousScrollPosition && st > headerHeight) {
        header.classList.remove('nav-down');
        header.classList.add('nav-up');
    // nav.classList.add('coloured');
    } else if (st + window.innerHeight < document.body.clientHeight) {
        header.classList.add('nav-down');
        header.classList.remove('nav-up');
    }
    previousScrollPosition = st;
};
window.addEventListener('scroll', stickyHeader);
let wave_text = document.querySelector('.js-wave-text');
if (wave_text) {
    const words = wave_text.textContent.trim().split(/\s+/);
    wave_text.innerHTML = words.map((word)=>{
        const letters = word.split('').map((letter)=>`<span class="letter">${letter}</span>`).join('');
        return `<span class="word">${letters}</span>`;
    }).join('<span class="space"> </span>');
    let wave = (0, _animeEsJsDefault.default).timeline({
        autoplay: false
    }).add({
        targets: '.js-wave-text .letter',
        translateY: [
            0,
            -2,
            0
        ],
        easing: 'easeOutExpo',
        duration: 500,
        delay: (el, i)=>10 * i
    });
    setInterval(()=>wave.play(), 20000);
}
(0, _animeEsJsDefault.default)({
    targets: '.js-wave path',
    d: [
        'M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,261.3C672,277,768,267,864,250.7C960,235,1056,213,1152,213.3C1248,213,1344,235,1392,245.3L1440,256L1440,320'
    ],
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    duration: 10000
});
/*------------------------------------------------------------------
Side cart interactions
------------------------------------------------------------------*/ const toggleSidecart = ()=>document.body.classList.toggle('sidecart-visible');
window.toggleMobileNavigation = ()=>{
    document.body.classList.toggle('mobile-navigation-visible');
};
/**
 * Define the square animation
 */ // const marquee = anime({
//     targets: '.collections__marquee__animation,.related-products__marquee__animation,.collection-grid__marquee__animation',
//     translateX: '-10%',
//     easing: 'linear',
//     autoplay: false
// });
/**
 * Define the square animation
 */ const blog_image = (0, _animeEsJsDefault.default)({
    targets: '.banner-blog-image',
    rotateX: '10',
    rotateY: '-10',
    scale: 1.1,
    easing: 'linear',
    autoplay: false
});
/**
 * Define the square animation
 */ const blog_image_shadow = (0, _animeEsJsDefault.default)({
    targets: '.banner-blog-image__shadow',
    opacity: 1,
    easing: 'linear',
    autoplay: false
});
/**
 * Calculate the scroll percentage position
 */ const scrollPercent = ()=>(document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
/**
 * Add a scroll listener on the window object to
 * control animations based on scroll percentage.
 */ window.onscroll = ()=>{
    // marquee.seek((scrollPercent() / 100) * marquee.duration);
    blog_image.seek(scrollPercent() / 100 * blog_image.duration);
    blog_image_shadow.seek(scrollPercent() / 100 * blog_image_shadow.duration);
};
/*------------------------------------------------------------------
Banner slider block - Flickity
------------------------------------------------------------------*/ if ((0, _lib.$)('.collections__slider')) window.flkty = new (0, _flickityDefault.default)('.collections__slider', {
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    initialIndex: window.innerWidth > 768 ? 1 : 0
});
let $slidePrevious = (0, _lib.$)('.js-collection-slider-prev');
if ($slidePrevious) $slidePrevious.addEventListener('click', (e)=>{
    e.preventDefault();
    window.flkty.previous();
});
let $slideNext = (0, _lib.$)('.js-collection-slider-next');
if ($slideNext) $slideNext.addEventListener('click', (e)=>{
    e.preventDefault();
    window.flkty.next();
});
let $collection_triggers = (0, _lib.$$)('.js-collection-slider-trigger');
let $indicator = (0, _lib.$)('.js-indicator');
function updateIndicator(element) {
    if (!element) return;
    var parent = element.parentElement; // Get the scrollable parent
    if (!parent) return;
    var rect = element.getBoundingClientRect();
    var parentRect = parent.getBoundingClientRect(); // Get parent's position
    // Calculate position relative to the scrollable parent
    var relativeLeft = rect.left - parentRect.left + parent.scrollLeft;
    $indicator.style.width = `${rect.width}px`;
    $indicator.style.left = `${relativeLeft}px`; // Adjust for scrolling
}
if ((0, _lib.$)('.js-collection-slider-trigger.active')) updateIndicator((0, _lib.$)('.js-collection-slider-trigger.active'));
if ((0, _lib.$)('.js-collection-slider-scroll.active')) updateIndicator((0, _lib.$)('.js-collection-slider-scroll.active'));
// debounce window resize 
let resizeTimer;
window.addEventListener('resize', ()=>{
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
        updateIndicator((0, _lib.$)('.js-collection-slider-trigger.active'));
    }, 250);
});
const updateSlider = (e)=>{
    // get closest '.js-collection-slider-trigger' or if it is the trigger itself
    let element = e.target.closest('.js-collection-slider-trigger') || e.target;
    // only continue if the elemetn has a class of 'js-collection-slider-trigger'
    if (!element.classList.contains('js-collection-slider-trigger')) return;
    e.preventDefault();
    e.preventDefault();
    let handle = element.getAttribute('data-handle');
    let title = element.getAttribute('data-title');
    let url = element.getAttribute('data-url');
    let copy = element.getAttribute('data-copy');
    $collection_triggers.forEach((element)=>element.classList.remove('active'));
    element.classList.add('active');
    updateIndicator(element);
    (0, _lib.$)('.collections').classList.add('loading');
    // Send the request to Shopify
    fetch(`/collections/${handle}/products.json`).then((response)=>response.json()).then((data)=>{
        setTimeout(()=>{
            let items = (0, _lib.$$)('.collections__slider__item--product,.collections__slider__item--empty');
            (0, _lib.$)('.collections__slider__item--text').innerHTML = `
                <h2>
                  <b>${title}</b>
                </h2>
                <p>
                  <b>${copy}</b>
                </p>
                <p>
                  <a href="${url}" class="button">Shop all</a>
                </p>
            `;
            items.forEach((item)=>{
                window.flkty.remove(item);
            });
            (0, _lib.$)('.collections').setAttribute('data-theme', handle.toLowerCase().replace(/ /g, '-'));
            function unescapeHtml(escapedStr) {
                const txt = document.createElement('textarea');
                txt.innerHTML = escapedStr;
                return txt.value;
            }
            var newItems = [];
            data.products.forEach((product)=>{
                let full_description = product.body_html;
                // extract the first paragraph from the description
                let description = full_description.match(/<p>(.*?)<\/p>/)[0];
                let newElement = document.createElement('a');
                newElement.classList.add('collections__slider__item');
                newElement.classList.add('collections__slider__item--product');
                newElement.setAttribute('href', '/products/' + product.handle);
                newElement.innerHTML = `
                    <div
                      class="collections__slider__item__quickview [ js-show-quickview ]"
                      data-tooltip
                      data-id="${product.handle}"
                      data-collection="${handle}"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="19.707" height="19.708">
                        <path fill="#FFF" fill-rule="nonzero" d="M7.899 0c4.361 0 7.898 3.531 7.898 7.888 0 1.825-.62 3.505-1.663 4.841l5.573 5.563-1.414 1.416-5.577-5.569a7.87 7.87 0 0 1-4.817 1.637C3.537 15.776 0 12.245 0 7.888 0 3.53 3.537 0 7.899 0Zm0 2A5.893 5.893 0 0 0 2 7.888a5.893 5.893 0 0 0 5.899 5.888 5.893 5.893 0 0 0 5.898-5.888A5.893 5.893 0 0 0 7.899 2Z"></path>
                      </svg>
                      <div class="tooltip">
                        <div class="tooltip__wrap">Quick view</div>
                      </div>
                    </div>

                    <div class="collections__slider__item__image">
                        <img src="${product.images[0].src}" alt="${product.images[0].alt}">
                    </div>
                    <div class="collections__slider__item__title">
                       
                        <h6><b>${product.title}</b></h6>
                        <h6><b>${product.variants[0].price}</b></h6>
                    </div>
                    <div class="jdgm-widget jdgm-preview-badge" data-id="${product.id}" >
                    ${unescapeHtml(window.metafields[product.id].badge)}
                    </div>
                    <div class="collections__slider__item__title">
                        ${description}
                    </div>
                    `;
                newItems.push(newElement);
            });
            if (data.products.length === 0) {
                let newElement = document.createElement('div');
                newElement.classList.add('collections__slider__item');
                newElement.classList.add('collections__slider__item--empty');
                newElement.innerHTML = `<div class="collections__slider__item collections__slider__item--empty">
                    <div class="collections__slider__item__inner">
                    <h1>
                      <b>COMING <BR>SOON</b>
                    </h1>
                    </.div>
                  </div>`;
                newItems.push(newElement);
            }
            flkty.append(newItems);
            // got to the first slide
            flkty.select(window.innerWidth > 768 ? 1 : 0);
            setTimeout(()=>{
                (0, _lib.$)('.collections').classList.remove('loading');
            }, 800);
        }, 30);
        // Scroll to the top of the .collections__slider
        // $('.collections__slider').scrollIntoView({ behavior: 'smooth' });
        const element = document.querySelector('.collections__slider');
        if (element) {
            const yOffset = -210; // Adjust by -200px
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    }).catch((data)=>{
        // Show an error message in the console
        console.log(data);
    });
};
/*------------------------------------------------------------------
In view elements
------------------------------------------------------------------*/ document.addEventListener('DOMContentLoaded', ()=>{
    (0, _inViewDefault.default)('.js-inview').on('enter', (el)=>el.classList.add('inview'));
}, false);
// On escape press toggle a class on the body
// document.addEventListener('keyup', e => (e.key === 'Escape') ? toggleMobileNavigation() : null);
window.changeQuantity = (event, amount)=>{
    let input = event.target.parentElement.querySelector('input');
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
------------------------------------------------------------------*/ document.addEventListener('DOMContentLoaded', ()=>{
    let $productSlider = (0, _lib.$)('#main-slider');
    if ($productSlider) {
        var main = new (0, _splideDefault.default)('#main-slider', {
            direction: 'ttb',
            heightRatio: 1,
            pagination: false,
            wheel: true,
            arrows: false,
            breakpoints: {
                768: {
                    heightRatio: 1,
                    direction: 'ltr',
                    pagination: true,
                    wheel: false
                }
            }
        });
        var thumbnails = new (0, _splideDefault.default)('#thumbnail-slider', {
            direction: 'ttb',
            heightRatio: 1,
            fixedWidth: 80,
            fixedHeight: 80,
            isNavigation: true,
            perPage: 4,
            gap: 5,
            pagination: false,
            wheel: true,
            arrows: false,
            breakpoints: {
                768: {
                    destroy: true,
                    direction: 'ltr',
                    pagination: true,
                    heightRatio: undefined
                }
            }
        });
        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
        let images = [];
        const productSliderItemImages = (0, _lib.$$)('.js-product-slider-item-image');
        productSliderItemImages.forEach((el)=>{
            images.push({
                'href': el.getAttribute('data-lightbox-image'),
                'type': 'image'
            });
            // preload images
            var img = new Image();
            img.src = el.getAttribute('data-lightbox-image');
        });
        const myGallery = (0, _glightboxDefault.default)({
            height: '90%',
            touchNavigation: true,
            lazyload: false,
            elements: images
        });
        document.body.addEventListener('click', (e)=>{
            if (e.target.classList.contains('js-product-lightbox')) {
                e.preventDefault();
                myGallery.openAt(main.index);
            }
        });
        if ((0, _lib.$)('.eye-roll')) document.body.addEventListener('mousemove', function(event) {
            let eye = (0, _lib.$)('.eye-roll');
            let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
            let y = eye.getBoundingClientRect().top + eye.clientWidth / 2;
            let rad = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = rad * (180 / Math.PI) * -1 + 180;
            eye.style.webkitTransform = 'rotate(' + rot + 'deg)';
            eye.style.mozTransform = 'rotate(' + rot + 'deg)';
            eye.style.msTransform = 'rotate(' + rot + 'deg)';
            eye.style.transform = 'rotate(' + rot + 'deg)';
        });
    }
});
/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/ const $megaHover = (0, _lib.$$)('.js-mega-menu-hover');
const $megaTarget = (0, _lib.$$)('.mega');
let hoverTimeout;
const showMenu = (element)=>{
    (0, _lib.$)('.header').classList.add('mega-visible');
    clearTimeout(hoverTimeout);
    $megaHover.forEach((item)=>item.classList.remove('hovered'));
    $megaTarget.forEach((item)=>item.classList.remove('active'));
    element.classList.add('hovered');
    if ((0, _lib.$)(`.mega[data-id="${element.getAttribute('data-id')}"]`)) (0, _lib.$)(`.mega[data-id="${element.getAttribute('data-id')}"]`).classList.add('active');
};
const hideMenu = ()=>{
    (0, _lib.$)('.header').classList.remove('mega-visible');
    $megaTarget.forEach((item)=>item.classList.remove('active'));
    $megaHover.forEach((item)=>item.classList.remove('hovered'));
};
$megaHover.forEach((item)=>{
    item.addEventListener('mouseenter', (e)=>showMenu(e.currentTarget));
    item.addEventListener('mouseleave', ()=>hoverTimeout = setTimeout(()=>hideMenu(), 800));
});
$megaTarget.forEach((item)=>{
    item.addEventListener('mouseenter', ()=>clearTimeout(hoverTimeout));
    item.addEventListener('mouseleave', ()=>hoverTimeout = setTimeout(()=>hideMenu(), 800));
});
window.addEventListener('scroll', ()=>hideMenu());
document.addEventListener('DOMContentLoaded', function() {
    /*------------------------------------------------------------------
    Preload Images
    ------------------------------------------------------------------*/ const preloadImage = (url)=>{
        var img = new Image();
        img.src = url;
    };
    const megaImages = (0, _lib.$$)('.js-mega-image');
    if (megaImages) megaImages.forEach((element)=>preloadImage(element.dataset.image));
    /*------------------------------------------------------------------
    Mega menu imagery
    ------------------------------------------------------------------*/ let clientX = -250;
    let clientY = -250;
    const megaImage = (0, _lib.$)('.megaImage');
    const initCursor = ()=>{
        document.addEventListener('mousemove', (e)=>{
            clientX = e.clientX;
            clientY = e.clientY;
        });
        const render = ()=>{
            megaImage.style.transform = `translate(${clientX}px, ${clientY}px)`;
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    };
    const switchImage = (element, show)=>{
        const megaImage = (0, _lib.$)('.megaImage');
        const megaImageImage = (0, _lib.$)('.megaImage__image');
        if (show) {
            megaImage.classList.add('active');
            megaImageImage.style.backgroundImage = `url(${element.dataset.image})`;
        } else megaImage.classList.remove('active');
    };
    initCursor();
    megaImages.forEach((element)=>{
        element.addEventListener('mouseenter', (e)=>switchImage(e.currentTarget, true));
        element.addEventListener('mouseleave', (e)=>switchImage(e.currentTarget, false));
    });
}, false);
let $collectionGridSliders = (0, _lib.$$)('.js-collection-grid-slider');
if ($collectionGridSliders) $collectionGridSliders.forEach(($collectionGridSlider)=>{
    new (0, _flickityDefault.default)($collectionGridSlider, {
        wrapAround: false,
        pageDots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});
// Select the slide container
if ((0, _lib.$)('.collections__slide')) {
    // if ($('.collections__slide')) $$('.collections__slide').forEach(element => new Gallery(element));
    let $sliders = (0, _lib.$$)('.collections__slide');
    if ($sliders) $sliders.forEach((slider)=>{
        let isDown = false;
        let startX;
        let scrollLeft;
        slider.addEventListener('mousedown', (e)=>{
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', ()=>{
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', (e)=>{
            isDown = false;
            slider.classList.remove('active');
            if (startX === e.pageX - slider.offsetLeft) updateSlider(e);
        });
        slider.addEventListener('mousemove', (e)=>{
            if (!isDown) return;
            e.preventDefault();
            slider.scrollLeft = scrollLeft - (e.pageX - slider.offsetLeft - startX) * 1;
        });
    });
}

},{"./lib":"acGTP","./search":"4fKJc","./shop":"1fHDu","./cursor":"9Us5D","./accordion":"lWUal","./templates":"bituW","flickity":"lGlvh","in-view":"70hii","animejs/lib/anime.es.js":"hQAdq","choices.js":"lqRij","glightbox":"119aE","splitting":"bzYwE","typewriter-effect/dist/core":"2Xppi","@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS","flickity-as-nav-for":"9t0X1","@splidejs/splide":"7N94p"}],"acGTP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$);
parcelHelpers.export(exports, "$$", ()=>$$);
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"5ITdS":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"4fKJc":[function(require,module,exports,__globalThis) {
/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/ var _lib = require("./lib");
/*------------------------------------------------------------------
Search interactions
------------------------------------------------------------------*/ let $search_input = (0, _lib.$)('.js-search-query');
window.toggleSearchPane = ()=>{
    document.body.classList.toggle('search-visible');
    if (document.body.classList.contains('search-visible')) setTimeout(()=>document.getElementById('search-query').focus(), 1000);
};
document.addEventListener('keyup', (e)=>{
    if (e.keyCode === 27) document.body.classList.remove('search-visible');
});
// Our Declare our search variables
const $search_button = (0, _lib.$)('.js-show-all-results');
const $search_results = (0, _lib.$)('.search-pane-results');
const $search_grid = (0, _lib.$)('.js-search-results-grid');
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
    else return '';
};
/**
 * 
 * Show the search animation by enumerating the results with three placeholder elements
 * 
 */ const show_search_animation = ()=>{
    let html = '';
    for(let i = 0; i < 2; i++)html += template_search_placeholder();
    html += template_search_placeholder();
    $search_grid.innerHTML = html;
};
/**
 * 
 * Show the first three search results
 * 
 */ const update_search_results = ()=>{
    let html = '';
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
 */ const show_predicitive_search = ()=>$search_results.classList.add('active');
/**
* 
* Hide the search results grid
* 
* @returns {void} hide the search results grid
*/ const hide_predicitive_search = ()=>$search_results.classList.remove('active');
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
        console.time('search performed in ');
        // Fetch the newly requested results
        fetch(`/search/suggest.json?q=${encodeURIComponent($search_input.value)}&resources[type]=product,page,article,collection&resources[limit]=4&resources[options][unavailable_products]=last&`, {
            signal
        }).then((response)=>response.text()).then((data)=>{
            console.timeEnd('search performed in ');
            // Log out our new results for debugging
            data = JSON.parse(data);
            search_results = data.resources.results.products;
            // Update the search results grid with the new results or a nothing found message
            search_results.length > 0 ? update_search_results() : no_results_found();
            (0, _lib.$)('.search-pane-results-action').style.display = search_results.length > 0 ? 'block' : 'none';
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
$search_input.addEventListener('input', debounce(search, 200));
// Event handler for the search input - this is instant to show action but will not search yet
$search_input.addEventListener('keyup', activate_search);
// Event handler for the search button - this will redirect to the search results page
$search_button.addEventListener('click', go_to_all_results); // For dev purposes only - remove on live
 // document.body.classList.add('searchActive');
 // Focus on the search input
 // setTimeout(() => document.getElementById('SearchForm_SearchForm_Search').focus(), 1500);

},{"./lib":"acGTP"}],"1fHDu":[function(require,module,exports,__globalThis) {
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
    let $cart_count = (0, _lib.$)('.js-cart-count');
    $cart_count.innerHTML = `<b>${count}</b>`;
    $cart_count.classList.toggle('active', count > 0);
    (0, _lib.$)('.header-actions__cart__count').classList.add('pulse');
    // Remove the pulse animation class after the animation ends
    setTimeout(()=>(0, _lib.$)('.header-actions__cart__count').classList.remove('pulse'), 3000);
};
/**
 * 
 * Update the sidecart items
 * 
 * @param {object} cart 
 */ const updateSideCart = (cart)=>{
    let html = '';
    let total = 0;
    let $side_cart = (0, _lib.$)('.sidecart-draw-items');
    let $side_cart_total = (0, _lib.$)('.js-sidecart-total');
    let $afterpay_payments = (0, _lib.$)('.js-afterpay-payments');
    let $afterpay = (0, _lib.$)('.sidecart-draw-actions-afterpay');
    if (cart.items) cart.items.forEach((item, index)=>{
        html += (0, _templates.sidecart_item)(item, index);
        total += parseFloat(item.quantity * item.price / 100);
    });
    if ($side_cart) $side_cart.innerHTML = html;
    if ($side_cart_total) $side_cart_total.innerHTML = `$${total.toFixed(2)}`;
    if ($afterpay_payments) $afterpay_payments.innerHTML = `$${(total / 4).toFixed(2)}`;
    total === 0 ? $afterpay.style.display = 'none' : $afterpay.style.display = 'block';
};
/**
 * 
 * Update the maincart items
 * 
 * @param {object} cart 
 */ const updateMainCart = (cart)=>{
    let html = '';
    let total = 0;
    let $main_cart = (0, _lib.$)('.js-cart-items');
    let $main_cart_total = (0, _lib.$)('.js-cart-total');
    if (cart.items) cart.items.forEach((item, index)=>{
        html += (0, _templates.maincart_item)(item, index);
        total += parseFloat(item.quantity * item.price / 100);
    });
    if ($main_cart) $main_cart.innerHTML = html;
    if ($main_cart_total) $main_cart_total.innerHTML = `$${total.toFixed(2)}`;
};
window.fetchCart = ()=>{
    // Send the request to Shopify
    fetch('/cart.js').then((response)=>response.json()).then((data)=>{
        // Update all of the carts
        updateCarts(data);
    }).catch((data)=>{
        // Show an error message in the console
        console.log(data);
    });
};
// Initialise the cart on page load
if (document.body.dataset.pageType != 'password') fetchCart();
window.changeSideCartQuantity = (event, amount)=>{
    let quantity, input = event.target.parentElement.querySelector('input');
    if (amount === -1 && parseInt(input.value) === 1) {
        window.changeSideCartQuantity(event, 0);
        return;
    }
    if (amount !== 0) {
        quantity = parseInt(input.value);
        quantity = quantity + amount < 1 ? 1 : quantity + amount;
        input.value = quantity;
    }
    let data = {
        line: parseInt(event.target.closest('.sidecart-draw-items__item').dataset.line),
        quantity: amount == 0 ? 0 : quantity
    };
    // Send the request to Shopify
    fetch('/cart/change.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
 */ document.body.addEventListener('click', (e)=>{
    if (e.target && e.target.classList.contains('js-add-to-cart')) {
        e.preventDefault();
        // Declare our variables
        let button = e.target;
        let form = button.closest('form');
        // Add a loading animation to the button
        button.classList.add('busy');
        let data = {
            id: form.querySelector('.js-variant').value,
            quantity: parseInt(form.querySelector('.quantity-input input').value)
        };
        // Send the request to Shopify
        fetch('/cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json()).then((data)=>{
            // Hide the quickview flyout
            document.body.classList.remove('quickview-visible');
            // Update the cart sitewide
            fetchCart();
            // Remove the loading animation from the button
            button.classList.remove('busy');
            // Show a success message
            notyf.success({
                message: 'Your cart has been updated',
                icon: false
            });
        }).catch((data)=>{
            // Hide the quickview flyout
            document.body.classList.remove('quickview-visible');
            // Remove the loading animation from the button
            button.classList.remove('busy');
            // Show an error message in the console
            console.log(data);
        });
    }
});
window.changeMainCartQuantity = (event, amount)=>{
    let quantity, input = event.target.parentElement.querySelector('input');
    if (amount !== 0) {
        quantity = parseInt(input.value);
        quantity = quantity + amount < 1 ? 1 : quantity + amount;
        input.value = quantity;
    }
    let data = {
        line: parseInt(event.target.closest('.cart__wrap__form__table__body__row').dataset.line),
        quantity: amount == 0 ? 0 : quantity
    };
    // Send the request to Shopify
    fetch('/cart/change.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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

},{"./lib":"acGTP","notyf":"kobg9","./templates":"bituW"}],"kobg9":[function(require,module,exports,__globalThis) {
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
            type: 'success',
            className: 'notyf__toast--success',
            backgroundColor: '#3dc763',
            icon: {
                className: 'notyf__icon--success',
                tagName: 'i'
            }
        },
        {
            type: 'error',
            className: 'notyf__toast--error',
            backgroundColor: '#ed3d3d',
            icon: {
                className: 'notyf__icon--error',
                tagName: 'i'
            }
        }
    ],
    duration: 2000,
    ripple: true,
    position: {
        x: 'right',
        y: 'bottom'
    },
    dismissible: false
};
var NotyfView = /** @class */ function() {
    function NotyfView() {
        this.notifications = [];
        this.events = {};
        this.X_POSITION_FLEX_MAP = {
            left: 'flex-start',
            center: 'center',
            right: 'flex-end'
        };
        this.Y_POSITION_FLEX_MAP = {
            top: 'flex-start',
            center: 'center',
            bottom: 'flex-end'
        };
        // Creates the main notifications container
        var docFrag = document.createDocumentFragment();
        var notyfContainer = this._createHTMLElement({
            tagName: 'div',
            className: 'notyf'
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
        node.classList.add('notyf__toast--disappear');
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
        this._announce(notification.options.message || 'Notification');
    };
    NotyfView.prototype._renderNotification = function(notification) {
        var _a;
        var card = this._buildNotificationCard(notification);
        var className = notification.options.className;
        if (className) (_a = card.classList).add.apply(_a, className.split(' '));
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
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.x) || 'right';
    };
    NotyfView.prototype.getYPosition = function(options) {
        var _a;
        return ((_a = options === null || options === void 0 ? void 0 : options.position) === null || _a === void 0 ? void 0 : _a.y) || 'bottom';
    };
    NotyfView.prototype.adjustContainerAlignment = function(options) {
        var align = this.X_POSITION_FLEX_MAP[this.getXPosition(options)];
        var justify = this.Y_POSITION_FLEX_MAP[this.getYPosition(options)];
        var style = this.container.style;
        style.setProperty('justify-content', justify);
        style.setProperty('align-items', align);
    };
    NotyfView.prototype._buildNotificationCard = function(notification) {
        var _this = this;
        var options = notification.options;
        var iconOpts = options.icon;
        // Adjust container according to position (e.g. top-left, bottom-center, etc)
        this.adjustContainerAlignment(options);
        // Create elements
        var notificationElem = this._createHTMLElement({
            tagName: 'div',
            className: 'notyf__toast'
        });
        var ripple = this._createHTMLElement({
            tagName: 'div',
            className: 'notyf__ripple'
        });
        var wrapper = this._createHTMLElement({
            tagName: 'div',
            className: 'notyf__wrapper'
        });
        var message = this._createHTMLElement({
            tagName: 'div',
            className: 'notyf__message'
        });
        message.innerHTML = options.message || '';
        var mainColor = options.background || options.backgroundColor;
        // Build the icon and append it to the card
        if (iconOpts) {
            var iconContainer = this._createHTMLElement({
                tagName: 'div',
                className: 'notyf__icon'
            });
            if (typeof iconOpts === 'string' || iconOpts instanceof String) iconContainer.innerHTML = new String(iconOpts).valueOf();
            if (typeof iconOpts === 'object') {
                var _a = iconOpts.tagName, tagName = _a === void 0 ? 'i' : _a, className_1 = iconOpts.className, text = iconOpts.text, _b = iconOpts.color, color = _b === void 0 ? mainColor : _b;
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
                tagName: 'div',
                className: 'notyf__dismiss'
            });
            var dismissButton = this._createHTMLElement({
                tagName: 'button',
                className: 'notyf__dismiss-btn'
            });
            dismissWrapper.appendChild(dismissButton);
            wrapper.appendChild(dismissWrapper);
            notificationElem.classList.add("notyf__toast--dismissible");
            dismissButton.addEventListener('click', function(event) {
                var _a, _b;
                (_b = (_a = _this.events)[NotyfEvent.Dismiss]) === null || _b === void 0 || _b.call(_a, {
                    target: notification,
                    event: event
                });
                event.stopPropagation();
            });
        }
        notificationElem.addEventListener('click', function(event) {
            var _a, _b;
            return (_b = (_a = _this.events)[NotyfEvent.Click]) === null || _b === void 0 ? void 0 : _b.call(_a, {
                target: notification,
                event: event
            });
        });
        // Adjust margins depending on whether its an upper or lower notification
        var className = this.getYPosition(options) === 'top' ? 'upper' : 'lower';
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
            tagName: 'div',
            className: 'notyf-announcer'
        });
        a11yContainer.setAttribute('aria-atomic', 'true');
        a11yContainer.setAttribute('aria-live', 'polite');
        // Set the a11y container to be visible hidden. Can't use display: none as
        // screen readers won't read it.
        a11yContainer.style.border = '0';
        a11yContainer.style.clip = 'rect(0 0 0 0)';
        a11yContainer.style.height = '1px';
        a11yContainer.style.margin = '-1px';
        a11yContainer.style.overflow = 'hidden';
        a11yContainer.style.padding = '0';
        a11yContainer.style.position = 'absolute';
        a11yContainer.style.width = '1px';
        a11yContainer.style.outline = '0';
        document.body.appendChild(a11yContainer);
        this.a11yContainer = a11yContainer;
    };
    /**
     * Announces a message to screenreaders.
     */ NotyfView.prototype._announce = function(message) {
        var _this = this;
        this.a11yContainer.textContent = '';
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
        var el = document.createElement('_fake');
        var transitions = {
            MozTransition: 'animationend',
            OTransition: 'oAnimationEnd',
            WebkitTransition: 'webkitAnimationEnd',
            transition: 'animationend'
        };
        var t;
        for(t in transitions){
            if (el.style[t] !== undefined) return transitions[t];
        }
        // No supported animation end event. Using "animationend" as a fallback
        return 'animationend';
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
            target['triggerEvent'](NotyfEvent.Dismiss, event);
        });
        // tslint:disable-next-line: no-string-literal
        this.view.on(NotyfEvent.Click, function(_a) {
            var target = _a.target, event = _a.event;
            return target['triggerEvent'](NotyfEvent.Click, event);
        });
    }
    Notyf.prototype.error = function(payload) {
        var options = this.normalizeOptions('error', payload);
        return this.open(options);
    };
    Notyf.prototype.success = function(payload) {
        var options = this.normalizeOptions('success', payload);
        return this.open(options);
    };
    Notyf.prototype.open = function(options) {
        var defaultOpts = this.options.types.find(function(_a) {
            var type = _a.type;
            return type === options.type;
        }) || {};
        var config = __assign(__assign({}, defaultOpts), options);
        this.assignProps([
            'ripple',
            'position',
            'dismissible'
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
        if (typeof payload === 'string') options.message = payload;
        else if (typeof payload === 'object') options = __assign(__assign({}, options), payload);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"bituW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "maincart_item", ()=>maincart_item);
parcelHelpers.export(exports, "sidecart_item", ()=>sidecart_item);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"9Us5D":[function(require,module,exports,__globalThis) {
var _lib = require("./lib");
document.addEventListener('DOMContentLoaded', function() {
    let clientX = -100;
    let clientY = -100;
    const innerCursor = document.querySelector('.customCursor');
    const initCursor = ()=>{
        document.addEventListener('mousemove', (e)=>{
            clientX = e.clientX;
            clientY = e.clientY;
        });
        const render = ()=>{
            innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
    };
    const animateCursor = (type, remove)=>(0, _lib.$)('.customCursor').classList.toggle(type, remove);
    initCursor();
    // Get the element with the class 'js-cursor-previous'
    const $previous = (0, _lib.$)('.js-cursor-previous');
    if ($previous) {
        // Add event listeners for mouseenter and mouseleave
        $previous.addEventListener('mouseenter', ()=>animateCursor('previous', true));
        $previous.addEventListener('mouseleave', ()=>animateCursor('previous', false));
    }
    // Get the element with the class 'js-cursor-previous'
    const $next = (0, _lib.$)('.js-cursor-next');
    if ($next) {
        // Add event listeners for mouseenter and mouseleave
        $next.addEventListener('mouseenter', ()=>animateCursor('next', true));
        $next.addEventListener('mouseleave', ()=>animateCursor('next', false));
    }
});

},{"./lib":"acGTP"}],"lWUal":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Accordion", ()=>Accordion);
class Accordion {
    /**
     * 
     * Constructor
     * 
     * @param {element} element accordion parent
     */ constructor(element, open_first_item_on_load = false){
        this.accordion = element;
        this.open_first_item_on_load = open_first_item_on_load;
        this.trigger = this.accordion.querySelector('.js-trigger');
        this.content = this.accordion.querySelector('.js-content');
        // Initialise the accordion
        this.init();
    }
    /**
     * 
     * Initialise the accordion item
     * 
     */ init() {
        // Get the initial state of the accordion
        this.getState();
        // Add the click event handler to the accordion
        this.addEventListeners();
        if (this.open_first_item_on_load) this.open(true);
    }
    /**
     * 
     * Get the current state of the accordion
     * 
     */ getState() {
        this.is_open = this.accordion.classList.contains('active');
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
        this.accordion.addEventListener('click', ()=>this.toggle());
    }
    /**
     * 
     * Add the click event handler to the accordion
     * 
     */ updateState(state) {
        // Update the current state
        this.is_open = state;
        // Update the aria-expanded attribute
        this.trigger.setAttribute('aria-expanded', state);
    }
    /**
     * 
     * Open the accordion
     * 
     */ open(instant = false) {
        if (instant) this.content.style.transition = 'none';
        // Add active class to the accordion
        this.accordion.classList.add('active');
        // Quickly get the height we want to animate to
        this.content.style.height = 'auto';
        var height = this.content.clientHeight + 'px';
        // Revert the heioght back to nothing
        this.content.style.height = 0;
        // Animate the height once the calculations are done
        setTimeout(()=>this.content.style.height = height, 0);
        // Update the current state
        this.updateState(true);
        setTimeout(()=>{
            this.content.style.transition = '0.5s cubic-bezier(0.365, 0.04, 0.44, 1)';
        }, 500);
    }
    /**
     * 
     * Close the accordion
     * 
     */ close() {
        // Revert the height back to nothing
        this.content.style.height = 0;
        // Remove the active class once animations are over
        this.content.addEventListener('transitionend', ()=>{
            this.accordion.classList.remove('active');
        }, {
            once: true
        });
        // Update the current state
        this.updateState(false);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"lGlvh":[function(require,module,exports,__globalThis) {
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
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        './drag',
        './prev-next-button',
        './page-dots',
        './player',
        './add-remove-cell',
        './lazyload'
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("7f4fc0fa93b379af"), require("bb0305263f6cb53e"), require("ae996051f9e1d92a"), require("4ac8cd6c25220e4d"), require("765ef4929b67b432"), require("19e7a54076c11add"), require("d91f4dabff6fb76b"));
})(window, function factory(Flickity) {
    return Flickity;
});

},{"7f4fc0fa93b379af":"lqXaA","bb0305263f6cb53e":"fplVG","ae996051f9e1d92a":"5sFqy","4ac8cd6c25220e4d":"aRztI","765ef4929b67b432":"9u4yR","19e7a54076c11add":"ewQZE","d91f4dabff6fb76b":"73rKt"}],"lqXaA":[function(require,module,exports,__globalThis) {
// Flickity main
/* eslint-disable max-params */ (function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './cell',
        './slide',
        './animate'
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
    /* eslint-enable max-params */ 'use strict';
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
            if (console) console.error('Bad element for Flickity: ' + (queryElement || element));
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
        cellAlign: 'center',
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
        this.originSide = this.options.rightToLeft ? 'right' : 'left';
        // create viewport & slider
        this.viewport = document.createElement('div');
        this.viewport.className = 'flickity-viewport';
        this._createSlider();
        if (this.options.resize || this.options.watchCSS) window1.addEventListener('resize', this);
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
        this.element.classList.add('flickity-enabled');
        if (this.options.rightToLeft) this.element.classList.add('flickity-rtl');
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
            this.element.addEventListener('keydown', this);
        }
        this.emitEvent('activate');
        this.selectInitialIndex();
        // flag for initial activation, for using initialIndex
        this.isInitActivated = true;
        // ready event. #493
        this.dispatchEvent('ready');
    };
    // slider positions the cells
    proto._createSlider = function() {
        // slider element does all the positioning
        var slider = document.createElement('div');
        slider.className = 'flickity-slider';
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
        var isOriginLeft = this.originSide == 'left';
        var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';
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
        else if (typeof groupCells == 'number') {
            // group by number. 3 -> [0,1,2], [3,4,5], ...
            var number = parseInt(groupCells, 10);
            return function(i) {
                return i % number !== 0;
            };
        }
        // default, group by width of slide
        // parse '75%
        var percentMatch = typeof groupCells == 'string' && groupCells.match(/^(\d+)%$/);
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
            this.viewport.style.height = height + 'px';
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
        var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
        var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
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
            type += this.options.namespaceJQueryEvents ? '.flickity' : '';
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
        this.dispatchEvent('select', null, [
            index
        ]);
        // change event if new index
        if (index != prevIndex) this.dispatchEvent('change', null, [
            index
        ]);
        // old v1 event name, remove in v3
        this.dispatchEvent('cellSelect');
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
        if (initialIndex && typeof initialIndex == 'string') {
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
        elem = utils.getParent(elem, '.flickity-slider > *');
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
        if (typeof selector == 'number') // use number as index
        return this.cells[selector];
        if (typeof selector == 'string') {
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
        this.emitEvent('uiChange');
    };
    // keep focus on element when child UI elements are clicked
    proto.childUIPointerDown = function(event) {
        // HACK iOS does not allow touch events to bubble up?!
        if (event.type != 'touchstart') event.preventDefault();
        this.focus();
    };
    // ----- resize ----- //
    proto.onresize = function() {
        this.watchCSS();
        this.resize();
    };
    utils.debounceMethod(Flickity, 'onresize', 150);
    proto.resize = function() {
        if (!this.isActive) return;
        this.getSize();
        // wrap values
        if (this.options.wrapAround) this.x = utils.modulo(this.x, this.slideableWidth);
        this.positionCells();
        this._getWrapShiftCells();
        this.setGallerySize();
        this.emitEvent('resize');
        // update selected index for group slides, instant
        // TODO: position can be lost between groups of various numbers
        var selectedElement = this.selectedElements && this.selectedElements[0];
        this.selectCell(selectedElement, false, true);
    };
    // watches the :after property, activates/deactivates
    proto.watchCSS = function() {
        var watchOption = this.options.watchCSS;
        if (!watchOption) return;
        var afterContent = getComputedStyle(this.element, ':after').content;
        // activate if :after { content: 'flickity' }
        if (afterContent.indexOf('flickity') != -1) this.activate();
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
            var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
            this.uiChange();
            this[leftMethod]();
        },
        // right arrow
        39: function() {
            var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
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
        this.element.classList.remove('flickity-enabled');
        this.element.classList.remove('flickity-rtl');
        this.unselectSelectedSlide();
        // destroy cells
        this.cells.forEach(function(cell) {
            cell.destroy();
        });
        this.element.removeChild(this.viewport);
        // move child elements back into element
        moveElements(this.slider.children, this.element);
        if (this.options.accessibility) {
            this.element.removeAttribute('tabIndex');
            this.element.removeEventListener('keydown', this);
        }
        // set flags
        this.isActive = false;
        this.emitEvent('deactivate');
    };
    proto.destroy = function() {
        this.deactivate();
        window1.removeEventListener('resize', this);
        this.allOff();
        this.emitEvent('destroy');
        if (jQuery && this.$element) jQuery.removeData(this.element, 'flickity');
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
    utils.htmlInit(Flickity, 'flickity');
    if (jQuery && jQuery.bridget) jQuery.bridget('flickity', Flickity);
    // set internal jQuery, for Webpack + jQuery v3, #478
    Flickity.setJQuery = function(jq) {
        jQuery = jq;
    };
    Flickity.Cell = Cell;
    Flickity.Slide = Slide;
    return Flickity;
});

},{"fa23e9e6e601baae":"cYzr6","85a1c701d007b558":"a7g94","bffd2b9d17982adc":"l5E56","1bd440e3aab8bdf6":"8jmuM","d1a522f1df04542d":"4fy9v","fb4fc3262d72fc3d":"5whLO"}],"cYzr6":[function(require,module,exports,__globalThis) {
/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */ (function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == 'function' && define.amd) // AMD - RequireJS
    define(factory);
    else if (0, module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != 'undefined' ? window : this, function() {
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

},{}],"a7g94":[function(require,module,exports,__globalThis) {
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */ /* globals console: false */ (function(window1, factory) {
    /* jshint strict: false */ /* globals define, module */ if (typeof define == 'function' && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.getSize = factory();
})(window, function factory() {
    'use strict';
    // -------------------------- helpers -------------------------- //
    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {}
    var logError = typeof console == 'undefined' ? noop : function(message) {
        console.error(message);
    };
    // -------------------------- measurements -------------------------- //
    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
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
        if (!style) logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
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
   */ var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
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
        if (typeof elem == 'string') elem = document.querySelector(elem);
        // do not proceed on non-objects
        if (!elem || typeof elem != 'object' || !elem.nodeType) return;
        var style = getStyle(elem);
        // if hidden, everything is 0
        if (style.display == 'none') return getZeroSize();
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
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

},{}],"l5E56":[function(require,module,exports,__globalThis) {
/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == 'function' && define.amd) // AMD
    define([
        'desandro-matches-selector/matches-selector'
    ], function(matchesSelector) {
        return factory(window1, matchesSelector);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("51e1096a76b062e0"));
    else // browser global
    window1.fizzyUIUtils = factory(window1, window1.matchesSelector);
})(window, function factory(window1, matchesSelector) {
    'use strict';
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
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
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
        if (typeof elem == 'string') return document.querySelector(elem);
        return elem;
    };
    // ----- handleEvent ----- //
    // enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function(event) {
        var method = 'on' + event.type;
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
        var timeoutName = methodName + 'Timeout';
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
        if (readyState == 'complete' || readyState == 'interactive') // do async to allow for other scripts to run. metafizzy/flickity#441
        setTimeout(callback);
        else document.addEventListener('DOMContentLoaded', callback);
    };
    // ----- htmlInit ----- //
    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + '-' + $2;
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
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window1.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
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

},{"51e1096a76b062e0":"hi1Dq"}],"hi1Dq":[function(require,module,exports,__globalThis) {
/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */ (function(window1, factory) {
    /*global define: false, module: false */ 'use strict';
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window1.matchesSelector = factory();
})(window, function factory() {
    'use strict';
    var matchesMethod = function() {
        var ElemProto = window.Element.prototype;
        // check for the standard method name first
        if (ElemProto.matches) return 'matches';
        // check un-prefixed
        if (ElemProto.matchesSelector) return 'matchesSelector';
        // check vendor prefixes
        var prefixes = [
            'webkit',
            'moz',
            'ms',
            'o'
        ];
        for(var i = 0; i < prefixes.length; i++){
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) return method;
        }
    }();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
});

},{}],"8jmuM":[function(require,module,exports,__globalThis) {
// Flickity.Cell
(function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        'get-size/get-size'
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
    'use strict';
    function Cell(elem, parent) {
        this.element = elem;
        this.parent = parent;
        this.create();
    }
    var proto = Cell.prototype;
    proto.create = function() {
        this.element.style.position = 'absolute';
        this.element.setAttribute('aria-hidden', 'true');
        this.x = 0;
        this.shift = 0;
    };
    proto.destroy = function() {
        // reset style
        this.unselect();
        this.element.style.position = '';
        var side = this.parent.originSide;
        this.element.style[side] = '';
        this.element.removeAttribute('aria-hidden');
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
        var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
        this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
    };
    proto.renderPosition = function(x) {
        // render position of cell with in slider
        var side = this.parent.originSide;
        this.element.style[side] = this.parent.getPositionValue(x);
    };
    proto.select = function() {
        this.element.classList.add('is-selected');
        this.element.removeAttribute('aria-hidden');
    };
    proto.unselect = function() {
        this.element.classList.remove('is-selected');
        this.element.setAttribute('aria-hidden', 'true');
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

},{"1b42d1889deda879":"a7g94"}],"4fy9v":[function(require,module,exports,__globalThis) {
// slide
(function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define(factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory();
    else {
        // browser global
        window1.Flickity = window1.Flickity || {};
        window1.Flickity.Slide = factory();
    }
})(window, function factory() {
    'use strict';
    function Slide(parent) {
        this.parent = parent;
        this.isOriginLeft = parent.originSide == 'left';
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
            var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
            this.firstMargin = cell.size[beginMargin];
        }
    };
    proto.updateTarget = function() {
        var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
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

},{}],"5whLO":[function(require,module,exports,__globalThis) {
// animate
(function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        'fizzy-ui-utils/utils'
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
    'use strict';
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
        this.slider.style.transform = is3d ? 'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
    };
    proto.dispatchScrollEvent = function() {
        var firstSlide = this.slides[0];
        if (!firstSlide) return;
        var positionX = -this.x - firstSlide.target;
        var progress = positionX / this.slidesWidth;
        this.dispatchEvent('scroll', null, [
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
        return Math.round(position / this.size.innerWidth * 10000) * 0.01 + '%';
        else // pixel positioning
        return Math.round(position) + 'px';
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
            this.dispatchEvent('settle', null, [
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
        return 1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction'];
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

},{"1e52957a1ff1b7bd":"l5E56"}],"fplVG":[function(require,module,exports,__globalThis) {
// drag
(function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'unidragger/unidragger',
        'fizzy-ui-utils/utils'
    ], function(Flickity, Unidragger, utils) {
        return factory(window1, Flickity, Unidragger, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("d40d64ed30f1bf77"), require("86ba687567ee797"), require("ac8d1ac140a5d50e"));
    else // browser global
    window1.Flickity = factory(window1, window1.Flickity, window1.Unidragger, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, Unidragger, utils) {
    'use strict';
    // ----- defaults ----- //
    utils.extend(Flickity.defaults, {
        draggable: '>1',
        dragThreshold: 3
    });
    // ----- create ----- //
    Flickity.createMethods.push('_createDrag');
    // -------------------------- drag prototype -------------------------- //
    var proto = Flickity.prototype;
    utils.extend(proto, Unidragger.prototype);
    proto._touchActionValue = 'pan-y';
    // --------------------------  -------------------------- //
    var isTouch = 'createTouch' in document;
    var isTouchmoveScrollCanceled = false;
    proto._createDrag = function() {
        this.on('activate', this.onActivateDrag);
        this.on('uiChange', this._uiChangeDrag);
        this.on('deactivate', this.onDeactivateDrag);
        this.on('cellChange', this.updateDraggable);
        // TODO updateDraggable on resize? if groupCells & slides change
        // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
        // #457, RubaXa/Sortable#973
        if (isTouch && !isTouchmoveScrollCanceled) {
            window1.addEventListener('touchmove', function() {});
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
        this.element.classList.remove('is-draggable');
    };
    proto.updateDraggable = function() {
        // disable dragging if less than 2 slides. #278
        if (this.options.draggable == '>1') this.isDraggable = this.slides.length > 1;
        else this.isDraggable = this.options.draggable;
        if (this.isDraggable) this.element.classList.add('is-draggable');
        else this.element.classList.remove('is-draggable');
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
        this.viewport.classList.add('is-pointer-down');
        // track scrolling
        this.pointerDownScroll = getScrollPosition();
        window1.addEventListener('scroll', this);
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
        this.dispatchEvent('pointerDown', event, [
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
        var isTouchStart = event.type == 'touchstart';
        var isTouchPointer = event.pointerType == 'touch';
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
        this.viewport.classList.remove('is-pointer-down');
        this.dispatchEvent('pointerUp', event, [
            pointer
        ]);
        this._dragPointerUp(event, pointer);
    };
    proto.pointerDone = function() {
        window1.removeEventListener('scroll', this);
        delete this.pointerDownScroll;
    };
    // -------------------------- dragging -------------------------- //
    proto.dragStart = function(event, pointer) {
        if (!this.isDraggable) return;
        this.dragStartPosition = this.x;
        this.startAnimation();
        window1.removeEventListener('scroll', this);
        this.dispatchEvent('dragStart', event, [
            pointer
        ]);
    };
    proto.pointerMove = function(event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);
        this.dispatchEvent('pointerMove', event, [
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
        this.dispatchEvent('dragMove', event, [
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
        this.dispatchEvent('dragEnd', event, [
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
        this.dispatchEvent('staticClick', event, [
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

},{"d40d64ed30f1bf77":"lqXaA","86ba687567ee797":"2Lloh","ac8d1ac140a5d50e":"l5E56"}],"2Lloh":[function(require,module,exports,__globalThis) {
/*!
 * Unidragger v2.4.0
 * Draggable base class
 * MIT license
 */ /*jshint browser: true, unused: true, undef: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == 'function' && define.amd) // AMD
    define([
        'unipointer/unipointer'
    ], function(Unipointer) {
        return factory(window1, Unipointer);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("668741c9e93bb99c"));
    else // browser global
    window1.Unidragger = factory(window1, window1.Unipointer);
})(window, function factory(window1, Unipointer) {
    'use strict';
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
        var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
        var touchAction = isAdd ? this._touchActionValue : '';
        for(var i = 0; i < this.handles.length; i++){
            var handle = this.handles[i];
            this._bindStartEvent(handle, isAdd);
            handle[bindMethod]('click', this);
            // touch-action: none to override browser touch gestures. metafizzy/flickity#540
            if (window1.PointerEvent) handle.style.touchAction = touchAction;
        }
    };
    // prototype so it can be overwriteable by Flickity
    proto._touchActionValue = 'none';
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
        this.emitEvent('pointerDown', [
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
        this.emitEvent('pointerMove', [
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
        this.emitEvent('pointerUp', [
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
        this.emitEvent('dragStart', [
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
        this.emitEvent('dragMove', [
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
        this.emitEvent('dragEnd', [
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
        if (this.isIgnoringMouseUp && event.type == 'mouseup') return;
        this.staticClick(event, pointer);
        // set flag for emulated clicks 300ms after touchend
        if (event.type != 'mouseup') {
            this.isIgnoringMouseUp = true;
            // reset flag after 300ms
            setTimeout((function() {
                delete this.isIgnoringMouseUp;
            }).bind(this), 400);
        }
    };
    proto.staticClick = function(event, pointer) {
        this.emitEvent('staticClick', [
            event,
            pointer
        ]);
    };
    // ----- utils ----- //
    Unidragger.getPointerPoint = Unipointer.getPointerPoint;
    // -----  ----- //
    return Unidragger;
});

},{"668741c9e93bb99c":"8cmqm"}],"8cmqm":[function(require,module,exports,__globalThis) {
/*!
 * Unipointer v2.4.0
 * base class for doing one thing with pointer event
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */ (function(window1, factory) {
    // universal module definition
    /* jshint strict: false */ /*global define, module, require */ if (typeof define == 'function' && define.amd) // AMD
    define([
        'ev-emitter/ev-emitter'
    ], function(EvEmitter) {
        return factory(window1, EvEmitter);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("5e002a009fae883c"));
    else // browser global
    window1.Unipointer = factory(window1, window1.EvEmitter);
})(window, function factory(window1, EvEmitter) {
    'use strict';
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
        var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
        // default to mouse events
        var startEvent = 'mousedown';
        if ('ontouchstart' in window1) // HACK prefer Touch Events as you can preventDefault on touchstart to
        // disable scroll in iOS & mobile Chrome metafizzy/flickity#1177
        startEvent = 'touchstart';
        else if (window1.PointerEvent) // Pointer Events
        startEvent = 'pointerdown';
        elem[bindMethod](startEvent, this);
    };
    // trigger handler methods for events
    proto.handleEvent = function(event) {
        var method = 'on' + event.type;
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
        this.emitEvent('pointerDown', [
            event,
            pointer
        ]);
    };
    // hash of events to be bound after start event
    var postStartEvents = {
        mousedown: [
            'mousemove',
            'mouseup'
        ],
        touchstart: [
            'touchmove',
            'touchend',
            'touchcancel'
        ],
        pointerdown: [
            'pointermove',
            'pointerup',
            'pointercancel'
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
        this.emitEvent('pointerMove', [
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
        this.emitEvent('pointerUp', [
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
        this.emitEvent('pointerCancel', [
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

},{"5e002a009fae883c":"cYzr6"}],"5sFqy":[function(require,module,exports,__globalThis) {
// prev/next buttons
(function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'unipointer/unipointer',
        'fizzy-ui-utils/utils'
    ], function(Flickity, Unipointer, utils) {
        return factory(window1, Flickity, Unipointer, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("86c844a3c95b4c7b"), require("f19d11d2c4d740a0"), require("3f52ff90f00cdcb1"));
    else // browser global
    factory(window1, window1.Flickity, window1.Unipointer, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, Unipointer, utils) {
    'use strict';
    var svgURI = 'http://www.w3.org/2000/svg';
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
        var element = this.element = document.createElement('button');
        element.className = 'flickity-button flickity-prev-next-button';
        element.className += this.isPrevious ? ' previous' : ' next';
        // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
        element.setAttribute('type', 'button');
        // init as disabled
        this.disable();
        element.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next');
        // create arrow
        var svg = this.createSVG();
        element.appendChild(svg);
        // events
        this.parent.on('select', this.update.bind(this));
        this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
    };
    PrevNextButton.prototype.activate = function() {
        this.bindStartEvent(this.element);
        this.element.addEventListener('click', this);
        // add to DOM
        this.parent.element.appendChild(this.element);
    };
    PrevNextButton.prototype.deactivate = function() {
        // remove from DOM
        this.parent.element.removeChild(this.element);
        // click events
        this.unbindStartEvent(this.element);
        this.element.removeEventListener('click', this);
    };
    PrevNextButton.prototype.createSVG = function() {
        var svg = document.createElementNS(svgURI, 'svg');
        svg.setAttribute('class', 'flickity-button-icon');
        svg.setAttribute('viewBox', '0 0 100 100');
        var path = document.createElementNS(svgURI, 'path');
        var pathMovements = getArrowMovements(this.parent.options.arrowShape);
        path.setAttribute('d', pathMovements);
        path.setAttribute('class', 'arrow');
        // rotate arrow
        if (!this.isLeft) path.setAttribute('transform', 'translate(100, 100) rotate(180) ');
        svg.appendChild(path);
        return svg;
    };
    // get SVG path movmement
    function getArrowMovements(shape) {
        // use shape as movement if string
        if (typeof shape == 'string') return shape;
        // create movement string
        return 'M ' + shape.x0 + ',50' + ' L ' + shape.x1 + ',' + (shape.y1 + 50) + ' L ' + shape.x2 + ',' + (shape.y2 + 50) + ' L ' + shape.x3 + ',50 ' + ' L ' + shape.x2 + ',' + (50 - shape.y2) + ' L ' + shape.x1 + ',' + (50 - shape.y1) + ' Z';
    }
    PrevNextButton.prototype.handleEvent = utils.handleEvent;
    PrevNextButton.prototype.onclick = function() {
        if (!this.isEnabled) return;
        this.parent.uiChange();
        var method = this.isPrevious ? 'previous' : 'next';
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
        var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
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
    Flickity.createMethods.push('_createPrevNextButtons');
    var proto = Flickity.prototype;
    proto._createPrevNextButtons = function() {
        if (!this.options.prevNextButtons) return;
        this.prevButton = new PrevNextButton(-1, this);
        this.nextButton = new PrevNextButton(1, this);
        this.on('activate', this.activatePrevNextButtons);
    };
    proto.activatePrevNextButtons = function() {
        this.prevButton.activate();
        this.nextButton.activate();
        this.on('deactivate', this.deactivatePrevNextButtons);
    };
    proto.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate();
        this.nextButton.deactivate();
        this.off('deactivate', this.deactivatePrevNextButtons);
    };
    // --------------------------  -------------------------- //
    Flickity.PrevNextButton = PrevNextButton;
    return Flickity;
});

},{"86c844a3c95b4c7b":"lqXaA","f19d11d2c4d740a0":"8cmqm","3f52ff90f00cdcb1":"l5E56"}],"aRztI":[function(require,module,exports,__globalThis) {
// page dots
(function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'unipointer/unipointer',
        'fizzy-ui-utils/utils'
    ], function(Flickity, Unipointer, utils) {
        return factory(window1, Flickity, Unipointer, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("21635259d02ab6d4"), require("c9357f33874c5116"), require("c50c0cd4d2022f0d"));
    else // browser global
    factory(window1, window1.Flickity, window1.Unipointer, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, Unipointer, utils) {
    // -------------------------- PageDots -------------------------- //
    'use strict';
    function PageDots(parent) {
        this.parent = parent;
        this._create();
    }
    PageDots.prototype = Object.create(Unipointer.prototype);
    PageDots.prototype._create = function() {
        // create holder element
        this.holder = document.createElement('ol');
        this.holder.className = 'flickity-page-dots';
        // create dots, array of elements
        this.dots = [];
        // events
        this.handleClick = this.onClick.bind(this);
        this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
    };
    PageDots.prototype.activate = function() {
        this.setDots();
        this.holder.addEventListener('click', this.handleClick);
        this.bindStartEvent(this.holder);
        // add to DOM
        this.parent.element.appendChild(this.holder);
    };
    PageDots.prototype.deactivate = function() {
        this.holder.removeEventListener('click', this.handleClick);
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
            var dot = document.createElement('li');
            dot.className = 'dot';
            dot.setAttribute('aria-label', 'Page dot ' + (i + 1));
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
            this.selectedDot.className = 'dot';
            this.selectedDot.removeAttribute('aria-current');
        }
        // don't proceed if no dots
        if (!this.dots.length) return;
        this.selectedDot = this.dots[this.parent.selectedIndex];
        this.selectedDot.className = 'dot is-selected';
        this.selectedDot.setAttribute('aria-current', 'step');
    };
    PageDots.prototype.onTap = PageDots.prototype.onClick = function(event) {
        var target = event.target;
        // only care about dot clicks
        if (target.nodeName != 'LI') return;
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
    Flickity.createMethods.push('_createPageDots');
    var proto = Flickity.prototype;
    proto._createPageDots = function() {
        if (!this.options.pageDots) return;
        this.pageDots = new PageDots(this);
        // events
        this.on('activate', this.activatePageDots);
        this.on('select', this.updateSelectedPageDots);
        this.on('cellChange', this.updatePageDots);
        this.on('resize', this.updatePageDots);
        this.on('deactivate', this.deactivatePageDots);
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

},{"21635259d02ab6d4":"lqXaA","c9357f33874c5116":"8cmqm","c50c0cd4d2022f0d":"l5E56"}],"9u4yR":[function(require,module,exports,__globalThis) {
// player & autoPlay
(function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        'ev-emitter/ev-emitter',
        'fizzy-ui-utils/utils',
        './flickity'
    ], function(EvEmitter, utils, Flickity) {
        return factory(EvEmitter, utils, Flickity);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("ca77fcfb076b879"), require("96169aea6b8aee65"), require("43c2ad06d8fc3b6"));
    else // browser global
    factory(window1.EvEmitter, window1.fizzyUIUtils, window1.Flickity);
})(window, function factory(EvEmitter, utils, Flickity) {
    'use strict';
    // -------------------------- Player -------------------------- //
    function Player(parent) {
        this.parent = parent;
        this.state = 'stopped';
        // visibility change event handler
        this.onVisibilityChange = this.visibilityChange.bind(this);
        this.onVisibilityPlay = this.visibilityPlay.bind(this);
    }
    Player.prototype = Object.create(EvEmitter.prototype);
    // start play
    Player.prototype.play = function() {
        if (this.state == 'playing') return;
        // do not play if page is hidden, start playing when page is visible
        var isPageHidden = document.hidden;
        if (isPageHidden) {
            document.addEventListener('visibilitychange', this.onVisibilityPlay);
            return;
        }
        this.state = 'playing';
        // listen to visibility change
        document.addEventListener('visibilitychange', this.onVisibilityChange);
        // start ticking
        this.tick();
    };
    Player.prototype.tick = function() {
        // do not tick if not playing
        if (this.state != 'playing') return;
        var time = this.parent.options.autoPlay;
        // default to 3 seconds
        time = typeof time == 'number' ? time : 3000;
        var _this = this;
        // HACK: reset ticks if stopped and started within interval
        this.clear();
        this.timeout = setTimeout(function() {
            _this.parent.next(true);
            _this.tick();
        }, time);
    };
    Player.prototype.stop = function() {
        this.state = 'stopped';
        this.clear();
        // remove visibility change event
        document.removeEventListener('visibilitychange', this.onVisibilityChange);
    };
    Player.prototype.clear = function() {
        clearTimeout(this.timeout);
    };
    Player.prototype.pause = function() {
        if (this.state == 'playing') {
            this.state = 'paused';
            this.clear();
        }
    };
    Player.prototype.unpause = function() {
        // re-start play if paused
        if (this.state == 'paused') this.play();
    };
    // pause if page visibility is hidden, unpause if visible
    Player.prototype.visibilityChange = function() {
        var isPageHidden = document.hidden;
        this[isPageHidden ? 'pause' : 'unpause']();
    };
    Player.prototype.visibilityPlay = function() {
        this.play();
        document.removeEventListener('visibilitychange', this.onVisibilityPlay);
    };
    // -------------------------- Flickity -------------------------- //
    utils.extend(Flickity.defaults, {
        pauseAutoPlayOnHover: true
    });
    Flickity.createMethods.push('_createPlayer');
    var proto = Flickity.prototype;
    proto._createPlayer = function() {
        this.player = new Player(this);
        this.on('activate', this.activatePlayer);
        this.on('uiChange', this.stopPlayer);
        this.on('pointerDown', this.stopPlayer);
        this.on('deactivate', this.deactivatePlayer);
    };
    proto.activatePlayer = function() {
        if (!this.options.autoPlay) return;
        this.player.play();
        this.element.addEventListener('mouseenter', this);
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
        this.element.removeEventListener('mouseenter', this);
    };
    // ----- mouseenter/leave ----- //
    // pause auto-play on hover
    proto.onmouseenter = function() {
        if (!this.options.pauseAutoPlayOnHover) return;
        this.player.pause();
        this.element.addEventListener('mouseleave', this);
    };
    // resume auto-play on hover off
    proto.onmouseleave = function() {
        this.player.unpause();
        this.element.removeEventListener('mouseleave', this);
    };
    // -----  ----- //
    Flickity.Player = Player;
    return Flickity;
});

},{"ca77fcfb076b879":"cYzr6","96169aea6b8aee65":"l5E56","43c2ad06d8fc3b6":"lqXaA"}],"ewQZE":[function(require,module,exports,__globalThis) {
// add, remove cell
(function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'fizzy-ui-utils/utils'
    ], function(Flickity, utils) {
        return factory(window1, Flickity, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("d506693eb6a3628"), require("e88457f9dcce248b"));
    else // browser global
    factory(window1, window1.Flickity, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, utils) {
    'use strict';
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
        this.emitEvent('cellChange', [
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

},{"d506693eb6a3628":"lqXaA","e88457f9dcce248b":"l5E56"}],"73rKt":[function(require,module,exports,__globalThis) {
// lazyload
(function(window1, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'fizzy-ui-utils/utils'
    ], function(Flickity, utils) {
        return factory(window1, Flickity, utils);
    });
    else if (0, module.exports) // CommonJS
    module.exports = factory(window1, require("74a714f84255b2e2"), require("fa4aaf42fafa550b"));
    else // browser global
    factory(window1, window1.Flickity, window1.fizzyUIUtils);
})(window, function factory(window1, Flickity, utils) {
    'use strict';
    Flickity.createMethods.push('_createLazyload');
    var proto = Flickity.prototype;
    proto._createLazyload = function() {
        this.on('select', this.lazyLoad);
    };
    proto.lazyLoad = function() {
        var lazyLoad = this.options.lazyLoad;
        if (!lazyLoad) return;
        // get adjacent cells, use lazyLoad option for adjacent count
        var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
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
        if (cellElem.nodeName == 'IMG') {
            var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
            var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
            var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');
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
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        // get src & srcset
        var src = this.img.getAttribute('data-flickity-lazyload') || this.img.getAttribute('data-flickity-lazyload-src');
        var srcset = this.img.getAttribute('data-flickity-lazyload-srcset');
        // set src & serset
        this.img.src = src;
        if (srcset) this.img.setAttribute('srcset', srcset);
        // remove attr
        this.img.removeAttribute('data-flickity-lazyload');
        this.img.removeAttribute('data-flickity-lazyload-src');
        this.img.removeAttribute('data-flickity-lazyload-srcset');
    };
    LazyLoader.prototype.onload = function(event) {
        this.complete(event, 'flickity-lazyloaded');
    };
    LazyLoader.prototype.onerror = function(event) {
        this.complete(event, 'flickity-lazyerror');
    };
    LazyLoader.prototype.complete = function(event, className) {
        // unbind events
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
        var cell = this.flickity.getParentCell(this.img);
        var cellElem = cell && cell.element;
        this.flickity.cellSizeChange(cellElem);
        this.img.classList.add(className);
        this.flickity.dispatchEvent('lazyLoad', event, cellElem);
    };
    // -----  ----- //
    Flickity.LazyLoader = LazyLoader;
    return Flickity;
});

},{"74a714f84255b2e2":"lqXaA","fa4aaf42fafa550b":"l5E56"}],"70hii":[function(require,module,exports,__globalThis) {
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

},{}],"hQAdq":[function(require,module,exports,__globalThis) {
/*
 * anime.js v3.2.2
 * (c) 2023 Julian Garnier
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
    direction: 'normal',
    autoplay: true,
    timelineOffset: 0
};
var defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0
};
var validTransforms = [
    'translateX',
    'translateY',
    'translateZ',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'scale',
    'scaleX',
    'scaleY',
    'scaleZ',
    'skew',
    'skewX',
    'skewY',
    'perspective',
    'matrix',
    'matrix3d'
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
        return stringContains(Object.prototype.toString.call(a), 'Object');
    },
    pth: function(a) {
        return is.obj(a) && a.hasOwnProperty('totalLength');
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
        return typeof a === 'string';
    },
    fnc: function(a) {
        return typeof a === 'function';
    },
    und: function(a) {
        return typeof a === 'undefined';
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
        return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
    }
};
// Easings
function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(',').map(function(p) {
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
        Expo: function() {
            return function(t) {
                return t ? Math.pow(2, 10 * t - 10) : 0;
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
        'Quad',
        'Cubic',
        'Quart',
        'Quint'
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
        eases['easeIn' + name] = easeIn;
        eases['easeOut' + name] = function(a, b) {
            return function(t) {
                return 1 - easeIn(a, b)(1 - t);
            };
        };
        eases['easeInOut' + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
            };
        };
        eases['easeOutIn' + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
            };
        };
    });
    return eases;
}();
function parseEasings(easing, duration) {
    if (is.fnc(easing)) return easing;
    var name = easing.split('(')[0];
    var ease = penner[name];
    var args = parseEasingParameters(easing);
    switch(name){
        case 'spring':
            return spring(easing, duration);
        case 'cubicBezier':
            return applyArguments(bezier, args);
        case 'steps':
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
    if (stringContains(propName, 'translate') || propName === 'perspective') return 'px';
    if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) return 'deg';
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
        'deg',
        'rad',
        'turn'
    ], valueUnit)) return value;
    var cached = cache.CSS[value + unit];
    if (!is.und(cached)) return cached;
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = 'absolute';
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
}
function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
        var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
        return unit ? convertPxToUnit(el, value, unit) : value;
    }
}
function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) return 'attribute';
    if (is.dom(el) && arrayContains(validTransforms, prop)) return 'transform';
    if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) return 'css';
    if (el[prop] != null) return 'object';
}
function getElementTransforms(el) {
    if (!is.dom(el)) return;
    var str = el.style.transform || '';
    var reg = /(\w+)\(([^)]*)\)/g;
    var transforms = new Map();
    var m;
    while(m = reg.exec(str))transforms.set(m[1], m[2]);
    return transforms;
}
function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
    if (animatable) {
        animatable.transforms.list.set(propName, value);
        animatable.transforms['last'] = propName;
    }
    return unit ? convertPxToUnit(el, value, unit) : value;
}
function getOriginalTargetValue(target, propName, unit, animatable) {
    switch(getAnimationType(target, propName)){
        case 'transform':
            return getTransformValue(target, propName, animatable, unit);
        case 'css':
            return getCSSValue(target, propName, unit);
        case 'attribute':
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
    var y = parseFloat(to.replace(operator[0], ''));
    switch(operator[0][0]){
        case '+':
            return x + y + u;
        case '-':
            return x - y + u;
        case '*':
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
    return Math.PI * 2 * getAttribute(el, 'r');
}
function getRectLength(el) {
    return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}
function getLineLength(el) {
    return getDistance({
        x: getAttribute(el, 'x1'),
        y: getAttribute(el, 'y1')
    }, {
        x: getAttribute(el, 'x2'),
        y: getAttribute(el, 'y2')
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
        case 'circle':
            return getCircleLength(el);
        case 'rect':
            return getRectLength(el);
        case 'line':
            return getLineLength(el);
        case 'polyline':
            return getPolylineLength(el);
        case 'polygon':
            return getPolygonLength(el);
    }
}
function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute('stroke-dasharray', pathLength);
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
    var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [
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
        case 'x':
            return (p.x - svg.x) * scaleX;
        case 'y':
            return (p.y - svg.y) * scaleY;
        case 'angle':
            return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
}
// Decompose value
function decomposeValue(val, unit) {
    // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
    // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
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
            var str = '';
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
    if (typeof document !== 'undefined') document.addEventListener('visibilitychange', handleVisibilityChange);
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
        if (direction !== 'alternate') instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
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
                        if (!b) progress += n$1 + ' ';
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
            setCallback('begin');
        }
        if (!instance.loopBegan && instance.currentTime > 0) {
            instance.loopBegan = true;
            setCallback('loopBegin');
        }
        if (insTime <= insDelay && instance.currentTime !== 0) setAnimationsProgress(0);
        if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) setAnimationsProgress(insDuration);
        if (insTime > insDelay && insTime < insEndDelay) {
            if (!instance.changeBegan) {
                instance.changeBegan = true;
                instance.changeCompleted = false;
                setCallback('changeBegin');
            }
            setCallback('change');
            setAnimationsProgress(insTime);
        } else if (instance.changeBegan) {
            instance.changeCompleted = true;
            instance.changeBegan = false;
            setCallback('changeComplete');
        }
        instance.currentTime = minMax(insTime, 0, insDuration);
        if (instance.began) setCallback('update');
        if (engineTime >= insDuration) {
            lastTime = 0;
            countIteration();
            if (!instance.remaining) {
                instance.paused = true;
                if (!instance.completed) {
                    instance.completed = true;
                    setCallback('loopComplete');
                    setCallback('complete');
                    if (!instance.passThrough && 'Promise' in window) {
                        resolve();
                        promise = makePromise(instance);
                    }
                }
            } else {
                startTime = now;
                setCallback('loopComplete');
                instance.loopBegan = false;
                if (instance.direction === 'alternate') toggleInstanceDirection();
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
        instance.reversed = direction === 'reverse';
        instance.remaining = instance.loop;
        children = instance.children;
        childrenLength = children.length;
        for(var i = childrenLength; i--;)instance.children[i].reset();
        if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) instance.remaining++;
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
    var direction = params.direction || 'normal';
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === 'first';
    var fromCenter = fromIndex === 'center';
    var fromLast = fromIndex === 'last';
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
                    if (axis === 'x') value = -distanceX;
                    if (axis === 'y') value = -distanceY;
                    values.push(value);
                }
                maxValue = Math.max.apply(Math, values);
            }
            if (easing) values = values.map(function(val) {
                return easing(val / maxValue) * maxValue;
            });
            if (direction === 'reverse') values = values.map(function(val) {
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
anime.version = '3.2.1';
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"lqRij":[function(require,module,exports,__globalThis) {
/*! choices.js v11.0.6 | © 2025 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ /******************************************************************************
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
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Choices);
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
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
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
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" && SuppressedError;
var ActionType = {
    ADD_CHOICE: 'ADD_CHOICE',
    REMOVE_CHOICE: 'REMOVE_CHOICE',
    FILTER_CHOICES: 'FILTER_CHOICES',
    ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
    CLEAR_CHOICES: 'CLEAR_CHOICES',
    ADD_GROUP: 'ADD_GROUP',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM'
};
var EventType = {
    showDropdown: 'showDropdown',
    hideDropdown: 'hideDropdown',
    change: 'change',
    choice: 'choice',
    search: 'search',
    addItem: 'addItem',
    removeItem: 'removeItem',
    highlightItem: 'highlightItem',
    highlightChoice: 'highlightChoice',
    unhighlightItem: 'unhighlightItem'
};
var KeyCodeMap = {
    TAB_KEY: 9,
    SHIFT_KEY: 16,
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
var ObjectsInConfig = [
    'fuseOptions',
    'classNames'
];
var PassedElementTypes = {
    Text: 'text',
    SelectOne: 'select-one',
    SelectMultiple: 'select-multiple'
};
var addChoice = function(choice) {
    return {
        type: ActionType.ADD_CHOICE,
        choice: choice
    };
};
var removeChoice = function(choice) {
    return {
        type: ActionType.REMOVE_CHOICE,
        choice: choice
    };
};
var filterChoices = function(results) {
    return {
        type: ActionType.FILTER_CHOICES,
        results: results
    };
};
var activateChoices = function(active) {
    return {
        type: ActionType.ACTIVATE_CHOICES,
        active: active
    };
};
var addGroup = function(group) {
    return {
        type: ActionType.ADD_GROUP,
        group: group
    };
};
var addItem = function(item) {
    return {
        type: ActionType.ADD_ITEM,
        item: item
    };
};
var removeItem$1 = function(item) {
    return {
        type: ActionType.REMOVE_ITEM,
        item: item
    };
};
var highlightItem = function(item, highlighted) {
    return {
        type: ActionType.HIGHLIGHT_ITEM,
        item: item,
        highlighted: highlighted
    };
};
var getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
var generateChars = function(length) {
    return Array.from({
        length: length
    }, function() {
        return getRandomNumber(0, 36).toString(36);
    }).join('');
};
var generateId = function(element, prefix) {
    var id = element.id || element.name && "".concat(element.name, "-").concat(generateChars(2)) || generateChars(4);
    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = "".concat(prefix, "-").concat(id);
    return id;
};
var getAdjacentEl = function(startEl, selector, direction) {
    if (direction === void 0) direction = 1;
    var prop = "".concat(direction > 0 ? 'next' : 'previous', "ElementSibling");
    var sibling = startEl[prop];
    while(sibling){
        if (sibling.matches(selector)) return sibling;
        sibling = sibling[prop];
    }
    return null;
};
var isScrolledIntoView = function(element, parent, direction) {
    if (direction === void 0) direction = 1;
    var isVisible;
    if (direction > 0) // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
    else // In view from top
    isVisible = element.offsetTop >= parent.scrollTop;
    return isVisible;
};
var sanitise = function(value) {
    if (typeof value !== 'string') {
        if (value === null || value === undefined) return '';
        if (typeof value === 'object') {
            if ('raw' in value) return sanitise(value.raw);
            if ('trusted' in value) return value.trusted;
        }
        return value;
    }
    return value.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/'/g, '&#039;').replace(/"/g, '&quot;');
};
var strToEl = function() {
    var tmpEl = document.createElement('div');
    return function(str) {
        tmpEl.innerHTML = str.trim();
        var firstChild = tmpEl.children[0];
        while(tmpEl.firstChild)tmpEl.removeChild(tmpEl.firstChild);
        return firstChild;
    };
}();
var resolveNoticeFunction = function(fn, value) {
    return typeof fn === 'function' ? fn(sanitise(value), value) : fn;
};
var resolveStringFunction = function(fn) {
    return typeof fn === 'function' ? fn() : fn;
};
var unwrapStringForRaw = function(s) {
    if (typeof s === 'string') return s;
    if (typeof s === 'object') {
        if ('trusted' in s) return s.trusted;
        if ('raw' in s) return s.raw;
    }
    return '';
};
var unwrapStringForEscaped = function(s) {
    if (typeof s === 'string') return s;
    if (typeof s === 'object') {
        if ('escaped' in s) return s.escaped;
        if ('trusted' in s) return s.trusted;
    }
    return '';
};
var escapeForTemplate = function(allowHTML, s) {
    return allowHTML ? unwrapStringForEscaped(s) : sanitise(s);
};
var setElementHtml = function(el, allowHtml, html) {
    el.innerHTML = escapeForTemplate(allowHtml, html);
};
var sortByAlpha = function(_a, _b) {
    var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
    var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
    return unwrapStringForRaw(label).localeCompare(unwrapStringForRaw(label2), [], {
        sensitivity: 'base',
        ignorePunctuation: true,
        numeric: true
    });
};
var sortByRank = function(a, b) {
    return a.rank - b.rank;
};
var dispatchEvent = function(element, type, customArgs) {
    if (customArgs === void 0) customArgs = null;
    var event = new CustomEvent(type, {
        detail: customArgs,
        bubbles: true,
        cancelable: true
    });
    return element.dispatchEvent(event);
};
/**
 * Returns an array of keys present on the first but missing on the second object
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
var diff = function(a, b) {
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    return aKeys.filter(function(i) {
        return bKeys.indexOf(i) < 0;
    });
};
var getClassNames = function(ClassNames) {
    return Array.isArray(ClassNames) ? ClassNames : [
        ClassNames
    ];
};
var getClassNamesSelector = function(option) {
    if (option && Array.isArray(option)) return option.map(function(item) {
        return ".".concat(item);
    }).join('');
    return ".".concat(option);
};
var addClassesToElement = function(element, className) {
    var _a;
    (_a = element.classList).add.apply(_a, getClassNames(className));
};
var removeClassesFromElement = function(element, className) {
    var _a;
    (_a = element.classList).remove.apply(_a, getClassNames(className));
};
var parseCustomProperties = function(customProperties) {
    if (typeof customProperties !== 'undefined') try {
        return JSON.parse(customProperties);
    } catch (e) {
        return customProperties;
    }
    return {};
};
var updateClassList = function(item, add, remove) {
    var itemEl = item.itemEl;
    if (itemEl) {
        removeClassesFromElement(itemEl, remove);
        addClassesToElement(itemEl, add);
    }
};
var Dropdown = /** @class */ function() {
    function Dropdown(_a) {
        var element = _a.element, type = _a.type, classNames = _a.classNames;
        this.element = element;
        this.classNames = classNames;
        this.type = type;
        this.isActive = false;
    }
    /**
     * Show dropdown to user by adding active state class
     */ Dropdown.prototype.show = function() {
        addClassesToElement(this.element, this.classNames.activeState);
        this.element.setAttribute('aria-expanded', 'true');
        this.isActive = true;
        return this;
    };
    /**
     * Hide dropdown from user
     */ Dropdown.prototype.hide = function() {
        removeClassesFromElement(this.element, this.classNames.activeState);
        this.element.setAttribute('aria-expanded', 'false');
        this.isActive = false;
        return this;
    };
    return Dropdown;
}();
var Container = /** @class */ function() {
    function Container(_a) {
        var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
        this.element = element;
        this.classNames = classNames;
        this.type = type;
        this.position = position;
        this.isOpen = false;
        this.isFlipped = false;
        this.isDisabled = false;
        this.isLoading = false;
    }
    /**
     * Determine whether container should be flipped based on passed
     * dropdown position
     */ Container.prototype.shouldFlip = function(dropdownPos, dropdownHeight) {
        // If flip is enabled and the dropdown bottom position is
        // greater than the window height flip the dropdown.
        var shouldFlip = false;
        if (this.position === 'auto') shouldFlip = this.element.getBoundingClientRect().top - dropdownHeight >= 0 && !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
        else if (this.position === 'top') shouldFlip = true;
        return shouldFlip;
    };
    Container.prototype.setActiveDescendant = function(activeDescendantID) {
        this.element.setAttribute('aria-activedescendant', activeDescendantID);
    };
    Container.prototype.removeActiveDescendant = function() {
        this.element.removeAttribute('aria-activedescendant');
    };
    Container.prototype.open = function(dropdownPos, dropdownHeight) {
        addClassesToElement(this.element, this.classNames.openState);
        this.element.setAttribute('aria-expanded', 'true');
        this.isOpen = true;
        if (this.shouldFlip(dropdownPos, dropdownHeight)) {
            addClassesToElement(this.element, this.classNames.flippedState);
            this.isFlipped = true;
        }
    };
    Container.prototype.close = function() {
        removeClassesFromElement(this.element, this.classNames.openState);
        this.element.setAttribute('aria-expanded', 'false');
        this.removeActiveDescendant();
        this.isOpen = false;
        // A dropdown flips if it does not have space within the page
        if (this.isFlipped) {
            removeClassesFromElement(this.element, this.classNames.flippedState);
            this.isFlipped = false;
        }
    };
    Container.prototype.addFocusState = function() {
        addClassesToElement(this.element, this.classNames.focusState);
    };
    Container.prototype.removeFocusState = function() {
        removeClassesFromElement(this.element, this.classNames.focusState);
    };
    Container.prototype.enable = function() {
        removeClassesFromElement(this.element, this.classNames.disabledState);
        this.element.removeAttribute('aria-disabled');
        if (this.type === PassedElementTypes.SelectOne) this.element.setAttribute('tabindex', '0');
        this.isDisabled = false;
    };
    Container.prototype.disable = function() {
        addClassesToElement(this.element, this.classNames.disabledState);
        this.element.setAttribute('aria-disabled', 'true');
        if (this.type === PassedElementTypes.SelectOne) this.element.setAttribute('tabindex', '-1');
        this.isDisabled = true;
    };
    Container.prototype.wrap = function(element) {
        var el = this.element;
        var parentNode = element.parentNode;
        if (parentNode) {
            if (element.nextSibling) parentNode.insertBefore(el, element.nextSibling);
            else parentNode.appendChild(el);
        }
        el.appendChild(element);
    };
    Container.prototype.unwrap = function(element) {
        var el = this.element;
        var parentNode = el.parentNode;
        if (parentNode) {
            // Move passed element outside this element
            parentNode.insertBefore(element, el);
            // Remove this element
            parentNode.removeChild(el);
        }
    };
    Container.prototype.addLoadingState = function() {
        addClassesToElement(this.element, this.classNames.loadingState);
        this.element.setAttribute('aria-busy', 'true');
        this.isLoading = true;
    };
    Container.prototype.removeLoadingState = function() {
        removeClassesFromElement(this.element, this.classNames.loadingState);
        this.element.removeAttribute('aria-busy');
        this.isLoading = false;
    };
    return Container;
}();
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
            return this.element.value;
        },
        set: function(value) {
            this.element.value = value;
        },
        enumerable: false,
        configurable: true
    });
    Input.prototype.addEventListeners = function() {
        var el = this.element;
        el.addEventListener('paste', this._onPaste);
        el.addEventListener('input', this._onInput, {
            passive: true
        });
        el.addEventListener('focus', this._onFocus, {
            passive: true
        });
        el.addEventListener('blur', this._onBlur, {
            passive: true
        });
    };
    Input.prototype.removeEventListeners = function() {
        var el = this.element;
        el.removeEventListener('input', this._onInput);
        el.removeEventListener('paste', this._onPaste);
        el.removeEventListener('focus', this._onFocus);
        el.removeEventListener('blur', this._onBlur);
    };
    Input.prototype.enable = function() {
        var el = this.element;
        el.removeAttribute('disabled');
        this.isDisabled = false;
    };
    Input.prototype.disable = function() {
        var el = this.element;
        el.setAttribute('disabled', '');
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
        this.element.value = '';
        if (setWidth) this.setWidth();
        return this;
    };
    /**
     * Set the correct input width based on placeholder
     * value or input value
     */ Input.prototype.setWidth = function() {
        // Resize input to contents or placeholder
        var element = this.element;
        element.style.minWidth = "".concat(element.placeholder.length + 1, "ch");
        element.style.width = "".concat(element.value.length + 1, "ch");
    };
    Input.prototype.setActiveDescendant = function(activeDescendantID) {
        this.element.setAttribute('aria-activedescendant', activeDescendantID);
    };
    Input.prototype.removeActiveDescendant = function() {
        this.element.removeAttribute('aria-activedescendant');
    };
    Input.prototype._onInput = function() {
        if (this.type !== PassedElementTypes.SelectOne) this.setWidth();
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
var SCROLLING_SPEED = 4;
var List = /** @class */ function() {
    function List(_a) {
        var element = _a.element;
        this.element = element;
        this.scrollPos = this.element.scrollTop;
        this.height = this.element.offsetHeight;
    }
    List.prototype.prepend = function(node) {
        var child = this.element.firstElementChild;
        if (child) this.element.insertBefore(node, child);
        else this.element.append(node);
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
        var strength = SCROLLING_SPEED;
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
var WrappedElement = /** @class */ function() {
    function WrappedElement(_a) {
        var element = _a.element, classNames = _a.classNames;
        this.element = element;
        this.classNames = classNames;
        this.isDisabled = false;
    }
    Object.defineProperty(WrappedElement.prototype, "isActive", {
        get: function() {
            return this.element.dataset.choice === 'active';
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
            this.element.setAttribute('value', value);
            this.element.value = value;
        },
        enumerable: false,
        configurable: true
    });
    WrappedElement.prototype.conceal = function() {
        var el = this.element;
        // Hide passed input
        addClassesToElement(el, this.classNames.input);
        el.hidden = true;
        // Remove element from tab index
        el.tabIndex = -1;
        // Backup original styles if any
        var origStyle = el.getAttribute('style');
        if (origStyle) el.setAttribute('data-choice-orig-style', origStyle);
        el.setAttribute('data-choice', 'active');
    };
    WrappedElement.prototype.reveal = function() {
        var el = this.element;
        // Reinstate passed element
        removeClassesFromElement(el, this.classNames.input);
        el.hidden = false;
        el.removeAttribute('tabindex');
        // Recover original styles if any
        var origStyle = el.getAttribute('data-choice-orig-style');
        if (origStyle) {
            el.removeAttribute('data-choice-orig-style');
            el.setAttribute('style', origStyle);
        } else el.removeAttribute('style');
        el.removeAttribute('data-choice');
    };
    WrappedElement.prototype.enable = function() {
        this.element.removeAttribute('disabled');
        this.element.disabled = false;
        this.isDisabled = false;
    };
    WrappedElement.prototype.disable = function() {
        this.element.setAttribute('disabled', '');
        this.element.disabled = true;
        this.isDisabled = true;
    };
    WrappedElement.prototype.triggerEvent = function(eventType, data) {
        dispatchEvent(this.element, eventType, data || {});
    };
    return WrappedElement;
}();
var WrappedInput = /** @class */ function(_super) {
    __extends(WrappedInput, _super);
    function WrappedInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WrappedInput;
}(WrappedElement);
var coerceBool = function(arg, defaultValue) {
    if (defaultValue === void 0) defaultValue = true;
    return typeof arg === 'undefined' ? defaultValue : !!arg;
};
var stringToHtmlClass = function(input) {
    if (typeof input === 'string') // eslint-disable-next-line no-param-reassign
    input = input.split(' ').filter(function(s) {
        return s.length;
    });
    if (Array.isArray(input) && input.length) return input;
    return undefined;
};
var mapInputToChoice = function(value, allowGroup, allowRawString) {
    if (allowRawString === void 0) allowRawString = true;
    if (typeof value === 'string') {
        var sanitisedValue = sanitise(value);
        var userValue = allowRawString || sanitisedValue === value ? value : {
            escaped: sanitisedValue,
            raw: value
        };
        var result_1 = mapInputToChoice({
            value: value,
            label: userValue,
            selected: true
        }, false);
        return result_1;
    }
    var groupOrChoice = value;
    if ('choices' in groupOrChoice) {
        if (!allowGroup) // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
        throw new TypeError("optGroup is not allowed");
        var group = groupOrChoice;
        var choices = group.choices.map(function(e) {
            return mapInputToChoice(e, false);
        });
        var result_2 = {
            id: 0,
            label: unwrapStringForRaw(group.label) || group.value,
            active: !!choices.length,
            disabled: !!group.disabled,
            choices: choices
        };
        return result_2;
    }
    var choice = groupOrChoice;
    var result = {
        id: 0,
        group: null,
        score: 0,
        rank: 0,
        value: choice.value,
        label: choice.label || choice.value,
        active: coerceBool(choice.active),
        selected: coerceBool(choice.selected, false),
        disabled: coerceBool(choice.disabled, false),
        placeholder: coerceBool(choice.placeholder, false),
        highlighted: false,
        labelClass: stringToHtmlClass(choice.labelClass),
        labelDescription: choice.labelDescription,
        customProperties: choice.customProperties
    };
    return result;
};
var isHtmlInputElement = function(e) {
    return e.tagName === 'INPUT';
};
var isHtmlSelectElement = function(e) {
    return e.tagName === 'SELECT';
};
var isHtmlOption = function(e) {
    return e.tagName === 'OPTION';
};
var isHtmlOptgroup = function(e) {
    return e.tagName === 'OPTGROUP';
};
var WrappedSelect = /** @class */ function(_super) {
    __extends(WrappedSelect, _super);
    function WrappedSelect(_a) {
        var element = _a.element, classNames = _a.classNames, template = _a.template, extractPlaceholder = _a.extractPlaceholder;
        var _this = _super.call(this, {
            element: element,
            classNames: classNames
        }) || this;
        _this.template = template;
        _this.extractPlaceholder = extractPlaceholder;
        return _this;
    }
    Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
        get: function() {
            return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
            this.element.querySelector('option[placeholder]');
        },
        enumerable: false,
        configurable: true
    });
    WrappedSelect.prototype.addOptions = function(choices) {
        var _this = this;
        var fragment = document.createDocumentFragment();
        choices.forEach(function(obj) {
            var choice = obj;
            if (choice.element) return;
            var option = _this.template(choice);
            fragment.appendChild(option);
            choice.element = option;
        });
        this.element.appendChild(fragment);
    };
    WrappedSelect.prototype.optionsAsChoices = function() {
        var _this = this;
        var choices = [];
        this.element.querySelectorAll(':scope > option, :scope > optgroup').forEach(function(e) {
            if (isHtmlOption(e)) choices.push(_this._optionToChoice(e));
            else if (isHtmlOptgroup(e)) choices.push(_this._optgroupToChoice(e));
        // todo: hr as empty optgroup, requires displaying empty opt-groups to be useful
        });
        return choices;
    };
    // eslint-disable-next-line class-methods-use-this
    WrappedSelect.prototype._optionToChoice = function(option) {
        // option.value returns the label if there is no value attribute, which can break legacy placeholder attribute support
        if (!option.hasAttribute('value') && option.hasAttribute('placeholder')) {
            option.setAttribute('value', '');
            option.value = '';
        }
        return {
            id: 0,
            group: null,
            score: 0,
            rank: 0,
            value: option.value,
            label: option.innerText,
            element: option,
            active: true,
            // this returns true if nothing is selected on initial load, which will break placeholder support
            selected: this.extractPlaceholder ? option.selected : option.hasAttribute('selected'),
            disabled: option.disabled,
            highlighted: false,
            placeholder: this.extractPlaceholder && (!option.value || option.hasAttribute('placeholder')),
            labelClass: typeof option.dataset.labelClass !== 'undefined' ? stringToHtmlClass(option.dataset.labelClass) : undefined,
            labelDescription: typeof option.dataset.labelDescription !== 'undefined' ? option.dataset.labelDescription : undefined,
            customProperties: parseCustomProperties(option.dataset.customProperties)
        };
    };
    WrappedSelect.prototype._optgroupToChoice = function(optgroup) {
        var _this = this;
        var options = optgroup.querySelectorAll('option');
        var choices = Array.from(options).map(function(option) {
            return _this._optionToChoice(option);
        });
        return {
            id: 0,
            label: optgroup.label || '',
            element: optgroup,
            active: !!choices.length,
            disabled: optgroup.disabled,
            choices: choices
        };
    };
    return WrappedSelect;
}(WrappedElement);
var DEFAULT_CLASSNAMES = {
    containerOuter: [
        'choices'
    ],
    containerInner: [
        'choices__inner'
    ],
    input: [
        'choices__input'
    ],
    inputCloned: [
        'choices__input--cloned'
    ],
    list: [
        'choices__list'
    ],
    listItems: [
        'choices__list--multiple'
    ],
    listSingle: [
        'choices__list--single'
    ],
    listDropdown: [
        'choices__list--dropdown'
    ],
    item: [
        'choices__item'
    ],
    itemSelectable: [
        'choices__item--selectable'
    ],
    itemDisabled: [
        'choices__item--disabled'
    ],
    itemChoice: [
        'choices__item--choice'
    ],
    description: [
        'choices__description'
    ],
    placeholder: [
        'choices__placeholder'
    ],
    group: [
        'choices__group'
    ],
    groupHeading: [
        'choices__heading'
    ],
    button: [
        'choices__button'
    ],
    activeState: [
        'is-active'
    ],
    focusState: [
        'is-focused'
    ],
    openState: [
        'is-open'
    ],
    disabledState: [
        'is-disabled'
    ],
    highlightedState: [
        'is-highlighted'
    ],
    selectedState: [
        'is-selected'
    ],
    flippedState: [
        'is-flipped'
    ],
    loadingState: [
        'is-loading'
    ],
    notice: [
        'choices__notice'
    ],
    addChoice: [
        'choices__item--selectable',
        'add-choice'
    ],
    noResults: [
        'has-no-results'
    ],
    noChoices: [
        'has-no-choices'
    ]
};
var DEFAULT_CONFIG = {
    items: [],
    choices: [],
    silent: false,
    renderChoiceLimit: -1,
    maxItemCount: -1,
    closeDropdownOnSelect: 'auto',
    singleModeForMultiSelect: false,
    addChoices: false,
    addItems: true,
    addItemFilter: function(value) {
        return !!value && value !== '';
    },
    removeItems: true,
    removeItemButton: false,
    removeItemButtonAlignLeft: false,
    editItems: false,
    allowHTML: false,
    allowHtmlUserInput: false,
    duplicateItemsAllowed: true,
    delimiter: ',',
    paste: true,
    searchEnabled: true,
    searchChoices: true,
    searchFloor: 1,
    searchResultLimit: 4,
    searchFields: [
        'label',
        'value'
    ],
    position: 'auto',
    resetScrollPosition: true,
    shouldSort: true,
    shouldSortItems: false,
    sorter: sortByAlpha,
    shadowRoot: null,
    placeholder: true,
    placeholderValue: null,
    searchPlaceholderValue: null,
    prependValue: null,
    appendValue: null,
    renderSelectedChoices: 'auto',
    loadingText: 'Loading...',
    noResultsText: 'No results found',
    noChoicesText: 'No choices to choose from',
    itemSelectText: 'Press to select',
    uniqueItemText: 'Only unique values can be added',
    customAddItemText: 'Only values matching specific conditions can be added',
    addItemText: function(value) {
        return "Press Enter to add <b>\"".concat(value, "\"</b>");
    },
    removeItemIconText: function() {
        return "Remove item";
    },
    removeItemLabelText: function(value) {
        return "Remove item: ".concat(value);
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
    labelId: '',
    callbackOnInit: null,
    callbackOnCreateTemplates: null,
    classNames: DEFAULT_CLASSNAMES,
    appendGroupInSearch: false
};
var removeItem = function(item) {
    var itemEl = item.itemEl;
    if (itemEl) {
        itemEl.remove();
        item.itemEl = undefined;
    }
};
function items(s, action, context) {
    var state = s;
    var update = true;
    switch(action.type){
        case ActionType.ADD_ITEM:
            action.item.selected = true;
            var el = action.item.element;
            if (el) {
                el.selected = true;
                el.setAttribute('selected', '');
            }
            state.push(action.item);
            break;
        case ActionType.REMOVE_ITEM:
            action.item.selected = false;
            var el = action.item.element;
            if (el) {
                el.selected = false;
                el.removeAttribute('selected');
                // For a select-one, if all options are deselected, the first item is selected. To set a black value, select.value needs to be set
                var select = el.parentElement;
                if (select && isHtmlSelectElement(select) && select.type === PassedElementTypes.SelectOne) select.value = '';
            }
            // this is mixing concerns, but this is *so much faster*
            removeItem(action.item);
            state = state.filter(function(choice) {
                return choice.id !== action.item.id;
            });
            break;
        case ActionType.REMOVE_CHOICE:
            removeItem(action.choice);
            state = state.filter(function(item) {
                return item.id !== action.choice.id;
            });
            break;
        case ActionType.HIGHLIGHT_ITEM:
            var highlighted = action.highlighted;
            var item = state.find(function(obj) {
                return obj.id === action.item.id;
            });
            if (item && item.highlighted !== highlighted) {
                item.highlighted = highlighted;
                if (context) updateClassList(item, highlighted ? context.classNames.highlightedState : context.classNames.selectedState, highlighted ? context.classNames.selectedState : context.classNames.highlightedState);
            }
            break;
        default:
            update = false;
            break;
    }
    return {
        state: state,
        update: update
    };
}
function groups(s, action) {
    var state = s;
    var update = true;
    switch(action.type){
        case ActionType.ADD_GROUP:
            state.push(action.group);
            break;
        case ActionType.CLEAR_CHOICES:
            state = [];
            break;
        default:
            update = false;
            break;
    }
    return {
        state: state,
        update: update
    };
}
/* eslint-disable */ function choices(s, action, context) {
    var state = s;
    var update = true;
    switch(action.type){
        case ActionType.ADD_CHOICE:
            state.push(action.choice);
            break;
        case ActionType.REMOVE_CHOICE:
            action.choice.choiceEl = undefined;
            if (action.choice.group) action.choice.group.choices = action.choice.group.choices.filter(function(obj) {
                return obj.id !== action.choice.id;
            });
            state = state.filter(function(obj) {
                return obj.id !== action.choice.id;
            });
            break;
        case ActionType.ADD_ITEM:
        case ActionType.REMOVE_ITEM:
            action.item.choiceEl = undefined;
            break;
        case ActionType.FILTER_CHOICES:
            // avoid O(n^2) algorithm complexity when searching/filtering choices
            var scoreLookup_1 = [];
            action.results.forEach(function(result) {
                scoreLookup_1[result.item.id] = result;
            });
            state.forEach(function(choice) {
                var result = scoreLookup_1[choice.id];
                if (result !== undefined) {
                    choice.score = result.score;
                    choice.rank = result.rank;
                    choice.active = true;
                } else {
                    choice.score = 0;
                    choice.rank = 0;
                    choice.active = false;
                }
                if (context && context.appendGroupInSearch) choice.choiceEl = undefined;
            });
            break;
        case ActionType.ACTIVATE_CHOICES:
            state.forEach(function(choice) {
                choice.active = action.active;
                if (context && context.appendGroupInSearch) choice.choiceEl = undefined;
            });
            break;
        case ActionType.CLEAR_CHOICES:
            state = [];
            break;
        default:
            update = false;
            break;
    }
    return {
        state: state,
        update: update
    };
}
var reducers = {
    groups: groups,
    items: items,
    choices: choices
};
var Store = /** @class */ function() {
    function Store(context) {
        this._state = this.defaultState;
        this._listeners = [];
        this._txn = 0;
        this._context = context;
    }
    Object.defineProperty(Store.prototype, "defaultState", {
        // eslint-disable-next-line class-methods-use-this
        get: function() {
            return {
                groups: [],
                items: [],
                choices: []
            };
        },
        enumerable: false,
        configurable: true
    });
    // eslint-disable-next-line class-methods-use-this
    Store.prototype.changeSet = function(init) {
        return {
            groups: init,
            items: init,
            choices: init
        };
    };
    Store.prototype.reset = function() {
        this._state = this.defaultState;
        var changes = this.changeSet(true);
        if (this._txn) this._changeSet = changes;
        else this._listeners.forEach(function(l) {
            return l(changes);
        });
    };
    Store.prototype.subscribe = function(onChange) {
        this._listeners.push(onChange);
        return this;
    };
    Store.prototype.dispatch = function(action) {
        var _this = this;
        var state = this._state;
        var hasChanges = false;
        var changes = this._changeSet || this.changeSet(false);
        Object.keys(reducers).forEach(function(key) {
            var stateUpdate = reducers[key](state[key], action, _this._context);
            if (stateUpdate.update) {
                hasChanges = true;
                changes[key] = true;
                state[key] = stateUpdate.state;
            }
        });
        if (hasChanges) {
            if (this._txn) this._changeSet = changes;
            else this._listeners.forEach(function(l) {
                return l(changes);
            });
        }
    };
    Store.prototype.withTxn = function(func) {
        this._txn++;
        try {
            func();
        } finally{
            this._txn = Math.max(0, this._txn - 1);
            if (!this._txn) {
                var changeSet_1 = this._changeSet;
                if (changeSet_1) {
                    this._changeSet = undefined;
                    this._listeners.forEach(function(l) {
                        return l(changeSet_1);
                    });
                }
            }
        }
    };
    Object.defineProperty(Store.prototype, "state", {
        /**
         * Get store object
         */ get: function() {
            return this._state;
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
                return choice.active;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Store.prototype, "searchableChoices", {
        /**
         * Get choices that can be searched (excluding placeholders or disabled choices)
         */ get: function() {
            return this.choices.filter(function(choice) {
                return !choice.disabled && !choice.placeholder;
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
            var _this = this;
            return this.state.groups.filter(function(group) {
                var isActive = group.active && !group.disabled;
                var hasActiveOptions = _this.state.choices.some(function(choice) {
                    return choice.active && !choice.disabled;
                });
                return isActive && hasActiveOptions;
            }, []);
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.inTxn = function() {
        return this._txn > 0;
    };
    /**
     * Get single choice by it's ID
     */ Store.prototype.getChoiceById = function(id) {
        return this.activeChoices.find(function(choice) {
            return choice.id === id;
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
var NoticeTypes = {
    noChoices: 'no-choices',
    noResults: 'no-results',
    addChoice: 'add-choice',
    generic: ''
};
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
/**
 * Fuse.js v7.0.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2023 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */ function isArray(value) {
    return !Array.isArray ? getTag(value) === '[object Array]' : Array.isArray(value);
}
// Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
const INFINITY = 1 / 0;
function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') return value;
    let result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
function toString(value) {
    return value == null ? '' : baseToString(value);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return typeof value === 'number';
}
// Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == '[object Boolean]';
}
function isObject(value) {
    return typeof value === 'object';
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
    return value == null ? value === undefined ? '[object Undefined]' : '[object Null]' : Object.prototype.toString.call(value);
}
const EXTENDED_SEARCH_UNAVAILABLE = 'Extended search is not available';
const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key)=>`Invalid value for key ${key}`;
const PATTERN_LENGTH_TOO_LARGE = (max)=>`Pattern length exceeds max of ${max}.`;
const MISSING_KEY_PROPERTY = (name)=>`Missing ${name} property in key`;
const INVALID_KEY_WEIGHT_VALUE = (key)=>`Property 'weight' in key '${key}' must be a positive integer`;
const hasOwn = Object.prototype.hasOwnProperty;
class KeyStore {
    constructor(keys){
        this._keys = [];
        this._keyMap = {};
        let totalWeight = 0;
        keys.forEach((key)=>{
            let obj = createKey(key);
            this._keys.push(obj);
            this._keyMap[obj.id] = obj;
            totalWeight += obj.weight;
        });
        // Normalize weights so that their sum is equal to 1
        this._keys.forEach((key)=>{
            key.weight /= totalWeight;
        });
    }
    get(keyId) {
        return this._keyMap[keyId];
    }
    keys() {
        return this._keys;
    }
    toJSON() {
        return JSON.stringify(this._keys);
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
        if (!hasOwn.call(key, 'name')) throw new Error(MISSING_KEY_PROPERTY('name'));
        const name = key.name;
        src = name;
        if (hasOwn.call(key, 'weight')) {
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
    return isArray(key) ? key : key.split('.');
}
function createKeyId(key) {
    return isArray(key) ? key.join('.') : key;
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
    deepGet(obj, isString(path) ? path.split('.') : path, 0);
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
var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
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
    constructor({ getFn = Config.getFn, fieldNormWeight = Config.fieldNormWeight } = {}){
        this.norm = norm(fieldNormWeight, 3);
        this.getFn = getFn;
        this.isCreated = false;
        this.setIndexRecords();
    }
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
}
class BaseMatch {
    constructor(pattern){
        this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
        return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
        return getMatch(pattern, this.singleRegex);
    }
    search() {}
}
function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
}
// Token: 'file
class ExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'exact';
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
}
// Token: !fire
class InverseExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'inverse-exact';
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
}
// Token: ^file
class PrefixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'prefix-exact';
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
}
// Token: !^fire
class InversePrefixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'inverse-prefix-exact';
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
}
// Token: .file$
class SuffixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'suffix-exact';
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
}
// Token: !.file$
class InverseSuffixExactMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'inverse-suffix-exact';
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
}
class FuzzyMatch extends BaseMatch {
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
    static get type() {
        return 'fuzzy';
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
}
// Token: 'file
class IncludeMatch extends BaseMatch {
    constructor(pattern){
        super(pattern);
    }
    static get type() {
        return 'include';
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
const OR_TOKEN = '|';
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
    AND: '$and',
    OR: '$or'
};
const KeyType = {
    PATH: '$path',
    PATTERN: '$val'
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
    constructor(docs, options = {}, index){
        this.options = _objectSpread2(_objectSpread2({}, Config), options);
        this.options.useExtendedSearch;
        this._keyStore = new KeyStore(this.options.keys);
        this.setCollection(docs, index);
    }
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
}
Fuse.version = '7.0.0';
Fuse.createIndex = createIndex;
Fuse.parseIndex = parseIndex;
Fuse.config = Config;
Fuse.parseQuery = parse;
register(ExtendedSearch);
var SearchByFuse = /** @class */ function() {
    function SearchByFuse(config) {
        this._haystack = [];
        this._fuseOptions = __assign(__assign({}, config.fuseOptions), {
            keys: __spreadArray([], config.searchFields, true),
            includeMatches: true
        });
    }
    SearchByFuse.prototype.index = function(data) {
        this._haystack = data;
        if (this._fuse) this._fuse.setCollection(data);
    };
    SearchByFuse.prototype.reset = function() {
        this._haystack = [];
        this._fuse = undefined;
    };
    SearchByFuse.prototype.isEmptyIndex = function() {
        return !this._haystack.length;
    };
    SearchByFuse.prototype.search = function(needle) {
        if (!this._fuse) this._fuse = new Fuse(this._haystack, this._fuseOptions);
        var results = this._fuse.search(needle);
        return results.map(function(value, i) {
            return {
                item: value.item,
                score: value.score || 0,
                rank: i + 1
            };
        });
    };
    return SearchByFuse;
}();
function getSearcher(config) {
    return new SearchByFuse(config);
}
/**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option.
 * `Choices.defaults.templates` allows access to the default template methods from `callbackOnCreateTemplates`
 */ var isEmptyObject = function(obj) {
    // eslint-disable-next-line no-restricted-syntax
    for(var prop in obj){
        if (Object.prototype.hasOwnProperty.call(obj, prop)) return false;
    }
    return true;
};
var assignCustomProperties = function(el, choice, withCustomProperties) {
    var dataset = el.dataset;
    var customProperties = choice.customProperties, labelClass = choice.labelClass, labelDescription = choice.labelDescription;
    if (labelClass) dataset.labelClass = getClassNames(labelClass).join(' ');
    if (labelDescription) dataset.labelDescription = labelDescription;
    if (withCustomProperties && customProperties) {
        if (typeof customProperties === 'string') dataset.customProperties = customProperties;
        else if (typeof customProperties === 'object' && !isEmptyObject(customProperties)) dataset.customProperties = JSON.stringify(customProperties);
    }
};
var addAriaLabel = function(docRoot, id, element) {
    var label = id && docRoot.querySelector("label[for='".concat(id, "']"));
    var text = label && label.innerText;
    if (text) element.setAttribute('aria-label', text);
};
var templates = {
    containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
        var containerOuter = _a.classNames.containerOuter;
        var div = document.createElement('div');
        addClassesToElement(div, containerOuter);
        div.dataset.type = passedElementType;
        if (dir) div.dir = dir;
        if (isSelectOneElement) div.tabIndex = 0;
        if (isSelectElement) {
            div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');
            if (searchEnabled) div.setAttribute('aria-autocomplete', 'list');
            else if (!labelId) addAriaLabel(this._docRoot, this.passedElement.element.id, div);
            div.setAttribute('aria-haspopup', 'true');
            div.setAttribute('aria-expanded', 'false');
        }
        if (labelId) div.setAttribute('aria-labelledby', labelId);
        return div;
    },
    containerInner: function(_a) {
        var containerInner = _a.classNames.containerInner;
        var div = document.createElement('div');
        addClassesToElement(div, containerInner);
        return div;
    },
    itemList: function(_a, isSelectOneElement) {
        var searchEnabled = _a.searchEnabled, _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
        var div = document.createElement('div');
        addClassesToElement(div, list);
        addClassesToElement(div, isSelectOneElement ? listSingle : listItems);
        if (this._isSelectElement && searchEnabled) div.setAttribute('role', 'listbox');
        return div;
    },
    placeholder: function(_a, value) {
        var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
        var div = document.createElement('div');
        addClassesToElement(div, placeholder);
        setElementHtml(div, allowHTML, value);
        return div;
    },
    item: function(_a, choice, removeItemButton) {
        var allowHTML = _a.allowHTML, removeItemButtonAlignLeft = _a.removeItemButtonAlignLeft, removeItemIconText = _a.removeItemIconText, removeItemLabelText = _a.removeItemLabelText, _b = _a.classNames, item = _b.item, button = _b.button, highlightedState = _b.highlightedState, itemSelectable = _b.itemSelectable, placeholder = _b.placeholder;
        var rawValue = unwrapStringForRaw(choice.value);
        var div = document.createElement('div');
        addClassesToElement(div, item);
        if (choice.labelClass) {
            var spanLabel = document.createElement('span');
            setElementHtml(spanLabel, allowHTML, choice.label);
            addClassesToElement(spanLabel, choice.labelClass);
            div.appendChild(spanLabel);
        } else setElementHtml(div, allowHTML, choice.label);
        div.dataset.item = '';
        div.dataset.id = choice.id;
        div.dataset.value = rawValue;
        assignCustomProperties(div, choice, true);
        if (choice.disabled || this.containerOuter.isDisabled) div.setAttribute('aria-disabled', 'true');
        if (this._isSelectElement) {
            div.setAttribute('aria-selected', 'true');
            div.setAttribute('role', 'option');
        }
        if (choice.placeholder) {
            addClassesToElement(div, placeholder);
            div.dataset.placeholder = '';
        }
        addClassesToElement(div, choice.highlighted ? highlightedState : itemSelectable);
        if (removeItemButton) {
            if (choice.disabled) removeClassesFromElement(div, itemSelectable);
            div.dataset.deletable = '';
            var removeButton = document.createElement('button');
            removeButton.type = 'button';
            addClassesToElement(removeButton, button);
            setElementHtml(removeButton, true, resolveNoticeFunction(removeItemIconText, choice.value));
            var REMOVE_ITEM_LABEL = resolveNoticeFunction(removeItemLabelText, choice.value);
            if (REMOVE_ITEM_LABEL) removeButton.setAttribute('aria-label', REMOVE_ITEM_LABEL);
            removeButton.dataset.button = '';
            if (removeItemButtonAlignLeft) div.insertAdjacentElement('afterbegin', removeButton);
            else div.appendChild(removeButton);
        }
        return div;
    },
    choiceList: function(_a, isSelectOneElement) {
        var list = _a.classNames.list;
        var div = document.createElement('div');
        addClassesToElement(div, list);
        if (!isSelectOneElement) div.setAttribute('aria-multiselectable', 'true');
        div.setAttribute('role', 'listbox');
        return div;
    },
    choiceGroup: function(_a, _b) {
        var allowHTML = _a.allowHTML, _c = _a.classNames, group = _c.group, groupHeading = _c.groupHeading, itemDisabled = _c.itemDisabled;
        var id = _b.id, label = _b.label, disabled = _b.disabled;
        var rawLabel = unwrapStringForRaw(label);
        var div = document.createElement('div');
        addClassesToElement(div, group);
        if (disabled) addClassesToElement(div, itemDisabled);
        div.setAttribute('role', 'group');
        div.dataset.group = '';
        div.dataset.id = id;
        div.dataset.value = rawLabel;
        if (disabled) div.setAttribute('aria-disabled', 'true');
        var heading = document.createElement('div');
        addClassesToElement(heading, groupHeading);
        setElementHtml(heading, allowHTML, label || '');
        div.appendChild(heading);
        return div;
    },
    choice: function(_a, choice, selectText, groupName) {
        var allowHTML = _a.allowHTML, _b = _a.classNames, item = _b.item, itemChoice = _b.itemChoice, itemSelectable = _b.itemSelectable, selectedState = _b.selectedState, itemDisabled = _b.itemDisabled, description = _b.description, placeholder = _b.placeholder;
        // eslint-disable-next-line prefer-destructuring
        var label = choice.label;
        var rawValue = unwrapStringForRaw(choice.value);
        var div = document.createElement('div');
        div.id = choice.elementId;
        addClassesToElement(div, item);
        addClassesToElement(div, itemChoice);
        if (groupName && typeof label === 'string') {
            label = escapeForTemplate(allowHTML, label);
            label += " (".concat(groupName, ")");
            label = {
                trusted: label
            };
        }
        var describedBy = div;
        if (choice.labelClass) {
            var spanLabel = document.createElement('span');
            setElementHtml(spanLabel, allowHTML, label);
            addClassesToElement(spanLabel, choice.labelClass);
            describedBy = spanLabel;
            div.appendChild(spanLabel);
        } else setElementHtml(div, allowHTML, label);
        if (choice.labelDescription) {
            var descId = "".concat(choice.elementId, "-description");
            describedBy.setAttribute('aria-describedby', descId);
            var spanDesc = document.createElement('span');
            setElementHtml(spanDesc, allowHTML, choice.labelDescription);
            spanDesc.id = descId;
            addClassesToElement(spanDesc, description);
            div.appendChild(spanDesc);
        }
        if (choice.selected) addClassesToElement(div, selectedState);
        if (choice.placeholder) addClassesToElement(div, placeholder);
        div.setAttribute('role', choice.group ? 'treeitem' : 'option');
        div.dataset.choice = '';
        div.dataset.id = choice.id;
        div.dataset.value = rawValue;
        if (selectText) div.dataset.selectText = selectText;
        if (choice.group) div.dataset.groupId = "".concat(choice.group.id);
        assignCustomProperties(div, choice, false);
        if (choice.disabled) {
            addClassesToElement(div, itemDisabled);
            div.dataset.choiceDisabled = '';
            div.setAttribute('aria-disabled', 'true');
        } else {
            addClassesToElement(div, itemSelectable);
            div.dataset.choiceSelectable = '';
        }
        return div;
    },
    input: function(_a, placeholderValue) {
        var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned, labelId = _a.labelId;
        var inp = document.createElement('input');
        inp.type = 'search';
        addClassesToElement(inp, input);
        addClassesToElement(inp, inputCloned);
        inp.autocomplete = 'off';
        inp.autocapitalize = 'off';
        inp.spellcheck = false;
        inp.setAttribute('role', 'textbox');
        inp.setAttribute('aria-autocomplete', 'list');
        if (placeholderValue) inp.setAttribute('aria-label', placeholderValue);
        else if (!labelId) addAriaLabel(this._docRoot, this.passedElement.element.id, inp);
        return inp;
    },
    dropdown: function(_a) {
        var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
        var div = document.createElement('div');
        addClassesToElement(div, list);
        addClassesToElement(div, listDropdown);
        div.setAttribute('aria-expanded', 'false');
        return div;
    },
    notice: function(_a, innerHTML, type) {
        var _b = _a.classNames, item = _b.item, itemChoice = _b.itemChoice, addChoice = _b.addChoice, noResults = _b.noResults, noChoices = _b.noChoices, noticeItem = _b.notice;
        if (type === void 0) type = NoticeTypes.generic;
        var notice = document.createElement('div');
        setElementHtml(notice, true, innerHTML);
        addClassesToElement(notice, item);
        addClassesToElement(notice, itemChoice);
        addClassesToElement(notice, noticeItem);
        // eslint-disable-next-line default-case
        switch(type){
            case NoticeTypes.addChoice:
                addClassesToElement(notice, addChoice);
                break;
            case NoticeTypes.noResults:
                addClassesToElement(notice, noResults);
                break;
            case NoticeTypes.noChoices:
                addClassesToElement(notice, noChoices);
                break;
        }
        if (type === NoticeTypes.addChoice) {
            notice.dataset.choiceSelectable = '';
            notice.dataset.choice = '';
        }
        return notice;
    },
    option: function(choice) {
        // HtmlOptionElement's label value does not support HTML, so the avoid double escaping unwrap the untrusted string.
        var labelValue = unwrapStringForRaw(choice.label);
        var opt = new Option(labelValue, choice.value, false, choice.selected);
        assignCustomProperties(opt, choice, true);
        opt.disabled = choice.disabled;
        if (choice.selected) opt.setAttribute('selected', '');
        return opt;
    }
};
/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */ var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
var USER_DEFAULTS = {};
var parseDataSetId = function(element) {
    if (!element) return undefined;
    return element.dataset.id ? parseInt(element.dataset.id, 10) : undefined;
};
var selectableChoiceIdentifier = '[data-choice-selectable]';
/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */ var Choices = /** @class */ function() {
    function Choices(element, userConfig) {
        if (element === void 0) element = '[data-choice]';
        if (userConfig === void 0) userConfig = {};
        var _this = this;
        this.initialisedOK = undefined;
        this._hasNonChoicePlaceholder = false;
        this._lastAddedChoiceId = 0;
        this._lastAddedGroupId = 0;
        var defaults = Choices.defaults;
        this.config = __assign(__assign(__assign({}, defaults.allOptions), defaults.options), userConfig);
        ObjectsInConfig.forEach(function(key) {
            _this.config[key] = __assign(__assign(__assign({}, defaults.allOptions[key]), defaults.options[key]), userConfig[key]);
        });
        var config = this.config;
        if (!config.silent) this._validateConfig();
        var docRoot = config.shadowRoot || document.documentElement;
        this._docRoot = docRoot;
        var passedElement = typeof element === 'string' ? docRoot.querySelector(element) : element;
        if (!passedElement || typeof passedElement !== 'object' || !(isHtmlInputElement(passedElement) || isHtmlSelectElement(passedElement))) {
            if (!passedElement && typeof element === 'string') throw TypeError("Selector ".concat(element, " failed to find an element"));
            throw TypeError("Expected one of the following types text|select-one|select-multiple");
        }
        var elementType = passedElement.type;
        var isText = elementType === PassedElementTypes.Text;
        if (isText || config.maxItemCount !== 1) config.singleModeForMultiSelect = false;
        if (config.singleModeForMultiSelect) elementType = PassedElementTypes.SelectMultiple;
        var isSelectOne = elementType === PassedElementTypes.SelectOne;
        var isSelectMultiple = elementType === PassedElementTypes.SelectMultiple;
        var isSelect = isSelectOne || isSelectMultiple;
        this._elementType = elementType;
        this._isTextElement = isText;
        this._isSelectOneElement = isSelectOne;
        this._isSelectMultipleElement = isSelectMultiple;
        this._isSelectElement = isSelectOne || isSelectMultiple;
        this._canAddUserChoices = isText && config.addItems || isSelect && config.addChoices;
        if (typeof config.renderSelectedChoices !== 'boolean') config.renderSelectedChoices = config.renderSelectedChoices === 'always' || isSelectOne;
        if (config.closeDropdownOnSelect === 'auto') config.closeDropdownOnSelect = isText || isSelectOne || config.singleModeForMultiSelect;
        else config.closeDropdownOnSelect = coerceBool(config.closeDropdownOnSelect);
        if (config.placeholder) {
            if (config.placeholderValue) this._hasNonChoicePlaceholder = true;
            else if (passedElement.dataset.placeholder) {
                this._hasNonChoicePlaceholder = true;
                config.placeholderValue = passedElement.dataset.placeholder;
            }
        }
        if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
            var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
            config.addItemFilter = re.test.bind(re);
        }
        if (this._isTextElement) this.passedElement = new WrappedInput({
            element: passedElement,
            classNames: config.classNames
        });
        else {
            var selectEl = passedElement;
            this.passedElement = new WrappedSelect({
                element: selectEl,
                classNames: config.classNames,
                template: function(data) {
                    return _this._templates.option(data);
                },
                extractPlaceholder: config.placeholder && !this._hasNonChoicePlaceholder
            });
        }
        this.initialised = false;
        this._store = new Store(config);
        this._currentValue = '';
        config.searchEnabled = !isText && config.searchEnabled || isSelectMultiple;
        this._canSearch = config.searchEnabled;
        this._isScrollingOnIe = false;
        this._highlightPosition = 0;
        this._wasTap = true;
        this._placeholderValue = this._generatePlaceholderValue();
        this._baseId = generateId(passedElement, 'choices-');
        /**
         * setting direction in cases where it's explicitly set on passedElement
         * or when calculated direction is different from the document
         */ this._direction = passedElement.dir;
        if (!this._direction) {
            var elementDirection = window.getComputedStyle(passedElement).direction;
            var documentDirection = window.getComputedStyle(document.documentElement).direction;
            if (elementDirection !== documentDirection) this._direction = elementDirection;
        }
        this._idNames = {
            itemChoice: 'item-choice'
        };
        this._templates = defaults.templates;
        this._render = this._render.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._onKeyUp = this._onKeyUp.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onInput = this._onInput.bind(this);
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
            if (!config.silent) console.warn('Trying to initialise Choices on element already initialised', {
                element: element
            });
            this.initialised = true;
            this.initialisedOK = false;
            return;
        }
        // Let's go
        this.init();
        // preserve the selected item list after setup for form reset
        this._initialItems = this._store.items.map(function(choice) {
            return choice.value;
        });
    }
    Object.defineProperty(Choices, "defaults", {
        get: function() {
            return Object.preventExtensions({
                get options () {
                    return USER_DEFAULTS;
                },
                get allOptions () {
                    return DEFAULT_CONFIG;
                },
                get templates () {
                    return templates;
                }
            });
        },
        enumerable: false,
        configurable: true
    });
    Choices.prototype.init = function() {
        if (this.initialised || this.initialisedOK !== undefined) return;
        this._searcher = getSearcher(this.config);
        this._loadChoices();
        this._createTemplates();
        this._createElements();
        this._createStructure();
        if (this._isTextElement && !this.config.addItems || this.passedElement.element.hasAttribute('disabled') || !!this.passedElement.element.closest('fieldset:disabled')) this.disable();
        else {
            this.enable();
            this._addEventListeners();
        }
        // should be triggered **after** disabled state to avoid additional re-draws
        this._initStore();
        this.initialised = true;
        this.initialisedOK = true;
        var callbackOnInit = this.config.callbackOnInit;
        // Run callback if it is a function
        if (typeof callbackOnInit === 'function') callbackOnInit.call(this);
    };
    Choices.prototype.destroy = function() {
        if (!this.initialised) return;
        this._removeEventListeners();
        this.passedElement.reveal();
        this.containerOuter.unwrap(this.passedElement.element);
        this._store._listeners = []; // prevents select/input value being wiped
        this.clearStore(false);
        this._stopSearch();
        this._templates = Choices.defaults.templates;
        this.initialised = false;
        this.initialisedOK = undefined;
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
        var choice = this._store.items.find(function(c) {
            return c.id === item.id;
        });
        if (!choice || choice.highlighted) return this;
        this._store.dispatch(highlightItem(choice, true));
        if (runEvent) this.passedElement.triggerEvent(EventType.highlightItem, this._getChoiceForOutput(choice));
        return this;
    };
    Choices.prototype.unhighlightItem = function(item, runEvent) {
        if (runEvent === void 0) runEvent = true;
        if (!item || !item.id) return this;
        var choice = this._store.items.find(function(c) {
            return c.id === item.id;
        });
        if (!choice || !choice.highlighted) return this;
        this._store.dispatch(highlightItem(choice, false));
        if (runEvent) this.passedElement.triggerEvent(EventType.unhighlightItem, this._getChoiceForOutput(choice));
        return this;
    };
    Choices.prototype.highlightAll = function() {
        var _this = this;
        this._store.withTxn(function() {
            _this._store.items.forEach(function(item) {
                if (!item.highlighted) {
                    _this._store.dispatch(highlightItem(item, true));
                    _this.passedElement.triggerEvent(EventType.highlightItem, _this._getChoiceForOutput(item));
                }
            });
        });
        return this;
    };
    Choices.prototype.unhighlightAll = function() {
        var _this = this;
        this._store.withTxn(function() {
            _this._store.items.forEach(function(item) {
                if (item.highlighted) {
                    _this._store.dispatch(highlightItem(item, false));
                    _this.passedElement.triggerEvent(EventType.highlightItem, _this._getChoiceForOutput(item));
                }
            });
        });
        return this;
    };
    Choices.prototype.removeActiveItemsByValue = function(value) {
        var _this = this;
        this._store.withTxn(function() {
            _this._store.items.filter(function(item) {
                return item.value === value;
            }).forEach(function(item) {
                return _this._removeItem(item);
            });
        });
        return this;
    };
    Choices.prototype.removeActiveItems = function(excludedId) {
        var _this = this;
        this._store.withTxn(function() {
            _this._store.items.filter(function(_a) {
                var id = _a.id;
                return id !== excludedId;
            }).forEach(function(item) {
                return _this._removeItem(item);
            });
        });
        return this;
    };
    Choices.prototype.removeHighlightedItems = function(runEvent) {
        var _this = this;
        if (runEvent === void 0) runEvent = false;
        this._store.withTxn(function() {
            _this._store.highlightedActiveItems.forEach(function(item) {
                _this._removeItem(item);
                // If this action was performed by the user
                // trigger the event
                if (runEvent) _this._triggerChange(item.value);
            });
        });
        return this;
    };
    Choices.prototype.showDropdown = function(preventInputFocus) {
        var _this = this;
        if (this.dropdown.isActive) return this;
        if (preventInputFocus === undefined) // eslint-disable-next-line no-param-reassign
        preventInputFocus = !this._canSearch;
        requestAnimationFrame(function() {
            _this.dropdown.show();
            var rect = _this.dropdown.element.getBoundingClientRect();
            _this.containerOuter.open(rect.bottom, rect.height);
            if (!preventInputFocus) _this.input.focus();
            _this.passedElement.triggerEvent(EventType.showDropdown);
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
            _this.passedElement.triggerEvent(EventType.hideDropdown);
        });
        return this;
    };
    Choices.prototype.getValue = function(valueOnly) {
        var _this = this;
        var values = this._store.items.map(function(item) {
            return valueOnly ? item.value : _this._getChoiceForOutput(item);
        });
        return this._isSelectOneElement || this.config.singleModeForMultiSelect ? values[0] : values;
    };
    Choices.prototype.setValue = function(items) {
        var _this = this;
        if (!this.initialisedOK) {
            this._warnChoicesInitFailed('setValue');
            return this;
        }
        this._store.withTxn(function() {
            items.forEach(function(value) {
                if (value) _this._addChoice(mapInputToChoice(value, false));
            });
        });
        // @todo integrate with Store
        this._searcher.reset();
        return this;
    };
    Choices.prototype.setChoiceByValue = function(value) {
        var _this = this;
        if (!this.initialisedOK) {
            this._warnChoicesInitFailed('setChoiceByValue');
            return this;
        }
        if (this._isTextElement) return this;
        this._store.withTxn(function() {
            // If only one value has been passed, convert to array
            var choiceValue = Array.isArray(value) ? value : [
                value
            ];
            // Loop through each value and
            choiceValue.forEach(function(val) {
                return _this._findAndSelectChoiceByValue(val);
            });
            _this.unhighlightAll();
        });
        // @todo integrate with Store
        this._searcher.reset();
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
     */ Choices.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices, clearSearchFlag, replaceItems) {
        var _this = this;
        if (choicesArrayOrFetcher === void 0) choicesArrayOrFetcher = [];
        if (value === void 0) value = 'value';
        if (label === void 0) label = 'label';
        if (replaceChoices === void 0) replaceChoices = false;
        if (clearSearchFlag === void 0) clearSearchFlag = true;
        if (replaceItems === void 0) replaceItems = false;
        if (!this.initialisedOK) {
            this._warnChoicesInitFailed('setChoices');
            return this;
        }
        if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
        if (typeof value !== 'string' || !value) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
        if (typeof choicesArrayOrFetcher === 'function') {
            // it's a choices fetcher function
            var fetcher_1 = choicesArrayOrFetcher(this);
            if (typeof Promise === 'function' && fetcher_1 instanceof Promise) // that's a promise
            // eslint-disable-next-line no-promise-executor-return
            return new Promise(function(resolve) {
                return requestAnimationFrame(resolve);
            }).then(function() {
                return _this._handleLoadingState(true);
            }).then(function() {
                return fetcher_1;
            }).then(function(data) {
                return _this.setChoices(data, value, label, replaceChoices, clearSearchFlag, replaceItems);
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
        this._store.withTxn(function() {
            if (clearSearchFlag) _this._isSearching = false;
            // Clear choices if needed
            if (replaceChoices) _this.clearChoices(true, replaceItems);
            var isDefaultValue = value === 'value';
            var isDefaultLabel = label === 'label';
            choicesArrayOrFetcher.forEach(function(groupOrChoice) {
                if ('choices' in groupOrChoice) {
                    var group = groupOrChoice;
                    if (!isDefaultLabel) group = __assign(__assign({}, group), {
                        label: group[label]
                    });
                    _this._addGroup(mapInputToChoice(group, true));
                } else {
                    var choice = groupOrChoice;
                    if (!isDefaultLabel || !isDefaultValue) choice = __assign(__assign({}, choice), {
                        value: choice[value],
                        label: choice[label]
                    });
                    var choiceFull = mapInputToChoice(choice, false);
                    _this._addChoice(choiceFull);
                    if (choiceFull.placeholder && !_this._hasNonChoicePlaceholder) _this._placeholderValue = unwrapStringForEscaped(choiceFull.label);
                }
            });
            _this.unhighlightAll();
        });
        // @todo integrate with Store
        this._searcher.reset();
        return this;
    };
    Choices.prototype.refresh = function(withEvents, selectFirstOption, deselectAll) {
        var _this = this;
        if (withEvents === void 0) withEvents = false;
        if (selectFirstOption === void 0) selectFirstOption = false;
        if (deselectAll === void 0) deselectAll = false;
        if (!this._isSelectElement) {
            if (!this.config.silent) console.warn('refresh method can only be used on choices backed by a <select> element');
            return this;
        }
        this._store.withTxn(function() {
            var choicesFromOptions = _this.passedElement.optionsAsChoices();
            // Build the list of items which require preserving
            var existingItems = {};
            if (!deselectAll) _this._store.items.forEach(function(choice) {
                if (choice.id && choice.active && choice.selected) existingItems[choice.value] = true;
            });
            _this.clearStore(false);
            var updateChoice = function(choice) {
                if (deselectAll) _this._store.dispatch(removeItem$1(choice));
                else if (existingItems[choice.value]) choice.selected = true;
            };
            choicesFromOptions.forEach(function(groupOrChoice) {
                if ('choices' in groupOrChoice) {
                    groupOrChoice.choices.forEach(updateChoice);
                    return;
                }
                updateChoice(groupOrChoice);
            });
            /* @todo only generate add events for the added options instead of all
            if (withEvents) {
              items.forEach((choice) => {
                if (existingItems[choice.value]) {
                  this.passedElement.triggerEvent(
                    EventType.removeItem,
                    this._getChoiceForEvent(choice),
                  );
                }
              });
            }
            */ // load new choices & items
            _this._addPredefinedChoices(choicesFromOptions, selectFirstOption, withEvents);
            // re-do search if required
            if (_this._isSearching) _this._searchChoices(_this.input.value);
        });
        return this;
    };
    Choices.prototype.removeChoice = function(value) {
        var choice = this._store.choices.find(function(c) {
            return c.value === value;
        });
        if (!choice) return this;
        this._clearNotice();
        this._store.dispatch(removeChoice(choice));
        // @todo integrate with Store
        this._searcher.reset();
        if (choice.selected) this.passedElement.triggerEvent(EventType.removeItem, this._getChoiceForOutput(choice));
        return this;
    };
    Choices.prototype.clearChoices = function(clearOptions, clearItems) {
        var _this = this;
        if (clearOptions === void 0) clearOptions = true;
        if (clearItems === void 0) clearItems = false;
        if (clearOptions) {
            if (clearItems) this.passedElement.element.replaceChildren('');
            else this.passedElement.element.querySelectorAll(':not([selected])').forEach(function(el) {
                el.remove();
            });
        }
        this.itemList.element.replaceChildren('');
        this.choiceList.element.replaceChildren('');
        this._clearNotice();
        this._store.withTxn(function() {
            var items = clearItems ? [] : _this._store.items;
            _this._store.reset();
            items.forEach(function(item) {
                _this._store.dispatch(addChoice(item));
                _this._store.dispatch(addItem(item));
            });
        });
        // @todo integrate with Store
        this._searcher.reset();
        return this;
    };
    Choices.prototype.clearStore = function(clearOptions) {
        if (clearOptions === void 0) clearOptions = true;
        this.clearChoices(clearOptions, true);
        this._stopSearch();
        this._lastAddedChoiceId = 0;
        this._lastAddedGroupId = 0;
        return this;
    };
    Choices.prototype.clearInput = function() {
        var shouldSetInputWidth = !this._isSelectOneElement;
        this.input.clear(shouldSetInputWidth);
        this._stopSearch();
        return this;
    };
    Choices.prototype._validateConfig = function() {
        var config = this.config;
        var invalidConfigOptions = diff(config, DEFAULT_CONFIG);
        if (invalidConfigOptions.length) console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
        if (config.allowHTML && config.allowHtmlUserInput) {
            if (config.addItems) console.warn('Warning: allowHTML/allowHtmlUserInput/addItems all being true is strongly not recommended and may lead to XSS attacks');
            if (config.addChoices) console.warn('Warning: allowHTML/allowHtmlUserInput/addChoices all being true is strongly not recommended and may lead to XSS attacks');
        }
    };
    Choices.prototype._render = function(changes) {
        if (changes === void 0) changes = {
            choices: true,
            groups: true,
            items: true
        };
        if (this._store.inTxn()) return;
        if (this._isSelectElement) {
            if (changes.choices || changes.groups) this._renderChoices();
        }
        if (changes.items) this._renderItems();
    };
    Choices.prototype._renderChoices = function() {
        var _this = this;
        if (!this._canAddItems()) return; // block rendering choices if the input limit is reached.
        var _a = this, config = _a.config, isSearching = _a._isSearching;
        var _b = this._store, activeGroups = _b.activeGroups, activeChoices = _b.activeChoices;
        var renderLimit = 0;
        if (isSearching && config.searchResultLimit > 0) renderLimit = config.searchResultLimit;
        else if (config.renderChoiceLimit > 0) renderLimit = config.renderChoiceLimit;
        if (this._isSelectElement) {
            var backingOptions = activeChoices.filter(function(choice) {
                return !choice.element;
            });
            if (backingOptions.length) this.passedElement.addOptions(backingOptions);
        }
        var fragment = document.createDocumentFragment();
        var renderableChoices = function(choices) {
            return choices.filter(function(choice) {
                return !choice.placeholder && (isSearching ? !!choice.rank : config.renderSelectedChoices || !choice.selected);
            });
        };
        var selectableChoices = false;
        var renderChoices = function(choices, withinGroup, groupLabel) {
            if (isSearching) // sortByRank is used to ensure stable sorting, as scores are non-unique
            // this additionally ensures fuseOptions.sortFn is not ignored
            choices.sort(sortByRank);
            else if (config.shouldSort) choices.sort(config.sorter);
            var choiceLimit = choices.length;
            choiceLimit = !withinGroup && renderLimit && choiceLimit > renderLimit ? renderLimit : choiceLimit;
            choiceLimit--;
            choices.every(function(choice, index) {
                // choiceEl being empty signals the contents has probably significantly changed
                var dropdownItem = choice.choiceEl || _this._templates.choice(config, choice, config.itemSelectText, groupLabel);
                choice.choiceEl = dropdownItem;
                fragment.appendChild(dropdownItem);
                if (isSearching || !choice.selected) selectableChoices = true;
                return index < choiceLimit;
            });
        };
        if (activeChoices.length) {
            if (config.resetScrollPosition) requestAnimationFrame(function() {
                return _this.choiceList.scrollToTop();
            });
            if (!this._hasNonChoicePlaceholder && !isSearching && this._isSelectOneElement) // If we have a placeholder choice along with groups
            renderChoices(activeChoices.filter(function(choice) {
                return choice.placeholder && !choice.group;
            }), false, undefined);
            // If we have grouped options
            if (activeGroups.length && !isSearching) {
                if (config.shouldSort) activeGroups.sort(config.sorter);
                // render Choices without group first, regardless of sort, otherwise they won't be distinguishable
                // from the last group
                renderChoices(activeChoices.filter(function(choice) {
                    return !choice.placeholder && !choice.group;
                }), false, undefined);
                activeGroups.forEach(function(group) {
                    var groupChoices = renderableChoices(group.choices);
                    if (groupChoices.length) {
                        if (group.label) {
                            var dropdownGroup = group.groupEl || _this._templates.choiceGroup(_this.config, group);
                            group.groupEl = dropdownGroup;
                            dropdownGroup.remove();
                            fragment.appendChild(dropdownGroup);
                        }
                        renderChoices(groupChoices, true, config.appendGroupInSearch && isSearching ? group.label : undefined);
                    }
                });
            } else renderChoices(renderableChoices(activeChoices), false, undefined);
        }
        if (!selectableChoices && (isSearching || !fragment.children.length || !config.renderSelectedChoices)) {
            if (!this._notice) this._notice = {
                text: resolveStringFunction(isSearching ? config.noResultsText : config.noChoicesText),
                type: isSearching ? NoticeTypes.noResults : NoticeTypes.noChoices
            };
            fragment.replaceChildren('');
        }
        this._renderNotice(fragment);
        this.choiceList.element.replaceChildren(fragment);
        if (selectableChoices) this._highlightChoice();
    };
    Choices.prototype._renderItems = function() {
        var _this = this;
        var items = this._store.items || [];
        var itemList = this.itemList.element;
        var config = this.config;
        var fragment = document.createDocumentFragment();
        var itemFromList = function(item) {
            return itemList.querySelector("[data-item][data-id=\"".concat(item.id, "\"]"));
        };
        var addItemToFragment = function(item) {
            var el = item.itemEl;
            if (el && el.parentElement) return;
            el = itemFromList(item) || _this._templates.item(config, item, config.removeItemButton);
            item.itemEl = el;
            fragment.appendChild(el);
        };
        // new items
        items.forEach(addItemToFragment);
        var addedItems = !!fragment.childNodes.length;
        if (this._isSelectOneElement) {
            var existingItems = itemList.children.length;
            if (addedItems || existingItems > 1) {
                var placeholder = itemList.querySelector(getClassNamesSelector(config.classNames.placeholder));
                if (placeholder) placeholder.remove();
            } else if (!addedItems && !existingItems && this._placeholderValue) {
                addedItems = true;
                addItemToFragment(mapInputToChoice({
                    selected: true,
                    value: '',
                    label: this._placeholderValue,
                    placeholder: true
                }, false));
            }
        }
        if (addedItems) {
            itemList.append(fragment);
            if (config.shouldSortItems && !this._isSelectOneElement) {
                items.sort(config.sorter);
                // push sorting into the DOM
                items.forEach(function(item) {
                    var el = itemFromList(item);
                    if (el) {
                        el.remove();
                        fragment.append(el);
                    }
                });
                itemList.append(fragment);
            }
        }
        if (this._isTextElement) // Update the value of the hidden input
        this.passedElement.value = items.map(function(_a) {
            var value = _a.value;
            return value;
        }).join(config.delimiter);
    };
    Choices.prototype._displayNotice = function(text, type, openDropdown) {
        if (openDropdown === void 0) openDropdown = true;
        var oldNotice = this._notice;
        if (oldNotice && (oldNotice.type === type && oldNotice.text === text || oldNotice.type === NoticeTypes.addChoice && (type === NoticeTypes.noResults || type === NoticeTypes.noChoices))) {
            if (openDropdown) this.showDropdown(true);
            return;
        }
        this._clearNotice();
        this._notice = text ? {
            text: text,
            type: type
        } : undefined;
        this._renderNotice();
        if (openDropdown && text) this.showDropdown(true);
    };
    Choices.prototype._clearNotice = function() {
        if (!this._notice) return;
        var noticeElement = this.choiceList.element.querySelector(getClassNamesSelector(this.config.classNames.notice));
        if (noticeElement) noticeElement.remove();
        this._notice = undefined;
    };
    Choices.prototype._renderNotice = function(fragment) {
        var noticeConf = this._notice;
        if (noticeConf) {
            var notice = this._templates.notice(this.config, noticeConf.text, noticeConf.type);
            if (fragment) fragment.append(notice);
            else this.choiceList.prepend(notice);
        }
    };
    // eslint-disable-next-line class-methods-use-this
    Choices.prototype._getChoiceForOutput = function(choice, keyCode) {
        return {
            id: choice.id,
            highlighted: choice.highlighted,
            labelClass: choice.labelClass,
            labelDescription: choice.labelDescription,
            customProperties: choice.customProperties,
            disabled: choice.disabled,
            active: choice.active,
            label: choice.label,
            placeholder: choice.placeholder,
            value: choice.value,
            groupValue: choice.group ? choice.group.label : undefined,
            element: choice.element,
            keyCode: keyCode
        };
    };
    Choices.prototype._triggerChange = function(value) {
        if (value === undefined || value === null) return;
        this.passedElement.triggerEvent(EventType.change, {
            value: value
        });
    };
    Choices.prototype._handleButtonAction = function(element) {
        var _this = this;
        var items = this._store.items;
        if (!items.length || !this.config.removeItems || !this.config.removeItemButton) return;
        var id = element && parseDataSetId(element.parentElement);
        var itemToRemove = id && items.find(function(item) {
            return item.id === id;
        });
        if (!itemToRemove) return;
        this._store.withTxn(function() {
            // Remove item associated with button
            _this._removeItem(itemToRemove);
            _this._triggerChange(itemToRemove.value);
            if (_this._isSelectOneElement && !_this._hasNonChoicePlaceholder) {
                var placeholderChoice = (_this.config.shouldSort ? _this._store.choices.reverse() : _this._store.choices).find(function(choice) {
                    return choice.placeholder;
                });
                if (placeholderChoice) {
                    _this._addItem(placeholderChoice);
                    _this.unhighlightAll();
                    if (placeholderChoice.value) _this._triggerChange(placeholderChoice.value);
                }
            }
        });
    };
    Choices.prototype._handleItemAction = function(element, hasShiftKey) {
        var _this = this;
        if (hasShiftKey === void 0) hasShiftKey = false;
        var items = this._store.items;
        if (!items.length || !this.config.removeItems || this._isSelectOneElement) return;
        var id = parseDataSetId(element);
        if (!id) return;
        // We only want to select one item with a click
        // so we deselect any items that aren't the target
        // unless shift is being pressed
        items.forEach(function(item) {
            if (item.id === id && !item.highlighted) _this.highlightItem(item);
            else if (!hasShiftKey && item.highlighted) _this.unhighlightItem(item);
        });
        // Focus input as without focus, a user cannot do anything with a
        // highlighted item
        this.input.focus();
    };
    Choices.prototype._handleChoiceAction = function(element) {
        var _this = this;
        // If we are clicking on an option
        var id = parseDataSetId(element);
        var choice = id && this._store.getChoiceById(id);
        if (!choice || choice.disabled) return false;
        var hasActiveDropdown = this.dropdown.isActive;
        if (!choice.selected) {
            if (!this._canAddItems()) return true; // causes _onEnterKey to early out
            this._store.withTxn(function() {
                _this._addItem(choice, true, true);
                _this.clearInput();
                _this.unhighlightAll();
            });
            this._triggerChange(choice.value);
        }
        // We want to close the dropdown if we are dealing with a single select box
        if (hasActiveDropdown && this.config.closeDropdownOnSelect) {
            this.hideDropdown(true);
            this.containerOuter.element.focus();
        }
        return true;
    };
    Choices.prototype._handleBackspace = function(items) {
        var config = this.config;
        if (!config.removeItems || !items.length) return;
        var lastItem = items[items.length - 1];
        var hasHighlightedItems = items.some(function(item) {
            return item.highlighted;
        });
        // If editing the last item is allowed and there are not other selected items,
        // we can edit the item value. Otherwise if we can remove items, remove all selected items
        if (config.editItems && !hasHighlightedItems && lastItem) {
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
    Choices.prototype._loadChoices = function() {
        var _a;
        var _this = this;
        var config = this.config;
        if (this._isTextElement) {
            // Assign preset items from passed object first
            this._presetChoices = config.items.map(function(e) {
                return mapInputToChoice(e, false);
            });
            // Add any values passed from attribute
            if (this.passedElement.value) {
                var elementItems = this.passedElement.value.split(config.delimiter).map(function(e) {
                    return mapInputToChoice(e, false, _this.config.allowHtmlUserInput);
                });
                this._presetChoices = this._presetChoices.concat(elementItems);
            }
            this._presetChoices.forEach(function(choice) {
                choice.selected = true;
            });
        } else if (this._isSelectElement) {
            // Assign preset choices from passed object
            this._presetChoices = config.choices.map(function(e) {
                return mapInputToChoice(e, true);
            });
            // Create array of choices from option elements
            var choicesFromOptions = this.passedElement.optionsAsChoices();
            if (choicesFromOptions) (_a = this._presetChoices).push.apply(_a, choicesFromOptions);
        }
    };
    Choices.prototype._handleLoadingState = function(setLoading) {
        if (setLoading === void 0) setLoading = true;
        var el = this.itemList.element;
        if (setLoading) {
            this.disable();
            this.containerOuter.addLoadingState();
            if (this._isSelectOneElement) el.replaceChildren(this._templates.placeholder(this.config, this.config.loadingText));
            else this.input.placeholder = this.config.loadingText;
        } else {
            this.enable();
            this.containerOuter.removeLoadingState();
            if (this._isSelectOneElement) {
                el.replaceChildren('');
                this._render();
            } else this.input.placeholder = this._placeholderValue || '';
        }
    };
    Choices.prototype._handleSearch = function(value) {
        if (!this.input.isFocussed) return;
        // Check that we have a value to search and the input was an alphanumeric character
        if (value !== null && typeof value !== 'undefined' && value.length >= this.config.searchFloor) {
            var resultCount = this.config.searchChoices ? this._searchChoices(value) : 0;
            if (resultCount !== null) // Trigger search event
            this.passedElement.triggerEvent(EventType.search, {
                value: value,
                resultCount: resultCount
            });
        } else if (this._store.choices.some(function(option) {
            return !option.active;
        })) this._stopSearch();
    };
    Choices.prototype._canAddItems = function() {
        var config = this.config;
        var maxItemCount = config.maxItemCount, maxItemText = config.maxItemText;
        if (!config.singleModeForMultiSelect && maxItemCount > 0 && maxItemCount <= this._store.items.length) {
            this.choiceList.element.replaceChildren('');
            this._notice = undefined;
            this._displayNotice(typeof maxItemText === 'function' ? maxItemText(maxItemCount) : maxItemText, NoticeTypes.addChoice);
            return false;
        }
        if (this._notice && this._notice.type === NoticeTypes.addChoice) this._clearNotice();
        return true;
    };
    Choices.prototype._canCreateItem = function(value) {
        var config = this.config;
        var canAddItem = true;
        var notice = '';
        if (canAddItem && typeof config.addItemFilter === 'function' && !config.addItemFilter(value)) {
            canAddItem = false;
            notice = resolveNoticeFunction(config.customAddItemText, value);
        }
        if (canAddItem) {
            var foundChoice = this._store.choices.find(function(choice) {
                return config.valueComparer(choice.value, value);
            });
            if (foundChoice) {
                if (this._isSelectElement) {
                    // for exact matches, do not prompt to add it as a custom choice
                    this._displayNotice('', NoticeTypes.addChoice);
                    return false;
                }
                if (!config.duplicateItemsAllowed) {
                    canAddItem = false;
                    notice = resolveNoticeFunction(config.uniqueItemText, value);
                }
            }
        }
        if (canAddItem) notice = resolveNoticeFunction(config.addItemText, value);
        if (notice) this._displayNotice(notice, NoticeTypes.addChoice);
        return canAddItem;
    };
    Choices.prototype._searchChoices = function(value) {
        var newValue = value.trim().replace(/\s{2,}/, ' ');
        // signal input didn't change search
        if (!newValue.length || newValue === this._currentValue) return null;
        var searcher = this._searcher;
        if (searcher.isEmptyIndex()) searcher.index(this._store.searchableChoices);
        // If new value matches the desired length and is not the same as the current value with a space
        var results = searcher.search(newValue);
        this._currentValue = newValue;
        this._highlightPosition = 0;
        this._isSearching = true;
        var notice = this._notice;
        var noticeType = notice && notice.type;
        if (noticeType !== NoticeTypes.addChoice) {
            if (!results.length) this._displayNotice(resolveStringFunction(this.config.noResultsText), NoticeTypes.noResults);
            else this._clearNotice();
        }
        this._store.dispatch(filterChoices(results));
        return results.length;
    };
    Choices.prototype._stopSearch = function() {
        if (this._isSearching) {
            this._currentValue = '';
            this._isSearching = false;
            this._clearNotice();
            this._store.dispatch(activateChoices(true));
            this.passedElement.triggerEvent(EventType.search, {
                value: '',
                resultCount: 0
            });
        }
    };
    Choices.prototype._addEventListeners = function() {
        var documentElement = this._docRoot;
        var outerElement = this.containerOuter.element;
        var inputElement = this.input.element;
        // capture events - can cancel event processing or propagation
        documentElement.addEventListener('touchend', this._onTouchEnd, true);
        outerElement.addEventListener('keydown', this._onKeyDown, true);
        outerElement.addEventListener('mousedown', this._onMouseDown, true);
        // passive events - doesn't call `preventDefault` or `stopPropagation`
        documentElement.addEventListener('click', this._onClick, {
            passive: true
        });
        documentElement.addEventListener('touchmove', this._onTouchMove, {
            passive: true
        });
        this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
            passive: true
        });
        if (this._isSelectOneElement) {
            outerElement.addEventListener('focus', this._onFocus, {
                passive: true
            });
            outerElement.addEventListener('blur', this._onBlur, {
                passive: true
            });
        }
        inputElement.addEventListener('keyup', this._onKeyUp, {
            passive: true
        });
        inputElement.addEventListener('input', this._onInput, {
            passive: true
        });
        inputElement.addEventListener('focus', this._onFocus, {
            passive: true
        });
        inputElement.addEventListener('blur', this._onBlur, {
            passive: true
        });
        if (inputElement.form) inputElement.form.addEventListener('reset', this._onFormReset, {
            passive: true
        });
        this.input.addEventListeners();
    };
    Choices.prototype._removeEventListeners = function() {
        var documentElement = this._docRoot;
        var outerElement = this.containerOuter.element;
        var inputElement = this.input.element;
        documentElement.removeEventListener('touchend', this._onTouchEnd, true);
        outerElement.removeEventListener('keydown', this._onKeyDown, true);
        outerElement.removeEventListener('mousedown', this._onMouseDown, true);
        documentElement.removeEventListener('click', this._onClick);
        documentElement.removeEventListener('touchmove', this._onTouchMove);
        this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);
        if (this._isSelectOneElement) {
            outerElement.removeEventListener('focus', this._onFocus);
            outerElement.removeEventListener('blur', this._onBlur);
        }
        inputElement.removeEventListener('keyup', this._onKeyUp);
        inputElement.removeEventListener('input', this._onInput);
        inputElement.removeEventListener('focus', this._onFocus);
        inputElement.removeEventListener('blur', this._onBlur);
        if (inputElement.form) inputElement.form.removeEventListener('reset', this._onFormReset);
        this.input.removeEventListeners();
    };
    Choices.prototype._onKeyDown = function(event) {
        var keyCode = event.keyCode;
        var hasActiveDropdown = this.dropdown.isActive;
        /*
        See:
        https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
        https://en.wikipedia.org/wiki/UTF-16#Code_points_from_U+010000_to_U+10FFFF - UTF-16 surrogate pairs
        https://stackoverflow.com/a/70866532 - "Unidentified" for mobile
        http://www.unicode.org/versions/Unicode5.2.0/ch16.pdf#G19635 - U+FFFF is reserved (Section 16.7)
    
        Logic: when a key event is sent, `event.key` represents its printable value _or_ one
        of a large list of special values indicating meta keys/functionality. In addition,
        key events for compose functionality contain a value of `Dead` when mid-composition.
    
        I can't quite verify it, but non-English IMEs may also be able to generate key codes
        for code points in the surrogate-pair range, which could potentially be seen as having
        key.length > 1. Since `Fn` is one of the special keys, we can't distinguish by that
        alone.
    
        Here, key.length === 1 means we know for sure the input was printable and not a special
        `key` value. When the length is greater than 1, it could be either a printable surrogate
        pair or a special `key` value. We can tell the difference by checking if the _character
        code_ value (not code point!) is in the "surrogate pair" range or not.
    
        We don't use .codePointAt because an invalid code point would return 65535, which wouldn't
        pass the >= 0x10000 check we would otherwise use.
    
        > ...The Unicode Standard sets aside 66 noncharacter code points. The last two code points
        > of each plane are noncharacters: U+FFFE and U+FFFF on the BMP...
        */ var wasPrintableChar = event.key.length === 1 || event.key.length === 2 && event.key.charCodeAt(0) >= 0xd800 || event.key === 'Unidentified';
        /*
          We do not show the dropdown if focusing out with esc or navigating through input fields.
          An activated search can still be opened with any other key.
         */ if (!this._isTextElement && !hasActiveDropdown && keyCode !== KeyCodeMap.ESC_KEY && keyCode !== KeyCodeMap.TAB_KEY && keyCode !== KeyCodeMap.SHIFT_KEY) {
            this.showDropdown();
            if (!this.input.isFocussed && wasPrintableChar) {
                /*
                  We update the input value with the pressed key as
                  the input was not focussed at the time of key press
                  therefore does not have the value of the key.
                */ this.input.value += event.key;
                // browsers interpret a space as pagedown
                if (event.key === ' ') event.preventDefault();
            }
        }
        switch(keyCode){
            case KeyCodeMap.A_KEY:
                return this._onSelectKey(event, this.itemList.element.hasChildNodes());
            case KeyCodeMap.ENTER_KEY:
                return this._onEnterKey(event, hasActiveDropdown);
            case KeyCodeMap.ESC_KEY:
                return this._onEscapeKey(event, hasActiveDropdown);
            case KeyCodeMap.UP_KEY:
            case KeyCodeMap.PAGE_UP_KEY:
            case KeyCodeMap.DOWN_KEY:
            case KeyCodeMap.PAGE_DOWN_KEY:
                return this._onDirectionKey(event, hasActiveDropdown);
            case KeyCodeMap.DELETE_KEY:
            case KeyCodeMap.BACK_KEY:
                return this._onDeleteKey(event, this._store.items, this.input.isFocussed);
        }
    };
    Choices.prototype._onKeyUp = function() {
        this._canSearch = this.config.searchEnabled;
    };
    Choices.prototype._onInput = function() {
        var value = this.input.value;
        if (!value) {
            if (this._isTextElement) this.hideDropdown(true);
            else this._stopSearch();
            return;
        }
        if (!this._canAddItems()) return;
        if (this._canSearch) // do the search even if the entered text can not be added
        this._handleSearch(value);
        if (!this._canAddUserChoices) return;
        // determine if a notice needs to be displayed for why a search result can't be added
        this._canCreateItem(value);
        if (this._isSelectElement) {
            this._highlightPosition = 0; // reset to select the notice and/or exact match
            this._highlightChoice();
        }
    };
    Choices.prototype._onSelectKey = function(event, hasItems) {
        // If CTRL + A or CMD + A have been pressed and there are items to select
        if ((event.ctrlKey || event.metaKey) && hasItems) {
            this._canSearch = false;
            var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
            if (shouldHightlightAll) this.highlightAll();
        }
    };
    Choices.prototype._onEnterKey = function(event, hasActiveDropdown) {
        var _this = this;
        var value = this.input.value;
        var target = event.target;
        event.preventDefault();
        if (target && target.hasAttribute('data-button')) {
            this._handleButtonAction(target);
            return;
        }
        if (!hasActiveDropdown) {
            if (this._isSelectElement || this._notice) this.showDropdown();
            return;
        }
        var highlightedChoice = this.dropdown.element.querySelector(getClassNamesSelector(this.config.classNames.highlightedState));
        if (highlightedChoice && this._handleChoiceAction(highlightedChoice)) return;
        if (!target || !value) {
            this.hideDropdown(true);
            return;
        }
        if (!this._canAddItems()) return;
        var addedItem = false;
        this._store.withTxn(function() {
            addedItem = _this._findAndSelectChoiceByValue(value, true);
            if (!addedItem) {
                if (!_this._canAddUserChoices) return;
                if (!_this._canCreateItem(value)) return;
                _this._addChoice(mapInputToChoice(value, false, _this.config.allowHtmlUserInput), true, true);
                addedItem = true;
            }
            _this.clearInput();
            _this.unhighlightAll();
        });
        if (!addedItem) return;
        this._triggerChange(value);
        if (this.config.closeDropdownOnSelect) this.hideDropdown(true);
    };
    Choices.prototype._onEscapeKey = function(event, hasActiveDropdown) {
        if (hasActiveDropdown) {
            event.stopPropagation();
            this.hideDropdown(true);
            this._stopSearch();
            this.containerOuter.element.focus();
        }
    };
    Choices.prototype._onDirectionKey = function(event, hasActiveDropdown) {
        var keyCode = event.keyCode;
        // If up or down key is pressed, traverse through options
        if (hasActiveDropdown || this._isSelectOneElement) {
            this.showDropdown();
            this._canSearch = false;
            var directionInt = keyCode === KeyCodeMap.DOWN_KEY || keyCode === KeyCodeMap.PAGE_DOWN_KEY ? 1 : -1;
            var skipKey = event.metaKey || keyCode === KeyCodeMap.PAGE_DOWN_KEY || keyCode === KeyCodeMap.PAGE_UP_KEY;
            var nextEl = void 0;
            if (skipKey) {
                if (directionInt > 0) nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
            } else {
                var currentEl = this.dropdown.element.querySelector(getClassNamesSelector(this.config.classNames.highlightedState));
                if (currentEl) nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
            }
            if (nextEl) {
                // We prevent default to stop the cursor moving
                // when pressing the arrow
                if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                this._highlightChoice(nextEl);
            }
            // Prevent default to maintain cursor position whilst
            // traversing dropdown options
            event.preventDefault();
        }
    };
    Choices.prototype._onDeleteKey = function(event, items, hasFocusedInput) {
        // If backspace or delete key is pressed and the input has no value
        if (!this._isSelectOneElement && !event.target.value && hasFocusedInput) {
            this._handleBackspace(items);
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
            this._isScrollingOnIe = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
        }
        if (target === this.input.element) return;
        var item = target.closest('[data-button],[data-item],[data-choice]');
        if (item instanceof HTMLElement) {
            if ('button' in item.dataset) this._handleButtonAction(item);
            else if ('item' in item.dataset) this._handleItemAction(item, event.shiftKey);
            else if ('choice' in item.dataset) this._handleChoiceAction(item);
        }
        event.preventDefault();
    };
    /**
     * Handles mouseover event over this.dropdown
     * @param {MouseEvent} event
     */ Choices.prototype._onMouseOver = function(_a) {
        var target = _a.target;
        if (target instanceof HTMLElement && 'choice' in target.dataset) this._highlightChoice(target);
    };
    Choices.prototype._onClick = function(_a) {
        var target = _a.target;
        var containerOuter = this.containerOuter;
        var clickWasWithinContainer = containerOuter.element.contains(target);
        if (clickWasWithinContainer) {
            if (!this.dropdown.isActive && !containerOuter.isDisabled) {
                if (this._isTextElement) {
                    if (document.activeElement !== this.input.element) this.input.focus();
                } else {
                    this.showDropdown();
                    containerOuter.element.focus();
                }
            } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
        } else {
            containerOuter.removeFocusState();
            this.hideDropdown(true);
            this.unhighlightAll();
        }
    };
    Choices.prototype._onFocus = function(_a) {
        var target = _a.target;
        var containerOuter = this.containerOuter;
        var focusWasWithinContainer = target && containerOuter.element.contains(target);
        if (!focusWasWithinContainer) return;
        var targetIsInput = target === this.input.element;
        if (this._isTextElement) {
            if (targetIsInput) containerOuter.addFocusState();
        } else if (this._isSelectMultipleElement) {
            if (targetIsInput) {
                this.showDropdown(true);
                // If element is a select box, the focused element is the container and the dropdown
                // isn't already open, focus and show dropdown
                containerOuter.addFocusState();
            }
        } else {
            containerOuter.addFocusState();
            if (targetIsInput) this.showDropdown(true);
        }
    };
    Choices.prototype._onBlur = function(_a) {
        var target = _a.target;
        var containerOuter = this.containerOuter;
        var blurWasWithinContainer = target && containerOuter.element.contains(target);
        if (blurWasWithinContainer && !this._isScrollingOnIe) {
            if (target === this.input.element) {
                containerOuter.removeFocusState();
                this.hideDropdown(true);
                if (this._isTextElement || this._isSelectMultipleElement) this.unhighlightAll();
            } else if (target === this.containerOuter.element) {
                // Remove the focus state when the past outerContainer was the target
                containerOuter.removeFocusState();
                // Also close the dropdown if search is disabled
                if (!this._canSearch) this.hideDropdown(true);
            }
        } else {
            // On IE11, clicking the scollbar blurs our input and thus
            // closes the dropdown. To stop this, we refocus our input
            // if we know we are on IE *and* are scrolling.
            this._isScrollingOnIe = false;
            this.input.element.focus();
        }
    };
    Choices.prototype._onFormReset = function() {
        var _this = this;
        this._store.withTxn(function() {
            _this.clearInput();
            _this.hideDropdown();
            _this.refresh(false, false, true);
            if (_this._initialItems.length) _this.setChoiceByValue(_this._initialItems);
        });
    };
    Choices.prototype._highlightChoice = function(el) {
        if (el === void 0) el = null;
        var choices = Array.from(this.dropdown.element.querySelectorAll(selectableChoiceIdentifier));
        if (!choices.length) return;
        var passedEl = el;
        var highlightedState = this.config.classNames.highlightedState;
        var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(getClassNamesSelector(highlightedState)));
        // Remove any highlighted choices
        highlightedChoices.forEach(function(choice) {
            removeClassesFromElement(choice, highlightedState);
            choice.setAttribute('aria-selected', 'false');
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
        addClassesToElement(passedEl, highlightedState);
        passedEl.setAttribute('aria-selected', 'true');
        this.passedElement.triggerEvent(EventType.highlightChoice, {
            el: passedEl
        });
        if (this.dropdown.isActive) {
            // IE11 ignores aria-label and blocks virtual keyboard
            // if aria-activedescendant is set without a dropdown
            this.input.setActiveDescendant(passedEl.id);
            this.containerOuter.setActiveDescendant(passedEl.id);
        }
    };
    Choices.prototype._addItem = function(item, withEvents, userTriggered) {
        if (withEvents === void 0) withEvents = true;
        if (userTriggered === void 0) userTriggered = false;
        if (!item.id) throw new TypeError('item.id must be set before _addItem is called for a choice/item');
        if (this.config.singleModeForMultiSelect || this._isSelectOneElement) this.removeActiveItems(item.id);
        this._store.dispatch(addItem(item));
        if (withEvents) {
            this.passedElement.triggerEvent(EventType.addItem, this._getChoiceForOutput(item));
            if (userTriggered) this.passedElement.triggerEvent(EventType.choice, this._getChoiceForOutput(item));
        }
    };
    Choices.prototype._removeItem = function(item) {
        if (!item.id) return;
        this._store.dispatch(removeItem$1(item));
        var notice = this._notice;
        if (notice && notice.type === NoticeTypes.noChoices) this._clearNotice();
        this.passedElement.triggerEvent(EventType.removeItem, this._getChoiceForOutput(item));
    };
    Choices.prototype._addChoice = function(choice, withEvents, userTriggered) {
        if (withEvents === void 0) withEvents = true;
        if (userTriggered === void 0) userTriggered = false;
        if (choice.id) throw new TypeError('Can not re-add a choice which has already been added');
        var config = this.config;
        if (!config.duplicateItemsAllowed && this._store.choices.find(function(c) {
            return config.valueComparer(c.value, choice.value);
        })) return;
        // Generate unique id, in-place update is required so chaining _addItem works as expected
        this._lastAddedChoiceId++;
        choice.id = this._lastAddedChoiceId;
        choice.elementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choice.id);
        var prependValue = config.prependValue, appendValue = config.appendValue;
        if (prependValue) choice.value = prependValue + choice.value;
        if (appendValue) choice.value += appendValue.toString();
        if ((prependValue || appendValue) && choice.element) choice.element.value = choice.value;
        this._clearNotice();
        this._store.dispatch(addChoice(choice));
        if (choice.selected) this._addItem(choice, withEvents, userTriggered);
    };
    Choices.prototype._addGroup = function(group, withEvents) {
        var _this = this;
        if (withEvents === void 0) withEvents = true;
        if (group.id) throw new TypeError('Can not re-add a group which has already been added');
        this._store.dispatch(addGroup(group));
        if (!group.choices) return;
        // add unique id for the group(s), and do not store the full list of choices in this group
        this._lastAddedGroupId++;
        group.id = this._lastAddedGroupId;
        group.choices.forEach(function(item) {
            item.group = group;
            if (group.disabled) item.disabled = true;
            _this._addChoice(item, withEvents);
        });
    };
    Choices.prototype._createTemplates = function() {
        var _this = this;
        var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
        var userTemplates = {};
        if (typeof callbackOnCreateTemplates === 'function') userTemplates = callbackOnCreateTemplates.call(this, strToEl, escapeForTemplate, getClassNames);
        var templating = {};
        Object.keys(this._templates).forEach(function(name) {
            if (name in userTemplates) templating[name] = userTemplates[name].bind(_this);
            else templating[name] = _this._templates[name].bind(_this);
        });
        this._templates = templating;
    };
    Choices.prototype._createElements = function() {
        var templating = this._templates;
        var _a = this, config = _a.config, isSelectOneElement = _a._isSelectOneElement;
        var position = config.position, classNames = config.classNames;
        var elementType = this._elementType;
        this.containerOuter = new Container({
            element: templating.containerOuter(config, this._direction, this._isSelectElement, isSelectOneElement, config.searchEnabled, elementType, config.labelId),
            classNames: classNames,
            type: elementType,
            position: position
        });
        this.containerInner = new Container({
            element: templating.containerInner(config),
            classNames: classNames,
            type: elementType,
            position: position
        });
        this.input = new Input({
            element: templating.input(config, this._placeholderValue),
            classNames: classNames,
            type: elementType,
            preventPaste: !config.paste
        });
        this.choiceList = new List({
            element: templating.choiceList(config, isSelectOneElement)
        });
        this.itemList = new List({
            element: templating.itemList(config, isSelectOneElement)
        });
        this.dropdown = new Dropdown({
            element: templating.dropdown(config),
            classNames: classNames,
            type: elementType
        });
    };
    Choices.prototype._createStructure = function() {
        var _a = this, containerInner = _a.containerInner, containerOuter = _a.containerOuter, passedElement = _a.passedElement;
        var dropdownElement = this.dropdown.element;
        // Hide original element
        passedElement.conceal();
        // Wrap input in container preserving DOM ordering
        containerInner.wrap(passedElement.element);
        // Wrapper inner container with outer container
        containerOuter.wrap(containerInner.element);
        if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || '';
        else {
            if (this._placeholderValue) this.input.placeholder = this._placeholderValue;
            this.input.setWidth();
        }
        containerOuter.element.appendChild(containerInner.element);
        containerOuter.element.appendChild(dropdownElement);
        containerInner.element.appendChild(this.itemList.element);
        dropdownElement.appendChild(this.choiceList.element);
        if (!this._isSelectOneElement) containerInner.element.appendChild(this.input.element);
        else if (this.config.searchEnabled) dropdownElement.insertBefore(this.input.element, dropdownElement.firstChild);
        this._highlightPosition = 0;
        this._isSearching = false;
    };
    Choices.prototype._initStore = function() {
        var _this = this;
        this._store.subscribe(this._render).withTxn(function() {
            _this._addPredefinedChoices(_this._presetChoices, _this._isSelectOneElement && !_this._hasNonChoicePlaceholder, false);
        });
        if (!this._store.choices.length || this._isSelectOneElement && this._hasNonChoicePlaceholder) this._render();
    };
    Choices.prototype._addPredefinedChoices = function(choices, selectFirstOption, withEvents) {
        var _this = this;
        if (selectFirstOption === void 0) selectFirstOption = false;
        if (withEvents === void 0) withEvents = true;
        if (selectFirstOption) {
            /**
             * If there is a selected choice already or the choice is not the first in
             * the array, add each choice normally.
             *
             * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
             */ var noSelectedChoices = choices.findIndex(function(choice) {
                return choice.selected;
            }) === -1;
            if (noSelectedChoices) choices.some(function(choice) {
                if (choice.disabled || 'choices' in choice) return false;
                choice.selected = true;
                return true;
            });
        }
        choices.forEach(function(item) {
            if ('choices' in item) {
                if (_this._isSelectElement) _this._addGroup(item, withEvents);
            } else _this._addChoice(item, withEvents);
        });
    };
    Choices.prototype._findAndSelectChoiceByValue = function(value, userTriggered) {
        var _this = this;
        if (userTriggered === void 0) userTriggered = false;
        // Check 'value' property exists and the choice isn't already selected
        var foundChoice = this._store.choices.find(function(choice) {
            return _this.config.valueComparer(choice.value, value);
        });
        if (foundChoice && !foundChoice.disabled && !foundChoice.selected) {
            this._addItem(foundChoice, true, userTriggered);
            return true;
        }
        return false;
    };
    Choices.prototype._generatePlaceholderValue = function() {
        var config = this.config;
        if (!config.placeholder) return null;
        if (this._hasNonChoicePlaceholder) return config.placeholderValue;
        if (this._isSelectElement) {
            var placeholderOption = this.passedElement.placeholderOption;
            return placeholderOption ? placeholderOption.text : null;
        }
        return null;
    };
    Choices.prototype._warnChoicesInitFailed = function(caller) {
        if (this.config.silent) return;
        if (!this.initialised) throw new TypeError("".concat(caller, " called on a non-initialised instance of Choices"));
        else if (!this.initialisedOK) throw new TypeError("".concat(caller, " called for an element which has multiple instances of Choices initialised on it"));
    };
    Choices.version = '11.0.6';
    return Choices;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}],"119aE":[function(require,module,exports,__globalThis) {
!function(e, t) {
    module.exports = t();
}(this, function() {
    "use strict";
    function e(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function t(e, t) {
        for(var i = 0; i < t.length; i++){
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, n(s.key), s);
        }
    }
    function i(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
    }
    function n(e) {
        var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var n = i.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" == typeof t ? t : t + "";
    }
    function s(e) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    var l = Date.now();
    function o() {
        var e = {}, t = !0, i = 0, n = arguments.length;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++);
        for(var s = function(i) {
            for(var n in i)Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = o(!0, e[n], i[n]) : e[n] = i[n]);
        }; i < n; i++){
            var l = arguments[i];
            s(l);
        }
        return e;
    }
    function r(e, t) {
        if ((E(e) || e === window || e === document) && (e = [
            e
        ]), L(e) || I(e) || (e = [
            e
        ]), 0 != M(e)) {
            if (L(e) && !I(e)) for(var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
            else if (I(e)) {
                for(var s in e)if (P(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
            }
        }
    }
    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n = e[l] = e[l] || [], s = {
            all: n,
            evt: null,
            found: null
        };
        return t && i && M(n) > 0 && r(n, function(e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return s.found = !0, s.evt = n, !1;
        }), s;
    }
    function h(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = t.onElement, n = t.withCallback, s = t.avoidDuplicate, l = void 0 === s || s, o = t.once, h = void 0 !== o && o, d = t.useCapture, c = void 0 !== d && d, u = arguments.length > 2 ? arguments[2] : void 0, g = i || [];
        function v(e) {
            C(n) && n.call(u, e, this), h && v.destroy();
        }
        return k(g) && (g = document.querySelectorAll(g)), v.destroy = function() {
            r(g, function(t) {
                var i = a(t, e, v);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c);
            });
        }, r(g, function(t) {
            var i = a(t, e, v);
            (t.addEventListener && l && !i.found || !l) && (t.addEventListener(e, v, c), i.all.push({
                eventName: e,
                fn: v
            }));
        }), v;
    }
    function d(e, t) {
        r(t.split(" "), function(t) {
            return e.classList.add(t);
        });
    }
    function c(e, t) {
        r(t.split(" "), function(t) {
            return e.classList.remove(t);
        });
    }
    function u(e, t) {
        return e.classList.contains(t);
    }
    function g(e, t) {
        for(; e !== document.body;){
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
        }
    }
    function v(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" === t) return C(i) && i(), !1;
        var n = b(), s = t.split(" ");
        r(s, function(t) {
            d(e, "g" + t);
        }), h(n, {
            onElement: e,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e, t) {
                r(s, function(e) {
                    c(t, "g" + e);
                }), C(i) && i();
            }
        });
    }
    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t;
    }
    function p(e) {
        e.style.display = "block";
    }
    function m(e) {
        e.style.display = "none";
    }
    function y(e) {
        var t = document.createDocumentFragment(), i = document.createElement("div");
        for(i.innerHTML = e; i.firstChild;)t.appendChild(i.firstChild);
        return t;
    }
    function x() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        };
    }
    function b() {
        var e, t = document.createElement("fakeelement"), i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
        };
        for(e in i)if (void 0 !== t.style[e]) return i[e];
    }
    function S(e, t, i, n) {
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
    function w(e, t, i) {
        if (O(e)) console.error("Inject assets error");
        else if (C(t) && (i = t, t = !1), k(t) && t in window) C(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void (C(i) && i());
                var s = document.getElementsByTagName("head")[0], l = s.querySelectorAll('link[rel="stylesheet"]'), o = document.createElement("link");
                return o.rel = "stylesheet", o.type = "text/css", o.href = e, o.media = "all", l ? s.insertBefore(o, l[0]) : s.appendChild(o), void (C(i) && i());
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (C(i)) {
                    if (k(t)) return S(function() {
                        return void 0 !== window[t];
                    }, function() {
                        i();
                    }), !1;
                    i();
                }
            } else {
                var r = document.createElement("script");
                r.type = "text/javascript", r.src = e, r.onload = function() {
                    if (C(i)) {
                        if (k(t)) return S(function() {
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
    function T() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
    }
    function C(e) {
        return "function" == typeof e;
    }
    function k(e) {
        return "string" == typeof e;
    }
    function E(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType);
    }
    function A(e) {
        return Array.isArray(e);
    }
    function L(e) {
        return e && e.length && isFinite(e.length);
    }
    function I(e) {
        return "object" === s(e) && null != e && !C(e) && !A(e);
    }
    function O(e) {
        return null == e;
    }
    function P(e, t) {
        return null !== e && hasOwnProperty.call(e, t);
    }
    function M(e) {
        if (I(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for(var i in e)P(e, i) && t++;
            return t;
        }
        return e.length;
    }
    function z(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
    }
    function X() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1, t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        r(t, function(e) {
            i.push(e.getAttribute("data-taborder"));
        });
        var n = Math.max.apply(Math, i.map(function(e) {
            return parseInt(e);
        })), s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var l = i.filter(function(e) {
            return e >= parseInt(s);
        }), o = l.sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(o, '"]'));
    }
    function Y(e) {
        if (e.events.hasOwnProperty("keyboard")) return !1;
        e.events.keyboard = h("keydown", {
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
                        var r = X();
                        return void (r && (r.focus(), d(r, "focused")));
                    }
                    var a = X(s.getAttribute("data-taborder"));
                    c(s, "focused"), a && (a.focus(), d(a, "focused"));
                }
                39 == n && e.nextSlide(), 37 == n && e.prevSlide(), 27 == n && e.close();
            }
        });
    }
    var q = i(function t(i, n) {
        var s = this, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (e(this, t), this.img = i, this.slide = n, this.onclose = l, this.img.setZoomEvents) return !1;
        this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
            return s.dragStart(e);
        }, !1), this.img.addEventListener("mouseup", function(e) {
            return s.dragEnd(e);
        }, !1), this.img.addEventListener("mousemove", function(e) {
            return s.drag(e);
        }, !1), this.img.addEventListener("click", function(e) {
            return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void (s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn();
        }, !1), this.img.setZoomEvents = !0;
    }, [
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
    ]), N = i(function t() {
        var i = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e(this, t);
        var s = n.dragEl, l = n.toleranceX, o = void 0 === l ? 40 : l, r = n.toleranceY, a = void 0 === r ? 65 : r, h = n.slide, d = void 0 === h ? null : h, c = n.instance, u = void 0 === c ? null : c;
        this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = o, this.toleranceY = a, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = d, this.instance = u, this.el.addEventListener("mousedown", function(e) {
            return i.dragStart(e);
        }, !1), this.el.addEventListener("mouseup", function(e) {
            return i.dragEnd(e);
        }, !1), this.el.addEventListener("mousemove", function(e) {
            return i.drag(e);
        }, !1);
    }, [
        {
            key: "dragStart",
            value: function(e) {
                if (this.slide.classList.contains("zoomed")) this.active = !1;
                else {
                    "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                    var t = e.target.nodeName.toLowerCase();
                    e.target.classList.contains("nodrag") || g(e.target, ".nodrag") || -1 !== [
                        "input",
                        "select",
                        "textarea",
                        "button",
                        "a"
                    ].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && g(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = g(e.target, ".ginner-container")));
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
    ]);
    function D(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = new Image, o = "gSlideTitle_" + i, r = "gSlideDesc_" + i;
        l.addEventListener("load", function() {
            C(n) && n();
        }, !1), l.src = t.href, "" != t.sizes && "" != t.srcset && (l.sizes = t.sizes, l.srcset = t.srcset), l.alt = "", O(t.alt) || "" === t.alt || (l.alt = t.alt), "" !== t.title && l.setAttribute("aria-labelledby", o), "" !== t.description && l.setAttribute("aria-describedby", r), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (l.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (l.style.height = t.height), s.insertBefore(l, s.firstChild);
    }
    function _(e, t, i, n) {
        var s = this, l = e.querySelector(".ginner-container"), o = "gvideo" + i, r = e.querySelector(".gslide-media"), a = this.getAllPlayers();
        d(l, "gvideo-container"), r.insertBefore(y('<div class="gvideo-wrapper"></div>'), r.firstChild);
        var h = e.querySelector(".gvideo-wrapper");
        w(this.settings.plyr.css, "Plyr");
        var c = t.href, u = null == t ? void 0 : t.videoProvider, g = !1;
        r.style.maxWidth = t.width, w(this.settings.plyr.js, "Plyr", function() {
            if (!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || c.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var l = '<video id="' + o + '" ';
                l += 'style="background:#000; max-width: '.concat(t.width, ';" '), l += 'preload="metadata" ', l += 'x-webkit-airplay="allow" ', l += "playsinline ", l += "controls ", l += 'class="gvideo-local">', l += '<source src="'.concat(c, '">'), g = y(l += "</video>");
            }
            var r = g || y('<div id="'.concat(o, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(c, '"></div>'));
            d(h, "".concat(u, "-video gvideo")), h.appendChild(r), h.setAttribute("data-id", o), h.setAttribute("data-index", i);
            var v = P(s.settings.plyr, "config") ? s.settings.plyr.config : {}, f = new Plyr("#" + o, v);
            f.on("ready", function(e) {
                a[o] = e.detail.plyr, C(n) && n();
            }), S(function() {
                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready;
            }, function() {
                s.resize(e);
            }), f.on("enterfullscreen", W), f.on("exitfullscreen", W);
        });
    }
    function W(e) {
        var t = g(e.target, ".gslide-media");
        "enterfullscreen" === e.type && d(t, "fullscreen"), "exitfullscreen" === e.type && c(t, "fullscreen");
    }
    function B(e, t, i, n) {
        var s, l = this, o = e.querySelector(".gslide-media"), r = !(!P(t, "href") || !t.href) && t.href.split("#").pop().trim(), a = !(!P(t, "content") || !t.content) && t.content;
        if (a && (k(a) && (s = y('<div class="ginlined-content">'.concat(a, "</div>"))), E(a))) {
            "none" == a.style.display && (a.style.display = "block");
            var c = document.createElement("div");
            c.className = "ginlined-content", c.appendChild(a), s = c;
        }
        if (r) {
            var u = document.getElementById(r);
            if (!u) return !1;
            var g = u.cloneNode(!0);
            g.style.height = t.height, g.style.maxWidth = t.width, d(g, "ginlined-content"), s = g;
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        o.style.height = t.height, o.style.width = t.width, o.appendChild(s), this.events["inlineclose" + r] = h("click", {
            onElement: o.querySelectorAll(".gtrigger-close"),
            withCallback: function(e) {
                e.preventDefault(), l.close();
            }
        }), C(n) && n();
    }
    function H(e, t, i, n) {
        var s = e.querySelector(".gslide-media"), l = function(e) {
            var t = e.url, i = e.allow, n = e.callback, s = e.appendTo, l = document.createElement("iframe");
            return l.className = "vimeo-video gvideo", l.src = t, l.style.width = "100%", l.style.height = "100%", i && l.setAttribute("allow", i), l.onload = function() {
                l.onload = null, d(l, "node-ready"), C(n) && n();
            }, s && s.appendChild(l), l;
        }({
            url: t.href,
            callback: n
        });
        s.parentNode.style.maxWidth = t.width, s.parentNode.style.height = t.height, s.appendChild(l);
    }
    var j = i(function t() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e(this, t), this.defaults = {
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
        }, I(i) && (this.defaults = o(this.defaults, i));
    }, [
        {
            key: "sourceType",
            value: function(e) {
                var t = e;
                return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) ? "image" : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/shorts\/([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || null !== e.match(/\.(mp4|ogg|webm|mov)/) ? "video" : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/) ? "audio" : e.indexOf("#") > -1 && "" !== t.split("#").pop().trim() ? "inline" : e.indexOf("goajax=true") > -1 ? "ajax" : "external";
            }
        },
        {
            key: "parseConfig",
            value: function(e, t) {
                var i = this, n = o({
                    descPosition: t.descPosition
                }, this.defaults);
                if (I(e) && !E(e)) {
                    P(e, "type") || (P(e, "content") && e.content ? e.type = "inline" : P(e, "href") && (e.type = this.sourceType(e.href)));
                    var s = o(n, e);
                    return this.setSize(s, t), s;
                }
                var l = "", a = e.getAttribute("data-glightbox"), h = e.nodeName.toLowerCase();
                if ("a" === h && (l = e.href), "img" === h && (l = e.src, n.alt = e.alt), n.href = l, r(n, function(s, l) {
                    P(t, l) && "width" !== l && (n[l] = t[l]);
                    var o = e.dataset[l];
                    O(o) || (n[l] = i.sanitizeValue(o));
                }), n.content && (n.type = "inline"), !n.type && l && (n.type = this.sourceType(l)), O(a)) {
                    if (!n.title && "a" == h) {
                        var d = e.title;
                        O(d) || "" === d || (n.title = d);
                    }
                    if (!n.title && "img" == h) {
                        var c = e.alt;
                        O(c) || "" === c || (n.title = c);
                    }
                } else {
                    var u = [];
                    r(n, function(e, t) {
                        u.push(";\\s?" + t);
                    }), u = u.join("\\s?:|"), "" !== a.trim() && r(n, function(e, t) {
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
                return e.width = P(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = P(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e;
            }
        },
        {
            key: "checkSize",
            value: function(e) {
                return z(e) ? "".concat(e, "px") : e;
            }
        },
        {
            key: "sanitizeValue",
            value: function(e) {
                return "true" !== e && "false" !== e ? e : "true" === e;
            }
        }
    ]), V = i(function t(i, n, s) {
        e(this, t), this.element = i, this.instance = n, this.index = s;
    }, [
        {
            key: "setContent",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (u(t, "loaded")) return !1;
                var n = this.instance.settings, s = this.slideConfig, l = T();
                C(n.beforeSlideLoad) && n.beforeSlideLoad({
                    index: this.index,
                    slide: t,
                    player: !1
                });
                var o = s.type, r = s.descPosition, a = t.querySelector(".gslide-media"), h = t.querySelector(".gslide-title"), c = t.querySelector(".gslide-desc"), g = t.querySelector(".gdesc-inner"), v = i, f = "gSlideTitle_" + this.index, p = "gSlideDesc_" + this.index;
                if (C(n.afterSlideLoad) && (v = function() {
                    C(i) && i(), n.afterSlideLoad({
                        index: e.index,
                        slide: t,
                        player: e.instance.getSlidePlayerInstance(e.index)
                    });
                }), "" == s.title && "" == s.description ? g && g.parentNode.parentNode.removeChild(g.parentNode) : (h && "" !== s.title ? (h.id = f, h.innerHTML = s.title) : h.parentNode.removeChild(h), c && "" !== s.description ? (c.id = p, l && n.moreLength > 0 ? (s.smallDescription = this.slideShortDesc(s.description, n.moreLength, n.moreText), c.innerHTML = s.smallDescription, this.descriptionEvents(c, s)) : c.innerHTML = s.description) : c.parentNode.removeChild(c), d(a.parentNode, "desc-".concat(r)), d(g.parentNode, "description-".concat(r))), d(a, "gslide-".concat(o)), d(t, "loaded"), "video" !== o) {
                    if ("external" !== o) return "inline" === o ? (B.apply(this.instance, [
                        t,
                        s,
                        this.index,
                        v
                    ]), void (s.draggable && new N({
                        dragEl: t.querySelector(".gslide-inline"),
                        toleranceX: n.dragToleranceX,
                        toleranceY: n.dragToleranceY,
                        slide: t,
                        instance: this.instance
                    }))) : void ("image" !== o ? C(v) && v() : D(t, s, this.index, function() {
                        var i = t.querySelector("img");
                        s.draggable && new N({
                            dragEl: i,
                            toleranceX: n.dragToleranceX,
                            toleranceY: n.dragToleranceY,
                            slide: t,
                            instance: e.instance
                        }), s.zoomable && i.naturalWidth > i.offsetWidth && (d(i, "zoomable"), new q(i, t, function() {
                            e.instance.resize();
                        })), C(v) && v();
                    }));
                    H.apply(this, [
                        t,
                        s,
                        this.index,
                        v
                    ]);
                } else _.apply(this.instance, [
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
                h("click", {
                    onElement: n,
                    withCallback: function(e, n) {
                        e.preventDefault();
                        var s = document.body, l = g(n, ".gslide-desc");
                        if (!l) return !1;
                        l.innerHTML = t.description, d(s, "gdesc-open");
                        var o = h("click", {
                            onElement: [
                                s,
                                g(l, ".gslide-description")
                            ],
                            withCallback: function(e, n) {
                                "a" !== e.target.nodeName.toLowerCase() && (c(s, "gdesc-open"), d(s, "gdesc-closed"), l.innerHTML = t.smallDescription, i.descriptionEvents(l, t), setTimeout(function() {
                                    c(s, "gdesc-closed");
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
                return y(this.instance.settings.slideHTML);
            }
        },
        {
            key: "getConfig",
            value: function() {
                E(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                var e = new j(this.instance.settings.slideExtraAttributes);
                return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig;
            }
        }
    ]);
    function F(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function R(e, t) {
        var i = function(e, t) {
            var i = F(e) * F(t);
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
    var G = i(function t(i) {
        e(this, t), this.handlers = [], this.el = i;
    }, [
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
    ]);
    function Z(e, t) {
        var i = new G(e);
        return i.add(t), i;
    }
    var U = i(function t(i, n) {
        e(this, t), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
            x: null,
            y: null
        }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
        var s = function() {};
        this.rotate = Z(this.element, n.rotate || s), this.touchStart = Z(this.element, n.touchStart || s), this.multipointStart = Z(this.element, n.multipointStart || s), this.multipointEnd = Z(this.element, n.multipointEnd || s), this.pinch = Z(this.element, n.pinch || s), this.swipe = Z(this.element, n.swipe || s), this.tap = Z(this.element, n.tap || s), this.doubleTap = Z(this.element, n.doubleTap || s), this.longTap = Z(this.element, n.longTap || s), this.singleTap = Z(this.element, n.singleTap || s), this.pressMove = Z(this.element, n.pressMove || s), this.twoFingerPressMove = Z(this.element, n.twoFingerPressMove || s), this.touchMove = Z(this.element, n.touchMove || s), this.touchEnd = Z(this.element, n.touchEnd || s), this.touchCancel = Z(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
            x: null,
            y: null
        };
    }, [
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
                            t.x = i.x, t.y = i.y, this.pinchStartLen = F(t), this.multipointStart.dispatch(e, this.element);
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
                        null !== t.x && (this.pinchStartLen > 0 && (e.zoom = F(r) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = R(r, t), this.rotate.dispatch(e, this.element)), t.x = r.x, t.y = r.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + l - this.sx2) / 2, e.deltaY = (s - this.y2 + o - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = l, this.sy2 = o;
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
    ]);
    function $(e) {
        var t = function() {
            var e, t = document.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for(e in i)if (void 0 !== t.style[e]) return i[e];
        }(), i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, n = u(e, "gslide-media") ? e : e.querySelector(".gslide-media"), s = g(n, ".ginner-container"), l = e.querySelector(".gslide-description");
        i > 769 && (n = s), d(n, "greset"), f(n, "translate3d(0, 0, 0)"), h(t, {
            onElement: n,
            once: !0,
            withCallback: function(e, t) {
                c(n, "greset");
            }
        }), n.style.opacity = "", l && (l.style.opacity = "");
    }
    function J(e) {
        if (e.events.hasOwnProperty("touch")) return !1;
        var t, i, n, s = x(), l = s.width, o = s.height, r = !1, a = null, h = null, v = null, p = !1, m = 1, y = 1, b = !1, S = !1, w = null, T = null, C = null, k = null, E = 0, A = 0, L = !1, I = !1, O = {}, P = {}, M = 0, z = 0, X = document.getElementById("glightbox-slider"), Y = document.querySelector(".goverlay"), q = new U(X, {
            touchStart: function(t) {
                if (r = !0, (u(t.targetTouches[0].target, "ginner-container") || g(t.targetTouches[0].target, ".gslide-desc") || "a" == t.targetTouches[0].target.nodeName.toLowerCase()) && (r = !1), g(t.targetTouches[0].target, ".gslide-inline") && !u(t.targetTouches[0].target.parentNode, "gslide-inline") && (r = !1), r) {
                    if (P = t.targetTouches[0], O.pageX = t.targetTouches[0].pageX, O.pageY = t.targetTouches[0].pageY, M = t.targetTouches[0].clientX, z = t.targetTouches[0].clientY, a = e.activeSlide, h = a.querySelector(".gslide-media"), n = a.querySelector(".gslide-inline"), v = null, u(h, "gslide-image") && (v = h.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (h = a.querySelector(".ginner-container")), c(Y, "greset"), t.pageX > 20 && t.pageX < window.innerWidth - 20) return;
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
                    var d, c = s.targetTouches[0].clientX, u = s.targetTouches[0].clientY, g = M - c, m = z - u;
                    if (Math.abs(g) > Math.abs(m) ? (L = !1, I = !0) : (I = !1, L = !0), t = P.pageX - O.pageX, E = 100 * t / l, i = P.pageY - O.pageY, A = 100 * i / o, L && v && (d = 1 - Math.abs(i) / o, Y.style.opacity = d, e.settings.touchFollowAxis && (E = 0)), I && (d = 1 - Math.abs(t) / l, h.style.opacity = d, e.settings.touchFollowAxis && (A = 0)), !v) return f(h, "translate3d(".concat(E, "%, 0, 0)"));
                    f(h, "translate3d(".concat(E, "%, ").concat(A, "%, 0)"));
                }
            },
            touchEnd: function() {
                if (r) {
                    if (p = !1, S || b) return C = w, void (k = T);
                    var t = Math.abs(parseInt(A)), i = Math.abs(parseInt(E));
                    if (!(t > 29 && v)) return t < 29 && i < 25 ? (d(Y, "greset"), Y.style.opacity = 1, $(h)) : void 0;
                    e.close();
                }
            },
            multipointEnd: function() {
                setTimeout(function() {
                    b = !1;
                }, 50);
            },
            multipointStart: function() {
                b = !0, m = y || 1;
            },
            pinch: function(e) {
                if (!v || p) return !1;
                b = !0, v.scaleX = v.scaleY = m * e.zoom;
                var t = m * e.zoom;
                if (S = !0, t <= 1) return S = !1, t = 1, k = null, C = null, w = null, T = null, void v.setAttribute("style", "");
                t > 4.5 && (t = 4.5), v.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), y = t;
            },
            pressMove: function(e) {
                if (S && !b) {
                    var t = P.pageX - O.pageX, i = P.pageY - O.pageY;
                    C && (t += C), k && (i += k), w = t, T = i;
                    var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                    y && (n += " scale3d(".concat(y, ", ").concat(y, ", 1)")), f(v, n);
                }
            },
            swipe: function(t) {
                if (!S) {
                    if (b) b = !1;
                    else {
                        if ("Left" == t.direction) {
                            if (e.index == e.elements.length - 1) return $(h);
                            e.nextSlide();
                        }
                        if ("Right" == t.direction) {
                            if (0 == e.index) return $(h);
                            e.prevSlide();
                        }
                    }
                }
            }
        });
        e.events.touch = q;
    }
    var K = T(), Q = null !== T() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints, ee = document.getElementsByTagName("html")[0], te = {
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
    }, ie = i(function t() {
        var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e(this, t), this.customOptions = i, this.settings = o(te, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1;
    }, [
        {
            key: "init",
            value: function() {
                var e = this, t = this.getSelector();
                t && (this.baseEvents = h("click", {
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
                var i = z(t) ? t : this.settings.startAt;
                if (E(e)) {
                    var n = e.getAttribute("data-gallery");
                    n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), O(i) && (i = this.getElementIndex(e)) < 0 && (i = 0);
                }
                z(i) || (i = 0), this.build(), v(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                var s = document.body, l = window.innerWidth - document.documentElement.clientWidth;
                if (l > 0) {
                    var o = document.createElement("style");
                    o.type = "text/css", o.className = "gcss-styles", o.innerText = ".gscrollbar-fixer {margin-right: ".concat(l, "px}"), document.head.appendChild(o), d(s, "gscrollbar-fixer");
                }
                d(s, "glightbox-open"), d(ee, "glightbox-open"), K && (d(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")) : (c(this.prevButton, "glightbox-button-hidden"), c(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), C(this.settings.onOpen) && this.settings.onOpen(), Q && this.settings.touchNavigation && J(this), this.settings.keyboardNavigation && Y(this);
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
                p(this.loader), this.index = parseInt(t);
                var n = this.slidesContainer.querySelector(".current");
                n && c(n, "current"), this.slideAnimateOut();
                var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                if (u(s, "loaded")) this.slideAnimateIn(s, i), m(this.loader);
                else {
                    p(this.loader);
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
                        m(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", o);
                    });
                }
                this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && u(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s;
            }
        },
        {
            key: "preloadSlide",
            value: function(e) {
                var t = this;
                if (e < 0 || e > this.elements.length - 1) return !1;
                if (O(this.elements[e])) return !1;
                var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                if (u(i, "loaded")) return !1;
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
                var i = new V(e, this, t), n = i.getConfig(), s = o({}, n), l = i.create(), r = this.elements.length - 1;
                s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                var a = null, h = null;
                if (this.slidesContainer) {
                    if (t > r) this.slidesContainer.appendChild(l);
                    else {
                        var d = this.slidesContainer.querySelectorAll(".gslide")[t];
                        this.slidesContainer.insertBefore(l, d);
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
                }), C(this.settings.slideInserted) && this.settings.slideInserted({
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
                t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), C(this.settings.slideRemoved) && this.settings.slideRemoved(e);
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
                    slideConfig: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                    trigger: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
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
                if (n.offsetWidth > 0 && s && (m(s), s.style.display = ""), c(e, this.effectsClasses), t) v(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                    i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                        prev: l,
                        current: o
                    }), C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                        l,
                        o
                    ]);
                });
                else {
                    var r = this.settings.slideEffect, a = "none" !== r ? this.settings.cssEfects[r].in : r;
                    this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (a = this.settings.cssEfects.slideBack.in), v(e, a, function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: l,
                            current: o
                        }), C(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [
                            l,
                            o
                        ]);
                    });
                }
                setTimeout(function() {
                    i.resize(e);
                }, 100), d(e, "current");
            }
        },
        {
            key: "slideAnimateOut",
            value: function() {
                if (!this.prevActiveSlide) return !1;
                var e = this.prevActiveSlide;
                c(e, this.effectsClasses), d(e, "prev");
                var t = this.settings.slideEffect, i = "none" !== t ? this.settings.cssEfects[t].out : t;
                this.slidePlayerPause(e), this.trigger("slide_before_change", {
                    prev: {
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        slideNode: this.prevActiveSlide,
                        slideIndex: this.prevActiveSlideIndex,
                        slideConfig: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                        trigger: O(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
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
                }), C(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [
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
                ]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), v(e, i, function() {
                    var t = e.querySelector(".ginner-container"), i = e.querySelector(".gslide-media"), n = e.querySelector(".gslide-description");
                    t.style.transform = "", i.style.transform = "", c(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), c(e, "prev");
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
                return !(!P(i, t) || !i[t]) && i[t];
            }
        },
        {
            key: "stopSlideVideo",
            value: function(e) {
                if (E(e)) {
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
                if (E(e)) {
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
                if (E(e)) {
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
                if (!K || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                    if (E(e)) {
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
                e && e.length && r(e, function(e, n) {
                    var s = new V(e, t, n), l = s.getConfig(), r = o({}, l);
                    r.slideConfig = l, r.instance = s, r.index = n, i.push(r);
                }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (r(this.elements, function() {
                    var e = y(t.settings.slideHTML);
                    t.slidesContainer.appendChild(e);
                }), this.showSlide(0, !0)));
            }
        },
        {
            key: "getElementIndex",
            value: function(e) {
                var t = !1;
                return r(this.elements, function(i, n) {
                    if (P(i, "node") && i.node == e) return t = n, !0;
                }), t;
            }
        },
        {
            key: "getElements",
            value: function() {
                var e = this, t = [];
                this.elements = this.elements ? this.elements : [], !O(this.settings.elements) && A(this.settings.elements) && this.settings.elements.length && r(this.settings.elements, function(i, n) {
                    var s = new V(i, e, n), l = s.getConfig(), r = o({}, l);
                    r.node = !1, r.index = n, r.instance = s, r.slideConfig = l, t.push(r);
                });
                var i = !1;
                return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i ? (r(i, function(i, n) {
                    var s = new V(i, e, n), l = s.getConfig(), r = o({}, l);
                    r.node = i, r.index = n, r.instance = s, r.slideConfig = l, r.gallery = i.getAttribute("data-gallery"), t.push(r);
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
                r(t, function(e) {
                    e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"));
                });
                var n = P(this.settings.svg, "next") ? this.settings.svg.next : "", s = P(this.settings.svg, "prev") ? this.settings.svg.prev : "", l = P(this.settings.svg, "close") ? this.settings.svg.close : "", o = this.settings.lightboxHTML;
                o = y(o = (o = (o = o.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, l)), document.body.appendChild(o);
                var a = document.getElementById("glightbox-body");
                this.modal = a;
                var c = a.querySelector(".gclose");
                this.prevButton = a.querySelector(".gprev"), this.nextButton = a.querySelector(".gnext"), this.overlay = a.querySelector(".goverlay"), this.loader = a.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, d(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && c && (this.events.close = h("click", {
                    onElement: c,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.close();
                    }
                })), c && !this.settings.closeButton && c.parentNode.removeChild(c), this.nextButton && (this.events.next = h("click", {
                    onElement: this.nextButton,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.nextSlide();
                    }
                })), this.prevButton && (this.events.prev = h("click", {
                    onElement: this.prevButton,
                    withCallback: function(t, i) {
                        t.preventDefault(), e.prevSlide();
                    }
                })), this.settings.closeOnOutsideClick && (this.events.outClose = h("click", {
                    onElement: a,
                    withCallback: function(t, i) {
                        e.preventOutsideClick || u(document.body, "glightbox-mobile") || g(t.target, ".ginner-container") || g(t.target, ".gbtn") || u(t.target, "gnext") || u(t.target, "gprev") || e.close();
                    }
                })), r(this.elements, function(t, i) {
                    e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i];
                }), Q && d(document.body, "glightbox-touch"), this.events.resize = h("resize", {
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
                if ((e = e || this.activeSlide) && !u(e, "zoomed")) {
                    var t = x(), i = e.querySelector(".gvideo-wrapper"), n = e.querySelector(".gslide-image"), s = this.slideDescription, l = t.width, o = t.height;
                    if (l <= 768 ? d(document.body, "glightbox-mobile") : c(document.body, "glightbox-mobile"), i || n) {
                        var r = !1;
                        if (s && (u(s, "description-bottom") || u(s, "description-top")) && !u(s, "gabsolute") && (r = !0), n) {
                            if (l <= 768) n.querySelector("img");
                            else if (r) {
                                var a, h, g = s.offsetHeight, v = n.querySelector("img"), f = null === (a = this.elements[this.index]) || void 0 === a ? void 0 : a.node, p = "100vh";
                                f && (p = null !== (h = f.getAttribute("data-height")) && void 0 !== h ? h : p), v.setAttribute("style", "max-height: calc(".concat(p, " - ").concat(g, "px)")), s.setAttribute("style", "max-width: ".concat(v.offsetWidth, "px;"));
                            }
                        }
                        if (i) {
                            var m = P(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                            if (!m) {
                                var y = i.clientWidth, b = i.clientHeight, S = y / b;
                                m = "".concat(y / S, ":").concat(b / S);
                            }
                            var w = m.split(":"), T = this.settings.videosWidth, C = this.settings.videosWidth, k = (C = z(T) || -1 !== T.indexOf("px") ? parseInt(T) : -1 !== T.indexOf("vw") ? l * parseInt(T) / 100 : -1 !== T.indexOf("vh") ? o * parseInt(T) / 100 : -1 !== T.indexOf("%") ? l * parseInt(T) / 100 : parseInt(i.clientWidth)) / (parseInt(w[0]) / parseInt(w[1]));
                            if (k = Math.floor(k), r && (o -= s.offsetHeight), C > l || k > o || o < k && l > C) {
                                var E = i.offsetWidth, A = i.offsetHeight, L = o / A, I = {
                                    width: E * L,
                                    height: A * L
                                };
                                i.parentNode.setAttribute("style", "max-width: ".concat(I.width, "px")), r && s.setAttribute("style", "max-width: ".concat(I.width, "px;"));
                            } else i.parentNode.style.maxWidth = "".concat(T), r && s.setAttribute("style", "max-width: ".concat(T, ";"));
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
                c(this.nextButton, "disabled"), c(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (d(this.prevButton, "disabled"), d(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || d(this.nextButton, "disabled") : d(this.prevButton, "disabled");
            }
        },
        {
            key: "loop",
            value: function() {
                var e = P(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                return e = P(this.settings, "loop") ? this.settings.loop : e, e;
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
                this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && r(this.bodyHiddenChildElms, function(e) {
                    e.removeAttribute("aria-hidden");
                }), d(this.modal, "glightbox-closing"), v(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), v(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                    if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                        for(var t in e.events)e.events.hasOwnProperty(t) && e.events[t].destroy();
                        e.events = null;
                    }
                    var i = document.body;
                    c(ee, "glightbox-open"), c(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), C(e.settings.onClose) && e.settings.onClose();
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
                if (!e || !C(t)) throw new TypeError("Event name and callback must be defined");
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
                r(this.apiEvents, function(t, s) {
                    var l = t.evt, o = t.once, r = t.callback;
                    l == e && (r(i), o && n.push(s));
                }), n.length && r(n, function(e) {
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
                return "3.3.1";
            }
        }
    ]);
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new ie(e);
        return t.init(), t;
    };
});

},{}],"bzYwE":[function(require,module,exports,__globalThis) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    var root = document;
    var createText = root.createTextNode.bind(root);
    /**
 * # setProperty
 * Apply a CSS var
 * @param {HTMLElement} el
 * @param {string} varName 
 * @param {string|number} value 
 */ function setProperty(el, varName, value) {
        el.style.setProperty(varName, value);
    }
    /**
 * 
 * @param {!HTMLElement} el 
 * @param {!HTMLElement} child 
 */ function appendChild(el, child) {
        return el.appendChild(child);
    }
    /**
 * 
 * @param {!HTMLElement} parent 
 * @param {string} key 
 * @param {string} text 
 * @param {boolean} whitespace 
 */ function createElement(parent, key, text, whitespace) {
        var el = root.createElement('span');
        key && (el.className = key);
        if (text) {
            !whitespace && el.setAttribute("data-" + key, text);
            el.textContent = text;
        }
        return parent && appendChild(parent, el) || el;
    }
    /**
 * 
 * @param {!HTMLElement} el 
 * @param {string} key 
 */ function getData(el, key) {
        return el.getAttribute("data-" + key);
    }
    /**
 * 
 * @param {import('../types').Target} e 
 * @param {!HTMLElement} parent
 * @returns {!Array<!HTMLElement>}
 */ function $(e, parent) {
        return !e || e.length == 0 ? [] : e.nodeName ? [
            e
        ] : [].slice.call(e[0].nodeName ? e : (parent || root).querySelectorAll(e));
    }
    /**
 * Creates and fills an array with the value provided
 * @param {number} len
 * @param {() => T} valueProvider
 * @return {T}
 * @template T
 */ function Array2D(len) {
        var a = [];
        for(; len--;)a[len] = [];
        return a;
    }
    /**
 * A for loop wrapper used to reduce js minified size.
 * @param {!Array<T>} items 
 * @param {function(T):void} consumer
 * @template T
 */ function each(items, consumer) {
        items && items.some(consumer);
    }
    /**
 * @param {T} obj 
 * @return {function(string):*}
 * @template T
 */ function selectFrom(obj) {
        return function(key) {
            return obj[key];
        };
    }
    /**
 * # Splitting.index
 * Index split elements and add them to a Splitting instance.
 *
 * @param {HTMLElement} element
 * @param {string} key 
 * @param {!Array<!HTMLElement> | !Array<!Array<!HTMLElement>>} items 
 */ function index(element, key, items) {
        var prefix = '--' + key;
        var cssVar = prefix + "-index";
        each(items, function(items, i) {
            if (Array.isArray(items)) each(items, function(item) {
                setProperty(item, cssVar, i);
            });
            else setProperty(items, cssVar, i);
        });
        setProperty(element, prefix + "-total", items.length);
    }
    /**
 * @type {Record<string, import('./types').ISplittingPlugin>}
 */ var plugins = {};
    /**
 * @param {string} by
 * @param {string} parent
 * @param {!Array<string>} deps
 * @return {!Array<string>}
 */ function resolvePlugins(by, parent, deps) {
        // skip if already visited this dependency
        var index = deps.indexOf(by);
        if (index == -1) {
            // if new to dependency array, add to the beginning
            deps.unshift(by);
            // recursively call this function for all dependencies
            var plugin = plugins[by];
            if (!plugin) throw new Error("plugin not loaded: " + by);
            each(plugin.depends, function(p) {
                resolvePlugins(p, by, deps);
            });
        } else {
            // if this dependency was added already move to the left of
            // the parent dependency so it gets loaded in order
            var indexOfParent = deps.indexOf(parent);
            deps.splice(index, 1);
            deps.splice(indexOfParent, 0, by);
        }
        return deps;
    }
    /**
 * Internal utility for creating plugins... essentially to reduce
 * the size of the library
 * @param {string} by 
 * @param {string} key 
 * @param {string[]} depends 
 * @param {Function} split 
 * @returns {import('./types').ISplittingPlugin}
 */ function createPlugin(by, depends, key, split) {
        return {
            by: by,
            depends: depends,
            key: key,
            split: split
        };
    }
    /**
 *
 * @param {string} by
 * @returns {import('./types').ISplittingPlugin[]}
 */ function resolve(by) {
        return resolvePlugins(by, 0, []).map(selectFrom(plugins));
    }
    /**
 * Adds a new plugin to splitting
 * @param {import('./types').ISplittingPlugin} opts
 */ function add(opts) {
        plugins[opts.by] = opts;
    }
    /**
 * # Splitting.split
 * Split an element's textContent into individual elements
 * @param {!HTMLElement} el  Element to split
 * @param {string} key 
 * @param {string} splitOn 
 * @param {boolean} includePrevious 
 * @param {boolean} preserveWhitespace
 * @return {!Array<!HTMLElement>}
 */ function splitText(el, key, splitOn, includePrevious, preserveWhitespace) {
        // Combine any strange text nodes or empty whitespace.
        el.normalize();
        // Use fragment to prevent unnecessary DOM thrashing.
        var elements = [];
        var F = document.createDocumentFragment();
        if (includePrevious) elements.push(el.previousSibling);
        var allElements = [];
        $(el.childNodes).some(function(next) {
            if (next.tagName && !next.hasChildNodes()) {
                // keep elements without child nodes (no text and no children)
                allElements.push(next);
                return;
            }
            // Recursively run through child nodes
            if (next.childNodes && next.childNodes.length) {
                allElements.push(next);
                elements.push.apply(elements, splitText(next, key, splitOn, includePrevious, preserveWhitespace));
                return;
            }
            // Get the text to split, trimming out the whitespace
            /** @type {string} */ var wholeText = next.wholeText || '';
            var contents = wholeText.trim();
            // If there's no text left after trimming whitespace, continue the loop
            if (contents.length) {
                // insert leading space if there was one
                if (wholeText[0] === ' ') allElements.push(createText(' '));
                // Concatenate the split text children back into the full array
                var useSegmenter = splitOn === "" && typeof Intl.Segmenter === "function";
                each(useSegmenter ? Array.from(new Intl.Segmenter().segment(contents)).map(function(x) {
                    return x.segment;
                }) : contents.split(splitOn), function(splitText, i) {
                    if (i && preserveWhitespace) allElements.push(createElement(F, "whitespace", " ", preserveWhitespace));
                    var splitEl = createElement(F, key, splitText);
                    elements.push(splitEl);
                    allElements.push(splitEl);
                });
                // insert trailing space if there was one
                if (wholeText[wholeText.length - 1] === ' ') allElements.push(createText(' '));
            }
        });
        each(allElements, function(el) {
            appendChild(F, el);
        });
        // Clear out the existing element
        el.innerHTML = "";
        appendChild(el, F);
        return elements;
    }
    /** an empty value */ var _ = 0;
    function copy(dest, src) {
        for(var k in src)dest[k] = src[k];
        return dest;
    }
    var WORDS = 'words';
    var wordPlugin = createPlugin(/* by= */ WORDS, /* depends= */ _, /* key= */ 'word', /* split= */ function(el) {
        return splitText(el, 'word', /\s+/, 0, 1);
    });
    var CHARS = "chars";
    var charPlugin = createPlugin(/* by= */ CHARS, /* depends= */ [
        WORDS
    ], /* key= */ "char", /* split= */ function(el, options, ctx) {
        var results = [];
        each(ctx[WORDS], function(word, i) {
            results.push.apply(results, splitText(word, "char", "", options.whitespace && i));
        });
        return results;
    });
    /**
 * # Splitting
 * 
 * @param {import('./types').ISplittingOptions} opts
 * @return {!Array<*>}
 */ function Splitting(opts) {
        opts = opts || {};
        var key = opts.key;
        return $(opts.target || '[data-splitting]').map(function(el) {
            var ctx = el["\uD83C\uDF4C"];
            if (!opts.force && ctx) return ctx;
            ctx = el["\uD83C\uDF4C"] = {
                el: el
            };
            var by = opts.by || getData(el, 'splitting');
            if (!by || by == 'true') by = CHARS;
            var items = resolve(by);
            var opts2 = copy({}, opts);
            each(items, function(plugin) {
                if (plugin.split) {
                    var pluginBy = plugin.by;
                    var key2 = (key ? '-' + key : '') + plugin.key;
                    var results = plugin.split(el, opts2, ctx);
                    key2 && index(el, key2, results);
                    ctx[pluginBy] = results;
                    el.classList.add(pluginBy);
                }
            });
            el.classList.add('splitting');
            return ctx;
        });
    }
    /**
 * # Splitting.html
 * 
 * @param {import('./types').ISplittingOptions} opts
 */ function html(opts) {
        opts = opts || {};
        var parent = opts.target = createElement();
        parent.innerHTML = opts.content;
        Splitting(opts);
        return parent.outerHTML;
    }
    Splitting.html = html;
    Splitting.add = add;
    /**
 * Detects the grid by measuring which elements align to a side of it.
 * @param {!HTMLElement} el 
 * @param {import('../core/types').ISplittingOptions} options
 * @param {*} side 
 */ function detectGrid(el, options, side) {
        var items = $(options.matching || el.children, el);
        var c = {};
        each(items, function(w) {
            var val = Math.round(w[side]);
            (c[val] || (c[val] = [])).push(w);
        });
        return Object.keys(c).map(Number).sort(byNumber).map(selectFrom(c));
    }
    /**
 * Sorting function for numbers.
 * @param {number} a 
 * @param {number} b
 * @return {number} 
 */ function byNumber(a, b) {
        return a - b;
    }
    var linePlugin = createPlugin(/* by= */ 'lines', /* depends= */ [
        WORDS
    ], /* key= */ 'line', /* split= */ function(el, options, ctx) {
        return detectGrid(el, {
            matching: ctx[WORDS]
        }, 'offsetTop');
    });
    var itemPlugin = createPlugin(/* by= */ 'items', /* depends= */ _, /* key= */ 'item', /* split= */ function(el, options) {
        return $(options.matching || el.children, el);
    });
    var rowPlugin = createPlugin(/* by= */ 'rows', /* depends= */ _, /* key= */ 'row', /* split= */ function(el, options) {
        return detectGrid(el, options, "offsetTop");
    });
    var columnPlugin = createPlugin(/* by= */ 'cols', /* depends= */ _, /* key= */ "col", /* split= */ function(el, options) {
        return detectGrid(el, options, "offsetLeft");
    });
    var gridPlugin = createPlugin(/* by= */ 'grid', /* depends= */ [
        'rows',
        'cols'
    ]);
    var LAYOUT = "layout";
    var layoutPlugin = createPlugin(/* by= */ LAYOUT, /* depends= */ _, /* key= */ _, /* split= */ function(el, opts) {
        // detect and set options
        var rows = opts.rows = +(opts.rows || getData(el, 'rows') || 1);
        var columns = opts.columns = +(opts.columns || getData(el, 'columns') || 1);
        // Seek out the first <img> if the value is true 
        opts.image = opts.image || getData(el, 'image') || el.currentSrc || el.src;
        if (opts.image) {
            var img = $("img", el)[0];
            opts.image = img && (img.currentSrc || img.src);
        }
        // add optional image to background
        if (opts.image) setProperty(el, "background-image", "url(" + opts.image + ")");
        var totalCells = rows * columns;
        var elements = [];
        var container = createElement(_, "cell-grid");
        while(totalCells--){
            // Create a span
            var cell = createElement(container, "cell");
            createElement(cell, "cell-inner");
            elements.push(cell);
        }
        // Append elements back into the parent
        appendChild(el, container);
        return elements;
    });
    var cellRowPlugin = createPlugin(/* by= */ "cellRows", /* depends= */ [
        LAYOUT
    ], /* key= */ "row", /* split= */ function(el, opts, ctx) {
        var rowCount = opts.rows;
        var result = Array2D(rowCount);
        each(ctx[LAYOUT], function(cell, i, src) {
            result[Math.floor(i / (src.length / rowCount))].push(cell);
        });
        return result;
    });
    var cellColumnPlugin = createPlugin(/* by= */ "cellColumns", /* depends= */ [
        LAYOUT
    ], /* key= */ "col", /* split= */ function(el, opts, ctx) {
        var columnCount = opts.columns;
        var result = Array2D(columnCount);
        each(ctx[LAYOUT], function(cell, i) {
            result[i % columnCount].push(cell);
        });
        return result;
    });
    var cellPlugin = createPlugin(/* by= */ "cells", /* depends= */ [
        'cellRows',
        'cellColumns'
    ], /* key= */ "cell", /* split= */ function(el, opt, ctx) {
        // re-index the layout as the cells
        return ctx[LAYOUT];
    });
    // install plugins
    // word/char plugins
    add(wordPlugin);
    add(charPlugin);
    add(linePlugin);
    // grid plugins
    add(itemPlugin);
    add(rowPlugin);
    add(columnPlugin);
    add(gridPlugin);
    // cell-layout plugins
    add(layoutPlugin);
    add(cellRowPlugin);
    add(cellColumnPlugin);
    add(cellPlugin);
    return Splitting;
});

},{}],"2Xppi":[function(require,module,exports,__globalThis) {
var process = require("ec6f68100f91676a");
!function(e, t) {
    module.exports = t();
}("undefined" != typeof self ? self : this, ()=>(()=>{
        var e = {
            75: function(e) {
                (function() {
                    var t, n, r, o, a, i;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                        return performance.now();
                    } : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                        return (t() - a) / 1e6;
                    }, n = process.hrtime, o = (t = function() {
                        var e;
                        return 1e9 * (e = n())[0] + e[1];
                    })(), i = 1e9 * process.uptime(), a = o - i) : Date.now ? (e.exports = function() {
                        return Date.now() - r;
                    }, r = Date.now()) : (e.exports = function() {
                        return (new Date).getTime() - r;
                    }, r = (new Date).getTime());
                }).call(this);
            },
            4087: (e, t, n)=>{
                for(var r = n(75), o = "undefined" == typeof window ? n.g : window, a = [
                    "moz",
                    "webkit"
                ], i = "AnimationFrame", s = o["request" + i], u = o["cancel" + i] || o["cancelRequest" + i], l = 0; !s && l < a.length; l++)s = o[a[l] + "Request" + i], u = o[a[l] + "Cancel" + i] || o[a[l] + "CancelRequest" + i];
                if (!s || !u) {
                    var c = 0, p = 0, d = [];
                    s = function(e) {
                        if (0 === d.length) {
                            var t = r(), n = Math.max(0, 16.666666666666668 - (t - c));
                            c = n + t, setTimeout(function() {
                                var e = d.slice(0);
                                d.length = 0;
                                for(var t = 0; t < e.length; t++)if (!e[t].cancelled) try {
                                    e[t].callback(c);
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e;
                                    }, 0);
                                }
                            }, Math.round(n));
                        }
                        return d.push({
                            handle: ++p,
                            callback: e,
                            cancelled: !1
                        }), p;
                    }, u = function(e) {
                        for(var t = 0; t < d.length; t++)d[t].handle === e && (d[t].cancelled = !0);
                    };
                }
                e.exports = function(e) {
                    return s.call(o, e);
                }, e.exports.cancel = function() {
                    u.apply(o, arguments);
                }, e.exports.polyfill = function(e) {
                    e || (e = o), e.requestAnimationFrame = s, e.cancelAnimationFrame = u;
                };
            }
        }, t = {};
        function n(r) {
            var o = t[r];
            if (void 0 !== o) return o.exports;
            var a = t[r] = {
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.exports;
        }
        n.n = (e)=>{
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return n.d(t, {
                a: t
            }), t;
        }, n.d = (e, t)=>{
            for(var r in t)n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            });
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        }(), n.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t);
        var r = {};
        return (()=>{
            "use strict";
            n.d(r, {
                default: ()=>C
            });
            var e = n(4087), t = n.n(e);
            const o = function(e) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(e);
            }, a = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            };
            var i = "TYPE_CHARACTER", s = "REMOVE_CHARACTER", u = "REMOVE_ALL", l = "REMOVE_LAST_VISIBLE_NODE", c = "PAUSE_FOR", p = "CALL_FUNCTION", d = "ADD_HTML_TAG_ELEMENT", f = "CHANGE_DELETE_SPEED", v = "CHANGE_DELAY", h = "CHANGE_CURSOR", m = "PASTE_STRING", y = "HTML_TAG";
            function g(e) {
                return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, g(e);
            }
            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function w(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach(function(t) {
                        A(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function b(e) {
                return function(e) {
                    if (Array.isArray(e)) return T(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return T(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function T(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
                return r;
            }
            function S(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, N(r.key), r);
                }
            }
            function A(e, t, n) {
                return (t = N(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            function N(e) {
                var t = function(e, t) {
                    if ("object" !== g(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" !== g(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" === g(t) ? t : String(t);
            }
            const C = function() {
                function n(r, g) {
                    var E = this;
                    if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, n), A(this, "state", {
                        cursorAnimation: null,
                        lastFrameTime: null,
                        pauseUntil: null,
                        eventQueue: [],
                        eventLoop: null,
                        eventLoopPaused: !1,
                        reverseCalledEvents: [],
                        calledEvents: [],
                        visibleNodes: [],
                        initialOptions: null,
                        elements: {
                            container: null,
                            wrapper: document.createElement("span"),
                            cursor: document.createElement("span")
                        }
                    }), A(this, "options", {
                        strings: null,
                        cursor: "|",
                        delay: "natural",
                        pauseFor: 1500,
                        deleteSpeed: "natural",
                        loop: !1,
                        autoStart: !1,
                        devMode: !1,
                        skipAddStyles: !1,
                        wrapperClassName: "Typewriter__wrapper",
                        cursorClassName: "Typewriter__cursor",
                        stringSplitter: null,
                        onCreateTextNode: null,
                        onRemoveNode: null
                    }), A(this, "setupWrapperElement", function() {
                        E.state.elements.container && (E.state.elements.wrapper.className = E.options.wrapperClassName, E.state.elements.cursor.className = E.options.cursorClassName, E.state.elements.cursor.innerHTML = E.options.cursor, E.state.elements.container.innerHTML = "", E.state.elements.container.appendChild(E.state.elements.wrapper), E.state.elements.container.appendChild(E.state.elements.cursor));
                    }), A(this, "start", function() {
                        return E.state.eventLoopPaused = !1, E.runEventLoop(), E;
                    }), A(this, "pause", function() {
                        return E.state.eventLoopPaused = !0, E;
                    }), A(this, "stop", function() {
                        return E.state.eventLoop && ((0, e.cancel)(E.state.eventLoop), E.state.eventLoop = null), E;
                    }), A(this, "pauseFor", function(e) {
                        return E.addEventToQueue(c, {
                            ms: e
                        }), E;
                    }), A(this, "typeOutAllStrings", function() {
                        return "string" == typeof E.options.strings ? (E.typeString(E.options.strings).pauseFor(E.options.pauseFor), E) : (E.options.strings.forEach(function(e) {
                            E.typeString(e).pauseFor(E.options.pauseFor).deleteAll(E.options.deleteSpeed);
                        }), E);
                    }), A(this, "typeString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (o(e)) return E.typeOutHTMLString(e, t);
                        if (e) {
                            var n = (E.options || {}).stringSplitter, r = "function" == typeof n ? n(e) : e.split("");
                            E.typeCharacters(r, t);
                        }
                        return E;
                    }), A(this, "pasteString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return o(e) ? E.typeOutHTMLString(e, t, !0) : (e && E.addEventToQueue(m, {
                            character: e,
                            node: t
                        }), E);
                    }), A(this, "typeOutHTMLString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 ? arguments[2] : void 0, r = function(e) {
                            var t = document.createElement("div");
                            return t.innerHTML = e, t.childNodes;
                        }(e);
                        if (r.length > 0) for(var o = 0; o < r.length; o++){
                            var a = r[o], i = a.innerHTML;
                            a && 3 !== a.nodeType ? (a.innerHTML = "", E.addEventToQueue(d, {
                                node: a,
                                parentNode: t
                            }), n ? E.pasteString(i, a) : E.typeString(i, a)) : a.textContent && (n ? E.pasteString(a.textContent, t) : E.typeString(a.textContent, t));
                        }
                        return E;
                    }), A(this, "deleteAll", function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                        return E.addEventToQueue(u, {
                            speed: e
                        }), E;
                    }), A(this, "changeDeleteSpeed", function(e) {
                        if (!e) throw new Error("Must provide new delete speed");
                        return E.addEventToQueue(f, {
                            speed: e
                        }), E;
                    }), A(this, "changeDelay", function(e) {
                        if (!e) throw new Error("Must provide new delay");
                        return E.addEventToQueue(v, {
                            delay: e
                        }), E;
                    }), A(this, "changeCursor", function(e) {
                        if (!e) throw new Error("Must provide new cursor");
                        return E.addEventToQueue(h, {
                            cursor: e
                        }), E;
                    }), A(this, "deleteChars", function(e) {
                        if (!e) throw new Error("Must provide amount of characters to delete");
                        for(var t = 0; t < e; t++)E.addEventToQueue(s);
                        return E;
                    }), A(this, "callFunction", function(e, t) {
                        if (!e || "function" != typeof e) throw new Error("Callback must be a function");
                        return E.addEventToQueue(p, {
                            cb: e,
                            thisArg: t
                        }), E;
                    }), A(this, "typeCharacters", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                        return e.forEach(function(e) {
                            E.addEventToQueue(i, {
                                character: e,
                                node: t
                            });
                        }), E;
                    }), A(this, "removeCharacters", function(e) {
                        if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                        return e.forEach(function() {
                            E.addEventToQueue(s);
                        }), E;
                    }), A(this, "addEventToQueue", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return E.addEventToStateProperty(e, t, n, "eventQueue");
                    }), A(this, "addReverseCalledEvent", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return E.options.loop ? E.addEventToStateProperty(e, t, n, "reverseCalledEvents") : E;
                    }), A(this, "addEventToStateProperty", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = arguments.length > 3 ? arguments[3] : void 0, o = {
                            eventName: e,
                            eventArgs: t || {}
                        };
                        return E.state[r] = n ? [
                            o
                        ].concat(b(E.state[r])) : [].concat(b(E.state[r]), [
                            o
                        ]), E;
                    }), A(this, "runEventLoop", function() {
                        E.state.lastFrameTime || (E.state.lastFrameTime = Date.now());
                        var e = Date.now(), n = e - E.state.lastFrameTime;
                        if (!E.state.eventQueue.length) {
                            if (!E.options.loop) return;
                            E.state.eventQueue = b(E.state.calledEvents), E.state.calledEvents = [], E.options = w({}, E.state.initialOptions);
                        }
                        if (E.state.eventLoop = t()(E.runEventLoop), !E.state.eventLoopPaused) {
                            if (E.state.pauseUntil) {
                                if (e < E.state.pauseUntil) return;
                                E.state.pauseUntil = null;
                            }
                            var r, o = b(E.state.eventQueue), g = o.shift();
                            if (!(n <= (r = g.eventName === l || g.eventName === s ? "natural" === E.options.deleteSpeed ? a(40, 80) : E.options.deleteSpeed : "natural" === E.options.delay ? a(120, 160) : E.options.delay))) {
                                var T = g.eventName, S = g.eventArgs;
                                switch(E.logInDevMode({
                                    currentEvent: g,
                                    state: E.state,
                                    delay: r
                                }), T){
                                    case m:
                                    case i:
                                        var A = S.character, N = S.node, C = document.createTextNode(A), _ = C;
                                        E.options.onCreateTextNode && "function" == typeof E.options.onCreateTextNode && (_ = E.options.onCreateTextNode(A, C)), _ && (N ? N.appendChild(_) : E.state.elements.wrapper.appendChild(_)), E.state.visibleNodes = [].concat(b(E.state.visibleNodes), [
                                            {
                                                type: "TEXT_NODE",
                                                character: A,
                                                node: _
                                            }
                                        ]);
                                        break;
                                    case s:
                                        o.unshift({
                                            eventName: l,
                                            eventArgs: {
                                                removingCharacterNode: !0
                                            }
                                        });
                                        break;
                                    case c:
                                        var O = g.eventArgs.ms;
                                        E.state.pauseUntil = Date.now() + parseInt(O);
                                        break;
                                    case p:
                                        var L = g.eventArgs, D = L.cb, M = L.thisArg;
                                        D.call(M, {
                                            elements: E.state.elements
                                        });
                                        break;
                                    case d:
                                        var x = g.eventArgs, P = x.node, j = x.parentNode;
                                        j ? j.appendChild(P) : E.state.elements.wrapper.appendChild(P), E.state.visibleNodes = [].concat(b(E.state.visibleNodes), [
                                            {
                                                type: y,
                                                node: P,
                                                parentNode: j || E.state.elements.wrapper
                                            }
                                        ]);
                                        break;
                                    case u:
                                        var R = E.state.visibleNodes, k = S.speed, Q = [];
                                        k && Q.push({
                                            eventName: f,
                                            eventArgs: {
                                                speed: k,
                                                temp: !0
                                            }
                                        });
                                        for(var F = 0, H = R.length; F < H; F++)Q.push({
                                            eventName: l,
                                            eventArgs: {
                                                removingCharacterNode: !1
                                            }
                                        });
                                        k && Q.push({
                                            eventName: f,
                                            eventArgs: {
                                                speed: E.options.deleteSpeed,
                                                temp: !0
                                            }
                                        }), o.unshift.apply(o, Q);
                                        break;
                                    case l:
                                        var I = g.eventArgs.removingCharacterNode;
                                        if (E.state.visibleNodes.length) {
                                            var U = E.state.visibleNodes.pop(), q = U.type, G = U.node, Y = U.character;
                                            E.options.onRemoveNode && "function" == typeof E.options.onRemoveNode && E.options.onRemoveNode({
                                                node: G,
                                                character: Y
                                            }), G && G.parentNode.removeChild(G), q === y && I && o.unshift({
                                                eventName: l,
                                                eventArgs: {}
                                            });
                                        }
                                        break;
                                    case f:
                                        E.options.deleteSpeed = g.eventArgs.speed;
                                        break;
                                    case v:
                                        E.options.delay = g.eventArgs.delay;
                                        break;
                                    case h:
                                        E.options.cursor = g.eventArgs.cursor, E.state.elements.cursor.innerHTML = g.eventArgs.cursor;
                                }
                                E.options.loop && (g.eventName === l || g.eventArgs && g.eventArgs.temp || (E.state.calledEvents = [].concat(b(E.state.calledEvents), [
                                    g
                                ]))), E.state.eventQueue = o, E.state.lastFrameTime = e;
                            }
                        }
                    }), r) {
                        if ("string" == typeof r) {
                            var T = document.querySelector(r);
                            if (!T) throw new Error("Could not find container element");
                            this.state.elements.container = T;
                        } else this.state.elements.container = r;
                    }
                    g && (this.options = w(w({}, this.options), g)), this.state.initialOptions = w({}, this.options), this.init();
                }
                var r, g;
                return r = n, g = [
                    {
                        key: "init",
                        value: function() {
                            var e, t;
                            this.setupWrapperElement(), this.addEventToQueue(h, {
                                cursor: this.options.cursor
                            }, !0), this.addEventToQueue(u, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t = document.createElement("style")).appendChild(document.createTextNode(e)), document.head.appendChild(t), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
                        }
                    },
                    {
                        key: "logInDevMode",
                        value: function(e) {
                            this.options.devMode && console.log(e);
                        }
                    }
                ], S(r.prototype, g), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), n;
            }();
        })(), r.default;
    })());

},{"ec6f68100f91676a":"4QX5Y"}],"4QX5Y":[function(require,module,exports,__globalThis) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"9t0X1":[function(require,module,exports,__globalThis) {
/*!
 * Flickity asNavFor v2.0.1
 * enable asNavFor for Flickity
 */ /*jshint browser: true, undef: true, unused: true, strict: true*/ (function(window1, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == 'function' && define.amd) // AMD
    define([
        'flickity/js/index',
        'fizzy-ui-utils/utils'
    ], factory);
    else if (0, module.exports) // CommonJS
    module.exports = factory(require("53eb4150d4ea9072"), require("e80092d622ffe6e6"));
    else // browser global
    window1.Flickity = factory(window1.Flickity, window1.fizzyUIUtils);
})(window, function factory(Flickity, utils) {
    'use strict';
    // -------------------------- asNavFor prototype -------------------------- //
    // Flickity.defaults.asNavFor = null;
    Flickity.createMethods.push('_createAsNavFor');
    var proto = Flickity.prototype;
    proto._createAsNavFor = function() {
        this.on('activate', this.activateAsNavFor);
        this.on('deactivate', this.deactivateAsNavFor);
        this.on('destroy', this.destroyAsNavFor);
        var asNavForOption = this.options.asNavFor;
        if (!asNavForOption) return;
        // HACK do async, give time for other flickity to be initalized
        var _this = this;
        setTimeout(function initNavCompanion() {
            _this.setNavCompanion(asNavForOption);
        });
    };
    proto.setNavCompanion = function(elem) {
        elem = utils.getQueryElement(elem);
        var companion = Flickity.data(elem);
        // stop if no companion or companion is self
        if (!companion || companion == this) return;
        this.navCompanion = companion;
        // companion select
        var _this = this;
        this.onNavCompanionSelect = function() {
            _this.navCompanionSelect();
        };
        companion.on('select', this.onNavCompanionSelect);
        // click
        this.on('staticClick', this.onNavStaticClick);
        this.navCompanionSelect(true);
    };
    proto.navCompanionSelect = function(isInstant) {
        if (!this.navCompanion) return;
        // select slide that matches first cell of slide
        var selectedCell = this.navCompanion.selectedCells[0];
        var firstIndex = this.navCompanion.cells.indexOf(selectedCell);
        var lastIndex = firstIndex + this.navCompanion.selectedCells.length - 1;
        var selectIndex = Math.floor(lerp(firstIndex, lastIndex, this.navCompanion.cellAlign));
        this.selectCell(selectIndex, false, isInstant);
        // set nav selected class
        this.removeNavSelectedElements();
        // stop if companion has more cells than this one
        if (selectIndex >= this.cells.length) return;
        var selectedCells = this.cells.slice(firstIndex, lastIndex + 1);
        this.navSelectedElements = selectedCells.map(function(cell) {
            return cell.element;
        });
        this.changeNavSelectedClass('add');
    };
    function lerp(a, b, t) {
        return (b - a) * t + a;
    }
    proto.changeNavSelectedClass = function(method) {
        this.navSelectedElements.forEach(function(navElem) {
            navElem.classList[method]('is-nav-selected');
        });
    };
    proto.activateAsNavFor = function() {
        this.navCompanionSelect(true);
    };
    proto.removeNavSelectedElements = function() {
        if (!this.navSelectedElements) return;
        this.changeNavSelectedClass('remove');
        delete this.navSelectedElements;
    };
    proto.onNavStaticClick = function(event, pointer, cellElement, cellIndex) {
        if (typeof cellIndex == 'number') this.navCompanion.selectCell(cellIndex);
    };
    proto.deactivateAsNavFor = function() {
        this.removeNavSelectedElements();
    };
    proto.destroyAsNavFor = function() {
        if (!this.navCompanion) return;
        this.navCompanion.off('select', this.onNavCompanionSelect);
        this.off('staticClick', this.onNavStaticClick);
        delete this.navCompanion;
    };
    // -----  ----- //
    return Flickity;
});

},{"53eb4150d4ea9072":"lGlvh","e80092d622ffe6e6":"l5E56"}],"7N94p":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CLASSES", ()=>CLASSES);
parcelHelpers.export(exports, "CLASS_ACTIVE", ()=>CLASS_ACTIVE);
parcelHelpers.export(exports, "CLASS_ARROW", ()=>CLASS_ARROW);
parcelHelpers.export(exports, "CLASS_ARROWS", ()=>CLASS_ARROWS);
parcelHelpers.export(exports, "CLASS_ARROW_NEXT", ()=>CLASS_ARROW_NEXT);
parcelHelpers.export(exports, "CLASS_ARROW_PREV", ()=>CLASS_ARROW_PREV);
parcelHelpers.export(exports, "CLASS_CLONE", ()=>CLASS_CLONE);
parcelHelpers.export(exports, "CLASS_CONTAINER", ()=>CLASS_CONTAINER);
parcelHelpers.export(exports, "CLASS_FOCUS_IN", ()=>CLASS_FOCUS_IN);
parcelHelpers.export(exports, "CLASS_INITIALIZED", ()=>CLASS_INITIALIZED);
parcelHelpers.export(exports, "CLASS_LIST", ()=>CLASS_LIST);
parcelHelpers.export(exports, "CLASS_LOADING", ()=>CLASS_LOADING);
parcelHelpers.export(exports, "CLASS_NEXT", ()=>CLASS_NEXT);
parcelHelpers.export(exports, "CLASS_OVERFLOW", ()=>CLASS_OVERFLOW);
parcelHelpers.export(exports, "CLASS_PAGINATION", ()=>CLASS_PAGINATION);
parcelHelpers.export(exports, "CLASS_PAGINATION_PAGE", ()=>CLASS_PAGINATION_PAGE);
parcelHelpers.export(exports, "CLASS_PREV", ()=>CLASS_PREV);
parcelHelpers.export(exports, "CLASS_PROGRESS", ()=>CLASS_PROGRESS);
parcelHelpers.export(exports, "CLASS_PROGRESS_BAR", ()=>CLASS_PROGRESS_BAR);
parcelHelpers.export(exports, "CLASS_ROOT", ()=>CLASS_ROOT);
parcelHelpers.export(exports, "CLASS_SLIDE", ()=>CLASS_SLIDE);
parcelHelpers.export(exports, "CLASS_SPINNER", ()=>CLASS_SPINNER);
parcelHelpers.export(exports, "CLASS_SR", ()=>CLASS_SR);
parcelHelpers.export(exports, "CLASS_TOGGLE", ()=>CLASS_TOGGLE);
parcelHelpers.export(exports, "CLASS_TOGGLE_PAUSE", ()=>CLASS_TOGGLE_PAUSE);
parcelHelpers.export(exports, "CLASS_TOGGLE_PLAY", ()=>CLASS_TOGGLE_PLAY);
parcelHelpers.export(exports, "CLASS_TRACK", ()=>CLASS_TRACK);
parcelHelpers.export(exports, "CLASS_VISIBLE", ()=>CLASS_VISIBLE);
parcelHelpers.export(exports, "DEFAULTS", ()=>DEFAULTS);
parcelHelpers.export(exports, "EVENT_ACTIVE", ()=>EVENT_ACTIVE);
parcelHelpers.export(exports, "EVENT_ARROWS_MOUNTED", ()=>EVENT_ARROWS_MOUNTED);
parcelHelpers.export(exports, "EVENT_ARROWS_UPDATED", ()=>EVENT_ARROWS_UPDATED);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PAUSE", ()=>EVENT_AUTOPLAY_PAUSE);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAY", ()=>EVENT_AUTOPLAY_PLAY);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAYING", ()=>EVENT_AUTOPLAY_PLAYING);
parcelHelpers.export(exports, "EVENT_CLICK", ()=>EVENT_CLICK);
parcelHelpers.export(exports, "EVENT_DESTROY", ()=>EVENT_DESTROY);
parcelHelpers.export(exports, "EVENT_DRAG", ()=>EVENT_DRAG);
parcelHelpers.export(exports, "EVENT_DRAGGED", ()=>EVENT_DRAGGED);
parcelHelpers.export(exports, "EVENT_DRAGGING", ()=>EVENT_DRAGGING);
parcelHelpers.export(exports, "EVENT_END_INDEX_CHANGED", ()=>EVENT_END_INDEX_CHANGED);
parcelHelpers.export(exports, "EVENT_HIDDEN", ()=>EVENT_HIDDEN);
parcelHelpers.export(exports, "EVENT_INACTIVE", ()=>EVENT_INACTIVE);
parcelHelpers.export(exports, "EVENT_LAZYLOAD_LOADED", ()=>EVENT_LAZYLOAD_LOADED);
parcelHelpers.export(exports, "EVENT_MOUNTED", ()=>EVENT_MOUNTED);
parcelHelpers.export(exports, "EVENT_MOVE", ()=>EVENT_MOVE);
parcelHelpers.export(exports, "EVENT_MOVED", ()=>EVENT_MOVED);
parcelHelpers.export(exports, "EVENT_NAVIGATION_MOUNTED", ()=>EVENT_NAVIGATION_MOUNTED);
parcelHelpers.export(exports, "EVENT_OVERFLOW", ()=>EVENT_OVERFLOW);
parcelHelpers.export(exports, "EVENT_PAGINATION_MOUNTED", ()=>EVENT_PAGINATION_MOUNTED);
parcelHelpers.export(exports, "EVENT_PAGINATION_UPDATED", ()=>EVENT_PAGINATION_UPDATED);
parcelHelpers.export(exports, "EVENT_READY", ()=>EVENT_READY);
parcelHelpers.export(exports, "EVENT_REFRESH", ()=>EVENT_REFRESH);
parcelHelpers.export(exports, "EVENT_RESIZE", ()=>EVENT_RESIZE);
parcelHelpers.export(exports, "EVENT_RESIZED", ()=>EVENT_RESIZED);
parcelHelpers.export(exports, "EVENT_SCROLL", ()=>EVENT_SCROLL);
parcelHelpers.export(exports, "EVENT_SCROLLED", ()=>EVENT_SCROLLED);
parcelHelpers.export(exports, "EVENT_SHIFTED", ()=>EVENT_SHIFTED);
parcelHelpers.export(exports, "EVENT_SLIDE_KEYDOWN", ()=>EVENT_SLIDE_KEYDOWN);
parcelHelpers.export(exports, "EVENT_UPDATED", ()=>EVENT_UPDATED);
parcelHelpers.export(exports, "EVENT_VISIBLE", ()=>EVENT_VISIBLE);
parcelHelpers.export(exports, "EventBinder", ()=>EventBinder);
parcelHelpers.export(exports, "EventInterface", ()=>EventInterface);
parcelHelpers.export(exports, "FADE", ()=>FADE);
parcelHelpers.export(exports, "LOOP", ()=>LOOP);
parcelHelpers.export(exports, "LTR", ()=>LTR);
parcelHelpers.export(exports, "RTL", ()=>RTL);
parcelHelpers.export(exports, "RequestInterval", ()=>RequestInterval);
parcelHelpers.export(exports, "SLIDE", ()=>SLIDE);
parcelHelpers.export(exports, "STATUS_CLASSES", ()=>STATUS_CLASSES);
parcelHelpers.export(exports, "Splide", ()=>Splide);
parcelHelpers.export(exports, "SplideRenderer", ()=>SplideRenderer);
parcelHelpers.export(exports, "State", ()=>State);
parcelHelpers.export(exports, "TTB", ()=>TTB);
parcelHelpers.export(exports, "Throttle", ()=>Throttle);
parcelHelpers.export(exports, "default", ()=>Splide);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
    CREATED: CREATED,
    MOUNTED: MOUNTED,
    IDLE: IDLE,
    MOVING: MOVING,
    SCROLLING: SCROLLING,
    DRAGGING: DRAGGING,
    DESTROYED: DESTROYED
};
function empty(array) {
    array.length = 0;
}
function slice(arrayLike, start, end) {
    return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
    return func.bind.apply(func, [
        null
    ].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop = function noop() {};
function raf(func) {
    return requestAnimationFrame(func);
}
function typeOf(type, subject) {
    return typeof subject === type;
}
function isObject(subject) {
    return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
    return subject === null;
}
function isHTMLElement(subject) {
    try {
        return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
    } catch (e) {
        return false;
    }
}
function toArray(value) {
    return isArray(value) ? value : [
        value
    ];
}
function forEach(values, iteratee) {
    toArray(values).forEach(iteratee);
}
function includes(array, value) {
    return array.indexOf(value) > -1;
}
function push(array, items) {
    array.push.apply(array, toArray(items));
    return array;
}
function toggleClass(elm, classes, add) {
    if (elm) forEach(classes, function(name) {
        if (name) elm.classList[add ? "add" : "remove"](name);
    });
}
function addClass(elm, classes) {
    toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children) {
    forEach(children, parent.appendChild.bind(parent));
}
function before(nodes, ref) {
    forEach(nodes, function(node) {
        var parent = (ref || node).parentNode;
        if (parent) parent.insertBefore(node, ref);
    });
}
function matches(elm, selector) {
    return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
    var children2 = parent ? slice(parent.children) : [];
    return selector ? children2.filter(function(child) {
        return matches(child, selector);
    }) : children2;
}
function child(parent, selector) {
    return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn(object, iteratee, right) {
    if (object) (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
        key !== "__proto__" && iteratee(object[key], key);
    });
    return object;
}
function assign(object) {
    slice(arguments, 1).forEach(function(source) {
        forOwn(source, function(value, key) {
            object[key] = source[key];
        });
    });
    return object;
}
function merge(object) {
    slice(arguments, 1).forEach(function(source) {
        forOwn(source, function(value, key) {
            if (isArray(value)) object[key] = value.slice();
            else if (isObject(value)) object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
            else object[key] = value;
        });
    });
    return object;
}
function omit(object, keys) {
    forEach(keys || ownKeys(object), function(key) {
        delete object[key];
    });
}
function removeAttribute(elms, attrs) {
    forEach(elms, function(elm) {
        forEach(attrs, function(attr) {
            elm && elm.removeAttribute(attr);
        });
    });
}
function setAttribute(elms, attrs, value) {
    if (isObject(attrs)) forOwn(attrs, function(value2, name) {
        setAttribute(elms, name, value2);
    });
    else forEach(elms, function(elm) {
        isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
}
function create(tag, attrs, parent) {
    var elm = document.createElement(tag);
    if (attrs) isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
    parent && append(parent, elm);
    return elm;
}
function style(elm, prop, value) {
    if (isUndefined(value)) return getComputedStyle(elm)[prop];
    if (!isNull(value)) elm.style[prop] = "" + value;
}
function display(elm, display2) {
    style(elm, "display", display2);
}
function focus(elm) {
    elm["setActive"] && elm["setActive"]() || elm.focus({
        preventScroll: true
    });
}
function getAttribute(elm, attr) {
    return elm.getAttribute(attr);
}
function hasClass(elm, className) {
    return elm && elm.classList.contains(className);
}
function rect(target) {
    return target.getBoundingClientRect();
}
function remove(nodes) {
    forEach(nodes, function(node) {
        if (node && node.parentNode) node.parentNode.removeChild(node);
    });
}
function parseHtml(html) {
    return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
    e.preventDefault();
    if (stopPropagation) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
}
function query(parent, selector) {
    return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
    return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
    toggleClass(elm, classes, false);
}
function timeOf(e) {
    return e.timeStamp;
}
function unit(value) {
    return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
    if (!condition) throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
}
var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
    return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return min(max(minimum, number), maximum);
}
function sign(x) {
    return +(x > 0) - +(x < 0);
}
function camelToKebab(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function format(string, replacements) {
    forEach(replacements, function(replacement) {
        string = string.replace("%s", "" + replacement);
    });
    return string;
}
function pad(number) {
    return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
    return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}
function EventBinder() {
    var listeners = [];
    function bind(targets, events, callback, options) {
        forEachEvent(targets, events, function(target, event, namespace) {
            var isEventTarget = "addEventListener" in target;
            var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
            isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
            listeners.push([
                target,
                event,
                namespace,
                callback,
                remover
            ]);
        });
    }
    function unbind(targets, events, callback) {
        forEachEvent(targets, events, function(target, event, namespace) {
            listeners = listeners.filter(function(listener) {
                if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
                    listener[4]();
                    return false;
                }
                return true;
            });
        });
    }
    function dispatch(target, type, detail) {
        var e;
        var bubbles = true;
        if (typeof CustomEvent === "function") e = new CustomEvent(type, {
            bubbles: bubbles,
            detail: detail
        });
        else {
            e = document.createEvent("CustomEvent");
            e.initCustomEvent(type, bubbles, false, detail);
        }
        target.dispatchEvent(e);
        return e;
    }
    function forEachEvent(targets, events, iteratee) {
        forEach(targets, function(target) {
            target && forEach(events, function(events2) {
                events2.split(" ").forEach(function(eventNS) {
                    var fragment = eventNS.split(".");
                    iteratee(target, fragment[0], fragment[1]);
                });
            });
        });
    }
    function destroy() {
        listeners.forEach(function(data) {
            data[4]();
        });
        empty(listeners);
    }
    return {
        bind: bind,
        unbind: unbind,
        dispatch: dispatch,
        destroy: destroy
    };
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide2) {
    var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
    var binder = EventBinder();
    function on(events, callback) {
        binder.bind(bus, toArray(events).join(" "), function(e) {
            callback.apply(callback, isArray(e.detail) ? e.detail : []);
        });
    }
    function emit(event) {
        binder.dispatch(bus, event, slice(arguments, 1));
    }
    if (Splide2) Splide2.event.on(EVENT_DESTROY, binder.destroy);
    return assign(binder, {
        bus: bus,
        on: on,
        off: apply(binder.unbind, bus),
        emit: emit
    });
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
    var now = Date.now;
    var startTime;
    var rate = 0;
    var id;
    var paused = true;
    var count = 0;
    function update() {
        if (!paused) {
            rate = interval ? min((now() - startTime) / interval, 1) : 1;
            onUpdate && onUpdate(rate);
            if (rate >= 1) {
                onInterval();
                startTime = now();
                if (limit && ++count >= limit) return pause();
            }
            id = raf(update);
        }
    }
    function start(resume) {
        resume || cancel();
        startTime = now() - (resume ? rate * interval : 0);
        paused = false;
        id = raf(update);
    }
    function pause() {
        paused = true;
    }
    function rewind() {
        startTime = now();
        rate = 0;
        if (onUpdate) onUpdate(rate);
    }
    function cancel() {
        id && cancelAnimationFrame(id);
        rate = 0;
        id = 0;
        paused = true;
    }
    function set(time) {
        interval = time;
    }
    function isPaused() {
        return paused;
    }
    return {
        start: start,
        rewind: rewind,
        pause: pause,
        cancel: cancel,
        set: set,
        isPaused: isPaused
    };
}
function State(initialState) {
    var state = initialState;
    function set(value) {
        state = value;
    }
    function is(states) {
        return includes(toArray(states), state);
    }
    return {
        set: set,
        is: is
    };
}
function Throttle(func, duration) {
    var interval = RequestInterval(duration || 0, func, null, 1);
    return function() {
        interval.isPaused() && interval.start();
    };
}
function Media(Splide2, Components2, options) {
    var state = Splide2.state;
    var breakpoints = options.breakpoints || {};
    var reducedMotion = options.reducedMotion || {};
    var binder = EventBinder();
    var queries = [];
    function setup() {
        var isMin = options.mediaQuery === "min";
        ownKeys(breakpoints).sort(function(n, m) {
            return isMin ? +n - +m : +m - +n;
        }).forEach(function(key) {
            register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
        });
        register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
        update();
    }
    function destroy(completely) {
        if (completely) binder.destroy();
    }
    function register(options2, query) {
        var queryList = matchMedia(query);
        binder.bind(queryList, "change", update);
        queries.push([
            options2,
            queryList
        ]);
    }
    function update() {
        var destroyed = state.is(DESTROYED);
        var direction = options.direction;
        var merged = queries.reduce(function(merged2, entry) {
            return merge(merged2, entry[1].matches ? entry[0] : {});
        }, {});
        omit(options);
        set(merged);
        if (options.destroy) Splide2.destroy(options.destroy === "completely");
        else if (destroyed) {
            destroy(true);
            Splide2.mount();
        } else direction !== options.direction && Splide2.refresh();
    }
    function reduce(enable) {
        if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
    function set(opts, base, notify) {
        merge(options, opts);
        base && merge(Object.getPrototypeOf(options), opts);
        if (notify || !state.is(CREATED)) Splide2.emit(EVENT_UPDATED, options);
    }
    return {
        setup: setup,
        destroy: destroy,
        reduce: reduce,
        set: set
    };
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
    width: [
        "height"
    ],
    left: [
        "top",
        "right"
    ],
    right: [
        "bottom",
        "left"
    ],
    x: [
        "y"
    ],
    X: [
        "Y"
    ],
    Y: [
        "X"
    ],
    ArrowLeft: [
        ARROW_UP,
        ARROW_RIGHT
    ],
    ArrowRight: [
        ARROW_DOWN,
        ARROW_LEFT
    ]
};
function Direction(Splide2, Components2, options) {
    function resolve(prop, axisOnly, direction) {
        direction = direction || options.direction;
        var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
        return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
            var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
            return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
        });
    }
    function orient(value) {
        return value * (options.direction === RTL ? 1 : -1);
    }
    return {
        resolve: resolve,
        orient: orient
    };
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [
    ROLE,
    TAB_INDEX,
    DISABLED,
    ARIA_CONTROLS,
    ARIA_CURRENT,
    ARIA_LABEL,
    ARIA_LABELLEDBY,
    ARIA_HIDDEN,
    ARIA_ORIENTATION,
    ARIA_ROLEDESCRIPTION
];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [
    CLASS_ACTIVE,
    CLASS_VISIBLE,
    CLASS_PREV,
    CLASS_NEXT,
    CLASS_LOADING,
    CLASS_FOCUS_IN,
    CLASS_OVERFLOW
];
var CLASSES = {
    slide: CLASS_SLIDE,
    clone: CLASS_CLONE,
    arrows: CLASS_ARROWS,
    arrow: CLASS_ARROW,
    prev: CLASS_ARROW_PREV,
    next: CLASS_ARROW_NEXT,
    pagination: CLASS_PAGINATION,
    page: CLASS_PAGINATION_PAGE,
    spinner: CLASS_SPINNER
};
function closest(from, selector) {
    if (isFunction(from.closest)) return from.closest(selector);
    var elm = from;
    while(elm && elm.nodeType === 1){
        if (matches(elm, selector)) break;
        elm = elm.parentElement;
    }
    return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide2, Components2, options) {
    var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
    var root = Splide2.root;
    var i18n = options.i18n;
    var elements = {};
    var slides = [];
    var rootClasses = [];
    var trackClasses = [];
    var track;
    var list;
    var isUsingKey;
    function setup() {
        collect();
        init();
        update();
    }
    function mount() {
        on(EVENT_REFRESH, destroy);
        on(EVENT_REFRESH, setup);
        on(EVENT_UPDATED, update);
        bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
            isUsingKey = e.type === "keydown";
        }, {
            capture: true
        });
        bind(root, "focusin", function() {
            toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
        });
    }
    function destroy(completely) {
        var attrs = ALL_ATTRIBUTES.concat("style");
        empty(slides);
        removeClass(root, rootClasses);
        removeClass(track, trackClasses);
        removeAttribute([
            track,
            list
        ], attrs);
        removeAttribute(root, completely ? attrs : [
            "style",
            ARIA_ROLEDESCRIPTION
        ]);
    }
    function update() {
        removeClass(root, rootClasses);
        removeClass(track, trackClasses);
        rootClasses = getClasses(CLASS_ROOT);
        trackClasses = getClasses(CLASS_TRACK);
        addClass(root, rootClasses);
        addClass(track, trackClasses);
        setAttribute(root, ARIA_LABEL, options.label);
        setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
    }
    function collect() {
        track = find("." + CLASS_TRACK);
        list = child(track, "." + CLASS_LIST);
        assert(track && list, "A track/list element is missing.");
        push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
        forOwn({
            arrows: CLASS_ARROWS,
            pagination: CLASS_PAGINATION,
            prev: CLASS_ARROW_PREV,
            next: CLASS_ARROW_NEXT,
            bar: CLASS_PROGRESS_BAR,
            toggle: CLASS_TOGGLE
        }, function(className, key) {
            elements[key] = find("." + className);
        });
        assign(elements, {
            root: root,
            track: track,
            list: list,
            slides: slides
        });
    }
    function init() {
        var id = root.id || uniqueId(PROJECT_CODE);
        var role = options.role;
        root.id = id;
        track.id = track.id || id + "-track";
        list.id = list.id || id + "-list";
        if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) setAttribute(root, ROLE, role);
        setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
        setAttribute(list, ROLE, "presentation");
    }
    function find(selector) {
        var elm = query(root, selector);
        return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
    }
    function getClasses(base) {
        return [
            base + "--" + options.type,
            base + "--" + options.direction,
            options.drag && base + "--draggable",
            options.isNavigation && base + "--nav",
            base === CLASS_ROOT && CLASS_ACTIVE
        ];
    }
    return assign(elements, {
        setup: setup,
        mount: mount,
        destroy: destroy
    });
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide2, index, slideIndex, slide) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
    var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
    var resolve = Components.Direction.resolve;
    var styles = getAttribute(slide, "style");
    var label = getAttribute(slide, ARIA_LABEL);
    var isClone = slideIndex > -1;
    var container = child(slide, "." + CLASS_CONTAINER);
    var destroyed;
    function mount() {
        if (!isClone) {
            slide.id = root.id + "-slide" + pad(index + 1);
            setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
            setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
            setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [
                index + 1,
                Splide2.length
            ]));
        }
        listen();
    }
    function listen() {
        bind(slide, "click", apply(emit, EVENT_CLICK, self));
        bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
        on([
            EVENT_MOVED,
            EVENT_SHIFTED,
            EVENT_SCROLLED
        ], update);
        on(EVENT_NAVIGATION_MOUNTED, initNavigation);
        if (updateOnMove) on(EVENT_MOVE, onMove);
    }
    function destroy() {
        destroyed = true;
        event.destroy();
        removeClass(slide, STATUS_CLASSES);
        removeAttribute(slide, ALL_ATTRIBUTES);
        setAttribute(slide, "style", styles);
        setAttribute(slide, ARIA_LABEL, label || "");
    }
    function initNavigation() {
        var controls = Splide2.splides.map(function(target) {
            var Slide2 = target.splide.Components.Slides.getAt(index);
            return Slide2 ? Slide2.slide.id : "";
        }).join(" ");
        setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
        setAttribute(slide, ARIA_CONTROLS, controls);
        setAttribute(slide, ROLE, slideFocus ? "button" : "");
        slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
    }
    function onMove() {
        if (!destroyed) update();
    }
    function update() {
        if (!destroyed) {
            var curr = Splide2.index;
            updateActivity();
            updateVisibility();
            toggleClass(slide, CLASS_PREV, index === curr - 1);
            toggleClass(slide, CLASS_NEXT, index === curr + 1);
        }
    }
    function updateActivity() {
        var active = isActive();
        if (active !== hasClass(slide, CLASS_ACTIVE)) {
            toggleClass(slide, CLASS_ACTIVE, active);
            setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
            emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
        }
    }
    function updateVisibility() {
        var visible = isVisible();
        var hidden = !visible && (!isActive() || isClone);
        if (!Splide2.state.is([
            MOVING,
            SCROLLING
        ])) setAttribute(slide, ARIA_HIDDEN, hidden || "");
        setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
        if (slideFocus) setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
        if (visible !== hasClass(slide, CLASS_VISIBLE)) {
            toggleClass(slide, CLASS_VISIBLE, visible);
            emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
        }
        if (!visible && document.activeElement === slide) {
            var Slide2 = Components.Slides.getAt(Splide2.index);
            Slide2 && focus(Slide2.slide);
        }
    }
    function style$1(prop, value, useContainer) {
        style(useContainer && container || slide, prop, value);
    }
    function isActive() {
        var curr = Splide2.index;
        return curr === index || options.cloneStatus && curr === slideIndex;
    }
    function isVisible() {
        if (Splide2.is(FADE)) return isActive();
        var trackRect = rect(Components.Elements.track);
        var slideRect = rect(slide);
        var left = resolve("left", true);
        var right = resolve("right", true);
        return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
    }
    function isWithin(from, distance) {
        var diff = abs(from - index);
        if (!isClone && (options.rewind || Splide2.is(LOOP))) diff = min(diff, Splide2.length - diff);
        return diff <= distance;
    }
    var self = {
        index: index,
        slideIndex: slideIndex,
        slide: slide,
        container: container,
        isClone: isClone,
        mount: mount,
        destroy: destroy,
        update: update,
        style: style$1,
        isWithin: isWithin
    };
    return self;
}
function Slides(Splide2, Components2, options) {
    var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
    var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
    var Slides2 = [];
    function mount() {
        init();
        on(EVENT_REFRESH, destroy);
        on(EVENT_REFRESH, init);
    }
    function init() {
        slides.forEach(function(slide, index) {
            register(slide, index, -1);
        });
    }
    function destroy() {
        forEach$1(function(Slide2) {
            Slide2.destroy();
        });
        empty(Slides2);
    }
    function update() {
        forEach$1(function(Slide2) {
            Slide2.update();
        });
    }
    function register(slide, index, slideIndex) {
        var object = Slide$1(Splide2, index, slideIndex, slide);
        object.mount();
        Slides2.push(object);
        Slides2.sort(function(Slide1, Slide2) {
            return Slide1.index - Slide2.index;
        });
    }
    function get(excludeClones) {
        return excludeClones ? filter(function(Slide2) {
            return !Slide2.isClone;
        }) : Slides2;
    }
    function getIn(page) {
        var Controller = Components2.Controller;
        var index = Controller.toIndex(page);
        var max = Controller.hasFocus() ? 1 : options.perPage;
        return filter(function(Slide2) {
            return between(Slide2.index, index, index + max - 1);
        });
    }
    function getAt(index) {
        return filter(index)[0];
    }
    function add(items, index) {
        forEach(items, function(slide) {
            if (isString(slide)) slide = parseHtml(slide);
            if (isHTMLElement(slide)) {
                var ref = slides[index];
                ref ? before(slide, ref) : append(list, slide);
                addClass(slide, options.classes.slide);
                observeImages(slide, apply(emit, EVENT_RESIZE));
            }
        });
        emit(EVENT_REFRESH);
    }
    function remove$1(matcher) {
        remove(filter(matcher).map(function(Slide2) {
            return Slide2.slide;
        }));
        emit(EVENT_REFRESH);
    }
    function forEach$1(iteratee, excludeClones) {
        get(excludeClones).forEach(iteratee);
    }
    function filter(matcher) {
        return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
            return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
        });
    }
    function style(prop, value, useContainer) {
        forEach$1(function(Slide2) {
            Slide2.style(prop, value, useContainer);
        });
    }
    function observeImages(elm, callback) {
        var images = queryAll(elm, "img");
        var length = images.length;
        if (length) images.forEach(function(img) {
            bind(img, "load error", function() {
                if (!--length) callback();
            });
        });
        else callback();
    }
    function getLength(excludeClones) {
        return excludeClones ? slides.length : Slides2.length;
    }
    function isEnough() {
        return Slides2.length > options.perPage;
    }
    return {
        mount: mount,
        destroy: destroy,
        update: update,
        register: register,
        get: get,
        getIn: getIn,
        getAt: getAt,
        add: add,
        remove: remove$1,
        forEach: forEach$1,
        filter: filter,
        style: style,
        getLength: getLength,
        isEnough: isEnough
    };
}
function Layout(Splide2, Components2, options) {
    var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
    var Slides = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
    var getAt = Slides.getAt, styleSlides = Slides.style;
    var vertical;
    var rootRect;
    var overflow;
    function mount() {
        init();
        bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], init);
        on(EVENT_RESIZE, resize);
    }
    function init() {
        vertical = options.direction === TTB;
        style(root, "maxWidth", unit(options.width));
        style(track, resolve("paddingLeft"), cssPadding(false));
        style(track, resolve("paddingRight"), cssPadding(true));
        resize(true);
    }
    function resize(force) {
        var newRect = rect(root);
        if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
            style(track, "height", cssTrackHeight());
            styleSlides(resolve("marginRight"), unit(options.gap));
            styleSlides("width", cssSlideWidth());
            styleSlides("height", cssSlideHeight(), true);
            rootRect = newRect;
            emit(EVENT_RESIZED);
            if (overflow !== (overflow = isOverflow())) {
                toggleClass(root, CLASS_OVERFLOW, overflow);
                emit(EVENT_OVERFLOW, overflow);
            }
        }
    }
    function cssPadding(right) {
        var padding = options.padding;
        var prop = resolve(right ? "right" : "left");
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    }
    function cssTrackHeight() {
        var height = "";
        if (vertical) {
            height = cssHeight();
            assert(height, "height or heightRatio is missing.");
            height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
        }
        return height;
    }
    function cssHeight() {
        return unit(options.height || rect(list).width * options.heightRatio);
    }
    function cssSlideWidth() {
        return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
    }
    function cssSlideHeight() {
        return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
    }
    function cssSlideSize() {
        var gap = unit(options.gap);
        return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    }
    function listSize() {
        return rect(list)[resolve("width")];
    }
    function slideSize(index, withoutGap) {
        var Slide = getAt(index || 0);
        return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
    }
    function totalSize(index, withoutGap) {
        var Slide = getAt(index);
        if (Slide) {
            var right = rect(Slide.slide)[resolve("right")];
            var left = rect(list)[resolve("left")];
            return abs(right - left) + (withoutGap ? 0 : getGap());
        }
        return 0;
    }
    function sliderSize(withoutGap) {
        return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
    }
    function getGap() {
        var Slide = getAt(0);
        return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
    }
    function getPadding(right) {
        return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
    }
    function isOverflow() {
        return Splide2.is(FADE) || sliderSize(true) > listSize();
    }
    return {
        mount: mount,
        resize: resize,
        listSize: listSize,
        slideSize: slideSize,
        sliderSize: sliderSize,
        totalSize: totalSize,
        getPadding: getPadding,
        isOverflow: isOverflow
    };
}
var MULTIPLIER = 2;
function Clones(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on;
    var Elements = Components2.Elements, Slides = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var clones = [];
    var cloneCount;
    function mount() {
        on(EVENT_REFRESH, remount);
        on([
            EVENT_UPDATED,
            EVENT_RESIZE
        ], observe);
        if (cloneCount = computeCloneCount()) {
            generate(cloneCount);
            Components2.Layout.resize(true);
        }
    }
    function remount() {
        destroy();
        mount();
    }
    function destroy() {
        remove(clones);
        empty(clones);
        event.destroy();
    }
    function observe() {
        var count = computeCloneCount();
        if (cloneCount !== count) {
            if (cloneCount < count || !count) event.emit(EVENT_REFRESH);
        }
    }
    function generate(count) {
        var slides = Slides.get().slice();
        var length = slides.length;
        if (length) {
            while(slides.length < count)push(slides, slides);
            push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide, index) {
                var isHead = index < count;
                var clone = cloneDeep(Slide.slide, index);
                isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
                push(clones, clone);
                Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
            });
        }
    }
    function cloneDeep(elm, index) {
        var clone = elm.cloneNode(true);
        addClass(clone, options.classes.clone);
        clone.id = Splide2.root.id + "-clone" + pad(index + 1);
        return clone;
    }
    function computeCloneCount() {
        var clones2 = options.clones;
        if (!Splide2.is(LOOP)) clones2 = 0;
        else if (isUndefined(clones2)) {
            var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
            var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
            clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
        }
        return clones2;
    }
    return {
        mount: mount,
        destroy: destroy
    };
}
function Move(Splide2, Components2, options) {
    var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
    var set = Splide2.state.set;
    var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
    var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
    var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
    var Transition;
    function mount() {
        Transition = Components2.Transition;
        on([
            EVENT_MOUNTED,
            EVENT_RESIZED,
            EVENT_UPDATED,
            EVENT_REFRESH
        ], reposition);
    }
    function reposition() {
        if (!Components2.Controller.isBusy()) {
            Components2.Scroll.cancel();
            jump(Splide2.index);
            Components2.Slides.update();
        }
    }
    function move(dest, index, prev, callback) {
        if (dest !== index && canShift(dest > prev)) {
            cancel();
            translate(shift(getPosition(), dest > prev), true);
        }
        set(MOVING);
        emit(EVENT_MOVE, index, prev, dest);
        Transition.start(index, function() {
            set(IDLE);
            emit(EVENT_MOVED, index, prev, dest);
            callback && callback();
        });
    }
    function jump(index) {
        translate(toPosition(index, true));
    }
    function translate(position, preventLoop) {
        if (!Splide2.is(FADE)) {
            var destination = preventLoop ? position : loop(position);
            style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
            position !== destination && emit(EVENT_SHIFTED);
        }
    }
    function loop(position) {
        if (Splide2.is(LOOP)) {
            var index = toIndex(position);
            var exceededMax = index > Components2.Controller.getEnd();
            var exceededMin = index < 0;
            if (exceededMin || exceededMax) position = shift(position, exceededMax);
        }
        return position;
    }
    function shift(position, backwards) {
        var excess = position - getLimit(backwards);
        var size = sliderSize();
        position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
        return position;
    }
    function cancel() {
        translate(getPosition(), true);
        Transition.cancel();
    }
    function toIndex(position) {
        var Slides = Components2.Slides.get();
        var index = 0;
        var minDistance = Infinity;
        for(var i = 0; i < Slides.length; i++){
            var slideIndex = Slides[i].index;
            var distance = abs(toPosition(slideIndex, true) - position);
            if (distance <= minDistance) {
                minDistance = distance;
                index = slideIndex;
            } else break;
        }
        return index;
    }
    function toPosition(index, trimming) {
        var position = orient(totalSize(index - 1) - offset(index));
        return trimming ? trim(position) : position;
    }
    function getPosition() {
        var left = resolve("left");
        return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
    }
    function trim(position) {
        if (options.trimSpace && Splide2.is(SLIDE)) position = clamp(position, 0, orient(sliderSize(true) - listSize()));
        return position;
    }
    function offset(index) {
        var focus = options.focus;
        return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
    }
    function getLimit(max) {
        return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
    }
    function canShift(backwards) {
        var shifted = orient(shift(getPosition(), backwards));
        return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
    }
    function exceededLimit(max, position) {
        position = isUndefined(position) ? getPosition() : position;
        var exceededMin = max !== true && orient(position) < orient(getLimit(false));
        var exceededMax = max !== false && orient(position) > orient(getLimit(true));
        return exceededMin || exceededMax;
    }
    return {
        mount: mount,
        move: move,
        jump: jump,
        translate: translate,
        shift: shift,
        cancel: cancel,
        toIndex: toIndex,
        toPosition: toPosition,
        getPosition: getPosition,
        getLimit: getLimit,
        exceededLimit: exceededLimit,
        reposition: reposition
    };
}
function Controller(Splide2, Components2, options) {
    var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
    var Move = Components2.Move;
    var getPosition = Move.getPosition, getLimit = Move.getLimit, toPosition = Move.toPosition;
    var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
    var omitEnd = options.omitEnd;
    var isLoop = Splide2.is(LOOP);
    var isSlide = Splide2.is(SLIDE);
    var getNext = apply(getAdjacent, false);
    var getPrev = apply(getAdjacent, true);
    var currIndex = options.start || 0;
    var endIndex;
    var prevIndex = currIndex;
    var slideCount;
    var perMove;
    var perPage;
    function mount() {
        init();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH,
            EVENT_END_INDEX_CHANGED
        ], init);
        on(EVENT_RESIZED, onResized);
    }
    function init() {
        slideCount = getLength(true);
        perMove = options.perMove;
        perPage = options.perPage;
        endIndex = getEnd();
        var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
        if (index !== currIndex) {
            currIndex = index;
            Move.reposition();
        }
    }
    function onResized() {
        if (endIndex !== getEnd()) emit(EVENT_END_INDEX_CHANGED);
    }
    function go(control, allowSameIndex, callback) {
        if (!isBusy()) {
            var dest = parse(control);
            var index = loop(dest);
            if (index > -1 && (allowSameIndex || index !== currIndex)) {
                setIndex(index);
                Move.move(dest, index, prevIndex, callback);
            }
        }
    }
    function scroll(destination, duration, snap, callback) {
        Components2.Scroll.scroll(destination, duration, snap, function() {
            var index = loop(Move.toIndex(getPosition()));
            setIndex(omitEnd ? min(index, endIndex) : index);
            callback && callback();
        });
    }
    function parse(control) {
        var index = currIndex;
        if (isString(control)) {
            var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
            if (indicator === "+" || indicator === "-") index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
            else if (indicator === ">") index = number ? toIndex(+number) : getNext(true);
            else if (indicator === "<") index = getPrev(true);
        } else index = isLoop ? control : clamp(control, 0, endIndex);
        return index;
    }
    function getAdjacent(prev, destination) {
        var number = perMove || (hasFocus() ? 1 : perPage);
        var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
        if (dest === -1 && isSlide) {
            if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) return prev ? 0 : endIndex;
        }
        return destination ? dest : loop(dest);
    }
    function computeDestIndex(dest, from, snapPage) {
        if (isEnough() || hasFocus()) {
            var index = computeMovableDestIndex(dest);
            if (index !== dest) {
                from = dest;
                dest = index;
                snapPage = false;
            }
            if (dest < 0 || dest > endIndex) {
                if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) dest = toIndex(toPage(dest));
                else {
                    if (isLoop) dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
                    else if (options.rewind) dest = dest < 0 ? endIndex : 0;
                    else dest = -1;
                }
            } else if (snapPage && dest !== from) dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        } else dest = -1;
        return dest;
    }
    function computeMovableDestIndex(dest) {
        if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
            var position = getPosition();
            while(position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind))dest < currIndex ? --dest : ++dest;
        }
        return dest;
    }
    function loop(index) {
        return isLoop ? (index + slideCount) % slideCount || 0 : index;
    }
    function getEnd() {
        var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
        while(omitEnd && end-- > 0)if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
            end++;
            break;
        }
        return clamp(end, 0, slideCount - 1);
    }
    function toIndex(page) {
        return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
    }
    function toPage(index) {
        return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
    }
    function toDest(destination) {
        var closest = Move.toIndex(destination);
        return isSlide ? clamp(closest, 0, endIndex) : closest;
    }
    function setIndex(index) {
        if (index !== currIndex) {
            prevIndex = currIndex;
            currIndex = index;
        }
    }
    function getIndex(prev) {
        return prev ? prevIndex : currIndex;
    }
    function hasFocus() {
        return !isUndefined(options.focus) || options.isNavigation;
    }
    function isBusy() {
        return Splide2.state.is([
            MOVING,
            SCROLLING
        ]) && !!options.waitForTransition;
    }
    return {
        mount: mount,
        go: go,
        scroll: scroll,
        getNext: getNext,
        getPrev: getPrev,
        getAdjacent: getAdjacent,
        getEnd: getEnd,
        setIndex: setIndex,
        getIndex: getIndex,
        toIndex: toIndex,
        toPage: toPage,
        toDest: toDest,
        hasFocus: hasFocus,
        isBusy: isBusy
    };
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, bind = event.bind, emit = event.emit;
    var classes = options.classes, i18n = options.i18n;
    var Elements = Components2.Elements, Controller = Components2.Controller;
    var placeholder = Elements.arrows, track = Elements.track;
    var wrapper = placeholder;
    var prev = Elements.prev;
    var next = Elements.next;
    var created;
    var wrapperClasses;
    var arrows = {};
    function mount() {
        init();
        on(EVENT_UPDATED, remount);
    }
    function remount() {
        destroy();
        mount();
    }
    function init() {
        var enabled = options.arrows;
        if (enabled && !(prev && next)) createArrows();
        if (prev && next) {
            assign(arrows, {
                prev: prev,
                next: next
            });
            display(wrapper, enabled ? "" : "none");
            addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
            if (enabled) {
                listen();
                update();
                setAttribute([
                    prev,
                    next
                ], ARIA_CONTROLS, track.id);
                emit(EVENT_ARROWS_MOUNTED, prev, next);
            }
        }
    }
    function destroy() {
        event.destroy();
        removeClass(wrapper, wrapperClasses);
        if (created) {
            remove(placeholder ? [
                prev,
                next
            ] : wrapper);
            prev = next = null;
        } else removeAttribute([
            prev,
            next
        ], ALL_ATTRIBUTES);
    }
    function listen() {
        on([
            EVENT_MOUNTED,
            EVENT_MOVED,
            EVENT_REFRESH,
            EVENT_SCROLLED,
            EVENT_END_INDEX_CHANGED
        ], update);
        bind(next, "click", apply(go, ">"));
        bind(prev, "click", apply(go, "<"));
    }
    function go(control) {
        Controller.go(control, true);
    }
    function createArrows() {
        wrapper = placeholder || create("div", classes.arrows);
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        append(wrapper, [
            prev,
            next
        ]);
        !placeholder && before(wrapper, track);
    }
    function createArrow(prev2) {
        var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
        return parseHtml(arrow);
    }
    function update() {
        if (prev && next) {
            var index = Splide2.index;
            var prevIndex = Controller.getPrev();
            var nextIndex = Controller.getNext();
            var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
            var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
            prev.disabled = prevIndex < 0;
            next.disabled = nextIndex < 0;
            setAttribute(prev, ARIA_LABEL, prevLabel);
            setAttribute(next, ARIA_LABEL, nextLabel);
            emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
        }
    }
    return {
        arrows: arrows,
        mount: mount,
        destroy: destroy,
        update: update
    };
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide2, Components2, options) {
    var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
    var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
    var isPaused = interval.isPaused;
    var Elements = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
    var autoplay = options.autoplay;
    var hovered;
    var focused;
    var stopped = autoplay === "pause";
    function mount() {
        if (autoplay) {
            listen();
            toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
            stopped || play();
            update();
        }
    }
    function listen() {
        if (options.pauseOnHover) bind(root, "mouseenter mouseleave", function(e) {
            hovered = e.type === "mouseenter";
            autoToggle();
        });
        if (options.pauseOnFocus) bind(root, "focusin focusout", function(e) {
            focused = e.type === "focusin";
            autoToggle();
        });
        if (toggle) bind(toggle, "click", function() {
            stopped ? play() : pause(true);
        });
        on([
            EVENT_MOVE,
            EVENT_SCROLL,
            EVENT_REFRESH
        ], interval.rewind);
        on(EVENT_MOVE, onMove);
    }
    function play() {
        if (isPaused() && Components2.Slides.isEnough()) {
            interval.start(!options.resetProgress);
            focused = hovered = stopped = false;
            update();
            emit(EVENT_AUTOPLAY_PLAY);
        }
    }
    function pause(stop) {
        if (stop === void 0) stop = true;
        stopped = !!stop;
        update();
        if (!isPaused()) {
            interval.pause();
            emit(EVENT_AUTOPLAY_PAUSE);
        }
    }
    function autoToggle() {
        if (!stopped) hovered || focused ? pause(false) : play();
    }
    function update() {
        if (toggle) {
            toggleClass(toggle, CLASS_ACTIVE, !stopped);
            setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
        }
    }
    function onAnimationFrame(rate) {
        var bar = Elements.bar;
        bar && style(bar, "width", rate * 100 + "%");
        emit(EVENT_AUTOPLAY_PLAYING, rate);
    }
    function onMove(index) {
        var Slide = Components2.Slides.getAt(index);
        interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
    }
    return {
        mount: mount,
        destroy: interval.cancel,
        play: play,
        pause: pause,
        isPaused: isPaused
    };
}
function Cover(Splide2, Components2, options) {
    var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
    function mount() {
        if (options.cover) {
            on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
            on([
                EVENT_MOUNTED,
                EVENT_UPDATED,
                EVENT_REFRESH
            ], apply(cover, true));
        }
    }
    function cover(cover2) {
        Components2.Slides.forEach(function(Slide) {
            var img = child(Slide.container || Slide.slide, "img");
            if (img && img.src) toggle(cover2, img, Slide);
        });
    }
    function toggle(cover2, img, Slide) {
        Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
        display(img, cover2 ? "none" : "");
    }
    return {
        mount: mount,
        destroy: apply(cover, false)
    };
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide2, Components2, options) {
    var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
    var set = Splide2.state.set;
    var Move = Components2.Move;
    var getPosition = Move.getPosition, getLimit = Move.getLimit, exceededLimit = Move.exceededLimit, translate = Move.translate;
    var isSlide = Splide2.is(SLIDE);
    var interval;
    var callback;
    var friction = 1;
    function mount() {
        on(EVENT_MOVE, clear);
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], cancel);
    }
    function scroll(destination, duration, snap, onScrolled, noConstrain) {
        var from = getPosition();
        clear();
        if (snap && (!isSlide || !exceededLimit())) {
            var size = Components2.Layout.sliderSize();
            var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
            destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
        }
        var noDistance = approximatelyEqual(from, destination, 1);
        friction = 1;
        duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
        callback = onScrolled;
        interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
        set(SCROLLING);
        emit(EVENT_SCROLL);
        interval.start();
    }
    function onEnd() {
        set(IDLE);
        callback && callback();
        emit(EVENT_SCROLLED);
    }
    function update(from, to, noConstrain, rate) {
        var position = getPosition();
        var target = from + (to - from) * easing(rate);
        var diff = (target - position) * friction;
        translate(position + diff);
        if (isSlide && !noConstrain && exceededLimit()) {
            friction *= FRICTION_FACTOR;
            if (abs(diff) < BOUNCE_DIFF_THRESHOLD) scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
        }
    }
    function clear() {
        if (interval) interval.cancel();
    }
    function cancel() {
        if (interval && !interval.isPaused()) {
            clear();
            onEnd();
        }
    }
    function easing(t) {
        var easingFunc = options.easingFunc;
        return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
    }
    return {
        mount: mount,
        destroy: clear,
        scroll: scroll,
        cancel: cancel
    };
}
var SCROLL_LISTENER_OPTIONS = {
    passive: false,
    capture: true
};
function Drag(Splide2, Components2, options) {
    var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
    var state = Splide2.state;
    var Move = Components2.Move, Scroll = Components2.Scroll, Controller = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
    var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
    var getPosition = Move.getPosition, exceededLimit = Move.exceededLimit;
    var basePosition;
    var baseEvent;
    var prevBaseEvent;
    var isFree;
    var dragging;
    var exceeded = false;
    var clickPrevented;
    var disabled;
    var target;
    function mount() {
        bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
        bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
        bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
        bind(track, "click", onClick, {
            capture: true
        });
        bind(track, "dragstart", prevent);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], init);
    }
    function init() {
        var drag = options.drag;
        disable(!drag);
        isFree = drag === "free";
    }
    function onPointerDown(e) {
        clickPrevented = false;
        if (!disabled) {
            var isTouch = isTouchEvent(e);
            if (isDraggable(e.target) && (isTouch || !e.button)) {
                if (!Controller.isBusy()) {
                    target = isTouch ? track : window;
                    dragging = state.is([
                        MOVING,
                        SCROLLING
                    ]);
                    prevBaseEvent = null;
                    bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
                    bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
                    Move.cancel();
                    Scroll.cancel();
                    save(e);
                } else prevent(e, true);
            }
        }
    }
    function onPointerMove(e) {
        if (!state.is(DRAGGING)) {
            state.set(DRAGGING);
            emit(EVENT_DRAG);
        }
        if (e.cancelable) {
            if (dragging) {
                Move.translate(basePosition + constrain(diffCoord(e)));
                var expired = diffTime(e) > LOG_INTERVAL;
                var hasExceeded = exceeded !== (exceeded = exceededLimit());
                if (expired || hasExceeded) save(e);
                clickPrevented = true;
                emit(EVENT_DRAGGING);
                prevent(e);
            } else if (isSliderDirection(e)) {
                dragging = shouldStart(e);
                prevent(e);
            }
        }
    }
    function onPointerUp(e) {
        if (state.is(DRAGGING)) {
            state.set(IDLE);
            emit(EVENT_DRAGGED);
        }
        if (dragging) {
            move(e);
            prevent(e);
        }
        unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
        unbind(target, POINTER_UP_EVENTS, onPointerUp);
        dragging = false;
    }
    function onClick(e) {
        if (!disabled && clickPrevented) prevent(e, true);
    }
    function save(e) {
        prevBaseEvent = baseEvent;
        baseEvent = e;
        basePosition = getPosition();
    }
    function move(e) {
        var velocity = computeVelocity(e);
        var destination = computeDestination(velocity);
        var rewind = options.rewind && options.rewindByDrag;
        reduce(false);
        if (isFree) Controller.scroll(destination, 0, options.snap);
        else if (Splide2.is(FADE)) Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
        else if (Splide2.is(SLIDE) && exceeded && rewind) Controller.go(exceededLimit(true) ? ">" : "<");
        else Controller.go(Controller.toDest(destination), true);
        reduce(true);
    }
    function shouldStart(e) {
        var thresholds = options.dragMinThreshold;
        var isObj = isObject(thresholds);
        var mouse = isObj && thresholds.mouse || 0;
        var touch = (isObj ? thresholds.touch : +thresholds) || 10;
        return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
    }
    function isSliderDirection(e) {
        return abs(diffCoord(e)) > abs(diffCoord(e, true));
    }
    function computeVelocity(e) {
        if (Splide2.is(LOOP) || !exceeded) {
            var time = diffTime(e);
            if (time && time < LOG_INTERVAL) return diffCoord(e) / time;
        }
        return 0;
    }
    function computeDestination(velocity) {
        return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
    }
    function diffCoord(e, orthogonal) {
        return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
    }
    function diffTime(e) {
        return timeOf(e) - timeOf(getBaseEvent(e));
    }
    function getBaseEvent(e) {
        return baseEvent === e && prevBaseEvent || baseEvent;
    }
    function coordOf(e, orthogonal) {
        return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
    }
    function constrain(diff) {
        return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
    }
    function isDraggable(target2) {
        var noDrag = options.noDrag;
        return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
    }
    function isTouchEvent(e) {
        return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
    }
    function isDragging() {
        return dragging;
    }
    function disable(value) {
        disabled = value;
    }
    return {
        mount: mount,
        disable: disable,
        isDragging: isDragging
    };
}
var NORMALIZATION_MAP = {
    Spacebar: " ",
    Right: ARROW_RIGHT,
    Left: ARROW_LEFT,
    Up: ARROW_UP,
    Down: ARROW_DOWN
};
function normalizeKey(key) {
    key = isString(key) ? key : key.key;
    return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
    var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
    var root = Splide2.root;
    var resolve = Components2.Direction.resolve;
    var target;
    var disabled;
    function mount() {
        init();
        on(EVENT_UPDATED, destroy);
        on(EVENT_UPDATED, init);
        on(EVENT_MOVE, onMove);
    }
    function init() {
        var keyboard = options.keyboard;
        if (keyboard) {
            target = keyboard === "global" ? window : root;
            bind(target, KEYBOARD_EVENT, onKeydown);
        }
    }
    function destroy() {
        unbind(target, KEYBOARD_EVENT);
    }
    function disable(value) {
        disabled = value;
    }
    function onMove() {
        var _disabled = disabled;
        disabled = true;
        nextTick(function() {
            disabled = _disabled;
        });
    }
    function onKeydown(e) {
        if (!disabled) {
            var key = normalizeKey(e);
            if (key === resolve(ARROW_LEFT)) Splide2.go("<");
            else if (key === resolve(ARROW_RIGHT)) Splide2.go(">");
        }
    }
    return {
        mount: mount,
        destroy: destroy,
        disable: disable
    };
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide2, Components2, options) {
    var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
    var isSequential = options.lazyLoad === "sequential";
    var events = [
        EVENT_MOVED,
        EVENT_SCROLLED
    ];
    var entries = [];
    function mount() {
        if (options.lazyLoad) {
            init();
            on(EVENT_REFRESH, init);
        }
    }
    function init() {
        empty(entries);
        register();
        if (isSequential) loadNext();
        else {
            off(events);
            on(events, check);
            check();
        }
    }
    function register() {
        Components2.Slides.forEach(function(Slide) {
            queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function(img) {
                var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
                var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
                if (src !== img.src || srcset !== img.srcset) {
                    var className = options.classes.spinner;
                    var parent = img.parentElement;
                    var spinner = child(parent, "." + className) || create("span", className, parent);
                    entries.push([
                        img,
                        Slide,
                        spinner
                    ]);
                    img.src || display(img, "none");
                }
            });
        });
    }
    function check() {
        entries = entries.filter(function(data) {
            var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
            return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
        });
        entries.length || off(events);
    }
    function load(data) {
        var img = data[0];
        addClass(data[1].slide, CLASS_LOADING);
        bind(img, "load error", apply(onLoad, data));
        setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
        setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
        removeAttribute(img, SRC_DATA_ATTRIBUTE);
        removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
    }
    function onLoad(data, e) {
        var img = data[0], Slide = data[1];
        removeClass(Slide.slide, CLASS_LOADING);
        if (e.type !== "error") {
            remove(data[2]);
            display(img, "");
            emit(EVENT_LAZYLOAD_LOADED, img, Slide);
            emit(EVENT_RESIZE);
        }
        isSequential && loadNext();
    }
    function loadNext() {
        entries.length && load(entries.shift());
    }
    return {
        mount: mount,
        destroy: apply(empty, entries),
        check: check
    };
}
function Pagination(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Slides = Components2.Slides, Elements = Components2.Elements, Controller = Components2.Controller;
    var hasFocus = Controller.hasFocus, getIndex = Controller.getIndex, go = Controller.go;
    var resolve = Components2.Direction.resolve;
    var placeholder = Elements.pagination;
    var items = [];
    var list;
    var paginationClasses;
    function mount() {
        destroy();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH,
            EVENT_END_INDEX_CHANGED
        ], mount);
        var enabled = options.pagination;
        placeholder && display(placeholder, enabled ? "" : "none");
        if (enabled) {
            on([
                EVENT_MOVE,
                EVENT_SCROLL,
                EVENT_SCROLLED
            ], update);
            createPagination();
            update();
            emit(EVENT_PAGINATION_MOUNTED, {
                list: list,
                items: items
            }, getAt(Splide2.index));
        }
    }
    function destroy() {
        if (list) {
            remove(placeholder ? slice(list.children) : list);
            removeClass(list, paginationClasses);
            empty(items);
            list = null;
        }
        event.destroy();
    }
    function createPagination() {
        var length = Splide2.length;
        var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
        var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
        list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
        addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
        setAttribute(list, ROLE, "tablist");
        setAttribute(list, ARIA_LABEL, i18n.select);
        setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
        for(var i = 0; i < max; i++){
            var li = create("li", null, list);
            var button = create("button", {
                class: classes.page,
                type: "button"
            }, li);
            var controls = Slides.getIn(i).map(function(Slide) {
                return Slide.slide.id;
            });
            var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
            bind(button, "click", apply(onClick, i));
            if (options.paginationKeyboard) bind(button, "keydown", apply(onKeydown, i));
            setAttribute(li, ROLE, "presentation");
            setAttribute(button, ROLE, "tab");
            setAttribute(button, ARIA_CONTROLS, controls.join(" "));
            setAttribute(button, ARIA_LABEL, format(text, i + 1));
            setAttribute(button, TAB_INDEX, -1);
            items.push({
                li: li,
                button: button,
                page: i
            });
        }
    }
    function onClick(page) {
        go(">" + page, true);
    }
    function onKeydown(page, e) {
        var length = items.length;
        var key = normalizeKey(e);
        var dir = getDirection();
        var nextPage = -1;
        if (key === resolve(ARROW_RIGHT, false, dir)) nextPage = ++page % length;
        else if (key === resolve(ARROW_LEFT, false, dir)) nextPage = (--page + length) % length;
        else if (key === "Home") nextPage = 0;
        else if (key === "End") nextPage = length - 1;
        var item = items[nextPage];
        if (item) {
            focus(item.button);
            go(">" + nextPage);
            prevent(e, true);
        }
    }
    function getDirection() {
        return options.paginationDirection || options.direction;
    }
    function getAt(index) {
        return items[Controller.toPage(index)];
    }
    function update() {
        var prev = getAt(getIndex(true));
        var curr = getAt(getIndex());
        if (prev) {
            var button = prev.button;
            removeClass(button, CLASS_ACTIVE);
            removeAttribute(button, ARIA_SELECTED);
            setAttribute(button, TAB_INDEX, -1);
        }
        if (curr) {
            var _button = curr.button;
            addClass(_button, CLASS_ACTIVE);
            setAttribute(_button, ARIA_SELECTED, true);
            setAttribute(_button, TAB_INDEX, "");
        }
        emit(EVENT_PAGINATION_UPDATED, {
            list: list,
            items: items
        }, prev, curr);
    }
    return {
        items: items,
        mount: mount,
        destroy: destroy,
        getAt: getAt,
        update: update
    };
}
var TRIGGER_KEYS = [
    " ",
    "Enter"
];
function Sync(Splide2, Components2, options) {
    var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
    var events = [];
    function mount() {
        Splide2.splides.forEach(function(target) {
            if (!target.isParent) {
                sync(Splide2, target.splide);
                sync(target.splide, Splide2);
            }
        });
        if (isNavigation) navigate();
    }
    function destroy() {
        events.forEach(function(event) {
            event.destroy();
        });
        empty(events);
    }
    function remount() {
        destroy();
        mount();
    }
    function sync(splide, target) {
        var event = EventInterface(splide);
        event.on(EVENT_MOVE, function(index, prev, dest) {
            target.go(target.is(LOOP) ? dest : index);
        });
        events.push(event);
    }
    function navigate() {
        var event = EventInterface(Splide2);
        var on = event.on;
        on(EVENT_CLICK, onClick);
        on(EVENT_SLIDE_KEYDOWN, onKeydown);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], update);
        events.push(event);
        event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
    }
    function update() {
        setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
    }
    function onClick(Slide) {
        Splide2.go(Slide.index);
    }
    function onKeydown(Slide, e) {
        if (includes(TRIGGER_KEYS, normalizeKey(e))) {
            onClick(Slide);
            prevent(e);
        }
    }
    return {
        setup: apply(Components2.Media.set, {
            slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
        }, true),
        mount: mount,
        destroy: destroy,
        remount: remount
    };
}
function Wheel(Splide2, Components2, options) {
    var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
    var lastTime = 0;
    function mount() {
        if (options.wheel) bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
    function onWheel(e) {
        if (e.cancelable) {
            var deltaY = e.deltaY;
            var backwards = deltaY < 0;
            var timeStamp = timeOf(e);
            var _min = options.wheelMinThreshold || 0;
            var sleep = options.wheelSleep || 0;
            if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
                Splide2.go(backwards ? "<" : ">");
                lastTime = timeStamp;
            }
            shouldPrevent(backwards) && prevent(e);
        }
    }
    function shouldPrevent(backwards) {
        return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
    }
    return {
        mount: mount
    };
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide2, Components2, options) {
    var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
    var track = Components2.Elements.track;
    var enabled = options.live && !options.isNavigation;
    var sr = create("span", CLASS_SR);
    var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
    function mount() {
        if (enabled) {
            disable(!Components2.Autoplay.isPaused());
            setAttribute(track, ARIA_ATOMIC, true);
            sr.textContent = "\u2026";
            on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
            on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
            on([
                EVENT_MOVED,
                EVENT_SCROLLED
            ], apply(toggle, true));
        }
    }
    function toggle(active) {
        setAttribute(track, ARIA_BUSY, active);
        if (active) {
            append(track, sr);
            interval.start();
        } else {
            remove(sr);
            interval.cancel();
        }
    }
    function destroy() {
        removeAttribute(track, [
            ARIA_LIVE,
            ARIA_ATOMIC,
            ARIA_BUSY
        ]);
        remove(sr);
    }
    function disable(disabled) {
        if (enabled) setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
    return {
        mount: mount,
        disable: disable,
        destroy: destroy
    };
}
var ComponentConstructors = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Media: Media,
    Direction: Direction,
    Elements: Elements,
    Slides: Slides,
    Layout: Layout,
    Clones: Clones,
    Move: Move,
    Controller: Controller,
    Arrows: Arrows,
    Autoplay: Autoplay,
    Cover: Cover,
    Scroll: Scroll,
    Drag: Drag,
    Keyboard: Keyboard,
    LazyLoad: LazyLoad,
    Pagination: Pagination,
    Sync: Sync,
    Wheel: Wheel,
    Live: Live
});
var I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s"
};
var DEFAULTS = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: true,
    arrows: true,
    pagination: true,
    paginationKeyboard: true,
    interval: 5e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: true,
    direction: "ltr",
    trimSpace: true,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: true,
    classes: CLASSES,
    i18n: I18N,
    reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: "pause"
    }
};
function Fade(Splide2, Components2, options) {
    var Slides = Components2.Slides;
    function mount() {
        EventInterface(Splide2).on([
            EVENT_MOUNTED,
            EVENT_REFRESH
        ], init);
    }
    function init() {
        Slides.forEach(function(Slide) {
            Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
        });
    }
    function start(index, done) {
        Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
        nextTick(done);
    }
    return {
        mount: mount,
        start: start,
        cancel: noop
    };
}
function Slide(Splide2, Components2, options) {
    var Move = Components2.Move, Controller = Components2.Controller, Scroll = Components2.Scroll;
    var list = Components2.Elements.list;
    var transition = apply(style, list, "transition");
    var endCallback;
    function mount() {
        EventInterface(Splide2).bind(list, "transitionend", function(e) {
            if (e.target === list && endCallback) {
                cancel();
                endCallback();
            }
        });
    }
    function start(index, done) {
        var destination = Move.toPosition(index, true);
        var position = Move.getPosition();
        var speed = getSpeed(index);
        if (abs(destination - position) >= 1 && speed >= 1) {
            if (options.useScroll) Scroll.scroll(destination, speed, false, done);
            else {
                transition("transform " + speed + "ms " + options.easing);
                Move.translate(destination, true);
                endCallback = done;
            }
        } else {
            Move.jump(index);
            done();
        }
    }
    function cancel() {
        transition("");
        Scroll.cancel();
    }
    function getSpeed(index) {
        var rewindSpeed = options.rewindSpeed;
        if (Splide2.is(SLIDE) && rewindSpeed) {
            var prev = Controller.getIndex(true);
            var end = Controller.getEnd();
            if (prev === 0 && index >= end || prev >= end && index === 0) return rewindSpeed;
        }
        return options.speed;
    }
    return {
        mount: mount,
        start: start,
        cancel: cancel
    };
}
var _Splide = /*#__PURE__*/ function() {
    function _Splide(target, options) {
        this.event = EventInterface();
        this.Components = {};
        this.state = State(CREATED);
        this.splides = [];
        this._o = {};
        this._E = {};
        var root = isString(target) ? query(document, target) : target;
        assert(root, root + " is invalid.");
        this.root = root;
        options = merge({
            label: getAttribute(root, ARIA_LABEL) || "",
            labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
        }, DEFAULTS, _Splide.defaults, options || {});
        try {
            merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
        } catch (e) {
            assert(false, "Invalid JSON");
        }
        this._o = Object.create(merge({}, options));
    }
    var _proto = _Splide.prototype;
    _proto.mount = function mount(Extensions, Transition) {
        var _this = this;
        var state = this.state, Components2 = this.Components;
        assert(state.is([
            CREATED,
            DESTROYED
        ]), "Already mounted!");
        state.set(CREATED);
        this._C = Components2;
        this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
        this._E = Extensions || this._E;
        var Constructors = assign({}, ComponentConstructors, this._E, {
            Transition: this._T
        });
        forOwn(Constructors, function(Component, key) {
            var component = Component(_this, Components2, _this._o);
            Components2[key] = component;
            component.setup && component.setup();
        });
        forOwn(Components2, function(component) {
            component.mount && component.mount();
        });
        this.emit(EVENT_MOUNTED);
        addClass(this.root, CLASS_INITIALIZED);
        state.set(IDLE);
        this.emit(EVENT_READY);
        return this;
    };
    _proto.sync = function sync(splide) {
        this.splides.push({
            splide: splide
        });
        splide.splides.push({
            splide: this,
            isParent: true
        });
        if (this.state.is(IDLE)) {
            this._C.Sync.remount();
            splide.Components.Sync.remount();
        }
        return this;
    };
    _proto.go = function go(control) {
        this._C.Controller.go(control);
        return this;
    };
    _proto.on = function on(events, callback) {
        this.event.on(events, callback);
        return this;
    };
    _proto.off = function off(events) {
        this.event.off(events);
        return this;
    };
    _proto.emit = function emit(event) {
        var _this$event;
        (_this$event = this.event).emit.apply(_this$event, [
            event
        ].concat(slice(arguments, 1)));
        return this;
    };
    _proto.add = function add(slides, index) {
        this._C.Slides.add(slides, index);
        return this;
    };
    _proto.remove = function remove(matcher) {
        this._C.Slides.remove(matcher);
        return this;
    };
    _proto.is = function is(type) {
        return this._o.type === type;
    };
    _proto.refresh = function refresh() {
        this.emit(EVENT_REFRESH);
        return this;
    };
    _proto.destroy = function destroy(completely) {
        if (completely === void 0) completely = true;
        var event = this.event, state = this.state;
        if (state.is(CREATED)) EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
        else {
            forOwn(this._C, function(component) {
                component.destroy && component.destroy(completely);
            }, true);
            event.emit(EVENT_DESTROY);
            event.destroy();
            completely && empty(this.splides);
            state.set(DESTROYED);
        }
        return this;
    };
    _createClass(_Splide, [
        {
            key: "options",
            get: function get() {
                return this._o;
            },
            set: function set(options) {
                this._C.Media.set(options, true, true);
            }
        },
        {
            key: "length",
            get: function get() {
                return this._C.Slides.getLength(true);
            }
        },
        {
            key: "index",
            get: function get() {
                return this._C.Controller.getIndex();
            }
        }
    ]);
    return _Splide;
}();
var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
    listTag: "ul",
    slideTag: "li"
};
var Style = /*#__PURE__*/ function() {
    function Style(id, options) {
        this.styles = {};
        this.id = id;
        this.options = options;
    }
    var _proto2 = Style.prototype;
    _proto2.rule = function rule(selector, prop, value, breakpoint) {
        breakpoint = breakpoint || "default";
        var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
        var styles = selectors[selector] = selectors[selector] || {};
        styles[prop] = value;
    };
    _proto2.build = function build() {
        var _this2 = this;
        var css = "";
        if (this.styles.default) css += this.buildSelectors(this.styles.default);
        Object.keys(this.styles).sort(function(n, m) {
            return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
        }).forEach(function(breakpoint) {
            if (breakpoint !== "default") {
                css += "@media screen and (max-width: " + breakpoint + "px) {";
                css += _this2.buildSelectors(_this2.styles[breakpoint]);
                css += "}";
            }
        });
        return css;
    };
    _proto2.buildSelectors = function buildSelectors(selectors) {
        var _this3 = this;
        var css = "";
        forOwn(selectors, function(styles, selector) {
            selector = ("#" + _this3.id + " " + selector).trim();
            css += selector + " {";
            forOwn(styles, function(value, prop) {
                if (value || value === 0) css += prop + ": " + value + ";";
            });
            css += "}";
        });
        return css;
    };
    return Style;
}();
var SplideRenderer = /*#__PURE__*/ function() {
    function SplideRenderer(contents, options, config, defaults) {
        this.slides = [];
        this.options = {};
        this.breakpoints = [];
        merge(DEFAULTS, defaults || {});
        merge(merge(this.options, DEFAULTS), options || {});
        this.contents = contents;
        this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
        this.id = this.config.id || uniqueId("splide");
        this.Style = new Style(this.id, this.options);
        this.Direction = Direction(null, null, this.options);
        assert(this.contents.length, "Provide at least 1 content.");
        this.init();
    }
    SplideRenderer.clean = function clean(splide) {
        var _EventInterface14 = EventInterface(splide), on = _EventInterface14.on;
        var root = splide.root;
        var clones = queryAll(root, "." + CLASS_CLONE);
        on(EVENT_MOUNTED, function() {
            remove(child(root, "style"));
        });
        remove(clones);
    };
    var _proto3 = SplideRenderer.prototype;
    _proto3.init = function init() {
        this.parseBreakpoints();
        this.initSlides();
        this.registerRootStyles();
        this.registerTrackStyles();
        this.registerSlideStyles();
        this.registerListStyles();
    };
    _proto3.initSlides = function initSlides() {
        var _this4 = this;
        push(this.slides, this.contents.map(function(content, index) {
            content = isString(content) ? {
                html: content
            } : content;
            content.styles = content.styles || {};
            content.attrs = content.attrs || {};
            _this4.cover(content);
            var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
            assign(content.attrs, {
                class: (classes + " " + (content.attrs.class || "")).trim(),
                style: _this4.buildStyles(content.styles)
            });
            return content;
        }));
        if (this.isLoop()) this.generateClones(this.slides);
    };
    _proto3.registerRootStyles = function registerRootStyles() {
        var _this5 = this;
        this.breakpoints.forEach(function(_ref2) {
            var width = _ref2[0], options = _ref2[1];
            _this5.Style.rule(" ", "max-width", unit(options.width), width);
        });
    };
    _proto3.registerTrackStyles = function registerTrackStyles() {
        var _this6 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_TRACK;
        this.breakpoints.forEach(function(_ref3) {
            var width = _ref3[0], options = _ref3[1];
            Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
            Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
            Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
        });
    };
    _proto3.registerListStyles = function registerListStyles() {
        var _this7 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_LIST;
        this.breakpoints.forEach(function(_ref4) {
            var width = _ref4[0], options = _ref4[1];
            Style2.rule(selector, "transform", _this7.buildTranslate(options), width);
            if (!_this7.cssSlideHeight(options)) Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
        });
    };
    _proto3.registerSlideStyles = function registerSlideStyles() {
        var _this8 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_SLIDE;
        this.breakpoints.forEach(function(_ref5) {
            var width = _ref5[0], options = _ref5[1];
            Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
            Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
            Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
            Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
        });
    };
    _proto3.buildTranslate = function buildTranslate(options) {
        var _this$Direction = this.Direction, resolve = _this$Direction.resolve, orient = _this$Direction.orient;
        var values = [];
        values.push(this.cssOffsetClones(options));
        values.push(this.cssOffsetGaps(options));
        if (this.isCenter(options)) {
            values.push(this.buildCssValue(orient(-50), "%"));
            values.push.apply(values, this.cssOffsetCenter(options));
        }
        return values.filter(Boolean).map(function(value) {
            return "translate" + resolve("X") + "(" + value + ")";
        }).join(" ");
    };
    _proto3.cssOffsetClones = function cssOffsetClones(options) {
        var _this$Direction2 = this.Direction, resolve = _this$Direction2.resolve, orient = _this$Direction2.orient;
        var cloneCount = this.getCloneCount();
        if (this.isFixedWidth(options)) {
            var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue.value, unit2 = _this$parseCssValue.unit;
            return this.buildCssValue(orient(value) * cloneCount, unit2);
        }
        var percent = 100 * cloneCount / options.perPage;
        return orient(percent) + "%";
    };
    _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
        var _this$Direction3 = this.Direction, resolve = _this$Direction3.resolve, orient = _this$Direction3.orient;
        if (this.isFixedWidth(options)) {
            var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue2.value, unit2 = _this$parseCssValue2.unit;
            return [
                this.buildCssValue(orient(value / 2), unit2)
            ];
        }
        var values = [];
        var perPage = options.perPage, gap = options.gap;
        values.push(orient(50 / perPage) + "%");
        if (gap) {
            var _this$parseCssValue3 = this.parseCssValue(gap), _value = _this$parseCssValue3.value, _unit = _this$parseCssValue3.unit;
            var gapOffset = (_value / perPage - _value) / 2;
            values.push(this.buildCssValue(orient(gapOffset), _unit));
        }
        return values;
    };
    _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
        var cloneCount = this.getCloneCount();
        if (cloneCount && options.gap) {
            var orient = this.Direction.orient;
            var _this$parseCssValue4 = this.parseCssValue(options.gap), value = _this$parseCssValue4.value, unit2 = _this$parseCssValue4.unit;
            if (this.isFixedWidth(options)) return this.buildCssValue(orient(value * cloneCount), unit2);
            var perPage = options.perPage;
            var gaps = cloneCount / perPage;
            return this.buildCssValue(orient(gaps * value), unit2);
        }
        return "";
    };
    _proto3.resolve = function resolve(prop) {
        return camelToKebab(this.Direction.resolve(prop));
    };
    _proto3.cssPadding = function cssPadding(options, right) {
        var padding = options.padding;
        var prop = this.Direction.resolve(right ? "right" : "left", true);
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    };
    _proto3.cssTrackHeight = function cssTrackHeight(options) {
        var height = "";
        if (this.isVertical()) {
            height = this.cssHeight(options);
            assert(height, '"height" is missing.');
            height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
        }
        return height;
    };
    _proto3.cssHeight = function cssHeight(options) {
        return unit(options.height);
    };
    _proto3.cssSlideWidth = function cssSlideWidth(options) {
        return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
    };
    _proto3.cssSlideHeight = function cssSlideHeight(options) {
        return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
    };
    _proto3.cssSlideSize = function cssSlideSize(options) {
        var gap = unit(options.gap);
        return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    };
    _proto3.cssAspectRatio = function cssAspectRatio(options) {
        var heightRatio = options.heightRatio;
        return heightRatio ? "" + 1 / heightRatio : "";
    };
    _proto3.buildCssValue = function buildCssValue(value, unit2) {
        return "" + value + unit2;
    };
    _proto3.parseCssValue = function parseCssValue(value) {
        if (isString(value)) {
            var number = parseFloat(value) || 0;
            var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
            return {
                value: number,
                unit: unit2
            };
        }
        return {
            value: value,
            unit: "px"
        };
    };
    _proto3.parseBreakpoints = function parseBreakpoints() {
        var _this9 = this;
        var breakpoints = this.options.breakpoints;
        this.breakpoints.push([
            "default",
            this.options
        ]);
        if (breakpoints) forOwn(breakpoints, function(options, width) {
            _this9.breakpoints.push([
                width,
                merge(merge({}, _this9.options), options)
            ]);
        });
    };
    _proto3.isFixedWidth = function isFixedWidth(options) {
        return !!options[this.Direction.resolve("fixedWidth")];
    };
    _proto3.isLoop = function isLoop() {
        return this.options.type === LOOP;
    };
    _proto3.isCenter = function isCenter(options) {
        if (options.focus === "center") {
            if (this.isLoop()) return true;
            if (this.options.type === SLIDE) return !this.options.trimSpace;
        }
        return false;
    };
    _proto3.isVertical = function isVertical() {
        return this.options.direction === TTB;
    };
    _proto3.buildClasses = function buildClasses() {
        var options = this.options;
        return [
            CLASS_ROOT,
            CLASS_ROOT + "--" + options.type,
            CLASS_ROOT + "--" + options.direction,
            options.drag && CLASS_ROOT + "--draggable",
            options.isNavigation && CLASS_ROOT + "--nav",
            CLASS_ACTIVE,
            !this.config.hidden && CLASS_RENDERED
        ].filter(Boolean).join(" ");
    };
    _proto3.buildAttrs = function buildAttrs(attrs) {
        var attr = "";
        forOwn(attrs, function(value, key) {
            attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
        });
        return attr.trim();
    };
    _proto3.buildStyles = function buildStyles(styles) {
        var style = "";
        forOwn(styles, function(value, key) {
            style += " " + camelToKebab(key) + ":" + value + ";";
        });
        return style.trim();
    };
    _proto3.renderSlides = function renderSlides() {
        var _this10 = this;
        var tag = this.config.slideTag;
        return this.slides.map(function(content) {
            return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
        }).join("");
    };
    _proto3.cover = function cover(content) {
        var styles = content.styles, _content$html = content.html, html = _content$html === void 0 ? "" : _content$html;
        if (this.options.cover && !this.options.lazyLoad) {
            var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
            if (src && src[2]) styles.background = "center/cover no-repeat url('" + src[2] + "')";
        }
    };
    _proto3.generateClones = function generateClones(contents) {
        var classes = this.options.classes;
        var count = this.getCloneCount();
        var slides = contents.slice();
        while(slides.length < count)push(slides, slides);
        push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function(content, index) {
            var attrs = assign({}, content.attrs, {
                class: content.attrs.class + " " + classes.clone
            });
            var clone = assign({}, content, {
                attrs: attrs
            });
            index < count ? contents.unshift(clone) : contents.push(clone);
        });
    };
    _proto3.getCloneCount = function getCloneCount() {
        if (this.isLoop()) {
            var options = this.options;
            if (options.clones) return options.clones;
            var perPage = max.apply(void 0, this.breakpoints.map(function(_ref6) {
                var options2 = _ref6[1];
                return options2.perPage;
            }));
            return perPage * ((options.flickMaxPages || 1) + 1);
        }
        return 0;
    };
    _proto3.renderArrows = function renderArrows() {
        var html = "";
        html += "<div class=\"" + this.options.classes.arrows + "\">";
        html += this.renderArrow(true);
        html += this.renderArrow(false);
        html += "</div>";
        return html;
    };
    _proto3.renderArrow = function renderArrow(prev) {
        var _this$options = this.options, classes = _this$options.classes, i18n = _this$options.i18n;
        var attrs = {
            class: classes.arrow + " " + (prev ? classes.prev : classes.next),
            type: "button",
            ariaLabel: prev ? i18n.prev : i18n.next
        };
        return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
    };
    _proto3.html = function html() {
        var _this$config = this.config, rootClass = _this$config.rootClass, listTag = _this$config.listTag, arrows = _this$config.arrows, beforeTrack = _this$config.beforeTrack, afterTrack = _this$config.afterTrack, slider = _this$config.slider, beforeSlider = _this$config.beforeSlider, afterSlider = _this$config.afterSlider;
        var html = "";
        html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
        html += "<style>" + this.Style.build() + "</style>";
        if (slider) {
            html += beforeSlider || "";
            html += "<div class=\"splide__slider\">";
        }
        html += beforeTrack || "";
        if (arrows) html += this.renderArrows();
        html += "<div class=\"splide__track\">";
        html += "<" + listTag + " class=\"splide__list\">";
        html += this.renderSlides();
        html += "</" + listTag + ">";
        html += "</div>";
        html += afterTrack || "";
        if (slider) {
            html += "</div>";
            html += afterSlider || "";
        }
        html += "</div>";
        return html;
    };
    return SplideRenderer;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5ITdS"}]},["cklYw","fWapj"], "fWapj", "parcelRequire94c2")

//# sourceMappingURL=app.js.map
