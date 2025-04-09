var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// external-global-plugin:video.js
var require_video = __commonJS({
  "external-global-plugin:video.js"(exports, module) {
    module.exports = window.videojs;
  }
});

// node_modules/global/window.js
var require_window = __commonJS({
  "node_modules/global/window.js"(exports, module) {
    var win;
    if (typeof window !== "undefined") {
      win = window;
    } else if (typeof global !== "undefined") {
      win = global;
    } else if (typeof self !== "undefined") {
      win = self;
    } else {
      win = {};
    }
    module.exports = win;
  }
});

// (disabled):node_modules/min-document/index.js
var require_min_document = __commonJS({
  "(disabled):node_modules/min-document/index.js"() {
  }
});

// node_modules/global/document.js
var require_document = __commonJS({
  "node_modules/global/document.js"(exports, module) {
    var topLevel = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {};
    var minDoc = require_min_document();
    var doccy;
    if (typeof document !== "undefined") {
      doccy = document;
    } else {
      doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"];
      if (!doccy) {
        doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"] = minDoc;
      }
    }
    module.exports = doccy;
  }
});

// public/scripts/videojs.ads.min.js
var require_videojs_ads_min = __commonJS({
  "public/scripts/videojs.ads.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require_video(), require_window(), require_document()) : "function" == typeof define && define.amd ? define(["video.js", "global/window", "global/document"], t) : (e = e || self).videojsContribAds = t(e.videojs, e.window, e.document);
    }(exports, function(e, t, n) {
      "use strict";
      e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
      var a = "6.9.0";
      var o = function(e2, t2) {
        t2.isImmediatePropagationStopped = function() {
          return true;
        }, t2.cancelBubble = true, t2.isPropagationStopped = function() {
          return true;
        };
      }, r = function(e2, t2, n2) {
        o(0, n2), e2.trigger({ type: t2 + n2.type, originalEvent: n2 });
      }, i = function(e2, t2) {
        e2.ads.isInAdMode() && (e2.ads.isContentResuming() ? e2.ads._contentEnding && r(e2, "content", t2) : r(e2, "ad", t2));
      }, s = function(e2, t2) {
        e2.ads.isInAdMode() ? e2.ads.isContentResuming() ? (o(0, t2), e2.trigger("resumeended")) : r(e2, "ad", t2) : e2.ads._contentHasEnded || e2.ads.stitchedAds() || (r(e2, "content", t2), e2.trigger("readyforpostroll"));
      }, d = function(e2, t2) {
        if (!("loadstart" === t2.type && !e2.ads._hasThereBeenALoadStartDuringPlayerLife || "loadeddata" === t2.type && !e2.ads._hasThereBeenALoadedData || "loadedmetadata" === t2.type && !e2.ads._hasThereBeenALoadedMetaData))
          if (e2.ads.inAdBreak())
            r(e2, "ad", t2);
          else {
            if (e2.currentSrc() !== e2.ads.contentSrc)
              return;
            r(e2, "content", t2);
          }
      }, l = function(e2, t2) {
        e2.ads.inAdBreak() ? r(e2, "ad", t2) : e2.ads.isContentResuming() && r(e2, "content", t2);
      };
      function u(e2) {
        "playing" === e2.type ? i(this, e2) : "ended" === e2.type ? s(this, e2) : "loadstart" === e2.type || "loadeddata" === e2.type || "loadedmetadata" === e2.type ? d(this, e2) : "play" === e2.type ? l(this, e2) : this.ads.isInAdMode() && (this.ads.isContentResuming() ? r(this, "content", e2) : r(this, "ad", e2));
      }
      var c = {}, f = function() {
        !function(n2) {
          if (e.dom.isInFrame() && "function" != typeof t.__tcfapi) {
            for (var a2, o2 = t, r2 = {}; o2; ) {
              try {
                if (o2.frames.__tcfapiLocator) {
                  a2 = o2;
                  break;
                }
              } catch (e2) {
              }
              if (o2 === t.top)
                break;
              o2 = o2.parent;
            }
            if (!a2)
              return;
            t.__tcfapi = function(e2, t2, n3, o3) {
              var i2 = Math.random() + "", s2 = { __tcfapiCall: { command: e2, parameter: o3, version: t2, callId: i2 } };
              r2[i2] = n3, a2.postMessage(s2, "*");
            }, t.addEventListener("message", function(e2) {
              var t2 = {};
              try {
                t2 = "string" == typeof e2.data ? JSON.parse(e2.data) : e2.data;
              } catch (e3) {
              }
              var n3 = t2.__tcfapiReturn;
              n3 && "function" == typeof r2[n3.callId] && (r2[n3.callId](n3.returnValue, n3.success), r2[n3.callId] = null);
            }, false);
          }
        }(), "function" == typeof t.__tcfapi && t.__tcfapi("addEventListener", 2, function(e2, t2) {
          t2 && (c = e2);
        });
      }, h = function(e2, t2) {
        return t2 ? encodeURIComponent(e2) : e2;
      }, p = function(e2, t2, n2) {
        if (e2 && e2[n2])
          for (var a2 = e2[n2], o2 = Object.keys(a2), r2 = 0; r2 < o2.length; r2++) {
            t2["{mediainfo." + n2 + "." + o2[r2] + "}"] = a2[o2[r2]];
          }
      };
      var g = { processMetadataTracks: function(e2, t2) {
        for (var n2 = e2.textTracks(), a2 = function(n3) {
          "metadata" === n3.kind && (e2.ads.cueTextTracks.setMetadataTrackMode(n3), t2(e2, n3));
        }, o2 = 0; o2 < n2.length; o2++)
          a2(n2[o2]);
        n2.addEventListener("addtrack", function(e3) {
          a2(e3.track);
        });
      }, setMetadataTrackMode: function(e2) {
      }, getSupportedAdCue: function(e2, t2) {
        return t2;
      }, isSupportedAdCue: function(e2, t2) {
        return true;
      }, getCueId: function(e2, t2) {
        return t2.id;
      } }, y = function(e2, t2) {
        return void 0 !== t2 && e2.ads.includedCues[t2];
      }, v = function(e2, t2) {
        void 0 !== t2 && "" !== t2 && (e2.ads.includedCues[t2] = true);
      };
      function m() {
        false !== this.ads._shouldBlockPlay && (this.paused() || (this.ads.debug("Playback was canceled by cancelContentPlay"), this.pause()), this.ads._cancelledPlay = true);
      }
      g.processAdTrack = function(t2, n2, a2, o2) {
        t2.ads.includedCues = {};
        for (var r2 = 0; r2 < n2.length; r2++) {
          var i2 = n2[r2], s2 = this.getSupportedAdCue(t2, i2);
          if (!this.isSupportedAdCue(t2, i2))
            return void e.log.warn("Skipping as this is not a supported ad cue.", i2);
          var d2 = this.getCueId(t2, i2), l2 = i2.startTime;
          if (y(t2, d2))
            return void e.log("Skipping ad already seen with ID " + d2);
          o2 && o2(t2, s2, d2, l2), a2(t2, s2, d2, l2), v(t2, d2);
        }
      };
      var A = {}, S = e;
      A.isMiddlewareMediatorSupported = function() {
        return !S.browser.IS_IOS && !S.browser.IS_ANDROID && !!(S.use && S.middleware && S.middleware.TERMINATOR);
      }, A.playMiddleware = function(t2) {
        return { setSource: function(e2, t3) {
          t3(null, e2);
        }, callPlay: function() {
          if (t2.ads && true === t2.ads._shouldBlockPlay)
            return t2.ads.debug("Using playMiddleware to block content playback"), t2.ads._playBlocked = true, S.middleware.TERMINATOR;
        }, play: function(n2, a2) {
          t2.ads && t2.ads._playBlocked && n2 ? (t2.ads.debug("Play call to Tech was terminated."), t2.trigger("play"), t2.addClass("vjs-has-started"), t2.ads._playBlocked = false) : a2 && a2.catch && a2.catch(function(n3) {
            "NotAllowedError" !== n3.name || e.browser.IS_SAFARI || t2.trigger("pause");
          });
        } };
      }, A.testHook = function(e2) {
        S = e2;
      };
      var _ = A.playMiddleware, P = A.isMiddlewareMediatorSupported, b = function() {
        if (e.getPlugin)
          return Boolean(e.getPlugin("ads"));
        var t2 = e.getComponent("Player");
        return Boolean(t2 && t2.prototype.ads);
      };
      var k = function() {
        function e2() {
        }
        return e2.getState = function(t2) {
          if (t2)
            return e2.states_ && e2.states_[t2] ? e2.states_[t2] : void 0;
        }, e2.registerState = function(t2, n2) {
          if ("string" != typeof t2 || !t2)
            throw new Error('Illegal state name, "' + t2 + '"; must be a non-empty string.');
          return e2.states_ || (e2.states_ = {}), e2.states_[t2] = n2, n2;
        }, e2;
      }(), C = function() {
        function t2(e2) {
          this.player = e2;
        }
        t2._getName = function() {
          return "Anonymous State";
        };
        var n2 = t2.prototype;
        return n2.transitionTo = function(e2) {
          var t3 = this.player;
          this.cleanup(t3);
          var n3 = new e2(t3);
          t3.ads._state = n3, t3.ads.debug(this.constructor._getName() + " -> " + n3.constructor._getName());
          for (var a2 = arguments.length, o2 = new Array(a2 > 1 ? a2 - 1 : 0), r2 = 1; r2 < a2; r2++)
            o2[r2 - 1] = arguments[r2];
          n3.init.apply(n3, [t3].concat(o2));
        }, n2.init = function() {
        }, n2.cleanup = function() {
        }, n2.onPlay = function() {
        }, n2.onPlaying = function() {
        }, n2.onEnded = function() {
        }, n2.onAdEnded = function() {
        }, n2.onAdsReady = function() {
          e.log.warn("Unexpected adsready event");
        }, n2.onAdsError = function() {
        }, n2.onAdsCanceled = function() {
        }, n2.onAdTimeout = function() {
        }, n2.onAdStarted = function() {
        }, n2.onContentChanged = function() {
        }, n2.onContentResumed = function() {
        }, n2.onReadyForPostroll = function() {
          e.log.warn("Unexpected readyforpostroll event");
        }, n2.onNoPreroll = function() {
        }, n2.onNoPostroll = function() {
        }, n2.startLinearAdMode = function() {
          e.log.warn("Unexpected startLinearAdMode invocation (State via " + this.constructor._getName() + ")");
        }, n2.endLinearAdMode = function() {
          e.log.warn("Unexpected endLinearAdMode invocation (State via " + this.constructor._getName() + ")");
        }, n2.skipLinearAdMode = function() {
          e.log.warn("Unexpected skipLinearAdMode invocation (State via " + this.constructor._getName() + ")");
        }, n2.isAdState = function() {
          throw new Error("isAdState unimplemented for " + this.constructor._getName());
        }, n2.isWaitingForAdBreak = function() {
          return false;
        }, n2.isContentResuming = function() {
          return false;
        }, n2.inAdBreak = function() {
          return false;
        }, n2.handleEvent = function(e2) {
          var t3 = this.player;
          "play" === e2 ? this.onPlay(t3) : "adsready" === e2 ? this.onAdsReady(t3) : "adserror" === e2 ? this.onAdsError(t3) : "adscanceled" === e2 ? this.onAdsCanceled(t3) : "adtimeout" === e2 ? this.onAdTimeout(t3) : "ads-ad-started" === e2 ? this.onAdStarted(t3) : "contentchanged" === e2 ? this.onContentChanged(t3) : "contentresumed" === e2 ? this.onContentResumed(t3) : "readyforpostroll" === e2 ? this.onReadyForPostroll(t3) : "playing" === e2 ? this.onPlaying(t3) : "ended" === e2 ? this.onEnded(t3) : "nopreroll" === e2 ? this.onNoPreroll(t3) : "nopostroll" === e2 ? this.onNoPostroll(t3) : "adended" === e2 && this.onAdEnded(t3);
        }, t2;
      }();
      function T(e2, t2) {
        e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2.__proto__ = t2;
      }
      k.registerState("State", C);
      var w = function(e2) {
        function t2(t3) {
          var n3;
          return (n3 = e2.call(this, t3) || this).contentResuming = false, n3.waitingForAdBreak = false, n3;
        }
        T(t2, e2);
        var n2 = t2.prototype;
        return n2.isAdState = function() {
          return true;
        }, n2.onPlaying = function() {
          var e3 = k.getState("ContentPlayback");
          this.contentResuming && this.transitionTo(e3);
        }, n2.onContentResumed = function() {
          var e3 = k.getState("ContentPlayback");
          this.contentResuming && this.transitionTo(e3);
        }, n2.isWaitingForAdBreak = function() {
          return this.waitingForAdBreak;
        }, n2.isContentResuming = function() {
          return this.contentResuming;
        }, n2.inAdBreak = function() {
          return true === this.player.ads._inLinearAdMode;
        }, t2;
      }(C);
      k.registerState("AdState", w);
      var R = function(e2) {
        function t2() {
          return e2.apply(this, arguments) || this;
        }
        T(t2, e2);
        var n2 = t2.prototype;
        return n2.isAdState = function() {
          return false;
        }, n2.onContentChanged = function(e3) {
          var t3 = k.getState("BeforePreroll"), n3 = k.getState("Preroll");
          e3.ads.debug("Received contentchanged event (ContentState)"), e3.paused() ? this.transitionTo(t3) : (this.transitionTo(n3, false), e3.pause(), e3.ads._pausedOnContentupdate = true);
        }, t2;
      }(C);
      k.registerState("ContentState", R);
      var L, B = function(t2) {
        function n2() {
          return t2.apply(this, arguments) || this;
        }
        T(n2, t2), n2._getName = function() {
          return "AdsDone";
        };
        var a2 = n2.prototype;
        return a2.init = function(e2) {
          e2.ads._contentHasEnded = true, e2.trigger("ended");
        }, a2.startLinearAdMode = function() {
          e.log.warn("Unexpected startLinearAdMode invocation (AdsDone)");
        }, n2;
      }(k.getState("ContentState"));
      k.registerState("AdsDone", B);
      var M = { start: function(t2) {
        t2.ads.debug("Starting ad break"), t2.ads._inLinearAdMode = true, t2.trigger("adstart"), t2.ads.shouldTakeSnapshots() && (t2.ads.snapshot = function(t3) {
          var n2;
          n2 = e.browser.IS_IOS && t3.ads.isLive(t3) && t3.seekable().length > 0 ? t3.currentTime() - t3.seekable().end(0) : t3.currentTime();
          var a2 = t3.$(".vjs-tech"), o2 = t3.textTracks ? t3.textTracks() : [], r2 = [], i2 = { ended: t3.ended(), currentSrc: t3.currentSrc(), sources: t3.currentSources(), src: t3.tech_.src(), currentTime: n2, type: t3.currentType() };
          a2 && (i2.style = a2.getAttribute("style"));
          for (var s2 = 0; s2 < o2.length; s2++) {
            var d2 = o2[s2];
            r2.push({ track: d2, mode: d2.mode }), d2.mode = "disabled";
          }
          return i2.suppressedTracks = r2, i2;
        }(t2)), t2.ads.shouldPlayContentBehindAd(t2) && (t2.ads.preAdVolume_ = t2.volume(), t2.volume(0)), t2.addClass("vjs-ad-playing"), t2.hasClass("vjs-live") && t2.removeClass("vjs-live"), t2.ads.removeNativePoster();
      }, end: function(t2, n2) {
        t2.ads.debug("Ending ad break"), void 0 === n2 && (n2 = function() {
        }), t2.ads.adType = null, t2.ads._inLinearAdMode = false, t2.trigger("adend"), t2.removeClass("vjs-ad-playing"), t2.ads.isLive(t2) && t2.addClass("vjs-live"), t2.ads.shouldTakeSnapshots() ? function(t3, n3) {
          var a2 = t3.ads.snapshot;
          if (void 0 === n3 && (n3 = function() {
          }), true === t3.ads.disableNextSnapshotRestore)
            return t3.ads.disableNextSnapshotRestore = false, delete t3.ads.snapshot, void n3();
          var o2, r2 = t3.$(".vjs-tech"), i2 = 20, s2 = a2.suppressedTracks, d2 = function() {
            for (var e2 = 0; e2 < s2.length; e2++)
              (o2 = s2[e2]).track.mode = o2.mode;
          }, l2 = function() {
            var n4;
            if (e.browser.IS_IOS && t3.ads.isLive(t3)) {
              if (a2.currentTime < 0 && (n4 = t3.seekable().length > 0 ? t3.seekable().end(0) + a2.currentTime : t3.currentTime(), t3.currentTime(n4)), t3.paused()) {
                var o3 = t3.play();
                o3 && o3.catch && o3.catch(function(t4) {
                  e.log.warn("Play promise rejected in IOS snapshot resume", t4);
                });
              }
            } else if (a2.ended)
              t3.currentTime(t3.duration());
            else {
              t3.currentTime(a2.currentTime);
              var r3 = t3.play();
              r3 && r3.catch && r3.catch(function(t4) {
                e.log.warn("Play promise rejected in snapshot resume", t4);
              });
            }
            t3.ads.shouldRemoveAutoplay_ && (t3.autoplay(false), t3.ads.shouldRemoveAutoplay_ = false);
          }, u2 = function n4() {
            if (t3.off("contentcanplay", n4), L && t3.clearTimeout(L), (r2 = t3.el().querySelector(".vjs-tech")).readyState > 1)
              return l2();
            if (void 0 === r2.seekable)
              return l2();
            if (r2.seekable.length > 0)
              return l2();
            if (i2--)
              t3.setTimeout(n4, 50);
            else
              try {
                l2();
              } catch (t4) {
                e.log.warn("Failed to resume the content after an advertisement", t4);
              }
          };
          if ("style" in a2 && r2.setAttribute("style", a2.style || ""), t3.ads.videoElementRecycled())
            t3.one("resumeended", function() {
              delete t3.ads.snapshot, n3();
            }), t3.one("contentloadedmetadata", d2), e.browser.IS_IOS && !t3.autoplay() && (t3.autoplay(true), t3.ads.shouldRemoveAutoplay_ = true), t3.src(a2.sources), t3.one("contentcanplay", u2), L = t3.setTimeout(u2, 2e3);
          else {
            if (d2(), !t3.ended()) {
              var c2 = t3.play();
              c2 && c2.catch && c2.catch(function(t4) {
                e.log.warn("Play promise rejected in snapshot restore", t4);
              });
            }
            delete t3.ads.snapshot, n3();
          }
        }(t2, n2) : (t2.volume(t2.ads.preAdVolume_), n2());
      } }, j = function(t2) {
        function n2() {
          return t2.apply(this, arguments) || this;
        }
        T(n2, t2), n2._getName = function() {
          return "Preroll";
        };
        var a2 = n2.prototype;
        return a2.init = function(e2, t3, n3) {
          if (this.waitingForAdBreak = true, e2.addClass("vjs-ad-loading"), n3 || e2.ads.nopreroll_)
            return this.resumeAfterNoPreroll(e2);
          var a3 = e2.ads.settings.timeout;
          "number" == typeof e2.ads.settings.prerollTimeout && (a3 = e2.ads.settings.prerollTimeout), this._timeout = e2.setTimeout(function() {
            e2.trigger("adtimeout");
          }, a3), t3 ? this.handleAdsReady() : this.adsReady = false;
        }, a2.onAdsReady = function(t3) {
          t3.ads.inAdBreak() ? e.log.warn("Unexpected adsready event (Preroll)") : (t3.ads.debug("Received adsready event (Preroll)"), this.handleAdsReady());
        }, a2.handleAdsReady = function() {
          this.adsReady = true, this.readyForPreroll();
        }, a2.afterLoadStart = function(e2) {
          var t3 = this.player;
          t3.ads._hasThereBeenALoadStartDuringPlayerLife ? e2() : (t3.ads.debug("Waiting for loadstart..."), t3.one("loadstart", function() {
            t3.ads.debug("Received loadstart event"), e2();
          }));
        }, a2.noPreroll = function() {
          var e2 = this;
          this.afterLoadStart(function() {
            e2.player.ads.debug("Skipping prerolls due to nopreroll event (Preroll)"), e2.resumeAfterNoPreroll(e2.player);
          });
        }, a2.readyForPreroll = function() {
          var e2 = this.player;
          this.afterLoadStart(function() {
            e2.ads.debug("Triggered readyforpreroll event (Preroll)"), e2.trigger("readyforpreroll");
          });
        }, a2.onAdsCanceled = function(e2) {
          var t3 = this;
          e2.ads.debug("adscanceled (Preroll)"), this.afterLoadStart(function() {
            t3.resumeAfterNoPreroll(e2);
          });
        }, a2.onAdsError = function(t3) {
          var n3 = this;
          e.log("adserror (Preroll)"), this.inAdBreak() ? t3.ads.endLinearAdMode() : this.afterLoadStart(function() {
            n3.resumeAfterNoPreroll(t3);
          });
        }, a2.startLinearAdMode = function() {
          var t3 = this.player;
          !this.adsReady || t3.ads.inAdBreak() || this.isContentResuming() ? e.log.warn("Unexpected startLinearAdMode invocation (Preroll)") : (this.clearTimeout(t3), t3.ads.adType = "preroll", this.waitingForAdBreak = false, M.start(t3), t3.ads._shouldBlockPlay = false);
        }, a2.onAdStarted = function(e2) {
          e2.removeClass("vjs-ad-loading");
        }, a2.endLinearAdMode = function() {
          var e2 = this.player;
          this.inAdBreak() && (e2.removeClass("vjs-ad-loading"), e2.addClass("vjs-ad-content-resuming"), this.contentResuming = true, M.end(e2));
        }, a2.skipLinearAdMode = function() {
          var t3 = this, n3 = this.player;
          n3.ads.inAdBreak() || this.isContentResuming() ? e.log.warn("Unexpected skipLinearAdMode invocation") : this.afterLoadStart(function() {
            n3.trigger("adskip"), n3.ads.debug("skipLinearAdMode (Preroll)"), t3.resumeAfterNoPreroll(n3);
          });
        }, a2.onAdTimeout = function(e2) {
          var t3 = this;
          this.afterLoadStart(function() {
            e2.ads.debug("adtimeout (Preroll)"), t3.resumeAfterNoPreroll(e2);
          });
        }, a2.onNoPreroll = function(t3) {
          t3.ads.inAdBreak() || this.isContentResuming() ? e.log.warn("Unexpected nopreroll event (Preroll)") : this.noPreroll();
        }, a2.resumeAfterNoPreroll = function(e2) {
          if (this.contentResuming = true, e2.ads._shouldBlockPlay = false, this.cleanupPartial(e2), e2.ads._playRequested || e2.ads._pausedOnContentupdate)
            if (e2.paused()) {
              e2.ads.debug("resumeAfterNoPreroll: attempting to resume playback (Preroll)");
              var t3 = e2.play();
              t3 && t3.then && t3.then(null, function(e3) {
              });
            } else
              e2.ads.debug("resumeAfterNoPreroll: already playing (Preroll)"), e2.trigger("play"), e2.trigger("playing");
        }, a2.cleanup = function(t3) {
          t3.ads._hasThereBeenALoadStartDuringPlayerLife || e.log.warn("Leaving Preroll state before loadstart event can cause issues."), this.cleanupPartial(t3);
        }, a2.cleanupPartial = function(e2) {
          e2.removeClass("vjs-ad-loading"), e2.removeClass("vjs-ad-content-resuming"), this.clearTimeout(e2);
        }, a2.clearTimeout = function(e2) {
          e2.clearTimeout(this._timeout), this._timeout = null;
        }, n2;
      }(k.getState("AdState"));
      k.registerState("Preroll", j);
      var I = function(e2) {
        function t2() {
          return e2.apply(this, arguments) || this;
        }
        T(t2, e2), t2._getName = function() {
          return "BeforePreroll";
        };
        var n2 = t2.prototype;
        return n2.init = function(e3) {
          this.adsReady = false, this.shouldResumeToContent = false, e3.ads._shouldBlockPlay = !e3.ads.settings.allowVjsAutoplay || !e3.autoplay();
        }, n2.onAdsReady = function(e3) {
          e3.ads.debug("Received adsready event (BeforePreroll)"), this.adsReady = true;
        }, n2.onPlay = function(e3) {
          var t3 = k.getState("Preroll");
          e3.ads.debug("Received play event (BeforePreroll)"), this.transitionTo(t3, this.adsReady, this.shouldResumeToContent);
        }, n2.onAdsCanceled = function(e3) {
          e3.ads.debug("adscanceled (BeforePreroll)"), this.shouldResumeToContent = true;
        }, n2.onAdsError = function() {
          this.player.ads.debug("adserror (BeforePreroll)"), this.shouldResumeToContent = true;
        }, n2.onNoPreroll = function() {
          this.player.ads.debug("Skipping prerolls due to nopreroll event (BeforePreroll)"), this.shouldResumeToContent = true;
        }, n2.skipLinearAdMode = function() {
          var e3 = this.player;
          e3.trigger("adskip"), e3.ads.debug("skipLinearAdMode (BeforePreroll)"), this.shouldResumeToContent = true;
        }, n2.onContentChanged = function() {
          this.init(this.player);
        }, t2;
      }(k.getState("ContentState"));
      k.registerState("BeforePreroll", I);
      var N = function(e2) {
        function t2() {
          return e2.apply(this, arguments) || this;
        }
        T(t2, e2), t2._getName = function() {
          return "Midroll";
        };
        var n2 = t2.prototype;
        return n2.init = function(e3) {
          e3.ads.adType = "midroll", M.start(e3), e3.addClass("vjs-ad-loading");
        }, n2.onAdStarted = function(e3) {
          e3.removeClass("vjs-ad-loading");
        }, n2.endLinearAdMode = function() {
          var e3 = this.player;
          this.inAdBreak() && (this.contentResuming = true, e3.addClass("vjs-ad-content-resuming"), e3.removeClass("vjs-ad-loading"), M.end(e3));
        }, n2.onAdsError = function(e3) {
          this.inAdBreak() && e3.ads.endLinearAdMode();
        }, n2.cleanup = function(e3) {
          e3.removeClass("vjs-ad-loading"), e3.removeClass("vjs-ad-content-resuming");
        }, t2;
      }(k.getState("AdState"));
      k.registerState("Midroll", N);
      var E = function(t2) {
        function n2() {
          return t2.apply(this, arguments) || this;
        }
        T(n2, t2), n2._getName = function() {
          return "Postroll";
        };
        var a2 = n2.prototype;
        return a2.init = function(e2) {
          if (this.waitingForAdBreak = true, e2.ads._contentEnding = true, e2.ads.nopostroll_) {
            this.resumeContent(e2);
            var t3 = k.getState("AdsDone");
            this.transitionTo(t3);
          } else {
            e2.addClass("vjs-ad-loading");
            var n3 = e2.ads.settings.timeout;
            "number" == typeof e2.ads.settings.postrollTimeout && (n3 = e2.ads.settings.postrollTimeout), this._postrollTimeout = e2.setTimeout(function() {
              e2.trigger("adtimeout");
            }, n3);
          }
        }, a2.startLinearAdMode = function() {
          var t3 = this.player;
          t3.ads.inAdBreak() || this.isContentResuming() ? e.log.warn("Unexpected startLinearAdMode invocation (Postroll)") : (t3.ads.adType = "postroll", t3.clearTimeout(this._postrollTimeout), this.waitingForAdBreak = false, M.start(t3));
        }, a2.onAdStarted = function(e2) {
          e2.removeClass("vjs-ad-loading");
        }, a2.endLinearAdMode = function() {
          var e2 = this, t3 = this.player, n3 = k.getState("AdsDone");
          this.inAdBreak() && (t3.removeClass("vjs-ad-loading"), this.resumeContent(t3), M.end(t3, function() {
            e2.transitionTo(n3);
          }));
        }, a2.skipLinearAdMode = function() {
          var t3 = this.player;
          t3.ads.inAdBreak() || this.isContentResuming() ? e.log.warn("Unexpected skipLinearAdMode invocation") : (t3.ads.debug("Postroll abort (skipLinearAdMode)"), t3.trigger("adskip"), this.abort(t3));
        }, a2.onAdTimeout = function(e2) {
          e2.ads.debug("Postroll abort (adtimeout)"), this.abort(e2);
        }, a2.onAdsError = function(e2) {
          e2.ads.debug("Postroll abort (adserror)"), e2.ads.inAdBreak() ? e2.ads.endLinearAdMode() : this.abort(e2);
        }, a2.onContentChanged = function(e2) {
          if (this.isContentResuming()) {
            var t3 = k.getState("BeforePreroll");
            this.transitionTo(t3);
          } else if (!this.inAdBreak()) {
            var n3 = k.getState("Preroll");
            this.transitionTo(n3);
          }
        }, a2.onNoPostroll = function(t3) {
          this.isContentResuming() || this.inAdBreak() ? e.log.warn("Unexpected nopostroll event (Postroll)") : this.abort(t3);
        }, a2.resumeContent = function(e2) {
          this.contentResuming = true, e2.addClass("vjs-ad-content-resuming");
        }, a2.abort = function(e2) {
          var t3 = k.getState("AdsDone");
          this.resumeContent(e2), e2.removeClass("vjs-ad-loading"), this.transitionTo(t3);
        }, a2.cleanup = function(e2) {
          e2.removeClass("vjs-ad-content-resuming"), e2.clearTimeout(this._postrollTimeout), e2.ads._contentEnding = false;
        }, n2;
      }(k.getState("AdState"));
      k.registerState("Postroll", E);
      var x = function(e2) {
        function t2() {
          return e2.apply(this, arguments) || this;
        }
        T(t2, e2), t2._getName = function() {
          return "ContentPlayback";
        };
        var n2 = t2.prototype;
        return n2.init = function(e3) {
          e3.ads._shouldBlockPlay = false;
        }, n2.onAdsReady = function(e3) {
          e3.ads.debug("Received adsready event (ContentPlayback)"), e3.ads.nopreroll_ || (e3.ads.debug("Triggered readyforpreroll event (ContentPlayback)"), e3.trigger("readyforpreroll"));
        }, n2.onReadyForPostroll = function(e3) {
          var t3 = k.getState("Postroll");
          e3.ads.debug("Received readyforpostroll event"), this.transitionTo(t3);
        }, n2.startLinearAdMode = function() {
          var e3 = k.getState("Midroll");
          this.transitionTo(e3);
        }, t2;
      }(k.getState("ContentState"));
      k.registerState("ContentPlayback", x);
      var D = function(e2) {
        function t2() {
          return e2.apply(this, arguments) || this;
        }
        T(t2, e2), t2._getName = function() {
          return "StitchedContentPlayback";
        };
        var n2 = t2.prototype;
        return n2.init = function() {
          this.player.ads._shouldBlockPlay = false;
        }, n2.onContentChanged = function() {
          this.player.ads.debug("Received contentchanged event (" + this.constructor._getName() + ")");
        }, n2.startLinearAdMode = function() {
          var e3 = k.getState("StitchedAdRoll");
          this.transitionTo(e3);
        }, t2;
      }(k.getState("ContentState"));
      k.registerState("StitchedContentPlayback", D);
      var O = function(e2) {
        function t2() {
          return e2.apply(this, arguments) || this;
        }
        T(t2, e2), t2._getName = function() {
          return "StitchedAdRoll";
        };
        var n2 = t2.prototype;
        return n2.init = function() {
          this.waitingForAdBreak = false, this.contentResuming = false, this.player.ads.adType = "stitched", M.start(this.player);
        }, n2.onPlaying = function() {
        }, n2.onContentResumed = function() {
        }, n2.onAdEnded = function() {
          this.endLinearAdMode(), this.player.trigger("ended");
        }, n2.endLinearAdMode = function() {
          var e3 = k.getState("StitchedContentPlayback");
          M.end(this.player), this.transitionTo(e3);
        }, t2;
      }(k.getState("AdState"));
      k.registerState("StitchedAdRoll", O);
      var F = A.isMiddlewareMediatorSupported, U = e.getTech("Html5").Events, V = { timeout: 5e3, prerollTimeout: void 0, postrollTimeout: void 0, debug: false, stitchedAds: false, contentIsLive: void 0, liveCuePoints: true, allowVjsAutoplay: e.options.normalizeAutoplay || false }, q = function(o2) {
        var r2 = this, i2 = e.mergeOptions(V, o2), s2 = [];
        U.concat(["firstplay", "loadedalldata"]).forEach(function(e2) {
          -1 === s2.indexOf(e2) && s2.push(e2);
        }), r2.on(s2, u), F() || function(t2, n2) {
          n2 && e.log("Using cancelContentPlay to block content playback"), t2.on("play", m);
        }(r2, i2.debug), r2.setTimeout(function() {
          r2.ads._hasThereBeenALoadStartDuringPlayerLife || "" === r2.src() || e.log.error("videojs-contrib-ads has not seen a loadstart event 5 seconds after being initialized, but a source is present. This indicates that videojs-contrib-ads was initialized too late. It must be initialized immediately after video.js in the same tick. As a result, some ads will not play and some media events will be incorrect. For more information, see http://videojs.github.io/videojs-contrib-ads/integrator/getting-started.html");
        }, 5e3), r2.on("ended", function() {
          r2.hasClass("vjs-has-started") || r2.addClass("vjs-has-started");
        }), r2.on("contenttimeupdate", function() {
          r2.removeClass("vjs-waiting");
        }), r2.on(["addurationchange", "adcanplay"], function() {
          if (!r2.ads.settings.stitchedAds && !r2.hasStarted() && (!r2.ads.snapshot || r2.currentSrc() !== r2.ads.snapshot.currentSrc) && r2.ads.inAdBreak()) {
            var t2 = r2.play();
            t2 && t2.catch && t2.catch(function(t3) {
              e.log.warn("Play promise rejected when playing ad", t3);
            });
          }
        }), r2.on("nopreroll", function() {
          r2.ads.debug("Received nopreroll event"), r2.ads.nopreroll_ = true;
        }), r2.on("nopostroll", function() {
          r2.ads.debug("Received nopostroll event"), r2.ads.nopostroll_ = true;
        }), r2.on("playing", function() {
          r2.ads._cancelledPlay = false, r2.ads._pausedOnContentupdate = false;
        }), r2.on("play", function() {
          r2.ads._playRequested = true;
        }), r2.one("loadstart", function() {
          r2.ads._hasThereBeenALoadStartDuringPlayerLife = true;
        }), r2.on("loadeddata", function() {
          r2.ads._hasThereBeenALoadedData = true;
        }), r2.on("loadedmetadata", function() {
          r2.ads._hasThereBeenALoadedMetaData = true;
        }), r2.ads = function(t2) {
          return { disableNextSnapshotRestore: false, _contentEnding: false, _contentHasEnded: false, _hasThereBeenALoadStartDuringPlayerLife: false, _hasThereBeenALoadedData: false, _hasThereBeenALoadedMetaData: false, _inLinearAdMode: false, _shouldBlockPlay: false, _playBlocked: false, _playRequested: false, adType: null, VERSION: a, reset: function() {
            t2.ads.disableNextSnapshotRestore = false, t2.ads._contentEnding = false, t2.ads._contentHasEnded = false, t2.ads.snapshot = null, t2.ads.adType = null, t2.ads._hasThereBeenALoadedData = false, t2.ads._hasThereBeenALoadedMetaData = false, t2.ads._cancelledPlay = false, t2.ads._shouldBlockPlay = false, t2.ads._playBlocked = false, t2.ads.nopreroll_ = false, t2.ads.nopostroll_ = false, t2.ads._playRequested = false;
          }, startLinearAdMode: function() {
            t2.ads._state.startLinearAdMode();
          }, endLinearAdMode: function() {
            t2.ads._state.endLinearAdMode();
          }, skipLinearAdMode: function() {
            t2.ads._state.skipLinearAdMode();
          }, stitchedAds: function(t3) {
            return void 0 !== t3 && (e.log.warn("Using player.ads.stitchedAds() as a setter is deprecated, it should be set as an option upon initialization of contrib-ads."), this.settings.stitchedAds = !!t3), this.settings.stitchedAds;
          }, videoElementRecycled: function() {
            if (t2.ads.shouldPlayContentBehindAd(t2))
              return false;
            if (!this.snapshot)
              throw new Error("You cannot use videoElementRecycled while there is no snapshot.");
            var e2 = t2.tech_.src() !== this.snapshot.src, n2 = t2.currentSrc() !== this.snapshot.currentSrc;
            return e2 || n2;
          }, isLive: function(n2) {
            return void 0 === n2 && (n2 = t2), "boolean" == typeof n2.ads.settings.contentIsLive ? n2.ads.settings.contentIsLive : n2.duration() === 1 / 0 || "8" === e.browser.IOS_VERSION && 0 === n2.duration();
          }, shouldPlayContentBehindAd: function(n2) {
            if (void 0 === n2 && (n2 = t2), n2)
              return !!n2.ads.settings.liveCuePoints && !e.browser.IS_IOS && !e.browser.IS_ANDROID && n2.duration() === 1 / 0;
            throw new Error("shouldPlayContentBehindAd requires a player as a param");
          }, shouldTakeSnapshots: function(e2) {
            return void 0 === e2 && (e2 = t2), !this.shouldPlayContentBehindAd(e2) && !this.stitchedAds();
          }, isInAdMode: function() {
            return this._state.isAdState();
          }, isWaitingForAdBreak: function() {
            return this._state.isWaitingForAdBreak();
          }, isContentResuming: function() {
            return this._state.isContentResuming();
          }, isAdPlaying: function() {
            return this._state.inAdBreak();
          }, inAdBreak: function() {
            return this._state.inAdBreak();
          }, removeNativePoster: function() {
            var e2 = t2.$(".vjs-tech");
            e2 && e2.removeAttribute("poster");
          }, debug: function() {
            if (this.settings.debug) {
              for (var t3 = arguments.length, n2 = new Array(t3), a2 = 0; a2 < t3; a2++)
                n2[a2] = arguments[a2];
              1 === n2.length && "string" == typeof n2[0] ? e.log("ADS: " + n2[0]) : e.log.apply(e, ["ADS:"].concat(n2));
            }
          } };
        }(r2), r2.ads.settings = i2, i2.stitchedAds = !!i2.stitchedAds, i2.stitchedAds ? r2.ads._state = new (k.getState("StitchedContentPlayback"))(r2) : r2.ads._state = new (k.getState("BeforePreroll"))(r2), r2.ads._state.init(r2), r2.ads.cueTextTracks = g, r2.ads.adMacroReplacement = function(a2, o3, r3) {
          var i3 = this, s3 = {};
          a2 = a2.replace(/{([^}=]+)=([^}]+)}/g, function(e2, t2, n2) {
            return s3["{" + t2 + "}"] = n2, "{" + t2 + "}";
          }), void 0 === o3 && (o3 = false);
          var d3 = {};
          for (var l2 in void 0 !== r3 && (d3 = r3), d3["{player.id}"] = this.options_["data-player"] || this.id_, d3["{player.height}"] = this.currentHeight(), d3["{player.width}"] = this.currentWidth(), d3["{mediainfo.id}"] = this.mediainfo ? this.mediainfo.id : "", d3["{mediainfo.name}"] = this.mediainfo ? this.mediainfo.name : "", d3["{mediainfo.duration}"] = this.mediainfo ? this.mediainfo.duration : "", d3["{player.duration}"] = this.duration(), d3["{player.pageUrl}"] = e.dom.isInFrame() ? n.referrer : t.location.href, d3["{playlistinfo.id}"] = this.playlistinfo ? this.playlistinfo.id : "", d3["{playlistinfo.name}"] = this.playlistinfo ? this.playlistinfo.name : "", d3["{timestamp}"] = new Date().getTime(), d3["{document.referrer}"] = n.referrer, d3["{window.location.href}"] = t.location.href, d3["{random}"] = Math.floor(1e12 * Math.random()), ["description", "tags", "reference_id", "ad_keys"].forEach(function(e2) {
            i3.mediainfo && i3.mediainfo[e2] ? d3["{mediainfo." + e2 + "}"] = i3.mediainfo[e2] : s3["{mediainfo." + e2 + "}"] ? d3["{mediainfo." + e2 + "}"] = s3["{mediainfo." + e2 + "}"] : d3["{mediainfo." + e2 + "}"] = "";
          }), p(this.mediainfo, d3, "custom_fields"), p(this.mediainfo, d3, "customFields"), Object.keys(c).forEach(function(e2) {
            d3["{tcf." + e2 + "}"] = c[e2];
          }), d3["{tcf.gdprAppliesInt}"] = c.gdprApplies ? 1 : 0, d3)
            a2 = a2.split(l2).join(h(d3[l2], o3));
          for (var u2 in a2 = a2.replace(/{pageVariable\.([^}]+)}/g, function(n2, a3) {
            for (var r4, i4 = t, d4 = a3.split("."), l3 = 0; l3 < d4.length; l3++)
              l3 === d4.length - 1 ? r4 = i4[d4[l3]] : i4 = i4[d4[l3]];
            var u3 = typeof r4;
            return null === r4 ? "null" : void 0 === r4 ? s3["{pageVariable." + a3 + "}"] ? s3["{pageVariable." + a3 + "}"] : (e.log.warn('Page variable "' + a3 + '" not found'), "") : "string" !== u3 && "number" !== u3 && "boolean" !== u3 ? (e.log.warn('Page variable "' + a3 + '" is not a supported type'), "") : h(String(r4), o3);
          }), s3)
            a2 = a2.replace(u2, s3[u2]);
          return a2;
        }.bind(r2), function(e2) {
          e2.ads.contentSrc = e2.currentSrc(), e2.ads._seenInitialLoadstart = false, e2.on("loadstart", function() {
            if (!e2.ads.inAdBreak()) {
              var t2 = e2.currentSrc();
              t2 !== e2.ads.contentSrc && (e2.ads._seenInitialLoadstart && e2.trigger({ type: "contentchanged" }), e2.trigger({ type: "contentupdate", oldValue: e2.ads.contentSrc, newValue: t2 }), e2.ads.contentSrc = t2), e2.ads._seenInitialLoadstart = true;
            }
          });
        }(r2), r2.on("contentchanged", r2.ads.reset);
        var d2 = function() {
          var t2 = r2.textTracks();
          if (!r2.ads.shouldPlayContentBehindAd(r2) && r2.ads.inAdBreak() && r2.tech_.featuresNativeTextTracks && e.browser.IS_IOS && !Array.isArray(r2.textTracks()))
            for (var n2 = 0; n2 < t2.length; n2++) {
              var a2 = t2[n2];
              "showing" === a2.mode && (a2.mode = "disabled");
            }
        };
        r2.ready(function() {
          r2.textTracks().addEventListener("change", d2);
        }), r2.on(["play", "playing", "ended", "adsready", "adscanceled", "adskip", "adserror", "adtimeout", "adended", "ads-ad-started", "contentchanged", "dispose", "contentresumed", "readyforpostroll", "nopreroll", "nopostroll"], function(e2) {
          r2.ads._state.handleEvent(e2.type);
        }), r2.on("dispose", function() {
          r2.ads.reset(), r2.textTracks().removeEventListener("change", d2);
        }), f(), r2.ads.listenToTcf = f;
      };
      return q.VERSION = a, function(t2) {
        !b(e) && ((e.registerPlugin || e.plugin)("ads", t2), P() && !e.usingContribAdsMiddleware_ && (e.use("*", _), e.usingContribAdsMiddleware_ = true, e.log.debug("Play middleware has been registered with videojs")));
      }(q), q;
    });
  }
});

