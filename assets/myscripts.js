(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();

function a0(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var lf = {
        exports: {}
    },
    bo = {},
    af = {
        exports: {}
    },
    _ = {};
var di = Symbol.for("react.element"),
    u0 = Symbol.for("react.portal"),
    c0 = Symbol.for("react.fragment"),
    d0 = Symbol.for("react.strict_mode"),
    f0 = Symbol.for("react.profiler"),
    h0 = Symbol.for("react.provider"),
    p0 = Symbol.for("react.context"),
    m0 = Symbol.for("react.forward_ref"),
    g0 = Symbol.for("react.suspense"),
    v0 = Symbol.for("react.memo"),
    y0 = Symbol.for("react.lazy"),
    Mu = Symbol.iterator;

function x0(e) {
    return e === null || typeof e != "object" ? null : (e = Mu && e[Mu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var uf = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    cf = Object.assign,
    df = {};

function sr(e, t, n) {
    this.props = e, this.context = t, this.refs = df, this.updater = n || uf
}
sr.prototype.isReactComponent = {};
sr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
sr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ff() {}
ff.prototype = sr.prototype;

function oa(e, t, n) {
    this.props = e, this.context = t, this.refs = df, this.updater = n || uf
}
var sa = oa.prototype = new ff;
sa.constructor = oa;
cf(sa, sr.prototype);
sa.isPureReactComponent = !0;
var zu = Array.isArray,
    hf = Object.prototype.hasOwnProperty,
    la = {
        current: null
    },
    pf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function mf(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) hf.call(t, r) && !pf.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: di,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: la.current
    }
}

function w0(e, t) {
    return {
        $$typeof: di,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function aa(e) {
    return typeof e == "object" && e !== null && e.$$typeof === di
}

function S0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Au = /\/+/g;

function us(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? S0("" + e.key) : t.toString(36)
}

function Ui(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case di:
                case u0:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + us(s, 0) : r, zu(i) ? (n = "", e != null && (n = e.replace(Au, "$&/") + "/"), Ui(i, t, n, "", function(u) {
        return u
    })) : i != null && (aa(i) && (i = w0(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Au, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", zu(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + us(o, l);
            s += Ui(o, t, n, a, i)
        } else if (a = x0(e), typeof a == "function")
            for (e = a.call(e), l = 0; !(o = e.next()).done;) o = o.value, a = r + us(o, l++), s += Ui(o, t, n, a, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function Si(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Ui(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function k0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Pe = {
        current: null
    },
    Hi = {
        transition: null
    },
    C0 = {
        ReactCurrentDispatcher: Pe,
        ReactCurrentBatchConfig: Hi,
        ReactCurrentOwner: la
    };

function gf() {
    throw Error("act(...) is not supported in production builds of React.")
}
_.Children = {
    map: Si,
    forEach: function(e, t, n) {
        Si(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Si(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Si(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!aa(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
_.Component = sr;
_.Fragment = c0;
_.Profiler = f0;
_.PureComponent = oa;
_.StrictMode = d0;
_.Suspense = g0;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C0;
_.act = gf;
_.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = cf({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = la.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) hf.call(t, a) && !pf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: di,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
};
_.createContext = function(e) {
    return e = {
        $$typeof: p0,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: h0,
        _context: e
    }, e.Consumer = e
};
_.createElement = mf;
_.createFactory = function(e) {
    var t = mf.bind(null, e);
    return t.type = e, t
};
_.createRef = function() {
    return {
        current: null
    }
};
_.forwardRef = function(e) {
    return {
        $$typeof: m0,
        render: e
    }
};
_.isValidElement = aa;
_.lazy = function(e) {
    return {
        $$typeof: y0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: k0
    }
};
_.memo = function(e, t) {
    return {
        $$typeof: v0,
        type: e,
        compare: t === void 0 ? null : t
    }
};
_.startTransition = function(e) {
    var t = Hi.transition;
    Hi.transition = {};
    try {
        e()
    } finally {
        Hi.transition = t
    }
};
_.unstable_act = gf;
_.useCallback = function(e, t) {
    return Pe.current.useCallback(e, t)
};
_.useContext = function(e) {
    return Pe.current.useContext(e)
};
_.useDebugValue = function() {};
_.useDeferredValue = function(e) {
    return Pe.current.useDeferredValue(e)
};
_.useEffect = function(e, t) {
    return Pe.current.useEffect(e, t)
};
_.useId = function() {
    return Pe.current.useId()
};
_.useImperativeHandle = function(e, t, n) {
    return Pe.current.useImperativeHandle(e, t, n)
};
_.useInsertionEffect = function(e, t) {
    return Pe.current.useInsertionEffect(e, t)
};
_.useLayoutEffect = function(e, t) {
    return Pe.current.useLayoutEffect(e, t)
};
_.useMemo = function(e, t) {
    return Pe.current.useMemo(e, t)
};
_.useReducer = function(e, t, n) {
    return Pe.current.useReducer(e, t, n)
};
_.useRef = function(e) {
    return Pe.current.useRef(e)
};
_.useState = function(e) {
    return Pe.current.useState(e)
};
_.useSyncExternalStore = function(e, t, n) {
    return Pe.current.useSyncExternalStore(e, t, n)
};
_.useTransition = function() {
    return Pe.current.useTransition()
};
_.version = "18.3.1";
af.exports = _;
var E = af.exports;
const hn = a0(E);
var P0 = E,
    T0 = Symbol.for("react.element"),
    E0 = Symbol.for("react.fragment"),
    j0 = Object.prototype.hasOwnProperty,
    N0 = P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    M0 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function vf(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) j0.call(t, r) && !M0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: T0,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: N0.current
    }
}
bo.Fragment = E0;
bo.jsx = vf;
bo.jsxs = vf;
lf.exports = bo;
var f = lf.exports,
    yf = {
        exports: {}
    },
    be = {},
    xf = {
        exports: {}
    },
    wf = {};
(function(e) {
    function t(j, A) {
        var R = j.length;
        j.push(A);
        e: for (; 0 < R;) {
            var F = R - 1 >>> 1,
                ae = j[F];
            if (0 < i(ae, A)) j[F] = A, j[R] = ae, R = F;
            else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var A = j[0],
            R = j.pop();
        if (R !== A) {
            j[0] = R;
            e: for (var F = 0, ae = j.length, xi = ae >>> 1; F < xi;) {
                var tn = 2 * (F + 1) - 1,
                    as = j[tn],
                    nn = tn + 1,
                    wi = j[nn];
                if (0 > i(as, R)) nn < ae && 0 > i(wi, as) ? (j[F] = wi, j[nn] = R, F = nn) : (j[F] = as, j[tn] = R, F = tn);
                else if (nn < ae && 0 > i(wi, R)) j[F] = wi, j[nn] = R, F = nn;
                else break e
            }
        }
        return A
    }

    function i(j, A) {
        var R = j.sortIndex - A.sortIndex;
        return R !== 0 ? R : j.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = [],
        u = [],
        c = 1,
        d = null,
        h = 3,
        v = !1,
        y = !1,
        x = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(j) {
        for (var A = n(u); A !== null;) {
            if (A.callback === null) r(u);
            else if (A.startTime <= j) r(u), A.sortIndex = A.expirationTime, t(a, A);
            else break;
            A = n(u)
        }
    }

    function w(j) {
        if (x = !1, g(j), !y)
            if (n(a) !== null) y = !0, ct(k);
            else {
                var A = n(u);
                A !== null && te(w, A.startTime - j)
            }
    }

    function k(j, A) {
        y = !1, x && (x = !1, m(P), P = -1), v = !0;
        var R = h;
        try {
            for (g(A), d = n(a); d !== null && (!(d.expirationTime > A) || j && !ee());) {
                var F = d.callback;
                if (typeof F == "function") {
                    d.callback = null, h = d.priorityLevel;
                    var ae = F(d.expirationTime <= A);
                    A = e.unstable_now(), typeof ae == "function" ? d.callback = ae : d === n(a) && r(a), g(A)
                } else r(a);
                d = n(a)
            }
            if (d !== null) var xi = !0;
            else {
                var tn = n(u);
                tn !== null && te(w, tn.startTime - A), xi = !1
            }
            return xi
        } finally {
            d = null, h = R, v = !1
        }
    }
    var T = !1,
        N = null,
        P = -1,
        D = 5,
        z = -1;

    function ee() {
        return !(e.unstable_now() - z < D)
    }

    function O() {
        if (N !== null) {
            var j = e.unstable_now();
            z = j;
            var A = !0;
            try {
                A = N(!0, j)
            } finally {
                A ? tt() : (T = !1, N = null)
            }
        } else T = !1
    }
    var tt;
    if (typeof p == "function") tt = function() {
        p(O)
    };
    else if (typeof MessageChannel < "u") {
        var nt = new MessageChannel,
            dr = nt.port2;
        nt.port1.onmessage = O, tt = function() {
            dr.postMessage(null)
        }
    } else tt = function() {
        S(O, 0)
    };

    function ct(j) {
        N = j, T || (T = !0, tt())
    }

    function te(j, A) {
        P = S(function() {
            j(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
        j.callback = null
    }, e.unstable_continueExecution = function() {
        y || v || (y = !0, ct(k))
    }, e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(j) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var A = 3;
                break;
            default:
                A = h
        }
        var R = h;
        h = A;
        try {
            return j()
        } finally {
            h = R
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, A) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var R = h;
        h = j;
        try {
            return A()
        } finally {
            h = R
        }
    }, e.unstable_scheduleCallback = function(j, A, R) {
        var F = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? F + R : F) : R = F, j) {
            case 1:
                var ae = -1;
                break;
            case 2:
                ae = 250;
                break;
            case 5:
                ae = 1073741823;
                break;
            case 4:
                ae = 1e4;
                break;
            default:
                ae = 5e3
        }
        return ae = R + ae, j = {
            id: c++,
            callback: A,
            priorityLevel: j,
            startTime: R,
            expirationTime: ae,
            sortIndex: -1
        }, R > F ? (j.sortIndex = R, t(u, j), n(a) === null && j === n(u) && (x ? (m(P), P = -1) : x = !0, te(w, R - F))) : (j.sortIndex = ae, t(a, j), y || v || (y = !0, ct(k))), j
    }, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function(j) {
        var A = h;
        return function() {
            var R = h;
            h = A;
            try {
                return j.apply(this, arguments)
            } finally {
                h = R
            }
        }
    }
})(wf);
xf.exports = wf;
var z0 = xf.exports;
var A0 = E,
    De = z0;

function C(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Sf = new Set,
    Ur = {};

function kn(e, t) {
    Yn(e, t), Yn(e + "Capture", t)
}

function Yn(e, t) {
    for (Ur[e] = t, e = 0; e < t.length; e++) Sf.add(t[e])
}
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ys = Object.prototype.hasOwnProperty,
    L0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Lu = {},
    Ru = {};

function R0(e) {
    return Ys.call(Ru, e) ? !0 : Ys.call(Lu, e) ? !1 : L0.test(e) ? Ru[e] = !0 : (Lu[e] = !0, !1)
}

function V0(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function D0(e, t, n, r) {
    if (t === null || typeof t > "u" || V0(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Te(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    pe[e] = new Te(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    pe[t] = new Te(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    pe[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    pe[e] = new Te(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    pe[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    pe[e] = new Te(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    pe[e] = new Te(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    pe[e] = new Te(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    pe[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ua = /[\-:]([a-z])/g;

function ca(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ua, ca);
    pe[t] = new Te(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ua, ca);
    pe[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ua, ca);
    pe[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    pe[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
pe.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    pe[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function da(e, t, n, r) {
    var i = pe.hasOwnProperty(t) ? pe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (D0(t, n, i, r) && (n = null), r || i === null ? R0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Et = A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ki = Symbol.for("react.element"),
    En = Symbol.for("react.portal"),
    jn = Symbol.for("react.fragment"),
    fa = Symbol.for("react.strict_mode"),
    Zs = Symbol.for("react.profiler"),
    kf = Symbol.for("react.provider"),
    Cf = Symbol.for("react.context"),
    ha = Symbol.for("react.forward_ref"),
    qs = Symbol.for("react.suspense"),
    Js = Symbol.for("react.suspense_list"),
    pa = Symbol.for("react.memo"),
    At = Symbol.for("react.lazy"),
    Pf = Symbol.for("react.offscreen"),
    Vu = Symbol.iterator;

function fr(e) {
    return e === null || typeof e != "object" ? null : (e = Vu && e[Vu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var q = Object.assign,
    cs;

function Pr(e) {
    if (cs === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        cs = t && t[1] || ""
    }
    return `
` + cs + e
}
var ds = !1;

function fs(e, t) {
    if (!e || ds) return "";
    ds = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            } while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        ds = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Pr(e) : ""
}

function _0(e) {
    switch (e.tag) {
        case 5:
            return Pr(e.type);
        case 16:
            return Pr("Lazy");
        case 13:
            return Pr("Suspense");
        case 19:
            return Pr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = fs(e.type, !1), e;
        case 11:
            return e = fs(e.type.render, !1), e;
        case 1:
            return e = fs(e.type, !0), e;
        default:
            return ""
    }
}

function el(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case jn:
            return "Fragment";
        case En:
            return "Portal";
        case Zs:
            return "Profiler";
        case fa:
            return "StrictMode";
        case qs:
            return "Suspense";
        case Js:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Cf:
            return (e.displayName || "Context") + ".Consumer";
        case kf:
            return (e._context.displayName || "Context") + ".Provider";
        case ha:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case pa:
            return t = e.displayName || null, t !== null ? t : el(e.type) || "Memo";
        case At:
            t = e._payload, e = e._init;
            try {
                return el(e(t))
            } catch {}
    }
    return null
}

function b0(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return el(t);
        case 8:
            return t === fa ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function Wt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Tf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function O0(e) {
    var t = Tf(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Ci(e) {
    e._valueTracker || (e._valueTracker = O0(e))
}

function Ef(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Tf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ro(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function tl(e, t) {
    var n = t.checked;
    return q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Du(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Wt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function jf(e, t) {
    t = t.checked, t != null && da(e, "checked", t, !1)
}

function nl(e, t) {
    jf(e, t);
    var n = Wt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? rl(e, t.type, n) : t.hasOwnProperty("defaultValue") && rl(e, t.type, Wt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function _u(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function rl(e, t, n) {
    (t !== "number" || ro(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Tr = Array.isArray;

function Hn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Wt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function il(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
    return q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function bu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(C(92));
            if (Tr(n)) {
                if (1 < n.length) throw Error(C(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Wt(n)
    }
}

function Nf(e, t) {
    var n = Wt(t.value),
        r = Wt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ou(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Mf(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function ol(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Mf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Pi, zf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Pi = Pi || document.createElement("div"), Pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Pi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Hr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var zr = {
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
        strokeWidth: !0
    },
    I0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function(e) {
    I0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), zr[t] = zr[e]
    })
});

function Af(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zr.hasOwnProperty(e) && zr[e] ? ("" + t).trim() : t + "px"
}

function Lf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Af(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var F0 = q({
    menuitem: !0
}, {
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
    wbr: !0
});

function sl(e, t) {
    if (t) {
        if (F0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(C(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(C(62))
    }
}

function ll(e, t) {
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
            return !0
    }
}
var al = null;

function ma(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ul = null,
    $n = null,
    Wn = null;

function Iu(e) {
    if (e = pi(e)) {
        if (typeof ul != "function") throw Error(C(280));
        var t = e.stateNode;
        t && (t = Uo(t), ul(e.stateNode, e.type, t))
    }
}

function Rf(e) {
    $n ? Wn ? Wn.push(e) : Wn = [e] : $n = e
}

function Vf() {
    if ($n) {
        var e = $n,
            t = Wn;
        if (Wn = $n = null, Iu(e), t)
            for (e = 0; e < t.length; e++) Iu(t[e])
    }
}

function Df(e, t) {
    return e(t)
}

function _f() {}
var hs = !1;

function bf(e, t, n) {
    if (hs) return e(t, n);
    hs = !0;
    try {
        return Df(e, t, n)
    } finally {
        hs = !1, ($n !== null || Wn !== null) && (_f(), Vf())
    }
}

function $r(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Uo(n);
    if (r === null) return null;
    n = r[t];
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(C(231, t, typeof n));
    return n
}
var cl = !1;
if (kt) try {
    var hr = {};
    Object.defineProperty(hr, "passive", {
        get: function() {
            cl = !0
        }
    }), window.addEventListener("test", hr, hr), window.removeEventListener("test", hr, hr)
} catch {
    cl = !1
}

function B0(e, t, n, r, i, o, s, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Ar = !1,
    io = null,
    oo = !1,
    dl = null,
    U0 = {
        onError: function(e) {
            Ar = !0, io = e
        }
    };

function H0(e, t, n, r, i, o, s, l, a) {
    Ar = !1, io = null, B0.apply(U0, arguments)
}

function $0(e, t, n, r, i, o, s, l, a) {
    if (H0.apply(this, arguments), Ar) {
        if (Ar) {
            var u = io;
            Ar = !1, io = null
        } else throw Error(C(198));
        oo || (oo = !0, dl = u)
    }
}

function Cn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Of(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Fu(e) {
    if (Cn(e) !== e) throw Error(C(188))
}

function W0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Cn(e), t === null) throw Error(C(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return Fu(i), e;
                if (o === r) return Fu(i), t;
                o = o.sibling
            }
            throw Error(C(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var s = !1, l = i.child; l;) {
                if (l === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (l === r) {
                    s = !0, r = i, n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l;) {
                    if (l === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (l === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(C(189))
            }
        }
        if (n.alternate !== r) throw Error(C(190))
    }
    if (n.tag !== 3) throw Error(C(188));
    return n.stateNode.current === n ? e : t
}

function If(e) {
    return e = W0(e), e !== null ? Ff(e) : null
}

function Ff(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Ff(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Bf = De.unstable_scheduleCallback,
    Bu = De.unstable_cancelCallback,
    G0 = De.unstable_shouldYield,
    K0 = De.unstable_requestPaint,
    ie = De.unstable_now,
    Q0 = De.unstable_getCurrentPriorityLevel,
    ga = De.unstable_ImmediatePriority,
    Uf = De.unstable_UserBlockingPriority,
    so = De.unstable_NormalPriority,
    X0 = De.unstable_LowPriority,
    Hf = De.unstable_IdlePriority,
    Oo = null,
    st = null;

function Y0(e) {
    if (st && typeof st.onCommitFiberRoot == "function") try {
        st.onCommitFiberRoot(Oo, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : J0,
    Z0 = Math.log,
    q0 = Math.LN2;

function J0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Z0(e) / q0 | 0) | 0
}
var Ti = 64,
    Ei = 4194304;

function Er(e) {
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
            return e
    }
}

function lo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = Er(l) : (o &= s, o !== 0 && (r = Er(o)))
    } else s = n & ~i, s !== 0 ? r = Er(s) : o !== 0 && (r = Er(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - qe(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function e1(e, t) {
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
            return -1
    }
}

function t1(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - qe(o),
            l = 1 << s,
            a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = e1(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l
    }
}

function fl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function $f() {
    var e = Ti;
    return Ti <<= 1, !(Ti & 4194240) && (Ti = 64), e
}

function ps(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function fi(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - qe(t), e[t] = n
}

function n1(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - qe(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function va(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - qe(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var B = 0;

function Wf(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Gf, ya, Kf, Qf, Xf, hl = !1,
    ji = [],
    bt = null,
    Ot = null,
    It = null,
    Wr = new Map,
    Gr = new Map,
    Rt = [],
    r1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Uu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            bt = null;
            break;
        case "dragenter":
        case "dragleave":
            Ot = null;
            break;
        case "mouseover":
        case "mouseout":
            It = null;
            break;
        case "pointerover":
        case "pointerout":
            Wr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Gr.delete(t.pointerId)
    }
}

function pr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = pi(t), t !== null && ya(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function i1(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return bt = pr(bt, e, t, n, r, i), !0;
        case "dragenter":
            return Ot = pr(Ot, e, t, n, r, i), !0;
        case "mouseover":
            return It = pr(It, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return Wr.set(o, pr(Wr.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, Gr.set(o, pr(Gr.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Yf(e) {
    var t = un(e.target);
    if (t !== null) {
        var n = Cn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Of(n), t !== null) {
                    e.blockedOn = t, Xf(e.priority, function() {
                        Kf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function $i(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = pl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            al = r, n.target.dispatchEvent(r), al = null
        } else return t = pi(n), t !== null && ya(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Hu(e, t, n) {
    $i(e) && n.delete(t)
}

function o1() {
    hl = !1, bt !== null && $i(bt) && (bt = null), Ot !== null && $i(Ot) && (Ot = null), It !== null && $i(It) && (It = null), Wr.forEach(Hu), Gr.forEach(Hu)
}

function mr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, hl || (hl = !0, De.unstable_scheduleCallback(De.unstable_NormalPriority, o1)))
}

function Kr(e) {
    function t(i) {
        return mr(i, e)
    }
    if (0 < ji.length) {
        mr(ji[0], e);
        for (var n = 1; n < ji.length; n++) {
            var r = ji[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (bt !== null && mr(bt, e), Ot !== null && mr(Ot, e), It !== null && mr(It, e), Wr.forEach(t), Gr.forEach(t), n = 0; n < Rt.length; n++) r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null);) Yf(n), n.blockedOn === null && Rt.shift()
}
var Gn = Et.ReactCurrentBatchConfig,
    ao = !0;

function s1(e, t, n, r) {
    var i = B,
        o = Gn.transition;
    Gn.transition = null;
    try {
        B = 1, xa(e, t, n, r)
    } finally {
        B = i, Gn.transition = o
    }
}

function l1(e, t, n, r) {
    var i = B,
        o = Gn.transition;
    Gn.transition = null;
    try {
        B = 4, xa(e, t, n, r)
    } finally {
        B = i, Gn.transition = o
    }
}

function xa(e, t, n, r) {
    if (ao) {
        var i = pl(e, t, n, r);
        if (i === null) Ps(e, t, r, uo, n), Uu(e, r);
        else if (i1(i, e, t, n, r)) r.stopPropagation();
        else if (Uu(e, r), t & 4 && -1 < r1.indexOf(e)) {
            for (; i !== null;) {
                var o = pi(i);
                if (o !== null && Gf(o), o = pl(e, t, n, r), o === null && Ps(e, t, r, uo, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else Ps(e, t, r, null, n)
    }
}
var uo = null;

function pl(e, t, n, r) {
    if (uo = null, e = ma(r), e = un(e), e !== null)
        if (t = Cn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Of(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return uo = e, null
}

function Zf(e) {
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
            switch (Q0()) {
                case ga:
                    return 1;
                case Uf:
                    return 4;
                case so:
                case X0:
                    return 16;
                case Hf:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Dt = null,
    wa = null,
    Wi = null;

function qf() {
    if (Wi) return Wi;
    var e, t = wa,
        n = t.length,
        r, i = "value" in Dt ? Dt.value : Dt.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return Wi = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Gi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ni() {
    return !0
}

function $u() {
    return !1
}

function Oe(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ni : $u, this.isPropagationStopped = $u, this
    }
    return q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ni)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ni)
        },
        persist: function() {},
        isPersistent: Ni
    }), t
}
var lr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Sa = Oe(lr),
    hi = q({}, lr, {
        view: 0,
        detail: 0
    }),
    a1 = Oe(hi),
    ms, gs, gr, Io = q({}, hi, {
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
        getModifierState: ka,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== gr && (gr && e.type === "mousemove" ? (ms = e.screenX - gr.screenX, gs = e.screenY - gr.screenY) : gs = ms = 0, gr = e), ms)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : gs
        }
    }),
    Wu = Oe(Io),
    u1 = q({}, Io, {
        dataTransfer: 0
    }),
    c1 = Oe(u1),
    d1 = q({}, hi, {
        relatedTarget: 0
    }),
    vs = Oe(d1),
    f1 = q({}, lr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    h1 = Oe(f1),
    p1 = q({}, lr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    m1 = Oe(p1),
    g1 = q({}, lr, {
        data: 0
    }),
    Gu = Oe(g1),
    v1 = {
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
        MozPrintableKey: "Unidentified"
    },
    y1 = {
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
        224: "Meta"
    },
    x1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function w1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = x1[e]) ? !!t[e] : !1
}

function ka() {
    return w1
}
var S1 = q({}, hi, {
        key: function(e) {
            if (e.key) {
                var t = v1[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Gi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? y1[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ka,
        charCode: function(e) {
            return e.type === "keypress" ? Gi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Gi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    k1 = Oe(S1),
    C1 = q({}, Io, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Ku = Oe(C1),
    P1 = q({}, hi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ka
    }),
    T1 = Oe(P1),
    E1 = q({}, lr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    j1 = Oe(E1),
    N1 = q({}, Io, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    M1 = Oe(N1),
    z1 = [9, 13, 27, 32],
    Ca = kt && "CompositionEvent" in window,
    Lr = null;
kt && "documentMode" in document && (Lr = document.documentMode);
var A1 = kt && "TextEvent" in window && !Lr,
    Jf = kt && (!Ca || Lr && 8 < Lr && 11 >= Lr),
    Qu = " ",
    Xu = !1;

function eh(e, t) {
    switch (e) {
        case "keyup":
            return z1.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function th(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Nn = !1;

function L1(e, t) {
    switch (e) {
        case "compositionend":
            return th(t);
        case "keypress":
            return t.which !== 32 ? null : (Xu = !0, Qu);
        case "textInput":
            return e = t.data, e === Qu && Xu ? null : e;
        default:
            return null
    }
}

function R1(e, t) {
    if (Nn) return e === "compositionend" || !Ca && eh(e, t) ? (e = qf(), Wi = wa = Dt = null, Nn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Jf && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var V1 = {
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
    week: !0
};

function Yu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!V1[e.type] : t === "textarea"
}

function nh(e, t, n, r) {
    Rf(r), t = co(t, "onChange"), 0 < t.length && (n = new Sa("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Rr = null,
    Qr = null;

function D1(e) {
    hh(e, 0)
}

function Fo(e) {
    var t = An(e);
    if (Ef(t)) return e
}

function _1(e, t) {
    if (e === "change") return t
}
var rh = !1;
if (kt) {
    var ys;
    if (kt) {
        var xs = "oninput" in document;
        if (!xs) {
            var Zu = document.createElement("div");
            Zu.setAttribute("oninput", "return;"), xs = typeof Zu.oninput == "function"
        }
        ys = xs
    } else ys = !1;
    rh = ys && (!document.documentMode || 9 < document.documentMode)
}

function qu() {
    Rr && (Rr.detachEvent("onpropertychange", ih), Qr = Rr = null)
}

function ih(e) {
    if (e.propertyName === "value" && Fo(Qr)) {
        var t = [];
        nh(t, Qr, e, ma(e)), bf(D1, t)
    }
}

function b1(e, t, n) {
    e === "focusin" ? (qu(), Rr = t, Qr = n, Rr.attachEvent("onpropertychange", ih)) : e === "focusout" && qu()
}

function O1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fo(Qr)
}

function I1(e, t) {
    if (e === "click") return Fo(t)
}

function F1(e, t) {
    if (e === "input" || e === "change") return Fo(t)
}

function B1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var et = typeof Object.is == "function" ? Object.is : B1;

function Xr(e, t) {
    if (et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ys.call(t, i) || !et(e[i], t[i])) return !1
    }
    return !0
}

function Ju(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ec(e, t) {
    var n = Ju(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ju(n)
    }
}

function oh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? oh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function sh() {
    for (var e = window, t = ro(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = ro(e.document)
    }
    return t
}

function Pa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function U1(e) {
    var t = sh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && oh(n.ownerDocument.documentElement, n)) {
        if (r !== null && Pa(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ec(n, o);
                var s = ec(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var H1 = kt && "documentMode" in document && 11 >= document.documentMode,
    Mn = null,
    ml = null,
    Vr = null,
    gl = !1;

function tc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gl || Mn == null || Mn !== ro(r) || (r = Mn, "selectionStart" in r && Pa(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Vr && Xr(Vr, r) || (Vr = r, r = co(ml, "onSelect"), 0 < r.length && (t = new Sa("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Mn)))
}

function Mi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var zn = {
        animationend: Mi("Animation", "AnimationEnd"),
        animationiteration: Mi("Animation", "AnimationIteration"),
        animationstart: Mi("Animation", "AnimationStart"),
        transitionend: Mi("Transition", "TransitionEnd")
    },
    ws = {},
    lh = {};
kt && (lh = document.createElement("div").style, "AnimationEvent" in window || (delete zn.animationend.animation, delete zn.animationiteration.animation, delete zn.animationstart.animation), "TransitionEvent" in window || delete zn.transitionend.transition);

function Bo(e) {
    if (ws[e]) return ws[e];
    if (!zn[e]) return e;
    var t = zn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in lh) return ws[e] = t[n];
    return e
}
var ah = Bo("animationend"),
    uh = Bo("animationiteration"),
    ch = Bo("animationstart"),
    dh = Bo("transitionend"),
    fh = new Map,
    nc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Yt(e, t) {
    fh.set(e, t), kn(t, [e])
}
for (var Ss = 0; Ss < nc.length; Ss++) {
    var ks = nc[Ss],
        $1 = ks.toLowerCase(),
        W1 = ks[0].toUpperCase() + ks.slice(1);
    Yt($1, "on" + W1)
}
Yt(ah, "onAnimationEnd");
Yt(uh, "onAnimationIteration");
Yt(ch, "onAnimationStart");
Yt("dblclick", "onDoubleClick");
Yt("focusin", "onFocus");
Yt("focusout", "onBlur");
Yt(dh, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    G1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));

function rc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, $0(r, t, void 0, e), e.currentTarget = null
}

function hh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        a = l.instance,
                        u = l.currentTarget;
                    if (l = l.listener, a !== o && i.isPropagationStopped()) break e;
                    rc(i, l, u), o = a
                } else
                    for (s = 0; s < r.length; s++) {
                        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped()) break e;
                        rc(i, l, u), o = a
                    }
        }
    }
    if (oo) throw e = dl, oo = !1, dl = null, e
}

function W(e, t) {
    var n = t[Sl];
    n === void 0 && (n = t[Sl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ph(t, e, 2, !1), n.add(r))
}

function Cs(e, t, n) {
    var r = 0;
    t && (r |= 4), ph(n, e, r, t)
}
var zi = "_reactListening" + Math.random().toString(36).slice(2);

function Yr(e) {
    if (!e[zi]) {
        e[zi] = !0, Sf.forEach(function(n) {
            n !== "selectionchange" && (G1.has(n) || Cs(n, !1, e), Cs(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zi] || (t[zi] = !0, Cs("selectionchange", !1, t))
    }
}

function ph(e, t, n, r) {
    switch (Zf(t)) {
        case 1:
            var i = s1;
            break;
        case 4:
            i = l1;
            break;
        default:
            i = xa
    }
    n = i.bind(null, t, n, e), i = void 0, !cl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Ps(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var a = s.tag;
                    if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = un(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = o = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    bf(function() {
        var u = o,
            c = ma(n),
            d = [];
        e: {
            var h = fh.get(e);
            if (h !== void 0) {
                var v = Sa,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (Gi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = k1;
                        break;
                    case "focusin":
                        y = "focus", v = vs;
                        break;
                    case "focusout":
                        y = "blur", v = vs;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = vs;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = Wu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = c1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = T1;
                        break;
                    case ah:
                    case uh:
                    case ch:
                        v = h1;
                        break;
                    case dh:
                        v = j1;
                        break;
                    case "scroll":
                        v = a1;
                        break;
                    case "wheel":
                        v = M1;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = m1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Ku
                }
                var x = (t & 4) !== 0,
                    S = !x && e === "scroll",
                    m = x ? h !== null ? h + "Capture" : null : h;
                x = [];
                for (var p = u, g; p !== null;) {
                    g = p;
                    var w = g.stateNode;
                    if (g.tag === 5 && w !== null && (g = w, m !== null && (w = $r(p, m), w != null && x.push(Zr(p, w, g)))), S) break;
                    p = p.return
                }
                0 < x.length && (h = new v(h, y, null, n, c), d.push({
                    event: h,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", h && n !== al && (y = n.relatedTarget || n.fromElement) && (un(y) || y[Ct])) break e;
                if ((v || h) && (h = c.window === c ? c : (h = c.ownerDocument) ? h.defaultView || h.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = u, y = y ? un(y) : null, y !== null && (S = Cn(y), y !== S || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = u), v !== y)) {
                    if (x = Wu, w = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (x = Ku, w = "onPointerLeave", m = "onPointerEnter", p = "pointer"), S = v == null ? h : An(v), g = y == null ? h : An(y), h = new x(w, p + "leave", v, n, c), h.target = S, h.relatedTarget = g, w = null, un(c) === u && (x = new x(m, p + "enter", y, n, c), x.target = g, x.relatedTarget = S, w = x), S = w, v && y) t: {
                        for (x = v, m = y, p = 0, g = x; g; g = Pn(g)) p++;
                        for (g = 0, w = m; w; w = Pn(w)) g++;
                        for (; 0 < p - g;) x = Pn(x),
                        p--;
                        for (; 0 < g - p;) m = Pn(m),
                        g--;
                        for (; p--;) {
                            if (x === m || m !== null && x === m.alternate) break t;
                            x = Pn(x), m = Pn(m)
                        }
                        x = null
                    }
                    else x = null;
                    v !== null && ic(d, h, v, x, !1), y !== null && S !== null && ic(d, S, y, x, !0)
                }
            }
            e: {
                if (h = u ? An(u) : window, v = h.nodeName && h.nodeName.toLowerCase(), v === "select" || v === "input" && h.type === "file") var k = _1;
                else if (Yu(h))
                    if (rh) k = F1;
                    else {
                        k = O1;
                        var T = b1
                    }
                else(v = h.nodeName) && v.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (k = I1);
                if (k && (k = k(e, u))) {
                    nh(d, k, n, c);
                    break e
                }
                T && T(e, h, u),
                e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && rl(h, "number", h.value)
            }
            switch (T = u ? An(u) : window, e) {
                case "focusin":
                    (Yu(T) || T.contentEditable === "true") && (Mn = T, ml = u, Vr = null);
                    break;
                case "focusout":
                    Vr = ml = Mn = null;
                    break;
                case "mousedown":
                    gl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    gl = !1, tc(d, n, c);
                    break;
                case "selectionchange":
                    if (H1) break;
                case "keydown":
                case "keyup":
                    tc(d, n, c)
            }
            var N;
            if (Ca) e: {
                switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else Nn ? eh(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (Jf && n.locale !== "ko" && (Nn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Nn && (N = qf()) : (Dt = c, wa = "value" in Dt ? Dt.value : Dt.textContent, Nn = !0)), T = co(u, P), 0 < T.length && (P = new Gu(P, e, null, n, c), d.push({
                event: P,
                listeners: T
            }), N ? P.data = N : (N = th(n), N !== null && (P.data = N)))),
            (N = A1 ? L1(e, n) : R1(e, n)) && (u = co(u, "onBeforeInput"), 0 < u.length && (c = new Gu("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = N))
        }
        hh(d, t)
    })
}

function Zr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function co(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = $r(e, n), o != null && r.unshift(Zr(e, o, i)), o = $r(e, t), o != null && r.push(Zr(e, o, i))), e = e.return
    }
    return r
}

function Pn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function ic(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var l = n,
            a = l.alternate,
            u = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && u !== null && (l = u, i ? (a = $r(n, o), a != null && s.unshift(Zr(n, a, l))) : i || (a = $r(n, o), a != null && s.push(Zr(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var K1 = /\r\n?/g,
    Q1 = /\u0000|\uFFFD/g;

function oc(e) {
    return (typeof e == "string" ? e : "" + e).replace(K1, `
`).replace(Q1, "")
}

function Ai(e, t, n) {
    if (t = oc(t), oc(e) !== t && n) throw Error(C(425))
}

function fo() {}
var vl = null,
    yl = null;

function xl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var wl = typeof setTimeout == "function" ? setTimeout : void 0,
    X1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    sc = typeof Promise == "function" ? Promise : void 0,
    Y1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof sc < "u" ? function(e) {
        return sc.resolve(null).then(e).catch(Z1)
    } : wl;

function Z1(e) {
    setTimeout(function() {
        throw e
    })
}

function Ts(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Kr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Kr(t)
}

function Ft(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function lc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ar = Math.random().toString(36).slice(2),
    ot = "__reactFiber$" + ar,
    qr = "__reactProps$" + ar,
    Ct = "__reactContainer$" + ar,
    Sl = "__reactEvents$" + ar,
    q1 = "__reactListeners$" + ar,
    J1 = "__reactHandles$" + ar;

function un(e) {
    var t = e[ot];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ct] || n[ot]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = lc(e); e !== null;) {
                    if (n = e[ot]) return n;
                    e = lc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function pi(e) {
    return e = e[ot] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function An(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(C(33))
}

function Uo(e) {
    return e[qr] || null
}
var kl = [],
    Ln = -1;

function Zt(e) {
    return {
        current: e
    }
}

function G(e) {
    0 > Ln || (e.current = kl[Ln], kl[Ln] = null, Ln--)
}

function H(e, t) {
    Ln++, kl[Ln] = e.current, e.current = t
}
var Gt = {},
    Se = Zt(Gt),
    Me = Zt(!1),
    vn = Gt;

function Zn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Gt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function ze(e) {
    return e = e.childContextTypes, e != null
}

function ho() {
    G(Me), G(Se)
}

function ac(e, t, n) {
    if (Se.current !== Gt) throw Error(C(168));
    H(Se, t), H(Me, n)
}

function mh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(C(108, b0(e) || "Unknown", i));
    return q({}, n, r)
}

function po(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt, vn = Se.current, H(Se, e), H(Me, Me.current), !0
}

function uc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(C(169));
    n ? (e = mh(e, t, vn), r.__reactInternalMemoizedMergedChildContext = e, G(Me), G(Se), H(Se, e)) : G(Me), H(Me, n)
}
var ht = null,
    Ho = !1,
    Es = !1;

function gh(e) {
    ht === null ? ht = [e] : ht.push(e)
}

function eg(e) {
    Ho = !0, gh(e)
}

function qt() {
    if (!Es && ht !== null) {
        Es = !0;
        var e = 0,
            t = B;
        try {
            var n = ht;
            for (B = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            ht = null, Ho = !1
        } catch (i) {
            throw ht !== null && (ht = ht.slice(e + 1)), Bf(ga, qt), i
        } finally {
            B = t, Es = !1
        }
    }
    return null
}
var Rn = [],
    Vn = 0,
    mo = null,
    go = 0,
    Be = [],
    Ue = 0,
    yn = null,
    pt = 1,
    mt = "";

function on(e, t) {
    Rn[Vn++] = go, Rn[Vn++] = mo, mo = e, go = t
}

function vh(e, t, n) {
    Be[Ue++] = pt, Be[Ue++] = mt, Be[Ue++] = yn, yn = e;
    var r = pt;
    e = mt;
    var i = 32 - qe(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - qe(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, pt = 1 << 32 - qe(t) + i | n << i | r, mt = o + e
    } else pt = 1 << o | n << i | r, mt = e
}

function Ta(e) {
    e.return !== null && (on(e, 1), vh(e, 1, 0))
}

function Ea(e) {
    for (; e === mo;) mo = Rn[--Vn], Rn[Vn] = null, go = Rn[--Vn], Rn[Vn] = null;
    for (; e === yn;) yn = Be[--Ue], Be[Ue] = null, mt = Be[--Ue], Be[Ue] = null, pt = Be[--Ue], Be[Ue] = null
}
var Ve = null,
    Re = null,
    K = !1,
    Ze = null;

function yh(e, t) {
    var n = He(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function cc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ve = e, Re = Ft(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ve = e, Re = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yn !== null ? {
                id: pt,
                overflow: mt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ve = e, Re = null, !0) : !1;
        default:
            return !1
    }
}

function Cl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Pl(e) {
    if (K) {
        var t = Re;
        if (t) {
            var n = t;
            if (!cc(e, t)) {
                if (Cl(e)) throw Error(C(418));
                t = Ft(n.nextSibling);
                var r = Ve;
                t && cc(e, t) ? yh(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Ve = e)
            }
        } else {
            if (Cl(e)) throw Error(C(418));
            e.flags = e.flags & -4097 | 2, K = !1, Ve = e
        }
    }
}

function dc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ve = e
}

function Li(e) {
    if (e !== Ve) return !1;
    if (!K) return dc(e), K = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !xl(e.type, e.memoizedProps)), t && (t = Re)) {
        if (Cl(e)) throw xh(), Error(C(418));
        for (; t;) yh(e, t), t = Ft(t.nextSibling)
    }
    if (dc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Re = Ft(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Re = null
        }
    } else Re = Ve ? Ft(e.stateNode.nextSibling) : null;
    return !0
}

function xh() {
    for (var e = Re; e;) e = Ft(e.nextSibling)
}

function qn() {
    Re = Ve = null, K = !1
}

function ja(e) {
    Ze === null ? Ze = [e] : Ze.push(e)
}
var tg = Et.ReactCurrentBatchConfig;

function vr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(C(309));
                var r = n.stateNode
            }
            if (!r) throw Error(C(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                s === null ? delete l[o] : l[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(C(284));
        if (!n._owner) throw Error(C(290, e))
    }
    return e
}

function Ri(e, t) {
    throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function fc(e) {
    var t = e._init;
    return t(e._payload)
}

function wh(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p], m.flags |= 16) : g.push(p)
        }
    }

    function n(m, p) {
        if (!e) return null;
        for (; p !== null;) t(m, p), p = p.sibling;
        return null
    }

    function r(m, p) {
        for (m = new Map; p !== null;) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
        return m
    }

    function i(m, p) {
        return m = $t(m, p), m.index = 0, m.sibling = null, m
    }

    function o(m, p, g) {
        return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < p ? (m.flags |= 2, p) : g) : (m.flags |= 2, p)) : (m.flags |= 1048576, p)
    }

    function s(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function l(m, p, g, w) {
        return p === null || p.tag !== 6 ? (p = Rs(g, m.mode, w), p.return = m, p) : (p = i(p, g), p.return = m, p)
    }

    function a(m, p, g, w) {
        var k = g.type;
        return k === jn ? c(m, p, g.props.children, w, g.key) : p !== null && (p.elementType === k || typeof k == "object" && k !== null && k.$$typeof === At && fc(k) === p.type) ? (w = i(p, g.props), w.ref = vr(m, p, g), w.return = m, w) : (w = Ji(g.type, g.key, g.props, null, m.mode, w), w.ref = vr(m, p, g), w.return = m, w)
    }

    function u(m, p, g, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Vs(g, m.mode, w), p.return = m, p) : (p = i(p, g.children || []), p.return = m, p)
    }

    function c(m, p, g, w, k) {
        return p === null || p.tag !== 7 ? (p = mn(g, m.mode, w, k), p.return = m, p) : (p = i(p, g), p.return = m, p)
    }

    function d(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = Rs("" + p, m.mode, g), p.return = m, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ki:
                    return g = Ji(p.type, p.key, p.props, null, m.mode, g), g.ref = vr(m, null, p), g.return = m, g;
                case En:
                    return p = Vs(p, m.mode, g), p.return = m, p;
                case At:
                    var w = p._init;
                    return d(m, w(p._payload), g)
            }
            if (Tr(p) || fr(p)) return p = mn(p, m.mode, g, null), p.return = m, p;
            Ri(m, p)
        }
        return null
    }

    function h(m, p, g, w) {
        var k = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return k !== null ? null : l(m, p, "" + g, w);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case ki:
                    return g.key === k ? a(m, p, g, w) : null;
                case En:
                    return g.key === k ? u(m, p, g, w) : null;
                case At:
                    return k = g._init, h(m, p, k(g._payload), w)
            }
            if (Tr(g) || fr(g)) return k !== null ? null : c(m, p, g, w, null);
            Ri(m, g)
        }
        return null
    }

    function v(m, p, g, w, k) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return m = m.get(g) || null, l(p, m, "" + w, k);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case ki:
                    return m = m.get(w.key === null ? g : w.key) || null, a(p, m, w, k);
                case En:
                    return m = m.get(w.key === null ? g : w.key) || null, u(p, m, w, k);
                case At:
                    var T = w._init;
                    return v(m, p, g, T(w._payload), k)
            }
            if (Tr(w) || fr(w)) return m = m.get(g) || null, c(p, m, w, k, null);
            Ri(p, w)
        }
        return null
    }

    function y(m, p, g, w) {
        for (var k = null, T = null, N = p, P = p = 0, D = null; N !== null && P < g.length; P++) {
            N.index > P ? (D = N, N = null) : D = N.sibling;
            var z = h(m, N, g[P], w);
            if (z === null) {
                N === null && (N = D);
                break
            }
            e && N && z.alternate === null && t(m, N), p = o(z, p, P), T === null ? k = z : T.sibling = z, T = z, N = D
        }
        if (P === g.length) return n(m, N), K && on(m, P), k;
        if (N === null) {
            for (; P < g.length; P++) N = d(m, g[P], w), N !== null && (p = o(N, p, P), T === null ? k = N : T.sibling = N, T = N);
            return K && on(m, P), k
        }
        for (N = r(m, N); P < g.length; P++) D = v(N, m, P, g[P], w), D !== null && (e && D.alternate !== null && N.delete(D.key === null ? P : D.key), p = o(D, p, P), T === null ? k = D : T.sibling = D, T = D);
        return e && N.forEach(function(ee) {
            return t(m, ee)
        }), K && on(m, P), k
    }

    function x(m, p, g, w) {
        var k = fr(g);
        if (typeof k != "function") throw Error(C(150));
        if (g = k.call(g), g == null) throw Error(C(151));
        for (var T = k = null, N = p, P = p = 0, D = null, z = g.next(); N !== null && !z.done; P++, z = g.next()) {
            N.index > P ? (D = N, N = null) : D = N.sibling;
            var ee = h(m, N, z.value, w);
            if (ee === null) {
                N === null && (N = D);
                break
            }
            e && N && ee.alternate === null && t(m, N), p = o(ee, p, P), T === null ? k = ee : T.sibling = ee, T = ee, N = D
        }
        if (z.done) return n(m, N), K && on(m, P), k;
        if (N === null) {
            for (; !z.done; P++, z = g.next()) z = d(m, z.value, w), z !== null && (p = o(z, p, P), T === null ? k = z : T.sibling = z, T = z);
            return K && on(m, P), k
        }
        for (N = r(m, N); !z.done; P++, z = g.next()) z = v(N, m, P, z.value, w), z !== null && (e && z.alternate !== null && N.delete(z.key === null ? P : z.key), p = o(z, p, P), T === null ? k = z : T.sibling = z, T = z);
        return e && N.forEach(function(O) {
            return t(m, O)
        }), K && on(m, P), k
    }

    function S(m, p, g, w) {
        if (typeof g == "object" && g !== null && g.type === jn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case ki:
                    e: {
                        for (var k = g.key, T = p; T !== null;) {
                            if (T.key === k) {
                                if (k = g.type, k === jn) {
                                    if (T.tag === 7) {
                                        n(m, T.sibling), p = i(T, g.props.children), p.return = m, m = p;
                                        break e
                                    }
                                } else if (T.elementType === k || typeof k == "object" && k !== null && k.$$typeof === At && fc(k) === T.type) {
                                    n(m, T.sibling), p = i(T, g.props), p.ref = vr(m, T, g), p.return = m, m = p;
                                    break e
                                }
                                n(m, T);
                                break
                            } else t(m, T);
                            T = T.sibling
                        }
                        g.type === jn ? (p = mn(g.props.children, m.mode, w, g.key), p.return = m, m = p) : (w = Ji(g.type, g.key, g.props, null, m.mode, w), w.ref = vr(m, p, g), w.return = m, m = w)
                    }
                    return s(m);
                case En:
                    e: {
                        for (T = g.key; p !== null;) {
                            if (p.key === T)
                                if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(m, p.sibling), p = i(p, g.children || []), p.return = m, m = p;
                                    break e
                                } else {
                                    n(m, p);
                                    break
                                }
                            else t(m, p);
                            p = p.sibling
                        }
                        p = Vs(g, m.mode, w),
                        p.return = m,
                        m = p
                    }
                    return s(m);
                case At:
                    return T = g._init, S(m, p, T(g._payload), w)
            }
            if (Tr(g)) return y(m, p, g, w);
            if (fr(g)) return x(m, p, g, w);
            Ri(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(m, p.sibling), p = i(p, g), p.return = m, m = p) : (n(m, p), p = Rs(g, m.mode, w), p.return = m, m = p), s(m)) : n(m, p)
    }
    return S
}
var Jn = wh(!0),
    Sh = wh(!1),
    vo = Zt(null),
    yo = null,
    Dn = null,
    Na = null;

function Ma() {
    Na = Dn = yo = null
}

function za(e) {
    var t = vo.current;
    G(vo), e._currentValue = t
}

function Tl(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Kn(e, t) {
    yo = e, Na = Dn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ne = !0), e.firstContext = null)
}

function We(e) {
    var t = e._currentValue;
    if (Na !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Dn === null) {
            if (yo === null) throw Error(C(308));
            Dn = e, yo.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Dn = Dn.next = e;
    return t
}
var cn = null;

function Aa(e) {
    cn === null ? cn = [e] : cn.push(e)
}

function kh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Aa(t)) : (n.next = i.next, i.next = n), t.interleaved = n, Pt(e, r)
}

function Pt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Lt = !1;

function La(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Ch(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function vt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Bt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, I & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, Pt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Aa(r)) : (t.next = i.next, i.next = t), r.interleaved = t, Pt(e, n)
}

function Ki(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, va(e, n)
    }
}

function hc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function xo(e, t, n, r) {
    var i = e.updateQueue;
    Lt = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l,
            u = a.next;
        a.next = null, s === null ? o = u : s.next = u, s = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, l = c.lastBaseUpdate, l !== s && (l === null ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = a))
    }
    if (o !== null) {
        var d = i.baseState;
        s = 0, c = u = a = null, l = o;
        do {
            var h = l.lane,
                v = l.eventTime;
            if ((r & h) === h) {
                c !== null && (c = c.next = {
                    eventTime: v,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = e,
                        x = l;
                    switch (h = t, v = n, x.tag) {
                        case 1:
                            if (y = x.payload, typeof y == "function") {
                                d = y.call(v, d, h);
                                break e
                            }
                            d = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = x.payload, h = typeof y == "function" ? y.call(v, d, h) : y, h == null) break e;
                            d = q({}, d, h);
                            break e;
                        case 2:
                            Lt = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [l] : h.push(l))
            } else v = {
                eventTime: v,
                lane: h,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, c === null ? (u = c = v, a = d) : c = c.next = v, s |= h;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                h = l, l = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d), i.baseState = a, i.firstBaseUpdate = u, i.lastBaseUpdate = c, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        wn |= s, e.lanes = s, e.memoizedState = d
    }
}

function pc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(C(191, i));
                i.call(r)
            }
        }
}
var mi = {},
    lt = Zt(mi),
    Jr = Zt(mi),
    ei = Zt(mi);

function dn(e) {
    if (e === mi) throw Error(C(174));
    return e
}

function Ra(e, t) {
    switch (H(ei, t), H(Jr, e), H(lt, mi), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ol(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ol(t, e)
    }
    G(lt), H(lt, t)
}

function er() {
    G(lt), G(Jr), G(ei)
}

function Ph(e) {
    dn(ei.current);
    var t = dn(lt.current),
        n = ol(t, e.type);
    t !== n && (H(Jr, e), H(lt, n))
}

function Va(e) {
    Jr.current === e && (G(lt), G(Jr))
}
var Q = Zt(0);

function wo(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var js = [];

function Da() {
    for (var e = 0; e < js.length; e++) js[e]._workInProgressVersionPrimary = null;
    js.length = 0
}
var Qi = Et.ReactCurrentDispatcher,
    Ns = Et.ReactCurrentBatchConfig,
    xn = 0,
    Z = null,
    se = null,
    ue = null,
    So = !1,
    Dr = !1,
    ti = 0,
    ng = 0;

function me() {
    throw Error(C(321))
}

function _a(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!et(e[n], t[n])) return !1;
    return !0
}

function ba(e, t, n, r, i, o) {
    if (xn = o, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qi.current = e === null || e.memoizedState === null ? sg : lg, e = n(r, i), Dr) {
        o = 0;
        do {
            if (Dr = !1, ti = 0, 25 <= o) throw Error(C(301));
            o += 1, ue = se = null, t.updateQueue = null, Qi.current = ag, e = n(r, i)
        } while (Dr)
    }
    if (Qi.current = ko, t = se !== null && se.next !== null, xn = 0, ue = se = Z = null, So = !1, t) throw Error(C(300));
    return e
}

function Oa() {
    var e = ti !== 0;
    return ti = 0, e
}

function it() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ue === null ? Z.memoizedState = ue = e : ue = ue.next = e, ue
}

function Ge() {
    if (se === null) {
        var e = Z.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = se.next;
    var t = ue === null ? Z.memoizedState : ue.next;
    if (t !== null) ue = t, se = e;
    else {
        if (e === null) throw Error(C(310));
        se = e, e = {
            memoizedState: se.memoizedState,
            baseState: se.baseState,
            baseQueue: se.baseQueue,
            queue: se.queue,
            next: null
        }, ue === null ? Z.memoizedState = ue = e : ue = ue.next = e
    }
    return ue
}

function ni(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Ms(e) {
    var t = Ge(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = se,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var l = s = null,
            a = null,
            u = o;
        do {
            var c = u.lane;
            if ((xn & c) === c) a !== null && (a = a.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d, s = r) : a = a.next = d, Z.lanes |= c, wn |= c
            }
            u = u.next
        } while (u !== null && u !== o);
        a === null ? s = r : a.next = l, et(r, t.memoizedState) || (Ne = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, Z.lanes |= o, wn |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function zs(e) {
    var t = Ge(),
        n = t.queue;
    if (n === null) throw Error(C(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        et(o, t.memoizedState) || (Ne = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function Th() {}

function Eh(e, t) {
    var n = Z,
        r = Ge(),
        i = t(),
        o = !et(r.memoizedState, i);
    if (o && (r.memoizedState = i, Ne = !0), r = r.queue, Ia(Mh.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ue !== null && ue.memoizedState.tag & 1) {
        if (n.flags |= 2048, ri(9, Nh.bind(null, n, r, i, t), void 0, null), ce === null) throw Error(C(349));
        xn & 30 || jh(n, t, i)
    }
    return i
}

function jh(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Z.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Nh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, zh(t) && Ah(e)
}

function Mh(e, t, n) {
    return n(function() {
        zh(t) && Ah(e)
    })
}

function zh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !et(e, n)
    } catch {
        return !0
    }
}

function Ah(e) {
    var t = Pt(e, 1);
    t !== null && Je(t, e, 1, -1)
}

function mc(e) {
    var t = it();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ni,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = og.bind(null, Z, e), [t.memoizedState, e]
}

function ri(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Z.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Lh() {
    return Ge().memoizedState
}

function Xi(e, t, n, r) {
    var i = it();
    Z.flags |= e, i.memoizedState = ri(1 | t, n, void 0, r === void 0 ? null : r)
}

function $o(e, t, n, r) {
    var i = Ge();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (se !== null) {
        var s = se.memoizedState;
        if (o = s.destroy, r !== null && _a(r, s.deps)) {
            i.memoizedState = ri(t, n, o, r);
            return
        }
    }
    Z.flags |= e, i.memoizedState = ri(1 | t, n, o, r)
}

function gc(e, t) {
    return Xi(8390656, 8, e, t)
}

function Ia(e, t) {
    return $o(2048, 8, e, t)
}

function Rh(e, t) {
    return $o(4, 2, e, t)
}

function Vh(e, t) {
    return $o(4, 4, e, t)
}

function Dh(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function _h(e, t, n) {
    return n = n != null ? n.concat([e]) : null, $o(4, 4, Dh.bind(null, t, e), n)
}

function Fa() {}

function bh(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _a(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Oh(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && _a(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Ih(e, t, n) {
    return xn & 21 ? (et(n, t) || (n = $f(), Z.lanes |= n, wn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ne = !0), e.memoizedState = n)
}

function rg(e, t) {
    var n = B;
    B = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ns.transition;
    Ns.transition = {};
    try {
        e(!1), t()
    } finally {
        B = n, Ns.transition = r
    }
}

function Fh() {
    return Ge().memoizedState
}

function ig(e, t, n) {
    var r = Ht(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Bh(e)) Uh(t, n);
    else if (n = kh(e, t, n, r), n !== null) {
        var i = Ce();
        Je(n, e, r, i), Hh(n, t, r)
    }
}

function og(e, t, n) {
    var r = Ht(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Bh(e)) Uh(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState,
                l = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = l, et(l, s)) {
                var a = t.interleaved;
                a === null ? (i.next = i, Aa(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = kh(e, t, i, r), n !== null && (i = Ce(), Je(n, e, r, i), Hh(n, t, r))
    }
}

function Bh(e) {
    var t = e.alternate;
    return e === Z || t !== null && t === Z
}

function Uh(e, t) {
    Dr = So = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Hh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, va(e, n)
    }
}
var ko = {
        readContext: We,
        useCallback: me,
        useContext: me,
        useEffect: me,
        useImperativeHandle: me,
        useInsertionEffect: me,
        useLayoutEffect: me,
        useMemo: me,
        useReducer: me,
        useRef: me,
        useState: me,
        useDebugValue: me,
        useDeferredValue: me,
        useTransition: me,
        useMutableSource: me,
        useSyncExternalStore: me,
        useId: me,
        unstable_isNewReconciler: !1
    },
    sg = {
        readContext: We,
        useCallback: function(e, t) {
            return it().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: We,
        useEffect: gc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Xi(4194308, 4, Dh.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Xi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Xi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = it();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = it();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = ig.bind(null, Z, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = it();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: mc,
        useDebugValue: Fa,
        useDeferredValue: function(e) {
            return it().memoizedState = e
        },
        useTransition: function() {
            var e = mc(!1),
                t = e[0];
            return e = rg.bind(null, e[1]), it().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Z,
                i = it();
            if (K) {
                if (n === void 0) throw Error(C(407));
                n = n()
            } else {
                if (n = t(), ce === null) throw Error(C(349));
                xn & 30 || jh(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, gc(Mh.bind(null, r, o, e), [e]), r.flags |= 2048, ri(9, Nh.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = it(),
                t = ce.identifierPrefix;
            if (K) {
                var n = mt,
                    r = pt;
                n = (r & ~(1 << 32 - qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ti++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = ng++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    lg = {
        readContext: We,
        useCallback: bh,
        useContext: We,
        useEffect: Ia,
        useImperativeHandle: _h,
        useInsertionEffect: Rh,
        useLayoutEffect: Vh,
        useMemo: Oh,
        useReducer: Ms,
        useRef: Lh,
        useState: function() {
            return Ms(ni)
        },
        useDebugValue: Fa,
        useDeferredValue: function(e) {
            var t = Ge();
            return Ih(t, se.memoizedState, e)
        },
        useTransition: function() {
            var e = Ms(ni)[0],
                t = Ge().memoizedState;
            return [e, t]
        },
        useMutableSource: Th,
        useSyncExternalStore: Eh,
        useId: Fh,
        unstable_isNewReconciler: !1
    },
    ag = {
        readContext: We,
        useCallback: bh,
        useContext: We,
        useEffect: Ia,
        useImperativeHandle: _h,
        useInsertionEffect: Rh,
        useLayoutEffect: Vh,
        useMemo: Oh,
        useReducer: zs,
        useRef: Lh,
        useState: function() {
            return zs(ni)
        },
        useDebugValue: Fa,
        useDeferredValue: function(e) {
            var t = Ge();
            return se === null ? t.memoizedState = e : Ih(t, se.memoizedState, e)
        },
        useTransition: function() {
            var e = zs(ni)[0],
                t = Ge().memoizedState;
            return [e, t]
        },
        useMutableSource: Th,
        useSyncExternalStore: Eh,
        useId: Fh,
        unstable_isNewReconciler: !1
    };

function Xe(e, t) {
    if (e && e.defaultProps) {
        t = q({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function El(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Wo = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Cn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ce(),
            i = Ht(e),
            o = vt(r, i);
        o.payload = t, n != null && (o.callback = n), t = Bt(e, o, i), t !== null && (Je(t, e, i, r), Ki(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ce(),
            i = Ht(e),
            o = vt(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Bt(e, o, i), t !== null && (Je(t, e, i, r), Ki(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ce(),
            r = Ht(e),
            i = vt(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Bt(e, i, r), t !== null && (Je(t, e, r, n), Ki(t, e, r))
    }
};

function vc(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(i, o) : !0
}

function $h(e, t, n) {
    var r = !1,
        i = Gt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = We(o) : (i = ze(t) ? vn : Se.current, r = t.contextTypes, o = (r = r != null) ? Zn(e, i) : Gt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Wo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function yc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Wo.enqueueReplaceState(t, t.state, null)
}

function jl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, La(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = We(o) : (o = ze(t) ? vn : Se.current, i.context = Zn(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (El(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Wo.enqueueReplaceState(i, i.state, null), xo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function tr(e, t) {
    try {
        var n = "",
            r = t;
        do n += _0(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function As(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Nl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var ug = typeof WeakMap == "function" ? WeakMap : Map;

function Wh(e, t, n) {
    n = vt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Po || (Po = !0, Ol = r), Nl(e, t)
    }, n
}

function Gh(e, t, n) {
    n = vt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            Nl(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Nl(e, t), typeof r != "function" && (Ut === null ? Ut = new Set([this]) : Ut.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function xc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new ug;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = Cg.bind(null, e, t, n), t.then(e, e))
}

function wc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Sc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vt(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e)
}
var cg = Et.ReactCurrentOwner,
    Ne = !1;

function ke(e, t, n, r) {
    t.child = e === null ? Sh(t, null, n, r) : Jn(t, e.child, n, r)
}

function kc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return Kn(t, i), r = ba(e, t, n, r, o, i), n = Oa(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Tt(e, t, i)) : (K && n && Ta(t), t.flags |= 1, ke(e, t, r, i), t.child)
}

function Cc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Qa(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Kh(e, t, o, r, i)) : (e = Ji(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Xr, n(s, r) && e.ref === t.ref) return Tt(e, t, i)
    }
    return t.flags |= 1, e = $t(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Kh(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Xr(o, r) && e.ref === t.ref)
            if (Ne = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (Ne = !0);
            else return t.lanes = e.lanes, Tt(e, t, i)
    }
    return Ml(e, t, n, r, i)
}

function Qh(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, H(bn, Le), Le |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, H(bn, Le), Le |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, H(bn, Le), Le |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, H(bn, Le), Le |= r;
    return ke(e, t, i, n), t.child
}

function Xh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ml(e, t, n, r, i) {
    var o = ze(n) ? vn : Se.current;
    return o = Zn(t, o), Kn(t, i), n = ba(e, t, n, r, o, i), r = Oa(), e !== null && !Ne ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Tt(e, t, i)) : (K && r && Ta(t), t.flags |= 1, ke(e, t, n, i), t.child)
}

function Pc(e, t, n, r, i) {
    if (ze(n)) {
        var o = !0;
        po(t)
    } else o = !1;
    if (Kn(t, i), t.stateNode === null) Yi(e, t), $h(t, n, r), jl(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = We(u) : (u = ze(n) ? vn : Se.current, u = Zn(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && yc(t, s, r, u), Lt = !1;
        var h = t.memoizedState;
        s.state = h, xo(t, r, s, i), a = t.memoizedState, l !== r || h !== a || Me.current || Lt ? (typeof c == "function" && (El(t, n, c, r), a = t.memoizedState), (l = Lt || vc(t, n, l, r, h, a, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, Ch(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Xe(t.type, l), s.props = u, d = t.pendingProps, h = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = We(a) : (a = ze(n) ? vn : Se.current, a = Zn(t, a));
        var v = n.getDerivedStateFromProps;
        (c = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== d || h !== a) && yc(t, s, r, a), Lt = !1, h = t.memoizedState, s.state = h, xo(t, r, s, i);
        var y = t.memoizedState;
        l !== d || h !== y || Me.current || Lt ? (typeof v == "function" && (El(t, n, v, r), y = t.memoizedState), (u = Lt || vc(t, n, u, r, h, y, a) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return zl(e, t, n, r, o, i)
}

function zl(e, t, n, r, i, o) {
    Xh(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && uc(t, n, !1), Tt(e, t, o);
    r = t.stateNode, cg.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Jn(t, e.child, null, o), t.child = Jn(t, null, l, o)) : ke(e, t, l, o), t.memoizedState = r.state, i && uc(t, n, !0), t.child
}

function Yh(e) {
    var t = e.stateNode;
    t.pendingContext ? ac(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ac(e, t.context, !1), Ra(e, t.containerInfo)
}

function Tc(e, t, n, r, i) {
    return qn(), ja(i), t.flags |= 256, ke(e, t, n, r), t.child
}
var Al = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Ll(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Zh(e, t, n) {
    var r = t.pendingProps,
        i = Q.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), H(Q, i & 1), e === null) return Pl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = Qo(s, r, 0, null), e = mn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Ll(n), t.memoizedState = Al, e) : Ba(t, s));
    if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return dg(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = $t(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = $t(l, o) : (o = mn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? Ll(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Al, r
    }
    return o = e.child, e = o.sibling, r = $t(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ba(e, t) {
    return t = Qo({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Vi(e, t, n, r) {
    return r !== null && ja(r), Jn(t, e.child, null, n), e = Ba(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function dg(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = As(Error(C(422))), Vi(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = Qo({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = mn(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Jn(t, e.child, null, s), t.child.memoizedState = Ll(s), t.memoizedState = Al, o);
    if (!(t.mode & 1)) return Vi(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
        return r = l, o = Error(C(419)), r = As(o, r, void 0), Vi(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, Ne || l) {
        if (r = ce, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
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
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, Pt(e, i), Je(r, e, i, -1))
        }
        return Ka(), r = As(Error(C(421))), Vi(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pg.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Re = Ft(i.nextSibling), Ve = t, K = !0, Ze = null, e !== null && (Be[Ue++] = pt, Be[Ue++] = mt, Be[Ue++] = yn, pt = e.id, mt = e.overflow, yn = t), t = Ba(t, r.children), t.flags |= 4096, t)
}

function Ec(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Tl(e.return, t, n)
}

function Ls(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function qh(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (ke(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
            else if (e.tag === 19) Ec(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (H(Q, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && wo(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ls(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && wo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Ls(t, !0, n, null, o);
            break;
        case "together":
            Ls(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Yi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), wn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(C(153));
    if (t.child !== null) {
        for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = $t(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function fg(e, t, n) {
    switch (t.tag) {
        case 3:
            Yh(t), qn();
            break;
        case 5:
            Ph(t);
            break;
        case 1:
            ze(t.type) && po(t);
            break;
        case 4:
            Ra(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            H(vo, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (H(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Zh(e, t, n) : (H(Q, Q.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
            H(Q, Q.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return qh(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), H(Q, Q.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Qh(e, t, n)
    }
    return Tt(e, t, n)
}
var Jh, Rl, ep, tp;
Jh = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Rl = function() {};
ep = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, dn(lt.current);
        var o = null;
        switch (n) {
            case "input":
                i = tl(e, i), r = tl(e, r), o = [];
                break;
            case "select":
                i = q({}, i, {
                    value: void 0
                }), r = q({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = il(e, i), r = il(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = fo)
        }
        sl(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ur.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
                    } else n || (o || (o = []), o.push(u, n)), n = a;
            else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ur.hasOwnProperty(u) ? (a != null && u === "onScroll" && W("scroll", e), o || l === a || (o = [])) : (o = o || []).push(u, a))
        }
        n && (o = o || []).push("style", n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
tp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function yr(e, t) {
    if (!K) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function hg(e, t, n) {
    var r = t.pendingProps;
    switch (Ea(t), t.tag) {
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
            return ge(t), null;
        case 1:
            return ze(t.type) && ho(), ge(t), null;
        case 3:
            return r = t.stateNode, er(), G(Me), G(Se), Da(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Li(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (Bl(Ze), Ze = null))), Rl(e, t), ge(t), null;
        case 5:
            Va(t);
            var i = dn(ei.current);
            if (n = t.type, e !== null && t.stateNode != null) ep(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(C(166));
                    return ge(t), null
                }
                if (e = dn(lt.current), Li(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[ot] = t, r[qr] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            W("cancel", r), W("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            W("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < jr.length; i++) W(jr[i], r);
                            break;
                        case "source":
                            W("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            W("error", r), W("load", r);
                            break;
                        case "details":
                            W("toggle", r);
                            break;
                        case "input":
                            Du(r, o), W("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, W("invalid", r);
                            break;
                        case "textarea":
                            bu(r, o), W("invalid", r)
                    }
                    sl(n, o), i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var l = o[s];
                            s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && Ai(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && Ai(r.textContent, l, e), i = ["children", "" + l]) : Ur.hasOwnProperty(s) && l != null && s === "onScroll" && W("scroll", r)
                        } switch (n) {
                        case "input":
                            Ci(r), _u(r, o, !0);
                            break;
                        case "textarea":
                            Ci(r), Ou(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = fo)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ot] = t, e[qr] = r, Jh(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = ll(n, r), n) {
                            case "dialog":
                                W("cancel", e), W("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                W("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < jr.length; i++) W(jr[i], e);
                                i = r;
                                break;
                            case "source":
                                W("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                W("error", e), W("load", e), i = r;
                                break;
                            case "details":
                                W("toggle", e), i = r;
                                break;
                            case "input":
                                Du(e, r), i = tl(e, r), W("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = q({}, r, {
                                    value: void 0
                                }), W("invalid", e);
                                break;
                            case "textarea":
                                bu(e, r), i = il(e, r), W("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        sl(n, i),
                        l = i;
                        for (o in l)
                            if (l.hasOwnProperty(o)) {
                                var a = l[o];
                                o === "style" ? Lf(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && zf(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Hr(e, a) : typeof a == "number" && Hr(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ur.hasOwnProperty(o) ? a != null && o === "onScroll" && W("scroll", e) : a != null && da(e, o, a, s))
                            } switch (n) {
                            case "input":
                                Ci(e), _u(e, r, !1);
                                break;
                            case "textarea":
                                Ci(e), Ou(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Wt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Hn(e, !!r.multiple, o, !1) : r.defaultValue != null && Hn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = fo)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ge(t), null;
        case 6:
            if (e && t.stateNode != null) tp(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
                if (n = dn(ei.current), dn(lt.current), Li(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[ot] = t, (o = r.nodeValue !== n) && (e = Ve, e !== null)) switch (e.tag) {
                        case 3:
                            Ai(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ai(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ot] = t, t.stateNode = r
            }
            return ge(t), null;
        case 13:
            if (G(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (K && Re !== null && t.mode & 1 && !(t.flags & 128)) xh(), qn(), t.flags |= 98560, o = !1;
                else if (o = Li(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(C(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(C(317));
                        o[ot] = t
                    } else qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ge(t), o = !1
                } else Ze !== null && (Bl(Ze), Ze = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? le === 0 && (le = 3) : Ka())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
        case 4:
            return er(), Rl(e, t), e === null && Yr(t.stateNode.containerInfo), ge(t), null;
        case 10:
            return za(t.type._context), ge(t), null;
        case 17:
            return ze(t.type) && ho(), ge(t), null;
        case 19:
            if (G(Q), o = t.memoizedState, o === null) return ge(t), null;
            if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
                if (r) yr(o, !1);
                else {
                    if (le !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = wo(e), s !== null) {
                                for (t.flags |= 128, yr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return H(Q, Q.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && ie() > nr && (t.flags |= 128, r = !0, yr(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = wo(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !K) return ge(t), null
                    } else 2 * ie() - o.renderingStartTime > nr && n !== 1073741824 && (t.flags |= 128, r = !0, yr(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = ie(), t.sibling = null, n = Q.current, H(Q, r ? n & 1 | 2 : n & 1), t) : (ge(t), null);
        case 22:
        case 23:
            return Ga(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Le & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(C(156, t.tag))
}

function pg(e, t) {
    switch (Ea(t), t.tag) {
        case 1:
            return ze(t.type) && ho(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return er(), G(Me), G(Se), Da(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Va(t), null;
        case 13:
            if (G(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(C(340));
                qn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return G(Q), null;
        case 4:
            return er(), null;
        case 10:
            return za(t.type._context), null;
        case 22:
        case 23:
            return Ga(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Di = !1,
    ye = !1,
    mg = typeof WeakSet == "function" ? WeakSet : Set,
    M = null;

function _n(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ne(e, t, r)
        } else n.current = null
}

function Vl(e, t, n) {
    try {
        n()
    } catch (r) {
        ne(e, t, r)
    }
}
var jc = !1;

function gg(e, t) {
    if (vl = ao, e = sh(), Pa(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    a = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    h = null;
                t: for (;;) {
                    for (var v; d !== n || i !== 0 && d.nodeType !== 3 || (l = s + i), d !== o || r !== 0 && d.nodeType !== 3 || (a = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (v = d.firstChild) !== null;) h = d, d = v;
                    for (;;) {
                        if (d === e) break t;
                        if (h === n && ++u === i && (l = s), h === o && ++c === r && (a = s), (v = d.nextSibling) !== null) break;
                        d = h, h = d.parentNode
                    }
                    d = v
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (yl = {
            focusedElem: e,
            selectionRange: n
        }, ao = !1, M = t; M !== null;)
        if (t = M, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, M = e;
        else
            for (; M !== null;) {
                t = M;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var x = y.memoizedProps,
                                    S = y.memoizedState,
                                    m = t.stateNode,
                                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Xe(t.type, x), S);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(C(163))
                    }
                } catch (w) {
                    ne(t, t.return, w)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, M = e;
                    break
                }
                M = t.return
            }
    return y = jc, jc = !1, y
}

function _r(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && Vl(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function Go(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Dl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function np(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, np(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[ot], delete t[qr], delete t[Sl], delete t[q1], delete t[J1])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function rp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Nc(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || rp(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function _l(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = fo));
    else if (r !== 4 && (e = e.child, e !== null))
        for (_l(e, t, n), e = e.sibling; e !== null;) _l(e, t, n), e = e.sibling
}

function bl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (bl(e, t, n), e = e.sibling; e !== null;) bl(e, t, n), e = e.sibling
}
var de = null,
    Ye = !1;

function jt(e, t, n) {
    for (n = n.child; n !== null;) ip(e, t, n), n = n.sibling
}

function ip(e, t, n) {
    if (st && typeof st.onCommitFiberUnmount == "function") try {
        st.onCommitFiberUnmount(Oo, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ye || _n(n, t);
        case 6:
            var r = de,
                i = Ye;
            de = null, jt(e, t, n), de = r, Ye = i, de !== null && (Ye ? (e = de, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : de.removeChild(n.stateNode));
            break;
        case 18:
            de !== null && (Ye ? (e = de, n = n.stateNode, e.nodeType === 8 ? Ts(e.parentNode, n) : e.nodeType === 1 && Ts(e, n), Kr(e)) : Ts(de, n.stateNode));
            break;
        case 4:
            r = de, i = Ye, de = n.stateNode.containerInfo, Ye = !0, jt(e, t, n), de = r, Ye = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && Vl(n, t, s), i = i.next
                } while (i !== r)
            }
            jt(e, t, n);
            break;
        case 1:
            if (!ye && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                ne(n, t, l)
            }
            jt(e, t, n);
            break;
        case 21:
            jt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, jt(e, t, n), ye = r) : jt(e, t, n);
            break;
        default:
            jt(e, t, n)
    }
}

function Mc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new mg), t.forEach(function(r) {
            var i = Tg.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function Qe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            de = l.stateNode, Ye = !1;
                            break e;
                        case 3:
                            de = l.stateNode.containerInfo, Ye = !0;
                            break e;
                        case 4:
                            de = l.stateNode.containerInfo, Ye = !0;
                            break e
                    }
                    l = l.return
                }
                if (de === null) throw Error(C(160));
                ip(o, s, i), de = null, Ye = !1;
                var a = i.alternate;
                a !== null && (a.return = null), i.return = null
            } catch (u) {
                ne(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) op(t, e), t = t.sibling
}

function op(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Qe(t, e), rt(e), r & 4) {
                try {
                    _r(3, e, e.return), Go(3, e)
                } catch (x) {
                    ne(e, e.return, x)
                }
                try {
                    _r(5, e, e.return)
                } catch (x) {
                    ne(e, e.return, x)
                }
            }
            break;
        case 1:
            Qe(t, e), rt(e), r & 512 && n !== null && _n(n, n.return);
            break;
        case 5:
            if (Qe(t, e), rt(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Hr(i, "")
                } catch (x) {
                    ne(e, e.return, x)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    l = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && o.type === "radio" && o.name != null && jf(i, o), ll(l, s);
                    var u = ll(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var c = a[s],
                            d = a[s + 1];
                        c === "style" ? Lf(i, d) : c === "dangerouslySetInnerHTML" ? zf(i, d) : c === "children" ? Hr(i, d) : da(i, c, d, u)
                    }
                    switch (l) {
                        case "input":
                            nl(i, o);
                            break;
                        case "textarea":
                            Nf(i, o);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var v = o.value;
                            v != null ? Hn(i, !!o.multiple, v, !1) : h !== !!o.multiple && (o.defaultValue != null ? Hn(i, !!o.multiple, o.defaultValue, !0) : Hn(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[qr] = o
                } catch (x) {
                    ne(e, e.return, x)
                }
            }
            break;
        case 6:
            if (Qe(t, e), rt(e), r & 4) {
                if (e.stateNode === null) throw Error(C(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (x) {
                    ne(e, e.return, x)
                }
            }
            break;
        case 3:
            if (Qe(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Kr(t.containerInfo)
            } catch (x) {
                ne(e, e.return, x)
            }
            break;
        case 4:
            Qe(t, e), rt(e);
            break;
        case 13:
            Qe(t, e), rt(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || ($a = ie())), r & 4 && Mc(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (u = ye) || c, Qe(t, e), ye = u) : Qe(t, e), rt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (M = e, c = e.child; c !== null;) {
                        for (d = M = c; M !== null;) {
                            switch (h = M, v = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    _r(4, h, h.return);
                                    break;
                                case 1:
                                    _n(h, h.return);
                                    var y = h.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                        } catch (x) {
                                            ne(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    _n(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Ac(d);
                                        continue
                                    }
                            }
                            v !== null ? (v.return = h, M = v) : Ac(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                i = d.stateNode, u ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = d.stateNode, a = d.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Af("display", s))
                            } catch (x) {
                                ne(e, e.return, x)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (x) {
                            ne(e, e.return, x)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            Qe(t, e), rt(e), r & 4 && Mc(e);
            break;
        case 21:
            break;
        default:
            Qe(t, e), rt(e)
    }
}

function rt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (rp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(C(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Hr(i, ""), r.flags &= -33);
                    var o = Nc(e);
                    bl(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = Nc(e);
                    _l(e, l, s);
                    break;
                default:
                    throw Error(C(161))
            }
        }
        catch (a) {
            ne(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function vg(e, t, n) {
    M = e, sp(e)
}

function sp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null;) {
        var i = M,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Di;
            if (!s) {
                var l = i.alternate,
                    a = l !== null && l.memoizedState !== null || ye;
                l = Di;
                var u = ye;
                if (Di = s, (ye = a) && !u)
                    for (M = i; M !== null;) s = M, a = s.child, s.tag === 22 && s.memoizedState !== null ? Lc(i) : a !== null ? (a.return = s, M = a) : Lc(i);
                for (; o !== null;) M = o, sp(o), o = o.sibling;
                M = i, Di = l, ye = u
            }
            zc(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, M = o) : zc(e)
    }
}

function zc(e) {
    for (; M !== null;) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ye || Go(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ye)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var o = t.updateQueue;
                        o !== null && pc(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            pc(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
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
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Kr(d)
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
                        throw Error(C(163))
                }
                ye || t.flags & 512 && Dl(t)
            } catch (h) {
                ne(t, t.return, h)
            }
        }
        if (t === e) {
            M = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, M = n;
            break
        }
        M = t.return
    }
}

function Ac(e) {
    for (; M !== null;) {
        var t = M;
        if (t === e) {
            M = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, M = n;
            break
        }
        M = t.return
    }
}

function Lc(e) {
    for (; M !== null;) {
        var t = M;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Go(4, t)
                    } catch (a) {
                        ne(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            ne(t, i, a)
                        }
                    }
                    var o = t.return;
                    try {
                        Dl(t)
                    } catch (a) {
                        ne(t, o, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Dl(t)
                    } catch (a) {
                        ne(t, s, a)
                    }
            }
        } catch (a) {
            ne(t, t.return, a)
        }
        if (t === e) {
            M = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, M = l;
            break
        }
        M = t.return
    }
}
var yg = Math.ceil,
    Co = Et.ReactCurrentDispatcher,
    Ua = Et.ReactCurrentOwner,
    $e = Et.ReactCurrentBatchConfig,
    I = 0,
    ce = null,
    oe = null,
    he = 0,
    Le = 0,
    bn = Zt(0),
    le = 0,
    ii = null,
    wn = 0,
    Ko = 0,
    Ha = 0,
    br = null,
    je = null,
    $a = 0,
    nr = 1 / 0,
    ft = null,
    Po = !1,
    Ol = null,
    Ut = null,
    _i = !1,
    _t = null,
    To = 0,
    Or = 0,
    Il = null,
    Zi = -1,
    qi = 0;

function Ce() {
    return I & 6 ? ie() : Zi !== -1 ? Zi : Zi = ie()
}

function Ht(e) {
    return e.mode & 1 ? I & 2 && he !== 0 ? he & -he : tg.transition !== null ? (qi === 0 && (qi = $f()), qi) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zf(e.type)), e) : 1
}

function Je(e, t, n, r) {
    if (50 < Or) throw Or = 0, Il = null, Error(C(185));
    fi(e, n, r), (!(I & 2) || e !== ce) && (e === ce && (!(I & 2) && (Ko |= n), le === 4 && Vt(e, he)), Ae(e, r), n === 1 && I === 0 && !(t.mode & 1) && (nr = ie() + 500, Ho && qt()))
}

function Ae(e, t) {
    var n = e.callbackNode;
    t1(e, t);
    var r = lo(e, e === ce ? he : 0);
    if (r === 0) n !== null && Bu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Bu(n), t === 1) e.tag === 0 ? eg(Rc.bind(null, e)) : gh(Rc.bind(null, e)), Y1(function() {
            !(I & 6) && qt()
        }), n = null;
        else {
            switch (Wf(r)) {
                case 1:
                    n = ga;
                    break;
                case 4:
                    n = Uf;
                    break;
                case 16:
                    n = so;
                    break;
                case 536870912:
                    n = Hf;
                    break;
                default:
                    n = so
            }
            n = pp(n, lp.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function lp(e, t) {
    if (Zi = -1, qi = 0, I & 6) throw Error(C(327));
    var n = e.callbackNode;
    if (Qn() && e.callbackNode !== n) return null;
    var r = lo(e, e === ce ? he : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Eo(e, r);
    else {
        t = r;
        var i = I;
        I |= 2;
        var o = up();
        (ce !== e || he !== t) && (ft = null, nr = ie() + 500, pn(e, t));
        do try {
            Sg();
            break
        } catch (l) {
            ap(e, l)
        }
        while (!0);
        Ma(), Co.current = o, I = i, oe !== null ? t = 0 : (ce = null, he = 0, t = le)
    }
    if (t !== 0) {
        if (t === 2 && (i = fl(e), i !== 0 && (r = i, t = Fl(e, i))), t === 1) throw n = ii, pn(e, 0), Vt(e, r), Ae(e, ie()), n;
        if (t === 6) Vt(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !xg(i) && (t = Eo(e, r), t === 2 && (o = fl(e), o !== 0 && (r = o, t = Fl(e, o))), t === 1)) throw n = ii, pn(e, 0), Vt(e, r), Ae(e, ie()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(C(345));
                case 2:
                    sn(e, je, ft);
                    break;
                case 3:
                    if (Vt(e, r), (r & 130023424) === r && (t = $a + 500 - ie(), 10 < t)) {
                        if (lo(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Ce(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = wl(sn.bind(null, e, je, ft), t);
                        break
                    }
                    sn(e, je, ft);
                    break;
                case 4:
                    if (Vt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - qe(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yg(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = wl(sn.bind(null, e, je, ft), r);
                        break
                    }
                    sn(e, je, ft);
                    break;
                case 5:
                    sn(e, je, ft);
                    break;
                default:
                    throw Error(C(329))
            }
        }
    }
    return Ae(e, ie()), e.callbackNode === n ? lp.bind(null, e) : null
}

function Fl(e, t) {
    var n = br;
    return e.current.memoizedState.isDehydrated && (pn(e, t).flags |= 256), e = Eo(e, t), e !== 2 && (t = je, je = n, t !== null && Bl(t)), e
}

function Bl(e) {
    je === null ? je = e : je.push.apply(je, e)
}

function xg(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!et(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Vt(e, t) {
    for (t &= ~Ha, t &= ~Ko, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - qe(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Rc(e) {
    if (I & 6) throw Error(C(327));
    Qn();
    var t = lo(e, 0);
    if (!(t & 1)) return Ae(e, ie()), null;
    var n = Eo(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = fl(e);
        r !== 0 && (t = r, n = Fl(e, r))
    }
    if (n === 1) throw n = ii, pn(e, 0), Vt(e, t), Ae(e, ie()), n;
    if (n === 6) throw Error(C(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, sn(e, je, ft), Ae(e, ie()), null
}

function Wa(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t)
    } finally {
        I = n, I === 0 && (nr = ie() + 500, Ho && qt())
    }
}

function Sn(e) {
    _t !== null && _t.tag === 0 && !(I & 6) && Qn();
    var t = I;
    I |= 1;
    var n = $e.transition,
        r = B;
    try {
        if ($e.transition = null, B = 1, e) return e()
    } finally {
        B = r, $e.transition = n, I = t, !(I & 6) && qt()
    }
}

function Ga() {
    Le = bn.current, G(bn)
}

function pn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, X1(n)), oe !== null)
        for (n = oe.return; n !== null;) {
            var r = n;
            switch (Ea(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && ho();
                    break;
                case 3:
                    er(), G(Me), G(Se), Da();
                    break;
                case 5:
                    Va(r);
                    break;
                case 4:
                    er();
                    break;
                case 13:
                    G(Q);
                    break;
                case 19:
                    G(Q);
                    break;
                case 10:
                    za(r.type._context);
                    break;
                case 22:
                case 23:
                    Ga()
            }
            n = n.return
        }
    if (ce = e, oe = e = $t(e.current, null), he = Le = t, le = 0, ii = null, Ha = Ko = wn = 0, je = br = null, cn !== null) {
        for (t = 0; t < cn.length; t++)
            if (n = cn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i, r.next = s
                }
                n.pending = r
            } cn = null
    }
    return e
}

function ap(e, t) {
    do {
        var n = oe;
        try {
            if (Ma(), Qi.current = ko, So) {
                for (var r = Z.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                So = !1
            }
            if (xn = 0, ue = se = Z = null, Dr = !1, ti = 0, Ua.current = null, n === null || n.return === null) {
                le = 1, ii = t, oe = null;
                break
            }
            e: {
                var o = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (t = he, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a,
                        c = l,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var h = c.alternate;
                        h ? (c.updateQueue = h.updateQueue, c.memoizedState = h.memoizedState, c.lanes = h.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var v = wc(s);
                    if (v !== null) {
                        v.flags &= -257, Sc(v, s, l, o, t), v.mode & 1 && xc(o, u, t), t = v, a = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var x = new Set;
                            x.add(a), t.updateQueue = x
                        } else y.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            xc(o, u, t), Ka();
                            break e
                        }
                        a = Error(C(426))
                    }
                } else if (K && l.mode & 1) {
                    var S = wc(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), Sc(S, s, l, o, t), ja(tr(a, l));
                        break e
                    }
                }
                o = a = tr(a, l),
                le !== 4 && (le = 2),
                br === null ? br = [o] : br.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var m = Wh(o, a, t);
                            hc(o, m);
                            break e;
                        case 1:
                            l = a;
                            var p = o.type,
                                g = o.stateNode;
                            if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Ut === null || !Ut.has(g)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var w = Gh(o, l, t);
                                hc(o, w);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            dp(n)
        } catch (k) {
            t = k, oe === n && n !== null && (oe = n = n.return);
            continue
        }
        break
    } while (!0)
}

function up() {
    var e = Co.current;
    return Co.current = ko, e === null ? ko : e
}

function Ka() {
    (le === 0 || le === 3 || le === 2) && (le = 4), ce === null || !(wn & 268435455) && !(Ko & 268435455) || Vt(ce, he)
}

function Eo(e, t) {
    var n = I;
    I |= 2;
    var r = up();
    (ce !== e || he !== t) && (ft = null, pn(e, t));
    do try {
        wg();
        break
    } catch (i) {
        ap(e, i)
    }
    while (!0);
    if (Ma(), I = n, Co.current = r, oe !== null) throw Error(C(261));
    return ce = null, he = 0, le
}

function wg() {
    for (; oe !== null;) cp(oe)
}

function Sg() {
    for (; oe !== null && !G0();) cp(oe)
}

function cp(e) {
    var t = hp(e.alternate, e, Le);
    e.memoizedProps = e.pendingProps, t === null ? dp(e) : oe = t, Ua.current = null
}

function dp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = pg(n, t), n !== null) {
                n.flags &= 32767, oe = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                le = 6, oe = null;
                return
            }
        } else if (n = hg(n, t, Le), n !== null) {
            oe = n;
            return
        }
        if (t = t.sibling, t !== null) {
            oe = t;
            return
        }
        oe = t = e
    } while (t !== null);
    le === 0 && (le = 5)
}

function sn(e, t, n) {
    var r = B,
        i = $e.transition;
    try {
        $e.transition = null, B = 1, kg(e, t, n, r)
    } finally {
        $e.transition = i, B = r
    }
    return null
}

function kg(e, t, n, r) {
    do Qn(); while (_t !== null);
    if (I & 6) throw Error(C(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (n1(e, o), e === ce && (oe = ce = null, he = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _i || (_i = !0, pp(so, function() {
            return Qn(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = $e.transition, $e.transition = null;
        var s = B;
        B = 1;
        var l = I;
        I |= 4, Ua.current = null, gg(e, n), op(n, e), U1(yl), ao = !!vl, yl = vl = null, e.current = n, vg(n), K0(), I = l, B = s, $e.transition = o
    } else e.current = n;
    if (_i && (_i = !1, _t = e, To = i), o = e.pendingLanes, o === 0 && (Ut = null), Y0(n.stateNode), Ae(e, ie()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Po) throw Po = !1, e = Ol, Ol = null, e;
    return To & 1 && e.tag !== 0 && Qn(), o = e.pendingLanes, o & 1 ? e === Il ? Or++ : (Or = 0, Il = e) : Or = 0, qt(), null
}

function Qn() {
    if (_t !== null) {
        var e = Wf(To),
            t = $e.transition,
            n = B;
        try {
            if ($e.transition = null, B = 16 > e ? 16 : e, _t === null) var r = !1;
            else {
                if (e = _t, _t = null, To = 0, I & 6) throw Error(C(331));
                var i = I;
                for (I |= 4, M = e.current; M !== null;) {
                    var o = M,
                        s = o.child;
                    if (M.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (M = u; M !== null;) {
                                    var c = M;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            _r(8, c, o)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, M = d;
                                    else
                                        for (; M !== null;) {
                                            c = M;
                                            var h = c.sibling,
                                                v = c.return;
                                            if (np(c), c === u) {
                                                M = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = v, M = h;
                                                break
                                            }
                                            M = v
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var x = y.child;
                                if (x !== null) {
                                    y.child = null;
                                    do {
                                        var S = x.sibling;
                                        x.sibling = null, x = S
                                    } while (x !== null)
                                }
                            }
                            M = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, M = s;
                    else e: for (; M !== null;) {
                        if (o = M, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                _r(9, o, o.return)
                        }
                        var m = o.sibling;
                        if (m !== null) {
                            m.return = o.return, M = m;
                            break e
                        }
                        M = o.return
                    }
                }
                var p = e.current;
                for (M = p; M !== null;) {
                    s = M;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, M = g;
                    else e: for (s = p; M !== null;) {
                        if (l = M, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Go(9, l)
                            }
                        } catch (k) {
                            ne(l, l.return, k)
                        }
                        if (l === s) {
                            M = null;
                            break e
                        }
                        var w = l.sibling;
                        if (w !== null) {
                            w.return = l.return, M = w;
                            break e
                        }
                        M = l.return
                    }
                }
                if (I = i, qt(), st && typeof st.onPostCommitFiberRoot == "function") try {
                    st.onPostCommitFiberRoot(Oo, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            B = n, $e.transition = t
        }
    }
    return !1
}

function Vc(e, t, n) {
    t = tr(n, t), t = Wh(e, t, 1), e = Bt(e, t, 1), t = Ce(), e !== null && (fi(e, 1, t), Ae(e, t))
}

function ne(e, t, n) {
    if (e.tag === 3) Vc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Vc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
                    e = tr(n, e), e = Gh(t, e, 1), t = Bt(t, e, 1), e = Ce(), t !== null && (fi(t, 1, e), Ae(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Cg(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ce(), e.pingedLanes |= e.suspendedLanes & n, ce === e && (he & n) === n && (le === 4 || le === 3 && (he & 130023424) === he && 500 > ie() - $a ? pn(e, 0) : Ha |= n), Ae(e, t)
}

function fp(e, t) {
    t === 0 && (e.mode & 1 ? (t = Ei, Ei <<= 1, !(Ei & 130023424) && (Ei = 4194304)) : t = 1);
    var n = Ce();
    e = Pt(e, t), e !== null && (fi(e, t, n), Ae(e, n))
}

function Pg(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), fp(e, n)
}

function Tg(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(C(314))
    }
    r !== null && r.delete(t), fp(e, n)
}
var hp;
hp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Me.current) Ne = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ne = !1, fg(e, t, n);
            Ne = !!(e.flags & 131072)
        }
    else Ne = !1, K && t.flags & 1048576 && vh(t, go, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Yi(e, t), e = t.pendingProps;
            var i = Zn(t, Se.current);
            Kn(t, n), i = ba(null, t, r, e, i, n);
            var o = Oa();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ze(r) ? (o = !0, po(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, La(t), i.updater = Wo, t.stateNode = i, i._reactInternals = t, jl(t, r, e, n), t = zl(null, t, r, !0, o, n)) : (t.tag = 0, K && o && Ta(t), ke(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Yi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = jg(r), e = Xe(r, e), i) {
                    case 0:
                        t = Ml(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Pc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = kc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Cc(null, t, r, Xe(r.type, e), n);
                        break e
                }
                throw Error(C(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), Ml(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), Pc(e, t, r, i, n);
        case 3:
            e: {
                if (Yh(t), e === null) throw Error(C(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                Ch(e, t),
                xo(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = tr(Error(C(423)), t), t = Tc(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = tr(Error(C(424)), t), t = Tc(e, t, r, n, i);
                    break e
                } else
                    for (Re = Ft(t.stateNode.containerInfo.firstChild), Ve = t, K = !0, Ze = null, n = Sh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (qn(), r === i) {
                        t = Tt(e, t, n);
                        break e
                    }
                    ke(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Ph(t), e === null && Pl(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, xl(r, i) ? s = null : o !== null && xl(r, o) && (t.flags |= 32), Xh(e, t), ke(e, t, s, n), t.child;
        case 6:
            return e === null && Pl(t), null;
        case 13:
            return Zh(e, t, n);
        case 4:
            return Ra(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Jn(t, null, r, n) : ke(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), kc(e, t, r, i, n);
        case 7:
            return ke(e, t, t.pendingProps, n), t.child;
        case 8:
            return ke(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ke(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, H(vo, r._currentValue), r._currentValue = s, o !== null)
                    if (et(o.value, s)) {
                        if (o.children === i.children && !Me.current) {
                            t = Tt(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var l = o.dependencies;
                            if (l !== null) {
                                s = o.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (o.tag === 1) {
                                            a = vt(-1, n & -n), a.tag = 2;
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? a.next = a : (a.next = c.next, c.next = a), u.pending = a
                                            }
                                        }
                                        o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Tl(o.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(C(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Tl(s, n, t), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling, o !== null) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                ke(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Kn(t, n), i = We(i), r = r(i), t.flags |= 1, ke(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Xe(r, t.pendingProps), i = Xe(r.type, i), Cc(e, t, r, i, n);
        case 15:
            return Kh(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Xe(r, i), Yi(e, t), t.tag = 1, ze(r) ? (e = !0, po(t)) : e = !1, Kn(t, n), $h(t, r, i), jl(t, r, i, n), zl(null, t, r, !0, e, n);
        case 19:
            return qh(e, t, n);
        case 22:
            return Qh(e, t, n)
    }
    throw Error(C(156, t.tag))
};

function pp(e, t) {
    return Bf(e, t)
}

function Eg(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function He(e, t, n, r) {
    return new Eg(e, t, n, r)
}

function Qa(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function jg(e) {
    if (typeof e == "function") return Qa(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === ha) return 11;
        if (e === pa) return 14
    }
    return 2
}

function $t(e, t) {
    var n = e.alternate;
    return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ji(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") Qa(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case jn:
            return mn(n.children, i, o, t);
        case fa:
            s = 8, i |= 8;
            break;
        case Zs:
            return e = He(12, n, t, i | 2), e.elementType = Zs, e.lanes = o, e;
        case qs:
            return e = He(13, n, t, i), e.elementType = qs, e.lanes = o, e;
        case Js:
            return e = He(19, n, t, i), e.elementType = Js, e.lanes = o, e;
        case Pf:
            return Qo(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case kf:
                    s = 10;
                    break e;
                case Cf:
                    s = 9;
                    break e;
                case ha:
                    s = 11;
                    break e;
                case pa:
                    s = 14;
                    break e;
                case At:
                    s = 16, r = null;
                    break e
            }
            throw Error(C(130, e == null ? e : typeof e, ""))
    }
    return t = He(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function mn(e, t, n, r) {
    return e = He(7, e, r, t), e.lanes = n, e
}

function Qo(e, t, n, r) {
    return e = He(22, e, r, t), e.elementType = Pf, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Rs(e, t, n) {
    return e = He(6, e, null, t), e.lanes = n, e
}

function Vs(e, t, n) {
    return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Ng(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ps(0), this.expirationTimes = ps(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ps(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Xa(e, t, n, r, i, o, s, l, a) {
    return e = new Ng(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = He(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, La(o), e
}

function Mg(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: En,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function mp(e) {
    if (!e) return Gt;
    e = e._reactInternals;
    e: {
        if (Cn(e) !== e || e.tag !== 1) throw Error(C(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ze(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(C(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ze(n)) return mh(e, n, t)
    }
    return t
}

function gp(e, t, n, r, i, o, s, l, a) {
    return e = Xa(n, r, !0, e, i, o, s, l, a), e.context = mp(null), n = e.current, r = Ce(), i = Ht(n), o = vt(r, i), o.callback = t ?? null, Bt(n, o, i), e.current.lanes = i, fi(e, i, r), Ae(e, r), e
}

function Xo(e, t, n, r) {
    var i = t.current,
        o = Ce(),
        s = Ht(i);
    return n = mp(n), t.context === null ? t.context = n : t.pendingContext = n, t = vt(o, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(i, t, s), e !== null && (Je(e, i, s, o), Ki(e, i, s)), s
}

function jo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Dc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ya(e, t) {
    Dc(e, t), (e = e.alternate) && Dc(e, t)
}

function zg() {
    return null
}
var vp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Za(e) {
    this._internalRoot = e
}
Yo.prototype.render = Za.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(C(409));
    Xo(e, t, null, null)
};
Yo.prototype.unmount = Za.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Sn(function() {
            Xo(null, e, null, null)
        }), t[Ct] = null
    }
};

function Yo(e) {
    this._internalRoot = e
}
Yo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Qf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
        Rt.splice(n, 0, e), n === 0 && Yf(e)
    }
};

function qa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function Zo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function _c() {}

function Ag(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var u = jo(s);
                o.call(u)
            }
        }
        var s = gp(t, r, e, 0, null, !1, !1, "", _c);
        return e._reactRootContainer = s, e[Ct] = s.current, Yr(e.nodeType === 8 ? e.parentNode : e), Sn(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = jo(a);
            l.call(u)
        }
    }
    var a = Xa(e, 0, !1, null, null, !1, !1, "", _c);
    return e._reactRootContainer = a, e[Ct] = a.current, Yr(e.nodeType === 8 ? e.parentNode : e), Sn(function() {
        Xo(t, a, n, r)
    }), a
}

function qo(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = jo(s);
                l.call(a)
            }
        }
        Xo(t, s, e, i)
    } else s = Ag(n, t, e, i, r);
    return jo(s)
}
Gf = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Er(t.pendingLanes);
                n !== 0 && (va(t, n | 1), Ae(t, ie()), !(I & 6) && (nr = ie() + 500, qt()))
            }
            break;
        case 13:
            Sn(function() {
                var r = Pt(e, 1);
                if (r !== null) {
                    var i = Ce();
                    Je(r, e, 1, i)
                }
            }), Ya(e, 1)
    }
};
ya = function(e) {
    if (e.tag === 13) {
        var t = Pt(e, 134217728);
        if (t !== null) {
            var n = Ce();
            Je(t, e, 134217728, n)
        }
        Ya(e, 134217728)
    }
};
Kf = function(e) {
    if (e.tag === 13) {
        var t = Ht(e),
            n = Pt(e, t);
        if (n !== null) {
            var r = Ce();
            Je(n, e, t, r)
        }
        Ya(e, t)
    }
};
Qf = function() {
    return B
};
Xf = function(e, t) {
    var n = B;
    try {
        return B = e, t()
    } finally {
        B = n
    }
};
ul = function(e, t, n) {
    switch (t) {
        case "input":
            if (nl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Uo(r);
                        if (!i) throw Error(C(90));
                        Ef(r), nl(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Nf(e, n);
            break;
        case "select":
            t = n.value, t != null && Hn(e, !!n.multiple, t, !1)
    }
};
Df = Wa;
_f = Sn;
var Lg = {
        usingClientEntryPoint: !1,
        Events: [pi, An, Uo, Rf, Vf, Wa]
    },
    xr = {
        findFiberByHostInstance: un,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Rg = {
        bundleType: xr.bundleType,
        version: xr.version,
        rendererPackageName: xr.rendererPackageName,
        rendererConfig: xr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Et.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = If(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: xr.findFiberByHostInstance || zg,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bi.isDisabled && bi.supportsFiber) try {
        Oo = bi.inject(Rg), st = bi
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lg;
be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qa(t)) throw Error(C(200));
    return Mg(e, t, null, n)
};
be.createRoot = function(e, t) {
    if (!qa(e)) throw Error(C(299));
    var n = !1,
        r = "",
        i = vp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Xa(e, 1, !1, null, null, n, !1, r, i), e[Ct] = t.current, Yr(e.nodeType === 8 ? e.parentNode : e), new Za(t)
};
be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
    return e = If(t), e = e === null ? null : e.stateNode, e
};
be.flushSync = function(e) {
    return Sn(e)
};
be.hydrate = function(e, t, n) {
    if (!Zo(t)) throw Error(C(200));
    return qo(null, e, t, !0, n)
};
be.hydrateRoot = function(e, t, n) {
    if (!qa(e)) throw Error(C(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        s = vp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = gp(t, null, e, 1, n ?? null, i, !1, o, s), e[Ct] = t.current, Yr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Yo(t)
};
be.render = function(e, t, n) {
    if (!Zo(t)) throw Error(C(200));
    return qo(null, e, t, !1, n)
};
be.unmountComponentAtNode = function(e) {
    if (!Zo(e)) throw Error(C(40));
    return e._reactRootContainer ? (Sn(function() {
        qo(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ct] = null
        })
    }), !0) : !1
};
be.unstable_batchedUpdates = Wa;
be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Zo(n)) throw Error(C(200));
    if (e == null || e._reactInternals === void 0) throw Error(C(38));
    return qo(e, t, n, !1, r)
};
be.version = "18.3.1-next-f1338f8080-20240426";

function yp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yp)
    } catch (e) {
        console.error(e)
    }
}
yp(), yf.exports = be;
var Vg = yf.exports,
    xp, bc = Vg;
xp = bc.createRoot, bc.hydrateRoot;

function Dg(e) {
    if (typeof Proxy > "u") return e;
    const t = new Map,
        n = (...r) => e(...r);
    return new Proxy(n, {
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i))
    })
}

function oi(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Ul = e => Array.isArray(e);

function wp(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function si(e) {
    return typeof e == "string" || Array.isArray(e)
}

function Oc(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function Ja(e, t, n, r) {
    if (typeof t == "function") {
        const [i, o] = Oc(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, o] = Oc(r);
        t = t(n !== void 0 ? n : e.custom, i, o)
    }
    return t
}

function Jo(e, t, n) {
    const r = e.getProps();
    return Ja(r, t, n !== void 0 ? n : r.custom, e)
}
const eu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    tu = ["initial", ...eu],
    gi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Jt = new Set(gi),
    yt = e => e * 1e3,
    xt = e => e / 1e3,
    _g = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    bg = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Og = {
        type: "keyframes",
        duration: .8
    },
    Ig = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    Fg = (e, {
        keyframes: t
    }) => t.length > 2 ? Og : Jt.has(e) ? e.startsWith("scale") ? bg(t[1]) : _g : Ig;

function nu(e, t) {
    return e[t] || e.default || e
}
const Bg = {
        skipAnimations: !1,
        useManualTiming: !1
    },
    Ug = e => e !== null;

function es(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(Ug),
        o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !o || r === void 0 ? i[o] : r
}
const we = e => e;

function Hg(e) {
    let t = new Set,
        n = new Set,
        r = !1,
        i = !1;
    const o = new WeakSet;
    let s = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function l(u) {
        o.has(u) && (a.schedule(u), e()), u(s)
    }
    const a = {
        schedule: (u, c = !1, d = !1) => {
            const v = d && r ? t : n;
            return c && o.add(u), v.has(u) || v.add(u), u
        },
        cancel: u => {
            n.delete(u), o.delete(u)
        },
        process: u => {
            if (s = u, r) {
                i = !0;
                return
            }
            r = !0, [t, n] = [n, t], n.clear(), t.forEach(l), r = !1, i && (i = !1, a.process(u))
        }
    };
    return a
}
const Oi = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    $g = 40;

function Sp(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        o = () => n = !0,
        s = Oi.reduce((m, p) => (m[p] = Hg(o), m), {}),
        {
            read: l,
            resolveKeyframes: a,
            update: u,
            preRender: c,
            render: d,
            postRender: h
        } = s,
        v = () => {
            const m = performance.now();
            n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(m - i.timestamp, $g), 1), i.timestamp = m, i.isProcessing = !0, l.process(i), a.process(i), u.process(i), c.process(i), d.process(i), h.process(i), i.isProcessing = !1, n && t && (r = !1, e(v))
        },
        y = () => {
            n = !0, r = !0, i.isProcessing || e(v)
        };
    return {
        schedule: Oi.reduce((m, p) => {
            const g = s[p];
            return m[p] = (w, k = !1, T = !1) => (n || y(), g.schedule(w, k, T)), m
        }, {}),
        cancel: m => {
            for (let p = 0; p < Oi.length; p++) s[Oi[p]].cancel(m)
        },
        state: i,
        steps: s
    }
}
const {
    schedule: U,
    cancel: Kt,
    state: fe,
    steps: Ds
} = Sp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : we, !0), kp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Wg = 1e-7, Gg = 12;

function Kg(e, t, n, r, i) {
    let o, s, l = 0;
    do s = t + (n - t) / 2, o = kp(s, r, i) - e, o > 0 ? n = s : t = s; while (Math.abs(o) > Wg && ++l < Gg);
    return s
}

function vi(e, t, n, r) {
    if (e === t && n === r) return we;
    const i = o => Kg(o, 0, 1, e, n);
    return o => o === 0 || o === 1 ? o : kp(i(o), t, r)
}
const Cp = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Pp = e => t => 1 - e(1 - t),
    Tp = vi(.33, 1.53, .69, .99),
    ru = Pp(Tp),
    Ep = Cp(ru),
    jp = e => (e *= 2) < 1 ? .5 * ru(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    iu = e => 1 - Math.sin(Math.acos(e)),
    Np = Pp(iu),
    Mp = Cp(iu),
    zp = e => /^0[^.\s]+$/u.test(e);

function Qg(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || zp(e) : !0
}
let Hl = we;
const Ap = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Lp = e => t => typeof t == "string" && t.startsWith(e),
    Rp = Lp("--"),
    Xg = Lp("var(--"),
    ou = e => Xg(e) ? Yg.test(e.split("/*")[0].trim()) : !1,
    Yg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Zg = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function qg(e) {
    const t = Zg.exec(e);
    if (!t) return [, ];
    const [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function Vp(e, t, n = 1) {
    const [r, i] = qg(e);
    if (!r) return;
    const o = window.getComputedStyle(t).getPropertyValue(r);
    if (o) {
        const s = o.trim();
        return Ap(s) ? parseFloat(s) : s
    }
    return ou(i) ? Vp(i, t, n + 1) : i
}
const Qt = (e, t, n) => n > t ? t : n < e ? e : n,
    ur = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    li = {
        ...ur,
        transform: e => Qt(0, 1, e)
    },
    Ii = {
        ...ur,
        default: 1
    },
    yi = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    zt = yi("deg"),
    at = yi("%"),
    L = yi("px"),
    Jg = yi("vh"),
    ev = yi("vw"),
    Ic = {
        ...at,
        parse: e => at.parse(e) / 100,
        transform: e => at.transform(e * 100)
    },
    tv = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    Fc = e => e === ur || e === L,
    Bc = (e, t) => parseFloat(e.split(", ")[t]),
    Uc = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/u);
        if (i) return Bc(i[1], t);
        {
            const o = r.match(/^matrix\((.+)\)$/u);
            return o ? Bc(o[1], e) : 0
        }
    },
    nv = new Set(["x", "y", "z"]),
    rv = gi.filter(e => !nv.has(e));

function iv(e) {
    const t = [];
    return rv.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const rr = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: Uc(4, 13),
    y: Uc(5, 14)
};
rr.translateX = rr.x;
rr.translateY = rr.y;
const Dp = e => t => t.test(e),
    ov = {
        test: e => e === "auto",
        parse: e => e
    },
    _p = [ur, L, at, zt, ev, Jg, ov],
    Hc = e => _p.find(Dp(e)),
    gn = new Set;
let $l = !1,
    Wl = !1;

function bp() {
    if (Wl) {
        const e = Array.from(gn).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const i = iv(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([o, s]) => {
                var l;
                (l = r.getValue(o)) === null || l === void 0 || l.set(s)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    Wl = !1, $l = !1, gn.forEach(e => e.complete()), gn.clear()
}

function Op() {
    gn.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (Wl = !0)
    })
}

function sv() {
    Op(), bp()
}
class su {
    constructor(t, n, r, i, o, s = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = o, this.isAsync = s
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (gn.add(this), $l || ($l = !0, U.read(Op), U.resolveKeyframes(bp))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        for (let o = 0; o < t.length; o++)
            if (t[o] === null)
                if (o === 0) {
                    const s = i == null ? void 0 : i.get(),
                        l = t[t.length - 1];
                    if (s !== void 0) t[0] = s;
                    else if (r && n) {
                        const a = r.readValue(n, l);
                        a != null && (t[0] = a)
                    }
                    t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0])
                } else t[o] = t[o - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), gn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, gn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const Ir = e => Math.round(e * 1e5) / 1e5,
    lu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function lv(e) {
    return e == null
}
const av = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    au = (e, t) => n => !!(typeof n == "string" && av.test(n) && n.startsWith(e) || t && !lv(n) && Object.prototype.hasOwnProperty.call(n, t)),
    Ip = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [i, o, s, l] = r.match(lu);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [n]: parseFloat(s),
            alpha: l !== void 0 ? parseFloat(l) : 1
        }
    },
    uv = e => Qt(0, 255, e),
    _s = {
        ...ur,
        transform: e => Math.round(uv(e))
    },
    fn = {
        test: au("rgb", "red"),
        parse: Ip("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + _s.transform(e) + ", " + _s.transform(t) + ", " + _s.transform(n) + ", " + Ir(li.transform(r)) + ")"
    };

function cv(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Gl = {
        test: au("#"),
        parse: cv,
        transform: fn.transform
    },
    On = {
        test: au("hsl", "hue"),
        parse: Ip("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + at.transform(Ir(t)) + ", " + at.transform(Ir(n)) + ", " + Ir(li.transform(r)) + ")"
    },
    ve = {
        test: e => fn.test(e) || Gl.test(e) || On.test(e),
        parse: e => fn.test(e) ? fn.parse(e) : On.test(e) ? On.parse(e) : Gl.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? fn.transform(e) : On.transform(e)
    },
    dv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function fv(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(lu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(dv)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Fp = "number",
    Bp = "color",
    hv = "var",
    pv = "var(",
    $c = "${}",
    mv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function ai(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let o = 0;
    const l = t.replace(mv, a => (ve.test(a) ? (r.color.push(o), i.push(Bp), n.push(ve.parse(a))) : a.startsWith(pv) ? (r.var.push(o), i.push(hv), n.push(a)) : (r.number.push(o), i.push(Fp), n.push(parseFloat(a))), ++o, $c)).split($c);
    return {
        values: n,
        split: l,
        indexes: r,
        types: i
    }
}

function Up(e) {
    return ai(e).values
}

function Hp(e) {
    const {
        split: t,
        types: n
    } = ai(e), r = t.length;
    return i => {
        let o = "";
        for (let s = 0; s < r; s++)
            if (o += t[s], i[s] !== void 0) {
                const l = n[s];
                l === Fp ? o += Ir(i[s]) : l === Bp ? o += ve.transform(i[s]) : o += i[s]
            } return o
    }
}
const gv = e => typeof e == "number" ? 0 : e;

function vv(e) {
    const t = Up(e);
    return Hp(e)(t.map(gv))
}
const Xt = {
        test: fv,
        parse: Up,
        createTransformer: Hp,
        getAnimatableNone: vv
    },
    yv = new Set(["brightness", "contrast", "saturate", "opacity"]);

function xv(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(lu) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let o = yv.has(t) ? 1 : 0;
    return r !== n && (o *= 100), t + "(" + o + i + ")"
}
const wv = /\b([a-z-]*)\(.*?\)/gu,
    Kl = {
        ...Xt,
        getAnimatableNone: e => {
            const t = e.match(wv);
            return t ? t.map(xv).join(" ") : e
        }
    },
    Sv = {
        borderWidth: L,
        borderTopWidth: L,
        borderRightWidth: L,
        borderBottomWidth: L,
        borderLeftWidth: L,
        borderRadius: L,
        radius: L,
        borderTopLeftRadius: L,
        borderTopRightRadius: L,
        borderBottomRightRadius: L,
        borderBottomLeftRadius: L,
        width: L,
        maxWidth: L,
        height: L,
        maxHeight: L,
        top: L,
        right: L,
        bottom: L,
        left: L,
        padding: L,
        paddingTop: L,
        paddingRight: L,
        paddingBottom: L,
        paddingLeft: L,
        margin: L,
        marginTop: L,
        marginRight: L,
        marginBottom: L,
        marginLeft: L,
        backgroundPositionX: L,
        backgroundPositionY: L
    },
    kv = {
        rotate: zt,
        rotateX: zt,
        rotateY: zt,
        rotateZ: zt,
        scale: Ii,
        scaleX: Ii,
        scaleY: Ii,
        scaleZ: Ii,
        skew: zt,
        skewX: zt,
        skewY: zt,
        distance: L,
        translateX: L,
        translateY: L,
        translateZ: L,
        x: L,
        y: L,
        z: L,
        perspective: L,
        transformPerspective: L,
        opacity: li,
        originX: Ic,
        originY: Ic,
        originZ: L
    },
    Wc = {
        ...ur,
        transform: Math.round
    },
    uu = {
        ...Sv,
        ...kv,
        zIndex: Wc,
        size: L,
        fillOpacity: li,
        strokeOpacity: li,
        numOctaves: Wc
    },
    Cv = {
        ...uu,
        color: ve,
        backgroundColor: ve,
        outlineColor: ve,
        fill: ve,
        stroke: ve,
        borderColor: ve,
        borderTopColor: ve,
        borderRightColor: ve,
        borderBottomColor: ve,
        borderLeftColor: ve,
        filter: Kl,
        WebkitFilter: Kl
    },
    cu = e => Cv[e];

function $p(e, t) {
    let n = cu(e);
    return n !== Kl && (n = Xt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Pv = new Set(["auto", "none", "0"]);

function Tv(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const o = e[r];
        typeof o == "string" && !Pv.has(o) && ai(o).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (const o of t) e[o] = $p(n, i)
}
class Wp extends su {
    constructor(t, n, r, i, o) {
        super(t, n, r, i, o, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let a = 0; a < t.length; a++) {
            let u = t[a];
            if (typeof u == "string" && (u = u.trim(), ou(u))) {
                const c = Vp(u, n.current);
                c !== void 0 && (t[a] = c), a === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !tv.has(r) || t.length !== 2) return;
        const [i, o] = t, s = Hc(i), l = Hc(o);
        if (s !== l)
            if (Fc(s) && Fc(l))
                for (let a = 0; a < t.length; a++) {
                    const u = t[a];
                    typeof u == "string" && (t[a] = parseFloat(u))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++) Qg(t[i]) && r.push(i);
        r.length && Tv(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = rr[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {
            element: n,
            name: r,
            unresolvedKeyframes: i
        } = this;
        if (!n || !n.current) return;
        const o = n.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const s = i.length - 1,
            l = i[s];
        i[s] = rr[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([a, u]) => {
            n.getValue(a).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function du(e) {
    return typeof e == "function"
}
let eo;

function Ev() {
    eo = void 0
}
const ut = {
        now: () => (eo === void 0 && ut.set(fe.isProcessing || Bg.useManualTiming ? fe.timestamp : performance.now()), eo),
        set: e => {
            eo = e, queueMicrotask(Ev)
        }
    },
    Gc = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Xt.test(e) || e === "0") && !e.startsWith("url("));

function jv(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function Nv(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const o = e[e.length - 1],
        s = Gc(i, t),
        l = Gc(o, t);
    return !s || !l ? !1 : jv(e) || (n === "spring" || du(n)) && r
}
const Mv = 40;
class Gp {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: o = 0,
        repeatType: s = "loop",
        ...l
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = ut.now(), this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: o,
            repeatType: s,
            ...l
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > Mv ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && sv(), this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = ut.now(), this.hasAttemptedResolve = !0;
        const {
            name: r,
            type: i,
            velocity: o,
            delay: s,
            onComplete: l,
            onUpdate: a,
            isGenerator: u
        } = this.options;
        if (!u && !Nv(t, r, i, o))
            if (s) this.options.duration = 0;
            else {
                a == null || a(es(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
                return
            } const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        })
    }
}

function Kp(e, t) {
    return t ? e * (1e3 / t) : 0
}
const zv = 5;

function Qp(e, t, n) {
    const r = Math.max(t - zv, 0);
    return Kp(n - e(r), t - r)
}
const bs = .001,
    Av = .01,
    Lv = 10,
    Rv = .05,
    Vv = 1;

function Dv({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let i, o, s = 1 - t;
    s = Qt(Rv, Vv, s), e = Qt(Av, Lv, xt(e)), s < 1 ? (i = u => {
        const c = u * s,
            d = c * e,
            h = c - n,
            v = Ql(u, s),
            y = Math.exp(-d);
        return bs - h / v * y
    }, o = u => {
        const d = u * s * e,
            h = d * n + n,
            v = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            x = Ql(Math.pow(u, 2), s);
        return (-i(u) + bs > 0 ? -1 : 1) * ((h - v) * y) / x
    }) : (i = u => {
        const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
        return -bs + c * d
    }, o = u => {
        const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
        return c * d
    });
    const l = 5 / e,
        a = bv(i, o, l);
    if (e = yt(e), isNaN(a)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const _v = 12;

function bv(e, t, n) {
    let r = n;
    for (let i = 1; i < _v; i++) r = r - e(r) / t(r);
    return r
}

function Ql(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const Ov = ["duration", "bounce"],
    Iv = ["stiffness", "damping", "mass"];

function Kc(e, t) {
    return t.some(n => e[n] !== void 0)
}

function Fv(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Kc(e, Iv) && Kc(e, Ov)) {
        const n = Dv(e);
        t = {
            ...t,
            ...n,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function Xp({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const i = e[0],
        o = e[e.length - 1],
        s = {
            done: !1,
            value: i
        },
        {
            stiffness: l,
            damping: a,
            mass: u,
            duration: c,
            velocity: d,
            isResolvedFromDuration: h
        } = Fv({
            ...r,
            velocity: -xt(r.velocity || 0)
        }),
        v = d || 0,
        y = a / (2 * Math.sqrt(l * u)),
        x = o - i,
        S = xt(Math.sqrt(l / u)),
        m = Math.abs(x) < 5;
    n || (n = m ? .01 : 2), t || (t = m ? .005 : .5);
    let p;
    if (y < 1) {
        const g = Ql(S, y);
        p = w => {
            const k = Math.exp(-y * S * w);
            return o - k * ((v + y * S * x) / g * Math.sin(g * w) + x * Math.cos(g * w))
        }
    } else if (y === 1) p = g => o - Math.exp(-S * g) * (x + (v + S * x) * g);
    else {
        const g = S * Math.sqrt(y * y - 1);
        p = w => {
            const k = Math.exp(-y * S * w),
                T = Math.min(g * w, 300);
            return o - k * ((v + y * S * x) * Math.sinh(T) + g * x * Math.cosh(T)) / g
        }
    }
    return {
        calculatedDuration: h && c || null,
        next: g => {
            const w = p(g);
            if (h) s.done = g >= c;
            else {
                let k = 0;
                y < 1 && (k = g === 0 ? yt(v) : Qp(p, g, w));
                const T = Math.abs(k) <= n,
                    N = Math.abs(o - w) <= t;
                s.done = T && N
            }
            return s.value = s.done ? o : w, s
        }
    }
}

function Qc({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: o = 500,
    modifyTarget: s,
    min: l,
    max: a,
    restDelta: u = .5,
    restSpeed: c
}) {
    const d = e[0],
        h = {
            done: !1,
            value: d
        },
        v = P => l !== void 0 && P < l || a !== void 0 && P > a,
        y = P => l === void 0 ? a : a === void 0 || Math.abs(l - P) < Math.abs(a - P) ? l : a;
    let x = n * t;
    const S = d + x,
        m = s === void 0 ? S : s(S);
    m !== S && (x = m - d);
    const p = P => -x * Math.exp(-P / r),
        g = P => m + p(P),
        w = P => {
            const D = p(P),
                z = g(P);
            h.done = Math.abs(D) <= u, h.value = h.done ? m : z
        };
    let k, T;
    const N = P => {
        v(h.value) && (k = P, T = Xp({
            keyframes: [h.value, y(h.value)],
            velocity: Qp(g, P, h.value),
            damping: i,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    };
    return N(0), {
        calculatedDuration: null,
        next: P => {
            let D = !1;
            return !T && k === void 0 && (D = !0, w(P), N(P)), k !== void 0 && P >= k ? T.next(P - k) : (!D && w(P), h)
        }
    }
}
const Bv = vi(.42, 0, 1, 1),
    Uv = vi(0, 0, .58, 1),
    Yp = vi(.42, 0, .58, 1),
    Hv = e => Array.isArray(e) && typeof e[0] != "number",
    Xc = {
        linear: we,
        easeIn: Bv,
        easeInOut: Yp,
        easeOut: Uv,
        circIn: iu,
        circInOut: Mp,
        circOut: Np,
        backIn: ru,
        backInOut: Ep,
        backOut: Tp,
        anticipate: jp
    },
    Yc = e => {
        if (Array.isArray(e)) {
            Hl(e.length === 4);
            const [t, n, r, i] = e;
            return vi(t, n, r, i)
        } else if (typeof e == "string") return Hl(Xc[e] !== void 0), Xc[e];
        return e
    },
    $v = (e, t) => n => t(e(n)),
    wt = (...e) => e.reduce($v),
    ir = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    X = (e, t, n) => e + (t - e) * n;

function Os(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Wv({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        o = 0,
        s = 0;
    if (!t) i = o = s = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t,
            a = 2 * n - l;
        i = Os(a, l, e + 1 / 3), o = Os(a, l, e), s = Os(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(o * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}

function No(e, t) {
    return n => n > 0 ? t : e
}
const Is = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    Gv = [Gl, fn, On],
    Kv = e => Gv.find(t => t.test(e));

function Zc(e) {
    const t = Kv(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === On && (n = Wv(n)), n
}
const qc = (e, t) => {
        const n = Zc(e),
            r = Zc(t);
        if (!n || !r) return No(e, t);
        const i = {
            ...n
        };
        return o => (i.red = Is(n.red, r.red, o), i.green = Is(n.green, r.green, o), i.blue = Is(n.blue, r.blue, o), i.alpha = X(n.alpha, r.alpha, o), fn.transform(i))
    },
    Xl = new Set(["none", "hidden"]);

function Qv(e, t) {
    return Xl.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function Xv(e, t) {
    return n => X(e, t, n)
}

function fu(e) {
    return typeof e == "number" ? Xv : typeof e == "string" ? ou(e) ? No : ve.test(e) ? qc : qv : Array.isArray(e) ? Zp : typeof e == "object" ? ve.test(e) ? qc : Yv : No
}

function Zp(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((o, s) => fu(o)(o, t[s]));
    return o => {
        for (let s = 0; s < r; s++) n[s] = i[s](o);
        return n
    }
}

function Yv(e, t) {
    const n = {
            ...e,
            ...t
        },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = fu(e[i])(e[i], t[i]));
    return i => {
        for (const o in r) n[o] = r[o](i);
        return n
    }
}

function Zv(e, t) {
    var n;
    const r = [],
        i = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < t.values.length; o++) {
        const s = t.types[o],
            l = e.indexes[s][i[s]],
            a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[o] = a, i[s]++
    }
    return r
}
const qv = (e, t) => {
    const n = Xt.createTransformer(t),
        r = ai(e),
        i = ai(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Xl.has(e) && !i.values.length || Xl.has(t) && !r.values.length ? Qv(e, t) : wt(Zp(Zv(r, i), i.values), n) : No(e, t)
};

function qp(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? X(e, t, n) : fu(e)(e, t)
}

function Jv(e, t, n) {
    const r = [],
        i = n || qp,
        o = e.length - 1;
    for (let s = 0; s < o; s++) {
        let l = i(e[s], e[s + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[s] || we : t;
            l = wt(a, l)
        }
        r.push(l)
    }
    return r
}

function ey(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const o = e.length;
    if (Hl(o === t.length), o === 1) return () => t[0];
    if (o === 2 && e[0] === e[1]) return () => t[1];
    e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = Jv(t, r, i),
        l = s.length,
        a = u => {
            let c = 0;
            if (l > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const d = ir(e[c], e[c + 1], u);
            return s[c](d)
        };
    return n ? u => a(Qt(e[0], e[o - 1], u)) : a
}

function ty(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = ir(0, t, r);
        e.push(X(n, 1, i))
    }
}

function ny(e) {
    const t = [0];
    return ty(t, e.length - 1), t
}

function ry(e, t) {
    return e.map(n => n * t)
}

function iy(e, t) {
    return e.map(() => t || Yp).splice(0, e.length - 1)
}

function Mo({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = Hv(r) ? r.map(Yc) : Yc(r),
        o = {
            done: !1,
            value: t[0]
        },
        s = ry(n && n.length === t.length ? n : ny(t), e),
        l = ey(s, t, {
            ease: Array.isArray(i) ? i : iy(t, i)
        });
    return {
        calculatedDuration: e,
        next: a => (o.value = l(a), o.done = a >= e, o)
    }
}
const Jc = 2e4;

function oy(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Jc;) t += n, r = e.next(t);
    return t >= Jc ? 1 / 0 : t
}
const sy = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => U.update(t, !0),
            stop: () => Kt(t),
            now: () => fe.isProcessing ? fe.timestamp : ut.now()
        }
    },
    ly = {
        decay: Qc,
        inertia: Qc,
        tween: Mo,
        keyframes: Mo,
        spring: Xp
    },
    ay = e => e / 100;
class hu extends Gp {
    constructor(t) {
        super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: a
            } = this.options;
            a && a()
        };
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options, s = (i == null ? void 0 : i.KeyframeResolver) || su, l = (a, u) => this.onKeyframesResolved(a, u);
        this.resolver = new s(o, l, n, r, i), this.resolver.scheduleResolve()
    }
    initPlayback(t) {
        const {
            type: n = "keyframes",
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: o,
            velocity: s = 0
        } = this.options, l = du(n) ? n : ly[n] || Mo;
        let a, u;
        l !== Mo && typeof t[0] != "number" && (a = wt(ay, qp(t[0], t[1])), t = [0, 100]);
        const c = l({
            ...this.options,
            keyframes: t
        });
        o === "mirror" && (u = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -s
        })), c.calculatedDuration === null && (c.calculatedDuration = oy(c));
        const {
            calculatedDuration: d
        } = c, h = d + i, v = h * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: a,
            calculatedDuration: d,
            resolvedDuration: h,
            totalDuration: v
        }
    }
    onPostResolved() {
        const {
            autoplay: t = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n = !1) {
        const {
            resolved: r
        } = this;
        if (!r) {
            const {
                keyframes: P
            } = this.options;
            return {
                done: !0,
                value: P[P.length - 1]
            }
        }
        const {
            finalKeyframe: i,
            generator: o,
            mirroredGenerator: s,
            mapPercentToKeyframes: l,
            keyframes: a,
            calculatedDuration: u,
            totalDuration: c,
            resolvedDuration: d
        } = r;
        if (this.startTime === null) return o.next(0);
        const {
            delay: h,
            repeat: v,
            repeatType: y,
            repeatDelay: x,
            onUpdate: S
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const m = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
            p = this.speed >= 0 ? m < 0 : m > c;
        this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let g = this.currentTime,
            w = o;
        if (v) {
            const P = Math.min(this.currentTime, c) / d;
            let D = Math.floor(P),
                z = P % 1;
            !z && P >= 1 && (z = 1), z === 1 && D--, D = Math.min(D, v + 1), !!(D % 2) && (y === "reverse" ? (z = 1 - z, x && (z -= x / d)) : y === "mirror" && (w = s)), g = Qt(0, 1, z) * d
        }
        const k = p ? {
            done: !1,
            value: a[0]
        } : w.next(g);
        l && (k.value = l(k.value));
        let {
            done: T
        } = k;
        !p && u !== null && (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const N = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return N && i !== void 0 && (k.value = es(a, this.options, i)), S && S(k.value), N && this.finish(), k
    }
    get duration() {
        const {
            resolved: t
        } = this;
        return t ? xt(t.calculatedDuration) : 0
    }
    get time() {
        return xt(this.currentTime)
    }
    set time(t) {
        t = yt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = xt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: t = sy,
            onPlay: n,
            startTime: r
        } = this.options;
        this.driver || (this.driver = t(o => this.tick(o))), n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: t
        } = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
}
const Jp = new Set(["opacity", "clipPath", "filter", "transform"]),
    em = e => Array.isArray(e) && typeof e[0] == "number",
    uy = 10,
    cy = (e, t) => {
        let n = "";
        const r = Math.max(Math.round(t / uy), 2);
        for (let i = 0; i < r; i++) n += e(ir(0, r - 1, i)) + ", ";
        return `linear(${n.substring(0,n.length-2)})`
    };

function pu(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const dy = {
    linearEasing: void 0
};

function fy(e, t) {
    const n = pu(e);
    return () => {
        var r;
        return (r = dy[t]) !== null && r !== void 0 ? r : n()
    }
}
const zo = fy(() => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}, "linearEasing");

function tm(e) {
    return !!(typeof e == "function" && zo() || !e || typeof e == "string" && (e in Yl || zo()) || em(e) || Array.isArray(e) && e.every(tm))
}
const Nr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Yl = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Nr([0, .65, .55, 1]),
        circOut: Nr([.55, 0, 1, .45]),
        backIn: Nr([.31, .01, .66, -.59]),
        backOut: Nr([.33, 1.53, .69, .99])
    };

function nm(e, t) {
    if (e) return typeof e == "function" && zo() ? cy(e, t) : em(e) ? Nr(e) : Array.isArray(e) ? e.map(n => nm(n, t) || Yl.easeOut) : Yl[e]
}

function hy(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a
} = {}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = nm(l, i);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: o + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}

function ed(e, t) {
    e.timeline = t, e.onfinish = null
}
const py = pu(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    Ao = 10,
    my = 2e4;

function gy(e) {
    return du(e.type) || e.type === "spring" || !tm(e.ease)
}

function vy(e, t) {
    const n = new hu({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let o = 0;
    for (; !r.done && o < my;) r = n.sample(o), i.push(r.value), o += Ao;
    return {
        times: void 0,
        keyframes: i,
        duration: o - Ao,
        ease: "linear"
    }
}
const rm = {
    anticipate: jp,
    backInOut: Ep,
    circInOut: Mp
};

function yy(e) {
    return e in rm
}
class td extends Gp {
    constructor(t) {
        super(t);
        const {
            name: n,
            motionValue: r,
            element: i,
            keyframes: o
        } = this.options;
        this.resolver = new Wp(o, (s, l) => this.onKeyframesResolved(s, l), n, r, i), this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        var r;
        let {
            duration: i = 300,
            times: o,
            ease: s,
            type: l,
            motionValue: a,
            name: u,
            startTime: c
        } = this.options;
        if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
        if (typeof s == "string" && zo() && yy(s) && (s = rm[s]), gy(this.options)) {
            const {
                onComplete: h,
                onUpdate: v,
                motionValue: y,
                element: x,
                ...S
            } = this.options, m = vy(t, S);
            t = m.keyframes, t.length === 1 && (t[1] = t[0]), i = m.duration, o = m.times, s = m.ease, l = "keyframes"
        }
        const d = hy(a.owner.current, u, t, {
            ...this.options,
            duration: i,
            times: o,
            ease: s
        });
        return d.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (ed(d, this.pendingTimeline), this.pendingTimeline = void 0) : d.onfinish = () => {
            const {
                onComplete: h
            } = this.options;
            a.set(es(t, this.options, n)), h && h(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: d,
            duration: i,
            times: o,
            type: l,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            duration: n
        } = t;
        return xt(n)
    }
    get time() {
        const {
            resolved: t
        } = this;
        if (!t) return 0;
        const {
            animation: n
        } = t;
        return xt(n.currentTime || 0)
    }
    set time(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.currentTime = yt(t)
    }
    get speed() {
        const {
            resolved: t
        } = this;
        if (!t) return 1;
        const {
            animation: n
        } = t;
        return n.playbackRate
    }
    set speed(t) {
        const {
            resolved: n
        } = this;
        if (!n) return;
        const {
            animation: r
        } = n;
        r.playbackRate = t
    }
    get state() {
        const {
            resolved: t
        } = this;
        if (!t) return "idle";
        const {
            animation: n
        } = t;
        return n.playState
    }
    get startTime() {
        const {
            resolved: t
        } = this;
        if (!t) return null;
        const {
            animation: n
        } = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved) this.pendingTimeline = t;
        else {
            const {
                resolved: n
            } = this;
            if (!n) return we;
            const {
                animation: r
            } = n;
            ed(r, t)
        }
        return we
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.playState === "finished" && this.updateFinishedPromise(), n.play()
    }
    pause() {
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n
        } = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: t
        } = this;
        if (!t) return;
        const {
            animation: n,
            keyframes: r,
            duration: i,
            type: o,
            ease: s,
            times: l
        } = t;
        if (n.playState === "idle" || n.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: u,
                onUpdate: c,
                onComplete: d,
                element: h,
                ...v
            } = this.options, y = new hu({
                ...v,
                keyframes: r,
                duration: i,
                type: o,
                ease: s,
                times: l,
                isGenerator: !0
            }), x = yt(this.time);
            u.setWithVelocity(y.sample(x - Ao).value, y.sample(x).value, Ao)
        }
        const {
            onStop: a
        } = this.options;
        a && a(), this.cancel()
    }
    complete() {
        const {
            resolved: t
        } = this;
        t && t.animation.finish()
    }
    cancel() {
        const {
            resolved: t
        } = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {
            motionValue: n,
            name: r,
            repeatDelay: i,
            repeatType: o,
            damping: s,
            type: l
        } = t;
        return py() && r && Jp.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && !n.owner.getProps().onUpdate && !i && o !== "mirror" && s !== 0 && l !== "inertia"
    }
}
const xy = pu(() => window.ScrollTimeline !== void 0);
class wy {
    constructor(t) {
        this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
    }
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => xy() && i.attachTimeline ? i.attachTimeline(t) : n(i));
        return () => {
            r.forEach((i, o) => {
                i && i(), this.animations[o].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++) t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}

function Sy({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: o,
    repeatType: s,
    repeatDelay: l,
    from: a,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}
const mu = (e, t, n, r = {}, i, o) => s => {
        const l = nu(r, e) || {},
            a = l.delay || r.delay || 0;
        let {
            elapsed: u = 0
        } = r;
        u = u - yt(a);
        let c = {
            keyframes: Array.isArray(n) ? n : [null, n],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...l,
            delay: -u,
            onUpdate: h => {
                t.set(h), l.onUpdate && l.onUpdate(h)
            },
            onComplete: () => {
                s(), l.onComplete && l.onComplete()
            },
            name: e,
            motionValue: t,
            element: o ? void 0 : i
        };
        Sy(l) || (c = {
            ...c,
            ...Fg(e, c)
        }), c.duration && (c.duration = yt(c.duration)), c.repeatDelay && (c.repeatDelay = yt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
        let d = !1;
        if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0, c.delay === 0 && (d = !0)), d && !o && t.get() !== void 0) {
            const h = es(c.keyframes, l);
            if (h !== void 0) return U.update(() => {
                c.onUpdate(h), c.onComplete()
            }), new wy([])
        }
        return !o && td.supports(c) ? new td(c) : new hu(c)
    },
    ky = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    Cy = e => Ul(e) ? e[e.length - 1] || 0 : e;

function gu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function vu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class yu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return gu(this.subscriptions, t), () => vu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let o = 0; o < i; o++) {
                    const s = this.subscriptions[o];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const nd = 30,
    Py = e => !isNaN(parseFloat(e));
class Ty {
    constructor(t, n = {}) {
        this.version = "11.11.0", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
            const o = ut.now();
            this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = ut.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Py(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new yu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), U.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = ut.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > nd) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, nd);
        return Kp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function ui(e, t) {
    return new Ty(e, t)
}

function Ey(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ui(n))
}

function jy(e, t) {
    const n = Jo(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...o
    } = n || {};
    o = {
        ...o,
        ...r
    };
    for (const s in o) {
        const l = Cy(o[s]);
        Ey(e, s, l)
    }
}
const ts = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Ny = "framerAppearId",
    im = "data-" + ts(Ny);

function om(e) {
    return e.props[im]
}
const xe = e => !!(e && e.getVelocity);

function My(e) {
    return !!(xe(e) && e.add)
}

function sm(e) {
    if (Jt.has(e)) return "transform";
    if (Jp.has(e)) return ts(e)
}

function Zl(e, t) {
    var n;
    if (!e.applyWillChange) return;
    const r = e.getValue("willChange");
    if (My(r)) return r.add(t);
    !(!((n = e.props.style) === null || n === void 0) && n.willChange) && sm(t) && e.setStaticValue("willChange", "transform")
}

function zy({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function lm(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    var o;
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: l,
        ...a
    } = t;
    r && (s = r);
    const u = [],
        c = i && e.animationState && e.animationState.getState()[i];
    for (const d in a) {
        const h = e.getValue(d, (o = e.latestValues[d]) !== null && o !== void 0 ? o : null),
            v = a[d];
        if (v === void 0 || c && zy(c, d)) continue;
        const y = {
            delay: n,
            ...nu(s || {}, d)
        };
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const m = om(e);
            if (m) {
                const p = window.MotionHandoffAnimation(m, d, U);
                p !== null && (y.startTime = p, x = !0)
            }
        }
        Zl(e, d), h.start(mu(d, h, v, e.shouldReduceMotion && Jt.has(d) ? {
            type: !1
        } : y, e, x));
        const S = h.animation;
        S && u.push(S)
    }
    return l && Promise.all(u).then(() => {
        U.update(() => {
            l && jy(e, l)
        })
    }), u
}

function ql(e, t, n = {}) {
    var r;
    const i = Jo(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = i || {};
    n.transitionOverride && (o = n.transitionOverride);
    const s = i ? () => Promise.all(lm(e, i, n)) : () => Promise.resolve(),
        l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: d,
                staggerDirection: h
            } = o;
            return Ay(e, t, c + u, d, h, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = o;
    if (a) {
        const [u, c] = a === "beforeChildren" ? [s, l] : [l, s];
        return u().then(() => c())
    } else return Promise.all([s(), l(n.delay)])
}

function Ay(e, t, n = 0, r = 0, i = 1, o) {
    const s = [],
        l = (e.variantChildren.size - 1) * r,
        a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
    return Array.from(e.variantChildren).sort(Ly).forEach((u, c) => {
        u.notify("AnimationStart", t), s.push(ql(u, t, {
            ...o,
            delay: n + a(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function Ly(e, t) {
    return e.sortNodePosition(t)
}

function Ry(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(o => ql(e, o, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = ql(e, t, n);
    else {
        const i = typeof t == "function" ? Jo(e, t, n.custom) : t;
        r = Promise.all(lm(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}
const Vy = tu.length;

function am(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? am(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < Vy; n++) {
        const r = tu[n],
            i = e.props[r];
        (si(i) || i === !1) && (t[r] = i)
    }
    return t
}
const Dy = [...eu].reverse(),
    _y = eu.length;

function by(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => Ry(e, n, r)))
}

function Oy(e) {
    let t = by(e),
        n = rd(),
        r = !0;
    const i = a => (u, c) => {
        var d;
        const h = Jo(e, c, a === "exit" ? (d = e.presenceContext) === null || d === void 0 ? void 0 : d.custom : void 0);
        if (h) {
            const {
                transition: v,
                transitionEnd: y,
                ...x
            } = h;
            u = {
                ...u,
                ...x,
                ...y
            }
        }
        return u
    };

    function o(a) {
        t = a(e)
    }

    function s(a) {
        const {
            props: u
        } = e, c = am(e.parent) || {}, d = [], h = new Set;
        let v = {},
            y = 1 / 0;
        for (let S = 0; S < _y; S++) {
            const m = Dy[S],
                p = n[m],
                g = u[m] !== void 0 ? u[m] : c[m],
                w = si(g),
                k = m === a ? p.isActive : null;
            k === !1 && (y = S);
            let T = g === c[m] && g !== u[m] && w;
            if (T && r && e.manuallyAnimateOnMount && (T = !1), p.protectedKeys = {
                    ...v
                }, !p.isActive && k === null || !g && !p.prevProp || oi(g) || typeof g == "boolean") continue;
            const N = Iy(p.prevProp, g);
            let P = N || m === a && p.isActive && !T && w || S > y && w,
                D = !1;
            const z = Array.isArray(g) ? g : [g];
            let ee = z.reduce(i(m), {});
            k === !1 && (ee = {});
            const {
                prevResolvedValues: O = {}
            } = p, tt = {
                ...O,
                ...ee
            }, nt = te => {
                P = !0, h.has(te) && (D = !0, h.delete(te)), p.needsAnimating[te] = !0;
                const j = e.getValue(te);
                j && (j.liveStyle = !1)
            };
            for (const te in tt) {
                const j = ee[te],
                    A = O[te];
                if (v.hasOwnProperty(te)) continue;
                let R = !1;
                Ul(j) && Ul(A) ? R = !wp(j, A) : R = j !== A, R ? j != null ? nt(te) : h.add(te) : j !== void 0 && h.has(te) ? nt(te) : p.protectedKeys[te] = !0
            }
            p.prevProp = g, p.prevResolvedValues = ee, p.isActive && (v = {
                ...v,
                ...ee
            }), r && e.blockInitialAnimation && (P = !1), P && (!(T && N) || D) && d.push(...z.map(te => ({
                animation: te,
                options: {
                    type: m
                }
            })))
        }
        if (h.size) {
            const S = {};
            h.forEach(m => {
                const p = e.getBaseTarget(m),
                    g = e.getValue(m);
                g && (g.liveStyle = !0), S[m] = p ?? null
            }), d.push({
                animation: S
            })
        }
        let x = !!d.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(d) : Promise.resolve()
    }

    function l(a, u) {
        var c;
        if (n[a].isActive === u) return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(h => {
            var v;
            return (v = h.animationState) === null || v === void 0 ? void 0 : v.setActive(a, u)
        }), n[a].isActive = u;
        const d = s(a);
        for (const h in n) n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: s,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            n = rd(), r = !0
        }
    }
}

function Iy(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !wp(t, e) : !1
}

function rn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function rd() {
    return {
        animate: rn(!0),
        whileInView: rn(),
        whileHover: rn(),
        whileTap: rn(),
        whileDrag: rn(),
        whileFocus: rn(),
        exit: rn()
    }
}
class en {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class Fy extends en {
    constructor(t) {
        super(t), t.animationState || (t.animationState = Oy(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        oi(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let By = 0;
class Uy extends en {
    constructor() {
        super(...arguments), this.id = By++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const Hy = {
        animation: {
            Feature: Fy
        },
        exit: {
            Feature: Uy
        }
    },
    um = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function ns(e, t = "page") {
    return {
        point: {
            x: e[`${t}X`],
            y: e[`${t}Y`]
        }
    }
}
const $y = e => t => um(t) && e(t, ns(t));

function gt(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function St(e, t, n, r) {
    return gt(e, t, $y(n), r)
}
const id = (e, t) => Math.abs(e - t);

function Wy(e, t) {
    const n = id(e.x, t.x),
        r = id(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class cm {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i,
        dragSnapToOrigin: o = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const d = Bs(this.lastMoveEventInfo, this.history),
                    h = this.startEvent !== null,
                    v = Wy(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!h && !v) return;
                const {
                    point: y
                } = d, {
                    timestamp: x
                } = fe;
                this.history.push({
                    ...y,
                    timestamp: x
                });
                const {
                    onStart: S,
                    onMove: m
                } = this.handlers;
                h || (S && S(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, d)
            }, this.handlePointerMove = (d, h) => {
                this.lastMoveEvent = d, this.lastMoveEventInfo = Fs(h, this.transformPagePoint), U.update(this.updatePoint, !0)
            }, this.handlePointerUp = (d, h) => {
                this.end();
                const {
                    onEnd: v,
                    onSessionEnd: y,
                    resumeAnimation: x
                } = this.handlers;
                if (this.dragSnapToOrigin && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const S = Bs(d.type === "pointercancel" ? this.lastMoveEventInfo : Fs(h, this.transformPagePoint), this.history);
                this.startEvent && v && v(d, S), y && y(d, S)
            }, !um(t)) return;
        this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = i || window;
        const s = ns(t),
            l = Fs(s, this.transformPagePoint),
            {
                point: a
            } = l,
            {
                timestamp: u
            } = fe;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(t, Bs(l, this.history)), this.removeListeners = wt(St(this.contextWindow, "pointermove", this.handlePointerMove), St(this.contextWindow, "pointerup", this.handlePointerUp), St(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Kt(this.updatePoint)
    }
}

function Fs(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function od(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Bs({
    point: e
}, t) {
    return {
        point: e,
        delta: od(e, dm(t)),
        offset: od(e, Gy(t)),
        velocity: Ky(t, .1)
    }
}

function Gy(e) {
    return e[0]
}

function dm(e) {
    return e[e.length - 1]
}

function Ky(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = dm(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > yt(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const o = xt(i.timestamp - r.timestamp);
    if (o === 0) return {
        x: 0,
        y: 0
    };
    const s = {
        x: (i.x - r.x) / o,
        y: (i.y - r.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function fm(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const sd = fm("dragHorizontal"),
    ld = fm("dragVertical");

function hm(e) {
    let t = !1;
    if (e === "y") t = ld();
    else if (e === "x") t = sd();
    else {
        const n = sd(),
            r = ld();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function pm() {
    const e = hm(!0);
    return e ? (e(), !1) : !0
}

function In(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
const mm = 1e-4,
    Qy = 1 - mm,
    Xy = 1 + mm,
    gm = .01,
    Yy = 0 - gm,
    Zy = 0 + gm;

function _e(e) {
    return e.max - e.min
}

function qy(e, t, n) {
    return Math.abs(e - t) <= n
}

function ad(e, t, n, r = .5) {
    e.origin = r, e.originPoint = X(t.min, t.max, e.origin), e.scale = _e(n) / _e(t), e.translate = X(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Qy && e.scale <= Xy || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Yy && e.translate <= Zy || isNaN(e.translate)) && (e.translate = 0)
}

function Fr(e, t, n, r) {
    ad(e.x, t.x, n.x, r ? r.originX : void 0), ad(e.y, t.y, n.y, r ? r.originY : void 0)
}

function ud(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + _e(t)
}

function Jy(e, t, n) {
    ud(e.x, t.x, n.x), ud(e.y, t.y, n.y)
}

function cd(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + _e(t)
}

function Br(e, t, n) {
    cd(e.x, t.x, n.x), cd(e.y, t.y, n.y)
}

function e2(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? X(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? X(n, e, r.max) : Math.min(e, n)), e
}

function dd(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function t2(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: dd(e.x, n, i),
        y: dd(e.y, t, r)
    }
}

function fd(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function n2(e, t) {
    return {
        x: fd(e.x, t.x),
        y: fd(e.y, t.y)
    }
}

function r2(e, t) {
    let n = .5;
    const r = _e(e),
        i = _e(t);
    return i > r ? n = ir(t.min, t.max - r, e.min) : r > i && (n = ir(e.min, e.max - i, t.min)), Qt(0, 1, n)
}

function i2(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Jl = .35;

function o2(e = Jl) {
    return e === !1 ? e = 0 : e === !0 && (e = Jl), {
        x: hd(e, "left", "right"),
        y: hd(e, "top", "bottom")
    }
}

function hd(e, t, n) {
    return {
        min: pd(e, t),
        max: pd(e, n)
    }
}

function pd(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const md = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Fn = () => ({
        x: md(),
        y: md()
    }),
    gd = () => ({
        min: 0,
        max: 0
    }),
    re = () => ({
        x: gd(),
        y: gd()
    });

function Fe(e) {
    return [e("x"), e("y")]
}

function vm({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function s2({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function l2(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Us(e) {
    return e === void 0 || e === 1
}

function ea({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Us(e) || !Us(t) || !Us(n)
}

function ln(e) {
    return ea(e) || ym(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function ym(e) {
    return vd(e.x) || vd(e.y)
}

function vd(e) {
    return e && e !== "0%"
}

function Lo(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function yd(e, t, n, r, i) {
    return i !== void 0 && (e = Lo(e, i, r)), Lo(e, n, r) + t
}

function ta(e, t = 0, n = 1, r, i) {
    e.min = yd(e.min, t, n, r, i), e.max = yd(e.max, t, n, r, i)
}

function xm(e, {
    x: t,
    y: n
}) {
    ta(e.x, t.translate, t.scale, t.originPoint), ta(e.y, n.translate, n.scale, n.originPoint)
}
const xd = .999999999999,
    wd = 1.0000000000001;

function a2(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let o, s;
    for (let l = 0; l < i; l++) {
        o = n[l], s = o.projectionDelta;
        const {
            visualElement: a
        } = o.options;
        a && a.props.style && a.props.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Un(e, {
            x: -o.scroll.offset.x,
            y: -o.scroll.offset.y
        }), s && (t.x *= s.x.scale, t.y *= s.y.scale, xm(e, s)), r && ln(o.latestValues) && Un(e, o.latestValues))
    }
    t.x < wd && t.x > xd && (t.x = 1), t.y < wd && t.y > xd && (t.y = 1)
}

function Bn(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Sd(e, t, n, r, i = .5) {
    const o = X(e.min, e.max, i);
    ta(e, t, n, o, r)
}

function Un(e, t) {
    Sd(e.x, t.x, t.scaleX, t.scale, t.originX), Sd(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function wm(e, t) {
    return vm(l2(e.getBoundingClientRect(), t))
}

function u2(e, t, n) {
    const r = wm(e, n),
        {
            scroll: i
        } = t;
    return i && (Bn(r.x, i.offset.x), Bn(r.y, i.offset.y)), r
}
const Sm = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    c2 = new WeakMap;
class d2 {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = re(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const i = c => {
                const {
                    dragSnapToOrigin: d
                } = this.getProps();
                d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(ns(c, "page").point)
            },
            o = (c, d) => {
                const {
                    drag: h,
                    dragPropagation: v,
                    onDragStart: y
                } = this.getProps();
                if (h && !v && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = hm(h), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Fe(S => {
                    let m = this.getAxisMotionValue(S).get() || 0;
                    if (at.test(m)) {
                        const {
                            projection: p
                        } = this.visualElement;
                        if (p && p.layout) {
                            const g = p.layout.layoutBox[S];
                            g && (m = _e(g) * (parseFloat(m) / 100))
                        }
                    }
                    this.originPoint[S] = m
                }), y && U.postRender(() => y(c, d)), Zl(this.visualElement, "transform");
                const {
                    animationState: x
                } = this.visualElement;
                x && x.setActive("whileDrag", !0)
            },
            s = (c, d) => {
                const {
                    dragPropagation: h,
                    dragDirectionLock: v,
                    onDirectionLock: y,
                    onDrag: x
                } = this.getProps();
                if (!h && !this.openGlobalLock) return;
                const {
                    offset: S
                } = d;
                if (v && this.currentDirection === null) {
                    this.currentDirection = f2(S), this.currentDirection !== null && y && y(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, S), this.updateAxis("y", d.point, S), this.visualElement.render(), x && x(c, d)
            },
            l = (c, d) => this.stop(c, d),
            a = () => Fe(c => {
                var d;
                return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new cm(t, {
            onSessionStart: i,
            onStart: o,
            onMove: s,
            onSessionEnd: l,
            resumeAnimation: a
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Sm(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: i
        } = n;
        this.startAnimation(i);
        const {
            onDragEnd: o
        } = this.getProps();
        o && U.postRender(() => o(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !Fi(t, i, this.currentDirection)) return;
        const o = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = e2(s, this.constraints[t], this.elastic[t])), o.set(s)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
        n && In(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = t2(i.layoutBox, n) : this.constraints = !1, this.elastic = o2(r), o !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Fe(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = i2(i.layoutBox[s], this.constraints[s]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !In(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const o = u2(r, i.root, this.visualElement.getTransformPagePoint());
        let s = n2(i.layout.layoutBox, o);
        if (n) {
            const l = n(s2(s));
            this.hasMutatedConstraints = !!l, l && (s = vm(l))
        }
        return s
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: l
        } = this.getProps(), a = this.constraints || {}, u = Fe(c => {
            if (!Fi(c, n, this.currentDirection)) return;
            let d = a && a[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                v = i ? 40 : 1e7,
                y = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: h,
                    bounceDamping: v,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...o,
                    ...d
                };
            return this.startAxisValueAnimation(c, y)
        });
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Zl(this.visualElement, t), r.start(mu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Fe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Fe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Fe(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Fi(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, o = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: s,
                    max: l
                } = i.layout.layoutBox[n];
                o.set(t[n] - X(s, l, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!In(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Fe(s => {
            const l = this.getAxisMotionValue(s);
            if (l && this.constraints !== !1) {
                const a = l.get();
                i[s] = r2({
                    min: a,
                    max: a
                }, this.constraints[s])
            }
        });
        const {
            transformTemplate: o
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Fe(s => {
            if (!Fi(s, t, null)) return;
            const l = this.getAxisMotionValue(s),
                {
                    min: a,
                    max: u
                } = this.constraints[s];
            l.set(X(a, u, i[s]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        c2.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = St(t, "pointerdown", a => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(a)
            }),
            r = () => {
                const {
                    dragConstraints: a
                } = this.getProps();
                In(a) && a.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            o = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), U.read(r);
        const s = gt(window, "resize", () => this.scalePositionWithinConstraints()),
            l = i.addEventListener("didUpdate", ({
                delta: a,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (Fe(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += a[c].translate, d.set(d.get() + a[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            s(), n(), o(), l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: o = !1,
                dragElastic: s = Jl,
                dragMomentum: l = !0
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: l
        }
    }
}

function Fi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function f2(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class h2 extends en {
    constructor(t) {
        super(t), this.removeGroupControls = we, this.removeListeners = we, this.controls = new d2(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || we
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const kd = e => (t, n) => {
    e && U.postRender(() => e(t, n))
};
class p2 extends en {
    constructor() {
        super(...arguments), this.removePointerDownListener = we
    }
    onPointerDown(t) {
        this.session = new cm(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Sm(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: kd(t),
            onStart: kd(n),
            onMove: r,
            onEnd: (o, s) => {
                delete this.session, i && U.postRender(() => i(o, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = St(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const rs = E.createContext(null);

function m2() {
    const e = E.useContext(rs);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, i = E.useId();
    E.useEffect(() => r(i), []);
    const o = E.useCallback(() => n && n(i), [i, n]);
    return !t && n ? [!1, o] : [!0]
}
const xu = E.createContext({}),
    km = E.createContext({}),
    to = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    };

function Cd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const wr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (L.test(e)) e = parseFloat(e);
                else return e;
            const n = Cd(e, t.target.x),
                r = Cd(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    g2 = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = Xt.parse(e);
            if (i.length > 5) return r;
            const o = Xt.createTransformer(e),
                s = typeof i[0] != "number" ? 1 : 0,
                l = n.x.scale * t.x,
                a = n.y.scale * t.y;
            i[0 + s] /= l, i[1 + s] /= a;
            const u = X(l, a, .5);
            return typeof i[2 + s] == "number" && (i[2 + s] /= u), typeof i[3 + s] == "number" && (i[3 + s] /= u), o(i)
        }
    },
    Ro = {};

function v2(e) {
    Object.assign(Ro, e)
}
const {
    schedule: wu,
    cancel: r5
} = Sp(queueMicrotask, !1);
class y2 extends E.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: o
        } = t;
        v2(x2), o && (n.group && n.group.add(o), r && r.register && i && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
        })), to.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: o
        } = this.props, s = r.projection;
        return s && (s.isPresent = o, i || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || U.postRender(() => {
            const l = s.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), wu.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function Cm(e) {
    const [t, n] = m2(), r = E.useContext(xu);
    return f.jsx(y2, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: E.useContext(km),
        isPresent: t,
        safeToRemove: n
    })
}
const x2 = {
        borderRadius: {
            ...wr,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: wr,
        borderTopRightRadius: wr,
        borderBottomLeftRadius: wr,
        borderBottomRightRadius: wr,
        boxShadow: g2
    },
    Pm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    w2 = Pm.length,
    Pd = e => typeof e == "string" ? parseFloat(e) : e,
    Td = e => typeof e == "number" || L.test(e);

function S2(e, t, n, r, i, o) {
    i ? (e.opacity = X(0, n.opacity !== void 0 ? n.opacity : 1, k2(r)), e.opacityExit = X(t.opacity !== void 0 ? t.opacity : 1, 0, C2(r))) : o && (e.opacity = X(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < w2; s++) {
        const l = `border${Pm[s]}Radius`;
        let a = Ed(t, l),
            u = Ed(n, l);
        if (a === void 0 && u === void 0) continue;
        a || (a = 0), u || (u = 0), a === 0 || u === 0 || Td(a) === Td(u) ? (e[l] = Math.max(X(Pd(a), Pd(u), r), 0), (at.test(u) || at.test(a)) && (e[l] += "%")) : e[l] = u
    }(t.rotate || n.rotate) && (e.rotate = X(t.rotate || 0, n.rotate || 0, r))
}

function Ed(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const k2 = Tm(0, .5, Np),
    C2 = Tm(.5, .95, we);

function Tm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(ir(e, t, r))
}

function jd(e, t) {
    e.min = t.min, e.max = t.max
}

function Ie(e, t) {
    jd(e.x, t.x), jd(e.y, t.y)
}

function Nd(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function Md(e, t, n, r, i) {
    return e -= t, e = Lo(e, 1 / n, r), i !== void 0 && (e = Lo(e, 1 / i, r)), e
}

function P2(e, t = 0, n = 1, r = .5, i, o = e, s = e) {
    if (at.test(t) && (t = parseFloat(t), t = X(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let l = X(o.min, o.max, r);
    e === o && (l -= t), e.min = Md(e.min, t, n, l, i), e.max = Md(e.max, t, n, l, i)
}

function zd(e, t, [n, r, i], o, s) {
    P2(e, t[n], t[r], t[i], t.scale, o, s)
}
const T2 = ["x", "scaleX", "originX"],
    E2 = ["y", "scaleY", "originY"];

function Ad(e, t, n, r) {
    zd(e.x, t, T2, n ? n.x : void 0, r ? r.x : void 0), zd(e.y, t, E2, n ? n.y : void 0, r ? r.y : void 0)
}

function Ld(e) {
    return e.translate === 0 && e.scale === 1
}

function Em(e) {
    return Ld(e.x) && Ld(e.y)
}

function Rd(e, t) {
    return e.min === t.min && e.max === t.max
}

function j2(e, t) {
    return Rd(e.x, t.x) && Rd(e.y, t.y)
}

function Vd(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function jm(e, t) {
    return Vd(e.x, t.x) && Vd(e.y, t.y)
}

function Dd(e) {
    return _e(e.x) / _e(e.y)
}

function _d(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class N2 {
    constructor() {
        this.members = []
    }
    add(t) {
        gu(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (vu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const o = this.members[i];
            if (o.isPresent !== !1) {
                r = o;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function M2(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        o = e.y.translate / t.y,
        s = (n == null ? void 0 : n.z) || 0;
    if ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: d,
            rotateY: h,
            skewX: v,
            skewY: y
        } = n;
        u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), h && (r += `rotateY(${h}deg) `), v && (r += `skewX(${v}deg) `), y && (r += `skewY(${y}deg) `)
    }
    const l = e.x.scale * t.x,
        a = e.y.scale * t.y;
    return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || "none"
}
const z2 = (e, t) => e.depth - t.depth;
class A2 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        gu(this.children, t), this.isDirty = !0
    }
    remove(t) {
        vu(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(z2), this.isDirty = !1, this.children.forEach(t)
    }
}

function no(e) {
    const t = xe(e) ? e.get() : e;
    return ky(t) ? t.toValue() : t
}

function L2(e, t) {
    const n = ut.now(),
        r = ({
            timestamp: i
        }) => {
            const o = i - n;
            o >= t && (Kt(r), e(o - t))
        };
    return U.read(r, !0), () => Kt(r)
}

function R2(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function V2(e, t, n) {
    const r = xe(e) ? e : ui(e);
    return r.start(mu("", r, t, n)), r.animation
}
const an = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    Mr = typeof window < "u" && window.MotionDebug !== void 0,
    Hs = ["", "X", "Y", "Z"],
    D2 = {
        visibility: "hidden"
    },
    bd = 1e3;
let _2 = 0;

function $s(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function Nm(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = om(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: o
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || o))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && Nm(r)
}

function Mm({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(s = {}, l = t == null ? void 0 : t()) {
            this.id = _2++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, Mr && (an.totalNodes = an.resolvedTargetDeltas = an.recalculatedProjection = 0), this.nodes.forEach(I2), this.nodes.forEach($2), this.nodes.forEach(W2), this.nodes.forEach(F2), Mr && window.MotionDebug.record(an)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new A2)
        }
        addEventListener(s, l) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new yu), this.eventHandlers.get(s).add(l)
        }
        notifyListeners(s, ...l) {
            const a = this.eventHandlers.get(s);
            a && a.notify(...l)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, l = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = R2(s), this.instance = s;
            const {
                layoutId: a,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || a) && (this.isLayoutDirty = !0), e) {
                let d;
                const h = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, d && d(), d = L2(h, 250), to.hasAnimatedSinceResize && (to.hasAnimatedSinceResize = !1, this.nodes.forEach(Id))
                })
            }
            a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: h,
                hasRelativeTargetChanged: v,
                layout: y
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || c.getDefaultTransition() || Y2,
                    {
                        onLayoutAnimationStart: S,
                        onLayoutAnimationComplete: m
                    } = c.getProps(),
                    p = !this.targetLayout || !jm(this.targetLayout, y) || v,
                    g = !h && v;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || h && (p || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, g);
                    const w = {
                        ...nu(x, "layout"),
                        onPlay: S,
                        onComplete: m
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0, w.type = !1), this.startAnimation(w)
                } else h || Id(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Kt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(G2), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: s
            } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Nm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: l,
                layout: a
            } = this.options;
            if (l === void 0 && !a) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Od);
                return
            }
            this.isUpdating || this.nodes.forEach(U2), this.isUpdating = !1, this.nodes.forEach(H2), this.nodes.forEach(b2), this.nodes.forEach(O2), this.clearAllSnapshots();
            const l = ut.now();
            fe.delta = Qt(0, 1e3 / 60, l - fe.timestamp), fe.timestamp = l, fe.isProcessing = !0, Ds.update.process(fe), Ds.preRender.process(fe), Ds.render.process(fe), fe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, wu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(B2), this.sharedNodes.forEach(K2)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, U.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            U.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = re(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: l
            } = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (l = !1), l) {
                const a = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: a,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : a
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                l = this.projectionDelta && !Em(this.projectionDelta),
                a = this.getTransformTemplate(),
                u = a ? a(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s && (l || ln(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(s = !0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return s && (a = this.removeTransform(a)), Z2(a), {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var s;
            const {
                visualElement: l
            } = this.options;
            if (!l) return re();
            const a = l.measureViewportBox();
            if (!(((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) || this.path.some(q2))) {
                const {
                    scroll: c
                } = this.root;
                c && (Bn(a.x, c.offset.x), Bn(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(s) {
            var l;
            const a = re();
            if (Ie(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot) return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: d,
                        options: h
                    } = c;
                c !== this.root && d && h.layoutScroll && (d.wasRoot && Ie(a, s), Bn(a.x, d.offset.x), Bn(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(s, l = !1) {
            const a = re();
            Ie(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && Un(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), ln(c.latestValues) && Un(a, c.latestValues)
            }
            return ln(this.latestValues) && Un(a, this.latestValues), a
        }
        removeTransform(s) {
            const l = re();
            Ie(l, s);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !ln(u.latestValues)) continue;
                ea(u.latestValues) && u.updateSnapshot();
                const c = re(),
                    d = u.measurePageBox();
                Ie(c, d), Ad(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return ln(this.latestValues) && Ad(l, this.latestValues), l
        }
        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = {
                ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== fe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: d,
                layoutId: h
            } = this.options;
            if (!(!this.layout || !(d || h))) {
                if (this.resolvedRelativeTargetAt = fe.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const v = this.getClosestProjectingParent();
                    v && v.layout && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = re(), this.relativeTargetOrigin = re(), Br(this.relativeTargetOrigin, this.layout.layoutBox, v.layout.layoutBox), Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = re(), this.targetWithTransforms = re()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Jy(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ie(this.target, this.layout.layoutBox), xm(this.target, this.targetDelta)) : Ie(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const v = this.getClosestProjectingParent();
                        v && !!v.resumingFrom == !!this.resumingFrom && !v.options.layoutScroll && v.target && this.animationProgress !== 1 ? (this.relativeParent = v, this.forceRelativeParentToResolveTarget(), this.relativeTarget = re(), this.relativeTargetOrigin = re(), Br(this.relativeTargetOrigin, this.target, v.target), Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Mr && an.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || ea(this.parent.latestValues) || ym(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const l = this.getLead(),
                a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === fe.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
            Ie(this.layoutCorrected, this.layout.layoutBox);
            const h = this.treeScale.x,
                v = this.treeScale.y;
            a2(this.layoutCorrected, this.treeScale, this.path, a), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = re());
            const {
                target: y
            } = l;
            if (!y) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Nd(this.prevProjectionDelta.x, this.projectionDelta.x), Nd(this.prevProjectionDelta.y, this.projectionDelta.y)), Fr(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== v || !_d(this.projectionDelta.x, this.prevProjectionDelta.x) || !_d(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y)), Mr && an.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            var l;
            if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(), s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Fn(), this.projectionDelta = Fn(), this.projectionDeltaWithTransform = Fn()
        }
        setAnimationOrigin(s, l = !1) {
            const a = this.snapshot,
                u = a ? a.latestValues : {},
                c = {
                    ...this.latestValues
                },
                d = Fn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
            const h = re(),
                v = a ? a.source : void 0,
                y = this.layout ? this.layout.source : void 0,
                x = v !== y,
                S = this.getStack(),
                m = !S || S.members.length <= 1,
                p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(X2));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = w => {
                const k = w / 1e3;
                Fd(d.x, s.x, k), Fd(d.y, s.y, k), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Br(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Q2(this.relativeTarget, this.relativeTargetOrigin, h, k), g && j2(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = re()), Ie(g, this.relativeTarget)), x && (this.animationValues = c, S2(c, u, this.latestValues, k, p, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Kt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = U.update(() => {
                to.hasAnimatedSinceResize = !0, this.currentAnimation = V2(0, bd, {
                    ...s,
                    onUpdate: l => {
                        this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l)
                    },
                    onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(bd), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: l,
                target: a,
                layout: u,
                latestValues: c
            } = s;
            if (!(!l || !a || !u)) {
                if (this !== s && this.layout && u && zm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || re();
                    const d = _e(this.layout.layoutBox.x);
                    a.x.min = s.target.x.min, a.x.max = a.x.min + d;
                    const h = _e(this.layout.layoutBox.y);
                    a.y.min = s.target.y.min, a.y.max = a.y.min + h
                }
                Ie(l, a), Un(l, c), Fr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(s, l) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new N2), this.sharedNodes.get(s).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {
                layoutId: l
            } = this.options;
            return l ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {
                layoutId: l
            } = this.options;
            return l ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: s
            } = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }
        promote({
            needsReset: s,
            transition: l,
            preserveFollowOpacity: a
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, a), s && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return;
            let l = !1;
            const {
                latestValues: a
            } = s;
            if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0), !l) return;
            const u = {};
            a.z && $s("z", s, u, this.animationValues);
            for (let c = 0; c < Hs.length; c++) $s(`rotate${Hs[c]}`, s, u, this.animationValues), $s(`skew${Hs[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var l, a;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return D2;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = no(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const x = {};
                return this.options.layoutId && (x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, x.pointerEvents = no(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !ln(this.latestValues) && (x.transform = c ? c({}, "") : "none", this.hasProjected = !1), x
            }
            const h = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(), u.transform = M2(this.projectionDeltaWithTransform, this.treeScale, h), c && (u.transform = c(h, u.transform));
            const {
                x: v,
                y
            } = this.projectionDelta;
            u.transformOrigin = `${v.origin*100}% ${y.origin*100}% 0`, d.animationValues ? u.opacity = d === this ? (a = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = d === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const x in Ro) {
                if (h[x] === void 0) continue;
                const {
                    correct: S,
                    applyTo: m
                } = Ro[x], p = u.transform === "none" ? h[x] : S(h[x], d);
                if (m) {
                    const g = m.length;
                    for (let w = 0; w < g; w++) u[m[w]] = p
                } else u[x] = p
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? no(s == null ? void 0 : s.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var l;
                return (l = s.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }), this.root.nodes.forEach(Od), this.root.sharedNodes.clear()
        }
    }
}

function b2(e) {
    e.updateLayout()
}

function O2(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: o
        } = e.options, s = n.source !== e.layout.source;
        o === "size" ? Fe(d => {
            const h = s ? n.measuredBox[d] : n.layoutBox[d],
                v = _e(h);
            h.min = r[d].min, h.max = h.min + v
        }) : zm(o, n.layoutBox, r) && Fe(d => {
            const h = s ? n.measuredBox[d] : n.layoutBox[d],
                v = _e(r[d]);
            h.max = h.min + v, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + v)
        });
        const l = Fn();
        Fr(l, r, n.layoutBox);
        const a = Fn();
        s ? Fr(a, e.applyTransform(i, !0), n.measuredBox) : Fr(a, r, n.layoutBox);
        const u = !Em(l);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: h,
                    layout: v
                } = d;
                if (h && v) {
                    const y = re();
                    Br(y, n.layoutBox, h.layoutBox);
                    const x = re();
                    Br(x, r, v.layoutBox), jm(y, x) || (c = !0), d.options.layoutRoot && (e.relativeTarget = x, e.relativeTargetOrigin = y, e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function I2(e) {
    Mr && an.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function F2(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function B2(e) {
    e.clearSnapshot()
}

function Od(e) {
    e.clearMeasurements()
}

function U2(e) {
    e.isLayoutDirty = !1
}

function H2(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Id(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function $2(e) {
    e.resolveTargetDelta()
}

function W2(e) {
    e.calcProjection()
}

function G2(e) {
    e.resetSkewAndRotation()
}

function K2(e) {
    e.removeLeadSnapshot()
}

function Fd(e, t, n) {
    e.translate = X(t.translate, 0, n), e.scale = X(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Bd(e, t, n, r) {
    e.min = X(t.min, n.min, r), e.max = X(t.max, n.max, r)
}

function Q2(e, t, n, r) {
    Bd(e.x, t.x, n.x, r), Bd(e.y, t.y, n.y, r)
}

function X2(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Y2 = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Ud = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    Hd = Ud("applewebkit/") && !Ud("chrome/") ? Math.round : we;

function $d(e) {
    e.min = Hd(e.min), e.max = Hd(e.max)
}

function Z2(e) {
    $d(e.x), $d(e.y)
}

function zm(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !qy(Dd(t), Dd(n), .2)
}

function q2(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const J2 = Mm({
        attachResizeListener: (e, t) => gt(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Ws = {
        current: void 0
    },
    Am = Mm({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Ws.current) {
                const e = new J2({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Ws.current = e
            }
            return Ws.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    ex = {
        pan: {
            Feature: p2
        },
        drag: {
            Feature: h2,
            ProjectionNode: Am,
            MeasureLayout: Cm
        }
    };

function Wd(e, t) {
    const n = t ? "pointerenter" : "pointerleave",
        r = t ? "onHoverStart" : "onHoverEnd",
        i = (o, s) => {
            if (o.pointerType === "touch" || pm()) return;
            const l = e.getProps();
            e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
            const a = l[r];
            a && U.postRender(() => a(o, s))
        };
    return St(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class tx extends en {
    mount() {
        this.unmount = wt(Wd(this.node, !0), Wd(this.node, !1))
    }
    unmount() {}
}
class nx extends en {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = wt(gt(this.node.current, "focus", () => this.onFocus()), gt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const Lm = (e, t) => t ? e === t ? !0 : Lm(e, t.parentElement) : !1;

function Gs(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, ns(n))
}
class rx extends en {
    constructor() {
        super(...arguments), this.removeStartListeners = we, this.removeEndListeners = we, this.removeAccessibleListeners = we, this.startPointerPress = (t, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const r = this.node.getProps(),
                o = St(window, "pointerup", (l, a) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c,
                        globalTapTarget: d
                    } = this.node.getProps(), h = !d && !Lm(this.node.current, l.target) ? c : u;
                    h && U.update(() => h(l, a))
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                s = St(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = wt(o, s), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = o => {
                    if (o.key !== "Enter" || this.isPressing) return;
                    const s = l => {
                        l.key !== "Enter" || !this.checkPressEnd() || Gs("up", (a, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && U.postRender(() => c(a, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = gt(this.node.current, "keyup", s), Gs("down", (l, a) => {
                        this.startPress(l, a)
                    })
                },
                n = gt(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && Gs("cancel", (o, s) => this.cancelPress(o, s))
                },
                i = gt(this.node.current, "blur", r);
            this.removeAccessibleListeners = wt(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: i
        } = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && U.postRender(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !pm()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && U.postRender(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = St(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = gt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = wt(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const na = new WeakMap,
    Ks = new WeakMap,
    ix = e => {
        const t = na.get(e.target);
        t && t(e)
    },
    ox = e => {
        e.forEach(ix)
    };

function sx({
    root: e,
    ...t
}) {
    const n = e || document;
    Ks.has(n) || Ks.set(n, {});
    const r = Ks.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(ox, {
        root: e,
        ...t
    })), r[i]
}

function lx(e, t, n) {
    const r = sx(t);
    return na.set(e, n), r.observe(e), () => {
        na.delete(e), r.unobserve(e)
    }
}
const ax = {
    some: 0,
    all: 1
};
class ux extends en {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: o
        } = t, s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : ax[i]
        }, l = a => {
            const {
                isIntersecting: u
            } = a;
            if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: d
            } = this.node.getProps(), h = u ? c : d;
            h && h(a)
        };
        return lx(this.node.current, s, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(cx(t, n)) && this.startObserver()
    }
    unmount() {}
}

function cx({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const dx = {
        inView: {
            Feature: ux
        },
        tap: {
            Feature: rx
        },
        focus: {
            Feature: nx
        },
        hover: {
            Feature: tx
        }
    },
    fx = {
        layout: {
            ProjectionNode: Am,
            MeasureLayout: Cm
        }
    },
    ci = E.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    is = E.createContext({}),
    Su = typeof window < "u",
    Rm = Su ? E.useLayoutEffect : E.useEffect,
    Vm = E.createContext({
        strict: !1
    });
let Gd = !1;

function hx(e, t, n, r, i) {
    var o;
    const {
        visualElement: s
    } = E.useContext(is), l = E.useContext(Vm), a = E.useContext(rs), u = E.useContext(ci).reducedMotion, c = E.useRef();
    r = r || l.renderer, !c.current && r && (c.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: u
    }));
    const d = c.current,
        h = E.useContext(km);
    d && !d.projection && i && (d.type === "html" || d.type === "svg") && mx(c.current, n, i, h), E.useInsertionEffect(() => {
        d && d.update(n, a)
    });
    const v = n[im],
        y = E.useRef(!!v && !window.MotionHandoffIsComplete && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, v)));
    return Rm(() => {
        d && (d.updateFeatures(), wu.render(d.render), y.current && d.animationState && d.animationState.animateChanges())
    }), E.useEffect(() => {
        d && (!y.current && d.animationState && d.animationState.animateChanges(), y.current = !1, Gd || (Gd = !0, queueMicrotask(px)))
    }), d
}

function px() {
    window.MotionHandoffIsComplete = !0
}

function mx(e, t, n, r) {
    const {
        layoutId: i,
        layout: o,
        drag: s,
        dragConstraints: l,
        layoutScroll: a,
        layoutRoot: u
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Dm(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: o,
        alwaysMeasureLayout: !!s || l && In(l),
        visualElement: e,
        animationType: typeof o == "string" ? o : "both",
        initialPromotionConfig: r,
        layoutScroll: a,
        layoutRoot: u
    })
}

function Dm(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : Dm(e.parent)
}

function gx(e, t, n) {
    return E.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : In(n) && (n.current = r))
    }, [t])
}

function os(e) {
    return oi(e.animate) || tu.some(t => si(e[t]))
}

function _m(e) {
    return !!(os(e) || e.variants)
}

function vx(e, t) {
    if (os(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || si(n) ? n : void 0,
            animate: si(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function yx(e) {
    const {
        initial: t,
        animate: n
    } = vx(e, E.useContext(is));
    return E.useMemo(() => ({
        initial: t,
        animate: n
    }), [Kd(t), Kd(n)])
}

function Kd(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Qd = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    or = {};
for (const e in Qd) or[e] = {
    isEnabled: t => Qd[e].some(n => !!t[n])
};

function xx(e) {
    for (const t in e) or[t] = {
        ...or[t],
        ...e[t]
    }
}
const wx = Symbol.for("motionComponentSymbol");

function Sx({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i
}) {
    e && xx(e);

    function o(l, a) {
        let u;
        const c = {
                ...E.useContext(ci),
                ...l,
                layoutId: kx(l)
            },
            {
                isStatic: d
            } = c,
            h = yx(l),
            v = r(l, d);
        if (!d && Su) {
            Cx();
            const y = Px(c);
            u = y.MeasureLayout, h.visualElement = hx(i, v, c, t, y.ProjectionNode)
        }
        return f.jsxs(is.Provider, {
            value: h,
            children: [u && h.visualElement ? f.jsx(u, {
                visualElement: h.visualElement,
                ...c
            }) : null, n(i, l, gx(v, h.visualElement, a), v, d, h.visualElement)]
        })
    }
    const s = E.forwardRef(o);
    return s[wx] = i, s
}

function kx({
    layoutId: e
}) {
    const t = E.useContext(xu).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function Cx(e, t) {
    E.useContext(Vm).strict
}

function Px(e) {
    const {
        drag: t,
        layout: n
    } = or;
    if (!t && !n) return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const Tx = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function ku(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Tx.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function bm(e, {
    style: t,
    vars: n
}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const o in n) e.style.setProperty(o, n[o])
}
const Om = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Im(e, t, n, r) {
    bm(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(Om.has(i) ? i : ts(i), t.attrs[i])
}

function Fm(e, {
    layout: t,
    layoutId: n
}) {
    return Jt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ro[e] || e === "opacity")
}

function Cu(e, t, n) {
    var r;
    const {
        style: i
    } = e, o = {};
    for (const s in i)(xe(i[s]) || t.style && xe(t.style[s]) || Fm(s, e) || ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[s] = i[s]);
    return n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o
}

function Bm(e, t, n) {
    const r = Cu(e, t, n);
    for (const i in e)
        if (xe(e[i]) || xe(t[i])) {
            const o = gi.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[o] = e[i]
        } return r
}

function ss(e) {
    const t = E.useRef(null);
    return t.current === null && (t.current = e()), t.current
}

function Ex({
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r
}, i, o, s, l) {
    const a = {
        latestValues: jx(i, o, s, l ? !1 : e, t),
        renderState: n()
    };
    return r && (a.mount = u => r(i, u, a)), a
}
const Um = e => (t, n) => {
    const r = E.useContext(is),
        i = E.useContext(rs),
        o = () => Ex(e, t, r, i, n);
    return n ? o() : ss(o)
};

function Xd(e, t, n) {
    const r = Array.isArray(t) ? t : [t];
    for (let i = 0; i < r.length; i++) {
        const o = Ja(e, r[i]);
        if (o) {
            const {
                transitionEnd: s,
                transition: l,
                ...a
            } = o;
            n(a, s)
        }
    }
}

function jx(e, t, n, r, i) {
    var o;
    const s = {};
    let l = r && ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0;
    const a = i(e, {});
    for (const x in a) s[x] = no(a[x]);
    let {
        initial: u,
        animate: c
    } = e;
    const d = os(e),
        h = _m(e);
    t && h && !d && e.inherit !== !1 && (u === void 0 && (u = t.initial), c === void 0 && (c = t.animate));
    let v = n ? n.initial === !1 : !1;
    v = v || u === !1;
    const y = v ? c : u;
    return y && typeof y != "boolean" && !oi(y) && Xd(e, y, (x, S) => {
        for (const m in x) {
            let p = x[m];
            if (Array.isArray(p)) {
                const g = v ? p.length - 1 : 0;
                p = p[g]
            }
            p !== null && (s[m] = p)
        }
        for (const m in S) s[m] = S[m]
    }), l && c && u !== !1 && !oi(c) && Xd(e, c, x => {
        for (const S in x)
            if (sm(S)) {
                s.willChange = "transform";
                return
            }
    }), s
}
const Pu = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    Hm = () => ({
        ...Pu(),
        attrs: {}
    }),
    $m = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    Nx = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Mx = gi.length;

function zx(e, t, n) {
    let r = "",
        i = !0;
    for (let o = 0; o < Mx; o++) {
        const s = gi[o],
            l = e[s];
        if (l === void 0) continue;
        let a = !0;
        if (typeof l == "number" ? a = l === (s.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0, !a || n) {
            const u = $m(l, uu[s]);
            if (!a) {
                i = !1;
                const c = Nx[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function Tu(e, t, n) {
    const {
        style: r,
        vars: i,
        transformOrigin: o
    } = e;
    let s = !1,
        l = !1;
    for (const a in t) {
        const u = t[a];
        if (Jt.has(a)) {
            s = !0;
            continue
        } else if (Rp(a)) {
            i[a] = u;
            continue
        } else {
            const c = $m(u, uu[a]);
            a.startsWith("origin") ? (l = !0, o[a] = c) : r[a] = c
        }
    }
    if (t.transform || (s || n ? r.transform = zx(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
        const {
            originX: a = "50%",
            originY: u = "50%",
            originZ: c = 0
        } = o;
        r.transformOrigin = `${a} ${u} ${c}`
    }
}

function Yd(e, t, n) {
    return typeof e == "string" ? e : L.transform(t + n * e)
}

function Ax(e, t, n) {
    const r = Yd(t, e.x, e.width),
        i = Yd(n, e.y, e.height);
    return `${r} ${i}`
}
const Lx = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Rx = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Vx(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const o = i ? Lx : Rx;
    e[o.offset] = L.transform(-r);
    const s = L.transform(t),
        l = L.transform(n);
    e[o.array] = `${s} ${l}`
}

function Eu(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
}, c, d) {
    if (Tu(e, u, d), c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: h,
        style: v,
        dimensions: y
    } = e;
    h.transform && (y && (v.transform = h.transform), delete h.transform), y && (i !== void 0 || o !== void 0 || v.transform) && (v.transformOrigin = Ax(y, i !== void 0 ? i : .5, o !== void 0 ? o : .5)), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), s !== void 0 && Vx(h, s, l, a, !1)
}
const ju = e => typeof e == "string" && e.toLowerCase() === "svg",
    Dx = {
        useVisualState: Um({
            scrapeMotionValuesFromProps: Bm,
            createRenderState: Hm,
            onMount: (e, t, {
                renderState: n,
                latestValues: r
            }) => {
                U.read(() => {
                    try {
                        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                    } catch {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }), U.render(() => {
                    Eu(n, r, ju(t.tagName), e.transformTemplate), Im(t, n)
                })
            }
        })
    },
    _x = {
        useVisualState: Um({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: Cu,
            createRenderState: Pu
        })
    };

function Wm(e, t, n) {
    for (const r in t) !xe(t[r]) && !Fm(r, n) && (e[r] = t[r])
}

function bx({
    transformTemplate: e
}, t) {
    return E.useMemo(() => {
        const n = Pu();
        return Tu(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function Ox(e, t) {
    const n = e.style || {},
        r = {};
    return Wm(r, n, e), Object.assign(r, bx(e, t)), r
}

function Ix(e, t) {
    const n = {},
        r = Ox(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const Fx = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Vo(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Fx.has(e)
}
let Gm = e => !Vo(e);

function Km(e) {
    e && (Gm = t => t.startsWith("on") ? !Vo(t) : e(t))
}
try {
    Km(require("@emotion/is-prop-valid").default)
} catch {}

function Bx(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (Gm(i) || n === !0 && Vo(i) || !t && !Vo(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}

function Ux(e, t, n, r) {
    const i = E.useMemo(() => {
        const o = Hm();
        return Eu(o, t, ju(r), e.transformTemplate), {
            ...o.attrs,
            style: {
                ...o.style
            }
        }
    }, [t]);
    if (e.style) {
        const o = {};
        Wm(o, e.style, e), i.style = {
            ...o,
            ...i.style
        }
    }
    return i
}

function Hx(e = !1) {
    return (n, r, i, {
        latestValues: o
    }, s) => {
        const a = (ku(n) ? Ux : Ix)(r, o, s, n),
            u = Bx(r, typeof n == "string", e),
            c = n !== E.Fragment ? {
                ...u,
                ...a,
                ref: i
            } : {},
            {
                children: d
            } = r,
            h = E.useMemo(() => xe(d) ? d.get() : d, [d]);
        return E.createElement(n, {
            ...c,
            children: h
        })
    }
}

function $x(e, t) {
    return function(r, {
        forwardMotionProps: i
    } = {
        forwardMotionProps: !1
    }) {
        const s = {
            ...ku(r) ? Dx : _x,
            preloadedFeatures: e,
            useRender: Hx(i),
            createVisualElement: t,
            Component: r
        };
        return Sx(s)
    }
}
const ra = {
        current: null
    },
    Qm = {
        current: !1
    };

function Wx() {
    if (Qm.current = !0, !!Su)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => ra.current = e.matches;
            e.addListener(t), t()
        } else ra.current = !1
}

function Gx(e, t, n) {
    for (const r in t) {
        const i = t[r],
            o = n[r];
        if (xe(i)) e.addValue(r, i);
        else if (xe(o)) e.addValue(r, ui(i, {
            owner: e
        }));
        else if (o !== i)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, ui(s !== void 0 ? s : i, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const Zd = new WeakMap,
    Kx = [..._p, ve, Xt],
    Qx = e => Kx.find(Dp(e)),
    qd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Xx {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: o,
        visualState: s
    }, l = {}) {
        this.applyWillChange = !1, this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = su, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const h = ut.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h, U.render(this.render, !1, !0))
        };
        const {
            latestValues: a,
            renderState: u
        } = s;
        this.latestValues = a, this.baseTarget = {
            ...a
        }, this.initialValues = n.initial ? {
            ...a
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = os(n), this.isVariantNode = _m(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: c,
            ...d
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in d) {
            const v = d[h];
            a[h] !== void 0 && xe(v) && v.set(a[h], !1)
        }
    }
    mount(t) {
        this.current = t, Zd.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Qm.current || Wx(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : ra.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Zd.delete(this.current), this.projection && this.projection.unmount(), Kt(this.notifyUpdate), Kt(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(), n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Jt.has(t),
            i = n.on("change", l => {
                this.latestValues[t] = l, this.props.onUpdate && U.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            o = n.on("renderRequest", this.scheduleRender);
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), o(), s && s(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in or) {
            const n = or[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: i
            } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const o = this.features[t];
                o.isMounted ? o.update() : (o.mount(), o.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : re()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < qd.length; r++) {
            const i = qd[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const o = "on" + i,
                s = t[o];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = Gx(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = ui(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (Ap(i) || zp(i)) ? i = parseFloat(i) : !Qx(i) && Xt.test(n) && (i = $p(t, n)), this.setBaseTarget(t, xe(i) ? i.get() : i)), xe(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const s = Ja(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            s && (i = s[t])
        }
        if (r && i !== void 0) return i;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !xe(o) ? o : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new yu), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Xm extends Xx {
    constructor() {
        super(...arguments), this.KeyframeResolver = Wp
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
}

function Yx(e) {
    return window.getComputedStyle(e)
}
class Zx extends Xm {
    constructor() {
        super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = bm
    }
    readValueFromInstance(t, n) {
        if (Jt.has(n)) {
            const r = cu(n);
            return r && r.default || 0
        } else {
            const r = Yx(t),
                i = (Rp(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return wm(t, n)
    }
    build(t, n, r) {
        Tu(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Cu(t, n, r)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        xe(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}
class qx extends Xm {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = re
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Jt.has(n)) {
            const r = cu(n);
            return r && r.default || 0
        }
        return n = Om.has(n) ? n : ts(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Bm(t, n, r)
    }
    build(t, n, r) {
        Eu(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Im(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = ju(t.tagName), super.mount(t)
    }
}
const Jx = (e, t) => ku(e) ? new qx(t) : new Zx(t, {
        allowProjection: e !== E.Fragment
    }),
    e4 = $x({
        ...Hy,
        ...dx,
        ...ex,
        ...fx
    }, Jx),
    Y = Dg(e4);
class t4 extends E.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function n4({
    children: e,
    isPresent: t
}) {
    const n = E.useId(),
        r = E.useRef(null),
        i = E.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        }),
        {
            nonce: o
        } = E.useContext(ci);
    return E.useInsertionEffect(() => {
        const {
            width: s,
            height: l,
            top: a,
            left: u
        } = i.current;
        if (t || !r.current || !s || !l) return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return o && (c.nonce = o), document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `), () => {
            document.head.removeChild(c)
        }
    }, [t]), f.jsx(t4, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: E.cloneElement(e, {
            ref: r
        })
    })
}
const r4 = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: o,
    mode: s
}) => {
    const l = ss(i4),
        a = E.useId(),
        u = E.useMemo(() => ({
            id: a,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: c => {
                l.set(c, !0);
                for (const d of l.values())
                    if (!d) return;
                r && r()
            },
            register: c => (l.set(c, !1), () => l.delete(c))
        }), o ? [Math.random()] : [n]);
    return E.useMemo(() => {
        l.forEach((c, d) => l.set(d, !1))
    }, [n]), E.useEffect(() => {
        !n && !l.size && r && r()
    }, [n]), s === "popLayout" && (e = f.jsx(n4, {
        isPresent: n,
        children: e
    })), f.jsx(rs.Provider, {
        value: u,
        children: e
    })
};

function i4() {
    return new Map
}
const Bi = e => e.key || "";

function Jd(e) {
    const t = [];
    return E.Children.forEach(e, n => {
        E.isValidElement(n) && t.push(n)
    }), t
}
const ef = ({
    children: e,
    exitBeforeEnter: t,
    custom: n,
    initial: r = !0,
    onExitComplete: i,
    presenceAffectsLayout: o = !0,
    mode: s = "sync"
}) => {
    const l = E.useMemo(() => Jd(e), [e]),
        a = l.map(Bi),
        u = E.useRef(!0),
        c = E.useRef(l),
        d = ss(() => new Map),
        [h, v] = E.useState(l),
        [y, x] = E.useState(l);
    Rm(() => {
        u.current = !1, c.current = l;
        for (let p = 0; p < y.length; p++) {
            const g = Bi(y[p]);
            a.includes(g) ? d.delete(g) : d.get(g) !== !0 && d.set(g, !1)
        }
    }, [y, a.length, a.join("-")]);
    const S = [];
    if (l !== h) {
        let p = [...l];
        for (let g = 0; g < y.length; g++) {
            const w = y[g],
                k = Bi(w);
            a.includes(k) || (p.splice(g, 0, w), S.push(w))
        }
        s === "wait" && S.length && (p = S), x(Jd(p)), v(l);
        return
    }
    const {
        forceRender: m
    } = E.useContext(xu);
    return f.jsx(f.Fragment, {
        children: y.map(p => {
            const g = Bi(p),
                w = l === y || a.includes(g),
                k = () => {
                    if (d.has(g)) d.set(g, !0);
                    else return;
                    let T = !0;
                    d.forEach(N => {
                        N || (T = !1)
                    }), T && (m == null || m(), x(c.current), i && i())
                };
            return f.jsx(r4, {
                isPresent: w,
                initial: !u.current || r ? void 0 : !1,
                custom: w ? void 0 : n,
                presenceAffectsLayout: o,
                mode: s,
                onExitComplete: w ? void 0 : k,
                children: p
            }, g)
        })
    })
};

function o4({
    children: e,
    isValidProp: t,
    ...n
}) {
    t && Km(t), n = {
        ...E.useContext(ci),
        ...n
    }, n.isStatic = ss(() => n.isStatic);
    const r = E.useMemo(() => n, [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]);
    return f.jsx(ci.Provider, {
        value: r,
        children: e
    })
}
const s4 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Ym = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
var l4 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const a4 = E.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: s,
    ...l
}, a) => E.createElement("svg", {
    ref: a,
    ...l4,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Ym("lucide", i),
    ...l
}, [...s.map(([u, c]) => E.createElement(u, c)), ...Array.isArray(o) ? o : [o]]));
const Ee = (e, t) => {
    const n = E.forwardRef(({
        className: r,
        ...i
    }, o) => E.createElement(a4, {
        ref: o,
        iconNode: t,
        className: Ym(`lucide-${s4(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`, n
};
const u4 = Ee("Book", [
    ["path", {
        d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
        key: "k3hazp"
    }]
]);
const c4 = Ee("Briefcase", [
    ["path", {
        d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
        key: "jecpp"
    }],
    ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "6",
        rx: "2",
        key: "i6l2r4"
    }]
]);
const d4 = Ee("Camera", [
    ["path", {
        d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
        key: "1tc9qg"
    }],
    ["circle", {
        cx: "12",
        cy: "13",
        r: "3",
        key: "1vg3eu"
    }]
]);
const f4 = Ee("Code", [
    ["polyline", {
        points: "16 18 22 12 16 6",
        key: "z7tu5w"
    }],
    ["polyline", {
        points: "8 6 2 12 8 18",
        key: "1eg1df"
    }]
]);
const h4 = Ee("ExternalLink", [
    ["path", {
        d: "M15 3h6v6",
        key: "1q9fwt"
    }],
    ["path", {
        d: "M10 14 21 3",
        key: "gplh6r"
    }],
    ["path", {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp"
    }]
]);
const p4 = Ee("Gamepad2", [
    ["line", {
        x1: "6",
        x2: "10",
        y1: "11",
        y2: "11",
        key: "1gktln"
    }],
    ["line", {
        x1: "8",
        x2: "8",
        y1: "9",
        y2: "13",
        key: "qnk9ow"
    }],
    ["line", {
        x1: "15",
        x2: "15.01",
        y1: "12",
        y2: "12",
        key: "krot7o"
    }],
    ["line", {
        x1: "18",
        x2: "18.01",
        y1: "10",
        y2: "10",
        key: "1lcuu1"
    }],
    ["path", {
        d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
        key: "mfqc10"
    }]
]);
const Zm = Ee("Github", [
    ["path", {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef"
    }],
    ["path", {
        d: "M9 18c-4.51 2-5-2-7-2",
        key: "9comsn"
    }]
]);
const m4 = Ee("Globe", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
        key: "13o1zl"
    }],
    ["path", {
        d: "M2 12h20",
        key: "9i4pu4"
    }]
]);
const g4 = Ee("GraduationCap", [
    ["path", {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0"
    }],
    ["path", {
        d: "M22 10v6",
        key: "1lu8f3"
    }],
    ["path", {
        d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
        key: "1r8lef"
    }]
]);
const v4 = Ee("Heart", [
    ["path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
    }]
]);
const y4 = Ee("Linkedin", [
    ["path", {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f"
    }],
    ["rect", {
        width: "4",
        height: "12",
        x: "2",
        y: "9",
        key: "mk3on5"
    }],
    ["circle", {
        cx: "4",
        cy: "4",
        r: "2",
        key: "bt5ra8"
    }]
]);
const tf = Ee("Mail", [
    ["rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2",
        key: "18n3k1"
    }],
    ["path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
        key: "1ocrg3"
    }]
]);
const ls = Ee("MapPin", [
    ["path", {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
    }],
    ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }]
]);
const x4 = Ee("Music", [
    ["path", {
        d: "M9 18V5l12-2v13",
        key: "1jmyc2"
    }],
    ["circle", {
        cx: "6",
        cy: "18",
        r: "3",
        key: "fqmcym"
    }],
    ["circle", {
        cx: "18",
        cy: "16",
        r: "3",
        key: "1hluhg"
    }]
]);
const w4 = Ee("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
var qm = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    nf = hn.createContext && hn.createContext(qm),
    S4 = ["attr", "size", "title"];

function k4(e, t) {
    if (e == null) return {};
    var n = C4(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function C4(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r]
        } return n
}

function Do() {
    return Do = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Do.apply(this, arguments)
}

function rf(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function _o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? rf(Object(n), !0).forEach(function(r) {
            P4(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rf(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}

function P4(e, t, n) {
    return t = T4(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function T4(e) {
    var t = E4(e, "string");
    return typeof t == "symbol" ? t : t + ""
}

function E4(e, t) {
    if (typeof e != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function Jm(e) {
    return e && e.map((t, n) => hn.createElement(t.tag, _o({
        key: n
    }, t.attr), Jm(t.child)))
}

function J(e) {
    return t => hn.createElement(j4, Do({
        attr: _o({}, e.attr)
    }, t), Jm(e.child))
}

function j4(e) {
    var t = n => {
        var {
            attr: r,
            size: i,
            title: o
        } = e, s = k4(e, S4), l = i || n.size || "1em", a;
        return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), hn.createElement("svg", Do({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, s, {
            className: a,
            style: _o(_o({
                color: e.color || n.color
            }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && hn.createElement("title", null, o), e.children)
    };
    return nf !== void 0 ? hn.createElement(nf.Consumer, null, n => t(n)) : t(qm)
}

function N4(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"
            },
            child: []
        }]
    })(e)
}

function M4(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 448 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"
            },
            child: []
        }]
    })(e)
}

function z4(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"
            },
            child: []
        }]
    })(e)
}

function A4(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
            },
            child: []
        }]
    })(e)
}

function L4(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 640 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"
            },
            child: []
        }]
    })(e)
}

function R4(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"
            },
            child: []
        }]
    })(e)
}

function V4(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "line",
            attr: {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            },
            child: []
        }, {
            tag: "polyline",
            attr: {
                points: "12 5 19 12 12 19"
            },
            child: []
        }]
    })(e)
}

function D4(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
            },
            child: []
        }]
    })(e)
}

function _4(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                d: "M0 0h24v24H0z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
            },
            child: []
        }]
    })(e)
}

function b4(e) {
    return J({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M0 8.877L2.247 5.91l8.405-3.416V.022l7.37 5.393L2.966 8.338v8.225L0 15.707zm24-4.45v14.651l-5.753 4.9-9.303-3.057v3.056l-5.978-7.416 15.057 1.798V5.415z"
            },
            child: []
        }]
    })(e)
}

function O4(e) {
    return J({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M14.096 3.076l1.634 2.292L24 3.076M5.503 20.924l4.474-4.374-2.692-2.89m6.133-10.584L11.027 5.23l4.022.15M4.124 3.077l.857 1.76 4.734.294m-3.058 7.072l3.497-6.522L0 5.13m7.064 7.485l3.303 3.548 3.643-3.57 1.13-6.652-4.439-.228Z"
            },
            child: []
        }]
    })(e)
}

function I4(e) {
    return J({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            },
            child: []
        }]
    })(e)
}

function F4(e) {
    return J({
        tag: "svg",
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            },
            child: []
        }]
    })(e)
}
const Nu = "-",
    B4 = e => {
        const t = H4(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const l = s.split(Nu);
                return l[0] === "" && l.length !== 1 && l.shift(), e0(l, t) || U4(s)
            },
            getConflictingClassGroupIds: (s, l) => {
                const a = n[s] || [];
                return l && r[s] ? [...a, ...r[s]] : a
            }
        }
    },
    e0 = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            i = r ? e0(e.slice(1), r) : void 0;
        if (i) return i;
        if (t.validators.length === 0) return;
        const o = e.join(Nu);
        return (s = t.validators.find(({
            validator: l
        }) => l(o))) == null ? void 0 : s.classGroupId
    },
    of = /^\[(.+)\]$/,
    U4 = e => {
        if (of.test(e)) {
            const t = of.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    H4 = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return W4(Object.entries(e.classGroups), n).forEach(([o, s]) => {
            ia(s, r, o, t)
        }), r
    },
    ia = (e, t, n, r) => {
        e.forEach(i => {
            if (typeof i == "string") {
                const o = i === "" ? t : sf(t, i);
                o.classGroupId = n;
                return
            }
            if (typeof i == "function") {
                if ($4(i)) {
                    ia(i(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: i,
                    classGroupId: n
                });
                return
            }
            Object.entries(i).forEach(([o, s]) => {
                ia(s, sf(t, o), n, r)
            })
        })
    },
    sf = (e, t) => {
        let n = e;
        return t.split(Nu).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    $4 = e => e.isThemeGetter,
    W4 = (e, t) => t ? e.map(([n, r]) => {
        const i = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, l]) => [t + s, l])) : o);
        return [n, i]
    }) : e,
    G4 = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const i = (o, s) => {
            n.set(o, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(o) {
                let s = n.get(o);
                if (s !== void 0) return s;
                if ((s = r.get(o)) !== void 0) return i(o, s), s
            },
            set(o, s) {
                n.has(o) ? n.set(o, s) : i(o, s)
            }
        }
    },
    t0 = "!",
    K4 = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, i = t[0], o = t.length, s = l => {
            const a = [];
            let u = 0,
                c = 0,
                d;
            for (let S = 0; S < l.length; S++) {
                let m = l[S];
                if (u === 0) {
                    if (m === i && (r || l.slice(S, S + o) === t)) {
                        a.push(l.slice(c, S)), c = S + o;
                        continue
                    }
                    if (m === "/") {
                        d = S;
                        continue
                    }
                }
                m === "[" ? u++ : m === "]" && u--
            }
            const h = a.length === 0 ? l : l.substring(c),
                v = h.startsWith(t0),
                y = v ? h.substring(1) : h,
                x = d && d > c ? d - c : void 0;
            return {
                modifiers: a,
                hasImportantModifier: v,
                baseClassName: y,
                maybePostfixModifierPosition: x
            }
        };
        return n ? l => n({
            className: l,
            parseClassName: s
        }) : s
    },
    Q4 = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    X4 = e => ({
        cache: G4(e.cacheSize),
        parseClassName: K4(e),
        ...B4(e)
    }),
    Y4 = /\s+/,
    Z4 = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: i
        } = t, o = [], s = e.trim().split(Y4);
        let l = "";
        for (let a = s.length - 1; a >= 0; a -= 1) {
            const u = s[a],
                {
                    modifiers: c,
                    hasImportantModifier: d,
                    baseClassName: h,
                    maybePostfixModifierPosition: v
                } = n(u);
            let y = !!v,
                x = r(y ? h.substring(0, v) : h);
            if (!x) {
                if (!y) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue
                }
                if (x = r(h), !x) {
                    l = u + (l.length > 0 ? " " + l : l);
                    continue
                }
                y = !1
            }
            const S = Q4(c).join(":"),
                m = d ? S + t0 : S,
                p = m + x;
            if (o.includes(p)) continue;
            o.push(p);
            const g = i(x, y);
            for (let w = 0; w < g.length; ++w) {
                const k = g[w];
                o.push(m + k)
            }
            l = u + (l.length > 0 ? " " + l : l)
        }
        return l
    };

function q4() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = n0(t)) && (r && (r += " "), r += n);
    return r
}
const n0 = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = n0(e[r])) && (n && (n += " "), n += t);
    return n
};

function J4(e, ...t) {
    let n, r, i, o = s;

    function s(a) {
        const u = t.reduce((c, d) => d(c), e());
        return n = X4(u), r = n.cache.get, i = n.cache.set, o = l, l(a)
    }

    function l(a) {
        const u = r(a);
        if (u) return u;
        const c = Z4(a, n);
        return i(a, c), c
    }
    return function() {
        return o(q4.apply(null, arguments))
    }
}
const $ = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    r0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    e3 = /^\d+\/\d+$/,
    t3 = new Set(["px", "full", "screen"]),
    n3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    r3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    i3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    o3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    s3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    dt = e => Xn(e) || t3.has(e) || e3.test(e),
    Nt = e => cr(e, "length", p3),
    Xn = e => !!e && !Number.isNaN(Number(e)),
    Qs = e => cr(e, "number", Xn),
    Sr = e => !!e && Number.isInteger(Number(e)),
    l3 = e => e.endsWith("%") && Xn(e.slice(0, -1)),
    V = e => r0.test(e),
    Mt = e => n3.test(e),
    a3 = new Set(["length", "size", "percentage"]),
    u3 = e => cr(e, a3, i0),
    c3 = e => cr(e, "position", i0),
    d3 = new Set(["image", "url"]),
    f3 = e => cr(e, d3, g3),
    h3 = e => cr(e, "", m3),
    kr = () => !0,
    cr = (e, t, n) => {
        const r = r0.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    p3 = e => r3.test(e) && !i3.test(e),
    i0 = () => !1,
    m3 = e => o3.test(e),
    g3 = e => s3.test(e),
    v3 = () => {
        const e = $("colors"),
            t = $("spacing"),
            n = $("blur"),
            r = $("brightness"),
            i = $("borderColor"),
            o = $("borderRadius"),
            s = $("borderSpacing"),
            l = $("borderWidth"),
            a = $("contrast"),
            u = $("grayscale"),
            c = $("hueRotate"),
            d = $("invert"),
            h = $("gap"),
            v = $("gradientColorStops"),
            y = $("gradientColorStopPositions"),
            x = $("inset"),
            S = $("margin"),
            m = $("opacity"),
            p = $("padding"),
            g = $("saturate"),
            w = $("scale"),
            k = $("sepia"),
            T = $("skew"),
            N = $("space"),
            P = $("translate"),
            D = () => ["auto", "contain", "none"],
            z = () => ["auto", "hidden", "clip", "visible", "scroll"],
            ee = () => ["auto", V, t],
            O = () => [V, t],
            tt = () => ["", dt, Nt],
            nt = () => ["auto", Xn, V],
            dr = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            ct = () => ["solid", "dashed", "dotted", "double", "none"],
            te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            j = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            A = () => ["", "0", V],
            R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            F = () => [Xn, V];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [kr],
                spacing: [dt, Nt],
                blur: ["none", "", Mt, V],
                brightness: F(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Mt, V],
                borderSpacing: O(),
                borderWidth: tt(),
                contrast: F(),
                grayscale: A(),
                hueRotate: F(),
                invert: A(),
                gap: O(),
                gradientColorStops: [e],
                gradientColorStopPositions: [l3, Nt],
                inset: ee(),
                margin: ee(),
                opacity: F(),
                padding: O(),
                saturate: F(),
                scale: F(),
                sepia: A(),
                skew: F(),
                space: O(),
                translate: O()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", V]
                }],
                container: ["container"],
                columns: [{
                    columns: [Mt]
                }],
                "break-after": [{
                    "break-after": R()
                }],
                "break-before": [{
                    "break-before": R()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...dr(), V]
                }],
                overflow: [{
                    overflow: z()
                }],
                "overflow-x": [{
                    "overflow-x": z()
                }],
                "overflow-y": [{
                    "overflow-y": z()
                }],
                overscroll: [{
                    overscroll: D()
                }],
                "overscroll-x": [{
                    "overscroll-x": D()
                }],
                "overscroll-y": [{
                    "overscroll-y": D()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [x]
                }],
                "inset-x": [{
                    "inset-x": [x]
                }],
                "inset-y": [{
                    "inset-y": [x]
                }],
                start: [{
                    start: [x]
                }],
                end: [{
                    end: [x]
                }],
                top: [{
                    top: [x]
                }],
                right: [{
                    right: [x]
                }],
                bottom: [{
                    bottom: [x]
                }],
                left: [{
                    left: [x]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", Sr, V]
                }],
                basis: [{
                    basis: ee()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", V]
                }],
                grow: [{
                    grow: A()
                }],
                shrink: [{
                    shrink: A()
                }],
                order: [{
                    order: ["first", "last", "none", Sr, V]
                }],
                "grid-cols": [{
                    "grid-cols": [kr]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", Sr, V]
                    }, V]
                }],
                "col-start": [{
                    "col-start": nt()
                }],
                "col-end": [{
                    "col-end": nt()
                }],
                "grid-rows": [{
                    "grid-rows": [kr]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [Sr, V]
                    }, V]
                }],
                "row-start": [{
                    "row-start": nt()
                }],
                "row-end": [{
                    "row-end": nt()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", V]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", V]
                }],
                gap: [{
                    gap: [h]
                }],
                "gap-x": [{
                    "gap-x": [h]
                }],
                "gap-y": [{
                    "gap-y": [h]
                }],
                "justify-content": [{
                    justify: ["normal", ...j()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...j(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...j(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [p]
                }],
                px: [{
                    px: [p]
                }],
                py: [{
                    py: [p]
                }],
                ps: [{
                    ps: [p]
                }],
                pe: [{
                    pe: [p]
                }],
                pt: [{
                    pt: [p]
                }],
                pr: [{
                    pr: [p]
                }],
                pb: [{
                    pb: [p]
                }],
                pl: [{
                    pl: [p]
                }],
                m: [{
                    m: [S]
                }],
                mx: [{
                    mx: [S]
                }],
                my: [{
                    my: [S]
                }],
                ms: [{
                    ms: [S]
                }],
                me: [{
                    me: [S]
                }],
                mt: [{
                    mt: [S]
                }],
                mr: [{
                    mr: [S]
                }],
                mb: [{
                    mb: [S]
                }],
                ml: [{
                    ml: [S]
                }],
                "space-x": [{
                    "space-x": [N]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [N]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, t]
                }],
                "min-w": [{
                    "min-w": [V, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [V, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Mt]
                    }, Mt]
                }],
                h: [{
                    h: [V, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [V, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [V, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Mt, Nt]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Qs]
                }],
                "font-family": [{
                    font: [kr]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", Xn, Qs]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", dt, V]
                }],
                "list-image": [{
                    "list-image": ["none", V]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", V]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [m]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [m]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...ct(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", dt, Nt]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", dt, V]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: O()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", V]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [m]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...dr(), c3]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", u3]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, f3]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [y]
                }],
                "gradient-via-pos": [{
                    via: [y]
                }],
                "gradient-to-pos": [{
                    to: [y]
                }],
                "gradient-from": [{
                    from: [v]
                }],
                "gradient-via": [{
                    via: [v]
                }],
                "gradient-to": [{
                    to: [v]
                }],
                rounded: [{
                    rounded: [o]
                }],
                "rounded-s": [{
                    "rounded-s": [o]
                }],
                "rounded-e": [{
                    "rounded-e": [o]
                }],
                "rounded-t": [{
                    "rounded-t": [o]
                }],
                "rounded-r": [{
                    "rounded-r": [o]
                }],
                "rounded-b": [{
                    "rounded-b": [o]
                }],
                "rounded-l": [{
                    "rounded-l": [o]
                }],
                "rounded-ss": [{
                    "rounded-ss": [o]
                }],
                "rounded-se": [{
                    "rounded-se": [o]
                }],
                "rounded-ee": [{
                    "rounded-ee": [o]
                }],
                "rounded-es": [{
                    "rounded-es": [o]
                }],
                "rounded-tl": [{
                    "rounded-tl": [o]
                }],
                "rounded-tr": [{
                    "rounded-tr": [o]
                }],
                "rounded-br": [{
                    "rounded-br": [o]
                }],
                "rounded-bl": [{
                    "rounded-bl": [o]
                }],
                "border-w": [{
                    border: [l]
                }],
                "border-w-x": [{
                    "border-x": [l]
                }],
                "border-w-y": [{
                    "border-y": [l]
                }],
                "border-w-s": [{
                    "border-s": [l]
                }],
                "border-w-e": [{
                    "border-e": [l]
                }],
                "border-w-t": [{
                    "border-t": [l]
                }],
                "border-w-r": [{
                    "border-r": [l]
                }],
                "border-w-b": [{
                    "border-b": [l]
                }],
                "border-w-l": [{
                    "border-l": [l]
                }],
                "border-opacity": [{
                    "border-opacity": [m]
                }],
                "border-style": [{
                    border: [...ct(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [l]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [l]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [m]
                }],
                "divide-style": [{
                    divide: ct()
                }],
                "border-color": [{
                    border: [i]
                }],
                "border-color-x": [{
                    "border-x": [i]
                }],
                "border-color-y": [{
                    "border-y": [i]
                }],
                "border-color-s": [{
                    "border-s": [i]
                }],
                "border-color-e": [{
                    "border-e": [i]
                }],
                "border-color-t": [{
                    "border-t": [i]
                }],
                "border-color-r": [{
                    "border-r": [i]
                }],
                "border-color-b": [{
                    "border-b": [i]
                }],
                "border-color-l": [{
                    "border-l": [i]
                }],
                "divide-color": [{
                    divide: [i]
                }],
                "outline-style": [{
                    outline: ["", ...ct()]
                }],
                "outline-offset": [{
                    "outline-offset": [dt, V]
                }],
                "outline-w": [{
                    outline: [dt, Nt]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: tt()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [m]
                }],
                "ring-offset-w": [{
                    "ring-offset": [dt, Nt]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Mt, h3]
                }],
                "shadow-color": [{
                    shadow: [kr]
                }],
                opacity: [{
                    opacity: [m]
                }],
                "mix-blend": [{
                    "mix-blend": [...te(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": te()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [a]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", Mt, V]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [c]
                }],
                invert: [{
                    invert: [d]
                }],
                saturate: [{
                    saturate: [g]
                }],
                sepia: [{
                    sepia: [k]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [a]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [c]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [d]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [m]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [g]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [k]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
                }],
                duration: [{
                    duration: F()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", V]
                }],
                delay: [{
                    delay: F()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", V]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [w]
                }],
                "scale-x": [{
                    "scale-x": [w]
                }],
                "scale-y": [{
                    "scale-y": [w]
                }],
                rotate: [{
                    rotate: [Sr, V]
                }],
                "translate-x": [{
                    "translate-x": [P]
                }],
                "translate-y": [{
                    "translate-y": [P]
                }],
                "skew-x": [{
                    "skew-x": [T]
                }],
                "skew-y": [{
                    "skew-y": [T]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": O()
                }],
                "scroll-mx": [{
                    "scroll-mx": O()
                }],
                "scroll-my": [{
                    "scroll-my": O()
                }],
                "scroll-ms": [{
                    "scroll-ms": O()
                }],
                "scroll-me": [{
                    "scroll-me": O()
                }],
                "scroll-mt": [{
                    "scroll-mt": O()
                }],
                "scroll-mr": [{
                    "scroll-mr": O()
                }],
                "scroll-mb": [{
                    "scroll-mb": O()
                }],
                "scroll-ml": [{
                    "scroll-ml": O()
                }],
                "scroll-p": [{
                    "scroll-p": O()
                }],
                "scroll-px": [{
                    "scroll-px": O()
                }],
                "scroll-py": [{
                    "scroll-py": O()
                }],
                "scroll-ps": [{
                    "scroll-ps": O()
                }],
                "scroll-pe": [{
                    "scroll-pe": O()
                }],
                "scroll-pt": [{
                    "scroll-pt": O()
                }],
                "scroll-pr": [{
                    "scroll-pr": O()
                }],
                "scroll-pb": [{
                    "scroll-pb": O()
                }],
                "scroll-pl": [{
                    "scroll-pl": O()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", V]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [dt, Nt, Qs]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    o0 = J4(v3),
    Xs = {
        top: {
            open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["20%", "50%", "50%"]
            },
            closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "20%"]
            }
        },
        middle: {
            open: {
                rotate: ["0deg", "0deg", "-45deg"]
            },
            closed: {
                rotate: ["-45deg", "0deg", "0deg"]
            }
        },
        bottom: {
            open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["80%", "50%", "50%"],
                display: ["block", "none", "none"]
            },
            closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "80%"],
                left: "50%",
                display: ["none", "none", "block"]
            }
        }
    };

function y3({
    isMenuOpen: e,
    setIsMenuOpen: t
}) {
    return f.jsx(o4, {
        transition: {
            duration: .5,
            ease: "easeInOut"
        },
        children: f.jsxs(Y.button, {
            initial: !1,
            animate: e ? "open" : "closed",
            onClick: () => t(n => !n),
            className: "relative size-20",
            children: [f.jsx(Y.span, {
                variants: Xs.top,
                className: "absolute h-2 w-[90%] bg-zinc-100",
                style: {
                    left: "50%",
                    top: "20%",
                    x: "-50%",
                    y: "-50%"
                }
            }), f.jsx(Y.span, {
                variants: Xs.middle,
                className: "absolute h-2 w-[90%] bg-zinc-100",
                style: {
                    left: "50%",
                    top: "50%",
                    x: "-50%",
                    y: "-50%"
                }
            }), f.jsx(Y.span, {
                variants: Xs.bottom,
                className: "absolute h-2 w-[45%] bg-zinc-100",
                style: {
                    left: "50%",
                    top: "80%",
                    x: "0%",
                    y: "-50%"
                }
            })]
        })
    })
}

function x3(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            fillRule: "evenodd"
        },
        child: [{
            tag: "g",
            attr: {
                fillOpacity: ".88",
                transform: "translate(64 362)"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M37.283 300c-10.652 0-19.53-3.297-26.63-9.89C3.55 283.514 0 275.41 0 265.793c0-9.891 3.653-17.996 10.96-24.315 7.306-6.32 16.422-9.479 27.347-9.479 11.062 0 20.11 3.194 27.143 9.582C72.483 247.97 76 256.04 76 265.794c0 10.028-3.585 18.236-10.755 24.624-7.17 6.388-16.49 9.582-27.962 9.582M394 295h-66.969L205.624 109.648c-7.121-10.835-12.052-18.995-14.79-24.48h-.822c1.095 10.422 1.643 26.331 1.643 47.726V295H129V0h71.488l116.888 179.592c5.341 8.092 10.271 16.115 14.79 24.07h.822c-1.095-6.858-1.643-20.367-1.643-40.527V0H394z"
                },
                child: []
            }, {
                tag: "path",
                attr: {
                    d: "M638 295 461 295 461 0 631.20814 0 631.20814 54.1039052 527.477907 54.1039052 527.477907 119.728033 624.004651 119.728033 624.004651 173.62622 527.477907 173.62622 527.477907 241.101813 638 241.101813z"
                },
                child: []
            }, {
                tag: "path",
                attr: {
                    d: "M896 54.1039052 812.047368 54.1039052 812.047368 295 745.542105 295 745.542105 54.1039052 662 54.1039052 662 0 896 0z"
                },
                child: []
            }]
        }]
    })(e)
}

function w3(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
            },
            child: []
        }]
    })(e)
}

function S3(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M17 8v8h4"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M13 15l1 1"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M3 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1"
            },
            child: []
        }]
    })(e)
}

function k3(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M10 9a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M4 8v-2a2 2 0 0 1 2 -2h2"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M4 16v2a2 2 0 0 0 2 2h2"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 4h2a2 2 0 0 1 2 2v2"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 20h2a2 2 0 0 0 2 -2v-2"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2"
            },
            child: []
        }]
    })(e)
}
const b = {
    name: "Parth Parakhiya",
    alias: "Parth",
    title: "Computer Science Engineer",
    image: "./assets/personal.jpeg",
    skills: [{
        name: ".Net",
        children: f.jsx(x3, {
            className: "size-10"
        }),
        className: "bg-violet-500"
    }, {
        name: "React",
        children: f.jsx(w3, {
            className: "size-10"
        }),
        className: "bg-sky-500"
    }, {
        name: "Docker",
        children: f.jsx(N4, {
            className: "size-10"
        }),
        className: "bg-blue-700"
    }, {
        name: "NodeJS",
        children: f.jsx(M4, {
            className: "size-10"
        }),
        className: "bg-green-500"
    }, {
        name: "Azure",
        children: f.jsx(b4, {
            className: "size-10"
        }),
        className: "bg-blue-500"
    }, {
        name: "Sql",
        children: f.jsx(S3, {
            className: "size-10"
        }),
        className: "bg-yellow-500 text-zinc-900"
    }],
    about_me: {
        image: "./assets/personal1.jpeg",
        about: "Originally from Mumbai, India, I'm a passionate technologist with a love for building meaningful software and exploring new tools and frameworks. Whether I’m architecting full-stack applications or experimenting with AI, I thrive on learning and creating. Outside of code, you’ll find me unwinding with video games or diving into online courses to fuel my curiosity.",
        whatMakesMeTick: "I’ve always believed in the power of code to solve real-world problems and spark change. My journey into tech began when I helped automate a tedious college workflow using a simple Python script — seeing how a few lines of logic could save hours of effort sparked a lifelong fascination with building purposeful software. Since then, I’ve been passionate about creating tools that make life easier, smarter, and more connected.",
        music: "I’m always discovering new sounds — from indie gems to chart-toppers. Lately, I’ve been looping tracks by Arijit Singh and occasionally vibing to Ariana Grande when I need that creative energy boost.",
        book: 'My reading list is as diverse as my codebase — a mix of mythology, sci-fi, and philosophy. One book that truly captivated me is The Hidden Hindu by Akshat Gupta — a thrilling blend of ancient lore and modern mystery that reshaped how I think about time, belief, and storytelling.',
        game: {
            text: "I love getting lost in immersive game worlds and sharing a bit of healthy competition with friends. It keeps my mind sharp and my reflexes sharper. Current favorite:",
            favorite: "Ghost of Tsushima (though I’ll always have a soft spot for Clash of Clans)"
        },
        travel: "Discovering new cultures and landscapes always inspires me — from architecture to food to tech communities. Next on my bucket list: London, for its blend of innovation, history, and global tech scene.",
        countriesLivedIn: 2,
        languagesSpoken: 4,
        linesOfCodeWritten: "10000+",
        fact: "Growing up in Mumbai, I once participated in a coding bootcamp hosted in a local railway station co-working hub — proof that inspiration can strike anywhere, even between two train announcements!."
    },
    contact: {
        email: "parth.praful.parakhiya@gmail.com",
        phone: "+1 (437) 557 0516",
        whatsapp: "https://wa.me/14375570516",
        linkedin: "https://www.linkedin.com/in/parth-parakhiya/",
        github: "https://www.github.com/Parth-Parakhiya",
        location: "Ontario, Canada"
    },
    experience: {
        work: [{
            title: "Operational Head / Web Solutions Lead",
            company: "SnapGrab Inc.",
            location: "Mumbai, India",
            dateRange: "May 2023 – May 2024",
            description: "Led backend development of an event and logistics system, refactored legacy software using .NET and C#, implemented microservices architecture, and coordinated Agile sprints with a 12-member team. Oversaw CI/CD pipelines and Docker-based deployments via Azure DevOps.",
            skills: ["C#", ".NET", "SQL", "Docker", "Azure DevOps", "Scrum"]
          }, {
            title: "Research Lead / Developer",
            company: "Universal College of Engineering",
            location: "Mumbai, India",
            dateRange: "Aug 2022 – Apr 2023",
            description: "Led the research and development of an Android-based fitness application integrating biometric sensors and music playback logic. Published findings in IJRASET Journal and managed a 4-member team to enhance user engagement through real-time feedback loops.",
            skills: ["Android", "Java", "Biometric Sensors", "Agile", "Research Publication", "UI/UX"]
          }, {
            title: "Associate Web Developer Intern",
            company: "NeoDocto Inc.",
            location: "Remote (Headquartered in NYC, USA)",
            dateRange: "Sep 2021 – Mar 2022",
            description: "Collaborated on frontend enhancements and backend integrations for a global healthcare platform. Focused on responsive UI/UX improvements, automated data scraping scripts, and performance optimizations using C#, HTML, CSS, and Python.",
            skills: ["C#", "HTML", "CSS", "JavaScript", "Python", "Web Scraping"]
          }],
          freelance: [{
            project: "LocalCart Inventory Dashboard",
            client: "Small Retail Business (Mumbai, India)",
            description: "Built a custom inventory and billing dashboard for a local grocery store chain to manage stock, automate low-stock alerts, and generate monthly sales reports.",
            duration: "1.5 months",
            skills: ["React", "Node.js", "MongoDB", "Express.js"]
          }]          
    },
    studies: [{
        degree: "Master of Applied Computing",
        institution: "University of Windsor",
        location: "Windsor, Ontario, Canada",
        dateRange: "May 2024 – Present",
        description: "Currently pursuing graduate studies with a focus on advanced software engineering, distributed systems, and database technologies. Actively applying skills in real-world industry-partnered projects.",
        achievements: ["Capstone project developed for TD Bank: CrediWise – AI-based loan eligibility system"],
        courses: ["Advanced Software Engineering", "Distributed Systems", "Advanced Database Topics"]
      } ,{
        degree: "Bachelor of Engineering in Computer Science",
        institution: "University of Mumbai",
        location: "Thane, India",
        dateRange: "2019 – 2023",
        description: "Completed an intensive undergraduate program with a focus on software development, system design, and AI/ML applications. Involved in multiple team projects, including published research.",
        achievements: ["Published research paper on Fitness & Health App in IJRASET Journal", "Runner-up in Blind Coding Competition at Universal College of Engineering"],
        courses: ["Data Structures", "Object-Oriented Programming", "Artificial Intelligence", "Machine Learning", "Database Management Systems", "Operating Systems", "Software Engineering", "Computer Networks"]
      }],
    projects: [
        {
            title: "CrediWise – AI-Based Loan Eligibility System",
            description: "AI-powered web platform developed for TD Bank to automate loan and credit approval using ML models and financial metrics.",
            technologies: ["Spring Boot", "Angular", "Python", "Machine Learning", "REST API"],
            liveLink: null,
            githubLink: "https://github.com/Parth-Parakhiya/CrediWise",
            image: "./assets/crediwise.png"
          }
          ,
          {
            title: "DataCascade – Distributed File Storage System",
            description: "Built a fault-tolerant distributed storage system with file chunking, replication, and health monitoring using Django and MinIO.",
            technologies: ["Django", "MinIO", "Docker", "Prometheus"],
            liveLink: null,
            githubLink: "https://github.com/Parth-Parakhiya/DataCascade",
            image: "./assets/datacascade.png"
          },
          {
            title: "DataCrafters – Automotive Intrusion Detection System",
            description: "Real-time anomaly detection for CAN bus traffic using TensorFlow, Streamlit dashboards, and automated alerting.",
            technologies: ["Python", "TensorFlow", "Streamlit", "ETL", "Vehicle CAN Bus"],
            liveLink: null,
            githubLink: "https://github.com/Parth-Parakhiya/DataCrafters",
            image: "./assets/datacrafters.png"
          },          
          {
            title: "WeTeachIT – Java Learning Portal",
            description: "Interactive e-learning platform for students to learn Java with quizzes, code editor, and progress tracking.",
            technologies: ["C#", "HTML", "CSS", "JavaScript", "MySQL"],
            liveLink: "https://weteachit.github.io/",
            githubLink: "https://github.com/Parth-Parakhiya/WeTeachIT",
            image: "./assets/weteachit.png"
          },
          {
            title: "Fitness & Health App",
            description: "Android application that combines heart rate monitoring with music recommendations for guided fitness routines.",
            technologies: ["Android", "Java", "SQLite"],
            liveLink: null,
            githubLink: "https://github.com/Parth-Parakhiya",
            image: "./assets/fitnessapp.png"
          },
          {
            title: "Developer Portfolio",
            description: "My personal developer portfolio showcasing my projects, skills, and experience.",
            technologies: ["HTML", "Tailwind CSS", "JavaScript"],
            liveLink: "https://parth-parakhiya.github.io/parth-parakhiya-portfolio/",
            githubLink: "https://github.com/Parth-Parakhiya/parth-parakhiya-portfolio",
            image: "./assets/portfolio.png"
          }          
      ],
    certifications: [
        {
          title: "GitHub Foundations: Privacy, Security, Administration",
          date: "2024",
          description: "Completed LinkedIn Learning course covering GitHub privacy, access control, and admin fundamentals."
        },
        {
          title: "Building Real-Time Web Apps with Spring Boot and WebSockets",
          date: "2024",
          description: "Hands-on training on building real-time applications using Spring Boot and WebSockets via LinkedIn Learning."
        },
        {
          title: "Learning Hadoop",
          date: "2024",
          description: "Coursework covering Hadoop architecture, HDFS, and big data processing fundamentals."
        },
        {
          title: "Advanced Agile Mindset",
          date: "2024",
          description: "Certification focused on Agile principles and applying Agile mindset in dynamic development environments."
        },
        {
          title: "JAVA, C, and C++ Programming",
          date: "2023",
          description: "Certification from Raj Academy covering foundational and intermediate programming in Java, C, and C++."
        }
      ]      
};

function C3(e) {
    return J({
        tag: "svg",
        attr: {
            fill: "currentColor",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
            },
            child: []
        }]
    })(e)
}
const Cr = ({
    icon: e,
    label: t,
    value: n,
    link: r
}) => f.jsxs("div", {
    className: "flex items-center space-x-3",
    children: [f.jsx(e, {
        className: "w-5 h-5 text-zinc-400"
    }), f.jsxs("span", {
        className: "text-zinc-300",
        children: [t, ":"]
    }), r ? f.jsx("a", {
        href: r,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-indigo-400 hover:text-indigo-300",
        children: n
    }) : f.jsx("span", {
        className: "text-zinc-100",
        children: n
    })]
});

function s0() {
    return f.jsxs("div", {
        className: "space-y-8",
        children: [f.jsxs("div", {
            className: "flex items-center gap-3",
            children: [f.jsx(tf, {
                className: "w-6 h-6 text-zinc-400"
            }), f.jsx("h2", {
                className: "text-3xl font-bold text-zinc-50",
                children: "Contact Me"
            })]
        }), f.jsxs("div", {
            className: "bg-zinc-800/50 p-6 rounded-lg space-y-6",
            children: [f.jsx("p", {
                className: "text-zinc-300",
                children: "I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following channels:"
            }), f.jsxs("div", {
                className: "space-y-4",
                children: [f.jsx(Cr, {
                    icon: tf,
                    label: "Email",
                    value: b.contact.email,
                    link: `mailto:${b.contact.email}`
                }), f.jsx(Cr, {
                    icon: y4,
                    label: "LinkedIn",
                    value: b.contact.linkedin.split("www.")[1],
                    link: b.contact.linkedin
                }), f.jsx(Cr, {
                    icon: Zm,
                    label: "GitHub",
                    value: b.contact.github.split("www.")[1],
                    link: b.contact.github
                }), f.jsx(Cr, {
                    icon: C3,
                    label: "Phone / Whatsapp",
                    value: b.contact.phone,
                    link: b.contact.whatsapp
                }), f.jsx(Cr, {
                    icon: ls,
                    label: "Location",
                    value: b.contact.location
                })]
            }), f.jsx("p", {
                className: "text-zinc-300 mt-6",
                children: "I typically respond within 24-48 hours. Looking forward to connecting with you!"
            })]
        })]
    })
}

function Ke({
    className: e,
    ...t
}) {
    return f.jsx(Y.div, {
        variants: P3,
        transition: {
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50
        },
        className: o0("bg-zinc-800 border border-zinc-700 rounded-lg p-6 col-span-1", e),
        ...t
    })
}
const P3 = {
    initial: {
        scale: .5,
        y: 50,
        opacity: 0
    },
    animate: {
        scale: 1,
        y: 0,
        opacity: 1
    }
};

function T3(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 512 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"
            },
            child: []
        }]
    })(e)
}

function E3() {
    return f.jsxs("div", {
        className: "space-y-10",
        children: [f.jsxs("section", {
            className: "space-y-5",
            children: [f.jsx("h2", {
                className: "text-4xl font-bold text-zinc-50",
                children: "About Me"
            }), f.jsxs("div", {
                className: "flex items-start gap-6 md:p-8 flex-col md:flex-row",
                children: [f.jsx("img", {
                    src: b.about_me.image,
                    alt: "A photo of me",
                    className: "rounded-lg h-32 object-cover aspect-square"
                }), f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsxs("p", {
                        className: "text-xl text-zinc-300",
                        children: ["Hey there! I'm ", b.name, " 👋"]
                    }), f.jsx("p", {
                        className: "text-lg text-zinc-300",
                        children: b.about_me.about
                    })]
                })]
            })]
        }), f.jsxs("section", {
            className: "space-y-5",
            children: [f.jsxs("h3", {
                className: "text-2xl font-semibold text-zinc-100 flex items-center gap-2",
                children: [f.jsx(v4, {
                    className: "w-6 h-6 text-red-400"
                }), "What Makes Me Tick"]
            }), f.jsx("p", {
                className: "text-zinc-300",
                children: b.about_me.whatMakesMeTick
            })]
        }), f.jsxs("section", {
            className: "space-y-5",
            children: [f.jsx("h3", {
                className: "text-2xl font-semibold text-zinc-100",
                children: "Beyond the Keyboard"
            }), f.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [f.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [f.jsx(x4, {
                        className: "w-6 h-6 text-zinc-400 shrink-0"
                    }), f.jsxs("div", {
                        children: [f.jsx("h4", {
                            className: "text-lg font-medium text-zinc-200",
                            children: "Music Lover"
                        }), f.jsx("p", {
                            className: "text-zinc-400",
                            children: b.about_me.music
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [f.jsx(u4, {
                        className: "w-6 h-6 text-zinc-400 shrink-0"
                    }), f.jsxs("div", {
                        children: [f.jsx("h4", {
                            className: "text-lg font-medium text-zinc-200",
                            children: "Avid Reader"
                        }), f.jsx("p", {
                            className: "text-zinc-400",
                            children: b.about_me.book
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [f.jsx(p4, {
                        className: "w-6 h-6 text-zinc-400 shrink-0"
                    }), f.jsxs("div", {
                        children: [f.jsx("h4", {
                            className: "text-lg font-medium text-zinc-200",
                            children: "Gaming Enthusiast"
                        }), f.jsxs("p", {
                            className: "text-zinc-400",
                            children: [b.about_me.game.text, " ", f.jsx("code", {
                                children: b.about_me.game.favorite
                            }), "."]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [f.jsx(m4, {
                        className: "w-6 h-6 text-zinc-400 shrink-0"
                    }), f.jsxs("div", {
                        children: [f.jsx("h4", {
                            className: "text-lg font-medium text-zinc-200",
                            children: "Travel Bug"
                        }), f.jsx("p", {
                            className: "text-zinc-400",
                            children: b.about_me.travel
                        })]
                    })]
                })]
            })]
        }), f.jsxs("section", {
            className: "space-y-5",
            children: [f.jsxs("h3", {
                className: "text-2xl font-semibold text-zinc-100 flex items-center gap-2",
                children: [f.jsx(d4, {
                    className: "w-6 h-6 text-zinc-400"
                }), "Snapshot"]
            }), f.jsxs("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: [f.jsxs("div", {
                    className: "text-center",
                    children: [f.jsx("div", {
                        className: "text-3xl font-bold text-zinc-100",
                        children: b.about_me.countriesLivedIn
                    }), f.jsx("div", {
                        className: "text-sm text-zinc-400",
                        children: "Countries Lived In"
                    })]
                }), f.jsxs("div", {
                    className: "text-center",
                    children: [f.jsx("div", {
                        className: "text-3xl font-bold text-zinc-100",
                        children: b.about_me.languagesSpoken
                    }), f.jsx("div", {
                        className: "text-sm text-zinc-400",
                        children: "Languages Spoken"
                    })]
                }), f.jsxs("div", {
                    className: "text-center",
                    children: [f.jsx("div", {
                        className: "text-3xl font-bold text-zinc-100",
                        children: "∞"
                    }), f.jsx("div", {
                        className: "text-sm text-zinc-400",
                        children: "Clash Of Clans Wisdom"
                    })]
                }), f.jsxs("div", {
                    className: "text-center",
                    children: [f.jsx("div", {
                        className: "text-3xl font-bold text-zinc-100",
                        children: b.about_me.linesOfCodeWritten
                    }), f.jsx("div", {
                        className: "text-sm text-zinc-400",
                        children: "Lines of code written"
                    })]
                })]
            })]
        }), f.jsxs("section", {
            className: "space-y-5",
            children: [f.jsx("h3", {
                className: "text-2xl font-semibold text-zinc-100",
                children: "Fun Fact"
            }), f.jsx("p", {
                className: "text-zinc-300 text-lg",
                children: b.about_me.fact
            })]
        })]
    })
}
const j3 = ({
        title: e,
        company: t,
        location: n,
        dateRange: r,
        description: i,
        skills: o
    }) => f.jsxs("div", {
        className: "bg-zinc-800/50 rounded-lg p-6 mb-6",
        children: [f.jsxs("div", {
            className: "flex justify-between items-start mb-2",
            children: [f.jsxs("div", {
                children: [f.jsx("h3", {
                    className: "text-xl font-semibold text-zinc-100",
                    children: e
                }), f.jsx("p", {
                    className: "text-zinc-300",
                    children: t
                })]
            }), f.jsx("span", {
                className: "bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-sm",
                children: r
            })]
        }), f.jsxs("div", {
            className: "flex items-center text-zinc-400 text-sm mb-4",
            children: [f.jsx(ls, {
                className: "w-4 h-4 mr-1"
            }), n]
        }), f.jsx("p", {
            className: "text-zinc-300 mb-4",
            children: i
        }), f.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: o.map((s, l) => f.jsx("span", {
                className: "text-zinc-300 border border-zinc-600 rounded px-2 py-1 text-sm",
                children: s
            }, l))
        })]
    }),
    N3 = ({
        project: e,
        client: t,
        duration: n,
        description: r,
        skills: i
    }) => f.jsxs("div", {
        className: "bg-zinc-800/50 rounded-lg p-6 mb-6",
        children: [f.jsxs("div", {
            className: "flex justify-between items-start mb-2",
            children: [f.jsxs("div", {
                children: [f.jsx("h3", {
                    className: "text-xl font-semibold text-zinc-100",
                    children: e
                }), t && f.jsx("p", {
                    className: "text-zinc-300",
                    children: t
                })]
            }), f.jsx("span", {
                className: "bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-sm",
                children: n
            })]
        }), f.jsx("p", {
            className: "text-zinc-300 mb-4",
            children: r
        }), f.jsx("div", {
            className: "flex flex-wrap gap-2",
            children: i.map((o, s) => f.jsx("span", {
                className: "text-zinc-300 border border-zinc-600 rounded px-2 py-1 text-sm",
                children: o
            }, s))
        })]
    });

function M3() {
    return f.jsxs("div", {
        className: "space-y-6",
        children: [f.jsxs("div", {
            className: "flex items-center gap-3",
            children: [f.jsx(c4, {
                className: "w-6 h-6 text-zinc-400"
            }), f.jsx("h2", {
                className: "text-3xl font-bold text-zinc-50",
                children: "Professional Experience"
            })]
        }), f.jsx("div", {
            className: "space-y-8",
            children: b.experience.work.map((e, t) => f.jsx(j3, {
                ...e
            }, t))
        }), f.jsxs("div", {
            className: "flex items-center gap-3",
            children: [f.jsx(O4, {
                className: "w-6 h-6 text-zinc-400"
            }), f.jsx("h2", {
                className: "text-3xl font-bold text-zinc-50",
                children: "freelance"
            })]
        }), f.jsx("div", {
            className: "space-y-8",
            children: b.experience.freelance.map((e, t) => f.jsx(N3, {
                ...e
            }, t))
        }), f.jsx("div", {
            className: "bg-zinc-800/50 p-4 rounded-lg",
            children: f.jsx("p", {
                className: "text-zinc-300 text-center",
                children: "With experience ranging from leading development teams in startup environments to collaborating on academic-industry projects and remote freelance solutions, I bring a well-rounded, hands-on approach to software development — combining technical depth with adaptability and a strong execution mindset."
            })
        })]
    })
}

function z3(e) {
    return J({
        tag: "svg",
        attr: {
            version: "1.1",
            viewBox: "0 0 16 16"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M3 1v12h12v-12h-12zM14 12h-10v-10h10v10zM2 14v-10.5l-1-1v12.5h12.5l-1-1h-10.5z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M5.5 4l2.5 2.5-3 3 1.5 1.5 3-3 2.5 2.5v-6.5z"
            },
            child: []
        }]
    })(e)
}
const A3 = ({
        degree: e,
        institution: t,
        location: n,
        dateRange: r,
        description: i,
        achievements: o,
        courses: s
    }) => f.jsxs("div", {
        className: "bg-zinc-800/50 rounded-lg p-6 mb-6",
        children: [f.jsxs("div", {
            className: "flex justify-between items-start mb-2",
            children: [f.jsxs("div", {
                children: [f.jsx("h3", {
                    className: "text-xl font-semibold text-zinc-100",
                    children: e
                }), f.jsx("p", {
                    className: "text-zinc-300",
                    children: t
                })]
            }), f.jsx("span", {
                className: "bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-sm",
                children: r
            })]
        }), f.jsxs("div", {
            className: "flex items-center text-zinc-400 text-sm mb-4",
            children: [f.jsx(ls, {
                className: "w-4 h-4 mr-1"
            }), n]
        }), f.jsx("p", {
            className: "text-zinc-300 mb-4",
            children: i
        }), o && o.length > 0 && f.jsxs("div", {
            className: "mb-4",
            children: [f.jsx("h4", {
                className: "text-zinc-200 font-semibold mb-2",
                children: "Key Achievements:"
            }), f.jsx("ul", {
                className: "list-disc list-inside text-zinc-300",
                children: o.map((l, a) => f.jsx("li", {
                    children: l
                }, a))
            })]
        }), s && s.length > 0 && f.jsxs("div", {
            children: [f.jsx("h4", {
                className: "text-zinc-200 font-semibold mb-2",
                children: "Relevant Coursework:"
            }), f.jsx("div", {
                className: "flex flex-wrap gap-2",
                children: s.map((l, a) => f.jsx("span", {
                    className: "text-zinc-300 border border-zinc-600 rounded px-2 py-1 text-sm",
                    children: l
                }, a))
            })]
        })]
    }),
    L3 = ({
        title: e,
        date: t,
        description: n,
        credentialId: r,
        url: i
    }) => f.jsxs("div", {
        className: "bg-zinc-800/50 rounded-lg p-6 mb-6",
        children: [f.jsxs("div", {
            className: "flex justify-between items-start mb-2",
            children: [f.jsxs("div", {
                children: [f.jsx("h3", {
                    className: "text-xl font-semibold text-zinc-100",
                    children: e
                }), r && f.jsx("p", {
                    className: "text-zinc-300",
                    children: r
                })]
            }), f.jsx("span", {
                className: "bg-zinc-700 text-zinc-300 px-2 py-1 rounded text-sm",
                children: t
            })]
        }), f.jsx("p", {
            className: "text-zinc-300 mb-4",
            children: n
        }), i && f.jsxs("a", {
            href: i,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-zinc-300 hover:text-zinc-100 flex gap-2",
            children: ["View Credential", f.jsx(z3, {})]
        })]
    });

function R3() {
    return f.jsxs("div", {
        className: "space-y-6",
        children: [f.jsxs("div", {
            className: "flex items-center gap-3",
            children: [f.jsx(g4, {
                className: "w-6 h-6 text-zinc-400"
            }), f.jsx("h2", {
                className: "text-3xl font-bold text-zinc-50",
                children: "Education"
            })]
        }), f.jsx("div", {
            className: "space-y-8",
            children: b.studies.map((e, t) => f.jsx(A3, {
                ...e
            }, t))
        }), f.jsxs("div", {
            className: "flex items-center gap-3",
            children: [f.jsx(z4, {
                className: "w-6 h-6 text-zinc-400"
            }), f.jsx("h2", {
                className: "text-3xl font-bold text-zinc-50",
                children: "Certifications"
            })]
        }), f.jsx("div", {
            className: "space-y-8",
            children: b.certifications.map((e, t) => f.jsx(L3, {
                ...e
            }, t))
        }), f.jsx("div", {
            className: "bg-zinc-800/50 p-4 rounded-lg",
            children: f.jsx("p", {
                className: "text-zinc-300 text-center",
                children: "My academic journey in Computer Engineering and Applied Computing has equipped me with a solid foundation in core computer science concepts and hands-on software development. Through a blend of theoretical learning and real-world projects, I’ve gained the skills and mindset needed to navigate and contribute meaningfully to the fast-paced, ever-evolving tech landscape."
            })
        })]
    })
}

function V3(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 256 256",
            fill: "currentColor"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M226.53,56.41l-96-32a8,8,0,0,0-5.06,0l-96,32A8,8,0,0,0,24,64v80a8,8,0,0,0,16,0V75.1L73.59,86.29a64,64,0,0,0,20.65,88.05c-18,7.06-33.56,19.83-44.94,37.29a8,8,0,1,0,13.4,8.74C77.77,197.25,101.57,184,128,184s50.23,13.25,65.3,36.37a8,8,0,0,0,13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64,64,0,0,0,20.65-88l44.12-14.7a8,8,0,0,0,0-15.18ZM176,120A48,48,0,1,1,89.35,91.55l36.12,12a8,8,0,0,0,5.06,0l36.12-12A47.89,47.89,0,0,1,176,120Z"
            },
            child: []
        }]
    })(e)
}
const D3 = ({
    title: e,
    description: t,
    technologies: n,
    liveLink: r,
    githubLink: i,
    image: o
}) => f.jsxs("div", {
    className: "bg-zinc-800/50 rounded-lg overflow-hidden",
    children: [f.jsx("img", {
        src: o,
        alt: e,
        className: "w-full h-48 object-cover"
    }), f.jsxs("div", {
        className: "p-6",
        children: [f.jsx("h3", {
            className: "text-xl font-semibold text-zinc-100 mb-2",
            children: e
        }), f.jsx("p", {
            className: "text-zinc-300 mb-4",
            children: t
        }), f.jsx("div", {
            className: "flex flex-wrap gap-2 mb-4",
            children: n.map((s, l) => f.jsx("span", {
                className: "text-zinc-300 bg-zinc-700/50 rounded px-2 py-1 text-sm",
                children: s
            }, l))
        }), f.jsxs("div", {
            className: "flex gap-4",
            children: [r && f.jsxs("a", {
                href: r,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center text-zinc-300 hover:text-zinc-100",
                children: [f.jsx(h4, {
                    className: "w-4 h-4 mr-1"
                }), "Live Demo"]
            }), i && f.jsxs("a", {
                href: i,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center text-zinc-300 hover:text-zinc-100",
                children: [f.jsx(Zm, {
                    className: "w-4 h-4 mr-1"
                }), "GitHub"]
            })]
        })]
    })]
});

function _3() {
    return f.jsxs("div", {
        className: "space-y-6",
        children: [f.jsxs("div", {
            className: "flex items-center gap-3",
            children: [f.jsx(f4, {
                className: "w-6 h-6 text-zinc-400"
            }), f.jsx("h2", {
                className: "text-3xl font-bold text-zinc-50",
                children: "Projects"
            })]
        }), f.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
            children: b.projects.map((e, t) => f.jsx(D3, {
                ...e
            }, t))
        }), f.jsx("div", {
            className: "bg-zinc-800/50 p-4 rounded-lg",
            children: f.jsx("p", {
                className: "text-zinc-300 text-center",
                children: "These projects highlight my ability to design and deliver scalable, user-focused applications using modern frameworks and industry-standard development practices. From AI-integrated finance tools to distributed storage systems and learning platforms, each project reflects my commitment to writing clean, maintainable code and solving real-world problems through software."
            })
        })]
    })
}

function b3(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "currentColor"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M4 2C3.44772 2 3 2.44772 3 3V5H5V7H2V9H5V11H2V13H5V15H2V17H5V19H3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2H4ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16H9ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z"
            },
            child: []
        }]
    })(e)
}

function O3(e) {
    return J({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "m12 16 4-5h-3V4h-2v7H8z"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"
            },
            child: []
        }]
    })(e)
}

function I3() {
    return f.jsxs(Y.div, {
        className: "relative inline-block",
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: .95
        },
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-r from-cyan-400 via-zinc-400 to-teal-400 rounded-lg"
        }), f.jsxs(Y.a, {
            href: "./assets/ParthParakhiya_Resume.pdf",
            download: !0,
            className: "relative flex items-center gap-2 bg-zinc-800 font-semibold py-2 px-4 rounded-md transition-colors duration-200 m-1",
            whileHover: {
                boxShadow: "0px 0px 12px rgb(255,255,255)"
            },
            children: [f.jsx(Y.span, {
                animate: {
                    y: [0, -2, 1, 0]
                },
                transition: {
                    repeat: 1 / 0,
                    duration: 6
                },
                children: f.jsx(O3, {
                    className: "size-5"
                })
            }), f.jsx(Y.span, {
                animate: {
                    y: [0, 2, -1, 0]
                },
                transition: {
                    repeat: 1 / 0,
                    duration: 5
                },
                children: "Resume"
            })]
        })]
    })
}

function l0({
    setTab: e,
    hideOnSmall: t
}) {
    const n = E.useRef(null),
        [r, i] = E.useState({
            top: 0,
            opacity: 0
        });
    E.useEffect(() => {
        if (n.current) {
            const s = n.current.offsetTop;
            i({
                top: s,
                opacity: 1
            })
        }
    }, []);
    const o = "relative col-span-3 row-span-5 flex flex-col items-center justify-around p-4 h-full" + (t ? "hidden" : "");
    return f.jsxs(Ke, {
        onMouseLeave: () => {
            if (!n.current) return;
            const {
                offsetTop: s
            } = n.current;
            i({
                top: s,
                opacity: 1
            })
        },
        className: o,
        children: [f.jsxs(Tn, {
            setPosition: i,
            ref: n,
            onClick: () => e(null),
            children: [f.jsx(T3, {
                className: "size-6"
            }), "HOME"]
        }), f.jsxs(Tn, {
            setPosition: i,
            onClick: () => e(f.jsx(E3, {})),
            children: ["ABOUT", f.jsx(k3, {
                className: "size-6"
            })]
        }), f.jsxs(Tn, {
            setPosition: i,
            onClick: () => e(f.jsx(M3, {})),
            children: [f.jsx(D4, {
                className: "size-6"
            }), "EXPERIENCE"]
        }), f.jsxs(Tn, {
            setPosition: i,
            onClick: () => e(f.jsx(R3, {})),
            children: ["EDUCATION", f.jsx(V3, {
                className: "size-6"
            })]
        }), f.jsxs(Tn, {
            setPosition: i,
            onClick: () => e(f.jsx(_3, {})),
            children: [f.jsx(A4, {
                className: "size-6"
            }), "PROJECTS"]
        }), f.jsxs(Tn, {
            setPosition: i,
            onClick: () => e(f.jsx(s0, {})),
            children: ["CONTACT", f.jsx(b3, {
                className: "size-6"
            })]
        }), f.jsx(Y.div, {
            animate: r,
            className: "absolute w-[90%] h-12 rounded-full bg-zinc-100"
        }), f.jsx(I3, {})]
    })
}
const Tn = E.forwardRef(function({
    children: t,
    setPosition: n,
    onClick: r
}, i) {
    const o = E.useRef(null);
    E.useImperativeHandle(i, () => o.current);
    const s = () => {
        o.current && n({
            top: o.current.offsetTop,
            opacity: 1
        })
    };
    return f.jsx(Y.div, {
        ref: o,
        whileHover: {
            scale: 1.1
        },
        onMouseEnter: s,
        className: "relative w-full z-10 cursor-pointer p-3 px-5 uppercase text-zinc-50 mix-blend-difference",
        children: f.jsx("button", {
            className: "font-semibold flex justify-between items-center w-full",
            onClick: () => r(),
            children: t
        })
    })
});

function F3({
    setTab: e,
    setIsMenuOpen: t,
    isMenuOpen: n
}) {
    const [r, i] = E.useState(0);
    return E.useEffect(() => {
        const o = new ResizeObserver(() => {
            i(s => s > 1e3 ? 0 : s + 1), t(!1), e(null)
        });
        return o.observe(document.body), () => o.disconnect()
    }, [t]), f.jsxs(Y.section, {
        initial: "initial",
        animate: "animate",
        transition: {
            staggerChildren: .1
        },
        className: "grid grid-cols-6 gap-4 grid-flow-dense z-[5] md:grid-cols-12 md:max-w-4xl ",
        children: [f.jsx(B3, {}), f.jsx(U3, {
            isMenuOpen: n,
            setIsMenuOpen: t
        }), f.jsx(H3, {
            setTab: e
        }), f.jsx($3, {}), f.jsx(l0, {
            setTab: e,
            hideOnSmall: !1
        }), f.jsx(Z3, {}), f.jsx(Q3, {}), f.jsx(Y3, {
            onClick: () => {
                i(o => o + 1)
            }
        }), f.jsx(G3, {}), f.jsx(W3, {}), f.jsx(X3, {}), f.jsx(K3, {})]
    }, r)
}

function B3() {
    return f.jsx(Ke, {
        className: "col-span-4 sm:col-span-5 row-span-1 bg-transparent border-none md:hidden"
    })
}

function U3({
    isMenuOpen: e,
    setIsMenuOpen: t
}) {
    return f.jsx(Ke, {
        className: "col-span-2 sm:col-span-1 row-span-1 flex items-center justify-center p-0 aspect-square md:hidden",
        children: f.jsx(y3, {
            isMenuOpen: e,
            setIsMenuOpen: t
        })
    })
}

function H3({
    setTab: e
}) {
    return f.jsxs(Ke, {
        className: "col-span-6 md:col-span-5 row-span-2",
        children: [f.jsxs("h1", {
            className: " text-4xl font-medium  mt-5 leading-tight",
            children: ["Hi, I'm ", b.alias, "."]
        }), f.jsxs("p", {
            className: "text-4xl font-medium leading-tight text-zinc-400 mb-10",
            children: ["I'm a ", b.title, "."]
        }), f.jsxs("button", {
            onClick: () => e(f.jsx(s0, {})),
            className: "flex items-center gap-1 text-teal-300 hover:underline",
            children: ["Contact me ", f.jsx(V4, {})]
        })]
    })
}

function $3() {
    return f.jsx(Ke, {
        className: "col-span-4 row-span-4 p-1 min-w-12",
        children: f.jsx("img", {
            src: b.image,
            alt: "A photo of me",
            className: "rounded-md w-full h-full object-cover"
        })
    })
}

function W3() {
    return f.jsx(Ke, {
        className: "col-span-2 row-span-2 bg-gray-700 p-0",
        children: f.jsx(Y.a, {
            whileHover: {
                y: -15,
                scale: 1.2
            },
            href: b.contact.github,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "size-full flex items-center justify-center p-4",
            children: f.jsx(I4, {
                className: "size-10"
            })
        })
    })
}

function G3() {
    return f.jsx(Ke, {
        className: "col-span-2 row-span-2 bg-sky-700 p-0",
        children: f.jsx(Y.a, {
            whileHover: {
                y: -15,
                scale: 1.2
            },
            href: b.contact.linkedin,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "size-full flex items-center justify-center p-4",
            children: f.jsx(F4, {
                className: "size-10"
            })
        })
    })
}

function K3() {
    return f.jsxs(Ke, {
        className: "col-span-3 row-span-1 flex items-center justify-between p-2 px-3",
        children: [f.jsx(ls, {
            className: "size-6 text-teal-300"
        }), f.jsx("p", {
            children: b.contact.location
        })]
    })
}

function Q3() {
    return f.jsxs(Ke, {
        className: "col-span-6 md:col-span-4 row-span-1 flex items-center justify-between p-2 px-3",
        children: [f.jsx("p", {
            children: "English"
        }), " ", f.jsx(L4, {
            className: "size-10 text-teal-300"
        }), " ", f.jsx("p", {
            children: "Hindi"
        })]
    })
}

function X3() {
    return f.jsxs(Ke, {
        className: "col-span-6 md:col-span-4 row-span-1 flex items-center justify-between p-2 px-3",
        children: [f.jsx(_4, {
            className: "size-6 text-teal-300"
        }), f.jsx("p", {
            children: b.contact.email
        })]
    })
}

function Y3({
    onClick: e
}) {
    return f.jsx(Ke, {
        className: "col-span-3 row-span-1 md:col-span-1 md:row-span-2 flex items-center justify-center p-0",
        children: f.jsx(Y.button, {
            onClick: e,
            whileHover: {
                rotate: 360,
                scale: 1.2
            },
            transition: {
                duration: .75
            },
            children: f.jsx(R4, {
                className: "size-8 text-zinc-600"
            })
        })
    })
}

function Z3() {
    return f.jsxs(Ke, {
        className: "col-span-6 md:col-span-5 row-span-2 grid grid-cols-4 gap-4",
        children: [f.jsx("div", {
            className: "col-span-2  flex items-center justify-center",
            children: f.jsx(Y.h2, {
                whileHover: {
                    scale: 1.1
                },
                className: "font-bold text-xl",
                children: "TECH STACK"
            })
        }), b.skills.map(e => f.jsx(q3, {
            className: e.className,
            children: e.children
        }, e.name))]
    })
}

function q3({
    className: e,
    ...t
}) {
    return f.jsx(Y.div, {
        whileHover: {
            scale: 1.1,
            rotate: Math.random() > .5 ? 12 : -12,
            y: -10
        },
        className: o0("col-span-1 rounded size-full aspect-square flex items-center justify-center bg-zinc-400", e),
        ...t
    })
}

function J3({
    children: e,
    setTab: t
}) {
    return f.jsxs(f.Fragment, {
        children: [f.jsx(Y.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: .5
            },
            exit: {
                opacity: 0
            },
            onClick: () => t(null),
            className: "fixed inset-0 bg-black z-20"
        }), f.jsx(Y.div, {
            initial: {
                y: "100%"
            },
            animate: {
                y: 0
            },
            exit: {
                y: "100%"
            },
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 200
            },
            className: "fixed inset-x-1 md:inset-x-24 bottom-0 h-[90%] bg-zinc-800 rounded-t-xl shadow-xl z-30 pb-5",
            children: f.jsxs("div", {
                className: "h-full pt-8 md:p-8 relative",
                children: [f.jsx("button", {
                    onClick: () => t(null),
                    className: "absolute top-4 right-4 p-2 hover:bg-zinc-700 rounded-full transition-colors z-40",
                    children: f.jsx(w4, {
                        size: 24
                    })
                }), f.jsx(Y.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .2
                    },
                    className: "mt-10 px-2 md:px-10 overflow-y-auto h-full pb-48",
                    children: e
                })]
            })
        })]
    })
}

function e5({
    setIsOpen: e,
    setTab: t
}) {
    const n = r => {
        t(r), e(!1)
    };
    return f.jsxs(f.Fragment, {
        children: [f.jsx(Y.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: .5
            },
            exit: {
                opacity: 0
            },
            onClick: () => e(!1),
            className: "fixed inset-0 bg-black z-20"
        }), f.jsx(Y.div, {
            initial: {
                x: "100%"
            },
            animate: {
                x: 0
            },
            exit: {
                x: "100%"
            },
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 200
            },
            className: "fixed w-[90%] right-0 top-0 bottom-0 bg-zinc-800 shadow-xl z-30",
            children: f.jsx("nav", {
                className: "grid h-full grid-cols-3 grid-rows-5",
                children: f.jsx(l0, {
                    setTab: n,
                    hideOnSmall: !0
                })
            })
        })]
    })
}

function t5() {
    const [e, t] = E.useState(null), [n, r] = E.useState(!1);
    return f.jsxs("main", {
        className: "relative w-screen min-h-screen flex flex-col overflow-hidden items-center justify-center gap-6 bg-zinc-900 text-zinc-50 p-6",
        children: [f.jsx(F3, {
            setTab: t,
            setIsMenuOpen: r,
            isMenuOpen: n
        }),f.jsx("div", {
            className: "text-xs",
            children: f.jsxs("p", {
              children: [
                "Made by ",
                f.jsx("span", {
                  className: "italic text-teal-200",
                  children: "Parth Parakhiya"
                }),
                " ",
                new Date().getFullYear()
              ]
            })
          }), f.jsx("div", {
            className: "absolute inset-0 z-0 grid grid-cols-6 gap-0 opacity-10 md:grid-cols-12",
            children: Array.from({
                length: 144
            }).map((i, o) => f.jsx(Y.div, {
                initial: {
                    backgroundColor: "#18181B"
                },
                whileHover: {
                    backgroundColor: "#fff"
                },
                transition: {
                    backgroundColor: {
                        type: "spring",
                        damping: 80,
                        stiffness: 300
                    }
                },
                className: "border border-zinc-100 aspect-square"
            }, o))
        }), f.jsx(ef, {
            children: n && f.jsx(e5, {
                setIsOpen: r,
                setTab: t
            })
        }), f.jsx(ef, {
            children: e && f.jsx(J3, {
                setTab: t,
                children: e
            })
        })]
    })
}

function n5() {
    return f.jsx(t5, {})
}
xp(document.getElementById("root")).render(f.jsx(E.StrictMode, {
    children: f.jsx(n5, {})
}));