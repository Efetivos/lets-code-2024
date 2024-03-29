import { version, ref, watchEffect, watch, getCurrentInstance, inject, defineComponent, h, computed, unref, provide, shallowReactive, Suspense, nextTick, Transition, useSSRContext, hasInjectionContext, resolveComponent, mergeProps, withAsyncContext, withCtx, createVNode, createApp, effectScope, reactive, defineAsyncComponent, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, toRef, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue/index.mjs';
import { $fetch } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unctx/dist/index.mjs';
import { getActiveHead } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin, composableNames } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION, routerKey } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import { createError as createError$1, sanitizeStatusCode, getRequestHeader, setCookie, getCookie, deleteCookie } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/h3/dist/index.mjs';
import { hasProtocol, joinURL, parseURL, parseQuery, withQuery, isScriptProtocol, withTrailingSlash, withoutTrailingSlash } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/ufo/dist/index.mjs';
import { gsap as gsap$2 } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/gsap/dist/gsap.js';
import Lenis from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/@studio-freight/lenis/dist/lenis.mjs';
import * as THREE from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/build/three.module.js';
import { GLTFLoader } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import { DotScreenPass } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three/examples/jsm/postprocessing/DotScreenPass.js';
import { defu } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/defu/dist/defu.mjs';
import { klona } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/klona/dist/index.mjs';
import { parse } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/cookie-es/dist/index.mjs';
import destr from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/destr/dist/index.mjs';
import { isEqual } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/ohash/dist/index.mjs';
import { isRepositoryEndpoint, getRepositoryName, createClient, filter, cookie, asText, asHTML, asLink, asLinkAttrs, asDate, asImageSrc, asImageWidthSrcSet, asImagePixelDensitySrcSet, isFilled, documentToLinkField } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/@prismicio/client/dist/index.js';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/vue/server-renderer/index.mjs';
import { a as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/pathe/dist/index.mjs';

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*!
 * Observer 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap$1,
    _coreInitted$1,
    _win$1,
    _doc$1,
    _docEl$1,
    _body$1,
    _isTouch,
    _pointerType,
    ScrollTrigger$1,
    _root$1,
    _normalizer$1,
    _eventTypes,
    _getGSAP$1 = function _getGSAP() {
  return gsap$1 || "undefined" !== "undefined"   ;
},
    _startup$1 = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime$1 = Date.now,
    _bridge = function _bridge(name, value) {
  return value;
},
    _integrate = function _integrate() {
  var core = ScrollTrigger$1.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;

  _bridge = function _bridge(name, value) {
    return data[name](value);
  };
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _isViewport$1 = function _isViewport(el) {
  return !!~_root$1.indexOf(el);
},
    _addListener$1 = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener$1 = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll$1 = function _onScroll() {
  return _normalizer$1 && _normalizer$1.isPressed || _scrollers.cache++;
},
    _scrollCacheFunc = function _scrollCacheFunc(f) {
  return function (value) {
    // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
    if (value || value === 0) {
      _startup$1 && (_win$1.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.
      //value = Math.round(value);

      f(value);
      f.v = value;
      f.c = _scrollers.cache;
      _normalizer$1 && _normalizer$1.isPressed && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
    } else if (_scrollers.cache !== f.c || _bridge("ref")) {
      f.c = _scrollers.cache;
      f.v = f();
    }

    return f.v;
  };
},
    _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win$1.scrollTo(value, _vertical.sc()) : _win$1.pageXOffset || _doc$1[_scrollLeft] || _docEl$1[_scrollLeft] || _body$1[_scrollLeft] || 0;
  })
},
    _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win$1.scrollTo(_horizontal.sc(), value) : _win$1.pageYOffset || _doc$1[_scrollTop] || _docEl$1[_scrollTop] || _body$1[_scrollTop] || 0;
  })
},
    _getTarget = function _getTarget(t) {
  return gsap$1.utils.toArray(t)[0] || (typeof t === "string" && gsap$1.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;

  // we store the scroller functions in a alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  return _scrollers[i + offset] || (_scrollers[i + offset] = _getProxyProp(element, s) || (_isViewport$1(element) ? sc : _scrollCacheFunc(function (value) {
    return arguments.length ? element[s] = value : element[s];
  })));
},
    _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
  var v1 = value,
      v2 = value,
      t1 = _getTime$1(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
    var t = _getTime$1();

    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value;
    } else {
      // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
      v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }
  },
      reset = function reset() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  },
      getVelocity = function getVelocity(latestValue) {
    var tOld = t2,
        vOld = v2,
        t = _getTime$1();

    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
  };

  return {
    update: update,
    reset: reset,
    getVelocity: getVelocity
  };
},
    _getEvent = function _getEvent(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
},
    _getAbsoluteMax = function _getAbsoluteMax(a) {
  var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
},
    _setScrollTrigger = function _setScrollTrigger() {
  ScrollTrigger$1 = gsap$1.core.globals().ScrollTrigger;
  ScrollTrigger$1 && ScrollTrigger$1.core && _integrate();
},
    _initCore = function _initCore(core) {
  gsap$1 = core || _getGSAP$1();

  if (gsap$1 && typeof document !== "undefined" && document.body) {
    _win$1 = window;
    _doc$1 = document;
    _docEl$1 = _doc$1.documentElement;
    _body$1 = _doc$1.body;
    _root$1 = [_win$1, _doc$1, _docEl$1, _body$1];
    gsap$1.utils.clamp;
    _pointerType = "onpointerenter" in _body$1 ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

    _isTouch = Observer.isTouch = _win$1.matchMedia && _win$1.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win$1 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl$1 ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl$1) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function () {
      return _startup$1 = 0;
    }, 500);

    _setScrollTrigger();

    _coreInitted$1 = 1;
  }

  return _coreInitted$1;
};

_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }

  var _proto = Observer.prototype;

  _proto.init = function init(vars) {
    _coreInitted$1 || _initCore(gsap$1) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger$1 || _setScrollTrigger();
    var tolerance = vars.tolerance,
        dragMinimum = vars.dragMinimum,
        type = vars.type,
        target = vars.target,
        lineHeight = vars.lineHeight,
        debounce = vars.debounce,
        preventDefault = vars.preventDefault,
        onStop = vars.onStop,
        onStopDelay = vars.onStopDelay,
        ignore = vars.ignore,
        wheelSpeed = vars.wheelSpeed,
        event = vars.event,
        onDragStart = vars.onDragStart,
        onDragEnd = vars.onDragEnd,
        onDrag = vars.onDrag,
        onPress = vars.onPress,
        onRelease = vars.onRelease,
        onRight = vars.onRight,
        onLeft = vars.onLeft,
        onUp = vars.onUp,
        onDown = vars.onDown,
        onChangeX = vars.onChangeX,
        onChangeY = vars.onChangeY,
        onChange = vars.onChange,
        onToggleX = vars.onToggleX,
        onToggleY = vars.onToggleY,
        onHover = vars.onHover,
        onHoverEnd = vars.onHoverEnd,
        onMove = vars.onMove,
        ignoreCheck = vars.ignoreCheck,
        isNormalizer = vars.isNormalizer,
        onGestureStart = vars.onGestureStart,
        onGestureEnd = vars.onGestureEnd,
        onWheel = vars.onWheel,
        onEnable = vars.onEnable,
        onDisable = vars.onDisable,
        onClick = vars.onClick,
        scrollSpeed = vars.scrollSpeed,
        capture = vars.capture,
        allowClicks = vars.allowClicks,
        lockAxis = vars.lockAxis,
        onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl$1;
    this.vars = vars;
    ignore && (ignore = gsap$1.utils.toArray(ignore));
    tolerance = tolerance || 0;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win$1.getComputedStyle(_body$1).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
        onStopDelayedCall,
        dragged,
        moved,
        wheeled,
        locked,
        axis,
        self = this,
        prevDeltaX = 0,
        prevDeltaY = 0,
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollX = scrollFuncX(),
        scrollY = scrollFuncY(),
        limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
        // for devices that accommodate mouse events and touch events, we need to distinguish.
    isViewport = _isViewport$1(target),
        ownerDoc = target.ownerDocument || _doc$1,
        deltaX = [0, 0, 0],
        // wheel, scroll, pointer/touch
    deltaY = [0, 0, 0],
        onClickTime = 0,
        clickCapture = function clickCapture() {
      return onClickTime = _getTime$1();
    },
        _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
      return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    },
        onStopFunc = function onStopFunc() {
      self._vx.reset();

      self._vy.reset();

      onStopDelayedCall.pause();
      onStop && onStop(self);
    },
        update = function update() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;

      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }

      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }

      if (moved || dragged) {
        onMove && onMove(self);
        onLockAxis && locked && onLockAxis(self);

        if (dragged) {
          onDrag(self);
          dragged = false;
        }

        moved = locked = false;
      }

      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }

      id = 0;
    },
        onDelta = function onDelta(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;

      self._vx.update(x);

      self._vy.update(y);

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
      if (axis !== "y") {
        deltaX[2] += x;

        self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.

      }

      if (axis !== "x") {
        deltaY[2] += y;

        self._vy.update(y, true);
      }

      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        _onDrag = function _onDrag(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
      self.x = x;
      self.y = y;

      if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
        onDrag && (dragged = true);
        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
        isDragging || onDragStart && onDragStart(self);
      }
    },
        _onPress = self.onPress = function (e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;

      self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.


      self._vy.reset();

      _addListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, capture);

      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    },
        _onRelease = function _onRelease(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag);

      var wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
      eventData = _getEvent(e);

      if (!wasDragging) {
        self._vx.reset();

        self._vy.reset();

        if (preventDefault && allowClicks) {
          gsap$1.delayedCall(0.08, function () {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (_getTime$1() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win$1, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }

      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, wasDragging);
    },
        _onGestureStart = function _onGestureStart(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    },
        _onGestureEnd = function _onGestureEnd() {
      return (self.isGesturing = false) || onGestureEnd(self);
    },
        onScroll = function onScroll(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = scrollFuncX(),
          y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    },
        _onWheel = function _onWheel(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win$1.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    },
        _onMove = function _onMove(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    },
        _onHover = function _onHover(e) {
      self.event = e;
      onHover(self);
    },
        _onHoverEnd = function _onHoverEnd(e) {
      self.event = e;
      onHoverEnd(self);
    },
        _onClick = function _onClick(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };

    onStopDelayedCall = self._dc = gsap$1.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;

    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);

        type.indexOf("scroll") >= 0 && _addListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
        type.indexOf("wheel") >= 0 && _addListener$1(target, "wheel", _onWheel, preventDefault, capture);

        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener$1(target, _eventTypes[0], _onPress, preventDefault, capture);

          _addListener$1(ownerDoc, _eventTypes[2], _onRelease);

          _addListener$1(ownerDoc, _eventTypes[3], _onRelease);

          allowClicks && _addListener$1(target, "click", clickCapture, false, true);
          onClick && _addListener$1(target, "click", _onClick);
          onGestureStart && _addListener$1(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener$1(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener$1(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener$1(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener$1(target, _pointerType + "move", _onMove);
        }

        self.isEnabled = true;
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }

      return self;
    };

    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport$1(o.target);
        }).length || _removeListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll$1);

        if (self.isPressed) {
          self._vx.reset();

          self._vy.reset();

          _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, capture);
        }

        _removeListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

        _removeListener$1(target, "wheel", _onWheel, capture);

        _removeListener$1(target, _eventTypes[0], _onPress, capture);

        _removeListener$1(ownerDoc, _eventTypes[2], _onRelease);

        _removeListener$1(ownerDoc, _eventTypes[3], _onRelease);

        _removeListener$1(target, "click", clickCapture, true);

        _removeListener$1(target, "click", _onClick);

        _removeListener$1(ownerDoc, "gesturestart", _onGestureStart);

        _removeListener$1(ownerDoc, "gestureend", _onGestureEnd);

        _removeListener$1(target, _pointerType + "enter", _onHover);

        _removeListener$1(target, _pointerType + "leave", _onHoverEnd);

        _removeListener$1(target, _pointerType + "move", _onMove);

        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };

    self.kill = function () {
      self.disable();

      var i = _observers.indexOf(self);

      i >= 0 && _observers.splice(i, 1);
      _normalizer$1 === self && (_normalizer$1 = 0);
    };

    _observers.push(self);

    isNormalizer && _isViewport$1(target) && (_normalizer$1 = self);
    self.enable(event);
  };

  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);

  return Observer;
}();
Observer.version = "3.10.4";