// public/scripts/videojsx.vast.js
var require_videojsx_vast = __commonJS({
  "public/scripts/videojsx.vast.js"() {
    (() => {
      var e = { 248: function(e2, t2) {
        !function(e3) {
          "use strict";
          function t3(e4, t4) {
            var i3 = Object.keys(e4);
            if (Object.getOwnPropertySymbols) {
              var r2 = Object.getOwnPropertySymbols(e4);
              t4 && (r2 = r2.filter(function(t5) {
                return Object.getOwnPropertyDescriptor(e4, t5).enumerable;
              })), i3.push.apply(i3, r2);
            }
            return i3;
          }
          function i2(e4) {
            for (var i3 = 1; i3 < arguments.length; i3++) {
              var r2 = null != arguments[i3] ? arguments[i3] : {};
              i3 % 2 ? t3(Object(r2), true).forEach(function(t4) {
                s(e4, t4, r2[t4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r2)) : t3(Object(r2)).forEach(function(t4) {
                Object.defineProperty(e4, t4, Object.getOwnPropertyDescriptor(r2, t4));
              });
            }
            return e4;
          }
          function r(e4) {
            return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
              return typeof e5;
            } : function(e5) {
              return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
            }, r(e4);
          }
          function n(e4, t4) {
            if (!(e4 instanceof t4))
              throw new TypeError("Cannot call a class as a function");
          }
          function a(e4, t4) {
            for (var i3 = 0; i3 < t4.length; i3++) {
              var r2 = t4[i3];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e4, r2.key, r2);
            }
          }
          function o(e4, t4, i3) {
            return t4 && a(e4.prototype, t4), i3 && a(e4, i3), Object.defineProperty(e4, "prototype", { writable: false }), e4;
          }
          function s(e4, t4, i3) {
            return t4 in e4 ? Object.defineProperty(e4, t4, { value: i3, enumerable: true, configurable: true, writable: true }) : e4[t4] = i3, e4;
          }
          function l(e4, t4) {
            if ("function" != typeof t4 && null !== t4)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t4 && u(e4, t4);
          }
          function c(e4) {
            return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e5) {
              return e5.__proto__ || Object.getPrototypeOf(e5);
            }, c(e4);
          }
          function u(e4, t4) {
            return u = Object.setPrototypeOf || function(e5, t5) {
              return e5.__proto__ = t5, e5;
            }, u(e4, t4);
          }
          function d(e4, t4) {
            if (t4 && ("object" == typeof t4 || "function" == typeof t4))
              return t4;
            if (void 0 !== t4)
              throw new TypeError("Derived constructors may only return object or undefined");
            return function(e5) {
              if (void 0 === e5)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e5;
            }(e4);
          }
          function p(e4) {
            var t4 = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (e5) {
                return false;
              }
            }();
            return function() {
              var i3, r2 = c(e4);
              if (t4) {
                var n2 = c(this).constructor;
                i3 = Reflect.construct(r2, arguments, n2);
              } else
                i3 = r2.apply(this, arguments);
              return d(this, i3);
            };
          }
          function h(e4) {
            return function(e5) {
              if (Array.isArray(e5))
                return f(e5);
            }(e4) || function(e5) {
              if ("undefined" != typeof Symbol && null != e5[Symbol.iterator] || null != e5["@@iterator"])
                return Array.from(e5);
            }(e4) || function(e5, t4) {
              if (e5) {
                if ("string" == typeof e5)
                  return f(e5, t4);
                var i3 = Object.prototype.toString.call(e5).slice(8, -1);
                return "Object" === i3 && e5.constructor && (i3 = e5.constructor.name), "Map" === i3 || "Set" === i3 ? Array.from(e5) : "Arguments" === i3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i3) ? f(e5, t4) : void 0;
              }
            }(e4) || function() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function f(e4, t4) {
            (null == t4 || t4 > e4.length) && (t4 = e4.length);
            for (var i3 = 0, r2 = new Array(t4); i3 < t4; i3++)
              r2[i3] = e4[i3];
            return r2;
          }
          function m() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return { id: e4.id || null, adId: e4.adId || null, sequence: e4.sequence || null, apiFramework: e4.apiFramework || null, universalAdIds: [], creativeExtensions: [] };
          }
          var v = ["ADCATEGORIES", "ADCOUNT", "ADPLAYHEAD", "ADSERVINGID", "ADTYPE", "APIFRAMEWORKS", "APPBUNDLE", "ASSETURI", "BLOCKEDADCATEGORIES", "BREAKMAXADLENGTH", "BREAKMAXADS", "BREAKMAXDURATION", "BREAKMINADLENGTH", "BREAKMINDURATION", "BREAKPOSITION", "CLICKPOS", "CLICKTYPE", "CLIENTUA", "CONTENTID", "CONTENTPLAYHEAD", "CONTENTURI", "DEVICEIP", "DEVICEUA", "DOMAIN", "EXTENSIONS", "GDPRCONSENT", "IFA", "IFATYPE", "INVENTORYSTATE", "LATLONG", "LIMITADTRACKING", "MEDIAMIME", "MEDIAPLAYHEAD", "OMIDPARTNER", "PAGEURL", "PLACEMENTTYPE", "PLAYERCAPABILITIES", "PLAYERSIZE", "PLAYERSTATE", "PODSEQUENCE", "REGULATIONS", "SERVERSIDE", "SERVERUA", "TRANSACTIONID", "UNIVERSALADID", "VASTVERSIONS", "VERIFICATIONVENDORS"];
          function g(e4) {
            var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = [], n2 = T(e4);
            for (var a2 in !t4.ERRORCODE || i3.isCustomCode || /^[0-9]{3}$/.test(t4.ERRORCODE) || (t4.ERRORCODE = 900), t4.CACHEBUSTING = R(Math.round(1e8 * Math.random())), t4.TIMESTAMP = new Date().toISOString(), t4.RANDOM = t4.random = t4.CACHEBUSTING, t4)
              t4[a2] = E(t4[a2]);
            for (var o2 in n2) {
              var s2 = n2[o2];
              "string" == typeof s2 && r2.push(y(s2, t4));
            }
            return r2;
          }
          function y(e4, t4) {
            var i3 = (e4 = A(e4, t4)).match(/[^[\]]+(?=])/g);
            if (!i3)
              return e4;
            var r2 = i3.filter(function(e5) {
              return v.indexOf(e5) > -1;
            });
            return 0 === r2.length ? e4 : A(e4, r2 = r2.reduce(function(e5, t5) {
              return e5[t5] = -1, e5;
            }, {}));
          }
          function A(e4, t4) {
            var i3 = e4;
            for (var r2 in t4) {
              var n2 = t4[r2];
              i3 = i3.replace(new RegExp("(?:\\[|%%)(".concat(r2, ")(?:\\]|%%)"), "g"), n2);
            }
            return i3;
          }
          function T(e4) {
            return Array.isArray(e4) ? e4.map(function(e5) {
              return e5 && e5.hasOwnProperty("url") ? e5.url : e5;
            }) : e4;
          }
          function k(e4, t4) {
            for (var i3 = 0; i3 < t4.length; i3++)
              if (b(t4[i3], e4))
                return true;
            return false;
          }
          function b(e4, t4) {
            if (e4 && t4) {
              var i3 = Object.getOwnPropertyNames(e4), r2 = Object.getOwnPropertyNames(t4);
              return i3.length === r2.length && e4.id === t4.id && e4.url === t4.url;
            }
            return false;
          }
          function E(e4) {
            return encodeURIComponent(e4).replace(/[!'()*]/g, function(e5) {
              return "%".concat(e5.charCodeAt(0).toString(16));
            });
          }
          function R(e4) {
            var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
            return e4.toString().padStart(t4, "0");
          }
          var w = { track: function(e4, t4, i3) {
            g(e4, t4, i3).forEach(function(e5) {
              "undefined" != typeof window && null !== window && (new Image().src = e5);
            });
          }, resolveURLTemplates: g, extractURLsFromTemplates: T, containsTemplateObject: k, isTemplateObjectEqual: b, encodeURIComponentRFC3986: E, replaceUrlMacros: y, isNumeric: function(e4) {
            return !isNaN(parseFloat(e4)) && isFinite(e4);
          }, flatten: function e4(t4) {
            return t4.reduce(function(t5, i3) {
              return t5.concat(Array.isArray(i3) ? e4(i3) : i3);
            }, []);
          }, joinArrayOfUniqueTemplateObjs: function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i3 = Array.isArray(e4) ? e4 : [], r2 = Array.isArray(t4) ? t4 : [];
            return i3.concat(r2).reduce(function(e5, t5) {
              return k(t5, e5) || e5.push(t5), e5;
            }, []);
          }, isValidTimeValue: function(e4) {
            return Number.isFinite(e4) && e4 >= -2;
          }, addLeadingZeros: R };
          function N(e4) {
            return -1 !== ["true", "TRUE", "True", "1"].indexOf(e4);
          }
          var C = { childByName: function(e4, t4) {
            var i3 = e4.childNodes;
            for (var r2 in i3) {
              var n2 = i3[r2];
              if (n2.nodeName === t4)
                return n2;
            }
          }, childrenByName: function(e4, t4) {
            var i3 = [], r2 = e4.childNodes;
            for (var n2 in r2) {
              var a2 = r2[n2];
              a2.nodeName === t4 && i3.push(a2);
            }
            return i3;
          }, resolveVastAdTagURI: function(e4, t4) {
            if (!t4)
              return e4;
            if (0 === e4.indexOf("//")) {
              var i3 = location.protocol;
              return "".concat(i3).concat(e4);
            }
            if (-1 === e4.indexOf("://")) {
              var r2 = t4.slice(0, t4.lastIndexOf("/"));
              return "".concat(r2, "/").concat(e4);
            }
            return e4;
          }, parseBoolean: N, parseNodeText: function(e4) {
            return e4 && (e4.textContent || e4.text || "").trim();
          }, copyNodeAttribute: function(e4, t4, i3) {
            var r2 = t4.getAttribute(e4);
            r2 && i3.setAttribute(e4, r2);
          }, parseAttributes: function(e4) {
            for (var t4 = e4.attributes, i3 = {}, r2 = 0; r2 < t4.length; r2++)
              i3[t4[r2].nodeName] = t4[r2].nodeValue;
            return i3;
          }, parseDuration: function(e4) {
            if (null == e4)
              return -1;
            if (w.isNumeric(e4))
              return parseInt(e4);
            var t4 = e4.split(":");
            if (3 !== t4.length)
              return -1;
            var i3 = t4[2].split("."), r2 = parseInt(i3[0]);
            2 === i3.length && (r2 += parseFloat("0.".concat(i3[1])));
            var n2 = parseInt(60 * t4[1]), a2 = parseInt(60 * t4[0] * 60);
            return isNaN(a2) || isNaN(n2) || isNaN(r2) || n2 > 3600 || r2 > 60 ? -1 : a2 + n2 + r2;
          }, splitVAST: function(e4) {
            var t4 = [], i3 = null;
            return e4.forEach(function(r2, n2) {
              if (r2.sequence && (r2.sequence = parseInt(r2.sequence, 10)), r2.sequence > 1) {
                var a2 = e4[n2 - 1];
                if (a2 && a2.sequence === r2.sequence - 1)
                  return void (i3 && i3.push(r2));
                delete r2.sequence;
              }
              i3 = [r2], t4.push(i3);
            }), t4;
          }, assignAttributes: function(e4, t4) {
            if (e4)
              for (var i3 in e4) {
                var r2 = e4[i3];
                if (r2.nodeName && r2.nodeValue && t4.hasOwnProperty(r2.nodeName)) {
                  var n2 = r2.nodeValue;
                  "boolean" == typeof t4[r2.nodeName] && (n2 = N(n2)), t4[r2.nodeName] = n2;
                }
              }
          }, mergeWrapperAdData: function(e4, t4) {
            e4.errorURLTemplates = t4.errorURLTemplates.concat(e4.errorURLTemplates), e4.impressionURLTemplates = t4.impressionURLTemplates.concat(e4.impressionURLTemplates), e4.extensions = t4.extensions.concat(e4.extensions), t4.viewableImpression.length > 0 && (e4.viewableImpression = [].concat(h(e4.viewableImpression), h(t4.viewableImpression))), e4.followAdditionalWrappers = t4.followAdditionalWrappers, e4.allowMultipleAds = t4.allowMultipleAds, e4.fallbackOnNoAd = t4.fallbackOnNoAd;
            var i3 = (t4.creatives || []).filter(function(e5) {
              return e5 && "companion" === e5.type;
            }), r2 = i3.reduce(function(e5, t5) {
              return (t5.variations || []).forEach(function(t6) {
                (t6.companionClickTrackingURLTemplates || []).forEach(function(t7) {
                  w.containsTemplateObject(t7, e5) || e5.push(t7);
                });
              }), e5;
            }, []);
            e4.creatives = i3.concat(e4.creatives);
            var n2 = t4.videoClickTrackingURLTemplates && t4.videoClickTrackingURLTemplates.length, a2 = t4.videoCustomClickURLTemplates && t4.videoCustomClickURLTemplates.length;
            e4.creatives.forEach(function(e5) {
              if (t4.trackingEvents && t4.trackingEvents[e5.type])
                for (var i4 in t4.trackingEvents[e5.type]) {
                  var o2 = t4.trackingEvents[e5.type][i4];
                  Array.isArray(e5.trackingEvents[i4]) || (e5.trackingEvents[i4] = []), e5.trackingEvents[i4] = e5.trackingEvents[i4].concat(o2);
                }
              "linear" === e5.type && (n2 && (e5.videoClickTrackingURLTemplates = e5.videoClickTrackingURLTemplates.concat(t4.videoClickTrackingURLTemplates)), a2 && (e5.videoCustomClickURLTemplates = e5.videoCustomClickURLTemplates.concat(t4.videoCustomClickURLTemplates)), !t4.videoClickThroughURLTemplate || null !== e5.videoClickThroughURLTemplate && void 0 !== e5.videoClickThroughURLTemplate || (e5.videoClickThroughURLTemplate = t4.videoClickThroughURLTemplate)), "companion" === e5.type && r2.length && (e5.variations || []).forEach(function(e6) {
                e6.companionClickTrackingURLTemplates = w.joinArrayOfUniqueTemplateObjs(e6.companionClickTrackingURLTemplates, r2);
              });
            }), t4.adVerifications && (e4.adVerifications = e4.adVerifications.concat(t4.adVerifications)), t4.blockedAdCategories && (e4.blockedAdCategories = e4.blockedAdCategories.concat(t4.blockedAdCategories));
          } };
          function L(e4, t4) {
            var i3 = function() {
              var e5 = m(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
              return { id: e5.id, adId: e5.adId, sequence: e5.sequence, apiFramework: e5.apiFramework, type: "companion", required: null, variations: [] };
            }(t4);
            return i3.required = e4.getAttribute("required") || null, i3.variations = C.childrenByName(e4, "Companion").map(function(e5) {
              var t5 = function() {
                var e6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return { id: e6.id || null, adType: "companionAd", width: e6.width || 0, height: e6.height || 0, assetWidth: e6.assetWidth || null, assetHeight: e6.assetHeight || null, expandedWidth: e6.expandedWidth || null, expandedHeight: e6.expandedHeight || null, apiFramework: e6.apiFramework || null, adSlotID: e6.adSlotID || null, pxratio: e6.pxratio || "1", renderingMode: e6.renderingMode || "default", staticResources: [], htmlResources: [], iframeResources: [], adParameters: null, xmlEncoded: null, altText: null, companionClickThroughURLTemplate: null, companionClickTrackingURLTemplates: [], trackingEvents: {} };
              }(C.parseAttributes(e5));
              t5.htmlResources = C.childrenByName(e5, "HTMLResource").reduce(function(e6, t6) {
                var i5 = C.parseNodeText(t6);
                return i5 ? e6.concat(i5) : e6;
              }, []), t5.iframeResources = C.childrenByName(e5, "IFrameResource").reduce(function(e6, t6) {
                var i5 = C.parseNodeText(t6);
                return i5 ? e6.concat(i5) : e6;
              }, []), t5.staticResources = C.childrenByName(e5, "StaticResource").reduce(function(e6, t6) {
                var i5 = C.parseNodeText(t6);
                return i5 ? e6.concat({ url: i5, creativeType: t6.getAttribute("creativeType") || null }) : e6;
              }, []), t5.altText = C.parseNodeText(C.childByName(e5, "AltText")) || null;
              var i4 = C.childByName(e5, "TrackingEvents");
              i4 && C.childrenByName(i4, "Tracking").forEach(function(e6) {
                var i5 = e6.getAttribute("event"), r3 = C.parseNodeText(e6);
                i5 && r3 && (Array.isArray(t5.trackingEvents[i5]) || (t5.trackingEvents[i5] = []), t5.trackingEvents[i5].push(r3));
              }), t5.companionClickTrackingURLTemplates = C.childrenByName(e5, "CompanionClickTracking").map(function(e6) {
                return { id: e6.getAttribute("id") || null, url: C.parseNodeText(e6) };
              }), t5.companionClickThroughURLTemplate = C.parseNodeText(C.childByName(e5, "CompanionClickThrough")) || null;
              var r2 = C.childByName(e5, "AdParameters");
              return r2 && (t5.adParameters = C.parseNodeText(r2), t5.xmlEncoded = r2.getAttribute("xmlEncoded") || null), t5;
            }), i3;
          }
          function I(e4) {
            return "linear" === e4.type;
          }
          function U(e4, t4) {
            var i3, r2 = function() {
              var e5 = m(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
              return { id: e5.id, adId: e5.adId, sequence: e5.sequence, apiFramework: e5.apiFramework, type: "linear", duration: 0, skipDelay: null, mediaFiles: [], mezzanine: null, interactiveCreativeFile: null, closedCaptionFiles: [], videoClickThroughURLTemplate: null, videoClickTrackingURLTemplates: [], videoCustomClickURLTemplates: [], adParameters: null, icons: [], trackingEvents: {} };
            }(t4);
            r2.duration = C.parseDuration(C.parseNodeText(C.childByName(e4, "Duration")));
            var n2 = e4.getAttribute("skipoffset");
            if (null == n2)
              r2.skipDelay = null;
            else if ("%" === n2.charAt(n2.length - 1) && -1 !== r2.duration) {
              var a2 = parseInt(n2, 10);
              r2.skipDelay = r2.duration * (a2 / 100);
            } else
              r2.skipDelay = C.parseDuration(n2);
            var o2 = C.childByName(e4, "VideoClicks");
            if (o2) {
              var s2 = C.childByName(o2, "ClickThrough");
              r2.videoClickThroughURLTemplate = s2 ? { id: s2.getAttribute("id") || null, url: C.parseNodeText(s2) } : null, C.childrenByName(o2, "ClickTracking").forEach(function(e5) {
                r2.videoClickTrackingURLTemplates.push({ id: e5.getAttribute("id") || null, url: C.parseNodeText(e5) });
              }), C.childrenByName(o2, "CustomClick").forEach(function(e5) {
                r2.videoCustomClickURLTemplates.push({ id: e5.getAttribute("id") || null, url: C.parseNodeText(e5) });
              });
            }
            var l2 = C.childByName(e4, "AdParameters");
            l2 && (r2.adParameters = C.parseNodeText(l2)), C.childrenByName(e4, "TrackingEvents").forEach(function(e5) {
              C.childrenByName(e5, "Tracking").forEach(function(e6) {
                var t5 = e6.getAttribute("event"), n3 = C.parseNodeText(e6);
                if (t5 && n3) {
                  if ("progress" === t5) {
                    if (!(i3 = e6.getAttribute("offset")))
                      return;
                    t5 = "%" === i3.charAt(i3.length - 1) ? "progress-".concat(i3) : "progress-".concat(Math.round(C.parseDuration(i3)));
                  }
                  Array.isArray(r2.trackingEvents[t5]) || (r2.trackingEvents[t5] = []), r2.trackingEvents[t5].push(n3);
                }
              });
            }), C.childrenByName(e4, "MediaFiles").forEach(function(e5) {
              C.childrenByName(e5, "MediaFile").forEach(function(e6) {
                r2.mediaFiles.push(function(e7) {
                  var t6 = { id: null, fileURL: null, fileSize: 0, deliveryType: "progressive", mimeType: null, mediaType: null, codec: null, bitrate: 0, minBitrate: 0, maxBitrate: 0, width: 0, height: 0, apiFramework: null, scalable: null, maintainAspectRatio: null };
                  t6.id = e7.getAttribute("id"), t6.fileURL = C.parseNodeText(e7), t6.deliveryType = e7.getAttribute("delivery"), t6.codec = e7.getAttribute("codec"), t6.mimeType = e7.getAttribute("type"), t6.mediaType = e7.getAttribute("mediaType") || "2D", t6.apiFramework = e7.getAttribute("apiFramework"), t6.fileSize = parseInt(e7.getAttribute("fileSize") || 0), t6.bitrate = parseInt(e7.getAttribute("bitrate") || 0), t6.minBitrate = parseInt(e7.getAttribute("minBitrate") || 0), t6.maxBitrate = parseInt(e7.getAttribute("maxBitrate") || 0), t6.width = parseInt(e7.getAttribute("width") || 0), t6.height = parseInt(e7.getAttribute("height") || 0);
                  var i5 = e7.getAttribute("scalable");
                  i5 && "string" == typeof i5 && (t6.scalable = C.parseBoolean(i5));
                  var r3 = e7.getAttribute("maintainAspectRatio");
                  return r3 && "string" == typeof r3 && (t6.maintainAspectRatio = C.parseBoolean(r3)), t6;
                }(e6));
              });
              var t5 = C.childByName(e5, "InteractiveCreativeFile");
              t5 && (r2.interactiveCreativeFile = function(e6) {
                var t6 = function() {
                  var e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return { type: e7.type || null, apiFramework: e7.apiFramework || null, variableDuration: C.parseBoolean(e7.variableDuration), fileURL: null };
                }(C.parseAttributes(e6));
                return t6.fileURL = C.parseNodeText(e6), t6;
              }(t5));
              var i4 = C.childByName(e5, "ClosedCaptionFiles");
              i4 && C.childrenByName(i4, "ClosedCaptionFile").forEach(function(e6) {
                var t6 = function() {
                  var e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return { type: e7.type || null, language: e7.language || null, fileURL: null };
                }(C.parseAttributes(e6));
                t6.fileURL = C.parseNodeText(e6), r2.closedCaptionFiles.push(t6);
              });
              var n3, a3, o3, s3 = C.childByName(e5, "Mezzanine"), l3 = (n3 = s3, a3 = {}, o3 = false, ["delivery", "type", "width", "height"].forEach(function(e6) {
                n3 && n3.getAttribute(e6) ? a3[e6] = n3.getAttribute(e6) : o3 = true;
              }), o3 ? null : a3);
              if (l3) {
                var c3 = { id: null, fileURL: null, delivery: null, codec: null, type: null, width: 0, height: 0, fileSize: 0, mediaType: "2D" };
                c3.id = s3.getAttribute("id"), c3.fileURL = C.parseNodeText(s3), c3.delivery = l3.delivery, c3.codec = s3.getAttribute("codec"), c3.type = l3.type, c3.width = parseInt(l3.width, 10), c3.height = parseInt(l3.height, 10), c3.fileSize = parseInt(s3.getAttribute("fileSize"), 10), c3.mediaType = s3.getAttribute("mediaType") || "2D", r2.mezzanine = c3;
              }
            });
            var c2 = C.childByName(e4, "Icons");
            return c2 && C.childrenByName(c2, "Icon").forEach(function(e5) {
              r2.icons.push(function(e6) {
                var t5 = { program: null, height: 0, width: 0, xPosition: 0, yPosition: 0, apiFramework: null, offset: null, duration: 0, type: null, staticResource: null, htmlResource: null, iframeResource: null, pxratio: "1", iconClickThroughURLTemplate: null, iconClickTrackingURLTemplates: [], iconViewTrackingURLTemplate: null };
                t5.program = e6.getAttribute("program"), t5.height = parseInt(e6.getAttribute("height") || 0), t5.width = parseInt(e6.getAttribute("width") || 0), t5.xPosition = function(e7) {
                  return -1 !== ["left", "right"].indexOf(e7) ? e7 : parseInt(e7 || 0);
                }(e6.getAttribute("xPosition")), t5.yPosition = function(e7) {
                  return -1 !== ["top", "bottom"].indexOf(e7) ? e7 : parseInt(e7 || 0);
                }(e6.getAttribute("yPosition")), t5.apiFramework = e6.getAttribute("apiFramework"), t5.pxratio = e6.getAttribute("pxratio") || "1", t5.offset = C.parseDuration(e6.getAttribute("offset")), t5.duration = C.parseDuration(e6.getAttribute("duration")), C.childrenByName(e6, "HTMLResource").forEach(function(e7) {
                  t5.type = e7.getAttribute("creativeType") || "text/html", t5.htmlResource = C.parseNodeText(e7);
                }), C.childrenByName(e6, "IFrameResource").forEach(function(e7) {
                  t5.type = e7.getAttribute("creativeType") || 0, t5.iframeResource = C.parseNodeText(e7);
                }), C.childrenByName(e6, "StaticResource").forEach(function(e7) {
                  t5.type = e7.getAttribute("creativeType") || 0, t5.staticResource = C.parseNodeText(e7);
                });
                var i4 = C.childByName(e6, "IconClicks");
                return i4 && (t5.iconClickThroughURLTemplate = C.parseNodeText(C.childByName(i4, "IconClickThrough")), C.childrenByName(i4, "IconClickTracking").forEach(function(e7) {
                  t5.iconClickTrackingURLTemplates.push({ id: e7.getAttribute("id") || null, url: C.parseNodeText(e7) });
                })), t5.iconViewTrackingURLTemplate = C.parseNodeText(C.childByName(e6, "IconViewTracking")), t5;
              }(e5));
            }), r2;
          }
          function S(e4, t4) {
            var i3 = function() {
              var e5 = m(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
              return { id: e5.id, adId: e5.adId, sequence: e5.sequence, apiFramework: e5.apiFramework, type: "nonlinear", variations: [], trackingEvents: {} };
            }(t4);
            return C.childrenByName(e4, "TrackingEvents").forEach(function(e5) {
              var t5, r2;
              C.childrenByName(e5, "Tracking").forEach(function(e6) {
                t5 = e6.getAttribute("event"), r2 = C.parseNodeText(e6), t5 && r2 && (Array.isArray(i3.trackingEvents[t5]) || (i3.trackingEvents[t5] = []), i3.trackingEvents[t5].push(r2));
              });
            }), C.childrenByName(e4, "NonLinear").forEach(function(e5) {
              var t5 = { id: null, width: 0, height: 0, expandedWidth: 0, expandedHeight: 0, scalable: true, maintainAspectRatio: true, minSuggestedDuration: 0, apiFramework: "static", adType: "nonLinearAd", type: null, staticResource: null, htmlResource: null, iframeResource: null, nonlinearClickThroughURLTemplate: null, nonlinearClickTrackingURLTemplates: [], adParameters: null };
              t5.id = e5.getAttribute("id") || null, t5.width = e5.getAttribute("width"), t5.height = e5.getAttribute("height"), t5.expandedWidth = e5.getAttribute("expandedWidth"), t5.expandedHeight = e5.getAttribute("expandedHeight"), t5.scalable = C.parseBoolean(e5.getAttribute("scalable")), t5.maintainAspectRatio = C.parseBoolean(e5.getAttribute("maintainAspectRatio")), t5.minSuggestedDuration = C.parseDuration(e5.getAttribute("minSuggestedDuration")), t5.apiFramework = e5.getAttribute("apiFramework"), C.childrenByName(e5, "HTMLResource").forEach(function(e6) {
                t5.type = e6.getAttribute("creativeType") || "text/html", t5.htmlResource = C.parseNodeText(e6);
              }), C.childrenByName(e5, "IFrameResource").forEach(function(e6) {
                t5.type = e6.getAttribute("creativeType") || 0, t5.iframeResource = C.parseNodeText(e6);
              }), C.childrenByName(e5, "StaticResource").forEach(function(e6) {
                t5.type = e6.getAttribute("creativeType") || 0, t5.staticResource = C.parseNodeText(e6);
              });
              var r2 = C.childByName(e5, "AdParameters");
              r2 && (t5.adParameters = C.parseNodeText(r2)), t5.nonlinearClickThroughURLTemplate = C.parseNodeText(C.childByName(e5, "NonLinearClickThrough")), C.childrenByName(e5, "NonLinearClickTracking").forEach(function(e6) {
                t5.nonlinearClickTrackingURLTemplates.push({ id: e6.getAttribute("id") || null, url: C.parseNodeText(e6) });
              }), i3.variations.push(t5);
            }), i3;
          }
          function x(e4) {
            var t4 = [];
            return e4.forEach(function(e5) {
              var i3 = D(e5);
              i3 && t4.push(i3);
            }), t4;
          }
          function D(e4) {
            if ("#comment" === e4.nodeName)
              return null;
            var t4, i3 = { name: null, value: null, attributes: {}, children: [] }, r2 = e4.attributes, n2 = e4.childNodes;
            if (i3.name = e4.nodeName, e4.attributes) {
              for (var a2 in r2)
                if (r2.hasOwnProperty(a2)) {
                  var o2 = r2[a2];
                  o2.nodeName && o2.nodeValue && (i3.attributes[o2.nodeName] = o2.nodeValue);
                }
            }
            for (var s2 in n2)
              if (n2.hasOwnProperty(s2)) {
                var l2 = D(n2[s2]);
                l2 && i3.children.push(l2);
              }
            if (0 === i3.children.length || 1 === i3.children.length && ["#cdata-section", "#text"].indexOf(i3.children[0].name) >= 0) {
              var c2 = C.parseNodeText(e4);
              "" !== c2 && (i3.value = c2), i3.children = [];
            }
            return null === (t4 = i3).value && 0 === Object.keys(t4.attributes).length && 0 === t4.children.length ? null : i3;
          }
          function O(e4) {
            var t4 = [];
            return e4.forEach(function(e5) {
              var i3, r2 = { id: e5.getAttribute("id") || null, adId: V(e5), sequence: e5.getAttribute("sequence") || null, apiFramework: e5.getAttribute("apiFramework") || null }, n2 = [];
              C.childrenByName(e5, "UniversalAdId").forEach(function(e6) {
                var t5 = { idRegistry: e6.getAttribute("idRegistry") || "unknown", value: C.parseNodeText(e6) };
                n2.push(t5);
              });
              var a2 = C.childByName(e5, "CreativeExtensions");
              for (var o2 in a2 && (i3 = x(C.childrenByName(a2, "CreativeExtension"))), e5.childNodes) {
                var s2 = e5.childNodes[o2], l2 = void 0;
                switch (s2.nodeName) {
                  case "Linear":
                    l2 = U(s2, r2);
                    break;
                  case "NonLinearAds":
                    l2 = S(s2, r2);
                    break;
                  case "CompanionAds":
                    l2 = L(s2, r2);
                }
                l2 && (n2 && (l2.universalAdIds = n2), i3 && (l2.creativeExtensions = i3), t4.push(l2));
              }
            }), t4;
          }
          function V(e4) {
            return e4.getAttribute("AdID") || e4.getAttribute("adID") || e4.getAttribute("adId") || null;
          }
          var P = { Wrapper: { subElements: ["VASTAdTagURI", "Impression"] }, BlockedAdCategories: { attributes: ["authority"] }, InLine: { subElements: ["AdSystem", "AdTitle", "Impression", "AdServingId", "Creatives"] }, Category: { attributes: ["authority"] }, Pricing: { attributes: ["model", "currency"] }, Verification: { oneOfinLineResources: ["JavaScriptResource", "ExecutableResource"], attributes: ["vendor"] }, UniversalAdId: { attributes: ["idRegistry"] }, JavaScriptResource: { attributes: ["apiFramework", "browserOptional"] }, ExecutableResource: { attributes: ["apiFramework", "type"] }, Tracking: { attributes: ["event"] }, Creatives: { subElements: ["Creative"] }, Creative: { subElements: ["UniversalAdId"] }, Linear: { subElements: ["MediaFiles", "Duration"] }, MediaFiles: { subElements: ["MediaFile"] }, MediaFile: { attributes: ["delivery", "type", "width", "height"] }, Mezzanine: { attributes: ["delivery", "type", "width", "height"] }, NonLinear: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"], attributes: ["width", "height"] }, Companion: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"], attributes: ["width", "height"] }, StaticResource: { attributes: ["creativeType"] }, Icons: { subElements: ["Icon"] }, Icon: { oneOfinLineResources: ["StaticResource", "IFrameResource", "HTMLResource"] } };
          function M(e4, t4) {
            if (P[e4.nodeName] && P[e4.nodeName].attributes) {
              var i3 = P[e4.nodeName].attributes.filter(function(t5) {
                return !e4.getAttribute(t5);
              });
              i3.length > 0 && F({ name: e4.nodeName, parentName: e4.parentNode.nodeName, attributes: i3 }, t4);
            }
          }
          function B(e4, t4, i3) {
            var r2 = P[e4.nodeName], n2 = !i3 && "Wrapper" !== e4.nodeName;
            if (r2 && !n2) {
              if (r2.subElements) {
                var a2 = r2.subElements.filter(function(t5) {
                  return !C.childByName(e4, t5);
                });
                a2.length > 0 && F({ name: e4.nodeName, parentName: e4.parentNode.nodeName, subElements: a2 }, t4);
              }
              i3 && r2.oneOfinLineResources && (r2.oneOfinLineResources.some(function(t5) {
                return C.childByName(e4, t5);
              }) || F({ name: e4.nodeName, parentName: e4.parentNode.nodeName, oneOfResources: r2.oneOfinLineResources }, t4));
            }
          }
          function _(e4) {
            return e4.children && 0 !== e4.children.length;
          }
          function F(e4, t4) {
            var i3 = e4.name, r2 = e4.parentName, n2 = e4.attributes, a2 = e4.subElements, o2 = e4.oneOfResources, s2 = "Element '".concat(i3, "'");
            t4("VAST-warning", { message: s2 += n2 ? " missing required attribute(s) '".concat(n2.join(", "), "' ") : a2 ? " missing required sub element(s) '".concat(a2.join(", "), "' ") : o2 ? " must provide one of the following '".concat(o2.join(", "), "' ") : " is empty", parentElement: r2, specVersion: 4.1 });
          }
          var j = { verifyRequiredValues: function e4(t4, i3, r2) {
            if (t4 && t4.nodeName)
              if ("InLine" === t4.nodeName && (r2 = true), M(t4, i3), _(t4)) {
                B(t4, i3, r2);
                for (var n2 = 0; n2 < t4.children.length; n2++)
                  e4(t4.children[n2], i3, r2);
              } else
                0 === C.parseNodeText(t4).length && F({ name: t4.nodeName, parentName: t4.parentNode.nodeName }, i3);
          }, hasSubElements: _, emitMissingValueWarning: F, verifyRequiredAttributes: M, verifyRequiredSubElements: B };
          function W(e4, t4) {
            var i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = i3.allowMultipleAds, n2 = i3.followAdditionalWrappers, a2 = e4.childNodes;
            for (var o2 in a2) {
              var s2 = a2[o2];
              if (-1 !== ["Wrapper", "InLine"].indexOf(s2.nodeName) && ("Wrapper" !== s2.nodeName || false !== n2)) {
                if (C.copyNodeAttribute("id", e4, s2), C.copyNodeAttribute("sequence", e4, s2), C.copyNodeAttribute("adType", e4, s2), "Wrapper" === s2.nodeName)
                  return { ad: z(s2, t4), type: "WRAPPER" };
                if ("InLine" === s2.nodeName)
                  return { ad: H(s2, t4, { allowMultipleAds: r2 }), type: "INLINE" };
              }
            }
          }
          function H(e4, t4) {
            return false === (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).allowMultipleAds && e4.getAttribute("sequence") ? null : q(e4, t4);
          }
          function q(e4, t4) {
            var i3 = [];
            t4 && j.verifyRequiredValues(e4, t4);
            var r2 = e4.childNodes, n2 = function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return { id: e5.id || null, sequence: e5.sequence || null, adType: e5.adType || null, adServingId: null, categories: [], expires: null, viewableImpression: [], system: null, title: null, description: null, advertiser: null, pricing: null, survey: null, errorURLTemplates: [], impressionURLTemplates: [], creatives: [], extensions: [], adVerifications: [], blockedAdCategories: [], followAdditionalWrappers: true, allowMultipleAds: false, fallbackOnNoAd: null };
            }(C.parseAttributes(e4));
            for (var a2 in r2) {
              var o2 = r2[a2];
              switch (o2.nodeName) {
                case "Error":
                  n2.errorURLTemplates.push(C.parseNodeText(o2));
                  break;
                case "Impression":
                  n2.impressionURLTemplates.push({ id: o2.getAttribute("id") || null, url: C.parseNodeText(o2) });
                  break;
                case "Creatives":
                  n2.creatives = O(C.childrenByName(o2, "Creative"));
                  break;
                case "Extensions":
                  var s2 = C.childrenByName(o2, "Extension");
                  n2.extensions = x(s2), n2.adVerifications.length || (i3 = Q(s2));
                  break;
                case "AdVerifications":
                  n2.adVerifications = G(C.childrenByName(o2, "Verification"));
                  break;
                case "AdSystem":
                  n2.system = { value: C.parseNodeText(o2), version: o2.getAttribute("version") || null };
                  break;
                case "AdTitle":
                  n2.title = C.parseNodeText(o2);
                  break;
                case "AdServingId":
                  n2.adServingId = C.parseNodeText(o2);
                  break;
                case "Category":
                  n2.categories.push({ authority: o2.getAttribute("authority") || null, value: C.parseNodeText(o2) });
                  break;
                case "Expires":
                  n2.expires = parseInt(C.parseNodeText(o2), 10);
                  break;
                case "ViewableImpression":
                  n2.viewableImpression.push(X(o2));
                  break;
                case "Description":
                  n2.description = C.parseNodeText(o2);
                  break;
                case "Advertiser":
                  n2.advertiser = { id: o2.getAttribute("id") || null, value: C.parseNodeText(o2) };
                  break;
                case "Pricing":
                  n2.pricing = { value: C.parseNodeText(o2), model: o2.getAttribute("model") || null, currency: o2.getAttribute("currency") || null };
                  break;
                case "Survey":
                  n2.survey = C.parseNodeText(o2);
                  break;
                case "BlockedAdCategories":
                  n2.blockedAdCategories.push({ authority: o2.getAttribute("authority") || null, value: C.parseNodeText(o2) });
              }
            }
            return i3.length && (n2.adVerifications = n2.adVerifications.concat(i3)), n2;
          }
          function z(e4, t4) {
            var i3 = q(e4, t4), r2 = e4.getAttribute("followAdditionalWrappers"), n2 = e4.getAttribute("allowMultipleAds"), a2 = e4.getAttribute("fallbackOnNoAd");
            i3.followAdditionalWrappers = !r2 || C.parseBoolean(r2), i3.allowMultipleAds = !!n2 && C.parseBoolean(n2), i3.fallbackOnNoAd = a2 ? C.parseBoolean(a2) : null;
            var o2 = C.childByName(e4, "VASTAdTagURI");
            if (o2 ? i3.nextWrapperURL = C.parseNodeText(o2) : (o2 = C.childByName(e4, "VASTAdTagURL")) && (i3.nextWrapperURL = C.parseNodeText(C.childByName(o2, "URL"))), i3.creatives.forEach(function(e5) {
              if (-1 !== ["linear", "nonlinear"].indexOf(e5.type)) {
                if (e5.trackingEvents) {
                  i3.trackingEvents || (i3.trackingEvents = {}), i3.trackingEvents[e5.type] || (i3.trackingEvents[e5.type] = {});
                  var t5 = function(t6) {
                    var r4 = e5.trackingEvents[t6];
                    Array.isArray(i3.trackingEvents[e5.type][t6]) || (i3.trackingEvents[e5.type][t6] = []), r4.forEach(function(r5) {
                      i3.trackingEvents[e5.type][t6].push(r5);
                    });
                  };
                  for (var r3 in e5.trackingEvents)
                    t5(r3);
                }
                e5.videoClickTrackingURLTemplates && (Array.isArray(i3.videoClickTrackingURLTemplates) || (i3.videoClickTrackingURLTemplates = []), e5.videoClickTrackingURLTemplates.forEach(function(e6) {
                  i3.videoClickTrackingURLTemplates.push(e6);
                })), e5.videoClickThroughURLTemplate && (i3.videoClickThroughURLTemplate = e5.videoClickThroughURLTemplate), e5.videoCustomClickURLTemplates && (Array.isArray(i3.videoCustomClickURLTemplates) || (i3.videoCustomClickURLTemplates = []), e5.videoCustomClickURLTemplates.forEach(function(e6) {
                  i3.videoCustomClickURLTemplates.push(e6);
                }));
              }
            }), i3.nextWrapperURL)
              return i3;
          }
          function G(e4) {
            var t4 = [];
            return e4.forEach(function(e5) {
              var i3 = { resource: null, vendor: null, browserOptional: false, apiFramework: null, type: null, parameters: null, trackingEvents: {} }, r2 = e5.childNodes;
              for (var n2 in C.assignAttributes(e5.attributes, i3), r2) {
                var a2 = r2[n2];
                switch (a2.nodeName) {
                  case "JavaScriptResource":
                  case "ExecutableResource":
                    i3.resource = C.parseNodeText(a2), C.assignAttributes(a2.attributes, i3);
                    break;
                  case "VerificationParameters":
                    i3.parameters = C.parseNodeText(a2);
                }
              }
              var o2 = C.childByName(e5, "TrackingEvents");
              o2 && C.childrenByName(o2, "Tracking").forEach(function(e6) {
                var t5 = e6.getAttribute("event"), r3 = C.parseNodeText(e6);
                t5 && r3 && (Array.isArray(i3.trackingEvents[t5]) || (i3.trackingEvents[t5] = []), i3.trackingEvents[t5].push(r3));
              }), t4.push(i3);
            }), t4;
          }
          function Q(e4) {
            var t4 = null, i3 = [];
            return e4.some(function(e5) {
              return t4 = C.childByName(e5, "AdVerifications");
            }), t4 && (i3 = G(C.childrenByName(t4, "Verification"))), i3;
          }
          function X(e4) {
            var t4 = {};
            t4.id = e4.getAttribute("id") || null;
            var i3 = e4.childNodes;
            for (var r2 in i3) {
              var n2 = i3[r2], a2 = n2.nodeName, o2 = C.parseNodeText(n2);
              if (("Viewable" === a2 || "NotViewable" === a2 || "ViewUndetermined" === a2) && o2) {
                var s2 = a2.toLowerCase();
                Array.isArray(t4[s2]) || (t4[s2] = []), t4[s2].push(o2);
              }
            }
            return t4;
          }
          var Y = function() {
            function e4() {
              n(this, e4), this._handlers = [];
            }
            return o(e4, [{ key: "on", value: function(e5, t4) {
              if ("function" != typeof t4)
                throw new TypeError("The handler argument must be of type Function. Received type ".concat(r(t4)));
              if (!e5)
                throw new TypeError("The event argument must be of type String. Received type ".concat(r(e5)));
              return this._handlers.push({ event: e5, handler: t4 }), this;
            } }, { key: "once", value: function(e5, t4) {
              return this.on(e5, function(e6, t5, i3) {
                var r2 = { fired: false, wrapFn: void 0 };
                function n2() {
                  r2.fired || (e6.off(t5, r2.wrapFn), r2.fired = true, i3.bind(e6).apply(void 0, arguments));
                }
                return r2.wrapFn = n2, n2;
              }(this, e5, t4));
            } }, { key: "off", value: function(e5, t4) {
              return this._handlers = this._handlers.filter(function(i3) {
                return i3.event !== e5 || i3.handler !== t4;
              }), this;
            } }, { key: "emit", value: function(e5) {
              for (var t4 = arguments.length, i3 = new Array(t4 > 1 ? t4 - 1 : 0), r2 = 1; r2 < t4; r2++)
                i3[r2 - 1] = arguments[r2];
              var n2 = false;
              return this._handlers.forEach(function(t5) {
                "*" === t5.event && (n2 = true, t5.handler.apply(t5, [e5].concat(i3))), t5.event === e5 && (n2 = true, t5.handler.apply(t5, i3));
              }), n2;
            } }, { key: "removeAllListeners", value: function(e5) {
              return e5 ? (this._handlers = this._handlers.filter(function(t4) {
                return t4.event !== e5;
              }), this) : (this._handlers = [], this);
            } }, { key: "listenerCount", value: function(e5) {
              return this._handlers.filter(function(t4) {
                return t4.event === e5;
              }).length;
            } }, { key: "listeners", value: function(e5) {
              return this._handlers.reduce(function(t4, i3) {
                return i3.event === e5 && t4.push(i3.handler), t4;
              }, []);
            } }, { key: "eventNames", value: function() {
              return this._handlers.map(function(e5) {
                return e5.event;
              });
            } }]), e4;
          }(), K = { get: function(e4, t4, i3) {
            i3(new Error("Please bundle the library for node to use the node urlHandler"));
          } }, J = 12e4;
          function Z() {
            try {
              var e4 = new window.XMLHttpRequest();
              return "withCredentials" in e4 ? e4 : null;
            } catch (e5) {
              return null;
            }
          }
          function $(e4, t4, i3) {
            var r2 = i3 ? 408 : e4.status, n2 = i3 ? "XHRURLHandler: Request timed out after ".concat(e4.timeout, " ms (").concat(r2, ")") : "XHRURLHandler: ".concat(e4.statusText, " (").concat(r2, ")");
            t4(new Error(n2), null, { statusCode: r2 });
          }
          var ee = { get: function(e4, t4, i3) {
            if ("https:" === window.location.protocol && 0 === e4.indexOf("http://"))
              return i3(new Error("XHRURLHandler: Cannot go from HTTPS to HTTP."));
            try {
              var r2 = Z();
              r2.open("GET", e4), r2.timeout = t4.timeout || J, r2.withCredentials = t4.withCredentials || false, r2.overrideMimeType && r2.overrideMimeType("text/xml"), r2.onload = function() {
                return function(e5, t5) {
                  200 === e5.status ? t5(null, e5.responseXML, { byteLength: e5.response.length, statusCode: e5.status }) : $(e5, t5, false);
                }(r2, i3);
              }, r2.onerror = function() {
                return $(r2, i3, false);
              }, r2.onabort = function() {
                return $(r2, i3, false);
              }, r2.ontimeout = function() {
                return $(r2, i3, true);
              }, r2.send();
            } catch (e5) {
              i3(new Error("XHRURLHandler: Unexpected error"));
            }
          }, supported: function() {
            return !!Z();
          } }, te = { get: function(e4, t4, i3) {
            return i3 || ("function" == typeof t4 && (i3 = t4), t4 = {}), "undefined" == typeof window || null === window ? K.get(e4, t4, i3) : ee.supported() ? ee.get(e4, t4, i3) : i3(new Error("Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"));
          } }, ie = 0, re = 0, ne = function(e4, t4) {
            !e4 || !t4 || e4 <= 0 || t4 <= 0 || (re = (re * ie + 8 * e4 / t4) / ++ie);
          }, ae = { ERRORCODE: 900, extensions: [] }, oe = function(e4) {
            l(i3, e4);
            var t4 = p(i3);
            function i3() {
              var e5;
              return n(this, i3), (e5 = t4.call(this)).remainingAds = [], e5.parentURLs = [], e5.errorURLTemplates = [], e5.rootErrorURLTemplates = [], e5.maxWrapperDepth = null, e5.URLTemplateFilters = [], e5.fetchingOptions = {}, e5.parsingOptions = {}, e5;
            }
            return o(i3, [{ key: "addURLTemplateFilter", value: function(e5) {
              "function" == typeof e5 && this.URLTemplateFilters.push(e5);
            } }, { key: "removeURLTemplateFilter", value: function() {
              this.URLTemplateFilters.pop();
            } }, { key: "countURLTemplateFilters", value: function() {
              return this.URLTemplateFilters.length;
            } }, { key: "clearURLTemplateFilters", value: function() {
              this.URLTemplateFilters = [];
            } }, { key: "trackVastError", value: function(e5, t5) {
              for (var i4 = arguments.length, r2 = new Array(i4 > 2 ? i4 - 2 : 0), n2 = 2; n2 < i4; n2++)
                r2[n2 - 2] = arguments[n2];
              this.emit("VAST-error", Object.assign.apply(Object, [{}, ae, t5].concat(r2))), w.track(e5, t5);
            } }, { key: "getErrorURLTemplates", value: function() {
              return this.rootErrorURLTemplates.concat(this.errorURLTemplates);
            } }, { key: "getEstimatedBitrate", value: function() {
              return re;
            } }, { key: "fetchVAST", value: function(e5) {
              var t5 = this, i4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              return new Promise(function(a2, o2) {
                t5.URLTemplateFilters.forEach(function(t6) {
                  e5 = t6(e5);
                }), t5.parentURLs.push(e5);
                var s2 = Date.now();
                t5.emit("VAST-resolving", { url: e5, previousUrl: r2, wrapperDepth: i4, maxWrapperDepth: t5.maxWrapperDepth, timeout: t5.fetchingOptions.timeout, wrapperAd: n2 }), t5.urlHandler.get(e5, t5.fetchingOptions, function(n3, l2) {
                  var c2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, u2 = Math.round(Date.now() - s2), d2 = Object.assign({ url: e5, previousUrl: r2, wrapperDepth: i4, error: n3, duration: u2 }, c2);
                  t5.emit("VAST-resolved", d2), ne(c2.byteLength, u2), n3 ? o2(n3) : a2(l2);
                });
              });
            } }, { key: "initParsingStatus", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              this.errorURLTemplates = [], this.fetchingOptions = { timeout: e5.timeout || J, withCredentials: e5.withCredentials }, this.maxWrapperDepth = e5.wrapperLimit || 10, this.parentURLs = [], this.parsingOptions = { allowMultipleAds: e5.allowMultipleAds }, this.remainingAds = [], this.rootErrorURLTemplates = [], this.rootURL = "", this.urlHandler = e5.urlHandler || e5.urlhandler || te, this.vastVersion = null, ne(e5.byteLength, e5.requestDuration);
            } }, { key: "getRemainingAds", value: function(e5) {
              var t5 = this;
              if (0 === this.remainingAds.length)
                return Promise.reject(new Error("No more ads are available for the given VAST"));
              var i4 = e5 ? w.flatten(this.remainingAds) : this.remainingAds.shift();
              return this.errorURLTemplates = [], this.parentURLs = [], this.resolveAds(i4, { wrapperDepth: 0, url: this.rootURL }).then(function(e6) {
                return t5.buildVASTResponse(e6);
              });
            } }, { key: "getAndParseVAST", value: function(e5) {
              var t5 = this, i4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.initParsingStatus(i4), this.URLTemplateFilters.forEach(function(t6) {
                e5 = t6(e5);
              }), this.rootURL = e5, this.fetchVAST(e5).then(function(r2) {
                return i4.previousUrl = e5, i4.isRootVAST = true, i4.url = e5, t5.parse(r2, i4).then(function(e6) {
                  return t5.buildVASTResponse(e6);
                });
              });
            } }, { key: "parseVAST", value: function(e5) {
              var t5 = this, i4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              return this.initParsingStatus(i4), i4.isRootVAST = true, this.parse(e5, i4).then(function(e6) {
                return t5.buildVASTResponse(e6);
              });
            } }, { key: "buildVASTResponse", value: function(e5) {
              var t5, i4 = { ads: (t5 = { ads: e5, errorURLTemplates: this.getErrorURLTemplates(), version: this.vastVersion }).ads || [], errorURLTemplates: t5.errorURLTemplates || [], version: t5.version || null };
              return this.completeWrapperResolving(i4), i4;
            } }, { key: "parseVastXml", value: function(e5, t5) {
              var i4 = t5.isRootVAST, r2 = void 0 !== i4 && i4, n2 = t5.url, a2 = void 0 === n2 ? null : n2, o2 = t5.wrapperDepth, s2 = void 0 === o2 ? 0 : o2, l2 = t5.allowMultipleAds, c2 = t5.followAdditionalWrappers;
              if (!e5 || !e5.documentElement || "VAST" !== e5.documentElement.nodeName)
                throw this.emit("VAST-ad-parsed", { type: "ERROR", url: a2, wrapperDepth: s2 }), new Error("Invalid VAST XMLDocument");
              var u2 = [], d2 = e5.documentElement.childNodes, p2 = e5.documentElement.getAttribute("version");
              for (var h2 in r2 && p2 && (this.vastVersion = p2), d2) {
                var f2 = d2[h2];
                if ("Error" === f2.nodeName) {
                  var m2 = C.parseNodeText(f2);
                  r2 ? this.rootErrorURLTemplates.push(m2) : this.errorURLTemplates.push(m2);
                } else if ("Ad" === f2.nodeName) {
                  if (this.vastVersion && parseFloat(this.vastVersion) < 3)
                    l2 = true;
                  else if (false === l2 && u2.length > 1)
                    break;
                  var v2 = W(f2, this.emit.bind(this), { allowMultipleAds: l2, followAdditionalWrappers: c2 });
                  v2.ad ? (u2.push(v2.ad), this.emit("VAST-ad-parsed", { type: v2.type, url: a2, wrapperDepth: s2, adIndex: u2.length - 1, vastVersion: p2 })) : this.trackVastError(this.getErrorURLTemplates(), { ERRORCODE: 101 });
                }
              }
              return u2;
            } }, { key: "parse", value: function(e5) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i4 = t5.url, r2 = void 0 === i4 ? null : i4, n2 = t5.resolveAll, a2 = void 0 === n2 || n2, o2 = t5.wrapperSequence, s2 = void 0 === o2 ? null : o2, l2 = t5.previousUrl, c2 = void 0 === l2 ? null : l2, u2 = t5.wrapperDepth, d2 = void 0 === u2 ? 0 : u2, p2 = t5.isRootVAST, h2 = void 0 !== p2 && p2, f2 = t5.followAdditionalWrappers, m2 = t5.allowMultipleAds, v2 = [];
              this.vastVersion && parseFloat(this.vastVersion) < 3 && h2 && (m2 = true);
              try {
                v2 = this.parseVastXml(e5, { isRootVAST: h2, url: r2, wrapperDepth: d2, allowMultipleAds: m2, followAdditionalWrappers: f2 });
              } catch (e6) {
                return Promise.reject(e6);
              }
              return 1 === v2.length && null != s2 && (v2[0].sequence = s2), false === a2 && (this.remainingAds = C.splitVAST(v2), v2 = this.remainingAds.shift()), this.resolveAds(v2, { wrapperDepth: d2, previousUrl: c2, url: r2 });
            } }, { key: "resolveAds", value: function() {
              var e5 = this, t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i4 = arguments.length > 1 ? arguments[1] : void 0, r2 = i4.wrapperDepth, n2 = i4.previousUrl, a2 = i4.url, o2 = [];
              return n2 = a2, t5.forEach(function(t6) {
                var i5 = e5.resolveWrappers(t6, r2, n2);
                o2.push(i5);
              }), Promise.all(o2).then(function(t6) {
                var i5 = w.flatten(t6);
                if (!i5 && e5.remainingAds.length > 0) {
                  var o3 = e5.remainingAds.shift();
                  return e5.resolveAds(o3, { wrapperDepth: r2, previousUrl: n2, url: a2 });
                }
                return i5;
              });
            } }, { key: "resolveWrappers", value: function(e5, t5, i4) {
              var r2 = this;
              return new Promise(function(n2) {
                var a2;
                if (t5++, !e5.nextWrapperURL)
                  return delete e5.nextWrapperURL, n2(e5);
                if (t5 >= r2.maxWrapperDepth || -1 !== r2.parentURLs.indexOf(e5.nextWrapperURL))
                  return e5.errorCode = 302, delete e5.nextWrapperURL, n2(e5);
                e5.nextWrapperURL = C.resolveVastAdTagURI(e5.nextWrapperURL, i4), r2.URLTemplateFilters.forEach(function(t6) {
                  e5.nextWrapperURL = t6(e5.nextWrapperURL);
                });
                var o2 = null !== (a2 = r2.parsingOptions.allowMultipleAds) && void 0 !== a2 ? a2 : e5.allowMultipleAds, s2 = e5.sequence;
                r2.fetchVAST(e5.nextWrapperURL, t5, i4, e5).then(function(a3) {
                  return r2.parse(a3, { url: e5.nextWrapperURL, previousUrl: i4, wrapperSequence: s2, wrapperDepth: t5, followAdditionalWrappers: e5.followAdditionalWrappers, allowMultipleAds: o2 }).then(function(t6) {
                    if (delete e5.nextWrapperURL, 0 === t6.length)
                      return e5.creatives = [], n2(e5);
                    t6.forEach(function(t7) {
                      t7 && C.mergeWrapperAdData(t7, e5);
                    }), n2(t6);
                  });
                }).catch(function(t6) {
                  e5.errorCode = 301, e5.errorMessage = t6.message, n2(e5);
                });
              });
            } }, { key: "completeWrapperResolving", value: function(e5) {
              if (0 === e5.ads.length)
                this.trackVastError(e5.errorURLTemplates, { ERRORCODE: 303 });
              else
                for (var t5 = e5.ads.length - 1; t5 >= 0; t5--) {
                  var i4 = e5.ads[t5];
                  (i4.errorCode || 0 === i4.creatives.length) && (this.trackVastError(i4.errorURLTemplates.concat(e5.errorURLTemplates), { ERRORCODE: i4.errorCode || 303 }, { ERRORMESSAGE: i4.errorMessage || "" }, { extensions: i4.extensions }, { system: i4.system }), e5.ads.splice(t5, 1));
                }
            } }]), i3;
          }(Y), se = null, le = { data: {}, length: 0, getItem: function(e4) {
            return this.data[e4];
          }, setItem: function(e4, t4) {
            this.data[e4] = t4, this.length = Object.keys(this.data).length;
          }, removeItem: function(e4) {
            delete this.data[e4], this.length = Object.keys(this.data).length;
          }, clear: function() {
            this.data = {}, this.length = 0;
          } }, ce = function() {
            function e4() {
              n(this, e4), this.storage = this.initStorage();
            }
            return o(e4, [{ key: "initStorage", value: function() {
              if (se)
                return se;
              try {
                se = "undefined" != typeof window && null !== window ? window.localStorage || window.sessionStorage : null;
              } catch (e5) {
                se = null;
              }
              return se && !this.isStorageDisabled(se) || (se = le).clear(), se;
            } }, { key: "isStorageDisabled", value: function(e5) {
              var t4 = "__VASTStorage__";
              try {
                if (e5.setItem(t4, t4), e5.getItem(t4) !== t4)
                  return e5.removeItem(t4), true;
              } catch (e6) {
                return true;
              }
              return e5.removeItem(t4), false;
            } }, { key: "getItem", value: function(e5) {
              return this.storage.getItem(e5);
            } }, { key: "setItem", value: function(e5, t4) {
              return this.storage.setItem(e5, t4);
            } }, { key: "removeItem", value: function(e5) {
              return this.storage.removeItem(e5);
            } }, { key: "clear", value: function() {
              return this.storage.clear();
            } }]), e4;
          }(), ue = function() {
            function e4(t4, i3, r2) {
              n(this, e4), this.cappingFreeLunch = t4 || 0, this.cappingMinimumTimeInterval = i3 || 0, this.defaultOptions = { withCredentials: false, timeout: 0 }, this.vastParser = new oe(), this.storage = r2 || new ce(), void 0 === this.lastSuccessfulAd && (this.lastSuccessfulAd = 0), void 0 === this.totalCalls && (this.totalCalls = 0), void 0 === this.totalCallsTimeout && (this.totalCallsTimeout = 0);
            }
            return o(e4, [{ key: "getParser", value: function() {
              return this.vastParser;
            } }, { key: "lastSuccessfulAd", get: function() {
              return this.storage.getItem("vast-client-last-successful-ad");
            }, set: function(e5) {
              this.storage.setItem("vast-client-last-successful-ad", e5);
            } }, { key: "totalCalls", get: function() {
              return this.storage.getItem("vast-client-total-calls");
            }, set: function(e5) {
              this.storage.setItem("vast-client-total-calls", e5);
            } }, { key: "totalCallsTimeout", get: function() {
              return this.storage.getItem("vast-client-total-calls-timeout");
            }, set: function(e5) {
              this.storage.setItem("vast-client-total-calls-timeout", e5);
            } }, { key: "hasRemainingAds", value: function() {
              return this.vastParser.remainingAds.length > 0;
            } }, { key: "getNextAds", value: function(e5) {
              return this.vastParser.getRemainingAds(e5);
            } }, { key: "get", value: function(e5) {
              var t4 = this, i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = Date.now();
              return (i3 = Object.assign({}, this.defaultOptions, i3)).hasOwnProperty("resolveAll") || (i3.resolveAll = false), this.totalCallsTimeout < r2 ? (this.totalCalls = 1, this.totalCallsTimeout = r2 + 36e5) : this.totalCalls++, new Promise(function(n2, a2) {
                if (t4.cappingFreeLunch >= t4.totalCalls)
                  return a2(new Error("VAST call canceled \u2013 FreeLunch capping not reached yet ".concat(t4.totalCalls, "/").concat(t4.cappingFreeLunch)));
                var o2 = r2 - t4.lastSuccessfulAd;
                if (o2 < 0)
                  t4.lastSuccessfulAd = 0;
                else if (o2 < t4.cappingMinimumTimeInterval)
                  return a2(new Error("VAST call canceled \u2013 (".concat(t4.cappingMinimumTimeInterval, ")ms minimum interval reached")));
                t4.vastParser.getAndParseVAST(e5, i3).then(function(e6) {
                  return n2(e6);
                }).catch(function(e6) {
                  return a2(e6);
                });
              });
            } }]), e4;
          }(), de = function(e4) {
            l(a2, e4);
            var t4 = p(a2);
            function a2(e5, i3, r2) {
              var o2, s2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
              for (var l2 in n(this, a2), (o2 = t4.call(this)).ad = i3, o2.creative = r2, o2.variation = s2, o2.muted = false, o2.impressed = false, o2.skippable = false, o2.trackingEvents = {}, o2.lastPercentage = 0, o2._alreadyTriggeredQuartiles = {}, o2.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "resume", "pause", "rewind", "skip", "closeLinear", "close"], o2.creative.trackingEvents) {
                var c2 = o2.creative.trackingEvents[l2];
                o2.trackingEvents[l2] = c2.slice(0);
              }
              return I(o2.creative) ? o2._initLinearTracking() : o2._initVariationTracking(), e5 && o2.on("start", function() {
                e5.lastSuccessfulAd = Date.now();
              }), o2;
            }
            return o(a2, [{ key: "_initLinearTracking", value: function() {
              this.linear = true, this.skipDelay = this.creative.skipDelay, this.setDuration(this.creative.duration), this.clickThroughURLTemplate = this.creative.videoClickThroughURLTemplate, this.clickTrackingURLTemplates = this.creative.videoClickTrackingURLTemplates;
            } }, { key: "_initVariationTracking", value: function() {
              if (this.linear = false, this.skipDelay = -1, this.variation) {
                for (var e5 in this.variation.trackingEvents) {
                  var t5 = this.variation.trackingEvents[e5];
                  this.trackingEvents[e5] ? this.trackingEvents[e5] = this.trackingEvents[e5].concat(t5.slice(0)) : this.trackingEvents[e5] = t5.slice(0);
                }
                "nonLinearAd" === this.variation.adType ? (this.clickThroughURLTemplate = this.variation.nonlinearClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.nonlinearClickTrackingURLTemplates, this.setDuration(this.variation.minSuggestedDuration)) : function(e6) {
                  return "companionAd" === e6.adType;
                }(this.variation) && (this.clickThroughURLTemplate = this.variation.companionClickThroughURLTemplate, this.clickTrackingURLTemplates = this.variation.companionClickTrackingURLTemplates);
              }
            } }, { key: "setDuration", value: function(e5) {
              w.isValidTimeValue(e5) && (this.assetDuration = e5, this.quartiles = { firstQuartile: Math.round(25 * this.assetDuration) / 100, midpoint: Math.round(50 * this.assetDuration) / 100, thirdQuartile: Math.round(75 * this.assetDuration) / 100 });
            } }, { key: "setProgress", value: function(e5) {
              var t5 = this, i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (w.isValidTimeValue(e5) && "object" === r(i3)) {
                var n2 = this.skipDelay || -1;
                if (-1 === n2 || this.skippable || (n2 > e5 ? this.emit("skip-countdown", n2 - e5) : (this.skippable = true, this.emit("skip-countdown", 0))), this.assetDuration > 0) {
                  var a3 = Math.round(e5 / this.assetDuration * 100), o2 = [];
                  if (e5 > 0) {
                    o2.push("start");
                    for (var s2 = this.lastPercentage; s2 < a3; s2++)
                      o2.push("progress-".concat(s2 + 1, "%"));
                    for (var l2 in o2.push("progress-".concat(Math.round(e5))), this.quartiles)
                      this.isQuartileReached(l2, this.quartiles[l2], e5) && (o2.push(l2), this._alreadyTriggeredQuartiles[l2] = true);
                    this.lastPercentage = a3;
                  }
                  o2.forEach(function(e6) {
                    t5.track(e6, { macros: i3, once: true });
                  }), e5 < this.progress && this.track("rewind", { macros: i3 });
                }
                this.progress = e5;
              }
            } }, { key: "isQuartileReached", value: function(e5, t5, i3) {
              var r2 = false;
              return t5 <= i3 && !this._alreadyTriggeredQuartiles[e5] && (r2 = true), r2;
            } }, { key: "setMuted", value: function(e5) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              "boolean" == typeof e5 && "object" === r(t5) && (this.muted !== e5 && this.track(e5 ? "mute" : "unmute", { macros: t5 }), this.muted = e5);
            } }, { key: "setPaused", value: function(e5) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              "boolean" == typeof e5 && "object" === r(t5) && (this.paused !== e5 && this.track(e5 ? "pause" : "resume", { macros: t5 }), this.paused = e5);
            } }, { key: "setFullscreen", value: function(e5) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              "boolean" == typeof e5 && "object" === r(t5) && (this.fullscreen !== e5 && this.track(e5 ? "fullscreen" : "exitFullscreen", { macros: t5 }), this.fullscreen = e5);
            } }, { key: "setExpand", value: function(e5) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              "boolean" == typeof e5 && "object" === r(t5) && (this.expanded !== e5 && (this.track(e5 ? "expand" : "collapse", { macros: t5 }), this.track(e5 ? "playerExpand" : "playerCollapse", { macros: t5 })), this.expanded = e5);
            } }, { key: "setSkipDelay", value: function(e5) {
              w.isValidTimeValue(e5) && (this.skipDelay = e5);
            } }, { key: "trackImpression", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && (this.impressed || (this.impressed = true, this.trackURLs(this.ad.impressionURLTemplates, e5), this.track("creativeView", { macros: e5 })));
            } }, { key: "error", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              "object" === r(e5) && "boolean" == typeof t5 && this.trackURLs(this.ad.errorURLTemplates, e5, { isCustomCode: t5 });
            } }, { key: "errorWithCode", value: function(e5) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              "string" == typeof e5 && "boolean" == typeof t5 && this.error({ ERRORCODE: e5 }, t5);
            } }, { key: "complete", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && this.track("complete", { macros: e5 });
            } }, { key: "notUsed", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && (this.track("notUsed", { macros: e5 }), this.trackingEvents = []);
            } }, { key: "otherAdInteraction", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && this.track("otherAdInteraction", { macros: e5 });
            } }, { key: "acceptInvitation", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && this.track("acceptInvitation", { macros: e5 });
            } }, { key: "adExpand", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && this.track("adExpand", { macros: e5 });
            } }, { key: "adCollapse", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && this.track("adCollapse", { macros: e5 });
            } }, { key: "minimize", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && this.track("minimize", { macros: e5 });
            } }, { key: "verificationNotExecuted", value: function(e5) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if ("string" == typeof e5 && "object" === r(t5)) {
                if (!this.ad || !this.ad.adVerifications || !this.ad.adVerifications.length)
                  throw new Error("No adVerifications provided");
                if (!e5)
                  throw new Error("No vendor provided, unable to find associated verificationNotExecuted");
                var i3 = this.ad.adVerifications.find(function(t6) {
                  return t6.vendor === e5;
                });
                if (!i3)
                  throw new Error("No associated verification element found for vendor: ".concat(e5));
                var n2 = i3.trackingEvents;
                if (n2 && n2.verificationNotExecuted) {
                  var a3 = n2.verificationNotExecuted;
                  this.trackURLs(a3, t5), this.emit("verificationNotExecuted", { trackingURLTemplates: a3 });
                }
              }
            } }, { key: "overlayViewDuration", value: function(e5) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              "string" == typeof e5 && "object" === r(t5) && (t5.ADPLAYHEAD = e5, this.track("overlayViewDuration", { macros: t5 }));
            } }, { key: "close", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && this.track(this.linear ? "closeLinear" : "close", { macros: e5 });
            } }, { key: "skip", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && this.track("skip", { macros: e5 });
            } }, { key: "load", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              "object" === r(e5) && this.track("loaded", { macros: e5 });
            } }, { key: "click", value: function() {
              var e5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if ((null === e5 || "string" == typeof e5) && "object" === r(t5)) {
                this.clickTrackingURLTemplates && this.clickTrackingURLTemplates.length && this.trackURLs(this.clickTrackingURLTemplates, t5);
                var n2 = this.clickThroughURLTemplate || e5, a3 = i2({}, t5);
                if (n2) {
                  this.progress && (a3.ADPLAYHEAD = this.progressFormatted());
                  var o2 = w.resolveURLTemplates([n2], a3)[0];
                  this.emit("clickthrough", o2);
                }
              }
            } }, { key: "track", value: function(e5) {
              var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i3 = t5.macros, n2 = void 0 === i3 ? {} : i3, a3 = t5.once, o2 = void 0 !== a3 && a3;
              if ("object" === r(n2)) {
                "closeLinear" === e5 && !this.trackingEvents[e5] && this.trackingEvents.close && (e5 = "close");
                var s2 = this.trackingEvents[e5], l2 = this.emitAlwaysEvents.indexOf(e5) > -1;
                s2 ? (this.emit(e5, { trackingURLTemplates: s2 }), this.trackURLs(s2, n2)) : l2 && this.emit(e5, null), o2 && (delete this.trackingEvents[e5], l2 && this.emitAlwaysEvents.splice(this.emitAlwaysEvents.indexOf(e5), 1));
              }
            } }, { key: "trackURLs", value: function(e5) {
              var t5, r2, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a3 = i2({}, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
              this.linear && (this.creative && this.creative.mediaFiles && this.creative.mediaFiles[0] && this.creative.mediaFiles[0].fileURL && (a3.ASSETURI = this.creative.mediaFiles[0].fileURL), this.progress && (a3.ADPLAYHEAD = this.progressFormatted())), null !== (t5 = this.creative) && void 0 !== t5 && null !== (r2 = t5.universalAdIds) && void 0 !== r2 && r2.length && (a3.UNIVERSALADID = this.creative.universalAdIds.map(function(e6) {
                return e6.idRegistry.concat(" ", e6.value);
              }).join(",")), this.ad && (this.ad.sequence && (a3.PODSEQUENCE = this.ad.sequence), this.ad.adType && (a3.ADTYPE = this.ad.adType), this.ad.adServingId && (a3.ADSERVINGID = this.ad.adServingId), this.ad.categories && this.ad.categories.length && (a3.ADCATEGORIES = this.ad.categories.map(function(e6) {
                return e6.value;
              }).join(",")), this.ad.blockedAdCategories && this.ad.blockedAdCategories.length && (a3.BLOCKEDADCATEGORIES = this.ad.blockedAdCategories)), w.track(e5, a3, n2);
            } }, { key: "convertToTimecode", value: function(e5) {
              if (!w.isValidTimeValue(e5))
                return "";
              var t5 = 1e3 * e5, i3 = Math.floor(t5 / 36e5), r2 = Math.floor(t5 / 6e4 % 60), n2 = Math.floor(t5 / 1e3 % 60), a3 = Math.floor(t5 % 1e3);
              return "".concat(w.addLeadingZeros(i3, 2), ":").concat(w.addLeadingZeros(r2, 2), ":").concat(w.addLeadingZeros(n2, 2), ".").concat(w.addLeadingZeros(a3, 3));
            } }, { key: "progressFormatted", value: function() {
              return this.convertToTimecode(this.progress);
            } }]), a2;
          }(Y);
          e3.VASTClient = ue, e3.VASTParser = oe, e3.VASTTracker = de, Object.defineProperty(e3, "__esModule", { value: true });
        }(t2);
      }, 144: (e2, t2, i2) => {
        var r, n = void 0 !== i2.g ? i2.g : "undefined" != typeof window ? window : {}, a = i2(893);
        "undefined" != typeof document ? r = document : (r = n["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = n["__GLOBAL_DOCUMENT_CACHE@4"] = a), e2.exports = r;
      }, 908: (e2, t2, i2) => {
        var r;
        r = "undefined" != typeof window ? window : void 0 !== i2.g ? i2.g : "undefined" != typeof self ? self : {}, e2.exports = r;
      }, 596: (e2) => {
        "use strict";
        var t2 = ["handshakeVersion", "initAd", "startAd", "stopAd", "skipAd", "resizeAd", "pauseAd", "resumeAd", "expandAd", "collapseAd", "subscribe", "unsubscribe"];
        function i2(e3, t3, i3) {
        }
        i2.prototype.handshakeVersion = function(e3, t3) {
        }, i2.prototype.initAd = function(e3, t3, i3, r2, n2, a, o) {
        }, i2.prototype.startAd = function(e3) {
        }, i2.prototype.stopAd = function(e3) {
        }, i2.prototype.skipAd = function(e3) {
        }, i2.prototype.resizeAd = function(e3, t3, i3, r2) {
        }, i2.prototype.pauseAd = function(e3) {
        }, i2.prototype.resumeAd = function(e3) {
        }, i2.prototype.expandAd = function(e3) {
        }, i2.prototype.collapseAd = function(e3) {
        }, i2.prototype.subscribe = function(e3, t3, i3) {
        }, i2.prototype.unsubscribe = function(e3, t3) {
        }, i2.prototype.getAdLinear = function(e3) {
        }, i2.prototype.getAdWidth = function(e3) {
        }, i2.prototype.getAdHeight = function(e3) {
        }, i2.prototype.getAdExpanded = function(e3) {
        }, i2.prototype.getAdSkippableState = function(e3) {
        }, i2.prototype.getAdRemainingTime = function(e3) {
        }, i2.prototype.getAdDuration = function(e3) {
        }, i2.prototype.getAdVolume = function(e3) {
        }, i2.prototype.getAdCompanions = function(e3) {
        }, i2.prototype.getAdIcons = function(e3) {
        }, i2.prototype.setAdVolume = function(e3, t3) {
        }, n(i2, "METHODS", t2), n(i2, "GETTERS", ["getAdLinear", "getAdWidth", "getAdHeight", "getAdExpanded", "getAdSkippableState", "getAdRemainingTime", "getAdDuration", "getAdVolume", "getAdCompanions", "getAdIcons"]), n(i2, "SETTERS", ["setAdVolume"]), n(i2, "EVENTS", ["AdLoaded", "AdStarted", "AdStopped", "AdSkipped", "AdSkippableStateChange", "AdSizeChange", "AdLinearChange", "AdDurationChange", "AdExpandedChange", "AdRemainingTimeChange", "AdVolumeChange", "AdImpression", "AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete", "AdClickThru", "AdInteraction", "AdUserAcceptInvitation", "AdUserMinimize", "AdUserClose", "AdPaused", "AdPlaying", "AdLog", "AdError"]);
        var r = t2.filter(function(e3) {
          return -1 === ["skipAd"].indexOf(e3);
        });
        function n(e3, t3, i3) {
          Object.defineProperty(e3, t3, { writable: false, configurable: false, value: i3 });
        }
        n(i2, "checkVPAIDInterface", function(e3) {
          return r.every(function(t3) {
            return "function" == typeof e3[t3];
          });
        }), e2.exports = i2;
      }, 13: (e2, t2, i2) => {
        "use strict";
        var r = i2(596), n = i2(437), a = r.checkVPAIDInterface, o = i2(77), s = (r.METHODS, "AdClickThru"), l = r.EVENTS.filter(function(e3) {
          return e3 != s;
        });
        function c(e3, t3, i3, r2) {
          this._isValid = a(e3), this._isValid && (this._creative = e3, this._el = t3, this._videoEl = i3, this._iframe = r2, this._subscribers = new n(), o.setFullSizeStyle(t3), u.call(this));
        }
        function u() {
          if (l.forEach(function(e4) {
            this._creative.subscribe(p.bind(this, e4), e4);
          }.bind(this)), this._creative.subscribe(d.bind(this), s), this._videoEl) {
            var e3 = this._iframe.contentDocument.documentElement, t3 = this._videoEl;
            e3.addEventListener("click", function(i3) {
              i3.target === e3 && t3.click();
            });
          }
        }
        function d(e3, t3, i3) {
          this._subscribers.triggerSync(s, { url: e3, id: t3, playerHandles: i3 });
        }
        function p(e3) {
          this._subscribers.trigger.apply(this._subscribers, Array.prototype.slice.call(arguments));
        }
        function h(e3, t3, i3, r2) {
          e3 ? e3(i3, r2) : i3 && t3.trigger("AdError", i3);
        }
        c.prototype = Object.create(r.prototype), c.prototype.isValidVPAIDAd = function() {
          return this._isValid;
        }, r.METHODS.forEach(function(e3) {
          -1 === ["subscribe", "unsubscribe", "initAd"].indexOf(e3) && (c.prototype[e3] = function() {
            var t3 = r.prototype[e3].length, i3 = Array.prototype.slice.call(arguments), n2 = t3 === i3.length ? i3.pop() : void 0;
            setTimeout(function() {
              var t4, r2 = null;
              try {
                t4 = this._creative[e3].apply(this._creative, i3);
              } catch (e4) {
                r2 = e4;
              }
              h(n2, this._subscribers, r2, t4);
            }.bind(this), 0);
          });
        }), c.prototype.initAd = function(e3, t3, i3, r2, n2, a2, s2) {
          n2 = n2 || {}, a2 = o.extend({ slot: this._el, videoSlot: this._videoEl }, a2 || {}), setTimeout(function() {
            var o2;
            try {
              this._creative.initAd(e3, t3, i3, r2, n2, a2);
            } catch (e4) {
              o2 = e4;
            }
            h(s2, this._subscribers, o2);
          }.bind(this), 0);
        }, c.prototype.subscribe = function(e3, t3, i3) {
          this._subscribers.subscribe(t3, e3, i3);
        }, c.prototype.unsubscribe = function(e3, t3) {
          this._subscribers.unsubscribe(t3, e3);
        }, c.prototype.on = c.prototype.subscribe, c.prototype.off = c.prototype.unsubscribe, r.GETTERS.forEach(function(e3) {
          c.prototype[e3] = function(t3) {
            setTimeout(function() {
              var i3, r2 = null;
              try {
                i3 = this._creative[e3]();
              } catch (e4) {
                r2 = e4;
              }
              h(t3, this._subscribers, r2, i3);
            }.bind(this), 0);
          };
        }), c.prototype.setAdVolume = function(e3, t3) {
          setTimeout(function() {
            var i3, r2 = null;
            try {
              this._creative.setAdVolume(e3), i3 = this._creative.getAdVolume();
            } catch (e4) {
              r2 = e4;
            }
            r2 || (r2 = o.validate(i3 === e3, "failed to apply volume: " + e3)), h(t3, this._subscribers, r2, i3);
          }.bind(this), 0);
        }, c.prototype._destroy = function() {
          this.stopAd(), this._subscribers.unsubscribeAll();
        }, e2.exports = c;
      }, 178: (e2, t2, i2) => {
        "use strict";
        var r = i2(77), n = r.unique("vpaidIframe"), a = i2(13);
        function o(e3, t3, i3, a2) {
          i3 = i3 || {}, this._id = n(), this._destroyed = false, this._frameContainer = r.createElementInEl(e3, "div"), this._videoEl = t3, this._vpaidOptions = a2 || { timeout: 1e4 }, this._templateConfig = { template: i3.template || `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body style="margin:0;padding:0"><div class="ad-element"></div><script type="text/javascript" src="{{iframeURL_JS}}"><\/script><script type="text/javascript">window.parent.postMessage('{"event": "ready", "id": "{{iframeID}}"}', '{{origin}}');<\/script></body></html>`, extraOptions: i3.extraOptions || {} };
        }
        function s(e3) {
          var t3 = this[e3];
          t3 && t3.parentNode && (t3.parentNode.removeChild(t3), delete this[e3]);
        }
        function l() {
          u.call(this), delete this._adUnit;
        }
        function c() {
          u.call(this), p.call(this);
        }
        function u() {
          s.call(this, "_frame"), d.call(this);
        }
        function d() {
          this._onLoad && (window.removeEventListener("message", this._onLoad), delete this._onLoad);
        }
        function p() {
          this._adUnit && (this._adUnit.stopAd(), delete this._adUnit);
        }
        function h() {
          if (this._destroyed)
            throw new Error("VPAIDHTML5Client already destroyed!");
        }
        function f() {
          return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        }
        o.prototype.destroy = function() {
          this._destroyed || (this._destroyed = true, c.call(this));
        }, o.prototype.isDestroyed = function() {
          return this._destroyed;
        }, o.prototype.loadAdUnit = function(e3, t3) {
          if (!this._onLoad) {
            h.call(this), c.call(this);
            var i3 = this, n2 = r.createIframeWithContent(this._frameContainer, this._templateConfig.template, r.extend({ iframeURL_JS: e3, iframeID: this.getID(), origin: f() }, this._templateConfig.extraOptions));
            this._frame = n2, this._onLoad = r.callbackTimeout(this._vpaidOptions.timeout, function(e4) {
              if (e4.origin !== f())
                return;
              var n3, o2, s2, c2;
              try {
                n3 = JSON.parse(e4.data);
              } catch (e5) {
                throw e5;
              }
              if (n3.id !== i3.getID())
                return;
              i3._frame.contentWindow ? (c2 = i3._frame.contentWindow.getVPAIDAd, s2 = r.validate("function" == typeof c2, "the ad didn't return a function to create an ad")) : s2 = "the iframe is not anymore in the DOM tree";
              if (!s2) {
                var u2 = i3._frame.contentWindow.document.querySelector(".ad-element");
                (o2 = new a(c2(), u2, i3._videoEl, i3._frame)).subscribe("AdStopped", l.bind(i3)), s2 = r.validate(o2.isValidVPAIDAd(), "the add is not fully complaint with VPAID specification");
              }
              return i3._adUnit = o2, d.call(i3), t3(s2, s2 ? null : o2), true;
            }.bind(this), function() {
              t3("timeout", null);
            }.bind(this)), window.addEventListener("message", this._onLoad);
          }
        }, o.prototype.unloadAdUnit = function() {
          c.call(this);
        }, o.prototype.getID = function() {
          return this._id;
        }, e2.exports = o, window.VPAIDHTML5Client = o;
      }, 437: (e2) => {
        "use strict";
        function t2() {
          this._subscribers = {};
        }
        t2.prototype.subscribe = function(e3, t3, i2) {
          this.isHandlerAttached(e3, t3) || this.get(t3).push({ handler: e3, context: i2, eventName: t3 });
        }, t2.prototype.unsubscribe = function(e3, t3) {
          this._subscribers[t3] = this.get(t3).filter(function(t4) {
            return e3 !== t4.handler;
          });
        }, t2.prototype.unsubscribeAll = function() {
          this._subscribers = {};
        }, t2.prototype.trigger = function(e3, t3) {
          var i2 = this;
          this.get(e3).concat(this.get("*")).forEach(function(e4) {
            setTimeout(function() {
              i2.isHandlerAttached(e4.handler, e4.eventName) && e4.handler.call(e4.context, t3);
            }, 0);
          });
        }, t2.prototype.triggerSync = function(e3, t3) {
          this.get(e3).concat(this.get("*")).forEach(function(e4) {
            e4.handler.call(e4.context, t3);
          });
        }, t2.prototype.get = function(e3) {
          return this._subscribers[e3] || (this._subscribers[e3] = []), this._subscribers[e3];
        }, t2.prototype.isHandlerAttached = function(e3, t3) {
          return this.get(t3).some(function(t4) {
            return e3 === t4.handler;
          });
        }, e2.exports = t2;
      }, 77: (e2) => {
        "use strict";
        function t2() {
        }
        function i2(e3, t3, i3) {
          var n2 = document.createElement("iframe");
          return n2.src = t3 || "about:blank", n2.marginWidth = "0", n2.marginHeight = "0", n2.frameBorder = "0", n2.width = "100%", n2.height = "100%", r(n2), i3 && (n2.style.zIndex = i3), n2.setAttribute("SCROLLING", "NO"), e3.innerHTML = "", e3.appendChild(n2), n2;
        }
        function r(e3) {
          e3 && (e3.style.position = "absolute", e3.style.left = "0", e3.style.top = "0", e3.style.margin = "0px", e3.style.padding = "0px", e3.style.border = "none", e3.style.width = "100%", e3.style.height = "100%");
        }
        function n(e3, t3) {
          return Object.keys(t3).forEach(function(i3) {
            var r2 = "object" == typeof r2 ? JSON.stringify(t3[i3]) : t3[i3];
            e3 = e3.replace(new RegExp("{{" + i3 + "}}", "g"), r2);
          }), e3;
        }
        function a(e3, t3) {
          var i3 = e3.contentWindow && e3.contentWindow.document;
          return !!i3 && (i3.write(t3), true);
        }
        e2.exports = { noop: t2, validate: function(e3, t3) {
          return e3 ? null : new Error(t3);
        }, callbackTimeout: function(e3, i3, r2) {
          var n2;
          return n2 = setTimeout(function() {
            i3 = t2, r2();
          }, e3), function() {
            var e4 = Array.prototype.slice.call(arguments);
            i3.apply(this, e4) && clearTimeout(n2);
          };
        }, createElementInEl: function(e3, t3, i3) {
          var r2 = document.createElement(t3);
          return i3 && (r2.id = i3), e3.appendChild(r2), r2;
        }, createIframeWithContent: function(e3, t3, r2) {
          var o = i2(e3, null, r2.zIndex);
          if (a(o, n(t3, r2)))
            return o;
        }, createIframe: i2, setFullSizeStyle: r, simpleTemplate: n, setIframeContent: a, extend: function(e3, t3) {
          return Object.keys(t3).forEach(function(i3) {
            e3[i3] = t3[i3];
          }), e3;
        }, unique: function(e3) {
          var t3 = -1;
          return function() {
            return e3 + "_" + ++t3;
          };
        } };
      }, 893: () => {
      } }, t = {};
      function i(r) {
        var n = t[r];
        if (void 0 !== n)
          return n.exports;
        var a = t[r] = { exports: {} };
        return e[r].call(a.exports, a, a.exports, i), a.exports;
      }
      i.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window)
            return window;
        }
      }(), (() => {
        var _e, _t, _i, _r, _n, _a, _o, _s, _l, _c, _u, _d, _p, _h, _s2, _f;
        "use strict";
        const e2 = videojs;
        var t2 = i(248), r = i(144), n = i(908);
        class a extends e2.EventTarget {
          constructor(e3, t3) {
            super();
            __privateAdd(this, _e, () => {
              const e3 = this.options.skip, t3 = this.player;
              e3 > 0 && (t3.duration() || this.duration) >= e3 && (this.skipButtonElement.style.display = "block", this.options.displayRemainingTime && (this.remainingTimeElement.style.display = "block"), this.options.displayRemainingTimeIcons && (this.remainingTimePlayElement.classList.remove("vjs-hidden"), this.remainingTimeMuteElement.classList.remove("vjs-hidden")), t3.on("adtimeupdate", __privateGet(this, _t))), t3.loadingSpinner.el().style.display = "none";
            });
            __privateAdd(this, _t, () => {
              this.player.loadingSpinner.el().style.display = "none";
              const e3 = Math.ceil(this.options.skip - this.player.currentTime());
              if (this.options.displayRemainingTime) {
                const e4 = Math.ceil(this.player.remainingTime());
                this.remainingTimeElement.innerHTML = this.options.messages.remainingTime.replace("{seconds}", e4);
              }
              var t3;
              e3 > 0 ? (o(t3 = this.skipButtonElement) && (t3.className = t3.className.replace(" enabled ", "")), this.skipButtonElement.innerHTML = this.options.messages.skipCountdown.replace("{seconds}", e3)) : (!function(e4) {
                o(e4) || (e4.className += " enabled ");
              }(this.skipButtonElement), this.skipButtonElement.innerHTML = this.options.messages.skip);
            });
            this.player = e3, this.options = t3, this.duration = 0, this.originalState = { controlsEnabled: e3.controls(), seekEnabled: e3.controlBar.progressControl.enabled() };
          }
          setUp() {
            const e3 = this.player, t3 = this.options, i2 = (i3) => {
              if (!t3.displayRemainingTimeIcons)
                return;
              const { className: r2, action: n2, toggleClasses: a2, events: o2, initialState: s2 } = { play: { className: "vjs-icon-play vast-remaining-time-icon-play", action: (e4) => e4.paused() ? e4.play() : e4.pause(), toggleClasses: ["vjs-icon-pause", "vjs-icon-play"], events: ["adplay", "adpause"], initialState: (e4) => e4.paused() ? "vjs-icon-play" : "vjs-icon-pause" }, mute: { className: "vast-remaining-time-icon-mute", action: (e4) => e4.muted(!e4.muted()), toggleClasses: ["vjs-icon-volume-high", "vjs-icon-volume-mute"], events: ["advolumechange"], initialState: (e4) => e4.muted() ? "vjs-icon-volume-mute" : "vjs-icon-volume-high" } }[i3], l2 = e3.addChild("button", { className: `vjs-hidden vjs-visible-text vjs-button vast-remaining-time-icon ${r2}`, clickHandler: function() {
                n2(this.player);
              }.bind(this) });
              l2.removeClass("vjs-control"), l2.addClass(s2(e3));
              const c2 = () => {
                a2.forEach((e4) => l2.toggleClass(e4));
              };
              this[`remainingTime${i3.charAt(0).toUpperCase() + i3.slice(1)}Element`] = l2.el(), o2.forEach((t4) => e3.on(t4, c2));
            };
            e3.controls(t3.controlsEnabled), t3.seekEnabled ? e3.controlBar.progressControl.enable() : e3.controlBar.progressControl.disable(), (() => {
              const t4 = this.blocker = n.document.createElement("div");
              t4.className = "vast-blocker", t4.onclick = () => {
                if (e3.paused())
                  return e3.play(), false;
                this.trigger("click");
              }, e3.el().insertBefore(t4, e3.controlBar.el());
            })(), (() => {
              const t4 = this.skipButtonElement = n.document.createElement("div");
              t4.className = "vast-skip-button", t4.style.display = "none", e3.el().appendChild(t4), e3.one("adplay", __privateGet(this, _e)), t4.onclick = (e4) => {
                if ((" " + t4.className + " ").indexOf(" enabled ") >= 0 && this.trigger("skip"), void 0 === n.Event.prototype.stopPropagation)
                  return false;
                e4.stopPropagation();
              };
            })(), (() => {
              if (!t3.displayRemainingTime)
                return;
              const i3 = this.remainingTimeElement = n.document.createElement("div");
              i3.className = "vast-remaining-time", i3.style.display = "none", e3.el().appendChild(i3);
            })(), i2("play"), i2("mute");
          }
          tearDown() {
            const e3 = this.player, t3 = this.originalState;
            e3.controls(t3.controlsEnabled), t3.seekEnabled ? e3.controlBar.progressControl.enable() : e3.controlBar.progressControl.disable(), this.blocker.parentElement.removeChild(this.blocker), this.skipButtonElement.parentElement.removeChild(this.skipButtonElement), this.options.displayRemainingTime && this.remainingTimeElement.parentElement.removeChild(this.remainingTimeElement), this.options.displayRemainingTimeIcons && (this.remainingTimePlayElement.parentElement.removeChild(this.remainingTimePlayElement), this.remainingTimeMuteElement.parentElement.removeChild(this.remainingTimeMuteElement)), e3.off("adtimeupdate", __privateGet(this, _t)), e3.off("adplay", __privateGet(this, _e));
          }
        }
        _e = new WeakMap();
        _t = new WeakMap();
        function o(e3) {
          return (" " + e3.className + " ").indexOf(" enabled ") > -1;
        }
        function s(e3, t3 = null) {
          let i2;
          return function() {
            return e3 && (i2 = e3.apply(t3 || this, arguments), e3 = null), i2;
          };
        }
        function l(e3) {
          return "linear" === e3.type && e3.mediaFiles.length;
        }
        function c(e3) {
          return "companion" === e3.type;
        }
        function u(e3, t3 = null) {
          let i2 = null;
          if ("string" == typeof e3)
            if (e3.includes("%")) {
              if (null != t3) {
                i2 = e3.replace("%", "") / 100 * t3;
              }
            } else if (e3.includes(":")) {
              const [t4, r2, n2] = e3.split(":").slice(-3);
              i2 = 3600 * parseInt(t4 || 0, 10) + 60 * parseInt(r2 || 0, 10) + parseInt(n2 || 0, 10);
            } else
              i2 = parseInt(e3);
          return null == i2 && (i2 = Number(e3)), isNaN(i2) ? null : i2;
        }
        class d {
          constructor(e3, t3) {
            __privateAdd(this, _i, void 0);
            __privateAdd(this, _r, void 0);
            __privateAdd(this, _n, void 0);
            __privateSet(this, _i, e3), __privateSet(this, _r, t3), __privateSet(this, _n, false);
          }
          get linearCreative() {
            return __privateGet(this, _i).creative;
          }
          get linearAdTracker() {
            return __privateGet(this, _i);
          }
          get companionTracker() {
            return __privateGet(this, _r);
          }
          get skipAfterDuration() {
            return __privateGet(this, _n);
          }
          set skipAfterDuration(e3) {
            __privateSet(this, _n, e3);
          }
          hasVideoMedia() {
            return this.linearCreative.mediaFiles.some((e3) => e3 && null == e3.apiFramework);
          }
        }
        _i = new WeakMap();
        _r = new WeakMap();
        _n = new WeakMap();
        class p {
          constructor(e3, t3, i2, r2) {
            __privateAdd(this, _a, void 0);
            __privateAdd(this, _o, void 0);
            __privateAdd(this, _s, void 0);
            __privateAdd(this, _l, void 0);
            __privateAdd(this, _c, (e3) => e3.map((e4) => {
              const i2 = new t2.VASTTracker(__privateGet(this, _a), e4, e4.creatives.find(l), e4.creatives.find(c));
              i2.on("clickthrough", h);
              let r2 = null;
              const n2 = e4.creatives.find(c);
              if (n2) {
                const i3 = __privateGet(this, _s), a2 = n2.variations.filter((e5) => e5.staticResource).filter((e5) => 0 === e5.type.indexOf("image")).find((e5) => parseInt(e5.width, 10) <= i3.companion.maxWidth && parseInt(e5.height, 10) <= i3.companion.maxHeight);
                a2 && (r2 = new t2.VASTTracker(__privateGet(this, _a), e4, n2, a2), r2.on("clickthrough", h));
              }
              return new d(i2, r2);
            }));
            __privateSet(this, _a, e3), __privateSet(this, _o, t3), __privateSet(this, _l, i2), __privateSet(this, _s, r2);
          }
          loadAds(e3 = {}) {
            return new Promise((t3, i2) => {
              const { url: r2, xml: n2 } = e3, a2 = (Array.isArray(r2) ? r2 : [r2]).filter((e4) => null != e4);
              let o2;
              if (a2.length)
                o2 = Promise.resolve([]), a2.forEach((e4) => {
                  o2 = o2.then((t4) => null == t4 || 0 === t4.length ? this.loadAdsWithUrl(e4) : t4).catch((e5) => []);
                });
              else {
                if (null == n2)
                  throw new Error("xml or url must be set");
                o2 = this.loadAdsWithXml(n2);
              }
              o2.then(t3).catch(i2);
            });
          }
          loadAdsWithXml(e3) {
            return new Promise((t3, i2) => {
              let r2;
              if (e3.constructor === n.XMLDocument)
                r2 = e3;
              else {
                if (e3.constructor !== String)
                  throw new Error("xml config option must be a String or XMLDocument");
                r2 = new n.DOMParser().parseFromString(e3, "application/xml");
              }
              __privateGet(this, _o).parseVAST(r2).then(__privateGet(this, _l).selectAds).then(__privateGet(this, _c)).then(t3).catch(i2);
            });
          }
          loadAdsWithUrl(e3) {
            return new Promise((t3, i2) => {
              __privateGet(this, _a).get(e3, { withCredentials: __privateGet(this, _s).withCredentials, wrapperLimit: __privateGet(this, _s).wrapperLimit }).then(__privateGet(this, _l).selectAds).then(__privateGet(this, _c)).then(t3).catch(i2);
            });
          }
        }
        _a = new WeakMap();
        _o = new WeakMap();
        _s = new WeakMap();
        _l = new WeakMap();
        _c = new WeakMap();
        function h(e3) {
          n.open(e3, "_blank");
        }
        class f {
          selectAds(e3) {
            if (!e3.ads || 0 === e3.ads.length)
              throw new Error("no ads found in VAST");
            const t3 = e3.ads.filter((e4) => e4.creatives.some(l));
            if (!t3.length)
              throw new Error("no linear ads found in VAST");
            const i2 = t3.filter((e4) => e4.sequence);
            if (i2.length)
              return i2.sort((e4, t4) => e4.sequence - t4.sequence);
            return t3.filter((e4) => !i2.includes(e4)).slice(0, 1);
          }
        }
        var m = i(178);
        function v(e3) {
          if (e3) {
            const t3 = e3.ad, i2 = e3.creative;
            return { mediaFiles: i2.mediaFiles.map((e4) => Object.assign({}, e4)), adSequenceId: t3.sequence, adId: t3.id, creativeAdId: i2.id };
          }
        }
        const g = ["application/x-javascript", "text/javascript", "application/javascript"];
        class y {
          constructor(e3, t3) {
            __privateAdd(this, _u, void 0);
            __privateAdd(this, _d, void 0);
            __privateAdd(this, _p, void 0);
            __privateAdd(this, _h, void 0);
            __privateAdd(this, _s2, void 0);
            __privateAdd(this, _f, void 0);
            __privateSet(this, _h, e3), __privateSet(this, _s2, t3), __privateSet(this, _f, new videojs.EventTarget());
          }
          handle(e3) {
            return __privateSet(this, _d, false), __privateSet(this, _p, false), __privateSet(this, _u, false), new Promise((t3, i2) => {
              const a2 = __privateGet(this, _s2), o2 = __privateGet(this, _h);
              let l2 = null, c2 = {}, u2 = false;
              const d2 = e3.creative, p2 = d2.mediaFiles.find((e4) => "VPAID" === e4.apiFramework && function(e5) {
                return g.indexOf(e5.mimeType.trim()) > -1;
              }(e4));
              if (!p2)
                throw new Error("Invalid VPAID media file: only JavaScript is supported");
              const h2 = o2.el().querySelector(".vjs-tech");
              l2 = function(e4) {
                const t4 = e4.vpaid.containerId, i3 = e4.vpaid.containerClass;
                let n2 = r.getElementById(t4);
                n2 || (n2 = r.getElementsByClassName(i3)[0]);
                return n2;
              }(a2), l2 ? u2 = true : (l2 = function(e4) {
                const t4 = e4.vpaid.containerId, i3 = e4.vpaid.containerClass, n2 = r.createElement("div");
                t4 && n2.setAttribute("id", t4);
                i3 && n2.classList.add(i3);
                return n2;
              }(a2), u2 = false), c2 = A(l2), o2.el().insertBefore(l2, o2.controlBar.el());
              const f2 = new m(l2, h2, {});
              f2.loadAdUnit(p2.fileURL, (r2, p3) => {
                let h3;
                if (r2)
                  return void i2(r2);
                const m2 = () => {
                  y2(), t3(), o2.trigger("vpaid.AdStopped"), o2.trigger({ type: "vast.adEnd", vast: v(e3) });
                };
                p3.subscribe("AdStopped", m2);
                const g2 = (e4) => {
                  if (p3 && !__privateGet(this, _u)) {
                    p3.unsubscribe("AdStopped", m2);
                    const t4 = () => {
                      __privateSet(this, _u, true), y2(), i2(e4), o2.trigger("vpaid.AdStopped");
                    };
                    k(p3, "AdStopped", t4, t4), p3.stopAd();
                  } else
                    __privateSet(this, _u, true), i2(e4);
                };
                if (__privateGet(this, _f).on("forceStopAd", g2), __privateGet(this, _d))
                  return void g2("Received cancel signal from player");
                function y2() {
                  if (o2.controlBar.show(), o2.off("playerresize", R), "new" === a2.vpaid.videoInstance && h3.parentElement && h3.parentElement.removeChild(h3), f2.destroy(), l2) {
                    if (u2) {
                      l2.innerHTML = "";
                      const e4 = c2, t4 = A(l2);
                      for (const [i3, r3] of Object.entries(t4))
                        e4.hasOwnProperty(i3) ? e4[i3] !== r3 && l2.setAttribute(i3, e4[i3]) : l2.removeAttribute(i3);
                      for (const [i3, r3] of Object.entries(e4))
                        t4.hasOwnProperty(i3) || l2.setAttribute(i3, r3);
                    } else
                      l2.parentElement && l2.parentElement.removeChild(l2);
                    l2 = null;
                  }
                }
                const b2 = () => {
                  if (__privateGet(this, _d))
                    return void g2("Received cancel signal");
                  p3.subscribe("AdSkipped", () => {
                    e3.skip(), o2.trigger("vpaid.AdSkipped"), o2.trigger({ type: "vast.adSkip", vast: v(e3) });
                  }), p3.subscribe("AdVolumeChange", () => {
                    const t5 = o2.volume();
                    p3.getAdVolume((i3, r3) => {
                      i3 || (0 === r3 && t5 > 0 ? e3.setMuted(true) : r3 > 0 && 0 === t5 && e3.setMuted(false), o2.volume(r3), o2.trigger("vpaid.AdVolumeChange"));
                    });
                  }), p3.subscribe("AdImpression", () => {
                    e3.trackImpression(), o2.trigger("vpaid.AdImpression");
                  }), p3.subscribe("AdClickThru", (t5, i3, r3) => {
                    r3 && e3.once("clickthrough", (e4) => {
                      n.open(e4, "_blank");
                    }), e3.click(t5), o2.trigger("vpaid.AdClickThru");
                  }), p3.subscribe("AdVideoFirstQuartile", () => {
                    e3.track("firstQuartile"), o2.trigger("vpaid.AdVideoFirstQuartile");
                  }), p3.subscribe("AdVideoMidpoint", () => {
                    e3.track("midpoint"), o2.trigger("vpaid.AdVideoMidpoint");
                  }), p3.subscribe("AdVideoThirdQuartile", () => {
                    e3.track("thirdQuartile"), o2.trigger("vpaid.AdVideoThirdQuartile");
                  }), p3.subscribe("AdVideoComplete", () => {
                    e3.track("complete"), o2.trigger("vpaid.AdVideoComplete");
                  }), p3.subscribe("AdUserAcceptInvitation", () => {
                    e3.acceptInvitation(), o2.trigger("vpaid.AdUserAcceptInvitation");
                  }), p3.subscribe("AdUserMinimize", () => {
                    e3.minimize(), o2.trigger("vpaid.AdUserMinimize");
                  }), p3.subscribe("AdUserClose", () => {
                    e3.close(), o2.trigger("vpaid.AdUserClose");
                  }), p3.subscribe("AdPaused", () => {
                    e3.setPaused(true), o2.trigger("vpaid.AdPaused");
                  }), p3.subscribe("AdPlaying", () => {
                    e3.setPaused(false), o2.trigger("vpaid.AdPlaying");
                  }), p3.getAdLinear(T((e4, i3) => {
                    __privateGet(this, _d) ? g2("Received cancel signal") : e4 ? g2(e4) : i3 ? t4() : g2("Non-linear not supported");
                  }, () => {
                    g2("Unable to get mode of operation: linear or non-linear");
                  }));
                  const t4 = () => {
                    o2.controlBar.hide();
                    const e4 = s(E2);
                    k(p3, "AdStarted", e4, g2), p3.startAd();
                  };
                }, E2 = () => {
                  __privateGet(this, _d) ? g2("Received cancel signal") : (__privateSet(this, _p, true), e3.track("start"), o2.on("playerresize", R), o2.trigger("ads-ad-started"), o2.trigger({ type: "vast.adStart", vast: v(e3) }));
                }, R = () => {
                  p3.resizeAd(o2.currentWidth(), o2.currentHeight(), o2.isFullscreen() ? "fullscreen" : "normal");
                };
                p3.handshakeVersion("2.0", (t4, r3) => {
                  if (t4)
                    return log.console(t4), void g2("Error on VPAID handshake");
                  const s2 = { AdParameters: d2.adParameters || "" }, c3 = a2.vpaid.videoInstance;
                  "same" === c3 ? h3 = o2.tech({ kindaKnowWhatImDoing: true }).el() : "new" === c3 ? (h3 = n.document.createElement("video"), h3.style.cssText = "position:absolute; top:0; left:0; z-index:2 !important;", l2.appendChild(h3)) : h3 = null;
                  const u3 = { slot: l2, videoSlot: h3 };
                  k(p3, "AdLoaded", b2, g2);
                  const f3 = o2.isFullscreen() ? "fullscreen" : "normal";
                  p3.subscribe("AdError", (t5) => {
                    e3.error({ ERRORCODE: 901 }), __privateSet(this, _u, true), y2(), i2(`Fatal VPAID Error: ${"object" == typeof t5 ? JSON.stringify(t5) : t5}`), o2.trigger({ type: "vpaid.AdError", error: t5 });
                  }), p3.initAd(o2.currentWidth(), o2.currentHeight(), f3, -1, s2, u3);
                });
              });
            });
          }
          cancel() {
            __privateSet(this, _d, true), __privateGet(this, _p) && __privateGet(this, _f).trigger("forceStopAd");
          }
        }
        _u = new WeakMap();
        _d = new WeakMap();
        _p = new WeakMap();
        _h = new WeakMap();
        _s2 = new WeakMap();
        _f = new WeakMap();
        function A(e3) {
          const t3 = {};
          for (const i2 of e3.attributes)
            t3[i2.name] = i2.value;
          return t3;
        }
        function T(e3, t3 = null) {
          const i2 = setTimeout(() => {
            e3 = () => {
            }, t3 && t3();
          }, 1e4);
          return function() {
            clearTimeout(i2), e3.apply(null, arguments);
          };
        }
        function k(e3, t3, i2, r2) {
          const n2 = T(i2, () => {
            r2 && r2(new Error(`Timeout while waiting for ${t3} event.`));
          });
          e3.subscribe(t3, n2);
        }
        const b = e2.getPlugin("plugin"), E = Object.freeze({ seekEnabled: false, controlsEnabled: false, wrapperLimit: 10, withCredentials: true, skip: 0, displayRemainingTime: false, displayRemainingTimeIcons: false, messages: { skip: "Skip", skipCountdown: "Skip in {seconds}...", remainingTime: "This ad will end in {seconds}" }, vpaid: { containerId: void 0, containerClass: "vjs-vpaid-container", videoInstance: "none" }, companion: { elementId: null, maxWidth: 0, maxHeight: 0 } });
        e2.registerPlugin("vast", class extends b {
          constructor(i2, n2) {
            super(i2), "function" == typeof i2.ads && i2.ads({ debug: false, liveCuePoints: false }), i2.on("play", function() {
            });
            const o2 = parseInt(e2.VERSION, 10) >= 8 ? e2.obj.merge : e2.mergeOptions;
            n2 = o2(E, n2 || {});
            const l2 = new t2.VASTClient(), c2 = [];
            let d2 = null, h2 = 0, m2 = 0;
            const g2 = new y(i2, n2);
            let A2 = false, T2 = n2.schedule;
            var k2;
            null == T2 || 0 === T2.length ? T2 = [{ offset: 0, url: n2.url || null, xml: n2.xml || null }] : (k2 = T2, T2 = JSON.parse(JSON.stringify(k2)), T2.forEach((e3) => delete e3.offsetInSeconds));
            const b2 = function(e3) {
              return e3.find(B);
            }(T2), R = function(e3) {
              return e3.find(_);
            }(T2), w = function(e3) {
              return e3.filter((e4) => !B(e4) && !_(e4));
            }(T2).sort((e3, t3) => e3.offset - t3.offset), N = i2.autoplay();
            i2.on("adtimeout", () => {
              A2 = true;
            });
            const C = new a(i2, n2);
            function L() {
              (d2 == null ? void 0 : d2.hasVideoMedia()) && (d2.linearAdTracker.skip(), i2.trigger({ type: "vast.skipAd", vast: v(d2.linearAdTracker) }), D());
            }
            C.on("skip", L), C.on("click", () => {
              d2.linearAdTracker.click();
            });
            const I = (() => {
              let e3 = false;
              return () => {
                if (e3)
                  return;
                let t3 = null;
                for (; w.length > 0 && (t3 = w[0].offsetInSeconds, null == t3); ) {
                  const { offset: e4 } = w[0];
                  t3 = u(e4, i2.duration()), null == t3 ? w.shift() : w[0].offsetInSeconds = t3;
                }
                if (null != t3 && this.player.currentTime() > t3) {
                  e3 = true;
                  const t4 = w.shift();
                  S.loadAds(t4).then((e4) => {
                    e4.length > 0 && (c2.push(...e4), d2 = null, M());
                  }).catch((e4) => {
                  }).finally(() => {
                    e3 = false;
                  });
                }
              };
            })();
            w.length > 0 && i2.on("timeupdate", I), i2.on("readyforpostroll", () => {
              A2 = false, S.loadAds(R).then((e3) => {
                A2 ? e3.forEach((e4) => {
                  e4.linearAdTracker.error({ ERRORCODE: 301 });
                }) : e3.length > 0 ? (c2.push(...e3), d2 = null, M()) : i2.trigger("nopostroll");
              }).catch((e3) => {
                i2.trigger("nopostroll");
              });
            }), i2.on("readyforpreroll", () => {
              M();
            });
            const U = s(() => {
              i2.trigger("adsready");
            });
            setTimeout(U, 3e3);
            const S = new p(l2, new t2.VASTParser(), new f(), n2);
            S.loadAds(b2).then((e3) => {
              A2 ? e3.forEach((e4) => {
                e4.linearAdTracker.error({ ERRORCODE: 301 });
              }) : e3.length > 0 ? (c2.push(...e3), d2 = null) : i2.trigger("nopreroll");
            }).catch((e3) => {
              i2.trigger("nopreroll");
            }).finally(() => {
              U(), N && i2.play();
            });
            const x = (e3) => e3.filter((e4) => null == e4.apiFramework).map((e4) => ({ type: e4.mimeType, src: e4.fileURL })), D = () => {
              const e3 = c2.shift();
              if ((e3 == null ? void 0 : e3.hasVideoMedia()) ? (d2 == null ? void 0 : d2.hasVideoMedia()) || C.setUp() : (d2 == null ? void 0 : d2.hasVideoMedia()) && C.tearDown(), e3) {
                if (d2 = e3, h2++, d2.hasVideoMedia()) {
                  const e4 = d2.linearCreative.mediaFiles, t3 = e4.filter((e5) => "streaming" === e5.deliveryType), r2 = e4.filter((e5) => "streaming" !== e5.deliveryType);
                  if (r2.length > 0)
                    i2.src(x(r2));
                  else if (t3.length > 0) {
                    let e5 = d2.linearAdTracker.assetDuration;
                    if (null == e5 || e5 < 1)
                      return void D();
                    i2.src(x(t3)), d2.skipAfterDuration = true;
                  }
                  C.duration = d2.linearAdTracker.assetDuration || 0;
                } else
                  g2.handle(d2.linearAdTracker).then(() => {
                    D();
                  }).catch((e4) => {
                    D();
                  });
                P();
              } else
                d2 = null, h2 = 0, F();
            }, { setUpEvents: O, tearDownEvents: V } = (() => {
              const e3 = () => {
                if (d2.skipAfterDuration) {
                  const e4 = d2;
                  setTimeout(() => {
                    d2 === e4 && L();
                  }, 1e3 * e4.linearAdTracker.assetDuration);
                }
                !d2.linearAdTracker.impressed && d2.hasVideoMedia() && (d2.linearAdTracker.trackImpression(), i2.trigger({ type: "vast.adStart", vast: v(d2.linearAdTracker) }));
              }, t3 = () => {
                d2 && (isNaN(d2.linearAdTracker.assetDuration) && (d2.linearAdTracker.assetDuration = i2.duration()), d2.linearAdTracker.setProgress(i2.currentTime()));
              }, r2 = () => {
                i2.remainingTime() > 0 && (d2.linearAdTracker.setPaused(true), i2.one("adplay", () => {
                  d2.linearAdTracker.setPaused(false);
                }));
              }, n3 = () => {
                d2.linearAdTracker.error({ ERRORCODE: 405 }), i2.error(null), D();
              }, a2 = () => {
                d2.linearAdTracker.setFullscreen(i2.isFullscreen());
              }, o3 = (() => {
                let e4 = i2.muted(), t4 = i2.volume();
                return () => {
                  const r3 = i2.volume(), n4 = i2.muted();
                  e4 !== n4 ? (d2.linearAdTracker.setMuted(n4), e4 = n4) : t4 !== r3 && (t4 > 0 && 0 === r3 ? d2.linearAdTracker.setMuted(true) : 0 === t4 && r3 > 0 && d2.linearAdTracker.setMuted(false), t4 = r3);
                };
              })(), s2 = () => {
                d2.hasVideoMedia() && (d2.linearAdTracker.complete(), i2.trigger({ type: "vast.adEnd", vast: v(d2.linearAdTracker) }), D());
              };
              return { setUpEvents: () => {
                i2.on("adended", s2), i2.on("adplay", e3), i2.on("adtimeupdate", t3), i2.on("adpause", r2), i2.on("aderror", n3), i2.on("advolumechange", o3), i2.on("fullscreenchange", a2);
              }, tearDownEvents: () => {
                i2.off("adended", s2), i2.off("adplay", e3), i2.off("adtimeupdate", t3), i2.off("adpause", r2), i2.off("aderror", n3), i2.off("advolumechange", o3), i2.off("fullscreenchange", a2);
              } };
            })(), P = () => {
              const e3 = d2.companionTracker, t3 = r.getElementById(n2.companion.elementId);
              if (e3 && e3.variation && t3) {
                const i3 = e3.variation, n3 = () => {
                  e3.click();
                }, a2 = r.createElement("a");
                a2.src = "#", a2.addEventListener("click", n3);
                const o3 = r.createElement("img");
                o3.src = i3.staticResource, a2.appendChild(o3), t3.innerHTML = "", t3.appendChild(a2);
              } else
                t3 && (t3.innerHTML = "");
            }, M = () => {
              m2 = c2.length, i2.ads.startLinearAdMode(), O(), D();
            };
            function B(e3) {
              return 0 === e3.offset || null == e3.offset || "pre" === e3.offset;
            }
            function _(e3) {
              return "post" === e3.offset;
            }
            const F = () => {
              i2.ads.endLinearAdMode(), V();
            };
          }
        });
      })();
    })();
  }
});

