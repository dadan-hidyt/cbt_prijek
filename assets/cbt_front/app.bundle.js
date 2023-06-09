/*! jQuery v3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (g, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    v = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    m = {},
    b = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    w = g.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function C(e, t, n) {
    var r,
      i,
      o = (n = n || w).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function T(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f =
      "3.5.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
    E = function (e, t) {
      return new E.fn.init(e, t);
    };
  function d(e) {
    var t = !!e && "length" in e && e.length,
      n = T(e);
    return (
      !b(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (E.fn = E.prototype =
    {
      jquery: f,
      constructor: E,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = E.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return E.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          E.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (E.extend = E.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || b(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (E.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || E.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = E.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    E.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = y.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        C(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (d(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (d(Object(e))
              ? E.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (d(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return v(a);
      },
      guid: 1,
      support: m,
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var p = (function (n) {
    var e,
      p,
      x,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      C,
      T,
      a,
      E,
      v,
      s,
      c,
      y,
      A = "sizzle" + 1 * new Date(),
      d = n.document,
      N = 0,
      r = 0,
      m = ue(),
      b = ue(),
      S = ue(),
      k = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      L = {}.hasOwnProperty,
      t = [],
      j = t.pop,
      q = t.push,
      O = t.push,
      P = t.slice,
      H = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      I =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      R = "[\\x20\\t\\r\\n\\f]",
      B =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        R +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      M =
        "\\[" +
        R +
        "*(" +
        B +
        ")(?:" +
        R +
        "*([*^$|!~]?=)" +
        R +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        B +
        "))|)" +
        R +
        "*\\]",
      W =
        ":(" +
        B +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      F = new RegExp(R + "+", "g"),
      $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
      z = new RegExp("^" + R + "*," + R + "*"),
      _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
      U = new RegExp(R + "|>"),
      V = new RegExp(W),
      X = new RegExp("^" + B + "$"),
      Q = {
        ID: new RegExp("^#(" + B + ")"),
        CLASS: new RegExp("^\\.(" + B + ")"),
        TAG: new RegExp("^(" + B + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            R +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            R +
            "*(?:([+-]|)" +
            R +
            "*(\\d+)|))" +
            R +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + I + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            R +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            R +
            "*((?:-\\d)?\\d*)" +
            R +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      G = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      J = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        C();
      },
      ae = xe(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      O.apply((t = P.call(d.childNodes)), d.childNodes),
        t[d.childNodes.length].nodeType;
    } catch (e) {
      O = {
        apply: t.length
          ? function (e, t) {
              q.apply(e, P.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        d = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
      )
        return n;
      if (!r && (C(e), (e = e || T), E)) {
        if (11 !== d && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === d) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              p.getElementsByClassName &&
              e.getElementsByClassName
            )
              return O.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          p.qsa &&
          !k[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== d || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === d && (U.test(t) || _.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && p.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = A))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + be(l[o]);
            c = l.join(",");
          }
          try {
            return O.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            k(t, !0);
          } finally {
            s === A && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > x.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[A] = !0), e;
    }
    function ce(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) x.attrHandle[n[r]] = t;
    }
    function de(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function pe(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((p = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (C = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : d;
        return (
          r != T &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (T = r).documentElement),
            (E = !i(T)),
            d != T &&
              (n = T.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (p.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(T.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (p.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (p.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(T.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (p.getElementsByClassName = J.test(T.getElementsByClassName)),
            (p.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = A),
                !T.getElementsByName || !T.getElementsByName(A).length
              );
            })),
            p.getById
              ? ((x.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (x.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((x.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (x.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (x.find.TAG = p.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : p.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (x.find.CLASS =
              p.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (p.qsa = J.test(T.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  A +
                  "'></a><select id='" +
                  A +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + R + "*(?:value|" + I + ")"),
                  e.querySelectorAll("[id~=" + A + "-]").length || v.push("~="),
                  (t = T.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + A + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + R + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (p.matchesSelector = J.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (p.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", W);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = J.test(a.compareDocumentPosition)),
            (y =
              t || J.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!p.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == T || (e.ownerDocument == d && y(d, e))
                        ? -1
                        : t == T || (t.ownerDocument == d && y(d, t))
                        ? 1
                        : u
                        ? H(u, e) - H(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == T
                      ? -1
                      : t == T
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? H(u, e) - H(u, t)
                      : 0;
                  if (i === o) return de(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? de(a[r], s[r])
                    : a[r] == d
                    ? -1
                    : s[r] == d
                    ? 1
                    : 0;
                })),
          T
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (C(e),
        p.matchesSelector &&
          E &&
          !k[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            p.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          k(t, !0);
        }
      return 0 < se(t, T, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != T && C(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != T && C(e);
      var n = x.attrHandle[t.toLowerCase()],
        r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : p.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !p.detectDuplicates),
        (u = !p.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((x = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: Q,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return Q.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    V.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              b = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = b && e.nodeName.toLowerCase(),
                    d = !n && !b,
                    p = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            b
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && d)) {
                      (p =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[A] || (a[A] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === N &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (p = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++p && a === e) {
                          i[h] = [N, s, p];
                          break;
                        }
                    } else if (
                      (d &&
                        (p = s =
                          (r =
                            (i =
                              (o = (a = e)[A] || (a[A] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]),
                      !1 === p)
                    )
                      while ((a = (++s && a && a[l]) || (p = s = 0) || u.pop()))
                        if (
                          (b
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++p &&
                          (d &&
                            ((i =
                              (o = a[A] || (a[A] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [N, p]),
                          a === e)
                        )
                          break;
                    return (p -= v) === g || (p % g == 0 && 0 <= p / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                x.pseudos[e] ||
                x.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[A]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                x.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = H(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[A]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              X.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === T.activeElement &&
              (!T.hasFocus || T.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !x.pseudos.empty(e);
          },
          header: function (e) {
            return K.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = x.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      x.pseudos[e] = pe(e);
    for (e in { submit: !0, reset: !0 }) x.pseudos[e] = he(e);
    function me() {}
    function be(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function xe(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        d = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [N, d];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[A] || (e[A] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === N && r[1] === d)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Ce(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(p, h, g, v, y, e) {
      return (
        v && !v[A] && (v = Te(v)),
        y && !y[A] && (y = Te(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !p || (!e && h) ? c : Ce(c, s, p, n, r),
            d = g ? (y || (e ? p : l || v) ? [] : t) : f;
          if ((g && g(f, d, n, r), v)) {
            (i = Ce(d, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || p) {
              if (y) {
                (i = []), (o = d.length);
                while (o--) (a = d[o]) && i.push((f[o] = a));
                y(null, (d = []), i, r);
              }
              o = d.length;
              while (o--)
                (a = d[o]) &&
                  -1 < (i = y ? H(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (d = Ce(d === t ? d.splice(l, d.length) : d)), y ? y(null, t, d, r) : O.apply(t, d);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = x.relative[e[0].type],
          a = o || x.relative[" "],
          s = o ? 1 : 0,
          u = xe(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = xe(
            function (e) {
              return -1 < H(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = x.relative[e[s].type])) c = [xe(we(c), t)];
        else {
          if ((t = x.filter[e[s].type].apply(null, e[s].matches))[A]) {
            for (n = ++s; n < r; n++) if (x.relative[e[n].type]) break;
            return Te(
              1 < s && we(c),
              1 < s &&
                be(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && be(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = x.filters = x.pseudos),
      (x.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = b[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = x.preFilter);
          while (a) {
            for (o in ((n && !(r = z.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = _.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            x.filter))
              !(r = Q[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : b(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            b,
            r,
            i = [],
            o = [],
            a = S[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[A] ? i.push(a) : o.push(a);
            (a = S(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (b = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  d = w,
                  p = e || (b && x.find.TAG("*", i)),
                  h = (N += null == d ? 1 : Math.random() || 0.1),
                  g = p.length;
                for (
                  i && (w = t == T || t || i);
                  l !== g && null != (o = p[l]);
                  l++
                ) {
                  if (b && o) {
                    (a = 0), t || o.ownerDocument == T || (C(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || T, n)) {
                        r.push(o);
                        break;
                      }
                    i && (N = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = j.call(r));
                    f = Ce(f);
                  }
                  O.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((N = h), (w = d)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              x.relative[o[1].type]
            ) {
              if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = Q.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), x.relative[(s = a.type)])) break;
              if (
                (u = x.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && be(o))))
                  return O.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (p.sortStable = A.split("").sort(D).join("") === A),
      (p.detectDuplicates = !!l),
      C(),
      (p.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (p.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(I, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(g);
  (E.find = p),
    (E.expr = p.selectors),
    (E.expr[":"] = E.expr.pseudos),
    (E.uniqueSort = E.unique = p.uniqueSort),
    (E.text = p.getText),
    (E.isXMLDoc = p.isXML),
    (E.contains = p.contains),
    (E.escapeSelector = p.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && E(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    A = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    N = E.expr.match.needsContext;
  function S(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return b(n)
      ? E.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? E.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? E.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : E.filter(n, e, r);
  }
  (E.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? E.find.matchesSelector(r, e)
          ? [r]
          : []
        : E.find.matches(
            e,
            E.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    E.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            E(e).filter(function () {
              for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
        return 1 < r ? E.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1)
          .length;
      },
    });
  var L,
    j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((E.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || L), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : j.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof E ? t[0] : t),
          E.merge(
            this,
            E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : w, !0)
          ),
          k.test(r[1]) && E.isPlainObject(t))
        )
          for (r in t) b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = w.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : b(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(E)
      : E.makeArray(e, this);
  }).prototype = E.fn),
    (L = E(w));
  var q = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && E(e);
      if (!N.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && E.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(E(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    E.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return A((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return A(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (S(e, "template") && (e = e.content || e),
              E.merge([], e.childNodes));
        },
      },
      function (r, i) {
        E.fn[r] = function (e, t) {
          var n = E.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length &&
              (O[r] || E.uniqueSort(n), q.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var H = /[^\x20\t\r\n\f]+/g;
  function I(e) {
    return e;
  }
  function R(e) {
    throw e;
  }
  function B(e, t, n, r) {
    var i;
    try {
      e && b((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && b((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (E.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          E.each(e.match(H) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : E.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                E.each(e, function (e, t) {
                  b(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== T(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            E.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = E.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < E.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    E.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              E.Callbacks("memory"),
              E.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return E.Deferred(function (r) {
                E.each(o, function (e, t) {
                  var n = b(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && b(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          b(t)
                            ? s
                              ? t.call(e, l(u, o, I, s), l(u, o, R, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, I, s),
                                  l(u, o, R, s),
                                  l(u, o, I, o.notifyWith)
                                ))
                            : (a !== I && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== R && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (E.Deferred.getStackHook &&
                        (t.stackTrace = E.Deferred.getStackHook()),
                      g.setTimeout(t));
                };
              }
              return E.Deferred(function (e) {
                o[0][3].add(l(0, e, b(r) ? r : I, e.notifyWith)),
                  o[1][3].add(l(0, e, b(t) ? t : I)),
                  o[2][3].add(l(0, e, b(n) ? n : R));
              }).promise();
            },
            promise: function (e) {
              return null != e ? E.extend(e, a) : a;
            },
          },
          s = {};
        return (
          E.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = E.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (B(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || b(i[t] && i[t].then))
        )
          return o.then();
        while (t--) B(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (E.Deferred.exceptionHook = function (e, t) {
    g.console &&
      g.console.warn &&
      e &&
      M.test(e.name) &&
      g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (E.readyException = function (e) {
      g.setTimeout(function () {
        throw e;
      });
    });
  var W = E.Deferred();
  function F() {
    w.removeEventListener("DOMContentLoaded", F),
      g.removeEventListener("load", F),
      E.ready();
  }
  (E.fn.ready = function (e) {
    return (
      W.then(e)["catch"](function (e) {
        E.readyException(e);
      }),
      this
    );
  }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) ||
          ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
          W.resolveWith(w, [E]);
      },
    }),
    (E.ready.then = W.then),
    "complete" === w.readyState ||
    ("loading" !== w.readyState && !w.documentElement.doScroll)
      ? g.setTimeout(E.ready)
      : (w.addEventListener("DOMContentLoaded", F),
        g.addEventListener("load", F));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === T(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        b(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(E(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    _ = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(_, U);
  }
  var X = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = E.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            X(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(V)
              : (t = V(t)) in r
              ? [t]
              : t.match(H) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || E.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !E.isEmptyObject(t);
      },
    });
  var Y = new Q(),
    G = new Q(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    J = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(J, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : K.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        G.set(e, t, n);
      } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function (e) {
      return G.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return G.access(e, t, n);
    },
    removeData: function (e, t) {
      G.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    E.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = G.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = V(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              G.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = G.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  G.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          G.remove(this, e);
        });
      },
    }),
    E.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, E.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = E.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = E._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                E.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: E.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    E.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? E.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = E.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = w.documentElement,
    ie = function (e) {
      return E.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === E.css(e, "display"))
    );
  };
  var se = {};
  function ue(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = se[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = E.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (se[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  E.fn.extend({
    show: function () {
      return ue(this, !0);
    },
    hide: function () {
      return ue(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? E(this).show() : E(this).hide();
          });
    },
  });
  var le,
    ce,
    fe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i;
  (le = w.createDocumentFragment().appendChild(w.createElement("div"))),
    (ce = w.createElement("input")).setAttribute("type", "radio"),
    ce.setAttribute("checked", "checked"),
    ce.setAttribute("name", "t"),
    le.appendChild(ce),
    (m.checkClone = le.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (le.innerHTML = "<textarea>x</textarea>"),
    (m.noCloneChecked = !!le.cloneNode(!0).lastChild.defaultValue),
    (le.innerHTML = "<option></option>"),
    (m.option = !!le.lastChild);
  var he = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ge(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && S(e, t)) ? E.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead),
    (he.th = he.td),
    m.option ||
      (he.optgroup = he.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ye = /<|&#?\w+;/;
  function me(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        d = [],
        p = 0,
        h = e.length;
      p < h;
      p++
    )
      if ((o = e[p]) || 0 === o)
        if ("object" === T(o)) E.merge(d, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = he[s] || he._default),
            (a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          E.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(o));
    (f.textContent = ""), (p = 0);
    while ((o = d[p++]))
      if (r && -1 < E.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ge(f.appendChild(o), "script")), l && ve(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) pe.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    we = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ee(e, t) {
    return (
      (e ===
        (function () {
          try {
            return w.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ae(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ae(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return E().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = E.guid++))),
      e.each(function () {
        E.event.add(this, t, i, r, n);
      })
    );
  }
  function Ne(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        E.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (E.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: E.event.trigger(
                    E.extend(r[0], E.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && E.event.add(e, i, Ce);
  }
  (E.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.get(t);
      if (X(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && E.find.matchesSelector(re, i),
          n.guid || (n.guid = E.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof E && E.event.triggered !== e.type
                  ? E.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(H) || [""]).length);
        while (l--)
          (p = g = (s = we.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p &&
              ((f = E.event.special[p] || {}),
              (p = (i ? f.delegateType : f.bindType) || p),
              (f = E.event.special[p] || {}),
              (c = E.extend(
                {
                  type: p,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && E.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (d = u[p]) ||
                (((d = u[p] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(p, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (E.event.global[p] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(H) || [""]).length;
        while (l--)
          if (
            ((p = g = (s = we.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            (f = E.event.special[p] || {}),
              (d = u[(p = (r ? f.delegateType : f.bindType) || p)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = d.length);
            while (o--)
              (c = d[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (d.splice(o, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                E.removeEvent(e, p, v.handle),
              delete u[p]);
          } else for (p in u) E.event.remove(e, p + t[l], n, r, !0);
        E.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = E.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = E.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = E.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (E.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < E(i, this).index(l)
                  : E.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: b(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && S(t, "input") && Ne(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            fe.test(t.type) && t.click && S(t, "input") && Ne(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (fe.test(t.type) &&
              t.click &&
              S(t, "input") &&
              Y.get(t, "click")) ||
            S(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && E.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && xe.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      E.event.addProp
    ),
    E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      E.event.special[e] = {
        setup: function () {
          return Ne(this, e, Ee), !1;
        },
        trigger: function () {
          return Ne(this, e), !0;
        },
        delegateType: t,
      };
    }),
    E.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        E.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || E.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    E.fn.extend({
      on: function (e, t, n, r) {
        return Ae(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ae(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            E(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            E.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Se = /<script|<style|<link/i,
    ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
    De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return (
      (S(e, "table") &&
        S(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        E(e).children("tbody")[0]) ||
      e
    );
  }
  function je(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
      G.hasData(e) && ((o = G.access(e)), (a = E.extend({}, o)), G.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = v(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      d = f - 1,
      p = r[0],
      h = b(p);
    if (h || (1 < f && "string" == typeof p && !m.checkClone && ke.test(p)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = p.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = E.map(ge(e, "script"), je)).length; c < f; c++)
        (u = e),
          c !== d &&
            ((u = E.clone(u, !0, !0)), s && E.merge(a, ge(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            pe.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              E.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? E._evalUrl &&
                  !u.noModule &&
                  E._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : C(u.textContent.replace(De, ""), u, l));
    }
    return n;
  }
  function He(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || E.cleanData(ge(r)),
        r.parentNode &&
          (n && ie(r) && ve(ge(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          m.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          E.isXMLDoc(e)
        )
      )
        for (a = ge(c), r = 0, i = (o = ge(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ge(e), a = a || ge(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (X(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[G.expando] && (n[G.expando] = void 0);
        }
    },
  }),
    E.fn.extend({
      detach: function (e) {
        return He(this, e, !0);
      },
      remove: function (e) {
        return He(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? E.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (E.cleanData(ge(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return E.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Se.test(e) &&
              !he[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = E.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (E.cleanData(ge(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            E.inArray(this, n) < 0 &&
              (E.cleanData(ge(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    E.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        E.fn[e] = function (e) {
          for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              E(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Ie = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = g), t.getComputedStyle(e);
    },
    Be = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Me = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = E.style(e, t)),
        !m.pixelBoxStyles() &&
          Ie.test(a) &&
          Me.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = g.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = w.createElement("div"),
      l = w.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (m.clearCloneStyle = "content-box" === l.style.backgroundClip),
      E.extend(m, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = w.createElement("table")),
              (t = w.createElement("tr")),
              (n = w.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = g.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var $e = ["Webkit", "Moz", "ms"],
    ze = w.createElement("div").style,
    _e = {};
  function Ue(e) {
    var t = E.cssProps[e] || _e[e];
    return (
      t ||
      (e in ze
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = $e.length;
              while (n--) if ((e = $e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve,
    Xe,
    Qe = /^(none|table(?!-c[ea]).+)/,
    Ye = /^--/,
    Ge = { position: "absolute", visibility: "hidden", display: "block" },
    Ke = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += E.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= E.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += E.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += E.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += E.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function et(e, t, n) {
    var r = Re(e),
      i =
        (!m.boxSizingReliable() || n) &&
        "border-box" === E.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Ie.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!m.boxSizingReliable() && i) ||
        (!m.reliableTrDimensions() && S(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === E.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ze(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = Ye.test(t),
          l = e.style;
        if (
          (u || (t = Ue(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = (function (e, t, n, r) {
            var i,
              o,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return E.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (E.cssNumber[t] || ("px" !== l && +u)) &&
                te.exec(E.css(e, t));
            if (c && c[3] !== l) {
              (u /= 2), (l = l || c[3]), (c = +u || 1);
              while (a--)
                E.style(e, t, c + l),
                  (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= o);
              (c *= 2), E.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
              i
            );
          })(e, t, i)),
          (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
            m.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        Ye.test(t) || (t = Ue(s)),
        (a = E.cssHooks[t] || E.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        "normal" === i && t in Ke && (i = Ke[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    E.each(["height", "width"], function (e, u) {
      E.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Qe.test(E.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, u, n)
              : Be(e, Ge, function () {
                  return et(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !m.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
            s = n ? Ze(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ze(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = E.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (E.cssHooks.marginLeft = Fe(m.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Be(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    E.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (E.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (E.cssHooks[i + o].set = Je);
    }),
    E.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = E.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (E.fn.delay = function (r, e) {
      return (
        (r = (E.fx && E.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = g.setTimeout(e, r);
          t.stop = function () {
            g.clearTimeout(n);
          };
        })
      );
    }),
    (Ve = w.createElement("input")),
    (Xe = w.createElement("select").appendChild(w.createElement("option"))),
    (Ve.type = "checkbox"),
    (m.checkOn = "" !== Ve.value),
    (m.optSelected = Xe.selected),
    ((Ve = w.createElement("input")).value = "t"),
    (Ve.type = "radio"),
    (m.radioValue = "t" === Ve.value);
  var tt,
    nt = E.expr.attrHandle;
  E.fn.extend({
    attr: function (e, t) {
      return $(this, E.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    },
  }),
    E.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? E.prop(e, t, n)
            : ((1 === o && E.isXMLDoc(e)) ||
                (i =
                  E.attrHooks[t.toLowerCase()] ||
                  (E.expr.match.bool.test(t) ? tt : void 0)),
              void 0 !== n
                ? null === n
                  ? void E.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = E.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!m.radioValue && "radio" === t && S(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(H);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (tt = {
      set: function (e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = nt[t] || E.find.attr;
      nt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = nt[o]),
            (nt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (nt[o] = i)),
          r
        );
      };
    });
  var rt = /^(?:input|select|textarea|button)$/i,
    it = /^(?:a|area)$/i;
  function ot(e) {
    return (e.match(H) || []).join(" ");
  }
  function at(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function st(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(H)) || [];
  }
  E.fn.extend({
    prop: function (e, t) {
      return $(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    },
  }),
    E.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && E.isXMLDoc(e)) ||
              ((t = E.propFix[t] || t), (i = E.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = E.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : rt.test(e.nodeName) || (it.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    m.optSelected ||
      (E.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    E.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      }
    ),
    E.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (b(t))
          return this.each(function (e) {
            E(this).addClass(t.call(this, e, at(this)));
          });
        if ((e = st(t)).length)
          while ((n = this[u++]))
            if (((i = at(n)), (r = 1 === n.nodeType && " " + ot(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ot(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (b(t))
          return this.each(function (e) {
            E(this).removeClass(t.call(this, e, at(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = st(t)).length)
          while ((n = this[u++]))
            if (((i = at(n)), (r = 1 === n.nodeType && " " + ot(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = ot(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : b(i)
          ? this.each(function (e) {
              E(this).toggleClass(i.call(this, e, at(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = E(this)), (r = st(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = at(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + ot(at(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var ut = /\r/g;
  E.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = b(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, E(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = E.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                E.valHooks[this.type] ||
                E.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(ut, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    E.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = E.find.attr(e, "value");
            return null != t ? t : ot(E.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))
              ) {
                if (((t = E(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = E.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    E.each(["radio", "checkbox"], function () {
      (E.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < E.inArray(E(e).val(), t));
        },
      }),
        m.checkOn ||
          (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (m.focusin = "onfocusin" in g);
  var lt = /^(?:focusinfocus|focusoutblur)$/,
    ct = function (e) {
      e.stopPropagation();
    };
  E.extend(E.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        d = [n || w],
        p = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || w),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !lt.test(p + E.event.triggered) &&
          (-1 < p.indexOf(".") && ((p = (h = p.split(".")).shift()), h.sort()),
          (u = p.indexOf(":") < 0 && "on" + p),
          ((e = e[E.expando]
            ? e
            : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : E.makeArray(t, [e])),
          (c = E.event.special[p] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || p, lt.test(s + p) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            d.push(o), (a = o);
          a === (n.ownerDocument || w) &&
            d.push(a.defaultView || a.parentWindow || g);
        }
        i = 0;
        while ((o = d[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || p),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              X(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = p),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(d.pop(), t)) ||
            !X(n) ||
            (u &&
              b(n[p]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (E.event.triggered = p),
              e.isPropagationStopped() && f.addEventListener(p, ct),
              n[p](),
              e.isPropagationStopped() && f.removeEventListener(p, ct),
              (E.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
      E.event.trigger(r, null, t);
    },
  }),
    E.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0);
      },
    }),
    m.focusin ||
      E.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          E.event.simulate(r, e.target, E.event.fix(e));
        };
        E.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      }),
    (E.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = new g.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }
      return (
        (t && !t.getElementsByTagName("parsererror").length) ||
          E.error("Invalid XML: " + e),
        t
      );
    });
  var ft,
    dt = /\[\]$/,
    pt = /\r?\n/g,
    ht = /^(?:submit|button|image|reset|file)$/i,
    gt = /^(?:input|select|textarea|keygen)/i;
  function vt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      E.each(e, function (e, t) {
        r || dt.test(n)
          ? i(n, t)
          : vt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== T(e)) i(n, e);
    else for (t in e) vt(n + "[" + t + "]", e[t], r, i);
  }
  (E.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = b(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
      E.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) vt(n, e[n], t, i);
    return r.join("&");
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, "elements");
          return e ? E.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !E(this).is(":disabled") &&
              gt.test(this.nodeName) &&
              !ht.test(e) &&
              (this.checked || !fe.test(e))
            );
          })
          .map(function (e, t) {
            var n = E(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? E.map(n, function (e) {
                  return { name: t.name, value: e.replace(pt, "\r\n") };
                })
              : { name: t.name, value: n.replace(pt, "\r\n") };
          })
          .get();
      },
    }),
    E.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (b(e) && (e = e.call(this[0])),
            (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return b(n)
          ? this.each(function (e) {
              E(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = E(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = b(t);
        return this.each(function (e) {
          E(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }),
    (E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (m.createHTMLDocument =
      (((ft = w.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === ft.childNodes.length)),
    (E.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (m.createHTMLDocument
              ? (((r = (t =
                  w.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = w.location.href),
                t.head.appendChild(r))
              : (t = w)),
          (o = !n && []),
          (i = k.exec(e))
            ? [t.createElement(i[1])]
            : ((i = me([e], t, o)),
              o && o.length && E(o).remove(),
              E.merge([], i.childNodes)));
      var r, i, o;
    }),
    (E.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = E.css(e, "position"),
          c = E(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = E.css(e, "top")),
          (u = E.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          b(t) && (t = t.call(e, n, E.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    E.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                E.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === E.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0)),
              (i.left += E.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - E.css(r, "marginTop", !0),
            left: t.left - i.left - E.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === E.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    E.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    E.each(["top", "left"], function (e, n) {
      E.cssHooks[n] = Fe(m.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Ie.test(t) ? E(e).position()[n] + "px" : t;
      });
    }),
    E.each({ Height: "height", Width: "width" }, function (a, s) {
      E.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          E.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? E.css(e, t, i)
                  : E.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    E.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    E.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        E.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (E.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || E.guid++),
        i
      );
  }),
    (E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }),
    (E.isArray = Array.isArray),
    (E.parseJSON = JSON.parse),
    (E.nodeName = S),
    (E.isFunction = b),
    (E.isWindow = x),
    (E.camelCase = V),
    (E.type = T),
    (E.now = Date.now),
    (E.isNumeric = function (e) {
      var t = E.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (E.trim = function (e) {
      return null == e ? "" : (e + "").replace(yt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return E;
      });
  var mt = g.jQuery,
    bt = g.$;
  return (
    (E.noConflict = function (e) {
      return g.$ === E && (g.$ = bt), e && g.jQuery === E && (g.jQuery = mt), E;
    }),
    "undefined" == typeof e && (g.jQuery = g.$ = E),
    E
  );
});

/*!
 * Bootstrap v4.6.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
          {}),
        t.jQuery
      );
})(this, function (t, e) {
  "use strict";
  function n(t) {
    return t && "object" == typeof t && "default" in t ? t : { default: t };
  }
  var i = n(e);
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function r(t, e, n) {
    return (
      e && o(t.prototype, e),
      n && o(t, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function a() {
    return (
      (a = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
          }),
      a.apply(this, arguments)
    );
  }
  function s(t, e) {
    return (
      (s = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t;
          }),
      s(t, e)
    );
  }
  var l = "transitionend";
  var u = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = i.default(t).css("transition-duration"),
        n = i.default(t).css("transition-delay"),
        o = parseFloat(e),
        r = parseFloat(n);
      return o || r
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      i.default(t).trigger(l);
    },
    supportsTransitionEnd: function () {
      return Boolean(l);
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            a =
              r && u.isElement(r)
                ? "element"
                : null === (s = r) || "undefined" == typeof s
                ? "" + s
                : {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(a))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                a +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var s;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? u.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof i.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = i.default.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  u.jQueryDetection(),
    (i.default.fn.emulateTransitionEnd = function (t) {
      var e = this,
        n = !1;
      return (
        i.default(this).one(u.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || u.triggerTransitionEnd(e);
        }, t),
        this
      );
    }),
    (i.default.event.special[u.TRANSITION_END] = {
      bindType: l,
      delegateType: l,
      handle: function (t) {
        if (i.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var f = "bs.alert",
    d = i.default.fn.alert,
    c = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, f), (this._element = null);
        }),
        (e._getRootElement = function (t) {
          var e = u.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = i.default(t).closest(".alert")[0]),
            n
          );
        }),
        (e._triggerCloseEvent = function (t) {
          var e = i.default.Event("close.bs.alert");
          return i.default(t).trigger(e), e;
        }),
        (e._removeElement = function (t) {
          var e = this;
          if (
            (i.default(t).removeClass("show"), i.default(t).hasClass("fade"))
          ) {
            var n = u.getTransitionDurationFromElement(t);
            i.default(t)
              .one(u.TRANSITION_END, function (n) {
                return e._destroyElement(t, n);
              })
              .emulateTransitionEnd(n);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (t) {
          i.default(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(f);
            o || ((o = new t(this)), n.data(f, o)), "close" === e && o[e](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.alert.data-api",
      '[data-dismiss="alert"]',
      c._handleDismiss(new c())
    ),
    (i.default.fn.alert = c._jQueryInterface),
    (i.default.fn.alert.Constructor = c),
    (i.default.fn.alert.noConflict = function () {
      return (i.default.fn.alert = d), c._jQueryInterface;
    });
  var h = "bs.button",
    p = i.default.fn.button,
    m = "active",
    g = '[data-toggle^="button"]',
    _ = 'input:not([type="hidden"])',
    v = ".btn",
    b = (function () {
      function t(t) {
        (this._element = t), (this.shouldAvoidTriggerChange = !1);
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          var t = !0,
            e = !0,
            n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
          if (n) {
            var o = this._element.querySelector(_);
            if (o) {
              if ("radio" === o.type)
                if (o.checked && this._element.classList.contains(m)) t = !1;
                else {
                  var r = n.querySelector(".active");
                  r && i.default(r).removeClass(m);
                }
              t &&
                (("checkbox" !== o.type && "radio" !== o.type) ||
                  (o.checked = !this._element.classList.contains(m)),
                this.shouldAvoidTriggerChange ||
                  i.default(o).trigger("change")),
                o.focus(),
                (e = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (e &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains(m)
              ),
            t && i.default(this._element).toggleClass(m));
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, h), (this._element = null);
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this),
              r = o.data(h);
            r || ((r = new t(this)), o.data(h, r)),
              (r.shouldAvoidTriggerChange = n),
              "toggle" === e && r[e]();
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.button.data-api", g, function (t) {
      var e = t.target,
        n = e;
      if (
        (i.default(e).hasClass("btn") || (e = i.default(e).closest(v)[0]),
        !e || e.hasAttribute("disabled") || e.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var o = e.querySelector(_);
        if (
          o &&
          (o.hasAttribute("disabled") || o.classList.contains("disabled"))
        )
          return void t.preventDefault();
        ("INPUT" !== n.tagName && "LABEL" === e.tagName) ||
          b._jQueryInterface.call(
            i.default(e),
            "toggle",
            "INPUT" === n.tagName
          );
      }
    })
    .on("focus.bs.button.data-api blur.bs.button.data-api", g, function (t) {
      var e = i.default(t.target).closest(v)[0];
      i.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
    }),
    i.default(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector(_);
        o.checked || o.hasAttribute("checked")
          ? i.classList.add(m)
          : i.classList.remove(m);
      }
      for (
        var r = 0,
          a = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        r < a;
        r++
      ) {
        var s = t[r];
        "true" === s.getAttribute("aria-pressed")
          ? s.classList.add(m)
          : s.classList.remove(m);
      }
    }),
    (i.default.fn.button = b._jQueryInterface),
    (i.default.fn.button.Constructor = b),
    (i.default.fn.button.noConflict = function () {
      return (i.default.fn.button = p), b._jQueryInterface;
    });
  var y = "carousel",
    E = "bs.carousel",
    w = i.default.fn[y],
    T = "active",
    C = "next",
    S = "prev",
    N = "slid.bs.carousel",
    D = ".active.carousel-item",
    A = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    k = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    I = { TOUCH: "touch", PEN: "pen" },
    O = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide(C);
        }),
        (e.nextWhenVisible = function () {
          var t = i.default(this._element);
          !document.hidden &&
            t.is(":visible") &&
            "hidden" !== t.css("visibility") &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide(S);
        }),
        (e.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (u.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._updateInterval(),
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              )));
        }),
        (e.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(D);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              i.default(this._element).one(N, function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var o = t > n ? C : S;
              this._slide(o, this._items[t]);
            }
        }),
        (e.dispose = function () {
          i.default(this._element).off(".bs.carousel"),
            i.default.removeData(this._element, E),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (t) {
          return (t = a({}, A, t)), u.typeCheckConfig(y, t, k), t;
        }),
        (e._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            i.default(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              i
                .default(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var e = function (e) {
                t._pointerEvent && I[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              n = function (e) {
                t._pointerEvent &&
                  I[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            i
              .default(this._element.querySelectorAll(".carousel-item img"))
              .on("dragstart.bs.carousel", function (t) {
                return t.preventDefault();
              }),
              this._pointerEvent
                ? (i
                    .default(this._element)
                    .on("pointerdown.bs.carousel", function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on("pointerup.bs.carousel", function (t) {
                      return n(t);
                    }),
                  this._element.classList.add("pointer-event"))
                : (i
                    .default(this._element)
                    .on("touchstart.bs.carousel", function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (e) {
                      return (function (e) {
                        t.touchDeltaX =
                          e.originalEvent.touches &&
                          e.originalEvent.touches.length > 1
                            ? 0
                            : e.originalEvent.touches[0].clientX -
                              t.touchStartX;
                      })(e);
                    }),
                  i
                    .default(this._element)
                    .on("touchend.bs.carousel", function (t) {
                      return n(t);
                    }));
          }
        }),
        (e._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (e._getItemByDirection = function (t, e) {
          var n = t === C,
            i = t === S,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var a = (o + (t === S ? -1 : 1)) % this._items.length;
          return -1 === a
            ? this._items[this._items.length - 1]
            : this._items[a];
        }),
        (e._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            o = this._getItemIndex(this._element.querySelector(D)),
            r = i.default.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: o,
              to: n,
            });
          return i.default(this._element).trigger(r), r;
        }),
        (e._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            i.default(e).removeClass(T);
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && i.default(n).addClass(T);
          }
        }),
        (e._updateInterval = function () {
          var t = this._activeElement || this._element.querySelector(D);
          if (t) {
            var e = parseInt(t.getAttribute("data-interval"), 10);
            e
              ? ((this._config.defaultInterval =
                  this._config.defaultInterval || this._config.interval),
                (this._config.interval = e))
              : (this._config.interval =
                  this._config.defaultInterval || this._config.interval);
          }
        }),
        (e._slide = function (t, e) {
          var n,
            o,
            r,
            a = this,
            s = this._element.querySelector(D),
            l = this._getItemIndex(s),
            f = e || (s && this._getItemByDirection(t, s)),
            d = this._getItemIndex(f),
            c = Boolean(this._interval);
          if (
            (t === C
              ? ((n = "carousel-item-left"),
                (o = "carousel-item-next"),
                (r = "left"))
              : ((n = "carousel-item-right"),
                (o = "carousel-item-prev"),
                (r = "right")),
            f && i.default(f).hasClass(T))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(f, r).isDefaultPrevented() &&
            s &&
            f
          ) {
            (this._isSliding = !0),
              c && this.pause(),
              this._setActiveIndicatorElement(f),
              (this._activeElement = f);
            var h = i.default.Event(N, {
              relatedTarget: f,
              direction: r,
              from: l,
              to: d,
            });
            if (i.default(this._element).hasClass("slide")) {
              i.default(f).addClass(o),
                u.reflow(f),
                i.default(s).addClass(n),
                i.default(f).addClass(n);
              var p = u.getTransitionDurationFromElement(s);
              i.default(s)
                .one(u.TRANSITION_END, function () {
                  i
                    .default(f)
                    .removeClass(n + " " + o)
                    .addClass(T),
                    i.default(s).removeClass("active " + o + " " + n),
                    (a._isSliding = !1),
                    setTimeout(function () {
                      return i.default(a._element).trigger(h);
                    }, 0);
                })
                .emulateTransitionEnd(p);
            } else
              i.default(s).removeClass(T),
                i.default(f).addClass(T),
                (this._isSliding = !1),
                i.default(this._element).trigger(h);
            c && this.cycle();
          }
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data(E),
              o = a({}, A, i.default(this).data());
            "object" == typeof e && (o = a({}, o, e));
            var r = "string" == typeof e ? e : o.slide;
            if (
              (n || ((n = new t(this, o)), i.default(this).data(E, n)),
              "number" == typeof e)
            )
              n.to(e);
            else if ("string" == typeof r) {
              if ("undefined" == typeof n[r])
                throw new TypeError('No method named "' + r + '"');
              n[r]();
            } else o.interval && o.ride && (n.pause(), n.cycle());
          });
        }),
        (t._dataApiClickHandler = function (e) {
          var n = u.getSelectorFromElement(this);
          if (n) {
            var o = i.default(n)[0];
            if (o && i.default(o).hasClass("carousel")) {
              var r = a({}, i.default(o).data(), i.default(this).data()),
                s = this.getAttribute("data-slide-to");
              s && (r.interval = !1),
                t._jQueryInterface.call(i.default(o), r),
                s && i.default(o).data(E).to(s),
                e.preventDefault();
            }
          }
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
          {
            key: "Default",
            get: function () {
              return A;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.carousel.data-api",
      "[data-slide], [data-slide-to]",
      O._dataApiClickHandler
    ),
    i.default(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var o = i.default(t[e]);
        O._jQueryInterface.call(o, o.data());
      }
    }),
    (i.default.fn[y] = O._jQueryInterface),
    (i.default.fn[y].Constructor = O),
    (i.default.fn[y].noConflict = function () {
      return (i.default.fn[y] = w), O._jQueryInterface;
    });
  var x = "collapse",
    j = "bs.collapse",
    L = i.default.fn[x],
    P = "show",
    F = "collapse",
    R = "collapsing",
    B = "collapsed",
    H = "width",
    M = '[data-toggle="collapse"]',
    q = { toggle: !0, parent: "" },
    Q = { toggle: "boolean", parent: "(string|element)" },
    W = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(M)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            a = u.getSelectorFromElement(r),
            s = [].slice
              .call(document.querySelectorAll(a))
              .filter(function (e) {
                return e === t;
              });
          null !== a &&
            s.length > 0 &&
            ((this._selector = a), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          i.default(this._element).hasClass(P) ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            n,
            o = this;
          if (
            !(
              this._isTransitioning ||
              i.default(this._element).hasClass(P) ||
              (this._parent &&
                0 ===
                  (e = [].slice
                    .call(this._parent.querySelectorAll(".show, .collapsing"))
                    .filter(function (t) {
                      return "string" == typeof o._config.parent
                        ? t.getAttribute("data-parent") === o._config.parent
                        : t.classList.contains(F);
                    })).length &&
                (e = null),
              e &&
                (n = i.default(e).not(this._selector).data(j)) &&
                n._isTransitioning)
            )
          ) {
            var r = i.default.Event("show.bs.collapse");
            if (
              (i.default(this._element).trigger(r), !r.isDefaultPrevented())
            ) {
              e &&
                (t._jQueryInterface.call(
                  i.default(e).not(this._selector),
                  "hide"
                ),
                n || i.default(e).data(j, null));
              var a = this._getDimension();
              i.default(this._element).removeClass(F).addClass(R),
                (this._element.style[a] = 0),
                this._triggerArray.length &&
                  i
                    .default(this._triggerArray)
                    .removeClass(B)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                l = u.getTransitionDurationFromElement(this._element);
              i
                .default(this._element)
                .one(u.TRANSITION_END, function () {
                  i
                    .default(o._element)
                    .removeClass(R)
                    .addClass("collapse show"),
                    (o._element.style[a] = ""),
                    o.setTransitioning(!1),
                    i.default(o._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(l),
                (this._element.style[a] = this._element[s] + "px");
            }
          }
        }),
        (e.hide = function () {
          var t = this;
          if (!this._isTransitioning && i.default(this._element).hasClass(P)) {
            var e = i.default.Event("hide.bs.collapse");
            if (
              (i.default(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
                u.reflow(this._element),
                i
                  .default(this._element)
                  .addClass(R)
                  .removeClass("collapse show");
              var o = this._triggerArray.length;
              if (o > 0)
                for (var r = 0; r < o; r++) {
                  var a = this._triggerArray[r],
                    s = u.getSelectorFromElement(a);
                  null !== s &&
                    (i
                      .default([].slice.call(document.querySelectorAll(s)))
                      .hasClass(P) ||
                      i.default(a).addClass(B).attr("aria-expanded", !1));
                }
              this.setTransitioning(!0), (this._element.style[n] = "");
              var l = u.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(u.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    i
                      .default(t._element)
                      .removeClass(R)
                      .addClass(F)
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(l);
            }
          }
        }),
        (e.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, j),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (t) {
          return (
            ((t = a({}, q, t)).toggle = Boolean(t.toggle)),
            u.typeCheckConfig(x, t, Q),
            t
          );
        }),
        (e._getDimension = function () {
          return i.default(this._element).hasClass(H) ? H : "height";
        }),
        (e._getParent = function () {
          var e,
            n = this;
          u.isElement(this._config.parent)
            ? ((e = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            r = [].slice.call(e.querySelectorAll(o));
          return (
            i.default(r).each(function (e, i) {
              n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (t, e) {
          var n = i.default(t).hasClass(P);
          e.length && i.default(e).toggleClass(B, !n).attr("aria-expanded", n);
        }),
        (t._getTargetFromElement = function (t) {
          var e = u.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(j),
              r = a({}, q, n.data(), "object" == typeof e && e ? e : {});
            if (
              (!o &&
                r.toggle &&
                "string" == typeof e &&
                /show|hide/.test(e) &&
                (r.toggle = !1),
              o || ((o = new t(this, r)), n.data(j, o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
          {
            key: "Default",
            get: function () {
              return q;
            },
          },
        ]),
        t
      );
    })();
  i.default(document).on("click.bs.collapse.data-api", M, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var e = i.default(this),
      n = u.getSelectorFromElement(this),
      o = [].slice.call(document.querySelectorAll(n));
    i.default(o).each(function () {
      var t = i.default(this),
        n = t.data(j) ? "toggle" : e.data();
      W._jQueryInterface.call(t, n);
    });
  }),
    (i.default.fn[x] = W._jQueryInterface),
    (i.default.fn[x].Constructor = W),
    (i.default.fn[x].noConflict = function () {
      return (i.default.fn[x] = L), W._jQueryInterface;
    });
  var U =
      "undefined" != typeof window &&
      "undefined" != typeof document &&
      "undefined" != typeof navigator,
    V = (function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
        if (U && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      return 0;
    })(),
    Y =
      U && window.Promise
        ? function (t) {
            var e = !1;
            return function () {
              e ||
                ((e = !0),
                window.Promise.resolve().then(function () {
                  (e = !1), t();
                }));
            };
          }
        : function (t) {
            var e = !1;
            return function () {
              e ||
                ((e = !0),
                setTimeout(function () {
                  (e = !1), t();
                }, V));
            };
          };
  function z(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function K(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function X(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function G(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = K(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : G(X(t));
  }
  function $(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var J = U && !(!window.MSInputMethodContext || !document.documentMode),
    Z = U && /MSIE 10/.test(navigator.userAgent);
  function tt(t) {
    return 11 === t ? J : 10 === t ? Z : J || Z;
  }
  function et(t) {
    if (!t) return document.documentElement;
    for (
      var e = tt(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === K(n, "position")
        ? et(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function nt(t) {
    return null !== t.parentNode ? nt(t.parentNode) : t;
  }
  function it(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var a,
      s,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (s = (a = l).nodeName) ||
        ("HTML" !== s && et(a.firstElementChild) !== a)
        ? et(l)
        : l;
    var u = nt(t);
    return u.host ? it(u.host, e) : it(t, nt(e).host);
  }
  function ot(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      n = "top" === e ? "scrollTop" : "scrollLeft",
      i = t.nodeName;
    if ("BODY" === i || "HTML" === i) {
      var o = t.ownerDocument.documentElement,
        r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function rt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = ot(e, "top"),
      o = ot(e, "left"),
      r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function at(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"]) +
      parseFloat(t["border" + i + "Width"])
    );
  }
  function st(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      tt(10)
        ? parseInt(n["offset" + t]) +
            parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
            parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")])
        : 0
    );
  }
  function lt(t) {
    var e = t.body,
      n = t.documentElement,
      i = tt(10) && getComputedStyle(n);
    return { height: st("Height", e, n, i), width: st("Width", e, n, i) };
  }
  var ut = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    },
    ft = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    dt = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    ct =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function ht(t) {
    return ct({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function pt(t) {
    var e = {};
    try {
      if (tt(10)) {
        e = t.getBoundingClientRect();
        var n = ot(t, "top"),
          i = ot(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? lt(t.ownerDocument) : {},
      a = r.width || t.clientWidth || o.width,
      s = r.height || t.clientHeight || o.height,
      l = t.offsetWidth - a,
      u = t.offsetHeight - s;
    if (l || u) {
      var f = K(t);
      (l -= at(f, "x")), (u -= at(f, "y")), (o.width -= l), (o.height -= u);
    }
    return ht(o);
  }
  function mt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = tt(10),
      o = "HTML" === e.nodeName,
      r = pt(t),
      a = pt(e),
      s = G(t),
      l = K(e),
      u = parseFloat(l.borderTopWidth),
      f = parseFloat(l.borderLeftWidth);
    n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var d = ht({
      top: r.top - a.top - u,
      left: r.left - a.left - f,
      width: r.width,
      height: r.height,
    });
    if (((d.marginTop = 0), (d.marginLeft = 0), !i && o)) {
      var c = parseFloat(l.marginTop),
        h = parseFloat(l.marginLeft);
      (d.top -= u - c),
        (d.bottom -= u - c),
        (d.left -= f - h),
        (d.right -= f - h),
        (d.marginTop = c),
        (d.marginLeft = h);
    }
    return (
      (i && !n ? e.contains(s) : e === s && "BODY" !== s.nodeName) &&
        (d = rt(d, e)),
      d
    );
  }
  function gt(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.ownerDocument.documentElement,
      i = mt(t, n),
      o = Math.max(n.clientWidth, window.innerWidth || 0),
      r = Math.max(n.clientHeight, window.innerHeight || 0),
      a = e ? 0 : ot(n),
      s = e ? 0 : ot(n, "left"),
      l = {
        top: a - i.top + i.marginTop,
        left: s - i.left + i.marginLeft,
        width: o,
        height: r,
      };
    return ht(l);
  }
  function _t(t) {
    var e = t.nodeName;
    if ("BODY" === e || "HTML" === e) return !1;
    if ("fixed" === K(t, "position")) return !0;
    var n = X(t);
    return !!n && _t(n);
  }
  function vt(t) {
    if (!t || !t.parentElement || tt()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === K(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function bt(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      a = o ? vt(t) : it(t, $(e));
    if ("viewport" === i) r = gt(a, o);
    else {
      var s = void 0;
      "scrollParent" === i
        ? "BODY" === (s = G(X(e))).nodeName &&
          (s = t.ownerDocument.documentElement)
        : (s = "window" === i ? t.ownerDocument.documentElement : i);
      var l = mt(s, a, o);
      if ("HTML" !== s.nodeName || _t(a)) r = l;
      else {
        var u = lt(t.ownerDocument),
          f = u.height,
          d = u.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = f + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = d + l.left);
      }
    }
    var c = "number" == typeof (n = n || 0);
    return (
      (r.left += c ? n : n.left || 0),
      (r.top += c ? n : n.top || 0),
      (r.right -= c ? n : n.right || 0),
      (r.bottom -= c ? n : n.bottom || 0),
      r
    );
  }
  function yt(t) {
    return t.width * t.height;
  }
  function Et(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var a = bt(n, i, r, o),
      s = {
        top: { width: a.width, height: e.top - a.top },
        right: { width: a.right - e.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - e.bottom },
        left: { width: e.left - a.left, height: a.height },
      },
      l = Object.keys(s)
        .map(function (t) {
          return ct({ key: t }, s[t], { area: yt(s[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      u = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      f = u.length > 0 ? u[0].key : l[0].key,
      d = t.split("-")[1];
    return f + (d ? "-" + d : "");
  }
  function wt(t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = i ? vt(e) : it(e, $(n));
    return mt(n, o, i);
  }
  function Tt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function Ct(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function St(t, e, n) {
    n = n.split("-")[0];
    var i = Tt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      a = r ? "top" : "left",
      s = r ? "left" : "top",
      l = r ? "height" : "width",
      u = r ? "width" : "height";
    return (
      (o[a] = e[a] + e[l] / 2 - i[l] / 2),
      (o[s] = n === s ? e[s] - i[u] : e[Ct(s)]),
      o
    );
  }
  function Nt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function Dt(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t.name === n;
                });
              var i = Nt(t, function (t) {
                return t.name === n;
              });
              return t.indexOf(i);
            })(t, 0, n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          z(n) &&
          ((e.offsets.popper = ht(e.offsets.popper)),
          (e.offsets.reference = ht(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function At() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = wt(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = Et(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = St(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (t = Dt(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function kt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function It(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if ("undefined" != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function Ot() {
    return (
      (this.state.isDestroyed = !0),
      kt(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[It("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function xt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function jt(t, e, n, i) {
    var o = "BODY" === t.nodeName,
      r = o ? t.ownerDocument.defaultView : t;
    r.addEventListener(e, n, { passive: !0 }),
      o || jt(G(r.parentNode), e, n, i),
      i.push(r);
  }
  function Lt(t, e, n, i) {
    (n.updateBound = i),
      xt(t).addEventListener("resize", n.updateBound, { passive: !0 });
    var o = G(t);
    return (
      jt(o, "scroll", n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function Pt() {
    this.state.eventsEnabled ||
      (this.state = Lt(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function Ft() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        xt(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function Rt(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function Bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        Rt(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  var Ht = U && /Firefox/i.test(navigator.userAgent);
  function Mt(t, e, n) {
    var i = Nt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        a = "`" + n + "`";
      console.warn(
        a +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var qt = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    Qt = qt.slice(3);
  function Wt(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = Qt.indexOf(t),
      i = Qt.slice(n + 1).concat(Qt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var Ut = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                a = o.popper,
                s = -1 !== ["bottom", "top"].indexOf(n),
                l = s ? "left" : "top",
                u = s ? "width" : "height",
                f = {
                  start: dt({}, l, r[l]),
                  end: dt({}, l, r[l] + r[u] - a[u]),
                };
              t.offsets.popper = ct({}, a, f[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n,
              i = e.offset,
              o = t.placement,
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = o.split("-")[0];
            return (
              (n = Rt(+i)
                ? [+i, 0]
                : (function (t, e, n, i) {
                    var o = [0, 0],
                      r = -1 !== ["right", "left"].indexOf(i),
                      a = t.split(/(\+|\-)/).map(function (t) {
                        return t.trim();
                      }),
                      s = a.indexOf(
                        Nt(a, function (t) {
                          return -1 !== t.search(/,|\s/);
                        })
                      );
                    a[s] &&
                      -1 === a[s].indexOf(",") &&
                      console.warn(
                        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
                      );
                    var l = /\s*,\s*|\s+/,
                      u =
                        -1 !== s
                          ? [
                              a.slice(0, s).concat([a[s].split(l)[0]]),
                              [a[s].split(l)[1]].concat(a.slice(s + 1)),
                            ]
                          : [a];
                    return (
                      (u = u.map(function (t, i) {
                        var o = (1 === i ? !r : r) ? "height" : "width",
                          a = !1;
                        return t
                          .reduce(function (t, e) {
                            return "" === t[t.length - 1] &&
                              -1 !== ["+", "-"].indexOf(e)
                              ? ((t[t.length - 1] = e), (a = !0), t)
                              : a
                              ? ((t[t.length - 1] += e), (a = !1), t)
                              : t.concat(e);
                          }, [])
                          .map(function (t) {
                            return (function (t, e, n, i) {
                              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                a = o[2];
                              return r
                                ? 0 === a.indexOf("%")
                                  ? (ht("%p" === a ? n : i)[e] / 100) * r
                                  : "vh" === a || "vw" === a
                                  ? (("vh" === a
                                      ? Math.max(
                                          document.documentElement.clientHeight,
                                          window.innerHeight || 0
                                        )
                                      : Math.max(
                                          document.documentElement.clientWidth,
                                          window.innerWidth || 0
                                        )) /
                                      100) *
                                    r
                                  : r
                                : t;
                            })(t, o, e, n);
                          });
                      })),
                      u.forEach(function (t, e) {
                        t.forEach(function (n, i) {
                          Rt(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
                        });
                      }),
                      o
                    );
                  })(i, a, s, l)),
              "left" === l
                ? ((a.top += n[0]), (a.left -= n[1]))
                : "right" === l
                ? ((a.top += n[0]), (a.left += n[1]))
                : "top" === l
                ? ((a.left += n[0]), (a.top -= n[1]))
                : "bottom" === l && ((a.left += n[0]), (a.top += n[1])),
              (t.popper = a),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || et(t.instance.popper);
            t.instance.reference === n && (n = et(n));
            var i = It("transform"),
              o = t.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[i];
            (o.top = ""), (o.left = ""), (o[i] = "");
            var l = bt(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = a), (o[i] = s), (e.boundaries = l);
            var u = e.priority,
              f = t.offsets.popper,
              d = {
                primary: function (t) {
                  var n = f[t];
                  return (
                    f[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(f[t], l[t])),
                    dt({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    i = f[n];
                  return (
                    f[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        f[n],
                        l[t] - ("right" === t ? f.width : f.height)
                      )),
                    dt({}, n, i)
                  );
                },
              };
            return (
              u.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                f = ct({}, f, d[e](t));
              }),
              (t.offsets.popper = f),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              a = -1 !== ["top", "bottom"].indexOf(o),
              s = a ? "right" : "bottom",
              l = a ? "left" : "top",
              u = a ? "width" : "height";
            return (
              n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]),
              n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!Mt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              u = l ? "height" : "width",
              f = l ? "Top" : "Left",
              d = f.toLowerCase(),
              c = l ? "left" : "top",
              h = l ? "bottom" : "right",
              p = Tt(i)[u];
            s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)),
              s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]),
              (t.offsets.popper = ht(t.offsets.popper));
            var m = s[d] + s[u] / 2 - p / 2,
              g = K(t.instance.popper),
              _ = parseFloat(g["margin" + f]),
              v = parseFloat(g["border" + f + "Width"]),
              b = m - t.offsets.popper[d] - _ - v;
            return (
              (b = Math.max(Math.min(a[u] - p, b), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (dt((n = {}), d, Math.round(b)), dt(n, c, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (kt(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = bt(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split("-")[0],
              o = Ct(i),
              r = t.placement.split("-")[1] || "",
              a = [];
            switch (e.behavior) {
              case "flip":
                a = [i, o];
                break;
              case "clockwise":
                a = Wt(i);
                break;
              case "counterclockwise":
                a = Wt(i, !0);
                break;
              default:
                a = e.behavior;
            }
            return (
              a.forEach(function (s, l) {
                if (i !== s || a.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (o = Ct(i));
                var u = t.offsets.popper,
                  f = t.offsets.reference,
                  d = Math.floor,
                  c =
                    ("left" === i && d(u.right) > d(f.left)) ||
                    ("right" === i && d(u.left) < d(f.right)) ||
                    ("top" === i && d(u.bottom) > d(f.top)) ||
                    ("bottom" === i && d(u.top) < d(f.bottom)),
                  h = d(u.left) < d(n.left),
                  p = d(u.right) > d(n.right),
                  m = d(u.top) < d(n.top),
                  g = d(u.bottom) > d(n.bottom),
                  _ =
                    ("left" === i && h) ||
                    ("right" === i && p) ||
                    ("top" === i && m) ||
                    ("bottom" === i && g),
                  v = -1 !== ["top", "bottom"].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((v && "start" === r && h) ||
                      (v && "end" === r && p) ||
                      (!v && "start" === r && m) ||
                      (!v && "end" === r && g)),
                  y =
                    !!e.flipVariationsByContent &&
                    ((v && "start" === r && p) ||
                      (v && "end" === r && h) ||
                      (!v && "start" === r && g) ||
                      (!v && "end" === r && m)),
                  E = b || y;
                (c || _ || E) &&
                  ((t.flipped = !0),
                  (c || _) && (i = a[l + 1]),
                  E &&
                    (r = (function (t) {
                      return "end" === t ? "start" : "start" === t ? "end" : t;
                    })(r)),
                  (t.placement = i + (r ? "-" + r : "")),
                  (t.offsets.popper = ct(
                    {},
                    t.offsets.popper,
                    St(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = Dt(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ["left", "right"].indexOf(n),
              s = -1 === ["top", "left"].indexOf(n);
            return (
              (o[a ? "left" : "top"] =
                r[n] - (s ? o[a ? "width" : "height"] : 0)),
              (t.placement = Ct(e)),
              (t.offsets.popper = ht(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!Mt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = Nt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = Nt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var a,
              s,
              l = void 0 !== r ? r : e.gpuAcceleration,
              u = et(t.instance.popper),
              f = pt(u),
              d = { position: o.position },
              c = (function (t, e) {
                var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  a = Math.floor,
                  s = function (t) {
                    return t;
                  },
                  l = r(o.width),
                  u = r(i.width),
                  f = -1 !== ["left", "right"].indexOf(t.placement),
                  d = -1 !== t.placement.indexOf("-"),
                  c = e ? (f || d || l % 2 == u % 2 ? r : a) : s,
                  h = e ? r : s;
                return {
                  left: c(
                    l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left
                  ),
                  top: h(i.top),
                  bottom: h(i.bottom),
                  right: c(i.right),
                };
              })(t, window.devicePixelRatio < 2 || !Ht),
              h = "bottom" === n ? "top" : "bottom",
              p = "right" === i ? "left" : "right",
              m = It("transform");
            if (
              ((s =
                "bottom" === h
                  ? "HTML" === u.nodeName
                    ? -u.clientHeight + c.bottom
                    : -f.height + c.bottom
                  : c.top),
              (a =
                "right" === p
                  ? "HTML" === u.nodeName
                    ? -u.clientWidth + c.right
                    : -f.width + c.right
                  : c.left),
              l && m)
            )
              (d[m] = "translate3d(" + a + "px, " + s + "px, 0)"),
                (d[h] = 0),
                (d[p] = 0),
                (d.willChange = "transform");
            else {
              var g = "bottom" === h ? -1 : 1,
                _ = "right" === p ? -1 : 1;
              (d[h] = s * g), (d[p] = a * _), (d.willChange = h + ", " + p);
            }
            var v = { "x-placement": t.placement };
            return (
              (t.attributes = ct({}, v, t.attributes)),
              (t.styles = ct({}, d, t.styles)),
              (t.arrowStyles = ct({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              Bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                Bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = wt(o, e, t, n.positionFixed),
              a = Et(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", a),
              Bt(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    Vt = (function () {
      function t(e, n) {
        var i = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        ut(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = Y(this.update.bind(this))),
          (this.options = ct({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(ct({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = ct(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return ct({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              z(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        ft(t, [
          {
            key: "update",
            value: function () {
              return At.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return Ot.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return Pt.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return Ft.call(this);
            },
          },
        ]),
        t
      );
    })();
  (Vt.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (Vt.placements = qt),
    (Vt.Defaults = Ut);
  var Yt = Vt,
    zt = "dropdown",
    Kt = "bs.dropdown",
    Xt = i.default.fn[zt],
    Gt = new RegExp("38|40|27"),
    $t = "disabled",
    Jt = "show",
    Zt = "dropdown-menu-right",
    te = "hide.bs.dropdown",
    ee = "hidden.bs.dropdown",
    ne = "click.bs.dropdown.data-api",
    ie = "keydown.bs.dropdown.data-api",
    oe = '[data-toggle="dropdown"]',
    re = ".dropdown-menu",
    ae = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    se = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    le = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass($t)
          ) {
            var e = i.default(this._menu).hasClass(Jt);
            t._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              i.default(this._element).hasClass($t) ||
              i.default(this._menu).hasClass(Jt)
            ))
          ) {
            var n = { relatedTarget: this._element },
              o = i.default.Event("show.bs.dropdown", n),
              r = t._getParentFromElement(this._element);
            if ((i.default(r).trigger(o), !o.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ("undefined" == typeof Yt)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                  );
                var a = this._element;
                "parent" === this._config.reference
                  ? (a = r)
                  : u.isElement(this._config.reference) &&
                    ((a = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (a = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    i.default(r).addClass("position-static"),
                  (this._popper = new Yt(
                    a,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === i.default(r).closest(".navbar-nav").length &&
                i
                  .default(document.body)
                  .children()
                  .on("mouseover", null, i.default.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                i.default(this._menu).toggleClass(Jt),
                i
                  .default(r)
                  .toggleClass(Jt)
                  .trigger(i.default.Event("shown.bs.dropdown", n));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass($t) &&
            i.default(this._menu).hasClass(Jt)
          ) {
            var e = { relatedTarget: this._element },
              n = i.default.Event(te, e),
              o = t._getParentFromElement(this._element);
            i.default(o).trigger(n),
              n.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                i.default(this._menu).toggleClass(Jt),
                i.default(o).toggleClass(Jt).trigger(i.default.Event(ee, e)));
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, Kt),
            i.default(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          i.default(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              this.constructor.Default,
              i.default(this._element).data(),
              t
            )),
            u.typeCheckConfig(zt, t, this.constructor.DefaultType),
            t
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(re));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var t = i.default(this._element.parentNode),
            e = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (e = i.default(this._menu).hasClass(Zt)
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (e = "right-start")
              : t.hasClass("dropleft")
              ? (e = "left-start")
              : i.default(this._menu).hasClass(Zt) && (e = "bottom-end"),
            e
          );
        }),
        (e._detectNavbar = function () {
          return i.default(this._element).closest(".navbar").length > 0;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element)
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            a({}, t, this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data(Kt);
            if (
              (n ||
                ((n = new t(this, "object" == typeof e ? e : null)),
                i.default(this).data(Kt, n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t._clearMenus = function (e) {
          if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
            for (
              var n = [].slice.call(document.querySelectorAll(oe)),
                o = 0,
                r = n.length;
              o < r;
              o++
            ) {
              var a = t._getParentFromElement(n[o]),
                s = i.default(n[o]).data(Kt),
                l = { relatedTarget: n[o] };
              if ((e && "click" === e.type && (l.clickEvent = e), s)) {
                var u = s._menu;
                if (
                  i.default(a).hasClass(Jt) &&
                  !(
                    e &&
                    (("click" === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ("keyup" === e.type && 9 === e.which)) &&
                    i.default.contains(a, e.target)
                  )
                ) {
                  var f = i.default.Event(te, l);
                  i.default(a).trigger(f),
                    f.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        i
                          .default(document.body)
                          .children()
                          .off("mouseover", null, i.default.noop),
                      n[o].setAttribute("aria-expanded", "false"),
                      s._popper && s._popper.destroy(),
                      i.default(u).removeClass(Jt),
                      i
                        .default(a)
                        .removeClass(Jt)
                        .trigger(i.default.Event(ee, l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = u.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (e) {
          if (
            !(/input|textarea/i.test(e.target.tagName)
              ? 32 === e.which ||
                (27 !== e.which &&
                  ((40 !== e.which && 38 !== e.which) ||
                    i.default(e.target).closest(re).length))
              : !Gt.test(e.which)) &&
            !this.disabled &&
            !i.default(this).hasClass($t)
          ) {
            var n = t._getParentFromElement(this),
              o = i.default(n).hasClass(Jt);
            if (o || 27 !== e.which) {
              if (
                (e.preventDefault(),
                e.stopPropagation(),
                !o || 27 === e.which || 32 === e.which)
              )
                return (
                  27 === e.which &&
                    i.default(n.querySelector(oe)).trigger("focus"),
                  void i.default(this).trigger("click")
                );
              var r = [].slice
                .call(
                  n.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return i.default(t).is(":visible");
                });
              if (0 !== r.length) {
                var a = r.indexOf(e.target);
                38 === e.which && a > 0 && a--,
                  40 === e.which && a < r.length - 1 && a++,
                  a < 0 && (a = 0),
                  r[a].focus();
              }
            }
          }
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
          {
            key: "Default",
            get: function () {
              return ae;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return se;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(ie, oe, le._dataApiKeydownHandler)
    .on(ie, re, le._dataApiKeydownHandler)
    .on(ne + " keyup.bs.dropdown.data-api", le._clearMenus)
    .on(ne, oe, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        le._jQueryInterface.call(i.default(this), "toggle");
    })
    .on(ne, ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (i.default.fn[zt] = le._jQueryInterface),
    (i.default.fn[zt].Constructor = le),
    (i.default.fn[zt].noConflict = function () {
      return (i.default.fn[zt] = Xt), le._jQueryInterface;
    });
  var ue = "bs.modal",
    fe = i.default.fn.modal,
    de = "modal-open",
    ce = "fade",
    he = "show",
    pe = "modal-static",
    me = "hidden.bs.modal",
    ge = "show.bs.modal",
    _e = "focusin.bs.modal",
    ve = "resize.bs.modal",
    be = "click.dismiss.bs.modal",
    ye = "keydown.dismiss.bs.modal",
    Ee = "mousedown.dismiss.bs.modal",
    we = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Te = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Ce = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    Se = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = t.prototype;
      return (
        (e.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (e.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            var n = i.default.Event(ge, { relatedTarget: t });
            i.default(this._element).trigger(n),
              n.isDefaultPrevented() ||
                ((this._isShown = !0),
                i.default(this._element).hasClass(ce) &&
                  (this._isTransitioning = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i
                  .default(this._element)
                  .on(be, '[data-dismiss="modal"]', function (t) {
                    return e.hide(t);
                  }),
                i.default(this._dialog).on(Ee, function () {
                  i.default(e._element).one(
                    "mouseup.dismiss.bs.modal",
                    function (t) {
                      i.default(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    }
                  );
                }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (e.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = i.default.Event("hide.bs.modal");
            if (
              (i.default(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = i.default(this._element).hasClass(ce);
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i.default(document).off(_e),
                i.default(this._element).removeClass(he),
                i.default(this._element).off(be),
                i.default(this._dialog).off(Ee),
                o)
              ) {
                var r = u.getTransitionDurationFromElement(this._element);
                i.default(this._element)
                  .one(u.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return i.default(t).off(".bs.modal");
          }),
            i.default(document).off(_e),
            i.default.removeData(this._element, ue),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (t) {
          return (t = a({}, Te, t)), u.typeCheckConfig("modal", t, Ce), t;
        }),
        (e._triggerBackdropTransition = function () {
          var t = this,
            e = i.default.Event("hidePrevented.bs.modal");
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = "hidden"),
              this._element.classList.add(pe);
            var o = u.getTransitionDurationFromElement(this._dialog);
            i.default(this._element).off(u.TRANSITION_END),
              i
                .default(this._element)
                .one(u.TRANSITION_END, function () {
                  t._element.classList.remove(pe),
                    n ||
                      i
                        .default(t._element)
                        .one(u.TRANSITION_END, function () {
                          t._element.style.overflowY = "";
                        })
                        .emulateTransitionEnd(t._element, o);
                })
                .emulateTransitionEnd(o),
              this._element.focus();
          }
        }),
        (e._showElement = function (t) {
          var e = this,
            n = i.default(this._element).hasClass(ce),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            i.default(this._dialog).hasClass("modal-dialog-scrollable") && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && u.reflow(this._element),
            i.default(this._element).addClass(he),
            this._config.focus && this._enforceFocus();
          var r = i.default.Event("shown.bs.modal", { relatedTarget: t }),
            a = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                i.default(e._element).trigger(r);
            };
          if (n) {
            var s = u.getTransitionDurationFromElement(this._dialog);
            i.default(this._dialog)
              .one(u.TRANSITION_END, a)
              .emulateTransitionEnd(s);
          } else a();
        }),
        (e._enforceFocus = function () {
          var t = this;
          i.default(document)
            .off(_e)
            .on(_e, function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === i.default(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? i.default(this._element).on(ye, function (e) {
                t._config.keyboard && 27 === e.which
                  ? (e.preventDefault(), t.hide())
                  : t._config.keyboard ||
                    27 !== e.which ||
                    t._triggerBackdropTransition();
              })
            : this._isShown || i.default(this._element).off(ye);
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? i.default(window).on(ve, function (e) {
                return t.handleUpdate(e);
              })
            : i.default(window).off(ve);
        }),
        (e._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              i.default(document.body).removeClass(de),
                t._resetAdjustments(),
                t._resetScrollbar(),
                i.default(t._element).trigger(me);
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (i.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (t) {
          var e = this,
            n = i.default(this._element).hasClass(ce) ? ce : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              n && this._backdrop.classList.add(n),
              i.default(this._backdrop).appendTo(document.body),
              i.default(this._element).on(be, function (t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ("static" === e._config.backdrop
                      ? e._triggerBackdropTransition()
                      : e.hide());
              }),
              n && u.reflow(this._backdrop),
              i.default(this._backdrop).addClass(he),
              !t)
            )
              return;
            if (!n) return void t();
            var o = u.getTransitionDurationFromElement(this._backdrop);
            i.default(this._backdrop)
              .one(u.TRANSITION_END, t)
              .emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            i.default(this._backdrop).removeClass(he);
            var r = function () {
              e._removeBackdrop(), t && t();
            };
            if (i.default(this._element).hasClass(ce)) {
              var a = u.getTransitionDurationFromElement(this._backdrop);
              i.default(this._backdrop)
                .one(u.TRANSITION_END, r)
                .emulateTransitionEnd(a);
            } else r();
          } else t && t();
        }),
        (e._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (e._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(document.querySelectorAll(we)),
              n = [].slice.call(document.querySelectorAll(".sticky-top"));
            i.default(e).each(function (e, n) {
              var o = n.style.paddingRight,
                r = i.default(n).css("padding-right");
              i.default(n)
                .data("padding-right", o)
                .css("padding-right", parseFloat(r) + t._scrollbarWidth + "px");
            }),
              i.default(n).each(function (e, n) {
                var o = n.style.marginRight,
                  r = i.default(n).css("margin-right");
                i.default(n)
                  .data("margin-right", o)
                  .css(
                    "margin-right",
                    parseFloat(r) - t._scrollbarWidth + "px"
                  );
              });
            var o = document.body.style.paddingRight,
              r = i.default(document.body).css("padding-right");
            i.default(document.body)
              .data("padding-right", o)
              .css(
                "padding-right",
                parseFloat(r) + this._scrollbarWidth + "px"
              );
          }
          i.default(document.body).addClass(de);
        }),
        (e._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(we));
          i.default(t).each(function (t, e) {
            var n = i.default(e).data("padding-right");
            i.default(e).removeData("padding-right"),
              (e.style.paddingRight = n || "");
          });
          var e = [].slice.call(document.querySelectorAll(".sticky-top"));
          i.default(e).each(function (t, e) {
            var n = i.default(e).data("margin-right");
            "undefined" != typeof n &&
              i.default(e).css("margin-right", n).removeData("margin-right");
          });
          var n = i.default(document.body).data("padding-right");
          i.default(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = n || "");
        }),
        (e._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this).data(ue),
              r = a(
                {},
                Te,
                i.default(this).data(),
                "object" == typeof e && e ? e : {}
              );
            if (
              (o || ((o = new t(this, r)), i.default(this).data(ue, o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](n);
            } else r.show && o.show(n);
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
          {
            key: "Default",
            get: function () {
              return Te;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        o = u.getSelectorFromElement(this);
      o && (e = document.querySelector(o));
      var r = i.default(e).data(ue)
        ? "toggle"
        : a({}, i.default(e).data(), i.default(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var s = i.default(e).one(ge, function (t) {
        t.isDefaultPrevented() ||
          s.one(me, function () {
            i.default(n).is(":visible") && n.focus();
          });
      });
      Se._jQueryInterface.call(i.default(e), r, this);
    }),
    (i.default.fn.modal = Se._jQueryInterface),
    (i.default.fn.modal.Constructor = Se),
    (i.default.fn.modal.noConflict = function () {
      return (i.default.fn.modal = fe), Se._jQueryInterface;
    });
  var Ne = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    De = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Ae =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function ke(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll("*")),
        a = function (t, n) {
          var i = r[t],
            a = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var s = [].slice.call(i.attributes),
            l = [].concat(e["*"] || [], e[a] || []);
          s.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Ne.indexOf(n) ||
                  Boolean(De.test(t.nodeValue) || Ae.test(t.nodeValue))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (i[o].test(n)) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        s = 0,
        l = r.length;
      s < l;
      s++
    )
      a(s);
    return i.body.innerHTML;
  }
  var Ie = "tooltip",
    Oe = "bs.tooltip",
    xe = i.default.fn.tooltip,
    je = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Le = ["sanitize", "whiteList", "sanitizeFn"],
    Pe = "fade",
    Fe = "show",
    Re = "show",
    Be = "out",
    He = "hover",
    Me = "focus",
    qe = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    Qe = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    We = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    Ue = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    Ve = (function () {
      function t(t, e) {
        if ("undefined" == typeof Yt)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = i.default(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                i.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (i.default(this.getTipElement()).hasClass(Fe))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            i.default.removeData(this.element, this.constructor.DATA_KEY),
            i.default(this.element).off(this.constructor.EVENT_KEY),
            i
              .default(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && i.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ("none" === i.default(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var e = i.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            i.default(this.element).trigger(e);
            var n = u.findShadowRoot(this.element),
              o = i.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !o) return;
            var r = this.getTipElement(),
              a = u.getUID(this.constructor.NAME);
            r.setAttribute("id", a),
              this.element.setAttribute("aria-describedby", a),
              this.setContent(),
              this.config.animation && i.default(r).addClass(Pe);
            var s =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              l = this._getAttachment(s);
            this.addAttachmentClass(l);
            var f = this._getContainer();
            i.default(r).data(this.constructor.DATA_KEY, this),
              i.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || i.default(r).appendTo(f),
              i.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new Yt(
                this.element,
                r,
                this._getPopperConfig(l)
              )),
              i.default(r).addClass(Fe),
              i.default(r).addClass(this.config.customClass),
              "ontouchstart" in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .on("mouseover", null, i.default.noop);
            var d = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                i.default(t.element).trigger(t.constructor.Event.SHOWN),
                e === Be && t._leave(null, t);
            };
            if (i.default(this.tip).hasClass(Pe)) {
              var c = u.getTransitionDurationFromElement(this.tip);
              i.default(this.tip)
                .one(u.TRANSITION_END, d)
                .emulateTransitionEnd(c);
            } else d();
          }
        }),
        (e.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            o = i.default.Event(this.constructor.Event.HIDE),
            r = function () {
              e._hoverState !== Re &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                i.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((i.default(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (i.default(n).removeClass(Fe),
              "ontouchstart" in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .off("mouseover", null, i.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              i.default(this.tip).hasClass(Pe))
            ) {
              var a = u.getTransitionDurationFromElement(n);
              i.default(n).one(u.TRANSITION_END, r).emulateTransitionEnd(a);
            } else r();
            this._hoverState = "";
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (e.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            i.default(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            i.default(t).removeClass("fade show");
        }),
        (e.setElementContent = function (t, e) {
          "object" != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = ke(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? i.default(e).parent().is(t) || t.empty().append(e)
            : t.text(i.default(e).text());
        }),
        (e.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (e._getPopperConfig = function (t) {
          var e = this;
          return a(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: ".arrow" },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element)
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : u.isElement(this.config.container)
            ? i.default(this.config.container)
            : i.default(document).find(this.config.container);
        }),
        (e._getAttachment = function (t) {
          return qe[t.toUpperCase()];
        }),
        (e._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (e) {
            if ("click" === e)
              i.default(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== e) {
              var n =
                  e === He
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  e === He
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              i.default(t.element)
                .on(n, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            i
              .default(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = a({}, this.config, {
                  trigger: "manual",
                  selector: "",
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (e._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Me : He] = !0),
            i.default(e.getTipElement()).hasClass(Fe) || e._hoverState === Re
              ? (e._hoverState = Re)
              : (clearTimeout(e._timeout),
                (e._hoverState = Re),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Re && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (e._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Me : He] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = Be),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    e._hoverState === Be && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (e._getConfig = function (t) {
          var e = i.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== Le.indexOf(t) && delete e[t];
            }),
            "number" ==
              typeof (t = a(
                {},
                this.constructor.Default,
                e,
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            u.typeCheckConfig(Ie, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = ke(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (e._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (e._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr("class").match(je);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (e._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (e._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (i.default(t).removeClass(Pe),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(Oe),
              r = "object" == typeof e && e;
            if (
              (o || !/dispose|hide/.test(e)) &&
              (o || ((o = new t(this, r)), n.data(Oe, o)), "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
          {
            key: "Default",
            get: function () {
              return Qe;
            },
          },
          {
            key: "NAME",
            get: function () {
              return Ie;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return Oe;
            },
          },
          {
            key: "Event",
            get: function () {
              return Ue;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return We;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn.tooltip = Ve._jQueryInterface),
    (i.default.fn.tooltip.Constructor = Ve),
    (i.default.fn.tooltip.noConflict = function () {
      return (i.default.fn.tooltip = xe), Ve._jQueryInterface;
    });
  var Ye = "bs.popover",
    ze = i.default.fn.popover,
    Ke = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Xe = a({}, Ve.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    Ge = a({}, Ve.DefaultType, { content: "(string|element|function)" }),
    $e = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    Je = (function (t) {
      var e, n;
      function o() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = o).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        s(e, n);
      var a = o.prototype;
      return (
        (a.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (a.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (a.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (a.setContent = function () {
          var t = i.default(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show");
        }),
        (a._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (a._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr("class").match(Ke);
          null !== e && e.length > 0 && t.removeClass(e.join(""));
        }),
        (o._jQueryInterface = function (t) {
          return this.each(function () {
            var e = i.default(this).data(Ye),
              n = "object" == typeof t ? t : null;
            if (
              (e || !/dispose|hide/.test(t)) &&
              (e || ((e = new o(this, n)), i.default(this).data(Ye, e)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        r(o, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
          {
            key: "Default",
            get: function () {
              return Xe;
            },
          },
          {
            key: "NAME",
            get: function () {
              return "popover";
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return Ye;
            },
          },
          {
            key: "Event",
            get: function () {
              return $e;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Ge;
            },
          },
        ]),
        o
      );
    })(Ve);
  (i.default.fn.popover = Je._jQueryInterface),
    (i.default.fn.popover.Constructor = Je),
    (i.default.fn.popover.noConflict = function () {
      return (i.default.fn.popover = ze), Je._jQueryInterface;
    });
  var Ze = "scrollspy",
    tn = "bs.scrollspy",
    en = i.default.fn[Ze],
    nn = "active",
    on = "position",
    rn = ".nav, .list-group",
    an = { offset: 10, method: "auto", target: "" },
    sn = { offset: "number", method: "string", target: "(string|element)" },
    ln = (function () {
      function t(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          i
            .default(this._scrollElement)
            .on("scroll.bs.scrollspy", function (t) {
              return n._process(t);
            }),
          this.refresh(),
          this._process();
      }
      var e = t.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : on,
            n = "auto" === this._config.method ? e : this._config.method,
            o = n === on ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  r = u.getSelectorFromElement(t);
                if ((r && (e = document.querySelector(r)), e)) {
                  var a = e.getBoundingClientRect();
                  if (a.width || a.height)
                    return [i.default(e)[n]().top + o, r];
                }
                return null;
              })
              .filter(Boolean)
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, tn),
            i.default(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = a({}, an, "object" == typeof t && t ? t : {}))
                .target &&
            u.isElement(t.target)
          ) {
            var e = i.default(t.target).attr("id");
            e || ((e = u.getUID(Ze)), i.default(t.target).attr("id", e)),
              (t.target = "#" + e);
          }
          return u.typeCheckConfig(Ze, t, sn), t;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; )
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = i.default(
              [].slice.call(document.querySelectorAll(e.join(",")))
            );
          n.hasClass("dropdown-item")
            ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(nn),
              n.addClass(nn))
            : (n.addClass(nn),
              n.parents(rn).prev(".nav-link, .list-group-item").addClass(nn),
              n
                .parents(rn)
                .prev(".nav-item")
                .children(".nav-link")
                .addClass(nn)),
            i
              .default(this._scrollElement)
              .trigger("activate.bs.scrollspy", { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(nn);
            })
            .forEach(function (t) {
              return t.classList.remove(nn);
            });
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data(tn);
            if (
              (n ||
                ((n = new t(this, "object" == typeof e && e)),
                i.default(this).data(tn, n)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
          {
            key: "Default",
            get: function () {
              return an;
            },
          },
        ]),
        t
      );
    })();
  i.default(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        e = t.length;
      e--;

    ) {
      var n = i.default(t[e]);
      ln._jQueryInterface.call(n, n.data());
    }
  }),
    (i.default.fn[Ze] = ln._jQueryInterface),
    (i.default.fn[Ze].Constructor = ln),
    (i.default.fn[Ze].noConflict = function () {
      return (i.default.fn[Ze] = en), ln._jQueryInterface;
    });
  var un = "bs.tab",
    fn = i.default.fn.tab,
    dn = "active",
    cn = "fade",
    hn = "show",
    pn = ".active",
    mn = "> li > .active",
    gn = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                i.default(this._element).hasClass(dn)) ||
              i.default(this._element).hasClass("disabled") ||
              this._element.hasAttribute("disabled")
            )
          ) {
            var e,
              n,
              o = i.default(this._element).closest(".nav, .list-group")[0],
              r = u.getSelectorFromElement(this._element);
            if (o) {
              var a = "UL" === o.nodeName || "OL" === o.nodeName ? mn : pn;
              n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1];
            }
            var s = i.default.Event("hide.bs.tab", {
                relatedTarget: this._element,
              }),
              l = i.default.Event("show.bs.tab", { relatedTarget: n });
            if (
              (n && i.default(n).trigger(s),
              i.default(this._element).trigger(l),
              !l.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              r && (e = document.querySelector(r)),
                this._activate(this._element, o);
              var f = function () {
                var e = i.default.Event("hidden.bs.tab", {
                    relatedTarget: t._element,
                  }),
                  o = i.default.Event("shown.bs.tab", { relatedTarget: n });
                i.default(n).trigger(e), i.default(t._element).trigger(o);
              };
              e ? this._activate(e, e.parentNode, f) : f();
            }
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, un), (this._element = null);
        }),
        (e._activate = function (t, e, n) {
          var o = this,
            r = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? i.default(e).children(pn)
                : i.default(e).find(mn)
            )[0],
            a = n && r && i.default(r).hasClass(cn),
            s = function () {
              return o._transitionComplete(t, r, n);
            };
          if (r && a) {
            var l = u.getTransitionDurationFromElement(r);
            i.default(r)
              .removeClass(hn)
              .one(u.TRANSITION_END, s)
              .emulateTransitionEnd(l);
          } else s();
        }),
        (e._transitionComplete = function (t, e, n) {
          if (e) {
            i.default(e).removeClass(dn);
            var o = i.default(e.parentNode).find("> .dropdown-menu .active")[0];
            o && i.default(o).removeClass(dn),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          i.default(t).addClass(dn),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            u.reflow(t),
            t.classList.contains(cn) && t.classList.add(hn);
          var r = t.parentNode;
          if (
            (r && "LI" === r.nodeName && (r = r.parentNode),
            r && i.default(r).hasClass("dropdown-menu"))
          ) {
            var a = i.default(t).closest(".dropdown")[0];
            if (a) {
              var s = [].slice.call(a.querySelectorAll(".dropdown-toggle"));
              i.default(s).addClass(dn);
            }
            t.setAttribute("aria-expanded", !0);
          }
          n && n();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(un);
            if (
              (o || ((o = new t(this)), n.data(un, o)), "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      "click.bs.tab.data-api",
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), gn._jQueryInterface.call(i.default(this), "show");
      }
    ),
    (i.default.fn.tab = gn._jQueryInterface),
    (i.default.fn.tab.Constructor = gn),
    (i.default.fn.tab.noConflict = function () {
      return (i.default.fn.tab = fn), gn._jQueryInterface;
    });
  var _n = "bs.toast",
    vn = i.default.fn.toast,
    bn = "hide",
    yn = "show",
    En = "showing",
    wn = "click.dismiss.bs.toast",
    Tn = { animation: !0, autohide: !0, delay: 500 },
    Cn = { animation: "boolean", autohide: "boolean", delay: "number" },
    Sn = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this,
            e = i.default.Event("show.bs.toast");
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add("fade");
            var n = function () {
              t._element.classList.remove(En),
                t._element.classList.add(yn),
                i.default(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove(bn),
              u.reflow(this._element),
              this._element.classList.add(En),
              this._config.animation)
            ) {
              var o = u.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(u.TRANSITION_END, n)
                .emulateTransitionEnd(o);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains(yn)) {
            var t = i.default.Event("hide.bs.toast");
            i.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains(yn) &&
              this._element.classList.remove(yn),
            i.default(this._element).off(wn),
            i.default.removeData(this._element, _n),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              Tn,
              i.default(this._element).data(),
              "object" == typeof t && t ? t : {}
            )),
            u.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (e._setListeners = function () {
          var t = this;
          i.default(this._element).on(
            wn,
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (e._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add(bn),
                i.default(t._element).trigger("hidden.bs.toast");
            };
          if ((this._element.classList.remove(yn), this._config.animation)) {
            var n = u.getTransitionDurationFromElement(this._element);
            i.default(this._element)
              .one(u.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (e._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(_n);
            if (
              (o ||
                ((o = new t(this, "object" == typeof e && e)), n.data(_n, o)),
              "string" == typeof e)
            ) {
              if ("undefined" == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](this);
            }
          });
        }),
        r(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.6.2";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return Cn;
            },
          },
          {
            key: "Default",
            get: function () {
              return Tn;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn.toast = Sn._jQueryInterface),
    (i.default.fn.toast.Constructor = Sn),
    (i.default.fn.toast.noConflict = function () {
      return (i.default.fn.toast = vn), Sn._jQueryInterface;
    }),
    (t.Alert = c),
    (t.Button = b),
    (t.Carousel = O),
    (t.Collapse = W),
    (t.Dropdown = le),
    (t.Modal = Se),
    (t.Popover = Je),
    (t.Scrollspy = ln),
    (t.Tab = gn),
    (t.Toast = Sn),
    (t.Tooltip = Ve),
    (t.Util = u),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).axios =
        t());
})(this, function () {
  "use strict";
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      e(t)
    );
  }
  function t(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function r(e, t, r) {
    return (
      t && n(e.prototype, t),
      r && n(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function o(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null == n) return;
        var r,
          o,
          i = [],
          a = !0,
          s = !1;
        try {
          for (
            n = n.call(e);
            !(a = (r = n.next()).done) &&
            (i.push(r.value), !t || i.length !== t);
            a = !0
          );
        } catch (e) {
          (s = !0), (o = e);
        } finally {
          try {
            a || null == n.return || n.return();
          } finally {
            if (s) throw o;
          }
        }
        return i;
      })(e, t) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return i(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return i(e, t);
      })(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function a(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  var s,
    u = Object.prototype.toString,
    c = Object.getPrototypeOf,
    f =
      ((s = Object.create(null)),
      function (e) {
        var t = u.call(e);
        return s[t] || (s[t] = t.slice(8, -1).toLowerCase());
      }),
    l = function (e) {
      return (
        (e = e.toLowerCase()),
        function (t) {
          return f(t) === e;
        }
      );
    },
    d = function (t) {
      return function (n) {
        return e(n) === t;
      };
    },
    p = Array.isArray,
    h = d("undefined");
  var m = l("ArrayBuffer");
  var y = d("string"),
    v = d("function"),
    b = d("number"),
    g = function (t) {
      return null !== t && "object" === e(t);
    },
    w = function (e) {
      if ("object" !== f(e)) return !1;
      var t = c(e);
      return !(
        (null !== t &&
          t !== Object.prototype &&
          null !== Object.getPrototypeOf(t)) ||
        Symbol.toStringTag in e ||
        Symbol.iterator in e
      );
    },
    E = l("Date"),
    O = l("File"),
    S = l("Blob"),
    R = l("FileList"),
    A = l("URLSearchParams");
  function T(t, n) {
    var r,
      o,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      a = i.allOwnKeys,
      s = void 0 !== a && a;
    if (null != t)
      if (("object" !== e(t) && (t = [t]), p(t)))
        for (r = 0, o = t.length; r < o; r++) n.call(null, t[r], r, t);
      else {
        var u,
          c = s ? Object.getOwnPropertyNames(t) : Object.keys(t),
          f = c.length;
        for (r = 0; r < f; r++) (u = c[r]), n.call(null, t[u], u, t);
      }
  }
  function j(e, t) {
    t = t.toLowerCase();
    for (var n, r = Object.keys(e), o = r.length; o-- > 0; )
      if (t === (n = r[o]).toLowerCase()) return n;
    return null;
  }
  var N =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : global,
    x = function (e) {
      return !h(e) && e !== N;
    };
  var C,
    P =
      ((C = "undefined" != typeof Uint8Array && c(Uint8Array)),
      function (e) {
        return C && e instanceof C;
      }),
    k = l("HTMLFormElement"),
    U = (function (e) {
      var t = Object.prototype.hasOwnProperty;
      return function (e, n) {
        return t.call(e, n);
      };
    })(),
    _ = l("RegExp"),
    B = function (e, t) {
      var n = Object.getOwnPropertyDescriptors(e),
        r = {};
      T(n, function (n, o) {
        !1 !== t(n, o, e) && (r[o] = n);
      }),
        Object.defineProperties(e, r);
    },
    F = "abcdefghijklmnopqrstuvwxyz",
    L = "0123456789",
    D = { DIGIT: L, ALPHA: F, ALPHA_DIGIT: F + F.toUpperCase() + L };
  var I = {
    isArray: p,
    isArrayBuffer: m,
    isBuffer: function (e) {
      return (
        null !== e &&
        !h(e) &&
        null !== e.constructor &&
        !h(e.constructor) &&
        v(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
      );
    },
    isFormData: function (e) {
      var t = "[object FormData]";
      return (
        e &&
        (("function" == typeof FormData && e instanceof FormData) ||
          u.call(e) === t ||
          (v(e.toString) && e.toString() === t))
      );
    },
    isArrayBufferView: function (e) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && m(e.buffer);
    },
    isString: y,
    isNumber: b,
    isBoolean: function (e) {
      return !0 === e || !1 === e;
    },
    isObject: g,
    isPlainObject: w,
    isUndefined: h,
    isDate: E,
    isFile: O,
    isBlob: S,
    isRegExp: _,
    isFunction: v,
    isStream: function (e) {
      return g(e) && v(e.pipe);
    },
    isURLSearchParams: A,
    isTypedArray: P,
    isFileList: R,
    forEach: T,
    merge: function e() {
      for (
        var t = (x(this) && this) || {},
          n = t.caseless,
          r = {},
          o = function (t, o) {
            var i = (n && j(r, o)) || o;
            w(r[i]) && w(t)
              ? (r[i] = e(r[i], t))
              : w(t)
              ? (r[i] = e({}, t))
              : p(t)
              ? (r[i] = t.slice())
              : (r[i] = t);
          },
          i = 0,
          a = arguments.length;
        i < a;
        i++
      )
        arguments[i] && T(arguments[i], o);
      return r;
    },
    extend: function (e, t, n) {
      var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        o = r.allOwnKeys;
      return (
        T(
          t,
          function (t, r) {
            n && v(t) ? (e[r] = a(t, n)) : (e[r] = t);
          },
          { allOwnKeys: o }
        ),
        e
      );
    },
    trim: function (e) {
      return e.trim
        ? e.trim()
        : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    },
    stripBOM: function (e) {
      return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
    },
    inherits: function (e, t, n, r) {
      (e.prototype = Object.create(t.prototype, r)),
        (e.prototype.constructor = e),
        Object.defineProperty(e, "super", { value: t.prototype }),
        n && Object.assign(e.prototype, n);
    },
    toFlatObject: function (e, t, n, r) {
      var o,
        i,
        a,
        s = {};
      if (((t = t || {}), null == e)) return t;
      do {
        for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0; )
          (a = o[i]),
            (r && !r(a, e, t)) || s[a] || ((t[a] = e[a]), (s[a] = !0));
        e = !1 !== n && c(e);
      } while (e && (!n || n(e, t)) && e !== Object.prototype);
      return t;
    },
    kindOf: f,
    kindOfTest: l,
    endsWith: function (e, t, n) {
      (e = String(e)),
        (void 0 === n || n > e.length) && (n = e.length),
        (n -= t.length);
      var r = e.indexOf(t, n);
      return -1 !== r && r === n;
    },
    toArray: function (e) {
      if (!e) return null;
      if (p(e)) return e;
      var t = e.length;
      if (!b(t)) return null;
      for (var n = new Array(t); t-- > 0; ) n[t] = e[t];
      return n;
    },
    forEachEntry: function (e, t) {
      for (
        var n, r = (e && e[Symbol.iterator]).call(e);
        (n = r.next()) && !n.done;

      ) {
        var o = n.value;
        t.call(e, o[0], o[1]);
      }
    },
    matchAll: function (e, t) {
      for (var n, r = []; null !== (n = e.exec(t)); ) r.push(n);
      return r;
    },
    isHTMLForm: k,
    hasOwnProperty: U,
    hasOwnProp: U,
    reduceDescriptors: B,
    freezeMethods: function (e) {
      B(e, function (t, n) {
        if (v(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
          return !1;
        var r = e[n];
        v(r) &&
          ((t.enumerable = !1),
          "writable" in t
            ? (t.writable = !1)
            : t.set ||
              (t.set = function () {
                throw Error("Can not rewrite read-only method '" + n + "'");
              }));
      });
    },
    toObjectSet: function (e, t) {
      var n = {},
        r = function (e) {
          e.forEach(function (e) {
            n[e] = !0;
          });
        };
      return p(e) ? r(e) : r(String(e).split(t)), n;
    },
    toCamelCase: function (e) {
      return e
        .toLowerCase()
        .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        });
    },
    noop: function () {},
    toFiniteNumber: function (e, t) {
      return (e = +e), Number.isFinite(e) ? e : t;
    },
    findKey: j,
    global: N,
    isContextDefined: x,
    ALPHABET: D,
    generateString: function () {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : D.ALPHA_DIGIT,
          n = "",
          r = t.length;
        e--;

      )
        n += t[(Math.random() * r) | 0];
      return n;
    },
    isSpecCompliantForm: function (e) {
      return !!(
        e &&
        v(e.append) &&
        "FormData" === e[Symbol.toStringTag] &&
        e[Symbol.iterator]
      );
    },
    toJSONObject: function (e) {
      var t = new Array(10);
      return (function e(n, r) {
        if (g(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            t[r] = n;
            var o = p(n) ? [] : {};
            return (
              T(n, function (t, n) {
                var i = e(t, r + 1);
                !h(i) && (o[n] = i);
              }),
              (t[r] = void 0),
              o
            );
          }
        }
        return n;
      })(e, 0);
    },
  };
  function q(e, t, n, r, o) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      o && (this.response = o);
  }
  I.inherits(q, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: I.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  var M = q.prototype,
    z = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
  ].forEach(function (e) {
    z[e] = { value: e };
  }),
    Object.defineProperties(q, z),
    Object.defineProperty(M, "isAxiosError", { value: !0 }),
    (q.from = function (e, t, n, r, o, i) {
      var a = Object.create(M);
      return (
        I.toFlatObject(
          e,
          a,
          function (e) {
            return e !== Error.prototype;
          },
          function (e) {
            return "isAxiosError" !== e;
          }
        ),
        q.call(a, e.message, t, n, r, o),
        (a.cause = e),
        (a.name = e.name),
        i && Object.assign(a, i),
        a
      );
    });
  function H(e) {
    return I.isPlainObject(e) || I.isArray(e);
  }
  function J(e) {
    return I.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function W(e, t, n) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = J(e)), !n && t ? "[" + e + "]" : e;
          })
          .join(n ? "." : "")
      : t;
  }
  var K = I.toFlatObject(I, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  function V(t, n, r) {
    if (!I.isObject(t)) throw new TypeError("target must be an object");
    n = n || new FormData();
    var o = (r = I.toFlatObject(
        r,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !I.isUndefined(t[e]);
        }
      )).metaTokens,
      i = r.visitor || f,
      a = r.dots,
      s = r.indexes,
      u =
        (r.Blob || ("undefined" != typeof Blob && Blob)) &&
        I.isSpecCompliantForm(n);
    if (!I.isFunction(i)) throw new TypeError("visitor must be a function");
    function c(e) {
      if (null === e) return "";
      if (I.isDate(e)) return e.toISOString();
      if (!u && I.isBlob(e))
        throw new q("Blob is not supported. Use a Buffer instead.");
      return I.isArrayBuffer(e) || I.isTypedArray(e)
        ? u && "function" == typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function f(t, r, i) {
      var u = t;
      if (t && !i && "object" === e(t))
        if (I.endsWith(r, "{}"))
          (r = o ? r : r.slice(0, -2)), (t = JSON.stringify(t));
        else if (
          (I.isArray(t) &&
            (function (e) {
              return I.isArray(e) && !e.some(H);
            })(t)) ||
          ((I.isFileList(t) || I.endsWith(r, "[]")) && (u = I.toArray(t)))
        )
          return (
            (r = J(r)),
            u.forEach(function (e, t) {
              !I.isUndefined(e) &&
                null !== e &&
                n.append(
                  !0 === s ? W([r], t, a) : null === s ? r : r + "[]",
                  c(e)
                );
            }),
            !1
          );
      return !!H(t) || (n.append(W(i, r, a), c(t)), !1);
    }
    var l = [],
      d = Object.assign(K, {
        defaultVisitor: f,
        convertValue: c,
        isVisitable: H,
      });
    if (!I.isObject(t)) throw new TypeError("data must be an object");
    return (
      (function e(t, r) {
        if (!I.isUndefined(t)) {
          if (-1 !== l.indexOf(t))
            throw Error("Circular reference detected in " + r.join("."));
          l.push(t),
            I.forEach(t, function (t, o) {
              !0 ===
                (!(I.isUndefined(t) || null === t) &&
                  i.call(n, t, I.isString(o) ? o.trim() : o, r, d)) &&
                e(t, r ? r.concat(o) : [o]);
            }),
            l.pop();
        }
      })(t),
      n
    );
  }
  function G(e) {
    var t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function $(e, t) {
    (this._pairs = []), e && V(e, this, t);
  }
  var X = $.prototype;
  function Q(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function Z(e, t, n) {
    if (!t) return e;
    var r,
      o = (n && n.encode) || Q,
      i = n && n.serialize;
    if (
      (r = i
        ? i(t, n)
        : I.isURLSearchParams(t)
        ? t.toString()
        : new $(t, n).toString(o))
    ) {
      var a = e.indexOf("#");
      -1 !== a && (e = e.slice(0, a)),
        (e += (-1 === e.indexOf("?") ? "?" : "&") + r);
    }
    return e;
  }
  (X.append = function (e, t) {
    this._pairs.push([e, t]);
  }),
    (X.toString = function (e) {
      var t = e
        ? function (t) {
            return e.call(this, t, G);
          }
        : G;
      return this._pairs
        .map(function (e) {
          return t(e[0]) + "=" + t(e[1]);
        }, "")
        .join("&");
    });
  var Y,
    ee = (function () {
      function e() {
        t(this, e), (this.handlers = []);
      }
      return (
        r(e, [
          {
            key: "use",
            value: function (e, t, n) {
              return (
                this.handlers.push({
                  fulfilled: e,
                  rejected: t,
                  synchronous: !!n && n.synchronous,
                  runWhen: n ? n.runWhen : null,
                }),
                this.handlers.length - 1
              );
            },
          },
          {
            key: "eject",
            value: function (e) {
              this.handlers[e] && (this.handlers[e] = null);
            },
          },
          {
            key: "clear",
            value: function () {
              this.handlers && (this.handlers = []);
            },
          },
          {
            key: "forEach",
            value: function (e) {
              I.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            },
          },
        ]),
        e
      );
    })(),
    te = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    ne = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" != typeof URLSearchParams ? URLSearchParams : $,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null,
      },
      isStandardBrowserEnv:
        ("undefined" == typeof navigator ||
          ("ReactNative" !== (Y = navigator.product) &&
            "NativeScript" !== Y &&
            "NS" !== Y)) &&
        "undefined" != typeof window &&
        "undefined" != typeof document,
      isStandardBrowserWebWorkerEnv:
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        "function" == typeof self.importScripts,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };
  function re(e) {
    function t(e, n, r, o) {
      var i = e[o++],
        a = Number.isFinite(+i),
        s = o >= e.length;
      return (
        (i = !i && I.isArray(r) ? r.length : i),
        s
          ? (I.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !a)
          : ((r[i] && I.isObject(r[i])) || (r[i] = []),
            t(e, n, r[i], o) &&
              I.isArray(r[i]) &&
              (r[i] = (function (e) {
                var t,
                  n,
                  r = {},
                  o = Object.keys(e),
                  i = o.length;
                for (t = 0; t < i; t++) r[(n = o[t])] = e[n];
                return r;
              })(r[i])),
            !a)
      );
    }
    if (I.isFormData(e) && I.isFunction(e.entries)) {
      var n = {};
      return (
        I.forEachEntry(e, function (e, r) {
          t(
            (function (e) {
              return I.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                return "[]" === e[0] ? "" : e[1] || e[0];
              });
            })(e),
            r,
            n,
            0
          );
        }),
        n
      );
    }
    return null;
  }
  var oe = { "Content-Type": void 0 };
  var ie = {
    transitional: te,
    adapter: ["xhr", "http"],
    transformRequest: [
      function (e, t) {
        var n,
          r = t.getContentType() || "",
          o = r.indexOf("application/json") > -1,
          i = I.isObject(e);
        if ((i && I.isHTMLForm(e) && (e = new FormData(e)), I.isFormData(e)))
          return o && o ? JSON.stringify(re(e)) : e;
        if (
          I.isArrayBuffer(e) ||
          I.isBuffer(e) ||
          I.isStream(e) ||
          I.isFile(e) ||
          I.isBlob(e)
        )
          return e;
        if (I.isArrayBufferView(e)) return e.buffer;
        if (I.isURLSearchParams(e))
          return (
            t.setContentType(
              "application/x-www-form-urlencoded;charset=utf-8",
              !1
            ),
            e.toString()
          );
        if (i) {
          if (r.indexOf("application/x-www-form-urlencoded") > -1)
            return (function (e, t) {
              return V(
                e,
                new ne.classes.URLSearchParams(),
                Object.assign(
                  {
                    visitor: function (e, t, n, r) {
                      return ne.isNode && I.isBuffer(e)
                        ? (this.append(t, e.toString("base64")), !1)
                        : r.defaultVisitor.apply(this, arguments);
                    },
                  },
                  t
                )
              );
            })(e, this.formSerializer).toString();
          if ((n = I.isFileList(e)) || r.indexOf("multipart/form-data") > -1) {
            var a = this.env && this.env.FormData;
            return V(
              n ? { "files[]": e } : e,
              a && new a(),
              this.formSerializer
            );
          }
        }
        return i || o
          ? (t.setContentType("application/json", !1),
            (function (e, t, n) {
              if (I.isString(e))
                try {
                  return (t || JSON.parse)(e), I.trim(e);
                } catch (e) {
                  if ("SyntaxError" !== e.name) throw e;
                }
              return (n || JSON.stringify)(e);
            })(e))
          : e;
      },
    ],
    transformResponse: [
      function (e) {
        var t = this.transitional || ie.transitional,
          n = t && t.forcedJSONParsing,
          r = "json" === this.responseType;
        if (e && I.isString(e) && ((n && !this.responseType) || r)) {
          var o = !(t && t.silentJSONParsing) && r;
          try {
            return JSON.parse(e);
          } catch (e) {
            if (o) {
              if ("SyntaxError" === e.name)
                throw q.from(e, q.ERR_BAD_RESPONSE, this, null, this.response);
              throw e;
            }
          }
        }
        return e;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: ne.classes.FormData, Blob: ne.classes.Blob },
    validateStatus: function (e) {
      return e >= 200 && e < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  I.forEach(["delete", "get", "head"], function (e) {
    ie.headers[e] = {};
  }),
    I.forEach(["post", "put", "patch"], function (e) {
      ie.headers[e] = I.merge(oe);
    });
  var ae = ie,
    se = I.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    ue = Symbol("internals");
  function ce(e) {
    return e && String(e).trim().toLowerCase();
  }
  function fe(e) {
    return !1 === e || null == e ? e : I.isArray(e) ? e.map(fe) : String(e);
  }
  function le(e, t, n, r, o) {
    return I.isFunction(r)
      ? r.call(this, t, n)
      : (o && (t = n),
        I.isString(t)
          ? I.isString(r)
            ? -1 !== t.indexOf(r)
            : I.isRegExp(r)
            ? r.test(t)
            : void 0
          : void 0);
  }
  var de = (function (e, n) {
    function i(e) {
      t(this, i), e && this.set(e);
    }
    return (
      r(
        i,
        [
          {
            key: "set",
            value: function (e, t, n) {
              var r = this;
              function o(e, t, n) {
                var o = ce(t);
                if (!o)
                  throw new Error("header name must be a non-empty string");
                var i = I.findKey(r, o);
                (!i ||
                  void 0 === r[i] ||
                  !0 === n ||
                  (void 0 === n && !1 !== r[i])) &&
                  (r[i || t] = fe(e));
              }
              var i,
                a,
                s,
                u,
                c,
                f = function (e, t) {
                  return I.forEach(e, function (e, n) {
                    return o(e, n, t);
                  });
                };
              return (
                I.isPlainObject(e) || e instanceof this.constructor
                  ? f(e, t)
                  : I.isString(e) &&
                    (e = e.trim()) &&
                    !/^[-_a-zA-Z]+$/.test(e.trim())
                  ? f(
                      ((c = {}),
                      (i = e) &&
                        i.split("\n").forEach(function (e) {
                          (u = e.indexOf(":")),
                            (a = e.substring(0, u).trim().toLowerCase()),
                            (s = e.substring(u + 1).trim()),
                            !a ||
                              (c[a] && se[a]) ||
                              ("set-cookie" === a
                                ? c[a]
                                  ? c[a].push(s)
                                  : (c[a] = [s])
                                : (c[a] = c[a] ? c[a] + ", " + s : s));
                        }),
                      c),
                      t
                    )
                  : null != e && o(t, e, n),
                this
              );
            },
          },
          {
            key: "get",
            value: function (e, t) {
              if ((e = ce(e))) {
                var n = I.findKey(this, e);
                if (n) {
                  var r = this[n];
                  if (!t) return r;
                  if (!0 === t)
                    return (function (e) {
                      for (
                        var t,
                          n = Object.create(null),
                          r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                        (t = r.exec(e));

                      )
                        n[t[1]] = t[2];
                      return n;
                    })(r);
                  if (I.isFunction(t)) return t.call(this, r, n);
                  if (I.isRegExp(t)) return t.exec(r);
                  throw new TypeError("parser must be boolean|regexp|function");
                }
              }
            },
          },
          {
            key: "has",
            value: function (e, t) {
              if ((e = ce(e))) {
                var n = I.findKey(this, e);
                return !(
                  !n ||
                  void 0 === this[n] ||
                  (t && !le(0, this[n], n, t))
                );
              }
              return !1;
            },
          },
          {
            key: "delete",
            value: function (e, t) {
              var n = this,
                r = !1;
              function o(e) {
                if ((e = ce(e))) {
                  var o = I.findKey(n, e);
                  !o || (t && !le(0, n[o], o, t)) || (delete n[o], (r = !0));
                }
              }
              return I.isArray(e) ? e.forEach(o) : o(e), r;
            },
          },
          {
            key: "clear",
            value: function (e) {
              for (var t = Object.keys(this), n = t.length, r = !1; n--; ) {
                var o = t[n];
                (e && !le(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
              }
              return r;
            },
          },
          {
            key: "normalize",
            value: function (e) {
              var t = this,
                n = {};
              return (
                I.forEach(this, function (r, o) {
                  var i = I.findKey(n, o);
                  if (i) return (t[i] = fe(r)), void delete t[o];
                  var a = e
                    ? (function (e) {
                        return e
                          .trim()
                          .toLowerCase()
                          .replace(/([a-z\d])(\w*)/g, function (e, t, n) {
                            return t.toUpperCase() + n;
                          });
                      })(o)
                    : String(o).trim();
                  a !== o && delete t[o], (t[a] = fe(r)), (n[a] = !0);
                }),
                this
              );
            },
          },
          {
            key: "concat",
            value: function () {
              for (
                var e, t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return (e = this.constructor).concat.apply(e, [this].concat(n));
            },
          },
          {
            key: "toJSON",
            value: function (e) {
              var t = Object.create(null);
              return (
                I.forEach(this, function (n, r) {
                  null != n &&
                    !1 !== n &&
                    (t[r] = e && I.isArray(n) ? n.join(", ") : n);
                }),
                t
              );
            },
          },
          {
            key: Symbol.iterator,
            value: function () {
              return Object.entries(this.toJSON())[Symbol.iterator]();
            },
          },
          {
            key: "toString",
            value: function () {
              return Object.entries(this.toJSON())
                .map(function (e) {
                  var t = o(e, 2);
                  return t[0] + ": " + t[1];
                })
                .join("\n");
            },
          },
          {
            key: Symbol.toStringTag,
            get: function () {
              return "AxiosHeaders";
            },
          },
        ],
        [
          {
            key: "from",
            value: function (e) {
              return e instanceof this ? e : new this(e);
            },
          },
          {
            key: "concat",
            value: function (e) {
              for (
                var t = new this(e),
                  n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              return (
                r.forEach(function (e) {
                  return t.set(e);
                }),
                t
              );
            },
          },
          {
            key: "accessor",
            value: function (e) {
              var t = (this[ue] = this[ue] = { accessors: {} }).accessors,
                n = this.prototype;
              function r(e) {
                var r = ce(e);
                t[r] ||
                  (!(function (e, t) {
                    var n = I.toCamelCase(" " + t);
                    ["get", "set", "has"].forEach(function (r) {
                      Object.defineProperty(e, r + n, {
                        value: function (e, n, o) {
                          return this[r].call(this, t, e, n, o);
                        },
                        configurable: !0,
                      });
                    });
                  })(n, e),
                  (t[r] = !0));
              }
              return I.isArray(e) ? e.forEach(r) : r(e), this;
            },
          },
        ]
      ),
      i
    );
  })();
  de.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
  ]),
    I.freezeMethods(de.prototype),
    I.freezeMethods(de);
  var pe = de;
  function he(e, t) {
    var n = this || ae,
      r = t || n,
      o = pe.from(r.headers),
      i = r.data;
    return (
      I.forEach(e, function (e) {
        i = e.call(n, i, o.normalize(), t ? t.status : void 0);
      }),
      o.normalize(),
      i
    );
  }
  function me(e) {
    return !(!e || !e.__CANCEL__);
  }
  function ye(e, t, n) {
    q.call(this, null == e ? "canceled" : e, q.ERR_CANCELED, t, n),
      (this.name = "CanceledError");
  }
  I.inherits(ye, q, { __CANCEL__: !0 });
  var ve = ne.isStandardBrowserEnv
    ? {
        write: function (e, t, n, r, o, i) {
          var a = [];
          a.push(e + "=" + encodeURIComponent(t)),
            I.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            I.isString(r) && a.push("path=" + r),
            I.isString(o) && a.push("domain=" + o),
            !0 === i && a.push("secure"),
            (document.cookie = a.join("; "));
        },
        read: function (e) {
          var t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function (e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
  function be(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? (function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        })(e, t)
      : t;
  }
  var ge = ne.isStandardBrowserEnv
    ? (function () {
        var e,
          t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        function r(e) {
          var r = e;
          return (
            t && (n.setAttribute("href", r), (r = n.href)),
            n.setAttribute("href", r),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (e = r(window.location.href)),
          function (t) {
            var n = I.isString(t) ? r(t) : t;
            return n.protocol === e.protocol && n.host === e.host;
          }
        );
      })()
    : function () {
        return !0;
      };
  function we(e, t) {
    var n = 0,
      r = (function (e, t) {
        e = e || 10;
        var n,
          r = new Array(e),
          o = new Array(e),
          i = 0,
          a = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (s) {
            var u = Date.now(),
              c = o[a];
            n || (n = u), (r[i] = s), (o[i] = u);
            for (var f = a, l = 0; f !== i; ) (l += r[f++]), (f %= e);
            if (((i = (i + 1) % e) === a && (a = (a + 1) % e), !(u - n < t))) {
              var d = c && u - c;
              return d ? Math.round((1e3 * l) / d) : void 0;
            }
          }
        );
      })(50, 250);
    return function (o) {
      var i = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        s = i - n,
        u = r(s);
      n = i;
      var c = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: s,
        rate: u || void 0,
        estimated: u && a && i <= a ? (a - i) / u : void 0,
        event: o,
      };
      (c[t ? "download" : "upload"] = !0), e(c);
    };
  }
  var Ee = {
    http: null,
    xhr:
      "undefined" != typeof XMLHttpRequest &&
      function (e) {
        return new Promise(function (t, n) {
          var r,
            o = e.data,
            i = pe.from(e.headers).normalize(),
            a = e.responseType;
          function s() {
            e.cancelToken && e.cancelToken.unsubscribe(r),
              e.signal && e.signal.removeEventListener("abort", r);
          }
          I.isFormData(o) &&
            (ne.isStandardBrowserEnv || ne.isStandardBrowserWebWorkerEnv) &&
            i.setContentType(!1);
          var u = new XMLHttpRequest();
          if (e.auth) {
            var c = e.auth.username || "",
              f = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            i.set("Authorization", "Basic " + btoa(c + ":" + f));
          }
          var l = be(e.baseURL, e.url);
          function d() {
            if (u) {
              var r = pe.from(
                "getAllResponseHeaders" in u && u.getAllResponseHeaders()
              );
              !(function (e, t, n) {
                var r = n.config.validateStatus;
                n.status && r && !r(n.status)
                  ? t(
                      new q(
                        "Request failed with status code " + n.status,
                        [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][
                          Math.floor(n.status / 100) - 4
                        ],
                        n.config,
                        n.request,
                        n
                      )
                    )
                  : e(n);
              })(
                function (e) {
                  t(e), s();
                },
                function (e) {
                  n(e), s();
                },
                {
                  data:
                    a && "text" !== a && "json" !== a
                      ? u.response
                      : u.responseText,
                  status: u.status,
                  statusText: u.statusText,
                  headers: r,
                  config: e,
                  request: u,
                }
              ),
                (u = null);
            }
          }
          if (
            (u.open(
              e.method.toUpperCase(),
              Z(l, e.params, e.paramsSerializer),
              !0
            ),
            (u.timeout = e.timeout),
            "onloadend" in u
              ? (u.onloadend = d)
              : (u.onreadystatechange = function () {
                  u &&
                    4 === u.readyState &&
                    (0 !== u.status ||
                      (u.responseURL &&
                        0 === u.responseURL.indexOf("file:"))) &&
                    setTimeout(d);
                }),
            (u.onabort = function () {
              u &&
                (n(new q("Request aborted", q.ECONNABORTED, e, u)), (u = null));
            }),
            (u.onerror = function () {
              n(new q("Network Error", q.ERR_NETWORK, e, u)), (u = null);
            }),
            (u.ontimeout = function () {
              var t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                r = e.transitional || te;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                n(
                  new q(
                    t,
                    r.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
                    e,
                    u
                  )
                ),
                (u = null);
            }),
            ne.isStandardBrowserEnv)
          ) {
            var p =
              (e.withCredentials || ge(l)) &&
              e.xsrfCookieName &&
              ve.read(e.xsrfCookieName);
            p && i.set(e.xsrfHeaderName, p);
          }
          void 0 === o && i.setContentType(null),
            "setRequestHeader" in u &&
              I.forEach(i.toJSON(), function (e, t) {
                u.setRequestHeader(t, e);
              }),
            I.isUndefined(e.withCredentials) ||
              (u.withCredentials = !!e.withCredentials),
            a && "json" !== a && (u.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
              u.addEventListener("progress", we(e.onDownloadProgress, !0)),
            "function" == typeof e.onUploadProgress &&
              u.upload &&
              u.upload.addEventListener("progress", we(e.onUploadProgress)),
            (e.cancelToken || e.signal) &&
              ((r = function (t) {
                u &&
                  (n(!t || t.type ? new ye(null, e, u) : t),
                  u.abort(),
                  (u = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(r),
              e.signal &&
                (e.signal.aborted
                  ? r()
                  : e.signal.addEventListener("abort", r)));
          var h,
            m = ((h = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l)) && h[1]) || "";
          m && -1 === ne.protocols.indexOf(m)
            ? n(new q("Unsupported protocol " + m + ":", q.ERR_BAD_REQUEST, e))
            : u.send(o || null);
        });
      },
  };
  I.forEach(Ee, function (e, t) {
    if (e) {
      try {
        Object.defineProperty(e, "name", { value: t });
      } catch (e) {}
      Object.defineProperty(e, "adapterName", { value: t });
    }
  });
  var Oe = function (e) {
    for (
      var t, n, r = (e = I.isArray(e) ? e : [e]).length, o = 0;
      o < r && ((t = e[o]), !(n = I.isString(t) ? Ee[t.toLowerCase()] : t));
      o++
    );
    if (!n) {
      if (!1 === n)
        throw new q(
          "Adapter ".concat(t, " is not supported by the environment"),
          "ERR_NOT_SUPPORT"
        );
      throw new Error(
        I.hasOwnProp(Ee, t)
          ? "Adapter '".concat(t, "' is not available in the build")
          : "Unknown adapter '".concat(t, "'")
      );
    }
    if (!I.isFunction(n)) throw new TypeError("adapter is not a function");
    return n;
  };
  function Se(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new ye(null, e);
  }
  function Re(e) {
    return (
      Se(e),
      (e.headers = pe.from(e.headers)),
      (e.data = he.call(e, e.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(e.method) &&
        e.headers.setContentType("application/x-www-form-urlencoded", !1),
      Oe(e.adapter || ae.adapter)(e).then(
        function (t) {
          return (
            Se(e),
            (t.data = he.call(e, e.transformResponse, t)),
            (t.headers = pe.from(t.headers)),
            t
          );
        },
        function (t) {
          return (
            me(t) ||
              (Se(e),
              t &&
                t.response &&
                ((t.response.data = he.call(
                  e,
                  e.transformResponse,
                  t.response
                )),
                (t.response.headers = pe.from(t.response.headers)))),
            Promise.reject(t)
          );
        }
      )
    );
  }
  var Ae = function (e) {
    return e instanceof pe ? e.toJSON() : e;
  };
  function Te(e, t) {
    t = t || {};
    var n = {};
    function r(e, t, n) {
      return I.isPlainObject(e) && I.isPlainObject(t)
        ? I.merge.call({ caseless: n }, e, t)
        : I.isPlainObject(t)
        ? I.merge({}, t)
        : I.isArray(t)
        ? t.slice()
        : t;
    }
    function o(e, t, n) {
      return I.isUndefined(t)
        ? I.isUndefined(e)
          ? void 0
          : r(void 0, e, n)
        : r(e, t, n);
    }
    function i(e, t) {
      if (!I.isUndefined(t)) return r(void 0, t);
    }
    function a(e, t) {
      return I.isUndefined(t)
        ? I.isUndefined(e)
          ? void 0
          : r(void 0, e)
        : r(void 0, t);
    }
    function s(n, o, i) {
      return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0;
    }
    var u = {
      url: i,
      method: i,
      data: i,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
      headers: function (e, t) {
        return o(Ae(e), Ae(t), !0);
      },
    };
    return (
      I.forEach(Object.keys(e).concat(Object.keys(t)), function (r) {
        var i = u[r] || o,
          a = i(e[r], t[r], r);
        (I.isUndefined(a) && i !== s) || (n[r] = a);
      }),
      n
    );
  }
  var je = "1.3.4",
    Ne = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (t, n) {
      Ne[t] = function (r) {
        return e(r) === t || "a" + (n < 1 ? "n " : " ") + t;
      };
    }
  );
  var xe = {};
  Ne.transitional = function (e, t, n) {
    function r(e, t) {
      return (
        "[Axios v1.3.4] Transitional option '" +
        e +
        "'" +
        t +
        (n ? ". " + n : "")
      );
    }
    return function (n, o, i) {
      if (!1 === e)
        throw new q(
          r(o, " has been removed" + (t ? " in " + t : "")),
          q.ERR_DEPRECATED
        );
      return (
        t &&
          !xe[o] &&
          ((xe[o] = !0),
          console.warn(
            r(
              o,
              " has been deprecated since v" +
                t +
                " and will be removed in the near future"
            )
          )),
        !e || e(n, o, i)
      );
    };
  };
  var Ce = {
      assertOptions: function (t, n, r) {
        if ("object" !== e(t))
          throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
        for (var o = Object.keys(t), i = o.length; i-- > 0; ) {
          var a = o[i],
            s = n[a];
          if (s) {
            var u = t[a],
              c = void 0 === u || s(u, a, t);
            if (!0 !== c)
              throw new q(
                "option " + a + " must be " + c,
                q.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== r)
            throw new q("Unknown option " + a, q.ERR_BAD_OPTION);
        }
      },
      validators: Ne,
    },
    Pe = Ce.validators,
    ke = (function () {
      function e(n) {
        t(this, e),
          (this.defaults = n),
          (this.interceptors = { request: new ee(), response: new ee() });
      }
      return (
        r(e, [
          {
            key: "request",
            value: function (e, t) {
              "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {});
              var n,
                r = (t = Te(this.defaults, t)),
                o = r.transitional,
                i = r.paramsSerializer,
                a = r.headers;
              void 0 !== o &&
                Ce.assertOptions(
                  o,
                  {
                    silentJSONParsing: Pe.transitional(Pe.boolean),
                    forcedJSONParsing: Pe.transitional(Pe.boolean),
                    clarifyTimeoutError: Pe.transitional(Pe.boolean),
                  },
                  !1
                ),
                void 0 !== i &&
                  Ce.assertOptions(
                    i,
                    { encode: Pe.function, serialize: Pe.function },
                    !0
                  ),
                (t.method = (
                  t.method ||
                  this.defaults.method ||
                  "get"
                ).toLowerCase()),
                (n = a && I.merge(a.common, a[t.method])) &&
                  I.forEach(
                    ["delete", "get", "head", "post", "put", "patch", "common"],
                    function (e) {
                      delete a[e];
                    }
                  ),
                (t.headers = pe.concat(n, a));
              var s = [],
                u = !0;
              this.interceptors.request.forEach(function (e) {
                ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
                  ((u = u && e.synchronous),
                  s.unshift(e.fulfilled, e.rejected));
              });
              var c,
                f = [];
              this.interceptors.response.forEach(function (e) {
                f.push(e.fulfilled, e.rejected);
              });
              var l,
                d = 0;
              if (!u) {
                var p = [Re.bind(this), void 0];
                for (
                  p.unshift.apply(p, s),
                    p.push.apply(p, f),
                    l = p.length,
                    c = Promise.resolve(t);
                  d < l;

                )
                  c = c.then(p[d++], p[d++]);
                return c;
              }
              l = s.length;
              var h = t;
              for (d = 0; d < l; ) {
                var m = s[d++],
                  y = s[d++];
                try {
                  h = m(h);
                } catch (e) {
                  y.call(this, e);
                  break;
                }
              }
              try {
                c = Re.call(this, h);
              } catch (e) {
                return Promise.reject(e);
              }
              for (d = 0, l = f.length; d < l; ) c = c.then(f[d++], f[d++]);
              return c;
            },
          },
          {
            key: "getUri",
            value: function (e) {
              return Z(
                be((e = Te(this.defaults, e)).baseURL, e.url),
                e.params,
                e.paramsSerializer
              );
            },
          },
        ]),
        e
      );
    })();
  I.forEach(["delete", "get", "head", "options"], function (e) {
    ke.prototype[e] = function (t, n) {
      return this.request(
        Te(n || {}, { method: e, url: t, data: (n || {}).data })
      );
    };
  }),
    I.forEach(["post", "put", "patch"], function (e) {
      function t(t) {
        return function (n, r, o) {
          return this.request(
            Te(o || {}, {
              method: e,
              headers: t ? { "Content-Type": "multipart/form-data" } : {},
              url: n,
              data: r,
            })
          );
        };
      }
      (ke.prototype[e] = t()), (ke.prototype[e + "Form"] = t(!0));
    });
  var Ue = ke,
    _e = (function () {
      function e(n) {
        if ((t(this, e), "function" != typeof n))
          throw new TypeError("executor must be a function.");
        var r;
        this.promise = new Promise(function (e) {
          r = e;
        });
        var o = this;
        this.promise.then(function (e) {
          if (o._listeners) {
            for (var t = o._listeners.length; t-- > 0; ) o._listeners[t](e);
            o._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var t,
              n = new Promise(function (e) {
                o.subscribe(e), (t = e);
              }).then(e);
            return (
              (n.cancel = function () {
                o.unsubscribe(t);
              }),
              n
            );
          }),
          n(function (e, t, n) {
            o.reason || ((o.reason = new ye(e, t, n)), r(o.reason));
          });
      }
      return (
        r(
          e,
          [
            {
              key: "throwIfRequested",
              value: function () {
                if (this.reason) throw this.reason;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                this.reason
                  ? e(this.reason)
                  : this._listeners
                  ? this._listeners.push(e)
                  : (this._listeners = [e]);
              },
            },
            {
              key: "unsubscribe",
              value: function (e) {
                if (this._listeners) {
                  var t = this._listeners.indexOf(e);
                  -1 !== t && this._listeners.splice(t, 1);
                }
              },
            },
          ],
          [
            {
              key: "source",
              value: function () {
                var t;
                return {
                  token: new e(function (e) {
                    t = e;
                  }),
                  cancel: t,
                };
              },
            },
          ]
        ),
        e
      );
    })();
  var Be = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
  };
  Object.entries(Be).forEach(function (e) {
    var t = o(e, 2),
      n = t[0],
      r = t[1];
    Be[r] = n;
  });
  var Fe = Be;
  var Le = (function e(t) {
    var n = new Ue(t),
      r = a(Ue.prototype.request, n);
    return (
      I.extend(r, Ue.prototype, n, { allOwnKeys: !0 }),
      I.extend(r, n, null, { allOwnKeys: !0 }),
      (r.create = function (n) {
        return e(Te(t, n));
      }),
      r
    );
  })(ae);
  return (
    (Le.Axios = Ue),
    (Le.CanceledError = ye),
    (Le.CancelToken = _e),
    (Le.isCancel = me),
    (Le.VERSION = je),
    (Le.toFormData = V),
    (Le.AxiosError = q),
    (Le.Cancel = Le.CanceledError),
    (Le.all = function (e) {
      return Promise.all(e);
    }),
    (Le.spread = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    }),
    (Le.isAxiosError = function (e) {
      return I.isObject(e) && !0 === e.isAxiosError;
    }),
    (Le.mergeConfig = Te),
    (Le.AxiosHeaders = pe),
    (Le.formToJSON = function (e) {
      return re(I.isHTMLForm(e) ? new FormData(e) : e);
    }),
    (Le.HttpStatusCode = Fe),
    (Le.default = Le),
    Le
  );
});
//# sourceMappingURL=axios.min.js.map

/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Toastify = factory();
  }
})(this, function (global) {
  // Object initialization
  var Toastify = function (options) {
      // Returning a new init object
      return new Toastify.lib.init(options);
    },
    // Library version
    version = "1.12.0";

  // Set the default global options
  Toastify.defaults = {
    oldestFirst: true,
    text: "Toastify is awesome!",
    node: undefined,
    duration: 3000,
    selector: undefined,
    callback: function () {},
    destination: undefined,
    newWindow: false,
    close: false,
    gravity: "toastify-top",
    positionLeft: false,
    position: "",
    backgroundColor: "",
    avatar: "",
    className: "",
    stopOnFocus: true,
    onClick: function () {},
    offset: { x: 0, y: 0 },
    escapeMarkup: true,
    ariaLive: "polite",
    style: { background: "" },
  };

  // Defining the prototype of the object
  Toastify.lib = Toastify.prototype = {
    toastify: version,

    constructor: Toastify,

    // Initializing the object with required parameters
    init: function (options) {
      // Verifying and validating the input object
      if (!options) {
        options = {};
      }

      // Creating the options object
      this.options = {};

      this.toastElement = null;

      // Validating the options
      this.options.text = options.text || Toastify.defaults.text; // Display message
      this.options.node = options.node || Toastify.defaults.node; // Display content as node
      this.options.duration =
        options.duration === 0
          ? 0
          : options.duration || Toastify.defaults.duration; // Display duration
      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
      this.options.destination =
        options.destination || Toastify.defaults.destination; // On-click destination
      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
      this.options.gravity =
        options.gravity === "bottom"
          ? "toastify-bottom"
          : Toastify.defaults.gravity; // toast position - top or bottom
      this.options.positionLeft =
        options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
      this.options.backgroundColor =
        options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
      this.options.stopOnFocus =
        options.stopOnFocus === undefined
          ? Toastify.defaults.stopOnFocus
          : options.stopOnFocus; // stop timeout on focus
      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
      this.options.escapeMarkup =
        options.escapeMarkup !== undefined
          ? options.escapeMarkup
          : Toastify.defaults.escapeMarkup;
      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;
      this.options.style = options.style || Toastify.defaults.style;
      if (options.backgroundColor) {
        this.options.style.background = options.backgroundColor;
      }

      // Returning the current object for chaining functions
      return this;
    },

    // Building the DOM element
    buildToast: function () {
      // Validating if the options are defined
      if (!this.options) {
        throw "Toastify is not initialized";
      }

      // Creating the DOM object
      var divElement = document.createElement("div");
      divElement.className = "toastify on " + this.options.className;

      // Positioning toast to left or right or center
      if (!!this.options.position) {
        divElement.className += " toastify-" + this.options.position;
      } else {
        // To be depreciated in further versions
        if (this.options.positionLeft === true) {
          divElement.className += " toastify-left";
          console.warn(
            "Property `positionLeft` will be depreciated in further versions. Please use `position` instead."
          );
        } else {
          // Default position
          divElement.className += " toastify-right";
        }
      }

      // Assigning gravity of element
      divElement.className += " " + this.options.gravity;

      if (this.options.backgroundColor) {
        // This is being deprecated in favor of using the style HTML DOM property
        console.warn(
          'DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'
        );
      }

      // Loop through our style object and apply styles to divElement
      for (var property in this.options.style) {
        divElement.style[property] = this.options.style[property];
      }

      // Announce the toast to screen readers
      if (this.options.ariaLive) {
        divElement.setAttribute("aria-live", this.options.ariaLive);
      }

      // Adding the toast message/node
      if (
        this.options.node &&
        this.options.node.nodeType === Node.ELEMENT_NODE
      ) {
        // If we have a valid node, we insert it
        divElement.appendChild(this.options.node);
      } else {
        if (this.options.escapeMarkup) {
          divElement.innerText = this.options.text;
        } else {
          divElement.innerHTML = this.options.text;
        }

        if (this.options.avatar !== "") {
          var avatarElement = document.createElement("img");
          avatarElement.src = this.options.avatar;

          avatarElement.className = "toastify-avatar";

          if (
            this.options.position == "left" ||
            this.options.positionLeft === true
          ) {
            // Adding close icon on the left of content
            divElement.appendChild(avatarElement);
          } else {
            // Adding close icon on the right of content
            divElement.insertAdjacentElement("afterbegin", avatarElement);
          }
        }
      }

      // Adding a close icon to the toast
      if (this.options.close === true) {
        // Create a span for close element
        var closeElement = document.createElement("button");
        closeElement.type = "button";
        closeElement.setAttribute("aria-label", "Close");
        closeElement.className = "toast-close";
        closeElement.innerHTML = "&#10006;";

        // Triggering the removal of toast from DOM on close click
        closeElement.addEventListener(
          "click",
          function (event) {
            event.stopPropagation();
            this.removeElement(this.toastElement);
            window.clearTimeout(this.toastElement.timeOutValue);
          }.bind(this)
        );

        //Calculating screen width
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

        // Adding the close icon to the toast element
        // Display on the right if screen width is less than or equal to 360px
        if (
          (this.options.position == "left" ||
            this.options.positionLeft === true) &&
          width > 360
        ) {
          // Adding close icon on the left of content
          divElement.insertAdjacentElement("afterbegin", closeElement);
        } else {
          // Adding close icon on the right of content
          divElement.appendChild(closeElement);
        }
      }

      // Clear timeout while toast is focused
      if (this.options.stopOnFocus && this.options.duration > 0) {
        var self = this;
        // stop countdown
        divElement.addEventListener("mouseover", function (event) {
          window.clearTimeout(divElement.timeOutValue);
        });
        // add back the timeout
        divElement.addEventListener("mouseleave", function () {
          divElement.timeOutValue = window.setTimeout(function () {
            // Remove the toast from DOM
            self.removeElement(divElement);
          }, self.options.duration);
        });
      }

      // Adding an on-click destination path
      if (typeof this.options.destination !== "undefined") {
        divElement.addEventListener(
          "click",
          function (event) {
            event.stopPropagation();
            if (this.options.newWindow === true) {
              window.open(this.options.destination, "_blank");
            } else {
              window.location = this.options.destination;
            }
          }.bind(this)
        );
      }

      if (
        typeof this.options.onClick === "function" &&
        typeof this.options.destination === "undefined"
      ) {
        divElement.addEventListener(
          "click",
          function (event) {
            event.stopPropagation();
            this.options.onClick();
          }.bind(this)
        );
      }

      // Adding offset
      if (typeof this.options.offset === "object") {
        var x = getAxisOffsetAValue("x", this.options);
        var y = getAxisOffsetAValue("y", this.options);

        var xOffset = this.options.position == "left" ? x : "-" + x;
        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

        divElement.style.transform =
          "translate(" + xOffset + "," + yOffset + ")";
      }

      // Returning the generated element
      return divElement;
    },

    // Displaying the toast
    showToast: function () {
      // Creating the DOM object for the toast
      this.toastElement = this.buildToast();

      // Getting the root element to with the toast needs to be added
      var rootElement;
      if (typeof this.options.selector === "string") {
        rootElement = document.getElementById(this.options.selector);
      } else if (
        this.options.selector instanceof HTMLElement ||
        (typeof ShadowRoot !== "undefined" &&
          this.options.selector instanceof ShadowRoot)
      ) {
        rootElement = this.options.selector;
      } else {
        rootElement = document.body;
      }

      // Validating if root element is present in DOM
      if (!rootElement) {
        throw "Root element is not defined";
      }

      // Adding the DOM element
      var elementToInsert = Toastify.defaults.oldestFirst
        ? rootElement.firstChild
        : rootElement.lastChild;
      rootElement.insertBefore(this.toastElement, elementToInsert);

      // Repositioning the toasts in case multiple toasts are present
      Toastify.reposition();

      if (this.options.duration > 0) {
        this.toastElement.timeOutValue = window.setTimeout(
          function () {
            // Remove the toast from DOM
            this.removeElement(this.toastElement);
          }.bind(this),
          this.options.duration
        ); // Binding `this` for function invocation
      }

      // Supporting function chaining
      return this;
    },

    hideToast: function () {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }
      this.removeElement(this.toastElement);
    },

    // Removing the element from the DOM
    removeElement: function (toastElement) {
      // Hiding the element
      // toastElement.classList.remove("on");
      toastElement.className = toastElement.className.replace(" on", "");

      // Removing the element from DOM after transition end
      window.setTimeout(
        function () {
          // remove options node if any
          if (this.options.node && this.options.node.parentNode) {
            this.options.node.parentNode.removeChild(this.options.node);
          }

          // Remove the element from the DOM, only when the parent node was not removed before.
          if (toastElement.parentNode) {
            toastElement.parentNode.removeChild(toastElement);
          }

          // Calling the callback function
          this.options.callback.call(toastElement);

          // Repositioning the toasts again
          Toastify.reposition();
        }.bind(this),
        400
      ); // Binding `this` for function invocation
    },
  };

  // Positioning the toasts on the DOM
  Toastify.reposition = function () {
    // Top margins with gravity
    var topLeftOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var topRightOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var offsetSize = {
      top: 15,
      bottom: 15,
    };

    // Get all toast messages on the DOM
    var allToasts = document.getElementsByClassName("toastify");

    var classUsed;

    // Modifying the position of each toast element
    for (var i = 0; i < allToasts.length; i++) {
      // Getting the applied gravity
      if (containsClass(allToasts[i], "toastify-top") === true) {
        classUsed = "toastify-top";
      } else {
        classUsed = "toastify-bottom";
      }

      var height = allToasts[i].offsetHeight;
      classUsed = classUsed.substr(9, classUsed.length - 1);
      // Spacing between toasts
      var offset = 15;

      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      // Show toast in center if screen with less than or equal to 360px
      if (width <= 360) {
        // Setting the position
        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

        offsetSize[classUsed] += height + offset;
      } else {
        if (containsClass(allToasts[i], "toastify-left") === true) {
          // Setting the position
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

          topLeftOffsetSize[classUsed] += height + offset;
        } else {
          // Setting the position
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

          topRightOffsetSize[classUsed] += height + offset;
        }
      }
    }

    // Supporting function chaining
    return this;
  };

  // Helper function to get offset.
  function getAxisOffsetAValue(axis, options) {
    if (options.offset[axis]) {
      if (isNaN(options.offset[axis])) {
        return options.offset[axis];
      } else {
        return options.offset[axis] + "px";
      }
    }

    return "0px";
  }

  function containsClass(elem, yourClass) {
    if (!elem || typeof yourClass !== "string") {
      return false;
    } else if (
      elem.className &&
      elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Setting up the prototype for the init object
  Toastify.lib.init.prototype = Toastify.lib;

  // Returning the Toastify function to be assigned to the window object/module
  return Toastify;
});
//toastsy
(function (b) {
  b.toast = function (a, h, g, l, k) {
    b("#toast-container").length ||
      (b("body").prepend(
        '<div id="toast-container" aria-live="polite" aria-atomic="true"></div>'
      ),
      b("#toast-container").append('<div id="toast-wrapper"></div>'));
    var c = "",
      d = "",
      e = "text-muted",
      f = "",
      m = "object" === typeof a ? a.title || "" : a || "Notice!";
    h = "object" === typeof a ? a.subtitle || "" : h || "";
    g = "object" === typeof a ? a.content || "" : g || "";
    k = "object" === typeof a ? a.delay || 3e3 : k || 3e3;
    switch ("object" === typeof a ? a.type || "" : l || "info") {
      case "info":
        c = "bg-info";
        f = e = d = "text-white";
        break;
      case "success":
        c = "bg-success";
        f = e = d = "text-white";
        break;
      case "warning":
      case "warn":
        c = "bg-warning";
        f = e = d = "text-white";
        break;
      case "error":
      case "danger":
        (c = "bg-danger"), (f = e = d = "text-white");
    }
    a =
      '<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="' +
      k +
      '">' +
      ('<div class="toast-header ' + c + " " + d + '">') +
      ('<strong class="mr-auto">' + m + "</strong>");
    a += '<small class="' + e + '">' + h + "</small>";
    a +=
      '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">';
    a += '<span aria-hidden="true" class="' + f + '">&times;</span>';
    a += "</button>";
    a += "</div>";
    "" !== g && ((a += '<div class="toast-body">'), (a += g), (a += "</div>"));
    a += "</div>";
    b("#toast-wrapper").append(a);
    b("#toast-wrapper .toast:last").toast("show");
  };
})(jQuery);