Observer.create = function (vars) {
  return new Observer(vars);
};

Observer.register = _initCore;

Observer.getAll = function () {
  return _observers.slice();
};

Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};

_getGSAP$1() && gsap$1.registerPlugin(Observer);

/*!
 * ScrollTrigger 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/


var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _normalizer,
    _ignoreMobileResize,
    _baseScreenHeight,
    _baseScreenWidth,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _pointerDownHandler = function _pointerDownHandler() {
  return _pointerIsDown = 1;
},
    _pointerUpHandler = function _pointerUpHandler() {
  return _pointerIsDown = 0;
},
    _passThrough = function _passThrough(v) {
  return v;
},
    _round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _windowExists = function _windowExists() {
  return "undefined" !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists()   ;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _win.innerHeight;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
  var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _win["inner" + d2] : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref2) {
  var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
  return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - (_win["inner" + d2] || _docEl["client" + d2] || _body["client" + d2]) : element[s] - element["offset" + d2];
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _callIfFunc = function _callIfFunc(value) {
  return _isFunction(value) && value();
},
    _combineFunc = function _combineFunc(f1, f2) {
  return function () {
    var result1 = _callIfFunc(f1),
        result2 = _callIfFunc(f2);

    return function () {
      _callIfFunc(result1);

      _callIfFunc(result2);
    };
  };
},
    _endAnimation = function _endAnimation(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
},
    _callback = function _callback(self, func) {
  if (self.enabled) {
    var result = func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
},
    _abs = Math.abs,
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
  var position = _getComputedStyle(element).position;

  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
  var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
    return a - b;
  });
  return a ? function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var i;

    if (!direction) {
      return snap(value);
    }

    if (direction > 0) {
      value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  } : function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _wheelListener = function _wheelListener(func, el, scrollFunc) {
  return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || _getProxyProp(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _rafID,
    _sync = function _sync() {
  return _getTime() - _lastScrollTime > 34 && _updateAll();
},
    _onScroll = function _onScroll() {
  // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
  if (!_normalizer || !_normalizer.isPressed) {
    _scrollers.cache++;
    _rafID || (_rafID = requestAnimationFrame(_updateAll));
    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _setBaseDimensions = function _setBaseDimensions() {
  _baseScreenWidth = _win.innerWidth;
  _baseScreenHeight = _win.innerHeight;
},
    _onResize = function _onResize() {
  _scrollers.cache++;
  !_refreshing && !_ignoreResize && !_doc.fullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25) && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _media = [],
    _creatingMedia,
    // when ScrollTrigger.matchMedia() is called, we record the current media key here (like "(min-width: 800px)") so that we can assign it to everything that's created during that call. Then we can revert just those when necessary. In the ScrollTrigger's init() call, the _creatingMedia is recorded as a "media" property on the instance.
_lastMediaTick,
    _onMediaChange = function _onMediaChange(e) {
  var tick = gsap.ticker.frame,
      matches = [],
      i = 0,
      index;

  if (_lastMediaTick !== tick || _startup) {
    _revertAll();

    for (; i < _media.length; i += 4) {
      index = _win.matchMedia(_media[i]).matches;

      if (index !== _media[i + 3]) {
        // note: some browsers fire the matchMedia event multiple times, like when going full screen, so we shouldn't call the function multiple times. Check to see if it's already matched.
        _media[i + 3] = index;
        index ? matches.push(i) : _revertAll(1, _media[i]) || _isFunction(_media[i + 2]) && _media[i + 2](); // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
      }
    }

    _revertRecorded(); // in case killing/reverting any of the animations actually added inline styles back.


    for (i = 0; i < matches.length; i++) {
      index = matches[i];
      _creatingMedia = _media[index];
      _media[index + 2] = _media[index + 1](e);
    }

    _creatingMedia = 0;
    _coreInitted && _refreshAll(0, 1);
    _lastMediaTick = tick;

    _dispatch("matchMedia");
  }
},
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (!media || trigger.media === media) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert();
      }
    }
  }

  media && _revertRecorded(media);
  media || _dispatch("revert");
},
    _clearScrollMemory = function _clearScrollMemory() {
  return _scrollers.cache++ && _scrollers.forEach(function (obj) {
    return typeof obj === "function" && (obj.rec = 0);
  });
},
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
_refreshingAll,
    _refreshID = 0,
    _refreshAll = function _refreshAll(force, skipRevert) {
  if (_lastScrollTime && !force) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  _refreshingAll = true;

  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  _triggers.slice(0).forEach(function (t) {
    return t.refresh();
  }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.


  _triggers.forEach(function (t) {
    return t.vars.end === "max" && t.setPositions(t.start, _maxScroll(t.scroller, t._dir));
  }); // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max".


  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _clearScrollMemory();

  _resizeDelay.pause();

  _refreshID++;
  _refreshingAll = false;

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _primary,
    _updateAll = function _updateAll() {
  if (!_refreshingAll) {
    _primary && _primary.update(0); // ScrollSmoother users refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

    ScrollTrigger.isUpdating = true;

    var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();

    _direction = _lastScroll > scroll ? -1 : 1;
    _lastScroll = scroll;

    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;

        _dispatch("scrollEnd");
      }

      _time2 = _time1;
      _time1 = time;
    }

    if (_direction < 0) {
      _i = l;

      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }

      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }

    ScrollTrigger.isUpdating = false;
  }

  _rafID = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  var cache = pin._gsap;

  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin.parentNode === spacer) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (pin.parentNode !== spacer) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = spacerStyle.flexBasis = "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    pin.parentNode.insertBefore(spacer, pin);
    spacer.appendChild(pin);
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
  containerAnimation && containerAnimation.seek(0);

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = value.split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
    element = _getTarget(trigger) || _body;
    bounds = _getBounds(element) || {};

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else if (markerScroller) {
    _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    p1 = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }

  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
},
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  lastScroll1,
      lastScroll2,
      getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    initialValue = initialValue || getScroll();
    change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    lastScroll1 = Math.round(initialValue);
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;

    modifiers[prop] = function (value) {
      value = _round(getScroll()); // round because in some [very uncommon] Windows environments, it can get reported with decimals even though it was set without.

      if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 2 && Math.abs(value - lastScroll2) > 2) {
        // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
        tween.kill();
        getTween.tween = 0;
      } else {
        value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
      }

      lastScroll2 = lastScroll1;
      return lastScroll1 = _round(value);
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;

  getScroll.wheelHandler = function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };

  _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.


  return getTween;
};

var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        pinSpacer = _vars.pinSpacer,
        containerAnimation = _vars.containerAnimation,
        fastScrollEnd = _vars.fastScrollEnd,
        preventOverlaps = _vars.preventOverlaps,
        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical,
        isToggle = !scrub && scrub !== 0,
        scroller = _getTarget(vars.scroller || _win),
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        lastSnap = 0,
        lastRefresh = 0,
        scrollFunc = _getScrollFunc(scroller, direction),
        tweenTo,
        pinCache,
        snapFunc,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevProgress,
        prevScroll,
        prevAnimProgress,
        caMarkerSetter,
        customRevertReturn;

    self.media = _creatingMedia;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;

    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }

    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    self.scrubDuration = function (value) {
      scrubSmooth = _isNumber(value) && value;

      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0.001",
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };

    if (animation) {
      animation.vars.lazy = false;
      animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    _triggers.push(self);

    if (snap) {
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }

      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
            refreshedRecently = _getTime() - lastRefresh < 500,
            tween = tweenTo.tween;

        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
              totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
              velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
              naturalEnd = progress + (snap.inertia === false ? 0 : change1),
              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
              endScroll = Math.round(start + endValue * change),
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete;

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            if (snap.inertia === false) {
              change1 = endValue - progress;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = _getTarget(trigger || pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : _getTarget(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default.

      self.pin = pin;
      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = _getTarget(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }

        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];

      var content = _getTarget(_getProxyProp(scroller, "content") || scroller);

      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
          oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(oldParams || []);
      });
    }

    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };

    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };

    self.revert = function (revert) {
      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== self.isReverted) {
        if (r) {
          self.scroll.rec || !_refreshing || !_refreshingAll || (self.scroll.rec = scrollFunc());
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });
        r && (_refreshing = 1);
        self.update(r); // make sure the pin is back in its original position so that all the measurements are correct.

        _refreshing = prevRefreshing;
        pin && (r ? _swapPinOut(pin, spacer, pinOriginalState) : (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState));
        self.isReverted = r;
      }
    };

    self.refresh = function (soft, force) {
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = 1;
      lastRefresh = _getTime();

      if (tweenTo.tween) {
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }

      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.time(-0.01, true).invalidate();
      self.isReverted || self.revert();

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
          offset = 0,
          otherPinOffset = 0,
          parsedEnd = vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted,
          revertedPins;

      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;

        if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert();
        }

        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }

      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : start + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -0.001;
      change = end - start || (start -= 0.01) && 0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush < start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - curTrigger.start;

          if ((curPin === trigger || curPin === pinnedContainer) && !_isNumber(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }

          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        !max && end > 1 && ((isViewport ? _body : scroller).style["overflow-" + direction.a] = "scroll"); // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

          _setState(spacerState);

          useFixedPosition && scrollFunc(prevScroll);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);

          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          change !== pinChange && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate();

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = scrollFunc(); // reset velocity

      if (!containerAnimation) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }

      self.revert(false);

      if (snapDelayedCall) {
        lastSnap = -1;
        self.isActive && scrollFunc(start + change * prevProgress); // just so snapping gets re-enabled, clear out any recorded last value

        snapDelayedCall.restart(true);
      }

      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (prevProgress !== self.progress || containerAnimation) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && animation.totalProgress(prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = prevProgress;
        self.update(0, 0, 1);
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange)); //			scrubTween && scrubTween.invalidate();

      onRefresh && onRefresh(self);
    };

    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);

      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };

    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };

    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
          a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

      return (_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };

    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }

      var scroll = self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled,
          isAtMax,
          isTakingAction;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }

        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            (containerAnimation || _primary && _primary !== self) && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!_refreshing);
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, _body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || isAtMax ? pinActiveState : pinState);

            pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }

          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);

            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }

      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };

    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        _addListener(isViewport ? _doc : scroller, "scroll", _onScroll);

        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }

        refresh !== false && self.refresh();
      }
    };

    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };

    self.setPositions = function (newStart, newEnd) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (pin) {
        pinStart += newStart - start;
        pinChange += newEnd - newStart - change;
      }

      self.start = start = newStart;
      self.end = end = newEnd;
      change = newEnd - newStart;
      self.update();
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert();
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;

      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });

      i || (self.scroll.rec = 0);

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.render(-1);
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }

      vars.onKill && vars.onKill(self);
    };

    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);
    !animation || !animation.add || change ? self.refresh() : gsap.delayedCall(0.01, function () {
      return start || end || self.refresh();
    }) && (change = 0.01) && (start = end = 0); // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();
      _coreInitted = _enabled;
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }

    return _defaults;
  };

  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;

    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });

    _removeListener(_win, "wheel", _onScroll);

    _removeListener(_doc, "scroll", _onScroll);

    clearInterval(_syncInterval);

    _removeListener(_doc, "touchcancel", _passThrough);

    _removeListener(_body, "touchstart", _passThrough);

    _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

    _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

    _resizeDelay.kill();

    _iterateAutoRefresh(_removeListener);

    for (var i = 0; i < _scrollers.length; i += 3) {
      _wheelListener(_removeListener, _scrollers[i], _scrollers[i + 1]);

      _wheelListener(_removeListener, _scrollers[i], _scrollers[i + 2]);
    }
  };

  ScrollTrigger.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;

    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp = gsap.utils.clamp;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
      gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (_body) {
        _enabled = 1;
        Observer.register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = Observer.isTouch;

        _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.


        _root = [_win, _doc, _docEl, _body];
        ScrollTrigger.matchMedia({
          // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
          "(orientation: portrait)": function orientationPortrait() {
            _setBaseDimensions();

            return _setBaseDimensions;
          }
        });

        _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


        var bodyStyle = _body.style,
            border = bodyStyle.borderTopStyle,
            bounds,
            i;
        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(_body);
        _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.

        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function () {
          return _startup = 0;
        });

        _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


        _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


        _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

        _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

        _transformProp = gsap.utils.checkPrefix("transform");

        _stateProps.push(_transformProp);

        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function () {
          var w = _win.innerWidth,
              h = _win.innerHeight;

          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];

        _iterateAutoRefresh(_addListener);

        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });

        for (i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(_removeListener, _scrollers[i], _scrollers[i + 1]);

          _wheelListener(_removeListener, _scrollers[i], _scrollers[i + 2]);
        }
      }
    }
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _getTarget(target),
        i = _scrollers.indexOf(t),
        isViewport = _isViewport(t);

    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }

    if (vars) {
      isViewport ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _proxies.unshift(t, vars);
    }
  };

  ScrollTrigger.matchMedia = function matchMedia(vars) {
    // _media is populated in the following order: mediaQueryString, onMatch, onUnmatch, isMatched. So if there are two media queries, the Array would have a length of 8
    var mq, p, i, func, result;

    for (p in vars) {
      i = _media.indexOf(p);
      func = vars[p];
      _creatingMedia = p;

      if (p === "all") {
        func();
      } else {
        mq = _win.matchMedia(p);

        if (mq) {
          mq.matches && (result = func());

          if (~i) {
            _media[i + 1] = _combineFunc(_media[i + 1], func);
            _media[i + 2] = _combineFunc(_media[i + 2], result);
          } else {
            i = _media.length;

            _media.push(p, func, result);

            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }

          _media[i + 3] = mq.matches;
        }
      }

      _creatingMedia = 0;
    }

    return _media;
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    query || (_media.length = 0);
    query = _media.indexOf(query);
    query >= 0 && _media.splice(query, 4);
  };

  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(),
        offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };

  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(),
        size = bounds[horizontal ? _width : _height],
        offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.10.4";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 5);

      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _creatingMedia);
    }
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};

ScrollTrigger.update = _updateAll;
ScrollTrigger.clearScrollMemory = _clearScrollMemory;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.


ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.snapDirectional = _snapDirectional;

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).


var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
},
    _allowNativePanning = function _allowNativePanning(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction : "none"; // note: we tried adding pinch-zoom too, but Firefox doesn't support it properly.
  }

  target === _docEl && _allowNativePanning(_body, direction);
},
    _overflow = {
  auto: 1,
  scroll: 1
},
    _nestedScroll = function _nestedScroll(_ref5) {
  var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;

  var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || gsap.core.getCache(node),
      time = _getTime(),
      cs;

  if (!cache._isScrollT || time - cache._isScrollT > 2000) {
    // cache for 2 seconds to improve performance.
    while (node && node.scrollHeight <= node.clientHeight) {
      node = node.parentNode;
    }

    cache._isScroll = node && !_isViewport(node) && node !== target && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }

  (cache._isScroll || axis === "x") && (event._gsapAllow = true);
},
    // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
  return Observer.create({
    target: target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type: type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener(_doc, Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener(_doc, Observer.eventTypes[0], _captureInputs, true);
    }
  });
},
    _inputExp = /(input|label|select|textarea)/i,
    _inputIsFocused,
    _captureInputs = function _captureInputs(e) {
  var isInput = _inputExp.test(e.target.tagName);

  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
},
    _getScrollNormalizer = function _getScrollNormalizer(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";

  var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      self,
      maxY,
      target = _getTarget(vars.target) || _docEl,
      scrollFuncY = _getScrollFunc(target, _vertical),
      scrollFuncX = _getScrollFunc(target, _horizontal),
      scale = 1,
      wheelRefresh = 0,
      resolveMomentumDuration = _isFunction(momentum) ? function () {
    return momentum(self);
  } : function () {
    return momentum || 2.8;
  },
      skipTouchMove,
      lastRefreshID,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
    return skipTouchMove = false;
  },
      scrollClampX = _passThrough,
      scrollClampY = _passThrough,
      updateClamps = function updateClamps() {
    maxY = _maxScroll(target, _vertical);
    scrollClampY = _clamp(0, maxY);
    normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _horizontal)));
    lastRefreshID = _refreshID;
  },
      fixIOSBug = ScrollTrigger.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
      ignoreDrag = function ignoreDrag() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove); // we MUST wait for a requestAnimationFrame, otherwise iOS will misreport the value.

      return true;
    }

    skipTouchMove = true;
  },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
    // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
    updateClamps();
    tween.isActive() && tween.vars.scrollY > maxY && tween.resetTo("scrollY", _maxScroll(target, _vertical));
  };

  vars.ignoreCheck = function (e) {
    return fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1 || self.isGesturing || e.touches && e.touches.length > 1;
  };

  vars.onPress = function () {
    var prevScale = scale;
    scale = _win.visualViewport && _win.visualViewport.scale || 1;
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1 ? true : normalizeScrollX ? false : "x");
    skipTouchMove = false;
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };

  vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)
      var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;

      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227 / scale; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }

      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227 / scale; // the constant .227 is from power4(0.05)

      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);
    }
  };

  vars.onWheel = function () {
    tween._ts && tween.pause();

    if (_getTime() - wheelRefresh > 1000) {
      // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };

  vars.onChange = function (self, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) / scale : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

    dy && scrollFuncY(scrollClampY(yArray[2] === dy ? startScrollY + (self.startY - self.y) / scale : scrollFuncY() + dy - yArray[1]));

    _updateAll();
  };

  vars.onEnable = function () {
    _allowNativePanning(target, normalizeScrollX ? false : "x");

    _addListener(_win, "resize", onResize);

    inputObserver.enable();
  };

  vars.onDisable = function () {
    _allowNativePanning(target, true);

    _removeListener(_win, "resize", onResize);

    inputObserver.kill();
  };

  self = new Observer(vars);
  onStopDelayedCall = self._dc;
  tween = gsap.to(self, {
    ease: "power4",
    paused: true,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    onComplete: onStopDelayedCall.vars.onComplete
  });
  return self;
};

ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};

ScrollTrigger.observe = function (vars) {
  return new Observer(vars);
};

ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }

  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }

  if (vars === false) {
    return _normalizer && _normalizer.kill();
  }

  var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};

ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _getVelocityProp,
  _inputObserver: _inputObserver,
  _scrollers: _scrollers,
  _proxies: _proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.9.3";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    if (plugin2.dependsOn && !plugin2.dependsOn.every((name) => resolvedPlugins.includes(name))) {
      unresolvedPlugins.push([new Set(plugin2.dependsOn), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
gsap$2.registerPlugin(ScrollTrigger);
class SmoothScroll {
  constructor() {
    return;
  }
  // ________________ SET LENIS
  // ________________ SET LENIS
  setLenis(time) {
    if ((void 0).innerWidth < 1025)
      return;
    this.time = time;
    this.lenis = new Lenis({
      duration: 1.75,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.85,
      smoothTouch: false,
      touchMultiplier: 1,
      normalizeawards: true
      // infinite: true,
    });
    this.onRaf();
  }
  // ________________ SET RAF
  // ________________ SET RAF
  onRaf() {
    let that = this;
    this.time.on("tick", () => {
      that.lenis.raf(that.time.elapsed);
    });
  }
}
const smooth_scroll = new SmoothScroll();
class Debug {
  constructor() {
    this.active = false;
    this.ui = false;
    if (!this.active)
      return;
    const init = async () => {
      const dat = await import('file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/dat.gui/build/dat.gui.js');
      await import('file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/three-dat.gui/dist/index.js');
      dat.GUI.prototype._addFolder = function(name) {
        if (this.__folders[name]) {
          return this.__folders[name];
        } else {
          return this.addFolder(name);
        }
      };
      this.ui = new dat.GUI({ width: 350 });
    };
    init();
  }
}
let EventEmitter$1 = class EventEmitter {
  constructor() {
    this.callbacks = {};
    this.callbacks.base = {};
  }
  on(_names, callback) {
    if (typeof _names === "undefined" || _names === "") {
      console.warn("wrong names");
      return false;
    }
    if (typeof callback === "undefined") {
      console.warn("wrong callback");
      return false;
    }
    const names = this.resolveNames(_names);
    names.forEach((_name) => {
      const name = this.resolveName(_name);
      if (!(this.callbacks[name.namespace] instanceof Object))
        this.callbacks[name.namespace] = {};
      if (!(this.callbacks[name.namespace][name.value] instanceof Array))
        this.callbacks[name.namespace][name.value] = [];
      this.callbacks[name.namespace][name.value].push(callback);
    });
    return this;
  }
  off(_names) {
    if (typeof _names === "undefined" || _names === "") {
      console.warn("wrong name");
      return false;
    }
    const names = this.resolveNames(_names);
    names.forEach((_name) => {
      const name = this.resolveName(_name);
      if (name.namespace !== "base" && name.value === "") {
        delete this.callbacks[name.namespace];
      } else {
        if (name.namespace === "base") {
          for (const namespace in this.callbacks) {
            if (this.callbacks[namespace] instanceof Object && this.callbacks[namespace][name.value] instanceof Array) {
              delete this.callbacks[namespace][name.value];
              if (Object.keys(this.callbacks[namespace]).length === 0)
                delete this.callbacks[namespace];
            }
          }
        } else if (this.callbacks[name.namespace] instanceof Object && this.callbacks[name.namespace][name.value] instanceof Array) {
          delete this.callbacks[name.namespace][name.value];
          if (Object.keys(this.callbacks[name.namespace]).length === 0)
            delete this.callbacks[name.namespace];
        }
      }
    });
    return this;
  }
  trigger(_name, _args) {
    if (typeof _name === "undefined" || _name === "") {
      console.warn("wrong name");
      return false;
    }
    let finalResult = null;
    const args = !(_args instanceof Array) ? [] : _args;
    let name = this.resolveNames(_name);
    name = this.resolveName(name[0]);
    if (name.namespace === "base") {
      for (const namespace in this.callbacks) {
        if (this.callbacks[namespace] instanceof Object && this.callbacks[namespace][name.value] instanceof Array) {
          this.callbacks[namespace][name.value].forEach(function(callback) {
            callback.apply(this, args);
          });
        }
      }
    } else if (this.callbacks[name.namespace] instanceof Object) {
      if (name.value === "") {
        console.warn("wrong name");
        return this;
      }
      this.callbacks[name.namespace][name.value].forEach(function(callback) {
        callback.apply(this, args);
      });
    }
    return finalResult;
  }
  resolveNames(_names) {
    let names = _names;
    names = names.replace(/[^a-zA-Z0-9 ,/.]/g, "");
    names = names.replace(/[,/]+/g, " ");
    names = names.split(" ");
    return names;
  }
  resolveName(name) {
    const newName = {};
    const parts = name.split(".");
    newName.original = name;
    newName.value = parts[0];
    newName.namespace = "base";
    if (parts.length > 1 && parts[1] !== "") {
      newName.namespace = parts[1];
    }
    return newName;
  }
};
class Sizes extends EventEmitter$1 {
  constructor() {
    super();
    this.width = (void 0).innerWidth;
    this.height = (void 0).innerHeight;
    this.pixelRatio = Math.min((void 0).devicePixelRatio, 2);
    (void 0).addEventListener("resize", () => {
      this.width = (void 0).innerWidth;
      this.height = (void 0).innerHeight;
      this.pixelRatio = Math.min((void 0).devicePixelRatio, 2);
      this.trigger("resize");
      this.fixMobile();
    });
    this.fixMobile();
  }
  //? - =========================  FIX MOBILE  ========================= -//
  //? - =========================  FIX MOBILE  ========================= -//
  fixMobile() {
    let vh = (void 0).innerHeight * 0.01;
    (void 0).documentElement.style.setProperty("--vh", `${vh}px`);
    let clientWidth = Math.max((void 0).documentElement.clientWidth, 320);
    let vw = clientWidth * 0.01;
    (void 0).documentElement.style.setProperty("--vw", `${vw}px`);
  }
}
let Time$1 = class Time extends EventEmitter$1 {
  constructor() {
    super();
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;
    (void 0).requestAnimationFrame(() => {
      this.tick();
    });
  }
  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;
    this.trigger("tick");
    (void 0).requestAnimationFrame(() => {
      this.tick();
    });
  }
};
class Resources extends EventEmitter$1 {
  constructor(sources2) {
    super();
    this.sources = sources2;
    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    this.models = [];
    this.matcaps = [];
    this.setLoaders();
    this.startLoading();
  }
  setLoaders() {
    this.loaders = {};
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.5/");
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    this.loaders.textureLoader = new THREE.TextureLoader();
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
  }
  startLoading() {
    for (const source of this.sources) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(source.path, (file) => {
          let thisModel = {
            name: source.name,
            obj: file
          };
          this.models.push(thisModel);
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "texture") {
        for (const path of source.path) {
          this.loaders.textureLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file);
          });
        }
      } else if (source.type === "cubeTexture") {
        this.loaders.cubeTextureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }
  sourceLoaded(source, file) {
    this.items[source.name] = file;
    this.loaded++;
    if (this.loaded === this.toLoad) {
      this.trigger("ready");
    }
  }
}
class Camera {
  constructor(webglapp) {
    this.webgl_app = webglapp;
    this.sizes = this.webgl_app.sizes;
    this.scene = this.webgl_app.scene;
    this.canvas = this.webgl_app.canvas;
    this.debug = this.webgl_app.debug;
    this.setInstance();
    this.isorbit = true;
    this.setOrbitControls();
    if (this.debug.active)
      ;
  }
  //? - =========================  SET INSTANCE  ========================= -//
  //? - =========================  SET INSTANCE  ========================= -//
  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );
    this.instance.position.z = 6;
    this.scene.add(this.instance);
  }
  //? - =========================  orbitControl  ========================= -//
  //? - =========================  orbitControl  ========================= -//
  setOrbitControls() {
    if (this.isorbit) {
      this.controls = new OrbitControls(this.instance, this.canvas);
      this.controls.enableDamping = true;
      this.is_rotate = {
        Rotate: false
      };
      this.controls.autoRotate = this.is_rotate.Rotate;
      this.controls.autoRotateSpeed = 5;
    }
  }
  //? - =========================  resize on Camera  ========================= -//
  //? - =========================  resize on Camera  ========================= -//
  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }
  update() {
    if (this.isorbit) {
      this.controls.update();
    }
  }
  //? - =========================  set DEBUG  ========================= -//
  //? - =========================  set DEBUG  ========================= -//
  setDebug() {
    let that = this;
    const options = { value: 0 };
    let debugModel = that.debug.ui.addFolder(`Camera`);
    debugModel.add(options, "value").min(-4).max(4).step(0.01).onChange(() => {
      this.instance.position.x = options.value;
    });
    debugModel.add(that.is_rotate, "Rotate").listen().onChange(() => {
      console.log(that.is_rotate.Rotate);
      if (that.is_rotate.Rotate == false) {
        that.is_rotate.Rotate = false;
        that.controls.autoRotateSpeed = 0;
      } else {
        that.is_rotate.Rotate = true;
        that.controls.autoRotateSpeed = 10;
      }
    });
  }
}
class Renderer {
  constructor(webglapp) {
    this.webgl_app = webglapp;
    this.sizes = this.webgl_app.sizes;
    this.scene = this.webgl_app.scene;
    this.canvas = this.webgl_app.canvas;
    this.camera = this.webgl_app.camera;
    this.setInstance();
    this.onEffectComposer();
  }
  //? - =========================  setInstance  ========================= -//
  //? - =========================  setInstance  ========================= -//
  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alias: true,
      alpha: true
    });
    this.instance.setClearColor(255, 0);
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
    this.instance.outputColorSpace = THREE.SRGBColorSpace;
    this.instance.toneMapping = THREE.CineonToneMapping;
    this.instance.toneMappingExposure = 1.75;
    this.instance.shadowMap.enabled = true;
    this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
  }
  //? - =========================  PostProcessing  ========================= -//
  //? - =========================  PostProcessing  ========================= -//
  onEffectComposer() {
    this.renderTarget = new THREE.WebGLRenderTarget(
      800,
      600,
      {
        samples: 2
      }
    );
    this.effectComposer = new EffectComposer(this.instance, this.renderTarget);
    this.effectComposer.setSize(this.sizes.width, this.sizes.height);
    this.effectComposer.setPixelRatio(this.sizes.pixelRatio);
    this.renderPass = new RenderPass(this.scene, this.camera.instance);
    this.effectComposer.addPass(this.renderPass);
    this.dotScreenPass = new DotScreenPass();
    this.dotScreenPass.enabled = true;
    this.effectComposer.addPass(this.dotScreenPass);
  }
  //? - =========================  resize  ========================= -//
  //? - =========================  resize  ========================= -//
  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
  //? - =========================  update  ========================= -//
  //? - =========================  update  ========================= -//
  update() {
    this.instance.render(this.scene, this.camera.instance);
  }
}
class Environment {
  constructor(webglapp) {
    this.webgl_app = webglapp;
    this.scene = this.webgl_app.scene;
    this.camera = this.webgl_app.camera;
    this.resources = this.webgl_app.resources;
    this.debug = this.webgl_app.debug;
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Environment");
    }
    this.setSunlight();
    this.setDirectlight();
    this.setEnvironmentMap();
  }
  //? - =========================  setSunlight  ========================= -//
  //? - =========================  setSunlight  ========================= -//
  setSunlight() {
    this.ambientLight = new THREE.AmbientLight("#ffffff", 0.1);
    this.scene.add(this.ambientLight);
    this.DirLighWhite = new THREE.DirectionalLight("#ffffff", 0.2);
    this.DirLighWhite.castShadow = true;
    this.DirLighWhite.shadow.camera.far = 15;
    this.DirLighWhite.shadow.mapSize.set(1024, 1024);
    this.DirLighWhite.shadow.normalBias = 0.05;
    this.DirLighWhite.position.set(1.1, 1.9, -0.9);
    this.DirLighWhite.castShadow = true;
    this.scene.add(this.DirLighWhite);
    if (this.debug.active) {
      this.debugFolder.add(this.ambientLight, "intensity").name("AmbientLight").min(0).max(30).step(1e-3);
      this.debugFolder.add(this.DirLighWhite, "intensity").name("sunLightIntensity").min(0).max(30).step(1e-3);
      this.debugFolder.add(this.DirLighWhite.position, "x").name("sunLightX").min(-5).max(5).step(1e-3);
      this.debugFolder.add(this.DirLighWhite.position, "y").name("sunLightY").min(-5).max(5).step(1e-3);
      this.debugFolder.add(this.DirLighWhite.position, "z").name("sunLightZ").min(-5).max(5).step(1e-3);
    }
  }
  //? - =========================  setSunlight  ========================= -//
  //? - =========================  setSunlight  ========================= -//
  setDirectlight() {
    this.DirLightNoise = new THREE.DirectionalLight(16777215, 0.5);
    this.DirLightNoise.castShadow = true;
    this.DirLightNoise.shadow.mapSize.set(1920, 1080);
    this.DirLightNoise.shadow.normalBias = 0.45;
    this.DirLightNoise.position.set(0.33, 1.11, 1.2);
    this.scene.add(this.DirLightNoise);
    if (this.debug.active) {
      this.debugFolder.add(this.DirLightNoise, "intensity").name("DirecttIntensity").min(0).max(30).step(1e-3);
      this.debugFolder.add(this.DirLightNoise.position, "x").name(" Pos DirecttX").min(-5).max(5).step(1e-3);
      this.debugFolder.add(this.DirLightNoise.position, "y").name(" Pos DirectY").min(-5).max(5).step(1e-3);
      this.debugFolder.add(this.DirLightNoise.position, "z").name(" Pos DirectZ").min(-5).max(5).step(1e-3);
    }
  }
  //? - =========================  setEnvironmentMap  ========================= -//
  //? - =========================  setEnvironmentMap  ========================= -//
  setEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 6;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.scene.environment = this.environmentMap.texture;
    this.environmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };
    this.environmentMap.updateMaterials();
    if (this.debug.active) {
      this.debugFolder.add(this.environmentMap, "intensity").name("envMapIntensity").min(3).max(6).step(1e-4).onChange(this.environmentMap.updateMaterials);
    }
  }
}
gsap$2.registerPlugin(ScrollTrigger);
class AnimaWebGL {
  constructor() {
    return;
  }
  setters() {
  }
  //? - =========================  MODEL HERO  ========================= -//
  //? - =========================  MODEL HERO  ========================= -//
  animaModelHero(model) {
    const $body = (void 0).querySelector("body");
    let that = this;
    this.$hero__top = (void 0).querySelector(".hero");
    this.$hero_release = (void 0).querySelector(".hero__subtitles");
    let scaleModel = model.scale.x;
    this.tl_move_modelHero = gsap$2.timeline({ paused: true }).fromTo(model.position, { y: model.position.y }, { duration: 1, y: 3.5, ease: "none" }).fromTo(model.scale, { x: scaleModel, y: scaleModel, z: scaleModel }, { duration: 1, x: 0.1, y: 0.1, z: 0.1, ease: "none" }, 0).to(model.rotation, { duration: 1, x: `-=0.7`, y: `+=6`, ease: "none" }, 0);
    ScrollTrigger.create({
      trigger: this.$hero__top,
      start: "top top",
      endTrigger: this.$hero_release,
      end: "top top",
      onEnter: () => {
      },
      onEnterBack: () => {
      },
      onLeave: () => {
      },
      onUpdate: (self2) => {
        if (!$body.classList.contains("index"))
          return;
        that.tl_move_modelHero.progress(self2.progress.toFixed(3));
      }
    });
    this.onMouseMove(model);
  }
  //? - =========================  MODEL code  ========================= -//
  //? - =========================  MODEL code  ========================= -//
  animaModelCode(modelCode) {
    const $body = (void 0).querySelector("body");
    let that = this;
    this.$code__top = (void 0).querySelector(".code-more__time__h1");
    this.$code_release = (void 0).querySelector(".code-more__descr__p");
    let scaleModel = modelCode.scale.x;
    this.tl_move_modelCode = gsap$2.timeline({ paused: true }).fromTo(modelCode.position, { y: -3 }, { duration: 1, y: 3, ease: "none" }).fromTo(modelCode.scale, { x: scaleModel, y: scaleModel, z: scaleModel }, { duration: 1, x: `+=0.1`, y: `+=0.1`, z: `+=0.1`, ease: "none" }, 0).to(modelCode.rotation, { duration: 1, x: `-=0.1`, y: `+=2`, ease: "none" }, 0);
    ScrollTrigger.create({
      trigger: this.$code__top,
      start: "top 100%",
      endTrigger: this.$code_release,
      end: "bottom 75",
      onEnter: () => {
      },
      onEnterBack: () => {
      },
      onLeave: () => {
      },
      onUpdate: (self2) => {
        if (!$body.classList.contains("index"))
          return;
        that.tl_move_modelCode.progress(self2.progress.toFixed(3));
      }
    });
  }
  //?  -------------------------- MOUSE MOVE -------------------------- //
  //?  -------------------------- MOUSE MOVE -------------------------- //
  onMouseMove(model) {
    const $body = (void 0).querySelector("body");
    this.mouse = { x: 0, y: 0, moved: false };
    const inital_rot = { x: model.rotation.x, y: model.rotation.y };
    let that = this;
    if ((void 0).innerWidth > 1024) {
      this.$hero__top.addEventListener("mousemove", (e) => {
        if (!$body.classList.contains("index"))
          return;
        that.mouse.moved = true;
        let x = e.clientX;
        let y = e.clientY;
        gsap$2.to(model.rotation, {
          duration: 3,
          y: inital_rot.y - gsap$2.utils.mapRange(0, (void 0).innerWidth, -2, 2, x),
          x: inital_rot.x - gsap$2.utils.mapRange(0, (void 0).innerHeight, -0.5, 0.5, y),
          ease: "expo.out",
          overwrite: true
        });
      }, null);
    } else {
      this.$hero__top.addEventListener("touchmove", (e) => {
        if (!$body.classList.contains("index"))
          return;
        that.mouse.moved = true;
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        gsap$2.to(model.rotation, {
          duration: 6,
          y: inital_rot.y - gsap$2.utils.mapRange(0, (void 0).innerWidth, -2, 2, x),
          x: inital_rot.x - gsap$2.utils.mapRange(0, (void 0).innerHeight, -0.5, 0.5, y),
          ease: "expo.out",
          overwrite: true
        });
      }, { passive: true });
    }
  }
  //? - =========================  introAnimation  ========================= -//
  //? - =========================  introAnimation  ========================= -//
  introAnimation() {
  }
  //? - =========================  enter  ========================= -//
  //? - =========================  enter  ========================= -//
  onEnter() {
  }
  enterCompleted() {
  }
  bindEvents() {
  }
}
const anima_webgl = new AnimaWebGL();
class DebugModels {
  constructor(debug, models, children) {
    this.debug = debug;
    this.models = models;
    this.children = children;
    this.setDebug();
    return;
  }
  //? - =========================  set DEBUG  ========================= -//
  //? - =========================  set DEBUG  ========================= -//
  setDebug() {
    let that = this;
    this.children.forEach((el, index) => {
      let debugModel = that.debug.ui.addFolder(`${el.name}`);
      debugModel.add(el.position, "x").name(`Position X`).min(-5).max(5).step(0.01);
      debugModel.add(el.position, "y").name(`Position Y`).min(-5).max(5).step(0.01);
      debugModel.add(el.position, "z").name(`Position Z`).min(-5).max(5).step(0.01);
    });
    this.models.forEach((el, index) => {
      const options = { value: el.obj.scene.scale.y };
      const toggleObj = {
        hide: () => {
          that.scene.remove(el.obj.scene);
        },
        show: () => {
          that.scene.add(el.obj.scene);
        }
      };
      let debugModel = that.debug.ui.addFolder(`${el.name}`);
      debugModel.add(options, "value").min(-4).max(4).step(0.01).onChange(() => {
        el.obj.scene.scale.y = options.value;
        el.obj.scene.scale.x = options.value;
        el.obj.scene.scale.z = options.value;
      });
      debugModel.add(el.obj.scene.rotation, "x").name(`Rotation X`).min(-Math.PI).max(Math.PI).step(0.01);
      debugModel.add(el.obj.scene.rotation, "y").name(`Rotation Y`).min(-Math.PI).max(Math.PI).step(0.01);
      debugModel.add(el.obj.scene.rotation, "z").name(`Rotation Z`).min(-Math.PI).max(Math.PI).step(0.01);
      debugModel.add(el.obj.scene.position, "x").name(`Position X`).min(-5).max(5).step(0.01);
      debugModel.add(el.obj.scene.position, "y").name(`Position Y`).min(-5).max(5).step(0.01);
      debugModel.add(el.obj.scene.position, "z").name(`Position Z`).min(-5).max(5).step(0.01);
      debugModel.add(el.obj.scene.scale, "x").name(`Scale X`).min(0).max(10).step(0.01);
      debugModel.add(el.obj.scene.scale, "y").name(`Scale Y`).min(0).max(10).step(0.01);
      debugModel.add(el.obj.scene.scale, "z").name(`Scale Z`).min(0).max(10).step(0.01);
      debugModel.add(toggleObj, "hide");
      debugModel.add(toggleObj, "show");
    });
  }
}
class Models {
  constructor(webglapp) {
    this.webgl_app = webglapp;
    this.scene = this.webgl_app.scene;
    this.resources = this.webgl_app.resources;
    this.debug = this.webgl_app.debug;
    this.models = this.webgl_app.resources.models;
    this.children = [];
    this.objs = [];
    this.setModels();
    if (this.debug.active) {
      new DebugModels(this.debug, this.models, this.children);
    }
  }
  //? - =========================  MODELS  ========================= -//
  //? - =========================  MODELS  ========================= -//
  setModels() {
    this.models.forEach((model, index) => {
      const obj = model.obj.scene;
      obj.children.forEach((model2, i) => {
        this.children.push(model2);
        if (model2.name.indexOf("BOX") > -1)
          ;
      });
      this.cube_model = obj;
    });
    this.setModelHero();
    this.setModelCodeMore();
  }
  //? - =========================  MODEL HERO  ========================= -//
  //? - =========================  MODEL HERO  ========================= -//
  setModelHero() {
    const cube_hero = this.cube_model.clone();
    cube_hero.name = "cube_hero";
    if ((void 0).innerWidth > 1024) {
      cube_hero.position.y = -0.81;
    } else {
      cube_hero.scale.setScalar(0.6);
      cube_hero.position.y = 0;
    }
    cube_hero.rotation.x = 0.52;
    cube_hero.rotation.y = Math.PI * 0.25;
    this.scene.add(cube_hero);
    anima_webgl.animaModelHero(cube_hero);
  }
  //? - =========================  MODEL HERO  ========================= -//
  //? - =========================  MODEL HERO  ========================= -//
  setModelCodeMore() {
    const cube_code_more = this.cube_model.clone();
    cube_code_more.name = "cube_code_more";
    cube_code_more.children.forEach((model, i) => {
      if (model.name.indexOf("BOX") > -1) {
        let material = model.material.clone();
        model.material = material;
        material.color = new THREE.Color("black");
      } else {
        let material = model.material.clone();
        model.material = material;
        material.color = new THREE.Color("white");
      }
    });
    if ((void 0).innerWidth > 1024) {
      cube_code_more.position.y = 0;
      cube_code_more.position.x = 1.5;
      cube_code_more.scale.setScalar(0.6);
    } else {
      cube_code_more.scale.setScalar(0.35);
      cube_code_more.position.y = 0;
    }
    cube_code_more.rotation.x = 0.52;
    cube_code_more.rotation.y = Math.PI * 0.16;
    cube_code_more.rotation.z = 0.2;
    this.scene.add(cube_code_more);
    anima_webgl.animaModelCode(cube_code_more);
  }
}
class World {
  constructor(webglapp) {
    this.$html = (void 0).querySelector("html");
    this.webgl_app = webglapp;
    this.resources = this.webgl_app.resources;
    this.is_ready = false;
    this.resources.on("ready", () => {
      this.models = new Models(webglapp);
      this.env = new Environment(webglapp);
      this.is_ready = true;
      this.$html.classList.add("has-gl");
    });
  }
  //? - =========================  update  ========================= -//
  //? - =========================  update  ========================= -//
  updateScene(elapsed) {
    if (this.is_ready)
      ;
  }
}
const Model = "" + __buildAssetsURL("logo-cube.z3RHM3_i.glb");
const px = "" + __buildAssetsURL("px.f5iRJx2V.jpeg");
const nx = "" + __buildAssetsURL("nx.dowNv24y.jpeg");
const py = "" + __buildAssetsURL("py.QCbPPXZ-.jpeg");
const ny = "" + __buildAssetsURL("ny.sMLdAiWm.jpeg");
const pz = "" + __buildAssetsURL("pz.sTfpzaBy.jpeg");
const nz = "" + __buildAssetsURL("nz.Ud9suYO8.jpeg");
const sources = [
  {
    name: "environmentMapTexture",
    type: "cubeTexture",
    path: [px, nx, py, ny, pz, nz]
  },
  {
    name: "scene",
    type: "gltfModel",
    path: Model
  }
];
class WebGLApp {
  constructor() {
    return;
  }
  init(canvas, debug) {
    this.html = (void 0).querySelector("html");
    this.html.classList.add("is-gl-splash");
    this.canvas = canvas;
    this.debug = debug;
    this.sizes = new Sizes();
    this.time = new Time$1();
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("tick", () => {
      this.update();
    });
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera(this);
    this.renderer = new Renderer(this);
    this.world = new World(this);
  }
  //? - =========================  resizing  ========================= -//
  //? - =========================  resizing  ========================= -//
  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  //? - =========================  update  ========================= -//
  //? - =========================  update  ========================= -//
  update() {
    this.camera.update();
    this.world.updateScene(this.time.elapsed);
    this.renderer.update();
  }
}
const webgl_app = new WebGLApp();
class EventEmitter2 {
  constructor() {
    this.callbacks = {};
    this.callbacks.base = {};
  }
  on(_names, callback) {
    if (typeof _names === "undefined" || _names === "") {
      console.warn("wrong names");
      return false;
    }
    if (typeof callback === "undefined") {
      console.warn("wrong callback");
      return false;
    }
    const names = this.resolveNames(_names);
    names.forEach((_name) => {
      const name = this.resolveName(_name);
      if (!(this.callbacks[name.namespace] instanceof Object))
        this.callbacks[name.namespace] = {};
      if (!(this.callbacks[name.namespace][name.value] instanceof Array))
        this.callbacks[name.namespace][name.value] = [];
      this.callbacks[name.namespace][name.value].push(callback);
    });
    return this;
  }
  off(_names) {
    if (typeof _names === "undefined" || _names === "") {
      console.warn("wrong name");
      return false;
    }
    const names = this.resolveNames(_names);
    names.forEach((_name) => {
      const name = this.resolveName(_name);
      if (name.namespace !== "base" && name.value === "") {
        delete this.callbacks[name.namespace];
      } else {
        if (name.namespace === "base") {
          for (const namespace in this.callbacks) {
            if (this.callbacks[namespace] instanceof Object && this.callbacks[namespace][name.value] instanceof Array) {
              delete this.callbacks[namespace][name.value];
              if (Object.keys(this.callbacks[namespace]).length === 0)
                delete this.callbacks[namespace];
            }
          }
        } else if (this.callbacks[name.namespace] instanceof Object && this.callbacks[name.namespace][name.value] instanceof Array) {
          delete this.callbacks[name.namespace][name.value];
          if (Object.keys(this.callbacks[name.namespace]).length === 0)
            delete this.callbacks[name.namespace];
        }
      }
    });
    return this;
  }
  trigger(_name, _args) {
    if (typeof _name === "undefined" || _name === "") {
      console.warn("wrong name");
      return false;
    }
    let finalResult = null;
    const args = !(_args instanceof Array) ? [] : _args;
    let name = this.resolveNames(_name);
    name = this.resolveName(name[0]);
    if (name.namespace === "base") {
      for (const namespace in this.callbacks) {
        if (this.callbacks[namespace] instanceof Object && this.callbacks[namespace][name.value] instanceof Array) {
          this.callbacks[namespace][name.value].forEach(function(callback) {
            callback.apply(this, args);
          });
        }
      }
    } else if (this.callbacks[name.namespace] instanceof Object) {
      if (name.value === "") {
        console.warn("wrong name");
        return this;
      }
      this.callbacks[name.namespace][name.value].forEach(function(callback) {
        callback.apply(this, args);
      });
    }
    return finalResult;
  }
  resolveNames(_names) {
    let names = _names;
    names = names.replace(/[^a-zA-Z0-9 ,/.]/g, "");
    names = names.replace(/[,/]+/g, " ");
    names = names.split(" ");
    return names;
  }
  resolveName(name) {
    const newName = {};
    const parts = name.split(".");
    newName.original = name;
    newName.value = parts[0];
    newName.namespace = "base";
    if (parts.length > 1 && parts[1] !== "") {
      newName.namespace = parts[1];
    }
    return newName;
  }
}
class Time2 extends EventEmitter2 {
  constructor() {
    super();
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;
    this.tick();
  }
  tick() {
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;
    this.trigger("tick");
    (void 0).requestAnimationFrame(() => {
      this.tick();
    });
  }
}
class Observs {
  constructor(thisContent) {
    let doc = thisContent;
    this.$html = (void 0).querySelector("html");
    this.qsa = (s, o = doc) => o.querySelectorAll(s), this.qs = (s, o = doc) => o.querySelector(s);
    this.$marquees = this.qsa(".marquee__travel");
    const observer = new IntersectionObserver(function(entries, observer2) {
      entries.forEach((entry2) => {
        let $mq = entry2.target;
        if (!entry2.isIntersecting) {
          $mq.classList.remove("mq");
        } else {
          $mq.classList.add("mq");
        }
      });
    });
    this.$marquees.forEach((el) => observer.observe(el));
    this.$cta = this.qsa(".code-more__cta__svg svg");
    const observer_rotate = new IntersectionObserver(function(entries, observer_rotate2) {
      entries.forEach((entry2) => {
        let $mq = entry2.target;
        if (!entry2.isIntersecting) {
          $mq.classList.remove("is-rotate");
        } else {
          $mq.classList.add("is-rotate");
        }
      });
    });
    this.$cta.forEach((el) => observer_rotate.observe(el));
  }
}
class Home {
  constructor() {
    return;
  }
  init(thisContent) {
    this.$html = (void 0).querySelector("html");
    let doc = thisContent;
    this.qsa = (s, o = doc) => o.querySelectorAll(s), this.qs = (s, o = doc) => o.querySelector(s);
    if (this.$html.classList.contains("remove-gl")) {
      this.$html.classList.remove("remove-gl");
    }
    new Observs(thisContent);
  }
}
const home = new Home();
class Hall {
  constructor() {
    return;
  }
  init(thisContent) {
    let doc = thisContent;
    this.$html = (void 0).querySelector("html");
    this.qsa = (s, o = doc) => o.querySelectorAll(s), this.qs = (s, o = doc) => o.querySelector(s);
    this.$html.classList.add("remove-gl");
    this.DOM = {
      $projects: this.qsa(".hall .showcase__each"),
      $projects_video: this.qsa(".hall .showcase__each video")
    };
    this.applyHasVideo();
    this.shuffleCards();
    new Observs(thisContent);
  }
  applyHasVideo() {
    this.DOM.$projects_video.forEach((video) => {
      const liWithVideo = video.closest("li");
      liWithVideo.classList.add("has-video");
      liWithVideo.addEventListener("mouseenter", () => {
        video.play();
      });
      liWithVideo.addEventListener("mouseleave", () => {
        video.pause();
      });
    });
  }
  shuffleCards() {
    const shuffled = Array.from(this.DOM.$projects).sort(() => 0.5 - Math.random());
    shuffled.forEach((card, i) => {
      card.style.order = i;
    });
  }
}
const hall = new Hall();
gsap$2.registerPlugin(ScrollTrigger);
class Transitions {
  constructor() {
    this.debug = new Debug();
    this.webgl_active = true;
    return;
  }
  init(isPage, DOM) {
    this.body = (void 0).querySelector("body");
    this.$current = DOM;
    this.current_page_name = isPage;
    this.$old = null;
    this.old_page_name = null;
  }
  //? - =========================  first  ========================= -//
  //? - =========================  first  ========================= -//
  instancingPages($current, pageName) {
    ScrollTrigger.getAll().forEach((st) => st.kill());
    if (pageName == "index") {
      home.init($current);
    }
    if (pageName == "hall") {
      hall.init($current);
    }
  }
  //? - =========================  on leave  ========================= -//
  //? - =========================  on leave  ========================= -//
  onLeave($old, done) {
    this.$old = $old;
    this.old_page_name = this.$old.dataset.page;
    gsap$2.to(this.$old, { opacity: 0, duration: 1.2, ease: "power3.inOut", onComplete: () => {
      smooth_scroll.lenis.destroy();
      done();
    } });
  }
  //? - =========================  before  ========================= -//
  //? - =========================  before  ========================= -//
  beforeEnter($current) {
    this.$current = $current;
    this.current_page_name = this.$current.dataset.page;
    gsap$2.set(this.$current, { opacity: 0 });
  }
  //? - =========================  enter ========================= -//
  //? - =========================  enter ========================= -//
  onEnter($current, done) {
    history.scrollRestoration = "manual";
    this.$current = $current;
    this.instancingPages($current, this.current_page_name);
    smooth_scroll.setLenis(this.time);
    gsap$2.to(this.$current, { opacity: 1, duration: 1.2, ease: "power3.out", onComplete: () => {
      done();
    } });
  }
  //? - =========================  first  ========================= -//
  //? - =========================  first  ========================= -//
  firstEntrance() {
    this.body = (void 0).querySelector("body");
    this.time = new Time2();
    smooth_scroll.setLenis(this.time);
    if (!this.webgl_active) {
      this.body.classList.add("no-webgl");
      return;
    }
    if (this.debug.active) {
      gsap$2.delayedCall(0.01, () => {
        webgl_app.init((void 0).querySelector("canvas.webgl"), this.debug);
      });
    } else {
      this.debug.active = false;
      webgl_app.init((void 0).querySelector("canvas.webgl"), this.debug);
    }
  }
}
const transitions = new Transitions();
const pageTransition = {
  name: "navigations",
  appear: true,
  css: false,
  mode: "out-in",
  //onLeave
  onLeave: (el, done) => {
    transitions.onLeave(el, done);
  },
  //onBeforeEnter
  onBeforeEnter: (el) => {
    transitions.beforeEnter(el);
  },
  //onEnter
  onEnter: (el, done) => {
    transitions.onEnter(el, done);
  },
  //onAfterEnter
  onAfterEnter: (el) => {
  }
};
const __nuxt_page_meta$1 = {
  pageTransition
};
const __nuxt_page_meta = {
  pageTransition
};
const _routes = [
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "hall",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/hall",
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect) || void 0,
    component: () => import('./_nuxt/hall-SnZw6KwV.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "index",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect) || void 0,
    component: () => import('./_nuxt/index-qI5e5bfT.mjs').then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history2 = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a2;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a2 = routerOptions.scrollBehavior) == null ? void 0 : _a2.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history: history2,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
function useRequestEvent(nuxtApp = /* @__PURE__ */ useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie2 = ref(cookieValue);
  {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie2.value, cookies[name])) {
        return;
      }
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie2.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie2;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const onNuxtReady = (callback) => {
  {
    return;
  }
};
async function refreshNuxtData(keys) {
  {
    return Promise.resolve();
  }
}
const prismicKey = Symbol("prismic");
const getSlots = (parent, slots, defaultPayload) => {
  if (typeof parent === "string") {
    return slots.default && slots.default(defaultPayload);
  } else {
    if (slots.default) {
      const content = slots.default(defaultPayload);
      return {
        ...slots,
        default: () => content
      };
    } else {
      return slots;
    }
  }
};
const isInternalURL = (url) => {
  const isInternal = /^\/(?!\/)/.test(url);
  const isSpecialLink = !isInternal && !/^https?:\/\//i.test(url);
  return isInternal && !isSpecialLink;
};
const simplyResolveComponent = (component) => {
  return resolveDynamicComponent(component);
};
const usePrismic = () => {
  return inject(prismicKey, { options: { endpoint: "" } });
};
const defaultInternalComponent = "router-link";
const defaultExternalComponent = "a";
const defaultBlankTargetRelAttribute = "noopener noreferrer";
const usePrismicLink = (props) => {
  const { options } = usePrismic();
  const type = computed(() => {
    var _a, _b;
    const internalComponent = unref(props.internalComponent) || ((_a = options.components) == null ? void 0 : _a.linkInternalComponent) || defaultInternalComponent;
    const externalComponent = unref(props.externalComponent) || ((_b = options.components) == null ? void 0 : _b.linkExternalComponent) || defaultExternalComponent;
    return href.value && isInternalURL(href.value) && !target.value ? internalComponent : externalComponent;
  });
  const href = computed(() => {
    const field = unref(props.field);
    const linkResolver2 = unref(props.linkResolver) ?? options.linkResolver;
    return asLink(field, linkResolver2) ?? "";
  });
  const target = computed(() => {
    const field = unref(props.field);
    const target2 = unref(props.target);
    if (typeof target2 !== "undefined") {
      return target2;
    } else {
      return field && "target" in field && field.target ? field.target : null;
    }
  });
  const rel = computed(() => {
    var _a;
    const rel2 = unref(props.rel);
    if (typeof rel2 !== "undefined") {
      return rel2;
    } else if (target.value === "_blank") {
      const blankTargetRelAttribute = unref(props.blankTargetRelAttribute);
      if (typeof blankTargetRelAttribute !== "undefined") {
        return blankTargetRelAttribute;
      } else {
        return typeof ((_a = options.components) == null ? void 0 : _a.linkBlankTargetRelAttribute) !== "undefined" ? options.components.linkBlankTargetRelAttribute : defaultBlankTargetRelAttribute;
      }
    } else {
      return null;
    }
  });
  return {
    type,
    href,
    target,
    rel
  };
};
const PrismicLinkImpl = /* @__PURE__ */ defineComponent({
  name: "PrismicLink",
  props: {
    field: {
      type: Object,
      required: true
    },
    linkResolver: {
      type: Function,
      default: void 0,
      required: false
    },
    target: {
      type: String,
      default: void 0,
      required: false
    },
    rel: {
      type: String,
      default: void 0,
      required: false
    },
    blankTargetRelAttribute: {
      type: String,
      default: void 0,
      required: false
    },
    internalComponent: {
      type: [String, Object, Function],
      default: void 0,
      required: false
    },
    externalComponent: {
      type: [String, Object, Function],
      default: void 0,
      required: false
    }
  },
  setup(props, { slots }) {
    if (!props.field) {
      return () => null;
    }
    const { type, href, target, rel } = usePrismicLink(props);
    return () => {
      const parent = type.value === "a" ? "a" : simplyResolveComponent(type.value);
      const computedSlots = getSlots(parent, slots, reactive({ href: href.value }));
      if (typeof parent === "string") {
        return h(parent, { href: href.value, target: target.value, rel: rel.value }, computedSlots);
      } else {
        return h(parent, { to: href.value, target: target.value, rel: rel.value }, computedSlots);
      }
    };
  }
});
const PrismicLink = PrismicLinkImpl;
const defaultWrapper$2 = "div";
const PrismicEmbedImpl = /* @__PURE__ */ defineComponent({
  name: "PrismicEmbed",
  props: {
    field: {
      type: Object,
      required: true
    },
    wrapper: {
      type: [String, Object, Function],
      default: void 0,
      required: false
    }
  },
  setup(props) {
    if (!props.field) {
      return () => null;
    }
    return () => {
      return h(simplyResolveComponent(props.wrapper || defaultWrapper$2), {
        "data-oembed": props.field.embed_url,
        "data-oembed-type": props.field.type,
        "data-oembed-provider": props.field.provider_name,
        innerHTML: props.field.html || null
      });
    };
  }
});
const PrismicEmbed = PrismicEmbedImpl;
if (typeof process === "undefined") {
  globalThis.process = { env: {} };
}
const defaultImageComponent = "img";
const usePrismicImage = (props) => {
  const { options } = usePrismic();
  const asImage = computed(() => {
    var _a, _b;
    const field = unref(props.field);
    if (!isFilled.image(field)) {
      return {
        src: null,
        srcset: null
      };
    }
    const imgixParams = unref(props.imgixParams);
    const widths = unref(props.widths);
    const pixelDensities = unref(props.pixelDensities);
    if (widths) {
      if (pixelDensities) {
        console.warn("[PrismicImage] Only one of `widths` or `pixelDensities` props can be provided. You can resolve this warning by removing either the `widths` or `pixelDensities` prop. `widths` will be used in this case.", props);
      }
      return asImageWidthSrcSet(field, {
        ...imgixParams,
        widths: widths === "defaults" ? (_a = options.components) == null ? void 0 : _a.imageWidthSrcSetDefaults : widths
      });
    } else if (pixelDensities) {
      return asImagePixelDensitySrcSet(field, {
        ...imgixParams,
        pixelDensities: pixelDensities === "defaults" ? (_b = options.components) == null ? void 0 : _b.imagePixelDensitySrcSetDefaults : pixelDensities
      });
    } else {
      return {
        src: asImageSrc(field, imgixParams),
        srcset: null
      };
    }
  });
  const src = computed(() => {
    return asImage.value.src;
  });
  const srcset = computed(() => {
    return asImage.value.srcset;
  });
  const alt = computed(() => {
    return unref(props.field).alt || "";
  });
  const copyright = computed(() => {
    return unref(props.field).copyright || null;
  });
  return {
    src,
    srcset,
    alt,
    copyright
  };
};
const PrismicImageImpl = /* @__PURE__ */ defineComponent({
  name: "PrismicImage",
  props: {
    field: {
      type: Object,
      required: true
    },
    imageComponent: {
      type: [String, Object],
      default: void 0,
      required: false
    },
    imgixParams: {
      type: Object,
      default: void 0,
      required: false
    },
    widths: {
      type: [String, Object],
      default: void 0,
      required: false
    },
    pixelDensities: {
      type: [String, Object],
      default: void 0,
      required: false
    }
  },
  setup(props) {
    if (!props.field) {
      return () => null;
    }
    const { options } = usePrismic();
    const type = computed(() => {
      var _a;
      return props.imageComponent || ((_a = options.components) == null ? void 0 : _a.imageComponent) || defaultImageComponent;
    });
    const { src, srcset, alt, copyright } = usePrismicImage(props);
    return () => {
      const attributes = {
        src: src.value,
        srcset: srcset.value,
        alt: alt.value
      };
      switch (type.value) {
        case "img":
          return h("img", attributes);
        default:
          return h(simplyResolveComponent(type.value), {
            ...attributes,
            copyright: copyright.value
          });
      }
    };
  }
});
const PrismicImage = PrismicImageImpl;
const defaultWrapper$1 = "div";
const usePrismicText = (props) => {
  const text = computed(() => {
    const field = unref(props.field);
    if (!isFilled.richText(field)) {
      return unref(props.fallback) ?? "";
    }
    return asText(unref(field), unref(props.separator));
  });
  return {
    text
  };
};
const PrismicTextImpl = /* @__PURE__ */ defineComponent({
  name: "PrismicText",
  props: {
    field: {
      type: Array,
      default: void 0,
      required: false
    },
    separator: {
      type: String,
      default: void 0,
      required: false
    },
    wrapper: {
      type: [String, Object, Function],
      default: void 0,
      required: false
    },
    fallback: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(props) {
    const { text } = usePrismicText(props);
    return () => {
      const parent = simplyResolveComponent(props.wrapper || defaultWrapper$1);
      return h(parent, null, {
        default: () => text.value
      });
    };
  }
});
const PrismicText = PrismicTextImpl;
const defaultWrapper = "div";
const usePrismicRichText = (props) => {
  const { options } = usePrismic();
  const html = computed(() => {
    const field = unref(props.field);
    if (!isFilled.richText(field)) {
      return unref(props.fallback) ?? "";
    }
    const linkResolver2 = unref(props.linkResolver) ?? options.linkResolver;
    const serializer = unref(props.serializer) ?? unref(props.htmlSerializer) ?? options.richTextSerializer ?? options.htmlSerializer;
    return asHTML(unref(field), linkResolver2, serializer);
  });
  return {
    html
  };
};
const PrismicRichTextImpl = /* @__PURE__ */ defineComponent({
  name: "PrismicRichText",
  props: {
    field: {
      type: Array,
      default: void 0,
      required: false
    },
    linkResolver: {
      type: Function,
      default: void 0,
      required: false
    },
    serializer: {
      type: [Function, Object],
      default: void 0,
      required: false
    },
    htmlSerializer: {
      type: [Function, Object],
      default: void 0,
      required: false
    },
    wrapper: {
      type: [String, Object, Function],
      default: void 0,
      required: false
    },
    fallback: {
      type: String,
      default: void 0,
      required: false
    }
  },
  setup(props) {
    const { html } = usePrismicRichText(props);
    const root = ref(null);
    const maybeRouter = inject(routerKey, null);
    if (maybeRouter) {
      let links = [];
      const navigate = function(event) {
        event.preventDefault();
        maybeRouter.push(this.href);
      };
      const addListeners = () => {
        const node = root.value && "$el" in root.value ? root.value.$el : root.value;
        if (node && "querySelectorAll" in node) {
          links = Array.from(node.querySelectorAll("a")).map((element) => {
            const href = element.getAttribute("href");
            if (href && isInternalURL(href)) {
              const listener = navigate.bind({ href });
              element.addEventListener("click", listener);
              return { element, listener };
            } else {
              return false;
            }
          }).filter((link) => link);
        }
      };
      const removeListeners = () => {
        links.forEach(({ element, listener }) => element.removeEventListener("click", listener));
        links = [];
      };
      watch(html, () => {
        removeListeners();
        nextTick(addListeners);
      }, { immediate: true });
    }
    return () => {
      return h(simplyResolveComponent(props.wrapper || defaultWrapper), {
        innerHTML: html.value,
        ref: root
      });
    };
  }
});
const PrismicRichText = PrismicRichTextImpl;
const getSliceComponentProps = (propsHint) => ({
  slice: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  slices: {
    type: Array,
    required: true
  },
  context: {
    type: null,
    required: true
  }
});
const TODOSliceComponent = /* @__PURE__ */ defineComponent({
  name: "TODOSliceComponent",
  props: getSliceComponentProps(),
  setup(props) {
    const type = computed(() => "slice_type" in props.slice ? props.slice.slice_type : props.slice.type);
    watchEffect(() => {
      console.warn(`[SliceZone] Could not find a component for Slice type "${type.value}"`, props.slice);
    });
    return () => {
      return h("section", {
        "data-slice-zone-todo-component": "",
        "data-slice-type": type.value
      }, [`Could not find a component for Slice type "${type.value}"`]);
    };
  }
});
const SliceZoneImpl = /* @__PURE__ */ defineComponent({
  name: "SliceZone",
  props: {
    slices: {
      type: Array,
      required: true
    },
    components: {
      type: Object,
      default: void 0,
      required: false
    },
    resolver: {
      type: Function,
      default: void 0,
      required: false
    },
    context: {
      type: null,
      default: void 0,
      required: false
    },
    defaultComponent: {
      type: Object,
      default: void 0,
      required: false
    },
    wrapper: {
      type: [String, Object, Function],
      default: void 0,
      required: false
    }
  },
  setup(props) {
    if (!props.slices) {
      return () => null;
    }
    const { options } = usePrismic();
    const renderedSlices = computed(() => {
      return props.slices.map((slice, index) => {
        var _a;
        const type = "slice_type" in slice ? slice.slice_type : slice.type;
        let component = props.components && type in props.components ? props.components[type] : props.defaultComponent || ((_a = options.components) == null ? void 0 : _a.sliceZoneDefaultComponent) || TODOSliceComponent;
        if (props.resolver) {
          const resolvedComponent = props.resolver({
            slice,
            sliceName: type,
            i: index
          });
          if (resolvedComponent) {
            component = resolvedComponent;
          }
        }
        const key = "id" in slice && slice.id ? slice.id : `${index}-${JSON.stringify(slice)}`;
        const p = {
          key,
          slice,
          index,
          context: props.context,
          slices: props.slices
        };
        return h(simplyResolveComponent(component), p);
      });
    });
    return () => {
      if (props.wrapper) {
        const parent = simplyResolveComponent(props.wrapper);
        if (typeof parent === "string") {
          return h(parent, null, renderedSlices.value);
        } else {
          return h(parent, null, { default: () => renderedSlices.value });
        }
      } else {
        return renderedSlices.value;
      }
    };
  }
});
const SliceZone = SliceZoneImpl;
const createPrismic = (options) => {
  let client2;
  if (options.client) {
    client2 = options.client;
  } else {
    client2 = createClient(options.endpoint, {
      fetch: async (endpoint, options2) => {
        let fetchFunction;
        if (typeof globalThis.fetch === "function") {
          fetchFunction = globalThis.fetch;
        } else {
          fetchFunction = (await import('file:///Users/victorcosta/Documents/DEV/lets-code/lets-code-primisc-nuxt/node_modules/isomorphic-unfetch/index.js')).default;
        }
        return await fetchFunction(endpoint, options2);
      },
      ...options.clientConfig
    });
  }
  const prismicClient = {
    client: client2,
    filter,
    cookie
  };
  const prismicHelpers = {
    asText,
    asHTML: (richTextField, ...config) => {
      const [configOrLinkResolver, maybeHTMLSerializer] = config;
      return asHTML(richTextField, typeof configOrLinkResolver === "function" || configOrLinkResolver == null ? {
        linkResolver: configOrLinkResolver || options.linkResolver,
        serializer: maybeHTMLSerializer || options.richTextSerializer || options.htmlSerializer
      } : {
        linkResolver: options.linkResolver,
        serializer: options.richTextSerializer || options.htmlSerializer,
        ...configOrLinkResolver
      });
    },
    asLink: (linkField, config) => {
      return asLink(linkField, typeof config === "function" ? { linkResolver: config } : {
        linkResolver: options.linkResolver,
        // TODO: For some reasons, TypeScript narrows the type to "unknown" where it's supposed to be a union
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...config
      });
    },
    asLinkAttrs: (linkField, config) => {
      return asLinkAttrs(linkField, {
        // TODO: We can't really retrieve the generic type here, this might cause some unexpected type error in some edge-case scenario
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        linkResolver: options.linkResolver,
        ...config
      });
    },
    asDate,
    asImageSrc,
    asImageWidthSrcSet,
    asImagePixelDensitySrcSet,
    isFilled,
    documentToLinkField
  };
  const prismic = {
    options,
    ...prismicClient,
    ...prismicHelpers,
    install(app) {
      app.provide(prismicKey, this);
      app.config.globalProperties.$prismic = this;
      if (options.injectComponents !== false) {
        app.component(PrismicLink.name, PrismicLink);
        app.component(PrismicEmbed.name, PrismicEmbed);
        app.component(PrismicImage.name, PrismicImage);
        app.component(PrismicText.name, PrismicText);
        app.component(PrismicRichText.name, PrismicRichText);
        app.component(SliceZone.name, SliceZone);
      }
    }
  };
  return prismic;
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
  };
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const config = /* @__PURE__ */ useRuntimeConfig();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isProtocolURL = computed(() => typeof to.value === "string" && hasProtocol(to.value, { acceptRelative: true }));
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || isProtocolURL.value;
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value && !props.external && !isProtocolURL.value ? resolveTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), router.resolve) : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const client = void 0;
const linkResolver = void 0;
const richTextSerializer = void 0;
const plugin_JbOpvgCHAb = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a;
  const options = (/* @__PURE__ */ useRuntimeConfig()).public.prismic;
  const endpoint = options.environment || options.endpoint || (void 0 ) || "";
  const prismicPlugin = createPrismic({
    ...options,
    endpoint,
    client,
    linkResolver,
    richTextSerializer,
    injectComponents: false,
    // Handled at module level
    components: {
      linkInternalComponent: __nuxt_component_0$1,
      linkExternalComponent: __nuxt_component_0$1,
      ...options.components
    }
  });
  nuxtApp.vueApp.use(prismicPlugin);
  if (options.preview) {
    const previewCookie = useCookie("io.prismic.preview").value;
    {
      prismicPlugin.client.enableAutoPreviewsFromReq((_a = useRequestEvent()) == null ? void 0 : _a.req);
    }
    if (previewCookie) {
      try {
        const session = typeof previewCookie === "string" ? JSON.parse(decodeURIComponent(previewCookie)) : previewCookie;
        if (Object.keys(session).some((key) => key in session && typeof session[key] === "object" && session[key] !== null && "preview" in session[key] && session[key].preview)) {
          let afterEachCalled = false;
          onNuxtReady(() => {
            if (!afterEachCalled) {
              refreshNuxtData();
            }
          });
          useRouter().afterEach(() => {
            afterEachCalled = true;
            refreshNuxtData();
          });
        }
      } catch (error) {
        console.warn("Failed to parse Prismic preview cookie", error);
      }
    }
  }
  if (options.toolbar) {
    const repositoryName = isRepositoryEndpoint(endpoint) ? getRepositoryName(endpoint) : endpoint;
    useHead({
      script: [{
        key: "prismic-preview",
        src: `https://static.cdn.prismic.io/prismic.min.js?repo=${repositoryName}&new=true`,
        async: true,
        defer: true
      }]
    });
  } else {
    useCookie("io.prismic.preview").value = null;
  }
  return {
    provide: { prismic: prismicPlugin }
  };
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  plugin_JbOpvgCHAb
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {
  props: ["postData"]
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="header__hold"><a href="/" class="header__logo header__svg w-embed"><svg width="100%" viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5225 30.4754C13.629 29.9624 12.7542 29.46 11.8795 28.9577C9.31014 27.4855 6.74216 26.0106 4.17016 24.5411C3.63701 24.237 3.63299 24.245 3.63299 23.6248C3.63299 22.4969 3.63165 21.3689 3.63165 20.241C3.63165 20.1164 3.63165 19.9918 3.63165 19.811C4.13801 20.1017 4.60553 20.3683 5.0717 20.6362C7.6571 22.1191 10.2412 23.602 12.8266 25.0849C13.3476 25.3837 13.8741 25.6717 14.3898 25.9784C14.4729 26.028 14.56 26.1553 14.56 26.2477C14.5693 27.6168 14.5653 28.9845 14.5627 30.3535C14.5627 30.3803 14.5452 30.4071 14.5225 30.4754Z" fill="var(--soft)"></path><path d="M0.152679 9.25241C0.695211 8.94163 1.20961 8.64826 1.72401 8.35355C4.73673 6.62147 7.74946 4.88939 10.7622 3.15865C12.5653 2.12315 14.367 1.08765 16.1741 0.0588499C16.2612 0.00928528 16.4139 -0.0228647 16.4889 0.0200019C17.87 0.794281 19.2444 1.58062 20.6791 2.3991C16.2612 4.93359 11.8981 7.43728 7.49226 9.96507C8.23573 10.3911 8.94303 10.7983 9.65167 11.2028C11.215 12.0977 12.7756 12.9952 14.3442 13.878C14.4447 13.9343 14.6336 13.9316 14.734 13.874C18.9872 11.444 23.2337 9.00325 27.4855 6.57057C27.582 6.51564 27.7468 6.47278 27.8271 6.51698C29.2096 7.2926 30.5827 8.08296 31.9999 8.89474C31.089 9.4212 30.221 9.92756 29.3489 10.4272C26.6108 11.9959 23.8727 13.5632 21.1346 15.1318C19.4052 16.1218 17.6798 17.1171 15.945 18.0977C15.8325 18.1606 15.6235 18.1633 15.5123 18.1004C13.5954 17.014 11.6878 15.9115 9.77625 14.8157C7.18147 13.3288 4.58402 11.8458 1.98791 10.3602C1.42394 10.0374 0.861319 9.71323 0.298694 9.38771C0.255827 9.36226 0.223677 9.31939 0.152679 9.25241Z" fill="var(--soft)"></path><path d="M14.5331 24.6188C10.5867 22.3562 6.6818 20.1164 2.72601 17.8485C2.72601 17.9811 2.72601 18.0628 2.72601 18.1432C2.72601 20.3897 2.72869 22.6362 2.72065 24.8813C2.71931 25.0823 2.78495 25.1961 2.95374 25.2926C4.70859 26.2906 6.46345 27.2912 8.21428 28.2959C10.1232 29.3904 12.016 30.5103 13.9437 31.5699C14.4514 31.8485 14.5987 32.1646 14.5773 32.7139C14.5344 33.8204 14.5652 34.9309 14.5652 36.0387C14.5652 36.1325 14.5652 36.2263 14.5652 36.387C14.2103 36.1861 13.9089 36.0173 13.6101 35.8458C9.94503 33.744 6.27993 31.6422 2.61483 29.5417C1.82045 29.0863 1.02742 28.6295 0.231706 28.178C0.0910497 28.0977 -4.19617e-05 28.02 -4.19617e-05 27.8271C0.00933512 22.5531 0.00799554 17.2805 0.00799554 12.0066C0.00799554 11.9691 0.0133539 11.9302 0.0173726 11.8512C0.488906 12.1191 0.943025 12.3736 1.3958 12.6322C4.79567 14.5826 8.19553 16.5344 11.5954 18.4862C12.505 19.0086 13.4172 19.5243 14.3201 20.0588C14.4313 20.1245 14.5532 20.2852 14.5545 20.4031C14.5719 21.7427 14.5666 23.0823 14.5652 24.4232C14.5652 24.4674 14.5505 24.5129 14.5331 24.6188Z" fill="var(--soft)"></path><path d="M32.1097 11.8847C32.1097 13.3234 32.1151 14.7018 32.099 16.0803C32.0977 16.1861 31.9758 16.3294 31.8713 16.3897C30.1526 17.385 28.4272 18.371 26.7045 19.3596C24.6483 20.5397 22.5933 21.7226 20.5331 22.8947C20.3535 22.9965 20.3067 23.1077 20.3067 23.3006C20.312 27.022 20.308 30.742 20.316 34.4634C20.316 34.6938 20.2491 34.8224 20.0454 34.9349C19.2404 35.3796 18.4446 35.8431 17.6168 36.3174C17.6074 36.2222 17.594 36.1526 17.594 36.0829C17.5927 30.8679 17.594 25.6529 17.59 20.4379C17.59 20.2598 17.6489 20.1714 17.8043 20.0829C22.2196 17.5551 26.6308 15.0207 31.0434 12.4888C31.381 12.2919 31.7239 12.103 32.1097 11.8847Z" fill="var(--soft)"></path><path d="M21.2363 28.3227C21.2363 27.9677 21.2363 27.6328 21.2363 27.2979C21.2363 26.2772 21.239 25.2551 21.2336 24.2343C21.2323 24.0776 21.2645 23.9744 21.4172 23.8874C24.8947 21.9008 28.3696 19.9088 31.8445 17.9168C31.9168 17.8753 31.9905 17.8391 32.0963 17.7842C32.1017 17.8874 32.1084 17.9597 32.1084 18.0307C32.1084 19.3127 32.103 20.5933 32.1137 21.8753C32.1151 22.0709 32.0427 22.166 31.8847 22.2557C28.3669 24.2691 24.8519 26.2879 21.3368 28.304C21.3234 28.312 21.302 28.3107 21.2363 28.3227Z" fill="var(--soft)"></path></svg></a><div class="header__nav-cta"><ul role="list" class="header__nav"><!--[-->`);
  ssrRenderList($props.postData.header_navigation, (nav_item) => {
    _push(`<li class="header__nav__li">`);
    if (nav_item.external_link) {
      _push(`<a${ssrRenderAttr("href", nav_item.url)} target="_blank " class="nav_item inline-block">${ssrInterpolate(nav_item.label)}</a>`);
    } else {
      _push(`<a${ssrRenderAttr("href", nav_item.url)} class="nav_item inline-block">${ssrInterpolate(nav_item.label)}</a>`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--><a href="https://labroom.netlify.app" target="_blank " class="nav_item inline-block">Lab Room</a></ul><button class="header__trg-menu"><div class="header__trg-menu__icon w-embed"><svg width="100%" viewBox="0 0 28 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 2H27.5" stroke="var(--soft)" stroke-width="3"></path><path d="M0 7.5H27.5" stroke="var(--soft)" stroke-width="3"></path></svg></div></button><a${ssrRenderAttr("href", $props.postData.header_cta_url)} target="_blank" class="header__cta">${ssrInterpolate($props.postData.header_cta_label)}</a></div></div></header>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuFixed.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
class MenuFS {
  constructor() {
    this.$html = (void 0).querySelector("html");
    this.$logo = (void 0).querySelector(".header__logo");
    this.menufs = {
      $el: (void 0).querySelector(".menu-fs"),
      $fader: (void 0).querySelector(".menu-fs__fader"),
      $bg: (void 0).querySelector(".menu-fs__bg"),
      $trg: (void 0).querySelector(".header__trg-menu"),
      $content: (void 0).querySelector(".menu-fs__content"),
      $links: (void 0).querySelectorAll(".menu-fs__nav a, .menu-fs__socials li")
    };
    this.time = 1;
    this.animating = false;
    this.setters();
    this.bindEvents();
  }
  setters() {
    this.tl_menufs = gsap$2.timeline({ paused: true }).fromTo(this.menufs.$content, { xPercent: -100 }, { xPercent: 0, duration: this.time }, 0).fromTo(this.menufs.$fader, { opacity: 0 }, { opacity: 1, duration: this.time }, 0).fromTo(this.menufs.$links, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: this.time, stagger: 0.1 }, "<50%");
  }
  openMenu() {
    this.animating = true;
    this.$html.classList.add("is-menufs");
    this.tl_menufs.tweenTo(this.tl_menufs.duration(), { duration: this.time * 8, ease: "expo.out", onComplete: () => {
      this.animating = false;
    } });
  }
  closeMenu() {
    this.animating = true;
    this.$html.classList.remove("is-menufs");
    this.tl_menufs.tweenTo(0, { duration: this.time, ease: "expo.out", onComplete: () => {
      this.animating = false;
    } });
  }
  bindEvents() {
    this.menufs.$trg.addEventListener("click", () => {
      if (this.$html.classList.contains("is-menufs")) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });
    this.menufs.$links.forEach(($link) => {
      $link.addEventListener("click", () => {
        this.closeMenu();
      });
    });
    this.$logo.addEventListener("click", () => {
      if (this.$html.classList.contains("is-menufs")) {
        this.closeMenu();
      }
    });
  }
}
const _sfc_main$4 = {
  props: ["postData"],
  methods: {
    onClick(event) {
    }
  },
  mounted() {
    new MenuFS();
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu-fs e-wvw e-hvh" }, _attrs))}><div class="menu-fs__hold e-wp e-hp e-flex"><div class="menu-fs__fader"></div><div class="menu-fs__content"><ul class="menu-fs__nav"><!--[-->`);
  ssrRenderList($props.postData.header_navigation, (nav_item) => {
    _push(`<li>`);
    if (nav_item.external_link) {
      _push(`<a${ssrRenderAttr("href", nav_item.url)} target="_blank " class="nav_item inline-block">${ssrInterpolate(nav_item.label)}</a>`);
    } else {
      _push(`<a${ssrRenderAttr("href", nav_item.url)} class="nav_item inline-block">${ssrInterpolate(nav_item.label)}</a>`);
    }
    _push(`</li>`);
  });
  _push(`<!--]--></ul><ul class="menu-fs__socials"><!--[-->`);
  ssrRenderList($props.postData.socials_group, (social) => {
    _push(`<li><a${ssrRenderAttr("href", social.link)} target="_blank" class="social inline-block">${ssrInterpolate(social.social)}</a></li>`);
  });
  _push(`<!--]--></ul></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MenuFS.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const layouts = {};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_3 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _sfc_main$3 = {
  mounted() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<canvas${ssrRenderAttrs(mergeProps({ class: "webgl" }, _attrs))}></canvas>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sketch.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
class Console {
  constructor() {
    var args = ["\n %c Developed with ❤️ by Victor Work %c https://victor.work/ %c %c 💎 \n\n", "border: 1px solid #000;color: #000; background: #ff0000; padding:5px 0;", "color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;", "background: red; padding:5px 0;", "color: #b0976d; background: #ff0000; padding:5px 0;"];
    (void 0).console.log.apply(console, args);
  }
}
const __default__ = {
  mounted() {
    const $current = (void 0).querySelector(".page");
    transitions.firstEntrance();
    transitions.instancingPages($current, $current.dataset.page);
    new Console();
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
  __name: "app",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { client: client2 } = usePrismic();
    const { data } = ([__temp, __restore] = withAsyncContext(() => client2.getSingle("global")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MenuFixed = __nuxt_component_0;
      const _component_MenuFS = __nuxt_component_1;
      const _component_NuxtLayout = __nuxt_component_2;
      const _component_NuxtPage = __nuxt_component_3;
      const _component_Sketch = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_MenuFixed, { postData: unref(data) }, null, _parent));
      _push(ssrRenderComponent(_component_MenuFS, { postData: unref(data) }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLayout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Sketch, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = _sfc_main$2;
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./_nuxt/error-404-Y6wrbhIF.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./_nuxt/error-500-yW10pXK4.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import('./_nuxt/island-renderer-pKXqL7O0.mjs').then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, __nuxt_component_0$1 as a, usePrismic as b, createError as c, entry$1 as default, useHead as u };
//# sourceMappingURL=server.mjs.map