// lib/shared.js
var DEFAULT_SKIP_TIME = 8;
var DEFAULT_SKIP_COUNTDOWN_MESSAGE = "Skip in {seconds}...";
var DEFAULT_SKIP_MESSAGE = "Skip";
var settings = (s) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  return {
    preroll: {
      enabled: (_a = s["vast-preroll-enabled"]) != null ? _a : false,
      url: s["vast-preroll-url"]
    },
    midroll: {
      enabled: (_b = s["vast-midroll-enabled"]) != null ? _b : false,
      url: s["vast-midroll-url"],
      offset: (_c = s["vast-midroll-offset"]) != null ? _c : "25%"
    },
    postroll: {
      enabled: (_d = s["vast-postroll-enabled"]) != null ? _d : false,
      url: s["vast-postroll-url"]
    },
    embededEnabled: (_e = s["vast-embeded-enabled"]) != null ? _e : true,
    controlsEnabled: (_f = s["vast-player-controls-enabled"]) != null ? _f : true,
    skipTime: (_g = s["vast-skip-time"]) != null ? _g : DEFAULT_SKIP_TIME,
    messageSkipCountdown: (_h = s["vast-message-skip-countdown"]) != null ? _h : DEFAULT_SKIP_COUNTDOWN_MESSAGE,
    messageSkip: (_i = s["vast-message-skip"]) != null ? _i : DEFAULT_SKIP_MESSAGE,
    messageRemainingTime: s["vast-message-remainingTime"]
  };
};
var loadContribAds = async (player) => {
  try {
    const { default: contrib } = await Promise.resolve().then(() => __toESM(require_videojs_ads_min()));
    player.ads({ debug: false, allowVjsAutoplay: true });
  } catch (error) {
    console.error("Error loading ads plugin:", error);
  }
};
var getRollsStatus = (pluginSettings) => {
  const isRollEnabled = (roll) => roll.url && roll.enabled;
  const rolls = {
    preroll: isRollEnabled(pluginSettings.preroll),
    midroll: isRollEnabled(pluginSettings.midroll),
    postroll: isRollEnabled(pluginSettings.postroll)
  };
  return __spreadProps(__spreadValues({}, rolls), {
    hasAtLeastOneRollEnabled: Object.values(rolls).some(Boolean)
  });
};
var createVastSettings = (pluginSettings) => {
  const { skipTime, controlsEnabled, messageSkip, messageSkipCountdown, messageRemainingTime } = pluginSettings;
  const vastSettings = {
    skip: skipTime,
    controlsEnabled,
    seekEnabled: controlsEnabled,
    withCredentials: false,
    messages: {
      skip: messageSkip,
      skipCountdown: messageSkipCountdown
    },
    schedule: []
  };
  if (messageRemainingTime == null ? void 0 : messageRemainingTime.includes("{seconds}")) {
    Object.assign(vastSettings, {
      displayRemainingTime: true,
      displayRemainingTimeIcons: true,
      messages: __spreadProps(__spreadValues({}, vastSettings.messages), { remainingTime: messageRemainingTime })
    });
  }
  const rollsStatus = getRollsStatus(pluginSettings);
  const rollConfigs = {
    preroll: { offset: "pre", roll: "pre" },
    midroll: { offset: pluginSettings.midroll.offset, roll: "mid" },
    postroll: { offset: "post", roll: "post" }
  };
  Object.entries(rollConfigs).forEach(([rollType, { offset, roll }]) => {
    if (rollsStatus[rollType]) {
      const rollUrl = pluginSettings[rollType].url;
      if (rollUrl && offset) {
        vastSettings.schedule.push({
          offset,
          url: rollUrl
        });
      }
    }
  });
  return vastSettings;
};
var buildVastPlayer = async (vastSettings, player) => {
  try {
    const { default: VastPlugin } = await Promise.resolve().then(() => __toESM(require_videojsx_vast()));
    player.vast(vastSettings);
  } catch (error) {
    console.error("Error loading VastPlugin:", error);
  }
};

