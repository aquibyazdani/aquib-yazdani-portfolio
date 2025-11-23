(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const f of a.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && s(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(l) {
    const a = {};
    return (
      l.integrity && (a.integrity = l.integrity),
      l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const a = i(l);
    fetch(l.href, a);
  }
})();
var tf = { exports: {} },
  Zl = {},
  nf = { exports: {} },
  be = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xh;
function a2() {
  if (Xh) return be;
  Xh = 1;
  var p = Symbol.for("react.element"),
    n = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    l = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    f = Symbol.for("react.context"),
    c = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function C(j) {
    return j === null || typeof j != "object"
      ? null
      : ((j = (k && j[k]) || j["@@iterator"]),
        typeof j == "function" ? j : null);
  }
  var _ = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    y = {};
  function M(j, F, pe) {
    (this.props = j),
      (this.context = F),
      (this.refs = y),
      (this.updater = pe || _);
  }
  (M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (j, F) {
      if (typeof j != "object" && typeof j != "function" && j != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, j, F, "setState");
    }),
    (M.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, "forceUpdate");
    });
  function I() {}
  I.prototype = M.prototype;
  function L(j, F, pe) {
    (this.props = j),
      (this.context = F),
      (this.refs = y),
      (this.updater = pe || _);
  }
  var B = (L.prototype = new I());
  (B.constructor = L), T(B, M.prototype), (B.isPureReactComponent = !0);
  var z = Array.isArray,
    A = Object.prototype.hasOwnProperty,
    U = { current: null },
    O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Y(j, F, pe) {
    var se,
      me = {},
      xe = null,
      ye = null;
    if (F != null)
      for (se in (F.ref !== void 0 && (ye = F.ref),
      F.key !== void 0 && (xe = "" + F.key),
      F))
        A.call(F, se) && !O.hasOwnProperty(se) && (me[se] = F[se]);
    var Se = arguments.length - 2;
    if (Se === 1) me.children = pe;
    else if (1 < Se) {
      for (var Ne = Array(Se), ft = 0; ft < Se; ft++)
        Ne[ft] = arguments[ft + 2];
      me.children = Ne;
    }
    if (j && j.defaultProps)
      for (se in ((Se = j.defaultProps), Se))
        me[se] === void 0 && (me[se] = Se[se]);
    return {
      $$typeof: p,
      type: j,
      key: xe,
      ref: ye,
      props: me,
      _owner: U.current,
    };
  }
  function $(j, F) {
    return {
      $$typeof: p,
      type: j.type,
      key: F,
      ref: j.ref,
      props: j.props,
      _owner: j._owner,
    };
  }
  function X(j) {
    return typeof j == "object" && j !== null && j.$$typeof === p;
  }
  function fe(j) {
    var F = { "=": "=0", ":": "=2" };
    return (
      "$" +
      j.replace(/[=:]/g, function (pe) {
        return F[pe];
      })
    );
  }
  var Z = /\/+/g;
  function he(j, F) {
    return typeof j == "object" && j !== null && j.key != null
      ? fe("" + j.key)
      : F.toString(36);
  }
  function ge(j, F, pe, se, me) {
    var xe = typeof j;
    (xe === "undefined" || xe === "boolean") && (j = null);
    var ye = !1;
    if (j === null) ye = !0;
    else
      switch (xe) {
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case p:
            case n:
              ye = !0;
          }
      }
    if (ye)
      return (
        (ye = j),
        (me = me(ye)),
        (j = se === "" ? "." + he(ye, 0) : se),
        z(me)
          ? ((pe = ""),
            j != null && (pe = j.replace(Z, "$&/") + "/"),
            ge(me, F, pe, "", function (ft) {
              return ft;
            }))
          : me != null &&
            (X(me) &&
              (me = $(
                me,
                pe +
                  (!me.key || (ye && ye.key === me.key)
                    ? ""
                    : ("" + me.key).replace(Z, "$&/") + "/") +
                  j
              )),
            F.push(me)),
        1
      );
    if (((ye = 0), (se = se === "" ? "." : se + ":"), z(j)))
      for (var Se = 0; Se < j.length; Se++) {
        xe = j[Se];
        var Ne = se + he(xe, Se);
        ye += ge(xe, F, pe, Ne, me);
      }
    else if (((Ne = C(j)), typeof Ne == "function"))
      for (j = Ne.call(j), Se = 0; !(xe = j.next()).done; )
        (xe = xe.value),
          (Ne = se + he(xe, Se++)),
          (ye += ge(xe, F, pe, Ne, me));
    else if (xe === "object")
      throw (
        ((F = String(j)),
        Error(
          "Objects are not valid as a React child (found: " +
            (F === "[object Object]"
              ? "object with keys {" + Object.keys(j).join(", ") + "}"
              : F) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ye;
  }
  function Ce(j, F, pe) {
    if (j == null) return j;
    var se = [],
      me = 0;
    return (
      ge(j, se, "", "", function (xe) {
        return F.call(pe, xe, me++);
      }),
      se
    );
  }
  function de(j) {
    if (j._status === -1) {
      var F = j._result;
      (F = F()),
        F.then(
          function (pe) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 1), (j._result = pe));
          },
          function (pe) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 2), (j._result = pe));
          }
        ),
        j._status === -1 && ((j._status = 0), (j._result = F));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var ee = { current: null },
    V = { transition: null },
    K = {
      ReactCurrentDispatcher: ee,
      ReactCurrentBatchConfig: V,
      ReactCurrentOwner: U,
    };
  function S() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (be.Children = {
      map: Ce,
      forEach: function (j, F, pe) {
        Ce(
          j,
          function () {
            F.apply(this, arguments);
          },
          pe
        );
      },
      count: function (j) {
        var F = 0;
        return (
          Ce(j, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (j) {
        return (
          Ce(j, function (F) {
            return F;
          }) || []
        );
      },
      only: function (j) {
        if (!X(j))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return j;
      },
    }),
    (be.Component = M),
    (be.Fragment = i),
    (be.Profiler = l),
    (be.PureComponent = L),
    (be.StrictMode = s),
    (be.Suspense = m),
    (be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = K),
    (be.act = S),
    (be.cloneElement = function (j, F, pe) {
      if (j == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            j +
            "."
        );
      var se = T({}, j.props),
        me = j.key,
        xe = j.ref,
        ye = j._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((xe = F.ref), (ye = U.current)),
          F.key !== void 0 && (me = "" + F.key),
          j.type && j.type.defaultProps)
        )
          var Se = j.type.defaultProps;
        for (Ne in F)
          A.call(F, Ne) &&
            !O.hasOwnProperty(Ne) &&
            (se[Ne] = F[Ne] === void 0 && Se !== void 0 ? Se[Ne] : F[Ne]);
      }
      var Ne = arguments.length - 2;
      if (Ne === 1) se.children = pe;
      else if (1 < Ne) {
        Se = Array(Ne);
        for (var ft = 0; ft < Ne; ft++) Se[ft] = arguments[ft + 2];
        se.children = Se;
      }
      return {
        $$typeof: p,
        type: j.type,
        key: me,
        ref: xe,
        props: se,
        _owner: ye,
      };
    }),
    (be.createContext = function (j) {
      return (
        (j = {
          $$typeof: f,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (j.Provider = { $$typeof: a, _context: j }),
        (j.Consumer = j)
      );
    }),
    (be.createElement = Y),
    (be.createFactory = function (j) {
      var F = Y.bind(null, j);
      return (F.type = j), F;
    }),
    (be.createRef = function () {
      return { current: null };
    }),
    (be.forwardRef = function (j) {
      return { $$typeof: c, render: j };
    }),
    (be.isValidElement = X),
    (be.lazy = function (j) {
      return { $$typeof: v, _payload: { _status: -1, _result: j }, _init: de };
    }),
    (be.memo = function (j, F) {
      return { $$typeof: g, type: j, compare: F === void 0 ? null : F };
    }),
    (be.startTransition = function (j) {
      var F = V.transition;
      V.transition = {};
      try {
        j();
      } finally {
        V.transition = F;
      }
    }),
    (be.unstable_act = S),
    (be.useCallback = function (j, F) {
      return ee.current.useCallback(j, F);
    }),
    (be.useContext = function (j) {
      return ee.current.useContext(j);
    }),
    (be.useDebugValue = function () {}),
    (be.useDeferredValue = function (j) {
      return ee.current.useDeferredValue(j);
    }),
    (be.useEffect = function (j, F) {
      return ee.current.useEffect(j, F);
    }),
    (be.useId = function () {
      return ee.current.useId();
    }),
    (be.useImperativeHandle = function (j, F, pe) {
      return ee.current.useImperativeHandle(j, F, pe);
    }),
    (be.useInsertionEffect = function (j, F) {
      return ee.current.useInsertionEffect(j, F);
    }),
    (be.useLayoutEffect = function (j, F) {
      return ee.current.useLayoutEffect(j, F);
    }),
    (be.useMemo = function (j, F) {
      return ee.current.useMemo(j, F);
    }),
    (be.useReducer = function (j, F, pe) {
      return ee.current.useReducer(j, F, pe);
    }),
    (be.useRef = function (j) {
      return ee.current.useRef(j);
    }),
    (be.useState = function (j) {
      return ee.current.useState(j);
    }),
    (be.useSyncExternalStore = function (j, F, pe) {
      return ee.current.useSyncExternalStore(j, F, pe);
    }),
    (be.useTransition = function () {
      return ee.current.useTransition();
    }),
    (be.version = "18.3.1"),
    be
  );
}
var Gh;
function Zf() {
  return Gh || ((Gh = 1), (nf.exports = a2())), nf.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qh;
function u2() {
  if (Qh) return Zl;
  Qh = 1;
  var p = Zf(),
    n = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    l = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, m, g) {
    var v,
      k = {},
      C = null,
      _ = null;
    g !== void 0 && (C = "" + g),
      m.key !== void 0 && (C = "" + m.key),
      m.ref !== void 0 && (_ = m.ref);
    for (v in m) s.call(m, v) && !a.hasOwnProperty(v) && (k[v] = m[v]);
    if (c && c.defaultProps)
      for (v in ((m = c.defaultProps), m)) k[v] === void 0 && (k[v] = m[v]);
    return {
      $$typeof: n,
      type: c,
      key: C,
      ref: _,
      props: k,
      _owner: l.current,
    };
  }
  return (Zl.Fragment = i), (Zl.jsx = f), (Zl.jsxs = f), Zl;
}
var Zh;
function c2() {
  return Zh || ((Zh = 1), (tf.exports = u2())), tf.exports;
}
var h = c2(),
  za = {},
  rf = { exports: {} },
  bn = {},
  sf = { exports: {} },
  lf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qh;
function f2() {
  return (
    qh ||
      ((qh = 1),
      (function (p) {
        function n(V, K) {
          var S = V.length;
          V.push(K);
          e: for (; 0 < S; ) {
            var j = (S - 1) >>> 1,
              F = V[j];
            if (0 < l(F, K)) (V[j] = K), (V[S] = F), (S = j);
            else break e;
          }
        }
        function i(V) {
          return V.length === 0 ? null : V[0];
        }
        function s(V) {
          if (V.length === 0) return null;
          var K = V[0],
            S = V.pop();
          if (S !== K) {
            V[0] = S;
            e: for (var j = 0, F = V.length, pe = F >>> 1; j < pe; ) {
              var se = 2 * (j + 1) - 1,
                me = V[se],
                xe = se + 1,
                ye = V[xe];
              if (0 > l(me, S))
                xe < F && 0 > l(ye, me)
                  ? ((V[j] = ye), (V[xe] = S), (j = xe))
                  : ((V[j] = me), (V[se] = S), (j = se));
              else if (xe < F && 0 > l(ye, S))
                (V[j] = ye), (V[xe] = S), (j = xe);
              else break e;
            }
          }
          return K;
        }
        function l(V, K) {
          var S = V.sortIndex - K.sortIndex;
          return S !== 0 ? S : V.id - K.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var a = performance;
          p.unstable_now = function () {
            return a.now();
          };
        } else {
          var f = Date,
            c = f.now();
          p.unstable_now = function () {
            return f.now() - c;
          };
        }
        var m = [],
          g = [],
          v = 1,
          k = null,
          C = 3,
          _ = !1,
          T = !1,
          y = !1,
          M = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          L = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function B(V) {
          for (var K = i(g); K !== null; ) {
            if (K.callback === null) s(g);
            else if (K.startTime <= V)
              s(g), (K.sortIndex = K.expirationTime), n(m, K);
            else break;
            K = i(g);
          }
        }
        function z(V) {
          if (((y = !1), B(V), !T))
            if (i(m) !== null) (T = !0), de(A);
            else {
              var K = i(g);
              K !== null && ee(z, K.startTime - V);
            }
        }
        function A(V, K) {
          (T = !1), y && ((y = !1), I(Y), (Y = -1)), (_ = !0);
          var S = C;
          try {
            for (
              B(K), k = i(m);
              k !== null && (!(k.expirationTime > K) || (V && !fe()));

            ) {
              var j = k.callback;
              if (typeof j == "function") {
                (k.callback = null), (C = k.priorityLevel);
                var F = j(k.expirationTime <= K);
                (K = p.unstable_now()),
                  typeof F == "function"
                    ? (k.callback = F)
                    : k === i(m) && s(m),
                  B(K);
              } else s(m);
              k = i(m);
            }
            if (k !== null) var pe = !0;
            else {
              var se = i(g);
              se !== null && ee(z, se.startTime - K), (pe = !1);
            }
            return pe;
          } finally {
            (k = null), (C = S), (_ = !1);
          }
        }
        var U = !1,
          O = null,
          Y = -1,
          $ = 5,
          X = -1;
        function fe() {
          return !(p.unstable_now() - X < $);
        }
        function Z() {
          if (O !== null) {
            var V = p.unstable_now();
            X = V;
            var K = !0;
            try {
              K = O(!0, V);
            } finally {
              K ? he() : ((U = !1), (O = null));
            }
          } else U = !1;
        }
        var he;
        if (typeof L == "function")
          he = function () {
            L(Z);
          };
        else if (typeof MessageChannel < "u") {
          var ge = new MessageChannel(),
            Ce = ge.port2;
          (ge.port1.onmessage = Z),
            (he = function () {
              Ce.postMessage(null);
            });
        } else
          he = function () {
            M(Z, 0);
          };
        function de(V) {
          (O = V), U || ((U = !0), he());
        }
        function ee(V, K) {
          Y = M(function () {
            V(p.unstable_now());
          }, K);
        }
        (p.unstable_IdlePriority = 5),
          (p.unstable_ImmediatePriority = 1),
          (p.unstable_LowPriority = 4),
          (p.unstable_NormalPriority = 3),
          (p.unstable_Profiling = null),
          (p.unstable_UserBlockingPriority = 2),
          (p.unstable_cancelCallback = function (V) {
            V.callback = null;
          }),
          (p.unstable_continueExecution = function () {
            T || _ || ((T = !0), de(A));
          }),
          (p.unstable_forceFrameRate = function (V) {
            0 > V || 125 < V
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : ($ = 0 < V ? Math.floor(1e3 / V) : 5);
          }),
          (p.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (p.unstable_getFirstCallbackNode = function () {
            return i(m);
          }),
          (p.unstable_next = function (V) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = C;
            }
            var S = C;
            C = K;
            try {
              return V();
            } finally {
              C = S;
            }
          }),
          (p.unstable_pauseExecution = function () {}),
          (p.unstable_requestPaint = function () {}),
          (p.unstable_runWithPriority = function (V, K) {
            switch (V) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                V = 3;
            }
            var S = C;
            C = V;
            try {
              return K();
            } finally {
              C = S;
            }
          }),
          (p.unstable_scheduleCallback = function (V, K, S) {
            var j = p.unstable_now();
            switch (
              (typeof S == "object" && S !== null
                ? ((S = S.delay),
                  (S = typeof S == "number" && 0 < S ? j + S : j))
                : (S = j),
              V)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = S + F),
              (V = {
                id: v++,
                callback: K,
                priorityLevel: V,
                startTime: S,
                expirationTime: F,
                sortIndex: -1,
              }),
              S > j
                ? ((V.sortIndex = S),
                  n(g, V),
                  i(m) === null &&
                    V === i(g) &&
                    (y ? (I(Y), (Y = -1)) : (y = !0), ee(z, S - j)))
                : ((V.sortIndex = F), n(m, V), T || _ || ((T = !0), de(A))),
              V
            );
          }),
          (p.unstable_shouldYield = fe),
          (p.unstable_wrapCallback = function (V) {
            var K = C;
            return function () {
              var S = C;
              C = K;
              try {
                return V.apply(this, arguments);
              } finally {
                C = S;
              }
            };
          });
      })(lf)),
    lf
  );
}
var Kh;
function d2() {
  return Kh || ((Kh = 1), (sf.exports = f2())), sf.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jh;
function p2() {
  if (Jh) return bn;
  Jh = 1;
  var p = Zf(),
    n = d2();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    l = {};
  function a(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var c = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    v = {},
    k = {};
  function C(e) {
    return m.call(k, e)
      ? !0
      : m.call(v, e)
      ? !1
      : g.test(e)
      ? (k[e] = !0)
      : ((v[e] = !0), !1);
  }
  function _(e, t, r, o) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, r, o) {
    if (t === null || typeof t > "u" || _(e, t, r, o)) return !0;
    if (o) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function y(e, t, r, o, u, d, x) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = o),
      (this.attributeNamespace = u),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = d),
      (this.removeEmptyString = x);
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      M[e] = new y(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      M[t] = new y(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      M[e] = new y(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      M[e] = new y(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        M[e] = new y(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      M[e] = new y(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      M[e] = new y(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      M[e] = new y(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      M[e] = new y(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function L(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, L);
      M[t] = new y(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, L);
        M[t] = new y(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, L);
      M[t] = new y(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      M[e] = new y(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (M.xlinkHref = new y(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      M[e] = new y(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function B(e, t, r, o) {
    var u = M.hasOwnProperty(t) ? M[t] : null;
    (u !== null
      ? u.type !== 0
      : o ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, r, u, o) && (r = null),
      o || u === null
        ? C(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : u.mustUseProperty
        ? (e[u.propertyName] = r === null ? (u.type === 3 ? !1 : "") : r)
        : ((t = u.attributeName),
          (o = u.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((u = u.type),
              (r = u === 3 || (u === 4 && r === !0) ? "" : "" + r),
              o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
  }
  var z = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    A = Symbol.for("react.element"),
    U = Symbol.for("react.portal"),
    O = Symbol.for("react.fragment"),
    Y = Symbol.for("react.strict_mode"),
    $ = Symbol.for("react.profiler"),
    X = Symbol.for("react.provider"),
    fe = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    ge = Symbol.for("react.suspense_list"),
    Ce = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    ee = Symbol.for("react.offscreen"),
    V = Symbol.iterator;
  function K(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (V && e[V]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var S = Object.assign,
    j;
  function F(e) {
    if (j === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        j = (t && t[1]) || "";
      }
    return (
      `
` +
      j +
      e
    );
  }
  var pe = !1;
  function se(e, t) {
    if (!e || pe) return "";
    pe = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (b) {
            var o = b;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (b) {
            o = b;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (b) {
          o = b;
        }
        e();
      }
    } catch (b) {
      if (b && o && typeof b.stack == "string") {
        for (
          var u = b.stack.split(`
`),
            d = o.stack.split(`
`),
            x = u.length - 1,
            w = d.length - 1;
          1 <= x && 0 <= w && u[x] !== d[w];

        )
          w--;
        for (; 1 <= x && 0 <= w; x--, w--)
          if (u[x] !== d[w]) {
            if (x !== 1 || w !== 1)
              do
                if ((x--, w--, 0 > w || u[x] !== d[w])) {
                  var N =
                    `
` + u[x].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= x && 0 <= w);
            break;
          }
      }
    } finally {
      (pe = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = se(e.type, !1)), e;
      case 11:
        return (e = se(e.type.render, !1)), e;
      case 1:
        return (e = se(e.type, !0)), e;
      default:
        return "";
    }
  }
  function xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case O:
        return "Fragment";
      case U:
        return "Portal";
      case $:
        return "Profiler";
      case Y:
        return "StrictMode";
      case he:
        return "Suspense";
      case ge:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case fe:
          return (e.displayName || "Context") + ".Consumer";
        case X:
          return (e._context.displayName || "Context") + ".Provider";
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ce:
          return (
            (t = e.displayName || null), t !== null ? t : xe(e.type) || "Memo"
          );
        case de:
          (t = e._payload), (e = e._init);
          try {
            return xe(e(t));
          } catch {}
      }
    return null;
  }
  function ye(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return xe(t);
      case 8:
        return t === Y ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Se(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ne(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ft(e) {
    var t = Ne(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      o = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var u = r.get,
        d = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (x) {
            (o = "" + x), d.call(this, x);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return o;
          },
          setValue: function (x) {
            o = "" + x;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function wt(e) {
    e._valueTracker || (e._valueTracker = ft(e));
  }
  function Vt(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      o = "";
    return (
      e && (o = Ne(e) ? (e.checked ? "true" : "false") : e.value),
      (e = o),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Pe(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function qe(e, t) {
    var r = t.checked;
    return S({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function Ht(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      o = t.checked != null ? t.checked : t.defaultChecked;
    (r = Se(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: o,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Qt(e, t) {
    (t = t.checked), t != null && B(e, "checked", t, !1);
  }
  function D(e, t) {
    Qt(e, t);
    var r = Se(t.value),
      o = t.type;
    if (r != null)
      o === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (o === "submit" || o === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Fn(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && Fn(e, t.type, Se(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Zt(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var o = t.type;
      if (
        !(
          (o !== "submit" && o !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function Fn(e, t, r) {
    (t !== "number" || Pe(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Cn = Array.isArray;
  function Ue(e, t, r, o) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < r.length; u++) t["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        (u = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && o && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Se(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          (e[u].selected = !0), o && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Bn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return S({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function _r(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(i(92));
        if (Cn(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Se(r) };
  }
  function br(e, t) {
    var r = Se(t.value),
      o = Se(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      o != null && (e.defaultValue = "" + o);
  }
  function mt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function yr(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ke(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? yr(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var qt,
    un = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, o, u) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, o, u);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          qt = qt || document.createElement("div"),
            qt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = qt.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function cn(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    dt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wr).forEach(function (e) {
    dt.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wr[t] = wr[e]);
    });
  });
  function Yi(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (wr.hasOwnProperty(e) && wr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function rr(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = r.indexOf("--") === 0,
          u = Yi(r, t[r], o);
        r === "float" && (r = "cssFloat"), o ? e.setProperty(r, u) : (e[r] = u);
      }
  }
  var fi = S(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function zr(e, t) {
    if (t) {
      if (fi[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function ir(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var kr = null;
  function je(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Cr = null,
    zt = null,
    Dt = null;
  function Sn(e) {
    if ((e = Ol(e))) {
      if (typeof Cr != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = Go(t)), Cr(e.stateNode, e.type, t));
    }
  }
  function Dr(e) {
    zt ? (Dt ? Dt.push(e) : (Dt = [e])) : (zt = e);
  }
  function Gr() {
    if (zt) {
      var e = zt,
        t = Dt;
      if (((Dt = zt = null), Sn(e), t)) for (e = 0; e < t.length; e++) Sn(t[e]);
    }
  }
  function sr(e, t) {
    return e(t);
  }
  function di() {}
  var ke = !1;
  function ae(e, t, r) {
    if (ke) return e(t, r);
    ke = !0;
    try {
      return sr(e, t, r);
    } finally {
      (ke = !1), (zt !== null || Dt !== null) && (di(), Gr());
    }
  }
  function Oe(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var o = Go(r);
    if (o === null) return null;
    r = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) ||
          ((e = e.type),
          (o = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !o);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(i(231, t, typeof r));
    return r;
  }
  var q = !1;
  if (c)
    try {
      var ve = {};
      Object.defineProperty(ve, "passive", {
        get: function () {
          q = !0;
        },
      }),
        window.addEventListener("test", ve, ve),
        window.removeEventListener("test", ve, ve);
    } catch {
      q = !1;
    }
  function oe(e, t, r, o, u, d, x, w, N) {
    var b = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, b);
    } catch (W) {
      this.onError(W);
    }
  }
  var _e = !1,
    lt = null,
    Ee = !1,
    Je = null,
    Ot = {
      onError: function (e) {
        (_e = !0), (lt = e);
      },
    };
  function rt(e, t, r, o, u, d, x, w, N) {
    (_e = !1), (lt = null), oe.apply(Ot, arguments);
  }
  function Ye(e, t, r, o, u, d, x, w, N) {
    if ((rt.apply(this, arguments), _e)) {
      if (_e) {
        var b = lt;
        (_e = !1), (lt = null);
      } else throw Error(i(198));
      Ee || ((Ee = !0), (Je = b));
    }
  }
  function Le(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Nn(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Xe(e) {
    if (Le(e) !== e) throw Error(i(188));
  }
  function fn(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Le(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var r = e, o = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (((o = u.return), o !== null)) {
          r = o;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === r) return Xe(u), e;
          if (d === o) return Xe(u), t;
          d = d.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== o.return) (r = u), (o = d);
      else {
        for (var x = !1, w = u.child; w; ) {
          if (w === r) {
            (x = !0), (r = u), (o = d);
            break;
          }
          if (w === o) {
            (x = !0), (o = u), (r = d);
            break;
          }
          w = w.sibling;
        }
        if (!x) {
          for (w = d.child; w; ) {
            if (w === r) {
              (x = !0), (r = d), (o = u);
              break;
            }
            if (w === o) {
              (x = !0), (o = d), (r = u);
              break;
            }
            w = w.sibling;
          }
          if (!x) throw Error(i(189));
        }
      }
      if (r.alternate !== o) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : t;
  }
  function Un(e) {
    return (e = fn(e)), e !== null ? kt(e) : null;
  }
  function kt(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = kt(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ct = n.unstable_scheduleCallback,
    Tt = n.unstable_cancelCallback,
    Qr = n.unstable_shouldYield,
    js = n.unstable_requestPaint,
    Re = n.unstable_now,
    gt = n.unstable_getCurrentPriorityLevel,
    jn = n.unstable_ImmediatePriority,
    Es = n.unstable_UserBlockingPriority,
    Xi = n.unstable_NormalPriority,
    Gi = n.unstable_LowPriority,
    $n = n.unstable_IdlePriority,
    Or = null,
    dn = null;
  function Lr(e) {
    if (dn && typeof dn.onCommitFiberRoot == "function")
      try {
        dn.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Sr = Math.clz32 ? Math.clz32 : jm,
    Sm = Math.log,
    Nm = Math.LN2;
  function jm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Sm(e) / Nm) | 0)) | 0;
  }
  var Po = 64,
    Ro = 4194304;
  function xl(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function bo(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var o = 0,
      u = e.suspendedLanes,
      d = e.pingedLanes,
      x = r & 268435455;
    if (x !== 0) {
      var w = x & ~u;
      w !== 0 ? (o = xl(w)) : ((d &= x), d !== 0 && (o = xl(d)));
    } else (x = r & ~u), x !== 0 ? (o = xl(x)) : d !== 0 && (o = xl(d));
    if (o === 0) return 0;
    if (
      t !== 0 &&
      t !== o &&
      (t & u) === 0 &&
      ((u = o & -o), (d = t & -t), u >= d || (u === 16 && (d & 4194240) !== 0))
    )
      return t;
    if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= o; 0 < t; )
        (r = 31 - Sr(t)), (u = 1 << r), (o |= e[r]), (t &= ~u);
    return o;
  }
  function Em(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Tm(e, t) {
    for (
      var r = e.suspendedLanes,
        o = e.pingedLanes,
        u = e.expirationTimes,
        d = e.pendingLanes;
      0 < d;

    ) {
      var x = 31 - Sr(d),
        w = 1 << x,
        N = u[x];
      N === -1
        ? ((w & r) === 0 || (w & o) !== 0) && (u[x] = Em(w, t))
        : N <= t && (e.expiredLanes |= w),
        (d &= ~w);
    }
  }
  function ku(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Sd() {
    var e = Po;
    return (Po <<= 1), (Po & 4194240) === 0 && (Po = 64), e;
  }
  function Cu(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function vl(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Sr(t)),
      (e[t] = r);
  }
  function Mm(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var o = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var u = 31 - Sr(r),
        d = 1 << u;
      (t[u] = 0), (o[u] = -1), (e[u] = -1), (r &= ~d);
    }
  }
  function Su(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var o = 31 - Sr(r),
        u = 1 << o;
      (u & t) | (e[o] & t) && (e[o] |= t), (r &= ~u);
    }
  }
  var $e = 0;
  function Nd(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var jd,
    Nu,
    Ed,
    Td,
    Md,
    ju = !1,
    zo = [],
    pi = null,
    hi = null,
    mi = null,
    _l = new Map(),
    yl = new Map(),
    gi = [],
    Pm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Pd(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pi = null;
        break;
      case "dragenter":
      case "dragleave":
        hi = null;
        break;
      case "mouseover":
      case "mouseout":
        mi = null;
        break;
      case "pointerover":
      case "pointerout":
        _l.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(t.pointerId);
    }
  }
  function wl(e, t, r, o, u, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [u],
        }),
        t !== null && ((t = Ol(t)), t !== null && Nu(t)),
        e)
      : ((e.eventSystemFlags |= o),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Rm(e, t, r, o, u) {
    switch (t) {
      case "focusin":
        return (pi = wl(pi, e, t, r, o, u)), !0;
      case "dragenter":
        return (hi = wl(hi, e, t, r, o, u)), !0;
      case "mouseover":
        return (mi = wl(mi, e, t, r, o, u)), !0;
      case "pointerover":
        var d = u.pointerId;
        return _l.set(d, wl(_l.get(d) || null, e, t, r, o, u)), !0;
      case "gotpointercapture":
        return (
          (d = u.pointerId), yl.set(d, wl(yl.get(d) || null, e, t, r, o, u)), !0
        );
    }
    return !1;
  }
  function Rd(e) {
    var t = Qi(e.target);
    if (t !== null) {
      var r = Le(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Nn(r)), t !== null)) {
            (e.blockedOn = t),
              Md(e.priority, function () {
                Ed(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Do(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Tu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var o = new r.constructor(r.type, r);
        (kr = o), r.target.dispatchEvent(o), (kr = null);
      } else return (t = Ol(r)), t !== null && Nu(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function bd(e, t, r) {
    Do(e) && r.delete(t);
  }
  function bm() {
    (ju = !1),
      pi !== null && Do(pi) && (pi = null),
      hi !== null && Do(hi) && (hi = null),
      mi !== null && Do(mi) && (mi = null),
      _l.forEach(bd),
      yl.forEach(bd);
  }
  function kl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ju ||
        ((ju = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, bm)));
  }
  function Cl(e) {
    function t(u) {
      return kl(u, e);
    }
    if (0 < zo.length) {
      kl(zo[0], e);
      for (var r = 1; r < zo.length; r++) {
        var o = zo[r];
        o.blockedOn === e && (o.blockedOn = null);
      }
    }
    for (
      pi !== null && kl(pi, e),
        hi !== null && kl(hi, e),
        mi !== null && kl(mi, e),
        _l.forEach(t),
        yl.forEach(t),
        r = 0;
      r < gi.length;
      r++
    )
      (o = gi[r]), o.blockedOn === e && (o.blockedOn = null);
    for (; 0 < gi.length && ((r = gi[0]), r.blockedOn === null); )
      Rd(r), r.blockedOn === null && gi.shift();
  }
  var Ts = z.ReactCurrentBatchConfig,
    Oo = !0;
  function zm(e, t, r, o) {
    var u = $e,
      d = Ts.transition;
    Ts.transition = null;
    try {
      ($e = 1), Eu(e, t, r, o);
    } finally {
      ($e = u), (Ts.transition = d);
    }
  }
  function Dm(e, t, r, o) {
    var u = $e,
      d = Ts.transition;
    Ts.transition = null;
    try {
      ($e = 4), Eu(e, t, r, o);
    } finally {
      ($e = u), (Ts.transition = d);
    }
  }
  function Eu(e, t, r, o) {
    if (Oo) {
      var u = Tu(e, t, r, o);
      if (u === null) Wu(e, t, o, Lo, r), Pd(e, o);
      else if (Rm(u, e, t, r, o)) o.stopPropagation();
      else if ((Pd(e, o), t & 4 && -1 < Pm.indexOf(e))) {
        for (; u !== null; ) {
          var d = Ol(u);
          if (
            (d !== null && jd(d),
            (d = Tu(e, t, r, o)),
            d === null && Wu(e, t, o, Lo, r),
            d === u)
          )
            break;
          u = d;
        }
        u !== null && o.stopPropagation();
      } else Wu(e, t, o, null, r);
    }
  }
  var Lo = null;
  function Tu(e, t, r, o) {
    if (((Lo = null), (e = je(o)), (e = Qi(e)), e !== null))
      if (((t = Le(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Nn(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Lo = e), null;
  }
  function zd(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (gt()) {
          case jn:
            return 1;
          case Es:
            return 4;
          case Xi:
          case Gi:
            return 16;
          case $n:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var xi = null,
    Mu = null,
    Ao = null;
  function Dd() {
    if (Ao) return Ao;
    var e,
      t = Mu,
      r = t.length,
      o,
      u = "value" in xi ? xi.value : xi.textContent,
      d = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++);
    var x = r - e;
    for (o = 1; o <= x && t[r - o] === u[d - o]; o++);
    return (Ao = u.slice(e, 1 < o ? 1 - o : void 0));
  }
  function Io(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fo() {
    return !0;
  }
  function Od() {
    return !1;
  }
  function Vn(e) {
    function t(r, o, u, d, x) {
      (this._reactName = r),
        (this._targetInst = u),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = x),
        (this.currentTarget = null);
      for (var w in e)
        e.hasOwnProperty(w) && ((r = e[w]), (this[w] = r ? r(d) : d[w]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Fo
          : Od),
        (this.isPropagationStopped = Od),
        this
      );
    }
    return (
      S(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = Fo));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = Fo));
        },
        persist: function () {},
        isPersistent: Fo,
      }),
      t
    );
  }
  var Ms = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Pu = Vn(Ms),
    Sl = S({}, Ms, { view: 0, detail: 0 }),
    Om = Vn(Sl),
    Ru,
    bu,
    Nl,
    Bo = S({}, Sl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Du,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Nl &&
              (Nl && e.type === "mousemove"
                ? ((Ru = e.screenX - Nl.screenX), (bu = e.screenY - Nl.screenY))
                : (bu = Ru = 0),
              (Nl = e)),
            Ru);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : bu;
      },
    }),
    Ld = Vn(Bo),
    Lm = S({}, Bo, { dataTransfer: 0 }),
    Am = Vn(Lm),
    Im = S({}, Sl, { relatedTarget: 0 }),
    zu = Vn(Im),
    Fm = S({}, Ms, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bm = Vn(Fm),
    Um = S({}, Ms, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    $m = Vn(Um),
    Vm = S({}, Ms, { data: 0 }),
    Ad = Vn(Vm),
    Hm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Wm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Ym = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Xm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ym[e])
      ? !!t[e]
      : !1;
  }
  function Du() {
    return Xm;
  }
  var Gm = S({}, Sl, {
      key: function (e) {
        if (e.key) {
          var t = Hm[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Io(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Wm[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Du,
      charCode: function (e) {
        return e.type === "keypress" ? Io(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Io(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Qm = Vn(Gm),
    Zm = S({}, Bo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Id = Vn(Zm),
    qm = S({}, Sl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Du,
    }),
    Km = Vn(qm),
    Jm = S({}, Ms, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    eg = Vn(Jm),
    tg = S({}, Bo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    ng = Vn(tg),
    rg = [9, 13, 27, 32],
    Ou = c && "CompositionEvent" in window,
    jl = null;
  c && "documentMode" in document && (jl = document.documentMode);
  var ig = c && "TextEvent" in window && !jl,
    Fd = c && (!Ou || (jl && 8 < jl && 11 >= jl)),
    Bd = " ",
    Ud = !1;
  function $d(e, t) {
    switch (e) {
      case "keyup":
        return rg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Vd(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ps = !1;
  function sg(e, t) {
    switch (e) {
      case "compositionend":
        return Vd(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ud = !0), Bd);
      case "textInput":
        return (e = t.data), e === Bd && Ud ? null : e;
      default:
        return null;
    }
  }
  function lg(e, t) {
    if (Ps)
      return e === "compositionend" || (!Ou && $d(e, t))
        ? ((e = Dd()), (Ao = Mu = xi = null), (Ps = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Fd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var og = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Hd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!og[e.type] : t === "textarea";
  }
  function Wd(e, t, r, o) {
    Dr(o),
      (t = Wo(t, "onChange")),
      0 < t.length &&
        ((r = new Pu("onChange", "change", null, r, o)),
        e.push({ event: r, listeners: t }));
  }
  var El = null,
    Tl = null;
  function ag(e) {
    up(e, 0);
  }
  function Uo(e) {
    var t = Os(e);
    if (Vt(t)) return e;
  }
  function ug(e, t) {
    if (e === "change") return t;
  }
  var Yd = !1;
  if (c) {
    var Lu;
    if (c) {
      var Au = "oninput" in document;
      if (!Au) {
        var Xd = document.createElement("div");
        Xd.setAttribute("oninput", "return;"),
          (Au = typeof Xd.oninput == "function");
      }
      Lu = Au;
    } else Lu = !1;
    Yd = Lu && (!document.documentMode || 9 < document.documentMode);
  }
  function Gd() {
    El && (El.detachEvent("onpropertychange", Qd), (Tl = El = null));
  }
  function Qd(e) {
    if (e.propertyName === "value" && Uo(Tl)) {
      var t = [];
      Wd(t, Tl, e, je(e)), ae(ag, t);
    }
  }
  function cg(e, t, r) {
    e === "focusin"
      ? (Gd(), (El = t), (Tl = r), El.attachEvent("onpropertychange", Qd))
      : e === "focusout" && Gd();
  }
  function fg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Uo(Tl);
  }
  function dg(e, t) {
    if (e === "click") return Uo(t);
  }
  function pg(e, t) {
    if (e === "input" || e === "change") return Uo(t);
  }
  function hg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Nr = typeof Object.is == "function" ? Object.is : hg;
  function Ml(e, t) {
    if (Nr(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      o = Object.keys(t);
    if (r.length !== o.length) return !1;
    for (o = 0; o < r.length; o++) {
      var u = r[o];
      if (!m.call(t, u) || !Nr(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Zd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qd(e, t) {
    var r = Zd(e);
    e = 0;
    for (var o; r; ) {
      if (r.nodeType === 3) {
        if (((o = e + r.textContent.length), e <= t && o >= t))
          return { node: r, offset: t - e };
        e = o;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Zd(r);
    }
  }
  function Kd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Kd(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Jd() {
    for (var e = window, t = Pe(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Pe(e.document);
    }
    return t;
  }
  function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function mg(e) {
    var t = Jd(),
      r = e.focusedElem,
      o = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Kd(r.ownerDocument.documentElement, r)
    ) {
      if (o !== null && Iu(r)) {
        if (
          ((t = o.start),
          (e = o.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = r.textContent.length,
            d = Math.min(o.start, u);
          (o = o.end === void 0 ? d : Math.min(o.end, u)),
            !e.extend && d > o && ((u = o), (o = d), (d = u)),
            (u = qd(r, d));
          var x = qd(r, o);
          u &&
            x &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== x.node ||
              e.focusOffset !== x.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            d > o
              ? (e.addRange(t), e.extend(x.node, x.offset))
              : (t.setEnd(x.node, x.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var gg = c && "documentMode" in document && 11 >= document.documentMode,
    Rs = null,
    Fu = null,
    Pl = null,
    Bu = !1;
  function ep(e, t, r) {
    var o =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Bu ||
      Rs == null ||
      Rs !== Pe(o) ||
      ((o = Rs),
      "selectionStart" in o && Iu(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (Pl && Ml(Pl, o)) ||
        ((Pl = o),
        (o = Wo(Fu, "onSelect")),
        0 < o.length &&
          ((t = new Pu("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: o }),
          (t.target = Rs))));
  }
  function $o(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var bs = {
      animationend: $o("Animation", "AnimationEnd"),
      animationiteration: $o("Animation", "AnimationIteration"),
      animationstart: $o("Animation", "AnimationStart"),
      transitionend: $o("Transition", "TransitionEnd"),
    },
    Uu = {},
    tp = {};
  c &&
    ((tp = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete bs.animationend.animation,
      delete bs.animationiteration.animation,
      delete bs.animationstart.animation),
    "TransitionEvent" in window || delete bs.transitionend.transition);
  function Vo(e) {
    if (Uu[e]) return Uu[e];
    if (!bs[e]) return e;
    var t = bs[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in tp) return (Uu[e] = t[r]);
    return e;
  }
  var np = Vo("animationend"),
    rp = Vo("animationiteration"),
    ip = Vo("animationstart"),
    sp = Vo("transitionend"),
    lp = new Map(),
    op =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function vi(e, t) {
    lp.set(e, t), a(t, [e]);
  }
  for (var $u = 0; $u < op.length; $u++) {
    var Vu = op[$u],
      xg = Vu.toLowerCase(),
      vg = Vu[0].toUpperCase() + Vu.slice(1);
    vi(xg, "on" + vg);
  }
  vi(np, "onAnimationEnd"),
    vi(rp, "onAnimationIteration"),
    vi(ip, "onAnimationStart"),
    vi("dblclick", "onDoubleClick"),
    vi("focusin", "onFocus"),
    vi("focusout", "onBlur"),
    vi(sp, "onTransitionEnd"),
    f("onMouseEnter", ["mouseout", "mouseover"]),
    f("onMouseLeave", ["mouseout", "mouseover"]),
    f("onPointerEnter", ["pointerout", "pointerover"]),
    f("onPointerLeave", ["pointerout", "pointerover"]),
    a(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    a(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    a(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    a(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    a(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Rl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    _g = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Rl)
    );
  function ap(e, t, r) {
    var o = e.type || "unknown-event";
    (e.currentTarget = r), Ye(o, t, void 0, e), (e.currentTarget = null);
  }
  function up(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var o = e[r],
        u = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var x = o.length - 1; 0 <= x; x--) {
            var w = o[x],
              N = w.instance,
              b = w.currentTarget;
            if (((w = w.listener), N !== d && u.isPropagationStopped()))
              break e;
            ap(u, w, b), (d = N);
          }
        else
          for (x = 0; x < o.length; x++) {
            if (
              ((w = o[x]),
              (N = w.instance),
              (b = w.currentTarget),
              (w = w.listener),
              N !== d && u.isPropagationStopped())
            )
              break e;
            ap(u, w, b), (d = N);
          }
      }
    }
    if (Ee) throw ((e = Je), (Ee = !1), (Je = null), e);
  }
  function et(e, t) {
    var r = t[qu];
    r === void 0 && (r = t[qu] = new Set());
    var o = e + "__bubble";
    r.has(o) || (cp(t, e, 2, !1), r.add(o));
  }
  function Hu(e, t, r) {
    var o = 0;
    t && (o |= 4), cp(r, e, o, t);
  }
  var Ho = "_reactListening" + Math.random().toString(36).slice(2);
  function bl(e) {
    if (!e[Ho]) {
      (e[Ho] = !0),
        s.forEach(function (r) {
          r !== "selectionchange" && (_g.has(r) || Hu(r, !1, e), Hu(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ho] || ((t[Ho] = !0), Hu("selectionchange", !1, t));
    }
  }
  function cp(e, t, r, o) {
    switch (zd(t)) {
      case 1:
        var u = zm;
        break;
      case 4:
        u = Dm;
        break;
      default:
        u = Eu;
    }
    (r = u.bind(null, t, r, e)),
      (u = void 0),
      !q ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      o
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
        ? e.addEventListener(t, r, { passive: u })
        : e.addEventListener(t, r, !1);
  }
  function Wu(e, t, r, o, u) {
    var d = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (;;) {
        if (o === null) return;
        var x = o.tag;
        if (x === 3 || x === 4) {
          var w = o.stateNode.containerInfo;
          if (w === u || (w.nodeType === 8 && w.parentNode === u)) break;
          if (x === 4)
            for (x = o.return; x !== null; ) {
              var N = x.tag;
              if (
                (N === 3 || N === 4) &&
                ((N = x.stateNode.containerInfo),
                N === u || (N.nodeType === 8 && N.parentNode === u))
              )
                return;
              x = x.return;
            }
          for (; w !== null; ) {
            if (((x = Qi(w)), x === null)) return;
            if (((N = x.tag), N === 5 || N === 6)) {
              o = d = x;
              continue e;
            }
            w = w.parentNode;
          }
        }
        o = o.return;
      }
    ae(function () {
      var b = d,
        W = je(r),
        G = [];
      e: {
        var H = lp.get(e);
        if (H !== void 0) {
          var J = Pu,
            re = e;
          switch (e) {
            case "keypress":
              if (Io(r) === 0) break e;
            case "keydown":
            case "keyup":
              J = Qm;
              break;
            case "focusin":
              (re = "focus"), (J = zu);
              break;
            case "focusout":
              (re = "blur"), (J = zu);
              break;
            case "beforeblur":
            case "afterblur":
              J = zu;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = Ld;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = Am;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = Km;
              break;
            case np:
            case rp:
            case ip:
              J = Bm;
              break;
            case sp:
              J = eg;
              break;
            case "scroll":
              J = Om;
              break;
            case "wheel":
              J = ng;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = $m;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = Id;
          }
          var ie = (t & 4) !== 0,
            xt = !ie && e === "scroll",
            P = ie ? (H !== null ? H + "Capture" : null) : H;
          ie = [];
          for (var E = b, R; E !== null; ) {
            R = E;
            var Q = R.stateNode;
            if (
              (R.tag === 5 &&
                Q !== null &&
                ((R = Q),
                P !== null &&
                  ((Q = Oe(E, P)), Q != null && ie.push(zl(E, Q, R)))),
              xt)
            )
              break;
            E = E.return;
          }
          0 < ie.length &&
            ((H = new J(H, re, null, r, W)),
            G.push({ event: H, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((H = e === "mouseover" || e === "pointerover"),
            (J = e === "mouseout" || e === "pointerout"),
            H &&
              r !== kr &&
              (re = r.relatedTarget || r.fromElement) &&
              (Qi(re) || re[Zr]))
          )
            break e;
          if (
            (J || H) &&
            ((H =
              W.window === W
                ? W
                : (H = W.ownerDocument)
                ? H.defaultView || H.parentWindow
                : window),
            J
              ? ((re = r.relatedTarget || r.toElement),
                (J = b),
                (re = re ? Qi(re) : null),
                re !== null &&
                  ((xt = Le(re)),
                  re !== xt || (re.tag !== 5 && re.tag !== 6)) &&
                  (re = null))
              : ((J = null), (re = b)),
            J !== re)
          ) {
            if (
              ((ie = Ld),
              (Q = "onMouseLeave"),
              (P = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ie = Id),
                (Q = "onPointerLeave"),
                (P = "onPointerEnter"),
                (E = "pointer")),
              (xt = J == null ? H : Os(J)),
              (R = re == null ? H : Os(re)),
              (H = new ie(Q, E + "leave", J, r, W)),
              (H.target = xt),
              (H.relatedTarget = R),
              (Q = null),
              Qi(W) === b &&
                ((ie = new ie(P, E + "enter", re, r, W)),
                (ie.target = R),
                (ie.relatedTarget = xt),
                (Q = ie)),
              (xt = Q),
              J && re)
            )
              t: {
                for (ie = J, P = re, E = 0, R = ie; R; R = zs(R)) E++;
                for (R = 0, Q = P; Q; Q = zs(Q)) R++;
                for (; 0 < E - R; ) (ie = zs(ie)), E--;
                for (; 0 < R - E; ) (P = zs(P)), R--;
                for (; E--; ) {
                  if (ie === P || (P !== null && ie === P.alternate)) break t;
                  (ie = zs(ie)), (P = zs(P));
                }
                ie = null;
              }
            else ie = null;
            J !== null && fp(G, H, J, ie, !1),
              re !== null && xt !== null && fp(G, xt, re, ie, !0);
          }
        }
        e: {
          if (
            ((H = b ? Os(b) : window),
            (J = H.nodeName && H.nodeName.toLowerCase()),
            J === "select" || (J === "input" && H.type === "file"))
          )
            var le = ug;
          else if (Hd(H))
            if (Yd) le = pg;
            else {
              le = fg;
              var ue = cg;
            }
          else
            (J = H.nodeName) &&
              J.toLowerCase() === "input" &&
              (H.type === "checkbox" || H.type === "radio") &&
              (le = dg);
          if (le && (le = le(e, b))) {
            Wd(G, le, r, W);
            break e;
          }
          ue && ue(e, H, b),
            e === "focusout" &&
              (ue = H._wrapperState) &&
              ue.controlled &&
              H.type === "number" &&
              Fn(H, "number", H.value);
        }
        switch (((ue = b ? Os(b) : window), e)) {
          case "focusin":
            (Hd(ue) || ue.contentEditable === "true") &&
              ((Rs = ue), (Fu = b), (Pl = null));
            break;
          case "focusout":
            Pl = Fu = Rs = null;
            break;
          case "mousedown":
            Bu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Bu = !1), ep(G, r, W);
            break;
          case "selectionchange":
            if (gg) break;
          case "keydown":
          case "keyup":
            ep(G, r, W);
        }
        var ce;
        if (Ou)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          Ps
            ? $d(e, r) && (we = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (we = "onCompositionStart");
        we &&
          (Fd &&
            r.locale !== "ko" &&
            (Ps || we !== "onCompositionStart"
              ? we === "onCompositionEnd" && Ps && (ce = Dd())
              : ((xi = W),
                (Mu = "value" in xi ? xi.value : xi.textContent),
                (Ps = !0))),
          (ue = Wo(b, we)),
          0 < ue.length &&
            ((we = new Ad(we, e, null, r, W)),
            G.push({ event: we, listeners: ue }),
            ce
              ? (we.data = ce)
              : ((ce = Vd(r)), ce !== null && (we.data = ce)))),
          (ce = ig ? sg(e, r) : lg(e, r)) &&
            ((b = Wo(b, "onBeforeInput")),
            0 < b.length &&
              ((W = new Ad("onBeforeInput", "beforeinput", null, r, W)),
              G.push({ event: W, listeners: b }),
              (W.data = ce)));
      }
      up(G, t);
    });
  }
  function zl(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function Wo(e, t) {
    for (var r = t + "Capture", o = []; e !== null; ) {
      var u = e,
        d = u.stateNode;
      u.tag === 5 &&
        d !== null &&
        ((u = d),
        (d = Oe(e, r)),
        d != null && o.unshift(zl(e, d, u)),
        (d = Oe(e, t)),
        d != null && o.push(zl(e, d, u))),
        (e = e.return);
    }
    return o;
  }
  function zs(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function fp(e, t, r, o, u) {
    for (var d = t._reactName, x = []; r !== null && r !== o; ) {
      var w = r,
        N = w.alternate,
        b = w.stateNode;
      if (N !== null && N === o) break;
      w.tag === 5 &&
        b !== null &&
        ((w = b),
        u
          ? ((N = Oe(r, d)), N != null && x.unshift(zl(r, N, w)))
          : u || ((N = Oe(r, d)), N != null && x.push(zl(r, N, w)))),
        (r = r.return);
    }
    x.length !== 0 && e.push({ event: t, listeners: x });
  }
  var yg = /\r\n?/g,
    wg = /\u0000|\uFFFD/g;
  function dp(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        yg,
        `
`
      )
      .replace(wg, "");
  }
  function Yo(e, t, r) {
    if (((t = dp(t)), dp(e) !== t && r)) throw Error(i(425));
  }
  function Xo() {}
  var Yu = null,
    Xu = null;
  function Gu(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Qu = typeof setTimeout == "function" ? setTimeout : void 0,
    kg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    pp = typeof Promise == "function" ? Promise : void 0,
    Cg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof pp < "u"
        ? function (e) {
            return pp.resolve(null).then(e).catch(Sg);
          }
        : Qu;
  function Sg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Zu(e, t) {
    var r = t,
      o = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === "/$")) {
          if (o === 0) {
            e.removeChild(u), Cl(t);
            return;
          }
          o--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
      r = u;
    } while (r);
    Cl(t);
  }
  function _i(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function hp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Ds = Math.random().toString(36).slice(2),
    Ar = "__reactFiber$" + Ds,
    Dl = "__reactProps$" + Ds,
    Zr = "__reactContainer$" + Ds,
    qu = "__reactEvents$" + Ds,
    Ng = "__reactListeners$" + Ds,
    jg = "__reactHandles$" + Ds;
  function Qi(e) {
    var t = e[Ar];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Zr] || r[Ar])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = hp(e); e !== null; ) {
            if ((r = e[Ar])) return r;
            e = hp(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Ol(e) {
    return (
      (e = e[Ar] || e[Zr]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Os(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Go(e) {
    return e[Dl] || null;
  }
  var Ku = [],
    Ls = -1;
  function yi(e) {
    return { current: e };
  }
  function tt(e) {
    0 > Ls || ((e.current = Ku[Ls]), (Ku[Ls] = null), Ls--);
  }
  function Ge(e, t) {
    Ls++, (Ku[Ls] = e.current), (e.current = t);
  }
  var wi = {},
    Kt = yi(wi),
    En = yi(!1),
    Zi = wi;
  function As(e, t) {
    var r = e.type.contextTypes;
    if (!r) return wi;
    var o = e.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
      return o.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      d;
    for (d in r) u[d] = t[d];
    return (
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function Tn(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Qo() {
    tt(En), tt(Kt);
  }
  function mp(e, t, r) {
    if (Kt.current !== wi) throw Error(i(168));
    Ge(Kt, t), Ge(En, r);
  }
  function gp(e, t, r) {
    var o = e.stateNode;
    if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
      return r;
    o = o.getChildContext();
    for (var u in o) if (!(u in t)) throw Error(i(108, ye(e) || "Unknown", u));
    return S({}, r, o);
  }
  function Zo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        wi),
      (Zi = Kt.current),
      Ge(Kt, e),
      Ge(En, En.current),
      !0
    );
  }
  function xp(e, t, r) {
    var o = e.stateNode;
    if (!o) throw Error(i(169));
    r
      ? ((e = gp(e, t, Zi)),
        (o.__reactInternalMemoizedMergedChildContext = e),
        tt(En),
        tt(Kt),
        Ge(Kt, e))
      : tt(En),
      Ge(En, r);
  }
  var qr = null,
    qo = !1,
    Ju = !1;
  function vp(e) {
    qr === null ? (qr = [e]) : qr.push(e);
  }
  function Eg(e) {
    (qo = !0), vp(e);
  }
  function ki() {
    if (!Ju && qr !== null) {
      Ju = !0;
      var e = 0,
        t = $e;
      try {
        var r = qr;
        for ($e = 1; e < r.length; e++) {
          var o = r[e];
          do o = o(!0);
          while (o !== null);
        }
        (qr = null), (qo = !1);
      } catch (u) {
        throw (qr !== null && (qr = qr.slice(e + 1)), Ct(jn, ki), u);
      } finally {
        ($e = t), (Ju = !1);
      }
    }
    return null;
  }
  var Is = [],
    Fs = 0,
    Ko = null,
    Jo = 0,
    lr = [],
    or = 0,
    qi = null,
    Kr = 1,
    Jr = "";
  function Ki(e, t) {
    (Is[Fs++] = Jo), (Is[Fs++] = Ko), (Ko = e), (Jo = t);
  }
  function _p(e, t, r) {
    (lr[or++] = Kr), (lr[or++] = Jr), (lr[or++] = qi), (qi = e);
    var o = Kr;
    e = Jr;
    var u = 32 - Sr(o) - 1;
    (o &= ~(1 << u)), (r += 1);
    var d = 32 - Sr(t) + u;
    if (30 < d) {
      var x = u - (u % 5);
      (d = (o & ((1 << x) - 1)).toString(32)),
        (o >>= x),
        (u -= x),
        (Kr = (1 << (32 - Sr(t) + u)) | (r << u) | o),
        (Jr = d + e);
    } else (Kr = (1 << d) | (r << u) | o), (Jr = e);
  }
  function ec(e) {
    e.return !== null && (Ki(e, 1), _p(e, 1, 0));
  }
  function tc(e) {
    for (; e === Ko; )
      (Ko = Is[--Fs]), (Is[Fs] = null), (Jo = Is[--Fs]), (Is[Fs] = null);
    for (; e === qi; )
      (qi = lr[--or]),
        (lr[or] = null),
        (Jr = lr[--or]),
        (lr[or] = null),
        (Kr = lr[--or]),
        (lr[or] = null);
  }
  var Hn = null,
    Wn = null,
    it = !1,
    jr = null;
  function yp(e, t) {
    var r = fr(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function wp(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Hn = e), (Wn = _i(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Hn = e), (Wn = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = qi !== null ? { id: Kr, overflow: Jr } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = fr(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Hn = e),
              (Wn = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function nc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function rc(e) {
    if (it) {
      var t = Wn;
      if (t) {
        var r = t;
        if (!wp(e, t)) {
          if (nc(e)) throw Error(i(418));
          t = _i(r.nextSibling);
          var o = Hn;
          t && wp(e, t)
            ? yp(o, r)
            : ((e.flags = (e.flags & -4097) | 2), (it = !1), (Hn = e));
        }
      } else {
        if (nc(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (it = !1), (Hn = e);
      }
    }
  }
  function kp(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Hn = e;
  }
  function ea(e) {
    if (e !== Hn) return !1;
    if (!it) return kp(e), (it = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Gu(e.type, e.memoizedProps))),
      t && (t = Wn))
    ) {
      if (nc(e)) throw (Cp(), Error(i(418)));
      for (; t; ) yp(e, t), (t = _i(t.nextSibling));
    }
    if ((kp(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                Wn = _i(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Wn = null;
      }
    } else Wn = Hn ? _i(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Cp() {
    for (var e = Wn; e; ) e = _i(e.nextSibling);
  }
  function Bs() {
    (Wn = Hn = null), (it = !1);
  }
  function ic(e) {
    jr === null ? (jr = [e]) : jr.push(e);
  }
  var Tg = z.ReactCurrentBatchConfig;
  function Ll(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(i(309));
          var o = r.stateNode;
        }
        if (!o) throw Error(i(147, e));
        var u = o,
          d = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === d
          ? t.ref
          : ((t = function (x) {
              var w = u.refs;
              x === null ? delete w[d] : (w[d] = x);
            }),
            (t._stringRef = d),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!r._owner) throw Error(i(290, e));
    }
    return e;
  }
  function ta(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        i(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Sp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Np(e) {
    function t(P, E) {
      if (e) {
        var R = P.deletions;
        R === null ? ((P.deletions = [E]), (P.flags |= 16)) : R.push(E);
      }
    }
    function r(P, E) {
      if (!e) return null;
      for (; E !== null; ) t(P, E), (E = E.sibling);
      return null;
    }
    function o(P, E) {
      for (P = new Map(); E !== null; )
        E.key !== null ? P.set(E.key, E) : P.set(E.index, E), (E = E.sibling);
      return P;
    }
    function u(P, E) {
      return (P = Pi(P, E)), (P.index = 0), (P.sibling = null), P;
    }
    function d(P, E, R) {
      return (
        (P.index = R),
        e
          ? ((R = P.alternate),
            R !== null
              ? ((R = R.index), R < E ? ((P.flags |= 2), E) : R)
              : ((P.flags |= 2), E))
          : ((P.flags |= 1048576), E)
      );
    }
    function x(P) {
      return e && P.alternate === null && (P.flags |= 2), P;
    }
    function w(P, E, R, Q) {
      return E === null || E.tag !== 6
        ? ((E = Qc(R, P.mode, Q)), (E.return = P), E)
        : ((E = u(E, R)), (E.return = P), E);
    }
    function N(P, E, R, Q) {
      var le = R.type;
      return le === O
        ? W(P, E, R.props.children, Q, R.key)
        : E !== null &&
          (E.elementType === le ||
            (typeof le == "object" &&
              le !== null &&
              le.$$typeof === de &&
              Sp(le) === E.type))
        ? ((Q = u(E, R.props)), (Q.ref = Ll(P, E, R)), (Q.return = P), Q)
        : ((Q = Na(R.type, R.key, R.props, null, P.mode, Q)),
          (Q.ref = Ll(P, E, R)),
          (Q.return = P),
          Q);
    }
    function b(P, E, R, Q) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== R.containerInfo ||
        E.stateNode.implementation !== R.implementation
        ? ((E = Zc(R, P.mode, Q)), (E.return = P), E)
        : ((E = u(E, R.children || [])), (E.return = P), E);
    }
    function W(P, E, R, Q, le) {
      return E === null || E.tag !== 7
        ? ((E = ls(R, P.mode, Q, le)), (E.return = P), E)
        : ((E = u(E, R)), (E.return = P), E);
    }
    function G(P, E, R) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return (E = Qc("" + E, P.mode, R)), (E.return = P), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case A:
            return (
              (R = Na(E.type, E.key, E.props, null, P.mode, R)),
              (R.ref = Ll(P, null, E)),
              (R.return = P),
              R
            );
          case U:
            return (E = Zc(E, P.mode, R)), (E.return = P), E;
          case de:
            var Q = E._init;
            return G(P, Q(E._payload), R);
        }
        if (Cn(E) || K(E))
          return (E = ls(E, P.mode, R, null)), (E.return = P), E;
        ta(P, E);
      }
      return null;
    }
    function H(P, E, R, Q) {
      var le = E !== null ? E.key : null;
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return le !== null ? null : w(P, E, "" + R, Q);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case A:
            return R.key === le ? N(P, E, R, Q) : null;
          case U:
            return R.key === le ? b(P, E, R, Q) : null;
          case de:
            return (le = R._init), H(P, E, le(R._payload), Q);
        }
        if (Cn(R) || K(R)) return le !== null ? null : W(P, E, R, Q, null);
        ta(P, R);
      }
      return null;
    }
    function J(P, E, R, Q, le) {
      if ((typeof Q == "string" && Q !== "") || typeof Q == "number")
        return (P = P.get(R) || null), w(E, P, "" + Q, le);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case A:
            return (
              (P = P.get(Q.key === null ? R : Q.key) || null), N(E, P, Q, le)
            );
          case U:
            return (
              (P = P.get(Q.key === null ? R : Q.key) || null), b(E, P, Q, le)
            );
          case de:
            var ue = Q._init;
            return J(P, E, R, ue(Q._payload), le);
        }
        if (Cn(Q) || K(Q)) return (P = P.get(R) || null), W(E, P, Q, le, null);
        ta(E, Q);
      }
      return null;
    }
    function re(P, E, R, Q) {
      for (
        var le = null, ue = null, ce = E, we = (E = 0), It = null;
        ce !== null && we < R.length;
        we++
      ) {
        ce.index > we ? ((It = ce), (ce = null)) : (It = ce.sibling);
        var Fe = H(P, ce, R[we], Q);
        if (Fe === null) {
          ce === null && (ce = It);
          break;
        }
        e && ce && Fe.alternate === null && t(P, ce),
          (E = d(Fe, E, we)),
          ue === null ? (le = Fe) : (ue.sibling = Fe),
          (ue = Fe),
          (ce = It);
      }
      if (we === R.length) return r(P, ce), it && Ki(P, we), le;
      if (ce === null) {
        for (; we < R.length; we++)
          (ce = G(P, R[we], Q)),
            ce !== null &&
              ((E = d(ce, E, we)),
              ue === null ? (le = ce) : (ue.sibling = ce),
              (ue = ce));
        return it && Ki(P, we), le;
      }
      for (ce = o(P, ce); we < R.length; we++)
        (It = J(ce, P, we, R[we], Q)),
          It !== null &&
            (e &&
              It.alternate !== null &&
              ce.delete(It.key === null ? we : It.key),
            (E = d(It, E, we)),
            ue === null ? (le = It) : (ue.sibling = It),
            (ue = It));
      return (
        e &&
          ce.forEach(function (Ri) {
            return t(P, Ri);
          }),
        it && Ki(P, we),
        le
      );
    }
    function ie(P, E, R, Q) {
      var le = K(R);
      if (typeof le != "function") throw Error(i(150));
      if (((R = le.call(R)), R == null)) throw Error(i(151));
      for (
        var ue = (le = null), ce = E, we = (E = 0), It = null, Fe = R.next();
        ce !== null && !Fe.done;
        we++, Fe = R.next()
      ) {
        ce.index > we ? ((It = ce), (ce = null)) : (It = ce.sibling);
        var Ri = H(P, ce, Fe.value, Q);
        if (Ri === null) {
          ce === null && (ce = It);
          break;
        }
        e && ce && Ri.alternate === null && t(P, ce),
          (E = d(Ri, E, we)),
          ue === null ? (le = Ri) : (ue.sibling = Ri),
          (ue = Ri),
          (ce = It);
      }
      if (Fe.done) return r(P, ce), it && Ki(P, we), le;
      if (ce === null) {
        for (; !Fe.done; we++, Fe = R.next())
          (Fe = G(P, Fe.value, Q)),
            Fe !== null &&
              ((E = d(Fe, E, we)),
              ue === null ? (le = Fe) : (ue.sibling = Fe),
              (ue = Fe));
        return it && Ki(P, we), le;
      }
      for (ce = o(P, ce); !Fe.done; we++, Fe = R.next())
        (Fe = J(ce, P, we, Fe.value, Q)),
          Fe !== null &&
            (e &&
              Fe.alternate !== null &&
              ce.delete(Fe.key === null ? we : Fe.key),
            (E = d(Fe, E, we)),
            ue === null ? (le = Fe) : (ue.sibling = Fe),
            (ue = Fe));
      return (
        e &&
          ce.forEach(function (o2) {
            return t(P, o2);
          }),
        it && Ki(P, we),
        le
      );
    }
    function xt(P, E, R, Q) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === O &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case A:
            e: {
              for (var le = R.key, ue = E; ue !== null; ) {
                if (ue.key === le) {
                  if (((le = R.type), le === O)) {
                    if (ue.tag === 7) {
                      r(P, ue.sibling),
                        (E = u(ue, R.props.children)),
                        (E.return = P),
                        (P = E);
                      break e;
                    }
                  } else if (
                    ue.elementType === le ||
                    (typeof le == "object" &&
                      le !== null &&
                      le.$$typeof === de &&
                      Sp(le) === ue.type)
                  ) {
                    r(P, ue.sibling),
                      (E = u(ue, R.props)),
                      (E.ref = Ll(P, ue, R)),
                      (E.return = P),
                      (P = E);
                    break e;
                  }
                  r(P, ue);
                  break;
                } else t(P, ue);
                ue = ue.sibling;
              }
              R.type === O
                ? ((E = ls(R.props.children, P.mode, Q, R.key)),
                  (E.return = P),
                  (P = E))
                : ((Q = Na(R.type, R.key, R.props, null, P.mode, Q)),
                  (Q.ref = Ll(P, E, R)),
                  (Q.return = P),
                  (P = Q));
            }
            return x(P);
          case U:
            e: {
              for (ue = R.key; E !== null; ) {
                if (E.key === ue)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === R.containerInfo &&
                    E.stateNode.implementation === R.implementation
                  ) {
                    r(P, E.sibling),
                      (E = u(E, R.children || [])),
                      (E.return = P),
                      (P = E);
                    break e;
                  } else {
                    r(P, E);
                    break;
                  }
                else t(P, E);
                E = E.sibling;
              }
              (E = Zc(R, P.mode, Q)), (E.return = P), (P = E);
            }
            return x(P);
          case de:
            return (ue = R._init), xt(P, E, ue(R._payload), Q);
        }
        if (Cn(R)) return re(P, E, R, Q);
        if (K(R)) return ie(P, E, R, Q);
        ta(P, R);
      }
      return (typeof R == "string" && R !== "") || typeof R == "number"
        ? ((R = "" + R),
          E !== null && E.tag === 6
            ? (r(P, E.sibling), (E = u(E, R)), (E.return = P), (P = E))
            : (r(P, E), (E = Qc(R, P.mode, Q)), (E.return = P), (P = E)),
          x(P))
        : r(P, E);
    }
    return xt;
  }
  var Us = Np(!0),
    jp = Np(!1),
    na = yi(null),
    ra = null,
    $s = null,
    sc = null;
  function lc() {
    sc = $s = ra = null;
  }
  function oc(e) {
    var t = na.current;
    tt(na), (e._currentValue = t);
  }
  function ac(e, t, r) {
    for (; e !== null; ) {
      var o = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
          : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Vs(e, t) {
    (ra = e),
      (sc = $s = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Mn = !0), (e.firstContext = null));
  }
  function ar(e) {
    var t = e._currentValue;
    if (sc !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), $s === null)) {
        if (ra === null) throw Error(i(308));
        ($s = e), (ra.dependencies = { lanes: 0, firstContext: e });
      } else $s = $s.next = e;
    return t;
  }
  var Ji = null;
  function uc(e) {
    Ji === null ? (Ji = [e]) : Ji.push(e);
  }
  function Ep(e, t, r, o) {
    var u = t.interleaved;
    return (
      u === null ? ((r.next = r), uc(t)) : ((r.next = u.next), (u.next = r)),
      (t.interleaved = r),
      ei(e, o)
    );
  }
  function ei(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var Ci = !1;
  function cc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Tp(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function ti(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Si(e, t, r) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (Ie & 2) !== 0)) {
      var u = o.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (o.pending = t),
        ei(e, r)
      );
    }
    return (
      (u = o.interleaved),
      u === null ? ((t.next = t), uc(o)) : ((t.next = u.next), (u.next = t)),
      (o.interleaved = t),
      ei(e, r)
    );
  }
  function ia(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var o = t.lanes;
      (o &= e.pendingLanes), (r |= o), (t.lanes = r), Su(e, r);
    }
  }
  function Mp(e, t) {
    var r = e.updateQueue,
      o = e.alternate;
    if (o !== null && ((o = o.updateQueue), r === o)) {
      var u = null,
        d = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var x = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          d === null ? (u = d = x) : (d = d.next = x), (r = r.next);
        } while (r !== null);
        d === null ? (u = d = t) : (d = d.next = t);
      } else u = d = t;
      (r = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: o.shared,
        effects: o.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function sa(e, t, r, o) {
    var u = e.updateQueue;
    Ci = !1;
    var d = u.firstBaseUpdate,
      x = u.lastBaseUpdate,
      w = u.shared.pending;
    if (w !== null) {
      u.shared.pending = null;
      var N = w,
        b = N.next;
      (N.next = null), x === null ? (d = b) : (x.next = b), (x = N);
      var W = e.alternate;
      W !== null &&
        ((W = W.updateQueue),
        (w = W.lastBaseUpdate),
        w !== x &&
          (w === null ? (W.firstBaseUpdate = b) : (w.next = b),
          (W.lastBaseUpdate = N)));
    }
    if (d !== null) {
      var G = u.baseState;
      (x = 0), (W = b = N = null), (w = d);
      do {
        var H = w.lane,
          J = w.eventTime;
        if ((o & H) === H) {
          W !== null &&
            (W = W.next =
              {
                eventTime: J,
                lane: 0,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null,
              });
          e: {
            var re = e,
              ie = w;
            switch (((H = t), (J = r), ie.tag)) {
              case 1:
                if (((re = ie.payload), typeof re == "function")) {
                  G = re.call(J, G, H);
                  break e;
                }
                G = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ie.payload),
                  (H = typeof re == "function" ? re.call(J, G, H) : re),
                  H == null)
                )
                  break e;
                G = S({}, G, H);
                break e;
              case 2:
                Ci = !0;
            }
          }
          w.callback !== null &&
            w.lane !== 0 &&
            ((e.flags |= 64),
            (H = u.effects),
            H === null ? (u.effects = [w]) : H.push(w));
        } else
          (J = {
            eventTime: J,
            lane: H,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            W === null ? ((b = W = J), (N = G)) : (W = W.next = J),
            (x |= H);
        if (((w = w.next), w === null)) {
          if (((w = u.shared.pending), w === null)) break;
          (H = w),
            (w = H.next),
            (H.next = null),
            (u.lastBaseUpdate = H),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (W === null && (N = G),
        (u.baseState = N),
        (u.firstBaseUpdate = b),
        (u.lastBaseUpdate = W),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (x |= u.lane), (u = u.next);
        while (u !== t);
      } else d === null && (u.shared.lanes = 0);
      (ns |= x), (e.lanes = x), (e.memoizedState = G);
    }
  }
  function Pp(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var o = e[t],
          u = o.callback;
        if (u !== null) {
          if (((o.callback = null), (o = r), typeof u != "function"))
            throw Error(i(191, u));
          u.call(o);
        }
      }
  }
  var Al = {},
    Ir = yi(Al),
    Il = yi(Al),
    Fl = yi(Al);
  function es(e) {
    if (e === Al) throw Error(i(174));
    return e;
  }
  function fc(e, t) {
    switch ((Ge(Fl, t), Ge(Il, e), Ge(Ir, Al), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ke(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ke(t, e));
    }
    tt(Ir), Ge(Ir, t);
  }
  function Hs() {
    tt(Ir), tt(Il), tt(Fl);
  }
  function Rp(e) {
    es(Fl.current);
    var t = es(Ir.current),
      r = Ke(t, e.type);
    t !== r && (Ge(Il, e), Ge(Ir, r));
  }
  function dc(e) {
    Il.current === e && (tt(Ir), tt(Il));
  }
  var ot = yi(0);
  function la(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var pc = [];
  function hc() {
    for (var e = 0; e < pc.length; e++)
      pc[e]._workInProgressVersionPrimary = null;
    pc.length = 0;
  }
  var oa = z.ReactCurrentDispatcher,
    mc = z.ReactCurrentBatchConfig,
    ts = 0,
    at = null,
    Mt = null,
    Lt = null,
    aa = !1,
    Bl = !1,
    Ul = 0,
    Mg = 0;
  function Jt() {
    throw Error(i(321));
  }
  function gc(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Nr(e[r], t[r])) return !1;
    return !0;
  }
  function xc(e, t, r, o, u, d) {
    if (
      ((ts = d),
      (at = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (oa.current = e === null || e.memoizedState === null ? zg : Dg),
      (e = r(o, u)),
      Bl)
    ) {
      d = 0;
      do {
        if (((Bl = !1), (Ul = 0), 25 <= d)) throw Error(i(301));
        (d += 1),
          (Lt = Mt = null),
          (t.updateQueue = null),
          (oa.current = Og),
          (e = r(o, u));
      } while (Bl);
    }
    if (
      ((oa.current = fa),
      (t = Mt !== null && Mt.next !== null),
      (ts = 0),
      (Lt = Mt = at = null),
      (aa = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function vc() {
    var e = Ul !== 0;
    return (Ul = 0), e;
  }
  function Fr() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Lt === null ? (at.memoizedState = Lt = e) : (Lt = Lt.next = e), Lt;
  }
  function ur() {
    if (Mt === null) {
      var e = at.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Mt.next;
    var t = Lt === null ? at.memoizedState : Lt.next;
    if (t !== null) (Lt = t), (Mt = e);
    else {
      if (e === null) throw Error(i(310));
      (Mt = e),
        (e = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null,
        }),
        Lt === null ? (at.memoizedState = Lt = e) : (Lt = Lt.next = e);
    }
    return Lt;
  }
  function $l(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function _c(e) {
    var t = ur(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var o = Mt,
      u = o.baseQueue,
      d = r.pending;
    if (d !== null) {
      if (u !== null) {
        var x = u.next;
        (u.next = d.next), (d.next = x);
      }
      (o.baseQueue = u = d), (r.pending = null);
    }
    if (u !== null) {
      (d = u.next), (o = o.baseState);
      var w = (x = null),
        N = null,
        b = d;
      do {
        var W = b.lane;
        if ((ts & W) === W)
          N !== null &&
            (N = N.next =
              {
                lane: 0,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null,
              }),
            (o = b.hasEagerState ? b.eagerState : e(o, b.action));
        else {
          var G = {
            lane: W,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null,
          };
          N === null ? ((w = N = G), (x = o)) : (N = N.next = G),
            (at.lanes |= W),
            (ns |= W);
        }
        b = b.next;
      } while (b !== null && b !== d);
      N === null ? (x = o) : (N.next = w),
        Nr(o, t.memoizedState) || (Mn = !0),
        (t.memoizedState = o),
        (t.baseState = x),
        (t.baseQueue = N),
        (r.lastRenderedState = o);
    }
    if (((e = r.interleaved), e !== null)) {
      u = e;
      do (d = u.lane), (at.lanes |= d), (ns |= d), (u = u.next);
      while (u !== e);
    } else u === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function yc(e) {
    var t = ur(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var o = r.dispatch,
      u = r.pending,
      d = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var x = (u = u.next);
      do (d = e(d, x.action)), (x = x.next);
      while (x !== u);
      Nr(d, t.memoizedState) || (Mn = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (r.lastRenderedState = d);
    }
    return [d, o];
  }
  function bp() {}
  function zp(e, t) {
    var r = at,
      o = ur(),
      u = t(),
      d = !Nr(o.memoizedState, u);
    if (
      (d && ((o.memoizedState = u), (Mn = !0)),
      (o = o.queue),
      wc(Lp.bind(null, r, o, e), [e]),
      o.getSnapshot !== t || d || (Lt !== null && Lt.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        Vl(9, Op.bind(null, r, o, u, t), void 0, null),
        At === null)
      )
        throw Error(i(349));
      (ts & 30) !== 0 || Dp(r, t, u);
    }
    return u;
  }
  function Dp(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = at.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (at.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function Op(e, t, r, o) {
    (t.value = r), (t.getSnapshot = o), Ap(t) && Ip(e);
  }
  function Lp(e, t, r) {
    return r(function () {
      Ap(t) && Ip(e);
    });
  }
  function Ap(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Nr(e, r);
    } catch {
      return !0;
    }
  }
  function Ip(e) {
    var t = ei(e, 1);
    t !== null && Pr(t, e, 1, -1);
  }
  function Fp(e) {
    var t = Fr();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $l,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = bg.bind(null, at, e)),
      [t.memoizedState, e]
    );
  }
  function Vl(e, t, r, o) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
      (t = at.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (at.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
      e
    );
  }
  function Bp() {
    return ur().memoizedState;
  }
  function ua(e, t, r, o) {
    var u = Fr();
    (at.flags |= e),
      (u.memoizedState = Vl(1 | t, r, void 0, o === void 0 ? null : o));
  }
  function ca(e, t, r, o) {
    var u = ur();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Mt !== null) {
      var x = Mt.memoizedState;
      if (((d = x.destroy), o !== null && gc(o, x.deps))) {
        u.memoizedState = Vl(t, r, d, o);
        return;
      }
    }
    (at.flags |= e), (u.memoizedState = Vl(1 | t, r, d, o));
  }
  function Up(e, t) {
    return ua(8390656, 8, e, t);
  }
  function wc(e, t) {
    return ca(2048, 8, e, t);
  }
  function $p(e, t) {
    return ca(4, 2, e, t);
  }
  function Vp(e, t) {
    return ca(4, 4, e, t);
  }
  function Hp(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Wp(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), ca(4, 4, Hp.bind(null, t, e), r)
    );
  }
  function kc() {}
  function Yp(e, t) {
    var r = ur();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && gc(t, o[1])
      ? o[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function Xp(e, t) {
    var r = ur();
    t = t === void 0 ? null : t;
    var o = r.memoizedState;
    return o !== null && t !== null && gc(t, o[1])
      ? o[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function Gp(e, t, r) {
    return (ts & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Mn = !0)), (e.memoizedState = r))
      : (Nr(r, t) ||
          ((r = Sd()), (at.lanes |= r), (ns |= r), (e.baseState = !0)),
        t);
  }
  function Pg(e, t) {
    var r = $e;
    ($e = r !== 0 && 4 > r ? r : 4), e(!0);
    var o = mc.transition;
    mc.transition = {};
    try {
      e(!1), t();
    } finally {
      ($e = r), (mc.transition = o);
    }
  }
  function Qp() {
    return ur().memoizedState;
  }
  function Rg(e, t, r) {
    var o = Ti(e);
    if (
      ((r = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Zp(e))
    )
      qp(t, r);
    else if (((r = Ep(e, t, r, o)), r !== null)) {
      var u = hn();
      Pr(r, e, o, u), Kp(r, t, o);
    }
  }
  function bg(e, t, r) {
    var o = Ti(e),
      u = {
        lane: o,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Zp(e)) qp(t, u);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var x = t.lastRenderedState,
            w = d(x, r);
          if (((u.hasEagerState = !0), (u.eagerState = w), Nr(w, x))) {
            var N = t.interleaved;
            N === null
              ? ((u.next = u), uc(t))
              : ((u.next = N.next), (N.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (r = Ep(e, t, u, o)),
        r !== null && ((u = hn()), Pr(r, e, o, u), Kp(r, t, o));
    }
  }
  function Zp(e) {
    var t = e.alternate;
    return e === at || (t !== null && t === at);
  }
  function qp(e, t) {
    Bl = aa = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function Kp(e, t, r) {
    if ((r & 4194240) !== 0) {
      var o = t.lanes;
      (o &= e.pendingLanes), (r |= o), (t.lanes = r), Su(e, r);
    }
  }
  var fa = {
      readContext: ar,
      useCallback: Jt,
      useContext: Jt,
      useEffect: Jt,
      useImperativeHandle: Jt,
      useInsertionEffect: Jt,
      useLayoutEffect: Jt,
      useMemo: Jt,
      useReducer: Jt,
      useRef: Jt,
      useState: Jt,
      useDebugValue: Jt,
      useDeferredValue: Jt,
      useTransition: Jt,
      useMutableSource: Jt,
      useSyncExternalStore: Jt,
      useId: Jt,
      unstable_isNewReconciler: !1,
    },
    zg = {
      readContext: ar,
      useCallback: function (e, t) {
        return (Fr().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ar,
      useEffect: Up,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          ua(4194308, 4, Hp.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return ua(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ua(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Fr();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var o = Fr();
        return (
          (t = r !== void 0 ? r(t) : t),
          (o.memoizedState = o.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (o.queue = e),
          (e = e.dispatch = Rg.bind(null, at, e)),
          [o.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Fr();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Fp,
      useDebugValue: kc,
      useDeferredValue: function (e) {
        return (Fr().memoizedState = e);
      },
      useTransition: function () {
        var e = Fp(!1),
          t = e[0];
        return (e = Pg.bind(null, e[1])), (Fr().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var o = at,
          u = Fr();
        if (it) {
          if (r === void 0) throw Error(i(407));
          r = r();
        } else {
          if (((r = t()), At === null)) throw Error(i(349));
          (ts & 30) !== 0 || Dp(o, t, r);
        }
        u.memoizedState = r;
        var d = { value: r, getSnapshot: t };
        return (
          (u.queue = d),
          Up(Lp.bind(null, o, d, e), [e]),
          (o.flags |= 2048),
          Vl(9, Op.bind(null, o, d, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Fr(),
          t = At.identifierPrefix;
        if (it) {
          var r = Jr,
            o = Kr;
          (r = (o & ~(1 << (32 - Sr(o) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = Ul++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = Mg++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Dg = {
      readContext: ar,
      useCallback: Yp,
      useContext: ar,
      useEffect: wc,
      useImperativeHandle: Wp,
      useInsertionEffect: $p,
      useLayoutEffect: Vp,
      useMemo: Xp,
      useReducer: _c,
      useRef: Bp,
      useState: function () {
        return _c($l);
      },
      useDebugValue: kc,
      useDeferredValue: function (e) {
        var t = ur();
        return Gp(t, Mt.memoizedState, e);
      },
      useTransition: function () {
        var e = _c($l)[0],
          t = ur().memoizedState;
        return [e, t];
      },
      useMutableSource: bp,
      useSyncExternalStore: zp,
      useId: Qp,
      unstable_isNewReconciler: !1,
    },
    Og = {
      readContext: ar,
      useCallback: Yp,
      useContext: ar,
      useEffect: wc,
      useImperativeHandle: Wp,
      useInsertionEffect: $p,
      useLayoutEffect: Vp,
      useMemo: Xp,
      useReducer: yc,
      useRef: Bp,
      useState: function () {
        return yc($l);
      },
      useDebugValue: kc,
      useDeferredValue: function (e) {
        var t = ur();
        return Mt === null ? (t.memoizedState = e) : Gp(t, Mt.memoizedState, e);
      },
      useTransition: function () {
        var e = yc($l)[0],
          t = ur().memoizedState;
        return [e, t];
      },
      useMutableSource: bp,
      useSyncExternalStore: zp,
      useId: Qp,
      unstable_isNewReconciler: !1,
    };
  function Er(e, t) {
    if (e && e.defaultProps) {
      (t = S({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Cc(e, t, r, o) {
    (t = e.memoizedState),
      (r = r(o, t)),
      (r = r == null ? t : S({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var da = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Le(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var o = hn(),
        u = Ti(e),
        d = ti(o, u);
      (d.payload = t),
        r != null && (d.callback = r),
        (t = Si(e, d, u)),
        t !== null && (Pr(t, e, u, o), ia(t, e, u));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var o = hn(),
        u = Ti(e),
        d = ti(o, u);
      (d.tag = 1),
        (d.payload = t),
        r != null && (d.callback = r),
        (t = Si(e, d, u)),
        t !== null && (Pr(t, e, u, o), ia(t, e, u));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = hn(),
        o = Ti(e),
        u = ti(r, o);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = Si(e, u, o)),
        t !== null && (Pr(t, e, o, r), ia(t, e, o));
    },
  };
  function Jp(e, t, r, o, u, d, x) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(o, d, x)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ml(r, o) || !Ml(u, d)
        : !0
    );
  }
  function eh(e, t, r) {
    var o = !1,
      u = wi,
      d = t.contextType;
    return (
      typeof d == "object" && d !== null
        ? (d = ar(d))
        : ((u = Tn(t) ? Zi : Kt.current),
          (o = t.contextTypes),
          (d = (o = o != null) ? As(e, u) : wi)),
      (t = new t(r, d)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = da),
      (e.stateNode = t),
      (t._reactInternals = e),
      o &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      t
    );
  }
  function th(e, t, r, o) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, o),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, o),
      t.state !== e && da.enqueueReplaceState(t, t.state, null);
  }
  function Sc(e, t, r, o) {
    var u = e.stateNode;
    (u.props = r), (u.state = e.memoizedState), (u.refs = {}), cc(e);
    var d = t.contextType;
    typeof d == "object" && d !== null
      ? (u.context = ar(d))
      : ((d = Tn(t) ? Zi : Kt.current), (u.context = As(e, d))),
      (u.state = e.memoizedState),
      (d = t.getDerivedStateFromProps),
      typeof d == "function" && (Cc(e, t, d, r), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && da.enqueueReplaceState(u, u.state, null),
        sa(e, r, u, o),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ws(e, t) {
    try {
      var r = "",
        o = t;
      do (r += me(o)), (o = o.return);
      while (o);
      var u = r;
    } catch (d) {
      u =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Nc(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function jc(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Lg = typeof WeakMap == "function" ? WeakMap : Map;
  function nh(e, t, r) {
    (r = ti(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var o = t.value;
    return (
      (r.callback = function () {
        _a || ((_a = !0), (Uc = o)), jc(e, t);
      }),
      r
    );
  }
  function rh(e, t, r) {
    (r = ti(-1, r)), (r.tag = 3);
    var o = e.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = t.value;
      (r.payload = function () {
        return o(u);
      }),
        (r.callback = function () {
          jc(e, t);
        });
    }
    var d = e.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (r.callback = function () {
          jc(e, t),
            typeof o != "function" &&
              (ji === null ? (ji = new Set([this])) : ji.add(this));
          var x = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: x !== null ? x : "",
          });
        }),
      r
    );
  }
  function ih(e, t, r) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Lg();
      var u = new Set();
      o.set(t, u);
    } else (u = o.get(t)), u === void 0 && ((u = new Set()), o.set(t, u));
    u.has(r) || (u.add(r), (e = Zg.bind(null, e, t, r)), t.then(e, e));
  }
  function sh(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function lh(e, t, r, o, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = ti(-1, 1)), (t.tag = 2), Si(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var Ag = z.ReactCurrentOwner,
    Mn = !1;
  function pn(e, t, r, o) {
    t.child = e === null ? jp(t, null, r, o) : Us(t, e.child, r, o);
  }
  function oh(e, t, r, o, u) {
    r = r.render;
    var d = t.ref;
    return (
      Vs(t, u),
      (o = xc(e, t, r, o, d, u)),
      (r = vc()),
      e !== null && !Mn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          ni(e, t, u))
        : (it && r && ec(t), (t.flags |= 1), pn(e, t, o, u), t.child)
    );
  }
  function ah(e, t, r, o, u) {
    if (e === null) {
      var d = r.type;
      return typeof d == "function" &&
        !Gc(d) &&
        d.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = d), uh(e, t, d, o, u))
        : ((e = Na(r.type, null, o, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), (e.lanes & u) === 0)) {
      var x = d.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Ml), r(x, o) && e.ref === t.ref)
      )
        return ni(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = Pi(d, o)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function uh(e, t, r, o, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Ml(d, o) && e.ref === t.ref)
        if (((Mn = !1), (t.pendingProps = o = d), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (Mn = !0);
        else return (t.lanes = e.lanes), ni(e, t, u);
    }
    return Ec(e, t, r, o, u);
  }
  function ch(e, t, r) {
    var o = t.pendingProps,
      u = o.children,
      d = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ge(Xs, Yn),
          (Yn |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = d !== null ? d.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ge(Xs, Yn),
            (Yn |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (o = d !== null ? d.baseLanes : r),
          Ge(Xs, Yn),
          (Yn |= o);
      }
    else
      d !== null ? ((o = d.baseLanes | r), (t.memoizedState = null)) : (o = r),
        Ge(Xs, Yn),
        (Yn |= o);
    return pn(e, t, u, r), t.child;
  }
  function fh(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ec(e, t, r, o, u) {
    var d = Tn(r) ? Zi : Kt.current;
    return (
      (d = As(t, d)),
      Vs(t, u),
      (r = xc(e, t, r, o, d, u)),
      (o = vc()),
      e !== null && !Mn
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          ni(e, t, u))
        : (it && o && ec(t), (t.flags |= 1), pn(e, t, r, u), t.child)
    );
  }
  function dh(e, t, r, o, u) {
    if (Tn(r)) {
      var d = !0;
      Zo(t);
    } else d = !1;
    if ((Vs(t, u), t.stateNode === null))
      ha(e, t), eh(t, r, o), Sc(t, r, o, u), (o = !0);
    else if (e === null) {
      var x = t.stateNode,
        w = t.memoizedProps;
      x.props = w;
      var N = x.context,
        b = r.contextType;
      typeof b == "object" && b !== null
        ? (b = ar(b))
        : ((b = Tn(r) ? Zi : Kt.current), (b = As(t, b)));
      var W = r.getDerivedStateFromProps,
        G =
          typeof W == "function" ||
          typeof x.getSnapshotBeforeUpdate == "function";
      G ||
        (typeof x.UNSAFE_componentWillReceiveProps != "function" &&
          typeof x.componentWillReceiveProps != "function") ||
        ((w !== o || N !== b) && th(t, x, o, b)),
        (Ci = !1);
      var H = t.memoizedState;
      (x.state = H),
        sa(t, o, x, u),
        (N = t.memoizedState),
        w !== o || H !== N || En.current || Ci
          ? (typeof W == "function" && (Cc(t, r, W, o), (N = t.memoizedState)),
            (w = Ci || Jp(t, r, w, o, H, N, b))
              ? (G ||
                  (typeof x.UNSAFE_componentWillMount != "function" &&
                    typeof x.componentWillMount != "function") ||
                  (typeof x.componentWillMount == "function" &&
                    x.componentWillMount(),
                  typeof x.UNSAFE_componentWillMount == "function" &&
                    x.UNSAFE_componentWillMount()),
                typeof x.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof x.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = o),
                (t.memoizedState = N)),
            (x.props = o),
            (x.state = N),
            (x.context = b),
            (o = w))
          : (typeof x.componentDidMount == "function" && (t.flags |= 4194308),
            (o = !1));
    } else {
      (x = t.stateNode),
        Tp(e, t),
        (w = t.memoizedProps),
        (b = t.type === t.elementType ? w : Er(t.type, w)),
        (x.props = b),
        (G = t.pendingProps),
        (H = x.context),
        (N = r.contextType),
        typeof N == "object" && N !== null
          ? (N = ar(N))
          : ((N = Tn(r) ? Zi : Kt.current), (N = As(t, N)));
      var J = r.getDerivedStateFromProps;
      (W =
        typeof J == "function" ||
        typeof x.getSnapshotBeforeUpdate == "function") ||
        (typeof x.UNSAFE_componentWillReceiveProps != "function" &&
          typeof x.componentWillReceiveProps != "function") ||
        ((w !== G || H !== N) && th(t, x, o, N)),
        (Ci = !1),
        (H = t.memoizedState),
        (x.state = H),
        sa(t, o, x, u);
      var re = t.memoizedState;
      w !== G || H !== re || En.current || Ci
        ? (typeof J == "function" && (Cc(t, r, J, o), (re = t.memoizedState)),
          (b = Ci || Jp(t, r, b, o, H, re, N) || !1)
            ? (W ||
                (typeof x.UNSAFE_componentWillUpdate != "function" &&
                  typeof x.componentWillUpdate != "function") ||
                (typeof x.componentWillUpdate == "function" &&
                  x.componentWillUpdate(o, re, N),
                typeof x.UNSAFE_componentWillUpdate == "function" &&
                  x.UNSAFE_componentWillUpdate(o, re, N)),
              typeof x.componentDidUpdate == "function" && (t.flags |= 4),
              typeof x.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof x.componentDidUpdate != "function" ||
                (w === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 4),
              typeof x.getSnapshotBeforeUpdate != "function" ||
                (w === e.memoizedProps && H === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = o),
              (t.memoizedState = re)),
          (x.props = o),
          (x.state = re),
          (x.context = N),
          (o = b))
        : (typeof x.componentDidUpdate != "function" ||
            (w === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 4),
          typeof x.getSnapshotBeforeUpdate != "function" ||
            (w === e.memoizedProps && H === e.memoizedState) ||
            (t.flags |= 1024),
          (o = !1));
    }
    return Tc(e, t, r, o, d, u);
  }
  function Tc(e, t, r, o, u, d) {
    fh(e, t);
    var x = (t.flags & 128) !== 0;
    if (!o && !x) return u && xp(t, r, !1), ni(e, t, d);
    (o = t.stateNode), (Ag.current = t);
    var w =
      x && typeof r.getDerivedStateFromError != "function" ? null : o.render();
    return (
      (t.flags |= 1),
      e !== null && x
        ? ((t.child = Us(t, e.child, null, d)), (t.child = Us(t, null, w, d)))
        : pn(e, t, w, d),
      (t.memoizedState = o.state),
      u && xp(t, r, !0),
      t.child
    );
  }
  function ph(e) {
    var t = e.stateNode;
    t.pendingContext
      ? mp(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && mp(e, t.context, !1),
      fc(e, t.containerInfo);
  }
  function hh(e, t, r, o, u) {
    return Bs(), ic(u), (t.flags |= 256), pn(e, t, r, o), t.child;
  }
  var Mc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function mh(e, t, r) {
    var o = t.pendingProps,
      u = ot.current,
      d = !1,
      x = (t.flags & 128) !== 0,
      w;
    if (
      ((w = x) ||
        (w = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      w
        ? ((d = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Ge(ot, u & 1),
      e === null)
    )
      return (
        rc(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((x = o.children),
            (e = o.fallback),
            d
              ? ((o = t.mode),
                (d = t.child),
                (x = { mode: "hidden", children: x }),
                (o & 1) === 0 && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = x))
                  : (d = ja(x, o, 0, null)),
                (e = ls(e, o, r, null)),
                (d.return = t),
                (e.return = t),
                (d.sibling = e),
                (t.child = d),
                (t.child.memoizedState = Pc(r)),
                (t.memoizedState = Mc),
                e)
              : Rc(t, x))
      );
    if (((u = e.memoizedState), u !== null && ((w = u.dehydrated), w !== null)))
      return Ig(e, t, x, o, w, u, r);
    if (d) {
      (d = o.fallback), (x = t.mode), (u = e.child), (w = u.sibling);
      var N = { mode: "hidden", children: o.children };
      return (
        (x & 1) === 0 && t.child !== u
          ? ((o = t.child),
            (o.childLanes = 0),
            (o.pendingProps = N),
            (t.deletions = null))
          : ((o = Pi(u, N)), (o.subtreeFlags = u.subtreeFlags & 14680064)),
        w !== null ? (d = Pi(w, d)) : ((d = ls(d, x, r, null)), (d.flags |= 2)),
        (d.return = t),
        (o.return = t),
        (o.sibling = d),
        (t.child = o),
        (o = d),
        (d = t.child),
        (x = e.child.memoizedState),
        (x =
          x === null
            ? Pc(r)
            : {
                baseLanes: x.baseLanes | r,
                cachePool: null,
                transitions: x.transitions,
              }),
        (d.memoizedState = x),
        (d.childLanes = e.childLanes & ~r),
        (t.memoizedState = Mc),
        o
      );
    }
    return (
      (d = e.child),
      (e = d.sibling),
      (o = Pi(d, { mode: "visible", children: o.children })),
      (t.mode & 1) === 0 && (o.lanes = r),
      (o.return = t),
      (o.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = o),
      (t.memoizedState = null),
      o
    );
  }
  function Rc(e, t) {
    return (
      (t = ja({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function pa(e, t, r, o) {
    return (
      o !== null && ic(o),
      Us(t, e.child, null, r),
      (e = Rc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ig(e, t, r, o, u, d, x) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (o = Nc(Error(i(422)))), pa(e, t, x, o))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((d = o.fallback),
          (u = t.mode),
          (o = ja({ mode: "visible", children: o.children }, u, 0, null)),
          (d = ls(d, u, x, null)),
          (d.flags |= 2),
          (o.return = t),
          (d.return = t),
          (o.sibling = d),
          (t.child = o),
          (t.mode & 1) !== 0 && Us(t, e.child, null, x),
          (t.child.memoizedState = Pc(x)),
          (t.memoizedState = Mc),
          d);
    if ((t.mode & 1) === 0) return pa(e, t, x, null);
    if (u.data === "$!") {
      if (((o = u.nextSibling && u.nextSibling.dataset), o)) var w = o.dgst;
      return (
        (o = w), (d = Error(i(419))), (o = Nc(d, o, void 0)), pa(e, t, x, o)
      );
    }
    if (((w = (x & e.childLanes) !== 0), Mn || w)) {
      if (((o = At), o !== null)) {
        switch (x & -x) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = (u & (o.suspendedLanes | x)) !== 0 ? 0 : u),
          u !== 0 &&
            u !== d.retryLane &&
            ((d.retryLane = u), ei(e, u), Pr(o, e, u, -1));
      }
      return Xc(), (o = Nc(Error(i(421)))), pa(e, t, x, o);
    }
    return u.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = qg.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = d.treeContext),
        (Wn = _i(u.nextSibling)),
        (Hn = t),
        (it = !0),
        (jr = null),
        e !== null &&
          ((lr[or++] = Kr),
          (lr[or++] = Jr),
          (lr[or++] = qi),
          (Kr = e.id),
          (Jr = e.overflow),
          (qi = t)),
        (t = Rc(t, o.children)),
        (t.flags |= 4096),
        t);
  }
  function gh(e, t, r) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), ac(e.return, t, r);
  }
  function bc(e, t, r, o, u) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: r,
          tailMode: u,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = o),
        (d.tail = r),
        (d.tailMode = u));
  }
  function xh(e, t, r) {
    var o = t.pendingProps,
      u = o.revealOrder,
      d = o.tail;
    if ((pn(e, t, o.children, r), (o = ot.current), (o & 2) !== 0))
      (o = (o & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && gh(e, r, t);
          else if (e.tag === 19) gh(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      o &= 1;
    }
    if ((Ge(ot, o), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (r = t.child, u = null; r !== null; )
            (e = r.alternate),
              e !== null && la(e) === null && (u = r),
              (r = r.sibling);
          (r = u),
            r === null
              ? ((u = t.child), (t.child = null))
              : ((u = r.sibling), (r.sibling = null)),
            bc(t, !1, u, r, d);
          break;
        case "backwards":
          for (r = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && la(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = r), (r = u), (u = e);
          }
          bc(t, !0, r, null, d);
          break;
        case "together":
          bc(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ha(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function ni(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ns |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Pi(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Pi(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Fg(e, t, r) {
    switch (t.tag) {
      case 3:
        ph(t), Bs();
        break;
      case 5:
        Rp(t);
        break;
      case 1:
        Tn(t.type) && Zo(t);
        break;
      case 4:
        fc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var o = t.type._context,
          u = t.memoizedProps.value;
        Ge(na, o._currentValue), (o._currentValue = u);
        break;
      case 13:
        if (((o = t.memoizedState), o !== null))
          return o.dehydrated !== null
            ? (Ge(ot, ot.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? mh(e, t, r)
            : (Ge(ot, ot.current & 1),
              (e = ni(e, t, r)),
              e !== null ? e.sibling : null);
        Ge(ot, ot.current & 1);
        break;
      case 19:
        if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (o) return xh(e, t, r);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Ge(ot, ot.current),
          o)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ch(e, t, r);
    }
    return ni(e, t, r);
  }
  var vh, zc, _h, yh;
  (vh = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (zc = function () {}),
    (_h = function (e, t, r, o) {
      var u = e.memoizedProps;
      if (u !== o) {
        (e = t.stateNode), es(Ir.current);
        var d = null;
        switch (r) {
          case "input":
            (u = qe(e, u)), (o = qe(e, o)), (d = []);
            break;
          case "select":
            (u = S({}, u, { value: void 0 })),
              (o = S({}, o, { value: void 0 })),
              (d = []);
            break;
          case "textarea":
            (u = Bn(e, u)), (o = Bn(e, o)), (d = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof o.onClick == "function" &&
              (e.onclick = Xo);
        }
        zr(r, o);
        var x;
        r = null;
        for (b in u)
          if (!o.hasOwnProperty(b) && u.hasOwnProperty(b) && u[b] != null)
            if (b === "style") {
              var w = u[b];
              for (x in w) w.hasOwnProperty(x) && (r || (r = {}), (r[x] = ""));
            } else
              b !== "dangerouslySetInnerHTML" &&
                b !== "children" &&
                b !== "suppressContentEditableWarning" &&
                b !== "suppressHydrationWarning" &&
                b !== "autoFocus" &&
                (l.hasOwnProperty(b)
                  ? d || (d = [])
                  : (d = d || []).push(b, null));
        for (b in o) {
          var N = o[b];
          if (
            ((w = u?.[b]),
            o.hasOwnProperty(b) && N !== w && (N != null || w != null))
          )
            if (b === "style")
              if (w) {
                for (x in w)
                  !w.hasOwnProperty(x) ||
                    (N && N.hasOwnProperty(x)) ||
                    (r || (r = {}), (r[x] = ""));
                for (x in N)
                  N.hasOwnProperty(x) &&
                    w[x] !== N[x] &&
                    (r || (r = {}), (r[x] = N[x]));
              } else r || (d || (d = []), d.push(b, r)), (r = N);
            else
              b === "dangerouslySetInnerHTML"
                ? ((N = N ? N.__html : void 0),
                  (w = w ? w.__html : void 0),
                  N != null && w !== N && (d = d || []).push(b, N))
                : b === "children"
                ? (typeof N != "string" && typeof N != "number") ||
                  (d = d || []).push(b, "" + N)
                : b !== "suppressContentEditableWarning" &&
                  b !== "suppressHydrationWarning" &&
                  (l.hasOwnProperty(b)
                    ? (N != null && b === "onScroll" && et("scroll", e),
                      d || w === N || (d = []))
                    : (d = d || []).push(b, N));
        }
        r && (d = d || []).push("style", r);
        var b = d;
        (t.updateQueue = b) && (t.flags |= 4);
      }
    }),
    (yh = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    });
  function Hl(e, t) {
    if (!it)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), (r = r.sibling);
          o === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function en(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      o = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags & 14680064),
          (o |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (o |= u.subtreeFlags),
          (o |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= o), (e.childLanes = r), t;
  }
  function Bg(e, t, r) {
    var o = t.pendingProps;
    switch ((tc(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return en(t), null;
      case 1:
        return Tn(t.type) && Qo(), en(t), null;
      case 3:
        return (
          (o = t.stateNode),
          Hs(),
          tt(En),
          tt(Kt),
          hc(),
          o.pendingContext &&
            ((o.context = o.pendingContext), (o.pendingContext = null)),
          (e === null || e.child === null) &&
            (ea(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), jr !== null && (Hc(jr), (jr = null)))),
          zc(e, t),
          en(t),
          null
        );
      case 5:
        dc(t);
        var u = es(Fl.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          _h(e, t, r, o, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return en(t), null;
          }
          if (((e = es(Ir.current)), ea(t))) {
            (o = t.stateNode), (r = t.type);
            var d = t.memoizedProps;
            switch (((o[Ar] = t), (o[Dl] = d), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                et("cancel", o), et("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                et("load", o);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Rl.length; u++) et(Rl[u], o);
                break;
              case "source":
                et("error", o);
                break;
              case "img":
              case "image":
              case "link":
                et("error", o), et("load", o);
                break;
              case "details":
                et("toggle", o);
                break;
              case "input":
                Ht(o, d), et("invalid", o);
                break;
              case "select":
                (o._wrapperState = { wasMultiple: !!d.multiple }),
                  et("invalid", o);
                break;
              case "textarea":
                _r(o, d), et("invalid", o);
            }
            zr(r, d), (u = null);
            for (var x in d)
              if (d.hasOwnProperty(x)) {
                var w = d[x];
                x === "children"
                  ? typeof w == "string"
                    ? o.textContent !== w &&
                      (d.suppressHydrationWarning !== !0 &&
                        Yo(o.textContent, w, e),
                      (u = ["children", w]))
                    : typeof w == "number" &&
                      o.textContent !== "" + w &&
                      (d.suppressHydrationWarning !== !0 &&
                        Yo(o.textContent, w, e),
                      (u = ["children", "" + w]))
                  : l.hasOwnProperty(x) &&
                    w != null &&
                    x === "onScroll" &&
                    et("scroll", o);
              }
            switch (r) {
              case "input":
                wt(o), Zt(o, d, !0);
                break;
              case "textarea":
                wt(o), mt(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Xo);
            }
            (o = u), (t.updateQueue = o), o !== null && (t.flags |= 4);
          } else {
            (x = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = yr(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = x.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof o.is == "string"
                  ? (e = x.createElement(r, { is: o.is }))
                  : ((e = x.createElement(r)),
                    r === "select" &&
                      ((x = e),
                      o.multiple
                        ? (x.multiple = !0)
                        : o.size && (x.size = o.size)))
                : (e = x.createElementNS(e, r)),
              (e[Ar] = t),
              (e[Dl] = o),
              vh(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((x = ir(r, o)), r)) {
                case "dialog":
                  et("cancel", e), et("close", e), (u = o);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  et("load", e), (u = o);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Rl.length; u++) et(Rl[u], e);
                  u = o;
                  break;
                case "source":
                  et("error", e), (u = o);
                  break;
                case "img":
                case "image":
                case "link":
                  et("error", e), et("load", e), (u = o);
                  break;
                case "details":
                  et("toggle", e), (u = o);
                  break;
                case "input":
                  Ht(e, o), (u = qe(e, o)), et("invalid", e);
                  break;
                case "option":
                  u = o;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!o.multiple }),
                    (u = S({}, o, { value: void 0 })),
                    et("invalid", e);
                  break;
                case "textarea":
                  _r(e, o), (u = Bn(e, o)), et("invalid", e);
                  break;
                default:
                  u = o;
              }
              zr(r, u), (w = u);
              for (d in w)
                if (w.hasOwnProperty(d)) {
                  var N = w[d];
                  d === "style"
                    ? rr(e, N)
                    : d === "dangerouslySetInnerHTML"
                    ? ((N = N ? N.__html : void 0), N != null && un(e, N))
                    : d === "children"
                    ? typeof N == "string"
                      ? (r !== "textarea" || N !== "") && cn(e, N)
                      : typeof N == "number" && cn(e, "" + N)
                    : d !== "suppressContentEditableWarning" &&
                      d !== "suppressHydrationWarning" &&
                      d !== "autoFocus" &&
                      (l.hasOwnProperty(d)
                        ? N != null && d === "onScroll" && et("scroll", e)
                        : N != null && B(e, d, N, x));
                }
              switch (r) {
                case "input":
                  wt(e), Zt(e, o, !1);
                  break;
                case "textarea":
                  wt(e), mt(e);
                  break;
                case "option":
                  o.value != null && e.setAttribute("value", "" + Se(o.value));
                  break;
                case "select":
                  (e.multiple = !!o.multiple),
                    (d = o.value),
                    d != null
                      ? Ue(e, !!o.multiple, d, !1)
                      : o.defaultValue != null &&
                        Ue(e, !!o.multiple, o.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = Xo);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return en(t), null;
      case 6:
        if (e && t.stateNode != null) yh(e, t, e.memoizedProps, o);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(i(166));
          if (((r = es(Fl.current)), es(Ir.current), ea(t))) {
            if (
              ((o = t.stateNode),
              (r = t.memoizedProps),
              (o[Ar] = t),
              (d = o.nodeValue !== r) && ((e = Hn), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Yo(o.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Yo(o.nodeValue, r, (e.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            (o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
              (o[Ar] = t),
              (t.stateNode = o);
        }
        return en(t), null;
      case 13:
        if (
          (tt(ot),
          (o = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (it && Wn !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Cp(), Bs(), (t.flags |= 98560), (d = !1);
          else if (((d = ea(t)), o !== null && o.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (
                ((d = t.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(i(317));
              d[Ar] = t;
            } else
              Bs(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            en(t), (d = !1);
          } else jr !== null && (Hc(jr), (jr = null)), (d = !0);
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((o = o !== null),
            o !== (e !== null && e.memoizedState !== null) &&
              o &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (ot.current & 1) !== 0
                  ? Pt === 0 && (Pt = 3)
                  : Xc())),
            t.updateQueue !== null && (t.flags |= 4),
            en(t),
            null);
      case 4:
        return (
          Hs(),
          zc(e, t),
          e === null && bl(t.stateNode.containerInfo),
          en(t),
          null
        );
      case 10:
        return oc(t.type._context), en(t), null;
      case 17:
        return Tn(t.type) && Qo(), en(t), null;
      case 19:
        if ((tt(ot), (d = t.memoizedState), d === null)) return en(t), null;
        if (((o = (t.flags & 128) !== 0), (x = d.rendering), x === null))
          if (o) Hl(d, !1);
          else {
            if (Pt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((x = la(e)), x !== null)) {
                  for (
                    t.flags |= 128,
                      Hl(d, !1),
                      o = x.updateQueue,
                      o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      o = r,
                      r = t.child;
                    r !== null;

                  )
                    (d = r),
                      (e = o),
                      (d.flags &= 14680066),
                      (x = d.alternate),
                      x === null
                        ? ((d.childLanes = 0),
                          (d.lanes = e),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = x.childLanes),
                          (d.lanes = x.lanes),
                          (d.child = x.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = x.memoizedProps),
                          (d.memoizedState = x.memoizedState),
                          (d.updateQueue = x.updateQueue),
                          (d.type = x.type),
                          (e = x.dependencies),
                          (d.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Ge(ot, (ot.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null &&
              Re() > Gs &&
              ((t.flags |= 128), (o = !0), Hl(d, !1), (t.lanes = 4194304));
          }
        else {
          if (!o)
            if (((e = la(x)), e !== null)) {
              if (
                ((t.flags |= 128),
                (o = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                Hl(d, !0),
                d.tail === null &&
                  d.tailMode === "hidden" &&
                  !x.alternate &&
                  !it)
              )
                return en(t), null;
            } else
              2 * Re() - d.renderingStartTime > Gs &&
                r !== 1073741824 &&
                ((t.flags |= 128), (o = !0), Hl(d, !1), (t.lanes = 4194304));
          d.isBackwards
            ? ((x.sibling = t.child), (t.child = x))
            : ((r = d.last),
              r !== null ? (r.sibling = x) : (t.child = x),
              (d.last = x));
        }
        return d.tail !== null
          ? ((t = d.tail),
            (d.rendering = t),
            (d.tail = t.sibling),
            (d.renderingStartTime = Re()),
            (t.sibling = null),
            (r = ot.current),
            Ge(ot, o ? (r & 1) | 2 : r & 1),
            t)
          : (en(t), null);
      case 22:
      case 23:
        return (
          Yc(),
          (o = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
          o && (t.mode & 1) !== 0
            ? (Yn & 1073741824) !== 0 &&
              (en(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : en(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function Ug(e, t) {
    switch ((tc(t), t.tag)) {
      case 1:
        return (
          Tn(t.type) && Qo(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Hs(),
          tt(En),
          tt(Kt),
          hc(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return dc(t), null;
      case 13:
        if (
          (tt(ot), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Bs();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return tt(ot), null;
      case 4:
        return Hs(), null;
      case 10:
        return oc(t.type._context), null;
      case 22:
      case 23:
        return Yc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ma = !1,
    tn = !1,
    $g = typeof WeakSet == "function" ? WeakSet : Set,
    te = null;
  function Ys(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (o) {
          pt(e, t, o);
        }
      else r.current = null;
  }
  function Dc(e, t, r) {
    try {
      r();
    } catch (o) {
      pt(e, t, o);
    }
  }
  var wh = !1;
  function Vg(e, t) {
    if (((Yu = Oo), (e = Jd()), Iu(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var o = r.getSelection && r.getSelection();
          if (o && o.rangeCount !== 0) {
            r = o.anchorNode;
            var u = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              r.nodeType, d.nodeType;
            } catch {
              r = null;
              break e;
            }
            var x = 0,
              w = -1,
              N = -1,
              b = 0,
              W = 0,
              G = e,
              H = null;
            t: for (;;) {
              for (
                var J;
                G !== r || (u !== 0 && G.nodeType !== 3) || (w = x + u),
                  G !== d || (o !== 0 && G.nodeType !== 3) || (N = x + o),
                  G.nodeType === 3 && (x += G.nodeValue.length),
                  (J = G.firstChild) !== null;

              )
                (H = G), (G = J);
              for (;;) {
                if (G === e) break t;
                if (
                  (H === r && ++b === u && (w = x),
                  H === d && ++W === o && (N = x),
                  (J = G.nextSibling) !== null)
                )
                  break;
                (G = H), (H = G.parentNode);
              }
              G = J;
            }
            r = w === -1 || N === -1 ? null : { start: w, end: N };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Xu = { focusedElem: e, selectionRange: r }, Oo = !1, te = t;
      te !== null;

    )
      if (
        ((t = te), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (te = e);
      else
        for (; te !== null; ) {
          t = te;
          try {
            var re = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (re !== null) {
                    var ie = re.memoizedProps,
                      xt = re.memoizedState,
                      P = t.stateNode,
                      E = P.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ie : Er(t.type, ie),
                        xt
                      );
                    P.__reactInternalSnapshotBeforeUpdate = E;
                  }
                  break;
                case 3:
                  var R = t.stateNode.containerInfo;
                  R.nodeType === 1
                    ? (R.textContent = "")
                    : R.nodeType === 9 &&
                      R.documentElement &&
                      R.removeChild(R.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (Q) {
            pt(t, t.return, Q);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (te = e);
            break;
          }
          te = t.return;
        }
    return (re = wh), (wh = !1), re;
  }
  function Wl(e, t, r) {
    var o = t.updateQueue;
    if (((o = o !== null ? o.lastEffect : null), o !== null)) {
      var u = (o = o.next);
      do {
        if ((u.tag & e) === e) {
          var d = u.destroy;
          (u.destroy = void 0), d !== void 0 && Dc(t, r, d);
        }
        u = u.next;
      } while (u !== o);
    }
  }
  function ga(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var o = r.create;
          r.destroy = o();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Oc(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function kh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), kh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ar],
          delete t[Dl],
          delete t[qu],
          delete t[Ng],
          delete t[jg])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ch(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Sh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ch(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Lc(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = Xo));
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Lc(e, t, r), e = e.sibling; e !== null; )
        Lc(e, t, r), (e = e.sibling);
  }
  function Ac(e, t, r) {
    var o = e.tag;
    if (o === 5 || o === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (o !== 4 && ((e = e.child), e !== null))
      for (Ac(e, t, r), e = e.sibling; e !== null; )
        Ac(e, t, r), (e = e.sibling);
  }
  var Wt = null,
    Tr = !1;
  function Ni(e, t, r) {
    for (r = r.child; r !== null; ) Nh(e, t, r), (r = r.sibling);
  }
  function Nh(e, t, r) {
    if (dn && typeof dn.onCommitFiberUnmount == "function")
      try {
        dn.onCommitFiberUnmount(Or, r);
      } catch {}
    switch (r.tag) {
      case 5:
        tn || Ys(r, t);
      case 6:
        var o = Wt,
          u = Tr;
        (Wt = null),
          Ni(e, t, r),
          (Wt = o),
          (Tr = u),
          Wt !== null &&
            (Tr
              ? ((e = Wt),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : Wt.removeChild(r.stateNode));
        break;
      case 18:
        Wt !== null &&
          (Tr
            ? ((e = Wt),
              (r = r.stateNode),
              e.nodeType === 8
                ? Zu(e.parentNode, r)
                : e.nodeType === 1 && Zu(e, r),
              Cl(e))
            : Zu(Wt, r.stateNode));
        break;
      case 4:
        (o = Wt),
          (u = Tr),
          (Wt = r.stateNode.containerInfo),
          (Tr = !0),
          Ni(e, t, r),
          (Wt = o),
          (Tr = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !tn &&
          ((o = r.updateQueue), o !== null && ((o = o.lastEffect), o !== null))
        ) {
          u = o = o.next;
          do {
            var d = u,
              x = d.destroy;
            (d = d.tag),
              x !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && Dc(r, t, x),
              (u = u.next);
          } while (u !== o);
        }
        Ni(e, t, r);
        break;
      case 1:
        if (
          !tn &&
          (Ys(r, t),
          (o = r.stateNode),
          typeof o.componentWillUnmount == "function")
        )
          try {
            (o.props = r.memoizedProps),
              (o.state = r.memoizedState),
              o.componentWillUnmount();
          } catch (w) {
            pt(r, t, w);
          }
        Ni(e, t, r);
        break;
      case 21:
        Ni(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((tn = (o = tn) || r.memoizedState !== null), Ni(e, t, r), (tn = o))
          : Ni(e, t, r);
        break;
      default:
        Ni(e, t, r);
    }
  }
  function jh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new $g()),
        t.forEach(function (o) {
          var u = Kg.bind(null, e, o);
          r.has(o) || (r.add(o), o.then(u, u));
        });
    }
  }
  function Mr(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var o = 0; o < r.length; o++) {
        var u = r[o];
        try {
          var d = e,
            x = t,
            w = x;
          e: for (; w !== null; ) {
            switch (w.tag) {
              case 5:
                (Wt = w.stateNode), (Tr = !1);
                break e;
              case 3:
                (Wt = w.stateNode.containerInfo), (Tr = !0);
                break e;
              case 4:
                (Wt = w.stateNode.containerInfo), (Tr = !0);
                break e;
            }
            w = w.return;
          }
          if (Wt === null) throw Error(i(160));
          Nh(d, x, u), (Wt = null), (Tr = !1);
          var N = u.alternate;
          N !== null && (N.return = null), (u.return = null);
        } catch (b) {
          pt(u, t, b);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Eh(t, e), (t = t.sibling);
  }
  function Eh(e, t) {
    var r = e.alternate,
      o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mr(t, e), Br(e), o & 4)) {
          try {
            Wl(3, e, e.return), ga(3, e);
          } catch (ie) {
            pt(e, e.return, ie);
          }
          try {
            Wl(5, e, e.return);
          } catch (ie) {
            pt(e, e.return, ie);
          }
        }
        break;
      case 1:
        Mr(t, e), Br(e), o & 512 && r !== null && Ys(r, r.return);
        break;
      case 5:
        if (
          (Mr(t, e),
          Br(e),
          o & 512 && r !== null && Ys(r, r.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            cn(u, "");
          } catch (ie) {
            pt(e, e.return, ie);
          }
        }
        if (o & 4 && ((u = e.stateNode), u != null)) {
          var d = e.memoizedProps,
            x = r !== null ? r.memoizedProps : d,
            w = e.type,
            N = e.updateQueue;
          if (((e.updateQueue = null), N !== null))
            try {
              w === "input" && d.type === "radio" && d.name != null && Qt(u, d),
                ir(w, x);
              var b = ir(w, d);
              for (x = 0; x < N.length; x += 2) {
                var W = N[x],
                  G = N[x + 1];
                W === "style"
                  ? rr(u, G)
                  : W === "dangerouslySetInnerHTML"
                  ? un(u, G)
                  : W === "children"
                  ? cn(u, G)
                  : B(u, W, G, b);
              }
              switch (w) {
                case "input":
                  D(u, d);
                  break;
                case "textarea":
                  br(u, d);
                  break;
                case "select":
                  var H = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!d.multiple;
                  var J = d.value;
                  J != null
                    ? Ue(u, !!d.multiple, J, !1)
                    : H !== !!d.multiple &&
                      (d.defaultValue != null
                        ? Ue(u, !!d.multiple, d.defaultValue, !0)
                        : Ue(u, !!d.multiple, d.multiple ? [] : "", !1));
              }
              u[Dl] = d;
            } catch (ie) {
              pt(e, e.return, ie);
            }
        }
        break;
      case 6:
        if ((Mr(t, e), Br(e), o & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (u = e.stateNode), (d = e.memoizedProps);
          try {
            u.nodeValue = d;
          } catch (ie) {
            pt(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (
          (Mr(t, e), Br(e), o & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Cl(t.containerInfo);
          } catch (ie) {
            pt(e, e.return, ie);
          }
        break;
      case 4:
        Mr(t, e), Br(e);
        break;
      case 13:
        Mr(t, e),
          Br(e),
          (u = e.child),
          u.flags & 8192 &&
            ((d = u.memoizedState !== null),
            (u.stateNode.isHidden = d),
            !d ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (Bc = Re())),
          o & 4 && jh(e);
        break;
      case 22:
        if (
          ((W = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((tn = (b = tn) || W), Mr(t, e), (tn = b)) : Mr(t, e),
          Br(e),
          o & 8192)
        ) {
          if (
            ((b = e.memoizedState !== null),
            (e.stateNode.isHidden = b) && !W && (e.mode & 1) !== 0)
          )
            for (te = e, W = e.child; W !== null; ) {
              for (G = te = W; te !== null; ) {
                switch (((H = te), (J = H.child), H.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Wl(4, H, H.return);
                    break;
                  case 1:
                    Ys(H, H.return);
                    var re = H.stateNode;
                    if (typeof re.componentWillUnmount == "function") {
                      (o = H), (r = H.return);
                      try {
                        (t = o),
                          (re.props = t.memoizedProps),
                          (re.state = t.memoizedState),
                          re.componentWillUnmount();
                      } catch (ie) {
                        pt(o, r, ie);
                      }
                    }
                    break;
                  case 5:
                    Ys(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      Ph(G);
                      continue;
                    }
                }
                J !== null ? ((J.return = H), (te = J)) : Ph(G);
              }
              W = W.sibling;
            }
          e: for (W = null, G = e; ; ) {
            if (G.tag === 5) {
              if (W === null) {
                W = G;
                try {
                  (u = G.stateNode),
                    b
                      ? ((d = u.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none"))
                      : ((w = G.stateNode),
                        (N = G.memoizedProps.style),
                        (x =
                          N != null && N.hasOwnProperty("display")
                            ? N.display
                            : null),
                        (w.style.display = Yi("display", x)));
                } catch (ie) {
                  pt(e, e.return, ie);
                }
              }
            } else if (G.tag === 6) {
              if (W === null)
                try {
                  G.stateNode.nodeValue = b ? "" : G.memoizedProps;
                } catch (ie) {
                  pt(e, e.return, ie);
                }
            } else if (
              ((G.tag !== 22 && G.tag !== 23) ||
                G.memoizedState === null ||
                G === e) &&
              G.child !== null
            ) {
              (G.child.return = G), (G = G.child);
              continue;
            }
            if (G === e) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === e) break e;
              W === G && (W = null), (G = G.return);
            }
            W === G && (W = null),
              (G.sibling.return = G.return),
              (G = G.sibling);
          }
        }
        break;
      case 19:
        Mr(t, e), Br(e), o & 4 && jh(e);
        break;
      case 21:
        break;
      default:
        Mr(t, e), Br(e);
    }
  }
  function Br(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Ch(r)) {
              var o = r;
              break e;
            }
            r = r.return;
          }
          throw Error(i(160));
        }
        switch (o.tag) {
          case 5:
            var u = o.stateNode;
            o.flags & 32 && (cn(u, ""), (o.flags &= -33));
            var d = Sh(e);
            Ac(e, d, u);
            break;
          case 3:
          case 4:
            var x = o.stateNode.containerInfo,
              w = Sh(e);
            Lc(e, w, x);
            break;
          default:
            throw Error(i(161));
        }
      } catch (N) {
        pt(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hg(e, t, r) {
    (te = e), Th(e);
  }
  function Th(e, t, r) {
    for (var o = (e.mode & 1) !== 0; te !== null; ) {
      var u = te,
        d = u.child;
      if (u.tag === 22 && o) {
        var x = u.memoizedState !== null || ma;
        if (!x) {
          var w = u.alternate,
            N = (w !== null && w.memoizedState !== null) || tn;
          w = ma;
          var b = tn;
          if (((ma = x), (tn = N) && !b))
            for (te = u; te !== null; )
              (x = te),
                (N = x.child),
                x.tag === 22 && x.memoizedState !== null
                  ? Rh(u)
                  : N !== null
                  ? ((N.return = x), (te = N))
                  : Rh(u);
          for (; d !== null; ) (te = d), Th(d), (d = d.sibling);
          (te = u), (ma = w), (tn = b);
        }
        Mh(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && d !== null
          ? ((d.return = u), (te = d))
          : Mh(e);
    }
  }
  function Mh(e) {
    for (; te !== null; ) {
      var t = te;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                tn || ga(5, t);
                break;
              case 1:
                var o = t.stateNode;
                if (t.flags & 4 && !tn)
                  if (r === null) o.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Er(t.type, r.memoizedProps);
                    o.componentDidUpdate(
                      u,
                      r.memoizedState,
                      o.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var d = t.updateQueue;
                d !== null && Pp(t, d, o);
                break;
              case 3:
                var x = t.updateQueue;
                if (x !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Pp(t, x, r);
                }
                break;
              case 5:
                var w = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = w;
                  var N = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      N.autoFocus && r.focus();
                      break;
                    case "img":
                      N.src && (r.src = N.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var b = t.alternate;
                  if (b !== null) {
                    var W = b.memoizedState;
                    if (W !== null) {
                      var G = W.dehydrated;
                      G !== null && Cl(G);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          tn || (t.flags & 512 && Oc(t));
        } catch (H) {
          pt(t, t.return, H);
        }
      }
      if (t === e) {
        te = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (te = r);
        break;
      }
      te = t.return;
    }
  }
  function Ph(e) {
    for (; te !== null; ) {
      var t = te;
      if (t === e) {
        te = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (te = r);
        break;
      }
      te = t.return;
    }
  }
  function Rh(e) {
    for (; te !== null; ) {
      var t = te;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              ga(4, t);
            } catch (N) {
              pt(t, r, N);
            }
            break;
          case 1:
            var o = t.stateNode;
            if (typeof o.componentDidMount == "function") {
              var u = t.return;
              try {
                o.componentDidMount();
              } catch (N) {
                pt(t, u, N);
              }
            }
            var d = t.return;
            try {
              Oc(t);
            } catch (N) {
              pt(t, d, N);
            }
            break;
          case 5:
            var x = t.return;
            try {
              Oc(t);
            } catch (N) {
              pt(t, x, N);
            }
        }
      } catch (N) {
        pt(t, t.return, N);
      }
      if (t === e) {
        te = null;
        break;
      }
      var w = t.sibling;
      if (w !== null) {
        (w.return = t.return), (te = w);
        break;
      }
      te = t.return;
    }
  }
  var Wg = Math.ceil,
    xa = z.ReactCurrentDispatcher,
    Ic = z.ReactCurrentOwner,
    cr = z.ReactCurrentBatchConfig,
    Ie = 0,
    At = null,
    St = null,
    Yt = 0,
    Yn = 0,
    Xs = yi(0),
    Pt = 0,
    Yl = null,
    ns = 0,
    va = 0,
    Fc = 0,
    Xl = null,
    Pn = null,
    Bc = 0,
    Gs = 1 / 0,
    ri = null,
    _a = !1,
    Uc = null,
    ji = null,
    ya = !1,
    Ei = null,
    wa = 0,
    Gl = 0,
    $c = null,
    ka = -1,
    Ca = 0;
  function hn() {
    return (Ie & 6) !== 0 ? Re() : ka !== -1 ? ka : (ka = Re());
  }
  function Ti(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ie & 2) !== 0 && Yt !== 0
      ? Yt & -Yt
      : Tg.transition !== null
      ? (Ca === 0 && (Ca = Sd()), Ca)
      : ((e = $e),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zd(e.type))),
        e);
  }
  function Pr(e, t, r, o) {
    if (50 < Gl) throw ((Gl = 0), ($c = null), Error(i(185)));
    vl(e, r, o),
      ((Ie & 2) === 0 || e !== At) &&
        (e === At && ((Ie & 2) === 0 && (va |= r), Pt === 4 && Mi(e, Yt)),
        Rn(e, o),
        r === 1 &&
          Ie === 0 &&
          (t.mode & 1) === 0 &&
          ((Gs = Re() + 500), qo && ki()));
  }
  function Rn(e, t) {
    var r = e.callbackNode;
    Tm(e, t);
    var o = bo(e, e === At ? Yt : 0);
    if (o === 0)
      r !== null && Tt(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = o & -o), e.callbackPriority !== t)) {
      if ((r != null && Tt(r), t === 1))
        e.tag === 0 ? Eg(zh.bind(null, e)) : vp(zh.bind(null, e)),
          Cg(function () {
            (Ie & 6) === 0 && ki();
          }),
          (r = null);
      else {
        switch (Nd(o)) {
          case 1:
            r = jn;
            break;
          case 4:
            r = Es;
            break;
          case 16:
            r = Xi;
            break;
          case 536870912:
            r = $n;
            break;
          default:
            r = Xi;
        }
        r = Uh(r, bh.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function bh(e, t) {
    if (((ka = -1), (Ca = 0), (Ie & 6) !== 0)) throw Error(i(327));
    var r = e.callbackNode;
    if (Qs() && e.callbackNode !== r) return null;
    var o = bo(e, e === At ? Yt : 0);
    if (o === 0) return null;
    if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Sa(e, o);
    else {
      t = o;
      var u = Ie;
      Ie |= 2;
      var d = Oh();
      (At !== e || Yt !== t) && ((ri = null), (Gs = Re() + 500), is(e, t));
      do
        try {
          Gg();
          break;
        } catch (w) {
          Dh(e, w);
        }
      while (!0);
      lc(),
        (xa.current = d),
        (Ie = u),
        St !== null ? (t = 0) : ((At = null), (Yt = 0), (t = Pt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = ku(e)), u !== 0 && ((o = u), (t = Vc(e, u)))),
        t === 1)
      )
        throw ((r = Yl), is(e, 0), Mi(e, o), Rn(e, Re()), r);
      if (t === 6) Mi(e, o);
      else {
        if (
          ((u = e.current.alternate),
          (o & 30) === 0 &&
            !Yg(u) &&
            ((t = Sa(e, o)),
            t === 2 && ((d = ku(e)), d !== 0 && ((o = d), (t = Vc(e, d)))),
            t === 1))
        )
          throw ((r = Yl), is(e, 0), Mi(e, o), Rn(e, Re()), r);
        switch (((e.finishedWork = u), (e.finishedLanes = o), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            ss(e, Pn, ri);
            break;
          case 3:
            if (
              (Mi(e, o),
              (o & 130023424) === o && ((t = Bc + 500 - Re()), 10 < t))
            ) {
              if (bo(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & o) !== o)) {
                hn(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = Qu(ss.bind(null, e, Pn, ri), t);
              break;
            }
            ss(e, Pn, ri);
            break;
          case 4:
            if ((Mi(e, o), (o & 4194240) === o)) break;
            for (t = e.eventTimes, u = -1; 0 < o; ) {
              var x = 31 - Sr(o);
              (d = 1 << x), (x = t[x]), x > u && (u = x), (o &= ~d);
            }
            if (
              ((o = u),
              (o = Re() - o),
              (o =
                (120 > o
                  ? 120
                  : 480 > o
                  ? 480
                  : 1080 > o
                  ? 1080
                  : 1920 > o
                  ? 1920
                  : 3e3 > o
                  ? 3e3
                  : 4320 > o
                  ? 4320
                  : 1960 * Wg(o / 1960)) - o),
              10 < o)
            ) {
              e.timeoutHandle = Qu(ss.bind(null, e, Pn, ri), o);
              break;
            }
            ss(e, Pn, ri);
            break;
          case 5:
            ss(e, Pn, ri);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Rn(e, Re()), e.callbackNode === r ? bh.bind(null, e) : null;
  }
  function Vc(e, t) {
    var r = Xl;
    return (
      e.current.memoizedState.isDehydrated && (is(e, t).flags |= 256),
      (e = Sa(e, t)),
      e !== 2 && ((t = Pn), (Pn = r), t !== null && Hc(t)),
      e
    );
  }
  function Hc(e) {
    Pn === null ? (Pn = e) : Pn.push.apply(Pn, e);
  }
  function Yg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var o = 0; o < r.length; o++) {
            var u = r[o],
              d = u.getSnapshot;
            u = u.value;
            try {
              if (!Nr(d(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Mi(e, t) {
    for (
      t &= ~Fc,
        t &= ~va,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Sr(t),
        o = 1 << r;
      (e[r] = -1), (t &= ~o);
    }
  }
  function zh(e) {
    if ((Ie & 6) !== 0) throw Error(i(327));
    Qs();
    var t = bo(e, 0);
    if ((t & 1) === 0) return Rn(e, Re()), null;
    var r = Sa(e, t);
    if (e.tag !== 0 && r === 2) {
      var o = ku(e);
      o !== 0 && ((t = o), (r = Vc(e, o)));
    }
    if (r === 1) throw ((r = Yl), is(e, 0), Mi(e, t), Rn(e, Re()), r);
    if (r === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ss(e, Pn, ri),
      Rn(e, Re()),
      null
    );
  }
  function Wc(e, t) {
    var r = Ie;
    Ie |= 1;
    try {
      return e(t);
    } finally {
      (Ie = r), Ie === 0 && ((Gs = Re() + 500), qo && ki());
    }
  }
  function rs(e) {
    Ei !== null && Ei.tag === 0 && (Ie & 6) === 0 && Qs();
    var t = Ie;
    Ie |= 1;
    var r = cr.transition,
      o = $e;
    try {
      if (((cr.transition = null), ($e = 1), e)) return e();
    } finally {
      ($e = o), (cr.transition = r), (Ie = t), (Ie & 6) === 0 && ki();
    }
  }
  function Yc() {
    (Yn = Xs.current), tt(Xs);
  }
  function is(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), kg(r)), St !== null))
      for (r = St.return; r !== null; ) {
        var o = r;
        switch ((tc(o), o.tag)) {
          case 1:
            (o = o.type.childContextTypes), o != null && Qo();
            break;
          case 3:
            Hs(), tt(En), tt(Kt), hc();
            break;
          case 5:
            dc(o);
            break;
          case 4:
            Hs();
            break;
          case 13:
            tt(ot);
            break;
          case 19:
            tt(ot);
            break;
          case 10:
            oc(o.type._context);
            break;
          case 22:
          case 23:
            Yc();
        }
        r = r.return;
      }
    if (
      ((At = e),
      (St = e = Pi(e.current, null)),
      (Yt = Yn = t),
      (Pt = 0),
      (Yl = null),
      (Fc = va = ns = 0),
      (Pn = Xl = null),
      Ji !== null)
    ) {
      for (t = 0; t < Ji.length; t++)
        if (((r = Ji[t]), (o = r.interleaved), o !== null)) {
          r.interleaved = null;
          var u = o.next,
            d = r.pending;
          if (d !== null) {
            var x = d.next;
            (d.next = u), (o.next = x);
          }
          r.pending = o;
        }
      Ji = null;
    }
    return e;
  }
  function Dh(e, t) {
    do {
      var r = St;
      try {
        if ((lc(), (oa.current = fa), aa)) {
          for (var o = at.memoizedState; o !== null; ) {
            var u = o.queue;
            u !== null && (u.pending = null), (o = o.next);
          }
          aa = !1;
        }
        if (
          ((ts = 0),
          (Lt = Mt = at = null),
          (Bl = !1),
          (Ul = 0),
          (Ic.current = null),
          r === null || r.return === null)
        ) {
          (Pt = 1), (Yl = t), (St = null);
          break;
        }
        e: {
          var d = e,
            x = r.return,
            w = r,
            N = t;
          if (
            ((t = Yt),
            (w.flags |= 32768),
            N !== null && typeof N == "object" && typeof N.then == "function")
          ) {
            var b = N,
              W = w,
              G = W.tag;
            if ((W.mode & 1) === 0 && (G === 0 || G === 11 || G === 15)) {
              var H = W.alternate;
              H
                ? ((W.updateQueue = H.updateQueue),
                  (W.memoizedState = H.memoizedState),
                  (W.lanes = H.lanes))
                : ((W.updateQueue = null), (W.memoizedState = null));
            }
            var J = sh(x);
            if (J !== null) {
              (J.flags &= -257),
                lh(J, x, w, d, t),
                J.mode & 1 && ih(d, b, t),
                (t = J),
                (N = b);
              var re = t.updateQueue;
              if (re === null) {
                var ie = new Set();
                ie.add(N), (t.updateQueue = ie);
              } else re.add(N);
              break e;
            } else {
              if ((t & 1) === 0) {
                ih(d, b, t), Xc();
                break e;
              }
              N = Error(i(426));
            }
          } else if (it && w.mode & 1) {
            var xt = sh(x);
            if (xt !== null) {
              (xt.flags & 65536) === 0 && (xt.flags |= 256),
                lh(xt, x, w, d, t),
                ic(Ws(N, w));
              break e;
            }
          }
          (d = N = Ws(N, w)),
            Pt !== 4 && (Pt = 2),
            Xl === null ? (Xl = [d]) : Xl.push(d),
            (d = x);
          do {
            switch (d.tag) {
              case 3:
                (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                var P = nh(d, N, t);
                Mp(d, P);
                break e;
              case 1:
                w = N;
                var E = d.type,
                  R = d.stateNode;
                if (
                  (d.flags & 128) === 0 &&
                  (typeof E.getDerivedStateFromError == "function" ||
                    (R !== null &&
                      typeof R.componentDidCatch == "function" &&
                      (ji === null || !ji.has(R))))
                ) {
                  (d.flags |= 65536), (t &= -t), (d.lanes |= t);
                  var Q = rh(d, w, t);
                  Mp(d, Q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Ah(r);
      } catch (le) {
        (t = le), St === r && r !== null && (St = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Oh() {
    var e = xa.current;
    return (xa.current = fa), e === null ? fa : e;
  }
  function Xc() {
    (Pt === 0 || Pt === 3 || Pt === 2) && (Pt = 4),
      At === null ||
        ((ns & 268435455) === 0 && (va & 268435455) === 0) ||
        Mi(At, Yt);
  }
  function Sa(e, t) {
    var r = Ie;
    Ie |= 2;
    var o = Oh();
    (At !== e || Yt !== t) && ((ri = null), is(e, t));
    do
      try {
        Xg();
        break;
      } catch (u) {
        Dh(e, u);
      }
    while (!0);
    if ((lc(), (Ie = r), (xa.current = o), St !== null)) throw Error(i(261));
    return (At = null), (Yt = 0), Pt;
  }
  function Xg() {
    for (; St !== null; ) Lh(St);
  }
  function Gg() {
    for (; St !== null && !Qr(); ) Lh(St);
  }
  function Lh(e) {
    var t = Bh(e.alternate, e, Yn);
    (e.memoizedProps = e.pendingProps),
      t === null ? Ah(e) : (St = t),
      (Ic.current = null);
  }
  function Ah(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Bg(r, t, Yn)), r !== null)) {
          St = r;
          return;
        }
      } else {
        if (((r = Ug(r, t)), r !== null)) {
          (r.flags &= 32767), (St = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Pt = 6), (St = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        St = t;
        return;
      }
      St = t = e;
    } while (t !== null);
    Pt === 0 && (Pt = 5);
  }
  function ss(e, t, r) {
    var o = $e,
      u = cr.transition;
    try {
      (cr.transition = null), ($e = 1), Qg(e, t, r, o);
    } finally {
      (cr.transition = u), ($e = o);
    }
    return null;
  }
  function Qg(e, t, r, o) {
    do Qs();
    while (Ei !== null);
    if ((Ie & 6) !== 0) throw Error(i(327));
    r = e.finishedWork;
    var u = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var d = r.lanes | r.childLanes;
    if (
      (Mm(e, d),
      e === At && ((St = At = null), (Yt = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        ya ||
        ((ya = !0),
        Uh(Xi, function () {
          return Qs(), null;
        })),
      (d = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || d)
    ) {
      (d = cr.transition), (cr.transition = null);
      var x = $e;
      $e = 1;
      var w = Ie;
      (Ie |= 4),
        (Ic.current = null),
        Vg(e, r),
        Eh(r, e),
        mg(Xu),
        (Oo = !!Yu),
        (Xu = Yu = null),
        (e.current = r),
        Hg(r),
        js(),
        (Ie = w),
        ($e = x),
        (cr.transition = d);
    } else e.current = r;
    if (
      (ya && ((ya = !1), (Ei = e), (wa = u)),
      (d = e.pendingLanes),
      d === 0 && (ji = null),
      Lr(r.stateNode),
      Rn(e, Re()),
      t !== null)
    )
      for (o = e.onRecoverableError, r = 0; r < t.length; r++)
        (u = t[r]), o(u.value, { componentStack: u.stack, digest: u.digest });
    if (_a) throw ((_a = !1), (e = Uc), (Uc = null), e);
    return (
      (wa & 1) !== 0 && e.tag !== 0 && Qs(),
      (d = e.pendingLanes),
      (d & 1) !== 0 ? (e === $c ? Gl++ : ((Gl = 0), ($c = e))) : (Gl = 0),
      ki(),
      null
    );
  }
  function Qs() {
    if (Ei !== null) {
      var e = Nd(wa),
        t = cr.transition,
        r = $e;
      try {
        if (((cr.transition = null), ($e = 16 > e ? 16 : e), Ei === null))
          var o = !1;
        else {
          if (((e = Ei), (Ei = null), (wa = 0), (Ie & 6) !== 0))
            throw Error(i(331));
          var u = Ie;
          for (Ie |= 4, te = e.current; te !== null; ) {
            var d = te,
              x = d.child;
            if ((te.flags & 16) !== 0) {
              var w = d.deletions;
              if (w !== null) {
                for (var N = 0; N < w.length; N++) {
                  var b = w[N];
                  for (te = b; te !== null; ) {
                    var W = te;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wl(8, W, d);
                    }
                    var G = W.child;
                    if (G !== null) (G.return = W), (te = G);
                    else
                      for (; te !== null; ) {
                        W = te;
                        var H = W.sibling,
                          J = W.return;
                        if ((kh(W), W === b)) {
                          te = null;
                          break;
                        }
                        if (H !== null) {
                          (H.return = J), (te = H);
                          break;
                        }
                        te = J;
                      }
                  }
                }
                var re = d.alternate;
                if (re !== null) {
                  var ie = re.child;
                  if (ie !== null) {
                    re.child = null;
                    do {
                      var xt = ie.sibling;
                      (ie.sibling = null), (ie = xt);
                    } while (ie !== null);
                  }
                }
                te = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && x !== null)
              (x.return = d), (te = x);
            else
              e: for (; te !== null; ) {
                if (((d = te), (d.flags & 2048) !== 0))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wl(9, d, d.return);
                  }
                var P = d.sibling;
                if (P !== null) {
                  (P.return = d.return), (te = P);
                  break e;
                }
                te = d.return;
              }
          }
          var E = e.current;
          for (te = E; te !== null; ) {
            x = te;
            var R = x.child;
            if ((x.subtreeFlags & 2064) !== 0 && R !== null)
              (R.return = x), (te = R);
            else
              e: for (x = E; te !== null; ) {
                if (((w = te), (w.flags & 2048) !== 0))
                  try {
                    switch (w.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ga(9, w);
                    }
                  } catch (le) {
                    pt(w, w.return, le);
                  }
                if (w === x) {
                  te = null;
                  break e;
                }
                var Q = w.sibling;
                if (Q !== null) {
                  (Q.return = w.return), (te = Q);
                  break e;
                }
                te = w.return;
              }
          }
          if (
            ((Ie = u),
            ki(),
            dn && typeof dn.onPostCommitFiberRoot == "function")
          )
            try {
              dn.onPostCommitFiberRoot(Or, e);
            } catch {}
          o = !0;
        }
        return o;
      } finally {
        ($e = r), (cr.transition = t);
      }
    }
    return !1;
  }
  function Ih(e, t, r) {
    (t = Ws(r, t)),
      (t = nh(e, t, 1)),
      (e = Si(e, t, 1)),
      (t = hn()),
      e !== null && (vl(e, 1, t), Rn(e, t));
  }
  function pt(e, t, r) {
    if (e.tag === 3) Ih(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ih(t, e, r);
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (ji === null || !ji.has(o)))
          ) {
            (e = Ws(r, e)),
              (e = rh(t, e, 1)),
              (t = Si(t, e, 1)),
              (e = hn()),
              t !== null && (vl(t, 1, e), Rn(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zg(e, t, r) {
    var o = e.pingCache;
    o !== null && o.delete(t),
      (t = hn()),
      (e.pingedLanes |= e.suspendedLanes & r),
      At === e &&
        (Yt & r) === r &&
        (Pt === 4 || (Pt === 3 && (Yt & 130023424) === Yt && 500 > Re() - Bc)
          ? is(e, 0)
          : (Fc |= r)),
      Rn(e, t);
  }
  function Fh(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ro), (Ro <<= 1), (Ro & 130023424) === 0 && (Ro = 4194304)));
    var r = hn();
    (e = ei(e, t)), e !== null && (vl(e, t, r), Rn(e, r));
  }
  function qg(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Fh(e, r);
  }
  function Kg(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode,
          u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), Fh(e, r);
  }
  var Bh;
  Bh = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || En.current) Mn = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (Mn = !1), Fg(e, t, r);
        Mn = (e.flags & 131072) !== 0;
      }
    else (Mn = !1), it && (t.flags & 1048576) !== 0 && _p(t, Jo, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var o = t.type;
        ha(e, t), (e = t.pendingProps);
        var u = As(t, Kt.current);
        Vs(t, r), (u = xc(null, t, o, e, u, r));
        var d = vc();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Tn(o) ? ((d = !0), Zo(t)) : (d = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              cc(t),
              (u.updater = da),
              (t.stateNode = u),
              (u._reactInternals = t),
              Sc(t, o, e, r),
              (t = Tc(null, t, o, !0, d, r)))
            : ((t.tag = 0), it && d && ec(t), pn(null, t, u, r), (t = t.child)),
          t
        );
      case 16:
        o = t.elementType;
        e: {
          switch (
            (ha(e, t),
            (e = t.pendingProps),
            (u = o._init),
            (o = u(o._payload)),
            (t.type = o),
            (u = t.tag = e2(o)),
            (e = Er(o, e)),
            u)
          ) {
            case 0:
              t = Ec(null, t, o, e, r);
              break e;
            case 1:
              t = dh(null, t, o, e, r);
              break e;
            case 11:
              t = oh(null, t, o, e, r);
              break e;
            case 14:
              t = ah(null, t, o, Er(o.type, e), r);
              break e;
          }
          throw Error(i(306, o, ""));
        }
        return t;
      case 0:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Er(o, u)),
          Ec(e, t, o, u, r)
        );
      case 1:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Er(o, u)),
          dh(e, t, o, u, r)
        );
      case 3:
        e: {
          if ((ph(t), e === null)) throw Error(i(387));
          (o = t.pendingProps),
            (d = t.memoizedState),
            (u = d.element),
            Tp(e, t),
            sa(t, o, null, r);
          var x = t.memoizedState;
          if (((o = x.element), d.isDehydrated))
            if (
              ((d = {
                element: o,
                isDehydrated: !1,
                cache: x.cache,
                pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                transitions: x.transitions,
              }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              (u = Ws(Error(i(423)), t)), (t = hh(e, t, o, r, u));
              break e;
            } else if (o !== u) {
              (u = Ws(Error(i(424)), t)), (t = hh(e, t, o, r, u));
              break e;
            } else
              for (
                Wn = _i(t.stateNode.containerInfo.firstChild),
                  Hn = t,
                  it = !0,
                  jr = null,
                  r = jp(t, null, o, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((Bs(), o === u)) {
              t = ni(e, t, r);
              break e;
            }
            pn(e, t, o, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Rp(t),
          e === null && rc(t),
          (o = t.type),
          (u = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (x = u.children),
          Gu(o, u) ? (x = null) : d !== null && Gu(o, d) && (t.flags |= 32),
          fh(e, t),
          pn(e, t, x, r),
          t.child
        );
      case 6:
        return e === null && rc(t), null;
      case 13:
        return mh(e, t, r);
      case 4:
        return (
          fc(t, t.stateNode.containerInfo),
          (o = t.pendingProps),
          e === null ? (t.child = Us(t, null, o, r)) : pn(e, t, o, r),
          t.child
        );
      case 11:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Er(o, u)),
          oh(e, t, o, u, r)
        );
      case 7:
        return pn(e, t, t.pendingProps, r), t.child;
      case 8:
        return pn(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return pn(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((o = t.type._context),
            (u = t.pendingProps),
            (d = t.memoizedProps),
            (x = u.value),
            Ge(na, o._currentValue),
            (o._currentValue = x),
            d !== null)
          )
            if (Nr(d.value, x)) {
              if (d.children === u.children && !En.current) {
                t = ni(e, t, r);
                break e;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                var w = d.dependencies;
                if (w !== null) {
                  x = d.child;
                  for (var N = w.firstContext; N !== null; ) {
                    if (N.context === o) {
                      if (d.tag === 1) {
                        (N = ti(-1, r & -r)), (N.tag = 2);
                        var b = d.updateQueue;
                        if (b !== null) {
                          b = b.shared;
                          var W = b.pending;
                          W === null
                            ? (N.next = N)
                            : ((N.next = W.next), (W.next = N)),
                            (b.pending = N);
                        }
                      }
                      (d.lanes |= r),
                        (N = d.alternate),
                        N !== null && (N.lanes |= r),
                        ac(d.return, r, t),
                        (w.lanes |= r);
                      break;
                    }
                    N = N.next;
                  }
                } else if (d.tag === 10) x = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((x = d.return), x === null)) throw Error(i(341));
                  (x.lanes |= r),
                    (w = x.alternate),
                    w !== null && (w.lanes |= r),
                    ac(x, r, t),
                    (x = d.sibling);
                } else x = d.child;
                if (x !== null) x.return = d;
                else
                  for (x = d; x !== null; ) {
                    if (x === t) {
                      x = null;
                      break;
                    }
                    if (((d = x.sibling), d !== null)) {
                      (d.return = x.return), (x = d);
                      break;
                    }
                    x = x.return;
                  }
                d = x;
              }
          pn(e, t, u.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (o = t.pendingProps.children),
          Vs(t, r),
          (u = ar(u)),
          (o = o(u)),
          (t.flags |= 1),
          pn(e, t, o, r),
          t.child
        );
      case 14:
        return (
          (o = t.type),
          (u = Er(o, t.pendingProps)),
          (u = Er(o.type, u)),
          ah(e, t, o, u, r)
        );
      case 15:
        return uh(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (o = t.type),
          (u = t.pendingProps),
          (u = t.elementType === o ? u : Er(o, u)),
          ha(e, t),
          (t.tag = 1),
          Tn(o) ? ((e = !0), Zo(t)) : (e = !1),
          Vs(t, r),
          eh(t, o, u),
          Sc(t, o, u, r),
          Tc(null, t, o, !0, e, r)
        );
      case 19:
        return xh(e, t, r);
      case 22:
        return ch(e, t, r);
    }
    throw Error(i(156, t.tag));
  };
  function Uh(e, t) {
    return Ct(e, t);
  }
  function Jg(e, t, r, o) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function fr(e, t, r, o) {
    return new Jg(e, t, r, o);
  }
  function Gc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function e2(e) {
    if (typeof e == "function") return Gc(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Z)) return 11;
      if (e === Ce) return 14;
    }
    return 2;
  }
  function Pi(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = fr(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Na(e, t, r, o, u, d) {
    var x = 2;
    if (((o = e), typeof e == "function")) Gc(e) && (x = 1);
    else if (typeof e == "string") x = 5;
    else
      e: switch (e) {
        case O:
          return ls(r.children, u, d, t);
        case Y:
          (x = 8), (u |= 8);
          break;
        case $:
          return (
            (e = fr(12, r, t, u | 2)), (e.elementType = $), (e.lanes = d), e
          );
        case he:
          return (e = fr(13, r, t, u)), (e.elementType = he), (e.lanes = d), e;
        case ge:
          return (e = fr(19, r, t, u)), (e.elementType = ge), (e.lanes = d), e;
        case ee:
          return ja(r, u, d, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case X:
                x = 10;
                break e;
              case fe:
                x = 9;
                break e;
              case Z:
                x = 11;
                break e;
              case Ce:
                x = 14;
                break e;
              case de:
                (x = 16), (o = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = fr(x, r, t, u)), (t.elementType = e), (t.type = o), (t.lanes = d), t
    );
  }
  function ls(e, t, r, o) {
    return (e = fr(7, e, o, t)), (e.lanes = r), e;
  }
  function ja(e, t, r, o) {
    return (
      (e = fr(22, e, o, t)),
      (e.elementType = ee),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Qc(e, t, r) {
    return (e = fr(6, e, null, t)), (e.lanes = r), e;
  }
  function Zc(e, t, r) {
    return (
      (t = fr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function t2(e, t, r, o, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Cu(0)),
      (this.expirationTimes = Cu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Cu(0)),
      (this.identifierPrefix = o),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function qc(e, t, r, o, u, d, x, w, N) {
    return (
      (e = new t2(e, t, r, w, N)),
      t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
      (d = fr(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (d.memoizedState = {
        element: o,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      cc(d),
      e
    );
  }
  function n2(e, t, r) {
    var o =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: U,
      key: o == null ? null : "" + o,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function $h(e) {
    if (!e) return wi;
    e = e._reactInternals;
    e: {
      if (Le(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Tn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Tn(r)) return gp(e, r, t);
    }
    return t;
  }
  function Vh(e, t, r, o, u, d, x, w, N) {
    return (
      (e = qc(r, o, !0, e, u, d, x, w, N)),
      (e.context = $h(null)),
      (r = e.current),
      (o = hn()),
      (u = Ti(r)),
      (d = ti(o, u)),
      (d.callback = t ?? null),
      Si(r, d, u),
      (e.current.lanes = u),
      vl(e, u, o),
      Rn(e, o),
      e
    );
  }
  function Ea(e, t, r, o) {
    var u = t.current,
      d = hn(),
      x = Ti(u);
    return (
      (r = $h(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = ti(d, x)),
      (t.payload = { element: e }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (e = Si(u, t, x)),
      e !== null && (Pr(e, u, x, d), ia(e, u, x)),
      x
    );
  }
  function Ta(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Hh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Kc(e, t) {
    Hh(e, t), (e = e.alternate) && Hh(e, t);
  }
  function r2() {
    return null;
  }
  var Wh =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Jc(e) {
    this._internalRoot = e;
  }
  (Ma.prototype.render = Jc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      Ea(e, t, null, null);
    }),
    (Ma.prototype.unmount = Jc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          rs(function () {
            Ea(null, e, null, null);
          }),
            (t[Zr] = null);
        }
      });
  function Ma(e) {
    this._internalRoot = e;
  }
  Ma.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Td();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < gi.length && t !== 0 && t < gi[r].priority; r++);
      gi.splice(r, 0, e), r === 0 && Rd(e);
    }
  };
  function ef(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pa(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Yh() {}
  function i2(e, t, r, o, u) {
    if (u) {
      if (typeof o == "function") {
        var d = o;
        o = function () {
          var b = Ta(x);
          d.call(b);
        };
      }
      var x = Vh(t, o, e, 0, null, !1, !1, "", Yh);
      return (
        (e._reactRootContainer = x),
        (e[Zr] = x.current),
        bl(e.nodeType === 8 ? e.parentNode : e),
        rs(),
        x
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof o == "function") {
      var w = o;
      o = function () {
        var b = Ta(N);
        w.call(b);
      };
    }
    var N = qc(e, 0, !1, null, null, !1, !1, "", Yh);
    return (
      (e._reactRootContainer = N),
      (e[Zr] = N.current),
      bl(e.nodeType === 8 ? e.parentNode : e),
      rs(function () {
        Ea(t, N, r, o);
      }),
      N
    );
  }
  function Ra(e, t, r, o, u) {
    var d = r._reactRootContainer;
    if (d) {
      var x = d;
      if (typeof u == "function") {
        var w = u;
        u = function () {
          var N = Ta(x);
          w.call(N);
        };
      }
      Ea(t, x, e, u);
    } else x = i2(r, t, e, u, o);
    return Ta(x);
  }
  (jd = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = xl(t.pendingLanes);
          r !== 0 &&
            (Su(t, r | 1),
            Rn(t, Re()),
            (Ie & 6) === 0 && ((Gs = Re() + 500), ki()));
        }
        break;
      case 13:
        rs(function () {
          var o = ei(e, 1);
          if (o !== null) {
            var u = hn();
            Pr(o, e, 1, u);
          }
        }),
          Kc(e, 1);
    }
  }),
    (Nu = function (e) {
      if (e.tag === 13) {
        var t = ei(e, 134217728);
        if (t !== null) {
          var r = hn();
          Pr(t, e, 134217728, r);
        }
        Kc(e, 134217728);
      }
    }),
    (Ed = function (e) {
      if (e.tag === 13) {
        var t = Ti(e),
          r = ei(e, t);
        if (r !== null) {
          var o = hn();
          Pr(r, e, t, o);
        }
        Kc(e, t);
      }
    }),
    (Td = function () {
      return $e;
    }),
    (Md = function (e, t) {
      var r = $e;
      try {
        return ($e = e), t();
      } finally {
        $e = r;
      }
    }),
    (Cr = function (e, t, r) {
      switch (t) {
        case "input":
          if ((D(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var u = Go(o);
                if (!u) throw Error(i(90));
                Vt(o), D(o, u);
              }
            }
          }
          break;
        case "textarea":
          br(e, r);
          break;
        case "select":
          (t = r.value), t != null && Ue(e, !!r.multiple, t, !1);
      }
    }),
    (sr = Wc),
    (di = rs);
  var s2 = { usingClientEntryPoint: !1, Events: [Ol, Os, Go, Dr, Gr, Wc] },
    Ql = {
      findFiberByHostInstance: Qi,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    l2 = {
      bundleType: Ql.bundleType,
      version: Ql.version,
      rendererPackageName: Ql.rendererPackageName,
      rendererConfig: Ql.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: z.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Un(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ql.findFiberByHostInstance || r2,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ba = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ba.isDisabled && ba.supportsFiber)
      try {
        (Or = ba.inject(l2)), (dn = ba);
      } catch {}
  }
  return (
    (bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = s2),
    (bn.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ef(t)) throw Error(i(200));
      return n2(e, t, null, r);
    }),
    (bn.createRoot = function (e, t) {
      if (!ef(e)) throw Error(i(299));
      var r = !1,
        o = "",
        u = Wh;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = qc(e, 1, !1, null, null, r, !1, o, u)),
        (e[Zr] = t.current),
        bl(e.nodeType === 8 ? e.parentNode : e),
        new Jc(t)
      );
    }),
    (bn.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = Un(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (bn.flushSync = function (e) {
      return rs(e);
    }),
    (bn.hydrate = function (e, t, r) {
      if (!Pa(t)) throw Error(i(200));
      return Ra(null, e, t, !0, r);
    }),
    (bn.hydrateRoot = function (e, t, r) {
      if (!ef(e)) throw Error(i(405));
      var o = (r != null && r.hydratedSources) || null,
        u = !1,
        d = "",
        x = Wh;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (u = !0),
          r.identifierPrefix !== void 0 && (d = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (x = r.onRecoverableError)),
        (t = Vh(t, null, e, 1, r ?? null, u, !1, d, x)),
        (e[Zr] = t.current),
        bl(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          (r = o[e]),
            (u = r._getVersion),
            (u = u(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, u])
              : t.mutableSourceEagerHydrationData.push(r, u);
      return new Ma(t);
    }),
    (bn.render = function (e, t, r) {
      if (!Pa(t)) throw Error(i(200));
      return Ra(null, e, t, !1, r);
    }),
    (bn.unmountComponentAtNode = function (e) {
      if (!Pa(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (rs(function () {
            Ra(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Zr] = null);
            });
          }),
          !0)
        : !1;
    }),
    (bn.unstable_batchedUpdates = Wc),
    (bn.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Pa(r)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return Ra(e, t, r, !1, o);
    }),
    (bn.version = "18.3.1-next-f1338f8080-20240426"),
    bn
  );
}
var e1;
function h2() {
  if (e1) return rf.exports;
  e1 = 1;
  function p() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (n) {
        console.error(n);
      }
  }
  return p(), (rf.exports = p2()), rf.exports;
}
var t1;
function m2() {
  if (t1) return za;
  t1 = 1;
  var p = h2();
  return (za.createRoot = p.createRoot), (za.hydrateRoot = p.hydrateRoot), za;
}
var g2 = m2(),
  nt = Zf();
const nn = {
    p17e6c000:
      "M13.0282 2.16667C7.06008 2.16667 2.223 7.00375 2.223 12.9718C2.223 17.745 5.31808 21.7956 9.61242 23.2256C10.153 23.3231 10.348 22.9905 10.348 22.7045C10.348 22.4478 10.3393 21.7674 10.3361 20.8672C7.32983 21.5193 6.695 19.4177 6.695 19.4177C6.20533 18.1697 5.49575 17.8371 5.49575 17.8371C4.51533 17.1665 5.5705 17.1817 5.5705 17.1817C6.656 17.2575 7.22475 18.2953 7.22475 18.2953C8.18892 19.9463 9.75542 19.4697 10.3686 19.1934C10.4672 18.4947 10.7488 18.018 11.0565 17.7483C8.658 17.4763 6.136 16.549 6.136 12.4074C6.136 11.2298 6.55742 10.2635 7.24533 9.5095C7.13592 9.23542 6.76217 8.13583 7.35258 6.6495C7.35258 6.6495 8.25933 6.35808 10.3231 7.75558C11.2045 7.51581 12.1137 7.39342 13.0271 7.39158C13.9405 7.39307 14.8498 7.51546 15.7311 7.75558C17.7959 6.357 18.7016 6.6495 18.7016 6.6495C19.292 8.13583 18.9215 9.23542 18.8088 9.5095C19.5022 10.2635 19.9182 11.2288 19.9182 12.4074C19.9182 16.5598 17.394 17.472 14.9868 17.7396C15.3714 18.0733 15.7181 18.7319 15.7181 19.7394C15.7181 21.1846 15.7051 22.3503 15.7051 22.7045C15.7051 22.9938 15.8979 23.3296 16.4493 23.2234C20.7415 21.7913 23.8333 17.7439 23.8333 12.9718C23.8333 7.00375 18.9963 2.16667 13.0282 2.16667Z",
    p1bc476b0:
      "M6.644 9.596C8.2552 9.596 9.56133 8.28987 9.56133 6.67867C9.56133 5.06747 8.2552 3.76133 6.644 3.76133C5.0328 3.76133 3.72667 5.06747 3.72667 6.67867C3.72667 8.28987 5.0328 9.596 6.644 9.596Z",
    p23c4ec40:
      "M16.9931 25.8116L23.869 18.9357L23.869 23.926L25.2022 23.926L25.2022 16.6598L17.936 16.6598L17.936 17.9929L22.9262 17.9929L16.0503 24.8688L16.9931 25.8116Z",
    p282a2240:
      "M5.39825 7.79675C6.70735 7.79675 7.76858 6.73552 7.76858 5.42642C7.76858 4.11732 6.70735 3.05608 5.39825 3.05608C4.08915 3.05608 3.02792 4.11732 3.02792 5.42642C3.02792 6.73552 4.08915 7.79675 5.39825 7.79675Z",
    p31d7ad00:
      "M10.0068 9.59292V22.7435H14.0898V16.2403C14.0898 14.5243 14.4127 12.8624 16.5403 12.8624C18.6388 12.8624 18.6648 14.8243 18.6648 16.3486V22.7446H22.75V15.5328C22.75 11.9903 21.9873 9.26792 17.8468 9.26792C15.8589 9.26792 14.5264 10.3588 13.9815 11.3913H13.9263V9.59292H10.0068ZM3.35292 9.59292H7.4425V22.7435H3.35292V9.59292Z",
    p3589c00:
      "M5.98971 19.2175L16.3036 8.90361V16.389L18.3033 16.389L18.3033 5.4897L7.40392 5.4897L7.40393 7.4894L14.8894 7.4894L4.5755 17.8033L5.98971 19.2175Z",
    p374be072:
      "M27.3773 8.148C27.0687 7.35091 26.597 6.62704 25.9924 6.02275C25.3879 5.41845 24.6639 4.94703 23.8667 4.63867C22.9338 4.28848 21.9482 4.09912 20.952 4.07867C19.668 4.02267 19.2613 4.00667 16.0053 4.00667C12.7493 4.00667 12.332 4.00667 11.0587 4.07867C10.0632 4.09808 9.07834 4.28747 8.14667 4.63867C7.34925 4.94667 6.62502 5.41796 6.02045 6.0223C5.41587 6.62665 4.9443 7.3507 4.636 8.148C4.28574 9.08082 4.09682 10.0664 4.07733 11.0627C4.02 12.3453 4.00267 12.752 4.00267 16.0093C4.00267 19.2653 4.00267 19.68 4.07733 20.956C4.09733 21.9533 4.28533 22.9373 4.636 23.872C4.94517 24.669 5.41719 25.3928 6.02191 25.997C6.62663 26.6013 7.35075 27.0728 8.148 27.3813C9.07791 27.7456 10.0632 27.9485 11.0613 27.9813C12.3453 28.0373 12.752 28.0547 16.008 28.0547C19.264 28.0547 19.6813 28.0547 20.9547 27.9813C21.9508 27.9611 22.9363 27.7722 23.8693 27.4227C24.6663 27.1136 25.3902 26.6418 25.9946 26.0373C26.5991 25.4328 27.0709 24.709 27.38 23.912C27.7307 22.9787 27.9187 21.9947 27.9387 20.9973C27.996 19.7147 28.0133 19.308 28.0133 16.0507C28.0133 12.7933 28.0133 12.38 27.9387 11.104C27.9231 10.0937 27.7332 9.09366 27.3773 8.148ZM25.7533 20.8573C25.7447 21.6257 25.6045 22.387 25.3387 23.108C25.1384 23.6265 24.8319 24.0973 24.4388 24.4902C24.0456 24.8831 23.5746 25.1894 23.056 25.3893C22.343 25.6539 21.5898 25.7942 20.8293 25.804C19.5627 25.8627 19.2053 25.8773 15.9573 25.8773C12.7067 25.8773 12.3747 25.8773 11.084 25.804C10.3239 25.7947 9.5711 25.6544 8.85867 25.3893C8.33825 25.1906 7.86534 24.8849 7.47052 24.4919C7.0757 24.099 6.76778 23.6275 6.56667 23.108C6.30459 22.3947 6.16442 21.6425 6.152 20.8827C6.09467 19.616 6.08133 19.2587 6.08133 16.0107C6.08133 12.7613 6.08133 12.4293 6.152 11.1373C6.16062 10.3694 6.30087 9.60856 6.56667 8.888C6.97333 7.836 7.80667 7.008 8.85867 6.60533C9.57145 6.34152 10.324 6.20128 11.084 6.19067C12.352 6.13333 12.708 6.11733 15.9573 6.11733C19.2067 6.11733 19.54 6.11733 20.8293 6.19067C21.5899 6.19982 22.3431 6.34009 23.056 6.60533C23.5746 6.8057 24.0455 7.11227 24.4386 7.50537C24.8317 7.89848 25.1383 8.36943 25.3387 8.888C25.6007 9.60127 25.7409 10.3535 25.7533 11.1133C25.8107 12.3813 25.8253 12.7373 25.8253 15.9867C25.8253 19.2347 25.8253 19.584 25.768 20.8587H25.7533V20.8573Z",
    p3add5780:
      "M16.0347 2.66667C8.68933 2.66667 2.736 8.62 2.736 15.9653C2.736 21.84 6.54533 26.8253 11.8307 28.5853C12.496 28.7053 12.736 28.296 12.736 27.944C12.736 27.628 12.7253 26.7907 12.7213 25.6827C9.02133 26.4853 8.24 23.8987 8.24 23.8987C7.63733 22.3627 6.764 21.9533 6.764 21.9533C5.55733 21.128 6.856 21.1467 6.856 21.1467C8.192 21.24 8.892 22.5173 8.892 22.5173C10.0787 24.5493 12.0067 23.9627 12.7613 23.6227C12.8827 22.7627 13.2293 22.176 13.608 21.844C10.656 21.5093 7.552 20.368 7.552 15.2707C7.552 13.8213 8.07067 12.632 8.91733 11.704C8.78267 11.3667 8.32267 10.0133 9.04933 8.184C9.04933 8.184 10.1653 7.82533 12.7053 9.54533C13.7901 9.25023 14.9091 9.09959 16.0333 9.09733C17.1576 9.09916 18.2766 9.2498 19.3613 9.54533C21.9027 7.824 23.0173 8.184 23.0173 8.184C23.744 10.0133 23.288 11.3667 23.1493 11.704C24.0027 12.632 24.5147 13.82 24.5147 15.2707C24.5147 20.3813 21.408 21.504 18.4453 21.8333C18.9187 22.244 19.3453 23.0547 19.3453 24.2947C19.3453 26.0733 19.3293 27.508 19.3293 27.944C19.3293 28.3 19.5667 28.7133 20.2453 28.5827C25.528 26.82 29.3333 21.8387 29.3333 15.9653C29.3333 8.62 23.38 2.66667 16.0347 2.66667Z",
    p3f377200:
      "M22.0402 0H26.3133L16.9799 9.62074L28 22.6667H19.3414L12.5944 14.7585L4.83534 22.6667H0.562249L10.5703 12.3911L0 0H8.88353L15.012 7.25333L22.0402 0ZM20.5221 20.3496H22.8835L7.59036 2.16593H5.00402L20.5221 20.3496Z",
    p3ff62a40:
      "M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12667 11.8067H9.16V27.992H4.12667V11.8067Z",
    p5548000:
      "M22.408 11.0467C23.2018 11.0467 23.8453 10.4032 23.8453 9.60933C23.8453 8.81552 23.2018 8.172 22.408 8.172C21.6142 8.172 20.9707 8.81552 20.9707 9.60933C20.9707 10.4032 21.6142 11.0467 22.408 11.0467Z",
    p8ca3400:
      "M15.9987 9.836C14.3635 9.836 12.7953 10.4856 11.6391 11.6418C10.4829 12.798 9.83333 14.3662 9.83333 16.0013C9.83333 17.6365 10.4829 19.2047 11.6391 20.3609C12.7953 21.5171 14.3635 22.1667 15.9987 22.1667C17.6338 22.1667 19.202 21.5171 20.3582 20.3609C21.5144 19.2047 22.164 17.6365 22.164 16.0013C22.164 14.3662 21.5144 12.798 20.3582 11.6418C19.202 10.4856 17.6338 9.836 15.9987 9.836ZM15.9987 20.0053C14.9364 20.0053 13.9176 19.5833 13.1665 18.8322C12.4153 18.0811 11.9933 17.0623 11.9933 16C11.9933 14.9377 12.4153 13.9189 13.1665 13.1678C13.9176 12.4167 14.9364 11.9947 15.9987 11.9947C17.0609 11.9947 18.0797 12.4167 18.8309 13.1678C19.582 13.9189 20.004 14.9377 20.004 16C20.004 17.0623 19.582 18.0811 18.8309 18.8322C18.0797 19.5833 17.0609 20.0053 15.9987 20.0053Z",
  },
  x2 = "/assets/0d3630f0a8ce367183462cfffe8f59bdd44167c0-Jp_F-w_v.png",
  v2 = "/assets/5dcd97dc5eedd121a4e28d7d486be0fccd32ffb8-BxICuYSH.png",
  _2 = "/assets/b4ad9145f503384fa2e01584bf6a2e40a529a372-BBpn3CED.png",
  y2 = "/assets/ada6183f66559558faf021a9606a30839d13d925-BCsI5R9T.png";
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w2 = (p) => p.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  k2 = (p) =>
    p.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, i, s) =>
      s ? s.toUpperCase() : i.toLowerCase()
    ),
  n1 = (p) => {
    const n = k2(p);
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  Q1 = (...p) =>
    p
      .filter((n, i, s) => !!n && n.trim() !== "" && s.indexOf(n) === i)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var C2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S2 = nt.forwardRef(
  (
    {
      color: p = "currentColor",
      size: n = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: s,
      className: l = "",
      children: a,
      iconNode: f,
      ...c
    },
    m
  ) =>
    nt.createElement(
      "svg",
      {
        ref: m,
        ...C2,
        width: n,
        height: n,
        stroke: p,
        strokeWidth: s ? (Number(i) * 24) / Number(n) : i,
        className: Q1("lucide", l),
        ...c,
      },
      [
        ...f.map(([g, v]) => nt.createElement(g, v)),
        ...(Array.isArray(a) ? a : [a]),
      ]
    )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ve = (p, n) => {
  const i = nt.forwardRef(({ className: s, ...l }, a) =>
    nt.createElement(S2, {
      ref: a,
      iconNode: n,
      className: Q1(`lucide-${w2(n1(p))}`, `lucide-${p}`, s),
      ...l,
    })
  );
  return (i.displayName = n1(p)), i;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N2 = [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    [
      "path",
      {
        d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
        key: "1l2ple",
      },
    ],
    [
      "path",
      {
        d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
        key: "1wam0m",
      },
    ],
  ],
  j2 = Ve("atom", N2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E2 = [
    [
      "path",
      {
        d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
        key: "hh9hay",
      },
    ],
    ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ],
  of = Ve("box", E2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T2 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  r1 = Ve("circle-check-big", T2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M2 = [
    [
      "path",
      {
        d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
        key: "p7xjir",
      },
    ],
  ],
  P2 = Ve("cloud", M2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R2 = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  b2 = Ve("code-xml", R2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z2 = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ],
  D2 = Ve("database", z2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O2 = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ],
  L2 = Ve("download", O2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A2 = [
    ["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }],
    ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
        key: "1mlx9k",
      },
    ],
  ],
  i1 = Ve("file-code", A2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I2 = [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360",
      },
    ],
  ],
  s1 = Ve("folder", I2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F2 = [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
  ],
  B2 = Ve("gauge", F2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U2 = [
    ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
  ],
  af = Ve("git-branch", U2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $2 = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  V2 = Ve("github", $2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  W2 = Ve("globe", H2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y2 = [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ],
  l1 = Ve("mail", Y2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X2 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  G2 = Ve("map-pin", X2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q2 = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  Z2 = Ve("menu", Q2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q2 = [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ],
  K2 = Ve("message-square", q2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J2 = [
    ["path", { d: "m14.622 17.897-10.68-2.913", key: "vj2p1u" }],
    [
      "path",
      {
        d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
        key: "18tc5c",
      },
    ],
    [
      "path",
      {
        d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
        key: "ytzfxy",
      },
    ],
  ],
  o1 = Ve("paintbrush", J2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ex = [
    [
      "circle",
      { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" },
    ],
    [
      "circle",
      { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" },
    ],
    [
      "circle",
      { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" },
    ],
    [
      "circle",
      { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" },
    ],
    [
      "path",
      {
        d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
        key: "12rzf8",
      },
    ],
  ],
  a1 = Ve("palette", ex);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tx = [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ],
  u1 = Ve("phone", tx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nx = [
    [
      "path",
      {
        d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
        key: "w46dr5",
      },
    ],
  ],
  rx = Ve("puzzle", nx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ix = [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  sx = Ve("smartphone", ix);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lx = [
    [
      "path",
      {
        d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",
        key: "1ub6xw",
      },
    ],
    ["path", { d: "m16 2 6 6", key: "1gw87d" }],
    ["path", { d: "M12 16H4", key: "1cjfip" }],
  ],
  ox = Ve("test-tube-diagonal", lx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ax = [
    ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
    ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
    ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
  ],
  ux = Ve("timer", ax);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cx = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ],
  fx = Ve("users", cx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dx = [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }],
  ],
  px = Ve("wind", dx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hx = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  mx = Ve("x", hx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gx = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  uf = Ve("zap", gx),
  Z1 = "/assets/toi-BJxdTS0F.png",
  xx = "/assets/screener-DyddbBUC.png",
  vx = "/assets/mm-DwONbMgz.png",
  _x = "/assets/adlob-0xegYVb7.png",
  yx = "/assets/funpark-B2qfPrVm.png",
  wx = "/assets/ecommerce-C0MIJc0m.png",
  kx = "/assets/spotify-VkquvCWL.png",
  Cx = "/assets/libsilong-Bl4yzy6D.png",
  Sx = "/assets/screenr_long-BliVE9x0.png",
  Ze = {
    name: "Aquib Yazdani",
    displayName: "aquib yazdani",
    title: "Sr. Software Engineer",
    location: "Pune Maharashtra, India",
    email: "yazdaniaquib2@gmail.com",
    phone: "+91 8210773776",
    copyright: "© 2023 Aquib Yazdani",
    careerStartDate: "2021-06-01",
  },
  Ii = {
    linkedin: "https://www.linkedin.com/in/aquibyazdani/",
    github: "https://github.com/aquibyazdani/",
    instagram: "https://www.instagram.com/aquibyazdani/",
  },
  c1 = {
    intro:
      "I'm a Full-Stack Developer based in India. I build end-to-end, accessible, and high-performance web solutions, with strong expertise in React and modern frontend technologies.",
    background:
      "I care deeply about clean architecture, usability, and creating meaningful digital products. While I specialize in frontend development, I also develop full-stack solutions that integrate seamlessly from UI to backend. Outside of programming, I enjoy playing football, photography, and a few rounds of Valorant.",
  },
  Ut = {
    frontend: [
      { name: "React.js", icon: j2 },
      { name: "React Native", icon: sx },
      { name: "Next.js", icon: uf },
      { name: "JavaScript (ES6+)", icon: b2 },
      { name: "TypeScript", icon: i1 },
      { name: "HTML", icon: i1 },
      { name: "CSS", icon: o1 },
      { name: "SCSS", icon: o1 },
      { name: "Tailwind CSS", icon: px },
      { name: "Material UI", icon: a1 },
      { name: "Bootstrap", icon: a1 },
    ],
    stateManagement: [
      { name: "Redux", icon: of },
      { name: "Context API", icon: of },
      { name: "Zustand", icon: of },
    ],
    testing: [
      { name: "Jest", icon: r1 },
      { name: "React Testing Library", icon: ox },
      { name: "Unit Testing", icon: r1 },
    ],
    performance: [
      { name: "SSR", icon: uf },
      { name: "SSG", icon: uf },
      { name: "Component Reusability", icon: rx },
      { name: "UI Optimization", icon: B2 },
      { name: "Load Time Reduction", icon: ux },
      { name: "Accessibility Improvements", icon: fx },
    ],
    api: [
      { name: "RESTful APIs", icon: W2 },
      { name: "GraphQL", icon: D2 },
    ],
    tools: [
      { name: "Git", icon: af },
      { name: "GitHub", icon: V2 },
      { name: "Azure", icon: P2 },
      { name: "GitLab", icon: af },
      { name: "Bitbucket", icon: af },
      { name: "Jira", icon: s1 },
      { name: "Slack", icon: K2 },
      { name: "ProofHub", icon: s1 },
    ],
  },
  nu = [
    {
      id: 1,
      title: "Sr. Software Engineer",
      company: "Zensar Technologies",
      location: "Mumbai, Maharashtra",
      period: "June 2025 - Present",
      responsibilities: [
        "Leading frontend development initiatives for enterprise-level applications.",
        "Architecting scalable and maintainable React-based solutions.",
        "Mentoring junior developers and conducting code reviews.",
        "Collaborating with cross-functional teams to deliver high-quality products.",
      ],
    },
    {
      id: 2,
      title: "SDE-II",
      company: "Harns Technologies Pvt Ltd",
      location: "Mumbai, Maharashtra",
      period: "June 2021 - June 2025",
      responsibilities: [
        "Engineered dynamic, responsive dashboards using React, Next.js, and TypeScript, supporting agile development practices and enhancing web functionality.",
        "Crafted custom, responsive UI components with Material-UI and Tailwind CSS to streamline user onboarding and bolster digital marketing initiatives.",
        "Optimized state management for a large-scale inspection system by leveraging Redux and Context API enhancing application stability and reducing errors.",
        "Integrated RESTful APIs and GraphQL into a real-time insights application using Express.js, ensuring robust data flow and consistent system performance.",
        "Modernized legacy systems by migrating to modern frameworks like Next.js, significantly improving scalability and overall performance by 30%.",
        "Enhanced user accessibility and UX by implementing WCAG-compliant features in a control panel, promoting inclusive design across various browsers and devices.",
      ],
    },
  ],
  q1 = [
    {
      id: 1,
      institution: "Heritage Institute Of Technology, Kolkata",
      degree: "B.Tech in Chemical Engineering (CGPA: 8.5)",
      period: "2016 - 2020",
    },
  ],
  gu = [
    {
      id: 1,
      title: "Screener - Zamzam Capital",
      role: "Sole Developer",
      techStack: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
        "REST APIs",
      ],
      year: "2025",
      src: Sx,
      achievements: [
        "Developed a dedicated Halal stock screening platform enabling investors to evaluate companies based on Shariah-compliant financial criteria.",
        "Implemented advanced filtering and screening logic to assess stocks across multiple compliance parameters, providing a streamlined and user-friendly interface for Islamic investment research.",
        "Created responsive dashboards with intuitive UI/UX for seamless user experience across devices.",
      ],
    },
    {
      id: 2,
      title: "TOI Epaper (Times of India)",
      role: "Lead Frontend Engineer",
      techStack: ["React.js", "Redux", "Bootstrap", "REST APIs"],
      year: "2024",
      src: Z1,
      achievements: [
        "Developed and maintained a high-traffic ePaper platform accessed by thousands daily.",
        "Reduced development time by 30% using efficient language management and reusable components.",
        "Built a reusable component library to streamline frontend development.",
        "Integrated RESTful APIs for real-time updates, ensuring smooth content delivery.",
        "Implemented cross-browser compatibility and accessibility features.",
        "Integrated Google Ads and Google Analytics.",
      ],
    },
    {
      id: 3,
      title: "Adlob (Response 4You) - (Times of India)",
      role: "Principal UI Developer",
      techStack: [
        "React.js",
        "Context API",
        "Styled Components",
        "Jest",
        "REST APIs",
      ],
      year: "2024",
      src: _x,
      achievements: [
        "Designed a seamless ad booking platform, simplifying the process for agencies and clients.",
        "Automated workflows, allowing 200+ agencies to manage campaigns effortlessly.",
        "Developed a responsive UI, improving usability by 60% across all devices.",
        "Integrated real-time tracking for ad placements and performance monitoring.",
      ],
    },
    {
      id: 4,
      title: "Libsi Markah E-commerce",
      role: "Key Developer",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS (EC2)"],
      year: "2025",
      src: Cx,
      achievements: [
        "Improved operational efficiency by 30% with enhanced data workflows.",
        "Reduced manual intervention by 20% through seamless system integrations.",
        "Implemented efficient language management to support multilingual content.",
        "Implemented SEO-friendly practices, improving search rankings and organic traffic.",
      ],
    },
  ],
  qf = [
    { id: 1, title: "Portfolio", url: "https://aquibyazdani.com" },
    {
      id: 2,
      title: "Amusement Park",
      url: "https://amusement-park-new.netlify.app",
      src: yx,
    },
    {
      id: 3,
      title: "Memorable Mumbai",
      url: "https://memorablemumbai.com",
      src: vx,
    },
    {
      id: 4,
      title: "E-commerce clone",
      url: "https://shoppe-aquib-yazdani.netlify.app",
      src: wx,
    },
    {
      id: 5,
      title: "Spotify clone",
      url: "https://spotify-yazdani.netlify.app",
      src: kx,
    },
    {
      id: 6,
      title: "Screener",
      url: "https://screener.zamzam-capital.com",
      src: xx,
    },
    { id: 7, title: "TOI ePaper - Archive", url: "#", src: Z1 },
  ],
  K1 = [
    "Boosted application responsiveness by 25% through optimized front-end code and design.",
    "Reduced version control conflicts by 15%, improving workflow efficiency by 20%.",
    "Improved team collaboration by 10%, leading to a 12% increase in project delivery speed.",
  ],
  J1 = [
    {
      id: 1,
      name: "Harish Yerragintla",
      position: "Lead Developer",
      company: "Harns Technologies",
      phone: "+1 (205) 736-5808",
      email: "harish.yerraguntla2706@gmail.com",
    },
    {
      id: 2,
      name: "Md Fariduzzaman Ansari",
      position: "Senior Frontend Engineer",
      company: "Icertis",
      phone: "+91 70443 56471",
      email: "fariduzzamaansari@gmail.com",
    },
  ],
  f1 = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
  ];
function xu({ navigate: p, currentPage: n }) {
  const [i, s] = nt.useState(!1),
    l = () => {
      s(!i);
    };
  return h.jsxs("nav", {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-[#484848]",
    children: [
      h.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
        children: [
          h.jsx("button", {
            onClick: () => p("/"),
            className:
              "text-[#c7c7c7] text-[28px] tracking-[-0.32px] cursor-pointer",
            children: Ze.displayName,
          }),
          h.jsx("div", {
            className: "hidden md:flex items-center gap-8",
            children: f1.map((a) =>
              h.jsx(
                "button",
                {
                  onClick: () => p(a.path),
                  className: `font-['Manrope',sans-serif] text-[14px] uppercase transition-colors ${
                    n === a.path.slice(1) || (a.path === "/" && n === "home")
                      ? "text-[#d3e97a]"
                      : "text-[#c7c7c7] hover:text-white"
                  }`,
                  children: a.label,
                },
                a.path
              )
            ),
          }),
          h.jsx("button", {
            onClick: l,
            className:
              "md:hidden text-[#c7c7c7] hover:text-white transition-colors",
            "aria-label": "Toggle menu",
            children: i
              ? h.jsx(mx, { className: "size-6" })
              : h.jsx(Z2, { className: "size-6" }),
          }),
        ],
      }),
      i &&
        h.jsx("div", {
          className: "md:hidden bg-neutral-950 border-t border-[#484848]",
          children: h.jsx("div", {
            className: "max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4",
            children: f1.map((a) =>
              h.jsx(
                "button",
                {
                  onClick: () => {
                    p(a.path), s(!1);
                  },
                  className: `font-['Manrope',sans-serif] text-[14px] uppercase text-left transition-colors ${
                    n === a.path.slice(1) || (a.path === "/" && n === "home")
                      ? "text-[#d3e97a]"
                      : "text-[#c7c7c7] hover:text-white"
                  }`,
                  children: a.label,
                },
                a.path
              )
            ),
          }),
        }),
    ],
  });
}
const Nx =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function ru(p) {
  const [n, i] = nt.useState(!1),
    s = () => {
      i(!0);
    },
    { src: l, alt: a, style: f, className: c, ...m } = p;
  return n
    ? h.jsx("div", {
        className: `inline-block bg-gray-100 text-center align-middle ${
          c ?? ""
        }`,
        style: f,
        children: h.jsx("div", {
          className: "flex items-center justify-center w-full h-full",
          children: h.jsx("img", {
            src: Nx,
            alt: "Error loading image",
            ...m,
            "data-original-url": l,
          }),
        }),
      })
    : h.jsx("img", {
        src: l,
        alt: a,
        className: c,
        style: f,
        ...m,
        onError: s,
      });
}
function ii(p) {
  if (p === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return p;
}
function e0(p, n) {
  (p.prototype = Object.create(n.prototype)),
    (p.prototype.constructor = p),
    (p.__proto__ = n);
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var er = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  cl = { duration: 0.5, overwrite: !1, delay: 0 },
  Kf,
  Gt,
  st,
  mr = 1e8,
  We = 1 / mr,
  Nf = Math.PI * 2,
  jx = Nf / 4,
  Ex = 0,
  t0 = Math.sqrt,
  Tx = Math.cos,
  Mx = Math.sin,
  $t = function (n) {
    return typeof n == "string";
  },
  ht = function (n) {
    return typeof n == "function";
  },
  ui = function (n) {
    return typeof n == "number";
  },
  Jf = function (n) {
    return typeof n > "u";
  },
  Xr = function (n) {
    return typeof n == "object";
  },
  Dn = function (n) {
    return n !== !1;
  },
  ed = function () {
    return typeof window < "u";
  },
  Da = function (n) {
    return ht(n) || $t(n);
  },
  n0 =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  an = Array.isArray,
  jf = /(?:-?\.?\d|\.)+/gi,
  r0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  tl = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  cf = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  i0 = /[+-]=-?[.\d]+/,
  s0 = /[^,'"\[\]\s]+/gi,
  Px = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ut,
  Ur,
  Ef,
  td,
  tr = {},
  iu = {},
  l0,
  o0 = function (n) {
    return (iu = fl(n, tr)) && In;
  },
  nd = function (n, i) {
    return console.warn(
      "Invalid property",
      n,
      "set to",
      i,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  yo = function (n, i) {
    return !i && console.warn(n);
  },
  a0 = function (n, i) {
    return (n && (tr[n] = i) && iu && (iu[n] = i)) || tr;
  },
  wo = function () {
    return 0;
  },
  Rx = { suppressEvents: !0, isStart: !0, kill: !1 },
  Xa = { suppressEvents: !0, kill: !1 },
  bx = { suppressEvents: !0 },
  rd = {},
  Fi = [],
  Tf = {},
  u0,
  Qn = {},
  ff = {},
  d1 = 30,
  Ga = [],
  id = "",
  sd = function (n) {
    var i = n[0],
      s,
      l;
    if ((Xr(i) || ht(i) || (n = [n]), !(s = (i._gsap || {}).harness))) {
      for (l = Ga.length; l-- && !Ga[l].targetTest(i); );
      s = Ga[l];
    }
    for (l = n.length; l--; )
      (n[l] && (n[l]._gsap || (n[l]._gsap = new z0(n[l], s)))) ||
        n.splice(l, 1);
    return n;
  },
  hs = function (n) {
    return n._gsap || sd(gr(n))[0]._gsap;
  },
  c0 = function (n, i, s) {
    return (s = n[i]) && ht(s)
      ? n[i]()
      : (Jf(s) && n.getAttribute && n.getAttribute(i)) || s;
  },
  On = function (n, i) {
    return (n = n.split(",")).forEach(i) || n;
  },
  _t = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  Et = function (n) {
    return Math.round(n * 1e7) / 1e7 || 0;
  },
  il = function (n, i) {
    var s = i.charAt(0),
      l = parseFloat(i.substr(2));
    return (
      (n = parseFloat(n)),
      s === "+" ? n + l : s === "-" ? n - l : s === "*" ? n * l : n / l
    );
  },
  zx = function (n, i) {
    for (var s = i.length, l = 0; n.indexOf(i[l]) < 0 && ++l < s; );
    return l < s;
  },
  su = function () {
    var n = Fi.length,
      i = Fi.slice(0),
      s,
      l;
    for (Tf = {}, Fi.length = 0, s = 0; s < n; s++)
      (l = i[s]),
        l && l._lazy && (l.render(l._lazy[0], l._lazy[1], !0)._lazy = 0);
  },
  ld = function (n) {
    return !!(n._initted || n._startAt || n.add);
  },
  f0 = function (n, i, s, l) {
    Fi.length && !Gt && su(),
      n.render(i, s, !!(Gt && i < 0 && ld(n))),
      Fi.length && !Gt && su();
  },
  d0 = function (n) {
    var i = parseFloat(n);
    return (i || i === 0) && (n + "").match(s0).length < 2
      ? i
      : $t(n)
      ? n.trim()
      : n;
  },
  p0 = function (n) {
    return n;
  },
  nr = function (n, i) {
    for (var s in i) s in n || (n[s] = i[s]);
    return n;
  },
  Dx = function (n) {
    return function (i, s) {
      for (var l in s)
        l in i || (l === "duration" && n) || l === "ease" || (i[l] = s[l]);
    };
  },
  fl = function (n, i) {
    for (var s in i) n[s] = i[s];
    return n;
  },
  p1 = function p(n, i) {
    for (var s in i)
      s !== "__proto__" &&
        s !== "constructor" &&
        s !== "prototype" &&
        (n[s] = Xr(i[s]) ? p(n[s] || (n[s] = {}), i[s]) : i[s]);
    return n;
  },
  lu = function (n, i) {
    var s = {},
      l;
    for (l in n) l in i || (s[l] = n[l]);
    return s;
  },
  oo = function (n) {
    var i = n.parent || ut,
      s = n.keyframes ? Dx(an(n.keyframes)) : nr;
    if (Dn(n.inherit))
      for (; i; ) s(n, i.vars.defaults), (i = i.parent || i._dp);
    return n;
  },
  Ox = function (n, i) {
    for (var s = n.length, l = s === i.length; l && s-- && n[s] === i[s]; );
    return s < 0;
  },
  h0 = function (n, i, s, l, a) {
    var f = n[l],
      c;
    if (a) for (c = i[a]; f && f[a] > c; ) f = f._prev;
    return (
      f ? ((i._next = f._next), (f._next = i)) : ((i._next = n[s]), (n[s] = i)),
      i._next ? (i._next._prev = i) : (n[l] = i),
      (i._prev = f),
      (i.parent = i._dp = n),
      i
    );
  },
  vu = function (n, i, s, l) {
    s === void 0 && (s = "_first"), l === void 0 && (l = "_last");
    var a = i._prev,
      f = i._next;
    a ? (a._next = f) : n[s] === i && (n[s] = f),
      f ? (f._prev = a) : n[l] === i && (n[l] = a),
      (i._next = i._prev = i.parent = null);
  },
  $i = function (n, i) {
    n.parent &&
      (!i || n.parent.autoRemoveChildren) &&
      n.parent.remove &&
      n.parent.remove(n),
      (n._act = 0);
  },
  ms = function (n, i) {
    if (n && (!i || i._end > n._dur || i._start < 0))
      for (var s = n; s; ) (s._dirty = 1), (s = s.parent);
    return n;
  },
  Lx = function (n) {
    for (var i = n.parent; i && i.parent; )
      (i._dirty = 1), i.totalDuration(), (i = i.parent);
    return n;
  },
  Mf = function (n, i, s, l) {
    return (
      n._startAt &&
      (Gt
        ? n._startAt.revert(Xa)
        : (n.vars.immediateRender && !n.vars.autoRevert) ||
          n._startAt.render(i, !0, l))
    );
  },
  Ax = function p(n) {
    return !n || (n._ts && p(n.parent));
  },
  h1 = function (n) {
    return n._repeat ? dl(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
  },
  dl = function (n, i) {
    var s = Math.floor((n = Et(n / i)));
    return n && s === n ? s - 1 : s;
  },
  ou = function (n, i) {
    return (
      (n - i._start) * i._ts +
      (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur)
    );
  },
  _u = function (n) {
    return (n._end = Et(
      n._start + (n._tDur / Math.abs(n._ts || n._rts || We) || 0)
    ));
  },
  yu = function (n, i) {
    var s = n._dp;
    return (
      s &&
        s.smoothChildTiming &&
        n._ts &&
        ((n._start = Et(
          s._time -
            (n._ts > 0
              ? i / n._ts
              : ((n._dirty ? n.totalDuration() : n._tDur) - i) / -n._ts)
        )),
        _u(n),
        s._dirty || ms(s, n)),
      n
    );
  },
  m0 = function (n, i) {
    var s;
    if (
      ((i._time ||
        (!i._dur && i._initted) ||
        (i._start < n._time && (i._dur || !i.add))) &&
        ((s = ou(n.rawTime(), i)),
        (!i._dur || Mo(0, i.totalDuration(), s) - i._tTime > We) &&
          i.render(s, !0)),
      ms(n, i)._dp && n._initted && n._time >= n._dur && n._ts)
    ) {
      if (n._dur < n.duration())
        for (s = n; s._dp; )
          s.rawTime() >= 0 && s.totalTime(s._tTime), (s = s._dp);
      n._zTime = -We;
    }
  },
  Vr = function (n, i, s, l) {
    return (
      i.parent && $i(i),
      (i._start = Et(
        (ui(s) ? s : s || n !== ut ? dr(n, s, i) : n._time) + i._delay
      )),
      (i._end = Et(
        i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0)
      )),
      h0(n, i, "_first", "_last", n._sort ? "_start" : 0),
      Pf(i) || (n._recent = i),
      l || m0(n, i),
      n._ts < 0 && yu(n, n._tTime),
      n
    );
  },
  g0 = function (n, i) {
    return (
      (tr.ScrollTrigger || nd("scrollTrigger", i)) &&
      tr.ScrollTrigger.create(i, n)
    );
  },
  x0 = function (n, i, s, l, a) {
    if ((ad(n, i, a), !n._initted)) return 1;
    if (
      !s &&
      n._pt &&
      !Gt &&
      ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
      u0 !== qn.frame
    )
      return Fi.push(n), (n._lazy = [a, l]), 1;
  },
  Ix = function p(n) {
    var i = n.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || p(i));
  },
  Pf = function (n) {
    var i = n.data;
    return i === "isFromStart" || i === "isStart";
  },
  Fx = function (n, i, s, l) {
    var a = n.ratio,
      f =
        i < 0 ||
        (!i &&
          ((!n._start && Ix(n) && !(!n._initted && Pf(n))) ||
            ((n._ts < 0 || n._dp._ts < 0) && !Pf(n))))
          ? 0
          : 1,
      c = n._rDelay,
      m = 0,
      g,
      v,
      k;
    if (
      (c &&
        n._repeat &&
        ((m = Mo(0, n._tDur, i)),
        (v = dl(m, c)),
        n._yoyo && v & 1 && (f = 1 - f),
        v !== dl(n._tTime, c) &&
          ((a = 1 - f), n.vars.repeatRefresh && n._initted && n.invalidate())),
      f !== a || Gt || l || n._zTime === We || (!i && n._zTime))
    ) {
      if (!n._initted && x0(n, i, l, s, m)) return;
      for (
        k = n._zTime,
          n._zTime = i || (s ? We : 0),
          s || (s = i && !k),
          n.ratio = f,
          n._from && (f = 1 - f),
          n._time = 0,
          n._tTime = m,
          g = n._pt;
        g;

      )
        g.r(f, g.d), (g = g._next);
      i < 0 && Mf(n, i, s, !0),
        n._onUpdate && !s && Jn(n, "onUpdate"),
        m && n._repeat && !s && n.parent && Jn(n, "onRepeat"),
        (i >= n._tDur || i < 0) &&
          n.ratio === f &&
          (f && $i(n, 1),
          !s &&
            !Gt &&
            (Jn(n, f ? "onComplete" : "onReverseComplete", !0),
            n._prom && n._prom()));
    } else n._zTime || (n._zTime = i);
  },
  Bx = function (n, i, s) {
    var l;
    if (s > i)
      for (l = n._first; l && l._start <= s; ) {
        if (l.data === "isPause" && l._start > i) return l;
        l = l._next;
      }
    else
      for (l = n._last; l && l._start >= s; ) {
        if (l.data === "isPause" && l._start < i) return l;
        l = l._prev;
      }
  },
  pl = function (n, i, s, l) {
    var a = n._repeat,
      f = Et(i) || 0,
      c = n._tTime / n._tDur;
    return (
      c && !l && (n._time *= f / n._dur),
      (n._dur = f),
      (n._tDur = a ? (a < 0 ? 1e10 : Et(f * (a + 1) + n._rDelay * a)) : f),
      c > 0 && !l && yu(n, (n._tTime = n._tDur * c)),
      n.parent && _u(n),
      s || ms(n.parent, n),
      n
    );
  },
  m1 = function (n) {
    return n instanceof yn ? ms(n) : pl(n, n._dur);
  },
  Ux = { _start: 0, endTime: wo, totalDuration: wo },
  dr = function p(n, i, s) {
    var l = n.labels,
      a = n._recent || Ux,
      f = n.duration() >= mr ? a.endTime(!1) : n._dur,
      c,
      m,
      g;
    return $t(i) && (isNaN(i) || i in l)
      ? ((m = i.charAt(0)),
        (g = i.substr(-1) === "%"),
        (c = i.indexOf("=")),
        m === "<" || m === ">"
          ? (c >= 0 && (i = i.replace(/=/, "")),
            (m === "<" ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) *
                (g ? (c < 0 ? a : s).totalDuration() / 100 : 1))
          : c < 0
          ? (i in l || (l[i] = f), l[i])
          : ((m = parseFloat(i.charAt(c - 1) + i.substr(c + 1))),
            g && s && (m = (m / 100) * (an(s) ? s[0] : s).totalDuration()),
            c > 1 ? p(n, i.substr(0, c - 1), s) + m : f + m))
      : i == null
      ? f
      : +i;
  },
  ao = function (n, i, s) {
    var l = ui(i[1]),
      a = (l ? 2 : 1) + (n < 2 ? 0 : 1),
      f = i[a],
      c,
      m;
    if ((l && (f.duration = i[1]), (f.parent = s), n)) {
      for (c = f, m = s; m && !("immediateRender" in c); )
        (c = m.vars.defaults || {}), (m = Dn(m.vars.inherit) && m.parent);
      (f.immediateRender = Dn(c.immediateRender)),
        n < 2 ? (f.runBackwards = 1) : (f.startAt = i[a - 1]);
    }
    return new jt(i[0], f, i[a + 1]);
  },
  Wi = function (n, i) {
    return n || n === 0 ? i(n) : i;
  },
  Mo = function (n, i, s) {
    return s < n ? n : s > i ? i : s;
  },
  ln = function (n, i) {
    return !$t(n) || !(i = Px.exec(n)) ? "" : i[1];
  },
  $x = function (n, i, s) {
    return Wi(s, function (l) {
      return Mo(n, i, l);
    });
  },
  Rf = [].slice,
  v0 = function (n, i) {
    return (
      n &&
      Xr(n) &&
      "length" in n &&
      ((!i && !n.length) || (n.length - 1 in n && Xr(n[0]))) &&
      !n.nodeType &&
      n !== Ur
    );
  },
  Vx = function (n, i, s) {
    return (
      s === void 0 && (s = []),
      n.forEach(function (l) {
        var a;
        return ($t(l) && !i) || v0(l, 1)
          ? (a = s).push.apply(a, gr(l))
          : s.push(l);
      }) || s
    );
  },
  gr = function (n, i, s) {
    return st && !i && st.selector
      ? st.selector(n)
      : $t(n) && !s && (Ef || !hl())
      ? Rf.call((i || td).querySelectorAll(n), 0)
      : an(n)
      ? Vx(n, s)
      : v0(n)
      ? Rf.call(n, 0)
      : n
      ? [n]
      : [];
  },
  bf = function (n) {
    return (
      (n = gr(n)[0] || yo("Invalid scope") || {}),
      function (i) {
        var s = n.current || n.nativeElement || n;
        return gr(
          i,
          s.querySelectorAll
            ? s
            : s === n
            ? yo("Invalid scope") || td.createElement("div")
            : n
        );
      }
    );
  },
  _0 = function (n) {
    return n.sort(function () {
      return 0.5 - Math.random();
    });
  },
  y0 = function (n) {
    if (ht(n)) return n;
    var i = Xr(n) ? n : { each: n },
      s = gs(i.ease),
      l = i.from || 0,
      a = parseFloat(i.base) || 0,
      f = {},
      c = l > 0 && l < 1,
      m = isNaN(l) || c,
      g = i.axis,
      v = l,
      k = l;
    return (
      $t(l)
        ? (v = k = { center: 0.5, edges: 0.5, end: 1 }[l] || 0)
        : !c && m && ((v = l[0]), (k = l[1])),
      function (C, _, T) {
        var y = (T || i).length,
          M = f[y],
          I,
          L,
          B,
          z,
          A,
          U,
          O,
          Y,
          $;
        if (!M) {
          if ((($ = i.grid === "auto" ? 0 : (i.grid || [1, mr])[1]), !$)) {
            for (
              O = -mr;
              O < (O = T[$++].getBoundingClientRect().left) && $ < y;

            );
            $ < y && $--;
          }
          for (
            M = f[y] = [],
              I = m ? Math.min($, y) * v - 0.5 : l % $,
              L = $ === mr ? 0 : m ? (y * k) / $ - 0.5 : (l / $) | 0,
              O = 0,
              Y = mr,
              U = 0;
            U < y;
            U++
          )
            (B = (U % $) - I),
              (z = L - ((U / $) | 0)),
              (M[U] = A = g ? Math.abs(g === "y" ? z : B) : t0(B * B + z * z)),
              A > O && (O = A),
              A < Y && (Y = A);
          l === "random" && _0(M),
            (M.max = O - Y),
            (M.min = Y),
            (M.v = y =
              (parseFloat(i.amount) ||
                parseFloat(i.each) *
                  ($ > y
                    ? y - 1
                    : g
                    ? g === "y"
                      ? y / $
                      : $
                    : Math.max($, y / $)) ||
                0) * (l === "edges" ? -1 : 1)),
            (M.b = y < 0 ? a - y : a),
            (M.u = ln(i.amount || i.each) || 0),
            (s = s && y < 0 ? P0(s) : s);
        }
        return (
          (y = (M[C] - M.min) / M.max || 0),
          Et(M.b + (s ? s(y) : y) * M.v) + M.u
        );
      }
    );
  },
  zf = function (n) {
    var i = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function (s) {
      var l = Et(Math.round(parseFloat(s) / n) * n * i);
      return (l - (l % 1)) / i + (ui(s) ? 0 : ln(s));
    };
  },
  w0 = function (n, i) {
    var s = an(n),
      l,
      a;
    return (
      !s &&
        Xr(n) &&
        ((l = s = n.radius || mr),
        n.values
          ? ((n = gr(n.values)), (a = !ui(n[0])) && (l *= l))
          : (n = zf(n.increment))),
      Wi(
        i,
        s
          ? ht(n)
            ? function (f) {
                return (a = n(f)), Math.abs(a - f) <= l ? a : f;
              }
            : function (f) {
                for (
                  var c = parseFloat(a ? f.x : f),
                    m = parseFloat(a ? f.y : 0),
                    g = mr,
                    v = 0,
                    k = n.length,
                    C,
                    _;
                  k--;

                )
                  a
                    ? ((C = n[k].x - c), (_ = n[k].y - m), (C = C * C + _ * _))
                    : (C = Math.abs(n[k] - c)),
                    C < g && ((g = C), (v = k));
                return (
                  (v = !l || g <= l ? n[v] : f),
                  a || v === f || ui(f) ? v : v + ln(f)
                );
              }
          : zf(n)
      )
    );
  },
  k0 = function (n, i, s, l) {
    return Wi(an(n) ? !i : s === !0 ? !!(s = 0) : !l, function () {
      return an(n)
        ? n[~~(Math.random() * n.length)]
        : (s = s || 1e-5) &&
            (l = s < 1 ? Math.pow(10, (s + "").length - 2) : 1) &&
            Math.floor(
              Math.round((n - s / 2 + Math.random() * (i - n + s * 0.99)) / s) *
                s *
                l
            ) / l;
    });
  },
  Hx = function () {
    for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
      i[s] = arguments[s];
    return function (l) {
      return i.reduce(function (a, f) {
        return f(a);
      }, l);
    };
  },
  Wx = function (n, i) {
    return function (s) {
      return n(parseFloat(s)) + (i || ln(s));
    };
  },
  Yx = function (n, i, s) {
    return S0(n, i, 0, 1, s);
  },
  C0 = function (n, i, s) {
    return Wi(s, function (l) {
      return n[~~i(l)];
    });
  },
  Xx = function p(n, i, s) {
    var l = i - n;
    return an(n)
      ? C0(n, p(0, n.length), i)
      : Wi(s, function (a) {
          return ((l + ((a - n) % l)) % l) + n;
        });
  },
  Gx = function p(n, i, s) {
    var l = i - n,
      a = l * 2;
    return an(n)
      ? C0(n, p(0, n.length - 1), i)
      : Wi(s, function (f) {
          return (f = (a + ((f - n) % a)) % a || 0), n + (f > l ? a - f : f);
        });
  },
  ko = function (n) {
    for (var i = 0, s = "", l, a, f, c; ~(l = n.indexOf("random(", i)); )
      (f = n.indexOf(")", l)),
        (c = n.charAt(l + 7) === "["),
        (a = n.substr(l + 7, f - l - 7).match(c ? s0 : jf)),
        (s +=
          n.substr(i, l - i) + k0(c ? a : +a[0], c ? 0 : +a[1], +a[2] || 1e-5)),
        (i = f + 1);
    return s + n.substr(i, n.length - i);
  },
  S0 = function (n, i, s, l, a) {
    var f = i - n,
      c = l - s;
    return Wi(a, function (m) {
      return s + (((m - n) / f) * c || 0);
    });
  },
  Qx = function p(n, i, s, l) {
    var a = isNaN(n + i)
      ? 0
      : function (_) {
          return (1 - _) * n + _ * i;
        };
    if (!a) {
      var f = $t(n),
        c = {},
        m,
        g,
        v,
        k,
        C;
      if ((s === !0 && (l = 1) && (s = null), f))
        (n = { p: n }), (i = { p: i });
      else if (an(n) && !an(i)) {
        for (v = [], k = n.length, C = k - 2, g = 1; g < k; g++)
          v.push(p(n[g - 1], n[g]));
        k--,
          (a = function (T) {
            T *= k;
            var y = Math.min(C, ~~T);
            return v[y](T - y);
          }),
          (s = i);
      } else l || (n = fl(an(n) ? [] : {}, n));
      if (!v) {
        for (m in i) od.call(c, n, m, "get", i[m]);
        a = function (T) {
          return fd(T, c) || (f ? n.p : n);
        };
      }
    }
    return Wi(s, a);
  },
  g1 = function (n, i, s) {
    var l = n.labels,
      a = mr,
      f,
      c,
      m;
    for (f in l)
      (c = l[f] - i),
        c < 0 == !!s && c && a > (c = Math.abs(c)) && ((m = f), (a = c));
    return m;
  },
  Jn = function (n, i, s) {
    var l = n.vars,
      a = l[i],
      f = st,
      c = n._ctx,
      m,
      g,
      v;
    if (a)
      return (
        (m = l[i + "Params"]),
        (g = l.callbackScope || n),
        s && Fi.length && su(),
        c && (st = c),
        (v = m ? a.apply(g, m) : a.call(g)),
        (st = f),
        v
      );
  },
  eo = function (n) {
    return (
      $i(n),
      n.scrollTrigger && n.scrollTrigger.kill(!!Gt),
      n.progress() < 1 && Jn(n, "onInterrupt"),
      n
    );
  },
  nl,
  N0 = [],
  j0 = function (n) {
    if (n)
      if (((n = (!n.name && n.default) || n), ed() || n.headless)) {
        var i = n.name,
          s = ht(n),
          l =
            i && !s && n.init
              ? function () {
                  this._props = [];
                }
              : n,
          a = {
            init: wo,
            render: fd,
            add: od,
            kill: fv,
            modifier: cv,
            rawVars: 0,
          },
          f = {
            targetTest: 0,
            get: 0,
            getSetter: cd,
            aliases: {},
            register: 0,
          };
        if ((hl(), n !== l)) {
          if (Qn[i]) return;
          nr(l, nr(lu(n, a), f)),
            fl(l.prototype, fl(a, lu(n, f))),
            (Qn[(l.prop = i)] = l),
            n.targetTest && (Ga.push(l), (rd[i] = 1)),
            (i =
              (i === "css" ? "CSS" : i.charAt(0).toUpperCase() + i.substr(1)) +
              "Plugin");
        }
        a0(i, l), n.register && n.register(In, l, Ln);
      } else N0.push(n);
  },
  He = 255,
  to = {
    aqua: [0, He, He],
    lime: [0, He, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, He],
    navy: [0, 0, 128],
    white: [He, He, He],
    olive: [128, 128, 0],
    yellow: [He, He, 0],
    orange: [He, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [He, 0, 0],
    pink: [He, 192, 203],
    cyan: [0, He, He],
    transparent: [He, He, He, 0],
  },
  df = function (n, i, s) {
    return (
      (n += n < 0 ? 1 : n > 1 ? -1 : 0),
      ((n * 6 < 1
        ? i + (s - i) * n * 6
        : n < 0.5
        ? s
        : n * 3 < 2
        ? i + (s - i) * (2 / 3 - n) * 6
        : i) *
        He +
        0.5) |
        0
    );
  },
  E0 = function (n, i, s) {
    var l = n ? (ui(n) ? [n >> 16, (n >> 8) & He, n & He] : 0) : to.black,
      a,
      f,
      c,
      m,
      g,
      v,
      k,
      C,
      _,
      T;
    if (!l) {
      if ((n.substr(-1) === "," && (n = n.substr(0, n.length - 1)), to[n]))
        l = to[n];
      else if (n.charAt(0) === "#") {
        if (
          (n.length < 6 &&
            ((a = n.charAt(1)),
            (f = n.charAt(2)),
            (c = n.charAt(3)),
            (n =
              "#" +
              a +
              a +
              f +
              f +
              c +
              c +
              (n.length === 5 ? n.charAt(4) + n.charAt(4) : ""))),
          n.length === 9)
        )
          return (
            (l = parseInt(n.substr(1, 6), 16)),
            [l >> 16, (l >> 8) & He, l & He, parseInt(n.substr(7), 16) / 255]
          );
        (n = parseInt(n.substr(1), 16)), (l = [n >> 16, (n >> 8) & He, n & He]);
      } else if (n.substr(0, 3) === "hsl") {
        if (((l = T = n.match(jf)), !i))
          (m = (+l[0] % 360) / 360),
            (g = +l[1] / 100),
            (v = +l[2] / 100),
            (f = v <= 0.5 ? v * (g + 1) : v + g - v * g),
            (a = v * 2 - f),
            l.length > 3 && (l[3] *= 1),
            (l[0] = df(m + 1 / 3, a, f)),
            (l[1] = df(m, a, f)),
            (l[2] = df(m - 1 / 3, a, f));
        else if (~n.indexOf("="))
          return (l = n.match(r0)), s && l.length < 4 && (l[3] = 1), l;
      } else l = n.match(jf) || to.transparent;
      l = l.map(Number);
    }
    return (
      i &&
        !T &&
        ((a = l[0] / He),
        (f = l[1] / He),
        (c = l[2] / He),
        (k = Math.max(a, f, c)),
        (C = Math.min(a, f, c)),
        (v = (k + C) / 2),
        k === C
          ? (m = g = 0)
          : ((_ = k - C),
            (g = v > 0.5 ? _ / (2 - k - C) : _ / (k + C)),
            (m =
              k === a
                ? (f - c) / _ + (f < c ? 6 : 0)
                : k === f
                ? (c - a) / _ + 2
                : (a - f) / _ + 4),
            (m *= 60)),
        (l[0] = ~~(m + 0.5)),
        (l[1] = ~~(g * 100 + 0.5)),
        (l[2] = ~~(v * 100 + 0.5))),
      s && l.length < 4 && (l[3] = 1),
      l
    );
  },
  T0 = function (n) {
    var i = [],
      s = [],
      l = -1;
    return (
      n.split(Bi).forEach(function (a) {
        var f = a.match(tl) || [];
        i.push.apply(i, f), s.push((l += f.length + 1));
      }),
      (i.c = s),
      i
    );
  },
  x1 = function (n, i, s) {
    var l = "",
      a = (n + l).match(Bi),
      f = i ? "hsla(" : "rgba(",
      c = 0,
      m,
      g,
      v,
      k;
    if (!a) return n;
    if (
      ((a = a.map(function (C) {
        return (
          (C = E0(C, i, 1)) &&
          f +
            (i ? C[0] + "," + C[1] + "%," + C[2] + "%," + C[3] : C.join(",")) +
            ")"
        );
      })),
      s && ((v = T0(n)), (m = s.c), m.join(l) !== v.c.join(l)))
    )
      for (g = n.replace(Bi, "1").split(tl), k = g.length - 1; c < k; c++)
        l +=
          g[c] +
          (~m.indexOf(c)
            ? a.shift() || f + "0,0,0,0)"
            : (v.length ? v : a.length ? a : s).shift());
    if (!g)
      for (g = n.split(Bi), k = g.length - 1; c < k; c++) l += g[c] + a[c];
    return l + g[k];
  },
  Bi = (function () {
    var p =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      n;
    for (n in to) p += "|" + n + "\\b";
    return new RegExp(p + ")", "gi");
  })(),
  Zx = /hsl[a]?\(/,
  M0 = function (n) {
    var i = n.join(" "),
      s;
    if (((Bi.lastIndex = 0), Bi.test(i)))
      return (
        (s = Zx.test(i)),
        (n[1] = x1(n[1], s)),
        (n[0] = x1(n[0], s, T0(n[1]))),
        !0
      );
  },
  Co,
  qn = (function () {
    var p = Date.now,
      n = 500,
      i = 33,
      s = p(),
      l = s,
      a = 1e3 / 240,
      f = a,
      c = [],
      m,
      g,
      v,
      k,
      C,
      _,
      T = function y(M) {
        var I = p() - l,
          L = M === !0,
          B,
          z,
          A,
          U;
        if (
          ((I > n || I < 0) && (s += I - i),
          (l += I),
          (A = l - s),
          (B = A - f),
          (B > 0 || L) &&
            ((U = ++k.frame),
            (C = A - k.time * 1e3),
            (k.time = A = A / 1e3),
            (f += B + (B >= a ? 4 : a - B)),
            (z = 1)),
          L || (m = g(y)),
          z)
        )
          for (_ = 0; _ < c.length; _++) c[_](A, C, U, M);
      };
    return (
      (k = {
        time: 0,
        frame: 0,
        tick: function () {
          T(!0);
        },
        deltaRatio: function (M) {
          return C / (1e3 / (M || 60));
        },
        wake: function () {
          l0 &&
            (!Ef &&
              ed() &&
              ((Ur = Ef = window),
              (td = Ur.document || {}),
              (tr.gsap = In),
              (Ur.gsapVersions || (Ur.gsapVersions = [])).push(In.version),
              o0(iu || Ur.GreenSockGlobals || (!Ur.gsap && Ur) || {}),
              N0.forEach(j0)),
            (v = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            m && k.sleep(),
            (g =
              v ||
              function (M) {
                return setTimeout(M, (f - k.time * 1e3 + 1) | 0);
              }),
            (Co = 1),
            T(2));
        },
        sleep: function () {
          (v ? cancelAnimationFrame : clearTimeout)(m), (Co = 0), (g = wo);
        },
        lagSmoothing: function (M, I) {
          (n = M || 1 / 0), (i = Math.min(I || 33, n));
        },
        fps: function (M) {
          (a = 1e3 / (M || 240)), (f = k.time * 1e3 + a);
        },
        add: function (M, I, L) {
          var B = I
            ? function (z, A, U, O) {
                M(z, A, U, O), k.remove(B);
              }
            : M;
          return k.remove(M), c[L ? "unshift" : "push"](B), hl(), B;
        },
        remove: function (M, I) {
          ~(I = c.indexOf(M)) && c.splice(I, 1) && _ >= I && _--;
        },
        _listeners: c,
      }),
      k
    );
  })(),
  hl = function () {
    return !Co && qn.wake();
  },
  Ae = {},
  qx = /^[\d.\-M][\d.\-,\s]/,
  Kx = /["']/g,
  Jx = function (n) {
    for (
      var i = {},
        s = n.substr(1, n.length - 3).split(":"),
        l = s[0],
        a = 1,
        f = s.length,
        c,
        m,
        g;
      a < f;
      a++
    )
      (m = s[a]),
        (c = a !== f - 1 ? m.lastIndexOf(",") : m.length),
        (g = m.substr(0, c)),
        (i[l] = isNaN(g) ? g.replace(Kx, "").trim() : +g),
        (l = m.substr(c + 1).trim());
    return i;
  },
  ev = function (n) {
    var i = n.indexOf("(") + 1,
      s = n.indexOf(")"),
      l = n.indexOf("(", i);
    return n.substring(i, ~l && l < s ? n.indexOf(")", s + 1) : s);
  },
  tv = function (n) {
    var i = (n + "").split("("),
      s = Ae[i[0]];
    return s && i.length > 1 && s.config
      ? s.config.apply(
          null,
          ~n.indexOf("{") ? [Jx(i[1])] : ev(n).split(",").map(d0)
        )
      : Ae._CE && qx.test(n)
      ? Ae._CE("", n)
      : s;
  },
  P0 = function (n) {
    return function (i) {
      return 1 - n(1 - i);
    };
  },
  R0 = function p(n, i) {
    for (var s = n._first, l; s; )
      s instanceof yn
        ? p(s, i)
        : s.vars.yoyoEase &&
          (!s._yoyo || !s._repeat) &&
          s._yoyo !== i &&
          (s.timeline
            ? p(s.timeline, i)
            : ((l = s._ease),
              (s._ease = s._yEase),
              (s._yEase = l),
              (s._yoyo = i))),
        (s = s._next);
  },
  gs = function (n, i) {
    return (n && (ht(n) ? n : Ae[n] || tv(n))) || i;
  },
  Ns = function (n, i, s, l) {
    s === void 0 &&
      (s = function (m) {
        return 1 - i(1 - m);
      }),
      l === void 0 &&
        (l = function (m) {
          return m < 0.5 ? i(m * 2) / 2 : 1 - i((1 - m) * 2) / 2;
        });
    var a = { easeIn: i, easeOut: s, easeInOut: l },
      f;
    return (
      On(n, function (c) {
        (Ae[c] = tr[c] = a), (Ae[(f = c.toLowerCase())] = s);
        for (var m in a)
          Ae[
            f + (m === "easeIn" ? ".in" : m === "easeOut" ? ".out" : ".inOut")
          ] = Ae[c + "." + m] = a[m];
      }),
      a
    );
  },
  b0 = function (n) {
    return function (i) {
      return i < 0.5 ? (1 - n(1 - i * 2)) / 2 : 0.5 + n((i - 0.5) * 2) / 2;
    };
  },
  pf = function p(n, i, s) {
    var l = i >= 1 ? i : 1,
      a = (s || (n ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      f = (a / Nf) * (Math.asin(1 / l) || 0),
      c = function (v) {
        return v === 1 ? 1 : l * Math.pow(2, -10 * v) * Mx((v - f) * a) + 1;
      },
      m =
        n === "out"
          ? c
          : n === "in"
          ? function (g) {
              return 1 - c(1 - g);
            }
          : b0(c);
    return (
      (a = Nf / a),
      (m.config = function (g, v) {
        return p(n, g, v);
      }),
      m
    );
  },
  hf = function p(n, i) {
    i === void 0 && (i = 1.70158);
    var s = function (f) {
        return f ? --f * f * ((i + 1) * f + i) + 1 : 0;
      },
      l =
        n === "out"
          ? s
          : n === "in"
          ? function (a) {
              return 1 - s(1 - a);
            }
          : b0(s);
    return (
      (l.config = function (a) {
        return p(n, a);
      }),
      l
    );
  };
On("Linear,Quad,Cubic,Quart,Quint,Strong", function (p, n) {
  var i = n < 5 ? n + 1 : n;
  Ns(
    p + ",Power" + (i - 1),
    n
      ? function (s) {
          return Math.pow(s, i);
        }
      : function (s) {
          return s;
        },
    function (s) {
      return 1 - Math.pow(1 - s, i);
    },
    function (s) {
      return s < 0.5
        ? Math.pow(s * 2, i) / 2
        : 1 - Math.pow((1 - s) * 2, i) / 2;
    }
  );
});
Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn;
Ns("Elastic", pf("in"), pf("out"), pf());
(function (p, n) {
  var i = 1 / n,
    s = 2 * i,
    l = 2.5 * i,
    a = function (c) {
      return c < i
        ? p * c * c
        : c < s
        ? p * Math.pow(c - 1.5 / n, 2) + 0.75
        : c < l
        ? p * (c -= 2.25 / n) * c + 0.9375
        : p * Math.pow(c - 2.625 / n, 2) + 0.984375;
    };
  Ns(
    "Bounce",
    function (f) {
      return 1 - a(1 - f);
    },
    a
  );
})(7.5625, 2.75);
Ns("Expo", function (p) {
  return Math.pow(2, 10 * (p - 1)) * p + p * p * p * p * p * p * (1 - p);
});
Ns("Circ", function (p) {
  return -(t0(1 - p * p) - 1);
});
Ns("Sine", function (p) {
  return p === 1 ? 1 : -Tx(p * jx) + 1;
});
Ns("Back", hf("in"), hf("out"), hf());
Ae.SteppedEase =
  Ae.steps =
  tr.SteppedEase =
    {
      config: function (n, i) {
        n === void 0 && (n = 1);
        var s = 1 / n,
          l = n + (i ? 0 : 1),
          a = i ? 1 : 0,
          f = 1 - We;
        return function (c) {
          return (((l * Mo(0, f, c)) | 0) + a) * s;
        };
      },
    };
cl.ease = Ae["quad.out"];
On(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (p) {
    return (id += p + "," + p + "Params,");
  }
);
var z0 = function (n, i) {
    (this.id = Ex++),
      (n._gsap = this),
      (this.target = n),
      (this.harness = i),
      (this.get = i ? i.get : c0),
      (this.set = i ? i.getSetter : cd);
  },
  So = (function () {
    function p(i) {
      (this.vars = i),
        (this._delay = +i.delay || 0),
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
          ((this._rDelay = i.repeatDelay || 0),
          (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
        (this._ts = 1),
        pl(this, +i.duration, 1, 1),
        (this.data = i.data),
        st && ((this._ctx = st), st.data.push(this)),
        Co || qn.wake();
    }
    var n = p.prototype;
    return (
      (n.delay = function (s) {
        return s || s === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + s - this._delay),
            (this._delay = s),
            this)
          : this._delay;
      }),
      (n.duration = function (s) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? s + (s + this._rDelay) * this._repeat : s
            )
          : this.totalDuration() && this._dur;
      }),
      (n.totalDuration = function (s) {
        return arguments.length
          ? ((this._dirty = 0),
            pl(
              this,
              this._repeat < 0
                ? s
                : (s - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (n.totalTime = function (s, l) {
        if ((hl(), !arguments.length)) return this._tTime;
        var a = this._dp;
        if (a && a.smoothChildTiming && this._ts) {
          for (yu(this, s), !a._dp || a.parent || m0(a, this); a && a.parent; )
            a.parent._time !==
              a._start +
                (a._ts >= 0
                  ? a._tTime / a._ts
                  : (a.totalDuration() - a._tTime) / -a._ts) &&
              a.totalTime(a._tTime, !0),
              (a = a.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && s < this._tDur) ||
              (this._ts < 0 && s > 0) ||
              (!this._tDur && !s)) &&
            Vr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== s ||
            (!this._dur && !l) ||
            (this._initted && Math.abs(this._zTime) === We) ||
            (!s && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = s), f0(this, s, l)),
          this
        );
      }),
      (n.time = function (s, l) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), s + h1(this)) %
                (this._dur + this._rDelay) || (s ? this._dur : 0),
              l
            )
          : this._time;
      }),
      (n.totalProgress = function (s, l) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * s, l)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (n.progress = function (s, l) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - s : s) +
                h1(this),
              l
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (n.iteration = function (s, l) {
        var a = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (s - 1) * a, l)
          : this._repeat
          ? dl(this._tTime, a) + 1
          : 1;
      }),
      (n.timeScale = function (s, l) {
        if (!arguments.length) return this._rts === -We ? 0 : this._rts;
        if (this._rts === s) return this;
        var a =
          this.parent && this._ts ? ou(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +s || 0),
          (this._ts = this._ps || s === -We ? 0 : this._rts),
          this.totalTime(
            Mo(-Math.abs(this._delay), this.totalDuration(), a),
            l !== !1
          ),
          _u(this),
          Lx(this)
        );
      }),
      (n.paused = function (s) {
        return arguments.length
          ? (this._ps !== s &&
              ((this._ps = s),
              s
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (hl(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== We &&
                      (this._tTime -= We)
                  ))),
            this)
          : this._ps;
      }),
      (n.startTime = function (s) {
        if (arguments.length) {
          this._start = s;
          var l = this.parent || this._dp;
          return (
            l && (l._sort || !this.parent) && Vr(l, this, s - this._delay), this
          );
        }
        return this._start;
      }),
      (n.endTime = function (s) {
        return (
          this._start +
          (Dn(s) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (n.rawTime = function (s) {
        var l = this.parent || this._dp;
        return l
          ? s &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ou(l.rawTime(s), this)
            : this._tTime
          : this._tTime;
      }),
      (n.revert = function (s) {
        s === void 0 && (s = bx);
        var l = Gt;
        return (
          (Gt = s),
          ld(this) &&
            (this.timeline && this.timeline.revert(s),
            this.totalTime(-0.01, s.suppressEvents)),
          this.data !== "nested" && s.kill !== !1 && this.kill(),
          (Gt = l),
          this
        );
      }),
      (n.globalTime = function (s) {
        for (var l = this, a = arguments.length ? s : l.rawTime(); l; )
          (a = l._start + a / (Math.abs(l._ts) || 1)), (l = l._dp);
        return !this.parent && this._sat ? this._sat.globalTime(s) : a;
      }),
      (n.repeat = function (s) {
        return arguments.length
          ? ((this._repeat = s === 1 / 0 ? -2 : s), m1(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (n.repeatDelay = function (s) {
        if (arguments.length) {
          var l = this._time;
          return (this._rDelay = s), m1(this), l ? this.time(l) : this;
        }
        return this._rDelay;
      }),
      (n.yoyo = function (s) {
        return arguments.length ? ((this._yoyo = s), this) : this._yoyo;
      }),
      (n.seek = function (s, l) {
        return this.totalTime(dr(this, s), Dn(l));
      }),
      (n.restart = function (s, l) {
        return (
          this.play().totalTime(s ? -this._delay : 0, Dn(l)),
          this._dur || (this._zTime = -We),
          this
        );
      }),
      (n.play = function (s, l) {
        return s != null && this.seek(s, l), this.reversed(!1).paused(!1);
      }),
      (n.reverse = function (s, l) {
        return (
          s != null && this.seek(s || this.totalDuration(), l),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.pause = function (s, l) {
        return s != null && this.seek(s, l), this.paused(!0);
      }),
      (n.resume = function () {
        return this.paused(!1);
      }),
      (n.reversed = function (s) {
        return arguments.length
          ? (!!s !== this.reversed() &&
              this.timeScale(-this._rts || (s ? -We : 0)),
            this)
          : this._rts < 0;
      }),
      (n.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -We), this;
      }),
      (n.isActive = function () {
        var s = this.parent || this._dp,
          l = this._start,
          a;
        return !!(
          !s ||
          (this._ts &&
            this._initted &&
            s.isActive() &&
            (a = s.rawTime(!0)) >= l &&
            a < this.endTime(!0) - We)
        );
      }),
      (n.eventCallback = function (s, l, a) {
        var f = this.vars;
        return arguments.length > 1
          ? (l
              ? ((f[s] = l),
                a && (f[s + "Params"] = a),
                s === "onUpdate" && (this._onUpdate = l))
              : delete f[s],
            this)
          : f[s];
      }),
      (n.then = function (s) {
        var l = this;
        return new Promise(function (a) {
          var f = ht(s) ? s : p0,
            c = function () {
              var g = l.then;
              (l.then = null),
                ht(f) && (f = f(l)) && (f.then || f === l) && (l.then = g),
                a(f),
                (l.then = g);
            };
          (l._initted && l.totalProgress() === 1 && l._ts >= 0) ||
          (!l._tTime && l._ts < 0)
            ? c()
            : (l._prom = c);
        });
      }),
      (n.kill = function () {
        eo(this);
      }),
      p
    );
  })();
nr(So.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -We,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var yn = (function (p) {
  e0(n, p);
  function n(s, l) {
    var a;
    return (
      s === void 0 && (s = {}),
      (a = p.call(this, s) || this),
      (a.labels = {}),
      (a.smoothChildTiming = !!s.smoothChildTiming),
      (a.autoRemoveChildren = !!s.autoRemoveChildren),
      (a._sort = Dn(s.sortChildren)),
      ut && Vr(s.parent || ut, ii(a), l),
      s.reversed && a.reverse(),
      s.paused && a.paused(!0),
      s.scrollTrigger && g0(ii(a), s.scrollTrigger),
      a
    );
  }
  var i = n.prototype;
  return (
    (i.to = function (l, a, f) {
      return ao(0, arguments, this), this;
    }),
    (i.from = function (l, a, f) {
      return ao(1, arguments, this), this;
    }),
    (i.fromTo = function (l, a, f, c) {
      return ao(2, arguments, this), this;
    }),
    (i.set = function (l, a, f) {
      return (
        (a.duration = 0),
        (a.parent = this),
        oo(a).repeatDelay || (a.repeat = 0),
        (a.immediateRender = !!a.immediateRender),
        new jt(l, a, dr(this, f), 1),
        this
      );
    }),
    (i.call = function (l, a, f) {
      return Vr(this, jt.delayedCall(0, l, a), f);
    }),
    (i.staggerTo = function (l, a, f, c, m, g, v) {
      return (
        (f.duration = a),
        (f.stagger = f.stagger || c),
        (f.onComplete = g),
        (f.onCompleteParams = v),
        (f.parent = this),
        new jt(l, f, dr(this, m)),
        this
      );
    }),
    (i.staggerFrom = function (l, a, f, c, m, g, v) {
      return (
        (f.runBackwards = 1),
        (oo(f).immediateRender = Dn(f.immediateRender)),
        this.staggerTo(l, a, f, c, m, g, v)
      );
    }),
    (i.staggerFromTo = function (l, a, f, c, m, g, v, k) {
      return (
        (c.startAt = f),
        (oo(c).immediateRender = Dn(c.immediateRender)),
        this.staggerTo(l, a, c, m, g, v, k)
      );
    }),
    (i.render = function (l, a, f) {
      var c = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        v = l <= 0 ? 0 : Et(l),
        k = this._zTime < 0 != l < 0 && (this._initted || !g),
        C,
        _,
        T,
        y,
        M,
        I,
        L,
        B,
        z,
        A,
        U,
        O;
      if (
        (this !== ut && v > m && l >= 0 && (v = m), v !== this._tTime || f || k)
      ) {
        if (
          (c !== this._time &&
            g &&
            ((v += this._time - c), (l += this._time - c)),
          (C = v),
          (z = this._start),
          (B = this._ts),
          (I = !B),
          k && (g || (c = this._zTime), (l || !a) && (this._zTime = l)),
          this._repeat)
        ) {
          if (
            ((U = this._yoyo),
            (M = g + this._rDelay),
            this._repeat < -1 && l < 0)
          )
            return this.totalTime(M * 100 + l, a, f);
          if (
            ((C = Et(v % M)),
            v === m
              ? ((y = this._repeat), (C = g))
              : ((A = Et(v / M)),
                (y = ~~A),
                y && y === A && ((C = g), y--),
                C > g && (C = g)),
            (A = dl(this._tTime, M)),
            !c &&
              this._tTime &&
              A !== y &&
              this._tTime - A * M - this._dur <= 0 &&
              (A = y),
            U && y & 1 && ((C = g - C), (O = 1)),
            y !== A && !this._lock)
          ) {
            var Y = U && A & 1,
              $ = Y === (U && y & 1);
            if (
              (y < A && (Y = !Y),
              (c = Y ? 0 : v % g ? g : v),
              (this._lock = 1),
              (this.render(c || (O ? 0 : Et(y * M)), a, !g)._lock = 0),
              (this._tTime = v),
              !a && this.parent && Jn(this, "onRepeat"),
              this.vars.repeatRefresh && !O && (this.invalidate()._lock = 1),
              (c && c !== this._time) ||
                I !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((g = this._dur),
              (m = this._tDur),
              $ &&
                ((this._lock = 2),
                (c = Y ? g : -1e-4),
                this.render(c, !0),
                this.vars.repeatRefresh && !O && this.invalidate()),
              (this._lock = 0),
              !this._ts && !I)
            )
              return this;
            R0(this, O);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((L = Bx(this, Et(c), Et(C))), L && (v -= C - (C = L._start))),
          (this._tTime = v),
          (this._time = C),
          (this._act = !B),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = l),
            (c = 0)),
          !c && v && !a && !A && (Jn(this, "onStart"), this._tTime !== v))
        )
          return this;
        if (C >= c && l >= 0)
          for (_ = this._first; _; ) {
            if (
              ((T = _._next), (_._act || C >= _._start) && _._ts && L !== _)
            ) {
              if (_.parent !== this) return this.render(l, a, f);
              if (
                (_.render(
                  _._ts > 0
                    ? (C - _._start) * _._ts
                    : (_._dirty ? _.totalDuration() : _._tDur) +
                        (C - _._start) * _._ts,
                  a,
                  f
                ),
                C !== this._time || (!this._ts && !I))
              ) {
                (L = 0), T && (v += this._zTime = -We);
                break;
              }
            }
            _ = T;
          }
        else {
          _ = this._last;
          for (var X = l < 0 ? l : C; _; ) {
            if (((T = _._prev), (_._act || X <= _._end) && _._ts && L !== _)) {
              if (_.parent !== this) return this.render(l, a, f);
              if (
                (_.render(
                  _._ts > 0
                    ? (X - _._start) * _._ts
                    : (_._dirty ? _.totalDuration() : _._tDur) +
                        (X - _._start) * _._ts,
                  a,
                  f || (Gt && ld(_))
                ),
                C !== this._time || (!this._ts && !I))
              ) {
                (L = 0), T && (v += this._zTime = X ? -We : We);
                break;
              }
            }
            _ = T;
          }
        }
        if (
          L &&
          !a &&
          (this.pause(),
          (L.render(C >= c ? 0 : -We)._zTime = C >= c ? 1 : -1),
          this._ts)
        )
          return (this._start = z), _u(this), this.render(l, a, f);
        this._onUpdate && !a && Jn(this, "onUpdate", !0),
          ((v === m && this._tTime >= this.totalDuration()) || (!v && c)) &&
            (z === this._start || Math.abs(B) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((l || !g) &&
                ((v === m && this._ts > 0) || (!v && this._ts < 0)) &&
                $i(this, 1),
              !a &&
                !(l < 0 && !c) &&
                (v || c || !m) &&
                (Jn(
                  this,
                  v === m && l >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(v < m && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (i.add = function (l, a) {
      var f = this;
      if ((ui(a) || (a = dr(this, a, l)), !(l instanceof So))) {
        if (an(l))
          return (
            l.forEach(function (c) {
              return f.add(c, a);
            }),
            this
          );
        if ($t(l)) return this.addLabel(l, a);
        if (ht(l)) l = jt.delayedCall(0, l);
        else return this;
      }
      return this !== l ? Vr(this, l, a) : this;
    }),
    (i.getChildren = function (l, a, f, c) {
      l === void 0 && (l = !0),
        a === void 0 && (a = !0),
        f === void 0 && (f = !0),
        c === void 0 && (c = -mr);
      for (var m = [], g = this._first; g; )
        g._start >= c &&
          (g instanceof jt
            ? a && m.push(g)
            : (f && m.push(g), l && m.push.apply(m, g.getChildren(!0, a, f)))),
          (g = g._next);
      return m;
    }),
    (i.getById = function (l) {
      for (var a = this.getChildren(1, 1, 1), f = a.length; f--; )
        if (a[f].vars.id === l) return a[f];
    }),
    (i.remove = function (l) {
      return $t(l)
        ? this.removeLabel(l)
        : ht(l)
        ? this.killTweensOf(l)
        : (l.parent === this && vu(this, l),
          l === this._recent && (this._recent = this._last),
          ms(this));
    }),
    (i.totalTime = function (l, a) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Et(
              qn.time -
                (this._ts > 0
                  ? l / this._ts
                  : (this.totalDuration() - l) / -this._ts)
            )),
          p.prototype.totalTime.call(this, l, a),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (l, a) {
      return (this.labels[l] = dr(this, a)), this;
    }),
    (i.removeLabel = function (l) {
      return delete this.labels[l], this;
    }),
    (i.addPause = function (l, a, f) {
      var c = jt.delayedCall(0, a || wo, f);
      return (
        (c.data = "isPause"), (this._hasPause = 1), Vr(this, c, dr(this, l))
      );
    }),
    (i.removePause = function (l) {
      var a = this._first;
      for (l = dr(this, l); a; )
        a._start === l && a.data === "isPause" && $i(a), (a = a._next);
    }),
    (i.killTweensOf = function (l, a, f) {
      for (var c = this.getTweensOf(l, f), m = c.length; m--; )
        zi !== c[m] && c[m].kill(l, a);
      return this;
    }),
    (i.getTweensOf = function (l, a) {
      for (var f = [], c = gr(l), m = this._first, g = ui(a), v; m; )
        m instanceof jt
          ? zx(m._targets, c) &&
            (g
              ? (!zi || (m._initted && m._ts)) &&
                m.globalTime(0) <= a &&
                m.globalTime(m.totalDuration()) > a
              : !a || m.isActive()) &&
            f.push(m)
          : (v = m.getTweensOf(c, a)).length && f.push.apply(f, v),
          (m = m._next);
      return f;
    }),
    (i.tweenTo = function (l, a) {
      a = a || {};
      var f = this,
        c = dr(f, l),
        m = a,
        g = m.startAt,
        v = m.onStart,
        k = m.onStartParams,
        C = m.immediateRender,
        _,
        T = jt.to(
          f,
          nr(
            {
              ease: a.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: c,
              overwrite: "auto",
              duration:
                a.duration ||
                Math.abs(
                  (c - (g && "time" in g ? g.time : f._time)) / f.timeScale()
                ) ||
                We,
              onStart: function () {
                if ((f.pause(), !_)) {
                  var M =
                    a.duration ||
                    Math.abs(
                      (c - (g && "time" in g ? g.time : f._time)) /
                        f.timeScale()
                    );
                  T._dur !== M && pl(T, M, 0, 1).render(T._time, !0, !0),
                    (_ = 1);
                }
                v && v.apply(T, k || []);
              },
            },
            a
          )
        );
      return C ? T.render(0) : T;
    }),
    (i.tweenFromTo = function (l, a, f) {
      return this.tweenTo(a, nr({ startAt: { time: dr(this, l) } }, f));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (l) {
      return l === void 0 && (l = this._time), g1(this, dr(this, l));
    }),
    (i.previousLabel = function (l) {
      return l === void 0 && (l = this._time), g1(this, dr(this, l), 1);
    }),
    (i.currentLabel = function (l) {
      return arguments.length
        ? this.seek(l, !0)
        : this.previousLabel(this._time + We);
    }),
    (i.shiftChildren = function (l, a, f) {
      f === void 0 && (f = 0);
      for (var c = this._first, m = this.labels, g; c; )
        c._start >= f && ((c._start += l), (c._end += l)), (c = c._next);
      if (a) for (g in m) m[g] >= f && (m[g] += l);
      return ms(this);
    }),
    (i.invalidate = function (l) {
      var a = this._first;
      for (this._lock = 0; a; ) a.invalidate(l), (a = a._next);
      return p.prototype.invalidate.call(this, l);
    }),
    (i.clear = function (l) {
      l === void 0 && (l = !0);
      for (var a = this._first, f; a; ) (f = a._next), this.remove(a), (a = f);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        l && (this.labels = {}),
        ms(this)
      );
    }),
    (i.totalDuration = function (l) {
      var a = 0,
        f = this,
        c = f._last,
        m = mr,
        g,
        v,
        k;
      if (arguments.length)
        return f.timeScale(
          (f._repeat < 0 ? f.duration() : f.totalDuration()) /
            (f.reversed() ? -l : l)
        );
      if (f._dirty) {
        for (k = f.parent; c; )
          (g = c._prev),
            c._dirty && c.totalDuration(),
            (v = c._start),
            v > m && f._sort && c._ts && !f._lock
              ? ((f._lock = 1), (Vr(f, c, v - c._delay, 1)._lock = 0))
              : (m = v),
            v < 0 &&
              c._ts &&
              ((a -= v),
              ((!k && !f._dp) || (k && k.smoothChildTiming)) &&
                ((f._start += v / f._ts), (f._time -= v), (f._tTime -= v)),
              f.shiftChildren(-v, !1, -1 / 0),
              (m = 0)),
            c._end > a && c._ts && (a = c._end),
            (c = g);
        pl(f, f === ut && f._time > a ? f._time : a, 1, 1), (f._dirty = 0);
      }
      return f._tDur;
    }),
    (n.updateRoot = function (l) {
      if ((ut._ts && (f0(ut, ou(l, ut)), (u0 = qn.frame)), qn.frame >= d1)) {
        d1 += er.autoSleep || 120;
        var a = ut._first;
        if ((!a || !a._ts) && er.autoSleep && qn._listeners.length < 2) {
          for (; a && !a._ts; ) a = a._next;
          a || qn.sleep();
        }
      }
    }),
    n
  );
})(So);
nr(yn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var nv = function (n, i, s, l, a, f, c) {
    var m = new Ln(this._pt, n, i, 0, 1, F0, null, a),
      g = 0,
      v = 0,
      k,
      C,
      _,
      T,
      y,
      M,
      I,
      L;
    for (
      m.b = s,
        m.e = l,
        s += "",
        l += "",
        (I = ~l.indexOf("random(")) && (l = ko(l)),
        f && ((L = [s, l]), f(L, n, i), (s = L[0]), (l = L[1])),
        C = s.match(cf) || [];
      (k = cf.exec(l));

    )
      (T = k[0]),
        (y = l.substring(g, k.index)),
        _ ? (_ = (_ + 1) % 5) : y.substr(-5) === "rgba(" && (_ = 1),
        T !== C[v++] &&
          ((M = parseFloat(C[v - 1]) || 0),
          (m._pt = {
            _next: m._pt,
            p: y || v === 1 ? y : ",",
            s: M,
            c: T.charAt(1) === "=" ? il(M, T) - M : parseFloat(T) - M,
            m: _ && _ < 4 ? Math.round : 0,
          }),
          (g = cf.lastIndex));
    return (
      (m.c = g < l.length ? l.substring(g, l.length) : ""),
      (m.fp = c),
      (i0.test(l) || I) && (m.e = 0),
      (this._pt = m),
      m
    );
  },
  od = function (n, i, s, l, a, f, c, m, g, v) {
    ht(l) && (l = l(a || 0, n, f));
    var k = n[i],
      C =
        s !== "get"
          ? s
          : ht(k)
          ? g
            ? n[
                i.indexOf("set") || !ht(n["get" + i.substr(3)])
                  ? i
                  : "get" + i.substr(3)
              ](g)
            : n[i]()
          : k,
      _ = ht(k) ? (g ? ov : A0) : ud,
      T;
    if (
      ($t(l) &&
        (~l.indexOf("random(") && (l = ko(l)),
        l.charAt(1) === "=" &&
          ((T = il(C, l) + (ln(C) || 0)), (T || T === 0) && (l = T))),
      !v || C !== l || Df)
    )
      return !isNaN(C * l) && l !== ""
        ? ((T = new Ln(
            this._pt,
            n,
            i,
            +C || 0,
            l - (C || 0),
            typeof k == "boolean" ? uv : I0,
            0,
            _
          )),
          g && (T.fp = g),
          c && T.modifier(c, this, n),
          (this._pt = T))
        : (!k && !(i in n) && nd(i, l),
          nv.call(this, n, i, C, l, _, m || er.stringFilter, g));
  },
  rv = function (n, i, s, l, a) {
    if (
      (ht(n) && (n = uo(n, a, i, s, l)),
      !Xr(n) || (n.style && n.nodeType) || an(n) || n0(n))
    )
      return $t(n) ? uo(n, a, i, s, l) : n;
    var f = {},
      c;
    for (c in n) f[c] = uo(n[c], a, i, s, l);
    return f;
  },
  D0 = function (n, i, s, l, a, f) {
    var c, m, g, v;
    if (
      Qn[n] &&
      (c = new Qn[n]()).init(
        a,
        c.rawVars ? i[n] : rv(i[n], l, a, f, s),
        s,
        l,
        f
      ) !== !1 &&
      ((s._pt = m = new Ln(s._pt, a, n, 0, 1, c.render, c, 0, c.priority)),
      s !== nl)
    )
      for (g = s._ptLookup[s._targets.indexOf(a)], v = c._props.length; v--; )
        g[c._props[v]] = m;
    return c;
  },
  zi,
  Df,
  ad = function p(n, i, s) {
    var l = n.vars,
      a = l.ease,
      f = l.startAt,
      c = l.immediateRender,
      m = l.lazy,
      g = l.onUpdate,
      v = l.runBackwards,
      k = l.yoyoEase,
      C = l.keyframes,
      _ = l.autoRevert,
      T = n._dur,
      y = n._startAt,
      M = n._targets,
      I = n.parent,
      L = I && I.data === "nested" ? I.vars.targets : M,
      B = n._overwrite === "auto" && !Kf,
      z = n.timeline,
      A,
      U,
      O,
      Y,
      $,
      X,
      fe,
      Z,
      he,
      ge,
      Ce,
      de,
      ee;
    if (
      (z && (!C || !a) && (a = "none"),
      (n._ease = gs(a, cl.ease)),
      (n._yEase = k ? P0(gs(k === !0 ? a : k, cl.ease)) : 0),
      k &&
        n._yoyo &&
        !n._repeat &&
        ((k = n._yEase), (n._yEase = n._ease), (n._ease = k)),
      (n._from = !z && !!l.runBackwards),
      !z || (C && !l.stagger))
    ) {
      if (
        ((Z = M[0] ? hs(M[0]).harness : 0),
        (de = Z && l[Z.prop]),
        (A = lu(l, rd)),
        y &&
          (y._zTime < 0 && y.progress(1),
          i < 0 && v && c && !_ ? y.render(-1, !0) : y.revert(v && T ? Xa : Rx),
          (y._lazy = 0)),
        f)
      ) {
        if (
          ($i(
            (n._startAt = jt.set(
              M,
              nr(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: I,
                  immediateRender: !0,
                  lazy: !y && Dn(m),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    g &&
                    function () {
                      return Jn(n, "onUpdate");
                    },
                  stagger: 0,
                },
                f
              )
            ))
          ),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          i < 0 && (Gt || (!c && !_)) && n._startAt.revert(Xa),
          c && T && i <= 0 && s <= 0)
        ) {
          i && (n._zTime = i);
          return;
        }
      } else if (v && T && !y) {
        if (
          (i && (c = !1),
          (O = nr(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: c && !y && Dn(m),
              immediateRender: c,
              stagger: 0,
              parent: I,
            },
            A
          )),
          de && (O[Z.prop] = de),
          $i((n._startAt = jt.set(M, O))),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          i < 0 && (Gt ? n._startAt.revert(Xa) : n._startAt.render(-1, !0)),
          (n._zTime = i),
          !c)
        )
          p(n._startAt, We, We);
        else if (!i) return;
      }
      for (
        n._pt = n._ptCache = 0, m = (T && Dn(m)) || (m && !T), U = 0;
        U < M.length;
        U++
      ) {
        if (
          (($ = M[U]),
          (fe = $._gsap || sd(M)[U]._gsap),
          (n._ptLookup[U] = ge = {}),
          Tf[fe.id] && Fi.length && su(),
          (Ce = L === M ? U : L.indexOf($)),
          Z &&
            (he = new Z()).init($, de || A, n, Ce, L) !== !1 &&
            ((n._pt = Y =
              new Ln(n._pt, $, he.name, 0, 1, he.render, he, 0, he.priority)),
            he._props.forEach(function (V) {
              ge[V] = Y;
            }),
            he.priority && (X = 1)),
          !Z || de)
        )
          for (O in A)
            Qn[O] && (he = D0(O, A, n, Ce, $, L))
              ? he.priority && (X = 1)
              : (ge[O] = Y =
                  od.call(n, $, O, "get", A[O], Ce, L, 0, l.stringFilter));
        n._op && n._op[U] && n.kill($, n._op[U]),
          B &&
            n._pt &&
            ((zi = n),
            ut.killTweensOf($, ge, n.globalTime(i)),
            (ee = !n.parent),
            (zi = 0)),
          n._pt && m && (Tf[fe.id] = 1);
      }
      X && B0(n), n._onInit && n._onInit(n);
    }
    (n._onUpdate = g),
      (n._initted = (!n._op || n._pt) && !ee),
      C && i <= 0 && z.render(mr, !0, !0);
  },
  iv = function (n, i, s, l, a, f, c, m) {
    var g = ((n._pt && n._ptCache) || (n._ptCache = {}))[i],
      v,
      k,
      C,
      _;
    if (!g)
      for (
        g = n._ptCache[i] = [], C = n._ptLookup, _ = n._targets.length;
        _--;

      ) {
        if (((v = C[_][i]), v && v.d && v.d._pt))
          for (v = v.d._pt; v && v.p !== i && v.fp !== i; ) v = v._next;
        if (!v)
          return (
            (Df = 1),
            (n.vars[i] = "+=0"),
            ad(n, c),
            (Df = 0),
            m ? yo(i + " not eligible for reset") : 1
          );
        g.push(v);
      }
    for (_ = g.length; _--; )
      (k = g[_]),
        (v = k._pt || k),
        (v.s = (l || l === 0) && !a ? l : v.s + (l || 0) + f * v.c),
        (v.c = s - v.s),
        k.e && (k.e = _t(s) + ln(k.e)),
        k.b && (k.b = v.s + ln(k.b));
  },
  sv = function (n, i) {
    var s = n[0] ? hs(n[0]).harness : 0,
      l = s && s.aliases,
      a,
      f,
      c,
      m;
    if (!l) return i;
    a = fl({}, i);
    for (f in l)
      if (f in a) for (m = l[f].split(","), c = m.length; c--; ) a[m[c]] = a[f];
    return a;
  },
  lv = function (n, i, s, l) {
    var a = i.ease || l || "power1.inOut",
      f,
      c;
    if (an(i))
      (c = s[n] || (s[n] = [])),
        i.forEach(function (m, g) {
          return c.push({ t: (g / (i.length - 1)) * 100, v: m, e: a });
        });
    else
      for (f in i)
        (c = s[f] || (s[f] = [])),
          f === "ease" || c.push({ t: parseFloat(n), v: i[f], e: a });
  },
  uo = function (n, i, s, l, a) {
    return ht(n)
      ? n.call(i, s, l, a)
      : $t(n) && ~n.indexOf("random(")
      ? ko(n)
      : n;
  },
  O0 = id + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  L0 = {};
On(O0 + ",id,stagger,delay,duration,paused,scrollTrigger", function (p) {
  return (L0[p] = 1);
});
var jt = (function (p) {
  e0(n, p);
  function n(s, l, a, f) {
    var c;
    typeof l == "number" && ((a.duration = l), (l = a), (a = null)),
      (c = p.call(this, f ? l : oo(l)) || this);
    var m = c.vars,
      g = m.duration,
      v = m.delay,
      k = m.immediateRender,
      C = m.stagger,
      _ = m.overwrite,
      T = m.keyframes,
      y = m.defaults,
      M = m.scrollTrigger,
      I = m.yoyoEase,
      L = l.parent || ut,
      B = (an(s) || n0(s) ? ui(s[0]) : "length" in l) ? [s] : gr(s),
      z,
      A,
      U,
      O,
      Y,
      $,
      X,
      fe;
    if (
      ((c._targets = B.length
        ? sd(B)
        : yo(
            "GSAP target " + s + " not found. https://gsap.com",
            !er.nullTargetWarn
          ) || []),
      (c._ptLookup = []),
      (c._overwrite = _),
      T || C || Da(g) || Da(v))
    ) {
      if (
        ((l = c.vars),
        (z = c.timeline =
          new yn({
            data: "nested",
            defaults: y || {},
            targets: L && L.data === "nested" ? L.vars.targets : B,
          })),
        z.kill(),
        (z.parent = z._dp = ii(c)),
        (z._start = 0),
        C || Da(g) || Da(v))
      ) {
        if (((O = B.length), (X = C && y0(C)), Xr(C)))
          for (Y in C) ~O0.indexOf(Y) && (fe || (fe = {}), (fe[Y] = C[Y]));
        for (A = 0; A < O; A++)
          (U = lu(l, L0)),
            (U.stagger = 0),
            I && (U.yoyoEase = I),
            fe && fl(U, fe),
            ($ = B[A]),
            (U.duration = +uo(g, ii(c), A, $, B)),
            (U.delay = (+uo(v, ii(c), A, $, B) || 0) - c._delay),
            !C &&
              O === 1 &&
              U.delay &&
              ((c._delay = v = U.delay), (c._start += v), (U.delay = 0)),
            z.to($, U, X ? X(A, $, B) : 0),
            (z._ease = Ae.none);
        z.duration() ? (g = v = 0) : (c.timeline = 0);
      } else if (T) {
        oo(nr(z.vars.defaults, { ease: "none" })),
          (z._ease = gs(T.ease || l.ease || "none"));
        var Z = 0,
          he,
          ge,
          Ce;
        if (an(T))
          T.forEach(function (de) {
            return z.to(B, de, ">");
          }),
            z.duration();
        else {
          U = {};
          for (Y in T)
            Y === "ease" || Y === "easeEach" || lv(Y, T[Y], U, T.easeEach);
          for (Y in U)
            for (
              he = U[Y].sort(function (de, ee) {
                return de.t - ee.t;
              }),
                Z = 0,
                A = 0;
              A < he.length;
              A++
            )
              (ge = he[A]),
                (Ce = {
                  ease: ge.e,
                  duration: ((ge.t - (A ? he[A - 1].t : 0)) / 100) * g,
                }),
                (Ce[Y] = ge.v),
                z.to(B, Ce, Z),
                (Z += Ce.duration);
          z.duration() < g && z.to({}, { duration: g - z.duration() });
        }
      }
      g || c.duration((g = z.duration()));
    } else c.timeline = 0;
    return (
      _ === !0 && !Kf && ((zi = ii(c)), ut.killTweensOf(B), (zi = 0)),
      Vr(L, ii(c), a),
      l.reversed && c.reverse(),
      l.paused && c.paused(!0),
      (k ||
        (!g &&
          !T &&
          c._start === Et(L._time) &&
          Dn(k) &&
          Ax(ii(c)) &&
          L.data !== "nested")) &&
        ((c._tTime = -We), c.render(Math.max(0, -v) || 0)),
      M && g0(ii(c), M),
      c
    );
  }
  var i = n.prototype;
  return (
    (i.render = function (l, a, f) {
      var c = this._time,
        m = this._tDur,
        g = this._dur,
        v = l < 0,
        k = l > m - We && !v ? m : l < We ? 0 : l,
        C,
        _,
        T,
        y,
        M,
        I,
        L,
        B,
        z;
      if (!g) Fx(this, l, a, f);
      else if (
        k !== this._tTime ||
        !l ||
        f ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== v) ||
        this._lazy
      ) {
        if (((C = k), (B = this.timeline), this._repeat)) {
          if (((y = g + this._rDelay), this._repeat < -1 && v))
            return this.totalTime(y * 100 + l, a, f);
          if (
            ((C = Et(k % y)),
            k === m
              ? ((T = this._repeat), (C = g))
              : ((M = Et(k / y)),
                (T = ~~M),
                T && T === M ? ((C = g), T--) : C > g && (C = g)),
            (I = this._yoyo && T & 1),
            I && ((z = this._yEase), (C = g - C)),
            (M = dl(this._tTime, y)),
            C === c && !f && this._initted && T === M)
          )
            return (this._tTime = k), this;
          T !== M &&
            (B && this._yEase && R0(B, I),
            this.vars.repeatRefresh &&
              !I &&
              !this._lock &&
              C !== y &&
              this._initted &&
              ((this._lock = f = 1),
              (this.render(Et(y * T), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (x0(this, v ? l : C, f, a, k)) return (this._tTime = 0), this;
          if (c !== this._time && !(f && this.vars.repeatRefresh && T !== M))
            return this;
          if (g !== this._dur) return this.render(l, a, f);
        }
        if (
          ((this._tTime = k),
          (this._time = C),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = L = (z || this._ease)(C / g)),
          this._from && (this.ratio = L = 1 - L),
          !c && k && !a && !M && (Jn(this, "onStart"), this._tTime !== k))
        )
          return this;
        for (_ = this._pt; _; ) _.r(L, _.d), (_ = _._next);
        (B && B.render(l < 0 ? l : B._dur * B._ease(C / this._dur), a, f)) ||
          (this._startAt && (this._zTime = l)),
          this._onUpdate &&
            !a &&
            (v && Mf(this, l, a, f), Jn(this, "onUpdate")),
          this._repeat &&
            T !== M &&
            this.vars.onRepeat &&
            !a &&
            this.parent &&
            Jn(this, "onRepeat"),
          (k === this._tDur || !k) &&
            this._tTime === k &&
            (v && !this._onUpdate && Mf(this, l, !0, !0),
            (l || !g) &&
              ((k === this._tDur && this._ts > 0) || (!k && this._ts < 0)) &&
              $i(this, 1),
            !a &&
              !(v && !c) &&
              (k || c || I) &&
              (Jn(this, k === m ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(k < m && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (i.targets = function () {
      return this._targets;
    }),
    (i.invalidate = function (l) {
      return (
        (!l || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(l),
        p.prototype.invalidate.call(this, l)
      );
    }),
    (i.resetTo = function (l, a, f, c, m) {
      Co || qn.wake(), this._ts || this.play();
      var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        v;
      return (
        this._initted || ad(this, g),
        (v = this._ease(g / this._dur)),
        iv(this, l, a, f, c, v, g, m)
          ? this.resetTo(l, a, f, c, 1)
          : (yu(this, 0),
            this.parent ||
              h0(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (i.kill = function (l, a) {
      if ((a === void 0 && (a = "all"), !l && (!a || a === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? eo(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Gt),
          this
        );
      if (this.timeline) {
        var f = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(l, a, zi && zi.vars.overwrite !== !0)
            ._first || eo(this),
          this.parent &&
            f !== this.timeline.totalDuration() &&
            pl(this, (this._dur * this.timeline._tDur) / f, 0, 1),
          this
        );
      }
      var c = this._targets,
        m = l ? gr(l) : c,
        g = this._ptLookup,
        v = this._pt,
        k,
        C,
        _,
        T,
        y,
        M,
        I;
      if ((!a || a === "all") && Ox(c, m))
        return a === "all" && (this._pt = 0), eo(this);
      for (
        k = this._op = this._op || [],
          a !== "all" &&
            ($t(a) &&
              ((y = {}),
              On(a, function (L) {
                return (y[L] = 1);
              }),
              (a = y)),
            (a = sv(c, a))),
          I = c.length;
        I--;

      )
        if (~m.indexOf(c[I])) {
          (C = g[I]),
            a === "all"
              ? ((k[I] = a), (T = C), (_ = {}))
              : ((_ = k[I] = k[I] || {}), (T = a));
          for (y in T)
            (M = C && C[y]),
              M &&
                ((!("kill" in M.d) || M.d.kill(y) === !0) && vu(this, M, "_pt"),
                delete C[y]),
              _ !== "all" && (_[y] = 1);
        }
      return this._initted && !this._pt && v && eo(this), this;
    }),
    (n.to = function (l, a) {
      return new n(l, a, arguments[2]);
    }),
    (n.from = function (l, a) {
      return ao(1, arguments);
    }),
    (n.delayedCall = function (l, a, f, c) {
      return new n(a, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: l,
        onComplete: a,
        onReverseComplete: a,
        onCompleteParams: f,
        onReverseCompleteParams: f,
        callbackScope: c,
      });
    }),
    (n.fromTo = function (l, a, f) {
      return ao(2, arguments);
    }),
    (n.set = function (l, a) {
      return (a.duration = 0), a.repeatDelay || (a.repeat = 0), new n(l, a);
    }),
    (n.killTweensOf = function (l, a, f) {
      return ut.killTweensOf(l, a, f);
    }),
    n
  );
})(So);
nr(jt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
On("staggerTo,staggerFrom,staggerFromTo", function (p) {
  jt[p] = function () {
    var n = new yn(),
      i = Rf.call(arguments, 0);
    return i.splice(p === "staggerFromTo" ? 5 : 4, 0, 0), n[p].apply(n, i);
  };
});
var ud = function (n, i, s) {
    return (n[i] = s);
  },
  A0 = function (n, i, s) {
    return n[i](s);
  },
  ov = function (n, i, s, l) {
    return n[i](l.fp, s);
  },
  av = function (n, i, s) {
    return n.setAttribute(i, s);
  },
  cd = function (n, i) {
    return ht(n[i]) ? A0 : Jf(n[i]) && n.setAttribute ? av : ud;
  },
  I0 = function (n, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * n) * 1e6) / 1e6, i);
  },
  uv = function (n, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * n), i);
  },
  F0 = function (n, i) {
    var s = i._pt,
      l = "";
    if (!n && i.b) l = i.b;
    else if (n === 1 && i.e) l = i.e;
    else {
      for (; s; )
        (l =
          s.p +
          (s.m ? s.m(s.s + s.c * n) : Math.round((s.s + s.c * n) * 1e4) / 1e4) +
          l),
          (s = s._next);
      l += i.c;
    }
    i.set(i.t, i.p, l, i);
  },
  fd = function (n, i) {
    for (var s = i._pt; s; ) s.r(n, s.d), (s = s._next);
  },
  cv = function (n, i, s, l) {
    for (var a = this._pt, f; a; )
      (f = a._next), a.p === l && a.modifier(n, i, s), (a = f);
  },
  fv = function (n) {
    for (var i = this._pt, s, l; i; )
      (l = i._next),
        (i.p === n && !i.op) || i.op === n
          ? vu(this, i, "_pt")
          : i.dep || (s = 1),
        (i = l);
    return !s;
  },
  dv = function (n, i, s, l) {
    l.mSet(n, i, l.m.call(l.tween, s, l.mt), l);
  },
  B0 = function (n) {
    for (var i = n._pt, s, l, a, f; i; ) {
      for (s = i._next, l = a; l && l.pr > i.pr; ) l = l._next;
      (i._prev = l ? l._prev : f) ? (i._prev._next = i) : (a = i),
        (i._next = l) ? (l._prev = i) : (f = i),
        (i = s);
    }
    n._pt = a;
  },
  Ln = (function () {
    function p(i, s, l, a, f, c, m, g, v) {
      (this.t = s),
        (this.s = a),
        (this.c = f),
        (this.p = l),
        (this.r = c || I0),
        (this.d = m || this),
        (this.set = g || ud),
        (this.pr = v || 0),
        (this._next = i),
        i && (i._prev = this);
    }
    var n = p.prototype;
    return (
      (n.modifier = function (s, l, a) {
        (this.mSet = this.mSet || this.set),
          (this.set = dv),
          (this.m = s),
          (this.mt = a),
          (this.tween = l);
      }),
      p
    );
  })();
On(
  id +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (p) {
    return (rd[p] = 1);
  }
);
tr.TweenMax = tr.TweenLite = jt;
tr.TimelineLite = tr.TimelineMax = yn;
ut = new yn({
  sortChildren: !1,
  defaults: cl,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
er.stringFilter = M0;
var xs = [],
  Qa = {},
  pv = [],
  v1 = 0,
  hv = 0,
  mf = function (n) {
    return (Qa[n] || pv).map(function (i) {
      return i();
    });
  },
  Of = function () {
    var n = Date.now(),
      i = [];
    n - v1 > 2 &&
      (mf("matchMediaInit"),
      xs.forEach(function (s) {
        var l = s.queries,
          a = s.conditions,
          f,
          c,
          m,
          g;
        for (c in l)
          (f = Ur.matchMedia(l[c]).matches),
            f && (m = 1),
            f !== a[c] && ((a[c] = f), (g = 1));
        g && (s.revert(), m && i.push(s));
      }),
      mf("matchMediaRevert"),
      i.forEach(function (s) {
        return s.onMatch(s, function (l) {
          return s.add(null, l);
        });
      }),
      (v1 = n),
      mf("matchMedia"));
  },
  U0 = (function () {
    function p(i, s) {
      (this.selector = s && bf(s)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = hv++),
        i && this.add(i);
    }
    var n = p.prototype;
    return (
      (n.add = function (s, l, a) {
        ht(s) && ((a = l), (l = s), (s = ht));
        var f = this,
          c = function () {
            var g = st,
              v = f.selector,
              k;
            return (
              g && g !== f && g.data.push(f),
              a && (f.selector = bf(a)),
              (st = f),
              (k = l.apply(f, arguments)),
              ht(k) && f._r.push(k),
              (st = g),
              (f.selector = v),
              (f.isReverted = !1),
              k
            );
          };
        return (
          (f.last = c),
          s === ht
            ? c(f, function (m) {
                return f.add(null, m);
              })
            : s
            ? (f[s] = c)
            : c
        );
      }),
      (n.ignore = function (s) {
        var l = st;
        (st = null), s(this), (st = l);
      }),
      (n.getTweens = function () {
        var s = [];
        return (
          this.data.forEach(function (l) {
            return l instanceof p
              ? s.push.apply(s, l.getTweens())
              : l instanceof jt &&
                  !(l.parent && l.parent.data === "nested") &&
                  s.push(l);
          }),
          s
        );
      }),
      (n.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (n.kill = function (s, l) {
        var a = this;
        if (
          (s
            ? (function () {
                for (var c = a.getTweens(), m = a.data.length, g; m--; )
                  (g = a.data[m]),
                    g.data === "isFlip" &&
                      (g.revert(),
                      g.getChildren(!0, !0, !1).forEach(function (v) {
                        return c.splice(c.indexOf(v), 1);
                      }));
                for (
                  c
                    .map(function (v) {
                      return {
                        g:
                          v._dur ||
                          v._delay ||
                          (v._sat && !v._sat.vars.immediateRender)
                            ? v.globalTime(0)
                            : -1 / 0,
                        t: v,
                      };
                    })
                    .sort(function (v, k) {
                      return k.g - v.g || -1 / 0;
                    })
                    .forEach(function (v) {
                      return v.t.revert(s);
                    }),
                    m = a.data.length;
                  m--;

                )
                  (g = a.data[m]),
                    g instanceof yn
                      ? g.data !== "nested" &&
                        (g.scrollTrigger && g.scrollTrigger.revert(), g.kill())
                      : !(g instanceof jt) && g.revert && g.revert(s);
                a._r.forEach(function (v) {
                  return v(s, a);
                }),
                  (a.isReverted = !0);
              })()
            : this.data.forEach(function (c) {
                return c.kill && c.kill();
              }),
          this.clear(),
          l)
        )
          for (var f = xs.length; f--; )
            xs[f].id === this.id && xs.splice(f, 1);
      }),
      (n.revert = function (s) {
        this.kill(s || {});
      }),
      p
    );
  })(),
  mv = (function () {
    function p(i) {
      (this.contexts = []), (this.scope = i), st && st.data.push(this);
    }
    var n = p.prototype;
    return (
      (n.add = function (s, l, a) {
        Xr(s) || (s = { matches: s });
        var f = new U0(0, a || this.scope),
          c = (f.conditions = {}),
          m,
          g,
          v;
        st && !f.selector && (f.selector = st.selector),
          this.contexts.push(f),
          (l = f.add("onMatch", l)),
          (f.queries = s);
        for (g in s)
          g === "all"
            ? (v = 1)
            : ((m = Ur.matchMedia(s[g])),
              m &&
                (xs.indexOf(f) < 0 && xs.push(f),
                (c[g] = m.matches) && (v = 1),
                m.addListener
                  ? m.addListener(Of)
                  : m.addEventListener("change", Of)));
        return (
          v &&
            l(f, function (k) {
              return f.add(null, k);
            }),
          this
        );
      }),
      (n.revert = function (s) {
        this.kill(s || {});
      }),
      (n.kill = function (s) {
        this.contexts.forEach(function (l) {
          return l.kill(s, !0);
        });
      }),
      p
    );
  })(),
  au = {
    registerPlugin: function () {
      for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
        i[s] = arguments[s];
      i.forEach(function (l) {
        return j0(l);
      });
    },
    timeline: function (n) {
      return new yn(n);
    },
    getTweensOf: function (n, i) {
      return ut.getTweensOf(n, i);
    },
    getProperty: function (n, i, s, l) {
      $t(n) && (n = gr(n)[0]);
      var a = hs(n || {}).get,
        f = s ? p0 : d0;
      return (
        s === "native" && (s = ""),
        n &&
          (i
            ? f(((Qn[i] && Qn[i].get) || a)(n, i, s, l))
            : function (c, m, g) {
                return f(((Qn[c] && Qn[c].get) || a)(n, c, m, g));
              })
      );
    },
    quickSetter: function (n, i, s) {
      if (((n = gr(n)), n.length > 1)) {
        var l = n.map(function (v) {
            return In.quickSetter(v, i, s);
          }),
          a = l.length;
        return function (v) {
          for (var k = a; k--; ) l[k](v);
        };
      }
      n = n[0] || {};
      var f = Qn[i],
        c = hs(n),
        m = (c.harness && (c.harness.aliases || {})[i]) || i,
        g = f
          ? function (v) {
              var k = new f();
              (nl._pt = 0),
                k.init(n, s ? v + s : v, nl, 0, [n]),
                k.render(1, k),
                nl._pt && fd(1, nl);
            }
          : c.set(n, m);
      return f
        ? g
        : function (v) {
            return g(n, m, s ? v + s : v, c, 1);
          };
    },
    quickTo: function (n, i, s) {
      var l,
        a = In.to(
          n,
          nr(
            ((l = {}), (l[i] = "+=0.1"), (l.paused = !0), (l.stagger = 0), l),
            s || {}
          )
        ),
        f = function (m, g, v) {
          return a.resetTo(i, m, g, v);
        };
      return (f.tween = a), f;
    },
    isTweening: function (n) {
      return ut.getTweensOf(n, !0).length > 0;
    },
    defaults: function (n) {
      return n && n.ease && (n.ease = gs(n.ease, cl.ease)), p1(cl, n || {});
    },
    config: function (n) {
      return p1(er, n || {});
    },
    registerEffect: function (n) {
      var i = n.name,
        s = n.effect,
        l = n.plugins,
        a = n.defaults,
        f = n.extendTimeline;
      (l || "").split(",").forEach(function (c) {
        return (
          c && !Qn[c] && !tr[c] && yo(i + " effect requires " + c + " plugin.")
        );
      }),
        (ff[i] = function (c, m, g) {
          return s(gr(c), nr(m || {}, a), g);
        }),
        f &&
          (yn.prototype[i] = function (c, m, g) {
            return this.add(ff[i](c, Xr(m) ? m : (g = m) && {}, this), g);
          });
    },
    registerEase: function (n, i) {
      Ae[n] = gs(i);
    },
    parseEase: function (n, i) {
      return arguments.length ? gs(n, i) : Ae;
    },
    getById: function (n) {
      return ut.getById(n);
    },
    exportRoot: function (n, i) {
      n === void 0 && (n = {});
      var s = new yn(n),
        l,
        a;
      for (
        s.smoothChildTiming = Dn(n.smoothChildTiming),
          ut.remove(s),
          s._dp = 0,
          s._time = s._tTime = ut._time,
          l = ut._first;
        l;

      )
        (a = l._next),
          (i ||
            !(
              !l._dur &&
              l instanceof jt &&
              l.vars.onComplete === l._targets[0]
            )) &&
            Vr(s, l, l._start - l._delay),
          (l = a);
      return Vr(ut, s, 0), s;
    },
    context: function (n, i) {
      return n ? new U0(n, i) : st;
    },
    matchMedia: function (n) {
      return new mv(n);
    },
    matchMediaRefresh: function () {
      return (
        xs.forEach(function (n) {
          var i = n.conditions,
            s,
            l;
          for (l in i) i[l] && ((i[l] = !1), (s = 1));
          s && n.revert();
        }) || Of()
      );
    },
    addEventListener: function (n, i) {
      var s = Qa[n] || (Qa[n] = []);
      ~s.indexOf(i) || s.push(i);
    },
    removeEventListener: function (n, i) {
      var s = Qa[n],
        l = s && s.indexOf(i);
      l >= 0 && s.splice(l, 1);
    },
    utils: {
      wrap: Xx,
      wrapYoyo: Gx,
      distribute: y0,
      random: k0,
      snap: w0,
      normalize: Yx,
      getUnit: ln,
      clamp: $x,
      splitColor: E0,
      toArray: gr,
      selector: bf,
      mapRange: S0,
      pipe: Hx,
      unitize: Wx,
      interpolate: Qx,
      shuffle: _0,
    },
    install: o0,
    effects: ff,
    ticker: qn,
    updateRoot: yn.updateRoot,
    plugins: Qn,
    globalTimeline: ut,
    core: {
      PropTween: Ln,
      globals: a0,
      Tween: jt,
      Timeline: yn,
      Animation: So,
      getCache: hs,
      _removeLinkedListItem: vu,
      reverting: function () {
        return Gt;
      },
      context: function (n) {
        return n && st && (st.data.push(n), (n._ctx = st)), st;
      },
      suppressOverwrites: function (n) {
        return (Kf = n);
      },
    },
  };
On("to,from,fromTo,delayedCall,set,killTweensOf", function (p) {
  return (au[p] = jt[p]);
});
qn.add(yn.updateRoot);
nl = au.to({}, { duration: 0 });
var gv = function (n, i) {
    for (var s = n._pt; s && s.p !== i && s.op !== i && s.fp !== i; )
      s = s._next;
    return s;
  },
  xv = function (n, i) {
    var s = n._targets,
      l,
      a,
      f;
    for (l in i)
      for (a = s.length; a--; )
        (f = n._ptLookup[a][l]),
          f &&
            (f = f.d) &&
            (f._pt && (f = gv(f, l)),
            f && f.modifier && f.modifier(i[l], n, s[a], l));
  },
  gf = function (n, i) {
    return {
      name: n,
      headless: 1,
      rawVars: 1,
      init: function (l, a, f) {
        f._onInit = function (c) {
          var m, g;
          if (
            ($t(a) &&
              ((m = {}),
              On(a, function (v) {
                return (m[v] = 1);
              }),
              (a = m)),
            i)
          ) {
            m = {};
            for (g in a) m[g] = i(a[g]);
            a = m;
          }
          xv(c, a);
        };
      },
    };
  },
  In =
    au.registerPlugin(
      {
        name: "attr",
        init: function (n, i, s, l, a) {
          var f, c, m;
          this.tween = s;
          for (f in i)
            (m = n.getAttribute(f) || ""),
              (c = this.add(
                n,
                "setAttribute",
                (m || 0) + "",
                i[f],
                l,
                a,
                0,
                0,
                f
              )),
              (c.op = f),
              (c.b = m),
              this._props.push(f);
        },
        render: function (n, i) {
          for (var s = i._pt; s; )
            Gt ? s.set(s.t, s.p, s.b, s) : s.r(n, s.d), (s = s._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (n, i) {
          for (var s = i.length; s--; )
            this.add(n, s, n[s] || 0, i[s], 0, 0, 0, 0, 0, 1);
        },
      },
      gf("roundProps", zf),
      gf("modifiers"),
      gf("snap", w0)
    ) || au;
jt.version = yn.version = In.version = "3.13.0";
l0 = 1;
ed() && hl();
Ae.Power0;
Ae.Power1;
Ae.Power2;
Ae.Power3;
Ae.Power4;
Ae.Linear;
Ae.Quad;
Ae.Cubic;
Ae.Quart;
Ae.Quint;
Ae.Strong;
Ae.Elastic;
Ae.Back;
Ae.SteppedEase;
Ae.Bounce;
Ae.Sine;
Ae.Expo;
Ae.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var _1,
  Di,
  sl,
  dd,
  ds,
  y1,
  pd,
  vv = function () {
    return typeof window < "u";
  },
  ci = {},
  us = 180 / Math.PI,
  ll = Math.PI / 180,
  Zs = Math.atan2,
  w1 = 1e8,
  hd = /([A-Z])/g,
  _v = /(left|right|width|margin|padding|x)/i,
  yv = /[\s,\(]\S/,
  Hr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Lf = function (n, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * n) * 1e4) / 1e4 + i.u, i);
  },
  wv = function (n, i) {
    return i.set(
      i.t,
      i.p,
      n === 1 ? i.e : Math.round((i.s + i.c * n) * 1e4) / 1e4 + i.u,
      i
    );
  },
  kv = function (n, i) {
    return i.set(
      i.t,
      i.p,
      n ? Math.round((i.s + i.c * n) * 1e4) / 1e4 + i.u : i.b,
      i
    );
  },
  Cv = function (n, i) {
    var s = i.s + i.c * n;
    i.set(i.t, i.p, ~~(s + (s < 0 ? -0.5 : 0.5)) + i.u, i);
  },
  $0 = function (n, i) {
    return i.set(i.t, i.p, n ? i.e : i.b, i);
  },
  V0 = function (n, i) {
    return i.set(i.t, i.p, n !== 1 ? i.b : i.e, i);
  },
  Sv = function (n, i, s) {
    return (n.style[i] = s);
  },
  Nv = function (n, i, s) {
    return n.style.setProperty(i, s);
  },
  jv = function (n, i, s) {
    return (n._gsap[i] = s);
  },
  Ev = function (n, i, s) {
    return (n._gsap.scaleX = n._gsap.scaleY = s);
  },
  Tv = function (n, i, s, l, a) {
    var f = n._gsap;
    (f.scaleX = f.scaleY = s), f.renderTransform(a, f);
  },
  Mv = function (n, i, s, l, a) {
    var f = n._gsap;
    (f[i] = s), f.renderTransform(a, f);
  },
  ct = "transform",
  An = ct + "Origin",
  Pv = function p(n, i) {
    var s = this,
      l = this.target,
      a = l.style,
      f = l._gsap;
    if (n in ci && a) {
      if (((this.tfm = this.tfm || {}), n !== "transform"))
        (n = Hr[n] || n),
          ~n.indexOf(",")
            ? n.split(",").forEach(function (c) {
                return (s.tfm[c] = si(l, c));
              })
            : (this.tfm[n] = f.x ? f[n] : si(l, n)),
          n === An && (this.tfm.zOrigin = f.zOrigin);
      else
        return Hr.transform.split(",").forEach(function (c) {
          return p.call(s, c, i);
        });
      if (this.props.indexOf(ct) >= 0) return;
      f.svg &&
        ((this.svgo = l.getAttribute("data-svg-origin")),
        this.props.push(An, i, "")),
        (n = ct);
    }
    (a || i) && this.props.push(n, i, a[n]);
  },
  H0 = function (n) {
    n.translate &&
      (n.removeProperty("translate"),
      n.removeProperty("scale"),
      n.removeProperty("rotate"));
  },
  Rv = function () {
    var n = this.props,
      i = this.target,
      s = i.style,
      l = i._gsap,
      a,
      f;
    for (a = 0; a < n.length; a += 3)
      n[a + 1]
        ? n[a + 1] === 2
          ? i[n[a]](n[a + 2])
          : (i[n[a]] = n[a + 2])
        : n[a + 2]
        ? (s[n[a]] = n[a + 2])
        : s.removeProperty(
            n[a].substr(0, 2) === "--"
              ? n[a]
              : n[a].replace(hd, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (f in this.tfm) l[f] = this.tfm[f];
      l.svg &&
        (l.renderTransform(),
        i.setAttribute("data-svg-origin", this.svgo || "")),
        (a = pd()),
        (!a || !a.isStart) &&
          !s[ct] &&
          (H0(s),
          l.zOrigin &&
            s[An] &&
            ((s[An] += " " + l.zOrigin + "px"),
            (l.zOrigin = 0),
            l.renderTransform()),
          (l.uncache = 1));
    }
  },
  W0 = function (n, i) {
    var s = { target: n, props: [], revert: Rv, save: Pv };
    return (
      n._gsap || In.core.getCache(n),
      i &&
        n.style &&
        n.nodeType &&
        i.split(",").forEach(function (l) {
          return s.save(l);
        }),
      s
    );
  },
  Y0,
  Af = function (n, i) {
    var s = Di.createElementNS
      ? Di.createElementNS(
          (i || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          n
        )
      : Di.createElement(n);
    return s && s.style ? s : Di.createElement(n);
  },
  xr = function p(n, i, s) {
    var l = getComputedStyle(n);
    return (
      l[i] ||
      l.getPropertyValue(i.replace(hd, "-$1").toLowerCase()) ||
      l.getPropertyValue(i) ||
      (!s && p(n, ml(i) || i, 1)) ||
      ""
    );
  },
  k1 = "O,Moz,ms,Ms,Webkit".split(","),
  ml = function (n, i, s) {
    var l = i || ds,
      a = l.style,
      f = 5;
    if (n in a && !s) return n;
    for (
      n = n.charAt(0).toUpperCase() + n.substr(1);
      f-- && !(k1[f] + n in a);

    );
    return f < 0 ? null : (f === 3 ? "ms" : f >= 0 ? k1[f] : "") + n;
  },
  If = function () {
    vv() &&
      window.document &&
      ((_1 = window),
      (Di = _1.document),
      (sl = Di.documentElement),
      (ds = Af("div") || { style: {} }),
      Af("div"),
      (ct = ml(ct)),
      (An = ct + "Origin"),
      (ds.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Y0 = !!ml("perspective")),
      (pd = In.core.reverting),
      (dd = 1));
  },
  C1 = function (n) {
    var i = n.ownerSVGElement,
      s = Af(
        "svg",
        (i && i.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      l = n.cloneNode(!0),
      a;
    (l.style.display = "block"), s.appendChild(l), sl.appendChild(s);
    try {
      a = l.getBBox();
    } catch {}
    return s.removeChild(l), sl.removeChild(s), a;
  },
  S1 = function (n, i) {
    for (var s = i.length; s--; )
      if (n.hasAttribute(i[s])) return n.getAttribute(i[s]);
  },
  X0 = function (n) {
    var i, s;
    try {
      i = n.getBBox();
    } catch {
      (i = C1(n)), (s = 1);
    }
    return (
      (i && (i.width || i.height)) || s || (i = C1(n)),
      i && !i.width && !i.x && !i.y
        ? {
            x: +S1(n, ["x", "cx", "x1"]) || 0,
            y: +S1(n, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : i
    );
  },
  G0 = function (n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && X0(n));
  },
  ws = function (n, i) {
    if (i) {
      var s = n.style,
        l;
      i in ci && i !== An && (i = ct),
        s.removeProperty
          ? ((l = i.substr(0, 2)),
            (l === "ms" || i.substr(0, 6) === "webkit") && (i = "-" + i),
            s.removeProperty(
              l === "--" ? i : i.replace(hd, "-$1").toLowerCase()
            ))
          : s.removeAttribute(i);
    }
  },
  Oi = function (n, i, s, l, a, f) {
    var c = new Ln(n._pt, i, s, 0, 1, f ? V0 : $0);
    return (n._pt = c), (c.b = l), (c.e = a), n._props.push(s), c;
  },
  N1 = { deg: 1, rad: 1, turn: 1 },
  bv = { grid: 1, flex: 1 },
  Vi = function p(n, i, s, l) {
    var a = parseFloat(s) || 0,
      f = (s + "").trim().substr((a + "").length) || "px",
      c = ds.style,
      m = _v.test(i),
      g = n.tagName.toLowerCase() === "svg",
      v = (g ? "client" : "offset") + (m ? "Width" : "Height"),
      k = 100,
      C = l === "px",
      _ = l === "%",
      T,
      y,
      M,
      I;
    if (l === f || !a || N1[l] || N1[f]) return a;
    if (
      (f !== "px" && !C && (a = p(n, i, s, "px")),
      (I = n.getCTM && G0(n)),
      (_ || f === "%") && (ci[i] || ~i.indexOf("adius")))
    )
      return (
        (T = I ? n.getBBox()[m ? "width" : "height"] : n[v]),
        _t(_ ? (a / T) * k : (a / 100) * T)
      );
    if (
      ((c[m ? "width" : "height"] = k + (C ? f : l)),
      (y =
        (l !== "rem" && ~i.indexOf("adius")) ||
        (l === "em" && n.appendChild && !g)
          ? n
          : n.parentNode),
      I && (y = (n.ownerSVGElement || {}).parentNode),
      (!y || y === Di || !y.appendChild) && (y = Di.body),
      (M = y._gsap),
      M && _ && M.width && m && M.time === qn.time && !M.uncache)
    )
      return _t((a / M.width) * k);
    if (_ && (i === "height" || i === "width")) {
      var L = n.style[i];
      (n.style[i] = k + l), (T = n[v]), L ? (n.style[i] = L) : ws(n, i);
    } else
      (_ || f === "%") &&
        !bv[xr(y, "display")] &&
        (c.position = xr(n, "position")),
        y === n && (c.position = "static"),
        y.appendChild(ds),
        (T = ds[v]),
        y.removeChild(ds),
        (c.position = "absolute");
    return (
      m && _ && ((M = hs(y)), (M.time = qn.time), (M.width = y[v])),
      _t(C ? (T * a) / k : T && a ? (k / T) * a : 0)
    );
  },
  si = function (n, i, s, l) {
    var a;
    return (
      dd || If(),
      i in Hr &&
        i !== "transform" &&
        ((i = Hr[i]), ~i.indexOf(",") && (i = i.split(",")[0])),
      ci[i] && i !== "transform"
        ? ((a = jo(n, l)),
          (a =
            i !== "transformOrigin"
              ? a[i]
              : a.svg
              ? a.origin
              : cu(xr(n, An)) + " " + a.zOrigin + "px"))
        : ((a = n.style[i]),
          (!a || a === "auto" || l || ~(a + "").indexOf("calc(")) &&
            (a =
              (uu[i] && uu[i](n, i, s)) ||
              xr(n, i) ||
              c0(n, i) ||
              (i === "opacity" ? 1 : 0))),
      s && !~(a + "").trim().indexOf(" ") ? Vi(n, i, a, s) + s : a
    );
  },
  zv = function (n, i, s, l) {
    if (!s || s === "none") {
      var a = ml(i, n, 1),
        f = a && xr(n, a, 1);
      f && f !== s
        ? ((i = a), (s = f))
        : i === "borderColor" && (s = xr(n, "borderTopColor"));
    }
    var c = new Ln(this._pt, n.style, i, 0, 1, F0),
      m = 0,
      g = 0,
      v,
      k,
      C,
      _,
      T,
      y,
      M,
      I,
      L,
      B,
      z,
      A;
    if (
      ((c.b = s),
      (c.e = l),
      (s += ""),
      (l += ""),
      l.substring(0, 6) === "var(--" &&
        (l = xr(n, l.substring(4, l.indexOf(")")))),
      l === "auto" &&
        ((y = n.style[i]),
        (n.style[i] = l),
        (l = xr(n, i) || l),
        y ? (n.style[i] = y) : ws(n, i)),
      (v = [s, l]),
      M0(v),
      (s = v[0]),
      (l = v[1]),
      (C = s.match(tl) || []),
      (A = l.match(tl) || []),
      A.length)
    ) {
      for (; (k = tl.exec(l)); )
        (M = k[0]),
          (L = l.substring(m, k.index)),
          T
            ? (T = (T + 1) % 5)
            : (L.substr(-5) === "rgba(" || L.substr(-5) === "hsla(") && (T = 1),
          M !== (y = C[g++] || "") &&
            ((_ = parseFloat(y) || 0),
            (z = y.substr((_ + "").length)),
            M.charAt(1) === "=" && (M = il(_, M) + z),
            (I = parseFloat(M)),
            (B = M.substr((I + "").length)),
            (m = tl.lastIndex - B.length),
            B ||
              ((B = B || er.units[i] || z),
              m === l.length && ((l += B), (c.e += B))),
            z !== B && (_ = Vi(n, i, y, B) || 0),
            (c._pt = {
              _next: c._pt,
              p: L || g === 1 ? L : ",",
              s: _,
              c: I - _,
              m: (T && T < 4) || i === "zIndex" ? Math.round : 0,
            }));
      c.c = m < l.length ? l.substring(m, l.length) : "";
    } else c.r = i === "display" && l === "none" ? V0 : $0;
    return i0.test(l) && (c.e = 0), (this._pt = c), c;
  },
  j1 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Dv = function (n) {
    var i = n.split(" "),
      s = i[0],
      l = i[1] || "50%";
    return (
      (s === "top" || s === "bottom" || l === "left" || l === "right") &&
        ((n = s), (s = l), (l = n)),
      (i[0] = j1[s] || s),
      (i[1] = j1[l] || l),
      i.join(" ")
    );
  },
  Ov = function (n, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var s = i.t,
        l = s.style,
        a = i.u,
        f = s._gsap,
        c,
        m,
        g;
      if (a === "all" || a === !0) (l.cssText = ""), (m = 1);
      else
        for (a = a.split(","), g = a.length; --g > -1; )
          (c = a[g]),
            ci[c] && ((m = 1), (c = c === "transformOrigin" ? An : ct)),
            ws(s, c);
      m &&
        (ws(s, ct),
        f &&
          (f.svg && s.removeAttribute("transform"),
          (l.scale = l.rotate = l.translate = "none"),
          jo(s, 1),
          (f.uncache = 1),
          H0(l)));
    }
  },
  uu = {
    clearProps: function (n, i, s, l, a) {
      if (a.data !== "isFromStart") {
        var f = (n._pt = new Ln(n._pt, i, s, 0, 0, Ov));
        return (f.u = l), (f.pr = -10), (f.tween = a), n._props.push(s), 1;
      }
    },
  },
  No = [1, 0, 0, 1, 0, 0],
  Q0 = {},
  Z0 = function (n) {
    return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n;
  },
  E1 = function (n) {
    var i = xr(n, ct);
    return Z0(i) ? No : i.substr(7).match(r0).map(_t);
  },
  md = function (n, i) {
    var s = n._gsap || hs(n),
      l = n.style,
      a = E1(n),
      f,
      c,
      m,
      g;
    return s.svg && n.getAttribute("transform")
      ? ((m = n.transform.baseVal.consolidate().matrix),
        (a = [m.a, m.b, m.c, m.d, m.e, m.f]),
        a.join(",") === "1,0,0,1,0,0" ? No : a)
      : (a === No &&
          !n.offsetParent &&
          n !== sl &&
          !s.svg &&
          ((m = l.display),
          (l.display = "block"),
          (f = n.parentNode),
          (!f || (!n.offsetParent && !n.getBoundingClientRect().width)) &&
            ((g = 1), (c = n.nextElementSibling), sl.appendChild(n)),
          (a = E1(n)),
          m ? (l.display = m) : ws(n, "display"),
          g &&
            (c
              ? f.insertBefore(n, c)
              : f
              ? f.appendChild(n)
              : sl.removeChild(n))),
        i && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a);
  },
  Ff = function (n, i, s, l, a, f) {
    var c = n._gsap,
      m = a || md(n, !0),
      g = c.xOrigin || 0,
      v = c.yOrigin || 0,
      k = c.xOffset || 0,
      C = c.yOffset || 0,
      _ = m[0],
      T = m[1],
      y = m[2],
      M = m[3],
      I = m[4],
      L = m[5],
      B = i.split(" "),
      z = parseFloat(B[0]) || 0,
      A = parseFloat(B[1]) || 0,
      U,
      O,
      Y,
      $;
    s
      ? m !== No &&
        (O = _ * M - T * y) &&
        ((Y = z * (M / O) + A * (-y / O) + (y * L - M * I) / O),
        ($ = z * (-T / O) + A * (_ / O) - (_ * L - T * I) / O),
        (z = Y),
        (A = $))
      : ((U = X0(n)),
        (z = U.x + (~B[0].indexOf("%") ? (z / 100) * U.width : z)),
        (A = U.y + (~(B[1] || B[0]).indexOf("%") ? (A / 100) * U.height : A))),
      l || (l !== !1 && c.smooth)
        ? ((I = z - g),
          (L = A - v),
          (c.xOffset = k + (I * _ + L * y) - I),
          (c.yOffset = C + (I * T + L * M) - L))
        : (c.xOffset = c.yOffset = 0),
      (c.xOrigin = z),
      (c.yOrigin = A),
      (c.smooth = !!l),
      (c.origin = i),
      (c.originIsAbsolute = !!s),
      (n.style[An] = "0px 0px"),
      f &&
        (Oi(f, c, "xOrigin", g, z),
        Oi(f, c, "yOrigin", v, A),
        Oi(f, c, "xOffset", k, c.xOffset),
        Oi(f, c, "yOffset", C, c.yOffset)),
      n.setAttribute("data-svg-origin", z + " " + A);
  },
  jo = function (n, i) {
    var s = n._gsap || new z0(n);
    if ("x" in s && !i && !s.uncache) return s;
    var l = n.style,
      a = s.scaleX < 0,
      f = "px",
      c = "deg",
      m = getComputedStyle(n),
      g = xr(n, An) || "0",
      v,
      k,
      C,
      _,
      T,
      y,
      M,
      I,
      L,
      B,
      z,
      A,
      U,
      O,
      Y,
      $,
      X,
      fe,
      Z,
      he,
      ge,
      Ce,
      de,
      ee,
      V,
      K,
      S,
      j,
      F,
      pe,
      se,
      me;
    return (
      (v = k = C = y = M = I = L = B = z = 0),
      (_ = T = 1),
      (s.svg = !!(n.getCTM && G0(n))),
      m.translate &&
        ((m.translate !== "none" ||
          m.scale !== "none" ||
          m.rotate !== "none") &&
          (l[ct] =
            (m.translate !== "none"
              ? "translate3d(" +
                (m.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (m.rotate !== "none" ? "rotate(" + m.rotate + ") " : "") +
            (m.scale !== "none"
              ? "scale(" + m.scale.split(" ").join(",") + ") "
              : "") +
            (m[ct] !== "none" ? m[ct] : "")),
        (l.scale = l.rotate = l.translate = "none")),
      (O = md(n, s.svg)),
      s.svg &&
        (s.uncache
          ? ((V = n.getBBox()),
            (g = s.xOrigin - V.x + "px " + (s.yOrigin - V.y) + "px"),
            (ee = ""))
          : (ee = !i && n.getAttribute("data-svg-origin")),
        Ff(n, ee || g, !!ee || s.originIsAbsolute, s.smooth !== !1, O)),
      (A = s.xOrigin || 0),
      (U = s.yOrigin || 0),
      O !== No &&
        ((fe = O[0]),
        (Z = O[1]),
        (he = O[2]),
        (ge = O[3]),
        (v = Ce = O[4]),
        (k = de = O[5]),
        O.length === 6
          ? ((_ = Math.sqrt(fe * fe + Z * Z)),
            (T = Math.sqrt(ge * ge + he * he)),
            (y = fe || Z ? Zs(Z, fe) * us : 0),
            (L = he || ge ? Zs(he, ge) * us + y : 0),
            L && (T *= Math.abs(Math.cos(L * ll))),
            s.svg &&
              ((v -= A - (A * fe + U * he)), (k -= U - (A * Z + U * ge))))
          : ((me = O[6]),
            (pe = O[7]),
            (S = O[8]),
            (j = O[9]),
            (F = O[10]),
            (se = O[11]),
            (v = O[12]),
            (k = O[13]),
            (C = O[14]),
            (Y = Zs(me, F)),
            (M = Y * us),
            Y &&
              (($ = Math.cos(-Y)),
              (X = Math.sin(-Y)),
              (ee = Ce * $ + S * X),
              (V = de * $ + j * X),
              (K = me * $ + F * X),
              (S = Ce * -X + S * $),
              (j = de * -X + j * $),
              (F = me * -X + F * $),
              (se = pe * -X + se * $),
              (Ce = ee),
              (de = V),
              (me = K)),
            (Y = Zs(-he, F)),
            (I = Y * us),
            Y &&
              (($ = Math.cos(-Y)),
              (X = Math.sin(-Y)),
              (ee = fe * $ - S * X),
              (V = Z * $ - j * X),
              (K = he * $ - F * X),
              (se = ge * X + se * $),
              (fe = ee),
              (Z = V),
              (he = K)),
            (Y = Zs(Z, fe)),
            (y = Y * us),
            Y &&
              (($ = Math.cos(Y)),
              (X = Math.sin(Y)),
              (ee = fe * $ + Z * X),
              (V = Ce * $ + de * X),
              (Z = Z * $ - fe * X),
              (de = de * $ - Ce * X),
              (fe = ee),
              (Ce = V)),
            M &&
              Math.abs(M) + Math.abs(y) > 359.9 &&
              ((M = y = 0), (I = 180 - I)),
            (_ = _t(Math.sqrt(fe * fe + Z * Z + he * he))),
            (T = _t(Math.sqrt(de * de + me * me))),
            (Y = Zs(Ce, de)),
            (L = Math.abs(Y) > 2e-4 ? Y * us : 0),
            (z = se ? 1 / (se < 0 ? -se : se) : 0)),
        s.svg &&
          ((ee = n.getAttribute("transform")),
          (s.forceCSS = n.setAttribute("transform", "") || !Z0(xr(n, ct))),
          ee && n.setAttribute("transform", ee))),
      Math.abs(L) > 90 &&
        Math.abs(L) < 270 &&
        (a
          ? ((_ *= -1), (L += y <= 0 ? 180 : -180), (y += y <= 0 ? 180 : -180))
          : ((T *= -1), (L += L <= 0 ? 180 : -180))),
      (i = i || s.uncache),
      (s.x =
        v -
        ((s.xPercent =
          v &&
          ((!i && s.xPercent) ||
            (Math.round(n.offsetWidth / 2) === Math.round(-v) ? -50 : 0)))
          ? (n.offsetWidth * s.xPercent) / 100
          : 0) +
        f),
      (s.y =
        k -
        ((s.yPercent =
          k &&
          ((!i && s.yPercent) ||
            (Math.round(n.offsetHeight / 2) === Math.round(-k) ? -50 : 0)))
          ? (n.offsetHeight * s.yPercent) / 100
          : 0) +
        f),
      (s.z = C + f),
      (s.scaleX = _t(_)),
      (s.scaleY = _t(T)),
      (s.rotation = _t(y) + c),
      (s.rotationX = _t(M) + c),
      (s.rotationY = _t(I) + c),
      (s.skewX = L + c),
      (s.skewY = B + c),
      (s.transformPerspective = z + f),
      (s.zOrigin = parseFloat(g.split(" ")[2]) || (!i && s.zOrigin) || 0) &&
        (l[An] = cu(g)),
      (s.xOffset = s.yOffset = 0),
      (s.force3D = er.force3D),
      (s.renderTransform = s.svg ? Av : Y0 ? q0 : Lv),
      (s.uncache = 0),
      s
    );
  },
  cu = function (n) {
    return (n = n.split(" "))[0] + " " + n[1];
  },
  xf = function (n, i, s) {
    var l = ln(i);
    return _t(parseFloat(i) + parseFloat(Vi(n, "x", s + "px", l))) + l;
  },
  Lv = function (n, i) {
    (i.z = "0px"),
      (i.rotationY = i.rotationX = "0deg"),
      (i.force3D = 0),
      q0(n, i);
  },
  os = "0deg",
  ql = "0px",
  as = ") ",
  q0 = function (n, i) {
    var s = i || this,
      l = s.xPercent,
      a = s.yPercent,
      f = s.x,
      c = s.y,
      m = s.z,
      g = s.rotation,
      v = s.rotationY,
      k = s.rotationX,
      C = s.skewX,
      _ = s.skewY,
      T = s.scaleX,
      y = s.scaleY,
      M = s.transformPerspective,
      I = s.force3D,
      L = s.target,
      B = s.zOrigin,
      z = "",
      A = (I === "auto" && n && n !== 1) || I === !0;
    if (B && (k !== os || v !== os)) {
      var U = parseFloat(v) * ll,
        O = Math.sin(U),
        Y = Math.cos(U),
        $;
      (U = parseFloat(k) * ll),
        ($ = Math.cos(U)),
        (f = xf(L, f, O * $ * -B)),
        (c = xf(L, c, -Math.sin(U) * -B)),
        (m = xf(L, m, Y * $ * -B + B));
    }
    M !== ql && (z += "perspective(" + M + as),
      (l || a) && (z += "translate(" + l + "%, " + a + "%) "),
      (A || f !== ql || c !== ql || m !== ql) &&
        (z +=
          m !== ql || A
            ? "translate3d(" + f + ", " + c + ", " + m + ") "
            : "translate(" + f + ", " + c + as),
      g !== os && (z += "rotate(" + g + as),
      v !== os && (z += "rotateY(" + v + as),
      k !== os && (z += "rotateX(" + k + as),
      (C !== os || _ !== os) && (z += "skew(" + C + ", " + _ + as),
      (T !== 1 || y !== 1) && (z += "scale(" + T + ", " + y + as),
      (L.style[ct] = z || "translate(0, 0)");
  },
  Av = function (n, i) {
    var s = i || this,
      l = s.xPercent,
      a = s.yPercent,
      f = s.x,
      c = s.y,
      m = s.rotation,
      g = s.skewX,
      v = s.skewY,
      k = s.scaleX,
      C = s.scaleY,
      _ = s.target,
      T = s.xOrigin,
      y = s.yOrigin,
      M = s.xOffset,
      I = s.yOffset,
      L = s.forceCSS,
      B = parseFloat(f),
      z = parseFloat(c),
      A,
      U,
      O,
      Y,
      $;
    (m = parseFloat(m)),
      (g = parseFloat(g)),
      (v = parseFloat(v)),
      v && ((v = parseFloat(v)), (g += v), (m += v)),
      m || g
        ? ((m *= ll),
          (g *= ll),
          (A = Math.cos(m) * k),
          (U = Math.sin(m) * k),
          (O = Math.sin(m - g) * -C),
          (Y = Math.cos(m - g) * C),
          g &&
            ((v *= ll),
            ($ = Math.tan(g - v)),
            ($ = Math.sqrt(1 + $ * $)),
            (O *= $),
            (Y *= $),
            v &&
              (($ = Math.tan(v)),
              ($ = Math.sqrt(1 + $ * $)),
              (A *= $),
              (U *= $))),
          (A = _t(A)),
          (U = _t(U)),
          (O = _t(O)),
          (Y = _t(Y)))
        : ((A = k), (Y = C), (U = O = 0)),
      ((B && !~(f + "").indexOf("px")) || (z && !~(c + "").indexOf("px"))) &&
        ((B = Vi(_, "x", f, "px")), (z = Vi(_, "y", c, "px"))),
      (T || y || M || I) &&
        ((B = _t(B + T - (T * A + y * O) + M)),
        (z = _t(z + y - (T * U + y * Y) + I))),
      (l || a) &&
        (($ = _.getBBox()),
        (B = _t(B + (l / 100) * $.width)),
        (z = _t(z + (a / 100) * $.height))),
      ($ =
        "matrix(" + A + "," + U + "," + O + "," + Y + "," + B + "," + z + ")"),
      _.setAttribute("transform", $),
      L && (_.style[ct] = $);
  },
  Iv = function (n, i, s, l, a) {
    var f = 360,
      c = $t(a),
      m = parseFloat(a) * (c && ~a.indexOf("rad") ? us : 1),
      g = m - l,
      v = l + g + "deg",
      k,
      C;
    return (
      c &&
        ((k = a.split("_")[1]),
        k === "short" && ((g %= f), g !== g % (f / 2) && (g += g < 0 ? f : -f)),
        k === "cw" && g < 0
          ? (g = ((g + f * w1) % f) - ~~(g / f) * f)
          : k === "ccw" && g > 0 && (g = ((g - f * w1) % f) - ~~(g / f) * f)),
      (n._pt = C = new Ln(n._pt, i, s, l, g, wv)),
      (C.e = v),
      (C.u = "deg"),
      n._props.push(s),
      C
    );
  },
  T1 = function (n, i) {
    for (var s in i) n[s] = i[s];
    return n;
  },
  Fv = function (n, i, s) {
    var l = T1({}, s._gsap),
      a = "perspective,force3D,transformOrigin,svgOrigin",
      f = s.style,
      c,
      m,
      g,
      v,
      k,
      C,
      _,
      T;
    l.svg
      ? ((g = s.getAttribute("transform")),
        s.setAttribute("transform", ""),
        (f[ct] = i),
        (c = jo(s, 1)),
        ws(s, ct),
        s.setAttribute("transform", g))
      : ((g = getComputedStyle(s)[ct]),
        (f[ct] = i),
        (c = jo(s, 1)),
        (f[ct] = g));
    for (m in ci)
      (g = l[m]),
        (v = c[m]),
        g !== v &&
          a.indexOf(m) < 0 &&
          ((_ = ln(g)),
          (T = ln(v)),
          (k = _ !== T ? Vi(s, m, g, T) : parseFloat(g)),
          (C = parseFloat(v)),
          (n._pt = new Ln(n._pt, c, m, k, C - k, Lf)),
          (n._pt.u = T || 0),
          n._props.push(m));
    T1(c, l);
  };
On("padding,margin,Width,Radius", function (p, n) {
  var i = "Top",
    s = "Right",
    l = "Bottom",
    a = "Left",
    f = (n < 3 ? [i, s, l, a] : [i + a, i + s, l + s, l + a]).map(function (c) {
      return n < 2 ? p + c : "border" + c + p;
    });
  uu[n > 1 ? "border" + p : p] = function (c, m, g, v, k) {
    var C, _;
    if (arguments.length < 4)
      return (
        (C = f.map(function (T) {
          return si(c, T, g);
        })),
        (_ = C.join(" ")),
        _.split(C[0]).length === 5 ? C[0] : _
      );
    (C = (v + "").split(" ")),
      (_ = {}),
      f.forEach(function (T, y) {
        return (_[T] = C[y] = C[y] || C[((y - 1) / 2) | 0]);
      }),
      c.init(m, _, k);
  };
});
var K0 = {
  name: "css",
  register: If,
  targetTest: function (n) {
    return n.style && n.nodeType;
  },
  init: function (n, i, s, l, a) {
    var f = this._props,
      c = n.style,
      m = s.vars.startAt,
      g,
      v,
      k,
      C,
      _,
      T,
      y,
      M,
      I,
      L,
      B,
      z,
      A,
      U,
      O,
      Y;
    dd || If(),
      (this.styles = this.styles || W0(n)),
      (Y = this.styles.props),
      (this.tween = s);
    for (y in i)
      if (y !== "autoRound" && ((v = i[y]), !(Qn[y] && D0(y, i, s, l, n, a)))) {
        if (
          ((_ = typeof v),
          (T = uu[y]),
          _ === "function" && ((v = v.call(s, l, n, a)), (_ = typeof v)),
          _ === "string" && ~v.indexOf("random(") && (v = ko(v)),
          T)
        )
          T(this, n, y, v, s) && (O = 1);
        else if (y.substr(0, 2) === "--")
          (g = (getComputedStyle(n).getPropertyValue(y) + "").trim()),
            (v += ""),
            (Bi.lastIndex = 0),
            Bi.test(g) || ((M = ln(g)), (I = ln(v))),
            I ? M !== I && (g = Vi(n, y, g, I) + I) : M && (v += M),
            this.add(c, "setProperty", g, v, l, a, 0, 0, y),
            f.push(y),
            Y.push(y, 0, c[y]);
        else if (_ !== "undefined") {
          if (
            (m && y in m
              ? ((g = typeof m[y] == "function" ? m[y].call(s, l, n, a) : m[y]),
                $t(g) && ~g.indexOf("random(") && (g = ko(g)),
                ln(g + "") ||
                  g === "auto" ||
                  (g += er.units[y] || ln(si(n, y)) || ""),
                (g + "").charAt(1) === "=" && (g = si(n, y)))
              : (g = si(n, y)),
            (C = parseFloat(g)),
            (L = _ === "string" && v.charAt(1) === "=" && v.substr(0, 2)),
            L && (v = v.substr(2)),
            (k = parseFloat(v)),
            y in Hr &&
              (y === "autoAlpha" &&
                (C === 1 && si(n, "visibility") === "hidden" && k && (C = 0),
                Y.push("visibility", 0, c.visibility),
                Oi(
                  this,
                  c,
                  "visibility",
                  C ? "inherit" : "hidden",
                  k ? "inherit" : "hidden",
                  !k
                )),
              y !== "scale" &&
                y !== "transform" &&
                ((y = Hr[y]), ~y.indexOf(",") && (y = y.split(",")[0]))),
            (B = y in ci),
            B)
          ) {
            if (
              (this.styles.save(y),
              _ === "string" &&
                v.substring(0, 6) === "var(--" &&
                ((v = xr(n, v.substring(4, v.indexOf(")")))),
                (k = parseFloat(v))),
              z ||
                ((A = n._gsap),
                (A.renderTransform && !i.parseTransform) ||
                  jo(n, i.parseTransform),
                (U = i.smoothOrigin !== !1 && A.smooth),
                (z = this._pt =
                  new Ln(this._pt, c, ct, 0, 1, A.renderTransform, A, 0, -1)),
                (z.dep = 1)),
              y === "scale")
            )
              (this._pt = new Ln(
                this._pt,
                A,
                "scaleY",
                A.scaleY,
                (L ? il(A.scaleY, L + k) : k) - A.scaleY || 0,
                Lf
              )),
                (this._pt.u = 0),
                f.push("scaleY", y),
                (y += "X");
            else if (y === "transformOrigin") {
              Y.push(An, 0, c[An]),
                (v = Dv(v)),
                A.svg
                  ? Ff(n, v, 0, U, 0, this)
                  : ((I = parseFloat(v.split(" ")[2]) || 0),
                    I !== A.zOrigin && Oi(this, A, "zOrigin", A.zOrigin, I),
                    Oi(this, c, y, cu(g), cu(v)));
              continue;
            } else if (y === "svgOrigin") {
              Ff(n, v, 1, U, 0, this);
              continue;
            } else if (y in Q0) {
              Iv(this, A, y, C, L ? il(C, L + v) : v);
              continue;
            } else if (y === "smoothOrigin") {
              Oi(this, A, "smooth", A.smooth, v);
              continue;
            } else if (y === "force3D") {
              A[y] = v;
              continue;
            } else if (y === "transform") {
              Fv(this, v, n);
              continue;
            }
          } else y in c || (y = ml(y) || y);
          if (B || ((k || k === 0) && (C || C === 0) && !yv.test(v) && y in c))
            (M = (g + "").substr((C + "").length)),
              k || (k = 0),
              (I = ln(v) || (y in er.units ? er.units[y] : M)),
              M !== I && (C = Vi(n, y, g, I)),
              (this._pt = new Ln(
                this._pt,
                B ? A : c,
                y,
                C,
                (L ? il(C, L + k) : k) - C,
                !B && (I === "px" || y === "zIndex") && i.autoRound !== !1
                  ? Cv
                  : Lf
              )),
              (this._pt.u = I || 0),
              M !== I && I !== "%" && ((this._pt.b = g), (this._pt.r = kv));
          else if (y in c) zv.call(this, n, y, g, L ? L + v : v);
          else if (y in n) this.add(n, y, g || n[y], L ? L + v : v, l, a);
          else if (y !== "parseTransform") {
            nd(y, v);
            continue;
          }
          B ||
            (y in c
              ? Y.push(y, 0, c[y])
              : typeof n[y] == "function"
              ? Y.push(y, 2, n[y]())
              : Y.push(y, 1, g || n[y])),
            f.push(y);
        }
      }
    O && B0(this);
  },
  render: function (n, i) {
    if (i.tween._time || !pd())
      for (var s = i._pt; s; ) s.r(n, s.d), (s = s._next);
    else i.styles.revert();
  },
  get: si,
  aliases: Hr,
  getSetter: function (n, i, s) {
    var l = Hr[i];
    return (
      l && l.indexOf(",") < 0 && (i = l),
      i in ci && i !== An && (n._gsap.x || si(n, "x"))
        ? s && y1 === s
          ? i === "scale"
            ? Ev
            : jv
          : (y1 = s || {}) && (i === "scale" ? Tv : Mv)
        : n.style && !Jf(n.style[i])
        ? Sv
        : ~i.indexOf("-")
        ? Nv
        : cd(n, i)
    );
  },
  core: { _removeProperty: ws, _getMatrix: md },
};
In.utils.checkPrefix = ml;
In.core.getStyleSaver = W0;
(function (p, n, i, s) {
  var l = On(p + "," + n + "," + i, function (a) {
    ci[a] = 1;
  });
  On(n, function (a) {
    (er.units[a] = "deg"), (Q0[a] = 1);
  }),
    (Hr[l[13]] = p + "," + n),
    On(s, function (a) {
      var f = a.split(":");
      Hr[f[1]] = l[f[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
On(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (p) {
    er.units[p] = "px";
  }
);
In.registerPlugin(K0);
var kn = In.registerPlugin(K0) || In;
kn.core.Tween;
function Bv(p, n) {
  for (var i = 0; i < n.length; i++) {
    var s = n[i];
    (s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      "value" in s && (s.writable = !0),
      Object.defineProperty(p, s.key, s);
  }
}
function Uv(p, n, i) {
  return n && Bv(p.prototype, n), p;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Xt,
  Za,
  Kn,
  Li,
  Ai,
  ol,
  J0,
  cs,
  co,
  em,
  oi,
  Rr,
  tm,
  nm = function () {
    return (
      Xt ||
      (typeof window < "u" && (Xt = window.gsap) && Xt.registerPlugin && Xt)
    );
  },
  rm = 1,
  rl = [],
  De = [],
  Yr = [],
  fo = Date.now,
  Bf = function (n, i) {
    return i;
  },
  $v = function () {
    var n = co.core,
      i = n.bridge || {},
      s = n._scrollers,
      l = n._proxies;
    s.push.apply(s, De),
      l.push.apply(l, Yr),
      (De = s),
      (Yr = l),
      (Bf = function (f, c) {
        return i[f](c);
      });
  },
  Ui = function (n, i) {
    return ~Yr.indexOf(n) && Yr[Yr.indexOf(n) + 1][i];
  },
  po = function (n) {
    return !!~em.indexOf(n);
  },
  gn = function (n, i, s, l, a) {
    return n.addEventListener(i, s, { passive: l !== !1, capture: !!a });
  },
  mn = function (n, i, s, l) {
    return n.removeEventListener(i, s, !!l);
  },
  Oa = "scrollLeft",
  La = "scrollTop",
  Uf = function () {
    return (oi && oi.isPressed) || De.cache++;
  },
  fu = function (n, i) {
    var s = function l(a) {
      if (a || a === 0) {
        rm && (Kn.history.scrollRestoration = "manual");
        var f = oi && oi.isPressed;
        (a = l.v = Math.round(a) || (oi && oi.iOS ? 1 : 0)),
          n(a),
          (l.cacheID = De.cache),
          f && Bf("ss", a);
      } else
        (i || De.cache !== l.cacheID || Bf("ref")) &&
          ((l.cacheID = De.cache), (l.v = n()));
      return l.v + l.offset;
    };
    return (s.offset = 0), n && s;
  },
  wn = {
    s: Oa,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: fu(function (p) {
      return arguments.length
        ? Kn.scrollTo(p, bt.sc())
        : Kn.pageXOffset || Li[Oa] || Ai[Oa] || ol[Oa] || 0;
    }),
  },
  bt = {
    s: La,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: wn,
    sc: fu(function (p) {
      return arguments.length
        ? Kn.scrollTo(wn.sc(), p)
        : Kn.pageYOffset || Li[La] || Ai[La] || ol[La] || 0;
    }),
  },
  zn = function (n, i) {
    return (
      ((i && i._ctx && i._ctx.selector) || Xt.utils.toArray)(n)[0] ||
      (typeof n == "string" && Xt.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", n)
        : null)
    );
  },
  Vv = function (n, i) {
    for (var s = i.length; s--; ) if (i[s] === n || i[s].contains(n)) return !0;
    return !1;
  },
  Hi = function (n, i) {
    var s = i.s,
      l = i.sc;
    po(n) && (n = Li.scrollingElement || Ai);
    var a = De.indexOf(n),
      f = l === bt.sc ? 1 : 2;
    !~a && (a = De.push(n) - 1), De[a + f] || gn(n, "scroll", Uf);
    var c = De[a + f],
      m =
        c ||
        (De[a + f] =
          fu(Ui(n, s), !0) ||
          (po(n)
            ? l
            : fu(function (g) {
                return arguments.length ? (n[s] = g) : n[s];
              })));
    return (
      (m.target = n),
      c || (m.smooth = Xt.getProperty(n, "scrollBehavior") === "smooth"),
      m
    );
  },
  $f = function (n, i, s) {
    var l = n,
      a = n,
      f = fo(),
      c = f,
      m = i || 50,
      g = Math.max(500, m * 3),
      v = function (T, y) {
        var M = fo();
        y || M - f > m
          ? ((a = l), (l = T), (c = f), (f = M))
          : s
          ? (l += T)
          : (l = a + ((T - a) / (M - c)) * (f - c));
      },
      k = function () {
        (a = l = s ? 0 : l), (c = f = 0);
      },
      C = function (T) {
        var y = c,
          M = a,
          I = fo();
        return (
          (T || T === 0) && T !== l && v(T),
          f === c || I - c > g
            ? 0
            : ((l + (s ? M : -M)) / ((s ? I : f) - y)) * 1e3
        );
      };
    return { update: v, reset: k, getVelocity: C };
  },
  Kl = function (n, i) {
    return (
      i && !n._gsapAllow && n.preventDefault(),
      n.changedTouches ? n.changedTouches[0] : n
    );
  },
  M1 = function (n) {
    var i = Math.max.apply(Math, n),
      s = Math.min.apply(Math, n);
    return Math.abs(i) >= Math.abs(s) ? i : s;
  },
  im = function () {
    (co = Xt.core.globals().ScrollTrigger), co && co.core && $v();
  },
  sm = function (n) {
    return (
      (Xt = n || nm()),
      !Za &&
        Xt &&
        typeof document < "u" &&
        document.body &&
        ((Kn = window),
        (Li = document),
        (Ai = Li.documentElement),
        (ol = Li.body),
        (em = [Kn, Li, Ai, ol]),
        Xt.utils.clamp,
        (tm = Xt.core.context || function () {}),
        (cs = "onpointerenter" in ol ? "pointer" : "mouse"),
        (J0 = yt.isTouch =
          Kn.matchMedia &&
          Kn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Kn ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Rr = yt.eventTypes =
          (
            "ontouchstart" in Ai
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Ai
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (rm = 0);
        }, 500),
        im(),
        (Za = 1)),
      Za
    );
  };
wn.op = bt;
De.cache = 0;
var yt = (function () {
  function p(i) {
    this.init(i);
  }
  var n = p.prototype;
  return (
    (n.init = function (s) {
      Za || sm(Xt) || console.warn("Please gsap.registerPlugin(Observer)"),
        co || im();
      var l = s.tolerance,
        a = s.dragMinimum,
        f = s.type,
        c = s.target,
        m = s.lineHeight,
        g = s.debounce,
        v = s.preventDefault,
        k = s.onStop,
        C = s.onStopDelay,
        _ = s.ignore,
        T = s.wheelSpeed,
        y = s.event,
        M = s.onDragStart,
        I = s.onDragEnd,
        L = s.onDrag,
        B = s.onPress,
        z = s.onRelease,
        A = s.onRight,
        U = s.onLeft,
        O = s.onUp,
        Y = s.onDown,
        $ = s.onChangeX,
        X = s.onChangeY,
        fe = s.onChange,
        Z = s.onToggleX,
        he = s.onToggleY,
        ge = s.onHover,
        Ce = s.onHoverEnd,
        de = s.onMove,
        ee = s.ignoreCheck,
        V = s.isNormalizer,
        K = s.onGestureStart,
        S = s.onGestureEnd,
        j = s.onWheel,
        F = s.onEnable,
        pe = s.onDisable,
        se = s.onClick,
        me = s.scrollSpeed,
        xe = s.capture,
        ye = s.allowClicks,
        Se = s.lockAxis,
        Ne = s.onLockAxis;
      (this.target = c = zn(c) || Ai),
        (this.vars = s),
        _ && (_ = Xt.utils.toArray(_)),
        (l = l || 1e-9),
        (a = a || 0),
        (T = T || 1),
        (me = me || 1),
        (f = f || "wheel,touch,pointer"),
        (g = g !== !1),
        m || (m = parseFloat(Kn.getComputedStyle(ol).lineHeight) || 22);
      var ft,
        wt,
        Vt,
        Pe,
        qe,
        Ht,
        Qt,
        D = this,
        Zt = 0,
        Fn = 0,
        Cn = s.passive || (!v && s.passive !== !1),
        Ue = Hi(c, wn),
        Bn = Hi(c, bt),
        _r = Ue(),
        br = Bn(),
        mt =
          ~f.indexOf("touch") &&
          !~f.indexOf("pointer") &&
          Rr[0] === "pointerdown",
        yr = po(c),
        Ke = c.ownerDocument || Li,
        qt = [0, 0, 0],
        un = [0, 0, 0],
        cn = 0,
        wr = function () {
          return (cn = fo());
        },
        dt = function (ae, Oe) {
          return (
            ((D.event = ae) && _ && Vv(ae.target, _)) ||
            (Oe && mt && ae.pointerType !== "touch") ||
            (ee && ee(ae, Oe))
          );
        },
        Yi = function () {
          D._vx.reset(), D._vy.reset(), wt.pause(), k && k(D);
        },
        rr = function () {
          var ae = (D.deltaX = M1(qt)),
            Oe = (D.deltaY = M1(un)),
            q = Math.abs(ae) >= l,
            ve = Math.abs(Oe) >= l;
          fe && (q || ve) && fe(D, ae, Oe, qt, un),
            q &&
              (A && D.deltaX > 0 && A(D),
              U && D.deltaX < 0 && U(D),
              $ && $(D),
              Z && D.deltaX < 0 != Zt < 0 && Z(D),
              (Zt = D.deltaX),
              (qt[0] = qt[1] = qt[2] = 0)),
            ve &&
              (Y && D.deltaY > 0 && Y(D),
              O && D.deltaY < 0 && O(D),
              X && X(D),
              he && D.deltaY < 0 != Fn < 0 && he(D),
              (Fn = D.deltaY),
              (un[0] = un[1] = un[2] = 0)),
            (Pe || Vt) &&
              (de && de(D),
              Vt && (M && Vt === 1 && M(D), L && L(D), (Vt = 0)),
              (Pe = !1)),
            Ht && !(Ht = !1) && Ne && Ne(D),
            qe && (j(D), (qe = !1)),
            (ft = 0);
        },
        fi = function (ae, Oe, q) {
          (qt[q] += ae),
            (un[q] += Oe),
            D._vx.update(ae),
            D._vy.update(Oe),
            g ? ft || (ft = requestAnimationFrame(rr)) : rr();
        },
        zr = function (ae, Oe) {
          Se &&
            !Qt &&
            ((D.axis = Qt = Math.abs(ae) > Math.abs(Oe) ? "x" : "y"),
            (Ht = !0)),
            Qt !== "y" && ((qt[2] += ae), D._vx.update(ae, !0)),
            Qt !== "x" && ((un[2] += Oe), D._vy.update(Oe, !0)),
            g ? ft || (ft = requestAnimationFrame(rr)) : rr();
        },
        ir = function (ae) {
          if (!dt(ae, 1)) {
            ae = Kl(ae, v);
            var Oe = ae.clientX,
              q = ae.clientY,
              ve = Oe - D.x,
              oe = q - D.y,
              _e = D.isDragging;
            (D.x = Oe),
              (D.y = q),
              (_e ||
                ((ve || oe) &&
                  (Math.abs(D.startX - Oe) >= a ||
                    Math.abs(D.startY - q) >= a))) &&
                ((Vt = _e ? 2 : 1), _e || (D.isDragging = !0), zr(ve, oe));
          }
        },
        kr = (D.onPress = function (ke) {
          dt(ke, 1) ||
            (ke && ke.button) ||
            ((D.axis = Qt = null),
            wt.pause(),
            (D.isPressed = !0),
            (ke = Kl(ke)),
            (Zt = Fn = 0),
            (D.startX = D.x = ke.clientX),
            (D.startY = D.y = ke.clientY),
            D._vx.reset(),
            D._vy.reset(),
            gn(V ? c : Ke, Rr[1], ir, Cn, !0),
            (D.deltaX = D.deltaY = 0),
            B && B(D));
        }),
        je = (D.onRelease = function (ke) {
          if (!dt(ke, 1)) {
            mn(V ? c : Ke, Rr[1], ir, !0);
            var ae = !isNaN(D.y - D.startY),
              Oe = D.isDragging,
              q =
                Oe &&
                (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3),
              ve = Kl(ke);
            !q &&
              ae &&
              (D._vx.reset(),
              D._vy.reset(),
              v &&
                ye &&
                Xt.delayedCall(0.08, function () {
                  if (fo() - cn > 300 && !ke.defaultPrevented) {
                    if (ke.target.click) ke.target.click();
                    else if (Ke.createEvent) {
                      var oe = Ke.createEvent("MouseEvents");
                      oe.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Kn,
                        1,
                        ve.screenX,
                        ve.screenY,
                        ve.clientX,
                        ve.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        ke.target.dispatchEvent(oe);
                    }
                  }
                })),
              (D.isDragging = D.isGesturing = D.isPressed = !1),
              k && Oe && !V && wt.restart(!0),
              Vt && rr(),
              I && Oe && I(D),
              z && z(D, q);
          }
        }),
        Cr = function (ae) {
          return (
            ae.touches &&
            ae.touches.length > 1 &&
            (D.isGesturing = !0) &&
            K(ae, D.isDragging)
          );
        },
        zt = function () {
          return (D.isGesturing = !1) || S(D);
        },
        Dt = function (ae) {
          if (!dt(ae)) {
            var Oe = Ue(),
              q = Bn();
            fi((Oe - _r) * me, (q - br) * me, 1),
              (_r = Oe),
              (br = q),
              k && wt.restart(!0);
          }
        },
        Sn = function (ae) {
          if (!dt(ae)) {
            (ae = Kl(ae, v)), j && (qe = !0);
            var Oe =
              (ae.deltaMode === 1
                ? m
                : ae.deltaMode === 2
                ? Kn.innerHeight
                : 1) * T;
            fi(ae.deltaX * Oe, ae.deltaY * Oe, 0), k && !V && wt.restart(!0);
          }
        },
        Dr = function (ae) {
          if (!dt(ae)) {
            var Oe = ae.clientX,
              q = ae.clientY,
              ve = Oe - D.x,
              oe = q - D.y;
            (D.x = Oe),
              (D.y = q),
              (Pe = !0),
              k && wt.restart(!0),
              (ve || oe) && zr(ve, oe);
          }
        },
        Gr = function (ae) {
          (D.event = ae), ge(D);
        },
        sr = function (ae) {
          (D.event = ae), Ce(D);
        },
        di = function (ae) {
          return dt(ae) || (Kl(ae, v) && se(D));
        };
      (wt = D._dc = Xt.delayedCall(C || 0.25, Yi).pause()),
        (D.deltaX = D.deltaY = 0),
        (D._vx = $f(0, 50, !0)),
        (D._vy = $f(0, 50, !0)),
        (D.scrollX = Ue),
        (D.scrollY = Bn),
        (D.isDragging = D.isGesturing = D.isPressed = !1),
        tm(this),
        (D.enable = function (ke) {
          return (
            D.isEnabled ||
              (gn(yr ? Ke : c, "scroll", Uf),
              f.indexOf("scroll") >= 0 && gn(yr ? Ke : c, "scroll", Dt, Cn, xe),
              f.indexOf("wheel") >= 0 && gn(c, "wheel", Sn, Cn, xe),
              ((f.indexOf("touch") >= 0 && J0) || f.indexOf("pointer") >= 0) &&
                (gn(c, Rr[0], kr, Cn, xe),
                gn(Ke, Rr[2], je),
                gn(Ke, Rr[3], je),
                ye && gn(c, "click", wr, !0, !0),
                se && gn(c, "click", di),
                K && gn(Ke, "gesturestart", Cr),
                S && gn(Ke, "gestureend", zt),
                ge && gn(c, cs + "enter", Gr),
                Ce && gn(c, cs + "leave", sr),
                de && gn(c, cs + "move", Dr)),
              (D.isEnabled = !0),
              (D.isDragging = D.isGesturing = D.isPressed = Pe = Vt = !1),
              D._vx.reset(),
              D._vy.reset(),
              (_r = Ue()),
              (br = Bn()),
              ke && ke.type && kr(ke),
              F && F(D)),
            D
          );
        }),
        (D.disable = function () {
          D.isEnabled &&
            (rl.filter(function (ke) {
              return ke !== D && po(ke.target);
            }).length || mn(yr ? Ke : c, "scroll", Uf),
            D.isPressed &&
              (D._vx.reset(), D._vy.reset(), mn(V ? c : Ke, Rr[1], ir, !0)),
            mn(yr ? Ke : c, "scroll", Dt, xe),
            mn(c, "wheel", Sn, xe),
            mn(c, Rr[0], kr, xe),
            mn(Ke, Rr[2], je),
            mn(Ke, Rr[3], je),
            mn(c, "click", wr, !0),
            mn(c, "click", di),
            mn(Ke, "gesturestart", Cr),
            mn(Ke, "gestureend", zt),
            mn(c, cs + "enter", Gr),
            mn(c, cs + "leave", sr),
            mn(c, cs + "move", Dr),
            (D.isEnabled = D.isPressed = D.isDragging = !1),
            pe && pe(D));
        }),
        (D.kill = D.revert =
          function () {
            D.disable();
            var ke = rl.indexOf(D);
            ke >= 0 && rl.splice(ke, 1), oi === D && (oi = 0);
          }),
        rl.push(D),
        V && po(c) && (oi = D),
        D.enable(y);
    }),
    Uv(p, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    p
  );
})();
yt.version = "3.13.0";
yt.create = function (p) {
  return new yt(p);
};
yt.register = sm;
yt.getAll = function () {
  return rl.slice();
};
yt.getById = function (p) {
  return rl.filter(function (n) {
    return n.vars.id === p;
  })[0];
};
nm() && Xt.registerPlugin(yt);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ne,
  Js,
  ze,
  Qe,
  Zn,
  Be,
  gd,
  du,
  Eo,
  ho,
  no,
  Aa,
  rn,
  wu,
  Vf,
  vn,
  P1,
  R1,
  el,
  lm,
  vf,
  om,
  xn,
  Hf,
  am,
  um,
  bi,
  Wf,
  xd,
  al,
  vd,
  pu,
  Yf,
  _f,
  Ia = 1,
  sn = Date.now,
  yf = sn(),
  vr = 0,
  ro = 0,
  b1 = function (n, i, s) {
    var l = Gn(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
    return (s["_" + i + "Clamp"] = l), l ? n.substr(6, n.length - 7) : n;
  },
  z1 = function (n, i) {
    return i && (!Gn(n) || n.substr(0, 6) !== "clamp(")
      ? "clamp(" + n + ")"
      : n;
  },
  Hv = function p() {
    return ro && requestAnimationFrame(p);
  },
  D1 = function () {
    return (wu = 1);
  },
  O1 = function () {
    return (wu = 0);
  },
  $r = function (n) {
    return n;
  },
  io = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  cm = function () {
    return typeof window < "u";
  },
  fm = function () {
    return ne || (cm() && (ne = window.gsap) && ne.registerPlugin && ne);
  },
  ks = function (n) {
    return !!~gd.indexOf(n);
  },
  dm = function (n) {
    return (
      (n === "Height" ? vd : ze["inner" + n]) ||
      Zn["client" + n] ||
      Be["client" + n]
    );
  },
  pm = function (n) {
    return (
      Ui(n, "getBoundingClientRect") ||
      (ks(n)
        ? function () {
            return (tu.width = ze.innerWidth), (tu.height = vd), tu;
          }
        : function () {
            return li(n);
          })
    );
  },
  Wv = function (n, i, s) {
    var l = s.d,
      a = s.d2,
      f = s.a;
    return (f = Ui(n, "getBoundingClientRect"))
      ? function () {
          return f()[l];
        }
      : function () {
          return (i ? dm(a) : n["client" + a]) || 0;
        };
  },
  Yv = function (n, i) {
    return !i || ~Yr.indexOf(n)
      ? pm(n)
      : function () {
          return tu;
        };
  },
  Wr = function (n, i) {
    var s = i.s,
      l = i.d2,
      a = i.d,
      f = i.a;
    return Math.max(
      0,
      (s = "scroll" + l) && (f = Ui(n, s))
        ? f() - pm(n)()[a]
        : ks(n)
        ? (Zn[s] || Be[s]) - dm(l)
        : n[s] - n["offset" + l]
    );
  },
  Fa = function (n, i) {
    for (var s = 0; s < el.length; s += 3)
      (!i || ~i.indexOf(el[s + 1])) && n(el[s], el[s + 1], el[s + 2]);
  },
  Gn = function (n) {
    return typeof n == "string";
  },
  on = function (n) {
    return typeof n == "function";
  },
  so = function (n) {
    return typeof n == "number";
  },
  fs = function (n) {
    return typeof n == "object";
  },
  Jl = function (n, i, s) {
    return n && n.progress(i ? 0 : 1) && s && n.pause();
  },
  wf = function (n, i) {
    if (n.enabled) {
      var s = n._ctx
        ? n._ctx.add(function () {
            return i(n);
          })
        : i(n);
      s && s.totalTime && (n.callbackAnimation = s);
    }
  },
  qs = Math.abs,
  hm = "left",
  mm = "top",
  _d = "right",
  yd = "bottom",
  vs = "width",
  _s = "height",
  mo = "Right",
  go = "Left",
  xo = "Top",
  vo = "Bottom",
  Nt = "padding",
  pr = "margin",
  gl = "Width",
  wd = "Height",
  Rt = "px",
  hr = function (n) {
    return ze.getComputedStyle(n);
  },
  Xv = function (n) {
    var i = hr(n).position;
    n.style.position = i === "absolute" || i === "fixed" ? i : "relative";
  },
  L1 = function (n, i) {
    for (var s in i) s in n || (n[s] = i[s]);
    return n;
  },
  li = function (n, i) {
    var s =
        i &&
        hr(n)[Vf] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        ne
          .to(n, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      l = n.getBoundingClientRect();
    return s && s.progress(0).kill(), l;
  },
  hu = function (n, i) {
    var s = i.d2;
    return n["offset" + s] || n["client" + s] || 0;
  },
  gm = function (n) {
    var i = [],
      s = n.labels,
      l = n.duration(),
      a;
    for (a in s) i.push(s[a] / l);
    return i;
  },
  Gv = function (n) {
    return function (i) {
      return ne.utils.snap(gm(n), i);
    };
  },
  kd = function (n) {
    var i = ne.utils.snap(n),
      s =
        Array.isArray(n) &&
        n.slice(0).sort(function (l, a) {
          return l - a;
        });
    return s
      ? function (l, a, f) {
          f === void 0 && (f = 0.001);
          var c;
          if (!a) return i(l);
          if (a > 0) {
            for (l -= f, c = 0; c < s.length; c++) if (s[c] >= l) return s[c];
            return s[c - 1];
          } else for (c = s.length, l += f; c--; ) if (s[c] <= l) return s[c];
          return s[0];
        }
      : function (l, a, f) {
          f === void 0 && (f = 0.001);
          var c = i(l);
          return !a || Math.abs(c - l) < f || c - l < 0 == a < 0
            ? c
            : i(a < 0 ? l - n : l + n);
        };
  },
  Qv = function (n) {
    return function (i, s) {
      return kd(gm(n))(i, s.direction);
    };
  },
  Ba = function (n, i, s, l) {
    return s.split(",").forEach(function (a) {
      return n(i, a, l);
    });
  },
  Bt = function (n, i, s, l, a) {
    return n.addEventListener(i, s, { passive: !l, capture: !!a });
  },
  Ft = function (n, i, s, l) {
    return n.removeEventListener(i, s, !!l);
  },
  Ua = function (n, i, s) {
    (s = s && s.wheelHandler), s && (n(i, "wheel", s), n(i, "touchmove", s));
  },
  A1 = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  $a = { toggleActions: "play", anticipatePin: 0 },
  mu = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  qa = function (n, i) {
    if (Gn(n)) {
      var s = n.indexOf("="),
        l = ~s ? +(n.charAt(s - 1) + 1) * parseFloat(n.substr(s + 1)) : 0;
      ~s && (n.indexOf("%") > s && (l *= i / 100), (n = n.substr(0, s - 1))),
        (n =
          l +
          (n in mu
            ? mu[n] * i
            : ~n.indexOf("%")
            ? (parseFloat(n) * i) / 100
            : parseFloat(n) || 0));
    }
    return n;
  },
  Va = function (n, i, s, l, a, f, c, m) {
    var g = a.startColor,
      v = a.endColor,
      k = a.fontSize,
      C = a.indent,
      _ = a.fontWeight,
      T = Qe.createElement("div"),
      y = ks(s) || Ui(s, "pinType") === "fixed",
      M = n.indexOf("scroller") !== -1,
      I = y ? Be : s,
      L = n.indexOf("start") !== -1,
      B = L ? g : v,
      z =
        "border-color:" +
        B +
        ";font-size:" +
        k +
        ";color:" +
        B +
        ";font-weight:" +
        _ +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (z += "position:" + ((M || m) && y ? "fixed;" : "absolute;")),
      (M || m || !y) &&
        (z += (l === bt ? _d : yd) + ":" + (f + parseFloat(C)) + "px;"),
      c &&
        (z +=
          "box-sizing:border-box;text-align:left;width:" +
          c.offsetWidth +
          "px;"),
      (T._isStart = L),
      T.setAttribute("class", "gsap-marker-" + n + (i ? " marker-" + i : "")),
      (T.style.cssText = z),
      (T.innerText = i || i === 0 ? n + "-" + i : n),
      I.children[0] ? I.insertBefore(T, I.children[0]) : I.appendChild(T),
      (T._offset = T["offset" + l.op.d2]),
      Ka(T, 0, l, L),
      T
    );
  },
  Ka = function (n, i, s, l) {
    var a = { display: "block" },
      f = s[l ? "os2" : "p2"],
      c = s[l ? "p2" : "os2"];
    (n._isFlipped = l),
      (a[s.a + "Percent"] = l ? -100 : 0),
      (a[s.a] = l ? "1px" : 0),
      (a["border" + f + gl] = 1),
      (a["border" + c + gl] = 0),
      (a[s.p] = i + "px"),
      ne.set(n, a);
  },
  Me = [],
  Xf = {},
  To,
  I1 = function () {
    return sn() - vr > 34 && (To || (To = requestAnimationFrame(ai)));
  },
  Ks = function () {
    (!xn || !xn.isPressed || xn.startX > Be.clientWidth) &&
      (De.cache++,
      xn ? To || (To = requestAnimationFrame(ai)) : ai(),
      vr || Ss("scrollStart"),
      (vr = sn()));
  },
  kf = function () {
    (um = ze.innerWidth), (am = ze.innerHeight);
  },
  lo = function (n) {
    De.cache++,
      (n === !0 ||
        (!rn &&
          !om &&
          !Qe.fullscreenElement &&
          !Qe.webkitFullscreenElement &&
          (!Hf ||
            um !== ze.innerWidth ||
            Math.abs(ze.innerHeight - am) > ze.innerHeight * 0.25))) &&
        du.restart(!0);
  },
  Cs = {},
  Zv = [],
  xm = function p() {
    return Ft(Te, "scrollEnd", p) || ps(!0);
  },
  Ss = function (n) {
    return (
      (Cs[n] &&
        Cs[n].map(function (i) {
          return i();
        })) ||
      Zv
    );
  },
  Xn = [],
  vm = function (n) {
    for (var i = 0; i < Xn.length; i += 5)
      (!n || (Xn[i + 4] && Xn[i + 4].query === n)) &&
        ((Xn[i].style.cssText = Xn[i + 1]),
        Xn[i].getBBox && Xn[i].setAttribute("transform", Xn[i + 2] || ""),
        (Xn[i + 3].uncache = 1));
  },
  Cd = function (n, i) {
    var s;
    for (vn = 0; vn < Me.length; vn++)
      (s = Me[vn]),
        s && (!i || s._ctx === i) && (n ? s.kill(1) : s.revert(!0, !0));
    (pu = !0), i && vm(i), i || Ss("revert");
  },
  _m = function (n, i) {
    De.cache++,
      (i || !_n) &&
        De.forEach(function (s) {
          return on(s) && s.cacheID++ && (s.rec = 0);
        }),
      Gn(n) && (ze.history.scrollRestoration = xd = n);
  },
  _n,
  ys = 0,
  F1,
  qv = function () {
    if (F1 !== ys) {
      var n = (F1 = ys);
      requestAnimationFrame(function () {
        return n === ys && ps(!0);
      });
    }
  },
  ym = function () {
    Be.appendChild(al),
      (vd = (!xn && al.offsetHeight) || ze.innerHeight),
      Be.removeChild(al);
  },
  B1 = function (n) {
    return Eo(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (i) {
      return (i.style.display = n ? "none" : "block");
    });
  },
  ps = function (n, i) {
    if (
      ((Zn = Qe.documentElement),
      (Be = Qe.body),
      (gd = [ze, Qe, Zn, Be]),
      vr && !n && !pu)
    ) {
      Bt(Te, "scrollEnd", xm);
      return;
    }
    ym(),
      (_n = Te.isRefreshing = !0),
      De.forEach(function (l) {
        return on(l) && ++l.cacheID && (l.rec = l());
      });
    var s = Ss("refreshInit");
    lm && Te.sort(),
      i || Cd(),
      De.forEach(function (l) {
        on(l) && (l.smooth && (l.target.style.scrollBehavior = "auto"), l(0));
      }),
      Me.slice(0).forEach(function (l) {
        return l.refresh();
      }),
      (pu = !1),
      Me.forEach(function (l) {
        if (l._subPinOffset && l.pin) {
          var a = l.vars.horizontal ? "offsetWidth" : "offsetHeight",
            f = l.pin[a];
          l.revert(!0, 1), l.adjustPinSpacing(l.pin[a] - f), l.refresh();
        }
      }),
      (Yf = 1),
      B1(!0),
      Me.forEach(function (l) {
        var a = Wr(l.scroller, l._dir),
          f = l.vars.end === "max" || (l._endClamp && l.end > a),
          c = l._startClamp && l.start >= a;
        (f || c) &&
          l.setPositions(
            c ? a - 1 : l.start,
            f ? Math.max(c ? a : l.start + 1, a) : l.end,
            !0
          );
      }),
      B1(!1),
      (Yf = 0),
      s.forEach(function (l) {
        return l && l.render && l.render(-1);
      }),
      De.forEach(function (l) {
        on(l) &&
          (l.smooth &&
            requestAnimationFrame(function () {
              return (l.target.style.scrollBehavior = "smooth");
            }),
          l.rec && l(l.rec));
      }),
      _m(xd, 1),
      du.pause(),
      ys++,
      (_n = 2),
      ai(2),
      Me.forEach(function (l) {
        return on(l.vars.onRefresh) && l.vars.onRefresh(l);
      }),
      (_n = Te.isRefreshing = !1),
      Ss("refresh");
  },
  Gf = 0,
  Ja = 1,
  _o,
  ai = function (n) {
    if (n === 2 || (!_n && !pu)) {
      (Te.isUpdating = !0), _o && _o.update(0);
      var i = Me.length,
        s = sn(),
        l = s - yf >= 50,
        a = i && Me[0].scroll();
      if (
        ((Ja = Gf > a ? -1 : 1),
        _n || (Gf = a),
        l &&
          (vr && !wu && s - vr > 200 && ((vr = 0), Ss("scrollEnd")),
          (no = yf),
          (yf = s)),
        Ja < 0)
      ) {
        for (vn = i; vn-- > 0; ) Me[vn] && Me[vn].update(0, l);
        Ja = 1;
      } else for (vn = 0; vn < i; vn++) Me[vn] && Me[vn].update(0, l);
      Te.isUpdating = !1;
    }
    To = 0;
  },
  Qf = [
    hm,
    mm,
    yd,
    _d,
    pr + vo,
    pr + mo,
    pr + xo,
    pr + go,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  eu = Qf.concat([
    vs,
    _s,
    "boxSizing",
    "max" + gl,
    "max" + wd,
    "position",
    pr,
    Nt,
    Nt + xo,
    Nt + mo,
    Nt + vo,
    Nt + go,
  ]),
  Kv = function (n, i, s) {
    ul(s);
    var l = n._gsap;
    if (l.spacerIsNative) ul(l.spacerState);
    else if (n._gsap.swappedIn) {
      var a = i.parentNode;
      a && (a.insertBefore(n, i), a.removeChild(i));
    }
    n._gsap.swappedIn = !1;
  },
  Cf = function (n, i, s, l) {
    if (!n._gsap.swappedIn) {
      for (var a = Qf.length, f = i.style, c = n.style, m; a--; )
        (m = Qf[a]), (f[m] = s[m]);
      (f.position = s.position === "absolute" ? "absolute" : "relative"),
        s.display === "inline" && (f.display = "inline-block"),
        (c[yd] = c[_d] = "auto"),
        (f.flexBasis = s.flexBasis || "auto"),
        (f.overflow = "visible"),
        (f.boxSizing = "border-box"),
        (f[vs] = hu(n, wn) + Rt),
        (f[_s] = hu(n, bt) + Rt),
        (f[Nt] = c[pr] = c[mm] = c[hm] = "0"),
        ul(l),
        (c[vs] = c["max" + gl] = s[vs]),
        (c[_s] = c["max" + wd] = s[_s]),
        (c[Nt] = s[Nt]),
        n.parentNode !== i &&
          (n.parentNode.insertBefore(i, n), i.appendChild(n)),
        (n._gsap.swappedIn = !0);
    }
  },
  Jv = /([A-Z])/g,
  ul = function (n) {
    if (n) {
      var i = n.t.style,
        s = n.length,
        l = 0,
        a,
        f;
      for ((n.t._gsap || ne.core.getCache(n.t)).uncache = 1; l < s; l += 2)
        (f = n[l + 1]),
          (a = n[l]),
          f
            ? (i[a] = f)
            : i[a] && i.removeProperty(a.replace(Jv, "-$1").toLowerCase());
    }
  },
  Ha = function (n) {
    for (var i = eu.length, s = n.style, l = [], a = 0; a < i; a++)
      l.push(eu[a], s[eu[a]]);
    return (l.t = n), l;
  },
  e_ = function (n, i, s) {
    for (var l = [], a = n.length, f = s ? 8 : 0, c; f < a; f += 2)
      (c = n[f]), l.push(c, c in i ? i[c] : n[f + 1]);
    return (l.t = n.t), l;
  },
  tu = { left: 0, top: 0 },
  U1 = function (n, i, s, l, a, f, c, m, g, v, k, C, _, T) {
    on(n) && (n = n(m)),
      Gn(n) &&
        n.substr(0, 3) === "max" &&
        (n = C + (n.charAt(4) === "=" ? qa("0" + n.substr(3), s) : 0));
    var y = _ ? _.time() : 0,
      M,
      I,
      L;
    if ((_ && _.seek(0), isNaN(n) || (n = +n), so(n)))
      _ &&
        (n = ne.utils.mapRange(
          _.scrollTrigger.start,
          _.scrollTrigger.end,
          0,
          C,
          n
        )),
        c && Ka(c, s, l, !0);
    else {
      on(i) && (i = i(m));
      var B = (n || "0").split(" "),
        z,
        A,
        U,
        O;
      (L = zn(i, m) || Be),
        (z = li(L) || {}),
        (!z || (!z.left && !z.top)) &&
          hr(L).display === "none" &&
          ((O = L.style.display),
          (L.style.display = "block"),
          (z = li(L)),
          O ? (L.style.display = O) : L.style.removeProperty("display")),
        (A = qa(B[0], z[l.d])),
        (U = qa(B[1] || "0", s)),
        (n = z[l.p] - g[l.p] - v + A + a - U),
        c && Ka(c, U, l, s - U < 20 || (c._isStart && U > 20)),
        (s -= s - U);
    }
    if ((T && ((m[T] = n || -0.001), n < 0 && (n = 0)), f)) {
      var Y = n + s,
        $ = f._isStart;
      (M = "scroll" + l.d2),
        Ka(
          f,
          Y,
          l,
          ($ && Y > 20) ||
            (!$ && (k ? Math.max(Be[M], Zn[M]) : f.parentNode[M]) <= Y + 1)
        ),
        k &&
          ((g = li(c)),
          k && (f.style[l.op.p] = g[l.op.p] - l.op.m - f._offset + Rt));
    }
    return (
      _ &&
        L &&
        ((M = li(L)),
        _.seek(C),
        (I = li(L)),
        (_._caScrollDist = M[l.p] - I[l.p]),
        (n = (n / _._caScrollDist) * C)),
      _ && _.seek(y),
      _ ? n : Math.round(n)
    );
  },
  t_ = /(webkit|moz|length|cssText|inset)/i,
  $1 = function (n, i, s, l) {
    if (n.parentNode !== i) {
      var a = n.style,
        f,
        c;
      if (i === Be) {
        (n._stOrig = a.cssText), (c = hr(n));
        for (f in c)
          !+f &&
            !t_.test(f) &&
            c[f] &&
            typeof a[f] == "string" &&
            f !== "0" &&
            (a[f] = c[f]);
        (a.top = s), (a.left = l);
      } else a.cssText = n._stOrig;
      (ne.core.getCache(n).uncache = 1), i.appendChild(n);
    }
  },
  wm = function (n, i, s) {
    var l = i,
      a = l;
    return function (f) {
      var c = Math.round(n());
      return (
        c !== l &&
          c !== a &&
          Math.abs(c - l) > 3 &&
          Math.abs(c - a) > 3 &&
          ((f = c), s && s()),
        (a = l),
        (l = Math.round(f)),
        l
      );
    };
  },
  Wa = function (n, i, s) {
    var l = {};
    (l[i.p] = "+=" + s), ne.set(n, l);
  },
  V1 = function (n, i) {
    var s = Hi(n, i),
      l = "_scroll" + i.p2,
      a = function f(c, m, g, v, k) {
        var C = f.tween,
          _ = m.onComplete,
          T = {};
        g = g || s();
        var y = wm(s, g, function () {
          C.kill(), (f.tween = 0);
        });
        return (
          (k = (v && k) || 0),
          (v = v || c - g),
          C && C.kill(),
          (m[l] = c),
          (m.inherit = !1),
          (m.modifiers = T),
          (T[l] = function () {
            return y(g + v * C.ratio + k * C.ratio * C.ratio);
          }),
          (m.onUpdate = function () {
            De.cache++, f.tween && ai();
          }),
          (m.onComplete = function () {
            (f.tween = 0), _ && _.call(C);
          }),
          (C = f.tween = ne.to(n, m)),
          C
        );
      };
    return (
      (n[l] = s),
      (s.wheelHandler = function () {
        return a.tween && a.tween.kill() && (a.tween = 0);
      }),
      Bt(n, "wheel", s.wheelHandler),
      Te.isTouch && Bt(n, "touchmove", s.wheelHandler),
      a
    );
  },
  Te = (function () {
    function p(i, s) {
      Js ||
        p.register(ne) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Wf(this),
        this.init(i, s);
    }
    var n = p.prototype;
    return (
      (n.init = function (s, l) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !ro)
        ) {
          this.update = this.refresh = this.kill = $r;
          return;
        }
        s = L1(Gn(s) || so(s) || s.nodeType ? { trigger: s } : s, $a);
        var a = s,
          f = a.onUpdate,
          c = a.toggleClass,
          m = a.id,
          g = a.onToggle,
          v = a.onRefresh,
          k = a.scrub,
          C = a.trigger,
          _ = a.pin,
          T = a.pinSpacing,
          y = a.invalidateOnRefresh,
          M = a.anticipatePin,
          I = a.onScrubComplete,
          L = a.onSnapComplete,
          B = a.once,
          z = a.snap,
          A = a.pinReparent,
          U = a.pinSpacer,
          O = a.containerAnimation,
          Y = a.fastScrollEnd,
          $ = a.preventOverlaps,
          X =
            s.horizontal || (s.containerAnimation && s.horizontal !== !1)
              ? wn
              : bt,
          fe = !k && k !== 0,
          Z = zn(s.scroller || ze),
          he = ne.core.getCache(Z),
          ge = ks(Z),
          Ce =
            ("pinType" in s
              ? s.pinType
              : Ui(Z, "pinType") || (ge && "fixed")) === "fixed",
          de = [s.onEnter, s.onLeave, s.onEnterBack, s.onLeaveBack],
          ee = fe && s.toggleActions.split(" "),
          V = "markers" in s ? s.markers : $a.markers,
          K = ge ? 0 : parseFloat(hr(Z)["border" + X.p2 + gl]) || 0,
          S = this,
          j =
            s.onRefreshInit &&
            function () {
              return s.onRefreshInit(S);
            },
          F = Wv(Z, ge, X),
          pe = Yv(Z, ge),
          se = 0,
          me = 0,
          xe = 0,
          ye = Hi(Z, X),
          Se,
          Ne,
          ft,
          wt,
          Vt,
          Pe,
          qe,
          Ht,
          Qt,
          D,
          Zt,
          Fn,
          Cn,
          Ue,
          Bn,
          _r,
          br,
          mt,
          yr,
          Ke,
          qt,
          un,
          cn,
          wr,
          dt,
          Yi,
          rr,
          fi,
          zr,
          ir,
          kr,
          je,
          Cr,
          zt,
          Dt,
          Sn,
          Dr,
          Gr,
          sr;
        if (
          ((S._startClamp = S._endClamp = !1),
          (S._dir = X),
          (M *= 45),
          (S.scroller = Z),
          (S.scroll = O ? O.time.bind(O) : ye),
          (wt = ye()),
          (S.vars = s),
          (l = l || s.animation),
          "refreshPriority" in s &&
            ((lm = 1), s.refreshPriority === -9999 && (_o = S)),
          (he.tweenScroll = he.tweenScroll || {
            top: V1(Z, bt),
            left: V1(Z, wn),
          }),
          (S.tweenTo = Se = he.tweenScroll[X.p]),
          (S.scrubDuration = function (q) {
            (Cr = so(q) && q),
              Cr
                ? je
                  ? je.duration(q)
                  : (je = ne.to(l, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Cr,
                      paused: !0,
                      onComplete: function () {
                        return I && I(S);
                      },
                    }))
                : (je && je.progress(1).kill(), (je = 0));
          }),
          l &&
            ((l.vars.lazy = !1),
            (l._initted && !S.isReverted) ||
              (l.vars.immediateRender !== !1 &&
                s.immediateRender !== !1 &&
                l.duration() &&
                l.render(0, !0, !0)),
            (S.animation = l.pause()),
            (l.scrollTrigger = S),
            S.scrubDuration(k),
            (ir = 0),
            m || (m = l.vars.id)),
          z &&
            ((!fs(z) || z.push) && (z = { snapTo: z }),
            "scrollBehavior" in Be.style &&
              ne.set(ge ? [Be, Zn] : Z, { scrollBehavior: "auto" }),
            De.forEach(function (q) {
              return (
                on(q) &&
                q.target === (ge ? Qe.scrollingElement || Zn : Z) &&
                (q.smooth = !1)
              );
            }),
            (ft = on(z.snapTo)
              ? z.snapTo
              : z.snapTo === "labels"
              ? Gv(l)
              : z.snapTo === "labelsDirectional"
              ? Qv(l)
              : z.directional !== !1
              ? function (q, ve) {
                  return kd(z.snapTo)(q, sn() - me < 500 ? 0 : ve.direction);
                }
              : ne.utils.snap(z.snapTo)),
            (zt = z.duration || { min: 0.1, max: 2 }),
            (zt = fs(zt) ? ho(zt.min, zt.max) : ho(zt, zt)),
            (Dt = ne
              .delayedCall(z.delay || Cr / 2 || 0.1, function () {
                var q = ye(),
                  ve = sn() - me < 500,
                  oe = Se.tween;
                if (
                  (ve || Math.abs(S.getVelocity()) < 10) &&
                  !oe &&
                  !wu &&
                  se !== q
                ) {
                  var _e = (q - Pe) / Ue,
                    lt = l && !fe ? l.totalProgress() : _e,
                    Ee = ve ? 0 : ((lt - kr) / (sn() - no)) * 1e3 || 0,
                    Je = ne.utils.clamp(-_e, 1 - _e, (qs(Ee / 2) * Ee) / 0.185),
                    Ot = _e + (z.inertia === !1 ? 0 : Je),
                    rt,
                    Ye,
                    Le = z,
                    Nn = Le.onStart,
                    Xe = Le.onInterrupt,
                    fn = Le.onComplete;
                  if (
                    ((rt = ft(Ot, S)),
                    so(rt) || (rt = Ot),
                    (Ye = Math.max(0, Math.round(Pe + rt * Ue))),
                    q <= qe && q >= Pe && Ye !== q)
                  ) {
                    if (oe && !oe._initted && oe.data <= qs(Ye - q)) return;
                    z.inertia === !1 && (Je = rt - _e),
                      Se(
                        Ye,
                        {
                          duration: zt(
                            qs(
                              (Math.max(qs(Ot - lt), qs(rt - lt)) * 0.185) /
                                Ee /
                                0.05 || 0
                            )
                          ),
                          ease: z.ease || "power3",
                          data: qs(Ye - q),
                          onInterrupt: function () {
                            return Dt.restart(!0) && Xe && Xe(S);
                          },
                          onComplete: function () {
                            S.update(),
                              (se = ye()),
                              l &&
                                !fe &&
                                (je
                                  ? je.resetTo(
                                      "totalProgress",
                                      rt,
                                      l._tTime / l._tDur
                                    )
                                  : l.progress(rt)),
                              (ir = kr =
                                l && !fe ? l.totalProgress() : S.progress),
                              L && L(S),
                              fn && fn(S);
                          },
                        },
                        q,
                        Je * Ue,
                        Ye - q - Je * Ue
                      ),
                      Nn && Nn(S, Se.tween);
                  }
                } else S.isActive && se !== q && Dt.restart(!0);
              })
              .pause())),
          m && (Xf[m] = S),
          (C = S.trigger = zn(C || (_ !== !0 && _))),
          (sr = C && C._gsap && C._gsap.stRevert),
          sr && (sr = sr(S)),
          (_ = _ === !0 ? C : zn(_)),
          Gn(c) && (c = { targets: C, className: c }),
          _ &&
            (T === !1 ||
              T === pr ||
              (T =
                !T &&
                _.parentNode &&
                _.parentNode.style &&
                hr(_.parentNode).display === "flex"
                  ? !1
                  : Nt),
            (S.pin = _),
            (Ne = ne.core.getCache(_)),
            Ne.spacer
              ? (Bn = Ne.pinState)
              : (U &&
                  ((U = zn(U)),
                  U && !U.nodeType && (U = U.current || U.nativeElement),
                  (Ne.spacerIsNative = !!U),
                  U && (Ne.spacerState = Ha(U))),
                (Ne.spacer = mt = U || Qe.createElement("div")),
                mt.classList.add("pin-spacer"),
                m && mt.classList.add("pin-spacer-" + m),
                (Ne.pinState = Bn = Ha(_))),
            s.force3D !== !1 && ne.set(_, { force3D: !0 }),
            (S.spacer = mt = Ne.spacer),
            (zr = hr(_)),
            (wr = zr[T + X.os2]),
            (Ke = ne.getProperty(_)),
            (qt = ne.quickSetter(_, X.a, Rt)),
            Cf(_, mt, zr),
            (br = Ha(_))),
          V)
        ) {
          (Fn = fs(V) ? L1(V, A1) : A1),
            (D = Va("scroller-start", m, Z, X, Fn, 0)),
            (Zt = Va("scroller-end", m, Z, X, Fn, 0, D)),
            (yr = D["offset" + X.op.d2]);
          var di = zn(Ui(Z, "content") || Z);
          (Ht = this.markerStart = Va("start", m, di, X, Fn, yr, 0, O)),
            (Qt = this.markerEnd = Va("end", m, di, X, Fn, yr, 0, O)),
            O && (Gr = ne.quickSetter([Ht, Qt], X.a, Rt)),
            !Ce &&
              !(Yr.length && Ui(Z, "fixedMarkers") === !0) &&
              (Xv(ge ? Be : Z),
              ne.set([D, Zt], { force3D: !0 }),
              (Yi = ne.quickSetter(D, X.a, Rt)),
              (fi = ne.quickSetter(Zt, X.a, Rt)));
        }
        if (O) {
          var ke = O.vars.onUpdate,
            ae = O.vars.onUpdateParams;
          O.eventCallback("onUpdate", function () {
            S.update(0, 0, 1), ke && ke.apply(O, ae || []);
          });
        }
        if (
          ((S.previous = function () {
            return Me[Me.indexOf(S) - 1];
          }),
          (S.next = function () {
            return Me[Me.indexOf(S) + 1];
          }),
          (S.revert = function (q, ve) {
            if (!ve) return S.kill(!0);
            var oe = q !== !1 || !S.enabled,
              _e = rn;
            oe !== S.isReverted &&
              (oe &&
                ((Sn = Math.max(ye(), S.scroll.rec || 0)),
                (xe = S.progress),
                (Dr = l && l.progress())),
              Ht &&
                [Ht, Qt, D, Zt].forEach(function (lt) {
                  return (lt.style.display = oe ? "none" : "block");
                }),
              oe && ((rn = S), S.update(oe)),
              _ &&
                (!A || !S.isActive) &&
                (oe ? Kv(_, mt, Bn) : Cf(_, mt, hr(_), dt)),
              oe || S.update(oe),
              (rn = _e),
              (S.isReverted = oe));
          }),
          (S.refresh = function (q, ve, oe, _e) {
            if (!((rn || !S.enabled) && !ve)) {
              if (_ && q && vr) {
                Bt(p, "scrollEnd", xm);
                return;
              }
              !_n && j && j(S),
                (rn = S),
                Se.tween && !oe && (Se.tween.kill(), (Se.tween = 0)),
                je && je.pause(),
                y &&
                  l &&
                  (l.revert({ kill: !1 }).invalidate(),
                  l.getChildren &&
                    l.getChildren(!0, !0, !1).forEach(function (Lr) {
                      return Lr.vars.immediateRender && Lr.render(0, !0, !0);
                    })),
                S.isReverted || S.revert(!0, !0),
                (S._subPinOffset = !1);
              var lt = F(),
                Ee = pe(),
                Je = O ? O.duration() : Wr(Z, X),
                Ot = Ue <= 0.01 || !Ue,
                rt = 0,
                Ye = _e || 0,
                Le = fs(oe) ? oe.end : s.end,
                Nn = s.endTrigger || C,
                Xe = fs(oe)
                  ? oe.start
                  : s.start || (s.start === 0 || !C ? 0 : _ ? "0 0" : "0 100%"),
                fn = (S.pinnedContainer =
                  s.pinnedContainer && zn(s.pinnedContainer, S)),
                Un = (C && Math.max(0, Me.indexOf(S))) || 0,
                kt = Un,
                Ct,
                Tt,
                Qr,
                js,
                Re,
                gt,
                jn,
                Es,
                Xi,
                Gi,
                $n,
                Or,
                dn;
              for (
                V &&
                fs(oe) &&
                ((Or = ne.getProperty(D, X.p)), (dn = ne.getProperty(Zt, X.p)));
                kt-- > 0;

              )
                (gt = Me[kt]),
                  gt.end || gt.refresh(0, 1) || (rn = S),
                  (jn = gt.pin),
                  jn &&
                    (jn === C || jn === _ || jn === fn) &&
                    !gt.isReverted &&
                    (Gi || (Gi = []), Gi.unshift(gt), gt.revert(!0, !0)),
                  gt !== Me[kt] && (Un--, kt--);
              for (
                on(Xe) && (Xe = Xe(S)),
                  Xe = b1(Xe, "start", S),
                  Pe =
                    U1(
                      Xe,
                      C,
                      lt,
                      X,
                      ye(),
                      Ht,
                      D,
                      S,
                      Ee,
                      K,
                      Ce,
                      Je,
                      O,
                      S._startClamp && "_startClamp"
                    ) || (_ ? -0.001 : 0),
                  on(Le) && (Le = Le(S)),
                  Gn(Le) &&
                    !Le.indexOf("+=") &&
                    (~Le.indexOf(" ")
                      ? (Le = (Gn(Xe) ? Xe.split(" ")[0] : "") + Le)
                      : ((rt = qa(Le.substr(2), lt)),
                        (Le = Gn(Xe)
                          ? Xe
                          : (O
                              ? ne.utils.mapRange(
                                  0,
                                  O.duration(),
                                  O.scrollTrigger.start,
                                  O.scrollTrigger.end,
                                  Pe
                                )
                              : Pe) + rt),
                        (Nn = C))),
                  Le = b1(Le, "end", S),
                  qe =
                    Math.max(
                      Pe,
                      U1(
                        Le || (Nn ? "100% 0" : Je),
                        Nn,
                        lt,
                        X,
                        ye() + rt,
                        Qt,
                        Zt,
                        S,
                        Ee,
                        K,
                        Ce,
                        Je,
                        O,
                        S._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  rt = 0,
                  kt = Un;
                kt--;

              )
                (gt = Me[kt]),
                  (jn = gt.pin),
                  jn &&
                    gt.start - gt._pinPush <= Pe &&
                    !O &&
                    gt.end > 0 &&
                    ((Ct =
                      gt.end -
                      (S._startClamp ? Math.max(0, gt.start) : gt.start)),
                    ((jn === C && gt.start - gt._pinPush < Pe) || jn === fn) &&
                      isNaN(Xe) &&
                      (rt += Ct * (1 - gt.progress)),
                    jn === _ && (Ye += Ct));
              if (
                ((Pe += rt),
                (qe += rt),
                S._startClamp && (S._startClamp += rt),
                S._endClamp &&
                  !_n &&
                  ((S._endClamp = qe || -0.001), (qe = Math.min(qe, Wr(Z, X)))),
                (Ue = qe - Pe || ((Pe -= 0.01) && 0.001)),
                Ot &&
                  (xe = ne.utils.clamp(0, 1, ne.utils.normalize(Pe, qe, Sn))),
                (S._pinPush = Ye),
                Ht &&
                  rt &&
                  ((Ct = {}),
                  (Ct[X.a] = "+=" + rt),
                  fn && (Ct[X.p] = "-=" + ye()),
                  ne.set([Ht, Qt], Ct)),
                _ && !(Yf && S.end >= Wr(Z, X)))
              )
                (Ct = hr(_)),
                  (js = X === bt),
                  (Qr = ye()),
                  (un = parseFloat(Ke(X.a)) + Ye),
                  !Je &&
                    qe > 1 &&
                    (($n = (ge ? Qe.scrollingElement || Zn : Z).style),
                    ($n = {
                      style: $n,
                      value: $n["overflow" + X.a.toUpperCase()],
                    }),
                    ge &&
                      hr(Be)["overflow" + X.a.toUpperCase()] !== "scroll" &&
                      ($n.style["overflow" + X.a.toUpperCase()] = "scroll")),
                  Cf(_, mt, Ct),
                  (br = Ha(_)),
                  (Tt = li(_, !0)),
                  (Es = Ce && Hi(Z, js ? wn : bt)()),
                  T
                    ? ((dt = [T + X.os2, Ue + Ye + Rt]),
                      (dt.t = mt),
                      (kt = T === Nt ? hu(_, X) + Ue + Ye : 0),
                      kt &&
                        (dt.push(X.d, kt + Rt),
                        mt.style.flexBasis !== "auto" &&
                          (mt.style.flexBasis = kt + Rt)),
                      ul(dt),
                      fn &&
                        Me.forEach(function (Lr) {
                          Lr.pin === fn &&
                            Lr.vars.pinSpacing !== !1 &&
                            (Lr._subPinOffset = !0);
                        }),
                      Ce && ye(Sn))
                    : ((kt = hu(_, X)),
                      kt &&
                        mt.style.flexBasis !== "auto" &&
                        (mt.style.flexBasis = kt + Rt)),
                  Ce &&
                    ((Re = {
                      top: Tt.top + (js ? Qr - Pe : Es) + Rt,
                      left: Tt.left + (js ? Es : Qr - Pe) + Rt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (Re[vs] = Re["max" + gl] = Math.ceil(Tt.width) + Rt),
                    (Re[_s] = Re["max" + wd] = Math.ceil(Tt.height) + Rt),
                    (Re[pr] =
                      Re[pr + xo] =
                      Re[pr + mo] =
                      Re[pr + vo] =
                      Re[pr + go] =
                        "0"),
                    (Re[Nt] = Ct[Nt]),
                    (Re[Nt + xo] = Ct[Nt + xo]),
                    (Re[Nt + mo] = Ct[Nt + mo]),
                    (Re[Nt + vo] = Ct[Nt + vo]),
                    (Re[Nt + go] = Ct[Nt + go]),
                    (_r = e_(Bn, Re, A)),
                    _n && ye(0)),
                  l
                    ? ((Xi = l._initted),
                      vf(1),
                      l.render(l.duration(), !0, !0),
                      (cn = Ke(X.a) - un + Ue + Ye),
                      (rr = Math.abs(Ue - cn) > 1),
                      Ce && rr && _r.splice(_r.length - 2, 2),
                      l.render(0, !0, !0),
                      Xi || l.invalidate(!0),
                      l.parent || l.totalTime(l.totalTime()),
                      vf(0))
                    : (cn = Ue),
                  $n &&
                    ($n.value
                      ? ($n.style["overflow" + X.a.toUpperCase()] = $n.value)
                      : $n.style.removeProperty("overflow-" + X.a));
              else if (C && ye() && !O)
                for (Tt = C.parentNode; Tt && Tt !== Be; )
                  Tt._pinOffset &&
                    ((Pe -= Tt._pinOffset), (qe -= Tt._pinOffset)),
                    (Tt = Tt.parentNode);
              Gi &&
                Gi.forEach(function (Lr) {
                  return Lr.revert(!1, !0);
                }),
                (S.start = Pe),
                (S.end = qe),
                (wt = Vt = _n ? Sn : ye()),
                !O && !_n && (wt < Sn && ye(Sn), (S.scroll.rec = 0)),
                S.revert(!1, !0),
                (me = sn()),
                Dt && ((se = -1), Dt.restart(!0)),
                (rn = 0),
                l &&
                  fe &&
                  (l._initted || Dr) &&
                  l.progress() !== Dr &&
                  l.progress(Dr || 0, !0).render(l.time(), !0, !0),
                (Ot || xe !== S.progress || O || y || (l && !l._initted)) &&
                  (l &&
                    !fe &&
                    (l._initted || xe || l.vars.immediateRender !== !1) &&
                    l.totalProgress(
                      O && Pe < -0.001 && !xe
                        ? ne.utils.normalize(Pe, qe, 0)
                        : xe,
                      !0
                    ),
                  (S.progress = Ot || (wt - Pe) / Ue === xe ? 0 : xe)),
                _ && T && (mt._pinOffset = Math.round(S.progress * cn)),
                je && je.invalidate(),
                isNaN(Or) ||
                  ((Or -= ne.getProperty(D, X.p)),
                  (dn -= ne.getProperty(Zt, X.p)),
                  Wa(D, X, Or),
                  Wa(Ht, X, Or - (_e || 0)),
                  Wa(Zt, X, dn),
                  Wa(Qt, X, dn - (_e || 0))),
                Ot && !_n && S.update(),
                v && !_n && !Cn && ((Cn = !0), v(S), (Cn = !1));
            }
          }),
          (S.getVelocity = function () {
            return ((ye() - Vt) / (sn() - no)) * 1e3 || 0;
          }),
          (S.endAnimation = function () {
            Jl(S.callbackAnimation),
              l &&
                (je
                  ? je.progress(1)
                  : l.paused()
                  ? fe || Jl(l, S.direction < 0, 1)
                  : Jl(l, l.reversed()));
          }),
          (S.labelToScroll = function (q) {
            return (
              (l &&
                l.labels &&
                (Pe || S.refresh() || Pe) +
                  (l.labels[q] / l.duration()) * Ue) ||
              0
            );
          }),
          (S.getTrailing = function (q) {
            var ve = Me.indexOf(S),
              oe =
                S.direction > 0 ? Me.slice(0, ve).reverse() : Me.slice(ve + 1);
            return (
              Gn(q)
                ? oe.filter(function (_e) {
                    return _e.vars.preventOverlaps === q;
                  })
                : oe
            ).filter(function (_e) {
              return S.direction > 0 ? _e.end <= Pe : _e.start >= qe;
            });
          }),
          (S.update = function (q, ve, oe) {
            if (!(O && !oe && !q)) {
              var _e = _n === !0 ? Sn : S.scroll(),
                lt = q ? 0 : (_e - Pe) / Ue,
                Ee = lt < 0 ? 0 : lt > 1 ? 1 : lt || 0,
                Je = S.progress,
                Ot,
                rt,
                Ye,
                Le,
                Nn,
                Xe,
                fn,
                Un;
              if (
                (ve &&
                  ((Vt = wt),
                  (wt = O ? ye() : _e),
                  z && ((kr = ir), (ir = l && !fe ? l.totalProgress() : Ee))),
                M &&
                  _ &&
                  !rn &&
                  !Ia &&
                  vr &&
                  (!Ee && Pe < _e + ((_e - Vt) / (sn() - no)) * M
                    ? (Ee = 1e-4)
                    : Ee === 1 &&
                      qe > _e + ((_e - Vt) / (sn() - no)) * M &&
                      (Ee = 0.9999)),
                Ee !== Je && S.enabled)
              ) {
                if (
                  ((Ot = S.isActive = !!Ee && Ee < 1),
                  (rt = !!Je && Je < 1),
                  (Xe = Ot !== rt),
                  (Nn = Xe || !!Ee != !!Je),
                  (S.direction = Ee > Je ? 1 : -1),
                  (S.progress = Ee),
                  Nn &&
                    !rn &&
                    ((Ye = Ee && !Je ? 0 : Ee === 1 ? 1 : Je === 1 ? 2 : 3),
                    fe &&
                      ((Le =
                        (!Xe && ee[Ye + 1] !== "none" && ee[Ye + 1]) || ee[Ye]),
                      (Un =
                        l &&
                        (Le === "complete" || Le === "reset" || Le in l)))),
                  $ &&
                    (Xe || Un) &&
                    (Un || k || !l) &&
                    (on($)
                      ? $(S)
                      : S.getTrailing($).forEach(function (Qr) {
                          return Qr.endAnimation();
                        })),
                  fe ||
                    (je && !rn && !Ia
                      ? (je._dp._time - je._start !== je._time &&
                          je.render(je._dp._time - je._start),
                        je.resetTo
                          ? je.resetTo("totalProgress", Ee, l._tTime / l._tDur)
                          : ((je.vars.totalProgress = Ee),
                            je.invalidate().restart()))
                      : l && l.totalProgress(Ee, !!(rn && (me || q)))),
                  _)
                ) {
                  if ((q && T && (mt.style[T + X.os2] = wr), !Ce))
                    qt(io(un + cn * Ee));
                  else if (Nn) {
                    if (
                      ((fn =
                        !q && Ee > Je && qe + 1 > _e && _e + 1 >= Wr(Z, X)),
                      A)
                    )
                      if (!q && (Ot || fn)) {
                        var kt = li(_, !0),
                          Ct = _e - Pe;
                        $1(
                          _,
                          Be,
                          kt.top + (X === bt ? Ct : 0) + Rt,
                          kt.left + (X === bt ? 0 : Ct) + Rt
                        );
                      } else $1(_, mt);
                    ul(Ot || fn ? _r : br),
                      (rr && Ee < 1 && Ot) ||
                        qt(un + (Ee === 1 && !fn ? cn : 0));
                  }
                }
                z && !Se.tween && !rn && !Ia && Dt.restart(!0),
                  c &&
                    (Xe || (B && Ee && (Ee < 1 || !_f))) &&
                    Eo(c.targets).forEach(function (Qr) {
                      return Qr.classList[Ot || B ? "add" : "remove"](
                        c.className
                      );
                    }),
                  f && !fe && !q && f(S),
                  Nn && !rn
                    ? (fe &&
                        (Un &&
                          (Le === "complete"
                            ? l.pause().totalProgress(1)
                            : Le === "reset"
                            ? l.restart(!0).pause()
                            : Le === "restart"
                            ? l.restart(!0)
                            : l[Le]()),
                        f && f(S)),
                      (Xe || !_f) &&
                        (g && Xe && wf(S, g),
                        de[Ye] && wf(S, de[Ye]),
                        B && (Ee === 1 ? S.kill(!1, 1) : (de[Ye] = 0)),
                        Xe ||
                          ((Ye = Ee === 1 ? 1 : 3), de[Ye] && wf(S, de[Ye]))),
                      Y &&
                        !Ot &&
                        Math.abs(S.getVelocity()) > (so(Y) ? Y : 2500) &&
                        (Jl(S.callbackAnimation),
                        je
                          ? je.progress(1)
                          : Jl(l, Le === "reverse" ? 1 : !Ee, 1)))
                    : fe && f && !rn && f(S);
              }
              if (fi) {
                var Tt = O ? (_e / O.duration()) * (O._caScrollDist || 0) : _e;
                Yi(Tt + (D._isFlipped ? 1 : 0)), fi(Tt);
              }
              Gr && Gr((-_e / O.duration()) * (O._caScrollDist || 0));
            }
          }),
          (S.enable = function (q, ve) {
            S.enabled ||
              ((S.enabled = !0),
              Bt(Z, "resize", lo),
              ge || Bt(Z, "scroll", Ks),
              j && Bt(p, "refreshInit", j),
              q !== !1 && ((S.progress = xe = 0), (wt = Vt = se = ye())),
              ve !== !1 && S.refresh());
          }),
          (S.getTween = function (q) {
            return q && Se ? Se.tween : je;
          }),
          (S.setPositions = function (q, ve, oe, _e) {
            if (O) {
              var lt = O.scrollTrigger,
                Ee = O.duration(),
                Je = lt.end - lt.start;
              (q = lt.start + (Je * q) / Ee), (ve = lt.start + (Je * ve) / Ee);
            }
            S.refresh(
              !1,
              !1,
              {
                start: z1(q, oe && !!S._startClamp),
                end: z1(ve, oe && !!S._endClamp),
              },
              _e
            ),
              S.update();
          }),
          (S.adjustPinSpacing = function (q) {
            if (dt && q) {
              var ve = dt.indexOf(X.d) + 1;
              (dt[ve] = parseFloat(dt[ve]) + q + Rt),
                (dt[1] = parseFloat(dt[1]) + q + Rt),
                ul(dt);
            }
          }),
          (S.disable = function (q, ve) {
            if (
              S.enabled &&
              (q !== !1 && S.revert(!0, !0),
              (S.enabled = S.isActive = !1),
              ve || (je && je.pause()),
              (Sn = 0),
              Ne && (Ne.uncache = 1),
              j && Ft(p, "refreshInit", j),
              Dt && (Dt.pause(), Se.tween && Se.tween.kill() && (Se.tween = 0)),
              !ge)
            ) {
              for (var oe = Me.length; oe--; )
                if (Me[oe].scroller === Z && Me[oe] !== S) return;
              Ft(Z, "resize", lo), ge || Ft(Z, "scroll", Ks);
            }
          }),
          (S.kill = function (q, ve) {
            S.disable(q, ve), je && !ve && je.kill(), m && delete Xf[m];
            var oe = Me.indexOf(S);
            oe >= 0 && Me.splice(oe, 1),
              oe === vn && Ja > 0 && vn--,
              (oe = 0),
              Me.forEach(function (_e) {
                return _e.scroller === S.scroller && (oe = 1);
              }),
              oe || _n || (S.scroll.rec = 0),
              l &&
                ((l.scrollTrigger = null),
                q && l.revert({ kill: !1 }),
                ve || l.kill()),
              Ht &&
                [Ht, Qt, D, Zt].forEach(function (_e) {
                  return _e.parentNode && _e.parentNode.removeChild(_e);
                }),
              _o === S && (_o = 0),
              _ &&
                (Ne && (Ne.uncache = 1),
                (oe = 0),
                Me.forEach(function (_e) {
                  return _e.pin === _ && oe++;
                }),
                oe || (Ne.spacer = 0)),
              s.onKill && s.onKill(S);
          }),
          Me.push(S),
          S.enable(!1, !1),
          sr && sr(S),
          l && l.add && !Ue)
        ) {
          var Oe = S.update;
          (S.update = function () {
            (S.update = Oe), De.cache++, Pe || qe || S.refresh();
          }),
            ne.delayedCall(0.01, S.update),
            (Ue = 0.01),
            (Pe = qe = 0);
        } else S.refresh();
        _ && qv();
      }),
      (p.register = function (s) {
        return (
          Js ||
            ((ne = s || fm()),
            cm() && window.document && p.enable(),
            (Js = ro)),
          Js
        );
      }),
      (p.defaults = function (s) {
        if (s) for (var l in s) $a[l] = s[l];
        return $a;
      }),
      (p.disable = function (s, l) {
        (ro = 0),
          Me.forEach(function (f) {
            return f[l ? "kill" : "disable"](s);
          }),
          Ft(ze, "wheel", Ks),
          Ft(Qe, "scroll", Ks),
          clearInterval(Aa),
          Ft(Qe, "touchcancel", $r),
          Ft(Be, "touchstart", $r),
          Ba(Ft, Qe, "pointerdown,touchstart,mousedown", D1),
          Ba(Ft, Qe, "pointerup,touchend,mouseup", O1),
          du.kill(),
          Fa(Ft);
        for (var a = 0; a < De.length; a += 3)
          Ua(Ft, De[a], De[a + 1]), Ua(Ft, De[a], De[a + 2]);
      }),
      (p.enable = function () {
        if (
          ((ze = window),
          (Qe = document),
          (Zn = Qe.documentElement),
          (Be = Qe.body),
          ne &&
            ((Eo = ne.utils.toArray),
            (ho = ne.utils.clamp),
            (Wf = ne.core.context || $r),
            (vf = ne.core.suppressOverwrites || $r),
            (xd = ze.history.scrollRestoration || "auto"),
            (Gf = ze.pageYOffset || 0),
            ne.core.globals("ScrollTrigger", p),
            Be))
        ) {
          (ro = 1),
            (al = document.createElement("div")),
            (al.style.height = "100vh"),
            (al.style.position = "absolute"),
            ym(),
            Hv(),
            yt.register(ne),
            (p.isTouch = yt.isTouch),
            (bi =
              yt.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (Hf = yt.isTouch === 1),
            Bt(ze, "wheel", Ks),
            (gd = [ze, Qe, Zn, Be]),
            ne.matchMedia
              ? ((p.matchMedia = function (g) {
                  var v = ne.matchMedia(),
                    k;
                  for (k in g) v.add(k, g[k]);
                  return v;
                }),
                ne.addEventListener("matchMediaInit", function () {
                  return Cd();
                }),
                ne.addEventListener("matchMediaRevert", function () {
                  return vm();
                }),
                ne.addEventListener("matchMedia", function () {
                  ps(0, 1), Ss("matchMedia");
                }),
                ne.matchMedia().add("(orientation: portrait)", function () {
                  return kf(), kf;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            kf(),
            Bt(Qe, "scroll", Ks);
          var s = Be.hasAttribute("style"),
            l = Be.style,
            a = l.borderTopStyle,
            f = ne.core.Animation.prototype,
            c,
            m;
          for (
            f.revert ||
              Object.defineProperty(f, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              l.borderTopStyle = "solid",
              c = li(Be),
              bt.m = Math.round(c.top + bt.sc()) || 0,
              wn.m = Math.round(c.left + wn.sc()) || 0,
              a ? (l.borderTopStyle = a) : l.removeProperty("border-top-style"),
              s || (Be.setAttribute("style", ""), Be.removeAttribute("style")),
              Aa = setInterval(I1, 250),
              ne.delayedCall(0.5, function () {
                return (Ia = 0);
              }),
              Bt(Qe, "touchcancel", $r),
              Bt(Be, "touchstart", $r),
              Ba(Bt, Qe, "pointerdown,touchstart,mousedown", D1),
              Ba(Bt, Qe, "pointerup,touchend,mouseup", O1),
              Vf = ne.utils.checkPrefix("transform"),
              eu.push(Vf),
              Js = sn(),
              du = ne.delayedCall(0.2, ps).pause(),
              el = [
                Qe,
                "visibilitychange",
                function () {
                  var g = ze.innerWidth,
                    v = ze.innerHeight;
                  Qe.hidden
                    ? ((P1 = g), (R1 = v))
                    : (P1 !== g || R1 !== v) && lo();
                },
                Qe,
                "DOMContentLoaded",
                ps,
                ze,
                "load",
                ps,
                ze,
                "resize",
                lo,
              ],
              Fa(Bt),
              Me.forEach(function (g) {
                return g.enable(0, 1);
              }),
              m = 0;
            m < De.length;
            m += 3
          )
            Ua(Ft, De[m], De[m + 1]), Ua(Ft, De[m], De[m + 2]);
        }
      }),
      (p.config = function (s) {
        "limitCallbacks" in s && (_f = !!s.limitCallbacks);
        var l = s.syncInterval;
        (l && clearInterval(Aa)) || ((Aa = l) && setInterval(I1, l)),
          "ignoreMobileResize" in s &&
            (Hf = p.isTouch === 1 && s.ignoreMobileResize),
          "autoRefreshEvents" in s &&
            (Fa(Ft) || Fa(Bt, s.autoRefreshEvents || "none"),
            (om = (s.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (p.scrollerProxy = function (s, l) {
        var a = zn(s),
          f = De.indexOf(a),
          c = ks(a);
        ~f && De.splice(f, c ? 6 : 2),
          l && (c ? Yr.unshift(ze, l, Be, l, Zn, l) : Yr.unshift(a, l));
      }),
      (p.clearMatchMedia = function (s) {
        Me.forEach(function (l) {
          return l._ctx && l._ctx.query === s && l._ctx.kill(!0, !0);
        });
      }),
      (p.isInViewport = function (s, l, a) {
        var f = (Gn(s) ? zn(s) : s).getBoundingClientRect(),
          c = f[a ? vs : _s] * l || 0;
        return a
          ? f.right - c > 0 && f.left + c < ze.innerWidth
          : f.bottom - c > 0 && f.top + c < ze.innerHeight;
      }),
      (p.positionInViewport = function (s, l, a) {
        Gn(s) && (s = zn(s));
        var f = s.getBoundingClientRect(),
          c = f[a ? vs : _s],
          m =
            l == null
              ? c / 2
              : l in mu
              ? mu[l] * c
              : ~l.indexOf("%")
              ? (parseFloat(l) * c) / 100
              : parseFloat(l) || 0;
        return a ? (f.left + m) / ze.innerWidth : (f.top + m) / ze.innerHeight;
      }),
      (p.killAll = function (s) {
        if (
          (Me.slice(0).forEach(function (a) {
            return a.vars.id !== "ScrollSmoother" && a.kill();
          }),
          s !== !0)
        ) {
          var l = Cs.killAll || [];
          (Cs = {}),
            l.forEach(function (a) {
              return a();
            });
        }
      }),
      p
    );
  })();
Te.version = "3.13.0";
Te.saveStyles = function (p) {
  return p
    ? Eo(p).forEach(function (n) {
        if (n && n.style) {
          var i = Xn.indexOf(n);
          i >= 0 && Xn.splice(i, 5),
            Xn.push(
              n,
              n.style.cssText,
              n.getBBox && n.getAttribute("transform"),
              ne.core.getCache(n),
              Wf()
            );
        }
      })
    : Xn;
};
Te.revert = function (p, n) {
  return Cd(!p, n);
};
Te.create = function (p, n) {
  return new Te(p, n);
};
Te.refresh = function (p) {
  return p ? lo(!0) : (Js || Te.register()) && ps(!0);
};
Te.update = function (p) {
  return ++De.cache && ai(p === !0 ? 2 : 0);
};
Te.clearScrollMemory = _m;
Te.maxScroll = function (p, n) {
  return Wr(p, n ? wn : bt);
};
Te.getScrollFunc = function (p, n) {
  return Hi(zn(p), n ? wn : bt);
};
Te.getById = function (p) {
  return Xf[p];
};
Te.getAll = function () {
  return Me.filter(function (p) {
    return p.vars.id !== "ScrollSmoother";
  });
};
Te.isScrolling = function () {
  return !!vr;
};
Te.snapDirectional = kd;
Te.addEventListener = function (p, n) {
  var i = Cs[p] || (Cs[p] = []);
  ~i.indexOf(n) || i.push(n);
};
Te.removeEventListener = function (p, n) {
  var i = Cs[p],
    s = i && i.indexOf(n);
  s >= 0 && i.splice(s, 1);
};
Te.batch = function (p, n) {
  var i = [],
    s = {},
    l = n.interval || 0.016,
    a = n.batchMax || 1e9,
    f = function (g, v) {
      var k = [],
        C = [],
        _ = ne
          .delayedCall(l, function () {
            v(k, C), (k = []), (C = []);
          })
          .pause();
      return function (T) {
        k.length || _.restart(!0),
          k.push(T.trigger),
          C.push(T),
          a <= k.length && _.progress(1);
      };
    },
    c;
  for (c in n)
    s[c] =
      c.substr(0, 2) === "on" && on(n[c]) && c !== "onRefreshInit"
        ? f(c, n[c])
        : n[c];
  return (
    on(a) &&
      ((a = a()),
      Bt(Te, "refresh", function () {
        return (a = n.batchMax());
      })),
    Eo(p).forEach(function (m) {
      var g = {};
      for (c in s) g[c] = s[c];
      (g.trigger = m), i.push(Te.create(g));
    }),
    i
  );
};
var H1 = function (n, i, s, l) {
    return (
      i > l ? n(l) : i < 0 && n(0),
      s > l ? (l - i) / (s - i) : s < 0 ? i / (i - s) : 1
    );
  },
  Sf = function p(n, i) {
    i === !0
      ? n.style.removeProperty("touch-action")
      : (n.style.touchAction =
          i === !0
            ? "auto"
            : i
            ? "pan-" + i + (yt.isTouch ? " pinch-zoom" : "")
            : "none"),
      n === Zn && p(Be, i);
  },
  Ya = { auto: 1, scroll: 1 },
  n_ = function (n) {
    var i = n.event,
      s = n.target,
      l = n.axis,
      a = (i.changedTouches ? i.changedTouches[0] : i).target,
      f = a._gsap || ne.core.getCache(a),
      c = sn(),
      m;
    if (!f._isScrollT || c - f._isScrollT > 2e3) {
      for (
        ;
        a &&
        a !== Be &&
        ((a.scrollHeight <= a.clientHeight && a.scrollWidth <= a.clientWidth) ||
          !(Ya[(m = hr(a)).overflowY] || Ya[m.overflowX]));

      )
        a = a.parentNode;
      (f._isScroll =
        a &&
        a !== s &&
        !ks(a) &&
        (Ya[(m = hr(a)).overflowY] || Ya[m.overflowX])),
        (f._isScrollT = c);
    }
    (f._isScroll || l === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
  },
  km = function (n, i, s, l) {
    return yt.create({
      target: n,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: i,
      onWheel: (l = l && n_),
      onPress: l,
      onDrag: l,
      onScroll: l,
      onEnable: function () {
        return s && Bt(Qe, yt.eventTypes[0], Y1, !1, !0);
      },
      onDisable: function () {
        return Ft(Qe, yt.eventTypes[0], Y1, !0);
      },
    });
  },
  r_ = /(input|label|select|textarea)/i,
  W1,
  Y1 = function (n) {
    var i = r_.test(n.target.tagName);
    (i || W1) && ((n._gsapAllow = !0), (W1 = i));
  },
  i_ = function (n) {
    fs(n) || (n = {}),
      (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
      n.type || (n.type = "wheel,touch"),
      (n.debounce = !!n.debounce),
      (n.id = n.id || "normalizer");
    var i = n,
      s = i.normalizeScrollX,
      l = i.momentum,
      a = i.allowNestedScroll,
      f = i.onRelease,
      c,
      m,
      g = zn(n.target) || Zn,
      v = ne.core.globals().ScrollSmoother,
      k = v && v.get(),
      C =
        bi &&
        ((n.content && zn(n.content)) ||
          (k && n.content !== !1 && !k.smooth() && k.content())),
      _ = Hi(g, bt),
      T = Hi(g, wn),
      y = 1,
      M =
        (yt.isTouch && ze.visualViewport
          ? ze.visualViewport.scale * ze.visualViewport.width
          : ze.outerWidth) / ze.innerWidth,
      I = 0,
      L = on(l)
        ? function () {
            return l(c);
          }
        : function () {
            return l || 2.8;
          },
      B,
      z,
      A = km(g, n.type, !0, a),
      U = function () {
        return (z = !1);
      },
      O = $r,
      Y = $r,
      $ = function () {
        (m = Wr(g, bt)),
          (Y = ho(bi ? 1 : 0, m)),
          s && (O = ho(0, Wr(g, wn))),
          (B = ys);
      },
      X = function () {
        (C._gsap.y = io(parseFloat(C._gsap.y) + _.offset) + "px"),
          (C.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(C._gsap.y) +
            ", 0, 1)"),
          (_.offset = _.cacheID = 0);
      },
      fe = function () {
        if (z) {
          requestAnimationFrame(U);
          var V = io(c.deltaY / 2),
            K = Y(_.v - V);
          if (C && K !== _.v + _.offset) {
            _.offset = K - _.v;
            var S = io((parseFloat(C && C._gsap.y) || 0) - _.offset);
            (C.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              S +
              ", 0, 1)"),
              (C._gsap.y = S + "px"),
              (_.cacheID = De.cache),
              ai();
          }
          return !0;
        }
        _.offset && X(), (z = !0);
      },
      Z,
      he,
      ge,
      Ce,
      de = function () {
        $(),
          Z.isActive() &&
            Z.vars.scrollY > m &&
            (_() > m ? Z.progress(1) && _(m) : Z.resetTo("scrollY", m));
      };
    return (
      C && ne.set(C, { y: "+=0" }),
      (n.ignoreCheck = function (ee) {
        return (
          (bi && ee.type === "touchmove" && fe()) ||
          (y > 1.05 && ee.type !== "touchstart") ||
          c.isGesturing ||
          (ee.touches && ee.touches.length > 1)
        );
      }),
      (n.onPress = function () {
        z = !1;
        var ee = y;
        (y = io(((ze.visualViewport && ze.visualViewport.scale) || 1) / M)),
          Z.pause(),
          ee !== y && Sf(g, y > 1.01 ? !0 : s ? !1 : "x"),
          (he = T()),
          (ge = _()),
          $(),
          (B = ys);
      }),
      (n.onRelease = n.onGestureStart =
        function (ee, V) {
          if ((_.offset && X(), !V)) Ce.restart(!0);
          else {
            De.cache++;
            var K = L(),
              S,
              j;
            s &&
              ((S = T()),
              (j = S + (K * 0.05 * -ee.velocityX) / 0.227),
              (K *= H1(T, S, j, Wr(g, wn))),
              (Z.vars.scrollX = O(j))),
              (S = _()),
              (j = S + (K * 0.05 * -ee.velocityY) / 0.227),
              (K *= H1(_, S, j, Wr(g, bt))),
              (Z.vars.scrollY = Y(j)),
              Z.invalidate().duration(K).play(0.01),
              ((bi && Z.vars.scrollY >= m) || S >= m - 1) &&
                ne.to({}, { onUpdate: de, duration: K });
          }
          f && f(ee);
        }),
      (n.onWheel = function () {
        Z._ts && Z.pause(), sn() - I > 1e3 && ((B = 0), (I = sn()));
      }),
      (n.onChange = function (ee, V, K, S, j) {
        if (
          (ys !== B && $(),
          V && s && T(O(S[2] === V ? he + (ee.startX - ee.x) : T() + V - S[1])),
          K)
        ) {
          _.offset && X();
          var F = j[2] === K,
            pe = F ? ge + ee.startY - ee.y : _() + K - j[1],
            se = Y(pe);
          F && pe !== se && (ge += se - pe), _(se);
        }
        (K || V) && ai();
      }),
      (n.onEnable = function () {
        Sf(g, s ? !1 : "x"),
          Te.addEventListener("refresh", de),
          Bt(ze, "resize", de),
          _.smooth &&
            ((_.target.style.scrollBehavior = "auto"),
            (_.smooth = T.smooth = !1)),
          A.enable();
      }),
      (n.onDisable = function () {
        Sf(g, !0),
          Ft(ze, "resize", de),
          Te.removeEventListener("refresh", de),
          A.kill();
      }),
      (n.lockAxis = n.lockAxis !== !1),
      (c = new yt(n)),
      (c.iOS = bi),
      bi && !_() && _(1),
      bi && ne.ticker.add($r),
      (Ce = c._dc),
      (Z = ne.to(c, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: s ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: wm(_, _(), function () {
            return Z.pause();
          }),
        },
        onUpdate: ai,
        onComplete: Ce.vars.onComplete,
      })),
      c
    );
  };
Te.sort = function (p) {
  if (on(p)) return Me.sort(p);
  var n = ze.pageYOffset || 0;
  return (
    Te.getAll().forEach(function (i) {
      return (i._sortY = i.trigger
        ? n + i.trigger.getBoundingClientRect().top
        : i.start + ze.innerHeight);
    }),
    Me.sort(
      p ||
        function (i, s) {
          return (
            (i.vars.refreshPriority || 0) * -1e6 +
            (i.vars.containerAnimation ? 1e6 : i._sortY) -
            ((s.vars.containerAnimation ? 1e6 : s._sortY) +
              (s.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
Te.observe = function (p) {
  return new yt(p);
};
Te.normalizeScroll = function (p) {
  if (typeof p > "u") return xn;
  if (p === !0 && xn) return xn.enable();
  if (p === !1) {
    xn && xn.kill(), (xn = p);
    return;
  }
  var n = p instanceof yt ? p : i_(p);
  return xn && xn.target === n.target && xn.kill(), ks(n.target) && (xn = n), n;
};
Te.core = {
  _getVelocityProp: $f,
  _inputObserver: km,
  _scrollers: De,
  _proxies: Yr,
  bridge: {
    ss: function () {
      vr || Ss("scrollStart"), (vr = sn());
    },
    ref: function () {
      return rn;
    },
  },
};
fm() && ne.registerPlugin(Te);
kn.registerPlugin(Te);
function s_({ navigate: p }) {
  const n = nt.useRef(null),
    i = nt.useRef(null),
    s = nt.useRef(null),
    l = nt.useRef(null);
  return (
    nt.useEffect(() => {
      const a = n.current;
      a &&
        kn.from(a, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: a,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
      const f = i.current;
      f &&
        kn.from(f, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: f,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
      const c = s.current;
      c &&
        kn.from(c, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: c,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
      const m = l.current;
      m &&
        kn.from(m, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: m,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
    }, []),
    h.jsxs("div", {
      className: "bg-neutral-950 min-h-screen",
      children: [
        h.jsx(xu, { navigate: p, currentPage: "home" }),
        h.jsx("section", {
          ref: n,
          className: "pt-32 pb-20 px-6",
          children: h.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: h.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
              children: [
                h.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    h.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        h.jsxs("h1", {
                          className:
                            "text-[80px] lg:text-[101px] leading-[0.9] text-white",
                          children: [
                            "HI, I AM",
                            h.jsx("br", {}),
                            "ROBERT GARCIA.",
                          ],
                        }),
                        h.jsx("p", {
                          className:
                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[540px]",
                          children:
                            "A India based front-end developer passionate about building accessible and user friendly websites.",
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex gap-4 items-center flex-wrap",
                      children: [
                        h.jsxs("a", {
                          href: "#contact",
                          className:
                            "bg-[#d3e97a] rounded-full flex items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors",
                          children: [
                            h.jsx("span", {
                              className:
                                "font-['Manrope',sans-serif] font-bold font-bold text-[16px] text-neutral-950 uppercase",
                              children: "Contact Me",
                            }),
                            h.jsx("div", {
                              className:
                                "size-[42px] bg-neutral-950 rounded-full flex items-center justify-center",
                              children: h.jsx("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                children: h.jsx("path", {
                                  d: nn.p23c4ec40,
                                  fill: "white",
                                }),
                              }),
                            }),
                          ],
                        }),
                        h.jsx("a", {
                          href: "#",
                          className:
                            "bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors",
                          children: h.jsxs("svg", {
                            width: "26",
                            height: "26",
                            viewBox: "0 0 26 26",
                            fill: "none",
                            children: [
                              h.jsx("path", {
                                d: nn.p282a2240,
                                fill: "#D3E97A",
                              }),
                              h.jsx("path", {
                                d: nn.p31d7ad00,
                                fill: "#D3E97A",
                              }),
                            ],
                          }),
                        }),
                        h.jsx("a", {
                          href: "#",
                          className:
                            "bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors",
                          children: h.jsx("svg", {
                            width: "26",
                            height: "26",
                            viewBox: "0 0 26 26",
                            fill: "none",
                            children: h.jsx("path", {
                              clipRule: "evenodd",
                              d: nn.p17e6c000,
                              fill: "#D3E97A",
                              fillRule: "evenodd",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsx("div", {
                  className: "relative",
                  children: h.jsx("div", {
                    className:
                      "bg-[#c7c7c7] rounded-[16px] w-full max-w-[600px] mx-auto aspect-[6/7] relative overflow-hidden",
                    children: h.jsx(ru, {
                      src: x2,
                      alt: Ze.name,
                      className:
                        "absolute inset-0 w-full h-full object-cover object-center",
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
        h.jsx("div", {
          className: "max-w-7xl mx-auto px-6",
          children: h.jsx("div", { className: "border-t border-[#484848]" }),
        }),
        h.jsx("section", {
          ref: i,
          id: "work",
          className: "py-20 px-6",
          children: h.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              h.jsxs("div", {
                className: "space-y-4 mb-16",
                children: [
                  h.jsx("h2", {
                    className: "text-[76px] text-white leading-none",
                    children: "Featured Projects",
                  }),
                  h.jsx("p", {
                    className:
                      "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]",
                    children:
                      "Here are some of the selected projects that showcase my passion for front-end development.",
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "space-y-20",
                children: [
                  h.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                      h.jsxs("div", {
                        className:
                          "bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden",
                        children: [
                          h.jsx("img", {
                            src: v2,
                            alt: "Adventure Time Project",
                            className:
                              "absolute inset-0 w-full h-full object-contain p-12",
                          }),
                          h.jsx("div", {
                            className:
                              "absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full",
                            children: h.jsx("span", {
                              className:
                                "font-['Manrope',sans-serif] font-medium text-white text-[14px]",
                              children: "Conceptual Work",
                            }),
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          h.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              h.jsx("h3", {
                                className:
                                  "font-['Manrope',sans-serif] font-medium text-[32px] text-white leading-[1.4]",
                                children:
                                  "Promotional landing page for our favorite show",
                              }),
                              h.jsx("p", {
                                className:
                                  "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]",
                                children:
                                  "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              h.jsx("p", {
                                className:
                                  "font-['Manrope',sans-serif] font-semibold font-semibold text-white text-[16px] uppercase",
                                children: "Project Info",
                              }),
                              h.jsxs("div", {
                                className:
                                  "border-t border-b border-[#484848] divide-y divide-[#484848]",
                                children: [
                                  h.jsxs("div", {
                                    className: "flex justify-between py-4",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-white text-[16px]",
                                        children: "Year",
                                      }),
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                                        children: "2023",
                                      }),
                                    ],
                                  }),
                                  h.jsxs("div", {
                                    className: "flex justify-between py-4",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-white text-[16px]",
                                        children: "Role",
                                      }),
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                                        children: "Front-end Developer",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "flex gap-6 flex-wrap",
                            children: [
                              h.jsxs("a", {
                                href: "#",
                                className: "group inline-flex flex-col gap-1",
                                children: [
                                  h.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-bold font-bold text-[#d3e97a] text-[16px] uppercase",
                                        children: "Live Demo",
                                      }),
                                      h.jsx("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: h.jsx("path", {
                                          d: nn.p3589c00,
                                          fill: "#D3E97A",
                                        }),
                                      }),
                                    ],
                                  }),
                                  h.jsx("div", {
                                    className: "h-[2px] w-full bg-[#d3e97a]",
                                  }),
                                ],
                              }),
                              h.jsxs("a", {
                                href: "#",
                                className: "group inline-flex flex-col gap-1",
                                children: [
                                  h.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-bold font-bold text-[#d3e97a] text-[16px] uppercase",
                                        children: "See on Github",
                                      }),
                                      h.jsx("svg", {
                                        width: "26",
                                        height: "26",
                                        viewBox: "0 0 26 26",
                                        fill: "none",
                                        children: h.jsx("path", {
                                          clipRule: "evenodd",
                                          d: nn.p17e6c000,
                                          fill: "#D3E97A",
                                          fillRule: "evenodd",
                                        }),
                                      }),
                                    ],
                                  }),
                                  h.jsx("div", {
                                    className: "h-[2px] w-full bg-[#d3e97a]",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                      h.jsx("div", {
                        className:
                          "bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden",
                        children: h.jsx("img", {
                          src: _2,
                          alt: "World News Blog",
                          className:
                            "absolute inset-0 w-full h-full object-contain p-12",
                        }),
                      }),
                      h.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          h.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              h.jsx("h3", {
                                className:
                                  "font-['Manrope',sans-serif] font-medium text-[32px] text-white leading-[1.4]",
                                children: "Blog site for World News",
                              }),
                              h.jsx("p", {
                                className:
                                  "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]",
                                children:
                                  "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.",
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              h.jsx("p", {
                                className:
                                  "font-['Manrope',sans-serif] font-semibold font-semibold text-white text-[16px] uppercase",
                                children: "Project Info",
                              }),
                              h.jsxs("div", {
                                className:
                                  "border-t border-b border-[#484848] divide-y divide-[#484848]",
                                children: [
                                  h.jsxs("div", {
                                    className: "flex justify-between py-4",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-white text-[16px]",
                                        children: "Client",
                                      }),
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                                        children: "World News",
                                      }),
                                    ],
                                  }),
                                  h.jsxs("div", {
                                    className: "flex justify-between py-4",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-white text-[16px]",
                                        children: "Year",
                                      }),
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                                        children: "2022",
                                      }),
                                    ],
                                  }),
                                  h.jsxs("div", {
                                    className: "flex justify-between py-4",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-white text-[16px]",
                                        children: "Role",
                                      }),
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                                        children: "Front-end Developer",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h.jsx("div", {
                            className: "flex gap-6 flex-wrap",
                            children: h.jsxs("a", {
                              href: "#",
                              className: "group inline-flex flex-col gap-1",
                              children: [
                                h.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    h.jsx("span", {
                                      className:
                                        "font-['Manrope',sans-serif] font-bold font-bold text-[#d3e97a] text-[16px] uppercase",
                                      children: "View Project",
                                    }),
                                    h.jsx("svg", {
                                      width: "24",
                                      height: "24",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      children: h.jsx("path", {
                                        d: nn.p3589c00,
                                        fill: "#D3E97A",
                                      }),
                                    }),
                                  ],
                                }),
                                h.jsx("div", {
                                  className: "h-[2px] w-full bg-[#d3e97a]",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className:
                      "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                      h.jsxs("div", {
                        className:
                          "bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden",
                        children: [
                          h.jsx("img", {
                            src: y2,
                            alt: "E-commerce Product Page",
                            className:
                              "absolute inset-0 w-full h-full object-contain p-12",
                          }),
                          h.jsx("div", {
                            className:
                              "absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full",
                            children: h.jsx("span", {
                              className:
                                "font-['Manrope',sans-serif] font-medium text-white text-[14px]",
                              children: "Challenge",
                            }),
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          h.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              h.jsx("h3", {
                                className:
                                  "font-['Manrope',sans-serif] font-medium text-[32px] text-white leading-[1.4]",
                                children: "E-commerce product page",
                              }),
                              h.jsx("p", {
                                className:
                                  "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]",
                                children:
                                  "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              h.jsx("p", {
                                className:
                                  "font-['Manrope',sans-serif] font-semibold font-semibold text-white text-[16px] uppercase",
                                children: "Project Info",
                              }),
                              h.jsxs("div", {
                                className:
                                  "border-t border-b border-[#484848] divide-y divide-[#484848]",
                                children: [
                                  h.jsxs("div", {
                                    className: "flex justify-between py-4",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-white text-[16px]",
                                        children: "Year",
                                      }),
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                                        children: "2022",
                                      }),
                                    ],
                                  }),
                                  h.jsxs("div", {
                                    className: "flex justify-between py-4",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-white text-[16px]",
                                        children: "Role",
                                      }),
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                                        children: "Front-end Developer",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "flex gap-6 flex-wrap",
                            children: [
                              h.jsxs("a", {
                                href: "#",
                                className: "group inline-flex flex-col gap-1",
                                children: [
                                  h.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-bold font-bold text-[#d3e97a] text-[16px] uppercase",
                                        children: "Live Demo",
                                      }),
                                      h.jsx("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: h.jsx("path", {
                                          d: nn.p3589c00,
                                          fill: "#D3E97A",
                                        }),
                                      }),
                                    ],
                                  }),
                                  h.jsx("div", {
                                    className: "h-[2px] w-full bg-[#d3e97a]",
                                  }),
                                ],
                              }),
                              h.jsxs("a", {
                                href: "#",
                                className: "group inline-flex flex-col gap-1",
                                children: [
                                  h.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-bold font-bold text-[#d3e97a] text-[16px] uppercase",
                                        children: "See on Github",
                                      }),
                                      h.jsx("svg", {
                                        width: "26",
                                        height: "26",
                                        viewBox: "0 0 26 26",
                                        fill: "none",
                                        children: h.jsx("path", {
                                          clipRule: "evenodd",
                                          d: nn.p17e6c000,
                                          fill: "#D3E97A",
                                          fillRule: "evenodd",
                                        }),
                                      }),
                                    ],
                                  }),
                                  h.jsx("div", {
                                    className: "h-[2px] w-full bg-[#d3e97a]",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        h.jsx("div", {
          className: "max-w-7xl mx-auto px-6",
          children: h.jsx("div", { className: "border-t border-[#484848]" }),
        }),
        h.jsx("section", {
          ref: s,
          id: "about",
          className: "py-20 px-6",
          children: h.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: h.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
              children: [
                h.jsx("div", {
                  children: h.jsx("h2", {
                    className:
                      "text-[76px] lg:text-[101px] text-white leading-[0.9] mb-8",
                    children: "About me",
                  }),
                }),
                h.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    h.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        h.jsx("p", {
                          className:
                            "font-['Manrope',sans-serif] font-medium text-[32px] text-white leading-[1.4]",
                          children:
                            "I work as a senior full-stack developer, with deep expertise in frontend engineering. ",
                        }),
                        h.jsx("p", {
                          className:
                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]",
                          children:
                            "I am a front-end developer based in India looking for exciting opportunities.  Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.",
                        }),
                      ],
                    }),
                    h.jsxs("button", {
                      onClick: () => p("/about"),
                      className:
                        "inline-flex flex-col gap-1 cursor-pointer border-0 bg-transparent p-0",
                      children: [
                        h.jsx("span", {
                          className:
                            "font-['Manrope',sans-serif] font-bold font-bold text-[#d3e97a] text-[16px] uppercase",
                          children: "More about me",
                        }),
                        h.jsx("div", {
                          className: "h-[2px] w-full bg-[#d3e97a]",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        h.jsx("div", {
          className: "max-w-7xl mx-auto px-6",
          children: h.jsx("div", { className: "border-t border-[#484848]" }),
        }),
        h.jsx("section", {
          ref: l,
          id: "contact",
          className: "py-20 px-6",
          children: h.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: h.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
              children: [
                h.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    h.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        h.jsx("h2", {
                          className: "text-[76px] text-white leading-none",
                          children: "Let's connect",
                        }),
                        h.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            h.jsxs("p", {
                              className:
                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px]",
                              children: [
                                "Say hello at",
                                " ",
                                h.jsx("a", {
                                  href: `mailto:${Ze.email}`,
                                  className:
                                    "text-white border-b border-[#d3e97a]",
                                  children: Ze.email,
                                }),
                              ],
                            }),
                            h.jsxs("p", {
                              className:
                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px]",
                              children: [
                                "For more info, here's my",
                                " ",
                                h.jsx("button", {
                                  onClick: () => p("/resume"),
                                  className:
                                    "text-white border-b border-[#d3e97a] hover:text-[#d3e97a] transition-colors cursor-pointer bg-transparent border-0 border-b-[1px] p-0 font-['Manrope',sans-serif] text-[18px]",
                                  children: "resume",
                                }),
                              ],
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "flex gap-4",
                          children: [
                            h.jsx("a", {
                              href: "#",
                              className: "hover:opacity-80 transition-opacity",
                              children: h.jsxs("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                  h.jsx("path", {
                                    d: nn.p1bc476b0,
                                    fill: "#D3E97A",
                                  }),
                                  h.jsx("path", {
                                    d: nn.p3ff62a40,
                                    fill: "#D3E97A",
                                  }),
                                ],
                              }),
                            }),
                            h.jsx("a", {
                              href: "#",
                              className: "hover:opacity-80 transition-opacity",
                              children: h.jsx("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: h.jsx("path", {
                                  clipRule: "evenodd",
                                  d: nn.p3add5780,
                                  fill: "#D3E97A",
                                  fillRule: "evenodd",
                                }),
                              }),
                            }),
                            h.jsx("a", {
                              href: "#",
                              className: "hover:opacity-80 transition-opacity",
                              children: h.jsx("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 28 23",
                                fill: "none",
                                children: h.jsx("path", {
                                  d: nn.p3f377200,
                                  fill: "#D3E97A",
                                }),
                              }),
                            }),
                            h.jsx("a", {
                              href: "#",
                              className: "hover:opacity-80 transition-opacity",
                              children: h.jsxs("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                  h.jsx("path", {
                                    d: nn.p8ca3400,
                                    fill: "#D3E97A",
                                  }),
                                  h.jsx("path", {
                                    d: nn.p5548000,
                                    fill: "#D3E97A",
                                  }),
                                  h.jsx("path", {
                                    d: nn.p374be072,
                                    fill: "#D3E97A",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsx("p", {
                      className:
                        "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px] pt-8",
                      children: "© 2023 Robert Garcia",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    h.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        h.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            h.jsx("label", {
                              className:
                                "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                              children: "Name",
                            }),
                            h.jsx("input", {
                              type: "text",
                              placeholder: "John Doe",
                              className:
                                "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            h.jsx("label", {
                              className:
                                "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                              children: "Email",
                            }),
                            h.jsx("input", {
                              type: "email",
                              className:
                                "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            h.jsx("label", {
                              className:
                                "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                              children: "Subject",
                            }),
                            h.jsx("input", {
                              type: "text",
                              className:
                                "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            h.jsx("label", {
                              className:
                                "font-['Manrope',sans-serif] font-medium text-[#c7c7c7] text-[16px]",
                              children: "Message",
                            }),
                            h.jsx("textarea", {
                              rows: 5,
                              className:
                                "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[18px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a] resize-none",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsx("button", {
                      className:
                        "bg-[#d3e97a] rounded-full px-10 py-4 font-['Manrope',sans-serif] font-bold font-bold text-[16px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors",
                      children: "Submit",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    })
  );
}
const l_ = "/assets/about-BJ7JKLhZ.png",
  vt = {
    p17e6c000:
      "M13.0282 2.16667C7.06008 2.16667 2.223 7.00375 2.223 12.9718C2.223 17.745 5.31808 21.7956 9.61242 23.2256C10.153 23.3231 10.348 22.9905 10.348 22.7045C10.348 22.4478 10.3393 21.7674 10.3361 20.8672C7.32983 21.5193 6.695 19.4177 6.695 19.4177C6.20533 18.1697 5.49575 17.8371 5.49575 17.8371C4.51533 17.1665 5.5705 17.1817 5.5705 17.1817C6.656 17.2575 7.22475 18.2953 7.22475 18.2953C8.18892 19.9463 9.75542 19.4697 10.3686 19.1934C10.4672 18.4947 10.7488 18.018 11.0565 17.7483C8.658 17.4763 6.136 16.549 6.136 12.4074C6.136 11.2298 6.55742 10.2635 7.24533 9.5095C7.13592 9.23542 6.76217 8.13583 7.35258 6.6495C7.35258 6.6495 8.25933 6.35808 10.3231 7.75558C11.2045 7.51581 12.1137 7.39342 13.0271 7.39158C13.9405 7.39307 14.8498 7.51546 15.7311 7.75558C17.7959 6.357 18.7016 6.6495 18.7016 6.6495C19.292 8.13583 18.9215 9.23542 18.8088 9.5095C19.5022 10.2635 19.9182 11.2288 19.9182 12.4074C19.9182 16.5598 17.394 17.472 14.9868 17.7396C15.3714 18.0733 15.7181 18.7319 15.7181 19.7394C15.7181 21.1846 15.7051 22.3503 15.7051 22.7045C15.7051 22.9938 15.8979 23.3296 16.4493 23.2234C20.7415 21.7913 23.8333 17.7439 23.8333 12.9718C23.8333 7.00375 18.9963 2.16667 13.0282 2.16667Z",
    p23c4ec40:
      "M16.9931 25.8116L23.869 18.9357L23.869 23.926L25.2022 23.926L25.2022 16.6598L17.936 16.6598L17.936 17.9929L22.9262 17.9929L16.0503 24.8688L16.9931 25.8116Z",
    p282a2240:
      "M5.39825 7.79675C6.70735 7.79675 7.76858 6.73552 7.76858 5.42642C7.76858 4.11732 6.70735 3.05608 5.39825 3.05608C4.08915 3.05608 3.02792 4.11732 3.02792 5.42642C3.02792 6.73552 4.08915 7.79675 5.39825 7.79675Z",
    p31d7ad00:
      "M10.0068 9.59292V22.7435H14.0898V16.2403C14.0898 14.5243 14.4127 12.8624 16.5403 12.8624C18.6388 12.8624 18.6648 14.8243 18.6648 16.3486V22.7446H22.75V15.5328C22.75 11.9903 21.9873 9.26792 17.8468 9.26792C15.8589 9.26792 14.5264 10.3588 13.9815 11.3913H13.9263V9.59292H10.0068ZM3.35292 9.59292H7.4425V22.7435H3.35292V9.59292Z",
    p3589c00:
      "M5.98971 19.2175L16.3036 8.90361V16.389L18.3033 16.389L18.3033 5.4897L7.40392 5.4897L7.40393 7.4894L14.8894 7.4894L4.5755 17.8033L5.98971 19.2175Z",
    p374be072:
      "M27.3773 8.148C27.0687 7.35091 26.597 6.62704 25.9924 6.02275C25.3879 5.41845 24.6639 4.94703 23.8667 4.63867C22.9338 4.28848 21.9482 4.09912 20.952 4.07867C19.668 4.02267 19.2613 4.00667 16.0053 4.00667C12.7493 4.00667 12.332 4.00667 11.0587 4.07867C10.0632 4.09808 9.07834 4.28747 8.14667 4.63867C7.34925 4.94667 6.62502 5.41796 6.02045 6.0223C5.41587 6.62665 4.9443 7.3507 4.636 8.148C4.28574 9.08082 4.09682 10.0664 4.07733 11.0627C4.02 12.3453 4.00267 12.752 4.00267 16.0093C4.00267 19.2653 4.00267 19.68 4.07733 20.956C4.09733 21.9533 4.28533 22.9373 4.636 23.872C4.94517 24.669 5.41719 25.3928 6.02191 25.997C6.62663 26.6013 7.35075 27.0728 8.148 27.3813C9.07791 27.7456 10.0632 27.9485 11.0613 27.9813C12.3453 28.0373 12.752 28.0547 16.008 28.0547C19.264 28.0547 19.6813 28.0547 20.9547 27.9813C21.9508 27.9611 22.9363 27.7722 23.8693 27.4227C24.6663 27.1136 25.3902 26.6418 25.9946 26.0373C26.5991 25.4328 27.0709 24.709 27.38 23.912C27.7307 22.9787 27.9187 21.9947 27.9387 20.9973C27.996 19.7147 28.0133 19.308 28.0133 16.0507C28.0133 12.7933 28.0133 12.38 27.9387 11.104C27.9231 10.0937 27.7332 9.09366 27.3773 8.148ZM25.7533 20.8573C25.7447 21.6257 25.6045 22.387 25.3387 23.108C25.1384 23.6265 24.8319 24.0973 24.4388 24.4902C24.0456 24.8831 23.5746 25.1894 23.056 25.3893C22.343 25.6539 21.5898 25.7942 20.8293 25.804C19.5627 25.8627 19.2053 25.8773 15.9573 25.8773C12.7067 25.8773 12.3747 25.8773 11.084 25.804C10.3239 25.7947 9.5711 25.6544 8.85867 25.3893C8.33825 25.1906 7.86534 24.8849 7.47052 24.4919C7.0757 24.099 6.76778 23.6275 6.56667 23.108C6.30459 22.3947 6.16442 21.6425 6.152 20.8827C6.09467 19.616 6.08133 19.2587 6.08133 16.0107C6.08133 12.7613 6.08133 12.4293 6.152 11.1373C6.16062 10.3694 6.30087 9.60856 6.56667 8.888C6.97333 7.836 7.80667 7.008 8.85867 6.60533C9.57145 6.34152 10.324 6.20128 11.084 6.19067C12.352 6.13333 12.708 6.11733 15.9573 6.11733C19.2067 6.11733 19.54 6.11733 20.8293 6.19067C21.5899 6.19982 22.3431 6.34009 23.056 6.60533C23.5746 6.8057 24.0455 7.11227 24.4386 7.50537C24.8317 7.89848 25.1383 8.36943 25.3387 8.888C25.6007 9.60127 25.7409 10.3535 25.7533 11.1133C25.8107 12.3813 25.8253 12.7373 25.8253 15.9867C25.8253 19.2347 25.8253 19.584 25.768 20.8587H25.7533V20.8573Z",
    p5548000:
      "M22.408 11.0467C23.2018 11.0467 23.8453 10.4032 23.8453 9.60933C23.8453 8.81552 23.2018 8.172 22.408 8.172C21.6142 8.172 20.9707 8.81552 20.9707 9.60933C20.9707 10.4032 21.6142 11.0467 22.408 11.0467Z",
    p8ca3400:
      "M15.9987 9.836C14.3635 9.836 12.7953 10.4856 11.6391 11.6418C10.4829 12.798 9.83333 14.3662 9.83333 16.0013C9.83333 17.6365 10.4829 19.2047 11.6391 20.3609C12.7953 21.5171 14.3635 22.1667 15.9987 22.1667C17.6338 22.1667 19.202 21.5171 20.3582 20.3609C21.5144 19.2047 22.164 17.6365 22.164 16.0013C22.164 14.3662 21.5144 12.798 20.3582 11.6418C19.202 10.4856 17.6338 9.836 15.9987 9.836ZM15.9987 20.0053C14.9364 20.0053 13.9176 19.5833 13.1665 18.8322C12.4153 18.0811 11.9933 17.0623 11.9933 16C11.9933 14.9377 12.4153 13.9189 13.1665 13.1678C13.9176 12.4167 14.9364 11.9947 15.9987 11.9947C17.0609 11.9947 18.0797 12.4167 18.8309 13.1678C19.582 13.9189 20.004 14.9377 20.004 16C20.004 17.0623 19.582 18.0811 18.8309 18.8322C18.0797 19.5833 17.0609 20.0053 15.9987 20.0053Z",
  },
  Cm = nt.forwardRef(({ navigate: p }, n) =>
    h.jsx("section", {
      className: "py-20 px-6",
      ref: n,
      children: h.jsx("div", {
        className: "max-w-7xl mx-auto",
        children: h.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
          children: [
            h.jsxs("div", {
              className: "space-y-8",
              children: [
                h.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    h.jsx("h2", {
                      className:
                        "text-[64px] lg:text-[76px] text-white leading-[0.9]",
                      children: "LET'S CONNECT",
                    }),
                    h.jsx("div", {
                      className: "space-y-2",
                      children: h.jsxs("p", {
                        className:
                          "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                        children: [
                          "Say hello at",
                          " ",
                          h.jsx("a", {
                            href: `mailto:${Ze.email}`,
                            className: "text-[#d3e97a] hover:underline",
                            children: Ze.email,
                          }),
                        ],
                      }),
                    }),
                    h.jsx("button", {
                      onClick: () => p && p("/resume"),
                      className:
                        "bg-[#d3e97a] rounded-full px-8 py-3 font-['Manrope',sans-serif] font-bold text-[14px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors inline-block",
                      children: "My Resume",
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    h.jsx("a", {
                      href: Ii.linkedin,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:opacity-80 transition-opacity",
                      children: h.jsxs("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 26 26",
                        fill: "none",
                        children: [
                          h.jsx("path", { d: vt.p282a2240, fill: "#D3E97A" }),
                          h.jsx("path", { d: vt.p31d7ad00, fill: "#D3E97A" }),
                        ],
                      }),
                    }),
                    h.jsx("a", {
                      href: Ii.github,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:opacity-80 transition-opacity",
                      children: h.jsx("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 26 26",
                        fill: "none",
                        children: h.jsx("path", {
                          clipRule: "evenodd",
                          d: vt.p17e6c000,
                          fill: "#D3E97A",
                          fillRule: "evenodd",
                        }),
                      }),
                    }),
                    h.jsx("a", {
                      href: Ii.instagram,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:opacity-80 transition-opacity",
                      children: h.jsxs("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        children: [
                          h.jsx("path", { d: vt.p8ca3400, fill: "#D3E97A" }),
                          h.jsx("path", { d: vt.p5548000, fill: "#D3E97A" }),
                          h.jsx("path", { d: vt.p374be072, fill: "#D3E97A" }),
                        ],
                      }),
                    }),
                  ],
                }),
                h.jsx("p", {
                  className:
                    "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px] pt-8",
                  children: Ze.copyright,
                }),
              ],
            }),
            h.jsxs("div", {
              className: "space-y-6",
              children: [
                h.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    h.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        h.jsx("label", {
                          className:
                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                          children: "Name",
                        }),
                        h.jsx("input", {
                          type: "text",
                          className:
                            "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]",
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        h.jsx("label", {
                          className:
                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                          children: "Email",
                        }),
                        h.jsx("input", {
                          type: "email",
                          className:
                            "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]",
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        h.jsx("label", {
                          className:
                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                          children: "Subject",
                        }),
                        h.jsx("input", {
                          type: "text",
                          className:
                            "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]",
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        h.jsx("label", {
                          className:
                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                          children: "Message",
                        }),
                        h.jsx("textarea", {
                          rows: 4,
                          className:
                            "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a] resize-none",
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsx("button", {
                  className:
                    "bg-[#d3e97a] rounded-full px-10 py-3 font-['Manrope',sans-serif] font-bold text-[14px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors",
                  children: "Submit",
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
Cm.displayName = "ConnectSection";
kn.registerPlugin(Te);
function o_({ navigate: p }) {
  const n = {
      "Frontend Development": Ut.frontend,
      "State Management": Ut.stateManagement,
      "Testing & QA": Ut.testing,
      "Performance Optimization": Ut.performance,
      "API Integration": Ut.api,
      "Version Control & Collaboration": Ut.tools,
    },
    i = nu,
    s = nt.useRef(null),
    l = nt.useRef(null),
    a = nt.useRef(null),
    f = nt.useRef(null);
  return (
    nt.useEffect(() => {
      const c = s.current;
      c &&
        kn.from(c, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: c,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none none",
          },
        });
      const m = l.current;
      m &&
        kn.from(m, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: m,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none none",
          },
        });
      const g = a.current;
      g &&
        kn.from(g, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: g,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none none",
          },
        });
      const v = f.current;
      v &&
        kn.from(v, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: v,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none none",
          },
        });
    }, []),
    h.jsxs("div", {
      className: "bg-neutral-950 min-h-screen",
      children: [
        h.jsx(xu, { navigate: p, currentPage: "about" }),
        h.jsx("section", {
          className: "pt-32 pb-20 px-6",
          ref: s,
          children: h.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: h.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
              children: [
                h.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    h.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        h.jsx("h1", {
                          className:
                            "text-[80px] lg:text-[90px] leading-[0.9] text-white",
                          children: "ABOUT ME",
                        }),
                        h.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            h.jsx("p", {
                              className:
                                "font-['Manrope',sans-serif] text-[24px] text-white leading-[1.4]",
                              children: c1.intro,
                            }),
                            h.jsx("p", {
                              className:
                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]",
                              children: c1.background,
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("div", {
                      className: "flex gap-4 items-center",
                      children: [
                        h.jsxs("button", {
                          onClick: () => p("/resume"),
                          className:
                            "bg-[#d3e97a] rounded-full flex items-center gap-2 px-6 py-3 hover:bg-[#c5db6c] transition-colors",
                          children: [
                            h.jsx("span", {
                              className:
                                "font-['Manrope',sans-serif] font-bold text-[14px] text-neutral-950 uppercase",
                              children: "My Resume",
                            }),
                            h.jsx("svg", {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 16 16",
                              fill: "none",
                              children: h.jsx("path", {
                                d: vt.p23c4ec40,
                                fill: "#0A0A0A",
                              }),
                            }),
                          ],
                        }),
                        h.jsx("a", {
                          href: Ii.linkedin,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "hover:opacity-80 transition-opacity",
                          children: h.jsxs("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 26 26",
                            fill: "none",
                            children: [
                              h.jsx("path", {
                                d: vt.p282a2240,
                                fill: "#D3E97A",
                              }),
                              h.jsx("path", {
                                d: vt.p31d7ad00,
                                fill: "#D3E97A",
                              }),
                            ],
                          }),
                        }),
                        h.jsx("a", {
                          href: Ii.github,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "hover:opacity-80 transition-opacity",
                          children: h.jsx("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 26 26",
                            fill: "none",
                            children: h.jsx("path", {
                              clipRule: "evenodd",
                              d: vt.p17e6c000,
                              fill: "#D3E97A",
                              fillRule: "evenodd",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsx("div", {
                  className: "lg:block",
                  children: h.jsx("div", {
                    className: "bg-[#c7c7c7] rounded-[12px] overflow-hidden",
                    children: h.jsx(ru, {
                      src: l_,
                      alt: Ze.name,
                      className: "w-full h-auto object-cover",
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
        h.jsx("section", {
          className: "py-20 px-6",
          ref: l,
          children: h.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: h.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
              children: [
                h.jsx("div", {
                  children: h.jsx("h2", {
                    className:
                      "text-[64px] lg:text-[76px] text-white leading-[0.9]",
                    children: "MY CAPABILITIES",
                  }),
                }),
                h.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    h.jsx("p", {
                      className:
                        "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]",
                      children:
                        "I am always looking to add more skills.Morbi egestas neque eu blandit fermentum quisque egestas diam in. Nulla pharetra diam sit amet nisl suscipit. Eget nullam non nisi est sit amet facilisis magna etiam.",
                    }),
                    h.jsx("div", {
                      className: "space-y-6",
                      children: Object.entries(n).map(([c, m]) =>
                        h.jsxs(
                          "div",
                          {
                            className: "space-y-3",
                            children: [
                              h.jsx("h3", {
                                className:
                                  "font-['Manrope',sans-serif] font-semibold text-[#d3e97a] text-[14px] uppercase",
                                children: c,
                              }),
                              h.jsx("div", {
                                className: "flex flex-wrap gap-3",
                                children: m.map((g) => {
                                  const v = g.icon;
                                  return h.jsxs(
                                    "div",
                                    {
                                      className:
                                        "border border-[#484848] px-4 py-2.5 rounded-[4px] inline-flex items-center gap-2 hover:border-[#d3e97a] transition-colors",
                                      children: [
                                        h.jsx(v, {
                                          className: "size-4 text-[#d3e97a]",
                                        }),
                                        h.jsx("span", {
                                          className:
                                            "font-['Manrope',sans-serif] text-white text-[13px]",
                                          children: g.name,
                                        }),
                                      ],
                                    },
                                    g.name
                                  );
                                }),
                              }),
                            ],
                          },
                          c
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        h.jsx("section", {
          className: "py-20 px-6",
          ref: a,
          children: h.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: h.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
              children: [
                h.jsx("div", {
                  children: h.jsx("h2", {
                    className:
                      "text-[64px] lg:text-[76px] text-white leading-[0.9]",
                    children: "MY EXPERIENCE",
                  }),
                }),
                h.jsx("div", {
                  className: "space-y-12",
                  children: i.map((c, m) =>
                    h.jsxs(
                      "div",
                      {
                        className: "space-y-4",
                        children: [
                          h.jsxs("div", {
                            className:
                              "flex justify-between items-start flex-wrap gap-2",
                            children: [
                              h.jsxs("div", {
                                children: [
                                  h.jsx("h3", {
                                    className:
                                      "font-['Manrope',sans-serif] text-white text-[20px]",
                                    children: c.title,
                                  }),
                                  c.company &&
                                    h.jsx("p", {
                                      className:
                                        "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                      children: c.company,
                                    }),
                                ],
                              }),
                              h.jsx("span", {
                                className:
                                  "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                                children: c.period,
                              }),
                            ],
                          }),
                          h.jsx("ul", {
                            className:
                              "space-y-2 font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]",
                            children: c.responsibilities.map((g, v) =>
                              h.jsxs(
                                "li",
                                {
                                  className: "flex items-start gap-2",
                                  children: [
                                    h.jsx("span", {
                                      className: "text-[#d3e97a] mt-1",
                                      children: "•",
                                    }),
                                    h.jsx("span", { children: g }),
                                  ],
                                },
                                v
                              )
                            ),
                          }),
                        ],
                      },
                      m
                    )
                  ),
                }),
              ],
            }),
          }),
        }),
        h.jsx(Cm, { ref: f, navigate: p }),
      ],
    })
  );
}
console.log("notableProjects: ", gu);
kn.registerPlugin(Te);
function a_({ navigate: p }) {
  const n = nt.useRef(null);
  return (
    nt.useEffect(() => {
      const i = n.current;
      i &&
        kn.from(i.children, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: i,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart none none none",
          },
        });
    }, []),
    h.jsxs("div", {
      className: "bg-neutral-950 min-h-screen",
      children: [
        h.jsx(xu, { navigate: p, currentPage: "projects" }),
        h.jsx("section", {
          className: "pt-32 pb-20 px-6",
          children: h.jsx("div", {
            className: "max-w-7xl mx-auto",
            children: h.jsxs("div", {
              className: "space-y-4 mb-16",
              children: [
                h.jsx("h1", {
                  className:
                    "text-[80px] lg:text-[90px] text-white leading-[0.9]",
                  children: "ALL PROJECTS",
                }),
                h.jsx("p", {
                  className:
                    "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]",
                  children:
                    "Here's a collection of projects that showcase my passion for front-end development and problem-solving.",
                }),
              ],
            }),
          }),
        }),
        h.jsx("section", {
          className: "pb-12 px-6",
          children: h.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              h.jsx("div", {
                className: "mb-12",
                children: h.jsx("h2", {
                  className: "text-[56px] text-white leading-[0.9]",
                  children: "NOTABLE PROJECTS",
                }),
              }),
              h.jsx("div", {
                className: "space-y-20",
                ref: n,
                children: gu.map((i, s) =>
                  h.jsxs(
                    "div",
                    {
                      className: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                        s % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`,
                      children: [
                        h.jsx("div", {
                          className: `${s % 2 === 1 ? "lg:order-2" : ""}`,
                          children: h.jsxs("div", {
                            className:
                              "bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden",
                            children: [
                              h.jsx(ru, {
                                src: i.src,
                                alt: i.title,
                                className:
                                  "absolute inset-0 w-full h-full object-contain p-12",
                              }),
                              h.jsx("div", {
                                className:
                                  "absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full",
                                children: h.jsx("span", {
                                  className:
                                    "font-['Manrope',sans-serif] text-white text-[14px]",
                                  children: "Professional",
                                }),
                              }),
                            ],
                          }),
                        }),
                        h.jsxs("div", {
                          className: `space-y-8 ${
                            s % 2 === 1 ? "lg:order-1" : ""
                          }`,
                          children: [
                            h.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                h.jsx("h3", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]",
                                  children: i.title,
                                }),
                                h.jsx("div", {
                                  className: "space-y-2",
                                  children: i.achievements
                                    .slice(0, 3)
                                    .map((l, a) =>
                                      h.jsxs(
                                        "p",
                                        {
                                          className:
                                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.5]",
                                          children: ["• ", l],
                                        },
                                        a
                                      )
                                    ),
                                }),
                              ],
                            }),
                            h.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                h.jsx("p", {
                                  className:
                                    "font-['Manrope',sans-serif] font-semibold text-white text-[16px] uppercase",
                                  children: "Project Info",
                                }),
                                h.jsxs("div", {
                                  className:
                                    "border-t border-b border-[#484848] divide-y divide-[#484848]",
                                  children: [
                                    h.jsxs("div", {
                                      className: "flex justify-between py-4",
                                      children: [
                                        h.jsx("span", {
                                          className:
                                            "font-['Manrope',sans-serif] text-white text-[16px]",
                                          children: "Role",
                                        }),
                                        h.jsx("span", {
                                          className:
                                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                          children: i.role,
                                        }),
                                      ],
                                    }),
                                    h.jsxs("div", {
                                      className: "flex justify-between py-4",
                                      children: [
                                        h.jsx("span", {
                                          className:
                                            "font-['Manrope',sans-serif] text-white text-[16px]",
                                          children: "Tech Stack",
                                        }),
                                        h.jsx("span", {
                                          className:
                                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                          children: i.techStack
                                            .slice(0, 3)
                                            .join(", "),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h.jsxs("div", {
                              className: "flex gap-6 flex-wrap",
                              children: [
                                i.title === "Screener - Zamzam Capital" &&
                                  h.jsxs("a", {
                                    href: "https://screener.zamzam-capital.com/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "group inline-flex flex-col gap-1",
                                    children: [
                                      h.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          h.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase",
                                            children: "Live Demo",
                                          }),
                                          h.jsx("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: h.jsx("path", {
                                              d: vt.p3589c00,
                                              fill: "#D3E97A",
                                            }),
                                          }),
                                        ],
                                      }),
                                      h.jsx("div", {
                                        className:
                                          "h-[2px] w-full bg-[#d3e97a]",
                                      }),
                                    ],
                                  }),
                                i.title === "TOI Epaper (Times of India)" &&
                                  h.jsxs("a", {
                                    href: "https://epaper.indiatimes.com/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "group inline-flex flex-col gap-1",
                                    children: [
                                      h.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          h.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase",
                                            children: "Live Demo",
                                          }),
                                          h.jsx("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: h.jsx("path", {
                                              d: vt.p3589c00,
                                              fill: "#D3E97A",
                                            }),
                                          }),
                                        ],
                                      }),
                                      h.jsx("div", {
                                        className:
                                          "h-[2px] w-full bg-[#d3e97a]",
                                      }),
                                    ],
                                  }),
                                i.title === "Libsi Markah E-commerce" &&
                                  h.jsxs("a", {
                                    href: "https://libsimarkah.com/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "group inline-flex flex-col gap-1",
                                    children: [
                                      h.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          h.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase",
                                            children: "Live Demo",
                                          }),
                                          h.jsx("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: h.jsx("path", {
                                              d: vt.p3589c00,
                                              fill: "#D3E97A",
                                            }),
                                          }),
                                        ],
                                      }),
                                      h.jsx("div", {
                                        className:
                                          "h-[2px] w-full bg-[#d3e97a]",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    i.id
                  )
                ),
              }),
            ],
          }),
        }),
        h.jsx("section", {
          className: "pb-20 px-6",
          children: h.jsxs("div", {
            className: "max-w-7xl mx-auto",
            children: [
              h.jsx("div", {
                className: "mb-12",
                children: h.jsx("h2", {
                  className: "text-[56px] text-white leading-[0.9]",
                  children: "PERSONAL PROJECTS",
                }),
              }),
              h.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: qf.map((i) =>
                  h.jsxs(
                    "div",
                    {
                      className:
                        "bg-[#1a1a1a] rounded-[12px] overflow-hidden group hover:bg-[#222222] transition-colors",
                      children: [
                        h.jsx("div", {
                          className:
                            "aspect-video relative overflow-hidden bg-[#0a0a0a]",
                          children: h.jsx(ru, {
                            src: i.src,
                            alt: i.title,
                            className:
                              "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                          }),
                        }),
                        h.jsxs("div", {
                          className: "p-6 space-y-4",
                          children: [
                            h.jsx("h3", {
                              className:
                                "font-['Manrope',sans-serif] text-[24px] text-white leading-[1.4]",
                              children: i.title,
                            }),
                            i.url !== "#" &&
                              h.jsxs("a", {
                                href: i.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group inline-flex flex-col gap-1",
                                children: [
                                  h.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      h.jsx("span", {
                                        className:
                                          "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase",
                                        children: "View Project",
                                      }),
                                      h.jsx("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: h.jsx("path", {
                                          d: vt.p3589c00,
                                          fill: "#D3E97A",
                                        }),
                                      }),
                                    ],
                                  }),
                                  h.jsx("div", {
                                    className: "h-[2px] w-full bg-[#d3e97a]",
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    },
                    i.id
                  )
                ),
              }),
            ],
          }),
        }),
        h.jsx("section", {
          className: "py-20 px-6 border-t border-[#484848]",
          children: h.jsx("div", {
            className: "max-w-7xl mx-auto text-center",
            children: h.jsxs("div", {
              className: "space-y-8",
              children: [
                h.jsx("h2", {
                  className:
                    "text-[64px] lg:text-[76px] text-white leading-[0.9]",
                  children: "INTERESTED IN WORKING TOGETHER?",
                }),
                h.jsxs("button", {
                  onClick: () => p("/"),
                  className:
                    "inline-flex bg-[#d3e97a] rounded-full items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors cursor-pointer",
                  children: [
                    h.jsx("span", {
                      className:
                        "font-['Manrope',sans-serif] font-bold text-[16px] text-neutral-950 uppercase",
                      children: "Get in Touch",
                    }),
                    h.jsx("div", {
                      className:
                        "size-[42px] bg-neutral-950 rounded-full flex items-center justify-center",
                      children: h.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: h.jsx("path", {
                          d: vt.p23c4ec40,
                          fill: "white",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        h.jsx("footer", {
          className: "py-8 px-6 border-t border-[#484848]",
          children: h.jsxs("div", {
            className:
              "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",
            children: [
              h.jsx("p", {
                className:
                  "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                children: Ze.copyright,
              }),
              h.jsxs("div", {
                className: "flex gap-4",
                children: [
                  h.jsx("a", {
                    href: Ii.linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition-opacity",
                    children: h.jsxs("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 26 26",
                      fill: "none",
                      children: [
                        h.jsx("path", { d: vt.p282a2240, fill: "#D3E97A" }),
                        h.jsx("path", { d: vt.p31d7ad00, fill: "#D3E97A" }),
                      ],
                    }),
                  }),
                  h.jsx("a", {
                    href: Ii.github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition-opacity",
                    children: h.jsx("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 26 26",
                      fill: "none",
                      children: h.jsx("path", {
                        clipRule: "evenodd",
                        d: vt.p17e6c000,
                        fill: "#D3E97A",
                        fillRule: "evenodd",
                      }),
                    }),
                  }),
                  h.jsx("a", {
                    href: Ii.instagram,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition-opacity",
                    children: h.jsxs("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      children: [
                        h.jsx("path", { d: vt.p8ca3400, fill: "#D3E97A" }),
                        h.jsx("path", { d: vt.p5548000, fill: "#D3E97A" }),
                        h.jsx("path", { d: vt.p374be072, fill: "#D3E97A" }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const u_ = () => {
    const p = new Date(Ze.careerStartDate),
      n = new Date();
    let i = n.getFullYear() - p.getFullYear(),
      s = n.getMonth() - p.getMonth();
    return s < 0 && (i--, (s += 12)), { years: i, months: s };
  },
  { years: X1, months: G1 } = u_(),
  c_ = G1 > 0 ? `${X1} years and ${G1} months` : `${X1} years`,
  f_ = [
    { title: "Frontend Development", items: Ut.frontend },
    { title: "State Management", items: Ut.stateManagement },
    { title: "Testing & QA", items: Ut.testing },
    { title: "Performance Optimization", items: Ut.performance },
    { title: "API Integration", items: Ut.api },
    { title: "Version Control & Collaboration", items: Ut.tools },
  ],
  d_ = () => {
    const p = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${Ze.name} - Resume</title>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Manrope', sans-serif; 
      background: #0a0a0a;
      color: #c7c7c7;
      padding: 40px 20px;
    }
    .resume-container {
      max-width: 1000px;
      margin: 0 auto;
      background: #1a1a1a;
      border-radius: 20px;
      padding: 60px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .header { 
      display: flex; 
      justify-content: space-between; 
      align-items: start;
      padding-bottom: 24px;
      border-bottom: 2px solid #d3e97a;
      margin-bottom: 32px;
    }
    .name { 
      font-family: 'Bebas Neue', sans-serif;
      font-size: 48px; 
      color: #ffffff;
      line-height: 0.9;
      letter-spacing: 2px;
    }
    .title { 
      font-size: 18px; 
      color: #d3e97a;
      font-weight: 500;
      margin-top: 8px;
    }
    .contact-info { 
      text-align: right;
      font-size: 12px;
      line-height: 1.8;
    }
    .contact-info a {
      color: #c7c7c7;
      text-decoration: none;
    }
    .contact-info a:hover {
      color: #d3e97a;
    }
    .section { 
      margin-bottom: 28px;
    }
    .section-title { 
      font-size: 16px; 
      font-weight: 700;
      color: #d3e97a;
      text-transform: uppercase;
      border-bottom: 1px solid rgba(211, 233, 122, 0.3);
      padding-bottom: 8px;
      margin-bottom: 16px;
    }
    .section-content {
      font-size: 13px;
      line-height: 1.6;
    }
    .skill-category {
      margin-bottom: 12px;
    }
    .skill-category-title {
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 8px;
    }
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 12px;
    }
    .skill-tag {
      background: #d3e97a;
      color: #2a4a4a;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 500;
    }
    .experience-item {
      background: rgba(26, 26, 26, 0.5);
      padding: 20px;
      border-radius: 12px;
      margin-bottom: 20px;
      position: relative;
      padding-left: 40px;
    }
    .experience-item::before {
      content: '';
      position: absolute;
      left: 14px;
      top: 20px;
      width: 12px;
      height: 12px;
      background: #d3e97a;
      border-radius: 50%;
      border: 3px solid #1a1a1a;
    }
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin-bottom: 12px;
    }
    .job-title {
      font-size: 15px;
      font-weight: 600;
      color: #ffffff;
    }
    .company-info {
      font-size: 12px;
      color: #c7c7c7;
      margin-top: 4px;
    }
    .period {
      font-size: 11px;
      color: #d3e97a;
      background: rgba(211, 233, 122, 0.1);
      padding: 4px 10px;
      border-radius: 6px;
      white-space: nowrap;
    }
    .responsibilities {
      list-style: none;
      font-size: 12px;
      line-height: 1.6;
    }
    .responsibilities li {
      padding-left: 16px;
      margin-bottom: 6px;
      position: relative;
    }
    .responsibilities li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #d3e97a;
    }
    .project-item {
      background: rgba(26, 26, 26, 0.5);
      padding: 16px;
      border-radius: 12px;
      margin-bottom: 16px;
    }
    .project-title {
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .project-role {
      font-size: 11px;
      color: #d3e97a;
      margin-bottom: 12px;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 12px;
    }
    .tech-tag {
      background: #d3e97a;
      color: #2a4a4a;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 500;
    }
    .education-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .education-item {
      font-size: 12px;
    }
    .institution {
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .degree {
      color: #c7c7c7;
      margin-bottom: 4px;
    }
    .edu-period {
      font-size: 11px;
      color: #d3e97a;
    }
    .achievement-item {
      display: flex;
      gap: 12px;
      background: rgba(26, 26, 26, 0.5);
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 8px;
    }
    .achievement-bullet {
      width: 8px;
      height: 8px;
      background: #d3e97a;
      border-radius: 50%;
      margin-top: 6px;
      flex-shrink: 0;
    }
    .achievement-text {
      font-size: 12px;
      line-height: 1.6;
    }
    .references-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .reference-item {
      background: rgba(26, 26, 26, 0.5);
      padding: 16px;
      border-radius: 12px;
    }
    .reference-name {
      font-size: 13px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .reference-position {
      font-size: 11px;
      color: #d3e97a;
      margin-bottom: 12px;
    }
    .reference-contact {
      font-size: 10px;
      line-height: 1.8;
    }
    .personal-projects {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .project-link {
      font-size: 12px;
      color: #ffffff;
      background: rgba(26, 26, 26, 0.5);
      padding: 8px 16px;
      border-radius: 8px;
      border: 1px solid rgba(211, 233, 122, 0.2);
      text-decoration: none;
    }
    .project-link:hover {
      background: rgba(211, 233, 122, 0.1);
      border-color: #d3e97a;
    }
    
    @media print {
      body { background: #ffffff; padding: 0; }
      .resume-container { 
        background: #ffffff; 
        box-shadow: none;
        padding: 40px;
      }
      * { color: #000000 !important; }
      .name, .job-title, .skill-category-title, .institution, .reference-name { color: #000000 !important; }
      .title, .section-title, .period, .project-role, .edu-period, .reference-position { color: #2a4a4a !important; }
      .skill-tag, .tech-tag { background: #d3e97a !important; color: #000000 !important; }
      .header { border-bottom-color: #d3e97a !important; }
      .section-title { border-bottom-color: #d3e97a !important; }
      .experience-item::before { background: #d3e97a !important; border-color: #ffffff !important; }
      .achievement-bullet { background: #d3e97a !important; }
    }
    
    @media (max-width: 768px) {
      body { padding: 20px 10px; }
      .resume-container { padding: 30px 20px; }
      .header { flex-direction: column; gap: 16px; }
      .contact-info { text-align: left; }
      .education-grid, .references-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="resume-container">
    <div class="header">
      <div>
        <div class="name">${Ze.name.toUpperCase()}</div>
        <div class="title">${Ze.title}</div>
      </div>
      <div class="contact-info">
        <div><a href="mailto:${Ze.email}">${Ze.email}</a></div>
        <div>${Ze.phone}</div>
        <div>${Ze.location}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Profile</div>
      <div class="section-content">
        Front End Engineer with ${c_} of experience building high-performance web and mobile applications. Proficient in React, JavaScript (ES6+), HTML, and CSS, with a strong focus on optimizing user experience and front-end performance. Adept at developing scalable, responsive interfaces using modern frameworks like Next.js, Redux Toolkit, and React Native. Proven track record of improving application speed, accessibility, and maintainability. Collaborative team player experienced in Agile environments, consistently delivering user-centric solutions that drive business impact in fast-paced product teams.
      </div>
    </div>

    <div class="section">
      <div class="section-title">Skills</div>
      ${f_
        .map(
          (l) => `
        <div class="skill-category">
          <div class="skill-category-title">${l.title}</div>
          <div class="skills-list">
            ${l.items
              .map((a) => `<span class="skill-tag">${a.name}</span>`)
              .join("")}
          </div>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="section">
      <div class="section-title">Education</div>
      <div class="education-grid">
        ${q1
          .map(
            (l) => `
          <div class="education-item">
            <div class="institution">${l.institution}</div>
            <div class="degree">${l.degree}</div>
            <div class="edu-period">${l.period}</div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Notable Projects</div>
      ${gu
        .map(
          (l) => `
        <div class="project-item">
          <div class="project-title">${l.title}</div>
          <div class="project-role">${l.role}</div>
          <div class="tech-stack">
            ${l.techStack
              .map((a) => `<span class="tech-tag">${a}</span>`)
              .join("")}
          </div>
          <ul class="responsibilities">
            ${l.achievements.map((a) => `<li>${a}</li>`).join("")}
          </ul>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="section">
      <div class="section-title">Personal Projects</div>
      <div class="personal-projects">
        ${qf
          .map(
            (l) => `
          <a href="${l.url}" class="project-link" target="_blank" rel="noopener noreferrer">${l.title}</a>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Work Experience</div>
      ${nu
        .map(
          (l) => `
        <div class="experience-item">
          <div class="experience-header">
            <div>
              <div class="job-title">${l.title}</div>
              <div class="company-info">${l.company} | ${l.location}</div>
            </div>
            <div class="period">${l.period}</div>
          </div>
          <ul class="responsibilities">
            ${l.responsibilities.map((a) => `<li>${a}</li>`).join("")}
          </ul>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="section">
      <div class="section-title">Achievements</div>
      ${K1.map(
        (l) => `
        <div class="achievement-item">
          <div class="achievement-bullet"></div>
          <div class="achievement-text">${l}</div>
        </div>
      `
      ).join("")}
    </div>

    <div class="section">
      <div class="section-title">References</div>
      <div class="references-grid">
        ${J1.map(
          (l) => `
          <div class="reference-item">
            <div class="reference-name">${l.name}</div>
            <div class="reference-position">${l.company} / ${l.position}</div>
            <div class="reference-contact">
              <div>${l.phone}</div>
              <div>${l.email}</div>
            </div>
          </div>
        `
        ).join("")}
      </div>
    </div>
  </div>
</body>
</html>`,
      n = new Blob([p], { type: "text/html" }),
      i = URL.createObjectURL(n),
      s = document.createElement("a");
    (s.href = i),
      (s.download = `${Ze.name.replace(/\s+/g, "_")}_Resume.html`),
      document.body.appendChild(s),
      s.click(),
      document.body.removeChild(s),
      URL.revokeObjectURL(i);
  };
kn.registerPlugin(Te);
function p_({ navigate: p }) {
  const n = nt.useRef(null);
  nt.useEffect(() => {
    const c = n.current;
    c &&
      kn.from(c, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: c,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart none none none",
        },
      });
  }, []);
  const i = () => {
      const c = new Date(Ze.careerStartDate),
        m = new Date();
      let g = m.getFullYear() - c.getFullYear(),
        v = m.getMonth() - c.getMonth();
      return v < 0 && (g--, (v += 12)), { years: g, months: v };
    },
    { years: s, months: l } = i(),
    a = l > 0 ? `${s} years and ${l} months` : `${s} years`,
    f = [
      { title: "Frontend Development", items: Ut.frontend },
      { title: "State Management", items: Ut.stateManagement },
      { title: "Testing & QA", items: Ut.testing },
      { title: "Performance Optimization", items: Ut.performance },
      { title: "API Integration", items: Ut.api },
      { title: "Version Control & Collaboration", items: Ut.tools },
    ];
  return h.jsxs("div", {
    className: "bg-neutral-950 min-h-screen",
    children: [
      h.jsx(xu, { navigate: p, currentPage: "resume" }),
      h.jsx("div", {
        className: "pt-32 pb-20 px-6",
        children: h.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            h.jsx("div", {
              className: "flex justify-end mb-8",
              children: h.jsxs("button", {
                className:
                  "inline-flex items-center gap-2 bg-[#d3e97a] text-neutral-950 px-6 py-3 rounded-full hover:bg-[#c5db6c] transition-colors",
                onClick: d_,
                children: [
                  h.jsx(L2, { className: "size-4" }),
                  h.jsx("span", {
                    className:
                      "font-['Manrope',sans-serif] font-bold text-[14px] uppercase",
                    children: "Download Resume",
                  }),
                ],
              }),
            }),
            h.jsx("div", {
              className:
                "bg-[#1a1a1a] rounded-[20px] overflow-hidden shadow-2xl",
              ref: n,
              children: h.jsxs("div", {
                className: "p-8 lg:p-10 space-y-6",
                children: [
                  h.jsxs("div", {
                    className:
                      "flex items-start justify-between gap-8 pb-4 border-b-2 border-[#d3e97a]",
                    children: [
                      h.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          h.jsx("h1", {
                            className: "text-[48px] text-white leading-[0.9]",
                            children: Ze.name.toUpperCase(),
                          }),
                          h.jsx("p", {
                            className:
                              "font-['Manrope',sans-serif] text-[#d3e97a] text-[18px]",
                            children: Ze.title,
                          }),
                        ],
                      }),
                      h.jsxs("div", {
                        className: "space-y-1.5 pt-1",
                        children: [
                          h.jsxs("div", {
                            className: "flex items-center gap-2 justify-end",
                            children: [
                              h.jsx(l1, {
                                className: "size-3.5 text-[#d3e97a]",
                              }),
                              h.jsx("a", {
                                href: `mailto:${Ze.email}`,
                                className:
                                  "font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7] hover:text-white",
                                children: Ze.email,
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "flex items-center gap-2 justify-end",
                            children: [
                              h.jsx(u1, {
                                className: "size-3.5 text-[#d3e97a]",
                              }),
                              h.jsx("span", {
                                className:
                                  "font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7]",
                                children: Ze.phone,
                              }),
                            ],
                          }),
                          h.jsxs("div", {
                            className: "flex items-center gap-2 justify-end",
                            children: [
                              h.jsx(G2, {
                                className: "size-3.5 text-[#d3e97a]",
                              }),
                              h.jsx("span", {
                                className:
                                  "font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7]",
                                children: Ze.location,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "space-y-2.5",
                    children: [
                      h.jsx("h2", {
                        className:
                          "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                        children: "Profile",
                      }),
                      h.jsxs("p", {
                        className:
                          "font-['Manrope',sans-serif] text-[#c7c7c7] text-[13px] leading-[1.6]",
                        children: [
                          "Front End Engineer with ",
                          a,
                          " of experience building high-performance web and mobile applications. Proficient in React, JavaScript (ES6+), HTML, and CSS, with a strong focus on optimizing user experience and front-end performance. Adept at developing scalable, responsive interfaces using modern frameworks like Next.js, Redux Toolkit, and React Native. Proven track record of improving application speed, accessibility, and maintainability. Collaborative team player experienced in Agile environments, consistently delivering user-centric solutions that drive business impact in fast-paced product teams.",
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      h.jsx("h2", {
                        className:
                          "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                        children: "Skills",
                      }),
                      f.map((c) =>
                        h.jsxs(
                          "div",
                          {
                            className: "space-y-1.5",
                            children: [
                              h.jsx("h3", {
                                className:
                                  "font-['Manrope',sans-serif] font-semibold text-white text-[12px]",
                                children: c.title,
                              }),
                              h.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: c.items.map((m) => {
                                  const g = m.icon;
                                  return h.jsxs(
                                    "span",
                                    {
                                      className:
                                        "font-['Manrope',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5",
                                      children: [
                                        h.jsx(g, { className: "size-3" }),
                                        m.name,
                                      ],
                                    },
                                    m.name
                                  );
                                }),
                              }),
                            ],
                          },
                          c.title
                        )
                      ),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "space-y-2.5",
                    children: [
                      h.jsx("h2", {
                        className:
                          "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                        children: "Education",
                      }),
                      h.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: q1.map((c) =>
                          h.jsxs(
                            "div",
                            {
                              className: "space-y-0.5",
                              children: [
                                h.jsx("h4", {
                                  className:
                                    "font-['Manrope',sans-serif] font-semibold text-white text-[13px]",
                                  children: c.institution,
                                }),
                                h.jsx("p", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]",
                                  children: c.degree,
                                }),
                                h.jsx("p", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]",
                                  children: c.period,
                                }),
                              ],
                            },
                            c.id
                          )
                        ),
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      h.jsx("h2", {
                        className:
                          "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                        children: "Notable Projects",
                      }),
                      h.jsx("div", {
                        className: "space-y-4",
                        children: gu.map((c) =>
                          h.jsxs(
                            "div",
                            {
                              className:
                                "bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2",
                              children: [
                                h.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    h.jsx("h3", {
                                      className:
                                        "font-['Manrope',sans-serif] font-semibold text-white text-[14px]",
                                      children: c.title,
                                    }),
                                    h.jsx("p", {
                                      className:
                                        "font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]",
                                      children: c.role,
                                    }),
                                  ],
                                }),
                                h.jsx("div", {
                                  className: "flex flex-wrap gap-1.5",
                                  children: c.techStack.map((m, g) =>
                                    h.jsx(
                                      "span",
                                      {
                                        className:
                                          "font-['Manrope',sans-serif] text-[10px] text-[#2a4a4a] bg-[#d3e97a] px-2.5 py-1 rounded-md",
                                        children: m,
                                      },
                                      g
                                    )
                                  ),
                                }),
                                h.jsx("ul", {
                                  className:
                                    "space-y-1 font-['Manrope',sans-serif] text-[#c7c7c7] text-[11px]",
                                  children: c.achievements.map((m, g) =>
                                    h.jsxs(
                                      "li",
                                      {
                                        className: "flex items-start gap-2",
                                        children: [
                                          h.jsx("span", {
                                            className: "text-[#d3e97a] mt-0.5",
                                            children: "•",
                                          }),
                                          h.jsx("span", { children: m }),
                                        ],
                                      },
                                      g
                                    )
                                  ),
                                }),
                              ],
                            },
                            c.id
                          )
                        ),
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      h.jsx("h2", {
                        className:
                          "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                        children: "Personal Projects",
                      }),
                      h.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: qf.map((c) =>
                          h.jsx(
                            "a",
                            {
                              href: c.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "font-['Manrope',sans-serif] text-[12px] text-white bg-[#1a1a1a]/50 px-4 py-2 rounded-lg border border-[#d3e97a]/20 hover:bg-[#d3e97a]/10 hover:border-[#d3e97a] transition-all duration-300 cursor-pointer",
                              children: c.title,
                            },
                            c.id
                          )
                        ),
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      h.jsx("h2", {
                        className:
                          "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                        children: "Work Experience",
                      }),
                      h.jsxs("div", {
                        className: "relative pl-8",
                        children: [
                          h.jsx("div", {
                            className:
                              "absolute left-[14px] top-3 bottom-3 w-[2px] bg-[#d3e97a]/30",
                          }),
                          nu.map((c, m) =>
                            h.jsxs(
                              "div",
                              {
                                className: `relative ${
                                  m < nu.length - 1 ? "pb-6" : ""
                                }`,
                                children: [
                                  h.jsx("div", {
                                    className:
                                      "absolute left-[-25px] top-2 w-4 h-4 rounded-full bg-[#d3e97a] border-4 border-[#1a1a1a]",
                                  }),
                                  h.jsxs("div", {
                                    className:
                                      "bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2",
                                    children: [
                                      h.jsxs("div", {
                                        className:
                                          "flex items-start justify-between gap-4",
                                        children: [
                                          h.jsxs("div", {
                                            className: "space-y-0.5 flex-1",
                                            children: [
                                              h.jsx("h3", {
                                                className:
                                                  "font-['Manrope',sans-serif] font-semibold text-white text-[15px]",
                                                children: c.title,
                                              }),
                                              h.jsxs("p", {
                                                className:
                                                  "font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px]",
                                                children: [
                                                  c.company,
                                                  " | ",
                                                  c.location,
                                                ],
                                              }),
                                            ],
                                          }),
                                          h.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-[#d3e97a] text-[11px] whitespace-nowrap bg-[#d3e97a]/10 px-2.5 py-1 rounded-md",
                                            children: c.period,
                                          }),
                                        ],
                                      }),
                                      h.jsx("ul", {
                                        className:
                                          "space-y-1 font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px]",
                                        children: c.responsibilities.map(
                                          (g, v) =>
                                            h.jsxs(
                                              "li",
                                              {
                                                className:
                                                  "flex items-start gap-2",
                                                children: [
                                                  h.jsx("span", {
                                                    className:
                                                      "text-[#d3e97a] mt-0.5",
                                                    children: "•",
                                                  }),
                                                  h.jsx("span", {
                                                    children: g,
                                                  }),
                                                ],
                                              },
                                              v
                                            )
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              c.id
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      h.jsx("h2", {
                        className:
                          "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                        children: "Achievements",
                      }),
                      h.jsx("div", {
                        className: "space-y-1",
                        children: K1.map((c, m) =>
                          h.jsxs(
                            "div",
                            {
                              className:
                                "flex items-start gap-3 bg-[#1a1a1a]/50 p-3 rounded-lg",
                              children: [
                                h.jsx("div", {
                                  className:
                                    "w-2 h-2 rounded-full bg-[#d3e97a] mt-1.5 flex-shrink-0",
                                }),
                                h.jsx("p", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]",
                                  children: c,
                                }),
                              ],
                            },
                            m
                          )
                        ),
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      h.jsx("h2", {
                        className:
                          "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                        children: "References",
                      }),
                      h.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: J1.map((c) =>
                          h.jsxs(
                            "div",
                            {
                              className:
                                "bg-[#1a1a1a]/50 p-4 rounded-lg space-y-1",
                              children: [
                                h.jsx("h4", {
                                  className:
                                    "font-['Manrope',sans-serif] font-semibold text-white text-[13px]",
                                  children: c.name,
                                }),
                                h.jsxs("p", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]",
                                  children: [c.company, " / ", c.position],
                                }),
                                h.jsxs("div", {
                                  className: "pt-2 space-y-1",
                                  children: [
                                    h.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        h.jsx("div", {
                                          className:
                                            "w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center",
                                          children: h.jsx(u1, {
                                            className:
                                              "size-2.5 text-[#d3e97a]",
                                          }),
                                        }),
                                        h.jsx("p", {
                                          className:
                                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[10px]",
                                          children: c.phone,
                                        }),
                                      ],
                                    }),
                                    h.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        h.jsx("div", {
                                          className:
                                            "w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center",
                                          children: h.jsx(l1, {
                                            className:
                                              "size-2.5 text-[#d3e97a]",
                                          }),
                                        }),
                                        h.jsx("p", {
                                          className:
                                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[10px]",
                                          children: c.email,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            c.id
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      h.jsx("footer", {
        className: "py-8 px-6 border-t border-[#484848]",
        children: h.jsxs("div", {
          className:
            "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",
          children: [
            h.jsx("p", {
              className:
                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
              children: Ze.copyright,
            }),
            h.jsx("button", {
              onClick: () => p("/"),
              className:
                "font-['Manrope',sans-serif] text-[#d3e97a] text-[14px] hover:text-white transition-colors",
              children: "Back to Home",
            }),
          ],
        }),
      }),
    ],
  });
}
function h_() {
  const [p, n] = nt.useState("home");
  nt.useEffect(() => {
    const s = window.location.hash.slice(1) || "/";
    n(
      s === "/about"
        ? "about"
        : s === "/projects"
        ? "projects"
        : s === "/resume"
        ? "resume"
        : "home"
    );
    const l = () => {
      const a = window.location.hash.slice(1) || "/";
      n(
        a === "/about"
          ? "about"
          : a === "/projects"
          ? "projects"
          : a === "/resume"
          ? "resume"
          : "home"
      );
    };
    return (
      window.addEventListener("hashchange", l),
      () => window.removeEventListener("hashchange", l)
    );
  }, []),
    nt.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [p]);
  const i = (s) => {
    window.location.hash = s;
  };
  return p === "about"
    ? h.jsx(o_, { navigate: i })
    : p === "projects"
    ? h.jsx(a_, { navigate: i })
    : p === "resume"
    ? h.jsx(p_, { navigate: i })
    : h.jsx(s_, { navigate: i });
}
g2.createRoot(document.getElementById("root")).render(h.jsx(h_, {}));
