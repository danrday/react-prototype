;(window.webpackJsonp = window.webpackJsonp || []).push([
    [9],
    {
        18: function(e, t, r) {
            e.exports = r(25)
        },
        25: function(e, t, r) {
            'use strict'
            var n = r(19),
                o = r(5)
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = void 0)
            var a = o(r(26)),
                f = o(r(44)),
                i = o(r(6)),
                l = o(r(7)),
                p = o(r(14)),
                s = o(r(15)),
                u = o(r(16)),
                c = o(r(32)),
                h = o(r(11)),
                d = r(54),
                v = n(r(0)),
                y = (o(r(9)), n(r(31))),
                w = r(20)
            ;(0, w.execOnce)(w.warn)
            var m = (function(e) {
                function t() {
                    var e, r, n, o, a, l
                    ;(0, i.default)(this, t)
                    for (
                        var u = arguments.length, v = new Array(u), m = 0;
                        m < u;
                        m++
                    )
                        v[m] = arguments[m]
                    return (
                        (r = (0, p.default)(
                            this,
                            (e = (0, s.default)(t)).call.apply(
                                e,
                                [this].concat(v),
                            ),
                        )),
                        (0, h.default)(
                            (0, c.default)((0, c.default)(r)),
                            'formatUrls',
                            ((n = function(e, t) {
                                return {
                                    href:
                                        e && 'object' === (0, f.default)(e)
                                            ? (0, d.format)(e)
                                            : e,
                                    as:
                                        t && 'object' === (0, f.default)(t)
                                            ? (0, d.format)(t)
                                            : t,
                                }
                            }),
                            (o = null),
                            (a = null),
                            (l = null),
                            function(e, t) {
                                if (e === o && t === a) return l
                                var r = n(e, t)
                                return (o = e), (a = t), (l = r), r
                            }),
                        ),
                        (0, h.default)(
                            (0, c.default)((0, c.default)(r)),
                            'linkClicked',
                            function(e) {
                                var t = e.currentTarget,
                                    n = t.nodeName,
                                    o = t.target
                                if (
                                    'A' !== n ||
                                    !(
                                        (o && '_self' !== o) ||
                                        e.metaKey ||
                                        e.ctrlKey ||
                                        e.shiftKey ||
                                        (e.nativeEvent &&
                                            2 === e.nativeEvent.which)
                                    )
                                ) {
                                    var a = r.formatUrls(
                                            r.props.href,
                                            r.props.as,
                                        ),
                                        f = a.href,
                                        i = a.as
                                    if (
                                        (function(e) {
                                            var t = (0, d.parse)(e, !1, !0),
                                                r = (0, d.parse)(
                                                    (0, w.getLocationOrigin)(),
                                                    !1,
                                                    !0,
                                                )
                                            return (
                                                !t.host ||
                                                (t.protocol === r.protocol &&
                                                    t.host === r.host)
                                            )
                                        })(f)
                                    ) {
                                        var l = window.location.pathname
                                        ;(f = (0, d.resolve)(l, f)),
                                            (i = i ? (0, d.resolve)(l, i) : f),
                                            e.preventDefault()
                                        var p = r.props.scroll
                                        null == p && (p = i.indexOf('#') < 0)
                                        var s = r.props.replace
                                            ? 'replace'
                                            : 'push'
                                        y.default[s](f, i, {
                                            shallow: r.props.shallow,
                                        })
                                            .then(function(e) {
                                                e &&
                                                    p &&
                                                    (window.scrollTo(0, 0),
                                                    document.body.focus())
                                            })
                                            .catch(function(e) {
                                                r.props.onError &&
                                                    r.props.onError(e)
                                            })
                                    }
                                }
                            },
                        ),
                        r
                    )
                }
                return (
                    (0, u.default)(t, e),
                    (0, l.default)(t, [
                        {
                            key: 'componentDidMount',
                            value: function() {
                                this.prefetch()
                            },
                        },
                        {
                            key: 'componentDidUpdate',
                            value: function(e) {
                                ;(0, a.default)(this.props.href) !==
                                    (0, a.default)(e.href) && this.prefetch()
                            },
                        },
                        {
                            key: 'prefetch',
                            value: function() {
                                if (
                                    this.props.prefetch &&
                                    'undefined' != typeof window
                                ) {
                                    var e = window.location.pathname,
                                        t = this.formatUrls(
                                            this.props.href,
                                            this.props.as,
                                        ).href,
                                        r = (0, d.resolve)(e, t)
                                    y.default.prefetch(r)
                                }
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this,
                                    t = this.props.children,
                                    r = this.formatUrls(
                                        this.props.href,
                                        this.props.as,
                                    ),
                                    n = r.href,
                                    o = r.as
                                'string' == typeof t &&
                                    (t = v.default.createElement('a', null, t))
                                var a = v.Children.only(t),
                                    f = {
                                        onClick: function(t) {
                                            a.props &&
                                                'function' ==
                                                    typeof a.props.onClick &&
                                                a.props.onClick(t),
                                                t.defaultPrevented ||
                                                    e.linkClicked(t)
                                        },
                                    }
                                return (
                                    (!this.props.passHref &&
                                        ('a' !== a.type ||
                                            'href' in a.props)) ||
                                        (f.href = o || n),
                                    f.href &&
                                        'undefined' != typeof __NEXT_DATA__ &&
                                        __NEXT_DATA__.nextExport &&
                                        (f.href = (0,
                                        y._rewriteUrlForNextExport)(f.href)),
                                    v.default.cloneElement(a, f)
                                )
                            },
                        },
                    ]),
                    t
                )
            })(v.Component)
            t.default = m
        },
        26: function(e, t, r) {
            e.exports = r(27)
        },
        27: function(e, t, r) {
            var n = r(2),
                o = n.JSON || (n.JSON = { stringify: JSON.stringify })
            e.exports = function(e) {
                return o.stringify.apply(o, arguments)
            }
        },
        362: function(e, t, r) {
            __NEXT_REGISTER_PAGE('/', function() {
                return (e.exports = r(363)), { page: e.exports.default }
            })
        },
        363: function(e, t, r) {
            'use strict'
            r.r(t)
            var n = r(0),
                o = r.n(n)
            r(18)
            t.default = function(e) {
                return o.a.createElement(
                    'div',
                    null,
                    'Home page. Version: 0.0.01',
                )
            }
        },
    },
    [[362, 0, 1]],
])