// client/video-watch-client-plugin.js
function register({ registerHook, peertubeHelpers }) {
  init(registerHook, peertubeHelpers).catch((err) => console.error("[VAST PLUGIN] Cannot initialize plugin", err));
}
async function init(registerHook, peertubeHelpers) {
  const s = await peertubeHelpers.getSettings();
  if (!s) {
    console.error("Could not find settings.");
    return;
  }
  const pluginSettings = settings(s);
  const rollsStatus = getRollsStatus(pluginSettings);
  registerHook({
    target: "filter:internal.video-watch.player.load-options.result",
    handler: (result) => {
      if (rollsStatus.hasAtLeastOneRollEnabled) {
        result.autoplay = false;
      }
      return result;
    }
  });
  registerHook({
    target: "action:video-watch.player.loaded",
    handler: async ({ videojs: videojs2, player, video }) => {
      if (!rollsStatus.hasAtLeastOneRollEnabled)
        return;
      window.videojs = videojs2;
      window.player = player;
      console.log("[VAST PLUGIN] Player loaded pluginData", video == null ? void 0 : video.pluginData);
      console.log("[VAST PLUGIN] Player loaded", video);
      await loadContribAds(player);
      try {
        const vastSettings = createVastSettings(pluginSettings);
        await buildVastPlayer(vastSettings, player);
      } catch (error) {
        console.error("[VAST PLUGIN] Error:", error);
      }
    }
  });
}
export {
  register
};
/*! @name videojs-contrib-ads @version 6.9.0 @license Apache-2.0 */
