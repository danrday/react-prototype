;(window.webpackJsonp = window.webpackJsonp || []).push([
    [8],
    {
        152: function(t, n, e) {
            'use strict'
            e.r(n)
            n.default = {
                nodes: [
                    { name: 'Bluebell Pineda (Nurse)', id: 0 },
                    { name: 'Alexa Duke', id: 1 },
                    { name: 'Katharine Broadhurst', id: 2 },
                    { name: 'Aman Myers (Tech)', id: 3 },
                    { name: 'Corban Davila', id: 4 },
                    { name: 'Isla-Grace Dotson', id: 5 },
                    { name: 'Aishah Finley', id: 6 },
                    { name: 'Stacey Carr (Nurse)', id: 7 },
                    { name: 'Zacharia Browning (Nurse)', id: 8 },
                    { name: 'Jevon Hester', id: 9 },
                    { name: 'Aiysha Stott', id: 10 },
                    { name: 'Leon Collier (Tech)', id: 11 },
                    { name: 'Dahlia Mcleod', id: 12 },
                    { name: 'Laiba Guevara', id: 13 },
                    { name: 'Stefanie Joseph', id: 14 },
                    { name: 'Mamie Mclaughlin (Nurse)', id: 15 },
                    { name: 'Bluebell Pineda', id: 16 },
                    { name: 'Alexa Duke', id: 17 },
                    { name: 'Katharine Broadhurst', id: 18 },
                    { name: 'Aman Myers', id: 19 },
                    { name: 'Corban Davila', id: 20 },
                    { name: 'Isla-Grace Dotson', id: 21 },
                    { name: 'Aishah Finley', id: 22 },
                    { name: 'Stacey Carr', id: 23 },
                    { name: 'Zacharia Browning', id: 24 },
                    { name: 'Jevon Hester', id: 25 },
                    { name: 'Aiysha Stott', id: 26 },
                    { name: 'Leon Collier', id: 27 },
                    { name: 'Dahlia Mcleod', id: 28 },
                    { name: 'Laiba Guevara', id: 29 },
                    { name: 'Stefanie Joseph', id: 30 },
                    { name: 'Mamie Mclaughlin', id: 31 },
                ],
                links: [
                    { source: 0, target: 2 },
                    { source: 3, target: 4 },
                    { source: 3, target: 5 },
                    { source: 3, target: 6 },
                    { source: 5, target: 0 },
                    { source: 7, target: 6 },
                    { source: 7, target: 4 },
                    { source: 8, target: 9 },
                    { source: 8, target: 10 },
                    { source: 11, target: 13 },
                    { source: 11, target: 14 },
                    { source: 13, target: 8 },
                    { source: 13, target: 8 },
                    { source: 15, target: 12 },
                    { source: 15, target: 1 },
                ],
            }
        },
        183: function(t, n, e) {
            'use strict'
            t.exports = e(94)
        },
        28: function(t, n, e) {
            'use strict'
            function r(t, n) {
                return t.parent === n.parent ? 1 : 2
            }
            function i(t, n) {
                return t + n.x
            }
            function u(t, n) {
                return Math.max(t, n.y)
            }
            e.r(n)
            var o = function() {
                var t = r,
                    n = 1,
                    e = 1,
                    o = !1
                function a(r) {
                    var a,
                        c = 0
                    r.eachAfter(function(n) {
                        var e = n.children
                        e
                            ? ((n.x = (function(t) {
                                  return t.reduce(i, 0) / t.length
                              })(e)),
                              (n.y = (function(t) {
                                  return 1 + t.reduce(u, 0)
                              })(e)))
                            : ((n.x = a ? (c += t(n, a)) : 0),
                              (n.y = 0),
                              (a = n))
                    })
                    var f = (function(t) {
                            for (var n; (n = t.children); ) t = n[0]
                            return t
                        })(r),
                        s = (function(t) {
                            for (var n; (n = t.children); ) t = n[n.length - 1]
                            return t
                        })(r),
                        l = f.x - t(f, s) / 2,
                        h = s.x + t(s, f) / 2
                    return r.eachAfter(
                        o
                            ? function(t) {
                                  ;(t.x = (t.x - r.x) * n),
                                      (t.y = (r.y - t.y) * e)
                              }
                            : function(t) {
                                  ;(t.x = ((t.x - l) / (h - l)) * n),
                                      (t.y = (1 - (r.y ? t.y / r.y : 1)) * e)
                              },
                    )
                }
                return (
                    (a.separation = function(n) {
                        return arguments.length ? ((t = n), a) : t
                    }),
                    (a.size = function(t) {
                        return arguments.length
                            ? ((o = !1), (n = +t[0]), (e = +t[1]), a)
                            : o
                            ? null
                            : [n, e]
                    }),
                    (a.nodeSize = function(t) {
                        return arguments.length
                            ? ((o = !0), (n = +t[0]), (e = +t[1]), a)
                            : o
                            ? [n, e]
                            : null
                    }),
                    a
                )
            }
            function a(t) {
                var n = 0,
                    e = t.children,
                    r = e && e.length
                if (r) for (; --r >= 0; ) n += e[r].value
                else n = 1
                t.value = n
            }
            function c(t, n) {
                var e,
                    r,
                    i,
                    u,
                    o,
                    a = new h(t),
                    c = +t.value && (a.value = t.value),
                    s = [a]
                for (null == n && (n = f); (e = s.pop()); )
                    if (
                        (c && (e.value = +e.data.value),
                        (i = n(e.data)) && (o = i.length))
                    )
                        for (e.children = new Array(o), u = o - 1; u >= 0; --u)
                            s.push((r = e.children[u] = new h(i[u]))),
                                (r.parent = e),
                                (r.depth = e.depth + 1)
                return a.eachBefore(l)
            }
            function f(t) {
                return t.children
            }
            function s(t) {
                t.data = t.data.data
            }
            function l(t) {
                var n = 0
                do {
                    t.height = n
                } while ((t = t.parent) && t.height < ++n)
            }
            function h(t) {
                ;(this.data = t),
                    (this.depth = this.height = 0),
                    (this.parent = null)
            }
            h.prototype = c.prototype = {
                constructor: h,
                count: function() {
                    return this.eachAfter(a)
                },
                each: function(t) {
                    var n,
                        e,
                        r,
                        i,
                        u = this,
                        o = [u]
                    do {
                        for (n = o.reverse(), o = []; (u = n.pop()); )
                            if ((t(u), (e = u.children)))
                                for (r = 0, i = e.length; r < i; ++r)
                                    o.push(e[r])
                    } while (o.length)
                    return this
                },
                eachAfter: function(t) {
                    for (
                        var n, e, r, i = this, u = [i], o = [];
                        (i = u.pop());

                    )
                        if ((o.push(i), (n = i.children)))
                            for (e = 0, r = n.length; e < r; ++e) u.push(n[e])
                    for (; (i = o.pop()); ) t(i)
                    return this
                },
                eachBefore: function(t) {
                    for (var n, e, r = this, i = [r]; (r = i.pop()); )
                        if ((t(r), (n = r.children)))
                            for (e = n.length - 1; e >= 0; --e) i.push(n[e])
                    return this
                },
                sum: function(t) {
                    return this.eachAfter(function(n) {
                        for (
                            var e = +t(n.data) || 0,
                                r = n.children,
                                i = r && r.length;
                            --i >= 0;

                        )
                            e += r[i].value
                        n.value = e
                    })
                },
                sort: function(t) {
                    return this.eachBefore(function(n) {
                        n.children && n.children.sort(t)
                    })
                },
                path: function(t) {
                    for (
                        var n = this,
                            e = (function(t, n) {
                                if (t === n) return t
                                var e = t.ancestors(),
                                    r = n.ancestors(),
                                    i = null
                                for (t = e.pop(), n = r.pop(); t === n; )
                                    (i = t), (t = e.pop()), (n = r.pop())
                                return i
                            })(n, t),
                            r = [n];
                        n !== e;

                    )
                        (n = n.parent), r.push(n)
                    for (var i = r.length; t !== e; )
                        r.splice(i, 0, t), (t = t.parent)
                    return r
                },
                ancestors: function() {
                    for (var t = this, n = [t]; (t = t.parent); ) n.push(t)
                    return n
                },
                descendants: function() {
                    var t = []
                    return (
                        this.each(function(n) {
                            t.push(n)
                        }),
                        t
                    )
                },
                leaves: function() {
                    var t = []
                    return (
                        this.eachBefore(function(n) {
                            n.children || t.push(n)
                        }),
                        t
                    )
                },
                links: function() {
                    var t = this,
                        n = []
                    return (
                        t.each(function(e) {
                            e !== t && n.push({ source: e.parent, target: e })
                        }),
                        n
                    )
                },
                copy: function() {
                    return c(this).eachBefore(s)
                },
            }
            var d = Array.prototype.slice
            var p = function(t) {
                for (
                    var n,
                        e,
                        r = 0,
                        i = (t = (function(t) {
                            for (var n, e, r = t.length; r; )
                                (e = (Math.random() * r--) | 0),
                                    (n = t[r]),
                                    (t[r] = t[e]),
                                    (t[e] = n)
                            return t
                        })(d.call(t))).length,
                        u = [];
                    r < i;

                )
                    (n = t[r]),
                        e && g(e, n) ? ++r : ((e = _((u = v(u, n)))), (r = 0))
                return e
            }
            function v(t, n) {
                var e, r
                if (b(n, t)) return [n]
                for (e = 0; e < t.length; ++e)
                    if (y(n, t[e]) && b(m(t[e], n), t)) return [t[e], n]
                for (e = 0; e < t.length - 1; ++e)
                    for (r = e + 1; r < t.length; ++r)
                        if (
                            y(m(t[e], t[r]), n) &&
                            y(m(t[e], n), t[r]) &&
                            y(m(t[r], n), t[e]) &&
                            b(x(t[e], t[r], n), t)
                        )
                            return [t[e], t[r], n]
                throw new Error()
            }
            function y(t, n) {
                var e = t.r - n.r,
                    r = n.x - t.x,
                    i = n.y - t.y
                return e < 0 || e * e < r * r + i * i
            }
            function g(t, n) {
                var e = t.r - n.r + 1e-6,
                    r = n.x - t.x,
                    i = n.y - t.y
                return e > 0 && e * e > r * r + i * i
            }
            function b(t, n) {
                for (var e = 0; e < n.length; ++e) if (!g(t, n[e])) return !1
                return !0
            }
            function _(t) {
                switch (t.length) {
                    case 1:
                        return { x: (n = t[0]).x, y: n.y, r: n.r }
                    case 2:
                        return m(t[0], t[1])
                    case 3:
                        return x(t[0], t[1], t[2])
                }
                var n
            }
            function m(t, n) {
                var e = t.x,
                    r = t.y,
                    i = t.r,
                    u = n.x,
                    o = n.y,
                    a = n.r,
                    c = u - e,
                    f = o - r,
                    s = a - i,
                    l = Math.sqrt(c * c + f * f)
                return {
                    x: (e + u + (c / l) * s) / 2,
                    y: (r + o + (f / l) * s) / 2,
                    r: (l + i + a) / 2,
                }
            }
            function x(t, n, e) {
                var r = t.x,
                    i = t.y,
                    u = t.r,
                    o = n.x,
                    a = n.y,
                    c = n.r,
                    f = e.x,
                    s = e.y,
                    l = e.r,
                    h = r - o,
                    d = r - f,
                    p = i - a,
                    v = i - s,
                    y = c - u,
                    g = l - u,
                    b = r * r + i * i - u * u,
                    _ = b - o * o - a * a + c * c,
                    m = b - f * f - s * s + l * l,
                    x = d * p - h * v,
                    w = (p * m - v * _) / (2 * x) - r,
                    M = (v * y - p * g) / x,
                    k = (d * _ - h * m) / (2 * x) - i,
                    A = (h * g - d * y) / x,
                    S = M * M + A * A - 1,
                    N = 2 * (u + w * M + k * A),
                    E = w * w + k * k - u * u,
                    T = -(S
                        ? (N + Math.sqrt(N * N - 4 * S * E)) / (2 * S)
                        : E / N)
                return { x: r + w + M * T, y: i + k + A * T, r: T }
            }
            function w(t, n, e) {
                var r,
                    i,
                    u,
                    o,
                    a = t.x - n.x,
                    c = t.y - n.y,
                    f = a * a + c * c
                f
                    ? ((i = n.r + e.r),
                      (i *= i),
                      (o = t.r + e.r),
                      i > (o *= o)
                          ? ((r = (f + o - i) / (2 * f)),
                            (u = Math.sqrt(Math.max(0, o / f - r * r))),
                            (e.x = t.x - r * a - u * c),
                            (e.y = t.y - r * c + u * a))
                          : ((r = (f + i - o) / (2 * f)),
                            (u = Math.sqrt(Math.max(0, i / f - r * r))),
                            (e.x = n.x + r * a - u * c),
                            (e.y = n.y + r * c + u * a)))
                    : ((e.x = n.x + e.r), (e.y = n.y))
            }
            function M(t, n) {
                var e = t.r + n.r - 1e-6,
                    r = n.x - t.x,
                    i = n.y - t.y
                return e > 0 && e * e > r * r + i * i
            }
            function k(t) {
                var n = t._,
                    e = t.next._,
                    r = n.r + e.r,
                    i = (n.x * e.r + e.x * n.r) / r,
                    u = (n.y * e.r + e.y * n.r) / r
                return i * i + u * u
            }
            function A(t) {
                ;(this._ = t), (this.next = null), (this.previous = null)
            }
            function S(t) {
                if (!(i = t.length)) return 0
                var n, e, r, i, u, o, a, c, f, s, l
                if ((((n = t[0]).x = 0), (n.y = 0), !(i > 1))) return n.r
                if (
                    ((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2))
                )
                    return n.r + e.r
                w(e, n, (r = t[2])),
                    (n = new A(n)),
                    (e = new A(e)),
                    (r = new A(r)),
                    (n.next = r.previous = e),
                    (e.next = n.previous = r),
                    (r.next = e.previous = n)
                t: for (a = 3; a < i; ++a) {
                    w(n._, e._, (r = t[a])),
                        (r = new A(r)),
                        (c = e.next),
                        (f = n.previous),
                        (s = e._.r),
                        (l = n._.r)
                    do {
                        if (s <= l) {
                            if (M(c._, r._)) {
                                ;(e = c), (n.next = e), (e.previous = n), --a
                                continue t
                            }
                            ;(s += c._.r), (c = c.next)
                        } else {
                            if (M(f._, r._)) {
                                ;((n = f).next = e), (e.previous = n), --a
                                continue t
                            }
                            ;(l += f._.r), (f = f.previous)
                        }
                    } while (c !== f.next)
                    for (
                        r.previous = n,
                            r.next = e,
                            n.next = e.previous = e = r,
                            u = k(n);
                        (r = r.next) !== e;

                    )
                        (o = k(r)) < u && ((n = r), (u = o))
                    e = n.next
                }
                for (n = [e._], r = e; (r = r.next) !== e; ) n.push(r._)
                for (r = p(n), a = 0; a < i; ++a)
                    ((n = t[a]).x -= r.x), (n.y -= r.y)
                return r.r
            }
            var N = function(t) {
                return S(t), t
            }
            function E(t) {
                if ('function' != typeof t) throw new Error()
                return t
            }
            function T() {
                return 0
            }
            var C = function(t) {
                return function() {
                    return t
                }
            }
            function P(t) {
                return Math.sqrt(t.value)
            }
            var z = function() {
                var t = null,
                    n = 1,
                    e = 1,
                    r = T
                function i(i) {
                    return (
                        (i.x = n / 2),
                        (i.y = e / 2),
                        t
                            ? i
                                  .eachBefore(R(t))
                                  .eachAfter(D(r, 0.5))
                                  .eachBefore(L(1))
                            : i
                                  .eachBefore(R(P))
                                  .eachAfter(D(T, 1))
                                  .eachAfter(D(r, i.r / Math.min(n, e)))
                                  .eachBefore(L(Math.min(n, e) / (2 * i.r))),
                        i
                    )
                }
                return (
                    (i.radius = function(n) {
                        return arguments.length
                            ? ((t = null == (e = n) ? null : E(e)), i)
                            : t
                        var e
                    }),
                    (i.size = function(t) {
                        return arguments.length
                            ? ((n = +t[0]), (e = +t[1]), i)
                            : [n, e]
                    }),
                    (i.padding = function(t) {
                        return arguments.length
                            ? ((r = 'function' == typeof t ? t : C(+t)), i)
                            : r
                    }),
                    i
                )
            }
            function R(t) {
                return function(n) {
                    n.children || (n.r = Math.max(0, +t(n) || 0))
                }
            }
            function D(t, n) {
                return function(e) {
                    if ((r = e.children)) {
                        var r,
                            i,
                            u,
                            o = r.length,
                            a = t(e) * n || 0
                        if (a) for (i = 0; i < o; ++i) r[i].r += a
                        if (((u = S(r)), a)) for (i = 0; i < o; ++i) r[i].r -= a
                        e.r = u + a
                    }
                }
            }
            function L(t) {
                return function(n) {
                    var e = n.parent
                    ;(n.r *= t),
                        e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y))
                }
            }
            var O = function(t) {
                    ;(t.x0 = Math.round(t.x0)),
                        (t.y0 = Math.round(t.y0)),
                        (t.x1 = Math.round(t.x1)),
                        (t.y1 = Math.round(t.y1))
                },
                q = function(t, n, e, r, i) {
                    for (
                        var u,
                            o = t.children,
                            a = -1,
                            c = o.length,
                            f = t.value && (r - n) / t.value;
                        ++a < c;

                    )
                        ((u = o[a]).y0 = e),
                            (u.y1 = i),
                            (u.x0 = n),
                            (u.x1 = n += u.value * f)
                },
                U = function() {
                    var t = 1,
                        n = 1,
                        e = 0,
                        r = !1
                    function i(i) {
                        var u = i.height + 1
                        return (
                            (i.x0 = i.y0 = e),
                            (i.x1 = t),
                            (i.y1 = n / u),
                            i.eachBefore(
                                (function(t, n) {
                                    return function(r) {
                                        r.children &&
                                            q(
                                                r,
                                                r.x0,
                                                (t * (r.depth + 1)) / n,
                                                r.x1,
                                                (t * (r.depth + 2)) / n,
                                            )
                                        var i = r.x0,
                                            u = r.y0,
                                            o = r.x1 - e,
                                            a = r.y1 - e
                                        o < i && (i = o = (i + o) / 2),
                                            a < u && (u = a = (u + a) / 2),
                                            (r.x0 = i),
                                            (r.y0 = u),
                                            (r.x1 = o),
                                            (r.y1 = a)
                                    }
                                })(n, u),
                            ),
                            r && i.eachBefore(O),
                            i
                        )
                    }
                    return (
                        (i.round = function(t) {
                            return arguments.length ? ((r = !!t), i) : r
                        }),
                        (i.size = function(e) {
                            return arguments.length
                                ? ((t = +e[0]), (n = +e[1]), i)
                                : [t, n]
                        }),
                        (i.padding = function(t) {
                            return arguments.length ? ((e = +t), i) : e
                        }),
                        i
                    )
                },
                B = '$',
                F = { depth: -1 },
                Y = {}
            function I(t) {
                return t.id
            }
            function j(t) {
                return t.parentId
            }
            var H = function() {
                var t = I,
                    n = j
                function e(e) {
                    var r,
                        i,
                        u,
                        o,
                        a,
                        c,
                        f,
                        s = e.length,
                        d = new Array(s),
                        p = {}
                    for (i = 0; i < s; ++i)
                        (r = e[i]),
                            (a = d[i] = new h(r)),
                            null != (c = t(r, i, e)) &&
                                (c += '') &&
                                (p[(f = B + (a.id = c))] = f in p ? Y : a)
                    for (i = 0; i < s; ++i)
                        if (
                            ((a = d[i]),
                            null != (c = n(e[i], i, e)) && (c += ''))
                        ) {
                            if (!(o = p[B + c]))
                                throw new Error('missing: ' + c)
                            if (o === Y) throw new Error('ambiguous: ' + c)
                            o.children
                                ? o.children.push(a)
                                : (o.children = [a]),
                                (a.parent = o)
                        } else {
                            if (u) throw new Error('multiple roots')
                            u = a
                        }
                    if (!u) throw new Error('no root')
                    if (
                        ((u.parent = F),
                        u
                            .eachBefore(function(t) {
                                ;(t.depth = t.parent.depth + 1), --s
                            })
                            .eachBefore(l),
                        (u.parent = null),
                        s > 0)
                    )
                        throw new Error('cycle')
                    return u
                }
                return (
                    (e.id = function(n) {
                        return arguments.length ? ((t = E(n)), e) : t
                    }),
                    (e.parentId = function(t) {
                        return arguments.length ? ((n = E(t)), e) : n
                    }),
                    e
                )
            }
            function G(t, n) {
                return t.parent === n.parent ? 1 : 2
            }
            function X(t) {
                var n = t.children
                return n ? n[0] : t.t
            }
            function V(t) {
                var n = t.children
                return n ? n[n.length - 1] : t.t
            }
            function $(t, n, e) {
                var r = e / (n.i - t.i)
                ;(n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e)
            }
            function W(t, n, e) {
                return t.a.parent === n.parent ? t.a : e
            }
            function Z(t, n) {
                ;(this._ = t),
                    (this.parent = null),
                    (this.children = null),
                    (this.A = null),
                    (this.a = this),
                    (this.z = 0),
                    (this.m = 0),
                    (this.c = 0),
                    (this.s = 0),
                    (this.t = null),
                    (this.i = n)
            }
            Z.prototype = Object.create(h.prototype)
            var Q = function() {
                    var t = G,
                        n = 1,
                        e = 1,
                        r = null
                    function i(i) {
                        var c = (function(t) {
                            for (
                                var n, e, r, i, u, o = new Z(t, 0), a = [o];
                                (n = a.pop());

                            )
                                if ((r = n._.children))
                                    for (
                                        n.children = new Array((u = r.length)),
                                            i = u - 1;
                                        i >= 0;
                                        --i
                                    )
                                        a.push(
                                            (e = n.children[i] = new Z(
                                                r[i],
                                                i,
                                            )),
                                        ),
                                            (e.parent = n)
                            return (
                                ((o.parent = new Z(null, 0)).children = [o]), o
                            )
                        })(i)
                        if (
                            (c.eachAfter(u),
                            (c.parent.m = -c.z),
                            c.eachBefore(o),
                            r)
                        )
                            i.eachBefore(a)
                        else {
                            var f = i,
                                s = i,
                                l = i
                            i.eachBefore(function(t) {
                                t.x < f.x && (f = t),
                                    t.x > s.x && (s = t),
                                    t.depth > l.depth && (l = t)
                            })
                            var h = f === s ? 1 : t(f, s) / 2,
                                d = h - f.x,
                                p = n / (s.x + h + d),
                                v = e / (l.depth || 1)
                            i.eachBefore(function(t) {
                                ;(t.x = (t.x + d) * p), (t.y = t.depth * v)
                            })
                        }
                        return i
                    }
                    function u(n) {
                        var e = n.children,
                            r = n.parent.children,
                            i = n.i ? r[n.i - 1] : null
                        if (e) {
                            !(function(t) {
                                for (
                                    var n,
                                        e = 0,
                                        r = 0,
                                        i = t.children,
                                        u = i.length;
                                    --u >= 0;

                                )
                                    ((n = i[u]).z += e),
                                        (n.m += e),
                                        (e += n.s + (r += n.c))
                            })(n)
                            var u = (e[0].z + e[e.length - 1].z) / 2
                            i
                                ? ((n.z = i.z + t(n._, i._)), (n.m = n.z - u))
                                : (n.z = u)
                        } else i && (n.z = i.z + t(n._, i._))
                        n.parent.A = (function(n, e, r) {
                            if (e) {
                                for (
                                    var i,
                                        u = n,
                                        o = n,
                                        a = e,
                                        c = u.parent.children[0],
                                        f = u.m,
                                        s = o.m,
                                        l = a.m,
                                        h = c.m;
                                    (a = V(a)), (u = X(u)), a && u;

                                )
                                    (c = X(c)),
                                        ((o = V(o)).a = n),
                                        (i = a.z + l - u.z - f + t(a._, u._)) >
                                            0 &&
                                            ($(W(a, n, r), n, i),
                                            (f += i),
                                            (s += i)),
                                        (l += a.m),
                                        (f += u.m),
                                        (h += c.m),
                                        (s += o.m)
                                a && !V(o) && ((o.t = a), (o.m += l - s)),
                                    u &&
                                        !X(c) &&
                                        ((c.t = u), (c.m += f - h), (r = n))
                            }
                            return r
                        })(n, i, n.parent.A || r[0])
                    }
                    function o(t) {
                        ;(t._.x = t.z + t.parent.m), (t.m += t.parent.m)
                    }
                    function a(t) {
                        ;(t.x *= n), (t.y = t.depth * e)
                    }
                    return (
                        (i.separation = function(n) {
                            return arguments.length ? ((t = n), i) : t
                        }),
                        (i.size = function(t) {
                            return arguments.length
                                ? ((r = !1), (n = +t[0]), (e = +t[1]), i)
                                : r
                                ? null
                                : [n, e]
                        }),
                        (i.nodeSize = function(t) {
                            return arguments.length
                                ? ((r = !0), (n = +t[0]), (e = +t[1]), i)
                                : r
                                ? [n, e]
                                : null
                        }),
                        i
                    )
                },
                J = function(t, n, e, r, i) {
                    for (
                        var u,
                            o = t.children,
                            a = -1,
                            c = o.length,
                            f = t.value && (i - e) / t.value;
                        ++a < c;

                    )
                        ((u = o[a]).x0 = n),
                            (u.x1 = r),
                            (u.y0 = e),
                            (u.y1 = e += u.value * f)
                },
                K = (1 + Math.sqrt(5)) / 2
            function tt(t, n, e, r, i, u) {
                for (
                    var o,
                        a,
                        c,
                        f,
                        s,
                        l,
                        h,
                        d,
                        p,
                        v,
                        y,
                        g = [],
                        b = n.children,
                        _ = 0,
                        m = 0,
                        x = b.length,
                        w = n.value;
                    _ < x;

                ) {
                    ;(c = i - e), (f = u - r)
                    do {
                        s = b[m++].value
                    } while (!s && m < x)
                    for (
                        l = h = s,
                            y = s * s * (v = Math.max(f / c, c / f) / (w * t)),
                            p = Math.max(h / y, y / l);
                        m < x;
                        ++m
                    ) {
                        if (
                            ((s += a = b[m].value),
                            a < l && (l = a),
                            a > h && (h = a),
                            (y = s * s * v),
                            (d = Math.max(h / y, y / l)) > p)
                        ) {
                            s -= a
                            break
                        }
                        p = d
                    }
                    g.push(
                        (o = {
                            value: s,
                            dice: c < f,
                            children: b.slice(_, m),
                        }),
                    ),
                        o.dice
                            ? q(o, e, r, i, w ? (r += (f * s) / w) : u)
                            : J(o, e, r, w ? (e += (c * s) / w) : i, u),
                        (w -= s),
                        (_ = m)
                }
                return g
            }
            var nt = (function t(n) {
                    function e(t, e, r, i, u) {
                        tt(n, t, e, r, i, u)
                    }
                    return (
                        (e.ratio = function(n) {
                            return t((n = +n) > 1 ? n : 1)
                        }),
                        e
                    )
                })(K),
                et = function() {
                    var t = nt,
                        n = !1,
                        e = 1,
                        r = 1,
                        i = [0],
                        u = T,
                        o = T,
                        a = T,
                        c = T,
                        f = T
                    function s(t) {
                        return (
                            (t.x0 = t.y0 = 0),
                            (t.x1 = e),
                            (t.y1 = r),
                            t.eachBefore(l),
                            (i = [0]),
                            n && t.eachBefore(O),
                            t
                        )
                    }
                    function l(n) {
                        var e = i[n.depth],
                            r = n.x0 + e,
                            s = n.y0 + e,
                            l = n.x1 - e,
                            h = n.y1 - e
                        l < r && (r = l = (r + l) / 2),
                            h < s && (s = h = (s + h) / 2),
                            (n.x0 = r),
                            (n.y0 = s),
                            (n.x1 = l),
                            (n.y1 = h),
                            n.children &&
                                ((e = i[n.depth + 1] = u(n) / 2),
                                (r += f(n) - e),
                                (s += o(n) - e),
                                (l -= a(n) - e) < r && (r = l = (r + l) / 2),
                                (h -= c(n) - e) < s && (s = h = (s + h) / 2),
                                t(n, r, s, l, h))
                    }
                    return (
                        (s.round = function(t) {
                            return arguments.length ? ((n = !!t), s) : n
                        }),
                        (s.size = function(t) {
                            return arguments.length
                                ? ((e = +t[0]), (r = +t[1]), s)
                                : [e, r]
                        }),
                        (s.tile = function(n) {
                            return arguments.length ? ((t = E(n)), s) : t
                        }),
                        (s.padding = function(t) {
                            return arguments.length
                                ? s.paddingInner(t).paddingOuter(t)
                                : s.paddingInner()
                        }),
                        (s.paddingInner = function(t) {
                            return arguments.length
                                ? ((u = 'function' == typeof t ? t : C(+t)), s)
                                : u
                        }),
                        (s.paddingOuter = function(t) {
                            return arguments.length
                                ? s
                                      .paddingTop(t)
                                      .paddingRight(t)
                                      .paddingBottom(t)
                                      .paddingLeft(t)
                                : s.paddingTop()
                        }),
                        (s.paddingTop = function(t) {
                            return arguments.length
                                ? ((o = 'function' == typeof t ? t : C(+t)), s)
                                : o
                        }),
                        (s.paddingRight = function(t) {
                            return arguments.length
                                ? ((a = 'function' == typeof t ? t : C(+t)), s)
                                : a
                        }),
                        (s.paddingBottom = function(t) {
                            return arguments.length
                                ? ((c = 'function' == typeof t ? t : C(+t)), s)
                                : c
                        }),
                        (s.paddingLeft = function(t) {
                            return arguments.length
                                ? ((f = 'function' == typeof t ? t : C(+t)), s)
                                : f
                        }),
                        s
                    )
                },
                rt = function(t, n, e, r, i) {
                    var u,
                        o,
                        a = t.children,
                        c = a.length,
                        f = new Array(c + 1)
                    for (f[0] = o = u = 0; u < c; ++u)
                        f[u + 1] = o += a[u].value
                    !(function t(n, e, r, i, u, o, c) {
                        if (n >= e - 1) {
                            var s = a[n]
                            return (
                                (s.x0 = i),
                                (s.y0 = u),
                                (s.x1 = o),
                                void (s.y1 = c)
                            )
                        }
                        var l = f[n],
                            h = r / 2 + l,
                            d = n + 1,
                            p = e - 1
                        for (; d < p; ) {
                            var v = (d + p) >>> 1
                            f[v] < h ? (d = v + 1) : (p = v)
                        }
                        h - f[d - 1] < f[d] - h && n + 1 < d && --d
                        var y = f[d] - l,
                            g = r - y
                        if (o - i > c - u) {
                            var b = (i * g + o * y) / r
                            t(n, d, y, i, u, b, c), t(d, e, g, b, u, o, c)
                        } else {
                            var _ = (u * g + c * y) / r
                            t(n, d, y, i, u, o, _), t(d, e, g, i, _, o, c)
                        }
                    })(0, c, t.value, n, e, r, i)
                },
                it = function(t, n, e, r, i) {
                    ;(1 & t.depth ? J : q)(t, n, e, r, i)
                },
                ut = (function t(n) {
                    function e(t, e, r, i, u) {
                        if ((o = t._squarify) && o.ratio === n)
                            for (
                                var o,
                                    a,
                                    c,
                                    f,
                                    s,
                                    l = -1,
                                    h = o.length,
                                    d = t.value;
                                ++l < h;

                            ) {
                                for (
                                    c = (a = o[l]).children,
                                        f = a.value = 0,
                                        s = c.length;
                                    f < s;
                                    ++f
                                )
                                    a.value += c[f].value
                                a.dice
                                    ? q(
                                          a,
                                          e,
                                          r,
                                          i,
                                          (r += ((u - r) * a.value) / d),
                                      )
                                    : J(
                                          a,
                                          e,
                                          r,
                                          (e += ((i - e) * a.value) / d),
                                          u,
                                      ),
                                    (d -= a.value)
                            }
                        else
                            (t._squarify = o = tt(n, t, e, r, i, u)),
                                (o.ratio = n)
                    }
                    return (
                        (e.ratio = function(n) {
                            return t((n = +n) > 1 ? n : 1)
                        }),
                        e
                    )
                })(K)
            e.d(n, 'cluster', function() {
                return o
            }),
                e.d(n, 'hierarchy', function() {
                    return c
                }),
                e.d(n, 'pack', function() {
                    return z
                }),
                e.d(n, 'packSiblings', function() {
                    return N
                }),
                e.d(n, 'packEnclose', function() {
                    return p
                }),
                e.d(n, 'partition', function() {
                    return U
                }),
                e.d(n, 'stratify', function() {
                    return H
                }),
                e.d(n, 'tree', function() {
                    return Q
                }),
                e.d(n, 'treemap', function() {
                    return et
                }),
                e.d(n, 'treemapBinary', function() {
                    return rt
                }),
                e.d(n, 'treemapDice', function() {
                    return q
                }),
                e.d(n, 'treemapSlice', function() {
                    return J
                }),
                e.d(n, 'treemapSliceDice', function() {
                    return it
                }),
                e.d(n, 'treemapSquarify', function() {
                    return nt
                }),
                e.d(n, 'treemapResquarify', function() {
                    return ut
                })
        },
        360: function(t, n, e) {
            __NEXT_REGISTER_PAGE('/force/f4', function() {
                return (t.exports = e(361)), { page: t.exports.default }
            })
        },
        361: function(t, n, e) {
            'use strict'
            e.r(n)
            var r = e(49),
                i = e.n(r),
                u = e(152)
            function o(t) {
                return (o =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function(t) {
                              return typeof t
                          }
                        : function(t) {
                              return t &&
                                  'function' == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof t
                          })(t)
            }
            function a(t) {
                return (
                    (function(t) {
                        if (Array.isArray(t)) {
                            for (
                                var n = 0, e = new Array(t.length);
                                n < t.length;
                                n++
                            )
                                e[n] = t[n]
                            return e
                        }
                    })(t) ||
                    (function(t) {
                        if (
                            Symbol.iterator in Object(t) ||
                            '[object Arguments]' ===
                                Object.prototype.toString.call(t)
                        )
                            return Array.from(t)
                    })(t) ||
                    (function() {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance',
                        )
                    })()
                )
            }
            function c(t, n) {
                if (!(t instanceof n))
                    throw new TypeError('Cannot call a class as a function')
            }
            function f(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e]
                    ;(r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r)
                }
            }
            function s(t, n, e) {
                return n && f(t.prototype, n), e && f(t, e), t
            }
            function l(t, n) {
                return !n || ('object' !== o(n) && 'function' != typeof n)
                    ? v(t)
                    : n
            }
            function h(t) {
                return (h = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function(t) {
                          return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
            }
            function d(t, n) {
                if ('function' != typeof n && null !== n)
                    throw new TypeError(
                        'Super expression must either be null or a function',
                    )
                ;(t.prototype = Object.create(n && n.prototype, {
                    constructor: { value: t, writable: !0, configurable: !0 },
                })),
                    n && p(t, n)
            }
            function p(t, n) {
                return (p =
                    Object.setPrototypeOf ||
                    function(t, n) {
                        return (t.__proto__ = n), t
                    })(t, n)
            }
            function v(t) {
                if (void 0 === t)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                    )
                return t
            }
            function y(t, n, e) {
                return (
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: e,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[n] = e),
                    t
                )
            }
            var g = e(74),
                b = e(0),
                _ = g.scaleOrdinal(g.schemeCategory10),
                m = function(t) {
                    t
                        .select('circle')
                        .attr('r', function(t) {
                            return 0 === t.id ||
                                3 === t.id ||
                                7 === t.id ||
                                8 === t.id ||
                                11 === t.id ||
                                15 === t.id
                                ? 30
                                : 15
                        })
                        .style('fill', function(t) {
                            return _(t.name)
                        }),
                        t.select('text').attr('dy', '.95em'),
                        t
                            .select('rect')
                            .style('fill', function(t) {
                                return 0 === t.id ||
                                    3 === t.id ||
                                    7 === t.id ||
                                    8 === t.id ||
                                    11 === t.id ||
                                    15 === t.id
                                    ? 'orange'
                                    : 'yellow'
                            })
                            .attr('width', function(t) {
                                return console.log('hi', t), 7 * t.name.length
                            })
                            .attr('height', function(t) {
                                return '20'
                            })
                },
                x = function(t) {
                    t.attr('transform', function(t) {
                        return 'translate(' + t.x + ',' + t.y + ')'
                    })
                },
                w = function(t) {
                    t.attr('stroke-width', 2)
                        .style('stroke', 'brown')
                        .style('opacity', '.2')
                },
                M = function(t) {
                    t.attr('x1', function(t) {
                        return t.source.x
                    })
                        .attr('y1', function(t) {
                            return t.source.y
                        })
                        .attr('x2', function(t) {
                            return t.target.x
                        })
                        .attr('y2', function(t) {
                            return t.target.y
                        })
                },
                k = function(t) {
                    t.selectAll('.node').call(x), t.selectAll('.link').call(M)
                },
                A = (function(t) {
                    function n() {
                        var t, e
                        c(this, n)
                        for (
                            var r = arguments.length, i = new Array(r), o = 0;
                            o < r;
                            o++
                        )
                            i[o] = arguments[o]
                        return (
                            y(
                                v(
                                    v(
                                        (e = l(
                                            this,
                                            (t = h(n)).call.apply(
                                                t,
                                                [this].concat(i),
                                            ),
                                        )),
                                    ),
                                ),
                                'state',
                                { data: u.default, lastClickedNode: null },
                            ),
                            y(v(v(e)), 'handleClick', function(t) {
                                var n = e.state.lastClickedNode
                                if ('number' == typeof n) {
                                    var r,
                                        i = { source: n, target: t },
                                        u = e.state.data.links.find(function(
                                            t,
                                        ) {
                                            return (
                                                (t.source.id === i.source &&
                                                    t.target.id === i.target) ||
                                                (t.source.id === i.target &&
                                                    t.target.id === i.source)
                                            )
                                        })
                                    r = u
                                        ? e.state.data.links.filter(function(
                                              t,
                                          ) {
                                              return t !== u
                                          })
                                        : a(e.state.data.links).concat([i])
                                    var o = {
                                        nodes: e.state.data.nodes,
                                        links: r,
                                    }
                                    e.setState({ data: o }),
                                        e.setState({ lastClickedNode: null })
                                } else e.setState({ lastClickedNode: t })
                            }),
                            e
                        )
                    }
                    return (
                        d(n, b.Component),
                        s(n, [
                            {
                                key: 'render',
                                value: function() {
                                    return b.createElement(
                                        'div',
                                        null,
                                        b.createElement(
                                            'div',
                                            {
                                                className: 'graphContainer',
                                                style: {
                                                    position: 'fixed',
                                                    'z-index': 3e3,
                                                },
                                            },
                                            b.createElement(S, {
                                                data: this.state.data,
                                                lastClickedNode: this.state
                                                    .lastClickedNode,
                                                handleClick: this.handleClick,
                                            }),
                                        ),
                                        b.createElement(
                                            'div',
                                            {
                                                style: {
                                                    'z-index': 2e3,
                                                    position: 'fixed',
                                                    width: '200px',
                                                    background: '#D3D3D3',
                                                    right: '0px',
                                                    height: '100%',
                                                },
                                            },
                                            'Filters',
                                        ),
                                    )
                                },
                            },
                        ]),
                        n
                    )
                })(),
                S = (function(t) {
                    function n() {
                        return c(this, n), l(this, h(n).apply(this, arguments))
                    }
                    return (
                        d(n, b.Component),
                        s(n, [
                            {
                                key: 'componentDidUpdate',
                                value: function(t, n, e) {
                                    if (
                                        (window.force
                                            .force(
                                                'link',
                                                g
                                                    .forceLink(
                                                        this.props.data.links,
                                                    )
                                                    .distance(90),
                                            )
                                            .restart(),
                                        'number' ==
                                            typeof this.props.lastClickedNode)
                                    ) {
                                        var r = this
                                        g.selectAll('circle')
                                            .filter(function(t, n) {
                                                return (
                                                    n ===
                                                    r.props.lastClickedNode
                                                )
                                            })
                                            .style('fill', function(t) {
                                                return 'red'
                                            })
                                    } else
                                        g.selectAll('circle').style(
                                            'fill',
                                            function(t) {
                                                return _(t.name)
                                            },
                                        )
                                },
                            },
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var t = this
                                    ;(this.d3Graph = g.select(
                                        i.a.findDOMNode(this),
                                    )),
                                        this.d3Graph.call(
                                            g.zoom().on('zoom', function() {
                                                g.select('.frameForZoom').attr(
                                                    'transform',
                                                    g.event.transform,
                                                )
                                            }),
                                        )
                                    var n = g
                                        .forceSimulation(this.props.data.nodes)
                                        .force(
                                            'charge',
                                            g.forceManyBody().strength(50),
                                        )
                                        .force(
                                            'link',
                                            g
                                                .forceLink(
                                                    this.props.data.links,
                                                )
                                                .distance(90),
                                        )
                                        .force(
                                            'center',
                                            g
                                                .forceCenter()
                                                .x(750)
                                                .y(500),
                                        )
                                        .force(
                                            'collide',
                                            g
                                                .forceCollide([65])
                                                .iterations([60]),
                                        )
                                    g.selectAll('g.node').call(
                                        g
                                            .drag()
                                            .on('start', function(t) {
                                                g.event.active ||
                                                    n
                                                        .alphaTarget(0.3)
                                                        .restart(),
                                                    (t.fx = t.x),
                                                    (t.fy = t.y)
                                            })
                                            .on('drag', function(t) {
                                                ;(t.fx = g.event.x),
                                                    (t.fy = g.event.y)
                                            })
                                            .on('end', function(t) {
                                                g.event.active ||
                                                    n.alphaTarget(0),
                                                    (t.fx = null),
                                                    (t.fy = null)
                                            }),
                                    )
                                    n.on('tick', function() {
                                        t.d3Graph.call(k)
                                    }),
                                        (window.force = n)
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var t = this,
                                        n = this.props.data.nodes.map(function(
                                            n,
                                        ) {
                                            return b.createElement(E, {
                                                data: n,
                                                name: n.name,
                                                key: n.id,
                                                handleClick:
                                                    t.props.handleClick,
                                            })
                                        }),
                                        e = this.props.data.links.map(function(
                                            t,
                                            n,
                                        ) {
                                            return b.createElement(N, {
                                                key: n,
                                                data: t,
                                            })
                                        })
                                    return b.createElement(
                                        'svg',
                                        {
                                            className: 'graph',
                                            width: 1500,
                                            height: 1e3,
                                            style: {
                                                border: '1px solid black',
                                            },
                                        },
                                        b.createElement(
                                            'g',
                                            { className: 'frameForZoom' },
                                            b.createElement('g', null, n),
                                            b.createElement('g', null, e),
                                        ),
                                    )
                                },
                            },
                        ]),
                        n
                    )
                })(),
                N = (function(t) {
                    function n() {
                        return c(this, n), l(this, h(n).apply(this, arguments))
                    }
                    return (
                        d(n, b.Component),
                        s(n, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.d3Link = g
                                        .select(i.a.findDOMNode(this))
                                        .datum(this.props.data)
                                        .call(w)
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function() {
                                    this.d3Link.datum(this.props.data).call(M)
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    return b.createElement('line', {
                                        className: 'link',
                                    })
                                },
                            },
                        ]),
                        n
                    )
                })(),
                E = (function(t) {
                    function n() {
                        return c(this, n), l(this, h(n).apply(this, arguments))
                    }
                    return (
                        d(n, b.Component),
                        s(n, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.d3Node = g
                                        .select(i.a.findDOMNode(this))
                                        .datum(this.props.data)
                                        .call(m)
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function() {
                                    this.d3Node.datum(this.props.data).call(x)
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var t = this
                                    return b.createElement(
                                        'g',
                                        { className: 'node' },
                                        b.createElement('circle', {
                                            name: this.props.data.id,
                                            ref: 'dragMe',
                                            onClick: function(n) {
                                                return t.props.handleClick(
                                                    t.props.data.id,
                                                )
                                            },
                                        }),
                                        b.createElement(
                                            'g',
                                            null,
                                            b.createElement('rect', null),
                                            b.createElement(
                                                'text',
                                                null,
                                                this.props.data.name,
                                            ),
                                        ),
                                    )
                                },
                            },
                        ]),
                        n
                    )
                })()
            n.default = A
        },
        74: function(t, n, e) {
            'use strict'
            e.r(n)
            var r = function(t, n) {
                    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
                },
                i = function(t) {
                    var n
                    return (
                        1 === t.length &&
                            ((n = t),
                            (t = function(t, e) {
                                return r(n(t), e)
                            })),
                        {
                            left: function(n, e, r, i) {
                                for (
                                    null == r && (r = 0),
                                        null == i && (i = n.length);
                                    r < i;

                                ) {
                                    var u = (r + i) >>> 1
                                    t(n[u], e) < 0 ? (r = u + 1) : (i = u)
                                }
                                return r
                            },
                            right: function(n, e, r, i) {
                                for (
                                    null == r && (r = 0),
                                        null == i && (i = n.length);
                                    r < i;

                                ) {
                                    var u = (r + i) >>> 1
                                    t(n[u], e) > 0 ? (i = u) : (r = u + 1)
                                }
                                return r
                            },
                        }
                    )
                }
            var u = i(r),
                o = u.right,
                a = u.left,
                c = o,
                f = function(t, n) {
                    null == n && (n = s)
                    for (
                        var e = 0,
                            r = t.length - 1,
                            i = t[0],
                            u = new Array(r < 0 ? 0 : r);
                        e < r;

                    )
                        u[e] = n(i, (i = t[++e]))
                    return u
                }
            function s(t, n) {
                return [t, n]
            }
            var l = function(t, n, e) {
                    var r,
                        i,
                        u,
                        o,
                        a = t.length,
                        c = n.length,
                        f = new Array(a * c)
                    for (null == e && (e = s), r = u = 0; r < a; ++r)
                        for (o = t[r], i = 0; i < c; ++i, ++u) f[u] = e(o, n[i])
                    return f
                },
                h = function(t, n) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                },
                d = function(t) {
                    return null === t ? NaN : +t
                },
                p = function(t, n) {
                    var e,
                        r,
                        i = t.length,
                        u = 0,
                        o = -1,
                        a = 0,
                        c = 0
                    if (null == n)
                        for (; ++o < i; )
                            isNaN((e = d(t[o]))) ||
                                (c += (r = e - a) * (e - (a += r / ++u)))
                    else
                        for (; ++o < i; )
                            isNaN((e = d(n(t[o], o, t)))) ||
                                (c += (r = e - a) * (e - (a += r / ++u)))
                    if (u > 1) return c / (u - 1)
                },
                v = function(t, n) {
                    var e = p(t, n)
                    return e ? Math.sqrt(e) : e
                },
                y = function(t, n) {
                    var e,
                        r,
                        i,
                        u = t.length,
                        o = -1
                    if (null == n) {
                        for (; ++o < u; )
                            if (null != (e = t[o]) && e >= e)
                                for (r = i = e; ++o < u; )
                                    null != (e = t[o]) &&
                                        (r > e && (r = e), i < e && (i = e))
                    } else
                        for (; ++o < u; )
                            if (null != (e = n(t[o], o, t)) && e >= e)
                                for (r = i = e; ++o < u; )
                                    null != (e = n(t[o], o, t)) &&
                                        (r > e && (r = e), i < e && (i = e))
                    return [r, i]
                },
                g = Array.prototype,
                b = g.slice,
                _ = g.map,
                m = function(t) {
                    return function() {
                        return t
                    }
                },
                x = function(t) {
                    return t
                },
                w = function(t, n, e) {
                    ;(t = +t),
                        (n = +n),
                        (e =
                            (i = arguments.length) < 2
                                ? ((n = t), (t = 0), 1)
                                : i < 3
                                ? 1
                                : +e)
                    for (
                        var r = -1,
                            i = 0 | Math.max(0, Math.ceil((n - t) / e)),
                            u = new Array(i);
                        ++r < i;

                    )
                        u[r] = t + r * e
                    return u
                },
                M = Math.sqrt(50),
                k = Math.sqrt(10),
                A = Math.sqrt(2),
                S = function(t, n, e) {
                    var r,
                        i,
                        u,
                        o,
                        a = -1
                    if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t]
                    if (
                        ((r = n < t) && ((i = t), (t = n), (n = i)),
                        0 === (o = N(t, n, e)) || !isFinite(o))
                    )
                        return []
                    if (o > 0)
                        for (
                            t = Math.ceil(t / o),
                                n = Math.floor(n / o),
                                u = new Array((i = Math.ceil(n - t + 1)));
                            ++a < i;

                        )
                            u[a] = (t + a) * o
                    else
                        for (
                            t = Math.floor(t * o),
                                n = Math.ceil(n * o),
                                u = new Array((i = Math.ceil(t - n + 1)));
                            ++a < i;

                        )
                            u[a] = (t - a) / o
                    return r && u.reverse(), u
                }
            function N(t, n, e) {
                var r = (n - t) / Math.max(0, e),
                    i = Math.floor(Math.log(r) / Math.LN10),
                    u = r / Math.pow(10, i)
                return i >= 0
                    ? (u >= M ? 10 : u >= k ? 5 : u >= A ? 2 : 1) *
                          Math.pow(10, i)
                    : -Math.pow(10, -i) /
                          (u >= M ? 10 : u >= k ? 5 : u >= A ? 2 : 1)
            }
            function E(t, n, e) {
                var r = Math.abs(n - t) / Math.max(0, e),
                    i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                    u = r / i
                return (
                    u >= M ? (i *= 10) : u >= k ? (i *= 5) : u >= A && (i *= 2),
                    n < t ? -i : i
                )
            }
            var T = function(t) {
                    return Math.ceil(Math.log(t.length) / Math.LN2) + 1
                },
                C = function() {
                    var t = x,
                        n = y,
                        e = T
                    function r(r) {
                        var i,
                            u,
                            o = r.length,
                            a = new Array(o)
                        for (i = 0; i < o; ++i) a[i] = t(r[i], i, r)
                        var f = n(a),
                            s = f[0],
                            l = f[1],
                            h = e(a, s, l)
                        Array.isArray(h) ||
                            ((h = E(s, l, h)),
                            (h = w(Math.ceil(s / h) * h, l, h)))
                        for (var d = h.length; h[0] <= s; ) h.shift(), --d
                        for (; h[d - 1] > l; ) h.pop(), --d
                        var p,
                            v = new Array(d + 1)
                        for (i = 0; i <= d; ++i)
                            ((p = v[i] = []).x0 = i > 0 ? h[i - 1] : s),
                                (p.x1 = i < d ? h[i] : l)
                        for (i = 0; i < o; ++i)
                            s <= (u = a[i]) &&
                                u <= l &&
                                v[c(h, u, 0, d)].push(r[i])
                        return v
                    }
                    return (
                        (r.value = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : m(n)), r)
                                : t
                        }),
                        (r.domain = function(t) {
                            return arguments.length
                                ? ((n =
                                      'function' == typeof t
                                          ? t
                                          : m([t[0], t[1]])),
                                  r)
                                : n
                        }),
                        (r.thresholds = function(t) {
                            return arguments.length
                                ? ((e =
                                      'function' == typeof t
                                          ? t
                                          : Array.isArray(t)
                                          ? m(b.call(t))
                                          : m(t)),
                                  r)
                                : e
                        }),
                        r
                    )
                },
                P = function(t, n, e) {
                    if ((null == e && (e = d), (r = t.length))) {
                        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t)
                        if (n >= 1) return +e(t[r - 1], r - 1, t)
                        var r,
                            i = (r - 1) * n,
                            u = Math.floor(i),
                            o = +e(t[u], u, t)
                        return o + (+e(t[u + 1], u + 1, t) - o) * (i - u)
                    }
                },
                z = function(t, n, e) {
                    return (
                        (t = _.call(t, d).sort(r)),
                        Math.ceil(
                            (e - n) /
                                (2 *
                                    (P(t, 0.75) - P(t, 0.25)) *
                                    Math.pow(t.length, -1 / 3)),
                        )
                    )
                },
                R = function(t, n, e) {
                    return Math.ceil(
                        (e - n) / (3.5 * v(t) * Math.pow(t.length, -1 / 3)),
                    )
                },
                D = function(t, n) {
                    var e,
                        r,
                        i = t.length,
                        u = -1
                    if (null == n) {
                        for (; ++u < i; )
                            if (null != (e = t[u]) && e >= e)
                                for (r = e; ++u < i; )
                                    null != (e = t[u]) && e > r && (r = e)
                    } else
                        for (; ++u < i; )
                            if (null != (e = n(t[u], u, t)) && e >= e)
                                for (r = e; ++u < i; )
                                    null != (e = n(t[u], u, t)) &&
                                        e > r &&
                                        (r = e)
                    return r
                },
                L = function(t, n) {
                    var e,
                        r = t.length,
                        i = r,
                        u = -1,
                        o = 0
                    if (null == n)
                        for (; ++u < r; ) isNaN((e = d(t[u]))) ? --i : (o += e)
                    else
                        for (; ++u < r; )
                            isNaN((e = d(n(t[u], u, t)))) ? --i : (o += e)
                    if (i) return o / i
                },
                O = function(t, n) {
                    var e,
                        i = t.length,
                        u = -1,
                        o = []
                    if (null == n)
                        for (; ++u < i; ) isNaN((e = d(t[u]))) || o.push(e)
                    else
                        for (; ++u < i; )
                            isNaN((e = d(n(t[u], u, t)))) || o.push(e)
                    return P(o.sort(r), 0.5)
                },
                q = function(t) {
                    for (var n, e, r, i = t.length, u = -1, o = 0; ++u < i; )
                        o += t[u].length
                    for (e = new Array(o); --i >= 0; )
                        for (n = (r = t[i]).length; --n >= 0; ) e[--o] = r[n]
                    return e
                },
                U = function(t, n) {
                    var e,
                        r,
                        i = t.length,
                        u = -1
                    if (null == n) {
                        for (; ++u < i; )
                            if (null != (e = t[u]) && e >= e)
                                for (r = e; ++u < i; )
                                    null != (e = t[u]) && r > e && (r = e)
                    } else
                        for (; ++u < i; )
                            if (null != (e = n(t[u], u, t)) && e >= e)
                                for (r = e; ++u < i; )
                                    null != (e = n(t[u], u, t)) &&
                                        r > e &&
                                        (r = e)
                    return r
                },
                B = function(t, n) {
                    for (var e = n.length, r = new Array(e); e--; )
                        r[e] = t[n[e]]
                    return r
                },
                F = function(t, n) {
                    if ((e = t.length)) {
                        var e,
                            i,
                            u = 0,
                            o = 0,
                            a = t[o]
                        for (null == n && (n = r); ++u < e; )
                            (n((i = t[u]), a) < 0 || 0 !== n(a, a)) &&
                                ((a = i), (o = u))
                        return 0 === n(a, a) ? o : void 0
                    }
                },
                Y = function(t, n, e) {
                    for (
                        var r,
                            i,
                            u =
                                (null == e ? t.length : e) -
                                (n = null == n ? 0 : +n);
                        u;

                    )
                        (i = (Math.random() * u--) | 0),
                            (r = t[u + n]),
                            (t[u + n] = t[i + n]),
                            (t[i + n] = r)
                    return t
                },
                I = function(t, n) {
                    var e,
                        r = t.length,
                        i = -1,
                        u = 0
                    if (null == n) for (; ++i < r; ) (e = +t[i]) && (u += e)
                    else for (; ++i < r; ) (e = +n(t[i], i, t)) && (u += e)
                    return u
                },
                j = function(t) {
                    if (!(i = t.length)) return []
                    for (var n = -1, e = U(t, H), r = new Array(e); ++n < e; )
                        for (
                            var i, u = -1, o = (r[n] = new Array(i));
                            ++u < i;

                        )
                            o[u] = t[u][n]
                    return r
                }
            function H(t) {
                return t.length
            }
            var G = function() {
                    return j(arguments)
                },
                X = Array.prototype.slice,
                V = function(t) {
                    return t
                },
                $ = 1,
                W = 2,
                Z = 3,
                Q = 4,
                J = 1e-6
            function K(t) {
                return 'translate(' + (t + 0.5) + ',0)'
            }
            function tt(t) {
                return 'translate(0,' + (t + 0.5) + ')'
            }
            function nt() {
                return !this.__axis
            }
            function et(t, n) {
                var e = [],
                    r = null,
                    i = null,
                    u = 6,
                    o = 6,
                    a = 3,
                    c = t === $ || t === Q ? -1 : 1,
                    f = t === Q || t === W ? 'x' : 'y',
                    s = t === $ || t === Z ? K : tt
                function l(l) {
                    var h =
                            null == r
                                ? n.ticks
                                    ? n.ticks.apply(n, e)
                                    : n.domain()
                                : r,
                        d =
                            null == i
                                ? n.tickFormat
                                    ? n.tickFormat.apply(n, e)
                                    : V
                                : i,
                        p = Math.max(u, 0) + a,
                        v = n.range(),
                        y = +v[0] + 0.5,
                        g = +v[v.length - 1] + 0.5,
                        b = (n.bandwidth
                            ? function(t) {
                                  var n = Math.max(0, t.bandwidth() - 1) / 2
                                  return (
                                      t.round() && (n = Math.round(n)),
                                      function(e) {
                                          return +t(e) + n
                                      }
                                  )
                              }
                            : function(t) {
                                  return function(n) {
                                      return +t(n)
                                  }
                              })(n.copy()),
                        _ = l.selection ? l.selection() : l,
                        m = _.selectAll('.domain').data([null]),
                        x = _.selectAll('.tick')
                            .data(h, n)
                            .order(),
                        w = x.exit(),
                        M = x
                            .enter()
                            .append('g')
                            .attr('class', 'tick'),
                        k = x.select('line'),
                        A = x.select('text')
                    ;(m = m.merge(
                        m
                            .enter()
                            .insert('path', '.tick')
                            .attr('class', 'domain')
                            .attr('stroke', 'currentColor'),
                    )),
                        (x = x.merge(M)),
                        (k = k.merge(
                            M.append('line')
                                .attr('stroke', 'currentColor')
                                .attr(f + '2', c * u),
                        )),
                        (A = A.merge(
                            M.append('text')
                                .attr('fill', 'currentColor')
                                .attr(f, c * p)
                                .attr(
                                    'dy',
                                    t === $
                                        ? '0em'
                                        : t === Z
                                        ? '0.71em'
                                        : '0.32em',
                                ),
                        )),
                        l !== _ &&
                            ((m = m.transition(l)),
                            (x = x.transition(l)),
                            (k = k.transition(l)),
                            (A = A.transition(l)),
                            (w = w
                                .transition(l)
                                .attr('opacity', J)
                                .attr('transform', function(t) {
                                    return isFinite((t = b(t)))
                                        ? s(t)
                                        : this.getAttribute('transform')
                                })),
                            M.attr('opacity', J).attr('transform', function(t) {
                                var n = this.parentNode.__axis
                                return s(n && isFinite((n = n(t))) ? n : b(t))
                            })),
                        w.remove(),
                        m.attr(
                            'd',
                            t === Q || t == W
                                ? o
                                    ? 'M' +
                                      c * o +
                                      ',' +
                                      y +
                                      'H0.5V' +
                                      g +
                                      'H' +
                                      c * o
                                    : 'M0.5,' + y + 'V' + g
                                : o
                                ? 'M' +
                                  y +
                                  ',' +
                                  c * o +
                                  'V0.5H' +
                                  g +
                                  'V' +
                                  c * o
                                : 'M' + y + ',0.5H' + g,
                        ),
                        x.attr('opacity', 1).attr('transform', function(t) {
                            return s(b(t))
                        }),
                        k.attr(f + '2', c * u),
                        A.attr(f, c * p).text(d),
                        _.filter(nt)
                            .attr('fill', 'none')
                            .attr('font-size', 10)
                            .attr('font-family', 'sans-serif')
                            .attr(
                                'text-anchor',
                                t === W ? 'start' : t === Q ? 'end' : 'middle',
                            ),
                        _.each(function() {
                            this.__axis = b
                        })
                }
                return (
                    (l.scale = function(t) {
                        return arguments.length ? ((n = t), l) : n
                    }),
                    (l.ticks = function() {
                        return (e = X.call(arguments)), l
                    }),
                    (l.tickArguments = function(t) {
                        return arguments.length
                            ? ((e = null == t ? [] : X.call(t)), l)
                            : e.slice()
                    }),
                    (l.tickValues = function(t) {
                        return arguments.length
                            ? ((r = null == t ? null : X.call(t)), l)
                            : r && r.slice()
                    }),
                    (l.tickFormat = function(t) {
                        return arguments.length ? ((i = t), l) : i
                    }),
                    (l.tickSize = function(t) {
                        return arguments.length ? ((u = o = +t), l) : u
                    }),
                    (l.tickSizeInner = function(t) {
                        return arguments.length ? ((u = +t), l) : u
                    }),
                    (l.tickSizeOuter = function(t) {
                        return arguments.length ? ((o = +t), l) : o
                    }),
                    (l.tickPadding = function(t) {
                        return arguments.length ? ((a = +t), l) : a
                    }),
                    l
                )
            }
            function rt(t) {
                return et($, t)
            }
            function it(t) {
                return et(W, t)
            }
            function ut(t) {
                return et(Z, t)
            }
            function ot(t) {
                return et(Q, t)
            }
            var at = { value: function() {} }
            function ct() {
                for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                    if (!(t = arguments[n] + '') || t in r)
                        throw new Error('illegal type: ' + t)
                    r[t] = []
                }
                return new ft(r)
            }
            function ft(t) {
                this._ = t
            }
            function st(t, n) {
                for (var e, r = 0, i = t.length; r < i; ++r)
                    if ((e = t[r]).name === n) return e.value
            }
            function lt(t, n, e) {
                for (var r = 0, i = t.length; r < i; ++r)
                    if (t[r].name === n) {
                        ;(t[r] = at), (t = t.slice(0, r).concat(t.slice(r + 1)))
                        break
                    }
                return null != e && t.push({ name: n, value: e }), t
            }
            ft.prototype = ct.prototype = {
                constructor: ft,
                on: function(t, n) {
                    var e,
                        r,
                        i = this._,
                        u = ((r = i),
                        (t + '')
                            .trim()
                            .split(/^|\s+/)
                            .map(function(t) {
                                var n = '',
                                    e = t.indexOf('.')
                                if (
                                    (e >= 0 &&
                                        ((n = t.slice(e + 1)),
                                        (t = t.slice(0, e))),
                                    t && !r.hasOwnProperty(t))
                                )
                                    throw new Error('unknown type: ' + t)
                                return { type: t, name: n }
                            })),
                        o = -1,
                        a = u.length
                    if (!(arguments.length < 2)) {
                        if (null != n && 'function' != typeof n)
                            throw new Error('invalid callback: ' + n)
                        for (; ++o < a; )
                            if ((e = (t = u[o]).type))
                                i[e] = lt(i[e], t.name, n)
                            else if (null == n)
                                for (e in i) i[e] = lt(i[e], t.name, null)
                        return this
                    }
                    for (; ++o < a; )
                        if ((e = (t = u[o]).type) && (e = st(i[e], t.name)))
                            return e
                },
                copy: function() {
                    var t = {},
                        n = this._
                    for (var e in n) t[e] = n[e].slice()
                    return new ft(t)
                },
                call: function(t, n) {
                    if ((e = arguments.length - 2) > 0)
                        for (var e, r, i = new Array(e), u = 0; u < e; ++u)
                            i[u] = arguments[u + 2]
                    if (!this._.hasOwnProperty(t))
                        throw new Error('unknown type: ' + t)
                    for (u = 0, e = (r = this._[t]).length; u < e; ++u)
                        r[u].value.apply(n, i)
                },
                apply: function(t, n, e) {
                    if (!this._.hasOwnProperty(t))
                        throw new Error('unknown type: ' + t)
                    for (var r = this._[t], i = 0, u = r.length; i < u; ++i)
                        r[i].value.apply(n, e)
                },
            }
            var ht = ct,
                dt = 'http://www.w3.org/1999/xhtml',
                pt = {
                    svg: 'http://www.w3.org/2000/svg',
                    xhtml: dt,
                    xlink: 'http://www.w3.org/1999/xlink',
                    xml: 'http://www.w3.org/XML/1998/namespace',
                    xmlns: 'http://www.w3.org/2000/xmlns/',
                },
                vt = function(t) {
                    var n = (t += ''),
                        e = n.indexOf(':')
                    return (
                        e >= 0 &&
                            'xmlns' !== (n = t.slice(0, e)) &&
                            (t = t.slice(e + 1)),
                        pt.hasOwnProperty(n) ? { space: pt[n], local: t } : t
                    )
                }
            var yt = function(t) {
                var n = vt(t)
                return (n.local
                    ? function(t) {
                          return function() {
                              return this.ownerDocument.createElementNS(
                                  t.space,
                                  t.local,
                              )
                          }
                      }
                    : function(t) {
                          return function() {
                              var n = this.ownerDocument,
                                  e = this.namespaceURI
                              return e === dt &&
                                  n.documentElement.namespaceURI === dt
                                  ? n.createElement(t)
                                  : n.createElementNS(e, t)
                          }
                      })(n)
            }
            function gt() {}
            var bt = function(t) {
                return null == t
                    ? gt
                    : function() {
                          return this.querySelector(t)
                      }
            }
            function _t() {
                return []
            }
            var mt = function(t) {
                    return null == t
                        ? _t
                        : function() {
                              return this.querySelectorAll(t)
                          }
                },
                xt = function(t) {
                    return function() {
                        return this.matches(t)
                    }
                }
            if ('undefined' != typeof document) {
                var wt = document.documentElement
                if (!wt.matches) {
                    var Mt =
                        wt.webkitMatchesSelector ||
                        wt.msMatchesSelector ||
                        wt.mozMatchesSelector ||
                        wt.oMatchesSelector
                    xt = function(t) {
                        return function() {
                            return Mt.call(this, t)
                        }
                    }
                }
            }
            var kt = xt,
                At = function(t) {
                    return new Array(t.length)
                }
            function St(t, n) {
                ;(this.ownerDocument = t.ownerDocument),
                    (this.namespaceURI = t.namespaceURI),
                    (this._next = null),
                    (this._parent = t),
                    (this.__data__ = n)
            }
            St.prototype = {
                constructor: St,
                appendChild: function(t) {
                    return this._parent.insertBefore(t, this._next)
                },
                insertBefore: function(t, n) {
                    return this._parent.insertBefore(t, n)
                },
                querySelector: function(t) {
                    return this._parent.querySelector(t)
                },
                querySelectorAll: function(t) {
                    return this._parent.querySelectorAll(t)
                },
            }
            var Nt = '$'
            function Et(t, n, e, r, i, u) {
                for (var o, a = 0, c = n.length, f = u.length; a < f; ++a)
                    (o = n[a])
                        ? ((o.__data__ = u[a]), (r[a] = o))
                        : (e[a] = new St(t, u[a]))
                for (; a < c; ++a) (o = n[a]) && (i[a] = o)
            }
            function Tt(t, n, e, r, i, u, o) {
                var a,
                    c,
                    f,
                    s = {},
                    l = n.length,
                    h = u.length,
                    d = new Array(l)
                for (a = 0; a < l; ++a)
                    (c = n[a]) &&
                        ((d[a] = f = Nt + o.call(c, c.__data__, a, n)),
                        f in s ? (i[a] = c) : (s[f] = c))
                for (a = 0; a < h; ++a)
                    (c = s[(f = Nt + o.call(t, u[a], a, u))])
                        ? ((r[a] = c), (c.__data__ = u[a]), (s[f] = null))
                        : (e[a] = new St(t, u[a]))
                for (a = 0; a < l; ++a)
                    (c = n[a]) && s[d[a]] === c && (i[a] = c)
            }
            function Ct(t, n) {
                return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
            }
            var Pt = function(t) {
                return (
                    (t.ownerDocument && t.ownerDocument.defaultView) ||
                    (t.document && t) ||
                    t.defaultView
                )
            }
            function zt(t, n) {
                return (
                    t.style.getPropertyValue(n) ||
                    Pt(t)
                        .getComputedStyle(t, null)
                        .getPropertyValue(n)
                )
            }
            function Rt(t) {
                return t.trim().split(/^|\s+/)
            }
            function Dt(t) {
                return t.classList || new Lt(t)
            }
            function Lt(t) {
                ;(this._node = t),
                    (this._names = Rt(t.getAttribute('class') || ''))
            }
            function Ot(t, n) {
                for (var e = Dt(t), r = -1, i = n.length; ++r < i; ) e.add(n[r])
            }
            function qt(t, n) {
                for (var e = Dt(t), r = -1, i = n.length; ++r < i; )
                    e.remove(n[r])
            }
            Lt.prototype = {
                add: function(t) {
                    this._names.indexOf(t) < 0 &&
                        (this._names.push(t),
                        this._node.setAttribute('class', this._names.join(' ')))
                },
                remove: function(t) {
                    var n = this._names.indexOf(t)
                    n >= 0 &&
                        (this._names.splice(n, 1),
                        this._node.setAttribute('class', this._names.join(' ')))
                },
                contains: function(t) {
                    return this._names.indexOf(t) >= 0
                },
            }
            function Ut() {
                this.textContent = ''
            }
            function Bt() {
                this.innerHTML = ''
            }
            function Ft() {
                this.nextSibling && this.parentNode.appendChild(this)
            }
            function Yt() {
                this.previousSibling &&
                    this.parentNode.insertBefore(
                        this,
                        this.parentNode.firstChild,
                    )
            }
            function It() {
                return null
            }
            function jt() {
                var t = this.parentNode
                t && t.removeChild(this)
            }
            function Ht() {
                return this.parentNode.insertBefore(
                    this.cloneNode(!1),
                    this.nextSibling,
                )
            }
            function Gt() {
                return this.parentNode.insertBefore(
                    this.cloneNode(!0),
                    this.nextSibling,
                )
            }
            var Xt = {},
                Vt = null
            'undefined' != typeof document &&
                ('onmouseenter' in document.documentElement ||
                    (Xt = { mouseenter: 'mouseover', mouseleave: 'mouseout' }))
            function $t(t, n, e) {
                return (
                    (t = Wt(t, n, e)),
                    function(n) {
                        var e = n.relatedTarget
                        ;(e &&
                            (e === this ||
                                8 & e.compareDocumentPosition(this))) ||
                            t.call(this, n)
                    }
                )
            }
            function Wt(t, n, e) {
                return function(r) {
                    var i = Vt
                    Vt = r
                    try {
                        t.call(this, this.__data__, n, e)
                    } finally {
                        Vt = i
                    }
                }
            }
            function Zt(t) {
                return function() {
                    var n = this.__on
                    if (n) {
                        for (var e, r = 0, i = -1, u = n.length; r < u; ++r)
                            (e = n[r]),
                                (t.type && e.type !== t.type) ||
                                e.name !== t.name
                                    ? (n[++i] = e)
                                    : this.removeEventListener(
                                          e.type,
                                          e.listener,
                                          e.capture,
                                      )
                        ++i ? (n.length = i) : delete this.__on
                    }
                }
            }
            function Qt(t, n, e) {
                var r = Xt.hasOwnProperty(t.type) ? $t : Wt
                return function(i, u, o) {
                    var a,
                        c = this.__on,
                        f = r(n, u, o)
                    if (c)
                        for (var s = 0, l = c.length; s < l; ++s)
                            if ((a = c[s]).type === t.type && a.name === t.name)
                                return (
                                    this.removeEventListener(
                                        a.type,
                                        a.listener,
                                        a.capture,
                                    ),
                                    this.addEventListener(
                                        a.type,
                                        (a.listener = f),
                                        (a.capture = e),
                                    ),
                                    void (a.value = n)
                                )
                    this.addEventListener(t.type, f, e),
                        (a = {
                            type: t.type,
                            name: t.name,
                            value: n,
                            listener: f,
                            capture: e,
                        }),
                        c ? c.push(a) : (this.__on = [a])
                }
            }
            function Jt(t, n, e, r) {
                var i = Vt
                ;(t.sourceEvent = Vt), (Vt = t)
                try {
                    return n.apply(e, r)
                } finally {
                    Vt = i
                }
            }
            function Kt(t, n, e) {
                var r = Pt(t),
                    i = r.CustomEvent
                'function' == typeof i
                    ? (i = new i(n, e))
                    : ((i = r.document.createEvent('Event')),
                      e
                          ? (i.initEvent(n, e.bubbles, e.cancelable),
                            (i.detail = e.detail))
                          : i.initEvent(n, !1, !1)),
                    t.dispatchEvent(i)
            }
            var tn = [null]
            function nn(t, n) {
                ;(this._groups = t), (this._parents = n)
            }
            function en() {
                return new nn([[document.documentElement]], tn)
            }
            nn.prototype = en.prototype = {
                constructor: nn,
                select: function(t) {
                    'function' != typeof t && (t = bt(t))
                    for (
                        var n = this._groups,
                            e = n.length,
                            r = new Array(e),
                            i = 0;
                        i < e;
                        ++i
                    )
                        for (
                            var u,
                                o,
                                a = n[i],
                                c = a.length,
                                f = (r[i] = new Array(c)),
                                s = 0;
                            s < c;
                            ++s
                        )
                            (u = a[s]) &&
                                (o = t.call(u, u.__data__, s, a)) &&
                                ('__data__' in u && (o.__data__ = u.__data__),
                                (f[s] = o))
                    return new nn(r, this._parents)
                },
                selectAll: function(t) {
                    'function' != typeof t && (t = mt(t))
                    for (
                        var n = this._groups,
                            e = n.length,
                            r = [],
                            i = [],
                            u = 0;
                        u < e;
                        ++u
                    )
                        for (var o, a = n[u], c = a.length, f = 0; f < c; ++f)
                            (o = a[f]) &&
                                (r.push(t.call(o, o.__data__, f, a)), i.push(o))
                    return new nn(r, i)
                },
                filter: function(t) {
                    'function' != typeof t && (t = kt(t))
                    for (
                        var n = this._groups,
                            e = n.length,
                            r = new Array(e),
                            i = 0;
                        i < e;
                        ++i
                    )
                        for (
                            var u,
                                o = n[i],
                                a = o.length,
                                c = (r[i] = []),
                                f = 0;
                            f < a;
                            ++f
                        )
                            (u = o[f]) &&
                                t.call(u, u.__data__, f, o) &&
                                c.push(u)
                    return new nn(r, this._parents)
                },
                data: function(t, n) {
                    if (!t)
                        return (
                            (p = new Array(this.size())),
                            (s = -1),
                            this.each(function(t) {
                                p[++s] = t
                            }),
                            p
                        )
                    var e,
                        r = n ? Tt : Et,
                        i = this._parents,
                        u = this._groups
                    'function' != typeof t &&
                        ((e = t),
                        (t = function() {
                            return e
                        }))
                    for (
                        var o = u.length,
                            a = new Array(o),
                            c = new Array(o),
                            f = new Array(o),
                            s = 0;
                        s < o;
                        ++s
                    ) {
                        var l = i[s],
                            h = u[s],
                            d = h.length,
                            p = t.call(l, l && l.__data__, s, i),
                            v = p.length,
                            y = (c[s] = new Array(v)),
                            g = (a[s] = new Array(v))
                        r(l, h, y, g, (f[s] = new Array(d)), p, n)
                        for (var b, _, m = 0, x = 0; m < v; ++m)
                            if ((b = y[m])) {
                                for (
                                    m >= x && (x = m + 1);
                                    !(_ = g[x]) && ++x < v;

                                );
                                b._next = _ || null
                            }
                    }
                    return ((a = new nn(a, i))._enter = c), (a._exit = f), a
                },
                enter: function() {
                    return new nn(
                        this._enter || this._groups.map(At),
                        this._parents,
                    )
                },
                exit: function() {
                    return new nn(
                        this._exit || this._groups.map(At),
                        this._parents,
                    )
                },
                merge: function(t) {
                    for (
                        var n = this._groups,
                            e = t._groups,
                            r = n.length,
                            i = e.length,
                            u = Math.min(r, i),
                            o = new Array(r),
                            a = 0;
                        a < u;
                        ++a
                    )
                        for (
                            var c,
                                f = n[a],
                                s = e[a],
                                l = f.length,
                                h = (o[a] = new Array(l)),
                                d = 0;
                            d < l;
                            ++d
                        )
                            (c = f[d] || s[d]) && (h[d] = c)
                    for (; a < r; ++a) o[a] = n[a]
                    return new nn(o, this._parents)
                },
                order: function() {
                    for (var t = this._groups, n = -1, e = t.length; ++n < e; )
                        for (
                            var r, i = t[n], u = i.length - 1, o = i[u];
                            --u >= 0;

                        )
                            (r = i[u]) &&
                                (o &&
                                    o !== r.nextSibling &&
                                    o.parentNode.insertBefore(r, o),
                                (o = r))
                    return this
                },
                sort: function(t) {
                    function n(n, e) {
                        return n && e ? t(n.__data__, e.__data__) : !n - !e
                    }
                    t || (t = Ct)
                    for (
                        var e = this._groups,
                            r = e.length,
                            i = new Array(r),
                            u = 0;
                        u < r;
                        ++u
                    ) {
                        for (
                            var o,
                                a = e[u],
                                c = a.length,
                                f = (i[u] = new Array(c)),
                                s = 0;
                            s < c;
                            ++s
                        )
                            (o = a[s]) && (f[s] = o)
                        f.sort(n)
                    }
                    return new nn(i, this._parents).order()
                },
                call: function() {
                    var t = arguments[0]
                    return (arguments[0] = this), t.apply(null, arguments), this
                },
                nodes: function() {
                    var t = new Array(this.size()),
                        n = -1
                    return (
                        this.each(function() {
                            t[++n] = this
                        }),
                        t
                    )
                },
                node: function() {
                    for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                        for (var r = t[n], i = 0, u = r.length; i < u; ++i) {
                            var o = r[i]
                            if (o) return o
                        }
                    return null
                },
                size: function() {
                    var t = 0
                    return (
                        this.each(function() {
                            ++t
                        }),
                        t
                    )
                },
                empty: function() {
                    return !this.node()
                },
                each: function(t) {
                    for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                        for (var i, u = n[e], o = 0, a = u.length; o < a; ++o)
                            (i = u[o]) && t.call(i, i.__data__, o, u)
                    return this
                },
                attr: function(t, n) {
                    var e = vt(t)
                    if (arguments.length < 2) {
                        var r = this.node()
                        return e.local
                            ? r.getAttributeNS(e.space, e.local)
                            : r.getAttribute(e)
                    }
                    return this.each(
                        (null == n
                            ? e.local
                                ? function(t) {
                                      return function() {
                                          this.removeAttributeNS(
                                              t.space,
                                              t.local,
                                          )
                                      }
                                  }
                                : function(t) {
                                      return function() {
                                          this.removeAttribute(t)
                                      }
                                  }
                            : 'function' == typeof n
                            ? e.local
                                ? function(t, n) {
                                      return function() {
                                          var e = n.apply(this, arguments)
                                          null == e
                                              ? this.removeAttributeNS(
                                                    t.space,
                                                    t.local,
                                                )
                                              : this.setAttributeNS(
                                                    t.space,
                                                    t.local,
                                                    e,
                                                )
                                      }
                                  }
                                : function(t, n) {
                                      return function() {
                                          var e = n.apply(this, arguments)
                                          null == e
                                              ? this.removeAttribute(t)
                                              : this.setAttribute(t, e)
                                      }
                                  }
                            : e.local
                            ? function(t, n) {
                                  return function() {
                                      this.setAttributeNS(t.space, t.local, n)
                                  }
                              }
                            : function(t, n) {
                                  return function() {
                                      this.setAttribute(t, n)
                                  }
                              })(e, n),
                    )
                },
                style: function(t, n, e) {
                    return arguments.length > 1
                        ? this.each(
                              (null == n
                                  ? function(t) {
                                        return function() {
                                            this.style.removeProperty(t)
                                        }
                                    }
                                  : 'function' == typeof n
                                  ? function(t, n, e) {
                                        return function() {
                                            var r = n.apply(this, arguments)
                                            null == r
                                                ? this.style.removeProperty(t)
                                                : this.style.setProperty(
                                                      t,
                                                      r,
                                                      e,
                                                  )
                                        }
                                    }
                                  : function(t, n, e) {
                                        return function() {
                                            this.style.setProperty(t, n, e)
                                        }
                                    })(t, n, null == e ? '' : e),
                          )
                        : zt(this.node(), t)
                },
                property: function(t, n) {
                    return arguments.length > 1
                        ? this.each(
                              (null == n
                                  ? function(t) {
                                        return function() {
                                            delete this[t]
                                        }
                                    }
                                  : 'function' == typeof n
                                  ? function(t, n) {
                                        return function() {
                                            var e = n.apply(this, arguments)
                                            null == e
                                                ? delete this[t]
                                                : (this[t] = e)
                                        }
                                    }
                                  : function(t, n) {
                                        return function() {
                                            this[t] = n
                                        }
                                    })(t, n),
                          )
                        : this.node()[t]
                },
                classed: function(t, n) {
                    var e = Rt(t + '')
                    if (arguments.length < 2) {
                        for (
                            var r = Dt(this.node()), i = -1, u = e.length;
                            ++i < u;

                        )
                            if (!r.contains(e[i])) return !1
                        return !0
                    }
                    return this.each(
                        ('function' == typeof n
                            ? function(t, n) {
                                  return function() {
                                      ;(n.apply(this, arguments) ? Ot : qt)(
                                          this,
                                          t,
                                      )
                                  }
                              }
                            : n
                            ? function(t) {
                                  return function() {
                                      Ot(this, t)
                                  }
                              }
                            : function(t) {
                                  return function() {
                                      qt(this, t)
                                  }
                              })(e, n),
                    )
                },
                text: function(t) {
                    return arguments.length
                        ? this.each(
                              null == t
                                  ? Ut
                                  : ('function' == typeof t
                                        ? function(t) {
                                              return function() {
                                                  var n = t.apply(
                                                      this,
                                                      arguments,
                                                  )
                                                  this.textContent =
                                                      null == n ? '' : n
                                              }
                                          }
                                        : function(t) {
                                              return function() {
                                                  this.textContent = t
                                              }
                                          })(t),
                          )
                        : this.node().textContent
                },
                html: function(t) {
                    return arguments.length
                        ? this.each(
                              null == t
                                  ? Bt
                                  : ('function' == typeof t
                                        ? function(t) {
                                              return function() {
                                                  var n = t.apply(
                                                      this,
                                                      arguments,
                                                  )
                                                  this.innerHTML =
                                                      null == n ? '' : n
                                              }
                                          }
                                        : function(t) {
                                              return function() {
                                                  this.innerHTML = t
                                              }
                                          })(t),
                          )
                        : this.node().innerHTML
                },
                raise: function() {
                    return this.each(Ft)
                },
                lower: function() {
                    return this.each(Yt)
                },
                append: function(t) {
                    var n = 'function' == typeof t ? t : yt(t)
                    return this.select(function() {
                        return this.appendChild(n.apply(this, arguments))
                    })
                },
                insert: function(t, n) {
                    var e = 'function' == typeof t ? t : yt(t),
                        r = null == n ? It : 'function' == typeof n ? n : bt(n)
                    return this.select(function() {
                        return this.insertBefore(
                            e.apply(this, arguments),
                            r.apply(this, arguments) || null,
                        )
                    })
                },
                remove: function() {
                    return this.each(jt)
                },
                clone: function(t) {
                    return this.select(t ? Gt : Ht)
                },
                datum: function(t) {
                    return arguments.length
                        ? this.property('__data__', t)
                        : this.node().__data__
                },
                on: function(t, n, e) {
                    var r,
                        i,
                        u = (function(t) {
                            return t
                                .trim()
                                .split(/^|\s+/)
                                .map(function(t) {
                                    var n = '',
                                        e = t.indexOf('.')
                                    return (
                                        e >= 0 &&
                                            ((n = t.slice(e + 1)),
                                            (t = t.slice(0, e))),
                                        { type: t, name: n }
                                    )
                                })
                        })(t + ''),
                        o = u.length
                    if (!(arguments.length < 2)) {
                        for (
                            a = n ? Qt : Zt, null == e && (e = !1), r = 0;
                            r < o;
                            ++r
                        )
                            this.each(a(u[r], n, e))
                        return this
                    }
                    var a = this.node().__on
                    if (a)
                        for (var c, f = 0, s = a.length; f < s; ++f)
                            for (r = 0, c = a[f]; r < o; ++r)
                                if (
                                    (i = u[r]).type === c.type &&
                                    i.name === c.name
                                )
                                    return c.value
                },
                dispatch: function(t, n) {
                    return this.each(
                        ('function' == typeof n
                            ? function(t, n) {
                                  return function() {
                                      return Kt(
                                          this,
                                          t,
                                          n.apply(this, arguments),
                                      )
                                  }
                              }
                            : function(t, n) {
                                  return function() {
                                      return Kt(this, t, n)
                                  }
                              })(t, n),
                    )
                },
            }
            var rn = en,
                un = function(t) {
                    return 'string' == typeof t
                        ? new nn(
                              [[document.querySelector(t)]],
                              [document.documentElement],
                          )
                        : new nn([[t]], tn)
                },
                on = function(t) {
                    return un(yt(t).call(document.documentElement))
                },
                an = 0
            function cn() {
                return new fn()
            }
            function fn() {
                this._ = '@' + (++an).toString(36)
            }
            fn.prototype = cn.prototype = {
                constructor: fn,
                get: function(t) {
                    for (var n = this._; !(n in t); )
                        if (!(t = t.parentNode)) return
                    return t[n]
                },
                set: function(t, n) {
                    return (t[this._] = n)
                },
                remove: function(t) {
                    return this._ in t && delete t[this._]
                },
                toString: function() {
                    return this._
                },
            }
            var sn = function() {
                    for (var t, n = Vt; (t = n.sourceEvent); ) n = t
                    return n
                },
                ln = function(t, n) {
                    var e = t.ownerSVGElement || t
                    if (e.createSVGPoint) {
                        var r = e.createSVGPoint()
                        return (
                            (r.x = n.clientX),
                            (r.y = n.clientY),
                            [
                                (r = r.matrixTransform(
                                    t.getScreenCTM().inverse(),
                                )).x,
                                r.y,
                            ]
                        )
                    }
                    var i = t.getBoundingClientRect()
                    return [
                        n.clientX - i.left - t.clientLeft,
                        n.clientY - i.top - t.clientTop,
                    ]
                },
                hn = function(t) {
                    var n = sn()
                    return (
                        n.changedTouches && (n = n.changedTouches[0]), ln(t, n)
                    )
                },
                dn = function(t) {
                    return 'string' == typeof t
                        ? new nn(
                              [document.querySelectorAll(t)],
                              [document.documentElement],
                          )
                        : new nn([null == t ? [] : t], tn)
                },
                pn = function(t, n, e) {
                    arguments.length < 3 && ((e = n), (n = sn().changedTouches))
                    for (var r, i = 0, u = n ? n.length : 0; i < u; ++i)
                        if ((r = n[i]).identifier === e) return ln(t, r)
                    return null
                },
                vn = function(t, n) {
                    null == n && (n = sn().touches)
                    for (
                        var e = 0, r = n ? n.length : 0, i = new Array(r);
                        e < r;
                        ++e
                    )
                        i[e] = ln(t, n[e])
                    return i
                }
            function yn() {
                Vt.stopImmediatePropagation()
            }
            var gn = function() {
                    Vt.preventDefault(), Vt.stopImmediatePropagation()
                },
                bn = function(t) {
                    var n = t.document.documentElement,
                        e = un(t).on('dragstart.drag', gn, !0)
                    'onselectstart' in n
                        ? e.on('selectstart.drag', gn, !0)
                        : ((n.__noselect = n.style.MozUserSelect),
                          (n.style.MozUserSelect = 'none'))
                }
            function _n(t, n) {
                var e = t.document.documentElement,
                    r = un(t).on('dragstart.drag', null)
                n &&
                    (r.on('click.drag', gn, !0),
                    setTimeout(function() {
                        r.on('click.drag', null)
                    }, 0)),
                    'onselectstart' in e
                        ? r.on('selectstart.drag', null)
                        : ((e.style.MozUserSelect = e.__noselect),
                          delete e.__noselect)
            }
            var mn = function(t) {
                return function() {
                    return t
                }
            }
            function xn(t, n, e, r, i, u, o, a, c, f) {
                ;(this.target = t),
                    (this.type = n),
                    (this.subject = e),
                    (this.identifier = r),
                    (this.active = i),
                    (this.x = u),
                    (this.y = o),
                    (this.dx = a),
                    (this.dy = c),
                    (this._ = f)
            }
            function wn() {
                return !Vt.button
            }
            function Mn() {
                return this.parentNode
            }
            function kn(t) {
                return null == t ? { x: Vt.x, y: Vt.y } : t
            }
            function An() {
                return 'ontouchstart' in this
            }
            xn.prototype.on = function() {
                var t = this._.on.apply(this._, arguments)
                return t === this._ ? this : t
            }
            var Sn = function() {
                    var t,
                        n,
                        e,
                        r,
                        i = wn,
                        u = Mn,
                        o = kn,
                        a = An,
                        c = {},
                        f = ht('start', 'drag', 'end'),
                        s = 0,
                        l = 0
                    function h(t) {
                        t.on('mousedown.drag', d)
                            .filter(a)
                            .on('touchstart.drag', y)
                            .on('touchmove.drag', g)
                            .on('touchend.drag touchcancel.drag', b)
                            .style('touch-action', 'none')
                            .style(
                                '-webkit-tap-highlight-color',
                                'rgba(0,0,0,0)',
                            )
                    }
                    function d() {
                        if (!r && i.apply(this, arguments)) {
                            var o = _(
                                'mouse',
                                u.apply(this, arguments),
                                hn,
                                this,
                                arguments,
                            )
                            o &&
                                (un(Vt.view)
                                    .on('mousemove.drag', p, !0)
                                    .on('mouseup.drag', v, !0),
                                bn(Vt.view),
                                yn(),
                                (e = !1),
                                (t = Vt.clientX),
                                (n = Vt.clientY),
                                o('start'))
                        }
                    }
                    function p() {
                        if ((gn(), !e)) {
                            var r = Vt.clientX - t,
                                i = Vt.clientY - n
                            e = r * r + i * i > l
                        }
                        c.mouse('drag')
                    }
                    function v() {
                        un(Vt.view).on('mousemove.drag mouseup.drag', null),
                            _n(Vt.view, e),
                            gn(),
                            c.mouse('end')
                    }
                    function y() {
                        if (i.apply(this, arguments)) {
                            var t,
                                n,
                                e = Vt.changedTouches,
                                r = u.apply(this, arguments),
                                o = e.length
                            for (t = 0; t < o; ++t)
                                (n = _(
                                    e[t].identifier,
                                    r,
                                    pn,
                                    this,
                                    arguments,
                                )) && (yn(), n('start'))
                        }
                    }
                    function g() {
                        var t,
                            n,
                            e = Vt.changedTouches,
                            r = e.length
                        for (t = 0; t < r; ++t)
                            (n = c[e[t].identifier]) && (gn(), n('drag'))
                    }
                    function b() {
                        var t,
                            n,
                            e = Vt.changedTouches,
                            i = e.length
                        for (
                            r && clearTimeout(r),
                                r = setTimeout(function() {
                                    r = null
                                }, 500),
                                t = 0;
                            t < i;
                            ++t
                        )
                            (n = c[e[t].identifier]) && (yn(), n('end'))
                    }
                    function _(t, n, e, r, i) {
                        var u,
                            a,
                            l,
                            d = e(n, t),
                            p = f.copy()
                        if (
                            Jt(
                                new xn(
                                    h,
                                    'beforestart',
                                    u,
                                    t,
                                    s,
                                    d[0],
                                    d[1],
                                    0,
                                    0,
                                    p,
                                ),
                                function() {
                                    return (
                                        null !=
                                            (Vt.subject = u = o.apply(r, i)) &&
                                        ((a = u.x - d[0] || 0),
                                        (l = u.y - d[1] || 0),
                                        !0)
                                    )
                                },
                            )
                        )
                            return function o(f) {
                                var v,
                                    y = d
                                switch (f) {
                                    case 'start':
                                        ;(c[t] = o), (v = s++)
                                        break
                                    case 'end':
                                        delete c[t], --s
                                    case 'drag':
                                        ;(d = e(n, t)), (v = s)
                                }
                                Jt(
                                    new xn(
                                        h,
                                        f,
                                        u,
                                        t,
                                        v,
                                        d[0] + a,
                                        d[1] + l,
                                        d[0] - y[0],
                                        d[1] - y[1],
                                        p,
                                    ),
                                    p.apply,
                                    p,
                                    [f, r, i],
                                )
                            }
                    }
                    return (
                        (h.filter = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : mn(!!t)),
                                  h)
                                : i
                        }),
                        (h.container = function(t) {
                            return arguments.length
                                ? ((u = 'function' == typeof t ? t : mn(t)), h)
                                : u
                        }),
                        (h.subject = function(t) {
                            return arguments.length
                                ? ((o = 'function' == typeof t ? t : mn(t)), h)
                                : o
                        }),
                        (h.touchable = function(t) {
                            return arguments.length
                                ? ((a = 'function' == typeof t ? t : mn(!!t)),
                                  h)
                                : a
                        }),
                        (h.on = function() {
                            var t = f.on.apply(f, arguments)
                            return t === f ? h : t
                        }),
                        (h.clickDistance = function(t) {
                            return arguments.length
                                ? ((l = (t = +t) * t), h)
                                : Math.sqrt(l)
                        }),
                        h
                    )
                },
                Nn = function(t, n, e) {
                    ;(t.prototype = n.prototype = e), (e.constructor = t)
                }
            function En(t, n) {
                var e = Object.create(t.prototype)
                for (var r in n) e[r] = n[r]
                return e
            }
            function Tn() {}
            var Cn = '\\s*([+-]?\\d+)\\s*',
                Pn = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
                zn = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                Rn = /^#([0-9a-f]{3})$/,
                Dn = /^#([0-9a-f]{6})$/,
                Ln = new RegExp('^rgb\\(' + [Cn, Cn, Cn] + '\\)$'),
                On = new RegExp('^rgb\\(' + [zn, zn, zn] + '\\)$'),
                qn = new RegExp('^rgba\\(' + [Cn, Cn, Cn, Pn] + '\\)$'),
                Un = new RegExp('^rgba\\(' + [zn, zn, zn, Pn] + '\\)$'),
                Bn = new RegExp('^hsl\\(' + [Pn, zn, zn] + '\\)$'),
                Fn = new RegExp('^hsla\\(' + [Pn, zn, zn, Pn] + '\\)$'),
                Yn = {
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    rebeccapurple: 6697881,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074,
                }
            function In(t) {
                var n
                return (
                    (t = (t + '').trim().toLowerCase()),
                    (n = Rn.exec(t))
                        ? new Vn(
                              (((n = parseInt(n[1], 16)) >> 8) & 15) |
                                  ((n >> 4) & 240),
                              ((n >> 4) & 15) | (240 & n),
                              ((15 & n) << 4) | (15 & n),
                              1,
                          )
                        : (n = Dn.exec(t))
                        ? jn(parseInt(n[1], 16))
                        : (n = Ln.exec(t))
                        ? new Vn(n[1], n[2], n[3], 1)
                        : (n = On.exec(t))
                        ? new Vn(
                              (255 * n[1]) / 100,
                              (255 * n[2]) / 100,
                              (255 * n[3]) / 100,
                              1,
                          )
                        : (n = qn.exec(t))
                        ? Hn(n[1], n[2], n[3], n[4])
                        : (n = Un.exec(t))
                        ? Hn(
                              (255 * n[1]) / 100,
                              (255 * n[2]) / 100,
                              (255 * n[3]) / 100,
                              n[4],
                          )
                        : (n = Bn.exec(t))
                        ? Wn(n[1], n[2] / 100, n[3] / 100, 1)
                        : (n = Fn.exec(t))
                        ? Wn(n[1], n[2] / 100, n[3] / 100, n[4])
                        : Yn.hasOwnProperty(t)
                        ? jn(Yn[t])
                        : 'transparent' === t
                        ? new Vn(NaN, NaN, NaN, 0)
                        : null
                )
            }
            function jn(t) {
                return new Vn((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1)
            }
            function Hn(t, n, e, r) {
                return r <= 0 && (t = n = e = NaN), new Vn(t, n, e, r)
            }
            function Gn(t) {
                return (
                    t instanceof Tn || (t = In(t)),
                    t ? new Vn((t = t.rgb()).r, t.g, t.b, t.opacity) : new Vn()
                )
            }
            function Xn(t, n, e, r) {
                return 1 === arguments.length
                    ? Gn(t)
                    : new Vn(t, n, e, null == r ? 1 : r)
            }
            function Vn(t, n, e, r) {
                ;(this.r = +t),
                    (this.g = +n),
                    (this.b = +e),
                    (this.opacity = +r)
            }
            function $n(t) {
                return (
                    ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16
                        ? '0'
                        : '') + t.toString(16)
                )
            }
            function Wn(t, n, e, r) {
                return (
                    r <= 0
                        ? (t = n = e = NaN)
                        : e <= 0 || e >= 1
                        ? (t = n = NaN)
                        : n <= 0 && (t = NaN),
                    new Qn(t, n, e, r)
                )
            }
            function Zn(t, n, e, r) {
                return 1 === arguments.length
                    ? (function(t) {
                          if (t instanceof Qn)
                              return new Qn(t.h, t.s, t.l, t.opacity)
                          if ((t instanceof Tn || (t = In(t)), !t))
                              return new Qn()
                          if (t instanceof Qn) return t
                          var n = (t = t.rgb()).r / 255,
                              e = t.g / 255,
                              r = t.b / 255,
                              i = Math.min(n, e, r),
                              u = Math.max(n, e, r),
                              o = NaN,
                              a = u - i,
                              c = (u + i) / 2
                          return (
                              a
                                  ? ((o =
                                        n === u
                                            ? (e - r) / a + 6 * (e < r)
                                            : e === u
                                            ? (r - n) / a + 2
                                            : (n - e) / a + 4),
                                    (a /= c < 0.5 ? u + i : 2 - u - i),
                                    (o *= 60))
                                  : (a = c > 0 && c < 1 ? 0 : o),
                              new Qn(o, a, c, t.opacity)
                          )
                      })(t)
                    : new Qn(t, n, e, null == r ? 1 : r)
            }
            function Qn(t, n, e, r) {
                ;(this.h = +t),
                    (this.s = +n),
                    (this.l = +e),
                    (this.opacity = +r)
            }
            function Jn(t, n, e) {
                return (
                    255 *
                    (t < 60
                        ? n + ((e - n) * t) / 60
                        : t < 180
                        ? e
                        : t < 240
                        ? n + ((e - n) * (240 - t)) / 60
                        : n)
                )
            }
            Nn(Tn, In, {
                displayable: function() {
                    return this.rgb().displayable()
                },
                hex: function() {
                    return this.rgb().hex()
                },
                toString: function() {
                    return this.rgb() + ''
                },
            }),
                Nn(
                    Vn,
                    Xn,
                    En(Tn, {
                        brighter: function(t) {
                            return (
                                (t =
                                    null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                                new Vn(
                                    this.r * t,
                                    this.g * t,
                                    this.b * t,
                                    this.opacity,
                                )
                            )
                        },
                        darker: function(t) {
                            return (
                                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                                new Vn(
                                    this.r * t,
                                    this.g * t,
                                    this.b * t,
                                    this.opacity,
                                )
                            )
                        },
                        rgb: function() {
                            return this
                        },
                        displayable: function() {
                            return (
                                0 <= this.r &&
                                this.r <= 255 &&
                                0 <= this.g &&
                                this.g <= 255 &&
                                0 <= this.b &&
                                this.b <= 255 &&
                                0 <= this.opacity &&
                                this.opacity <= 1
                            )
                        },
                        hex: function() {
                            return '#' + $n(this.r) + $n(this.g) + $n(this.b)
                        },
                        toString: function() {
                            var t = this.opacity
                            return (
                                (1 ===
                                (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                                    ? 'rgb('
                                    : 'rgba(') +
                                Math.max(
                                    0,
                                    Math.min(255, Math.round(this.r) || 0),
                                ) +
                                ', ' +
                                Math.max(
                                    0,
                                    Math.min(255, Math.round(this.g) || 0),
                                ) +
                                ', ' +
                                Math.max(
                                    0,
                                    Math.min(255, Math.round(this.b) || 0),
                                ) +
                                (1 === t ? ')' : ', ' + t + ')')
                            )
                        },
                    }),
                ),
                Nn(
                    Qn,
                    Zn,
                    En(Tn, {
                        brighter: function(t) {
                            return (
                                (t =
                                    null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                                new Qn(this.h, this.s, this.l * t, this.opacity)
                            )
                        },
                        darker: function(t) {
                            return (
                                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                                new Qn(this.h, this.s, this.l * t, this.opacity)
                            )
                        },
                        rgb: function() {
                            var t = (this.h % 360) + 360 * (this.h < 0),
                                n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                                e = this.l,
                                r = e + (e < 0.5 ? e : 1 - e) * n,
                                i = 2 * e - r
                            return new Vn(
                                Jn(t >= 240 ? t - 240 : t + 120, i, r),
                                Jn(t, i, r),
                                Jn(t < 120 ? t + 240 : t - 120, i, r),
                                this.opacity,
                            )
                        },
                        displayable: function() {
                            return (
                                ((0 <= this.s && this.s <= 1) ||
                                    isNaN(this.s)) &&
                                0 <= this.l &&
                                this.l <= 1 &&
                                0 <= this.opacity &&
                                this.opacity <= 1
                            )
                        },
                    }),
                )
            var Kn = Math.PI / 180,
                te = 180 / Math.PI,
                ne = 0.96422,
                ee = 1,
                re = 0.82521,
                ie = 4 / 29,
                ue = 6 / 29,
                oe = 3 * ue * ue,
                ae = ue * ue * ue
            function ce(t) {
                if (t instanceof le) return new le(t.l, t.a, t.b, t.opacity)
                if (t instanceof _e) {
                    if (isNaN(t.h)) return new le(t.l, 0, 0, t.opacity)
                    var n = t.h * Kn
                    return new le(
                        t.l,
                        Math.cos(n) * t.c,
                        Math.sin(n) * t.c,
                        t.opacity,
                    )
                }
                t instanceof Vn || (t = Gn(t))
                var e,
                    r,
                    i = ve(t.r),
                    u = ve(t.g),
                    o = ve(t.b),
                    a = he((0.2225045 * i + 0.7168786 * u + 0.0606169 * o) / ee)
                return (
                    i === u && u === o
                        ? (e = r = a)
                        : ((e = he(
                              (0.4360747 * i + 0.3850649 * u + 0.1430804 * o) /
                                  ne,
                          )),
                          (r = he(
                              (0.0139322 * i + 0.0971045 * u + 0.7141733 * o) /
                                  re,
                          ))),
                    new le(
                        116 * a - 16,
                        500 * (e - a),
                        200 * (a - r),
                        t.opacity,
                    )
                )
            }
            function fe(t, n) {
                return new le(t, 0, 0, null == n ? 1 : n)
            }
            function se(t, n, e, r) {
                return 1 === arguments.length
                    ? ce(t)
                    : new le(t, n, e, null == r ? 1 : r)
            }
            function le(t, n, e, r) {
                ;(this.l = +t),
                    (this.a = +n),
                    (this.b = +e),
                    (this.opacity = +r)
            }
            function he(t) {
                return t > ae ? Math.pow(t, 1 / 3) : t / oe + ie
            }
            function de(t) {
                return t > ue ? t * t * t : oe * (t - ie)
            }
            function pe(t) {
                return (
                    255 *
                    (t <= 0.0031308
                        ? 12.92 * t
                        : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
                )
            }
            function ve(t) {
                return (t /= 255) <= 0.04045
                    ? t / 12.92
                    : Math.pow((t + 0.055) / 1.055, 2.4)
            }
            function ye(t) {
                if (t instanceof _e) return new _e(t.h, t.c, t.l, t.opacity)
                if ((t instanceof le || (t = ce(t)), 0 === t.a && 0 === t.b))
                    return new _e(NaN, 0, t.l, t.opacity)
                var n = Math.atan2(t.b, t.a) * te
                return new _e(
                    n < 0 ? n + 360 : n,
                    Math.sqrt(t.a * t.a + t.b * t.b),
                    t.l,
                    t.opacity,
                )
            }
            function ge(t, n, e, r) {
                return 1 === arguments.length
                    ? ye(t)
                    : new _e(e, n, t, null == r ? 1 : r)
            }
            function be(t, n, e, r) {
                return 1 === arguments.length
                    ? ye(t)
                    : new _e(t, n, e, null == r ? 1 : r)
            }
            function _e(t, n, e, r) {
                ;(this.h = +t),
                    (this.c = +n),
                    (this.l = +e),
                    (this.opacity = +r)
            }
            Nn(
                le,
                se,
                En(Tn, {
                    brighter: function(t) {
                        return new le(
                            this.l + 18 * (null == t ? 1 : t),
                            this.a,
                            this.b,
                            this.opacity,
                        )
                    },
                    darker: function(t) {
                        return new le(
                            this.l - 18 * (null == t ? 1 : t),
                            this.a,
                            this.b,
                            this.opacity,
                        )
                    },
                    rgb: function() {
                        var t = (this.l + 16) / 116,
                            n = isNaN(this.a) ? t : t + this.a / 500,
                            e = isNaN(this.b) ? t : t - this.b / 200
                        return new Vn(
                            pe(
                                3.1338561 * (n = ne * de(n)) -
                                    1.6168667 * (t = ee * de(t)) -
                                    0.4906146 * (e = re * de(e)),
                            ),
                            pe(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
                            pe(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
                            this.opacity,
                        )
                    },
                }),
            ),
                Nn(
                    _e,
                    be,
                    En(Tn, {
                        brighter: function(t) {
                            return new _e(
                                this.h,
                                this.c,
                                this.l + 18 * (null == t ? 1 : t),
                                this.opacity,
                            )
                        },
                        darker: function(t) {
                            return new _e(
                                this.h,
                                this.c,
                                this.l - 18 * (null == t ? 1 : t),
                                this.opacity,
                            )
                        },
                        rgb: function() {
                            return ce(this).rgb()
                        },
                    }),
                )
            var me = -0.29227,
                xe = -0.90649,
                we = 1.97294,
                Me = we * xe,
                ke = 1.78277 * we,
                Ae = 1.78277 * me - -0.14861 * xe
            function Se(t, n, e, r) {
                return 1 === arguments.length
                    ? (function(t) {
                          if (t instanceof Ne)
                              return new Ne(t.h, t.s, t.l, t.opacity)
                          t instanceof Vn || (t = Gn(t))
                          var n = t.r / 255,
                              e = t.g / 255,
                              r = t.b / 255,
                              i = (Ae * r + Me * n - ke * e) / (Ae + Me - ke),
                              u = r - i,
                              o = (we * (e - i) - me * u) / xe,
                              a = Math.sqrt(o * o + u * u) / (we * i * (1 - i)),
                              c = a ? Math.atan2(o, u) * te - 120 : NaN
                          return new Ne(c < 0 ? c + 360 : c, a, i, t.opacity)
                      })(t)
                    : new Ne(t, n, e, null == r ? 1 : r)
            }
            function Ne(t, n, e, r) {
                ;(this.h = +t),
                    (this.s = +n),
                    (this.l = +e),
                    (this.opacity = +r)
            }
            function Ee(t, n, e, r, i) {
                var u = t * t,
                    o = u * t
                return (
                    ((1 - 3 * t + 3 * u - o) * n +
                        (4 - 6 * u + 3 * o) * e +
                        (1 + 3 * t + 3 * u - 3 * o) * r +
                        o * i) /
                    6
                )
            }
            Nn(
                Ne,
                Se,
                En(Tn, {
                    brighter: function(t) {
                        return (
                            (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                            new Ne(this.h, this.s, this.l * t, this.opacity)
                        )
                    },
                    darker: function(t) {
                        return (
                            (t = null == t ? 0.7 : Math.pow(0.7, t)),
                            new Ne(this.h, this.s, this.l * t, this.opacity)
                        )
                    },
                    rgb: function() {
                        var t = isNaN(this.h) ? 0 : (this.h + 120) * Kn,
                            n = +this.l,
                            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                            r = Math.cos(t),
                            i = Math.sin(t)
                        return new Vn(
                            255 * (n + e * (-0.14861 * r + 1.78277 * i)),
                            255 * (n + e * (me * r + xe * i)),
                            255 * (n + e * (we * r)),
                            this.opacity,
                        )
                    },
                }),
            )
            var Te = function(t) {
                    var n = t.length - 1
                    return function(e) {
                        var r =
                                e <= 0
                                    ? (e = 0)
                                    : e >= 1
                                    ? ((e = 1), n - 1)
                                    : Math.floor(e * n),
                            i = t[r],
                            u = t[r + 1],
                            o = r > 0 ? t[r - 1] : 2 * i - u,
                            a = r < n - 1 ? t[r + 2] : 2 * u - i
                        return Ee((e - r / n) * n, o, i, u, a)
                    }
                },
                Ce = function(t) {
                    var n = t.length
                    return function(e) {
                        var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
                            i = t[(r + n - 1) % n],
                            u = t[r % n],
                            o = t[(r + 1) % n],
                            a = t[(r + 2) % n]
                        return Ee((e - r / n) * n, i, u, o, a)
                    }
                },
                Pe = function(t) {
                    return function() {
                        return t
                    }
                }
            function ze(t, n) {
                return function(e) {
                    return t + e * n
                }
            }
            function Re(t, n) {
                var e = n - t
                return e
                    ? ze(
                          t,
                          e > 180 || e < -180
                              ? e - 360 * Math.round(e / 360)
                              : e,
                      )
                    : Pe(isNaN(t) ? n : t)
            }
            function De(t) {
                return 1 == (t = +t)
                    ? Le
                    : function(n, e) {
                          return e - n
                              ? (function(t, n, e) {
                                    return (
                                        (t = Math.pow(t, e)),
                                        (n = Math.pow(n, e) - t),
                                        (e = 1 / e),
                                        function(r) {
                                            return Math.pow(t + r * n, e)
                                        }
                                    )
                                })(n, e, t)
                              : Pe(isNaN(n) ? e : n)
                      }
            }
            function Le(t, n) {
                var e = n - t
                return e ? ze(t, e) : Pe(isNaN(t) ? n : t)
            }
            var Oe = (function t(n) {
                var e = De(n)
                function r(t, n) {
                    var r = e((t = Xn(t)).r, (n = Xn(n)).r),
                        i = e(t.g, n.g),
                        u = e(t.b, n.b),
                        o = Le(t.opacity, n.opacity)
                    return function(n) {
                        return (
                            (t.r = r(n)),
                            (t.g = i(n)),
                            (t.b = u(n)),
                            (t.opacity = o(n)),
                            t + ''
                        )
                    }
                }
                return (r.gamma = t), r
            })(1)
            function qe(t) {
                return function(n) {
                    var e,
                        r,
                        i = n.length,
                        u = new Array(i),
                        o = new Array(i),
                        a = new Array(i)
                    for (e = 0; e < i; ++e)
                        (r = Xn(n[e])),
                            (u[e] = r.r || 0),
                            (o[e] = r.g || 0),
                            (a[e] = r.b || 0)
                    return (
                        (u = t(u)),
                        (o = t(o)),
                        (a = t(a)),
                        (r.opacity = 1),
                        function(t) {
                            return (
                                (r.r = u(t)), (r.g = o(t)), (r.b = a(t)), r + ''
                            )
                        }
                    )
                }
            }
            var Ue = qe(Te),
                Be = qe(Ce),
                Fe = function(t, n) {
                    var e,
                        r = n ? n.length : 0,
                        i = t ? Math.min(r, t.length) : 0,
                        u = new Array(i),
                        o = new Array(r)
                    for (e = 0; e < i; ++e) u[e] = Qe(t[e], n[e])
                    for (; e < r; ++e) o[e] = n[e]
                    return function(t) {
                        for (e = 0; e < i; ++e) o[e] = u[e](t)
                        return o
                    }
                },
                Ye = function(t, n) {
                    var e = new Date()
                    return (
                        (n -= t = +t),
                        function(r) {
                            return e.setTime(t + n * r), e
                        }
                    )
                },
                Ie = function(t, n) {
                    return (
                        (n -= t = +t),
                        function(e) {
                            return t + n * e
                        }
                    )
                },
                je = function(t, n) {
                    var e,
                        r = {},
                        i = {}
                    for (e in ((null !== t && 'object' == typeof t) || (t = {}),
                    (null !== n && 'object' == typeof n) || (n = {}),
                    n))
                        e in t ? (r[e] = Qe(t[e], n[e])) : (i[e] = n[e])
                    return function(t) {
                        for (e in r) i[e] = r[e](t)
                        return i
                    }
                },
                He = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                Ge = new RegExp(He.source, 'g')
            var Xe,
                Ve,
                $e,
                We,
                Ze = function(t, n) {
                    var e,
                        r,
                        i,
                        u = (He.lastIndex = Ge.lastIndex = 0),
                        o = -1,
                        a = [],
                        c = []
                    for (
                        t += '', n += '';
                        (e = He.exec(t)) && (r = Ge.exec(n));

                    )
                        (i = r.index) > u &&
                            ((i = n.slice(u, i)),
                            a[o] ? (a[o] += i) : (a[++o] = i)),
                            (e = e[0]) === (r = r[0])
                                ? a[o]
                                    ? (a[o] += r)
                                    : (a[++o] = r)
                                : ((a[++o] = null),
                                  c.push({ i: o, x: Ie(e, r) })),
                            (u = Ge.lastIndex)
                    return (
                        u < n.length &&
                            ((i = n.slice(u)),
                            a[o] ? (a[o] += i) : (a[++o] = i)),
                        a.length < 2
                            ? c[0]
                                ? (function(t) {
                                      return function(n) {
                                          return t(n) + ''
                                      }
                                  })(c[0].x)
                                : (function(t) {
                                      return function() {
                                          return t
                                      }
                                  })(n)
                            : ((n = c.length),
                              function(t) {
                                  for (var e, r = 0; r < n; ++r)
                                      a[(e = c[r]).i] = e.x(t)
                                  return a.join('')
                              })
                    )
                },
                Qe = function(t, n) {
                    var e,
                        r = typeof n
                    return null == n || 'boolean' === r
                        ? Pe(n)
                        : ('number' === r
                              ? Ie
                              : 'string' === r
                              ? (e = In(n))
                                  ? ((n = e), Oe)
                                  : Ze
                              : n instanceof In
                              ? Oe
                              : n instanceof Date
                              ? Ye
                              : Array.isArray(n)
                              ? Fe
                              : ('function' != typeof n.valueOf &&
                                    'function' != typeof n.toString) ||
                                isNaN(n)
                              ? je
                              : Ie)(t, n)
                },
                Je = function(t) {
                    var n = t.length
                    return function(e) {
                        return t[
                            Math.max(0, Math.min(n - 1, Math.floor(e * n)))
                        ]
                    }
                },
                Ke = function(t, n) {
                    var e = Re(+t, +n)
                    return function(t) {
                        var n = e(t)
                        return n - 360 * Math.floor(n / 360)
                    }
                },
                tr = function(t, n) {
                    return (
                        (n -= t = +t),
                        function(e) {
                            return Math.round(t + n * e)
                        }
                    )
                },
                nr = 180 / Math.PI,
                er = {
                    translateX: 0,
                    translateY: 0,
                    rotate: 0,
                    skewX: 0,
                    scaleX: 1,
                    scaleY: 1,
                },
                rr = function(t, n, e, r, i, u) {
                    var o, a, c
                    return (
                        (o = Math.sqrt(t * t + n * n)) && ((t /= o), (n /= o)),
                        (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
                        (a = Math.sqrt(e * e + r * r)) &&
                            ((e /= a), (r /= a), (c /= a)),
                        t * r < n * e &&
                            ((t = -t), (n = -n), (c = -c), (o = -o)),
                        {
                            translateX: i,
                            translateY: u,
                            rotate: Math.atan2(n, t) * nr,
                            skewX: Math.atan(c) * nr,
                            scaleX: o,
                            scaleY: a,
                        }
                    )
                }
            function ir(t, n, e, r) {
                function i(t) {
                    return t.length ? t.pop() + ' ' : ''
                }
                return function(u, o) {
                    var a = [],
                        c = []
                    return (
                        (u = t(u)),
                        (o = t(o)),
                        (function(t, r, i, u, o, a) {
                            if (t !== i || r !== u) {
                                var c = o.push('translate(', null, n, null, e)
                                a.push(
                                    { i: c - 4, x: Ie(t, i) },
                                    { i: c - 2, x: Ie(r, u) },
                                )
                            } else
                                (i || u) && o.push('translate(' + i + n + u + e)
                        })(
                            u.translateX,
                            u.translateY,
                            o.translateX,
                            o.translateY,
                            a,
                            c,
                        ),
                        (function(t, n, e, u) {
                            t !== n
                                ? (t - n > 180
                                      ? (n += 360)
                                      : n - t > 180 && (t += 360),
                                  u.push({
                                      i: e.push(i(e) + 'rotate(', null, r) - 2,
                                      x: Ie(t, n),
                                  }))
                                : n && e.push(i(e) + 'rotate(' + n + r)
                        })(u.rotate, o.rotate, a, c),
                        (function(t, n, e, u) {
                            t !== n
                                ? u.push({
                                      i: e.push(i(e) + 'skewX(', null, r) - 2,
                                      x: Ie(t, n),
                                  })
                                : n && e.push(i(e) + 'skewX(' + n + r)
                        })(u.skewX, o.skewX, a, c),
                        (function(t, n, e, r, u, o) {
                            if (t !== e || n !== r) {
                                var a = u.push(
                                    i(u) + 'scale(',
                                    null,
                                    ',',
                                    null,
                                    ')',
                                )
                                o.push(
                                    { i: a - 4, x: Ie(t, e) },
                                    { i: a - 2, x: Ie(n, r) },
                                )
                            } else
                                (1 === e && 1 === r) ||
                                    u.push(i(u) + 'scale(' + e + ',' + r + ')')
                        })(u.scaleX, u.scaleY, o.scaleX, o.scaleY, a, c),
                        (u = o = null),
                        function(t) {
                            for (var n, e = -1, r = c.length; ++e < r; )
                                a[(n = c[e]).i] = n.x(t)
                            return a.join('')
                        }
                    )
                }
            }
            var ur = ir(
                    function(t) {
                        return 'none' === t
                            ? er
                            : (Xe ||
                                  ((Xe = document.createElement('DIV')),
                                  (Ve = document.documentElement),
                                  ($e = document.defaultView)),
                              (Xe.style.transform = t),
                              (t = $e
                                  .getComputedStyle(Ve.appendChild(Xe), null)
                                  .getPropertyValue('transform')),
                              Ve.removeChild(Xe),
                              (t = t.slice(7, -1).split(',')),
                              rr(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
                    },
                    'px, ',
                    'px)',
                    'deg)',
                ),
                or = ir(
                    function(t) {
                        return null == t
                            ? er
                            : (We ||
                                  (We = document.createElementNS(
                                      'http://www.w3.org/2000/svg',
                                      'g',
                                  )),
                              We.setAttribute('transform', t),
                              (t = We.transform.baseVal.consolidate())
                                  ? ((t = t.matrix),
                                    rr(t.a, t.b, t.c, t.d, t.e, t.f))
                                  : er)
                    },
                    ', ',
                    ')',
                    ')',
                ),
                ar = Math.SQRT2
            function cr(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2
            }
            var fr = function(t, n) {
                var e,
                    r,
                    i = t[0],
                    u = t[1],
                    o = t[2],
                    a = n[0],
                    c = n[1],
                    f = n[2],
                    s = a - i,
                    l = c - u,
                    h = s * s + l * l
                if (h < 1e-12)
                    (r = Math.log(f / o) / ar),
                        (e = function(t) {
                            return [
                                i + t * s,
                                u + t * l,
                                o * Math.exp(ar * t * r),
                            ]
                        })
                else {
                    var d = Math.sqrt(h),
                        p = (f * f - o * o + 4 * h) / (2 * o * 2 * d),
                        v = (f * f - o * o - 4 * h) / (2 * f * 2 * d),
                        y = Math.log(Math.sqrt(p * p + 1) - p),
                        g = Math.log(Math.sqrt(v * v + 1) - v)
                    ;(r = (g - y) / ar),
                        (e = function(t) {
                            var n,
                                e = t * r,
                                a = cr(y),
                                c =
                                    (o / (2 * d)) *
                                    (a *
                                        ((n = ar * e + y),
                                        ((n = Math.exp(2 * n)) - 1) / (n + 1)) -
                                        (function(t) {
                                            return (
                                                ((t = Math.exp(t)) - 1 / t) / 2
                                            )
                                        })(y))
                            return [
                                i + c * s,
                                u + c * l,
                                (o * a) / cr(ar * e + y),
                            ]
                        })
                }
                return (e.duration = 1e3 * r), e
            }
            function sr(t) {
                return function(n, e) {
                    var r = t((n = Zn(n)).h, (e = Zn(e)).h),
                        i = Le(n.s, e.s),
                        u = Le(n.l, e.l),
                        o = Le(n.opacity, e.opacity)
                    return function(t) {
                        return (
                            (n.h = r(t)),
                            (n.s = i(t)),
                            (n.l = u(t)),
                            (n.opacity = o(t)),
                            n + ''
                        )
                    }
                }
            }
            var lr = sr(Re),
                hr = sr(Le)
            function dr(t, n) {
                var e = Le((t = se(t)).l, (n = se(n)).l),
                    r = Le(t.a, n.a),
                    i = Le(t.b, n.b),
                    u = Le(t.opacity, n.opacity)
                return function(n) {
                    return (
                        (t.l = e(n)),
                        (t.a = r(n)),
                        (t.b = i(n)),
                        (t.opacity = u(n)),
                        t + ''
                    )
                }
            }
            function pr(t) {
                return function(n, e) {
                    var r = t((n = be(n)).h, (e = be(e)).h),
                        i = Le(n.c, e.c),
                        u = Le(n.l, e.l),
                        o = Le(n.opacity, e.opacity)
                    return function(t) {
                        return (
                            (n.h = r(t)),
                            (n.c = i(t)),
                            (n.l = u(t)),
                            (n.opacity = o(t)),
                            n + ''
                        )
                    }
                }
            }
            var vr = pr(Re),
                yr = pr(Le)
            function gr(t) {
                return (function n(e) {
                    function r(n, r) {
                        var i = t((n = Se(n)).h, (r = Se(r)).h),
                            u = Le(n.s, r.s),
                            o = Le(n.l, r.l),
                            a = Le(n.opacity, r.opacity)
                        return function(t) {
                            return (
                                (n.h = i(t)),
                                (n.s = u(t)),
                                (n.l = o(Math.pow(t, e))),
                                (n.opacity = a(t)),
                                n + ''
                            )
                        }
                    }
                    return (e = +e), (r.gamma = n), r
                })(1)
            }
            var br = gr(Re),
                _r = gr(Le)
            function mr(t, n) {
                for (
                    var e = 0,
                        r = n.length - 1,
                        i = n[0],
                        u = new Array(r < 0 ? 0 : r);
                    e < r;

                )
                    u[e] = t(i, (i = n[++e]))
                return function(t) {
                    var n = Math.max(0, Math.min(r - 1, Math.floor((t *= r))))
                    return u[n](t - n)
                }
            }
            var xr,
                wr,
                Mr = function(t, n) {
                    for (var e = new Array(n), r = 0; r < n; ++r)
                        e[r] = t(r / (n - 1))
                    return e
                },
                kr = 0,
                Ar = 0,
                Sr = 0,
                Nr = 1e3,
                Er = 0,
                Tr = 0,
                Cr = 0,
                Pr =
                    'object' == typeof performance && performance.now
                        ? performance
                        : Date,
                zr =
                    'object' == typeof window && window.requestAnimationFrame
                        ? window.requestAnimationFrame.bind(window)
                        : function(t) {
                              setTimeout(t, 17)
                          }
            function Rr() {
                return Tr || (zr(Dr), (Tr = Pr.now() + Cr))
            }
            function Dr() {
                Tr = 0
            }
            function Lr() {
                this._call = this._time = this._next = null
            }
            function Or(t, n, e) {
                var r = new Lr()
                return r.restart(t, n, e), r
            }
            function qr() {
                Rr(), ++kr
                for (var t, n = xr; n; )
                    (t = Tr - n._time) >= 0 && n._call.call(null, t),
                        (n = n._next)
                --kr
            }
            function Ur() {
                ;(Tr = (Er = Pr.now()) + Cr), (kr = Ar = 0)
                try {
                    qr()
                } finally {
                    ;(kr = 0),
                        (function() {
                            var t,
                                n,
                                e = xr,
                                r = 1 / 0
                            for (; e; )
                                e._call
                                    ? (r > e._time && (r = e._time),
                                      (t = e),
                                      (e = e._next))
                                    : ((n = e._next),
                                      (e._next = null),
                                      (e = t ? (t._next = n) : (xr = n)))
                            ;(wr = t), Fr(r)
                        })(),
                        (Tr = 0)
                }
            }
            function Br() {
                var t = Pr.now(),
                    n = t - Er
                n > Nr && ((Cr -= n), (Er = t))
            }
            function Fr(t) {
                kr ||
                    (Ar && (Ar = clearTimeout(Ar)),
                    t - Tr > 24
                        ? (t < 1 / 0 &&
                              (Ar = setTimeout(Ur, t - Pr.now() - Cr)),
                          Sr && (Sr = clearInterval(Sr)))
                        : (Sr || ((Er = Pr.now()), (Sr = setInterval(Br, Nr))),
                          (kr = 1),
                          zr(Ur)))
            }
            Lr.prototype = Or.prototype = {
                constructor: Lr,
                restart: function(t, n, e) {
                    if ('function' != typeof t)
                        throw new TypeError('callback is not a function')
                    ;(e = (null == e ? Rr() : +e) + (null == n ? 0 : +n)),
                        this._next ||
                            wr === this ||
                            (wr ? (wr._next = this) : (xr = this), (wr = this)),
                        (this._call = t),
                        (this._time = e),
                        Fr()
                },
                stop: function() {
                    this._call &&
                        ((this._call = null), (this._time = 1 / 0), Fr())
                },
            }
            var Yr = function(t, n, e) {
                    var r = new Lr()
                    return (
                        (n = null == n ? 0 : +n),
                        r.restart(
                            function(e) {
                                r.stop(), t(e + n)
                            },
                            n,
                            e,
                        ),
                        r
                    )
                },
                Ir = function(t, n, e) {
                    var r = new Lr(),
                        i = n
                    return null == n
                        ? (r.restart(t, n, e), r)
                        : ((n = +n),
                          (e = null == e ? Rr() : +e),
                          r.restart(
                              function u(o) {
                                  ;(o += i), r.restart(u, (i += n), e), t(o)
                              },
                              n,
                              e,
                          ),
                          r)
                },
                jr = ht('start', 'end', 'interrupt'),
                Hr = [],
                Gr = 0,
                Xr = 1,
                Vr = 2,
                $r = 3,
                Wr = 4,
                Zr = 5,
                Qr = 6,
                Jr = function(t, n, e, r, i, u) {
                    var o = t.__transition
                    if (o) {
                        if (e in o) return
                    } else t.__transition = {}
                    !(function(t, n, e) {
                        var r,
                            i = t.__transition
                        function u(c) {
                            var f, s, l, h
                            if (e.state !== Xr) return a()
                            for (f in i)
                                if ((h = i[f]).name === e.name) {
                                    if (h.state === $r) return Yr(u)
                                    h.state === Wr
                                        ? ((h.state = Qr),
                                          h.timer.stop(),
                                          h.on.call(
                                              'interrupt',
                                              t,
                                              t.__data__,
                                              h.index,
                                              h.group,
                                          ),
                                          delete i[f])
                                        : +f < n &&
                                          ((h.state = Qr),
                                          h.timer.stop(),
                                          delete i[f])
                                }
                            if (
                                (Yr(function() {
                                    e.state === $r &&
                                        ((e.state = Wr),
                                        e.timer.restart(o, e.delay, e.time),
                                        o(c))
                                }),
                                (e.state = Vr),
                                e.on.call(
                                    'start',
                                    t,
                                    t.__data__,
                                    e.index,
                                    e.group,
                                ),
                                e.state === Vr)
                            ) {
                                for (
                                    e.state = $r,
                                        r = new Array((l = e.tween.length)),
                                        f = 0,
                                        s = -1;
                                    f < l;
                                    ++f
                                )
                                    (h = e.tween[f].value.call(
                                        t,
                                        t.__data__,
                                        e.index,
                                        e.group,
                                    )) && (r[++s] = h)
                                r.length = s + 1
                            }
                        }
                        function o(n) {
                            for (
                                var i =
                                        n < e.duration
                                            ? e.ease.call(null, n / e.duration)
                                            : (e.timer.restart(a),
                                              (e.state = Zr),
                                              1),
                                    u = -1,
                                    o = r.length;
                                ++u < o;

                            )
                                r[u].call(null, i)
                            e.state === Zr &&
                                (e.on.call(
                                    'end',
                                    t,
                                    t.__data__,
                                    e.index,
                                    e.group,
                                ),
                                a())
                        }
                        function a() {
                            for (var r in ((e.state = Qr),
                            e.timer.stop(),
                            delete i[n],
                            i))
                                return
                            delete t.__transition
                        }
                        ;(i[n] = e),
                            (e.timer = Or(
                                function(t) {
                                    ;(e.state = Xr),
                                        e.timer.restart(u, e.delay, e.time),
                                        e.delay <= t && u(t - e.delay)
                                },
                                0,
                                e.time,
                            ))
                    })(t, e, {
                        name: n,
                        index: r,
                        group: i,
                        on: jr,
                        tween: Hr,
                        time: u.time,
                        delay: u.delay,
                        duration: u.duration,
                        ease: u.ease,
                        timer: null,
                        state: Gr,
                    })
                }
            function Kr(t, n) {
                var e = ni(t, n)
                if (e.state > Gr) throw new Error('too late; already scheduled')
                return e
            }
            function ti(t, n) {
                var e = ni(t, n)
                if (e.state > Vr) throw new Error('too late; already started')
                return e
            }
            function ni(t, n) {
                var e = t.__transition
                if (!e || !(e = e[n])) throw new Error('transition not found')
                return e
            }
            var ei = function(t, n) {
                var e,
                    r,
                    i,
                    u = t.__transition,
                    o = !0
                if (u) {
                    for (i in ((n = null == n ? null : n + ''), u))
                        (e = u[i]).name === n
                            ? ((r = e.state > Vr && e.state < Zr),
                              (e.state = Qr),
                              e.timer.stop(),
                              r &&
                                  e.on.call(
                                      'interrupt',
                                      t,
                                      t.__data__,
                                      e.index,
                                      e.group,
                                  ),
                              delete u[i])
                            : (o = !1)
                    o && delete t.__transition
                }
            }
            function ri(t, n, e) {
                var r = t._id
                return (
                    t.each(function() {
                        var t = ti(this, r)
                        ;(t.value || (t.value = {}))[n] = e.apply(
                            this,
                            arguments,
                        )
                    }),
                    function(t) {
                        return ni(t, r).value[n]
                    }
                )
            }
            var ii = function(t, n) {
                var e
                return ('number' == typeof n
                    ? Ie
                    : n instanceof In
                    ? Oe
                    : (e = In(n))
                    ? ((n = e), Oe)
                    : Ze)(t, n)
            }
            var ui = rn.prototype.constructor
            var oi = 0
            function ai(t, n, e, r) {
                ;(this._groups = t),
                    (this._parents = n),
                    (this._name = e),
                    (this._id = r)
            }
            function ci(t) {
                return rn().transition(t)
            }
            function fi() {
                return ++oi
            }
            var si = rn.prototype
            function li(t) {
                return +t
            }
            function hi(t) {
                return t * t
            }
            function di(t) {
                return t * (2 - t)
            }
            function pi(t) {
                return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
            }
            function vi(t) {
                return t * t * t
            }
            function yi(t) {
                return --t * t * t + 1
            }
            function gi(t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }
            ai.prototype = ci.prototype = {
                constructor: ai,
                select: function(t) {
                    var n = this._name,
                        e = this._id
                    'function' != typeof t && (t = bt(t))
                    for (
                        var r = this._groups,
                            i = r.length,
                            u = new Array(i),
                            o = 0;
                        o < i;
                        ++o
                    )
                        for (
                            var a,
                                c,
                                f = r[o],
                                s = f.length,
                                l = (u[o] = new Array(s)),
                                h = 0;
                            h < s;
                            ++h
                        )
                            (a = f[h]) &&
                                (c = t.call(a, a.__data__, h, f)) &&
                                ('__data__' in a && (c.__data__ = a.__data__),
                                (l[h] = c),
                                Jr(l[h], n, e, h, l, ni(a, e)))
                    return new ai(u, this._parents, n, e)
                },
                selectAll: function(t) {
                    var n = this._name,
                        e = this._id
                    'function' != typeof t && (t = mt(t))
                    for (
                        var r = this._groups,
                            i = r.length,
                            u = [],
                            o = [],
                            a = 0;
                        a < i;
                        ++a
                    )
                        for (var c, f = r[a], s = f.length, l = 0; l < s; ++l)
                            if ((c = f[l])) {
                                for (
                                    var h,
                                        d = t.call(c, c.__data__, l, f),
                                        p = ni(c, e),
                                        v = 0,
                                        y = d.length;
                                    v < y;
                                    ++v
                                )
                                    (h = d[v]) && Jr(h, n, e, v, d, p)
                                u.push(d), o.push(c)
                            }
                    return new ai(u, o, n, e)
                },
                filter: function(t) {
                    'function' != typeof t && (t = kt(t))
                    for (
                        var n = this._groups,
                            e = n.length,
                            r = new Array(e),
                            i = 0;
                        i < e;
                        ++i
                    )
                        for (
                            var u,
                                o = n[i],
                                a = o.length,
                                c = (r[i] = []),
                                f = 0;
                            f < a;
                            ++f
                        )
                            (u = o[f]) &&
                                t.call(u, u.__data__, f, o) &&
                                c.push(u)
                    return new ai(r, this._parents, this._name, this._id)
                },
                merge: function(t) {
                    if (t._id !== this._id) throw new Error()
                    for (
                        var n = this._groups,
                            e = t._groups,
                            r = n.length,
                            i = e.length,
                            u = Math.min(r, i),
                            o = new Array(r),
                            a = 0;
                        a < u;
                        ++a
                    )
                        for (
                            var c,
                                f = n[a],
                                s = e[a],
                                l = f.length,
                                h = (o[a] = new Array(l)),
                                d = 0;
                            d < l;
                            ++d
                        )
                            (c = f[d] || s[d]) && (h[d] = c)
                    for (; a < r; ++a) o[a] = n[a]
                    return new ai(o, this._parents, this._name, this._id)
                },
                selection: function() {
                    return new ui(this._groups, this._parents)
                },
                transition: function() {
                    for (
                        var t = this._name,
                            n = this._id,
                            e = fi(),
                            r = this._groups,
                            i = r.length,
                            u = 0;
                        u < i;
                        ++u
                    )
                        for (var o, a = r[u], c = a.length, f = 0; f < c; ++f)
                            if ((o = a[f])) {
                                var s = ni(o, n)
                                Jr(o, t, e, f, a, {
                                    time: s.time + s.delay + s.duration,
                                    delay: 0,
                                    duration: s.duration,
                                    ease: s.ease,
                                })
                            }
                    return new ai(r, this._parents, t, e)
                },
                call: si.call,
                nodes: si.nodes,
                node: si.node,
                size: si.size,
                empty: si.empty,
                each: si.each,
                on: function(t, n) {
                    var e = this._id
                    return arguments.length < 2
                        ? ni(this.node(), e).on.on(t)
                        : this.each(
                              (function(t, n, e) {
                                  var r,
                                      i,
                                      u = (function(t) {
                                          return (t + '')
                                              .trim()
                                              .split(/^|\s+/)
                                              .every(function(t) {
                                                  var n = t.indexOf('.')
                                                  return (
                                                      n >= 0 &&
                                                          (t = t.slice(0, n)),
                                                      !t || 'start' === t
                                                  )
                                              })
                                      })(n)
                                          ? Kr
                                          : ti
                                  return function() {
                                      var o = u(this, t),
                                          a = o.on
                                      a !== r && (i = (r = a).copy()).on(n, e),
                                          (o.on = i)
                                  }
                              })(e, t, n),
                          )
                },
                attr: function(t, n) {
                    var e = vt(t),
                        r = 'transform' === e ? or : ii
                    return this.attrTween(
                        t,
                        'function' == typeof n
                            ? (e.local
                                  ? function(t, n, e) {
                                        var r, i, u
                                        return function() {
                                            var o,
                                                a = e(this)
                                            if (null != a)
                                                return (o = this.getAttributeNS(
                                                    t.space,
                                                    t.local,
                                                )) === a
                                                    ? null
                                                    : o === r && a === i
                                                    ? u
                                                    : (u = n((r = o), (i = a)))
                                            this.removeAttributeNS(
                                                t.space,
                                                t.local,
                                            )
                                        }
                                    }
                                  : function(t, n, e) {
                                        var r, i, u
                                        return function() {
                                            var o,
                                                a = e(this)
                                            if (null != a)
                                                return (o = this.getAttribute(
                                                    t,
                                                )) === a
                                                    ? null
                                                    : o === r && a === i
                                                    ? u
                                                    : (u = n((r = o), (i = a)))
                                            this.removeAttribute(t)
                                        }
                                    })(e, r, ri(this, 'attr.' + t, n))
                            : null == n
                            ? (e.local
                                  ? function(t) {
                                        return function() {
                                            this.removeAttributeNS(
                                                t.space,
                                                t.local,
                                            )
                                        }
                                    }
                                  : function(t) {
                                        return function() {
                                            this.removeAttribute(t)
                                        }
                                    })(e)
                            : (e.local
                                  ? function(t, n, e) {
                                        var r, i
                                        return function() {
                                            var u = this.getAttributeNS(
                                                t.space,
                                                t.local,
                                            )
                                            return u === e
                                                ? null
                                                : u === r
                                                ? i
                                                : (i = n((r = u), e))
                                        }
                                    }
                                  : function(t, n, e) {
                                        var r, i
                                        return function() {
                                            var u = this.getAttribute(t)
                                            return u === e
                                                ? null
                                                : u === r
                                                ? i
                                                : (i = n((r = u), e))
                                        }
                                    })(e, r, n + ''),
                    )
                },
                attrTween: function(t, n) {
                    var e = 'attr.' + t
                    if (arguments.length < 2)
                        return (e = this.tween(e)) && e._value
                    if (null == n) return this.tween(e, null)
                    if ('function' != typeof n) throw new Error()
                    var r = vt(t)
                    return this.tween(
                        e,
                        (r.local
                            ? function(t, n) {
                                  function e() {
                                      var e = this,
                                          r = n.apply(e, arguments)
                                      return (
                                          r &&
                                          function(n) {
                                              e.setAttributeNS(
                                                  t.space,
                                                  t.local,
                                                  r(n),
                                              )
                                          }
                                      )
                                  }
                                  return (e._value = n), e
                              }
                            : function(t, n) {
                                  function e() {
                                      var e = this,
                                          r = n.apply(e, arguments)
                                      return (
                                          r &&
                                          function(n) {
                                              e.setAttribute(t, r(n))
                                          }
                                      )
                                  }
                                  return (e._value = n), e
                              })(r, n),
                    )
                },
                style: function(t, n, e) {
                    var r = 'transform' == (t += '') ? ur : ii
                    return null == n
                        ? this.styleTween(
                              t,
                              (function(t, n) {
                                  var e, r, i
                                  return function() {
                                      var u = zt(this, t),
                                          o = (this.style.removeProperty(t),
                                          zt(this, t))
                                      return u === o
                                          ? null
                                          : u === e && o === r
                                          ? i
                                          : (i = n((e = u), (r = o)))
                                  }
                              })(t, r),
                          ).on(
                              'end.style.' + t,
                              (function(t) {
                                  return function() {
                                      this.style.removeProperty(t)
                                  }
                              })(t),
                          )
                        : this.styleTween(
                              t,
                              'function' == typeof n
                                  ? (function(t, n, e) {
                                        var r, i, u
                                        return function() {
                                            var o = zt(this, t),
                                                a = e(this)
                                            return (
                                                null == a &&
                                                    (this.style.removeProperty(
                                                        t,
                                                    ),
                                                    (a = zt(this, t))),
                                                o === a
                                                    ? null
                                                    : o === r && a === i
                                                    ? u
                                                    : (u = n((r = o), (i = a)))
                                            )
                                        }
                                    })(t, r, ri(this, 'style.' + t, n))
                                  : (function(t, n, e) {
                                        var r, i
                                        return function() {
                                            var u = zt(this, t)
                                            return u === e
                                                ? null
                                                : u === r
                                                ? i
                                                : (i = n((r = u), e))
                                        }
                                    })(t, r, n + ''),
                              e,
                          )
                },
                styleTween: function(t, n, e) {
                    var r = 'style.' + (t += '')
                    if (arguments.length < 2)
                        return (r = this.tween(r)) && r._value
                    if (null == n) return this.tween(r, null)
                    if ('function' != typeof n) throw new Error()
                    return this.tween(
                        r,
                        (function(t, n, e) {
                            function r() {
                                var r = this,
                                    i = n.apply(r, arguments)
                                return (
                                    i &&
                                    function(n) {
                                        r.style.setProperty(t, i(n), e)
                                    }
                                )
                            }
                            return (r._value = n), r
                        })(t, n, null == e ? '' : e),
                    )
                },
                text: function(t) {
                    return this.tween(
                        'text',
                        'function' == typeof t
                            ? (function(t) {
                                  return function() {
                                      var n = t(this)
                                      this.textContent = null == n ? '' : n
                                  }
                              })(ri(this, 'text', t))
                            : (function(t) {
                                  return function() {
                                      this.textContent = t
                                  }
                              })(null == t ? '' : t + ''),
                    )
                },
                remove: function() {
                    return this.on(
                        'end.remove',
                        ((t = this._id),
                        function() {
                            var n = this.parentNode
                            for (var e in this.__transition)
                                if (+e !== t) return
                            n && n.removeChild(this)
                        }),
                    )
                    var t
                },
                tween: function(t, n) {
                    var e = this._id
                    if (((t += ''), arguments.length < 2)) {
                        for (
                            var r,
                                i = ni(this.node(), e).tween,
                                u = 0,
                                o = i.length;
                            u < o;
                            ++u
                        )
                            if ((r = i[u]).name === t) return r.value
                        return null
                    }
                    return this.each(
                        (null == n
                            ? function(t, n) {
                                  var e, r
                                  return function() {
                                      var i = ti(this, t),
                                          u = i.tween
                                      if (u !== e)
                                          for (
                                              var o = 0, a = (r = e = u).length;
                                              o < a;
                                              ++o
                                          )
                                              if (r[o].name === n) {
                                                  ;(r = r.slice()).splice(o, 1)
                                                  break
                                              }
                                      i.tween = r
                                  }
                              }
                            : function(t, n, e) {
                                  var r, i
                                  if ('function' != typeof e) throw new Error()
                                  return function() {
                                      var u = ti(this, t),
                                          o = u.tween
                                      if (o !== r) {
                                          i = (r = o).slice()
                                          for (
                                              var a = { name: n, value: e },
                                                  c = 0,
                                                  f = i.length;
                                              c < f;
                                              ++c
                                          )
                                              if (i[c].name === n) {
                                                  i[c] = a
                                                  break
                                              }
                                          c === f && i.push(a)
                                      }
                                      u.tween = i
                                  }
                              })(e, t, n),
                    )
                },
                delay: function(t) {
                    var n = this._id
                    return arguments.length
                        ? this.each(
                              ('function' == typeof t
                                  ? function(t, n) {
                                        return function() {
                                            Kr(this, t).delay = +n.apply(
                                                this,
                                                arguments,
                                            )
                                        }
                                    }
                                  : function(t, n) {
                                        return (
                                            (n = +n),
                                            function() {
                                                Kr(this, t).delay = n
                                            }
                                        )
                                    })(n, t),
                          )
                        : ni(this.node(), n).delay
                },
                duration: function(t) {
                    var n = this._id
                    return arguments.length
                        ? this.each(
                              ('function' == typeof t
                                  ? function(t, n) {
                                        return function() {
                                            ti(this, t).duration = +n.apply(
                                                this,
                                                arguments,
                                            )
                                        }
                                    }
                                  : function(t, n) {
                                        return (
                                            (n = +n),
                                            function() {
                                                ti(this, t).duration = n
                                            }
                                        )
                                    })(n, t),
                          )
                        : ni(this.node(), n).duration
                },
                ease: function(t) {
                    var n = this._id
                    return arguments.length
                        ? this.each(
                              (function(t, n) {
                                  if ('function' != typeof n) throw new Error()
                                  return function() {
                                      ti(this, t).ease = n
                                  }
                              })(n, t),
                          )
                        : ni(this.node(), n).ease
                },
            }
            var bi = (function t(n) {
                    function e(t) {
                        return Math.pow(t, n)
                    }
                    return (n = +n), (e.exponent = t), e
                })(3),
                _i = (function t(n) {
                    function e(t) {
                        return 1 - Math.pow(1 - t, n)
                    }
                    return (n = +n), (e.exponent = t), e
                })(3),
                mi = (function t(n) {
                    function e(t) {
                        return (
                            ((t *= 2) <= 1
                                ? Math.pow(t, n)
                                : 2 - Math.pow(2 - t, n)) / 2
                        )
                    }
                    return (n = +n), (e.exponent = t), e
                })(3),
                xi = Math.PI,
                wi = xi / 2
            function Mi(t) {
                return 1 - Math.cos(t * wi)
            }
            function ki(t) {
                return Math.sin(t * wi)
            }
            function Ai(t) {
                return (1 - Math.cos(xi * t)) / 2
            }
            function Si(t) {
                return Math.pow(2, 10 * t - 10)
            }
            function Ni(t) {
                return 1 - Math.pow(2, -10 * t)
            }
            function Ei(t) {
                return (
                    ((t *= 2) <= 1
                        ? Math.pow(2, 10 * t - 10)
                        : 2 - Math.pow(2, 10 - 10 * t)) / 2
                )
            }
            function Ti(t) {
                return 1 - Math.sqrt(1 - t * t)
            }
            function Ci(t) {
                return Math.sqrt(1 - --t * t)
            }
            function Pi(t) {
                return (
                    ((t *= 2) <= 1
                        ? 1 - Math.sqrt(1 - t * t)
                        : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
                )
            }
            var zi = 4 / 11,
                Ri = 6 / 11,
                Di = 8 / 11,
                Li = 0.75,
                Oi = 9 / 11,
                qi = 10 / 11,
                Ui = 0.9375,
                Bi = 21 / 22,
                Fi = 63 / 64,
                Yi = 1 / zi / zi
            function Ii(t) {
                return 1 - ji(1 - t)
            }
            function ji(t) {
                return (t = +t) < zi
                    ? Yi * t * t
                    : t < Di
                    ? Yi * (t -= Ri) * t + Li
                    : t < qi
                    ? Yi * (t -= Oi) * t + Ui
                    : Yi * (t -= Bi) * t + Fi
            }
            function Hi(t) {
                return ((t *= 2) <= 1 ? 1 - ji(1 - t) : ji(t - 1) + 1) / 2
            }
            var Gi = (function t(n) {
                    function e(t) {
                        return t * t * ((n + 1) * t - n)
                    }
                    return (n = +n), (e.overshoot = t), e
                })(1.70158),
                Xi = (function t(n) {
                    function e(t) {
                        return --t * t * ((n + 1) * t + n) + 1
                    }
                    return (n = +n), (e.overshoot = t), e
                })(1.70158),
                Vi = (function t(n) {
                    function e(t) {
                        return (
                            ((t *= 2) < 1
                                ? t * t * ((n + 1) * t - n)
                                : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                        )
                    }
                    return (n = +n), (e.overshoot = t), e
                })(1.70158),
                $i = 2 * Math.PI,
                Wi = (function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= $i)
                    function i(t) {
                        return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e)
                    }
                    return (
                        (i.amplitude = function(n) {
                            return t(n, e * $i)
                        }),
                        (i.period = function(e) {
                            return t(n, e)
                        }),
                        i
                    )
                })(1, 0.3),
                Zi = (function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= $i)
                    function i(t) {
                        return (
                            1 -
                            n *
                                Math.pow(2, -10 * (t = +t)) *
                                Math.sin((t + r) / e)
                        )
                    }
                    return (
                        (i.amplitude = function(n) {
                            return t(n, e * $i)
                        }),
                        (i.period = function(e) {
                            return t(n, e)
                        }),
                        i
                    )
                })(1, 0.3),
                Qi = (function t(n, e) {
                    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= $i)
                    function i(t) {
                        return (
                            ((t = 2 * t - 1) < 0
                                ? n *
                                  Math.pow(2, 10 * t) *
                                  Math.sin((r - t) / e)
                                : 2 -
                                  n *
                                      Math.pow(2, -10 * t) *
                                      Math.sin((r + t) / e)) / 2
                        )
                    }
                    return (
                        (i.amplitude = function(n) {
                            return t(n, e * $i)
                        }),
                        (i.period = function(e) {
                            return t(n, e)
                        }),
                        i
                    )
                })(1, 0.3),
                Ji = { time: null, delay: 0, duration: 250, ease: gi }
            function Ki(t, n) {
                for (var e; !(e = t.__transition) || !(e = e[n]); )
                    if (!(t = t.parentNode)) return (Ji.time = Rr()), Ji
                return e
            }
            ;(rn.prototype.interrupt = function(t) {
                return this.each(function() {
                    ei(this, t)
                })
            }),
                (rn.prototype.transition = function(t) {
                    var n, e
                    t instanceof ai
                        ? ((n = t._id), (t = t._name))
                        : ((n = fi()),
                          ((e = Ji).time = Rr()),
                          (t = null == t ? null : t + ''))
                    for (var r = this._groups, i = r.length, u = 0; u < i; ++u)
                        for (var o, a = r[u], c = a.length, f = 0; f < c; ++f)
                            (o = a[f]) && Jr(o, t, n, f, a, e || Ki(o, n))
                    return new ai(r, this._parents, t, n)
                })
            var tu = [null],
                nu = function(t, n) {
                    var e,
                        r,
                        i = t.__transition
                    if (i)
                        for (r in ((n = null == n ? null : n + ''), i))
                            if ((e = i[r]).state > Xr && e.name === n)
                                return new ai([[t]], tu, n, +r)
                    return null
                },
                eu = function(t) {
                    return function() {
                        return t
                    }
                },
                ru = function(t, n, e) {
                    ;(this.target = t), (this.type = n), (this.selection = e)
                }
            function iu() {
                Vt.stopImmediatePropagation()
            }
            var uu = function() {
                    Vt.preventDefault(), Vt.stopImmediatePropagation()
                },
                ou = { name: 'drag' },
                au = { name: 'space' },
                cu = { name: 'handle' },
                fu = { name: 'center' },
                su = {
                    name: 'x',
                    handles: ['e', 'w'].map(bu),
                    input: function(t, n) {
                        return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
                    },
                    output: function(t) {
                        return t && [t[0][0], t[1][0]]
                    },
                },
                lu = {
                    name: 'y',
                    handles: ['n', 's'].map(bu),
                    input: function(t, n) {
                        return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
                    },
                    output: function(t) {
                        return t && [t[0][1], t[1][1]]
                    },
                },
                hu = {
                    name: 'xy',
                    handles: ['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'].map(
                        bu,
                    ),
                    input: function(t) {
                        return t
                    },
                    output: function(t) {
                        return t
                    },
                },
                du = {
                    overlay: 'crosshair',
                    selection: 'move',
                    n: 'ns-resize',
                    e: 'ew-resize',
                    s: 'ns-resize',
                    w: 'ew-resize',
                    nw: 'nwse-resize',
                    ne: 'nesw-resize',
                    se: 'nwse-resize',
                    sw: 'nesw-resize',
                },
                pu = { e: 'w', w: 'e', nw: 'ne', ne: 'nw', se: 'sw', sw: 'se' },
                vu = { n: 's', s: 'n', nw: 'sw', ne: 'se', se: 'ne', sw: 'nw' },
                yu = {
                    overlay: 1,
                    selection: 1,
                    n: null,
                    e: 1,
                    s: null,
                    w: -1,
                    nw: -1,
                    ne: 1,
                    se: 1,
                    sw: -1,
                },
                gu = {
                    overlay: 1,
                    selection: 1,
                    n: -1,
                    e: null,
                    s: 1,
                    w: null,
                    nw: -1,
                    ne: -1,
                    se: 1,
                    sw: 1,
                }
            function bu(t) {
                return { type: t }
            }
            function _u() {
                return !Vt.button
            }
            function mu() {
                var t = this.ownerSVGElement || this
                return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
            }
            function xu(t) {
                for (; !t.__brush; ) if (!(t = t.parentNode)) return
                return t.__brush
            }
            function wu(t) {
                return t[0][0] === t[1][0] || t[0][1] === t[1][1]
            }
            function Mu(t) {
                var n = t.__brush
                return n ? n.dim.output(n.selection) : null
            }
            function ku() {
                return Nu(su)
            }
            function Au() {
                return Nu(lu)
            }
            var Su = function() {
                return Nu(hu)
            }
            function Nu(t) {
                var n,
                    e = mu,
                    r = _u,
                    i = ht(o, 'start', 'brush', 'end'),
                    u = 6
                function o(n) {
                    var e = n
                        .property('__brush', l)
                        .selectAll('.overlay')
                        .data([bu('overlay')])
                    e
                        .enter()
                        .append('rect')
                        .attr('class', 'overlay')
                        .attr('pointer-events', 'all')
                        .attr('cursor', du.overlay)
                        .merge(e)
                        .each(function() {
                            var t = xu(this).extent
                            un(this)
                                .attr('x', t[0][0])
                                .attr('y', t[0][1])
                                .attr('width', t[1][0] - t[0][0])
                                .attr('height', t[1][1] - t[0][1])
                        }),
                        n
                            .selectAll('.selection')
                            .data([bu('selection')])
                            .enter()
                            .append('rect')
                            .attr('class', 'selection')
                            .attr('cursor', du.selection)
                            .attr('fill', '#777')
                            .attr('fill-opacity', 0.3)
                            .attr('stroke', '#fff')
                            .attr('shape-rendering', 'crispEdges')
                    var r = n.selectAll('.handle').data(t.handles, function(t) {
                        return t.type
                    })
                    r.exit().remove(),
                        r
                            .enter()
                            .append('rect')
                            .attr('class', function(t) {
                                return 'handle handle--' + t.type
                            })
                            .attr('cursor', function(t) {
                                return du[t.type]
                            }),
                        n
                            .each(a)
                            .attr('fill', 'none')
                            .attr('pointer-events', 'all')
                            .style(
                                '-webkit-tap-highlight-color',
                                'rgba(0,0,0,0)',
                            )
                            .on('mousedown.brush touchstart.brush', s)
                }
                function a() {
                    var t = un(this),
                        n = xu(this).selection
                    n
                        ? (t
                              .selectAll('.selection')
                              .style('display', null)
                              .attr('x', n[0][0])
                              .attr('y', n[0][1])
                              .attr('width', n[1][0] - n[0][0])
                              .attr('height', n[1][1] - n[0][1]),
                          t
                              .selectAll('.handle')
                              .style('display', null)
                              .attr('x', function(t) {
                                  return 'e' === t.type[t.type.length - 1]
                                      ? n[1][0] - u / 2
                                      : n[0][0] - u / 2
                              })
                              .attr('y', function(t) {
                                  return 's' === t.type[0]
                                      ? n[1][1] - u / 2
                                      : n[0][1] - u / 2
                              })
                              .attr('width', function(t) {
                                  return 'n' === t.type || 's' === t.type
                                      ? n[1][0] - n[0][0] + u
                                      : u
                              })
                              .attr('height', function(t) {
                                  return 'e' === t.type || 'w' === t.type
                                      ? n[1][1] - n[0][1] + u
                                      : u
                              }))
                        : t
                              .selectAll('.selection,.handle')
                              .style('display', 'none')
                              .attr('x', null)
                              .attr('y', null)
                              .attr('width', null)
                              .attr('height', null)
                }
                function c(t, n) {
                    return t.__brush.emitter || new f(t, n)
                }
                function f(t, n) {
                    ;(this.that = t),
                        (this.args = n),
                        (this.state = t.__brush),
                        (this.active = 0)
                }
                function s() {
                    if (Vt.touches) {
                        if (Vt.changedTouches.length < Vt.touches.length)
                            return uu()
                    } else if (n) return
                    if (r.apply(this, arguments)) {
                        var e,
                            i,
                            u,
                            o,
                            f,
                            s,
                            l,
                            h,
                            d,
                            p,
                            v,
                            y,
                            g,
                            b = this,
                            _ = Vt.target.__data__.type,
                            m =
                                'selection' ===
                                (Vt.metaKey ? (_ = 'overlay') : _)
                                    ? ou
                                    : Vt.altKey
                                    ? fu
                                    : cu,
                            x = t === lu ? null : yu[_],
                            w = t === su ? null : gu[_],
                            M = xu(b),
                            k = M.extent,
                            A = M.selection,
                            S = k[0][0],
                            N = k[0][1],
                            E = k[1][0],
                            T = k[1][1],
                            C = x && w && Vt.shiftKey,
                            P = hn(b),
                            z = P,
                            R = c(b, arguments).beforestart()
                        'overlay' === _
                            ? (M.selection = A = [
                                  [
                                      (e = t === lu ? S : P[0]),
                                      (u = t === su ? N : P[1]),
                                  ],
                                  [
                                      (f = t === lu ? E : e),
                                      (l = t === su ? T : u),
                                  ],
                              ])
                            : ((e = A[0][0]),
                              (u = A[0][1]),
                              (f = A[1][0]),
                              (l = A[1][1])),
                            (i = e),
                            (o = u),
                            (s = f),
                            (h = l)
                        var D = un(b).attr('pointer-events', 'none'),
                            L = D.selectAll('.overlay').attr('cursor', du[_])
                        if (Vt.touches)
                            D.on('touchmove.brush', q, !0).on(
                                'touchend.brush touchcancel.brush',
                                B,
                                !0,
                            )
                        else {
                            var O = un(Vt.view)
                                .on(
                                    'keydown.brush',
                                    function() {
                                        switch (Vt.keyCode) {
                                            case 16:
                                                C = x && w
                                                break
                                            case 18:
                                                m === cu &&
                                                    (x &&
                                                        ((f = s - d * x),
                                                        (e = i + d * x)),
                                                    w &&
                                                        ((l = h - p * w),
                                                        (u = o + p * w)),
                                                    (m = fu),
                                                    U())
                                                break
                                            case 32:
                                                ;(m !== cu && m !== fu) ||
                                                    (x < 0
                                                        ? (f = s - d)
                                                        : x > 0 && (e = i - d),
                                                    w < 0
                                                        ? (l = h - p)
                                                        : w > 0 && (u = o - p),
                                                    (m = au),
                                                    L.attr(
                                                        'cursor',
                                                        du.selection,
                                                    ),
                                                    U())
                                                break
                                            default:
                                                return
                                        }
                                        uu()
                                    },
                                    !0,
                                )
                                .on(
                                    'keyup.brush',
                                    function() {
                                        switch (Vt.keyCode) {
                                            case 16:
                                                C && ((y = g = C = !1), U())
                                                break
                                            case 18:
                                                m === fu &&
                                                    (x < 0
                                                        ? (f = s)
                                                        : x > 0 && (e = i),
                                                    w < 0
                                                        ? (l = h)
                                                        : w > 0 && (u = o),
                                                    (m = cu),
                                                    U())
                                                break
                                            case 32:
                                                m === au &&
                                                    (Vt.altKey
                                                        ? (x &&
                                                              ((f = s - d * x),
                                                              (e = i + d * x)),
                                                          w &&
                                                              ((l = h - p * w),
                                                              (u = o + p * w)),
                                                          (m = fu))
                                                        : (x < 0
                                                              ? (f = s)
                                                              : x > 0 &&
                                                                (e = i),
                                                          w < 0
                                                              ? (l = h)
                                                              : w > 0 &&
                                                                (u = o),
                                                          (m = cu)),
                                                    L.attr('cursor', du[_]),
                                                    U())
                                                break
                                            default:
                                                return
                                        }
                                        uu()
                                    },
                                    !0,
                                )
                                .on('mousemove.brush', q, !0)
                                .on('mouseup.brush', B, !0)
                            bn(Vt.view)
                        }
                        iu(), ei(b), a.call(b), R.start()
                    }
                    function q() {
                        var t = hn(b)
                        !C ||
                            y ||
                            g ||
                            (Math.abs(t[0] - z[0]) > Math.abs(t[1] - z[1])
                                ? (g = !0)
                                : (y = !0)),
                            (z = t),
                            (v = !0),
                            uu(),
                            U()
                    }
                    function U() {
                        var t
                        switch (((d = z[0] - P[0]), (p = z[1] - P[1]), m)) {
                            case au:
                            case ou:
                                x &&
                                    ((d = Math.max(S - e, Math.min(E - f, d))),
                                    (i = e + d),
                                    (s = f + d)),
                                    w &&
                                        ((p = Math.max(
                                            N - u,
                                            Math.min(T - l, p),
                                        )),
                                        (o = u + p),
                                        (h = l + p))
                                break
                            case cu:
                                x < 0
                                    ? ((d = Math.max(
                                          S - e,
                                          Math.min(E - e, d),
                                      )),
                                      (i = e + d),
                                      (s = f))
                                    : x > 0 &&
                                      ((d = Math.max(
                                          S - f,
                                          Math.min(E - f, d),
                                      )),
                                      (i = e),
                                      (s = f + d)),
                                    w < 0
                                        ? ((p = Math.max(
                                              N - u,
                                              Math.min(T - u, p),
                                          )),
                                          (o = u + p),
                                          (h = l))
                                        : w > 0 &&
                                          ((p = Math.max(
                                              N - l,
                                              Math.min(T - l, p),
                                          )),
                                          (o = u),
                                          (h = l + p))
                                break
                            case fu:
                                x &&
                                    ((i = Math.max(S, Math.min(E, e - d * x))),
                                    (s = Math.max(S, Math.min(E, f + d * x)))),
                                    w &&
                                        ((o = Math.max(
                                            N,
                                            Math.min(T, u - p * w),
                                        )),
                                        (h = Math.max(
                                            N,
                                            Math.min(T, l + p * w),
                                        )))
                        }
                        s < i &&
                            ((x *= -1),
                            (t = e),
                            (e = f),
                            (f = t),
                            (t = i),
                            (i = s),
                            (s = t),
                            _ in pu && L.attr('cursor', du[(_ = pu[_])])),
                            h < o &&
                                ((w *= -1),
                                (t = u),
                                (u = l),
                                (l = t),
                                (t = o),
                                (o = h),
                                (h = t),
                                _ in vu && L.attr('cursor', du[(_ = vu[_])])),
                            M.selection && (A = M.selection),
                            y && ((i = A[0][0]), (s = A[1][0])),
                            g && ((o = A[0][1]), (h = A[1][1])),
                            (A[0][0] === i &&
                                A[0][1] === o &&
                                A[1][0] === s &&
                                A[1][1] === h) ||
                                ((M.selection = [[i, o], [s, h]]),
                                a.call(b),
                                R.brush())
                    }
                    function B() {
                        if ((iu(), Vt.touches)) {
                            if (Vt.touches.length) return
                            n && clearTimeout(n),
                                (n = setTimeout(function() {
                                    n = null
                                }, 500)),
                                D.on(
                                    'touchmove.brush touchend.brush touchcancel.brush',
                                    null,
                                )
                        } else
                            _n(Vt.view, v),
                                O.on(
                                    'keydown.brush keyup.brush mousemove.brush mouseup.brush',
                                    null,
                                )
                        D.attr('pointer-events', 'all'),
                            L.attr('cursor', du.overlay),
                            M.selection && (A = M.selection),
                            wu(A) && ((M.selection = null), a.call(b)),
                            R.end()
                    }
                }
                function l() {
                    var n = this.__brush || { selection: null }
                    return (n.extent = e.apply(this, arguments)), (n.dim = t), n
                }
                return (
                    (o.move = function(n, e) {
                        n.selection
                            ? n
                                  .on('start.brush', function() {
                                      c(this, arguments)
                                          .beforestart()
                                          .start()
                                  })
                                  .on('interrupt.brush end.brush', function() {
                                      c(this, arguments).end()
                                  })
                                  .tween('brush', function() {
                                      var n = this,
                                          r = n.__brush,
                                          i = c(n, arguments),
                                          u = r.selection,
                                          o = t.input(
                                              'function' == typeof e
                                                  ? e.apply(this, arguments)
                                                  : e,
                                              r.extent,
                                          ),
                                          f = Qe(u, o)
                                      function s(t) {
                                          ;(r.selection =
                                              1 === t && wu(o) ? null : f(t)),
                                              a.call(n),
                                              i.brush()
                                      }
                                      return u && o ? s : s(1)
                                  })
                            : n.each(function() {
                                  var n = arguments,
                                      r = this.__brush,
                                      i = t.input(
                                          'function' == typeof e
                                              ? e.apply(this, n)
                                              : e,
                                          r.extent,
                                      ),
                                      u = c(this, n).beforestart()
                                  ei(this),
                                      (r.selection =
                                          null == i || wu(i) ? null : i),
                                      a.call(this),
                                      u
                                          .start()
                                          .brush()
                                          .end()
                              })
                    }),
                    (f.prototype = {
                        beforestart: function() {
                            return (
                                1 == ++this.active &&
                                    ((this.state.emitter = this),
                                    (this.starting = !0)),
                                this
                            )
                        },
                        start: function() {
                            return (
                                this.starting &&
                                    ((this.starting = !1), this.emit('start')),
                                this
                            )
                        },
                        brush: function() {
                            return this.emit('brush'), this
                        },
                        end: function() {
                            return (
                                0 == --this.active &&
                                    (delete this.state.emitter,
                                    this.emit('end')),
                                this
                            )
                        },
                        emit: function(n) {
                            Jt(
                                new ru(o, n, t.output(this.state.selection)),
                                i.apply,
                                i,
                                [n, this.that, this.args],
                            )
                        },
                    }),
                    (o.extent = function(t) {
                        return arguments.length
                            ? ((e =
                                  'function' == typeof t
                                      ? t
                                      : eu([
                                            [+t[0][0], +t[0][1]],
                                            [+t[1][0], +t[1][1]],
                                        ])),
                              o)
                            : e
                    }),
                    (o.filter = function(t) {
                        return arguments.length
                            ? ((r = 'function' == typeof t ? t : eu(!!t)), o)
                            : r
                    }),
                    (o.handleSize = function(t) {
                        return arguments.length ? ((u = +t), o) : u
                    }),
                    (o.on = function() {
                        var t = i.on.apply(i, arguments)
                        return t === i ? o : t
                    }),
                    o
                )
            }
            var Eu = Math.cos,
                Tu = Math.sin,
                Cu = Math.PI,
                Pu = Cu / 2,
                zu = 2 * Cu,
                Ru = Math.max
            var Du = function() {
                    var t = 0,
                        n = null,
                        e = null,
                        r = null
                    function i(i) {
                        var u,
                            o,
                            a,
                            c,
                            f,
                            s,
                            l = i.length,
                            h = [],
                            d = w(l),
                            p = [],
                            v = [],
                            y = (v.groups = new Array(l)),
                            g = new Array(l * l)
                        for (u = 0, f = -1; ++f < l; ) {
                            for (o = 0, s = -1; ++s < l; ) o += i[f][s]
                            h.push(o), p.push(w(l)), (u += o)
                        }
                        for (
                            n &&
                                d.sort(function(t, e) {
                                    return n(h[t], h[e])
                                }),
                                e &&
                                    p.forEach(function(t, n) {
                                        t.sort(function(t, r) {
                                            return e(i[n][t], i[n][r])
                                        })
                                    }),
                                c = (u = Ru(0, zu - t * l) / u) ? t : zu / l,
                                o = 0,
                                f = -1;
                            ++f < l;

                        ) {
                            for (a = o, s = -1; ++s < l; ) {
                                var b = d[f],
                                    _ = p[b][s],
                                    m = i[b][_],
                                    x = o,
                                    M = (o += m * u)
                                g[_ * l + b] = {
                                    index: b,
                                    subindex: _,
                                    startAngle: x,
                                    endAngle: M,
                                    value: m,
                                }
                            }
                            ;(y[b] = {
                                index: b,
                                startAngle: a,
                                endAngle: o,
                                value: h[b],
                            }),
                                (o += c)
                        }
                        for (f = -1; ++f < l; )
                            for (s = f - 1; ++s < l; ) {
                                var k = g[s * l + f],
                                    A = g[f * l + s]
                                ;(k.value || A.value) &&
                                    v.push(
                                        k.value < A.value
                                            ? { source: A, target: k }
                                            : { source: k, target: A },
                                    )
                            }
                        return r ? v.sort(r) : v
                    }
                    return (
                        (i.padAngle = function(n) {
                            return arguments.length ? ((t = Ru(0, n)), i) : t
                        }),
                        (i.sortGroups = function(t) {
                            return arguments.length ? ((n = t), i) : n
                        }),
                        (i.sortSubgroups = function(t) {
                            return arguments.length ? ((e = t), i) : e
                        }),
                        (i.sortChords = function(t) {
                            return arguments.length
                                ? (null == t
                                      ? (r = null)
                                      : (((n = t),
                                        (r = function(t, e) {
                                            return n(
                                                t.source.value + t.target.value,
                                                e.source.value + e.target.value,
                                            )
                                        }))._ = t),
                                  i)
                                : r && r._
                            var n
                        }),
                        i
                    )
                },
                Lu = Array.prototype.slice,
                Ou = function(t) {
                    return function() {
                        return t
                    }
                },
                qu = Math.PI,
                Uu = 2 * qu,
                Bu = Uu - 1e-6
            function Fu() {
                ;(this._x0 = this._y0 = this._x1 = this._y1 = null),
                    (this._ = '')
            }
            function Yu() {
                return new Fu()
            }
            Fu.prototype = Yu.prototype = {
                constructor: Fu,
                moveTo: function(t, n) {
                    this._ +=
                        'M' +
                        (this._x0 = this._x1 = +t) +
                        ',' +
                        (this._y0 = this._y1 = +n)
                },
                closePath: function() {
                    null !== this._x1 &&
                        ((this._x1 = this._x0),
                        (this._y1 = this._y0),
                        (this._ += 'Z'))
                },
                lineTo: function(t, n) {
                    this._ += 'L' + (this._x1 = +t) + ',' + (this._y1 = +n)
                },
                quadraticCurveTo: function(t, n, e, r) {
                    this._ +=
                        'Q' +
                        +t +
                        ',' +
                        +n +
                        ',' +
                        (this._x1 = +e) +
                        ',' +
                        (this._y1 = +r)
                },
                bezierCurveTo: function(t, n, e, r, i, u) {
                    this._ +=
                        'C' +
                        +t +
                        ',' +
                        +n +
                        ',' +
                        +e +
                        ',' +
                        +r +
                        ',' +
                        (this._x1 = +i) +
                        ',' +
                        (this._y1 = +u)
                },
                arcTo: function(t, n, e, r, i) {
                    ;(t = +t), (n = +n), (e = +e), (r = +r), (i = +i)
                    var u = this._x1,
                        o = this._y1,
                        a = e - t,
                        c = r - n,
                        f = u - t,
                        s = o - n,
                        l = f * f + s * s
                    if (i < 0) throw new Error('negative radius: ' + i)
                    if (null === this._x1)
                        this._ += 'M' + (this._x1 = t) + ',' + (this._y1 = n)
                    else if (l > 1e-6)
                        if (Math.abs(s * a - c * f) > 1e-6 && i) {
                            var h = e - u,
                                d = r - o,
                                p = a * a + c * c,
                                v = h * h + d * d,
                                y = Math.sqrt(p),
                                g = Math.sqrt(l),
                                b =
                                    i *
                                    Math.tan(
                                        (qu -
                                            Math.acos(
                                                (p + l - v) / (2 * y * g),
                                            )) /
                                            2,
                                    ),
                                _ = b / g,
                                m = b / y
                            Math.abs(_ - 1) > 1e-6 &&
                                (this._ +=
                                    'L' + (t + _ * f) + ',' + (n + _ * s)),
                                (this._ +=
                                    'A' +
                                    i +
                                    ',' +
                                    i +
                                    ',0,0,' +
                                    +(s * h > f * d) +
                                    ',' +
                                    (this._x1 = t + m * a) +
                                    ',' +
                                    (this._y1 = n + m * c))
                        } else
                            this._ +=
                                'L' + (this._x1 = t) + ',' + (this._y1 = n)
                    else;
                },
                arc: function(t, n, e, r, i, u) {
                    ;(t = +t), (n = +n)
                    var o = (e = +e) * Math.cos(r),
                        a = e * Math.sin(r),
                        c = t + o,
                        f = n + a,
                        s = 1 ^ u,
                        l = u ? r - i : i - r
                    if (e < 0) throw new Error('negative radius: ' + e)
                    null === this._x1
                        ? (this._ += 'M' + c + ',' + f)
                        : (Math.abs(this._x1 - c) > 1e-6 ||
                              Math.abs(this._y1 - f) > 1e-6) &&
                          (this._ += 'L' + c + ',' + f),
                        e &&
                            (l < 0 && (l = (l % Uu) + Uu),
                            l > Bu
                                ? (this._ +=
                                      'A' +
                                      e +
                                      ',' +
                                      e +
                                      ',0,1,' +
                                      s +
                                      ',' +
                                      (t - o) +
                                      ',' +
                                      (n - a) +
                                      'A' +
                                      e +
                                      ',' +
                                      e +
                                      ',0,1,' +
                                      s +
                                      ',' +
                                      (this._x1 = c) +
                                      ',' +
                                      (this._y1 = f))
                                : l > 1e-6 &&
                                  (this._ +=
                                      'A' +
                                      e +
                                      ',' +
                                      e +
                                      ',0,' +
                                      +(l >= qu) +
                                      ',' +
                                      s +
                                      ',' +
                                      (this._x1 = t + e * Math.cos(i)) +
                                      ',' +
                                      (this._y1 = n + e * Math.sin(i))))
                },
                rect: function(t, n, e, r) {
                    this._ +=
                        'M' +
                        (this._x0 = this._x1 = +t) +
                        ',' +
                        (this._y0 = this._y1 = +n) +
                        'h' +
                        +e +
                        'v' +
                        +r +
                        'h' +
                        -e +
                        'Z'
                },
                toString: function() {
                    return this._
                },
            }
            var Iu = Yu
            function ju(t) {
                return t.source
            }
            function Hu(t) {
                return t.target
            }
            function Gu(t) {
                return t.radius
            }
            function Xu(t) {
                return t.startAngle
            }
            function Vu(t) {
                return t.endAngle
            }
            var $u = function() {
                var t = ju,
                    n = Hu,
                    e = Gu,
                    r = Xu,
                    i = Vu,
                    u = null
                function o() {
                    var o,
                        a = Lu.call(arguments),
                        c = t.apply(this, a),
                        f = n.apply(this, a),
                        s = +e.apply(this, ((a[0] = c), a)),
                        l = r.apply(this, a) - Pu,
                        h = i.apply(this, a) - Pu,
                        d = s * Eu(l),
                        p = s * Tu(l),
                        v = +e.apply(this, ((a[0] = f), a)),
                        y = r.apply(this, a) - Pu,
                        g = i.apply(this, a) - Pu
                    if (
                        (u || (u = o = Iu()),
                        u.moveTo(d, p),
                        u.arc(0, 0, s, l, h),
                        (l === y && h === g) ||
                            (u.quadraticCurveTo(0, 0, v * Eu(y), v * Tu(y)),
                            u.arc(0, 0, v, y, g)),
                        u.quadraticCurveTo(0, 0, d, p),
                        u.closePath(),
                        o)
                    )
                        return (u = null), o + '' || null
                }
                return (
                    (o.radius = function(t) {
                        return arguments.length
                            ? ((e = 'function' == typeof t ? t : Ou(+t)), o)
                            : e
                    }),
                    (o.startAngle = function(t) {
                        return arguments.length
                            ? ((r = 'function' == typeof t ? t : Ou(+t)), o)
                            : r
                    }),
                    (o.endAngle = function(t) {
                        return arguments.length
                            ? ((i = 'function' == typeof t ? t : Ou(+t)), o)
                            : i
                    }),
                    (o.source = function(n) {
                        return arguments.length ? ((t = n), o) : t
                    }),
                    (o.target = function(t) {
                        return arguments.length ? ((n = t), o) : n
                    }),
                    (o.context = function(t) {
                        return arguments.length
                            ? ((u = null == t ? null : t), o)
                            : u
                    }),
                    o
                )
            }
            function Wu() {}
            function Zu(t, n) {
                var e = new Wu()
                if (t instanceof Wu)
                    t.each(function(t, n) {
                        e.set(n, t)
                    })
                else if (Array.isArray(t)) {
                    var r,
                        i = -1,
                        u = t.length
                    if (null == n) for (; ++i < u; ) e.set(i, t[i])
                    else for (; ++i < u; ) e.set(n((r = t[i]), i, t), r)
                } else if (t) for (var o in t) e.set(o, t[o])
                return e
            }
            Wu.prototype = Zu.prototype = {
                constructor: Wu,
                has: function(t) {
                    return '$' + t in this
                },
                get: function(t) {
                    return this['$' + t]
                },
                set: function(t, n) {
                    return (this['$' + t] = n), this
                },
                remove: function(t) {
                    var n = '$' + t
                    return n in this && delete this[n]
                },
                clear: function() {
                    for (var t in this) '$' === t[0] && delete this[t]
                },
                keys: function() {
                    var t = []
                    for (var n in this) '$' === n[0] && t.push(n.slice(1))
                    return t
                },
                values: function() {
                    var t = []
                    for (var n in this) '$' === n[0] && t.push(this[n])
                    return t
                },
                entries: function() {
                    var t = []
                    for (var n in this)
                        '$' === n[0] &&
                            t.push({ key: n.slice(1), value: this[n] })
                    return t
                },
                size: function() {
                    var t = 0
                    for (var n in this) '$' === n[0] && ++t
                    return t
                },
                empty: function() {
                    for (var t in this) if ('$' === t[0]) return !1
                    return !0
                },
                each: function(t) {
                    for (var n in this)
                        '$' === n[0] && t(this[n], n.slice(1), this)
                },
            }
            var Qu = Zu,
                Ju = function() {
                    var t,
                        n,
                        e,
                        r = [],
                        i = []
                    function u(e, i, o, a) {
                        if (i >= r.length)
                            return null != t && e.sort(t), null != n ? n(e) : e
                        for (
                            var c,
                                f,
                                s,
                                l = -1,
                                h = e.length,
                                d = r[i++],
                                p = Qu(),
                                v = o();
                            ++l < h;

                        )
                            (s = p.get((c = d((f = e[l])) + '')))
                                ? s.push(f)
                                : p.set(c, [f])
                        return (
                            p.each(function(t, n) {
                                a(v, n, u(t, i, o, a))
                            }),
                            v
                        )
                    }
                    return (e = {
                        object: function(t) {
                            return u(t, 0, Ku, to)
                        },
                        map: function(t) {
                            return u(t, 0, no, eo)
                        },
                        entries: function(t) {
                            return (function t(e, u) {
                                if (++u > r.length) return e
                                var o,
                                    a = i[u - 1]
                                return (
                                    null != n && u >= r.length
                                        ? (o = e.entries())
                                        : ((o = []),
                                          e.each(function(n, e) {
                                              o.push({
                                                  key: e,
                                                  values: t(n, u),
                                              })
                                          })),
                                    null != a
                                        ? o.sort(function(t, n) {
                                              return a(t.key, n.key)
                                          })
                                        : o
                                )
                            })(u(t, 0, no, eo), 0)
                        },
                        key: function(t) {
                            return r.push(t), e
                        },
                        sortKeys: function(t) {
                            return (i[r.length - 1] = t), e
                        },
                        sortValues: function(n) {
                            return (t = n), e
                        },
                        rollup: function(t) {
                            return (n = t), e
                        },
                    })
                }
            function Ku() {
                return {}
            }
            function to(t, n, e) {
                t[n] = e
            }
            function no() {
                return Qu()
            }
            function eo(t, n, e) {
                t.set(n, e)
            }
            function ro() {}
            var io = Qu.prototype
            function uo(t, n) {
                var e = new ro()
                if (t instanceof ro)
                    t.each(function(t) {
                        e.add(t)
                    })
                else if (t) {
                    var r = -1,
                        i = t.length
                    if (null == n) for (; ++r < i; ) e.add(t[r])
                    else for (; ++r < i; ) e.add(n(t[r], r, t))
                }
                return e
            }
            ro.prototype = uo.prototype = {
                constructor: ro,
                has: io.has,
                add: function(t) {
                    return (this['$' + (t += '')] = t), this
                },
                remove: io.remove,
                clear: io.clear,
                values: io.keys,
                size: io.size,
                empty: io.empty,
                each: io.each,
            }
            var oo = uo,
                ao = function(t) {
                    var n = []
                    for (var e in t) n.push(e)
                    return n
                },
                co = function(t) {
                    var n = []
                    for (var e in t) n.push(t[e])
                    return n
                },
                fo = function(t) {
                    var n = []
                    for (var e in t) n.push({ key: e, value: t[e] })
                    return n
                },
                so = Array.prototype.slice,
                lo = function(t, n) {
                    return t - n
                },
                ho = function(t) {
                    for (
                        var n = 0,
                            e = t.length,
                            r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1];
                        ++n < e;

                    )
                        r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1]
                    return r
                },
                po = function(t) {
                    return function() {
                        return t
                    }
                },
                vo = function(t, n) {
                    for (var e, r = -1, i = n.length; ++r < i; )
                        if ((e = yo(t, n[r]))) return e
                    return 0
                }
            function yo(t, n) {
                for (
                    var e = n[0],
                        r = n[1],
                        i = -1,
                        u = 0,
                        o = t.length,
                        a = o - 1;
                    u < o;
                    a = u++
                ) {
                    var c = t[u],
                        f = c[0],
                        s = c[1],
                        l = t[a],
                        h = l[0],
                        d = l[1]
                    if (go(c, l, n)) return 0
                    s > r != d > r &&
                        e < ((h - f) * (r - s)) / (d - s) + f &&
                        (i = -i)
                }
                return i
            }
            function go(t, n, e) {
                var r, i, u, o
                return (
                    (function(t, n, e) {
                        return (
                            (n[0] - t[0]) * (e[1] - t[1]) ==
                            (e[0] - t[0]) * (n[1] - t[1])
                        )
                    })(t, n, e) &&
                    ((i = t[(r = +(t[0] === n[0]))]),
                    (u = e[r]),
                    (o = n[r]),
                    (i <= u && u <= o) || (o <= u && u <= i))
                )
            }
            var bo = function() {},
                _o = [
                    [],
                    [[[1, 1.5], [0.5, 1]]],
                    [[[1.5, 1], [1, 1.5]]],
                    [[[1.5, 1], [0.5, 1]]],
                    [[[1, 0.5], [1.5, 1]]],
                    [[[1, 1.5], [0.5, 1]], [[1, 0.5], [1.5, 1]]],
                    [[[1, 0.5], [1, 1.5]]],
                    [[[1, 0.5], [0.5, 1]]],
                    [[[0.5, 1], [1, 0.5]]],
                    [[[1, 1.5], [1, 0.5]]],
                    [[[0.5, 1], [1, 0.5]], [[1.5, 1], [1, 1.5]]],
                    [[[1.5, 1], [1, 0.5]]],
                    [[[0.5, 1], [1.5, 1]]],
                    [[[1, 1.5], [1.5, 1]]],
                    [[[0.5, 1], [1, 1.5]]],
                    [],
                ],
                mo = function() {
                    var t = 1,
                        n = 1,
                        e = T,
                        r = a
                    function i(t) {
                        var n = e(t)
                        if (Array.isArray(n)) n = n.slice().sort(lo)
                        else {
                            var r = y(t),
                                i = r[0],
                                o = r[1]
                            ;(n = E(i, o, n)),
                                (n = w(
                                    Math.floor(i / n) * n,
                                    Math.floor(o / n) * n,
                                    n,
                                ))
                        }
                        return n.map(function(n) {
                            return u(t, n)
                        })
                    }
                    function u(e, i) {
                        var u = [],
                            a = []
                        return (
                            (function(e, r, i) {
                                var u,
                                    a,
                                    c,
                                    f,
                                    s,
                                    l,
                                    h = new Array(),
                                    d = new Array()
                                ;(u = a = -1),
                                    (f = e[0] >= r),
                                    _o[f << 1].forEach(p)
                                for (; ++u < t - 1; )
                                    (c = f),
                                        (f = e[u + 1] >= r),
                                        _o[c | (f << 1)].forEach(p)
                                _o[f << 0].forEach(p)
                                for (; ++a < n - 1; ) {
                                    for (
                                        u = -1,
                                            f = e[a * t + t] >= r,
                                            s = e[a * t] >= r,
                                            _o[(f << 1) | (s << 2)].forEach(p);
                                        ++u < t - 1;

                                    )
                                        (c = f),
                                            (f = e[a * t + t + u + 1] >= r),
                                            (l = s),
                                            (s = e[a * t + u + 1] >= r),
                                            _o[
                                                c |
                                                    (f << 1) |
                                                    (s << 2) |
                                                    (l << 3)
                                            ].forEach(p)
                                    _o[f | (s << 3)].forEach(p)
                                }
                                ;(u = -1),
                                    (s = e[a * t] >= r),
                                    _o[s << 2].forEach(p)
                                for (; ++u < t - 1; )
                                    (l = s),
                                        (s = e[a * t + u + 1] >= r),
                                        _o[(s << 2) | (l << 3)].forEach(p)
                                function p(t) {
                                    var n,
                                        e,
                                        r = [t[0][0] + u, t[0][1] + a],
                                        c = [t[1][0] + u, t[1][1] + a],
                                        f = o(r),
                                        s = o(c)
                                    ;(n = d[f])
                                        ? (e = h[s])
                                            ? (delete d[n.end],
                                              delete h[e.start],
                                              n === e
                                                  ? (n.ring.push(c), i(n.ring))
                                                  : (h[n.start] = d[e.end] = {
                                                        start: n.start,
                                                        end: e.end,
                                                        ring: n.ring.concat(
                                                            e.ring,
                                                        ),
                                                    }))
                                            : (delete d[n.end],
                                              n.ring.push(c),
                                              (d[(n.end = s)] = n))
                                        : (n = h[s])
                                        ? (e = d[f])
                                            ? (delete h[n.start],
                                              delete d[e.end],
                                              n === e
                                                  ? (n.ring.push(c), i(n.ring))
                                                  : (h[e.start] = d[n.end] = {
                                                        start: e.start,
                                                        end: n.end,
                                                        ring: e.ring.concat(
                                                            n.ring,
                                                        ),
                                                    }))
                                            : (delete h[n.start],
                                              n.ring.unshift(r),
                                              (h[(n.start = f)] = n))
                                        : (h[f] = d[s] = {
                                              start: f,
                                              end: s,
                                              ring: [r, c],
                                          })
                                }
                                _o[s << 3].forEach(p)
                            })(e, i, function(t) {
                                r(t, e, i), ho(t) > 0 ? u.push([t]) : a.push(t)
                            }),
                            a.forEach(function(t) {
                                for (var n, e = 0, r = u.length; e < r; ++e)
                                    if (-1 !== vo((n = u[e])[0], t))
                                        return void n.push(t)
                            }),
                            { type: 'MultiPolygon', value: i, coordinates: u }
                        )
                    }
                    function o(n) {
                        return 2 * n[0] + n[1] * (t + 1) * 4
                    }
                    function a(e, r, i) {
                        e.forEach(function(e) {
                            var u,
                                o = e[0],
                                a = e[1],
                                c = 0 | o,
                                f = 0 | a,
                                s = r[f * t + c]
                            o > 0 &&
                                o < t &&
                                c === o &&
                                ((u = r[f * t + c - 1]),
                                (e[0] = o + (i - u) / (s - u) - 0.5)),
                                a > 0 &&
                                    a < n &&
                                    f === a &&
                                    ((u = r[(f - 1) * t + c]),
                                    (e[1] = a + (i - u) / (s - u) - 0.5))
                        })
                    }
                    return (
                        (i.contour = u),
                        (i.size = function(e) {
                            if (!arguments.length) return [t, n]
                            var r = Math.ceil(e[0]),
                                u = Math.ceil(e[1])
                            if (!(r > 0 && u > 0))
                                throw new Error('invalid size')
                            return (t = r), (n = u), i
                        }),
                        (i.thresholds = function(t) {
                            return arguments.length
                                ? ((e =
                                      'function' == typeof t
                                          ? t
                                          : Array.isArray(t)
                                          ? po(so.call(t))
                                          : po(t)),
                                  i)
                                : e
                        }),
                        (i.smooth = function(t) {
                            return arguments.length
                                ? ((r = t ? a : bo), i)
                                : r === a
                        }),
                        i
                    )
                }
            function xo(t, n, e) {
                for (
                    var r = t.width, i = t.height, u = 1 + (e << 1), o = 0;
                    o < i;
                    ++o
                )
                    for (var a = 0, c = 0; a < r + e; ++a)
                        a < r && (c += t.data[a + o * r]),
                            a >= e &&
                                (a >= u && (c -= t.data[a - u + o * r]),
                                (n.data[a - e + o * r] =
                                    c / Math.min(a + 1, r - 1 + u - a, u)))
            }
            function wo(t, n, e) {
                for (
                    var r = t.width, i = t.height, u = 1 + (e << 1), o = 0;
                    o < r;
                    ++o
                )
                    for (var a = 0, c = 0; a < i + e; ++a)
                        a < i && (c += t.data[o + a * r]),
                            a >= e &&
                                (a >= u && (c -= t.data[o + (a - u) * r]),
                                (n.data[o + (a - e) * r] =
                                    c / Math.min(a + 1, i - 1 + u - a, u)))
            }
            function Mo(t) {
                return t[0]
            }
            function ko(t) {
                return t[1]
            }
            function Ao() {
                return 1
            }
            var So = function() {
                    var t = Mo,
                        n = ko,
                        e = Ao,
                        r = 960,
                        i = 500,
                        u = 20,
                        o = 2,
                        a = 3 * u,
                        c = (r + 2 * a) >> o,
                        f = (i + 2 * a) >> o,
                        s = po(20)
                    function l(r) {
                        var i = new Float32Array(c * f),
                            l = new Float32Array(c * f)
                        r.forEach(function(r, u, s) {
                            var l = (+t(r, u, s) + a) >> o,
                                h = (+n(r, u, s) + a) >> o,
                                d = +e(r, u, s)
                            l >= 0 &&
                                l < c &&
                                h >= 0 &&
                                h < f &&
                                (i[l + h * c] += d)
                        }),
                            xo(
                                { width: c, height: f, data: i },
                                { width: c, height: f, data: l },
                                u >> o,
                            ),
                            wo(
                                { width: c, height: f, data: l },
                                { width: c, height: f, data: i },
                                u >> o,
                            ),
                            xo(
                                { width: c, height: f, data: i },
                                { width: c, height: f, data: l },
                                u >> o,
                            ),
                            wo(
                                { width: c, height: f, data: l },
                                { width: c, height: f, data: i },
                                u >> o,
                            ),
                            xo(
                                { width: c, height: f, data: i },
                                { width: c, height: f, data: l },
                                u >> o,
                            ),
                            wo(
                                { width: c, height: f, data: l },
                                { width: c, height: f, data: i },
                                u >> o,
                            )
                        var d = s(i)
                        if (!Array.isArray(d)) {
                            var p = D(i)
                            ;(d = E(0, p, d)),
                                (d = w(0, Math.floor(p / d) * d, d)).shift()
                        }
                        return mo()
                            .thresholds(d)
                            .size([c, f])(i)
                            .map(h)
                    }
                    function h(t) {
                        return (
                            (t.value *= Math.pow(2, -2 * o)),
                            t.coordinates.forEach(d),
                            t
                        )
                    }
                    function d(t) {
                        t.forEach(p)
                    }
                    function p(t) {
                        t.forEach(v)
                    }
                    function v(t) {
                        ;(t[0] = t[0] * Math.pow(2, o) - a),
                            (t[1] = t[1] * Math.pow(2, o) - a)
                    }
                    function y() {
                        return (
                            (c = (r + 2 * (a = 3 * u)) >> o),
                            (f = (i + 2 * a) >> o),
                            l
                        )
                    }
                    return (
                        (l.x = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : po(+n)), l)
                                : t
                        }),
                        (l.y = function(t) {
                            return arguments.length
                                ? ((n = 'function' == typeof t ? t : po(+t)), l)
                                : n
                        }),
                        (l.weight = function(t) {
                            return arguments.length
                                ? ((e = 'function' == typeof t ? t : po(+t)), l)
                                : e
                        }),
                        (l.size = function(t) {
                            if (!arguments.length) return [r, i]
                            var n = Math.ceil(t[0]),
                                e = Math.ceil(t[1])
                            if (!(n >= 0 || n >= 0))
                                throw new Error('invalid size')
                            return (r = n), (i = e), y()
                        }),
                        (l.cellSize = function(t) {
                            if (!arguments.length) return 1 << o
                            if (!((t = +t) >= 1))
                                throw new Error('invalid cell size')
                            return (o = Math.floor(Math.log(t) / Math.LN2)), y()
                        }),
                        (l.thresholds = function(t) {
                            return arguments.length
                                ? ((s =
                                      'function' == typeof t
                                          ? t
                                          : Array.isArray(t)
                                          ? po(so.call(t))
                                          : po(t)),
                                  l)
                                : s
                        }),
                        (l.bandwidth = function(t) {
                            if (!arguments.length) return Math.sqrt(u * (u + 1))
                            if (!((t = +t) >= 0))
                                throw new Error('invalid bandwidth')
                            return (
                                (u = Math.round(
                                    (Math.sqrt(4 * t * t + 1) - 1) / 2,
                                )),
                                y()
                            )
                        }),
                        l
                    )
                },
                No = {},
                Eo = {},
                To = 34,
                Co = 10,
                Po = 13
            function zo(t) {
                return new Function(
                    'd',
                    'return {' +
                        t
                            .map(function(t, n) {
                                return JSON.stringify(t) + ': d[' + n + ']'
                            })
                            .join(',') +
                        '}',
                )
            }
            var Ro = function(t) {
                    var n = new RegExp('["' + t + '\n\r]'),
                        e = t.charCodeAt(0)
                    function r(t, n) {
                        var r,
                            i = [],
                            u = t.length,
                            o = 0,
                            a = 0,
                            c = u <= 0,
                            f = !1
                        function s() {
                            if (c) return Eo
                            if (f) return (f = !1), No
                            var n,
                                r,
                                i = o
                            if (t.charCodeAt(i) === To) {
                                for (
                                    ;
                                    (o++ < u && t.charCodeAt(o) !== To) ||
                                    t.charCodeAt(++o) === To;

                                );
                                return (
                                    (n = o) >= u
                                        ? (c = !0)
                                        : (r = t.charCodeAt(o++)) === Co
                                        ? (f = !0)
                                        : r === Po &&
                                          ((f = !0),
                                          t.charCodeAt(o) === Co && ++o),
                                    t.slice(i + 1, n - 1).replace(/""/g, '"')
                                )
                            }
                            for (; o < u; ) {
                                if ((r = t.charCodeAt((n = o++))) === Co) f = !0
                                else if (r === Po)
                                    (f = !0), t.charCodeAt(o) === Co && ++o
                                else if (r !== e) continue
                                return t.slice(i, n)
                            }
                            return (c = !0), t.slice(i, u)
                        }
                        for (
                            t.charCodeAt(u - 1) === Co && --u,
                                t.charCodeAt(u - 1) === Po && --u;
                            (r = s()) !== Eo;

                        ) {
                            for (var l = []; r !== No && r !== Eo; )
                                l.push(r), (r = s())
                            ;(n && null == (l = n(l, a++))) || i.push(l)
                        }
                        return i
                    }
                    function i(n) {
                        return n.map(u).join(t)
                    }
                    function u(t) {
                        return null == t
                            ? ''
                            : n.test((t += ''))
                            ? '"' + t.replace(/"/g, '""') + '"'
                            : t
                    }
                    return {
                        parse: function(t, n) {
                            var e,
                                i,
                                u = r(t, function(t, r) {
                                    if (e) return e(t, r - 1)
                                    ;(i = t),
                                        (e = n
                                            ? (function(t, n) {
                                                  var e = zo(t)
                                                  return function(r, i) {
                                                      return n(e(r), i, t)
                                                  }
                                              })(t, n)
                                            : zo(t))
                                })
                            return (u.columns = i || []), u
                        },
                        parseRows: r,
                        format: function(n, e) {
                            return (
                                null == e &&
                                    (e = (function(t) {
                                        var n = Object.create(null),
                                            e = []
                                        return (
                                            t.forEach(function(t) {
                                                for (var r in t)
                                                    r in n || e.push((n[r] = r))
                                            }),
                                            e
                                        )
                                    })(n)),
                                [e.map(u).join(t)]
                                    .concat(
                                        n.map(function(n) {
                                            return e
                                                .map(function(t) {
                                                    return u(n[t])
                                                })
                                                .join(t)
                                        }),
                                    )
                                    .join('\n')
                            )
                        },
                        formatRows: function(t) {
                            return t.map(i).join('\n')
                        },
                    }
                },
                Do = Ro(','),
                Lo = Do.parse,
                Oo = Do.parseRows,
                qo = Do.format,
                Uo = Do.formatRows,
                Bo = Ro('\t'),
                Fo = Bo.parse,
                Yo = Bo.parseRows,
                Io = Bo.format,
                jo = Bo.formatRows
            function Ho(t) {
                if (!t.ok) throw new Error(t.status + ' ' + t.statusText)
                return t.blob()
            }
            var Go = function(t, n) {
                return fetch(t, n).then(Ho)
            }
            function Xo(t) {
                if (!t.ok) throw new Error(t.status + ' ' + t.statusText)
                return t.arrayBuffer()
            }
            var Vo = function(t, n) {
                return fetch(t, n).then(Xo)
            }
            function $o(t) {
                if (!t.ok) throw new Error(t.status + ' ' + t.statusText)
                return t.text()
            }
            var Wo = function(t, n) {
                return fetch(t, n).then($o)
            }
            function Zo(t) {
                return function(n, e, r) {
                    return (
                        2 === arguments.length &&
                            'function' == typeof e &&
                            ((r = e), (e = void 0)),
                        Wo(n, e).then(function(n) {
                            return t(n, r)
                        })
                    )
                }
            }
            function Qo(t, n, e, r) {
                3 === arguments.length &&
                    'function' == typeof e &&
                    ((r = e), (e = void 0))
                var i = Ro(t)
                return Wo(n, e).then(function(t) {
                    return i.parse(t, r)
                })
            }
            var Jo = Zo(Lo),
                Ko = Zo(Fo),
                ta = function(t, n) {
                    return new Promise(function(e, r) {
                        var i = new Image()
                        for (var u in n) i[u] = n[u]
                        ;(i.onerror = r),
                            (i.onload = function() {
                                e(i)
                            }),
                            (i.src = t)
                    })
                }
            function na(t) {
                if (!t.ok) throw new Error(t.status + ' ' + t.statusText)
                return t.json()
            }
            var ea = function(t, n) {
                return fetch(t, n).then(na)
            }
            function ra(t) {
                return function(n, e) {
                    return Wo(n, e).then(function(n) {
                        return new DOMParser().parseFromString(n, t)
                    })
                }
            }
            var ia = ra('application/xml'),
                ua = ra('text/html'),
                oa = ra('image/svg+xml'),
                aa = function(t, n) {
                    var e
                    function r() {
                        var r,
                            i,
                            u = e.length,
                            o = 0,
                            a = 0
                        for (r = 0; r < u; ++r) (o += (i = e[r]).x), (a += i.y)
                        for (o = o / u - t, a = a / u - n, r = 0; r < u; ++r)
                            ((i = e[r]).x -= o), (i.y -= a)
                    }
                    return (
                        null == t && (t = 0),
                        null == n && (n = 0),
                        (r.initialize = function(t) {
                            e = t
                        }),
                        (r.x = function(n) {
                            return arguments.length ? ((t = +n), r) : t
                        }),
                        (r.y = function(t) {
                            return arguments.length ? ((n = +t), r) : n
                        }),
                        r
                    )
                },
                ca = function(t) {
                    return function() {
                        return t
                    }
                },
                fa = function() {
                    return 1e-6 * (Math.random() - 0.5)
                }
            function sa(t, n, e, r) {
                if (isNaN(n) || isNaN(e)) return t
                var i,
                    u,
                    o,
                    a,
                    c,
                    f,
                    s,
                    l,
                    h,
                    d = t._root,
                    p = { data: r },
                    v = t._x0,
                    y = t._y0,
                    g = t._x1,
                    b = t._y1
                if (!d) return (t._root = p), t
                for (; d.length; )
                    if (
                        ((f = n >= (u = (v + g) / 2)) ? (v = u) : (g = u),
                        (s = e >= (o = (y + b) / 2)) ? (y = o) : (b = o),
                        (i = d),
                        !(d = d[(l = (s << 1) | f)]))
                    )
                        return (i[l] = p), t
                if (
                    ((a = +t._x.call(null, d.data)),
                    (c = +t._y.call(null, d.data)),
                    n === a && e === c)
                )
                    return (p.next = d), i ? (i[l] = p) : (t._root = p), t
                do {
                    ;(i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
                        (f = n >= (u = (v + g) / 2)) ? (v = u) : (g = u),
                        (s = e >= (o = (y + b) / 2)) ? (y = o) : (b = o)
                } while ((l = (s << 1) | f) == (h = ((c >= o) << 1) | (a >= u)))
                return (i[h] = d), (i[l] = p), t
            }
            var la = function(t, n, e, r, i) {
                ;(this.node = t),
                    (this.x0 = n),
                    (this.y0 = e),
                    (this.x1 = r),
                    (this.y1 = i)
            }
            function ha(t) {
                return t[0]
            }
            function da(t) {
                return t[1]
            }
            function pa(t, n, e) {
                var r = new va(
                    null == n ? ha : n,
                    null == e ? da : e,
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                )
                return null == t ? r : r.addAll(t)
            }
            function va(t, n, e, r, i, u) {
                ;(this._x = t),
                    (this._y = n),
                    (this._x0 = e),
                    (this._y0 = r),
                    (this._x1 = i),
                    (this._y1 = u),
                    (this._root = void 0)
            }
            function ya(t) {
                for (var n = { data: t.data }, e = n; (t = t.next); )
                    e = e.next = { data: t.data }
                return n
            }
            var ga = (pa.prototype = va.prototype)
            function ba(t) {
                return t.x + t.vx
            }
            function _a(t) {
                return t.y + t.vy
            }
            ;(ga.copy = function() {
                var t,
                    n,
                    e = new va(
                        this._x,
                        this._y,
                        this._x0,
                        this._y0,
                        this._x1,
                        this._y1,
                    ),
                    r = this._root
                if (!r) return e
                if (!r.length) return (e._root = ya(r)), e
                for (
                    t = [{ source: r, target: (e._root = new Array(4)) }];
                    (r = t.pop());

                )
                    for (var i = 0; i < 4; ++i)
                        (n = r.source[i]) &&
                            (n.length
                                ? t.push({
                                      source: n,
                                      target: (r.target[i] = new Array(4)),
                                  })
                                : (r.target[i] = ya(n)))
                return e
            }),
                (ga.add = function(t) {
                    var n = +this._x.call(null, t),
                        e = +this._y.call(null, t)
                    return sa(this.cover(n, e), n, e, t)
                }),
                (ga.addAll = function(t) {
                    var n,
                        e,
                        r,
                        i,
                        u = t.length,
                        o = new Array(u),
                        a = new Array(u),
                        c = 1 / 0,
                        f = 1 / 0,
                        s = -1 / 0,
                        l = -1 / 0
                    for (e = 0; e < u; ++e)
                        isNaN((r = +this._x.call(null, (n = t[e])))) ||
                            isNaN((i = +this._y.call(null, n))) ||
                            ((o[e] = r),
                            (a[e] = i),
                            r < c && (c = r),
                            r > s && (s = r),
                            i < f && (f = i),
                            i > l && (l = i))
                    for (
                        s < c && ((c = this._x0), (s = this._x1)),
                            l < f && ((f = this._y0), (l = this._y1)),
                            this.cover(c, f).cover(s, l),
                            e = 0;
                        e < u;
                        ++e
                    )
                        sa(this, o[e], a[e], t[e])
                    return this
                }),
                (ga.cover = function(t, n) {
                    if (isNaN((t = +t)) || isNaN((n = +n))) return this
                    var e = this._x0,
                        r = this._y0,
                        i = this._x1,
                        u = this._y1
                    if (isNaN(e))
                        (i = (e = Math.floor(t)) + 1),
                            (u = (r = Math.floor(n)) + 1)
                    else {
                        if (!(e > t || t > i || r > n || n > u)) return this
                        var o,
                            a,
                            c = i - e,
                            f = this._root
                        switch (
                            (a = ((n < (r + u) / 2) << 1) | (t < (e + i) / 2))
                        ) {
                            case 0:
                                do {
                                    ;((o = new Array(4))[a] = f), (f = o)
                                } while (
                                    ((u = r + (c *= 2)),
                                    t > (i = e + c) || n > u)
                                )
                                break
                            case 1:
                                do {
                                    ;((o = new Array(4))[a] = f), (f = o)
                                } while (
                                    ((u = r + (c *= 2)),
                                    (e = i - c) > t || n > u)
                                )
                                break
                            case 2:
                                do {
                                    ;((o = new Array(4))[a] = f), (f = o)
                                } while (
                                    ((r = u - (c *= 2)),
                                    t > (i = e + c) || r > n)
                                )
                                break
                            case 3:
                                do {
                                    ;((o = new Array(4))[a] = f), (f = o)
                                } while (
                                    ((r = u - (c *= 2)),
                                    (e = i - c) > t || r > n)
                                )
                        }
                        this._root && this._root.length && (this._root = f)
                    }
                    return (
                        (this._x0 = e),
                        (this._y0 = r),
                        (this._x1 = i),
                        (this._y1 = u),
                        this
                    )
                }),
                (ga.data = function() {
                    var t = []
                    return (
                        this.visit(function(n) {
                            if (!n.length)
                                do {
                                    t.push(n.data)
                                } while ((n = n.next))
                        }),
                        t
                    )
                }),
                (ga.extent = function(t) {
                    return arguments.length
                        ? this.cover(+t[0][0], +t[0][1]).cover(
                              +t[1][0],
                              +t[1][1],
                          )
                        : isNaN(this._x0)
                        ? void 0
                        : [[this._x0, this._y0], [this._x1, this._y1]]
                }),
                (ga.find = function(t, n, e) {
                    var r,
                        i,
                        u,
                        o,
                        a,
                        c,
                        f,
                        s = this._x0,
                        l = this._y0,
                        h = this._x1,
                        d = this._y1,
                        p = [],
                        v = this._root
                    for (
                        v && p.push(new la(v, s, l, h, d)),
                            null == e
                                ? (e = 1 / 0)
                                : ((s = t - e),
                                  (l = n - e),
                                  (h = t + e),
                                  (d = n + e),
                                  (e *= e));
                        (c = p.pop());

                    )
                        if (
                            !(
                                !(v = c.node) ||
                                (i = c.x0) > h ||
                                (u = c.y0) > d ||
                                (o = c.x1) < s ||
                                (a = c.y1) < l
                            )
                        )
                            if (v.length) {
                                var y = (i + o) / 2,
                                    g = (u + a) / 2
                                p.push(
                                    new la(v[3], y, g, o, a),
                                    new la(v[2], i, g, y, a),
                                    new la(v[1], y, u, o, g),
                                    new la(v[0], i, u, y, g),
                                ),
                                    (f = ((n >= g) << 1) | (t >= y)) &&
                                        ((c = p[p.length - 1]),
                                        (p[p.length - 1] = p[p.length - 1 - f]),
                                        (p[p.length - 1 - f] = c))
                            } else {
                                var b = t - +this._x.call(null, v.data),
                                    _ = n - +this._y.call(null, v.data),
                                    m = b * b + _ * _
                                if (m < e) {
                                    var x = Math.sqrt((e = m))
                                    ;(s = t - x),
                                        (l = n - x),
                                        (h = t + x),
                                        (d = n + x),
                                        (r = v.data)
                                }
                            }
                    return r
                }),
                (ga.remove = function(t) {
                    if (
                        isNaN((u = +this._x.call(null, t))) ||
                        isNaN((o = +this._y.call(null, t)))
                    )
                        return this
                    var n,
                        e,
                        r,
                        i,
                        u,
                        o,
                        a,
                        c,
                        f,
                        s,
                        l,
                        h,
                        d = this._root,
                        p = this._x0,
                        v = this._y0,
                        y = this._x1,
                        g = this._y1
                    if (!d) return this
                    if (d.length)
                        for (;;) {
                            if (
                                ((f = u >= (a = (p + y) / 2))
                                    ? (p = a)
                                    : (y = a),
                                (s = o >= (c = (v + g) / 2))
                                    ? (v = c)
                                    : (g = c),
                                (n = d),
                                !(d = d[(l = (s << 1) | f)]))
                            )
                                return this
                            if (!d.length) break
                            ;(n[(l + 1) & 3] ||
                                n[(l + 2) & 3] ||
                                n[(l + 3) & 3]) &&
                                ((e = n), (h = l))
                        }
                    for (; d.data !== t; )
                        if (((r = d), !(d = d.next))) return this
                    return (
                        (i = d.next) && delete d.next,
                        r
                            ? (i ? (r.next = i) : delete r.next, this)
                            : n
                            ? (i ? (n[l] = i) : delete n[l],
                              (d = n[0] || n[1] || n[2] || n[3]) &&
                                  d === (n[3] || n[2] || n[1] || n[0]) &&
                                  !d.length &&
                                  (e ? (e[h] = d) : (this._root = d)),
                              this)
                            : ((this._root = i), this)
                    )
                }),
                (ga.removeAll = function(t) {
                    for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n])
                    return this
                }),
                (ga.root = function() {
                    return this._root
                }),
                (ga.size = function() {
                    var t = 0
                    return (
                        this.visit(function(n) {
                            if (!n.length)
                                do {
                                    ++t
                                } while ((n = n.next))
                        }),
                        t
                    )
                }),
                (ga.visit = function(t) {
                    var n,
                        e,
                        r,
                        i,
                        u,
                        o,
                        a = [],
                        c = this._root
                    for (
                        c &&
                        a.push(
                            new la(c, this._x0, this._y0, this._x1, this._y1),
                        );
                        (n = a.pop());

                    )
                        if (
                            !t(
                                (c = n.node),
                                (r = n.x0),
                                (i = n.y0),
                                (u = n.x1),
                                (o = n.y1),
                            ) &&
                            c.length
                        ) {
                            var f = (r + u) / 2,
                                s = (i + o) / 2
                            ;(e = c[3]) && a.push(new la(e, f, s, u, o)),
                                (e = c[2]) && a.push(new la(e, r, s, f, o)),
                                (e = c[1]) && a.push(new la(e, f, i, u, s)),
                                (e = c[0]) && a.push(new la(e, r, i, f, s))
                        }
                    return this
                }),
                (ga.visitAfter = function(t) {
                    var n,
                        e = [],
                        r = []
                    for (
                        this._root &&
                        e.push(
                            new la(
                                this._root,
                                this._x0,
                                this._y0,
                                this._x1,
                                this._y1,
                            ),
                        );
                        (n = e.pop());

                    ) {
                        var i = n.node
                        if (i.length) {
                            var u,
                                o = n.x0,
                                a = n.y0,
                                c = n.x1,
                                f = n.y1,
                                s = (o + c) / 2,
                                l = (a + f) / 2
                            ;(u = i[0]) && e.push(new la(u, o, a, s, l)),
                                (u = i[1]) && e.push(new la(u, s, a, c, l)),
                                (u = i[2]) && e.push(new la(u, o, l, s, f)),
                                (u = i[3]) && e.push(new la(u, s, l, c, f))
                        }
                        r.push(n)
                    }
                    for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1)
                    return this
                }),
                (ga.x = function(t) {
                    return arguments.length ? ((this._x = t), this) : this._x
                }),
                (ga.y = function(t) {
                    return arguments.length ? ((this._y = t), this) : this._y
                })
            var ma = function(t) {
                var n,
                    e,
                    r = 1,
                    i = 1
                function u() {
                    for (
                        var t, u, a, c, f, s, l, h = n.length, d = 0;
                        d < i;
                        ++d
                    )
                        for (u = pa(n, ba, _a).visitAfter(o), t = 0; t < h; ++t)
                            (a = n[t]),
                                (s = e[a.index]),
                                (l = s * s),
                                (c = a.x + a.vx),
                                (f = a.y + a.vy),
                                u.visit(p)
                    function p(t, n, e, i, u) {
                        var o = t.data,
                            h = t.r,
                            d = s + h
                        if (!o)
                            return (
                                n > c + d || i < c - d || e > f + d || u < f - d
                            )
                        if (o.index > a.index) {
                            var p = c - o.x - o.vx,
                                v = f - o.y - o.vy,
                                y = p * p + v * v
                            y < d * d &&
                                (0 === p && (y += (p = fa()) * p),
                                0 === v && (y += (v = fa()) * v),
                                (y = ((d - (y = Math.sqrt(y))) / y) * r),
                                (a.vx += (p *= y) * (d = (h *= h) / (l + h))),
                                (a.vy += (v *= y) * d),
                                (o.vx -= p * (d = 1 - d)),
                                (o.vy -= v * d))
                        }
                    }
                }
                function o(t) {
                    if (t.data) return (t.r = e[t.data.index])
                    for (var n = (t.r = 0); n < 4; ++n)
                        t[n] && t[n].r > t.r && (t.r = t[n].r)
                }
                function a() {
                    if (n) {
                        var r,
                            i,
                            u = n.length
                        for (e = new Array(u), r = 0; r < u; ++r)
                            (i = n[r]), (e[i.index] = +t(i, r, n))
                    }
                }
                return (
                    'function' != typeof t && (t = ca(null == t ? 1 : +t)),
                    (u.initialize = function(t) {
                        ;(n = t), a()
                    }),
                    (u.iterations = function(t) {
                        return arguments.length ? ((i = +t), u) : i
                    }),
                    (u.strength = function(t) {
                        return arguments.length ? ((r = +t), u) : r
                    }),
                    (u.radius = function(n) {
                        return arguments.length
                            ? ((t = 'function' == typeof n ? n : ca(+n)),
                              a(),
                              u)
                            : t
                    }),
                    u
                )
            }
            function xa(t) {
                return t.index
            }
            function wa(t, n) {
                var e = t.get(n)
                if (!e) throw new Error('missing: ' + n)
                return e
            }
            var Ma = function(t) {
                var n,
                    e,
                    r,
                    i,
                    u,
                    o = xa,
                    a = function(t) {
                        return (
                            1 / Math.min(i[t.source.index], i[t.target.index])
                        )
                    },
                    c = ca(30),
                    f = 1
                function s(r) {
                    for (var i = 0, o = t.length; i < f; ++i)
                        for (var a, c, s, l, h, d, p, v = 0; v < o; ++v)
                            (c = (a = t[v]).source),
                                (l =
                                    (s = a.target).x + s.vx - c.x - c.vx ||
                                    fa()),
                                (h = s.y + s.vy - c.y - c.vy || fa()),
                                (l *= d =
                                    (((d = Math.sqrt(l * l + h * h)) - e[v]) /
                                        d) *
                                    r *
                                    n[v]),
                                (h *= d),
                                (s.vx -= l * (p = u[v])),
                                (s.vy -= h * p),
                                (c.vx += l * (p = 1 - p)),
                                (c.vy += h * p)
                }
                function l() {
                    if (r) {
                        var a,
                            c,
                            f = r.length,
                            s = t.length,
                            l = Qu(r, o)
                        for (a = 0, i = new Array(f); a < s; ++a)
                            ((c = t[a]).index = a),
                                'object' != typeof c.source &&
                                    (c.source = wa(l, c.source)),
                                'object' != typeof c.target &&
                                    (c.target = wa(l, c.target)),
                                (i[c.source.index] =
                                    (i[c.source.index] || 0) + 1),
                                (i[c.target.index] =
                                    (i[c.target.index] || 0) + 1)
                        for (a = 0, u = new Array(s); a < s; ++a)
                            (c = t[a]),
                                (u[a] =
                                    i[c.source.index] /
                                    (i[c.source.index] + i[c.target.index]))
                        ;(n = new Array(s)), h(), (e = new Array(s)), d()
                    }
                }
                function h() {
                    if (r)
                        for (var e = 0, i = t.length; e < i; ++e)
                            n[e] = +a(t[e], e, t)
                }
                function d() {
                    if (r)
                        for (var n = 0, i = t.length; n < i; ++n)
                            e[n] = +c(t[n], n, t)
                }
                return (
                    null == t && (t = []),
                    (s.initialize = function(t) {
                        ;(r = t), l()
                    }),
                    (s.links = function(n) {
                        return arguments.length ? ((t = n), l(), s) : t
                    }),
                    (s.id = function(t) {
                        return arguments.length ? ((o = t), s) : o
                    }),
                    (s.iterations = function(t) {
                        return arguments.length ? ((f = +t), s) : f
                    }),
                    (s.strength = function(t) {
                        return arguments.length
                            ? ((a = 'function' == typeof t ? t : ca(+t)),
                              h(),
                              s)
                            : a
                    }),
                    (s.distance = function(t) {
                        return arguments.length
                            ? ((c = 'function' == typeof t ? t : ca(+t)),
                              d(),
                              s)
                            : c
                    }),
                    s
                )
            }
            function ka(t) {
                return t.x
            }
            function Aa(t) {
                return t.y
            }
            var Sa = 10,
                Na = Math.PI * (3 - Math.sqrt(5)),
                Ea = function(t) {
                    var n,
                        e = 1,
                        r = 0.001,
                        i = 1 - Math.pow(r, 1 / 300),
                        u = 0,
                        o = 0.6,
                        a = Qu(),
                        c = Or(s),
                        f = ht('tick', 'end')
                    function s() {
                        l(),
                            f.call('tick', n),
                            e < r && (c.stop(), f.call('end', n))
                    }
                    function l() {
                        var n,
                            r,
                            c = t.length
                        for (
                            e += (u - e) * i,
                                a.each(function(t) {
                                    t(e)
                                }),
                                n = 0;
                            n < c;
                            ++n
                        )
                            null == (r = t[n]).fx
                                ? (r.x += r.vx *= o)
                                : ((r.x = r.fx), (r.vx = 0)),
                                null == r.fy
                                    ? (r.y += r.vy *= o)
                                    : ((r.y = r.fy), (r.vy = 0))
                    }
                    function h() {
                        for (var n, e = 0, r = t.length; e < r; ++e) {
                            if (
                                (((n = t[e]).index = e),
                                isNaN(n.x) || isNaN(n.y))
                            ) {
                                var i = Sa * Math.sqrt(e),
                                    u = e * Na
                                ;(n.x = i * Math.cos(u)),
                                    (n.y = i * Math.sin(u))
                            }
                            ;(isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
                        }
                    }
                    function d(n) {
                        return n.initialize && n.initialize(t), n
                    }
                    return (
                        null == t && (t = []),
                        h(),
                        (n = {
                            tick: l,
                            restart: function() {
                                return c.restart(s), n
                            },
                            stop: function() {
                                return c.stop(), n
                            },
                            nodes: function(e) {
                                return arguments.length
                                    ? ((t = e), h(), a.each(d), n)
                                    : t
                            },
                            alpha: function(t) {
                                return arguments.length ? ((e = +t), n) : e
                            },
                            alphaMin: function(t) {
                                return arguments.length ? ((r = +t), n) : r
                            },
                            alphaDecay: function(t) {
                                return arguments.length ? ((i = +t), n) : +i
                            },
                            alphaTarget: function(t) {
                                return arguments.length ? ((u = +t), n) : u
                            },
                            velocityDecay: function(t) {
                                return arguments.length
                                    ? ((o = 1 - t), n)
                                    : 1 - o
                            },
                            force: function(t, e) {
                                return arguments.length > 1
                                    ? (null == e ? a.remove(t) : a.set(t, d(e)),
                                      n)
                                    : a.get(t)
                            },
                            find: function(n, e, r) {
                                var i,
                                    u,
                                    o,
                                    a,
                                    c,
                                    f = 0,
                                    s = t.length
                                for (
                                    null == r ? (r = 1 / 0) : (r *= r), f = 0;
                                    f < s;
                                    ++f
                                )
                                    (o =
                                        (i = n - (a = t[f]).x) * i +
                                        (u = e - a.y) * u) < r &&
                                        ((c = a), (r = o))
                                return c
                            },
                            on: function(t, e) {
                                return arguments.length > 1
                                    ? (f.on(t, e), n)
                                    : f.on(t)
                            },
                        })
                    )
                },
                Ta = function() {
                    var t,
                        n,
                        e,
                        r,
                        i = ca(-30),
                        u = 1,
                        o = 1 / 0,
                        a = 0.81
                    function c(r) {
                        var i,
                            u = t.length,
                            o = pa(t, ka, Aa).visitAfter(s)
                        for (e = r, i = 0; i < u; ++i) (n = t[i]), o.visit(l)
                    }
                    function f() {
                        if (t) {
                            var n,
                                e,
                                u = t.length
                            for (r = new Array(u), n = 0; n < u; ++n)
                                (e = t[n]), (r[e.index] = +i(e, n, t))
                        }
                    }
                    function s(t) {
                        var n,
                            e,
                            i,
                            u,
                            o,
                            a = 0,
                            c = 0
                        if (t.length) {
                            for (i = u = o = 0; o < 4; ++o)
                                (n = t[o]) &&
                                    (e = Math.abs(n.value)) &&
                                    ((a += n.value),
                                    (c += e),
                                    (i += e * n.x),
                                    (u += e * n.y))
                            ;(t.x = i / c), (t.y = u / c)
                        } else {
                            ;((n = t).x = n.data.x), (n.y = n.data.y)
                            do {
                                a += r[n.data.index]
                            } while ((n = n.next))
                        }
                        t.value = a
                    }
                    function l(t, i, c, f) {
                        if (!t.value) return !0
                        var s = t.x - n.x,
                            l = t.y - n.y,
                            h = f - i,
                            d = s * s + l * l
                        if ((h * h) / a < d)
                            return (
                                d < o &&
                                    (0 === s && (d += (s = fa()) * s),
                                    0 === l && (d += (l = fa()) * l),
                                    d < u && (d = Math.sqrt(u * d)),
                                    (n.vx += (s * t.value * e) / d),
                                    (n.vy += (l * t.value * e) / d)),
                                !0
                            )
                        if (!(t.length || d >= o)) {
                            ;(t.data !== n || t.next) &&
                                (0 === s && (d += (s = fa()) * s),
                                0 === l && (d += (l = fa()) * l),
                                d < u && (d = Math.sqrt(u * d)))
                            do {
                                t.data !== n &&
                                    ((h = (r[t.data.index] * e) / d),
                                    (n.vx += s * h),
                                    (n.vy += l * h))
                            } while ((t = t.next))
                        }
                    }
                    return (
                        (c.initialize = function(n) {
                            ;(t = n), f()
                        }),
                        (c.strength = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : ca(+t)),
                                  f(),
                                  c)
                                : i
                        }),
                        (c.distanceMin = function(t) {
                            return arguments.length
                                ? ((u = t * t), c)
                                : Math.sqrt(u)
                        }),
                        (c.distanceMax = function(t) {
                            return arguments.length
                                ? ((o = t * t), c)
                                : Math.sqrt(o)
                        }),
                        (c.theta = function(t) {
                            return arguments.length
                                ? ((a = t * t), c)
                                : Math.sqrt(a)
                        }),
                        c
                    )
                },
                Ca = function(t, n, e) {
                    var r,
                        i,
                        u,
                        o = ca(0.1)
                    function a(t) {
                        for (var o = 0, a = r.length; o < a; ++o) {
                            var c = r[o],
                                f = c.x - n || 1e-6,
                                s = c.y - e || 1e-6,
                                l = Math.sqrt(f * f + s * s),
                                h = ((u[o] - l) * i[o] * t) / l
                            ;(c.vx += f * h), (c.vy += s * h)
                        }
                    }
                    function c() {
                        if (r) {
                            var n,
                                e = r.length
                            for (
                                i = new Array(e), u = new Array(e), n = 0;
                                n < e;
                                ++n
                            )
                                (u[n] = +t(r[n], n, r)),
                                    (i[n] = isNaN(u[n]) ? 0 : +o(r[n], n, r))
                        }
                    }
                    return (
                        'function' != typeof t && (t = ca(+t)),
                        null == n && (n = 0),
                        null == e && (e = 0),
                        (a.initialize = function(t) {
                            ;(r = t), c()
                        }),
                        (a.strength = function(t) {
                            return arguments.length
                                ? ((o = 'function' == typeof t ? t : ca(+t)),
                                  c(),
                                  a)
                                : o
                        }),
                        (a.radius = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : ca(+n)),
                                  c(),
                                  a)
                                : t
                        }),
                        (a.x = function(t) {
                            return arguments.length ? ((n = +t), a) : n
                        }),
                        (a.y = function(t) {
                            return arguments.length ? ((e = +t), a) : e
                        }),
                        a
                    )
                },
                Pa = function(t) {
                    var n,
                        e,
                        r,
                        i = ca(0.1)
                    function u(t) {
                        for (var i, u = 0, o = n.length; u < o; ++u)
                            (i = n[u]).vx += (r[u] - i.x) * e[u] * t
                    }
                    function o() {
                        if (n) {
                            var u,
                                o = n.length
                            for (
                                e = new Array(o), r = new Array(o), u = 0;
                                u < o;
                                ++u
                            )
                                e[u] = isNaN((r[u] = +t(n[u], u, n)))
                                    ? 0
                                    : +i(n[u], u, n)
                        }
                    }
                    return (
                        'function' != typeof t && (t = ca(null == t ? 0 : +t)),
                        (u.initialize = function(t) {
                            ;(n = t), o()
                        }),
                        (u.strength = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : ca(+t)),
                                  o(),
                                  u)
                                : i
                        }),
                        (u.x = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : ca(+n)),
                                  o(),
                                  u)
                                : t
                        }),
                        u
                    )
                },
                za = function(t) {
                    var n,
                        e,
                        r,
                        i = ca(0.1)
                    function u(t) {
                        for (var i, u = 0, o = n.length; u < o; ++u)
                            (i = n[u]).vy += (r[u] - i.y) * e[u] * t
                    }
                    function o() {
                        if (n) {
                            var u,
                                o = n.length
                            for (
                                e = new Array(o), r = new Array(o), u = 0;
                                u < o;
                                ++u
                            )
                                e[u] = isNaN((r[u] = +t(n[u], u, n)))
                                    ? 0
                                    : +i(n[u], u, n)
                        }
                    }
                    return (
                        'function' != typeof t && (t = ca(null == t ? 0 : +t)),
                        (u.initialize = function(t) {
                            ;(n = t), o()
                        }),
                        (u.strength = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : ca(+t)),
                                  o(),
                                  u)
                                : i
                        }),
                        (u.y = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : ca(+n)),
                                  o(),
                                  u)
                                : t
                        }),
                        u
                    )
                },
                Ra = function(t, n) {
                    if (
                        (e = (t = n
                            ? t.toExponential(n - 1)
                            : t.toExponential()).indexOf('e')) < 0
                    )
                        return null
                    var e,
                        r = t.slice(0, e)
                    return [
                        r.length > 1 ? r[0] + r.slice(2) : r,
                        +t.slice(e + 1),
                    ]
                },
                Da = function(t) {
                    return (t = Ra(Math.abs(t))) ? t[1] : NaN
                },
                La = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
            function Oa(t) {
                return new qa(t)
            }
            function qa(t) {
                if (!(n = La.exec(t))) throw new Error('invalid format: ' + t)
                var n
                ;(this.fill = n[1] || ' '),
                    (this.align = n[2] || '>'),
                    (this.sign = n[3] || '-'),
                    (this.symbol = n[4] || ''),
                    (this.zero = !!n[5]),
                    (this.width = n[6] && +n[6]),
                    (this.comma = !!n[7]),
                    (this.precision = n[8] && +n[8].slice(1)),
                    (this.trim = !!n[9]),
                    (this.type = n[10] || '')
            }
            ;(Oa.prototype = qa.prototype),
                (qa.prototype.toString = function() {
                    return (
                        this.fill +
                        this.align +
                        this.sign +
                        this.symbol +
                        (this.zero ? '0' : '') +
                        (null == this.width
                            ? ''
                            : Math.max(1, 0 | this.width)) +
                        (this.comma ? ',' : '') +
                        (null == this.precision
                            ? ''
                            : '.' + Math.max(0, 0 | this.precision)) +
                        (this.trim ? '~' : '') +
                        this.type
                    )
                })
            var Ua,
                Ba,
                Fa,
                Ya,
                Ia = function(t) {
                    t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                        switch (t[r]) {
                            case '.':
                                i = n = r
                                break
                            case '0':
                                0 === i && (i = r), (n = r)
                                break
                            default:
                                if (i > 0) {
                                    if (!+t[r]) break t
                                    i = 0
                                }
                        }
                    return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
                },
                ja = function(t, n) {
                    var e = Ra(t, n)
                    if (!e) return t + ''
                    var r = e[0],
                        i = e[1]
                    return i < 0
                        ? '0.' + new Array(-i).join('0') + r
                        : r.length > i + 1
                        ? r.slice(0, i + 1) + '.' + r.slice(i + 1)
                        : r + new Array(i - r.length + 2).join('0')
                },
                Ha = {
                    '%': function(t, n) {
                        return (100 * t).toFixed(n)
                    },
                    b: function(t) {
                        return Math.round(t).toString(2)
                    },
                    c: function(t) {
                        return t + ''
                    },
                    d: function(t) {
                        return Math.round(t).toString(10)
                    },
                    e: function(t, n) {
                        return t.toExponential(n)
                    },
                    f: function(t, n) {
                        return t.toFixed(n)
                    },
                    g: function(t, n) {
                        return t.toPrecision(n)
                    },
                    o: function(t) {
                        return Math.round(t).toString(8)
                    },
                    p: function(t, n) {
                        return ja(100 * t, n)
                    },
                    r: ja,
                    s: function(t, n) {
                        var e = Ra(t, n)
                        if (!e) return t + ''
                        var r = e[0],
                            i = e[1],
                            u =
                                i -
                                (Ua =
                                    3 *
                                    Math.max(
                                        -8,
                                        Math.min(8, Math.floor(i / 3)),
                                    )) +
                                1,
                            o = r.length
                        return u === o
                            ? r
                            : u > o
                            ? r + new Array(u - o + 1).join('0')
                            : u > 0
                            ? r.slice(0, u) + '.' + r.slice(u)
                            : '0.' +
                              new Array(1 - u).join('0') +
                              Ra(t, Math.max(0, n + u - 1))[0]
                    },
                    X: function(t) {
                        return Math.round(t)
                            .toString(16)
                            .toUpperCase()
                    },
                    x: function(t) {
                        return Math.round(t).toString(16)
                    },
                },
                Ga = function(t) {
                    return t
                },
                Xa = [
                    'y',
                    'z',
                    'a',
                    'f',
                    'p',
                    'n',
                    'µ',
                    'm',
                    '',
                    'k',
                    'M',
                    'G',
                    'T',
                    'P',
                    'E',
                    'Z',
                    'Y',
                ],
                Va = function(t) {
                    var n,
                        e,
                        r =
                            t.grouping && t.thousands
                                ? ((n = t.grouping),
                                  (e = t.thousands),
                                  function(t, r) {
                                      for (
                                          var i = t.length,
                                              u = [],
                                              o = 0,
                                              a = n[0],
                                              c = 0;
                                          i > 0 &&
                                          a > 0 &&
                                          (c + a + 1 > r &&
                                              (a = Math.max(1, r - c)),
                                          u.push(t.substring((i -= a), i + a)),
                                          !((c += a + 1) > r));

                                      )
                                          a = n[(o = (o + 1) % n.length)]
                                      return u.reverse().join(e)
                                  })
                                : Ga,
                        i = t.currency,
                        u = t.decimal,
                        o = t.numerals
                            ? (function(t) {
                                  return function(n) {
                                      return n.replace(/[0-9]/g, function(n) {
                                          return t[+n]
                                      })
                                  }
                              })(t.numerals)
                            : Ga,
                        a = t.percent || '%'
                    function c(t) {
                        var n = (t = Oa(t)).fill,
                            e = t.align,
                            c = t.sign,
                            f = t.symbol,
                            s = t.zero,
                            l = t.width,
                            h = t.comma,
                            d = t.precision,
                            p = t.trim,
                            v = t.type
                        'n' === v
                            ? ((h = !0), (v = 'g'))
                            : Ha[v] ||
                              (null == d && (d = 12), (p = !0), (v = 'g')),
                            (s || ('0' === n && '=' === e)) &&
                                ((s = !0), (n = '0'), (e = '='))
                        var y =
                                '$' === f
                                    ? i[0]
                                    : '#' === f && /[boxX]/.test(v)
                                    ? '0' + v.toLowerCase()
                                    : '',
                            g = '$' === f ? i[1] : /[%p]/.test(v) ? a : '',
                            b = Ha[v],
                            _ = /[defgprs%]/.test(v)
                        function m(t) {
                            var i,
                                a,
                                f,
                                m = y,
                                x = g
                            if ('c' === v) (x = b(t) + x), (t = '')
                            else {
                                var w = (t = +t) < 0
                                if (
                                    ((t = b(Math.abs(t), d)),
                                    p && (t = Ia(t)),
                                    w && 0 == +t && (w = !1),
                                    (m =
                                        (w
                                            ? '(' === c
                                                ? c
                                                : '-'
                                            : '-' === c || '(' === c
                                            ? ''
                                            : c) + m),
                                    (x =
                                        ('s' === v ? Xa[8 + Ua / 3] : '') +
                                        x +
                                        (w && '(' === c ? ')' : '')),
                                    _)
                                )
                                    for (i = -1, a = t.length; ++i < a; )
                                        if (
                                            48 > (f = t.charCodeAt(i)) ||
                                            f > 57
                                        ) {
                                            ;(x =
                                                (46 === f
                                                    ? u + t.slice(i + 1)
                                                    : t.slice(i)) + x),
                                                (t = t.slice(0, i))
                                            break
                                        }
                            }
                            h && !s && (t = r(t, 1 / 0))
                            var M = m.length + t.length + x.length,
                                k = M < l ? new Array(l - M + 1).join(n) : ''
                            switch (
                                (h &&
                                    s &&
                                    ((t = r(
                                        k + t,
                                        k.length ? l - x.length : 1 / 0,
                                    )),
                                    (k = '')),
                                e)
                            ) {
                                case '<':
                                    t = m + t + x + k
                                    break
                                case '=':
                                    t = m + k + t + x
                                    break
                                case '^':
                                    t =
                                        k.slice(0, (M = k.length >> 1)) +
                                        m +
                                        t +
                                        x +
                                        k.slice(M)
                                    break
                                default:
                                    t = k + m + t + x
                            }
                            return o(t)
                        }
                        return (
                            (d =
                                null == d
                                    ? 6
                                    : /[gprs]/.test(v)
                                    ? Math.max(1, Math.min(21, d))
                                    : Math.max(0, Math.min(20, d))),
                            (m.toString = function() {
                                return t + ''
                            }),
                            m
                        )
                    }
                    return {
                        format: c,
                        formatPrefix: function(t, n) {
                            var e = c((((t = Oa(t)).type = 'f'), t)),
                                r =
                                    3 *
                                    Math.max(
                                        -8,
                                        Math.min(8, Math.floor(Da(n) / 3)),
                                    ),
                                i = Math.pow(10, -r),
                                u = Xa[8 + r / 3]
                            return function(t) {
                                return e(i * t) + u
                            }
                        },
                    }
                }
            function $a(t) {
                return (
                    (Ba = Va(t)), (Fa = Ba.format), (Ya = Ba.formatPrefix), Ba
                )
            }
            $a({
                decimal: '.',
                thousands: ',',
                grouping: [3],
                currency: ['$', ''],
            })
            var Wa = function(t) {
                    return Math.max(0, -Da(Math.abs(t)))
                },
                Za = function(t, n) {
                    return Math.max(
                        0,
                        3 * Math.max(-8, Math.min(8, Math.floor(Da(n) / 3))) -
                            Da(Math.abs(t)),
                    )
                },
                Qa = function(t, n) {
                    return (
                        (t = Math.abs(t)),
                        (n = Math.abs(n) - t),
                        Math.max(0, Da(n) - Da(t)) + 1
                    )
                },
                Ja = function() {
                    return new Ka()
                }
            function Ka() {
                this.reset()
            }
            Ka.prototype = {
                constructor: Ka,
                reset: function() {
                    this.s = this.t = 0
                },
                add: function(t) {
                    nc(tc, t, this.t),
                        nc(this, tc.s, this.s),
                        this.s ? (this.t += tc.t) : (this.s = tc.t)
                },
                valueOf: function() {
                    return this.s
                },
            }
            var tc = new Ka()
            function nc(t, n, e) {
                var r = (t.s = n + e),
                    i = r - n,
                    u = r - i
                t.t = n - u + (e - i)
            }
            var ec = 1e-6,
                rc = Math.PI,
                ic = rc / 2,
                uc = rc / 4,
                oc = 2 * rc,
                ac = 180 / rc,
                cc = rc / 180,
                fc = Math.abs,
                sc = Math.atan,
                lc = Math.atan2,
                hc = Math.cos,
                dc = Math.ceil,
                pc = Math.exp,
                vc = (Math.floor, Math.log),
                yc = Math.pow,
                gc = Math.sin,
                bc =
                    Math.sign ||
                    function(t) {
                        return t > 0 ? 1 : t < 0 ? -1 : 0
                    },
                _c = Math.sqrt,
                mc = Math.tan
            function xc(t) {
                return t > 1 ? 0 : t < -1 ? rc : Math.acos(t)
            }
            function wc(t) {
                return t > 1 ? ic : t < -1 ? -ic : Math.asin(t)
            }
            function Mc(t) {
                return (t = gc(t / 2)) * t
            }
            function kc() {}
            function Ac(t, n) {
                t && Nc.hasOwnProperty(t.type) && Nc[t.type](t, n)
            }
            var Sc = {
                    Feature: function(t, n) {
                        Ac(t.geometry, n)
                    },
                    FeatureCollection: function(t, n) {
                        for (
                            var e = t.features, r = -1, i = e.length;
                            ++r < i;

                        )
                            Ac(e[r].geometry, n)
                    },
                },
                Nc = {
                    Sphere: function(t, n) {
                        n.sphere()
                    },
                    Point: function(t, n) {
                        ;(t = t.coordinates), n.point(t[0], t[1], t[2])
                    },
                    MultiPoint: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            (t = e[r]), n.point(t[0], t[1], t[2])
                    },
                    LineString: function(t, n) {
                        Ec(t.coordinates, n, 0)
                    },
                    MultiLineString: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            Ec(e[r], n, 0)
                    },
                    Polygon: function(t, n) {
                        Tc(t.coordinates, n)
                    },
                    MultiPolygon: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            Tc(e[r], n)
                    },
                    GeometryCollection: function(t, n) {
                        for (
                            var e = t.geometries, r = -1, i = e.length;
                            ++r < i;

                        )
                            Ac(e[r], n)
                    },
                }
            function Ec(t, n, e) {
                var r,
                    i = -1,
                    u = t.length - e
                for (n.lineStart(); ++i < u; )
                    (r = t[i]), n.point(r[0], r[1], r[2])
                n.lineEnd()
            }
            function Tc(t, n) {
                var e = -1,
                    r = t.length
                for (n.polygonStart(); ++e < r; ) Ec(t[e], n, 1)
                n.polygonEnd()
            }
            var Cc,
                Pc,
                zc,
                Rc,
                Dc,
                Lc = function(t, n) {
                    t && Sc.hasOwnProperty(t.type) ? Sc[t.type](t, n) : Ac(t, n)
                },
                Oc = Ja(),
                qc = Ja(),
                Uc = {
                    point: kc,
                    lineStart: kc,
                    lineEnd: kc,
                    polygonStart: function() {
                        Oc.reset(), (Uc.lineStart = Bc), (Uc.lineEnd = Fc)
                    },
                    polygonEnd: function() {
                        var t = +Oc
                        qc.add(t < 0 ? oc + t : t),
                            (this.lineStart = this.lineEnd = this.point = kc)
                    },
                    sphere: function() {
                        qc.add(oc)
                    },
                }
            function Bc() {
                Uc.point = Yc
            }
            function Fc() {
                Ic(Cc, Pc)
            }
            function Yc(t, n) {
                ;(Uc.point = Ic),
                    (Cc = t),
                    (Pc = n),
                    (zc = t *= cc),
                    (Rc = hc((n = (n *= cc) / 2 + uc))),
                    (Dc = gc(n))
            }
            function Ic(t, n) {
                var e = (t *= cc) - zc,
                    r = e >= 0 ? 1 : -1,
                    i = r * e,
                    u = hc((n = (n *= cc) / 2 + uc)),
                    o = gc(n),
                    a = Dc * o,
                    c = Rc * u + a * hc(i),
                    f = a * r * gc(i)
                Oc.add(lc(f, c)), (zc = t), (Rc = u), (Dc = o)
            }
            var jc = function(t) {
                return qc.reset(), Lc(t, Uc), 2 * qc
            }
            function Hc(t) {
                return [lc(t[1], t[0]), wc(t[2])]
            }
            function Gc(t) {
                var n = t[0],
                    e = t[1],
                    r = hc(e)
                return [r * hc(n), r * gc(n), gc(e)]
            }
            function Xc(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
            }
            function Vc(t, n) {
                return [
                    t[1] * n[2] - t[2] * n[1],
                    t[2] * n[0] - t[0] * n[2],
                    t[0] * n[1] - t[1] * n[0],
                ]
            }
            function $c(t, n) {
                ;(t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2])
            }
            function Wc(t, n) {
                return [t[0] * n, t[1] * n, t[2] * n]
            }
            function Zc(t) {
                var n = _c(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
                ;(t[0] /= n), (t[1] /= n), (t[2] /= n)
            }
            var Qc,
                Jc,
                Kc,
                tf,
                nf,
                ef,
                rf,
                uf,
                of,
                af,
                cf = Ja(),
                ff = {
                    point: sf,
                    lineStart: hf,
                    lineEnd: df,
                    polygonStart: function() {
                        ;(ff.point = pf),
                            (ff.lineStart = vf),
                            (ff.lineEnd = yf),
                            cf.reset(),
                            Uc.polygonStart()
                    },
                    polygonEnd: function() {
                        Uc.polygonEnd(),
                            (ff.point = sf),
                            (ff.lineStart = hf),
                            (ff.lineEnd = df),
                            Oc < 0
                                ? ((Qc = -(Kc = 180)), (Jc = -(tf = 90)))
                                : cf > ec
                                ? (tf = 90)
                                : cf < -ec && (Jc = -90),
                            (af[0] = Qc),
                            (af[1] = Kc)
                    },
                }
            function sf(t, n) {
                of.push((af = [(Qc = t), (Kc = t)])),
                    n < Jc && (Jc = n),
                    n > tf && (tf = n)
            }
            function lf(t, n) {
                var e = Gc([t * cc, n * cc])
                if (uf) {
                    var r = Vc(uf, e),
                        i = Vc([r[1], -r[0], 0], r)
                    Zc(i), (i = Hc(i))
                    var u,
                        o = t - nf,
                        a = o > 0 ? 1 : -1,
                        c = i[0] * ac * a,
                        f = fc(o) > 180
                    f ^ (a * nf < c && c < a * t)
                        ? (u = i[1] * ac) > tf && (tf = u)
                        : f ^
                          (a * nf < (c = ((c + 360) % 360) - 180) && c < a * t)
                        ? (u = -i[1] * ac) < Jc && (Jc = u)
                        : (n < Jc && (Jc = n), n > tf && (tf = n)),
                        f
                            ? t < nf
                                ? gf(Qc, t) > gf(Qc, Kc) && (Kc = t)
                                : gf(t, Kc) > gf(Qc, Kc) && (Qc = t)
                            : Kc >= Qc
                            ? (t < Qc && (Qc = t), t > Kc && (Kc = t))
                            : t > nf
                            ? gf(Qc, t) > gf(Qc, Kc) && (Kc = t)
                            : gf(t, Kc) > gf(Qc, Kc) && (Qc = t)
                } else of.push((af = [(Qc = t), (Kc = t)]))
                n < Jc && (Jc = n), n > tf && (tf = n), (uf = e), (nf = t)
            }
            function hf() {
                ff.point = lf
            }
            function df() {
                ;(af[0] = Qc), (af[1] = Kc), (ff.point = sf), (uf = null)
            }
            function pf(t, n) {
                if (uf) {
                    var e = t - nf
                    cf.add(fc(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
                } else (ef = t), (rf = n)
                Uc.point(t, n), lf(t, n)
            }
            function vf() {
                Uc.lineStart()
            }
            function yf() {
                pf(ef, rf),
                    Uc.lineEnd(),
                    fc(cf) > ec && (Qc = -(Kc = 180)),
                    (af[0] = Qc),
                    (af[1] = Kc),
                    (uf = null)
            }
            function gf(t, n) {
                return (n -= t) < 0 ? n + 360 : n
            }
            function bf(t, n) {
                return t[0] - n[0]
            }
            function _f(t, n) {
                return t[0] <= t[1]
                    ? t[0] <= n && n <= t[1]
                    : n < t[0] || t[1] < n
            }
            var mf,
                xf,
                wf,
                Mf,
                kf,
                Af,
                Sf,
                Nf,
                Ef,
                Tf,
                Cf,
                Pf,
                zf,
                Rf,
                Df,
                Lf,
                Of = function(t) {
                    var n, e, r, i, u, o, a
                    if (
                        ((tf = Kc = -(Qc = Jc = 1 / 0)),
                        (of = []),
                        Lc(t, ff),
                        (e = of.length))
                    ) {
                        for (of.sort(bf), n = 1, u = [(r = of[0])]; n < e; ++n)
                            _f(r, (i = of[n])[0]) || _f(r, i[1])
                                ? (gf(r[0], i[1]) > gf(r[0], r[1]) &&
                                      (r[1] = i[1]),
                                  gf(i[0], r[1]) > gf(r[0], r[1]) &&
                                      (r[0] = i[0]))
                                : u.push((r = i))
                        for (
                            o = -1 / 0, n = 0, r = u[(e = u.length - 1)];
                            n <= e;
                            r = i, ++n
                        )
                            (i = u[n]),
                                (a = gf(r[1], i[0])) > o &&
                                    ((o = a), (Qc = i[0]), (Kc = r[1]))
                    }
                    return (
                        (of = af = null),
                        Qc === 1 / 0 || Jc === 1 / 0
                            ? [[NaN, NaN], [NaN, NaN]]
                            : [[Qc, Jc], [Kc, tf]]
                    )
                },
                qf = {
                    sphere: kc,
                    point: Uf,
                    lineStart: Ff,
                    lineEnd: jf,
                    polygonStart: function() {
                        ;(qf.lineStart = Hf), (qf.lineEnd = Gf)
                    },
                    polygonEnd: function() {
                        ;(qf.lineStart = Ff), (qf.lineEnd = jf)
                    },
                }
            function Uf(t, n) {
                t *= cc
                var e = hc((n *= cc))
                Bf(e * hc(t), e * gc(t), gc(n))
            }
            function Bf(t, n, e) {
                ;(wf += (t - wf) / ++mf),
                    (Mf += (n - Mf) / mf),
                    (kf += (e - kf) / mf)
            }
            function Ff() {
                qf.point = Yf
            }
            function Yf(t, n) {
                t *= cc
                var e = hc((n *= cc))
                ;(Rf = e * hc(t)),
                    (Df = e * gc(t)),
                    (Lf = gc(n)),
                    (qf.point = If),
                    Bf(Rf, Df, Lf)
            }
            function If(t, n) {
                t *= cc
                var e = hc((n *= cc)),
                    r = e * hc(t),
                    i = e * gc(t),
                    u = gc(n),
                    o = lc(
                        _c(
                            (o = Df * u - Lf * i) * o +
                                (o = Lf * r - Rf * u) * o +
                                (o = Rf * i - Df * r) * o,
                        ),
                        Rf * r + Df * i + Lf * u,
                    )
                ;(xf += o),
                    (Af += o * (Rf + (Rf = r))),
                    (Sf += o * (Df + (Df = i))),
                    (Nf += o * (Lf + (Lf = u))),
                    Bf(Rf, Df, Lf)
            }
            function jf() {
                qf.point = Uf
            }
            function Hf() {
                qf.point = Xf
            }
            function Gf() {
                Vf(Pf, zf), (qf.point = Uf)
            }
            function Xf(t, n) {
                ;(Pf = t), (zf = n), (t *= cc), (n *= cc), (qf.point = Vf)
                var e = hc(n)
                ;(Rf = e * hc(t)),
                    (Df = e * gc(t)),
                    (Lf = gc(n)),
                    Bf(Rf, Df, Lf)
            }
            function Vf(t, n) {
                t *= cc
                var e = hc((n *= cc)),
                    r = e * hc(t),
                    i = e * gc(t),
                    u = gc(n),
                    o = Df * u - Lf * i,
                    a = Lf * r - Rf * u,
                    c = Rf * i - Df * r,
                    f = _c(o * o + a * a + c * c),
                    s = wc(f),
                    l = f && -s / f
                ;(Ef += l * o),
                    (Tf += l * a),
                    (Cf += l * c),
                    (xf += s),
                    (Af += s * (Rf + (Rf = r))),
                    (Sf += s * (Df + (Df = i))),
                    (Nf += s * (Lf + (Lf = u))),
                    Bf(Rf, Df, Lf)
            }
            var $f = function(t) {
                    ;(mf = xf = wf = Mf = kf = Af = Sf = Nf = Ef = Tf = Cf = 0),
                        Lc(t, qf)
                    var n = Ef,
                        e = Tf,
                        r = Cf,
                        i = n * n + e * e + r * r
                    return i < 1e-12 &&
                        ((n = Af),
                        (e = Sf),
                        (r = Nf),
                        xf < ec && ((n = wf), (e = Mf), (r = kf)),
                        (i = n * n + e * e + r * r) < 1e-12)
                        ? [NaN, NaN]
                        : [lc(e, n) * ac, wc(r / _c(i)) * ac]
                },
                Wf = function(t) {
                    return function() {
                        return t
                    }
                },
                Zf = function(t, n) {
                    function e(e, r) {
                        return (e = t(e, r)), n(e[0], e[1])
                    }
                    return (
                        t.invert &&
                            n.invert &&
                            (e.invert = function(e, r) {
                                return (
                                    (e = n.invert(e, r)) && t.invert(e[0], e[1])
                                )
                            }),
                        e
                    )
                }
            function Qf(t, n) {
                return [t > rc ? t - oc : t < -rc ? t + oc : t, n]
            }
            function Jf(t, n, e) {
                return (t %= oc)
                    ? n || e
                        ? Zf(ts(t), ns(n, e))
                        : ts(t)
                    : n || e
                    ? ns(n, e)
                    : Qf
            }
            function Kf(t) {
                return function(n, e) {
                    return [(n += t) > rc ? n - oc : n < -rc ? n + oc : n, e]
                }
            }
            function ts(t) {
                var n = Kf(t)
                return (n.invert = Kf(-t)), n
            }
            function ns(t, n) {
                var e = hc(t),
                    r = gc(t),
                    i = hc(n),
                    u = gc(n)
                function o(t, n) {
                    var o = hc(n),
                        a = hc(t) * o,
                        c = gc(t) * o,
                        f = gc(n),
                        s = f * e + a * r
                    return [lc(c * i - s * u, a * e - f * r), wc(s * i + c * u)]
                }
                return (
                    (o.invert = function(t, n) {
                        var o = hc(n),
                            a = hc(t) * o,
                            c = gc(t) * o,
                            f = gc(n),
                            s = f * i - c * u
                        return [
                            lc(c * i + f * u, a * e + s * r),
                            wc(s * e - a * r),
                        ]
                    }),
                    o
                )
            }
            Qf.invert = Qf
            var es = function(t) {
                function n(n) {
                    return (
                        ((n = t(n[0] * cc, n[1] * cc))[0] *= ac),
                        (n[1] *= ac),
                        n
                    )
                }
                return (
                    (t = Jf(
                        t[0] * cc,
                        t[1] * cc,
                        t.length > 2 ? t[2] * cc : 0,
                    )),
                    (n.invert = function(n) {
                        return (
                            ((n = t.invert(n[0] * cc, n[1] * cc))[0] *= ac),
                            (n[1] *= ac),
                            n
                        )
                    }),
                    n
                )
            }
            function rs(t, n, e, r, i, u) {
                if (e) {
                    var o = hc(n),
                        a = gc(n),
                        c = r * e
                    null == i
                        ? ((i = n + r * oc), (u = n - c / 2))
                        : ((i = is(o, i)),
                          (u = is(o, u)),
                          (r > 0 ? i < u : i > u) && (i += r * oc))
                    for (var f, s = i; r > 0 ? s > u : s < u; s -= c)
                        (f = Hc([o, -a * hc(s), -a * gc(s)])),
                            t.point(f[0], f[1])
                }
            }
            function is(t, n) {
                ;((n = Gc(n))[0] -= t), Zc(n)
                var e = xc(-n[1])
                return ((-n[2] < 0 ? -e : e) + oc - ec) % oc
            }
            var us = function() {
                    var t,
                        n,
                        e = Wf([0, 0]),
                        r = Wf(90),
                        i = Wf(6),
                        u = {
                            point: function(e, r) {
                                t.push((e = n(e, r))),
                                    (e[0] *= ac),
                                    (e[1] *= ac)
                            },
                        }
                    function o() {
                        var o = e.apply(this, arguments),
                            a = r.apply(this, arguments) * cc,
                            c = i.apply(this, arguments) * cc
                        return (
                            (t = []),
                            (n = Jf(-o[0] * cc, -o[1] * cc, 0).invert),
                            rs(u, a, c, 1),
                            (o = { type: 'Polygon', coordinates: [t] }),
                            (t = n = null),
                            o
                        )
                    }
                    return (
                        (o.center = function(t) {
                            return arguments.length
                                ? ((e =
                                      'function' == typeof t
                                          ? t
                                          : Wf([+t[0], +t[1]])),
                                  o)
                                : e
                        }),
                        (o.radius = function(t) {
                            return arguments.length
                                ? ((r = 'function' == typeof t ? t : Wf(+t)), o)
                                : r
                        }),
                        (o.precision = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : Wf(+t)), o)
                                : i
                        }),
                        o
                    )
                },
                os = function() {
                    var t,
                        n = []
                    return {
                        point: function(n, e) {
                            t.push([n, e])
                        },
                        lineStart: function() {
                            n.push((t = []))
                        },
                        lineEnd: kc,
                        rejoin: function() {
                            n.length > 1 && n.push(n.pop().concat(n.shift()))
                        },
                        result: function() {
                            var e = n
                            return (n = []), (t = null), e
                        },
                    }
                },
                as = function(t, n) {
                    return fc(t[0] - n[0]) < ec && fc(t[1] - n[1]) < ec
                }
            function cs(t, n, e, r) {
                ;(this.x = t),
                    (this.z = n),
                    (this.o = e),
                    (this.e = r),
                    (this.v = !1),
                    (this.n = this.p = null)
            }
            var fs = function(t, n, e, r, i) {
                var u,
                    o,
                    a = [],
                    c = []
                if (
                    (t.forEach(function(t) {
                        if (!((n = t.length - 1) <= 0)) {
                            var n,
                                e,
                                r = t[0],
                                o = t[n]
                            if (as(r, o)) {
                                for (i.lineStart(), u = 0; u < n; ++u)
                                    i.point((r = t[u])[0], r[1])
                                i.lineEnd()
                            } else
                                a.push((e = new cs(r, t, null, !0))),
                                    c.push((e.o = new cs(r, null, e, !1))),
                                    a.push((e = new cs(o, t, null, !1))),
                                    c.push((e.o = new cs(o, null, e, !0)))
                        }
                    }),
                    a.length)
                ) {
                    for (
                        c.sort(n), ss(a), ss(c), u = 0, o = c.length;
                        u < o;
                        ++u
                    )
                        c[u].e = e = !e
                    for (var f, s, l = a[0]; ; ) {
                        for (var h = l, d = !0; h.v; )
                            if ((h = h.n) === l) return
                        ;(f = h.z), i.lineStart()
                        do {
                            if (((h.v = h.o.v = !0), h.e)) {
                                if (d)
                                    for (u = 0, o = f.length; u < o; ++u)
                                        i.point((s = f[u])[0], s[1])
                                else r(h.x, h.n.x, 1, i)
                                h = h.n
                            } else {
                                if (d)
                                    for (
                                        f = h.p.z, u = f.length - 1;
                                        u >= 0;
                                        --u
                                    )
                                        i.point((s = f[u])[0], s[1])
                                else r(h.x, h.p.x, -1, i)
                                h = h.p
                            }
                            ;(f = (h = h.o).z), (d = !d)
                        } while (!h.v)
                        i.lineEnd()
                    }
                }
            }
            function ss(t) {
                if ((n = t.length)) {
                    for (var n, e, r = 0, i = t[0]; ++r < n; )
                        (i.n = e = t[r]), (e.p = i), (i = e)
                    ;(i.n = e = t[0]), (e.p = i)
                }
            }
            var ls = Ja(),
                hs = function(t, n) {
                    var e = n[0],
                        r = n[1],
                        i = gc(r),
                        u = [gc(e), -hc(e), 0],
                        o = 0,
                        a = 0
                    ls.reset(),
                        1 === i ? (r = ic + ec) : -1 === i && (r = -ic - ec)
                    for (var c = 0, f = t.length; c < f; ++c)
                        if ((l = (s = t[c]).length))
                            for (
                                var s,
                                    l,
                                    h = s[l - 1],
                                    d = h[0],
                                    p = h[1] / 2 + uc,
                                    v = gc(p),
                                    y = hc(p),
                                    g = 0;
                                g < l;
                                ++g, d = _, v = x, y = w, h = b
                            ) {
                                var b = s[g],
                                    _ = b[0],
                                    m = b[1] / 2 + uc,
                                    x = gc(m),
                                    w = hc(m),
                                    M = _ - d,
                                    k = M >= 0 ? 1 : -1,
                                    A = k * M,
                                    S = A > rc,
                                    N = v * x
                                if (
                                    (ls.add(
                                        lc(N * k * gc(A), y * w + N * hc(A)),
                                    ),
                                    (o += S ? M + k * oc : M),
                                    S ^ (d >= e) ^ (_ >= e))
                                ) {
                                    var E = Vc(Gc(h), Gc(b))
                                    Zc(E)
                                    var T = Vc(u, E)
                                    Zc(T)
                                    var C = (S ^ (M >= 0) ? -1 : 1) * wc(T[2])
                                    ;(r > C || (r === C && (E[0] || E[1]))) &&
                                        (a += S ^ (M >= 0) ? 1 : -1)
                                }
                            }
                    return (o < -ec || (o < ec && ls < -ec)) ^ (1 & a)
                },
                ds = function(t, n, e, r) {
                    return function(i) {
                        var u,
                            o,
                            a,
                            c = n(i),
                            f = os(),
                            s = n(f),
                            l = !1,
                            h = {
                                point: d,
                                lineStart: v,
                                lineEnd: y,
                                polygonStart: function() {
                                    ;(h.point = g),
                                        (h.lineStart = b),
                                        (h.lineEnd = _),
                                        (o = []),
                                        (u = [])
                                },
                                polygonEnd: function() {
                                    ;(h.point = d),
                                        (h.lineStart = v),
                                        (h.lineEnd = y),
                                        (o = q(o))
                                    var t = hs(u, r)
                                    o.length
                                        ? (l || (i.polygonStart(), (l = !0)),
                                          fs(o, vs, t, e, i))
                                        : t &&
                                          (l || (i.polygonStart(), (l = !0)),
                                          i.lineStart(),
                                          e(null, null, 1, i),
                                          i.lineEnd()),
                                        l && (i.polygonEnd(), (l = !1)),
                                        (o = u = null)
                                },
                                sphere: function() {
                                    i.polygonStart(),
                                        i.lineStart(),
                                        e(null, null, 1, i),
                                        i.lineEnd(),
                                        i.polygonEnd()
                                },
                            }
                        function d(n, e) {
                            t(n, e) && i.point(n, e)
                        }
                        function p(t, n) {
                            c.point(t, n)
                        }
                        function v() {
                            ;(h.point = p), c.lineStart()
                        }
                        function y() {
                            ;(h.point = d), c.lineEnd()
                        }
                        function g(t, n) {
                            a.push([t, n]), s.point(t, n)
                        }
                        function b() {
                            s.lineStart(), (a = [])
                        }
                        function _() {
                            g(a[0][0], a[0][1]), s.lineEnd()
                            var t,
                                n,
                                e,
                                r,
                                c = s.clean(),
                                h = f.result(),
                                d = h.length
                            if ((a.pop(), u.push(a), (a = null), d))
                                if (1 & c) {
                                    if ((n = (e = h[0]).length - 1) > 0) {
                                        for (
                                            l || (i.polygonStart(), (l = !0)),
                                                i.lineStart(),
                                                t = 0;
                                            t < n;
                                            ++t
                                        )
                                            i.point((r = e[t])[0], r[1])
                                        i.lineEnd()
                                    }
                                } else
                                    d > 1 &&
                                        2 & c &&
                                        h.push(h.pop().concat(h.shift())),
                                        o.push(h.filter(ps))
                        }
                        return h
                    }
                }
            function ps(t) {
                return t.length > 1
            }
            function vs(t, n) {
                return (
                    ((t = t.x)[0] < 0 ? t[1] - ic - ec : ic - t[1]) -
                    ((n = n.x)[0] < 0 ? n[1] - ic - ec : ic - n[1])
                )
            }
            var ys = ds(
                function() {
                    return !0
                },
                function(t) {
                    var n,
                        e = NaN,
                        r = NaN,
                        i = NaN
                    return {
                        lineStart: function() {
                            t.lineStart(), (n = 1)
                        },
                        point: function(u, o) {
                            var a = u > 0 ? rc : -rc,
                                c = fc(u - e)
                            fc(c - rc) < ec
                                ? (t.point(e, (r = (r + o) / 2 > 0 ? ic : -ic)),
                                  t.point(i, r),
                                  t.lineEnd(),
                                  t.lineStart(),
                                  t.point(a, r),
                                  t.point(u, r),
                                  (n = 0))
                                : i !== a &&
                                  c >= rc &&
                                  (fc(e - i) < ec && (e -= i * ec),
                                  fc(u - a) < ec && (u -= a * ec),
                                  (r = (function(t, n, e, r) {
                                      var i,
                                          u,
                                          o = gc(t - e)
                                      return fc(o) > ec
                                          ? sc(
                                                (gc(n) * (u = hc(r)) * gc(e) -
                                                    gc(r) *
                                                        (i = hc(n)) *
                                                        gc(t)) /
                                                    (i * u * o),
                                            )
                                          : (n + r) / 2
                                  })(e, r, u, o)),
                                  t.point(i, r),
                                  t.lineEnd(),
                                  t.lineStart(),
                                  t.point(a, r),
                                  (n = 0)),
                                t.point((e = u), (r = o)),
                                (i = a)
                        },
                        lineEnd: function() {
                            t.lineEnd(), (e = r = NaN)
                        },
                        clean: function() {
                            return 2 - n
                        },
                    }
                },
                function(t, n, e, r) {
                    var i
                    if (null == t)
                        (i = e * ic),
                            r.point(-rc, i),
                            r.point(0, i),
                            r.point(rc, i),
                            r.point(rc, 0),
                            r.point(rc, -i),
                            r.point(0, -i),
                            r.point(-rc, -i),
                            r.point(-rc, 0),
                            r.point(-rc, i)
                    else if (fc(t[0] - n[0]) > ec) {
                        var u = t[0] < n[0] ? rc : -rc
                        ;(i = (e * u) / 2),
                            r.point(-u, i),
                            r.point(0, i),
                            r.point(u, i)
                    } else r.point(n[0], n[1])
                },
                [-rc, -ic],
            )
            var gs = function(t) {
                    var n = hc(t),
                        e = 6 * cc,
                        r = n > 0,
                        i = fc(n) > ec
                    function u(t, e) {
                        return hc(t) * hc(e) > n
                    }
                    function o(t, e, r) {
                        var i = [1, 0, 0],
                            u = Vc(Gc(t), Gc(e)),
                            o = Xc(u, u),
                            a = u[0],
                            c = o - a * a
                        if (!c) return !r && t
                        var f = (n * o) / c,
                            s = (-n * a) / c,
                            l = Vc(i, u),
                            h = Wc(i, f)
                        $c(h, Wc(u, s))
                        var d = l,
                            p = Xc(h, d),
                            v = Xc(d, d),
                            y = p * p - v * (Xc(h, h) - 1)
                        if (!(y < 0)) {
                            var g = _c(y),
                                b = Wc(d, (-p - g) / v)
                            if (($c(b, h), (b = Hc(b)), !r)) return b
                            var _,
                                m = t[0],
                                x = e[0],
                                w = t[1],
                                M = e[1]
                            x < m && ((_ = m), (m = x), (x = _))
                            var k = x - m,
                                A = fc(k - rc) < ec
                            if (
                                (!A && M < w && ((_ = w), (w = M), (M = _)),
                                A || k < ec
                                    ? A
                                        ? (w + M > 0) ^
                                          (b[1] < (fc(b[0] - m) < ec ? w : M))
                                        : w <= b[1] && b[1] <= M
                                    : (k > rc) ^ (m <= b[0] && b[0] <= x))
                            ) {
                                var S = Wc(d, (-p + g) / v)
                                return $c(S, h), [b, Hc(S)]
                            }
                        }
                    }
                    function a(n, e) {
                        var i = r ? t : rc - t,
                            u = 0
                        return (
                            n < -i ? (u |= 1) : n > i && (u |= 2),
                            e < -i ? (u |= 4) : e > i && (u |= 8),
                            u
                        )
                    }
                    return ds(
                        u,
                        function(t) {
                            var n, e, c, f, s
                            return {
                                lineStart: function() {
                                    ;(f = c = !1), (s = 1)
                                },
                                point: function(l, h) {
                                    var d,
                                        p = [l, h],
                                        v = u(l, h),
                                        y = r
                                            ? v
                                                ? 0
                                                : a(l, h)
                                            : v
                                            ? a(l + (l < 0 ? rc : -rc), h)
                                            : 0
                                    if (
                                        (!n && (f = c = v) && t.lineStart(),
                                        v !== c &&
                                            (!(d = o(n, p)) ||
                                                as(n, d) ||
                                                as(p, d)) &&
                                            ((p[0] += ec),
                                            (p[1] += ec),
                                            (v = u(p[0], p[1]))),
                                        v !== c)
                                    )
                                        (s = 0),
                                            v
                                                ? (t.lineStart(),
                                                  (d = o(p, n)),
                                                  t.point(d[0], d[1]))
                                                : ((d = o(n, p)),
                                                  t.point(d[0], d[1]),
                                                  t.lineEnd()),
                                            (n = d)
                                    else if (i && n && r ^ v) {
                                        var g
                                        y & e ||
                                            !(g = o(p, n, !0)) ||
                                            ((s = 0),
                                            r
                                                ? (t.lineStart(),
                                                  t.point(g[0][0], g[0][1]),
                                                  t.point(g[1][0], g[1][1]),
                                                  t.lineEnd())
                                                : (t.point(g[1][0], g[1][1]),
                                                  t.lineEnd(),
                                                  t.lineStart(),
                                                  t.point(g[0][0], g[0][1])))
                                    }
                                    !v ||
                                        (n && as(n, p)) ||
                                        t.point(p[0], p[1]),
                                        (n = p),
                                        (c = v),
                                        (e = y)
                                },
                                lineEnd: function() {
                                    c && t.lineEnd(), (n = null)
                                },
                                clean: function() {
                                    return s | ((f && c) << 1)
                                },
                            }
                        },
                        function(n, r, i, u) {
                            rs(u, t, e, i, n, r)
                        },
                        r ? [0, -t] : [-rc, t - rc],
                    )
                },
                bs = function(t, n, e, r, i, u) {
                    var o,
                        a = t[0],
                        c = t[1],
                        f = 0,
                        s = 1,
                        l = n[0] - a,
                        h = n[1] - c
                    if (((o = e - a), l || !(o > 0))) {
                        if (((o /= l), l < 0)) {
                            if (o < f) return
                            o < s && (s = o)
                        } else if (l > 0) {
                            if (o > s) return
                            o > f && (f = o)
                        }
                        if (((o = i - a), l || !(o < 0))) {
                            if (((o /= l), l < 0)) {
                                if (o > s) return
                                o > f && (f = o)
                            } else if (l > 0) {
                                if (o < f) return
                                o < s && (s = o)
                            }
                            if (((o = r - c), h || !(o > 0))) {
                                if (((o /= h), h < 0)) {
                                    if (o < f) return
                                    o < s && (s = o)
                                } else if (h > 0) {
                                    if (o > s) return
                                    o > f && (f = o)
                                }
                                if (((o = u - c), h || !(o < 0))) {
                                    if (((o /= h), h < 0)) {
                                        if (o > s) return
                                        o > f && (f = o)
                                    } else if (h > 0) {
                                        if (o < f) return
                                        o < s && (s = o)
                                    }
                                    return (
                                        f > 0 &&
                                            ((t[0] = a + f * l),
                                            (t[1] = c + f * h)),
                                        s < 1 &&
                                            ((n[0] = a + s * l),
                                            (n[1] = c + s * h)),
                                        !0
                                    )
                                }
                            }
                        }
                    }
                },
                _s = 1e9,
                ms = -_s
            function xs(t, n, e, r) {
                function i(i, u) {
                    return t <= i && i <= e && n <= u && u <= r
                }
                function u(i, u, a, f) {
                    var s = 0,
                        l = 0
                    if (
                        null == i ||
                        (s = o(i, a)) !== (l = o(u, a)) ||
                        (c(i, u) < 0) ^ (a > 0)
                    )
                        do {
                            f.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
                        } while ((s = (s + a + 4) % 4) !== l)
                    else f.point(u[0], u[1])
                }
                function o(r, i) {
                    return fc(r[0] - t) < ec
                        ? i > 0
                            ? 0
                            : 3
                        : fc(r[0] - e) < ec
                        ? i > 0
                            ? 2
                            : 1
                        : fc(r[1] - n) < ec
                        ? i > 0
                            ? 1
                            : 0
                        : i > 0
                        ? 3
                        : 2
                }
                function a(t, n) {
                    return c(t.x, n.x)
                }
                function c(t, n) {
                    var e = o(t, 1),
                        r = o(n, 1)
                    return e !== r
                        ? e - r
                        : 0 === e
                        ? n[1] - t[1]
                        : 1 === e
                        ? t[0] - n[0]
                        : 2 === e
                        ? t[1] - n[1]
                        : n[0] - t[0]
                }
                return function(o) {
                    var c,
                        f,
                        s,
                        l,
                        h,
                        d,
                        p,
                        v,
                        y,
                        g,
                        b,
                        _ = o,
                        m = os(),
                        x = {
                            point: w,
                            lineStart: function() {
                                ;(x.point = M), f && f.push((s = []))
                                ;(g = !0), (y = !1), (p = v = NaN)
                            },
                            lineEnd: function() {
                                c &&
                                    (M(l, h),
                                    d && y && m.rejoin(),
                                    c.push(m.result()))
                                ;(x.point = w), y && _.lineEnd()
                            },
                            polygonStart: function() {
                                ;(_ = m), (c = []), (f = []), (b = !0)
                            },
                            polygonEnd: function() {
                                var n = (function() {
                                        for (
                                            var n = 0, e = 0, i = f.length;
                                            e < i;
                                            ++e
                                        )
                                            for (
                                                var u,
                                                    o,
                                                    a = f[e],
                                                    c = 1,
                                                    s = a.length,
                                                    l = a[0],
                                                    h = l[0],
                                                    d = l[1];
                                                c < s;
                                                ++c
                                            )
                                                (u = h),
                                                    (o = d),
                                                    (l = a[c]),
                                                    (h = l[0]),
                                                    (d = l[1]),
                                                    o <= r
                                                        ? d > r &&
                                                          (h - u) * (r - o) >
                                                              (d - o) *
                                                                  (t - u) &&
                                                          ++n
                                                        : d <= r &&
                                                          (h - u) * (r - o) <
                                                              (d - o) *
                                                                  (t - u) &&
                                                          --n
                                        return n
                                    })(),
                                    e = b && n,
                                    i = (c = q(c)).length
                                ;(e || i) &&
                                    (o.polygonStart(),
                                    e &&
                                        (o.lineStart(),
                                        u(null, null, 1, o),
                                        o.lineEnd()),
                                    i && fs(c, a, n, u, o),
                                    o.polygonEnd())
                                ;(_ = o), (c = f = s = null)
                            },
                        }
                    function w(t, n) {
                        i(t, n) && _.point(t, n)
                    }
                    function M(u, o) {
                        var a = i(u, o)
                        if ((f && s.push([u, o]), g))
                            (l = u),
                                (h = o),
                                (d = a),
                                (g = !1),
                                a && (_.lineStart(), _.point(u, o))
                        else if (a && y) _.point(u, o)
                        else {
                            var c = [
                                    (p = Math.max(ms, Math.min(_s, p))),
                                    (v = Math.max(ms, Math.min(_s, v))),
                                ],
                                m = [
                                    (u = Math.max(ms, Math.min(_s, u))),
                                    (o = Math.max(ms, Math.min(_s, o))),
                                ]
                            bs(c, m, t, n, e, r)
                                ? (y || (_.lineStart(), _.point(c[0], c[1])),
                                  _.point(m[0], m[1]),
                                  a || _.lineEnd(),
                                  (b = !1))
                                : a && (_.lineStart(), _.point(u, o), (b = !1))
                        }
                        ;(p = u), (v = o), (y = a)
                    }
                    return x
                }
            }
            var ws,
                Ms,
                ks,
                As = function() {
                    var t,
                        n,
                        e,
                        r = 0,
                        i = 0,
                        u = 960,
                        o = 500
                    return (e = {
                        stream: function(e) {
                            return t && n === e
                                ? t
                                : (t = xs(r, i, u, o)((n = e)))
                        },
                        extent: function(a) {
                            return arguments.length
                                ? ((r = +a[0][0]),
                                  (i = +a[0][1]),
                                  (u = +a[1][0]),
                                  (o = +a[1][1]),
                                  (t = n = null),
                                  e)
                                : [[r, i], [u, o]]
                        },
                    })
                },
                Ss = Ja(),
                Ns = {
                    sphere: kc,
                    point: kc,
                    lineStart: function() {
                        ;(Ns.point = Ts), (Ns.lineEnd = Es)
                    },
                    lineEnd: kc,
                    polygonStart: kc,
                    polygonEnd: kc,
                }
            function Es() {
                Ns.point = Ns.lineEnd = kc
            }
            function Ts(t, n) {
                ;(ws = t *= cc),
                    (Ms = gc((n *= cc))),
                    (ks = hc(n)),
                    (Ns.point = Cs)
            }
            function Cs(t, n) {
                t *= cc
                var e = gc((n *= cc)),
                    r = hc(n),
                    i = fc(t - ws),
                    u = hc(i),
                    o = r * gc(i),
                    a = ks * e - Ms * r * u,
                    c = Ms * e + ks * r * u
                Ss.add(lc(_c(o * o + a * a), c)), (ws = t), (Ms = e), (ks = r)
            }
            var Ps = function(t) {
                    return Ss.reset(), Lc(t, Ns), +Ss
                },
                zs = [null, null],
                Rs = { type: 'LineString', coordinates: zs },
                Ds = function(t, n) {
                    return (zs[0] = t), (zs[1] = n), Ps(Rs)
                },
                Ls = {
                    Feature: function(t, n) {
                        return qs(t.geometry, n)
                    },
                    FeatureCollection: function(t, n) {
                        for (
                            var e = t.features, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (qs(e[r].geometry, n)) return !0
                        return !1
                    },
                },
                Os = {
                    Sphere: function() {
                        return !0
                    },
                    Point: function(t, n) {
                        return Us(t.coordinates, n)
                    },
                    MultiPoint: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (Us(e[r], n)) return !0
                        return !1
                    },
                    LineString: function(t, n) {
                        return Bs(t.coordinates, n)
                    },
                    MultiLineString: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (Bs(e[r], n)) return !0
                        return !1
                    },
                    Polygon: function(t, n) {
                        return Fs(t.coordinates, n)
                    },
                    MultiPolygon: function(t, n) {
                        for (
                            var e = t.coordinates, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (Fs(e[r], n)) return !0
                        return !1
                    },
                    GeometryCollection: function(t, n) {
                        for (
                            var e = t.geometries, r = -1, i = e.length;
                            ++r < i;

                        )
                            if (qs(e[r], n)) return !0
                        return !1
                    },
                }
            function qs(t, n) {
                return !(!t || !Os.hasOwnProperty(t.type)) && Os[t.type](t, n)
            }
            function Us(t, n) {
                return 0 === Ds(t, n)
            }
            function Bs(t, n) {
                var e = Ds(t[0], t[1])
                return Ds(t[0], n) + Ds(n, t[1]) <= e + ec
            }
            function Fs(t, n) {
                return !!hs(t.map(Ys), Is(n))
            }
            function Ys(t) {
                return (t = t.map(Is)).pop(), t
            }
            function Is(t) {
                return [t[0] * cc, t[1] * cc]
            }
            var js = function(t, n) {
                return (t && Ls.hasOwnProperty(t.type) ? Ls[t.type] : qs)(t, n)
            }
            function Hs(t, n, e) {
                var r = w(t, n - ec, e).concat(n)
                return function(t) {
                    return r.map(function(n) {
                        return [t, n]
                    })
                }
            }
            function Gs(t, n, e) {
                var r = w(t, n - ec, e).concat(n)
                return function(t) {
                    return r.map(function(n) {
                        return [n, t]
                    })
                }
            }
            function Xs() {
                var t,
                    n,
                    e,
                    r,
                    i,
                    u,
                    o,
                    a,
                    c,
                    f,
                    s,
                    l,
                    h = 10,
                    d = h,
                    p = 90,
                    v = 360,
                    y = 2.5
                function g() {
                    return { type: 'MultiLineString', coordinates: b() }
                }
                function b() {
                    return w(dc(r / p) * p, e, p)
                        .map(s)
                        .concat(w(dc(a / v) * v, o, v).map(l))
                        .concat(
                            w(dc(n / h) * h, t, h)
                                .filter(function(t) {
                                    return fc(t % p) > ec
                                })
                                .map(c),
                        )
                        .concat(
                            w(dc(u / d) * d, i, d)
                                .filter(function(t) {
                                    return fc(t % v) > ec
                                })
                                .map(f),
                        )
                }
                return (
                    (g.lines = function() {
                        return b().map(function(t) {
                            return { type: 'LineString', coordinates: t }
                        })
                    }),
                    (g.outline = function() {
                        return {
                            type: 'Polygon',
                            coordinates: [
                                s(r).concat(
                                    l(o).slice(1),
                                    s(e)
                                        .reverse()
                                        .slice(1),
                                    l(a)
                                        .reverse()
                                        .slice(1),
                                ),
                            ],
                        }
                    }),
                    (g.extent = function(t) {
                        return arguments.length
                            ? g.extentMajor(t).extentMinor(t)
                            : g.extentMinor()
                    }),
                    (g.extentMajor = function(t) {
                        return arguments.length
                            ? ((r = +t[0][0]),
                              (e = +t[1][0]),
                              (a = +t[0][1]),
                              (o = +t[1][1]),
                              r > e && ((t = r), (r = e), (e = t)),
                              a > o && ((t = a), (a = o), (o = t)),
                              g.precision(y))
                            : [[r, a], [e, o]]
                    }),
                    (g.extentMinor = function(e) {
                        return arguments.length
                            ? ((n = +e[0][0]),
                              (t = +e[1][0]),
                              (u = +e[0][1]),
                              (i = +e[1][1]),
                              n > t && ((e = n), (n = t), (t = e)),
                              u > i && ((e = u), (u = i), (i = e)),
                              g.precision(y))
                            : [[n, u], [t, i]]
                    }),
                    (g.step = function(t) {
                        return arguments.length
                            ? g.stepMajor(t).stepMinor(t)
                            : g.stepMinor()
                    }),
                    (g.stepMajor = function(t) {
                        return arguments.length
                            ? ((p = +t[0]), (v = +t[1]), g)
                            : [p, v]
                    }),
                    (g.stepMinor = function(t) {
                        return arguments.length
                            ? ((h = +t[0]), (d = +t[1]), g)
                            : [h, d]
                    }),
                    (g.precision = function(h) {
                        return arguments.length
                            ? ((y = +h),
                              (c = Hs(u, i, 90)),
                              (f = Gs(n, t, y)),
                              (s = Hs(a, o, 90)),
                              (l = Gs(r, e, y)),
                              g)
                            : y
                    }),
                    g
                        .extentMajor([[-180, -90 + ec], [180, 90 - ec]])
                        .extentMinor([[-180, -80 - ec], [180, 80 + ec]])
                )
            }
            function Vs() {
                return Xs()()
            }
            var $s,
                Ws,
                Zs,
                Qs,
                Js = function(t, n) {
                    var e = t[0] * cc,
                        r = t[1] * cc,
                        i = n[0] * cc,
                        u = n[1] * cc,
                        o = hc(r),
                        a = gc(r),
                        c = hc(u),
                        f = gc(u),
                        s = o * hc(e),
                        l = o * gc(e),
                        h = c * hc(i),
                        d = c * gc(i),
                        p = 2 * wc(_c(Mc(u - r) + o * c * Mc(i - e))),
                        v = gc(p),
                        y = p
                            ? function(t) {
                                  var n = gc((t *= p)) / v,
                                      e = gc(p - t) / v,
                                      r = e * s + n * h,
                                      i = e * l + n * d,
                                      u = e * a + n * f
                                  return [
                                      lc(i, r) * ac,
                                      lc(u, _c(r * r + i * i)) * ac,
                                  ]
                              }
                            : function() {
                                  return [e * ac, r * ac]
                              }
                    return (y.distance = p), y
                },
                Ks = function(t) {
                    return t
                },
                tl = Ja(),
                nl = Ja(),
                el = {
                    point: kc,
                    lineStart: kc,
                    lineEnd: kc,
                    polygonStart: function() {
                        ;(el.lineStart = rl), (el.lineEnd = ol)
                    },
                    polygonEnd: function() {
                        ;(el.lineStart = el.lineEnd = el.point = kc),
                            tl.add(fc(nl)),
                            nl.reset()
                    },
                    result: function() {
                        var t = tl / 2
                        return tl.reset(), t
                    },
                }
            function rl() {
                el.point = il
            }
            function il(t, n) {
                ;(el.point = ul), ($s = Zs = t), (Ws = Qs = n)
            }
            function ul(t, n) {
                nl.add(Qs * t - Zs * n), (Zs = t), (Qs = n)
            }
            function ol() {
                ul($s, Ws)
            }
            var al = el,
                cl = 1 / 0,
                fl = cl,
                sl = -cl,
                ll = sl
            var hl,
                dl,
                pl,
                vl,
                yl = {
                    point: function(t, n) {
                        t < cl && (cl = t)
                        t > sl && (sl = t)
                        n < fl && (fl = n)
                        n > ll && (ll = n)
                    },
                    lineStart: kc,
                    lineEnd: kc,
                    polygonStart: kc,
                    polygonEnd: kc,
                    result: function() {
                        var t = [[cl, fl], [sl, ll]]
                        return (sl = ll = -(fl = cl = 1 / 0)), t
                    },
                },
                gl = 0,
                bl = 0,
                _l = 0,
                ml = 0,
                xl = 0,
                wl = 0,
                Ml = 0,
                kl = 0,
                Al = 0,
                Sl = {
                    point: Nl,
                    lineStart: El,
                    lineEnd: Pl,
                    polygonStart: function() {
                        ;(Sl.lineStart = zl), (Sl.lineEnd = Rl)
                    },
                    polygonEnd: function() {
                        ;(Sl.point = Nl), (Sl.lineStart = El), (Sl.lineEnd = Pl)
                    },
                    result: function() {
                        var t = Al
                            ? [Ml / Al, kl / Al]
                            : wl
                            ? [ml / wl, xl / wl]
                            : _l
                            ? [gl / _l, bl / _l]
                            : [NaN, NaN]
                        return (
                            (gl = bl = _l = ml = xl = wl = Ml = kl = Al = 0), t
                        )
                    },
                }
            function Nl(t, n) {
                ;(gl += t), (bl += n), ++_l
            }
            function El() {
                Sl.point = Tl
            }
            function Tl(t, n) {
                ;(Sl.point = Cl), Nl((pl = t), (vl = n))
            }
            function Cl(t, n) {
                var e = t - pl,
                    r = n - vl,
                    i = _c(e * e + r * r)
                ;(ml += (i * (pl + t)) / 2),
                    (xl += (i * (vl + n)) / 2),
                    (wl += i),
                    Nl((pl = t), (vl = n))
            }
            function Pl() {
                Sl.point = Nl
            }
            function zl() {
                Sl.point = Dl
            }
            function Rl() {
                Ll(hl, dl)
            }
            function Dl(t, n) {
                ;(Sl.point = Ll), Nl((hl = pl = t), (dl = vl = n))
            }
            function Ll(t, n) {
                var e = t - pl,
                    r = n - vl,
                    i = _c(e * e + r * r)
                ;(ml += (i * (pl + t)) / 2),
                    (xl += (i * (vl + n)) / 2),
                    (wl += i),
                    (Ml += (i = vl * t - pl * n) * (pl + t)),
                    (kl += i * (vl + n)),
                    (Al += 3 * i),
                    Nl((pl = t), (vl = n))
            }
            var Ol = Sl
            function ql(t) {
                this._context = t
            }
            ql.prototype = {
                _radius: 4.5,
                pointRadius: function(t) {
                    return (this._radius = t), this
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._context.closePath(),
                        (this._point = NaN)
                },
                point: function(t, n) {
                    switch (this._point) {
                        case 0:
                            this._context.moveTo(t, n), (this._point = 1)
                            break
                        case 1:
                            this._context.lineTo(t, n)
                            break
                        default:
                            this._context.moveTo(t + this._radius, n),
                                this._context.arc(t, n, this._radius, 0, oc)
                    }
                },
                result: kc,
            }
            var Ul,
                Bl,
                Fl,
                Yl,
                Il,
                jl = Ja(),
                Hl = {
                    point: kc,
                    lineStart: function() {
                        Hl.point = Gl
                    },
                    lineEnd: function() {
                        Ul && Xl(Bl, Fl), (Hl.point = kc)
                    },
                    polygonStart: function() {
                        Ul = !0
                    },
                    polygonEnd: function() {
                        Ul = null
                    },
                    result: function() {
                        var t = +jl
                        return jl.reset(), t
                    },
                }
            function Gl(t, n) {
                ;(Hl.point = Xl), (Bl = Yl = t), (Fl = Il = n)
            }
            function Xl(t, n) {
                ;(Yl -= t),
                    (Il -= n),
                    jl.add(_c(Yl * Yl + Il * Il)),
                    (Yl = t),
                    (Il = n)
            }
            var Vl = Hl
            function $l() {
                this._string = []
            }
            function Wl(t) {
                return (
                    'm0,' +
                    t +
                    'a' +
                    t +
                    ',' +
                    t +
                    ' 0 1,1 0,' +
                    -2 * t +
                    'a' +
                    t +
                    ',' +
                    t +
                    ' 0 1,1 0,' +
                    2 * t +
                    'z'
                )
            }
            $l.prototype = {
                _radius: 4.5,
                _circle: Wl(4.5),
                pointRadius: function(t) {
                    return (
                        (t = +t) !== this._radius &&
                            ((this._radius = t), (this._circle = null)),
                        this
                    )
                },
                polygonStart: function() {
                    this._line = 0
                },
                polygonEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    0 === this._line && this._string.push('Z'),
                        (this._point = NaN)
                },
                point: function(t, n) {
                    switch (this._point) {
                        case 0:
                            this._string.push('M', t, ',', n), (this._point = 1)
                            break
                        case 1:
                            this._string.push('L', t, ',', n)
                            break
                        default:
                            null == this._circle &&
                                (this._circle = Wl(this._radius)),
                                this._string.push('M', t, ',', n, this._circle)
                    }
                },
                result: function() {
                    if (this._string.length) {
                        var t = this._string.join('')
                        return (this._string = []), t
                    }
                    return null
                },
            }
            var Zl = function(t, n) {
                    var e,
                        r,
                        i = 4.5
                    function u(t) {
                        return (
                            t &&
                                ('function' == typeof i &&
                                    r.pointRadius(+i.apply(this, arguments)),
                                Lc(t, e(r))),
                            r.result()
                        )
                    }
                    return (
                        (u.area = function(t) {
                            return Lc(t, e(al)), al.result()
                        }),
                        (u.measure = function(t) {
                            return Lc(t, e(Vl)), Vl.result()
                        }),
                        (u.bounds = function(t) {
                            return Lc(t, e(yl)), yl.result()
                        }),
                        (u.centroid = function(t) {
                            return Lc(t, e(Ol)), Ol.result()
                        }),
                        (u.projection = function(n) {
                            return arguments.length
                                ? ((e =
                                      null == n
                                          ? ((t = null), Ks)
                                          : (t = n).stream),
                                  u)
                                : t
                        }),
                        (u.context = function(t) {
                            return arguments.length
                                ? ((r =
                                      null == t
                                          ? ((n = null), new $l())
                                          : new ql((n = t))),
                                  'function' != typeof i && r.pointRadius(i),
                                  u)
                                : n
                        }),
                        (u.pointRadius = function(t) {
                            return arguments.length
                                ? ((i =
                                      'function' == typeof t
                                          ? t
                                          : (r.pointRadius(+t), +t)),
                                  u)
                                : i
                        }),
                        u.projection(t).context(n)
                    )
                },
                Ql = function(t) {
                    return { stream: Jl(t) }
                }
            function Jl(t) {
                return function(n) {
                    var e = new Kl()
                    for (var r in t) e[r] = t[r]
                    return (e.stream = n), e
                }
            }
            function Kl() {}
            function th(t, n, e) {
                var r = t.clipExtent && t.clipExtent()
                return (
                    t.scale(150).translate([0, 0]),
                    null != r && t.clipExtent(null),
                    Lc(e, t.stream(yl)),
                    n(yl.result()),
                    null != r && t.clipExtent(r),
                    t
                )
            }
            function nh(t, n, e) {
                return th(
                    t,
                    function(e) {
                        var r = n[1][0] - n[0][0],
                            i = n[1][1] - n[0][1],
                            u = Math.min(
                                r / (e[1][0] - e[0][0]),
                                i / (e[1][1] - e[0][1]),
                            ),
                            o = +n[0][0] + (r - u * (e[1][0] + e[0][0])) / 2,
                            a = +n[0][1] + (i - u * (e[1][1] + e[0][1])) / 2
                        t.scale(150 * u).translate([o, a])
                    },
                    e,
                )
            }
            function eh(t, n, e) {
                return nh(t, [[0, 0], n], e)
            }
            function rh(t, n, e) {
                return th(
                    t,
                    function(e) {
                        var r = +n,
                            i = r / (e[1][0] - e[0][0]),
                            u = (r - i * (e[1][0] + e[0][0])) / 2,
                            o = -i * e[0][1]
                        t.scale(150 * i).translate([u, o])
                    },
                    e,
                )
            }
            function ih(t, n, e) {
                return th(
                    t,
                    function(e) {
                        var r = +n,
                            i = r / (e[1][1] - e[0][1]),
                            u = -i * e[0][0],
                            o = (r - i * (e[1][1] + e[0][1])) / 2
                        t.scale(150 * i).translate([u, o])
                    },
                    e,
                )
            }
            Kl.prototype = {
                constructor: Kl,
                point: function(t, n) {
                    this.stream.point(t, n)
                },
                sphere: function() {
                    this.stream.sphere()
                },
                lineStart: function() {
                    this.stream.lineStart()
                },
                lineEnd: function() {
                    this.stream.lineEnd()
                },
                polygonStart: function() {
                    this.stream.polygonStart()
                },
                polygonEnd: function() {
                    this.stream.polygonEnd()
                },
            }
            var uh = 16,
                oh = hc(30 * cc),
                ah = function(t, n) {
                    return +n
                        ? (function(t, n) {
                              function e(
                                  r,
                                  i,
                                  u,
                                  o,
                                  a,
                                  c,
                                  f,
                                  s,
                                  l,
                                  h,
                                  d,
                                  p,
                                  v,
                                  y,
                              ) {
                                  var g = f - r,
                                      b = s - i,
                                      _ = g * g + b * b
                                  if (_ > 4 * n && v--) {
                                      var m = o + h,
                                          x = a + d,
                                          w = c + p,
                                          M = _c(m * m + x * x + w * w),
                                          k = wc((w /= M)),
                                          A =
                                              fc(fc(w) - 1) < ec ||
                                              fc(u - l) < ec
                                                  ? (u + l) / 2
                                                  : lc(x, m),
                                          S = t(A, k),
                                          N = S[0],
                                          E = S[1],
                                          T = N - r,
                                          C = E - i,
                                          P = b * T - g * C
                                      ;((P * P) / _ > n ||
                                          fc((g * T + b * C) / _ - 0.5) > 0.3 ||
                                          o * h + a * d + c * p < oh) &&
                                          (e(
                                              r,
                                              i,
                                              u,
                                              o,
                                              a,
                                              c,
                                              N,
                                              E,
                                              A,
                                              (m /= M),
                                              (x /= M),
                                              w,
                                              v,
                                              y,
                                          ),
                                          y.point(N, E),
                                          e(
                                              N,
                                              E,
                                              A,
                                              m,
                                              x,
                                              w,
                                              f,
                                              s,
                                              l,
                                              h,
                                              d,
                                              p,
                                              v,
                                              y,
                                          ))
                                  }
                              }
                              return function(n) {
                                  var r,
                                      i,
                                      u,
                                      o,
                                      a,
                                      c,
                                      f,
                                      s,
                                      l,
                                      h,
                                      d,
                                      p,
                                      v = {
                                          point: y,
                                          lineStart: g,
                                          lineEnd: _,
                                          polygonStart: function() {
                                              n.polygonStart(),
                                                  (v.lineStart = m)
                                          },
                                          polygonEnd: function() {
                                              n.polygonEnd(), (v.lineStart = g)
                                          },
                                      }
                                  function y(e, r) {
                                      ;(e = t(e, r)), n.point(e[0], e[1])
                                  }
                                  function g() {
                                      ;(s = NaN), (v.point = b), n.lineStart()
                                  }
                                  function b(r, i) {
                                      var u = Gc([r, i]),
                                          o = t(r, i)
                                      e(
                                          s,
                                          l,
                                          f,
                                          h,
                                          d,
                                          p,
                                          (s = o[0]),
                                          (l = o[1]),
                                          (f = r),
                                          (h = u[0]),
                                          (d = u[1]),
                                          (p = u[2]),
                                          uh,
                                          n,
                                      ),
                                          n.point(s, l)
                                  }
                                  function _() {
                                      ;(v.point = y), n.lineEnd()
                                  }
                                  function m() {
                                      g(), (v.point = x), (v.lineEnd = w)
                                  }
                                  function x(t, n) {
                                      b((r = t), n),
                                          (i = s),
                                          (u = l),
                                          (o = h),
                                          (a = d),
                                          (c = p),
                                          (v.point = b)
                                  }
                                  function w() {
                                      e(
                                          s,
                                          l,
                                          f,
                                          h,
                                          d,
                                          p,
                                          i,
                                          u,
                                          r,
                                          o,
                                          a,
                                          c,
                                          uh,
                                          n,
                                      ),
                                          (v.lineEnd = _),
                                          _()
                                  }
                                  return v
                              }
                          })(t, n)
                        : (function(t) {
                              return Jl({
                                  point: function(n, e) {
                                      ;(n = t(n, e)),
                                          this.stream.point(n[0], n[1])
                                  },
                              })
                          })(t)
                }
            var ch = Jl({
                point: function(t, n) {
                    this.stream.point(t * cc, n * cc)
                },
            })
            function fh(t, n, e, r) {
                var i = hc(r),
                    u = gc(r),
                    o = i * t,
                    a = u * t,
                    c = i / t,
                    f = u / t,
                    s = (u * e - i * n) / t,
                    l = (u * n + i * e) / t
                function h(t, r) {
                    return [o * t - a * r + n, e - a * t - o * r]
                }
                return (
                    (h.invert = function(t, n) {
                        return [c * t - f * n + s, l - f * t - c * n]
                    }),
                    h
                )
            }
            function sh(t) {
                return lh(function() {
                    return t
                })()
            }
            function lh(t) {
                var n,
                    e,
                    r,
                    i,
                    u,
                    o,
                    a,
                    c,
                    f,
                    s,
                    l = 150,
                    h = 480,
                    d = 250,
                    p = 0,
                    v = 0,
                    y = 0,
                    g = 0,
                    b = 0,
                    _ = 0,
                    m = null,
                    x = ys,
                    w = null,
                    M = Ks,
                    k = 0.5
                function A(t) {
                    return c(t[0] * cc, t[1] * cc)
                }
                function S(t) {
                    return (t = c.invert(t[0], t[1])) && [t[0] * ac, t[1] * ac]
                }
                function N() {
                    var t = fh(l, 0, 0, _).apply(null, n(p, v)),
                        r = (_
                            ? fh
                            : function(t, n, e) {
                                  function r(r, i) {
                                      return [n + t * r, e - t * i]
                                  }
                                  return (
                                      (r.invert = function(r, i) {
                                          return [(r - n) / t, (e - i) / t]
                                      }),
                                      r
                                  )
                              })(l, h - t[0], d - t[1], _)
                    return (
                        (e = Jf(y, g, b)),
                        (a = Zf(n, r)),
                        (c = Zf(e, a)),
                        (o = ah(a, k)),
                        E()
                    )
                }
                function E() {
                    return (f = s = null), A
                }
                return (
                    (A.stream = function(t) {
                        return f && s === t
                            ? f
                            : (f = ch(
                                  (function(t) {
                                      return Jl({
                                          point: function(n, e) {
                                              var r = t(n, e)
                                              return this.stream.point(
                                                  r[0],
                                                  r[1],
                                              )
                                          },
                                      })
                                  })(e)(x(o(M((s = t))))),
                              ))
                    }),
                    (A.preclip = function(t) {
                        return arguments.length
                            ? ((x = t), (m = void 0), E())
                            : x
                    }),
                    (A.postclip = function(t) {
                        return arguments.length
                            ? ((M = t), (w = r = i = u = null), E())
                            : M
                    }),
                    (A.clipAngle = function(t) {
                        return arguments.length
                            ? ((x = +t ? gs((m = t * cc)) : ((m = null), ys)),
                              E())
                            : m * ac
                    }),
                    (A.clipExtent = function(t) {
                        return arguments.length
                            ? ((M =
                                  null == t
                                      ? ((w = r = i = u = null), Ks)
                                      : xs(
                                            (w = +t[0][0]),
                                            (r = +t[0][1]),
                                            (i = +t[1][0]),
                                            (u = +t[1][1]),
                                        )),
                              E())
                            : null == w
                            ? null
                            : [[w, r], [i, u]]
                    }),
                    (A.scale = function(t) {
                        return arguments.length ? ((l = +t), N()) : l
                    }),
                    (A.translate = function(t) {
                        return arguments.length
                            ? ((h = +t[0]), (d = +t[1]), N())
                            : [h, d]
                    }),
                    (A.center = function(t) {
                        return arguments.length
                            ? ((p = (t[0] % 360) * cc),
                              (v = (t[1] % 360) * cc),
                              N())
                            : [p * ac, v * ac]
                    }),
                    (A.rotate = function(t) {
                        return arguments.length
                            ? ((y = (t[0] % 360) * cc),
                              (g = (t[1] % 360) * cc),
                              (b = t.length > 2 ? (t[2] % 360) * cc : 0),
                              N())
                            : [y * ac, g * ac, b * ac]
                    }),
                    (A.angle = function(t) {
                        return arguments.length
                            ? ((_ = (t % 360) * cc), N())
                            : _ * ac
                    }),
                    (A.precision = function(t) {
                        return arguments.length
                            ? ((o = ah(a, (k = t * t))), E())
                            : _c(k)
                    }),
                    (A.fitExtent = function(t, n) {
                        return nh(A, t, n)
                    }),
                    (A.fitSize = function(t, n) {
                        return eh(A, t, n)
                    }),
                    (A.fitWidth = function(t, n) {
                        return rh(A, t, n)
                    }),
                    (A.fitHeight = function(t, n) {
                        return ih(A, t, n)
                    }),
                    function() {
                        return (
                            (n = t.apply(this, arguments)),
                            (A.invert = n.invert && S),
                            N()
                        )
                    }
                )
            }
            function hh(t) {
                var n = 0,
                    e = rc / 3,
                    r = lh(t),
                    i = r(n, e)
                return (
                    (i.parallels = function(t) {
                        return arguments.length
                            ? r((n = t[0] * cc), (e = t[1] * cc))
                            : [n * ac, e * ac]
                    }),
                    i
                )
            }
            function dh(t, n) {
                var e = gc(t),
                    r = (e + gc(n)) / 2
                if (fc(r) < ec)
                    return (function(t) {
                        var n = hc(t)
                        function e(t, e) {
                            return [t * n, gc(e) / n]
                        }
                        return (
                            (e.invert = function(t, e) {
                                return [t / n, wc(e * n)]
                            }),
                            e
                        )
                    })(t)
                var i = 1 + e * (2 * r - e),
                    u = _c(i) / r
                function o(t, n) {
                    var e = _c(i - 2 * r * gc(n)) / r
                    return [e * gc((t *= r)), u - e * hc(t)]
                }
                return (
                    (o.invert = function(t, n) {
                        var e = u - n
                        return [
                            (lc(t, fc(e)) / r) * bc(e),
                            wc((i - (t * t + e * e) * r * r) / (2 * r)),
                        ]
                    }),
                    o
                )
            }
            var ph = function() {
                    return hh(dh)
                        .scale(155.424)
                        .center([0, 33.6442])
                },
                vh = function() {
                    return ph()
                        .parallels([29.5, 45.5])
                        .scale(1070)
                        .translate([480, 250])
                        .rotate([96, 0])
                        .center([-0.6, 38.7])
                }
            var yh = function() {
                var t,
                    n,
                    e,
                    r,
                    i,
                    u,
                    o = vh(),
                    a = ph()
                        .rotate([154, 0])
                        .center([-2, 58.5])
                        .parallels([55, 65]),
                    c = ph()
                        .rotate([157, 0])
                        .center([-3, 19.9])
                        .parallels([8, 18]),
                    f = {
                        point: function(t, n) {
                            u = [t, n]
                        },
                    }
                function s(t) {
                    var n = t[0],
                        o = t[1]
                    return (
                        (u = null),
                        e.point(n, o),
                        u || (r.point(n, o), u) || (i.point(n, o), u)
                    )
                }
                function l() {
                    return (t = n = null), s
                }
                return (
                    (s.invert = function(t) {
                        var n = o.scale(),
                            e = o.translate(),
                            r = (t[0] - e[0]) / n,
                            i = (t[1] - e[1]) / n
                        return (i >= 0.12 &&
                        i < 0.234 &&
                        r >= -0.425 &&
                        r < -0.214
                            ? a
                            : i >= 0.166 &&
                              i < 0.234 &&
                              r >= -0.214 &&
                              r < -0.115
                            ? c
                            : o
                        ).invert(t)
                    }),
                    (s.stream = function(e) {
                        return t && n === e
                            ? t
                            : ((r = [
                                  o.stream((n = e)),
                                  a.stream(e),
                                  c.stream(e),
                              ]),
                              (i = r.length),
                              (t = {
                                  point: function(t, n) {
                                      for (var e = -1; ++e < i; )
                                          r[e].point(t, n)
                                  },
                                  sphere: function() {
                                      for (var t = -1; ++t < i; ) r[t].sphere()
                                  },
                                  lineStart: function() {
                                      for (var t = -1; ++t < i; )
                                          r[t].lineStart()
                                  },
                                  lineEnd: function() {
                                      for (var t = -1; ++t < i; ) r[t].lineEnd()
                                  },
                                  polygonStart: function() {
                                      for (var t = -1; ++t < i; )
                                          r[t].polygonStart()
                                  },
                                  polygonEnd: function() {
                                      for (var t = -1; ++t < i; )
                                          r[t].polygonEnd()
                                  },
                              }))
                        var r, i
                    }),
                    (s.precision = function(t) {
                        return arguments.length
                            ? (o.precision(t),
                              a.precision(t),
                              c.precision(t),
                              l())
                            : o.precision()
                    }),
                    (s.scale = function(t) {
                        return arguments.length
                            ? (o.scale(t),
                              a.scale(0.35 * t),
                              c.scale(t),
                              s.translate(o.translate()))
                            : o.scale()
                    }),
                    (s.translate = function(t) {
                        if (!arguments.length) return o.translate()
                        var n = o.scale(),
                            u = +t[0],
                            s = +t[1]
                        return (
                            (e = o
                                .translate(t)
                                .clipExtent([
                                    [u - 0.455 * n, s - 0.238 * n],
                                    [u + 0.455 * n, s + 0.238 * n],
                                ])
                                .stream(f)),
                            (r = a
                                .translate([u - 0.307 * n, s + 0.201 * n])
                                .clipExtent([
                                    [u - 0.425 * n + ec, s + 0.12 * n + ec],
                                    [u - 0.214 * n - ec, s + 0.234 * n - ec],
                                ])
                                .stream(f)),
                            (i = c
                                .translate([u - 0.205 * n, s + 0.212 * n])
                                .clipExtent([
                                    [u - 0.214 * n + ec, s + 0.166 * n + ec],
                                    [u - 0.115 * n - ec, s + 0.234 * n - ec],
                                ])
                                .stream(f)),
                            l()
                        )
                    }),
                    (s.fitExtent = function(t, n) {
                        return nh(s, t, n)
                    }),
                    (s.fitSize = function(t, n) {
                        return eh(s, t, n)
                    }),
                    (s.fitWidth = function(t, n) {
                        return rh(s, t, n)
                    }),
                    (s.fitHeight = function(t, n) {
                        return ih(s, t, n)
                    }),
                    s.scale(1070)
                )
            }
            function gh(t) {
                return function(n, e) {
                    var r = hc(n),
                        i = hc(e),
                        u = t(r * i)
                    return [u * i * gc(n), u * gc(e)]
                }
            }
            function bh(t) {
                return function(n, e) {
                    var r = _c(n * n + e * e),
                        i = t(r),
                        u = gc(i),
                        o = hc(i)
                    return [lc(n * u, r * o), wc(r && (e * u) / r)]
                }
            }
            var _h = gh(function(t) {
                return _c(2 / (1 + t))
            })
            _h.invert = bh(function(t) {
                return 2 * wc(t / 2)
            })
            var mh = function() {
                    return sh(_h)
                        .scale(124.75)
                        .clipAngle(179.999)
                },
                xh = gh(function(t) {
                    return (t = xc(t)) && t / gc(t)
                })
            xh.invert = bh(function(t) {
                return t
            })
            var wh = function() {
                return sh(xh)
                    .scale(79.4188)
                    .clipAngle(179.999)
            }
            function Mh(t, n) {
                return [t, vc(mc((ic + n) / 2))]
            }
            Mh.invert = function(t, n) {
                return [t, 2 * sc(pc(n)) - ic]
            }
            var kh = function() {
                return Ah(Mh).scale(961 / oc)
            }
            function Ah(t) {
                var n,
                    e,
                    r,
                    i = sh(t),
                    u = i.center,
                    o = i.scale,
                    a = i.translate,
                    c = i.clipExtent,
                    f = null
                function s() {
                    var u = rc * o(),
                        a = i(es(i.rotate()).invert([0, 0]))
                    return c(
                        null == f
                            ? [[a[0] - u, a[1] - u], [a[0] + u, a[1] + u]]
                            : t === Mh
                            ? [
                                  [Math.max(a[0] - u, f), n],
                                  [Math.min(a[0] + u, e), r],
                              ]
                            : [
                                  [f, Math.max(a[1] - u, n)],
                                  [e, Math.min(a[1] + u, r)],
                              ],
                    )
                }
                return (
                    (i.scale = function(t) {
                        return arguments.length ? (o(t), s()) : o()
                    }),
                    (i.translate = function(t) {
                        return arguments.length ? (a(t), s()) : a()
                    }),
                    (i.center = function(t) {
                        return arguments.length ? (u(t), s()) : u()
                    }),
                    (i.clipExtent = function(t) {
                        return arguments.length
                            ? (null == t
                                  ? (f = n = e = r = null)
                                  : ((f = +t[0][0]),
                                    (n = +t[0][1]),
                                    (e = +t[1][0]),
                                    (r = +t[1][1])),
                              s())
                            : null == f
                            ? null
                            : [[f, n], [e, r]]
                    }),
                    s()
                )
            }
            function Sh(t) {
                return mc((ic + t) / 2)
            }
            function Nh(t, n) {
                var e = hc(t),
                    r = t === n ? gc(t) : vc(e / hc(n)) / vc(Sh(n) / Sh(t)),
                    i = (e * yc(Sh(t), r)) / r
                if (!r) return Mh
                function u(t, n) {
                    i > 0
                        ? n < -ic + ec && (n = -ic + ec)
                        : n > ic - ec && (n = ic - ec)
                    var e = i / yc(Sh(n), r)
                    return [e * gc(r * t), i - e * hc(r * t)]
                }
                return (
                    (u.invert = function(t, n) {
                        var e = i - n,
                            u = bc(r) * _c(t * t + e * e)
                        return [
                            (lc(t, fc(e)) / r) * bc(e),
                            2 * sc(yc(i / u, 1 / r)) - ic,
                        ]
                    }),
                    u
                )
            }
            var Eh = function() {
                return hh(Nh)
                    .scale(109.5)
                    .parallels([30, 30])
            }
            function Th(t, n) {
                return [t, n]
            }
            Th.invert = Th
            var Ch = function() {
                return sh(Th).scale(152.63)
            }
            function Ph(t, n) {
                var e = hc(t),
                    r = t === n ? gc(t) : (e - hc(n)) / (n - t),
                    i = e / r + t
                if (fc(r) < ec) return Th
                function u(t, n) {
                    var e = i - n,
                        u = r * t
                    return [e * gc(u), i - e * hc(u)]
                }
                return (
                    (u.invert = function(t, n) {
                        var e = i - n
                        return [
                            (lc(t, fc(e)) / r) * bc(e),
                            i - bc(r) * _c(t * t + e * e),
                        ]
                    }),
                    u
                )
            }
            var zh = function() {
                    return hh(Ph)
                        .scale(131.154)
                        .center([0, 13.9389])
                },
                Rh = 1.340264,
                Dh = -0.081106,
                Lh = 893e-6,
                Oh = 0.003796,
                qh = _c(3) / 2
            function Uh(t, n) {
                var e = wc(qh * gc(n)),
                    r = e * e,
                    i = r * r * r
                return [
                    (t * hc(e)) /
                        (qh * (Rh + 3 * Dh * r + i * (7 * Lh + 9 * Oh * r))),
                    e * (Rh + Dh * r + i * (Lh + Oh * r)),
                ]
            }
            Uh.invert = function(t, n) {
                for (
                    var e, r = n, i = r * r, u = i * i * i, o = 0;
                    o < 12 &&
                    ((u =
                        (i =
                            (r -= e =
                                (r * (Rh + Dh * i + u * (Lh + Oh * i)) - n) /
                                (Rh + 3 * Dh * i + u * (7 * Lh + 9 * Oh * i))) *
                            r) *
                        i *
                        i),
                    !(fc(e) < 1e-12));
                    ++o
                );
                return [
                    (qh * t * (Rh + 3 * Dh * i + u * (7 * Lh + 9 * Oh * i))) /
                        hc(r),
                    wc(gc(r) / qh),
                ]
            }
            var Bh = function() {
                return sh(Uh).scale(177.158)
            }
            function Fh(t, n) {
                var e = hc(n),
                    r = hc(t) * e
                return [(e * gc(t)) / r, gc(n) / r]
            }
            Fh.invert = bh(sc)
            var Yh = function() {
                return sh(Fh)
                    .scale(144.049)
                    .clipAngle(60)
            }
            function Ih(t, n, e, r) {
                return 1 === t && 1 === n && 0 === e && 0 === r
                    ? Ks
                    : Jl({
                          point: function(i, u) {
                              this.stream.point(i * t + e, u * n + r)
                          },
                      })
            }
            var jh = function() {
                var t,
                    n,
                    e,
                    r,
                    i,
                    u,
                    o = 1,
                    a = 0,
                    c = 0,
                    f = 1,
                    s = 1,
                    l = Ks,
                    h = null,
                    d = Ks
                function p() {
                    return (r = i = null), u
                }
                return (u = {
                    stream: function(t) {
                        return r && i === t ? r : (r = l(d((i = t))))
                    },
                    postclip: function(r) {
                        return arguments.length
                            ? ((d = r), (h = t = n = e = null), p())
                            : d
                    },
                    clipExtent: function(r) {
                        return arguments.length
                            ? ((d =
                                  null == r
                                      ? ((h = t = n = e = null), Ks)
                                      : xs(
                                            (h = +r[0][0]),
                                            (t = +r[0][1]),
                                            (n = +r[1][0]),
                                            (e = +r[1][1]),
                                        )),
                              p())
                            : null == h
                            ? null
                            : [[h, t], [n, e]]
                    },
                    scale: function(t) {
                        return arguments.length
                            ? ((l = Ih((o = +t) * f, o * s, a, c)), p())
                            : o
                    },
                    translate: function(t) {
                        return arguments.length
                            ? ((l = Ih(o * f, o * s, (a = +t[0]), (c = +t[1]))),
                              p())
                            : [a, c]
                    },
                    reflectX: function(t) {
                        return arguments.length
                            ? ((l = Ih(o * (f = t ? -1 : 1), o * s, a, c)), p())
                            : f < 0
                    },
                    reflectY: function(t) {
                        return arguments.length
                            ? ((l = Ih(o * f, o * (s = t ? -1 : 1), a, c)), p())
                            : s < 0
                    },
                    fitExtent: function(t, n) {
                        return nh(u, t, n)
                    },
                    fitSize: function(t, n) {
                        return eh(u, t, n)
                    },
                    fitWidth: function(t, n) {
                        return rh(u, t, n)
                    },
                    fitHeight: function(t, n) {
                        return ih(u, t, n)
                    },
                })
            }
            function Hh(t, n) {
                var e = n * n,
                    r = e * e
                return [
                    t *
                        (0.8707 -
                            0.131979 * e +
                            r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)),
                    n *
                        (1.007226 +
                            e *
                                (0.015085 +
                                    r *
                                        (0.028874 * e -
                                            0.044475 -
                                            0.005916 * r))),
                ]
            }
            Hh.invert = function(t, n) {
                var e,
                    r = n,
                    i = 25
                do {
                    var u = r * r,
                        o = u * u
                    r -= e =
                        (r *
                            (1.007226 +
                                u *
                                    (0.015085 +
                                        o *
                                            (0.028874 * u -
                                                0.044475 -
                                                0.005916 * o))) -
                            n) /
                        (1.007226 +
                            u *
                                (0.045255 +
                                    o *
                                        (0.259866 * u -
                                            0.311325 -
                                            0.005916 * 11 * o)))
                } while (fc(e) > ec && --i > 0)
                return [
                    t /
                        (0.8707 +
                            (u = r * r) *
                                (u *
                                    (u * u * u * (0.003971 - 0.001529 * u) -
                                        0.013791) -
                                    0.131979)),
                    r,
                ]
            }
            var Gh = function() {
                return sh(Hh).scale(175.295)
            }
            function Xh(t, n) {
                return [hc(n) * gc(t), gc(n)]
            }
            Xh.invert = bh(wc)
            var Vh = function() {
                return sh(Xh)
                    .scale(249.5)
                    .clipAngle(90 + ec)
            }
            function $h(t, n) {
                var e = hc(n),
                    r = 1 + hc(t) * e
                return [(e * gc(t)) / r, gc(n) / r]
            }
            $h.invert = bh(function(t) {
                return 2 * sc(t)
            })
            var Wh = function() {
                return sh($h)
                    .scale(250)
                    .clipAngle(142)
            }
            function Zh(t, n) {
                return [vc(mc((ic + n) / 2)), -t]
            }
            Zh.invert = function(t, n) {
                return [-n, 2 * sc(pc(t)) - ic]
            }
            var Qh = function() {
                    var t = Ah(Zh),
                        n = t.center,
                        e = t.rotate
                    return (
                        (t.center = function(t) {
                            return arguments.length
                                ? n([-t[1], t[0]])
                                : [(t = n())[1], -t[0]]
                        }),
                        (t.rotate = function(t) {
                            return arguments.length
                                ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
                                : [(t = e())[0], t[1], t[2] - 90]
                        }),
                        e([0, 0, 90]).scale(159.155)
                    )
                },
                Jh = e(28),
                Kh = function(t) {
                    for (
                        var n, e = -1, r = t.length, i = t[r - 1], u = 0;
                        ++e < r;

                    )
                        (n = i), (i = t[e]), (u += n[1] * i[0] - n[0] * i[1])
                    return u / 2
                },
                td = function(t) {
                    for (
                        var n,
                            e,
                            r = -1,
                            i = t.length,
                            u = 0,
                            o = 0,
                            a = t[i - 1],
                            c = 0;
                        ++r < i;

                    )
                        (n = a),
                            (a = t[r]),
                            (c += e = n[0] * a[1] - a[0] * n[1]),
                            (u += (n[0] + a[0]) * e),
                            (o += (n[1] + a[1]) * e)
                    return [u / (c *= 3), o / c]
                },
                nd = function(t, n, e) {
                    return (
                        (n[0] - t[0]) * (e[1] - t[1]) -
                        (n[1] - t[1]) * (e[0] - t[0])
                    )
                }
            function ed(t, n) {
                return t[0] - n[0] || t[1] - n[1]
            }
            function rd(t) {
                for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
                    for (; r > 1 && nd(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0; )
                        --r
                    e[r++] = i
                }
                return e.slice(0, r)
            }
            var id = function(t) {
                    if ((e = t.length) < 3) return null
                    var n,
                        e,
                        r = new Array(e),
                        i = new Array(e)
                    for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n]
                    for (r.sort(ed), n = 0; n < e; ++n)
                        i[n] = [r[n][0], -r[n][1]]
                    var u = rd(r),
                        o = rd(i),
                        a = o[0] === u[0],
                        c = o[o.length - 1] === u[u.length - 1],
                        f = []
                    for (n = u.length - 1; n >= 0; --n) f.push(t[r[u[n]][2]])
                    for (n = +a; n < o.length - c; ++n) f.push(t[r[o[n]][2]])
                    return f
                },
                ud = function(t, n) {
                    for (
                        var e,
                            r,
                            i = t.length,
                            u = t[i - 1],
                            o = n[0],
                            a = n[1],
                            c = u[0],
                            f = u[1],
                            s = !1,
                            l = 0;
                        l < i;
                        ++l
                    )
                        (e = (u = t[l])[0]),
                            (r = u[1]) > a != f > a &&
                                o < ((c - e) * (a - r)) / (f - r) + e &&
                                (s = !s),
                            (c = e),
                            (f = r)
                    return s
                },
                od = function(t) {
                    for (
                        var n,
                            e,
                            r = -1,
                            i = t.length,
                            u = t[i - 1],
                            o = u[0],
                            a = u[1],
                            c = 0;
                        ++r < i;

                    )
                        (n = o),
                            (e = a),
                            (n -= o = (u = t[r])[0]),
                            (e -= a = u[1]),
                            (c += Math.sqrt(n * n + e * e))
                    return c
                },
                ad = function() {
                    return Math.random()
                },
                cd = (function t(n) {
                    function e(t, e) {
                        return (
                            (t = null == t ? 0 : +t),
                            (e = null == e ? 1 : +e),
                            1 === arguments.length
                                ? ((e = t), (t = 0))
                                : (e -= t),
                            function() {
                                return n() * e + t
                            }
                        )
                    }
                    return (e.source = t), e
                })(ad),
                fd = (function t(n) {
                    function e(t, e) {
                        var r, i
                        return (
                            (t = null == t ? 0 : +t),
                            (e = null == e ? 1 : +e),
                            function() {
                                var u
                                if (null != r) (u = r), (r = null)
                                else
                                    do {
                                        ;(r = 2 * n() - 1),
                                            (u = 2 * n() - 1),
                                            (i = r * r + u * u)
                                    } while (!i || i > 1)
                                return (
                                    t +
                                    e * u * Math.sqrt((-2 * Math.log(i)) / i)
                                )
                            }
                        )
                    }
                    return (e.source = t), e
                })(ad),
                sd = (function t(n) {
                    function e() {
                        var t = fd.source(n).apply(this, arguments)
                        return function() {
                            return Math.exp(t())
                        }
                    }
                    return (e.source = t), e
                })(ad),
                ld = (function t(n) {
                    function e(t) {
                        return function() {
                            for (var e = 0, r = 0; r < t; ++r) e += n()
                            return e
                        }
                    }
                    return (e.source = t), e
                })(ad),
                hd = (function t(n) {
                    function e(t) {
                        var e = ld.source(n)(t)
                        return function() {
                            return e() / t
                        }
                    }
                    return (e.source = t), e
                })(ad),
                dd = (function t(n) {
                    function e(t) {
                        return function() {
                            return -Math.log(1 - n()) / t
                        }
                    }
                    return (e.source = t), e
                })(ad),
                pd = Array.prototype,
                vd = pd.map,
                yd = pd.slice,
                gd = { name: 'implicit' }
            function bd(t) {
                var n = Qu(),
                    e = [],
                    r = gd
                function i(i) {
                    var u = i + '',
                        o = n.get(u)
                    if (!o) {
                        if (r !== gd) return r
                        n.set(u, (o = e.push(i)))
                    }
                    return t[(o - 1) % t.length]
                }
                return (
                    (t = null == t ? [] : yd.call(t)),
                    (i.domain = function(t) {
                        if (!arguments.length) return e.slice()
                        ;(e = []), (n = Qu())
                        for (var r, u, o = -1, a = t.length; ++o < a; )
                            n.has((u = (r = t[o]) + '')) || n.set(u, e.push(r))
                        return i
                    }),
                    (i.range = function(n) {
                        return arguments.length
                            ? ((t = yd.call(n)), i)
                            : t.slice()
                    }),
                    (i.unknown = function(t) {
                        return arguments.length ? ((r = t), i) : r
                    }),
                    (i.copy = function() {
                        return bd()
                            .domain(e)
                            .range(t)
                            .unknown(r)
                    }),
                    i
                )
            }
            function _d() {
                var t,
                    n,
                    e = bd().unknown(void 0),
                    r = e.domain,
                    i = e.range,
                    u = [0, 1],
                    o = !1,
                    a = 0,
                    c = 0,
                    f = 0.5
                function s() {
                    var e = r().length,
                        s = u[1] < u[0],
                        l = u[s - 0],
                        h = u[1 - s]
                    ;(t = (h - l) / Math.max(1, e - a + 2 * c)),
                        o && (t = Math.floor(t)),
                        (l += (h - l - t * (e - a)) * f),
                        (n = t * (1 - a)),
                        o && ((l = Math.round(l)), (n = Math.round(n)))
                    var d = w(e).map(function(n) {
                        return l + t * n
                    })
                    return i(s ? d.reverse() : d)
                }
                return (
                    delete e.unknown,
                    (e.domain = function(t) {
                        return arguments.length ? (r(t), s()) : r()
                    }),
                    (e.range = function(t) {
                        return arguments.length
                            ? ((u = [+t[0], +t[1]]), s())
                            : u.slice()
                    }),
                    (e.rangeRound = function(t) {
                        return (u = [+t[0], +t[1]]), (o = !0), s()
                    }),
                    (e.bandwidth = function() {
                        return n
                    }),
                    (e.step = function() {
                        return t
                    }),
                    (e.round = function(t) {
                        return arguments.length ? ((o = !!t), s()) : o
                    }),
                    (e.padding = function(t) {
                        return arguments.length
                            ? ((a = c = Math.max(0, Math.min(1, t))), s())
                            : a
                    }),
                    (e.paddingInner = function(t) {
                        return arguments.length
                            ? ((a = Math.max(0, Math.min(1, t))), s())
                            : a
                    }),
                    (e.paddingOuter = function(t) {
                        return arguments.length
                            ? ((c = Math.max(0, Math.min(1, t))), s())
                            : c
                    }),
                    (e.align = function(t) {
                        return arguments.length
                            ? ((f = Math.max(0, Math.min(1, t))), s())
                            : f
                    }),
                    (e.copy = function() {
                        return _d()
                            .domain(r())
                            .range(u)
                            .round(o)
                            .paddingInner(a)
                            .paddingOuter(c)
                            .align(f)
                    }),
                    s()
                )
            }
            function md() {
                return (function t(n) {
                    var e = n.copy
                    return (
                        (n.padding = n.paddingOuter),
                        delete n.paddingInner,
                        delete n.paddingOuter,
                        (n.copy = function() {
                            return t(e())
                        }),
                        n
                    )
                })(_d().paddingInner(1))
            }
            var xd = function(t) {
                    return function() {
                        return t
                    }
                },
                wd = function(t) {
                    return +t
                },
                Md = [0, 1]
            function kd(t, n) {
                return (n -= t = +t)
                    ? function(e) {
                          return (e - t) / n
                      }
                    : xd(n)
            }
            function Ad(t, n, e, r) {
                var i = t[0],
                    u = t[1],
                    o = n[0],
                    a = n[1]
                return (
                    u < i
                        ? ((i = e(u, i)), (o = r(a, o)))
                        : ((i = e(i, u)), (o = r(o, a))),
                    function(t) {
                        return o(i(t))
                    }
                )
            }
            function Sd(t, n, e, r) {
                var i = Math.min(t.length, n.length) - 1,
                    u = new Array(i),
                    o = new Array(i),
                    a = -1
                for (
                    t[i] < t[0] &&
                    ((t = t.slice().reverse()), (n = n.slice().reverse()));
                    ++a < i;

                )
                    (u[a] = e(t[a], t[a + 1])), (o[a] = r(n[a], n[a + 1]))
                return function(n) {
                    var e = c(t, n, 1, i) - 1
                    return o[e](u[e](n))
                }
            }
            function Nd(t, n) {
                return n
                    .domain(t.domain())
                    .range(t.range())
                    .interpolate(t.interpolate())
                    .clamp(t.clamp())
            }
            function Ed(t, n) {
                var e,
                    r,
                    i,
                    u = Md,
                    o = Md,
                    a = Qe,
                    c = !1
                function f() {
                    return (
                        (e = Math.min(u.length, o.length) > 2 ? Sd : Ad),
                        (r = i = null),
                        s
                    )
                }
                function s(n) {
                    return (r ||
                        (r = e(
                            u,
                            o,
                            c
                                ? (function(t) {
                                      return function(n, e) {
                                          var r = t((n = +n), (e = +e))
                                          return function(t) {
                                              return t <= n
                                                  ? 0
                                                  : t >= e
                                                  ? 1
                                                  : r(t)
                                          }
                                      }
                                  })(t)
                                : t,
                            a,
                        )))(+n)
                }
                return (
                    (s.invert = function(t) {
                        return (i ||
                            (i = e(
                                o,
                                u,
                                kd,
                                c
                                    ? (function(t) {
                                          return function(n, e) {
                                              var r = t((n = +n), (e = +e))
                                              return function(t) {
                                                  return t <= 0
                                                      ? n
                                                      : t >= 1
                                                      ? e
                                                      : r(t)
                                              }
                                          }
                                      })(n)
                                    : n,
                            )))(+t)
                    }),
                    (s.domain = function(t) {
                        return arguments.length
                            ? ((u = vd.call(t, wd)), f())
                            : u.slice()
                    }),
                    (s.range = function(t) {
                        return arguments.length
                            ? ((o = yd.call(t)), f())
                            : o.slice()
                    }),
                    (s.rangeRound = function(t) {
                        return (o = yd.call(t)), (a = tr), f()
                    }),
                    (s.clamp = function(t) {
                        return arguments.length ? ((c = !!t), f()) : c
                    }),
                    (s.interpolate = function(t) {
                        return arguments.length ? ((a = t), f()) : a
                    }),
                    f()
                )
            }
            var Td = function(t, n, e) {
                var r,
                    i = t[0],
                    u = t[t.length - 1],
                    o = E(i, u, null == n ? 10 : n)
                switch ((e = Oa(null == e ? ',f' : e)).type) {
                    case 's':
                        var a = Math.max(Math.abs(i), Math.abs(u))
                        return (
                            null != e.precision ||
                                isNaN((r = Za(o, a))) ||
                                (e.precision = r),
                            Ya(e, a)
                        )
                    case '':
                    case 'e':
                    case 'g':
                    case 'p':
                    case 'r':
                        null != e.precision ||
                            isNaN(
                                (r = Qa(o, Math.max(Math.abs(i), Math.abs(u)))),
                            ) ||
                            (e.precision = r - ('e' === e.type))
                        break
                    case 'f':
                    case '%':
                        null != e.precision ||
                            isNaN((r = Wa(o))) ||
                            (e.precision = r - 2 * ('%' === e.type))
                }
                return Fa(e)
            }
            function Cd(t) {
                var n = t.domain
                return (
                    (t.ticks = function(t) {
                        var e = n()
                        return S(e[0], e[e.length - 1], null == t ? 10 : t)
                    }),
                    (t.tickFormat = function(t, e) {
                        return Td(n(), t, e)
                    }),
                    (t.nice = function(e) {
                        null == e && (e = 10)
                        var r,
                            i = n(),
                            u = 0,
                            o = i.length - 1,
                            a = i[u],
                            c = i[o]
                        return (
                            c < a &&
                                ((r = a),
                                (a = c),
                                (c = r),
                                (r = u),
                                (u = o),
                                (o = r)),
                            (r = N(a, c, e)) > 0
                                ? (r = N(
                                      (a = Math.floor(a / r) * r),
                                      (c = Math.ceil(c / r) * r),
                                      e,
                                  ))
                                : r < 0 &&
                                  (r = N(
                                      (a = Math.ceil(a * r) / r),
                                      (c = Math.floor(c * r) / r),
                                      e,
                                  )),
                            r > 0
                                ? ((i[u] = Math.floor(a / r) * r),
                                  (i[o] = Math.ceil(c / r) * r),
                                  n(i))
                                : r < 0 &&
                                  ((i[u] = Math.ceil(a * r) / r),
                                  (i[o] = Math.floor(c * r) / r),
                                  n(i)),
                            t
                        )
                    }),
                    t
                )
            }
            function Pd() {
                var t = Ed(kd, Ie)
                return (
                    (t.copy = function() {
                        return Nd(t, Pd())
                    }),
                    Cd(t)
                )
            }
            function zd() {
                var t = [0, 1]
                function n(t) {
                    return +t
                }
                return (
                    (n.invert = n),
                    (n.domain = n.range = function(e) {
                        return arguments.length
                            ? ((t = vd.call(e, wd)), n)
                            : t.slice()
                    }),
                    (n.copy = function() {
                        return zd().domain(t)
                    }),
                    Cd(n)
                )
            }
            var Rd = function(t, n) {
                var e,
                    r = 0,
                    i = (t = t.slice()).length - 1,
                    u = t[r],
                    o = t[i]
                return (
                    o < u &&
                        ((e = r), (r = i), (i = e), (e = u), (u = o), (o = e)),
                    (t[r] = n.floor(u)),
                    (t[i] = n.ceil(o)),
                    t
                )
            }
            function Dd(t, n) {
                return (n = Math.log(n / t))
                    ? function(e) {
                          return Math.log(e / t) / n
                      }
                    : xd(n)
            }
            function Ld(t, n) {
                return t < 0
                    ? function(e) {
                          return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
                      }
                    : function(e) {
                          return Math.pow(n, e) * Math.pow(t, 1 - e)
                      }
            }
            function Od(t) {
                return isFinite(t) ? +('1e' + t) : t < 0 ? 0 : t
            }
            function qd(t) {
                return 10 === t
                    ? Od
                    : t === Math.E
                    ? Math.exp
                    : function(n) {
                          return Math.pow(t, n)
                      }
            }
            function Ud(t) {
                return t === Math.E
                    ? Math.log
                    : (10 === t && Math.log10) ||
                          (2 === t && Math.log2) ||
                          ((t = Math.log(t)),
                          function(n) {
                              return Math.log(n) / t
                          })
            }
            function Bd(t) {
                return function(n) {
                    return -t(-n)
                }
            }
            function Fd() {
                var t = Ed(Dd, Ld).domain([1, 10]),
                    n = t.domain,
                    e = 10,
                    r = Ud(10),
                    i = qd(10)
                function u() {
                    return (
                        (r = Ud(e)),
                        (i = qd(e)),
                        n()[0] < 0 && ((r = Bd(r)), (i = Bd(i))),
                        t
                    )
                }
                return (
                    (t.base = function(t) {
                        return arguments.length ? ((e = +t), u()) : e
                    }),
                    (t.domain = function(t) {
                        return arguments.length ? (n(t), u()) : n()
                    }),
                    (t.ticks = function(t) {
                        var u,
                            o = n(),
                            a = o[0],
                            c = o[o.length - 1]
                        ;(u = c < a) && ((h = a), (a = c), (c = h))
                        var f,
                            s,
                            l,
                            h = r(a),
                            d = r(c),
                            p = null == t ? 10 : +t,
                            v = []
                        if (!(e % 1) && d - h < p) {
                            if (
                                ((h = Math.round(h) - 1),
                                (d = Math.round(d) + 1),
                                a > 0)
                            ) {
                                for (; h < d; ++h)
                                    for (s = 1, f = i(h); s < e; ++s)
                                        if (!((l = f * s) < a)) {
                                            if (l > c) break
                                            v.push(l)
                                        }
                            } else
                                for (; h < d; ++h)
                                    for (s = e - 1, f = i(h); s >= 1; --s)
                                        if (!((l = f * s) < a)) {
                                            if (l > c) break
                                            v.push(l)
                                        }
                        } else v = S(h, d, Math.min(d - h, p)).map(i)
                        return u ? v.reverse() : v
                    }),
                    (t.tickFormat = function(n, u) {
                        if (
                            (null == u && (u = 10 === e ? '.0e' : ','),
                            'function' != typeof u && (u = Fa(u)),
                            n === 1 / 0)
                        )
                            return u
                        null == n && (n = 10)
                        var o = Math.max(1, (e * n) / t.ticks().length)
                        return function(t) {
                            var n = t / i(Math.round(r(t)))
                            return (
                                n * e < e - 0.5 && (n *= e), n <= o ? u(t) : ''
                            )
                        }
                    }),
                    (t.nice = function() {
                        return n(
                            Rd(n(), {
                                floor: function(t) {
                                    return i(Math.floor(r(t)))
                                },
                                ceil: function(t) {
                                    return i(Math.ceil(r(t)))
                                },
                            }),
                        )
                    }),
                    (t.copy = function() {
                        return Nd(t, Fd().base(e))
                    }),
                    t
                )
            }
            function Yd(t, n) {
                return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
            }
            function Id() {
                var t = 1,
                    n = Ed(
                        function(n, e) {
                            return (e = Yd(e, t) - (n = Yd(n, t)))
                                ? function(r) {
                                      return (Yd(r, t) - n) / e
                                  }
                                : xd(e)
                        },
                        function(n, e) {
                            return (
                                (e = Yd(e, t) - (n = Yd(n, t))),
                                function(r) {
                                    return Yd(n + e * r, 1 / t)
                                }
                            )
                        },
                    ),
                    e = n.domain
                return (
                    (n.exponent = function(n) {
                        return arguments.length ? ((t = +n), e(e())) : t
                    }),
                    (n.copy = function() {
                        return Nd(n, Id().exponent(t))
                    }),
                    Cd(n)
                )
            }
            function jd() {
                return Id().exponent(0.5)
            }
            function Hd() {
                var t = [],
                    n = [],
                    e = []
                function i() {
                    var r = 0,
                        i = Math.max(1, n.length)
                    for (e = new Array(i - 1); ++r < i; ) e[r - 1] = P(t, r / i)
                    return u
                }
                function u(t) {
                    if (!isNaN((t = +t))) return n[c(e, t)]
                }
                return (
                    (u.invertExtent = function(r) {
                        var i = n.indexOf(r)
                        return i < 0
                            ? [NaN, NaN]
                            : [
                                  i > 0 ? e[i - 1] : t[0],
                                  i < e.length ? e[i] : t[t.length - 1],
                              ]
                    }),
                    (u.domain = function(n) {
                        if (!arguments.length) return t.slice()
                        t = []
                        for (var e, u = 0, o = n.length; u < o; ++u)
                            null == (e = n[u]) || isNaN((e = +e)) || t.push(e)
                        return t.sort(r), i()
                    }),
                    (u.range = function(t) {
                        return arguments.length
                            ? ((n = yd.call(t)), i())
                            : n.slice()
                    }),
                    (u.quantiles = function() {
                        return e.slice()
                    }),
                    (u.copy = function() {
                        return Hd()
                            .domain(t)
                            .range(n)
                    }),
                    u
                )
            }
            function Gd() {
                var t = 0,
                    n = 1,
                    e = 1,
                    r = [0.5],
                    i = [0, 1]
                function u(t) {
                    if (t <= t) return i[c(r, t, 0, e)]
                }
                function o() {
                    var i = -1
                    for (r = new Array(e); ++i < e; )
                        r[i] = ((i + 1) * n - (i - e) * t) / (e + 1)
                    return u
                }
                return (
                    (u.domain = function(e) {
                        return arguments.length
                            ? ((t = +e[0]), (n = +e[1]), o())
                            : [t, n]
                    }),
                    (u.range = function(t) {
                        return arguments.length
                            ? ((e = (i = yd.call(t)).length - 1), o())
                            : i.slice()
                    }),
                    (u.invertExtent = function(u) {
                        var o = i.indexOf(u)
                        return o < 0
                            ? [NaN, NaN]
                            : o < 1
                            ? [t, r[0]]
                            : o >= e
                            ? [r[e - 1], n]
                            : [r[o - 1], r[o]]
                    }),
                    (u.copy = function() {
                        return Gd()
                            .domain([t, n])
                            .range(i)
                    }),
                    Cd(u)
                )
            }
            function Xd() {
                var t = [0.5],
                    n = [0, 1],
                    e = 1
                function r(r) {
                    if (r <= r) return n[c(t, r, 0, e)]
                }
                return (
                    (r.domain = function(i) {
                        return arguments.length
                            ? ((t = yd.call(i)),
                              (e = Math.min(t.length, n.length - 1)),
                              r)
                            : t.slice()
                    }),
                    (r.range = function(i) {
                        return arguments.length
                            ? ((n = yd.call(i)),
                              (e = Math.min(t.length, n.length - 1)),
                              r)
                            : n.slice()
                    }),
                    (r.invertExtent = function(e) {
                        var r = n.indexOf(e)
                        return [t[r - 1], t[r]]
                    }),
                    (r.copy = function() {
                        return Xd()
                            .domain(t)
                            .range(n)
                    }),
                    r
                )
            }
            var Vd = new Date(),
                $d = new Date()
            function Wd(t, n, e, r) {
                function i(n) {
                    return t((n = new Date(+n))), n
                }
                return (
                    (i.floor = i),
                    (i.ceil = function(e) {
                        return t((e = new Date(e - 1))), n(e, 1), t(e), e
                    }),
                    (i.round = function(t) {
                        var n = i(t),
                            e = i.ceil(t)
                        return t - n < e - t ? n : e
                    }),
                    (i.offset = function(t, e) {
                        return (
                            n(
                                (t = new Date(+t)),
                                null == e ? 1 : Math.floor(e),
                            ),
                            t
                        )
                    }),
                    (i.range = function(e, r, u) {
                        var o,
                            a = []
                        if (
                            ((e = i.ceil(e)),
                            (u = null == u ? 1 : Math.floor(u)),
                            !(e < r && u > 0))
                        )
                            return a
                        do {
                            a.push((o = new Date(+e))), n(e, u), t(e)
                        } while (o < e && e < r)
                        return a
                    }),
                    (i.filter = function(e) {
                        return Wd(
                            function(n) {
                                if (n >= n)
                                    for (; t(n), !e(n); ) n.setTime(n - 1)
                            },
                            function(t, r) {
                                if (t >= t)
                                    if (r < 0)
                                        for (; ++r <= 0; )
                                            for (; n(t, -1), !e(t); );
                                    else
                                        for (; --r >= 0; )
                                            for (; n(t, 1), !e(t); );
                            },
                        )
                    }),
                    e &&
                        ((i.count = function(n, r) {
                            return (
                                Vd.setTime(+n),
                                $d.setTime(+r),
                                t(Vd),
                                t($d),
                                Math.floor(e(Vd, $d))
                            )
                        }),
                        (i.every = function(t) {
                            return (
                                (t = Math.floor(t)),
                                isFinite(t) && t > 0
                                    ? t > 1
                                        ? i.filter(
                                              r
                                                  ? function(n) {
                                                        return r(n) % t == 0
                                                    }
                                                  : function(n) {
                                                        return (
                                                            i.count(0, n) % t ==
                                                            0
                                                        )
                                                    },
                                          )
                                        : i
                                    : null
                            )
                        })),
                    i
                )
            }
            var Zd = Wd(
                function() {},
                function(t, n) {
                    t.setTime(+t + n)
                },
                function(t, n) {
                    return n - t
                },
            )
            Zd.every = function(t) {
                return (
                    (t = Math.floor(t)),
                    isFinite(t) && t > 0
                        ? t > 1
                            ? Wd(
                                  function(n) {
                                      n.setTime(Math.floor(n / t) * t)
                                  },
                                  function(n, e) {
                                      n.setTime(+n + e * t)
                                  },
                                  function(n, e) {
                                      return (e - n) / t
                                  },
                              )
                            : Zd
                        : null
                )
            }
            var Qd = Zd,
                Jd = Zd.range,
                Kd = 6e4,
                tp = 6048e5,
                np = Wd(
                    function(t) {
                        t.setTime(1e3 * Math.floor(t / 1e3))
                    },
                    function(t, n) {
                        t.setTime(+t + 1e3 * n)
                    },
                    function(t, n) {
                        return (n - t) / 1e3
                    },
                    function(t) {
                        return t.getUTCSeconds()
                    },
                ),
                ep = np,
                rp = np.range,
                ip = Wd(
                    function(t) {
                        t.setTime(Math.floor(t / Kd) * Kd)
                    },
                    function(t, n) {
                        t.setTime(+t + n * Kd)
                    },
                    function(t, n) {
                        return (n - t) / Kd
                    },
                    function(t) {
                        return t.getMinutes()
                    },
                ),
                up = ip,
                op = ip.range,
                ap = Wd(
                    function(t) {
                        var n = (t.getTimezoneOffset() * Kd) % 36e5
                        n < 0 && (n += 36e5),
                            t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
                    },
                    function(t, n) {
                        t.setTime(+t + 36e5 * n)
                    },
                    function(t, n) {
                        return (n - t) / 36e5
                    },
                    function(t) {
                        return t.getHours()
                    },
                ),
                cp = ap,
                fp = ap.range,
                sp = Wd(
                    function(t) {
                        t.setHours(0, 0, 0, 0)
                    },
                    function(t, n) {
                        t.setDate(t.getDate() + n)
                    },
                    function(t, n) {
                        return (
                            (n -
                                t -
                                (n.getTimezoneOffset() -
                                    t.getTimezoneOffset()) *
                                    Kd) /
                            864e5
                        )
                    },
                    function(t) {
                        return t.getDate() - 1
                    },
                ),
                lp = sp,
                hp = sp.range
            function dp(t) {
                return Wd(
                    function(n) {
                        n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
                            n.setHours(0, 0, 0, 0)
                    },
                    function(t, n) {
                        t.setDate(t.getDate() + 7 * n)
                    },
                    function(t, n) {
                        return (
                            (n -
                                t -
                                (n.getTimezoneOffset() -
                                    t.getTimezoneOffset()) *
                                    Kd) /
                            tp
                        )
                    },
                )
            }
            var pp = dp(0),
                vp = dp(1),
                yp = dp(2),
                gp = dp(3),
                bp = dp(4),
                _p = dp(5),
                mp = dp(6),
                xp = pp.range,
                wp = vp.range,
                Mp = yp.range,
                kp = gp.range,
                Ap = bp.range,
                Sp = _p.range,
                Np = mp.range,
                Ep = Wd(
                    function(t) {
                        t.setDate(1), t.setHours(0, 0, 0, 0)
                    },
                    function(t, n) {
                        t.setMonth(t.getMonth() + n)
                    },
                    function(t, n) {
                        return (
                            n.getMonth() -
                            t.getMonth() +
                            12 * (n.getFullYear() - t.getFullYear())
                        )
                    },
                    function(t) {
                        return t.getMonth()
                    },
                ),
                Tp = Ep,
                Cp = Ep.range,
                Pp = Wd(
                    function(t) {
                        t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
                    },
                    function(t, n) {
                        t.setFullYear(t.getFullYear() + n)
                    },
                    function(t, n) {
                        return n.getFullYear() - t.getFullYear()
                    },
                    function(t) {
                        return t.getFullYear()
                    },
                )
            Pp.every = function(t) {
                return isFinite((t = Math.floor(t))) && t > 0
                    ? Wd(
                          function(n) {
                              n.setFullYear(
                                  Math.floor(n.getFullYear() / t) * t,
                              ),
                                  n.setMonth(0, 1),
                                  n.setHours(0, 0, 0, 0)
                          },
                          function(n, e) {
                              n.setFullYear(n.getFullYear() + e * t)
                          },
                      )
                    : null
            }
            var zp = Pp,
                Rp = Pp.range,
                Dp = Wd(
                    function(t) {
                        t.setUTCSeconds(0, 0)
                    },
                    function(t, n) {
                        t.setTime(+t + n * Kd)
                    },
                    function(t, n) {
                        return (n - t) / Kd
                    },
                    function(t) {
                        return t.getUTCMinutes()
                    },
                ),
                Lp = Dp,
                Op = Dp.range,
                qp = Wd(
                    function(t) {
                        t.setUTCMinutes(0, 0, 0)
                    },
                    function(t, n) {
                        t.setTime(+t + 36e5 * n)
                    },
                    function(t, n) {
                        return (n - t) / 36e5
                    },
                    function(t) {
                        return t.getUTCHours()
                    },
                ),
                Up = qp,
                Bp = qp.range,
                Fp = Wd(
                    function(t) {
                        t.setUTCHours(0, 0, 0, 0)
                    },
                    function(t, n) {
                        t.setUTCDate(t.getUTCDate() + n)
                    },
                    function(t, n) {
                        return (n - t) / 864e5
                    },
                    function(t) {
                        return t.getUTCDate() - 1
                    },
                ),
                Yp = Fp,
                Ip = Fp.range
            function jp(t) {
                return Wd(
                    function(n) {
                        n.setUTCDate(
                            n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7),
                        ),
                            n.setUTCHours(0, 0, 0, 0)
                    },
                    function(t, n) {
                        t.setUTCDate(t.getUTCDate() + 7 * n)
                    },
                    function(t, n) {
                        return (n - t) / tp
                    },
                )
            }
            var Hp = jp(0),
                Gp = jp(1),
                Xp = jp(2),
                Vp = jp(3),
                $p = jp(4),
                Wp = jp(5),
                Zp = jp(6),
                Qp = Hp.range,
                Jp = Gp.range,
                Kp = Xp.range,
                tv = Vp.range,
                nv = $p.range,
                ev = Wp.range,
                rv = Zp.range,
                iv = Wd(
                    function(t) {
                        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
                    },
                    function(t, n) {
                        t.setUTCMonth(t.getUTCMonth() + n)
                    },
                    function(t, n) {
                        return (
                            n.getUTCMonth() -
                            t.getUTCMonth() +
                            12 * (n.getUTCFullYear() - t.getUTCFullYear())
                        )
                    },
                    function(t) {
                        return t.getUTCMonth()
                    },
                ),
                uv = iv,
                ov = iv.range,
                av = Wd(
                    function(t) {
                        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
                    },
                    function(t, n) {
                        t.setUTCFullYear(t.getUTCFullYear() + n)
                    },
                    function(t, n) {
                        return n.getUTCFullYear() - t.getUTCFullYear()
                    },
                    function(t) {
                        return t.getUTCFullYear()
                    },
                )
            av.every = function(t) {
                return isFinite((t = Math.floor(t))) && t > 0
                    ? Wd(
                          function(n) {
                              n.setUTCFullYear(
                                  Math.floor(n.getUTCFullYear() / t) * t,
                              ),
                                  n.setUTCMonth(0, 1),
                                  n.setUTCHours(0, 0, 0, 0)
                          },
                          function(n, e) {
                              n.setUTCFullYear(n.getUTCFullYear() + e * t)
                          },
                      )
                    : null
            }
            var cv = av,
                fv = av.range
            function sv(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L)
                    return n.setFullYear(t.y), n
                }
                return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
            }
            function lv(t) {
                if (0 <= t.y && t.y < 100) {
                    var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L))
                    return n.setUTCFullYear(t.y), n
                }
                return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
            }
            function hv(t) {
                return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 }
            }
            function dv(t) {
                var n = t.dateTime,
                    e = t.date,
                    r = t.time,
                    i = t.periods,
                    u = t.days,
                    o = t.shortDays,
                    a = t.months,
                    c = t.shortMonths,
                    f = Av(i),
                    s = Sv(i),
                    l = Av(u),
                    h = Sv(u),
                    d = Av(o),
                    p = Sv(o),
                    v = Av(a),
                    y = Sv(a),
                    g = Av(c),
                    b = Sv(c),
                    _ = {
                        a: function(t) {
                            return o[t.getDay()]
                        },
                        A: function(t) {
                            return u[t.getDay()]
                        },
                        b: function(t) {
                            return c[t.getMonth()]
                        },
                        B: function(t) {
                            return a[t.getMonth()]
                        },
                        c: null,
                        d: Xv,
                        e: Xv,
                        f: Qv,
                        H: Vv,
                        I: $v,
                        j: Wv,
                        L: Zv,
                        m: Jv,
                        M: Kv,
                        p: function(t) {
                            return i[+(t.getHours() >= 12)]
                        },
                        Q: Ny,
                        s: Ey,
                        S: ty,
                        u: ny,
                        U: ey,
                        V: ry,
                        w: iy,
                        W: uy,
                        x: null,
                        X: null,
                        y: oy,
                        Y: ay,
                        Z: cy,
                        '%': Sy,
                    },
                    m = {
                        a: function(t) {
                            return o[t.getUTCDay()]
                        },
                        A: function(t) {
                            return u[t.getUTCDay()]
                        },
                        b: function(t) {
                            return c[t.getUTCMonth()]
                        },
                        B: function(t) {
                            return a[t.getUTCMonth()]
                        },
                        c: null,
                        d: fy,
                        e: fy,
                        f: py,
                        H: sy,
                        I: ly,
                        j: hy,
                        L: dy,
                        m: vy,
                        M: yy,
                        p: function(t) {
                            return i[+(t.getUTCHours() >= 12)]
                        },
                        Q: Ny,
                        s: Ey,
                        S: gy,
                        u: by,
                        U: _y,
                        V: my,
                        w: xy,
                        W: wy,
                        x: null,
                        X: null,
                        y: My,
                        Y: ky,
                        Z: Ay,
                        '%': Sy,
                    },
                    x = {
                        a: function(t, n, e) {
                            var r = d.exec(n.slice(e))
                            return r
                                ? ((t.w = p[r[0].toLowerCase()]),
                                  e + r[0].length)
                                : -1
                        },
                        A: function(t, n, e) {
                            var r = l.exec(n.slice(e))
                            return r
                                ? ((t.w = h[r[0].toLowerCase()]),
                                  e + r[0].length)
                                : -1
                        },
                        b: function(t, n, e) {
                            var r = g.exec(n.slice(e))
                            return r
                                ? ((t.m = b[r[0].toLowerCase()]),
                                  e + r[0].length)
                                : -1
                        },
                        B: function(t, n, e) {
                            var r = v.exec(n.slice(e))
                            return r
                                ? ((t.m = y[r[0].toLowerCase()]),
                                  e + r[0].length)
                                : -1
                        },
                        c: function(t, e, r) {
                            return k(t, n, e, r)
                        },
                        d: Ov,
                        e: Ov,
                        f: Iv,
                        H: Uv,
                        I: Uv,
                        j: qv,
                        L: Yv,
                        m: Lv,
                        M: Bv,
                        p: function(t, n, e) {
                            var r = f.exec(n.slice(e))
                            return r
                                ? ((t.p = s[r[0].toLowerCase()]),
                                  e + r[0].length)
                                : -1
                        },
                        Q: Hv,
                        s: Gv,
                        S: Fv,
                        u: Ev,
                        U: Tv,
                        V: Cv,
                        w: Nv,
                        W: Pv,
                        x: function(t, n, r) {
                            return k(t, e, n, r)
                        },
                        X: function(t, n, e) {
                            return k(t, r, n, e)
                        },
                        y: Rv,
                        Y: zv,
                        Z: Dv,
                        '%': jv,
                    }
                function w(t, n) {
                    return function(e) {
                        var r,
                            i,
                            u,
                            o = [],
                            a = -1,
                            c = 0,
                            f = t.length
                        for (e instanceof Date || (e = new Date(+e)); ++a < f; )
                            37 === t.charCodeAt(a) &&
                                (o.push(t.slice(c, a)),
                                null != (i = _v[(r = t.charAt(++a))])
                                    ? (r = t.charAt(++a))
                                    : (i = 'e' === r ? ' ' : '0'),
                                (u = n[r]) && (r = u(e, i)),
                                o.push(r),
                                (c = a + 1))
                        return o.push(t.slice(c, a)), o.join('')
                    }
                }
                function M(t, n) {
                    return function(e) {
                        var r,
                            i,
                            u = hv(1900)
                        if (k(u, t, (e += ''), 0) != e.length) return null
                        if ('Q' in u) return new Date(u.Q)
                        if (
                            ('p' in u && (u.H = (u.H % 12) + 12 * u.p),
                            'V' in u)
                        ) {
                            if (u.V < 1 || u.V > 53) return null
                            'w' in u || (u.w = 1),
                                'Z' in u
                                    ? ((i = (r = lv(hv(u.y))).getUTCDay()),
                                      (r =
                                          i > 4 || 0 === i
                                              ? Gp.ceil(r)
                                              : Gp(r)),
                                      (r = Yp.offset(r, 7 * (u.V - 1))),
                                      (u.y = r.getUTCFullYear()),
                                      (u.m = r.getUTCMonth()),
                                      (u.d = r.getUTCDate() + ((u.w + 6) % 7)))
                                    : ((i = (r = n(hv(u.y))).getDay()),
                                      (r =
                                          i > 4 || 0 === i
                                              ? vp.ceil(r)
                                              : vp(r)),
                                      (r = lp.offset(r, 7 * (u.V - 1))),
                                      (u.y = r.getFullYear()),
                                      (u.m = r.getMonth()),
                                      (u.d = r.getDate() + ((u.w + 6) % 7)))
                        } else
                            ('W' in u || 'U' in u) &&
                                ('w' in u ||
                                    (u.w =
                                        'u' in u ? u.u % 7 : 'W' in u ? 1 : 0),
                                (i =
                                    'Z' in u
                                        ? lv(hv(u.y)).getUTCDay()
                                        : n(hv(u.y)).getDay()),
                                (u.m = 0),
                                (u.d =
                                    'W' in u
                                        ? ((u.w + 6) % 7) +
                                          7 * u.W -
                                          ((i + 5) % 7)
                                        : u.w + 7 * u.U - ((i + 6) % 7)))
                        return 'Z' in u
                            ? ((u.H += (u.Z / 100) | 0),
                              (u.M += u.Z % 100),
                              lv(u))
                            : n(u)
                    }
                }
                function k(t, n, e, r) {
                    for (var i, u, o = 0, a = n.length, c = e.length; o < a; ) {
                        if (r >= c) return -1
                        if (37 === (i = n.charCodeAt(o++))) {
                            if (
                                ((i = n.charAt(o++)),
                                !(u = x[i in _v ? n.charAt(o++) : i]) ||
                                    (r = u(t, e, r)) < 0)
                            )
                                return -1
                        } else if (i != e.charCodeAt(r++)) return -1
                    }
                    return r
                }
                return (
                    (_.x = w(e, _)),
                    (_.X = w(r, _)),
                    (_.c = w(n, _)),
                    (m.x = w(e, m)),
                    (m.X = w(r, m)),
                    (m.c = w(n, m)),
                    {
                        format: function(t) {
                            var n = w((t += ''), _)
                            return (
                                (n.toString = function() {
                                    return t
                                }),
                                n
                            )
                        },
                        parse: function(t) {
                            var n = M((t += ''), sv)
                            return (
                                (n.toString = function() {
                                    return t
                                }),
                                n
                            )
                        },
                        utcFormat: function(t) {
                            var n = w((t += ''), m)
                            return (
                                (n.toString = function() {
                                    return t
                                }),
                                n
                            )
                        },
                        utcParse: function(t) {
                            var n = M(t, lv)
                            return (
                                (n.toString = function() {
                                    return t
                                }),
                                n
                            )
                        },
                    }
                )
            }
            var pv,
                vv,
                yv,
                gv,
                bv,
                _v = { '-': '', _: ' ', 0: '0' },
                mv = /^\s*\d+/,
                xv = /^%/,
                wv = /[\\^$*+?|[\]().{}]/g
            function Mv(t, n, e) {
                var r = t < 0 ? '-' : '',
                    i = (r ? -t : t) + '',
                    u = i.length
                return r + (u < e ? new Array(e - u + 1).join(n) + i : i)
            }
            function kv(t) {
                return t.replace(wv, '\\$&')
            }
            function Av(t) {
                return new RegExp('^(?:' + t.map(kv).join('|') + ')', 'i')
            }
            function Sv(t) {
                for (var n = {}, e = -1, r = t.length; ++e < r; )
                    n[t[e].toLowerCase()] = e
                return n
            }
            function Nv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 1))
                return r ? ((t.w = +r[0]), e + r[0].length) : -1
            }
            function Ev(t, n, e) {
                var r = mv.exec(n.slice(e, e + 1))
                return r ? ((t.u = +r[0]), e + r[0].length) : -1
            }
            function Tv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 2))
                return r ? ((t.U = +r[0]), e + r[0].length) : -1
            }
            function Cv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 2))
                return r ? ((t.V = +r[0]), e + r[0].length) : -1
            }
            function Pv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 2))
                return r ? ((t.W = +r[0]), e + r[0].length) : -1
            }
            function zv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 4))
                return r ? ((t.y = +r[0]), e + r[0].length) : -1
            }
            function Rv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 2))
                return r
                    ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)),
                      e + r[0].length)
                    : -1
            }
            function Dv(t, n, e) {
                var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6))
                return r
                    ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))),
                      e + r[0].length)
                    : -1
            }
            function Lv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 2))
                return r ? ((t.m = r[0] - 1), e + r[0].length) : -1
            }
            function Ov(t, n, e) {
                var r = mv.exec(n.slice(e, e + 2))
                return r ? ((t.d = +r[0]), e + r[0].length) : -1
            }
            function qv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 3))
                return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1
            }
            function Uv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 2))
                return r ? ((t.H = +r[0]), e + r[0].length) : -1
            }
            function Bv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 2))
                return r ? ((t.M = +r[0]), e + r[0].length) : -1
            }
            function Fv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 2))
                return r ? ((t.S = +r[0]), e + r[0].length) : -1
            }
            function Yv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 3))
                return r ? ((t.L = +r[0]), e + r[0].length) : -1
            }
            function Iv(t, n, e) {
                var r = mv.exec(n.slice(e, e + 6))
                return r
                    ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length)
                    : -1
            }
            function jv(t, n, e) {
                var r = xv.exec(n.slice(e, e + 1))
                return r ? e + r[0].length : -1
            }
            function Hv(t, n, e) {
                var r = mv.exec(n.slice(e))
                return r ? ((t.Q = +r[0]), e + r[0].length) : -1
            }
            function Gv(t, n, e) {
                var r = mv.exec(n.slice(e))
                return r ? ((t.Q = 1e3 * +r[0]), e + r[0].length) : -1
            }
            function Xv(t, n) {
                return Mv(t.getDate(), n, 2)
            }
            function Vv(t, n) {
                return Mv(t.getHours(), n, 2)
            }
            function $v(t, n) {
                return Mv(t.getHours() % 12 || 12, n, 2)
            }
            function Wv(t, n) {
                return Mv(1 + lp.count(zp(t), t), n, 3)
            }
            function Zv(t, n) {
                return Mv(t.getMilliseconds(), n, 3)
            }
            function Qv(t, n) {
                return Zv(t, n) + '000'
            }
            function Jv(t, n) {
                return Mv(t.getMonth() + 1, n, 2)
            }
            function Kv(t, n) {
                return Mv(t.getMinutes(), n, 2)
            }
            function ty(t, n) {
                return Mv(t.getSeconds(), n, 2)
            }
            function ny(t) {
                var n = t.getDay()
                return 0 === n ? 7 : n
            }
            function ey(t, n) {
                return Mv(pp.count(zp(t), t), n, 2)
            }
            function ry(t, n) {
                var e = t.getDay()
                return (
                    (t = e >= 4 || 0 === e ? bp(t) : bp.ceil(t)),
                    Mv(bp.count(zp(t), t) + (4 === zp(t).getDay()), n, 2)
                )
            }
            function iy(t) {
                return t.getDay()
            }
            function uy(t, n) {
                return Mv(vp.count(zp(t), t), n, 2)
            }
            function oy(t, n) {
                return Mv(t.getFullYear() % 100, n, 2)
            }
            function ay(t, n) {
                return Mv(t.getFullYear() % 1e4, n, 4)
            }
            function cy(t) {
                var n = t.getTimezoneOffset()
                return (
                    (n > 0 ? '-' : ((n *= -1), '+')) +
                    Mv((n / 60) | 0, '0', 2) +
                    Mv(n % 60, '0', 2)
                )
            }
            function fy(t, n) {
                return Mv(t.getUTCDate(), n, 2)
            }
            function sy(t, n) {
                return Mv(t.getUTCHours(), n, 2)
            }
            function ly(t, n) {
                return Mv(t.getUTCHours() % 12 || 12, n, 2)
            }
            function hy(t, n) {
                return Mv(1 + Yp.count(cv(t), t), n, 3)
            }
            function dy(t, n) {
                return Mv(t.getUTCMilliseconds(), n, 3)
            }
            function py(t, n) {
                return dy(t, n) + '000'
            }
            function vy(t, n) {
                return Mv(t.getUTCMonth() + 1, n, 2)
            }
            function yy(t, n) {
                return Mv(t.getUTCMinutes(), n, 2)
            }
            function gy(t, n) {
                return Mv(t.getUTCSeconds(), n, 2)
            }
            function by(t) {
                var n = t.getUTCDay()
                return 0 === n ? 7 : n
            }
            function _y(t, n) {
                return Mv(Hp.count(cv(t), t), n, 2)
            }
            function my(t, n) {
                var e = t.getUTCDay()
                return (
                    (t = e >= 4 || 0 === e ? $p(t) : $p.ceil(t)),
                    Mv($p.count(cv(t), t) + (4 === cv(t).getUTCDay()), n, 2)
                )
            }
            function xy(t) {
                return t.getUTCDay()
            }
            function wy(t, n) {
                return Mv(Gp.count(cv(t), t), n, 2)
            }
            function My(t, n) {
                return Mv(t.getUTCFullYear() % 100, n, 2)
            }
            function ky(t, n) {
                return Mv(t.getUTCFullYear() % 1e4, n, 4)
            }
            function Ay() {
                return '+0000'
            }
            function Sy() {
                return '%'
            }
            function Ny(t) {
                return +t
            }
            function Ey(t) {
                return Math.floor(+t / 1e3)
            }
            function Ty(t) {
                return (
                    (pv = dv(t)),
                    (vv = pv.format),
                    (yv = pv.parse),
                    (gv = pv.utcFormat),
                    (bv = pv.utcParse),
                    pv
                )
            }
            Ty({
                dateTime: '%x, %X',
                date: '%-m/%-d/%Y',
                time: '%-I:%M:%S %p',
                periods: ['AM', 'PM'],
                days: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ],
                shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                shortMonths: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                ],
            })
            var Cy = Date.prototype.toISOString
                ? function(t) {
                      return t.toISOString()
                  }
                : gv('%Y-%m-%dT%H:%M:%S.%LZ')
            var Py = +new Date('2000-01-01T00:00:00.000Z')
                    ? function(t) {
                          var n = new Date(t)
                          return isNaN(n) ? null : n
                      }
                    : bv('%Y-%m-%dT%H:%M:%S.%LZ'),
                zy = 1e3,
                Ry = 60 * zy,
                Dy = 60 * Ry,
                Ly = 24 * Dy,
                Oy = 7 * Ly,
                qy = 30 * Ly,
                Uy = 365 * Ly
            function By(t) {
                return new Date(t)
            }
            function Fy(t) {
                return t instanceof Date ? +t : +new Date(+t)
            }
            function Yy(t, n, e, r, u, o, a, c, f) {
                var s = Ed(kd, Ie),
                    l = s.invert,
                    h = s.domain,
                    d = f('.%L'),
                    p = f(':%S'),
                    v = f('%I:%M'),
                    y = f('%I %p'),
                    g = f('%a %d'),
                    b = f('%b %d'),
                    _ = f('%B'),
                    m = f('%Y'),
                    x = [
                        [a, 1, zy],
                        [a, 5, 5 * zy],
                        [a, 15, 15 * zy],
                        [a, 30, 30 * zy],
                        [o, 1, Ry],
                        [o, 5, 5 * Ry],
                        [o, 15, 15 * Ry],
                        [o, 30, 30 * Ry],
                        [u, 1, Dy],
                        [u, 3, 3 * Dy],
                        [u, 6, 6 * Dy],
                        [u, 12, 12 * Dy],
                        [r, 1, Ly],
                        [r, 2, 2 * Ly],
                        [e, 1, Oy],
                        [n, 1, qy],
                        [n, 3, 3 * qy],
                        [t, 1, Uy],
                    ]
                function w(i) {
                    return (a(i) < i
                        ? d
                        : o(i) < i
                        ? p
                        : u(i) < i
                        ? v
                        : r(i) < i
                        ? y
                        : n(i) < i
                        ? e(i) < i
                            ? g
                            : b
                        : t(i) < i
                        ? _
                        : m)(i)
                }
                function M(n, e, r, u) {
                    if ((null == n && (n = 10), 'number' == typeof n)) {
                        var o = Math.abs(r - e) / n,
                            a = i(function(t) {
                                return t[2]
                            }).right(x, o)
                        a === x.length
                            ? ((u = E(e / Uy, r / Uy, n)), (n = t))
                            : a
                            ? ((u = (a =
                                  x[
                                      o / x[a - 1][2] < x[a][2] / o ? a - 1 : a
                                  ])[1]),
                              (n = a[0]))
                            : ((u = Math.max(E(e, r, n), 1)), (n = c))
                    }
                    return null == u ? n : n.every(u)
                }
                return (
                    (s.invert = function(t) {
                        return new Date(l(t))
                    }),
                    (s.domain = function(t) {
                        return arguments.length
                            ? h(vd.call(t, Fy))
                            : h().map(By)
                    }),
                    (s.ticks = function(t, n) {
                        var e,
                            r = h(),
                            i = r[0],
                            u = r[r.length - 1],
                            o = u < i
                        return (
                            o && ((e = i), (i = u), (u = e)),
                            (e = (e = M(t, i, u, n)) ? e.range(i, u + 1) : []),
                            o ? e.reverse() : e
                        )
                    }),
                    (s.tickFormat = function(t, n) {
                        return null == n ? w : f(n)
                    }),
                    (s.nice = function(t, n) {
                        var e = h()
                        return (t = M(t, e[0], e[e.length - 1], n))
                            ? h(Rd(e, t))
                            : s
                    }),
                    (s.copy = function() {
                        return Nd(s, Yy(t, n, e, r, u, o, a, c, f))
                    }),
                    s
                )
            }
            var Iy = function() {
                    return Yy(zp, Tp, pp, lp, cp, up, ep, Qd, vv).domain([
                        new Date(2e3, 0, 1),
                        new Date(2e3, 0, 2),
                    ])
                },
                jy = function() {
                    return Yy(cv, uv, Hp, Yp, Up, Lp, ep, Qd, gv).domain([
                        Date.UTC(2e3, 0, 1),
                        Date.UTC(2e3, 0, 2),
                    ])
                }
            function Hy(t) {
                var n = 0,
                    e = 1,
                    r = 1,
                    i = !1
                function u(e) {
                    var u = (e - n) * r
                    return t(i ? Math.max(0, Math.min(1, u)) : u)
                }
                return (
                    (u.domain = function(t) {
                        return arguments.length
                            ? ((n = +t[0]),
                              (e = +t[1]),
                              (r = n === e ? 0 : 1 / (e - n)),
                              u)
                            : [n, e]
                    }),
                    (u.clamp = function(t) {
                        return arguments.length ? ((i = !!t), u) : i
                    }),
                    (u.interpolator = function(n) {
                        return arguments.length ? ((t = n), u) : t
                    }),
                    (u.copy = function() {
                        return Hy(t)
                            .domain([n, e])
                            .clamp(i)
                    }),
                    Cd(u)
                )
            }
            function Gy(t) {
                var n = 0,
                    e = 0.5,
                    r = 1,
                    i = 1,
                    u = 1,
                    o = !1
                function a(n) {
                    var r = 0.5 + ((n = +n) - e) * (n < e ? i : u)
                    return t(o ? Math.max(0, Math.min(1, r)) : r)
                }
                return (
                    (a.domain = function(t) {
                        return arguments.length
                            ? ((n = +t[0]),
                              (e = +t[1]),
                              (r = +t[2]),
                              (i = n === e ? 0 : 0.5 / (e - n)),
                              (u = e === r ? 0 : 0.5 / (r - e)),
                              a)
                            : [n, e, r]
                    }),
                    (a.clamp = function(t) {
                        return arguments.length ? ((o = !!t), a) : o
                    }),
                    (a.interpolator = function(n) {
                        return arguments.length ? ((t = n), a) : t
                    }),
                    (a.copy = function() {
                        return Gy(t)
                            .domain([n, e, r])
                            .clamp(o)
                    }),
                    Cd(a)
                )
            }
            var Xy = function(t) {
                    for (
                        var n = (t.length / 6) | 0, e = new Array(n), r = 0;
                        r < n;

                    )
                        e[r] = '#' + t.slice(6 * r, 6 * ++r)
                    return e
                },
                Vy = Xy(
                    '1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf',
                ),
                $y = Xy('7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666'),
                Wy = Xy('1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666'),
                Zy = Xy(
                    'a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928',
                ),
                Qy = Xy(
                    'fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2',
                ),
                Jy = Xy('b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc'),
                Ky = Xy(
                    'e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999',
                ),
                tg = Xy('66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3'),
                ng = Xy(
                    '8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f',
                ),
                eg = function(t) {
                    return Ue(t[t.length - 1])
                },
                rg = new Array(3)
                    .concat(
                        'd8b365f5f5f55ab4ac',
                        'a6611adfc27d80cdc1018571',
                        'a6611adfc27df5f5f580cdc1018571',
                        '8c510ad8b365f6e8c3c7eae55ab4ac01665e',
                        '8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e',
                        '8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e',
                        '8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e',
                        '5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30',
                        '5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30',
                    )
                    .map(Xy),
                ig = eg(rg),
                ug = new Array(3)
                    .concat(
                        'af8dc3f7f7f77fbf7b',
                        '7b3294c2a5cfa6dba0008837',
                        '7b3294c2a5cff7f7f7a6dba0008837',
                        '762a83af8dc3e7d4e8d9f0d37fbf7b1b7837',
                        '762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837',
                        '762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837',
                        '762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837',
                        '40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b',
                        '40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b',
                    )
                    .map(Xy),
                og = eg(ug),
                ag = new Array(3)
                    .concat(
                        'e9a3c9f7f7f7a1d76a',
                        'd01c8bf1b6dab8e1864dac26',
                        'd01c8bf1b6daf7f7f7b8e1864dac26',
                        'c51b7de9a3c9fde0efe6f5d0a1d76a4d9221',
                        'c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221',
                        'c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221',
                        'c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221',
                        '8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419',
                        '8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419',
                    )
                    .map(Xy),
                cg = eg(ag),
                fg = new Array(3)
                    .concat(
                        '998ec3f7f7f7f1a340',
                        '5e3c99b2abd2fdb863e66101',
                        '5e3c99b2abd2f7f7f7fdb863e66101',
                        '542788998ec3d8daebfee0b6f1a340b35806',
                        '542788998ec3d8daebf7f7f7fee0b6f1a340b35806',
                        '5427888073acb2abd2d8daebfee0b6fdb863e08214b35806',
                        '5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806',
                        '2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08',
                        '2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08',
                    )
                    .map(Xy),
                sg = eg(fg),
                lg = new Array(3)
                    .concat(
                        'ef8a62f7f7f767a9cf',
                        'ca0020f4a58292c5de0571b0',
                        'ca0020f4a582f7f7f792c5de0571b0',
                        'b2182bef8a62fddbc7d1e5f067a9cf2166ac',
                        'b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac',
                        'b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac',
                        'b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac',
                        '67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061',
                        '67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061',
                    )
                    .map(Xy),
                hg = eg(lg),
                dg = new Array(3)
                    .concat(
                        'ef8a62ffffff999999',
                        'ca0020f4a582bababa404040',
                        'ca0020f4a582ffffffbababa404040',
                        'b2182bef8a62fddbc7e0e0e09999994d4d4d',
                        'b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d',
                        'b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d',
                        'b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d',
                        '67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a',
                        '67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a',
                    )
                    .map(Xy),
                pg = eg(dg),
                vg = new Array(3)
                    .concat(
                        'fc8d59ffffbf91bfdb',
                        'd7191cfdae61abd9e92c7bb6',
                        'd7191cfdae61ffffbfabd9e92c7bb6',
                        'd73027fc8d59fee090e0f3f891bfdb4575b4',
                        'd73027fc8d59fee090ffffbfe0f3f891bfdb4575b4',
                        'd73027f46d43fdae61fee090e0f3f8abd9e974add14575b4',
                        'd73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4',
                        'a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695',
                        'a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695',
                    )
                    .map(Xy),
                yg = eg(vg),
                gg = new Array(3)
                    .concat(
                        'fc8d59ffffbf91cf60',
                        'd7191cfdae61a6d96a1a9641',
                        'd7191cfdae61ffffbfa6d96a1a9641',
                        'd73027fc8d59fee08bd9ef8b91cf601a9850',
                        'd73027fc8d59fee08bffffbfd9ef8b91cf601a9850',
                        'd73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850',
                        'd73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850',
                        'a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837',
                        'a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837',
                    )
                    .map(Xy),
                bg = eg(gg),
                _g = new Array(3)
                    .concat(
                        'fc8d59ffffbf99d594',
                        'd7191cfdae61abdda42b83ba',
                        'd7191cfdae61ffffbfabdda42b83ba',
                        'd53e4ffc8d59fee08be6f59899d5943288bd',
                        'd53e4ffc8d59fee08bffffbfe6f59899d5943288bd',
                        'd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd',
                        'd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd',
                        '9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2',
                        '9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2',
                    )
                    .map(Xy),
                mg = eg(_g),
                xg = new Array(3)
                    .concat(
                        'e5f5f999d8c92ca25f',
                        'edf8fbb2e2e266c2a4238b45',
                        'edf8fbb2e2e266c2a42ca25f006d2c',
                        'edf8fbccece699d8c966c2a42ca25f006d2c',
                        'edf8fbccece699d8c966c2a441ae76238b45005824',
                        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824',
                        'f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b',
                    )
                    .map(Xy),
                wg = eg(xg),
                Mg = new Array(3)
                    .concat(
                        'e0ecf49ebcda8856a7',
                        'edf8fbb3cde38c96c688419d',
                        'edf8fbb3cde38c96c68856a7810f7c',
                        'edf8fbbfd3e69ebcda8c96c68856a7810f7c',
                        'edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b',
                        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b',
                        'f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b',
                    )
                    .map(Xy),
                kg = eg(Mg),
                Ag = new Array(3)
                    .concat(
                        'e0f3dba8ddb543a2ca',
                        'f0f9e8bae4bc7bccc42b8cbe',
                        'f0f9e8bae4bc7bccc443a2ca0868ac',
                        'f0f9e8ccebc5a8ddb57bccc443a2ca0868ac',
                        'f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e',
                        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e',
                        'f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081',
                    )
                    .map(Xy),
                Sg = eg(Ag),
                Ng = new Array(3)
                    .concat(
                        'fee8c8fdbb84e34a33',
                        'fef0d9fdcc8afc8d59d7301f',
                        'fef0d9fdcc8afc8d59e34a33b30000',
                        'fef0d9fdd49efdbb84fc8d59e34a33b30000',
                        'fef0d9fdd49efdbb84fc8d59ef6548d7301f990000',
                        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000',
                        'fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000',
                    )
                    .map(Xy),
                Eg = eg(Ng),
                Tg = new Array(3)
                    .concat(
                        'ece2f0a6bddb1c9099',
                        'f6eff7bdc9e167a9cf02818a',
                        'f6eff7bdc9e167a9cf1c9099016c59',
                        'f6eff7d0d1e6a6bddb67a9cf1c9099016c59',
                        'f6eff7d0d1e6a6bddb67a9cf3690c002818a016450',
                        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450',
                        'fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636',
                    )
                    .map(Xy),
                Cg = eg(Tg),
                Pg = new Array(3)
                    .concat(
                        'ece7f2a6bddb2b8cbe',
                        'f1eef6bdc9e174a9cf0570b0',
                        'f1eef6bdc9e174a9cf2b8cbe045a8d',
                        'f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d',
                        'f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b',
                        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b',
                        'fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858',
                    )
                    .map(Xy),
                zg = eg(Pg),
                Rg = new Array(3)
                    .concat(
                        'e7e1efc994c7dd1c77',
                        'f1eef6d7b5d8df65b0ce1256',
                        'f1eef6d7b5d8df65b0dd1c77980043',
                        'f1eef6d4b9dac994c7df65b0dd1c77980043',
                        'f1eef6d4b9dac994c7df65b0e7298ace125691003f',
                        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f',
                        'f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f',
                    )
                    .map(Xy),
                Dg = eg(Rg),
                Lg = new Array(3)
                    .concat(
                        'fde0ddfa9fb5c51b8a',
                        'feebe2fbb4b9f768a1ae017e',
                        'feebe2fbb4b9f768a1c51b8a7a0177',
                        'feebe2fcc5c0fa9fb5f768a1c51b8a7a0177',
                        'feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177',
                        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177',
                        'fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a',
                    )
                    .map(Xy),
                Og = eg(Lg),
                qg = new Array(3)
                    .concat(
                        'edf8b17fcdbb2c7fb8',
                        'ffffcca1dab441b6c4225ea8',
                        'ffffcca1dab441b6c42c7fb8253494',
                        'ffffccc7e9b47fcdbb41b6c42c7fb8253494',
                        'ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84',
                        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84',
                        'ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58',
                    )
                    .map(Xy),
                Ug = eg(qg),
                Bg = new Array(3)
                    .concat(
                        'f7fcb9addd8e31a354',
                        'ffffccc2e69978c679238443',
                        'ffffccc2e69978c67931a354006837',
                        'ffffccd9f0a3addd8e78c67931a354006837',
                        'ffffccd9f0a3addd8e78c67941ab5d238443005a32',
                        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32',
                        'ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529',
                    )
                    .map(Xy),
                Fg = eg(Bg),
                Yg = new Array(3)
                    .concat(
                        'fff7bcfec44fd95f0e',
                        'ffffd4fed98efe9929cc4c02',
                        'ffffd4fed98efe9929d95f0e993404',
                        'ffffd4fee391fec44ffe9929d95f0e993404',
                        'ffffd4fee391fec44ffe9929ec7014cc4c028c2d04',
                        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04',
                        'ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506',
                    )
                    .map(Xy),
                Ig = eg(Yg),
                jg = new Array(3)
                    .concat(
                        'ffeda0feb24cf03b20',
                        'ffffb2fecc5cfd8d3ce31a1c',
                        'ffffb2fecc5cfd8d3cf03b20bd0026',
                        'ffffb2fed976feb24cfd8d3cf03b20bd0026',
                        'ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026',
                        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026',
                        'ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026',
                    )
                    .map(Xy),
                Hg = eg(jg),
                Gg = new Array(3)
                    .concat(
                        'deebf79ecae13182bd',
                        'eff3ffbdd7e76baed62171b5',
                        'eff3ffbdd7e76baed63182bd08519c',
                        'eff3ffc6dbef9ecae16baed63182bd08519c',
                        'eff3ffc6dbef9ecae16baed64292c62171b5084594',
                        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594',
                        'f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b',
                    )
                    .map(Xy),
                Xg = eg(Gg),
                Vg = new Array(3)
                    .concat(
                        'e5f5e0a1d99b31a354',
                        'edf8e9bae4b374c476238b45',
                        'edf8e9bae4b374c47631a354006d2c',
                        'edf8e9c7e9c0a1d99b74c47631a354006d2c',
                        'edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32',
                        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32',
                        'f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b',
                    )
                    .map(Xy),
                $g = eg(Vg),
                Wg = new Array(3)
                    .concat(
                        'f0f0f0bdbdbd636363',
                        'f7f7f7cccccc969696525252',
                        'f7f7f7cccccc969696636363252525',
                        'f7f7f7d9d9d9bdbdbd969696636363252525',
                        'f7f7f7d9d9d9bdbdbd969696737373525252252525',
                        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525',
                        'fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000',
                    )
                    .map(Xy),
                Zg = eg(Wg),
                Qg = new Array(3)
                    .concat(
                        'efedf5bcbddc756bb1',
                        'f2f0f7cbc9e29e9ac86a51a3',
                        'f2f0f7cbc9e29e9ac8756bb154278f',
                        'f2f0f7dadaebbcbddc9e9ac8756bb154278f',
                        'f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486',
                        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486',
                        'fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d',
                    )
                    .map(Xy),
                Jg = eg(Qg),
                Kg = new Array(3)
                    .concat(
                        'fee0d2fc9272de2d26',
                        'fee5d9fcae91fb6a4acb181d',
                        'fee5d9fcae91fb6a4ade2d26a50f15',
                        'fee5d9fcbba1fc9272fb6a4ade2d26a50f15',
                        'fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d',
                        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d',
                        'fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d',
                    )
                    .map(Xy),
                tb = eg(Kg),
                nb = new Array(3)
                    .concat(
                        'fee6cefdae6be6550d',
                        'feeddefdbe85fd8d3cd94701',
                        'feeddefdbe85fd8d3ce6550da63603',
                        'feeddefdd0a2fdae6bfd8d3ce6550da63603',
                        'feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04',
                        'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04',
                        'fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704',
                    )
                    .map(Xy),
                eb = eg(nb),
                rb = _r(Se(300, 0.5, 0), Se(-240, 0.5, 1)),
                ib = _r(Se(-100, 0.75, 0.35), Se(80, 1.5, 0.8)),
                ub = _r(Se(260, 0.75, 0.35), Se(80, 1.5, 0.8)),
                ob = Se(),
                ab = function(t) {
                    ;(t < 0 || t > 1) && (t -= Math.floor(t))
                    var n = Math.abs(t - 0.5)
                    return (
                        (ob.h = 360 * t - 100),
                        (ob.s = 1.5 - 1.5 * n),
                        (ob.l = 0.8 - 0.9 * n),
                        ob + ''
                    )
                },
                cb = Xn(),
                fb = Math.PI / 3,
                sb = (2 * Math.PI) / 3,
                lb = function(t) {
                    var n
                    return (
                        (t = (0.5 - t) * Math.PI),
                        (cb.r = 255 * (n = Math.sin(t)) * n),
                        (cb.g = 255 * (n = Math.sin(t + fb)) * n),
                        (cb.b = 255 * (n = Math.sin(t + sb)) * n),
                        cb + ''
                    )
                }
            function hb(t) {
                var n = t.length
                return function(e) {
                    return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
                }
            }
            var db = hb(
                    Xy(
                        '44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725',
                    ),
                ),
                pb = hb(
                    Xy(
                        '00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf',
                    ),
                ),
                vb = hb(
                    Xy(
                        '00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4',
                    ),
                ),
                yb = hb(
                    Xy(
                        '0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921',
                    ),
                ),
                gb = function(t) {
                    return function() {
                        return t
                    }
                },
                bb = Math.abs,
                _b = Math.atan2,
                mb = Math.cos,
                xb = Math.max,
                wb = Math.min,
                Mb = Math.sin,
                kb = Math.sqrt,
                Ab = 1e-12,
                Sb = Math.PI,
                Nb = Sb / 2,
                Eb = 2 * Sb
            function Tb(t) {
                return t >= 1 ? Nb : t <= -1 ? -Nb : Math.asin(t)
            }
            function Cb(t) {
                return t.innerRadius
            }
            function Pb(t) {
                return t.outerRadius
            }
            function zb(t) {
                return t.startAngle
            }
            function Rb(t) {
                return t.endAngle
            }
            function Db(t) {
                return t && t.padAngle
            }
            function Lb(t, n, e, r, i, u, o) {
                var a = t - e,
                    c = n - r,
                    f = (o ? u : -u) / kb(a * a + c * c),
                    s = f * c,
                    l = -f * a,
                    h = t + s,
                    d = n + l,
                    p = e + s,
                    v = r + l,
                    y = (h + p) / 2,
                    g = (d + v) / 2,
                    b = p - h,
                    _ = v - d,
                    m = b * b + _ * _,
                    x = i - u,
                    w = h * v - p * d,
                    M = (_ < 0 ? -1 : 1) * kb(xb(0, x * x * m - w * w)),
                    k = (w * _ - b * M) / m,
                    A = (-w * b - _ * M) / m,
                    S = (w * _ + b * M) / m,
                    N = (-w * b + _ * M) / m,
                    E = k - y,
                    T = A - g,
                    C = S - y,
                    P = N - g
                return (
                    E * E + T * T > C * C + P * P && ((k = S), (A = N)),
                    {
                        cx: k,
                        cy: A,
                        x01: -s,
                        y01: -l,
                        x11: k * (i / x - 1),
                        y11: A * (i / x - 1),
                    }
                )
            }
            var Ob = function() {
                var t = Cb,
                    n = Pb,
                    e = gb(0),
                    r = null,
                    i = zb,
                    u = Rb,
                    o = Db,
                    a = null
                function c() {
                    var c,
                        f,
                        s,
                        l = +t.apply(this, arguments),
                        h = +n.apply(this, arguments),
                        d = i.apply(this, arguments) - Nb,
                        p = u.apply(this, arguments) - Nb,
                        v = bb(p - d),
                        y = p > d
                    if (
                        (a || (a = c = Iu()),
                        h < l && ((f = h), (h = l), (l = f)),
                        h > Ab)
                    )
                        if (v > Eb - Ab)
                            a.moveTo(h * mb(d), h * Mb(d)),
                                a.arc(0, 0, h, d, p, !y),
                                l > Ab &&
                                    (a.moveTo(l * mb(p), l * Mb(p)),
                                    a.arc(0, 0, l, p, d, y))
                        else {
                            var g,
                                b,
                                _ = d,
                                m = p,
                                x = d,
                                w = p,
                                M = v,
                                k = v,
                                A = o.apply(this, arguments) / 2,
                                S =
                                    A > Ab &&
                                    (r
                                        ? +r.apply(this, arguments)
                                        : kb(l * l + h * h)),
                                N = wb(
                                    bb(h - l) / 2,
                                    +e.apply(this, arguments),
                                ),
                                E = N,
                                T = N
                            if (S > Ab) {
                                var C = Tb((S / l) * Mb(A)),
                                    P = Tb((S / h) * Mb(A))
                                ;(M -= 2 * C) > Ab
                                    ? ((x += C *= y ? 1 : -1), (w -= C))
                                    : ((M = 0), (x = w = (d + p) / 2)),
                                    (k -= 2 * P) > Ab
                                        ? ((_ += P *= y ? 1 : -1), (m -= P))
                                        : ((k = 0), (_ = m = (d + p) / 2))
                            }
                            var z = h * mb(_),
                                R = h * Mb(_),
                                D = l * mb(w),
                                L = l * Mb(w)
                            if (N > Ab) {
                                var O = h * mb(m),
                                    q = h * Mb(m),
                                    U = l * mb(x),
                                    B = l * Mb(x)
                                if (v < Sb) {
                                    var F =
                                            M > Ab
                                                ? (function(
                                                      t,
                                                      n,
                                                      e,
                                                      r,
                                                      i,
                                                      u,
                                                      o,
                                                      a,
                                                  ) {
                                                      var c = e - t,
                                                          f = r - n,
                                                          s = o - i,
                                                          l = a - u,
                                                          h =
                                                              (s * (n - u) -
                                                                  l * (t - i)) /
                                                              (l * c - s * f)
                                                      return [
                                                          t + h * c,
                                                          n + h * f,
                                                      ]
                                                  })(z, R, U, B, O, q, D, L)
                                                : [D, L],
                                        Y = z - F[0],
                                        I = R - F[1],
                                        j = O - F[0],
                                        H = q - F[1],
                                        G =
                                            1 /
                                            Mb(
                                                ((s =
                                                    (Y * j + I * H) /
                                                    (kb(Y * Y + I * I) *
                                                        kb(j * j + H * H))) > 1
                                                    ? 0
                                                    : s < -1
                                                    ? Sb
                                                    : Math.acos(s)) / 2,
                                            ),
                                        X = kb(F[0] * F[0] + F[1] * F[1])
                                    ;(E = wb(N, (l - X) / (G - 1))),
                                        (T = wb(N, (h - X) / (G + 1)))
                                }
                            }
                            k > Ab
                                ? T > Ab
                                    ? ((g = Lb(U, B, z, R, h, T, y)),
                                      (b = Lb(O, q, D, L, h, T, y)),
                                      a.moveTo(g.cx + g.x01, g.cy + g.y01),
                                      T < N
                                          ? a.arc(
                                                g.cx,
                                                g.cy,
                                                T,
                                                _b(g.y01, g.x01),
                                                _b(b.y01, b.x01),
                                                !y,
                                            )
                                          : (a.arc(
                                                g.cx,
                                                g.cy,
                                                T,
                                                _b(g.y01, g.x01),
                                                _b(g.y11, g.x11),
                                                !y,
                                            ),
                                            a.arc(
                                                0,
                                                0,
                                                h,
                                                _b(g.cy + g.y11, g.cx + g.x11),
                                                _b(b.cy + b.y11, b.cx + b.x11),
                                                !y,
                                            ),
                                            a.arc(
                                                b.cx,
                                                b.cy,
                                                T,
                                                _b(b.y11, b.x11),
                                                _b(b.y01, b.x01),
                                                !y,
                                            )))
                                    : (a.moveTo(z, R), a.arc(0, 0, h, _, m, !y))
                                : a.moveTo(z, R),
                                l > Ab && M > Ab
                                    ? E > Ab
                                        ? ((g = Lb(D, L, O, q, l, -E, y)),
                                          (b = Lb(z, R, U, B, l, -E, y)),
                                          a.lineTo(g.cx + g.x01, g.cy + g.y01),
                                          E < N
                                              ? a.arc(
                                                    g.cx,
                                                    g.cy,
                                                    E,
                                                    _b(g.y01, g.x01),
                                                    _b(b.y01, b.x01),
                                                    !y,
                                                )
                                              : (a.arc(
                                                    g.cx,
                                                    g.cy,
                                                    E,
                                                    _b(g.y01, g.x01),
                                                    _b(g.y11, g.x11),
                                                    !y,
                                                ),
                                                a.arc(
                                                    0,
                                                    0,
                                                    l,
                                                    _b(
                                                        g.cy + g.y11,
                                                        g.cx + g.x11,
                                                    ),
                                                    _b(
                                                        b.cy + b.y11,
                                                        b.cx + b.x11,
                                                    ),
                                                    y,
                                                ),
                                                a.arc(
                                                    b.cx,
                                                    b.cy,
                                                    E,
                                                    _b(b.y11, b.x11),
                                                    _b(b.y01, b.x01),
                                                    !y,
                                                )))
                                        : a.arc(0, 0, l, w, x, y)
                                    : a.lineTo(D, L)
                        }
                    else a.moveTo(0, 0)
                    if ((a.closePath(), c)) return (a = null), c + '' || null
                }
                return (
                    (c.centroid = function() {
                        var e =
                                (+t.apply(this, arguments) +
                                    +n.apply(this, arguments)) /
                                2,
                            r =
                                (+i.apply(this, arguments) +
                                    +u.apply(this, arguments)) /
                                    2 -
                                Sb / 2
                        return [mb(r) * e, Mb(r) * e]
                    }),
                    (c.innerRadius = function(n) {
                        return arguments.length
                            ? ((t = 'function' == typeof n ? n : gb(+n)), c)
                            : t
                    }),
                    (c.outerRadius = function(t) {
                        return arguments.length
                            ? ((n = 'function' == typeof t ? t : gb(+t)), c)
                            : n
                    }),
                    (c.cornerRadius = function(t) {
                        return arguments.length
                            ? ((e = 'function' == typeof t ? t : gb(+t)), c)
                            : e
                    }),
                    (c.padRadius = function(t) {
                        return arguments.length
                            ? ((r =
                                  null == t
                                      ? null
                                      : 'function' == typeof t
                                      ? t
                                      : gb(+t)),
                              c)
                            : r
                    }),
                    (c.startAngle = function(t) {
                        return arguments.length
                            ? ((i = 'function' == typeof t ? t : gb(+t)), c)
                            : i
                    }),
                    (c.endAngle = function(t) {
                        return arguments.length
                            ? ((u = 'function' == typeof t ? t : gb(+t)), c)
                            : u
                    }),
                    (c.padAngle = function(t) {
                        return arguments.length
                            ? ((o = 'function' == typeof t ? t : gb(+t)), c)
                            : o
                    }),
                    (c.context = function(t) {
                        return arguments.length
                            ? ((a = null == t ? null : t), c)
                            : a
                    }),
                    c
                )
            }
            function qb(t) {
                this._context = t
            }
            qb.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    ;(this._line || (0 !== this._line && 1 === this._point)) &&
                        this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(t, n) {
                    switch (((t = +t), (n = +n), this._point)) {
                        case 0:
                            ;(this._point = 1),
                                this._line
                                    ? this._context.lineTo(t, n)
                                    : this._context.moveTo(t, n)
                            break
                        case 1:
                            this._point = 2
                        default:
                            this._context.lineTo(t, n)
                    }
                },
            }
            var Ub = function(t) {
                return new qb(t)
            }
            function Bb(t) {
                return t[0]
            }
            function Fb(t) {
                return t[1]
            }
            var Yb = function() {
                    var t = Bb,
                        n = Fb,
                        e = gb(!0),
                        r = null,
                        i = Ub,
                        u = null
                    function o(o) {
                        var a,
                            c,
                            f,
                            s = o.length,
                            l = !1
                        for (
                            null == r && (u = i((f = Iu()))), a = 0;
                            a <= s;
                            ++a
                        )
                            !(a < s && e((c = o[a]), a, o)) === l &&
                                ((l = !l) ? u.lineStart() : u.lineEnd()),
                                l && u.point(+t(c, a, o), +n(c, a, o))
                        if (f) return (u = null), f + '' || null
                    }
                    return (
                        (o.x = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : gb(+n)), o)
                                : t
                        }),
                        (o.y = function(t) {
                            return arguments.length
                                ? ((n = 'function' == typeof t ? t : gb(+t)), o)
                                : n
                        }),
                        (o.defined = function(t) {
                            return arguments.length
                                ? ((e = 'function' == typeof t ? t : gb(!!t)),
                                  o)
                                : e
                        }),
                        (o.curve = function(t) {
                            return arguments.length
                                ? ((i = t), null != r && (u = i(r)), o)
                                : i
                        }),
                        (o.context = function(t) {
                            return arguments.length
                                ? (null == t
                                      ? (r = u = null)
                                      : (u = i((r = t))),
                                  o)
                                : r
                        }),
                        o
                    )
                },
                Ib = function() {
                    var t = Bb,
                        n = null,
                        e = gb(0),
                        r = Fb,
                        i = gb(!0),
                        u = null,
                        o = Ub,
                        a = null
                    function c(c) {
                        var f,
                            s,
                            l,
                            h,
                            d,
                            p = c.length,
                            v = !1,
                            y = new Array(p),
                            g = new Array(p)
                        for (
                            null == u && (a = o((d = Iu()))), f = 0;
                            f <= p;
                            ++f
                        ) {
                            if (!(f < p && i((h = c[f]), f, c)) === v)
                                if ((v = !v))
                                    (s = f), a.areaStart(), a.lineStart()
                                else {
                                    for (
                                        a.lineEnd(), a.lineStart(), l = f - 1;
                                        l >= s;
                                        --l
                                    )
                                        a.point(y[l], g[l])
                                    a.lineEnd(), a.areaEnd()
                                }
                            v &&
                                ((y[f] = +t(h, f, c)),
                                (g[f] = +e(h, f, c)),
                                a.point(
                                    n ? +n(h, f, c) : y[f],
                                    r ? +r(h, f, c) : g[f],
                                ))
                        }
                        if (d) return (a = null), d + '' || null
                    }
                    function f() {
                        return Yb()
                            .defined(i)
                            .curve(o)
                            .context(u)
                    }
                    return (
                        (c.x = function(e) {
                            return arguments.length
                                ? ((t = 'function' == typeof e ? e : gb(+e)),
                                  (n = null),
                                  c)
                                : t
                        }),
                        (c.x0 = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : gb(+n)), c)
                                : t
                        }),
                        (c.x1 = function(t) {
                            return arguments.length
                                ? ((n =
                                      null == t
                                          ? null
                                          : 'function' == typeof t
                                          ? t
                                          : gb(+t)),
                                  c)
                                : n
                        }),
                        (c.y = function(t) {
                            return arguments.length
                                ? ((e = 'function' == typeof t ? t : gb(+t)),
                                  (r = null),
                                  c)
                                : e
                        }),
                        (c.y0 = function(t) {
                            return arguments.length
                                ? ((e = 'function' == typeof t ? t : gb(+t)), c)
                                : e
                        }),
                        (c.y1 = function(t) {
                            return arguments.length
                                ? ((r =
                                      null == t
                                          ? null
                                          : 'function' == typeof t
                                          ? t
                                          : gb(+t)),
                                  c)
                                : r
                        }),
                        (c.lineX0 = c.lineY0 = function() {
                            return f()
                                .x(t)
                                .y(e)
                        }),
                        (c.lineY1 = function() {
                            return f()
                                .x(t)
                                .y(r)
                        }),
                        (c.lineX1 = function() {
                            return f()
                                .x(n)
                                .y(e)
                        }),
                        (c.defined = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : gb(!!t)),
                                  c)
                                : i
                        }),
                        (c.curve = function(t) {
                            return arguments.length
                                ? ((o = t), null != u && (a = o(u)), c)
                                : o
                        }),
                        (c.context = function(t) {
                            return arguments.length
                                ? (null == t
                                      ? (u = a = null)
                                      : (a = o((u = t))),
                                  c)
                                : u
                        }),
                        c
                    )
                },
                jb = function(t, n) {
                    return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
                },
                Hb = function(t) {
                    return t
                },
                Gb = function() {
                    var t = Hb,
                        n = jb,
                        e = null,
                        r = gb(0),
                        i = gb(Eb),
                        u = gb(0)
                    function o(o) {
                        var a,
                            c,
                            f,
                            s,
                            l,
                            h = o.length,
                            d = 0,
                            p = new Array(h),
                            v = new Array(h),
                            y = +r.apply(this, arguments),
                            g = Math.min(
                                Eb,
                                Math.max(-Eb, i.apply(this, arguments) - y),
                            ),
                            b = Math.min(
                                Math.abs(g) / h,
                                u.apply(this, arguments),
                            ),
                            _ = b * (g < 0 ? -1 : 1)
                        for (a = 0; a < h; ++a)
                            (l = v[(p[a] = a)] = +t(o[a], a, o)) > 0 && (d += l)
                        for (
                            null != n
                                ? p.sort(function(t, e) {
                                      return n(v[t], v[e])
                                  })
                                : null != e &&
                                  p.sort(function(t, n) {
                                      return e(o[t], o[n])
                                  }),
                                a = 0,
                                f = d ? (g - h * _) / d : 0;
                            a < h;
                            ++a, y = s
                        )
                            (c = p[a]),
                                (s = y + ((l = v[c]) > 0 ? l * f : 0) + _),
                                (v[c] = {
                                    data: o[c],
                                    index: a,
                                    value: l,
                                    startAngle: y,
                                    endAngle: s,
                                    padAngle: b,
                                })
                        return v
                    }
                    return (
                        (o.value = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : gb(+n)), o)
                                : t
                        }),
                        (o.sortValues = function(t) {
                            return arguments.length
                                ? ((n = t), (e = null), o)
                                : n
                        }),
                        (o.sort = function(t) {
                            return arguments.length
                                ? ((e = t), (n = null), o)
                                : e
                        }),
                        (o.startAngle = function(t) {
                            return arguments.length
                                ? ((r = 'function' == typeof t ? t : gb(+t)), o)
                                : r
                        }),
                        (o.endAngle = function(t) {
                            return arguments.length
                                ? ((i = 'function' == typeof t ? t : gb(+t)), o)
                                : i
                        }),
                        (o.padAngle = function(t) {
                            return arguments.length
                                ? ((u = 'function' == typeof t ? t : gb(+t)), o)
                                : u
                        }),
                        o
                    )
                },
                Xb = $b(Ub)
            function Vb(t) {
                this._curve = t
            }
            function $b(t) {
                function n(n) {
                    return new Vb(t(n))
                }
                return (n._curve = t), n
            }
            function Wb(t) {
                var n = t.curve
                return (
                    (t.angle = t.x),
                    delete t.x,
                    (t.radius = t.y),
                    delete t.y,
                    (t.curve = function(t) {
                        return arguments.length ? n($b(t)) : n()._curve
                    }),
                    t
                )
            }
            Vb.prototype = {
                areaStart: function() {
                    this._curve.areaStart()
                },
                areaEnd: function() {
                    this._curve.areaEnd()
                },
                lineStart: function() {
                    this._curve.lineStart()
                },
                lineEnd: function() {
                    this._curve.lineEnd()
                },
                point: function(t, n) {
                    this._curve.point(n * Math.sin(t), n * -Math.cos(t))
                },
            }
            var Zb = function() {
                    return Wb(Yb().curve(Xb))
                },
                Qb = function() {
                    var t = Ib().curve(Xb),
                        n = t.curve,
                        e = t.lineX0,
                        r = t.lineX1,
                        i = t.lineY0,
                        u = t.lineY1
                    return (
                        (t.angle = t.x),
                        delete t.x,
                        (t.startAngle = t.x0),
                        delete t.x0,
                        (t.endAngle = t.x1),
                        delete t.x1,
                        (t.radius = t.y),
                        delete t.y,
                        (t.innerRadius = t.y0),
                        delete t.y0,
                        (t.outerRadius = t.y1),
                        delete t.y1,
                        (t.lineStartAngle = function() {
                            return Wb(e())
                        }),
                        delete t.lineX0,
                        (t.lineEndAngle = function() {
                            return Wb(r())
                        }),
                        delete t.lineX1,
                        (t.lineInnerRadius = function() {
                            return Wb(i())
                        }),
                        delete t.lineY0,
                        (t.lineOuterRadius = function() {
                            return Wb(u())
                        }),
                        delete t.lineY1,
                        (t.curve = function(t) {
                            return arguments.length ? n($b(t)) : n()._curve
                        }),
                        t
                    )
                },
                Jb = function(t, n) {
                    return [
                        (n = +n) * Math.cos((t -= Math.PI / 2)),
                        n * Math.sin(t),
                    ]
                },
                Kb = Array.prototype.slice
            function t_(t) {
                return t.source
            }
            function n_(t) {
                return t.target
            }
            function e_(t) {
                var n = t_,
                    e = n_,
                    r = Bb,
                    i = Fb,
                    u = null
                function o() {
                    var o,
                        a = Kb.call(arguments),
                        c = n.apply(this, a),
                        f = e.apply(this, a)
                    if (
                        (u || (u = o = Iu()),
                        t(
                            u,
                            +r.apply(this, ((a[0] = c), a)),
                            +i.apply(this, a),
                            +r.apply(this, ((a[0] = f), a)),
                            +i.apply(this, a),
                        ),
                        o)
                    )
                        return (u = null), o + '' || null
                }
                return (
                    (o.source = function(t) {
                        return arguments.length ? ((n = t), o) : n
                    }),
                    (o.target = function(t) {
                        return arguments.length ? ((e = t), o) : e
                    }),
                    (o.x = function(t) {
                        return arguments.length
                            ? ((r = 'function' == typeof t ? t : gb(+t)), o)
                            : r
                    }),
                    (o.y = function(t) {
                        return arguments.length
                            ? ((i = 'function' == typeof t ? t : gb(+t)), o)
                            : i
                    }),
                    (o.context = function(t) {
                        return arguments.length
                            ? ((u = null == t ? null : t), o)
                            : u
                    }),
                    o
                )
            }
            function r_(t, n, e, r, i) {
                t.moveTo(n, e),
                    t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i)
            }
            function i_(t, n, e, r, i) {
                t.moveTo(n, e),
                    t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i)
            }
            function u_(t, n, e, r, i) {
                var u = Jb(n, e),
                    o = Jb(n, (e = (e + i) / 2)),
                    a = Jb(r, e),
                    c = Jb(r, i)
                t.moveTo(u[0], u[1]),
                    t.bezierCurveTo(o[0], o[1], a[0], a[1], c[0], c[1])
            }
            function o_() {
                return e_(r_)
            }
            function a_() {
                return e_(i_)
            }
            function c_() {
                var t = e_(u_)
                return (
                    (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t
                )
            }
            var f_ = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / Sb)
                        t.moveTo(e, 0), t.arc(0, 0, e, 0, Eb)
                    },
                },
                s_ = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / 5) / 2
                        t.moveTo(-3 * e, -e),
                            t.lineTo(-e, -e),
                            t.lineTo(-e, -3 * e),
                            t.lineTo(e, -3 * e),
                            t.lineTo(e, -e),
                            t.lineTo(3 * e, -e),
                            t.lineTo(3 * e, e),
                            t.lineTo(e, e),
                            t.lineTo(e, 3 * e),
                            t.lineTo(-e, 3 * e),
                            t.lineTo(-e, e),
                            t.lineTo(-3 * e, e),
                            t.closePath()
                    },
                },
                l_ = Math.sqrt(1 / 3),
                h_ = 2 * l_,
                d_ = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / h_),
                            r = e * l_
                        t.moveTo(0, -e),
                            t.lineTo(r, 0),
                            t.lineTo(0, e),
                            t.lineTo(-r, 0),
                            t.closePath()
                    },
                },
                p_ = Math.sin(Sb / 10) / Math.sin((7 * Sb) / 10),
                v_ = Math.sin(Eb / 10) * p_,
                y_ = -Math.cos(Eb / 10) * p_,
                g_ = {
                    draw: function(t, n) {
                        var e = Math.sqrt(0.8908130915292852 * n),
                            r = v_ * e,
                            i = y_ * e
                        t.moveTo(0, -e), t.lineTo(r, i)
                        for (var u = 1; u < 5; ++u) {
                            var o = (Eb * u) / 5,
                                a = Math.cos(o),
                                c = Math.sin(o)
                            t.lineTo(c * e, -a * e),
                                t.lineTo(a * r - c * i, c * r + a * i)
                        }
                        t.closePath()
                    },
                },
                b_ = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n),
                            r = -e / 2
                        t.rect(r, r, e, e)
                    },
                },
                __ = Math.sqrt(3),
                m_ = {
                    draw: function(t, n) {
                        var e = -Math.sqrt(n / (3 * __))
                        t.moveTo(0, 2 * e),
                            t.lineTo(-__ * e, -e),
                            t.lineTo(__ * e, -e),
                            t.closePath()
                    },
                },
                x_ = Math.sqrt(3) / 2,
                w_ = 1 / Math.sqrt(12),
                M_ = 3 * (w_ / 2 + 1),
                k_ = {
                    draw: function(t, n) {
                        var e = Math.sqrt(n / M_),
                            r = e / 2,
                            i = e * w_,
                            u = r,
                            o = e * w_ + e,
                            a = -u,
                            c = o
                        t.moveTo(r, i),
                            t.lineTo(u, o),
                            t.lineTo(a, c),
                            t.lineTo(-0.5 * r - x_ * i, x_ * r + -0.5 * i),
                            t.lineTo(-0.5 * u - x_ * o, x_ * u + -0.5 * o),
                            t.lineTo(-0.5 * a - x_ * c, x_ * a + -0.5 * c),
                            t.lineTo(-0.5 * r + x_ * i, -0.5 * i - x_ * r),
                            t.lineTo(-0.5 * u + x_ * o, -0.5 * o - x_ * u),
                            t.lineTo(-0.5 * a + x_ * c, -0.5 * c - x_ * a),
                            t.closePath()
                    },
                },
                A_ = [f_, s_, d_, b_, g_, m_, k_],
                S_ = function() {
                    var t = gb(f_),
                        n = gb(64),
                        e = null
                    function r() {
                        var r
                        if (
                            (e || (e = r = Iu()),
                            t
                                .apply(this, arguments)
                                .draw(e, +n.apply(this, arguments)),
                            r)
                        )
                            return (e = null), r + '' || null
                    }
                    return (
                        (r.type = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : gb(n)), r)
                                : t
                        }),
                        (r.size = function(t) {
                            return arguments.length
                                ? ((n = 'function' == typeof t ? t : gb(+t)), r)
                                : n
                        }),
                        (r.context = function(t) {
                            return arguments.length
                                ? ((e = null == t ? null : t), r)
                                : e
                        }),
                        r
                    )
                },
                N_ = function() {}
            function E_(t, n, e) {
                t._context.bezierCurveTo(
                    (2 * t._x0 + t._x1) / 3,
                    (2 * t._y0 + t._y1) / 3,
                    (t._x0 + 2 * t._x1) / 3,
                    (t._y0 + 2 * t._y1) / 3,
                    (t._x0 + 4 * t._x1 + n) / 6,
                    (t._y0 + 4 * t._y1 + e) / 6,
                )
            }
            function T_(t) {
                this._context = t
            }
            T_.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN),
                        (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 3:
                            E_(this, this._x1, this._y1)
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                    }
                    ;(this._line || (0 !== this._line && 1 === this._point)) &&
                        this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(t, n) {
                    switch (((t = +t), (n = +n), this._point)) {
                        case 0:
                            ;(this._point = 1),
                                this._line
                                    ? this._context.lineTo(t, n)
                                    : this._context.moveTo(t, n)
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            ;(this._point = 3),
                                this._context.lineTo(
                                    (5 * this._x0 + this._x1) / 6,
                                    (5 * this._y0 + this._y1) / 6,
                                )
                        default:
                            E_(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = t),
                        (this._y0 = this._y1),
                        (this._y1 = n)
                },
            }
            var C_ = function(t) {
                return new T_(t)
            }
            function P_(t) {
                this._context = t
            }
            P_.prototype = {
                areaStart: N_,
                areaEnd: N_,
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
                        (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x2, this._y2),
                                this._context.closePath()
                            break
                        case 2:
                            this._context.moveTo(
                                (this._x2 + 2 * this._x3) / 3,
                                (this._y2 + 2 * this._y3) / 3,
                            ),
                                this._context.lineTo(
                                    (this._x3 + 2 * this._x2) / 3,
                                    (this._y3 + 2 * this._y2) / 3,
                                ),
                                this._context.closePath()
                            break
                        case 3:
                            this.point(this._x2, this._y2),
                                this.point(this._x3, this._y3),
                                this.point(this._x4, this._y4)
                    }
                },
                point: function(t, n) {
                    switch (((t = +t), (n = +n), this._point)) {
                        case 0:
                            ;(this._point = 1), (this._x2 = t), (this._y2 = n)
                            break
                        case 1:
                            ;(this._point = 2), (this._x3 = t), (this._y3 = n)
                            break
                        case 2:
                            ;(this._point = 3),
                                (this._x4 = t),
                                (this._y4 = n),
                                this._context.moveTo(
                                    (this._x0 + 4 * this._x1 + t) / 6,
                                    (this._y0 + 4 * this._y1 + n) / 6,
                                )
                            break
                        default:
                            E_(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = t),
                        (this._y0 = this._y1),
                        (this._y1 = n)
                },
            }
            var z_ = function(t) {
                return new P_(t)
            }
            function R_(t) {
                this._context = t
            }
            R_.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._y0 = this._y1 = NaN),
                        (this._point = 0)
                },
                lineEnd: function() {
                    ;(this._line || (0 !== this._line && 3 === this._point)) &&
                        this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(t, n) {
                    switch (((t = +t), (n = +n), this._point)) {
                        case 0:
                            this._point = 1
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            this._point = 3
                            var e = (this._x0 + 4 * this._x1 + t) / 6,
                                r = (this._y0 + 4 * this._y1 + n) / 6
                            this._line
                                ? this._context.lineTo(e, r)
                                : this._context.moveTo(e, r)
                            break
                        case 3:
                            this._point = 4
                        default:
                            E_(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = t),
                        (this._y0 = this._y1),
                        (this._y1 = n)
                },
            }
            var D_ = function(t) {
                return new R_(t)
            }
            function L_(t, n) {
                ;(this._basis = new T_(t)), (this._beta = n)
            }
            L_.prototype = {
                lineStart: function() {
                    ;(this._x = []), (this._y = []), this._basis.lineStart()
                },
                lineEnd: function() {
                    var t = this._x,
                        n = this._y,
                        e = t.length - 1
                    if (e > 0)
                        for (
                            var r,
                                i = t[0],
                                u = n[0],
                                o = t[e] - i,
                                a = n[e] - u,
                                c = -1;
                            ++c <= e;

                        )
                            (r = c / e),
                                this._basis.point(
                                    this._beta * t[c] +
                                        (1 - this._beta) * (i + r * o),
                                    this._beta * n[c] +
                                        (1 - this._beta) * (u + r * a),
                                )
                    ;(this._x = this._y = null), this._basis.lineEnd()
                },
                point: function(t, n) {
                    this._x.push(+t), this._y.push(+n)
                },
            }
            var O_ = (function t(n) {
                function e(t) {
                    return 1 === n ? new T_(t) : new L_(t, n)
                }
                return (
                    (e.beta = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0.85)
            function q_(t, n, e) {
                t._context.bezierCurveTo(
                    t._x1 + t._k * (t._x2 - t._x0),
                    t._y1 + t._k * (t._y2 - t._y0),
                    t._x2 + t._k * (t._x1 - n),
                    t._y2 + t._k * (t._y1 - e),
                    t._x2,
                    t._y2,
                )
            }
            function U_(t, n) {
                ;(this._context = t), (this._k = (1 - n) / 6)
            }
            U_.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                        (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2)
                            break
                        case 3:
                            q_(this, this._x1, this._y1)
                    }
                    ;(this._line || (0 !== this._line && 1 === this._point)) &&
                        this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(t, n) {
                    switch (((t = +t), (n = +n), this._point)) {
                        case 0:
                            ;(this._point = 1),
                                this._line
                                    ? this._context.lineTo(t, n)
                                    : this._context.moveTo(t, n)
                            break
                        case 1:
                            ;(this._point = 2), (this._x1 = t), (this._y1 = n)
                            break
                        case 2:
                            this._point = 3
                        default:
                            q_(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = t),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = n)
                },
            }
            var B_ = (function t(n) {
                function e(t) {
                    return new U_(t, n)
                }
                return (
                    (e.tension = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0)
            function F_(t, n) {
                ;(this._context = t), (this._k = (1 - n) / 6)
            }
            F_.prototype = {
                areaStart: N_,
                areaEnd: N_,
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
                        (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3),
                                this._context.closePath()
                            break
                        case 2:
                            this._context.lineTo(this._x3, this._y3),
                                this._context.closePath()
                            break
                        case 3:
                            this.point(this._x3, this._y3),
                                this.point(this._x4, this._y4),
                                this.point(this._x5, this._y5)
                    }
                },
                point: function(t, n) {
                    switch (((t = +t), (n = +n), this._point)) {
                        case 0:
                            ;(this._point = 1), (this._x3 = t), (this._y3 = n)
                            break
                        case 1:
                            ;(this._point = 2),
                                this._context.moveTo(
                                    (this._x4 = t),
                                    (this._y4 = n),
                                )
                            break
                        case 2:
                            ;(this._point = 3), (this._x5 = t), (this._y5 = n)
                            break
                        default:
                            q_(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = t),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = n)
                },
            }
            var Y_ = (function t(n) {
                function e(t) {
                    return new F_(t, n)
                }
                return (
                    (e.tension = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0)
            function I_(t, n) {
                ;(this._context = t), (this._k = (1 - n) / 6)
            }
            I_.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                        (this._point = 0)
                },
                lineEnd: function() {
                    ;(this._line || (0 !== this._line && 3 === this._point)) &&
                        this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(t, n) {
                    switch (((t = +t), (n = +n), this._point)) {
                        case 0:
                            this._point = 1
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            ;(this._point = 3),
                                this._line
                                    ? this._context.lineTo(this._x2, this._y2)
                                    : this._context.moveTo(this._x2, this._y2)
                            break
                        case 3:
                            this._point = 4
                        default:
                            q_(this, t, n)
                    }
                    ;(this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = t),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = n)
                },
            }
            var j_ = (function t(n) {
                function e(t) {
                    return new I_(t, n)
                }
                return (
                    (e.tension = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0)
            function H_(t, n, e) {
                var r = t._x1,
                    i = t._y1,
                    u = t._x2,
                    o = t._y2
                if (t._l01_a > Ab) {
                    var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                        c = 3 * t._l01_a * (t._l01_a + t._l12_a)
                    ;(r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
                        (i =
                            (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c)
                }
                if (t._l23_a > Ab) {
                    var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                        s = 3 * t._l23_a * (t._l23_a + t._l12_a)
                    ;(u = (u * f + t._x1 * t._l23_2a - n * t._l12_2a) / s),
                        (o = (o * f + t._y1 * t._l23_2a - e * t._l12_2a) / s)
                }
                t._context.bezierCurveTo(r, i, u, o, t._x2, t._y2)
            }
            function G_(t, n) {
                ;(this._context = t), (this._alpha = n)
            }
            G_.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                        (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x2, this._y2)
                            break
                        case 3:
                            this.point(this._x2, this._y2)
                    }
                    ;(this._line || (0 !== this._line && 1 === this._point)) &&
                        this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(t, n) {
                    if (((t = +t), (n = +n), this._point)) {
                        var e = this._x2 - t,
                            r = this._y2 - n
                        this._l23_a = Math.sqrt(
                            (this._l23_2a = Math.pow(
                                e * e + r * r,
                                this._alpha,
                            )),
                        )
                    }
                    switch (this._point) {
                        case 0:
                            ;(this._point = 1),
                                this._line
                                    ? this._context.lineTo(t, n)
                                    : this._context.moveTo(t, n)
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            this._point = 3
                        default:
                            H_(this, t, n)
                    }
                    ;(this._l01_a = this._l12_a),
                        (this._l12_a = this._l23_a),
                        (this._l01_2a = this._l12_2a),
                        (this._l12_2a = this._l23_2a),
                        (this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = t),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = n)
                },
            }
            var X_ = (function t(n) {
                function e(t) {
                    return n ? new G_(t, n) : new U_(t, 0)
                }
                return (
                    (e.alpha = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0.5)
            function V_(t, n) {
                ;(this._context = t), (this._alpha = n)
            }
            V_.prototype = {
                areaStart: N_,
                areaEnd: N_,
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
                        (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 1:
                            this._context.moveTo(this._x3, this._y3),
                                this._context.closePath()
                            break
                        case 2:
                            this._context.lineTo(this._x3, this._y3),
                                this._context.closePath()
                            break
                        case 3:
                            this.point(this._x3, this._y3),
                                this.point(this._x4, this._y4),
                                this.point(this._x5, this._y5)
                    }
                },
                point: function(t, n) {
                    if (((t = +t), (n = +n), this._point)) {
                        var e = this._x2 - t,
                            r = this._y2 - n
                        this._l23_a = Math.sqrt(
                            (this._l23_2a = Math.pow(
                                e * e + r * r,
                                this._alpha,
                            )),
                        )
                    }
                    switch (this._point) {
                        case 0:
                            ;(this._point = 1), (this._x3 = t), (this._y3 = n)
                            break
                        case 1:
                            ;(this._point = 2),
                                this._context.moveTo(
                                    (this._x4 = t),
                                    (this._y4 = n),
                                )
                            break
                        case 2:
                            ;(this._point = 3), (this._x5 = t), (this._y5 = n)
                            break
                        default:
                            H_(this, t, n)
                    }
                    ;(this._l01_a = this._l12_a),
                        (this._l12_a = this._l23_a),
                        (this._l01_2a = this._l12_2a),
                        (this._l12_2a = this._l23_2a),
                        (this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = t),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = n)
                },
            }
            var $_ = (function t(n) {
                function e(t) {
                    return n ? new V_(t, n) : new F_(t, 0)
                }
                return (
                    (e.alpha = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0.5)
            function W_(t, n) {
                ;(this._context = t), (this._alpha = n)
            }
            W_.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
                        (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0)
                },
                lineEnd: function() {
                    ;(this._line || (0 !== this._line && 3 === this._point)) &&
                        this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(t, n) {
                    if (((t = +t), (n = +n), this._point)) {
                        var e = this._x2 - t,
                            r = this._y2 - n
                        this._l23_a = Math.sqrt(
                            (this._l23_2a = Math.pow(
                                e * e + r * r,
                                this._alpha,
                            )),
                        )
                    }
                    switch (this._point) {
                        case 0:
                            this._point = 1
                            break
                        case 1:
                            this._point = 2
                            break
                        case 2:
                            ;(this._point = 3),
                                this._line
                                    ? this._context.lineTo(this._x2, this._y2)
                                    : this._context.moveTo(this._x2, this._y2)
                            break
                        case 3:
                            this._point = 4
                        default:
                            H_(this, t, n)
                    }
                    ;(this._l01_a = this._l12_a),
                        (this._l12_a = this._l23_a),
                        (this._l01_2a = this._l12_2a),
                        (this._l12_2a = this._l23_2a),
                        (this._x0 = this._x1),
                        (this._x1 = this._x2),
                        (this._x2 = t),
                        (this._y0 = this._y1),
                        (this._y1 = this._y2),
                        (this._y2 = n)
                },
            }
            var Z_ = (function t(n) {
                function e(t) {
                    return n ? new W_(t, n) : new I_(t, 0)
                }
                return (
                    (e.alpha = function(n) {
                        return t(+n)
                    }),
                    e
                )
            })(0.5)
            function Q_(t) {
                this._context = t
            }
            Q_.prototype = {
                areaStart: N_,
                areaEnd: N_,
                lineStart: function() {
                    this._point = 0
                },
                lineEnd: function() {
                    this._point && this._context.closePath()
                },
                point: function(t, n) {
                    ;(t = +t),
                        (n = +n),
                        this._point
                            ? this._context.lineTo(t, n)
                            : ((this._point = 1), this._context.moveTo(t, n))
                },
            }
            var J_ = function(t) {
                return new Q_(t)
            }
            function K_(t) {
                return t < 0 ? -1 : 1
            }
            function tm(t, n, e) {
                var r = t._x1 - t._x0,
                    i = n - t._x1,
                    u = (t._y1 - t._y0) / (r || (i < 0 && -0)),
                    o = (e - t._y1) / (i || (r < 0 && -0)),
                    a = (u * i + o * r) / (r + i)
                return (
                    (K_(u) + K_(o)) *
                        Math.min(Math.abs(u), Math.abs(o), 0.5 * Math.abs(a)) ||
                    0
                )
            }
            function nm(t, n) {
                var e = t._x1 - t._x0
                return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n
            }
            function em(t, n, e) {
                var r = t._x0,
                    i = t._y0,
                    u = t._x1,
                    o = t._y1,
                    a = (u - r) / 3
                t._context.bezierCurveTo(
                    r + a,
                    i + a * n,
                    u - a,
                    o - a * e,
                    u,
                    o,
                )
            }
            function rm(t) {
                this._context = t
            }
            function im(t) {
                this._context = new um(t)
            }
            function um(t) {
                this._context = t
            }
            function om(t) {
                return new rm(t)
            }
            function am(t) {
                return new im(t)
            }
            function cm(t) {
                this._context = t
            }
            function fm(t) {
                var n,
                    e,
                    r = t.length - 1,
                    i = new Array(r),
                    u = new Array(r),
                    o = new Array(r)
                for (
                    i[0] = 0, u[0] = 2, o[0] = t[0] + 2 * t[1], n = 1;
                    n < r - 1;
                    ++n
                )
                    (i[n] = 1), (u[n] = 4), (o[n] = 4 * t[n] + 2 * t[n + 1])
                for (
                    i[r - 1] = 2,
                        u[r - 1] = 7,
                        o[r - 1] = 8 * t[r - 1] + t[r],
                        n = 1;
                    n < r;
                    ++n
                )
                    (e = i[n] / u[n - 1]), (u[n] -= e), (o[n] -= e * o[n - 1])
                for (i[r - 1] = o[r - 1] / u[r - 1], n = r - 2; n >= 0; --n)
                    i[n] = (o[n] - i[n + 1]) / u[n]
                for (u[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
                    u[n] = 2 * t[n + 1] - i[n + 1]
                return [i, u]
            }
            ;(rm.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
                        (this._point = 0)
                },
                lineEnd: function() {
                    switch (this._point) {
                        case 2:
                            this._context.lineTo(this._x1, this._y1)
                            break
                        case 3:
                            em(this, this._t0, nm(this, this._t0))
                    }
                    ;(this._line || (0 !== this._line && 1 === this._point)) &&
                        this._context.closePath(),
                        (this._line = 1 - this._line)
                },
                point: function(t, n) {
                    var e = NaN
                    if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
                        switch (this._point) {
                            case 0:
                                ;(this._point = 1),
                                    this._line
                                        ? this._context.lineTo(t, n)
                                        : this._context.moveTo(t, n)
                                break
                            case 1:
                                this._point = 2
                                break
                            case 2:
                                ;(this._point = 3),
                                    em(this, nm(this, (e = tm(this, t, n))), e)
                                break
                            default:
                                em(this, this._t0, (e = tm(this, t, n)))
                        }
                        ;(this._x0 = this._x1),
                            (this._x1 = t),
                            (this._y0 = this._y1),
                            (this._y1 = n),
                            (this._t0 = e)
                    }
                },
            }),
                ((im.prototype = Object.create(rm.prototype)).point = function(
                    t,
                    n,
                ) {
                    rm.prototype.point.call(this, n, t)
                }),
                (um.prototype = {
                    moveTo: function(t, n) {
                        this._context.moveTo(n, t)
                    },
                    closePath: function() {
                        this._context.closePath()
                    },
                    lineTo: function(t, n) {
                        this._context.lineTo(n, t)
                    },
                    bezierCurveTo: function(t, n, e, r, i, u) {
                        this._context.bezierCurveTo(n, t, r, e, u, i)
                    },
                }),
                (cm.prototype = {
                    areaStart: function() {
                        this._line = 0
                    },
                    areaEnd: function() {
                        this._line = NaN
                    },
                    lineStart: function() {
                        ;(this._x = []), (this._y = [])
                    },
                    lineEnd: function() {
                        var t = this._x,
                            n = this._y,
                            e = t.length
                        if (e)
                            if (
                                (this._line
                                    ? this._context.lineTo(t[0], n[0])
                                    : this._context.moveTo(t[0], n[0]),
                                2 === e)
                            )
                                this._context.lineTo(t[1], n[1])
                            else
                                for (
                                    var r = fm(t), i = fm(n), u = 0, o = 1;
                                    o < e;
                                    ++u, ++o
                                )
                                    this._context.bezierCurveTo(
                                        r[0][u],
                                        i[0][u],
                                        r[1][u],
                                        i[1][u],
                                        t[o],
                                        n[o],
                                    )
                        ;(this._line || (0 !== this._line && 1 === e)) &&
                            this._context.closePath(),
                            (this._line = 1 - this._line),
                            (this._x = this._y = null)
                    },
                    point: function(t, n) {
                        this._x.push(+t), this._y.push(+n)
                    },
                })
            var sm = function(t) {
                return new cm(t)
            }
            function lm(t, n) {
                ;(this._context = t), (this._t = n)
            }
            lm.prototype = {
                areaStart: function() {
                    this._line = 0
                },
                areaEnd: function() {
                    this._line = NaN
                },
                lineStart: function() {
                    ;(this._x = this._y = NaN), (this._point = 0)
                },
                lineEnd: function() {
                    0 < this._t &&
                        this._t < 1 &&
                        2 === this._point &&
                        this._context.lineTo(this._x, this._y),
                        (this._line ||
                            (0 !== this._line && 1 === this._point)) &&
                            this._context.closePath(),
                        this._line >= 0 &&
                            ((this._t = 1 - this._t),
                            (this._line = 1 - this._line))
                },
                point: function(t, n) {
                    switch (((t = +t), (n = +n), this._point)) {
                        case 0:
                            ;(this._point = 1),
                                this._line
                                    ? this._context.lineTo(t, n)
                                    : this._context.moveTo(t, n)
                            break
                        case 1:
                            this._point = 2
                        default:
                            if (this._t <= 0)
                                this._context.lineTo(this._x, n),
                                    this._context.lineTo(t, n)
                            else {
                                var e = this._x * (1 - this._t) + t * this._t
                                this._context.lineTo(e, this._y),
                                    this._context.lineTo(e, n)
                            }
                    }
                    ;(this._x = t), (this._y = n)
                },
            }
            var hm = function(t) {
                return new lm(t, 0.5)
            }
            function dm(t) {
                return new lm(t, 0)
            }
            function pm(t) {
                return new lm(t, 1)
            }
            var vm = function(t, n) {
                    if ((i = t.length) > 1)
                        for (
                            var e, r, i, u = 1, o = t[n[0]], a = o.length;
                            u < i;
                            ++u
                        )
                            for (r = o, o = t[n[u]], e = 0; e < a; ++e)
                                o[e][1] += o[e][0] = isNaN(r[e][1])
                                    ? r[e][0]
                                    : r[e][1]
                },
                ym = function(t) {
                    for (var n = t.length, e = new Array(n); --n >= 0; )
                        e[n] = n
                    return e
                }
            function gm(t, n) {
                return t[n]
            }
            var bm = function() {
                    var t = gb([]),
                        n = ym,
                        e = vm,
                        r = gm
                    function i(i) {
                        var u,
                            o,
                            a = t.apply(this, arguments),
                            c = i.length,
                            f = a.length,
                            s = new Array(f)
                        for (u = 0; u < f; ++u) {
                            for (
                                var l,
                                    h = a[u],
                                    d = (s[u] = new Array(c)),
                                    p = 0;
                                p < c;
                                ++p
                            )
                                (d[p] = l = [0, +r(i[p], h, p, i)]),
                                    (l.data = i[p])
                            d.key = h
                        }
                        for (u = 0, o = n(s); u < f; ++u) s[o[u]].index = u
                        return e(s, o), s
                    }
                    return (
                        (i.keys = function(n) {
                            return arguments.length
                                ? ((t =
                                      'function' == typeof n
                                          ? n
                                          : gb(Kb.call(n))),
                                  i)
                                : t
                        }),
                        (i.value = function(t) {
                            return arguments.length
                                ? ((r = 'function' == typeof t ? t : gb(+t)), i)
                                : r
                        }),
                        (i.order = function(t) {
                            return arguments.length
                                ? ((n =
                                      null == t
                                          ? ym
                                          : 'function' == typeof t
                                          ? t
                                          : gb(Kb.call(t))),
                                  i)
                                : n
                        }),
                        (i.offset = function(t) {
                            return arguments.length
                                ? ((e = null == t ? vm : t), i)
                                : e
                        }),
                        i
                    )
                },
                _m = function(t, n) {
                    if ((r = t.length) > 0) {
                        for (var e, r, i, u = 0, o = t[0].length; u < o; ++u) {
                            for (i = e = 0; e < r; ++e) i += t[e][u][1] || 0
                            if (i) for (e = 0; e < r; ++e) t[e][u][1] /= i
                        }
                        vm(t, n)
                    }
                },
                mm = function(t, n) {
                    if ((a = t.length) > 1)
                        for (
                            var e, r, i, u, o, a, c = 0, f = t[n[0]].length;
                            c < f;
                            ++c
                        )
                            for (u = o = 0, e = 0; e < a; ++e)
                                (i = (r = t[n[e]][c])[1] - r[0]) >= 0
                                    ? ((r[0] = u), (r[1] = u += i))
                                    : i < 0
                                    ? ((r[1] = o), (r[0] = o += i))
                                    : (r[0] = u)
                },
                xm = function(t, n) {
                    if ((e = t.length) > 0) {
                        for (
                            var e, r = 0, i = t[n[0]], u = i.length;
                            r < u;
                            ++r
                        ) {
                            for (var o = 0, a = 0; o < e; ++o)
                                a += t[o][r][1] || 0
                            i[r][1] += i[r][0] = -a / 2
                        }
                        vm(t, n)
                    }
                },
                wm = function(t, n) {
                    if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
                        for (var e, r, i, u = 0, o = 1; o < r; ++o) {
                            for (var a = 0, c = 0, f = 0; a < i; ++a) {
                                for (
                                    var s = t[n[a]],
                                        l = s[o][1] || 0,
                                        h = (l - (s[o - 1][1] || 0)) / 2,
                                        d = 0;
                                    d < a;
                                    ++d
                                ) {
                                    var p = t[n[d]]
                                    h += (p[o][1] || 0) - (p[o - 1][1] || 0)
                                }
                                ;(c += l), (f += h * l)
                            }
                            ;(e[o - 1][1] += e[o - 1][0] = u), c && (u -= f / c)
                        }
                        ;(e[o - 1][1] += e[o - 1][0] = u), vm(t, n)
                    }
                },
                Mm = function(t) {
                    var n = t.map(km)
                    return ym(t).sort(function(t, e) {
                        return n[t] - n[e]
                    })
                }
            function km(t) {
                for (var n, e = 0, r = -1, i = t.length; ++r < i; )
                    (n = +t[r][1]) && (e += n)
                return e
            }
            var Am = function(t) {
                    return Mm(t).reverse()
                },
                Sm = function(t) {
                    var n,
                        e,
                        r = t.length,
                        i = t.map(km),
                        u = ym(t).sort(function(t, n) {
                            return i[n] - i[t]
                        }),
                        o = 0,
                        a = 0,
                        c = [],
                        f = []
                    for (n = 0; n < r; ++n)
                        (e = u[n]),
                            o < a
                                ? ((o += i[e]), c.push(e))
                                : ((a += i[e]), f.push(e))
                    return f.reverse().concat(c)
                },
                Nm = function(t) {
                    return ym(t).reverse()
                },
                Em = function(t) {
                    return function() {
                        return t
                    }
                }
            function Tm(t) {
                return t[0]
            }
            function Cm(t) {
                return t[1]
            }
            function Pm() {
                this._ = null
            }
            function zm(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null
            }
            function Rm(t, n) {
                var e = n,
                    r = n.R,
                    i = e.U
                i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
                    (r.U = i),
                    (e.U = r),
                    (e.R = r.L),
                    e.R && (e.R.U = e),
                    (r.L = e)
            }
            function Dm(t, n) {
                var e = n,
                    r = n.L,
                    i = e.U
                i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
                    (r.U = i),
                    (e.U = r),
                    (e.L = r.R),
                    e.L && (e.L.U = e),
                    (r.R = e)
            }
            function Lm(t) {
                for (; t.L; ) t = t.L
                return t
            }
            Pm.prototype = {
                constructor: Pm,
                insert: function(t, n) {
                    var e, r, i
                    if (t) {
                        if (
                            ((n.P = t),
                            (n.N = t.N),
                            t.N && (t.N.P = n),
                            (t.N = n),
                            t.R)
                        ) {
                            for (t = t.R; t.L; ) t = t.L
                            t.L = n
                        } else t.R = n
                        e = t
                    } else
                        this._
                            ? ((t = Lm(this._)),
                              (n.P = null),
                              (n.N = t),
                              (t.P = t.L = n),
                              (e = t))
                            : ((n.P = n.N = null), (this._ = n), (e = null))
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
                        e === (r = e.U).L
                            ? (i = r.R) && i.C
                                ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                                : (t === e.R && (Rm(this, e), (e = (t = e).U)),
                                  (e.C = !1),
                                  (r.C = !0),
                                  Dm(this, r))
                            : (i = r.L) && i.C
                            ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                            : (t === e.L && (Dm(this, e), (e = (t = e).U)),
                              (e.C = !1),
                              (r.C = !0),
                              Rm(this, r)),
                            (e = t.U)
                    this._.C = !1
                },
                remove: function(t) {
                    t.N && (t.N.P = t.P),
                        t.P && (t.P.N = t.N),
                        (t.N = t.P = null)
                    var n,
                        e,
                        r,
                        i = t.U,
                        u = t.L,
                        o = t.R
                    if (
                        ((e = u ? (o ? Lm(o) : u) : o),
                        i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
                        u && o
                            ? ((r = e.C),
                              (e.C = t.C),
                              (e.L = u),
                              (u.U = e),
                              e !== o
                                  ? ((i = e.U),
                                    (e.U = t.U),
                                    (t = e.R),
                                    (i.L = t),
                                    (e.R = o),
                                    (o.U = e))
                                  : ((e.U = i), (i = e), (t = e.R)))
                            : ((r = t.C), (t = e)),
                        t && (t.U = i),
                        !r)
                    )
                        if (t && t.C) t.C = !1
                        else {
                            do {
                                if (t === this._) break
                                if (t === i.L) {
                                    if (
                                        ((n = i.R).C &&
                                            ((n.C = !1),
                                            (i.C = !0),
                                            Rm(this, i),
                                            (n = i.R)),
                                        (n.L && n.L.C) || (n.R && n.R.C))
                                    ) {
                                        ;(n.R && n.R.C) ||
                                            ((n.L.C = !1),
                                            (n.C = !0),
                                            Dm(this, n),
                                            (n = i.R)),
                                            (n.C = i.C),
                                            (i.C = n.R.C = !1),
                                            Rm(this, i),
                                            (t = this._)
                                        break
                                    }
                                } else if (
                                    ((n = i.L).C &&
                                        ((n.C = !1),
                                        (i.C = !0),
                                        Dm(this, i),
                                        (n = i.L)),
                                    (n.L && n.L.C) || (n.R && n.R.C))
                                ) {
                                    ;(n.L && n.L.C) ||
                                        ((n.R.C = !1),
                                        (n.C = !0),
                                        Rm(this, n),
                                        (n = i.L)),
                                        (n.C = i.C),
                                        (i.C = n.L.C = !1),
                                        Dm(this, i),
                                        (t = this._)
                                    break
                                }
                                ;(n.C = !0), (t = i), (i = i.U)
                            } while (!t.C)
                            t && (t.C = !1)
                        }
                },
            }
            var Om = Pm
            function qm(t, n, e, r) {
                var i = [null, null],
                    u = ax.push(i) - 1
                return (
                    (i.left = t),
                    (i.right = n),
                    e && Bm(i, t, n, e),
                    r && Bm(i, n, t, r),
                    ux[t.index].halfedges.push(u),
                    ux[n.index].halfedges.push(u),
                    i
                )
            }
            function Um(t, n, e) {
                var r = [n, e]
                return (r.left = t), r
            }
            function Bm(t, n, e, r) {
                t[0] || t[1]
                    ? t.left === e
                        ? (t[1] = r)
                        : (t[0] = r)
                    : ((t[0] = r), (t.left = n), (t.right = e))
            }
            function Fm(t, n, e, r, i) {
                var u,
                    o = t[0],
                    a = t[1],
                    c = o[0],
                    f = o[1],
                    s = 0,
                    l = 1,
                    h = a[0] - c,
                    d = a[1] - f
                if (((u = n - c), h || !(u > 0))) {
                    if (((u /= h), h < 0)) {
                        if (u < s) return
                        u < l && (l = u)
                    } else if (h > 0) {
                        if (u > l) return
                        u > s && (s = u)
                    }
                    if (((u = r - c), h || !(u < 0))) {
                        if (((u /= h), h < 0)) {
                            if (u > l) return
                            u > s && (s = u)
                        } else if (h > 0) {
                            if (u < s) return
                            u < l && (l = u)
                        }
                        if (((u = e - f), d || !(u > 0))) {
                            if (((u /= d), d < 0)) {
                                if (u < s) return
                                u < l && (l = u)
                            } else if (d > 0) {
                                if (u > l) return
                                u > s && (s = u)
                            }
                            if (((u = i - f), d || !(u < 0))) {
                                if (((u /= d), d < 0)) {
                                    if (u > l) return
                                    u > s && (s = u)
                                } else if (d > 0) {
                                    if (u < s) return
                                    u < l && (l = u)
                                }
                                return (
                                    !(s > 0 || l < 1) ||
                                    (s > 0 && (t[0] = [c + s * h, f + s * d]),
                                    l < 1 && (t[1] = [c + l * h, f + l * d]),
                                    !0)
                                )
                            }
                        }
                    }
                }
            }
            function Ym(t, n, e, r, i) {
                var u = t[1]
                if (u) return !0
                var o,
                    a,
                    c = t[0],
                    f = t.left,
                    s = t.right,
                    l = f[0],
                    h = f[1],
                    d = s[0],
                    p = s[1],
                    v = (l + d) / 2,
                    y = (h + p) / 2
                if (p === h) {
                    if (v < n || v >= r) return
                    if (l > d) {
                        if (c) {
                            if (c[1] >= i) return
                        } else c = [v, e]
                        u = [v, i]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [v, i]
                        u = [v, e]
                    }
                } else if (
                    ((a = y - (o = (l - d) / (p - h)) * v), o < -1 || o > 1)
                )
                    if (l > d) {
                        if (c) {
                            if (c[1] >= i) return
                        } else c = [(e - a) / o, e]
                        u = [(i - a) / o, i]
                    } else {
                        if (c) {
                            if (c[1] < e) return
                        } else c = [(i - a) / o, i]
                        u = [(e - a) / o, e]
                    }
                else if (h < p) {
                    if (c) {
                        if (c[0] >= r) return
                    } else c = [n, o * n + a]
                    u = [r, o * r + a]
                } else {
                    if (c) {
                        if (c[0] < n) return
                    } else c = [r, o * r + a]
                    u = [n, o * n + a]
                }
                return (t[0] = c), (t[1] = u), !0
            }
            function Im(t, n) {
                var e = t.site,
                    r = n.left,
                    i = n.right
                return (
                    e === i && ((i = r), (r = e)),
                    i
                        ? Math.atan2(i[1] - r[1], i[0] - r[0])
                        : (e === r
                              ? ((r = n[1]), (i = n[0]))
                              : ((r = n[0]), (i = n[1])),
                          Math.atan2(r[0] - i[0], i[1] - r[1]))
                )
            }
            function jm(t, n) {
                return n[+(n.left !== t.site)]
            }
            function Hm(t, n) {
                return n[+(n.left === t.site)]
            }
            var Gm,
                Xm = []
            function Vm() {
                zm(this),
                    (this.x = this.y = this.arc = this.site = this.cy = null)
            }
            function $m(t) {
                var n = t.P,
                    e = t.N
                if (n && e) {
                    var r = n.site,
                        i = t.site,
                        u = e.site
                    if (r !== u) {
                        var o = i[0],
                            a = i[1],
                            c = r[0] - o,
                            f = r[1] - a,
                            s = u[0] - o,
                            l = u[1] - a,
                            h = 2 * (c * l - f * s)
                        if (!(h >= -fx)) {
                            var d = c * c + f * f,
                                p = s * s + l * l,
                                v = (l * d - f * p) / h,
                                y = (c * p - s * d) / h,
                                g = Xm.pop() || new Vm()
                            ;(g.arc = t),
                                (g.site = i),
                                (g.x = v + o),
                                (g.y =
                                    (g.cy = y + a) + Math.sqrt(v * v + y * y)),
                                (t.circle = g)
                            for (var b = null, _ = ox._; _; )
                                if (g.y < _.y || (g.y === _.y && g.x <= _.x)) {
                                    if (!_.L) {
                                        b = _.P
                                        break
                                    }
                                    _ = _.L
                                } else {
                                    if (!_.R) {
                                        b = _
                                        break
                                    }
                                    _ = _.R
                                }
                            ox.insert(b, g), b || (Gm = g)
                        }
                    }
                }
            }
            function Wm(t) {
                var n = t.circle
                n &&
                    (n.P || (Gm = n.N),
                    ox.remove(n),
                    Xm.push(n),
                    zm(n),
                    (t.circle = null))
            }
            var Zm = []
            function Qm() {
                zm(this), (this.edge = this.site = this.circle = null)
            }
            function Jm(t) {
                var n = Zm.pop() || new Qm()
                return (n.site = t), n
            }
            function Km(t) {
                Wm(t), ix.remove(t), Zm.push(t), zm(t)
            }
            function tx(t) {
                var n = t.circle,
                    e = n.x,
                    r = n.cy,
                    i = [e, r],
                    u = t.P,
                    o = t.N,
                    a = [t]
                Km(t)
                for (
                    var c = u;
                    c.circle &&
                    Math.abs(e - c.circle.x) < cx &&
                    Math.abs(r - c.circle.cy) < cx;

                )
                    (u = c.P), a.unshift(c), Km(c), (c = u)
                a.unshift(c), Wm(c)
                for (
                    var f = o;
                    f.circle &&
                    Math.abs(e - f.circle.x) < cx &&
                    Math.abs(r - f.circle.cy) < cx;

                )
                    (o = f.N), a.push(f), Km(f), (f = o)
                a.push(f), Wm(f)
                var s,
                    l = a.length
                for (s = 1; s < l; ++s)
                    (f = a[s]), (c = a[s - 1]), Bm(f.edge, c.site, f.site, i)
                ;(c = a[0]),
                    ((f = a[l - 1]).edge = qm(c.site, f.site, null, i)),
                    $m(c),
                    $m(f)
            }
            function nx(t) {
                for (var n, e, r, i, u = t[0], o = t[1], a = ix._; a; )
                    if ((r = ex(a, o) - u) > cx) a = a.L
                    else {
                        if (!((i = u - rx(a, o)) > cx)) {
                            r > -cx
                                ? ((n = a.P), (e = a))
                                : i > -cx
                                ? ((n = a), (e = a.N))
                                : (n = e = a)
                            break
                        }
                        if (!a.R) {
                            n = a
                            break
                        }
                        a = a.R
                    }
                !(function(t) {
                    ux[t.index] = { site: t, halfedges: [] }
                })(t)
                var c = Jm(t)
                if ((ix.insert(n, c), n || e)) {
                    if (n === e)
                        return (
                            Wm(n),
                            (e = Jm(n.site)),
                            ix.insert(c, e),
                            (c.edge = e.edge = qm(n.site, c.site)),
                            $m(n),
                            void $m(e)
                        )
                    if (e) {
                        Wm(n), Wm(e)
                        var f = n.site,
                            s = f[0],
                            l = f[1],
                            h = t[0] - s,
                            d = t[1] - l,
                            p = e.site,
                            v = p[0] - s,
                            y = p[1] - l,
                            g = 2 * (h * y - d * v),
                            b = h * h + d * d,
                            _ = v * v + y * y,
                            m = [
                                (y * b - d * _) / g + s,
                                (h * _ - v * b) / g + l,
                            ]
                        Bm(e.edge, f, p, m),
                            (c.edge = qm(f, t, null, m)),
                            (e.edge = qm(t, p, null, m)),
                            $m(n),
                            $m(e)
                    } else c.edge = qm(n.site, c.site)
                }
            }
            function ex(t, n) {
                var e = t.site,
                    r = e[0],
                    i = e[1],
                    u = i - n
                if (!u) return r
                var o = t.P
                if (!o) return -1 / 0
                var a = (e = o.site)[0],
                    c = e[1],
                    f = c - n
                if (!f) return a
                var s = a - r,
                    l = 1 / u - 1 / f,
                    h = s / f
                return l
                    ? (-h +
                          Math.sqrt(
                              h * h -
                                  2 *
                                      l *
                                      ((s * s) / (-2 * f) -
                                          c +
                                          f / 2 +
                                          i -
                                          u / 2),
                          )) /
                          l +
                          r
                    : (r + a) / 2
            }
            function rx(t, n) {
                var e = t.N
                if (e) return ex(e, n)
                var r = t.site
                return r[1] === n ? r[0] : 1 / 0
            }
            var ix,
                ux,
                ox,
                ax,
                cx = 1e-6,
                fx = 1e-12
            function sx(t, n) {
                return n[1] - t[1] || n[0] - t[0]
            }
            function lx(t, n) {
                var e,
                    r,
                    i,
                    u = t.sort(sx).pop()
                for (
                    ax = [],
                        ux = new Array(t.length),
                        ix = new Om(),
                        ox = new Om();
                    ;

                )
                    if (
                        ((i = Gm),
                        u && (!i || u[1] < i.y || (u[1] === i.y && u[0] < i.x)))
                    )
                        (u[0] === e && u[1] === r) ||
                            (nx(u), (e = u[0]), (r = u[1])),
                            (u = t.pop())
                    else {
                        if (!i) break
                        tx(i.arc)
                    }
                if (
                    ((function() {
                        for (var t, n, e, r, i = 0, u = ux.length; i < u; ++i)
                            if ((t = ux[i]) && (r = (n = t.halfedges).length)) {
                                var o = new Array(r),
                                    a = new Array(r)
                                for (e = 0; e < r; ++e)
                                    (o[e] = e), (a[e] = Im(t, ax[n[e]]))
                                for (
                                    o.sort(function(t, n) {
                                        return a[n] - a[t]
                                    }),
                                        e = 0;
                                    e < r;
                                    ++e
                                )
                                    a[e] = n[o[e]]
                                for (e = 0; e < r; ++e) n[e] = a[e]
                            }
                    })(),
                    n)
                ) {
                    var o = +n[0][0],
                        a = +n[0][1],
                        c = +n[1][0],
                        f = +n[1][1]
                    !(function(t, n, e, r) {
                        for (var i, u = ax.length; u--; )
                            (Ym((i = ax[u]), t, n, e, r) &&
                                Fm(i, t, n, e, r) &&
                                (Math.abs(i[0][0] - i[1][0]) > cx ||
                                    Math.abs(i[0][1] - i[1][1]) > cx)) ||
                                delete ax[u]
                    })(o, a, c, f),
                        (function(t, n, e, r) {
                            var i,
                                u,
                                o,
                                a,
                                c,
                                f,
                                s,
                                l,
                                h,
                                d,
                                p,
                                v,
                                y = ux.length,
                                g = !0
                            for (i = 0; i < y; ++i)
                                if ((u = ux[i])) {
                                    for (
                                        o = u.site,
                                            a = (c = u.halfedges).length;
                                        a--;

                                    )
                                        ax[c[a]] || c.splice(a, 1)
                                    for (a = 0, f = c.length; a < f; )
                                        (p = (d = Hm(u, ax[c[a]]))[0]),
                                            (v = d[1]),
                                            (l = (s = jm(
                                                u,
                                                ax[c[++a % f]],
                                            ))[0]),
                                            (h = s[1]),
                                            (Math.abs(p - l) > cx ||
                                                Math.abs(v - h) > cx) &&
                                                (c.splice(
                                                    a,
                                                    0,
                                                    ax.push(
                                                        Um(
                                                            o,
                                                            d,
                                                            Math.abs(p - t) <
                                                                cx && r - v > cx
                                                                ? [
                                                                      t,
                                                                      Math.abs(
                                                                          l - t,
                                                                      ) < cx
                                                                          ? h
                                                                          : r,
                                                                  ]
                                                                : Math.abs(
                                                                      v - r,
                                                                  ) < cx &&
                                                                  e - p > cx
                                                                ? [
                                                                      Math.abs(
                                                                          h - r,
                                                                      ) < cx
                                                                          ? l
                                                                          : e,
                                                                      r,
                                                                  ]
                                                                : Math.abs(
                                                                      p - e,
                                                                  ) < cx &&
                                                                  v - n > cx
                                                                ? [
                                                                      e,
                                                                      Math.abs(
                                                                          l - e,
                                                                      ) < cx
                                                                          ? h
                                                                          : n,
                                                                  ]
                                                                : Math.abs(
                                                                      v - n,
                                                                  ) < cx &&
                                                                  p - t > cx
                                                                ? [
                                                                      Math.abs(
                                                                          h - n,
                                                                      ) < cx
                                                                          ? l
                                                                          : t,
                                                                      n,
                                                                  ]
                                                                : null,
                                                        ),
                                                    ) - 1,
                                                ),
                                                ++f)
                                    f && (g = !1)
                                }
                            if (g) {
                                var b,
                                    _,
                                    m,
                                    x = 1 / 0
                                for (i = 0, g = null; i < y; ++i)
                                    (u = ux[i]) &&
                                        (m =
                                            (b = (o = u.site)[0] - t) * b +
                                            (_ = o[1] - n) * _) < x &&
                                        ((x = m), (g = u))
                                if (g) {
                                    var w = [t, n],
                                        M = [t, r],
                                        k = [e, r],
                                        A = [e, n]
                                    g.halfedges.push(
                                        ax.push(Um((o = g.site), w, M)) - 1,
                                        ax.push(Um(o, M, k)) - 1,
                                        ax.push(Um(o, k, A)) - 1,
                                        ax.push(Um(o, A, w)) - 1,
                                    )
                                }
                            }
                            for (i = 0; i < y; ++i)
                                (u = ux[i]) &&
                                    (u.halfedges.length || delete ux[i])
                        })(o, a, c, f)
                }
                ;(this.edges = ax),
                    (this.cells = ux),
                    (ix = ox = ax = ux = null)
            }
            lx.prototype = {
                constructor: lx,
                polygons: function() {
                    var t = this.edges
                    return this.cells.map(function(n) {
                        var e = n.halfedges.map(function(e) {
                            return jm(n, t[e])
                        })
                        return (e.data = n.site.data), e
                    })
                },
                triangles: function() {
                    var t = [],
                        n = this.edges
                    return (
                        this.cells.forEach(function(e, r) {
                            if ((u = (i = e.halfedges).length))
                                for (
                                    var i,
                                        u,
                                        o,
                                        a,
                                        c,
                                        f,
                                        s = e.site,
                                        l = -1,
                                        h = n[i[u - 1]],
                                        d = h.left === s ? h.right : h.left;
                                    ++l < u;

                                )
                                    (o = d),
                                        (d =
                                            (h = n[i[l]]).left === s
                                                ? h.right
                                                : h.left),
                                        o &&
                                            d &&
                                            r < o.index &&
                                            r < d.index &&
                                            ((c = o),
                                            (f = d),
                                            ((a = s)[0] - f[0]) *
                                                (c[1] - a[1]) -
                                                (a[0] - c[0]) * (f[1] - a[1]) <
                                                0) &&
                                            t.push([s.data, o.data, d.data])
                        }),
                        t
                    )
                },
                links: function() {
                    return this.edges
                        .filter(function(t) {
                            return t.right
                        })
                        .map(function(t) {
                            return { source: t.left.data, target: t.right.data }
                        })
                },
                find: function(t, n, e) {
                    for (
                        var r,
                            i,
                            u = this,
                            o = u._found || 0,
                            a = u.cells.length;
                        !(i = u.cells[o]);

                    )
                        if (++o >= a) return null
                    var c = t - i.site[0],
                        f = n - i.site[1],
                        s = c * c + f * f
                    do {
                        ;(i = u.cells[(r = o)]),
                            (o = null),
                            i.halfedges.forEach(function(e) {
                                var r = u.edges[e],
                                    a = r.left
                                if ((a !== i.site && a) || (a = r.right)) {
                                    var c = t - a[0],
                                        f = n - a[1],
                                        l = c * c + f * f
                                    l < s && ((s = l), (o = a.index))
                                }
                            })
                    } while (null !== o)
                    return (
                        (u._found = r), null == e || s <= e * e ? i.site : null
                    )
                },
            }
            var hx = function() {
                    var t = Tm,
                        n = Cm,
                        e = null
                    function r(r) {
                        return new lx(
                            r.map(function(e, i) {
                                var u = [
                                    Math.round(t(e, i, r) / cx) * cx,
                                    Math.round(n(e, i, r) / cx) * cx,
                                ]
                                return (u.index = i), (u.data = e), u
                            }),
                            e,
                        )
                    }
                    return (
                        (r.polygons = function(t) {
                            return r(t).polygons()
                        }),
                        (r.links = function(t) {
                            return r(t).links()
                        }),
                        (r.triangles = function(t) {
                            return r(t).triangles()
                        }),
                        (r.x = function(n) {
                            return arguments.length
                                ? ((t = 'function' == typeof n ? n : Em(+n)), r)
                                : t
                        }),
                        (r.y = function(t) {
                            return arguments.length
                                ? ((n = 'function' == typeof t ? t : Em(+t)), r)
                                : n
                        }),
                        (r.extent = function(t) {
                            return arguments.length
                                ? ((e =
                                      null == t
                                          ? null
                                          : [
                                                [+t[0][0], +t[0][1]],
                                                [+t[1][0], +t[1][1]],
                                            ]),
                                  r)
                                : e && [[e[0][0], e[0][1]], [e[1][0], e[1][1]]]
                        }),
                        (r.size = function(t) {
                            return arguments.length
                                ? ((e =
                                      null == t
                                          ? null
                                          : [[0, 0], [+t[0], +t[1]]]),
                                  r)
                                : e && [e[1][0] - e[0][0], e[1][1] - e[0][1]]
                        }),
                        r
                    )
                },
                dx = function(t) {
                    return function() {
                        return t
                    }
                }
            function px(t, n, e) {
                ;(this.target = t), (this.type = n), (this.transform = e)
            }
            function vx(t, n, e) {
                ;(this.k = t), (this.x = n), (this.y = e)
            }
            vx.prototype = {
                constructor: vx,
                scale: function(t) {
                    return 1 === t ? this : new vx(this.k * t, this.x, this.y)
                },
                translate: function(t, n) {
                    return (0 === t) & (0 === n)
                        ? this
                        : new vx(
                              this.k,
                              this.x + this.k * t,
                              this.y + this.k * n,
                          )
                },
                apply: function(t) {
                    return [t[0] * this.k + this.x, t[1] * this.k + this.y]
                },
                applyX: function(t) {
                    return t * this.k + this.x
                },
                applyY: function(t) {
                    return t * this.k + this.y
                },
                invert: function(t) {
                    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
                },
                invertX: function(t) {
                    return (t - this.x) / this.k
                },
                invertY: function(t) {
                    return (t - this.y) / this.k
                },
                rescaleX: function(t) {
                    return t.copy().domain(
                        t
                            .range()
                            .map(this.invertX, this)
                            .map(t.invert, t),
                    )
                },
                rescaleY: function(t) {
                    return t.copy().domain(
                        t
                            .range()
                            .map(this.invertY, this)
                            .map(t.invert, t),
                    )
                },
                toString: function() {
                    return (
                        'translate(' +
                        this.x +
                        ',' +
                        this.y +
                        ') scale(' +
                        this.k +
                        ')'
                    )
                },
            }
            var yx = new vx(1, 0, 0)
            function gx(t) {
                return t.__zoom || yx
            }
            function bx() {
                Vt.stopImmediatePropagation()
            }
            gx.prototype = vx.prototype
            var _x = function() {
                Vt.preventDefault(), Vt.stopImmediatePropagation()
            }
            function mx() {
                return !Vt.button
            }
            function xx() {
                var t,
                    n,
                    e = this
                return (
                    e instanceof SVGElement
                        ? ((t = (e = e.ownerSVGElement || e).width.baseVal
                              .value),
                          (n = e.height.baseVal.value))
                        : ((t = e.clientWidth), (n = e.clientHeight)),
                    [[0, 0], [t, n]]
                )
            }
            function wx() {
                return this.__zoom || yx
            }
            function Mx() {
                return (-Vt.deltaY * (Vt.deltaMode ? 120 : 1)) / 500
            }
            function kx() {
                return 'ontouchstart' in this
            }
            function Ax(t, n, e) {
                var r = t.invertX(n[0][0]) - e[0][0],
                    i = t.invertX(n[1][0]) - e[1][0],
                    u = t.invertY(n[0][1]) - e[0][1],
                    o = t.invertY(n[1][1]) - e[1][1]
                return t.translate(
                    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
                    o > u ? (u + o) / 2 : Math.min(0, u) || Math.max(0, o),
                )
            }
            var Sx = function() {
                var t,
                    n,
                    e = mx,
                    r = xx,
                    i = Ax,
                    u = Mx,
                    o = kx,
                    a = [0, 1 / 0],
                    c = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
                    f = 250,
                    s = fr,
                    l = [],
                    h = ht('start', 'zoom', 'end'),
                    d = 500,
                    p = 150,
                    v = 0
                function y(t) {
                    t.property('__zoom', wx)
                        .on('wheel.zoom', M)
                        .on('mousedown.zoom', k)
                        .on('dblclick.zoom', A)
                        .filter(o)
                        .on('touchstart.zoom', S)
                        .on('touchmove.zoom', N)
                        .on('touchend.zoom touchcancel.zoom', E)
                        .style('touch-action', 'none')
                        .style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)')
                }
                function g(t, n) {
                    return (n = Math.max(a[0], Math.min(a[1], n))) === t.k
                        ? t
                        : new vx(n, t.x, t.y)
                }
                function b(t, n, e) {
                    var r = n[0] - e[0] * t.k,
                        i = n[1] - e[1] * t.k
                    return r === t.x && i === t.y ? t : new vx(t.k, r, i)
                }
                function _(t) {
                    return [
                        (+t[0][0] + +t[1][0]) / 2,
                        (+t[0][1] + +t[1][1]) / 2,
                    ]
                }
                function m(t, n, e) {
                    t.on('start.zoom', function() {
                        x(this, arguments).start()
                    })
                        .on('interrupt.zoom end.zoom', function() {
                            x(this, arguments).end()
                        })
                        .tween('zoom', function() {
                            var t = arguments,
                                i = x(this, t),
                                u = r.apply(this, t),
                                o = e || _(u),
                                a = Math.max(
                                    u[1][0] - u[0][0],
                                    u[1][1] - u[0][1],
                                ),
                                c = this.__zoom,
                                f =
                                    'function' == typeof n
                                        ? n.apply(this, t)
                                        : n,
                                l = s(
                                    c.invert(o).concat(a / c.k),
                                    f.invert(o).concat(a / f.k),
                                )
                            return function(t) {
                                if (1 === t) t = f
                                else {
                                    var n = l(t),
                                        e = a / n[2]
                                    t = new vx(
                                        e,
                                        o[0] - n[0] * e,
                                        o[1] - n[1] * e,
                                    )
                                }
                                i.zoom(null, t)
                            }
                        })
                }
                function x(t, n) {
                    for (var e, r = 0, i = l.length; r < i; ++r)
                        if ((e = l[r]).that === t) return e
                    return new w(t, n)
                }
                function w(t, n) {
                    ;(this.that = t),
                        (this.args = n),
                        (this.index = -1),
                        (this.active = 0),
                        (this.extent = r.apply(t, n))
                }
                function M() {
                    if (e.apply(this, arguments)) {
                        var t = x(this, arguments),
                            n = this.__zoom,
                            r = Math.max(
                                a[0],
                                Math.min(
                                    a[1],
                                    n.k * Math.pow(2, u.apply(this, arguments)),
                                ),
                            ),
                            o = hn(this)
                        if (t.wheel)
                            (t.mouse[0][0] === o[0] &&
                                t.mouse[0][1] === o[1]) ||
                                (t.mouse[1] = n.invert((t.mouse[0] = o))),
                                clearTimeout(t.wheel)
                        else {
                            if (n.k === r) return
                            ;(t.mouse = [o, n.invert(o)]), ei(this), t.start()
                        }
                        _x(),
                            (t.wheel = setTimeout(function() {
                                ;(t.wheel = null), t.end()
                            }, p)),
                            t.zoom(
                                'mouse',
                                i(
                                    b(g(n, r), t.mouse[0], t.mouse[1]),
                                    t.extent,
                                    c,
                                ),
                            )
                    }
                }
                function k() {
                    if (!n && e.apply(this, arguments)) {
                        var t = x(this, arguments),
                            r = un(Vt.view)
                                .on(
                                    'mousemove.zoom',
                                    function() {
                                        if ((_x(), !t.moved)) {
                                            var n = Vt.clientX - o,
                                                e = Vt.clientY - a
                                            t.moved = n * n + e * e > v
                                        }
                                        t.zoom(
                                            'mouse',
                                            i(
                                                b(
                                                    t.that.__zoom,
                                                    (t.mouse[0] = hn(t.that)),
                                                    t.mouse[1],
                                                ),
                                                t.extent,
                                                c,
                                            ),
                                        )
                                    },
                                    !0,
                                )
                                .on(
                                    'mouseup.zoom',
                                    function() {
                                        r.on(
                                            'mousemove.zoom mouseup.zoom',
                                            null,
                                        ),
                                            _n(Vt.view, t.moved),
                                            _x(),
                                            t.end()
                                    },
                                    !0,
                                ),
                            u = hn(this),
                            o = Vt.clientX,
                            a = Vt.clientY
                        bn(Vt.view),
                            bx(),
                            (t.mouse = [u, this.__zoom.invert(u)]),
                            ei(this),
                            t.start()
                    }
                }
                function A() {
                    if (e.apply(this, arguments)) {
                        var t = this.__zoom,
                            n = hn(this),
                            u = t.invert(n),
                            o = t.k * (Vt.shiftKey ? 0.5 : 2),
                            a = i(b(g(t, o), n, u), r.apply(this, arguments), c)
                        _x(),
                            f > 0
                                ? un(this)
                                      .transition()
                                      .duration(f)
                                      .call(m, a, n)
                                : un(this).call(y.transform, a)
                    }
                }
                function S() {
                    if (e.apply(this, arguments)) {
                        var n,
                            r,
                            i,
                            u,
                            o = x(this, arguments),
                            a = Vt.changedTouches,
                            c = a.length
                        for (bx(), r = 0; r < c; ++r)
                            (i = a[r]),
                                (u = [
                                    (u = pn(this, a, i.identifier)),
                                    this.__zoom.invert(u),
                                    i.identifier,
                                ]),
                                o.touch0
                                    ? o.touch1 || (o.touch1 = u)
                                    : ((o.touch0 = u), (n = !0))
                        if (t && ((t = clearTimeout(t)), !o.touch1))
                            return (
                                o.end(),
                                void (
                                    (u = un(this).on('dblclick.zoom')) &&
                                    u.apply(this, arguments)
                                )
                            )
                        n &&
                            ((t = setTimeout(function() {
                                t = null
                            }, d)),
                            ei(this),
                            o.start())
                    }
                }
                function N() {
                    var n,
                        e,
                        r,
                        u,
                        o = x(this, arguments),
                        a = Vt.changedTouches,
                        f = a.length
                    for (_x(), t && (t = clearTimeout(t)), n = 0; n < f; ++n)
                        (e = a[n]),
                            (r = pn(this, a, e.identifier)),
                            o.touch0 && o.touch0[2] === e.identifier
                                ? (o.touch0[0] = r)
                                : o.touch1 &&
                                  o.touch1[2] === e.identifier &&
                                  (o.touch1[0] = r)
                    if (((e = o.that.__zoom), o.touch1)) {
                        var s = o.touch0[0],
                            l = o.touch0[1],
                            h = o.touch1[0],
                            d = o.touch1[1],
                            p = (p = h[0] - s[0]) * p + (p = h[1] - s[1]) * p,
                            v = (v = d[0] - l[0]) * v + (v = d[1] - l[1]) * v
                        ;(e = g(e, Math.sqrt(p / v))),
                            (r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]),
                            (u = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2])
                    } else {
                        if (!o.touch0) return
                        ;(r = o.touch0[0]), (u = o.touch0[1])
                    }
                    o.zoom('touch', i(b(e, r, u), o.extent, c))
                }
                function E() {
                    var t,
                        e,
                        r = x(this, arguments),
                        i = Vt.changedTouches,
                        u = i.length
                    for (
                        bx(),
                            n && clearTimeout(n),
                            n = setTimeout(function() {
                                n = null
                            }, d),
                            t = 0;
                        t < u;
                        ++t
                    )
                        (e = i[t]),
                            r.touch0 && r.touch0[2] === e.identifier
                                ? delete r.touch0
                                : r.touch1 &&
                                  r.touch1[2] === e.identifier &&
                                  delete r.touch1
                    r.touch1 &&
                        !r.touch0 &&
                        ((r.touch0 = r.touch1), delete r.touch1),
                        r.touch0
                            ? (r.touch0[1] = this.__zoom.invert(r.touch0[0]))
                            : r.end()
                }
                return (
                    (y.transform = function(t, n) {
                        var e = t.selection ? t.selection() : t
                        e.property('__zoom', wx),
                            t !== e
                                ? m(t, n)
                                : e.interrupt().each(function() {
                                      x(this, arguments)
                                          .start()
                                          .zoom(
                                              null,
                                              'function' == typeof n
                                                  ? n.apply(this, arguments)
                                                  : n,
                                          )
                                          .end()
                                  })
                    }),
                    (y.scaleBy = function(t, n) {
                        y.scaleTo(t, function() {
                            return (
                                this.__zoom.k *
                                ('function' == typeof n
                                    ? n.apply(this, arguments)
                                    : n)
                            )
                        })
                    }),
                    (y.scaleTo = function(t, n) {
                        y.transform(t, function() {
                            var t = r.apply(this, arguments),
                                e = this.__zoom,
                                u = _(t),
                                o = e.invert(u),
                                a =
                                    'function' == typeof n
                                        ? n.apply(this, arguments)
                                        : n
                            return i(b(g(e, a), u, o), t, c)
                        })
                    }),
                    (y.translateBy = function(t, n, e) {
                        y.transform(t, function() {
                            return i(
                                this.__zoom.translate(
                                    'function' == typeof n
                                        ? n.apply(this, arguments)
                                        : n,
                                    'function' == typeof e
                                        ? e.apply(this, arguments)
                                        : e,
                                ),
                                r.apply(this, arguments),
                                c,
                            )
                        })
                    }),
                    (y.translateTo = function(t, n, e) {
                        y.transform(t, function() {
                            var t = r.apply(this, arguments),
                                u = this.__zoom,
                                o = _(t)
                            return i(
                                yx
                                    .translate(o[0], o[1])
                                    .scale(u.k)
                                    .translate(
                                        'function' == typeof n
                                            ? -n.apply(this, arguments)
                                            : -n,
                                        'function' == typeof e
                                            ? -e.apply(this, arguments)
                                            : -e,
                                    ),
                                t,
                                c,
                            )
                        })
                    }),
                    (w.prototype = {
                        start: function() {
                            return (
                                1 == ++this.active &&
                                    ((this.index = l.push(this) - 1),
                                    this.emit('start')),
                                this
                            )
                        },
                        zoom: function(t, n) {
                            return (
                                this.mouse &&
                                    'mouse' !== t &&
                                    (this.mouse[1] = n.invert(this.mouse[0])),
                                this.touch0 &&
                                    'touch' !== t &&
                                    (this.touch0[1] = n.invert(this.touch0[0])),
                                this.touch1 &&
                                    'touch' !== t &&
                                    (this.touch1[1] = n.invert(this.touch1[0])),
                                (this.that.__zoom = n),
                                this.emit('zoom'),
                                this
                            )
                        },
                        end: function() {
                            return (
                                0 == --this.active &&
                                    (l.splice(this.index, 1),
                                    (this.index = -1),
                                    this.emit('end')),
                                this
                            )
                        },
                        emit: function(t) {
                            Jt(new px(y, t, this.that.__zoom), h.apply, h, [
                                t,
                                this.that,
                                this.args,
                            ])
                        },
                    }),
                    (y.wheelDelta = function(t) {
                        return arguments.length
                            ? ((u = 'function' == typeof t ? t : dx(+t)), y)
                            : u
                    }),
                    (y.filter = function(t) {
                        return arguments.length
                            ? ((e = 'function' == typeof t ? t : dx(!!t)), y)
                            : e
                    }),
                    (y.touchable = function(t) {
                        return arguments.length
                            ? ((o = 'function' == typeof t ? t : dx(!!t)), y)
                            : o
                    }),
                    (y.extent = function(t) {
                        return arguments.length
                            ? ((r =
                                  'function' == typeof t
                                      ? t
                                      : dx([
                                            [+t[0][0], +t[0][1]],
                                            [+t[1][0], +t[1][1]],
                                        ])),
                              y)
                            : r
                    }),
                    (y.scaleExtent = function(t) {
                        return arguments.length
                            ? ((a[0] = +t[0]), (a[1] = +t[1]), y)
                            : [a[0], a[1]]
                    }),
                    (y.translateExtent = function(t) {
                        return arguments.length
                            ? ((c[0][0] = +t[0][0]),
                              (c[1][0] = +t[1][0]),
                              (c[0][1] = +t[0][1]),
                              (c[1][1] = +t[1][1]),
                              y)
                            : [[c[0][0], c[0][1]], [c[1][0], c[1][1]]]
                    }),
                    (y.constrain = function(t) {
                        return arguments.length ? ((i = t), y) : i
                    }),
                    (y.duration = function(t) {
                        return arguments.length ? ((f = +t), y) : f
                    }),
                    (y.interpolate = function(t) {
                        return arguments.length ? ((s = t), y) : s
                    }),
                    (y.on = function() {
                        var t = h.on.apply(h, arguments)
                        return t === h ? y : t
                    }),
                    (y.clickDistance = function(t) {
                        return arguments.length
                            ? ((v = (t = +t) * t), y)
                            : Math.sqrt(v)
                    }),
                    y
                )
            }
            e.d(n, 'version', function() {
                return '5.7.0'
            }),
                e.d(n, 'bisect', function() {
                    return c
                }),
                e.d(n, 'bisectRight', function() {
                    return o
                }),
                e.d(n, 'bisectLeft', function() {
                    return a
                }),
                e.d(n, 'ascending', function() {
                    return r
                }),
                e.d(n, 'bisector', function() {
                    return i
                }),
                e.d(n, 'cross', function() {
                    return l
                }),
                e.d(n, 'descending', function() {
                    return h
                }),
                e.d(n, 'deviation', function() {
                    return v
                }),
                e.d(n, 'extent', function() {
                    return y
                }),
                e.d(n, 'histogram', function() {
                    return C
                }),
                e.d(n, 'thresholdFreedmanDiaconis', function() {
                    return z
                }),
                e.d(n, 'thresholdScott', function() {
                    return R
                }),
                e.d(n, 'thresholdSturges', function() {
                    return T
                }),
                e.d(n, 'max', function() {
                    return D
                }),
                e.d(n, 'mean', function() {
                    return L
                }),
                e.d(n, 'median', function() {
                    return O
                }),
                e.d(n, 'merge', function() {
                    return q
                }),
                e.d(n, 'min', function() {
                    return U
                }),
                e.d(n, 'pairs', function() {
                    return f
                }),
                e.d(n, 'permute', function() {
                    return B
                }),
                e.d(n, 'quantile', function() {
                    return P
                }),
                e.d(n, 'range', function() {
                    return w
                }),
                e.d(n, 'scan', function() {
                    return F
                }),
                e.d(n, 'shuffle', function() {
                    return Y
                }),
                e.d(n, 'sum', function() {
                    return I
                }),
                e.d(n, 'ticks', function() {
                    return S
                }),
                e.d(n, 'tickIncrement', function() {
                    return N
                }),
                e.d(n, 'tickStep', function() {
                    return E
                }),
                e.d(n, 'transpose', function() {
                    return j
                }),
                e.d(n, 'variance', function() {
                    return p
                }),
                e.d(n, 'zip', function() {
                    return G
                }),
                e.d(n, 'axisTop', function() {
                    return rt
                }),
                e.d(n, 'axisRight', function() {
                    return it
                }),
                e.d(n, 'axisBottom', function() {
                    return ut
                }),
                e.d(n, 'axisLeft', function() {
                    return ot
                }),
                e.d(n, 'brush', function() {
                    return Su
                }),
                e.d(n, 'brushX', function() {
                    return ku
                }),
                e.d(n, 'brushY', function() {
                    return Au
                }),
                e.d(n, 'brushSelection', function() {
                    return Mu
                }),
                e.d(n, 'chord', function() {
                    return Du
                }),
                e.d(n, 'ribbon', function() {
                    return $u
                }),
                e.d(n, 'nest', function() {
                    return Ju
                }),
                e.d(n, 'set', function() {
                    return oo
                }),
                e.d(n, 'map', function() {
                    return Qu
                }),
                e.d(n, 'keys', function() {
                    return ao
                }),
                e.d(n, 'values', function() {
                    return co
                }),
                e.d(n, 'entries', function() {
                    return fo
                }),
                e.d(n, 'color', function() {
                    return In
                }),
                e.d(n, 'rgb', function() {
                    return Xn
                }),
                e.d(n, 'hsl', function() {
                    return Zn
                }),
                e.d(n, 'lab', function() {
                    return se
                }),
                e.d(n, 'hcl', function() {
                    return be
                }),
                e.d(n, 'lch', function() {
                    return ge
                }),
                e.d(n, 'gray', function() {
                    return fe
                }),
                e.d(n, 'cubehelix', function() {
                    return Se
                }),
                e.d(n, 'contours', function() {
                    return mo
                }),
                e.d(n, 'contourDensity', function() {
                    return So
                }),
                e.d(n, 'dispatch', function() {
                    return ht
                }),
                e.d(n, 'drag', function() {
                    return Sn
                }),
                e.d(n, 'dragDisable', function() {
                    return bn
                }),
                e.d(n, 'dragEnable', function() {
                    return _n
                }),
                e.d(n, 'dsvFormat', function() {
                    return Ro
                }),
                e.d(n, 'csvParse', function() {
                    return Lo
                }),
                e.d(n, 'csvParseRows', function() {
                    return Oo
                }),
                e.d(n, 'csvFormat', function() {
                    return qo
                }),
                e.d(n, 'csvFormatRows', function() {
                    return Uo
                }),
                e.d(n, 'tsvParse', function() {
                    return Fo
                }),
                e.d(n, 'tsvParseRows', function() {
                    return Yo
                }),
                e.d(n, 'tsvFormat', function() {
                    return Io
                }),
                e.d(n, 'tsvFormatRows', function() {
                    return jo
                }),
                e.d(n, 'easeLinear', function() {
                    return li
                }),
                e.d(n, 'easeQuad', function() {
                    return pi
                }),
                e.d(n, 'easeQuadIn', function() {
                    return hi
                }),
                e.d(n, 'easeQuadOut', function() {
                    return di
                }),
                e.d(n, 'easeQuadInOut', function() {
                    return pi
                }),
                e.d(n, 'easeCubic', function() {
                    return gi
                }),
                e.d(n, 'easeCubicIn', function() {
                    return vi
                }),
                e.d(n, 'easeCubicOut', function() {
                    return yi
                }),
                e.d(n, 'easeCubicInOut', function() {
                    return gi
                }),
                e.d(n, 'easePoly', function() {
                    return mi
                }),
                e.d(n, 'easePolyIn', function() {
                    return bi
                }),
                e.d(n, 'easePolyOut', function() {
                    return _i
                }),
                e.d(n, 'easePolyInOut', function() {
                    return mi
                }),
                e.d(n, 'easeSin', function() {
                    return Ai
                }),
                e.d(n, 'easeSinIn', function() {
                    return Mi
                }),
                e.d(n, 'easeSinOut', function() {
                    return ki
                }),
                e.d(n, 'easeSinInOut', function() {
                    return Ai
                }),
                e.d(n, 'easeExp', function() {
                    return Ei
                }),
                e.d(n, 'easeExpIn', function() {
                    return Si
                }),
                e.d(n, 'easeExpOut', function() {
                    return Ni
                }),
                e.d(n, 'easeExpInOut', function() {
                    return Ei
                }),
                e.d(n, 'easeCircle', function() {
                    return Pi
                }),
                e.d(n, 'easeCircleIn', function() {
                    return Ti
                }),
                e.d(n, 'easeCircleOut', function() {
                    return Ci
                }),
                e.d(n, 'easeCircleInOut', function() {
                    return Pi
                }),
                e.d(n, 'easeBounce', function() {
                    return ji
                }),
                e.d(n, 'easeBounceIn', function() {
                    return Ii
                }),
                e.d(n, 'easeBounceOut', function() {
                    return ji
                }),
                e.d(n, 'easeBounceInOut', function() {
                    return Hi
                }),
                e.d(n, 'easeBack', function() {
                    return Vi
                }),
                e.d(n, 'easeBackIn', function() {
                    return Gi
                }),
                e.d(n, 'easeBackOut', function() {
                    return Xi
                }),
                e.d(n, 'easeBackInOut', function() {
                    return Vi
                }),
                e.d(n, 'easeElastic', function() {
                    return Zi
                }),
                e.d(n, 'easeElasticIn', function() {
                    return Wi
                }),
                e.d(n, 'easeElasticOut', function() {
                    return Zi
                }),
                e.d(n, 'easeElasticInOut', function() {
                    return Qi
                }),
                e.d(n, 'blob', function() {
                    return Go
                }),
                e.d(n, 'buffer', function() {
                    return Vo
                }),
                e.d(n, 'dsv', function() {
                    return Qo
                }),
                e.d(n, 'csv', function() {
                    return Jo
                }),
                e.d(n, 'tsv', function() {
                    return Ko
                }),
                e.d(n, 'image', function() {
                    return ta
                }),
                e.d(n, 'json', function() {
                    return ea
                }),
                e.d(n, 'text', function() {
                    return Wo
                }),
                e.d(n, 'xml', function() {
                    return ia
                }),
                e.d(n, 'html', function() {
                    return ua
                }),
                e.d(n, 'svg', function() {
                    return oa
                }),
                e.d(n, 'forceCenter', function() {
                    return aa
                }),
                e.d(n, 'forceCollide', function() {
                    return ma
                }),
                e.d(n, 'forceLink', function() {
                    return Ma
                }),
                e.d(n, 'forceManyBody', function() {
                    return Ta
                }),
                e.d(n, 'forceRadial', function() {
                    return Ca
                }),
                e.d(n, 'forceSimulation', function() {
                    return Ea
                }),
                e.d(n, 'forceX', function() {
                    return Pa
                }),
                e.d(n, 'forceY', function() {
                    return za
                }),
                e.d(n, 'formatDefaultLocale', function() {
                    return $a
                }),
                e.d(n, 'format', function() {
                    return Fa
                }),
                e.d(n, 'formatPrefix', function() {
                    return Ya
                }),
                e.d(n, 'formatLocale', function() {
                    return Va
                }),
                e.d(n, 'formatSpecifier', function() {
                    return Oa
                }),
                e.d(n, 'precisionFixed', function() {
                    return Wa
                }),
                e.d(n, 'precisionPrefix', function() {
                    return Za
                }),
                e.d(n, 'precisionRound', function() {
                    return Qa
                }),
                e.d(n, 'geoArea', function() {
                    return jc
                }),
                e.d(n, 'geoBounds', function() {
                    return Of
                }),
                e.d(n, 'geoCentroid', function() {
                    return $f
                }),
                e.d(n, 'geoCircle', function() {
                    return us
                }),
                e.d(n, 'geoClipAntimeridian', function() {
                    return ys
                }),
                e.d(n, 'geoClipCircle', function() {
                    return gs
                }),
                e.d(n, 'geoClipExtent', function() {
                    return As
                }),
                e.d(n, 'geoClipRectangle', function() {
                    return xs
                }),
                e.d(n, 'geoContains', function() {
                    return js
                }),
                e.d(n, 'geoDistance', function() {
                    return Ds
                }),
                e.d(n, 'geoGraticule', function() {
                    return Xs
                }),
                e.d(n, 'geoGraticule10', function() {
                    return Vs
                }),
                e.d(n, 'geoInterpolate', function() {
                    return Js
                }),
                e.d(n, 'geoLength', function() {
                    return Ps
                }),
                e.d(n, 'geoPath', function() {
                    return Zl
                }),
                e.d(n, 'geoAlbers', function() {
                    return vh
                }),
                e.d(n, 'geoAlbersUsa', function() {
                    return yh
                }),
                e.d(n, 'geoAzimuthalEqualArea', function() {
                    return mh
                }),
                e.d(n, 'geoAzimuthalEqualAreaRaw', function() {
                    return _h
                }),
                e.d(n, 'geoAzimuthalEquidistant', function() {
                    return wh
                }),
                e.d(n, 'geoAzimuthalEquidistantRaw', function() {
                    return xh
                }),
                e.d(n, 'geoConicConformal', function() {
                    return Eh
                }),
                e.d(n, 'geoConicConformalRaw', function() {
                    return Nh
                }),
                e.d(n, 'geoConicEqualArea', function() {
                    return ph
                }),
                e.d(n, 'geoConicEqualAreaRaw', function() {
                    return dh
                }),
                e.d(n, 'geoConicEquidistant', function() {
                    return zh
                }),
                e.d(n, 'geoConicEquidistantRaw', function() {
                    return Ph
                }),
                e.d(n, 'geoEqualEarth', function() {
                    return Bh
                }),
                e.d(n, 'geoEqualEarthRaw', function() {
                    return Uh
                }),
                e.d(n, 'geoEquirectangular', function() {
                    return Ch
                }),
                e.d(n, 'geoEquirectangularRaw', function() {
                    return Th
                }),
                e.d(n, 'geoGnomonic', function() {
                    return Yh
                }),
                e.d(n, 'geoGnomonicRaw', function() {
                    return Fh
                }),
                e.d(n, 'geoIdentity', function() {
                    return jh
                }),
                e.d(n, 'geoProjection', function() {
                    return sh
                }),
                e.d(n, 'geoProjectionMutator', function() {
                    return lh
                }),
                e.d(n, 'geoMercator', function() {
                    return kh
                }),
                e.d(n, 'geoMercatorRaw', function() {
                    return Mh
                }),
                e.d(n, 'geoNaturalEarth1', function() {
                    return Gh
                }),
                e.d(n, 'geoNaturalEarth1Raw', function() {
                    return Hh
                }),
                e.d(n, 'geoOrthographic', function() {
                    return Vh
                }),
                e.d(n, 'geoOrthographicRaw', function() {
                    return Xh
                }),
                e.d(n, 'geoStereographic', function() {
                    return Wh
                }),
                e.d(n, 'geoStereographicRaw', function() {
                    return $h
                }),
                e.d(n, 'geoTransverseMercator', function() {
                    return Qh
                }),
                e.d(n, 'geoTransverseMercatorRaw', function() {
                    return Zh
                }),
                e.d(n, 'geoRotation', function() {
                    return es
                }),
                e.d(n, 'geoStream', function() {
                    return Lc
                }),
                e.d(n, 'geoTransform', function() {
                    return Ql
                }),
                e.d(n, 'cluster', function() {
                    return Jh.cluster
                }),
                e.d(n, 'hierarchy', function() {
                    return Jh.hierarchy
                }),
                e.d(n, 'pack', function() {
                    return Jh.pack
                }),
                e.d(n, 'packSiblings', function() {
                    return Jh.packSiblings
                }),
                e.d(n, 'packEnclose', function() {
                    return Jh.packEnclose
                }),
                e.d(n, 'partition', function() {
                    return Jh.partition
                }),
                e.d(n, 'stratify', function() {
                    return Jh.stratify
                }),
                e.d(n, 'tree', function() {
                    return Jh.tree
                }),
                e.d(n, 'treemap', function() {
                    return Jh.treemap
                }),
                e.d(n, 'treemapBinary', function() {
                    return Jh.treemapBinary
                }),
                e.d(n, 'treemapDice', function() {
                    return Jh.treemapDice
                }),
                e.d(n, 'treemapSlice', function() {
                    return Jh.treemapSlice
                }),
                e.d(n, 'treemapSliceDice', function() {
                    return Jh.treemapSliceDice
                }),
                e.d(n, 'treemapSquarify', function() {
                    return Jh.treemapSquarify
                }),
                e.d(n, 'treemapResquarify', function() {
                    return Jh.treemapResquarify
                }),
                e.d(n, 'interpolate', function() {
                    return Qe
                }),
                e.d(n, 'interpolateArray', function() {
                    return Fe
                }),
                e.d(n, 'interpolateBasis', function() {
                    return Te
                }),
                e.d(n, 'interpolateBasisClosed', function() {
                    return Ce
                }),
                e.d(n, 'interpolateDate', function() {
                    return Ye
                }),
                e.d(n, 'interpolateDiscrete', function() {
                    return Je
                }),
                e.d(n, 'interpolateHue', function() {
                    return Ke
                }),
                e.d(n, 'interpolateNumber', function() {
                    return Ie
                }),
                e.d(n, 'interpolateObject', function() {
                    return je
                }),
                e.d(n, 'interpolateRound', function() {
                    return tr
                }),
                e.d(n, 'interpolateString', function() {
                    return Ze
                }),
                e.d(n, 'interpolateTransformCss', function() {
                    return ur
                }),
                e.d(n, 'interpolateTransformSvg', function() {
                    return or
                }),
                e.d(n, 'interpolateZoom', function() {
                    return fr
                }),
                e.d(n, 'interpolateRgb', function() {
                    return Oe
                }),
                e.d(n, 'interpolateRgbBasis', function() {
                    return Ue
                }),
                e.d(n, 'interpolateRgbBasisClosed', function() {
                    return Be
                }),
                e.d(n, 'interpolateHsl', function() {
                    return lr
                }),
                e.d(n, 'interpolateHslLong', function() {
                    return hr
                }),
                e.d(n, 'interpolateLab', function() {
                    return dr
                }),
                e.d(n, 'interpolateHcl', function() {
                    return vr
                }),
                e.d(n, 'interpolateHclLong', function() {
                    return yr
                }),
                e.d(n, 'interpolateCubehelix', function() {
                    return br
                }),
                e.d(n, 'interpolateCubehelixLong', function() {
                    return _r
                }),
                e.d(n, 'piecewise', function() {
                    return mr
                }),
                e.d(n, 'quantize', function() {
                    return Mr
                }),
                e.d(n, 'path', function() {
                    return Iu
                }),
                e.d(n, 'polygonArea', function() {
                    return Kh
                }),
                e.d(n, 'polygonCentroid', function() {
                    return td
                }),
                e.d(n, 'polygonHull', function() {
                    return id
                }),
                e.d(n, 'polygonContains', function() {
                    return ud
                }),
                e.d(n, 'polygonLength', function() {
                    return od
                }),
                e.d(n, 'quadtree', function() {
                    return pa
                }),
                e.d(n, 'randomUniform', function() {
                    return cd
                }),
                e.d(n, 'randomNormal', function() {
                    return fd
                }),
                e.d(n, 'randomLogNormal', function() {
                    return sd
                }),
                e.d(n, 'randomBates', function() {
                    return hd
                }),
                e.d(n, 'randomIrwinHall', function() {
                    return ld
                }),
                e.d(n, 'randomExponential', function() {
                    return dd
                }),
                e.d(n, 'scaleBand', function() {
                    return _d
                }),
                e.d(n, 'scalePoint', function() {
                    return md
                }),
                e.d(n, 'scaleIdentity', function() {
                    return zd
                }),
                e.d(n, 'scaleLinear', function() {
                    return Pd
                }),
                e.d(n, 'scaleLog', function() {
                    return Fd
                }),
                e.d(n, 'scaleOrdinal', function() {
                    return bd
                }),
                e.d(n, 'scaleImplicit', function() {
                    return gd
                }),
                e.d(n, 'scalePow', function() {
                    return Id
                }),
                e.d(n, 'scaleSqrt', function() {
                    return jd
                }),
                e.d(n, 'scaleQuantile', function() {
                    return Hd
                }),
                e.d(n, 'scaleQuantize', function() {
                    return Gd
                }),
                e.d(n, 'scaleThreshold', function() {
                    return Xd
                }),
                e.d(n, 'scaleTime', function() {
                    return Iy
                }),
                e.d(n, 'scaleUtc', function() {
                    return jy
                }),
                e.d(n, 'scaleSequential', function() {
                    return Hy
                }),
                e.d(n, 'scaleDiverging', function() {
                    return Gy
                }),
                e.d(n, 'schemeCategory10', function() {
                    return Vy
                }),
                e.d(n, 'schemeAccent', function() {
                    return $y
                }),
                e.d(n, 'schemeDark2', function() {
                    return Wy
                }),
                e.d(n, 'schemePaired', function() {
                    return Zy
                }),
                e.d(n, 'schemePastel1', function() {
                    return Qy
                }),
                e.d(n, 'schemePastel2', function() {
                    return Jy
                }),
                e.d(n, 'schemeSet1', function() {
                    return Ky
                }),
                e.d(n, 'schemeSet2', function() {
                    return tg
                }),
                e.d(n, 'schemeSet3', function() {
                    return ng
                }),
                e.d(n, 'interpolateBrBG', function() {
                    return ig
                }),
                e.d(n, 'schemeBrBG', function() {
                    return rg
                }),
                e.d(n, 'interpolatePRGn', function() {
                    return og
                }),
                e.d(n, 'schemePRGn', function() {
                    return ug
                }),
                e.d(n, 'interpolatePiYG', function() {
                    return cg
                }),
                e.d(n, 'schemePiYG', function() {
                    return ag
                }),
                e.d(n, 'interpolatePuOr', function() {
                    return sg
                }),
                e.d(n, 'schemePuOr', function() {
                    return fg
                }),
                e.d(n, 'interpolateRdBu', function() {
                    return hg
                }),
                e.d(n, 'schemeRdBu', function() {
                    return lg
                }),
                e.d(n, 'interpolateRdGy', function() {
                    return pg
                }),
                e.d(n, 'schemeRdGy', function() {
                    return dg
                }),
                e.d(n, 'interpolateRdYlBu', function() {
                    return yg
                }),
                e.d(n, 'schemeRdYlBu', function() {
                    return vg
                }),
                e.d(n, 'interpolateRdYlGn', function() {
                    return bg
                }),
                e.d(n, 'schemeRdYlGn', function() {
                    return gg
                }),
                e.d(n, 'interpolateSpectral', function() {
                    return mg
                }),
                e.d(n, 'schemeSpectral', function() {
                    return _g
                }),
                e.d(n, 'interpolateBuGn', function() {
                    return wg
                }),
                e.d(n, 'schemeBuGn', function() {
                    return xg
                }),
                e.d(n, 'interpolateBuPu', function() {
                    return kg
                }),
                e.d(n, 'schemeBuPu', function() {
                    return Mg
                }),
                e.d(n, 'interpolateGnBu', function() {
                    return Sg
                }),
                e.d(n, 'schemeGnBu', function() {
                    return Ag
                }),
                e.d(n, 'interpolateOrRd', function() {
                    return Eg
                }),
                e.d(n, 'schemeOrRd', function() {
                    return Ng
                }),
                e.d(n, 'interpolatePuBuGn', function() {
                    return Cg
                }),
                e.d(n, 'schemePuBuGn', function() {
                    return Tg
                }),
                e.d(n, 'interpolatePuBu', function() {
                    return zg
                }),
                e.d(n, 'schemePuBu', function() {
                    return Pg
                }),
                e.d(n, 'interpolatePuRd', function() {
                    return Dg
                }),
                e.d(n, 'schemePuRd', function() {
                    return Rg
                }),
                e.d(n, 'interpolateRdPu', function() {
                    return Og
                }),
                e.d(n, 'schemeRdPu', function() {
                    return Lg
                }),
                e.d(n, 'interpolateYlGnBu', function() {
                    return Ug
                }),
                e.d(n, 'schemeYlGnBu', function() {
                    return qg
                }),
                e.d(n, 'interpolateYlGn', function() {
                    return Fg
                }),
                e.d(n, 'schemeYlGn', function() {
                    return Bg
                }),
                e.d(n, 'interpolateYlOrBr', function() {
                    return Ig
                }),
                e.d(n, 'schemeYlOrBr', function() {
                    return Yg
                }),
                e.d(n, 'interpolateYlOrRd', function() {
                    return Hg
                }),
                e.d(n, 'schemeYlOrRd', function() {
                    return jg
                }),
                e.d(n, 'interpolateBlues', function() {
                    return Xg
                }),
                e.d(n, 'schemeBlues', function() {
                    return Gg
                }),
                e.d(n, 'interpolateGreens', function() {
                    return $g
                }),
                e.d(n, 'schemeGreens', function() {
                    return Vg
                }),
                e.d(n, 'interpolateGreys', function() {
                    return Zg
                }),
                e.d(n, 'schemeGreys', function() {
                    return Wg
                }),
                e.d(n, 'interpolatePurples', function() {
                    return Jg
                }),
                e.d(n, 'schemePurples', function() {
                    return Qg
                }),
                e.d(n, 'interpolateReds', function() {
                    return tb
                }),
                e.d(n, 'schemeReds', function() {
                    return Kg
                }),
                e.d(n, 'interpolateOranges', function() {
                    return eb
                }),
                e.d(n, 'schemeOranges', function() {
                    return nb
                }),
                e.d(n, 'interpolateCubehelixDefault', function() {
                    return rb
                }),
                e.d(n, 'interpolateRainbow', function() {
                    return ab
                }),
                e.d(n, 'interpolateWarm', function() {
                    return ib
                }),
                e.d(n, 'interpolateCool', function() {
                    return ub
                }),
                e.d(n, 'interpolateSinebow', function() {
                    return lb
                }),
                e.d(n, 'interpolateViridis', function() {
                    return db
                }),
                e.d(n, 'interpolateMagma', function() {
                    return pb
                }),
                e.d(n, 'interpolateInferno', function() {
                    return vb
                }),
                e.d(n, 'interpolatePlasma', function() {
                    return yb
                }),
                e.d(n, 'create', function() {
                    return on
                }),
                e.d(n, 'creator', function() {
                    return yt
                }),
                e.d(n, 'local', function() {
                    return cn
                }),
                e.d(n, 'matcher', function() {
                    return kt
                }),
                e.d(n, 'mouse', function() {
                    return hn
                }),
                e.d(n, 'namespace', function() {
                    return vt
                }),
                e.d(n, 'namespaces', function() {
                    return pt
                }),
                e.d(n, 'clientPoint', function() {
                    return ln
                }),
                e.d(n, 'select', function() {
                    return un
                }),
                e.d(n, 'selectAll', function() {
                    return dn
                }),
                e.d(n, 'selection', function() {
                    return rn
                }),
                e.d(n, 'selector', function() {
                    return bt
                }),
                e.d(n, 'selectorAll', function() {
                    return mt
                }),
                e.d(n, 'style', function() {
                    return zt
                }),
                e.d(n, 'touch', function() {
                    return pn
                }),
                e.d(n, 'touches', function() {
                    return vn
                }),
                e.d(n, 'window', function() {
                    return Pt
                }),
                e.d(n, 'event', function() {
                    return Vt
                }),
                e.d(n, 'customEvent', function() {
                    return Jt
                }),
                e.d(n, 'arc', function() {
                    return Ob
                }),
                e.d(n, 'area', function() {
                    return Ib
                }),
                e.d(n, 'line', function() {
                    return Yb
                }),
                e.d(n, 'pie', function() {
                    return Gb
                }),
                e.d(n, 'areaRadial', function() {
                    return Qb
                }),
                e.d(n, 'radialArea', function() {
                    return Qb
                }),
                e.d(n, 'lineRadial', function() {
                    return Zb
                }),
                e.d(n, 'radialLine', function() {
                    return Zb
                }),
                e.d(n, 'pointRadial', function() {
                    return Jb
                }),
                e.d(n, 'linkHorizontal', function() {
                    return o_
                }),
                e.d(n, 'linkVertical', function() {
                    return a_
                }),
                e.d(n, 'linkRadial', function() {
                    return c_
                }),
                e.d(n, 'symbol', function() {
                    return S_
                }),
                e.d(n, 'symbols', function() {
                    return A_
                }),
                e.d(n, 'symbolCircle', function() {
                    return f_
                }),
                e.d(n, 'symbolCross', function() {
                    return s_
                }),
                e.d(n, 'symbolDiamond', function() {
                    return d_
                }),
                e.d(n, 'symbolSquare', function() {
                    return b_
                }),
                e.d(n, 'symbolStar', function() {
                    return g_
                }),
                e.d(n, 'symbolTriangle', function() {
                    return m_
                }),
                e.d(n, 'symbolWye', function() {
                    return k_
                }),
                e.d(n, 'curveBasisClosed', function() {
                    return z_
                }),
                e.d(n, 'curveBasisOpen', function() {
                    return D_
                }),
                e.d(n, 'curveBasis', function() {
                    return C_
                }),
                e.d(n, 'curveBundle', function() {
                    return O_
                }),
                e.d(n, 'curveCardinalClosed', function() {
                    return Y_
                }),
                e.d(n, 'curveCardinalOpen', function() {
                    return j_
                }),
                e.d(n, 'curveCardinal', function() {
                    return B_
                }),
                e.d(n, 'curveCatmullRomClosed', function() {
                    return $_
                }),
                e.d(n, 'curveCatmullRomOpen', function() {
                    return Z_
                }),
                e.d(n, 'curveCatmullRom', function() {
                    return X_
                }),
                e.d(n, 'curveLinearClosed', function() {
                    return J_
                }),
                e.d(n, 'curveLinear', function() {
                    return Ub
                }),
                e.d(n, 'curveMonotoneX', function() {
                    return om
                }),
                e.d(n, 'curveMonotoneY', function() {
                    return am
                }),
                e.d(n, 'curveNatural', function() {
                    return sm
                }),
                e.d(n, 'curveStep', function() {
                    return hm
                }),
                e.d(n, 'curveStepAfter', function() {
                    return pm
                }),
                e.d(n, 'curveStepBefore', function() {
                    return dm
                }),
                e.d(n, 'stack', function() {
                    return bm
                }),
                e.d(n, 'stackOffsetExpand', function() {
                    return _m
                }),
                e.d(n, 'stackOffsetDiverging', function() {
                    return mm
                }),
                e.d(n, 'stackOffsetNone', function() {
                    return vm
                }),
                e.d(n, 'stackOffsetSilhouette', function() {
                    return xm
                }),
                e.d(n, 'stackOffsetWiggle', function() {
                    return wm
                }),
                e.d(n, 'stackOrderAscending', function() {
                    return Mm
                }),
                e.d(n, 'stackOrderDescending', function() {
                    return Am
                }),
                e.d(n, 'stackOrderInsideOut', function() {
                    return Sm
                }),
                e.d(n, 'stackOrderNone', function() {
                    return ym
                }),
                e.d(n, 'stackOrderReverse', function() {
                    return Nm
                }),
                e.d(n, 'timeInterval', function() {
                    return Wd
                }),
                e.d(n, 'timeMillisecond', function() {
                    return Qd
                }),
                e.d(n, 'timeMilliseconds', function() {
                    return Jd
                }),
                e.d(n, 'utcMillisecond', function() {
                    return Qd
                }),
                e.d(n, 'utcMilliseconds', function() {
                    return Jd
                }),
                e.d(n, 'timeSecond', function() {
                    return ep
                }),
                e.d(n, 'timeSeconds', function() {
                    return rp
                }),
                e.d(n, 'utcSecond', function() {
                    return ep
                }),
                e.d(n, 'utcSeconds', function() {
                    return rp
                }),
                e.d(n, 'timeMinute', function() {
                    return up
                }),
                e.d(n, 'timeMinutes', function() {
                    return op
                }),
                e.d(n, 'timeHour', function() {
                    return cp
                }),
                e.d(n, 'timeHours', function() {
                    return fp
                }),
                e.d(n, 'timeDay', function() {
                    return lp
                }),
                e.d(n, 'timeDays', function() {
                    return hp
                }),
                e.d(n, 'timeWeek', function() {
                    return pp
                }),
                e.d(n, 'timeWeeks', function() {
                    return xp
                }),
                e.d(n, 'timeSunday', function() {
                    return pp
                }),
                e.d(n, 'timeSundays', function() {
                    return xp
                }),
                e.d(n, 'timeMonday', function() {
                    return vp
                }),
                e.d(n, 'timeMondays', function() {
                    return wp
                }),
                e.d(n, 'timeTuesday', function() {
                    return yp
                }),
                e.d(n, 'timeTuesdays', function() {
                    return Mp
                }),
                e.d(n, 'timeWednesday', function() {
                    return gp
                }),
                e.d(n, 'timeWednesdays', function() {
                    return kp
                }),
                e.d(n, 'timeThursday', function() {
                    return bp
                }),
                e.d(n, 'timeThursdays', function() {
                    return Ap
                }),
                e.d(n, 'timeFriday', function() {
                    return _p
                }),
                e.d(n, 'timeFridays', function() {
                    return Sp
                }),
                e.d(n, 'timeSaturday', function() {
                    return mp
                }),
                e.d(n, 'timeSaturdays', function() {
                    return Np
                }),
                e.d(n, 'timeMonth', function() {
                    return Tp
                }),
                e.d(n, 'timeMonths', function() {
                    return Cp
                }),
                e.d(n, 'timeYear', function() {
                    return zp
                }),
                e.d(n, 'timeYears', function() {
                    return Rp
                }),
                e.d(n, 'utcMinute', function() {
                    return Lp
                }),
                e.d(n, 'utcMinutes', function() {
                    return Op
                }),
                e.d(n, 'utcHour', function() {
                    return Up
                }),
                e.d(n, 'utcHours', function() {
                    return Bp
                }),
                e.d(n, 'utcDay', function() {
                    return Yp
                }),
                e.d(n, 'utcDays', function() {
                    return Ip
                }),
                e.d(n, 'utcWeek', function() {
                    return Hp
                }),
                e.d(n, 'utcWeeks', function() {
                    return Qp
                }),
                e.d(n, 'utcSunday', function() {
                    return Hp
                }),
                e.d(n, 'utcSundays', function() {
                    return Qp
                }),
                e.d(n, 'utcMonday', function() {
                    return Gp
                }),
                e.d(n, 'utcMondays', function() {
                    return Jp
                }),
                e.d(n, 'utcTuesday', function() {
                    return Xp
                }),
                e.d(n, 'utcTuesdays', function() {
                    return Kp
                }),
                e.d(n, 'utcWednesday', function() {
                    return Vp
                }),
                e.d(n, 'utcWednesdays', function() {
                    return tv
                }),
                e.d(n, 'utcThursday', function() {
                    return $p
                }),
                e.d(n, 'utcThursdays', function() {
                    return nv
                }),
                e.d(n, 'utcFriday', function() {
                    return Wp
                }),
                e.d(n, 'utcFridays', function() {
                    return ev
                }),
                e.d(n, 'utcSaturday', function() {
                    return Zp
                }),
                e.d(n, 'utcSaturdays', function() {
                    return rv
                }),
                e.d(n, 'utcMonth', function() {
                    return uv
                }),
                e.d(n, 'utcMonths', function() {
                    return ov
                }),
                e.d(n, 'utcYear', function() {
                    return cv
                }),
                e.d(n, 'utcYears', function() {
                    return fv
                }),
                e.d(n, 'timeFormatDefaultLocale', function() {
                    return Ty
                }),
                e.d(n, 'timeFormat', function() {
                    return vv
                }),
                e.d(n, 'timeParse', function() {
                    return yv
                }),
                e.d(n, 'utcFormat', function() {
                    return gv
                }),
                e.d(n, 'utcParse', function() {
                    return bv
                }),
                e.d(n, 'timeFormatLocale', function() {
                    return dv
                }),
                e.d(n, 'isoFormat', function() {
                    return Cy
                }),
                e.d(n, 'isoParse', function() {
                    return Py
                }),
                e.d(n, 'now', function() {
                    return Rr
                }),
                e.d(n, 'timer', function() {
                    return Or
                }),
                e.d(n, 'timerFlush', function() {
                    return qr
                }),
                e.d(n, 'timeout', function() {
                    return Yr
                }),
                e.d(n, 'interval', function() {
                    return Ir
                }),
                e.d(n, 'transition', function() {
                    return ci
                }),
                e.d(n, 'active', function() {
                    return nu
                }),
                e.d(n, 'interrupt', function() {
                    return ei
                }),
                e.d(n, 'voronoi', function() {
                    return hx
                }),
                e.d(n, 'zoom', function() {
                    return Sx
                }),
                e.d(n, 'zoomTransform', function() {
                    return gx
                }),
                e.d(n, 'zoomIdentity', function() {
                    return yx
                })
        },
        94: function(t, n, e) {
            'use strict'
            /** @license React v16.5.2
             * schedule.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ Object.defineProperty(n, '__esModule', { value: !0 })
            var r = null,
                i = !1,
                u = !1,
                o =
                    'object' == typeof performance &&
                    'function' == typeof performance.now,
                a = {
                    timeRemaining: o
                        ? function() {
                              var t = v() - performance.now()
                              return 0 < t ? t : 0
                          }
                        : function() {
                              var t = v() - Date.now()
                              return 0 < t ? t : 0
                          },
                    didTimeout: !1,
                }
            function c() {
                if (!i) {
                    var t = r.timesOutAt
                    u ? p() : (u = !0), d(s, t)
                }
            }
            function f() {
                var t = r,
                    n = r.next
                if (r === n) r = null
                else {
                    var e = r.previous
                    ;(r = e.next = n), (n.previous = e)
                }
                ;(t.next = t.previous = null), (t = t.callback)(a)
            }
            function s(t) {
                ;(i = !0), (a.didTimeout = t)
                try {
                    if (t)
                        for (; null !== r; ) {
                            var e = n.unstable_now()
                            if (!(r.timesOutAt <= e)) break
                            do {
                                f()
                            } while (null !== r && r.timesOutAt <= e)
                        }
                    else if (null !== r)
                        do {
                            f()
                        } while (null !== r && 0 < v() - n.unstable_now())
                } finally {
                    ;(i = !1), null !== r ? c() : (u = !1)
                }
            }
            var l,
                h,
                d,
                p,
                v,
                y = Date,
                g = 'function' == typeof setTimeout ? setTimeout : void 0,
                b = 'function' == typeof clearTimeout ? clearTimeout : void 0,
                _ =
                    'function' == typeof requestAnimationFrame
                        ? requestAnimationFrame
                        : void 0,
                m =
                    'function' == typeof cancelAnimationFrame
                        ? cancelAnimationFrame
                        : void 0
            function x(t) {
                ;(l = _(function(n) {
                    b(h), t(n)
                })),
                    (h = g(function() {
                        m(l), t(n.unstable_now())
                    }, 100))
            }
            if (o) {
                var w = performance
                n.unstable_now = function() {
                    return w.now()
                }
            } else
                n.unstable_now = function() {
                    return y.now()
                }
            if ('undefined' == typeof window) {
                var M = -1
                ;(d = function(t) {
                    M = setTimeout(t, 0, !0)
                }),
                    (p = function() {
                        clearTimeout(M)
                    }),
                    (v = function() {
                        return 0
                    })
            } else if (window._schedMock) {
                var k = window._schedMock
                ;(d = k[0]), (p = k[1]), (v = k[2])
            } else {
                'undefined' != typeof console &&
                    ('function' != typeof _ &&
                        console.error(
                            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
                        ),
                    'function' != typeof m &&
                        console.error(
                            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills",
                        ))
                var A = null,
                    S = !1,
                    N = -1,
                    E = !1,
                    T = !1,
                    C = 0,
                    P = 33,
                    z = 33
                v = function() {
                    return C
                }
                var R =
                    '__reactIdleCallback$' +
                    Math.random()
                        .toString(36)
                        .slice(2)
                window.addEventListener(
                    'message',
                    function(t) {
                        if (t.source === window && t.data === R) {
                            S = !1
                            var e = n.unstable_now()
                            if (((t = !1), 0 >= C - e)) {
                                if (!(-1 !== N && N <= e))
                                    return void (E || ((E = !0), x(D)))
                                t = !0
                            }
                            if (((N = -1), (e = A), (A = null), null !== e)) {
                                T = !0
                                try {
                                    e(t)
                                } finally {
                                    T = !1
                                }
                            }
                        }
                    },
                    !1,
                )
                var D = function(t) {
                    E = !1
                    var n = t - C + z
                    n < z && P < z
                        ? (8 > n && (n = 8), (z = n < P ? P : n))
                        : (P = n),
                        (C = t + z),
                        S || ((S = !0), window.postMessage(R, '*'))
                }
                ;(d = function(t, n) {
                    ;(A = t),
                        (N = n),
                        T ? window.postMessage(R, '*') : E || ((E = !0), x(D))
                }),
                    (p = function() {
                        ;(A = null), (S = !1), (N = -1)
                    })
            }
            ;(n.unstable_scheduleWork = function(t, e) {
                var i = n.unstable_now()
                if (
                    ((t = {
                        callback: t,
                        timesOutAt: (e =
                            null != e &&
                            null !== e.timeout &&
                            void 0 !== e.timeout
                                ? i + e.timeout
                                : i + 5e3),
                        next: null,
                        previous: null,
                    }),
                    null === r)
                )
                    (r = t.next = t.previous = t), c()
                else {
                    i = null
                    var u = r
                    do {
                        if (u.timesOutAt > e) {
                            i = u
                            break
                        }
                        u = u.next
                    } while (u !== r)
                    null === i ? (i = r) : i === r && ((r = t), c()),
                        ((e = i.previous).next = i.previous = t),
                        (t.next = i),
                        (t.previous = e)
                }
                return t
            }),
                (n.unstable_cancelScheduledWork = function(t) {
                    var n = t.next
                    if (null !== n) {
                        if (n === t) r = null
                        else {
                            t === r && (r = n)
                            var e = t.previous
                            ;(e.next = n), (n.previous = e)
                        }
                        t.next = t.previous = null
                    }
                })
        },
    },
    [[360, 0, 1]],
])
