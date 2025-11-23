(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === "childList")
        for (const d of a.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const a = {};
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = r(o);
    fetch(o.href, a);
  }
})();
function Nu(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default")
    ? u.default
    : u;
}
var hf = { exports: {} },
  rl = {},
  mf = { exports: {} },
  Re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xm;
function nx() {
  if (xm) return Re;
  xm = 1;
  var u = Symbol.for("react.element"),
    n = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    a = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    _ = Symbol.iterator;
  function S(j) {
    return j === null || typeof j != "object"
      ? null
      : ((j = (_ && j[_]) || j["@@iterator"]),
        typeof j == "function" ? j : null);
  }
  var y = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    w = {};
  function P(j, F, pe) {
    (this.props = j),
      (this.context = F),
      (this.refs = w),
      (this.updater = pe || y);
  }
  (P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (j, F) {
      if (typeof j != "object" && typeof j != "function" && j != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, j, F, "setState");
    }),
    (P.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, "forceUpdate");
    });
  function I() {}
  I.prototype = P.prototype;
  function A(j, F, pe) {
    (this.props = j),
      (this.context = F),
      (this.refs = w),
      (this.updater = pe || y);
  }
  var $ = (A.prototype = new I());
  ($.constructor = A), N($, P.prototype), ($.isPureReactComponent = !0);
  var O = Array.isArray,
    L = Object.prototype.hasOwnProperty,
    U = { current: null },
    z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function W(j, F, pe) {
    var se,
      me = {},
      ve = null,
      _e = null;
    if (F != null)
      for (se in (F.ref !== void 0 && (_e = F.ref),
      F.key !== void 0 && (ve = "" + F.key),
      F))
        L.call(F, se) && !z.hasOwnProperty(se) && (me[se] = F[se]);
    var Ce = arguments.length - 2;
    if (Ce === 1) me.children = pe;
    else if (1 < Ce) {
      for (var Te = Array(Ce), dt = 0; dt < Ce; dt++)
        Te[dt] = arguments[dt + 2];
      me.children = Te;
    }
    if (j && j.defaultProps)
      for (se in ((Ce = j.defaultProps), Ce))
        me[se] === void 0 && (me[se] = Ce[se]);
    return {
      $$typeof: u,
      type: j,
      key: ve,
      ref: _e,
      props: me,
      _owner: U.current,
    };
  }
  function B(j, F) {
    return {
      $$typeof: u,
      type: j.type,
      key: F,
      ref: j.ref,
      props: j.props,
      _owner: j._owner,
    };
  }
  function q(j) {
    return typeof j == "object" && j !== null && j.$$typeof === u;
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
  var Q = /\/+/g;
  function he(j, F) {
    return typeof j == "object" && j !== null && j.key != null
      ? fe("" + j.key)
      : F.toString(36);
  }
  function ge(j, F, pe, se, me) {
    var ve = typeof j;
    (ve === "undefined" || ve === "boolean") && (j = null);
    var _e = !1;
    if (j === null) _e = !0;
    else
      switch (ve) {
        case "string":
        case "number":
          _e = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case u:
            case n:
              _e = !0;
          }
      }
    if (_e)
      return (
        (_e = j),
        (me = me(_e)),
        (j = se === "" ? "." + he(_e, 0) : se),
        O(me)
          ? ((pe = ""),
            j != null && (pe = j.replace(Q, "$&/") + "/"),
            ge(me, F, pe, "", function (dt) {
              return dt;
            }))
          : me != null &&
            (q(me) &&
              (me = B(
                me,
                pe +
                  (!me.key || (_e && _e.key === me.key)
                    ? ""
                    : ("" + me.key).replace(Q, "$&/") + "/") +
                  j
              )),
            F.push(me)),
        1
      );
    if (((_e = 0), (se = se === "" ? "." : se + ":"), O(j)))
      for (var Ce = 0; Ce < j.length; Ce++) {
        ve = j[Ce];
        var Te = se + he(ve, Ce);
        _e += ge(ve, F, pe, Te, me);
      }
    else if (((Te = S(j)), typeof Te == "function"))
      for (j = Te.call(j), Ce = 0; !(ve = j.next()).done; )
        (ve = ve.value),
          (Te = se + he(ve, Ce++)),
          (_e += ge(ve, F, pe, Te, me));
    else if (ve === "object")
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
    return _e;
  }
  function Se(j, F, pe) {
    if (j == null) return j;
    var se = [],
      me = 0;
    return (
      ge(j, se, "", "", function (ve) {
        return F.call(pe, ve, me++);
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
    H = { transition: null },
    Z = {
      ReactCurrentDispatcher: ee,
      ReactCurrentBatchConfig: H,
      ReactCurrentOwner: U,
    };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Re.Children = {
      map: Se,
      forEach: function (j, F, pe) {
        Se(
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
          Se(j, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (j) {
        return (
          Se(j, function (F) {
            return F;
          }) || []
        );
      },
      only: function (j) {
        if (!q(j))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return j;
      },
    }),
    (Re.Component = P),
    (Re.Fragment = r),
    (Re.Profiler = o),
    (Re.PureComponent = A),
    (Re.StrictMode = s),
    (Re.Suspense = h),
    (Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
    (Re.act = C),
    (Re.cloneElement = function (j, F, pe) {
      if (j == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            j +
            "."
        );
      var se = N({}, j.props),
        me = j.key,
        ve = j.ref,
        _e = j._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((ve = F.ref), (_e = U.current)),
          F.key !== void 0 && (me = "" + F.key),
          j.type && j.type.defaultProps)
        )
          var Ce = j.type.defaultProps;
        for (Te in F)
          L.call(F, Te) &&
            !z.hasOwnProperty(Te) &&
            (se[Te] = F[Te] === void 0 && Ce !== void 0 ? Ce[Te] : F[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) se.children = pe;
      else if (1 < Te) {
        Ce = Array(Te);
        for (var dt = 0; dt < Te; dt++) Ce[dt] = arguments[dt + 2];
        se.children = Ce;
      }
      return {
        $$typeof: u,
        type: j.type,
        key: me,
        ref: ve,
        props: se,
        _owner: _e,
      };
    }),
    (Re.createContext = function (j) {
      return (
        (j = {
          $$typeof: d,
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
    (Re.createElement = W),
    (Re.createFactory = function (j) {
      var F = W.bind(null, j);
      return (F.type = j), F;
    }),
    (Re.createRef = function () {
      return { current: null };
    }),
    (Re.forwardRef = function (j) {
      return { $$typeof: f, render: j };
    }),
    (Re.isValidElement = q),
    (Re.lazy = function (j) {
      return { $$typeof: x, _payload: { _status: -1, _result: j }, _init: de };
    }),
    (Re.memo = function (j, F) {
      return { $$typeof: g, type: j, compare: F === void 0 ? null : F };
    }),
    (Re.startTransition = function (j) {
      var F = H.transition;
      H.transition = {};
      try {
        j();
      } finally {
        H.transition = F;
      }
    }),
    (Re.unstable_act = C),
    (Re.useCallback = function (j, F) {
      return ee.current.useCallback(j, F);
    }),
    (Re.useContext = function (j) {
      return ee.current.useContext(j);
    }),
    (Re.useDebugValue = function () {}),
    (Re.useDeferredValue = function (j) {
      return ee.current.useDeferredValue(j);
    }),
    (Re.useEffect = function (j, F) {
      return ee.current.useEffect(j, F);
    }),
    (Re.useId = function () {
      return ee.current.useId();
    }),
    (Re.useImperativeHandle = function (j, F, pe) {
      return ee.current.useImperativeHandle(j, F, pe);
    }),
    (Re.useInsertionEffect = function (j, F) {
      return ee.current.useInsertionEffect(j, F);
    }),
    (Re.useLayoutEffect = function (j, F) {
      return ee.current.useLayoutEffect(j, F);
    }),
    (Re.useMemo = function (j, F) {
      return ee.current.useMemo(j, F);
    }),
    (Re.useReducer = function (j, F, pe) {
      return ee.current.useReducer(j, F, pe);
    }),
    (Re.useRef = function (j) {
      return ee.current.useRef(j);
    }),
    (Re.useState = function (j) {
      return ee.current.useState(j);
    }),
    (Re.useSyncExternalStore = function (j, F, pe) {
      return ee.current.useSyncExternalStore(j, F, pe);
    }),
    (Re.useTransition = function () {
      return ee.current.useTransition();
    }),
    (Re.version = "18.3.1"),
    Re
  );
}
var ym;
function yd() {
  return ym || ((ym = 1), (mf.exports = nx())), mf.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _m;
function rx() {
  if (_m) return rl;
  _m = 1;
  var u = yd(),
    n = Symbol.for("react.element"),
    r = Symbol.for("react.fragment"),
    s = Object.prototype.hasOwnProperty,
    o = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, h, g) {
    var x,
      _ = {},
      S = null,
      y = null;
    g !== void 0 && (S = "" + g),
      h.key !== void 0 && (S = "" + h.key),
      h.ref !== void 0 && (y = h.ref);
    for (x in h) s.call(h, x) && !a.hasOwnProperty(x) && (_[x] = h[x]);
    if (f && f.defaultProps)
      for (x in ((h = f.defaultProps), h)) _[x] === void 0 && (_[x] = h[x]);
    return {
      $$typeof: n,
      type: f,
      key: S,
      ref: y,
      props: _,
      _owner: o.current,
    };
  }
  return (rl.Fragment = r), (rl.jsx = d), (rl.jsxs = d), rl;
}
var wm;
function ix() {
  return wm || ((wm = 1), (hf.exports = rx())), hf.exports;
}
var m = ix(),
  Ba = {},
  gf = { exports: {} },
  bn = {},
  vf = { exports: {} },
  xf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var km;
function sx() {
  return (
    km ||
      ((km = 1),
      (function (u) {
        function n(H, Z) {
          var C = H.length;
          H.push(Z);
          e: for (; 0 < C; ) {
            var j = (C - 1) >>> 1,
              F = H[j];
            if (0 < o(F, Z)) (H[j] = Z), (H[C] = F), (C = j);
            else break e;
          }
        }
        function r(H) {
          return H.length === 0 ? null : H[0];
        }
        function s(H) {
          if (H.length === 0) return null;
          var Z = H[0],
            C = H.pop();
          if (C !== Z) {
            H[0] = C;
            e: for (var j = 0, F = H.length, pe = F >>> 1; j < pe; ) {
              var se = 2 * (j + 1) - 1,
                me = H[se],
                ve = se + 1,
                _e = H[ve];
              if (0 > o(me, C))
                ve < F && 0 > o(_e, me)
                  ? ((H[j] = _e), (H[ve] = C), (j = ve))
                  : ((H[j] = me), (H[se] = C), (j = se));
              else if (ve < F && 0 > o(_e, C))
                (H[j] = _e), (H[ve] = C), (j = ve);
              else break e;
            }
          }
          return Z;
        }
        function o(H, Z) {
          var C = H.sortIndex - Z.sortIndex;
          return C !== 0 ? C : H.id - Z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var a = performance;
          u.unstable_now = function () {
            return a.now();
          };
        } else {
          var d = Date,
            f = d.now();
          u.unstable_now = function () {
            return d.now() - f;
          };
        }
        var h = [],
          g = [],
          x = 1,
          _ = null,
          S = 3,
          y = !1,
          N = !1,
          w = !1,
          P = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function $(H) {
          for (var Z = r(g); Z !== null; ) {
            if (Z.callback === null) s(g);
            else if (Z.startTime <= H)
              s(g), (Z.sortIndex = Z.expirationTime), n(h, Z);
            else break;
            Z = r(g);
          }
        }
        function O(H) {
          if (((w = !1), $(H), !N))
            if (r(h) !== null) (N = !0), de(L);
            else {
              var Z = r(g);
              Z !== null && ee(O, Z.startTime - H);
            }
        }
        function L(H, Z) {
          (N = !1), w && ((w = !1), I(W), (W = -1)), (y = !0);
          var C = S;
          try {
            for (
              $(Z), _ = r(h);
              _ !== null && (!(_.expirationTime > Z) || (H && !fe()));

            ) {
              var j = _.callback;
              if (typeof j == "function") {
                (_.callback = null), (S = _.priorityLevel);
                var F = j(_.expirationTime <= Z);
                (Z = u.unstable_now()),
                  typeof F == "function"
                    ? (_.callback = F)
                    : _ === r(h) && s(h),
                  $(Z);
              } else s(h);
              _ = r(h);
            }
            if (_ !== null) var pe = !0;
            else {
              var se = r(g);
              se !== null && ee(O, se.startTime - Z), (pe = !1);
            }
            return pe;
          } finally {
            (_ = null), (S = C), (y = !1);
          }
        }
        var U = !1,
          z = null,
          W = -1,
          B = 5,
          q = -1;
        function fe() {
          return !(u.unstable_now() - q < B);
        }
        function Q() {
          if (z !== null) {
            var H = u.unstable_now();
            q = H;
            var Z = !0;
            try {
              Z = z(!0, H);
            } finally {
              Z ? he() : ((U = !1), (z = null));
            }
          } else U = !1;
        }
        var he;
        if (typeof A == "function")
          he = function () {
            A(Q);
          };
        else if (typeof MessageChannel < "u") {
          var ge = new MessageChannel(),
            Se = ge.port2;
          (ge.port1.onmessage = Q),
            (he = function () {
              Se.postMessage(null);
            });
        } else
          he = function () {
            P(Q, 0);
          };
        function de(H) {
          (z = H), U || ((U = !0), he());
        }
        function ee(H, Z) {
          W = P(function () {
            H(u.unstable_now());
          }, Z);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (u.unstable_continueExecution = function () {
            N || y || ((N = !0), de(L));
          }),
          (u.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (B = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (u.unstable_getFirstCallbackNode = function () {
            return r(h);
          }),
          (u.unstable_next = function (H) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var Z = 3;
                break;
              default:
                Z = S;
            }
            var C = S;
            S = Z;
            try {
              return H();
            } finally {
              S = C;
            }
          }),
          (u.unstable_pauseExecution = function () {}),
          (u.unstable_requestPaint = function () {}),
          (u.unstable_runWithPriority = function (H, Z) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var C = S;
            S = H;
            try {
              return Z();
            } finally {
              S = C;
            }
          }),
          (u.unstable_scheduleCallback = function (H, Z, C) {
            var j = u.unstable_now();
            switch (
              (typeof C == "object" && C !== null
                ? ((C = C.delay),
                  (C = typeof C == "number" && 0 < C ? j + C : j))
                : (C = j),
              H)
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
              (F = C + F),
              (H = {
                id: x++,
                callback: Z,
                priorityLevel: H,
                startTime: C,
                expirationTime: F,
                sortIndex: -1,
              }),
              C > j
                ? ((H.sortIndex = C),
                  n(g, H),
                  r(h) === null &&
                    H === r(g) &&
                    (w ? (I(W), (W = -1)) : (w = !0), ee(O, C - j)))
                : ((H.sortIndex = F), n(h, H), N || y || ((N = !0), de(L))),
              H
            );
          }),
          (u.unstable_shouldYield = fe),
          (u.unstable_wrapCallback = function (H) {
            var Z = S;
            return function () {
              var C = S;
              S = Z;
              try {
                return H.apply(this, arguments);
              } finally {
                S = C;
              }
            };
          });
      })(xf)),
    xf
  );
}
var Sm;
function ox() {
  return Sm || ((Sm = 1), (vf.exports = sx())), vf.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cm;
function lx() {
  if (Cm) return bn;
  Cm = 1;
  var u = yd(),
    n = ox();
  function r(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        i = 1;
      i < arguments.length;
      i++
    )
      t += "&args[]=" + encodeURIComponent(arguments[i]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var s = new Set(),
    o = {};
  function a(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (o[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
  }
  var f = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    h = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    x = {},
    _ = {};
  function S(e) {
    return h.call(_, e)
      ? !0
      : h.call(x, e)
      ? !1
      : g.test(e)
      ? (_[e] = !0)
      : ((x[e] = !0), !1);
  }
  function y(e, t, i, l) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : i !== null
          ? !i.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function N(e, t, i, l) {
    if (t === null || typeof t > "u" || y(e, t, i, l)) return !0;
    if (l) return !1;
    if (i !== null)
      switch (i.type) {
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
  function w(e, t, i, l, c, p, v) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = l),
      (this.attributeNamespace = c),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = p),
      (this.removeEmptyString = v);
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      P[e] = new w(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      P[t] = new w(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      P[e] = new w(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      P[e] = new w(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        P[e] = new w(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      P[e] = new w(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      P[e] = new w(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      P[e] = new w(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      P[e] = new w(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var I = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(I, A);
      P[t] = new w(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(I, A);
        P[t] = new w(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(I, A);
      P[t] = new w(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      P[e] = new w(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (P.xlinkHref = new w(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      P[e] = new w(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function $(e, t, i, l) {
    var c = P.hasOwnProperty(t) ? P[t] : null;
    (c !== null
      ? c.type !== 0
      : l ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (N(t, i, c, l) && (i = null),
      l || c === null
        ? S(t) &&
          (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i))
        : c.mustUseProperty
        ? (e[c.propertyName] = i === null ? (c.type === 3 ? !1 : "") : i)
        : ((t = c.attributeName),
          (l = c.attributeNamespace),
          i === null
            ? e.removeAttribute(t)
            : ((c = c.type),
              (i = c === 3 || (c === 4 && i === !0) ? "" : "" + i),
              l ? e.setAttributeNS(l, t, i) : e.setAttribute(t, i))));
  }
  var O = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    L = Symbol.for("react.element"),
    U = Symbol.for("react.portal"),
    z = Symbol.for("react.fragment"),
    W = Symbol.for("react.strict_mode"),
    B = Symbol.for("react.profiler"),
    q = Symbol.for("react.provider"),
    fe = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    he = Symbol.for("react.suspense"),
    ge = Symbol.for("react.suspense_list"),
    Se = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    ee = Symbol.for("react.offscreen"),
    H = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (H && e[H]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var C = Object.assign,
    j;
  function F(e) {
    if (j === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
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
    var i = Error.prepareStackTrace;
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
          } catch (R) {
            var l = R;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (R) {
            l = R;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (R) {
          l = R;
        }
        e();
      }
    } catch (R) {
      if (R && l && typeof R.stack == "string") {
        for (
          var c = R.stack.split(`
`),
            p = l.stack.split(`
`),
            v = c.length - 1,
            k = p.length - 1;
          1 <= v && 0 <= k && c[v] !== p[k];

        )
          k--;
        for (; 1 <= v && 0 <= k; v--, k--)
          if (c[v] !== p[k]) {
            if (v !== 1 || k !== 1)
              do
                if ((v--, k--, 0 > k || c[v] !== p[k])) {
                  var T =
                    `
` + c[v].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      T.includes("<anonymous>") &&
                      (T = T.replace("<anonymous>", e.displayName)),
                    T
                  );
                }
              while (1 <= v && 0 <= k);
            break;
          }
      }
    } finally {
      (pe = !1), (Error.prepareStackTrace = i);
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
  function ve(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case z:
        return "Fragment";
      case U:
        return "Portal";
      case B:
        return "Profiler";
      case W:
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
        case q:
          return (e._context.displayName || "Context") + ".Provider";
        case Q:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Se:
          return (
            (t = e.displayName || null), t !== null ? t : ve(e.type) || "Memo"
          );
        case de:
          (t = e._payload), (e = e._init);
          try {
            return ve(e(t));
          } catch {}
      }
    return null;
  }
  function _e(e) {
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
        return ve(t);
      case 8:
        return t === W ? "StrictMode" : "Mode";
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
  function Ce(e) {
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
  function Te(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function dt(e) {
    var t = Te(e) ? "checked" : "value",
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var c = i.get,
        p = i.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (v) {
            (l = "" + v), p.call(this, v);
          },
        }),
        Object.defineProperty(e, t, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (v) {
            l = "" + v;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function wt(e) {
    e._valueTracker || (e._valueTracker = dt(e));
  }
  function Ht(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(),
      l = "";
    return (
      e && (l = Te(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== i ? (t.setValue(e), !0) : !1
    );
  }
  function Me(e) {
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
  function Je(e, t) {
    var i = t.checked;
    return C({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function Vt(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue,
      l = t.checked != null ? t.checked : t.defaultChecked;
    (i = Ce(t.value != null ? t.value : i)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: i,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Gt(e, t) {
    (t = t.checked), t != null && $(e, "checked", t, !1);
  }
  function D(e, t) {
    Gt(e, t);
    var i = Ce(t.value),
      l = t.type;
    if (i != null)
      l === "number"
        ? ((i === 0 && e.value === "") || e.value != i) && (e.value = "" + i)
        : e.value !== "" + i && (e.value = "" + i);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ln(e, t.type, i)
      : t.hasOwnProperty("defaultValue") && Ln(e, t.type, Ce(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Qt(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var l = t.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        i || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (i = e.name),
      i !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== "" && (e.name = i);
  }
  function Ln(e, t, i) {
    (t !== "number" || Me(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var kn = Array.isArray;
  function Ve(e, t, i, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < i.length; c++) t["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        (c = t.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== c && (e[i].selected = c),
          c && l && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + Ce(i), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          (e[c].selected = !0), l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fn(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(r(91));
    return C({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function _r(e, t) {
    var i = t.value;
    if (i == null) {
      if (((i = t.children), (t = t.defaultValue), i != null)) {
        if (t != null) throw Error(r(92));
        if (kn(i)) {
          if (1 < i.length) throw Error(r(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ""), (i = t);
    }
    e._wrapperState = { initialValue: Ce(i) };
  }
  function Dr(e, t) {
    var i = Ce(t.value),
      l = Ce(t.defaultValue);
    i != null &&
      ((i = "" + i),
      i !== e.value && (e.value = i),
      t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      l != null && (e.defaultValue = "" + l);
  }
  function gt(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function wr(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function et(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? wr(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Kt,
    un = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, i, l, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, i, l, c);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Kt = Kt || document.createElement("div"),
            Kt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Kt.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function cn(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kr = {
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
    pt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(kr).forEach(function (e) {
    pt.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kr[t] = kr[e]);
    });
  });
  function Xi(e, t, i) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : i || typeof t != "number" || t === 0 || (kr.hasOwnProperty(e) && kr[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function rr(e, t) {
    e = e.style;
    for (var i in t)
      if (t.hasOwnProperty(i)) {
        var l = i.indexOf("--") === 0,
          c = Xi(i, t[i], l);
        i === "float" && (i = "cssFloat"), l ? e.setProperty(i, c) : (e[i] = c);
      }
  }
  var pi = C(
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
      if (pi[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(r(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(r(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(r(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(r(62));
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
  var Sr = null;
  function Ne(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Cr = null,
    Ot = null,
    Dt = null;
  function Sn(e) {
    if ((e = Bo(e))) {
      if (typeof Cr != "function") throw Error(r(280));
      var t = e.stateNode;
      t && ((t = ra(t)), Cr(e.stateNode, e.type, t));
    }
  }
  function Ar(e) {
    Ot ? (Dt ? Dt.push(e) : (Dt = [e])) : (Ot = e);
  }
  function Qr() {
    if (Ot) {
      var e = Ot,
        t = Dt;
      if (((Dt = Ot = null), Sn(e), t)) for (e = 0; e < t.length; e++) Sn(t[e]);
    }
  }
  function sr(e, t) {
    return e(t);
  }
  function hi() {}
  var ke = !1;
  function ae(e, t, i) {
    if (ke) return e(t, i);
    ke = !0;
    try {
      return sr(e, t, i);
    } finally {
      (ke = !1), (Ot !== null || Dt !== null) && (hi(), Qr());
    }
  }
  function ze(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var l = ra(i);
    if (l === null) return null;
    i = l[t];
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
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(r(231, t, typeof i));
    return i;
  }
  var K = !1;
  if (f)
    try {
      var xe = {};
      Object.defineProperty(xe, "passive", {
        get: function () {
          K = !0;
        },
      }),
        window.addEventListener("test", xe, xe),
        window.removeEventListener("test", xe, xe);
    } catch {
      K = !1;
    }
  function le(e, t, i, l, c, p, v, k, T) {
    var R = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, R);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var ye = !1,
    lt = null,
    Ee = !1,
    tt = null,
    zt = {
      onError: function (e) {
        (ye = !0), (lt = e);
      },
    };
  function it(e, t, i, l, c, p, v, k, T) {
    (ye = !1), (lt = null), le.apply(zt, arguments);
  }
  function Ge(e, t, i, l, c, p, v, k, T) {
    if ((it.apply(this, arguments), ye)) {
      if (ye) {
        var R = lt;
        (ye = !1), (lt = null);
      } else throw Error(r(198));
      Ee || ((Ee = !0), (tt = R));
    }
  }
  function Ae(e) {
    var t = e,
      i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (i = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function Cn(e) {
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
  function Qe(e) {
    if (Ae(e) !== e) throw Error(r(188));
  }
  function fn(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Ae(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var i = e, l = t; ; ) {
      var c = i.return;
      if (c === null) break;
      var p = c.alternate;
      if (p === null) {
        if (((l = c.return), l !== null)) {
          i = l;
          continue;
        }
        break;
      }
      if (c.child === p.child) {
        for (p = c.child; p; ) {
          if (p === i) return Qe(c), e;
          if (p === l) return Qe(c), t;
          p = p.sibling;
        }
        throw Error(r(188));
      }
      if (i.return !== l.return) (i = c), (l = p);
      else {
        for (var v = !1, k = c.child; k; ) {
          if (k === i) {
            (v = !0), (i = c), (l = p);
            break;
          }
          if (k === l) {
            (v = !0), (l = c), (i = p);
            break;
          }
          k = k.sibling;
        }
        if (!v) {
          for (k = p.child; k; ) {
            if (k === i) {
              (v = !0), (i = p), (l = c);
              break;
            }
            if (k === l) {
              (v = !0), (l = p), (i = c);
              break;
            }
            k = k.sibling;
          }
          if (!v) throw Error(r(189));
        }
      }
      if (i.alternate !== l) throw Error(r(190));
    }
    if (i.tag !== 3) throw Error(r(188));
    return i.stateNode.current === i ? e : t;
  }
  function $n(e) {
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
  var St = n.unstable_scheduleCallback,
    Et = n.unstable_cancelCallback,
    Kr = n.unstable_shouldYield,
    Ps = n.unstable_requestPaint,
    be = n.unstable_now,
    vt = n.unstable_getCurrentPriorityLevel,
    Tn = n.unstable_ImmediatePriority,
    Ms = n.unstable_UserBlockingPriority,
    Gi = n.unstable_NormalPriority,
    Qi = n.unstable_LowPriority,
    Un = n.unstable_IdlePriority,
    Ir = null,
    dn = null;
  function Lr(e) {
    if (dn && typeof dn.onCommitFiberRoot == "function")
      try {
        dn.onCommitFiberRoot(Ir, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Tr = Math.clz32 ? Math.clz32 : _g,
    xg = Math.log,
    yg = Math.LN2;
  function _g(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((xg(e) / yg) | 0)) | 0;
  }
  var Fl = 64,
    $l = 4194304;
  function Co(e) {
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
  function Ul(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var l = 0,
      c = e.suspendedLanes,
      p = e.pingedLanes,
      v = i & 268435455;
    if (v !== 0) {
      var k = v & ~c;
      k !== 0 ? (l = Co(k)) : ((p &= v), p !== 0 && (l = Co(p)));
    } else (v = i & ~c), v !== 0 ? (l = Co(v)) : p !== 0 && (l = Co(p));
    if (l === 0) return 0;
    if (
      t !== 0 &&
      t !== l &&
      (t & c) === 0 &&
      ((c = l & -l), (p = t & -t), c >= p || (c === 16 && (p & 4194240) !== 0))
    )
      return t;
    if (((l & 4) !== 0 && (l |= i & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= l; 0 < t; )
        (i = 31 - Tr(t)), (c = 1 << i), (l |= e[i]), (t &= ~c);
    return l;
  }
  function wg(e, t) {
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
  function kg(e, t) {
    for (
      var i = e.suspendedLanes,
        l = e.pingedLanes,
        c = e.expirationTimes,
        p = e.pendingLanes;
      0 < p;

    ) {
      var v = 31 - Tr(p),
        k = 1 << v,
        T = c[v];
      T === -1
        ? ((k & i) === 0 || (k & l) !== 0) && (c[v] = wg(k, t))
        : T <= t && (e.expiredLanes |= k),
        (p &= ~k);
    }
  }
  function Du(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Gd() {
    var e = Fl;
    return (Fl <<= 1), (Fl & 4194240) === 0 && (Fl = 64), e;
  }
  function zu(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function To(e, t, i) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Tr(t)),
      (e[t] = i);
  }
  function Sg(e, t) {
    var i = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var c = 31 - Tr(i),
        p = 1 << c;
      (t[c] = 0), (l[c] = -1), (e[c] = -1), (i &= ~p);
    }
  }
  function Au(e, t) {
    var i = (e.entangledLanes |= t);
    for (e = e.entanglements; i; ) {
      var l = 31 - Tr(i),
        c = 1 << l;
      (c & t) | (e[l] & t) && (e[l] |= t), (i &= ~c);
    }
  }
  var Ye = 0;
  function Qd(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Kd,
    Iu,
    Zd,
    Jd,
    ep,
    Lu = !1,
    Bl = [],
    mi = null,
    gi = null,
    vi = null,
    No = new Map(),
    jo = new Map(),
    xi = [],
    Cg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function tp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        mi = null;
        break;
      case "dragenter":
      case "dragleave":
        gi = null;
        break;
      case "mouseover":
      case "mouseout":
        vi = null;
        break;
      case "pointerover":
      case "pointerout":
        No.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        jo.delete(t.pointerId);
    }
  }
  function Eo(e, t, i, l, c, p) {
    return e === null || e.nativeEvent !== p
      ? ((e = {
          blockedOn: t,
          domEventName: i,
          eventSystemFlags: l,
          nativeEvent: p,
          targetContainers: [c],
        }),
        t !== null && ((t = Bo(t)), t !== null && Iu(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function Tg(e, t, i, l, c) {
    switch (t) {
      case "focusin":
        return (mi = Eo(mi, e, t, i, l, c)), !0;
      case "dragenter":
        return (gi = Eo(gi, e, t, i, l, c)), !0;
      case "mouseover":
        return (vi = Eo(vi, e, t, i, l, c)), !0;
      case "pointerover":
        var p = c.pointerId;
        return No.set(p, Eo(No.get(p) || null, e, t, i, l, c)), !0;
      case "gotpointercapture":
        return (
          (p = c.pointerId), jo.set(p, Eo(jo.get(p) || null, e, t, i, l, c)), !0
        );
    }
    return !1;
  }
  function np(e) {
    var t = Ki(e.target);
    if (t !== null) {
      var i = Ae(t);
      if (i !== null) {
        if (((t = i.tag), t === 13)) {
          if (((t = Cn(i)), t !== null)) {
            (e.blockedOn = t),
              ep(e.priority, function () {
                Zd(i);
              });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Hl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = $u(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var l = new i.constructor(i.type, i);
        (Sr = l), i.target.dispatchEvent(l), (Sr = null);
      } else return (t = Bo(i)), t !== null && Iu(t), (e.blockedOn = i), !1;
      t.shift();
    }
    return !0;
  }
  function rp(e, t, i) {
    Hl(e) && i.delete(t);
  }
  function Ng() {
    (Lu = !1),
      mi !== null && Hl(mi) && (mi = null),
      gi !== null && Hl(gi) && (gi = null),
      vi !== null && Hl(vi) && (vi = null),
      No.forEach(rp),
      jo.forEach(rp);
  }
  function Po(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Lu ||
        ((Lu = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Ng)));
  }
  function Mo(e) {
    function t(c) {
      return Po(c, e);
    }
    if (0 < Bl.length) {
      Po(Bl[0], e);
      for (var i = 1; i < Bl.length; i++) {
        var l = Bl[i];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      mi !== null && Po(mi, e),
        gi !== null && Po(gi, e),
        vi !== null && Po(vi, e),
        No.forEach(t),
        jo.forEach(t),
        i = 0;
      i < xi.length;
      i++
    )
      (l = xi[i]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < xi.length && ((i = xi[0]), i.blockedOn === null); )
      np(i), i.blockedOn === null && xi.shift();
  }
  var bs = O.ReactCurrentBatchConfig,
    Vl = !0;
  function jg(e, t, i, l) {
    var c = Ye,
      p = bs.transition;
    bs.transition = null;
    try {
      (Ye = 1), Fu(e, t, i, l);
    } finally {
      (Ye = c), (bs.transition = p);
    }
  }
  function Eg(e, t, i, l) {
    var c = Ye,
      p = bs.transition;
    bs.transition = null;
    try {
      (Ye = 4), Fu(e, t, i, l);
    } finally {
      (Ye = c), (bs.transition = p);
    }
  }
  function Fu(e, t, i, l) {
    if (Vl) {
      var c = $u(e, t, i, l);
      if (c === null) rc(e, t, l, Yl, i), tp(e, l);
      else if (Tg(c, e, t, i, l)) l.stopPropagation();
      else if ((tp(e, l), t & 4 && -1 < Cg.indexOf(e))) {
        for (; c !== null; ) {
          var p = Bo(c);
          if (
            (p !== null && Kd(p),
            (p = $u(e, t, i, l)),
            p === null && rc(e, t, l, Yl, i),
            p === c)
          )
            break;
          c = p;
        }
        c !== null && l.stopPropagation();
      } else rc(e, t, l, null, i);
    }
  }
  var Yl = null;
  function $u(e, t, i, l) {
    if (((Yl = null), (e = Ne(l)), (e = Ki(e)), e !== null))
      if (((t = Ae(e)), t === null)) e = null;
      else if (((i = t.tag), i === 13)) {
        if (((e = Cn(t)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Yl = e), null;
  }
  function ip(e) {
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
        switch (vt()) {
          case Tn:
            return 1;
          case Ms:
            return 4;
          case Gi:
          case Qi:
            return 16;
          case Un:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var yi = null,
    Uu = null,
    Wl = null;
  function sp() {
    if (Wl) return Wl;
    var e,
      t = Uu,
      i = t.length,
      l,
      c = "value" in yi ? yi.value : yi.textContent,
      p = c.length;
    for (e = 0; e < i && t[e] === c[e]; e++);
    var v = i - e;
    for (l = 1; l <= v && t[i - l] === c[p - l]; l++);
    return (Wl = c.slice(e, 1 < l ? 1 - l : void 0));
  }
  function ql(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Xl() {
    return !0;
  }
  function op() {
    return !1;
  }
  function Bn(e) {
    function t(i, l, c, p, v) {
      (this._reactName = i),
        (this._targetInst = c),
        (this.type = l),
        (this.nativeEvent = p),
        (this.target = v),
        (this.currentTarget = null);
      for (var k in e)
        e.hasOwnProperty(k) && ((i = e[k]), (this[k] = i ? i(p) : p[k]));
      return (
        (this.isDefaultPrevented = (
          p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1
        )
          ? Xl
          : op),
        (this.isPropagationStopped = op),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Xl));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Xl));
        },
        persist: function () {},
        isPersistent: Xl,
      }),
      t
    );
  }
  var Rs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bu = Bn(Rs),
    bo = C({}, Rs, { view: 0, detail: 0 }),
    Pg = Bn(bo),
    Hu,
    Vu,
    Ro,
    Gl = C({}, bo, {
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
      getModifierState: Wu,
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
          : (e !== Ro &&
              (Ro && e.type === "mousemove"
                ? ((Hu = e.screenX - Ro.screenX), (Vu = e.screenY - Ro.screenY))
                : (Vu = Hu = 0),
              (Ro = e)),
            Hu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Vu;
      },
    }),
    lp = Bn(Gl),
    Mg = C({}, Gl, { dataTransfer: 0 }),
    bg = Bn(Mg),
    Rg = C({}, bo, { relatedTarget: 0 }),
    Yu = Bn(Rg),
    Og = C({}, Rs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dg = Bn(Og),
    zg = C({}, Rs, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ag = Bn(zg),
    Ig = C({}, Rs, { data: 0 }),
    ap = Bn(Ig),
    Lg = {
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
    Fg = {
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
    $g = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ug(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = $g[e])
      ? !!t[e]
      : !1;
  }
  function Wu() {
    return Ug;
  }
  var Bg = C({}, bo, {
      key: function (e) {
        if (e.key) {
          var t = Lg[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ql(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Fg[e.keyCode] || "Unidentified"
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
      getModifierState: Wu,
      charCode: function (e) {
        return e.type === "keypress" ? ql(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ql(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Hg = Bn(Bg),
    Vg = C({}, Gl, {
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
    up = Bn(Vg),
    Yg = C({}, bo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Wu,
    }),
    Wg = Bn(Yg),
    qg = C({}, Rs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xg = Bn(qg),
    Gg = C({}, Gl, {
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
    Qg = Bn(Gg),
    Kg = [9, 13, 27, 32],
    qu = f && "CompositionEvent" in window,
    Oo = null;
  f && "documentMode" in document && (Oo = document.documentMode);
  var Zg = f && "TextEvent" in window && !Oo,
    cp = f && (!qu || (Oo && 8 < Oo && 11 >= Oo)),
    fp = " ",
    dp = !1;
  function pp(e, t) {
    switch (e) {
      case "keyup":
        return Kg.indexOf(t.keyCode) !== -1;
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
  function hp(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Os = !1;
  function Jg(e, t) {
    switch (e) {
      case "compositionend":
        return hp(t);
      case "keypress":
        return t.which !== 32 ? null : ((dp = !0), fp);
      case "textInput":
        return (e = t.data), e === fp && dp ? null : e;
      default:
        return null;
    }
  }
  function ev(e, t) {
    if (Os)
      return e === "compositionend" || (!qu && pp(e, t))
        ? ((e = sp()), (Wl = Uu = yi = null), (Os = !1), e)
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
        return cp && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tv = {
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
  function mp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tv[e.type] : t === "textarea";
  }
  function gp(e, t, i, l) {
    Ar(l),
      (t = ea(t, "onChange")),
      0 < t.length &&
        ((i = new Bu("onChange", "change", null, i, l)),
        e.push({ event: i, listeners: t }));
  }
  var Do = null,
    zo = null;
  function nv(e) {
    Dp(e, 0);
  }
  function Ql(e) {
    var t = Ls(e);
    if (Ht(t)) return e;
  }
  function rv(e, t) {
    if (e === "change") return t;
  }
  var vp = !1;
  if (f) {
    var Xu;
    if (f) {
      var Gu = "oninput" in document;
      if (!Gu) {
        var xp = document.createElement("div");
        xp.setAttribute("oninput", "return;"),
          (Gu = typeof xp.oninput == "function");
      }
      Xu = Gu;
    } else Xu = !1;
    vp = Xu && (!document.documentMode || 9 < document.documentMode);
  }
  function yp() {
    Do && (Do.detachEvent("onpropertychange", _p), (zo = Do = null));
  }
  function _p(e) {
    if (e.propertyName === "value" && Ql(zo)) {
      var t = [];
      gp(t, zo, e, Ne(e)), ae(nv, t);
    }
  }
  function iv(e, t, i) {
    e === "focusin"
      ? (yp(), (Do = t), (zo = i), Do.attachEvent("onpropertychange", _p))
      : e === "focusout" && yp();
  }
  function sv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ql(zo);
  }
  function ov(e, t) {
    if (e === "click") return Ql(t);
  }
  function lv(e, t) {
    if (e === "input" || e === "change") return Ql(t);
  }
  function av(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Nr = typeof Object.is == "function" ? Object.is : av;
  function Ao(e, t) {
    if (Nr(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var i = Object.keys(e),
      l = Object.keys(t);
    if (i.length !== l.length) return !1;
    for (l = 0; l < i.length; l++) {
      var c = i[l];
      if (!h.call(t, c) || !Nr(e[c], t[c])) return !1;
    }
    return !0;
  }
  function wp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function kp(e, t) {
    var i = wp(e);
    e = 0;
    for (var l; i; ) {
      if (i.nodeType === 3) {
        if (((l = e + i.textContent.length), e <= t && l >= t))
          return { node: i, offset: t - e };
        e = l;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = wp(i);
    }
  }
  function Sp(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Sp(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Cp() {
    for (var e = window, t = Me(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Me(e.document);
    }
    return t;
  }
  function Qu(e) {
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
  function uv(e) {
    var t = Cp(),
      i = e.focusedElem,
      l = e.selectionRange;
    if (
      t !== i &&
      i &&
      i.ownerDocument &&
      Sp(i.ownerDocument.documentElement, i)
    ) {
      if (l !== null && Qu(i)) {
        if (
          ((t = l.start),
          (e = l.end),
          e === void 0 && (e = t),
          "selectionStart" in i)
        )
          (i.selectionStart = t),
            (i.selectionEnd = Math.min(e, i.value.length));
        else if (
          ((e = ((t = i.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var c = i.textContent.length,
            p = Math.min(l.start, c);
          (l = l.end === void 0 ? p : Math.min(l.end, c)),
            !e.extend && p > l && ((c = l), (l = p), (p = c)),
            (c = kp(i, p));
          var v = kp(i, l);
          c &&
            v &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== c.node ||
              e.anchorOffset !== c.offset ||
              e.focusNode !== v.node ||
              e.focusOffset !== v.offset) &&
            ((t = t.createRange()),
            t.setStart(c.node, c.offset),
            e.removeAllRanges(),
            p > l
              ? (e.addRange(t), e.extend(v.node, v.offset))
              : (t.setEnd(v.node, v.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++)
        (e = t[i]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var cv = f && "documentMode" in document && 11 >= document.documentMode,
    Ds = null,
    Ku = null,
    Io = null,
    Zu = !1;
  function Tp(e, t, i) {
    var l =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Zu ||
      Ds == null ||
      Ds !== Me(l) ||
      ((l = Ds),
      "selectionStart" in l && Qu(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Io && Ao(Io, l)) ||
        ((Io = l),
        (l = ea(Ku, "onSelect")),
        0 < l.length &&
          ((t = new Bu("onSelect", "select", null, t, i)),
          e.push({ event: t, listeners: l }),
          (t.target = Ds))));
  }
  function Kl(e, t) {
    var i = {};
    return (
      (i[e.toLowerCase()] = t.toLowerCase()),
      (i["Webkit" + e] = "webkit" + t),
      (i["Moz" + e] = "moz" + t),
      i
    );
  }
  var zs = {
      animationend: Kl("Animation", "AnimationEnd"),
      animationiteration: Kl("Animation", "AnimationIteration"),
      animationstart: Kl("Animation", "AnimationStart"),
      transitionend: Kl("Transition", "TransitionEnd"),
    },
    Ju = {},
    Np = {};
  f &&
    ((Np = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete zs.animationend.animation,
      delete zs.animationiteration.animation,
      delete zs.animationstart.animation),
    "TransitionEvent" in window || delete zs.transitionend.transition);
  function Zl(e) {
    if (Ju[e]) return Ju[e];
    if (!zs[e]) return e;
    var t = zs[e],
      i;
    for (i in t) if (t.hasOwnProperty(i) && i in Np) return (Ju[e] = t[i]);
    return e;
  }
  var jp = Zl("animationend"),
    Ep = Zl("animationiteration"),
    Pp = Zl("animationstart"),
    Mp = Zl("transitionend"),
    bp = new Map(),
    Rp =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function _i(e, t) {
    bp.set(e, t), a(t, [e]);
  }
  for (var ec = 0; ec < Rp.length; ec++) {
    var tc = Rp[ec],
      fv = tc.toLowerCase(),
      dv = tc[0].toUpperCase() + tc.slice(1);
    _i(fv, "on" + dv);
  }
  _i(jp, "onAnimationEnd"),
    _i(Ep, "onAnimationIteration"),
    _i(Pp, "onAnimationStart"),
    _i("dblclick", "onDoubleClick"),
    _i("focusin", "onFocus"),
    _i("focusout", "onBlur"),
    _i(Mp, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
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
  var Lo =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    pv = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Lo)
    );
  function Op(e, t, i) {
    var l = e.type || "unknown-event";
    (e.currentTarget = i), Ge(l, t, void 0, e), (e.currentTarget = null);
  }
  function Dp(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var l = e[i],
        c = l.event;
      l = l.listeners;
      e: {
        var p = void 0;
        if (t)
          for (var v = l.length - 1; 0 <= v; v--) {
            var k = l[v],
              T = k.instance,
              R = k.currentTarget;
            if (((k = k.listener), T !== p && c.isPropagationStopped()))
              break e;
            Op(c, k, R), (p = T);
          }
        else
          for (v = 0; v < l.length; v++) {
            if (
              ((k = l[v]),
              (T = k.instance),
              (R = k.currentTarget),
              (k = k.listener),
              T !== p && c.isPropagationStopped())
            )
              break e;
            Op(c, k, R), (p = T);
          }
      }
    }
    if (Ee) throw ((e = tt), (Ee = !1), (tt = null), e);
  }
  function nt(e, t) {
    var i = t[uc];
    i === void 0 && (i = t[uc] = new Set());
    var l = e + "__bubble";
    i.has(l) || (zp(t, e, 2, !1), i.add(l));
  }
  function nc(e, t, i) {
    var l = 0;
    t && (l |= 4), zp(i, e, l, t);
  }
  var Jl = "_reactListening" + Math.random().toString(36).slice(2);
  function Fo(e) {
    if (!e[Jl]) {
      (e[Jl] = !0),
        s.forEach(function (i) {
          i !== "selectionchange" && (pv.has(i) || nc(i, !1, e), nc(i, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Jl] || ((t[Jl] = !0), nc("selectionchange", !1, t));
    }
  }
  function zp(e, t, i, l) {
    switch (ip(t)) {
      case 1:
        var c = jg;
        break;
      case 4:
        c = Eg;
        break;
      default:
        c = Fu;
    }
    (i = c.bind(null, t, i, e)),
      (c = void 0),
      !K ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (c = !0),
      l
        ? c !== void 0
          ? e.addEventListener(t, i, { capture: !0, passive: c })
          : e.addEventListener(t, i, !0)
        : c !== void 0
        ? e.addEventListener(t, i, { passive: c })
        : e.addEventListener(t, i, !1);
  }
  function rc(e, t, i, l, c) {
    var p = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var v = l.tag;
        if (v === 3 || v === 4) {
          var k = l.stateNode.containerInfo;
          if (k === c || (k.nodeType === 8 && k.parentNode === c)) break;
          if (v === 4)
            for (v = l.return; v !== null; ) {
              var T = v.tag;
              if (
                (T === 3 || T === 4) &&
                ((T = v.stateNode.containerInfo),
                T === c || (T.nodeType === 8 && T.parentNode === c))
              )
                return;
              v = v.return;
            }
          for (; k !== null; ) {
            if (((v = Ki(k)), v === null)) return;
            if (((T = v.tag), T === 5 || T === 6)) {
              l = p = v;
              continue e;
            }
            k = k.parentNode;
          }
        }
        l = l.return;
      }
    ae(function () {
      var R = p,
        Y = Ne(i),
        X = [];
      e: {
        var V = bp.get(e);
        if (V !== void 0) {
          var J = Bu,
            re = e;
          switch (e) {
            case "keypress":
              if (ql(i) === 0) break e;
            case "keydown":
            case "keyup":
              J = Hg;
              break;
            case "focusin":
              (re = "focus"), (J = Yu);
              break;
            case "focusout":
              (re = "blur"), (J = Yu);
              break;
            case "beforeblur":
            case "afterblur":
              J = Yu;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              J = lp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              J = bg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              J = Wg;
              break;
            case jp:
            case Ep:
            case Pp:
              J = Dg;
              break;
            case Mp:
              J = Xg;
              break;
            case "scroll":
              J = Pg;
              break;
            case "wheel":
              J = Qg;
              break;
            case "copy":
            case "cut":
            case "paste":
              J = Ag;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              J = up;
          }
          var ie = (t & 4) !== 0,
            xt = !ie && e === "scroll",
            M = ie ? (V !== null ? V + "Capture" : null) : V;
          ie = [];
          for (var E = R, b; E !== null; ) {
            b = E;
            var G = b.stateNode;
            if (
              (b.tag === 5 &&
                G !== null &&
                ((b = G),
                M !== null &&
                  ((G = ze(E, M)), G != null && ie.push($o(E, G, b)))),
              xt)
            )
              break;
            E = E.return;
          }
          0 < ie.length &&
            ((V = new J(V, re, null, i, Y)),
            X.push({ event: V, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((V = e === "mouseover" || e === "pointerover"),
            (J = e === "mouseout" || e === "pointerout"),
            V &&
              i !== Sr &&
              (re = i.relatedTarget || i.fromElement) &&
              (Ki(re) || re[Zr]))
          )
            break e;
          if (
            (J || V) &&
            ((V =
              Y.window === Y
                ? Y
                : (V = Y.ownerDocument)
                ? V.defaultView || V.parentWindow
                : window),
            J
              ? ((re = i.relatedTarget || i.toElement),
                (J = R),
                (re = re ? Ki(re) : null),
                re !== null &&
                  ((xt = Ae(re)),
                  re !== xt || (re.tag !== 5 && re.tag !== 6)) &&
                  (re = null))
              : ((J = null), (re = R)),
            J !== re)
          ) {
            if (
              ((ie = lp),
              (G = "onMouseLeave"),
              (M = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ie = up),
                (G = "onPointerLeave"),
                (M = "onPointerEnter"),
                (E = "pointer")),
              (xt = J == null ? V : Ls(J)),
              (b = re == null ? V : Ls(re)),
              (V = new ie(G, E + "leave", J, i, Y)),
              (V.target = xt),
              (V.relatedTarget = b),
              (G = null),
              Ki(Y) === R &&
                ((ie = new ie(M, E + "enter", re, i, Y)),
                (ie.target = b),
                (ie.relatedTarget = xt),
                (G = ie)),
              (xt = G),
              J && re)
            )
              t: {
                for (ie = J, M = re, E = 0, b = ie; b; b = As(b)) E++;
                for (b = 0, G = M; G; G = As(G)) b++;
                for (; 0 < E - b; ) (ie = As(ie)), E--;
                for (; 0 < b - E; ) (M = As(M)), b--;
                for (; E--; ) {
                  if (ie === M || (M !== null && ie === M.alternate)) break t;
                  (ie = As(ie)), (M = As(M));
                }
                ie = null;
              }
            else ie = null;
            J !== null && Ap(X, V, J, ie, !1),
              re !== null && xt !== null && Ap(X, xt, re, ie, !0);
          }
        }
        e: {
          if (
            ((V = R ? Ls(R) : window),
            (J = V.nodeName && V.nodeName.toLowerCase()),
            J === "select" || (J === "input" && V.type === "file"))
          )
            var oe = rv;
          else if (mp(V))
            if (vp) oe = lv;
            else {
              oe = sv;
              var ue = iv;
            }
          else
            (J = V.nodeName) &&
              J.toLowerCase() === "input" &&
              (V.type === "checkbox" || V.type === "radio") &&
              (oe = ov);
          if (oe && (oe = oe(e, R))) {
            gp(X, oe, i, Y);
            break e;
          }
          ue && ue(e, V, R),
            e === "focusout" &&
              (ue = V._wrapperState) &&
              ue.controlled &&
              V.type === "number" &&
              Ln(V, "number", V.value);
        }
        switch (((ue = R ? Ls(R) : window), e)) {
          case "focusin":
            (mp(ue) || ue.contentEditable === "true") &&
              ((Ds = ue), (Ku = R), (Io = null));
            break;
          case "focusout":
            Io = Ku = Ds = null;
            break;
          case "mousedown":
            Zu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Zu = !1), Tp(X, i, Y);
            break;
          case "selectionchange":
            if (cv) break;
          case "keydown":
          case "keyup":
            Tp(X, i, Y);
        }
        var ce;
        if (qu)
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
          Os
            ? pp(e, i) && (we = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              (we = "onCompositionStart");
        we &&
          (cp &&
            i.locale !== "ko" &&
            (Os || we !== "onCompositionStart"
              ? we === "onCompositionEnd" && Os && (ce = sp())
              : ((yi = Y),
                (Uu = "value" in yi ? yi.value : yi.textContent),
                (Os = !0))),
          (ue = ea(R, we)),
          0 < ue.length &&
            ((we = new ap(we, e, null, i, Y)),
            X.push({ event: we, listeners: ue }),
            ce
              ? (we.data = ce)
              : ((ce = hp(i)), ce !== null && (we.data = ce)))),
          (ce = Zg ? Jg(e, i) : ev(e, i)) &&
            ((R = ea(R, "onBeforeInput")),
            0 < R.length &&
              ((Y = new ap("onBeforeInput", "beforeinput", null, i, Y)),
              X.push({ event: Y, listeners: R }),
              (Y.data = ce)));
      }
      Dp(X, t);
    });
  }
  function $o(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function ea(e, t) {
    for (var i = t + "Capture", l = []; e !== null; ) {
      var c = e,
        p = c.stateNode;
      c.tag === 5 &&
        p !== null &&
        ((c = p),
        (p = ze(e, i)),
        p != null && l.unshift($o(e, p, c)),
        (p = ze(e, t)),
        p != null && l.push($o(e, p, c))),
        (e = e.return);
    }
    return l;
  }
  function As(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ap(e, t, i, l, c) {
    for (var p = t._reactName, v = []; i !== null && i !== l; ) {
      var k = i,
        T = k.alternate,
        R = k.stateNode;
      if (T !== null && T === l) break;
      k.tag === 5 &&
        R !== null &&
        ((k = R),
        c
          ? ((T = ze(i, p)), T != null && v.unshift($o(i, T, k)))
          : c || ((T = ze(i, p)), T != null && v.push($o(i, T, k)))),
        (i = i.return);
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var hv = /\r\n?/g,
    mv = /\u0000|\uFFFD/g;
  function Ip(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        hv,
        `
`
      )
      .replace(mv, "");
  }
  function ta(e, t, i) {
    if (((t = Ip(t)), Ip(e) !== t && i)) throw Error(r(425));
  }
  function na() {}
  var ic = null,
    sc = null;
  function oc(e, t) {
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
  var lc = typeof setTimeout == "function" ? setTimeout : void 0,
    gv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Lp = typeof Promise == "function" ? Promise : void 0,
    vv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Lp < "u"
        ? function (e) {
            return Lp.resolve(null).then(e).catch(xv);
          }
        : lc;
  function xv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ac(e, t) {
    var i = t,
      l = 0;
    do {
      var c = i.nextSibling;
      if ((e.removeChild(i), c && c.nodeType === 8))
        if (((i = c.data), i === "/$")) {
          if (l === 0) {
            e.removeChild(c), Mo(t);
            return;
          }
          l--;
        } else (i !== "$" && i !== "$?" && i !== "$!") || l++;
      i = c;
    } while (i);
    Mo(t);
  }
  function wi(e) {
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
  function Fp(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Is = Math.random().toString(36).slice(2),
    Fr = "__reactFiber$" + Is,
    Uo = "__reactProps$" + Is,
    Zr = "__reactContainer$" + Is,
    uc = "__reactEvents$" + Is,
    yv = "__reactListeners$" + Is,
    _v = "__reactHandles$" + Is;
  function Ki(e) {
    var t = e[Fr];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if ((t = i[Zr] || i[Fr])) {
        if (
          ((i = t.alternate),
          t.child !== null || (i !== null && i.child !== null))
        )
          for (e = Fp(e); e !== null; ) {
            if ((i = e[Fr])) return i;
            e = Fp(e);
          }
        return t;
      }
      (e = i), (i = e.parentNode);
    }
    return null;
  }
  function Bo(e) {
    return (
      (e = e[Fr] || e[Zr]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Ls(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(r(33));
  }
  function ra(e) {
    return e[Uo] || null;
  }
  var cc = [],
    Fs = -1;
  function ki(e) {
    return { current: e };
  }
  function rt(e) {
    0 > Fs || ((e.current = cc[Fs]), (cc[Fs] = null), Fs--);
  }
  function Ke(e, t) {
    Fs++, (cc[Fs] = e.current), (e.current = t);
  }
  var Si = {},
    Zt = ki(Si),
    Nn = ki(!1),
    Zi = Si;
  function $s(e, t) {
    var i = e.type.contextTypes;
    if (!i) return Si;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
      return l.__reactInternalMemoizedMaskedChildContext;
    var c = {},
      p;
    for (p in i) c[p] = t[p];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      c
    );
  }
  function jn(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ia() {
    rt(Nn), rt(Zt);
  }
  function $p(e, t, i) {
    if (Zt.current !== Si) throw Error(r(168));
    Ke(Zt, t), Ke(Nn, i);
  }
  function Up(e, t, i) {
    var l = e.stateNode;
    if (((t = t.childContextTypes), typeof l.getChildContext != "function"))
      return i;
    l = l.getChildContext();
    for (var c in l) if (!(c in t)) throw Error(r(108, _e(e) || "Unknown", c));
    return C({}, i, l);
  }
  function sa(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Si),
      (Zi = Zt.current),
      Ke(Zt, e),
      Ke(Nn, Nn.current),
      !0
    );
  }
  function Bp(e, t, i) {
    var l = e.stateNode;
    if (!l) throw Error(r(169));
    i
      ? ((e = Up(e, t, Zi)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        rt(Nn),
        rt(Zt),
        Ke(Zt, e))
      : rt(Nn),
      Ke(Nn, i);
  }
  var Jr = null,
    oa = !1,
    fc = !1;
  function Hp(e) {
    Jr === null ? (Jr = [e]) : Jr.push(e);
  }
  function wv(e) {
    (oa = !0), Hp(e);
  }
  function Ci() {
    if (!fc && Jr !== null) {
      fc = !0;
      var e = 0,
        t = Ye;
      try {
        var i = Jr;
        for (Ye = 1; e < i.length; e++) {
          var l = i[e];
          do l = l(!0);
          while (l !== null);
        }
        (Jr = null), (oa = !1);
      } catch (c) {
        throw (Jr !== null && (Jr = Jr.slice(e + 1)), St(Tn, Ci), c);
      } finally {
        (Ye = t), (fc = !1);
      }
    }
    return null;
  }
  var Us = [],
    Bs = 0,
    la = null,
    aa = 0,
    or = [],
    lr = 0,
    Ji = null,
    ei = 1,
    ti = "";
  function es(e, t) {
    (Us[Bs++] = aa), (Us[Bs++] = la), (la = e), (aa = t);
  }
  function Vp(e, t, i) {
    (or[lr++] = ei), (or[lr++] = ti), (or[lr++] = Ji), (Ji = e);
    var l = ei;
    e = ti;
    var c = 32 - Tr(l) - 1;
    (l &= ~(1 << c)), (i += 1);
    var p = 32 - Tr(t) + c;
    if (30 < p) {
      var v = c - (c % 5);
      (p = (l & ((1 << v) - 1)).toString(32)),
        (l >>= v),
        (c -= v),
        (ei = (1 << (32 - Tr(t) + c)) | (i << c) | l),
        (ti = p + e);
    } else (ei = (1 << p) | (i << c) | l), (ti = e);
  }
  function dc(e) {
    e.return !== null && (es(e, 1), Vp(e, 1, 0));
  }
  function pc(e) {
    for (; e === la; )
      (la = Us[--Bs]), (Us[Bs] = null), (aa = Us[--Bs]), (Us[Bs] = null);
    for (; e === Ji; )
      (Ji = or[--lr]),
        (or[lr] = null),
        (ti = or[--lr]),
        (or[lr] = null),
        (ei = or[--lr]),
        (or[lr] = null);
  }
  var Hn = null,
    Vn = null,
    st = !1,
    jr = null;
  function Yp(e, t) {
    var i = fr(5, null, null, 0);
    (i.elementType = "DELETED"),
      (i.stateNode = t),
      (i.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [i]), (e.flags |= 16)) : t.push(i);
  }
  function Wp(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (t =
            t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Hn = e), (Vn = wi(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Hn = e), (Vn = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((i = Ji !== null ? { id: ei, overflow: ti } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = fr(18, null, null, 0)),
              (i.stateNode = t),
              (i.return = e),
              (e.child = i),
              (Hn = e),
              (Vn = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function hc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function mc(e) {
    if (st) {
      var t = Vn;
      if (t) {
        var i = t;
        if (!Wp(e, t)) {
          if (hc(e)) throw Error(r(418));
          t = wi(i.nextSibling);
          var l = Hn;
          t && Wp(e, t)
            ? Yp(l, i)
            : ((e.flags = (e.flags & -4097) | 2), (st = !1), (Hn = e));
        }
      } else {
        if (hc(e)) throw Error(r(418));
        (e.flags = (e.flags & -4097) | 2), (st = !1), (Hn = e);
      }
    }
  }
  function qp(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Hn = e;
  }
  function ua(e) {
    if (e !== Hn) return !1;
    if (!st) return qp(e), (st = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !oc(e.type, e.memoizedProps))),
      t && (t = Vn))
    ) {
      if (hc(e)) throw (Xp(), Error(r(418)));
      for (; t; ) Yp(e, t), (t = wi(t.nextSibling));
    }
    if ((qp(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                Vn = wi(e.nextSibling);
                break e;
              }
              t--;
            } else (i !== "$" && i !== "$!" && i !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Vn = null;
      }
    } else Vn = Hn ? wi(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Xp() {
    for (var e = Vn; e; ) e = wi(e.nextSibling);
  }
  function Hs() {
    (Vn = Hn = null), (st = !1);
  }
  function gc(e) {
    jr === null ? (jr = [e]) : jr.push(e);
  }
  var kv = O.ReactCurrentBatchConfig;
  function Ho(e, t, i) {
    if (
      ((e = i.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(r(309));
          var l = i.stateNode;
        }
        if (!l) throw Error(r(147, e));
        var c = l,
          p = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === p
          ? t.ref
          : ((t = function (v) {
              var k = c.refs;
              v === null ? delete k[p] : (k[p] = v);
            }),
            (t._stringRef = p),
            t);
      }
      if (typeof e != "string") throw Error(r(284));
      if (!i._owner) throw Error(r(290, e));
    }
    return e;
  }
  function ca(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        r(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Gp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Qp(e) {
    function t(M, E) {
      if (e) {
        var b = M.deletions;
        b === null ? ((M.deletions = [E]), (M.flags |= 16)) : b.push(E);
      }
    }
    function i(M, E) {
      if (!e) return null;
      for (; E !== null; ) t(M, E), (E = E.sibling);
      return null;
    }
    function l(M, E) {
      for (M = new Map(); E !== null; )
        E.key !== null ? M.set(E.key, E) : M.set(E.index, E), (E = E.sibling);
      return M;
    }
    function c(M, E) {
      return (M = Ri(M, E)), (M.index = 0), (M.sibling = null), M;
    }
    function p(M, E, b) {
      return (
        (M.index = b),
        e
          ? ((b = M.alternate),
            b !== null
              ? ((b = b.index), b < E ? ((M.flags |= 2), E) : b)
              : ((M.flags |= 2), E))
          : ((M.flags |= 1048576), E)
      );
    }
    function v(M) {
      return e && M.alternate === null && (M.flags |= 2), M;
    }
    function k(M, E, b, G) {
      return E === null || E.tag !== 6
        ? ((E = af(b, M.mode, G)), (E.return = M), E)
        : ((E = c(E, b)), (E.return = M), E);
    }
    function T(M, E, b, G) {
      var oe = b.type;
      return oe === z
        ? Y(M, E, b.props.children, G, b.key)
        : E !== null &&
          (E.elementType === oe ||
            (typeof oe == "object" &&
              oe !== null &&
              oe.$$typeof === de &&
              Gp(oe) === E.type))
        ? ((G = c(E, b.props)), (G.ref = Ho(M, E, b)), (G.return = M), G)
        : ((G = Da(b.type, b.key, b.props, null, M.mode, G)),
          (G.ref = Ho(M, E, b)),
          (G.return = M),
          G);
    }
    function R(M, E, b, G) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== b.containerInfo ||
        E.stateNode.implementation !== b.implementation
        ? ((E = uf(b, M.mode, G)), (E.return = M), E)
        : ((E = c(E, b.children || [])), (E.return = M), E);
    }
    function Y(M, E, b, G, oe) {
      return E === null || E.tag !== 7
        ? ((E = as(b, M.mode, G, oe)), (E.return = M), E)
        : ((E = c(E, b)), (E.return = M), E);
    }
    function X(M, E, b) {
      if ((typeof E == "string" && E !== "") || typeof E == "number")
        return (E = af("" + E, M.mode, b)), (E.return = M), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case L:
            return (
              (b = Da(E.type, E.key, E.props, null, M.mode, b)),
              (b.ref = Ho(M, null, E)),
              (b.return = M),
              b
            );
          case U:
            return (E = uf(E, M.mode, b)), (E.return = M), E;
          case de:
            var G = E._init;
            return X(M, G(E._payload), b);
        }
        if (kn(E) || Z(E))
          return (E = as(E, M.mode, b, null)), (E.return = M), E;
        ca(M, E);
      }
      return null;
    }
    function V(M, E, b, G) {
      var oe = E !== null ? E.key : null;
      if ((typeof b == "string" && b !== "") || typeof b == "number")
        return oe !== null ? null : k(M, E, "" + b, G);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case L:
            return b.key === oe ? T(M, E, b, G) : null;
          case U:
            return b.key === oe ? R(M, E, b, G) : null;
          case de:
            return (oe = b._init), V(M, E, oe(b._payload), G);
        }
        if (kn(b) || Z(b)) return oe !== null ? null : Y(M, E, b, G, null);
        ca(M, b);
      }
      return null;
    }
    function J(M, E, b, G, oe) {
      if ((typeof G == "string" && G !== "") || typeof G == "number")
        return (M = M.get(b) || null), k(E, M, "" + G, oe);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case L:
            return (
              (M = M.get(G.key === null ? b : G.key) || null), T(E, M, G, oe)
            );
          case U:
            return (
              (M = M.get(G.key === null ? b : G.key) || null), R(E, M, G, oe)
            );
          case de:
            var ue = G._init;
            return J(M, E, b, ue(G._payload), oe);
        }
        if (kn(G) || Z(G)) return (M = M.get(b) || null), Y(E, M, G, oe, null);
        ca(E, G);
      }
      return null;
    }
    function re(M, E, b, G) {
      for (
        var oe = null, ue = null, ce = E, we = (E = 0), Lt = null;
        ce !== null && we < b.length;
        we++
      ) {
        ce.index > we ? ((Lt = ce), (ce = null)) : (Lt = ce.sibling);
        var $e = V(M, ce, b[we], G);
        if ($e === null) {
          ce === null && (ce = Lt);
          break;
        }
        e && ce && $e.alternate === null && t(M, ce),
          (E = p($e, E, we)),
          ue === null ? (oe = $e) : (ue.sibling = $e),
          (ue = $e),
          (ce = Lt);
      }
      if (we === b.length) return i(M, ce), st && es(M, we), oe;
      if (ce === null) {
        for (; we < b.length; we++)
          (ce = X(M, b[we], G)),
            ce !== null &&
              ((E = p(ce, E, we)),
              ue === null ? (oe = ce) : (ue.sibling = ce),
              (ue = ce));
        return st && es(M, we), oe;
      }
      for (ce = l(M, ce); we < b.length; we++)
        (Lt = J(ce, M, we, b[we], G)),
          Lt !== null &&
            (e &&
              Lt.alternate !== null &&
              ce.delete(Lt.key === null ? we : Lt.key),
            (E = p(Lt, E, we)),
            ue === null ? (oe = Lt) : (ue.sibling = Lt),
            (ue = Lt));
      return (
        e &&
          ce.forEach(function (Oi) {
            return t(M, Oi);
          }),
        st && es(M, we),
        oe
      );
    }
    function ie(M, E, b, G) {
      var oe = Z(b);
      if (typeof oe != "function") throw Error(r(150));
      if (((b = oe.call(b)), b == null)) throw Error(r(151));
      for (
        var ue = (oe = null), ce = E, we = (E = 0), Lt = null, $e = b.next();
        ce !== null && !$e.done;
        we++, $e = b.next()
      ) {
        ce.index > we ? ((Lt = ce), (ce = null)) : (Lt = ce.sibling);
        var Oi = V(M, ce, $e.value, G);
        if (Oi === null) {
          ce === null && (ce = Lt);
          break;
        }
        e && ce && Oi.alternate === null && t(M, ce),
          (E = p(Oi, E, we)),
          ue === null ? (oe = Oi) : (ue.sibling = Oi),
          (ue = Oi),
          (ce = Lt);
      }
      if ($e.done) return i(M, ce), st && es(M, we), oe;
      if (ce === null) {
        for (; !$e.done; we++, $e = b.next())
          ($e = X(M, $e.value, G)),
            $e !== null &&
              ((E = p($e, E, we)),
              ue === null ? (oe = $e) : (ue.sibling = $e),
              (ue = $e));
        return st && es(M, we), oe;
      }
      for (ce = l(M, ce); !$e.done; we++, $e = b.next())
        ($e = J(ce, M, we, $e.value, G)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              ce.delete($e.key === null ? we : $e.key),
            (E = p($e, E, we)),
            ue === null ? (oe = $e) : (ue.sibling = $e),
            (ue = $e));
      return (
        e &&
          ce.forEach(function (tx) {
            return t(M, tx);
          }),
        st && es(M, we),
        oe
      );
    }
    function xt(M, E, b, G) {
      if (
        (typeof b == "object" &&
          b !== null &&
          b.type === z &&
          b.key === null &&
          (b = b.props.children),
        typeof b == "object" && b !== null)
      ) {
        switch (b.$$typeof) {
          case L:
            e: {
              for (var oe = b.key, ue = E; ue !== null; ) {
                if (ue.key === oe) {
                  if (((oe = b.type), oe === z)) {
                    if (ue.tag === 7) {
                      i(M, ue.sibling),
                        (E = c(ue, b.props.children)),
                        (E.return = M),
                        (M = E);
                      break e;
                    }
                  } else if (
                    ue.elementType === oe ||
                    (typeof oe == "object" &&
                      oe !== null &&
                      oe.$$typeof === de &&
                      Gp(oe) === ue.type)
                  ) {
                    i(M, ue.sibling),
                      (E = c(ue, b.props)),
                      (E.ref = Ho(M, ue, b)),
                      (E.return = M),
                      (M = E);
                    break e;
                  }
                  i(M, ue);
                  break;
                } else t(M, ue);
                ue = ue.sibling;
              }
              b.type === z
                ? ((E = as(b.props.children, M.mode, G, b.key)),
                  (E.return = M),
                  (M = E))
                : ((G = Da(b.type, b.key, b.props, null, M.mode, G)),
                  (G.ref = Ho(M, E, b)),
                  (G.return = M),
                  (M = G));
            }
            return v(M);
          case U:
            e: {
              for (ue = b.key; E !== null; ) {
                if (E.key === ue)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === b.containerInfo &&
                    E.stateNode.implementation === b.implementation
                  ) {
                    i(M, E.sibling),
                      (E = c(E, b.children || [])),
                      (E.return = M),
                      (M = E);
                    break e;
                  } else {
                    i(M, E);
                    break;
                  }
                else t(M, E);
                E = E.sibling;
              }
              (E = uf(b, M.mode, G)), (E.return = M), (M = E);
            }
            return v(M);
          case de:
            return (ue = b._init), xt(M, E, ue(b._payload), G);
        }
        if (kn(b)) return re(M, E, b, G);
        if (Z(b)) return ie(M, E, b, G);
        ca(M, b);
      }
      return (typeof b == "string" && b !== "") || typeof b == "number"
        ? ((b = "" + b),
          E !== null && E.tag === 6
            ? (i(M, E.sibling), (E = c(E, b)), (E.return = M), (M = E))
            : (i(M, E), (E = af(b, M.mode, G)), (E.return = M), (M = E)),
          v(M))
        : i(M, E);
    }
    return xt;
  }
  var Vs = Qp(!0),
    Kp = Qp(!1),
    fa = ki(null),
    da = null,
    Ys = null,
    vc = null;
  function xc() {
    vc = Ys = da = null;
  }
  function yc(e) {
    var t = fa.current;
    rt(fa), (e._currentValue = t);
  }
  function _c(e, t, i) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function Ws(e, t) {
    (da = e),
      (vc = Ys = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (En = !0), (e.firstContext = null));
  }
  function ar(e) {
    var t = e._currentValue;
    if (vc !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Ys === null)) {
        if (da === null) throw Error(r(308));
        (Ys = e), (da.dependencies = { lanes: 0, firstContext: e });
      } else Ys = Ys.next = e;
    return t;
  }
  var ts = null;
  function wc(e) {
    ts === null ? (ts = [e]) : ts.push(e);
  }
  function Zp(e, t, i, l) {
    var c = t.interleaved;
    return (
      c === null ? ((i.next = i), wc(t)) : ((i.next = c.next), (c.next = i)),
      (t.interleaved = i),
      ni(e, l)
    );
  }
  function ni(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (i = e.alternate),
        i !== null && (i.childLanes |= t),
        (i = e),
        (e = e.return);
    return i.tag === 3 ? i.stateNode : null;
  }
  var Ti = !1;
  function kc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Jp(e, t) {
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
  function ri(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ni(e, t, i) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Fe & 2) !== 0)) {
      var c = l.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (l.pending = t),
        ni(e, i)
      );
    }
    return (
      (c = l.interleaved),
      c === null ? ((t.next = t), wc(l)) : ((t.next = c.next), (c.next = t)),
      (l.interleaved = t),
      ni(e, i)
    );
  }
  function pa(e, t, i) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (i & 4194240) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (i |= l), (t.lanes = i), Au(e, i);
    }
  }
  function eh(e, t) {
    var i = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), i === l)) {
      var c = null,
        p = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var v = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          p === null ? (c = p = v) : (p = p.next = v), (i = i.next);
        } while (i !== null);
        p === null ? (c = p = t) : (p = p.next = t);
      } else c = p = t;
      (i = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: p,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = i);
      return;
    }
    (e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = t) : (e.next = t),
      (i.lastBaseUpdate = t);
  }
  function ha(e, t, i, l) {
    var c = e.updateQueue;
    Ti = !1;
    var p = c.firstBaseUpdate,
      v = c.lastBaseUpdate,
      k = c.shared.pending;
    if (k !== null) {
      c.shared.pending = null;
      var T = k,
        R = T.next;
      (T.next = null), v === null ? (p = R) : (v.next = R), (v = T);
      var Y = e.alternate;
      Y !== null &&
        ((Y = Y.updateQueue),
        (k = Y.lastBaseUpdate),
        k !== v &&
          (k === null ? (Y.firstBaseUpdate = R) : (k.next = R),
          (Y.lastBaseUpdate = T)));
    }
    if (p !== null) {
      var X = c.baseState;
      (v = 0), (Y = R = T = null), (k = p);
      do {
        var V = k.lane,
          J = k.eventTime;
        if ((l & V) === V) {
          Y !== null &&
            (Y = Y.next =
              {
                eventTime: J,
                lane: 0,
                tag: k.tag,
                payload: k.payload,
                callback: k.callback,
                next: null,
              });
          e: {
            var re = e,
              ie = k;
            switch (((V = t), (J = i), ie.tag)) {
              case 1:
                if (((re = ie.payload), typeof re == "function")) {
                  X = re.call(J, X, V);
                  break e;
                }
                X = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ie.payload),
                  (V = typeof re == "function" ? re.call(J, X, V) : re),
                  V == null)
                )
                  break e;
                X = C({}, X, V);
                break e;
              case 2:
                Ti = !0;
            }
          }
          k.callback !== null &&
            k.lane !== 0 &&
            ((e.flags |= 64),
            (V = c.effects),
            V === null ? (c.effects = [k]) : V.push(k));
        } else
          (J = {
            eventTime: J,
            lane: V,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null,
          }),
            Y === null ? ((R = Y = J), (T = X)) : (Y = Y.next = J),
            (v |= V);
        if (((k = k.next), k === null)) {
          if (((k = c.shared.pending), k === null)) break;
          (V = k),
            (k = V.next),
            (V.next = null),
            (c.lastBaseUpdate = V),
            (c.shared.pending = null);
        }
      } while (!0);
      if (
        (Y === null && (T = X),
        (c.baseState = T),
        (c.firstBaseUpdate = R),
        (c.lastBaseUpdate = Y),
        (t = c.shared.interleaved),
        t !== null)
      ) {
        c = t;
        do (v |= c.lane), (c = c.next);
        while (c !== t);
      } else p === null && (c.shared.lanes = 0);
      (is |= v), (e.lanes = v), (e.memoizedState = X);
    }
  }
  function th(e, t, i) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var l = e[t],
          c = l.callback;
        if (c !== null) {
          if (((l.callback = null), (l = i), typeof c != "function"))
            throw Error(r(191, c));
          c.call(l);
        }
      }
  }
  var Vo = {},
    $r = ki(Vo),
    Yo = ki(Vo),
    Wo = ki(Vo);
  function ns(e) {
    if (e === Vo) throw Error(r(174));
    return e;
  }
  function Sc(e, t) {
    switch ((Ke(Wo, t), Ke(Yo, e), Ke($r, Vo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : et(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = et(t, e));
    }
    rt($r), Ke($r, t);
  }
  function qs() {
    rt($r), rt(Yo), rt(Wo);
  }
  function nh(e) {
    ns(Wo.current);
    var t = ns($r.current),
      i = et(t, e.type);
    t !== i && (Ke(Yo, e), Ke($r, i));
  }
  function Cc(e) {
    Yo.current === e && (rt($r), rt(Yo));
  }
  var at = ki(0);
  function ma(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === "$?" || i.data === "$!")
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
  var Tc = [];
  function Nc() {
    for (var e = 0; e < Tc.length; e++)
      Tc[e]._workInProgressVersionPrimary = null;
    Tc.length = 0;
  }
  var ga = O.ReactCurrentDispatcher,
    jc = O.ReactCurrentBatchConfig,
    rs = 0,
    ut = null,
    Pt = null,
    At = null,
    va = !1,
    qo = !1,
    Xo = 0,
    Sv = 0;
  function Jt() {
    throw Error(r(321));
  }
  function Ec(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!Nr(e[i], t[i])) return !1;
    return !0;
  }
  function Pc(e, t, i, l, c, p) {
    if (
      ((rs = p),
      (ut = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ga.current = e === null || e.memoizedState === null ? jv : Ev),
      (e = i(l, c)),
      qo)
    ) {
      p = 0;
      do {
        if (((qo = !1), (Xo = 0), 25 <= p)) throw Error(r(301));
        (p += 1),
          (At = Pt = null),
          (t.updateQueue = null),
          (ga.current = Pv),
          (e = i(l, c));
      } while (qo);
    }
    if (
      ((ga.current = _a),
      (t = Pt !== null && Pt.next !== null),
      (rs = 0),
      (At = Pt = ut = null),
      (va = !1),
      t)
    )
      throw Error(r(300));
    return e;
  }
  function Mc() {
    var e = Xo !== 0;
    return (Xo = 0), e;
  }
  function Ur() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return At === null ? (ut.memoizedState = At = e) : (At = At.next = e), At;
  }
  function ur() {
    if (Pt === null) {
      var e = ut.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Pt.next;
    var t = At === null ? ut.memoizedState : At.next;
    if (t !== null) (At = t), (Pt = e);
    else {
      if (e === null) throw Error(r(310));
      (Pt = e),
        (e = {
          memoizedState: Pt.memoizedState,
          baseState: Pt.baseState,
          baseQueue: Pt.baseQueue,
          queue: Pt.queue,
          next: null,
        }),
        At === null ? (ut.memoizedState = At = e) : (At = At.next = e);
    }
    return At;
  }
  function Go(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function bc(e) {
    var t = ur(),
      i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = e;
    var l = Pt,
      c = l.baseQueue,
      p = i.pending;
    if (p !== null) {
      if (c !== null) {
        var v = c.next;
        (c.next = p.next), (p.next = v);
      }
      (l.baseQueue = c = p), (i.pending = null);
    }
    if (c !== null) {
      (p = c.next), (l = l.baseState);
      var k = (v = null),
        T = null,
        R = p;
      do {
        var Y = R.lane;
        if ((rs & Y) === Y)
          T !== null &&
            (T = T.next =
              {
                lane: 0,
                action: R.action,
                hasEagerState: R.hasEagerState,
                eagerState: R.eagerState,
                next: null,
              }),
            (l = R.hasEagerState ? R.eagerState : e(l, R.action));
        else {
          var X = {
            lane: Y,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          };
          T === null ? ((k = T = X), (v = l)) : (T = T.next = X),
            (ut.lanes |= Y),
            (is |= Y);
        }
        R = R.next;
      } while (R !== null && R !== p);
      T === null ? (v = l) : (T.next = k),
        Nr(l, t.memoizedState) || (En = !0),
        (t.memoizedState = l),
        (t.baseState = v),
        (t.baseQueue = T),
        (i.lastRenderedState = l);
    }
    if (((e = i.interleaved), e !== null)) {
      c = e;
      do (p = c.lane), (ut.lanes |= p), (is |= p), (c = c.next);
      while (c !== e);
    } else c === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function Rc(e) {
    var t = ur(),
      i = t.queue;
    if (i === null) throw Error(r(311));
    i.lastRenderedReducer = e;
    var l = i.dispatch,
      c = i.pending,
      p = t.memoizedState;
    if (c !== null) {
      i.pending = null;
      var v = (c = c.next);
      do (p = e(p, v.action)), (v = v.next);
      while (v !== c);
      Nr(p, t.memoizedState) || (En = !0),
        (t.memoizedState = p),
        t.baseQueue === null && (t.baseState = p),
        (i.lastRenderedState = p);
    }
    return [p, l];
  }
  function rh() {}
  function ih(e, t) {
    var i = ut,
      l = ur(),
      c = t(),
      p = !Nr(l.memoizedState, c);
    if (
      (p && ((l.memoizedState = c), (En = !0)),
      (l = l.queue),
      Oc(lh.bind(null, i, l, e), [e]),
      l.getSnapshot !== t || p || (At !== null && At.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Qo(9, oh.bind(null, i, l, c, t), void 0, null),
        It === null)
      )
        throw Error(r(349));
      (rs & 30) !== 0 || sh(i, t, c);
    }
    return c;
  }
  function sh(e, t, i) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: i }),
      (t = ut.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ut.updateQueue = t),
          (t.stores = [e]))
        : ((i = t.stores), i === null ? (t.stores = [e]) : i.push(e));
  }
  function oh(e, t, i, l) {
    (t.value = i), (t.getSnapshot = l), ah(t) && uh(e);
  }
  function lh(e, t, i) {
    return i(function () {
      ah(t) && uh(e);
    });
  }
  function ah(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !Nr(e, i);
    } catch {
      return !0;
    }
  }
  function uh(e) {
    var t = ni(e, 1);
    t !== null && br(t, e, 1, -1);
  }
  function ch(e) {
    var t = Ur();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Go,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Nv.bind(null, ut, e)),
      [t.memoizedState, e]
    );
  }
  function Qo(e, t, i, l) {
    return (
      (e = { tag: e, create: t, destroy: i, deps: l, next: null }),
      (t = ut.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ut.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((i = t.lastEffect),
          i === null
            ? (t.lastEffect = e.next = e)
            : ((l = i.next), (i.next = e), (e.next = l), (t.lastEffect = e))),
      e
    );
  }
  function fh() {
    return ur().memoizedState;
  }
  function xa(e, t, i, l) {
    var c = Ur();
    (ut.flags |= e),
      (c.memoizedState = Qo(1 | t, i, void 0, l === void 0 ? null : l));
  }
  function ya(e, t, i, l) {
    var c = ur();
    l = l === void 0 ? null : l;
    var p = void 0;
    if (Pt !== null) {
      var v = Pt.memoizedState;
      if (((p = v.destroy), l !== null && Ec(l, v.deps))) {
        c.memoizedState = Qo(t, i, p, l);
        return;
      }
    }
    (ut.flags |= e), (c.memoizedState = Qo(1 | t, i, p, l));
  }
  function dh(e, t) {
    return xa(8390656, 8, e, t);
  }
  function Oc(e, t) {
    return ya(2048, 8, e, t);
  }
  function ph(e, t) {
    return ya(4, 2, e, t);
  }
  function hh(e, t) {
    return ya(4, 4, e, t);
  }
  function mh(e, t) {
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
  function gh(e, t, i) {
    return (
      (i = i != null ? i.concat([e]) : null), ya(4, 4, mh.bind(null, t, e), i)
    );
  }
  function Dc() {}
  function vh(e, t) {
    var i = ur();
    t = t === void 0 ? null : t;
    var l = i.memoizedState;
    return l !== null && t !== null && Ec(t, l[1])
      ? l[0]
      : ((i.memoizedState = [e, t]), e);
  }
  function xh(e, t) {
    var i = ur();
    t = t === void 0 ? null : t;
    var l = i.memoizedState;
    return l !== null && t !== null && Ec(t, l[1])
      ? l[0]
      : ((e = e()), (i.memoizedState = [e, t]), e);
  }
  function yh(e, t, i) {
    return (rs & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (En = !0)), (e.memoizedState = i))
      : (Nr(i, t) ||
          ((i = Gd()), (ut.lanes |= i), (is |= i), (e.baseState = !0)),
        t);
  }
  function Cv(e, t) {
    var i = Ye;
    (Ye = i !== 0 && 4 > i ? i : 4), e(!0);
    var l = jc.transition;
    jc.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ye = i), (jc.transition = l);
    }
  }
  function _h() {
    return ur().memoizedState;
  }
  function Tv(e, t, i) {
    var l = Mi(e);
    if (
      ((i = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      wh(e))
    )
      kh(t, i);
    else if (((i = Zp(e, t, i, l)), i !== null)) {
      var c = hn();
      br(i, e, l, c), Sh(i, t, l);
    }
  }
  function Nv(e, t, i) {
    var l = Mi(e),
      c = {
        lane: l,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (wh(e)) kh(t, c);
    else {
      var p = e.alternate;
      if (
        e.lanes === 0 &&
        (p === null || p.lanes === 0) &&
        ((p = t.lastRenderedReducer), p !== null)
      )
        try {
          var v = t.lastRenderedState,
            k = p(v, i);
          if (((c.hasEagerState = !0), (c.eagerState = k), Nr(k, v))) {
            var T = t.interleaved;
            T === null
              ? ((c.next = c), wc(t))
              : ((c.next = T.next), (T.next = c)),
              (t.interleaved = c);
            return;
          }
        } catch {
        } finally {
        }
      (i = Zp(e, t, c, l)),
        i !== null && ((c = hn()), br(i, e, l, c), Sh(i, t, l));
    }
  }
  function wh(e) {
    var t = e.alternate;
    return e === ut || (t !== null && t === ut);
  }
  function kh(e, t) {
    qo = va = !0;
    var i = e.pending;
    i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (e.pending = t);
  }
  function Sh(e, t, i) {
    if ((i & 4194240) !== 0) {
      var l = t.lanes;
      (l &= e.pendingLanes), (i |= l), (t.lanes = i), Au(e, i);
    }
  }
  var _a = {
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
    jv = {
      readContext: ar,
      useCallback: function (e, t) {
        return (Ur().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ar,
      useEffect: dh,
      useImperativeHandle: function (e, t, i) {
        return (
          (i = i != null ? i.concat([e]) : null),
          xa(4194308, 4, mh.bind(null, t, e), i)
        );
      },
      useLayoutEffect: function (e, t) {
        return xa(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return xa(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var i = Ur();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (i.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, i) {
        var l = Ur();
        return (
          (t = i !== void 0 ? i(t) : t),
          (l.memoizedState = l.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (l.queue = e),
          (e = e.dispatch = Tv.bind(null, ut, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ur();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: ch,
      useDebugValue: Dc,
      useDeferredValue: function (e) {
        return (Ur().memoizedState = e);
      },
      useTransition: function () {
        var e = ch(!1),
          t = e[0];
        return (e = Cv.bind(null, e[1])), (Ur().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, i) {
        var l = ut,
          c = Ur();
        if (st) {
          if (i === void 0) throw Error(r(407));
          i = i();
        } else {
          if (((i = t()), It === null)) throw Error(r(349));
          (rs & 30) !== 0 || sh(l, t, i);
        }
        c.memoizedState = i;
        var p = { value: i, getSnapshot: t };
        return (
          (c.queue = p),
          dh(lh.bind(null, l, p, e), [e]),
          (l.flags |= 2048),
          Qo(9, oh.bind(null, l, p, i, t), void 0, null),
          i
        );
      },
      useId: function () {
        var e = Ur(),
          t = It.identifierPrefix;
        if (st) {
          var i = ti,
            l = ei;
          (i = (l & ~(1 << (32 - Tr(l) - 1))).toString(32) + i),
            (t = ":" + t + "R" + i),
            (i = Xo++),
            0 < i && (t += "H" + i.toString(32)),
            (t += ":");
        } else (i = Sv++), (t = ":" + t + "r" + i.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Ev = {
      readContext: ar,
      useCallback: vh,
      useContext: ar,
      useEffect: Oc,
      useImperativeHandle: gh,
      useInsertionEffect: ph,
      useLayoutEffect: hh,
      useMemo: xh,
      useReducer: bc,
      useRef: fh,
      useState: function () {
        return bc(Go);
      },
      useDebugValue: Dc,
      useDeferredValue: function (e) {
        var t = ur();
        return yh(t, Pt.memoizedState, e);
      },
      useTransition: function () {
        var e = bc(Go)[0],
          t = ur().memoizedState;
        return [e, t];
      },
      useMutableSource: rh,
      useSyncExternalStore: ih,
      useId: _h,
      unstable_isNewReconciler: !1,
    },
    Pv = {
      readContext: ar,
      useCallback: vh,
      useContext: ar,
      useEffect: Oc,
      useImperativeHandle: gh,
      useInsertionEffect: ph,
      useLayoutEffect: hh,
      useMemo: xh,
      useReducer: Rc,
      useRef: fh,
      useState: function () {
        return Rc(Go);
      },
      useDebugValue: Dc,
      useDeferredValue: function (e) {
        var t = ur();
        return Pt === null ? (t.memoizedState = e) : yh(t, Pt.memoizedState, e);
      },
      useTransition: function () {
        var e = Rc(Go)[0],
          t = ur().memoizedState;
        return [e, t];
      },
      useMutableSource: rh,
      useSyncExternalStore: ih,
      useId: _h,
      unstable_isNewReconciler: !1,
    };
  function Er(e, t) {
    if (e && e.defaultProps) {
      (t = C({}, t)), (e = e.defaultProps);
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function zc(e, t, i, l) {
    (t = e.memoizedState),
      (i = i(l, t)),
      (i = i == null ? t : C({}, t, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var wa = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Ae(e) === e : !1;
    },
    enqueueSetState: function (e, t, i) {
      e = e._reactInternals;
      var l = hn(),
        c = Mi(e),
        p = ri(l, c);
      (p.payload = t),
        i != null && (p.callback = i),
        (t = Ni(e, p, c)),
        t !== null && (br(t, e, c, l), pa(t, e, c));
    },
    enqueueReplaceState: function (e, t, i) {
      e = e._reactInternals;
      var l = hn(),
        c = Mi(e),
        p = ri(l, c);
      (p.tag = 1),
        (p.payload = t),
        i != null && (p.callback = i),
        (t = Ni(e, p, c)),
        t !== null && (br(t, e, c, l), pa(t, e, c));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var i = hn(),
        l = Mi(e),
        c = ri(i, l);
      (c.tag = 2),
        t != null && (c.callback = t),
        (t = Ni(e, c, l)),
        t !== null && (br(t, e, l, i), pa(t, e, l));
    },
  };
  function Ch(e, t, i, l, c, p, v) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, p, v)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Ao(i, l) || !Ao(c, p)
        : !0
    );
  }
  function Th(e, t, i) {
    var l = !1,
      c = Si,
      p = t.contextType;
    return (
      typeof p == "object" && p !== null
        ? (p = ar(p))
        : ((c = jn(t) ? Zi : Zt.current),
          (l = t.contextTypes),
          (p = (l = l != null) ? $s(e, c) : Si)),
      (t = new t(i, p)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = wa),
      (e.stateNode = t),
      (t._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = c),
        (e.__reactInternalMemoizedMaskedChildContext = p)),
      t
    );
  }
  function Nh(e, t, i, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(i, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(i, l),
      t.state !== e && wa.enqueueReplaceState(t, t.state, null);
  }
  function Ac(e, t, i, l) {
    var c = e.stateNode;
    (c.props = i), (c.state = e.memoizedState), (c.refs = {}), kc(e);
    var p = t.contextType;
    typeof p == "object" && p !== null
      ? (c.context = ar(p))
      : ((p = jn(t) ? Zi : Zt.current), (c.context = $s(e, p))),
      (c.state = e.memoizedState),
      (p = t.getDerivedStateFromProps),
      typeof p == "function" && (zc(e, t, p, i), (c.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function" ||
        (typeof c.UNSAFE_componentWillMount != "function" &&
          typeof c.componentWillMount != "function") ||
        ((t = c.state),
        typeof c.componentWillMount == "function" && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == "function" &&
          c.UNSAFE_componentWillMount(),
        t !== c.state && wa.enqueueReplaceState(c, c.state, null),
        ha(e, i, c, l),
        (c.state = e.memoizedState)),
      typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Xs(e, t) {
    try {
      var i = "",
        l = t;
      do (i += me(l)), (l = l.return);
      while (l);
      var c = i;
    } catch (p) {
      c =
        `
Error generating stack: ` +
        p.message +
        `
` +
        p.stack;
    }
    return { value: e, source: t, stack: c, digest: null };
  }
  function Ic(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function Lc(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var Mv = typeof WeakMap == "function" ? WeakMap : Map;
  function jh(e, t, i) {
    (i = ri(-1, i)), (i.tag = 3), (i.payload = { element: null });
    var l = t.value;
    return (
      (i.callback = function () {
        Ea || ((Ea = !0), (Jc = l)), Lc(e, t);
      }),
      i
    );
  }
  function Eh(e, t, i) {
    (i = ri(-1, i)), (i.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var c = t.value;
      (i.payload = function () {
        return l(c);
      }),
        (i.callback = function () {
          Lc(e, t);
        });
    }
    var p = e.stateNode;
    return (
      p !== null &&
        typeof p.componentDidCatch == "function" &&
        (i.callback = function () {
          Lc(e, t),
            typeof l != "function" &&
              (Ei === null ? (Ei = new Set([this])) : Ei.add(this));
          var v = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: v !== null ? v : "",
          });
        }),
      i
    );
  }
  function Ph(e, t, i) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Mv();
      var c = new Set();
      l.set(t, c);
    } else (c = l.get(t)), c === void 0 && ((c = new Set()), l.set(t, c));
    c.has(i) || (c.add(i), (e = Vv.bind(null, e, t, i)), t.then(e, e));
  }
  function Mh(e) {
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
  function bh(e, t, i, l, c) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((t = ri(-1, 1)), (t.tag = 2), Ni(i, t, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = c), e);
  }
  var bv = O.ReactCurrentOwner,
    En = !1;
  function pn(e, t, i, l) {
    t.child = e === null ? Kp(t, null, i, l) : Vs(t, e.child, i, l);
  }
  function Rh(e, t, i, l, c) {
    i = i.render;
    var p = t.ref;
    return (
      Ws(t, c),
      (l = Pc(e, t, i, l, p, c)),
      (i = Mc()),
      e !== null && !En
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~c),
          ii(e, t, c))
        : (st && i && dc(t), (t.flags |= 1), pn(e, t, l, c), t.child)
    );
  }
  function Oh(e, t, i, l, c) {
    if (e === null) {
      var p = i.type;
      return typeof p == "function" &&
        !lf(p) &&
        p.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((t.tag = 15), (t.type = p), Dh(e, t, p, l, c))
        : ((e = Da(i.type, null, l, t, t.mode, c)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((p = e.child), (e.lanes & c) === 0)) {
      var v = p.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Ao), i(v, l) && e.ref === t.ref)
      )
        return ii(e, t, c);
    }
    return (
      (t.flags |= 1),
      (e = Ri(p, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Dh(e, t, i, l, c) {
    if (e !== null) {
      var p = e.memoizedProps;
      if (Ao(p, l) && e.ref === t.ref)
        if (((En = !1), (t.pendingProps = l = p), (e.lanes & c) !== 0))
          (e.flags & 131072) !== 0 && (En = !0);
        else return (t.lanes = e.lanes), ii(e, t, c);
    }
    return Fc(e, t, i, l, c);
  }
  function zh(e, t, i) {
    var l = t.pendingProps,
      c = l.children,
      p = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ke(Qs, Yn),
          (Yn |= i);
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = p !== null ? p.baseLanes | i : i),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ke(Qs, Yn),
            (Yn |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = p !== null ? p.baseLanes : i),
          Ke(Qs, Yn),
          (Yn |= l);
      }
    else
      p !== null ? ((l = p.baseLanes | i), (t.memoizedState = null)) : (l = i),
        Ke(Qs, Yn),
        (Yn |= l);
    return pn(e, t, c, i), t.child;
  }
  function Ah(e, t) {
    var i = t.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Fc(e, t, i, l, c) {
    var p = jn(i) ? Zi : Zt.current;
    return (
      (p = $s(t, p)),
      Ws(t, c),
      (i = Pc(e, t, i, l, p, c)),
      (l = Mc()),
      e !== null && !En
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~c),
          ii(e, t, c))
        : (st && l && dc(t), (t.flags |= 1), pn(e, t, i, c), t.child)
    );
  }
  function Ih(e, t, i, l, c) {
    if (jn(i)) {
      var p = !0;
      sa(t);
    } else p = !1;
    if ((Ws(t, c), t.stateNode === null))
      Sa(e, t), Th(t, i, l), Ac(t, i, l, c), (l = !0);
    else if (e === null) {
      var v = t.stateNode,
        k = t.memoizedProps;
      v.props = k;
      var T = v.context,
        R = i.contextType;
      typeof R == "object" && R !== null
        ? (R = ar(R))
        : ((R = jn(i) ? Zi : Zt.current), (R = $s(t, R)));
      var Y = i.getDerivedStateFromProps,
        X =
          typeof Y == "function" ||
          typeof v.getSnapshotBeforeUpdate == "function";
      X ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((k !== l || T !== R) && Nh(t, v, l, R)),
        (Ti = !1);
      var V = t.memoizedState;
      (v.state = V),
        ha(t, l, v, c),
        (T = t.memoizedState),
        k !== l || V !== T || Nn.current || Ti
          ? (typeof Y == "function" && (zc(t, i, Y, l), (T = t.memoizedState)),
            (k = Ti || Ch(t, i, k, l, V, T, R))
              ? (X ||
                  (typeof v.UNSAFE_componentWillMount != "function" &&
                    typeof v.componentWillMount != "function") ||
                  (typeof v.componentWillMount == "function" &&
                    v.componentWillMount(),
                  typeof v.UNSAFE_componentWillMount == "function" &&
                    v.UNSAFE_componentWillMount()),
                typeof v.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof v.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = T)),
            (v.props = l),
            (v.state = T),
            (v.context = R),
            (l = k))
          : (typeof v.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (v = t.stateNode),
        Jp(e, t),
        (k = t.memoizedProps),
        (R = t.type === t.elementType ? k : Er(t.type, k)),
        (v.props = R),
        (X = t.pendingProps),
        (V = v.context),
        (T = i.contextType),
        typeof T == "object" && T !== null
          ? (T = ar(T))
          : ((T = jn(i) ? Zi : Zt.current), (T = $s(t, T)));
      var J = i.getDerivedStateFromProps;
      (Y =
        typeof J == "function" ||
        typeof v.getSnapshotBeforeUpdate == "function") ||
        (typeof v.UNSAFE_componentWillReceiveProps != "function" &&
          typeof v.componentWillReceiveProps != "function") ||
        ((k !== X || V !== T) && Nh(t, v, l, T)),
        (Ti = !1),
        (V = t.memoizedState),
        (v.state = V),
        ha(t, l, v, c);
      var re = t.memoizedState;
      k !== X || V !== re || Nn.current || Ti
        ? (typeof J == "function" && (zc(t, i, J, l), (re = t.memoizedState)),
          (R = Ti || Ch(t, i, R, l, V, re, T) || !1)
            ? (Y ||
                (typeof v.UNSAFE_componentWillUpdate != "function" &&
                  typeof v.componentWillUpdate != "function") ||
                (typeof v.componentWillUpdate == "function" &&
                  v.componentWillUpdate(l, re, T),
                typeof v.UNSAFE_componentWillUpdate == "function" &&
                  v.UNSAFE_componentWillUpdate(l, re, T)),
              typeof v.componentDidUpdate == "function" && (t.flags |= 4),
              typeof v.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof v.componentDidUpdate != "function" ||
                (k === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 4),
              typeof v.getSnapshotBeforeUpdate != "function" ||
                (k === e.memoizedProps && V === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = re)),
          (v.props = l),
          (v.state = re),
          (v.context = T),
          (l = R))
        : (typeof v.componentDidUpdate != "function" ||
            (k === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 4),
          typeof v.getSnapshotBeforeUpdate != "function" ||
            (k === e.memoizedProps && V === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return $c(e, t, i, l, p, c);
  }
  function $c(e, t, i, l, c, p) {
    Ah(e, t);
    var v = (t.flags & 128) !== 0;
    if (!l && !v) return c && Bp(t, i, !1), ii(e, t, p);
    (l = t.stateNode), (bv.current = t);
    var k =
      v && typeof i.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (t.flags |= 1),
      e !== null && v
        ? ((t.child = Vs(t, e.child, null, p)), (t.child = Vs(t, null, k, p)))
        : pn(e, t, k, p),
      (t.memoizedState = l.state),
      c && Bp(t, i, !0),
      t.child
    );
  }
  function Lh(e) {
    var t = e.stateNode;
    t.pendingContext
      ? $p(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && $p(e, t.context, !1),
      Sc(e, t.containerInfo);
  }
  function Fh(e, t, i, l, c) {
    return Hs(), gc(c), (t.flags |= 256), pn(e, t, i, l), t.child;
  }
  var Uc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Bc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function $h(e, t, i) {
    var l = t.pendingProps,
      c = at.current,
      p = !1,
      v = (t.flags & 128) !== 0,
      k;
    if (
      ((k = v) ||
        (k = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0),
      k
        ? ((p = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (c |= 1),
      Ke(at, c & 1),
      e === null)
    )
      return (
        mc(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((v = l.children),
            (e = l.fallback),
            p
              ? ((l = t.mode),
                (p = t.child),
                (v = { mode: "hidden", children: v }),
                (l & 1) === 0 && p !== null
                  ? ((p.childLanes = 0), (p.pendingProps = v))
                  : (p = za(v, l, 0, null)),
                (e = as(e, l, i, null)),
                (p.return = t),
                (e.return = t),
                (p.sibling = e),
                (t.child = p),
                (t.child.memoizedState = Bc(i)),
                (t.memoizedState = Uc),
                e)
              : Hc(t, v))
      );
    if (((c = e.memoizedState), c !== null && ((k = c.dehydrated), k !== null)))
      return Rv(e, t, v, l, k, c, i);
    if (p) {
      (p = l.fallback), (v = t.mode), (c = e.child), (k = c.sibling);
      var T = { mode: "hidden", children: l.children };
      return (
        (v & 1) === 0 && t.child !== c
          ? ((l = t.child),
            (l.childLanes = 0),
            (l.pendingProps = T),
            (t.deletions = null))
          : ((l = Ri(c, T)), (l.subtreeFlags = c.subtreeFlags & 14680064)),
        k !== null ? (p = Ri(k, p)) : ((p = as(p, v, i, null)), (p.flags |= 2)),
        (p.return = t),
        (l.return = t),
        (l.sibling = p),
        (t.child = l),
        (l = p),
        (p = t.child),
        (v = e.child.memoizedState),
        (v =
          v === null
            ? Bc(i)
            : {
                baseLanes: v.baseLanes | i,
                cachePool: null,
                transitions: v.transitions,
              }),
        (p.memoizedState = v),
        (p.childLanes = e.childLanes & ~i),
        (t.memoizedState = Uc),
        l
      );
    }
    return (
      (p = e.child),
      (e = p.sibling),
      (l = Ri(p, { mode: "visible", children: l.children })),
      (t.mode & 1) === 0 && (l.lanes = i),
      (l.return = t),
      (l.sibling = null),
      e !== null &&
        ((i = t.deletions),
        i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function Hc(e, t) {
    return (
      (t = za({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ka(e, t, i, l) {
    return (
      l !== null && gc(l),
      Vs(t, e.child, null, i),
      (e = Hc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Rv(e, t, i, l, c, p, v) {
    if (i)
      return t.flags & 256
        ? ((t.flags &= -257), (l = Ic(Error(r(422)))), ka(e, t, v, l))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((p = l.fallback),
          (c = t.mode),
          (l = za({ mode: "visible", children: l.children }, c, 0, null)),
          (p = as(p, c, v, null)),
          (p.flags |= 2),
          (l.return = t),
          (p.return = t),
          (l.sibling = p),
          (t.child = l),
          (t.mode & 1) !== 0 && Vs(t, e.child, null, v),
          (t.child.memoizedState = Bc(v)),
          (t.memoizedState = Uc),
          p);
    if ((t.mode & 1) === 0) return ka(e, t, v, null);
    if (c.data === "$!") {
      if (((l = c.nextSibling && c.nextSibling.dataset), l)) var k = l.dgst;
      return (
        (l = k), (p = Error(r(419))), (l = Ic(p, l, void 0)), ka(e, t, v, l)
      );
    }
    if (((k = (v & e.childLanes) !== 0), En || k)) {
      if (((l = It), l !== null)) {
        switch (v & -v) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        (c = (c & (l.suspendedLanes | v)) !== 0 ? 0 : c),
          c !== 0 &&
            c !== p.retryLane &&
            ((p.retryLane = c), ni(e, c), br(l, e, c, -1));
      }
      return of(), (l = Ic(Error(r(421)))), ka(e, t, v, l);
    }
    return c.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Yv.bind(null, e)),
        (c._reactRetry = t),
        null)
      : ((e = p.treeContext),
        (Vn = wi(c.nextSibling)),
        (Hn = t),
        (st = !0),
        (jr = null),
        e !== null &&
          ((or[lr++] = ei),
          (or[lr++] = ti),
          (or[lr++] = Ji),
          (ei = e.id),
          (ti = e.overflow),
          (Ji = t)),
        (t = Hc(t, l.children)),
        (t.flags |= 4096),
        t);
  }
  function Uh(e, t, i) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), _c(e.return, t, i);
  }
  function Vc(e, t, i, l, c) {
    var p = e.memoizedState;
    p === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: i,
          tailMode: c,
        })
      : ((p.isBackwards = t),
        (p.rendering = null),
        (p.renderingStartTime = 0),
        (p.last = l),
        (p.tail = i),
        (p.tailMode = c));
  }
  function Bh(e, t, i) {
    var l = t.pendingProps,
      c = l.revealOrder,
      p = l.tail;
    if ((pn(e, t, l.children, i), (l = at.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Uh(e, i, t);
          else if (e.tag === 19) Uh(e, i, t);
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
      l &= 1;
    }
    if ((Ke(at, l), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (i = t.child, c = null; i !== null; )
            (e = i.alternate),
              e !== null && ma(e) === null && (c = i),
              (i = i.sibling);
          (i = c),
            i === null
              ? ((c = t.child), (t.child = null))
              : ((c = i.sibling), (i.sibling = null)),
            Vc(t, !1, c, i, p);
          break;
        case "backwards":
          for (i = null, c = t.child, t.child = null; c !== null; ) {
            if (((e = c.alternate), e !== null && ma(e) === null)) {
              t.child = c;
              break;
            }
            (e = c.sibling), (c.sibling = i), (i = c), (c = e);
          }
          Vc(t, !0, i, null, p);
          break;
        case "together":
          Vc(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Sa(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function ii(e, t, i) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (is |= t.lanes),
      (i & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, i = Ri(e, e.pendingProps), t.child = i, i.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (i = i.sibling = Ri(e, e.pendingProps)),
          (i.return = t);
      i.sibling = null;
    }
    return t.child;
  }
  function Ov(e, t, i) {
    switch (t.tag) {
      case 3:
        Lh(t), Hs();
        break;
      case 5:
        nh(t);
        break;
      case 1:
        jn(t.type) && sa(t);
        break;
      case 4:
        Sc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var l = t.type._context,
          c = t.memoizedProps.value;
        Ke(fa, l._currentValue), (l._currentValue = c);
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ke(at, at.current & 1), (t.flags |= 128), null)
            : (i & t.child.childLanes) !== 0
            ? $h(e, t, i)
            : (Ke(at, at.current & 1),
              (e = ii(e, t, i)),
              e !== null ? e.sibling : null);
        Ke(at, at.current & 1);
        break;
      case 19:
        if (((l = (i & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return Bh(e, t, i);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          Ke(at, at.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), zh(e, t, i);
    }
    return ii(e, t, i);
  }
  var Hh, Yc, Vh, Yh;
  (Hh = function (e, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        (i.child.return = i), (i = i.child);
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      (i.sibling.return = i.return), (i = i.sibling);
    }
  }),
    (Yc = function () {}),
    (Vh = function (e, t, i, l) {
      var c = e.memoizedProps;
      if (c !== l) {
        (e = t.stateNode), ns($r.current);
        var p = null;
        switch (i) {
          case "input":
            (c = Je(e, c)), (l = Je(e, l)), (p = []);
            break;
          case "select":
            (c = C({}, c, { value: void 0 })),
              (l = C({}, l, { value: void 0 })),
              (p = []);
            break;
          case "textarea":
            (c = Fn(e, c)), (l = Fn(e, l)), (p = []);
            break;
          default:
            typeof c.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = na);
        }
        zr(i, l);
        var v;
        i = null;
        for (R in c)
          if (!l.hasOwnProperty(R) && c.hasOwnProperty(R) && c[R] != null)
            if (R === "style") {
              var k = c[R];
              for (v in k) k.hasOwnProperty(v) && (i || (i = {}), (i[v] = ""));
            } else
              R !== "dangerouslySetInnerHTML" &&
                R !== "children" &&
                R !== "suppressContentEditableWarning" &&
                R !== "suppressHydrationWarning" &&
                R !== "autoFocus" &&
                (o.hasOwnProperty(R)
                  ? p || (p = [])
                  : (p = p || []).push(R, null));
        for (R in l) {
          var T = l[R];
          if (
            ((k = c?.[R]),
            l.hasOwnProperty(R) && T !== k && (T != null || k != null))
          )
            if (R === "style")
              if (k) {
                for (v in k)
                  !k.hasOwnProperty(v) ||
                    (T && T.hasOwnProperty(v)) ||
                    (i || (i = {}), (i[v] = ""));
                for (v in T)
                  T.hasOwnProperty(v) &&
                    k[v] !== T[v] &&
                    (i || (i = {}), (i[v] = T[v]));
              } else i || (p || (p = []), p.push(R, i)), (i = T);
            else
              R === "dangerouslySetInnerHTML"
                ? ((T = T ? T.__html : void 0),
                  (k = k ? k.__html : void 0),
                  T != null && k !== T && (p = p || []).push(R, T))
                : R === "children"
                ? (typeof T != "string" && typeof T != "number") ||
                  (p = p || []).push(R, "" + T)
                : R !== "suppressContentEditableWarning" &&
                  R !== "suppressHydrationWarning" &&
                  (o.hasOwnProperty(R)
                    ? (T != null && R === "onScroll" && nt("scroll", e),
                      p || k === T || (p = []))
                    : (p = p || []).push(R, T));
        }
        i && (p = p || []).push("style", i);
        var R = p;
        (t.updateQueue = R) && (t.flags |= 4);
      }
    }),
    (Yh = function (e, t, i, l) {
      i !== l && (t.flags |= 4);
    });
  function Ko(e, t) {
    if (!st)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), (t = t.sibling);
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case "collapsed":
          i = e.tail;
          for (var l = null; i !== null; )
            i.alternate !== null && (l = i), (i = i.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function en(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      l = 0;
    if (t)
      for (var c = e.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags & 14680064),
          (l |= c.flags & 14680064),
          (c.return = e),
          (c = c.sibling);
    else
      for (c = e.child; c !== null; )
        (i |= c.lanes | c.childLanes),
          (l |= c.subtreeFlags),
          (l |= c.flags),
          (c.return = e),
          (c = c.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = i), t;
  }
  function Dv(e, t, i) {
    var l = t.pendingProps;
    switch ((pc(t), t.tag)) {
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
        return jn(t.type) && ia(), en(t), null;
      case 3:
        return (
          (l = t.stateNode),
          qs(),
          rt(Nn),
          rt(Zt),
          Nc(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (ua(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), jr !== null && (nf(jr), (jr = null)))),
          Yc(e, t),
          en(t),
          null
        );
      case 5:
        Cc(t);
        var c = ns(Wo.current);
        if (((i = t.type), e !== null && t.stateNode != null))
          Vh(e, t, i, l, c),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(r(166));
            return en(t), null;
          }
          if (((e = ns($r.current)), ua(t))) {
            (l = t.stateNode), (i = t.type);
            var p = t.memoizedProps;
            switch (((l[Fr] = t), (l[Uo] = p), (e = (t.mode & 1) !== 0), i)) {
              case "dialog":
                nt("cancel", l), nt("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                nt("load", l);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Lo.length; c++) nt(Lo[c], l);
                break;
              case "source":
                nt("error", l);
                break;
              case "img":
              case "image":
              case "link":
                nt("error", l), nt("load", l);
                break;
              case "details":
                nt("toggle", l);
                break;
              case "input":
                Vt(l, p), nt("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!p.multiple }),
                  nt("invalid", l);
                break;
              case "textarea":
                _r(l, p), nt("invalid", l);
            }
            zr(i, p), (c = null);
            for (var v in p)
              if (p.hasOwnProperty(v)) {
                var k = p[v];
                v === "children"
                  ? typeof k == "string"
                    ? l.textContent !== k &&
                      (p.suppressHydrationWarning !== !0 &&
                        ta(l.textContent, k, e),
                      (c = ["children", k]))
                    : typeof k == "number" &&
                      l.textContent !== "" + k &&
                      (p.suppressHydrationWarning !== !0 &&
                        ta(l.textContent, k, e),
                      (c = ["children", "" + k]))
                  : o.hasOwnProperty(v) &&
                    k != null &&
                    v === "onScroll" &&
                    nt("scroll", l);
              }
            switch (i) {
              case "input":
                wt(l), Qt(l, p, !0);
                break;
              case "textarea":
                wt(l), gt(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (l.onclick = na);
            }
            (l = c), (t.updateQueue = l), l !== null && (t.flags |= 4);
          } else {
            (v = c.nodeType === 9 ? c : c.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = wr(i)),
              e === "http://www.w3.org/1999/xhtml"
                ? i === "script"
                  ? ((e = v.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                  ? (e = v.createElement(i, { is: l.is }))
                  : ((e = v.createElement(i)),
                    i === "select" &&
                      ((v = e),
                      l.multiple
                        ? (v.multiple = !0)
                        : l.size && (v.size = l.size)))
                : (e = v.createElementNS(e, i)),
              (e[Fr] = t),
              (e[Uo] = l),
              Hh(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((v = ir(i, l)), i)) {
                case "dialog":
                  nt("cancel", e), nt("close", e), (c = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  nt("load", e), (c = l);
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Lo.length; c++) nt(Lo[c], e);
                  c = l;
                  break;
                case "source":
                  nt("error", e), (c = l);
                  break;
                case "img":
                case "image":
                case "link":
                  nt("error", e), nt("load", e), (c = l);
                  break;
                case "details":
                  nt("toggle", e), (c = l);
                  break;
                case "input":
                  Vt(e, l), (c = Je(e, l)), nt("invalid", e);
                  break;
                case "option":
                  c = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (c = C({}, l, { value: void 0 })),
                    nt("invalid", e);
                  break;
                case "textarea":
                  _r(e, l), (c = Fn(e, l)), nt("invalid", e);
                  break;
                default:
                  c = l;
              }
              zr(i, c), (k = c);
              for (p in k)
                if (k.hasOwnProperty(p)) {
                  var T = k[p];
                  p === "style"
                    ? rr(e, T)
                    : p === "dangerouslySetInnerHTML"
                    ? ((T = T ? T.__html : void 0), T != null && un(e, T))
                    : p === "children"
                    ? typeof T == "string"
                      ? (i !== "textarea" || T !== "") && cn(e, T)
                      : typeof T == "number" && cn(e, "" + T)
                    : p !== "suppressContentEditableWarning" &&
                      p !== "suppressHydrationWarning" &&
                      p !== "autoFocus" &&
                      (o.hasOwnProperty(p)
                        ? T != null && p === "onScroll" && nt("scroll", e)
                        : T != null && $(e, p, T, v));
                }
              switch (i) {
                case "input":
                  wt(e), Qt(e, l, !1);
                  break;
                case "textarea":
                  wt(e), gt(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + Ce(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (p = l.value),
                    p != null
                      ? Ve(e, !!l.multiple, p, !1)
                      : l.defaultValue != null &&
                        Ve(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof c.onClick == "function" && (e.onclick = na);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return en(t), null;
      case 6:
        if (e && t.stateNode != null) Yh(e, t, e.memoizedProps, l);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(r(166));
          if (((i = ns(Wo.current)), ns($r.current), ua(t))) {
            if (
              ((l = t.stateNode),
              (i = t.memoizedProps),
              (l[Fr] = t),
              (p = l.nodeValue !== i) && ((e = Hn), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ta(l.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ta(l.nodeValue, i, (e.mode & 1) !== 0);
              }
            p && (t.flags |= 4);
          } else
            (l = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(l)),
              (l[Fr] = t),
              (t.stateNode = l);
        }
        return en(t), null;
      case 13:
        if (
          (rt(at),
          (l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (st && Vn !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Xp(), Hs(), (t.flags |= 98560), (p = !1);
          else if (((p = ua(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!p) throw Error(r(318));
              if (
                ((p = t.memoizedState),
                (p = p !== null ? p.dehydrated : null),
                !p)
              )
                throw Error(r(317));
              p[Fr] = t;
            } else
              Hs(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            en(t), (p = !1);
          } else jr !== null && (nf(jr), (jr = null)), (p = !0);
          if (!p) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = i), t)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (at.current & 1) !== 0
                  ? Mt === 0 && (Mt = 3)
                  : of())),
            t.updateQueue !== null && (t.flags |= 4),
            en(t),
            null);
      case 4:
        return (
          qs(),
          Yc(e, t),
          e === null && Fo(t.stateNode.containerInfo),
          en(t),
          null
        );
      case 10:
        return yc(t.type._context), en(t), null;
      case 17:
        return jn(t.type) && ia(), en(t), null;
      case 19:
        if ((rt(at), (p = t.memoizedState), p === null)) return en(t), null;
        if (((l = (t.flags & 128) !== 0), (v = p.rendering), v === null))
          if (l) Ko(p, !1);
          else {
            if (Mt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((v = ma(e)), v !== null)) {
                  for (
                    t.flags |= 128,
                      Ko(p, !1),
                      l = v.updateQueue,
                      l !== null && ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = i,
                      i = t.child;
                    i !== null;

                  )
                    (p = i),
                      (e = l),
                      (p.flags &= 14680066),
                      (v = p.alternate),
                      v === null
                        ? ((p.childLanes = 0),
                          (p.lanes = e),
                          (p.child = null),
                          (p.subtreeFlags = 0),
                          (p.memoizedProps = null),
                          (p.memoizedState = null),
                          (p.updateQueue = null),
                          (p.dependencies = null),
                          (p.stateNode = null))
                        : ((p.childLanes = v.childLanes),
                          (p.lanes = v.lanes),
                          (p.child = v.child),
                          (p.subtreeFlags = 0),
                          (p.deletions = null),
                          (p.memoizedProps = v.memoizedProps),
                          (p.memoizedState = v.memoizedState),
                          (p.updateQueue = v.updateQueue),
                          (p.type = v.type),
                          (e = v.dependencies),
                          (p.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (i = i.sibling);
                  return Ke(at, (at.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            p.tail !== null &&
              be() > Ks &&
              ((t.flags |= 128), (l = !0), Ko(p, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = ma(v)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (i = e.updateQueue),
                i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                Ko(p, !0),
                p.tail === null &&
                  p.tailMode === "hidden" &&
                  !v.alternate &&
                  !st)
              )
                return en(t), null;
            } else
              2 * be() - p.renderingStartTime > Ks &&
                i !== 1073741824 &&
                ((t.flags |= 128), (l = !0), Ko(p, !1), (t.lanes = 4194304));
          p.isBackwards
            ? ((v.sibling = t.child), (t.child = v))
            : ((i = p.last),
              i !== null ? (i.sibling = v) : (t.child = v),
              (p.last = v));
        }
        return p.tail !== null
          ? ((t = p.tail),
            (p.rendering = t),
            (p.tail = t.sibling),
            (p.renderingStartTime = be()),
            (t.sibling = null),
            (i = at.current),
            Ke(at, l ? (i & 1) | 2 : i & 1),
            t)
          : (en(t), null);
      case 22:
      case 23:
        return (
          sf(),
          (l = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (t.flags |= 8192),
          l && (t.mode & 1) !== 0
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
    throw Error(r(156, t.tag));
  }
  function zv(e, t) {
    switch ((pc(t), t.tag)) {
      case 1:
        return (
          jn(t.type) && ia(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          qs(),
          rt(Nn),
          rt(Zt),
          Nc(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Cc(t), null;
      case 13:
        if (
          (rt(at), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Hs();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return rt(at), null;
      case 4:
        return qs(), null;
      case 10:
        return yc(t.type._context), null;
      case 22:
      case 23:
        return sf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ca = !1,
    tn = !1,
    Av = typeof WeakSet == "function" ? WeakSet : Set,
    te = null;
  function Gs(e, t) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (l) {
          ht(e, t, l);
        }
      else i.current = null;
  }
  function Wc(e, t, i) {
    try {
      i();
    } catch (l) {
      ht(e, t, l);
    }
  }
  var Wh = !1;
  function Iv(e, t) {
    if (((ic = Vl), (e = Cp()), Qu(e))) {
      if ("selectionStart" in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var l = i.getSelection && i.getSelection();
          if (l && l.rangeCount !== 0) {
            i = l.anchorNode;
            var c = l.anchorOffset,
              p = l.focusNode;
            l = l.focusOffset;
            try {
              i.nodeType, p.nodeType;
            } catch {
              i = null;
              break e;
            }
            var v = 0,
              k = -1,
              T = -1,
              R = 0,
              Y = 0,
              X = e,
              V = null;
            t: for (;;) {
              for (
                var J;
                X !== i || (c !== 0 && X.nodeType !== 3) || (k = v + c),
                  X !== p || (l !== 0 && X.nodeType !== 3) || (T = v + l),
                  X.nodeType === 3 && (v += X.nodeValue.length),
                  (J = X.firstChild) !== null;

              )
                (V = X), (X = J);
              for (;;) {
                if (X === e) break t;
                if (
                  (V === i && ++R === c && (k = v),
                  V === p && ++Y === l && (T = v),
                  (J = X.nextSibling) !== null)
                )
                  break;
                (X = V), (V = X.parentNode);
              }
              X = J;
            }
            i = k === -1 || T === -1 ? null : { start: k, end: T };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      sc = { focusedElem: e, selectionRange: i }, Vl = !1, te = t;
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
                      M = t.stateNode,
                      E = M.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ie : Er(t.type, ie),
                        xt
                      );
                    M.__reactInternalSnapshotBeforeUpdate = E;
                  }
                  break;
                case 3:
                  var b = t.stateNode.containerInfo;
                  b.nodeType === 1
                    ? (b.textContent = "")
                    : b.nodeType === 9 &&
                      b.documentElement &&
                      b.removeChild(b.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(r(163));
              }
          } catch (G) {
            ht(t, t.return, G);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (te = e);
            break;
          }
          te = t.return;
        }
    return (re = Wh), (Wh = !1), re;
  }
  function Zo(e, t, i) {
    var l = t.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var c = (l = l.next);
      do {
        if ((c.tag & e) === e) {
          var p = c.destroy;
          (c.destroy = void 0), p !== void 0 && Wc(t, i, p);
        }
        c = c.next;
      } while (c !== l);
    }
  }
  function Ta(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var i = (t = t.next);
      do {
        if ((i.tag & e) === e) {
          var l = i.create;
          i.destroy = l();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function qc(e) {
    var t = e.ref;
    if (t !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function qh(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), qh(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Fr],
          delete t[Uo],
          delete t[uc],
          delete t[yv],
          delete t[_v])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Xh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Gh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xh(e.return)) return null;
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
  function Xc(e, t, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, t)
            : i.insertBefore(e, t)
          : (i.nodeType === 8
              ? ((t = i.parentNode), t.insertBefore(e, i))
              : ((t = i), t.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || t.onclick !== null || (t.onclick = na));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Xc(e, t, i), e = e.sibling; e !== null; )
        Xc(e, t, i), (e = e.sibling);
  }
  function Gc(e, t, i) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for (Gc(e, t, i), e = e.sibling; e !== null; )
        Gc(e, t, i), (e = e.sibling);
  }
  var Yt = null,
    Pr = !1;
  function ji(e, t, i) {
    for (i = i.child; i !== null; ) Qh(e, t, i), (i = i.sibling);
  }
  function Qh(e, t, i) {
    if (dn && typeof dn.onCommitFiberUnmount == "function")
      try {
        dn.onCommitFiberUnmount(Ir, i);
      } catch {}
    switch (i.tag) {
      case 5:
        tn || Gs(i, t);
      case 6:
        var l = Yt,
          c = Pr;
        (Yt = null),
          ji(e, t, i),
          (Yt = l),
          (Pr = c),
          Yt !== null &&
            (Pr
              ? ((e = Yt),
                (i = i.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(i)
                  : e.removeChild(i))
              : Yt.removeChild(i.stateNode));
        break;
      case 18:
        Yt !== null &&
          (Pr
            ? ((e = Yt),
              (i = i.stateNode),
              e.nodeType === 8
                ? ac(e.parentNode, i)
                : e.nodeType === 1 && ac(e, i),
              Mo(e))
            : ac(Yt, i.stateNode));
        break;
      case 4:
        (l = Yt),
          (c = Pr),
          (Yt = i.stateNode.containerInfo),
          (Pr = !0),
          ji(e, t, i),
          (Yt = l),
          (Pr = c);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !tn &&
          ((l = i.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          c = l = l.next;
          do {
            var p = c,
              v = p.destroy;
            (p = p.tag),
              v !== void 0 && ((p & 2) !== 0 || (p & 4) !== 0) && Wc(i, t, v),
              (c = c.next);
          } while (c !== l);
        }
        ji(e, t, i);
        break;
      case 1:
        if (
          !tn &&
          (Gs(i, t),
          (l = i.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = i.memoizedProps),
              (l.state = i.memoizedState),
              l.componentWillUnmount();
          } catch (k) {
            ht(i, t, k);
          }
        ji(e, t, i);
        break;
      case 21:
        ji(e, t, i);
        break;
      case 22:
        i.mode & 1
          ? ((tn = (l = tn) || i.memoizedState !== null), ji(e, t, i), (tn = l))
          : ji(e, t, i);
        break;
      default:
        ji(e, t, i);
    }
  }
  function Kh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new Av()),
        t.forEach(function (l) {
          var c = Wv.bind(null, e, l);
          i.has(l) || (i.add(l), l.then(c, c));
        });
    }
  }
  function Mr(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var l = 0; l < i.length; l++) {
        var c = i[l];
        try {
          var p = e,
            v = t,
            k = v;
          e: for (; k !== null; ) {
            switch (k.tag) {
              case 5:
                (Yt = k.stateNode), (Pr = !1);
                break e;
              case 3:
                (Yt = k.stateNode.containerInfo), (Pr = !0);
                break e;
              case 4:
                (Yt = k.stateNode.containerInfo), (Pr = !0);
                break e;
            }
            k = k.return;
          }
          if (Yt === null) throw Error(r(160));
          Qh(p, v, c), (Yt = null), (Pr = !1);
          var T = c.alternate;
          T !== null && (T.return = null), (c.return = null);
        } catch (R) {
          ht(c, t, R);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Zh(t, e), (t = t.sibling);
  }
  function Zh(e, t) {
    var i = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Mr(t, e), Br(e), l & 4)) {
          try {
            Zo(3, e, e.return), Ta(3, e);
          } catch (ie) {
            ht(e, e.return, ie);
          }
          try {
            Zo(5, e, e.return);
          } catch (ie) {
            ht(e, e.return, ie);
          }
        }
        break;
      case 1:
        Mr(t, e), Br(e), l & 512 && i !== null && Gs(i, i.return);
        break;
      case 5:
        if (
          (Mr(t, e),
          Br(e),
          l & 512 && i !== null && Gs(i, i.return),
          e.flags & 32)
        ) {
          var c = e.stateNode;
          try {
            cn(c, "");
          } catch (ie) {
            ht(e, e.return, ie);
          }
        }
        if (l & 4 && ((c = e.stateNode), c != null)) {
          var p = e.memoizedProps,
            v = i !== null ? i.memoizedProps : p,
            k = e.type,
            T = e.updateQueue;
          if (((e.updateQueue = null), T !== null))
            try {
              k === "input" && p.type === "radio" && p.name != null && Gt(c, p),
                ir(k, v);
              var R = ir(k, p);
              for (v = 0; v < T.length; v += 2) {
                var Y = T[v],
                  X = T[v + 1];
                Y === "style"
                  ? rr(c, X)
                  : Y === "dangerouslySetInnerHTML"
                  ? un(c, X)
                  : Y === "children"
                  ? cn(c, X)
                  : $(c, Y, X, R);
              }
              switch (k) {
                case "input":
                  D(c, p);
                  break;
                case "textarea":
                  Dr(c, p);
                  break;
                case "select":
                  var V = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!p.multiple;
                  var J = p.value;
                  J != null
                    ? Ve(c, !!p.multiple, J, !1)
                    : V !== !!p.multiple &&
                      (p.defaultValue != null
                        ? Ve(c, !!p.multiple, p.defaultValue, !0)
                        : Ve(c, !!p.multiple, p.multiple ? [] : "", !1));
              }
              c[Uo] = p;
            } catch (ie) {
              ht(e, e.return, ie);
            }
        }
        break;
      case 6:
        if ((Mr(t, e), Br(e), l & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          (c = e.stateNode), (p = e.memoizedProps);
          try {
            c.nodeValue = p;
          } catch (ie) {
            ht(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (
          (Mr(t, e), Br(e), l & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            Mo(t.containerInfo);
          } catch (ie) {
            ht(e, e.return, ie);
          }
        break;
      case 4:
        Mr(t, e), Br(e);
        break;
      case 13:
        Mr(t, e),
          Br(e),
          (c = e.child),
          c.flags & 8192 &&
            ((p = c.memoizedState !== null),
            (c.stateNode.isHidden = p),
            !p ||
              (c.alternate !== null && c.alternate.memoizedState !== null) ||
              (Zc = be())),
          l & 4 && Kh(e);
        break;
      case 22:
        if (
          ((Y = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((tn = (R = tn) || Y), Mr(t, e), (tn = R)) : Mr(t, e),
          Br(e),
          l & 8192)
        ) {
          if (
            ((R = e.memoizedState !== null),
            (e.stateNode.isHidden = R) && !Y && (e.mode & 1) !== 0)
          )
            for (te = e, Y = e.child; Y !== null; ) {
              for (X = te = Y; te !== null; ) {
                switch (((V = te), (J = V.child), V.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Zo(4, V, V.return);
                    break;
                  case 1:
                    Gs(V, V.return);
                    var re = V.stateNode;
                    if (typeof re.componentWillUnmount == "function") {
                      (l = V), (i = V.return);
                      try {
                        (t = l),
                          (re.props = t.memoizedProps),
                          (re.state = t.memoizedState),
                          re.componentWillUnmount();
                      } catch (ie) {
                        ht(l, i, ie);
                      }
                    }
                    break;
                  case 5:
                    Gs(V, V.return);
                    break;
                  case 22:
                    if (V.memoizedState !== null) {
                      tm(X);
                      continue;
                    }
                }
                J !== null ? ((J.return = V), (te = J)) : tm(X);
              }
              Y = Y.sibling;
            }
          e: for (Y = null, X = e; ; ) {
            if (X.tag === 5) {
              if (Y === null) {
                Y = X;
                try {
                  (c = X.stateNode),
                    R
                      ? ((p = c.style),
                        typeof p.setProperty == "function"
                          ? p.setProperty("display", "none", "important")
                          : (p.display = "none"))
                      : ((k = X.stateNode),
                        (T = X.memoizedProps.style),
                        (v =
                          T != null && T.hasOwnProperty("display")
                            ? T.display
                            : null),
                        (k.style.display = Xi("display", v)));
                } catch (ie) {
                  ht(e, e.return, ie);
                }
              }
            } else if (X.tag === 6) {
              if (Y === null)
                try {
                  X.stateNode.nodeValue = R ? "" : X.memoizedProps;
                } catch (ie) {
                  ht(e, e.return, ie);
                }
            } else if (
              ((X.tag !== 22 && X.tag !== 23) ||
                X.memoizedState === null ||
                X === e) &&
              X.child !== null
            ) {
              (X.child.return = X), (X = X.child);
              continue;
            }
            if (X === e) break e;
            for (; X.sibling === null; ) {
              if (X.return === null || X.return === e) break e;
              Y === X && (Y = null), (X = X.return);
            }
            Y === X && (Y = null),
              (X.sibling.return = X.return),
              (X = X.sibling);
          }
        }
        break;
      case 19:
        Mr(t, e), Br(e), l & 4 && Kh(e);
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
          for (var i = e.return; i !== null; ) {
            if (Xh(i)) {
              var l = i;
              break e;
            }
            i = i.return;
          }
          throw Error(r(160));
        }
        switch (l.tag) {
          case 5:
            var c = l.stateNode;
            l.flags & 32 && (cn(c, ""), (l.flags &= -33));
            var p = Gh(e);
            Gc(e, p, c);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo,
              k = Gh(e);
            Xc(e, k, v);
            break;
          default:
            throw Error(r(161));
        }
      } catch (T) {
        ht(e, e.return, T);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lv(e, t, i) {
    (te = e), Jh(e);
  }
  function Jh(e, t, i) {
    for (var l = (e.mode & 1) !== 0; te !== null; ) {
      var c = te,
        p = c.child;
      if (c.tag === 22 && l) {
        var v = c.memoizedState !== null || Ca;
        if (!v) {
          var k = c.alternate,
            T = (k !== null && k.memoizedState !== null) || tn;
          k = Ca;
          var R = tn;
          if (((Ca = v), (tn = T) && !R))
            for (te = c; te !== null; )
              (v = te),
                (T = v.child),
                v.tag === 22 && v.memoizedState !== null
                  ? nm(c)
                  : T !== null
                  ? ((T.return = v), (te = T))
                  : nm(c);
          for (; p !== null; ) (te = p), Jh(p), (p = p.sibling);
          (te = c), (Ca = k), (tn = R);
        }
        em(e);
      } else
        (c.subtreeFlags & 8772) !== 0 && p !== null
          ? ((p.return = c), (te = p))
          : em(e);
    }
  }
  function em(e) {
    for (; te !== null; ) {
      var t = te;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                tn || Ta(5, t);
                break;
              case 1:
                var l = t.stateNode;
                if (t.flags & 4 && !tn)
                  if (i === null) l.componentDidMount();
                  else {
                    var c =
                      t.elementType === t.type
                        ? i.memoizedProps
                        : Er(t.type, i.memoizedProps);
                    l.componentDidUpdate(
                      c,
                      i.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var p = t.updateQueue;
                p !== null && th(t, p, l);
                break;
              case 3:
                var v = t.updateQueue;
                if (v !== null) {
                  if (((i = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        i = t.child.stateNode;
                        break;
                      case 1:
                        i = t.child.stateNode;
                    }
                  th(t, v, i);
                }
                break;
              case 5:
                var k = t.stateNode;
                if (i === null && t.flags & 4) {
                  i = k;
                  var T = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && i.focus();
                      break;
                    case "img":
                      T.src && (i.src = T.src);
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
                  var R = t.alternate;
                  if (R !== null) {
                    var Y = R.memoizedState;
                    if (Y !== null) {
                      var X = Y.dehydrated;
                      X !== null && Mo(X);
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
                throw Error(r(163));
            }
          tn || (t.flags & 512 && qc(t));
        } catch (V) {
          ht(t, t.return, V);
        }
      }
      if (t === e) {
        te = null;
        break;
      }
      if (((i = t.sibling), i !== null)) {
        (i.return = t.return), (te = i);
        break;
      }
      te = t.return;
    }
  }
  function tm(e) {
    for (; te !== null; ) {
      var t = te;
      if (t === e) {
        te = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        (i.return = t.return), (te = i);
        break;
      }
      te = t.return;
    }
  }
  function nm(e) {
    for (; te !== null; ) {
      var t = te;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Ta(4, t);
            } catch (T) {
              ht(t, i, T);
            }
            break;
          case 1:
            var l = t.stateNode;
            if (typeof l.componentDidMount == "function") {
              var c = t.return;
              try {
                l.componentDidMount();
              } catch (T) {
                ht(t, c, T);
              }
            }
            var p = t.return;
            try {
              qc(t);
            } catch (T) {
              ht(t, p, T);
            }
            break;
          case 5:
            var v = t.return;
            try {
              qc(t);
            } catch (T) {
              ht(t, v, T);
            }
        }
      } catch (T) {
        ht(t, t.return, T);
      }
      if (t === e) {
        te = null;
        break;
      }
      var k = t.sibling;
      if (k !== null) {
        (k.return = t.return), (te = k);
        break;
      }
      te = t.return;
    }
  }
  var Fv = Math.ceil,
    Na = O.ReactCurrentDispatcher,
    Qc = O.ReactCurrentOwner,
    cr = O.ReactCurrentBatchConfig,
    Fe = 0,
    It = null,
    Ct = null,
    Wt = 0,
    Yn = 0,
    Qs = ki(0),
    Mt = 0,
    Jo = null,
    is = 0,
    ja = 0,
    Kc = 0,
    el = null,
    Pn = null,
    Zc = 0,
    Ks = 1 / 0,
    si = null,
    Ea = !1,
    Jc = null,
    Ei = null,
    Pa = !1,
    Pi = null,
    Ma = 0,
    tl = 0,
    ef = null,
    ba = -1,
    Ra = 0;
  function hn() {
    return (Fe & 6) !== 0 ? be() : ba !== -1 ? ba : (ba = be());
  }
  function Mi(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Fe & 2) !== 0 && Wt !== 0
      ? Wt & -Wt
      : kv.transition !== null
      ? (Ra === 0 && (Ra = Gd()), Ra)
      : ((e = Ye),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ip(e.type))),
        e);
  }
  function br(e, t, i, l) {
    if (50 < tl) throw ((tl = 0), (ef = null), Error(r(185)));
    To(e, i, l),
      ((Fe & 2) === 0 || e !== It) &&
        (e === It && ((Fe & 2) === 0 && (ja |= i), Mt === 4 && bi(e, Wt)),
        Mn(e, l),
        i === 1 &&
          Fe === 0 &&
          (t.mode & 1) === 0 &&
          ((Ks = be() + 500), oa && Ci()));
  }
  function Mn(e, t) {
    var i = e.callbackNode;
    kg(e, t);
    var l = Ul(e, e === It ? Wt : 0);
    if (l === 0)
      i !== null && Et(i), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = l & -l), e.callbackPriority !== t)) {
      if ((i != null && Et(i), t === 1))
        e.tag === 0 ? wv(im.bind(null, e)) : Hp(im.bind(null, e)),
          vv(function () {
            (Fe & 6) === 0 && Ci();
          }),
          (i = null);
      else {
        switch (Qd(l)) {
          case 1:
            i = Tn;
            break;
          case 4:
            i = Ms;
            break;
          case 16:
            i = Gi;
            break;
          case 536870912:
            i = Un;
            break;
          default:
            i = Gi;
        }
        i = dm(i, rm.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = i);
    }
  }
  function rm(e, t) {
    if (((ba = -1), (Ra = 0), (Fe & 6) !== 0)) throw Error(r(327));
    var i = e.callbackNode;
    if (Zs() && e.callbackNode !== i) return null;
    var l = Ul(e, e === It ? Wt : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || t) t = Oa(e, l);
    else {
      t = l;
      var c = Fe;
      Fe |= 2;
      var p = om();
      (It !== e || Wt !== t) && ((si = null), (Ks = be() + 500), os(e, t));
      do
        try {
          Bv();
          break;
        } catch (k) {
          sm(e, k);
        }
      while (!0);
      xc(),
        (Na.current = p),
        (Fe = c),
        Ct !== null ? (t = 0) : ((It = null), (Wt = 0), (t = Mt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((c = Du(e)), c !== 0 && ((l = c), (t = tf(e, c)))),
        t === 1)
      )
        throw ((i = Jo), os(e, 0), bi(e, l), Mn(e, be()), i);
      if (t === 6) bi(e, l);
      else {
        if (
          ((c = e.current.alternate),
          (l & 30) === 0 &&
            !$v(c) &&
            ((t = Oa(e, l)),
            t === 2 && ((p = Du(e)), p !== 0 && ((l = p), (t = tf(e, p)))),
            t === 1))
        )
          throw ((i = Jo), os(e, 0), bi(e, l), Mn(e, be()), i);
        switch (((e.finishedWork = c), (e.finishedLanes = l), t)) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            ls(e, Pn, si);
            break;
          case 3:
            if (
              (bi(e, l),
              (l & 130023424) === l && ((t = Zc + 500 - be()), 10 < t))
            ) {
              if (Ul(e, 0) !== 0) break;
              if (((c = e.suspendedLanes), (c & l) !== l)) {
                hn(), (e.pingedLanes |= e.suspendedLanes & c);
                break;
              }
              e.timeoutHandle = lc(ls.bind(null, e, Pn, si), t);
              break;
            }
            ls(e, Pn, si);
            break;
          case 4:
            if ((bi(e, l), (l & 4194240) === l)) break;
            for (t = e.eventTimes, c = -1; 0 < l; ) {
              var v = 31 - Tr(l);
              (p = 1 << v), (v = t[v]), v > c && (c = v), (l &= ~p);
            }
            if (
              ((l = c),
              (l = be() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                  ? 480
                  : 1080 > l
                  ? 1080
                  : 1920 > l
                  ? 1920
                  : 3e3 > l
                  ? 3e3
                  : 4320 > l
                  ? 4320
                  : 1960 * Fv(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = lc(ls.bind(null, e, Pn, si), l);
              break;
            }
            ls(e, Pn, si);
            break;
          case 5:
            ls(e, Pn, si);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return Mn(e, be()), e.callbackNode === i ? rm.bind(null, e) : null;
  }
  function tf(e, t) {
    var i = el;
    return (
      e.current.memoizedState.isDehydrated && (os(e, t).flags |= 256),
      (e = Oa(e, t)),
      e !== 2 && ((t = Pn), (Pn = i), t !== null && nf(t)),
      e
    );
  }
  function nf(e) {
    Pn === null ? (Pn = e) : Pn.push.apply(Pn, e);
  }
  function $v(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var l = 0; l < i.length; l++) {
            var c = i[l],
              p = c.getSnapshot;
            c = c.value;
            try {
              if (!Nr(p(), c)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = t.child), t.subtreeFlags & 16384 && i !== null))
        (i.return = t), (t = i);
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
  function bi(e, t) {
    for (
      t &= ~Kc,
        t &= ~ja,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var i = 31 - Tr(t),
        l = 1 << i;
      (e[i] = -1), (t &= ~l);
    }
  }
  function im(e) {
    if ((Fe & 6) !== 0) throw Error(r(327));
    Zs();
    var t = Ul(e, 0);
    if ((t & 1) === 0) return Mn(e, be()), null;
    var i = Oa(e, t);
    if (e.tag !== 0 && i === 2) {
      var l = Du(e);
      l !== 0 && ((t = l), (i = tf(e, l)));
    }
    if (i === 1) throw ((i = Jo), os(e, 0), bi(e, t), Mn(e, be()), i);
    if (i === 6) throw Error(r(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      ls(e, Pn, si),
      Mn(e, be()),
      null
    );
  }
  function rf(e, t) {
    var i = Fe;
    Fe |= 1;
    try {
      return e(t);
    } finally {
      (Fe = i), Fe === 0 && ((Ks = be() + 500), oa && Ci());
    }
  }
  function ss(e) {
    Pi !== null && Pi.tag === 0 && (Fe & 6) === 0 && Zs();
    var t = Fe;
    Fe |= 1;
    var i = cr.transition,
      l = Ye;
    try {
      if (((cr.transition = null), (Ye = 1), e)) return e();
    } finally {
      (Ye = l), (cr.transition = i), (Fe = t), (Fe & 6) === 0 && Ci();
    }
  }
  function sf() {
    (Yn = Qs.current), rt(Qs);
  }
  function os(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), gv(i)), Ct !== null))
      for (i = Ct.return; i !== null; ) {
        var l = i;
        switch ((pc(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && ia();
            break;
          case 3:
            qs(), rt(Nn), rt(Zt), Nc();
            break;
          case 5:
            Cc(l);
            break;
          case 4:
            qs();
            break;
          case 13:
            rt(at);
            break;
          case 19:
            rt(at);
            break;
          case 10:
            yc(l.type._context);
            break;
          case 22:
          case 23:
            sf();
        }
        i = i.return;
      }
    if (
      ((It = e),
      (Ct = e = Ri(e.current, null)),
      (Wt = Yn = t),
      (Mt = 0),
      (Jo = null),
      (Kc = ja = is = 0),
      (Pn = el = null),
      ts !== null)
    ) {
      for (t = 0; t < ts.length; t++)
        if (((i = ts[t]), (l = i.interleaved), l !== null)) {
          i.interleaved = null;
          var c = l.next,
            p = i.pending;
          if (p !== null) {
            var v = p.next;
            (p.next = c), (l.next = v);
          }
          i.pending = l;
        }
      ts = null;
    }
    return e;
  }
  function sm(e, t) {
    do {
      var i = Ct;
      try {
        if ((xc(), (ga.current = _a), va)) {
          for (var l = ut.memoizedState; l !== null; ) {
            var c = l.queue;
            c !== null && (c.pending = null), (l = l.next);
          }
          va = !1;
        }
        if (
          ((rs = 0),
          (At = Pt = ut = null),
          (qo = !1),
          (Xo = 0),
          (Qc.current = null),
          i === null || i.return === null)
        ) {
          (Mt = 1), (Jo = t), (Ct = null);
          break;
        }
        e: {
          var p = e,
            v = i.return,
            k = i,
            T = t;
          if (
            ((t = Wt),
            (k.flags |= 32768),
            T !== null && typeof T == "object" && typeof T.then == "function")
          ) {
            var R = T,
              Y = k,
              X = Y.tag;
            if ((Y.mode & 1) === 0 && (X === 0 || X === 11 || X === 15)) {
              var V = Y.alternate;
              V
                ? ((Y.updateQueue = V.updateQueue),
                  (Y.memoizedState = V.memoizedState),
                  (Y.lanes = V.lanes))
                : ((Y.updateQueue = null), (Y.memoizedState = null));
            }
            var J = Mh(v);
            if (J !== null) {
              (J.flags &= -257),
                bh(J, v, k, p, t),
                J.mode & 1 && Ph(p, R, t),
                (t = J),
                (T = R);
              var re = t.updateQueue;
              if (re === null) {
                var ie = new Set();
                ie.add(T), (t.updateQueue = ie);
              } else re.add(T);
              break e;
            } else {
              if ((t & 1) === 0) {
                Ph(p, R, t), of();
                break e;
              }
              T = Error(r(426));
            }
          } else if (st && k.mode & 1) {
            var xt = Mh(v);
            if (xt !== null) {
              (xt.flags & 65536) === 0 && (xt.flags |= 256),
                bh(xt, v, k, p, t),
                gc(Xs(T, k));
              break e;
            }
          }
          (p = T = Xs(T, k)),
            Mt !== 4 && (Mt = 2),
            el === null ? (el = [p]) : el.push(p),
            (p = v);
          do {
            switch (p.tag) {
              case 3:
                (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                var M = jh(p, T, t);
                eh(p, M);
                break e;
              case 1:
                k = T;
                var E = p.type,
                  b = p.stateNode;
                if (
                  (p.flags & 128) === 0 &&
                  (typeof E.getDerivedStateFromError == "function" ||
                    (b !== null &&
                      typeof b.componentDidCatch == "function" &&
                      (Ei === null || !Ei.has(b))))
                ) {
                  (p.flags |= 65536), (t &= -t), (p.lanes |= t);
                  var G = Eh(p, k, t);
                  eh(p, G);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        am(i);
      } catch (oe) {
        (t = oe), Ct === i && i !== null && (Ct = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function om() {
    var e = Na.current;
    return (Na.current = _a), e === null ? _a : e;
  }
  function of() {
    (Mt === 0 || Mt === 3 || Mt === 2) && (Mt = 4),
      It === null ||
        ((is & 268435455) === 0 && (ja & 268435455) === 0) ||
        bi(It, Wt);
  }
  function Oa(e, t) {
    var i = Fe;
    Fe |= 2;
    var l = om();
    (It !== e || Wt !== t) && ((si = null), os(e, t));
    do
      try {
        Uv();
        break;
      } catch (c) {
        sm(e, c);
      }
    while (!0);
    if ((xc(), (Fe = i), (Na.current = l), Ct !== null)) throw Error(r(261));
    return (It = null), (Wt = 0), Mt;
  }
  function Uv() {
    for (; Ct !== null; ) lm(Ct);
  }
  function Bv() {
    for (; Ct !== null && !Kr(); ) lm(Ct);
  }
  function lm(e) {
    var t = fm(e.alternate, e, Yn);
    (e.memoizedProps = e.pendingProps),
      t === null ? am(e) : (Ct = t),
      (Qc.current = null);
  }
  function am(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((i = Dv(i, t, Yn)), i !== null)) {
          Ct = i;
          return;
        }
      } else {
        if (((i = zv(i, t)), i !== null)) {
          (i.flags &= 32767), (Ct = i);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Mt = 6), (Ct = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ct = t;
        return;
      }
      Ct = t = e;
    } while (t !== null);
    Mt === 0 && (Mt = 5);
  }
  function ls(e, t, i) {
    var l = Ye,
      c = cr.transition;
    try {
      (cr.transition = null), (Ye = 1), Hv(e, t, i, l);
    } finally {
      (cr.transition = c), (Ye = l);
    }
    return null;
  }
  function Hv(e, t, i, l) {
    do Zs();
    while (Pi !== null);
    if ((Fe & 6) !== 0) throw Error(r(327));
    i = e.finishedWork;
    var c = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
      throw Error(r(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var p = i.lanes | i.childLanes;
    if (
      (Sg(e, p),
      e === It && ((Ct = It = null), (Wt = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Pa ||
        ((Pa = !0),
        dm(Gi, function () {
          return Zs(), null;
        })),
      (p = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || p)
    ) {
      (p = cr.transition), (cr.transition = null);
      var v = Ye;
      Ye = 1;
      var k = Fe;
      (Fe |= 4),
        (Qc.current = null),
        Iv(e, i),
        Zh(i, e),
        uv(sc),
        (Vl = !!ic),
        (sc = ic = null),
        (e.current = i),
        Lv(i),
        Ps(),
        (Fe = k),
        (Ye = v),
        (cr.transition = p);
    } else e.current = i;
    if (
      (Pa && ((Pa = !1), (Pi = e), (Ma = c)),
      (p = e.pendingLanes),
      p === 0 && (Ei = null),
      Lr(i.stateNode),
      Mn(e, be()),
      t !== null)
    )
      for (l = e.onRecoverableError, i = 0; i < t.length; i++)
        (c = t[i]), l(c.value, { componentStack: c.stack, digest: c.digest });
    if (Ea) throw ((Ea = !1), (e = Jc), (Jc = null), e);
    return (
      (Ma & 1) !== 0 && e.tag !== 0 && Zs(),
      (p = e.pendingLanes),
      (p & 1) !== 0 ? (e === ef ? tl++ : ((tl = 0), (ef = e))) : (tl = 0),
      Ci(),
      null
    );
  }
  function Zs() {
    if (Pi !== null) {
      var e = Qd(Ma),
        t = cr.transition,
        i = Ye;
      try {
        if (((cr.transition = null), (Ye = 16 > e ? 16 : e), Pi === null))
          var l = !1;
        else {
          if (((e = Pi), (Pi = null), (Ma = 0), (Fe & 6) !== 0))
            throw Error(r(331));
          var c = Fe;
          for (Fe |= 4, te = e.current; te !== null; ) {
            var p = te,
              v = p.child;
            if ((te.flags & 16) !== 0) {
              var k = p.deletions;
              if (k !== null) {
                for (var T = 0; T < k.length; T++) {
                  var R = k[T];
                  for (te = R; te !== null; ) {
                    var Y = te;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Zo(8, Y, p);
                    }
                    var X = Y.child;
                    if (X !== null) (X.return = Y), (te = X);
                    else
                      for (; te !== null; ) {
                        Y = te;
                        var V = Y.sibling,
                          J = Y.return;
                        if ((qh(Y), Y === R)) {
                          te = null;
                          break;
                        }
                        if (V !== null) {
                          (V.return = J), (te = V);
                          break;
                        }
                        te = J;
                      }
                  }
                }
                var re = p.alternate;
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
                te = p;
              }
            }
            if ((p.subtreeFlags & 2064) !== 0 && v !== null)
              (v.return = p), (te = v);
            else
              e: for (; te !== null; ) {
                if (((p = te), (p.flags & 2048) !== 0))
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zo(9, p, p.return);
                  }
                var M = p.sibling;
                if (M !== null) {
                  (M.return = p.return), (te = M);
                  break e;
                }
                te = p.return;
              }
          }
          var E = e.current;
          for (te = E; te !== null; ) {
            v = te;
            var b = v.child;
            if ((v.subtreeFlags & 2064) !== 0 && b !== null)
              (b.return = v), (te = b);
            else
              e: for (v = E; te !== null; ) {
                if (((k = te), (k.flags & 2048) !== 0))
                  try {
                    switch (k.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ta(9, k);
                    }
                  } catch (oe) {
                    ht(k, k.return, oe);
                  }
                if (k === v) {
                  te = null;
                  break e;
                }
                var G = k.sibling;
                if (G !== null) {
                  (G.return = k.return), (te = G);
                  break e;
                }
                te = k.return;
              }
          }
          if (
            ((Fe = c),
            Ci(),
            dn && typeof dn.onPostCommitFiberRoot == "function")
          )
            try {
              dn.onPostCommitFiberRoot(Ir, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        (Ye = i), (cr.transition = t);
      }
    }
    return !1;
  }
  function um(e, t, i) {
    (t = Xs(i, t)),
      (t = jh(e, t, 1)),
      (e = Ni(e, t, 1)),
      (t = hn()),
      e !== null && (To(e, 1, t), Mn(e, t));
  }
  function ht(e, t, i) {
    if (e.tag === 3) um(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          um(t, e, i);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Ei === null || !Ei.has(l)))
          ) {
            (e = Xs(i, e)),
              (e = Eh(t, e, 1)),
              (t = Ni(t, e, 1)),
              (e = hn()),
              t !== null && (To(t, 1, e), Mn(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Vv(e, t, i) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (t = hn()),
      (e.pingedLanes |= e.suspendedLanes & i),
      It === e &&
        (Wt & i) === i &&
        (Mt === 4 || (Mt === 3 && (Wt & 130023424) === Wt && 500 > be() - Zc)
          ? os(e, 0)
          : (Kc |= i)),
      Mn(e, t);
  }
  function cm(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = $l), ($l <<= 1), ($l & 130023424) === 0 && ($l = 4194304)));
    var i = hn();
    (e = ni(e, t)), e !== null && (To(e, t, i), Mn(e, i));
  }
  function Yv(e) {
    var t = e.memoizedState,
      i = 0;
    t !== null && (i = t.retryLane), cm(e, i);
  }
  function Wv(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), cm(e, i);
  }
  var fm;
  fm = function (e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Nn.current) En = !0;
      else {
        if ((e.lanes & i) === 0 && (t.flags & 128) === 0)
          return (En = !1), Ov(e, t, i);
        En = (e.flags & 131072) !== 0;
      }
    else (En = !1), st && (t.flags & 1048576) !== 0 && Vp(t, aa, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var l = t.type;
        Sa(e, t), (e = t.pendingProps);
        var c = $s(t, Zt.current);
        Ws(t, i), (c = Pc(null, t, l, e, c, i));
        var p = Mc();
        return (
          (t.flags |= 1),
          typeof c == "object" &&
          c !== null &&
          typeof c.render == "function" &&
          c.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              jn(l) ? ((p = !0), sa(t)) : (p = !1),
              (t.memoizedState =
                c.state !== null && c.state !== void 0 ? c.state : null),
              kc(t),
              (c.updater = wa),
              (t.stateNode = c),
              (c._reactInternals = t),
              Ac(t, l, e, i),
              (t = $c(null, t, l, !0, p, i)))
            : ((t.tag = 0), st && p && dc(t), pn(null, t, c, i), (t = t.child)),
          t
        );
      case 16:
        l = t.elementType;
        e: {
          switch (
            (Sa(e, t),
            (e = t.pendingProps),
            (c = l._init),
            (l = c(l._payload)),
            (t.type = l),
            (c = t.tag = Xv(l)),
            (e = Er(l, e)),
            c)
          ) {
            case 0:
              t = Fc(null, t, l, e, i);
              break e;
            case 1:
              t = Ih(null, t, l, e, i);
              break e;
            case 11:
              t = Rh(null, t, l, e, i);
              break e;
            case 14:
              t = Oh(null, t, l, Er(l.type, e), i);
              break e;
          }
          throw Error(r(306, l, ""));
        }
        return t;
      case 0:
        return (
          (l = t.type),
          (c = t.pendingProps),
          (c = t.elementType === l ? c : Er(l, c)),
          Fc(e, t, l, c, i)
        );
      case 1:
        return (
          (l = t.type),
          (c = t.pendingProps),
          (c = t.elementType === l ? c : Er(l, c)),
          Ih(e, t, l, c, i)
        );
      case 3:
        e: {
          if ((Lh(t), e === null)) throw Error(r(387));
          (l = t.pendingProps),
            (p = t.memoizedState),
            (c = p.element),
            Jp(e, t),
            ha(t, l, null, i);
          var v = t.memoizedState;
          if (((l = v.element), p.isDehydrated))
            if (
              ((p = {
                element: l,
                isDehydrated: !1,
                cache: v.cache,
                pendingSuspenseBoundaries: v.pendingSuspenseBoundaries,
                transitions: v.transitions,
              }),
              (t.updateQueue.baseState = p),
              (t.memoizedState = p),
              t.flags & 256)
            ) {
              (c = Xs(Error(r(423)), t)), (t = Fh(e, t, l, i, c));
              break e;
            } else if (l !== c) {
              (c = Xs(Error(r(424)), t)), (t = Fh(e, t, l, i, c));
              break e;
            } else
              for (
                Vn = wi(t.stateNode.containerInfo.firstChild),
                  Hn = t,
                  st = !0,
                  jr = null,
                  i = Kp(t, null, l, i),
                  t.child = i;
                i;

              )
                (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
          else {
            if ((Hs(), l === c)) {
              t = ii(e, t, i);
              break e;
            }
            pn(e, t, l, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          nh(t),
          e === null && mc(t),
          (l = t.type),
          (c = t.pendingProps),
          (p = e !== null ? e.memoizedProps : null),
          (v = c.children),
          oc(l, c) ? (v = null) : p !== null && oc(l, p) && (t.flags |= 32),
          Ah(e, t),
          pn(e, t, v, i),
          t.child
        );
      case 6:
        return e === null && mc(t), null;
      case 13:
        return $h(e, t, i);
      case 4:
        return (
          Sc(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Vs(t, null, l, i)) : pn(e, t, l, i),
          t.child
        );
      case 11:
        return (
          (l = t.type),
          (c = t.pendingProps),
          (c = t.elementType === l ? c : Er(l, c)),
          Rh(e, t, l, c, i)
        );
      case 7:
        return pn(e, t, t.pendingProps, i), t.child;
      case 8:
        return pn(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return pn(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (
            ((l = t.type._context),
            (c = t.pendingProps),
            (p = t.memoizedProps),
            (v = c.value),
            Ke(fa, l._currentValue),
            (l._currentValue = v),
            p !== null)
          )
            if (Nr(p.value, v)) {
              if (p.children === c.children && !Nn.current) {
                t = ii(e, t, i);
                break e;
              }
            } else
              for (p = t.child, p !== null && (p.return = t); p !== null; ) {
                var k = p.dependencies;
                if (k !== null) {
                  v = p.child;
                  for (var T = k.firstContext; T !== null; ) {
                    if (T.context === l) {
                      if (p.tag === 1) {
                        (T = ri(-1, i & -i)), (T.tag = 2);
                        var R = p.updateQueue;
                        if (R !== null) {
                          R = R.shared;
                          var Y = R.pending;
                          Y === null
                            ? (T.next = T)
                            : ((T.next = Y.next), (Y.next = T)),
                            (R.pending = T);
                        }
                      }
                      (p.lanes |= i),
                        (T = p.alternate),
                        T !== null && (T.lanes |= i),
                        _c(p.return, i, t),
                        (k.lanes |= i);
                      break;
                    }
                    T = T.next;
                  }
                } else if (p.tag === 10) v = p.type === t.type ? null : p.child;
                else if (p.tag === 18) {
                  if (((v = p.return), v === null)) throw Error(r(341));
                  (v.lanes |= i),
                    (k = v.alternate),
                    k !== null && (k.lanes |= i),
                    _c(v, i, t),
                    (v = p.sibling);
                } else v = p.child;
                if (v !== null) v.return = p;
                else
                  for (v = p; v !== null; ) {
                    if (v === t) {
                      v = null;
                      break;
                    }
                    if (((p = v.sibling), p !== null)) {
                      (p.return = v.return), (v = p);
                      break;
                    }
                    v = v.return;
                  }
                p = v;
              }
          pn(e, t, c.children, i), (t = t.child);
        }
        return t;
      case 9:
        return (
          (c = t.type),
          (l = t.pendingProps.children),
          Ws(t, i),
          (c = ar(c)),
          (l = l(c)),
          (t.flags |= 1),
          pn(e, t, l, i),
          t.child
        );
      case 14:
        return (
          (l = t.type),
          (c = Er(l, t.pendingProps)),
          (c = Er(l.type, c)),
          Oh(e, t, l, c, i)
        );
      case 15:
        return Dh(e, t, t.type, t.pendingProps, i);
      case 17:
        return (
          (l = t.type),
          (c = t.pendingProps),
          (c = t.elementType === l ? c : Er(l, c)),
          Sa(e, t),
          (t.tag = 1),
          jn(l) ? ((e = !0), sa(t)) : (e = !1),
          Ws(t, i),
          Th(t, l, c),
          Ac(t, l, c, i),
          $c(null, t, l, !0, e, i)
        );
      case 19:
        return Bh(e, t, i);
      case 22:
        return zh(e, t, i);
    }
    throw Error(r(156, t.tag));
  };
  function dm(e, t) {
    return St(e, t);
  }
  function qv(e, t, i, l) {
    (this.tag = e),
      (this.key = i),
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
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function fr(e, t, i, l) {
    return new qv(e, t, i, l);
  }
  function lf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Xv(e) {
    if (typeof e == "function") return lf(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Q)) return 11;
      if (e === Se) return 14;
    }
    return 2;
  }
  function Ri(e, t) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = fr(e.tag, t, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = t),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (i.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Da(e, t, i, l, c, p) {
    var v = 2;
    if (((l = e), typeof e == "function")) lf(e) && (v = 1);
    else if (typeof e == "string") v = 5;
    else
      e: switch (e) {
        case z:
          return as(i.children, c, p, t);
        case W:
          (v = 8), (c |= 8);
          break;
        case B:
          return (
            (e = fr(12, i, t, c | 2)), (e.elementType = B), (e.lanes = p), e
          );
        case he:
          return (e = fr(13, i, t, c)), (e.elementType = he), (e.lanes = p), e;
        case ge:
          return (e = fr(19, i, t, c)), (e.elementType = ge), (e.lanes = p), e;
        case ee:
          return za(i, c, p, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
                v = 10;
                break e;
              case fe:
                v = 9;
                break e;
              case Q:
                v = 11;
                break e;
              case Se:
                v = 14;
                break e;
              case de:
                (v = 16), (l = null);
                break e;
            }
          throw Error(r(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = fr(v, i, t, c)), (t.elementType = e), (t.type = l), (t.lanes = p), t
    );
  }
  function as(e, t, i, l) {
    return (e = fr(7, e, l, t)), (e.lanes = i), e;
  }
  function za(e, t, i, l) {
    return (
      (e = fr(22, e, l, t)),
      (e.elementType = ee),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function af(e, t, i) {
    return (e = fr(6, e, null, t)), (e.lanes = i), e;
  }
  function uf(e, t, i) {
    return (
      (t = fr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = i),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Gv(e, t, i, l, c) {
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
      (this.eventTimes = zu(0)),
      (this.expirationTimes = zu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = zu(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = c),
      (this.mutableSourceEagerHydrationData = null);
  }
  function cf(e, t, i, l, c, p, v, k, T) {
    return (
      (e = new Gv(e, t, i, k, T)),
      t === 1 ? ((t = 1), p === !0 && (t |= 8)) : (t = 0),
      (p = fr(3, null, null, t)),
      (e.current = p),
      (p.stateNode = e),
      (p.memoizedState = {
        element: l,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      kc(p),
      e
    );
  }
  function Qv(e, t, i) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: U,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: t,
      implementation: i,
    };
  }
  function pm(e) {
    if (!e) return Si;
    e = e._reactInternals;
    e: {
      if (Ae(e) !== e || e.tag !== 1) throw Error(r(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (jn(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(r(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (jn(i)) return Up(e, i, t);
    }
    return t;
  }
  function hm(e, t, i, l, c, p, v, k, T) {
    return (
      (e = cf(i, l, !0, e, c, p, v, k, T)),
      (e.context = pm(null)),
      (i = e.current),
      (l = hn()),
      (c = Mi(i)),
      (p = ri(l, c)),
      (p.callback = t ?? null),
      Ni(i, p, c),
      (e.current.lanes = c),
      To(e, c, l),
      Mn(e, l),
      e
    );
  }
  function Aa(e, t, i, l) {
    var c = t.current,
      p = hn(),
      v = Mi(c);
    return (
      (i = pm(i)),
      t.context === null ? (t.context = i) : (t.pendingContext = i),
      (t = ri(p, v)),
      (t.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (t.callback = l),
      (e = Ni(c, t, v)),
      e !== null && (br(e, c, v, p), pa(e, c, v)),
      v
    );
  }
  function Ia(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function mm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function ff(e, t) {
    mm(e, t), (e = e.alternate) && mm(e, t);
  }
  function Kv() {
    return null;
  }
  var gm =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function df(e) {
    this._internalRoot = e;
  }
  (La.prototype.render = df.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      Aa(e, t, null, null);
    }),
    (La.prototype.unmount = df.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ss(function () {
            Aa(null, e, null, null);
          }),
            (t[Zr] = null);
        }
      });
  function La(e) {
    this._internalRoot = e;
  }
  La.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Jd();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < xi.length && t !== 0 && t < xi[i].priority; i++);
      xi.splice(i, 0, e), i === 0 && np(e);
    }
  };
  function pf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Fa(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function vm() {}
  function Zv(e, t, i, l, c) {
    if (c) {
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var R = Ia(v);
          p.call(R);
        };
      }
      var v = hm(t, l, e, 0, null, !1, !1, "", vm);
      return (
        (e._reactRootContainer = v),
        (e[Zr] = v.current),
        Fo(e.nodeType === 8 ? e.parentNode : e),
        ss(),
        v
      );
    }
    for (; (c = e.lastChild); ) e.removeChild(c);
    if (typeof l == "function") {
      var k = l;
      l = function () {
        var R = Ia(T);
        k.call(R);
      };
    }
    var T = cf(e, 0, !1, null, null, !1, !1, "", vm);
    return (
      (e._reactRootContainer = T),
      (e[Zr] = T.current),
      Fo(e.nodeType === 8 ? e.parentNode : e),
      ss(function () {
        Aa(t, T, i, l);
      }),
      T
    );
  }
  function $a(e, t, i, l, c) {
    var p = i._reactRootContainer;
    if (p) {
      var v = p;
      if (typeof c == "function") {
        var k = c;
        c = function () {
          var T = Ia(v);
          k.call(T);
        };
      }
      Aa(t, v, e, c);
    } else v = Zv(i, t, e, c, l);
    return Ia(v);
  }
  (Kd = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Co(t.pendingLanes);
          i !== 0 &&
            (Au(t, i | 1),
            Mn(t, be()),
            (Fe & 6) === 0 && ((Ks = be() + 500), Ci()));
        }
        break;
      case 13:
        ss(function () {
          var l = ni(e, 1);
          if (l !== null) {
            var c = hn();
            br(l, e, 1, c);
          }
        }),
          ff(e, 1);
    }
  }),
    (Iu = function (e) {
      if (e.tag === 13) {
        var t = ni(e, 134217728);
        if (t !== null) {
          var i = hn();
          br(t, e, 134217728, i);
        }
        ff(e, 134217728);
      }
    }),
    (Zd = function (e) {
      if (e.tag === 13) {
        var t = Mi(e),
          i = ni(e, t);
        if (i !== null) {
          var l = hn();
          br(i, e, t, l);
        }
        ff(e, t);
      }
    }),
    (Jd = function () {
      return Ye;
    }),
    (ep = function (e, t) {
      var i = Ye;
      try {
        return (Ye = e), t();
      } finally {
        Ye = i;
      }
    }),
    (Cr = function (e, t, i) {
      switch (t) {
        case "input":
          if ((D(e, i), (t = i.name), i.type === "radio" && t != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < i.length;
              t++
            ) {
              var l = i[t];
              if (l !== e && l.form === e.form) {
                var c = ra(l);
                if (!c) throw Error(r(90));
                Ht(l), D(l, c);
              }
            }
          }
          break;
        case "textarea":
          Dr(e, i);
          break;
        case "select":
          (t = i.value), t != null && Ve(e, !!i.multiple, t, !1);
      }
    }),
    (sr = rf),
    (hi = ss);
  var Jv = { usingClientEntryPoint: !1, Events: [Bo, Ls, ra, Ar, Qr, rf] },
    nl = {
      findFiberByHostInstance: Ki,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    ex = {
      bundleType: nl.bundleType,
      version: nl.version,
      rendererPackageName: nl.rendererPackageName,
      rendererConfig: nl.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: O.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = $n(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: nl.findFiberByHostInstance || Kv,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ua.isDisabled && Ua.supportsFiber)
      try {
        (Ir = Ua.inject(ex)), (dn = Ua);
      } catch {}
  }
  return (
    (bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jv),
    (bn.createPortal = function (e, t) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!pf(t)) throw Error(r(200));
      return Qv(e, t, null, i);
    }),
    (bn.createRoot = function (e, t) {
      if (!pf(e)) throw Error(r(299));
      var i = !1,
        l = "",
        c = gm;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (i = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = cf(e, 1, !1, null, null, i, !1, l, c)),
        (e[Zr] = t.current),
        Fo(e.nodeType === 8 ? e.parentNode : e),
        new df(t)
      );
    }),
    (bn.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(r(188))
          : ((e = Object.keys(e).join(",")), Error(r(268, e)));
      return (e = $n(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (bn.flushSync = function (e) {
      return ss(e);
    }),
    (bn.hydrate = function (e, t, i) {
      if (!Fa(t)) throw Error(r(200));
      return $a(null, e, t, !0, i);
    }),
    (bn.hydrateRoot = function (e, t, i) {
      if (!pf(e)) throw Error(r(405));
      var l = (i != null && i.hydratedSources) || null,
        c = !1,
        p = "",
        v = gm;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (c = !0),
          i.identifierPrefix !== void 0 && (p = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (v = i.onRecoverableError)),
        (t = hm(t, null, e, 1, i ?? null, c, !1, p, v)),
        (e[Zr] = t.current),
        Fo(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (i = l[e]),
            (c = i._getVersion),
            (c = c(i._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [i, c])
              : t.mutableSourceEagerHydrationData.push(i, c);
      return new La(t);
    }),
    (bn.render = function (e, t, i) {
      if (!Fa(t)) throw Error(r(200));
      return $a(null, e, t, !1, i);
    }),
    (bn.unmountComponentAtNode = function (e) {
      if (!Fa(e)) throw Error(r(40));
      return e._reactRootContainer
        ? (ss(function () {
            $a(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Zr] = null);
            });
          }),
          !0)
        : !1;
    }),
    (bn.unstable_batchedUpdates = rf),
    (bn.unstable_renderSubtreeIntoContainer = function (e, t, i, l) {
      if (!Fa(i)) throw Error(r(200));
      if (e == null || e._reactInternals === void 0) throw Error(r(38));
      return $a(e, t, i, !1, l);
    }),
    (bn.version = "18.3.1-next-f1338f8080-20240426"),
    bn
  );
}
var Tm;
function ax() {
  if (Tm) return gf.exports;
  Tm = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (n) {
        console.error(n);
      }
  }
  return u(), (gf.exports = lx()), gf.exports;
}
var Nm;
function ux() {
  if (Nm) return Ba;
  Nm = 1;
  var u = ax();
  return (Ba.createRoot = u.createRoot), (Ba.hydrateRoot = u.hydrateRoot), Ba;
}
var cx = ux(),
  Ue = yd();
const zi = Nu(Ue);
var yf, jm;
function fx() {
  if (jm) return yf;
  jm = 1;
  var u = typeof Element < "u",
    n = typeof Map == "function",
    r = typeof Set == "function",
    s = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function o(a, d) {
    if (a === d) return !0;
    if (a && d && typeof a == "object" && typeof d == "object") {
      if (a.constructor !== d.constructor) return !1;
      var f, h, g;
      if (Array.isArray(a)) {
        if (((f = a.length), f != d.length)) return !1;
        for (h = f; h-- !== 0; ) if (!o(a[h], d[h])) return !1;
        return !0;
      }
      var x;
      if (n && a instanceof Map && d instanceof Map) {
        if (a.size !== d.size) return !1;
        for (x = a.entries(); !(h = x.next()).done; )
          if (!d.has(h.value[0])) return !1;
        for (x = a.entries(); !(h = x.next()).done; )
          if (!o(h.value[1], d.get(h.value[0]))) return !1;
        return !0;
      }
      if (r && a instanceof Set && d instanceof Set) {
        if (a.size !== d.size) return !1;
        for (x = a.entries(); !(h = x.next()).done; )
          if (!d.has(h.value[0])) return !1;
        return !0;
      }
      if (s && ArrayBuffer.isView(a) && ArrayBuffer.isView(d)) {
        if (((f = a.length), f != d.length)) return !1;
        for (h = f; h-- !== 0; ) if (a[h] !== d[h]) return !1;
        return !0;
      }
      if (a.constructor === RegExp)
        return a.source === d.source && a.flags === d.flags;
      if (
        a.valueOf !== Object.prototype.valueOf &&
        typeof a.valueOf == "function" &&
        typeof d.valueOf == "function"
      )
        return a.valueOf() === d.valueOf();
      if (
        a.toString !== Object.prototype.toString &&
        typeof a.toString == "function" &&
        typeof d.toString == "function"
      )
        return a.toString() === d.toString();
      if (((g = Object.keys(a)), (f = g.length), f !== Object.keys(d).length))
        return !1;
      for (h = f; h-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(d, g[h])) return !1;
      if (u && a instanceof Element) return !1;
      for (h = f; h-- !== 0; )
        if (
          !(
            (g[h] === "_owner" || g[h] === "__v" || g[h] === "__o") &&
            a.$$typeof
          ) &&
          !o(a[g[h]], d[g[h]])
        )
          return !1;
      return !0;
    }
    return a !== a && d !== d;
  }
  return (
    (yf = function (d, f) {
      try {
        return o(d, f);
      } catch (h) {
        if ((h.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"), !1
          );
        throw h;
      }
    }),
    yf
  );
}
var dx = fx();
const px = Nu(dx);
var _f, Em;
function hx() {
  if (Em) return _f;
  Em = 1;
  var u = function (n, r, s, o, a, d, f, h) {
    if (!n) {
      var g;
      if (r === void 0)
        g = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var x = [s, o, a, d, f, h],
          _ = 0;
        (g = new Error(
          r.replace(/%s/g, function () {
            return x[_++];
          })
        )),
          (g.name = "Invariant Violation");
      }
      throw ((g.framesToPop = 1), g);
    }
  };
  return (_f = u), _f;
}
var mx = hx();
const Pm = Nu(mx);
var wf, Mm;
function gx() {
  return (
    Mm ||
      ((Mm = 1),
      (wf = function (n, r, s, o) {
        var a = s ? s.call(o, n, r) : void 0;
        if (a !== void 0) return !!a;
        if (n === r) return !0;
        if (typeof n != "object" || !n || typeof r != "object" || !r) return !1;
        var d = Object.keys(n),
          f = Object.keys(r);
        if (d.length !== f.length) return !1;
        for (
          var h = Object.prototype.hasOwnProperty.bind(r), g = 0;
          g < d.length;
          g++
        ) {
          var x = d[g];
          if (!h(x)) return !1;
          var _ = n[x],
            S = r[x];
          if (
            ((a = s ? s.call(o, _, S, x) : void 0),
            a === !1 || (a === void 0 && _ !== S))
          )
            return !1;
        }
        return !0;
      })),
    wf
  );
}
var vx = gx();
const xx = Nu(vx);
var P0 = ((u) => (
    (u.BASE = "base"),
    (u.BODY = "body"),
    (u.HEAD = "head"),
    (u.HTML = "html"),
    (u.LINK = "link"),
    (u.META = "meta"),
    (u.NOSCRIPT = "noscript"),
    (u.SCRIPT = "script"),
    (u.STYLE = "style"),
    (u.TITLE = "title"),
    (u.FRAGMENT = "Symbol(react.fragment)"),
    u
  ))(P0 || {}),
  kf = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  bm = Object.values(P0),
  _d = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  yx = Object.entries(_d).reduce((u, [n, r]) => ((u[r] = n), u), {}),
  Or = "data-rh",
  ao = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  uo = (u, n) => {
    for (let r = u.length - 1; r >= 0; r -= 1) {
      const s = u[r];
      if (Object.prototype.hasOwnProperty.call(s, n)) return s[n];
    }
    return null;
  },
  _x = (u) => {
    let n = uo(u, "title");
    const r = uo(u, ao.TITLE_TEMPLATE);
    if ((Array.isArray(n) && (n = n.join("")), r && n))
      return r.replace(/%s/g, () => n);
    const s = uo(u, ao.DEFAULT_TITLE);
    return n || s || void 0;
  },
  wx = (u) => uo(u, ao.ON_CHANGE_CLIENT_STATE) || (() => {}),
  Sf = (u, n) =>
    n
      .filter((r) => typeof r[u] < "u")
      .map((r) => r[u])
      .reduce((r, s) => ({ ...r, ...s }), {}),
  kx = (u, n) =>
    n
      .filter((r) => typeof r.base < "u")
      .map((r) => r.base)
      .reverse()
      .reduce((r, s) => {
        if (!r.length) {
          const o = Object.keys(s);
          for (let a = 0; a < o.length; a += 1) {
            const f = o[a].toLowerCase();
            if (u.indexOf(f) !== -1 && s[f]) return r.concat(s);
          }
        }
        return r;
      }, []),
  Sx = (u) => console && typeof console.warn == "function" && console.warn(u),
  il = (u, n, r) => {
    const s = {};
    return r
      .filter((o) =>
        Array.isArray(o[u])
          ? !0
          : (typeof o[u] < "u" &&
              Sx(
                `Helmet: ${u} should be of type "Array". Instead found type "${typeof o[
                  u
                ]}"`
              ),
            !1)
      )
      .map((o) => o[u])
      .reverse()
      .reduce((o, a) => {
        const d = {};
        a.filter((h) => {
          let g;
          const x = Object.keys(h);
          for (let S = 0; S < x.length; S += 1) {
            const y = x[S],
              N = y.toLowerCase();
            n.indexOf(N) !== -1 &&
              !(g === "rel" && h[g].toLowerCase() === "canonical") &&
              !(N === "rel" && h[N].toLowerCase() === "stylesheet") &&
              (g = N),
              n.indexOf(y) !== -1 &&
                (y === "innerHTML" || y === "cssText" || y === "itemprop") &&
                (g = y);
          }
          if (!g || !h[g]) return !1;
          const _ = h[g].toLowerCase();
          return (
            s[g] || (s[g] = {}),
            d[g] || (d[g] = {}),
            s[g][_] ? !1 : ((d[g][_] = !0), !0)
          );
        })
          .reverse()
          .forEach((h) => o.push(h));
        const f = Object.keys(d);
        for (let h = 0; h < f.length; h += 1) {
          const g = f[h],
            x = { ...s[g], ...d[g] };
          s[g] = x;
        }
        return o;
      }, [])
      .reverse();
  },
  Cx = (u, n) => {
    if (Array.isArray(u) && u.length) {
      for (let r = 0; r < u.length; r += 1) if (u[r][n]) return !0;
    }
    return !1;
  },
  Tx = (u) => ({
    baseTag: kx(["href"], u),
    bodyAttributes: Sf("bodyAttributes", u),
    defer: uo(u, ao.DEFER),
    encode: uo(u, ao.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: Sf("htmlAttributes", u),
    linkTags: il("link", ["rel", "href"], u),
    metaTags: il(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      u
    ),
    noscriptTags: il("noscript", ["innerHTML"], u),
    onChangeClientState: wx(u),
    scriptTags: il("script", ["src", "innerHTML"], u),
    styleTags: il("style", ["cssText"], u),
    title: _x(u),
    titleAttributes: Sf("titleAttributes", u),
    prioritizeSeoTags: Cx(u, ao.PRIORITIZE_SEO_TAGS),
  }),
  M0 = (u) => (Array.isArray(u) ? u.join("") : u),
  Nx = (u, n) => {
    const r = Object.keys(u);
    for (let s = 0; s < r.length; s += 1)
      if (n[r[s]] && n[r[s]].includes(u[r[s]])) return !0;
    return !1;
  },
  Cf = (u, n) =>
    Array.isArray(u)
      ? u.reduce(
          (r, s) => (Nx(s, n) ? r.priority.push(s) : r.default.push(s), r),
          { priority: [], default: [] }
        )
      : { default: u, priority: [] },
  Rm = (u, n) => ({ ...u, [n]: void 0 }),
  jx = ["noscript", "script", "style"],
  Vf = (u, n = !0) =>
    n === !1
      ? String(u)
      : String(u)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  b0 = (u) =>
    Object.keys(u).reduce((n, r) => {
      const s = typeof u[r] < "u" ? `${r}="${u[r]}"` : `${r}`;
      return n ? `${n} ${s}` : s;
    }, ""),
  Ex = (u, n, r, s) => {
    const o = b0(r),
      a = M0(n);
    return o
      ? `<${u} ${Or}="true" ${o}>${Vf(a, s)}</${u}>`
      : `<${u} ${Or}="true">${Vf(a, s)}</${u}>`;
  },
  Px = (u, n, r = !0) =>
    n.reduce((s, o) => {
      const a = o,
        d = Object.keys(a)
          .filter((g) => !(g === "innerHTML" || g === "cssText"))
          .reduce((g, x) => {
            const _ = typeof a[x] > "u" ? x : `${x}="${Vf(a[x], r)}"`;
            return g ? `${g} ${_}` : _;
          }, ""),
        f = a.innerHTML || a.cssText || "",
        h = jx.indexOf(u) === -1;
      return `${s}<${u} ${Or}="true" ${d}${h ? "/>" : `>${f}</${u}>`}`;
    }, ""),
  R0 = (u, n = {}) =>
    Object.keys(u).reduce((r, s) => {
      const o = _d[s];
      return (r[o || s] = u[s]), r;
    }, n),
  Mx = (u, n, r) => {
    const s = { key: n, [Or]: !0 },
      o = R0(r, s);
    return [zi.createElement("title", o, n)];
  },
  ru = (u, n) =>
    n.map((r, s) => {
      const o = { key: s, [Or]: !0 };
      return (
        Object.keys(r).forEach((a) => {
          const f = _d[a] || a;
          if (f === "innerHTML" || f === "cssText") {
            const h = r.innerHTML || r.cssText;
            o.dangerouslySetInnerHTML = { __html: h };
          } else o[f] = r[a];
        }),
        zi.createElement(u, o)
      );
    }),
  pr = (u, n, r = !0) => {
    switch (u) {
      case "title":
        return {
          toComponent: () => Mx(u, n.title, n.titleAttributes),
          toString: () => Ex(u, n.title, n.titleAttributes, r),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => R0(n), toString: () => b0(n) };
      default:
        return { toComponent: () => ru(u, n), toString: () => Px(u, n, r) };
    }
  },
  bx = ({ metaTags: u, linkTags: n, scriptTags: r, encode: s }) => {
    const o = Cf(u, kf.meta),
      a = Cf(n, kf.link),
      d = Cf(r, kf.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...ru("meta", o.priority),
          ...ru("link", a.priority),
          ...ru("script", d.priority),
        ],
        toString: () =>
          `${pr("meta", o.priority, s)} ${pr("link", a.priority, s)} ${pr(
            "script",
            d.priority,
            s
          )}`,
      },
      metaTags: o.default,
      linkTags: a.default,
      scriptTags: d.default,
    };
  },
  Rx = (u) => {
    const {
      baseTag: n,
      bodyAttributes: r,
      encode: s = !0,
      htmlAttributes: o,
      noscriptTags: a,
      styleTags: d,
      title: f = "",
      titleAttributes: h,
      prioritizeSeoTags: g,
    } = u;
    let { linkTags: x, metaTags: _, scriptTags: S } = u,
      y = { toComponent: () => {}, toString: () => "" };
    return (
      g &&
        ({
          priorityMethods: y,
          linkTags: x,
          metaTags: _,
          scriptTags: S,
        } = bx(u)),
      {
        priority: y,
        base: pr("base", n, s),
        bodyAttributes: pr("bodyAttributes", r, s),
        htmlAttributes: pr("htmlAttributes", o, s),
        link: pr("link", x, s),
        meta: pr("meta", _, s),
        noscript: pr("noscript", a, s),
        script: pr("script", S, s),
        style: pr("style", d, s),
        title: pr("title", { title: f, titleAttributes: h }, s),
      }
    );
  },
  Yf = Rx,
  Ha = [],
  O0 = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Wf = class {
    instances = [];
    canUseDOM = O0;
    context;
    value = {
      setHelmet: (u) => {
        this.context.helmet = u;
      },
      helmetInstances: {
        get: () => (this.canUseDOM ? Ha : this.instances),
        add: (u) => {
          (this.canUseDOM ? Ha : this.instances).push(u);
        },
        remove: (u) => {
          const n = (this.canUseDOM ? Ha : this.instances).indexOf(u);
          (this.canUseDOM ? Ha : this.instances).splice(n, 1);
        },
      },
    };
    constructor(u, n) {
      (this.context = u),
        (this.canUseDOM = n || !1),
        n ||
          (u.helmet = Yf({
            baseTag: [],
            bodyAttributes: {},
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          }));
    }
  },
  Ox = {},
  D0 = zi.createContext(Ox),
  z0 = class A0 extends Ue.Component {
    static canUseDOM = O0;
    helmetData;
    constructor(n) {
      super(n),
        (this.helmetData = new Wf(this.props.context || {}, A0.canUseDOM));
    }
    render() {
      return zi.createElement(
        D0.Provider,
        { value: this.helmetData.value },
        this.props.children
      );
    }
  },
  Js = (u, n) => {
    const r = document.head || document.querySelector("head"),
      s = r.querySelectorAll(`${u}[${Or}]`),
      o = [].slice.call(s),
      a = [];
    let d;
    return (
      n &&
        n.length &&
        n.forEach((f) => {
          const h = document.createElement(u);
          for (const g in f)
            if (Object.prototype.hasOwnProperty.call(f, g))
              if (g === "innerHTML") h.innerHTML = f.innerHTML;
              else if (g === "cssText")
                h.styleSheet
                  ? (h.styleSheet.cssText = f.cssText)
                  : h.appendChild(document.createTextNode(f.cssText));
              else {
                const x = g,
                  _ = typeof f[x] > "u" ? "" : f[x];
                h.setAttribute(g, _);
              }
          h.setAttribute(Or, "true"),
            o.some((g, x) => ((d = x), h.isEqualNode(g)))
              ? o.splice(d, 1)
              : a.push(h);
        }),
      o.forEach((f) => f.parentNode?.removeChild(f)),
      a.forEach((f) => r.appendChild(f)),
      { oldTags: o, newTags: a }
    );
  },
  qf = (u, n) => {
    const r = document.getElementsByTagName(u)[0];
    if (!r) return;
    const s = r.getAttribute(Or),
      o = s ? s.split(",") : [],
      a = [...o],
      d = Object.keys(n);
    for (const f of d) {
      const h = n[f] || "";
      r.getAttribute(f) !== h && r.setAttribute(f, h),
        o.indexOf(f) === -1 && o.push(f);
      const g = a.indexOf(f);
      g !== -1 && a.splice(g, 1);
    }
    for (let f = a.length - 1; f >= 0; f -= 1) r.removeAttribute(a[f]);
    o.length === a.length
      ? r.removeAttribute(Or)
      : r.getAttribute(Or) !== d.join(",") && r.setAttribute(Or, d.join(","));
  },
  Dx = (u, n) => {
    typeof u < "u" && document.title !== u && (document.title = M0(u)),
      qf("title", n);
  },
  Om = (u, n) => {
    const {
      baseTag: r,
      bodyAttributes: s,
      htmlAttributes: o,
      linkTags: a,
      metaTags: d,
      noscriptTags: f,
      onChangeClientState: h,
      scriptTags: g,
      styleTags: x,
      title: _,
      titleAttributes: S,
    } = u;
    qf("body", s), qf("html", o), Dx(_, S);
    const y = {
        baseTag: Js("base", r),
        linkTags: Js("link", a),
        metaTags: Js("meta", d),
        noscriptTags: Js("noscript", f),
        scriptTags: Js("script", g),
        styleTags: Js("style", x),
      },
      N = {},
      w = {};
    Object.keys(y).forEach((P) => {
      const { newTags: I, oldTags: A } = y[P];
      I.length && (N[P] = I), A.length && (w[P] = y[P].oldTags);
    }),
      n && n(),
      h(u, N, w);
  },
  sl = null,
  zx = (u) => {
    sl && cancelAnimationFrame(sl),
      u.defer
        ? (sl = requestAnimationFrame(() => {
            Om(u, () => {
              sl = null;
            });
          }))
        : (Om(u), (sl = null));
  },
  Ax = zx,
  Dm = class extends Ue.Component {
    rendered = !1;
    shouldComponentUpdate(u) {
      return !xx(u, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: u } = this.props.context;
      u.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: u, setHelmet: n } = this.props.context;
      let r = null;
      const s = Tx(
        u.get().map((o) => {
          const a = { ...o.props };
          return delete a.context, a;
        })
      );
      z0.canUseDOM ? Ax(s) : Yf && (r = Yf(s)), n(r);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: u } = this.props.context;
      u.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  ju = class extends Ue.Component {
    static defaultProps = {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    };
    shouldComponentUpdate(u) {
      return !px(Rm(this.props, "helmetData"), Rm(u, "helmetData"));
    }
    mapNestedChildrenToProps(u, n) {
      if (!n) return null;
      switch (u.type) {
        case "script":
        case "noscript":
          return { innerHTML: n };
        case "style":
          return { cssText: n };
        default:
          throw new Error(
            `<${u.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
          );
      }
    }
    flattenArrayTypeChildren(u, n, r, s) {
      return {
        ...n,
        [u.type]: [
          ...(n[u.type] || []),
          { ...r, ...this.mapNestedChildrenToProps(u, s) },
        ],
      };
    }
    mapObjectTypeChildren(u, n, r, s) {
      switch (u.type) {
        case "title":
          return { ...n, [u.type]: s, titleAttributes: { ...r } };
        case "body":
          return { ...n, bodyAttributes: { ...r } };
        case "html":
          return { ...n, htmlAttributes: { ...r } };
        default:
          return { ...n, [u.type]: { ...r } };
      }
    }
    mapArrayTypeChildrenToProps(u, n) {
      let r = { ...n };
      return (
        Object.keys(u).forEach((s) => {
          r = { ...r, [s]: u[s] };
        }),
        r
      );
    }
    warnOnInvalidChildren(u, n) {
      return (
        Pm(
          bm.some((r) => u.type === r),
          typeof u.type == "function"
            ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
            : `Only elements types ${bm.join(
                ", "
              )} are allowed. Helmet does not support rendering <${
                u.type
              }> elements. Refer to our API for more information.`
        ),
        Pm(
          !n ||
            typeof n == "string" ||
            (Array.isArray(n) && !n.some((r) => typeof r != "string")),
          `Helmet expects a string as a child of <${u.type}>. Did you forget to wrap your children in braces? ( <${u.type}>{\`\`}</${u.type}> ) Refer to our API for more information.`
        ),
        !0
      );
    }
    mapChildrenToProps(u, n) {
      let r = {};
      return (
        zi.Children.forEach(u, (s) => {
          if (!s || !s.props) return;
          const { children: o, ...a } = s.props,
            d = Object.keys(a).reduce(
              (h, g) => ((h[yx[g] || g] = a[g]), h),
              {}
            );
          let { type: f } = s;
          switch (
            (typeof f == "symbol"
              ? (f = f.toString())
              : this.warnOnInvalidChildren(s, o),
            f)
          ) {
            case "Symbol(react.fragment)":
              n = this.mapChildrenToProps(o, n);
              break;
            case "link":
            case "meta":
            case "noscript":
            case "script":
            case "style":
              r = this.flattenArrayTypeChildren(s, r, d, o);
              break;
            default:
              n = this.mapObjectTypeChildren(s, n, d, o);
              break;
          }
        }),
        this.mapArrayTypeChildrenToProps(r, n)
      );
    }
    render() {
      const { children: u, ...n } = this.props;
      let r = { ...n },
        { helmetData: s } = n;
      if ((u && (r = this.mapChildrenToProps(u, r)), s && !(s instanceof Wf))) {
        const o = s;
        (s = new Wf(o.context, !0)), delete r.helmetData;
      }
      return s
        ? zi.createElement(Dm, { ...r, context: s.value })
        : zi.createElement(D0.Consumer, null, (o) =>
            zi.createElement(Dm, { ...r, context: o })
          );
    }
  };
const I0 = "/assets/hero-CSh-UWZk.png",
  Le = {
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
    p3ff62a40:
      "M12.316 11.8067V27.992H17.3413V19.988C17.3413 17.876 17.7387 15.8307 20.3573 15.8307C22.94 15.8307 22.972 18.2453 22.972 20.1213V27.9933H28V19.1173C28 14.7573 27.0613 11.4067 21.9653 11.4067C19.5187 11.4067 17.8787 12.7493 17.208 14.02H17.14V11.8067H12.316ZM4.12667 11.8067H9.16V27.992H4.12667V11.8067Z",
    p5548000:
      "M22.408 11.0467C23.2018 11.0467 23.8453 10.4032 23.8453 9.60933C23.8453 8.81552 23.2018 8.172 22.408 8.172C21.6142 8.172 20.9707 8.81552 20.9707 9.60933C20.9707 10.4032 21.6142 11.0467 22.408 11.0467Z",
    p8ca3400:
      "M15.9987 9.836C14.3635 9.836 12.7953 10.4856 11.6391 11.6418C10.4829 12.798 9.83333 14.3662 9.83333 16.0013C9.83333 17.6365 10.4829 19.2047 11.6391 20.3609C12.7953 21.5171 14.3635 22.1667 15.9987 22.1667C17.6338 22.1667 19.202 21.5171 20.3582 20.3609C21.5144 19.2047 22.164 17.6365 22.164 16.0013C22.164 14.3662 21.5144 12.798 20.3582 11.6418C19.202 10.4856 17.6338 9.836 15.9987 9.836ZM15.9987 20.0053C14.9364 20.0053 13.9176 19.5833 13.1665 18.8322C12.4153 18.0811 11.9933 17.0623 11.9933 16C11.9933 14.9377 12.4153 13.9189 13.1665 13.1678C13.9176 12.4167 14.9364 11.9947 15.9987 11.9947C17.0609 11.9947 18.0797 12.4167 18.8309 13.1678C19.582 13.9189 20.004 14.9377 20.004 16C20.004 17.0623 19.582 18.0811 18.8309 18.8322C18.0797 19.5833 17.0609 20.0053 15.9987 20.0053Z",
  };
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ix = (u) => u.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Lx = (u) =>
    u.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, r, s) =>
      s ? s.toUpperCase() : r.toLowerCase()
    ),
  zm = (u) => {
    const n = Lx(u);
    return n.charAt(0).toUpperCase() + n.slice(1);
  },
  L0 = (...u) =>
    u
      .filter((n, r, s) => !!n && n.trim() !== "" && s.indexOf(n) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Fx = {
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
 */ const $x = Ue.forwardRef(
  (
    {
      color: u = "currentColor",
      size: n = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: s,
      className: o = "",
      children: a,
      iconNode: d,
      ...f
    },
    h
  ) =>
    Ue.createElement(
      "svg",
      {
        ref: h,
        ...Fx,
        width: n,
        height: n,
        stroke: u,
        strokeWidth: s ? (Number(r) * 24) / Number(n) : r,
        className: L0("lucide", o),
        ...f,
      },
      [
        ...d.map(([g, x]) => Ue.createElement(g, x)),
        ...(Array.isArray(a) ? a : [a]),
      ]
    )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const He = (u, n) => {
  const r = Ue.forwardRef(({ className: s, ...o }, a) =>
    Ue.createElement($x, {
      ref: a,
      iconNode: n,
      className: L0(`lucide-${Ix(zm(u))}`, `lucide-${u}`, s),
      ...o,
    })
  );
  return (r.displayName = zm(u)), r;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ux = [
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
  Bx = He("atom", Ux);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hx = [
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
  Tf = He("box", Hx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vx = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  Am = He("circle-check-big", Vx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yx = [
    [
      "path",
      {
        d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
        key: "p7xjir",
      },
    ],
  ],
  Wx = He("cloud", Yx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qx = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  Xx = He("code-xml", qx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gx = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ],
  Qx = He("database", Gx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kx = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
  ],
  Zx = He("download", Kx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jx = [
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
  Im = He("file-code", Jx);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ey = [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360",
      },
    ],
  ],
  Lm = He("folder", ey);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ty = [
    ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
    ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }],
  ],
  ny = He("gauge", ty);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ry = [
    ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
    ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }],
  ],
  Nf = He("git-branch", ry);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iy = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  F0 = He("github", iy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sy = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  oy = He("globe", sy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ly = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  ay = He("instagram", ly);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uy = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  cy = He("linkedin", uy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fy = [
    [
      "rect",
      { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
    ],
    ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ],
  Fm = He("mail", fy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dy = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  py = He("map-pin", dy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hy = [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
  ],
  my = He("menu", hy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gy = [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ],
  vy = He("message-square", gy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xy = [
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
  $m = He("paintbrush", xy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yy = [
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
  Um = He("palette", yy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _y = [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ],
  Bm = He("phone", _y);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wy = [
    [
      "path",
      {
        d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
        key: "w46dr5",
      },
    ],
  ],
  ky = He("puzzle", wy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sy = [
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
  Cy = He("smartphone", Sy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ty = [
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
  Ny = He("test-tube-diagonal", Ty);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jy = [
    ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
    ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
    ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
  ],
  Ey = He("timer", jy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Py = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
  ],
  My = He("users", Py);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const by = [
    ["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }],
    ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }],
    ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }],
  ],
  Ry = He("wind", by);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oy = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Dy = He("x", Oy);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zy = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  jf = He("zap", zy),
  wd = "/assets/toi-Bu2AIJHe.png",
  Ay = "/assets/screener-CU_jy_TG.png",
  $0 = "/assets/mm-CwPG45KQ.png",
  Iy = "/assets/adlob-Ci_Dnlwm.png",
  Ly = "/assets/funpark-lzxoDaa8.png",
  Fy = "/assets/ecommerce-C0MIJc0m.png",
  $y = "/assets/spotify-VkquvCWL.png",
  Uy = "/assets/libsilong-BTfj1wwL.png",
  U0 = "/assets/screenr_long-DJ36Kh8t.png",
  We = {
    name: "Aquib Yazdani",
    displayName: "aquib yazdani",
    title: "Sr. Software Engineer",
    location: "Pune Maharashtra, India",
    email: "yazdaniaquib2@gmail.com",
    phone: "+91 8210773776",
    copyright: "© 2023 Aquib Yazdani",
    careerStartDate: "2021-06-01",
  },
  Jn = {
    linkedin: "https://www.linkedin.com/in/aquibyazdani/",
    github: "https://github.com/aquibyazdani/",
    instagram: "https://www.instagram.com/aquibyazdani/",
  },
  Hm = {
    intro:
      "I'm a Full-Stack Developer based in India. I build end-to-end, accessible, and high-performance web solutions, with strong expertise in React and modern frontend technologies. I care deeply about clean architecture, usability, and creating meaningful digital products.",
    background:
      "I care deeply about clean architecture, usability, and creating meaningful digital products. While I specialize in frontend development, I also develop full-stack solutions that integrate seamlessly from UI to backend. Outside of programming, I enjoy playing football, photography, and a few rounds of Valorant.",
  },
  Ut = {
    frontend: [
      { name: "React.js", icon: Bx },
      { name: "React Native", icon: Cy },
      { name: "Next.js", icon: jf },
      { name: "JavaScript (ES6+)", icon: Xx },
      { name: "TypeScript", icon: Im },
      { name: "HTML", icon: Im },
      { name: "CSS", icon: $m },
      { name: "SCSS", icon: $m },
      { name: "Tailwind CSS", icon: Ry },
      { name: "Material UI", icon: Um },
      { name: "Bootstrap", icon: Um },
    ],
    stateManagement: [
      { name: "Redux", icon: Tf },
      { name: "Context API", icon: Tf },
      { name: "Zustand", icon: Tf },
    ],
    testing: [
      { name: "Jest", icon: Am },
      { name: "React Testing Library", icon: Ny },
      { name: "Unit Testing", icon: Am },
    ],
    performance: [
      { name: "SSR", icon: jf },
      { name: "SSG", icon: jf },
      { name: "Component Reusability", icon: ky },
      { name: "UI Optimization", icon: ny },
      { name: "Load Time Reduction", icon: Ey },
      { name: "Accessibility Improvements", icon: My },
    ],
    api: [
      { name: "RESTful APIs", icon: oy },
      { name: "GraphQL", icon: Qx },
    ],
    tools: [
      { name: "Git", icon: Nf },
      { name: "GitHub", icon: F0 },
      { name: "Azure", icon: Wx },
      { name: "GitLab", icon: Nf },
      { name: "Bitbucket", icon: Nf },
      { name: "Jira", icon: Lm },
      { name: "Slack", icon: vy },
      { name: "ProofHub", icon: Lm },
    ],
  },
  pu = [
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
  B0 = [
    {
      id: 1,
      institution: "Heritage Institute Of Technology, Kolkata",
      degree: "B.Tech in Chemical Engineering (CGPA: 8.5)",
      period: "2016 - 2020",
    },
  ],
  Eu = [
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
      src: U0,
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
      src: wd,
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
      src: Iy,
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
      src: Uy,
      achievements: [
        "Improved operational efficiency by 30% with enhanced data workflows.",
        "Reduced manual intervention by 20% through seamless system integrations.",
        "Implemented efficient language management to support multilingual content.",
        "Implemented SEO-friendly practices, improving search rankings and organic traffic.",
      ],
    },
  ],
  kd = [
    { id: 1, title: "Portfolio", url: "https://aquibyazdani.com" },
    {
      id: 2,
      title: "Amusement Park",
      url: "https://amusement-park-new.netlify.app",
      src: Ly,
    },
    {
      id: 3,
      title: "Memorable Mumbai",
      url: "https://memorablemumbai.com",
      src: $0,
    },
    {
      id: 4,
      title: "E-commerce clone",
      url: "https://shoppe-aquib-yazdani.netlify.app",
      src: Fy,
    },
    {
      id: 5,
      title: "Spotify clone",
      url: "https://spotify-yazdani.netlify.app",
      src: $y,
    },
    {
      id: 6,
      title: "Screener",
      url: "https://screener.zamzam-capital.com",
      src: Ay,
    },
    { id: 7, title: "TOI ePaper - Archive", url: "#", src: wd },
  ],
  H0 = [
    "Boosted application responsiveness by 25% through optimized front-end code and design.",
    "Reduced version control conflicts by 15%, improving workflow efficiency by 20%.",
    "Improved team collaboration by 10%, leading to a 12% increase in project delivery speed.",
  ],
  V0 = [
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
  Ef = [
    { name: "LinkedIn", icon: cy, url: Jn.linkedin },
    { name: "GitHub", icon: F0, url: Jn.github },
    { name: "Instagram", icon: ay, url: Jn.instagram },
  ],
  Vm = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
  ];
function Pu({ navigate: u, currentPage: n }) {
  const [r, s] = Ue.useState(!1),
    o = () => {
      s(!r);
    };
  return m.jsxs("nav", {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-[#484848]",
    children: [
      m.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
        children: [
          m.jsx("button", {
            onClick: () => u("/"),
            className:
              "text-[#c7c7c7] text-[28px] tracking-[-0.32px] cursor-pointer uppercase font-bold",
            children: We.displayName,
          }),
          m.jsx("div", {
            className: "hidden md:flex items-center gap-8",
            children: Vm.map((a) =>
              m.jsx(
                "button",
                {
                  onClick: () => u(a.path),
                  className: `cursor-pointer font-['Manrope',sans-serif] text-[14px] uppercase transition-colors ${
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
          m.jsx("button", {
            onClick: o,
            className:
              "md:hidden text-[#c7c7c7] hover:text-white transition-colors",
            "aria-label": "Toggle menu",
            children: r
              ? m.jsx(Dy, { className: "size-6" })
              : m.jsx(my, { className: "size-6" }),
          }),
        ],
      }),
      r &&
        m.jsx("div", {
          className: "md:hidden bg-neutral-950 border-t border-[#484848]",
          children: m.jsx("div", {
            className: "max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4",
            children: Vm.map((a) =>
              m.jsx(
                "button",
                {
                  onClick: () => {
                    u(a.path), s(!1);
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
function oi(u) {
  if (u === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return u;
}
function Y0(u, n) {
  (u.prototype = Object.create(n.prototype)),
    (u.prototype.constructor = u),
    (u.__proto__ = n);
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
  vo = { duration: 0.5, overwrite: !1, delay: 0 },
  Sd,
  Xt,
  ot,
  gr = 1e8,
  Xe = 1 / gr,
  Xf = Math.PI * 2,
  By = Xf / 4,
  Hy = 0,
  W0 = Math.sqrt,
  Vy = Math.cos,
  Yy = Math.sin,
  Bt = function (n) {
    return typeof n == "string";
  },
  mt = function (n) {
    return typeof n == "function";
  },
  fi = function (n) {
    return typeof n == "number";
  },
  Cd = function (n) {
    return typeof n > "u";
  },
  Gr = function (n) {
    return typeof n == "object";
  },
  On = function (n) {
    return n !== !1;
  },
  Td = function () {
    return typeof window < "u";
  },
  Va = function (n) {
    return mt(n) || Bt(n);
  },
  q0 =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  an = Array.isArray,
  Gf = /(?:-?\.?\d|\.)+/gi,
  X0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  so = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Pf = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  G0 = /[+-]=-?[.\d]+/,
  Q0 = /[^,'"\[\]\s]+/gi,
  Wy = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ct,
  Hr,
  Qf,
  Nd,
  tr = {},
  hu = {},
  K0,
  Z0 = function (n) {
    return (hu = xo(n, tr)) && In;
  },
  jd = function (n, r) {
    return console.warn(
      "Invalid property",
      n,
      "set to",
      r,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  El = function (n, r) {
    return !r && console.warn(n);
  },
  J0 = function (n, r) {
    return (n && (tr[n] = r) && hu && (hu[n] = r)) || tr;
  },
  Pl = function () {
    return 0;
  },
  qy = { suppressEvents: !0, isStart: !0, kill: !1 },
  iu = { suppressEvents: !0, kill: !1 },
  Xy = { suppressEvents: !0 },
  Ed = {},
  Ui = [],
  Kf = {},
  e1,
  Xn = {},
  Mf = {},
  Ym = 30,
  su = [],
  Pd = "",
  Md = function (n) {
    var r = n[0],
      s,
      o;
    if ((Gr(r) || mt(r) || (n = [n]), !(s = (r._gsap || {}).harness))) {
      for (o = su.length; o-- && !su[o].targetTest(r); );
      s = su[o];
    }
    for (o = n.length; o--; )
      (n[o] && (n[o]._gsap || (n[o]._gsap = new C1(n[o], s)))) ||
        n.splice(o, 1);
    return n;
  },
  vs = function (n) {
    return n._gsap || Md(vr(n))[0]._gsap;
  },
  t1 = function (n, r, s) {
    return (s = n[r]) && mt(s)
      ? n[r]()
      : (Cd(s) && n.getAttribute && n.getAttribute(r)) || s;
  },
  Dn = function (n, r) {
    return (n = n.split(",")).forEach(r) || n;
  },
  yt = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  jt = function (n) {
    return Math.round(n * 1e7) / 1e7 || 0;
  },
  co = function (n, r) {
    var s = r.charAt(0),
      o = parseFloat(r.substr(2));
    return (
      (n = parseFloat(n)),
      s === "+" ? n + o : s === "-" ? n - o : s === "*" ? n * o : n / o
    );
  },
  Gy = function (n, r) {
    for (var s = r.length, o = 0; n.indexOf(r[o]) < 0 && ++o < s; );
    return o < s;
  },
  mu = function () {
    var n = Ui.length,
      r = Ui.slice(0),
      s,
      o;
    for (Kf = {}, Ui.length = 0, s = 0; s < n; s++)
      (o = r[s]),
        o && o._lazy && (o.render(o._lazy[0], o._lazy[1], !0)._lazy = 0);
  },
  bd = function (n) {
    return !!(n._initted || n._startAt || n.add);
  },
  n1 = function (n, r, s, o) {
    Ui.length && !Xt && mu(),
      n.render(r, s, !!(Xt && r < 0 && bd(n))),
      Ui.length && !Xt && mu();
  },
  r1 = function (n) {
    var r = parseFloat(n);
    return (r || r === 0) && (n + "").match(Q0).length < 2
      ? r
      : Bt(n)
      ? n.trim()
      : n;
  },
  i1 = function (n) {
    return n;
  },
  nr = function (n, r) {
    for (var s in r) s in n || (n[s] = r[s]);
    return n;
  },
  Qy = function (n) {
    return function (r, s) {
      for (var o in s)
        o in r || (o === "duration" && n) || o === "ease" || (r[o] = s[o]);
    };
  },
  xo = function (n, r) {
    for (var s in r) n[s] = r[s];
    return n;
  },
  Wm = function u(n, r) {
    for (var s in r)
      s !== "__proto__" &&
        s !== "constructor" &&
        s !== "prototype" &&
        (n[s] = Gr(r[s]) ? u(n[s] || (n[s] = {}), r[s]) : r[s]);
    return n;
  },
  gu = function (n, r) {
    var s = {},
      o;
    for (o in n) o in r || (s[o] = n[o]);
    return s;
  },
  gl = function (n) {
    var r = n.parent || ct,
      s = n.keyframes ? Qy(an(n.keyframes)) : nr;
    if (On(n.inherit))
      for (; r; ) s(n, r.vars.defaults), (r = r.parent || r._dp);
    return n;
  },
  Ky = function (n, r) {
    for (var s = n.length, o = s === r.length; o && s-- && n[s] === r[s]; );
    return s < 0;
  },
  s1 = function (n, r, s, o, a) {
    var d = n[o],
      f;
    if (a) for (f = r[a]; d && d[a] > f; ) d = d._prev;
    return (
      d ? ((r._next = d._next), (d._next = r)) : ((r._next = n[s]), (n[s] = r)),
      r._next ? (r._next._prev = r) : (n[o] = r),
      (r._prev = d),
      (r.parent = r._dp = n),
      r
    );
  },
  Mu = function (n, r, s, o) {
    s === void 0 && (s = "_first"), o === void 0 && (o = "_last");
    var a = r._prev,
      d = r._next;
    a ? (a._next = d) : n[s] === r && (n[s] = d),
      d ? (d._prev = a) : n[o] === r && (n[o] = a),
      (r._next = r._prev = r.parent = null);
  },
  Vi = function (n, r) {
    n.parent &&
      (!r || n.parent.autoRemoveChildren) &&
      n.parent.remove &&
      n.parent.remove(n),
      (n._act = 0);
  },
  xs = function (n, r) {
    if (n && (!r || r._end > n._dur || r._start < 0))
      for (var s = n; s; ) (s._dirty = 1), (s = s.parent);
    return n;
  },
  Zy = function (n) {
    for (var r = n.parent; r && r.parent; )
      (r._dirty = 1), r.totalDuration(), (r = r.parent);
    return n;
  },
  Zf = function (n, r, s, o) {
    return (
      n._startAt &&
      (Xt
        ? n._startAt.revert(iu)
        : (n.vars.immediateRender && !n.vars.autoRevert) ||
          n._startAt.render(r, !0, o))
    );
  },
  Jy = function u(n) {
    return !n || (n._ts && u(n.parent));
  },
  qm = function (n) {
    return n._repeat ? yo(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
  },
  yo = function (n, r) {
    var s = Math.floor((n = jt(n / r)));
    return n && s === n ? s - 1 : s;
  },
  vu = function (n, r) {
    return (
      (n - r._start) * r._ts +
      (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    );
  },
  bu = function (n) {
    return (n._end = jt(
      n._start + (n._tDur / Math.abs(n._ts || n._rts || Xe) || 0)
    ));
  },
  Ru = function (n, r) {
    var s = n._dp;
    return (
      s &&
        s.smoothChildTiming &&
        n._ts &&
        ((n._start = jt(
          s._time -
            (n._ts > 0
              ? r / n._ts
              : ((n._dirty ? n.totalDuration() : n._tDur) - r) / -n._ts)
        )),
        bu(n),
        s._dirty || xs(s, n)),
      n
    );
  },
  o1 = function (n, r) {
    var s;
    if (
      ((r._time ||
        (!r._dur && r._initted) ||
        (r._start < n._time && (r._dur || !r.add))) &&
        ((s = vu(n.rawTime(), r)),
        (!r._dur || Ll(0, r.totalDuration(), s) - r._tTime > Xe) &&
          r.render(s, !0)),
      xs(n, r)._dp && n._initted && n._time >= n._dur && n._ts)
    ) {
      if (n._dur < n.duration())
        for (s = n; s._dp; )
          s.rawTime() >= 0 && s.totalTime(s._tTime), (s = s._dp);
      n._zTime = -Xe;
    }
  },
  Yr = function (n, r, s, o) {
    return (
      r.parent && Vi(r),
      (r._start = jt(
        (fi(s) ? s : s || n !== ct ? dr(n, s, r) : n._time) + r._delay
      )),
      (r._end = jt(
        r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
      )),
      s1(n, r, "_first", "_last", n._sort ? "_start" : 0),
      Jf(r) || (n._recent = r),
      o || o1(n, r),
      n._ts < 0 && Ru(n, n._tTime),
      n
    );
  },
  l1 = function (n, r) {
    return (
      (tr.ScrollTrigger || jd("scrollTrigger", r)) &&
      tr.ScrollTrigger.create(r, n)
    );
  },
  a1 = function (n, r, s, o, a) {
    if ((Od(n, r, a), !n._initted)) return 1;
    if (
      !s &&
      n._pt &&
      !Xt &&
      ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
      e1 !== Qn.frame
    )
      return Ui.push(n), (n._lazy = [a, o]), 1;
  },
  e2 = function u(n) {
    var r = n.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || u(r));
  },
  Jf = function (n) {
    var r = n.data;
    return r === "isFromStart" || r === "isStart";
  },
  t2 = function (n, r, s, o) {
    var a = n.ratio,
      d =
        r < 0 ||
        (!r &&
          ((!n._start && e2(n) && !(!n._initted && Jf(n))) ||
            ((n._ts < 0 || n._dp._ts < 0) && !Jf(n))))
          ? 0
          : 1,
      f = n._rDelay,
      h = 0,
      g,
      x,
      _;
    if (
      (f &&
        n._repeat &&
        ((h = Ll(0, n._tDur, r)),
        (x = yo(h, f)),
        n._yoyo && x & 1 && (d = 1 - d),
        x !== yo(n._tTime, f) &&
          ((a = 1 - d), n.vars.repeatRefresh && n._initted && n.invalidate())),
      d !== a || Xt || o || n._zTime === Xe || (!r && n._zTime))
    ) {
      if (!n._initted && a1(n, r, o, s, h)) return;
      for (
        _ = n._zTime,
          n._zTime = r || (s ? Xe : 0),
          s || (s = r && !_),
          n.ratio = d,
          n._from && (d = 1 - d),
          n._time = 0,
          n._tTime = h,
          g = n._pt;
        g;

      )
        g.r(d, g.d), (g = g._next);
      r < 0 && Zf(n, r, s, !0),
        n._onUpdate && !s && Zn(n, "onUpdate"),
        h && n._repeat && !s && n.parent && Zn(n, "onRepeat"),
        (r >= n._tDur || r < 0) &&
          n.ratio === d &&
          (d && Vi(n, 1),
          !s &&
            !Xt &&
            (Zn(n, d ? "onComplete" : "onReverseComplete", !0),
            n._prom && n._prom()));
    } else n._zTime || (n._zTime = r);
  },
  n2 = function (n, r, s) {
    var o;
    if (s > r)
      for (o = n._first; o && o._start <= s; ) {
        if (o.data === "isPause" && o._start > r) return o;
        o = o._next;
      }
    else
      for (o = n._last; o && o._start >= s; ) {
        if (o.data === "isPause" && o._start < r) return o;
        o = o._prev;
      }
  },
  _o = function (n, r, s, o) {
    var a = n._repeat,
      d = jt(r) || 0,
      f = n._tTime / n._tDur;
    return (
      f && !o && (n._time *= d / n._dur),
      (n._dur = d),
      (n._tDur = a ? (a < 0 ? 1e10 : jt(d * (a + 1) + n._rDelay * a)) : d),
      f > 0 && !o && Ru(n, (n._tTime = n._tDur * f)),
      n.parent && bu(n),
      s || xs(n.parent, n),
      n
    );
  },
  Xm = function (n) {
    return n instanceof _n ? xs(n) : _o(n, n._dur);
  },
  r2 = { _start: 0, endTime: Pl, totalDuration: Pl },
  dr = function u(n, r, s) {
    var o = n.labels,
      a = n._recent || r2,
      d = n.duration() >= gr ? a.endTime(!1) : n._dur,
      f,
      h,
      g;
    return Bt(r) && (isNaN(r) || r in o)
      ? ((h = r.charAt(0)),
        (g = r.substr(-1) === "%"),
        (f = r.indexOf("=")),
        h === "<" || h === ">"
          ? (f >= 0 && (r = r.replace(/=/, "")),
            (h === "<" ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(r.substr(1)) || 0) *
                (g ? (f < 0 ? a : s).totalDuration() / 100 : 1))
          : f < 0
          ? (r in o || (o[r] = d), o[r])
          : ((h = parseFloat(r.charAt(f - 1) + r.substr(f + 1))),
            g && s && (h = (h / 100) * (an(s) ? s[0] : s).totalDuration()),
            f > 1 ? u(n, r.substr(0, f - 1), s) + h : d + h))
      : r == null
      ? d
      : +r;
  },
  vl = function (n, r, s) {
    var o = fi(r[1]),
      a = (o ? 2 : 1) + (n < 2 ? 0 : 1),
      d = r[a],
      f,
      h;
    if ((o && (d.duration = r[1]), (d.parent = s), n)) {
      for (f = d, h = s; h && !("immediateRender" in f); )
        (f = h.vars.defaults || {}), (h = On(h.vars.inherit) && h.parent);
      (d.immediateRender = On(f.immediateRender)),
        n < 2 ? (d.runBackwards = 1) : (d.startAt = r[a - 1]);
    }
    return new Nt(r[0], d, r[a + 1]);
  },
  qi = function (n, r) {
    return n || n === 0 ? r(n) : r;
  },
  Ll = function (n, r, s) {
    return s < n ? n : s > r ? r : s;
  },
  sn = function (n, r) {
    return !Bt(n) || !(r = Wy.exec(n)) ? "" : r[1];
  },
  i2 = function (n, r, s) {
    return qi(s, function (o) {
      return Ll(n, r, o);
    });
  },
  ed = [].slice,
  u1 = function (n, r) {
    return (
      n &&
      Gr(n) &&
      "length" in n &&
      ((!r && !n.length) || (n.length - 1 in n && Gr(n[0]))) &&
      !n.nodeType &&
      n !== Hr
    );
  },
  s2 = function (n, r, s) {
    return (
      s === void 0 && (s = []),
      n.forEach(function (o) {
        var a;
        return (Bt(o) && !r) || u1(o, 1)
          ? (a = s).push.apply(a, vr(o))
          : s.push(o);
      }) || s
    );
  },
  vr = function (n, r, s) {
    return ot && !r && ot.selector
      ? ot.selector(n)
      : Bt(n) && !s && (Qf || !wo())
      ? ed.call((r || Nd).querySelectorAll(n), 0)
      : an(n)
      ? s2(n, s)
      : u1(n)
      ? ed.call(n, 0)
      : n
      ? [n]
      : [];
  },
  td = function (n) {
    return (
      (n = vr(n)[0] || El("Invalid scope") || {}),
      function (r) {
        var s = n.current || n.nativeElement || n;
        return vr(
          r,
          s.querySelectorAll
            ? s
            : s === n
            ? El("Invalid scope") || Nd.createElement("div")
            : n
        );
      }
    );
  },
  c1 = function (n) {
    return n.sort(function () {
      return 0.5 - Math.random();
    });
  },
  f1 = function (n) {
    if (mt(n)) return n;
    var r = Gr(n) ? n : { each: n },
      s = ys(r.ease),
      o = r.from || 0,
      a = parseFloat(r.base) || 0,
      d = {},
      f = o > 0 && o < 1,
      h = isNaN(o) || f,
      g = r.axis,
      x = o,
      _ = o;
    return (
      Bt(o)
        ? (x = _ = { center: 0.5, edges: 0.5, end: 1 }[o] || 0)
        : !f && h && ((x = o[0]), (_ = o[1])),
      function (S, y, N) {
        var w = (N || r).length,
          P = d[w],
          I,
          A,
          $,
          O,
          L,
          U,
          z,
          W,
          B;
        if (!P) {
          if (((B = r.grid === "auto" ? 0 : (r.grid || [1, gr])[1]), !B)) {
            for (
              z = -gr;
              z < (z = N[B++].getBoundingClientRect().left) && B < w;

            );
            B < w && B--;
          }
          for (
            P = d[w] = [],
              I = h ? Math.min(B, w) * x - 0.5 : o % B,
              A = B === gr ? 0 : h ? (w * _) / B - 0.5 : (o / B) | 0,
              z = 0,
              W = gr,
              U = 0;
            U < w;
            U++
          )
            ($ = (U % B) - I),
              (O = A - ((U / B) | 0)),
              (P[U] = L = g ? Math.abs(g === "y" ? O : $) : W0($ * $ + O * O)),
              L > z && (z = L),
              L < W && (W = L);
          o === "random" && c1(P),
            (P.max = z - W),
            (P.min = W),
            (P.v = w =
              (parseFloat(r.amount) ||
                parseFloat(r.each) *
                  (B > w
                    ? w - 1
                    : g
                    ? g === "y"
                      ? w / B
                      : B
                    : Math.max(B, w / B)) ||
                0) * (o === "edges" ? -1 : 1)),
            (P.b = w < 0 ? a - w : a),
            (P.u = sn(r.amount || r.each) || 0),
            (s = s && w < 0 ? w1(s) : s);
        }
        return (
          (w = (P[S] - P.min) / P.max || 0),
          jt(P.b + (s ? s(w) : w) * P.v) + P.u
        );
      }
    );
  },
  nd = function (n) {
    var r = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function (s) {
      var o = jt(Math.round(parseFloat(s) / n) * n * r);
      return (o - (o % 1)) / r + (fi(s) ? 0 : sn(s));
    };
  },
  d1 = function (n, r) {
    var s = an(n),
      o,
      a;
    return (
      !s &&
        Gr(n) &&
        ((o = s = n.radius || gr),
        n.values
          ? ((n = vr(n.values)), (a = !fi(n[0])) && (o *= o))
          : (n = nd(n.increment))),
      qi(
        r,
        s
          ? mt(n)
            ? function (d) {
                return (a = n(d)), Math.abs(a - d) <= o ? a : d;
              }
            : function (d) {
                for (
                  var f = parseFloat(a ? d.x : d),
                    h = parseFloat(a ? d.y : 0),
                    g = gr,
                    x = 0,
                    _ = n.length,
                    S,
                    y;
                  _--;

                )
                  a
                    ? ((S = n[_].x - f), (y = n[_].y - h), (S = S * S + y * y))
                    : (S = Math.abs(n[_] - f)),
                    S < g && ((g = S), (x = _));
                return (
                  (x = !o || g <= o ? n[x] : d),
                  a || x === d || fi(d) ? x : x + sn(d)
                );
              }
          : nd(n)
      )
    );
  },
  p1 = function (n, r, s, o) {
    return qi(an(n) ? !r : s === !0 ? !!(s = 0) : !o, function () {
      return an(n)
        ? n[~~(Math.random() * n.length)]
        : (s = s || 1e-5) &&
            (o = s < 1 ? Math.pow(10, (s + "").length - 2) : 1) &&
            Math.floor(
              Math.round((n - s / 2 + Math.random() * (r - n + s * 0.99)) / s) *
                s *
                o
            ) / o;
    });
  },
  o2 = function () {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return function (o) {
      return r.reduce(function (a, d) {
        return d(a);
      }, o);
    };
  },
  l2 = function (n, r) {
    return function (s) {
      return n(parseFloat(s)) + (r || sn(s));
    };
  },
  a2 = function (n, r, s) {
    return m1(n, r, 0, 1, s);
  },
  h1 = function (n, r, s) {
    return qi(s, function (o) {
      return n[~~r(o)];
    });
  },
  u2 = function u(n, r, s) {
    var o = r - n;
    return an(n)
      ? h1(n, u(0, n.length), r)
      : qi(s, function (a) {
          return ((o + ((a - n) % o)) % o) + n;
        });
  },
  c2 = function u(n, r, s) {
    var o = r - n,
      a = o * 2;
    return an(n)
      ? h1(n, u(0, n.length - 1), r)
      : qi(s, function (d) {
          return (d = (a + ((d - n) % a)) % a || 0), n + (d > o ? a - d : d);
        });
  },
  Ml = function (n) {
    for (var r = 0, s = "", o, a, d, f; ~(o = n.indexOf("random(", r)); )
      (d = n.indexOf(")", o)),
        (f = n.charAt(o + 7) === "["),
        (a = n.substr(o + 7, d - o - 7).match(f ? Q0 : Gf)),
        (s +=
          n.substr(r, o - r) + p1(f ? a : +a[0], f ? 0 : +a[1], +a[2] || 1e-5)),
        (r = d + 1);
    return s + n.substr(r, n.length - r);
  },
  m1 = function (n, r, s, o, a) {
    var d = r - n,
      f = o - s;
    return qi(a, function (h) {
      return s + (((h - n) / d) * f || 0);
    });
  },
  f2 = function u(n, r, s, o) {
    var a = isNaN(n + r)
      ? 0
      : function (y) {
          return (1 - y) * n + y * r;
        };
    if (!a) {
      var d = Bt(n),
        f = {},
        h,
        g,
        x,
        _,
        S;
      if ((s === !0 && (o = 1) && (s = null), d))
        (n = { p: n }), (r = { p: r });
      else if (an(n) && !an(r)) {
        for (x = [], _ = n.length, S = _ - 2, g = 1; g < _; g++)
          x.push(u(n[g - 1], n[g]));
        _--,
          (a = function (N) {
            N *= _;
            var w = Math.min(S, ~~N);
            return x[w](N - w);
          }),
          (s = r);
      } else o || (n = xo(an(n) ? [] : {}, n));
      if (!x) {
        for (h in r) Rd.call(f, n, h, "get", r[h]);
        a = function (N) {
          return Ad(N, f) || (d ? n.p : n);
        };
      }
    }
    return qi(s, a);
  },
  Gm = function (n, r, s) {
    var o = n.labels,
      a = gr,
      d,
      f,
      h;
    for (d in o)
      (f = o[d] - r),
        f < 0 == !!s && f && a > (f = Math.abs(f)) && ((h = d), (a = f));
    return h;
  },
  Zn = function (n, r, s) {
    var o = n.vars,
      a = o[r],
      d = ot,
      f = n._ctx,
      h,
      g,
      x;
    if (a)
      return (
        (h = o[r + "Params"]),
        (g = o.callbackScope || n),
        s && Ui.length && mu(),
        f && (ot = f),
        (x = h ? a.apply(g, h) : a.call(g)),
        (ot = d),
        x
      );
  },
  ul = function (n) {
    return (
      Vi(n),
      n.scrollTrigger && n.scrollTrigger.kill(!!Xt),
      n.progress() < 1 && Zn(n, "onInterrupt"),
      n
    );
  },
  oo,
  g1 = [],
  v1 = function (n) {
    if (n)
      if (((n = (!n.name && n.default) || n), Td() || n.headless)) {
        var r = n.name,
          s = mt(n),
          o =
            r && !s && n.init
              ? function () {
                  this._props = [];
                }
              : n,
          a = {
            init: Pl,
            render: Ad,
            add: Rd,
            kill: j2,
            modifier: N2,
            rawVars: 0,
          },
          d = {
            targetTest: 0,
            get: 0,
            getSetter: zd,
            aliases: {},
            register: 0,
          };
        if ((wo(), n !== o)) {
          if (Xn[r]) return;
          nr(o, nr(gu(n, a), d)),
            xo(o.prototype, xo(a, gu(n, d))),
            (Xn[(o.prop = r)] = o),
            n.targetTest && (su.push(o), (Ed[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin");
        }
        J0(r, o), n.register && n.register(In, o, zn);
      } else g1.push(n);
  },
  qe = 255,
  cl = {
    aqua: [0, qe, qe],
    lime: [0, qe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, qe],
    navy: [0, 0, 128],
    white: [qe, qe, qe],
    olive: [128, 128, 0],
    yellow: [qe, qe, 0],
    orange: [qe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [qe, 0, 0],
    pink: [qe, 192, 203],
    cyan: [0, qe, qe],
    transparent: [qe, qe, qe, 0],
  },
  bf = function (n, r, s) {
    return (
      (n += n < 0 ? 1 : n > 1 ? -1 : 0),
      ((n * 6 < 1
        ? r + (s - r) * n * 6
        : n < 0.5
        ? s
        : n * 3 < 2
        ? r + (s - r) * (2 / 3 - n) * 6
        : r) *
        qe +
        0.5) |
        0
    );
  },
  x1 = function (n, r, s) {
    var o = n ? (fi(n) ? [n >> 16, (n >> 8) & qe, n & qe] : 0) : cl.black,
      a,
      d,
      f,
      h,
      g,
      x,
      _,
      S,
      y,
      N;
    if (!o) {
      if ((n.substr(-1) === "," && (n = n.substr(0, n.length - 1)), cl[n]))
        o = cl[n];
      else if (n.charAt(0) === "#") {
        if (
          (n.length < 6 &&
            ((a = n.charAt(1)),
            (d = n.charAt(2)),
            (f = n.charAt(3)),
            (n =
              "#" +
              a +
              a +
              d +
              d +
              f +
              f +
              (n.length === 5 ? n.charAt(4) + n.charAt(4) : ""))),
          n.length === 9)
        )
          return (
            (o = parseInt(n.substr(1, 6), 16)),
            [o >> 16, (o >> 8) & qe, o & qe, parseInt(n.substr(7), 16) / 255]
          );
        (n = parseInt(n.substr(1), 16)), (o = [n >> 16, (n >> 8) & qe, n & qe]);
      } else if (n.substr(0, 3) === "hsl") {
        if (((o = N = n.match(Gf)), !r))
          (h = (+o[0] % 360) / 360),
            (g = +o[1] / 100),
            (x = +o[2] / 100),
            (d = x <= 0.5 ? x * (g + 1) : x + g - x * g),
            (a = x * 2 - d),
            o.length > 3 && (o[3] *= 1),
            (o[0] = bf(h + 1 / 3, a, d)),
            (o[1] = bf(h, a, d)),
            (o[2] = bf(h - 1 / 3, a, d));
        else if (~n.indexOf("="))
          return (o = n.match(X0)), s && o.length < 4 && (o[3] = 1), o;
      } else o = n.match(Gf) || cl.transparent;
      o = o.map(Number);
    }
    return (
      r &&
        !N &&
        ((a = o[0] / qe),
        (d = o[1] / qe),
        (f = o[2] / qe),
        (_ = Math.max(a, d, f)),
        (S = Math.min(a, d, f)),
        (x = (_ + S) / 2),
        _ === S
          ? (h = g = 0)
          : ((y = _ - S),
            (g = x > 0.5 ? y / (2 - _ - S) : y / (_ + S)),
            (h =
              _ === a
                ? (d - f) / y + (d < f ? 6 : 0)
                : _ === d
                ? (f - a) / y + 2
                : (a - d) / y + 4),
            (h *= 60)),
        (o[0] = ~~(h + 0.5)),
        (o[1] = ~~(g * 100 + 0.5)),
        (o[2] = ~~(x * 100 + 0.5))),
      s && o.length < 4 && (o[3] = 1),
      o
    );
  },
  y1 = function (n) {
    var r = [],
      s = [],
      o = -1;
    return (
      n.split(Bi).forEach(function (a) {
        var d = a.match(so) || [];
        r.push.apply(r, d), s.push((o += d.length + 1));
      }),
      (r.c = s),
      r
    );
  },
  Qm = function (n, r, s) {
    var o = "",
      a = (n + o).match(Bi),
      d = r ? "hsla(" : "rgba(",
      f = 0,
      h,
      g,
      x,
      _;
    if (!a) return n;
    if (
      ((a = a.map(function (S) {
        return (
          (S = x1(S, r, 1)) &&
          d +
            (r ? S[0] + "," + S[1] + "%," + S[2] + "%," + S[3] : S.join(",")) +
            ")"
        );
      })),
      s && ((x = y1(n)), (h = s.c), h.join(o) !== x.c.join(o)))
    )
      for (g = n.replace(Bi, "1").split(so), _ = g.length - 1; f < _; f++)
        o +=
          g[f] +
          (~h.indexOf(f)
            ? a.shift() || d + "0,0,0,0)"
            : (x.length ? x : a.length ? a : s).shift());
    if (!g)
      for (g = n.split(Bi), _ = g.length - 1; f < _; f++) o += g[f] + a[f];
    return o + g[_];
  },
  Bi = (function () {
    var u =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      n;
    for (n in cl) u += "|" + n + "\\b";
    return new RegExp(u + ")", "gi");
  })(),
  d2 = /hsl[a]?\(/,
  _1 = function (n) {
    var r = n.join(" "),
      s;
    if (((Bi.lastIndex = 0), Bi.test(r)))
      return (
        (s = d2.test(r)),
        (n[1] = Qm(n[1], s)),
        (n[0] = Qm(n[0], s, y1(n[1]))),
        !0
      );
  },
  bl,
  Qn = (function () {
    var u = Date.now,
      n = 500,
      r = 33,
      s = u(),
      o = s,
      a = 1e3 / 240,
      d = a,
      f = [],
      h,
      g,
      x,
      _,
      S,
      y,
      N = function w(P) {
        var I = u() - o,
          A = P === !0,
          $,
          O,
          L,
          U;
        if (
          ((I > n || I < 0) && (s += I - r),
          (o += I),
          (L = o - s),
          ($ = L - d),
          ($ > 0 || A) &&
            ((U = ++_.frame),
            (S = L - _.time * 1e3),
            (_.time = L = L / 1e3),
            (d += $ + ($ >= a ? 4 : a - $)),
            (O = 1)),
          A || (h = g(w)),
          O)
        )
          for (y = 0; y < f.length; y++) f[y](L, S, U, P);
      };
    return (
      (_ = {
        time: 0,
        frame: 0,
        tick: function () {
          N(!0);
        },
        deltaRatio: function (P) {
          return S / (1e3 / (P || 60));
        },
        wake: function () {
          K0 &&
            (!Qf &&
              Td() &&
              ((Hr = Qf = window),
              (Nd = Hr.document || {}),
              (tr.gsap = In),
              (Hr.gsapVersions || (Hr.gsapVersions = [])).push(In.version),
              Z0(hu || Hr.GreenSockGlobals || (!Hr.gsap && Hr) || {}),
              g1.forEach(v1)),
            (x = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            h && _.sleep(),
            (g =
              x ||
              function (P) {
                return setTimeout(P, (d - _.time * 1e3 + 1) | 0);
              }),
            (bl = 1),
            N(2));
        },
        sleep: function () {
          (x ? cancelAnimationFrame : clearTimeout)(h), (bl = 0), (g = Pl);
        },
        lagSmoothing: function (P, I) {
          (n = P || 1 / 0), (r = Math.min(I || 33, n));
        },
        fps: function (P) {
          (a = 1e3 / (P || 240)), (d = _.time * 1e3 + a);
        },
        add: function (P, I, A) {
          var $ = I
            ? function (O, L, U, z) {
                P(O, L, U, z), _.remove($);
              }
            : P;
          return _.remove(P), f[A ? "unshift" : "push"]($), wo(), $;
        },
        remove: function (P, I) {
          ~(I = f.indexOf(P)) && f.splice(I, 1) && y >= I && y--;
        },
        _listeners: f,
      }),
      _
    );
  })(),
  wo = function () {
    return !bl && Qn.wake();
  },
  Ie = {},
  p2 = /^[\d.\-M][\d.\-,\s]/,
  h2 = /["']/g,
  m2 = function (n) {
    for (
      var r = {},
        s = n.substr(1, n.length - 3).split(":"),
        o = s[0],
        a = 1,
        d = s.length,
        f,
        h,
        g;
      a < d;
      a++
    )
      (h = s[a]),
        (f = a !== d - 1 ? h.lastIndexOf(",") : h.length),
        (g = h.substr(0, f)),
        (r[o] = isNaN(g) ? g.replace(h2, "").trim() : +g),
        (o = h.substr(f + 1).trim());
    return r;
  },
  g2 = function (n) {
    var r = n.indexOf("(") + 1,
      s = n.indexOf(")"),
      o = n.indexOf("(", r);
    return n.substring(r, ~o && o < s ? n.indexOf(")", s + 1) : s);
  },
  v2 = function (n) {
    var r = (n + "").split("("),
      s = Ie[r[0]];
    return s && r.length > 1 && s.config
      ? s.config.apply(
          null,
          ~n.indexOf("{") ? [m2(r[1])] : g2(n).split(",").map(r1)
        )
      : Ie._CE && p2.test(n)
      ? Ie._CE("", n)
      : s;
  },
  w1 = function (n) {
    return function (r) {
      return 1 - n(1 - r);
    };
  },
  k1 = function u(n, r) {
    for (var s = n._first, o; s; )
      s instanceof _n
        ? u(s, r)
        : s.vars.yoyoEase &&
          (!s._yoyo || !s._repeat) &&
          s._yoyo !== r &&
          (s.timeline
            ? u(s.timeline, r)
            : ((o = s._ease),
              (s._ease = s._yEase),
              (s._yEase = o),
              (s._yoyo = r))),
        (s = s._next);
  },
  ys = function (n, r) {
    return (n && (mt(n) ? n : Ie[n] || v2(n))) || r;
  },
  Es = function (n, r, s, o) {
    s === void 0 &&
      (s = function (h) {
        return 1 - r(1 - h);
      }),
      o === void 0 &&
        (o = function (h) {
          return h < 0.5 ? r(h * 2) / 2 : 1 - r((1 - h) * 2) / 2;
        });
    var a = { easeIn: r, easeOut: s, easeInOut: o },
      d;
    return (
      Dn(n, function (f) {
        (Ie[f] = tr[f] = a), (Ie[(d = f.toLowerCase())] = s);
        for (var h in a)
          Ie[
            d + (h === "easeIn" ? ".in" : h === "easeOut" ? ".out" : ".inOut")
          ] = Ie[f + "." + h] = a[h];
      }),
      a
    );
  },
  S1 = function (n) {
    return function (r) {
      return r < 0.5 ? (1 - n(1 - r * 2)) / 2 : 0.5 + n((r - 0.5) * 2) / 2;
    };
  },
  Rf = function u(n, r, s) {
    var o = r >= 1 ? r : 1,
      a = (s || (n ? 0.3 : 0.45)) / (r < 1 ? r : 1),
      d = (a / Xf) * (Math.asin(1 / o) || 0),
      f = function (x) {
        return x === 1 ? 1 : o * Math.pow(2, -10 * x) * Yy((x - d) * a) + 1;
      },
      h =
        n === "out"
          ? f
          : n === "in"
          ? function (g) {
              return 1 - f(1 - g);
            }
          : S1(f);
    return (
      (a = Xf / a),
      (h.config = function (g, x) {
        return u(n, g, x);
      }),
      h
    );
  },
  Of = function u(n, r) {
    r === void 0 && (r = 1.70158);
    var s = function (d) {
        return d ? --d * d * ((r + 1) * d + r) + 1 : 0;
      },
      o =
        n === "out"
          ? s
          : n === "in"
          ? function (a) {
              return 1 - s(1 - a);
            }
          : S1(s);
    return (
      (o.config = function (a) {
        return u(n, a);
      }),
      o
    );
  };
Dn("Linear,Quad,Cubic,Quart,Quint,Strong", function (u, n) {
  var r = n < 5 ? n + 1 : n;
  Es(
    u + ",Power" + (r - 1),
    n
      ? function (s) {
          return Math.pow(s, r);
        }
      : function (s) {
          return s;
        },
    function (s) {
      return 1 - Math.pow(1 - s, r);
    },
    function (s) {
      return s < 0.5
        ? Math.pow(s * 2, r) / 2
        : 1 - Math.pow((1 - s) * 2, r) / 2;
    }
  );
});
Ie.Linear.easeNone = Ie.none = Ie.Linear.easeIn;
Es("Elastic", Rf("in"), Rf("out"), Rf());
(function (u, n) {
  var r = 1 / n,
    s = 2 * r,
    o = 2.5 * r,
    a = function (f) {
      return f < r
        ? u * f * f
        : f < s
        ? u * Math.pow(f - 1.5 / n, 2) + 0.75
        : f < o
        ? u * (f -= 2.25 / n) * f + 0.9375
        : u * Math.pow(f - 2.625 / n, 2) + 0.984375;
    };
  Es(
    "Bounce",
    function (d) {
      return 1 - a(1 - d);
    },
    a
  );
})(7.5625, 2.75);
Es("Expo", function (u) {
  return Math.pow(2, 10 * (u - 1)) * u + u * u * u * u * u * u * (1 - u);
});
Es("Circ", function (u) {
  return -(W0(1 - u * u) - 1);
});
Es("Sine", function (u) {
  return u === 1 ? 1 : -Vy(u * By) + 1;
});
Es("Back", Of("in"), Of("out"), Of());
Ie.SteppedEase =
  Ie.steps =
  tr.SteppedEase =
    {
      config: function (n, r) {
        n === void 0 && (n = 1);
        var s = 1 / n,
          o = n + (r ? 0 : 1),
          a = r ? 1 : 0,
          d = 1 - Xe;
        return function (f) {
          return (((o * Ll(0, d, f)) | 0) + a) * s;
        };
      },
    };
vo.ease = Ie["quad.out"];
Dn(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (u) {
    return (Pd += u + "," + u + "Params,");
  }
);
var C1 = function (n, r) {
    (this.id = Hy++),
      (n._gsap = this),
      (this.target = n),
      (this.harness = r),
      (this.get = r ? r.get : t1),
      (this.set = r ? r.getSetter : zd);
  },
  Rl = (function () {
    function u(r) {
      (this.vars = r),
        (this._delay = +r.delay || 0),
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
          ((this._rDelay = r.repeatDelay || 0),
          (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
        (this._ts = 1),
        _o(this, +r.duration, 1, 1),
        (this.data = r.data),
        ot && ((this._ctx = ot), ot.data.push(this)),
        bl || Qn.wake();
    }
    var n = u.prototype;
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
            _o(
              this,
              this._repeat < 0
                ? s
                : (s - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (n.totalTime = function (s, o) {
        if ((wo(), !arguments.length)) return this._tTime;
        var a = this._dp;
        if (a && a.smoothChildTiming && this._ts) {
          for (Ru(this, s), !a._dp || a.parent || o1(a, this); a && a.parent; )
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
            Yr(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== s ||
            (!this._dur && !o) ||
            (this._initted && Math.abs(this._zTime) === Xe) ||
            (!s && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = s), n1(this, s, o)),
          this
        );
      }),
      (n.time = function (s, o) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), s + qm(this)) %
                (this._dur + this._rDelay) || (s ? this._dur : 0),
              o
            )
          : this._time;
      }),
      (n.totalProgress = function (s, o) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * s, o)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() >= 0 && this._initted
          ? 1
          : 0;
      }),
      (n.progress = function (s, o) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - s : s) +
                qm(this),
              o
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (n.iteration = function (s, o) {
        var a = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (s - 1) * a, o)
          : this._repeat
          ? yo(this._tTime, a) + 1
          : 1;
      }),
      (n.timeScale = function (s, o) {
        if (!arguments.length) return this._rts === -Xe ? 0 : this._rts;
        if (this._rts === s) return this;
        var a =
          this.parent && this._ts ? vu(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +s || 0),
          (this._ts = this._ps || s === -Xe ? 0 : this._rts),
          this.totalTime(
            Ll(-Math.abs(this._delay), this.totalDuration(), a),
            o !== !1
          ),
          bu(this),
          Zy(this)
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
                : (wo(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== Xe &&
                      (this._tTime -= Xe)
                  ))),
            this)
          : this._ps;
      }),
      (n.startTime = function (s) {
        if (arguments.length) {
          this._start = s;
          var o = this.parent || this._dp;
          return (
            o && (o._sort || !this.parent) && Yr(o, this, s - this._delay), this
          );
        }
        return this._start;
      }),
      (n.endTime = function (s) {
        return (
          this._start +
          (On(s) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (n.rawTime = function (s) {
        var o = this.parent || this._dp;
        return o
          ? s &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? vu(o.rawTime(s), this)
            : this._tTime
          : this._tTime;
      }),
      (n.revert = function (s) {
        s === void 0 && (s = Xy);
        var o = Xt;
        return (
          (Xt = s),
          bd(this) &&
            (this.timeline && this.timeline.revert(s),
            this.totalTime(-0.01, s.suppressEvents)),
          this.data !== "nested" && s.kill !== !1 && this.kill(),
          (Xt = o),
          this
        );
      }),
      (n.globalTime = function (s) {
        for (var o = this, a = arguments.length ? s : o.rawTime(); o; )
          (a = o._start + a / (Math.abs(o._ts) || 1)), (o = o._dp);
        return !this.parent && this._sat ? this._sat.globalTime(s) : a;
      }),
      (n.repeat = function (s) {
        return arguments.length
          ? ((this._repeat = s === 1 / 0 ? -2 : s), Xm(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (n.repeatDelay = function (s) {
        if (arguments.length) {
          var o = this._time;
          return (this._rDelay = s), Xm(this), o ? this.time(o) : this;
        }
        return this._rDelay;
      }),
      (n.yoyo = function (s) {
        return arguments.length ? ((this._yoyo = s), this) : this._yoyo;
      }),
      (n.seek = function (s, o) {
        return this.totalTime(dr(this, s), On(o));
      }),
      (n.restart = function (s, o) {
        return (
          this.play().totalTime(s ? -this._delay : 0, On(o)),
          this._dur || (this._zTime = -Xe),
          this
        );
      }),
      (n.play = function (s, o) {
        return s != null && this.seek(s, o), this.reversed(!1).paused(!1);
      }),
      (n.reverse = function (s, o) {
        return (
          s != null && this.seek(s || this.totalDuration(), o),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.pause = function (s, o) {
        return s != null && this.seek(s, o), this.paused(!0);
      }),
      (n.resume = function () {
        return this.paused(!1);
      }),
      (n.reversed = function (s) {
        return arguments.length
          ? (!!s !== this.reversed() &&
              this.timeScale(-this._rts || (s ? -Xe : 0)),
            this)
          : this._rts < 0;
      }),
      (n.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Xe), this;
      }),
      (n.isActive = function () {
        var s = this.parent || this._dp,
          o = this._start,
          a;
        return !!(
          !s ||
          (this._ts &&
            this._initted &&
            s.isActive() &&
            (a = s.rawTime(!0)) >= o &&
            a < this.endTime(!0) - Xe)
        );
      }),
      (n.eventCallback = function (s, o, a) {
        var d = this.vars;
        return arguments.length > 1
          ? (o
              ? ((d[s] = o),
                a && (d[s + "Params"] = a),
                s === "onUpdate" && (this._onUpdate = o))
              : delete d[s],
            this)
          : d[s];
      }),
      (n.then = function (s) {
        var o = this;
        return new Promise(function (a) {
          var d = mt(s) ? s : i1,
            f = function () {
              var g = o.then;
              (o.then = null),
                mt(d) && (d = d(o)) && (d.then || d === o) && (o.then = g),
                a(d),
                (o.then = g);
            };
          (o._initted && o.totalProgress() === 1 && o._ts >= 0) ||
          (!o._tTime && o._ts < 0)
            ? f()
            : (o._prom = f);
        });
      }),
      (n.kill = function () {
        ul(this);
      }),
      u
    );
  })();
nr(Rl.prototype, {
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
  _zTime: -Xe,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var _n = (function (u) {
  Y0(n, u);
  function n(s, o) {
    var a;
    return (
      s === void 0 && (s = {}),
      (a = u.call(this, s) || this),
      (a.labels = {}),
      (a.smoothChildTiming = !!s.smoothChildTiming),
      (a.autoRemoveChildren = !!s.autoRemoveChildren),
      (a._sort = On(s.sortChildren)),
      ct && Yr(s.parent || ct, oi(a), o),
      s.reversed && a.reverse(),
      s.paused && a.paused(!0),
      s.scrollTrigger && l1(oi(a), s.scrollTrigger),
      a
    );
  }
  var r = n.prototype;
  return (
    (r.to = function (o, a, d) {
      return vl(0, arguments, this), this;
    }),
    (r.from = function (o, a, d) {
      return vl(1, arguments, this), this;
    }),
    (r.fromTo = function (o, a, d, f) {
      return vl(2, arguments, this), this;
    }),
    (r.set = function (o, a, d) {
      return (
        (a.duration = 0),
        (a.parent = this),
        gl(a).repeatDelay || (a.repeat = 0),
        (a.immediateRender = !!a.immediateRender),
        new Nt(o, a, dr(this, d), 1),
        this
      );
    }),
    (r.call = function (o, a, d) {
      return Yr(this, Nt.delayedCall(0, o, a), d);
    }),
    (r.staggerTo = function (o, a, d, f, h, g, x) {
      return (
        (d.duration = a),
        (d.stagger = d.stagger || f),
        (d.onComplete = g),
        (d.onCompleteParams = x),
        (d.parent = this),
        new Nt(o, d, dr(this, h)),
        this
      );
    }),
    (r.staggerFrom = function (o, a, d, f, h, g, x) {
      return (
        (d.runBackwards = 1),
        (gl(d).immediateRender = On(d.immediateRender)),
        this.staggerTo(o, a, d, f, h, g, x)
      );
    }),
    (r.staggerFromTo = function (o, a, d, f, h, g, x, _) {
      return (
        (f.startAt = d),
        (gl(f).immediateRender = On(f.immediateRender)),
        this.staggerTo(o, a, f, h, g, x, _)
      );
    }),
    (r.render = function (o, a, d) {
      var f = this._time,
        h = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        x = o <= 0 ? 0 : jt(o),
        _ = this._zTime < 0 != o < 0 && (this._initted || !g),
        S,
        y,
        N,
        w,
        P,
        I,
        A,
        $,
        O,
        L,
        U,
        z;
      if (
        (this !== ct && x > h && o >= 0 && (x = h), x !== this._tTime || d || _)
      ) {
        if (
          (f !== this._time &&
            g &&
            ((x += this._time - f), (o += this._time - f)),
          (S = x),
          (O = this._start),
          ($ = this._ts),
          (I = !$),
          _ && (g || (f = this._zTime), (o || !a) && (this._zTime = o)),
          this._repeat)
        ) {
          if (
            ((U = this._yoyo),
            (P = g + this._rDelay),
            this._repeat < -1 && o < 0)
          )
            return this.totalTime(P * 100 + o, a, d);
          if (
            ((S = jt(x % P)),
            x === h
              ? ((w = this._repeat), (S = g))
              : ((L = jt(x / P)),
                (w = ~~L),
                w && w === L && ((S = g), w--),
                S > g && (S = g)),
            (L = yo(this._tTime, P)),
            !f &&
              this._tTime &&
              L !== w &&
              this._tTime - L * P - this._dur <= 0 &&
              (L = w),
            U && w & 1 && ((S = g - S), (z = 1)),
            w !== L && !this._lock)
          ) {
            var W = U && L & 1,
              B = W === (U && w & 1);
            if (
              (w < L && (W = !W),
              (f = W ? 0 : x % g ? g : x),
              (this._lock = 1),
              (this.render(f || (z ? 0 : jt(w * P)), a, !g)._lock = 0),
              (this._tTime = x),
              !a && this.parent && Zn(this, "onRepeat"),
              this.vars.repeatRefresh && !z && (this.invalidate()._lock = 1),
              (f && f !== this._time) ||
                I !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((g = this._dur),
              (h = this._tDur),
              B &&
                ((this._lock = 2),
                (f = W ? g : -1e-4),
                this.render(f, !0),
                this.vars.repeatRefresh && !z && this.invalidate()),
              (this._lock = 0),
              !this._ts && !I)
            )
              return this;
            k1(this, z);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((A = n2(this, jt(f), jt(S))), A && (x -= S - (S = A._start))),
          (this._tTime = x),
          (this._time = S),
          (this._act = !$),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = o),
            (f = 0)),
          !f && x && !a && !L && (Zn(this, "onStart"), this._tTime !== x))
        )
          return this;
        if (S >= f && o >= 0)
          for (y = this._first; y; ) {
            if (
              ((N = y._next), (y._act || S >= y._start) && y._ts && A !== y)
            ) {
              if (y.parent !== this) return this.render(o, a, d);
              if (
                (y.render(
                  y._ts > 0
                    ? (S - y._start) * y._ts
                    : (y._dirty ? y.totalDuration() : y._tDur) +
                        (S - y._start) * y._ts,
                  a,
                  d
                ),
                S !== this._time || (!this._ts && !I))
              ) {
                (A = 0), N && (x += this._zTime = -Xe);
                break;
              }
            }
            y = N;
          }
        else {
          y = this._last;
          for (var q = o < 0 ? o : S; y; ) {
            if (((N = y._prev), (y._act || q <= y._end) && y._ts && A !== y)) {
              if (y.parent !== this) return this.render(o, a, d);
              if (
                (y.render(
                  y._ts > 0
                    ? (q - y._start) * y._ts
                    : (y._dirty ? y.totalDuration() : y._tDur) +
                        (q - y._start) * y._ts,
                  a,
                  d || (Xt && bd(y))
                ),
                S !== this._time || (!this._ts && !I))
              ) {
                (A = 0), N && (x += this._zTime = q ? -Xe : Xe);
                break;
              }
            }
            y = N;
          }
        }
        if (
          A &&
          !a &&
          (this.pause(),
          (A.render(S >= f ? 0 : -Xe)._zTime = S >= f ? 1 : -1),
          this._ts)
        )
          return (this._start = O), bu(this), this.render(o, a, d);
        this._onUpdate && !a && Zn(this, "onUpdate", !0),
          ((x === h && this._tTime >= this.totalDuration()) || (!x && f)) &&
            (O === this._start || Math.abs($) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((o || !g) &&
                ((x === h && this._ts > 0) || (!x && this._ts < 0)) &&
                Vi(this, 1),
              !a &&
                !(o < 0 && !f) &&
                (x || f || !h) &&
                (Zn(
                  this,
                  x === h && o >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(x < h && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (r.add = function (o, a) {
      var d = this;
      if ((fi(a) || (a = dr(this, a, o)), !(o instanceof Rl))) {
        if (an(o))
          return (
            o.forEach(function (f) {
              return d.add(f, a);
            }),
            this
          );
        if (Bt(o)) return this.addLabel(o, a);
        if (mt(o)) o = Nt.delayedCall(0, o);
        else return this;
      }
      return this !== o ? Yr(this, o, a) : this;
    }),
    (r.getChildren = function (o, a, d, f) {
      o === void 0 && (o = !0),
        a === void 0 && (a = !0),
        d === void 0 && (d = !0),
        f === void 0 && (f = -gr);
      for (var h = [], g = this._first; g; )
        g._start >= f &&
          (g instanceof Nt
            ? a && h.push(g)
            : (d && h.push(g), o && h.push.apply(h, g.getChildren(!0, a, d)))),
          (g = g._next);
      return h;
    }),
    (r.getById = function (o) {
      for (var a = this.getChildren(1, 1, 1), d = a.length; d--; )
        if (a[d].vars.id === o) return a[d];
    }),
    (r.remove = function (o) {
      return Bt(o)
        ? this.removeLabel(o)
        : mt(o)
        ? this.killTweensOf(o)
        : (o.parent === this && Mu(this, o),
          o === this._recent && (this._recent = this._last),
          xs(this));
    }),
    (r.totalTime = function (o, a) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = jt(
              Qn.time -
                (this._ts > 0
                  ? o / this._ts
                  : (this.totalDuration() - o) / -this._ts)
            )),
          u.prototype.totalTime.call(this, o, a),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (r.addLabel = function (o, a) {
      return (this.labels[o] = dr(this, a)), this;
    }),
    (r.removeLabel = function (o) {
      return delete this.labels[o], this;
    }),
    (r.addPause = function (o, a, d) {
      var f = Nt.delayedCall(0, a || Pl, d);
      return (
        (f.data = "isPause"), (this._hasPause = 1), Yr(this, f, dr(this, o))
      );
    }),
    (r.removePause = function (o) {
      var a = this._first;
      for (o = dr(this, o); a; )
        a._start === o && a.data === "isPause" && Vi(a), (a = a._next);
    }),
    (r.killTweensOf = function (o, a, d) {
      for (var f = this.getTweensOf(o, d), h = f.length; h--; )
        Ai !== f[h] && f[h].kill(o, a);
      return this;
    }),
    (r.getTweensOf = function (o, a) {
      for (var d = [], f = vr(o), h = this._first, g = fi(a), x; h; )
        h instanceof Nt
          ? Gy(h._targets, f) &&
            (g
              ? (!Ai || (h._initted && h._ts)) &&
                h.globalTime(0) <= a &&
                h.globalTime(h.totalDuration()) > a
              : !a || h.isActive()) &&
            d.push(h)
          : (x = h.getTweensOf(f, a)).length && d.push.apply(d, x),
          (h = h._next);
      return d;
    }),
    (r.tweenTo = function (o, a) {
      a = a || {};
      var d = this,
        f = dr(d, o),
        h = a,
        g = h.startAt,
        x = h.onStart,
        _ = h.onStartParams,
        S = h.immediateRender,
        y,
        N = Nt.to(
          d,
          nr(
            {
              ease: a.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: f,
              overwrite: "auto",
              duration:
                a.duration ||
                Math.abs(
                  (f - (g && "time" in g ? g.time : d._time)) / d.timeScale()
                ) ||
                Xe,
              onStart: function () {
                if ((d.pause(), !y)) {
                  var P =
                    a.duration ||
                    Math.abs(
                      (f - (g && "time" in g ? g.time : d._time)) /
                        d.timeScale()
                    );
                  N._dur !== P && _o(N, P, 0, 1).render(N._time, !0, !0),
                    (y = 1);
                }
                x && x.apply(N, _ || []);
              },
            },
            a
          )
        );
      return S ? N.render(0) : N;
    }),
    (r.tweenFromTo = function (o, a, d) {
      return this.tweenTo(a, nr({ startAt: { time: dr(this, o) } }, d));
    }),
    (r.recent = function () {
      return this._recent;
    }),
    (r.nextLabel = function (o) {
      return o === void 0 && (o = this._time), Gm(this, dr(this, o));
    }),
    (r.previousLabel = function (o) {
      return o === void 0 && (o = this._time), Gm(this, dr(this, o), 1);
    }),
    (r.currentLabel = function (o) {
      return arguments.length
        ? this.seek(o, !0)
        : this.previousLabel(this._time + Xe);
    }),
    (r.shiftChildren = function (o, a, d) {
      d === void 0 && (d = 0);
      for (var f = this._first, h = this.labels, g; f; )
        f._start >= d && ((f._start += o), (f._end += o)), (f = f._next);
      if (a) for (g in h) h[g] >= d && (h[g] += o);
      return xs(this);
    }),
    (r.invalidate = function (o) {
      var a = this._first;
      for (this._lock = 0; a; ) a.invalidate(o), (a = a._next);
      return u.prototype.invalidate.call(this, o);
    }),
    (r.clear = function (o) {
      o === void 0 && (o = !0);
      for (var a = this._first, d; a; ) (d = a._next), this.remove(a), (a = d);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        o && (this.labels = {}),
        xs(this)
      );
    }),
    (r.totalDuration = function (o) {
      var a = 0,
        d = this,
        f = d._last,
        h = gr,
        g,
        x,
        _;
      if (arguments.length)
        return d.timeScale(
          (d._repeat < 0 ? d.duration() : d.totalDuration()) /
            (d.reversed() ? -o : o)
        );
      if (d._dirty) {
        for (_ = d.parent; f; )
          (g = f._prev),
            f._dirty && f.totalDuration(),
            (x = f._start),
            x > h && d._sort && f._ts && !d._lock
              ? ((d._lock = 1), (Yr(d, f, x - f._delay, 1)._lock = 0))
              : (h = x),
            x < 0 &&
              f._ts &&
              ((a -= x),
              ((!_ && !d._dp) || (_ && _.smoothChildTiming)) &&
                ((d._start += x / d._ts), (d._time -= x), (d._tTime -= x)),
              d.shiftChildren(-x, !1, -1 / 0),
              (h = 0)),
            f._end > a && f._ts && (a = f._end),
            (f = g);
        _o(d, d === ct && d._time > a ? d._time : a, 1, 1), (d._dirty = 0);
      }
      return d._tDur;
    }),
    (n.updateRoot = function (o) {
      if ((ct._ts && (n1(ct, vu(o, ct)), (e1 = Qn.frame)), Qn.frame >= Ym)) {
        Ym += er.autoSleep || 120;
        var a = ct._first;
        if ((!a || !a._ts) && er.autoSleep && Qn._listeners.length < 2) {
          for (; a && !a._ts; ) a = a._next;
          a || Qn.sleep();
        }
      }
    }),
    n
  );
})(Rl);
nr(_n.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var x2 = function (n, r, s, o, a, d, f) {
    var h = new zn(this._pt, n, r, 0, 1, M1, null, a),
      g = 0,
      x = 0,
      _,
      S,
      y,
      N,
      w,
      P,
      I,
      A;
    for (
      h.b = s,
        h.e = o,
        s += "",
        o += "",
        (I = ~o.indexOf("random(")) && (o = Ml(o)),
        d && ((A = [s, o]), d(A, n, r), (s = A[0]), (o = A[1])),
        S = s.match(Pf) || [];
      (_ = Pf.exec(o));

    )
      (N = _[0]),
        (w = o.substring(g, _.index)),
        y ? (y = (y + 1) % 5) : w.substr(-5) === "rgba(" && (y = 1),
        N !== S[x++] &&
          ((P = parseFloat(S[x - 1]) || 0),
          (h._pt = {
            _next: h._pt,
            p: w || x === 1 ? w : ",",
            s: P,
            c: N.charAt(1) === "=" ? co(P, N) - P : parseFloat(N) - P,
            m: y && y < 4 ? Math.round : 0,
          }),
          (g = Pf.lastIndex));
    return (
      (h.c = g < o.length ? o.substring(g, o.length) : ""),
      (h.fp = f),
      (G0.test(o) || I) && (h.e = 0),
      (this._pt = h),
      h
    );
  },
  Rd = function (n, r, s, o, a, d, f, h, g, x) {
    mt(o) && (o = o(a || 0, n, d));
    var _ = n[r],
      S =
        s !== "get"
          ? s
          : mt(_)
          ? g
            ? n[
                r.indexOf("set") || !mt(n["get" + r.substr(3)])
                  ? r
                  : "get" + r.substr(3)
              ](g)
            : n[r]()
          : _,
      y = mt(_) ? (g ? S2 : E1) : Dd,
      N;
    if (
      (Bt(o) &&
        (~o.indexOf("random(") && (o = Ml(o)),
        o.charAt(1) === "=" &&
          ((N = co(S, o) + (sn(S) || 0)), (N || N === 0) && (o = N))),
      !x || S !== o || rd)
    )
      return !isNaN(S * o) && o !== ""
        ? ((N = new zn(
            this._pt,
            n,
            r,
            +S || 0,
            o - (S || 0),
            typeof _ == "boolean" ? T2 : P1,
            0,
            y
          )),
          g && (N.fp = g),
          f && N.modifier(f, this, n),
          (this._pt = N))
        : (!_ && !(r in n) && jd(r, o),
          x2.call(this, n, r, S, o, y, h || er.stringFilter, g));
  },
  y2 = function (n, r, s, o, a) {
    if (
      (mt(n) && (n = xl(n, a, r, s, o)),
      !Gr(n) || (n.style && n.nodeType) || an(n) || q0(n))
    )
      return Bt(n) ? xl(n, a, r, s, o) : n;
    var d = {},
      f;
    for (f in n) d[f] = xl(n[f], a, r, s, o);
    return d;
  },
  T1 = function (n, r, s, o, a, d) {
    var f, h, g, x;
    if (
      Xn[n] &&
      (f = new Xn[n]()).init(
        a,
        f.rawVars ? r[n] : y2(r[n], o, a, d, s),
        s,
        o,
        d
      ) !== !1 &&
      ((s._pt = h = new zn(s._pt, a, n, 0, 1, f.render, f, 0, f.priority)),
      s !== oo)
    )
      for (g = s._ptLookup[s._targets.indexOf(a)], x = f._props.length; x--; )
        g[f._props[x]] = h;
    return f;
  },
  Ai,
  rd,
  Od = function u(n, r, s) {
    var o = n.vars,
      a = o.ease,
      d = o.startAt,
      f = o.immediateRender,
      h = o.lazy,
      g = o.onUpdate,
      x = o.runBackwards,
      _ = o.yoyoEase,
      S = o.keyframes,
      y = o.autoRevert,
      N = n._dur,
      w = n._startAt,
      P = n._targets,
      I = n.parent,
      A = I && I.data === "nested" ? I.vars.targets : P,
      $ = n._overwrite === "auto" && !Sd,
      O = n.timeline,
      L,
      U,
      z,
      W,
      B,
      q,
      fe,
      Q,
      he,
      ge,
      Se,
      de,
      ee;
    if (
      (O && (!S || !a) && (a = "none"),
      (n._ease = ys(a, vo.ease)),
      (n._yEase = _ ? w1(ys(_ === !0 ? a : _, vo.ease)) : 0),
      _ &&
        n._yoyo &&
        !n._repeat &&
        ((_ = n._yEase), (n._yEase = n._ease), (n._ease = _)),
      (n._from = !O && !!o.runBackwards),
      !O || (S && !o.stagger))
    ) {
      if (
        ((Q = P[0] ? vs(P[0]).harness : 0),
        (de = Q && o[Q.prop]),
        (L = gu(o, Ed)),
        w &&
          (w._zTime < 0 && w.progress(1),
          r < 0 && x && f && !y ? w.render(-1, !0) : w.revert(x && N ? iu : qy),
          (w._lazy = 0)),
        d)
      ) {
        if (
          (Vi(
            (n._startAt = Nt.set(
              P,
              nr(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: I,
                  immediateRender: !0,
                  lazy: !w && On(h),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    g &&
                    function () {
                      return Zn(n, "onUpdate");
                    },
                  stagger: 0,
                },
                d
              )
            ))
          ),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          r < 0 && (Xt || (!f && !y)) && n._startAt.revert(iu),
          f && N && r <= 0 && s <= 0)
        ) {
          r && (n._zTime = r);
          return;
        }
      } else if (x && N && !w) {
        if (
          (r && (f = !1),
          (z = nr(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: f && !w && On(h),
              immediateRender: f,
              stagger: 0,
              parent: I,
            },
            L
          )),
          de && (z[Q.prop] = de),
          Vi((n._startAt = Nt.set(P, z))),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          r < 0 && (Xt ? n._startAt.revert(iu) : n._startAt.render(-1, !0)),
          (n._zTime = r),
          !f)
        )
          u(n._startAt, Xe, Xe);
        else if (!r) return;
      }
      for (
        n._pt = n._ptCache = 0, h = (N && On(h)) || (h && !N), U = 0;
        U < P.length;
        U++
      ) {
        if (
          ((B = P[U]),
          (fe = B._gsap || Md(P)[U]._gsap),
          (n._ptLookup[U] = ge = {}),
          Kf[fe.id] && Ui.length && mu(),
          (Se = A === P ? U : A.indexOf(B)),
          Q &&
            (he = new Q()).init(B, de || L, n, Se, A) !== !1 &&
            ((n._pt = W =
              new zn(n._pt, B, he.name, 0, 1, he.render, he, 0, he.priority)),
            he._props.forEach(function (H) {
              ge[H] = W;
            }),
            he.priority && (q = 1)),
          !Q || de)
        )
          for (z in L)
            Xn[z] && (he = T1(z, L, n, Se, B, A))
              ? he.priority && (q = 1)
              : (ge[z] = W =
                  Rd.call(n, B, z, "get", L[z], Se, A, 0, o.stringFilter));
        n._op && n._op[U] && n.kill(B, n._op[U]),
          $ &&
            n._pt &&
            ((Ai = n),
            ct.killTweensOf(B, ge, n.globalTime(r)),
            (ee = !n.parent),
            (Ai = 0)),
          n._pt && h && (Kf[fe.id] = 1);
      }
      q && b1(n), n._onInit && n._onInit(n);
    }
    (n._onUpdate = g),
      (n._initted = (!n._op || n._pt) && !ee),
      S && r <= 0 && O.render(gr, !0, !0);
  },
  _2 = function (n, r, s, o, a, d, f, h) {
    var g = ((n._pt && n._ptCache) || (n._ptCache = {}))[r],
      x,
      _,
      S,
      y;
    if (!g)
      for (
        g = n._ptCache[r] = [], S = n._ptLookup, y = n._targets.length;
        y--;

      ) {
        if (((x = S[y][r]), x && x.d && x.d._pt))
          for (x = x.d._pt; x && x.p !== r && x.fp !== r; ) x = x._next;
        if (!x)
          return (
            (rd = 1),
            (n.vars[r] = "+=0"),
            Od(n, f),
            (rd = 0),
            h ? El(r + " not eligible for reset") : 1
          );
        g.push(x);
      }
    for (y = g.length; y--; )
      (_ = g[y]),
        (x = _._pt || _),
        (x.s = (o || o === 0) && !a ? o : x.s + (o || 0) + d * x.c),
        (x.c = s - x.s),
        _.e && (_.e = yt(s) + sn(_.e)),
        _.b && (_.b = x.s + sn(_.b));
  },
  w2 = function (n, r) {
    var s = n[0] ? vs(n[0]).harness : 0,
      o = s && s.aliases,
      a,
      d,
      f,
      h;
    if (!o) return r;
    a = xo({}, r);
    for (d in o)
      if (d in a) for (h = o[d].split(","), f = h.length; f--; ) a[h[f]] = a[d];
    return a;
  },
  k2 = function (n, r, s, o) {
    var a = r.ease || o || "power1.inOut",
      d,
      f;
    if (an(r))
      (f = s[n] || (s[n] = [])),
        r.forEach(function (h, g) {
          return f.push({ t: (g / (r.length - 1)) * 100, v: h, e: a });
        });
    else
      for (d in r)
        (f = s[d] || (s[d] = [])),
          d === "ease" || f.push({ t: parseFloat(n), v: r[d], e: a });
  },
  xl = function (n, r, s, o, a) {
    return mt(n)
      ? n.call(r, s, o, a)
      : Bt(n) && ~n.indexOf("random(")
      ? Ml(n)
      : n;
  },
  N1 = Pd + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  j1 = {};
Dn(N1 + ",id,stagger,delay,duration,paused,scrollTrigger", function (u) {
  return (j1[u] = 1);
});
var Nt = (function (u) {
  Y0(n, u);
  function n(s, o, a, d) {
    var f;
    typeof o == "number" && ((a.duration = o), (o = a), (a = null)),
      (f = u.call(this, d ? o : gl(o)) || this);
    var h = f.vars,
      g = h.duration,
      x = h.delay,
      _ = h.immediateRender,
      S = h.stagger,
      y = h.overwrite,
      N = h.keyframes,
      w = h.defaults,
      P = h.scrollTrigger,
      I = h.yoyoEase,
      A = o.parent || ct,
      $ = (an(s) || q0(s) ? fi(s[0]) : "length" in o) ? [s] : vr(s),
      O,
      L,
      U,
      z,
      W,
      B,
      q,
      fe;
    if (
      ((f._targets = $.length
        ? Md($)
        : El(
            "GSAP target " + s + " not found. https://gsap.com",
            !er.nullTargetWarn
          ) || []),
      (f._ptLookup = []),
      (f._overwrite = y),
      N || S || Va(g) || Va(x))
    ) {
      if (
        ((o = f.vars),
        (O = f.timeline =
          new _n({
            data: "nested",
            defaults: w || {},
            targets: A && A.data === "nested" ? A.vars.targets : $,
          })),
        O.kill(),
        (O.parent = O._dp = oi(f)),
        (O._start = 0),
        S || Va(g) || Va(x))
      ) {
        if (((z = $.length), (q = S && f1(S)), Gr(S)))
          for (W in S) ~N1.indexOf(W) && (fe || (fe = {}), (fe[W] = S[W]));
        for (L = 0; L < z; L++)
          (U = gu(o, j1)),
            (U.stagger = 0),
            I && (U.yoyoEase = I),
            fe && xo(U, fe),
            (B = $[L]),
            (U.duration = +xl(g, oi(f), L, B, $)),
            (U.delay = (+xl(x, oi(f), L, B, $) || 0) - f._delay),
            !S &&
              z === 1 &&
              U.delay &&
              ((f._delay = x = U.delay), (f._start += x), (U.delay = 0)),
            O.to(B, U, q ? q(L, B, $) : 0),
            (O._ease = Ie.none);
        O.duration() ? (g = x = 0) : (f.timeline = 0);
      } else if (N) {
        gl(nr(O.vars.defaults, { ease: "none" })),
          (O._ease = ys(N.ease || o.ease || "none"));
        var Q = 0,
          he,
          ge,
          Se;
        if (an(N))
          N.forEach(function (de) {
            return O.to($, de, ">");
          }),
            O.duration();
        else {
          U = {};
          for (W in N)
            W === "ease" || W === "easeEach" || k2(W, N[W], U, N.easeEach);
          for (W in U)
            for (
              he = U[W].sort(function (de, ee) {
                return de.t - ee.t;
              }),
                Q = 0,
                L = 0;
              L < he.length;
              L++
            )
              (ge = he[L]),
                (Se = {
                  ease: ge.e,
                  duration: ((ge.t - (L ? he[L - 1].t : 0)) / 100) * g,
                }),
                (Se[W] = ge.v),
                O.to($, Se, Q),
                (Q += Se.duration);
          O.duration() < g && O.to({}, { duration: g - O.duration() });
        }
      }
      g || f.duration((g = O.duration()));
    } else f.timeline = 0;
    return (
      y === !0 && !Sd && ((Ai = oi(f)), ct.killTweensOf($), (Ai = 0)),
      Yr(A, oi(f), a),
      o.reversed && f.reverse(),
      o.paused && f.paused(!0),
      (_ ||
        (!g &&
          !N &&
          f._start === jt(A._time) &&
          On(_) &&
          Jy(oi(f)) &&
          A.data !== "nested")) &&
        ((f._tTime = -Xe), f.render(Math.max(0, -x) || 0)),
      P && l1(oi(f), P),
      f
    );
  }
  var r = n.prototype;
  return (
    (r.render = function (o, a, d) {
      var f = this._time,
        h = this._tDur,
        g = this._dur,
        x = o < 0,
        _ = o > h - Xe && !x ? h : o < Xe ? 0 : o,
        S,
        y,
        N,
        w,
        P,
        I,
        A,
        $,
        O;
      if (!g) t2(this, o, a, d);
      else if (
        _ !== this._tTime ||
        !o ||
        d ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== x) ||
        this._lazy
      ) {
        if (((S = _), ($ = this.timeline), this._repeat)) {
          if (((w = g + this._rDelay), this._repeat < -1 && x))
            return this.totalTime(w * 100 + o, a, d);
          if (
            ((S = jt(_ % w)),
            _ === h
              ? ((N = this._repeat), (S = g))
              : ((P = jt(_ / w)),
                (N = ~~P),
                N && N === P ? ((S = g), N--) : S > g && (S = g)),
            (I = this._yoyo && N & 1),
            I && ((O = this._yEase), (S = g - S)),
            (P = yo(this._tTime, w)),
            S === f && !d && this._initted && N === P)
          )
            return (this._tTime = _), this;
          N !== P &&
            ($ && this._yEase && k1($, I),
            this.vars.repeatRefresh &&
              !I &&
              !this._lock &&
              S !== w &&
              this._initted &&
              ((this._lock = d = 1),
              (this.render(jt(w * N), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (a1(this, x ? o : S, d, a, _)) return (this._tTime = 0), this;
          if (f !== this._time && !(d && this.vars.repeatRefresh && N !== P))
            return this;
          if (g !== this._dur) return this.render(o, a, d);
        }
        if (
          ((this._tTime = _),
          (this._time = S),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = A = (O || this._ease)(S / g)),
          this._from && (this.ratio = A = 1 - A),
          !f && _ && !a && !P && (Zn(this, "onStart"), this._tTime !== _))
        )
          return this;
        for (y = this._pt; y; ) y.r(A, y.d), (y = y._next);
        ($ && $.render(o < 0 ? o : $._dur * $._ease(S / this._dur), a, d)) ||
          (this._startAt && (this._zTime = o)),
          this._onUpdate &&
            !a &&
            (x && Zf(this, o, a, d), Zn(this, "onUpdate")),
          this._repeat &&
            N !== P &&
            this.vars.onRepeat &&
            !a &&
            this.parent &&
            Zn(this, "onRepeat"),
          (_ === this._tDur || !_) &&
            this._tTime === _ &&
            (x && !this._onUpdate && Zf(this, o, !0, !0),
            (o || !g) &&
              ((_ === this._tDur && this._ts > 0) || (!_ && this._ts < 0)) &&
              Vi(this, 1),
            !a &&
              !(x && !f) &&
              (_ || f || I) &&
              (Zn(this, _ === h ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(_ < h && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (r.targets = function () {
      return this._targets;
    }),
    (r.invalidate = function (o) {
      return (
        (!o || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(o),
        u.prototype.invalidate.call(this, o)
      );
    }),
    (r.resetTo = function (o, a, d, f, h) {
      bl || Qn.wake(), this._ts || this.play();
      var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        x;
      return (
        this._initted || Od(this, g),
        (x = this._ease(g / this._dur)),
        _2(this, o, a, d, f, x, g, h)
          ? this.resetTo(o, a, d, f, 1)
          : (Ru(this, 0),
            this.parent ||
              s1(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (r.kill = function (o, a) {
      if ((a === void 0 && (a = "all"), !o && (!a || a === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? ul(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Xt),
          this
        );
      if (this.timeline) {
        var d = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(o, a, Ai && Ai.vars.overwrite !== !0)
            ._first || ul(this),
          this.parent &&
            d !== this.timeline.totalDuration() &&
            _o(this, (this._dur * this.timeline._tDur) / d, 0, 1),
          this
        );
      }
      var f = this._targets,
        h = o ? vr(o) : f,
        g = this._ptLookup,
        x = this._pt,
        _,
        S,
        y,
        N,
        w,
        P,
        I;
      if ((!a || a === "all") && Ky(f, h))
        return a === "all" && (this._pt = 0), ul(this);
      for (
        _ = this._op = this._op || [],
          a !== "all" &&
            (Bt(a) &&
              ((w = {}),
              Dn(a, function (A) {
                return (w[A] = 1);
              }),
              (a = w)),
            (a = w2(f, a))),
          I = f.length;
        I--;

      )
        if (~h.indexOf(f[I])) {
          (S = g[I]),
            a === "all"
              ? ((_[I] = a), (N = S), (y = {}))
              : ((y = _[I] = _[I] || {}), (N = a));
          for (w in N)
            (P = S && S[w]),
              P &&
                ((!("kill" in P.d) || P.d.kill(w) === !0) && Mu(this, P, "_pt"),
                delete S[w]),
              y !== "all" && (y[w] = 1);
        }
      return this._initted && !this._pt && x && ul(this), this;
    }),
    (n.to = function (o, a) {
      return new n(o, a, arguments[2]);
    }),
    (n.from = function (o, a) {
      return vl(1, arguments);
    }),
    (n.delayedCall = function (o, a, d, f) {
      return new n(a, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: o,
        onComplete: a,
        onReverseComplete: a,
        onCompleteParams: d,
        onReverseCompleteParams: d,
        callbackScope: f,
      });
    }),
    (n.fromTo = function (o, a, d) {
      return vl(2, arguments);
    }),
    (n.set = function (o, a) {
      return (a.duration = 0), a.repeatDelay || (a.repeat = 0), new n(o, a);
    }),
    (n.killTweensOf = function (o, a, d) {
      return ct.killTweensOf(o, a, d);
    }),
    n
  );
})(Rl);
nr(Nt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Dn("staggerTo,staggerFrom,staggerFromTo", function (u) {
  Nt[u] = function () {
    var n = new _n(),
      r = ed.call(arguments, 0);
    return r.splice(u === "staggerFromTo" ? 5 : 4, 0, 0), n[u].apply(n, r);
  };
});
var Dd = function (n, r, s) {
    return (n[r] = s);
  },
  E1 = function (n, r, s) {
    return n[r](s);
  },
  S2 = function (n, r, s, o) {
    return n[r](o.fp, s);
  },
  C2 = function (n, r, s) {
    return n.setAttribute(r, s);
  },
  zd = function (n, r) {
    return mt(n[r]) ? E1 : Cd(n[r]) && n.setAttribute ? C2 : Dd;
  },
  P1 = function (n, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e6) / 1e6, r);
  },
  T2 = function (n, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * n), r);
  },
  M1 = function (n, r) {
    var s = r._pt,
      o = "";
    if (!n && r.b) o = r.b;
    else if (n === 1 && r.e) o = r.e;
    else {
      for (; s; )
        (o =
          s.p +
          (s.m ? s.m(s.s + s.c * n) : Math.round((s.s + s.c * n) * 1e4) / 1e4) +
          o),
          (s = s._next);
      o += r.c;
    }
    r.set(r.t, r.p, o, r);
  },
  Ad = function (n, r) {
    for (var s = r._pt; s; ) s.r(n, s.d), (s = s._next);
  },
  N2 = function (n, r, s, o) {
    for (var a = this._pt, d; a; )
      (d = a._next), a.p === o && a.modifier(n, r, s), (a = d);
  },
  j2 = function (n) {
    for (var r = this._pt, s, o; r; )
      (o = r._next),
        (r.p === n && !r.op) || r.op === n
          ? Mu(this, r, "_pt")
          : r.dep || (s = 1),
        (r = o);
    return !s;
  },
  E2 = function (n, r, s, o) {
    o.mSet(n, r, o.m.call(o.tween, s, o.mt), o);
  },
  b1 = function (n) {
    for (var r = n._pt, s, o, a, d; r; ) {
      for (s = r._next, o = a; o && o.pr > r.pr; ) o = o._next;
      (r._prev = o ? o._prev : d) ? (r._prev._next = r) : (a = r),
        (r._next = o) ? (o._prev = r) : (d = r),
        (r = s);
    }
    n._pt = a;
  },
  zn = (function () {
    function u(r, s, o, a, d, f, h, g, x) {
      (this.t = s),
        (this.s = a),
        (this.c = d),
        (this.p = o),
        (this.r = f || P1),
        (this.d = h || this),
        (this.set = g || Dd),
        (this.pr = x || 0),
        (this._next = r),
        r && (r._prev = this);
    }
    var n = u.prototype;
    return (
      (n.modifier = function (s, o, a) {
        (this.mSet = this.mSet || this.set),
          (this.set = E2),
          (this.m = s),
          (this.mt = a),
          (this.tween = o);
      }),
      u
    );
  })();
Dn(
  Pd +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (u) {
    return (Ed[u] = 1);
  }
);
tr.TweenMax = tr.TweenLite = Nt;
tr.TimelineLite = tr.TimelineMax = _n;
ct = new _n({
  sortChildren: !1,
  defaults: vo,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
er.stringFilter = _1;
var _s = [],
  ou = {},
  P2 = [],
  Km = 0,
  M2 = 0,
  Df = function (n) {
    return (ou[n] || P2).map(function (r) {
      return r();
    });
  },
  id = function () {
    var n = Date.now(),
      r = [];
    n - Km > 2 &&
      (Df("matchMediaInit"),
      _s.forEach(function (s) {
        var o = s.queries,
          a = s.conditions,
          d,
          f,
          h,
          g;
        for (f in o)
          (d = Hr.matchMedia(o[f]).matches),
            d && (h = 1),
            d !== a[f] && ((a[f] = d), (g = 1));
        g && (s.revert(), h && r.push(s));
      }),
      Df("matchMediaRevert"),
      r.forEach(function (s) {
        return s.onMatch(s, function (o) {
          return s.add(null, o);
        });
      }),
      (Km = n),
      Df("matchMedia"));
  },
  R1 = (function () {
    function u(r, s) {
      (this.selector = s && td(s)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = M2++),
        r && this.add(r);
    }
    var n = u.prototype;
    return (
      (n.add = function (s, o, a) {
        mt(s) && ((a = o), (o = s), (s = mt));
        var d = this,
          f = function () {
            var g = ot,
              x = d.selector,
              _;
            return (
              g && g !== d && g.data.push(d),
              a && (d.selector = td(a)),
              (ot = d),
              (_ = o.apply(d, arguments)),
              mt(_) && d._r.push(_),
              (ot = g),
              (d.selector = x),
              (d.isReverted = !1),
              _
            );
          };
        return (
          (d.last = f),
          s === mt
            ? f(d, function (h) {
                return d.add(null, h);
              })
            : s
            ? (d[s] = f)
            : f
        );
      }),
      (n.ignore = function (s) {
        var o = ot;
        (ot = null), s(this), (ot = o);
      }),
      (n.getTweens = function () {
        var s = [];
        return (
          this.data.forEach(function (o) {
            return o instanceof u
              ? s.push.apply(s, o.getTweens())
              : o instanceof Nt &&
                  !(o.parent && o.parent.data === "nested") &&
                  s.push(o);
          }),
          s
        );
      }),
      (n.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (n.kill = function (s, o) {
        var a = this;
        if (
          (s
            ? (function () {
                for (var f = a.getTweens(), h = a.data.length, g; h--; )
                  (g = a.data[h]),
                    g.data === "isFlip" &&
                      (g.revert(),
                      g.getChildren(!0, !0, !1).forEach(function (x) {
                        return f.splice(f.indexOf(x), 1);
                      }));
                for (
                  f
                    .map(function (x) {
                      return {
                        g:
                          x._dur ||
                          x._delay ||
                          (x._sat && !x._sat.vars.immediateRender)
                            ? x.globalTime(0)
                            : -1 / 0,
                        t: x,
                      };
                    })
                    .sort(function (x, _) {
                      return _.g - x.g || -1 / 0;
                    })
                    .forEach(function (x) {
                      return x.t.revert(s);
                    }),
                    h = a.data.length;
                  h--;

                )
                  (g = a.data[h]),
                    g instanceof _n
                      ? g.data !== "nested" &&
                        (g.scrollTrigger && g.scrollTrigger.revert(), g.kill())
                      : !(g instanceof Nt) && g.revert && g.revert(s);
                a._r.forEach(function (x) {
                  return x(s, a);
                }),
                  (a.isReverted = !0);
              })()
            : this.data.forEach(function (f) {
                return f.kill && f.kill();
              }),
          this.clear(),
          o)
        )
          for (var d = _s.length; d--; )
            _s[d].id === this.id && _s.splice(d, 1);
      }),
      (n.revert = function (s) {
        this.kill(s || {});
      }),
      u
    );
  })(),
  b2 = (function () {
    function u(r) {
      (this.contexts = []), (this.scope = r), ot && ot.data.push(this);
    }
    var n = u.prototype;
    return (
      (n.add = function (s, o, a) {
        Gr(s) || (s = { matches: s });
        var d = new R1(0, a || this.scope),
          f = (d.conditions = {}),
          h,
          g,
          x;
        ot && !d.selector && (d.selector = ot.selector),
          this.contexts.push(d),
          (o = d.add("onMatch", o)),
          (d.queries = s);
        for (g in s)
          g === "all"
            ? (x = 1)
            : ((h = Hr.matchMedia(s[g])),
              h &&
                (_s.indexOf(d) < 0 && _s.push(d),
                (f[g] = h.matches) && (x = 1),
                h.addListener
                  ? h.addListener(id)
                  : h.addEventListener("change", id)));
        return (
          x &&
            o(d, function (_) {
              return d.add(null, _);
            }),
          this
        );
      }),
      (n.revert = function (s) {
        this.kill(s || {});
      }),
      (n.kill = function (s) {
        this.contexts.forEach(function (o) {
          return o.kill(s, !0);
        });
      }),
      u
    );
  })(),
  xu = {
    registerPlugin: function () {
      for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
        r[s] = arguments[s];
      r.forEach(function (o) {
        return v1(o);
      });
    },
    timeline: function (n) {
      return new _n(n);
    },
    getTweensOf: function (n, r) {
      return ct.getTweensOf(n, r);
    },
    getProperty: function (n, r, s, o) {
      Bt(n) && (n = vr(n)[0]);
      var a = vs(n || {}).get,
        d = s ? i1 : r1;
      return (
        s === "native" && (s = ""),
        n &&
          (r
            ? d(((Xn[r] && Xn[r].get) || a)(n, r, s, o))
            : function (f, h, g) {
                return d(((Xn[f] && Xn[f].get) || a)(n, f, h, g));
              })
      );
    },
    quickSetter: function (n, r, s) {
      if (((n = vr(n)), n.length > 1)) {
        var o = n.map(function (x) {
            return In.quickSetter(x, r, s);
          }),
          a = o.length;
        return function (x) {
          for (var _ = a; _--; ) o[_](x);
        };
      }
      n = n[0] || {};
      var d = Xn[r],
        f = vs(n),
        h = (f.harness && (f.harness.aliases || {})[r]) || r,
        g = d
          ? function (x) {
              var _ = new d();
              (oo._pt = 0),
                _.init(n, s ? x + s : x, oo, 0, [n]),
                _.render(1, _),
                oo._pt && Ad(1, oo);
            }
          : f.set(n, h);
      return d
        ? g
        : function (x) {
            return g(n, h, s ? x + s : x, f, 1);
          };
    },
    quickTo: function (n, r, s) {
      var o,
        a = In.to(
          n,
          nr(
            ((o = {}), (o[r] = "+=0.1"), (o.paused = !0), (o.stagger = 0), o),
            s || {}
          )
        ),
        d = function (h, g, x) {
          return a.resetTo(r, h, g, x);
        };
      return (d.tween = a), d;
    },
    isTweening: function (n) {
      return ct.getTweensOf(n, !0).length > 0;
    },
    defaults: function (n) {
      return n && n.ease && (n.ease = ys(n.ease, vo.ease)), Wm(vo, n || {});
    },
    config: function (n) {
      return Wm(er, n || {});
    },
    registerEffect: function (n) {
      var r = n.name,
        s = n.effect,
        o = n.plugins,
        a = n.defaults,
        d = n.extendTimeline;
      (o || "").split(",").forEach(function (f) {
        return (
          f && !Xn[f] && !tr[f] && El(r + " effect requires " + f + " plugin.")
        );
      }),
        (Mf[r] = function (f, h, g) {
          return s(vr(f), nr(h || {}, a), g);
        }),
        d &&
          (_n.prototype[r] = function (f, h, g) {
            return this.add(Mf[r](f, Gr(h) ? h : (g = h) && {}, this), g);
          });
    },
    registerEase: function (n, r) {
      Ie[n] = ys(r);
    },
    parseEase: function (n, r) {
      return arguments.length ? ys(n, r) : Ie;
    },
    getById: function (n) {
      return ct.getById(n);
    },
    exportRoot: function (n, r) {
      n === void 0 && (n = {});
      var s = new _n(n),
        o,
        a;
      for (
        s.smoothChildTiming = On(n.smoothChildTiming),
          ct.remove(s),
          s._dp = 0,
          s._time = s._tTime = ct._time,
          o = ct._first;
        o;

      )
        (a = o._next),
          (r ||
            !(
              !o._dur &&
              o instanceof Nt &&
              o.vars.onComplete === o._targets[0]
            )) &&
            Yr(s, o, o._start - o._delay),
          (o = a);
      return Yr(ct, s, 0), s;
    },
    context: function (n, r) {
      return n ? new R1(n, r) : ot;
    },
    matchMedia: function (n) {
      return new b2(n);
    },
    matchMediaRefresh: function () {
      return (
        _s.forEach(function (n) {
          var r = n.conditions,
            s,
            o;
          for (o in r) r[o] && ((r[o] = !1), (s = 1));
          s && n.revert();
        }) || id()
      );
    },
    addEventListener: function (n, r) {
      var s = ou[n] || (ou[n] = []);
      ~s.indexOf(r) || s.push(r);
    },
    removeEventListener: function (n, r) {
      var s = ou[n],
        o = s && s.indexOf(r);
      o >= 0 && s.splice(o, 1);
    },
    utils: {
      wrap: u2,
      wrapYoyo: c2,
      distribute: f1,
      random: p1,
      snap: d1,
      normalize: a2,
      getUnit: sn,
      clamp: i2,
      splitColor: x1,
      toArray: vr,
      selector: td,
      mapRange: m1,
      pipe: o2,
      unitize: l2,
      interpolate: f2,
      shuffle: c1,
    },
    install: Z0,
    effects: Mf,
    ticker: Qn,
    updateRoot: _n.updateRoot,
    plugins: Xn,
    globalTimeline: ct,
    core: {
      PropTween: zn,
      globals: J0,
      Tween: Nt,
      Timeline: _n,
      Animation: Rl,
      getCache: vs,
      _removeLinkedListItem: Mu,
      reverting: function () {
        return Xt;
      },
      context: function (n) {
        return n && ot && (ot.data.push(n), (n._ctx = ot)), ot;
      },
      suppressOverwrites: function (n) {
        return (Sd = n);
      },
    },
  };
Dn("to,from,fromTo,delayedCall,set,killTweensOf", function (u) {
  return (xu[u] = Nt[u]);
});
Qn.add(_n.updateRoot);
oo = xu.to({}, { duration: 0 });
var R2 = function (n, r) {
    for (var s = n._pt; s && s.p !== r && s.op !== r && s.fp !== r; )
      s = s._next;
    return s;
  },
  O2 = function (n, r) {
    var s = n._targets,
      o,
      a,
      d;
    for (o in r)
      for (a = s.length; a--; )
        (d = n._ptLookup[a][o]),
          d &&
            (d = d.d) &&
            (d._pt && (d = R2(d, o)),
            d && d.modifier && d.modifier(r[o], n, s[a], o));
  },
  zf = function (n, r) {
    return {
      name: n,
      headless: 1,
      rawVars: 1,
      init: function (o, a, d) {
        d._onInit = function (f) {
          var h, g;
          if (
            (Bt(a) &&
              ((h = {}),
              Dn(a, function (x) {
                return (h[x] = 1);
              }),
              (a = h)),
            r)
          ) {
            h = {};
            for (g in a) h[g] = r(a[g]);
            a = h;
          }
          O2(f, a);
        };
      },
    };
  },
  In =
    xu.registerPlugin(
      {
        name: "attr",
        init: function (n, r, s, o, a) {
          var d, f, h;
          this.tween = s;
          for (d in r)
            (h = n.getAttribute(d) || ""),
              (f = this.add(
                n,
                "setAttribute",
                (h || 0) + "",
                r[d],
                o,
                a,
                0,
                0,
                d
              )),
              (f.op = d),
              (f.b = h),
              this._props.push(d);
        },
        render: function (n, r) {
          for (var s = r._pt; s; )
            Xt ? s.set(s.t, s.p, s.b, s) : s.r(n, s.d), (s = s._next);
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (n, r) {
          for (var s = r.length; s--; )
            this.add(n, s, n[s] || 0, r[s], 0, 0, 0, 0, 0, 1);
        },
      },
      zf("roundProps", nd),
      zf("modifiers"),
      zf("snap", d1)
    ) || xu;
Nt.version = _n.version = In.version = "3.13.0";
K0 = 1;
Td() && wo();
Ie.Power0;
Ie.Power1;
Ie.Power2;
Ie.Power3;
Ie.Power4;
Ie.Linear;
Ie.Quad;
Ie.Cubic;
Ie.Quart;
Ie.Quint;
Ie.Strong;
Ie.Elastic;
Ie.Back;
Ie.SteppedEase;
Ie.Bounce;
Ie.Sine;
Ie.Expo;
Ie.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Zm,
  Ii,
  fo,
  Id,
  hs,
  Jm,
  Ld,
  D2 = function () {
    return typeof window < "u";
  },
  di = {},
  fs = 180 / Math.PI,
  po = Math.PI / 180,
  eo = Math.atan2,
  e0 = 1e8,
  Fd = /([A-Z])/g,
  z2 = /(left|right|width|margin|padding|x)/i,
  A2 = /[\s,\(]\S/,
  Wr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  sd = function (n, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u, r);
  },
  I2 = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n === 1 ? r.e : Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u,
      r
    );
  },
  L2 = function (n, r) {
    return r.set(
      r.t,
      r.p,
      n ? Math.round((r.s + r.c * n) * 1e4) / 1e4 + r.u : r.b,
      r
    );
  },
  F2 = function (n, r) {
    var s = r.s + r.c * n;
    r.set(r.t, r.p, ~~(s + (s < 0 ? -0.5 : 0.5)) + r.u, r);
  },
  O1 = function (n, r) {
    return r.set(r.t, r.p, n ? r.e : r.b, r);
  },
  D1 = function (n, r) {
    return r.set(r.t, r.p, n !== 1 ? r.b : r.e, r);
  },
  $2 = function (n, r, s) {
    return (n.style[r] = s);
  },
  U2 = function (n, r, s) {
    return n.style.setProperty(r, s);
  },
  B2 = function (n, r, s) {
    return (n._gsap[r] = s);
  },
  H2 = function (n, r, s) {
    return (n._gsap.scaleX = n._gsap.scaleY = s);
  },
  V2 = function (n, r, s, o, a) {
    var d = n._gsap;
    (d.scaleX = d.scaleY = s), d.renderTransform(a, d);
  },
  Y2 = function (n, r, s, o, a) {
    var d = n._gsap;
    (d[r] = s), d.renderTransform(a, d);
  },
  ft = "transform",
  An = ft + "Origin",
  W2 = function u(n, r) {
    var s = this,
      o = this.target,
      a = o.style,
      d = o._gsap;
    if (n in di && a) {
      if (((this.tfm = this.tfm || {}), n !== "transform"))
        (n = Wr[n] || n),
          ~n.indexOf(",")
            ? n.split(",").forEach(function (f) {
                return (s.tfm[f] = li(o, f));
              })
            : (this.tfm[n] = d.x ? d[n] : li(o, n)),
          n === An && (this.tfm.zOrigin = d.zOrigin);
      else
        return Wr.transform.split(",").forEach(function (f) {
          return u.call(s, f, r);
        });
      if (this.props.indexOf(ft) >= 0) return;
      d.svg &&
        ((this.svgo = o.getAttribute("data-svg-origin")),
        this.props.push(An, r, "")),
        (n = ft);
    }
    (a || r) && this.props.push(n, r, a[n]);
  },
  z1 = function (n) {
    n.translate &&
      (n.removeProperty("translate"),
      n.removeProperty("scale"),
      n.removeProperty("rotate"));
  },
  q2 = function () {
    var n = this.props,
      r = this.target,
      s = r.style,
      o = r._gsap,
      a,
      d;
    for (a = 0; a < n.length; a += 3)
      n[a + 1]
        ? n[a + 1] === 2
          ? r[n[a]](n[a + 2])
          : (r[n[a]] = n[a + 2])
        : n[a + 2]
        ? (s[n[a]] = n[a + 2])
        : s.removeProperty(
            n[a].substr(0, 2) === "--"
              ? n[a]
              : n[a].replace(Fd, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (d in this.tfm) o[d] = this.tfm[d];
      o.svg &&
        (o.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        (a = Ld()),
        (!a || !a.isStart) &&
          !s[ft] &&
          (z1(s),
          o.zOrigin &&
            s[An] &&
            ((s[An] += " " + o.zOrigin + "px"),
            (o.zOrigin = 0),
            o.renderTransform()),
          (o.uncache = 1));
    }
  },
  A1 = function (n, r) {
    var s = { target: n, props: [], revert: q2, save: W2 };
    return (
      n._gsap || In.core.getCache(n),
      r &&
        n.style &&
        n.nodeType &&
        r.split(",").forEach(function (o) {
          return s.save(o);
        }),
      s
    );
  },
  I1,
  od = function (n, r) {
    var s = Ii.createElementNS
      ? Ii.createElementNS(
          (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          n
        )
      : Ii.createElement(n);
    return s && s.style ? s : Ii.createElement(n);
  },
  xr = function u(n, r, s) {
    var o = getComputedStyle(n);
    return (
      o[r] ||
      o.getPropertyValue(r.replace(Fd, "-$1").toLowerCase()) ||
      o.getPropertyValue(r) ||
      (!s && u(n, ko(r) || r, 1)) ||
      ""
    );
  },
  t0 = "O,Moz,ms,Ms,Webkit".split(","),
  ko = function (n, r, s) {
    var o = r || hs,
      a = o.style,
      d = 5;
    if (n in a && !s) return n;
    for (
      n = n.charAt(0).toUpperCase() + n.substr(1);
      d-- && !(t0[d] + n in a);

    );
    return d < 0 ? null : (d === 3 ? "ms" : d >= 0 ? t0[d] : "") + n;
  },
  ld = function () {
    D2() &&
      window.document &&
      ((Zm = window),
      (Ii = Zm.document),
      (fo = Ii.documentElement),
      (hs = od("div") || { style: {} }),
      od("div"),
      (ft = ko(ft)),
      (An = ft + "Origin"),
      (hs.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (I1 = !!ko("perspective")),
      (Ld = In.core.reverting),
      (Id = 1));
  },
  n0 = function (n) {
    var r = n.ownerSVGElement,
      s = od(
        "svg",
        (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      o = n.cloneNode(!0),
      a;
    (o.style.display = "block"), s.appendChild(o), fo.appendChild(s);
    try {
      a = o.getBBox();
    } catch {}
    return s.removeChild(o), fo.removeChild(s), a;
  },
  r0 = function (n, r) {
    for (var s = r.length; s--; )
      if (n.hasAttribute(r[s])) return n.getAttribute(r[s]);
  },
  L1 = function (n) {
    var r, s;
    try {
      r = n.getBBox();
    } catch {
      (r = n0(n)), (s = 1);
    }
    return (
      (r && (r.width || r.height)) || s || (r = n0(n)),
      r && !r.width && !r.x && !r.y
        ? {
            x: +r0(n, ["x", "cx", "x1"]) || 0,
            y: +r0(n, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : r
    );
  },
  F1 = function (n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && L1(n));
  },
  Cs = function (n, r) {
    if (r) {
      var s = n.style,
        o;
      r in di && r !== An && (r = ft),
        s.removeProperty
          ? ((o = r.substr(0, 2)),
            (o === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
            s.removeProperty(
              o === "--" ? r : r.replace(Fd, "-$1").toLowerCase()
            ))
          : s.removeAttribute(r);
    }
  },
  Li = function (n, r, s, o, a, d) {
    var f = new zn(n._pt, r, s, 0, 1, d ? D1 : O1);
    return (n._pt = f), (f.b = o), (f.e = a), n._props.push(s), f;
  },
  i0 = { deg: 1, rad: 1, turn: 1 },
  X2 = { grid: 1, flex: 1 },
  Yi = function u(n, r, s, o) {
    var a = parseFloat(s) || 0,
      d = (s + "").trim().substr((a + "").length) || "px",
      f = hs.style,
      h = z2.test(r),
      g = n.tagName.toLowerCase() === "svg",
      x = (g ? "client" : "offset") + (h ? "Width" : "Height"),
      _ = 100,
      S = o === "px",
      y = o === "%",
      N,
      w,
      P,
      I;
    if (o === d || !a || i0[o] || i0[d]) return a;
    if (
      (d !== "px" && !S && (a = u(n, r, s, "px")),
      (I = n.getCTM && F1(n)),
      (y || d === "%") && (di[r] || ~r.indexOf("adius")))
    )
      return (
        (N = I ? n.getBBox()[h ? "width" : "height"] : n[x]),
        yt(y ? (a / N) * _ : (a / 100) * N)
      );
    if (
      ((f[h ? "width" : "height"] = _ + (S ? d : o)),
      (w =
        (o !== "rem" && ~r.indexOf("adius")) ||
        (o === "em" && n.appendChild && !g)
          ? n
          : n.parentNode),
      I && (w = (n.ownerSVGElement || {}).parentNode),
      (!w || w === Ii || !w.appendChild) && (w = Ii.body),
      (P = w._gsap),
      P && y && P.width && h && P.time === Qn.time && !P.uncache)
    )
      return yt((a / P.width) * _);
    if (y && (r === "height" || r === "width")) {
      var A = n.style[r];
      (n.style[r] = _ + o), (N = n[x]), A ? (n.style[r] = A) : Cs(n, r);
    } else
      (y || d === "%") &&
        !X2[xr(w, "display")] &&
        (f.position = xr(n, "position")),
        w === n && (f.position = "static"),
        w.appendChild(hs),
        (N = hs[x]),
        w.removeChild(hs),
        (f.position = "absolute");
    return (
      h && y && ((P = vs(w)), (P.time = Qn.time), (P.width = w[x])),
      yt(S ? (N * a) / _ : N && a ? (_ / N) * a : 0)
    );
  },
  li = function (n, r, s, o) {
    var a;
    return (
      Id || ld(),
      r in Wr &&
        r !== "transform" &&
        ((r = Wr[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
      di[r] && r !== "transform"
        ? ((a = Dl(n, o)),
          (a =
            r !== "transformOrigin"
              ? a[r]
              : a.svg
              ? a.origin
              : _u(xr(n, An)) + " " + a.zOrigin + "px"))
        : ((a = n.style[r]),
          (!a || a === "auto" || o || ~(a + "").indexOf("calc(")) &&
            (a =
              (yu[r] && yu[r](n, r, s)) ||
              xr(n, r) ||
              t1(n, r) ||
              (r === "opacity" ? 1 : 0))),
      s && !~(a + "").trim().indexOf(" ") ? Yi(n, r, a, s) + s : a
    );
  },
  G2 = function (n, r, s, o) {
    if (!s || s === "none") {
      var a = ko(r, n, 1),
        d = a && xr(n, a, 1);
      d && d !== s
        ? ((r = a), (s = d))
        : r === "borderColor" && (s = xr(n, "borderTopColor"));
    }
    var f = new zn(this._pt, n.style, r, 0, 1, M1),
      h = 0,
      g = 0,
      x,
      _,
      S,
      y,
      N,
      w,
      P,
      I,
      A,
      $,
      O,
      L;
    if (
      ((f.b = s),
      (f.e = o),
      (s += ""),
      (o += ""),
      o.substring(0, 6) === "var(--" &&
        (o = xr(n, o.substring(4, o.indexOf(")")))),
      o === "auto" &&
        ((w = n.style[r]),
        (n.style[r] = o),
        (o = xr(n, r) || o),
        w ? (n.style[r] = w) : Cs(n, r)),
      (x = [s, o]),
      _1(x),
      (s = x[0]),
      (o = x[1]),
      (S = s.match(so) || []),
      (L = o.match(so) || []),
      L.length)
    ) {
      for (; (_ = so.exec(o)); )
        (P = _[0]),
          (A = o.substring(h, _.index)),
          N
            ? (N = (N + 1) % 5)
            : (A.substr(-5) === "rgba(" || A.substr(-5) === "hsla(") && (N = 1),
          P !== (w = S[g++] || "") &&
            ((y = parseFloat(w) || 0),
            (O = w.substr((y + "").length)),
            P.charAt(1) === "=" && (P = co(y, P) + O),
            (I = parseFloat(P)),
            ($ = P.substr((I + "").length)),
            (h = so.lastIndex - $.length),
            $ ||
              (($ = $ || er.units[r] || O),
              h === o.length && ((o += $), (f.e += $))),
            O !== $ && (y = Yi(n, r, w, $) || 0),
            (f._pt = {
              _next: f._pt,
              p: A || g === 1 ? A : ",",
              s: y,
              c: I - y,
              m: (N && N < 4) || r === "zIndex" ? Math.round : 0,
            }));
      f.c = h < o.length ? o.substring(h, o.length) : "";
    } else f.r = r === "display" && o === "none" ? D1 : O1;
    return G0.test(o) && (f.e = 0), (this._pt = f), f;
  },
  s0 = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Q2 = function (n) {
    var r = n.split(" "),
      s = r[0],
      o = r[1] || "50%";
    return (
      (s === "top" || s === "bottom" || o === "left" || o === "right") &&
        ((n = s), (s = o), (o = n)),
      (r[0] = s0[s] || s),
      (r[1] = s0[o] || o),
      r.join(" ")
    );
  },
  K2 = function (n, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
      var s = r.t,
        o = s.style,
        a = r.u,
        d = s._gsap,
        f,
        h,
        g;
      if (a === "all" || a === !0) (o.cssText = ""), (h = 1);
      else
        for (a = a.split(","), g = a.length; --g > -1; )
          (f = a[g]),
            di[f] && ((h = 1), (f = f === "transformOrigin" ? An : ft)),
            Cs(s, f);
      h &&
        (Cs(s, ft),
        d &&
          (d.svg && s.removeAttribute("transform"),
          (o.scale = o.rotate = o.translate = "none"),
          Dl(s, 1),
          (d.uncache = 1),
          z1(o)));
    }
  },
  yu = {
    clearProps: function (n, r, s, o, a) {
      if (a.data !== "isFromStart") {
        var d = (n._pt = new zn(n._pt, r, s, 0, 0, K2));
        return (d.u = o), (d.pr = -10), (d.tween = a), n._props.push(s), 1;
      }
    },
  },
  Ol = [1, 0, 0, 1, 0, 0],
  $1 = {},
  U1 = function (n) {
    return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n;
  },
  o0 = function (n) {
    var r = xr(n, ft);
    return U1(r) ? Ol : r.substr(7).match(X0).map(yt);
  },
  $d = function (n, r) {
    var s = n._gsap || vs(n),
      o = n.style,
      a = o0(n),
      d,
      f,
      h,
      g;
    return s.svg && n.getAttribute("transform")
      ? ((h = n.transform.baseVal.consolidate().matrix),
        (a = [h.a, h.b, h.c, h.d, h.e, h.f]),
        a.join(",") === "1,0,0,1,0,0" ? Ol : a)
      : (a === Ol &&
          !n.offsetParent &&
          n !== fo &&
          !s.svg &&
          ((h = o.display),
          (o.display = "block"),
          (d = n.parentNode),
          (!d || (!n.offsetParent && !n.getBoundingClientRect().width)) &&
            ((g = 1), (f = n.nextElementSibling), fo.appendChild(n)),
          (a = o0(n)),
          h ? (o.display = h) : Cs(n, "display"),
          g &&
            (f
              ? d.insertBefore(n, f)
              : d
              ? d.appendChild(n)
              : fo.removeChild(n))),
        r && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a);
  },
  ad = function (n, r, s, o, a, d) {
    var f = n._gsap,
      h = a || $d(n, !0),
      g = f.xOrigin || 0,
      x = f.yOrigin || 0,
      _ = f.xOffset || 0,
      S = f.yOffset || 0,
      y = h[0],
      N = h[1],
      w = h[2],
      P = h[3],
      I = h[4],
      A = h[5],
      $ = r.split(" "),
      O = parseFloat($[0]) || 0,
      L = parseFloat($[1]) || 0,
      U,
      z,
      W,
      B;
    s
      ? h !== Ol &&
        (z = y * P - N * w) &&
        ((W = O * (P / z) + L * (-w / z) + (w * A - P * I) / z),
        (B = O * (-N / z) + L * (y / z) - (y * A - N * I) / z),
        (O = W),
        (L = B))
      : ((U = L1(n)),
        (O = U.x + (~$[0].indexOf("%") ? (O / 100) * U.width : O)),
        (L = U.y + (~($[1] || $[0]).indexOf("%") ? (L / 100) * U.height : L))),
      o || (o !== !1 && f.smooth)
        ? ((I = O - g),
          (A = L - x),
          (f.xOffset = _ + (I * y + A * w) - I),
          (f.yOffset = S + (I * N + A * P) - A))
        : (f.xOffset = f.yOffset = 0),
      (f.xOrigin = O),
      (f.yOrigin = L),
      (f.smooth = !!o),
      (f.origin = r),
      (f.originIsAbsolute = !!s),
      (n.style[An] = "0px 0px"),
      d &&
        (Li(d, f, "xOrigin", g, O),
        Li(d, f, "yOrigin", x, L),
        Li(d, f, "xOffset", _, f.xOffset),
        Li(d, f, "yOffset", S, f.yOffset)),
      n.setAttribute("data-svg-origin", O + " " + L);
  },
  Dl = function (n, r) {
    var s = n._gsap || new C1(n);
    if ("x" in s && !r && !s.uncache) return s;
    var o = n.style,
      a = s.scaleX < 0,
      d = "px",
      f = "deg",
      h = getComputedStyle(n),
      g = xr(n, An) || "0",
      x,
      _,
      S,
      y,
      N,
      w,
      P,
      I,
      A,
      $,
      O,
      L,
      U,
      z,
      W,
      B,
      q,
      fe,
      Q,
      he,
      ge,
      Se,
      de,
      ee,
      H,
      Z,
      C,
      j,
      F,
      pe,
      se,
      me;
    return (
      (x = _ = S = w = P = I = A = $ = O = 0),
      (y = N = 1),
      (s.svg = !!(n.getCTM && F1(n))),
      h.translate &&
        ((h.translate !== "none" ||
          h.scale !== "none" ||
          h.rotate !== "none") &&
          (o[ft] =
            (h.translate !== "none"
              ? "translate3d(" +
                (h.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (h.rotate !== "none" ? "rotate(" + h.rotate + ") " : "") +
            (h.scale !== "none"
              ? "scale(" + h.scale.split(" ").join(",") + ") "
              : "") +
            (h[ft] !== "none" ? h[ft] : "")),
        (o.scale = o.rotate = o.translate = "none")),
      (z = $d(n, s.svg)),
      s.svg &&
        (s.uncache
          ? ((H = n.getBBox()),
            (g = s.xOrigin - H.x + "px " + (s.yOrigin - H.y) + "px"),
            (ee = ""))
          : (ee = !r && n.getAttribute("data-svg-origin")),
        ad(n, ee || g, !!ee || s.originIsAbsolute, s.smooth !== !1, z)),
      (L = s.xOrigin || 0),
      (U = s.yOrigin || 0),
      z !== Ol &&
        ((fe = z[0]),
        (Q = z[1]),
        (he = z[2]),
        (ge = z[3]),
        (x = Se = z[4]),
        (_ = de = z[5]),
        z.length === 6
          ? ((y = Math.sqrt(fe * fe + Q * Q)),
            (N = Math.sqrt(ge * ge + he * he)),
            (w = fe || Q ? eo(Q, fe) * fs : 0),
            (A = he || ge ? eo(he, ge) * fs + w : 0),
            A && (N *= Math.abs(Math.cos(A * po))),
            s.svg &&
              ((x -= L - (L * fe + U * he)), (_ -= U - (L * Q + U * ge))))
          : ((me = z[6]),
            (pe = z[7]),
            (C = z[8]),
            (j = z[9]),
            (F = z[10]),
            (se = z[11]),
            (x = z[12]),
            (_ = z[13]),
            (S = z[14]),
            (W = eo(me, F)),
            (P = W * fs),
            W &&
              ((B = Math.cos(-W)),
              (q = Math.sin(-W)),
              (ee = Se * B + C * q),
              (H = de * B + j * q),
              (Z = me * B + F * q),
              (C = Se * -q + C * B),
              (j = de * -q + j * B),
              (F = me * -q + F * B),
              (se = pe * -q + se * B),
              (Se = ee),
              (de = H),
              (me = Z)),
            (W = eo(-he, F)),
            (I = W * fs),
            W &&
              ((B = Math.cos(-W)),
              (q = Math.sin(-W)),
              (ee = fe * B - C * q),
              (H = Q * B - j * q),
              (Z = he * B - F * q),
              (se = ge * q + se * B),
              (fe = ee),
              (Q = H),
              (he = Z)),
            (W = eo(Q, fe)),
            (w = W * fs),
            W &&
              ((B = Math.cos(W)),
              (q = Math.sin(W)),
              (ee = fe * B + Q * q),
              (H = Se * B + de * q),
              (Q = Q * B - fe * q),
              (de = de * B - Se * q),
              (fe = ee),
              (Se = H)),
            P &&
              Math.abs(P) + Math.abs(w) > 359.9 &&
              ((P = w = 0), (I = 180 - I)),
            (y = yt(Math.sqrt(fe * fe + Q * Q + he * he))),
            (N = yt(Math.sqrt(de * de + me * me))),
            (W = eo(Se, de)),
            (A = Math.abs(W) > 2e-4 ? W * fs : 0),
            (O = se ? 1 / (se < 0 ? -se : se) : 0)),
        s.svg &&
          ((ee = n.getAttribute("transform")),
          (s.forceCSS = n.setAttribute("transform", "") || !U1(xr(n, ft))),
          ee && n.setAttribute("transform", ee))),
      Math.abs(A) > 90 &&
        Math.abs(A) < 270 &&
        (a
          ? ((y *= -1), (A += w <= 0 ? 180 : -180), (w += w <= 0 ? 180 : -180))
          : ((N *= -1), (A += A <= 0 ? 180 : -180))),
      (r = r || s.uncache),
      (s.x =
        x -
        ((s.xPercent =
          x &&
          ((!r && s.xPercent) ||
            (Math.round(n.offsetWidth / 2) === Math.round(-x) ? -50 : 0)))
          ? (n.offsetWidth * s.xPercent) / 100
          : 0) +
        d),
      (s.y =
        _ -
        ((s.yPercent =
          _ &&
          ((!r && s.yPercent) ||
            (Math.round(n.offsetHeight / 2) === Math.round(-_) ? -50 : 0)))
          ? (n.offsetHeight * s.yPercent) / 100
          : 0) +
        d),
      (s.z = S + d),
      (s.scaleX = yt(y)),
      (s.scaleY = yt(N)),
      (s.rotation = yt(w) + f),
      (s.rotationX = yt(P) + f),
      (s.rotationY = yt(I) + f),
      (s.skewX = A + f),
      (s.skewY = $ + f),
      (s.transformPerspective = O + d),
      (s.zOrigin = parseFloat(g.split(" ")[2]) || (!r && s.zOrigin) || 0) &&
        (o[An] = _u(g)),
      (s.xOffset = s.yOffset = 0),
      (s.force3D = er.force3D),
      (s.renderTransform = s.svg ? J2 : I1 ? B1 : Z2),
      (s.uncache = 0),
      s
    );
  },
  _u = function (n) {
    return (n = n.split(" "))[0] + " " + n[1];
  },
  Af = function (n, r, s) {
    var o = sn(r);
    return yt(parseFloat(r) + parseFloat(Yi(n, "x", s + "px", o))) + o;
  },
  Z2 = function (n, r) {
    (r.z = "0px"),
      (r.rotationY = r.rotationX = "0deg"),
      (r.force3D = 0),
      B1(n, r);
  },
  us = "0deg",
  ol = "0px",
  cs = ") ",
  B1 = function (n, r) {
    var s = r || this,
      o = s.xPercent,
      a = s.yPercent,
      d = s.x,
      f = s.y,
      h = s.z,
      g = s.rotation,
      x = s.rotationY,
      _ = s.rotationX,
      S = s.skewX,
      y = s.skewY,
      N = s.scaleX,
      w = s.scaleY,
      P = s.transformPerspective,
      I = s.force3D,
      A = s.target,
      $ = s.zOrigin,
      O = "",
      L = (I === "auto" && n && n !== 1) || I === !0;
    if ($ && (_ !== us || x !== us)) {
      var U = parseFloat(x) * po,
        z = Math.sin(U),
        W = Math.cos(U),
        B;
      (U = parseFloat(_) * po),
        (B = Math.cos(U)),
        (d = Af(A, d, z * B * -$)),
        (f = Af(A, f, -Math.sin(U) * -$)),
        (h = Af(A, h, W * B * -$ + $));
    }
    P !== ol && (O += "perspective(" + P + cs),
      (o || a) && (O += "translate(" + o + "%, " + a + "%) "),
      (L || d !== ol || f !== ol || h !== ol) &&
        (O +=
          h !== ol || L
            ? "translate3d(" + d + ", " + f + ", " + h + ") "
            : "translate(" + d + ", " + f + cs),
      g !== us && (O += "rotate(" + g + cs),
      x !== us && (O += "rotateY(" + x + cs),
      _ !== us && (O += "rotateX(" + _ + cs),
      (S !== us || y !== us) && (O += "skew(" + S + ", " + y + cs),
      (N !== 1 || w !== 1) && (O += "scale(" + N + ", " + w + cs),
      (A.style[ft] = O || "translate(0, 0)");
  },
  J2 = function (n, r) {
    var s = r || this,
      o = s.xPercent,
      a = s.yPercent,
      d = s.x,
      f = s.y,
      h = s.rotation,
      g = s.skewX,
      x = s.skewY,
      _ = s.scaleX,
      S = s.scaleY,
      y = s.target,
      N = s.xOrigin,
      w = s.yOrigin,
      P = s.xOffset,
      I = s.yOffset,
      A = s.forceCSS,
      $ = parseFloat(d),
      O = parseFloat(f),
      L,
      U,
      z,
      W,
      B;
    (h = parseFloat(h)),
      (g = parseFloat(g)),
      (x = parseFloat(x)),
      x && ((x = parseFloat(x)), (g += x), (h += x)),
      h || g
        ? ((h *= po),
          (g *= po),
          (L = Math.cos(h) * _),
          (U = Math.sin(h) * _),
          (z = Math.sin(h - g) * -S),
          (W = Math.cos(h - g) * S),
          g &&
            ((x *= po),
            (B = Math.tan(g - x)),
            (B = Math.sqrt(1 + B * B)),
            (z *= B),
            (W *= B),
            x &&
              ((B = Math.tan(x)),
              (B = Math.sqrt(1 + B * B)),
              (L *= B),
              (U *= B))),
          (L = yt(L)),
          (U = yt(U)),
          (z = yt(z)),
          (W = yt(W)))
        : ((L = _), (W = S), (U = z = 0)),
      (($ && !~(d + "").indexOf("px")) || (O && !~(f + "").indexOf("px"))) &&
        (($ = Yi(y, "x", d, "px")), (O = Yi(y, "y", f, "px"))),
      (N || w || P || I) &&
        (($ = yt($ + N - (N * L + w * z) + P)),
        (O = yt(O + w - (N * U + w * W) + I))),
      (o || a) &&
        ((B = y.getBBox()),
        ($ = yt($ + (o / 100) * B.width)),
        (O = yt(O + (a / 100) * B.height))),
      (B =
        "matrix(" + L + "," + U + "," + z + "," + W + "," + $ + "," + O + ")"),
      y.setAttribute("transform", B),
      A && (y.style[ft] = B);
  },
  e_ = function (n, r, s, o, a) {
    var d = 360,
      f = Bt(a),
      h = parseFloat(a) * (f && ~a.indexOf("rad") ? fs : 1),
      g = h - o,
      x = o + g + "deg",
      _,
      S;
    return (
      f &&
        ((_ = a.split("_")[1]),
        _ === "short" && ((g %= d), g !== g % (d / 2) && (g += g < 0 ? d : -d)),
        _ === "cw" && g < 0
          ? (g = ((g + d * e0) % d) - ~~(g / d) * d)
          : _ === "ccw" && g > 0 && (g = ((g - d * e0) % d) - ~~(g / d) * d)),
      (n._pt = S = new zn(n._pt, r, s, o, g, I2)),
      (S.e = x),
      (S.u = "deg"),
      n._props.push(s),
      S
    );
  },
  l0 = function (n, r) {
    for (var s in r) n[s] = r[s];
    return n;
  },
  t_ = function (n, r, s) {
    var o = l0({}, s._gsap),
      a = "perspective,force3D,transformOrigin,svgOrigin",
      d = s.style,
      f,
      h,
      g,
      x,
      _,
      S,
      y,
      N;
    o.svg
      ? ((g = s.getAttribute("transform")),
        s.setAttribute("transform", ""),
        (d[ft] = r),
        (f = Dl(s, 1)),
        Cs(s, ft),
        s.setAttribute("transform", g))
      : ((g = getComputedStyle(s)[ft]),
        (d[ft] = r),
        (f = Dl(s, 1)),
        (d[ft] = g));
    for (h in di)
      (g = o[h]),
        (x = f[h]),
        g !== x &&
          a.indexOf(h) < 0 &&
          ((y = sn(g)),
          (N = sn(x)),
          (_ = y !== N ? Yi(s, h, g, N) : parseFloat(g)),
          (S = parseFloat(x)),
          (n._pt = new zn(n._pt, f, h, _, S - _, sd)),
          (n._pt.u = N || 0),
          n._props.push(h));
    l0(f, o);
  };
Dn("padding,margin,Width,Radius", function (u, n) {
  var r = "Top",
    s = "Right",
    o = "Bottom",
    a = "Left",
    d = (n < 3 ? [r, s, o, a] : [r + a, r + s, o + s, o + a]).map(function (f) {
      return n < 2 ? u + f : "border" + f + u;
    });
  yu[n > 1 ? "border" + u : u] = function (f, h, g, x, _) {
    var S, y;
    if (arguments.length < 4)
      return (
        (S = d.map(function (N) {
          return li(f, N, g);
        })),
        (y = S.join(" ")),
        y.split(S[0]).length === 5 ? S[0] : y
      );
    (S = (x + "").split(" ")),
      (y = {}),
      d.forEach(function (N, w) {
        return (y[N] = S[w] = S[w] || S[((w - 1) / 2) | 0]);
      }),
      f.init(h, y, _);
  };
});
var H1 = {
  name: "css",
  register: ld,
  targetTest: function (n) {
    return n.style && n.nodeType;
  },
  init: function (n, r, s, o, a) {
    var d = this._props,
      f = n.style,
      h = s.vars.startAt,
      g,
      x,
      _,
      S,
      y,
      N,
      w,
      P,
      I,
      A,
      $,
      O,
      L,
      U,
      z,
      W;
    Id || ld(),
      (this.styles = this.styles || A1(n)),
      (W = this.styles.props),
      (this.tween = s);
    for (w in r)
      if (w !== "autoRound" && ((x = r[w]), !(Xn[w] && T1(w, r, s, o, n, a)))) {
        if (
          ((y = typeof x),
          (N = yu[w]),
          y === "function" && ((x = x.call(s, o, n, a)), (y = typeof x)),
          y === "string" && ~x.indexOf("random(") && (x = Ml(x)),
          N)
        )
          N(this, n, w, x, s) && (z = 1);
        else if (w.substr(0, 2) === "--")
          (g = (getComputedStyle(n).getPropertyValue(w) + "").trim()),
            (x += ""),
            (Bi.lastIndex = 0),
            Bi.test(g) || ((P = sn(g)), (I = sn(x))),
            I ? P !== I && (g = Yi(n, w, g, I) + I) : P && (x += P),
            this.add(f, "setProperty", g, x, o, a, 0, 0, w),
            d.push(w),
            W.push(w, 0, f[w]);
        else if (y !== "undefined") {
          if (
            (h && w in h
              ? ((g = typeof h[w] == "function" ? h[w].call(s, o, n, a) : h[w]),
                Bt(g) && ~g.indexOf("random(") && (g = Ml(g)),
                sn(g + "") ||
                  g === "auto" ||
                  (g += er.units[w] || sn(li(n, w)) || ""),
                (g + "").charAt(1) === "=" && (g = li(n, w)))
              : (g = li(n, w)),
            (S = parseFloat(g)),
            (A = y === "string" && x.charAt(1) === "=" && x.substr(0, 2)),
            A && (x = x.substr(2)),
            (_ = parseFloat(x)),
            w in Wr &&
              (w === "autoAlpha" &&
                (S === 1 && li(n, "visibility") === "hidden" && _ && (S = 0),
                W.push("visibility", 0, f.visibility),
                Li(
                  this,
                  f,
                  "visibility",
                  S ? "inherit" : "hidden",
                  _ ? "inherit" : "hidden",
                  !_
                )),
              w !== "scale" &&
                w !== "transform" &&
                ((w = Wr[w]), ~w.indexOf(",") && (w = w.split(",")[0]))),
            ($ = w in di),
            $)
          ) {
            if (
              (this.styles.save(w),
              y === "string" &&
                x.substring(0, 6) === "var(--" &&
                ((x = xr(n, x.substring(4, x.indexOf(")")))),
                (_ = parseFloat(x))),
              O ||
                ((L = n._gsap),
                (L.renderTransform && !r.parseTransform) ||
                  Dl(n, r.parseTransform),
                (U = r.smoothOrigin !== !1 && L.smooth),
                (O = this._pt =
                  new zn(this._pt, f, ft, 0, 1, L.renderTransform, L, 0, -1)),
                (O.dep = 1)),
              w === "scale")
            )
              (this._pt = new zn(
                this._pt,
                L,
                "scaleY",
                L.scaleY,
                (A ? co(L.scaleY, A + _) : _) - L.scaleY || 0,
                sd
              )),
                (this._pt.u = 0),
                d.push("scaleY", w),
                (w += "X");
            else if (w === "transformOrigin") {
              W.push(An, 0, f[An]),
                (x = Q2(x)),
                L.svg
                  ? ad(n, x, 0, U, 0, this)
                  : ((I = parseFloat(x.split(" ")[2]) || 0),
                    I !== L.zOrigin && Li(this, L, "zOrigin", L.zOrigin, I),
                    Li(this, f, w, _u(g), _u(x)));
              continue;
            } else if (w === "svgOrigin") {
              ad(n, x, 1, U, 0, this);
              continue;
            } else if (w in $1) {
              e_(this, L, w, S, A ? co(S, A + x) : x);
              continue;
            } else if (w === "smoothOrigin") {
              Li(this, L, "smooth", L.smooth, x);
              continue;
            } else if (w === "force3D") {
              L[w] = x;
              continue;
            } else if (w === "transform") {
              t_(this, x, n);
              continue;
            }
          } else w in f || (w = ko(w) || w);
          if ($ || ((_ || _ === 0) && (S || S === 0) && !A2.test(x) && w in f))
            (P = (g + "").substr((S + "").length)),
              _ || (_ = 0),
              (I = sn(x) || (w in er.units ? er.units[w] : P)),
              P !== I && (S = Yi(n, w, g, I)),
              (this._pt = new zn(
                this._pt,
                $ ? L : f,
                w,
                S,
                (A ? co(S, A + _) : _) - S,
                !$ && (I === "px" || w === "zIndex") && r.autoRound !== !1
                  ? F2
                  : sd
              )),
              (this._pt.u = I || 0),
              P !== I && I !== "%" && ((this._pt.b = g), (this._pt.r = L2));
          else if (w in f) G2.call(this, n, w, g, A ? A + x : x);
          else if (w in n) this.add(n, w, g || n[w], A ? A + x : x, o, a);
          else if (w !== "parseTransform") {
            jd(w, x);
            continue;
          }
          $ ||
            (w in f
              ? W.push(w, 0, f[w])
              : typeof n[w] == "function"
              ? W.push(w, 2, n[w]())
              : W.push(w, 1, g || n[w])),
            d.push(w);
        }
      }
    z && b1(this);
  },
  render: function (n, r) {
    if (r.tween._time || !Ld())
      for (var s = r._pt; s; ) s.r(n, s.d), (s = s._next);
    else r.styles.revert();
  },
  get: li,
  aliases: Wr,
  getSetter: function (n, r, s) {
    var o = Wr[r];
    return (
      o && o.indexOf(",") < 0 && (r = o),
      r in di && r !== An && (n._gsap.x || li(n, "x"))
        ? s && Jm === s
          ? r === "scale"
            ? H2
            : B2
          : (Jm = s || {}) && (r === "scale" ? V2 : Y2)
        : n.style && !Cd(n.style[r])
        ? $2
        : ~r.indexOf("-")
        ? U2
        : zd(n, r)
    );
  },
  core: { _removeProperty: Cs, _getMatrix: $d },
};
In.utils.checkPrefix = ko;
In.core.getStyleSaver = A1;
(function (u, n, r, s) {
  var o = Dn(u + "," + n + "," + r, function (a) {
    di[a] = 1;
  });
  Dn(n, function (a) {
    (er.units[a] = "deg"), ($1[a] = 1);
  }),
    (Wr[o[13]] = u + "," + n),
    Dn(s, function (a) {
      var d = a.split(":");
      Wr[d[1]] = o[d[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Dn(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (u) {
    er.units[u] = "px";
  }
);
In.registerPlugin(H1);
var ln = In.registerPlugin(H1) || In;
ln.core.Tween;
function n_(u, n) {
  for (var r = 0; r < n.length; r++) {
    var s = n[r];
    (s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      "value" in s && (s.writable = !0),
      Object.defineProperty(u, s.key, s);
  }
}
function r_(u, n, r) {
  return n && n_(u.prototype, n), u;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var qt,
  lu,
  Kn,
  Fi,
  $i,
  ho,
  V1,
  ds,
  yl,
  Y1,
  ui,
  Rr,
  W1,
  q1 = function () {
    return (
      qt ||
      (typeof window < "u" && (qt = window.gsap) && qt.registerPlugin && qt)
    );
  },
  X1 = 1,
  lo = [],
  De = [],
  Xr = [],
  _l = Date.now,
  ud = function (n, r) {
    return r;
  },
  i_ = function () {
    var n = yl.core,
      r = n.bridge || {},
      s = n._scrollers,
      o = n._proxies;
    s.push.apply(s, De),
      o.push.apply(o, Xr),
      (De = s),
      (Xr = o),
      (ud = function (d, f) {
        return r[d](f);
      });
  },
  Hi = function (n, r) {
    return ~Xr.indexOf(n) && Xr[Xr.indexOf(n) + 1][r];
  },
  wl = function (n) {
    return !!~Y1.indexOf(n);
  },
  gn = function (n, r, s, o, a) {
    return n.addEventListener(r, s, { passive: o !== !1, capture: !!a });
  },
  mn = function (n, r, s, o) {
    return n.removeEventListener(r, s, !!o);
  },
  Ya = "scrollLeft",
  Wa = "scrollTop",
  cd = function () {
    return (ui && ui.isPressed) || De.cache++;
  },
  wu = function (n, r) {
    var s = function o(a) {
      if (a || a === 0) {
        X1 && (Kn.history.scrollRestoration = "manual");
        var d = ui && ui.isPressed;
        (a = o.v = Math.round(a) || (ui && ui.iOS ? 1 : 0)),
          n(a),
          (o.cacheID = De.cache),
          d && ud("ss", a);
      } else
        (r || De.cache !== o.cacheID || ud("ref")) &&
          ((o.cacheID = De.cache), (o.v = n()));
      return o.v + o.offset;
    };
    return (s.offset = 0), n && s;
  },
  wn = {
    s: Ya,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: wu(function (u) {
      return arguments.length
        ? Kn.scrollTo(u, Rt.sc())
        : Kn.pageXOffset || Fi[Ya] || $i[Ya] || ho[Ya] || 0;
    }),
  },
  Rt = {
    s: Wa,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: wn,
    sc: wu(function (u) {
      return arguments.length
        ? Kn.scrollTo(wn.sc(), u)
        : Kn.pageYOffset || Fi[Wa] || $i[Wa] || ho[Wa] || 0;
    }),
  },
  Rn = function (n, r) {
    return (
      ((r && r._ctx && r._ctx.selector) || qt.utils.toArray)(n)[0] ||
      (typeof n == "string" && qt.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", n)
        : null)
    );
  },
  s_ = function (n, r) {
    for (var s = r.length; s--; ) if (r[s] === n || r[s].contains(n)) return !0;
    return !1;
  },
  Wi = function (n, r) {
    var s = r.s,
      o = r.sc;
    wl(n) && (n = Fi.scrollingElement || $i);
    var a = De.indexOf(n),
      d = o === Rt.sc ? 1 : 2;
    !~a && (a = De.push(n) - 1), De[a + d] || gn(n, "scroll", cd);
    var f = De[a + d],
      h =
        f ||
        (De[a + d] =
          wu(Hi(n, s), !0) ||
          (wl(n)
            ? o
            : wu(function (g) {
                return arguments.length ? (n[s] = g) : n[s];
              })));
    return (
      (h.target = n),
      f || (h.smooth = qt.getProperty(n, "scrollBehavior") === "smooth"),
      h
    );
  },
  fd = function (n, r, s) {
    var o = n,
      a = n,
      d = _l(),
      f = d,
      h = r || 50,
      g = Math.max(500, h * 3),
      x = function (N, w) {
        var P = _l();
        w || P - d > h
          ? ((a = o), (o = N), (f = d), (d = P))
          : s
          ? (o += N)
          : (o = a + ((N - a) / (P - f)) * (d - f));
      },
      _ = function () {
        (a = o = s ? 0 : o), (f = d = 0);
      },
      S = function (N) {
        var w = f,
          P = a,
          I = _l();
        return (
          (N || N === 0) && N !== o && x(N),
          d === f || I - f > g
            ? 0
            : ((o + (s ? P : -P)) / ((s ? I : d) - w)) * 1e3
        );
      };
    return { update: x, reset: _, getVelocity: S };
  },
  ll = function (n, r) {
    return (
      r && !n._gsapAllow && n.preventDefault(),
      n.changedTouches ? n.changedTouches[0] : n
    );
  },
  a0 = function (n) {
    var r = Math.max.apply(Math, n),
      s = Math.min.apply(Math, n);
    return Math.abs(r) >= Math.abs(s) ? r : s;
  },
  G1 = function () {
    (yl = qt.core.globals().ScrollTrigger), yl && yl.core && i_();
  },
  Q1 = function (n) {
    return (
      (qt = n || q1()),
      !lu &&
        qt &&
        typeof document < "u" &&
        document.body &&
        ((Kn = window),
        (Fi = document),
        ($i = Fi.documentElement),
        (ho = Fi.body),
        (Y1 = [Kn, Fi, $i, ho]),
        qt.utils.clamp,
        (W1 = qt.core.context || function () {}),
        (ds = "onpointerenter" in ho ? "pointer" : "mouse"),
        (V1 = _t.isTouch =
          Kn.matchMedia &&
          Kn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Kn ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Rr = _t.eventTypes =
          (
            "ontouchstart" in $i
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in $i
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (X1 = 0);
        }, 500),
        G1(),
        (lu = 1)),
      lu
    );
  };
wn.op = Rt;
De.cache = 0;
var _t = (function () {
  function u(r) {
    this.init(r);
  }
  var n = u.prototype;
  return (
    (n.init = function (s) {
      lu || Q1(qt) || console.warn("Please gsap.registerPlugin(Observer)"),
        yl || G1();
      var o = s.tolerance,
        a = s.dragMinimum,
        d = s.type,
        f = s.target,
        h = s.lineHeight,
        g = s.debounce,
        x = s.preventDefault,
        _ = s.onStop,
        S = s.onStopDelay,
        y = s.ignore,
        N = s.wheelSpeed,
        w = s.event,
        P = s.onDragStart,
        I = s.onDragEnd,
        A = s.onDrag,
        $ = s.onPress,
        O = s.onRelease,
        L = s.onRight,
        U = s.onLeft,
        z = s.onUp,
        W = s.onDown,
        B = s.onChangeX,
        q = s.onChangeY,
        fe = s.onChange,
        Q = s.onToggleX,
        he = s.onToggleY,
        ge = s.onHover,
        Se = s.onHoverEnd,
        de = s.onMove,
        ee = s.ignoreCheck,
        H = s.isNormalizer,
        Z = s.onGestureStart,
        C = s.onGestureEnd,
        j = s.onWheel,
        F = s.onEnable,
        pe = s.onDisable,
        se = s.onClick,
        me = s.scrollSpeed,
        ve = s.capture,
        _e = s.allowClicks,
        Ce = s.lockAxis,
        Te = s.onLockAxis;
      (this.target = f = Rn(f) || $i),
        (this.vars = s),
        y && (y = qt.utils.toArray(y)),
        (o = o || 1e-9),
        (a = a || 0),
        (N = N || 1),
        (me = me || 1),
        (d = d || "wheel,touch,pointer"),
        (g = g !== !1),
        h || (h = parseFloat(Kn.getComputedStyle(ho).lineHeight) || 22);
      var dt,
        wt,
        Ht,
        Me,
        Je,
        Vt,
        Gt,
        D = this,
        Qt = 0,
        Ln = 0,
        kn = s.passive || (!x && s.passive !== !1),
        Ve = Wi(f, wn),
        Fn = Wi(f, Rt),
        _r = Ve(),
        Dr = Fn(),
        gt =
          ~d.indexOf("touch") &&
          !~d.indexOf("pointer") &&
          Rr[0] === "pointerdown",
        wr = wl(f),
        et = f.ownerDocument || Fi,
        Kt = [0, 0, 0],
        un = [0, 0, 0],
        cn = 0,
        kr = function () {
          return (cn = _l());
        },
        pt = function (ae, ze) {
          return (
            ((D.event = ae) && y && s_(ae.target, y)) ||
            (ze && gt && ae.pointerType !== "touch") ||
            (ee && ee(ae, ze))
          );
        },
        Xi = function () {
          D._vx.reset(), D._vy.reset(), wt.pause(), _ && _(D);
        },
        rr = function () {
          var ae = (D.deltaX = a0(Kt)),
            ze = (D.deltaY = a0(un)),
            K = Math.abs(ae) >= o,
            xe = Math.abs(ze) >= o;
          fe && (K || xe) && fe(D, ae, ze, Kt, un),
            K &&
              (L && D.deltaX > 0 && L(D),
              U && D.deltaX < 0 && U(D),
              B && B(D),
              Q && D.deltaX < 0 != Qt < 0 && Q(D),
              (Qt = D.deltaX),
              (Kt[0] = Kt[1] = Kt[2] = 0)),
            xe &&
              (W && D.deltaY > 0 && W(D),
              z && D.deltaY < 0 && z(D),
              q && q(D),
              he && D.deltaY < 0 != Ln < 0 && he(D),
              (Ln = D.deltaY),
              (un[0] = un[1] = un[2] = 0)),
            (Me || Ht) &&
              (de && de(D),
              Ht && (P && Ht === 1 && P(D), A && A(D), (Ht = 0)),
              (Me = !1)),
            Vt && !(Vt = !1) && Te && Te(D),
            Je && (j(D), (Je = !1)),
            (dt = 0);
        },
        pi = function (ae, ze, K) {
          (Kt[K] += ae),
            (un[K] += ze),
            D._vx.update(ae),
            D._vy.update(ze),
            g ? dt || (dt = requestAnimationFrame(rr)) : rr();
        },
        zr = function (ae, ze) {
          Ce &&
            !Gt &&
            ((D.axis = Gt = Math.abs(ae) > Math.abs(ze) ? "x" : "y"),
            (Vt = !0)),
            Gt !== "y" && ((Kt[2] += ae), D._vx.update(ae, !0)),
            Gt !== "x" && ((un[2] += ze), D._vy.update(ze, !0)),
            g ? dt || (dt = requestAnimationFrame(rr)) : rr();
        },
        ir = function (ae) {
          if (!pt(ae, 1)) {
            ae = ll(ae, x);
            var ze = ae.clientX,
              K = ae.clientY,
              xe = ze - D.x,
              le = K - D.y,
              ye = D.isDragging;
            (D.x = ze),
              (D.y = K),
              (ye ||
                ((xe || le) &&
                  (Math.abs(D.startX - ze) >= a ||
                    Math.abs(D.startY - K) >= a))) &&
                ((Ht = ye ? 2 : 1), ye || (D.isDragging = !0), zr(xe, le));
          }
        },
        Sr = (D.onPress = function (ke) {
          pt(ke, 1) ||
            (ke && ke.button) ||
            ((D.axis = Gt = null),
            wt.pause(),
            (D.isPressed = !0),
            (ke = ll(ke)),
            (Qt = Ln = 0),
            (D.startX = D.x = ke.clientX),
            (D.startY = D.y = ke.clientY),
            D._vx.reset(),
            D._vy.reset(),
            gn(H ? f : et, Rr[1], ir, kn, !0),
            (D.deltaX = D.deltaY = 0),
            $ && $(D));
        }),
        Ne = (D.onRelease = function (ke) {
          if (!pt(ke, 1)) {
            mn(H ? f : et, Rr[1], ir, !0);
            var ae = !isNaN(D.y - D.startY),
              ze = D.isDragging,
              K =
                ze &&
                (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3),
              xe = ll(ke);
            !K &&
              ae &&
              (D._vx.reset(),
              D._vy.reset(),
              x &&
                _e &&
                qt.delayedCall(0.08, function () {
                  if (_l() - cn > 300 && !ke.defaultPrevented) {
                    if (ke.target.click) ke.target.click();
                    else if (et.createEvent) {
                      var le = et.createEvent("MouseEvents");
                      le.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Kn,
                        1,
                        xe.screenX,
                        xe.screenY,
                        xe.clientX,
                        xe.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        ke.target.dispatchEvent(le);
                    }
                  }
                })),
              (D.isDragging = D.isGesturing = D.isPressed = !1),
              _ && ze && !H && wt.restart(!0),
              Ht && rr(),
              I && ze && I(D),
              O && O(D, K);
          }
        }),
        Cr = function (ae) {
          return (
            ae.touches &&
            ae.touches.length > 1 &&
            (D.isGesturing = !0) &&
            Z(ae, D.isDragging)
          );
        },
        Ot = function () {
          return (D.isGesturing = !1) || C(D);
        },
        Dt = function (ae) {
          if (!pt(ae)) {
            var ze = Ve(),
              K = Fn();
            pi((ze - _r) * me, (K - Dr) * me, 1),
              (_r = ze),
              (Dr = K),
              _ && wt.restart(!0);
          }
        },
        Sn = function (ae) {
          if (!pt(ae)) {
            (ae = ll(ae, x)), j && (Je = !0);
            var ze =
              (ae.deltaMode === 1
                ? h
                : ae.deltaMode === 2
                ? Kn.innerHeight
                : 1) * N;
            pi(ae.deltaX * ze, ae.deltaY * ze, 0), _ && !H && wt.restart(!0);
          }
        },
        Ar = function (ae) {
          if (!pt(ae)) {
            var ze = ae.clientX,
              K = ae.clientY,
              xe = ze - D.x,
              le = K - D.y;
            (D.x = ze),
              (D.y = K),
              (Me = !0),
              _ && wt.restart(!0),
              (xe || le) && zr(xe, le);
          }
        },
        Qr = function (ae) {
          (D.event = ae), ge(D);
        },
        sr = function (ae) {
          (D.event = ae), Se(D);
        },
        hi = function (ae) {
          return pt(ae) || (ll(ae, x) && se(D));
        };
      (wt = D._dc = qt.delayedCall(S || 0.25, Xi).pause()),
        (D.deltaX = D.deltaY = 0),
        (D._vx = fd(0, 50, !0)),
        (D._vy = fd(0, 50, !0)),
        (D.scrollX = Ve),
        (D.scrollY = Fn),
        (D.isDragging = D.isGesturing = D.isPressed = !1),
        W1(this),
        (D.enable = function (ke) {
          return (
            D.isEnabled ||
              (gn(wr ? et : f, "scroll", cd),
              d.indexOf("scroll") >= 0 && gn(wr ? et : f, "scroll", Dt, kn, ve),
              d.indexOf("wheel") >= 0 && gn(f, "wheel", Sn, kn, ve),
              ((d.indexOf("touch") >= 0 && V1) || d.indexOf("pointer") >= 0) &&
                (gn(f, Rr[0], Sr, kn, ve),
                gn(et, Rr[2], Ne),
                gn(et, Rr[3], Ne),
                _e && gn(f, "click", kr, !0, !0),
                se && gn(f, "click", hi),
                Z && gn(et, "gesturestart", Cr),
                C && gn(et, "gestureend", Ot),
                ge && gn(f, ds + "enter", Qr),
                Se && gn(f, ds + "leave", sr),
                de && gn(f, ds + "move", Ar)),
              (D.isEnabled = !0),
              (D.isDragging = D.isGesturing = D.isPressed = Me = Ht = !1),
              D._vx.reset(),
              D._vy.reset(),
              (_r = Ve()),
              (Dr = Fn()),
              ke && ke.type && Sr(ke),
              F && F(D)),
            D
          );
        }),
        (D.disable = function () {
          D.isEnabled &&
            (lo.filter(function (ke) {
              return ke !== D && wl(ke.target);
            }).length || mn(wr ? et : f, "scroll", cd),
            D.isPressed &&
              (D._vx.reset(), D._vy.reset(), mn(H ? f : et, Rr[1], ir, !0)),
            mn(wr ? et : f, "scroll", Dt, ve),
            mn(f, "wheel", Sn, ve),
            mn(f, Rr[0], Sr, ve),
            mn(et, Rr[2], Ne),
            mn(et, Rr[3], Ne),
            mn(f, "click", kr, !0),
            mn(f, "click", hi),
            mn(et, "gesturestart", Cr),
            mn(et, "gestureend", Ot),
            mn(f, ds + "enter", Qr),
            mn(f, ds + "leave", sr),
            mn(f, ds + "move", Ar),
            (D.isEnabled = D.isPressed = D.isDragging = !1),
            pe && pe(D));
        }),
        (D.kill = D.revert =
          function () {
            D.disable();
            var ke = lo.indexOf(D);
            ke >= 0 && lo.splice(ke, 1), ui === D && (ui = 0);
          }),
        lo.push(D),
        H && wl(f) && (ui = D),
        D.enable(w);
    }),
    r_(u, [
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
    u
  );
})();
_t.version = "3.13.0";
_t.create = function (u) {
  return new _t(u);
};
_t.register = Q1;
_t.getAll = function () {
  return lo.slice();
};
_t.getById = function (u) {
  return lo.filter(function (n) {
    return n.vars.id === u;
  })[0];
};
q1() && qt.registerPlugin(_t);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var ne,
  ro,
  Oe,
  Ze,
  Gn,
  Be,
  Ud,
  ku,
  zl,
  kl,
  fl,
  qa,
  nn,
  Ou,
  dd,
  xn,
  u0,
  c0,
  io,
  K1,
  If,
  Z1,
  vn,
  pd,
  J1,
  eg,
  Di,
  hd,
  Bd,
  mo,
  Hd,
  Su,
  md,
  Lf,
  Xa = 1,
  rn = Date.now,
  Ff = rn(),
  yr = 0,
  dl = 0,
  f0 = function (n, r, s) {
    var o = qn(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
    return (s["_" + r + "Clamp"] = o), o ? n.substr(6, n.length - 7) : n;
  },
  d0 = function (n, r) {
    return r && (!qn(n) || n.substr(0, 6) !== "clamp(")
      ? "clamp(" + n + ")"
      : n;
  },
  o_ = function u() {
    return dl && requestAnimationFrame(u);
  },
  p0 = function () {
    return (Ou = 1);
  },
  h0 = function () {
    return (Ou = 0);
  },
  Vr = function (n) {
    return n;
  },
  pl = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  tg = function () {
    return typeof window < "u";
  },
  ng = function () {
    return ne || (tg() && (ne = window.gsap) && ne.registerPlugin && ne);
  },
  Ts = function (n) {
    return !!~Ud.indexOf(n);
  },
  rg = function (n) {
    return (
      (n === "Height" ? Hd : Oe["inner" + n]) ||
      Gn["client" + n] ||
      Be["client" + n]
    );
  },
  ig = function (n) {
    return (
      Hi(n, "getBoundingClientRect") ||
      (Ts(n)
        ? function () {
            return (du.width = Oe.innerWidth), (du.height = Hd), du;
          }
        : function () {
            return ai(n);
          })
    );
  },
  l_ = function (n, r, s) {
    var o = s.d,
      a = s.d2,
      d = s.a;
    return (d = Hi(n, "getBoundingClientRect"))
      ? function () {
          return d()[o];
        }
      : function () {
          return (r ? rg(a) : n["client" + a]) || 0;
        };
  },
  a_ = function (n, r) {
    return !r || ~Xr.indexOf(n)
      ? ig(n)
      : function () {
          return du;
        };
  },
  qr = function (n, r) {
    var s = r.s,
      o = r.d2,
      a = r.d,
      d = r.a;
    return Math.max(
      0,
      (s = "scroll" + o) && (d = Hi(n, s))
        ? d() - ig(n)()[a]
        : Ts(n)
        ? (Gn[s] || Be[s]) - rg(o)
        : n[s] - n["offset" + o]
    );
  },
  Ga = function (n, r) {
    for (var s = 0; s < io.length; s += 3)
      (!r || ~r.indexOf(io[s + 1])) && n(io[s], io[s + 1], io[s + 2]);
  },
  qn = function (n) {
    return typeof n == "string";
  },
  on = function (n) {
    return typeof n == "function";
  },
  hl = function (n) {
    return typeof n == "number";
  },
  ps = function (n) {
    return typeof n == "object";
  },
  al = function (n, r, s) {
    return n && n.progress(r ? 0 : 1) && s && n.pause();
  },
  $f = function (n, r) {
    if (n.enabled) {
      var s = n._ctx
        ? n._ctx.add(function () {
            return r(n);
          })
        : r(n);
      s && s.totalTime && (n.callbackAnimation = s);
    }
  },
  to = Math.abs,
  sg = "left",
  og = "top",
  Vd = "right",
  Yd = "bottom",
  ws = "width",
  ks = "height",
  Sl = "Right",
  Cl = "Left",
  Tl = "Top",
  Nl = "Bottom",
  Tt = "padding",
  hr = "margin",
  So = "Width",
  Wd = "Height",
  bt = "px",
  mr = function (n) {
    return Oe.getComputedStyle(n);
  },
  u_ = function (n) {
    var r = mr(n).position;
    n.style.position = r === "absolute" || r === "fixed" ? r : "relative";
  },
  m0 = function (n, r) {
    for (var s in r) s in n || (n[s] = r[s]);
    return n;
  },
  ai = function (n, r) {
    var s =
        r &&
        mr(n)[dd] !== "matrix(1, 0, 0, 1, 0, 0)" &&
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
      o = n.getBoundingClientRect();
    return s && s.progress(0).kill(), o;
  },
  Cu = function (n, r) {
    var s = r.d2;
    return n["offset" + s] || n["client" + s] || 0;
  },
  lg = function (n) {
    var r = [],
      s = n.labels,
      o = n.duration(),
      a;
    for (a in s) r.push(s[a] / o);
    return r;
  },
  c_ = function (n) {
    return function (r) {
      return ne.utils.snap(lg(n), r);
    };
  },
  qd = function (n) {
    var r = ne.utils.snap(n),
      s =
        Array.isArray(n) &&
        n.slice(0).sort(function (o, a) {
          return o - a;
        });
    return s
      ? function (o, a, d) {
          d === void 0 && (d = 0.001);
          var f;
          if (!a) return r(o);
          if (a > 0) {
            for (o -= d, f = 0; f < s.length; f++) if (s[f] >= o) return s[f];
            return s[f - 1];
          } else for (f = s.length, o += d; f--; ) if (s[f] <= o) return s[f];
          return s[0];
        }
      : function (o, a, d) {
          d === void 0 && (d = 0.001);
          var f = r(o);
          return !a || Math.abs(f - o) < d || f - o < 0 == a < 0
            ? f
            : r(a < 0 ? o - n : o + n);
        };
  },
  f_ = function (n) {
    return function (r, s) {
      return qd(lg(n))(r, s.direction);
    };
  },
  Qa = function (n, r, s, o) {
    return s.split(",").forEach(function (a) {
      return n(r, a, o);
    });
  },
  $t = function (n, r, s, o, a) {
    return n.addEventListener(r, s, { passive: !o, capture: !!a });
  },
  Ft = function (n, r, s, o) {
    return n.removeEventListener(r, s, !!o);
  },
  Ka = function (n, r, s) {
    (s = s && s.wheelHandler), s && (n(r, "wheel", s), n(r, "touchmove", s));
  },
  g0 = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  Za = { toggleActions: "play", anticipatePin: 0 },
  Tu = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  au = function (n, r) {
    if (qn(n)) {
      var s = n.indexOf("="),
        o = ~s ? +(n.charAt(s - 1) + 1) * parseFloat(n.substr(s + 1)) : 0;
      ~s && (n.indexOf("%") > s && (o *= r / 100), (n = n.substr(0, s - 1))),
        (n =
          o +
          (n in Tu
            ? Tu[n] * r
            : ~n.indexOf("%")
            ? (parseFloat(n) * r) / 100
            : parseFloat(n) || 0));
    }
    return n;
  },
  Ja = function (n, r, s, o, a, d, f, h) {
    var g = a.startColor,
      x = a.endColor,
      _ = a.fontSize,
      S = a.indent,
      y = a.fontWeight,
      N = Ze.createElement("div"),
      w = Ts(s) || Hi(s, "pinType") === "fixed",
      P = n.indexOf("scroller") !== -1,
      I = w ? Be : s,
      A = n.indexOf("start") !== -1,
      $ = A ? g : x,
      O =
        "border-color:" +
        $ +
        ";font-size:" +
        _ +
        ";color:" +
        $ +
        ";font-weight:" +
        y +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (O += "position:" + ((P || h) && w ? "fixed;" : "absolute;")),
      (P || h || !w) &&
        (O += (o === Rt ? Vd : Yd) + ":" + (d + parseFloat(S)) + "px;"),
      f &&
        (O +=
          "box-sizing:border-box;text-align:left;width:" +
          f.offsetWidth +
          "px;"),
      (N._isStart = A),
      N.setAttribute("class", "gsap-marker-" + n + (r ? " marker-" + r : "")),
      (N.style.cssText = O),
      (N.innerText = r || r === 0 ? n + "-" + r : n),
      I.children[0] ? I.insertBefore(N, I.children[0]) : I.appendChild(N),
      (N._offset = N["offset" + o.op.d2]),
      uu(N, 0, o, A),
      N
    );
  },
  uu = function (n, r, s, o) {
    var a = { display: "block" },
      d = s[o ? "os2" : "p2"],
      f = s[o ? "p2" : "os2"];
    (n._isFlipped = o),
      (a[s.a + "Percent"] = o ? -100 : 0),
      (a[s.a] = o ? "1px" : 0),
      (a["border" + d + So] = 1),
      (a["border" + f + So] = 0),
      (a[s.p] = r + "px"),
      ne.set(n, a);
  },
  Pe = [],
  gd = {},
  Al,
  v0 = function () {
    return rn() - yr > 34 && (Al || (Al = requestAnimationFrame(ci)));
  },
  no = function () {
    (!vn || !vn.isPressed || vn.startX > Be.clientWidth) &&
      (De.cache++,
      vn ? Al || (Al = requestAnimationFrame(ci)) : ci(),
      yr || js("scrollStart"),
      (yr = rn()));
  },
  Uf = function () {
    (eg = Oe.innerWidth), (J1 = Oe.innerHeight);
  },
  ml = function (n) {
    De.cache++,
      (n === !0 ||
        (!nn &&
          !Z1 &&
          !Ze.fullscreenElement &&
          !Ze.webkitFullscreenElement &&
          (!pd ||
            eg !== Oe.innerWidth ||
            Math.abs(Oe.innerHeight - J1) > Oe.innerHeight * 0.25))) &&
        ku.restart(!0);
  },
  Ns = {},
  d_ = [],
  ag = function u() {
    return Ft(je, "scrollEnd", u) || ms(!0);
  },
  js = function (n) {
    return (
      (Ns[n] &&
        Ns[n].map(function (r) {
          return r();
        })) ||
      d_
    );
  },
  Wn = [],
  ug = function (n) {
    for (var r = 0; r < Wn.length; r += 5)
      (!n || (Wn[r + 4] && Wn[r + 4].query === n)) &&
        ((Wn[r].style.cssText = Wn[r + 1]),
        Wn[r].getBBox && Wn[r].setAttribute("transform", Wn[r + 2] || ""),
        (Wn[r + 3].uncache = 1));
  },
  Xd = function (n, r) {
    var s;
    for (xn = 0; xn < Pe.length; xn++)
      (s = Pe[xn]),
        s && (!r || s._ctx === r) && (n ? s.kill(1) : s.revert(!0, !0));
    (Su = !0), r && ug(r), r || js("revert");
  },
  cg = function (n, r) {
    De.cache++,
      (r || !yn) &&
        De.forEach(function (s) {
          return on(s) && s.cacheID++ && (s.rec = 0);
        }),
      qn(n) && (Oe.history.scrollRestoration = Bd = n);
  },
  yn,
  Ss = 0,
  x0,
  p_ = function () {
    if (x0 !== Ss) {
      var n = (x0 = Ss);
      requestAnimationFrame(function () {
        return n === Ss && ms(!0);
      });
    }
  },
  fg = function () {
    Be.appendChild(mo),
      (Hd = (!vn && mo.offsetHeight) || Oe.innerHeight),
      Be.removeChild(mo);
  },
  y0 = function (n) {
    return zl(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (r) {
      return (r.style.display = n ? "none" : "block");
    });
  },
  ms = function (n, r) {
    if (
      ((Gn = Ze.documentElement),
      (Be = Ze.body),
      (Ud = [Oe, Ze, Gn, Be]),
      yr && !n && !Su)
    ) {
      $t(je, "scrollEnd", ag);
      return;
    }
    fg(),
      (yn = je.isRefreshing = !0),
      De.forEach(function (o) {
        return on(o) && ++o.cacheID && (o.rec = o());
      });
    var s = js("refreshInit");
    K1 && je.sort(),
      r || Xd(),
      De.forEach(function (o) {
        on(o) && (o.smooth && (o.target.style.scrollBehavior = "auto"), o(0));
      }),
      Pe.slice(0).forEach(function (o) {
        return o.refresh();
      }),
      (Su = !1),
      Pe.forEach(function (o) {
        if (o._subPinOffset && o.pin) {
          var a = o.vars.horizontal ? "offsetWidth" : "offsetHeight",
            d = o.pin[a];
          o.revert(!0, 1), o.adjustPinSpacing(o.pin[a] - d), o.refresh();
        }
      }),
      (md = 1),
      y0(!0),
      Pe.forEach(function (o) {
        var a = qr(o.scroller, o._dir),
          d = o.vars.end === "max" || (o._endClamp && o.end > a),
          f = o._startClamp && o.start >= a;
        (d || f) &&
          o.setPositions(
            f ? a - 1 : o.start,
            d ? Math.max(f ? a : o.start + 1, a) : o.end,
            !0
          );
      }),
      y0(!1),
      (md = 0),
      s.forEach(function (o) {
        return o && o.render && o.render(-1);
      }),
      De.forEach(function (o) {
        on(o) &&
          (o.smooth &&
            requestAnimationFrame(function () {
              return (o.target.style.scrollBehavior = "smooth");
            }),
          o.rec && o(o.rec));
      }),
      cg(Bd, 1),
      ku.pause(),
      Ss++,
      (yn = 2),
      ci(2),
      Pe.forEach(function (o) {
        return on(o.vars.onRefresh) && o.vars.onRefresh(o);
      }),
      (yn = je.isRefreshing = !1),
      js("refresh");
  },
  vd = 0,
  cu = 1,
  jl,
  ci = function (n) {
    if (n === 2 || (!yn && !Su)) {
      (je.isUpdating = !0), jl && jl.update(0);
      var r = Pe.length,
        s = rn(),
        o = s - Ff >= 50,
        a = r && Pe[0].scroll();
      if (
        ((cu = vd > a ? -1 : 1),
        yn || (vd = a),
        o &&
          (yr && !Ou && s - yr > 200 && ((yr = 0), js("scrollEnd")),
          (fl = Ff),
          (Ff = s)),
        cu < 0)
      ) {
        for (xn = r; xn-- > 0; ) Pe[xn] && Pe[xn].update(0, o);
        cu = 1;
      } else for (xn = 0; xn < r; xn++) Pe[xn] && Pe[xn].update(0, o);
      je.isUpdating = !1;
    }
    Al = 0;
  },
  xd = [
    sg,
    og,
    Yd,
    Vd,
    hr + Nl,
    hr + Sl,
    hr + Tl,
    hr + Cl,
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
  fu = xd.concat([
    ws,
    ks,
    "boxSizing",
    "max" + So,
    "max" + Wd,
    "position",
    hr,
    Tt,
    Tt + Tl,
    Tt + Sl,
    Tt + Nl,
    Tt + Cl,
  ]),
  h_ = function (n, r, s) {
    go(s);
    var o = n._gsap;
    if (o.spacerIsNative) go(o.spacerState);
    else if (n._gsap.swappedIn) {
      var a = r.parentNode;
      a && (a.insertBefore(n, r), a.removeChild(r));
    }
    n._gsap.swappedIn = !1;
  },
  Bf = function (n, r, s, o) {
    if (!n._gsap.swappedIn) {
      for (var a = xd.length, d = r.style, f = n.style, h; a--; )
        (h = xd[a]), (d[h] = s[h]);
      (d.position = s.position === "absolute" ? "absolute" : "relative"),
        s.display === "inline" && (d.display = "inline-block"),
        (f[Yd] = f[Vd] = "auto"),
        (d.flexBasis = s.flexBasis || "auto"),
        (d.overflow = "visible"),
        (d.boxSizing = "border-box"),
        (d[ws] = Cu(n, wn) + bt),
        (d[ks] = Cu(n, Rt) + bt),
        (d[Tt] = f[hr] = f[og] = f[sg] = "0"),
        go(o),
        (f[ws] = f["max" + So] = s[ws]),
        (f[ks] = f["max" + Wd] = s[ks]),
        (f[Tt] = s[Tt]),
        n.parentNode !== r &&
          (n.parentNode.insertBefore(r, n), r.appendChild(n)),
        (n._gsap.swappedIn = !0);
    }
  },
  m_ = /([A-Z])/g,
  go = function (n) {
    if (n) {
      var r = n.t.style,
        s = n.length,
        o = 0,
        a,
        d;
      for ((n.t._gsap || ne.core.getCache(n.t)).uncache = 1; o < s; o += 2)
        (d = n[o + 1]),
          (a = n[o]),
          d
            ? (r[a] = d)
            : r[a] && r.removeProperty(a.replace(m_, "-$1").toLowerCase());
    }
  },
  eu = function (n) {
    for (var r = fu.length, s = n.style, o = [], a = 0; a < r; a++)
      o.push(fu[a], s[fu[a]]);
    return (o.t = n), o;
  },
  g_ = function (n, r, s) {
    for (var o = [], a = n.length, d = s ? 8 : 0, f; d < a; d += 2)
      (f = n[d]), o.push(f, f in r ? r[f] : n[d + 1]);
    return (o.t = n.t), o;
  },
  du = { left: 0, top: 0 },
  _0 = function (n, r, s, o, a, d, f, h, g, x, _, S, y, N) {
    on(n) && (n = n(h)),
      qn(n) &&
        n.substr(0, 3) === "max" &&
        (n = S + (n.charAt(4) === "=" ? au("0" + n.substr(3), s) : 0));
    var w = y ? y.time() : 0,
      P,
      I,
      A;
    if ((y && y.seek(0), isNaN(n) || (n = +n), hl(n)))
      y &&
        (n = ne.utils.mapRange(
          y.scrollTrigger.start,
          y.scrollTrigger.end,
          0,
          S,
          n
        )),
        f && uu(f, s, o, !0);
    else {
      on(r) && (r = r(h));
      var $ = (n || "0").split(" "),
        O,
        L,
        U,
        z;
      (A = Rn(r, h) || Be),
        (O = ai(A) || {}),
        (!O || (!O.left && !O.top)) &&
          mr(A).display === "none" &&
          ((z = A.style.display),
          (A.style.display = "block"),
          (O = ai(A)),
          z ? (A.style.display = z) : A.style.removeProperty("display")),
        (L = au($[0], O[o.d])),
        (U = au($[1] || "0", s)),
        (n = O[o.p] - g[o.p] - x + L + a - U),
        f && uu(f, U, o, s - U < 20 || (f._isStart && U > 20)),
        (s -= s - U);
    }
    if ((N && ((h[N] = n || -0.001), n < 0 && (n = 0)), d)) {
      var W = n + s,
        B = d._isStart;
      (P = "scroll" + o.d2),
        uu(
          d,
          W,
          o,
          (B && W > 20) ||
            (!B && (_ ? Math.max(Be[P], Gn[P]) : d.parentNode[P]) <= W + 1)
        ),
        _ &&
          ((g = ai(f)),
          _ && (d.style[o.op.p] = g[o.op.p] - o.op.m - d._offset + bt));
    }
    return (
      y &&
        A &&
        ((P = ai(A)),
        y.seek(S),
        (I = ai(A)),
        (y._caScrollDist = P[o.p] - I[o.p]),
        (n = (n / y._caScrollDist) * S)),
      y && y.seek(w),
      y ? n : Math.round(n)
    );
  },
  v_ = /(webkit|moz|length|cssText|inset)/i,
  w0 = function (n, r, s, o) {
    if (n.parentNode !== r) {
      var a = n.style,
        d,
        f;
      if (r === Be) {
        (n._stOrig = a.cssText), (f = mr(n));
        for (d in f)
          !+d &&
            !v_.test(d) &&
            f[d] &&
            typeof a[d] == "string" &&
            d !== "0" &&
            (a[d] = f[d]);
        (a.top = s), (a.left = o);
      } else a.cssText = n._stOrig;
      (ne.core.getCache(n).uncache = 1), r.appendChild(n);
    }
  },
  dg = function (n, r, s) {
    var o = r,
      a = o;
    return function (d) {
      var f = Math.round(n());
      return (
        f !== o &&
          f !== a &&
          Math.abs(f - o) > 3 &&
          Math.abs(f - a) > 3 &&
          ((d = f), s && s()),
        (a = o),
        (o = Math.round(d)),
        o
      );
    };
  },
  tu = function (n, r, s) {
    var o = {};
    (o[r.p] = "+=" + s), ne.set(n, o);
  },
  k0 = function (n, r) {
    var s = Wi(n, r),
      o = "_scroll" + r.p2,
      a = function d(f, h, g, x, _) {
        var S = d.tween,
          y = h.onComplete,
          N = {};
        g = g || s();
        var w = dg(s, g, function () {
          S.kill(), (d.tween = 0);
        });
        return (
          (_ = (x && _) || 0),
          (x = x || f - g),
          S && S.kill(),
          (h[o] = f),
          (h.inherit = !1),
          (h.modifiers = N),
          (N[o] = function () {
            return w(g + x * S.ratio + _ * S.ratio * S.ratio);
          }),
          (h.onUpdate = function () {
            De.cache++, d.tween && ci();
          }),
          (h.onComplete = function () {
            (d.tween = 0), y && y.call(S);
          }),
          (S = d.tween = ne.to(n, h)),
          S
        );
      };
    return (
      (n[o] = s),
      (s.wheelHandler = function () {
        return a.tween && a.tween.kill() && (a.tween = 0);
      }),
      $t(n, "wheel", s.wheelHandler),
      je.isTouch && $t(n, "touchmove", s.wheelHandler),
      a
    );
  },
  je = (function () {
    function u(r, s) {
      ro ||
        u.register(ne) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        hd(this),
        this.init(r, s);
    }
    var n = u.prototype;
    return (
      (n.init = function (s, o) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !dl)
        ) {
          this.update = this.refresh = this.kill = Vr;
          return;
        }
        s = m0(qn(s) || hl(s) || s.nodeType ? { trigger: s } : s, Za);
        var a = s,
          d = a.onUpdate,
          f = a.toggleClass,
          h = a.id,
          g = a.onToggle,
          x = a.onRefresh,
          _ = a.scrub,
          S = a.trigger,
          y = a.pin,
          N = a.pinSpacing,
          w = a.invalidateOnRefresh,
          P = a.anticipatePin,
          I = a.onScrubComplete,
          A = a.onSnapComplete,
          $ = a.once,
          O = a.snap,
          L = a.pinReparent,
          U = a.pinSpacer,
          z = a.containerAnimation,
          W = a.fastScrollEnd,
          B = a.preventOverlaps,
          q =
            s.horizontal || (s.containerAnimation && s.horizontal !== !1)
              ? wn
              : Rt,
          fe = !_ && _ !== 0,
          Q = Rn(s.scroller || Oe),
          he = ne.core.getCache(Q),
          ge = Ts(Q),
          Se =
            ("pinType" in s
              ? s.pinType
              : Hi(Q, "pinType") || (ge && "fixed")) === "fixed",
          de = [s.onEnter, s.onLeave, s.onEnterBack, s.onLeaveBack],
          ee = fe && s.toggleActions.split(" "),
          H = "markers" in s ? s.markers : Za.markers,
          Z = ge ? 0 : parseFloat(mr(Q)["border" + q.p2 + So]) || 0,
          C = this,
          j =
            s.onRefreshInit &&
            function () {
              return s.onRefreshInit(C);
            },
          F = l_(Q, ge, q),
          pe = a_(Q, ge),
          se = 0,
          me = 0,
          ve = 0,
          _e = Wi(Q, q),
          Ce,
          Te,
          dt,
          wt,
          Ht,
          Me,
          Je,
          Vt,
          Gt,
          D,
          Qt,
          Ln,
          kn,
          Ve,
          Fn,
          _r,
          Dr,
          gt,
          wr,
          et,
          Kt,
          un,
          cn,
          kr,
          pt,
          Xi,
          rr,
          pi,
          zr,
          ir,
          Sr,
          Ne,
          Cr,
          Ot,
          Dt,
          Sn,
          Ar,
          Qr,
          sr;
        if (
          ((C._startClamp = C._endClamp = !1),
          (C._dir = q),
          (P *= 45),
          (C.scroller = Q),
          (C.scroll = z ? z.time.bind(z) : _e),
          (wt = _e()),
          (C.vars = s),
          (o = o || s.animation),
          "refreshPriority" in s &&
            ((K1 = 1), s.refreshPriority === -9999 && (jl = C)),
          (he.tweenScroll = he.tweenScroll || {
            top: k0(Q, Rt),
            left: k0(Q, wn),
          }),
          (C.tweenTo = Ce = he.tweenScroll[q.p]),
          (C.scrubDuration = function (K) {
            (Cr = hl(K) && K),
              Cr
                ? Ne
                  ? Ne.duration(K)
                  : (Ne = ne.to(o, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Cr,
                      paused: !0,
                      onComplete: function () {
                        return I && I(C);
                      },
                    }))
                : (Ne && Ne.progress(1).kill(), (Ne = 0));
          }),
          o &&
            ((o.vars.lazy = !1),
            (o._initted && !C.isReverted) ||
              (o.vars.immediateRender !== !1 &&
                s.immediateRender !== !1 &&
                o.duration() &&
                o.render(0, !0, !0)),
            (C.animation = o.pause()),
            (o.scrollTrigger = C),
            C.scrubDuration(_),
            (ir = 0),
            h || (h = o.vars.id)),
          O &&
            ((!ps(O) || O.push) && (O = { snapTo: O }),
            "scrollBehavior" in Be.style &&
              ne.set(ge ? [Be, Gn] : Q, { scrollBehavior: "auto" }),
            De.forEach(function (K) {
              return (
                on(K) &&
                K.target === (ge ? Ze.scrollingElement || Gn : Q) &&
                (K.smooth = !1)
              );
            }),
            (dt = on(O.snapTo)
              ? O.snapTo
              : O.snapTo === "labels"
              ? c_(o)
              : O.snapTo === "labelsDirectional"
              ? f_(o)
              : O.directional !== !1
              ? function (K, xe) {
                  return qd(O.snapTo)(K, rn() - me < 500 ? 0 : xe.direction);
                }
              : ne.utils.snap(O.snapTo)),
            (Ot = O.duration || { min: 0.1, max: 2 }),
            (Ot = ps(Ot) ? kl(Ot.min, Ot.max) : kl(Ot, Ot)),
            (Dt = ne
              .delayedCall(O.delay || Cr / 2 || 0.1, function () {
                var K = _e(),
                  xe = rn() - me < 500,
                  le = Ce.tween;
                if (
                  (xe || Math.abs(C.getVelocity()) < 10) &&
                  !le &&
                  !Ou &&
                  se !== K
                ) {
                  var ye = (K - Me) / Ve,
                    lt = o && !fe ? o.totalProgress() : ye,
                    Ee = xe ? 0 : ((lt - Sr) / (rn() - fl)) * 1e3 || 0,
                    tt = ne.utils.clamp(-ye, 1 - ye, (to(Ee / 2) * Ee) / 0.185),
                    zt = ye + (O.inertia === !1 ? 0 : tt),
                    it,
                    Ge,
                    Ae = O,
                    Cn = Ae.onStart,
                    Qe = Ae.onInterrupt,
                    fn = Ae.onComplete;
                  if (
                    ((it = dt(zt, C)),
                    hl(it) || (it = zt),
                    (Ge = Math.max(0, Math.round(Me + it * Ve))),
                    K <= Je && K >= Me && Ge !== K)
                  ) {
                    if (le && !le._initted && le.data <= to(Ge - K)) return;
                    O.inertia === !1 && (tt = it - ye),
                      Ce(
                        Ge,
                        {
                          duration: Ot(
                            to(
                              (Math.max(to(zt - lt), to(it - lt)) * 0.185) /
                                Ee /
                                0.05 || 0
                            )
                          ),
                          ease: O.ease || "power3",
                          data: to(Ge - K),
                          onInterrupt: function () {
                            return Dt.restart(!0) && Qe && Qe(C);
                          },
                          onComplete: function () {
                            C.update(),
                              (se = _e()),
                              o &&
                                !fe &&
                                (Ne
                                  ? Ne.resetTo(
                                      "totalProgress",
                                      it,
                                      o._tTime / o._tDur
                                    )
                                  : o.progress(it)),
                              (ir = Sr =
                                o && !fe ? o.totalProgress() : C.progress),
                              A && A(C),
                              fn && fn(C);
                          },
                        },
                        K,
                        tt * Ve,
                        Ge - K - tt * Ve
                      ),
                      Cn && Cn(C, Ce.tween);
                  }
                } else C.isActive && se !== K && Dt.restart(!0);
              })
              .pause())),
          h && (gd[h] = C),
          (S = C.trigger = Rn(S || (y !== !0 && y))),
          (sr = S && S._gsap && S._gsap.stRevert),
          sr && (sr = sr(C)),
          (y = y === !0 ? S : Rn(y)),
          qn(f) && (f = { targets: S, className: f }),
          y &&
            (N === !1 ||
              N === hr ||
              (N =
                !N &&
                y.parentNode &&
                y.parentNode.style &&
                mr(y.parentNode).display === "flex"
                  ? !1
                  : Tt),
            (C.pin = y),
            (Te = ne.core.getCache(y)),
            Te.spacer
              ? (Fn = Te.pinState)
              : (U &&
                  ((U = Rn(U)),
                  U && !U.nodeType && (U = U.current || U.nativeElement),
                  (Te.spacerIsNative = !!U),
                  U && (Te.spacerState = eu(U))),
                (Te.spacer = gt = U || Ze.createElement("div")),
                gt.classList.add("pin-spacer"),
                h && gt.classList.add("pin-spacer-" + h),
                (Te.pinState = Fn = eu(y))),
            s.force3D !== !1 && ne.set(y, { force3D: !0 }),
            (C.spacer = gt = Te.spacer),
            (zr = mr(y)),
            (kr = zr[N + q.os2]),
            (et = ne.getProperty(y)),
            (Kt = ne.quickSetter(y, q.a, bt)),
            Bf(y, gt, zr),
            (Dr = eu(y))),
          H)
        ) {
          (Ln = ps(H) ? m0(H, g0) : g0),
            (D = Ja("scroller-start", h, Q, q, Ln, 0)),
            (Qt = Ja("scroller-end", h, Q, q, Ln, 0, D)),
            (wr = D["offset" + q.op.d2]);
          var hi = Rn(Hi(Q, "content") || Q);
          (Vt = this.markerStart = Ja("start", h, hi, q, Ln, wr, 0, z)),
            (Gt = this.markerEnd = Ja("end", h, hi, q, Ln, wr, 0, z)),
            z && (Qr = ne.quickSetter([Vt, Gt], q.a, bt)),
            !Se &&
              !(Xr.length && Hi(Q, "fixedMarkers") === !0) &&
              (u_(ge ? Be : Q),
              ne.set([D, Qt], { force3D: !0 }),
              (Xi = ne.quickSetter(D, q.a, bt)),
              (pi = ne.quickSetter(Qt, q.a, bt)));
        }
        if (z) {
          var ke = z.vars.onUpdate,
            ae = z.vars.onUpdateParams;
          z.eventCallback("onUpdate", function () {
            C.update(0, 0, 1), ke && ke.apply(z, ae || []);
          });
        }
        if (
          ((C.previous = function () {
            return Pe[Pe.indexOf(C) - 1];
          }),
          (C.next = function () {
            return Pe[Pe.indexOf(C) + 1];
          }),
          (C.revert = function (K, xe) {
            if (!xe) return C.kill(!0);
            var le = K !== !1 || !C.enabled,
              ye = nn;
            le !== C.isReverted &&
              (le &&
                ((Sn = Math.max(_e(), C.scroll.rec || 0)),
                (ve = C.progress),
                (Ar = o && o.progress())),
              Vt &&
                [Vt, Gt, D, Qt].forEach(function (lt) {
                  return (lt.style.display = le ? "none" : "block");
                }),
              le && ((nn = C), C.update(le)),
              y &&
                (!L || !C.isActive) &&
                (le ? h_(y, gt, Fn) : Bf(y, gt, mr(y), pt)),
              le || C.update(le),
              (nn = ye),
              (C.isReverted = le));
          }),
          (C.refresh = function (K, xe, le, ye) {
            if (!((nn || !C.enabled) && !xe)) {
              if (y && K && yr) {
                $t(u, "scrollEnd", ag);
                return;
              }
              !yn && j && j(C),
                (nn = C),
                Ce.tween && !le && (Ce.tween.kill(), (Ce.tween = 0)),
                Ne && Ne.pause(),
                w &&
                  o &&
                  (o.revert({ kill: !1 }).invalidate(),
                  o.getChildren &&
                    o.getChildren(!0, !0, !1).forEach(function (Lr) {
                      return Lr.vars.immediateRender && Lr.render(0, !0, !0);
                    })),
                C.isReverted || C.revert(!0, !0),
                (C._subPinOffset = !1);
              var lt = F(),
                Ee = pe(),
                tt = z ? z.duration() : qr(Q, q),
                zt = Ve <= 0.01 || !Ve,
                it = 0,
                Ge = ye || 0,
                Ae = ps(le) ? le.end : s.end,
                Cn = s.endTrigger || S,
                Qe = ps(le)
                  ? le.start
                  : s.start || (s.start === 0 || !S ? 0 : y ? "0 0" : "0 100%"),
                fn = (C.pinnedContainer =
                  s.pinnedContainer && Rn(s.pinnedContainer, C)),
                $n = (S && Math.max(0, Pe.indexOf(C))) || 0,
                kt = $n,
                St,
                Et,
                Kr,
                Ps,
                be,
                vt,
                Tn,
                Ms,
                Gi,
                Qi,
                Un,
                Ir,
                dn;
              for (
                H &&
                ps(le) &&
                ((Ir = ne.getProperty(D, q.p)), (dn = ne.getProperty(Qt, q.p)));
                kt-- > 0;

              )
                (vt = Pe[kt]),
                  vt.end || vt.refresh(0, 1) || (nn = C),
                  (Tn = vt.pin),
                  Tn &&
                    (Tn === S || Tn === y || Tn === fn) &&
                    !vt.isReverted &&
                    (Qi || (Qi = []), Qi.unshift(vt), vt.revert(!0, !0)),
                  vt !== Pe[kt] && ($n--, kt--);
              for (
                on(Qe) && (Qe = Qe(C)),
                  Qe = f0(Qe, "start", C),
                  Me =
                    _0(
                      Qe,
                      S,
                      lt,
                      q,
                      _e(),
                      Vt,
                      D,
                      C,
                      Ee,
                      Z,
                      Se,
                      tt,
                      z,
                      C._startClamp && "_startClamp"
                    ) || (y ? -0.001 : 0),
                  on(Ae) && (Ae = Ae(C)),
                  qn(Ae) &&
                    !Ae.indexOf("+=") &&
                    (~Ae.indexOf(" ")
                      ? (Ae = (qn(Qe) ? Qe.split(" ")[0] : "") + Ae)
                      : ((it = au(Ae.substr(2), lt)),
                        (Ae = qn(Qe)
                          ? Qe
                          : (z
                              ? ne.utils.mapRange(
                                  0,
                                  z.duration(),
                                  z.scrollTrigger.start,
                                  z.scrollTrigger.end,
                                  Me
                                )
                              : Me) + it),
                        (Cn = S))),
                  Ae = f0(Ae, "end", C),
                  Je =
                    Math.max(
                      Me,
                      _0(
                        Ae || (Cn ? "100% 0" : tt),
                        Cn,
                        lt,
                        q,
                        _e() + it,
                        Gt,
                        Qt,
                        C,
                        Ee,
                        Z,
                        Se,
                        tt,
                        z,
                        C._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  it = 0,
                  kt = $n;
                kt--;

              )
                (vt = Pe[kt]),
                  (Tn = vt.pin),
                  Tn &&
                    vt.start - vt._pinPush <= Me &&
                    !z &&
                    vt.end > 0 &&
                    ((St =
                      vt.end -
                      (C._startClamp ? Math.max(0, vt.start) : vt.start)),
                    ((Tn === S && vt.start - vt._pinPush < Me) || Tn === fn) &&
                      isNaN(Qe) &&
                      (it += St * (1 - vt.progress)),
                    Tn === y && (Ge += St));
              if (
                ((Me += it),
                (Je += it),
                C._startClamp && (C._startClamp += it),
                C._endClamp &&
                  !yn &&
                  ((C._endClamp = Je || -0.001), (Je = Math.min(Je, qr(Q, q)))),
                (Ve = Je - Me || ((Me -= 0.01) && 0.001)),
                zt &&
                  (ve = ne.utils.clamp(0, 1, ne.utils.normalize(Me, Je, Sn))),
                (C._pinPush = Ge),
                Vt &&
                  it &&
                  ((St = {}),
                  (St[q.a] = "+=" + it),
                  fn && (St[q.p] = "-=" + _e()),
                  ne.set([Vt, Gt], St)),
                y && !(md && C.end >= qr(Q, q)))
              )
                (St = mr(y)),
                  (Ps = q === Rt),
                  (Kr = _e()),
                  (un = parseFloat(et(q.a)) + Ge),
                  !tt &&
                    Je > 1 &&
                    ((Un = (ge ? Ze.scrollingElement || Gn : Q).style),
                    (Un = {
                      style: Un,
                      value: Un["overflow" + q.a.toUpperCase()],
                    }),
                    ge &&
                      mr(Be)["overflow" + q.a.toUpperCase()] !== "scroll" &&
                      (Un.style["overflow" + q.a.toUpperCase()] = "scroll")),
                  Bf(y, gt, St),
                  (Dr = eu(y)),
                  (Et = ai(y, !0)),
                  (Ms = Se && Wi(Q, Ps ? wn : Rt)()),
                  N
                    ? ((pt = [N + q.os2, Ve + Ge + bt]),
                      (pt.t = gt),
                      (kt = N === Tt ? Cu(y, q) + Ve + Ge : 0),
                      kt &&
                        (pt.push(q.d, kt + bt),
                        gt.style.flexBasis !== "auto" &&
                          (gt.style.flexBasis = kt + bt)),
                      go(pt),
                      fn &&
                        Pe.forEach(function (Lr) {
                          Lr.pin === fn &&
                            Lr.vars.pinSpacing !== !1 &&
                            (Lr._subPinOffset = !0);
                        }),
                      Se && _e(Sn))
                    : ((kt = Cu(y, q)),
                      kt &&
                        gt.style.flexBasis !== "auto" &&
                        (gt.style.flexBasis = kt + bt)),
                  Se &&
                    ((be = {
                      top: Et.top + (Ps ? Kr - Me : Ms) + bt,
                      left: Et.left + (Ps ? Ms : Kr - Me) + bt,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (be[ws] = be["max" + So] = Math.ceil(Et.width) + bt),
                    (be[ks] = be["max" + Wd] = Math.ceil(Et.height) + bt),
                    (be[hr] =
                      be[hr + Tl] =
                      be[hr + Sl] =
                      be[hr + Nl] =
                      be[hr + Cl] =
                        "0"),
                    (be[Tt] = St[Tt]),
                    (be[Tt + Tl] = St[Tt + Tl]),
                    (be[Tt + Sl] = St[Tt + Sl]),
                    (be[Tt + Nl] = St[Tt + Nl]),
                    (be[Tt + Cl] = St[Tt + Cl]),
                    (_r = g_(Fn, be, L)),
                    yn && _e(0)),
                  o
                    ? ((Gi = o._initted),
                      If(1),
                      o.render(o.duration(), !0, !0),
                      (cn = et(q.a) - un + Ve + Ge),
                      (rr = Math.abs(Ve - cn) > 1),
                      Se && rr && _r.splice(_r.length - 2, 2),
                      o.render(0, !0, !0),
                      Gi || o.invalidate(!0),
                      o.parent || o.totalTime(o.totalTime()),
                      If(0))
                    : (cn = Ve),
                  Un &&
                    (Un.value
                      ? (Un.style["overflow" + q.a.toUpperCase()] = Un.value)
                      : Un.style.removeProperty("overflow-" + q.a));
              else if (S && _e() && !z)
                for (Et = S.parentNode; Et && Et !== Be; )
                  Et._pinOffset &&
                    ((Me -= Et._pinOffset), (Je -= Et._pinOffset)),
                    (Et = Et.parentNode);
              Qi &&
                Qi.forEach(function (Lr) {
                  return Lr.revert(!1, !0);
                }),
                (C.start = Me),
                (C.end = Je),
                (wt = Ht = yn ? Sn : _e()),
                !z && !yn && (wt < Sn && _e(Sn), (C.scroll.rec = 0)),
                C.revert(!1, !0),
                (me = rn()),
                Dt && ((se = -1), Dt.restart(!0)),
                (nn = 0),
                o &&
                  fe &&
                  (o._initted || Ar) &&
                  o.progress() !== Ar &&
                  o.progress(Ar || 0, !0).render(o.time(), !0, !0),
                (zt || ve !== C.progress || z || w || (o && !o._initted)) &&
                  (o &&
                    !fe &&
                    (o._initted || ve || o.vars.immediateRender !== !1) &&
                    o.totalProgress(
                      z && Me < -0.001 && !ve
                        ? ne.utils.normalize(Me, Je, 0)
                        : ve,
                      !0
                    ),
                  (C.progress = zt || (wt - Me) / Ve === ve ? 0 : ve)),
                y && N && (gt._pinOffset = Math.round(C.progress * cn)),
                Ne && Ne.invalidate(),
                isNaN(Ir) ||
                  ((Ir -= ne.getProperty(D, q.p)),
                  (dn -= ne.getProperty(Qt, q.p)),
                  tu(D, q, Ir),
                  tu(Vt, q, Ir - (ye || 0)),
                  tu(Qt, q, dn),
                  tu(Gt, q, dn - (ye || 0))),
                zt && !yn && C.update(),
                x && !yn && !kn && ((kn = !0), x(C), (kn = !1));
            }
          }),
          (C.getVelocity = function () {
            return ((_e() - Ht) / (rn() - fl)) * 1e3 || 0;
          }),
          (C.endAnimation = function () {
            al(C.callbackAnimation),
              o &&
                (Ne
                  ? Ne.progress(1)
                  : o.paused()
                  ? fe || al(o, C.direction < 0, 1)
                  : al(o, o.reversed()));
          }),
          (C.labelToScroll = function (K) {
            return (
              (o &&
                o.labels &&
                (Me || C.refresh() || Me) +
                  (o.labels[K] / o.duration()) * Ve) ||
              0
            );
          }),
          (C.getTrailing = function (K) {
            var xe = Pe.indexOf(C),
              le =
                C.direction > 0 ? Pe.slice(0, xe).reverse() : Pe.slice(xe + 1);
            return (
              qn(K)
                ? le.filter(function (ye) {
                    return ye.vars.preventOverlaps === K;
                  })
                : le
            ).filter(function (ye) {
              return C.direction > 0 ? ye.end <= Me : ye.start >= Je;
            });
          }),
          (C.update = function (K, xe, le) {
            if (!(z && !le && !K)) {
              var ye = yn === !0 ? Sn : C.scroll(),
                lt = K ? 0 : (ye - Me) / Ve,
                Ee = lt < 0 ? 0 : lt > 1 ? 1 : lt || 0,
                tt = C.progress,
                zt,
                it,
                Ge,
                Ae,
                Cn,
                Qe,
                fn,
                $n;
              if (
                (xe &&
                  ((Ht = wt),
                  (wt = z ? _e() : ye),
                  O && ((Sr = ir), (ir = o && !fe ? o.totalProgress() : Ee))),
                P &&
                  y &&
                  !nn &&
                  !Xa &&
                  yr &&
                  (!Ee && Me < ye + ((ye - Ht) / (rn() - fl)) * P
                    ? (Ee = 1e-4)
                    : Ee === 1 &&
                      Je > ye + ((ye - Ht) / (rn() - fl)) * P &&
                      (Ee = 0.9999)),
                Ee !== tt && C.enabled)
              ) {
                if (
                  ((zt = C.isActive = !!Ee && Ee < 1),
                  (it = !!tt && tt < 1),
                  (Qe = zt !== it),
                  (Cn = Qe || !!Ee != !!tt),
                  (C.direction = Ee > tt ? 1 : -1),
                  (C.progress = Ee),
                  Cn &&
                    !nn &&
                    ((Ge = Ee && !tt ? 0 : Ee === 1 ? 1 : tt === 1 ? 2 : 3),
                    fe &&
                      ((Ae =
                        (!Qe && ee[Ge + 1] !== "none" && ee[Ge + 1]) || ee[Ge]),
                      ($n =
                        o &&
                        (Ae === "complete" || Ae === "reset" || Ae in o)))),
                  B &&
                    (Qe || $n) &&
                    ($n || _ || !o) &&
                    (on(B)
                      ? B(C)
                      : C.getTrailing(B).forEach(function (Kr) {
                          return Kr.endAnimation();
                        })),
                  fe ||
                    (Ne && !nn && !Xa
                      ? (Ne._dp._time - Ne._start !== Ne._time &&
                          Ne.render(Ne._dp._time - Ne._start),
                        Ne.resetTo
                          ? Ne.resetTo("totalProgress", Ee, o._tTime / o._tDur)
                          : ((Ne.vars.totalProgress = Ee),
                            Ne.invalidate().restart()))
                      : o && o.totalProgress(Ee, !!(nn && (me || K)))),
                  y)
                ) {
                  if ((K && N && (gt.style[N + q.os2] = kr), !Se))
                    Kt(pl(un + cn * Ee));
                  else if (Cn) {
                    if (
                      ((fn =
                        !K && Ee > tt && Je + 1 > ye && ye + 1 >= qr(Q, q)),
                      L)
                    )
                      if (!K && (zt || fn)) {
                        var kt = ai(y, !0),
                          St = ye - Me;
                        w0(
                          y,
                          Be,
                          kt.top + (q === Rt ? St : 0) + bt,
                          kt.left + (q === Rt ? 0 : St) + bt
                        );
                      } else w0(y, gt);
                    go(zt || fn ? _r : Dr),
                      (rr && Ee < 1 && zt) ||
                        Kt(un + (Ee === 1 && !fn ? cn : 0));
                  }
                }
                O && !Ce.tween && !nn && !Xa && Dt.restart(!0),
                  f &&
                    (Qe || ($ && Ee && (Ee < 1 || !Lf))) &&
                    zl(f.targets).forEach(function (Kr) {
                      return Kr.classList[zt || $ ? "add" : "remove"](
                        f.className
                      );
                    }),
                  d && !fe && !K && d(C),
                  Cn && !nn
                    ? (fe &&
                        ($n &&
                          (Ae === "complete"
                            ? o.pause().totalProgress(1)
                            : Ae === "reset"
                            ? o.restart(!0).pause()
                            : Ae === "restart"
                            ? o.restart(!0)
                            : o[Ae]()),
                        d && d(C)),
                      (Qe || !Lf) &&
                        (g && Qe && $f(C, g),
                        de[Ge] && $f(C, de[Ge]),
                        $ && (Ee === 1 ? C.kill(!1, 1) : (de[Ge] = 0)),
                        Qe ||
                          ((Ge = Ee === 1 ? 1 : 3), de[Ge] && $f(C, de[Ge]))),
                      W &&
                        !zt &&
                        Math.abs(C.getVelocity()) > (hl(W) ? W : 2500) &&
                        (al(C.callbackAnimation),
                        Ne
                          ? Ne.progress(1)
                          : al(o, Ae === "reverse" ? 1 : !Ee, 1)))
                    : fe && d && !nn && d(C);
              }
              if (pi) {
                var Et = z ? (ye / z.duration()) * (z._caScrollDist || 0) : ye;
                Xi(Et + (D._isFlipped ? 1 : 0)), pi(Et);
              }
              Qr && Qr((-ye / z.duration()) * (z._caScrollDist || 0));
            }
          }),
          (C.enable = function (K, xe) {
            C.enabled ||
              ((C.enabled = !0),
              $t(Q, "resize", ml),
              ge || $t(Q, "scroll", no),
              j && $t(u, "refreshInit", j),
              K !== !1 && ((C.progress = ve = 0), (wt = Ht = se = _e())),
              xe !== !1 && C.refresh());
          }),
          (C.getTween = function (K) {
            return K && Ce ? Ce.tween : Ne;
          }),
          (C.setPositions = function (K, xe, le, ye) {
            if (z) {
              var lt = z.scrollTrigger,
                Ee = z.duration(),
                tt = lt.end - lt.start;
              (K = lt.start + (tt * K) / Ee), (xe = lt.start + (tt * xe) / Ee);
            }
            C.refresh(
              !1,
              !1,
              {
                start: d0(K, le && !!C._startClamp),
                end: d0(xe, le && !!C._endClamp),
              },
              ye
            ),
              C.update();
          }),
          (C.adjustPinSpacing = function (K) {
            if (pt && K) {
              var xe = pt.indexOf(q.d) + 1;
              (pt[xe] = parseFloat(pt[xe]) + K + bt),
                (pt[1] = parseFloat(pt[1]) + K + bt),
                go(pt);
            }
          }),
          (C.disable = function (K, xe) {
            if (
              C.enabled &&
              (K !== !1 && C.revert(!0, !0),
              (C.enabled = C.isActive = !1),
              xe || (Ne && Ne.pause()),
              (Sn = 0),
              Te && (Te.uncache = 1),
              j && Ft(u, "refreshInit", j),
              Dt && (Dt.pause(), Ce.tween && Ce.tween.kill() && (Ce.tween = 0)),
              !ge)
            ) {
              for (var le = Pe.length; le--; )
                if (Pe[le].scroller === Q && Pe[le] !== C) return;
              Ft(Q, "resize", ml), ge || Ft(Q, "scroll", no);
            }
          }),
          (C.kill = function (K, xe) {
            C.disable(K, xe), Ne && !xe && Ne.kill(), h && delete gd[h];
            var le = Pe.indexOf(C);
            le >= 0 && Pe.splice(le, 1),
              le === xn && cu > 0 && xn--,
              (le = 0),
              Pe.forEach(function (ye) {
                return ye.scroller === C.scroller && (le = 1);
              }),
              le || yn || (C.scroll.rec = 0),
              o &&
                ((o.scrollTrigger = null),
                K && o.revert({ kill: !1 }),
                xe || o.kill()),
              Vt &&
                [Vt, Gt, D, Qt].forEach(function (ye) {
                  return ye.parentNode && ye.parentNode.removeChild(ye);
                }),
              jl === C && (jl = 0),
              y &&
                (Te && (Te.uncache = 1),
                (le = 0),
                Pe.forEach(function (ye) {
                  return ye.pin === y && le++;
                }),
                le || (Te.spacer = 0)),
              s.onKill && s.onKill(C);
          }),
          Pe.push(C),
          C.enable(!1, !1),
          sr && sr(C),
          o && o.add && !Ve)
        ) {
          var ze = C.update;
          (C.update = function () {
            (C.update = ze), De.cache++, Me || Je || C.refresh();
          }),
            ne.delayedCall(0.01, C.update),
            (Ve = 0.01),
            (Me = Je = 0);
        } else C.refresh();
        y && p_();
      }),
      (u.register = function (s) {
        return (
          ro ||
            ((ne = s || ng()),
            tg() && window.document && u.enable(),
            (ro = dl)),
          ro
        );
      }),
      (u.defaults = function (s) {
        if (s) for (var o in s) Za[o] = s[o];
        return Za;
      }),
      (u.disable = function (s, o) {
        (dl = 0),
          Pe.forEach(function (d) {
            return d[o ? "kill" : "disable"](s);
          }),
          Ft(Oe, "wheel", no),
          Ft(Ze, "scroll", no),
          clearInterval(qa),
          Ft(Ze, "touchcancel", Vr),
          Ft(Be, "touchstart", Vr),
          Qa(Ft, Ze, "pointerdown,touchstart,mousedown", p0),
          Qa(Ft, Ze, "pointerup,touchend,mouseup", h0),
          ku.kill(),
          Ga(Ft);
        for (var a = 0; a < De.length; a += 3)
          Ka(Ft, De[a], De[a + 1]), Ka(Ft, De[a], De[a + 2]);
      }),
      (u.enable = function () {
        if (
          ((Oe = window),
          (Ze = document),
          (Gn = Ze.documentElement),
          (Be = Ze.body),
          ne &&
            ((zl = ne.utils.toArray),
            (kl = ne.utils.clamp),
            (hd = ne.core.context || Vr),
            (If = ne.core.suppressOverwrites || Vr),
            (Bd = Oe.history.scrollRestoration || "auto"),
            (vd = Oe.pageYOffset || 0),
            ne.core.globals("ScrollTrigger", u),
            Be))
        ) {
          (dl = 1),
            (mo = document.createElement("div")),
            (mo.style.height = "100vh"),
            (mo.style.position = "absolute"),
            fg(),
            o_(),
            _t.register(ne),
            (u.isTouch = _t.isTouch),
            (Di =
              _t.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (pd = _t.isTouch === 1),
            $t(Oe, "wheel", no),
            (Ud = [Oe, Ze, Gn, Be]),
            ne.matchMedia
              ? ((u.matchMedia = function (g) {
                  var x = ne.matchMedia(),
                    _;
                  for (_ in g) x.add(_, g[_]);
                  return x;
                }),
                ne.addEventListener("matchMediaInit", function () {
                  return Xd();
                }),
                ne.addEventListener("matchMediaRevert", function () {
                  return ug();
                }),
                ne.addEventListener("matchMedia", function () {
                  ms(0, 1), js("matchMedia");
                }),
                ne.matchMedia().add("(orientation: portrait)", function () {
                  return Uf(), Uf;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Uf(),
            $t(Ze, "scroll", no);
          var s = Be.hasAttribute("style"),
            o = Be.style,
            a = o.borderTopStyle,
            d = ne.core.Animation.prototype,
            f,
            h;
          for (
            d.revert ||
              Object.defineProperty(d, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              o.borderTopStyle = "solid",
              f = ai(Be),
              Rt.m = Math.round(f.top + Rt.sc()) || 0,
              wn.m = Math.round(f.left + wn.sc()) || 0,
              a ? (o.borderTopStyle = a) : o.removeProperty("border-top-style"),
              s || (Be.setAttribute("style", ""), Be.removeAttribute("style")),
              qa = setInterval(v0, 250),
              ne.delayedCall(0.5, function () {
                return (Xa = 0);
              }),
              $t(Ze, "touchcancel", Vr),
              $t(Be, "touchstart", Vr),
              Qa($t, Ze, "pointerdown,touchstart,mousedown", p0),
              Qa($t, Ze, "pointerup,touchend,mouseup", h0),
              dd = ne.utils.checkPrefix("transform"),
              fu.push(dd),
              ro = rn(),
              ku = ne.delayedCall(0.2, ms).pause(),
              io = [
                Ze,
                "visibilitychange",
                function () {
                  var g = Oe.innerWidth,
                    x = Oe.innerHeight;
                  Ze.hidden
                    ? ((u0 = g), (c0 = x))
                    : (u0 !== g || c0 !== x) && ml();
                },
                Ze,
                "DOMContentLoaded",
                ms,
                Oe,
                "load",
                ms,
                Oe,
                "resize",
                ml,
              ],
              Ga($t),
              Pe.forEach(function (g) {
                return g.enable(0, 1);
              }),
              h = 0;
            h < De.length;
            h += 3
          )
            Ka(Ft, De[h], De[h + 1]), Ka(Ft, De[h], De[h + 2]);
        }
      }),
      (u.config = function (s) {
        "limitCallbacks" in s && (Lf = !!s.limitCallbacks);
        var o = s.syncInterval;
        (o && clearInterval(qa)) || ((qa = o) && setInterval(v0, o)),
          "ignoreMobileResize" in s &&
            (pd = u.isTouch === 1 && s.ignoreMobileResize),
          "autoRefreshEvents" in s &&
            (Ga(Ft) || Ga($t, s.autoRefreshEvents || "none"),
            (Z1 = (s.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (u.scrollerProxy = function (s, o) {
        var a = Rn(s),
          d = De.indexOf(a),
          f = Ts(a);
        ~d && De.splice(d, f ? 6 : 2),
          o && (f ? Xr.unshift(Oe, o, Be, o, Gn, o) : Xr.unshift(a, o));
      }),
      (u.clearMatchMedia = function (s) {
        Pe.forEach(function (o) {
          return o._ctx && o._ctx.query === s && o._ctx.kill(!0, !0);
        });
      }),
      (u.isInViewport = function (s, o, a) {
        var d = (qn(s) ? Rn(s) : s).getBoundingClientRect(),
          f = d[a ? ws : ks] * o || 0;
        return a
          ? d.right - f > 0 && d.left + f < Oe.innerWidth
          : d.bottom - f > 0 && d.top + f < Oe.innerHeight;
      }),
      (u.positionInViewport = function (s, o, a) {
        qn(s) && (s = Rn(s));
        var d = s.getBoundingClientRect(),
          f = d[a ? ws : ks],
          h =
            o == null
              ? f / 2
              : o in Tu
              ? Tu[o] * f
              : ~o.indexOf("%")
              ? (parseFloat(o) * f) / 100
              : parseFloat(o) || 0;
        return a ? (d.left + h) / Oe.innerWidth : (d.top + h) / Oe.innerHeight;
      }),
      (u.killAll = function (s) {
        if (
          (Pe.slice(0).forEach(function (a) {
            return a.vars.id !== "ScrollSmoother" && a.kill();
          }),
          s !== !0)
        ) {
          var o = Ns.killAll || [];
          (Ns = {}),
            o.forEach(function (a) {
              return a();
            });
        }
      }),
      u
    );
  })();
je.version = "3.13.0";
je.saveStyles = function (u) {
  return u
    ? zl(u).forEach(function (n) {
        if (n && n.style) {
          var r = Wn.indexOf(n);
          r >= 0 && Wn.splice(r, 5),
            Wn.push(
              n,
              n.style.cssText,
              n.getBBox && n.getAttribute("transform"),
              ne.core.getCache(n),
              hd()
            );
        }
      })
    : Wn;
};
je.revert = function (u, n) {
  return Xd(!u, n);
};
je.create = function (u, n) {
  return new je(u, n);
};
je.refresh = function (u) {
  return u ? ml(!0) : (ro || je.register()) && ms(!0);
};
je.update = function (u) {
  return ++De.cache && ci(u === !0 ? 2 : 0);
};
je.clearScrollMemory = cg;
je.maxScroll = function (u, n) {
  return qr(u, n ? wn : Rt);
};
je.getScrollFunc = function (u, n) {
  return Wi(Rn(u), n ? wn : Rt);
};
je.getById = function (u) {
  return gd[u];
};
je.getAll = function () {
  return Pe.filter(function (u) {
    return u.vars.id !== "ScrollSmoother";
  });
};
je.isScrolling = function () {
  return !!yr;
};
je.snapDirectional = qd;
je.addEventListener = function (u, n) {
  var r = Ns[u] || (Ns[u] = []);
  ~r.indexOf(n) || r.push(n);
};
je.removeEventListener = function (u, n) {
  var r = Ns[u],
    s = r && r.indexOf(n);
  s >= 0 && r.splice(s, 1);
};
je.batch = function (u, n) {
  var r = [],
    s = {},
    o = n.interval || 0.016,
    a = n.batchMax || 1e9,
    d = function (g, x) {
      var _ = [],
        S = [],
        y = ne
          .delayedCall(o, function () {
            x(_, S), (_ = []), (S = []);
          })
          .pause();
      return function (N) {
        _.length || y.restart(!0),
          _.push(N.trigger),
          S.push(N),
          a <= _.length && y.progress(1);
      };
    },
    f;
  for (f in n)
    s[f] =
      f.substr(0, 2) === "on" && on(n[f]) && f !== "onRefreshInit"
        ? d(f, n[f])
        : n[f];
  return (
    on(a) &&
      ((a = a()),
      $t(je, "refresh", function () {
        return (a = n.batchMax());
      })),
    zl(u).forEach(function (h) {
      var g = {};
      for (f in s) g[f] = s[f];
      (g.trigger = h), r.push(je.create(g));
    }),
    r
  );
};
var S0 = function (n, r, s, o) {
    return (
      r > o ? n(o) : r < 0 && n(0),
      s > o ? (o - r) / (s - r) : s < 0 ? r / (r - s) : 1
    );
  },
  Hf = function u(n, r) {
    r === !0
      ? n.style.removeProperty("touch-action")
      : (n.style.touchAction =
          r === !0
            ? "auto"
            : r
            ? "pan-" + r + (_t.isTouch ? " pinch-zoom" : "")
            : "none"),
      n === Gn && u(Be, r);
  },
  nu = { auto: 1, scroll: 1 },
  x_ = function (n) {
    var r = n.event,
      s = n.target,
      o = n.axis,
      a = (r.changedTouches ? r.changedTouches[0] : r).target,
      d = a._gsap || ne.core.getCache(a),
      f = rn(),
      h;
    if (!d._isScrollT || f - d._isScrollT > 2e3) {
      for (
        ;
        a &&
        a !== Be &&
        ((a.scrollHeight <= a.clientHeight && a.scrollWidth <= a.clientWidth) ||
          !(nu[(h = mr(a)).overflowY] || nu[h.overflowX]));

      )
        a = a.parentNode;
      (d._isScroll =
        a &&
        a !== s &&
        !Ts(a) &&
        (nu[(h = mr(a)).overflowY] || nu[h.overflowX])),
        (d._isScrollT = f);
    }
    (d._isScroll || o === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
  },
  pg = function (n, r, s, o) {
    return _t.create({
      target: n,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: r,
      onWheel: (o = o && x_),
      onPress: o,
      onDrag: o,
      onScroll: o,
      onEnable: function () {
        return s && $t(Ze, _t.eventTypes[0], T0, !1, !0);
      },
      onDisable: function () {
        return Ft(Ze, _t.eventTypes[0], T0, !0);
      },
    });
  },
  y_ = /(input|label|select|textarea)/i,
  C0,
  T0 = function (n) {
    var r = y_.test(n.target.tagName);
    (r || C0) && ((n._gsapAllow = !0), (C0 = r));
  },
  __ = function (n) {
    ps(n) || (n = {}),
      (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
      n.type || (n.type = "wheel,touch"),
      (n.debounce = !!n.debounce),
      (n.id = n.id || "normalizer");
    var r = n,
      s = r.normalizeScrollX,
      o = r.momentum,
      a = r.allowNestedScroll,
      d = r.onRelease,
      f,
      h,
      g = Rn(n.target) || Gn,
      x = ne.core.globals().ScrollSmoother,
      _ = x && x.get(),
      S =
        Di &&
        ((n.content && Rn(n.content)) ||
          (_ && n.content !== !1 && !_.smooth() && _.content())),
      y = Wi(g, Rt),
      N = Wi(g, wn),
      w = 1,
      P =
        (_t.isTouch && Oe.visualViewport
          ? Oe.visualViewport.scale * Oe.visualViewport.width
          : Oe.outerWidth) / Oe.innerWidth,
      I = 0,
      A = on(o)
        ? function () {
            return o(f);
          }
        : function () {
            return o || 2.8;
          },
      $,
      O,
      L = pg(g, n.type, !0, a),
      U = function () {
        return (O = !1);
      },
      z = Vr,
      W = Vr,
      B = function () {
        (h = qr(g, Rt)),
          (W = kl(Di ? 1 : 0, h)),
          s && (z = kl(0, qr(g, wn))),
          ($ = Ss);
      },
      q = function () {
        (S._gsap.y = pl(parseFloat(S._gsap.y) + y.offset) + "px"),
          (S.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(S._gsap.y) +
            ", 0, 1)"),
          (y.offset = y.cacheID = 0);
      },
      fe = function () {
        if (O) {
          requestAnimationFrame(U);
          var H = pl(f.deltaY / 2),
            Z = W(y.v - H);
          if (S && Z !== y.v + y.offset) {
            y.offset = Z - y.v;
            var C = pl((parseFloat(S && S._gsap.y) || 0) - y.offset);
            (S.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              C +
              ", 0, 1)"),
              (S._gsap.y = C + "px"),
              (y.cacheID = De.cache),
              ci();
          }
          return !0;
        }
        y.offset && q(), (O = !0);
      },
      Q,
      he,
      ge,
      Se,
      de = function () {
        B(),
          Q.isActive() &&
            Q.vars.scrollY > h &&
            (y() > h ? Q.progress(1) && y(h) : Q.resetTo("scrollY", h));
      };
    return (
      S && ne.set(S, { y: "+=0" }),
      (n.ignoreCheck = function (ee) {
        return (
          (Di && ee.type === "touchmove" && fe()) ||
          (w > 1.05 && ee.type !== "touchstart") ||
          f.isGesturing ||
          (ee.touches && ee.touches.length > 1)
        );
      }),
      (n.onPress = function () {
        O = !1;
        var ee = w;
        (w = pl(((Oe.visualViewport && Oe.visualViewport.scale) || 1) / P)),
          Q.pause(),
          ee !== w && Hf(g, w > 1.01 ? !0 : s ? !1 : "x"),
          (he = N()),
          (ge = y()),
          B(),
          ($ = Ss);
      }),
      (n.onRelease = n.onGestureStart =
        function (ee, H) {
          if ((y.offset && q(), !H)) Se.restart(!0);
          else {
            De.cache++;
            var Z = A(),
              C,
              j;
            s &&
              ((C = N()),
              (j = C + (Z * 0.05 * -ee.velocityX) / 0.227),
              (Z *= S0(N, C, j, qr(g, wn))),
              (Q.vars.scrollX = z(j))),
              (C = y()),
              (j = C + (Z * 0.05 * -ee.velocityY) / 0.227),
              (Z *= S0(y, C, j, qr(g, Rt))),
              (Q.vars.scrollY = W(j)),
              Q.invalidate().duration(Z).play(0.01),
              ((Di && Q.vars.scrollY >= h) || C >= h - 1) &&
                ne.to({}, { onUpdate: de, duration: Z });
          }
          d && d(ee);
        }),
      (n.onWheel = function () {
        Q._ts && Q.pause(), rn() - I > 1e3 && (($ = 0), (I = rn()));
      }),
      (n.onChange = function (ee, H, Z, C, j) {
        if (
          (Ss !== $ && B(),
          H && s && N(z(C[2] === H ? he + (ee.startX - ee.x) : N() + H - C[1])),
          Z)
        ) {
          y.offset && q();
          var F = j[2] === Z,
            pe = F ? ge + ee.startY - ee.y : y() + Z - j[1],
            se = W(pe);
          F && pe !== se && (ge += se - pe), y(se);
        }
        (Z || H) && ci();
      }),
      (n.onEnable = function () {
        Hf(g, s ? !1 : "x"),
          je.addEventListener("refresh", de),
          $t(Oe, "resize", de),
          y.smooth &&
            ((y.target.style.scrollBehavior = "auto"),
            (y.smooth = N.smooth = !1)),
          L.enable();
      }),
      (n.onDisable = function () {
        Hf(g, !0),
          Ft(Oe, "resize", de),
          je.removeEventListener("refresh", de),
          L.kill();
      }),
      (n.lockAxis = n.lockAxis !== !1),
      (f = new _t(n)),
      (f.iOS = Di),
      Di && !y() && y(1),
      Di && ne.ticker.add(Vr),
      (Se = f._dc),
      (Q = ne.to(f, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: s ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: dg(y, y(), function () {
            return Q.pause();
          }),
        },
        onUpdate: ci,
        onComplete: Se.vars.onComplete,
      })),
      f
    );
  };
je.sort = function (u) {
  if (on(u)) return Pe.sort(u);
  var n = Oe.pageYOffset || 0;
  return (
    je.getAll().forEach(function (r) {
      return (r._sortY = r.trigger
        ? n + r.trigger.getBoundingClientRect().top
        : r.start + Oe.innerHeight);
    }),
    Pe.sort(
      u ||
        function (r, s) {
          return (
            (r.vars.refreshPriority || 0) * -1e6 +
            (r.vars.containerAnimation ? 1e6 : r._sortY) -
            ((s.vars.containerAnimation ? 1e6 : s._sortY) +
              (s.vars.refreshPriority || 0) * -1e6)
          );
        }
    )
  );
};
je.observe = function (u) {
  return new _t(u);
};
je.normalizeScroll = function (u) {
  if (typeof u > "u") return vn;
  if (u === !0 && vn) return vn.enable();
  if (u === !1) {
    vn && vn.kill(), (vn = u);
    return;
  }
  var n = u instanceof _t ? u : __(u);
  return vn && vn.target === n.target && vn.kill(), Ts(n.target) && (vn = n), n;
};
je.core = {
  _getVelocityProp: fd,
  _inputObserver: pg,
  _scrollers: De,
  _proxies: Xr,
  bridge: {
    ss: function () {
      yr || js("scrollStart"), (yr = rn());
    },
    ref: function () {
      return nn;
    },
  },
};
ng() && ne.registerPlugin(je);
const w_ =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";
function gs(u) {
  const [n, r] = Ue.useState(!1),
    s = () => {
      r(!0);
    },
    { src: o, alt: a, style: d, className: f, ...h } = u;
  return n
    ? m.jsx("div", {
        className: `inline-block bg-gray-100 text-center align-middle ${
          f ?? ""
        }`,
        style: d,
        children: m.jsx("div", {
          className: "flex items-center justify-center w-full h-full",
          children: m.jsx("img", {
            src: w_,
            alt: "Error loading image",
            ...h,
            "data-original-url": o,
          }),
        }),
      })
    : m.jsx("img", {
        src: o,
        alt: a,
        className: f,
        style: d,
        ...h,
        onError: s,
      });
}
const Il = { _origin: "https://api.emailjs.com" },
  k_ = (u, n = "https://api.emailjs.com") => {
    (Il._userID = u), (Il._origin = n);
  },
  hg = (u, n, r) => {
    if (!u)
      throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
    if (!n)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!r)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class N0 {
  constructor(n) {
    (this.status = n.status), (this.text = n.responseText);
  }
}
const mg = (u, n, r = {}) =>
    new Promise((s, o) => {
      const a = new XMLHttpRequest();
      a.addEventListener("load", ({ target: d }) => {
        const f = new N0(d);
        f.status === 200 || f.text === "OK" ? s(f) : o(f);
      }),
        a.addEventListener("error", ({ target: d }) => {
          o(new N0(d));
        }),
        a.open("POST", Il._origin + u, !0),
        Object.keys(r).forEach((d) => {
          a.setRequestHeader(d, r[d]);
        }),
        a.send(n);
    }),
  S_ = (u, n, r, s) => {
    const o = s || Il._userID;
    return (
      hg(o, u, n),
      mg(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.2.0",
          user_id: o,
          service_id: u,
          template_id: n,
          template_params: r,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  C_ = (u) => {
    let n;
    if (
      (typeof u == "string" ? (n = document.querySelector(u)) : (n = u),
      !n || n.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return n;
  },
  T_ = (u, n, r, s) => {
    const o = s || Il._userID,
      a = C_(r);
    hg(o, u, n);
    const d = new FormData(a);
    return (
      d.append("lib_version", "3.2.0"),
      d.append("service_id", u),
      d.append("template_id", n),
      d.append("user_id", o),
      mg("/api/v1.0/email/send-form", d)
    );
  },
  N_ = { init: k_, send: S_, sendForm: T_ },
  j_ = "service_veddnmx",
  E_ = "template_74daohb",
  P_ = "YaMenwRBpbdGB9Q9r",
  gg = Ue.forwardRef(
    (
      {
        labelSize: u = "text-[14px]",
        inputSize: n = "text-[16px]",
        textareaRows: r = 4,
        buttonPadding: s = "px-10 py-3",
        buttonTextSize: o = "text-[14px]",
      },
      a
    ) => {
      const d = Ue.useRef(null),
        [f, h] = Ue.useState(!1),
        g = (x) => {
          x.preventDefault(),
            d.current &&
              (h(!0),
              N_.sendForm(j_, E_, d.current, P_).then(
                (_) => {
                  console.log("EmailJS success:", _.text),
                    d.current?.reset(),
                    h(!1);
                },
                (_) => {
                  console.error("EmailJS error:", _.text || _), h(!1);
                }
              ));
        };
      return m.jsx("div", {
        ref: a,
        className: "space-y-6",
        children: m.jsxs("form", {
          ref: d,
          onSubmit: g,
          className: "space-y-4",
          children: [
            m.jsxs("div", {
              className: "space-y-4",
              children: [
                m.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    m.jsx("label", {
                      className: `font-['Manrope',sans-serif] text-[#c7c7c7] ${u}`,
                      children: "Name",
                    }),
                    m.jsx("input", {
                      name: "from_name",
                      type: "text",
                      required: !0,
                      className: `w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] ${n} focus:outline-none focus:ring-2 focus:ring-[#d3e97a]`,
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    m.jsx("label", {
                      className: `font-['Manrope',sans-serif] text-[#c7c7c7] ${u}`,
                      children: "Email",
                    }),
                    m.jsx("input", {
                      name: "from_email",
                      type: "email",
                      required: !0,
                      className: `w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] ${n} focus:outline-none focus:ring-2 focus:ring-[#d3e97a]`,
                    }),
                  ],
                }),
                m.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    m.jsx("label", {
                      className: `font-['Manrope',sans-serif] text-[#c7c7c7] ${u}`,
                      children: "Message",
                    }),
                    m.jsx("textarea", {
                      name: "message",
                      rows: r,
                      required: !0,
                      className: `w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] ${n} focus:outline-none focus:ring-2 focus:ring-[#d3e97a] resize-none`,
                    }),
                  ],
                }),
              ],
            }),
            m.jsx("button", {
              type: "submit",
              disabled: f,
              className: `bg-[#d3e97a] rounded-full ${s} font-['Manrope',sans-serif] font-bold ${o} text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors`,
              children: "Submit",
            }),
          ],
        }),
      });
    }
  );
gg.displayName = "ContactForm";
ln.registerPlugin(je);
ln.registerPlugin(je);
function M_({ navigate: u }) {
  const n = Ue.useRef(null),
    r = Ue.useRef(null),
    s = Ue.useRef(null),
    o = Ue.useRef(null);
  return (
    Ue.useEffect(() => {
      const a = n.current;
      a &&
        ln.from(a, {
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
      const d = r.current;
      d &&
        ln.from(d, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: d,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
      const f = s.current;
      f &&
        ln.from(f, {
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
      const h = o.current;
      h &&
        ln.from(h, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: h,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });
    }, []),
    m.jsxs(m.Fragment, {
      children: [
        m.jsxs(ju, {
          children: [
            m.jsx("title", {
              children: "Aquib Yazdani - Sr. Software Engineer | Portfolio",
            }),
            m.jsx("meta", {
              name: "description",
              content:
                "Aquib Yazdani - Senior Software Engineer specializing in React, JavaScript, and full-stack development. Explore my portfolio featuring projects like TOI Epaper, Screener for Zamzam Capital, and more.",
            }),
            m.jsx("meta", {
              name: "keywords",
              content:
                "Aquib Yazdani, Software Engineer, React Developer, JavaScript, Full-Stack Developer, Portfolio, Frontend Developer, Pune India",
            }),
            m.jsx("link", {
              rel: "canonical",
              href: "https://aquibyazdani.com",
            }),
            m.jsx("script", {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Aquib Yazdani",
                jobTitle: "Senior Software Engineer",
                url: "https://aquibyazdani.com",
                sameAs: [
                  "https://www.linkedin.com/in/aquibyazdani/",
                  "https://github.com/aquibyazdani/",
                  "https://www.instagram.com/aquibyazdani/",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Pune",
                  addressRegion: "Maharashtra",
                  addressCountry: "India",
                },
                email: "yazdaniaquib2@gmail.com",
                telephone: "+91 8210773776",
                knowsAbout: [
                  "React.js",
                  "JavaScript",
                  "TypeScript",
                  "Full-Stack Development",
                  "Frontend Development",
                  "Web Development",
                ],
              }),
            }),
          ],
        }),
        m.jsxs("div", {
          className: "bg-neutral-950 min-h-screen",
          children: [
            m.jsx(Pu, { navigate: u, currentPage: "home" }),
            m.jsx("section", {
              ref: n,
              className: "pt-32 pb-20 px-6",
              children: m.jsx("div", {
                className: "max-w-7xl mx-auto",
                children: m.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                  children: [
                    m.jsxs("div", {
                      className: "space-y-8",
                      children: [
                        m.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            m.jsxs("h1", {
                              className:
                                "text-[80px] lg:text-[101px] leading-[0.9] text-white",
                              children: [
                                "HI, I AM",
                                m.jsx("br", {}),
                                We.name.toUpperCase(),
                                ".",
                              ],
                            }),
                            m.jsx("p", {
                              className:
                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[540px]",
                              children:
                                "Sr. Software Engg. / JavaScript Expert / Tech Explorer",
                            }),
                          ],
                        }),
                        m.jsxs("div", {
                          className: "flex gap-4 items-center flex-wrap",
                          children: [
                            m.jsxs("a", {
                              href: "#contact",
                              className:
                                "bg-[#d3e97a] rounded-full flex items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors",
                              children: [
                                m.jsx("span", {
                                  className:
                                    "font-['Manrope',sans-serif] font-bold text-[16px] text-neutral-950 uppercase",
                                  children: "Contact Me",
                                }),
                                m.jsx("div", {
                                  className:
                                    "size-[42px] bg-neutral-950 rounded-full flex items-center justify-center",
                                  children: m.jsx("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    children: m.jsx("path", {
                                      d: Le.p23c4ec40,
                                      fill: "white",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            m.jsx("a", {
                              href: Jn.linkedin,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors",
                              children: m.jsxs("svg", {
                                width: "26",
                                height: "26",
                                viewBox: "0 0 26 26",
                                fill: "none",
                                children: [
                                  m.jsx("path", {
                                    d: Le.p282a2240,
                                    fill: "#D3E97A",
                                  }),
                                  m.jsx("path", {
                                    d: Le.p31d7ad00,
                                    fill: "#D3E97A",
                                  }),
                                ],
                              }),
                            }),
                            m.jsx("a", {
                              href: Jn.github,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "bg-[#222222] size-[54px] rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors",
                              children: m.jsx("svg", {
                                width: "26",
                                height: "26",
                                viewBox: "0 0 26 26",
                                fill: "none",
                                children: m.jsx("path", {
                                  clipRule: "evenodd",
                                  d: Le.p17e6c000,
                                  fill: "#D3E97A",
                                  fillRule: "evenodd",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    m.jsx("div", {
                      className: "relative",
                      children: m.jsx("div", {
                        className:
                          "bg-[#c7c7c7] rounded-[16px] w-full max-w-[600px] mx-auto aspect-[6/7] relative overflow-hidden",
                        children: m.jsx(gs, {
                          src: I0,
                          alt: We.name,
                          className:
                            "absolute inset-0 w-full h-full object-cover object-center",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            m.jsx("div", {
              className: "max-w-7xl mx-auto px-6",
              children: m.jsx("div", {
                className: "border-t border-[#484848]",
              }),
            }),
            m.jsx("section", {
              ref: r,
              id: "work",
              className: "py-20 px-6",
              children: m.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [
                  m.jsxs("div", {
                    className: "space-y-4 mb-16",
                    children: [
                      m.jsx("h2", {
                        className: "text-[76px] text-white leading-none",
                        children: "Featured Projects",
                      }),
                      m.jsx("p", {
                        className:
                          "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]",
                        children:
                          "Here are some of the selected projects that showcase my passion for front-end development.",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "space-y-20",
                    children: [
                      m.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                        children: [
                          m.jsxs("div", {
                            className:
                              "bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden",
                            children: [
                              m.jsx(gs, {
                                src: wd,
                                alt: "TOI Epaper",
                                className:
                                  "absolute inset-0 w-full h-full object-contain p-12",
                              }),
                              m.jsx("div", {
                                className:
                                  "absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full",
                                children: m.jsx("span", {
                                  className:
                                    "font-['Manrope',sans-serif] text-white text-[14px]",
                                  children: "Professional",
                                }),
                              }),
                            ],
                          }),
                          m.jsxs("div", {
                            className: "space-y-8",
                            children: [
                              m.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  m.jsx("h3", {
                                    className:
                                      "font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]",
                                    children: "TOI Epaper (Times of India)",
                                  }),
                                  m.jsx("p", {
                                    className:
                                      "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]",
                                    children:
                                      "Developed and maintained a high-traffic ePaper platform accessed by thousands daily. Built a reusable component library to streamline frontend development, reducing development time by 30% through efficient language management and implementing cross-browser compatibility features.",
                                  }),
                                ],
                              }),
                              m.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  m.jsx("p", {
                                    className:
                                      "font-['Manrope',sans-serif] font-semibold text-white text-[16px] uppercase",
                                    children: "Project Info",
                                  }),
                                  m.jsxs("div", {
                                    className:
                                      "border-t border-b border-[#484848] divide-y divide-[#484848]",
                                    children: [
                                      m.jsxs("div", {
                                        className: "flex justify-between py-4",
                                        children: [
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-white text-[16px]",
                                            children: "Client",
                                          }),
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                            children: "Times of India",
                                          }),
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        className: "flex justify-between py-4",
                                        children: [
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-white text-[16px]",
                                            children: "Year",
                                          }),
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                            children: "2023",
                                          }),
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        className: "flex justify-between py-4",
                                        children: [
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-white text-[16px]",
                                            children: "Role",
                                          }),
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                            children: "Lead Frontend Engineer",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              m.jsx("div", {
                                className: "flex gap-6 flex-wrap",
                                children: m.jsxs("a", {
                                  href: "https://epaper.indiatimes.com/",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "group inline-flex flex-col gap-1",
                                  children: [
                                    m.jsxs("div", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        m.jsx("span", {
                                          className:
                                            "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase",
                                          children: "Live Demo",
                                        }),
                                        m.jsx("svg", {
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: m.jsx("path", {
                                            d: Le.p3589c00,
                                            fill: "#D3E97A",
                                          }),
                                        }),
                                      ],
                                    }),
                                    m.jsx("div", {
                                      className: "h-[2px] w-full bg-[#d3e97a]",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                        children: [
                          m.jsxs("div", {
                            className:
                              "bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden",
                            children: [
                              m.jsx(gs, {
                                src: U0,
                                alt: "Screener - Zamzam Capital",
                                className:
                                  "absolute inset-0 w-full h-full object-contain p-12",
                              }),
                              m.jsx("div", {
                                className:
                                  "absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full",
                                children: m.jsx("span", {
                                  className:
                                    "font-['Manrope',sans-serif] text-white text-[14px]",
                                  children: "Professional",
                                }),
                              }),
                            ],
                          }),
                          m.jsxs("div", {
                            className: "space-y-8",
                            children: [
                              m.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  m.jsx("h3", {
                                    className:
                                      "font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]",
                                    children: "Screener - Zamzam Capital",
                                  }),
                                  m.jsx("p", {
                                    className:
                                      "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]",
                                    children:
                                      "Developed a dedicated Halal stock screening platform enabling investors to evaluate companies based on Shariah-compliant financial criteria. Implemented advanced filtering and screening logic to assess stocks across multiple compliance parameters, providing a streamlined and user-friendly interface for Islamic investment research.",
                                  }),
                                ],
                              }),
                              m.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  m.jsx("p", {
                                    className:
                                      "font-['Manrope',sans-serif] font-semibold text-white text-[16px] uppercase",
                                    children: "Project Info",
                                  }),
                                  m.jsxs("div", {
                                    className:
                                      "border-t border-b border-[#484848] divide-y divide-[#484848]",
                                    children: [
                                      m.jsxs("div", {
                                        className: "flex justify-between py-4",
                                        children: [
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-white text-[16px]",
                                            children: "Client",
                                          }),
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                            children: "Zamzam Capital",
                                          }),
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        className: "flex justify-between py-4",
                                        children: [
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-white text-[16px]",
                                            children: "Year",
                                          }),
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                            children: "2025",
                                          }),
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        className: "flex justify-between py-4",
                                        children: [
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-white text-[16px]",
                                            children: "Role",
                                          }),
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                            children: "Sole Developer",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              m.jsx("div", {
                                className: "flex gap-6 flex-wrap",
                                children: m.jsxs("a", {
                                  href: "https://screener.zamzam-capital.com",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "group inline-flex flex-col gap-1",
                                  children: [
                                    m.jsxs("div", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        m.jsx("span", {
                                          className:
                                            "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase",
                                          children: "Live Demo",
                                        }),
                                        m.jsx("svg", {
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: m.jsx("path", {
                                            d: Le.p3589c00,
                                            fill: "#D3E97A",
                                          }),
                                        }),
                                      ],
                                    }),
                                    m.jsx("div", {
                                      className: "h-[2px] w-full bg-[#d3e97a]",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                        children: [
                          m.jsxs("div", {
                            className:
                              "bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden",
                            children: [
                              m.jsx(gs, {
                                src: $0,
                                alt: "Memorable Mumbai",
                                className:
                                  "absolute inset-0 w-full h-full object-contain p-12",
                              }),
                              m.jsx("div", {
                                className:
                                  "absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full",
                                children: m.jsx("span", {
                                  className:
                                    "font-['Manrope',sans-serif] text-white text-[14px]",
                                  children: "Personal Project",
                                }),
                              }),
                            ],
                          }),
                          m.jsxs("div", {
                            className: "space-y-8",
                            children: [
                              m.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  m.jsx("h3", {
                                    className:
                                      "font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]",
                                    children: "Memorable Mumbai",
                                  }),
                                  m.jsx("p", {
                                    className:
                                      "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]",
                                    children:
                                      "A comprehensive travel and tourism website showcasing the vibrant culture, iconic landmarks, and hidden gems of Mumbai. Features an intuitive interface with responsive design, interactive maps, and detailed guides to help visitors explore and experience the city's rich heritage.",
                                  }),
                                ],
                              }),
                              m.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  m.jsx("p", {
                                    className:
                                      "font-['Manrope',sans-serif] font-semibold text-white text-[16px] uppercase",
                                    children: "Project Info",
                                  }),
                                  m.jsxs("div", {
                                    className:
                                      "border-t border-b border-[#484848] divide-y divide-[#484848]",
                                    children: [
                                      m.jsxs("div", {
                                        className: "flex justify-between py-4",
                                        children: [
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-white text-[16px]",
                                            children: "Year",
                                          }),
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                            children: "2023",
                                          }),
                                        ],
                                      }),
                                      m.jsxs("div", {
                                        className: "flex justify-between py-4",
                                        children: [
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-white text-[16px]",
                                            children: "Role",
                                          }),
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                            children: "Sole Developer",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              m.jsx("div", {
                                className: "flex gap-6 flex-wrap",
                                children: m.jsxs("a", {
                                  href: "https://memorablemumbai.com",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "group inline-flex flex-col gap-1",
                                  children: [
                                    m.jsxs("div", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        m.jsx("span", {
                                          className:
                                            "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase",
                                          children: "View Project",
                                        }),
                                        m.jsx("svg", {
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: m.jsx("path", {
                                            d: Le.p3589c00,
                                            fill: "#D3E97A",
                                          }),
                                        }),
                                      ],
                                    }),
                                    m.jsx("div", {
                                      className: "h-[2px] w-full bg-[#d3e97a]",
                                    }),
                                  ],
                                }),
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
            m.jsx("div", {
              className: "max-w-7xl mx-auto px-6",
              children: m.jsx("div", {
                className: "border-t border-[#484848]",
              }),
            }),
            m.jsx("section", {
              ref: s,
              id: "about",
              className: "py-20 px-6",
              children: m.jsx("div", {
                className: "max-w-7xl mx-auto",
                children: m.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                  children: [
                    m.jsx("div", {
                      children: m.jsx("h2", {
                        className:
                          "text-[76px] lg:text-[101px] text-white leading-[0.9] mb-8",
                        children: "About me",
                      }),
                    }),
                    m.jsxs("div", {
                      className: "space-y-8",
                      children: [
                        m.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            m.jsx("p", {
                              className:
                                "font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]",
                              children:
                                "I work as a senior full-stack developer, with deep expertise in frontend engineering.",
                            }),
                            m.jsx("p", {
                              className:
                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5]",
                              children:
                                "I am a front-end developer based in India looking for exciting opportunities. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.",
                            }),
                          ],
                        }),
                        m.jsxs("button", {
                          onClick: () => u("/about"),
                          className:
                            "inline-flex flex-col gap-1 cursor-pointer border-0 bg-transparent p-0",
                          children: [
                            m.jsx("span", {
                              className:
                                "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[16px] uppercase",
                              children: "More about me",
                            }),
                            m.jsx("div", {
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
            m.jsx("div", {
              className: "max-w-7xl mx-auto px-6",
              children: m.jsx("div", {
                className: "border-t border-[#484848]",
              }),
            }),
            m.jsx("section", {
              ref: o,
              id: "contact",
              className: "py-20 px-6",
              children: m.jsx("div", {
                className: "max-w-7xl mx-auto",
                children: m.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                  children: [
                    m.jsxs("div", {
                      className: "space-y-8",
                      children: [
                        m.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            m.jsx("h2", {
                              className: "text-[76px] text-white leading-none",
                              children: "Let's connect",
                            }),
                            m.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                m.jsxs("p", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px]",
                                  children: [
                                    "Say hello at",
                                    " ",
                                    m.jsx("a", {
                                      href: `mailto:${We.email}`,
                                      className:
                                        "text-white border-b border-[#d3e97a]",
                                      children: We.email,
                                    }),
                                  ],
                                }),
                                m.jsxs("p", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px]",
                                  children: [
                                    "For more info, here's my",
                                    " ",
                                    m.jsx("button", {
                                      onClick: () => u("/resume"),
                                      className:
                                        "text-white border-b border-[#d3e97a] hover:text-[#d3e97a] transition-colors cursor-pointer bg-transparent border-0 border-b-[1px] p-0 font-['Manrope',sans-serif] text-[18px]",
                                      children: "resume",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        m.jsxs("div", {
                          className: "flex gap-6",
                          children: [
                            m.jsx("a", {
                              href: Ef[0].url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "hover:opacity-80 transition-opacity",
                              children: m.jsxs("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                  m.jsx("path", {
                                    d: Le.p1bc476b0,
                                    fill: "#D3E97A",
                                  }),
                                  m.jsx("path", {
                                    d: Le.p3ff62a40,
                                    fill: "#D3E97A",
                                  }),
                                ],
                              }),
                            }),
                            m.jsx("a", {
                              href: Ef[1].url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "hover:opacity-80 transition-opacity",
                              children: m.jsx("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: m.jsx("path", {
                                  clipRule: "evenodd",
                                  d: Le.p3add5780,
                                  fill: "#D3E97A",
                                  fillRule: "evenodd",
                                }),
                              }),
                            }),
                            m.jsx("a", {
                              href: Ef[2].url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "hover:opacity-80 transition-opacity",
                              children: m.jsxs("svg", {
                                width: "32",
                                height: "32",
                                viewBox: "0 0 32 32",
                                fill: "none",
                                children: [
                                  m.jsx("path", {
                                    d: Le.p8ca3400,
                                    fill: "#D3E97A",
                                  }),
                                  m.jsx("path", {
                                    d: Le.p5548000,
                                    fill: "#D3E97A",
                                  }),
                                  m.jsx("path", {
                                    d: Le.p374be072,
                                    fill: "#D3E97A",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        m.jsx("p", {
                          className:
                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] pt-8",
                          children: We.copyright,
                        }),
                      ],
                    }),
                    m.jsx("div", {
                      className: "space-y-8",
                      children: m.jsx(gg, {
                        labelSize: "text-[16px]",
                        inputSize: "text-[18px]",
                        textareaRows: 5,
                        buttonPadding: "px-10 py-4",
                        buttonTextSize: "text-[16px]",
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
const vg = Ue.forwardRef(({ navigate: u }, n) =>
  m.jsx("section", {
    className: "py-20 px-6",
    ref: n,
    children: m.jsx("div", {
      className: "max-w-7xl mx-auto",
      children: m.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
        children: [
          m.jsxs("div", {
            className: "space-y-8",
            children: [
              m.jsxs("div", {
                className: "space-y-4",
                children: [
                  m.jsx("h2", {
                    className:
                      "text-[64px] lg:text-[76px] text-white leading-[0.9]",
                    children: "LET'S CONNECT",
                  }),
                  m.jsx("div", {
                    className: "space-y-2",
                    children: m.jsxs("p", {
                      className:
                        "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                      children: [
                        "Say hello at",
                        " ",
                        m.jsx("a", {
                          href: `mailto:${We.email}`,
                          className: "text-[#d3e97a] hover:underline",
                          children: We.email,
                        }),
                      ],
                    }),
                  }),
                  m.jsx("button", {
                    onClick: () => u && u("/resume"),
                    className:
                      "bg-[#d3e97a] rounded-full px-8 py-3 font-['Manrope',sans-serif] font-bold text-[14px] text-neutral-950 uppercase hover:bg-[#c5db6c] transition-colors inline-block",
                    children: "My Resume",
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "flex gap-4",
                children: [
                  m.jsx("a", {
                    href: Jn.linkedin,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition-opacity",
                    children: m.jsxs("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 26 26",
                      fill: "none",
                      children: [
                        m.jsx("path", { d: Le.p282a2240, fill: "#D3E97A" }),
                        m.jsx("path", { d: Le.p31d7ad00, fill: "#D3E97A" }),
                      ],
                    }),
                  }),
                  m.jsx("a", {
                    href: Jn.github,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition-opacity",
                    children: m.jsx("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 26 26",
                      fill: "none",
                      children: m.jsx("path", {
                        clipRule: "evenodd",
                        d: Le.p17e6c000,
                        fill: "#D3E97A",
                        fillRule: "evenodd",
                      }),
                    }),
                  }),
                  m.jsx("a", {
                    href: Jn.instagram,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hover:opacity-80 transition-opacity",
                    children: m.jsxs("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 32 32",
                      fill: "none",
                      children: [
                        m.jsx("path", { d: Le.p8ca3400, fill: "#D3E97A" }),
                        m.jsx("path", { d: Le.p5548000, fill: "#D3E97A" }),
                        m.jsx("path", { d: Le.p374be072, fill: "#D3E97A" }),
                      ],
                    }),
                  }),
                ],
              }),
              m.jsx("p", {
                className:
                  "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px] pt-8",
                children: We.copyright,
              }),
            ],
          }),
          m.jsxs("div", {
            className: "space-y-6",
            children: [
              m.jsxs("div", {
                className: "space-y-4",
                children: [
                  m.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      m.jsx("label", {
                        className:
                          "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                        children: "Name",
                      }),
                      m.jsx("input", {
                        type: "text",
                        className:
                          "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      m.jsx("label", {
                        className:
                          "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                        children: "Email",
                      }),
                      m.jsx("input", {
                        type: "email",
                        className:
                          "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      m.jsx("label", {
                        className:
                          "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                        children: "Subject",
                      }),
                      m.jsx("input", {
                        type: "text",
                        className:
                          "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a]",
                      }),
                    ],
                  }),
                  m.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      m.jsx("label", {
                        className:
                          "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                        children: "Message",
                      }),
                      m.jsx("textarea", {
                        rows: 4,
                        className:
                          "w-full bg-[#1a1a1a] rounded-[4px] px-4 py-3 text-white font-['Manrope',sans-serif] text-[16px] focus:outline-none focus:ring-2 focus:ring-[#d3e97a] resize-none",
                      }),
                    ],
                  }),
                ],
              }),
              m.jsx("button", {
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
vg.displayName = "ConnectSection";
ln.registerPlugin(je);
function b_({ navigate: u }) {
  const n = {
      "Frontend Development": Ut.frontend,
      "State Management": Ut.stateManagement,
      "Testing & QA": Ut.testing,
      "Performance Optimization": Ut.performance,
      "API Integration": Ut.api,
      "Version Control & Collaboration": Ut.tools,
    },
    r = pu,
    s = Ue.useRef(null),
    o = Ue.useRef(null),
    a = Ue.useRef(null),
    d = Ue.useRef(null);
  return (
    Ue.useEffect(() => {
      const f = s.current;
      f &&
        ln.from(f, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: f,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none none",
          },
        });
      const h = o.current;
      h &&
        ln.from(h, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: h,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none none",
          },
        });
      const g = a.current;
      g &&
        ln.from(g, {
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
      const x = d.current;
      x &&
        ln.from(x, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: x,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "restart none none none",
          },
        });
    }, []),
    m.jsxs(m.Fragment, {
      children: [
        m.jsxs(ju, {
          children: [
            m.jsx("title", {
              children: "About Aquib Yazdani - Senior Software Engineer",
            }),
            m.jsx("meta", {
              name: "description",
              content:
                "Learn more about Aquib Yazdani, a Senior Software Engineer specializing in React, JavaScript, and full-stack development. Discover my skills, experience, and passion for creating exceptional web solutions.",
            }),
            m.jsx("meta", {
              name: "keywords",
              content:
                "Aquib Yazdani, About, Software Engineer, React Developer, JavaScript, Full-Stack Developer, Skills, Experience",
            }),
            m.jsx("link", {
              rel: "canonical",
              href: "https://aquibyazdani.com/about",
            }),
          ],
        }),
        m.jsxs("div", {
          className: "bg-neutral-950 min-h-screen",
          children: [
            m.jsx(Pu, { navigate: u, currentPage: "about" }),
            m.jsx("section", {
              className: "pt-32 pb-20 px-6",
              ref: s,
              children: m.jsx("div", {
                className: "max-w-7xl mx-auto",
                children: m.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
                  children: [
                    m.jsxs("div", {
                      className: "space-y-8",
                      children: [
                        m.jsxs("div", {
                          className: "space-y-6",
                          children: [
                            m.jsx("h1", {
                              className:
                                "text-[80px] lg:text-[90px] leading-[0.9] text-white",
                              children: "ABOUT ME",
                            }),
                            m.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                m.jsx("p", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[24px] text-white leading-[1.4]",
                                  children: Hm.intro,
                                }),
                                m.jsx("p", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]",
                                  children: Hm.background,
                                }),
                              ],
                            }),
                          ],
                        }),
                        m.jsxs("div", {
                          className: "flex gap-4 items-center",
                          children: [
                            m.jsxs("button", {
                              onClick: () => u("/resume"),
                              className:
                                "bg-[#d3e97a] rounded-full flex items-center gap-2 px-6 py-3 hover:bg-[#c5db6c] transition-colors",
                              children: [
                                m.jsx("span", {
                                  className:
                                    "font-['Manrope',sans-serif] font-bold text-[14px] text-neutral-950 uppercase",
                                  children: "My Resume",
                                }),
                                m.jsx("svg", {
                                  width: "16",
                                  height: "16",
                                  viewBox: "0 0 16 16",
                                  fill: "none",
                                  children: m.jsx("path", {
                                    d: Le.p23c4ec40,
                                    fill: "#0A0A0A",
                                  }),
                                }),
                              ],
                            }),
                            m.jsx("a", {
                              href: Jn.linkedin,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "hover:opacity-80 transition-opacity",
                              children: m.jsxs("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 26 26",
                                fill: "none",
                                children: [
                                  m.jsx("path", {
                                    d: Le.p282a2240,
                                    fill: "#D3E97A",
                                  }),
                                  m.jsx("path", {
                                    d: Le.p31d7ad00,
                                    fill: "#D3E97A",
                                  }),
                                ],
                              }),
                            }),
                            m.jsx("a", {
                              href: Jn.github,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "hover:opacity-80 transition-opacity",
                              children: m.jsx("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 26 26",
                                fill: "none",
                                children: m.jsx("path", {
                                  clipRule: "evenodd",
                                  d: Le.p17e6c000,
                                  fill: "#D3E97A",
                                  fillRule: "evenodd",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    m.jsx("div", {
                      className: "lg:block",
                      children: m.jsx("div", {
                        className:
                          "bg-[#c7c7c7] rounded-[12px] overflow-hidden",
                        children: m.jsx(gs, {
                          src: I0,
                          alt: We.name,
                          className: "w-full h-auto object-cover",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            m.jsx("section", {
              className: "py-20 px-6",
              ref: o,
              children: m.jsx("div", {
                className: "max-w-7xl mx-auto",
                children: m.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                  children: [
                    m.jsx("div", {
                      children: m.jsx("h2", {
                        className:
                          "text-[64px] lg:text-[76px] text-white leading-[0.9]",
                        children: "MY CAPABILITIES",
                      }),
                    }),
                    m.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        m.jsx("p", {
                          className:
                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]",
                          children:
                            "I am always looking to add more skills.Morbi egestas neque eu blandit fermentum quisque egestas diam in. Nulla pharetra diam sit amet nisl suscipit. Eget nullam non nisi est sit amet facilisis magna etiam.",
                        }),
                        m.jsx("div", {
                          className: "space-y-6",
                          children: Object.entries(n).map(([f, h]) =>
                            m.jsxs(
                              "div",
                              {
                                className: "space-y-3",
                                children: [
                                  m.jsx("h3", {
                                    className:
                                      "font-['Manrope',sans-serif] font-semibold text-[#d3e97a] text-[14px] uppercase",
                                    children: f,
                                  }),
                                  m.jsx("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: h.map((g) => {
                                      const x = g.icon;
                                      return m.jsxs(
                                        "div",
                                        {
                                          className:
                                            "border border-[#484848] px-4 py-2.5 rounded-[4px] inline-flex items-center gap-2 hover:border-[#d3e97a] transition-colors",
                                          children: [
                                            m.jsx(x, {
                                              className:
                                                "size-4 text-[#d3e97a]",
                                            }),
                                            m.jsx("span", {
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
                              f
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            m.jsx("section", {
              className: "py-20 px-6",
              ref: a,
              children: m.jsx("div", {
                className: "max-w-7xl mx-auto",
                children: m.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                  children: [
                    m.jsx("div", {
                      children: m.jsx("h2", {
                        className:
                          "text-[64px] lg:text-[76px] text-white leading-[0.9]",
                        children: "MY EXPERIENCE",
                      }),
                    }),
                    m.jsx("div", {
                      className: "space-y-12",
                      children: r.map((f, h) =>
                        m.jsxs(
                          "div",
                          {
                            className: "space-y-4",
                            children: [
                              m.jsxs("div", {
                                className:
                                  "flex justify-between items-start flex-wrap gap-2",
                                children: [
                                  m.jsxs("div", {
                                    children: [
                                      m.jsx("h3", {
                                        className:
                                          "font-['Manrope',sans-serif] text-white text-[20px]",
                                        children: f.title,
                                      }),
                                      f.company &&
                                        m.jsx("p", {
                                          className:
                                            "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                          children: f.company,
                                        }),
                                    ],
                                  }),
                                  m.jsx("span", {
                                    className:
                                      "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                                    children: f.period,
                                  }),
                                ],
                              }),
                              m.jsx("ul", {
                                className:
                                  "space-y-2 font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.6]",
                                children: f.responsibilities.map((g, x) =>
                                  m.jsxs(
                                    "li",
                                    {
                                      className: "flex items-start gap-2",
                                      children: [
                                        m.jsx("span", {
                                          className: "text-[#d3e97a] mt-1",
                                          children: "•",
                                        }),
                                        m.jsx("span", { children: g }),
                                      ],
                                    },
                                    x
                                  )
                                ),
                              }),
                            ],
                          },
                          h
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
            m.jsx(vg, { ref: d, navigate: u }),
          ],
        }),
      ],
    })
  );
}
console.log("notableProjects: ", Eu);
ln.registerPlugin(je);
function R_({ navigate: u }) {
  const n = Ue.useRef(null);
  return (
    Ue.useEffect(() => {
      const r = n.current;
      r &&
        ln.from(r.children, {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: r,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart none none none",
          },
        });
    }, []),
    m.jsxs(m.Fragment, {
      children: [
        m.jsxs(ju, {
          children: [
            m.jsx("title", {
              children:
                "Projects by Aquib Yazdani - Software Engineer Portfolio",
            }),
            m.jsx("meta", {
              name: "description",
              content:
                "Explore the projects by Aquib Yazdani, including TOI Epaper, Screener for Zamzam Capital, Memorable Mumbai, and more. Showcasing expertise in React, JavaScript, and full-stack development.",
            }),
            m.jsx("meta", {
              name: "keywords",
              content:
                "Aquib Yazdani, Projects, Portfolio, React Developer, JavaScript, Full-Stack Developer, TOI Epaper, Screener, Memorable Mumbai",
            }),
            m.jsx("link", {
              rel: "canonical",
              href: "https://aquibyazdani.com/projects",
            }),
          ],
        }),
        m.jsxs("div", {
          className: "bg-neutral-950 min-h-screen",
          children: [
            m.jsx(Pu, { navigate: u, currentPage: "projects" }),
            m.jsx("section", {
              className: "pt-32 pb-20 px-6",
              children: m.jsx("div", {
                className: "max-w-7xl mx-auto",
                children: m.jsxs("div", {
                  className: "space-y-4 mb-16",
                  children: [
                    m.jsx("h1", {
                      className:
                        "text-[80px] lg:text-[90px] text-white leading-[0.9]",
                      children: "ALL PROJECTS",
                    }),
                    m.jsx("p", {
                      className:
                        "font-['Manrope',sans-serif] text-[#c7c7c7] text-[18px] leading-[1.5] max-w-[600px]",
                      children:
                        "Here's a collection of projects that showcase my passion for front-end development and problem-solving.",
                    }),
                  ],
                }),
              }),
            }),
            m.jsx("section", {
              className: "pb-12 px-6",
              children: m.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [
                  m.jsx("div", {
                    className: "mb-12",
                    children: m.jsx("h2", {
                      className: "text-[56px] text-white leading-[0.9]",
                      children: "NOTABLE PROJECTS",
                    }),
                  }),
                  m.jsx("div", {
                    className: "space-y-20",
                    ref: n,
                    children: Eu.map((r, s) =>
                      m.jsxs(
                        "div",
                        {
                          className: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                            s % 2 === 1 ? "lg:flex-row-reverse" : ""
                          }`,
                          children: [
                            m.jsx("div", {
                              className: `${s % 2 === 1 ? "lg:order-2" : ""}`,
                              children: m.jsxs("div", {
                                className:
                                  "bg-[#1a1a1a] rounded-[12px] aspect-square relative overflow-hidden",
                                children: [
                                  m.jsx(gs, {
                                    src: r.src,
                                    alt: r.title,
                                    className:
                                      "absolute inset-0 w-full h-full object-contain p-12",
                                  }),
                                  m.jsx("div", {
                                    className:
                                      "absolute top-4 left-4 bg-neutral-950 px-4 py-2 rounded-full",
                                    children: m.jsx("span", {
                                      className:
                                        "font-['Manrope',sans-serif] text-white text-[14px]",
                                      children: "Professional",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            m.jsxs("div", {
                              className: `space-y-8 ${
                                s % 2 === 1 ? "lg:order-1" : ""
                              }`,
                              children: [
                                m.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    m.jsx("h3", {
                                      className:
                                        "font-['Manrope',sans-serif] text-[32px] text-white leading-[1.4]",
                                      children: r.title,
                                    }),
                                    m.jsx("div", {
                                      className: "space-y-2",
                                      children: r.achievements
                                        .slice(0, 3)
                                        .map((o, a) =>
                                          m.jsxs(
                                            "p",
                                            {
                                              className:
                                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px] leading-[1.5]",
                                              children: ["• ", o],
                                            },
                                            a
                                          )
                                        ),
                                    }),
                                  ],
                                }),
                                m.jsxs("div", {
                                  className: "space-y-4",
                                  children: [
                                    m.jsx("p", {
                                      className:
                                        "font-['Manrope',sans-serif] font-semibold text-white text-[16px] uppercase",
                                      children: "Project Info",
                                    }),
                                    m.jsxs("div", {
                                      className:
                                        "border-t border-b border-[#484848] divide-y divide-[#484848]",
                                      children: [
                                        m.jsxs("div", {
                                          className:
                                            "flex justify-between py-4",
                                          children: [
                                            m.jsx("span", {
                                              className:
                                                "font-['Manrope',sans-serif] text-white text-[16px]",
                                              children: "Role",
                                            }),
                                            m.jsx("span", {
                                              className:
                                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                              children: r.role,
                                            }),
                                          ],
                                        }),
                                        m.jsxs("div", {
                                          className:
                                            "flex justify-between py-4",
                                          children: [
                                            m.jsx("span", {
                                              className:
                                                "font-['Manrope',sans-serif] text-white text-[16px]",
                                              children: "Tech Stack",
                                            }),
                                            m.jsx("span", {
                                              className:
                                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[16px]",
                                              children: r.techStack
                                                .slice(0, 3)
                                                .join(", "),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                m.jsxs("div", {
                                  className: "flex gap-6 flex-wrap",
                                  children: [
                                    r.title === "Screener - Zamzam Capital" &&
                                      m.jsxs("a", {
                                        href: "https://screener.zamzam-capital.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "group inline-flex flex-col gap-1",
                                        children: [
                                          m.jsxs("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              m.jsx("span", {
                                                className:
                                                  "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase",
                                                children: "Live Demo",
                                              }),
                                              m.jsx("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: m.jsx("path", {
                                                  d: Le.p3589c00,
                                                  fill: "#D3E97A",
                                                }),
                                              }),
                                            ],
                                          }),
                                          m.jsx("div", {
                                            className:
                                              "h-[2px] w-full bg-[#d3e97a]",
                                          }),
                                        ],
                                      }),
                                    r.title === "TOI Epaper (Times of India)" &&
                                      m.jsxs("a", {
                                        href: "https://epaper.indiatimes.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "group inline-flex flex-col gap-1",
                                        children: [
                                          m.jsxs("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              m.jsx("span", {
                                                className:
                                                  "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase",
                                                children: "Live Demo",
                                              }),
                                              m.jsx("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: m.jsx("path", {
                                                  d: Le.p3589c00,
                                                  fill: "#D3E97A",
                                                }),
                                              }),
                                            ],
                                          }),
                                          m.jsx("div", {
                                            className:
                                              "h-[2px] w-full bg-[#d3e97a]",
                                          }),
                                        ],
                                      }),
                                    r.title === "Libsi Markah E-commerce" &&
                                      m.jsxs("a", {
                                        href: "https://libsimarkah.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                          "group inline-flex flex-col gap-1",
                                        children: [
                                          m.jsxs("div", {
                                            className:
                                              "flex items-center gap-1",
                                            children: [
                                              m.jsx("span", {
                                                className:
                                                  "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase",
                                                children: "Live Demo",
                                              }),
                                              m.jsx("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                children: m.jsx("path", {
                                                  d: Le.p3589c00,
                                                  fill: "#D3E97A",
                                                }),
                                              }),
                                            ],
                                          }),
                                          m.jsx("div", {
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
                        r.id
                      )
                    ),
                  }),
                ],
              }),
            }),
            m.jsx("section", {
              className: "pb-20 px-6",
              children: m.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [
                  m.jsx("div", {
                    className: "mb-12",
                    children: m.jsx("h2", {
                      className: "text-[56px] text-white leading-[0.9]",
                      children: "PERSONAL PROJECTS",
                    }),
                  }),
                  m.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: kd.map((r) =>
                      m.jsxs(
                        "div",
                        {
                          className:
                            "bg-[#1a1a1a] rounded-[12px] overflow-hidden group hover:bg-[#222222] transition-colors",
                          children: [
                            m.jsx("div", {
                              className:
                                "aspect-video relative overflow-hidden bg-[#0a0a0a]",
                              children: m.jsx(gs, {
                                src: r.src,
                                alt: r.title,
                                className:
                                  "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                              }),
                            }),
                            m.jsxs("div", {
                              className: "p-6 space-y-4",
                              children: [
                                m.jsx("h3", {
                                  className:
                                    "font-['Manrope',sans-serif] text-[24px] text-white leading-[1.4]",
                                  children: r.title,
                                }),
                                r.url !== "#" &&
                                  m.jsxs("a", {
                                    href: r.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "group inline-flex flex-col gap-1",
                                    children: [
                                      m.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          m.jsx("span", {
                                            className:
                                              "font-['Manrope',sans-serif] font-bold text-[#d3e97a] text-[14px] uppercase",
                                            children: "View Project",
                                          }),
                                          m.jsx("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: m.jsx("path", {
                                              d: Le.p3589c00,
                                              fill: "#D3E97A",
                                            }),
                                          }),
                                        ],
                                      }),
                                      m.jsx("div", {
                                        className:
                                          "h-[2px] w-full bg-[#d3e97a]",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        },
                        r.id
                      )
                    ),
                  }),
                ],
              }),
            }),
            m.jsx("section", {
              className: "py-20 px-6 border-t border-[#484848]",
              children: m.jsx("div", {
                className: "max-w-7xl mx-auto text-center",
                children: m.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    m.jsx("h2", {
                      className:
                        "text-[64px] lg:text-[76px] text-white leading-[0.9]",
                      children: "INTERESTED IN WORKING TOGETHER?",
                    }),
                    m.jsxs("button", {
                      onClick: () => u("/"),
                      className:
                        "inline-flex bg-[#d3e97a] rounded-full items-center gap-3 pl-6 pr-2 py-3 h-[54px] hover:bg-[#c5db6c] transition-colors cursor-pointer",
                      children: [
                        m.jsx("span", {
                          className:
                            "font-['Manrope',sans-serif] font-bold text-[16px] text-neutral-950 uppercase",
                          children: "Get in Touch",
                        }),
                        m.jsx("div", {
                          className:
                            "size-[42px] bg-neutral-950 rounded-full flex items-center justify-center",
                          children: m.jsx("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            children: m.jsx("path", {
                              d: Le.p23c4ec40,
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
            m.jsx("footer", {
              className: "py-8 px-6 border-t border-[#484848]",
              children: m.jsxs("div", {
                className:
                  "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",
                children: [
                  m.jsx("p", {
                    className:
                      "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                    children: We.copyright,
                  }),
                  m.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      m.jsx("a", {
                        href: Jn.linkedin,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-80 transition-opacity",
                        children: m.jsxs("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 26 26",
                          fill: "none",
                          children: [
                            m.jsx("path", { d: Le.p282a2240, fill: "#D3E97A" }),
                            m.jsx("path", { d: Le.p31d7ad00, fill: "#D3E97A" }),
                          ],
                        }),
                      }),
                      m.jsx("a", {
                        href: Jn.github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-80 transition-opacity",
                        children: m.jsx("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 26 26",
                          fill: "none",
                          children: m.jsx("path", {
                            clipRule: "evenodd",
                            d: Le.p17e6c000,
                            fill: "#D3E97A",
                            fillRule: "evenodd",
                          }),
                        }),
                      }),
                      m.jsx("a", {
                        href: Jn.instagram,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:opacity-80 transition-opacity",
                        children: m.jsxs("svg", {
                          width: "24",
                          height: "24",
                          viewBox: "0 0 32 32",
                          fill: "none",
                          children: [
                            m.jsx("path", { d: Le.p8ca3400, fill: "#D3E97A" }),
                            m.jsx("path", { d: Le.p5548000, fill: "#D3E97A" }),
                            m.jsx("path", { d: Le.p374be072, fill: "#D3E97A" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
const O_ = () => {
    const u = new Date(We.careerStartDate),
      n = new Date();
    let r = n.getFullYear() - u.getFullYear(),
      s = n.getMonth() - u.getMonth();
    return s < 0 && (r--, (s += 12)), { years: r, months: s };
  },
  { years: j0, months: E0 } = O_(),
  D_ = E0 > 0 ? `${j0} years and ${E0} months` : `${j0} years`,
  z_ = [
    { title: "Frontend Development", items: Ut.frontend },
    { title: "State Management", items: Ut.stateManagement },
    { title: "Testing & QA", items: Ut.testing },
    { title: "Performance Optimization", items: Ut.performance },
    { title: "API Integration", items: Ut.api },
    { title: "Version Control & Collaboration", items: Ut.tools },
  ],
  A_ = () => {
    const u = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${We.name} - Resume</title>
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
        <div class="name">${We.name.toUpperCase()}</div>
        <div class="title">${We.title}</div>
      </div>
      <div class="contact-info">
        <div><a href="mailto:${We.email}">${We.email}</a></div>
        <div>${We.phone}</div>
        <div>${We.location}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">Profile</div>
      <div class="section-content">
        Front End Engineer with ${D_} of experience building high-performance web and mobile applications. Proficient in React, JavaScript (ES6+), HTML, and CSS, with a strong focus on optimizing user experience and front-end performance. Adept at developing scalable, responsive interfaces using modern frameworks like Next.js, Redux Toolkit, and React Native. Proven track record of improving application speed, accessibility, and maintainability. Collaborative team player experienced in Agile environments, consistently delivering user-centric solutions that drive business impact in fast-paced product teams.
      </div>
    </div>

    <div class="section">
      <div class="section-title">Skills</div>
      ${z_
        .map(
          (o) => `
        <div class="skill-category">
          <div class="skill-category-title">${o.title}</div>
          <div class="skills-list">
            ${o.items
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
        ${B0.map(
          (o) => `
          <div class="education-item">
            <div class="institution">${o.institution}</div>
            <div class="degree">${o.degree}</div>
            <div class="edu-period">${o.period}</div>
          </div>
        `
        ).join("")}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Notable Projects</div>
      ${Eu.map(
        (o) => `
        <div class="project-item">
          <div class="project-title">${o.title}</div>
          <div class="project-role">${o.role}</div>
          <div class="tech-stack">
            ${o.techStack
              .map((a) => `<span class="tech-tag">${a}</span>`)
              .join("")}
          </div>
          <ul class="responsibilities">
            ${o.achievements.map((a) => `<li>${a}</li>`).join("")}
          </ul>
        </div>
      `
      ).join("")}
    </div>

    <div class="section">
      <div class="section-title">Personal Projects</div>
      <div class="personal-projects">
        ${kd
          .map(
            (o) => `
          <a href="${o.url}" class="project-link" target="_blank" rel="noopener noreferrer">${o.title}</a>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="section">
      <div class="section-title">Work Experience</div>
      ${pu
        .map(
          (o) => `
        <div class="experience-item">
          <div class="experience-header">
            <div>
              <div class="job-title">${o.title}</div>
              <div class="company-info">${o.company} | ${o.location}</div>
            </div>
            <div class="period">${o.period}</div>
          </div>
          <ul class="responsibilities">
            ${o.responsibilities.map((a) => `<li>${a}</li>`).join("")}
          </ul>
        </div>
      `
        )
        .join("")}
    </div>

    <div class="section">
      <div class="section-title">Achievements</div>
      ${H0.map(
        (o) => `
        <div class="achievement-item">
          <div class="achievement-bullet"></div>
          <div class="achievement-text">${o}</div>
        </div>
      `
      ).join("")}
    </div>

    <div class="section">
      <div class="section-title">References</div>
      <div class="references-grid">
        ${V0.map(
          (o) => `
          <div class="reference-item">
            <div class="reference-name">${o.name}</div>
            <div class="reference-position">${o.company} / ${o.position}</div>
            <div class="reference-contact">
              <div>${o.phone}</div>
              <div>${o.email}</div>
            </div>
          </div>
        `
        ).join("")}
      </div>
    </div>
  </div>
</body>
</html>`,
      n = new Blob([u], { type: "text/html" }),
      r = URL.createObjectURL(n),
      s = document.createElement("a");
    (s.href = r),
      (s.download = `${We.name.replace(/\s+/g, "_")}_Resume.html`),
      document.body.appendChild(s),
      s.click(),
      document.body.removeChild(s),
      URL.revokeObjectURL(r);
  };
ln.registerPlugin(je);
function I_({ navigate: u }) {
  const n = Ue.useRef(null);
  Ue.useEffect(() => {
    const f = n.current;
    f &&
      ln.from(f, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: f,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "restart none none none",
        },
      });
  }, []);
  const r = () => {
      const f = new Date(We.careerStartDate),
        h = new Date();
      let g = h.getFullYear() - f.getFullYear(),
        x = h.getMonth() - f.getMonth();
      return x < 0 && (g--, (x += 12)), { years: g, months: x };
    },
    { years: s, months: o } = r(),
    a = o > 0 ? `${s} years and ${o} months` : `${s} years`,
    d = [
      { title: "Frontend Development", items: Ut.frontend },
      { title: "State Management", items: Ut.stateManagement },
      { title: "Testing & QA", items: Ut.testing },
      { title: "Performance Optimization", items: Ut.performance },
      { title: "API Integration", items: Ut.api },
      { title: "Version Control & Collaboration", items: Ut.tools },
    ];
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs(ju, {
        children: [
          m.jsx("title", {
            children: "Aquib Yazdani Resume - Senior Software Engineer",
          }),
          m.jsx("meta", {
            name: "description",
            content:
              "Download the resume of Aquib Yazdani, Senior Software Engineer with expertise in React, JavaScript, and full-stack development. 5+ years of experience in frontend engineering.",
          }),
          m.jsx("meta", {
            name: "keywords",
            content:
              "Aquib Yazdani, Resume, CV, Senior Software Engineer, React Developer, JavaScript, Full-Stack Developer",
          }),
          m.jsx("link", {
            rel: "canonical",
            href: "https://aquibyazdani.com/resume",
          }),
        ],
      }),
      m.jsxs("div", {
        className: "bg-neutral-950 min-h-screen",
        children: [
          m.jsx(Pu, { navigate: u, currentPage: "resume" }),
          m.jsx("div", {
            className: "pt-32 pb-20 px-6",
            children: m.jsxs("div", {
              className: "max-w-6xl mx-auto",
              children: [
                m.jsx("div", {
                  className: "flex justify-end mb-8",
                  children: m.jsxs("button", {
                    className:
                      "inline-flex items-center gap-2 bg-[#d3e97a] text-neutral-950 px-6 py-3 rounded-full hover:bg-[#c5db6c] transition-colors",
                    onClick: A_,
                    children: [
                      m.jsx(Zx, { className: "size-4" }),
                      m.jsx("span", {
                        className:
                          "font-['Manrope',sans-serif] font-bold text-[14px] uppercase",
                        children: "Download Resume",
                      }),
                    ],
                  }),
                }),
                m.jsx("div", {
                  className:
                    "bg-[#1a1a1a] rounded-[20px] overflow-hidden shadow-2xl",
                  ref: n,
                  children: m.jsxs("div", {
                    className: "p-8 lg:p-10 space-y-6",
                    children: [
                      m.jsxs("div", {
                        className:
                          "flex items-start justify-between gap-8 pb-4 border-b-2 border-[#d3e97a]",
                        children: [
                          m.jsxs("div", {
                            className: "space-y-1",
                            children: [
                              m.jsx("h1", {
                                className:
                                  "text-[48px] text-white leading-[0.9]",
                                children: We.name.toUpperCase(),
                              }),
                              m.jsx("p", {
                                className:
                                  "font-['Manrope',sans-serif] text-[#d3e97a] text-[18px]",
                                children: We.title,
                              }),
                            ],
                          }),
                          m.jsxs("div", {
                            className: "space-y-1.5 pt-1",
                            children: [
                              m.jsxs("div", {
                                className:
                                  "flex items-center gap-2 justify-end",
                                children: [
                                  m.jsx(Fm, {
                                    className: "size-3.5 text-[#d3e97a]",
                                  }),
                                  m.jsx("a", {
                                    href: `mailto:${We.email}`,
                                    className:
                                      "font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7] hover:text-white",
                                    children: We.email,
                                  }),
                                ],
                              }),
                              m.jsxs("div", {
                                className:
                                  "flex items-center gap-2 justify-end",
                                children: [
                                  m.jsx(Bm, {
                                    className: "size-3.5 text-[#d3e97a]",
                                  }),
                                  m.jsx("span", {
                                    className:
                                      "font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7]",
                                    children: We.phone,
                                  }),
                                ],
                              }),
                              m.jsxs("div", {
                                className:
                                  "flex items-center gap-2 justify-end",
                                children: [
                                  m.jsx(py, {
                                    className: "size-3.5 text-[#d3e97a]",
                                  }),
                                  m.jsx("span", {
                                    className:
                                      "font-['Manrope',sans-serif] text-[12px] text-[#c7c7c7]",
                                    children: We.location,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-2.5",
                        children: [
                          m.jsx("h2", {
                            className:
                              "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                            children: "Profile",
                          }),
                          m.jsxs("p", {
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
                      m.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          m.jsx("h2", {
                            className:
                              "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                            children: "Skills",
                          }),
                          d.map((f) =>
                            m.jsxs(
                              "div",
                              {
                                className: "space-y-1.5",
                                children: [
                                  m.jsx("h3", {
                                    className:
                                      "font-['Manrope',sans-serif] font-semibold text-white text-[12px]",
                                    children: f.title,
                                  }),
                                  m.jsx("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: f.items.map((h) => {
                                      const g = h.icon;
                                      return m.jsxs(
                                        "span",
                                        {
                                          className:
                                            "font-['Manrope',sans-serif] text-[11px] text-[#2a4a4a] bg-[#d3e97a] px-3 py-1.5 rounded-md inline-flex items-center gap-1.5",
                                          children: [
                                            m.jsx(g, { className: "size-3" }),
                                            h.name,
                                          ],
                                        },
                                        h.name
                                      );
                                    }),
                                  }),
                                ],
                              },
                              f.title
                            )
                          ),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-2.5",
                        children: [
                          m.jsx("h2", {
                            className:
                              "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                            children: "Education",
                          }),
                          m.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: B0.map((f) =>
                              m.jsxs(
                                "div",
                                {
                                  className: "space-y-0.5",
                                  children: [
                                    m.jsx("h4", {
                                      className:
                                        "font-['Manrope',sans-serif] font-semibold text-white text-[13px]",
                                      children: f.institution,
                                    }),
                                    m.jsx("p", {
                                      className:
                                        "font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]",
                                      children: f.degree,
                                    }),
                                    m.jsx("p", {
                                      className:
                                        "font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]",
                                      children: f.period,
                                    }),
                                  ],
                                },
                                f.id
                              )
                            ),
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          m.jsx("h2", {
                            className:
                              "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                            children: "Notable Projects",
                          }),
                          m.jsx("div", {
                            className: "space-y-4",
                            children: Eu.map((f) =>
                              m.jsxs(
                                "div",
                                {
                                  className:
                                    "bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2",
                                  children: [
                                    m.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        m.jsx("h3", {
                                          className:
                                            "font-['Manrope',sans-serif] font-semibold text-white text-[14px]",
                                          children: f.title,
                                        }),
                                        m.jsx("p", {
                                          className:
                                            "font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]",
                                          children: f.role,
                                        }),
                                      ],
                                    }),
                                    m.jsx("div", {
                                      className: "flex flex-wrap gap-1.5",
                                      children: f.techStack.map((h, g) =>
                                        m.jsx(
                                          "span",
                                          {
                                            className:
                                              "font-['Manrope',sans-serif] text-[10px] text-[#2a4a4a] bg-[#d3e97a] px-2.5 py-1 rounded-md",
                                            children: h,
                                          },
                                          g
                                        )
                                      ),
                                    }),
                                    m.jsx("ul", {
                                      className:
                                        "space-y-1 font-['Manrope',sans-serif] text-[#c7c7c7] text-[11px]",
                                      children: f.achievements.map((h, g) =>
                                        m.jsxs(
                                          "li",
                                          {
                                            className: "flex items-start gap-2",
                                            children: [
                                              m.jsx("span", {
                                                className:
                                                  "text-[#d3e97a] mt-0.5",
                                                children: "•",
                                              }),
                                              m.jsx("span", { children: h }),
                                            ],
                                          },
                                          g
                                        )
                                      ),
                                    }),
                                  ],
                                },
                                f.id
                              )
                            ),
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          m.jsx("h2", {
                            className:
                              "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                            children: "Personal Projects",
                          }),
                          m.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: kd.map((f) =>
                              m.jsx(
                                "a",
                                {
                                  href: f.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "font-['Manrope',sans-serif] text-[12px] text-white bg-[#1a1a1a]/50 px-4 py-2 rounded-lg border border-[#d3e97a]/20 hover:bg-[#d3e97a]/10 hover:border-[#d3e97a] transition-all duration-300 cursor-pointer",
                                  children: f.title,
                                },
                                f.id
                              )
                            ),
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          m.jsx("h2", {
                            className:
                              "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                            children: "Work Experience",
                          }),
                          m.jsxs("div", {
                            className: "relative pl-8",
                            children: [
                              m.jsx("div", {
                                className:
                                  "absolute left-[14px] top-3 bottom-3 w-[2px] bg-[#d3e97a]/30",
                              }),
                              pu.map((f, h) =>
                                m.jsxs(
                                  "div",
                                  {
                                    className: `relative ${
                                      h < pu.length - 1 ? "pb-6" : ""
                                    }`,
                                    children: [
                                      m.jsx("div", {
                                        className:
                                          "absolute left-[-25px] top-2 w-4 h-4 rounded-full bg-[#d3e97a] border-4 border-[#1a1a1a]",
                                      }),
                                      m.jsxs("div", {
                                        className:
                                          "bg-[#1a1a1a]/50 p-4 rounded-lg space-y-2",
                                        children: [
                                          m.jsxs("div", {
                                            className:
                                              "flex items-start justify-between gap-4",
                                            children: [
                                              m.jsxs("div", {
                                                className: "space-y-0.5 flex-1",
                                                children: [
                                                  m.jsx("h3", {
                                                    className:
                                                      "font-['Manrope',sans-serif] font-semibold text-white text-[15px]",
                                                    children: f.title,
                                                  }),
                                                  m.jsxs("p", {
                                                    className:
                                                      "font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px]",
                                                    children: [
                                                      f.company,
                                                      " | ",
                                                      f.location,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              m.jsx("span", {
                                                className:
                                                  "font-['Manrope',sans-serif] text-[#d3e97a] text-[11px] whitespace-nowrap bg-[#d3e97a]/10 px-2.5 py-1 rounded-md",
                                                children: f.period,
                                              }),
                                            ],
                                          }),
                                          m.jsx("ul", {
                                            className:
                                              "space-y-1 font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px]",
                                            children: f.responsibilities.map(
                                              (g, x) =>
                                                m.jsxs(
                                                  "li",
                                                  {
                                                    className:
                                                      "flex items-start gap-2",
                                                    children: [
                                                      m.jsx("span", {
                                                        className:
                                                          "text-[#d3e97a] mt-0.5",
                                                        children: "•",
                                                      }),
                                                      m.jsx("span", {
                                                        children: g,
                                                      }),
                                                    ],
                                                  },
                                                  x
                                                )
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  f.id
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          m.jsx("h2", {
                            className:
                              "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                            children: "Achievements",
                          }),
                          m.jsx("div", {
                            className: "space-y-1",
                            children: H0.map((f, h) =>
                              m.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-start gap-3 bg-[#1a1a1a]/50 p-3 rounded-lg",
                                  children: [
                                    m.jsx("div", {
                                      className:
                                        "w-2 h-2 rounded-full bg-[#d3e97a] mt-1.5 flex-shrink-0",
                                    }),
                                    m.jsx("p", {
                                      className:
                                        "font-['Manrope',sans-serif] text-[#c7c7c7] text-[12px] leading-[1.6]",
                                      children: f,
                                    }),
                                  ],
                                },
                                h
                              )
                            ),
                          }),
                        ],
                      }),
                      m.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          m.jsx("h2", {
                            className:
                              "font-['Manrope',sans-serif] font-bold text-white text-[16px] uppercase text-[#d3e97a] border-b border-[#d3e97a]/30 pb-1.5",
                            children: "References",
                          }),
                          m.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: V0.map((f) =>
                              m.jsxs(
                                "div",
                                {
                                  className:
                                    "bg-[#1a1a1a]/50 p-4 rounded-lg space-y-1",
                                  children: [
                                    m.jsx("h4", {
                                      className:
                                        "font-['Manrope',sans-serif] font-semibold text-white text-[13px]",
                                      children: f.name,
                                    }),
                                    m.jsxs("p", {
                                      className:
                                        "font-['Manrope',sans-serif] text-[#d3e97a] text-[11px]",
                                      children: [f.company, " / ", f.position],
                                    }),
                                    m.jsxs("div", {
                                      className: "pt-2 space-y-1",
                                      children: [
                                        m.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            m.jsx("div", {
                                              className:
                                                "w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center",
                                              children: m.jsx(Bm, {
                                                className:
                                                  "size-2.5 text-[#d3e97a]",
                                              }),
                                            }),
                                            m.jsx("p", {
                                              className:
                                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[10px]",
                                              children: f.phone,
                                            }),
                                          ],
                                        }),
                                        m.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            m.jsx("div", {
                                              className:
                                                "w-5 h-5 rounded-md bg-[#d3e97a]/10 flex items-center justify-center",
                                              children: m.jsx(Fm, {
                                                className:
                                                  "size-2.5 text-[#d3e97a]",
                                              }),
                                            }),
                                            m.jsx("p", {
                                              className:
                                                "font-['Manrope',sans-serif] text-[#c7c7c7] text-[10px]",
                                              children: f.email,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                f.id
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
          m.jsx("footer", {
            className: "py-8 px-6 border-t border-[#484848]",
            children: m.jsxs("div", {
              className:
                "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4",
              children: [
                m.jsx("p", {
                  className:
                    "font-['Manrope',sans-serif] text-[#c7c7c7] text-[14px]",
                  children: We.copyright,
                }),
                m.jsx("button", {
                  onClick: () => u("/"),
                  className:
                    "font-['Manrope',sans-serif] text-[#d3e97a] text-[14px] hover:text-white transition-colors",
                  children: "Back to Home",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function L_() {
  const [u, n] = Ue.useState("home");
  Ue.useEffect(() => {
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
    const o = () => {
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
      window.addEventListener("hashchange", o),
      () => window.removeEventListener("hashchange", o)
    );
  }, []),
    Ue.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [u]);
  const r = (s) => {
    window.location.hash = s;
  };
  return u === "about"
    ? m.jsx(b_, { navigate: r })
    : u === "projects"
    ? m.jsx(R_, { navigate: r })
    : u === "resume"
    ? m.jsx(I_, { navigate: r })
    : m.jsx(M_, { navigate: r });
}
cx.createRoot(document.getElementById("root")).render(
  m.jsx(z0, { children: m.jsx(L_, {}) })
);
