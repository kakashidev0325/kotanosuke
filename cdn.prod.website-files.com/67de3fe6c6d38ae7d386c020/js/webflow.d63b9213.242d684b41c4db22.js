(() => {
  var e = {
      941: function (e, t, n) {
        "use strict";
        var a = n(3949),
          i = n(6011);
        i.setEnv(a.env),
          a.define(
            "ix2",
            (e.exports = function () {
              return i;
            })
          );
      },
      3946: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          actionListPlaybackChanged: function () {
            return j;
          },
          animationFrameChanged: function () {
            return D;
          },
          clearRequested: function () {
            return v;
          },
          elementStateChanged: function () {
            return B;
          },
          eventListenerAdded: function () {
            return G;
          },
          eventStateChanged: function () {
            return V;
          },
          instanceAdded: function () {
            return X;
          },
          instanceRemoved: function () {
            return x;
          },
          instanceStarted: function () {
            return k;
          },
          mediaQueriesDefined: function () {
            return Y;
          },
          parameterChanged: function () {
            return w;
          },
          playbackRequested: function () {
            return M;
          },
          previewRequested: function () {
            return P;
          },
          rawDataImported: function () {
            return N;
          },
          sessionInitialized: function () {
            return L;
          },
          sessionStarted: function () {
            return h;
          },
          sessionStopped: function () {
            return C;
          },
          stopRequested: function () {
            return F;
          },
          testFrameRendered: function () {
            return U;
          },
          viewportWidthChanged: function () {
            return W;
          },
        });
        let a = n(7087),
          i = n(9468),
          {
            IX2_RAW_DATA_IMPORTED: r,
            IX2_SESSION_INITIALIZED: c,
            IX2_SESSION_STARTED: o,
            IX2_SESSION_STOPPED: u,
            IX2_PREVIEW_REQUESTED: l,
            IX2_PLAYBACK_REQUESTED: d,
            IX2_STOP_REQUESTED: s,
            IX2_CLEAR_REQUESTED: f,
            IX2_EVENT_LISTENER_ADDED: E,
            IX2_TEST_FRAME_RENDERED: p,
            IX2_EVENT_STATE_CHANGED: I,
            IX2_ANIMATION_FRAME_CHANGED: g,
            IX2_PARAMETER_CHANGED: y,
            IX2_INSTANCE_ADDED: T,
            IX2_INSTANCE_STARTED: _,
            IX2_INSTANCE_REMOVED: O,
            IX2_ELEMENT_STATE_CHANGED: m,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: b,
            IX2_VIEWPORT_WIDTH_CHANGED: A,
            IX2_MEDIA_QUERIES_DEFINED: S,
          } = a.IX2EngineActionTypes,
          { reifyState: R } = i.IX2VanillaUtils,
          N = (e) => ({ type: r, payload: { ...R(e) } }),
          L = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
            type: c,
            payload: { hasBoundaryNodes: e, reducedMotion: t },
          }),
          h = () => ({ type: o }),
          C = () => ({ type: u }),
          P = ({ rawData: e, defer: t }) => ({
            type: l,
            payload: { defer: t, rawData: e },
          }),
          M = ({
            actionTypeId: e = a.ActionTypeConsts.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: n,
            eventId: i,
            allowEvents: r,
            immediate: c,
            testManual: o,
            verbose: u,
            rawData: l,
          }) => ({
            type: d,
            payload: {
              actionTypeId: e,
              actionListId: t,
              actionItemId: n,
              testManual: o,
              eventId: i,
              allowEvents: r,
              immediate: c,
              verbose: u,
              rawData: l,
            },
          }),
          F = (e) => ({ type: s, payload: { actionListId: e } }),
          v = () => ({ type: f }),
          G = (e, t) => ({
            type: E,
            payload: { target: e, listenerParams: t },
          }),
          U = (e = 1) => ({ type: p, payload: { step: e } }),
          V = (e, t) => ({ type: I, payload: { stateKey: e, newState: t } }),
          D = (e, t) => ({ type: g, payload: { now: e, parameters: t } }),
          w = (e, t) => ({ type: y, payload: { key: e, value: t } }),
          X = (e) => ({ type: T, payload: { ...e } }),
          k = (e, t) => ({ type: _, payload: { instanceId: e, time: t } }),
          x = (e) => ({ type: O, payload: { instanceId: e } }),
          B = (e, t, n, a) => ({
            type: m,
            payload: {
              elementId: e,
              actionTypeId: t,
              current: n,
              actionItem: a,
            },
          }),
          j = ({ actionListId: e, isPlaying: t }) => ({
            type: b,
            payload: { actionListId: e, isPlaying: t },
          }),
          W = ({ width: e, mediaQueries: t }) => ({
            type: A,
            payload: { width: e, mediaQueries: t },
          }),
          Y = () => ({ type: S });
      },
      6011: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          actions: function () {
            return c;
          },
          destroy: function () {
            return s;
          },
          init: function () {
            return d;
          },
          setEnv: function () {
            return l;
          },
          store: function () {
            return u;
          },
        });
        let a = n(9516),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(7243)),
          r = n(1970),
          c = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = o(t);
            if (n && n.has(e)) return n.get(e);
            var a = { __proto__: null },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
              if (
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var c = i ? Object.getOwnPropertyDescriptor(e, r) : null;
                c && (c.get || c.set)
                  ? Object.defineProperty(a, r, c)
                  : (a[r] = e[r]);
              }
            return (a.default = e), n && n.set(e, a), a;
          })(n(3946));
        function o(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (o = function (e) {
            return e ? n : t;
          })(e);
        }
        let u = (0, a.createStore)(i.default);
        function l(e) {
          e() && (0, r.observeRequests)(u);
        }
        function d(e) {
          s(), (0, r.startEngine)({ store: u, rawData: e, allowEvents: !0 });
        }
        function s() {
          (0, r.stopEngine)(u);
        }
      },
      5012: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          elementContains: function () {
            return y;
          },
          getChildElements: function () {
            return _;
          },
          getClosestElement: function () {
            return m;
          },
          getProperty: function () {
            return f;
          },
          getQuerySelector: function () {
            return p;
          },
          getRefType: function () {
            return b;
          },
          getSiblingElements: function () {
            return O;
          },
          getStyle: function () {
            return s;
          },
          getValidDocument: function () {
            return I;
          },
          isSiblingNode: function () {
            return T;
          },
          matchSelector: function () {
            return E;
          },
          queryDocument: function () {
            return g;
          },
          setStyle: function () {
            return d;
          },
        });
        let a = n(9468),
          i = n(7087),
          { ELEMENT_MATCHES: r } = a.IX2BrowserSupport,
          {
            IX2_ID_DELIMITER: c,
            HTML_ELEMENT: o,
            PLAIN_OBJECT: u,
            WF_PAGE: l,
          } = i.IX2EngineConstants;
        function d(e, t, n) {
          e.style[t] = n;
        }
        function s(e, t) {
          return t.startsWith("--")
            ? window
                .getComputedStyle(document.documentElement)
                .getPropertyValue(t)
            : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
        }
        function f(e, t) {
          return e[t];
        }
        function E(e) {
          return (t) => t[r](e);
        }
        function p({ id: e, selector: t }) {
          if (e) {
            let t = e;
            if (-1 !== e.indexOf(c)) {
              let n = e.split(c),
                a = n[0];
              if (((t = n[1]), a !== document.documentElement.getAttribute(l)))
                return null;
            }
            return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
          }
          return t;
        }
        function I(e) {
          return null == e || e === document.documentElement.getAttribute(l)
            ? document
            : null;
        }
        function g(e, t) {
          return Array.prototype.slice.call(
            document.querySelectorAll(t ? e + " " + t : e)
          );
        }
        function y(e, t) {
          return e.contains(t);
        }
        function T(e, t) {
          return e !== t && e.parentNode === t.parentNode;
        }
        function _(e) {
          let t = [];
          for (let n = 0, { length: a } = e || []; n < a; n++) {
            let { children: a } = e[n],
              { length: i } = a;
            if (!!i) for (let e = 0; e < i; e++) t.push(a[e]);
          }
          return t;
        }
        function O(e = []) {
          let t = [],
            n = [];
          for (let a = 0, { length: i } = e; a < i; a++) {
            let { parentNode: i } = e[a];
            if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
              continue;
            n.push(i);
            let r = i.firstElementChild;
            for (; null != r; )
              -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
          }
          return t;
        }
        let m = Element.prototype.closest
          ? (e, t) =>
              document.documentElement.contains(e) ? e.closest(t) : null
          : (e, t) => {
              if (!document.documentElement.contains(e)) return null;
              let n = e;
              do {
                if (n[r] && n[r](t)) return n;
                n = n.parentNode;
              } while (null != n);
              return null;
            };
        function b(e) {
          return null != e && "object" == typeof e
            ? e instanceof Element
              ? o
              : u
            : null;
        }
      },
      1970: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          observeRequests: function () {
            return $;
          },
          startActionGroup: function () {
            return ef;
          },
          startEngine: function () {
            return et;
          },
          stopActionGroup: function () {
            return es;
          },
          stopAllActionGroups: function () {
            return ed;
          },
          stopEngine: function () {
            return en;
          },
        });
        let a = g(n(9777)),
          i = g(n(4738)),
          r = g(n(4659)),
          c = g(n(3452)),
          o = g(n(6633)),
          u = g(n(3729)),
          l = g(n(2397)),
          d = g(n(5082)),
          s = n(7087),
          f = n(9468),
          E = n(3946),
          p = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = y(t);
            if (n && n.has(e)) return n.get(e);
            var a = { __proto__: null },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
              if (
                "default" !== r &&
                Object.prototype.hasOwnProperty.call(e, r)
              ) {
                var c = i ? Object.getOwnPropertyDescriptor(e, r) : null;
                c && (c.get || c.set)
                  ? Object.defineProperty(a, r, c)
                  : (a[r] = e[r]);
              }
            return (a.default = e), n && n.set(e, a), a;
          })(n(5012)),
          I = g(n(8955));
        function g(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function y(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (y = function (e) {
            return e ? n : t;
          })(e);
        }
        let T = Object.keys(s.QuickEffectIds),
          _ = (e) => T.includes(e),
          {
            COLON_DELIMITER: O,
            BOUNDARY_SELECTOR: m,
            HTML_ELEMENT: b,
            RENDER_GENERAL: A,
            W_MOD_IX: S,
          } = s.IX2EngineConstants,
          {
            getAffectedElements: R,
            getElementId: N,
            getDestinationValues: L,
            observeStore: h,
            getInstanceId: C,
            renderHTMLElement: P,
            clearAllStyles: M,
            getMaxDurationItemIndex: F,
            getComputedStyle: v,
            getInstanceOrigin: G,
            reduceListToGroup: U,
            shouldNamespaceEventParameter: V,
            getNamespacedParameterId: D,
            shouldAllowMediaQuery: w,
            cleanupHTMLElement: X,
            clearObjectCache: k,
            stringifyTarget: x,
            mediaQueriesEqual: B,
            shallowEqual: j,
          } = f.IX2VanillaUtils,
          {
            isPluginType: W,
            createPluginInstance: Y,
            getPluginDuration: z,
          } = f.IX2VanillaPlugins,
          H = navigator.userAgent,
          Q = H.match(/iPad/i) || H.match(/iPhone/);
        function $(e) {
          h({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: K }),
            h({
              store: e,
              select: ({ ixRequest: e }) => e.playback,
              onChange: Z,
            }),
            h({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: J }),
            h({
              store: e,
              select: ({ ixRequest: e }) => e.clear,
              onChange: ee,
            });
        }
        function K({ rawData: e, defer: t }, n) {
          let a = () => {
            et({ store: n, rawData: e, allowEvents: !0 }), q();
          };
          t ? setTimeout(a, 0) : a();
        }
        function q() {
          document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function Z(e, t) {
          let {
              actionTypeId: n,
              actionListId: a,
              actionItemId: i,
              eventId: r,
              allowEvents: c,
              immediate: o,
              testManual: u,
              verbose: l = !0,
            } = e,
            { rawData: d } = e;
          if (a && i && d && o) {
            let e = d.actionLists[a];
            e && (d = U({ actionList: e, actionItemId: i, rawData: d }));
          }
          if (
            (et({ store: t, rawData: d, allowEvents: c, testManual: u }),
            (a && n === s.ActionTypeConsts.GENERAL_START_ACTION) || _(n))
          ) {
            es({ store: t, actionListId: a }),
              el({ store: t, actionListId: a, eventId: r });
            let e = ef({
              store: t,
              eventId: r,
              actionListId: a,
              immediate: o,
              verbose: l,
            });
            l &&
              e &&
              t.dispatch(
                (0, E.actionListPlaybackChanged)({
                  actionListId: a,
                  isPlaying: !o,
                })
              );
          }
        }
        function J({ actionListId: e }, t) {
          e ? es({ store: t, actionListId: e }) : ed({ store: t }), en(t);
        }
        function ee(e, t) {
          en(t), M({ store: t, elementApi: p });
        }
        function et({ store: e, rawData: t, allowEvents: n, testManual: c }) {
          let { ixSession: o } = e.getState();
          if ((t && e.dispatch((0, E.rawDataImported)(t)), !o.active)) {
            if (
              (e.dispatch(
                (0, E.sessionInitialized)({
                  hasBoundaryNodes: !!document.querySelector(m),
                  reducedMotion:
                    document.body.hasAttribute("data-wf-ix-vacation") &&
                    window.matchMedia("(prefers-reduced-motion)").matches,
                })
              ),
              n &&
                ((function (e) {
                  let { ixData: t } = e.getState(),
                    { eventTypeMap: n } = t;
                  er(e),
                    (0, l.default)(n, (t, n) => {
                      let c = I.default[n];
                      if (!c) {
                        console.warn(`IX2 event type not configured: ${n}`);
                        return;
                      }
                      (function ({ logic: e, store: t, events: n }) {
                        (function (e) {
                          if (!Q) return;
                          let t = {},
                            n = "";
                          for (let a in e) {
                            let { eventTypeId: i, target: r } = e[a],
                              c = p.getQuerySelector(r);
                            if (!t[c])
                              (i === s.EventTypeConsts.MOUSE_CLICK ||
                                i === s.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                                ((t[c] = !0),
                                (n +=
                                  c +
                                  "{cursor: pointer;touch-action: manipulation;}"));
                          }
                          if (n) {
                            let e = document.createElement("style");
                            (e.textContent = n), document.body.appendChild(e);
                          }
                        })(n);
                        let { types: c, handler: o } = e,
                          { ixData: u } = t.getState(),
                          { actionLists: f } = u,
                          I = ec(n, eu);
                        if (!(0, r.default)(I)) return;
                        (0, l.default)(I, (e, r) => {
                          let c = n[r],
                            {
                              action: o,
                              id: l,
                              mediaQueries: d = u.mediaQueryKeys,
                            } = c,
                            { actionListId: I } = o.config;
                          !B(d, u.mediaQueryKeys) &&
                            t.dispatch((0, E.mediaQueriesDefined)()),
                            o.actionTypeId ===
                              s.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                              (Array.isArray(c.config)
                                ? c.config
                                : [c.config]
                              ).forEach((n) => {
                                let { continuousParameterGroupId: r } = n,
                                  c = (0, i.default)(
                                    f,
                                    `${I}.continuousParameterGroups`,
                                    []
                                  ),
                                  o = (0, a.default)(c, ({ id: e }) => e === r),
                                  u = (n.smoothing || 0) / 100,
                                  d = (n.restingState || 0) / 100;
                                if (!!o)
                                  e.forEach((e, a) => {
                                    !(function ({
                                      store: e,
                                      eventStateKey: t,
                                      eventTarget: n,
                                      eventId: a,
                                      eventConfig: r,
                                      actionListId: c,
                                      parameterGroup: o,
                                      smoothing: u,
                                      restingValue: l,
                                    }) {
                                      let { ixData: d, ixSession: f } =
                                          e.getState(),
                                        { events: E } = d,
                                        I = E[a],
                                        { eventTypeId: g } = I,
                                        y = {},
                                        T = {},
                                        _ = [],
                                        { continuousActionGroups: b } = o,
                                        { id: A } = o;
                                      V(g, r) && (A = D(t, A));
                                      let S =
                                        f.hasBoundaryNodes && n
                                          ? p.getClosestElement(n, m)
                                          : null;
                                      b.forEach((e) => {
                                        let { keyframe: t, actionItems: a } = e;
                                        a.forEach((e) => {
                                          let { actionTypeId: a } = e,
                                            { target: i } = e.config;
                                          if (!i) return;
                                          let r = i.boundaryMode ? S : null,
                                            c = x(i) + O + a;
                                          if (
                                            ((T[c] = (function (e = [], t, n) {
                                              let a;
                                              let i = [...e];
                                              return (
                                                i.some(
                                                  (e, n) =>
                                                    e.keyframe === t &&
                                                    ((a = n), !0)
                                                ),
                                                null == a &&
                                                  ((a = i.length),
                                                  i.push({
                                                    keyframe: t,
                                                    actionItems: [],
                                                  })),
                                                i[a].actionItems.push(n),
                                                i
                                              );
                                            })(T[c], t, e)),
                                            !y[c])
                                          ) {
                                            y[c] = !0;
                                            let { config: t } = e;
                                            R({
                                              config: t,
                                              event: I,
                                              eventTarget: n,
                                              elementRoot: r,
                                              elementApi: p,
                                            }).forEach((e) => {
                                              _.push({ element: e, key: c });
                                            });
                                          }
                                        });
                                      }),
                                        _.forEach(({ element: t, key: n }) => {
                                          let r = T[n],
                                            o = (0, i.default)(
                                              r,
                                              "[0].actionItems[0]",
                                              {}
                                            ),
                                            { actionTypeId: d } = o,
                                            f = (
                                              d ===
                                              s.ActionTypeConsts.PLUGIN_RIVE
                                                ? 0 ===
                                                  (
                                                    o.config?.target
                                                      ?.selectorGuids || []
                                                  ).length
                                                : W(d)
                                            )
                                              ? Y(d)?.(t, o)
                                              : null,
                                            E = L(
                                              {
                                                element: t,
                                                actionItem: o,
                                                elementApi: p,
                                              },
                                              f
                                            );
                                          eE({
                                            store: e,
                                            element: t,
                                            eventId: a,
                                            actionListId: c,
                                            actionItem: o,
                                            destination: E,
                                            continuous: !0,
                                            parameterId: A,
                                            actionGroups: r,
                                            smoothing: u,
                                            restingValue: l,
                                            pluginInstance: f,
                                          });
                                        });
                                    })({
                                      store: t,
                                      eventStateKey: l + O + a,
                                      eventTarget: e,
                                      eventId: l,
                                      eventConfig: n,
                                      actionListId: I,
                                      parameterGroup: o,
                                      smoothing: u,
                                      restingValue: d,
                                    });
                                  });
                              }),
                            (o.actionTypeId ===
                              s.ActionTypeConsts.GENERAL_START_ACTION ||
                              _(o.actionTypeId)) &&
                              el({ store: t, actionListId: I, eventId: l });
                        });
                        let g = (e) => {
                            let { ixSession: a } = t.getState();
                            eo(I, (i, r, c) => {
                              let l = n[r],
                                d = a.eventState[c],
                                {
                                  action: f,
                                  mediaQueries: p = u.mediaQueryKeys,
                                } = l;
                              if (!w(p, a.mediaQueryKey)) return;
                              let I = (n = {}) => {
                                let a = o(
                                  {
                                    store: t,
                                    element: i,
                                    event: l,
                                    eventConfig: n,
                                    nativeEvent: e,
                                    eventStateKey: c,
                                  },
                                  d
                                );
                                !j(a, d) &&
                                  t.dispatch((0, E.eventStateChanged)(c, a));
                              };
                              f.actionTypeId ===
                              s.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                ? (Array.isArray(l.config)
                                    ? l.config
                                    : [l.config]
                                  ).forEach(I)
                                : I();
                            });
                          },
                          y = (0, d.default)(g, 12),
                          T = ({
                            target: e = document,
                            types: n,
                            throttle: a,
                          }) => {
                            n.split(" ")
                              .filter(Boolean)
                              .forEach((n) => {
                                let i = a ? y : g;
                                e.addEventListener(n, i),
                                  t.dispatch(
                                    (0, E.eventListenerAdded)(e, [n, i])
                                  );
                              });
                          };
                        Array.isArray(c)
                          ? c.forEach(T)
                          : "string" == typeof c && T(e);
                      })({ logic: c, store: e, events: t });
                    });
                  let { ixSession: c } = e.getState();
                  c.eventListeners.length &&
                    (function (e) {
                      let t = () => {
                        er(e);
                      };
                      ei.forEach((n) => {
                        window.addEventListener(n, t),
                          e.dispatch((0, E.eventListenerAdded)(window, [n, t]));
                      }),
                        t();
                    })(e);
                })(e),
                (function () {
                  let { documentElement: e } = document;
                  -1 === e.className.indexOf(S) && (e.className += ` ${S}`);
                })(),
                e.getState().ixSession.hasDefinedMediaQueries))
            ) {
              var u;
              h({
                store: (u = e),
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  en(u),
                    M({ store: u, elementApi: p }),
                    et({ store: u, allowEvents: !0 }),
                    q();
                },
              });
            }
            e.dispatch((0, E.sessionStarted)()),
              (function (e, t) {
                let n = (a) => {
                  let { ixSession: i, ixParameters: r } = e.getState();
                  i.active &&
                    (e.dispatch((0, E.animationFrameChanged)(a, r)),
                    t
                      ? !(function (e, t) {
                          let n = h({
                            store: e,
                            select: ({ ixSession: e }) => e.tick,
                            onChange: (e) => {
                              t(e), n();
                            },
                          });
                        })(e, n)
                      : requestAnimationFrame(n));
                };
                n(window.performance.now());
              })(e, c);
          }
        }
        function en(e) {
          let { ixSession: t } = e.getState();
          if (t.active) {
            let { eventListeners: n } = t;
            n.forEach(ea), k(), e.dispatch((0, E.sessionStopped)());
          }
        }
        function ea({ target: e, listenerParams: t }) {
          e.removeEventListener.apply(e, t);
        }
        let ei = ["resize", "orientationchange"];
        function er(e) {
          let { ixSession: t, ixData: n } = e.getState(),
            a = window.innerWidth;
          if (a !== t.viewportWidth) {
            let { mediaQueries: t } = n;
            e.dispatch(
              (0, E.viewportWidthChanged)({ width: a, mediaQueries: t })
            );
          }
        }
        let ec = (e, t) => (0, c.default)((0, u.default)(e, t), o.default),
          eo = (e, t) => {
            (0, l.default)(e, (e, n) => {
              e.forEach((e, a) => {
                t(e, n, n + O + a);
              });
            });
          },
          eu = (e) =>
            R({
              config: { target: e.target, targets: e.targets },
              elementApi: p,
            });
        function el({ store: e, actionListId: t, eventId: n }) {
          let { ixData: a, ixSession: r } = e.getState(),
            { actionLists: c, events: o } = a,
            u = o[n],
            l = c[t];
          if (l && l.useFirstGroupAsInitialState) {
            let c = (0, i.default)(l, "actionItemGroups[0].actionItems", []);
            if (
              !w(
                (0, i.default)(u, "mediaQueries", a.mediaQueryKeys),
                r.mediaQueryKey
              )
            )
              return;
            c.forEach((a) => {
              let { config: i, actionTypeId: r } = a,
                c = R({
                  config:
                    i?.target?.useEventTarget === !0 &&
                    i?.target?.objectId == null
                      ? { target: u.target, targets: u.targets }
                      : i,
                  event: u,
                  elementApi: p,
                }),
                o = W(r);
              c.forEach((i) => {
                let c = o ? Y(r)?.(i, a) : null;
                eE({
                  destination: L(
                    { element: i, actionItem: a, elementApi: p },
                    c
                  ),
                  immediate: !0,
                  store: e,
                  element: i,
                  eventId: n,
                  actionItem: a,
                  actionListId: t,
                  pluginInstance: c,
                });
              });
            });
          }
        }
        function ed({ store: e }) {
          let { ixInstances: t } = e.getState();
          (0, l.default)(t, (t) => {
            if (!t.continuous) {
              let { actionListId: n, verbose: a } = t;
              ep(t, e),
                a &&
                  e.dispatch(
                    (0, E.actionListPlaybackChanged)({
                      actionListId: n,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function es({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: a,
          actionListId: r,
        }) {
          let { ixInstances: c, ixSession: o } = e.getState(),
            u = o.hasBoundaryNodes && n ? p.getClosestElement(n, m) : null;
          (0, l.default)(c, (n) => {
            let c = (0, i.default)(n, "actionItem.config.target.boundaryMode"),
              o = !a || n.eventStateKey === a;
            if (n.actionListId === r && n.eventId === t && o) {
              if (u && c && !p.elementContains(u, n.element)) return;
              ep(n, e),
                n.verbose &&
                  e.dispatch(
                    (0, E.actionListPlaybackChanged)({
                      actionListId: r,
                      isPlaying: !1,
                    })
                  );
            }
          });
        }
        function ef({
          store: e,
          eventId: t,
          eventTarget: n,
          eventStateKey: a,
          actionListId: r,
          groupIndex: c = 0,
          immediate: o,
          verbose: u,
        }) {
          let { ixData: l, ixSession: d } = e.getState(),
            { events: s } = l,
            f = s[t] || {},
            { mediaQueries: E = l.mediaQueryKeys } = f,
            { actionItemGroups: I, useFirstGroupAsInitialState: g } = (0,
            i.default)(l, `actionLists.${r}`, {});
          if (!I || !I.length) return !1;
          c >= I.length && (0, i.default)(f, "config.loop") && (c = 0),
            0 === c && g && c++;
          let y =
              (0 === c || (1 === c && g)) && _(f.action?.actionTypeId)
                ? f.config.delay
                : void 0,
            T = (0, i.default)(I, [c, "actionItems"], []);
          if (!T.length || !w(E, d.mediaQueryKey)) return !1;
          let O = d.hasBoundaryNodes && n ? p.getClosestElement(n, m) : null,
            b = F(T),
            A = !1;
          return (
            T.forEach((i, l) => {
              let { config: d, actionTypeId: s } = i,
                E = W(s),
                { target: I } = d;
              if (!!I)
                R({
                  config: d,
                  event: f,
                  eventTarget: n,
                  elementRoot: I.boundaryMode ? O : null,
                  elementApi: p,
                }).forEach((d, f) => {
                  let I = E ? Y(s)?.(d, i) : null,
                    g = E ? z(s)(d, i) : null;
                  A = !0;
                  let T = v({ element: d, actionItem: i }),
                    _ = L({ element: d, actionItem: i, elementApi: p }, I);
                  eE({
                    store: e,
                    element: d,
                    actionItem: i,
                    eventId: t,
                    eventTarget: n,
                    eventStateKey: a,
                    actionListId: r,
                    groupIndex: c,
                    isCarrier: b === l && 0 === f,
                    computedStyle: T,
                    destination: _,
                    immediate: o,
                    verbose: u,
                    pluginInstance: I,
                    pluginDuration: g,
                    instanceDelay: y,
                  });
                });
            }),
            A
          );
        }
        function eE(e) {
          let t;
          let { store: n, computedStyle: a, ...i } = e,
            {
              element: r,
              actionItem: c,
              immediate: o,
              pluginInstance: u,
              continuous: l,
              restingValue: d,
              eventId: f,
            } = i,
            I = C(),
            { ixElements: g, ixSession: y, ixData: T } = n.getState(),
            _ = N(g, r),
            { refState: O } = g[_] || {},
            m = p.getRefType(r),
            b = y.reducedMotion && s.ReducedMotionTypes[c.actionTypeId];
          if (b && l)
            switch (T.events[f]?.eventTypeId) {
              case s.EventTypeConsts.MOUSE_MOVE:
              case s.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                t = d;
                break;
              default:
                t = 0.5;
            }
          let A = G(r, O, a, c, p, u);
          if (
            (n.dispatch(
              (0, E.instanceAdded)({
                instanceId: I,
                elementId: _,
                origin: A,
                refType: m,
                skipMotion: b,
                skipToValue: t,
                ...i,
              })
            ),
            eI(document.body, "ix2-animation-started", I),
            o)
          ) {
            (function (e, t) {
              let { ixParameters: n } = e.getState();
              e.dispatch((0, E.instanceStarted)(t, 0)),
                e.dispatch((0, E.animationFrameChanged)(performance.now(), n));
              let { ixInstances: a } = e.getState();
              eg(a[t], e);
            })(n, I);
            return;
          }
          h({ store: n, select: ({ ixInstances: e }) => e[I], onChange: eg }),
            !l && n.dispatch((0, E.instanceStarted)(I, y.tick));
        }
        function ep(e, t) {
          eI(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState(),
          });
          let { elementId: n, actionItem: a } = e,
            { ixElements: i } = t.getState(),
            { ref: r, refType: c } = i[n] || {};
          c === b && X(r, a, p), t.dispatch((0, E.instanceRemoved)(e.id));
        }
        function eI(e, t, n) {
          let a = document.createEvent("CustomEvent");
          a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
        }
        function eg(e, t) {
          let {
              active: n,
              continuous: a,
              complete: i,
              elementId: r,
              actionItem: c,
              actionTypeId: o,
              renderType: u,
              current: l,
              groupIndex: d,
              eventId: s,
              eventTarget: f,
              eventStateKey: I,
              actionListId: g,
              isCarrier: y,
              styleProp: T,
              verbose: _,
              pluginInstance: O,
            } = e,
            { ixData: m, ixSession: S } = t.getState(),
            { events: R } = m,
            { mediaQueries: N = m.mediaQueryKeys } = R && R[s] ? R[s] : {};
          if (!!w(N, S.mediaQueryKey)) {
            if (a || n || i) {
              if (l || (u === A && i)) {
                t.dispatch((0, E.elementStateChanged)(r, o, l, c));
                let { ixElements: e } = t.getState(),
                  { ref: n, refType: a, refState: i } = e[r] || {},
                  d = i && i[o];
                (a === b || W(o)) && P(n, i, d, s, c, T, p, u, O);
              }
              if (i) {
                if (y) {
                  let e = ef({
                    store: t,
                    eventId: s,
                    eventTarget: f,
                    eventStateKey: I,
                    actionListId: g,
                    groupIndex: d + 1,
                    verbose: _,
                  });
                  _ &&
                    !e &&
                    t.dispatch(
                      (0, E.actionListPlaybackChanged)({
                        actionListId: g,
                        isPlaying: !1,
                      })
                    );
                }
                ep(e, t);
              }
            }
          }
        }
      },
      8955: function (e, t, n) {
        "use strict";
        let a, i, r;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return eI;
            },
          });
        let c = E(n(5801)),
          o = E(n(4738)),
          u = E(n(3789)),
          l = n(7087),
          d = n(1970),
          s = n(3946),
          f = n(9468);
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            MOUSE_CLICK: p,
            MOUSE_SECOND_CLICK: I,
            MOUSE_DOWN: g,
            MOUSE_UP: y,
            MOUSE_OVER: T,
            MOUSE_OUT: _,
            DROPDOWN_CLOSE: O,
            DROPDOWN_OPEN: m,
            SLIDER_ACTIVE: b,
            SLIDER_INACTIVE: A,
            TAB_ACTIVE: S,
            TAB_INACTIVE: R,
            NAVBAR_CLOSE: N,
            NAVBAR_OPEN: L,
            MOUSE_MOVE: h,
            PAGE_SCROLL_DOWN: C,
            SCROLL_INTO_VIEW: P,
            SCROLL_OUT_OF_VIEW: M,
            PAGE_SCROLL_UP: F,
            SCROLLING_IN_VIEW: v,
            PAGE_FINISH: G,
            ECOMMERCE_CART_CLOSE: U,
            ECOMMERCE_CART_OPEN: V,
            PAGE_START: D,
            PAGE_SCROLL: w,
          } = l.EventTypeConsts,
          X = "COMPONENT_ACTIVE",
          k = "COMPONENT_INACTIVE",
          { COLON_DELIMITER: x } = l.IX2EngineConstants,
          { getNamespacedParameterId: B } = f.IX2VanillaUtils,
          j = (e) => (t) => !!("object" == typeof t && e(t)) || t,
          W = j(({ element: e, nativeEvent: t }) => e === t.target),
          Y = j(({ element: e, nativeEvent: t }) => e.contains(t.target)),
          z = (0, c.default)([W, Y]),
          H = (e, t) => {
            if (t) {
              let { ixData: n } = e.getState(),
                { events: a } = n,
                i = a[t];
              if (i && !en[i.eventTypeId]) return i;
            }
            return null;
          },
          Q = ({ store: e, event: t }) => {
            let { action: n } = t,
              { autoStopEventId: a } = n.config;
            return !!H(e, a);
          },
          $ = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
            let { action: r, id: c } = t,
              { actionListId: u, autoStopEventId: l } = r.config,
              s = H(e, l);
            return (
              s &&
                (0, d.stopActionGroup)({
                  store: e,
                  eventId: l,
                  eventTarget: n,
                  eventStateKey: l + x + a.split(x)[1],
                  actionListId: (0, o.default)(s, "action.config.actionListId"),
                }),
              (0, d.stopActionGroup)({
                store: e,
                eventId: c,
                eventTarget: n,
                eventStateKey: a,
                actionListId: u,
              }),
              (0, d.startActionGroup)({
                store: e,
                eventId: c,
                eventTarget: n,
                eventStateKey: a,
                actionListId: u,
              }),
              i
            );
          },
          K = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
          q = { handler: K(z, $) },
          Z = { ...q, types: [X, k].join(" ") },
          J = [
            { target: window, types: "resize orientationchange", throttle: !0 },
            {
              target: document,
              types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
              throttle: !0,
            },
          ],
          ee = "mouseover mouseout",
          et = { types: J },
          en = { PAGE_START: D, PAGE_FINISH: G },
          ea = (() => {
            let e = void 0 !== window.pageXOffset,
              t =
                "CSS1Compat" === document.compatMode
                  ? document.documentElement
                  : document.body;
            return () => ({
              scrollLeft: e ? window.pageXOffset : t.scrollLeft,
              scrollTop: e ? window.pageYOffset : t.scrollTop,
              stiffScrollTop: (0, u.default)(
                e ? window.pageYOffset : t.scrollTop,
                0,
                t.scrollHeight - window.innerHeight
              ),
              scrollWidth: t.scrollWidth,
              scrollHeight: t.scrollHeight,
              clientWidth: t.clientWidth,
              clientHeight: t.clientHeight,
              innerWidth: window.innerWidth,
              innerHeight: window.innerHeight,
            });
          })(),
          ei = (e, t) =>
            !(
              e.left > t.right ||
              e.right < t.left ||
              e.top > t.bottom ||
              e.bottom < t.top
            ),
          er = ({ element: e, nativeEvent: t }) => {
            let { type: n, target: a, relatedTarget: i } = t,
              r = e.contains(a);
            if ("mouseover" === n && r) return !0;
            let c = e.contains(i);
            return ("mouseout" === n && !!r && !!c) || !1;
          },
          ec = (e) => {
            let {
                element: t,
                event: { config: n },
              } = e,
              { clientWidth: a, clientHeight: i } = ea(),
              r = n.scrollOffsetValue,
              c = n.scrollOffsetUnit,
              o = "PX" === c ? r : (i * (r || 0)) / 100;
            return ei(t.getBoundingClientRect(), {
              left: 0,
              top: o,
              right: a,
              bottom: i - o,
            });
          },
          eo = (e) => (t, n) => {
            let { type: a } = t.nativeEvent,
              i = -1 !== [X, k].indexOf(a) ? a === X : n.isActive,
              r = { ...n, isActive: i };
            return n && r.isActive === n.isActive ? r : e(t, r) || r;
          },
          eu = (e) => (t, n) => {
            let a = { elementHovered: er(t) };
            return (
              ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
                e(t, a)) ||
              a
            );
          },
          el =
            (e) =>
            (t, n = {}) => {
              let a, i;
              let { stiffScrollTop: r, scrollHeight: c, innerHeight: o } = ea(),
                {
                  event: { config: u, eventTypeId: l },
                } = t,
                { scrollOffsetValue: d, scrollOffsetUnit: s } = u,
                f = c - o,
                E = Number((r / f).toFixed(2));
              if (n && n.percentTop === E) return n;
              let p = ("PX" === s ? d : (o * (d || 0)) / 100) / f,
                I = 0;
              n &&
                ((a = E > n.percentTop),
                (I = (i = n.scrollingDown !== a) ? E : n.anchorTop));
              let g = l === C ? E >= I + p : E <= I - p,
                y = {
                  ...n,
                  percentTop: E,
                  inBounds: g,
                  anchorTop: I,
                  scrollingDown: a,
                };
              return (
                (n && g && (i || y.inBounds !== n.inBounds) && e(t, y)) || y
              );
            },
          ed = (e, t) =>
            e.left > t.left &&
            e.left < t.right &&
            e.top > t.top &&
            e.top < t.bottom,
          es =
            (e) =>
            (t, n = { clickCount: 0 }) => {
              let a = { clickCount: (n.clickCount % 2) + 1 };
              return (a.clickCount !== n.clickCount && e(t, a)) || a;
            },
          ef = (e = !0) => ({
            ...Z,
            handler: K(
              e ? z : W,
              eo((e, t) => (t.isActive ? q.handler(e, t) : t))
            ),
          }),
          eE = (e = !0) => ({
            ...Z,
            handler: K(
              e ? z : W,
              eo((e, t) => (t.isActive ? t : q.handler(e, t)))
            ),
          });
        let ep = {
          ...et,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: r } = i.getState(),
                { events: c } = r;
              return !c[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === P) === n
                ? ($(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ec(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        };
        let eI = {
          [b]: ef(),
          [A]: eE(),
          [m]: ef(),
          [O]: eE(),
          [L]: ef(!1),
          [N]: eE(!1),
          [S]: ef(),
          [R]: eE(),
          [V]: { types: "ecommerce-cart-open", handler: K(z, $) },
          [U]: { types: "ecommerce-cart-close", handler: K(z, $) },
          [p]: {
            types: "click",
            handler: K(
              z,
              es((e, { clickCount: t }) => {
                Q(e) ? 1 === t && $(e) : $(e);
              })
            ),
          },
          [I]: {
            types: "click",
            handler: K(
              z,
              es((e, { clickCount: t }) => {
                2 === t && $(e);
              })
            ),
          },
          [g]: { ...q, types: "mousedown" },
          [y]: { ...q, types: "mouseup" },
          [T]: {
            types: ee,
            handler: K(
              z,
              eu((e, t) => {
                t.elementHovered && $(e);
              })
            ),
          },
          [_]: {
            types: ee,
            handler: K(
              z,
              eu((e, t) => {
                !t.elementHovered && $(e);
              })
            ),
          },
          [h]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: c,
                  selectedAxis: o,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: E = r.clientX,
                  clientY: p = r.clientY,
                  pageX: I = r.pageX,
                  pageY: g = r.pageY,
                } = a,
                y = "X_AXIS" === o,
                T = "mouseout" === a.type,
                _ = f / 100,
                O = u,
                m = !1;
              switch (c) {
                case l.EventBasedOn.VIEWPORT:
                  _ = y
                    ? Math.min(E, window.innerWidth) / window.innerWidth
                    : Math.min(p, window.innerHeight) / window.innerHeight;
                  break;
                case l.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = ea();
                  _ = y ? Math.min(e + I, n) / n : Math.min(t + g, a) / a;
                  break;
                }
                case l.EventBasedOn.ELEMENT:
                default: {
                  O = B(i, u);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== z({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: c, width: o, height: l } = n;
                  if (!e && !ed({ left: E, top: p }, n)) break;
                  (m = !0), (_ = y ? (E - r) / o : (p - c) / l);
                }
              }
              return (
                T && (_ > 0.95 || _ < 0.05) && (_ = Math.round(_)),
                (c !== l.EventBasedOn.ELEMENT || m || m !== r.elementHovered) &&
                  ((_ = d ? 1 - _ : _),
                  e.dispatch((0, s.parameterChanged)(O, _))),
                {
                  elementHovered: m,
                  clientX: E,
                  clientY: p,
                  pageX: I,
                  pageY: g,
                }
              );
            },
          },
          [w]: {
            types: J,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: r, clientHeight: c } = ea(),
                o = i / (r - c);
              (o = a ? 1 - o : o), e.dispatch((0, s.parameterChanged)(n, o));
            },
          },
          [v]: {
            types: J,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: c,
                  scrollWidth: o,
                  scrollHeight: u,
                  clientHeight: d,
                } = ea(),
                {
                  basedOn: f,
                  selectedAxis: E,
                  continuousParameterGroupId: p,
                  startsEntering: I,
                  startsExiting: g,
                  addEndOffset: y,
                  addStartOffset: T,
                  addOffsetValue: _ = 0,
                  endOffsetValue: O = 0,
                } = n;
              if (f === l.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === E ? r / o : c / u;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(p, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = B(a, p),
                  r = e.getBoundingClientRect(),
                  c = (T ? _ : 0) / 100,
                  o = (y ? O : 0) / 100;
                (c = I ? c : 1 - c), (o = g ? o : 1 - o);
                let l = r.top + Math.min(r.height * c, d),
                  f = r.top + r.height * o,
                  E = Math.min(d + (f - l), u),
                  m = Math.min(Math.max(0, d - l), E) / E;
                return (
                  m !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(n, m)),
                  { scrollPercent: m }
                );
              }
            },
          },
          [P]: ep,
          [M]: ep,
          [C]: {
            ...et,
            handler: el((e, t) => {
              t.scrollingDown && $(e);
            }),
          },
          [F]: {
            ...et,
            handler: el((e, t) => {
              !t.scrollingDown && $(e);
            }),
          },
          [G]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: K(
              W,
              ((i = $),
              (e, t) => {
                let n = { finished: "complete" === document.readyState };
                return n.finished && !(t && t.finshed) && i(e), n;
              })
            ),
          },
          [D]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: K(W, ((r = $), (e, t) => (t || r(e), { started: !0 }))),
          },
        };
      },
      4609: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixData", {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
          i = (e = Object.freeze({}), t) => {
            if (t.type === a) return t.payload.ixData || Object.freeze({});
            return e;
          };
      },
      7718: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixInstances", {
            enumerable: !0,
            get: function () {
              return m;
            },
          });
        let a = n(7087),
          i = n(9468),
          r = n(1185),
          {
            IX2_RAW_DATA_IMPORTED: c,
            IX2_SESSION_STOPPED: o,
            IX2_INSTANCE_ADDED: u,
            IX2_INSTANCE_STARTED: l,
            IX2_INSTANCE_REMOVED: d,
            IX2_ANIMATION_FRAME_CHANGED: s,
          } = a.IX2EngineActionTypes,
          {
            optimizeFloat: f,
            applyEasing: E,
            createBezierEasing: p,
          } = i.IX2EasingUtils,
          { RENDER_GENERAL: I } = a.IX2EngineConstants,
          {
            getItemConfigByKey: g,
            getRenderType: y,
            getStyleProp: T,
          } = i.IX2VanillaUtils,
          _ = (e, t) => {
            let n, a, i, c;
            let {
                position: o,
                parameterId: u,
                actionGroups: l,
                destinationKeys: d,
                smoothing: s,
                restingValue: p,
                actionTypeId: I,
                customEasingFn: y,
                skipMotion: T,
                skipToValue: _,
              } = e,
              { parameters: O } = t.payload,
              m = Math.max(1 - s, 0.01),
              b = O[u];
            null == b && ((m = 1), (b = p));
            let A = f((Math.max(b, 0) || 0) - o),
              S = T ? _ : f(o + A * m),
              R = 100 * S;
            if (S === o && e.current) return e;
            for (let e = 0, { length: t } = l; e < t; e++) {
              let { keyframe: t, actionItems: r } = l[e];
              if ((0 === e && (n = r[0]), R >= t)) {
                n = r[0];
                let o = l[e + 1],
                  u = o && R !== t;
                (a = u ? o.actionItems[0] : null),
                  u && ((i = t / 100), (c = (o.keyframe - t) / 100));
              }
            }
            let N = {};
            if (n && !a)
              for (let e = 0, { length: t } = d; e < t; e++) {
                let t = d[e];
                N[t] = g(I, t, n.config);
              }
            else if (n && a && void 0 !== i && void 0 !== c) {
              let e = (S - i) / c,
                t = E(n.config.easing, e, y);
              for (let e = 0, { length: i } = d; e < i; e++) {
                let i = d[e],
                  r = g(I, i, n.config),
                  c = (g(I, i, a.config) - r) * t + r;
                N[i] = c;
              }
            }
            return (0, r.merge)(e, { position: S, current: N });
          },
          O = (e, t) => {
            let {
                active: n,
                origin: a,
                start: i,
                immediate: c,
                renderType: o,
                verbose: u,
                actionItem: l,
                destination: d,
                destinationKeys: s,
                pluginDuration: p,
                instanceDelay: g,
                customEasingFn: y,
                skipMotion: T,
              } = e,
              _ = l.config.easing,
              { duration: O, delay: m } = l.config;
            null != p && (O = p),
              (m = null != g ? g : m),
              o === I ? (O = 0) : (c || T) && (O = m = 0);
            let { now: b } = t.payload;
            if (n && a) {
              let t = b - (i + m);
              if (u) {
                let t = O + m,
                  n = f(Math.min(Math.max(0, (b - i) / t), 1));
                e = (0, r.set)(e, "verboseTimeElapsed", t * n);
              }
              if (t < 0) return e;
              let n = f(Math.min(Math.max(0, t / O), 1)),
                c = E(_, n, y),
                o = {},
                l = null;
              return (
                s.length &&
                  (l = s.reduce((e, t) => {
                    let n = d[t],
                      i = parseFloat(a[t]) || 0,
                      r = parseFloat(n) - i;
                    return (e[t] = r * c + i), e;
                  }, {})),
                (o.current = l),
                (o.position = n),
                1 === n && ((o.active = !1), (o.complete = !0)),
                (0, r.merge)(e, o)
              );
            }
            return e;
          },
          m = (e = Object.freeze({}), t) => {
            switch (t.type) {
              case c:
                return t.payload.ixInstances || Object.freeze({});
              case o:
                return Object.freeze({});
              case u: {
                let {
                    instanceId: n,
                    elementId: a,
                    actionItem: i,
                    eventId: c,
                    eventTarget: o,
                    eventStateKey: u,
                    actionListId: l,
                    groupIndex: d,
                    isCarrier: s,
                    origin: f,
                    destination: E,
                    immediate: I,
                    verbose: g,
                    continuous: _,
                    parameterId: O,
                    actionGroups: m,
                    smoothing: b,
                    restingValue: A,
                    pluginInstance: S,
                    pluginDuration: R,
                    instanceDelay: N,
                    skipMotion: L,
                    skipToValue: h,
                  } = t.payload,
                  { actionTypeId: C } = i,
                  P = y(C),
                  M = T(P, C),
                  F = Object.keys(E).filter(
                    (e) => null != E[e] && "string" != typeof E[e]
                  ),
                  { easing: v } = i.config;
                return (0, r.set)(e, n, {
                  id: n,
                  elementId: a,
                  active: !1,
                  position: 0,
                  start: 0,
                  origin: f,
                  destination: E,
                  destinationKeys: F,
                  immediate: I,
                  verbose: g,
                  current: null,
                  actionItem: i,
                  actionTypeId: C,
                  eventId: c,
                  eventTarget: o,
                  eventStateKey: u,
                  actionListId: l,
                  groupIndex: d,
                  renderType: P,
                  isCarrier: s,
                  styleProp: M,
                  continuous: _,
                  parameterId: O,
                  actionGroups: m,
                  smoothing: b,
                  restingValue: A,
                  pluginInstance: S,
                  pluginDuration: R,
                  instanceDelay: N,
                  skipMotion: L,
                  skipToValue: h,
                  customEasingFn:
                    Array.isArray(v) && 4 === v.length ? p(v) : void 0,
                });
              }
              case l: {
                let { instanceId: n, time: a } = t.payload;
                return (0, r.mergeIn)(e, [n], {
                  active: !0,
                  complete: !1,
                  start: a,
                });
              }
              case d: {
                let { instanceId: n } = t.payload;
                if (!e[n]) return e;
                let a = {},
                  i = Object.keys(e),
                  { length: r } = i;
                for (let t = 0; t < r; t++) {
                  let r = i[t];
                  r !== n && (a[r] = e[r]);
                }
                return a;
              }
              case s: {
                let n = e,
                  a = Object.keys(e),
                  { length: i } = a;
                for (let c = 0; c < i; c++) {
                  let i = a[c],
                    o = e[i],
                    u = o.continuous ? _ : O;
                  n = (0, r.set)(n, i, u(o, t));
                }
                return n;
              }
              default:
                return e;
            }
          };
      },
      1540: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixParameters", {
            enumerable: !0,
            get: function () {
              return c;
            },
          });
        let {
            IX2_RAW_DATA_IMPORTED: a,
            IX2_SESSION_STOPPED: i,
            IX2_PARAMETER_CHANGED: r,
          } = n(7087).IX2EngineActionTypes,
          c = (e = {}, t) => {
            switch (t.type) {
              case a:
                return t.payload.ixParameters || {};
              case i:
                return {};
              case r: {
                let { key: n, value: a } = t.payload;
                return (e[n] = a), e;
              }
              default:
                return e;
            }
          };
      },
      7243: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let a = n(9516),
          i = n(4609),
          r = n(628),
          c = n(5862),
          o = n(9468),
          u = n(7718),
          l = n(1540),
          { ixElements: d } = o.IX2ElementsReducer,
          s = (0, a.combineReducers)({
            ixData: i.ixData,
            ixRequest: r.ixRequest,
            ixSession: c.ixSession,
            ixElements: d,
            ixInstances: u.ixInstances,
            ixParameters: l.ixParameters,
          });
      },
      628: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixRequest", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let a = n(7087),
          i = n(1185),
          {
            IX2_PREVIEW_REQUESTED: r,
            IX2_PLAYBACK_REQUESTED: c,
            IX2_STOP_REQUESTED: o,
            IX2_CLEAR_REQUESTED: u,
          } = a.IX2EngineActionTypes,
          l = { preview: {}, playback: {}, stop: {}, clear: {} },
          d = Object.create(null, {
            [r]: { value: "preview" },
            [c]: { value: "playback" },
            [o]: { value: "stop" },
            [u]: { value: "clear" },
          }),
          s = (e = l, t) => {
            if (t.type in d) {
              let n = [d[t.type]];
              return (0, i.setIn)(e, [n], { ...t.payload });
            }
            return e;
          };
      },
      5862: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ixSession", {
            enumerable: !0,
            get: function () {
              return g;
            },
          });
        let a = n(7087),
          i = n(1185),
          {
            IX2_SESSION_INITIALIZED: r,
            IX2_SESSION_STARTED: c,
            IX2_TEST_FRAME_RENDERED: o,
            IX2_SESSION_STOPPED: u,
            IX2_EVENT_LISTENER_ADDED: l,
            IX2_EVENT_STATE_CHANGED: d,
            IX2_ANIMATION_FRAME_CHANGED: s,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
            IX2_VIEWPORT_WIDTH_CHANGED: E,
            IX2_MEDIA_QUERIES_DEFINED: p,
          } = a.IX2EngineActionTypes,
          I = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1,
          },
          g = (e = I, t) => {
            switch (t.type) {
              case r: {
                let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
                return (0, i.merge)(e, {
                  hasBoundaryNodes: n,
                  reducedMotion: a,
                });
              }
              case c:
                return (0, i.set)(e, "active", !0);
              case o: {
                let {
                  payload: { step: n = 20 },
                } = t;
                return (0, i.set)(e, "tick", e.tick + n);
              }
              case u:
                return I;
              case s: {
                let {
                  payload: { now: n },
                } = t;
                return (0, i.set)(e, "tick", n);
              }
              case l: {
                let n = (0, i.addLast)(e.eventListeners, t.payload);
                return (0, i.set)(e, "eventListeners", n);
              }
              case d: {
                let { stateKey: n, newState: a } = t.payload;
                return (0, i.setIn)(e, ["eventState", n], a);
              }
              case f: {
                let { actionListId: n, isPlaying: a } = t.payload;
                return (0, i.setIn)(e, ["playbackState", n], a);
              }
              case E: {
                let { width: n, mediaQueries: a } = t.payload,
                  r = a.length,
                  c = null;
                for (let e = 0; e < r; e++) {
                  let { key: t, min: i, max: r } = a[e];
                  if (n >= i && n <= r) {
                    c = t;
                    break;
                  }
                }
                return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: c });
              }
              case p:
                return (0, i.set)(e, "hasDefinedMediaQueries", !0);
              default:
                return e;
            }
          };
      },
      7377: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return u;
          },
          createPluginInstance: function () {
            return c;
          },
          getPluginConfig: function () {
            return n;
          },
          getPluginDestination: function () {
            return r;
          },
          getPluginDuration: function () {
            return a;
          },
          getPluginOrigin: function () {
            return i;
          },
          renderPlugin: function () {
            return o;
          },
        });
        let n = (e) => e.value,
          a = (e, t) => {
            if ("auto" !== t.config.duration) return null;
            let n = parseFloat(e.getAttribute("data-duration"));
            return n > 0
              ? 1e3 * n
              : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
          },
          i = (e) => e || { value: 0 },
          r = (e) => ({ value: e.value }),
          c = (e) => {
            let t = window.Webflow.require("lottie");
            if (!t) return null;
            let n = t.createInstance(e);
            return n.stop(), n.setSubframe(!0), n;
          },
          o = (e, t, n) => {
            if (!e) return;
            let a = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * a);
          },
          u = (e) => {
            let t = window.Webflow.require("lottie");
            t && t.createInstance(e).stop();
          };
      },
      2570: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return f;
          },
          createPluginInstance: function () {
            return d;
          },
          getPluginConfig: function () {
            return c;
          },
          getPluginDestination: function () {
            return l;
          },
          getPluginDuration: function () {
            return o;
          },
          getPluginOrigin: function () {
            return u;
          },
          renderPlugin: function () {
            return s;
          },
        });
        let n = "--wf-rive-fit",
          a = "--wf-rive-alignment",
          i = (e) => document.querySelector(`[data-w-id="${e}"]`),
          r = () => window.Webflow.require("rive"),
          c = (e, t) => e.value.inputs[t],
          o = () => null,
          u = (e, t) => {
            if (e) return e;
            let n = {},
              { inputs: a = {} } = t.config.value;
            for (let e in a) null == a[e] && (n[e] = 0);
            return n;
          },
          l = (e) => e.value.inputs ?? {},
          d = (e, t) => {
            if ((t.config?.target?.selectorGuids || []).length > 0) return e;
            let n = t?.config?.target?.pluginElement;
            return n ? i(n) : null;
          },
          s = (e, { PLUGIN_RIVE: t }, i) => {
            let c = r();
            if (!c) return;
            let o = c.getInstance(e),
              u = c.rive.StateMachineInputType,
              { name: l, inputs: d = {} } = i.config.value || {};
            function s(e) {
              if (e.loaded) i();
              else {
                let t = () => {
                  i(), e?.off("load", t);
                };
                e?.on("load", t);
              }
              function i() {
                let i = e.stateMachineInputs(l);
                if (null != i) {
                  if ((!e.isPlaying && e.play(l, !1), n in d || a in d)) {
                    let t = e.layout,
                      i = d[n] ?? t.fit,
                      r = d[a] ?? t.alignment;
                    (i !== t.fit || r !== t.alignment) &&
                      (e.layout = t.copyWith({ fit: i, alignment: r }));
                  }
                  for (let e in d) {
                    if (e === n || e === a) continue;
                    let r = i.find((t) => t.name === e);
                    if (null != r)
                      switch (r.type) {
                        case u.Boolean:
                          if (null != d[e]) {
                            let t = !!d[e];
                            r.value = t;
                          }
                          break;
                        case u.Number: {
                          let n = t[e];
                          null != n && (r.value = n);
                          break;
                        }
                        case u.Trigger:
                          d[e] && r.fire();
                      }
                  }
                }
              }
            }
            o?.rive ? s(o.rive) : c.setLoadHandler(e, s);
          },
          f = (e, t) => null;
      },
      2866: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return f;
          },
          createPluginInstance: function () {
            return d;
          },
          getPluginConfig: function () {
            return r;
          },
          getPluginDestination: function () {
            return l;
          },
          getPluginDuration: function () {
            return c;
          },
          getPluginOrigin: function () {
            return u;
          },
          renderPlugin: function () {
            return s;
          },
        });
        let n = (e) => document.querySelector(`[data-w-id="${e}"]`),
          a = () => window.Webflow.require("spline"),
          i = (e, t) => e.filter((e) => !t.includes(e)),
          r = (e, t) => e.value[t],
          c = () => null,
          o = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
          }),
          u = (e, t) => {
            let n = Object.keys(t.config.value);
            if (e) {
              let t = i(n, Object.keys(e));
              return t.length ? t.reduce((e, t) => ((e[t] = o[t]), e), e) : e;
            }
            return n.reduce((e, t) => ((e[t] = o[t]), e), {});
          },
          l = (e) => e.value,
          d = (e, t) => {
            let a = t?.config?.target?.pluginElement;
            return a ? n(a) : null;
          },
          s = (e, t, n) => {
            let i = a();
            if (!i) return;
            let r = i.getInstance(e),
              c = n.config.target.objectId,
              o = (e) => {
                if (!e)
                  throw Error("Invalid spline app passed to renderSpline");
                let n = c && e.findObjectById(c);
                if (!n) return;
                let { PLUGIN_SPLINE: a } = t;
                null != a.positionX && (n.position.x = a.positionX),
                  null != a.positionY && (n.position.y = a.positionY),
                  null != a.positionZ && (n.position.z = a.positionZ),
                  null != a.rotationX && (n.rotation.x = a.rotationX),
                  null != a.rotationY && (n.rotation.y = a.rotationY),
                  null != a.rotationZ && (n.rotation.z = a.rotationZ),
                  null != a.scaleX && (n.scale.x = a.scaleX),
                  null != a.scaleY && (n.scale.y = a.scaleY),
                  null != a.scaleZ && (n.scale.z = a.scaleZ);
              };
            r ? o(r.spline) : i.setLoadHandler(e, o);
          },
          f = () => null;
      },
      1407: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return s;
          },
          createPluginInstance: function () {
            return u;
          },
          getPluginConfig: function () {
            return i;
          },
          getPluginDestination: function () {
            return o;
          },
          getPluginDuration: function () {
            return r;
          },
          getPluginOrigin: function () {
            return c;
          },
          renderPlugin: function () {
            return d;
          },
        });
        let a = n(380),
          i = (e, t) => e.value[t],
          r = () => null,
          c = (e, t) => {
            if (e) return e;
            let n = t.config.value,
              i = t.config.target.objectId,
              r = getComputedStyle(document.documentElement).getPropertyValue(
                i
              );
            return null != n.size
              ? { size: parseInt(r, 10) }
              : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(r) }
              : null != n.red && null != n.green && null != n.blue
              ? (0, a.normalizeColor)(r)
              : void 0;
          },
          o = (e) => e.value,
          u = () => null,
          l = {
            color: {
              match: ({ red: e, green: t, blue: n, alpha: a }) =>
                [e, t, n, a].every((e) => null != e),
              getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
                `rgba(${e}, ${t}, ${n}, ${a})`,
            },
            size: {
              match: ({ size: e }) => null != e,
              getValue: ({ size: e }, t) => {
                if ("-" === t) return e;
                return `${e}${t}`;
              },
            },
          },
          d = (e, t, n) => {
            let {
                target: { objectId: a },
                value: { unit: i },
              } = n.config,
              r = t.PLUGIN_VARIABLE,
              c = Object.values(l).find((e) => e.match(r, i));
            c &&
              document.documentElement.style.setProperty(a, c.getValue(r, i));
          },
          s = (e, t) => {
            let n = t.config.target.objectId;
            document.documentElement.style.removeProperty(n);
          };
      },
      3690: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "pluginMethodMap", {
            enumerable: !0,
            get: function () {
              return d;
            },
          });
        let a = n(7087),
          i = l(n(7377)),
          r = l(n(2866)),
          c = l(n(2570)),
          o = l(n(1407));
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        function l(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var c = i ? Object.getOwnPropertyDescriptor(e, r) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(a, r, c)
                : (a[r] = e[r]);
            }
          return (a.default = e), n && n.set(e, a), a;
        }
        let d = new Map([
          [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
          [a.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
          [a.ActionTypeConsts.PLUGIN_RIVE, { ...c }],
          [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...o }],
        ]);
      },
      8023: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
            return T;
          },
          IX2_ANIMATION_FRAME_CHANGED: function () {
            return f;
          },
          IX2_CLEAR_REQUESTED: function () {
            return l;
          },
          IX2_ELEMENT_STATE_CHANGED: function () {
            return y;
          },
          IX2_EVENT_LISTENER_ADDED: function () {
            return d;
          },
          IX2_EVENT_STATE_CHANGED: function () {
            return s;
          },
          IX2_INSTANCE_ADDED: function () {
            return p;
          },
          IX2_INSTANCE_REMOVED: function () {
            return g;
          },
          IX2_INSTANCE_STARTED: function () {
            return I;
          },
          IX2_MEDIA_QUERIES_DEFINED: function () {
            return O;
          },
          IX2_PARAMETER_CHANGED: function () {
            return E;
          },
          IX2_PLAYBACK_REQUESTED: function () {
            return o;
          },
          IX2_PREVIEW_REQUESTED: function () {
            return c;
          },
          IX2_RAW_DATA_IMPORTED: function () {
            return n;
          },
          IX2_SESSION_INITIALIZED: function () {
            return a;
          },
          IX2_SESSION_STARTED: function () {
            return i;
          },
          IX2_SESSION_STOPPED: function () {
            return r;
          },
          IX2_STOP_REQUESTED: function () {
            return u;
          },
          IX2_TEST_FRAME_RENDERED: function () {
            return m;
          },
          IX2_VIEWPORT_WIDTH_CHANGED: function () {
            return _;
          },
        });
        let n = "IX2_RAW_DATA_IMPORTED",
          a = "IX2_SESSION_INITIALIZED",
          i = "IX2_SESSION_STARTED",
          r = "IX2_SESSION_STOPPED",
          c = "IX2_PREVIEW_REQUESTED",
          o = "IX2_PLAYBACK_REQUESTED",
          u = "IX2_STOP_REQUESTED",
          l = "IX2_CLEAR_REQUESTED",
          d = "IX2_EVENT_LISTENER_ADDED",
          s = "IX2_EVENT_STATE_CHANGED",
          f = "IX2_ANIMATION_FRAME_CHANGED",
          E = "IX2_PARAMETER_CHANGED",
          p = "IX2_INSTANCE_ADDED",
          I = "IX2_INSTANCE_STARTED",
          g = "IX2_INSTANCE_REMOVED",
          y = "IX2_ELEMENT_STATE_CHANGED",
          T = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
          _ = "IX2_VIEWPORT_WIDTH_CHANGED",
          O = "IX2_MEDIA_QUERIES_DEFINED",
          m = "IX2_TEST_FRAME_RENDERED";
      },
      2686: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ABSTRACT_NODE: function () {
            return J;
          },
          AUTO: function () {
            return B;
          },
          BACKGROUND: function () {
            return V;
          },
          BACKGROUND_COLOR: function () {
            return U;
          },
          BAR_DELIMITER: function () {
            return Y;
          },
          BORDER_COLOR: function () {
            return D;
          },
          BOUNDARY_SELECTOR: function () {
            return c;
          },
          CHILDREN: function () {
            return z;
          },
          COLON_DELIMITER: function () {
            return W;
          },
          COLOR: function () {
            return w;
          },
          COMMA_DELIMITER: function () {
            return j;
          },
          CONFIG_UNIT: function () {
            return p;
          },
          CONFIG_VALUE: function () {
            return d;
          },
          CONFIG_X_UNIT: function () {
            return s;
          },
          CONFIG_X_VALUE: function () {
            return o;
          },
          CONFIG_Y_UNIT: function () {
            return f;
          },
          CONFIG_Y_VALUE: function () {
            return u;
          },
          CONFIG_Z_UNIT: function () {
            return E;
          },
          CONFIG_Z_VALUE: function () {
            return l;
          },
          DISPLAY: function () {
            return X;
          },
          FILTER: function () {
            return M;
          },
          FLEX: function () {
            return k;
          },
          FONT_VARIATION_SETTINGS: function () {
            return F;
          },
          HEIGHT: function () {
            return G;
          },
          HTML_ELEMENT: function () {
            return q;
          },
          IMMEDIATE_CHILDREN: function () {
            return H;
          },
          IX2_ID_DELIMITER: function () {
            return n;
          },
          OPACITY: function () {
            return P;
          },
          PARENT: function () {
            return $;
          },
          PLAIN_OBJECT: function () {
            return Z;
          },
          PRESERVE_3D: function () {
            return K;
          },
          RENDER_GENERAL: function () {
            return et;
          },
          RENDER_PLUGIN: function () {
            return ea;
          },
          RENDER_STYLE: function () {
            return en;
          },
          RENDER_TRANSFORM: function () {
            return ee;
          },
          ROTATE_X: function () {
            return S;
          },
          ROTATE_Y: function () {
            return R;
          },
          ROTATE_Z: function () {
            return N;
          },
          SCALE_3D: function () {
            return A;
          },
          SCALE_X: function () {
            return O;
          },
          SCALE_Y: function () {
            return m;
          },
          SCALE_Z: function () {
            return b;
          },
          SIBLINGS: function () {
            return Q;
          },
          SKEW: function () {
            return L;
          },
          SKEW_X: function () {
            return h;
          },
          SKEW_Y: function () {
            return C;
          },
          TRANSFORM: function () {
            return I;
          },
          TRANSLATE_3D: function () {
            return _;
          },
          TRANSLATE_X: function () {
            return g;
          },
          TRANSLATE_Y: function () {
            return y;
          },
          TRANSLATE_Z: function () {
            return T;
          },
          WF_PAGE: function () {
            return a;
          },
          WIDTH: function () {
            return v;
          },
          WILL_CHANGE: function () {
            return x;
          },
          W_MOD_IX: function () {
            return r;
          },
          W_MOD_JS: function () {
            return i;
          },
        });
        let n = "|",
          a = "data-wf-page",
          i = "w-mod-js",
          r = "w-mod-ix",
          c = ".w-dyn-item",
          o = "xValue",
          u = "yValue",
          l = "zValue",
          d = "value",
          s = "xUnit",
          f = "yUnit",
          E = "zUnit",
          p = "unit",
          I = "transform",
          g = "translateX",
          y = "translateY",
          T = "translateZ",
          _ = "translate3d",
          O = "scaleX",
          m = "scaleY",
          b = "scaleZ",
          A = "scale3d",
          S = "rotateX",
          R = "rotateY",
          N = "rotateZ",
          L = "skew",
          h = "skewX",
          C = "skewY",
          P = "opacity",
          M = "filter",
          F = "font-variation-settings",
          v = "width",
          G = "height",
          U = "backgroundColor",
          V = "background",
          D = "borderColor",
          w = "color",
          X = "display",
          k = "flex",
          x = "willChange",
          B = "AUTO",
          j = ",",
          W = ":",
          Y = "|",
          z = "CHILDREN",
          H = "IMMEDIATE_CHILDREN",
          Q = "SIBLINGS",
          $ = "PARENT",
          K = "preserve-3d",
          q = "HTML_ELEMENT",
          Z = "PLAIN_OBJECT",
          J = "ABSTRACT_NODE",
          ee = "RENDER_TRANSFORM",
          et = "RENDER_GENERAL",
          en = "RENDER_STYLE",
          ea = "RENDER_PLUGIN";
      },
      262: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ActionAppliesTo: function () {
            return a;
          },
          ActionTypeConsts: function () {
            return n;
          },
        });
        let n = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
          },
          a = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
          };
      },
      7087: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ActionTypeConsts: function () {
            return i.ActionTypeConsts;
          },
          IX2EngineActionTypes: function () {
            return r;
          },
          IX2EngineConstants: function () {
            return c;
          },
          QuickEffectIds: function () {
            return a.QuickEffectIds;
          },
        });
        let a = o(n(1833), t),
          i = o(n(262), t);
        o(n(8704), t), o(n(3213), t);
        let r = l(n(8023)),
          c = l(n(2686));
        function o(e, t) {
          return (
            Object.keys(e).forEach(function (n) {
              "default" !== n &&
                !Object.prototype.hasOwnProperty.call(t, n) &&
                Object.defineProperty(t, n, {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                });
            }),
            e
          );
        }
        function u(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (u = function (e) {
            return e ? n : t;
          })(e);
        }
        function l(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = u(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var c = i ? Object.getOwnPropertyDescriptor(e, r) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(a, r, c)
                : (a[r] = e[r]);
            }
          return (a.default = e), n && n.set(e, a), a;
        }
      },
      3213: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "ReducedMotionTypes", {
            enumerable: !0,
            get: function () {
              return d;
            },
          });
        let {
            TRANSFORM_MOVE: a,
            TRANSFORM_SCALE: i,
            TRANSFORM_ROTATE: r,
            TRANSFORM_SKEW: c,
            STYLE_SIZE: o,
            STYLE_FILTER: u,
            STYLE_FONT_VARIATION: l,
          } = n(262).ActionTypeConsts,
          d = { [a]: !0, [i]: !0, [r]: !0, [c]: !0, [o]: !0, [u]: !0, [l]: !0 };
      },
      1833: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          EventAppliesTo: function () {
            return a;
          },
          EventBasedOn: function () {
            return i;
          },
          EventContinuousMouseAxes: function () {
            return r;
          },
          EventLimitAffectedElements: function () {
            return c;
          },
          EventTypeConsts: function () {
            return n;
          },
          QuickEffectDirectionConsts: function () {
            return u;
          },
          QuickEffectIds: function () {
            return o;
          },
        });
        let n = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
          },
          a = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
          i = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
          r = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
          c = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
          },
          o = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
          },
          u = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
          };
      },
      8704: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "InteractionTypeConsts", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let n = {
          MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
          MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
          MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
          SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
          SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
          MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
            "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
          PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
          PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
          PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
          NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
          DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
          ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
          TAB_INTERACTION: "TAB_INTERACTION",
          SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
      },
      380: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "normalizeColor", {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let n = {
          aliceblue: "#F0F8FF",
          antiquewhite: "#FAEBD7",
          aqua: "#00FFFF",
          aquamarine: "#7FFFD4",
          azure: "#F0FFFF",
          beige: "#F5F5DC",
          bisque: "#FFE4C4",
          black: "#000000",
          blanchedalmond: "#FFEBCD",
          blue: "#0000FF",
          blueviolet: "#8A2BE2",
          brown: "#A52A2A",
          burlywood: "#DEB887",
          cadetblue: "#5F9EA0",
          chartreuse: "#7FFF00",
          chocolate: "#D2691E",
          coral: "#FF7F50",
          cornflowerblue: "#6495ED",
          cornsilk: "#FFF8DC",
          crimson: "#DC143C",
          cyan: "#00FFFF",
          darkblue: "#00008B",
          darkcyan: "#008B8B",
          darkgoldenrod: "#B8860B",
          darkgray: "#A9A9A9",
          darkgreen: "#006400",
          darkgrey: "#A9A9A9",
          darkkhaki: "#BDB76B",
          darkmagenta: "#8B008B",
          darkolivegreen: "#556B2F",
          darkorange: "#FF8C00",
          darkorchid: "#9932CC",
          darkred: "#8B0000",
          darksalmon: "#E9967A",
          darkseagreen: "#8FBC8F",
          darkslateblue: "#483D8B",
          darkslategray: "#2F4F4F",
          darkslategrey: "#2F4F4F",
          darkturquoise: "#00CED1",
          darkviolet: "#9400D3",
          deeppink: "#FF1493",
          deepskyblue: "#00BFFF",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1E90FF",
          firebrick: "#B22222",
          floralwhite: "#FFFAF0",
          forestgreen: "#228B22",
          fuchsia: "#FF00FF",
          gainsboro: "#DCDCDC",
          ghostwhite: "#F8F8FF",
          gold: "#FFD700",
          goldenrod: "#DAA520",
          gray: "#808080",
          green: "#008000",
          greenyellow: "#ADFF2F",
          grey: "#808080",
          honeydew: "#F0FFF0",
          hotpink: "#FF69B4",
          indianred: "#CD5C5C",
          indigo: "#4B0082",
          ivory: "#FFFFF0",
          khaki: "#F0E68C",
          lavender: "#E6E6FA",
          lavenderblush: "#FFF0F5",
          lawngreen: "#7CFC00",
          lemonchiffon: "#FFFACD",
          lightblue: "#ADD8E6",
          lightcoral: "#F08080",
          lightcyan: "#E0FFFF",
          lightgoldenrodyellow: "#FAFAD2",
          lightgray: "#D3D3D3",
          lightgreen: "#90EE90",
          lightgrey: "#D3D3D3",
          lightpink: "#FFB6C1",
          lightsalmon: "#FFA07A",
          lightseagreen: "#20B2AA",
          lightskyblue: "#87CEFA",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#B0C4DE",
          lightyellow: "#FFFFE0",
          lime: "#00FF00",
          limegreen: "#32CD32",
          linen: "#FAF0E6",
          magenta: "#FF00FF",
          maroon: "#800000",
          mediumaquamarine: "#66CDAA",
          mediumblue: "#0000CD",
          mediumorchid: "#BA55D3",
          mediumpurple: "#9370DB",
          mediumseagreen: "#3CB371",
          mediumslateblue: "#7B68EE",
          mediumspringgreen: "#00FA9A",
          mediumturquoise: "#48D1CC",
          mediumvioletred: "#C71585",
          midnightblue: "#191970",
          mintcream: "#F5FFFA",
          mistyrose: "#FFE4E1",
          moccasin: "#FFE4B5",
          navajowhite: "#FFDEAD",
          navy: "#000080",
          oldlace: "#FDF5E6",
          olive: "#808000",
          olivedrab: "#6B8E23",
          orange: "#FFA500",
          orangered: "#FF4500",
          orchid: "#DA70D6",
          palegoldenrod: "#EEE8AA",
          palegreen: "#98FB98",
          paleturquoise: "#AFEEEE",
          palevioletred: "#DB7093",
          papayawhip: "#FFEFD5",
          peachpuff: "#FFDAB9",
          peru: "#CD853F",
          pink: "#FFC0CB",
          plum: "#DDA0DD",
          powderblue: "#B0E0E6",
          purple: "#800080",
          rebeccapurple: "#663399",
          red: "#FF0000",
          rosybrown: "#BC8F8F",
          royalblue: "#4169E1",
          saddlebrown: "#8B4513",
          salmon: "#FA8072",
          sandybrown: "#F4A460",
          seagreen: "#2E8B57",
          seashell: "#FFF5EE",
          sienna: "#A0522D",
          silver: "#C0C0C0",
          skyblue: "#87CEEB",
          slateblue: "#6A5ACD",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#FFFAFA",
          springgreen: "#00FF7F",
          steelblue: "#4682B4",
          tan: "#D2B48C",
          teal: "#008080",
          thistle: "#D8BFD8",
          tomato: "#FF6347",
          turquoise: "#40E0D0",
          violet: "#EE82EE",
          wheat: "#F5DEB3",
          white: "#FFFFFF",
          whitesmoke: "#F5F5F5",
          yellow: "#FFFF00",
          yellowgreen: "#9ACD32",
        };
        function a(e) {
          let t, a, i;
          let r = 1,
            c = e.replace(/\s/g, "").toLowerCase(),
            o = ("string" == typeof n[c] ? n[c].toLowerCase() : null) || c;
          if (o.startsWith("#")) {
            let e = o.substring(1);
            3 === e.length || 4 === e.length
              ? ((t = parseInt(e[0] + e[0], 16)),
                (a = parseInt(e[1] + e[1], 16)),
                (i = parseInt(e[2] + e[2], 16)),
                4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
              : (6 === e.length || 8 === e.length) &&
                ((t = parseInt(e.substring(0, 2), 16)),
                (a = parseInt(e.substring(2, 4), 16)),
                (i = parseInt(e.substring(4, 6), 16)),
                8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
          } else if (o.startsWith("rgba")) {
            let e = o.match(/rgba\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (a = parseInt(e[1], 10)),
              (i = parseInt(e[2], 10)),
              (r = parseFloat(e[3]));
          } else if (o.startsWith("rgb")) {
            let e = o.match(/rgb\(([^)]+)\)/)[1].split(",");
            (t = parseInt(e[0], 10)),
              (a = parseInt(e[1], 10)),
              (i = parseInt(e[2], 10));
          } else if (o.startsWith("hsla")) {
            let e, n, c;
            let u = o.match(/hsla\(([^)]+)\)/)[1].split(","),
              l = parseFloat(u[0]),
              d = parseFloat(u[1].replace("%", "")) / 100,
              s = parseFloat(u[2].replace("%", "")) / 100;
            r = parseFloat(u[3]);
            let f = (1 - Math.abs(2 * s - 1)) * d,
              E = f * (1 - Math.abs(((l / 60) % 2) - 1)),
              p = s - f / 2;
            l >= 0 && l < 60
              ? ((e = f), (n = E), (c = 0))
              : l >= 60 && l < 120
              ? ((e = E), (n = f), (c = 0))
              : l >= 120 && l < 180
              ? ((e = 0), (n = f), (c = E))
              : l >= 180 && l < 240
              ? ((e = 0), (n = E), (c = f))
              : l >= 240 && l < 300
              ? ((e = E), (n = 0), (c = f))
              : ((e = f), (n = 0), (c = E)),
              (t = Math.round((e + p) * 255)),
              (a = Math.round((n + p) * 255)),
              (i = Math.round((c + p) * 255));
          } else if (o.startsWith("hsl")) {
            let e, n, r;
            let c = o.match(/hsl\(([^)]+)\)/)[1].split(","),
              u = parseFloat(c[0]),
              l = parseFloat(c[1].replace("%", "")) / 100,
              d = parseFloat(c[2].replace("%", "")) / 100,
              s = (1 - Math.abs(2 * d - 1)) * l,
              f = s * (1 - Math.abs(((u / 60) % 2) - 1)),
              E = d - s / 2;
            u >= 0 && u < 60
              ? ((e = s), (n = f), (r = 0))
              : u >= 60 && u < 120
              ? ((e = f), (n = s), (r = 0))
              : u >= 120 && u < 180
              ? ((e = 0), (n = s), (r = f))
              : u >= 180 && u < 240
              ? ((e = 0), (n = f), (r = s))
              : u >= 240 && u < 300
              ? ((e = f), (n = 0), (r = s))
              : ((e = s), (n = 0), (r = f)),
              (t = Math.round((e + E) * 255)),
              (a = Math.round((n + E) * 255)),
              (i = Math.round((r + E) * 255));
          }
          if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
            throw Error(
              `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
            );
          return { red: t, green: a, blue: i, alpha: r };
        }
      },
      9468: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          IX2BrowserSupport: function () {
            return a;
          },
          IX2EasingUtils: function () {
            return r;
          },
          IX2Easings: function () {
            return i;
          },
          IX2ElementsReducer: function () {
            return c;
          },
          IX2VanillaPlugins: function () {
            return o;
          },
          IX2VanillaUtils: function () {
            return u;
          },
        });
        let a = d(n(2662)),
          i = d(n(8686)),
          r = d(n(3767)),
          c = d(n(5861)),
          o = d(n(1799)),
          u = d(n(4124));
        function l(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (l = function (e) {
            return e ? n : t;
          })(e);
        }
        function d(e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var c = i ? Object.getOwnPropertyDescriptor(e, r) : null;
              c && (c.get || c.set)
                ? Object.defineProperty(a, r, c)
                : (a[r] = e[r]);
            }
          return (a.default = e), n && n.set(e, a), a;
        }
      },
      2662: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ELEMENT_MATCHES: function () {
            return c;
          },
          FLEX_PREFIXED: function () {
            return o;
          },
          IS_BROWSER_ENV: function () {
            return i;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return d;
          },
          withBrowser: function () {
            return r;
          },
        });
        let a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(9777)),
          i = "undefined" != typeof window,
          r = (e, t) => (i ? e() : t),
          c = r(() =>
            (0, a.default)(
              [
                "matches",
                "matchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
                "webkitMatchesSelector",
              ],
              (e) => e in Element.prototype
            )
          ),
          o = r(() => {
            let e = document.createElement("i"),
              t = [
                "flex",
                "-webkit-flex",
                "-ms-flexbox",
                "-moz-box",
                "-webkit-box",
              ];
            try {
              let { length: n } = t;
              for (let a = 0; a < n; a++) {
                let n = t[a];
                if (((e.style.display = n), e.style.display === n)) return n;
              }
              return "";
            } catch (e) {
              return "";
            }
          }, "flex"),
          u = r(() => {
            let e = document.createElement("i");
            if (null == e.style.transform) {
              let t = ["Webkit", "Moz", "ms"],
                { length: n } = t;
              for (let a = 0; a < n; a++) {
                let n = t[a] + "Transform";
                if (void 0 !== e.style[n]) return n;
              }
            }
            return "transform";
          }, "transform"),
          l = u.split("transform")[0],
          d = l ? l + "TransformStyle" : "transformStyle";
      },
      3767: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return o;
          },
          optimizeFloat: function () {
            return c;
          },
        });
        let a = (function (e, t) {
            if (!t && e && e.__esModule) return e;
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return { default: e };
            var n = r(t);
            if (n && n.has(e)) return n.get(e);
            var a = { __proto__: null },
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var c in e)
              if (
                "default" !== c &&
                Object.prototype.hasOwnProperty.call(e, c)
              ) {
                var o = i ? Object.getOwnPropertyDescriptor(e, c) : null;
                o && (o.get || o.set)
                  ? Object.defineProperty(a, c, o)
                  : (a[c] = e[c]);
              }
            return (a.default = e), n && n.set(e, a), a;
          })(n(8686)),
          i = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(1361));
        function r(e) {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        function c(e, t = 5, n = 10) {
          let a = Math.pow(n, t),
            i = Number(Math.round(e * a) / a);
          return Math.abs(i) > 1e-4 ? i : 0;
        }
        function o(e) {
          return (0, i.default)(...e);
        }
        function u(e, t, n) {
          return 0 === t
            ? 0
            : 1 === t
            ? 1
            : n
            ? c(t > 0 ? n(t) : t)
            : c(t > 0 && e && a[e] ? a[e](t) : t);
        }
      },
      8686: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return k;
          },
          ease: function () {
            return i;
          },
          easeIn: function () {
            return r;
          },
          easeInOut: function () {
            return o;
          },
          easeOut: function () {
            return c;
          },
          inBack: function () {
            return P;
          },
          inCirc: function () {
            return N;
          },
          inCubic: function () {
            return s;
          },
          inElastic: function () {
            return v;
          },
          inExpo: function () {
            return A;
          },
          inOutBack: function () {
            return F;
          },
          inOutCirc: function () {
            return h;
          },
          inOutCubic: function () {
            return E;
          },
          inOutElastic: function () {
            return U;
          },
          inOutExpo: function () {
            return R;
          },
          inOutQuad: function () {
            return d;
          },
          inOutQuart: function () {
            return g;
          },
          inOutQuint: function () {
            return _;
          },
          inOutSine: function () {
            return b;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return p;
          },
          inQuint: function () {
            return y;
          },
          inSine: function () {
            return O;
          },
          outBack: function () {
            return M;
          },
          outBounce: function () {
            return C;
          },
          outCirc: function () {
            return L;
          },
          outCubic: function () {
            return f;
          },
          outElastic: function () {
            return G;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return l;
          },
          outQuart: function () {
            return I;
          },
          outQuint: function () {
            return T;
          },
          outSine: function () {
            return m;
          },
          swingFrom: function () {
            return D;
          },
          swingFromTo: function () {
            return V;
          },
          swingTo: function () {
            return w;
          },
        });
        let a = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(n(1361)),
          i = (0, a.default)(0.25, 0.1, 0.25, 1),
          r = (0, a.default)(0.42, 0, 1, 1),
          c = (0, a.default)(0, 0, 0.58, 1),
          o = (0, a.default)(0.42, 0, 0.58, 1);
        function u(e) {
          return Math.pow(e, 2);
        }
        function l(e) {
          return -(Math.pow(e - 1, 2) - 1);
        }
        function d(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 2)
            : -0.5 * ((e -= 2) * e - 2);
        }
        function s(e) {
          return Math.pow(e, 3);
        }
        function f(e) {
          return Math.pow(e - 1, 3) + 1;
        }
        function E(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 3)
            : 0.5 * (Math.pow(e - 2, 3) + 2);
        }
        function p(e) {
          return Math.pow(e, 4);
        }
        function I(e) {
          return -(Math.pow(e - 1, 4) - 1);
        }
        function g(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 4)
            : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
        }
        function y(e) {
          return Math.pow(e, 5);
        }
        function T(e) {
          return Math.pow(e - 1, 5) + 1;
        }
        function _(e) {
          return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 5)
            : 0.5 * (Math.pow(e - 2, 5) + 2);
        }
        function O(e) {
          return -Math.cos((Math.PI / 2) * e) + 1;
        }
        function m(e) {
          return Math.sin((Math.PI / 2) * e);
        }
        function b(e) {
          return -0.5 * (Math.cos(Math.PI * e) - 1);
        }
        function A(e) {
          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
        }
        function S(e) {
          return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
        }
        function R(e) {
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (e /= 0.5) < 1
            ? 0.5 * Math.pow(2, 10 * (e - 1))
            : 0.5 * (-Math.pow(2, -10 * --e) + 2);
        }
        function N(e) {
          return -(Math.sqrt(1 - e * e) - 1);
        }
        function L(e) {
          return Math.sqrt(1 - Math.pow(e - 1, 2));
        }
        function h(e) {
          return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
        }
        function C(e) {
          if (e < 1 / 2.75) return 7.5625 * e * e;
          if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
          if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
          else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function P(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function M(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function F(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function v(e) {
          let t = 1.70158,
            n = 0,
            a = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (!n && (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              -(
                a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
        }
        function G(e) {
          let t = 1.70158,
            n = 0,
            a = 1;
          return 0 === e
            ? 0
            : 1 === e
            ? 1
            : (!n && (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
        }
        function U(e) {
          let t = 1.70158,
            n = 0,
            a = 1;
          return 0 === e
            ? 0
            : 2 == (e /= 0.5)
            ? 1
            : (!n && (n = 0.3 * 1.5),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              e < 1)
            ? -0.5 *
              (a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n))
            : a *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n) *
                0.5 +
              1;
        }
        function V(e) {
          let t = 1.70158;
          return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
        }
        function D(e) {
          return e * e * (2.70158 * e - 1.70158);
        }
        function w(e) {
          return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
        }
        function X(e) {
          if (e < 1 / 2.75) return 7.5625 * e * e;
          if (e < 2 / 2.75) return 7.5625 * (e -= 1.5 / 2.75) * e + 0.75;
          if (e < 2.5 / 2.75) return 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375;
          else return 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
        }
        function k(e) {
          if (e < 1 / 2.75) return 7.5625 * e * e;
          if (e < 2 / 2.75) return 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75);
          if (e < 2.5 / 2.75)
            return 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375);
          else return 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
        }
      },
      1799: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          clearPlugin: function () {
            return E;
          },
          createPluginInstance: function () {
            return s;
          },
          getPluginConfig: function () {
            return o;
          },
          getPluginDestination: function () {
            return d;
          },
          getPluginDuration: function () {
            return l;
          },
          getPluginOrigin: function () {
            return u;
          },
          isPluginType: function () {
            return r;
          },
          renderPlugin: function () {
            return f;
          },
        });
        let a = n(2662),
          i = n(3690);
        function r(e) {
          return i.pluginMethodMap.has(e);
        }
        let c = (e) => (t) => {
            if (!a.IS_BROWSER_ENV) return () => null;
            let n = i.pluginMethodMap.get(t);
            if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
            let r = n[e];
            if (!r) throw Error(`IX2 invalid plugin method: ${e}`);
            return r;
          },
          o = c("getPluginConfig"),
          u = c("getPluginOrigin"),
          l = c("getPluginDuration"),
          d = c("getPluginDestination"),
          s = c("createPluginInstance"),
          f = c("renderPlugin"),
          E = c("clearPlugin");
      },
      4124: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cleanupHTMLElement: function () {
            return ej;
          },
          clearAllStyles: function () {
            return ek;
          },
          clearObjectCache: function () {
            return el;
          },
          getActionListProgress: function () {
            return eH;
          },
          getAffectedElements: function () {
            return eT;
          },
          getComputedStyle: function () {
            return e_;
          },
          getDestinationValues: function () {
            return eL;
          },
          getElementId: function () {
            return eE;
          },
          getInstanceId: function () {
            return es;
          },
          getInstanceOrigin: function () {
            return eA;
          },
          getItemConfigByKey: function () {
            return eN;
          },
          getMaxDurationItemIndex: function () {
            return ez;
          },
          getNamespacedParameterId: function () {
            return eK;
          },
          getRenderType: function () {
            return eh;
          },
          getStyleProp: function () {
            return eC;
          },
          mediaQueriesEqual: function () {
            return eZ;
          },
          observeStore: function () {
            return eg;
          },
          reduceListToGroup: function () {
            return eQ;
          },
          reifyState: function () {
            return ep;
          },
          renderHTMLElement: function () {
            return eP;
          },
          shallowEqual: function () {
            return u.default;
          },
          shouldAllowMediaQuery: function () {
            return eq;
          },
          shouldNamespaceEventParameter: function () {
            return e$;
          },
          stringifyTarget: function () {
            return eJ;
          },
        });
        let a = E(n(4075)),
          i = E(n(1455)),
          r = E(n(5720)),
          c = n(1185),
          o = n(7087),
          u = E(n(7164)),
          l = n(3767),
          d = n(380),
          s = n(1799),
          f = n(2662);
        function E(e) {
          return e && e.__esModule ? e : { default: e };
        }
        let {
            BACKGROUND: p,
            TRANSFORM: I,
            TRANSLATE_3D: g,
            SCALE_3D: y,
            ROTATE_X: T,
            ROTATE_Y: _,
            ROTATE_Z: O,
            SKEW: m,
            PRESERVE_3D: b,
            FLEX: A,
            OPACITY: S,
            FILTER: R,
            FONT_VARIATION_SETTINGS: N,
            WIDTH: L,
            HEIGHT: h,
            BACKGROUND_COLOR: C,
            BORDER_COLOR: P,
            COLOR: M,
            CHILDREN: F,
            IMMEDIATE_CHILDREN: v,
            SIBLINGS: G,
            PARENT: U,
            DISPLAY: V,
            WILL_CHANGE: D,
            AUTO: w,
            COMMA_DELIMITER: X,
            COLON_DELIMITER: k,
            BAR_DELIMITER: x,
            RENDER_TRANSFORM: B,
            RENDER_GENERAL: j,
            RENDER_STYLE: W,
            RENDER_PLUGIN: Y,
          } = o.IX2EngineConstants,
          {
            TRANSFORM_MOVE: z,
            TRANSFORM_SCALE: H,
            TRANSFORM_ROTATE: Q,
            TRANSFORM_SKEW: $,
            STYLE_OPACITY: K,
            STYLE_FILTER: q,
            STYLE_FONT_VARIATION: Z,
            STYLE_SIZE: J,
            STYLE_BACKGROUND_COLOR: ee,
            STYLE_BORDER: et,
            STYLE_TEXT_COLOR: en,
            GENERAL_DISPLAY: ea,
            OBJECT_VALUE: ei,
          } = o.ActionTypeConsts,
          er = (e) => e.trim(),
          ec = Object.freeze({ [ee]: C, [et]: P, [en]: M }),
          eo = Object.freeze({
            [f.TRANSFORM_PREFIXED]: I,
            [C]: p,
            [S]: S,
            [R]: R,
            [L]: L,
            [h]: h,
            [N]: N,
          }),
          eu = new Map();
        function el() {
          eu.clear();
        }
        let ed = 1;
        function es() {
          return "i" + ed++;
        }
        let ef = 1;
        function eE(e, t) {
          for (let n in e) {
            let a = e[n];
            if (a && a.ref === t) return a.id;
          }
          return "e" + ef++;
        }
        function ep({ events: e, actionLists: t, site: n } = {}) {
          let a = (0, i.default)(
              e,
              (e, t) => {
                let { eventTypeId: n } = t;
                return !e[n] && (e[n] = {}), (e[n][t.id] = t), e;
              },
              {}
            ),
            r = n && n.mediaQueries,
            c = [];
          return (
            r
              ? (c = r.map((e) => e.key))
              : ((r = []),
                console.warn("IX2 missing mediaQueries in site data")),
            {
              ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: a,
                mediaQueries: r,
                mediaQueryKeys: c,
              },
            }
          );
        }
        let eI = (e, t) => e === t;
        function eg({ store: e, select: t, onChange: n, comparator: a = eI }) {
          let { getState: i, subscribe: r } = e,
            c = r(function () {
              let r = t(i());
              if (null == r) {
                c();
                return;
              }
              !a(r, o) && n((o = r), e);
            }),
            o = t(i());
          return c;
        }
        function ey(e) {
          let t = typeof e;
          if ("string" === t) return { id: e };
          if (null != e && "object" === t) {
            let {
              id: t,
              objectId: n,
              selector: a,
              selectorGuids: i,
              appliesTo: r,
              useEventTarget: c,
            } = e;
            return {
              id: t,
              objectId: n,
              selector: a,
              selectorGuids: i,
              appliesTo: r,
              useEventTarget: c,
            };
          }
          return {};
        }
        function eT({
          config: e,
          event: t,
          eventTarget: n,
          elementRoot: a,
          elementApi: i,
        }) {
          let r, c, u;
          if (!i) throw Error("IX2 missing elementApi");
          let { targets: l } = e;
          if (Array.isArray(l) && l.length > 0)
            return l.reduce(
              (e, r) =>
                e.concat(
                  eT({
                    config: { target: r },
                    event: t,
                    eventTarget: n,
                    elementRoot: a,
                    elementApi: i,
                  })
                ),
              []
            );
          let {
              getValidDocument: d,
              getQuerySelector: s,
              queryDocument: E,
              getChildElements: p,
              getSiblingElements: I,
              matchSelector: g,
              elementContains: y,
              isSiblingNode: T,
            } = i,
            { target: _ } = e;
          if (!_) return [];
          let {
            id: O,
            objectId: m,
            selector: b,
            selectorGuids: A,
            appliesTo: S,
            useEventTarget: R,
          } = ey(_);
          if (m) return [eu.has(m) ? eu.get(m) : eu.set(m, {}).get(m)];
          if (S === o.EventAppliesTo.PAGE) {
            let e = d(O);
            return e ? [e] : [];
          }
          let N = (t?.action?.config?.affectedElements ?? {})[O || b] || {},
            L = !!(N.id || N.selector),
            h = t && s(ey(t.target));
          if (
            (L
              ? ((r = N.limitAffectedElements), (c = h), (u = s(N)))
              : (c = u = s({ id: O, selector: b, selectorGuids: A })),
            t && R)
          ) {
            let e = n && (u || !0 === R) ? [n] : E(h);
            if (u) {
              if (R === U) return E(u).filter((t) => e.some((e) => y(t, e)));
              if (R === F) return E(u).filter((t) => e.some((e) => y(e, t)));
              if (R === G) return E(u).filter((t) => e.some((e) => T(e, t)));
            }
            return e;
          }
          if (null == c || null == u) return [];
          if (f.IS_BROWSER_ENV && a) return E(u).filter((e) => a.contains(e));
          if (r === F) return E(c, u);
          if (r === v) return p(E(c)).filter(g(u));
          if (r === G) return I(E(c)).filter(g(u));
          else return E(u);
        }
        function e_({ element: e, actionItem: t }) {
          if (!f.IS_BROWSER_ENV) return {};
          let { actionTypeId: n } = t;
          switch (n) {
            case J:
            case ee:
            case et:
            case en:
            case ea:
              return window.getComputedStyle(e);
            default:
              return {};
          }
        }
        let eO = /px/,
          em = (e, t) =>
            t.reduce(
              (e, t) => (null == e[t.type] && (e[t.type] = eF[t.type]), e),
              e || {}
            ),
          eb = (e, t) =>
            t.reduce(
              (e, t) => (
                null == e[t.type] &&
                  (e[t.type] = ev[t.type] || t.defaultValue || 0),
                e
              ),
              e || {}
            );
        function eA(e, t = {}, n = {}, i, r) {
          let { getStyle: c } = r,
            { actionTypeId: o } = i;
          if ((0, s.isPluginType)(o)) return (0, s.getPluginOrigin)(o)(t[o], i);
          switch (i.actionTypeId) {
            case z:
            case H:
            case Q:
            case $:
              return t[i.actionTypeId] || eM[i.actionTypeId];
            case q:
              return em(t[i.actionTypeId], i.config.filters);
            case Z:
              return eb(t[i.actionTypeId], i.config.fontVariations);
            case K:
              return { value: (0, a.default)(parseFloat(c(e, S)), 1) };
            case J: {
              let t, r;
              let o = c(e, L),
                u = c(e, h);
              return (
                (t =
                  i.config.widthUnit === w
                    ? eO.test(o)
                      ? parseFloat(o)
                      : parseFloat(n.width)
                    : (0, a.default)(parseFloat(o), parseFloat(n.width))),
                {
                  widthValue: t,
                  heightValue: (r =
                    i.config.heightUnit === w
                      ? eO.test(u)
                        ? parseFloat(u)
                        : parseFloat(n.height)
                      : (0, a.default)(parseFloat(u), parseFloat(n.height))),
                }
              );
            }
            case ee:
            case et:
            case en:
              return (function ({
                element: e,
                actionTypeId: t,
                computedStyle: n,
                getStyle: i,
              }) {
                let r = ec[t],
                  c = i(e, r),
                  o = (function (e, t) {
                    let n = e.exec(t);
                    return n ? n[1] : "";
                  })(eD, eV.test(c) ? c : n[r]).split(X);
                return {
                  rValue: (0, a.default)(parseInt(o[0], 10), 255),
                  gValue: (0, a.default)(parseInt(o[1], 10), 255),
                  bValue: (0, a.default)(parseInt(o[2], 10), 255),
                  aValue: (0, a.default)(parseFloat(o[3]), 1),
                };
              })({
                element: e,
                actionTypeId: i.actionTypeId,
                computedStyle: n,
                getStyle: c,
              });
            case ea:
              return { value: (0, a.default)(c(e, V), n.display) };
            case ei:
              return t[i.actionTypeId] || { value: 0 };
            default:
              return;
          }
        }
        let eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
          eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
          eN = (e, t, n) => {
            if ((0, s.isPluginType)(e)) return (0, s.getPluginConfig)(e)(n, t);
            switch (e) {
              case q: {
                let e = (0, r.default)(n.filters, ({ type: e }) => e === t);
                return e ? e.value : 0;
              }
              case Z: {
                let e = (0, r.default)(
                  n.fontVariations,
                  ({ type: e }) => e === t
                );
                return e ? e.value : 0;
              }
              default:
                return n[t];
            }
          };
        function eL({ element: e, actionItem: t, elementApi: n }) {
          if ((0, s.isPluginType)(t.actionTypeId))
            return (0, s.getPluginDestination)(t.actionTypeId)(t.config);
          switch (t.actionTypeId) {
            case z:
            case H:
            case Q:
            case $: {
              let { xValue: e, yValue: n, zValue: a } = t.config;
              return { xValue: e, yValue: n, zValue: a };
            }
            case J: {
              let { getStyle: a, setStyle: i, getProperty: r } = n,
                { widthUnit: c, heightUnit: o } = t.config,
                { widthValue: u, heightValue: l } = t.config;
              if (!f.IS_BROWSER_ENV) return { widthValue: u, heightValue: l };
              if (c === w) {
                let t = a(e, L);
                i(e, L, ""), (u = r(e, "offsetWidth")), i(e, L, t);
              }
              if (o === w) {
                let t = a(e, h);
                i(e, h, ""), (l = r(e, "offsetHeight")), i(e, h, t);
              }
              return { widthValue: u, heightValue: l };
            }
            case ee:
            case et:
            case en: {
              let {
                rValue: a,
                gValue: i,
                bValue: r,
                aValue: c,
                globalSwatchId: o,
              } = t.config;
              if (o && o.startsWith("--")) {
                let { getStyle: t } = n,
                  a = t(e, o),
                  i = (0, d.normalizeColor)(a);
                return {
                  rValue: i.red,
                  gValue: i.green,
                  bValue: i.blue,
                  aValue: i.alpha,
                };
              }
              return { rValue: a, gValue: i, bValue: r, aValue: c };
            }
            case q:
              return t.config.filters.reduce(eS, {});
            case Z:
              return t.config.fontVariations.reduce(eR, {});
            default: {
              let { value: e } = t.config;
              return { value: e };
            }
          }
        }
        function eh(e) {
          return /^TRANSFORM_/.test(e)
            ? B
            : /^STYLE_/.test(e)
            ? W
            : /^GENERAL_/.test(e)
            ? j
            : /^PLUGIN_/.test(e)
            ? Y
            : void 0;
        }
        function eC(e, t) {
          return e === W ? t.replace("STYLE_", "").toLowerCase() : null;
        }
        function eP(e, t, n, a, r, c, o, u, l) {
          switch (u) {
            case B:
              return (function (e, t, n, a, i) {
                let r = eU
                    .map((e) => {
                      let n = eM[e],
                        {
                          xValue: a = n.xValue,
                          yValue: i = n.yValue,
                          zValue: r = n.zValue,
                          xUnit: c = "",
                          yUnit: o = "",
                          zUnit: u = "",
                        } = t[e] || {};
                      switch (e) {
                        case z:
                          return `${g}(${a}${c}, ${i}${o}, ${r}${u})`;
                        case H:
                          return `${y}(${a}${c}, ${i}${o}, ${r}${u})`;
                        case Q:
                          return `${T}(${a}${c}) ${_}(${i}${o}) ${O}(${r}${u})`;
                        case $:
                          return `${m}(${a}${c}, ${i}${o})`;
                        default:
                          return "";
                      }
                    })
                    .join(" "),
                  { setStyle: c } = i;
                ew(e, f.TRANSFORM_PREFIXED, i),
                  c(e, f.TRANSFORM_PREFIXED, r),
                  (function (
                    { actionTypeId: e },
                    { xValue: t, yValue: n, zValue: a }
                  ) {
                    return (
                      (e === z && void 0 !== a) ||
                      (e === H && void 0 !== a) ||
                      (e === Q && (void 0 !== t || void 0 !== n))
                    );
                  })(a, n) && c(e, f.TRANSFORM_STYLE_PREFIXED, b);
              })(e, t, n, r, o);
            case W:
              return (function (e, t, n, a, r, c) {
                let { setStyle: o } = c;
                switch (a.actionTypeId) {
                  case J: {
                    let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                      { widthValue: r, heightValue: u } = n;
                    void 0 !== r &&
                      (t === w && (t = "px"), ew(e, L, c), o(e, L, r + t)),
                      void 0 !== u &&
                        (i === w && (i = "px"), ew(e, h, c), o(e, h, u + i));
                    break;
                  }
                  case q:
                    !(function (e, t, n, a) {
                      let r = (0, i.default)(
                          t,
                          (e, t, a) => `${e} ${a}(${t}${eG(a, n)})`,
                          ""
                        ),
                        { setStyle: c } = a;
                      ew(e, R, a), c(e, R, r);
                    })(e, n, a.config, c);
                    break;
                  case Z:
                    !(function (e, t, n, a) {
                      let r = (0, i.default)(
                          t,
                          (e, t, n) => (e.push(`"${n}" ${t}`), e),
                          []
                        ).join(", "),
                        { setStyle: c } = a;
                      ew(e, N, a), c(e, N, r);
                    })(e, n, a.config, c);
                    break;
                  case ee:
                  case et:
                  case en: {
                    let t = ec[a.actionTypeId],
                      i = Math.round(n.rValue),
                      r = Math.round(n.gValue),
                      u = Math.round(n.bValue),
                      l = n.aValue;
                    ew(e, t, c),
                      o(
                        e,
                        t,
                        l >= 1
                          ? `rgb(${i},${r},${u})`
                          : `rgba(${i},${r},${u},${l})`
                      );
                    break;
                  }
                  default: {
                    let { unit: t = "" } = a.config;
                    ew(e, r, c), o(e, r, n.value + t);
                  }
                }
              })(e, t, n, r, c, o);
            case j:
              return (function (e, t, n) {
                let { setStyle: a } = n;
                if (t.actionTypeId === ea) {
                  let { value: n } = t.config;
                  a(e, V, n === A && f.IS_BROWSER_ENV ? f.FLEX_PREFIXED : n);
                  return;
                }
              })(e, r, o);
            case Y: {
              let { actionTypeId: e } = r;
              if ((0, s.isPluginType)(e))
                return (0, s.renderPlugin)(e)(l, t, r);
            }
          }
        }
        let eM = {
            [z]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [H]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
            [Q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
            [$]: Object.freeze({ xValue: 0, yValue: 0 }),
          },
          eF = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100,
          }),
          ev = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
          eG = (e, t) => {
            let n = (0, r.default)(t.filters, ({ type: t }) => t === e);
            if (n && n.unit) return n.unit;
            switch (e) {
              case "blur":
                return "px";
              case "hue-rotate":
                return "deg";
              default:
                return "%";
            }
          },
          eU = Object.keys(eM),
          eV = /^rgb/,
          eD = RegExp("rgba?\\(([^)]+)\\)");
        function ew(e, t, n) {
          if (!f.IS_BROWSER_ENV) return;
          let a = eo[t];
          if (!a) return;
          let { getStyle: i, setStyle: r } = n,
            c = i(e, D);
          if (!c) {
            r(e, D, a);
            return;
          }
          let o = c.split(X).map(er);
          -1 === o.indexOf(a) && r(e, D, o.concat(a).join(X));
        }
        function eX(e, t, n) {
          if (!f.IS_BROWSER_ENV) return;
          let a = eo[t];
          if (!a) return;
          let { getStyle: i, setStyle: r } = n,
            c = i(e, D);
          if (!!c && -1 !== c.indexOf(a))
            r(
              e,
              D,
              c
                .split(X)
                .map(er)
                .filter((e) => e !== a)
                .join(X)
            );
        }
        function ek({ store: e, elementApi: t }) {
          let { ixData: n } = e.getState(),
            { events: a = {}, actionLists: i = {} } = n;
          Object.keys(a).forEach((e) => {
            let n = a[e],
              { config: r } = n.action,
              { actionListId: c } = r,
              o = i[c];
            o && ex({ actionList: o, event: n, elementApi: t });
          }),
            Object.keys(i).forEach((e) => {
              ex({ actionList: i[e], elementApi: t });
            });
        }
        function ex({ actionList: e = {}, event: t, elementApi: n }) {
          let { actionItemGroups: a, continuousParameterGroups: i } = e;
          a &&
            a.forEach((e) => {
              eB({ actionGroup: e, event: t, elementApi: n });
            }),
            i &&
              i.forEach((e) => {
                let { continuousActionGroups: a } = e;
                a.forEach((e) => {
                  eB({ actionGroup: e, event: t, elementApi: n });
                });
              });
        }
        function eB({ actionGroup: e, event: t, elementApi: n }) {
          let { actionItems: a } = e;
          a.forEach((e) => {
            let a;
            let { actionTypeId: i, config: r } = e;
            (a = (0, s.isPluginType)(i)
              ? (t) => (0, s.clearPlugin)(i)(t, e)
              : eW({ effect: eY, actionTypeId: i, elementApi: n })),
              eT({ config: r, event: t, elementApi: n }).forEach(a);
          });
        }
        function ej(e, t, n) {
          let { setStyle: a, getStyle: i } = n,
            { actionTypeId: r } = t;
          if (r === J) {
            let { config: n } = t;
            n.widthUnit === w && a(e, L, ""), n.heightUnit === w && a(e, h, "");
          }
          i(e, D) && eW({ effect: eX, actionTypeId: r, elementApi: n })(e);
        }
        let eW =
          ({ effect: e, actionTypeId: t, elementApi: n }) =>
          (a) => {
            switch (t) {
              case z:
              case H:
              case Q:
              case $:
                e(a, f.TRANSFORM_PREFIXED, n);
                break;
              case q:
                e(a, R, n);
                break;
              case Z:
                e(a, N, n);
                break;
              case K:
                e(a, S, n);
                break;
              case J:
                e(a, L, n), e(a, h, n);
                break;
              case ee:
              case et:
              case en:
                e(a, ec[t], n);
                break;
              case ea:
                e(a, V, n);
            }
          };
        function eY(e, t, n) {
          let { setStyle: a } = n;
          eX(e, t, n),
            a(e, t, ""),
            t === f.TRANSFORM_PREFIXED && a(e, f.TRANSFORM_STYLE_PREFIXED, "");
        }
        function ez(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e, a) => {
              let { config: i } = e,
                r = i.delay + i.duration;
              r >= t && ((t = r), (n = a));
            }),
            n
          );
        }
        function eH(e, t) {
          let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
            { actionItem: i, verboseTimeElapsed: r = 0 } = t,
            c = 0,
            o = 0;
          return (
            n.forEach((e, t) => {
              if (a && 0 === t) return;
              let { actionItems: n } = e,
                u = n[ez(n)],
                { config: l, actionTypeId: d } = u;
              i.id === u.id && (o = c + r);
              let s = eh(d) === j ? 0 : l.duration;
              c += l.delay + s;
            }),
            c > 0 ? (0, l.optimizeFloat)(o / c) : 0
          );
        }
        function eQ({ actionList: e, actionItemId: t, rawData: n }) {
          let { actionItemGroups: a, continuousParameterGroups: i } = e,
            r = [],
            o = (e) => (
              r.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
              e.id === t
            );
          return (
            a && a.some(({ actionItems: e }) => e.some(o)),
            i &&
              i.some((e) => {
                let { continuousActionGroups: t } = e;
                return t.some(({ actionItems: e }) => e.some(o));
              }),
            (0, c.setIn)(n, ["actionLists"], {
              [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
            })
          );
        }
        function e$(e, { basedOn: t }) {
          return (
            (e === o.EventTypeConsts.SCROLLING_IN_VIEW &&
              (t === o.EventBasedOn.ELEMENT || null == t)) ||
            (e === o.EventTypeConsts.MOUSE_MOVE && t === o.EventBasedOn.ELEMENT)
          );
        }
        function eK(e, t) {
          return e + k + t;
        }
        function eq(e, t) {
          return null == t || -1 !== e.indexOf(t);
        }
        function eZ(e, t) {
          return (0, u.default)(e && e.sort(), t && t.sort());
        }
        function eJ(e) {
          if ("string" == typeof e) return e;
          if (e.pluginElement && e.objectId)
            return e.pluginElement + x + e.objectId;
          if (e.objectId) return e.objectId;
          let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
          return t + x + n + x + a;
        }
      },
      7164: function (e, t) {
        "use strict";
        function n(e, t) {
          return e === t
            ? 0 !== e || 0 !== t || 1 / e == 1 / t
            : e != e && t != t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return a;
            },
          });
        let a = function (e, t) {
          if (n(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          let a = Object.keys(e),
            i = Object.keys(t);
          if (a.length !== i.length) return !1;
          for (let i = 0; i < a.length; i++)
            if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
          return !0;
        };
      },
      5861: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          createElementState: function () {
            return m;
          },
          ixElements: function () {
            return O;
          },
          mergeActionState: function () {
            return b;
          },
        });
        let a = n(1185),
          i = n(7087),
          {
            HTML_ELEMENT: r,
            PLAIN_OBJECT: c,
            ABSTRACT_NODE: o,
            CONFIG_X_VALUE: u,
            CONFIG_Y_VALUE: l,
            CONFIG_Z_VALUE: d,
            CONFIG_VALUE: s,
            CONFIG_X_UNIT: f,
            CONFIG_Y_UNIT: E,
            CONFIG_Z_UNIT: p,
            CONFIG_UNIT: I,
          } = i.IX2EngineConstants,
          {
            IX2_SESSION_STOPPED: g,
            IX2_INSTANCE_ADDED: y,
            IX2_ELEMENT_STATE_CHANGED: T,
          } = i.IX2EngineActionTypes,
          _ = {},
          O = (e = _, t = {}) => {
            switch (t.type) {
              case g:
                return _;
              case y: {
                let {
                    elementId: n,
                    element: i,
                    origin: r,
                    actionItem: c,
                    refType: o,
                  } = t.payload,
                  { actionTypeId: u } = c,
                  l = e;
                return (
                  (0, a.getIn)(l, [n, i]) !== i && (l = m(l, i, o, n, c)),
                  b(l, n, u, r, c)
                );
              }
              case T: {
                let {
                  elementId: n,
                  actionTypeId: a,
                  current: i,
                  actionItem: r,
                } = t.payload;
                return b(e, n, a, i, r);
              }
              default:
                return e;
            }
          };
        function m(e, t, n, i, r) {
          let o =
            n === c ? (0, a.getIn)(r, ["config", "target", "objectId"]) : null;
          return (0, a.mergeIn)(e, [i], {
            id: i,
            ref: t,
            refId: o,
            refType: n,
          });
        }
        function b(e, t, n, i, r) {
          let c = (function (e) {
            let { config: t } = e;
            return A.reduce((e, n) => {
              let a = n[0],
                i = n[1],
                r = t[a],
                c = t[i];
              return null != r && null != c && (e[i] = c), e;
            }, {});
          })(r);
          return (0, a.mergeIn)(e, [t, "refState", n], i, c);
        }
        let A = [
          [u, f],
          [l, E],
          [d, p],
          [s, I],
        ];
      },
      2298: function () {
        Webflow.require("ix2").init({
          events: {
            e: {
              id: "e",
              name: "",
              animationType: "preset",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-2",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|52d6ca61-21fd-9edc-7034-960e4b8324be",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|52d6ca61-21fd-9edc-7034-960e4b8324be",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x187315f02f5,
            },
            "e-7": {
              id: "e-7",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-4",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|d76db748-5fdb-323a-1f3d-c3e8f96b0b43",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|d76db748-5fdb-323a-1f3d-c3e8f96b0b43",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-4-p",
                  smoothing: 90,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x184bdc06d6a,
            },
            "e-8": {
              id: "e-8",
              name: "",
              animationType: "preset",
              eventTypeId: "NAVBAR_OPEN",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-5",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-9",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|6a80fdae-3f5f-ac8f-ec1e-a36603712a71",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|6a80fdae-3f5f-ac8f-ec1e-a36603712a71",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x182f3af6059,
            },
            "e-9": {
              id: "e-9",
              name: "",
              animationType: "preset",
              eventTypeId: "NAVBAR_CLOSE",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-6",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-8",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|6a80fdae-3f5f-ac8f-ec1e-a36603712a71",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|6a80fdae-3f5f-ac8f-ec1e-a36603712a71",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x182f3af6059,
            },
            "e-14": {
              id: "e-14",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-11",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-15",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc717",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc717",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x190495c0791,
            },
            "e-15": {
              id: "e-15",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_OUT_OF_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-12",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-14",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc717",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc717",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x190495c0792,
            },
            "e-16": {
              id: "e-16",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-13",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-17",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc719",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc719",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19049641227,
            },
            "e-17": {
              id: "e-17",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_OUT_OF_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-14",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-16",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc719",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc719",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x19049641228,
            },
            "e-18": {
              id: "e-18",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-15",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-19",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc71b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc71b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x190496beae3,
            },
            "e-19": {
              id: "e-19",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_OUT_OF_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-16",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-18",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc71b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc71b",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x190496beae4,
            },
            "e-20": {
              id: "e-20",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-17",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-21",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc71d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc71d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x190496d6131,
            },
            "e-21": {
              id: "e-21",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_OUT_OF_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-18",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-20",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc71d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|f5413a28-f996-1003-f50d-bc5325cbc71d",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x190496d6131,
            },
            "e-22": {
              id: "e-22",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-19",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|fc7d95fa-e5ff-50a9-136f-4590e98f812f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|fc7d95fa-e5ff-50a9-136f-4590e98f812f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-19-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x18dcc4f9c89,
            },
            "e-23": {
              id: "e-23",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-20",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["small", "tiny"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|fc7d95fa-e5ff-50a9-136f-4590e98f812f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|fc7d95fa-e5ff-50a9-136f-4590e98f812f",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-20-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x18de9b0f845,
            },
            "e-24": {
              id: "e-24",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-22",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|a35bd774-b79e-d4d7-976b-46057c20cb4c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|a35bd774-b79e-d4d7-976b-46057c20cb4c",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-22-p",
                  smoothing: 80,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x184d243cfa6,
            },
            "e-25": {
              id: "e-25",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-22",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["medium", "small", "tiny"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|a35bd774-b79e-d4d7-976b-46057c20cb4c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|a35bd774-b79e-d4d7-976b-46057c20cb4c",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-22-p",
                  smoothing: 80,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x1906e917d47,
            },
            "e-26": {
              id: "e-26",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLLING_IN_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                  actionListId: "a-23",
                  affectedElements: {},
                  duration: 0,
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|1422300a-9111-1335-4139-11fcc429f7b5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|1422300a-9111-1335-4139-11fcc429f7b5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: [
                {
                  continuousParameterGroupId: "a-23-p",
                  smoothing: 50,
                  startsEntering: !0,
                  addStartOffset: !1,
                  addOffsetValue: 50,
                  startsExiting: !1,
                  addEndOffset: !1,
                  endOffsetValue: 50,
                },
              ],
              createdOn: 0x184d243cfa6,
            },
            "e-35": {
              id: "e-35",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-26",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-36",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|d3345d84-732f-4fe1-6732-3f4a1d13c8e5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|d3345d84-732f-4fe1-6732-3f4a1d13c8e5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18082863606,
            },
            "e-37": {
              id: "e-37",
              name: "",
              animationType: "custom",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-27",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-38",
                },
              },
              mediaQueries: ["small", "tiny"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|d3345d84-732f-4fe1-6732-3f4a1d13c8e5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|d3345d84-732f-4fe1-6732-3f4a1d13c8e5",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !0,
                playInReverse: !1,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x18082912c1f,
            },
            "e-39": {
              id: "e-39",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-28",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-40",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "668224675062db0f0d98b5fd|ae69fb6d-a07a-db67-03ce-63821e4f0d04",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "668224675062db0f0d98b5fd|ae69fb6d-a07a-db67-03ce-63821e4f0d04",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x1906d8d060c,
            },
            "e-41": {
              id: "e-41",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-42",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "668224675062db0f0d98b5fd|22550a07-60bc-8148-115d-e1396a667b60",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "668224675062db0f0d98b5fd|22550a07-60bc-8148-115d-e1396a667b60",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ed33c20ca,
            },
            "e-43": {
              id: "e-43",
              name: "",
              animationType: "custom",
              eventTypeId: "MOUSE_CLICK",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-29",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-44",
                },
              },
              mediaQueries: ["main", "medium", "small", "tiny"],
              target: {
                id: "668224675062db0f0d98b5fd|22550a07-60bc-8148-115d-e1396a667b7c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "668224675062db0f0d98b5fd|22550a07-60bc-8148-115d-e1396a667b7c",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x17ed33b7d9f,
            },
            "e-45": {
              id: "e-45",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_INTO_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-30",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-46",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|fd95d5e8-fe03-ea64-735c-e460c55aca73",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|fd95d5e8-fe03-ea64-735c-e460c55aca73",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x195d999e59c,
            },
            "e-46": {
              id: "e-46",
              name: "",
              animationType: "preset",
              eventTypeId: "SCROLL_OUT_OF_VIEW",
              action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                  delay: 0,
                  easing: "",
                  duration: 0,
                  actionListId: "a-31",
                  affectedElements: {},
                  playInReverse: !1,
                  autoStopEventId: "e-45",
                },
              },
              mediaQueries: ["main", "medium"],
              target: {
                id: "67de3fe6c6d38ae7d386c080|fd95d5e8-fe03-ea64-735c-e460c55aca73",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
              targets: [
                {
                  id: "67de3fe6c6d38ae7d386c080|fd95d5e8-fe03-ea64-735c-e460c55aca73",
                  appliesTo: "ELEMENT",
                  styleBlockIds: [],
                },
              ],
              config: {
                loop: !1,
                playInReverse: !1,
                scrollOffsetValue: 50,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
              },
              createdOn: 0x195d999e59c,
            },
          },
          actionLists: {
            a: {
              id: "a",
              title: "Loader 5 [Hide]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-n",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "PARENT",
                          selector: ".loader5_component",
                          selectorGuids: [
                            "c308379f-a9ea-edec-048a-310a4ade5697",
                          ],
                        },
                        value: "flex",
                      },
                    },
                    {
                      id: "a-n-2",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "PARENT",
                          selector: ".loader5_component",
                          selectorGuids: [
                            "c308379f-a9ea-edec-048a-310a4ade5697",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".loader5_progress",
                          selectorGuids: [
                            "c308379f-a9ea-edec-048a-310a4ade5699",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".loader5_progress-content",
                          selectorGuids: [
                            "c308379f-a9ea-edec-048a-310a4ade569b",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-n-5",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutExpo",
                        duration: 600,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".loader5_progress-content",
                          selectorGuids: [
                            "c308379f-a9ea-edec-048a-310a4ade569b",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-n-6",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutExpo",
                        duration: 600,
                        target: {
                          useEventTarget: "SIBLINGS",
                          selector: ".loader5_progress",
                          selectorGuids: [
                            "c308379f-a9ea-edec-048a-310a4ade5699",
                          ],
                        },
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-n-7",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 200,
                        easing: "ease",
                        duration: 600,
                        target: {
                          useEventTarget: "PARENT",
                          selector: ".loader5_component",
                          selectorGuids: [
                            "c308379f-a9ea-edec-048a-310a4ade5697",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-n-8",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 1e3,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "PARENT",
                          selector: ".loader5_component",
                          selectorGuids: [
                            "c308379f-a9ea-edec-048a-310a4ade5697",
                          ],
                        },
                        value: "none",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x1872c7a2d7e,
            },
            "a-4": {
              id: "a-4",
              title: "Header 81 [Scroll]",
              continuousParameterGroups: [
                {
                  id: "a-4-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-4-n",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".header81_content-right",
                              selectorGuids: [
                                "cdc5e79d-d76e-b7ba-e14c-fdf1eb3759d4",
                              ],
                            },
                            widthValue: 50,
                            widthUnit: "%",
                            heightUnit: "PX",
                            locked: !1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 60,
                      actionItems: [
                        {
                          id: "a-4-n-2",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".header81_content-right",
                              selectorGuids: [
                                "cdc5e79d-d76e-b7ba-e14c-fdf1eb3759d4",
                              ],
                            },
                            widthValue: 100,
                            widthUnit: "%",
                            heightUnit: "PX",
                            locked: !1,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x184bdc0cd60,
            },
            "a-5": {
              id: "a-5",
              title: "Navbar 13 menu [Open]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-5-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-top",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1496",
                          ],
                        },
                        yValue: 8,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-5-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-bottom",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1499",
                          ],
                        },
                        yValue: -8,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-5-n-3",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-bottom",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1499",
                          ],
                        },
                        zValue: -45,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-5-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-top",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1496",
                          ],
                        },
                        zValue: 45,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-5-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-middle",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1497",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17aa29a5e06,
            },
            "a-6": {
              id: "a-6",
              title: "Navbar 13 menu [Close]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-6-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-top",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1496",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-6-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-bottom",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1499",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "px",
                        zUnit: "PX",
                      },
                    },
                    {
                      id: "a-6-n-3",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-bottom",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1499",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-6-n-4",
                      actionTypeId: "TRANSFORM_ROTATE",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-top",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1496",
                          ],
                        },
                        zValue: 0,
                        xUnit: "DEG",
                        yUnit: "DEG",
                        zUnit: "deg",
                      },
                    },
                    {
                      id: "a-6-n-5",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "inOutQuint",
                        duration: 400,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".menu-icon2_line-middle",
                          selectorGuids: [
                            "69ba6e69-71a4-3081-0bb0-b26e1cab1497",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17aa2a71292,
            },
            "a-11": {
              id: "a-11",
              title: "Layout 514 Item 1 [Fade In]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-11-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-1",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-11-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-1",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1c",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-11-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-1",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1c",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-11-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-1",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1c",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19049244d23,
            },
            "a-12": {
              id: "a-12",
              title: "Layout 514 Item 1 [Fade Out]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-12-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-1",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1c",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-12-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-1",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1c",
                          ],
                        },
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-12-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".layout514_item.item-1",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1c",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19049244d23,
            },
            "a-13": {
              id: "a-13",
              title: "Layout 514 Item 2 [Fade In]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-13-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-2",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1d",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-13-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-2",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1d",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-13-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-2",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1d",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-13-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-2",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1d",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19049244d23,
            },
            "a-14": {
              id: "a-14",
              title: "Layout 514 Item 2 [Fade Out]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-14-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-2",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1d",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-14-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-2",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1d",
                          ],
                        },
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-14-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".layout514_item.item-2",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1d",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19049244d23,
            },
            "a-15": {
              id: "a-15",
              title: "Layout 514 Item 3 [Fade In]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-15-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-3",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1e",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-3",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1e",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-15-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-3",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1e",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-15-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-3",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1e",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19049244d23,
            },
            "a-16": {
              id: "a-16",
              title: "Layout 514 Item 3 [Fade Out]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-16-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-3",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1e",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-16-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-3",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1e",
                          ],
                        },
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-16-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".layout514_item.item-3",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1e",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19049244d23,
            },
            "a-17": {
              id: "a-17",
              title: "Layout 514 Item 4 [Fade In]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-17-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-4",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1f",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-4",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1f",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-17-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-4",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1f",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-17-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-4",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1f",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19049244d23,
            },
            "a-18": {
              id: "a-18",
              title: "Layout 514 Item 4 [Fade Out]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-18-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-4",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1f",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-18-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-4",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1f",
                          ],
                        },
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-18-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".layout514_item.item-4",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "ada1dac8-4886-57c1-0c54-cadcc8799c1f",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19049244d23,
            },
            "a-19": {
              id: "a-19",
              title: "Layout 488 Image [Scroll] [Desktop]",
              continuousParameterGroups: [
                {
                  id: "a-19-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-19-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_image-wrapper",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc81",
                              ],
                            },
                            xValue: 0.2,
                            yValue: 0.2,
                            locked: !0,
                          },
                        },
                        {
                          id: "a-19-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_heading.heading-1",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc80",
                                "cb19bce1-6294-1e33-3c43-4c25f49abc85",
                              ],
                            },
                            xValue: 10,
                            xUnit: "rem",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-19-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_heading.heading-2",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc80",
                                "cb19bce1-6294-1e33-3c43-4c25f49abc86",
                              ],
                            },
                            xValue: -10,
                            xUnit: "rem",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 10,
                      actionItems: [
                        {
                          id: "a-19-n-4",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_circle",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc83",
                              ],
                            },
                            widthValue: 10,
                            heightValue: 10,
                            widthUnit: "vw",
                            heightUnit: "vw",
                            locked: !1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 13,
                      actionItems: [
                        {
                          id: "a-19-n-10",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_content",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc7f",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 255,
                            bValue: 255,
                            gValue: 255,
                            aValue: 1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 15,
                      actionItems: [
                        {
                          id: "a-19-n-5",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_heading.heading-2",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc80",
                                "cb19bce1-6294-1e33-3c43-4c25f49abc86",
                              ],
                            },
                            xValue: 0,
                            xUnit: "rem",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-19-n-6",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_heading.heading-1",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc80",
                                "cb19bce1-6294-1e33-3c43-4c25f49abc85",
                              ],
                            },
                            xValue: 0,
                            xUnit: "rem",
                            yUnit: "PX",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-19-n-7",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_image-wrapper",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc81",
                              ],
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 34,
                      actionItems: [
                        {
                          id: "a-19-n-9",
                          actionTypeId: "STYLE_TEXT_COLOR",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_content",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc7f",
                              ],
                            },
                            globalSwatchId: "",
                            rValue: 23,
                            bValue: 85,
                            gValue: 19,
                            aValue: 1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 70,
                      actionItems: [
                        {
                          id: "a-19-n-8",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_circle",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc83",
                              ],
                            },
                            widthValue: 200,
                            heightValue: 200,
                            widthUnit: "vw",
                            heightUnit: "vw",
                            locked: !1,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x18dcc4fac8e,
            },
            "a-20": {
              id: "a-20",
              title: "Layout 488 Image [Scroll] [Mobile]",
              continuousParameterGroups: [
                {
                  id: "a-20-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 0,
                      actionItems: [
                        {
                          id: "a-20-n",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_image-wrapper",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc81",
                              ],
                            },
                            xValue: 0.7,
                            yValue: 0.7,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 10,
                      actionItems: [
                        {
                          id: "a-20-n-2",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_circle",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc83",
                              ],
                            },
                            widthValue: 10,
                            heightValue: 10,
                            widthUnit: "vw",
                            heightUnit: "vw",
                            locked: !1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 15,
                      actionItems: [
                        {
                          id: "a-20-n-3",
                          actionTypeId: "TRANSFORM_SCALE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_image-wrapper",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc81",
                              ],
                            },
                            xValue: 1,
                            yValue: 1,
                            locked: !0,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 46,
                      actionItems: [
                        {
                          id: "a-20-n-4",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout488_circle",
                              selectorGuids: [
                                "cb19bce1-6294-1e33-3c43-4c25f49abc83",
                              ],
                            },
                            widthValue: 440,
                            heightValue: 440,
                            widthUnit: "vw",
                            heightUnit: "vw",
                            locked: !1,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x18dcc4fac8e,
            },
            "a-22": {
              id: "a-22",
              title: "Layout 517 [Scroll] [Tablet]",
              continuousParameterGroups: [
                {
                  id: "a-22-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 2,
                      actionItems: [
                        {
                          id: "a-22-n",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout517_image-wrapper",
                              selectorGuids: [
                                "0c3d5a84-e46b-ba29-4509-11a579298e5c",
                              ],
                            },
                            widthValue: 95,
                            heightValue: 95,
                            widthUnit: "%",
                            heightUnit: "%",
                            locked: !1,
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 24,
                      actionItems: [
                        {
                          id: "a-22-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout517_content-bottom",
                              selectorGuids: [
                                "0c3d5a84-e46b-ba29-4509-11a579298e5e",
                              ],
                            },
                            yValue: 100,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 48,
                      actionItems: [
                        {
                          id: "a-22-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout517_content-bottom",
                              selectorGuids: [
                                "0c3d5a84-e46b-ba29-4509-11a579298e5e",
                              ],
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-22-n-4",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".layout517_image-wrapper",
                              selectorGuids: [
                                "0c3d5a84-e46b-ba29-4509-11a579298e5c",
                              ],
                            },
                            widthValue: 100,
                            heightValue: 100,
                            widthUnit: "%",
                            heightUnit: "%",
                            locked: !1,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x181137d1dc1,
            },
            "a-23": {
              id: "a-23",
              title: "Header 139 [Scroll]",
              continuousParameterGroups: [
                {
                  id: "a-23-p",
                  type: "SCROLL_PROGRESS",
                  parameterLabel: "Scroll",
                  continuousActionGroups: [
                    {
                      keyframe: 10,
                      actionItems: [
                        {
                          id: "a-23-n",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".header139_card",
                              selectorGuids: [
                                "05200de3-feed-539f-47d0-33d14a2f7cf7",
                              ],
                            },
                            widthValue: 90,
                            heightValue: 90,
                            widthUnit: "%",
                            heightUnit: "vh",
                            locked: !1,
                          },
                        },
                        {
                          id: "a-23-n-2",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".header139_card",
                              selectorGuids: [
                                "05200de3-feed-539f-47d0-33d14a2f7cf7",
                              ],
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 20,
                      actionItems: [
                        {
                          id: "a-23-n-3",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".header139_lightbox",
                              selectorGuids: [
                                "05200de3-feed-539f-47d0-33d14a2f7cfa",
                              ],
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 30,
                      actionItems: [
                        {
                          id: "a-23-n-4",
                          actionTypeId: "STYLE_SIZE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".header139_card",
                              selectorGuids: [
                                "05200de3-feed-539f-47d0-33d14a2f7cf7",
                              ],
                            },
                            widthValue: 100,
                            heightValue: 100,
                            widthUnit: "%",
                            heightUnit: "vh",
                            locked: !1,
                          },
                        },
                        {
                          id: "a-23-n-5",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              useEventTarget: "SIBLINGS",
                              selector: ".header139_card",
                              selectorGuids: [
                                "05200de3-feed-539f-47d0-33d14a2f7cf7",
                              ],
                            },
                            yValue: -5,
                            xUnit: "PX",
                            yUnit: "vh",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 35,
                      actionItems: [
                        {
                          id: "a-23-n-6",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".header139_background-image",
                              selectorGuids: [
                                "05200de3-feed-539f-47d0-33d14a2f7cf9",
                              ],
                            },
                            yValue: 0,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                        {
                          id: "a-23-n-7",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".header139_lightbox",
                              selectorGuids: [
                                "05200de3-feed-539f-47d0-33d14a2f7cfa",
                              ],
                            },
                            yValue: 200,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                    {
                      keyframe: 100,
                      actionItems: [
                        {
                          id: "a-23-n-8",
                          actionTypeId: "TRANSFORM_MOVE",
                          config: {
                            delay: 0,
                            easing: "",
                            duration: 500,
                            target: {
                              selector: ".header139_background-image",
                              selectorGuids: [
                                "05200de3-feed-539f-47d0-33d14a2f7cf9",
                              ],
                            },
                            yValue: 70,
                            xUnit: "PX",
                            yUnit: "%",
                            zUnit: "PX",
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
              createdOn: 0x181137d1dc1,
            },
            "a-26": {
              id: "a-26",
              title: "Banner 11 marquee [Loop] [Desktop]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-26-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 25e3,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".banner11_marquee",
                          selectorGuids: [
                            "cd7e81af-5b45-5d1b-9010-8c94b9fce7ee",
                          ],
                        },
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-26-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".banner11_marquee",
                          selectorGuids: [
                            "cd7e81af-5b45-5d1b-9010-8c94b9fce7ee",
                          ],
                        },
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x1808286626c,
            },
            "a-27": {
              id: "a-27",
              title: "Banner 11 marquee [Loop] [Mobile]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-27-n",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 1e4,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".banner11_marquee",
                          selectorGuids: [
                            "cd7e81af-5b45-5d1b-9010-8c94b9fce7ee",
                          ],
                        },
                        xValue: -100,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-27-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          useEventTarget: "CHILDREN",
                          selector: ".banner11_marquee",
                          selectorGuids: [
                            "cd7e81af-5b45-5d1b-9010-8c94b9fce7ee",
                          ],
                        },
                        xValue: 0,
                        xUnit: "%",
                        yUnit: "PX",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x1808286626c,
            },
            "a-28": {
              id: "a-28",
              title: "Links 14 Modal [Open]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-28-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 200,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-28-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "none",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-28-n-3",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "flex",
                      },
                    },
                    {
                      id: "a-28-n-4",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 200,
                        target: {},
                        value: 1,
                        unit: "",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x17ed3336a36,
            },
            "a-29": {
              id: "a-29",
              title: "Links 14 Modal [Close]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-29-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 200,
                        target: {},
                        value: 0,
                        unit: "",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-29-n-2",
                      actionTypeId: "GENERAL_DISPLAY",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {},
                        value: "none",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x17ed3336a36,
            },
            "a-30": {
              id: "a-30",
              title: "Layout 514 Item 5 [Fade In]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-30-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-5",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "0eb5bc6f-bbb5-f7b3-4a08-609bb5ea2260",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-30-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-5",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "0eb5bc6f-bbb5-f7b3-4a08-609bb5ea2260",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-30-n-3",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-5",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "0eb5bc6f-bbb5-f7b3-4a08-609bb5ea2260",
                          ],
                        },
                        value: 1,
                        unit: "",
                      },
                    },
                    {
                      id: "a-30-n-4",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-5",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "0eb5bc6f-bbb5-f7b3-4a08-609bb5ea2260",
                          ],
                        },
                        yValue: 0,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !0,
              createdOn: 0x19049244d23,
            },
            "a-31": {
              id: "a-31",
              title: "Layout 514 Item 5 [Fade Out]",
              actionItemGroups: [
                {
                  actionItems: [
                    {
                      id: "a-31-n",
                      actionTypeId: "STYLE_OPACITY",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-5",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "0eb5bc6f-bbb5-f7b3-4a08-609bb5ea2260",
                          ],
                        },
                        value: 0,
                        unit: "",
                      },
                    },
                    {
                      id: "a-31-n-2",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "ease",
                        duration: 500,
                        target: {
                          selector: ".layout514_item.item-5",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "0eb5bc6f-bbb5-f7b3-4a08-609bb5ea2260",
                          ],
                        },
                        yValue: -100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
                {
                  actionItems: [
                    {
                      id: "a-31-n-3",
                      actionTypeId: "TRANSFORM_MOVE",
                      config: {
                        delay: 0,
                        easing: "",
                        duration: 0,
                        target: {
                          selector: ".layout514_item.item-5",
                          selectorGuids: [
                            "ada1dac8-4886-57c1-0c54-cadcc8799c18",
                            "0eb5bc6f-bbb5-f7b3-4a08-609bb5ea2260",
                          ],
                        },
                        yValue: 100,
                        xUnit: "PX",
                        yUnit: "%",
                        zUnit: "PX",
                      },
                    },
                  ],
                },
              ],
              useFirstGroupAsInitialState: !1,
              createdOn: 0x19049244d23,
            },
          },
          site: {
            mediaQueries: [
              { key: "main", min: 992, max: 1e4 },
              { key: "medium", min: 768, max: 991 },
              { key: "small", min: 480, max: 767 },
              { key: "tiny", min: 0, max: 479 },
            ],
          },
        });
      },
      6508: function (e, t, n) {
        n(9461),
          n(7624),
          n(286),
          n(8334),
          n(2338),
          n(3695),
          n(322),
          n(941),
          n(5134),
          n(1655),
          n(9904),
          n(1724),
          n(2458),
          n(2298);
      },
    },
    t = {};
  function n(a) {
    var i = t[a];
    if (void 0 !== i) return i.exports;
    var r = (t[a] = { id: a, loaded: !1, exports: {} });
    return e[a](r, r.exports, n), (r.loaded = !0), r.exports;
  }
  (n.m = e),
    (n.d = function (e, t) {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.hmd = function (e) {
      return (
        !(e = Object.create(e)).children && (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      );
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.nmd = function (e) {
      return (e.paths = []), !e.children && (e.children = []), e;
    }),
    (() => {
      var e = [];
      n.O = function (t, a, i, r) {
        if (a) {
          r = r || 0;
          for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
          e[c] = [a, i, r];
          return;
        }
        for (var o = 1 / 0, c = 0; c < e.length; c++) {
          for (
            var a = e[c][0], i = e[c][1], r = e[c][2], u = !0, l = 0;
            l < a.length;
            l++
          )
            (!1 & r || o >= r) &&
            Object.keys(n.O).every(function (e) {
              return n.O[e](a[l]);
            })
              ? a.splice(l--, 1)
              : ((u = !1), r < o && (o = r));
          if (u) {
            e.splice(c--, 1);
            var d = i();
            void 0 !== d && (t = d);
          }
        }
        return t;
      };
    })(),
    (n.rv = function () {
      return "1.1.8";
    }),
    (() => {
      var e = { 938: 0 };
      n.O.j = function (t) {
        return 0 === e[t];
      };
      var t = function (t, a) {
          var i = a[0],
            r = a[1],
            c = a[2],
            o,
            u,
            l = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in r) n.o(r, o) && (n.m[o] = r[o]);
            if (c) var d = c(n);
          }
          for (t && t(a); l < i.length; l++)
            (u = i[l]), n.o(e, u) && e[u] && e[u][0](), (e[u] = 0);
          return n.O(d);
        },
        a = (self.webpackChunk = self.webpackChunk || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })(),
    (n.ruid = "bundler=rspack@1.1.8");
  var a = n.O(void 0, ["87", "985", "117"], function () {
    return n("6508");
  });
  a = n.O(a);
})();
