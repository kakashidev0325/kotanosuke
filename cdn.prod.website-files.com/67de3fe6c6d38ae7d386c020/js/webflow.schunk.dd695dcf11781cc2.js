"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
  ["117"],
  {
    9904: function () {
      !(function () {
        if ("undefined" == typeof window) return;
        let t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
          e = !!t && parseInt(t[1], 10) >= 16;
        if ("objectFit" in document.documentElement.style != !1 && !e) {
          window.objectFitPolyfill = function () {
            return !1;
          };
          return;
        }
        let n = function (t) {
            let e = window.getComputedStyle(t, null),
              n = e.getPropertyValue("position"),
              i = e.getPropertyValue("overflow"),
              o = e.getPropertyValue("display");
            (!n || "static" === n) && (t.style.position = "relative"),
              "hidden" !== i && (t.style.overflow = "hidden"),
              (!o || "inline" === o) && (t.style.display = "block"),
              0 === t.clientHeight && (t.style.height = "100%"),
              -1 === t.className.indexOf("object-fit-polyfill") &&
                (t.className += " object-fit-polyfill");
          },
          i = function (t) {
            let e = window.getComputedStyle(t, null),
              n = {
                "max-width": "none",
                "max-height": "none",
                "min-width": "0px",
                "min-height": "0px",
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto",
                "margin-top": "0px",
                "margin-right": "0px",
                "margin-bottom": "0px",
                "margin-left": "0px",
              };
            for (let i in n)
              e.getPropertyValue(i) !== n[i] && (t.style[i] = n[i]);
          },
          o = function (t) {
            let e = t.parentNode;
            n(e),
              i(t),
              (t.style.position = "absolute"),
              (t.style.height = "100%"),
              (t.style.width = "auto"),
              t.clientWidth > e.clientWidth
                ? ((t.style.top = "0"),
                  (t.style.marginTop = "0"),
                  (t.style.left = "50%"),
                  (t.style.marginLeft = -(t.clientWidth / 2) + "px"))
                : ((t.style.width = "100%"),
                  (t.style.height = "auto"),
                  (t.style.left = "0"),
                  (t.style.marginLeft = "0"),
                  (t.style.top = "50%"),
                  (t.style.marginTop = -(t.clientHeight / 2) + "px"));
          },
          r = function (t) {
            if (void 0 === t || t instanceof Event)
              t = document.querySelectorAll("[data-object-fit]");
            else if (t && t.nodeName) t = [t];
            else if ("object" != typeof t || !t.length || !t[0].nodeName)
              return !1;
            for (let n = 0; n < t.length; n++) {
              if (!t[n].nodeName) continue;
              let i = t[n].nodeName.toLowerCase();
              if ("img" === i) {
                if (e) continue;
                t[n].complete
                  ? o(t[n])
                  : t[n].addEventListener("load", function () {
                      o(this);
                    });
              } else
                "video" === i
                  ? t[n].readyState > 0
                    ? o(t[n])
                    : t[n].addEventListener("loadedmetadata", function () {
                        o(this);
                      })
                  : o(t[n]);
            }
            return !0;
          };
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", r)
          : r(),
          window.addEventListener("resize", r),
          (window.objectFitPolyfill = r);
      })();
    },
    1724: function () {
      !(function () {
        function t(t) {
          if (!Webflow.env("design"))
            $("video").each(function () {
              t && $(this).prop("autoplay") ? this.play() : this.pause();
            }),
              $(".w-background-video--control").each(function () {
                t ? n($(this)) : e($(this));
              });
        }
        function e(t) {
          t.find("> span").each(function (t) {
            $(this).prop("hidden", () => 0 === t);
          });
        }
        function n(t) {
          t.find("> span").each(function (t) {
            $(this).prop("hidden", () => 1 === t);
          });
        }
        "undefined" != typeof window &&
          $(document).ready(() => {
            let i = window.matchMedia("(prefers-reduced-motion: reduce)");
            i.addEventListener("change", (e) => {
              t(!e.matches);
            }),
              i.matches && t(!1),
              $("video:not([autoplay])").each(function () {
                $(this)
                  .parent()
                  .find(".w-background-video--control")
                  .each(function () {
                    e($(this));
                  });
              }),
              $(document).on(
                "click",
                ".w-background-video--control",
                function (t) {
                  if (Webflow.env("design")) return;
                  let i = $(t.currentTarget),
                    o = $(`video#${i.attr("aria-controls")}`).get(0);
                  if (o) {
                    if (o.paused) {
                      let t = o.play();
                      n(i),
                        t &&
                          "function" == typeof t.catch &&
                          t.catch(() => {
                            e(i);
                          });
                    } else o.pause(), e(i);
                  }
                }
              );
          });
      })();
    },
    7199: function (t) {
      var e = window.jQuery,
        n = {},
        i = [],
        o = ".w-ix",
        r = {
          reset: function (t, e) {
            e.__wf_intro = null;
          },
          intro: function (t, i) {
            if (!i.__wf_intro)
              (i.__wf_intro = !0), e(i).triggerHandler(n.types.INTRO);
          },
          outro: function (t, i) {
            if (!!i.__wf_intro)
              (i.__wf_intro = null), e(i).triggerHandler(n.types.OUTRO);
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + o, OUTRO: "w-ix-outro" + o }),
        (n.init = function () {
          for (var t = i.length, o = 0; o < t; o++) {
            var a = i[o];
            a[0](0, a[1]);
          }
          (i = []), e.extend(n.triggers, r);
        }),
        (n.async = function () {
          for (var t in r) {
            var e = r[t];
            if (!!r.hasOwnProperty(t))
              n.triggers[t] = function (t, n) {
                i.push([e, n]);
              };
          }
        }),
        n.async(),
        (t.exports = n);
    },
    5134: function (t, e, n) {
      var i = n(7199);
      function o(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
      }
      var r = window.jQuery,
        a = {},
        l = ".w-ix";
      (a.triggers = {}),
        (a.types = { INTRO: "w-ix-intro" + l, OUTRO: "w-ix-outro" + l }),
        r.extend(a.triggers, {
          reset: function (t, e) {
            i.triggers.reset(t, e);
          },
          intro: function (t, e) {
            i.triggers.intro(t, e), o(e, "COMPONENT_ACTIVE");
          },
          outro: function (t, e) {
            i.triggers.outro(t, e), o(e, "COMPONENT_INACTIVE");
          },
        }),
        (t.exports = a);
    },
    2458: function (t, e, n) {
      var i = n(3949),
        o = "w-condition-invisible",
        r = "." + o;
      function a(t) {
        return !!(t.$el && t.$el.closest(r).length);
      }
      function l(t, e) {
        for (var n = t; n >= 0; n--) if (!a(e[n])) return n;
        return -1;
      }
      function d(t, e) {
        for (var n = t; n <= e.length - 1; n++) if (!a(e[n])) return n;
        return -1;
      }
      function s(t, e) {
        !t.attr("aria-label") && t.attr("aria-label", e);
      }
      i.define(
        "lightbox",
        (t.exports = function (t) {
          var e,
            n,
            r,
            u = {},
            c = i.env(),
            f = (function (t, e, n, i) {
              var r,
                u,
                c,
                f = n.tram,
                h = Array.isArray,
                p = "w-lightbox-",
                g = /(^|\s+)/g,
                m = [],
                v = [];
              function w(t, e) {
                if (
                  ((m = h(t) ? t : [t]),
                  !u && w.build(),
                  m.filter(function (t) {
                    return !a(t);
                  }).length > 1)
                )
                  (u.items = u.empty),
                    m.forEach(function (t, e) {
                      var n = M("thumbnail"),
                        i = M("item")
                          .prop("tabIndex", 0)
                          .attr("aria-controls", "w-lightbox-view")
                          .attr("role", "tab")
                          .append(n);
                      s(i, `show item ${e + 1} of ${m.length}`),
                        a(t) && i.addClass(o),
                        (u.items = u.items.add(i)),
                        A(t.thumbnailUrl || t.url, function (t) {
                          t.prop("width") > t.prop("height")
                            ? _(t, "wide")
                            : _(t, "tall"),
                            n.append(_(t, "thumbnail-image"));
                        });
                    }),
                    u.strip.empty().append(u.items),
                    _(u.content, "group");
                return (
                  f(W(u.lightbox, "hide").trigger("focus"))
                    .add("opacity .3s")
                    .start({ opacity: 1 }),
                  _(u.html, "noscroll"),
                  w.show(e || 0)
                );
              }
              function x(t) {
                return function (e) {
                  if (this === e.target)
                    e.stopPropagation(), e.preventDefault(), t();
                };
              }
              (w.build = function () {
                return (
                  w.destroy(),
                  ((u = { html: n(e.documentElement), empty: n() }).arrowLeft =
                    M("control left inactive")
                      .attr("role", "button")
                      .attr("aria-hidden", !0)
                      .attr("aria-controls", "w-lightbox-view")),
                  (u.arrowRight = M("control right inactive")
                    .attr("role", "button")
                    .attr("aria-hidden", !0)
                    .attr("aria-controls", "w-lightbox-view")),
                  (u.close = M("control close").attr("role", "button")),
                  s(u.arrowLeft, "previous image"),
                  s(u.arrowRight, "next image"),
                  s(u.close, "close lightbox"),
                  (u.spinner = M("spinner")
                    .attr("role", "progressbar")
                    .attr("aria-live", "polite")
                    .attr("aria-hidden", !1)
                    .attr("aria-busy", !0)
                    .attr("aria-valuemin", 0)
                    .attr("aria-valuemax", 100)
                    .attr("aria-valuenow", 0)
                    .attr("aria-valuetext", "Loading image")),
                  (u.strip = M("strip").attr("role", "tablist")),
                  (c = new P(u.spinner, T("hide"))),
                  (u.content = M("content").append(
                    u.spinner,
                    u.arrowLeft,
                    u.arrowRight,
                    u.close
                  )),
                  (u.container = M("container").append(u.content, u.strip)),
                  (u.lightbox = M("backdrop hide").append(u.container)),
                  u.strip.on("click", D("item"), E),
                  u.content
                    .on("swipe", k)
                    .on("click", D("left"), b)
                    .on("click", D("right"), y)
                    .on("click", D("close"), C)
                    .on("click", D("image, caption"), y),
                  u.container
                    .on("click", D("view"), C)
                    .on("dragstart", D("img"), O),
                  u.lightbox.on("keydown", R).on("focusin", I),
                  n(i).append(u.lightbox),
                  w
                );
              }),
                (w.destroy = function () {
                  if (!!u)
                    W(u.html, "noscroll"), u.lightbox.remove(), (u = void 0);
                }),
                (w.show = function (t) {
                  if (t !== r) {
                    var e = m[t];
                    if (!e) return w.hide();
                    if (a(e)) {
                      if (t < r) {
                        var i = l(t - 1, m);
                        t = i > -1 ? i : t;
                      } else {
                        var o = d(t + 1, m);
                        t = o > -1 ? o : t;
                      }
                      e = m[t];
                    }
                    var s = r;
                    return (
                      (r = t),
                      u.spinner
                        .attr("aria-hidden", !1)
                        .attr("aria-busy", !0)
                        .attr("aria-valuenow", 0)
                        .attr("aria-valuetext", "Loading image"),
                      c.show(),
                      A(
                        (e.html &&
                          (function (t, e) {
                            return (
                              "data:image/svg+xml;charset=utf-8," +
                              encodeURI(
                                '<svg xmlns="http://www.w3.org/2000/svg" width="' +
                                  t +
                                  '" height="' +
                                  e +
                                  '"/>'
                              )
                            );
                          })(e.width, e.height)) ||
                          e.url,
                        function (i) {
                          if (t === r) {
                            var o,
                              a,
                              h = M("figure", "figure").append(_(i, "image")),
                              p = M("frame").append(h),
                              g = M("view")
                                .prop("tabIndex", 0)
                                .attr("id", "w-lightbox-view")
                                .append(p);
                            e.html &&
                              ((a = (o = n(e.html)).is("iframe")) &&
                                o.on("load", v),
                              h.append(_(o, "embed"))),
                              e.caption &&
                                h.append(
                                  M("caption", "figcaption").text(e.caption)
                                ),
                              u.spinner.before(g),
                              !a && v();
                          }
                          function v() {
                            if (
                              (u.spinner
                                .attr("aria-hidden", !0)
                                .attr("aria-busy", !1)
                                .attr("aria-valuenow", 100)
                                .attr("aria-valuetext", "Loaded image"),
                              c.hide(),
                              t !== r)
                            ) {
                              g.remove();
                              return;
                            }
                            let e = -1 === l(t - 1, m);
                            H(u.arrowLeft, "inactive", e),
                              S(u.arrowLeft, e),
                              e &&
                                u.arrowLeft.is(":focus") &&
                                u.arrowRight.focus();
                            let n = -1 === d(t + 1, m);
                            if (
                              (H(u.arrowRight, "inactive", n),
                              S(u.arrowRight, n),
                              n &&
                                u.arrowRight.is(":focus") &&
                                u.arrowLeft.focus(),
                              u.view
                                ? (f(u.view)
                                    .add("opacity .3s")
                                    .start({ opacity: 0 })
                                    .then(
                                      (function (t) {
                                        return function () {
                                          t.remove();
                                        };
                                      })(u.view)
                                    ),
                                  f(g)
                                    .add("opacity .3s")
                                    .add("transform .3s")
                                    .set({ x: t > s ? "80px" : "-80px" })
                                    .start({ opacity: 1, x: 0 }))
                                : g.css("opacity", 1),
                              (u.view = g),
                              u.view.prop("tabIndex", 0),
                              u.items)
                            ) {
                              W(u.items, "active"),
                                u.items.removeAttr("aria-selected");
                              var i = u.items.eq(t);
                              _(i, "active"),
                                i.attr("aria-selected", !0),
                                (function (t) {
                                  var e,
                                    n = t.get(0),
                                    i = u.strip.get(0),
                                    o = n.offsetLeft,
                                    r = n.clientWidth,
                                    a = i.scrollLeft,
                                    l = i.clientWidth,
                                    d = i.scrollWidth - l;
                                  o < a
                                    ? (e = Math.max(0, o + r - l))
                                    : o + r > l + a && (e = Math.min(o, d)),
                                    null != e &&
                                      f(u.strip)
                                        .add("scroll-left 500ms")
                                        .start({ "scroll-left": e });
                                })(i);
                            }
                          }
                        }
                      ),
                      u.close.prop("tabIndex", 0),
                      n(":focus").addClass("active-lightbox"),
                      0 === v.length &&
                        (n("body")
                          .children()
                          .each(function () {
                            if (
                              !(
                                n(this).hasClass("w-lightbox-backdrop") ||
                                n(this).is("script")
                              )
                            )
                              v.push({
                                node: n(this),
                                hidden: n(this).attr("aria-hidden"),
                                tabIndex: n(this).attr("tabIndex"),
                              }),
                                n(this)
                                  .attr("aria-hidden", !0)
                                  .attr("tabIndex", -1);
                          }),
                        u.close.focus()),
                      w
                    );
                  }
                }),
                (w.hide = function () {
                  return (
                    f(u.lightbox)
                      .add("opacity .3s")
                      .start({ opacity: 0 })
                      .then(N),
                    w
                  );
                }),
                (w.prev = function () {
                  var t = l(r - 1, m);
                  t > -1 && w.show(t);
                }),
                (w.next = function () {
                  var t = d(r + 1, m);
                  t > -1 && w.show(t);
                });
              var b = x(w.prev),
                y = x(w.next),
                C = x(w.hide),
                E = function (t) {
                  var e = n(this).index();
                  t.preventDefault(), w.show(e);
                },
                k = function (t, e) {
                  t.preventDefault(),
                    "left" === e.direction
                      ? w.next()
                      : "right" === e.direction && w.prev();
                },
                I = function () {
                  this.focus();
                };
              function O(t) {
                t.preventDefault();
              }
              function R(t) {
                var e = t.keyCode;
                27 === e || L(e, "close")
                  ? w.hide()
                  : 37 === e || L(e, "left")
                  ? w.prev()
                  : 39 === e || L(e, "right")
                  ? w.next()
                  : L(e, "item") && n(":focus").click();
              }
              function L(t, e) {
                if (13 !== t && 32 !== t) return !1;
                var i = n(":focus").attr("class"),
                  o = T(e).trim();
                return i.includes(o);
              }
              function N() {
                u &&
                  (u.strip.scrollLeft(0).empty(),
                  W(u.html, "noscroll"),
                  _(u.lightbox, "hide"),
                  u.view && u.view.remove(),
                  W(u.content, "group"),
                  _(u.arrowLeft, "inactive"),
                  _(u.arrowRight, "inactive"),
                  (r = u.view = void 0),
                  v.forEach(function (t) {
                    var e = t.node;
                    if (!!e)
                      t.hidden
                        ? e.attr("aria-hidden", t.hidden)
                        : e.removeAttr("aria-hidden"),
                        t.tabIndex
                          ? e.attr("tabIndex", t.tabIndex)
                          : e.removeAttr("tabIndex");
                  }),
                  (v = []),
                  n(".active-lightbox").removeClass("active-lightbox").focus());
              }
              function A(t, e) {
                var n = M("img", "img");
                return (
                  n.one("load", function () {
                    e(n);
                  }),
                  n.attr("src", t),
                  n
                );
              }
              function P(t, e, n) {
                (this.$element = t),
                  (this.className = e),
                  (this.delay = n || 200),
                  this.hide();
              }
              function T(t, e) {
                return t.replace(g, (e ? " ." : " ") + p);
              }
              function D(t) {
                return T(t, !0);
              }
              function _(t, e) {
                return t.addClass(T(e));
              }
              function W(t, e) {
                return t.removeClass(T(e));
              }
              function H(t, e, n) {
                return t.toggleClass(T(e), n);
              }
              function S(t, e) {
                return t.attr("aria-hidden", e).attr("tabIndex", e ? -1 : 0);
              }
              function M(t, i) {
                return _(n(e.createElement(i || "div")), t);
              }
              return (
                (P.prototype.show = function () {
                  var t = this;
                  if (!t.timeoutId)
                    t.timeoutId = setTimeout(function () {
                      t.$element.removeClass(t.className), delete t.timeoutId;
                    }, t.delay);
                }),
                (P.prototype.hide = function () {
                  if (this.timeoutId) {
                    clearTimeout(this.timeoutId), delete this.timeoutId;
                    return;
                  }
                  this.$element.addClass(this.className);
                }),
                !(function () {
                  var n = t.navigator.userAgent,
                    i = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                  if (
                    !!(
                      n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome")
                    ) ||
                    (!!i && !(i[2] > 7))
                  ) {
                    var o = e.createElement("style");
                    e.head.appendChild(o),
                      t.addEventListener("resize", r, !0),
                      r();
                  }
                  function r() {
                    var e = t.innerHeight,
                      n = t.innerWidth;
                    o.textContent =
                      ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                      e +
                      "px}.w-lightbox-view {width:" +
                      n +
                      "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                      0.86 * e +
                      "px}.w-lightbox-image {max-width:" +
                      n +
                      "px;max-height:" +
                      e +
                      "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                      0.86 * e +
                      "px}.w-lightbox-strip {padding: 0 " +
                      0.01 * e +
                      "px}.w-lightbox-item {width:" +
                      0.1 * e +
                      "px;padding:" +
                      0.02 * e +
                      "px " +
                      0.01 * e +
                      "px}.w-lightbox-thumbnail {height:" +
                      0.1 * e +
                      "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                      0.96 * e +
                      "px}.w-lightbox-content {margin-top:" +
                      0.02 * e +
                      "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                      0.84 * e +
                      "px}.w-lightbox-image {max-width:" +
                      0.96 * n +
                      "px;max-height:" +
                      0.96 * e +
                      "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                      0.823 * n +
                      "px;max-height:" +
                      0.84 * e +
                      "px}}";
                  }
                })(),
                w
              );
            })(window, document, t, c ? "#lightbox-mountpoint" : "body"),
            h = t(document),
            p = ".w-lightbox";
          u.ready =
            u.design =
            u.preview =
              function () {
                (n = c && i.env("design")),
                  f.destroy(),
                  (r = {}),
                  (e = h.find(p)).webflowLightBox(),
                  e.each(function () {
                    s(t(this), "open lightbox"),
                      t(this).attr("aria-haspopup", "dialog");
                  });
              };
          function g(t) {
            var e,
              n,
              i = t.el.children(".w-json").html();
            if (!i) {
              t.items = [];
              return;
            }
            try {
              i = JSON.parse(i);
            } catch (t) {
              console.error("Malformed lightbox JSON configuration.", t);
            }
            (function (t) {
              t.images &&
                (t.images.forEach(function (t) {
                  t.type = "image";
                }),
                (t.items = t.images)),
                t.embed && ((t.embed.type = "video"), (t.items = [t.embed])),
                t.groupId && (t.group = t.groupId);
            })(i),
              i.items.forEach(function (e) {
                e.$el = t.el;
              }),
              (e = i.group)
                ? (!(n = r[e]) && (n = r[e] = []),
                  (t.items = n),
                  i.items.length &&
                    ((t.index = n.length), n.push.apply(n, i.items)))
                : ((t.items = i.items), (t.index = 0));
          }
          return (
            jQuery.fn.extend({
              webflowLightBox: function () {
                t.each(this, function (e, i) {
                  var o = t.data(i, p);
                  !o &&
                    (o = t.data(i, p, {
                      el: t(i),
                      mode: "images",
                      images: [],
                      embed: "",
                    })),
                    o.el.off(p),
                    g(o),
                    n
                      ? o.el.on("setting" + p, g.bind(null, o))
                      : o.el
                          .on(
                            "click" + p,
                            (function (t) {
                              return function () {
                                t.items.length && f(t.items, t.index || 0);
                              };
                            })(o)
                          )
                          .on("click" + p, function (t) {
                            t.preventDefault();
                          });
                });
              },
            }),
            u
          );
        })
      );
    },
    1655: function (t, e, n) {
      var i = n(3949),
        o = n(5134);
      let r = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      i.define(
        "navbar",
        (t.exports = function (t, e) {
          var n,
            a,
            l,
            d,
            s = {},
            u = t.tram,
            c = t(window),
            f = t(document),
            h = e.debounce,
            p = i.env(),
            g = ".w-nav",
            m = "w--open",
            v = "w--nav-dropdown-open",
            w = "w--nav-dropdown-toggle-open",
            x = "w--nav-dropdown-list-open",
            b = "w--nav-link-open",
            y = o.triggers,
            C = t();
          (s.ready =
            s.design =
            s.preview =
              function () {
                if (
                  ((l = p && i.env("design")),
                  (d = i.env("editor")),
                  (n = t(document.body)),
                  !!(a = f.find(g)).length)
                )
                  a.each(I),
                    E(),
                    (function () {
                      i.resize.on(k);
                    })();
              }),
            (s.destroy = function () {
              (C = t()), E(), a && a.length && a.each(O);
            });
          function E() {
            i.resize.off(k);
          }
          function k() {
            a.each(_);
          }
          function I(n, i) {
            var o = t(i),
              a = t.data(i, g);
            !a &&
              (a = t.data(i, g, {
                open: !1,
                el: o,
                config: {},
                selectedIdx: -1,
              })),
              (a.menu = o.find(".w-nav-menu")),
              (a.links = a.menu.find(".w-nav-link")),
              (a.dropdowns = a.menu.find(".w-dropdown")),
              (a.dropdownToggle = a.menu.find(".w-dropdown-toggle")),
              (a.dropdownList = a.menu.find(".w-dropdown-list")),
              (a.button = o.find(".w-nav-button")),
              (a.container = o.find(".w-container")),
              (a.overlayContainerId = "w-nav-overlay-" + n),
              (a.outside = (function (e) {
                return (
                  e.outside && f.off("click" + g, e.outside),
                  function (n) {
                    var i = t(n.target);
                    if (!d || !i.closest(".w-editor-bem-EditorOverlay").length)
                      D(e, i);
                  }
                );
              })(a));
            var s = o.find(".w-nav-brand");
            s &&
              "/" === s.attr("href") &&
              null == s.attr("aria-label") &&
              s.attr("aria-label", "home"),
              a.button.attr("style", "-webkit-user-select: text;"),
              null == a.button.attr("aria-label") &&
                a.button.attr("aria-label", "menu"),
              a.button.attr("role", "button"),
              a.button.attr("tabindex", "0"),
              a.button.attr("aria-controls", a.overlayContainerId),
              a.button.attr("aria-haspopup", "menu"),
              a.button.attr("aria-expanded", "false"),
              a.el.off(g),
              a.button.off(g),
              a.menu.off(g),
              L(a),
              l
                ? (R(a),
                  a.el.on(
                    "setting" + g,
                    (function (t) {
                      return function (n, i) {
                        i = i || {};
                        var o = c.width();
                        L(t),
                          !0 === i.open && M(t, !0),
                          !1 === i.open && U(t, !0),
                          t.open &&
                            e.defer(function () {
                              o !== c.width() && A(t);
                            });
                      };
                    })(a)
                  ))
                : ((function (e) {
                    if (!e.overlay)
                      (e.overlay = t(
                        '<div class="w-nav-overlay" data-wf-ignore />'
                      ).appendTo(e.el)),
                        e.overlay.attr("id", e.overlayContainerId),
                        (e.parent = e.menu.parent()),
                        U(e, !0);
                  })(a),
                  a.button.on("click" + g, P(a)),
                  a.menu.on("click" + g, "a", T(a)),
                  a.button.on(
                    "keydown" + g,
                    (function (t) {
                      return function (e) {
                        switch (e.keyCode) {
                          case r.SPACE:
                          case r.ENTER:
                            return (
                              P(t)(), e.preventDefault(), e.stopPropagation()
                            );
                          case r.ESCAPE:
                            return (
                              U(t), e.preventDefault(), e.stopPropagation()
                            );
                          case r.ARROW_RIGHT:
                          case r.ARROW_DOWN:
                          case r.HOME:
                          case r.END:
                            if (!t.open)
                              return e.preventDefault(), e.stopPropagation();
                            return (
                              e.keyCode === r.END
                                ? (t.selectedIdx = t.links.length - 1)
                                : (t.selectedIdx = 0),
                              N(t),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                      };
                    })(a)
                  ),
                  a.el.on(
                    "keydown" + g,
                    (function (t) {
                      return function (e) {
                        if (!!t.open)
                          switch (
                            ((t.selectedIdx = t.links.index(
                              document.activeElement
                            )),
                            e.keyCode)
                          ) {
                            case r.HOME:
                            case r.END:
                              return (
                                e.keyCode === r.END
                                  ? (t.selectedIdx = t.links.length - 1)
                                  : (t.selectedIdx = 0),
                                N(t),
                                e.preventDefault(),
                                e.stopPropagation()
                              );
                            case r.ESCAPE:
                              return (
                                U(t),
                                t.button.focus(),
                                e.preventDefault(),
                                e.stopPropagation()
                              );
                            case r.ARROW_LEFT:
                            case r.ARROW_UP:
                              return (
                                (t.selectedIdx = Math.max(
                                  -1,
                                  t.selectedIdx - 1
                                )),
                                N(t),
                                e.preventDefault(),
                                e.stopPropagation()
                              );
                            case r.ARROW_RIGHT:
                            case r.ARROW_DOWN:
                              return (
                                (t.selectedIdx = Math.min(
                                  t.links.length - 1,
                                  t.selectedIdx + 1
                                )),
                                N(t),
                                e.preventDefault(),
                                e.stopPropagation()
                              );
                          }
                      };
                    })(a)
                  )),
              _(n, i);
          }
          function O(e, n) {
            var i = t.data(n, g);
            i && (R(i), t.removeData(n, g));
          }
          function R(t) {
            if (!!t.overlay) U(t, !0), t.overlay.remove(), (t.overlay = null);
          }
          function L(t) {
            var n = {},
              i = t.config || {},
              o = (n.animation = t.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(o)),
              (n.animDirect = /left$/.test(o) ? -1 : 1),
              i.animation !== o && t.open && e.defer(A, t),
              (n.easing = t.el.attr("data-easing") || "ease"),
              (n.easing2 = t.el.attr("data-easing2") || "ease");
            var r = t.el.attr("data-duration");
            (n.duration = null != r ? Number(r) : 400),
              (n.docHeight = t.el.attr("data-doc-height")),
              (t.config = n);
          }
          function N(t) {
            if (t.links[t.selectedIdx]) {
              var e = t.links[t.selectedIdx];
              e.focus(), T(e);
            }
          }
          function A(t) {
            if (!!t.open) U(t, !0), M(t, !0);
          }
          function P(t) {
            return h(function () {
              t.open ? U(t) : M(t);
            });
          }
          function T(e) {
            return function (n) {
              var o = t(this).attr("href");
              if (!i.validClick(n.currentTarget)) {
                n.preventDefault();
                return;
              }
              o && 0 === o.indexOf("#") && e.open && U(e);
            };
          }
          var D = h(function (t, e) {
            if (!!t.open) {
              var n = e.closest(".w-nav-menu");
              !t.menu.is(n) && U(t);
            }
          });
          function _(e, n) {
            var i = t.data(n, g),
              o = (i.collapsed = "none" !== i.button.css("display"));
            if ((i.open && !o && !l && U(i, !0), i.container.length)) {
              var r = (function (e) {
                var n = e.container.css(W);
                return (
                  "none" === n && (n = ""),
                  function (e, i) {
                    (i = t(i)).css(W, ""), "none" === i.css(W) && i.css(W, n);
                  }
                );
              })(i);
              i.links.each(r), i.dropdowns.each(r);
            }
            i.open && j(i);
          }
          var W = "max-width";
          function H(t, e) {
            e.setAttribute("data-nav-menu-open", "");
          }
          function S(t, e) {
            e.removeAttribute("data-nav-menu-open");
          }
          function M(t, e) {
            if (!t.open) {
              (t.open = !0),
                t.menu.each(H),
                t.links.addClass(b),
                t.dropdowns.addClass(v),
                t.dropdownToggle.addClass(w),
                t.dropdownList.addClass(x),
                t.button.addClass(m);
              var n = t.config;
              ("none" === n.animation ||
                !u.support.transform ||
                n.duration <= 0) &&
                (e = !0);
              var o = j(t),
                r = t.menu.outerHeight(!0),
                a = t.menu.outerWidth(!0),
                d = t.el.height(),
                s = t.el[0];
              if (
                (_(0, s),
                y.intro(0, s),
                i.redraw.up(),
                !l && f.on("click" + g, t.outside),
                e)
              ) {
                h();
                return;
              }
              var c = "transform " + n.duration + "ms " + n.easing;
              if (
                (t.overlay &&
                  ((C = t.menu.prev()), t.overlay.show().append(t.menu)),
                n.animOver)
              ) {
                u(t.menu)
                  .add(c)
                  .set({ x: n.animDirect * a, height: o })
                  .start({ x: 0 })
                  .then(h),
                  t.overlay && t.overlay.width(a);
                return;
              }
              u(t.menu)
                .add(c)
                .set({ y: -(d + r) })
                .start({ y: 0 })
                .then(h);
            }
            function h() {
              t.button.attr("aria-expanded", "true");
            }
          }
          function j(t) {
            var e = t.config,
              i = e.docHeight ? f.height() : n.height();
            return (
              e.animOver
                ? t.menu.height(i)
                : "fixed" !== t.el.css("position") &&
                  (i -= t.el.outerHeight(!0)),
              t.overlay && t.overlay.height(i),
              i
            );
          }
          function U(t, e) {
            if (!!t.open) {
              (t.open = !1), t.button.removeClass(m);
              var n = t.config;
              if (
                (("none" === n.animation ||
                  !u.support.transform ||
                  n.duration <= 0) &&
                  (e = !0),
                y.outro(0, t.el[0]),
                f.off("click" + g, t.outside),
                e)
              ) {
                u(t.menu).stop(), l();
                return;
              }
              var i = "transform " + n.duration + "ms " + n.easing2,
                o = t.menu.outerHeight(!0),
                r = t.menu.outerWidth(!0),
                a = t.el.height();
              if (n.animOver) {
                u(t.menu)
                  .add(i)
                  .start({ x: r * n.animDirect })
                  .then(l);
                return;
              }
              u(t.menu)
                .add(i)
                .start({ y: -(a + o) })
                .then(l);
            }
            function l() {
              t.menu.height(""),
                u(t.menu).set({ x: 0, y: 0 }),
                t.menu.each(S),
                t.links.removeClass(b),
                t.dropdowns.removeClass(v),
                t.dropdownToggle.removeClass(w),
                t.dropdownList.removeClass(x),
                t.overlay &&
                  t.overlay.children().length &&
                  (C.length
                    ? t.menu.insertAfter(C)
                    : t.menu.prependTo(t.parent),
                  t.overlay.attr("style", "").hide()),
                t.el.triggerHandler("w-close"),
                t.button.attr("aria-expanded", "false");
            }
          }
          return s;
        })
      );
    },
  },
]);
